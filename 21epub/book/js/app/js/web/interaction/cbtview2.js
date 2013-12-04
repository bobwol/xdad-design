requirejs.config({
	waitSeconds:100,
	paths:path,
    shim:shim
});
if(window.location.href.indexOf('-debug')==-1){
	this.console = {
		log:function(){

		},
		info:function(){
			
		}
	};
};
require(['text!template/page.js','text!template/message.js','text!template/element_view.js','text!template/preload.js','text!template/animateitem_view.js','jquery','jquery.nanoscroller','jquery.fullscreen','TweenMax','animation','buzz','videojs','jswait','underscore','backbone','interaction_view','classList','revealJS','preview_model/image','preview_model/preload','preview_model/richtext','preview_model/animation_view','preview_model/slide','preview_model/audio','preview_model/video','preview_model/cycleimage','preview_model/action','preview_model/page','preview_model/chapter'],function(PageTemplate,MessageTemplate,ElementTemplate,PreloadTemplate,AnimateElementTemplate){
	 window.PageTemplate=PageTemplate;
     window.MessageTemplate=MessageTemplate;
	 window.ElementTemplate=ElementTemplate;
	 window.AnimateElementTemplate=AnimateElementTemplate;
	 window.PreloadTemplate=PreloadTemplate;
	getPageIds=function(){
		var returned=[];
		$('.reveal').find('section').each(function(){
			returned.push($(this).attr('id'));
		})
		return returned;
	};
	interaction_view.checkPageLoad=function(pageid){
		if(!interaction_view.pagecheck) interaction_view.pagecheck=interaction_view.ipagelist.pluck('id');
		interaction_view.pagecheck=_.reject(interaction_view.pagecheck,function(i){return i==pageid;});
		if(interaction_view.pagecheck.length==0){
			interaction_view.doPreload();
		}
	};
   interaction_view.finishPagePreload=function(pageid){
		if(!interaction_view.pagepreloadcheck) {
			interaction_view.pagepreloadcheck=interaction_view.ipagelist.pluck('id');
		}
		interaction_view.pagepreloadcheck=_.reject(interaction_view.pagepreloadcheck,function(i){return i==pageid;});
		var page=interaction_view.ipagelist.get(pageid);
		page.set('loaded',true);
		interaction_view.donext(page.id);
		if((interaction_view.ipagelist.where({'loaded':true}).length>3||interaction_view.pagepreloadcheck.length==0)&&!interaction_view.preloadended){
			interaction_view.preloadended=true;
		}
		if(interaction_view.playstatus=='wait'&&interaction_view.preloadended){
			var currentpage=interaction_view.ipagelist.get(interaction_view.currentPage);
			if(currentpage.get('loaded')){
				console.log('start play:'+currentpage.id)
				interaction_view.playstatus='play';
				$('body').jswait('close');
				interaction_view.play(interaction_view.currentPage);
			}
		}
		$('.loading').children('div').css('width',(1-interaction_view.pagepreloadcheck.length/interaction_view.ipagelist.length)*100+'%');	
		if(interaction_view.pagepreloadcheck.length==0) $('.loading').remove();	
   };
	interaction_view.pagePreloadCheck=function(){
		var unloadlist=_.filter(interaction_view.ipreloadlist.toJSON(),function(i){return i.loaded==false});
		var unloadelementids=_.pluck(unloadlist,'overlay_id');
		interaction_view.ipagelist.each(function(model){
			var elementids=model.iViewlist.pluck('id');
			var compare=_.filter(elementids,function(i){return _.include(unloadelementids,i)});
			if(compare.length==0) model.loaded=true;
			else model.loaded=false;
		})
	};
	interaction_view.preparePlay=function(){
		interaction_view.ipagelist.each(function(model){
			//model.iAnimationlist.setParams();
		})
	};
	interaction_view.doPreload=function(){
		interaction_view.ipagelist.each(function(i){
			if(i.ipreloadlist.length==0){
				interaction_view.finishPagePreload(i.id);
			}
			else{
				i.ipreloadlist.preload();
			}
		})		
	};
    interaction_view.donext=function(pageid){
		 interaction_view.ipagelist.get(pageid).iview.afterpreload();
    };
    interaction_view.play=function(pageid){
    	 var currentPage=interaction_view.ipagelist.get(pageid);
		 currentPage.iViewlist.resetViewStatus();
		 currentPage.iAnimationlist.setParams();
		 currentPage.iAnimationlist.play();
		 currentPage.iActionlist.each(function(i){
		 		i.iview.render();
		 })
    };
    interaction_view.stopPlay=function(pageid){
    	var currentPage=interaction_view.ipagelist.get(pageid);
		if(currentPage.iAnimationlist.timeline) {
			TweenMax.killAll();
			currentPage.iViewlist.each(function(model){
				if(model.media){
					if(model.get('iType')=='Audio') {
						model.media.load();
						model.media.stop();
					}
					if(model.get('iType')=='Video') {
						model.videoloaded=false;
						model.media.load();
						model.media.pause();
					}
				} 
			})		
			$('.interaction-view').css('cursor','auto');
			currentPage.iActionlist.resetStatus();
			var videoelements=currentPage.iViewlist.where({'iType':'Video'});
			_.each(videoelements,function(i){
				i.iview.resetVideoStatus();
			})
			interaction_view.bezierPatch(pageid);	
		};
    };
    interaction_view.bezierPatch=function(pageid){
    	var currentPage=interaction_view.ipagelist.get(pageid);
    	currentPage.iAnimationlist.each(function(i){
    		if(_.include([301,302],i.get('iType'))){
    			if(i.toJSON().iDetail.autoRotate) TweenMax.to(i._animation.obj,0,{rotation:'0_cw'});
    		}
    	})
    };
    interaction_view.repeatPatch=function(pageid){
    	var currentPage=interaction_view.ipagelist.get(pageid);
    	currentPage.iAnimationlist.each(function(i){
    		if(i.toJSON().iTiming.repeat!=0){
    			//model.iview.play();
    		}
    	})
    };
    interaction_view.slidePatch=function(pageid){
    	var currentPage=interaction_view.ipagelist.get(pageid);
    	currentPage.iViewlist.each(function(model){
    		if(model.get('iType')=='CycleImage'||model.get('iType')=='Slide'){
    			model.iview.play();
    		}
    	})
    };
	window.iPageDirection='landscape';
	Reveal.initialize({
		progress: true,
		history: true,
		center: true,
		width: 1024,
		height: 768, 
		minScale: 1.0,
		maxScale: 1.0,

		theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
		transition: Reveal.getQueryHash().transition || 'none', // default/cube/page/concave/zoom/linear/fade/none

	});
	Reveal.addEventListener( 'ready', function( event ) {
		interaction_view.playstatus='wait';
	    section = event.currentSlide;
	    interaction_view.currentPage = $(section).attr('id');
	    console.log('init page:'+interaction_view.currentPage);
		var pageids=getPageIds();
		if(pageids.length==0) return;
		_.each(pageids,function(i){
			var newpage=new interaction_view.model.Page({id:i});
			//if(typeof cbt_data == "undefined" || !cbt_data ) newpage.iview.load();
		})
		if(typeof cbt_data != "undefined" && cbt_data){
			var pagedata=cbt_data.data.results;
			_.each(pagedata,function(i){
				var page=interaction_view.ipagelist.get(i.id);
				page.iview.overlays=i.overlays;
				page.iview.animations=i.animations;
				page.iview.actions=i.actions;
				page.iview.afterload();
			})
		}
		else{
			$.getJSON(context_url+'index.json?source=web',function(data){
				if(data.code==200){
					var pagedata=data.data.chapter;
					_.each(pagedata,function(i){
						var page=interaction_view.ipagelist.get(i.id);
						page.set(i);
						page.iview.overlays=i.overlays;
						page.iview.animations=i.animations;
						page.iview.actions=i.actions;
						page.iview.afterload();
					})		
					var chapterdata=data.data;
					interaction_view.iChapter.set(chapterdata);
					interaction_view.model2tree(interaction_view.iChapter,'catalog','pages');
				}
				else{
					interaction_view.message('error',data.msg);
				}
			})
		}
	});
	Reveal.addEventListener( 'slidechanged', function( event ) {
	    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
	    section = event.currentSlide;
	    current_id = $(section).attr('id');
	    interaction_view.currentPage = current_id;
	    console.log('switch to page:'+interaction_view.currentPage);
	    pre_id = $(event.previousSlide).attr('id');
	    interaction_view.stopPlay(pre_id);
	    var currentpage=interaction_view.ipagelist.get(interaction_view.currentPage);
	    if(currentpage.get('loaded')){
	    	interaction_view.playstatus='play';
	    	$('body').jswait('close');
	    	interaction_view.play(current_id);
	    }
	    else{
	    	interaction_view.playstatus='wait';
	    	$('body').jswait();
	    }
	});
	interaction_view.firstPlay=true;
	$('body').append('<div id="preloader"></div>');
	$('body').prepend('<div class="loading progress progress-striped active"><div class="bar" style="width: 0%;"></div></div>');
	$('.reveal').find('section .interaction-area').append('<div class="interaction-view"></div>');
   	$('body').jswait();
    $('.return a').live('click',function(){
	   var url = location.search; //获取url中"?"符后的字串	
	   var theRequest = new Object();
	   if (url.indexOf("?") != -1) {
	      var str = url.substr(1);
	      strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++){
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1])
	      }
	   }
	   if(theRequest['from']=='page') $(window.parent.document.getElementById('PreviewWindow')).remove();
	   return false;
    });
})
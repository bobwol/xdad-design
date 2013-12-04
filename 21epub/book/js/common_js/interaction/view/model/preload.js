interaction_view.model.Preload=interaction_view.model.Base.extend({
	defaults:{
		iType:'Preload',//define type
		iLock:true,
		iVisibility:true,
		iCommon:null,
		iDetail:null,
		iParent:'',
		iChild:'',
		iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
		iParentModel:null,
		iDraggable:true,
		iResizable:true,
		iTemplate:null,
		iParentdiv:'.interaction-view',
		iAutoindex:true,
		iSync:false,
		iZindex:'-1',
		iUrl:null,
		iAutofocus:false,
		iKeyscontrol:true,
		callback:null,
		loaded:false
	},
	setcollection:function(){
		this.pageid=this.get('pageid');
		this.page=interaction_view.ipagelist.get(this.pageid);
		if(!this.page.ipreloadlist.get(this.id)) this.page.ipreloadlist.add(this);
	},
	setview:function(type){
		this.elementmodel=iViewlist.get(this.get('overlay_id'));
		this.iview=new interaction_view.view.Preload({model:this});
	},
	setsyncmodel:function(){
	}
})
interaction_view.collection.Preload=interaction_view.collection.Base.extend({
	preloadcheck:function(file,loadstatus){
		var checked=this.where({'loaded':true});
		//$('.loading').children('div').css('width',checked.length/this.length*100+'%');
		if(loadstatus==false) interaction_view.message('alert','图像或媒体资源加载失败，可能会影响动画效果');
		if(this.where({'loaded':false}).length==0){
			 interaction_view.finishPagePreload(this.pageid);
		}
	//	if(interaction_view.currentPage) interaction_view.pagePreloadCheck();
	},
	preload:function(){
		this.each(function(i){
			i.iview.render();
		})
	}
});
interaction_view.view.Preload = interaction_view.view.Base.extend({
	events: {
		
	},
	initstart:function(){
		$('div#preloader').append(_.template(PreloadTemplate,{id:this.model.id,file:null}));
	},
	renderDynamicElement:function(){	
	},
	render:function(){
		var view=this;
		if(this.model.get('elementtype')=='Audio'){
			console.info('Audio');
			var elementmodel=this.elementmodel=view.model.page.iViewlist.get(this.model.get('overlay_id'));
			var detail=this.elementmodel.iview.getdetail();
		    this.elementmodel.media = new buzz.sound(this.model.toJSON().file,{
		    	autoplay:false
		    });
		    //console.info(this.elementmodel.media.getBuffered());
		    if(this.elementmodel.media) this.elementmodel.media.pause();
		    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
		    if(iOS){
					elementmodel.loaded=true;
				    view.model.set('loaded',true);
		  			view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,true);
		    }	    
			else{
				this.elementmodel.media.bind("canplay", function(e) {
					elementmodel.media.unbind('canplay');
					console.info('Audio loaded');
					elementmodel.loaded=true;
				    view.model.set('loaded',true);
		  			view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,true);
				}).bind("error", function(e) {
					elementmodel.loaded=false;
					view.model.set('loaded',true);
				    view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,false);
				}).bind('ended',function(e){
					console.log('audio ended');
					//elementmodel.media.unbind('canplay');
					elementmodel.media.load();
					elementmodel.media.pause();
				}); 
			}		
		}
		else if(this.model.get('elementtype')=='Video'){
			var elementmodel=this.elementmodel=this.model.page.iViewlist.get(this.model.get('overlay_id'));
			var detail=this.elementmodel.iview.getdetail();
			$("#Video_"+this.elementmodel.id).attr('id',"Video_"+view.model.id+this.elementmodel.id);
			console.log(view.model.id+this.elementmodel.id);
			var testvideosupport= !!(document.createElement('video').canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
			if(!testvideosupport){
				elementmodel.loaded=false;
				view.model.set('loaded',true);
			    view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,false);		
			    return;			
			}
		    _V_("Video_"+view.model.id+this.elementmodel.id).ready(function(){
		    	console.info('Video init');
				elementmodel.media = this;
				elementmodel.media.size(elementmodel.iview.$el.find('.Element').width(),elementmodel.iview.$el.find('.Element').height());
		    	if(this.bufferedPercent()>0){
					console.info('video has already loaded');
					elementmodel.loaded=true;
				    view.model.set('loaded',true);
		  			view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,true);	
		  			return ;	    		
		    	}
		    	elementmodel.videoloaded=false;
		    	var videocheck=function(e){
		    		elementmodel.videoloaded=true;
		    	}
		    	var videoload=function(e){
		    		elementmodel.videoloaded=true;
		    		elementmodel.media.removeEvent("loadedmetadata",videoload);
		    		//elementmodel.media.addEvent("loadedmetadata",videocheck)
					console.info('video loaded');
					elementmodel.loaded=true;
				    view.model.set('loaded',true);
		  			view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,true);	    		
		    	}
				elementmodel.media.addEvent("loadedmetadata", videoload);
				elementmodel.media.addEvent("error", function(e) {
					elementmodel.loaded=false;
					view.model.set('loaded',true);
				    view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,false);
				}); 
				elementmodel.media.addEvent("ended", function(e) {
					elementmodel.videoloaded=false;
					elementmodel.media.load();
					elementmodel.media.pause();				
				}); 
			});		
		}
		else{
		    $('img[id="'+this.model.id+'"]').load( function(){
	  			//console.info('loaded');
	  			view.model.set('loaded',true);
	  			view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,true);
	  			//view.model.elementmodel.iview.render(view.model.id);
			}).error(function(){
				//console.info('load fail');
				view.model.set('loaded',true);
				view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,false);
			})
			.attr('src', view.model.toJSON().file);			
		}
	}
})
interaction_view.ipreloadlist=new interaction_view.collection.Preload();
//});

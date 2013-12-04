var prewait=document.createElement('div');
prewait.className='prewait';
document.body.appendChild(prewait);
requirejs.config({
	waitSeconds:100,
	paths:path,
	shim:shim
});
requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }
    //document.body.removeChild(prewait);	
    alert('Module'+ err.requireModules+' Load Error ,Please try again!');
};
define(['text!template/page.js','text!template/message.js','text!template/element_view.js','text!template/preload.js','text!template/animateitem_view.js','preview_model/page','templatePage','interaction','preview_model/image','preview_model/preload','preview_model/richtext','preview_model/animation_view','preview_model/slide','preview_model/audio','preview_model/video','preview_model/cycleimage','preview_model/action','html2canvas'],function(PageTemplate,MessageTemplate,ElementTemplate,PreloadTemplate,AnimateElementTemplate){
	 window.PageTemplate=PageTemplate;
     window.MessageTemplate=MessageTemplate;
	 window.ElementTemplate=ElementTemplate;
	 window.AnimateElementTemplate=AnimateElementTemplate;
	 window.PreloadTemplate=PreloadTemplate;
	 window.PageInfoTemplate=require('text!template/page_info.js');
	require(_.union(global.package.interaction(['dom','element','image','page','root','video','cycleimage','audio','link','resources','slide','richtext','showhide','elementattr','editor','webcontent','elementsgroup','action','animationgroup','tree','animation'])), function() {
			tinyMCE.init({
			    mode : "none",
				theme : "advanced",
				plugins : "autolink,inlinepopups,customtable,tableDropdown,blockquoteDropdown,justifyDropdown,fontstyleDropdown,advhr,advlist,lists,spaltenListBox,tableListBox,statusListBox",
				content_css : web_url+"../css/bootstrap.min.css,"+web_url+"../css/bootstrap.min.patch.css,"+web_url+"../css/typo.css,"+web_url+"../css/typo.patch.css,"+web_url+"../css/style.green.css",
				init_instance_callback : interaction.tEditorinit,
				//extended_valid_elements : "div[*],span[*]",
				valid_children : "+div[p]",
				//convert_fonts_to_spans:false,
				//forced_root_block : false,
				theme_advanced_buttons1 : "fontstyleDropdown,|,justifyDropdown,|,formatselect,|,fontsizeselect,|,undo,redo,|,bullist,numlist,blockquoteDropdown,|,tableDropdown,tableListBox,|,spaltenListBox,|,forecolor",
				theme_advanced_buttons2 :"",
				theme_advanced_buttons3 :""
			});	
			$('.interaction-area').attr('id','interaction-area');
			$('.interaction-area').append('<canvas id="interaction" class="hide" width=1024 height=768></canvas>');
			$('.interaction-area').append('<div class="tooltip prompt fade in top hide" style="position:absolute;z-index:1000000;"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>');
			var canvas = document.getElementById('interaction');
       	    paper.setup(canvas);
       	    $('.doc-layout-right').addClass('nanoscrollbar');
			global.setscrollnano('.doc-layout-center');
			global.setscrollnano('.doc-layout-left');
			global.setscrollnano('.doc-layout-right');
			global.modal.create('confirmModal','small-modal');
			$('button.action-preview').on('click',function(){
				//var url=context_url+$('div.thumbs').find('li.active').attr('id')+'/interactionview';
				//window.open(url);
				interaction_view.iAnimationlist.afterTimeLineCreated=null;
				interaction_view.SinglePreview=false;
				interaction.animation.preview();
			})
			//$('#info_conf').children('.setting-body').html(_.template(book_template,{}));
			material.init_list();
			material.init_insert_list();
			material.init_change_list();
			interaction.event.init();
			interaction.modal.create('animation_preview',null,{header:true,body:true});
			$('#animation_preview').children('.modal-body').addClass('Presentation');
			$('#animation_preview').children('.modal-body').append('<div class="interaction-view typo"></div>');	
			$('body').append('<div id="preloader"></div>');
			$('#animation_preview').draggable({
				handle:'.modal-header'
			});
			$('#animation_preview').on('hide',function(){
				interaction.animation.stop(interaction.currentpage.id);
			})
		   interaction_view.finishPagePreload=function(pageid){
		   		var currentpage=interaction_view.ipagelist.get(pageid);
				 currentpage.iViewlist.each(function(model){
				 	model.iview.afterpreload();
				 })
				 $('.loading').remove();
				 $('.interaction-view').jswait('close');
				 currentpage.iAnimationlist.playMain();
				 currentpage.iActionlist.each(function(i){
				 	i.iview.render();
				 })
		   };
		   interaction_view.pagePreloadCheck=function(){};
			interaction_view.checkPageLoad=function(pageid){
					interaction_view.doPreload(pageid);
			};
			interaction_view.doPreload=function(pageid){
				var currentpage=interaction_view.ipagelist.get(pageid);
				if(currentpage.ipreloadlist.length==0) {
					interaction_view.finishPagePreload(pageid);
				}
				else currentpage.ipreloadlist.each(function(model){
					model.iview.render();
				})		
			};
			$('#material_list a.material_list_change').live('click',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var model=material_list.change_model.icollection.get(id);
				var value={};
				value.width=model.toJSON().width;
				value.height=model.toJSON().height;
				value.preview=model.toJSON().preview;
				value.thumbnail=model.toJSON().thumbnail;
				value.thumb_height=model.toJSON().thumb_height;
				value.thumb_width=model.toJSON().thumb_width;
				value.picture=model.toJSON().picture;
				value.uid=model.toJSON().uid;
			    interaction.currentpage.set(value);
				interaction.currentpage.iview.updatepageinfo();
				interaction.currentpage.iview.updatebackground();
				interaction.currentpage.iview.$el.children('a').html('<img src='+interaction.currentpage.get('thumbnail')+'/>');
				return false;				
			})	
			templatePage.load();
			initialize();	
			$.getJSON(context_url+'getimages',function(data){
				if(data.code==200){
					var results=data.data.results;
					_.each(results,function(i){
						i.iType='Page';
						iPagelist.add(i);
					});
					if(iPagelist.length>0){
						var iPage=iPagelist.at(0);
						iPage.iview.focus();
						interaction.pagesort();
					}
					else{
						page_addPage();
					}
				}
			})
			document.body.removeChild(prewait);	
	});
})	
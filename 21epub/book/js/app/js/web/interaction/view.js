requirejs.config({
	waitSeconds:100,
	paths:path,
    shim:shim
});
require(['text!template/page.js','text!template/message.js','text!template/element_view.js','text!template/preload.js','text!template/animateitem_view.js','jquery','jquery.nanoscroller','TweenMax','animation','buzz','videojs','jswait','underscore','backbone','interaction_view','revealJS','preview_model/image','preview_model/preload','preview_model/richtext','preview_model/animation_view','preview_model/slide','preview_model/audio','preview_model/video','preview_model/cycleimage','preview_model/action','preview_model/page'],function(PageTemplate,MessageTemplate,ElementTemplate,PreloadTemplate,AnimateElementTemplate){
	 window.PageTemplate=PageTemplate;
     window.MessageTemplate=MessageTemplate;
	 window.ElementTemplate=ElementTemplate;
	 window.AnimateElementTemplate=AnimateElementTemplate;
	 window.PreloadTemplate=PreloadTemplate;
	window.iPageDirection='landscape';
	var pageid=context_url.split('/')[context_url.split('/').length-2];
	//$('.interaction-area').append('<canvas id="interaction" width=1024 height=768></canvas>');
	$('body').append('<div id="preloader"></div>');
	//$('.interaction-area').append('<div class="prewait"></div>');
	$('.canvas-area').addClass('Presentation')
					 .attr('id',pageid);
	$('.interaction-area').append('<div class="interaction-view"></div>');
	//var canvas = document.getElementById('interaction');
   // paper.setup(canvas); 
   $('.interaction-view').jswait();
   interaction_view.finishPagePreload=function(pageid){
		 newpage.iViewlist.each(function(model){
		 	model.iview.afterpreload();
		 })
		 $('.loading').remove();
		 $('.interaction-view').jswait('close');
		 newpage.iAnimationlist.playMain();
		 newpage.iActionlist.each(function(i){
		 	i.iview.render();
		 })
   };
   interaction_view.pagePreloadCheck=function(){};
	interaction_view.checkPageLoad=function(pageid){
			interaction_view.doPreload();
	};
	interaction_view.doPreload=function(){
		if(newpage.ipreloadlist.length==0) {
			interaction_view.finishPreloadPage();
		}
		else newpage.ipreloadlist.each(function(model){
			model.iview.render();
		})		
	};
    var newpage=new interaction_view.model.Page({id:pageid});
    newpage.iview.load();
})
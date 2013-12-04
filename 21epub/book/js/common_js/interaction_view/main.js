define([
	'interaction_view/model/main',
	'interaction_view/ui/main',
	'interaction_view/ui/presentation',
	'revealJS'
],function(){
	var func=require('interaction_view/ui/main');
	interaction_view=$.extend({},interaction_view,func);
	interaction_view.init=function(){
			presentation.forpreview();
			window.iPageDirection = 'landscape';
			Reveal.initialize({
				progress : true,
				history : true,
				center : true,
				width : 1024,
				height : 768,
				minScale : 1.0,
				maxScale : 1.0,

				theme : Reveal.getQueryHash().theme, // available themes are in /css/theme
				transition : Reveal.getQueryHash().transition || 'none', // default/cube/page/concave/zoom/linear/fade/none

			});
			Reveal.addEventListener('ready', function(event) {
				interaction_view.playstatus = 'wait';
				section = event.currentSlide;
				interaction_view.currentPage = $(section).attr('id');
				console.log('init page:' + interaction_view.currentPage);
				var pageids = interaction_view.getPageIds();
				if (pageids.length == 0)
					return;
				_.each(pageids, function(i) {
					var newpage = new interaction_view.model.Page({
						id : i
					});
					//if(typeof cbt_data == "undefined" || !cbt_data ) newpage.iview.load();
				})
				if ( typeof cbt_data != "undefined" && cbt_data) {
					var pagedata = cbt_data.data.chapter;
					_.each(pagedata, function(i) {
						var page = interaction_view.ipagelist.get(i.id);
						page.iview.overlays = i.overlays;
						page.iview.animations = i.animations;
						page.iview.actions = i.actions;
						page.iview.afterload();
					})
				} else {
					$.getJSON(context_url + 'index.json?source=web', function(data) {
						if (data.code == 200) {
							var pagedata = data.data.chapter;
							_.each(pagedata, function(i) {
								var page = interaction_view.ipagelist.get(i.id);
								page.set(i);
								page.iview.overlays = i.overlays;
								page.iview.animations = i.animations;
								page.iview.actions = i.actions;
								page.iview.afterload();
							})
							var chapterdata = data.data;
							interaction_view.iChapter.set(chapterdata);
							interaction_view.model2tree(interaction_view.iChapter, 'catalog', 'pages');
						} else {
							interaction_view.message('error', data.msg);
						}
					})
				}
			});
			Reveal.addEventListener('slidechanged', function(event) {
				// event.previousSlide, event.currentSlide, event.indexh, event.indexv
				section = event.currentSlide;
				current_id = $(section).attr('id');
				interaction_view.currentPage = current_id;
				console.log('switch to page:' + interaction_view.currentPage);
				pre_id = $(event.previousSlide).attr('id');
				interaction_view.stopPlay(pre_id);
				var currentpage = interaction_view.ipagelist.get(interaction_view.currentPage);
				if (currentpage.get('loaded')) {
					interaction_view.playstatus = 'play';
					$('body').jswait('close');
					interaction_view.play(current_id);
				} else {
					interaction_view.playstatus = 'wait';
					$('body').jswait();
				}
			});	
		}
})


define(['interaction_view/main','jswait'], function() {
	var presentation= {
		foredit : function() {
			$('.topbar .action-preview').on('click',function(){
				$('.interaction-view').find('#jswait-loading').remove();
				interaction_view.iAnimationlist.afterTimeLineCreated=null;
				interaction_view.SinglePreview=false;
				interaction.animation.preview();
			})
			interaction.modal.create('animation_preview',null,{header:true,body:true});
			$('#animation_preview').children('.modal-body').addClass('Presentation');
			$('#animation_preview').children('.modal-body').append('<div class="interaction-view typo"></div>');	
			$('body').append('<div id="preloader"></div>');
			$('#animation_preview').draggable({
				handle:'.modal-header'
			});
			$('#animation_preview').on('hide',function(){
				interaction.animation.stop();
			})
			interaction_view.finishPagePreload = function(pageid) {
				var currentpage = interaction_view.ipagelist.get(pageid);
				currentpage.iViewlist.each(function(model) {
					model.iview.afterpreload();
				})
				$('.loading').remove();
				$('.interaction-view').jswait('close');
				currentpage.iAnimationlist.playMain();
				currentpage.iActionlist.each(function(i) {
					i.iview.render();
				})
			};
			interaction_view.setPreloadStatus=function(){};
			interaction_view.pagePreloadCheck = function() {
			};
			interaction_view.checkPageLoad = function(pageid) {
				interaction_view.doPreload(pageid);
			};
			interaction_view.doPreload = function(pageid) {
				var currentpage = interaction_view.ipagelist.get(pageid);
				if (currentpage.ipreloadlist.length == 0) {
					interaction_view.finishPagePreload(pageid);
				} else
					currentpage.ipreloadlist.each(function(model) {
						model.iview.render();
					})
			};
		},
		forpreview : function() {
			$('body').append('<div id="preloader"></div>');
			$('body').prepend('<div class="loading progress progress-striped active"><div class="bar" style="width: 0%;"></div></div>');
			$('.reveal').find('section .interaction-area').append('<div class="interaction-view"></div>');
			$('body').jswait();
			interaction_view.checkPageLoad = function(pageid) {
				if (!interaction_view.pagecheck)
					interaction_view.pagecheck = interaction_view.ipagelist.pluck('id');
				interaction_view.pagecheck = _.reject(interaction_view.pagecheck, function(i) {
					return i == pageid;
				});
				if (interaction_view.pagecheck.length == 0) {
					interaction_view.doPreload();
				}
			};
			interaction_view.finishPagePreload = function(pageid) {
				if (!interaction_view.pagepreloadcheck) {
					interaction_view.pagepreloadcheck = interaction_view.ipagelist.pluck('id');
				}
				interaction_view.pagepreloadcheck = _.reject(interaction_view.pagepreloadcheck, function(i) {
					return i == pageid;
				});
				var page = interaction_view.ipagelist.get(pageid);
				page.set('loaded', true);
				interaction_view.donext(page.id);
				if ((interaction_view.ipagelist.where({
					'loaded' : true
				}).length > 3 || interaction_view.pagepreloadcheck.length == 0) && !interaction_view.preloadended) {
					interaction_view.preloadended = true;
				}
				if (interaction_view.playstatus == 'wait' && interaction_view.preloadended) {
					var currentpage = interaction_view.ipagelist.get(interaction_view.currentPage);
					if (currentpage.get('loaded')) {
						console.log('start play:' + currentpage.id)
						interaction_view.playstatus = 'play';
						$('body').jswait('close');
						interaction_view.play(interaction_view.currentPage);
					}
				}
				//$('.loading').children('div').css('width', (1 - interaction_view.pagepreloadcheck.length / interaction_view.ipagelist.length) * 100 + '%');
				if (interaction_view.pagepreloadcheck.length == 0)
					$('.loading').remove();
			};
			interaction_view.setPreloadStatus=function(){
				var haspreloaded=0;
				var preloadstotal=0;
				interaction_view.ipagelist.each(function(model){
					preloadstotal+=model.ipreloadlist.length;
					if(model.ipreloadlist.length>0)
						haspreloaded+=model.ipreloadlist.where({loaded:true}).length;
				})
				console.log(haspreloaded/preloadstotal);
				$('.loading').children('div').css('width',String(haspreloaded/preloadstotal*100)+"%");
			};
			interaction_view.pagePreloadCheck = function() {
				var unloadlist = _.filter(interaction_view.ipreloadlist.toJSON(), function(i) {
					return i.loaded == false
				});
				var unloadelementids = _.pluck(unloadlist, 'overlay_id');
				interaction_view.ipagelist.each(function(model) {
					var elementids = model.iViewlist.pluck('id');
					var compare = _.filter(elementids, function(i) {
						return _.include(unloadelementids, i)
					});
					if (compare.length == 0)
						model.loaded = true;
					else
						model.loaded = false;
				})
			};
			interaction_view.preparePlay = function() {
				interaction_view.ipagelist.each(function(model) {
					//model.iAnimationlist.setParams();
				})
			};
			interaction_view.doPreload = function() {
				interaction_view.ipagelist.each(function(i) {
					if (i.ipreloadlist.length == 0) {
						interaction_view.finishPagePreload(i.id);
					} else {
						i.ipreloadlist.preload();
					}
				})
			};
			interaction_view.donext = function(pageid) {
				interaction_view.ipagelist.get(pageid).iview.afterpreload();
			};
			interaction_view.play = function(pageid) {
				var currentPage = interaction_view.ipagelist.get(pageid);
				currentPage.iViewlist.resetViewStatus();
				currentPage.iAnimationlist.setParams();
				currentPage.iAnimationlist.play();
				currentPage.iActionlist.each(function(i) {
					i.iview.render();
				})
			};
			interaction_view.stopPlay = function(pageid) {
				var currentPage = interaction_view.ipagelist.get(pageid);
				if (currentPage.iAnimationlist.timeline) {
					TweenMax.killAll();
					currentPage.iViewlist.each(function(model) {
						if (model.media) {
							if (model.get('iType') == 'Audio') {
								model.media.load();
								model.media.stop();
							}
							if (model.get('iType') == 'Video') {
								model.videoloaded = false;
								model.media.load();
								model.media.pause();
							}
						}
					})
					$('.interaction-view').css('cursor', 'auto');
					currentPage.iActionlist.resetStatus();
					var videoelements = currentPage.iViewlist.where({
						'iType' : 'Video'
					});
					_.each(videoelements, function(i) {
						i.iview.resetVideoStatus();
					})
					interaction_view.bezierPatch(pageid);
				};
			};
			interaction_view.bezierPatch = function(pageid) {
				var currentPage = interaction_view.ipagelist.get(pageid);
				currentPage.iAnimationlist.each(function(i) {
					if (_.include([301, 302], i.get('iType'))) {
						if (i.toJSON().iDetail.autoRotate)
							TweenMax.to(i._animation.obj, 0, {
								rotation : '0_cw'
							});
					}
				})
			};
			interaction_view.repeatPatch = function(pageid) {
				var currentPage = interaction_view.ipagelist.get(pageid);
				currentPage.iAnimationlist.each(function(i) {
					if (i.toJSON().iTiming.repeat != 0) {
						//model.iview.play();
					}
				})
			};
			interaction_view.slidePatch = function(pageid) {
				var currentPage = interaction_view.ipagelist.get(pageid);
				currentPage.iViewlist.each(function(model) {
					if (model.get('iType') == 'CycleImage' || model.get('iType') == 'Slide') {
						model.iview.play();
					}
				})
			};
			interaction_view.slideChange = function(index) {
				if (!Reveal)
					return;
				if ( typeof index == 'number')
					Reveal.slide(index);
				if ( typeof index == 'string') {
					var chapter = interaction_view.getModelById(interaction_view.iChapter, index);
					Reveal.slide(chapter.get('index'));
				}
			};
			interaction_view.firstPlay = true;
		}
	}
	window.presentation=presentation;
})

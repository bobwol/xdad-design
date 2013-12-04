define(['jquery', 'global/main', 'article/model', 'text!article/template/articleTemplate.js','iEditor/main'], function() {
	var articleTemplate = require('text!article/template/articleTemplate.js');
	window.article = {
		event : {
			init : function() {
				this.onClickTree();
				this.onArticleClick();
				this.onArticleLinkClick();
				this.onSave();
				this.onProgress();
				this.onSubmit();
			},
			onClickTree : function() {
				set_click_event('.left-hud nav .wraparea', function() {
					if ($(this).parent('li').parent('ol#level1').length > 0) {
						var id = $(this).parent('li').find('a').attr('href').split('#')[1];
						article.load(id, function(data) {
							article.render(data);
						});
					}
				})
				set_click_event('.left-hud nav .wraparea .hitarea', function() {
					$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
					$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
					$(this).parent('.wraparea').parent('li:has(ul)').toggleClass('unfold');
					$(this).parent('.wraparea').parent('li:has(ul)').children('ul').slideToggle('fast');
				});
			},
			onArticleClick : function() {
				set_click_event('article', function() {
					console.log('article click' + $(this).attr('id'));
				})
			},
			onArticleLinkClick : function() {
				$('article a').live('click', function(event, ui) {
					//$(this).parents('article').first().trigger('click');
					return false;
				})
			},
			onSave : function() {
				set_click_event('.action-save', function() {
					article.save();
				})
			},
			onProgress : function() {
				set_click_event('div.topbar .btn-group .dropdown-menu li a', function() {
					var value = $(this).html();
					var result = {};
					var progress = value.split('%')[0];
					var data = "id=" + task.model.id + "&progress=" + Number(progress);
					article.save();
					task.operate(data, function(data) {
						if (data.code == 200) {
							global.message('success', data.msg);
							task.model.set(data.data);
						} else {
							global.message('error', data.msg);
							task.model.set(data.data);
						}
						$('.topbar .btn-group').html(task.taskinfoTemplate(task.model.toJSON()));
					})
					edit_changed = false;
					return false;
				})
			},
			onSubmit : function() {
				set_click_event('button.pageedit_submit', function() {
					$("#task_submitModal").html(task.SubmitTemplate({
						"model" : task.model.toJSON(),
						"type" : 'submit'
					}));
					global.modal.show('#task_submitModal');
					$('#task_submitModal .btn').on('click', function() {
						var result = {};
						result.id = task.model.id;
						result.type = 'submit';
						result.comment = $('#task_submitModal #comment').val();
						task.submit(result, function(data) {
							if (data.code == 200) {
								global.message('success', data.msg);
								task.model.set(data.data);
								$('.topbar .btn-group').html(task.taskinfoTemplate(task.model.toJSON()));
							} else {
								global.message('error', data.msg);
							}
						});
					})
					return false;
				})
			},
			onPreviewClick : function() {
				function getlinktype(linktype) {
					switch (linktype) {
						case 'image':
							return 'image';
						case 'slide':
							return 'slide';
						case 'link':
							return 'link';
						case 'tag':
							return 'tag';
						case 'video':
							return 'video';
						case 'grid':
							return 'grid';
						case 'cell':
							return 'cell';
						case 'webcontent':
							return 'webcontent';
						case 'richText':
							return 'richText';
						case 'show&Hide':
							return 'showandHide';
						case 'customimage':
							return 'image';
						case 'interactbook':
							return 'interactbook';
						case 'package':
							return 'package';
						case 'dm':
							return 'dm';
						case 'interaction':
							return 'CBT';
						case 'tdms' :
							return 'tdms';
						default:
							return false;
					}
				}


				$('article a').live('click', function(event, ui) {
					var href = $(this).attr('href');
					if (href.length > 0 && href[0] == '#')
						return true;
					if (href && href.match('://')) {
						href = href.split('://');
						if (href.length > 1) {
							var linktype = href[0];
							var linkid = href[1];
							linktype = getlinktype(linktype);
							if (linkid) {
								if (linktype) {
									var url = portal_url + 'static/' + href[1] + '/index.html';
								} else {
									window.open($(this).attr('href'));
								}
							}
						}
					}
					return false;
				})
			}
		},
		setinitialselected : function() {
			$('.left-hud nav li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
			$('.left-hud nav li ol').hide();
			$('.left-hud nav li.unfold').children('ol').show();
			$('.left-hud nav li:has(ol)').addClass('hasmenu');
			if ($('.left-hud nav li:has(ol)').length == 0)
				$('.left-hud nav li.tree-item').first().addClass('selected');
			$('.left-hud nav li:has(ol)').first().addClass('selected');
			$('.left-hud nav li:has(ol)').first().toggleClass('unfold')
			$('.left-hud nav li:has(ol)').first().children('ol').slideToggle('fast');
		},
		load : function(id, callback) {
			if (!id)
				id = global.getRequest('id');
			global.json.load(context_url + 'getbodies?id=' + id, callback);
		},
		render : function(data) {
			if (data.code == 200) {
				article.template = articleTemplate;
				if (enablePagination)
					articleContainer = 'div.page-container';
				else
					articleContainer = 'div.doc-body';
				article.model = new iArticleModel({
					id : 'Article',
					el : articleContainer,
					wrap : null,
					template : article.template
				});
				article.model.set(data.data);
				article.model.icollection.reset();
				global.model.model2collection(article.model, 'results');
			} else {
				global.message('error', data.msg);
			}
		},
		insert : function(model, material_ids) {
			console.log(material_ids);
			if (!iCurrentModel)
				return false;
			materials=_.map(material_ids, function(id) {
				var m=global.model.getModelById(model, id);
				return m.toJSON();
			});
			iEditor.insert(materials);
			return false;
		},
		save : function() {
			if (iCurrentModel && tinymce.activeEditor) {
				var content = tinymce.activeEditor.getContent({
					format : 'raw'
				});
				tinymce.activeEditor.setContent(content);
			}
			article.model.icollection.each(function(model) {
				var content = $('section[id="' + model.id + '"] > article').html();
				model.set('content', content);
			});
			ArticleModelForSave.url = context_url + 'setbodies';
			ArticleModelForSave.list = article.model.icollection;
			global.model.save(ArticleModelForSave, null, function(data) {
				if (data.code == 200) {
					global.message('success', data.msg);
					global.change = false;
				} else
					global.message('error', data.msg);
			})
		}
	};
	global.autosave=function() {
			if (iCurrentModel && tinymce.activeEditor) {
				var content = tinymce.activeEditor.getContent({
					format : 'raw'
				});
				tinymce.activeEditor.setContent(content);
			}
			article.model.icollection.each(function(model) {
				var content = $('section[id="' + model.id + '"] > article').html();
				model.set('content', content);
			});
			ArticleModelForSave.url = context_url + 'setbodies';
			ArticleModelForSave.list = article.model.icollection;
			global.model.save(ArticleModelForSave, null, function(data) {
				if (data.code == 200) {
					//global.message('自动保存成功',data.msg);
					global.change = false;
				} else
					global.message('error', data.msg);
			})
	}
})

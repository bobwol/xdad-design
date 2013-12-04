(function() {
	function set_click_event(target, func) {//set click event
		$(target).live('click', func);
	}

	function set_hover_event(target, funcover, funcout) {
		$(target).live('mouseover mouseout', function(event) {
			if (event.type == 'mouseover')
				funcover(event);
			else
				funcout(event);
		});
	}

	if ( typeof global == "undefined")
		global = {};
	global.event = {
		init : function() {
			this.onSave();
			this.onActionHover();
			this.onListContentClick();
			this.onAdminBarAction();
			this.onPreview();
			this.onListPreview();
			this.onListWorkflow();
			this.onInteraction();
			this.onCollapsebarClick();
			this.onReturn();
		},
		onSave:function(){
			set_click_event('a.action-save,button.action-save',function(){
				var button=$(this);
				$(this).button('loading');
				if(global.actionsave) global.actionsave(function(){
					button.button('reset');
				});		
			})
		},
		onActionHover : function() {
			$('.action-new').live('mouseover mouseout', function(event) {
				if (event.type == 'mouseover')
					$(event.currentTarget).children('ul').show();
				else
					$(event.currentTarget).children('ul').hide();
			})
		},
		onListContentClick : function() {
			$('.ui-layout-center-bd .list-content .content-item h4').live('click', function(event, ui) {
				//console.info(event.currentTarget);
				$('.ui-layout-center-bd .list-content .content-item').removeClass('active');
				$(this).parents('.content-item').first().addClass('active');
			})
			$('.modal .list-content tr.content-item').live('click', function(event, ui) {
				//console.info(event.currentTarget);
				$('.modal .list-content tr.content-item').removeClass('active');
				$(this).addClass('active');
			})
			$('.ui-layout-center-bd .list-content tr.content-item').live('click', function(event, ui) {
				//console.info(event.currentTarget);
				$('.ui-layout-center-bd .list-content tr.content-item').removeClass('active');
				$(this).addClass('active');
			})
			set_click_event('.ui-layout', function(event) {
				if(global.switch&&global.switch.rightpanelclear){
					if ($(event.target).is($('.ui-layout'))) {
						$('.ui-layout-center-bd .list-content .content-item').removeClass('active');
						$('.ui-layout-center-bd .list-content tr.content-item').removeClass('active');
						$('.ui-layout-right').empty();
					}					
				}
			})
		},
		onAdminBarAction : function() {
			set_hover_event('.adminbar .menu-mod', function(event) {
				$(event.currentTarget).children('.adminbar .menu-bd').show();
			}, function(event) {
				$(event.currentTarget).children('.adminbar .menu-bd').hide();
			});
			set_hover_event('.adminbar .menu-bd li', function(event) {
				$(event.currentTarget).children('ul').show();
			}, function(event) {
				$(event.currentTarget).children('ul').hide();
			});
		},
		onPreview : function() {
			set_click_event('.ui-layout-center-hd .action-preview', function() {
				var url = context_url;
				var type = context_type;
				if (!global.change)
					global.preview(url, type);
				else {
					global.confirmPreview(function() {
						$('.ui-layout-center-hd .action-save').trigger('click', function() {
							global.change = false;
							global.preview(url, type);
						});
					})
				}
				//$('#material_preview').html(global.template.preview(model.toJSON()));
				return false;
			})
		},
		onInteraction : function() {
			set_click_event('.action-interaction', function() {
				if (!global.change)
					window.open(context_url + 'interaction');
				else {
					global.confirmModal("请先保存再进行交互设定?", function() {
						$('.ui-layout-center-hd .action-save').trigger('click', function() {
							global.change = false;
							window.open(context_url + 'interaction');
						});
					})
				}
				//$('#material_preview').html(global.template.preview(model.toJSON()));
				return false;
			})
		},
		onListPreview : function() {
			set_click_event('.list-preview', function() {
				var url = $(this).attr('href');
				var type = $(this).parents('.content-item').first().attr('data-type');
				global.listpreview(url, type);
				return false;
			})
		},
		onListWorkflow : function() {
			set_click_event('.list-retract', function(opt) {

				var object_url = $(this).attr('href');
				var transition =$(this).attr('id');

				var opt = "transition=" + transition + "&comment=";
				global.confirmModal("将收回当前发布内容，继续请点击'确定'按钮", function() {
					global.json.post(object_url + "/operatestate.json", opt, function(data) {
						if (data.code == 200) {
							if (afterworkflow)
								afterworkflow(data);
						} else {
							global.throwerror(data.msg);
						}
					});
				})
				return false;
			})
			set_click_event('div.action a.workflow', function(opt) {

				if($(this).attr('class').indexOf('retract')>0) return false;

				var object_url = $(this).attr('href');
				var transition = $(this).attr('id');
				var label = $(this).text();
				var object_id = $(this).closest('.content-item').attr('id');

				if ($("div#workflow").length == 0) {
					modal_create('workflow');
				}
				$("div#workflow").html(global_workflow_template({
					"label" : label,
					"transition" : transition,
					"object_url" : object_url,
					"object_id" : object_id
				}));
				modal_show('div#workflow');
				return false;
			})
		},
		onTreeActions : function() {
			set_click_event('.wraparea .hitarea', function() {
				$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
				$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
				$(this).parent('.wraparea').parent('li:has(ul)').toggleClass('unfold');
				$(this).parent('.wraparea').parent('li:has(ul)').children('ul').slideToggle('fast');
			});
		},
		onModEvent : function(callback) {
			$('.mod').find('select').live('change', function() {
				var values = global.serializeValue($(this).parents('.mod').first());
				var name = $(this).parents('.mod').first().attr('data-name');
				var model = $(this).parents('.mod').first().attr('data-model');
				callback(name, values, model);
			})
			$('.mod').find('input[type="checkbox"]').live('change', function() {
				var values = global.serializeValue($(this).parents('.mod').first());
				var name = $(this).parents('.mod').first().attr('data-name');
				var model = $(this).parents('.mod').first().attr('data-model');
				callback(name, values, model);
			})
			$('.mod').find('input[type="radio"]').live('change', function() {
				var values = global.serializeValue($(this).parents('.mod').first());
				var name = $(this).parents('.mod').first().attr('data-name');
				var model = $(this).parents('.mod').first().attr('data-model');
				callback(name, values, model);
			})
			$('.mod').find('input[type="text"]').live('change', function() {
				var values = global.serializeValue($(this).parents('.mod').first());
				var name = $(this).parents('.mod').first().attr('data-name');
				var model = $(this).parents('.mod').first().attr('data-model');
				callback(name, values, model);
			})
			$('.mod').find('textarea').live('change', function() {
				var values = global.serializeValue($(this).parents('.mod').first());
				var name = $(this).parents('.mod').first().attr('data-name');
				var model = $(this).parents('.mod').first().attr('data-model');
				callback(name, values, model);
			})
		},
		onCollapsebarClick:function(){
			$('.collapse-bar').on('click',function (){
					$('body').toggleClass('collapsed-nav');
					$('body').toggleClass('uncollapsed-nav');
					$('.ui-layout').toggleClass('collapsed-nav');
					$('.ui-layout').toggleClass('uncollapsed-nav');
			})
		},
		onReturn:function(){
			$('div.return a').on('click',function(){
				if (($(this).attr('class') != undefined && $(this).attr('class')=='exit') || window.document.referrer==""){
					window.close()
				}else{
					window.location.href=document.referrer;
				}
				return false;
			})
		}
	}
	global.event.init();
})(); 

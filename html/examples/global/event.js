(function(global){
	global.event={
		init:function(){
			this.onSave();
			this.onActionHover();
			this.onListContentClick();
			this.onAdminBarAction();
			this.onPreview();
		},
		onSave:function(){
			set_click_event('.action-save',function(){
				//if($('.ui-layout-center').find('form#edit-form').length>0){
				//	$('form#edit-form').trigger('submit');
				//}				
			})
		},
		onActionHover:function(){
			$('.action-new').live('mouseover mouseout',function(event){
						if(event.type=='mouseover')
							$(event.currentTarget).children('ul').show();
					    else 
							$(event.currentTarget).children('ul').hide();
			})
		},
		onListContentClick:function(){
			$('.ui-layout-center-bd .list-content .content-item h4').live('click',function(event,ui){
					//console.info(event.currentTarget);
					$('.ui-layout-center-bd .list-content .content-item').removeClass('active');
					$(this).parents('.content-item').first().addClass('active');
			})
			$('.modal .list-content tr.content-item').live('click',function(event,ui){
					//console.info(event.currentTarget);
					$('.modal .list-content tr.content-item').removeClass('active');
					$(this).addClass('active');
			})	
			$('.ui-layout-center-bd .list-content tr.content-item').live('click',function(event,ui){
					//console.info(event.currentTarget);
					$('.ui-layout-center-bd .list-content tr.content-item').removeClass('active');
					$(this).addClass('active');
			})				
		},
		onAdminBarAction:function(){
			set_hover_event('.adminbar .menu-mod',function (event){
				$(event.currentTarget).children('.adminbar .menu-bd').show();
			},function (event){
				$(event.currentTarget).children('.adminbar .menu-bd').hide();
			});	 
			set_hover_event('.adminbar .menu-bd li',function (event){
				$(event.currentTarget).children('ul').show();
			},function (event){
				$(event.currentTarget).children('ul').hide();
			});	
		},
		onPreview:function(){
			set_click_event('.ui-layout-center-hd .action-preview',function(){
				//alert('preview');
				var url=context_url+'preview';
				global.html.load(url,function(data){
					$('#material_preview').html(global.template.preview({title:document.title,preview:data,description:null}));
					global.modal.show('#material_preview');	
				})
				//$('#material_preview').html(global.template.preview(model.toJSON()));	
				return false;
			})
		},
		onTreeActions:function(){
				set_click_event('.wraparea .hitarea', function() {
					$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
					$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
					$(this).parent('.wraparea').parent('li:has(ul)').toggleClass('unfold');
					$(this).parent('.wraparea').parent('li:has(ul)').children('ul').slideToggle('fast');
				});
		}
	}
	global.event.init();
})(global);
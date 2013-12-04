(function(content_list){
	content_list.event={
		init:function(){
			this.onSet();
			this.onPreview();
			this.onSave();
			this.onDelete();
			this.onCategoryLib();
			this.onQuote();
			this.onCopyItem();
		},
		onListSort:function(){
			var cancelsort=false;
			$('.ui-layout-center-bd .list-content table tbody').sortable({
				containment:'parent',
				items:'tr.content-item:not([class*="top"])',
				opacity:'0.5',
				start:function(event,ui){
					$(document).on('keyup',function(event,ui){
						console.log(event.keyCode);
						if(event.keyCode==27){
							cancelsort=true;
							$('.ui-layout-center-bd .list-content table tbody').sortable('cancel');
						}
					})
				},
				sort:function(event,ui){				
				},
				stop:function(event,ui){
					$(document).off('keyup');
				},
				update: function( event, ui ) {
					if($(ui.item).nextAll().hasClass('top')||cancelsort){
						$('.ui-layout-center-bd .list-content table tbody').sortable('cancel');
						cancelsort=false;
						return;
					}
					if($(ui.item).prevAll().length==0) var target_position=Number($(ui.item).next().attr('data-position'))+1;
					else var target_position=$(ui.item).prev().attr('data-position');
					target_position = parseInt(target_position);
					var id=$(ui.item).attr('id');
					var model=units.model.icollection.get(id);
					var contexturl=model.toJSON().url;
					var position=parseInt(model.toJSON().position);
					var url=contexturl+'/movetoposition?position='+((position<target_position)?target_position-1:target_position);
					global.json.load(url,function(data){
						if(data.code==200){
							global.message('success',data.msg);
							//$('.ui-layout-center-bd .list-content table tbody').sortable('cancel');
							content_list.list.refrash_right();
						}
						else{
							global.message('error',data.msg);
							$('.ui-layout-center-bd .list-content table tbody').sortable('cancel');
						}
					})
				},
			})
		},
		onSave:function(){
			set_click_event('.action-save',function(event){
				if(units.model.current){
					var model=global.model.getModelById(units.model,units.model.current);
					$('.action-save').button('loading');
					units.model.set('results',units.model.icollection.toJSON());
					units.model.set('type','Root');
					units.saveitems();					
				}
			})
		},
		onPreview:function(){
			set_click_event('.ui-layout-right .action-preview',function(event){
				if(units.model.current){
					var model=global.model.getModelById(units.model,units.model.current);
					window.open('http://xdad-site.21epub.com' + model.get('target_id').replace('/xdad','')+'/page');
					return false;					
				}
			})
		},
		onCategoryLib:function(){
			set_click_event('a.action-category',function(){
				contentstree.contentstreeid=$(this).parents('.content-item').first().attr('id');
				$('#lib.modal').html(category.modal_template());
				channel.list_model.icollection.reset();
				contentstree.lib_model.icollection.reset();
				content_list.category_list.render_list();
				channel.channels(function(data){
					if(data.code==200){
						var d=data.data;
						channel.list_model.set(d);
						global.model.model2tree(channel.list_model,"results","children");
						content_list.category_list.render_left();
					}
				});
				contentstree.contentstree_manage(function(data){
					if(data.code==200){
						var d=data.data;
						contentstree.lib_model.set(d);
						global.model.model2tree(contentstree.lib_model,"results","children");
						content_list.category_list.render_right();
						content_list.category_list.render_menu();
						//content_list.category_list.render_page();
					}		
				});
				global.modal.show('#lib');
				return false;
			});
		},
		onQuote:function(){
			set_click_event('.action-quote-categories',function(){
				var ids=global.get_array($('.ui-layout-center-bd input[name="unit-item"]:checked'),'value');
				var category_ids=global.get_array($('#lib .list-content input[name="category-item"]:checked'),'value');
				category_ids=_.map(category_ids,function(id){
					var model=global.model.getModelById(contentstree.lib_model,id);
					return model.get('type_categorized');
				})
				console.log(ids);
				console.log(category_ids);
				_.each(ids,function(id){
					var model=global.model.getModelById(units.model,id);
					var categories=model.toJSON().categories;
					categories.values=category_ids;
					data={categories:categories};
					model.set(data);
				})
				if(units.model.current) units.renderinfo(units.model.current);
				$('#lib.modal').empty();
				global.modal.hide('#lib.modal');
				$('button.action-save').trigger('click');
			})
		},
		onSet:function(){
			var setModel=function(name,values){
				var data={};
				data[name]=values;
				units.update(data);
			}
			global.event.onModEvent(setModel);
		},
		onDelete:function(){
			set_click_event('.list-delete_confirmation',function(){
				var id=$(this).parents('.content-item').first().attr('id')||units.model.current;
				//photogallery.insert(ids);
				global.confirmDelete(function(){
					global.model.remove(units.model,[id],function(data){
						if(data.code==200) global.message('success',data.msg);
					});
				});
				return false;
			})
		},
		onCopyItem:function(){
			set_click_event('.list-copyitem',function(){
				var id=$(this).parents('.content-item').first().attr('id')||units.model.current;

				$('#confirmModal').html(global.template.confirm({msg:"将复制当前内容,是否继续..."}));
				global.modal.show('#confirmModal');
				$('#confirmModal').find('.btn.btn-confirm').on('click',function(){

					$('#confirmModal .btn.btn-confirm').attr('disabled',1)

					var model=global.model.getModelById(units.model,id);
					var object_url = model.get('url');

					$('body').jswait();
					global.json.post(object_url + "/copyitem", {}, function(data){
						if(data.code==200){
							units.unitslist(function(data){
								$('body').jswait('close');
								if(data.code==200){
									units.model.icollection.reset();
									var d=data.data;
									units.model.set(d);
									global.model.model2collection(units.model,"results");
									content_list.list.render_right();
									content_list.list.render_page();
									content_list.event.onListSort();
									global.modal.hide('#confirmModal');
									global.message('success','内容已复制!');
								}else{
									global.message('error',data.msg);
									$('#confirmModal .btn.btn-confirm').attr('disabled',false)
								}	
							});
						}else{
							global.message('error',data.msg);
							$('#confirmModal .btn.btn-confirm').attr('disabled',false)
						}
					});
					
					return false;
				});	
				$('#confirmModal').find('.btn.btn-cancel').on('click',function(){
					global.modal.hide('#confirmModal');
				});		

				return false;
			})
		}
	}
})(content_list);

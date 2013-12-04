(function(edit){
	edit.event={
		init:function(){
			this.onSave();
			this.onMateriallist();
			this.onInsert();
			this.onNewCategory();
			this.onCategoryActions();
			this.onLib();
			this.onQuote();
			this.onDelete();
			this.onEditCategory();
			this.onSet();
			this.onPublish();
		},
		onSave:function(){
			set_click_event('.action-save',function(event){
				$('.action-save').button('loading');
				contentstree.list_model.set('results',global.model.tree2model(contentstree.list_model,"children","children"));
				contentstree.list_model.set('type','Root');
				contentstree.setcontentstree();
			})
		},
		onMateriallist:function(){
			set_click_event('.action-materiallist',function(){
				global.modal.show('#material_list');
			})			
		},
		onInsert:function(){
			set_click_event('.action-insert',function(){
				var ids=global.get_array($('input[name=material_list]:checked'),'value');
				tEditor.insert(material.richtext_insert(ids));
				return false;
			})				
		},
		onNewCategory:function(){
			set_click_event('a.action-addCategory',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				$('#category_edit').html(contentstree.edit_template({id:id,title:'',description:''}));
				$('#category_edit').addClass('add').removeClass('edit');
				global.modal.show('#category_edit');
				return false;
			})
		},
		onEditCategory:function(){
			set_click_event('a.action-edit',function(){
				if($(this).parents('.content-item').first().attr('data-type')!='Column'){
					var id=$(this).parents('.content-item').first().attr('id');
					var model=global.model.getModelById(contentstree.list_model,id);
					$('#category_edit').html(contentstree.edit_template(model.toJSON()));
					$('#category_edit').addClass('edit').removeClass('add');
					global.modal.show('#category_edit');
					return false;
				}
			})
		},
		onCategoryActions:function(){
			set_click_event('#category_edit.add button',function(){
				var data=global.serializeForm('#category_edit form');
				if(data.title) {
					//if(!$(contentstree.list_model.el).find('li.content-item[id="'+data.id+'"]').hasClass('hasmenu')) $(contentstree.list_model.el).find('li.content-item[id="'+data.id+'"]').addClass('hasmenu unfold');
					contentstree.add_category(data);
					edit.list.hasmenu_check();	
				}
				$('#category_edit').empty();
				global.modal.hide('#category_edit');
				return false;
			})	
			set_click_event('#category_edit.edit button',function(){
				var data=global.serializeForm('#category_edit form');
				if(data.title) contentstree.edit_category(data);
				$('#category_edit').empty();
				global.modal.hide('#category_edit');
				return false;
			})		
		},
		onLib:function(){
			set_click_event('a.action-lib',function(){
				contentstree.contentstreeid=$(this).parents('.content-item').first().attr('id');
				$('#lib.modal').html(contentstree.modal_template());
				contentstree.model.icollection.reset();
				content_list.list.render_list();
				contentstree.contentstree_manage(function(data){
					if(data.code==200){
						var d=data.data;
						contentstree.model.set(d);
						global.model.model2tree(contentstree.model,"results","children");
						content_list.list.render_left();
					}
				});
				units.unitslistforinsert(function(data){
					if(data.code==200){
						var d=data.data;
						units.model.icollection.reset();
						units.model.set(d);
						global.model.model2collection(units.model,"results");
						content_list.list.render_right();
						content_list.list.render_menu();
						content_list.list.render_page();
					}		
				});
				global.modal.show('#lib');
				return false;
			});
		},
		onQuote:function(){
			set_click_event('.action-quote',function(){
				var ids=global.get_array($('#lib input[name="unit-item"]:checked'),'value');
				if(!_.isEmpty(ids)) {
				//	if(!$(contentstree.list_model.el).find('li.content-item[id="'+contentstree.contentstreeid+'"]').hasClass('hasmenu')) $(contentstree.list_model.el).find('li.content-item[id="'+contentstree.contentstreeid+'"]').addClass('hasmenu unfold');
				}
				contentstree.quote(contentstree.contentstreeid,ids);
				edit.list.hasmenu_check();
				$('#lib.modal').empty();
				global.modal.hide('#lib.modal');
			})
		},
		onDelete:function(){
			set_click_event('.action-delete',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var collection=global.model.getModelCollectionById(contentstree.list_model,id);
				global.confirmDelete(function(){
					collection.remove(global.model.getModelById(contentstree.list_model,id));
				})
				return false;
			})				
		},
		onSet:function(){
			var setModel=function(name,values){
				var data={};
				data[name]=values;
				contentstree.update(data);
			}
			global.event.onModEvent(setModel);
			//$('.mod[data-name="categories"] input[name="values"]').live('change',function(){
			//	console.info(global.serializeValue($(this).parents('.mod').first()));
				//units.updateCategory($(this).attr('value'),$(this).attr('checked'));
			//})
		},
		onPublish:function(){
			set_click_event('.action-publish',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				if($(this).parent().hasClass('private')) contentstree.update({id:id,'review_state':'published'});
				else contentstree.update({id:id,'review_state':'private'});
				return false;
			})
		}
	}
})(edit);

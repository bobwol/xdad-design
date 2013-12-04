(function(content_organization){
	content_organization.event={
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
			this.onNewLink();
			this.onLinkActions();
			this.onChangeModal();
			this.onChange();
			this.onCategoryLib();
		},
		onSave:function(){
			set_click_event('.action-save',function(event){
				$('.action-save').button('loading');
				contentstree.list_model.set('results',global.model.tree2model(contentstree.list_model,"children","children"));
				contentstree.list_model.set('type','Root');
				contentstree.setcontentstree();
			})
		},
		onChangeModal:function(){
			set_click_event('.action-change',function(e){
				var id=$(this).parent().parent().parent().parent().attr("id");
				$('#material_list .modal-body').empty();
				material.change_list.render_list();
				material_list.change_model.icollection.reset();
				category.model.icollection.reset();
				category.categories('material',function(data){
					if(data.code==200){
						var d=data.data;
						category.model.set(d);
						global.model.model2tree(category.model,"results",'children');	
						material.change_list.render_left();
					}
				});
				material.materialslistforinsert(function(data){
					if(data.code==200){
						var d=data.data;
						material_list.change_model.set(d);
						global.model.model2tree(material_list.change_model,"results");
						material.change_list.render_right();
						material.change_list.render_page();
						material.change_list.render_menu();							
					}		
				});
				global.modal.show('#material_list');
				e.stopPropagation();
				return false;
			})
		},
		onChange:function(){
			set_click_event('.material_list_change',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var model=global.model.getModelById(material_list.change_model,id);
				var data=global.serializeForm('#category_edit form');
				var model_data=model.toJSON();
				data.thumbnail=model_data.thumbnail;
				data.picture=model_data.picture;
				//console.info(data);
				global.modal.hide('#material_list');
				if(data.type=="Link") $('#category_edit').html(contentstree.link_template(data));
				else $('#category_edit').html(contentstree.edit_template(data));
				return false;
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
		onNewLink:function(){
			set_click_event('a.action-addLink',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var tempModel=new icontentstreeModel({id:"temp"});
				var data=tempModel.toJSON();
				data.id=id;
				data.type="Link";
				data.href=null;
				$('#category_edit').html(contentstree.link_template(data));
				$('#category_edit').addClass('add').removeClass('edit');
				global.modal.show('#category_edit');
				return false;
			})			
		},
		onNewCategory:function(){
			set_click_event('a.action-addCategory',function(){
				var tempModel=new icontentstreeModel({id:"temp"});
				var data=tempModel.toJSON();
				var id=$(this).parents('.content-item').first().attr('id');
				data.id=id;
				$('#category_edit').html(contentstree.edit_template(data));
				$('#category_edit').addClass('add').removeClass('edit');
				global.modal.show('#category_edit');
				return false;
			})
		},
		onEditCategory:function(){
			set_click_event('a.action-edit',function(){
				var type=$(this).parents('.content-item').first().attr('data-type');
				if(type!='Column'){
					var id=$(this).parents('.content-item').first().attr('id');
					var model=global.model.getModelById(contentstree.list_model,id);
					if(type=="Link") {
						$('#category_edit').html(contentstree.link_template(model.toJSON()));
					}
					else {
						$('#category_edit').html(contentstree.edit_template(model.toJSON()));
					}
					$('#category_edit').addClass('edit').removeClass('add');
					global.modal.show('#category_edit');
					return false;
				}
			})
		},
		onLinkActions:function(){
			set_click_event('#link_edit.add button',function(){
				var data=global.serializeForm('#link_edit form');
				if(data.title&&data.href) {
					contentstree.add_link(data);
					content_organization.list.hasmenu_check();		
				}
				$('#link_edit').empty();
				global.modal.hide('#link_edit');
				return false;
			})	
			set_click_event('#link_edit.edit button',function(){
				var data=global.serializeForm('#link_edit form');
				if(data.title&&data.href) contentstree.edit_category(data);
				$('#link_edit').empty();
				global.modal.hide('#link_edit');
				return false;
			})				
		},
		onCategoryActions:function(){
			set_click_event('#category_edit.add button',function(){
				var data=global.serializeForm('#category_edit form');
				if(data.title) {
					if(data.type!="Link"||data.href){
					//if(!$(contentstree.list_model.el).find('li.content-item[id="'+data.id+'"]').hasClass('hasmenu')) $(contentstree.list_model.el).find('li.content-item[id="'+data.id+'"]').addClass('hasmenu unfold');
						contentstree.add_category(data);
						content_organization.list.hasmenu_check();	
					}
				}
				$('#category_edit').empty();
				global.modal.hide('#category_edit');
				return false;
			})	
			set_click_event('#category_edit.edit button',function(){
				var data=global.serializeForm('#category_edit form');
				if(data.title) {
					if(data.type!="Link"||data.href){
						contentstree.edit_category(data);
					}
				}
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
		onCategoryLib:function(){
			set_click_event('a.action-category',function(){
				contentstree.contentstreeid=$(this).parents('.content-item').first().attr('id');
				$('#lib.modal').html(category.modal_template());
				channel.list_model.icollection.reset();
				contentstree.lib_model.icollection.reset();
				content_organization.category_list.render_list();
				channel.channels(function(data){
					if(data.code==200){
						var d=data.data;
						channel.list_model.set(d);
						global.model.model2tree(channel.list_model,"results","children");
						content_organization.category_list.render_left();
					}
				});
				contentstree.contentstree_manage(function(data){
					if(data.code==200){
						var d=data.data;
						contentstree.lib_model.set(d);
						global.model.model2tree(contentstree.lib_model,"results","children");
						content_organization.category_list.render_right();
						content_organization.category_list.render_menu();
						//content_organization.category_list.render_page();
					}		
				});
				global.modal.show('#lib');
				return false;
			});
		},
		onQuote:function(){
			set_click_event('.action-quote-units',function(){
				var ids=global.get_array($('#lib input[name="unit-item"]:checked'),'value');
				if(!_.isEmpty(ids)) {
				//	if(!$(contentstree.list_model.el).find('li.content-item[id="'+contentstree.contentstreeid+'"]').hasClass('hasmenu')) $(contentstree.list_model.el).find('li.content-item[id="'+contentstree.contentstreeid+'"]').addClass('hasmenu unfold');
				}
				contentstree.quote(contentstree.contentstreeid,ids);
				content_organization.list.hasmenu_check();
				$('#lib.modal').empty();
				global.modal.hide('#lib.modal');
			})
			set_click_event('.action-quote-categories',function(){
				//var ids=global.get_array($('#lib input[name="category-item"]:checked'),'value');
				var ids_tree=global.get_tree_by_checkbox($('#lib .list-content'),'ul','li.content-item','input[name="category-item"]','value');
				ids_tree=global.model.getModelTreeByIdsTree(contentstree.lib_model,ids_tree);
				//console.info(ids_tree);
				contentstree.quote_category(contentstree.contentstreeid,ids_tree);
				content_organization.list.hasmenu_check();
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
})(content_organization);

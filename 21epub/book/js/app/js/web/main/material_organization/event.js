(function(material_organization){
	material_organization.event={
		init:function(){
			 this.onSave();
			 this.onNewCategory();
			 this.onCategoryActions();
			 this.onDelete();
			 this.onEditCategory();
			 this.onSet();
			 this.onChangeModal();
			 this.onChange();
		},
		onSave:function(){
			set_click_event('.action-save',function(event){
				$('.action-save').button('loading');
				category.list_model.set('results',global.model.tree2model(category.list_model,"children","children"));
				category.list_model.set('type','Root');
				category.setcategories();
			})
		},
		onNewCategory:function(){
			set_click_event('button.action-add',function(){
				var tempModel=new icategoryModel({id:"temp"});
				var data=tempModel.toJSON();
				data.id=null;
				$('#category_edit').html(category.edit_template(data));
				$('#category_edit').addClass('add').removeClass('edit');
				global.modal.show('#category_edit');
				return false;
			})			
			set_click_event('a.action-addCategory',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var tempModel=new icategoryModel({id:"temp"});
				var data=tempModel.toJSON();
				data.id=id;
				$('#category_edit').html(category.edit_template(data));
				$('#category_edit').addClass('add').removeClass('edit');
				global.modal.show('#category_edit');
				return false;
			})
		},
		onEditCategory:function(){
			set_click_event('a.action-edit',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var model=global.model.getModelById(category.list_model,id);
				$('#category_edit').html(category.edit_template(model.toJSON()));
				$('#category_edit').addClass('edit').removeClass('add');
				global.modal.show('#category_edit');
				return false;
			})
		},
		onCategoryActions:function(){
			set_click_event('#category_edit.add button',function(){
				var data=global.serializeForm('#category_edit form');
				if(data.title) {
					category.add_category(data);
					material_organization.list.hasmenu_check();		
				}
				$('#category_edit').empty();
				global.modal.hide('#category_edit');
				return false;
			})	
			set_click_event('#category_edit.edit button',function(){
				var data=global.serializeForm('#category_edit form');
				if(data.title) category.edit_category(data);
				$('#category_edit').empty();
				global.modal.hide('#category_edit');
				return false;
			})		
		},
		onDelete:function(){
			set_click_event('.action-delete',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var collection=global.model.getModelCollectionById(category.list_model,id);
				global.confirmDelete(function(){
					collection.remove(global.model.getModelById(category.list_model,id));
				})
				return false;
			})				
		},
		onSet:function(){
			var setModel=function(name,values){
				var data={};
				data[name]=values;
				category.update(data);
			}
			global.event.onModEvent(setModel);
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
				$('#category_edit').html(category.edit_template(data));
				return false;
			})
		}
	}
})(material_organization);

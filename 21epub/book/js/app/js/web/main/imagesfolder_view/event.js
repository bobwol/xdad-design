(function(imagesfolder_view){
	imagesfolder_view.event={
		init:function(){
			this.onSave();
			this.onAddpage();
			this.onInsert();
			this.onImageClick();
			this.onRemove();
			this.onInfomodActions();
			this.onChangeModal();
			this.onChange();
		},
		onSave:function(){
			set_click_event('.action-save',function(event,callback){
				$('.action-save').button('loading');
				photogallery.model.set('results',global.model.collection2model(photogallery.model,"results"));
				photogallery.setimages(callback);
			})
		},
		onAddpage:function(){
			set_click_event('.action-material',function(){
				//material_list.list.options.right.template=photogallery.list_template;
				$('#material_list .modal-body').empty();
				material_list.list.render_list();
				material_list.model.icollection.reset();
				category.model.icollection.reset();
				category.categories('material',function(data){
					if(data.code==200){
						var d=data.data;
						category.model.set(d);
						global.model.model2tree(category.model,"results",'children');	
						material_list.list.render_left();
					}
				});
				material.materialslistforinsert(function(data){
					if(data.code==200){
						var d=data.data;
						material_list.model.set(d);
						material_list.model.icollection.reset();
						global.model.model2collection(material_list.model,"results");
						material_list.list.render_right();
						material_list.list.render_page();
						material_list.list.render_menu();							
					}		
				});
				global.modal.show('#material_list');
			})			
		},
		onInsert:function(){
			set_click_event('.action-insert',function(){
				var ids=global.get_array($('input[name=material_list]:checked'),'value');
				//photogallery.insert(ids);
				material.photogallery_insert(ids);
				global.change=true;
				return false;
			})				
		},
		onChangeModal:function(){
			set_click_event('.action-change',function(){
				var id=$(this).parent().parent().parent().parent().attr("id");
				$('#material_list .modal-body').empty();
				material_list.change_list.render_list();
				material_list.change_model.icollection.reset();
				category.model.icollection.reset();
				category.categories('material',function(data){
					if(data.code==200){
						var d=data.data;
						category.model.set(d);
						global.model.model2tree(category.model,"results",'children');	
						material_list.change_list.render_left();
					}
				});
				material.materialslistforinsert(function(data){
					if(data.code==200){
						var d=data.data;
						material_list.change_model.set(d);
						global.model.model2tree(material_list.change_model,"results");
						material_list.change_list.render_right();
						material_list.change_list.render_page();
						material_list.change_list.render_menu();							
					}		
				});
				global.modal.show('#material_list');
				return false;
			})
		},
		onChange:function(){
			set_click_event('.photogallery_list_change',function(){
				var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				material.photogallery_change(id);
				global.change=true;
				return false;
			})
		},
		onImageClick:function(){
			set_click_event('.gallery-list .thumb > img',function(){
				var id=$(this).parents('li').first().attr('id');
				$(this).parents('li').first().addClass('active').siblings().removeClass('active');
				photogallery.current=id;
				var model=photogallery.model.icollection.get(id);
				$('.ui-layout-right').html(global.template.photoinfo(model.toJSON()));
			})
		},
		onRemove:function(){
			set_click_event('.action-delete',function(){
				var ids=global.get_array($('input[name=photogallery_list]:checked'),'value');
				//photogallery.insert(ids);
				global.confirmDelete(function(){
					photogallery.remove(ids);
					global.change=true;
				});
				return false;
			})	
		},
		onInfomodActions:function(){
			set_click_event('.info-mod dl p',function () {
				var id=$(this).parents('.mod').attr('id');
				global.text2form($(this),function(data){
					photogallery.model.icollection.get(id).set(data);
				});
			});			
		}
	}
})(imagesfolder_view);

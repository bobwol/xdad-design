(function(ref_resource_list){
	ref_resource_list.event={
		init:function(){
			this.onImportRef();
			this.onInsert();
			this.onRemove();
			this.onPreview();
		},
		onImportRef:function(){
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
				var current_chapter = $($(ref_resource_list.list.options.left.model.el).find('li.active'));

				if(current_chapter && ids.length){
					material.refresource_set(current_chapter.attr('id'), 'add', ids);
					global.change=true;
				}
				return false;
			})	
			set_click_event('.material_list_insert',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var current_chapter = $($(ref_resource_list.list.options.left.model.el).find('li.active'));
				if(current_chapter&&id){
					material.refresource_set(current_chapter.attr('id'), 'add', [id]);
					global.change=true;
				}
				return false;
			})			
		},
		onRemove:function(){
			set_click_event('.ref_remove',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				global.confirmDelete(function(){
					var current_chapter = $($(ref_resource_list.list.options.left.model.el).find('li.active'));
	
					if(current_chapter){
						material.refresource_set(current_chapter.attr('id'), 'remove', [id]);
						global.change=true;
					}					
				})

				return false;
			})
		},
		onPreview:function(){
			set_click_event('.ref_list_preview',function(){
				var id=$(this).parents('.content-item').first().attr('id');

				var model=ref_resource_list.model.icollection.get(id);
				$('#material_preview').html(global.template.preview(model.toJSON()));	
				global.modal.show('#material_preview');	
				return false;	
			})	
		}
	}
})(ref_resource_list);

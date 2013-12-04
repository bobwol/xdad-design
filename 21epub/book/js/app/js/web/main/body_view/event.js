(function(body_view){
	body_view.event={
		init:function(){
			this.onSave();
			this.onInsert();
			this.onMateriallist();
			this.onListInsert();
		},
		onListInsert:function(){
			set_click_event('.material_list_insert',function(){
				var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				tEditor.insert(material.richtext_insert([id]));
				return false;
			})
		},
		onInsert:function(){
			set_click_event('.action-insert',function(){
				var ids=global.get_array($('input[name=material_list]:checked'),'value');
				tEditor.insert(material.richtext_insert(ids));
				global.change=true;
				return false;
			})			
		},
		onSave:function(){
			set_click_event('.action-save',function(event,callback){
				tEditor.save_patch();
				var content=tinyMCE.getInstanceById(iCurrentModel).getBody().innerHTML;
				global.change=edit_changed=false;
				bodycontent.model.icollection.at(0).set('body',content);
				bodycontent.model.set('results',global.model.collection2model(bodycontent.model,"results"));
				bodycontent.setbody(callback);
			})
		},
		onMateriallist:function(){
			set_click_event('a[href="#sC"]',function(){
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
						global.model.model2collection(material_list.model,"results");
						material_list.list.render_right();
						material_list.list.render_page();
						material_list.list.render_menu();							
					}		
				});
				global.modal.show('#material_list');
			})			
		}
	}
})(body_view);

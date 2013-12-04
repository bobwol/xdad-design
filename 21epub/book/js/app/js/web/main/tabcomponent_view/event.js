(function(tabcomponent_view){
	tabcomponent_view.event={
		init:function(){
			this.onSave();
			this.onMateriallist();
			this.onTabChange();
			this.onNewTab();
			this.onListInsert();
			this.onInsert();
			this.onTabActions();
			this.onRemove();
			this.onEditTab();
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
		onEditTab:function(){
			set_click_event('.action-edit',function(){
				var id=$(this).attr('href').split('#')[1];
				var model=bodycontent.model.icollection.get(id);
				$('#addtab').html(bodycontent.newtab_modal_template(model.toJSON()));
				$('#addtab').addClass('edit').removeClass('add');
				global.modal.show('#addtab');			
				return false;
			})		
		},
		onSave:function(){
			set_click_event('.action-save',function(event,callback){
				var lastid=iCurrentModel.split('article')[1];
				tEditor.save_patch();
			    var content=tEditor.getData(iCurrentModel);
			    bodycontent.model.icollection.get(lastid).set('body',content);
			    global.change=edit_changed=false;
				bodycontent.model.set('results',global.model.collection2model(bodycontent.model,"results"));
				bodycontent.setbodies(callback);
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
		},
		onTabChange:function(){
		   set_click_event('.ui-layout-center-bd .nav-tabs a[data-toggle="tab"]', function (e) {
		   	  var href=$(this).attr('href');
		   	  var id=href.split('#')[1];
			  if(('article'+id)!=iCurrentModel) {
			  	 var lastid=iCurrentModel.split('article')[1];
			     var content=tEditor.getData(iCurrentModel);
			     if(bodycontent.model.icollection.get(lastid)) bodycontent.model.icollection.get(lastid).set('body',content);
			     tEditor.load('article'+id);
			  }
		   })
		},
		onNewTab:function(){
			set_click_event('.add-tab a',function(){
				$('#addtab').html(bodycontent.newtab_modal_template({id:'new',title:'',description:''}));
				$('#addtab').addClass('add').removeClass('edit');
				global.modal.show('#addtab');
				//bodycontent.add(newid);
				return false;
			})
		},
		onTabActions:function(){
			set_click_event('#addtab.add button.btn',function(){
				var newid=global.getUniqueId(bodycontent.model,'tab');
				var title=$('#addtab').find('input[id=title]').val();
				if(title!='') {
					bodycontent.add(newid,title);
					$('.ui-layout-center-bd .nav-tabs a[href="#'+newid+'"]').tab('show');
					tEditor.load('article'+newid);
					global.change=true;
				}
				global.modal.hide('#addtab');
				$('#addtab').empty();
			})
			set_click_event('#addtab.edit button.btn',function(){
				var data=global.serializeForm('#addtab form');
				if(data.title!='') {
					bodycontent.edit(data);	
					global.change=true;				
				}
				global.modal.hide('#addtab');
				$('#addtab').empty();
			})
		},
		onRemove:function(){
			set_click_event('.action-remove',function(){
				var id=$(this).attr('href').split('#')[1];
				//photogallery.insert(ids);
				global.confirmDelete(function(){
					bodycontent.remove(id);
					global.change=true;
				});
				return false;
			})	
		}
	}
})(tabcomponent_view);

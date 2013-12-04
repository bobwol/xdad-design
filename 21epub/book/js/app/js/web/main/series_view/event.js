(function(series_view){
	series_view.event={
		init:function(){
			this.onSave();
			//this.onAddpage();
			this.onInsert();
			this.onImageClick();
			this.onRemove();
			//this.onInfomodActions();
			this.onChangeModal();
			this.onChange();
			this.onLib();
		},
		onSave:function(){
			set_click_event('.action-save',function(event,callback){
				$('.action-save').button('loading');
				lhh.model.set('results',global.model.collection2model(lhh.model,"results"));
				lhh.setlhhs(callback);
			})
		},
		onLib:function(){
			set_click_event('.action-material',function(){
				contentstree.contentstreeid=$(this).parents('.content-item').first().attr('id');
				$('#lib.modal').html(lhh.modal_template());
				contentstree.model.icollection.reset();
				series_view.list.render_list();
				contentstree.contentstree_manage(function(data){
					if(data.code==200){
						var d=data.data;
						contentstree.model.set(d);
						global.model.model2tree(contentstree.model,"results","children");
						series_view.list.render_left();
					}
				});
				units.unitslistforlhh(function(data){
					if(data.code==200){
						var d=data.data;
						units.model.icollection.reset();
						units.model.set(d);
						global.model.model2collection(units.model,"results");
						series_view.list.render_right();
						series_view.list.render_menu();
						series_view.list.render_page();
					}		
				});
				global.modal.show('#lib');
				return false;
			});
		},
		onAddpage:function(){
			set_click_event('.action-material',function(){
				//material_list.list.options.right.template=lhh.list_template;
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
			var insert=function(ids){
				_.each(ids,function(id){
					var model=global.model.getModelById(units.model,id);
					var newmodel=_.clone(model.toJSON());
					newmodel.id=global.getUniqueId(lhh.model,'series_','');
					lhh.model.icollection.add(newmodel);
				})
				global.change=true;				
			}
			set_click_event('.action-insert',function(){
				var ids=global.get_array($('input[name=material_list]:checked'),'value');
				//lhh.insert(ids);
				insert(ids);
				return false;
			})	
			set_click_event('.list_insert',function(){
				var id=$(this).parents('tr').first().attr('id');
				insert([id]);
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
			set_click_event('.lhh_list_change',function(){
				var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				material.lhh_change(id);
				global.change=true;
				return false;
			})
		},
		onImageClick:function(){
			set_click_event('.gallery-list .thumb > img',function(){
				var id=$(this).parents('li').first().attr('id');
				$(this).parents('li').first().addClass('active').siblings().removeClass('active');
				lhh.current=id;
				var model=lhh.model.icollection.get(id);
				$('.ui-layout-right').html(global.template.photoinfo(model.toJSON()));
			})
		},
		onRemove:function(){
			set_click_event('.action-delete',function(){
				var ids=global.get_array($('input[name=lhh_list]:checked'),'value');
				//lhh.insert(ids);
				global.confirmDelete(function(){
					lhh.remove(ids);
					global.change=true;
				});
				return false;
			})	
		},
		onInfomodActions:function(){
			set_click_event('.info-mod dl p',function () {
				var id=$(this).parents('.mod').attr('id');
				global.text2form($(this),function(data){
					lhh.model.icollection.get(id).set(data);
				});
			});			
		}
	}
})(series_view);

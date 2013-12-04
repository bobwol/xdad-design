(function(win){
	win.material={
		insert:function(id){
			var iHandlemodel=material.model.icollection.get(id);
			var content=iHandlemodel.get('content');
			content=content+"<p><br></p>";
			tEditor.insert(content);
		},
		photogallery_insert:function(ids){
			_.each(ids,function(id){
				var model=material_list.model.icollection.get(id);
				var newmodel=_.clone(model.toJSON());
				newmodel.id=global.getUniqueId(photogallery.model,'photogallery_','');
				if(!photogallery.model.icollection.get(newmodel.id)) {
					photogallery.model.icollection.add(newmodel);
				}
			})
		},
		refresource_set:function(chapterid, type, ids){
			if(ids.length>0) {

				var ret={};
				ret["id"]=chapterid;
				ret["type"]=type;
				ret["ids"]=JSON.stringify(ids);

				global.json.post(context_url + "setrefmaterials.json",ret,function(data){
					if(data.code==200){
						global.message('success',data.msg);
						var d=data.data;
						ref_resource_list.model.set(d);
						ref_resource_list.model.icollection.reset();
						global.model.model2collection(ref_resource_list.model,"results");
						ref_resource_list.list.render_right();
						ref_resource_list.list.render_page();
						ref_resource_list.list.render_menu();

					}else{
						global.message('error',data.msg);
					}
				});
			}
		},
		check_material_is_imported:function(id){
			if(ref_resource_list.model.icollection.get(id)){
				return "disabled"
			}else{
				return ""
			}
		},
		richtext_insert:function(ids){
			var returned='';
			_.each(ids,function(id){
				var model=material_list.model.icollection.get(id);
				var content=model.get('content');
				returned=returned+content;
			})
			return returned;
		},
		list_load:function(){
			
		},
		photogallery_change:function(id){
			if(photogallery.current){
				var photogallery_model=photogallery.model.icollection.get(photogallery.current);
				var model=material_list.change_model.icollection.get(id);
				var value={};
				value.width=model.toJSON().width;
				value.height=model.toJSON().height;
				value.preview=model.toJSON().preview;
				value.thumbnail=model.toJSON().thumbnail;
				value.thumb_height=model.toJSON().thumb_height;
				value.thumb_width=model.toJSON().thumb_width;
				value.picture=model.toJSON().picture;
				value.uid=model.toJSON().uid;
				photogallery_model.set(value);
				$('.ui-layout-right').html(global.template.photoinfo(photogallery_model.toJSON()));
			}
		},
		category_change:function(id){
			if(category.list_model.current){
				var photogallery_model=photogallery.model.icollection.get(photogallery.current);
				var model=material_list.change_model.icollection.get(id);
				var value={};
				value.width=model.toJSON().width;
				value.height=model.toJSON().height;
				value.preview=model.toJSON().preview;
				value.thumbnail=model.toJSON().thumbnail;
				value.thumb_height=model.toJSON().thumb_height;
				value.thumb_width=model.toJSON().thumb_width;
				value.picture=model.toJSON().picture;
				value.uid=model.toJSON().uid;
				photogallery_model.set(value);
				$('.ui-layout-right').html(global.template.photoinfo(photogallery_model.toJSON()));
			}
		},
		renderinfo:function(id){
			var model=material_list.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		},
		init_list:function(){
			material.event.init();
			global.modal.create('material_list');
			$('#material_list').html(material.material_list_modal_template);
			global.modal.create_preview_modal('material_preview');			
		},
		init_insert_list:function(){
			material_list.model.query=material.materialslistforinsert;
			filter.list_model.query=filter.material_filterconfig;
			material_list.list=new global.list({
				list_template:global.template.list,
				list_el:'#material_list .modal-body',
				left:{
					el:'#material_list .list-tree',
					model:category.model
				},
				menu:{
					el:'#material_list .list-menu',
					model:filter.list_model,
					template:global.template.list_menu
				},
				right:{
					el:'#material_list .list-content table tbody',
					wrap:null,
					model:material_list.model,
					template:material.list_template
				},
				page:{
					el:'#material_list .list-page',
					model:material_list.model,
					template:global.template.list_page	
				}
			});			
		},
		init_change_list:function(){
			material_list.change_model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:material.change_list_template});
			material_list.change_model.query=material.materialslistforinsert;
			filter.list_model.query=filter.material_filterconfig;
			material.change_list=new global.list({
				list_template:global.template.list,
				list_el:'#material_list .modal-body',
				left:{
					el:'#material_list .list-tree',
					model:category.model
				},
				menu:{
					el:'#material_list .list-menu',
					model:filter.list_model,
					template:global.template.list_menu
				},
				right:{
					el:'#material_list .list-content table tbody',
					wrap:null,
					model:material_list.change_model,
				},
				page:{
					el:'#material_list .list-page',
					model:material_list.change_model,
					template:global.template.list_page	
				}
			});
		}
	};
	win.material_list={};
	material.material_list={};
	material.change_list={};
})(window);

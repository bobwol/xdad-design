(function(material_list){
	material_list.event={
		init:function(){
			this.onSave();
			this.onSet();
			this.onDelete();
		},
		onSave:function(){
			set_click_event('.action-save',function(event){
				if(material_list.model.current){
					var model=global.model.getModelById(material_list.model,material_list.model.current);
					$('.action-save').button('loading');
					material_list.model.set('results',[model.toJSON()]);
					material_list.model.set('type','Root');
					material.setcategories();				
				}
			})
		},
		onSet:function(){
			var setModel=function(name,values){
				var data={};
				data[name]=values;
				material.update(data);
			}
			$('.mod').find('select').live('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				setModel(name,values);
			})
			$('.mod').find('input[type="checkbox"]').live('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				setModel(name,values);
			})
			$('.mod').find('input[type="radio"]').live('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				setModel(name,values);
			})
			$('.mod').find('textarea').live('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				setModel(name,values);
			})
			//$('.mod[data-name="categories"] input[name="values"]').live('change',function(){
			//	console.info(global.serializeValue($(this).parents('.mod').first()));
				//units.updateCategory($(this).attr('value'),$(this).attr('checked'));
			//})
		},
		onDelete:function(){
			set_click_event('.list-delete_confirmation',function(){
				var id=$(this).parents('.content-item').first().attr('id')||material_list.model.current;
				//photogallery.insert(ids);
				global.confirmDelete(function(){
					global.model.remove(material_list.model,[id],function(data){
						if(data.code==200) global.message('success',data.msg);
					});
				});
				return false;
			})
		}
	}
})(material_list);

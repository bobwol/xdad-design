(function(component_list){
	component_list.event={
		init:function(){
			this.onSave();
			this.onSet();
			this.onDelete();
		},
		onSave:function(){
			set_click_event('.action-save',function(event){
				if(component.list_model.current){
					var model=global.model.getModelById(component.list_model,component.list_model.current);
					$('.action-save').button('loading');
					component.list_model.set('results',[model.toJSON()]);
					component.list_model.set('type','Root');
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
			global.event.onModEvent(setModel);
		},
		onDelete:function(){
			set_click_event('.list-delete_confirmation',function(){
				var id=$(this).parents('.content-item').first().attr('id')||component.list_model.current;
				//photogallery.insert(ids);
				global.confirmDelete(function(){
					global.model.remove(component.list_model,[id],function(data){
						if(data.code==200) global.message('success',data.msg);
					});
				});
				return false;
			})
		}
	}
})(component_list);

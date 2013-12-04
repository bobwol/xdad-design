(function(user_list){
	user_list.event={
		init:function(){
			this.onAdd();
			this.onEdit();
			this.onDelete();
			// this.onRoleSetting();
		},
		onAdd:function(){
			set_click_event('button#btn-add',function(event){
				$('#user_info_modal').html(user.add_template());	
				global.modal.show('#user_info_modal');	
				return false;	
			})
		},
		onEdit:function(){
			set_click_event('.user-edit',function(){
				var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				var model=user.list_model.icollection.get(id);
				$('#user_info_modal').html(user.edit_template(model.toJSON()));	
				global.modal.show('#user_info_modal');	
				return false;	
			})
		},
		onDelete:function(){
			set_click_event('.user-remove',function(){
				var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				global.confirmDelete(function(){
					global.model.remove(user.list_model,[id],function(data){
						if(data.code==200) global.message('success',data.msg);
					});
				});
				return false;
			})
		}
		// onRoleSetting:function(){

		// }
	}
})(user_list);

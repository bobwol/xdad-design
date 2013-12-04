(function(user){
	user.event={
		init:function(){
			this.onAdd();
			this.onEdit();
			// this.onRemove();
		},
		onAdd:function(){
			set_click_event('button#user-add',function(event){

				var user_data=global.serializeForm('#user_info_modal form');
				console.info(user_data);

				var tempModel=new iuserModel({id:"temp"});
				tempModel.set(user_data)
				tempModel.set('results',[tempModel.toJSON()])

				global.model.save(tempModel,null,function(data){
					if(data.code==200){
						global.message('success',data.msg);
						user.add(user_data);
						global.modal.hide('#user_info_modal');
					}else{
						global.message('error',data.msg);
					}
				});
			})						
		},
		onEdit:function(){
			set_click_event('button#user-edit',function(event){

				var user_data=global.serializeForm('#user_info_modal form');
				console.info(user_data);
				user.edit(_.clone(user_data));

				var model=global.model.getModelById(user.list_model, user_data.id);
				user.list_model.set('results',[model.toJSON()]);
				user.list_model.set('type','Root');
				user.setuser(function(){
					global.modal.hide('#user_info_modal');
				});
			})						
		},
		// onRemove:function(){

		// }
	}

})(user);
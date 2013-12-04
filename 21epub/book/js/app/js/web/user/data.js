(function(user){
	user.add=function(data){
		// data.id=global.getUniqueId(user.list_model,'contentstree_');
		var model=global.model.getModelById(user.list_model,data.id);
		if (model==null){
			user.list_model.icollection.add(data);			
		}
	};
	user.edit=function(data){
		var id=data.id;
		var model=global.model.getModelById(user.list_model,id);
		delete data.id;
		model.set(data);
	};
	user.remove=function(callback){
		// var url=portal_url+'componentslist.json?insert=true&portal_type=component.slide';
		// global.json.load(url,callback);
	};
	user.usersRoleSetting=function(callback){
		// var url=portal_url+'componentslist.json?insert=true&portal_type=component.slide';
		// global.json.load(url,callback);
	};
	user.setuser=function(callback){
		global.model.save(user.list_model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				if(callback) callback();
			}else{
				global.message('error',data.msg);
			}
		});
	};
	user.usersList=function(callback,opt){
		if(!opt) opt="";
		else opt='?'+opt;
		var url=portal_url+'userslist.json'+opt;
		global.json.load(url,callback);
	};
})(user);
(function(process){
	process.processlist=function(callback,opt){
		if(!opt) opt="";
		else opt='&'+opt;
		var url=portal_url+'processeslist.json?source=manage'+opt;
		global.json.load(url,callback);
	};
	process.update=function(data){
		if(process.model.current){
			var model=global.model.getModelById(process.model,process.model.current);
			if(data.roles){
				var roles=model.toJSON().roles;
				roles=_.map(roles,function(i){
					var dict=i;
					for(k in dict){
						dict[k]=data.roles[roles.indexOf(i)];
					}
					return dict;
				})
				data.roles=roles;
			}
			console.log(data);
			model.set(data);
			$(process.model.el).find('.content-item[id="'+process.model.current+'"]').addClass('active');
			global.model.save(model,{},function(data){
				if(data.code==200){
					global.message('success',data.msg);
					model.set(data.data);
					process.renderinfo(model.id);
				}
			})
		}
	};
})(process);
(function(category){
	category.categories=function(type,callback){
		var url=portal_url+'categories.json?type='+type;
		global.json.load(url,callback);
	};
	category.categoriesfortopic=function(callback){
		var url=portal_url+'topiccategories.json?source=manage';
		global.json.load(url,callback);
	};
	category.categoriesforlist=function(callback){
		var url=portal_url+'categories.json?source=manage';
		global.json.load(url,callback);
	};
	category.categoriesforinsert=function(callback){
		var url=portal_url+'categories.json?source=insert';
		global.json.load(url,callback);		
	};
	category.setcategories=function(callback){
		global.model.save(category.list_model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				if(callback) callback();
			}
		});
	}
	category.add_category=function(data){
		var parentid=data.id;
		data.id=global.getUniqueId(category.list_model,'category_');
		data.thumbnail=data.thumbnail&&unescape(data.thumbnail);
		data.picture=data.picture&&unescape(data.picture);
		if(parentid=="") var model=category.list_model;
		else var model=global.model.getModelById(category.list_model,parentid);
		model.icollection.add(data);
	};
	category.edit_category=function(data){
		var id=data.id;
		data.thumbnail=data.thumbnail&&unescape(data.thumbnail);
		data.picture=data.picture&&unescape(data.picture);
		var model=global.model.getModelById(category.list_model,id);
		delete data.id;
		model.set(data);
	};
	category.update=function(data){
		if(category.list_model.current){
			var model=global.model.getModelById(category.list_model,category.list_model.current);
			model.set(data);
			$(category.list_model.el).find('.content-item[id="'+category.list_model.current+'"]').addClass('active');
		}
	};
})(category);
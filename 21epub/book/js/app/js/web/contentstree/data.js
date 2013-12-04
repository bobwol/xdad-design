(function(contentstree){
	contentstree.contentstree=function(callback,opt){
		if(!opt) opt='';
		else opt="&"+opt;
		var url=portal_url+'contentstree.json?source=insert'+opt;
		global.json.load(url,callback);
	};
	contentstree.contentstree_manage=function(callback,opt){
		if(!opt) opt='';
		else opt="&"+opt;
		var url=portal_url+'contentstree.json?source=manage'+opt+(document.location.search?("&"+document.location.search.replace('?',"")):"");
		global.json.load(url,callback);
	};
	contentstree.setcontentstree=function(callback){
		var url=portal_url+'setcontentstree';
		global.model.save(contentstree.list_model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				if(callback) callback();
			}
		});
	}
	contentstree.add_category=function(data){
		var parentid=data.id;
		data.id=global.getUniqueId(contentstree.list_model,'contentstree_');
		var model=global.model.getModelById(contentstree.list_model,parentid);
		model.icollection.add(data);
	};
	contentstree.add_link=function(data){
		var parentid=data.id;
		data.id=global.getUniqueId(contentstree.list_model,'contentstree_');
		data.properties=["linkinfo"];
		data.type="Link";
		var model=global.model.getModelById(contentstree.list_model,parentid);
		model.icollection.add(data);
	};
	contentstree.edit_category=function(data){
		var id=data.id;
		var model=global.model.getModelById(contentstree.list_model,id);
		delete data.id;
		model.set(data);
	};
	contentstree.quote=function(id,units_ids){
		_.each(units_ids,function(unit_id){
			var model=units.model.icollection.get(unit_id);
			var data=_.clone(model.toJSON());
			data.id=id;
			contentstree.add_category(data);
		})
	};
	contentstree.quote_category=function(id,ids_tree){
		var model=global.model.getModelById(contentstree.list_model,id);
		global.model.copy_tree(contentstree.lib_model,model,ids_tree);
		///_.each(ids,function(contentstree_id){
		//	var model=global.model.getModelById(contentstree.lib_model,contentstree_id);
		//	var data=_.clone(model.toJSON());
		//	data.id=id;
		//	contentstree.add_category(data);
		//})
	};
	contentstree.update=function(data){
		if(data.id){
			var model=global.model.getModelById(contentstree.list_model,data.id);
			delete data.id;
			model.set(data);
			$(contentstree.list_model.el).find('.content-item[id="'+contentstree.list_model.current+'"]').addClass('active');			
		}
		else if(contentstree.list_model.current){
			var model=global.model.getModelById(contentstree.list_model,contentstree.list_model.current);
			model.set(data);
			$(contentstree.list_model.el).find('.content-item[id="'+contentstree.list_model.current+'"]').addClass('active');
		} 
	};
})(contentstree);
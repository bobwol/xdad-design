(function(lhh){
	lhh.getlhhs=function(callback){
		var url=context_url+'getlhhs';
		global.json.load(url,callback)
	};
	lhh.setlhhs=function(callback){
		var url=context_url+'/setlhhs';
		global.model.save(lhh.model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				if(callback) callback();
			}
		});
		//global.model.save(url,)
	};
	lhh.remove=function(ids){
		_.each(ids,function(id){
			var model=lhh.model.icollection.get(id);
		//	model.el(id).remove();
			lhh.model.icollection.remove(model);
		})
	};
})(lhh);
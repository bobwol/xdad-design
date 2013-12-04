(function(photogallery){
	photogallery.getimages=function(callback){
		var url=context_url+'/getimages';
		global.json.load(url,callback)
	};
	photogallery.setimages=function(callback){
		var url=context_url+'/setimages';
		global.model.save(photogallery.model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				global.change=false;
				if(callback) callback();
			}
		});
		//global.model.save(url,)
	};
	photogallery.remove=function(ids){
		_.each(ids,function(id){
			if(id==photogallery.current){
				$('.ui-layout-right').empty();
				photogallery.current=null;
			} 
			var model=photogallery.model.icollection.get(id);
		//	model.el(id).remove();
			photogallery.model.icollection.remove(model);
		})
	};
})(photogallery);
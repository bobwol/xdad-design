(function(component){
	component.componentslistforinsert=function(callback){
		var url=portal_url+'componentslist.json?insert=true';
		global.json.load(url,callback);
	};
	component.componentslistforinsertwithslide=function(callback){
		var url=portal_url+'componentslist.json?insert=true&portal_type=component.slide';
		global.json.load(url,callback);
	};
	component.componentslist=function(callback,opt){
		if(!opt) opt="";
		else opt='?'+opt;
		var url=portal_url+'componentslist.json'+opt;
		global.json.load(url,callback);
	};
	// material.setimages=function(data){
		// var url=context_url+'/setimages';
		// global.model.save(photogallery.model,null,function(data){
			// console.info(data);
		// },true);
		// //global.model.save(url,)
	// };
})(component);
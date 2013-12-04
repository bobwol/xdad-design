(function(filter){
	filter.filterconfig=function(callback){
		var url=portal_url+'filterconfig.json';
		global.json.load(url,callback);
	};
	filter.material_filterconfig=function(callback){
		var url=portal_url+'material_filterconfig.json';
		global.json.load(url,callback);
	};
	filter.ref_filterconfig=function(callback){
		var url=portal_url+'ref_filterconfig.json';
		global.json.load(url,callback);
	};
	filter.update_filterconfig=function(callback){
		var url=portal_url+'update_filterconfig.json';
		global.json.load(url,callback);
	};
	filter.component_filterconfig=function(callback){
		var url=portal_url+'component_filterconfig.json';
		global.json.load(url,callback);
	};
})(filter);
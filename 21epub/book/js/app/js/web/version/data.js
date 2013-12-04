(function(version){
	version.versions=function(callback){
		var url=context_url+'versions.json';
		global.json.load(url,callback);
	};
})(version);
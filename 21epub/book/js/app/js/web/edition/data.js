(function(edition){
	edition.editions=function(callback){
		var url=context_url+'editionslist.json';
		global.json.load(url,callback);
	};
})(edition);
(function(chapter){
	chapter.chapters=function(callback){
		var url=context_url+'chapters.json';
		global.json.load(url,callback);
	};
})(chapter);
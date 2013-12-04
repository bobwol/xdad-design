(function(channel){
	channel.channels=function(callback,opt){
		var url=portal_url+'channels.json';
		global.json.load(url,callback);
	};
})(channel);
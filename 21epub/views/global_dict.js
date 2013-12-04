function dict_load(callback){
	var url='items.json';
	json_load(url,function(data){
		model_set_attributes('iDict',data);
		$(document).trigger('dict_load');
		if(callback) callback();
	})
}

function globaldict_lookup(key){
	return iGlobalDict.has(key)?iGlobalDict.get(key):key;
}
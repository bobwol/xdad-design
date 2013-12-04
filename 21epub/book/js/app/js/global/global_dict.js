function dict_load(callback){
	callback();
}

function globaldict_lookup(key){
	if(iGlobalDict) return iGlobalDict.has(key)?iGlobalDict.get(key):key;
	else return key;
}
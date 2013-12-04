requirejs.config({
	paths:{
		'animal':'./animal'
	},
	shim:{
		animal:{
			exports:'animal'
		}
	}
})
require(['animal'],function(){
	
})

window.presentation=function(options){
	this.defaults={
		PreloadPages:2,
		Pageids:[],
	}
	this.options=options;
	this.options=$.extend({},this.defaults, typeof options == 'object' && options);
	this.init();
}
window.presentation.prototype={
	init:function(){
		
	}
}

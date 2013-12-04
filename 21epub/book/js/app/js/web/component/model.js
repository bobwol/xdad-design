var icomponentModel=iAppModel.extend({
	el:'#sB',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new icomponentCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new icomponentView({model:this});
	},
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		var url;
		if(method=='update'){
			url=context_url+'/setimages';
		}
		if(this.debug){
			url=url+'?debug=1';
		}
		if(method=='delete'){
			return this.get('url')+'/deleteobject';
		}
		return url;
		//if(method=='delete'){
		//	options.url=hosturl+this.url+'overlaydelete.json?id='+model.id;
		//}
		//if(method=='read'){
		//	options.url=hosturl+this.url+'overlayget.json?id='+model.id;
		//}
	}
});
var icomponentCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonreset();
		this.setonremove();
	},
	model:icomponentModel
});
var icomponentView=iAppView.extend({
	template:component.template
});
(function(component){
	component.model=new icomponentModel({id:'component',el:'#sB',wrap:"ul",template:component.template});
})(component);
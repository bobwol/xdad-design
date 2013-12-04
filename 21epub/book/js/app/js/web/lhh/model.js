var ilhhModel=iAppModel.extend({
	el:'.gallery-list .content',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new ilhhCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new ilhhView({model:this});
	},
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			return context_url+'setlhhs';
		}
		//if(method=='delete'){
		//	options.url=hosturl+this.url+'overlaydelete.json?id='+model.id;
		//}
		//if(method=='read'){
		//	options.url=hosturl+this.url+'overlayget.json?id='+model.id;
		//}
	}
});
var ilhhCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonremove();
	},
	model:ilhhModel
});
var ilhhView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update);
	},
	template:lhh.template
});
(function(lhh){
	lhh.model=new ilhhModel({id:'lhh',el:'.gallery-list .content',wrap:'ul',template:lhh.template});
})(lhh);
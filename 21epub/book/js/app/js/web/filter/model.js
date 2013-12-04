var ifilterModel=iAppModel.extend({
	setcollection:function(){
		this.icollection=new ifilterCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new ifilterView({model:this});
	},
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			return context_url+'/setimages';
		}
		//if(method=='delete'){
		//	options.url=hosturl+this.url+'overlaydelete.json?id='+model.id;
		//}
		//if(method=='read'){
		//	options.url=hosturl+this.url+'overlayget.json?id='+model.id;
		//}
	}
});
var ifilterCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonremove();
	},
	model:ifilterModel
});
var ifilterView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		//this.model.bind('change',this.update);
	},
	template:filter.template
});
(function(filter){
	filter.model=new ifilterModel({id:'filter',el:'.ui-layout-center-bd .list-menu table > thead > tr',wrap:null,template:filter.template});
	filter.list_model=new ifilterModel({id:'filter',el:'#material_list .list-menu table > thead > tr',wrap:null,template:filter.template});
	filter.model.query=filter.list_model.query=filter.filterconfig;
})(filter);
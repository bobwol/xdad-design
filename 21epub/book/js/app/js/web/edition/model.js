var iEditionModel=iAppModel.extend({
	defaults:{
		versionNumber: "000.000",
		type: "T",
		createdtime: "2012-09-11",
		creator: "",
		review_state: "private",
		published: false
	},
	el:'#edition .list-tree',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new iEditionCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iEditionView({model:this});
	},
	seturl:function(method){
		var url;
		
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			// url=portal_url+"setcategories?type=material";
		}
		if(this.debug){
			url=url+'?debug=1';
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
var iEditionCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonreset();
		this.setonremove();
	},
	model:iEditionModel
});
var iEditionView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update_tree);
	},
	template:edition.template
});
(function(edition){
	edition.model=new iEditionModel({id:'edition',el:'#edition .list-tree',wrap:'ul',template:edition.template});
})(edition);
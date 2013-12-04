var iVersionModel=iAppModel.extend({
	defaults:{
		version_id: 1,
		versionNumber: "000.000",
		creator: "1user",
		createtime: "2013-05-05",
		type: "E",
		source: "",
		state: "private",
		comment: null,
		published: false,
		pdf: null,
		html: null
	},
	el:'#version .list-tree',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new iVersionCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iVersionView({model:this});
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
var iVersionCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonreset();
		this.setonremove();
	},
	model:iVersionModel
});
var iVersionView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update_tree);
	},
	template:version.template
});
(function(version){
	version.model=new iVersionModel({id:'version',el:'#version .list-tree',wrap:'ul',template:version.template});
})(version);
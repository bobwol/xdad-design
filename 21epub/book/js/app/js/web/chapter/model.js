var ichapterModel=iAppModel.extend({
	defaults:{
	 	code: "",
		level: 0,
		numberId: "",
		title: "",
		type: "chapter",
		updated_num: 0
	},
	el:'#chapter .list-tree',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new ichapterCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new ichapterView({model:this});
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
var ichapterCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonremove();
	},
	model:ichapterModel
});
var ichapterView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update_tree);
	},
	template:chapter.template
});
(function(chapter){
	chapter.model=new ichapterModel({id:'chapter',el:'#chapter .list-tree',wrap:'ul',template:chapter.template});
})(chapter);
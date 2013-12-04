var icontentstreeModel=iAppModel.extend({
	defaults:{
	  category_support: {
	    values: []
	  },
	  type: "Category",
	  description: null,
	  children: [
	  ],
	  category_settings: {
	    showcontents: false,
	    appended: true
	  },
	  review_state:'private',
	  type_categorized: null,
	  properties: [
	    "channels",
	    "category_support",
	    "category_settings" 
	  ],
	  title: null,
	  thumbnail: null,
	  picture:null,
	  channels: {
	    web_option: 1,
	    ipad_option: 1,
	    values: [
	      "web",
	      "ipad" 
	    ]
	  },
	  creator:""
	},
	//el:'.categories',
	//wrap:'ul',
	setcollection:function(){
		this.icollection=new icontentstreeCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new icontentstreeView({model:this});
	},
	debug:false,
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		var url;
		if(method=='update'){
			url=portal_url+'setcontentstree';
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
var icontentstreeCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonreset();
		this.setonremove();
	},
	model:icontentstreeModel
});
var icontentstreeView=iAppView.extend({
	template:contentstree.template
});
var icontentstreelistModel=icontentstreeModel.extend({
	//el:'.ui-layout-center-bd .list-content' ,
	setcollection:function(){
		this.icollection=new icontentstreelistCollection();
	},
	setview:function(){
		this.iview=new icontentstreelistView({model:this});
	}
});
var icontentstreelistCollection=icontentstreeCollection.extend({
	model:icontentstreelistModel
});
var icontentstreelistView=iAppView.extend({
	template:contentstree.list_template
});
var icontentstreeLibModel=icontentstreeModel.extend({
	//el:'.ui-layout-center-bd .list-content' ,
	setcollection:function(){
		this.icollection=new icontentstreeLibCollection();
	},
	setview:function(){
		this.iview=new icontentstreeLibView({model:this});
	}
});
var icontentstreeLibCollection=icontentstreeCollection.extend({
	model:icontentstreelistModel
});
var icontentstreelistView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update_tree);
	},
	template:contentstree.list_template
});
(function(contentstree){
	contentstree.model=new icontentstreeModel({id:'contentstree',el:'.ui-layout-center-bd .list-tree',wrap:'ul',template:contentstree.template});
	contentstree.list_model=new icontentstreelistModel({id:'contentstree_list',el:'.ui-layout-center-bd .list-content',wrap:"ul",template:contentstree.list_template});
	contentstree.lib_model=new icontentstreelistModel({id:'contentstree_list',el:'#lib .list-content',wrap:"ul",template:contentstree.lib_template});
	contentstree.list_model.query=contentstree.contentstree;
	contentstree.lib_model.query=contentstree.contentstree_manage;
})(contentstree);
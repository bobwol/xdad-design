var icategoryModel=iAppModel.extend({
	defaults:{
		title:null,
		children:[],
		review_state:'private',
		creator:'',
		type:'Category',
	 	thumbnail: null,
	 	picture:null,
	 	description:null,
		category_support:{
			values:[]
		},
		properties:	["channels","category_support", "category_settings"],
		category_settings:{
			appended:true,
			showcontents:false
		},
		channels:{
			values:['ipad','web'],
			ipad_option:1,
			web_option:1
		},
	    type_categorized: null,
	    actions:[]
	},
	el:'#material_list .list-tree',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new icategoryCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new icategoryView({model:this});
	},
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		var url;
		if(method=='update'){
			url=portal_url+"setcategories?type=material";
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
var icategoryCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonremove();
	},
	model:icategoryModel
});
var icategoryView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update_tree);
	},
	template:category.template
});
(function(category){
	category.model=new icategoryModel({id:'category',el:'#material_list .list-tree',wrap:'ul',template:category.template});
})(category);
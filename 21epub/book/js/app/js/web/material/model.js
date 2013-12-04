var iMaterialModel=iAppModel.extend({
	el:'#material_list .list-content table tbody',
	wrap:null,
	setcollection:function(){
		this.icollection=new iMaterialCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iMaterialView({model:this});
	},
	debug:false,
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		var url;
		if(method=='update'){
			url=portal_url+"saveitems.json";
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
var iMaterialCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonreset();
		this.setonremove();
	},
	model:iMaterialModel
});
var iMaterialView=iAppView.extend({
	template:material.list_template
});
(function(material){
	material.model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:material.list_template});
	material_list.model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:material.list_template});
	material_list.model.query=material.materialslistforinsert;
})(material);
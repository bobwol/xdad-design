var iuserModel=iAppModel.extend({
	el:'#sB',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new iuserCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iuserView({model:this});
	},
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		var url;
		if(method=='update'){
			url=portal_url+'setusers.json';
		}
		if(this.debug){
			url=url+'?debug=1';
		}
		if(method=='delete'){
			url=portal_url+'deleteuser?id='+this.get('id');
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
var iuserCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonreset();
		this.setonremove();
	},
	model:iuserModel
});
var iuserView=iAppView.extend({
	template:user.template
});
(function(user){
	user.model=new iuserModel({id:'user',el:'#sB',wrap:"ul",template:user.list_template});
})(user);
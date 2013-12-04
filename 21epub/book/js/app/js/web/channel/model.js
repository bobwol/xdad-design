var ichannelModel=iAppModel.extend({
	el:'.ui-layout-center-bd .list-tree',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new ichannelCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new ichannelView({model:this});
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
		return url;
		//if(method=='delete'){
		//	options.url=hosturl+this.url+'overlaydelete.json?id='+model.id;
		//}
		//if(method=='read'){
		//	options.url=hosturl+this.url+'overlayget.json?id='+model.id;
		//}
	}
});
var ichannelCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
	},
	model:ichannelModel
});
var ichannelView=iAppView.extend({
	template:channel.template
});
(function(channel){
	channel.model=new ichannelModel({id:'channel',el:'.ui-layout-center-bd .list-tree',wrap:"ul",template:channel.template});
	channel.list_model=new ichannelModel({id:'channel',el:'#lib .list-tree',wrap:"ul",template:channel.template});
	channel.model.query=channel.list_model.query=channel.channels;
})(channel);
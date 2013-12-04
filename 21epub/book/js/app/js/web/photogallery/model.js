var iPhotoGalleryModel=iAppModel.extend({
	el:'.gallery-list .content',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new iPhotoGalleryCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iPhotoGalleryView({model:this});
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
var iPhotoGalleryCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonremove();
	},
	model:iPhotoGalleryModel
});
var iPhotoGalleryView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update);
	},
	template:photogallery.template
});
(function(photogallery){
	photogallery.model=new iPhotoGalleryModel({id:'photogallery',el:'.gallery-list .content',wrap:'ul',template:photogallery.template});
})(photogallery);
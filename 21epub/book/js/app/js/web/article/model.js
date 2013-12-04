define(['global/main'],function(){
window.iArticleModel=iAppModel.extend({
	defaults:{
		 "title":"",
		"id":"Article",
		"content":'',
		"referids":[],
		"numberId":'' 
	},
	el:'div.page-container',
	wrap:null,
	setcollection:function(){
		this.icollection=new iArticleCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iArticleView({model:this});
	},
	seturl:function(method){
		var url;
		
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			 url=context_url+"setarticles.json"
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
window.iArticleCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonreset();
		this.setonremove();
	},
	model:iArticleModel
});
window.iArticleView=iAppView.extend({
	initialize:function(options){
		//_.bindAll(this);
		//this.model.bind('change',this.update);
	},
	events:{
	}
});
window.ArticleModelForSave=new GlobalModelForSave({id:'ArticleSave'});
})

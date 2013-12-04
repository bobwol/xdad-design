/* model varibles */

/* for model define , when i define model , the model's main function is to define structure ,store data ,
define a collection if need , 
define a view 
*/
var iAppModel = Backbone.Model.extend({
	/* The base model have several important varibles , 
	   iParent, this attributes defines the parent model (collection) it belongs to 
	   iChild , this attributes also important when this model can contain childs , so this model should has a collection
	   url, which set by this.reseturl to change it , it points to the server url for model sync 
	   iParentdiv, this attribute use for div handle , when manage the divs of the page ,we should know what's the parent node it belong to 
	   model.id can be the same to it's collection's id
	   */
	defaults:{
	},
	initialize: function(){
	}，
	setcollection:function(type){
	},
	seturl:function(type){
	},
	setview:function(type){
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return false;
	},
	url: '', //default set to root 
	sync: function(method, model, options) {
		this.reseturl();
		if(method=='create'){
			options.url=‘’;
		}
		Backbone.emulateHTTP = true ;
		Backbone.emulateJSON = true ;
		var type=this.get('iType');
		if(this.setsync(type)) Backbone.sync(method, model, options);
	},
	reseturl:function(){}
})

/* end fo model */

/* define collections */
var iAppCollection =Backbone.Collection.extend({
	initialize:function(){
		this.setonadd();//this set the collection operations when a model add to it 
		this.setonremove();//this set the collection operations when a model remove form it 
		this.otherset();//set other operations for this collection
	},
	setonadd:function(){
	},
	setonremove:function(){
	},
	otherset:function(){
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return false;
	},
	url:'',
	reseturl:function(){},
	sync: function(method, model, options) {
		this.reseturl();
		if(method=='read'){
			options.url=hosturl+this.url+'overlayinit.json';
		}
		if(this.setsync(type)) Backbone.sync(method, model, options);
	},
	reseturl:function(){}
})
var iAppElementCollection = iBaseCollection.extend({//contain all elements include root node

})
/* end of collections */

/* define view */
var iAppView = Backbone.View.extend({
	initialize:function(options){
		_.bindAll(this);
	}
})


/* end for view */


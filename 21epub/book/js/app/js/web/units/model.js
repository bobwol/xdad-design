var iunitsModel=iAppModel.extend({
	el:'.list-content table tbody',
	wrap:null,
	setcollection:function(){
		this.icollection=new iunitsCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iunitsView({model:this});
	},
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			return portal_url+'saveitems.json';
		}
		if(method=='delete'){
			return this.get('url')+'/deleteobject';
		}
		//if(method=='read'){
		//	options.url=hosturl+this.url+'overlayget.json?id='+model.id;
		//}
	}
});
var iunitsCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonremove();
		this.setonreset();
	},
	model:iunitsModel
});
var iunitsView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update);
	},
	//el:function(){
	//	return $('ul.thumbnails').find('[id='+this.model.id+']');
	//},
	template:units.template
});
(function(units){
	units.model=new iunitsModel({id:'units',el:'.list-content table tbody',wrap:null,template:units.template});
	units.model.query=units.unitslist;
})(units);
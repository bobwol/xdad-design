var iProcessModel=iAppModel.extend({
	defaults:{
		
		title: "",
		planStart: "2013-04-01",
		planEnd: "2013-05-01",
		points: "12222412",
		references: "35435253",
		target: "/pic/greensock52a8753bgreensock/chapter_11",

		left: 0,
		progress: 100,
		status: "sreview2",

		editable: false,
		operationalitems: [], //[{enabled:true, id:"preview"}, {enabled:false, id:"active"}, {enabled:true, id:"hangup"}],		
		roles: [], //[{writing:"1user"}, {proof:""}, {sreview:""}, {sreview1:""}, {sreview2:"1user"}],
	},
	el:'.list-content table tbody',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new iProcessCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iProcessView({model:this});
	},
	seturl:function(method){
		var url;
		
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			url=portal_url+"setprocess.json?id="+this.id;
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
var iProcessCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonreset();
		this.setonremove();
	},
	model:iProcessModel
});
var iProcessView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update_tree);
	},
	events:{
		'click .process-active':'active',
		'click .process-preview':'preview',
		'click .process-hangup':'hangup'
	},
	template:process.template,
	active:function(){
		var view=this;
		var url="operateprocess.json";
		data="id="+this.model.id+"&type=active";
		global.json.post(url,data,function(d){
			if(d.code==200){
				view.model.set(d.data[0]);
			}
			else{
				global.message('error',d.msg);
			}
		})
		return false;
	},
	hangup:function(){
		var view=this;
		var url="operateprocess.json";
		data="id="+this.model.id+"&type=hangup";
		global.json.post(url,data,function(d){
			if(d.code==200){
				view.model.set(d.data[0]);
			}
			else{
				global.message('error',d.msg);
			}
		})
		return false;
	},
	preview:function(){
		if(this.model.id){
			var model=global.model.getModelById(process.model,this.model.id);
			window.open(portal_url + model.get('target') +'/preview');
		}
		return false;
		
	}
});
(function(process){
	process.model=new iProcessModel({id:'process',el:'.list-content table tbody',wrap:'ul',template:process.template});
})(process);
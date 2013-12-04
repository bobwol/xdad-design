var iProjectModel=iAppModel.extend({
	defaults:{
		demand: "123435325sdfsdfs452342",
		editable: false,
		members:[], //[{id:4user, name:WJ}, {id:1user, name:LXH}, {id:3user, name:ZYY}]
		mytasknum: 0,
		operationalitems: [], // [{enabled:true, id:preview}, {enabled:false, id:submit_review}, {enabled:false, id:submit_publish}]
		roles: [], // [{mreview:1user}, {mreview1:}, {mreview2:1user}]
		status: "started",
		target: "/pic/greensock52a8753bgreensock",
		title: "GreenSockGreenSock",
		planStart:'',
		planEnd:''
	},
	el:'.list-tree',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new iProjectCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iProjectView({model:this});
	},
	seturl:function(method){
		var url;
		
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			url=portal_url+"setproject.json?id"+this.id;
		}else if (method=='submit'){
			url=portal_url+"operateproject.json"
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
var iProjectCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonreset();
		this.setonremove();
	},
	model:iProjectModel
});
var iProjectView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update_tree);
	},
	events:{
		'click .list-preview':'preview',
		'click .list-submit_review':'submit',
		'click .list-submit_publish':'publish'
	},
	template:project.template,
	preview:function(){
		if(this.model.id){
			var model=global.model.getModelById(project.model,this.model.id);
			window.open(portal_url + model.get('target') +'/preview');
		}
		return false;
	},
	submit:function(){
		var view = this;
		$("#project_submitModal").html(task.SubmitTemplate({"model":this.model.toJSON(),"type":'submit'}));
		global.modal.show('#project_submitModal');
		$('#project_submitModal .btn').on('click',function(){
			var url="operateproject.json";
			data="id="+view.model.id+"&type=submit_review";
			global.json.post(url,data,function(d){
				if(d.code==200){
					view.model.set(d.data[0]);
				}
				else{
					global.message('error',d.msg);
				}
			})
		})
		return false;
		
	},
	publish:function(){
		if(this.model.id){
			var model=global.model.getModelById(project.model,this.model.id);
			window.location = portal_url + model.get('target') +'/edit_book_publish';
		}
		return false;
		
	}
});
(function(project){
	project.model=new iProjectModel({id:'project',el:'.list-tree',wrap:'ul',template:project.template});
})(project);
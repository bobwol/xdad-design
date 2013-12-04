var iBodyModel=iAppModel.extend({
	el:'.ui-layout-center-bd .column-bd',
	defaults:{
		title:'',
		body:''
	},
	setcollection:function(){
		this.icollection=new iBodyCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			return context_url+'setbody';
		}
		//if(method=='delete'){
		//	options.url=hosturl+this.url+'overlaydelete.json?id='+model.id;
		//}
		//if(method=='read'){
		//	options.url=hosturl+this.url+'overlayget.json?id='+model.id;
		//}
	}
});
var iBodyCollection=iAppCollection.extend({
	initialize:function(){
		//this.setonadd();//this set the collection operations when a model add to it 
		this.setonremove();//this set the collection operations when a model remove form it 
		//this.otherset();//set other operations for this collection
	},
	setonadd:function(){
		this.on('add',function(model){
			//console.info(model.attributes);
			this.parentmodel.el().append(this.parentmodel.iview.template(model.attributes));
		})
	},
	setonremove:function(){
		this.on('remove',function(model){
			$('.ui-layout-center-bd').find('a[href="#'+model.id+'"]').parent('li').remove();
			$('.ui-layout-center-bd').find('[id="'+model.id+'"]').remove();
			//this.parentmodel.el().find('[id="'+model.id+'"]').remove();
		})
	},
	model:iBodyModel
});
(function(bodycontent){
	bodycontent.model=new iBodyModel({id:'bodycontent'});
	bodycontent.tabs_model=new iBodyModel({id:'tabs'});
	bodycontent.tabs_model.el='.ui-layout-center-bd .nav-tabs';
	bodycontent.tabs_model.iview.render_collection=function(_template){
		if(!_template) _template=this.template;
		this.model.icollection.each(function(m){
           $('.ui-layout-center-bd .nav-tabs').children('ul').append(bodycontent.tab_template(m.attributes));
           $('.ui-layout-center-bd .content').append(bodycontent.content_template(m.attributes));
		});
	};
})(bodycontent);
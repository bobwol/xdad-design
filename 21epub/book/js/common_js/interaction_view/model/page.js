define(['interaction_view/model/base'],function(){
interaction_view.model.Page=interaction_view.model.Base.extend({
	defaults:{
		iType:'Page',//define type
		loaded:false
	},
	setcollection:function(){
		if(!interaction_view.ipagelist.get(this.id)) interaction_view.ipagelist.add(this);
	},
	setview:function(){
		this.iview=new interaction_view.view.Page({model:this});
	},
	setlist:function(){
		this.iViewlist=new interaction_view.collection.list();
		this.iAnimationlist=new interaction_view.collection.Animation();
		this.iActionlist=new interaction_view.collection.Action();
		this.ipreloadlist=new interaction_view.collection.Preload();
		this.ipreloadlist.pageid=this.iViewlist.pageid=this.iAnimationlist.pageid=this.iActionlist.pageid=this.id;
	},
	setsyncmodel:function(){
	}
})
interaction_view.collection.Page=interaction_view.collection.Base.extend({

});
interaction_view.view.Page = interaction_view.view.Base.extend({
	events: {
		
	},
	initstart:function(){

	},
	load:function(){
		var view=this;
		var url=context_url+this.model.id+'/';
		$.when(overlays=$.getJSON(url+'/overlayinit.json'),$.getJSON(url+'/getanimations'),$.getJSON(url+'/getactions')).done(function(data1,data2,data3){
			view.overlays=data1[0];
			view.animations=data2[0];
			view.actions=data3[0];
			view.afterload();
		})		
	},
	afterload:function(){
		var view=this;
		view.animations=_.map(view.animations,function(i){
			i.pageid=view.model.id;
			return i;
		})
		view.model.iAnimationlist.reset(view.animations);
		overlays=_.filter(view.overlays,function(d){
			d.pageid=view.model.id;
			return(interaction_view.model[d.iType]);
		});
		overlays=_.map(overlays,function(d){
			return(new interaction_view.model[d.iType](d));
		})
		view.model.iViewlist.reset(overlays);
		view.model.iViewlist.each(function(i){
			i.iview.setZindex();
		})
		view.actions=_.map(view.actions,function(i){
			i.pageid=view.model.id;
			return i;
		})
		view.model.iActionlist.reset(view.actions);	
		interaction_view.checkPageLoad(view.model.id);			
	},
	afterpreload:function(){
	    this.model.iViewlist.each(function(model){
		 	model.iview.afterpreload();
		})		
	},
	renderDynamicElement:function(){	
	},
	render:function(){
	}
})
interaction_view.ipagelist=new interaction_view.collection.Page();
interaction_view.currentPage=true;
})

define(['interaction_view/model/base'],function(){
	
interaction_view.model.Chapter=interaction_view.model.Base.extend({
	defaults:{

	},
	setcollection:function(){
	},
	setmodel:function(){
		this.setview();
	},
	setview:function(type){
		this.icollection=new interaction_view.collection.Chapter();
		this.iview=new interaction_view.view.Chapter({model:this});
	},
	setsyncmodel:function(){
	}
})
interaction_view.collection.Chapter=interaction_view.collection.Base.extend({
	initialize:function(){
		//_.bindAll(this);
		//this.setonadd();//this set the collection operations when a model add to it 
		//this.setonremove();//this set the collection operations when a model remove form it 
	},
	model:interaction_view.model.Chapter,

})
interaction_view.view.Chapter = interaction_view.view.Base.extend({
	initstart:function(){
		
	},
	events: {
		
	},
	renderDynamicElement:function(){	
	},
	render:function(fileid){
	}
})
interaction_view.iChapter=new interaction_view.model.Chapter({id:'chapter'});
})

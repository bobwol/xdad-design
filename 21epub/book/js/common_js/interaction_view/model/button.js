define(['interaction_view/model/base'],function(){
interaction_view.model.Button=interaction_view.model.Base.extend({
	defaults:{
		iType:'Button',//define type
		iVisibility:true,
		iCommon:null,
		iDetail:null,
		iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
		iParentModel:null,
		iDraggable:true,
		iResizable:true,
		iTemplate:null,
		iParentdiv:'.interaction-view',
		iAutoindex:false,
		iSync:false,
		iZindex:'-1',
		iUrl:null,
		iAutofocus:false,
		iKeyscontrol:true
	},
	setcollection:function(){
		if(!iViewlist.get(this.id)) iViewlist.add(this);
	},
	setview:function(type){
		this.iview=new interaction_view.view.Button({model:this});
	},
	setsyncmodel:function(){
	}
})
interaction_view.view.Button = interaction_view.view.Base.extend({
	events: {
		
	},
	render:function(fileid){
	},
	preload:function(){
		var detail=this.getdetail();
		if(detail.iconNormal&&detail.iconNormal[0]){
			var preload=new interaction_view.model.Preload({file:detail.iconNormal[0].picture,overlay_id:this.model.id,elementtype:this.model.get('iType'),pageid:this.model.get('pageid')});
		}	
		if(detail.iconActive&&detail.iconActive[0]){
			var preload=new interaction_view.model.Preload({file:detail.iconActive[0].picture,overlay_id:this.model.id,elementtype:this.model.get('iType'),pageid:this.model.get('pageid')});
		}
	},
	setOtherDisplay:function(){
		this.active=false;
		this.buttonon=false;
		var view=this;
		this.$el.css('cursor','pointer');
		var detail=this.getdetail();
		if(detail.isSwitch) {
			this.$el.on('click',function(e){
				view.changeStatus();
			})
		}
		else{	
			this.$el.on('mousedown',function(e){
				view.buttonon=true;
				view.changeStatus();
			})
			this.$el.on('mouseup',function(e){
				if(view.buttonon){
					view.buttonon=false;
					e.stopPropagation();
					view.changeStatus();
					view.$el.trigger('click');					
				}
			})
		}
	},
	changeStatus:function(){
		var detail=this.getdetail();
		var view=this;
		if(!view.active){
			view.$el.find('img.iconActive').show();
			view.$el.find('img.iconNormal').hide();
			//view.$el.addClass('isActive');
			view.active=true;
		}
		else{
			view.$el.find('img.iconActive').hide();
			view.$el.find('img.iconNormal').show();		
			//view.$el.removeClass('isActive');		
			view.active=false;
		}
	}
});
})

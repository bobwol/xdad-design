define(['interaction_view/model/base'],function(){
interaction_view.model.Image=interaction_view.model.Base.extend({
	defaults:{
		iType:'Image',//define type
		iLock:true,
		iVisibility:true,
		iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
		iDetail:{iAdapt:false,iFullview:false,iImg:null,iAnimation:[]},
		iParent:'',
		iChild:'',
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
		iKeyscontrol:true,
		callback:null
	},
	setcollection:function(){
		if(!iViewlist.get(this.id)) iViewlist.add(this);
	},
	setview:function(type){
		this.iview=new interaction_view.view.Image({model:this});
	},
	setsyncmodel:function(){
	}
})
interaction_view.view.Image = interaction_view.view.Base.extend({
	events: {
		
	},
	render:function(fileid){
	},
	preload:function(){
		var detail=this.getdetail();
		if(detail.iImg&&detail.iImg[0]){
			var preload=new interaction_view.model.Preload({file:detail.iImg[0].picture,overlay_id:this.model.id,elementtype:this.model.get('iType'),pageid:this.model.get('pageid')});
		}		
	}
})
});

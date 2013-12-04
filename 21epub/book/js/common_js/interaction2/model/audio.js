define(['interaction/model/base'],function(){
	interaction.model.Audio=interaction.model.base.extend({
		defaults:{
			iType:'Audio',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:50,iHeight:50},landscape:{iStartx:400,iStarty:200,iWidth:50,iHeight:50}},
			iDetail:{iAutoplay:false,iRepeat:false,iImg:null,iFile:null},
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:true,
			iResizable:true,
			iTemplate:require('text!interaction/template/element.js'),
			iParentdiv:'.interaction-area',
			iAutoindex:false,
			iSync:true,
			iZindex:'-1',
			iUrl:null,
			iAutofocus:false,
			iKeyscontrol:true,
			callback:null,
			iBackground:"rgba(219,238,49,0.5)",
			iResourcesProperties:[{id:'iFile',type:'single',category:'audio'}],
			iAnimationProperties:[{id:'animations',type:'media'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Audio({model:this});
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.Audio = interaction.view.Base.extend({

	})
})
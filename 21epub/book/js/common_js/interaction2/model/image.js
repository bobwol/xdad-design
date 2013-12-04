define(['interaction/model/base'],function(){
	interaction.model.Image=interaction.model.base.extend({
		defaults:{
			iType:'Image',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
			iDetail:{iAdapt:false,iFullview:false,iAnimation:[]},
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
			iBackground:"rgba(62,189,255,0.5)",
			iResourcesProperties:[{id:'iImg',type:'single',category:'image'}],
			iAnimationProperties:[{id:'animations',type:'object'}],
			iActionProperties:[{id:'actions',type:'object'}],
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Image({model:this});
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.Image = interaction.view.Base.extend({

	})
})
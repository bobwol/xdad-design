(function(interaction){
	interaction.model.Audio=interaction.model.Base.extend({
		defaults:{
			iType:'Audio',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
			iDetail:{iAutoplay:false,iRepeat:false,iImg:null,iFile:null},
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:true,
			iResizable:true,
			iTemplate:interaction.template.element,
			iParentdiv:'.interaction-area',
			iAutoindex:false,
			iSync:true,
			iZindex:'-1',
			iUrl:null,
			iAutofocus:false,
			iKeyscontrol:true,
			callback:null,
			iBackground:"rgba(219,238,49,0.5)",
			iResourcesProperties:[{id:'iImg',type:'single',category:'image'},{id:'iFile',type:'single',category:'audio'}],
			iAnimationProperties:[{id:'animations',type:'media'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Audio({model:this});
		},
		setsyncmodel:function(){
			var Model_JSON=this.toJSON();
			Model_JSON.iSync=false;
			this.dommodel=new interaction.model.Dom(Model_JSON);
		}
	})
	interaction.view.Audio = interaction.view.Base.extend({

	})
})(interaction);
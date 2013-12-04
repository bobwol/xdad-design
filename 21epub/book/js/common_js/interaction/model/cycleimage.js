(function(interaction){
	interaction.model.CycleImage=interaction.model.Base.extend({
		defaults:{
			iType:'CycleImage',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
			iDetail:{iAutoplay:false,iInterval:1,iImg:null},
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
			iBackground:"rgba(23,57,228,0.5)",
			iResourcesProperties:[{id:'iImg',type:'mutiple',category:'image'}],
			iAnimationProperties:[{id:'animations',type:'object'}],
			iActionProperties:[{id:'actions',type:'object'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.CycleImage({model:this});
		},
		setsyncmodel:function(){
			var Model_JSON=this.toJSON();
			Model_JSON.iSync=false;
			this.dommodel=new interaction.model.Dom(Model_JSON);
		}
	})
	interaction.view.CycleImage = interaction.view.Base.extend({
		getBackGroundUrl:function(){
			var Detail=this.model.get('iDetail');
			if(Detail.iImg&&!_.isEmpty(Detail.iImg)){
				if(_.isString(Detail.iImg[0])) return Detail.iImg[0];
				else return Detail.iImg[0].picture;
			} 
			else return false;
		},
	})
})(interaction);
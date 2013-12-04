define(['interaction/model/base'],function(){
	interaction.model.Root=interaction.model.base.extend({
		defaults:{
			iType:'Root',//define type
			iLock:true,
			iVisibility:true,
			iCommon:null,
			iDetail:{},
			iParent:null,
			iChild:null,
			iParentModel:null,
			iDraggable:false,
			iResizable:false,
			iTemplate:null,
			iParentdiv:'body',
			iSync:false,
			iZindex:'-1',
			iAutofocus:false,
			iKeyscontrol:false,
			callback:null
		},
		setdominfo:function(type){
		//	if(type=='Celltitle') ;
		//	else dom_createinfo(this.get('iParent'),this.id,this.get('iType'));
		},
		setdomfield:function(type){
		//	if(type=='State'||type=='StateGroup') dom_createfield(this.id);
		},
		reseturl:function(){
		},
		setcollection:function(type){
		},
		setview:function(type){
			this.iview=new interaction.view.Root({model:this});
		}
	})
	interaction.view.Root = interaction.view.Base.extend({
		setimageplus:function(){
			return '';
		},
		getimagename:function(imagename){//add this function to get the field of the image which name to get the image url
			//default is use iImglist
			return 'iImg';
		}
	})
})
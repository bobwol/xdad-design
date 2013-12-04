define(['interaction/model/base'],function(){
	interaction.model.Button=interaction.model.base.extend({
		defaults:{
			iType:'Button',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:44},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:44}},
			iDetail:{isSwitch:true},
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
			iBackground:"rgba(62,189,255,0.5)",
			iAnimationProperties:[{id:'animations',type:'object'}],
			iActionProperties:[{id:'actions',type:'button'}],
			iResourcesProperties:[{id:'iconNormal',type:'single',category:'image',title:'初始状态'},{id:'iconActive',type:'single',category:'image',title:'激活状态'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Button({model:this});
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.Button = interaction.view.Base.extend({
		getBackGroundUrl : function() {
			var Detail = this.model.get('iDetail');
			if (Detail.iconNormal) {
				if (Detail.iconNormal[0])
					return Detail.iconNormal[0].picture;
			} else
				return false;
		},
		getBackGroundThumbUrl:function(){
			var Detail = this.model.get('iDetail');
			if (Detail.iconNormal) {
				if (Detail.iconNormal[0])
					return Detail.iconNormal[0].thumbnail;
			} else
				return false;		
		},
		infochange:function(key,value){
			if(key=='isSwitch'){
				if(value){
					var ids=_.map(interaction.iActionList.where({overlay_id:this.model.id}),function(i){
						return i.id;
					})
					interaction.util.batch_remove_actions(ids);
					this.setaction();
					//this.actionel.find('select.actiontype').children('option').remove();
					//this.actionel.find('select.actiontype').append('<option value="1">onNomalClick</option><option value="2">onActiveClick</option>');
				}
				else{
					var ids=_.map(interaction.iActionList.where({overlay_id:this.model.id}),function(i){
						return i.id;
					})
					interaction.util.batch_remove_actions(ids);
					this.setaction();
					//this.actionel.find('select.actiontype').children('option').remove();
					//this.actionel.find('select.actiontype').append('<option value="0">onClick</option>');					
				}
			}
		}
	})
})
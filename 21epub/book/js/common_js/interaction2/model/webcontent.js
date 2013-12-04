define(['interaction/model/base'],function(){
	interaction.model.Webcontent=interaction.model.base.extend({
		defaults:{
			iType:'Webcontent',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
			iDetail:{iWebcontenttype:'local',iBackground:false,iScrollable:false,iUrl:'',iFile:null},
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
			iBackground:"rgba(144,163,12,0.5)",
			iResources:null
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Webcontent({model:this});
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.Webcontent = interaction.view.Base.extend({
		renderinfo:function(){
			this.infoel.empty();
			this.renderbaseinfo();
			this.infoel.append(interaction.template.detail[this.model.get('iType')+'Type'](this.model.toJSON()));
			this.renderposition();
			this.infoel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.renderinfosave();
			this.bindinfo();		
		},
		updateinfo:function(){
			this.infoel.find('.typedetail').replaceWith(interaction.template.detail.WebcontentType(this.model.toJSON()));
			this.updateposition();
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.bindinfo();
		},
	})
})
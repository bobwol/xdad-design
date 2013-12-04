define(['interaction/model/base'],function(){
	interaction.model.Link=interaction.model.base.extend({
		defaults:{
			iType:'Link',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
			iDetail:{iLinktype:'hyperlink',iShowicon:false,iUrl:'',iGoto:"page",iPage:'',iFile:null,iSafari:false},
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
			iBackground:"rgba(193,56,2,0.5)",
			iResourcesProperties:[{id:'iImg',type:'single',category:'image'}]
		},
		setcollection:function(){
			//if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Link({model:this});
			this.domview=new interaction.view.Dom({model:this});
		},
		setsyncmodel:function(){
			var Model_JSON=this.toJSON();
			Model_JSON.iSync=false;
			this.dommodel=new interaction.model.Dom(Model_JSON);
		}
	})
	interaction.view.Link = interaction.view.Base.extend({
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
			//$('#info_attributes').html(interaction.template.form[this.model.get('iType')](this.model.toJSON()));
			this.infoel.find('.typedetail').replaceWith(interaction.template.detail.LinkType(this.model.toJSON()));
			this.updateposition();
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.bindinfo();
		},
	})
})
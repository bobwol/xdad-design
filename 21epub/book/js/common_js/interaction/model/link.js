(function(interaction){
	interaction.model.Link=interaction.model.Base.extend({
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
			iTemplate:interaction.template.element,
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
			this.infoel.append(interaction.template.info.baseinfo(this.model.toJSON()));
			this.infoel.append(interaction.template.detail[this.model.get('iType')+'Type'](this.model.toJSON()));
			if(this.model.get('iCommon'))  this.infoel.append(interaction.template.info.common(this.model.toJSON()));
			this.infoel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.infoel.append(interaction.template.info.infosave(this.model.toJSON()));
			this.bindinfo();		
		},
		updateinfo:function(){
			//$('#info_attributes').html(interaction.template.form[this.model.get('iType')](this.model.toJSON()));
			this.infoel.find('.typedetail').replaceWith(interaction.template.detail.LinkType(this.model.toJSON()));
			if(this.model.get('iCommon'))  this.infoel.find('.Pos').replaceWith(interaction.template.info.common(this.model.toJSON()));
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.bindinfo();
		},
	})
})(interaction);
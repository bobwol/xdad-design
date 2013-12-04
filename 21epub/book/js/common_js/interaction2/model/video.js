define(['interaction/model/base'],function(){
	interaction.model.Video=interaction.model.base.extend({
		defaults:{
			iType:'Video',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
			iDetail:{iVideotype:'mediafile',iAdapt:false,iFullview:false,iControl:false,iAutoplay:false,iRepeat:false,iImg:null,iFile:null},
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
			iBackground:"rgba(255,75,75,0.5)",
			iResourcesProperties:[{id:'iFile',type:'single',category:'video'}],
			iAnimationProperties:[{id:'animations',type:'media'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Video({model:this});
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.Video = interaction.view.Base.extend({
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
			this.infoel.find('.typedetail').replaceWith(interaction.template.detail.VideoType(this.model.toJSON()));
			this.updateposition();
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.bindinfo();
		},
	})
})
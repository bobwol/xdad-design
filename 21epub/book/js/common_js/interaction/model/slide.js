(function(interaction){
	interaction.model.Slide=interaction.model.Base.extend({
		defaults:{
			iType:'Slide',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
			iDetail:{iSlidetype:'横向',iAutoplay:false,iRepeat:false,iInterval:'',iFade:'Fade',iSlipable:false,iPagenumber:false,iFullview:false,iWholeswitch:false,iImglist:null},
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
			iBackground:"rgba(1,115,9,0.5)",
			iResourcesProperties:[{id:'iImg',type:'mutiple',category:'image'}],
			iAnimationProperties:[{id:'animations',type:'object'}],
			iActionProperties:[{id:'actions',type:'object'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Slide({model:this});
		},
		setsyncmodel:function(){
			var JSON=this.toJSON();
			JSON.iSync=false;
			this.dommodel=new interaction.model.Dom(JSON);
		}
	})
	interaction.view.Slide = interaction.view.Base.extend({
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
			this.infoel.find('.typedetail').replaceWith(interaction.template.detail.SlideType(this.model.toJSON()));
			if(this.model.get('iCommon'))  this.infoel.find('.Pos').replaceWith(interaction.template.info.common(this.model.toJSON()));
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.bindinfo();
		},
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
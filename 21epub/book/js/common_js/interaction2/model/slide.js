define(['interaction/model/base'],function(){
	interaction.model.Slide=interaction.model.base.extend({
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
			iTemplate:require('text!interaction/template/element.js'),
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
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.Slide = interaction.view.Base.extend({
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
			this.infoel.find('.typedetail').replaceWith(interaction.template.detail.SlideType(this.model.toJSON()));
			this.updateposition();
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
})
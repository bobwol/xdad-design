define(['interaction/model/base'],function(){
	interaction.model.ShowHide=interaction.model.base.extend({
		defaults:{
			iType:'ShowHide',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:31,iHeight:31},landscape:{iStartx:400,iStarty:200,iWidth:31,iHeight:31}},
			iDetail:{iStatus:false,iDisplaylist:[],iIconon:'',iIconoff:'',iElementlist:[],iItemlist:[]},
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:true,
			iResizable:false,
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
			iResources:null,
			iElementattr:true,
			iIconon:null,
			iIconoff:null,
			iResourcesProperties:[{id:'iIconon',type:'single',category:'other'},{id:'iIconoff',type:'single',category:'other'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.ShowHide({model:this});
			this.domview=new interaction.view.Dom({model:this});
		},
		setsyncmodel:function(){
			var JSON=this.toJSON();
			JSON.iSync=false;
			this.dommodel=new interaction.model.Dom(JSON);
		}
	})
	interaction.view.ShowHide = interaction.view.Base.extend({
		renderinfo:function(){
			this.infoel.empty();
			this.renderbaseinfo();
	 		this.renderposition(true);
			this.infoel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
            this.updateelementattr();
            this.renderinfosave();
			this.bindinfo();		
		},
		updateinfo:function(){
			this.updateposition(true);
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.updateelementattr();
			this.bindinfo();
		},
		updatebackground:function(){
			var backgroundurl='n/i_tagicon.png';
			if(backgroundurl){
				this.$el.css('background-color','transparent');
				this.$el.css('background-image',"url("+backgroundurl+")");
				this.$el.css('background-repeat','no-repeat');
				this.$el.css('background-position','center');
				this.$el.css('background-size',this.$el.css('width')+" "+this.$el.css('height'));
			} 
			else{
				this.$el.css('background-image','none');
				this.$el.css('background-color',this.model.get('iBackground'));
			}
		},
		info_focus:function(){
			interaction.changeTab('info_attributes');// when a focus happy ,alway focus to the info attributes area 
			var detail=this.getdetail();
			var ids=interaction.elementlist.pluck('id');
			detail.iItemlist=_.filter(detail.iItemlist,function(iItem){
				return _.include(ids,iItem);
			})
			this.updateinfo();
			this.updateresources();
			this.setdetail({iItemlist:detail.iItemlist});
			this.bindinfo();
		},
	})
})
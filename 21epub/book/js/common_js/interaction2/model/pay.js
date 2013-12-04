define(['interaction/model/base','text!interaction/template/pay.js'],function(){
	interaction.model.Pay=interaction.model.base.extend({
		defaults:{
			iType:'Pay',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:300,iHeight:500},landscape:{iStartx:400,iStarty:200,iWidth:300,iHeight:500}},
			iDetail:{iAdapt:false,iFullview:false,iAnimation:[],iText:'<iframe width="300" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://a.m.tmall.com/i21518136613.htm"></iframe>'},
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
			iBackground:"rgba(62,189,255,0.5)",
			//iResourcesProperties:[{id:'iImg',type:'single',category:'image'}],
			iAnimationProperties:[{id:'animations',type:'object'}],
			//iActionProperties:[{id:'actions',type:'object'}],
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Pay({model:this});
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.Pay = interaction.view.Base.extend({
		events : {
			"contextmenu":'onMouseDown',
			"mousedown .iMask" : "focus",
			"click .iMask" : "focus",
			"click button.action-done" : "confirm",
			"click button.action-del" : "removemodel",
			//"click button.action-cancel" : "revert",
			"mouseover" : "mouseover",
			"mouseout" : "mouseout"
		},
		render: function(){//this render always used for a newly create type to show to display and to focus 
			this.activeEditor=false;
			var JSON=this.model.toJSON();
			var payT=require('text!interaction/template/map.js');
			var el=_.template(payT,this.model.toJSON());
			$(this.model.get('iParentdiv')).append(el);
			this.setElement(interaction.div_find(this.model.id));
			this.updatebackground();
			if (this.model.get('iDraggable'))
				this.setdraggable();
			if (this.model.get('iResizable'))
				this.setresizable();
			this.infoel=$('#info_attributes').children('.setting-body');
	    	return this;
		},
		updatebackground:function(){
			var common=this.getcommon();
			this.$el.find('.iContent').html('<iframe width="'+common.iWidth+'" height="'+common.iHeight+'" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://a.m.tmall.com/i21518136613.htm"></iframe>');
		},
		updatepos : function() {
			var common = this.getcommon();
			if (common) {
				this.$el.css('left', common.iStartx + 'px');
				this.$el.css('top', common.iStarty + 'px');
				this.$el.width(common.iWidth);
				this.$el.height(common.iHeight);
			}
			this.$el.find('.iContent').children('iframe').width(common.iWidth);
			this.$el.find('.iContent').children('iframe').height(common.iHeight);
			this.setdetail({iText:this.$el.find('.iContent').html()});
		},
		afternewcreate:function(){
			this.storeundodata();
			this.undosave(0);
			if(this.model.afternewcreated) this.model.afternewcreated(this.model.id);
			else{
				this.resourcesel = $('#info_attributes').children('.setting-body').find('div.resources');
				if(this.model.get('iType')!="RichText"){
					if(this.resourcesel) this.resourcesel.find('.action-file').first().trigger('click',true);
				}			
			}
			this.model.save();
		}
	})
})
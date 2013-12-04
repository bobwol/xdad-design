(function(interaction){
	interaction.model.RichText=interaction.model.Base.extend({
		defaults:{
			iType:'RichText',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
			iDetail:{iTitle:'',iText:'',iBackground:false,iScrollable:false},
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
			iBackground:"rgba(0,105,114,0.5)",
			iResources:null,
			iAnimationProperties:[{id:'animations',type:'object'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.RichText({model:this});
		},
		setsyncmodel:function(){
			var JSON=this.toJSON();
			JSON.iSync=false;
			this.dommodel=new interaction.model.Dom(JSON);
		}
	})
	interaction.view.RichText = interaction.view.Base.extend({
		renderinfo:function(){
			this.infoel.empty();
			this.infoel.append(interaction.template.info.baseinfo(this.model.toJSON()));
			if(this.model.get('iCommon'))  this.infoel.append(interaction.template.info.common(this.model.toJSON()));
			this.infoel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.infoel.append(interaction.template.info.infosave(this.model.toJSON()));
			this.bindinfo();	
			this.$el.find('iframe').css('height',this.getcommon().iHeight+'px');	
		},
		updateinfo:function(){
			if(this.model.get('iCommon'))  this.infoel.find('.Pos').replaceWith(interaction.template.info.common(this.model.toJSON()));
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.bindinfo();
			this.$el.find('iframe').css('height',this.getcommon().iHeight+'px');
		},
		render: function(){//this render always used for a newly create type to show to display and to focus 
			var JSON=this.model.toJSON();
			var el=interaction.template.richtext(this.model.toJSON());
			//$('.interaction-area').append(this.make("div", {"class": "element "+JSON.iType}, interaction.template.element(this.model.toJSON())));
			$(this.model.get('iParentdiv')).append(el);
			this.setElement(interaction.div_find(this.model.id));
			this.updatebackground();
			this.updatetext();
			this.infoel=$('#info_attributes').children('.setting-body');
			//global.setscrollnano(this.$el);
	    	//this.delegateEvents();
	    	return this;
		},
		otherfocus:function(){
			var editorid='tEditor_'+this.model.id;
			tinyMCE.execCommand('mceAddControl',false,editorid);
		},
		beforeconfirm:function(){
			this.settext();
		}
	})
})(interaction);
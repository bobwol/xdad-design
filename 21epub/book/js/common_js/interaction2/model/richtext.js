define(['interaction/model/base',
		'text!interaction/template/richtext.js',
		'iEditor/main'],function(){
	interaction.model.RichText=interaction.model.base.extend({
		defaults:{
			iType:'RichText',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:500,iHeight:40},landscape:{iStartx:400,iStarty:200,iWidth:500,iHeight:40}},
			iDetail:{iTitle:'',iText:null,iBackground:false,iScrollable:false},
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
			iBackground:"rgba(0,105,114,0.5)",
			iResources:null,
			iAnimationProperties:[{id:'animations',type:'object'}]
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.RichText({model:this});
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.RichText = interaction.view.Base.extend({
		events : {
			'mousedown':'onMouseDown',
			"mousedown .iText" : "focus",
			"click .iText" : "focus",
			"click button.action-done" : "confirm",
			"click button.action-del" : "removemodel",
			"click button.action-cancel" : "revert",
			"mouseover" : "mouseover",
			"mouseout" : "mouseout",
			'dblclick .iText':'seteditor'
		},
		renderinfo:function(){
			this.infoel.empty();
			this.renderbaseinfo();
			this.renderposition();
			this.infoel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.renderinfosave();
			this.bindinfo();	
			this.$el.find('iframe').css('height',this.getcommon().iHeight+'px');	
		},
		updateinfo:function(){
			this.updateposition();
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.bindinfo();
			this.$el.find('iframe').css('height',this.getcommon().iHeight+'px');
		},
		render: function(){//this render always used for a newly create type to show to display and to focus 
			this.activeEditor=false;
			var JSON=this.model.toJSON();
			var richtextT=require('text!interaction/template/richtext.js');
			var el=_.template(richtextT,this.model.toJSON());
			$(this.model.get('iParentdiv')).append(el);
			this.setElement(interaction.div_find(this.model.id));
			this.updatebackground();
			this.updatetext();
			if (this.model.get('iDraggable'))
				this.setdraggable();
			if (this.model.get('iResizable'))
				this.setresizable();
			this.infoel=$('#info_attributes').children('.setting-body');
			//global.setscrollnano(this.$el);
	    	//this.delegateEvents();
	    	return this;
		},
		seteditor:function(){
			if(!interaction.current||interaction.current.id!=this.model.id) return;
			var editorid='tEditor_'+this.model.id;
			if(this.activeEditor){

			} 
			else{
				tinymce.execCommand('mceAddEditor',false,editorid);
				this.activeEditor=true;
				this.$el.draggable('disable');
				this.$el.resizable('disable');
				$('#interaction-area').selectable('destroy');
			} 
			return false;
		},
		beforeconfirm:function(){
			var editorid='tEditor_'+this.model.id;
			if(this.activeEditor) tinymce.execCommand('mceRemoveEditor',false,editorid);
			$('#'+editorid).blur();
			this.activeEditor=false;
			this.$el.draggable('enable');
			this.$el.resizable('enable');
			$('#interaction-area').selectable({
				filter:'div.element'
			});
			this.settext();
		},
		gettext:function(){
			var textval=this.$el.find('.iText').html();
			return textval;
		},
		settext : function() {
			var textval = this.$el.find('.iText').html();
			this.setdetail({
				iText : textval
			});
			this.model.trigger('change:text');
		},
		updatetext : function() {
			//this.textel = this.$el.find('div[id="tEditor_' + this.model.id + '"]');
			//this.$el.find('iframe').css('height', this.getcommon().iHeight + 'px');
		},
		keyshandlefortext:function(code){
			if(code==27){
				var editorid='tEditor_'+this.model.id;
				$('#'+editorid).blur();
				tinymce.execCommand('mceRemoveEditor',false,editorid);
				this.activeEditor=false;
				this.$el.draggable('enable');
				this.$el.resizable('enable');
				$('#interaction-area').selectable({
					filter:'div.element'
				});
			}			
		}
	})
})
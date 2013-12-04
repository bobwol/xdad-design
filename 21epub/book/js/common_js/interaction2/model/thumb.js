define(['interaction/model/base','text!interaction/template/thumbitem.js'],function(){
	interaction.model.Thumb=interaction.model.base.extend({
		defaults:{
			iType:'thumb',//define type
			iLock:true,
			iVisibility:true,
			iCommon:null,
			iDetail:null,
			iParent:'',
			iChild:'',
			iOptions:{createfocus:false},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:false,
			iResizable:false,
			iTemplate:require('text!interaction/template/thumbitem.js'),
			iParentdiv:'',
			iAutoindex:false,
			iSync:false,
			iZindex:'-1',
			iUrl:null,
			iAutofocus:false,
			iKeyscontrol:false,
			callback:null,
			iBackground:"rgba(62,189,255,0.5)",
			iPageid:null
		},
		setcollection:function(){
		},
		setview:function(type){
			this.iview=new interaction.view.Thumb({model:this});
		},
		setmodel : function() {
			this.setview();
		}
	})
	interaction.collection.Thumb=interaction.collection.Base.extend({
		model:interaction.model.Thumb
	});
	interaction.view.Thumb = interaction.view.Base.extend({
		events:{
			// 'mouseover':'mouseover',
			// 'mouseout':'mouseout',
			// 'click a.action-showhide':'setelementvisibility',
			// 'dblclick .btn-draged':'elementfocus',
			// 'click a.action-del':'elementremove'
		},
		bindelementchange:function(){
			if(!this.model) return;
			this.model.on('change:position',this.positionchange);
			this.model.on('change:background',this.backgroundchange);
			this.model.on('change:text',this.textchange);
			this.model.on('change:remove',this.elementremove);
		},
		bindtextchange:function(){
			//$(document).on('editorchange',this.textchange);
		},
		elementremove:function(){
			this.$el.remove();
			//this.model.destroy();
		},
		positionchange:function(){
			var comm={};
			 var common=$.extend({},this.model.getcommon());
			 comm.iStartx=common.iStartx*100/1024;
			 comm.iStarty=common.iStarty*75/768;
			if(this.model.get('iType')!='RichText') comm.iWidth=Number(common.iWidth)*100/1024;
			else comm.iWidth=common.iWidth;
			if(this.model.get('iType')!='RichText') comm.iHeight=Number(common.iHeight)*75/768;
			else comm.iHeight=common.iHeight;
			if(this.model.get('iType')=='RichText') comm=this.adjustTextPosition(comm);
			this.updatepos(comm);
		},
		updatepos:function(common){
			this.$el.css('left', common.iStartx + 'px');
			this.$el.css('top', common.iStarty + 'px');
			this.$el.width(common.iWidth);
			this.$el.height(common.iHeight);			
		},
		backgroundchange:function(){
			var imageurl=this.model.iview.getBackGroundThumbUrl();
			if(imageurl){
				if(this.$el.find('img').length==0)	this.$el.append('<img style="width:100%;height:100%;"></img>');
				this.$el.find('img').attr('src',imageurl);
			} 
			else this.$el.find('img').remove();
		},
		textchange:function(){
			//console.log(this.model);
			var text=this.model.iview.gettext();
			if(text) this.$el.html(text);
		},
		render : function() {//this render always used for a newly create type to show to display and to focus
			if(!this.model.get('iPageid')) return ;
			var pageid=this.model.get('iPageid');
			var container=$('.thumbs').find('li[id="'+pageid+'"]');
			var JSON = this.model.toJSON();
			var thumbT=require('text!interaction/template/thumbitem.js');
			var el = _.template(thumbT,JSON);
			container.append(el);
			this.setElement(container.find('[data-id="'+this.model.id+'"]'));
			if(this.model.get('iType')=='RichText') this.parseText();
			this.positionchange();
			this.bindelementchange();
			return this;
		},
		parseCommon:function(){
			var common=this.getcommon();
			if(!common) return ;
			common.iStartx=Number(common.iStartx)*100/1024;
			common.iStarty=Number(common.iStarty)*75/768;
			if(this.model.get('iType')!='RichText') common.iWidth=Number(common.iWidth)*100/1024;
			if(this.model.get('iType')!='RichText') common.iHeight=Number(common.iHeight)*75/768;
			this.setcommon(common);
		},
		parseText:function(){
			var common=this.getcommon();
			var obj=this.$el[0];
			var scale=120/1024;
			var scaledeltax=common.iStartx-(common.iWidth-common.iWidth*100/1024)/2;
			var scaledeltay=common.iStarty-(common.iHeight-common.iHeight*75/768)/2;
			TweenMax.to(obj,0,{css:{scale:100/1024}});
			TweenMax.to(obj,0,{css:{left:scaledeltax,top:scaledeltay}});
		},
		adjustTextPosition:function(common){
			common.iStartx=common.iStartx-(common.iWidth-common.iWidth*100/1024)/2;
			common.iStarty=common.iStarty-(common.iHeight-common.iHeight*75/768)/2;	
			return common;		
		}
	})
	interaction.thumblist=new interaction.collection.Thumb();
})
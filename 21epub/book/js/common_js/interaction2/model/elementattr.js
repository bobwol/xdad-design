define(['interaction/model/base','text!interaction/template/elementattr.js'],function(){
	interaction.model.Elementattr=interaction.model.base.extend({
		defaults:{
			iType:'Elementattr',//define type
			iLock:true,
			iVisibility:true,
			iCommon:null,
			iDetail:null,
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:false,
			iResizable:false,
			iTemplate:require('text!interaction/template/elementattr.js'),
			iAutoindex:true,
			iSync:false,
			iZindex:'-1',
			iAutofocus:false,
			elementid:null,
			attr:null
		},
		setsyncmodel:function(){
			this.elementmodel=iElementlist.get(this.get('elementid'));		
		},
		setview:function(){
			this.iview=new interaction.view.Elementattr({model:this});
		},
		setfocus:function(type){
		}
	});
	interaction.collection.Elementattr=interaction.collection.Base.extend({
		setonremove:function(){
			var collection=this;
			this.on('remove',function(model){
				var imglist=collection.pluck('picture');
				//console.info(imglist);	
				if(imglist.length==0){
					imglist=null;

				}
				var dict={}
				dict[model.elementmodel.get('iElementattr')]=imglist;
				model.elementmodel.iview.setdetail(dict);
			})
		},
	});
	interaction.view.Elementattr = interaction.view.Base.extend({
		events:{
		//	'click a#imglist_remove':'remove',
		},
		destroy:function(){
			this.$el.remove();
			//this.model.elementmodel.set
			//this.model.elementmodel.updateElementattr();
		},
		remove:function(){
			if(!removeconfirm()) return false;
			this.model.destroy();
		},
		render:function(){
			var Model_JSON=this.model.toJSON();
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var Template=this.model.get('iTemplate');
			var el=_.template(Template,this.model.toJSON());
			$('#info_attributes .elementlist').children('ul').append(el);
			this.setElement($('#info_attributes .elementlist').find('li[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.get('elementid'));
	    	//this.delegateEvents();
	    	return this;
		},
		change:function(){
			
		}
	})
	interaction.iElementattrlist=new interaction.collection.Elementattr();
})
(function(interaction){
	interaction.model.Resources=interaction.model.Base.extend({
		defaults:{
			iType:'Resources',//define type
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
			iTemplate:interaction.template.Resources,
			iAutoindex:true,
			iSync:false,
			iZindex:'-1',
			iAutofocus:false,
			picture:null,
			elementid:null
		},
		setsyncmodel:function(){
			this.elementmodel=iElementlist.get(this.get('elementid'));		
		},
		setview:function(){
			this.iview=new interaction.view.Resources({model:this});
		},
		setfocus:function(type){
		}
	});
	interaction.collection.Resources=interaction.collection.Base.extend({
		setonremove:function(){
			var collection=this;
			this.on('remove',function(model){
				var dict={};
				var attr=model.get('resourceattr');
				var imglist=collection.where({'resourceattr':attr});
				imglist=_.map(imglist,function(model){
					return model.toJSON();
				})
				//console.info(imglist);	
				dict[attr]=imglist;
				model.elementmodel.iview.setdetail(dict);
			})
		},
	});
	interaction.view.Resources = interaction.view.Base.extend({
		events:{
			'click a.action-del':'remove',
		},
		destroy:function(){
			this.$el.remove();
			//this.model.elementmodel.set
			//this.model.elementmodel.updateresources();
		},
		remove:function(){
			interaction.confirmDelete(function(){
				this.model.destroy();
			})
		},
		render:function(){
			var JSON=this.model.toJSON();
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			if(JSON.preview) var el=interaction.template.ResourcesItem(this.model.toJSON());
			var attr=this.model.get('resourceattr');
			//$('.interaction-area').append(this.make("div", {"class": "element "+JSON.iType}, interaction.template.element(this.model.toJSON())));
			$('#info_attributes').find('fieldset.resources[id="'+attr+'"]').append(el);
			this.setElement($('#info_attributes').find('fieldset.resources[id="'+attr+'"]').find('div[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.get('elementid'));
	    	//this.delegateEvents();
	    	return this;
		},
		change:function(){
			
		}
	})
	interaction.iResourceslist=new interaction.collection.Resources();
})(interaction);
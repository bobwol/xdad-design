(function(interaction){
	interaction.model.tree=interaction.model.Base.extend({
		defaults:{
			iType:'tree',//define type
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
			iTemplate:interaction.template.tree,
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
		setcollection:function(){
			if(!interaction.itreelist.get(this.id)) interaction.itreelist.add(this);
		},
		setlist:function(){
			this.icollection=new interaction.collection.treelist();
			this.icollection.parentmodel=this;
		},
		setview:function(){
			this.iview=new interaction.view.tree({model:this});
		},
		setfocus:function(type){
		}
	});
	interaction.collection.tree=interaction.collection.Base.extend({

	});
	interaction.collection.treelist=interaction.collection.Base.extend({
		model:interaction.model.tree,
		setonadd:function(){
			var collection=this;
				this.on('add',function(model){
			})
		},
	});
	interaction.view.tree = interaction.view.Base.extend({
		events:{
			'mouseover div.btn-draged':'focuselement',
			'mouseout div.btn-draged':'unfocuselement',
		},
		focuselement:function(){
			interaction.elementlist.get(this.model.id).iview.highlight();
		},
		unfocuselement:function(){
			interaction.elementlist.get(this.model.id).iview.cancelhighlight();
		},
		destroy:function(){
			this.$el.remove();
		},
		remove:function(){
			if(!removeconfirm()) return false;
			this.model.destroy();
		},
		render:function(){
			var JSON=this.model.toJSON();
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var Template=this.model.get('iTemplate');
			var el=Template(this.model.toJSON());
			var parent=this.model.get('iParent');
			//$('.interaction-area').append(this.make("div", {"class": "element "+JSON.iType}, interaction.template.element(this.model.toJSON())));
			if(!parent) $('#info_attributes .elementlist').children('ul').append(el);
			else {
				$('#info_attributes .elementlist').find('li[id="'+parent+'"]').children('ul').append(el);
			}
			this.setElement($('#info_attributes .elementlist').find('li[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.get('elementid'));
	    	//this.delegateEvents();
	    	return this;
		},
		change:function(){
			
		}
	})
	interaction.itreelist=new interaction.collection.tree();
})(interaction);
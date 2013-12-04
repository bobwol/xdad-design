(function(interaction){
	interaction.model.Dom=interaction.model.Base.extend({
		defaults:{
			iType:'Dom',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{},
			iDetail:{},
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:true,
			iResizable:true,
			iTemplate:interaction.template.Dom,
			iAutoindex:false,
			iSync:false,
			iZindex:'-1',
			iAutofocus:false
		},
		initialize: function(){
			if(!iDomlist.get(this.id)) iDomlist.add(this);//this use for model collection fatch when new model create
			this.setview(this.get('iType'));
			this.elementmodel=iElementlist.get(this.id);
		},
		setview:function(type){
			this.iview=new interaction.view.Dom({model:this});
		},
		setfocus:function(type){
		}
	});
	interaction.collection.Dom=interaction.collection.Base.extend({
		
	});
	interaction.view.Dom = interaction.view.Base.extend({
		events:{
			'mouseover':'mouseover',
			'mouseout':'mouseout',
			'click a.action-showhide':'setelementvisibility',
			'dblclick .btn-draged':'elementfocus',
			'click a.action-del':'elementremove'
		},
		elementfocus:function(){
			this.model.elementmodel.iview.focus();
			return false;
		},
		elementremove:function(){
			var model=this.model;
			model.elementmodel.iview.removemodel();
			return false;
		},
		setelementvisibility:function(){
			if(this.model.elementmodel.get('iVisibility')==true){
				this.model.elementmodel.iview.hidediv();
				this.$el.find('a.action-showhide').removeClass('active');
			}
			else {
				this.model.elementmodel.iview.showdiv();
				this.$el.find('a.action-showhide').addClass('active');
			}	
			return false;	
		},
		mouseover:function(event,ui){
				this.model.elementmodel.iview.highlight();
				//this.$el.addClass('highlight');
				return false;
		},
		mouseout:function(){
				this.model.elementmodel.iview.cancelhighlight();
				//this.$el.removeClass('highlight');
				return false;
		},
		render:function(){
			var Model_JSON=this.model.toJSON();
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=interaction.template.Dom(this.model.toJSON());
			$('#info_dom').find('.categories').children('ul').prepend(el);
			this.setElement($('#info_dom').find('li[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.id);
			this.$el.find('[rel="tooltip"]').tooltip();
	    	//this.delegateEvents();
	    	return this;
		},
		change:function(){
			var el=interaction.template.Dom(this.model.toJSON());
			this.$el.replaceWith(el);
			this.setElement($('#info_dom').find('li[id="'+this.model.id+'"]'));
			this.$el.find('[rel="tooltip"]').tooltip();
		}
	})
	var iDomlist=new interaction.collection.Dom();
})(interaction);
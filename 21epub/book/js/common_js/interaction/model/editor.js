(function(interaction){
	interaction.model.Editor=interaction.model.Base.extend({
		defaults:{
			iType:'Editor',//define type
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
			iTemplate:interaction.template.Editor,
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
			this.iview=new interaction.view.Editor({model:this});
		},
		setfocus:function(type){
		}
	});
	interaction.collection.Editor=interaction.collection.Base.extend({

	});
	interaction.view.Editor = interaction.view.Base.extend({
		events:{
			//'click a#imglist_remove':'remove',
		},
		destroy:function(){
			this.$el.remove();
		},
		render:function(){
			var Model_JSON=this.model.toJSON();
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=this.make("div", {
				"class": "tEditor iText" , "id":this.model.id
				}, interaction.template.Editor(this.model.toJSON())
			);
			this.elementel=interaction.div_find(this.model.get('elementid'));
			this.elementel.append(el);
			this.setElement(this.elementel.find('div[id="'+this.model.id+'"]'));
	    	return this;
		},
		change:function(){
			
		}
	})
	interaction.iEditorlist=new interaction.collection.Editor();
})(interaction);
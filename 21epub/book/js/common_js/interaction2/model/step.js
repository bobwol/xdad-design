define(['interaction/model/base'],function(){
	interaction.model.Step=interaction.model.base.extend({
		defaults:{
			iType:'Step',//define type
			iLock:true,
			iVisibility:true,
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iTemplate:null,
			iAutoindex:true,
			iSync:false,
			iAutofocus:false,
			title:null,
			description:null,
			iOptype:null,
			iPrevAllData:null,
			iPrevAllAnimations:null,
			iPrevAllActions:null,
			iCurrentAllData:null,
			iCurrentAllAnimations:null,
			iCurrentAllActions:null,
			iObj:null,
			iPrevData:null,
			iCurrentData:null,
			iDetail:null,
			iMutiple:false
		},
		setsyncmodel:function(){	
		},
		setview:function(){
			this.iview=new interaction.view.Step({model:this});	
		},
		setfocus:function(type){
		}
	});
	interaction.collection.Step=interaction.collection.Base.extend({
		model:interaction.model.Step,
		setonremove:function(){
			var collection=this;
			this.on('remove',function(model){
			})
		},
	});
	interaction.view.Step = interaction.view.Base.extend({
		events:{
			//'click a.action-del':'remove',
			//'click a.action-backgroundpreview':'previewbackground'
		},
		destroy:function(){
			this.$el.remove();
			//this.model.elementmodel.set
			//this.model.elementmodel.updateresources();
		},
		remove:function(){
			var view=this;
			interaction.confirmDelete(function(){
				view.model.destroy();
			})
		},
		render:function(){
			// var JSON=this.model.toJSON();
			// //div_createaddDiv(this.model.id,this.model.get('iType'));
			// var el=_.template(pagelibitemT,JSON);
// 
			// $('#info_lib').find('fieldset[id=pagelib]').find('div.list').children('ul').append(el);
			// this.setElement($('#info_lib').find('fieldset[id=pagelib]').find('div.list').find('li[id="'+this.model.id+'"]'));
			// this.$el.find('[rel=tooltip]').tooltip();
	    	//this.delegateEvents();
	    	return this;
		},
		change:function(){
			
		}
	})
	interaction.iUndolist=new interaction.collection.Step();
	interaction.iRedolist=new interaction.collection.Step();
})
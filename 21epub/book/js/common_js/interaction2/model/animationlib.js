define(['interaction/model/base','text!interaction/template/libitem.js'],function(){
	var animationlibitemT=require('text!interaction/template/libitem.js');
	interaction.model.Animationlibitem=interaction.model.base.extend({
		defaults:{
			iType:'Animationlibitem',//define type
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
			picture:null,
			title:null,
			description:null
		},
		setsyncmodel:function(){	
		},
		setview:function(){
			this.iview=new interaction.view.Animationlibitem({model:this});	
		},
		setfocus:function(type){
		}
	});
	interaction.collection.Animationlibitem=interaction.collection.Base.extend({
		model:interaction.model.Animationlibitem,
		setonremove:function(){
			var collection=this;
			this.on('remove',function(model){
			})
		},
		setonreset:function(){
			var collection=this;
			this.on('reset',function(model){
				$('fieldset#animationlib').find('.list').children('ul').empty();
			})
		}
	});
	interaction.view.Animationlibitem = interaction.view.Base.extend({
		events:{
			'click a.action-play': 'preview',
			'click a.action-copyto': 'copyto',
			'click a.action-del':'removeitem',
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
			var JSON=this.model.toJSON();
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=_.template(animationlibitemT,JSON);

			$('#info_lib').find('fieldset[id=animationlib]').find('div.list').children('ul').prepend(el);
			this.setElement($('#info_lib').find('fieldset[id=animationlib]').find('div.list').find('li[id="'+this.model.id+'"]'));
			this.$el.find('[rel=tooltip]').tooltip();
	    	//this.delegateEvents();
	    	return this;
		},
		change:function(){
			
		},
		preview:function(){
			interaction.lib.animationpreview(this.model.id);
		},
		copyto:function(){
			var id=this.model.id;
			interaction.lib.addanimationfromlib(id);
		},
		removeitem:function(){
			var id=this.model.id;
			global.confirmDelete(function(){
				interaction.lib.deleteanimationfromlib(id);
			})	
		}
	})
	interaction.iAnimationliblist=new interaction.collection.Animationlibitem();
})
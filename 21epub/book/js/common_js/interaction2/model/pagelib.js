define(['interaction/model/base','text!interaction/template/libitem.js'],function(){
	var pagelibitemT=require('text!interaction/template/libitem.js');
	interaction.model.Pagelibitem=interaction.model.base.extend({
		defaults:{
			iType:'Pagelibitem',//define type
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
			this.iview=new interaction.view.Pagelibitem({model:this});	
		},
		setfocus:function(type){
		}
	});
	interaction.collection.Pagelibitem=interaction.collection.Base.extend({
		model:interaction.model.Pagelibitem,
		setonremove:function(){
			var collection=this;
			this.on('remove',function(model){
			})
		},
		setonreset:function(){
			var collection=this;
			this.on('reset',function(model){
				$('fieldset#pagelib').find('.list').children('ul').empty();
			})
		}
	});
	interaction.view.Pagelibitem = interaction.view.Base.extend({
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
			var el=_.template(pagelibitemT,JSON);

			$('#info_lib').find('fieldset[id=pagelib]').find('div.list').children('ul').prepend(el);
			this.setElement($('#info_lib').find('fieldset[id=pagelib]').find('div.list').find('li[id="'+this.model.id+'"]'));
			this.$el.find('[rel=tooltip]').tooltip();
	    	//this.delegateEvents();
	    	return this;
		},
		change:function(){
			
		},
		preview:function(){
			interaction.lib.pagepreview(this.model.id);
		},
		copyto:function(){
			var id=this.model.id;
			var position=interaction.currentpage.get('position')+1;
			interaction.lib.addpagefromlib(id,position);
		},
		removeitem:function(){
			var id=this.model.id;
			global.confirmDelete(function(){
				interaction.lib.deletepagefromlib(id);
			})	
		}
	})
	interaction.iPageliblist=new interaction.collection.Pagelibitem();
})
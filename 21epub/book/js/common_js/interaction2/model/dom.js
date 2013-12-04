define(['interaction/model/base','text!interaction/template/dom.js'],function(){
	interaction.view.Dom = interaction.view.Base.extend({
		events:{
			'mouseover':'mouseover',
			'mouseout':'mouseout',
			'click a.action-showhide':'setelementvisibility',
			'dblclick .btn-draged':'elementfocus',
			'dblclick h4':'elementfocus',
			'click a.action-del':'elementremove'
		},
		elementfocus:function(){
			this.model.iview.focus();
			return false;
		},
		elementremove:function(){
			var model=this.model;
			model.iview.removemodel();
			return false;
		},
		setelementvisibility:function(){
			if(!this.model.iview.$el.hasClass('hide')){
				this.model.iview.hidediv();
				this.$el.find('a.action-showhide').removeClass('active');
			}
			else {
				this.model.iview.showdiv();
				this.$el.find('a.action-showhide').addClass('active');
			}	
			return false;	
		},
		mouseover:function(event,ui){
				this.model.iview.highlight();
				//this.$el.addClass('highlight');
				return false;
		},
		mouseout:function(){
				this.model.iview.cancelhighlight();
				//this.$el.removeClass('highlight');
				return false;
		},
		render:function(){
			this.model.bind('change:detail',this.change);
			var Model_JSON=this.model.toJSON();
			var domT=require('text!interaction/template/dom.js');
			var el=_.template(domT,this.model.toJSON());
			$('#info_dom').find('.list').children('ul').prepend(el);
			this.setElement($('#info_dom').find('li[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.id);
			this.$el.find('[rel="tooltip"]').tooltip();
	    	//this.delegateEvents();
	    	return this;
		},
		change:function(){
			var domT=require('text!interaction/template/dom.js');
			var el=_.template(domT,this.model.toJSON());
			this.$el.replaceWith(el);
			this.setElement($('#info_dom').find('li[id="'+this.model.id+'"]'));
			this.$el.find('[rel="tooltip"]').tooltip();
		}
	})
})
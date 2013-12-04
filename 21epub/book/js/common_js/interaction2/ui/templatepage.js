define([
	'global/main',
	"text!interaction/template/page.js"
],function(){
var TemplateForPage=require("text!interaction/template/page.js");
	return {
		load:function(){
			$.getJSON(portal_url+'templates/getimages',function(data){
				data=data.data;
				if(data.results){
					interaction.templatepage.render(data.results);
				}
			})
		},
		render:function(results){
			_.each(results,function(i){
				new interaction.templatepage.model(i);
			})
		},
		model:Backbone.Model.extend({
			initialize:function(){
				this.iview=new interaction.templatepage.view({model:this});
			}
		}),
		view:Backbone.View.extend({
			initialize:function(){
				_.bindAll(this);
				this.render();
			},
			events:{
				'click a.addpage':'addpage'
			},
			render:function(){
				this.container=$('header .templates').children('ul');
				var el=_.template(TemplateForPage,this.model.toJSON());
				this.container.append(el);
				this.setElement(this.container.find('li[id="'+this.model.id+'"]'));
				return this;
			},
			addpage:function(){
				var position=interaction.currentpage.get('position')+1;
				var url='addpage.json?template_id='+this.model.id+'&position='+position;
				jqwait_simple();
				$.getJSON(url, function(data) {
					if(data.code==200){
						var id=data.data.id;
						$.getJSON(context_url+'getimages', function(data) {
							if(data.code==200){
								console.log(data);
								iPagelist.reset([],{silent:true});
								var thumbitems=$('.doc-layout-left .thumbs').children('ul').children('li').detach();
								iPagelist.add(data.data.results);
								thumbitems.each(function(i){
									$('.doc-layout-left .thumbs').children('ul').children('li[id="'+$(this).attr('id')+'"]').append($(this).children('.interaction_thumbitem'));
								})
								if(interaction.currentpage){
									iPagelist.get(id).iview.focus();
								}
								jqwait_simple_close();
							}
						});	
						global.message('success',data.msg);	
					}
				});	
				return false;			
			}
		})
	}	
})

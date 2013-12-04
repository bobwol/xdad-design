var TemplateForPage=require("text!template/page.js");
(function(win){
	win.templatePage={
		load:function(){
			$.getJSON(portal_url+'templates/getimages',function(data){
				data=data.data;
				if(data.results){
					templatePage.render(data.results);
				}
			})
		},
		render:function(results){
			_.each(results,function(i){
				new templatePage.model(i);
			})
		},
		model:Backbone.Model.extend({
			initialize:function(){
				this.iview=new templatePage.view({model:this});
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
				this.container=$('.action-add .templates').children('ul');
				var el=_.template(TemplateForPage,this.model.toJSON());
				this.container.append(el);
				this.setElement(this.container.find('li[id="'+this.model.id+'"]'));
				return this;
			},
			addpage:function(){
				var url='addpage.json?template_id='+this.model.id;
				jqwait_simple();
				$.getJSON(url, function(data) {
					if(data.code==200){
						var ipage=data.data;
						ipage.iType='Page';
						ipage.isNew=true;
						iPagelist.add(ipage);
						jqwait_simple_close();
					}
				});	
				return false;			
			}
		})
	}
})(window);

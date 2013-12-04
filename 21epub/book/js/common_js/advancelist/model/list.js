/* model define for list module */
define(['global/main'],function(){
	var iListModel = Backbone.Model.extend({
		defaults:{
		},
		options:{		
		},
		initialize: function(){
			if(!this.id){//if isnew
				var prefix=this.get('iType')?this.get('iType'):this.get('type');
				this.set("id",prefix+"_"+this.cid+(new Date()).getTime());
			}
			if(this.get('isRoot')){
				this.unset('isRoot');
				this.isRoot=true;
			}
			this.setoptions();
			this.setcollection();
			this.setview();
		},
		setcollection:function(type){
			var options=$.extend({},this.options);
			this.collectionstructure=iListCollection.extend({options:options})
			this.icollection=new this.collectionstructure();
		},
		setoptions:function(options){
			this.options=$.extend({},this.options);
			if(this.isRoot) this.options.level=0;
			this.options.id=this.id;
			//this.icollection.options=$.extend({},this.options);
			this.updateurl=this.options.saveurl;				
		},
		setview:function(){
			var events=$.extend({},this.options.events);
			this.viewstructure=iListView.extend({events:events});
			this.iview=new this.viewstructure({model:this});
		},
		url: '', //default set to root 
		deleteurl:'',
		sync: function(method, model, options) {
			switch(method){
				case 'create': options.url=this.createurl;break;
				case 'update': options.url=(typeof this.updateurl)=="function"?this.updateurl():this.updateurl;break;
				case 'read': options.url=this.readurl;break;
				case 'delete':options.url=this.deleteurl;break;
			}
			if(!options.url) return;
			// if(this.debug){
				// options.url=options.url+'?debug=1';
			// }
			Backbone.emulateHTTP = true ;
			Backbone.emulateJSON = true ;
			Backbone.sync(method, model, options);
		},
	})
	
	/* end fo model */
	
	/* define collections */
	var iListCollection =Backbone.Collection.extend({
		options:{
		},
		model:function(attr,opt){
			return new opt.collection.modelstructure(attr,opt);
		},
		initialize:function(){
			this.setonadd();//this set the collection operations when a model add to it 
			this.setonremove();//this set the collection operations when a model remove form it 
			this.setonreset();
			var options=$.extend({},this.options);
			options.level+=1;
			this.modelstructure=iListModel.extend({defaults:options.defaults,options:options});
		},
		gridadd:function(model){
			var collection=this;
			var options=collection.options;
			if(model.isRoot) return;
			if(!options.container) return;
			var el=options.container;
			var wrap=options.wrap;
			var values=model.attributes;
			template=options.template;
			var templatevalue='';
			if(typeof template=='function') templatevalue=template(values);
			else if(typeof template=='string') templatevalue=_.template(template,values);
			var parent=$(options.el);
			if(wrap){	
				if(parent.children(wrap).length>0){
				}
				else {
					var wrapelement=document.createElement(wrap);
					parent.append(wrapelement);
				}		
				parent.children(wrap).append(templatevalue);
			}
			else parent.append(templatevalue);
			if(options.type=='custom'&&parent.find('[id="'+model.id+'"]').length==0){
				model.iview.setElement(parent);	
			}
			else model.iview.setElement(parent.find('[id="'+model.id+'"]'));	
			model.iview.addClassName();		
			model.iview.addInlineEditor();	
		},
		treeadd:function(model){
			var collection=this;
			var options=collection.options;
			if(model.isRoot) return;
			if(!options.container) return;
			var el=options.container;
			var wrap=options.wrap;
			template=options.template;
			var values=model.attributes;
			var templatevalue='';
			if(typeof template=='function') templatevalue=template(values);
			else if(typeof template=='string') templatevalue=_.template(template,values);
			if(options.level!=0){
				var parent=$(options.el).find('[id="'+options.id+'"]');
			}
			else {
				var parent=$(options.el);
			}
			if(wrap){
				if(parent.children(wrap).length>0){
				}
				else {
					var wrapelement=document.createElement(wrap);
					parent.append(wrapelement);
				}
				parent.children(wrap).append(templatevalue);
			}
			else parent.append(templatevalue);
			model.iview.setElement(parent.find('[id="'+model.id+'"]'));	
			model.iview.addClassName();	
			model.iview.addInlineEditor();
		},
		setonreset:function(){
			var collection=this;
			this.on('reset',function(model){
				if(collection.options.el&&collection.options.reset) $(collection.options.el).empty();
			})
		},
		setoffadd:function(){
			this.off('add');
		},
		setonadd:function(){
			var collection=this;
			this.on('add',function(model){
				if(collection.options.type=='grid'||collection.options.type=='custom')
					collection.gridadd(model);
				if(collection.options.type=='tree')
					collection.treeadd(model);
			})
		},
		setonremove:function(){
			var collection=this;
			this.on('remove',function(model){
				$(collection.options.el).find('[id="'+model.id+'"]').addClass('updating');
				$(collection.options.el).find('[id="'+model.id+'"]').fadeOut(1000,function(){
					$(collection.options.el).find('[id="'+model.id+'"]').remove();
				});
				if(collection.options.rightpanel){
					$('.ui-layout-right').find('.mod[data-modelid="'+model.id+'"]').remove();
				}
			})
		},
		url:'',
		sync: function(method, model, options) {
			return ;
			//if(this.setsync(type)) Backbone.sync(method, model, options);
		}
	})
	var iListView = Backbone.View.extend({
		initialize:function(options){
			_.bindAll(this);
			if(this.model.options.bindchange) {
				if(this.model.options.type=='grid'||this.model.options.type=="custom")
					this.model.bind('change',this.update);
				if(this.model.options.type=='tree')
					this.model.bind('change',this.update_tree);
			}
		},
		addClassName:function(){
			if(!this.model.options.className) return ;
			if(this.$el.hasClass(this.model.options.className)) return;
			this.$el.addClass(this.model.options.className);
		},
		addInlineEditor:function(){
			var view=this;
			if(this.model.options.inlineEdit){
				this.$el.find('[data-type=text]','[data-type=textarea]').each(function(){
					$(this).on('click',function(){
						global.text2form($(this),function(data){
							if(data){
								view.model.set(data);
								if(view.model.options.onChange) view.model.options.onChange(view.model.id);
							}
						})
					})
				})
			}			
		},
		render_model:function(_template){
			if(!_template) _template=this.model.options.template;
			var templatevalue='';
			if(typeof _template=='function') templatevalue=_template(this.model.toJSON());
			else if(typeof _template=='string') templatevalue=_.template(_template,this.model.toJSON());
			return templatevalue;
		},
		return_tree:function(_template){
			if(!_template) _template=this.model.options.template;
			var templatevalue='';
			if(typeof _template=='function') templatevalue=_template(this.model.toJSON());
			else if(typeof _template=='string') templatevalue=_.template(_template,this.model.toJSON());
			var returned='';
			var dom,parent;
			returned=templatevalue;
			if(this.model.icollection.length>0) {
				dom=parent=$(returned);
				if(this.model.wrap) {
					var wrap=document.createElement(this.model.wrap);
					dom.append(wrap.outerHTML);
					parent=dom.children(this.model.wrap);
				}
				this.model.icollection.each(function(m){
					var result=m.iview.return_tree(_template);
					parent.append(result);
				})
				returned=dom[0].outerHTML;
			}
			return returned;
		},
		update:function(){//update for single model
			if(!this.model.isRoot) {
				var $active=$(this.model.options.container).find('[id="'+this.model.id+'"]').hasClass('active');
				$(this.model.options.container).find('[id="'+this.model.id+'"]').replaceWith(this.render_model());	
				this.setElement($(this.model.options.container).find('[id="'+this.model.id+'"]'));	
				if($active) $(this.model.options.container).find('[id="'+this.model.id+'"]').addClass('active');
				if(this.model.options.onChange) this.model.options.onChange(this.model.id);
				this.addClassName();
				this.addInlineEditor();
				$(this.model.options.container).find('[id="'+this.model.id+'"]').addClass('updating');
				this.updateEffect();
			}
		},
		update_tree:function(){
			if(!this.model.isRoot) {
				$hasmenu=$(this.model.options.container).find('[id="'+this.model.id+'"]').hasClass('hasmenu')?'hasmenu ':'';
				$hasfolder=$(this.model.options.container).find('[id="'+this.model.id+'"]').hasClass('unfold')?'unfold ':'';
				$active=$(this.model.options.container).find('[id="'+this.model.id+'"]').hasClass('active')?'active ':'';
				var childrenContent='';
				if(this.model.options.wrap){
					if($(this.model.options.container).find('[id="'+this.model.id+'"]').find(this.model.options.wrap).length>0)
						childrenContent=$(this.model.options.container).find('[id="'+this.model.id+'"]').children(this.model.options.wrap).detach();
				};
				$(this.model.options.container).find('[id="'+this.model.id+'"]').replaceWith(this.render_model());
				this.setElement($(this.model.options.container).find('[id="'+this.model.id+'"]'));	
				$(this.model.options.container).find('[id="'+this.model.id+'"]').append(childrenContent);
				$(this.model.options.container).find('[id="'+this.model.id+'"]').addClass($hasmenu+$hasfolder+$active);
				if(this.model.options.onChange) this.model.options.onChange(this.model.id);
				this.addClassName();
				this.addInlineEditor();
				$(this.model.options.container).find('[id="'+this.model.id+'"]').addClass('updating');
				this.updateEffect();
			}
		},
		updateEffect:function(){
			if(this.model.options.type=='custom'||!this.model.options.updateEffect) return;
			var update =$(this.model.options.container).find('[id="'+this.model.id+'"]');
			t2 = setTimeout(function() {
				update.removeClass('updating');
			}, 1000);			
		},
		savemodel:function(callback){
			this.model.save(
				{},
				{
					wait:true,
					success: function(m,response){
						if($('.action-save').length>0) $('.action-save').button('reset');
						returned=eval(response);
						lists.message('success',response.msg);
						if(callback) callback(response);
					},
					error:function(){
						if($('.action-save').length>0) $('.action-save').button('reset');
						lists.message('error','服务器请求未应答');
					}
				}
			);			
		},
		simpledelete:function(callback){
				var view=this;
				this.model.deleteurl=null;
				//photogallery.insert(ids);
				lists.confirmDelete(function(){
					view.model.destroy();
					if(callback) callback();
				});
				return false;
		},
		deletemodel:function(callback){
				var view=this;
				this.model.deleteurl=this.model.get('url')+'/deleteobject';
				//photogallery.insert(ids);
				lists.confirmDelete(function(){
					view.model.destroy({
						wait:true,
						success: function(m,response){
							if(response.code==200) global.message('success',response.msg);
							if(callback) callback(response);
						},
						error:function(){
							lists.message('error','服务器请求未应答');
						}
					});
				});
				return false;
		}
	})
	var ListModelForSave=Backbone.Model.extend({
			initialize:function(){
				this.set('id','GlobalSave');
			},
			sync: function(method, model, options) {
				var Model_JSON=this.data;
				this.attributes=Model_JSON;
				if(method=='create'){
					return;
				}
				if(method=='update'){
					options.url=this.url;
				}
				if(method=='delete'){
					return;
				}
				if(method=='read'){
					return;
				}
				Backbone.emulateHTTP = true ;
				Backbone.emulateJSON = true ;
				Backbone.sync(method, model, options);
			}
	});
	var ModelForSaveAll=new ListModelForSave();
	return {
		model:iListModel,
		collection:iListCollection,
		view:iListView,
		ModelForSaveAll:ModelForSaveAll
	}
})
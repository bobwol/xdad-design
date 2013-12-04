/* model varibles */

/* for model define , when i define model , the model's main function is to define structure ,store data ,
define a collection if need , 
define a view 
*/
var iCurrentModel=null;
var iAppModel = Backbone.Model.extend({
	/* The base model have several important varibles , 
	   iParent, this attributes defines the parent model (collection) it belongs to 
	   iChild , this attributes also important when this model can contain childs , so this model should has a collection
	   url, which set by this.reseturl to change it , it points to the server url for model sync 
	   iParentdiv, this attribute use for div handle , when manage the divs of the page ,we should know what's the parent node it belong to 
	   model.id can be the same to it's collection's id
	   */
	//el:'body',
	//wrap:null,
	defaults:{
	},
	initialize: function(){
		this.el=this.get('el');
		this.wrap=this.get('wrap');
		this.template=this.get('template');
		this.unset('el');
		this.unset('wrap');
		this.unset('template');
		if(this.collection){
			this.Root=this.collection.parentmodel.Root;
		}
		else this.Root=this;
		this.el=this.Root.el;
		this.wrap=this.Root.wrap;
		this.template=this.Root.template;
		this.setcollection();
		this.setview();
		this.setcollectionparentmodel();
	},
	setcollection:function(type){
		this.icollection=new iAppCollection();
	},
	setcollectionparentmodel:function(){
		this.icollection.parentmodel=this;
	},
	seturl:function(method){
	},
	setview:function(){
		this.iview=new iAppView({model:this});
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return false;
	},
	removeeffect:true,
	url: '', //default set to root 
	sync: function(method, model, options) {
		//this.reseturl();
		options.url=this.seturl(method);
		Backbone.emulateHTTP = true ;
		Backbone.emulateJSON = true ;
		//var type=this.get('iType');
		if(this.setsync()) Backbone.sync(method, model, options);
	},
	reseturl:function(){}
})

/* end fo model */

/* define collections */
var iAppCollection =Backbone.Collection.extend({
	model:iAppModel,
	initialize:function(){
		//this.setonadd();//this set the collection operations when a model add to it 
		//this.setonremove();//this set the collection operations when a model remove form it 
		//this.otherset();//set other operations for this collection
	},
	setonreset:function(){
		this.on('reset',function(model){
			$(this.parentmodel.el).empty();
		})
	},
	setoffadd:function(){
		this.off('add');
	},
	setonadd:function(){
		this.on('add',function(model){
			el=global.model.getRootModel(model).el;
			wrap=global.model.getRootModel(model).wrap;
			var values=model.attributes;
			template=global.model.getRootModel(model).template;
			var templatevalue='';
			if(typeof template=='function') templatevalue=template(values);
			else if(typeof template=='string') templatevalue=_.template(template,values);
			var parent=$(el);
			if(wrap){	
				if(parent.children(wrap).length>0){
				}
				else {
					var wrapelement=document.createElement(wrap);
					parent.append(wrapelement);
				}		
				$(el).children(wrap).append(templatevalue);
			}
			else $(el).append(templatevalue);
			model.iview.setElement($(el).find('[id="'+model.id+'"]'));
		})
	},
	setonaddtree:function(){
		this.on('add',function(model){
			el=model.Root.el;
			wrap=model.Root.wrap;
			template=model.Root.template;
			var values=model.attributes;
			var templatevalue='';
			if(typeof template=='function') templatevalue=template(values);
			else if(typeof template=='string') templatevalue=_.template(template,values);
			if(this.parentmodel.id!=model.Root.id){
				var parentmodel=this.parentmodel;
				var parent=$(el).find('[id="'+parentmodel.id+'"]');
			}
			else {
				var parent=$(model.Root.el);
			}
			if(wrap){
				if(parent.children(wrap).length>0){
					parent.children(wrap).append(templatevalue);
				}
				else {
					var wrapelement=document.createElement(wrap);
					parent.append(wrapelement);
					parent.children(wrap).append(templatevalue);
				}
			}
			else parent.append(templatevalue);
			model.iview.setElement(parent.find('[id="'+model.id+'"]'));
		})
	},	
	setonremove:function(){
		var collection=this;
		this.on('remove',function(model){
			if(model.Root.current==model.id) $('.ui-layout-right').empty();
			if(model.removeeffect){
				$(collection.parentmodel.el).find('[id="'+model.id+'"]').addClass('updating');
				$(collection.parentmodel.el).find('[id="'+model.id+'"]').fadeOut(1000,function(){
					$(collection.parentmodel.el).find('[id="'+model.id+'"]').remove();
				});
			}
			else $(collection.parentmodel.el).find('[id="'+model.id+'"]').remove();
		})
	},
	otherset:function(){
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return false;
	},
	url:'',
	reseturl:function(){},
	sync: function(method, model, options) {
		this.reseturl();
		if(method=='read'){
			options.url=hosturl+this.url+'overlayinit.json';
		}
		if(this.setsync(type)) Backbone.sync(method, model, options);
	},
	reseturl:function(){}
})
var iAppElementCollection = Backbone.Collection.extend({//contain all elements include root node
	initialize:function(){
		//this.onRemove();
	},
	onRemove:function(){
		this.on('remove',function(){
			
		})
	}
})
/* end of collections */

/* define view */
var iAppView = Backbone.View.extend({
	initialize:function(options){
		_.bindAll(this);
		//_.bind('change',this.update());
	},
	bind_remove:function(){

	},
	bind_update:function(){
		
	},
	render_model:function(_template){
		if(!_template) _template=this.model.template;
		var templatevalue='';
		if(typeof _template=='function') templatevalue=_template(this.model.toJSON());
		else if(typeof _template=='string') templatevalue=_.template(_template,this.model.toJSON());
		return templatevalue;
	},
	render_collection:function(_template){
		if(!_template) _template=this.model.template;
	//	var returned='';
	//	var model=this.model;
	//	var view=this;
		this.model.icollection.each(function(m){
			var parent=$(m.Root.el);
			if(m.Root.wrap){
				var wrap=m.Root.wrap;	
				if(parent.children(wrap).length>0){
					parent.children(wrap).append(_template(m.attributes));
				}
				else {
					var wrapelement=document.createElement(wrap);
					parent.append(wrapelement);
					parent.children(wrap).append(_template(m.attributes));
				}
			}
			else parent.append(_template(m.attributes));
			//returned=returned+_template(m.toJSON());
		})
		//return returned;
	},
	render_tree:function(_template){
		if(!_template) _template=this.model.template;
		var model=this.model;
		this.model.icollection.each(function(m){
			if(model.id!=model.Root.id){
				var parentmodel=model;
				var parent=$(parentmodel.el).find('[id="'+parentmodel.id+'"]');
			}
			else {
				var parent=$(m.Root.el);
			}
			if(m.Root.wrap){
				var wrap=m.Root.wrap;	
				if(parent.children(wrap).length>0){
					parent.children(wrap).append(_template(m.attributes));
				}
				else {
					var wrapelement=document.createElement(wrap);
					parent.append(wrapelement);
					parent.children(wrap).append(_template(m.attributes));
				}
			}
			else parent.append(_template(m.attributes));
			m.iview.render_tree(_template);
		})		
	},	
	return_tree:function(_template){
		if(!_template) _template=this.model.template;
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
		if(this.model.id!=this.model.Root.id) {
			$(this.model.Root.el).find('[id="'+this.model.id+'"]').replaceWith(this.render_model());	
			$(this.model.Root.el).find('[id="'+this.model.id+'"]').addClass('updating');
			var update =$(this.model.Root.el).find('[id="'+this.model.id+'"]');
			t2 = setTimeout(function() {
				update.removeClass('updating');
			}, 1000);
		}
	},
	update_tree:function(){
		if(this.model.id!=this.model.Root.id) {
			var hasmenu=false;
			var unfold=false;
			if($(this.model.Root.el).find('[id="'+this.model.id+'"]').hasClass('hasmenu')) hasmenu=true;
			if($(this.model.Root.el).find('[id="'+this.model.id+'"]').hasClass('unfold')) unfold=true;
			$(this.model.Root.el).find('[id="'+this.model.id+'"]').replaceWith(this.return_tree());	
			if(hasmenu) $(this.model.Root.el).find('[id="'+this.model.id+'"]').addClass('hasmenu unfold');
			$(this.model.Root.el).find('[id="'+this.model.id+'"]').addClass('updating');
			var update =$(this.model.Root.el).find('[id="'+this.model.id+'"]');
			t2 = setTimeout(function() {
				update.removeClass('updating');
			}, 1000);
			//if(unfold) $(this.model.Root.el).find('[id="'+this.model.id+'"]').addClass('unfold');
		}
	},
	update_el:function(el){
		this.model.el=el;
		this.model.icollection.each(function(m){
			m.iview.update_el(el);
		})
	},
	update_wrap:function(wrap){
		this.model.wrap=wrap;
		this.model.icollection.each(function(m){
			m.iview.update_wrap(wrap);
		})		
	},
	template:''
})

var AppElements=new iAppElementCollection();
var GlobalModelForSave=	Backbone.Model.extend({
		initialize:function(){
			this.set('id','GlobalSave');
		},
		sync: function(method, model, options) {
			var Model_JSON=this.list.toJSON();
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
/* end for view */


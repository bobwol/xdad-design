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
			template=global.model.getRootModel(model).template;
			//console.info(model.attributes);
			var parent=$(el);
			if(wrap){	
				if(parent.children(wrap).length>0){
				}
				else {
					var wrapelement=document.createElement(wrap);
					parent.append(wrapelement);
				}		
				$(el).children(wrap).append(template(model.attributes));
			}
			else $(el).append(template(model.attributes));
		})
	},
	setonaddtree:function(){
		this.on('add',function(model){
			el=model.Root.el;
			wrap=model.Root.wrap;
			template=model.Root.template;
			var values=model.attributes;
			//console.info(model.attributes);
			if(this.parentmodel.id!=model.Root.id){
				var parentmodel=this.parentmodel;
				var parent=$(el).find('[id="'+parentmodel.id+'"]');
			}
			else {
				var parent=$(model.Root.el);
			}
			if(wrap){
				if(parent.children(wrap).length>0){
					parent.children(wrap).append(template(values));
				}
				else {
					var wrapelement=document.createElement(wrap);
					parent.append(wrapelement);
					parent.children(wrap).append(template(values));
				}
			}
			else parent.append(template(values));
		})
	},	
	setonremove:function(){
		this.on('remove',function(model){
			if(model.Root.current==model.id) $('.ui-layout-right').empty();
			$(this.parentmodel.el).find('[id="'+model.id+'"]').remove();
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
		return _template(this.model.toJSON());
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
		var returned='';
		var dom,parent;
		returned=_template(this.model.toJSON());
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
/* end for view */


$(function(){
	
});
(function(win){
	win.global={
		set_click_event:function(target,func){//set click event
			$(target).live('click',func);
		},
		modal:{
			create:function(modalname,type,data){
				if(!data) data='';
				if(!type)	type="large-modal";
				$('body').append(global.template.modal({name:modalname,data:data,type:type,options:{}}));
			},
			create_preview_modal:function(modalname,data){
				if(!data) data='';
				$('body').append(global.template.modal_preview({name:modalname,data:data}));
			},
			show:function(modal){//显示一个Modal窗口
				$(modal).modal('show');
			},
			hide:function(modal){//隐藏一个modal窗口
				$(modal).modal('hide');
			}
		},
		text2form:function(target,callback){
			var text = target.text();
			var id=target.attr('id');
			var type=target.attr('data-type');
			target.hide();
			target.parent().append(global.template.text_form({text:text,id:id,type:type}));
			target.parent().children('.editform').children('input, textarea').focus();
			target.parent().find('.action-save').on('click',function () {
				var val = $(this).parents('.editform').first().children('input, textarea').val();
				var id=$(this).parents('.editform').first().children('input, textarea').attr('name');
				target.text(val);
				target.show();
				$(this).parents('.editform').first().remove();
				var data={};
				data[id]=val;
				callback(data);
			}); 
			target.parent().find('.action-cancel').on('click',function () {
				target.show();
				$(this).parents('.editform').first().remove();
			}); 			
		},
		exist:function(value){
			if(typeof value === "undefined"){
				return false;
			}
			else true;			
		},
		get_array:function(target,attributes){
			var returned=[];
			target.each(function(){
				var id=$(this).attr(attributes);
				returned.push(id);
			})
			return returned;
		},
		get_tree:function(target,wrap,child,attributes){
			var returned=[];
			if(wrap) target.children(wrap).children(child).each(function(){
				var dict={};
				dict.id=$(this).attr(attributes);
				dict.children=global.get_tree($(this),wrap,child,attributes);
				returned.push(dict);
			})
			return returned;
		},
		get_tree_by_checkbox:function(target,wrap,child,checkbox,attributes){
			var returned=[];
			if(wrap) target.children(wrap).children(child).each(function(){
				var dom=$(this).find(checkbox).first();
				var dict={};
				if(dom.attr('checked')=="checked") dict.id=dom.attr(attributes);
				else dict.id=null;
				dict.children=global.get_tree_by_checkbox($(this),wrap,child,checkbox,attributes);
				returned.push(dict);
			})
			return returned;
		},
		serializeForm:function(form){
			var data=$(form).serializeArray();
			var obj={};
			_.each(data,function(d){
				obj[d.name]=d.value;
			})
			return obj;
		},
		serializeValue:function(target){
			var data={};
			$(target).find('input[type="text"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				data[name]=$(this).attr('value');
			})
			$(target).find('input[type="hidden"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				data[name]=$(this).attr('value');
				if(data[name]=='true') data[name]=true;
				if(data[name]=='false') data[name]=false;
			})
			$(target).find('input[type="checkbox"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				if(!data[name]) data[name]=[];
				if($(this).attr('checked')=='checked'){
					if($(this).attr('data-type')=="boolean") data[name]=true;
					else data[name].push($(this).val());					
				}
				else{
					if($(this).attr('data-type')=="boolean") data[name]=false;
				}
			})
			$(target).find('input[type="radio"]:checked').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				data[name]=$(this).val();
			})
			$(target).find('select').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				else if($(this).val()=="null"||$(this).val()=="") return;
				data[name]=$(this).val();
			})
			$(target).find('textarea').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				data[name]=$(this).html();
			})
			return data;
		},
		getUniqueId:function(model,prefix,suffix){// get a unique id for client and no repeat in current instance
			if(!prefix) prefix='';
			if(!suffix) suffix='';
			var id=_.uniqueId(prefix);
			id=id+suffix;
			var ids=[];
			ids=global.model.getIds(model);
			if(_.include(ids,id))
			{
				id=getUniqueId(model,prefix,suffix);
			}
			return id;
		},
		getUniqueIdByDom:function(dom,target,prefix,suffix){// get a unique id for client and no repeat in current instance
			if(!prefix) prefix='';
			if(!suffix) suffix='';
			var id=_.uniqueId(prefix);
			id=id+suffix;
			if($(dom).find(target+'[id="'+id+'"]').length>0)
			{
				id=getUniqueIdByDom(dom,target,prefix,suffix);
			}
			return id;
		},
		message:function(type,msg,interval){
			if(!interval)	interval=3000;
			$('.msg').html(global.template.msg({"type":type,"msg":msg}));
			$('.msg').show();
			setTimeout(function(){$('.msg').fadeOut('slow')}, interval);
		},
		throwerror:function(msg){
			global.message('error',msg);
		},
		confirmDelete:function(callback){
			$('#confirmModal').html(global.template.confirm({msg:"确认删除？"}));
			global.modal.show('#confirmModal');
			$('#confirmModal').find('.btn.btn-confirm').on('click',function(){
				global.modal.hide('#confirmModal');
				callback();
			});
		},
		confirmModal:function(msg, callback){
			$('#confirmModal').html(global.template.confirm({msg:msg}));
			global.modal.show('#confirmModal');
			$('#confirmModal').find('.btn.btn-confirm').on('click',function(){
				global.modal.hide('#confirmModal');
				callback();
			});
		},
		confirmPreview:function(callback){
			$('#confirmModal').html(global.template.confirm({msg:"你还没有保存，点击确定保存后进行预览？"}));
			global.modal.show('#confirmModal');
			$('#confirmModal').find('.btn.btn-confirm').on('click',function(){
				global.modal.hide('#confirmModal');
				callback();
			});
		},
		get_page:function(page,numpages,totalpages){
			if(!totalpages) totalpages=10;
			var middle=totalpages/2;
			var startpage=1;
			var endpage=numpages;
			for(i=middle;i>=0;i--){
				startpage=page-i;
				endpage=page+(totalpages-i);
				endpage=endpage>numpages?numpages:endpage;
				if(startpage>0) break;
			}
			return {start:startpage,end:endpage};
		},
		render_template:function(JSON,properties){
			$('.ui-layout-right').empty();
			//$('.ui-layout-right').append(global.template['update'](JSON));
			_.each(properties,function(property){
				if(global.template[property]){
					$('.ui-layout-right').append(global.template[property](JSON));	
					if(property!='update'&&_.has(JSON[property],'readonly')){
						$('.ui-layout-right').find('.mod[data-name="'+property+'"]').append('<input type="hidden" name="readonly" value="'+JSON[property].readonly+'">');
					}		
				}
			})
			global.setscrollnano('.ui-layout-right');
		},
		return_tree:function(results,wrap,template){//return a tree dom for a tree JSON
			var value='';
			var dom,parent;
			_.each(results,function(result){
				returned=template(result);
				dom=parent=$(returned);
				if(wrap) {
					var wrapdom=document.createElement(wrap);
					dom.append(wrapdom.outerHTML);
					parent=dom.children(wrap);
				}
				parent.append(global.return_tree(result.children,wrap,template));
				returned=dom[0].outerHTML;				
				value=value+returned;
			})
			return value;
		},
		return_query_str:function(strs){
			_.each(strs,function(str){
				
			})
		}
	}
	global.debug=false;
	global.change=false;
	global.list=function(options){
		this.defaults={
			list_template:global.template.list,
			menu:{
				el:'.list-menu',
				model:{},
				template:_.template("")
			},
			left:{
				el:'.list-tree',
				model:{},
				template:_.template(""),
				onUpdate:function(){},
				onClick:function(){}		
			},
			right:{
				el:'.list-content',
				model:{},
				template:_.template("")	,
				onUpdate:function(){},
				onClick:function(){}
			},
			page:{
				el:'.list-page',
				model:{},
				template:_.template("")	
			},
			query:{
				page:1,
				type_categorized:null
			}	
		},
		this.options=options;
		this.options=$.extend({},this.defaults, typeof options == 'object' && options);
	};
	global.list.prototype={
		render:function(){
			$(this.options.list_el).html(this.options.list_template());
			this.render_menu();
			this.render_left();
			this.render_right();
			this.render_page();
		},
		render_list:function(){
			var list=this;
			$(this.options.list_el).html(this.options.list_template());
			$(this.options.list_el).parent().find('form.search').on('submit',function(){
				var text=$(this).find('.search-query').val();
				list.options.query.SearchableText=text;
				list.query_filter();
				return false;
			})
		},
		render_menu:function(){
			var list=this;
			$(this.options.menu.el).html(this.options.menu.template(this.options.menu.model?this.options.menu.model.toJSON():null));
			if(this.options.menu.model){
				this.options.menu.model.query(function(data){
					if(data.code==200){
						var d=data.data;
						list.options.menu.model.set(d);
						list.options.menu.model.icollection.reset();
						global.model.model2tree(list.options.menu.model,"results","children");
						$(list.options.menu.model.el).find('select').on('change',function(){
							var values=global.serializeValue(list.options.menu.model.el);
							list.options.query.filter=values;
							list.query_filter();
						})
						if(list.options.menu.callback) list.options.menu.callback();
					}	
				})
			}
			$(this.options.menu.el).find('input[type="checkbox"][value="selectall"]').on('change',function(){
				if($(this).attr('checked')=='checked') $(list.options.right.model.el).find('input[type="checkbox"]').attr('checked','checked');
				else $(list.options.right.model.el).find('input[type="checkbox"]').removeAttr('checked');
			})
			$(this.options.menu.el).find('input[type="checkbox"][value="checked_children"]').on('change',function(){
				if($(this).attr('checked')=='checked') list.options.right.checked_children=true;
				else list.options.right.checked_children=false;
			})
		},
		render_left:function(){
			var el=this.options.left.model.el;
			var list=this;
			this.options.query.type_categorized=null;
			$(el).find('li h4 a').each(function(){
				$(this).on('click',function(){
					$(el).find('li').removeClass('active');
					var id=$(this).parents('li').first().attr('id');
					$(this).parents('li').first().addClass('active');
					list.options.left.current=id;
					list.options.left.model.current=id;
					if(id){
						list.options.query.type_categorized=id;
						opt='id='+list.options.query.type_categorized+'&';
						list.options.query.SearchableText=null;
						list.options.query.filter=null;
						list.query(opt);
						list.render_menu();
						$(list.options.list_el).parent().find('form.search').find('.search-query').val("");
						return false;
					}
					else {
						list.options.query.type_categorized=null;
						opt='';
						list.query(opt);
						list.render_menu();
						$(list.options.list_el).parent().find('form.search').find('.search-query').val("");
						return false;
					}
				})
			})
			$(this.options.left.model.el).find('[rel="tooltip"]').tooltip();
			global.setscrollnano($(this.options.left.model.el).parents('.nanoscrollbar').first());
		},
		render_right:function(){
			var list=this;
			$(this.options.right.model.el).find('.content-item h4').live('click',function(event,ui){
					//console.info(event.currentTarget);
					//$(list.options.right.el).find('.content-item').removeClass('active');
					var id= $(this).parents('.content-item').first().attr('id');
					//$(this).parent().parent().addClass('active');
					list.options.right.current=id;
					list.options.right.model.current=id;
					if(list.options.right.onClick) list.options.right.onClick(id);
					//return false;
			})
			$(this.options.right.model.el).find('tr.content-item').live('click',function(event,ui){
					//console.info(event.currentTarget);
					//$(list.options.right.el).find('.content-item').removeClass('active');
					var id= $(this).attr('id');
					//$(this).parent().parent().addClass('active');
					list.options.right.current=id;
					list.options.right.model.current=id;
					if(list.options.right.onClick) list.options.right.onClick(id);
					//return false;
			})
			$(this.options.right.model.el).find('[rel="tooltip"]').tooltip();
			this.hasmenu_check();
			global.setscrollnano($(this.options.right.model.el).parents('.nanoscrollbar').first());
		},
		render_page:function(){
			var list=this;
			$(this.options.page.el).html(this.options.page.template(this.options.page.model.toJSON()));
			$(this.options.page.el).find('.first').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=1;
				list.query_filter(list.options.query.page);
				return false;
			})
			$(this.options.page.el).find('.last').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('numpages');
				list.query_filter(list.options.query.page);
				return false;
			})
			$(this.options.page.el).find('.prev').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('page')-1;
				list.query_filter(list.options.query.page);
				return false;
			})
			$(this.options.page.el).find('.next').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('page')+1;
				list.query_filter(list.options.query.page);
				return false;
			})
			$(this.options.page.el).find('.page').on('click',function(){
				list.options.query.page=parseInt($(this).html());
				list.query_filter(list.options.query.page);
				return false;
			})
		},
		query_filter:function(page){
			var list=this;
			var opt="";
			if(list.options.query.type_categorized){
				//opt='filter={"type_categorized":"'+list.options.query.type_categorized+'"}&&';
				opt='id='+list.options.query.type_categorized+'&';
			}
			if(list.options.query.filter){
				//opt='filter={"type_categorized":"'+list.options.query.type_categorized+'"}&&';
				_.each(list.options.query.filter,function(value,key){
					opt=opt+key+"="+value+"&";
				})
			}
			if(list.options.query.SearchableText){
				opt=opt+"SearchableText="+list.options.query.SearchableText+"&";
			}
			if(page) opt=opt+"page="+page;
			this.query(opt);			
		},
		query:function(opt){
			var list=this;
			this.options.right.model.query(function(data){
				if(data.code==200){
					var d=data.data;
					//list.options.right.model.clear();
					list.options.right.model.icollection.reset();
					list.options.right.model.set(d);
					if(!list.options.right.type||list.options.right.type=="collection") global.model.model2collection(list.options.right.model,"results");
					else global.model.model2tree(list.options.right.model,"results","children");
					list.render_right();
					list.render_page();		
					$(list.options.right.model.el).find('[rel="tooltip"]').tooltip();
					if(list.options.afterquery) list.options.afterquery();				
				}
				else global.throwerror(data.msg);
			},opt);
		},
		hasmenu_check:function(){
			var list=this;
			$(this.options.list_el).find('li.content-item').each(function(){
				if($(this).children('ul').length>0&&$(this).children('ul').children('li').length>0) {
					$(this).addClass('hasmenu unfold');
					$(this).find('input[type="checkbox"]').on('change',function(){
						if(list.options.right.checked_children) {
							if($(this).attr('checked')=='checked') $(this).parents('li.content-item').first().children('ul').find('input[type="checkbox"]').attr('checked','checked');
							else $(this).parents('li.content-item').first().children('ul').find('input[type="checkbox"]').removeAttr('checked');
						}
					})	
				}
				else $(this).removeClass('hasmenu');
			});
			
		},
		update_tooltip:function(){
			
		}
	};
	global.dict={
		init:function(){
			if(typeof dict === "undefined"){
				global.dict.data=[];
			}
			else global.dict.data=dict.data;
		},
		query:function(key){
			return global.dict.data[key]?global.dict.data[key]:key;
		}
	};
	global.dict.init();
	global.preview=function(){
			var url=context_url+'preview';
			global.html.load(url,function(data){
				$('#material_preview').html(global.template.preview({title:document.title,preview:data,description:null}));
				global.modal.show('#material_preview');	
				
				$('.preview-modal .slideshow').simpleSlide({ 
					data:{},
					template:[ 
						'<a class="left slideshow-control" href="#">‹</a> ', 
						'<a class="right slideshow-control" href="#">›</a>' 
					].join(''), 
					containerSelecter:"div.slideshow-inner", 
					liSelecter:"div.slideshow-inner div.item", 
					prevSelecter:"a.left", 
					nextSelecter:"a.right", 
					pagenationSelecter:".slideshow-indicators li" 
				});
			})		
	};
	global.setscrollnano=function(selector){
			if($(selector).hasClass('nanoscrollbar')) $selector=$(selector);
			else $selector=$(selector).find('.nanoscrollbar');
			if($selector.children('.nano').length==0)
				$selector.wrapInner('<div class="nano"><div class="content"></div></div>');
			$selector.children('.nano').nanoScroller();
			$selector.children('.nano').children('.pane').css({'visibility': 'hidden'});
			$selector.children('.nano').hover(function (){
					$(this).children('.pane').css({'visibility': 'visible'});
				},function (){
					$(this).children('.pane').css({'visibility': 'hidden'});
			});
	};
})(window);
function set_click_event(target,func){//set click event
	$(target).live('click',func);
}
function cancel_click_event(target,func){
	if(func)
		$(target).die('click',func);
	else
		$(target).die('click');
}
function set_hover_event(target,funcover,funcout){
	$(target).live('mouseover mouseout',function (event){
		if(event.type=='mouseover')
			funcover(event);
	    else 
			funcout(event);
	});	
}
function cancel_hover_event(target){
	$(target).die('mouseover mouseout');
}
(function(global){
	global.html={
		load:function(url,callback,debug){
			if(global.debug||debug) url=url+'?debug=1';
			var returned=$.ajax({
				url:url,
				type:"GET",
				data:"",
				success:function(data){
					$(document).trigger('server_ok');
					callback(data,data.code);
				},
				error:function(response){
					console.info(response);
					global.throwerror('服务器请求未应答');
					$(document).trigger('server_error');
					if(jqwait_on) jqwait_simple_close();
				}
			})
			return returned;
		},
	};
	global.json={
		load:function(url,callback,debug){
			if(global.debug||debug) url=url+'?debug=1';
			var returned=$.ajax({
				url:url,
				type:"GET",
				data:"",
				dataType:"JSON",
				success:function(data){
					$(document).trigger('server_ok');
					callback(data,data.code);
				},
				error:function(){
					global.throwerror('服务器请求未应答');
					$(document).trigger('server_error');
					if(jqwait_on) jqwait_simple_close();
				}
			})
			return returned;
		},
		post:function(url,data,callback){
			$.ajax({
				url:url,
				type:"POST",
				data:data,
				dataType:"JSON",
				success:function(data){
					var code=data.code;
					$(document).trigger('server_ok');
					callback(data,data.code);
				},
				error:function(){
					global.throwerror('服务器请求未应答');
					$(document).trigger('server_error');
					if(jqwait_on) jqwait_simple_close();
				}
			})
		}
	}
	global.model={
		getIds:function(model){//return the model's Id list for tree or collection
			var returned=[];
			returned=model.icollection.pluck('id');
			model.icollection.each(function(m){
				returned=_.union(returned,global.model.getIds(m));
			});
			return returned;
		},
		getModelList:function(list,model){//return a list for model or collection or tree
			model.icollection.each(function(m){
				global.model.getModelList(list,m);
				list.add(model);
			})
		},
		getModelTreeByIdsTree:function(model,ids_tree){
			_.each(ids_tree,function(ids){
				if(ids.id&&ids.id!="") ids.model=global.model.getModelById(model,ids.id);
				else ids.model=null;
				ids.children=global.model.getModelTreeByIdsTree(model,ids.children);
			})
			return ids_tree;
		},
		getModelById:function(model,id){
			var returned=null;
			model.icollection.each(function(m){
				if(m.id==id) returned=m;
				var result=global.model.getModelById(m,id);
                if(result) returned=result;
			})
			return returned;
		},
		getRootModel:function(model){
			return model.Root;
		},
		getModelCollectionById:function(model,id){
			var returned=null;
			if(model.icollection.get(id)) return model.icollection;
			model.icollection.each(function(m){
				var result=global.model.getModelCollectionById(m,id)
				if(result) returned=result;
			})
			return returned;
		},
		collection2model:function(model,ResultsType){
			var results=[];
			if(model.icollection.length>0){
				model.icollection.each(function(m){
					var dict={};
					dict=_.clone(m.toJSON());
					results.push(dict);					
				})
			}
			return results;
		},
		tree2model:function(model,ResultsType,ChildrenType){
			var results=[];
			model.icollection.each(function(m){
				var dict={};
				dict=_.clone(m.toJSON());
				dict[ResultsType]=global.model.tree2model(m,ChildrenType,ChildrenType);
				results.push(dict);					
			})
			return results;			
		},
		model2collection:function(model,ResultsType){
			if(model.has(ResultsType)){
				model.icollection.add(model.get(ResultsType));
			}
		},
		model2tree:function(model,ResultsType,ChildrenType){
			if(model.has(ResultsType)){
				model.icollection.add(model.get(ResultsType));
				model.icollection.each(function(m){
					if(m.has(ChildrenType)){
						global.model.model2tree(m,ChildrenType,ChildrenType);
					}
				})
			}			
		},
		save:function(model,attributes,callback){
			if(!attributes) attributes={};
			model.save(
				attributes,
				{
					wait:true,
					success: function(m,response){
						$('.action-save').button('reset');
						returned=eval(response);
						if(jqwait_on) jqwait_simple_close();
						callback(response);
					},
					error:function(){
						$('.action-save').button('reset');
						display_message('error','服务器请求未应答');
						$(document).trigger('server_error');
						if(jqwait_on) jqwait_simple_close();
					}
				}
			);
		},
		sort:function(model,ids){
			model.icollection.reset(_.map(ids,function(id){
					return model.icollection.get(id);
			}),{silent:true});
		},
		sort_tree:function(Root,model,ids_tree){
			if(ids_tree.length>0){
				for(i in ids_tree){
					var id=ids_tree[i].id;			
					global.model.sort_tree(Root,ids_tree[i].model,ids_tree[i].children);
				}
				model.icollection.reset(_.pluck(ids_tree,'model'),{silent:true});
			}
		},
		remove:function(model,ids,callback){
			_.each(ids,function(id){
				var m=global.model.getModelById(model,id);
				m.destroy({
					wait:true,
					success: function(m,response){
						returned=eval(response);
						callback(response);
					},
					error:function(){
						display_message('error','服务器请求未应答');
						$(document).trigger('server_error');
						if(jqwait_on) jqwait_simple_close();
					}
				});
			})
		},
		translate:function(model){
			var translate_items=[];
			var values=_.clone(model.attributes);
			if(model.translate) translate_items=model.translate;
			_.each(translate_items,function(i){
				values[i]=global.dict.query(values[i]);
			})
			return values;
		},
		replace:function(source,target,keys){//replace a model with some value
			if(keys){
				_.each(keys,function(key){
					source.set(key,target.get(key));
				})				
			}
			else {
				var dict=target.toJSON();
				delete dict.id;
				source.set(dict);
			}
		},
		copy:function(source,target,ids,keepid){
			_.each(ids,function(id){
				var model=global.model.getModelById(source,id);
				model_data=_.clone(model.toJSON());
				if(!keepid) model_data.id=global.getUniqueId(target,target.Root.id+"_",null);
				target.icollection.add(model_data);
			})
		},
		copy_tree:function(source,target,ids_tree,keepid){
			_.each(ids_tree,function(ids){
				if(ids.id&&ids.id!=""){
					var model=global.model.getModelById(source,ids.id);
					var model_data=_.clone(model.toJSON());
					if(!keepid) model_data.id=global.getUniqueId(target,target.Root.id+"_",null);
					target.icollection.add(model_data);
					global.model.copy_tree(source,target.icollection.get(model_data.id),ids.children,keepid);
				}
				else {
					global.model.copy_tree(source,target,ids.children,keepid);
				}
			})
		}
	}
})(global);
(function(global){
	global.template={
		modal:_.template(
					[
					'<div class="modal hide <%=type%>" id=<%=name%> tabindex="-1" role="dialog" aria-labelledby="<%=name%>Label" data-backdrop=false aria-hidden="true">',
					'<%if(options.header){%>',
					'	<div class="modal-header">',
'							<button class="close" aria-hidden="true" data-dismiss="modal" type="button">×</button>',
					'	</div>',
					'<%}%>',
					'<%if(options.body){%>',
					'	<div class="modal-body">',
					'	</div>',
					'<%}%>',
					'<%if(options.footer){%>',
					'	<div class="modal-footer">',
					'	</div>',
					'<%}%>',
					'</div>'
					].join("")
		),
		modal_preview:_.template(
			[
'			<div class="modal hide large-modal preview-modal" id=<%=name%> tabindex="-1" role="dialog" aria-labelledby="previewLabel" aria-hidden="true">',
'			</div>',
			].join("")
		),
		list:_.template(
			[
'	      <div class="left-column">',
'	        <div class="column-hd">',
'	          <h3>分类目录</h3>',
'	        </div>',
'	        <div class="column-bd nanoscrollbar">',
'	          <div class="categories list-tree" id="contentstree">',
'	            <ul>',
'	              <li class="active">',
'					<div class="wraparea">',
'	                	<h4><a href="#">所有</a></h4>',
'					</div>',
'	              </li>',
'	              <li id="owner">',
'					<div class="wraparea">',
'	                <h4><a href="#">我的内容</a></h4>',
'					</div>',
'	              </li>',
'	              <li id="unset">',
'					<div class="wraparea">',
'	                <h4><a href="#">未分类</a></h4>',
'					</div>',
'	              </li>',
'				</ul>',
'	          </div>',
'	        </div>',
'	      </div>',
'	      <div class="right-column">',
'	        <div class="column-hd list-menu">',
'	        </div>',
'	        <div class="column-bd nanoscrollbar list-content">',
'	          <table cellspacing="0" class="hascheckbox hascover units list">',
'	            <tbody>',
'	            </tbody>',
'	          </table>',
'	        </div>',
'	        <div class="column-ft list-page">',
'	        </div>',
'	      </div>',
			].join("")
		),
		list_single:_.template(
			[
'	      <div class="main-column">',
'	        <div class="column-hd list-menu">',
'	        </div>',
'        <div class="column-bd nanoscrollbar">',
'	          <div class="categories list-content">',
'	            <ul>',
'				</ul>',
'	          </div>',
'			</div>',
'	        <div class="column-ft list-page">',
'	        </div>',
'	      </div>',
			].join("")
		),
		list_single_1:_.template(
			[
'	      <div class="main-column">',
'	        <div class="column-hd list-menu">',
'	        </div>',
'	        <div class="column-bd nanoscrollbar list-content">',
'	          <table cellspacing="0" class="hascheckbox hascover units list">',
'	            <tbody>',
'	            </tbody>',
'	          </table>',
'	        </div>',
'	        <div class="column-ft list-page">',
'	        </div>',
'	      </div>',
			].join("")
		),
		list_2:_.template(
			[
'	      <div class="left-column">',
'	        <div class="column-hd">',
'	          <h3>分类目录</h3>',
'	        </div>',
'	        <div class="column-bd nanoscrollbar">',
'	          <div class="categories list-tree" id="contentstree">',
'	            <ul>',
'	              <li class="active">',
'					<div class="wraparea">',
'	                	<h4><a href="#">所有</a></h4>',
'					</div>',
'	              </li>',
'				</ul>',
'	          </div>',
'	        </div>',
'	      </div>',
'	      <div class="right-column">',
'	        <div class="column-hd list-menu">',
'	        </div>',
'	        <div class="column-bd nanoscrollbar">',
' 		         <div class="categories list-content"></div>',
'	        </div>',
'	        <div class="column-ft list-page">',
'	        </div>',
'	      </div>',
			].join("")
		),
		list_3:_.template(
			[
'	      <div class="left-column">',
'	        <div class="column-hd">',
'	          <h3>分类目录</h3>',
'	        </div>',
'	        <div class="column-bd nanoscrollbar">',
'	          <div class="categories list-tree" id="contentstree">',
'	            <ul>',
'	              <li class="active">',
'					<div class="wraparea">',
'	                	<h4><a href="#">所有</a></h4>',
'					</div>',
'	              </li>',
'				</ul>',
'	          </div>',
'	        </div>',
'	      </div>',
'	      <div class="right-column">',
'			<div class="column-hd list-menu">',
'        		<h3>内容分类</h3>',
 '      			 <div style="position:absolute; top:8px; right:30px; font-size:12px; line-height:20px;">',
 '         		<input type="checkbox" value="checked_children">',
 '         		勾选子分类</div>',
 '     		</div>',
'	        <div class="column-bd nanoscrollbar">',
' 		         <div class="categories list-content"></div>',
'	        </div>',
'	        <div class="column-ft list-page">',
'	        </div>',
'	      </div>',
			].join("")
		),
		list_left:_.template(
			[
			'	<ul>',
'	              <li class="active">',
'	                <h4><a href="#">所有</a></h4>',
'	              </li>',
'	              <li id="owner">',
'	                <h4><a href="#">我的内容</a></h4>',
'	              </li>',
'	              <li id="unset">',
'	                <h4><a href="#">未分类</a></h4>',
'	              </li>',
'				</ul>',
			].join("")
		),
		list_menu:_.template(
			[
'	          <table cellspacing="0" class="hascheckbox list">',
'	            <thead>',
'	              <tr>',
'	                <th scope="col" width="5%"><input type="checkbox" value="selectall"></th>',
'	                <th scope="col" colspan="2">标题</th>',
'	                <th scope="col" width="12%">创建时间</th>',
'	              </tr>',
'	            </thead>',
'	          </table>',
			].join("")
		),
		list_page:_.template(
			[
'	          <div class="pagination pagination-centered">',
'	            <ul>',
'				 <% var startpage=global.get_page(page,numpages,10).start; var endpage=global.get_page(page,numpages,10).end; %>',
'	              <li <% var left=(page!=1&&numpages>1)?"":"class=disabled";%><%=left%>><a class="first" href="#">«</a></li>',
'	              <li <% var left=(page!=1&&numpages>1)?"":"class=disabled";%><%=left%>><a class="prev" href="#">‹</a></li>',
'				<% for(i=startpage;i<=endpage;i++){ %>',
'					<li <% var current=(i==page)?"class=active":""; %><%=current%>><a class="page" href="#"><%=i%></a></li>',
'				<% } %>',
'	              <li <% var right=(page!=numpages&&numpages>0)?"":"class=disabled";%><%=right%>><a class="next" href="#">›</a></li>',
'	              <li <% var right=(page!=numpages&&numpages>0)?"":"class=disabled";%><%=right%>><a class="last" href="#">»</a></li>',
'	            </ul>',
'	          </div>',
			].join("")
		),
		msg:_.template(
			[
'  			<div class="status <%=type%>">',
'   			 <p><%=global.dict.query(msg)%></p>',
 '   		<a href="#" class="close">Close</a></div>',
 			].join("")
		),
		preview:_.template(
			[
'	  <div class="modal-header">',
'	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'	    <h3><%=title%></h3>',
'	    <!--<div class="pages">1/7</div>-->',
'	  </div>',
'	  <div class="modal-body">', 
'	    <div class="preview-content"><%=preview%></div>',
// '	    <div class="more-info"><a href="javascript:void(0)">更多信息</a></div>',
// '	    <div class="info-mod" style="display: none;">',
// '	      <div class="info-hd">',
// '	        <h4><%=title%></h4>',
// '	        <div class="close"><a href="javascript:void(0)">Close</a></div>',
// '	      </div>',
// '	      <div class="info-bd">',
// '	        <%=description%>',
// '	      </div>',
// '	    </div>',
'	  </div>',
			].join("")
		),
	   text_form:_.template(
	   	[
'	   	<% if(type=="text"){ %>',
'			<div class="editform" style="display: block;">',
'				<input name=<%=id%> type="text" style="width:234px;" value="<%=text%>">',
'				<div>',
'					<button class="btn btn-small btn-primary action-save" type="button">确认</button>',
'					<button class="btn btn-small action-cancel" style="margin-left:10px;" type="button">取消</button>',
'				</div>',
'			</div>',
'		<% } else { %>',
'			<div class="editform" style="display: block;">',
'				<textarea name=<%=id%> style="width:234px;"><%=text%></textarea>',
'				<div>',
'					<button class="btn btn-small btn-primary action-save" type="button">确认</button>',
'					<button class="btn btn-small action-cancel" style="margin-left:10px;" type="button">取消</button>',
'				</div>',
'			</div>',
'		<% } %>',
	   	].join("")
	   ),
	   operate_modal:_.template(
	   	[
'		  <div class="modal-header">',
'		    <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>',
'		    <h3><%=title%></h3>',
'		  </div>',
'		  	<div class="modal-body">',
'		    <form class="form-horizontal">',
		'      <div class="control-group">',
		'        <label class="control-label" for="name" style="width:70px;">标题：</label>',
		'        <div class="controls" style="margin-left:80px;">',
		'          <input type="text" id="name" value="<%=name%>" disabled style="width:300px; margin-right:10px;">',
		'          <input type="hidden" id="transition" value="<%=transition%>">',
		'          <input type="hidden" id="objectid" value="<%=id%>">',		
		'        </div>',
		'      </div>',
		'      <div class="control-group" style="margin-bottom:0;">',
		'        <label class="control-label" for="chapterCode" style="width:70px;">说明：</label>',
		'        <div class="controls" style="margin-left:80px;">',
		'          <textarea id="comment" rows="4" style="width:300px;"></textarea>',
		'        </div>',
		'      </div>',
'		    </form>',
'			</div>',
'		  <div class="modal-footer">',
'		    <button class="btn btn-primary btn-confirm">确定</button>',
'		  </div>',
	   	].join("")
	   ),
	   confirm:_.template(
	   	[
'		  <div class="modal-header">',
'		    <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>',
'		    <h3>确认框</h3>',
'		  </div>',
'		  <div class="modal-body"> <span style="font-size:14px;"><%=msg%></span></div>',
'		  <div class="modal-footer">',
'		    <button class="btn btn-primary btn-confirm">确定</button>',
'		    <button aria-hidden="true" data-dismiss="modal" style="margin-left:20px;" class="btn">取消</button>',
'		  </div>',
	   	].join("")
	   ),
	}
})(global);
(function(global){
	global.package={
		configure:function(){
			
		},
		init:function(objects){
			var result=[];
			for(obj in objects){
				result.push(portal_url+'app/js/web/'+objects[obj]+'/main.js');		
			}
			return result;			
		},
		object:function(objects){
			var result=[];
			for(obj in objects){
				//result.push(portal_url+'app/js/web/'+objects[obj]+'/main.js');
				result.push(portal_url+'app/js/web/'+objects[obj]+'/template.js');
				result.push(portal_url+'app/js/web/'+objects[obj]+'/data.js');
				result.push(portal_url+'app/js/web/'+objects[obj]+'/model.js');
				result.push(portal_url+'app/js/web/'+objects[obj]+'/event.js');			
			}
			return result;
		},
		main:function(mains){
			var result=[];
			for(obj in mains){
				result.push(portal_url+'app/js/web/main/'+mains[obj]+'/main.js');
				result.push(portal_url+'app/js/web/main/'+mains[obj]+'/event.js');			
			}
			return result;		
		},
		interaction_base:function(){
			var result=[];
			result.push(portal_url+'common_js/interaction/main.js');
			result.push(portal_url+'common_js/interaction/template.js');
			result.push(portal_url+'common_js/interaction/model.js');
			result.push(portal_url+'common_js/interaction/plonejs.js');
			result.push(portal_url+'common_js/interaction/interaction.js');
			return result;
		},
		interaction:function(models){
			var result=[];
			for(obj in models){
				result.push(portal_url+'common_js/interaction/model/'+models[obj]+'.js');				
			}
			return result;
		},
		tinymce:function(){
			var result=[];
			result.push(portal_url+'common_js/tiny_mce/tiny_mce_src.js');
			return result;
		}
	}
})(global);
global.modal.create('confirmModal','small-modal');
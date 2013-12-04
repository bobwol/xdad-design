define(['global/main','jqueryui','lists/model/list'],function(){
	var listmvc=require('lists/model/list');
	window.lists={
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
						lists.model2tree(m,ChildrenType,ChildrenType);
					}
				})
			}			
		},
		message:function(type,msg,interval){
			if(!interval)	interval=3000;
			$('.msg').html(lists.msg_template({"type":type,"msg":msg}));
			$('.msg').show();
			setTimeout(function(){$('.msg').fadeOut('slow')}, interval);
		},
		confirmDelete:function(callback){
			$('#confirmModal').html(lists.confirm_template({msg:"确认删除？"}));
			global.modal.show('#confirmModal');
			$('#confirmModal').find('.btn.btn-confirm').on('click',function(){
				global.modal.hide('#confirmModal');
				callback();
			});
		},
	   confirm_template:_.template(
	   	[
'		  <div class="modal-header">',
'		    <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>',
'		    <h3>确认框</h3>',
'		  </div>',
'		  <div class="modal-body"> <span style="font-size:14px;"><%=msg%></span></div>',
'		  <div class="modal-footer">',
'		    <button class="btn btn-primary btn-confirm">确定</button>',
'		    <button aria-hidden="true" data-dismiss="modal" style="margin-left:20px;" class="btn btn-cancel">取消</button>',
'		  </div>',
	   	].join("")
	   ),
		msg_template:_.template(
			[
'  			<div class="status <%=type%>">',
'   			 <p><%=global.dict.query(msg)%></p>',
 '   		<a href="#" class="close">Close</a></div>',
 			].join("")
		),
		load:function(url,callback,debug){
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
					lists.message('error','服务器错误')
					$(document).trigger('server_error');
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
					lists.message('error','服务器请求未应答');
					$(document).trigger('server_error');
				}
			})
		},
		serializeValue:function(target,EmptyValueAllowed){
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
					else if(EmptyValueAllowed){
					}
				}
			})
			$(target).find('input[type="radio"]:checked').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				data[name]=$(this).val();
			})
			$(target).find('select').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var mutiple=Boolean($(this).attr('data-mutiple'));
				if(!name) return;
				if(!mutiple){
					if($(this).val()=="null"){
						return;
					} 
					else data[name]=$(this).val();				
				}
				else{
					if(!data[name]) data[name]=[];
					data[name].push($(this).val());								
				}
			})
			$(target).find('textarea').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				data[name]=$(this).val();
			})
			return data;
		},
	    setscrollnano:function(selector){
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
		},
		save:function(data,url,callback){
			listmvc.ModelForSaveAll.data=data;
			listmvc.ModelForSaveAll.url=listmvc.ModelForSaveAll.updateurl=url;
			listmvc.ModelForSaveAll.save({},
				{
					wait:true,
					success: function(m,response){
						if($('.action-save').length>0) $('.action-save').button('reset');
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
		sortable:function(container,item,sortmodel,aftersort){
			var cancelsort=false;
			$(container).sortable({
				containment:'parent',
				items:item,
				opacity:'0.5',
				start:function(event,ui){
					$(document).on('keyup',function(event,ui){
						console.log(event.keyCode);
						if(event.keyCode==27){
							cancelsort=true;
							$(container).sortable('cancel');
						}
					})
				},
				sort:function(event,ui){				
				},
				stop:function(event,ui){
					$(document).off('keyup');
				},
				update: function( event, ui ) {
					if($(ui.item).nextAll().hasClass('top')||cancelsort){
						$(container).sortable('cancel');
						cancelsort=false;
						return;
					}
					if($(ui.item).prevAll().length==0) var target_position=Number($(ui.item).next().attr('data-position'))+1;
					else var target_position=$(ui.item).prev().attr('data-position');
					target_position = parseInt(target_position);
					var id=$(ui.item).attr('id');
					var model=global.model.getModelById(sortmodel,id);
					var contexturl=model.toJSON().url;
					var position=parseInt(model.toJSON().position);
					if(!position||!target_position){
						global.message('error','无法进行排序，缺少position参数');
						return false;
					}
					var url=contexturl+'/movetoposition?position='+((position<target_position)?target_position-1:target_position);
					global.json.load(url,function(data){
						if(data.code==200){
							global.message('success',data.msg);
							//$('.ui-layout-center-bd .list-content table tbody').sortable('cancel');
							aftersort();
						}
						else{
							global.message('error',data.msg);
							$(container).sortable('cancel');
						}
					})
				},
			})
		}
	};
	lists.listcollection=new Backbone.Collection();
	lists.templateslist=[];
	lists.list=function(options){
		this.defaults={
			initialize:{
				name:'list',//list的前缀名，并没有实际的作用，只是用作标示前缀，以后会作为lists库查询用
				container:'.ui-layout-center-bd',//指定list所在的dom
				template:null,//list的主模板，用来设定list layout的结构
				templatefile:null,//定义模板文件的，用于模板加载template和templatefile两者取其一,例如:'template/left.js'
				menu:true, //boolean 表示这个list是否有menu
				left:true,//是否有左边的树
				right:true,//是否有content区域
				filter:true,//是否有筛选菜单
				search:true,//是否支持关键字搜索
				page:true,//是否有支持分页及页码显示
				servertemplatefiles:null,//用于加载server端的template
				onFinishRender:null,//调用函数当整个list render结束
				events:{},//绑定页面范围内的事件绑定，列入saveall，open modal等事件
				wait:false,//是否添加wait等待功能
				request:null,//是否根据request初始参数来render content ,null表示没有初始， 'id'表示以id作为参数来定位
			},
			menu:{//定义menu项
				name:'menu',//menu的名字，以后将作为检索用，当前没有实际的作用
				container:'.list-menu',//指定menu的位置，这个位置是相对于list container的， 所以在这里就相当于'.ui-layout-center-bd .list-menu‘
				template:null ,//menu的模板，并不带参数，模板可以是string ,也可以是_.template
				templatefile:null,
			},
			left:{
				className:'tree-item',
				defaults:{
					title:'',
				},//默认属性设定
				name:'tree',//同上
				container:'.list-tree',//同上
				type:'tree',//定义树的结构，tree代表多分支树形结构， grid代表列表结构
				template:null,//同上
				templatefile:null,
				wrap:null,//wrap指定该模板元素需不需要包裹，例如一个'<li>'的元素，需要包裹在'<ul>'的结构下，这个时候需要wrap:'ul'
				events:{},	//定义单个单元上的事件绑定， 写法是'click .edit': function(){}, 表示点击'.edit'，执行一个function ， 使用this.model对应该元素的model
				url:null,//用来指定get数据源，使用ajax来得到整个树的源数据，参见数据结构，引用地址类似:portal_url+'contentstree.json'
				saveurl:null,//用来绑定数单个据组的存储
				saveallurl:null,//多个数据保存接口地址
				deleteurl:null,//单个元数据的删除ajax地址
				data:null,//如果设定数据，则数据来源将由data的数据来给
				bindchange:true,//是否更新当数据改变的时候，默认为true
				onClick:null,//简单的onClick事件，id为参数，当前的选中项
				onUpdate:null,//触发当整个left区域render 结束
				onChange:null,//触发当model的数据内容发生变化时
				reset:true,//指定当collection数据重新刷新时，页面是否同步
				rightpanel:false,//是否绑定显示右边栏
				bindsort:null,//设置排序，参数 item , callback
				updateEffect:true,//设置是否默认有项目更新的变化效果
				initopts:null//初始化调用参数，如果有的话将在url被调用的时候加上
			},
			right:{
				className:'content-item',
				defaults:{
					title:'',
				},
				name:'content',
				container:'.list-content',
				type:'grid',
				template:null,
				templatefile:null,
				wrap:null,
				events:{},
				url:null,
				saveurl:null,
				saveallurl:null,
				deleteurl:null,
				data:null,
				bindchange:true,
				onClick:null,
				onUpdate:null,
				onChange:null,//触发当model的数据内容发生变化时
				reset:true,
				rightpanel:false,
				bindsort:null,
				updateEffect:true,
				initopts:null
			},
			page:{
				name:'page',
				container:'.list-page',
				template:null,
				templatefile:null,
			},
			filter:{
				defaults:{
					title:'',
				},
				name:'filter',
				container:'.list-menu',
				type:'grid',
				template:null,
				templatefile:null,
				wrap:null,
				url:null,
				data:null,	
				bindchange:false,
				onChange:null,	//触发，当某个筛选项发生改变时
				reset:false,	
				onUpdate:null,
				onChange:null	
			},
			rightpanel:{
				events:null,//当一个panel生成时，有两个参数可以被回调model,options
				bindchange:true,//设定当model改变时同步更新右边栏
			}
		},
		this.options=options;
		var $defaults=$.extend({},this.defaults);
		this.options=$.extend(true,{},$defaults, typeof options == 'object' && options);
	    this.init();
	};
	lists.list.prototype={
		init:function(){
			_.bindAll(this);
			this.$opt=this.options.initialize;
			this.options.query={};
			this.templates_loaded=false;
			this.models_loaded=false;
			this.templateslist=[];
		},
		init_templates:function(){
			var list=this;
			if(this.$opt.servertemplatefiles){
				if(typeof this.$opt.servertemplatefiles=='string') this.$opt.servertemplatefiles=JSON.parse(this.$opt.servertemplatefiles);
				if(typeof this.$opt.servertemplatefiles!='object') return;
				_.each(this.$opt.servertemplatefiles,function(file){
					list.templateslist.push(portal_url+file);
				})
			}
			if(!this.$opt.template){
				if(this.$opt.templatefile) {
					if(!this.templates_loaded) this.templateslist.push('text!'+this.$opt.templatefile);
					else this.$opt.template=require('text!'+this.$opt.templatefile);
				}
			}
			if(this.$opt.menu&&!this.options.menu.template){
				if(this.options.menu.templatefile) {
					if(!this.templates_loaded) this.templateslist.push('text!'+this.options.menu.templatefile);
					else this.options.menu.template=require('text!'+this.options.menu.templatefile);
				}
			}
			if(this.$opt.filter&&!this.options.filter.template){
				if(this.options.filter.templatefile) {
					if(!this.templates_loaded) this.templateslist.push('text!'+this.options.filter.templatefile);
					else this.options.filter.template=require('text!'+this.options.filter.templatefile);
				}
			}
			if(this.$opt.left&&!this.options.left.template){
				if(this.options.left.templatefile) {
					if(!this.templates_loaded) this.templateslist.push('text!'+this.options.left.templatefile);
					else this.options.left.template=require('text!'+this.options.left.templatefile);
				}
			}
			if(this.$opt.right&&!this.options.right.template){
				if(this.options.right.templatefile) {
					if(!this.templates_loaded) this.templateslist.push('text!'+this.options.right.templatefile);
					else this.options.right.template=require('text!'+this.options.right.templatefile);
				}
			}
			if(this.$opt.page&&!this.options.page.template){
				if(this.options.page.templatefile) {
					if(!this.templates_loaded) this.templateslist.push('text!'+this.options.page.templatefile);
					else this.options.page.template=require('text!'+this.options.page.templatefile);
				}
			}
			if(!this.templates_loaded&&this.templateslist.length>0){
				lists.templateslist=_.union(lists.templateslist,this.templateslist);
				this.getTemplate(this.templateslist,function(){
					list.templates_loaded=true;
					list.init_templates();
				})
				return;
			}
			this.init_models();
		},
		init_models:function(){
			var list=this;
			if(!this.models_loaded){
				if(this.$opt.left) {
					this.options.left.el=this.$opt.container+' '+this.options.left.container;
					this.options.left.modelstructure=listmvc.model.extend({options:this.options.left});
					this.options.left.model=new this.options.left.modelstructure({iType:this.options.left.name,isRoot:true});
					//this.options.left.model.isRoot=true;
				}
				if(this.$opt.right) {
					this.options.right.el=this.$opt.container+' '+this.options.right.container;
					this.options.right.modelstructure=listmvc.model.extend({options:this.options.right});
					this.options.right.model=new this.options.right.modelstructure({iType:this.options.right.name,isRoot:true});
					//this.options.right.model.isRoot=true;
				}
				if(this.$opt.filter){
					this.options.filter.el=this.$opt.container+' '+this.options.filter.container;
					this.options.filter.modelstructure=listmvc.model.extend({options:this.options.filter});
					this.options.filter.model=new this.options.filter.modelstructure({iType:this.options.filter.name,isRoot:true});
					//this.options.filter.model.isRoot=true;			
				}
				if(this.$opt.menu){
					this.options.menu.el=this.$opt.container+' '+this.options.menu.container;
				}
				if(this.$opt.page){
					this.options.page.el=this.$opt.container+' '+this.options.page.container;
				}
				this.models_loaded=true;
			}
			this.render_list();
			if(this.$opt.events){
				var list=this;
				_.each(this.$opt.events,function(value,key){
					var keys=key.split(" ");
					var eventkey=keys[0];
					var handle=key.slice(keys[0].length==key.length?keys[0].length:keys[0].length+1);
					if(!Boolean(handle)) $(list.$opt.container).on(eventkey,value);
					else $(list.$opt.container).on(eventkey,handle,value);
				})
			}
		},
		render:function(){
			this.init_templates();
		},
		render_list:function(){
			var list=this;
			if(this.$opt.container&&this.$opt.template){
				var templatevalue=(typeof this.$opt.template=='string')?_.template(this.$opt.template,{}):this.$opt.template({});
				$(this.$opt.container).html(templatevalue);
			}
			if(this.$opt.search){
				$(this.$opt.container).parent().find('form.search').on('submit',function(){
					var text=$(this).find('.search-query').val();
					list.options.query.SearchableText=text;
					list.load_right();
					return false;
				})				
			}
			this.load_left();
		},
		render_menu:function(){
			if(!this.$opt.menu) {
				this.load_filter();
				return;
			}
			var list=this;
			var $el=$(this.$opt.container).find(this.options.menu.container);
			var pagevalue=(typeof this.options.menu.template=='string')?_.template(this.options.menu.template,{}):this.options.menu.template();
			$el.html(pagevalue);
			$el.find('input[type="checkbox"][value="selectall"]').on('change',function(){
				if(!list.$opt.right) return;
				$rightel=$(list.$opt.container).find(list.options.right.container);
				if($(this).attr('checked')=='checked') $rightel.find('input[type="checkbox"]').attr('checked','checked');
				else $rightel.find('input[type="checkbox"]').removeAttr('checked');
			})
			$el.find('input[type="checkbox"][value="checked_children"]').on('change',function(){
				if(!list.$opt.right) return;
				if($(this).attr('checked')=='checked') list.options.right.checked_children=true;
				else list.options.right.checked_children=false;
			})
			this.load_filter();
		},
		load_filter:function(){
			var list=this;
			if(!this.$opt.filter) return;
			var $el=$(this.$opt.container).find(this.options.filter.container);
			if(this.options.filter.data){
				this.render_filter(this.options.filter.data);
			}
			else if(this.options.filter.url){			
				lists.load(this.options.filter.url,function(data){
					if(data.code==200){
						var d=data.data;
						list.render_filter(d);
					}	
				})
			}			
		},
		render_filter:function(data){
			var list=this;
			var $el=$(this.$opt.container).find(this.options.filter.container);
			if(!this.options.filter.template){
				if(this.options.filter.templatefile) {
					this.getTemplate(this.options.filter.templatefile,function(template){
						list.options.filter.template=template;
						list.render_menu();
					})
					return false;
				}
				else return false;
			}
			list.options.filter.model.set(data);
			list.options.filter.model.icollection.reset();
			lists.model2collection(list.options.filter.model,"results");
			$el.find('select').on('change',function(){
				var values=lists.serializeValue($el);
				list.options.query.filter=values;
				list.load_right();
				if(list.options.filter.onChnage) list.options.filter.onChnage(values);
				if(list.options.filter.onChange) list.options.filter.onChange(values);
			})	
			if(list.options.filter.onUpdate) list.options.filter.onUpdate();		
		},
		load_left:function(){
			var list=this;
			if(!this.$opt.left){
				this.load_right();
				list.render_menu();
				return;
			}
			if(this.options.left.data){
				var data=this.options.left.data;
				if(data.code) data=data.data;
				this.render_left(data);
			}
			else if(this.options.left.url){
				lists.load(this.options.left.url,function(data){
					if(data.code==200){
						list.render_left(data.data);
					}
				})
			}
		},
		render_left:function(data){
			var list=this;
			var $el=$(this.$opt.container).find(this.options.left.container);
			this.options.left.model.set(data);
			if(!$el.hasClass('list-tree')) $el.addClass('list-tree');
			if(this.options.left.type=='grid') lists.model2collection(this.options.left.model,'results');
			if(this.options.left.type=='tree') lists.model2tree(this.options.left.model,'results','children');
			$el.find('li h4 a').each(function(){
				$(this).on('click',function(){
					$el.find('li').removeClass('active');
					var id=$(this).parents('li').first().attr('id');
					$(this).parents('li').first().addClass('active');
					list.options.left.current=id;
					list.options.left.model.current=id;
					list.options.query={};
					if(id){
						list.options.query.type_categorized=id;
						opt='id='+list.options.query.type_categorized+'&';
					}
					else {
						list.options.query.type_categorized=null;
						opt='';
					}
					list.load_right();
					list.render_menu();
					$(list.$opt.container).parent().find('form.search').find('.search-query').val("");
					if(list.options.left.rightpanel&&id){
						var model=global.model.getModelById(list.options.left.model,id);
						if(model) list.render_template(model,list.options.left);
					} 
					if(list.options.left.onclick) list.options.left.onClick(id);
					return false;
				})
			})
			if($('body').tooltip) $el.find('[rel="tooltip"]').tooltip();
			if($('body').nanoScroller) lists.setscrollnano($el.parents('.nanoscrollbar').first());
			if(list.$opt.request&&global.getRequest(list.$opt.request)) {
				id=global.getRequest(list.$opt.request);
				$el.find('li.tree-item[id="'+id+'"]').find('h4 a').first().click();
				$el.find('li.tree-item[id="'+id+'"]').addClass('active');
			}
			else{
				$el.find('li.tree-item').first().find('h4 a').first().click();
				$el.find('li.tree-item').first().addClass('active');				
			}
			//list.options.query.type_categorized=id;
		      if(this.options.left.bindsort){
		        if(this.options.left.sorted) ;
		        else {
		          if(!this.options.left.bindsort.item) this.options.left.bindsort.item='.tree-item';
		          var sort=this.options.left.bindsort;
		          var container=$(this.$opt.container).find(this.options.left.container);
		          lists.sortable(container,sort.item,this.options.left.model,function(){
		            list.load_left();
		            if(sort.callback) sort.callback();
		          })  
		          this.options.left.sorted=true;       
		        }     
		      }
			if(this.options.left.onUpdate) this.options.left.onUpdate(id);
			this.hasmenu_check();
		},
		load_right:function(){
			if(!this.$opt.right) return;
			if(this.$opt.wait) $(this.options.right.el).jswait();
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
			if(list.options.query.page) opt=opt+"page="+list.options.query.page;
			if(this.options.right.data){
				var data=this.options.right.data;
				if(data.code) data=data.data;
				this.render_right(data);
			}
			else if(this.options.right.url){
				var url=this.options.right.url.indexOf('?')==-1?this.options.right.url+'?'+opt:this.options.right.url+'&'+opt;
				lists.load(url,function(data){
					if(data.code==200){
						list.render_right(data.data);
					}
				})
			}		
		},
		render_right:function(data){
			var list=this;
			var $el=$(this.$opt.container).find(this.options.right.container);
			list.options.right.model.icollection.reset();
			list.options.right.model.set(data);
			if(!$el.hasClass('list-content')) $el.addClass('list-content');
			if(this.options.right.type=='grid') lists.model2collection(this.options.right.model,'results');
			if(this.options.right.type=='tree') lists.model2tree(this.options.right.model,'results','children');	
			$el.find('.content-item h4,tr.content-item').live('click',function(event,ui){
					if($(this).hasClass('content-item')) var id=$(this).attr('id');
					else var id= $(this).parents('.content-item').first().attr('id');
					list.options.right.current=id;
					list.options.right.model.current=id;
					if(list.options.right.rightpanel&&id){
						var model=global.model.getModelById(list.options.right.model,id);
						if(model) list.render_template(model,list.options.right);
					} 
					if(list.options.right.onClick) list.options.right.onClick(id);
					//return false;
			})
			if(this.options.right.onUpdate) this.options.right.onUpdate(id);
			if(!this.$opt.left){
				if(list.$opt.request&&global.getRequest(list.$opt.request)) {
					id=global.getRequest(list.$opt.request);
					$el.find('.content-item[id="'+id+'"]').first().click();
					$el.find('.content-item[id="'+id+'"]').addClass('active');
				}
				else{
					var first_row = $(this.$opt.container).find(this.options.right.container).find('h4 a').first();
					if (typeof first_row != undefined) first_row.click();
			
				}
			}
			if($('body').tooltip) $el.find('[rel="tooltip"]').tooltip();
			this.hasmenu_check();
			this.render_page();
			if(this.options.right.bindsort){
				if(this.options.right.sorted) ;
				else {
					if(!this.options.right.bindsort.item) this.options.right.bindsort.item='.content-item';
					var sort=this.options.right.bindsort;
					var container=$(this.$opt.container).find(this.options.right.container);
					lists.sortable(container,sort.item,this.options.right.model,function(){
						list.load_right();
						if(sort.callback) sort.callback();
					})	
					this.options.right.sorted=true;				
				}			
			}
			if(this.$opt.onFinishRender) this.$opt.onFinishRender();
			if($('body').nanoScroller) lists.setscrollnano($el.parents('.nanoscrollbar').first());
			if(this.$opt.wait) $(this.options.right.el).jswait('close');
		},
		render_page:function(){
			if(!this.$opt.page) return;
			var list=this;
			var $el=this.options.page.el=$(this.$opt.container).find(this.options.page.container);
			this.options.page.model=this.options.right.model;
			var pagevalue=(typeof this.options.page.template=='string')?_.template(this.options.page.template,this.options.page.model.toJSON()):this.options.page.template(this.options.page.model.toJSON());
			$el.html(pagevalue);
			$(this.options.page.el).find('.first').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=1;
				list.load_right();
				return false;
			})
			$(this.options.page.el).find('.last').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('numpages');
				list.load_right();
				return false;
			})
			$(this.options.page.el).find('.prev').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('page')-1;
				list.load_right();
				return false;
			})
			$(this.options.page.el).find('.next').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('page')+1;
				list.load_right();
				return false;
			})
			$(this.options.page.el).find('.page').on('click',function(){
				list.options.query.page=parseInt($(this).html());
				list.load_right();
				return false;
			})
		},
		hasmenu_check:function(){
			var list=this;
			$(this.$opt.container).find('li.content-item,li.tree-item').each(function(){
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
		left_saveAll:function(callback){
			if(!this.options.left.saveallurl) return;
			this.save(this.options.left.model.icollection.toJSON(),this.options.left.saveallurl,callback);
		},
		right_saveAll:function(callback){
			if(!this.options.right.saveallurl) return;
			this.save(this.options.right.model.icollection.toJSON(),this.options.right.saveallurl,callback);
		},
		left_saveone:function(id,callback){
			if(!id||!this.options.left.saveurl) return;
			this.save([this.options.left.model.icollection.get(id).toJSON()],this.options.left.saveurl,callback);
		},
		right_saveone:function(id,callback){
			if(!id||!this.options.right.saveurl) return;
			this.save([this.options.right.model.icollection.get(id).toJSON()],this.options.right.saveurl,callback);
		},
		save:function(data,url,callback){
			listmvc.ModelForSaveAll.data=data;
			listmvc.ModelForSaveAll.url=listmvc.ModelForSaveAll.updateurl=url;
			listmvc.ModelForSaveAll.save({},
				{
					wait:true,
					success: function(m,response){
						if($('.action-save').length>0) $('.action-save').button('reset');
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
		getTemplate:function(templateslist,callback){
			if(templateslist.length>0){
				require(templateslist,function(){
					callback();
				})
			}
		},
		render_template:function(model,options,callback){
			var list=this;
			var $el=$(this.$opt.container).find(options.container);
			var properties=model.get('properties');
			var JSON=model.toJSON();
			_.each(properties,function(property){
				if(global.template[property]){
					if(typeof global.template[property]=='function') templatevalue=global.template[property](JSON);
					else if(typeof global.template[property]=='string') templatevalue=_.template(global.template[property],JSON);
					if($('.ui-layout-right').find('.mod[data-id="'+property+'"]').length>0){
						$('.ui-layout-right').find('.mod[data-id="'+property+'"]').replaceWith(templatevalue);
					}
					else {
						if($('.ui-layout-right').find('.nano').length>0) $('.ui-layout-right').find('.nano').children('.content').append(templatevalue);	
						else $('.ui-layout-right').append(templatevalue);	
					}
					if(property!='update'&&_.has(JSON[property],'readonly')){
						$('.ui-layout-right').find('.mod[data-name="'+property+'"]').append('<input type="hidden" name="readonly" value="'+JSON[property].readonly+'">');
					}	
					if($('.ui-layout-right').find('.mod[data-id="'+property+'"]').hasClass('inline-edit')){
						global.initInlineEdit($('.ui-layout-right').find('.mod[data-id="'+property+'"]'));
					}
					$('.ui-layout-right').find('.mod[data-id="'+property+'"]').attr('data-modelid',model.id);
					list.setModEvent($('.ui-layout-right').find('.mod[data-id="'+property+'"]'),function(name,values){
						var data={};
						if(name) data[name]=values;
						else data=values;
						model.set(data);
						if(callback) callback(data);
					})
				}
			});
			if(list.options.rightpanel.events){
				list.setRightPanelEvents(model,options);
			}
			if($('.ui-layout-right').find('.nano').length==0) global.setscrollnano('.ui-layout-right');
		},
		setRightPanelEvents:function(model,options){
			if(this.options.rightpanel.events){
				var list=this;
				_.each(this.options.rightpanel.events,function(value,key){
					var keys=key.split(" ");
					var eventkey=keys[0];
					var handle=key.slice(keys[0].length==key.length?keys[0].length:keys[0].length+1);
					if(!Boolean(handle)) {
						$('.ui-layout-right').off(eventkey);
						$('.ui-layout-right').on(eventkey,function(){
							value(model,options);
						});
					}
					else {
						$('.ui-layout-right').off(eventkey,handle);
						$('.ui-layout-right').on(eventkey,handle,function(){
							value(model,options);
						});						
					}
				})
			}			
		},
		setModEvent:function(container,callback){
			$(container).find('select').on('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				var model=$(this).parents('.mod').first().attr('data-model');
				callback(name,values,model);
			})
			$(container).find('input[type="checkbox"]').on('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				var model=$(this).parents('.mod').first().attr('data-model');
				callback(name,values,model);
			})
			$(container).find('input[type="radio"]').on('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				var model=$(this).parents('.mod').first().attr('data-model');
				callback(name,values,model);
			})
			$(container).find('input[type="text"]').on('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				var model=$(this).parents('.mod').first().attr('data-model');
				callback(name,values,model);
			})
			$(container).find('textarea').on('change',function(){
				var values=global.serializeValue($(this).parents('.mod').first());
				var name=$(this).parents('.mod').first().attr('data-name');
				var model=$(this).parents('.mod').first().attr('data-model');
				callback(name,values,model);
			})
		}
	};
	return lists;
})

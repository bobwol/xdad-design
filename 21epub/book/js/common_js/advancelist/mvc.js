define(['lists/model/list','lists/main'],function(listmvc){
	lists.mvc=function(options){
		this.defaults={
			className:'content-item',
			defaults:{},
			name:'MVC',
			container:'.mvc',
			type:'custom',// 类型可以为tree, grid , custom, custom代表模板匹配
			template:null,
			templatefile:null,
			servertemplatefiles:null,//用于加载server端的template
			wrap:null,//only use for tree or gird
			events:{},
			url:null,
			saveurl:null,
			saveallurl:null,
			deleteurl:null,
			data:null,
			bindchange:true,
			onClick:null,
			onUpdate:null,
			onChange:null,//激活当model改变时
			reset:true,
			wait:false,
			addMore:false,
			request:null,//是否根据request初始参数来render content ,null表示没有初始， 'id'表示以id作为参数来定位
			inlineEdit:false,//是否激活inline编辑功能，true来激活, 同时设置data-type="textarea" || "text" , 
			updateEffect:false
		}
		this.options=options;
		var $defaults=$.extend({},this.defaults);
		this.options=$.extend(true,{},$defaults, typeof options == 'object' && options);
	    this.init();
	};
	lists.mvc.prototype={
		init:function(){
			_.bindAll(this);
			this.templates_loaded=false;
			this.model_loaded=false;
			this.templateslist=[];
		},
		render:function(){
			this.init_template();
		},
		init_template:function(){
			var mvc=this;
			if(this.options.servertemplatefiles){
				if(typeof this.options.servertemplatefiles=='string') this.$opt.servertemplatefiles=JSON.parse(this.$opt.servertemplatefiles);
				if(typeof this.options.servertemplatefiles!='object') return;
				_.each(this.options.servertemplatefiles,function(file){
					mvc.templateslist.push(portal_url+file);
				})
			}
			if(!this.options.template){
				if(this.options.templatefile) {
					if(!this.templates_loaded) this.templateslist.push('text!'+this.options.templatefile);
					else this.options.template=require('text!'+this.options.templatefile);
				}
			}	
			if(!this.templates_loaded&&this.templateslist.length>0){
				lists.templateslist=_.union(lists.templateslist,this.templateslist);
				this.getTemplate(this.templateslist,function(){
					mvc.templates_loaded=true;
					mvc.init_template();
				})
				return;
			}
			this.init_model();		
		},
		init_model:function(){
			if(!this.model_loaded){
				if(this.options.template){
					this.options.modelstructure=listmvc.model.extend({options:this.options});
					this.options.el=this.options.container;
					this.options.model=new this.options.modelstructure({iType:this.options.name,isRoot:true});
				}
				this.model_loaded=true;
			}	
			this.load();		
		},
		load:function(){
			if(!this.options.template||!this.options.model) return;
			if(this.options.wait) $(this.options.el).jswait();
			var mvc=this;
			if(this.options.data){
				var data=this.options.data;
				if(data.code) data=data.data;
				this.render_template(data);
			}
			else if(this.options.url){
				var opt="";
				if(this.options.request&&global.getRequest(this.options.request)){
					opt=this.options.request+'='+global.getRequest(this.options.request);
				}
				var url=this.options.url.indexOf('?')==-1?this.options.url+'?'+opt:this.options.url+'&'+opt;
				global.json.load(url,function(data){
					if(data.code==200){
						mvc.render_template(data.data);
					}
				})
			}		
		},
		render_template:function(data){
			var mvc=this;
			var $el=$(this.options.container);
			mvc.options.model.icollection.reset();
			mvc.options.model.set(data);
			if(this.options.type=='custom') mvc.options.model.icollection.add(data);
			if(this.options.type=='grid') lists.model2collection(this.options.model,'results');
			if(this.options.type=='tree') lists.model2tree(this.options.model,'results','children');
			$el.find('.content-item h4,tr.content-item').live('click',function(event,ui){
					if($(this).hasClass('content-item')) var id=$(this).attr('id');
					else var id= $(this).parents('.content-item').first().attr('id');
					mvc.options.current=id;
					mvc.options.model.current=id;
					if(mvc.options.onClick) mvc.options.onClick(id);
					//return false;
			})
			if(this.options.addMore) {
				if(this.options.type=='tree'||this.options.type=='custom') return;
				var numpages=Number(mvc.options.model.get('numpages'));
				if(numpages>1) $el.append('<div class="more"><a href="#">载入更多..</a></div>');
				$el.find('.more a').on('click',function(){
					var page=Number(mvc.options.model.get('page'))+1;
					var opt='page='+page;
					var url=mvc.options.url.indexOf('?')==-1?mvc.options.url+'?'+opt:mvc.options.url+'&'+opt;
					global.json.load(url,function(data){
						if(data.code==200){
							mvc.options.model.set(data.data);
							var page=Number(mvc.options.model.get('page'));
							var numpages=Number(mvc.options.model.get('numpages'));
							if(page==numpages) $el.find('.more').addClass('hide');
							mvc.options.model.icollection.add(data.data.results);
						}
					})
					return false;
				})
			}
			if(this.options.onUpdate) this.options.onUpdate();
			if($('body').tooltip) $el.find('[rel="tooltip"]').tooltip();
			this.hasmenu_check();
			if($('body').nanoScroller) global.setscrollnano($el.parents('.nanoscrollbar').first());
			if(this.options.wait) $(this.options.el).jswait('close');
		},
		hasmenu_check:function(){
			var mvc=this;
			$(this.options.container).find('li.content-item,li.tree-item').each(function(){
				if($(this).children('ul').length>0&&$(this).children('ul').children('li').length>0) {
					$(this).addClass('hasmenu unfold');
				}
				else $(this).removeClass('hasmenu');
			});
		},
		getTemplate:function(templateslist,callback){
			if(templateslist.length>0){
				require(templateslist,function(){
					callback();
				})
			}
		},
		saveAll:function(callback){
			if(!this.options.saveallurl) return;
			lists.save(this.options.model.icollection.toJSON(),this.options.saveallurl,callback);
		},
		saveone:function(id,callback){
			if(!id||!this.options.saveurl) return;
			lists.save([this.options.model.icollection.get(id).toJSON()],this.options.saveurl,callback);
		},
		reset:function(data){
			this.render_template(data);
		}
	}
});

$(function(){
	global.modal.create('confirmModal','small-modal');
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
			target.hide();
			target.parent().append(global.template.text_form({text:text,id:id}));
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
			$(target).find('input[type="checkbox"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				if(!data[name]) data[name]=[];
				if($(this).attr('checked')=='checked'){
					data[name].push($(this).val());					
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
			$('#confirmModal').html(global.template.confirm());
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
			$('.ui-layout-right').append(global.template['update'](JSON));
			_.each(properties,function(property){
				if(global.template[property]){
					$('.ui-layout-right').append(global.template[property](JSON));					
				}
			})
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
		}
	}
	global.debug=false;
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
			$(this.options.list_el).html(this.options.list_template());
		},
		render_menu:function(){
			var list=this;
			$(this.options.menu.el).html(this.options.menu.template(this.options.menu.model.toJSON()));
			$(this.options.menu.el).find('input[type="checkbox"][name="selectall"]').on('change',function(){
				if($(this).attr('checked')=='checked') $(list.options.right.model.el).find('input[type="checkbox"]').attr('checked','checked');
				else $(list.options.right.model.el).find('input[type="checkbox"]').removeAttr('checked');
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
						list.query();
					}
					else {
						list.options.query.type_categorized=null;
						opt='';
						list.query();
					}
				})
			})
			$(this.options.left.model.el).find('[rel="tooltip"]').tooltip();
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
			$(this.options.right.model.el).find('li.content-item').each(function(){
				//if($(this).children('ul').length>0) $(this).addClass('hasmenu unfold');
			})
		},
		render_page:function(){
			var list=this;
			$(this.options.page.el).html(this.options.page.template(this.options.page.model.toJSON()));
			$(this.options.page.el).find('.first').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=1;
				list.query(list.options.query.page);
			})
			$(this.options.page.el).find('.last').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('numpages');
				list.query(list.options.query.page);
			})
			$(this.options.page.el).find('.prev').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('page')-1;
				list.query(list.options.query.page);
			})
			$(this.options.page.el).find('.next').on('click',function(){
				if($(this).parent().hasClass('disabled')) return false;
				list.options.query.page=list.options.right.model.get('page')+1;
				list.query(list.options.query.page);
			})
			$(this.options.page.el).find('.page').on('click',function(){
				list.options.query.page=parseInt($(this).html());
				list.query(list.options.query.page);
			})
		},
		query:function(page){
			var list=this;
			var opt="";
			if(list.options.query.type_categorized){
				//opt='filter={"type_categorized":"'+list.options.query.type_categorized+'"}&&';
				opt='id='+list.options.query.type_categorized+'&';
			}
			if(page) opt=opt+"page="+page;
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
				}
				else global.throwerror(data.msg);
			},opt);
		}
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
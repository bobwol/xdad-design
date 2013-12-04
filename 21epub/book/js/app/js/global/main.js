(function(){
	if(typeof global=="undefined") global={};
	global=$.extend({},global,{
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
				$(modal).one('shown',function(){
					if($(modal).find('input[type="text"],textarea').length>0) $(modal).find('input[type="text"],textarea').first().focus();
					else $(modal).find('button.btn-cofirm').first().focus();
				})
				$(modal).modal('show');
			},
			hide:function(modal){//隐藏一个modal窗口
				$(modal).modal('hide');
			},
			openDataModal:function(modal,model,Template,attr){
				var templatetype=typeof Template;
				if(templatetype=='function') $(modal).html(Template(model.toJSON()));
				else $(modal).children('.modal-body').html(_.template(Template,model.toJSON()));
				$(modal).modal('show');
				$(modal).find('.btn').on('click',function(){
					var values=global.serializeValue($(modal));
					console.log(values);
					eval(model.Root.id).update(values);
					//eval(model.Root.id).renderinfo(model.id);
				})
			},
			createCustomModal:function(options){
				
			}
		},
		text2form:function(target,callback){
			var text = target.text();
			var id=target.attr('id');
			var type=target.attr('data-type');
			target.hide();
			target.parent().append(global.template.text_form({text:text,id:id,type:type}));
			target.parent().children('.editform').find('input, textarea').first().focus();
			target.parent().find('.action-save').on('click',function () {
				var val = $(this).parents('.editform').first().find('input, textarea').first().val();
				val=val.replace(/\n/g,'\n<br>');
				var id=$(this).parents('.editform').first().find('input, textarea').first().attr('name');
				if (val==''){
					target.html('<em>点击添加内容</em>')
				}else{
					target.html(val);
				}
				target.show();
				$(this).parents('.editform').first().trigger('change');
				$(this).parents('.editform').first().remove();
				var data={};
				data[id]=val;
				if(callback) callback(data);
			}); 
			target.parent().find('.action-cancel').on('click',function () {
				target.show();
				$(this).parents('.editform').first().remove();
			}); 
			if(target.parent().children('.editform').find('textarea').length>0){
				// target.parent().children('.editform').find('textarea').first().on('keypress',function(e){
				    // var key = e.keyCode;
				    // if (key == 13) {
				        // $(this)[0].value=$(this)[0].value+"\n";
				        // return false;
				    // }
				    // else {
				        // return true;
				    // }					
				// })
			}		
		},
		initInlineEdit:function(target,callback){
			target.find('[data-method=inline]').each(function(){
				$(this).on('click',function(){
					global.text2form($(this),function(data){
						
					});
				})			
			})			
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
		serializeValue:function(target,EmptyValueAllowed){
			var data={};
			var getObj=function(name){
				if(name.indexOf('.')!=-1){
					var namesplit=name.split('.');
					var processdata='data';
					for(i=0;i<namesplit.length;i++){
						var index=_.isNaN(Number(namesplit[i]))?'"'+namesplit[i]+'"':Number(namesplit[i]);
						processdata=processdata+'['+index+']';
						if(!eval(processdata)){
							return null;
						}
					}
					return eval(processdata);
				}
				else{
					return data[name];					
				}				
			}
			var processObj=function(name,value){
				if(name.indexOf('.')!=-1){
					var namesplit=name.split('.');
					var processdata='data';
					for(i=0;i<namesplit.length;i++){
						var index=_.isNaN(Number(namesplit[i]))?'"'+namesplit[i]+'"':Number(namesplit[i]);
						processdata=processdata+'['+index+']';
						if(!eval(processdata)){
							if(namesplit[i+1]&&!_.isNaN(Number(namesplit[i+1]))) eval(processdata+'=[]');
							else eval(processdata+'={}');
						}
					}
					eval(processdata+'="'+value+'"');
				}
				else{
					data[name]=value				
				}
			}
			$(target).find('input[type="text"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				var value=$(this).val();
				if(!Boolean(value)&&$(this).attr('data-type')=="boolean") value=false;
				processObj(name,value);
			})
			$(target).find('input[type="hidden"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				value=$(this).val();
				if(value=='true') value=true;
				if(value=='false') value=false;
				processObj(name,value);
			})
			$(target).find('input[type="checkbox"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				var value=getObj(name);
				if(!value||!_.isArray(value)) value=[];
				if($(this).attr('checked')=='checked'){
					if($(this).attr('data-type')=="boolean") value=true;
					else value.push($(this).val());					
				}
				else{
					if($(this).attr('data-type')=="boolean") value=false;
					else if(EmptyValueAllowed){
					}
				}
				processObj(name,value);
			})
			$(target).find('input[type="radio"]:checked').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				value=$(this).val();
				processObj(name,value);
			})
			$(target).find('select').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var mutiple=Boolean($(this).attr('data-mutiple'));
				if(!name) return;
				var value=getObj(name);
				if(!mutiple){
					if($(this).val()=="null"){
						return;
					} 
					else value=$(this).val();				
				}
				else{
					if(!value||!_.isArray(value)) value=[];
					value.push($(this).val());								
				}
				processObj(name,value);
			})
			$(target).find('textarea').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				var value=$(this).val();
				if(!Boolean(value)&&$(this).attr('data-type')=="boolean") value=false;
				else value=value;
				var obj=processObj(name,value);
			})
			return data;
		},
		serializeMod:function(selector){
			var returned={};
			$(selector).find('.mod').each(function(){
				var data_name=$(this).attr('data-name');
				if(data_name){
					returned[data_name]=global.serializeValue($(this));
				}
				else{
					var dict=global.serializeValue($(this));
					_.each(dict,function(value,key){
						returned[key]=value;
					})
				}
			})
			return returned;
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
			return id+global.guid();
		},
		guid:function(){
			function s4() {
			  return Math.floor((1 + Math.random()) * 0x10000)
			             .toString(16)
			             .substring(1);
			};
			return s4() + s4() + s4() + s4() + 
			         s4() +  s4() + s4() + s4();
			         
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
			return id+(new Date()).getTime();
		},
		message:function(type,msg,interval){
			if($('body').find('.msg').length==0) $('body').append('<div class="msg"></div>');
			if(!interval)	interval=3000;
			$('.msg').html(global.template.msg({"type":type,"msg":msg}));
			$('.msg').show();
			setTimeout(function(){$('.msg').fadeOut('slow')}, interval);
		},
		getRequest:function(key) {//return the location ref
		
		   var url = location.search; //获取url中"?"符后的字串
		
		   var theRequest = new Object();
		
		   if (url.indexOf("?") != -1) {
		
		      var str = url.substr(1);
		
		      strs = str.split("&");
		
		      for(var i = 0; i < strs.length; i ++) {
		
		         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		
		      }
		
		   }
		
		   if(key) return theRequest[key];
		   else return theRequest;
		
		},
		throwerror:function(msg){
			global.message('error',msg);
		},
		confirmChange:function(callback){
			if(global.change){
				$('#confirmModal').html(global.template.confirm({msg:"你的编辑尚未保存，是否立即保存？"}));
				global.modal.show('#confirmModal');
				$('#confirmModal').find('.btn.btn-confirm').on('click',function(){
						global.modal.hide('#confirmModal');
						global.save();
						callback();
				});	
				$('#confirmModal').find('.btn.btn-cancel').on('click',function(){
						global.modal.hide('#confirmModal');
						callback();
				});				
			}
			else{
				callback();
			}
		},
		confirmDelete:function(callback){
			$('#confirmModal').html(global.template.confirm({msg:"确认删除？"}));
			global.modal.show('#confirmModal');
			$('#confirmModal').find('.btn-confirm').focus();
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
		render_template:function(JSON,properties,keep,noscroll){
			if(!keep) $('.ui-layout-right').empty();
			//$('.ui-layout-right').append(global.template['update'](JSON));
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
				}
			});
			if(!noscroll) global.setscrollnano('.ui-layout-right');
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
	});
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
							list.options.query.page=null;
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
						list.options.query.SearchableText=null;
						list.options.query.filter=null;
						opt='';
						list.query(opt);
						list.render_menu();
						$(list.options.list_el).parent().find('form.search').find('.search-query').val("");
						return false;
					}
				})
			})

			$(this.options.left.model.el).find('[rel="tooltip"]').tooltip({container: 'body' });
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
			$(this.options.right.model.el).find('[rel="tooltip"]').tooltip({ container: 'body' });
			this.hasmenu_check();
			global.setscrollnano($(this.options.right.model.el).parents('.nanoscrollbar').first());
		},
		refrash_right:function(data){
			if(!data){
				this.query_filter();
			}
			else this.render_right_data(data);
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
		query_filter:function(){
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
			this.query(opt);			
		},
		query:function(opt){
			var list=this;
			this.options.right.model.query(function(data){
				if(data.code==200){
					var d=data.data;
					list.render_right_data(d);
					//list.options.right.model.clear();
		
				}
				else global.throwerror(data.msg);
			},opt);
		},
		render_right_data:function(d){
			var list=this;
			list.options.right.model.icollection.reset();
			list.options.right.model.set(d);
			if(!list.options.right.type||list.options.right.type=="collection") global.model.model2collection(list.options.right.model,"results");
			else global.model.model2tree(list.options.right.model,"results","children");
			list.render_right();
			list.render_page();		
			$(list.options.right.model.el).find('[rel="tooltip"]').tooltip();
			if(list.options.afterquery) list.options.afterquery();		
			if(list.options.left.onClick) list.options.left.onClick(list.options.left.model.current);
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
	global.simplepreview=function(data){
		if($('body').find('#material_preview').length>0){
		}
		else global.modal.create_preview_modal('material_preview');		
		$('#material_preview').empty();
		global.modal.show('#material_preview');	
		$('#material_preview').html(global.template.preview({title:document.title,preview:data,description:null}));
	};
	global.preview=function(contexturl,type){
			if(type=="CBT"||type=='FluidBook'){
				var url=contexturl+'preview';
			    window.bookwindow=window.open(url, '','type=fullWindow, fullscreen, scrollbars=yes');
				// if($('body').find('iframe#PreviewWindow').length>0){
				// }
				// else $('body').append('<iframe id="PreviewWindow" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:9999999999;"></iframe>');
				// $('iframe#PreviewWindow').attr('src',url+'?from=page');
				//window.open(url,'PreviewWindow','fullscreen=yes,toolbar=no,status=no,location=no');
			}
			else if(type=="ImagesTopic"||type=="FluidTopic"||type=="CBTChapter"||type=="CBTSection"){
				var url=contexturl+'newcbtview';
				if($('body').find('iframe#PreviewWindow').length>0){
				}
				else $('body').append('<iframe id="PreviewWindow" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:9999999999;"></iframe>');
				$('iframe#PreviewWindow').attr('src',url+'?from=page');
				//window.open(url,'PreviewWindow','fullscreen=yes,toolbar=no,status=no,location=no');
			}
			else if(type=='PDFBook'){
				var url=contexturl+'preview';
			    window.pdfwindow=window.open(url);
			}
			else{
				if($('body').find('#material_preview').length>0){
				}
				else global.modal.create_preview_modal('material_preview');
				$('#material_preview').empty();
				global.modal.show('#material_preview');	
				global.html.load(contexturl+'preview',function(data){
					$('#material_preview').html(global.template.preview({title:document.title,preview:data,description:null}));
					
					if($('.preview-modal .slideshow').length){
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
					}
				})				
			}		
	};
	global.listpreview=function(contexturl,type){
			if(type=="CBT"||type=='FluidBook'){
				var url=contexturl;
			    window.bookwindow=window.open(url, '','type=fullWindow, fullscreen, scrollbars=yes');
				// if($('body').find('iframe#PreviewWindow').length>0){
				// }
				// else $('body').append('<iframe id="PreviewWindow" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:9999999999;"></iframe>');
				// $('iframe#PreviewWindow').attr('src',url+'?from=page');
				//window.open(url,'PreviewWindow','fullscreen=yes,toolbar=no,status=no,location=no');
			}
			else if(type=="ImagesTopic"||type=="FluidTopic"){
				var url=contexturl;
				window.bookwindow=window.open(url, '','type=fullWindow, fullscreen, scrollbars=yes');
				// if($('body').find('iframe#PreviewWindow').length>0){
				// }
				// else $('body').append('<iframe id="PreviewWindow" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:9999999999;"></iframe>');
				// $('iframe#PreviewWindow').attr('src',url+'?from=page');
				//window.open(url,'PreviewWindow','fullscreen=yes,toolbar=no,status=no,location=no');
			}
			else if(type=='PDFBook'){
				var url=contexturl;
			    window.pdfwindow=window.open(url);
			}
			else if(type=="tdms"){
				if($('body').find('#material_preview').length>0){
				}
				else global.modal.create_preview_modal('material_preview');
				var material_type = material_split_href(contexturl);
				var href = "http://"+material_type.linkid;
				$('#material_preview').html(global.template.preview({title:document.title,preview:'<iframe class="element" src="'+href+'" class="absolute" width="1024" height="768" style="border:none"></iframe>',description:null}));
				global.modal.show('#material_preview');	
				
			}
			else{
				if($('body').find('#material_preview').length>0){
				}
				else global.modal.create_preview_modal('material_preview');
				$('#material_preview').empty();
				global.modal.show('#material_preview');
				global.html.load(contexturl,function(data){
					$('#material_preview').html(global.template.preview({title:document.title,preview:data,description:null}));	
					
					if($('.preview-modal .slideshow').length){
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
					}
				})				
			}		
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
	global.fill=function(selector,data){
		var processData=function(data){
			if(typeof data=='object') data=JSON.stringify(data);
			return data;
		}
		//fillin input ,textarea ,select, 
		$(selector).find('.mod').each(function(){
			var enablefill=$(this).attr('data-fill');
			if(!Boolean(enablefill)) return ;
			var data_attr=$(this).attr('data-name');
			if(!data_attr) $data=data;
			else $data=data[data_attr];
			if(!$data) return;
			$(this).find('input[type=text],input[type=hidden],input[type=radio],textarea,select').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name||!$data[name]) return;
				else $(this).val(processData($data[name]));
			})
			$(this).find('input[type=checkbox]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var type=$(this).attr('data-type');
				if(!name||!$data[name]) return;
				if(type=='boolean'){
					if(Boolean($data[name])) $(this).attr('checked','checked');
					else $(this).removeAttr('checked');
				}
				else{
					var value=$(this).attr('value');
					if(_.include(value,$data[name])) $(this).attr('checked','checked');
					else $(this).removeAttr('checked');				
				}
			})
			$(this).find('input[type=checkbox]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name||!$data[name]) return;
				var value=$(this).attr('value');
				if(String(value)==String($data[name]))
					$(this).prop('checked', true);
			})
		})
	};
	global.actionsave=null;
	global.switch={
		rightpanelclear:true
	}
	global.setscrollnano('.nanoscrollbar');
	if(window.location.href.indexOf('-debug')==-1){
		this.console = {
			log:function(){
	
			},
			info:function(){}
		};
	}
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
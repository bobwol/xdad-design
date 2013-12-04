define([
		'global/main',
		'interaction/ui/animation',
		'interaction/ui/event',
		'interaction/ui/resources',
		'interaction/ui/floatmenu',
		'interaction/ui/util',
		'interaction/ui/lib',
		//'interaction/ui/draw',
		'interaction/ui/step',
		'text!global/templates/confirm.js',
		'interaction/ui/templatepage',
		'text!interaction_view/template/message.js'
		],function(){
	var MessageTemplate=require('text!interaction_view/template/message.js');
	var confirmT=require('text!global/templates/confirm.js');
	var func={
		modal:{
			create:function(modalname,type,options,data){
				if(!data) data='';
				if(!type)	type="large-modal";
				if(modalname=='animation_preview') type="large-modal preview-modal dark";
				$('body').append(global.template.modal({name:modalname,data:data,type:type,options:options||{}}));
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
		save:function(model,attributes,callback){
			if(!attributes) attributes={};
			model.save(
				attributes,
				{
					wait:true,
					success: function(m,response){
						$('button.action-save').button('reset');
						returned=eval(response);
						callback(response);
					},
					error:function(){
						$('button.action-save').button('reset');
						interaction.message('error','服务器请求未应答');
					}
				}
			);
		},
		serializeValueSimple:function(target){
			var data={};
			$(target).find('input[type="text"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var type=$(this).attr('data-type');
				if(!name) return;
				data[name]=$(this).attr('value');
				if(type=='number') data[name]=Number(data[name]);
			})
			$(target).find('input[type="hidden"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var type=$(this).attr('data-type');
				if(!name) return;
				data[name]=$(this).attr('value');
				if(data[name]=='true') data[name]=true;
				if(data[name]=='false') data[name]=false;
				if(type=='number') data[name]=Number(data[name]);
			})
			$(target).find('input[type="checkbox"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var type=$(this).attr('data-type');
				if(!name) return;
				if(!data[name]) data[name]=[];
				if($(this).attr('checked')=='checked'){
					if(type=="boolean") data[name]=true;
					else {
						if(type=='number') data[name].push(Number($(this).val()));
						else data[name].push($(this).val());
					}					
				}
				else{
					if($(this).attr('data-type')=="boolean") data[name]=false;
				}
			})
			$(target).find('input[type="radio"]:checked').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var type=$(this).attr('data-type');
				if(!name) return;
				data[name]=$(this).val();
				if(type=='number') data[name]=Number(data[name]);
			})
			$(target).find('select').each(function(){
				if($(this).attr('disabled')=="disabled") return;
				var name=$(this).attr('name')||$(this).attr('id');
				var type=$(this).attr('data-type');
				if(!name) return;
				else if($(this).val()=="null"||$(this).val()=="") return;
				data[name]=$(this).val();
				if(type=='number') data[name]=Number(data[name]);
			})
			$(target).find('textarea').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				if(!name) return;
				data[name]=$(this).html();
			})
			return data;
		},
		serializeValue:function(target){
			var data={};
			var common=null;
			var detail=null;
			var _dataset=function(attr,type,name,value){
				if(!name) return;
				data[name]=value;
				if(data[name]=='true') data[name]=true;
				if(data[name]=='false') data[name]=false;
				if(attr=='iCommon') {
					if(!common) common={};
					common[name]=Number(value);
				}
				if(attr=='iDetail'){
					if(!detail) detail={};
					detail[name]=value;
				}
			}
			$(target).find('input[type="text"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var attr=$(this).attr('data-attr');
				var type=$(this).attr('data-type');
				var value=$(this).attr('value');
				_dataset(attr,type,name,value);
			})
			$(target).find('input[type="hidden"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var attr=$(this).attr('data-attr');
				var type=$(this).attr('data-type');
				var value=$(this).attr('value');
				_dataset(attr,type,name,value);
			})
			$(target).find('input[type="checkbox"]').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var attr=$(this).attr('data-attr');
				var type=$(this).attr('data-type');
				if(!name) return;
				if(!data[name]) _dataset(attr,type,name,[]);
				if($(this).attr('checked')=='checked'){
					if($(this).attr('data-type')=="boolean") _dataset(attr,type,name,true);
					else {
						data[name].push($(this).val());	
						_dataset(attr,type,name,data[name]);
					}	
					//console.info(data);			
				}
				else{
					if($(this).attr('data-type')=="boolean") _dataset(attr,type,name,false);
				}
			})
			$(target).find('input[type="radio"]:checked').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var attr=$(this).attr('data-attr');
				var type=$(this).attr('data-type');
				var value=$(this).val();
				if($(this).attr('checked')=='checked'){
					if($(this).attr('data-type')=="boolean") _dataset(attr,type,name,true);
					else {
						_dataset(attr,type,name,value);
					}				
				}
				else{
					if($(this).attr('data-type')=="boolean") _dataset(attr,type,name,false);
				}
			})
			$(target).find('select').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var attr=$(this).attr('data-attr');
				var type=$(this).attr('data-type');
				var value=$(this).val();
				_dataset(attr,type,name,value);
			})
			$(target).find('textarea').each(function(){
				var name=$(this).attr('name')||$(this).attr('id');
				var attr=$(this).attr('data-attr');
				var type=$(this).attr('data-type');
				value=$(this).html();
				_dataset(attr,type,name,value);
			})
			return {data:data,common:common,detail:detail};
		},
		get_array:function(target,attributes){
			var returned=[];
			target.each(function(){
				var id=$(this).attr(attributes);
				returned.push(id);
			})
			return returned;
		},
		tEditorinit:function(){
			$('table.mceLayout').css('width','100%');
			$('table.mceLayout').css('height','100%');
			$('table.mceLayout').css('background','transparent');
			$('table.mceLayout').children('tbody').children('tr.last').css('position','absolute');
			$('table.mceLayout').children('tbody').children('tr.last').css('background','#FFFFFF');
			$('table.mceLayout').children('tbody').children('tr.last').css('top','-50px');
			$('table.mceLayout').children('tbody').children('tr.mceLast').css('position','absolute');
			$('table.mceLayout').children('tbody').children('tr.mceLast').css('background','#FFFFFF');
			$('table.mceLayout').children('tbody').children('tr.mceLast').css('top','-50px');
			//$('table.mceLayout iframe').css('height','100%');
			$('table.mceLayout iframe').css('background','transparent');
			interaction.current.iview.$el.find('iframe').css('height',interaction.current.iview.getcommon().iHeight+'px');
			tinyMCE.execCommand('mceFocus', false, "tEditor_"+interaction.current.id);
		},
		sortable:function(container,element,handle,sortcheck,callback){
			$(container).sortable({
				handle:handle,
				items:element,
				axis:"y",
				helper:'clone',
				forceHelperSize:true,
				placeholder:'ui-sortable-placehoder',
				forceHelperSize: true,
				dropOnEmpty:true,
				start:function(event,ui){
					startposition = ui.item.prevAll().length + 1;
					var dom=$(ui.item);
					function bindsort(event){
						if(event.type=='mouseover'){
							if($(event.currentTarget).parents(element).first().hasClass('ui-sortable-helper')) return false;
							$(event.currentTarget).parents(element).first().addClass('current');
							$(event.currentTarget).parents(element).first().children('.wraparea').addClass('ui-sortable-hover');
							$(container).find('li.ui-sortable-placehoder').css('visibility','hidden');
							if(!sortcheck(dom.attr('id'),$(event.currentTarget).parents(element).first().attr('id'))) $(event.currentTarget).parents(element).first().children('.wraparea').addClass('ui-sortable-disable');
							else $(event.currentTarget).parents(element).first().children('.wraparea').removeClass('ui-sortable-disable');
						}
						else{
							if($(event.currentTarget).parents(element).first().hasClass('ui-sortable-helper')) return false;
							$(event.currentTarget).parents(element).first().removeClass('current');
							$(event.currentTarget).parents(element).first().children('.wraparea').removeClass('ui-sortable-hover');
							$(container).find('li.ui-sortable-placehoder').css('visibility','visible');
							if(!sortcheck(dom.attr('id'),$(event.currentTarget).parents(element).first().attr('id'))) $(event.currentTarget).parents(element).first().children('.wraparea').removeClass('ui-sortable-disable');
							else $(event.currentTarget).parents(element).first().children('.wraparea').removeClass('ui-sortable-disable');
						}					
					}
					$(container).find(element+' .btn-draged').each(function(){
						$(this).bind('mouseover mouseout',bindsort);
					})
				},
				stop:function(event,ui){
					$(container).find(element+' .btn-draged').each(function(){
						$(this).unbind('mouseover mouseout');
					})	
		        	if($(container).find('.current').length>0){
		        		var source=$(ui.item).attr('id');
		        		var target=$(container).find('.current').first().attr('id');
        				if(sortcheck(source,target)){
							$dest=$(container).find('[id="'+target+'"]');
							$source=$(container).find('[id="'+source+'"]').detach();
							if($dest.children('ul').length==0) $dest.append('<ul></ul>');
							$dest.children('ul').append($source);		        	
        				}
		        		$(container).find('.current').children('.wraparea').removeClass('ui-sortable-hover');
		        		$(container).find('.current').removeClass('current');
		        	}
		        	var id=$(ui.item).attr('id');
		        	callback(id);			
				},
		        update: function(event, ui) {
					if(startposition!=-1){
						var delta=(ui.item.prevAll().length + 1)-startposition;
						id=$(ui.item).attr('id');
					}
		        },
		        sort:function(event,ui){

		        }	
			});
		},
		getUniqueIdByRandom:function(prefix,suffix){// get a unique id for client and no repeat in current instance
			if(!prefix) prefix='';
			if(!suffix) suffix='';
			var id=_.uniqueId(prefix);
			id=id+(new Date()).getTime();
			id=id+suffix;
			return id;
		},
		get_tree:function(target,wrap,child,attributes){
			var returned=[];
			if(wrap) $(target).children(wrap).children(child).each(function(){
				var dict={};
				dict.id=$(this).attr(attributes);
				dict.children=global.get_tree($(this),wrap,child,attributes);
				returned.push(dict);
			})
			return returned;
		},
		changeTab:function(tabname){
			if(tabname=='info_attributes'||tabname=='info_page'){
				interaction.changeTab('info_main');
			}
			$('a[data-toggle="tab"][href="#'+tabname+'"]').trigger('click');
		},
		confirmDelete:function(callback){
			var confirmT=require('text!global/templates/confirm.js');
			$('#confirmModal').html(_.template(confirmT,{msg:"确认删除？"}));
			interaction.modal.show('#confirmModal');
			$('#confirmModal').find('.btn.btn-confirm')
			.focus()
			.on('click',function(){
				interaction.modal.hide('#confirmModal');
				callback();
			});
		},
		div_find:function(id){
			return $('div.element[id="'+id+'"]');
		},
		preload:function(imgurl){
			
		},
		EaseTypes:{
			0:"Linear.easeNone",
			// 1:"Power0.easeIn",
			// 2:"Power0.easeInOut",
			// 3:"Power0.easeOut",
			// 4:"Power1.easeIn",
			// 5:"Power1.easeInOut",
			// 6:"Power1.easeOut",
			// 7:"Power2.easeIn",
			// 8:"Power2.easeInOut",
			// 9:"Power2.easeOut",
			// 10:"Power3.easeIn",
			// 11:"Power3.easeInOut",
			// 12:"Power3.easeOut",
			// 13:"Power4.easeIn",
			// 14:"Power4.easeInOut",
			// 15:"Power4.easeOut",
			// 16:"Quad.easeIn",
			// 17:"Quad.easeInOut",
			// 18:"Quad.easeOut",
			// 19:"Cubic.easeIn",
			 20:"Cubic.easeInOut",
			// 21:"Cubic.easeOut",
			// 22:"Quart.easeIn",
			// 23:"Quart.easeInOut",
			// 24:"Quart.easeOut",
			// 25:"Quint.easeIn",
			// 26:"Quint.easeInOut",
			// 27:"Quint.easeOut",
			// 28:"Strong.easeIn",
			// 29:"Strong.easeInOut",
			// 30:"Strong.easeOut",
			// 31:"Back.easeIn",
			// 32:"Back.easeInOut",
			// 33:"Back.easeOut",
			// 34:"Bounce.easeIn",
			// 35:"Bounce.easeInOut",
			// 36:"Bounce.easeOut",
			// 37:"Circ.easeIn",
			// 38:"Circ.easeInOut",
			// 39:"Circ.easeOut",
			// 40:"Elastic.easeIn",
			// 41:"Elastic.easeInOut",
			// 42:"Elastic.easeOut",
			// 43:"Expo.easeIn",
			// 44:"Expo.easeInOut",
			// 45:"Expo.easeOut",
			// 46:"Sine.easeIn",
			// 47:"Sine.easeInOut",
			// 48:"Sine.easeOut",
			// 49:"SlowMo.ease",		
		},
		StartTypes:{
			0:'点击后开始',
			1:'上一个之后开始',
			2:'和上一个一起开始',
			//3:'WaitingAction',
		},
		RepeatTypes:{
			0:'不重复',
			'-1':'一直播放到该页结束',
			'-2':'播放到下一次点击',
		},
		AxialTypes:{
			0:'Z轴',
			1:'X轴',
			2:'Y轴',
		},
		DirectionTypes:{
			0:'top',
			1:'right',
			2:'bottom',
			3:'left',		
		},
		MediaAnimationTypes:{
			501: '播放',
			502:  '暂停',
			503: '结束',
		},
		AnimationTypes:{
			101: '飞入',
			102: '放大出现',
			103: '渐现',
			201: '飞出',
			202: '缩小出现',
			203: '渐隐',
			301: '直线运动',
			302: '曲线运动',
		    401: '放大缩小',
			402: '透明',
			403: '旋转',
		},
		ActionTypes:{
			0: 'onClick',
			// 2: 'onPressUp',
			// 3: 'onNormalClick',
			// 4: 'onActiveClick'
		},
		ButtonActionTypes:{
		    1: 'onNomalClick',
		    2: 'onActiveClick'		
		},
		ActionExecTypes:{
			0:'Play animations',
			1:'show elements',
			2:'hide elements',
			5:'Go to page'
		},
		getActionTypeName:function(type){
			return interaction.ActionTypes[type]||interaction.ButtonActionTypes[type];
		},
		getAnimationTypeName:function(type){
			switch(type){
				case 100: return '出现动画';
				case 101: return '飞入';
				case 102: return '放大出现';
				case 103: return '渐现';
				case 200: return '消失动画';
				case 201: return '飞出';
				case 202: return  '缩小消失';
				case 203: return  '渐隐';
				case 300: return  '运动路径';
				case 301: return  '直线运动';
				case 302: return  '曲线运动';
				case 400: return  '强调动画';
				case 401: return  '放大缩小';
				case 402: return  '透明';
				case 403: return  '旋转';
				case 500: return  '媒体动画';
				case 501: return  '播放';
				case 502: return  '暂停';
				case 503: return  '结束';
			}
		},
		message:function(type,msg,interval){
			$('body').append('<div class="msg"></div>');
			if(!interval)	interval=3000;
			$('.msg').html(_.template(MessageTemplate,{"type":type,"msg":msg}));
			$('.msg').fadeIn();
			setTimeout(function(){
				$('.msg').fadeOut('slow');
				$('.msg').remove();
			}, interval);
		},
		pagesort:function(){
			var cancelsort=false;
			var enablecopy=false;
			$(document).on('keydown',function(event,ui){
				console.log(event.keyCode);
				if(event.keyCode==18){
					enablecopy=true;
				}
			})
			$('.thumbs > ul').sortable({
				item:'li.pageitem',
				containment:'parent',
				opacity:'0.5',
				start:function(event,ui){
					$(document).on('keyup',function(event,ui){
						console.log(event.keyCode);
						if(event.keyCode==27){
							cancelsort=true;
							$('.thumbs > ul').sortable('cancel');
						}
						else if(event.keyCode==18){
							enablecopy=false;
						}
					})				
				},
				stop:function(event,ui){
					$(document).off('keyup');
				},
				update: function( event, ui ) {
					if($(ui.item).nextAll().hasClass('top')||cancelsort){
						$('.thumbs > ul').sortable('cancel');
						cancelsort=false;
						return;
					}
					if($(ui.item).prevAll().length==0) var target_position=Number($(ui.item).next().attr('data-position'))-1;
					else var target_position=$(ui.item).prev().attr('data-position');
					target_position = parseInt(target_position);
					var id=$(ui.item).attr('id');
					var model=iPagelist.get(id);
					var contexturl=context_url+model.id;
					var position=parseInt(model.toJSON().position);
					if(enablecopy==true){
						enablecopy=false;
						var url=context_url+'copypage.json?position='+((position>target_position)?target_position+1:target_position)+'&id='+id;
						$('.thumbs > ul').sortable('cancel');
						global.confirmModal('你确认要复制一页吗？',function(){
							jqwait_simple();
							global.json.load(url,function(data){
								if(data.code==200){
									var id=data.data.id;
									$.getJSON(context_url+'getimages', function(data) {
										if(data.code==200){
											iPagelist.reset([],{silent:true});
											var thumbitems=$('.doc-layout-left .thumbs').children('ul').children('li').detach();
											iPagelist.add(data.data.results);
											thumbitems.each(function(i){
												$('.doc-layout-left .thumbs').children('ul').children('li[id="'+$(this).attr('id')+'"]').append($(this).children('.interaction_thumbitem'));
											})
											iPagelist.get(id).iview.focus();
											jqwait_simple_close();
										}
									});	
									global.message('success',data.msg);						
								}
								else{
									jqwait_simple_close();
									global.message('error',data.msg);
									$('.thumbs > ul').sortable('cancel');
								}
							})
						})
					}
					else{
						jqwait_simple();
						var url=contexturl+'/movetoposition?position='+((position>target_position)?target_position+1:target_position);
						global.json.load(url,function(data){
							if(data.code==200){
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
											iPagelist.get(interaction.currentpage.id).iview.focus();
										}
										jqwait_simple_close();
									}
								});	
								global.message('success',data.msg);						
							}
							else{
								jqwait_simple_close();
								global.message('error',data.msg);
								$('.thumbs > ul').sortable('cancel');
							}
						})					
					}
					console.log(url);
				}
			})
		},
		guid:function(){
			function s4() {
			  return Math.floor((1 + Math.random()) * 0x10000)
			             .toString(16)
			             .substring(1);
			};
			return s4() + s4() + s4() + s4() + 
			         s4() +  s4() + s4() + s4();
			         
		}
	};
	func.action={};
	func.event=require('interaction/ui/event');
	func.animation=require('interaction/ui/animation');
	func.resources=require('interaction/ui/resources');
	func.templatepage=require('interaction/ui/templatepage');
	func.floatmenu=require('interaction/ui/floatmenu');
	func.util=require('interaction/ui/util');
	func.lib=require('interaction/ui/lib');
	func.step=require('interaction/ui/step');
	return func;
})
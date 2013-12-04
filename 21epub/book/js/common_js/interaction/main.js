(function(win){
	win.interaction={
		modal:{
			create:function(modalname,type,options,data){
				if(!data) data='';
				if(!type)	type="large-modal";
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
			$('a[data-toggle="tab"][href="#'+tabname+'"]').trigger('click');
		},
		confirmDelete:function(callback){
			$('#confirmModal').html(interaction.template.confirm({msg:"确认删除？"}));
			interaction.modal.show('#confirmModal');
			$('#confirmModal').find('.btn.btn-confirm').on('click',function(){
				interaction.modal.hide('#confirmModal');
				callback();
			});
		},
		preload:function(imgurl){
			
		},
		EaseTypes:{
			0:"Linear.easeNone",
			1:"Power0.easeIn",
			2:"Power0.easeInOut",
			3:"Power0.easeOut",
			4:"Power1.easeIn",
			5:"Power1.easeInOut",
			6:"Power1.easeOut",
			7:"Power2.easeIn",
			8:"Power2.easeInOut",
			9:"Power2.easeOut",
			10:"Power3.easeIn",
			11:"Power3.easeInOut",
			12:"Power3.easeOut",
			13:"Power4.easeIn",
			14:"Power4.easeInOut",
			15:"Power4.easeOut",
			16:"Quad.easeIn",
			17:"Quad.easeInOut",
			18:"Quad.easeOut",
			19:"Cubic.easeIn",
			20:"Cubic.easeInOut",
			21:"Cubic.easeOut",
			22:"Quart.easeIn",
			23:"Quart.easeInOut",
			24:"Quart.easeOut",
			25:"Quint.easeIn",
			26:"Quint.easeInOut",
			27:"Quint.easeOut",
			28:"Strong.easeIn",
			29:"Strong.easeInOut",
			30:"Strong.easeOut",
			31:"Back.easeIn",
			32:"Back.easeInOut",
			33:"Back.easeOut",
			34:"Bounce.easeIn",
			35:"Bounce.easeInOut",
			36:"Bounce.easeOut",
			37:"Circ.easeIn",
			38:"Circ.easeInOut",
			39:"Circ.easeOut",
			40:"Elastic.easeIn",
			41:"Elastic.easeInOut",
			42:"Elastic.easeOut",
			43:"Expo.easeIn",
			44:"Expo.easeInOut",
			45:"Expo.easeOut",
			46:"Sine.easeIn",
			47:"Sine.easeInOut",
			48:"Sine.easeOut",
			49:"SlowMo.ease",		
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
			102: '放大',
			103: '渐现',
			201: '飞出',
			202: '缩小',
			203: '渐隐',
			301: '直线运动',
			302: '曲线运动',
		    401: '放大缩小',
			402: '透明',
			403: '旋转',
		},
		getAnimationTypeName:function(type){
			switch(type){
				case 100: return '出现动画';
				case 101: return '飞入';
				case 102: return '放大';
				case 103: return '渐现';
				case 200: return '消失动画';
				case 201: return '飞出';
				case 202: return  '缩小';
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
	};
	interaction.event={
		init:function(){
			this.insert();
		},
		insert:function(){
			set_click_event('a.material_list_insert',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var Detail=interaction.current.get('iDetail');
				var dict={};
				dict[interaction.current.iview.resourcesattr]=Detail[interaction.current.iview.resourcesattr];
				if(interaction.current.iview.resourcestype=="single"){
					dict[interaction.current.iview.resourcesattr]=[];
					//if(ids.length==0) dict[interaction.current.iview.resourcesattr]=null;
					//else{
						var JSON=material_list.model.icollection.get(id).toJSON();
						JSON.id=interaction.getUniqueIdByRandom('Resources_');
						JSON.elementid=interaction.current.id;
						JSON.resourceattr=interaction.current.iview.resourcesattr;
						dict[interaction.current.iview.resourcesattr].push(JSON);
					//}
				}
				else{
					if(!dict[interaction.current.iview.resourcesattr]) dict[interaction.current.iview.resourcesattr]=[];
					var JSON=material_list.model.icollection.get(id).toJSON();
					JSON.id=interaction.getUniqueIdByRandom('Resources_');
					JSON.elementid=interaction.current.id;
					JSON.resourceattr=interaction.current.iview.resourcesattr;
					dict[interaction.current.iview.resourcesattr].push(JSON);						
				}
				interaction.current.iview.setdetail(dict);
				interaction.current.iview.updateresources();
				return false;
			})
			set_click_event('button.action-insert',function(){
				var ids=interaction.get_array($('input[name=material_list]:checked'),'value');
				var Detail=interaction.current.get('iDetail');
				var dict={};
				dict[interaction.current.iview.resourcesattr]=Detail[interaction.current.iview.resourcesattr];
				if(interaction.current.iview.resourcestype=="single"){
					dict[interaction.current.iview.resourcesattr]=[];
					//if(ids.length==0) dict[interaction.current.iview.resourcesattr]=null;
					//else{
						var JSON=material_list.model.icollection.get(ids[0]).toJSON();
						JSON.id=interaction.getUniqueIdByRandom('Resources_');
						JSON.elementid=interaction.current.id;
						JSON.resourceattr=interaction.current.iview.resourcesattr;
						dict[interaction.current.iview.resourcesattr].push(JSON);
					//}
				}
				else{
					if(!dict[interaction.current.iview.resourcesattr]) dict[interaction.current.iview.resourcesattr]=[];
					_.each(ids,function(id){
						var JSON=material_list.model.icollection.get(id).toJSON();
						JSON.id=interaction.getUniqueIdByRandom('Resources_');
						JSON.elementid=interaction.current.id;
						JSON.resourceattr=interaction.current.iview.resourcesattr;
						dict[interaction.current.iview.resourcesattr].push(JSON);			
					})				
				}
				interaction.current.iview.setdetail(dict);
				interaction.current.iview.updateresources();
				return false;
			})
		}
	};
	interaction.animation={
		set:function(animationid,overlayid,iType){
			switch(iType){
				case 301:
				case 302: interaction.animation.path.init(animationid,overlayid,iType);break;
			}
		},
		save:function(animationid,overlayid,iType){
			var overlaymodel=interaction.elementlist.get(overlayid);
			var animationmodel=interaction.iAnimationGroupList.get(animationid);
			interaction.animation.setDetail(animationid,overlayid,iType);
			overlaymodel.iview.updateanimation();
			overlaymodel.iview.updateanimationgroup('update',animationid);
			interaction.animation.close(animationid,overlayid,iType);
		},
		close:function(animationid,overlayid,iType){
			switch(iType){
				case 301:
				case 302: interaction.animation.path.close(animationid,overlayid,iType);break;
			}			
		},
		setDetail:function(animationid,overlayid,iType){
			switch(iType){
				case 301:
				case 302: return interaction.animation.path.setDetail(animationid,overlayid,iType);
				default: return ;
			}			
		},
		path:{
			init:function(animationid,overlayid,iType){
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationGroupList.get(animationid);
				overlaymodel.iview.path = new paper.Path();
				overlaymodel.iview.path.strokeColor = 'transparent';
        		overlaymodel.iview.path.strokeWidth=1;
        		overlaymodel.iview.path.selected=true;
        		var pathdata=animationmodel.toJSON().iDetail.path;
        		if(pathdata){
        			_.each(pathdata,function(i){
        				overlaymodel.iview.path.add(i);
        				if(interaction.animation.current) interaction.animation.current.iview.$el.find('fieldset.animationitem').children('ul').append(interaction.template.PathItem(i));
        			})
        		}
        		interaction.animation.path.startdraw(animationid,overlayid,iType);
			},
			startdraw:function(animationid,overlayid,iType){
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationGroupList.get(animationid);
				var dict={};
				dict.path=animationmodel.toJSON().iDetail.path;
				if(!dict.path) dict.path=[];
				$('canvas#interaction').removeClass('hide');
				$(document).on('mousemove','canvas#interaction',function(event){
					var containeroffset=$(this).parent().offset();
					var x=event.pageX-containeroffset.left;
					var y=event.pageY-containeroffset.top;
					$('.interaction-area .tooltip.prompt .tooltip-inner').html('点击设定路径点');
					$('.interaction-area .tooltip.prompt').css('left',x-35);
					$('.interaction-area .tooltip.prompt').css('top',y-40);
				    $('.interaction-area .tooltip.prompt').removeClass('hide');
					//console.info({x:containeroffset.left,y:containeroffset.top});
				})
				$(document).on('mouseout','canvas#interaction',function(event){
					var containeroffset=$(this).parent().offset();
					var x=event.pageX-containeroffset.left;
					var y=event.pageY-containeroffset.top;
				    $('.interaction-area .tooltip.prompt').addClass('hide');
					//console.info({x:containeroffset.left,y:containeroffset.top});
				})
				$(document).on('click','canvas#interaction',function(event){
					var containeroffset=$(this).parent().offset();
					var x=event.pageX-containeroffset.left;
					var y=event.pageY-containeroffset.top;
					drawstart=true;
					var JSON={};
					JSON.pos={point:{x:x,y:y}};
					interaction.animation.path.addPoint(JSON.pos,animationid,overlayid,iType);
					interaction.animation.current.iview.$el.find('fieldset.animationitem').children('ul').append(interaction.template.PathItem(JSON.pos));
				})					
			},
			addPoint:function(point,animationid,overlayid,iType){
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationGroupList.get(animationid);
				var detail=animationmodel.iview.getdetail();
				if(!detail.path) detail.path=[];
				overlaymodel.iview.path.add(point);
				if(iType==302) overlaymodel.iview.path.smooth();
			},
			setDetail:function(animationid,overlayid,iType){
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationGroupList.get(animationid);
				var overlayanimationmodel=interaction.iAnimationlist.get(animationid);
				var detail=animationmodel.iview.getdetail();
				detail.path=_.map(overlaymodel.iview.path.segments,function(i){
					return eval("(" + i.toString() + ")");
				})		
				animationmodel.set('iDetail',detail);	
				if(overlayanimationmodel) overlayanimationmodel.set('iDetail',detail);	
			},
			close:function(animationid,overlayid,iType){
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationGroupList.get(animationid);
				if(overlaymodel.iview.path) overlaymodel.iview.path.remove();
				$('canvas#interaction').addClass('hide');
				$('.interaction-area .tooltip.prompt').addClass('hide');
				$(document).off('mousemove','canvas#interaction');
				$(document).off('mouseout','canvas#interaction');
				$(document).off('click','canvas#interaction');				
			}
		},
	}
	interaction.resources={
		load:function(){
			
		},
		open:function(iType){
			var resource_type;
			switch(iType){
				case 'Audio': resource_type="interaction.audio";break;
				case 'Video': resource_type="interaction.video";break;
				default: resource_type="interaction.image";break;
			}
			material_list.list.options.menu.callback=function(){
						$(material_list.list.options.list_el).find('select[name="portal_type"]').attr('disabled',true)
							.val(resource_type)
							.trigger('change');
			}
			$('#material_list .modal-body').empty();
			material_list.list.render_list();
			material_list.model.icollection.reset();
			category.model.icollection.reset();
			category.categories('material',function(data){
				if(data.code==200){
					var d=data.data;
					category.model.set(d);
					global.model.model2tree(category.model,"results",'children');	
					material_list.list.render_left();
				}
			});
			material.materialslistforinsert(function(data){
				if(data.code==200){
					var d=data.data;
					material_list.model.set(d);
					global.model.model2tree(material_list.model,"results");
					material_list.list.render_right();
					material_list.list.render_page();
					material_list.list.render_menu();							
				}		
			});
			global.modal.show('#material_list');
			return false;
		}
	}
	win.interaction.model={};
	win.interaction.collection={};
	win.interaction.view={};
	win.interaction.current=null;
	win.interaction.elementfocus=win.elementfocus=false;
	win.interaction.iPageDirection=win.iPageDirection='landscape';
})(window);

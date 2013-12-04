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
		save:function(model,attributes,callback){
			if(!attributes) attributes={};
			model.save(
				attributes,
				{
					wait:true,
					success: function(m,response){
						$('.action-save').button('reset');
						returned=eval(response);
						callback(response);
					},
					error:function(){
						$('.action-save').button('reset');
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
		ActionTypes:{
			0: 'onClick',
		},
		ActionExecTypes:{
			0:'Play animations',
			1:'show elements',
			2:'hide elements'
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
			//overlaymodel.iview.updateanimation();
			//overlaymodel.iview.updateanimationgroup('update',animationid);
			interaction.animation.close(animationid,overlayid,iType);
		},
		preview:function(){
			$('.interaction-view').jswait();
			$('.interaction-view').children('.iView').remove();
			$('#animation_preview').children('.modal-body').attr('id',interaction.currentpage.id);
			interaction_view.ipagelist.reset();
			var newpage=new interaction_view.model.Page({id:interaction.currentpage.id});
			interaction.animation.stop(interaction.currentpage.id);
			interaction.modal.show('#animation_preview');
			$('#preloader').empty();
			newpage.iview.overlays=interaction.elementlist.toJSON();
			newpage.iview.animations=interaction.iAnimationGroupList.toJSON();
			newpage.iview.actions=interaction.iActionList.toJSON();
			newpage.iview.afterload();
		},
		stop:function(pageid){
			var currentpage=interaction_view.ipagelist.get(pageid);
			if(currentpage.iAnimationlist.timeline){
				currentpage.iAnimationlist.timeline.pause();
			}
			currentpage.iViewlist.each(function(model){
				if(model.media){
					model.media.pause();
					model.media=null;
				} 
			})			
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
			prompt:function(status){
				switch(status){
					case 0: return '双击进入画线模式';
					case 1: return 'ESC退出画线模式';					
				}
			},
			init:function(animationid,overlayid,iType){
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationGroupList.get(animationid);
				overlaymodel.iview.path = new paper.Path();
				overlaymodel.iview.path.strokeColor = 'black';
        		overlaymodel.iview.path.strokeWidth=2;
        		overlaymodel.iview.path.selected=false;
        		var pathdata=animationmodel.toJSON().iDetail.path;
        		//console.info(pathdata);
        		if(pathdata){
        			_.each(pathdata,function(i){
        				overlaymodel.iview.path.add(i);
        				//if(interaction.animation.current) interaction.animation.current.iview.$el.find('fieldset.animationitem').children('ul').append(interaction.template.PathItem(i));
        			})
        		}
        		interaction.animation.path.setmirror(overlaymodel);
        		interaction.animation.path.setevent(overlaymodel,iType);
        		//interaction.animation.path.startdraw(animationid,overlayid,iType);
			},
			setmirror:function(overlaymodel){
				var width=overlaymodel.iview.$el.width();
				var height=overlaymodel.iview.$el.height();
				var point=new paper.Point(0,0);
				var size=(width,height);
				//var path = new paper.Path();
				overlaymodel.mirror =new paper.Path();
				//overlaymodel.mirror = new path.Rectangle(rectangle);
				overlaymodel.mirror.strokeColor = 'blue';
				overlaymodel.mirror.strokeWidth=1;
				overlaymodel.mirror.visible=false;
				overlaymodel.mirror.add(new paper.Point(0,0));
				overlaymodel.mirror.add(new paper.Point(width,0));
				overlaymodel.mirror.add(new paper.Point(width,height));
				overlaymodel.mirror.add(new paper.Point(0,height));
				overlaymodel.mirror.closePath();
			},
			setevent:function(overlaymodel,iType){
				overlaymodel.tempPoint=null;
				var path=overlaymodel.iview.path;
				var segment=null;
				var hitOptions = {
				    segments: true,
				    stroke: true,
				    fill: true,
				    tolerance: 5
				};
				interaction.animation.path.status=0;
				var paperTool=interaction.animation.path.paperTool=new paper.Tool();
				$('canvas#interaction').removeClass('hide');
				$(document).on('dblclick','canvas#interaction',function(event){
					if(interaction.animation.path.status==0) interaction.animation.path.status=1;
					//else interaction.animation.path.status=0;
					return false;
					//interaction.animation.path.startdraw(animationid,overlayid,iType);
				})
				paperTool.onMouseDrag=function(event){
					    if (segment) {
        					segment.point = event.point;
        					overlaymodel.mirror.position=event.point;
        					overlaymodel.mirror.visible=true;
        					if(iType==302) path.smooth();
   						 }
					//console.info(event.point);
				}
				paperTool.onMouseDown=function(event){
					if(interaction.animation.path.status==0){
						segment=null;
						var hitResult = path.hitTest(event.point,hitOptions);
					    if (event.modifiers.shift) {
	   						 if (hitResult&&hitResult.type == 'segment') {
	        					hitResult.segment.remove();
	   						 };
	    					return;
						}
					    if (hitResult) {
					        if (hitResult.type == 'segment') {
					            segment = hitResult.segment;
					        } 
					    }
						//console.info(event.point);						
					}
					else{

					}
				}
				paperTool.onMouseUp=function(event){
					if(interaction.animation.path.status==1) {
						if(!overlaymodel.tempPoint){
							path.add(event.point);
							if(iType==302) path.smooth();
						}
						overlaymodel.tempPoint=null;
					}
				}
				paperTool.onMouseMove=function(event){
					var point=event.point;
					$('.interaction-area .tooltip.prompt .tooltip-inner').html(interaction.animation.path.prompt(interaction.animation.path.status));
					$('.interaction-area .tooltip.prompt').css('left',point.x-75);
					$('.interaction-area .tooltip.prompt').css('top',point.y-70);
				    $('.interaction-area .tooltip.prompt').removeClass('hide');	
					if(interaction.animation.path.status==1) {
						if(!overlaymodel.tempPoint){
							path.add(event.point);
							if(iType==302) path.smooth();
							overlaymodel.tempPoint=path.lastSegment;
						}
						else{
							path.lastSegment.point=event.point;
							if(iType==302) path.smooth();
						}
				    	overlaymodel.mirror.position=event.point;
				    	overlaymodel.mirror.visible=true;
					}
					else{
					    var hitResult = path.hitTest(event.point, hitOptions);
					    path.selected = false;
					    if (hitResult && hitResult.item){
					    	hitResult.item.selected = true;	
					    	overlaymodel.mirror.position=event.point;
					    	overlaymodel.mirror.visible=true;
					    }
					    else{
					    	overlaymodel.mirror.visible=false;
					    } 
				    }  			
				}
				paperTool.onKeyUp=function(event) {
					console.log(event.key);
				    if(event.key == 'escape') {
				        interaction.animation.path.status=0;
				        if(overlaymodel.tempPoint) {
				        	path.lastSegment.remove();
				        	overlaymodel.tempPoint=null
				        }
				    }
				    if(event.key == 'x'||event.key=='X') {
						var point=interaction.animation.path.getLastPoint(overlaymodel,iType);
						if(point){
							if(path.segments.length==1){
								path.add(new paper.Point(0,0));
								overlaymodel.tempPoint=path.lastSegment;
								path.firstSegment.point=point;
							}
							else if(path.firstSegment) path.firstSegment.point=point;
							if(iType==302) path.smooth();
						}
				    }
				}			
			},
			getLastPoint:function(overlaymodel,iType){
				var returned=null;
				var iAnimations=interaction.iAnimationGroupList.toJSON();
				var pathanimations=_.filter(iAnimations,function(i){
					return (i.overlay_id==overlaymodel.id&&_.include([301,302],i.iType));
				})
				if(pathanimations.length<2){
					var common=overlaymodel.iview.getcommon();
					var point=new paper.Point(common.iStartx+common.iWidth/2,common.iStarty+common.iHeight/2);
					return point;
				}
				else{
					var path=pathanimations[pathanimations.length-2].iDetail.path;
					if(path.length>0){
						var point=new paper.Point(path[path.length-1].point);
						return point;
					}
					else return returned;
				}
			},
			setDetail:function(animationid,overlayid,iType){
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationGroupList.get(animationid);
				var overlayanimationmodel=interaction.iAnimationlist.get(animationid);
				if(overlaymodel.tempPoint) overlaymodel.iview.path.lastSegment.remove();
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
				if(overlaymodel.iview.path) {
					overlaymodel.iview.path.remove();
				}
				if(interaction.animation.path.paperTool) interaction.animation.path.paperTool.remove();
				$('canvas#interaction').addClass('hide');
				$('.interaction-area .tooltip.prompt').addClass('hide');
				$(document).off('mousemove','canvas#interaction');
				$(document).off('mouseout','canvas#interaction');
				$(document).off('click','canvas#interaction');				
			}
		},
	}
	interaction.action={
	}
	interaction.resources={
		load:function(){
			
		},
		openforchange:function(){
			material.change_list.options.menu.callback=function(){
						$(material_list.list.options.list_el).find('select[name="portal_type"]').attr('disabled',true)
							.val('interaction.image')
							.trigger('change');
			}
			$('#material_list button.action-insert').hide();
			$('#material_list .modal-body').empty();
			material.change_list.render_list();
			material_list.change_model.icollection.reset();
			category.model.icollection.reset();
			category.categories('material',function(data){
				if(data.code==200){
					var d=data.data;
					category.model.set(d);
					global.model.model2tree(category.model,"results",'children');	
					material.change_list.render_left();
				}
			});
			material.materialslistforinsert(function(data){
				if(data.code==200){
					var d=data.data;
					material_list.change_model.set(d);
					global.model.model2tree(material_list.change_model,"results");
					material.change_list.render_right();
					material.change_list.render_page();
					material.change_list.render_menu();						
				}		
			});
			global.modal.show('#material_list');		
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
			$('#material_list button.action-insert').show();
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
	interaction.pagesort=function(){
		var cancelsort=false;
		var enablecopy=false;
		$(document).on('keydown',function(event,ui){
			console.log(event.keyCode);
			if(event.keyCode==18){
				enablecopy=true;
			}
		})
		$('.thumbs ul').sortable({
			item:'li',
			containment:'parent',
			opacity:'0.5',
			start:function(event,ui){
				$(document).on('keyup',function(event,ui){
					console.log(event.keyCode);
					if(event.keyCode==27){
						cancelsort=true;
						$('.thumbs ul').sortable('cancel');
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
					$('.thumbs ul').sortable('cancel');
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
					$('.thumbs ul').sortable('cancel');
					global.confirmModal('你确认要复制一页吗？',function(){
						jqwait_simple();
						global.json.load(url,function(data){
							if(data.code==200){
								var id=data.data.id;
								$.getJSON(context_url+'getimages', function(data) {
									if(data.code==200){
										iPagelist.reset([],{silent:true});
										$('.doc-layout-left .thumbs').children('ul').empty();
										iPagelist.add(data.data.results);
										iPagelist.get(id).iview.focus();
										jqwait_simple_close();
									}
								});	
								global.message('success',data.msg);						
							}
							else{
								jqwait_simple_close();
								global.message('error',data.msg);
								$('.thumbs ul').sortable('cancel');
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
									$('.doc-layout-left .thumbs').children('ul').empty();
									iPagelist.add(data.data.results);
									if(interaction.currentpage)
										iPagelist.get(interaction.currentpage.id).iview.$el.addClass('ui-selected active');
									jqwait_simple_close();
								}
							});	
							global.message('success',data.msg);						
						}
						else{
							jqwait_simple_close();
							global.message('error',data.msg);
							$('.thumbs ul').sortable('cancel');
						}
					})					
				}
				console.log(url);
			}
		})
	}
})(window);
(function(interaction){
	interaction.template={
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
		Page:_.template(
			[
'				<li id="<%=id%>" data-position=<%=position%>>',
					'<a href="" class="img"><img src="<%=thumbnail||""%>"></a>',
'					<div class="sn"><%=position%></div>',
'				</li>',
			].join("")
		),
		element:_.template(
			[
'				<div class="element component <%=iType.toLowerCase()%>" id="<%=id%>" style="position: absolute; width: <%=iCommon[iPageDirection].iWidth%>px; height: <%=iCommon[iPageDirection].iHeight%>px; left: <%=iCommon[iPageDirection].iStartx%>px; top: <%=iCommon[iPageDirection].iStarty%>px;">',
'					<a class="action-active" title="" rel="tooltip" href="#" data-original-title="激活编辑">激活</a>',
'					<button title="" rel="tooltip" type="button" class="btn btn-small btn-primary action-done" data-original-title="完成编辑">',
'						<i class="icon-ok icon-white"></i>',
'					</button>',
//'					<button class="btn btn-small action-animation" title="" rel="tooltip" type="button" data-original-title="动画设定">',
//'						<i class="icon-film" style="width:16px; height:16px;"></i>',
//'					</button>',
'					<button class="btn btn-small action-cancel" title="" rel="tooltip" type="button" data-original-title="复原">',
'						<i class="icon--trash" style="background:url(../img/icon_undo.png) no-repeat 50% 50%; width:16px; height:16px;"></i>',
'					</button>',
'					<button data-target="#confirmModal" title="" rel="tooltip" type="button" class="btn btn-small action-del" data-original-title="移除">',
'						<i class="icon-trash"></i>',
'					</button>',
'					<div class="iContent" style="postion:absolute;width:100%;height:100%"></div>',
'				</div>',
			].join("")
		),
		richtext:_.template(
			[
'				<div class="element component <%=iType.toLowerCase()%>" id="<%=id%>" style="position: absolute; width: <%=iCommon[iPageDirection].iWidth%>px; height: <%=iCommon[iPageDirection].iHeight%>px; left: <%=iCommon[iPageDirection].iStartx%>px; top: <%=iCommon[iPageDirection].iStarty%>px;">',
'					<a class="action-active" title="" rel="tooltip" href="#" data-original-title="激活编辑">激活</a>',
'					<button title="" rel="tooltip" type="button" class="btn btn-small btn-primary action-done" data-original-title="完成编辑">',
'						<i class="icon-ok icon-white"></i>',
'					</button>',
'					<button data-target="#confirmModal" title="" rel="tooltip" type="button" class="btn btn-small action-del" data-original-title="移除">',
'						<i class="icon-trash"></i>',
'					</button>',
'					<button class="btn btn-small action-cancel" title="" rel="tooltip" type="button" data-original-title="复原">',
'						<i class="icon--trash" style="background:url(../img/icon_undo.png) no-repeat 50% 50%; width:16px; height:16px;"></i>',
'					</button>',
'					<div class="iText nanoscrollbar">',
'						<span id=<%="tEditor_"+id%>><%=iDetail.iText%></span>',
'					</div>',
'					<div class="iContent" style="postion:absolute;width:100%;height:100%"></div>',
'				</div>',
			].join("")
		),
		Dom:_.template(
			[
'				<li class="<%=iType%> Dom" id="<%=id%>">',
 '             	    <div class="wraparea">',
'						<h4><%=iDetail.title||iType%>(<img title="<%=iType%>" width="20px" src="img/type/material_<%=iType.toLowerCase()%>.png">)</h4>',
'						<div title="" rel="tooltip" class="btn-draged" data-original-title="上下拖拽"></div>',
  '            	    	<div class="action-0">',
   '            			<a title="" rel="tooltip" class="action-showhide active" href="#" style="right:60px;" data-original-title="是否可见">是否可见</a>',
    '           			<a style="right:30px;" title="" rel="tooltip" class="action-del" href="#" data-original-title="移除">移除</a>',
'    					</div>',
'    				</div>',
'				</li>',
			].join("")
		),
		Elementattr:_.template(
			[
'				<li class="db clear" id="<%=id%>">',
'					<span class="fl">',
'						<% var iItemlist=interaction.elementlist.get(elementid).iview.getdetail().iItemlist %>',
'						<input type="checkbox" value=<%=id%> name="iItemlist" data-attr="iDetail" <%=(_.include(iItemlist,id))&&"checked=checked"||""%>>',
'					</span>',
'					<span class="fl">',
'						<a class="dom_move" id="<%=id%>">',
'							<img class="vm" src="n/i_move.png">',
'						</a>								',
'					</span>',
'					<span class="fl dom_name"><%=iType%></span>',
// '					<span class="fr">',
// '						<a id="remove" class="remove">',
// '							<img src="n/i_removeelement.png" class="vm">',
// '						</a>',
// '					</span>',
// '					<span class="fr"><a class="dom_visibility" id="<%=id%>"><img class="vm" src="n/i_visibility.png"></a></span>',
// '					<ul style="margin-left:20px"></ul>',
'				</li>',
			].join("")
		),	
		tree:_.template(
		[
	  '  <li class="treeitem" data-type=<%=iType%> id=<%=id%>>',
 '	        <div class="wraparea">',
 '	        	<h4><%=iType%></h4>',
 '				<div class="hitarea"></div>',
 '	        	<div rel="tooltip" class="btn-draged" data-original-title="上下拖拽">',
 '	        	</div>',
 // '	        	<div class="action-pub <%=review_state%>">',
	 // '        		<a class="action-publish" href="#" data-original-title="">操作</a>',
	  // '       	</div>',
	   // '      	<div class="action">',
	    // '     		<ul>',
 // '	        			<li><a class="action-edit" href="<%if(type=="Column"){%><%=url%>/edit<%}%>">编辑</a></li>',
// ' 						<% if(type=="Column"||type=="Category"){ %>',
	 // '        			<li class="action-new"><a href="javascript:void(0)">+ 追加</a>',
	   // '      				<ul>',
	  // '       					<li><a href="#" class="action-addCategory">添加子分类</a></li>',
	   // '      					<li><a class="action-addLink" href="#">新建链接</a></li>',
	    // '     					<li><a class="action-lib" href="#">引入内容</a></li>',
	      // '   					<li><a class="action-category" href="#">引入分类</a></li>',
	         // '				</ul>',
	        	 // '		</li>',
// '	        	 		<% } %>',
	      // '  	 		<li><a href="#confirmModal" class="action-delete">删除</a></li>',
	        	 // '	</ul>',
	     // '    	</div>',
	   '      </div>',
'					<ul style="margin-left:20px"></ul>',
	 '   </li>',
		].join("")
		),	
		Animation:_.template(
			[
'			<fieldset id="<%=id%>" class="animation categories">',
'                <legend><%=id%></legend>',
'					<div class="action">',
'					<select name="iAnimationType" class="animationtype" style="width:150px">',
'						<%if(type=="object"){%>',
'						<%_.each(interaction.AnimationTypes,function(value,key){%>',
	'						<option value=<%=key%>><%=value%></option>',						
'						<%})%>',
'						<%}%>',
'						<%if(type=="media"){%>',
'						<%_.each(interaction.MediaAnimationTypes,function(value,key){%>',
	'						<option value=<%=key%>><%=value%></option>',						
'						<%})%>',
'						<%}%>',						
'						</select>',
'					<button class="btn btn-small btn-primary action-addanimation">Add</button>',
'					</div>',
// '					<button class="btn btn-small animation-play">play</button>',
// '					<button class="btn btn-small animation-switch">switch</button>',
 '                   <div class="action">',
  '                  	<a title="" rel="tooltip" class="action-ok" data-type="<%=type%>" href="#material" data-original-title="确定"></a>',
  '                  </div>',
'  					<ul></ul>',
  '            </fieldset>',
			].join("")
		),	
		Action:_.template(
			[
'			<fieldset id="<%=id%>" class="actions categories">',
'                <legend><%=id%></legend>',
'					<div class="action">',
'					<select name="iActionType" class="actiontype" style="width:150px">',
'						<%if(type=="object"){%>',
'						<%_.each(interaction.ActionTypes,function(value,key){%>',
	'						<option value=<%=key%>><%=value%></option>',						
'						<%})%>',
'						<%}%>',
'						<%if(type=="media"){%>',
'						<%_.each(interaction.MediaAnimationTypes,function(value,key){%>',
	'						<option value=<%=key%>><%=value%></option>',						
'						<%})%>',
'						<%}%>',						
'						</select>',
'					<button class="btn btn-small btn-primary action-addaction">Add</button>',
'					</div>',
'  					<ul></ul>',
  '            </fieldset>',
			].join("")
		),	
		AnimationItem:_.template(
			[
'				<li data-type="<%=iType%>" id="<%=id%>" class="animation-item">',
 '             	    <div class="wraparea">',
'						<h6><%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get("iType")%>(<%=interaction.getAnimationTypeName(iType)%>)</h6>',
'						<div title="" rel="tooltip" class="btn-draged" data-original-title="上下拖拽"></div>',
  '            	    	<div class="action-0">',
'  							<a class="btn btn-link animation-play" style="bottom:0;position:absolute;right:70px"><i class="icon-play"></i></a>',
'  							<a class="btn btn-link animation-edit" style="bottom:0;position:absolute;right:50px"><i class="icon-edit"></i></a>',
 //  '            			<a title="" rel="tooltip" class="action-showhide active" href="#" style="right:60px;" data-original-title="是否可见">是否可见</a>',
    '           			<a style="right:30px;" title="" rel="tooltip" class="action-del" href="#" data-original-title="移除">移除</a>',
'    					</div>',
'    				</div>',
'				</li>',
			].join("")
		),
		ActionItem:_.template(
			[
'				<li data-type="<%=iType%>" id="<%=id%>" class="action-item">',
 '             	    <div class="wraparea">',
'						<h6><%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get("iType")%>(<%=interaction.ActionTypes[iType]%>)</h6>',
'						<div title="" rel="tooltip" class="btn-draged" data-original-title="上下拖拽"></div>',
  '            	    	<div class="action-0">',
'  							<a class="btn btn-link action-play" style="bottom:0;position:absolute;right:70px"><i class="icon-play"></i></a>',
'  							<a class="btn btn-link action-edit" style="bottom:0;position:absolute;right:50px"><i class="icon-edit"></i></a>',
 //  '            			<a title="" rel="tooltip" class="action-showhide active" href="#" style="right:60px;" data-original-title="是否可见">是否可见</a>',
    '           			<a style="right:30px;" title="" rel="tooltip" class="action-del" href="#" data-original-title="移除">移除</a>',
'    					</div>',
'    				</div>',
'				</li>',
			].join("")
		),
		PathItem:_.template(
			[
'             <li class="item">',
 '             	    <div class="wraparea">',
'						(x:<%=parseInt(point.x*100)/100%>,y:<%=parseInt(point.y*100)/100%>)',
//'						<input name="duration" type="text" value="<%=duration%>" class="duration" style="width:10px;">秒', 
  '            	    	<div class="action-0">',
//    '           			<a style="right:30px;" title="" rel="tooltip" class="action-del" href="#" data-original-title="移除">移除</a>',
'    					</div>',
'    				</div>',
    '          </li>',
			].join("")
		),
		Resources:_.template(
			[
'			<fieldset id="<%=id%>" class="resources">',
'                <legend><%=id%></legend>',
 '                   <div class="action">',
  '                  	<a title="" rel="tooltip" class="action-file" data-type="<%=type%>" href="#material" data-original-title="上传">上传</a>',
  '                  </div>',
  '            </fieldset>',
			].join("")
		),	
		ResourcesItem:_.template(
			[
'             <div class="item" id="<%=id%>">',
'                  <figure> <%=preview%>',
'                      <figcaption><%=title%></figcaption>',
 '                 </figure>',
  '                <a title="" rel="tooltip" class="action-showhide active" href="javascript:void(0)" data-original-title="是否可见">是否可见</a>',
   '               <a title="" rel="tooltip" class="action-del" href="#confirmModal" data-original-title="移除">移除</a> ',
    '          </div>',
			].join("")
		),
		Editor:_.template(
			[
'			<% var iText=iElementlist.get(elementid).toJSON().iDetail.iText; %>',
'			<%=iText%>',
			].join("")
		),
		info:{
			baseinfo:_.template(
				[
'					<h3 class="baseinfo"><%=iType%></h3>',	
'					title: <input data-attr="iDetail" name="title" type="text" value="<%=iDetail.title%>"/>',
				].join("")			
			),
			infosave:_.template(
				[
'				<div class="resources"></div>',
'				<div class="animations_area"></div>',
'				<div class="actions_area"></div>',
'				<div class="action-save">',
'					<button class="btn btn-small" type="button">SAVE</button>',
'				</div>',
				].join("")
			),
			common:_.template(
				[
'				<fieldset class="Pos">',
'                    <legend>尺寸和位置</legend>',
 '                   <div class="item" style="height:70px;">',
  '                    <ul>',
   '                     <li>',
'                          <label>L：</label>',
 '                         <input class="inputquarter ui-state-default ui-corner-all" name="iHeight" type="text" data-attr="iCommon" value=<%=iCommon[iPageDirection].iHeight%>>',
 '                       </li>',
 '                       <li>',
 '                         <label>H：</label>',
 '                         <input class="inputquarter ui-state-default ui-corner-all" name="iWidth" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iWidth%>>',
 '                       </li>',
 '                       <li>',
 '                         <label>X：</label>',
 '                         <input class="inputquarter ui-state-default ui-corner-all" name="iStartx" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iStartx%>>',
 '                       </li>',
 '                       <li>',
 '                         <label>Y：</label>',
  '                        <input class="inputquarter ui-state-default ui-corner-all" name="iStarty" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iStarty%>>',
 '                       </li>',
 '                     </ul>',
 '                   </div>',
'						<div class="item" style="height:20px;clear:both;">',
'							<input data-attr="iDetail" data-type="boolean" name="iHidden" type="checkbox" value="true" <%=iDetail.iHidden&&"checked=true"%>>初始隐藏',
'						</div>',
  '                </fieldset>',
				].join("")	
			),
			commonxy:_.template(
				[
'				<fieldset class="Pos">',
'                    <legend>尺寸和位置</legend>',
 '                   <div class="item" style="height:70px;">',
  '                    <ul>',
   '                     <li class="hide">',
'                          <label>L：</label>',
 '                         <input class="inputquarter ui-state-default ui-corner-all" name="iHeight" type="text" data-attr="iCommon" value=<%=iCommon[iPageDirection].iHeight%>>',
 '                       </li>',
 '                       <li class="hide">',
 '                         <label>H：</label>',
 '                         <input class="inputquarter ui-state-default ui-corner-all" name="iWidth" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iWidth%>>',
 '                       </li>',
 '                       <li>',
 '                         <label>X：</label>',
 '                         <input class="inputquarter ui-state-default ui-corner-all" name="iStartx" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iStartx%>>',
 '                       </li>',
 '                       <li>',
 '                         <label>Y：</label>',
  '                        <input class="inputquarter ui-state-default ui-corner-all" name="iStarty" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iStarty%>>',
 '                       </li>',
 '                     </ul>',
 '                   </div>',
'						<div class="item" style="height:20px;clear:both;">',
'							<input data-attr="iDetail" data-type="boolean" name="iHidden" type="checkbox" value="true" <%=iDetail.iHidden&&"checked=true"%>>初始隐藏',
'						</div>',
  '                </fieldset>',
				].join("")	
			),
			resources:_.template(
				[
'					<div class="cls"></div>',
'					<hr class="full ui-widget-header">',
'					<div id="iUpload">',
'						<br>',
'						<a id="iImg" data-attr="iImg" data-type="string" class="resources_upload"><img src=<%=iDetail.iImg&&iDetail.iImg||"n/i_upload.png"%> width="48px" height="48px"></a>',
'					</div>',
				].join("")
			),
			resourceslist:_.template(
				[
'					<div class="cls"></div>',
'					<hr class="full ui-widget-header">',
'					<div id="iUpload">',
'						<br>',
'						<a id="iImglist" data-attr="iImglist" data-type="array" class="resources_upload"><img src=<%=iDetail.iImglist&&iDetail.iImglist[0]||"n/i_upload.png"%> width="48px" height="48px"></a>',
'					</div>',
				].join("")
			)
		},
		detail:{
			Image:_.template(
				[
'					<fieldset class="detail no-legend">',
'						<div class="item">',
'							<input data-attr="iDetail" data-type="boolean" name="iAdapt" type="checkbox" value="true" <%=iDetail.iAdapt&&"checked=true"%>>边框适应图片大小',
'						</div>',
'						<div class="item">',
'							<input data-attr="iDetail" data-type="boolean" name="iFullview" type="checkbox" value="true" <%=iDetail.iFullview&&"checked=true"%>>点击全屏显示',
'						</div>',
'					</fieldset>',
				].join("")	
			),
			VideoType:_.template(
				[
'				<fieldset class="typedetail no-legend" id="iVideotype">',
'					<label class="db">选择类型</label>',
'					<select data-attr="iDetail" name="iVideotype" class="db">',
'						<option <%=(iDetail.iVideotype=="mediafile")&&"selected"||""%> value="mediafile">视频文件</option>',
'						<option <%=(iDetail.iVideotype=="streammedia")&&"selected"||""%> value="streammedia">流媒体</option>',
'					</select>',
'				</fieldset>',
				].join("")
			),
			Video:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div class="info_set1" class="">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iAdapt" type="checkbox" value="true" <%=iDetail.iAdapt&&"checked=true"||""%>></span><span class="text1">边框适应视频比例</span>',
'					</div>',
'					<div class="info_set1">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iFullview" type="checkbox" value="true" <%=iDetail.iFullview&&"checked=true"||""%>></span><span class="text1">点击全屏显示</span>',
'					</div>',
'					<div class="info_set1">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iAutoplay" type="checkbox" value="true" <%=iDetail.iAutoplay&&"checked=true"||""%>></span><span class="text1">自动播放</span>',
'					</div>',
'					<div class="info_set1">',
'					<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iRepeat" type="checkbox" value="true" <%=iDetail.iRepeat&&"checked=true"||""%>></span><span class="text1">循环播放</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			Audio:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div class="info_set1">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iAutoplay" type="checkbox" value="true" <%=iDetail.iAutoplay&&"checked=true"||""%>></span><span class="text1">自动播放</span>',
'					</div>',
'					<div class="info_set1">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iRepeat" type="checkbox" value="true" <%=iDetail.iRepeat&&"checked=true"||""%>></span><span class="text1">循环播放</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			LinkType:_.template(
				[
'				<fieldset class="no-legend typedetail">',
'					<span class="quarter">选择类型</span>',
'					<span class="threequarter">',
'					<select name="iLinktype" data-attr="iDetail" class="threequarter ui-state-default ui-corner-all">',
'						<option <%=(iDetail.iLinktype=="hyperlink")&&"selected"||""%> value="hyperlink">超链接</option>',
'						<option <%=(iDetail.iLinktype=="gotopage")&&"selected"||""%> value="gotopage">go to Page</option>',
'						<option <%=(iDetail.iLinktype=="Cortona3D")&&"selected"||""%> value="Cortona3D">Cortona3D</option>',
'					</select>',
'					</span>',
'				</fieldset>',
				].join("")
			),
			Link:_.template(
				[
'				<%if(iDetail.iLinktype=="hyperlink"){%>',
'				<fieldset class="no-legend detail">',
'					<div class="full">',
'						<span>网址:</span>',
'						<span><input data-attr="iDetail" class="ui-state-default ui-corner-all" name="iUrl" type="text"  value=<%=iDetail.iUrl%>></span>',
'					</div>',
'					<div class="cls"></div>',
'					<div class="full">',
'						<span><input data-attr="iDetail" data-type="boolean" <%=(iDetail.iSafari)&&"checked=checked"||""%> name="iSafari" type="checkbox" value="true"></span>',
'						<span>在Safari中打开</span>',
'					</div>',
'				</fieldset>',
'				<% }%>',
'				<%if(iDetail.iLinktype=="gotopage"){%>',
'				<fieldset class="no-legend detail">',
'					<div class="full">',
'						<span><input data-attr="iDetail" name="iGoto" type="radio" value="page" <%=(iDetail.iGoto=="page")&&"checked=checked"||""%>>转到：</span>',
'						<span><input data-attr="iDetail" class="inputquarter ui-state-default ui-corner-all" name="iPage" type="text" value=<%=iDetail.iPage%>>页</span>',
'					</div>',
'					<div class="cls"></div>',
'					<span class="half"><input data-attr="iDetail" name="iGoto" type="radio" <%=(iDetail.iGoto=="prev")&&"checked=checked"||""%> value="prev">前一页</span>',
'					<span class="half"><input data-attr="iDetail" name="iGoto" type="radio" <%=(iDetail.iGoto=="next")&&"checked=checked"||""%> value="next">后一页</span>',
'				</fieldset>',
'				<% }%>',
'				<%if(iDetail.iLinktype=="Cortona3D"){%>',
'				<fieldset class="no-legend detail">',
'					<div id="iUpload" class="full">',
'						<span class="full">选择文件</span>',
'						<div class="cls"></div>',
'						<span class="quarter"><a id="iFile" data-attr="iFile" class="resources_upload"><img src="n/i_upload.png"></a></span>',
'					</div>',
'				</fieldset>',
'				<% }%>',
				].join("")
			),
			SlideType:_.template(
				[
'				<fieldset class="no-legend typedetail">',
'					<label class="quarter">选择类型</label>',
'					<span class="threequarter"><input data-attr="iDetail" type="radio" name="iSlidetype" value="横向" <%=(iDetail.iSlidetype=="横向")&&"checked=checked"||""%>>横向<input data-attr="iDetail" type="radio" name="iSlidetype" value="纵向" <%=(iDetail.iSlidetype=="纵向")&&"checked=checked"||""%>>纵向 </span>',
'				</fieldset>',
				].join("")
			),
			Slide:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div id="" class="full">',
'						<input data-attr="iDetail" <%=(iDetail.iAutoplay)&&"checked=checked"||""%> data-type="boolean" name="iAutoplay" type="checkbox" value="true">自动播放',
'					</div>',
'					<div id="" class="full">',
'						<span><input name="iRepeat" data-attr="iDetail" <%=(iDetail.iRepeat)&&"checked=checked"||""%> data-type="boolean" type="checkbox" data-attr="iDetail" value="true">循环</span><span> 间隔<input data-attr="iDetail" class="ui-state-default" type="text" name="iInterval" style="width:40px" value=<%=iDetail.iInterval%>>秒</span>',
'					</div>',
'					<div class="full">',
'						<span><input name="iFade" data-attr="iDetail" type="radio" value="Fade" <%=(iDetail.iFade=="Fade")&&"checked=checked"||""%>>Fade</span><span><input data-attr="iDetail" name="iFade" type="radio" value="Slip" <%=(iDetail.iFade=="Slip")&&"checked=checked"||""%>>Slip</span>',
'					</div>',
'					<hr class="full ui-widget-header">',
'					<div id="" class="full">',
'						<span><input name="iSlipable" data-attr="iDetail" data-type="boolean" type="checkbox" value="true" <%=(iDetail.iSlipable)&&"checked=checked"||""%>>可滑动</span><span><input data-attr="iDetail" data-type="boolean" name="iPagenumber" type="checkbox" value="true" <%=(iDetail.iPagenumber)&&"checked=checked"||""%>>显示页码</span>',
'					</div>',
'					<div class="full">',
'						<span><input name="iFullview" data-attr="iDetail" data-type="boolean" type="checkbox" value="true" <%=(iDetail.iFullview)&&"checked=checked"||""%>>全屏</span><span><input data-attr="iDetail" data-type="boolean" type="checkbox" name="iWholeswitch" value="true" <%=(iDetail.iWholeswitch)&&"checked=checked"||""%>>整幅切换</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			CycleImage:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div id="" class="full">',
'						<input data-attr="iDetail" <%=(iDetail.iAutoplay)&&"checked=checked"||""%> data-type="boolean" name="iAutoplay" type="checkbox" value="true">是否自动播放, 时间间隔<input data-attr="iDetail" class="ui-state-default" type="text" name="iInterval" style="width:40px" value=<%=iDetail.iInterval%>>秒',
'					</div>',
'				</fieldset>',
				].join("")
			),
			RichText:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div class="half">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iBackground" type="checkbox" value="true" <%=(iDetail.iBackground)&&"checked=checked"||""%>></span>',
'						<span>背景透明</span>',
'					</div>',
'					<div class="half">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iScrollable" type="checkbox" value="true" <%=(iDetail.iScrollable)&&"checked=checked"||""%>></span>',
'						<span>可滚动</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			ShowHide:_.template(
				[
'				<fieldset class="no-legend detail">',
'				<div class="full">',
'					<input type="checkbox" name="iStatus" data-attr="iDetail" data-type="boolean" value="true" class="ui-state-default" <%=(iDetail.iStatus)&&"checked=checked"||""%>>初始状态为隐藏',
'				</div>',
'				<div class="full elementlist"><ul>',
'				</ul></div>',
'				<div id="iUpload" class="full">',
'					<span class="quarter tc"><a id="iIconon" data-attr="iIconon" data-type="string" class="resources_upload"><img src=<%=iDetail.iIconon&&iDetail.iIconon||"n/i_upload.png"%>></a></span>',
'					<span class="quarter tc"><a id="iIconoff" data-attr="iIconoff" data-type="string" class="resources_upload"><img src=<%=iDetail.iIconoff&&iDetail.iIconoff||"n/i_upload.png"%>></a></span>',
'					<div class="cls"></div>',
'					<span class="quarter tc">On</span>',
'					<span class="quarter tc">Off</span>',
	'			</div>',
'				</fieldset>',
				].join("")
			),
			WebcontentType:_.template(
				[
'				<fieldset class="no-legend typedetail">',
'					<span class="quarter">选择类型</span>',
'					<span class="threequarter"><select data-attr="iDetail" name="iWebcontenttype" class="threequarter ui-state-default ui-corner-all">',
'						<option <%=(iDetail.iWebcontenttype=="local")&&"selected"||""%> value="local">Html本地文件包</option>',
'						<option <%=(iDetail.iWebcontenttype=="external")&&"selected"||""%> value="external">外部网页</option>',
'					</select>',
'					</span>',
'				</fieldset>',
				].join("")
			),
			Webcontent:_.template(
				[
'				<fieldset class="no-legend detail">',
'				<div class="full">',
'					<span>地址:</span>',
'					<span><input data-attr="iDetail" class="ui-state-default ui-corner-all" name="iUrl" type="text"  value=<%=iDetail.iUrl%>></span>',
'				</div>',
'				<div class="cls"></div>',
'				<hr class="full ui-widget-header">',
'				<%if(iDetail.iWebcontenttype=="local"){%>',
'				<div id="local" class="iWebcontenttype">',
'					<div id="iUpload" class="full">',
'						<span class="full">选择文件</span>',
'						<div class="cls"></div>',
'						<span class="quarter"><a id="iFile" data-attr="iFile" data-type="string" class="resources_upload"><img src="n/i_upload.png"></a></span>',
'					</div>',
'					<div class="cls"></div>',
'					<div class="half">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iBackground" type="checkbox" value="true" <%=(iDetail.iBackground)&&"checked=checked"||""%>></span>',
'						<span>背景透明</span>',
'					</div>',
'					<div class="half">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iScrollable" type="checkbox" value="true" <%=(iDetail.iScrollable)&&"checked=checked"||""%>></span>',
'						<span>可滚动</span>',
'					</div>',
'				</div>',
'				<% }%>',
'				<%if(iDetail.iWebcontenttype=="external"){%>',
'				<div id="external" class="iWebcontenttype">',
'					<div class="full">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iBackground" type="checkbox" value="true" <%=(iDetail.iBackground)&&"checked=checked"||""%>></span>',
'						<span>背景透明</span>',
'					</div>',
'				</div>',
'				<%}%>',
'				</fieldset>',
				].join("")
			),
			ElementsGroup:_.template(
				[
'				<fieldset class="no-legend detail">',
'				<div class="full elementlist categories"><ul>',
'				</ul></div>',
'				<div class="cls"></div>',
'				<hr class="full ui-widget-header">',
'               <div class="full">时间间隔（秒）<input data-attr="iDetail" class="ui-state-default" type="text" name="iInterval" style="width:40px" value=<%=iDetail.iInterval%>></div>',
'				</fieldset>',
				].join("")
			),
			AnimationGroup:_.template(
				[
'				<fieldset class="detail">',
'				<legend>Timeline</legend>',
'				<div class="full animations categories"><ul>',
'				</ul></div>',
'				<div class="cls"></div>',
'				</fieldset>',
				].join("")
			),
			ActionList:_.template(
				[
'				<fieldset class="detail">',
'				<legend>所有事件列表</legend>',
'				<div class="full actions categories"><ul>',
'				</ul></div>',
'				<div class="cls"></div>',
'				</fieldset>',
				].join("")
			),
		}
	};
})(interaction);
var iElementlist; //contain all the elements
var iCurrentModel;//current model point, which always point to the current model selected or focused
(function(interaction){
interaction.model.Base=Backbone.Model.extend({
	defaults:{
		iType:'iBasetype',//define type
		iLock:true,
		iVisibility:true,
		iCommon:{},
		iDetail:{},
		iOptions:{
			iParent:null,
			iParentModel:null,
			iDraggable:true,
			iResizable:true,
			template:null,
			iParentdiv:'.interaction-area',
			iAutoindex:false,
			iSync:true,
			iAutofocus:false,
			iKeyscontrol:true,
		},
		iParent:'',
		iParentModel:null,
		iDraggable:true,
		iResizable:true,
		template:null,
		iParentdiv:'.interaction-area',
		iAutoindex:false,
		iSync:true,
		iZindex:'-1',
		iAutofocus:false,
		iKeyscontrol:true,
		iUrl:null,
		callback:null,
		iBackground:'',
		iResources:null,
		iResourcesType:null,
		iResourcesProperties:null
	},
	options:{
		createwait:true
	},
	initialize: function(){
		this.options=this.get('iOptions');
		if(!this.id){//if isnew
			/* begin to create and save the new model */
			this.beforecreate();
			var model=this;
			if(!this.get('iAutoindex')){
				//if(this.options&&this.options.createwait) jqwait_simple();
				this.savemodel(function(returned){
					model.set('id',returned.ID.toString());//set the new model id
					model.setcollection();
					model.setmodel();
				});
			}
			else{
				this.set("id",this.get('iType')+"_"+this.cid);
				this.setcollection();
				this.setmodel();
			}
		}
		else {
			this.setmodel();
		}
	},
	beforecreate:function(){},
	savemodel:function(callback){
		this.save(
			{},
			{
				wait:true,
				success: function(model,response){
					returned=eval(response);
					if(returned.Status=="Success"){
						jqwait_simple_close();
						if(callback) callback(returned);
					}
					else{
						model_error({
							method:'create',
							status:returned.Status,
							msg:returned.Message,
							model:model
						})
					}
				},
				error: function(){ 
					model_error({
						method:'create',
						status:'ServerError',
						msg:'server error or server is not available now,please try again!',
						model:model
					})
				} 
			}
		);
	},
	setmodel:function(){
		if(!iElementlist.get(this.id)) iElementlist.add(this);
		this.setlist();
		this.setview();
		this.setsyncmodel();
	},
	setlist:function(){},
	setresourcesmodel:function(){ 
	},
	validate:function(attributes){
	//	console.info(attributes);
	},
	setsyncmodel:function(){},
	setcollection:function(){},
	setview:function(){	},
	url:function(){
		if(!this.get('iUrl')) this.url=this.collection.url?this.collection.url:context_url;
	}, //default set to root 
	sync: function(method, model, options) {
		if(method=='create'){
			options.url=this.get('iUrl')+'/overlaycreate.json';
		}
		if(method=='update'){
			options.url=this.get('iUrl')+'/overlayupdate.json?id='+model.id;
		}
		if(method=='delete'){
			options.url=this.get('iUrl')+'/overlaydelete.json?id='+model.id;
		}
		if(method=='read'){
			options.url=this.get('iUrl')+'/overlayget.json?id='+model.id;
		}
		Backbone.emulateHTTP = true ;
		Backbone.emulateJSON = true ;
		if(this.get('iSync')) Backbone.sync(method, model, options);
	}
})

/* end fo model */

/* define collections */
interaction.collection.Base =Backbone.Collection.extend({
	iSync:false,
	initialize:function(){
		this.setonadd();//this set the collection operations when a model add to it 
		this.setonremove();//this set the collection operations when a model remove form it 
	},
	setonadd:function(){
	},
	setonremove:function(){
	},
	url:'',
	sync: function(method, model, options) {
		if(this.iSync){
			if(method=='read'){
				options.url=context_url+this.url+'/overlayinit.json';
			}
			Backbone.emulateHTTP = true ;
			Backbone.emulateJSON = true ;
			Backbone.sync(method, model, options);
		}
	},
	parse:function(data){
	}
})
window.iElementCollection = interaction.collection.Base.extend({//contain all elements include root node

})
/* end of collections */

/* define view */
interaction.view.Base = Backbone.View.extend({
	initialize:function(options){
		//this.el=this.el='.element[id="'+this.model.id+'"]';
		//this.id=this.model.id;
		_.bindAll(this);
		/*model change control 
		  there are serveral cases , the model's attr change 
		  the div need to change 
		  the form need to change
		  sometimes ,these changes happens together ,but sometimes not 
		*/
		this.model.bind('destroy',this.destroy);
		this.model.bind('change',this.change);
		this.initstart();//this function use to start the model's collection to init fatch childs
	},
	bindresourcesupload:function(){
		var view=this;
		this.infoel.find('a.action-file').on('click',function(){//this live to the resources button handle
			var attr=$(this).parents('fieldset.resources').first().attr('id');
			view.resourcesattr=attr;
			view.resourcestype=$(this).attr('data-type');
			interaction.resources.open(view.model.get('iType'));
		})
	},
	bindinfo:function(){
		var view=this;
		var model=this.model;
		$('#info_attributes').find('input,select,textarea').unbind('change');
		$('#info_attributes').find('input,select,textarea').bind('change',function(){
			var data=interaction.serializeValue('#info_attributes');
			console.log(data);
			if(data.common) {
				view.setcommon(data.common);
				view.updateposition();
				view.updatebackground();
			}
			if(data.detail){
				view.setdetail(data.detail);
			}
			if($(this).is('select')) {
				//console.info($(this).is('select'));
				view.updateinfo();
			}
		})
	},
	bindsavebutton:function(){
		var view=this;
		this.infoel.find('.action-save button').bind('click',function(){
			view.confirm();
		})		
	},
	bindanimation:function(){
		var view=this;
		this.animationel.find('.action-addanimation').on('click',function(){
			var type=parseInt(view.animationel.find('select.animationtype').val());
			var AnimationItemModel=new interaction.model.AnimationGroupItem({iType:type,overlay_id:view.model.id,iDetail:_.clone(interaction.model.Animation.prototype.defaults.iDetail),iTiming:_.clone(interaction.model.Animation.prototype.defaults.iTiming)});
			view.updateanimationgroup('add',AnimationItemModel.id);
		})
	},
	bindaction:function(){
		var view=this;
		this.actionel.find('.action-addaction').on('click',function(){
			var type=parseInt(view.actionel.find('select.actiontype').val());
			var ActionItemModel=new interaction.model.Action({iType:type,overlay_id:view.model.id,iDetail:_.clone(interaction.model.Animation.prototype.defaults.iDetail)});
			interaction.iActionList.confirm();
			//view.updateanimationgroup('add',AnimationItemModel.id);
		})		
	},
	initstart:function(){//so this function always called with the view start 
		this.render();
	},
	events: {
	    "click a.action-active"  : "focus",
	    "click button.action-done":"confirm",
	    "click button.action-del":"removemodel",
	    "click button.action-cancel":"revert",
	    "mouseover":"mouseover",
	    "mouseout":"mouseout"
	},
	options:{
		aspectRatio:false
	},
	change:function(attributes){
		//console.info(attributes);
	},
	changeZindex:function(){
		this.$el.css('z-index',interaction.elementlist.indexOf(this.model));
	},
	render: function(){//this render always used for a newly create type to show to display and to focus 
		var JSON=this.model.toJSON();
		var dom=interaction.template.element(this.model.toJSON());
		//div_createaddDiv(this.model.id,this.model.get('iType'));
		var el=interaction.template.element(this.model.toJSON());
		//$('.interaction-area').append(this.make("div", {"class": "element "+JSON.iType}, interaction.template.element(this.model.toJSON())));
		$(this.model.get('iParentdiv')).append(el);
		this.setElement(interaction.div_find(this.model.id));
		this.updatebackground();
		this.infoel=$('#info_attributes').children('.setting-body');
    	//this.delegateEvents();
    	return this;
	},
	revert:function(){
		var detail=this.getdetail();
		var iResourcesProperties=this.model.get('iResourcesProperties');
		if(iResourcesProperties){
			if(iResourcesProperties[0].category=="image"){
				var resources=detail[iResourcesProperties[0].id];
				//console.info(resources);
				if(resources){
					if(_.isArray(resources)&&resources[0]){
						var common=this.getcommon();
						common.iWidth=resources[0].width;
						common.iHeight=resources[0].height;
						this.setcommon(common);
						this.updateposition();
					}
					//else interaction.iResourceslist.add(new interaction.model.Resources({elementid:model.id,picture:resources,resourcesattr:property.id}));
				}
			}
							
		}
	},
	renderCentrolPos:function(pos){
		var common=this.getcommon();
		this.$el.css('left',(pos.x-common.iWidth/2)+"px");
		this.$el.css('top',(pos.y-common.iHeight/2)+"px");
		//document.getElementById(this.model.id).style.left=pos.x-;
	},
	renderinfo:function(){
		this.infoel.empty();
		this.infoel.append(interaction.template.info.baseinfo(this.model.toJSON()));
		if(this.model.get('iCommon'))  this.infoel.append(interaction.template.info.common(this.model.toJSON()));
		this.infoel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
		//this.infoel.append(interaction.template.info.resources(this.model.toJSON()));
		if(this.model.get('iElementattr')) this.updateelementattr();
		this.infoel.append(interaction.template.info.infosave(this.model.toJSON()));
		this.bindinfo();		
	},
	removemodel:function(){//create a jqwait to handle remove , not mutiple remove allowed ,can be customed 
		var view=this;
		interaction.confirmDelete(function(){
			jqwait_simple({modal:false});
			view.model.destroy({
					wait:true,
					success: function(model,response){
						returned=eval(response);
						jqwait_simple_close();
						if(returned.Status=="Success"||returned.code==200){
							jqwait_simple_close();
							model.iview.animation_remove(model);
							model.iview.action_remove(model);
							model.iview.afterremove(model,response);
						}
						else{
							global.message('error','出错');
						}
					},
					error: function(){ 
						jqwait_simple_close();
						global.message('error','出错');
					} 
			});
		})
	},
	animation_remove:function(model){
		_.each(interaction.iAnimationGroupList.where({overlay_id:model.id}),function(i){
			i.iview.$el.remove();
			i.destroy();
		})	
		//interaction.iAnimationGroupList.confirm();
	},
	action_remove:function(model){
		_.each(interaction.iActionList.where({overlay_id:model.id}),function(i){
			i.iview.$el.remove();
			i.destroy();
		})	
		//interaction.iAnimationGroupList.confirm();
	},
	afterremove:function(model,data){
		model.iview.$el.remove();
		var view=this;
		if(model.dommodel) model.dommodel.iview.$el.remove();
		if(iCurrentModel&&this.model.id==iCurrentModel.id) {
			$('div#info_attributes').children('.setting-body').empty();
			$('div#info_resources').children('ul').empty();
			this.infoel.empty();
			elementfocus=false;
			this.unsetkeyscontrol();
			interaction.changeTab('info_dom');
		}
	},
	destroy:function(model,data){},
	updateposition:function(){
		var common=this.getcommon();
		if(common){
			this.$el.css('left',common.iStartx+'px');
			this.$el.css('top',common.iStarty+'px');
			this.$el.width(common.iWidth);
			this.$el.height(common.iHeight);			
		}	
	},
	updateel:function(){
		if(this.model.get('iTemplate')) this.$el.html(this.model.get('iTemplate')(this.model.toJSON()));
	},
	updateinfo:function(){
		//$('#info_attributes').html(interaction.template.form[this.model.get('iType')](this.model.toJSON()));
		if(this.model.get('iCommon'))  this.infoel.find('.Pos').replaceWith(interaction.template.info.common(this.model.toJSON()));
		this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
		//this.infoel.append(interaction.template.info.resources(this.model.toJSON()));
		if(this.model.get('iElementattr')) this.updateelementattr();
		this.bindinfo();
	},
	updatebackground:function(){
		if(this.model.get('iCommon')){
			var backgroundurl=this.getBackGroundUrl();
			if(backgroundurl){
				// this.$el.css('background-color','transparent');
				// this.$el.css('background-image',"url("+backgroundurl+")");
				// this.$el.css('background-repeat','no-repeat');
				// this.$el.css('background-position','center');
				// this.$el.css('background-size',this.$el.css('width')+" "+this.$el.css('height'));
				this.$el.find('.iContent').html('<img src="'+backgroundurl+'" style="width:100%;height:100%">');
			} 
			else{
				//this.$el.css('background-image','none');
				//this.$el.css('background-color',this.model.get('iBackground'));
				this.$el.find('.iContent').empty();
			}
		}
	},
	updateresources:function(){
		this.resourcesel=$('#info_attributes').children('.setting-body').find('div.resources');
		var view=this;
		var model=this.model;
		interaction.iResourceslist.reset();
		this.resourcesel.empty();
		var iResourcesProperties=this.model.get('iResourcesProperties');
		if(iResourcesProperties){
			var Detail=this.getdetail();
			_.each(iResourcesProperties,function(property){
				//view.resourcespatch(property);//resources upgrade
				view.resourcesel.append(interaction.template.Resources({id:property.id,type:property.type}));
				var resources=Detail[property.id];
				//console.info(resources);
				if(resources){
					if(_.isArray(resources)){
						_.each(resources,function(resource){
							interaction.iResourceslist.add(new interaction.model.Resources(resource));
						})
					}
					//else interaction.iResourceslist.add(new interaction.model.Resources({elementid:model.id,picture:resources,resourcesattr:property.id}));
				}
			})
			// var resources=Detail[this.model.get('iResources')];
		}
		this.bindresourcesupload();
	},
	updateanimation:function(){
		var detail=this.getdetail();
		detail.animations=_.where(interaction.iAnimationGroupList.toJSON(),{overlay_id:this.model.id});
		this.model.set('iDetail',detail);
	},
	updateanimationgroup:function(type,id){
		//var animationgroup=interaction.elementlist.where({iType:'AnimationGroup'})[0];
		//var animationgroupdetail=animationgroup.iview.getdetail();
		if(type=='add'){
			var animationmodel=interaction.iAnimationGroupList.get(id);
			new interaction.model.Animation(animationmodel.toJSON());
			this.updateanimation();
			//animationgroupdetail.animations.push(animationmodel.toJSON());
			//animationgroup.set('iDetail',animationgroupdetail);
			//this.model.save();
			interaction.iAnimationGroupList.confirm();
		}
		if(type=='update'){
			//var animationmodel=interaction.iAnimationlist.get(id);
			//animationgroupdetail.animations=interaction.iAnimationGroupList.toJSON();
			//animationgroup.set('iDetail',animationgroupdetail);
			//this.model.save();
			interaction.iAnimationGroupList.confirm();
			//interaction.iAnimationGroupList.get(id).set(animationmodel.toJSON());		
		}
		if(type=='remove'){
			// animationgroupdetail.animations=_.reject(animationgroupdetail.animations,function(i){
				// return i.id==id	;			
			// })
			//animationgroup.set('iDetail',animationgroupdetail);
			interaction.iAnimationGroupList.get(id).destroy();	
		}
	},
	updateelementattr:function(){
		$('#info_attributes .elementlist').children('ul').empty();
		interaction.iElementattrlist.reset();
		var view=this;
		interaction.elementlist.each(function(model){
			var JSON=model.toJSON();
			interaction.iElementattrlist.add(new interaction.model.Elementattr({id:JSON.id,elementid:view.model.id,iType:JSON.iType}));
		})	
	},
	updatetext:function(){
		this.textel=this.$el.find('div[id="tEditor_'+this.model.id+'"]');
		this.$el.find('iframe').css('height',this.getcommon().iHeight+'px');
	},
	getBackGroundUrl:function(){
		var Detail=this.model.get('iDetail');
		if(Detail.iImg) {
			if(_.isString(Detail.iImg)) return Detail.iImg;
			else if(Detail.iImg[0]) return Detail.iImg[0].picture;
		}
		else return false;
	},
	getcommon:function(){
		var returned=null;
		var JSON=this.model.toJSON();
		if(this.model.get('iCommon')){
			returned=JSON.iCommon[iPageDirection];	
		}
		return returned;
	},
	getdetail:function(){
		var JSON=this.model.toJSON();
		return JSON.iDetail;
	},
	getCentralPos:function(){
		var pos={};
		var common=this.getcommon();
		pos.x=common.iStartx+common.iWidth/2;
	    pos.y=common.iStarty+common.iHeight/2;
		return pos;		
	},
	getCommonByCentralPos:function(pos){
		var common=this.getcommon();
		common.iStartx=pos.x-common.iWidth/2;
	    common.iStarty=pos.y-common.iHight/2;
		return common;
	},
	setcommon:function(common){
		var JSON=this.model.toJSON();
		var iCommon=JSON.iCommon;
		if(!_.isNaN(common.iStartx)&&!_.isNaN(common.iStarty)&&!_.isNaN(common.iWidth)&&!_.isNaN(common.iHeight))
			iCommon[iPageDirection]=common;
		//console.info(iCommon);
		//this.model.set('iCommon',null);
		this.model.set('iCommon',iCommon);
	},
	setdetail:function(data){
		var JSON=this.model.toJSON();
		var detail=JSON.iDetail;
		_.each(_.keys(data),function(key){
			detail[key]=data[key];
		})
		this.model.set('iDetail',detail);
		if(this.model.dommodel){
			this.model.dommodel.set('iDetail',this.model.toJSON().iDetail);
			this.model.dommodel.iview.change();
		}
		this.updateinfo();
		this.updatebackground();
		//this.updateresources();
	},
	settext:function(){
		var textval = tinyMCE.getInstanceById("tEditor_"+this.model.id).getBody().innerHTML;
		this.setdetail({iText:textval});
		if (tinyMCE.getInstanceById("tEditor_"+this.model.id))
		{
			tinyMCE.execCommand('mceFocus', false, "tEditor_"+this.model.id);                    
			tinyMCE.execCommand('mceRemoveControl', false, "tEditor_"+this.model.id);
		}
	},
	setCentralPos:function(pos){
		var common=this.getcommon();
		common.iStartx=pos.x-common.iWidth/2;
	    common.iStarty=pos.y-common.iHight/2;
		this.setcommon(common);
	},
	keyshandle:function(event,ui){
		//alert('key');
		 var common=this.getcommon();
		 var id=this.model.id;
		 var changed=false;
		 if(event.shift){
			 this.options.aspectRatio=true;
		 }
		 var code = (event.keyCode ? event.keyCode : event.which);
		if(code==27){//left
			//this.confirm();
		}
		if(code==37){//left
			changed=true;
			common.iStartx=Number(common.iStartx)-1;
			common.iWidth=Number(common.iWidth)+1;
		}
		if(code==38){//up
			common.iStarty=Number(common.iStarty)-1;
			common.iHeight=Number(common.iHeight)+1;
			changed=true;
		}
		if(code==39){//right
			common.iWidth=Number(common.iWidth)+1;
			changed=true;
		}
		if(code==40){//down
			common.iHeight=Number(common.iHeight)+1;
			changed=true;
		}
		if(changed==true){
			event.preventDefault();
			check='ok';
			//check=coordinationcheck(id,common.iStartx,common.iStarty,common.iWidth,common.iHeight);
			if(check=='ok'){
				this.setcommon(common);
				this.updateposition();
				this.updateinfo();
				this.updatebackground();
				//this.updateresources();
			}
		}
	},
	setresizable:function(){
		if(!this.model.get('iResizable')) return false;
		var view=this;
		var model=this.model;
		this.$el.resizable({
			//containment: iParentdiv ,
			handles:'all',
			//zIndex: 2700 ,
			resize: function(event, ui) {
				$(this).find('.mceEditor').addClass('hide');
				var pos=$(this).position();
				var iStartx=Number(pos.left);
				var iStarty=Number(pos.top);
				var width = Number($(this).width());
				var height= Number($(this).height());
				var common=view.getcommon();
				if(view.options.aspectRatio) {
					view.$el.resizable( "option", "aspectRatio", 1 );
				}
				else view.$el.resizable("option","aspectRatio",null);
				common.iWidth=Number(width);
				common.iHeight=Number(height);
				common.iStartx=iStartx;
				common.iStarty=iStarty;
				//if(this.options.aspectRatio) common.iHeight
				view.setcommon(common);
				view.updateposition();
				view.updateinfo();
				view.updatebackground();
				//view.updateresources();
			},
			create: function(event,ui){
			},
			stop: function(event,ui){
				$(this).find('.mceEditor').removeClass('hide');
				var width = $(this).width();
				var height= $(this).height();
				var common=view.getcommon();
				common.iWidth=Number(width);
				common.iHeight=Number(height);
				view.setcommon(common);
				view.updateposition();
				view.updateinfo();
				view.updatebackground();
				//view.updateresources();
			}
		});		
	},
	unsetresizable:function(){
		if(this.model.get('iResizable')) this.$el.resizable('destroy'); 
	},
	setdraggable:function(){
		if(!this.model.get('iDraggable')) return false;
		var view=this;
		var model=this.model;
		this.$el.draggable({
			//containment: iParentdiv ,
			//zIndex: 2700 ,
			create: function(event,ui){
			},
			drag: function(event, ui) {
				var Pos=$(this).position();
				var common=view.getcommon();
				common.iStartx=Number(Pos.left);
				common.iStarty=Number(Pos.top);
				view.setcommon(common);
				view.updateposition();
				view.updateinfo();
				//view.updateresources();
			},
			stop: function(event,ui){
				var Pos=$(this).position();
				var common=view.getcommon();
				common.iStartx=Number(Pos.left);
				common.iStarty=Number(Pos.top);
				view.setcommon(common);
				view.updateposition();
				view.updateinfo();
				//view.updateresources();
			}
		});
	},
	unsetdraggable:function(){
		if(this.model.get('iDraggable')) this.$el.draggable('destroy');
	},
	setkeyscontrol:function(){
		$(document).bind('keydown',this.keyshandle);
	},
	unsetkeyscontrol:function(){
		$(document).unbind('keydown',this.keyshandle);
	},
	setanimation:function(){
		this.animationel=$('#info_attributes').children('.setting-body').find('.animations_area');
		var view=this;
		var model=this.model;
		this.animationel.find('fieldset.animation').remove();
		interaction.iAnimationlist.reset();
		var iAnimationProperties=this.model.get('iAnimationProperties');
		if(iAnimationProperties){
			var Detail=this.getdetail();
			_.each(iAnimationProperties,function(property){
				view.animationel.append(interaction.template.Animation({id:property.id,type:property.type}));
				var animation=interaction.iAnimationGroupList.where({overlay_id:view.model.id});
				view.animationel=$('#info_attributes').children('.setting-body').find('fieldset.animation');
				if(animation){
					_.each(animation,function(i){
						new interaction.model.Animation(i.toJSON());
					})
				}
			})
		}
		this.bindanimation();
	},
	unsetanimation:function(){
		this.infoel.find('fieldset.animation').remove();		
	},
	setaction:function(){
		this.actionel=$('#info_attributes').children('.setting-body').find('.actions_area');
		var view=this;
		var model=this.model;
		this.actionel.find('fieldset.actions').remove();
		//interaction.iActionList.reset();
		var iActionProperties=this.model.get('iActionProperties');
		if(iActionProperties){
			var Detail=this.getdetail();
			_.each(iActionProperties,function(property){
				view.actionel.append(interaction.template.Action({id:property.id,type:property.type}));
				var actions=interaction.iActionList.where({overlay_id:view.model.id});
				if(actions){
					_.each(actions,function(i){
						new interaction.view.ActionItem({model:i});
					})
				}
			})
		}
		this.bindaction();	
	},
	animationItem_focus:function(id){
		interaction.iAnimationlist.get(id).iview.focus();
	},
	info_focus:function(){
		interaction.changeTab('info_attributes');// when a focus happy ,alway focus to the info attributes area 
		this.renderinfo();
		this.updateresources();
		this.setanimation();
		this.setaction();
		this.bindinfo();
	},
	div_focus:function(){//add this new function to handle when the focus operation is all about the element
		this.unlock();//unlock this div for change and move 
		//div_setparenttop(this.model.id);//set the parent div to top 
		this.$el.addClass('selected');
		this.$el.addClass('active');
		this.$el.removeClass('iShadow');
		if(this.model.get('iResizable')) this.setresizable();//resize the div 
		if(this.model.get('iDraggable')) this.setdraggable();//drag the div
		if(this.model.get('iKeyscontrol')) this.setkeyscontrol();//begin the keyscontrol it , alert that this keycontrol can only apple to the current focused item
	},
	focus:function(){// this function use to focus the div 
		var view=this;
		if(elementfocus==true&&iCurrentModel&&iCurrentModel.id==this.model.id){
			interaction.changeTab('info_attributes');
		}
		else{
			if(elementfocus==true&&iCurrentModel) {//end the previous element and to operate the next
				iCurrentModel.iview.confirm();
			}
				 interaction.current=iCurrentModel=this.model;//set currentmodel to this
				this.beforefocus();
				 this.info_focus();
				this.div_focus();
				if(this.model.dommodel) this.model.dommodel.iview.$el.addClass('active');
				elementfocus=true;
				this.bindsavebutton();
				this.otherfocus();
		}
	},
	beforefocus:function(){},
	otherfocus:function(){},
	info_confirm:function(){//the info attributes confirm
		$('div#info_attributes').children('.setting-body').empty();
		$('div#info_resources').children('ul').empty();
		interaction.changeTab('info_dom');
	},
	resetbutton:function(){//reset the element buttons which may remove the button area or remove specific buttons
		$('div.info_window').dialog("option", "buttons",{});//remove the info save button
		div_removecontrolbutton(this.model.id);//remove the control buttons 
	},
	div_confirm:function(){//div operation when confirm occur
		if(this.model.get('iDraggable')) this.unsetdraggable();
		if(this.model.get('iResizable')) this.unsetresizable();
		if(this.model.get('iKeyscontrol')) this.unsetkeyscontrol();
		this.$el.removeClass('selected');
		this.$el.removeClass('active');
		this.lock(); //lock the div , so it can't be changed 
		this.changeZindex();
	},
	animation_confirm:function(){
		if(!_.include(['Image','Link','RichText','Slide','Video','Webcontent'],this.model.get('iType'))) return ;
		if(interaction.elementlist.where({iType:'AnimationGroup'}).length>0){
			interaction.elementlist.where({iType:'AnimationGroup'})[0].iview.confirm();
		}
	}, 
	confirm:function(){
		this.beforeconfirm();
		this.info_confirm();
		this.div_confirm();
		if(interaction.animation.current) interaction.animation.current.iview.unfocus();
		this.model.save();//model update by id
		//this.animation_confirm();
		if(this.model.dommodel) this.model.dommodel.iview.$el.removeClass('active');
		interaction.current=elementfocus=false; // no element focus now
		this.otherconfirm();//call the function to do some operations after confirm
	},
	beforeconfirm:function(){},
	otherconfirm:function(){}, 
	highlight:function(){
		this.$el.addClass('iShadow');
	},
	cancelhighlight:function(){
		this.$el.removeClass('iShadow');
	},
	mouseover:function(){
		if(interaction.current&&interaction.current.id==this.model.id) return ;
		this.$el.addClass('iShadow');
	},
	mouseout:function(){
		if(interaction.current&&interaction.current.id==this.model.id) return ;
		this.$el.removeClass('iShadow');
	},
	lock:function(){
		this.model.set('iLock',true);
		//this.$el.children('span.iType').children('a#iLock').addClass('lock');
	},
	unlock:function(){
		this.model.set('iLock',false);
		//this.$el.children('span.iType').children('a#iLock').removeClass('lock');
	},
	showdiv:function(){
		this.$el.removeClass('hide');
		this.model.set('iVisibility',true);
	},
	hidediv:function(){
		this.$el.addClass('hide');
		this.model.set('iVisibility',false);
	}
});


})(interaction);


define(['interaction/model/base','paperJS'],function(){
	return{
		set:function(animationid,overlayid,iType){
			switch(iType){
				case 301:
				case 302: interaction.animation.path.init(animationid,overlayid,iType);break;
			}
		},
		save:function(animationid,overlayid,iType){
			var overlaymodel=interaction.elementlist.get(overlayid);
			var animationmodel=interaction.iAnimationlist.get(animationid);
			interaction.animation.setDetail(animationid,overlayid,iType);
			interaction.animation.close(animationid,overlayid,iType);
		},
		preview:function(data){
			$('.interaction-view').jswait();
			$('.interaction-view').children('.iView').remove();
			$('#animation_preview').children('.modal-body').attr('id',interaction.currentpage.id);
			interaction_view.ipagelist.reset();
			var newpage=new interaction_view.model.Page({id:data?data.id:interaction.currentpage.id,picture:data?data.picture:interaction.currentpage.get('picture')});
			var backgroundurl=newpage.get('picture');
			$('.interaction-view').find('div.animationbk').remove();
			if(!backgroundurl||backgroundurl=='null'||backgroundurl=='Null'){
			} 			
			else $('.interaction-view').append('<div class="animationbk" style="text-align:center;position:absolute;width:100%;height:100%"><img src="'+backgroundurl+'" style="width:100%;height:100%" class="animationbackground"></div>');
			$('div.Presentation').attr('id',newpage.id);
			//interaction.animation.stop();
			interaction.modal.show('#animation_preview');
			$('#preloader').empty();
			if(!data){
				newpage.iview.overlays=interaction.elementlist.toJSON();
				newpage.iview.animations=interaction.iAnimationlist.toJSON();
				newpage.iview.actions=interaction.iActionList.toJSON();				
			}
			else{
				newpage.iview.overlays=data.overlays;
				newpage.iview.animations=data.animations;
				newpage.iview.actions=data.actions;					
			}
			console.log(data);
			newpage.iview.afterload();
		},
		stop:function(pageid){
			if(interaction_view.ipagelist.length==0) return;
			var currentpage=pageid?interaction_view.ipagelist.get(pageid):interaction_view.ipagelist.at(0);
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
				$('#interaction-area').selectable('disable');
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationlist.get(animationid);
				overlaymodel.iview.path = new paper.Path();
				overlaymodel.iview.path.strokeColor = 'black';
        		overlaymodel.iview.path.strokeWidth=2;
        		overlaymodel.iview.path.selected=false;
        		var pathdata=animationmodel.toJSON().iDetail.path;
        		//console.info(pathdata);
        		if(pathdata){
        			_.each(pathdata,function(i){
        				overlaymodel.iview.path.add(i);
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
					if(interaction.animation.path.status==0){
						interaction.animation.path.status=1;
					} 
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
				var iAnimations=interaction.iAnimationlist.toJSON();
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
				var animationmodel=interaction.iAnimationlist.get(animationid);
				//var overlayanimationmodel=interaction.iAnimationlist.get(animationid);
				if(overlaymodel.tempPoint) overlaymodel.iview.path.lastSegment.remove();
				var detail=animationmodel.iview.getdetail();
				detail.path=_.map(overlaymodel.iview.path.segments,function(i){
					return eval("(" + i.toString() + ")");
				})		
				//animationmodel.set('iDetail',detail);	
				//if(overlayanimationmodel) overlayanimationmodel.set('iDetail',detail);	
			},
			close:function(animationid,overlayid,iType){
				var overlaymodel=interaction.elementlist.get(overlayid);
				var animationmodel=interaction.iAnimationlist.get(animationid);
				if(overlaymodel.iview.path) {
					overlaymodel.iview.path.remove();
				}
				if(interaction.animation.path.paperTool) interaction.animation.path.paperTool.remove();
				$('canvas#interaction').addClass('hide');
				$('.interaction-area .tooltip.prompt').addClass('hide');
				$(document).off('mousemove','canvas#interaction');
				$(document).off('mouseout','canvas#interaction');
				$(document).off('click','canvas#interaction');	
				$('#interaction-area').selectable('enable');			
			}
		}
	}
})
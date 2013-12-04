define(['jquery','underscore'],function(){
	var util={
		addblankpage:function(ids){
			if(!ids) id=interaction.currentpage.id;
			else if(ids.length==0) return;
			else id=ids[0];
			var page=iPagelist.get(id);
			var url=context_url+'addpage.json?position='+String(page.get('position')+1);
			interaction.util.pagequery(url);			
		},
		copypage:function(collection,ids){
			if(!ids||ids.length==0) return;
			if(ids&&ids.length>0) interaction.copypages=ids;	
			else interaction.copypages=[];	
		},
		copyoverlay:function(collection,ids){
			if(!ids||ids.length==0) return;
			interaction.copyitems=[];
			if(collection&&ids){
				interaction.util.overlay_paste_times=0;
				interaction.copyitems=interaction.util.get_overlay_data(collection,ids);
			}
		},
		copyanimation:function(collection,ids){
			if(!ids||ids.length==0) return;
			var id=ids[0];
			interaction.copyanimations=interaction.util.get_animation_data(collection,id);
		},
		pastepage:function(ids){
			if(!ids) id=interaction.currentpage.id;
			else if(ids.length==0) return;
			else id=ids[0];
			if(interaction.copypages.length==0)	return false;
			var pageid=interaction.copypages[0];
			var page=iPagelist.get(id);
			if(!iPagelist.get(pageid)){
				global.message('error','您所复制的页面已经被删除');
				interaction.copypages=[];
				return;
			}
			var url=context_url+'copypage.json?position='+String(page.get('position')+1)+'&id='+pageid;
			interaction.util.pagequery(url);
		},
		pasteoverlay:function(){
			if(interaction.copyitems.length==0) return false;
			_.each(interaction.copyitems,function(i){
				var copyoverlayitem=$.extend(true,{},i.overlay);
				copyoverlayitem.iParent=interaction.elementlist.url;
				copyoverlayitem.iUrl=context_url+interaction.elementlist.url;
				copyoverlayitem.iPageid=interaction.currentpage.id;
				if(interaction.copyitems.length>1) interaction.createoptions={
					focus:false
				}
				var modelstructure=interaction.model[copyoverlayitem.iType].extend({
					afternewcreated:function(overlayid){
						if(i.animations.length>0) interaction.util.pasteanimation(overlayid,i.animations);
					}
				});
				var newmodel=new modelstructure(copyoverlayitem);					
			})	
		},
		pasteanimation:function(overlayid,animations){
			if(overlayid&&animations){
				if(interaction.util.pasteanimations_available(overlayid,animations)){
					_.each(animations,function(i){
						var animationitem=$.extend(true,{},i);
						i.overlay_id=overlayid;
						var AnimationItemModel = new interaction.model.AnimationGroupItem(i);
					})
					if(animations.length>0) interaction.iAnimationlist.confirm();					
				}
				else{
					global.message('error','对象不支持该类型动画');
				}
			}
		},
		pasteanimations_available:function(overlayid,animations){
			var model=interaction.elementlist.get(overlayid);
			var animationtypes=_.pluck(animations,'iType');
			console.log(animationtypes);
			if(_.contains(animationtypes,501)||_.contains(animationtypes,502)||_.contains(animationtypes,503)){
				var aType='media';
			}
			else{
				var aType='element';
			}
			var iType=model.get('iType');
			if(_.contains(['RichText','Image','CycleImage','Slide','Button','Pay','Map'],iType)&&aType=='element') return true;
			else if((_.contains(['Audio','Video'],iType)&&aType=='media')) return true;
			else return false;
		},
		pagequery:function(url){
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
				}
			})
		},
		batch_add_overlays:function(overlays,nostep){
			var animations=[];
			if(overlays.length==0) return false;
			if(!nostep) interaction.step.batch_store_undodata();
			if(interaction.current) interaction.current.iview.confirm();
			$('.element.ui-selected').removeClass('ui-selected');
			_.each(overlays,function(i){
				var copyoverlayitem=$.extend(true,{},i.overlay);
				copyoverlayitem.iParent=interaction.elementlist.url;
				copyoverlayitem.iUrl=context_url+interaction.elementlist.url;
				copyoverlayitem.iPageid=interaction.currentpage.id;
				copyoverlayitem.iAutoindex=true;
				if(interaction.currentpage.id==i.pageid) copyoverlayitem.iCommon=interaction.util.common_patch(copyoverlayitem.iCommon);
				var modelstructure=interaction.model[copyoverlayitem.iType].extend({
					
				});
				var newmodel=new modelstructure(copyoverlayitem);	
				if(i.animations.length>0)  _.each(i.animations,function(animationitem){
						var animationitem=$.extend(true,{},animationitem);
						animationitem.overlay_id=newmodel.id;
						animations.push(animationitem);
				})	
				newmodel.iview.$el.addClass('ui-selected');	
				newmodel.iview.changeZindex();		
			})	
			interaction.currentpage.iview.updatethumb();
			interaction.elementlist.confirm();	
			if(animations.length>0) interaction.util.batch_add_animations(animations);	
			if(!nostep) interaction.step.batch_undosave(2,1);	
		},
		batch_remove_overlays:function(ids,nostep){
			global.confirmDelete(function(){
				if(!nostep) interaction.step.batch_store_undodata();
				var actions=[];
				var animations=[];
			_.each(ids,function(id){
				var model=interaction.elementlist.get(id);
				_.each(interaction.iActionList.where({overlay_id:id}),function(i){
					actions.push(i.id);
				})
				_.each(interaction.iAnimationlist.where({overlay_id:id}),function(i){
					animations.push(i.id);
				})
				model.iview.afterremove(model);
				model.trigger('change:remove');
				interaction.elementlist.remove(model);
			})
			var url=context_url+interaction.currentpage.id+'/overlaydelete.json?ids='+JSON.stringify(ids);
			data={
			};
			global.json.post(url,data,function(data){

			})
			interaction.util.batch_remove_animations(animations);
			interaction.util.batch_remove_actions(actions);
			if(!nostep) interaction.step.batch_undosave(2,1);
			})
		},
		batch_add_animations:function(animations){
			_.each(animations,function(i){
				var AnimationItemModel = new interaction.model.AnimationGroupItem(i);
			})
			interaction.iAnimationlist.confirm();
		},
		batch_remove_animations:function(ids){
			_.each(ids,function(id){
				var animation=interaction.iAnimationlist.get(id);
				if(animation.iview.$el) animation.iview.$el.remove();
				if(animation.igroupview.$el) animation.igroupview.$el.remove();
				interaction.iAnimationlist.remove(animation,{silent:true});
			})
			interaction.iAnimationlist.confirm();
		},
		batch_remove_animation_by_overlayid:function(id){
			global.confirmDelete(function(){
				_.each(interaction.iAnimationlist.where({'overlay_id':id}),function(animation){
					if(animation.iview.$el) animation.iview.$el.remove();
					if(animation.igroupview.$el) animation.igroupview.$el.remove();
					interaction.iAnimationlist.remove(animation,{silent:true});
				})
				interaction.iAnimationlist.confirm();
			})
		},
		batch_remove_actions:function(ids){
			_.each(ids,function(id){
				var action=interaction.iActionList.get(id);
				if(action.iview.$el) action.iview.$el.remove();
				if(action.igroupview.$el) action.igroupview.$el.remove();
				interaction.iActionList.remove(action,{silent:true});
			})
			interaction.iActionList.confirm();			
		},
		batch_drag_overlays:function(ids,delta){
			_.each(ids,function(id){
				if(id!=interaction.current.id){
					interaction.elementlist.get(id).iview.$el.css('left',parseInt(interaction.elementlist.get(id).iview.$el.css('left'))+delta.x);
					interaction.elementlist.get(id).iview.$el.css('top',parseInt(interaction.elementlist.get(id).iview.$el.css('top'))+delta.y);
					interaction.elementlist.get(id).iview.updateposbydelta(delta);
				}
			})	
		},
		common_patch:function(common){
			interaction.util.overlay_paste_times+=1;
			if(common&&common[iPageDirection]){
				common[iPageDirection].iStartx+=interaction.util.overlay_paste_times*10;
				common[iPageDirection].iStarty+=interaction.util.overlay_paste_times*10;				
			}
			return common;
		},
		get_overlay_data:function(collection,ids){
			var result=[];
			_.each(ids,function(id){
				var copyoverlayitem=$.extend(true,{},_.pick(collection.get(id).toJSON(),'iType','iDetail','iCommon','iHidden','iVisibility'));
				var copyanimationitems=_.map(interaction.iAnimationlist.where({overlay_id:id}),function(i){
						var animationitem=$.extend(true,{},_.pick(i.toJSON(),'iDetail','iTiming','iType'));
						animationitem.iTiming.waitaction=false;
						return animationitem;
					});
				result.push({
					overlay:copyoverlayitem,
					animations:copyanimationitems,
					pageid:interaction.currentpage.id
				})					
			})	
			return result;		
		},
		get_animation_data:function(collection,id){
			var animationitems=_.map(interaction.iAnimationlist.where({overlay_id:id}),function(i){
						var animationitem=$.extend(true,{},_.pick(i.toJSON(),'iDetail','iTiming','iType'));
						animationitem.iTiming.waitaction=false;
						return animationitem;
			});	
			return animationitems;		
		}
	}
	util.overlay_paste_times=0;
	return util;
})

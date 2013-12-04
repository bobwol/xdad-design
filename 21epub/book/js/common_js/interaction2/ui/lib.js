define(['underscore','interaction/model/pagelib'],function(){
	var lib={
		init:function(){
			interaction.lib.loadpagelib();
			interaction.lib.loadoverlaylib();
			interaction.lib.loadanimationlib();
		},
		loadpagelib:function(){
			interaction.iPageliblist.reset();
			var url=portal_url+'libpages.json';
			global.json.load(url,function(data){
				if(data.code==200){
					data=data.data.results;
					console.log(data);
					interaction.iPageliblist.add(data);
				}
			})
		},
		loadoverlaylib:function(){
			interaction.iOverlayliblist.reset();
			var url=portal_url+'liboverlays.json';
			global.json.load(url,function(data){
				if(data.code==200){
					data=data.data.results;
					console.log(data);
					interaction.iOverlayliblist.add(data);
				}
			})			
		},
		loadanimationlib:function(){
			interaction.iAnimationliblist.reset();
			var url=portal_url+'libanimations.json';
			global.json.load(url,function(data){
				if(data.code==200){
					data=data.data.results;
					console.log(data);
					interaction.iAnimationliblist.add(data);
				}
			})			
		},
		pagetolib:function(collection,ids){
			if(ids.length>0){
				//$('fieldset#pagelib').jswait();
				var model=collection.get(ids[0]);
				var url=context_url+model.id+'/savetolib';
				global.json.post(url,{},function(data){
					//$('fieldset#pagelib').jswait('close');
					if(data.code==200){
						global.message('success',data.msg);
					}
					interaction.lib.loadpagelib();
					interaction.changeTab('info_lib');
				})
			}
		},
		overlaytolib:function(collection,ids){
			if(ids.length==0) return ;
			//$('fieldset#overlaylib').jswait();
			var data=interaction.util.get_overlay_data(collection,ids);
			var url=context_url+interaction.currentpage.id+'/saveoverlaytolib';
			global.model.sent(url,data,function(data){
					//$('fieldset#overlaylib').jswait('close');
					if(data.code==200){
						global.message('success',data.msg);
					}
					interaction.lib.loadoverlaylib();
					interaction.changeTab('info_lib');
			});
		},
		animationtolib:function(collection,ids){
			if(ids.length==0) return ;
			//$('fieldset#animationlib').jswait();
			var data=interaction.util.get_animation_data(collection,ids[0]);
			var url=context_url+interaction.currentpage.id+'/saveanimationtolib';
			global.model.sent(url,data,function(data){
					//$('fieldset#animationlib').jswait('close');
					if(data.code==200){
						global.message('success',data.msg);
					}
					interaction.lib.loadanimationlib();
					interaction.changeTab('info_lib');
			});			
		},
		pagepreview:function(id){
			var url=portal_url+'libpagedetail.json?id='+id;
			global.json.load(url,function(data){
				if(data.code==200){
					data=data.data.results[0];
					$('.interaction-view').find('#jswait-loading').remove();
					interaction_view.iAnimationlist.afterTimeLineCreated=null;
					interaction_view.SinglePreview=false;
					interaction.animation.preview(data);
				}
			})
		},
		overlaypreview:function(id){
			var url=portal_url+'liboverlaydetail.json?id='+id;
			global.json.load(url,function(data){
				if(data.code==200){
					data=data.data.results;
					$('.interaction-view').find('#jswait-loading').remove();
					interaction_view.iAnimationlist.afterTimeLineCreated=null;
					interaction_view.SinglePreview=false;
					var d={
						overlays:[],
						animations:[],
						actions:[]
					};
					_.each(data,function(i){
						i.overlay.id='overlay'+global.guid();
						_.each(i.animations,function(animation){
							animation.id='animation'+global.guid();
							animation.overlay_id=i.overlay.id;
							d.animations.push(animation);
						})
						d.overlays.push(i.overlay);
					})
					d.id='page'+global.guid();
					d.picture=null;
					interaction.animation.preview(d);
				}
			})			
		},
		animationpreview:function(id){
			var url=portal_url+'libanimationdetail.json?id='+id;
			global.json.load(url,function(data){
				if(data.code==200){
					data=data.data.results;
					$('.interaction-view').find('#jswait-loading').remove();
					interaction_view.iAnimationlist.afterTimeLineCreated=null;
					interaction_view.SinglePreview=false;
					var d={
						overlays:[],
						animations:[],
						actions:[]
					};
					var ids=_.map($('.element.ui-selected'),function(i){
						return $(i).attr('id');
					})
					if(ids.length==0){
						_.each(data,function(i){
							i.overlay.id='overlay'+global.guid();
							_.each(i.animations,function(animation){
								animation.id='animation'+global.guid();
								animation.overlay_id=i.overlay.id;
								d.animations.push(animation);
							})
							d.overlays.push(i.overlay);
						})				
					}
					else{
						_.each(ids,function(id){
							var overlay=$.extend(true,{},_.pick(interaction.elementlist.get(id).toJSON(),'id','iType','iDetail','iCommon','iHidden','iVisibility'));
							d.overlays.push(overlay);
							_.each(data[0].animations,function(i){
								var animation=$.extend(true,{},i);
								animation.id='animation'+global.guid();
								animation.overlay_id=overlay.id;
								d.animations.push(animation);
							})						
						})
					}
					d.id='page'+global.guid();
					d.picture=null;
					interaction.animation.preview(d);						
				}
			})			
		},
		addpagefromlib:function(id,position){
			var url=context_url+'addpagefromlib?id='+id+'&position='+position;
			interaction.util.pagequery(url);
		},
		addoverlayfromlib:function(id){
			var url=portal_url+'liboverlaydetail.json?id='+id;
			global.json.load(url,function(data){
				if(data.code==200){
					data=data.data.results;
					interaction.util.batch_add_overlays(data);
					global.message('success','操作成功');
				}
			})
		},
		addanimationfromlib:function(id){
			var url=portal_url+'libanimationdetail.json?id='+id;
			global.json.load(url,function(data){
				if(data.code==200){
					data=data.data.results;
					var ids=_.map($('.element.ui-selected'),function(i){
						return $(i).attr('id');
					})
					if(ids.length==0) {
						global.message('error','你必须选定一个元素来引入改动画');
					}
					else{
						var animations=[];
						_.each(ids,function(id){
							if(interaction.util.pasteanimations_available(id,data)){
								_.each(data[0].animations,function(i){
									var animation=$.extend(true,{},i);
									animation.overlay_id=id;
									animations.push(animation);
								})								
							}
							else{
								global.message('error','动画引入可能失败原因元素不支持改动画类型');
							}						
						})		
						interaction.util.batch_add_animations(animations);	
						global.message('success','操作成功');			
					}
				}
			})
		},
		deletepagefromlib:function(id){
			//$('fieldset#pagelib').jswait();
			var url=portal_url+'deletepagefromlib?id='+id;
			global.json.post(url,{},function(data){
				//$('fieldset#pagelib').jswait('close');
				if(data.code==200){
					interaction.lib.loadpagelib();
				}
			})
		},
		deleteoverlayfromlib:function(id){
			//$('fieldset#overlaylib').jswait();
			var url=portal_url+'deleteoverlayfromlib?id='+id;
			global.json.post(url,{},function(data){
				//$('fieldset#overlaylib').jswait('close');
				if(data.code==200){
					interaction.lib.loadoverlaylib();
				}
			})
		},
		deleteanimationfromlib:function(id){
			//$('fieldset#animationlib').jswait();
			var url=portal_url+'deleteanimationfromlib?id='+id;
			global.json.post(url,{},function(data){
				//$('fieldset#animationlib').jswait('close');
				if(data.code==200){
					interaction.lib.loadanimationlib();
				}
			})
		}		
	}
	return lib;
})

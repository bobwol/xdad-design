(function(interaction){
	interaction.model.Page=interaction.model.Base.extend({
		defaults:{
			iType:'Page',//define type
			iLock:true,
			iVisibility:true,
			iCommon:null,
			iDetail:{},
			iParent:'iRoot',
			iChild:null,
			iParentModel:null,
			iDraggable:false,
			iResizable:false,
			iTemplate:null,
			iParentdiv:'body',
			iSync:true,
			iZindex:'-1',
			iAutofocus:false,
			iKeyscontrol:false,
			callback:null,
			iBackground:'transparent'
		},
		setcollection:function(){
		},
		setview:function(type){
			this.iview=new interaction.view.Page({model:this});
			if(this.get('isNew')){
				this.iview.focus();
			}
		},
		setsyncmodel:function(){
			var Model_JSON=this.toJSON();
			Model_JSON.iSync=false;
			//this.dommodel=new interaction.model.Dom(JSON);
		},
		sync: function(method, model, options) {
			if(method=='create'){
				options.url=context_url+'/addpage.json';
			}
			if(method=='update'){
				//return false;
				options.url=context_url+'updateimage';
			}
			if(method=='delete'){
				options.url=context_url+'/deletepage.json?id='+model.id;
			}
			if(method=='read'){
				return false;
				options.url=this.get('iUrl')+'/overlayget.json?id='+model.id;
			}
			Backbone.emulateHTTP = true ;
			Backbone.emulateJSON = true ;
			if(this.get('iSync')) Backbone.sync(method, model, options);
		},
	})
	interaction.collection.Page=interaction.collection.Base.extend({
		model:interaction.model.Page,
		setonremove:function(){
			var collection=this;
			this.on('remove',function(model){
				if(interaction.currentpage.id==model.id) {
					$('.interaction-area').children('.element').remove();
					interaction.currentpage=null;
				}
				if(collection.length==0){
					page_addPage();
				}
				else{
					collection.at(0).iview.focus();
				}
			})
		}
	});
	interaction.view.Page = interaction.view.Base.extend({
		bindanimationsave:function(){
			var view=this;
			this.animationel.find('.action-save button').bind('click',function(){
				interaction.iAnimationGroupList.confirm();
			})				
		},
		bindoverlaysave:function(){
			this.overlayel.find('.action-save button').bind('click',function(){
				interaction.elementlist.confirm();
			})				
		},
		bindactionsave:function(){
			this.actionel.find('.action-save button').bind('click',function(){
				interaction.iActionList.confirm();
			})				
		},
		bindanimationsort:function(){
			var view=this;
			this.animationel.find('.animations').sortable({
				handle:'.btn-draged',
				items:'li.animation-item',
		        update: function(event, ui) {
					// if(startposition!=-1){
						// var delta=(ui.item.prevAll().length + 1)-startposition;
						// id=$(ui.item).attr('id');
					// }
					var animationids=interaction.get_array(view.animationel.find('.animations li.animation-item'),'id');
					// var detail=view.getdetail();
					// detail.animations=_.map(animationids,function(i){
						// return interaction.iAnimationGroupList.get(i).toJSON();
					// })
					interaction.iAnimationGroupList.reset(_.map(animationids,function(i){
						return interaction.iAnimationGroupList.get(i);
					}))
					//view.model.set('iDetail',detail);
		        },
			})
		},
		bindoverlaysort:function(){
			var view=this;
			this.domel=$('#info_dom');
			this.domel.find('.categories').sortable({
				handle:'.btn-draged',
				items:'li.Dom',
		        update: function(event, ui) {
					var overlayids=interaction.get_array(view.overlayel.find('.categories li.Dom'),'id');
					var newoverlayids=[];
					for(i=0;i<overlayids.length;i++){
						newoverlayids.push(overlayids[overlayids.length-i-1]);
					}
					interaction.elementlist.reset(_.map(newoverlayids,function(i){
						return interaction.elementlist.get(i);
					}));
					interaction.elementlist.each(function(model){
						model.iview.changeZindex();
					})
		        },
			})
		},
		bindpageinfo:function(){
			var view=this;
			this.pageinfoel.find('.change-background').on('click',function(){
				interaction.resources.openforchange();
				return false;
			})
			this.pageinfoel.find('.action-save button').bind('click',function(){
				interaction.save(view.model,{},function(data){
					if(data.code==200){
						interaction.message('success',data.msg);
					}
				})
				return false;
			})	
		},
		events:{
			'click':'focus'
		},
		render:function(){
			if($('.doc-layout-left .thumbs').children('ul').children('li[id="'+this.model.id+'"]').length>0)
				this.setElement($('.doc-layout-left .thumbs').children('ul').children('li[id="'+this.model.id+'"]'));
			else{
				$('.doc-layout-left .thumbs').children('ul').append(interaction.template.Page(this.model.toJSON()));
				this.setElement($('.doc-layout-left .thumbs').children('ul').children('li[id="'+this.model.id+'"]'));
			}
		},
		focus:function(){
			var view=this;
			if(interaction.current) {
				interaction.current.iview.confirm();
			}
			interaction.currentpage=this.model;
			// if(interaction.elementlist.where({iType:'AnimationGroup'}).length!=0){
					// interaction.elementlist.where({iType:'AnimationGroup'})[0].iview.confirm();
			// }
			$('.interaction-area').children('.element').remove();
			this.overlayel=$('#info_dom').children('.setting-body');
			this.overlayel.html('<form><h3>Layers</h3><fieldset><legend>交互组件顺序</legend><div class="categories"><ul></ul></div>');
			this.overlayel.append(interaction.template.info.infosave());
			interaction.current=null;
			elementfocus=false;
			this.updatebackground();
			this.updateanimationinfo();
			this.updateactioninfo();
			this.updatepageinfo();
			interaction.elementlist.url=this.model.id;
			$.when(overlays=$.getJSON(context_url+this.model.id+'/getoverlays'),animations=$.getJSON(context_url+this.model.id+'/getanimations'),$.getJSON(context_url+this.model.id+'/getactions')).done(function(data1,data2,data3){
				overlays=data1[0];
				animations=data2[0];
				actions=data3[0];
				overlays=_.reject(overlays,function(d){return d.iType=='AnimationGroup'});
				interaction.elementlist.reset([]);
				interaction.iActionList.reset([]);
				_.each(overlays,function(d){
					d.iUrl=context_url+view.model.id;
					d.iParent=view.model.id;
					interaction.elementlist.add(new interaction.model[d.iType](d));
				});
				animations=_.filter(animations,function(i){
					return _.include(interaction.elementlist.pluck('id'),i.overlay_id);
				})
				animations=_.map(animations,function(d){
					return(new interaction.model.AnimationGroupItem(d));
				});
				//console.info(overlays);
				//interaction.elementlist.reset(overlays);
				interaction.elementlist.each(function(i){
					i.iview.changeZindex();
				})
				view.bindoverlaysave();
				interaction.iAnimationGroupList.reset(animations);
				_.each(actions,function(i){
					new interaction.model.Action(i);
				})
				html2canvas($('[id="interaction-area"]').parent().parent()[0], {
				  onrendered: function(canvas) {
				    document.body.appendChild(canvas);
				  }
				});
				//interaction.elementlist.sort();
			});
		//	interaction.elementlist.fetch({
			//	success:function(data){
			//		if(interaction.elementlist.where({iType:'AnimationGroup'}).length==0){
			//			new interaction.model.AnimationGroup({iParent:interaction.elementlist.url,iUrl:context_url+interaction.elementlist.url});
			//		}
			///		else{
						//interaction.elementlist.where({iType:'AnimationGroup'})[0].iview.display();
			//		}
			//	}
			//});
			this.$el.addClass('ui-selected').siblings().removeClass('ui-selected');
			this.$el.addClass('active').siblings().removeClass('active');
			$('.interaction-area').width(1024);
			$('.interaction-area').height(768);
			interaction.changeTab('info_dom');
			this.updateanimationpreviewbackground();
			this.bindoverlaysort();
			this.bindanimationsort();
			return false;
		},
		updatebackground:function(){
			var backgroundurl=this.getBackGroundUrl();
			if($('.interaction-area').find('div.animationbk').length>0) $('.interaction-area').find('div.animationbk').replaceWith('<div class="animationbk" style="text-align:center;position:absolute;width:100%;height:100%"><img src="'+backgroundurl+'" style="width:100%;height:100%" class="animationbackground"></div>');
			else $('.interaction-area').append('<div class="animationbk" style="text-align:center;position:absolute;width:100%;height:100%"><img src="'+backgroundurl+'" style="width:100%;height:100%" class="animationbackground"></div>');
		},
		updateanimationinfo:function(){
			this.animationel=$('#info_conf').children('.setting-body');
			this.animationel.empty();
			this.animationel.append('<h3 class="baseinfo">动画序列</h3>');
			this.animationel.append(interaction.template.detail.AnimationGroup());
			this.animationel.append(interaction.template.info.infosave());	
			this.bindanimationsave();		
		},
		updateactioninfo:function(){
			this.actionel=$('#info_action').children('.setting-body');
			this.actionel.empty();
			this.actionel.append('<h3 class="baseinfo">动作事件</h3>');
			this.actionel.append(interaction.template.detail.ActionList());
			this.actionel.append(interaction.template.info.infosave());	
			this.bindactionsave();			
		},
		updatepageinfo:function(){
			this.pageinfoel=$('#info_page').children('.setting-body');
			this.pageinfoel.empty();
			this.pageinfoel.append(_.template(PageInfoTemplate,this.model.toJSON()));	
			this.pageinfoel.append(interaction.template.info.infosave());
			this.bindpageinfo();			
		},
		updateanimationpreviewbackground:function(){
			var backgroundurl=this.getBackGroundUrl();
			$('.interaction-view').find('div.animationbk').remove();
			$('.interaction-view').append('<div class="animationbk" style="text-align:center;position:absolute;width:100%;height:100%"><img src="'+backgroundurl+'" style="width:100%;height:100%" class="animationbackground"></div>');
		},
		getBackGroundUrl:function(){
			return this.model.get('picture');
		},
		afterremove:function(){
			this.$el.remove();
			//if(this.model.dommodel) this.model.dommodel.iview.$el.remove();
			$('#info_dom').children('.setting-body').empty();
		},
		setimageplus:function(){
			return '';
		},
		getimagename:function(imagename){//add this function to get the field of the image which name to get the image url
			//default is use iImglist
			return 'iImg';
		}
	})
	window.iPagelist=new interaction.collection.Page();
	interaction.currentpage=null;
})(interaction);
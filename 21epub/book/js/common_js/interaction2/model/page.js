define(['interaction/model/base','text!interaction/template/ipage.js','text!interaction/template/page_info.js','interaction/ui/thumb'],function(){
	var PageInfoTemplate=require('text!interaction/template/page_info.js');
	interaction.model.Page=interaction.model.base.extend({
		defaults:{
			iType:'Page',//define type
			iLock:true,
			iVisibility:true,
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
			if(this.get('isNewPage')){
				this.iview.focus();
				this.unset('isNewPage');
			}
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
					collection.addpage();
				}
				else{
					collection.at(0).iview.focus();
				}
			})
		},
		addpage:function(){
			var url='addpage.json';
			jqwait_simple();
			$.getJSON(url, function(data) {
				if(data.code==200){
					var data=data.data;
					data.iType='Page';
					iPagelist.add(data);
					jqwait_simple_close();
				}
			});
		}
	});
	interaction.view.Page = interaction.view.Base.extend({
		bindanimationsave:function(){
			var view=this;
			this.animationel.find('.action-save button').bind('click',function(){
				interaction.iAnimationlist.confirm();
				return false;
			})				
		},
		bindoverlaysave:function(){
			this.overlayel.find('.action-save button').bind('click',function(){
				interaction.elementlist.confirm();
				return false;
			})				
		},
		bindactionsave:function(){
			this.actionel.find('.action-save button').bind('click',function(){
				interaction.iActionList.confirm();
				return false;
			})				
		},
		bindanimationsort:function(){
			var view=this;
			this.animationel.find('.animations').sortable({
				handle:'.btn-draged',
				items:'li.animation-item',
		        update: function(event, ui) {
					var animationids=interaction.get_array(view.animationel.find('.animations li.animation-item'),'id');
					interaction.iAnimationlist.reset(_.map(animationids,function(i){
						return interaction.iAnimationlist.get(i);
					}))
		        },
			})
		},
		bindoverlaysort:function(){
			var view=this;
			this.domel=$('#info_dom');
			this.domel.find('.list').sortable({
				handle:'.btn-draged',
				items:'li.Dom',
		        update: function(event, ui) {
					var overlayids=interaction.get_array(view.overlayel.find('.list li.Dom'),'id');
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
			this.pageinfoel.find('figure.image > img').on('dblclick',function(){
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
			this.pageinfoel.find('.action-backgroundpreview').bind('click',function(){
				view.previewbackground();
				return false;
			})
			this.pageinfoel.find('.action-del').on('click',function(){
				global.confirmDelete(function(){
					view.clearbackground();
					view.updateanimationpreviewbackground();
				})
				return false;
			})
			this.pageinfoel.find('[rel=tooltip]').tooltip();
		},
		events:{
			'click':'focus',
			'contextmenu':'onMouseDown'
		},
		render:function(){
			if($('.doc-layout-left .thumbs').children('ul').children('li[id="'+this.model.id+'"]').length>0){
				//var thumbitems=$('.doc-layout-left .thumbs').children('ul').children('li[id="'+this.model.id+'"]').find('.interaction_thumbitem').detach();
				this.setElement($('.doc-layout-left .thumbs').children('ul').children('li[id="'+this.model.id+'"]'));
				//this.$el.append(thumbitems);
			}
			else{
				var pageT=require('text!interaction/template/ipage.js');
				$('.doc-layout-left .thumbs').children('ul').append(_.template(pageT,this.model.toJSON()));
				this.setElement($('.doc-layout-left .thumbs').children('ul').children('li[id="'+this.model.id+'"]'));
			}
		},
		focus:function(){
			if(interaction.currentpage&&interaction.currentpage.id==this.model.id) return false;
			var view=this;
			jqwait_simple();
			if(interaction.current) {
				interaction.current.iview.confirm();
			}
			interaction.currentpage=this.model;
			// if(interaction.elementlist.where({iType:'AnimationGroup'}).length!=0){
					// interaction.elementlist.where({iType:'AnimationGroup'})[0].iview.confirm();
			// }
			$('.interaction-area').children('.element').remove();
			this.overlayel=$('#info_dom').children('.setting-body');
			//this.updatepageinfo();
			this.overlayel.find('.list').children('ul').empty();
			this.overlayel.find('.action-save').remove();
			//this.overlayel.find('.list').children('ul').empty();
			this.renderinfosave(this.overlayel);
			interaction.current=null;
			elementfocus=false;
			this.updatebackground();
			this.updateanimationinfo();
			this.updateactioninfo();
			this.updatepageinfo();
			interaction.elementlist.url=this.model.id;
			$.getJSON(context_url+this.model.id+'/index.json',function(data){
			//$.when(overlays=$.getJSON(context_url+this.model.id+'/getoverlays'),animations=$.getJSON(context_url+this.model.id+'/getanimations'),$.getJSON(context_url+this.model.id+'/getactions')).done(function(data1,data2,data3){
				jqwait_simple_close();
				var data=data.data.results[0];
				overlays=data.overlays;
				animations=data.animations;
				actions=data.actions;
				overlays=_.reject(overlays,function(d){return d.iType=='AnimationGroup'});
				iElementlist.reset([]);
				interaction.elementlist.reset([]);
				interaction.iActionList.reset([]);
				_.each(overlays,function(d){
					d.iUrl=context_url+view.model.id;
					d.iParent=view.model.id;
					d.iPageid=view.model.id;
					interaction.elementlist.add(new interaction.model[d.iType](d));
				});
				animations=_.filter(animations,function(i){
					return _.include(interaction.elementlist.pluck('id'),i.overlay_id);
				})
				animations=_.map(animations,function(d){
					return(new interaction.model.AnimationGroupItem(d));
				});

				interaction.elementlist.each(function(i){
					i.iview.changeZindex();
				})
				view.bindoverlaysave();
				interaction.iAnimationlist.reset(animations);
				_.each(actions,function(i){
					new interaction.model.Action(i);
				})
				view.updatethumb();
				interaction.iUndolist.reset();
				interaction.iRedolist.reset();
				if($('body').has('.prewait')) $('body').find('.prewait').remove();
			});
			this.$el.addClass('ui-selected').siblings().removeClass('ui-selected');
			this.$el.addClass('active').siblings().removeClass('active');
			$('.interaction-area').width(1024);
			$('.interaction-area').height(768);
			interaction.changeTab('info_page');
			this.updateanimationpreviewbackground();
			this.bindoverlaysort();
			this.bindanimationsort();
			return false;
		},
		updatebackground:function(){
			var backgroundurl=this.getBackGroundUrl();
			if(!backgroundurl||backgroundurl=='null'||backgroundurl=='Null'){
				$('.interaction-area').find('div.animationbk').empty();
				return;
			} 
			if($('.interaction-area').find('div.animationbk').length>0) $('.interaction-area').find('div.animationbk').replaceWith('<div class="animationbk" id="animationbk" style="text-align:center;position:absolute;width:100%;height:100%"><img src="'+backgroundurl+'" style="width:100%;height:100%" class="animationbackground"></div>');
			else $('.interaction-area').prepend('<div class="animationbk" id="animationbk" style="text-align:center;position:absolute;width:100%;height:100%"><img src="'+backgroundurl+'" style="width:100%;height:100%" class="animationbackground"></div>');
		},
		updateanimationinfo:function(){
			this.animationel=$('#info_conf').children('.setting-body');
			this.animationel.empty();
			this.animationel.append('<h3 class="baseinfo">动画序列</h3>');
			this.animationel.append(interaction.template.detail.AnimationGroup());
			this.renderinfosave(this.animationel);
			this.bindanimationsave();		
		},
		updateactioninfo:function(){
			this.actionel=$('#info_action').children('.setting-body');
			this.actionel.empty();
			this.actionel.append('<h3 class="baseinfo">触发器</h3>');
			this.actionel.append(interaction.template.detail.ActionList());
			this.renderinfosave(this.actionel);
			this.bindactionsave();			
		},
		updatepageinfo:function(){
			this.pageinfoel=$('#info_page').children('.setting-body');
			this.pageinfoel.empty();
			this.pageinfoel.append(_.template(PageInfoTemplate,this.model.toJSON()));	
			this.renderinfosave(this.pageinfoel);
			this.bindpageinfo();			
		},
		updateanimationpreviewbackground:function(){
			// var backgroundurl=this.getBackGroundUrl();
			// $('.interaction-view').find('div.animationbk').remove();
			// if(!backgroundurl||backgroundurl=='null'||backgroundurl=='Null'){
				// return;
			// } 			
			// $('.interaction-view').append('<div class="animationbk" style="text-align:center;position:absolute;width:100%;height:100%"><img src="'+backgroundurl+'" style="width:100%;height:100%" class="animationbackground"></div>');
		},
		getBackGroundUrl:function(){
			return this.model.get('picture');
		},
		afterremove:function(){
			this.$el.remove();
			//if(this.model.dommodel) this.model.dommodel.iview.$el.remove();
			if(this.model.id==interaction.currentpage.id) $('#info_dom').children('.setting-body').empty();
		},
		setimageplus:function(){
			return '';
		},
		getimagename:function(imagename){//add this function to get the field of the image which name to get the image url
			//default is use iImglist
			return 'iImg';
		},
		previewbackground:function(){
			var data=this.model.get('preview');
			if(data&&this.model.get('picture')){
				global.simplepreview(data);
			}
		},
		clearbackground:function(){
			var value={};
			value.width=null;
			value.height=null;
			value.preview='<img src="/img/thumb.png">';
			value.thumbnail=null;
			value.thumb_height=null;
			value.thumb_width=null;
			value.picture=null;
			value.uid=null;
		    interaction.currentpage.set(value);
			interaction.currentpage.iview.updatepageinfo();
			interaction.currentpage.iview.updatebackground();
			interaction.currentpage.iview.$el.children('a').html('<img src/>');
		},
		updatethumb:function(){
			this.$el.find('.interaction_thumbitem').remove();
			interaction.thumblist.reset();
			interaction.thumb.init(this.model.id);
		},
		onMouseDown:function(e){
			if(e.which==3){
				interaction.floatmenu.show(iPagelist,[this.model.id],e.pageX,e.pageY);
				e.preventDefault();
			}
		},
		reset:function(data){
			var view=this;
			$('.interaction-area').children('.element').remove();
			this.overlayel.find('li.Dom').remove();
			overlays=data.overlays;
			animations=data.animations;
			actions=data.actions;
			iElementlist.reset([]);
			interaction.elementlist.reset([]);
			_.each(overlays,function(d){
				d.iUrl=context_url+view.model.id;
				d.iParent=view.model.id;
				d.iPageid=view.model.id;
				interaction.elementlist.add(new interaction.model[d.iType](d));
			});
			if(animations){
				this.animationel.find('li.animation-item').remove();
				animations=_.filter(animations,function(i){
					return _.include(interaction.elementlist.pluck('id'),i.overlay_id);
				})
				animations=_.map(animations,function(d){
					return(new interaction.model.AnimationGroupItem(d));
				});		
				interaction.iAnimationlist.reset(animations);		
			}

			interaction.elementlist.each(function(i){
				i.iview.changeZindex();
			})
			if(actions){
				this.actionel.find('li.action-item').remove();
				interaction.iActionList.reset([]);
				_.each(actions,function(i){
					new interaction.model.Action(i);
				})				
			}
			view.updatethumb();			
		}
	})
	window.iPagelist=new interaction.collection.Page();
	interaction.currentpage=null;
})
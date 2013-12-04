define(['interaction/model/base',
"text!interaction/template/animationitemdetail.js",
'text!interaction/template/animationitem.js',
'text!interaction/template/animationpanel.js',
'interaction_view/main'],function(){
var AnimationDetailTemplate=require("text!interaction/template/animationitemdetail.js");
var animationitemT=require('text!interaction/template/animationitem.js');
var animationpanelT=require('text!interaction/template/animationpanel.js');
	interaction.model.AnimationGroupItem=interaction.model.base.extend({
		defaults:{
			iType:'101',//define type
			iDetail:{},
			overlay_id:null,
      		iTiming: {
				start: 1,
				delay: 0,
				duration: 5,
				repeat: 0,
				rewind: false,
				ease:0 
			}
		},
		initialize: function(){
			if(!this.id){//if isnew
				this.set("id",this.get('iType')+"_"+this.cid+interaction.guid());
				this.setcollection();
				this.setmodel();
			}
			else {
				this.setmodel();
			}
		},
		setmodel:function(){
			if(!interaction.iAnimationlist.get(this.id)) interaction.iAnimationlist.add(this);
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
		setsyncmodel:function(){
			var model=this;
			this.elementmodel=interaction.elementlist.get(this.get('overlay_id'));
			if(this.elementmodel) this.elementmodel.on('change:title',function(){
				model.iview.render();
				model.igroupview.render();
			})
			this.on('change:title',function(){
				model.iview.render();
				model.igroupview.render();
			})
		},
		setcollection:function(){},
		setview:function(){
			this.iview=new interaction.view.Animation({model:this});
			this.igroupview=new interaction.view.AnimationGroupItem({model:this});
		},
		url:function(){
		}, //default set to root 
		sync: function(method, model, options) {
		}
	});
	interaction.collection.Animation=interaction.collection.Base.extend({
		setonremove:function(){
			var collection=this;
		},
		confirm:function(){
			interaction.iAnimationGroupForSave.save();
		}
	});
	interaction.view.Animation = interaction.view.Base.extend({
		events:{
			'click div.btn-draged':'edit',
			'click a.animation-edit':'edit',
			'click a.action-del':'remove',
			'mouseover':'mouseover',
			'mouseout':'mouseout',
			'click a.animation-confirm':'unfocus',
			'click a.animation-play':'preview',
		},
		bindinfo:function(){
			var view=this;
			this.settingel.find('button.close').on('click',this.close);
			this.settingel.find('a.animation-confirm').on('click',this.unfocus);
			this.settingel.find('.animationdetail').find('input,select,textarea').bind('change',function(){
				var iTiming_data=interaction.serializeValueSimple(view.settingel.find('.animationdetail'));
				//view.model.set('iTiming',iTiming_data);
				interaction.iAnimationlist.get(view.model.id).set('iTiming',iTiming_data);
				if(iTiming_data.waitaction) {
					interaction.iAnimationlist.get(view.model.id).iview.$el.addClass('waitaction');
					view.$el.addClass('waitaction');
				}
				else {
					interaction.iAnimationlist.get(view.model.id).iview.$el.removeClass('waitaction');
					view.$el.removeClass('waitaction');
				}
			})
			this.settingel.find('.detailitems').find('input,select,textarea').bind('change',function(){
				var iDetail_data=interaction.serializeValueSimple(view.settingel.find('.detailitems'));
				//console.info(iDetail_data);
				//view.model.set('iDetail',iDetail_data);
				interaction.iAnimationlist.get(view.model.id).set('iDetail',iDetail_data);
			})
		},
		destroy:function(){
			var view=this;
			this.$el.remove();
		},
		remove:function(){
			var view=this;
			interaction.confirmDelete(function(){
				if(view.focused) view.close();
				interaction.iAnimationlist.get(view.model.id).destroy();
			})
		},
		render:function(){
			this.settingel=$('div.sidebar > .sub-panel');
			this.animationel=$('#info_attributes').find('fieldset.animation');
			var Model_JSON=this.model.toJSON();
			Model_JSON.notitle=true;
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=_.template(animationitemT,Model_JSON);
			if(this.animationel.find('li[id="'+this.model.id+'"]').length>0) this.$el.replaceWith(el);
			else this.animationel.find('.list').children('ul').append(el);
			this.setElement(this.animationel.find('li[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.get('overlay_id'));
			var iTiming=this.model.toJSON().iTiming;
			if(iTiming.waitaction) this.$el.addClass('waitaction');
			this.$el.find('[rel=tooltip]').tooltip();
			this.$el.find('.btn-draged').hide();
	    	return this;
		},
		mouseover:function(){
			this.model.elementmodel.iview.highlight();
		},
		mouseout:function(){
			this.model.elementmodel.iview.cancelhighlight();
		},
		change:function(){
			
		},
		focus:function(){
			if(interaction.current&&interaction.current.id==this.model.elementmodel.id){
				interaction.changeTab('info_attributes');
			}
			else {
				this.model.elementmodel.iview.focus();
				//this.model.elementmodel.iview.setanimation();
				this.model.elementmodel.iview.animationItem_focus(this.model.id);				
			}

		},
		edit:function(){
			var view=this;
			if(interaction.animation.current&&interaction.animation.current.id!=this.model.id){
				interaction.animation.current.iview.unfocus();
			}
			if(!this.focused||$('div.sidebar > .sub-panel').is(':empty')) {
				this.focused=true;
				this.$el.addClass('edit');
				interaction.animation.current=this.model;
				var Model_JSON=interaction.iAnimationlist.get(this.model.id).toJSON();
				var detailel=_.template(animationpanelT,Model_JSON);
				//this.$el.append(detailel);
				this.settingel.html(detailel);
				interaction.animation.set(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
				this.bindinfo();
			}
			else{
				this.close();
			}
		},
		unfocus:function(){
			interaction.animation.save(this.model.id,this.model.get('overlay_id'),this.model.get('iType'))
			interaction.iAnimationlist.confirm();
			//interaction.animation.close(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
			this.settingel.empty();
			var detail=this.getdetail();
			interaction.animation.current=null;
			this.focused=false;
			this.$el.removeClass('edit');
		},
		close:function(){
			this.settingel.empty();
			interaction.animation.save(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
			interaction.animation.current=null;
			this.focused=false;	
			this.$el.removeClass('edit');		
		},
		preview:function(){
			interaction_view.SinglePreview=true;
			interaction_view.PreviewItemId=this.model.id;
			var view=this;
			$('.interaction-view').find('#jswait-loading').remove();
			interaction.animation.preview();
			var page=interaction_view.ipagelist.get(interaction.currentpage.id);
			page.iAnimationlist.afterTimeLineCreated=function(){
				var labeltime=page.iAnimationlist.timeline.getLabelTime(view.model.id+'_start');
				//console.info(labeltime);
				if(labeltime!=0) labeltime-=0.01;
				page.iAnimationlist.timeline.seek(labeltime,false);
			}
		}
	})
	interaction.view.AnimationGroupItem=interaction.view.Animation.extend({//for animationgroup view
		events:{
			'dblclick div.btn-draged':'focus',
			'dblclick h4':'focus',
			'click a.animation-edit':'edit',
			'click a.action-del':'remove',
			'click a.animation-play':'preview',
			'mouseover':'mouseover',
			'mouseout':'mouseout',
			'click a.animation-confirm':'unfocus'
		},
		render:function(){
			this.settingel=$('div.sidebar > .sub-panel');
			this.animationgroupel=$('#info_conf').children('.setting-body').find('.animations').children('.list').children('ul');	
			this.elementel=interaction.div_find(this.model.get('overlay_id'));
			var Model_JSON=this.model.toJSON();
			Model_JSON.notitle=false;
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=_.template(animationitemT,Model_JSON);
			if(this.animationgroupel.find('li[id="'+this.model.id+'"]').length>0) this.$el.replaceWith(el);
			else this.animationgroupel.append(el);
			this.setElement(this.animationgroupel.find('li[id="'+this.model.id+'"]'));
			var iTiming=this.model.toJSON().iTiming;
			if(iTiming.waitaction) this.$el.addClass('waitaction');
			this.$el.find('[rel=tooltip]').tooltip();
	    	return this;
		}
	})
	interaction.iAnimationlist=new interaction.collection.Animation();
	//interaction.iAnimationlist=new interaction.collection.Animation();
	interaction.iAnimationlist.on('remove',function(){
		interaction.iAnimationlist.confirm();
	})
	interaction.model.AnimationGroupForSave=Backbone.Model.extend({
		initialize:function(){
			this.set('id','AnimationGroup');
		},
		sync: function(method, model, options) {
			var Model_JSON=interaction.iAnimationlist.toJSON();
			this.attributes=Model_JSON;
			if(method=='create'){
				return;
			}
			if(method=='update'){
				options.url=context_url+interaction.currentpage.id+'/setanimations';
			}
			if(method=='delete'){
				return;
			}
			if(method=='read'){
				options.url=context_url+interaction.currentpage.id+'/getanimations';
			}
			Backbone.emulateHTTP = true ;
			Backbone.emulateJSON = true ;
			Backbone.sync(method, model, options);
		}
	})
	interaction.iAnimationGroupForSave=new interaction.model.AnimationGroupForSave({'id':'AnimationGroup'});
})
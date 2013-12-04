var AnimationDetailTemplate=require("text!template/animationitemdetail.js");
(function(interaction){
	interaction.model.Animation=interaction.model.Base.extend({
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
				this.set("id",this.get('iType')+"_"+this.cid+(new Date()).getTime());
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
			this.elementmodel=interaction.elementlist.get(this.get('overlay_id'));
		},
		setcollection:function(){},
		setview:function(){
			this.iview=new interaction.view.Animation({model:this});
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
			'click div.btn-draged':'focus',
			'click a.animation-edit':'focus',
			'click a.action-del':'remove',
			'mouseover':'mouseover',
			'mouseout':'mouseout',
			'click a.animation-confirm':'unfocus',
			'click a.animation-play':'preview',
		},
		bindinfo:function(){
			var view=this;
			this.$el.find('.animationdetail').find('input,select,textarea').bind('change',function(){
				var iTiming_data=interaction.serializeValueSimple(view.$el.find('.animationdetail'));
				//view.model.set('iTiming',iTiming_data);
				interaction.iAnimationGroupList.get(view.model.id).set('iTiming',iTiming_data);
				if(iTiming_data.waitaction) {
					interaction.iAnimationGroupList.get(view.model.id).iview.$el.addClass('waitaction');
					view.$el.addClass('waitaction');
				}
				else {
					interaction.iAnimationGroupList.get(view.model.id).iview.$el.removeClass('waitaction');
					view.$el.removeClass('waitaction');
				}
			})
			this.$el.find('.detailitems').find('input,select,textarea').bind('change',function(){
				var iDetail_data=interaction.serializeValueSimple(view.$el.find('.detailitems'));
				//console.info(iDetail_data);
				//view.model.set('iDetail',iDetail_data);
				interaction.iAnimationGroupList.get(view.model.id).set('iDetail',iDetail_data);
			})
		},
		destroy:function(){
			var view=this;
			//var elementdetail=this.model.elementmodel.iview.getdetail();
			//elementdetail.animations=_.reject(elementdetail.animations,function(i){return i.id==view.model.id});
			//this.model.elementmodel.set('iDetail',elementdetail);
			//this.model.elementmodel.iview.updateanimationgroup('remove',this.model.id);
			this.$el.remove();
		},
		remove:function(){
			var view=this;
			interaction.confirmDelete(function(){
				if(view.focused) view.close();
				interaction.iAnimationGroupList.get(view.model.id).destroy();
			})
		},
		render:function(){
			this.animationel=$('#info_attributes').find('fieldset.animation');
			var Model_JSON=interaction.iAnimationGroupList.get(this.model.id).toJSON();
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=interaction.template.AnimationItem(Model_JSON);
			this.animationel.children('ul').append(el);
			this.setElement(this.animationel.find('li[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.get('overlay_id'));
			var iTiming=this.model.toJSON().iTiming;
			if(iTiming.waitaction) this.$el.addClass('waitaction');
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
			var view=this;
			if(interaction.animation.current&&interaction.animation.current.id!=this.model.id){
				interaction.animation.current.iview.unfocus();
			}
			if(!this.focused) {
				this.focused=true;
				this.$el.addClass('edit');
				interaction.animation.current=this.model;
				var Model_JSON=interaction.iAnimationGroupList.get(this.model.id).toJSON();
				var detailel=_.template(AnimationDetailTemplate,Model_JSON);
				this.$el.append(detailel);
				interaction.animation.set(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
				this.bindinfo();
			}
			else{
				this.$el.find('fieldset.animationitem').remove();
				var detail=this.getdetail();
				interaction.animation.close(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
				//interaction.animation.save(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
				interaction.animation.current=null;
				this.focused=false;
				this.$el.removeClass('edit');
			}
		},
		unfocus:function(){
			interaction.animation.save(this.model.id,this.model.get('overlay_id'),this.model.get('iType'))
			interaction.iAnimationGroupList.confirm();
			//interaction.animation.close(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
			this.$el.find('fieldset.animationitem').remove();
			var detail=this.getdetail();
			interaction.animation.current=null;
			this.focused=false;
			this.$el.removeClass('edit');
		},
		close:function(){
			this.$el.find('fieldset.animationitem').remove();
			interaction.animation.save(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
			interaction.animation.current=null;
			this.focused=false;			
		},
		preview:function(){
			interaction_view.SinglePreview=true;
			interaction_view.PreviewItemId=this.model.id;
			var view=this;
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
	interaction.model.AnimationGroupItem=interaction.model.Animation.extend({
		setmodel:function(){
			if(!interaction.iAnimationGroupList.get(this.id)) interaction.iAnimationGroupList.add(this);
			this.setlist();
			this.setview();
			this.setsyncmodel();
		},
		setview:function(){
			this.iview=new interaction.view.AnimationGroupItem({model:this});
		},		
	})
	interaction.view.AnimationGroupItem=interaction.view.Animation.extend({
		bindinfo:function(){
			var view=this;
			this.$el.find('.animationdetail').find('input,select,textarea').bind('change',function(){
				var iTiming_data=interaction.serializeValueSimple(view.$el.find('.animationdetail'));
				view.model.set('iTiming',iTiming_data);
				if(iTiming_data.waitaction) {
					view.$el.addClass('waitaction');
				}
				else {
					view.$el.removeClass('waitaction');
				}
			})
			this.$el.find('.detailitems').find('input,select,textarea').bind('change',function(){
				var iDetail_data=interaction.serializeValueSimple(view.$el.find('.detailitems'));
				console.info(iDetail_data);
				view.model.set('iDetail',iDetail_data);
			})
		},
		events:{
			'dblclick div.btn-draged':'focus',
			'click a.animation-edit':'edit',
			'click a.action-del':'remove',
			'click a.animation-play':'preview',
			'mouseover':'mouseover',
			'mouseout':'mouseout',
			'click a.animation-confirm':'unfocus'
		},
		destroy:function(){
			var view=this;
			var id=this.model.id;
			if(this.focused) {
				this.close();
			}
			if(interaction.iAnimationlist.get(this.model.id)) interaction.iAnimationlist.get(this.model.id).iview.destroy();
			// var overlaymodel=interaction.elementlist.get(this.model.get('overlay_id'));
			// if(overlaymodel){
				// var elementdetail=overlaymodel.iview.getdetail();
				// if(_.where(elementdetail.animations,{id:this.model.id}).length!=0){
					// elementdetail.animations=_.reject(elementdetail.animations,function(i){return i.id==view.model.id});
					// overlaymodel.set('iDetail',elementdetail);
					// //overlaymodel.iview.updateanimationgroup('remove',this.model.id);			
				// }
				// overlaymodel.save();
			// }
			// if(interaction.elementlist.where({iType:'AnimationGroup'}).length>0){
				// var animationgroup=interaction.elementlist.where({iType:'AnimationGroup'})[0];
				// animationgroupdetail=animationgroup.iview.getdetail();
				// animationgroupdetail.animations=_.reject(animationgroupdetail.animations,function(i){
					// return i.id==id	;			
				// })
				// animationgroup.set('iDetail',animationgroupdetail);
				// animationgroup.iview.confirm();
			// }	
			this.$el.remove();	
		},
		remove:function(){
			var view=this;
			interaction.confirmDelete(function(){
				view.model.destroy();
			})
		},
		render:function(){
			this.animationgroupel=$('#info_conf').children('.setting-body').find('.animations').children('ul');	
			this.elementel=interaction.div_find(this.model.get('overlay_id'));
			var Model_JSON=this.model.toJSON();
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=interaction.template.AnimationItem(this.model.toJSON());
			this.animationgroupel.append(el);
			this.setElement(this.animationgroupel.find('li[id="'+this.model.id+'"]'));
			var iTiming=this.model.toJSON().iTiming;
			if(iTiming.waitaction) this.$el.addClass('waitaction');
	    	return this;
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
			if(!this.focused) {
				this.focused=true;
				this.$el.addClass('edit');
				//interaction.iAnimationlist.reset();
				var overlaymodel=interaction.elementlist.get(this.model.get('overlay_id'));
				//_.each(overlaymodel.toJSON().iDetail.animations,function(i){
				//	new interaction.model.Animation(i);
				//})
				//interaction.iAnimationlist.add(overlaymodel.toJSON().iDetail.animations);
				interaction.animation.current=this.model;
				var detailel=_.template(AnimationDetailTemplate,this.model.toJSON());
				this.$el.append(detailel);
				interaction.animation.set(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
				this.bindinfo();
			}
			else{
				interaction.animation.close(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
				this.$el.find('fieldset.animationitem').remove();
				interaction.animation.current=null;
				this.focused=false;	
				this.$el.removeClass('edit');
			}
		},
		unfocus:function(){
			this.$el.find('fieldset.animationitem').remove();
			interaction.animation.save(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
			//var animationmodel=interaction.iAnimationlist.get(this.model.id);
			//if(animationmodel) animationmodel.set(this.model.toJSON());
			//var overlaymodel=interaction.elementlist.get(this.model.get('overlay_id'));
			//this.model.set(animationmodel.toJSON());
			//overlaymodel.save();
			// if(interaction.elementlist.where({iType:'AnimationGroup'}).length>0){
				// var animationgroup=interaction.elementlist.where({iType:'AnimationGroup'})[0];
				// animationgroup.iview.confirm();
			// }
			interaction.iAnimationGroupList.confirm();
			interaction.animation.current=null;
			this.focused=false;	
			this.$el.removeClass('edit');		
		},
		mouseover:function(){
			if(!this.model.elementmodel) this.model.elementmodel=interaction.elementlist.get(this.model.get('overlay_id'));
			this.model.elementmodel.iview.highlight();
		},
		mouseout:function(){
			if(!this.model.elementmodel) this.model.elementmodel=interaction.elementlist.get(this.model.get('overlay_id'));
			this.model.elementmodel.iview.cancelhighlight();
		}
	})
	interaction.iAnimationGroupList=new interaction.collection.Animation();
	interaction.iAnimationlist=new interaction.collection.Animation();
	interaction.iAnimationGroupList.on('remove',function(){
		interaction.iAnimationGroupList.confirm();
	})
})(interaction);
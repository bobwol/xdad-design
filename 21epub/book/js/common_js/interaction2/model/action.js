define(['interaction/model/base',
	"text!interaction/template/actionitemdetail.js",
	'text!interaction/template/actionitem.js',
	'text!interaction/template/actionpanel.js'],function(){
var ActionDetailTemplate=require("text!interaction/template/actionitemdetail.js");
var ActionPanelT=require('text!interaction/template/actionpanel.js');
var actionitemT=require('text!interaction/template/actionitem.js')
	var returned={};
	interaction.model.Action=interaction.model.base.extend({
		defaults:{
			iType:'101',//define type
			iDetail:null,
			//iAction:{},
			overlay_id:null
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
			if(!interaction.elementlist.get(this.get('overlay_id'))){
				this.destroy();
				return;
			}
			if(!this.get('iDetail')||!this.get('iDetail').results){
				var iDetail={};
				iDetail.results=[{iAction:0,values:[]}];
				this.set('iDetail',iDetail);
			}
			if(!interaction.iActionList.get(this.id)) interaction.iActionList.add(this);
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
			})
			this.on('change:title',function(){
				model.iview.render();
				model.igroupview.render();
			})
		},
		setcollection:function(){},
		setview:function(){
			var model=this;
			this.iview=new interaction.view.Action({model:this});
			this.igroupview=new interaction.view.ActionItem({model:this});
		},
		url:function(){
		}, //default set to root 
		sync: function(method, model, options) {
		}
	});
	interaction.collection.Action=interaction.collection.Base.extend({
		setonremove:function(){
			var collection=this;
		},
		setonadd:function(){
			var collection=this;
		},
		confirm:function(){
			interaction.iActionForSave.save();
		}
	});
	interaction.view.Action = interaction.view.Base.extend({
		events:{
			'dblclick div.btn-draged':'elementfocus',
			'dblclick h4':'elementfocus',
			'click a.action-edit':'focus',
			'click a.action-del':'remove',
			'mouseover .wraparea':'mouseover',
			'mouseout .wraparea':'mouseout',
			'click a.action-confirm':'unfocus',
			'click a.action-play':'preview',
		},
		bindhover:function(){
			var view=this;
			this.settingel.find('ul.detailitems').children('li').each(function(){
				$(this).on('mouseover',function(){
					var detail=view.getdetail();
					actiontype=detail.results[0].iAction;
					if(actiontype==5) return;
					if(actiontype==0){
						var overlayid=interaction.iAnimationlist.get($(this).attr('id')).toJSON().overlay_id;
						var overlay=interaction.elementlist.get(overlayid);
					}
					else var overlay=interaction.elementlist.get($(this).attr('id'));
					overlay.iview.highlight();
				})
				$(this).on('mouseout',function(){
					var detail=view.getdetail();
					actiontype=detail.results[0].iAction;
					if(actiontype==5) return;
					if(actiontype==0){
						var overlayid=interaction.iAnimationlist.get($(this).attr('id')).toJSON().overlay_id;
						var overlay=interaction.elementlist.get(overlayid);
					}
					else var overlay=interaction.elementlist.get($(this).attr('id'));
					overlay.iview.cancelhighlight();
				})
			})
		},
		bindinfo:function(){
			var view=this;
			this.settingel.find('button.close').on('click',this.close);
			this.settingel.find('a.action-confirm').on('click',this.unfocus);
			this.settingel.find('.actiondetail').find('input,select,textarea').bind('change',function(){
				var iAction_data=interaction.serializeValueSimple(view.settingel.find('.actiondetail'));
				//view.model.set('iTiming',iTiming_data);		
				var iDetail=view.getdetail();
				iDetail.results=[];
				iAction_data.values=[];
				iDetail.results.push(iAction_data);
				interaction.iActionList.get(view.model.id).set('iDetail',iDetail);
				var detailel=_.template(ActionPanelT,view.model.toJSON());
				view.settingel.html(detailel);
				view.bindinfo();
				view.bindhover();
				view.model.trigger('change:title');
			})
			this.settingel.find('.detailitems').find('input,select,textarea').bind('change',function(){
				if(view.settingel.find('.detailitems').find('select').siblings('input[type=radio]').length>0){
					var $this=view.settingel.find('.detailitems').find('select');
					if($this.siblings('input[type=radio]').attr('checked')=="checked") $this.removeAttr('disabled');
					else{
						$this.attr('disabled',true);
					}					
				}
				var iDetail_data=interaction.serializeValueSimple(view.settingel.find('.detailitems'));
				var iDetail=view.getdetail();
				if(!iDetail.results){
					iDetail.results=[{iAction:0,values:[]}];
				}
				iDetail.results[0].values=iDetail_data.values;
				interaction.iActionList.get(view.model.id).set('iDetail',iDetail);
			})
		},
		destroy:function(){
			var view=this;
			//var elementdetail=this.model.elementmodel.iview.getdetail();
			//elementdetail.Actions=_.reject(elementdetail.Actions,function(i){return i.id==view.model.id});
			//this.model.elementmodel.set('iDetail',elementdetail);
			//this.model.elementmodel.iview.updateActiongroup('remove',this.model.id);
			this.$el.remove();
		},
		remove:function(){
			var view=this;
			interaction.confirmDelete(function(){
				if(view.focused) view.close();
				interaction.iActionList.get(view.model.id).destroy();
			})
		},
		render:function(){
			this.settingel=$('div.sidebar > .sub-panel');
			this.actionel=$('#info_action').children('.setting-body').find('.actions');
			this.elementactionel=$('#info_attributes').find('fieldset.action');
			var Model_JSON=this.model.toJSON();
			Model_JSON.notitle=false;
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=_.template(actionitemT,Model_JSON);
			if(this.actionel.find('li[id="'+this.model.id+'"]').length>0){
				this.$el.replaceWith(el);
			}
			else this.actionel.find('.list').children('ul').append(el);
			this.setElement(this.actionel.find('li[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.get('overlay_id'));
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
			var view=this;
			if(interaction.action.current&&interaction.action.current.id!=this.model.id){
				interaction.action.current.iview.unfocus();
			}
			if(!this.focused||$('div.sidebar > .sub-panel').is(':empty')) {
				this.focused=true;
				this.$el.addClass('edit');
				interaction.action.current=this.model;
				var Model_JSON=this.model.toJSON();
				var detailel=_.template(ActionPanelT,Model_JSON);
				this.settingel.html(detailel);
				//this.$el.append(detailel);
				//interaction.Action.set(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
				this.bindinfo();
				this.bindhover();
			}
			else{
				this.close();
			}
		},
		unfocus:function(){
			//interaction.action.save(this.model.id,this.model.get('overlay_id'),this.model.get('iType'))
			interaction.iActionList.confirm();
			//interaction.Action.close(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
			this.settingel.empty();
			var detail=this.getdetail();
			interaction.action.current=null;
			this.focused=false;
			this.$el.removeClass('edit');
		},
		close:function(){
			this.settingel.empty();
			//interaction.Action.save(this.model.id,this.model.get('overlay_id'),this.model.get('iType'));
			interaction.action.current=null;
			this.focused=false;			
		},
		preview:function(){
			interaction_view.SinglePreview=true;
			var view=this;
			$('.interaction-view').find('#jswait-loading').remove();
			interaction.animation.preview();
			interaction_view.iAnimationlist.afterTimeLineCreated=function(){
				//var labeltime=interaction_view.iActionList.timeline.getLabelTime(view.model.id+'_start');
				//console.info(labeltime);
				//if(labeltime!=0) labeltime-=0.01;
				//interaction_view.iActionList.timeline.seek(labeltime,false);
			}
		},
		elementfocus:function(){
			if(interaction.current&&interaction.current.id==this.model.elementmodel.id){
				interaction.changeTab('info_attributes');
			}
			else {
				this.model.elementmodel.iview.focus();				
			}
		}
	})
	interaction.view.ActionItem=interaction.view.Action.extend({//for element action render
		events:{
			'click div.btn-draged':'focus',
			'click a.action-edit':'focus',
			'click a.action-del':'remove',
			'mouseover .wraparea':'mouseover',
			'mouseout .wraparea':'mouseout',
			'click a.action-confirm':'unfocus',
			'click a.action-play':'preview',
		},
		render:function(){
			this.settingel=$('div.sidebar > .sub-panel');
			this.actionel=$('#info_action').children('.setting-body').find('.actions');
			this.elementactionel=$('#info_attributes').find('fieldset.actions');
			var Model_JSON=this.model.toJSON();
			Model_JSON.notitle=true;
			//div_createaddDiv(this.model.id,this.model.get('iType'));
			var el=_.template(actionitemT,Model_JSON);
			if(this.elementactionel.find('li[id="'+this.model.id+'"]').length>0){
				this.$el.replaceWith(el);
			}
			else this.elementactionel.find('.list').children('ul').append(el);
			this.setElement(this.elementactionel.find('li[id="'+this.model.id+'"]'));
			this.elementel=interaction.div_find(this.model.get('overlay_id'));
			this.$el.find('[rel=tooltip]').tooltip();
			this.$el.find('.btn-draged').hide();
	    	return this;
		}	
	})
	interaction.model.ActionForSave=Backbone.Model.extend({
		initialize:function(){
			this.set('id','Actions');
		},
		sync: function(method, model, options) {
			var Model_JSON=interaction.iActionList.toJSON();
			this.attributes=Model_JSON;
			if(method=='create'){
				return;
			}
			if(method=='update'){
				options.url=context_url+interaction.currentpage.id+'/setactions';
			}
			if(method=='delete'){
				return;
			}
			if(method=='read'){
				options.url=context_url+interaction.currentpage.id+'/getactions';
			}
			Backbone.emulateHTTP = true ;
			Backbone.emulateJSON = true ;
			Backbone.sync(method, model, options);
		}
	})
	interaction.iActionList=new interaction.collection.Action();
	interaction.iActionList.on('remove',function(){
		interaction.iActionList.confirm();
	})
	interaction.iActionForSave=new interaction.model.ActionForSave({id:'Actions'});
})
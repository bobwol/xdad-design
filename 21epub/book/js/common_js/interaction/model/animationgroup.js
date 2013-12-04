(function(interaction){
	interaction.model.AnimationGroup=interaction.model.Base.extend({
		defaults:{
			iType:'AnimationGroup',//define type
			iLock:true,
			iVisibility:true,
			iCommon:null,
			iDetail:{animations:[]},
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:false,
			iResizable:false,
			iTemplate:null,
			iParentdiv:'.interaction-area',
			iAutoindex:false,
			iSync:true,
			iZindex:'-1',
			iUrl:null,
			iAutofocus:true,
			iKeyscontrol:false,
			callback:null,
			iBackground:null,
			iResources:null,
			iElementattr:null,
			iResourcesProperties:null,
			iTree:null
		},
		initialize: function(){
			this.options=this.get('iOptions');
			if(!this.id){//if isnew
				/* begin to create and save the new model */
				if(interaction.elementlist.where({'iType':'AnimationGroup'}).length>0) {
					this.destroy();
					interaction.elementlist.where({'iType':'AnimationGroup'})[0].iview.focus();
					return false;
				}
				var model=this;
				if(!this.get('iAutoindex')){
					if(this.options.createwait) jqwait_simple();
					this.savemodel(function(returned){
						model.set('id',returned.ID.toString());//set the new model id
						model.setcollection();
						var detail={};
						detail.animations=model.getAnimations()
						model.set('iDetail',{animations:detail.animations});
						model.setmodel();
						model.save();
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
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.AnimationGroup({model:this});
			//this.iview.display();
		},
		setsyncmodel:function(){
			var Model_JSON=this.toJSON();
			Model_JSON.iSync=false;
			this.dommodel=new interaction.model.Dom(Model_JSON);
		},
		getAnimations:function(){
			var animations=[];
			interaction.elementlist.each(function(model){
				if(model.get('iType')=='AnimationGroup') return ;
				var detail=model.iview.getdetail();
				if(detail.animations){
					_.each(detail.animations,function(i){
						animations.push(i);
					})		
				}
			})
			return animations;
		}
	})
	interaction.view.AnimationGroup = interaction.view.Base.extend({
		bindsavebutton:function(){
			var view=this;
			this.animationel.find('.action-save button').bind('click',function(){
				view.confirm();
			})		
		},
		bindsort:function(){
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
					var detail=view.getdetail();
					detail.animations=_.map(animationids,function(i){
						return interaction.iAnimationGroupList.get(i).toJSON();
					})
					interaction.iAnimationGroupList.reset(_.map(animationids,function(i){
						return interaction.iAnimationGroupList.get(i);
					}))
					view.model.set('iDetail',detail);
		        },
			})
		},
		afterremove:function(model,data){
			//model.iview.$el.remove();
			var view=this;
			if(model.dommodel) model.dommodel.iview.$el.remove();
			if(interaction.elementlist.where({'iType':'AnimationGroup'}).length==0) {
				new interaction.model.AnimationGroup({iParent:interaction.elementlist.url,iUrl:context_url+interaction.elementlist.url});
			}			
		},
		render:function(){
			this.infoel=$('#info_attributes').children('.setting-body');
			this.animationel=$('#info_conf').children('.setting-body');
		},
		updateinfo:function(){
			
		},
		renderinfo:function(){
			//var animations=this.model.getAnimations();
			var detail=this.getdetail();
			//detail.animations=animations;
			//this.model.set('detail',detail);
			this.animationel.empty();
			this.animationel.append(interaction.template.info.baseinfo(this.model.toJSON()));
			this.animationel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.renderanimationsinfo();
			this.animationel.append(interaction.template.info.infosave(this.model.toJSON()));
			//this.bindinfo();	
		},
		renderanimationsinfo:function(){
			interaction.iAnimationGroupList.reset();
			var detail=this.getdetail();
			_.each(detail.animations,function(i){
				new interaction.model.AnimationGroupItem(i);
			})
			this.bindsort();
		},
		display:function(){// this function use to focus the div 
			var view=this;
			this.beforefocus();
			this.renderinfo();
			//this.div_focus();
			//if(this.model.dommodel) this.model.dommodel.iview.$el.addClass('active');
			//elementfocus=true;
			this.bindsavebutton();
			this.otherfocus();
		},
		focus:function(){
			interaction.changeTab('info_conf');
		},
		confirm:function(){
			//this.beforeconfirm();
			//this.info_confirm();
			this.model.save();//model update by id
			this.otherconfirm();//call the function to do some operations after confirm
		},
		otherconfirm:function(){
			interaction.iAnimationGroupForSave.save();
		}, 
	})
	interaction.model.AnimationGroupForSave=Backbone.Model.extend({
		initialize:function(){
			this.set('id','AnimationGroup');
		},
		sync: function(method, model, options) {
			var Model_JSON=interaction.iAnimationGroupList.toJSON();
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
})(interaction);
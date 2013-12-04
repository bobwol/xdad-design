/* model varibles */
var hosturl='';
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
				if(this.options&&this.options.createwait) jqwait_simple();
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
		$('#info_attributes').find('input,select,textarea').bind('change',function(){
			var data=interaction.serializeValue('#info_attributes');
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
		this.$el.css('Z-index',interaction.elementlist.indexOf(this.model));
	},
	render: function(){//this render always used for a newly create type to show to display and to focus 
		var JSON=this.model.toJSON();
		var dom=interaction.template.element(this.model.toJSON());
		//div_createaddDiv(this.model.id,this.model.get('iType'));
		var el=interaction.template.element(this.model.toJSON());
		//$('.interaction-area').append(this.make("div", {"class": "element "+JSON.iType}, interaction.template.element(this.model.toJSON())));
		$(this.model.get('iParentdiv')).append(el);
		this.setElement(div_find(this.model.id));
		this.updatebackground();
		this.infoel=$('#info_attributes').children('.setting-body');
    	//this.delegateEvents();
    	return this;
	},
	revert:function(){
		var detail=this.getdetail();
		var iResourcesProperties=this.model.get('iResourcesProperties');
		if(iResourcesProperties){
			if(iResourcesProperties[0].type=="object"){
				var resources=detail[iResourcesProperties[0].id];
				//console.info(resources);
				if(resources){
					if(_.isArray(resources)&&resources[0]){
						var common=this.getcommon();
						common.iWidth=resources[0].width;
						common.iHeight=resources[0].height;
						this.setcommon(common);
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
							model.iview.afterremove(model,response);
						}
						else{
							model_error({
								method:'remove',
								status:returned.Status,
								msg:returned.Message,
								id:id
							})
						}
					},
					error: function(){ 
						jqwait_simple_close();
						model_error({
							method:'remove',
							status:'ServerError',
							msg:'server error or server is not available now,please try again!',
							id:id
						})
					} 
			});
		})
	},
	animation_remove:function(model){
		if(interaction.elementlist.where({iType:'AnimationGroup'}).length>0){
			_.each(interaction.iAnimationGroupList.where({overlay_id:model.id}),function(i){
				i.iview.$el.remove();
				i.destroy({silent:true});
			})
			var animationgroup=interaction.elementlist.where({iType:'AnimationGroup'})[0];
			var animationgroupdetail=animationgroup.iview.getdetail();
			animationgroupdetail.animations=_.reject(animationgroupdetail.animations,function(i){
				return i.overlay_id==model.id					
			})
			animationgroup.set('iDetail',animationgroupdetail);
			animationgroup.iview.confirm();
		}		
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
		if(interaction.elementlist.where({iType:'AnimationGroup'}).length==0) return ;
		var animationgroup=interaction.elementlist.where({iType:'AnimationGroup'})[0];
		var animationgroupdetail=animationgroup.iview.getdetail();
		if(type=='add'){
			var animationmodel=interaction.iAnimationGroupList.get(id);
			new interaction.model.Animation(animationmodel.toJSON());
			this.updateanimation();
			animationgroupdetail.animations.push(animationmodel.toJSON());
			animationgroup.set('iDetail',animationgroupdetail);
			//this.model.save();
			interaction.iAnimationGroupList.confirm();
		}
		if(type=='update'){
			//var animationmodel=interaction.iAnimationlist.get(id);
			animationgroupdetail.animations=interaction.iAnimationGroupList.toJSON();
			animationgroup.set('iDetail',animationgroupdetail);
			this.model.save();
			animationgroup.iview.confirm();
			//interaction.iAnimationGroupList.get(id).set(animationmodel.toJSON());		
		}
		if(type=='remove'){
			animationgroupdetail.animations=_.reject(animationgroupdetail.animations,function(i){
				return i.id==id	;			
			})
			animationgroup.set('iDetail',animationgroupdetail);
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
			zIndex: 2700 ,
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
			zIndex: 2700 ,
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
				var animation=Detail[property.id];
				view.animationel=$('#info_attributes').children('.setting-body').find('fieldset.animation');
				if(animation){
					_.each(animation,function(i){
						new interaction.model.Animation(i);
					})
				}
			})
		}
		this.animationel.find('.action-addanimation').on('click',function(){
			var type=parseInt(view.animationel.find('select.animationtype').val());
			var AnimationItemModel=new interaction.model.AnimationGroupItem({iType:type,overlay_id:view.model.id,iDetail:_.clone(interaction.model.Animation.prototype.defaults.iDetail),iTiming:_.clone(interaction.model.Animation.prototype.defaults.iTiming)});
			view.updateanimationgroup('add',AnimationItemModel.id);
		})
		this.animationel.find('.action-ok').on('click',function(){
			//if(interaction.animation.current) interaction.animation.current.iview.unfocus();
			//view.unsetanimation();
		})
	},
	unsetanimation:function(){
		this.infoel.find('fieldset.animation').remove();		
	},
	animationItem_focus:function(id){
		interaction.iAnimationlist.get(id).iview.focus();
	},
	info_focus:function(){
		interaction.changeTab('info_attributes');// when a focus happy ,alway focus to the info attributes area 
		this.renderinfo();
		this.updateresources();
		this.setanimation();
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
		info_focustab('info_dom');
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
		this.animation_confirm();
		resources_window_close();//close the resources window
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


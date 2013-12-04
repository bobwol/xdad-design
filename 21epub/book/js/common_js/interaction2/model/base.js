define(['global/main',
		'text!interaction/template/element.js',
		'text!interaction/template/animation.js',
		'text!interaction/template/action.js',
		'text!interaction/template/resources.js',
		'text!interaction/template/baseinfo.js',
		'text!interaction/template/infosave.js',
		'text!interaction/template/common.js',
		'text!interaction/template/commonxy.js',
		'interaction/ui/detail'
		], function() {
	var animationT=require('text!interaction/template/animation.js');
	var actionT=require('text!interaction/template/action.js');
	var resourcesT=require('text!interaction/template/resources.js');
	var infosaveT=require('text!interaction/template/infosave.js');
	var commonT=require('text!interaction/template/common.js');
	var commonxyT=require('text!interaction/template/commonxy.js');
	window.iElementlist = null;
	//contain all the elements
	window.iCurrentModel = null;
	if(!window.interaction) window.interaction={};
	if(!interaction.model) interaction.model={};
	if(!interaction.collection) interaction.collection={};
	if(!interaction.view) interaction.view={};
	if(!interaction.template) interaction.template={};
	interaction.template.detail=require('interaction/ui/detail');
	interaction.current=null;
	interaction.elementfocus=window.elementfocus=false;
	interaction.iPageDirection=window.iPageDirection='landscape';
	//current model point, which always point to the current model selected or focused
	var BaseModel = Backbone.Model.extend({
		defaults : {
			iType : 'iBasetype', //define type
			iLock : true,
			iVisibility : true,
			iCommon : {},
			iDetail : {},
			iOptions : {
				iParent : null,
				iParentModel : null,
				iDraggable : true,
				iResizable : true,
				template : null,
				iParentdiv : '.interaction-area',
				iAutoindex : false,
				iSync : true,
				iAutofocus : false,
				iKeyscontrol : true,
			},
			iParent : '',
			iParentModel : null,
			iDraggable : true,
			iResizable : true,
			template : null,
			iParentdiv : '.interaction-area',
			iAutoindex : false,
			iSync : true,
			iZindex : '-1',
			iAutofocus : false,
			iKeyscontrol : true,
			iUrl : null,
			callback : null,
			iBackground : '',
			iResources : null,
			iResourcesType : null,
			iResourcesProperties : null
		},
		options : {
			createwait : true
		},
		initialize : function() {
			this.options = this.get('iOptions');
			if (!this.id) {//if isnew
				/* begin to create and save the new model */
				this.beforecreate();
				var model = this;
				if (!this.get('iAutoindex')) {
					this.savemodel(function(returned) {
						model.set('id', returned.ID.toString());
						model.set('isNew',true);
						if(!model.get('createoptions')){
							model.set('createoptions',{
								focus:true
							})
						}
						//set the new model id
						model.setcollection();
						model.setmodel();
						model.setthumb();
					});
				} else {
					this.set("id",this.get('iType')+"_"+this.cid+interaction.guid());
					this.setcollection();
					this.setmodel();
				}
			} else {
				this.setmodel();
			}
		},
		beforecreate : function() {
		},
		savemodel : function(callback) {
			this.save({}, {
				wait : true,
				success : function(model, response) {
					returned = eval(response);
					if (returned.Status == "Success") {
						if (callback)
							callback(returned);
					} else {
						model_error({
							method : 'create',
							status : returned.Status,
							msg : returned.Message,
							model : model
						})
					}
				},
				error : function() {
					model_error({
						method : 'create',
						status : 'ServerError',
						msg : 'server error or server is not available now,please try again!',
						model : model
					})
				}
			});
		},
		setmodel : function() {
			if (!iElementlist.get(this.id))
				iElementlist.add(this);
			this.setlist();
			this.setview();
			//this.setsyncmodel();
		},
		setthumb:function(){
			this.thumbview=new interaction.view.Thumb({model:this});		
		},
		setlist : function() {
		},
		setresourcesmodel : function() {
		},
		validate : function(attributes) {
			//	console.info(attributes);
		},
		setsyncmodel : function() {
		},
		setcollection : function() {
		},
		setview : function() {
		},
		url : function() {
			if (!this.get('iUrl'))
				this.url = this.collection.url ? this.collection.url : context_url;
		}, //default set to root
		sync : function(method, model, options) {
			if (method == 'create') {
				options.url = this.get('iUrl') + '/overlaycreate.json';
			}
			if (method == 'update') {
				options.url = this.get('iUrl') + '/overlayupdate.json?id=' + model.id;
			}
			if (method == 'delete') {
				options.url = this.get('iUrl') + '/overlaydelete.json?id=' + model.id;
			}
			if (method == 'read') {
				options.url = this.get('iUrl') + '/overlayget.json?id=' + model.id;
			}
			Backbone.emulateHTTP = true;
			Backbone.emulateJSON = true;
			if (this.get('iSync'))
				Backbone.sync(method, model, options);
		},
		getcommon : function() {
			var returned = null;
			var JSON = this.toJSON();
			if (this.get('iCommon')) {
				returned = JSON.iCommon[iPageDirection];
			}
			return returned;
		}
	})

	/* end fo model */

	/* define collections */
	var BaseCollection = Backbone.Collection.extend({
		iSync : false,
		initialize : function() {
			this.setonadd();
			//this set the collection operations when a model add to it
			this.setonremove();
			this.setonreset();
			//this set the collection operations when a model remove form it
		},
		setonadd : function() {
		},
		setonremove : function() {
		},
		bindremove:function(){
			
		},
		setonreset:function(){
			
		},
		url : '',
		sync : function(method, model, options) {
			if (this.iSync) {
				if (method == 'read') {
					options.url = context_url + this.url + '/overlayinit.json';
				}
				Backbone.emulateHTTP = true;
				Backbone.emulateJSON = true;
				Backbone.sync(method, model, options);
			}
		},
		parse : function(data) {
		},
		cloneAll:function(){
			var result=[];
			this.each(function(model){
				result.push($.extend(true,{},model.toJSON()));
			})
			return result;
		}
	})
	window.iElementCollection = BaseCollection.extend({//contain all elements include root node

	})
	/* end of collections */

	/* define view */
	var BaseView = Backbone.View.extend({
		initialize : function(options) {
			//this.el=this.el='.element[id="'+this.model.id+'"]';
			//this.id=this.model.id;
			_.bindAll(this);
			/*model change control
			 there are serveral cases , the model's attr change
			 the div need to change
			 the form need to change
			 sometimes ,these changes happens together ,but sometimes not
			 */
			this.model.bind('destroy', this.destroy);
			this.model.bind('change', this.change);
			this.initstart();
			//this function use to start the model's collection to init fatch childs
		},
		bindresourcesupload : function() {
			var view = this;
			this.resourcesel.find('.action-file').on('click', function(e,isNew) {//this live to the resources button handle
				console.log(isNew);
				var attr = $(this).parents('fieldset.resources').first().attr('id');
				view.resourcesattr = attr;
				view.resourcestype = $(this).attr('data-type');
				interaction.resources.open(view.model.get('iType'));
			})
			this.resourcesel.find('.action-fullsize').on('click',function(){
				view.revert();
			})
			this.resourcesel.find('[rel=tooltip]').tooltip();
		},
		bindinfo : function() {
			var view = this;
			var model = this.model;
			$('#info_attributes').find('input,select,textarea').unbind('change');
			$('#info_attributes').find('input,select,textarea').bind('change', function(event,opt) {
				if(opt&&opt.undodata) ;
				else view.storeundodata();
				var data = interaction.serializeValue('#info_attributes');
				if (data.common) {
					view.setcommon(data.common);
					view.updatepos();
					view.updatebackground();
				}
				if (data.detail) {
					view.setdetail(data.detail);
				}
				if ($(this).is('select')) {
					//console.info($(this).is('select'));
					view.updateinfo();
				}
				var key=$(this).attr('name');
				view.infochange(key,data.detail[key]);
				view.undosave(2);
			})
		},
		bindsavebutton : function() {
			var view = this;
			this.infoel.find('.action-save button').bind('click', function() {
				view.confirm();
			})
		},
		bindanimation : function() {
			var view = this;
			this.animationel.find('.action-addanimation').on('click', function() {
				var type = parseInt(view.animationel.find('select.animationtype').val());
				var AnimationItemModel = new interaction.model.AnimationGroupItem({
					iType : type,
					overlay_id : view.model.id,
					iDetail : _.clone(interaction.model.AnimationGroupItem.prototype.defaults.iDetail),
					iTiming : _.clone(interaction.model.AnimationGroupItem.prototype.defaults.iTiming)
				});
				view.updateanimationgroup('add', AnimationItemModel.id);
				AnimationItemModel.iview.edit();
			})
		},
		bindaction : function() {
			var view = this;
			this.actionel.find('.action-addaction').on('click', function() {
				var type = parseInt(view.actionel.find('select.actiontype').val());
				var ActionItemModel = new interaction.model.Action({
					iType : type,
					overlay_id : view.model.id,
					iDetail : _.clone(interaction.model.AnimationGroupItem.prototype.defaults.iDetail)
				});
				interaction.iActionList.confirm();
				ActionItemModel.iview.focus();
				//view.updateanimationgroup('add',AnimationItemModel.id);
			})
		},
		binddraggable:function(delta){
			var view=this;
			$('div.element.ui-selected').each(function(){
				var id=$(this).attr('id');
				if(id!=view.model.id){
					$(this).css('left',parseInt($(this).css('left'))+delta.x);
					$(this).css('top',parseInt($(this).css('top'))+delta.y);
					interaction.elementlist.get(id).iview.updateposbydelta(delta);
				}
			})
		},
		bindsave:function(){
			var view=this;
			$('div.element.ui-selected').each(function(){
				var id=$(this).attr('id');
				interaction.elementlist.get(id).save();
			})				
		},
		bindremove:function(){
			var view=this;
			$('div.element.ui-selected').each(function(){
				var id=$(this).attr('id');
				if(id!=view.model.id){
					interaction.elementlist.get(id).iview.removesimple();
				}
			})			
		},
		initstart : function() {//so this function always called with the view start
			this.render();
			if(this.model.get('isNew')){
				var createoptions=this.model.get('createoptions');
				this.model.unset('isNew');
				if(createoptions.focus) this.focus();
				this.afternewcreate();
				this.model.unset('createoptions');
			}
		},
		infochange:function(key){
			if(key=='title') this.model.trigger('change:title');
		},
		afternewcreate:function(){
			this.storeundodata();
			this.undosave(0);
			if(this.model.afternewcreated) this.model.afternewcreated(this.model.id);
			else{
				this.resourcesel = $('#info_attributes').children('.setting-body').find('div.resources');
				if(this.model.get('iType')!="RichText"){
					if(this.resourcesel) this.resourcesel.find('.action-file').first().trigger('click',true);
				}			
			}
		},
		events : {
			"contextmenu":'onMouseDown',
			"mousedown .iContent" : "focus",
			"click .iContent" : "focus",
			"click button.action-done" : "confirm",
			"click button.action-del" : "removemodel",
			//"click button.action-cancel" : "revert",
			"mouseover" : "mouseover",
			"mouseout" : "mouseout",
			'dblclick .iContent':'setresources'
		},
		setresources:function(){
			if(this.resourcesel) this.resourcesel.find('.action-file').trigger('click');
		},
		options : {
			aspectRatio : false
		},
		change : function(attributes) {
			//console.info(attributes);
		},
		changeZindex : function() {
			this.$el.css('z-index', interaction.elementlist.indexOf(this.model));
		},
		render : function() {//this render always used for a newly create type to show to display and to focus
			var JSON = this.model.toJSON();
			var elementT=require('text!interaction/template/element.js');
			var el = _.template(elementT,this.model.toJSON());
			$(this.model.get('iParentdiv')).append(el);
			this.setElement(interaction.div_find(this.model.id));
			this.updatebackground();
			if (this.model.get('iDraggable'))
				this.setdraggable();
			if (this.model.get('iResizable'))
				this.setresizable();
			this.infoel = $('#info_attributes').children('.setting-body');
			return this;
		},
		revert : function() {
			var detail = this.getdetail();
			var iResourcesProperties = this.model.get('iResourcesProperties');
			if (iResourcesProperties) {
				if (iResourcesProperties[0].category == "image") {
					var resources = detail[iResourcesProperties[0].id];
					//console.info(resources);
					if (resources) {
						if (_.isArray(resources) && resources[0]) {
							this.storeundodata();
							var common = this.getcommon();
							common.iWidth = resources[0].width;
							common.iHeight = resources[0].height;
							this.setcommon(common);
							this.updatepos();
							this.updateinfo();
							this.undosave(2);
						}
						//else interaction.iResourceslist.add(new interaction.model.Resources({elementid:model.id,picture:resources,resourcesattr:property.id}));
					}
				}

			}
		},
		renderCentrolPos : function(pos) {
			var common = this.getcommon();
			this.$el.css('left', (pos.x - common.iWidth / 2) + "px");
			this.$el.css('top', (pos.y - common.iHeight / 2) + "px");
			//document.getElementById(this.model.id).style.left=pos.x-;
		},
		renderbaseinfo:function(){
			var baseinfoT=require('text!interaction/template/baseinfo.js');
			this.infoel.append(_.template(baseinfoT,this.model.toJSON()));
		},
		renderinfosave:function(target){
			if(!target) this.infoel.append(_.template(infosaveT,{}));
			else target.append(_.template(infosaveT,{}));
		},
		renderposition:function(xy){
			var template=xy?commonxyT:commonT;
			if (this.model.get('iCommon'))
				this.infoel.append(_.template(template,this.model.toJSON()));			
		},
		renderinfo : function() {
			this.infoel = $('#info_attributes').children('.setting-body');
			this.infoel.empty();
			this.renderbaseinfo();
			this.renderposition();
			if(interaction.template.detail[this.model.get('iType')]) this.infoel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			if (this.model.get('iElementattr'))
				this.updateelementattr();
			this.renderinfosave(this.infoel);
			this.bindinfo();
		},
		removemodel : function() {//create a jqwait to handle remove , not mutiple remove allowed ,can be customed
			var view = this;
			interaction.confirmDelete(function() {
				jqwait_simple({
					modal : false
				});
				view.removeexecute();
			})
		},
		removesimple:function(){
			this.model.destroy({
								wait : true,
								success : function(model, response) {
									returned = eval(response);
									if (returned.Status == "Success" || returned.code == 200) {
										model.iview.animation_remove(model);
										model.iview.action_remove(model);
										model.iview.afterremove(model, response);
										model.trigger('change:remove');
									} else {
										global.message('error', '出错');
									}
								},
								error : function() {
									global.message('error', '出错');
								}
			});				
		},
		removeexecute:function(){
			var view=this;
			view.model.destroy({
				wait : true,
				success : function(model, response) {
					returned = eval(response);
					jqwait_simple_close();
					if (returned.Status == "Success" || returned.code == 200) {
						model.iview.animation_remove(model);
						model.iview.action_remove(model);
						model.iview.afterremove(model, response);
						model.iview.bindremove();
						model.trigger('change:remove');
					} else {
						global.message('error', '出错');
					}
				},
				error : function() {
					jqwait_simple_close();
					global.message('error', '出错');
				}
			});			
		},
		animation_remove : function() {
			_.each(interaction.iAnimationlist.where({
				overlay_id : this.model.id
			}), function(i) {
				i.iview.$el.remove();
				i.destroy();
			})
			//interaction.iAnimationGroupList.confirm();
		},
		action_remove : function() {
			_.each(interaction.iActionList.where({
				overlay_id : this.model.id
			}), function(i) {
				i.iview.$el.remove();
				i.destroy();
			})
			//interaction.iAnimationGroupList.confirm();
		},
		afterremove : function(model, data) {
			this.$el.remove();
			var view = this;
			if (this.model.domview)
				this.model.domview.$el.remove();
			if (interaction.current && this.model.id == interaction.current.id) {
				$('div#info_attributes').children('.setting-body').empty();
				$('div#info_resources').children('ul').empty();
				this.infoel.empty();
				elementfocus = false;
				interaction.current=iCurrentModel=null;
				this.unsetkeyscontrol();
				interaction.changeTab('info_page');
			}
		},
		destroy : function(model, data) {
		},
		update:function(data){
			if(data) this.model.set(data);
			this.updatepos();
			this.updateinfo();
			this.updatebackground();
			this.updateresources();
			this.model.trigger('change:position');
			this.model.trigger('change:background');
			if(this.model.get('iType')=="RichText") this.model.trigger('change:text');	
		},
		updatepos : function() {
			var common = this.getcommon();
			if (common) {
				this.$el.css('left', common.iStartx + 'px');
				this.$el.css('top', common.iStarty + 'px');
				this.$el.width(common.iWidth);
				this.$el.height(common.iHeight);
			}
		},
		updateposbydelta:function(delta){
			var common=this.getcommon();
			if(common){
				common.iStartx+=delta.x;
				common.iStarty+=delta.y;
				//this.$el.css('left', common.iStartx);
				//this.$el.css('top', common.iStarty);
				this.setcommon(common);
			}
		},
		updateel : function() {
			if (this.model.get('iTemplate'))
				this.$el.html(this.model.get('iTemplate')(this.model.toJSON()));
		},
		updateposition:function(xy){
			var template=xy?commonxyT:commonT;
			if (this.model.get('iCommon'))
				this.infoel.find('.Pos').replaceWith(_.template(commonT,this.model.toJSON()));			
		},
		updateinfo : function() {
			//$('#info_attributes').html(interaction.template.form[this.model.get('iType')](this.model.toJSON()));
			if(interaction.current&&interaction.current.id==this.model.id){
				this.updateposition();
				if(interaction.template.detail[this.model.get('iType')]) this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
				if (this.model.get('iElementattr'))
					this.updateelementattr();
				this.bindinfo();				
			}
		},
		updatebackground : function() {
			if (this.model.get('iCommon')) {
				var backgroundurl = this.getBackGroundUrl();
				if (backgroundurl) {
					this.$el.find('.iContent').html('<img src="' + backgroundurl + '" style="width:100%;height:100%">');
				} else {
					this.$el.find('.iContent').empty();
				}
				this.model.trigger('change:background');
			}
		},
		updateresources : function() {
			this.resourcesel = $('#info_attributes').children('.setting-body').find('div.resources');
			var view = this;
			var model = this.model;
			interaction.iResourceslist.reset();
			this.resourcesel.empty();
			var iResourcesProperties = this.model.get('iResourcesProperties');
			if (iResourcesProperties) {
				var Detail = this.getdetail();
				_.each(iResourcesProperties, function(property) {
					//view.resourcespatch(property);//resources upgrade
					view.resourcesel.append(_.template(resourcesT,{
						id : property.id,
						type : property.type,
						title:property.title
					}));
					var resources = Detail[property.id];
					//console.info(resources);
					if (resources) {
						if (_.isArray(resources)) {
							_.each(resources, function(resource) {
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
		// updateanimation : function() {
			// var detail = this.getdetail();
			// detail.animations = _.where(interaction.iAnimationGroupList.toJSON(), {
				// overlay_id : this.model.id
			// });
			// this.model.set('iDetail', detail);
		// },
		updateanimationgroup : function(type, id) {
			//var animationgroup=interaction.elementlist.where({iType:'AnimationGroup'})[0];
			//var animationgroupdetail=animationgroup.iview.getdetail();
			if (type == 'add') {
				//var animationmodel = interaction.iAnimationGroupList.get(id);
				//new interaction.model.Animation(animationmodel.toJSON());
				//this.updateanimation();
				interaction.iAnimationlist.confirm();
			}
			if (type == 'update') {
				interaction.iAnimationlist.confirm();
			}
			if (type == 'remove') {
				interaction.iAnimationlist.get(id).destroy();
			}
		},
		updateelementattr : function() {
			$('#info_attributes .elementlist').children('ul').empty();
			interaction.iElementattrlist.reset();
			var view = this;
			interaction.elementlist.each(function(model) {
				var JSON = model.toJSON();
				interaction.iElementattrlist.add(new interaction.model.Elementattr({
					id : JSON.id,
					elementid : view.model.id,
					iType : JSON.iType
				}));
			})
		},
		getBackGroundUrl : function() {
			var Detail = this.model.get('iDetail');
			if (Detail.iImg) {
				if (_.isString(Detail.iImg))
					return Detail.iImg;
				else if (Detail.iImg[0])
					return Detail.iImg[0].picture;
			} else
				return false;
		},
		getBackGroundThumbUrl:function(){
			var Detail = this.model.get('iDetail');
			if (Detail.iImg) {
				if (Detail.iImg[0])
					return Detail.iImg[0].thumbnail;
			} else
				return false;			
		},
		getcommon : function() {
			var returned = null;
			var JSON = this.model.toJSON();
			if (this.model.get('iCommon')) {
				returned = JSON.iCommon[iPageDirection];
			}
			return returned;
		},
		getdetail : function() {
			var JSON = this.model.toJSON();
			return JSON.iDetail;
		},
		getCentralPos : function() {
			var pos = {};
			var common = this.getcommon();
			pos.x = common.iStartx + common.iWidth / 2;
			pos.y = common.iStarty + common.iHeight / 2;
			return pos;
		},
		getCommonByCentralPos : function(pos) {
			var common = this.getcommon();
			common.iStartx = pos.x - common.iWidth / 2;
			common.iStarty = pos.y - common.iHight / 2;
			return common;
		},
		setcommon : function(common) {
			var JSON = this.model.toJSON();
			var iCommon = JSON.iCommon;
			if (!_.isNaN(common.iStartx) && !_.isNaN(common.iStarty) && !_.isNaN(common.iWidth) && !_.isNaN(common.iHeight))
				iCommon[iPageDirection] = common;
			//console.info(iCommon);
			//this.model.set('iCommon',null);
			this.model.set('iCommon', iCommon);
			this.model.trigger('change:position');
		},
		setdetail : function(data) {
			var JSON = this.model.toJSON();
			var detail = JSON.iDetail;
			_.each(_.keys(data), function(key) {
				detail[key] = data[key];
			})
			this.model.set('iDetail', detail);
			// if (this.model.dommodel) {
				// this.model.dommodel.set('iDetail', this.model.toJSON().iDetail);
				// this.model.dommodel.iview.change();
			// }
			this.updateinfo();
			this.updatebackground();
			this.model.trigger('change:detail');
			//this.updateresources();
		},
		setCentralPos : function(pos) {
			var common = this.getcommon();
			common.iStartx = pos.x - common.iWidth / 2;
			common.iStarty = pos.y - common.iHight / 2;
			this.setcommon(common);
		},
		otherkeyshandle:function(code){
			
		},
		keyshandle : function(event, ui) {
			//alert('key');
			var common = this.getcommon();
			var id = this.model.id;
			var code = (event.keyCode ? event.keyCode : event.which);
			var changed = false;
			this.storeundodata();
			if(this.activeEditor){
				this.keyshandlefortext(code);
				return;
			}
			if(this.mapEditor){
				this.keyshandleformap(code);
				return;
			}
			if (shiftkey) {
				this.options.aspectRatio = true;
			}
			if (code == 27) {//left
				//this.confirm();
			}
			if (code == 37) {//left
				changed = true;
				common.iStartx = Number(common.iStartx) - 1;
				if(shiftkey) common.iWidth = Number(common.iWidth) + 1;
			}
			if (code == 38) {//up
				common.iStarty = Number(common.iStarty) - 1;
				if(shiftkey) common.iHeight = Number(common.iHeight) + 1;
				changed = true;
			}
			if (code == 39) {//right
				if(!shiftkey) common.iStartx = Number(common.iStartx) + 1;
				if(shiftkey) common.iWidth = Number(common.iWidth) + 1;
				changed = true;
			}
			if (code == 40) {//down
				if(!shiftkey) common.iStarty = Number(common.iStarty) + 1;
				if(shiftkey) common.iHeight = Number(common.iHeight) + 1;
				changed = true;
			}
			if (code == 46||code==8) {//Delete或者backspace
				if(!$(event.target).is('input[type=text]')){
					//this.removemodel();
					var ids=_.map($('.element.ui-selected'),function(element){
						return $(element).attr('id');
					})
					interaction.util.batch_remove_overlays(ids);
					event.preventDefault();				
				}
			}
			this.otherkeyshandle(code);
			if (changed == true) {
				event.preventDefault();
				check = 'ok';
				//check=coordinationcheck(id,common.iStartx,common.iStarty,common.iWidth,common.iHeight);
				if (check == 'ok') {
					this.setcommon(common);
					this.updatepos();
					this.updateinfo();
					this.updatebackground();
					this.undosave(1);
					//this.updateresources();
				}
			}
		},
		setresizable : function() {
			if (!this.model.get('iResizable'))
				return false;
			var view = this;
			var model = this.model;
			this.$el.resizable({
				//containment: iParentdiv ,
				handles : 'all',
				//zIndex: 2700 ,
				start:function(event,ui){
					view.storeundodata();
				},
				resize : function(event, ui) {
					$(this).find('.mceEditor').addClass('hide');
					var pos = $(this).position();
					var iStartx = Number(pos.left);
					var iStarty = Number(pos.top);
					var width = Number($(this).width());
					var height = Number($(this).height());
					var common = view.getcommon();
					if (view.options.aspectRatio) {
						view.$el.resizable("option", "aspectRatio", 1);
					} else
						view.$el.resizable("option", "aspectRatio", null);
					common.iWidth = Number(width);
					common.iHeight = Number(height);
					common.iStartx = iStartx;
					common.iStarty = iStarty;
					//if(this.options.aspectRatio) common.iHeight
					view.setcommon(common);
					view.updatepos();
					view.updateinfo();
					view.updatebackground();
					//view.updateresources();
				},
				create : function(event, ui) {
				},
				stop : function(event, ui) {
					$(this).find('.mceEditor').removeClass('hide');
					var width = $(this).width();
					var height = $(this).height();
					var common = view.getcommon();
					common.iWidth = Number(width);
					common.iHeight = Number(height);
					view.setcommon(common);
					view.updatepos();
					view.updateinfo();
					view.updatebackground();
					view.undosave(2);
					//view.updateresources();
				}
			});
		},
		unsetresizable : function() {
			if (this.model.get('iResizable'))
				this.$el.resizable('destroy');
		},
		setdraggable : function() {
			if (!this.model.get('iDraggable'))
				return false;
			var view = this;
			var model = this.model;
			var dragdata=null;
			this.$el.draggable({
				//containment: iParentdiv ,
				//zIndex: 2700 ,
				//handle:'.action-active',
				//snap: true,
				create : function(event, ui) {
				},
				start:function(event,ui){
					view.storeundodata();
				},
				drag : function(event, ui) {
					var Pos = $(this).position();
					var common = view.getcommon();
					var delta={
						x:Number(Pos.left)-common.iStartx,
						y:Number(Pos.top)-common.iStarty
					};
					//view.binddraggable(delta);
					common.iStartx = Number(Pos.left);
					common.iStarty = Number(Pos.top);
					view.setcommon(common);
					view.updateinfo();	
					if($('.element.ui-selected').length>1){
						var ids=_.map($('.element.ui-selected'),function(element){
							return $(element).attr('id');
						})
						interaction.util.batch_drag_overlays(ids,delta);
					}					
				},
				stop : function(event, ui) {
					var Pos = $(this).position();
					var common = view.getcommon();
					var delta={
						x:Number(Pos.left)-common.iStartx,
						y:Number(Pos.top)-common.iStarty
					};
					//view.binddraggable(delta);
					common.iStartx = Number(Pos.left);
					common.iStarty = Number(Pos.top);
					view.setcommon(common);
					view.updateinfo();	
					if($('.element.ui-selected').length>1){
						var ids=_.map($('.element.ui-selected'),function(element){
							return $(element).attr('id');
						})
						interaction.util.batch_drag_overlays(ids,delta);
						interaction.elementlist.confirm();
						view.undosave(2,true);	
					}
					else{
						view.undosave(2);
						view.model.save();
					}
				}
			});
		},
		unsetdraggable : function() {
			if (this.model.get('iDraggable'))
				this.$el.draggable('destroy');
		},
		setkeyscontrol : function() {
			$(document).bind('keydown', this.keyshandle);
		},
		unsetkeyscontrol : function() {
			$(document).unbind('keydown', this.keyshandle);
		},
		setanimation : function() {
			this.animationel = $('#info_attributes').children('.setting-body').find('.animations_area');
			var view = this;
			var model = this.model;
			this.animationel.find('fieldset.animation').remove();
			//interaction.iAnimationlist.reset();
			var iAnimationProperties = this.model.get('iAnimationProperties');
			if (iAnimationProperties) {
				var Detail = this.getdetail();
				_.each(iAnimationProperties, function(property) {
					view.animationel.append(_.template(animationT,{
						id : property.id,
						type : property.type
					}));
					var animation = interaction.iAnimationlist.where({
						overlay_id : view.model.id
					});
					view.animationel = $('#info_attributes').children('.setting-body').find('fieldset.animation');
					if (animation) {
						_.each(animation, function(i) {
							i.iview.render();
						})
					}
				})
			}
			this.bindanimation();
		},
		unsetanimation : function() {
			this.infoel.find('fieldset.animation').remove();
		},
		setaction : function() {
			this.actionel = $('#info_attributes').children('.setting-body').find('.actions_area');
			var view = this;
			var model = this.model;
			this.actionel.find('fieldset.actions').remove();
			//interaction.iActionList.reset();
			var iActionProperties = this.model.get('iActionProperties');
			if (iActionProperties) {
				var Detail = this.getdetail();
				_.each(iActionProperties, function(property) {
					view.actionel.append(_.template(actionT,{
						id : property.id,
						type : property.type
					}));
					var actions = interaction.iActionList.where({
						overlay_id : view.model.id
					});
					if (actions) {
						_.each(actions, function(i) {
							i.igroupview.render();
						})
					}
				})
			}
			this.bindaction();
		},
		animationItem_focus : function(id) {
			interaction.iAnimationlist.get(id).iview.focus();
		},
		info_focus : function() {
			interaction.changeTab('info_attributes');
			// when a focus happy ,alway focus to the info attributes area
			this.renderinfo();
			this.updateresources();
			this.setanimation();
			this.setaction();
			this.bindinfo();
		},
		div_focus : function() {//add this new function to handle when the focus operation is all about the element
			this.unlock();
			//unlock this div for change and move
			//div_setparenttop(this.model.id);//set the parent div to top
			this.$el.addClass('selected');
			this.$el.addClass('active');
			this.$el.removeClass('iShadow');
			if(!this.$el.hasClass('ui-selected')) {
				this.$el.addClass('ui-selected');
				if(!shiftkey) $('div.element:not([id="'+this.model.id+'"])').removeClass('ui-selected');
			}
			if (this.model.get('iKeyscontrol'))
				this.setkeyscontrol();
			//begin the keyscontrol it , alert that this keycontrol can only apple to the current focused item
		},
		focus : function(e) {// this function use to focus the div
			if(ctrlkey){
				this.$el.removeClass('ui-selected');
				if (interaction.current&&interaction.current.id==this.model.id) this.confirm();
				return;
			}
			if(e&&e.which==3) return;
			var view = this;
			if (elementfocus == true && iCurrentModel && iCurrentModel.id == this.model.id) {
				interaction.changeTab('info_attributes');
			} else {
				if (elementfocus == true && iCurrentModel) {//end the previous element and to operate the next
					iCurrentModel.iview.confirm();
				}
				interaction.current = iCurrentModel = this.model;
				//set currentmodel to this
				this.beforefocus();
				this.info_focus();
				this.div_focus();
				if (this.model.domview)
					this.model.domview.$el.addClass('active');
				elementfocus = true;
				this.bindsavebutton();
				this.otherfocus();
			}
		},
		beforefocus : function() {
		},
		otherfocus : function() {
		},
		info_confirm : function() {//the info attributes confirm
			$('div#info_attributes').children('.setting-body').empty();
			$('div#info_resources').children('ul').empty();
			interaction.changeTab('info_page');
		},
		resetbutton : function() {//reset the element buttons which may remove the button area or remove specific buttons
			$('div.info_window').dialog("option", "buttons", {});
			//remove the info save button
			div_removecontrolbutton(this.model.id);
			//remove the control buttons
		},
		div_confirm : function() {//div operation when confirm occur
			// if (this.model.get('iDraggable'))
				// this.unsetdraggable();
			// if (this.model.get('iResizable'))
				// this.unsetresizable();
			if (this.model.get('iKeyscontrol'))
				this.unsetkeyscontrol();
			this.$el.removeClass('selected');
			this.$el.removeClass('active');
			//this.$el.removeClass('ui-selected');
			this.lock();
			if(shiftkey) this.$el.addClass('ui-selected');
			//lock the div , so it can't be changed
			this.changeZindex();
		},
		animation_confirm : function() {

		},
		confirm : function() {
			this.beforeconfirm();
			this.info_confirm();
			this.div_confirm();
			if (interaction.animation.current)
				interaction.animation.current.iview.unfocus();
			this.model.save();
			if (this.model.domview)
				this.model.domview.$el.removeClass('active');
			interaction.current = elementfocus = false;
			// no element focus now
			this.otherconfirm();
			global.change=false;
			//call the function to do some operations after confirm
		},
		beforeconfirm : function() {
		},
		otherconfirm : function() {
		},
		highlight : function() {
			this.$el.addClass('iShadow');
		},
		cancelhighlight : function() {
			this.$el.removeClass('iShadow');
		},
		mouseover : function() {
			if (interaction.current && interaction.current.id == this.model.id)
				return;
			//this.$el.addClass('iShadow');
		},
		mouseout : function() {
			if (interaction.current && interaction.current.id == this.model.id)
				return;
			//this.$el.removeClass('iShadow');
		},
		lock : function() {
			this.model.set('iLock', true);
			//this.$el.children('span.iType').children('a#iLock').addClass('lock');
		},
		unlock : function() {
			this.model.set('iLock', false);
			//this.$el.children('span.iType').children('a#iLock').removeClass('lock');
		},
		showdiv : function() {
			this.$el.removeClass('hide');
			//this.model.set('iVisibility', true);
		},
		hidediv : function() {
			this.$el.addClass('hide');
			//this.model.set('iVisibility', false);
		},
		onMouseDown:function(e){
			if(ctrlkey){
				//e.preventDefault();
				return false;
			}
			else if(e.which==3&&!this.activeEditor){
				this.focus();
				var ids=_.map($('.element.ui-selected'),function(i){
					return $(i).attr('id');
				})
				interaction.floatmenu.show(interaction.elementlist,ids,e.pageX,e.pageY);
				e.preventDefault();
				return false;
			}
		},
		storeundodata:function(){
			this.prevdata=$.extend(true,{},this.model.toJSON());
			this.prevalldata=_.map(interaction.elementlist.toJSON(),function(model){
				return $.extend(true,{},model);
			})
		},
		undosave:function(optype,mutiple){
			var opt={
				iOptype:optype,
				iMutiple:mutiple,
				iObj:1,
				iPrevData:this.prevdata,
				iPrevAllData:this.prevalldata,
				iCurrentData:$.extend(true,{},this.model.toJSON())
			}
			interaction.step.save(opt);
		}
	})
	interaction.model.base=BaseModel;
	interaction.collection.Base=BaseCollection;
	interaction.view.Base=BaseView;
	window.iElementlist = new iElementCollection;
})

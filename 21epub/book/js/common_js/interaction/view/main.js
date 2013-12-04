window.interaction_view={
	model:{
		Base:Backbone.Model.extend({
			defaults:{
				iType:'iBasetype',//define type
				iLock:true,
				iVisibility:true,
				iCommon:null,
				iDetail:null,
				iOptions:{
					iParent:null,
					iParentModel:null,
					iDraggable:true,
					iResizable:true,
					template:null,
					iParentdiv:'.interaction-view',
					iAutoindex:false,
					iSync:false,
					iKeyscontrol:true,
				},
				iPage:null,
				iParent:'',
				iParentModel:null,
				iDraggable:true,
				iResizable:true,
				template:null,
				iParentdiv:'.interaction-view',
				iAutoindex:false,
				iSync:false,
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
						if(this.options.createwait) jqwait_simple();
						this.savemodel(function(returned){
							model.set('id',returned.ID.toString());//set the new model id
							model.setcollection();
							model.setmodel();
						});
					}
					else{
						this.set("id",this.get('iType')+"_"+this.cid+(new Date()).getTime());
						this.setcollection();
						this.setmodel();
					}
				}
				else {
					this.setcollection();
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
				this.page=interaction_view.ipagelist.get(this.get('pageid'));
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
				//if(!this.get('iUrl')) this.url=this.collection.url?this.collection.url:context_url;
			}, //default set to root 
			sync: function(method, model, options) {
				// if(method=='create'){
					// options.url=this.get('iUrl')+'/overlaycreate.json';
				// }
				// if(method=='update'){
					// options.url=this.get('iUrl')+'/overlayupdate.json?id='+model.id;
				// }
				// if(method=='delete'){
					// options.url=this.get('iUrl')+'/overlaydelete.json?id='+model.id;
				// }
				// if(method=='read'){
					// options.url=this.get('iUrl')+'/overlayget.json?id='+model.id;
				// }
				// Backbone.emulateHTTP = true ;
				// Backbone.emulateJSON = true ;
				//if(this.get('iSync')) Backbone.sync(method, model, options);
			}
		})
	},
	collection:{
		Base:Backbone.Collection.extend({
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
				},
				parse:function(data){
				},
				resetViewStatus:function(){
					this.each(function(model){
						model.iview.resetStatus();
					})
				}
		}),
		list:Backbone.Collection.extend({//contain all elements include root node
			iSync:true,
			url:'',
			setonadd:function(){
				this.on('add',function(model){
				})
			},
			setonremove:function(){
			},
			sync: function(method, model, options) {
				if(method=='read'){
					options.url=context_url+'/overlayinit.json';
				}
				Backbone.emulateHTTP = true ;
				Backbone.emulateJSON = true ;
				Backbone.sync(method, model, options);
			},
			parse:function(data){
			},
			resetViewStatus:function(){
				this.each(function(model){
					model.iview.resetStatus();
				})
			}
		})
	},
	view:{
		Base:Backbone.View.extend({
			initialize:function(options){
				_.bindAll(this);
				this.model.bind('destroy',this.destroy);
				this.model.bind('change',this.change);
				this.initstart();//this function use to start the model's collection to init fatch childs
			},
			initstart:function(){//so this function always called with the view start 
				//this.renderStaticElement();
				this.preload();
				this.renderDynamicElement();
				this.render();
			},
			events: {
			   // "click a.action-active"  : "focus",
			   // "click button.action-done":"confirm",
			   // "click button.action-del":"removemodel"
			},
			options:{
				//aspectRatio:false
			},
			change:function(attributes){
				//console.info(attributes);
			},
			renderStaticElement:function(){
			},
			renderDynamicElement:function(){
				 if(this.model.get('pageid')) this.container=$('.Presentation[id="'+this.model.get('pageid')+'"]').find('.interaction-view');
				 else this.container=$('.interaction-view');
				 this.container.append(_.template(AnimateElementTemplate,this.model.toJSON()));
			     this.setElement(this.container.find('div.iView.dynamic[id="'+this.model.id+'"]'));		
			     var common=this.getcommon();
			    this.x=common.iStartx+common.iWidth/2;
			    this.y=common.iStarty+common.iHeight/2
			    TweenMax.to(this.$el[0],0,{x:common.iStartx+common.iWidth/2,y:common.iStarty+common.iHeight/2})	;
			},
			preload:function(){},
			afterpreload:function(){
				this.setZindex();
				this.setElementDisplay();
			},
			setElementDisplay:function(){
				if(this.$el.length>0){
				}
				if(this.$el.find('.Element').length>0)TweenMax.to(this.$el.find('.Element')[0],0,{scale:1});
				var iHidden=this.model.toJSON().iDetail.iHidden||false;
				var animations=this.model.page.iAnimationlist.where({overlay_id:this.model.id});
				if(animations&&animations[0]&&_.include([101,102,103],animations[0].toJSON().iType)){
					var x=-9999;
					var y=-9999;
					//console.log(animations[0]._animation);
					if(animations[0]._animation&&animations[0]._animation.css) {
						x=animations[0]._animation.css.x;
						y=animations[0]._animation.css.y;
					}
					if(animations[0].toJSON().iType==101) {
						TweenMax.to(this.$el[0],0,{x:x,y:y});
					}
					if(animations[0].toJSON().iType==102){
						TweenMax.to(this.$el.find('.Element')[0],0,{scale:0});
					}
					if(animations[0].toJSON().iType==103){
						TweenMax.to(this.$el[0],0,{opacity:0});
					}
				}	
				else if(iHidden) ;	
				else this.$el.removeClass('hide');	
				this.Clone=this.$el.clone();		
			},
			setZindex:function(){
				if(this.$el) this.$el.css('z-index',this.model.page.iViewlist.indexOf(this.model));
			},
			render: function(){//this render always used for a newly create type to show to display and to focus 
				var JSON=this.model.toJSON();
				var dom=interaction.template.element(this.model.toJSON());
				//div_createaddDiv(this.model.id,this.model.get('iType'));
				var el=interaction.template.element(this.model.toJSON());
				$(this.model.get('iParentdiv')).append(el);
				this.setElement(div_find(this.model.id));
				this.updatebackground();
				this.infoel=$('#info_attributes').children('.setting-body');
		    	//this.delegateEvents();
		    	return this;
			},
			renderCentrolPos:function(pos){
				//var common=this.getcommon();
				//this.$el.css('left',(pos.x-common.iWidth/2)+"px");
				//this.$el.css('top',(pos.y-common.iHeight/2)+"px");
				document.getElementById(this.model.id).style.left=(pos.x-100)+'px';
				document.getElementById(this.model.id).style.top=(pos.x-100)+'px';
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
			getAnimation:function(){
				var detail=this.getdetail();
				var animations=detail.animations;
				return animations;
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
				this.updateresources();
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
			renderpath:function(){
				//this.unsetanimation();
				var view=this;
				var model=this.model;
				var Detail=this.getdetail();
				var common=this.getcommon();
		        // Create a Paper.js Path to draw a line into it:
		        view.path = new paper.Path();
		        // Give the stroke a color
		        view.path.strokeColor = 'black';
		        view.path.visible=true;
		        view.path.selected=true;
		        $('canvas').removeClass('hide');
		        var animations=Detail.animations;
		        console.info(Detail.animations[0].iDetail.path);
		        _.each(animations[0].iDetail.path,function(i){
		        	view.path.add(i);
		        })
		        view.currentFrame=0;
		        view.countTime=0;
			},
			showdiv:function(){
				this.$el.removeClass('hide');
				this.model.set('iVisibility',true);
			},
			hidediv:function(){
				this.$el.addClass('hide');
				this.model.set('iVisibility',false);
			},
			resetStatus:function(){
				if(this.model.get('iType')=='Video'){
					//this.resetVideoStatus();
					return;
				};
				this.$el.remove();
				this.renderDynamicElement();	
				this.afterpreload();
			},
			resetVideoStatus:function(){
				this.$el.remove();
				this.renderDynamicElement();	
				this.afterpreload();
				this.loadagain();
			},
			loadagain:function(){
				var elementmodel=this.model;
				var tempid=String((new Date()).getTime());
				$("#Video_"+this.model.id).attr('id',"Video_"+tempid+this.model.id);
			    _V_("Video_"+tempid+this.model.id).ready(function(){
			    	console.info('Video init');
					elementmodel.media = this;
					elementmodel.media.size(elementmodel.iview.$el.find('.Element').width(),elementmodel.iview.$el.find('.Element').height());
			    	elementmodel.videoloaded=false;
			    	var videocheck=function(e){
			    		elementmodel.videoloaded=true;
			    	}
			    	var videoload=function(e){
			    		elementmodel.videoloaded=true;
			    		elementmodel.media.removeEvent("loadedmetadata",videoload);
			    		//elementmodel.media.addEvent("loadedmetadata",videocheck);
						console.info('video loaded');
						elementmodel.loaded=true;
					   // view.model.set('loaded',true);
			  			//view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,true);	    		
			    	}
					elementmodel.media.addEvent("loadedmetadata", videoload);
					elementmodel.media.addEvent("error", function(e) {
						elementmodel.loaded=false;
						//view.model.set('loaded',true);
					  //  view.model.page.ipreloadlist.preloadcheck(view.model.toJSON().file,false);
					}); 
				});					
			},
		})
	},
	message:function(type,msg,interval){
		$('body').append('<div class="msg"></div>');
		if(!interval)	interval=3000;
		$('.msg').html(_.template(MessageTemplate,{"type":type,"msg":msg}));
		$('.msg').fadeIn();
		setTimeout(function(){
			$('.msg').fadeOut('slow');
			$('.msg').remove();
		}, interval);
	},
	getRequest:function(key) {//return the location ref
	
	   var url = location.search; //获取url中"?"符后的字串
	
	   var theRequest = new Object();
	
	   if (url.indexOf("?") != -1) {
	
	      var str = url.substr(1);
	
	      strs = str.split("&");
	
	      for(var i = 0; i < strs.length; i ++) {
	
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
	
	      }
	
	   }
	
	   if(key) return theRequest[key];
	   else return theRequest;
	
	},
	setscrollnano:function(selector){
			if($(selector).hasClass('nanoscrollbar')) $selector=$(selector);
			else $selector=$(selector).find('.nanoscrollbar');
			if($selector.children('.nano').length==0)
				$selector.wrapInner('<div class="nano"><div class="content"></div></div>');
			$selector.children('.nano').nanoScroller();
			$selector.children('.nano').children('.pane').css({'visibility': 'hidden'});
			$selector.children('.nano').hover(function (){
					$(this).children('.pane').css({'visibility': 'visible'});
				},function (){
					$(this).children('.pane').css({'visibility': 'hidden'});
			});
	},
	deviceType:function(){
		return (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
    },
 	getModelById:function(model,id){
			var returned=null;
			model.icollection.each(function(m){
				if(m.id==id) returned=m;
				var result=interaction_view.getModelById(m,id);
                if(result) returned=result;
			})
			return returned;
	},
	model2collection:function(model,ResultsType){
		if(model.has(ResultsType)){
			model.icollection.add(model.get(ResultsType));
		}
	},
	model2tree:function(model,ResultsType,ChildrenType){
		if(model.has(ResultsType)){
			model.icollection.add(model.get(ResultsType));
			model.icollection.each(function(m){
				if(m.has(ChildrenType)){
					interaction_view.model2tree(m,ChildrenType,ChildrenType);
				}
			})
		}			
	},
}
window.iViewlist=new interaction_view.collection.Base();
interaction_view.iViewlist=new interaction_view.collection.list();
interaction_view.currentPage=null;

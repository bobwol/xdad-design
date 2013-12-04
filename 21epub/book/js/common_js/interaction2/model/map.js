define(['interaction/model/base','text!interaction/template/map.js'],function(){
	interaction.model.Map=interaction.model.base.extend({
		defaults:{
			iType:'Map',//define type
			iLock:true,
			iVisibility:true,
			iCommon:{portait:{iStartx:400,iStarty:200,iWidth:400,iHeight:300},landscape:{iStartx:400,iStarty:200,iWidth:400,iHeight:300}},
			iDetail:{iAdapt:false,iFullview:false,iAnimation:[],iText:'<iframe width="400" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="'+portal_url+'gg_map"></iframe>',mb:null,nb:null,zoom:null},
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:true,
			iResizable:true,
			iTemplate:require('text!interaction/template/element.js'),
			iParentdiv:'.interaction-area',
			iAutoindex:false,
			iSync:true,
			iZindex:'-1',
			iUrl:null,
			iAutofocus:false,
			iKeyscontrol:true,
			callback:null,
			iBackground:"rgba(62,189,255,0.5)",
			//iResourcesProperties:[{id:'iImg',type:'single',category:'image'}],
			iAnimationProperties:[{id:'animations',type:'object'}],
			//iActionProperties:[{id:'actions',type:'object'}],
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.Map({model:this});
			this.domview=new interaction.view.Dom({model:this});
		}
	})
	interaction.view.Map = interaction.view.Base.extend({
		events : {
			"contextmenu":'onMouseDown',
			"mousedown .iMask" : "focus",
			"click .iMask" : "focus",
			"click button.action-done" : "confirm",
			"click button.action-del" : "removemodel",
			//"click button.action-cancel" : "revert",
			"mouseover" : "mouseover",
			"mouseout" : "mouseout",
			'dblclick .iMask':'setmap'
		},
		render: function(){//this render always used for a newly create type to show to display and to focus 
			this.activeEditor=false;
			var JSON=this.model.toJSON();
			var view=this;
			var mapT=require('text!interaction/template/map.js');
			var el=_.template(mapT,this.model.toJSON());
			$(this.model.get('iParentdiv')).append(el);
			this.setElement(interaction.div_find(this.model.id));
			this.rendermap();
			if (this.model.get('iDraggable'))
				this.setdraggable();
			if (this.model.get('iResizable'))
				this.setresizable();
			this.infoel=$('#info_attributes').children('.setting-body');
			this.$el.find('[rel=tooltip]').tooltip();
	    	return this;
		},
		rendermap:function(){
			//var common=this.getcommon();
			var detail=this.getdetail();
			this.$el.find('.iContent').html(detail.iText);
		},
		updatebackground:function(){},
		updatepos : function() {
			var common = this.getcommon();
			var detail=this.getdetail();
			if (common) {
				this.$el.css('left', common.iStartx + 'px');
				this.$el.css('top', common.iStarty + 'px');
				this.$el.width(common.iWidth);
				this.$el.height(common.iHeight);
			}
			this.$el.find('.iContent').children('iframe').width(common.iWidth);
			this.$el.find('.iContent').children('iframe').height(common.iHeight);
			detail.iText='<iframe width="'+common.iWidth+'" height="'+common.iHeight+'" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="'+portal_url+'gg_map?mb='+detail.mb||''+'&nb='+detail.nb||''+'&zoom='+detail.zoom||''+'"></iframe>';
			this.model.set('iDetail',detail);		
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
			this.model.save();
		},
		setmap:function(){
			var view=this;
			if(!interaction.current||interaction.current.id!=this.model.id) return;
			if(this.activeEditor){

			} 
			else{
				this.mapEditor=true;
				this.$el.find('.iMask').addClass('hide');
				window.MapHandle=function(center,zoom){
					view.updatemap(center,zoom);
				}
			} 
			return false;			
		},
		updatemap:function(center,zoom){
			var common=this.getcommon();
			var detail=this.getdetail();
			detail.zoom=Number(zoom);
			detail.nb=center.nb;
			detail.mb=center.mb;
			detail.iText='<iframe width="'+common.iWidth+'" height="'+common.iHeight+'" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="'+portal_url+'gg_map?mb='+detail.mb+'&nb='+detail.nb+'&zoom='+detail.zoom+'"></iframe>';
			this.model.set('iDetail',detail);
		},
		beforeconfirm:function(){
			this.mapEditor=false;
			this.$el.find('.iMask').removeClass('hide');
			window.MapHandle=null;
		},
		keyshandleformap:function(code){
			if(code==27){
				this.beforeconfirm();
			}			
		}
	})
})
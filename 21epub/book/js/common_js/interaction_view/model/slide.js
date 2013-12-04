define(['interaction_view/model/base'],function(){
interaction_view.model.Slide=interaction_view.model.Base.extend({
	defaults:{
		iType:'Slide',//define type
		iLock:true,
		iVisibility:true,
		iCommon:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}},
		iDetail:{},
		iParent:'',
		iChild:'',
		iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
		iParentModel:null,
		iDraggable:true,
		iResizable:true,
		iTemplate:null,
		iParentdiv:'.interaction-view',
		iAutoindex:false,
		iSync:false,
		iZindex:'-1',
		iUrl:null,
		iAutofocus:false,
		iKeyscontrol:true,
		callback:null,
		iBackground:"rgba(62,189,255,0.5)",
		iResourcesProperties:[{id:'iImg',type:'single'}],
		iAnimationProperties:[{id:'iAnimation',type:'object'}]
	},
	setcollection:function(){
		if(!iViewlist.get(this.id)) iViewlist.add(this);
	},
	setview:function(type){
		this.iview=new interaction_view.view.Slide({model:this});
	},
	setsyncmodel:function(){
	}
})
interaction_view.view.Slide = interaction_view.view.Base.extend({
	events: {
		
	},
	render:function(fileid){
	},
	preload:function(){
		var view=this;
		var detail=this.getdetail();
		if(detail.iImg){
			_.each(detail.iImg,function(i){
				var preload=new interaction_view.model.Preload({file:i.picture,overlay_id:view.model.id,elementtype:view.model.get('iType'),pageid:view.model.get('pageid')});
			})
		}		
	},
	afterpreload:function(){
		this.play();	
		this.setZindex();
		this.setElementDisplay();
	},
	play:function(){
		var view=this;
		var onStart=function(){
			//console.info($(this.target));
			$(this.target).css('left',0);
			$(this.target).removeClass('hide');
		}
		var onStart1=function(){
			//$(this.target).css('left',view.$el.find('.Element').css('width'));
			$(this.target).removeClass('hide');
		}
		var onComplete=function(){
			//console.info('ok');
			$(this.target).addClass('hide');
		}
		var onComplete1=function(){
			//console.info('ok1');
			if(i<detail.iImg.length){
				var obj=view.$el.find('.Element').find('.slidecontent').children()[i-1];
				$(obj).css('left','0px');
				$(obj).css('top','0px');
				TweenMax.to(obj,1,param);
				var obj1=view.$el.find('.Element').find('.slidecontent').children()[i];
				if(type=='横向') $(obj1).css('left',view.$el.find('.Element').css('width'));
				else $(obj1).css('top',view.$el.find('.Element').css('height'));
				TweenMax.to(obj1,1,param1);	
				i+=1;		
			}
			else{
				if(repeat==-1){
					var obj=view.$el.find('.Element').find('.slidecontent').children()[i-1];
					$(obj).css('left','0px');
					$(obj).css('top','0px');
					TweenMax.to(obj,1,param);
					var obj1=view.$el.find('.Element').find('.slidecontent').children()[0];
					if(type=='横向') $(obj1).css('left',view.$el.find('.Element').css('width'));
					else $(obj1).css('top',view.$el.find('.Element').css('height'));
					TweenMax.to(obj1,1,param1);	
					i=1;						
				}
			}
		}
		var param={};
		var detail=this.getdetail();
		//this.$el.find('.Element').find('.slidecontent').children().first()
		if(!detail.iImg||detail.iImg.length<2) return;
		var type=detail.iSlidetype;
		param.delay=parseInt(detail.iInterval)||2;
		var repeat=detail.iRepeat?-1:0;
		if(type=='横向') param.left='-'+this.$el.find('.Element').css('width');
		else param.top='-'+this.$el.find('.Element').css('height');
		param.repeat=0;
		param.onStart=onStart;
		param.onComplete=onComplete;
		param.ease="Linear.easeNone";
		var param1=_.clone(param);
		param1.left='0px';
		param1.top="0px";
		param1.onStart=onStart1;
		param1.onComplete=onComplete1;
		//var obj=this.$el.find('.Element').find('.slidecontent')[0];
		var tween=new TimelineMax();
		var i=1;
		var obj=this.$el.find('.Element').find('.slidecontent').children()[i-1];
		$(obj).removeClass('hide');
		TweenMax.to(obj,1,param);
		var obj1=this.$el.find('.Element').find('.slidecontent').children()[i];
		if(type=='横向') $(obj1).css('left',view.$el.find('.Element').css('width'));
		else $(obj1).css('top',view.$el.find('.Element').css('height'));
		TweenMax.to(obj1,1,param1);
		i+=1;
		//	tween.add(TweenMax.to(obj,1,param));	
		//tween.play();
	}
})
});
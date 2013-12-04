define(['interaction_view/model/base','interaction_view/ui/animation'],function(){
interaction_view.model.CycleImage=interaction_view.model.Base.extend({
	defaults:{
		iType:'CycleImage',//define type
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
		this.iview=new interaction_view.view.CycleImage({model:this});
	},
	setsyncmodel:function(){
	}
})
interaction_view.view.CycleImage = interaction_view.view.Base.extend({
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
		this.playAnimation();
		this.setZindex();
		this.setElementDisplay();
		this.control();		
	},
	playAnimation:function(){
		var view=this;
		this.timeline=new TimelineMax({paused:true,repeat:-1});
		var totaltime=0;	
		var param={};
		var detail=this.getdetail();
		var delay=Number(detail.iInterval)||0.01;
		param.ease="Linear.easeNone";
		param.opacity=1;
		var onstart=function(){
			console.log('start');
		}
		//this.$el.find('.Element').find('.CycleImagecontent').children().first()
		if(!detail.iImg||detail.iImg.length<2) return;
		for(i=0;i<detail.iImg.length;i++){
			var obj=this.$el.find('.Element').find('.CycleImagecontent').children()[i];
			this.timeline.add(TweenMax.to(obj,0.00001,{css:{opacity:1}}));
			this.timeline.add(TweenMax.to(obj,delay,{css:{opacity:1}}));
			this.timeline.add(TweenMax.to(obj,0.00001,{css:{opacity:0}}));
			//this.timeline.add(TweenMax.fromTo(obj,0,{opacity:1},{opacity:0}),totaltime);
		}
		this.$el.find('.Element').find('.CycleImagecontent').children()[0].style.opacity=1;
		//this.timeline.play();
	},
	play:function(){
		var view=this;
		var onStart=function(){
			//$(this.target).removeClass('hide');
		}
		var onComplete=function(){
			this.target.style.opacity=0;
			//console.info(this);
			//console.info('ok1');
			if(i<detail.iImg.length){
				var obj=view.$el.find('.Element').find('.CycleImagecontent').children()[i];
				obj.style.opacity=1;
				i+=1;
				//$(obj).removeClass('hide');
				TweenMax.to(obj,delay,param);				
			}
			else{
				i=0;
					var obj=view.$el.find('.Element').find('.CycleImagecontent').children()[i];
					obj.style.opacity=1;
					i+=1;
					//$(obj).removeClass('hide');
					TweenMax.to(obj,delay,param);	
										
			}
		}
		var param={};
		var detail=this.getdetail();
		//this.$el.find('.Element').find('.CycleImagecontent').children().first()
		if(!detail.iImg||detail.iImg.length<2) return;
		var i=0;
		var obj=view.$el.find('.Element').find('.CycleImagecontent').children()[i];
		var delay=Number(detail.iInterval)||0.01;
		param.onStart=onStart;
		param.onComplete=onComplete;
		param.ease="Linear.easeNone";
		param.opacity=1;
		//param.startAt={opacity:1};
		obj.style.opacity=1;
		i+=1;
		//$(obj).removeClass('hide');
		TweenMax.to(obj,delay,param);
		//	tween.add(TweenMax.to(obj,1,param));	
		//tween.play();
	},
	control:function(){
		var detail=this.getdetail();
		if(!detail.iImg||detail.iImg.length==0) return;
		this.timeline.play(0);
		if(detail.iAutoplay){		
			return ;
		}
		this.timeline.pause(0);
		var time=0;
		var deltatime=0;
		var view=this;
		var control=false;
		var x=null;
		var y=null;
		var distance=this.$el.find('.Element').width();
		var duration=this.timeline.duration()+0.00002*detail.iImg.length;
		console.log(distance);
		console.log(this.timeline.duration());
		this.$el.find('.Element').on('mousedown',function(event){
			deltatime=0;
			x=event.pageX;
			control=true;
			console.log('control start');
			return false;
		})
		this.$el.find('.Element').on('mousemove',function(event){
			if(control&&x){
				var delta=event.pageX-x;
				//console.log(delta);	
				deltatime=time-delta/distance*duration;
				if(deltatime>duration) deltatime=deltatime-duration;
				if(deltatime<0) deltatime=duration+deltatime;
				//if(time>0) time=view.timeline.duration()-time;
				//else time=time*(-1);
				view.timeline.seek(deltatime);
			}
			return false;
		})
		this.$el.find('.Element').on('mouseup',function(event){
			time=deltatime;
			control=false;
			console.log('control stop');
			return false;
		})
	}
})
});

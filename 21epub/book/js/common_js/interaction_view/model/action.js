define(['interaction_view/model/base','interaction_view/ui/animation'],function(){
	
interaction_view.model.Action=interaction_view.model.Base.extend({
	defaults:{

	},
	setcollection:function(){
	},
	setview:function(type){
		this.page=interaction_view.ipagelist.get(this.get('pageid'));
		this.iview=new interaction_view.view.Action({model:this});
	},
	setsyncmodel:function(){
	}
})
interaction_view.collection.Action=interaction_view.collection.Base.extend({
	initialize:function(){
		//_.bindAll(this);
		this.setonadd();//this set the collection operations when a model add to it 
		this.setonremove();//this set the collection operations when a model remove form it 
	},
	model:interaction_view.model.Action,
	setonadd:function(){
		this.on('add',function(model){
		})
	},
	onSingleComplete:function(){
		
	},
	onUpdate:function(){
		
	},
	onTotalComplete:function(){
		
	},
	resetStatus:function(){
		this.each(function(model){
			model.iview.resetStatus();
		})
	}
})
interaction_view.view.Action = interaction_view.view.Base.extend({
	initstart:function(){
		
	},
	renderanimations:function(){
		var view=this;
		var Model_JSON=this.model.toJSON();
		if(!this.model.page.iViewlist.get(Model_JSON.overlay_id)) return;
		this.overlaymodel=this.model.page.iViewlist.get(Model_JSON.overlay_id);
		this.timeline=new TimelineMax({paused:true});
		this.timeline.addLabel('Start');
		this.TotalDuration=0;
		var animations=this.values;
		if(animations){
			_.each(animations,function(model){
				var i=view.model.page.iAnimationlist.get(model);
				if(!i) return;
				var JSON=i.toJSON();
				var obj=i._animation.obj;
				var param=i._animation.param;
				var duration=i.toJSON().iTiming.duration||0;
				var repeat=i.toJSON().iTiming.repeat||0;
				var delay=JSON.iTiming.delay||0;
				view.TotalDuration+=delay;
				duration=duration;
				var currentindex=animations.indexOf(i.id);
				if(JSON.iTiming.start==0) {
					view.timeline.addLabel(i+'_start',view.TotalDuration);
					view.timeline.call(view.model.page.iAnimationlist.AddClickTween,[view],this,view.TotalDuration-delay);
				}
				else if(JSON.iTiming.start==2) {
					if(currentindex!=0){
						var labeltime=view.timeline.getLabelTime(animations[currentindex-1].id+'_start');
						view.timeline.addLabel(i.id+'_start',labeltime+delay);
						view.TotalDuration=view.timeline.getLabelTime(i.id+'_start');			
					} 
					else{
						view.timeline.addLabel(i.id+'_start',view.TotalDuration);
					}
				}
				else{
					view.timeline.addLabel(i.id+'_start',view.TotalDuration);
				}
				if(_.include([501,502,503],i.get('iType'))){
					var mediaTime=view.model.page.iAnimationlist.getMediaTime(i);
					if(i.get('iType')==502||i.get('iType')==503) duration=0;
					else duration=mediaTime;
					view.timeline.call(view.model.page.iAnimationlist.AddMediaTween,[i],this,view.TotalDuration);
				}
				else if(JSON.iTiming.repeat!=0) view.timeline.call(view.model.page.iAnimationlist.AddRepeatTween,[i],this,view.TotalDuration);
				else if(_.include([101,102,103],i.get('iType'))){
					// if(i.tween){
						// view.timeline.add(i.tween,view.TotalDuration);
					// } 
					// else 
						console.log(i._animation);
						view.timeline.add(TweenMax.fromTo(obj,duration,i._animation.fromparam,i._animation.toparam),view.TotalDuration);
				}
				else {
					console.log(i._animation);
					//console.log(i.tween);
					//if(i.tween) view.timeline.add(i.tween,view.TotalDuration);
					view.timeline.add(TweenMax.to(obj,duration,i._animation.param),view.TotalDuration);	
				}
				view.TotalDuration+=duration;
				view.timeline.addLabel(i.id+'_end',view.TotalDuration);
			})
			view.timeline.play(0);
		}
	},
	onComplete:function(){
		
	},
	events: {
		
	},
	renderDynamicElement:function(){	
	},
	render:function(){
		var iType=this.model.toJSON().iType;
		var iDetail=this.model.toJSON().iDetail;
		if(!iDetail||!iDetail.results) return;
		var view=this;
		this.actiontype=iDetail.results[0].iAction;
		this.values=iDetail.results[0].values;
		var Model_JSON=this.model.toJSON();
		if(!this.model.page.iViewlist.get(Model_JSON.overlay_id)) return;
		this.overlaymodel=this.model.page.iViewlist.get(Model_JSON.overlay_id);
		this.TotalDuration=0;
		this.overlaymodel.iview.$el.css('cursor','pointer');
		this.overlaymodel.iview.$el.addClass('hasaction');
		var obj=this.overlaymodel.iview.$el;
		if(iType==1) obj=this.overlaymodel.iview.$el.find('img.iconNormal');
		if(iType==2) obj=this.overlaymodel.iview.$el.find('img.iconActive');
		if(!obj) return;
		obj.on('click',function(){
			if(view.actiontype==0){
				//if(view.timeline) view.timeline.play(0);
				view.renderanimations();
			}
			if(view.actiontype==1) view.rendershow();
			if(view.actiontype==2) view.renderhide();
			if(view.actiontype==5&&!interaction_view.SinglePreview){
				view.renderpage();
			}
		})				
	},
	renderclick:function(){
		
	},
	rendershow:function(){
		var view=this;
		var overlays=this.values;
		if(overlays){
			_.each(overlays,function(i){
				var overlay=view.model.page.iViewlist.get(i);
				if(overlay&&overlay.iview&&overlay.iview.$el) overlay.iview.$el.removeClass('hide');
			})
		}
	},
	renderhide:function(){
		var view=this;
		var overlays=this.values;
		if(overlays){
			_.each(overlays,function(i){
				var overlay=view.model.page.iViewlist.get(i);
				if(overlay&&overlay.iview&&overlay.iview.$el) overlay.iview.$el.addClass('hide');
			})
		}		
	},
	renderpage:function(){
		var pageid=this.values;
		var pagenums=interaction_view.ipagelist.length;
		switch(pageid){
			case 'first': Reveal.slide(0);break;
			case 'last': Reveal.slide(pagenums-1);break;
			case 'prev': Reveal.prev();break;
			case 'next' : Reveal.next();break;
			default: 
					if(interaction_view.ipagelist.get(pageid)){
						var pageNo=interaction_view.ipagelist.indexOf(interaction_view.ipagelist.get(pageid));
						Reveal.slide(pageNo);						
					}
		}
	},
	resetStatus:function(){
		this.overlaymodel.iview.$el.off('click');
	}
})
interaction_view.iActionlist=new interaction_view.collection.Action();

})

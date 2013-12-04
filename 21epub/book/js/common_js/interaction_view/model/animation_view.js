define(['interaction_view/model/base','interaction_view/ui/animation'],function(){
	
interaction_view.model.Animation=interaction_view.model.Base.extend({
	defaults:{

	},
	setcollection:function(){
	},
	setview:function(type){
		this.iview=new interaction_view.view.Animation({model:this});
	},
	setsyncmodel:function(){
	}
})
interaction_view.collection.Animation=interaction_view.collection.Base.extend({
	initialize:function(){
		//_.bindAll(this);
		this.setonadd();//this set the collection operations when a model add to it 
		this.setonremove();//this set the collection operations when a model remove form it 
	},
	model:interaction_view.model.Animation,
	setonadd:function(){
		this.on('add',function(model){
		})
	},
	setParams:function(pageid){
		if(this.length==0) return;
		var collection=this;
		this.page=interaction_view.ipagelist.get(this.pageid);
		this.each(function(i){
			i.tween=null;
			var JSON=i.toJSON();
			if(!collection.page.iViewlist.get(JSON.overlay_id)) return;
			i._animation=new animation({
				collection:collection,
				animation:i.toJSON(),
			});	
		})		
	},
	setPlay:function(pageid){
		if(this.length==0) return;
		var collection=this;
		var timelineonStart=function(){

		}
		this.timeline=new TimelineMax({paused:true,onStart:timelineonStart});
		this.timeline.addLabel('Start');
		this.TotalDuration=0;
		this.each(function(i){
			var JSON=i.toJSON();
			if(!collection.page.iViewlist.get(JSON.overlay_id)) return;
			// i._animation=new animation({
				// collection:collection,
				// animation:i.toJSON(),
			// });	
			if(JSON.iTiming.waitaction&&!interaction_view.SinglePreview) return;
			var obj=i._animation.obj;
			var param=i._animation.param;
			var duration=i.toJSON().iTiming.duration||0;
			var delay=i.toJSON().iTiming.delay||0;
			collection.TotalDuration+=delay;
			duration=duration;
			var currentindex=collection.indexOf(i);
			if(JSON.iTiming.start==0) {
				collection.timeline.addLabel(i.id+'_start',collection.TotalDuration);
				collection.timeline.call(collection.AddClickTween,[collection],this,collection.TotalDuration-delay);
			}
			else if(JSON.iTiming.start==2) {
				if(currentindex!=0){
					var labeltime=collection.timeline.getLabelTime(collection.at(currentindex-1).id+'_start');
					collection.timeline.addLabel(i.id+'_start',labeltime+delay);
					collection.TotalDuration=collection.timeline.getLabelTime(i.id+'_start');			
				} 
				else{
					collection.timeline.addLabel(i.id+'_start',collection.TotalDuration);
				}
			}
			else{
				collection.timeline.addLabel(i.id+'_start',collection.TotalDuration);
			}
			if(_.include([501,502,503],i.get('iType'))){
				var mediaTime=collection.getMediaTime(i);
				if(i.get('iType')==502||i.get('iType')==503) duration=0;
				else duration=mediaTime;
				collection.timeline.call(collection.AddMediaTween,[i],this,collection.TotalDuration);
			}
			else if(JSON.iTiming.repeat!=0) collection.timeline.call(collection.AddRepeatTween,[i],this,collection.TotalDuration);
			else if(_.include([101,102,103],i.get('iType'))){
				collection.timeline.add(i.tween=TweenMax.fromTo(obj,duration,i._animation.fromparam,i._animation.toparam),collection.TotalDuration);
			}
			else collection.timeline.add(i.tween=TweenMax.to(obj,duration,param),collection.TotalDuration);	
			collection.TotalDuration+=duration;
			collection.timeline.addLabel(i.id+'_end',collection.TotalDuration);
		})		
	},
	play:function(){
		if(this.length==0) return;
		this.setPlay();
		this.timeline.play(0);		
	},
	playMain:function(){
		if(this.length==0) return;
		this.setParams();
		this.setPlay();
		this.timeline.play(0);
		if(this.afterTimeLineCreated) this.afterTimeLineCreated();	
	},
	AddClickTween:function(collection){
		if(interaction_view.SinglePreview) return;
		collection.timeline.pause();
		$('.interaction-view').css('cursor','pointer');
		$('.interaction-view').one('click',function(){
			$('.interaction-view').css('cursor','auto');
			collection.timeline.resume();
			//collection.timeline.getTweensOf('div#1364871563753.iView')[0].resume();
		})		
	},
	AddRepeatTween:function(i){
		var obj=i._animation.obj;
		var param=i._animation.param;
		var duration=i.toJSON().iTiming.duration||0;
		var repeat=i.toJSON().iTiming.repeat||0;
		console.log(param);
		if(_.include([101,102,103],i.get('iType'))){
			i.tween=TweenMax.fromTo(obj,duration,i._animation.fromparam,i._animation.toparam);
		}
		else i.tween=TweenMax.to(obj,duration,param);
		if(repeat==-2){
			$('.interaction-view').one('click',function(){
				i._animation.forcestop(i.tween);
			})			
		}
	},
	AddMediaTween:function(i){
		var page=interaction_view.ipagelist.get(i.get('pageid'));
		if(interaction_view.SinglePreview) {
			var previewtime=page.iAnimationlist.timeline.getLabelTime(interaction_view.PreviewItemId+'_start');
			var thislabletime=page.iAnimationlist.timeline.getLabelTime(i.id+'_start');
			if(previewtime>thislabletime) return;
		}
		var overlaymodel=page.iViewlist.get(i.get('overlay_id'));
		var iType=i.get('iType');
		if(iType==501){
			if(overlaymodel.loaded){
				if(overlaymodel.get('iType')=='Audio'){
					console.log(overlaymodel.media);
					//if(overlaymodel.media.isEnded()) 
					//overlaymodel.media.pause();
					if(overlaymodel.media.isEnded()){
						//overlaymodel.media.unbind('canplay');
						//overlaymodel.media.bind('canplay',function(){
							//overlaymodel.media.unbind('canplay');
							overlaymodel.media.play();
						//})
						//overlaymodel.media.load();
					}
					else overlaymodel.media.play();
					//if(overlaymodel.media) console.log(overlaymodel.media.getDuration());
				}
				if(overlaymodel.get('iType')=='Video') {
					overlaymodel.iview.$el.removeClass('hide');
					if(overlaymodel.videoloaded)
						overlaymodel.media.play();
					else{
						var waitvideoload=function(e){
							overlaymodel.videoloaded=true;
							overlaymodel.media.removeEvent("loadedmetadata",waitvideoload);
							overlaymodel.media.play();
						}
						overlaymodel.media.addEvent("loadedmetadata",waitvideoload);
					}
				}
			}
		}
		if(iType==502){
			if(overlaymodel.loaded) overlaymodel.media.pause();
		}
		if(iType==503){
			if(overlaymodel.loaded) {
				if(overlaymodel.get('iType')=='Video'){
					overlaymodel.iview.$el.addClass('hide');
					overlaymodel.media.pause();
				} 
				else overlaymodel.media.stop();				
			}
		}
		page.iAnimationlist.onComplete(i.id);
	},
	getMediaTime:function(i){
		var mediaTime=0;
		var overlaymodel=this.page.iViewlist.get(i.toJSON().overlay_id);
		if(overlaymodel.media){
			if(overlaymodel.get('iType')=='Audio') mediaTime=overlaymodel.media.getDuration();
			if(overlaymodel.get('iType')=='Video') mediaTime=overlaymodel.media.duration();
		}
		return mediaTime;
	},
	onSingleComplete:function(){
		
	},
	onUpdate:function(){
		
	},
	onTotalComplete:function(){
		
	},
	playnext:function(){
		var collection=this;
		if(this.CurrentPlay==this.length) return ;
		var JSON=this.at(this.CurrentPlay).toJSON();
		//console.info(JSON);
		if(JSON.iTiming.start==2){
			this.at(this.CurrentPlay)._animation=new animation({
				collection:collection,
				animation:JSON,
			});
			var current=this.CurrentPlay;
		    this.CurrentPlay+=1;
		    this.at(current)._animation.play();
		    this.playnext();
		}
	    if(JSON.iTiming.start==0){
			this.waitclick();
		}
	},
	playclick:function(){
		var collection=this;
		if(this.CurrentPlay==this.length) return ;
		var JSON=this.at(this.CurrentPlay).toJSON();
		//console.info(JSON);
		if(JSON.iTiming.start==0){
			this.at(this.CurrentPlay)._animation=new animation({
				collection:collection,
				animation:JSON,
			});
			var current=this.CurrentPlay;
		    this.CurrentPlay+=1;
		    this.at(current)._animation.play();
		    this.playnext();
		}
	},
	onComplete:function(id){
		var collection=this;
		console.info(id);		 		
	},
	waitclick:function(){
		var collection=this;
		$('.interaction-view').one('click',function(){
			collection.playclick();
		})
	},
	addclickstop:function(id){
		var collection=this;
		$('.interaction-view').one('click',function(){
			collection.get(id)._animation.forcestop();
		})
	}
})
interaction_view.view.Animation = interaction_view.view.Base.extend({
	events: {
		
	},
	renderDynamicElement:function(){	
	},
	render:function(fileid){
	}
})
interaction_view.iAnimationlist=new interaction_view.collection.Animation();
})

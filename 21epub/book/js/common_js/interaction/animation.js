window.animation=function(options){
	this.defaults={
		countTime:0,
		currentFrame:0,
		path:null,
		raster:null,
		animation:null
	}
	this.options=options;
	this.options=$.extend({},this.defaults, typeof options == 'object' && options);
	this.init();
}
window.animation.prototype={
	init:function(){
		_.bindAll(this);
	    this.setparam();
	},
	EaseTypes:{
		0:"Linear.easeNone",
		1:"Power0.easeIn",
		2:"Power0.easeInOut",
		3:"Power0.easeOut",
		4:"Power1.easeIn",
		5:"Power1.easeInOut",
		6:"Power1.easeOut",
		7:"Power2.easeIn",
		8:"Power2.easeInOut",
		9:"Power2.easeOut",
		10:"Power3.easeIn",
		11:"Power3.easeInOut",
		12:"Power3.easeOut",
		13:"Power4.easeIn",
		14:"Power4.easeInOut",
		15:"Power4.easeOut",
		16:"Quad.easeIn",
		17:"Quad.easeInOut",
		18:"Quad.easeOut",
		19:"Cubic.easeIn",
		20:"Cubic.easeInOut",
		21:"Cubic.easeOut",
		22:"Quart.easeIn",
		23:"Quart.easeInOut",
		24:"Quart.easeOut",
		25:"Quint.easeIn",
		26:"Quint.easeInOut",
		27:"Quint.easeOut",
		28:"Strong.easeIn",
		29:"Strong.easeInOut",
		30:"Strong.easeOut",
		31:"Back.easeIn",
		32:"Back.easeInOut",
		33:"Back.easeOut",
		34:"Bounce.easeIn",
		35:"Bounce.easeInOut",
		36:"Bounce.easeOut",
		37:"Circ.easeIn",
		38:"Circ.easeInOut",
		39:"Circ.easeOut",
		40:"Elastic.easeIn",
		41:"Elastic.easeInOut",
		42:"Elastic.easeOut",
		43:"Expo.easeIn",
		44:"Expo.easeInOut",
		45:"Expo.easeOut",
		46:"Sine.easeIn",
		47:"Sine.easeInOut",
		48:"Sine.easeOut",
		49:"SlowMo.ease",		
	},
	getTypeName:function(type){
		switch(type){
			case 100: return '出现动画';
			case 101: return '飞入';
			case 102: return '放大';
			case 103: return '渐现';
			case 200: return '消失动画';
			case 201: return '飞出';
			case 202: return  '缩小';
			case 203: return  '渐隐';
			case 300: return  '运动路径';
			case 301: return  '直线运动';
			case 302: return  '曲线运动';
			case 400: return  '强调动画';
			case 401: return  '放大缩小';
			case 402: return  '透明';
			case 403: return  '旋转';
			case 500: return  '媒体动画';
			case 501: return  '播放';
			case 502: return  '暂停';
			case 503: return  '结束';
		}
	},
	play:function(){
		var overlaymodel=interaction_view.iViewlist.get(this.options.animation.overlay_id);
		this.overlay_type=overlaymodel.get('iType');
		if(this.overlay_type=="Audio") this.playmedia(this.options.animation.iType);
		else if(_.include([501,502,503],this.options.animation.iType)){
			console.info(this.options.animation.iType);
			this.playmedia(this.options.animation.iType);
		}
		else if(_.include([101,102,103],this.options.animation.iType)){
			console.info(this.param);
			this.tween=TweenMax.from(this.obj, this.options.animation.iTiming.duration, this.param);
		}
		else this.tween=TweenMax.to(this.obj, this.options.animation.iTiming.duration, this.param);	
	},
	playmedia:function(iType){
		var overlaymodel=interaction_view.iViewlist.get(this.options.animation.overlay_id);
		if(iType==501){
			if(overlaymodel.loaded) {
				if(overlaymodel.get('iType')=='Audio'){
					if(overlaymodel.media) console.log(overlaymodel.media.getDuration());
				}
				if(overlaymodel.get('iType')=='Video') overlaymodel.iview.$el.removeClass('hide');
				overlaymodel.media.play();
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
		this.options.collection.onComplete(this.options.animation.id);
	},
	setpathparam:function(iType){
		this.pathoriginalpoint={};
		//this.pathoriginalpoint.left=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('left');
		//this.pathoriginalpoint.top=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('top');
		//interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('left','');
		//interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('top','');
		this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el[0];
		var autoRotate=this.options.animation.iDetail.autoRotate||false;
		if(iType==302){//曲线
			 var pos=[];
			 _.each(this.options.animation.iDetail.path,function(i){
					if(i.handleIn) {
						var handleInPos={};
						handleInPos.left=(i.handleIn.x+i.point.x)+'px';
						handleInPos.top=(i.handleIn.y+i.point.y)+'px';
						pos.push(handleInPos);
					}
					pos.push({left:(i.point.x)+'px',top:(i.point.y)+'px'});
					if(i.handleOut){
						var handleOutPos={};
						handleOutPos.left=(i.handleOut.x+i.point.x)+'px';
						handleOutPos.top=(i.handleOut.y+i.point.y)+'px';
						pos.push(handleOutPos);
					} 
			})
			this.param.bezier={values:pos,type:"cubic",autoRotate:autoRotate,immediateRender:true};
		} 
		if(iType==301){//直线
			 var pos=[];
			for(i in this.options.animation.iDetail.path){
				if(i!=0){
					var lastpos=this.options.animation.iDetail.path[i-1];
					var thispos=this.options.animation.iDetail.path[i];
					var throwpoint={left:(lastpos.point.x+thispos.point.x)/2+'px',top:(lastpos.point.y+thispos.point.y)/2+'px'};
					pos.push(throwpoint);
				}
				pos.push({left:(this.options.animation.iDetail.path[i].point.x)+'px',top:(this.options.animation.iDetail.path[i].point.y)+'px'});
			}
			this.param.bezier={values:pos,type:"quadratic",autoRotate:autoRotate};
		}		
	},
	setappearparam:function(iType){
		this.fromparam={};
		this.toparam={};
		this.fromparam.onStart=this.param.onStart;
		this.toparam.onComplete=this.param.onComplete;
		this.toparam.delay=this.param.delay;
		this.toparam.repeat=this.param.repeat;
		this.toparam.ease=this.param.ease;
		if(iType==101){//飞入
			var direction=this.options.animation.iDetail.direction||0;
			var currentleft=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('left');
			var currenttop=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('top');
			var distanceX=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element').width()*2;
			var distanceY=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element').height()*2;
			var dict={};
			switch(direction){
				case 0: dict.top='-'+distanceY+'px';dict.left=currentleft;break;
				case 1: dict.left=1024+distanceX+'px';dict.top=currenttop;break;
				case 2: dict.top=768+distanceY+'px';dict.left=currentleft;break;
				case 3: dict.left='-'+distanceX+'px';dict.top=currenttop;break;
			}
			this.param.css=dict;
			this.fromparam.css=dict;
			this.toparam.css={
					top:currenttop,
					left:currentleft
			}
			//this.param.startAt={left:dict.left,top:dict.top};
			this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el[0];
		}
		if(iType==102){//放大
			var direction=this.options.animation.iDetail.direction||0;
			var current={};
			var dict={};
			var overlaymodel=interaction_view.iViewlist.get(this.options.animation.overlay_id);
			current.scale=0;
			this.param.css=current;	
			this.fromparam.css={scale:0}
			this.toparam.css={scale:1}
			this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element')[0];
		}
		if(iType==103){//渐现
			var direction=this.options.animation.iDetail.direction||0;
			var current={};
			this.param.css={opacity:0};
			this.fromparam.css={opacity:0};
			this.toparam.css={opacity:1};
		    this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el[0];
		}		
	},
	setdisappearparam:function(iType){
		if(iType==201){//飞出
			var direction=this.options.animation.iDetail.direction||0;
			this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el[0];
			var distanceX=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element').width()*2;
			var distanceY=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element').height()*2;
			var dict={};
			switch(direction){
				case 0: dict.top='-'+distanceY+'px';break;
				case 1: dict.left=1024+distanceX+'px';break;
				case 2: dict.top=768+distanceY+'px';break;
				case 3: dict.left='-'+distanceX+'px';break;
			}
			this.param.css=dict;
		}
		if(iType==202){//缩小
			var overlaymodel=interaction_view.iViewlist.get(this.options.animation.overlay_id);
			var dict={};
			dict.scale=0;
			this.param.css=dict;
			this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element')[0];
		}
		if(iType==203){
			this.param.css={opacity:0};
			this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el[0];
		}		
	},
	setstrongparam:function(iType){
		if(iType==401){
			var overlaymodel=interaction_view.iViewlist.get(this.options.animation.overlay_id);
			var dict={};
			this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element')[0];
			dict.scale=this.options.animation.iDetail.scale||2;
			this.param.css=dict;
		}
		if(iType==402){
			this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element')[0];
			var opacity=this.options.animation.iDetail.opacity||0;
			this.param.css={opacity:opacity};	
		}
		if(iType==403){
			this.obj=interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.find('.Element')[0];
			var rotation=this.options.animation.iDetail.rotation||180;
			var axial=this.options.animation.iDetail.axial||0;
			var direction="_cw",plus='+';
			if(rotation<0) direction="_ccw";
			if(rotation<0) plus='-';
			var dict={};
			if(axial==0){
				dict.rotation=plus+'='+Math.abs(rotation)+direction;
			}
			if(axial==1){
				dict.rotationX=plus+'='+Math.abs(rotation)+direction;
			}
			if(axial==2){
				dict.rotationY=plus+'='+Math.abs(rotation)+direction;
			}
			this.param.css=dict;	
		}		
	},
	setparam:function(){
		var view=this;
		this.param={onStart:this.showelement};
		this.param.data=this.options.animation;
		var overlaymodel=interaction_view.iViewlist.get(this.options.animation.overlay_id);
		// if(overlaymodel.get('iType')=="RichText"){
			// if(_.include([202,102,401],this.options.animation.iType)){
				// this.param.onCompleteAll=this.stop;
			// }
			// else this.param.onComplete=this.stop;
		// }
		this.param.onComplete=this.stop;
		this.param.onCompleteParams=["{self}"];
		this.param.ease=this.EaseTypes[this.options.animation.iTiming.ease||0];
		var repeat=this.options.animation.iTiming.repeat||0;
		var delay=this.options.animation.iTiming.delay||0;
		this.param.delay=delay;
		if(repeat==0||repeat==-1){
			this.param.repeat=repeat;
		}
		else if(repeat==-2){
			this.param.repeat=-1;
			//this.addclickcontrol();
		}
		else this.param.repeat=repeat;
		switch(this.options.animation.iType){
			case 100: return '出现动画';
			case 101: this.setappearparam(101);break;
			case 102: this.setappearparam(102);break;
			case 103: this.setappearparam(103);break;
			case 200: return '消失动画';
			case 201: this.setdisappearparam(201);break;
			case 202: this.setdisappearparam(202);break;
			case 203: this.setdisappearparam(203);break;
			case 300: return  '运动路径';
			case 301: this.setpathparam(301);break;
			case 302: this.setpathparam(302);break;
			case 400: return  '强调动画';
			case 401: this.setstrongparam(401);break;
			case 402: this.setstrongparam(402);break;
			case 403: this.setstrongparam(403);break;
			case 500: return  '媒体动画';
			case 501: this.setmedia(501);break;
			case 502: this.setmedia(502);break;
			case 503: this.setmedia(503);break;
		}		
	},
	setmedia:function(iType){
		
	},
	pathstop:function(self){
		var rewind=this.options.animation.iTiming.rewind||false;
		//console.info(rewind);
		if(rewind&&this.options.animation.iTiming.repeat!=-1&&this.options.animation.iTiming.repeat!=-2){
			if(this.options.animation.iDetail.path&&this.options.animation.iDetail.path[0]){
				self.pause(0);
				interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('left',this.options.animation.iDetail.path[0].point.x+'px');
				interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('top',this.options.animation.iDetail.path[0].point.y+'px');				
			}
		} 
	},
	animationstop:function(self){
		var rewind=this.options.animation.iTiming.rewind||false;
		//console.info(rewind);
		if(rewind&&this.options.animation.iTiming.repeat!=-1&&this.options.animation.iTiming.repeat!=-2){
			self.pause(0);
		} 	
	},
	stop:function(self){
		// if(_.include([101,102,103],this.options.animation.iType)){
			// console.info(this.completepatch);
			// if(!this.completepatch) {
				// this.completepatch=true;
				// return;
			// }
			// else this.completepatch=null;
		// }
		//if(this.options.animation.iType==301||this.options.animation.iType==302) this.pathstop(self);
		this.animationstop(self);
		this.options.collection.onComplete(this.options.animation.id);
	},
	forcestop:function(self){
		var rewind=this.options.animation.iTiming.rewind||false;
		//if(this.options.animation.iType==301||this.options.animation.iType==302){
			// if(rewind){
				// if(this.options.animation.iDetail.path&&this.options.animation.iDetail.path[0]){
					// self.pause(0);
					// interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('left',this.options.animation.iDetail.path[0].point.x+'px');
					// interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.css('top',this.options.animation.iDetail.path[0].point.y+'px');				
				// }
			// } 
			//else self.pause(this.options.animation.iTiming.duration);		
		//}
		//else{
			if(rewind){
				self.pause(0);
			}
			else  self.pause(this.options.animation.iTiming.duration);
		//}	
		this.options.collection.onComplete(this.options.animation.id);
	},
	addclickcontrol:function(){
		this.options.collection.addclickstop(this.options.animation.id);
	},
	showelement:function(){
		//document.getElementById(this.options.animation.overlay_id).className = "iView dynamic";
		interaction_view.iViewlist.get(this.options.animation.overlay_id).iview.$el.removeClass('hide');		
	}
}
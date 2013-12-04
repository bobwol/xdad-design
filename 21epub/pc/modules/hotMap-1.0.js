/**
var ins = $(xxx).map(opt);
ins.show(id);

**/
epub.def(function(){
	epub["import"]('epub.modules.bootstrap@1.0')
	$.hotMap = function (el,options){
		this._setoptions(el,options);
	}
	$.hotMap.creatStyle = 0;
	$.hotMap.current = '';
	$.hotMap.prototype = {
		_setoptions:function(el,options){
			this.$el = $(el);
			this.options = $.extend(true,$.hotMap.defaults,options||{});
			this._creatStyle();
			this._render();
		},
		_creatStyle:function(){
			if($.hotMap.creatStyle)return;
			var ss = document.createElement("style");
			var rules = this.options.style;
			ss.setAttribute("id", "myStyleSheet");
			ss.setAttribute("type", "text/css");
			ss.innerHTML = rules;
			document.getElementsByTagName("head")[0].appendChild(ss);
			$.hotMap.creatStyle = 1;
		},
		_render:function(){
			var self = this;
			var html = ['<div id=map>'];
			for (var i = self.options.data.length - 1; i >= 0; i--) {
				var data = self.options.data[i];
				html.push('<h1 class="mapl" style="'+data['style']+'">');
				html.push('	<a href="javascript:void(0);" id="'+data['title']+'"  data-title="'+data['title']+'">&nbsp;</a>');
				html.push('</h1>');
			};
			html.push('</div>');
			this.$el.html(html.join(''));
			this.$a = this.$el.find('a');
			this._delegateEvents();
			this._init();
		},
		_delegateEvents:function(){
			var self = this;
			this.$a.tooltip({
		      title: function () { 
		          return $(this).atrr("data-title")
		      },
		      trigger:'manual'
		    })
		    this.$a.click(function(e){
		    	self.options.click(this)
		    })
		},
		_init:function(){
			
		},
		show:function(id){
			if($.hotMap.current==id)return;
			
			if($.hotMap.current)$('#'+$.hotMap.current).tooltip('hide');
			$('#'+id).tooltip('show')
			$.hotMap.current = id;
			this.options.show($('#'+id))
		}
	}
	$.hotMap.defaults = {
		data:[
			{style:'margin:162px 0px 0px 396px;',title:'北京'},
			{style:'margin:110px 0px 0px 465px;',title:'长春'},
			{style:'margin:222px 0px 0px 264px;',title:'兰州'},
			{style:'margin:359px 0px 0px 237px;',title:'昆明'},
			{style:'margin:206px 0px 0px 383px;',title:'济南'},
			{style:'margin:261px 0px 0px 393px;',title:'合肥'},
			{style:'margin:296px 0px 0px 445px;',title:'杭州'},
			{style:'margin:79px 0px 0px 489px;',title:'哈尔滨'},
			{style:'margin:420px 0px 0px 342px;',title:'海口'},
			{style:'margin:338px 0px 0px 305px;',title:'贵阳'},
			{style:'margin:370px 0px 0px 366px;',title:'广州'},
			{style:'margin:154px 0px 0px 439px;',title:'大连'},
			{style:'margin:285px 0px 0px 300px;',title:'重庆'},
			{style:'margin:293px 0px 0px 255px;',title:'成都'},
			{style:'margin:165px 0px 0px 305px;',title:'呼和浩特'},
			{style:'margin:375px 0px 0px 315px;',title:'南宁'},
			{style:'margin:375px 0px 0px 435px;',title:'福州'},
			{style:'margin:200px 0px 0px 415px;',title:'淄博'},
			{style:'margin:383px 0px 0px 355px;',title:'珠海'},
			{style:'margin:225px 0px 0px 350px;',title:'焦作'},
			{style:'margin:235px 0px 0px 377px;',title:'郑州'},
			{style:'margin:189px 0px 0px 438px;',title:'烟台'},
			{style:'margin:353px 0px 0px 424px;',title:'厦门'},
			{style:'margin:238px 0px 0px 314px;',title:'西安'},
			{style:'margin:263px 0px 0px 347px;',title:'南阳'},
			{style:'margin:277px 0px 0px 357px;',title:'武汉'},
			{style:'margin:176px 0px 0px 408px;',title:'天津'},
			{style:'margin:204px 0px 0px 338px;',title:'太原'},
			{style:'margin:272px 0px 0px 390px;',title:'马鞍山'},
			{style:'margin:270px 0px 0px 430px;',title:'无锡'},
			{style:'margin:191px 0px 0px 355px;',title:'石家庄'},
			{style:'margin:138px 0px 0px 433px;',title:'沈阳'},
			{style:'margin:383px 0px 0px 392px;',title:'深圳'},
			{style:'margin:280px 0px 0px 458px;',title:'上海'},
			{style:'margin:366px 0px 0px 400px;',title:'汕头'},
			{style:'margin:214px 0px 0px 433px;',title:'青岛'},
			{style:'margin:229px 0px 0px 418px;',title:'徐州'},
			{style:'margin:255px 0px 0px 430px;',title:'南京'},
			{style:'margin:317px 0px 0px 405px;',title:'南昌'},
			{style:'margin:317px 0px 0px 360px;',title:'长沙'}
		],
		style:[
			'#map {',
			'	BACKGROUND: url(../img/map1.gif) no-repeat left top; FLOAT: left; WIDTH: 620px; HEIGHT: 447px',
			'}',
			'#map H1 {',
			'	DISPLAY: block; FONT-WEIGHT: normal; POSITION: absolute;font-size: 12px;font-family: Verdana,"宋体",Arial,Sans;line-height: 1.8;',
			'}',
			'#map .mapl A:link {',
			'	DISPLAY: block; BACKGROUND: url(../img/maph1.gif) no-repeat; COLOR: #000; TEXT-DECORATION: none',
			'}',
			'#map .mapl A:visited {',
			'	DISPLAY: block; BACKGROUND: url(../img/maph1.gif) no-repeat; COLOR: #000; TEXT-DECORATION: none',
			'}',

			'#map .mapl A:link {',
			'	BACKGROUND-POSITION: left 4px; PADDING-LEFT: 20px',
			'}',
			'#map .mapl A:visited {',
			'	BACKGROUND-POSITION: left 4px; PADDING-LEFT: 20px',
			'}'
			//,

			// '#map .mapl A:hover {',
			// '	PADDING-RIGHT: 20px; DISPLAY: block; BACKGROUND: url(../img/maph1.gif) no-repeat; COLOR: #ff0000',
			// '}',
			// '#map .mapl A:active {',
			// '	PADDING-RIGHT: 20px; DISPLAY: block; BACKGROUND: url(../img/maph1.gif) no-repeat; COLOR: #ff0000',
			// '}',

			// '#map .mapl A:hover {',
			// '	BACKGROUND-POSITION: left bottom; PADDING-LEFT: 20px',
			// '}',
			// '#map .mapl A:active {',
			// '	BACKGROUND-POSITION: left bottom; PADDING-LEFT: 20px',
			// '}'
		].join(''),
		click:function(){

		},
		show:function(){

		}
	}
	$.fn.hotMap = function (opt){
		
		var instance = this.data('hotMap');
		if(instance){
			return instance;
		}else {
			instance = new $.hotMap(this,opt||{});
			this.data('hotMap',instance);
			return instance;
		}
	}
})
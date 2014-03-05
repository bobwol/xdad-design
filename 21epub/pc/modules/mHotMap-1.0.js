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
			var rules = this.options.style;
			var divNode = document.createElement("div");
			divNode.innerHTML = "<br><style>"+rules+"</style>";
			document.body.appendChild(divNode);
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
			// this.$a.tooltip({
		 //      title: function () { 
		 //          return $(this).atrr("data-title")
		 //      },
		 //      trigger:'hover'
		 //    })
		    this.$a.click(function(e){
		    	self.options.click(this)
		    })
		},
		_init:function(){
			
		},
		show:function(id){
			if($.hotMap.current==id)return;
			
			// if($.hotMap.current)$('#'+$.hotMap.current).tooltip('hide');
			// $('#'+id).tooltip('show')
			$.hotMap.current = id;
			this.options.show($('#'+id))
		}
	}
	$.hotMap.defaults = {
		data:[
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
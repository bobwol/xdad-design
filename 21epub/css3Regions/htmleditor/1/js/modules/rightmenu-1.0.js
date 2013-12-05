;(function (){
	function GetColor() {
		var r = Math.floor(Math.random() * 255).toString(16);
		var g = Math.floor(Math.random() * 255).toString(16);
		var b = Math.floor(Math.random() * 255).toString(16);
		r = r.length == 1 ? "0" + r : r;
		g = g.length == 1 ? "0" + g : g;
		b = b.length == 1 ? "0" + b : b;
		return "#" + r + g + b;
	}
	String.prototype.replaceWith = function(d) {
		return this.replace(/\{\$(\w+)\}/g, function(a, c) {
			if (c in d) {
				return d[c];
			} else {
				return a;
			}
		});
	};
	var no = 0;
	var num = 0;
	function getUid(){
		no++;
		return "TreeDict_"+no;
	}
	function getKey(){
		num++;
		return "key"+num;
	}
	function log(msg){
		console.log(msg)
	}
	var json={
		'0':{
			tag:'div',
			id: '0',
			css: {
				left:'50px',
				top:'50px',
				height:'500px',
				width:'500px'
			},
			className:'a0',
			con:'0',
			fn:{
				'click':function(){alert('我是0')}
			},
			attr:{
				x:1,
				y:1
			},
			sub:{
				'0':{
					tag:'div',
					id: '0_0',
					css: {
						left:'50px',
						top:'50px',
						height:'200px',
						width:'400px'
					},
					className:'a0_0',
					con:'0_0',
					sub:{
						'0':{
							tag:'div',
							id: '0_0_0',
							css: {
								left:'50px',
								top:'50px',
								height:'100px',
								width:'300px'
							},
							className:'a0_0_0',
							con:'0_0_0'	
						}
					}
				},
				'1':{
					tag:'div',
					id: '0_1',
					css: {
						left:'50px',
						top:'250px',
						height:'200px',
						width:'400px'
					},
					className:'a0_1',
					con:'0_1'
				}
			}
		}
	}
	$(".btn").click(function (){
		var id = $(this).attr("id");
		var key = $(this).attr("key")||"";
		var opt = $(this).attr("opt")||"";
		
		g[id](key,opt);
	})
	$("#ad").click(function (){
		var id = $(this).attr("id");
		g[id]("0_0_0",{
			tag:'div',
			id: '0_1',
			css: {
				left:'20px',
				top:'20px',
				height:'50px',
				width:'100px'
			},
			className:'a0_1',
			con:'0_1'
		});
	})
	$("#rm").click(function (){
		var id = $(this).attr("id");
		var key = $(this).attr(key);
		g[id](key);
	})
	$("#up").click(function (){
		var id = $(this).attr("id");
		var key = $(this).attr("key");
		g[id](key,{
			tag:'div',
			id: '0_1',
			css: {
				left:'30px',
				top:'20px',
				height:'50px',
				width:'100px'
			},
			className:'a0_1',
			con:'0_1'
		});
	})
	var TreeDict = function() {};
	TreeDict.prototype = {
		constructor : TreeDict,
		getlen:function (sub){
			var l = 0;
			for(n in sub){
				l++
			}
			return l;
		},
		ad : function(obj,opt) {
			
			var key = $(obj).attr("key");
			var _id = getUid();
			var keyA = key.split("_");
			var ketS = "['"+keyA.join("']['sub']['")+"']"
			var d = eval('this.data'+ketS);
			var sub =(d.sub = d.sub||{});
			var no  = this.getlen(sub);
			opt["id"] = _id;
			opt["con"] = _id;
			sub[getKey()] = opt;	
			this.refresh();
		},
		rm : function(ref,del) {
			log('rm')
			log(ref[0])
			if(!del){
				var key = $(ref).attr("key");
				var keyA = key.split("_");
				var ketS = "['"+keyA.join("']['sub']['")+"']"
				
				var dd = this.data;
				var d = eval('dd'+ketS);
				var tmpPos = $(ref).offset();
				var $p = $(ref).parent();
				if($p.hasClass("dragdropresize")){
					var ppos = $p.offset();
					var dragPos = {
						left: tmpPos.left-ppos.left, 
						top: tmpPos.top-ppos.top,
						width: $(ref)[0].offsetWidth, 
						height: $(ref)[0].offsetHeight
					};
				}else{
					var dragPos = {
						left: tmpPos.left, 
						top: tmpPos.top,
						width: $(ref)[0].offsetWidth, 
						height: $(ref)[0].offsetHeight
					};
				}
				
				d['css']['left'] = dragPos.left+"px";
				d['css']['top'] = dragPos.top+"px";
				d['css']['width'] = dragPos.width+"px";
				d['css']['height'] = dragPos.height+"px";
				
				
				var p = $(ref)[0].parentNode;
				var pkey = $(p).attr("key");
				var pkeyA = pkey.split("_");
				var pketS = "['"+pkeyA.join("']['sub']['")+"']"
				var pd = eval('this.data'+pketS);
				var psub =(pd.sub = pd.sub||{});
				psub[getKey()] = d;	
				eval("delete dd"+ketS);
				
			}else {
				var key = $(ref).attr("key");
				var keyA = key.split("_");
				var ketS = "['"+keyA.join("']['sub']['")+"']"
				var dd = this.data;
				eval("delete dd"+ketS);
			}
			this.refresh();
			
			
			
		},
		up:function(ref,remove){
			log('up')
			if(remove){
				this.rm(ref);
			}else{
				//debugger;
				var key = $(ref).attr("key");
				var keyA = key.split("_");
				var ketS = "['"+keyA.join("']['sub']['")+"']"
				var dd = this.data;
				var d = eval('dd'+ketS);
				var tmpPos = $(ref).offset();
				var $p = $(ref).parent();
				if($p.hasClass("dragdropresize")){
					var ppos = $p.offset();
					var dragPos = {
						left: tmpPos.left-ppos.left, 
						top: tmpPos.top-ppos.top,
						width: $(ref)[0].offsetWidth, 
						height: $(ref)[0].offsetHeight
					};
				}else{
					var dragPos = {
						left: tmpPos.left, 
						top: tmpPos.top,
						width: $(ref)[0].offsetWidth, 
						height: $(ref)[0].offsetHeight
					};
				}
				if(d.html)d.html = $(ref).html();
				
				d['css']['left'] = dragPos.left+"px";
				d['css']['top'] = dragPos.top+"px";
				d['css']['width'] = dragPos.width+"px";
				d['css']['height'] = dragPos.height+"px";
				
				log(d['css'])
				//return
				this.refresh();
				//eval("dd"+ketS+" = "+JSON.stringify(opt));
				
				//var item = $("#"+key)[0];
				//item.parentNode.removeChild(item);
			}
			
		},
		KnobUp:function(ref,suby,type){
			log('KnobUp')
			
			/*
			1.找到所有父元素
			2.找到所有y<当前y的所有子元素
			3.所有父元素都扩展
			4.所有子元素都移动
			*/
			var allChild = [];
			var allParent = [];
			function getParent(ref){
				var temp = $(ref).parent();
				if(temp){
					var key = temp.attr("key");
					if(key =="root"){
						//allParent.push(temp);
					}else {
						allParent.push(temp);
						getParent(temp)
					}
				}
			}
			getParent(ref)
			
			
			
			function getChild(parent){
				var temp = parent.children();
				for(var n=0;n<temp.length;n++){
					allChild.push($(temp[n]))
				}
			}
			for(var i=0;i<allParent.length;i++){
				getChild(allParent[i])
			}
			
			for(var i=0;i<allParent.length;i++){
				var parent = allParent[i];
				var h = parent[0].offsetHeight;
				var py = h+suby;
				parent.css({height:(py)+"px"});
			}
			
			for(var i=0;i<allChild.length;i++){
				var child = allChild[i];
				if(child[0]==$(ref)[0])continue;
				var tmpPos = $(child).offset();
				var $p = $(child).parent();
				if($p.hasClass("dragdropresize")){
					var ppos = $p.offset();
					var dragPos = {
						top: tmpPos.top-ppos.top
					};
				}else{
					var dragPos = {
						top: tmpPos.top
					};
				}
				child.css({top:(dragPos.top+suby)+"px"});
			}
			var all = allParent.concat(allChild); 
			for(var i=0;i<all.length;i++){
				var item = all[i];
				var id = item.attr('id');
				dragresize.pushKnobA= dragresize.pushKnobA||{};
				dragresize.pushKnobA[id] = item;
			}
		},
		endKnobUp:function(){
			log('endKnobUp')
			var pushKnobA = dragresize.pushKnobA;
			console.log(pushKnobA)
			var no = 0;
			for(var n in pushKnobA){
				no++
				var child = pushKnobA[n];
				var ref = child[0];
				
				var key = child.attr("key");
				var d = this.get(key);
				
				var tmpPos = $(ref).offset();
				var $p = $(ref).parent();
				if($p.hasClass("dragdropresize")){
					var ppos = $p.offset();
					var dragPos = {
						left: tmpPos.left-ppos.left, 
						top: tmpPos.top-ppos.top,
						width: $(ref)[0].offsetWidth, 
						height: $(ref)[0].offsetHeight
					};
				}else{
					var dragPos = {
						left: tmpPos.left, 
						top: tmpPos.top,
						width: $(ref)[0].offsetWidth, 
						height: $(ref)[0].offsetHeight
					};
				}
				
				d['css']['left'] = dragPos.left+"px";
				d['css']['top'] = dragPos.top+"px";
				d['css']['width'] = dragPos.width+"px";
				d['css']['height'] = dragPos.height+"px";
				
			}
			if(!no){
				this.up(rightmenu.dragresize.ref)
			}else {
				this.refresh();
			}
			
			
		
		},
		get : function(key) {
		
			if(!key){
				return this.data;
			}else{
			
				var keyA = key.split("_");
				var ketS = "['"+keyA.join("']['sub']['")+"']"
				var dd = this.data;
				var d = eval('dd'+ketS);
				return d;
			
			}
		},
		refresh:function (){
			log('refresh')
			this.init();
			rightmenu.dragresize.ref = $("#"+rightmenu.dragresize.refID)[0];
		},
		set:function (data){
		
			this.data = data;
		},
		init:function(){
			this.box = this.box|| $("<div style='position:absolute;left:0px;top:0px;right:0px;bottom:0px;width:100%;height:100%;background-color:gray;'></div>").appendTo($('body'))[0];
			if(!this.data){
				var id = getUid();
				this.data = {
					'root':{
						tag:'div',
						id:  id,
						css: {
							left:'0px',
							top:'0px',
							bottom:'0px',
							right:'0px',
							height:'100%',
							width:'100%'
						},
						className:'a0',
						con:'0',
						fn:{
							'click':function(){alert('我是0')}
						},
						attr:{
							x:1,
							y:1
						}
					}
				}
			}
			this.box.innerHTML = "";
			//log(this.data)
			
			this.render(this.data);
		},
		render:function (data,parent){
		
			
			for(var attr in data){
				
				var obj = data[attr];
				
				var tag = obj.tag;
				
				var elem= document.createElement(tag);
					
				
				$(elem).css({'position':'absolute'});
				$(elem).css({'backgroundColor':GetColor()});
				if(parent){
					$(elem).attr('key',$(parent).attr('key')+"_"+attr);
					parent.appendChild(elem)
					$(elem).addClass('dragdropresize');
					$(elem).addClass('drsElement');
					
				}else {
					$(elem).attr('key',attr);
					this.box.appendChild(elem);
				}
				
				for(var attr2 in data[attr]){
					var _tempAttr=data[attr][attr2];
					switch(attr2){
						case 'id':
							elem.id=_tempAttr;
							break;
						case 'css':
							$(elem).css(_tempAttr);
							for(var att in _tempAttr){
								$(elem).attr("o_"+att,_tempAttr[att]);
							}
							break;
							
						case 'className': 
							$(elem).addClass(_tempAttr);
							break;
						case 'sub': 
							for(var child in _tempAttr){
								if (!_tempAttr.hasOwnProperty(child))continue;
								/*var oid = _tempAttr.oid||'0';
								oid += child
								console.log(oid)*/
								var temp = {};
								
								temp[child] = _tempAttr[child];
							//	temp[child]['oid'] = oid;
								this.render(temp,elem)
							}
							break;
						case 'con':
							$(elem).text(_tempAttr);
							break;
						case 'num':
							break;
						case 'fn':
							/*for(var fns in _tempAttr){
								(function (fns){
									$(elem).bind(fns,function(e){
										alert($(this).attr('id'))
										log(fns,_tempAttr)
										//_tempAttr[fns]();
										e.stopPropagation();
									});
								})(fns,_tempAttr)
								
							}*/
							break;
						case 'attr':
							for(var att in _tempAttr){
								$(elem).attr(att,_tempAttr[att]);
							}
							break;
						case 'html':
								$(elem).html(_tempAttr);
							break;
						case 'callback':
							_tempAttr(elem);
						break;
						case 'iframe':
							var tipIfm = document.createElement('iframe');
							tipIfm.src = "text.html";
							tipIfm.id = "editor";
							$(tipIfm).css({
								position:'absolute',
								left:0,
								top:0,
								width:'100%',
								height:'100%'
							})
							elem.innerHTML = "";
							elem.appendChild(tipIfm);
							if (tipIfm.attachEvent) {
								tipIfm.attachEvent("onload", function () {
									iframeonload();
								});
							}
							else {
								tipIfm.onload = function () {
									iframeonload();
								};
							}
							var $d = null;
							function iframeonload(){
								var doc = tipIfm.contentWindow.document;
								doc.compatMode = 'CSS1Compat';
								$(doc.body).css({
									margin: 0,
									padding: 0,
									width: tipIfm.offsetWidth - $(tipIfm).css('border-width'),
									height: tipIfm.offsetHeight - $(tipIfm).css('border-height'),
									'overflowX': 'hidden',
									'overflowY': 'auto',
									'word-wrap': 'break-word',
									'word-break': 'break-all'
								})
								$(elem).data('ifdoc',doc);
				
								$(doc.body).click(function(){
									window.dragresize.show(elem);
								});

									
								//$d = tipIfm.contentWindow.document; // IE、FF都兼容
								//window.w = $("#editor")[0].contentWindow;
								//$d.designMode="on"
								//$d.contentEditable= true;
								
							}
							break;
							
						default : 
							$(elem).attr(attr2,_tempAttr);
							break;
					}
				}
				
				
			}
		}
	}
	function RightMenu(){this.init();};
	RightMenu.prototype = {
		init:function (data){
			var self = this;
			var defaults = {
				menuList: [
					{ menuName: "div", ref: "div"},
					{ menuName: "image", ref: "image"},
					{ menuName: "text", ref: "text"}
				],
				buttons:[],
				topbar:"root"
			}
			this.options=$.extend(true,defaults,data||{});
			if ($("#div_RightMenu").size() == 0) {
				var divMenuList = 
				'<div id="div_RightMenu" class="floatingPanel panelSkin" style="visibility: visible; left: 1068px; top: 65px;min-width:130px;" >'+
					'<strong class="panelSkin-label">Text</strong>'+
					'<strong class="panelSkin-help" >?</strong>'+
					'<div class="div_RightMenu_box"></div>'+
					'<div class="buttons"></div>'+
				'</div>';
				$('body').append(divMenuList);
				this.box = $(".div_RightMenu_box");
				this.buttons = $('.buttons');
				this.RightMenu = $("#div_RightMenu");
				this.topbar = $(".panelSkin-label");
			}
			this.update();
			this.box.click(function (e){
					var elm = e.target || e.srcElement; 
					if(elm.tagName=="DIV"&&$(elm).hasClass('actionSkin-label')){
						var b=$(elm).attr('ref');
						var ref ="";
						
						if($(self.ref).hasClass('dragdropresize')){
							
							ref = self.ref;
						}else {
							
							ref = $(self.ref).parents('.dragdropresize')[0];
							
							
							if(!ref)ref = self.ref;
						}
						
						RightMenu.tools[b]&&RightMenu.tools[b]($(ref)[0])
						e.preventDefault();
					}
			})
			this.buttons.click(function (e){
					var elm = e.target || e.srcElement; 
					if(elm.tagName=="DIV"&&$(elm).hasClass('FPPSkin-icon')){
						var b=$(elm).attr('ref');
						RightMenu.tools[b]&&RightMenu.tools[b]($(elm),$(rightmenu.dragresize.ref))
						e.preventDefault();
					}
			})
			$(document).bind('click',function (e){
				if (self.RightMenu.size() > 0)self.hide();
			})
			$(document).bind('contextmenu',function (e){
				bar.hide();
				self.hide();
				self.show(e|| window.event)
				return false;
			})
		},
		update:function (data){
			var options=data||this.options;
			var self = this;
			var divMenuList = "";
			this.topbar.html(options.topbar);
			this.buttons.hide();
			this.box.hide();
			
			var menuCount = options.menuList.length;
			if (menuCount > 0) {
				for (var i = 0; i < menuCount; i++) {
					divMenuList += 	
					'<div  class="actionSkin" style="visibility: visible;" >'+
					'<div class="actionSkin-label" style="min-width: 0px;" ref="'+options.menuList[i].ref+'">'+
					options.menuList[i].menuName+
					'</div>'+
					'</div>';
				}
				this.box.html(divMenuList).show();
				
			}
			var divButtonList = "";
			var buttonCount = options.buttons.length;
			if (buttonCount > 0) {
				for (var i = 0; i < buttonCount; i++) {
					style='background: url("http://static.wix.com/services/html-web-skins/1.154.0//images/wysiwyg/core/themes/editor_web/button/fpp-buttons-icons.png") no-repeat scroll 0px -27px transparent; width: 26px; height: 27px; margin-top: -13px;'
					divButtonList += 
					'<div class="c-button buttonFPPSkin focusable"  style="visibility: visible;">'+
						'<div class="FPPSkin-icon" ref="'+
						options.buttons[i].ref+'" '+
						options.buttons[i].menuName+
						'>'+

						'</div>'+

					'</div>'
					
					
				}
				this.buttons.html(divButtonList).show();;
				
			}
			if(options.callback)options.callback(self.buttons,$(rightmenu.dragresize.ref));
			self.RightMenu.hide();
		},
		show:function (e){
			var elm = e.target || e.srcElement; 
			this.ref = elm;
			var drsMoveHandle = $(elm).hasClass('drsMoveHandle');
			//log(drsMoveHandle)
			if(drsMoveHandle){
                var ref = rightmenu.dragresize.ref;
                var type = $(ref).attr("type");
				
			    this.update(RightMenu.tools['ref_'+type]())
			}else{
			
				this.update(this.options)
			}
			this.setpos(e);
			this.RightMenu.show();
		},
		hide:function (){
			this.RightMenu.hide();
		},
		setpos:function (e){
            var objMenu = this.RightMenu;
            var m = $(objMenu);
            var l = e.pageX+ document.body.scrollLeft,// 
            t = e.pageY+document.body.scrollTop,//
            p={
                wh:$(window).height(),
                ww:$(window).width(),
                mh:m.height(),
                mw:m.width()
            }
            t=(t+p.mh)>=p.wh?(t-=p.mh):t;//当菜单超出窗口边界时处理
            l=(l+p.mw)>=p.ww?(l-=p.mw):l;
            m.css({zIndex:1000001, left:l, top:t})
        }
	}
	RightMenu.dropUpload = function (dropbox,preview){
		log('dropUpload')
		log(preview)
		log("==================")
		var dropbox = dropbox;
		dropbox.addEventListener("dragenter", function(e){ 
			dropbox.style.borderColor = 'gray'; 
			dropbox.style.backgroundColor = 'white'; 
		}, false); 
		dropbox.addEventListener("dragleave", function(e){ 
			dropbox.style.backgroundColor = 'transparent'; 
		}, false); 
		dropbox.addEventListener("dragenter", function(e){ 
			e.stopPropagation(); 
			e.preventDefault(); 
		}, false); 
		dropbox.addEventListener("dragover", function(e){ 
			e.stopPropagation(); 
			e.preventDefault(); 
		}, false); 
		dropbox.addEventListener("drop", function(e){ 
			e.stopPropagation(); 
			e.preventDefault(); 
			handleFiles(e.dataTransfer.files); 
			//submit.disabled = false; 
		}, false);  
		var handleFiles = function(files) { 
			for (var i = 0; i < files.length; i++) { 
				var file = files[i]; 
				if (!file.type.match(/image*/)) { 
					continue; 
				} 
				var img = document.createElement("img"); 
				//img.classList.add("obj"); 
				img.style['width']='100%';
				img.style['height']='100%';
				
				img.file = file; 
				
				preview.innerHTML="";
				preview.appendChild(img);  
				var reader = new FileReader(); 
				reader.onload = (function(aImg) { 
					return function(e) {
						aImg.src = e.target.result; 
					}; 
				})(img); 
				reader.readAsDataURL(file);  
			} 
		}  
	}
	RightMenu.SimpleEditor = function (config){
		var me = this;
			var defaultConfig = {
				kitWidgetName: "kitSimpleEditor",
				el: undefined,
				template: {
					editorHTML: [ 
					'<iframe class="{$editorIframeCls}" style="border: 0;width: 100%;height: 100%;"></iframe>',
					].join(''),
					editorIframeCls: 'kitjs-editor-iframe'
				},
				editorCommand:undefined
			}
			me.config = $.extend(true,defaultConfig,config);
	}
	RightMenu.SimpleEditor.prototype = {
		build: function() {
			var me = this;
			var config = me.config;
			var template = config.template
			var editorHTML = template.editorHTML.replaceWith(template);
			var wrapper = document.createElement('div');
			wrapper.style['height'] = '100%';
			wrapper.style['width'] = '100%';
			wrapper.style['position'] = 'absolute';
			wrapper.style['left'] = '0';
			wrapper.style['top'] = '0';
			me.wrapper = wrapper;
			config.el.appendChild(wrapper);
			wrapper.innerHTML = editorHTML;
			
			me._intervalIframeReadyCount = 0;
			me._intervalIframeReady = setInterval(function() {
				me._intervalIframeReadyCount++;
				var editorIframe = $("."+template.editorIframeCls, wrapper)[0];
				
				me.editorIframe = editorIframe;
				if (me._intervalIframeReadyCount > 10000) {
					clearInterval(me._intervalIframeReady);
				}
				if (me.editorIframe&&me.editorIframe.contentWindow) {
					clearInterval(me._intervalIframeReady);
					me.doc = editorIframe.contentWindow.document;
					me.doc.designMode = 'on';
					me.doc.contentEditable = true;
					me.doc.compatMode = 'CSS1Compat';
					$(me.doc.body).css({
						margin: 0,
						padding: 0,
						width: '100%',
						height: '100%',
						'overflowX': 'hidden',
						'overflowY': 'auto',
						'word-wrap': 'break-word',
						'word-break': 'break-all'
					})
				}
			}, 300);
		
		
			$(config.editorCommand).click(function (e){
				me.excuteCommand('bold');
			})
			
		},
		excuteCommand: function(command) {
			var me = this;
			if (command == 'bold') {
				me.doc.execCommand('bold', false, null);
			} else if (command == 'highlight') {
				me.doc.execCommand('backcolor', false, 'orange');
				me.doc.execCommand('forecolor', false, 'white');
			} else if (command == 'italic') {
				me.doc.execCommand('italic', false, null);
			}
			
		}
	};
	RightMenu.tools={
		 "div":function(ref){
			rightmenu.treedict.ad(ref,{
				type:'div',
				tag:'div',
				css: {
					left:'10px',
					top:'10px',
					height:'200px',
					width:'250px',
					'min-height':'200px'
				},
				className:'a0',
				con:'0',
				fn:{
					'click':function(){}
				},
				attr:{
					x:1,
					y:1
				}
			});
		},
		 "text":function(ref){
			rightmenu.treedict.ad(ref,{
				type:'text',
				tag:'div',
				css: {
					left:'10px',
					top:'10px',
					height:'100px',
					width:'150px',
					'min-height':'100px'
				},
				className:'a0',
				con:'0',
				fn:{
					'click':function(){
						alert(1)
					}
				},
				attr:{
					x:1,
					y:1
				},
				iframe:'',
				//html:'<iframe id="iframe1" style="border:0;width:100%;height:100%;margin:0;padding:0;" src="text.html"></iframe>',
				callback:function (elem){
					//alert($("#iframe1",$(elem)[0]).contents().find("#form1").html());
					// var doc = $(elem).find('iframe')[0].contentWindow.document;
					// $(doc.body).css({
						// height:'100%',
						// width:'100%',
						// margin:0,
						// padding:0,
						// 'background-color':'red'
						
					// })
					//alert($(doc.body).html())
					
					//$('body',doc).html("ccc")
					
					
				}
			});
		},
		 "image":function(ref){
			rightmenu.treedict.ad(ref,{
				type:'image',
				tag:'div',
				css: {
					left:'10px',
					top:'10px',
					height:'100px',
					width:'150px',
					'min-height':'100px'
				},
				className:'a0',
				con:'0',
				fn:{
					'click':function(){}
				},
				attr:{
					x:1,
					y:1
				},
			});
		},
		 "ref_div":function(){
			return {
				menuList: [],
				buttons:[
				
					 { menuName: 'style=\'background: url("http://static.wix.com/services/html-web-skins/1.154.0//images/wysiwyg/core/themes/editor_web/button/fpp-buttons-icons.png") no-repeat scroll 0px 0px transparent; width: 26px; height: 27px; margin-top: -13px;\'', ref: "remove"}
				],
				topbar:'div'
			}
		},
		 "ref_text":function(){
		   return {
				menuList: [ ],
				buttons:[
					 { menuName: 'style=\'background: url("http://static.wix.com/services/html-web-skins/1.154.0//images/wysiwyg/core/themes/editor_web/button/fpp-buttons-icons.png") no-repeat scroll 0px -54px transparent; width: 26px; height: 27px; margin-top: -13px;\'', ref: "bold"},
					 { menuName: 'style=\'background: url("http://static.wix.com/services/html-web-skins/1.154.0//images/wysiwyg/core/themes/editor_web/button/fpp-buttons-icons.png") no-repeat scroll 0px 0px transparent; width: 26px; height: 27px; margin-top: -13px;\'', ref: "remove"}
				],
				topbar:'text',
				callback:function (buttons,ref){
					var bs = buttons.find('.FPPSkin-icon');
					for(var i=0;i<bs.length;i++){
						var b = $(bs[i]).attr("ref");
						if(b=='bold'){
							$(bs[i]).click(function(e){
							 bar.show('kitjs',ref);
								var ifdoc = ref.data('ifdoc');
								ifdoc.designMode = 'on';
								ifdoc.contentEditable = true;
							})
							break;
						}
					}
				}
			}
		},
		 "ref_image":function(){
			return {
				menuList: [],
				buttons:[
					 { menuName: 'style=\'background: url("http://static.wix.com/services/html-web-skins/1.154.0//images/wysiwyg/core/themes/editor_web/button/fpp-buttons-icons.png") no-repeat scroll 0px -27px transparent; width: 26px; height: 27px; margin-top: -13px;\'', ref: "upload"},
					 { menuName: 'style=\'background: url("http://static.wix.com/services/html-web-skins/1.154.0//images/wysiwyg/core/themes/editor_web/button/fpp-buttons-icons.png") no-repeat scroll 0px 0px transparent; width: 26px; height: 27px; margin-top: -13px;\'', ref: "remove"}
				],
				topbar:'image',
				callback:function (buttons,ref){
					RightMenu.dropUpload($("#dropbox")[0],ref[0]);
					var bs = buttons.find('.FPPSkin-icon');
					for(var i=0;i<bs.length;i++){
						var b = $(bs[i]).attr("ref");
						if(b=='upload'){
							$(bs[i]).click(function(e){
								bar.show('dropbox',ref);
							})
							break;
						}
					}
				}
			}
		},
		 "remove":function(elem,ref){
			ref.parent()[0].removeChild(ref[0])
			treedict.rm(ref,true)
		 },
		 "bold":function(){
		
			//alert( "bold")
        },
		 "upload":function(dropbox,preview){
			
         }
	}
	window.TreeDict = TreeDict;
	window.RightMenu = RightMenu;
})(window,jQuery);

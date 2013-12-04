epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0')
	var contains = function(root, el) { 
		if (root.compareDocumentPosition) 
		return root === el || !!(root.compareDocumentPosition(el) & 16); 
		if (root.contains && el.nodeType === 1){ 
		return root.contains(el) && root !== el; 
		} 
		while ((el = el.parentNode)) 
		if (el === root) return true; 
		return false; 
	} 
	var isChildOf = function(parentEl, el, container) {
        if (parentEl == el) {
            return true;
        }
        if (parentEl.contains) {
            return parentEl.contains(el);
        }
        if ( parentEl.compareDocumentPosition ) {
            return !!(parentEl.compareDocumentPosition(el) & 16);
        }
        var prEl = el.parentNode;
        while(prEl && prEl != container) {
            if (prEl == parentEl)
                return true;
            prEl = prEl.parentNode;
        }
        return false;
    };
    var hide = function (ev) {
        if (!ev.target){
            ev.target=ev.srcElement||document;
        }
        if (ev.target!==null&&ev.target.nodeType===3){
            ev.target=ev.target.parentNode;
        }
        if (ev.target !=  self.$obj[0] && !isChildOf(self.$tip[0], ev.target, self.$tip[0])) {
           self.hide();
        }
    };
    
	function Menu(obj,options){
		this.data = {};
		this.$el = obj;
		this.options = options||{};
		this.configure();
		this.initialize();
		
	};
	Menu.isMenu =function (el) {
		function isMod(elem, key) {
			var attr = elem.getAttribute("data-role") || null;
			if (!attr) return false;
			if (!key) return false;
			if (attr !== key) {
				return false
			} else {
				return true
			}
		}
		while (!isMod(el, "menu") && document.documentElement != el) {
			el = el.parentNode
		}
		return el == document.documentElement? null: el;
	}
	Menu.prototype = {
		configure:function(){
			var css = document.createElement("style");
			css.setAttribute("type", "text/css");
			var css_str = this.options.css;
			var css_text = document.createTextNode(css_str);
			css.appendChild(css_text);
			if(css.styleSheet){ 
			     css.styleSheet.cssText = css_str;
			}else {
			     var css_text = document.createTextNode(css_str);
			     css.appendChild(css_text);
			}
			document.getElementsByTagName("head")[0].appendChild(css);
			this.$menu = $('<div class="newMenu" style="display: ; position: absolute; left: -999px; top: -999px;"></div>');
			this.$menu.appendTo($('body'))
			
		},
		initialize:function(){
			var self = this;
			self.delegateEvents();
			// this.getData(function(data){
			// 	self.render(data);
			// })
		},
		uninit:function(){


		},
		template:function(){

		},
		render:function(data){	
			var self = this;
			this.$menu.html("");
			$.tmpl(this.options.template,data).appendTo(this.$menu);
			//self.$navigation =  $('#menu-top-navigation');
			
			//this.$el.trigger('click.grid',this.$el.find(this.options.click_selecter+":first"));
		},
		refresh:function(){

		},
		fetch:function(){

		},
		config:function(key){
			return this.options[key]

		},
		_menu:function(obj){
			var self = this;
			function menu(obj){
				this._init(obj);
			}
			menu.prototype = {
				_init:function (obj) {
					this._setOptions(obj);
					this._render();
					this._bindEvent();

				},
				_setOptions:function (obj) {
					this.elem = obj;
					var params = this._getAttrOptions();
					var defaults = {};
					this.opt = $.extend(true,defaults,params);

				},	
				_getAttrOptions:function () {
					var attrParamsName ='data-param';
					var params = this.elem.getAttribute(attrParamsName);
					if(params) {
						params = eval("("+params+")");
					} else {
						params = {};
					}
					return params;
				},
				_render:function () {
					self.$menu.html("");
					$.tmpl(self.options.template,this.opt).appendTo(self.$menu);
				},
				_bindEvent:function () {
					var _that = this;
					$(_that.elem).bind('mouseover',function () {

						_that._readyShow.call(_that,arguments);
					});
					$(_that.elem).bind('mouseout',function () {
						_that._readyHide.call(_that,arguments);
					});
					self.$menu.bind('mouseover',_that._clearTimeouts.bind(_that));
					self.$menu.bind('mouseout',_that._mouseout.bind(_that));
					//_that._readyShow.call(_that);
				},
				_readyShow:function () {
					var self = this;
					var e = arguments[0]
					
					self._clearTimeouts();
					self.showTimeout = 
					setTimeout(function () {
						self._show.call(self,e);
					}, 500);					
				},
				_readyHide:function () {
					var self = this;
					var e = arguments[0]
					this._clearTimeouts();
					this.hideTimeout = setTimeout(this._hide.bind(this),300);					
				},
				_mouseover:function (e) {
					var self = this;
					self._clearTimeouts();
					self.showTimeout = 
					setTimeout(function () {
						self._show(e);
					}, self.opt.options.showTimeout);			
				},
				_mouseout:function () {
					this._clearTimeouts();
					this.hideTimeout = setTimeout(this._hide.bind(this),300);			
				},
				_clearTimeouts:function () {
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
					if (this.hideTimeout) {
						clearTimeout(this.hideTimeout);
						this.hideTimeout = 0;
					}
					
				},
				_show:function (e) {
					var _that = this;
					if(!$(_that.elem).hasClass('active'))return;	
					_that.active = true;
					var pos = $(_that.elem).offset();
					self.$menu.css({"position":"absolute","left":pos.left+$(_that.elem).width()/2,"top":pos.top+$(_that.elem).height()})	
		
				},
				_hide:function () {
					if (!this.active) return;
					var _that = this;
					self.$menu.css({"position":"absolute","left":"-999px","top":"-999px"})	
					this.active = !this.active;
					
					
					
				},
				execute:function () {
					var self = this;
					$(this.elem).trigger("mouseover");
				}
			}
			var instance = $(obj).data('_menu');

			if (instance)return instance;  
			instance = new menu(obj);
			$(obj).data('_menu',instance); 
			return instance;
		},
		delegateEvents:function(){
			var self = this;
			$(document).bind("mouseover",function (e) {
				var o = Menu.isMenu (e.target);
				if (o) {
					if(!$(o).hasClass('active'))return;		
					self._menu(o)
				}
			});
			self.$menu.bind("mouseover",function (e) {
            	var target = e.target;
            	var tagName = target.tagName;
            	if(tagName == 'A'){
					var li = $(target).parent()[0];
					if(!$(li).data('dropMenu'))
					self.dropMenu(li)

				}
			});
		},
		dropMenu: function(li){
			var self = this;
            var CLS_HAS_MENU = 'has-sub-menu', 
                isIE = $.browser.msie, // 是否为 IE 浏览器
                version = $.browser.version; // 浏览器的版本
        	var menuItem = 'li';
        	var subMenuItem = 'ul';
           
            var curMenu = $(li),
            curLink = curMenu.is('a') ? curMenu : $(curMenu.find('a:first')), 
            subMenus = $(subMenuItem, curMenu), 
            hasMenu = subMenus.length >= 1, 
            curSubMenu = null,
            curSubMenuLastItem = null, 
            show = function(){
                if (!isIE || (isIE && version > 6)) {
                    curSubMenu.show(200);
                }
                else {
                    curSubMenu.css('display', 'block');
                }
            }, 
            hide = function(){
                if (!isIE || (isIE && version > 6)) {
                    curSubMenu.hide(150);
                }
                else {
                    curSubMenu.css('display', 'none');
                }
            };
            $(li).data('dropMenu',true)
            // 只在有子菜单的时候才做相应的处理
            if (hasMenu) {
                // 无赖 WordPress 的输出没有 .has-sub-menu
                // 只要自己手动加上了
                curMenu.addClass(CLS_HAS_MENU);
                // 找到当前 li 对应的子菜单，而不是把更次级的子菜单都找到
                // 不习惯用 subMenus.get(0)
                curSubMenu = $(subMenus[0]);
                // 当前子菜单的最后一项（a 标签） 
				curSubMenuLastItem = curSubMenu.find('a:last');
				
                // mouse event
                curMenu.hover(show, hide);
                // key(tab key) event
                // 获得焦点是在当前 li 下的第一个A标签上处理
                curLink.focus(show);
                // 失去焦点则需要是tab让子菜单的最后一个菜单项都走过了，才关闭子菜单
                curSubMenuLastItem.blur(hide);
                show();
            }
        },  
		getCurrent:function(){

		},
		getData:function(callback){
			this.options.get_data(callback)
		}

	};
	$.fn.menu = function(options){
		var defaults = {
			hover_selecter:'h4',
			click_selecter: "tr",
			template:[
				'<ul class="menu" id="menu-top-navigation">',
  				'	<li class="menu-item  has-sub-menu">',
				'        <a href="###">Frontend</a>',
				'        <ul class="sub-menu">',
				'          	<li class="menu-item">',
				'                <a href="###">CSS 3</a>',
				'            </li>',
				'            <li class="menu-item has-sub-menu">',
				'                <a href="###">JavaScript</a>',
				'                <ul class="sub-menu">',
				'                   <li class="menu-item has-sub-menu">',
				'                        <a href="###">JavaScript</a>',
				'                        <ul class="sub-menu">',
				'                            <li class="menu-item">',
				'                                <a href="###">jQuery</a>',
				'                            </li>',
				'                            <li class="menu-item">',
				'                                <a href="###">YUI</a>',
				'                            </li>',
				'                        </ul>',
				'                    </li>',
				'                    <li class="menu-item">',
				'                        <a href="###">YUI</a>',
				'                    </li>',
				'                </ul>',
				'            </li>',
				'         </ul>',
				'    </li>',
				' </ul>'
			].join(""),
			url:"",
			item_click:function(){

			},
			css:[
				'.newMenu ul{',
			    '    padding:0;',
			    '}',
			    '.newMenu #menu-top-navigation {',
			    '    /*',
			    '    margin: 10px auto 600px;',
			    '    width:960px;',
			    '    */',
			    '    ',
			    '    width:121px;',
			    '    height:36px;',
			    '}',
			    '.newMenu .menu {',
			    '    margin: 0;',
			    '}',
			    '.newMenu .menu-item {',
			    '    position: relative;',
			    '    z-index: 2;',
			    '    float: left;',
			    '    margin-left: 3px;',
			    '    font-size: 14px;',
			    '    width: 115px;',
			    '    line-height: 36px;',
			    '    list-style-type: none;',
			    '    text-align: center;',
			    '    display: inline;',
			    '}',
			    '.newMenu .menu .has-sub-menu {',
			    '    /*border-top: 3px solid #369;*/',
			    '    border-right: 3px solid #369;',
				'    line-height: 36px;',
			    '}',
			    '.newMenu .sub-menu .has-sub-menu {',
			    '    border-top: none;',
			    '    line-height: 36px;',
			    '    border-right: 3px solid #369;',
			    '    width: 112px;',
			    '}',
			    '.newMenu .menu-item a:link, .menu-item a:visited, .menu-item a:hover {',
			    '    font-weight: bold;',
			    '    display: block;',
			    '    width: 100%;',
			    '    background-color: #3B3939;',
			    '    color: #fff;',
			    '    overflow: hidden;',
			    '}',
			    '.newMenu .menu-item a:hover {',
			    '    color: #009FBC;',
			    '    background-color: #FFF;',
			    '    text-decoration: none;',
			    '}',

			    '.newMenu .menu-item .sub-menu {',
			    '    display: none;',
			    '    position: absolute;',
			    '    z-index: 3;',
			    '    /*top: 36px;',
			    '    left: 0;*/',
			    '    top: 0;',
			    '    left: 115px;',

			    '    margin: 0;',
			    '    box-shadow: 0 3px 10px #333;',
			    '    width: 115px;',
			    '}',

			    '.newMenu .sub-menu li {',
			    '    margin-left: 0;',
			    '}',

			    '.newMenu .sub-menu .sub-menu {',
			    '    top: 0;',
			    '    left: 115px;',
			    '    z-index: 4;',
			    '}'
				
				// '.newMenu{ background:white; width:68px; display:;}',
				// '.newMenu li { text-align:center; line-height:24px; height:24px;border: 1px solid #DDDDDD;}',
				// '.newMenu li a{ color:black; display:block;width:68px;height:24px;}',
				// '.newMenu li a:hover{color:#7BBE37;}'
			].join("")
		};  
        var options = $.extend(true,defaults, options);
		this.each(function(){
			var obj = $(this);  
			return obj.data('menu')||obj.data('menu',new Menu(obj,options));
		});
	}
});


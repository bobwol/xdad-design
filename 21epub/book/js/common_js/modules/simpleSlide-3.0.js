/*
*$(xxx).simpleSlide({
	containerSelecter:"#focus ul",
	liSelecter:"#focus ul li",
	prevSelecter:".prev",
	nextSelecter:".next"

})
**/
(function (win){
	;(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},h=0,c=0,l=[];function g(e,d,g,i){var c={data:i||(d?d.data:{}),_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};e&&a.extend(c,e,{nodes:[],parent:d});if(g){c.tmpl=g;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++h;(l.length?f:b)[h]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a.fn[d].apply(a(i[h]),k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,l,j){if(d[0]&&d[0].nodeType){var f=a.makeArray(arguments),g=d.length,i=0,h;while(i<g&&!(h=a.data(d[i++],"tmplItem")));if(g>1)f[0]=[a.makeArray(d)];if(h&&c)f[2]=function(b){a.tmpl.afterManip(this,b,j)};r.apply(this,f)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var j,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(i(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);j=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(i(c,null,j)):j},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function i(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:i(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=j(c).concat(b);if(d)b=b.concat(j(d))});return b?b:j(c)}function j(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,j,d,b,c,e){var i=a.tmpl.tag[j],h,f,g;if(!i)throw"Template command not found: "+j;h=i._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=k(b);e=e?","+k(e)+")":c?")":"";f=c?b.indexOf(".")>-1?b+c:"("+b+").call($item"+e:b;g=c?f:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else g=f=h.$1||"null";d=k(d);return"');"+i[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(g).split("$1").join(f).split("$2").join(d?d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(d,c,b,a){a=a?","+a+")":b?")":"";return a?"("+c+").call($item"+a:d}):h.$2||"")+"_.push('"})+"');}return _;")}function n(c,b){c._wrap=i(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function k(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,i;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(i=j.length-1;i>=0;i--)m(j[i]);m(k)}function m(j){var p,i=j,k,e,m;if(m=j.getAttribute(d)){while(i.parentNode&&(i=i.parentNode).nodeType===1&&!(p=i.getAttribute(d)));if(p!==m){i=i.parentNode?i.nodeType===11?0:i.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[i]||f[i],null,true);e.key=++h;b[h]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;i=a.data(j.parentNode,"tmplItem");i=i?i.key:0}if(e){k=e;while(k&&k.key!=i){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent,null,true)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);
	$.simpleSlide = function (el,options){
		this._setoptions(el,options);

	}
	$.simpleSlide.prototype = {
		_setoptions:function(el,options){
			var self = this;
			this.$el = $(el);
			this.mouseover = false;
			this.options = $.extend(true,$.simpleSlide.defaults,options||{});
			this._render();
			this._runTimmer();
		},
		_render:function(){
			var self = this;
			if(this.options.clear)this.$el.html('');
			
			if(this.options.template){
				$.tmpl(this.options.template,this.options.data||{}).appendTo(this.$el);
			}
			
			self.$containerSelecter = $(self.options.containerSelecter,this.$el[0]);
			self.$liSelecter = $(self.options.liSelecter,this.$el[0]);
			self.$prevSelecter = $(self.options.prevSelecter,this.$el[0]);
			self.$nextSelecter = $(self.options.nextSelecter,this.$el[0]);
			self.$dlSelecter = $(self.options.dlSelecter,this.$el[0]);
			
			self.$pagenationSelecter = $(self.options.pagenationSelecter,this.$el[0]);

			self.$containerSelecter.css({
				position:"absolute",
				left:0
			})
			self.$liSelecter.css({
				 float:"left"
			})
			self.$liSelecter.show();
			self.len = self.$liSelecter.length;
			self.index = 0;
			self.sWidth = self.$el.width();
			self.$containerSelecter.css("width",self.sWidth * (self.len));
			self._delegateEvents();
			self._init();
		},
		_delegateEvents:function(){
			var self = this;
			//上一页按钮
			self.$prevSelecter.click(function() {
			
				self.index -= 1;
				if(self.index == -1) {self.index = self.len - 1;}
				self._showPics(self.index);
			});

			//下一页按钮
			self.$nextSelecter.click(function() {
				self.index += 1;
				if(self.index == self.len) {self.index = 0;}
				self._showPics(self.index);
			});
			self.$pagenationSelecter.click(function(){
				var $el = $(this);
				$el.addClass('active').siblings().removeClass('active');
				var index = $el.parent().children('li').index($el[0]);
				self.index = index;
				self._showPics(self.index);
			})
			
			self.$el.hover(function(){
					self.mouseover = true;
					self._clearTimeer();
				},
				function(){
					self.mouseover = false;
					self._setTimeer()
				}
			)
			
			
		},
		_init:function(){
			
		},
		_showPics:function (index){
			var self = this;
			self._clearTimeer();
			var nowLeft = -self.index*self.sWidth; //根据index值计算ul元素的left值
			self.$dlSelecter.hide();
			
			self.$containerSelecter.stop(true,false).animate({"left":nowLeft},300,function (){
				$(self.$dlSelecter[self.index]).show();
				//self.options.showAfter(self.$liSelecter.eq(self.index))
			}); //通过animate()调整ul元素滚动到计算出的position
			
			this._setPagenation()

		},
		_setPagenation:function(){
			var self = this;

			var $el = $(self.$pagenationSelecter[self.index])
			$el.addClass('active').siblings().removeClass('active');
			if(!this.mouseover){
				self._setTimeer();
			}
			
		},
		_auto:function(){
			var self = this;
			self.index += 1;
			if(self.index == self.len) {self.index = 0;}
			self._showPics(self.index);
		},
		_runTimmer:function(){
			var self = this;
			self._clearTimeer();
			self._setTimeer();
		},
		_setTimeer:function(){

			var self = this;
			
			self.timeer = setTimeout(function(){
				self._auto();
			},2000)
		},
		_clearTimeer:function(){
			var self = this;
			clearTimeout(self.timeer);
			this.timeer = null;
		}
	}
	$.simpleSlide.defaults = {
		containerSelecter:">ul",
		liSelecter:">ul>li",
		prevSelecter:".prev",
		nextSelecter:".next",
		pagenationSelecter:".pagenation li"
	}
	$.fn.simpleSlide = function(options) {

    	var options = options || {};
        var thisCall = typeof options;
        switch (thisCall) {

            // method 
            case 'string':
                var args = Array.prototype.slice.call(arguments, 1);
               
                this.each(function () {
                    var instance = $.data(this, 'simpleSlide');
                  	if (!instance) {
                        return false;
                    }

                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                        return false;
                    }
                    instance[options].apply(instance, args);
                });
            break;
            case 'object':

                this.each(function () {

                var instance = $.data(this, 'simpleSlide');

                if (instance) {

                    // update options of current instance
                    instance.update(options);

                } else {

                    // initialize new instance
                    instance = new $.simpleSlide(this,options);

                    // don't attach if instantiation failed
                    if (!instance.failed) {
                        $.data(this, 'simpleSlide', instance);
                    }

                }


            });

            break;

        }

        return this;
    };
})(window);

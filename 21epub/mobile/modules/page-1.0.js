;(function (window, $, undefined) {
    "use strict";
    $.page = function infscr(element,options) {
        this.$selecter = $(element);
        if (!this._create(options)) {
            this.failed = true;
        }
    };
    $.page.defaults = {
    	totalPages:1,
    	num:5,
		debug:false,
		goto:function(no){
			console.log(no)
		},
		events:{
			"click li":'_click'
		}
	}
    $.page.prototype = {
    	_create:function(options){
			var opts = $.extend(true, {}, $.page.defaults, options);
			this.options = opts;
			if (!this._validate(options)) {
                return false;
            }
            this.cid = "_page";
            this.index = 0;
			this.totalpage = 0;
			this.num = this.options.num||5;
			this.$lis = [];
			this.$prev = null;
			this.$next = null;

            this._render();
            this._delegateEvents()
            return true;
        },
        _validate: function(opts) {
            for (var key in opts) {
                if (key.indexOf && key.indexOf('selector') > -1 && $(opts[key]).length === 0) {
                    this._debug('Your ' + key + ' found no elements.');
                    return false;
                }
            }

            return true;
        },
        _debug: function() {
            if (true !== this.options.debug) {
                return;
            }

            if (typeof console !== 'undefined' && typeof console.log === 'function') {
                // Modern browsers
                // Single argument, which is a string
                if ((Array.prototype.slice.call(arguments)).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === 'string') {
                    console.log( (Array.prototype.slice.call(arguments)).toString() );
                } else {
                    console.log( Array.prototype.slice.call(arguments) );
                }
            } else if (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object') {
                // IE8
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
            }
        },
        _delegateEvents:function(){
        	var delegateEventSplitter = /^(\S+)\s*(.*)$/;
        	var events = this.options.events;
			for (var key in events) {
				var method = events[key];
				if (!$.isFunction(method)) method = this[events[key]];
				if (!method) {
					this._debug('Method "' + events[key] + '" does not exist');
					return;
				}
				var match = key.match(delegateEventSplitter);
				var eventName = match[1], selector = match[2];
				//eventName += '.delegateEvents' + this.cid;
				method = method.bind(this);
				
				if (selector === '') {
					this.$selecter.bind(eventName, method);
				} else {
					this.$selecter.delegate(selector, eventName, method);
				}
			}
        },
        _render:function (){
        	var row = this.options.totalPages;
			if(!row)return;
			var self = this;
			this.totalpage = row-this.num+1;
			var html = [];
			html.push('<ul>');
			html.push('<li class="disabled" data-rel= "_prev" id="prev"><a href="javascript:void(0);" >← prev</a></li>');
			var min = this.index+1;
			var max = this.index+this.num;
			for(var i=0;i<row;i++){
				var no = (i+1);
				if(no<=max&&no>=min){
					if(no==1)html.push('<li class="active goto" data-rel="goto" data-no='+no+'><a href="javascript:void(0);">'+no+'</a></li>');
					else html.push('<li class="goto" data-rel="goto" data-no='+no+'><a href="javascript:void(0);">'+no+'</a></li>');
				}else {
					html.push('<li class="goto" style="display:none;" data-rel="goto" data-no='+no+'><a href="javascript:void(0);">'+no+'</a></li>');
				}
			}
			html.push('<li class="disabled" data-rel= "_next" id="next"><a href="javascript:void(0);" >next →</a></li>');
			html.push('</ul>');
			
			self.$selecter.html(html.join(""));
			self.$prev = self.$selecter.find("#prev"); 
			self.$next = self.$selecter.find("#next"); 
			self.$lis = self.$selecter.find(".goto"); 
			self._setButton();
			
		},
		_goto:function(elem){
			var self = this;
			var no = elem.getAttribute("data-no");
			//if($(elem).hasClass("active"))return;
			$(elem).parent().find(".active").removeClass("active");
			$(elem).addClass("active");
			self.options.goto(no);
		},
		_click:function(e){
			
			var self = this;
			var target = e.currentTarget;
			
			var rel = target.getAttribute("data-rel");
			if(rel&&this[rel]){
				this[rel](target);
			}else if(rel=="goto"){
				this._goto(target);
			}
		},
		_next:function(target){

			if($(target).hasClass('disabled'))return;
			var temp = this.index+1;
			if(temp>this.totalpage-1){
			
			}else{
				this.index++;
				this._setPage()
			}
			
		},
		_prev:function(target){
			if($(target).hasClass('disabled'))return;
			var temp = this.index-1;
			if(temp<0){
			
			}else{
				this.index--;
				this._setPage()
			}
		},
		_setPage:function (){
			var min = this.index+1;
			var max = this.index+this.num;
			this.$lis.each(function(index,li){
				
				
				if(index<=max-1&&index>=min-1){
					$(li).show();
				}else {
					$(li).hide();
				}
			})
			
			this._setButton();
		},
		_setButton:function (){
			
			this.$prev.removeClass('disabled');
			this.$next.removeClass('disabled');
			if (this.$lis.first()[0].style.display!='none') {
				this.$prev.addClass('disabled');
			}
			if (this.$lis.last()[0].style.display!='none') {
				this.$next.addClass('disabled');
			}
			this._goto(this.$lis[this.index]);
		},
        update: function infscr_options(key) {
            if ($.isPlainObject(key)) {
                this.options = $.extend(true,this.options,key);
            }
        }
    }
    $.fn.page = function(options) {

    	var options = options || {};
        var thisCall = typeof options;
        switch (thisCall) {

            // method 
            case 'string':
                var args = Array.prototype.slice.call(arguments, 1);
                
                this.each(function () {
                    var instance = $.data(this, 'page');
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

                var instance = $.data(this, 'page');

                if (instance) {

                    // update options of current instance
                    instance.update(options);

                } else {

                    // initialize new instance
                    instance = new $.page(this,options);

                    // don't attach if instantiation failed
                    if (!instance.failed) {
                        $.data(this, 'page', instance);
                    }

                }

            });

            break;

        }

        return this;
    };
})(window, jQuery);


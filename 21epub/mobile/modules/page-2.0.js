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
			"click li":'_click',
			"click div":'_click'
		},
		data:[]
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
			html.push('<div class="prev" data-rel= "_prev" id="prev"><a href="javascript:void(0)">prev</a></div>');
			html.push('<div class="location-bd">');
			html.push('<ul>');
			var min = this.index+1;
			var max = this.index+this.num;

			for(var i=0;i<row;i++){
				var no = (i+1);

				if(no<=max&&no>=min){
					if(no==1)html.push('<li class="active goto" data-rel="goto" data-no='+this.options.data[i].title+'><div class="wraparea"><h4><a href="javascript:void(0);">'+this.options.data[i].title+'</a></h4></div></li>');
					else html.push('<li class="goto" data-rel="goto" data-no='+this.options.data[i].title+'><div class="wraparea"><h4><a href="javascript:void(0);">'+this.options.data[i].title+'</a></h4></div></li>');
				}else {
					html.push('<li class="goto" style="display:none;" data-rel="goto" data-no='+this.options.data[i].title+'><div class="wraparea"><h4><a href="javascript:void(0);">'+this.options.data[i].title+'</a></h4></div></li>');
				}
			}
			
			html.push('</ul>');
			html.push('</div>');
			html.push('<div class="next" data-rel= "_next" id="next"><a href="javascript:void(0)">next</a></div>');
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
			
			if(target.tagName=='DIV'&& $(target).hasClass('wraparea')){
				
			}else {
				var rel = target.getAttribute("data-rel");
				
				if(rel&&this[rel]){
					this[rel](target);
					e.stopPropagation();
					return false;
				}else if(rel=="goto"){
					this._goto(target);
					e.stopPropagation();
					return false;
				}
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
        },
        show:function(id){

        	var self = this;
        	var min = this.index+1;
			var max = this.index+this.num;

			var no = '',elem ='';
			this.$lis.each(function(index,li){
				var data_no = $(li).attr("data-no")
				
				if(data_no == id){
					no = index;
					elem = $(li);
					return false;
				}
				
				
			})
			
			if(no<=max-1&&no>=min-1){
				$(elem).parent().find(".active").removeClass("active");
				$(elem).addClass("active");	
			}else {
				var _min = no;
				var _max = no+this.num;
				
				if(_max>this.totalpage+this.num-1-1){
					_max = this.totalpage-1+this.num-1;
					_min = _max - this.num;
					if(_min<0)_min = 0;
					
				}
				this.index = _min;

				var min = this.index+1;
				var max = this.index+this.num;
				
				this.$lis.each(function(index,li){
					if(index<=max-1&&index>=min-1){
						$(li).show();
					}else {
						$(li).hide();
					}
				})
				$(elem).parent().find(".active").removeClass("active");
				$(elem).addClass("active");	
				this.$prev.removeClass('disabled');
				this.$next.removeClass('disabled');
				if (this.$lis.first()[0].style.display!='none') {
					this.$prev.addClass('disabled');
				}
				if (this.$lis.last()[0].style.display!='none') {
					this.$next.addClass('disabled');
				}
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


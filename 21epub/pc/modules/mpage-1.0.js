/*
*var ins = $('.work-list').page({
    	detail:'.work-detail',
    	debug:false,
		goto:function(no){
			console.log(no)
		},
		url:{
			contentstree:'http://localhost/dev/appserv/21epub/project/site20130101/data/contentstree.json',
			unlitslist:'http://localhost/dev/appserv/21epub/project/site20130101/data/unlitslist.json'
		},
		templates:{
			unlitslist:［
				'<ul>',
					'{{each(index,value) data.data.results}}',
						'{{if !$index}}',
						'<li class="active" data-body="${$value.body}" data-title = ${$value.title}>',
						'{{else}}',
						'<li data-body="${$value.body}">',
						'{{/if}}',
						'<div class="thumb"><img src="${$value.thumbnail}" alt=""></div>',
						'<div class="title">${$value.title}</div>',
						'<div class="sub-title">${$value.description}</div>',
						'</li>',
					'{{/each}}',
				'</ul>'
			］.join(''),
			contentstree:［
				'{{each(index,value) data.data.results}}',
					'{{if !$index}}',
					'<h4 id ="${$value.id}" type="${$value.type_categorized}" class=".goto">${$value.title}</h4>'，
					'{{else}}',
					'<h4 id ="${$value.id}" type="${$value.type_categorized}" style="display:none;">${$value.title}</h4>'，
					'{{/if}}',
				'{{/each}}',
				'<div class="list nanoscrollbar">',
				'</div>',
				'<div class="prev"><a href="javascript:void(0)">prev</a></div>',
	      		'<div class="next"><a href="javascript:void(0)">next</a></div>'
			］.join(''),
			detail:
				'<hgroup>',
				'	<h1>${title}</h1>',
				'</hgroup>',
				'<article class="nanoscrollbar">',
				'	${body}',
				'</article>'
			］.join('')
		},
		evetns:{
			contentstree:{
				"click div":'_click'
			},
			unlitslist:{
				"click li":'_unlitslist_click'
			}
		},
		click:function(){
		
		}
	})
*/
epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0')
	;(function (window, $, undefined) {
	    "use strict";
	    $.page = function infscr(element,options) {
	        this.$selecter = $(element);
	        this._create(options)
	    };
	    $.page.data = {};
	    $.page.defaults = {
	    	detail:'.work-detail',
	    	debug:false,
			goto:function(no){
				console.log(no)
			},
			url:{
				contentstree:'',
				unlitslist:''
			},
			templates:{
				unlitslist:[
				
					'<ul>',
						'{{each(index,value) data.results}}',
							// '{{if !index}}',
							// //'<li class="active" data-body="${value.body}"  data-title ="${value.title}">',
							// '{{else}}',
							'<li data-body="${value.body}" data-title ="${value.title}">',
							// '{{/if}}',
							'<div class="thumb"><img src="${value.thumbnail}" alt=""></div>',
							'<div class="title">${value.title}</div>',
							'<div class="sub-title">${value.description}</div>',
							'</li>',
						'{{/each}}',
					'</ul>'
				].join(''),
				contentstree:[
					'{{each(index,value) data.results}}',
						'{{if !index}}',
						'<h4 id ="${value.id}" type="${value.type_categorized}" class="goto">${value.title}</h4>',
						'{{else}}',
						'<h4 id ="${value.id}" type="${value.type_categorized}" style="display:none;" class="goto">${value.title}</h4>',
						'{{/if}}',
					'{{/each}}',
					'<div class="list nanoscrollbar content">',
					'</div>',
					'<div class="prev" data-rel = "_prev"><a href="javascript:void(0)">prev</a></div>',
		      		'<div class="next" data-rel = "_next"><a href="javascript:void(0)">next</a></div>'
				].join(''),
				detail:[
					'<hgroup>',
					'	<h1>${title}</h1>',
					'</hgroup>',
					'<article class="nanoscrollbar">',
					'	{{html body}}',
					'</article>'
				].join('')
			},
			events:{
				contentstree:{
					"click div":'_click'
				},
				unlitslist:{
					"click li":'_click_unlitslist'
				}
			},
			click:function(){
			
			}
		}
	    $.page.prototype = {
	    	_create:function(options){
	    		var self = this;
				var opts = $.extend(true, {}, $.page.defaults, options);
				this.options = opts;
				this.cid = "_page";
				self.index = 0;
				self.num = 1;
				this.$lis = [];
				this.$prev = null;
				this.$next = null;
				self._getcontentstree(function (data){
					self.totalpage = data.data.sum;
					self._render(data);
	            	self._delegateEvents()
	            })
		    },
	        _getcontentstree:function(callback){
	        	var self = this;

	        	self._getData(this.options.url.contentstree,function(data){
					callback(data)
				})
	        },
	        _getunlitslist:function(callback){
	        	var id = $(this.$lis[this.index]).attr("id");
	        	var url = this.options.url.unlitslist.replace("{id}",id);
	        	var self = this;
	        	self._getData(url,function(data){
					callback(data)
				})
	        },
	        _getData:function(url,callback){
	        	if($.page.data[url]){
	        		callback($.page.data[url])
				}else {
					$.ajax({
						dataType: 'json',
	                	type: 'GET',
		        		url:url,
		        		success:function(data){
		        			$.page.data[url] = data;
		        			callback(data);
		        		}
		        	})

				}
	        	
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
	        	var events1 = this.options.events;
	        	for (var key1 in events1) {

	        		var events = events1[key1];

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
					
						this['$'+key1].delegate(selector, eventName, method);
						
					}
	        	}
				
	        },
	        _render:function (data){
	        	
	        	var row = data.data.sum;
				if(!row)return;
				var self = this;
				this.totalpage = row-this.num+1;
				var min = this.index+1;
				var max = this.index+this.num;
				self.$selecter.html('');
				$.tmpl(this.options.templates.contentstree,data).appendTo(self.$selecter);
				self.$prev = self.$selecter.find(".prev"); 
				self.$next = self.$selecter.find(".next"); 
				self.$lis = self.$selecter.find(".goto"); 
				
				self.$unlitslist = self.$selecter.find(".content"); 
				self.$detail = $(self.options.detail)
				self.$contentstree = self.$selecter;
			
				self._setButton();

				
			},
			_goto:function(elem){
				var self = this;
				var no = elem.getAttribute("data-no");
				if($(elem).hasClass("active"))return;
				$(elem).parent().find(".active").removeClass("active");
				$(elem).addClass("active");

				self._getunlitslist(function (data){
					self.$unlitslist.html('');
					$.tmpl(self.options.templates.unlitslist,data).appendTo(self.$unlitslist);
	  				self._goto_unlitslist(self.$unlitslist.find('li')[0])
	            })
				
			},
			_click_unlitslist:function (e){
				var self = this;
				var target = e.currentTarget;
				this._goto_unlitslist(target);

				var data_target = $(target).attr('data-target')
				window.location.href = data_target + '/page?template_class=history+page';				

				e.stopPropagation();
				return false;
			},
			_goto_unlitslist:function (target){
				
				var self = this;
				// var data_body = $(target).attr('data-body')
				// var data_title = $(target).attr('data-title')
				
				self.$unlitslist.find('.active').removeClass('active');
				$(target).addClass('active');
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
})


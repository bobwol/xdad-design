/*
*$(xxx).simpleSlide({
	containerSelecter:"#focus ul",
	liSelecter:"#focus ul li",
	prevSelecter:".prev",
	nextSelecter:".next"

})
**/
epub.def(function (){
	epub["import"]('epub.modules.tmpl@1.0')
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
				return false;
			});

			//下一页按钮
			self.$nextSelecter.click(function() {
				self.index += 1;
				if(self.index == self.len) {self.index = 0;}
				self._showPics(self.index);
				return false;
			});
			self.$pagenationSelecter.click(function(){
				var $el = $(this);
				$el.addClass('active').siblings().removeClass('active');
				var index = $el.parent().children('li').index($el[0]);
				self.index = index;
				self._showPics(self.index);
				return false;
			})
			if(epub.runtimeEnvironment.platform == 'mobile'){
				self.$el.bind('touchstart',function(){
					self.mouseover = true;
					self._clearTimeer();
				});
				self.$el.bind('touchend',function(){
					self.mouseover = false;
					self._setTimeer()
				});
				
			}else{
				self.$el.hover(function(){
					self.mouseover = true;
					self._clearTimeer();
				},
				function(){
					self.mouseover = false;
					self._setTimeer()

				})
			}
			
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
})

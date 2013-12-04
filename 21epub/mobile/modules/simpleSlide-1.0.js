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
			this.$el = $(el);

			this.options = $.extend(true,$.simpleSlide.defaults,options||{});
			this._render();
		},
		_render:function(){
			var self = this;
			if(this.options.clear)this.$el.html('');
			console.log($.tmpl(this.options.template,this.options.data))
			$.tmpl(this.options.template,this.options.data).appendTo(this.$el);
			self.$containerSelecter = $(self.options.containerSelecter,this.$el[0]);
			self.$liSelecter = $(self.options.liSelecter,this.$el[0]);
			self.$prevSelecter = $(self.options.prevSelecter,this.$el[0]);
			self.$nextSelecter = $(self.options.nextSelecter,this.$el[0]);
			self.$dlSelecter = $(self.options.dlSelecter,this.$el[0]);
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
		},
		_init:function(){
			
		},
		_showPics:function (index){
			var self = this;
			var nowLeft = -self.index*self.sWidth; //根据index值计算ul元素的left值
			self.$dlSelecter.hide();
			self.$containerSelecter.stop(true,false).animate({"left":nowLeft},300,function (){
				$(self.$dlSelecter[self.index]).show();
				//self.options.showAfter(self.$liSelecter.eq(self.index))
			}); //通过animate()调整ul元素滚动到计算出的position
			
		}
	}
	$.simpleSlide.defaults = {
		containerSelecter:"#focus ul",
		liSelecter:"#focus ul li",
		prevSelecter:".prev",
		nextSelecter:".next",
		show:function (){}
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

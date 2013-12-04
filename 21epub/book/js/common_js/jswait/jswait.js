!function ($) {

/* JSWAIT CLASS DEFINITION
  * ========================= */
  var Jswait = function (element, options) {
    this.$element = $(element)
    this.options = options
    this.init();
  }

  Jswait.prototype = {
    init: function () {
    	_.bindAll(this);
    },
    _animate_loading:function() {
  		if (!this.loading.is(':visible')){
  			clearInterval(this.loadingTimer);
  			return;
  		}
  		$('div', this.loading).css('top', (this.loadingFrame * -40) + 'px');
  	
  		this.loadingFrame = (this.loadingFrame + 1) % 12;
	   },
  	load:function(){
      	this.loadingTimer=this.loadingFrame = 1;
  		this.$element.append(
  			this.loading	= $('<div id="jswait-loading" style="display:none;"><div></div></div>'),
  			this.overlay	= $('<div id="jswait-overlay" class="mask hide"></div>')
  		);
  		if(this.options.modal) overlay.addClass('ui-widget-overlay');
  		clearInterval(this.loadingTimer);
  		//this.overlay.show();
  		this.loading.show();
  		this.loadingTimer = setInterval(this._animate_loading, 66);	
  		this.waited=true;	
  	},
  	close:function(){
  		if(this.waited){
	  		this.loading.remove();
	  		this.overlay.remove();
	  		this.loadingFrame = 1;
	  		clearInterval(this.loadingTimer);
	  		this.waited=false;  			
  		}
  	}
  }
 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  $.fn.jswait = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('jswait')
        , options = $.extend({}, $.fn.jswait.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option :null;
      if (!data) $this.data('jswait', (data = new Jswait(this, options)))
      if(action){
      	 data[action]();
      }
      else{
      	data.load();
      }
    })
  }

  $.fn.jswait.defaults = {
	modal:false
  }

  $.fn.jswait.Constructor = Jswait


 /* JSwait DATA-API
  * ================= */

  // $(function () {
    // $('body').on('click.carousel.data-api', '[data-slide]', function ( e ) {
      // var $this = $(this), href
        // , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        // , options = !$target.data('modal') && $.extend({}, $target.data(), $this.data())
      // $target.carousel(options)
      // e.preventDefault()
    // })
  // })
}(window.jQuery);
!function ($) {

/* Resizable CLASS DEFINITION
  * ========================= */
  var Resizable = function (element, options) {
    this.$element = $(element)
    this.options = options
    this.$parent=$(options.parent);
	this.init();
  }

  Resizable.prototype = {

    init: function () {
    	this.$element.addClass('ui-resizable');
		this.$element.append(
			[
'			<div class="ui-resizable-handle ui-resizable-e"></div>',
//'			<div class="ui-resizable-handle ui-resizable-w"></div>',
//'			<div class="ui-resizable-handle ui-resizable-n"></div>',
'			<div class="ui-resizable-handle ui-resizable-s"></div>',
'			<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 2701;"></div>',
//'			<div class="ui-resizable-handle ui-resizable-nw ui-icon ui-icon-gripsmall-diagonal-nw" style="z-index: 2701;"></div>',
			].join("")
		);
		$element=this.$element;
		$parent=this.$parent;
		var $this=this;
		this.$element.find('.ui-resizable-handle').bind('mousedown',
			function(e){
				var startX=e.pageX,startY=e.pageY,endX,endY,elementwidth=$element.width(),elementheight=$element.height();
				var enablexl=($(e.target).hasClass('ui-resizable-e')||$(e.target).hasClass('ui-resizable-se')?true:false);
				var enableyd=($(e.target).hasClass('ui-resizable-s')||$(e.target).hasClass('ui-resizable-se')?true:false);
				var enablexr=($(e.target).hasClass('ui-resizable-w')||$(e.target).hasClass('ui-resizable-nw')?true:false);	
				var enableyt=($(e.target).hasClass('ui-resizable-n')||$(e.target).hasClass('ui-resizable-nw')?true:false);							
				var _adjust=function(e){
					endX=e.pageX;
					endY=e.pageY;
					var distanceX=endX-startX;
					var distanceY=endY-startY;
					x=(elementwidth+distanceX>0)?elementwidth+distanceX:0;
					y=(elementheight+distanceY>0)?elementheight+distanceY:0;
					x=enablexl?x:$element.width();
					y=enableyd?y:$element.height();
					$element.css('width',x+"px");
					$element.css('height',y+"px");	
					if($this.options.onResize) $this.options.onResize(x,y);
					//if(enablexr) $element.css('width',x+"px");
					//if(enableyd) $element.css('height',y+"px");	
					return {x:x,y:y};						
				}
				$parent.bind('mousemove',_adjust);
				$parent.bind('mouseup',function(e){
					$parent.unbind('mousemove',_adjust);
					$parent.unbind('mouseup');
					var size=_adjust(e);
					if($this.options.onStop) $this.options.onStop(size.x,size.y);	
				});
			})
			//.bind('mousemove',_adjust).bind('mouseleave',function(e){	
			//})
    },
    resize:function(opt){
    	console.info(opt);
    }
  }
 /* Resiable PLUGIN DEFINITION
  * ========================== */

  $.fn.resizable = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('resizable')
        , options = $.extend({}, $.fn.resizable.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.resize
      if (!data) $this.data('resizable', (data = new Resizable(this, options)))
      if (action) data[action]()
    })
  }

  $.fn.resizable.defaults = {
	parent:'body'
  }

  $.fn.resizable.Constructor = Resizable


 /* Resiable DATA-API
  * ================= */

  $(function () {
    // $('body').on('click.carousel.data-api', '[data-slide]', function ( e ) {
      // var $this = $(this), href
        // , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        // , options = !$target.data('modal') && $.extend({}, $target.data(), $this.data())
      // $target.carousel(options)
      // e.preventDefault()
    // })
  })
}(window.jQuery);

$(document).ready(function() {
	
	$('.masonry_brick .horizontal a').click(function() {
		$('.horizontal').fadeIn();
		$('.lightbox.horizontal .slideshow .foto img').autoMiddle();
	});
	
	$('.masonry_brick .vertical a').click(function() {
		$('.vertical').fadeIn();
		$('.lightbox.vertical .slideshow .foto img').autoMiddle();
	});
	
	$('.lightbox .overlay, .lightbox .close a').click(function() {
		$('.lightbox').fadeOut();
	});
	
		
});

// autoMiddle popup
(function($) {
	$.fn.autoMiddle = function(){
		return this.each(function(){
			$(this).css("position","absolute");
			$(this).css({
	              "left": ($(this).parent('.slideshow .foto').width() - $(this).outerWidth())/2,
	              "top": ($(this).parent('.slideshow .foto').height() - $(this).outerHeight())/2
	     	});
		});
	}
})(jQuery);
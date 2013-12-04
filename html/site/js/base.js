$(document).ready(function() {
	
	// admin entrance
	// $('.homepage, .page, .works').append('<div class="admin"><a href="../../admin/template/@login.html">管理后台</a></div>');
	
	// works
	$('.masonry_brick .horizontal a').click(function() {
		$('.horizontal').fadeIn();
		$('.lightbox.horizontal .slideshow .foto li img').autoMiddle();
	});
	$('.masonry_brick .vertical a').click(function() {
		$('.vertical').fadeIn();
		$('.lightbox.vertical .slideshow .foto li img').autoMiddle();
	});
	$('.lightbox .overlay, .lightbox .close a').click(function() {
		$('.lightbox').fadeOut('fast');
	});
	
	// menu
	$('.wrap aside ul li h4').wrap('<div class="wraparea" />');
	$('.wrap aside ul li:has(ul) > .wraparea').append("<div class='hitarea'></div>");
	$('.wrap aside ul li:has(ul)').addClass('unfold');
	$('.wrap aside ul li .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li').children('ul').slideToggle('fast');
	});
	
	// welcome
	$('.welcome nav li a').tooltip();
	$(window).resize(function() {
		$('.welcome .container').css("height","100%");
	});
	
});

// autoMiddle popup
(function($) {
	$.fn.autoMiddle = function(){
		return this.each(function(){
			$(this).css("position","absolute");
			$(this).css({
	              "left": ($(this).parent('.slideshow .foto li').width() - $(this).outerWidth())/2,
	              "top": ($(this).parent('.slideshow .foto li').height() - $(this).outerHeight())/2
	     	});
		});
	}
})(jQuery);

// css for iPad
if((navigator.userAgent.match(/iPad/i))){
	document.write('<link href="../css/ipad.css" rel="stylesheet" type="text/css">'); 
}
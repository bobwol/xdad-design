
epub.app(function(){
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.simpleSlide@4.0')

	$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
					$(".go-top").goToTop({});
			});
	});
	
	$(function(){
		// menu
		$('.wrap aside ul li h4').wrap('<div class="wraparea" />');
		$('.wrap aside ul li:has(ul) > .wraparea').append("<div class='hitarea'></div>");
		$('.wrap aside ul li:has(ul)').addClass('unfold');
		$('.wrap aside ul li .hitarea').click(function() {
			$(this).parent('.wraparea').parent('li').toggleClass('unfold');
			$(this).parent('.wraparea').parent('li').children('ul').slideToggle('fast');
		});
		$('.slideshow').simpleSlide();
	});	

})
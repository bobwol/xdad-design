$(document).ready(function() {
	
	$("nav > li, .nav-bd").live({
		mouseover: function() {
			$(this).children('.nav-bd').show();	
		},
		mouseout: function() {
			$(this).children('.nav-bd').hide();
		}
	});
	
	$(".categories-mod, .nav-bd").live({
		mouseover: function() {
			$(this).children('.nav-bd').show();	
		},
		mouseout: function() {
			$(this).children('.nav-bd').hide();
		}
	});

	// history-works
	$('a.lightbox-history-works').live("click", function() {
		$('.lightbox.history-works-modal').show();
		// nanoscrollbar
		$('.nanoscrollbar').children().not('.nano').parent().wrapInner('<div class="nano"><div class="content"></div></div>');
		$('.nano').nanoScroller();
	});
	// works
	$('.masonry_brick .horizontal a').live("click", function() {
		$('.horizontal').show();
		$('.lightbox.horizontal .slideshow .foto li img').autoMiddle();
	});
	$('.masonry_brick .vertical a').live("click", function() {
		$('.vertical').show();
		$('.lightbox.vertical .slideshow .foto li img').autoMiddle();
	});
	// close lightbox
	$('.lightbox .overlay, .lightbox .close a').live("click", function() {
		$('.lightbox').fadeOut('fast');
	});
	
	
	
	// more-info
	$('.info-mod .infoBlock').append('<a href="#" class="more-info"></a>');
//	$('.info-mod .infoBlock dl').hide();
	$('.info-mod .infoBlock a.more-info').live("click", function() {
		$(this).parent().children('.info-mod .infoBlock dl').slideToggle('fast');
		return false;
	});
	
	
	// aside menu
	$('aside ul li h4').wrap('<div class="wraparea" />');
	$('aside ul li:has(ul) > .wraparea').append("<div class='hitarea'></div>");
	$('aside ul li:has(ul)').addClass('unfold hasmenu');
	$('aside ul li .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li').children('ul').slideToggle('fast');
	});
	
	// footer:hover
	$(".fixed-bottom footer").live({
		mouseover: function() {
			$(this).stop(true,false).animate({
				bottom:0
			},150);
		},
		mouseout: function() {
			$(this).stop(true,false).animate({
				bottom:-149
			},150);
		}
	});

	// container add padding-bottom
	if ( $('.container').height() > $(window).height() - 120 ) {
		$(".container").css({ 'padding-bottom':'70px' });
	}
	
});


// Responsive
$(document).ready(function() {
	if ( $(window).height() < 672 ) {
		$("body").addClass("mini-mode");
		$("body").addClass("fixed-top fixed-bottom");
		// fixed-aside
		$(document).scroll(function() {
			if ( $('aside').height() < $(window).height() - 120 ) {
				$("body").addClass("fixed-aside");
			} else {
				$("body").removeClass("fixed-aside");
			}
		});
		// fixed-top
		$(document).scroll(function() {
			$("body").addClass("fixed-top");
		});
		// fixed-bottom
		$(document).scroll(function() {
			$("body").addClass("fixed-bottom");	
			$('footer').css({ bottom:-149 });
		});
	} else {
		$("body").removeClass("mini-mode");
		// fixed-aside	
		if ( $('aside').height() < $(window).height() - 120 ) {
			$(document).scroll(function() {
				if ( $(document).scrollTop() > 120 ) {
					$("body").addClass("fixed-aside");
				} else {
					$("body").removeClass("fixed-aside");
				}
			});
		}
		// fixed-top
		$(document).scroll(function() {
			if ( $(document).scrollTop() > 120 ) {
				$("body").addClass("fixed-top");
			} else {
				$("body").removeClass("fixed-top");
			}
		});
		// fixed-bottom
		$(document).scroll(function() {
			if ( $(document).scrollTop() > 40 ) {
				$('footer').css({ bottom:-149 });
				$("body").addClass("fixed-bottom");	
			} else {
				$('footer').css({ bottom:0 });
				$("body").removeClass("fixed-bottom");
			}
		});
	}
});

$(window).resize(function() {
	if ( $(window).height() < 672 ) {
		$("body").addClass("mini-mode");
		$("body").addClass("fixed-top fixed-bottom");
		$('footer').css({ bottom:-149 });
		// fixed-aside
		$(document).scroll(function() {
			if ( $('aside').height() < $(window).height() - 120 ) {
				$("body").addClass("fixed-aside");
			} else {
				$("body").removeClass("fixed-aside");
			}
		});
		// fixed-top
		$(document).scroll(function() {
			$("body").addClass("fixed-top");
		});
		// fixed-bottom
		$(document).scroll(function() {
			$("body").addClass("fixed-bottom");	
			$('footer').css({ bottom:-149 });
		});
	} else {
		$("body").removeClass("mini-mode");
		// fixed-aside	
		if ( $('aside').height() < $(window).height() - 120 ) {
			$(document).scroll(function() {
				if ( $(document).scrollTop() > 120 ) {
					$("body").addClass("fixed-aside");
				} else {
					$("body").removeClass("fixed-aside");
				}
			});
		} else {
			$(document).scroll(function() {
				$("body").removeClass("fixed-aside");
			});
		}
		// fixed-top
		if ( $(document).scrollTop() > 120 ) {
			$("body").addClass("fixed-top");
		} else {
			$("body").removeClass("fixed-top");
		}
		$(document).scroll(function() {
			if ( $(document).scrollTop() > 120 ) {
				$("body").addClass("fixed-top");
			} else {
				$("body").removeClass("fixed-top");
			}
		});
		// fixed-bottom
		if ( $(document).scrollTop() > 40 ) {
			$('footer').css({ bottom:-149 });
			$("body").addClass("fixed-bottom");	
		} else {
			$('footer').css({ bottom:0 });
			$("body").removeClass("fixed-bottom");
		}
		$(document).scroll(function() {
			if ( $(document).scrollTop() > 40 ) {
				$('footer').css({ bottom:-149 });
				$("body").addClass("fixed-bottom");	
			} else {
				$('footer').css({ bottom:0 });
				$("body").removeClass("fixed-bottom");
			}
		});
	}
});	

// waterfalls
$(document).ready(function() {				   
	if ( $(window).width() < 1205) {
		$('.waterfallstream').css( {'width':937} );
	} else if ( $(window).width() < 1443) {
		$('.waterfallstream').css( {'width':1175} );
	} else if ( $(window).width() < 1681) {
		$('.waterfallstream').css( {'width':1413} );
	} else if ( $(window).width() < 1919) {
		$('.waterfallstream').css( {'width':1651} );
	} else if ( $(window).width() >= 1919) {
		$('.waterfallstream').css( {'width':1889} );
	}
});

$(window).resize(function() {
	if ( $(window).width() < 1205) {
		$('.waterfallstream').css( {'width':937} );
	} else if ( $(window).width() < 1443) {
		$('.waterfallstream').css( {'width':1175} );
	} else if ( $(window).width() < 1681) {
		$('.waterfallstream').css( {'width':1413} );
	} else if ( $(window).width() < 1919) {
		$('.waterfallstream').css( {'width':1651} );
	} else if ( $(window).width() >= 1919) {
		$('.waterfallstream').css( {'width':1889} );
	}
});


// back to top
$(document).ready(function() {
	$('body').append('<p id="back-to-top"><a href="#top">返回顶部</a></p>');
	$("#back-to-top").hide();
	$(function() {
		$(document).scroll(function() {
			if ($(document).scrollTop() > 200) {
				$("#back-to-top").fadeIn(200);
			}
			else
			{
				$("#back-to-top").fadeOut(200);
			}
		});
		$("#back-to-top").click(function() {
			$('body,html').animate({
				scrollTop: 0
			},
			300);
			return false;
		});
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
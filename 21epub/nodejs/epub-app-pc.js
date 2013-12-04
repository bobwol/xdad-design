epub.app(function(){
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.waterfall@1.0')
	$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
					$(".go-top").goToTop({});
			});
	});
})
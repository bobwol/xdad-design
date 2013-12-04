epub.app(function(){
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.supersized@2.0')
	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.page@3.0')
	$(function (){
		$('.work-list').page({
			url:{
				contentstree:'../../../data/contentstree.json',
				unlitslist:'../../../data/unitslist.json?{id}'
			}
		})
	})
	$(function(){
		$.fn.supersized.options = {
			startwidth: 1440,  
			startheight: 1000,
			vertical_center: 1,
			slideshow: 0,
			transition: 0, // 0-None, 1-Fade, 2-slide top, 3-slide right, 4-slide bottom, 5-slide left
			pause_hover: 0,
			navigation: 0,
			slide_counter: 0,
			slide_captions: 0,
			slide_interval: 6000  
		};
		$('#supersize').supersized(); 
	});
	$(function(){
		$(".go-top").goToTop({});
		$(window).bind("scroll resize",function(){
			$(".go-top").goToTop({});
		});
	});

});
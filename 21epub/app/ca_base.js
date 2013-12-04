epub.app(function(){

	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.simpleSlide@1.0')
	$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
					$(".go-top").goToTop({});
			});
			// $('nav li a').each(function(){$(this).attr('href', '/'+$(this).parent().attr('id')+'/list.html' )});
			$('.list .cover').live({
			   mouseenter:function()
			   {
			      $(this).children('.action, .overlay').show();
			   },
			   mouseleave:function()
			   {
			      $(this).children('.action, .overlay').hide();
			   }
			});
			$('div.return a').live('click',function(){
				if(document.referrer!="") {
					window.location.href=document.referrer;
				};
				return false;
			});
	});	

})

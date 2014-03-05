epub.def(function(){
	epub["import"]('epub.modules.bootstrap@1.0')

	$(function(){

		$('div.header > button.btn-navbar').live('click',function(){
		   $('body').toggleClass('nav-collapsed');
		});

		$('.info-mod .infoBlock').append('<a href="javascript:void(0);" class="more-info"></a>');
		$('.info-mod .infoBlock dl').hide();
		$('.info-mod .infoBlock a.more-info').live("click", function() {
			$(this).parent().children('.info-mod .infoBlock dl').slideToggle('fast');
			return false;
		});

		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-46807971-1', 'xd-ad.com.cn');
		ga('send', 'pageview');

	});

});


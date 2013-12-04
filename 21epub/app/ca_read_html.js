
epub.app(function(){
	epub["import"]('epub.modules.nanoscroller@1.0');
	epub["import"]('epub.modules.jquery-debounce@1.0');
	epub["import"]('epub.modules.tmpl@1.0');
	epub["import"]('epub.modules.read@1.0');

	$(function(){
		
		$('div.return a').live('click',function(){
			if(document.referrer!="") {
				window.location.href=document.referrer;
			};
			return false;
		});
		
		// collapse-bar
		$('.ui-layout-left').append('<div class="collapse-bar"></div>');
		$('.collapse-bar').toggle(function (){
			$('.ui-layout').addClass('collapsed-nav');
			$('.ui-layout').removeClass('uncollapsed-nav');
		},function (){
			$('.ui-layout').removeClass('collapsed-nav');
			$('.ui-layout').addClass('uncollapsed-nav');
		});

		$.read({
			url:"./getimages?page="
		});

	});
		
});

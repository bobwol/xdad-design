
epub.app(function(){
	epub["import"]('epub.modules.nanoscroller@1.0');
	epub["import"]('epub.modules.jquery-debounce@1.0');
	epub["import"]('epub.modules.tmpl@1.0');
	epub["import"]('epub.modules.read@1.0');

	
	$(function(){
		// $.fn.autoMiddle = function(){
		// 	return this.each(function(){
		// 		$(this).css({
		// 			  "margin-top": ($(this).parent().height() - $(this).height())/2
		// 		});
		// 	});
		// }
		
		// $(function() {
		// 	$(window).resize(function() {
				
		// 		$('.read-area').autoMiddle();

		// 	});
		// });
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
			url:"../../../../data/ca_read.json?page="
		})
	});

});

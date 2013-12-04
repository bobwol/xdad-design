epub.app(function(){
	epub["import"]('epub.modules.tabA@1.0');
	epub["import"]('epub.modules.simpleSlide@3.0');

	$(function(){
		var lis = [];
		$('.tab-mod .hd ul').each(function(){
			lis.push($(this).find('li')[0]);
		})
		$('.tab-mod .hd ul').tabA({
			tabALoaded:lis,
			url:"../../../../data/ca.index.json?",
			pagination:".pagination",
			size:5
		})
		$('.slideshow').simpleSlide({
			containerSelecter:">ul",
			liSelecter:">ul>li",
			prevSelecter:".prev",
			nextSelecter:".next",
			pagenationSelecter:".pagenation li"

		})
	});

})

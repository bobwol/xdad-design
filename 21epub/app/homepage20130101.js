
epub.app(function(){
	// css for iPad
	// if((navigator.userAgent.match(/iPad/i))){
	// 	document.write('<link href="../css/ipad.css" rel="stylesheet" type="text/css">'); 
	// }
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.simpleSlide@1.0')
	epub["import"]('epub.modules.bootstrap@1.0')
	$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
					$(".go-top").goToTop({});
			});
	});
	var data = {
		resultes:[
			{
				src:"../public/slide_01.jpg",
				dt:"A2012年现代设计重点项目",
				dd:[
					"建筑地点：上海浦东陆家嘴金融贸易开发区的中心区",
					"总建筑面积（m<sup>2</sup>）：289500",
					"建筑高度（m）：420.5",
					"合作设计单位：芝加哥SOM公司"
				]
			},
			{
				src:"../public/slide_01.jpg",
				dt:"B2012年现代设计重点项目",
				dd:[
					"建筑地点：上海浦东陆家嘴金融贸易开发区的中心区",
					"总建筑面积（m<sup>2</sup>）：289500",
					"建筑高度（m）：420.5",
					"合作设计单位：芝加哥SOM公司"
				]
			},
			{
				src:"../public/slide_01.jpg",
				dt:"C2012年现代设计重点项目",
				dd:[
					"建筑地点：上海浦东陆家嘴金融贸易开发区的中心区",
					"总建筑面积（m<sup>2</sup>）：289500",
					"建筑高度（m）：420.5",
					"合作设计单位：芝加哥SOM公司"
				]
			},
			{
				src:"../public/slide_01.jpg",
				dt:"D2012年现代设计重点项目",
				dd:[
					"建筑地点：上海浦东陆家嘴金融贸易开发区的中心区",
					"总建筑面积（m<sup>2</sup>）：289500",
					"建筑高度（m）：420.5",
					"合作设计单位：芝加哥SOM公司"
				]
			}
		]
	}
	$(function(){
		// $('.slideshow').simpleSlide({
		// 	data:{},//data,
		// 	template:[
		// 		'<div class="prev"><a href="javascript:void(0)">prev</a></div>',
  		//  	'<div class="next"><a href="javascript:void(0)">next</a></div>'

		// 	].join(''),
		// 	containerSelecter:".slideshow ul",
		// 	liSelecter:".slideshow ul li",
		// 	prevSelecter:".slideshow .prev a",
		// 	nextSelecter:".slideshow .next a",
		// 	dlSelecter:".slideshow dl",
		// 	showAfter:function ($li){

		// 	}
		// })
		$('.slideshow').simpleSlide({
				data:{},//data,
				template:[
					'<div class="prev"><a href="javascript:void(0)">prev</a></div>',
	        		'<div class="next"><a href="javascript:void(0)">next</a></div>'
				].join(''),
				containerSelecter:"ul",
				liSelecter:"ul li",
				prevSelecter:".prev a",
				nextSelecter:".next a",
				dlSelecter:"dl",
				showAfter:function ($li){

				}
			})
	});	

})
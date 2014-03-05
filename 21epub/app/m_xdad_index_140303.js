
epub.app(function(){

	epub["import"]('epub.modules.mbase@2.0');
	epub["import"]('epub.modules.jquery-royalslider@1.0');

	$(function(){
	  	$('#full-width-slider').royalSlider({
		    arrowsNav: true,
		    loop: true,
		    keyboardNavEnabled: true,
		    controlsInside: false,
		    imageScaleMode: 'fill',
		    arrowsNavAutoHide: false,
		//  autoScaleSliderWidth: 1440,     
		//  autoScaleSliderHeight: 800,
		    controlNavigation: 'bullets',
		    thumbsFitInViewport: false,
		    navigateByClick: true,
		    startSlideId: 0,
		    autoPlay: true,
		    transitionType:'move',
		    globalCaption: false,
		    deeplinking: {
		    enabled: true,
		    change: false
		    },
		  autoScaleSlider: false,
		    autoPlay: {
		    // autoplay options go gere
		    enabled: true,
		    pauseOnHover: true,
		    delay: 5000
		  },
		    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
		    imgWidth: 1600,
		    imgHeight: 1000
		  });
	  });
	
	$('section article').append('<div class="navbar navbar-inverse"><div class="nav-collapse in collapse" style="height: auto;"><ul class="nav"></ul></div></div>');
	$('div.navbar ul.nav > li').each(function(index, item){
		    $('section article ul.nav').append($(item).clone());
	});
	// $('div.navbar-fixed-top div.nav-collapse').remove();
	// $('div.navbar-fixed-top button.btn-navbar').remove();

})
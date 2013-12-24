epub.app(function(){

	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.base@3.0')

	$(document).ready(function($) {

		// more-info
		$('.info-mod .infoBlock').append('<a href="#" class="more-info"></a>');
		//	$('.info-mod .infoBlock dl').hide();
		$('.info-mod .infoBlock a.more-info').live("click", function() {
			$(this).parent().children('.info-mod .infoBlock dl').slideToggle('fast');
			return false;
		});

		$('div.ipad-modal a#close').live("click", function(){
			$('div.ipad-modal div').slideToggle('fast');
			return false;
		});
	});

	epub["import"]('epub.modules.jquery-royalslider@1.0');
	$(function(){
		$(document).ready(function() {

		  $('#full-width-slider').royalSlider({
		    arrowsNav: true,
		    loop: true,
		    keyboardNavEnabled: true,
		    controlsInside: false,
		    imageScaleMode: 'fill',
		    arrowsNavAutoHide: false,
		    autoScaleSlider: false, 
		//  autoScaleSliderWidth: 1440,     
		//  autoScaleSliderHeight: 800,
		    controlNavigation: 'bullets',
		    thumbsFitInViewport: false,
		    navigateByClick: true,
		    startSlideId: 0,
	    	autoPlay: {
	    		// autoplay options go gere
	    		enabled: true,
	    		pauseOnHover: true,
	    		delay: 4000
	    	},
		    transitionType:'move',
		    globalCaption: false,
		    deeplinking: {
		    enabled: true,
		    change: false
		    },
		    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
		    imgWidth: 1600,
		    imgHeight: 1000
		  });
		});
	});	

});
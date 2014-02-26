$(document).ready(function() {

	// more-info
	$('.info-mod .infoBlock').append('<a href="javascript:void(0);" class="more-info"></a>');
	$('.info-mod .infoBlock dl').hide();
	$('.info-mod .infoBlock a.more-info').live("click", function() {
		$(this).parent().children('.info-mod .infoBlock dl').slideToggle('fast');
		return false;
	});
	
	
	$('.location-hd a').live("click", function() {
		$(this).parent().parent().children('.location-bd').slideToggle('fast');
		return false;
	});
	$('.location-bd .close a').live("click", function() {
		$(this).parent().parent().slideToggle('fast');
		return false;
	});
	
});
$(document).ready(function() {
	
	// sample
	$('body.page').prepend('<div style="background:url(../public/global_header_bg.png) repeat-x 0 0;"><div style="height:311px; background:url(../public/global_header.png) no-repeat 50% 0;"></div></div>'); 
	$('body.page').append('<div style="background:url(../public/global_footer_bg.png) repeat-x 0 100%;"><div style="height:120px; background:url(../public/global_footer.png) no-repeat 50% 0;"></div></div>');
	$('body.page').append('<div class="admin"><a href="../../admin/template/@login.html">管理后台</a></div>');
	
	// tab
	$('.tab-mod .hd li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.tab-mod').children('.bd').children('.list').eq($(this).parent().children('li').index(this)).addClass('active').siblings().removeClass('active');
	});	
	
	// action
	$('.list li.single .cover').append('<div class="action"><ul><li><a href="#">查看</a></li><li><a href="#">阅读</a></li></ul></div><div class="overlay"></div>');
	$('.list li.series .cover').append('<div class="action"><ul><li><a href="#">查看</a></li></ul></div><div class="overlay"></div>');
	
	$('.list .cover').hover(function (){
		$(this).children('.action, .overlay').show();
	},function (){
		$(this).children('.action, .overlay').hide();
	}); 
	
	// setNanoscrollbar
	setNanoscrollbar();
	$('.nano').mouseover(function (){
		$('.nano').nanoScroller();
	});
	$('.ui-layout-left .nano').nanoScroller({ scrollTop: 900 });
	
	// collapse-bar
	$('.ui-layout-left').append('<div class="collapse-bar"></div>');
	$('.collapse-bar').toggle(function (){
		$('.ui-layout').addClass('collapsed-nav');
		$('.ui-layout').removeClass('uncollapsed-nav');
	},function (){
		$('.ui-layout').removeClass('collapsed-nav');
		$('.ui-layout').addClass('uncollapsed-nav');
	});
	
});


// setNanoscrollbar
function setNanoscrollbar() {	
	$('.nanoscrollbar').wrapInner('<div class="nano"><div class="content"></div></div>');
	$('.nano').nanoScroller();
	$('.nano .pane').css({'visibility': 'hidden'});
	$('.nano').hover(function (){
			$(this).children('.pane').css({'visibility': 'visible'});
		},function (){
			$(this).children('.pane').css({'visibility': 'hidden'});
	});
}


// autoMiddle
(function($) {
	$.fn.autoMiddle = function(){
		return this.each(function(){
			$(this).css({
				  "margin-top": ($(this).parent().height() - $(this).height())/2
			});
		});
	}
})(jQuery);
window.onload = function () { $('.read-area').autoMiddle(); }
$(window).bind("load", function(){ $('.loading').hide(); $('.read-area').fadeIn(); });
$(function() {
	$(window).resize(function() {
		$('.read-area').autoMiddle();
	});
});
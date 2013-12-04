$(document).ready(function() {

	//////////////////// eidt & reading
	
	// editbar image demo 
	$('.edit-wrap .topbar').append('<div class="ui-editor-toolbar-wrapper" style="position:absolute; top:0; left:120px; right:240px; bottom:0; z-index:-1; text-align:center;"><img src="../public/editbar.png" alt=""></div>');

	
	// resource's action
	$('#source-settings .tab-pane li').hover(function (){
		$(this).children('.action').show();
	},function (){
		$(this).children('.action').hide();
	});
	
	//////////////////// common 
	
	// collapse-bar
	$('.collapse-bar').toggle(function (){
		$(this).parents('body').addClass('collapsed-nav');
		$(this).parents('body').removeClass('uncollapsed-nav');
	},function (){
		$(this).parents('body').removeClass('collapsed-nav');
		$(this).parents('body').addClass('uncollapsed-nav');
	});
	
	// left-hud nav
	$('.left-hud nav li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
	$('.left-hud nav li ol').hide();
	$('.left-hud nav li.unfold').children('ol').show();
	$('.left-hud nav li:has(ol)').addClass('hasmenu');
	$('.left-hud nav .wraparea .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
	});
	
	// right-hud mod
	$('.right-hud .sidebar .mod-hd').click(function() {
		$(this).parents('.mod').children('.mod-bd').slideToggle('fast');
	});
	
	$('.internal-wrap .right-column .mod-hd').click(function() {
		$(this).parents('.mod').children('.mod-bd').slideToggle('fast');
	});
	
	// scroll:fixed left-hud & right-hud
	$(document).scroll(function () { 
	  $(".left-hud, .right-hud").css( "margin-left", "-" + $(document).scrollLeft() + "px" );
    });
	
	// widget
	$('body[class!=edit-wrap] .widget a, a.preview-w').click(function() {
		$('.widget-hud').fadeIn();
	});
	$('.widget-hud .lightbox-hd .back a').click(function() {
		$('.widget-hud').hide();
		$('.info-mod').hide();
	});
	$('.overlay').click(function() {
		$('.widget-hud').hide();
		$('.info-mod').hide();
	});
	
	// lightbox
	$('body[class!=edit-wrap] .lightbox a, body[class!=edit-wrap] .lightbox, a.preview-m').click(function() {
		$('.popup-hud').fadeIn();
		$('.book').hide();
		$('.right-hud .mid-container').css("max-width","none");
	});
	$('.popup-hud .lightbox-hd .back a').click(function() {
		$('.popup-hud').hide();
		$('.info-mod').hide();
		$('.book').show();
		$('.left-hud').show();
		$('.right-hud').show();
		$('body').removeClass('fullscreen-mode');
		$('.right-hud .mid-container').css('max-width', '1135px');
	});
	$('.popup-hud .lightbox-hd .fullscreen a').click(function() {
		$('body').toggleClass('fullscreen-mode');
		$('.book').hide();
		$('.left-hud').toggle();
		$('.right-hud').toggle();
	});
	$('.more-info a').click(function() {
		$('.info-mod').toggle();
	});
	$('.info-mod .close a').click(function() {
		$('.info-mod').hide();
	});
	
	//////////////////// eidt-book-chapter
	
	// edit-book-chapter ----- table of contents
	$('.table-of-contents li:has(ol)').addClass('hasmenu unfold');
	$('.table-of-contents li > .wraparea').append('<div class="btn-draged"></div><div class="action"><ul><li><a href="#">编辑</a></li><li class="new"><a href="javacsript:void(0)">+ 添加</a><div class="new-bd"><ul><li class="folder"><a href="#newChapter" data-toggle="modal">章</a></li><li class="doc"><a href="#newChapter" data-toggle="modal">节</a></li><li class="dm"><a href="#">DM</a></li><li class="a"><a href="#">专题</a></li></ul></div></span></li><li><a href="#">删除</a></li></ul><div class="preview-content"><a href="page_preview.html" rel="tooltip" title="预览章节内容">预览章节内容</a></div><div class="edit-content"><a href="page_edit.html" rel="tooltip" title="编辑章节内容">编辑章节内容</a></div></div>');
	// action-new
	$('.action .new, .new-chapter').hover(function (){
		$(this).children('.new-bd').show();
	},function (){
		$(this).children('.new-bd').hide();
	});	 
	// hitarea
	$('.table-of-contents li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
	$('.table-of-contents li .wraparea .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
	});
	// wraparea
	$(document).click(function() {
		$('.table-of-contents .wraparea').removeClass('active').children('.action').hide();
	});
	$('.table-of-contents .wraparea h4').click(function(event) {
		$('.table-of-contents .wraparea h4').parent('.wraparea').removeClass('active').children('.action').hide();
		$(this).parent('.wraparea').addClass('active').children('.action').show();
		$('.related-mod').show();
		event.stopPropagation();
	});
	$('.table-of-contents .wraparea').click(function(event) {
		event.stopPropagation();
	});
	// table-of-contents 6 level show
	$('.table-of-contents .chapter-level li:first-child a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(2) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol >li > ol').hide();
		$('.table-of-contents ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(3) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol > li > ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol), .table-of-contents ol > li > ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(4) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol), .table-of-contents ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(5) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol), .table-of-contents ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(6) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol), .table-of-contents ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	
	//////////////////// internal
	
	// internal topbar
	$('.internal-wrap header .menu-mod').hover(function (){
		$(this).children('.internal-wrap header .menu-bd').show();
	},function (){
		$(this).children('.internal-wrap header .menu-bd').hide();
	});	 
	$('.internal-wrap header .menu-bd li').hover(function (){
		$(this).children('ul').show();
	},function (){
		$(this).children('ul').hide();
	});	
	
	// internal aside nav
	$('.internal-wrap aside nav li .hitarea').click(function() {
		$(this).parents('.internal-wrap aside nav li').toggleClass('unfold');
		$(this).parents('.internal-wrap aside nav li').children('ul').slideToggle('fast');
	});
	$('.internal-wrap aside nav li > ul > li').hover(function (){
		$(this).children('ul').show();
	},function (){
		$(this).children('ul').hide();
	});	  
	 
	// chapter settings lock status
	$('.lock-status a').click(function() {
		$('.lock-status').toggleClass('unlock');
	});
	
	// content-bd aside
	$('.content-bd aside .cat-list li:has(ol)').addClass('hasmenu unfold');
	$('.content-bd aside .cat-list li h4').wrap('<div class="wraparea" />');
	$('.content-bd aside .cat-list li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
	$('.content-bd aside .cat-list li .wraparea .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
	});

	// content-bd table tr:active
	$('.related-mod').hide();
	$('.internal-wrap .main').click(function() {
		$('.content-bd table tr').removeClass('active').children('.action').hide();
		$('.content-bd table tr td, .content-bd table th').css('border-bottom', '1px solid #dfdfdf');
		$('.related-mod').hide();
		
		$('.main-project .mod-bd').fadeIn('fast');
	});
	$('.internal-wrap .right-column, .content-bd table').click(function(event) {
		event.stopPropagation();
	});
	
	///////////// manual control modal
	$('.mod button[href="#taskManagement"]').click(function() {
		$('#taskManagement').modal();
	});
	$('.mod button[href="#subTaskManagement"]').click(function() {
		$('#subTaskManagement').modal();
	});
	$('.mod button[href="#editProject"]').click(function() {
		$('#editProject').modal();
	});
	$('.mod button[href="#editPoints"]').click(function() {
		$('#editPoints').modal();
	});
	$('.mod button[href="#editRef"]').click(function() {
		$('#editRef').modal();
	});
		
	$('.internal-wrap .mod button[href="#addNoteModal"]').click(function() {
		$('#addNoteModal').modal();
	});
	
	$('table a[href="#newUser"]').click(function() {
		$('#newUser').modal();
	});
	$('table a[href="#confirmModal"]').click(function() {
		$('#confirmModal').modal();
	});
	$('table a[href="#submitModal"]').click(function() {
		$('#submitModal').modal();
	});
	$('a[href="#publishSubmit"]').click(function() {
		$('#publishSubmit').modal();
	});
	$('a[href="#sreviewModal"]').click(function() {
		$('#sreviewModal').modal();
	});
	$('a[href="#newCat"]').click(function() {
		$('#newCat').modal();
	});
	$('.new a[href="#newChapter"]').click(function() {
		$('#newChapter').modal();
	});
	
	// tab-mod
	$('.tab-mod .tab-hd li a').click(function(){
		$(this).parent('li').addClass('active').siblings().removeClass();
		$(".tab-mod .tab-bd").eq($('.tab-mod .tab-hd li a').index(this)).show().siblings('.tab-bd').hide();
	});
	
	
	// table not.hascheckbox
	$('.content-bd table[class!=hascheckbox][class!=norelatedmod] tbody tr:first-child').click(function(event) {
		$('.content-bd table tr td').css('border-bottom', '1px solid #dfdfdf');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).children('td').css('border-bottom', '1px solid #9c9');
		$('table th').css('border-bottom', '1px solid #9c9');
		$('.related-mod').show();
		
		$('.main-project .mod-bd').hide();
		event.stopPropagation();
	});
	$('.content-bd table[class!=hascheckbox][class!=norelatedmod] tbody tr:gt(0)').click(function(event) {
		$('.content-bd table td, .content-bd table th').css('border-bottom', '1px solid #dfdfdf');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).children('td').css('border-bottom', '1px solid #9c9');
		$(this).prev().children('td').css('border-bottom', '1px solid #9c9');
		$('.related-mod').show();
		
		$('.main-project .mod-bd').hide();
		event.stopPropagation();
	});
	// table.hascheckbox
	$('.content-bd table[class=hascheckbox][class!=norelatedmod] tbody tr:first-child').children('td').not(':first-child').click(function(event) {
		$('.content-bd table tr td').css('border-bottom', '1px solid #dfdfdf');
		$(this).parent('tr').addClass('active').siblings().removeClass('active');
		$(this).parent('tr').children('td').css('border-bottom', '1px solid #9c9');
		$('table th').css('border-bottom', '1px solid #9c9');
		$('.related-mod').show();
		
		$('.main-project .mod-bd').hide();
		event.stopPropagation();
	});
	$('.content-bd table[class=hascheckbox][class!=norelatedmod] tbody tr:gt(0)').children('td').not(':first-child').click(function(event) {
		$('.content-bd table td, .content-bd table th').css('border-bottom', '1px solid #dfdfdf');
		$(this).parent('tr').addClass('active').siblings().removeClass('active');
		$(this).parent('tr').children('td').css('border-bottom', '1px solid #9c9');
		$(this).parent('tr').prev().children('td').css('border-bottom', '1px solid #9c9');
		$('.related-mod').show();
		
		$('.main-project .mod-bd').hide();
		event.stopPropagation();
	});
	
	// checked all
	$('.container-mod table td input[type=checkbox]').click(function () { 
		if ($('.container-mod table td input[type=checkbox]:checked').length == $('.container-mod table td input[type=checkbox]').length) { 
			$('.container-mod table th input[type=checkbox]').attr('checked', 'checked'); 
		} else $('.container-mod table th input[type=checkbox]').removeAttr('checked'); 
	});
	$('.container-mod table th input[type=checkbox]').click(function () { 
		if ($('.container-mod table th input[type=checkbox]:checked').length == $('.container-mod table th input[type=checkbox]').length) { 
			$('.container-mod table td input[type=checkbox]').attr('checked', 'checked'); 
		} else $('.container-mod table td input[type=checkbox]').removeAttr('checked'); 
	});
	
	////////////////////// reader-wrap
	
	// reader-wrap
	$('.reader-wrap aside nav li > ul').hide();
	$('.reader-wrap aside nav li.active > ul').show();
	$('.reader-wrap aside nav li .hitarea').click(function() {
		$(this).parents('.reader-wrap aside nav li').toggleClass('unfold');
		$(this).parents('.reader-wrap aside nav li').children('ul').slideToggle('fast');
	});
	$('.reader-wrap aside nav li > ul > li').hover(function (){
		$(this).children('ul').show();
	},function (){
		$(this).children('ul').hide();
	});
	
	//////////////////// reading-wrap
	
	// bookmark
	$('.reading-wrap .page-body > section').append('<div class="mark"><a href="javascript:void(0)" rel="tooltip" data-original-title="书签">书签</a></div>');		
	$('.reading-wrap .page-body > section .mark a').click(function() {
		$(this).parent('.mark').parent('section').toggleClass('marked');		
	});
	
	////////// tooltip
	$('.table-of-contents .chapter-level li a, .edit-content a, .preview-content a').tooltip();
	$('.reading-wrap .page-body > section .mark a').tooltip();
		
});

// right-column scroll:fixed 
$(document).ready(function() {
	$(".internal-wrap .right-column").css({"max-height": $(window).height() - 174,"overflow": "auto"});
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 78 ) {
			$(".internal-wrap .right-column").addClass("fixed");
			$(".internal-wrap .right-column").css({
	        	"left": $('.internal-wrap .left-column').width() + 230, "max-height": $(window).height() - 40
			});
		} else {
			$(".internal-wrap .right-column").removeClass("fixed");
		}
	});
	$(window).resize(function() {
		$(".internal-wrap .right-column").css({
			  "left": $('.internal-wrap .left-column').width() + 230
		});
	});
	$(document).scroll(function () { 
	  $(".internal-wrap .right-column").css( "margin-left", "-" + $(document).scrollLeft() + "px" );
    });
});

// autoMiddle
(function($) {
	$.fn.autoMiddle = function(){
		return this.each(function(){
			$(this).css("position","absolute");
			$(this).css({
	              "left": ($('.popup-hud .lightbox-content').width() - $(this).outerWidth())/2,
	              "top": ($('.popup-hud .lightbox-content').height() - $(this).outerHeight())/2
	     	});
		});
	}
})(jQuery);
$(function() {
	$('.action a.preview-m, .lightbox, .popup-hud .lightbox-hd .fullscreen a').click(function() {
		$('.popup-hud .lightbox-content >').autoMiddle();
	});   
	$(window).resize(function() {
		$('.popup-hud .lightbox-content >').autoMiddle();
	});
});

// msg
$(function(){
	$('.msg a.close').click(function() {
		$(this).parents('.status').fadeOut('fast');
	});
	setTimeout(function(){$('.msg').fadeOut('slow')}, 3000);
});









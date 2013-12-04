var is_server=false;
$(document).ready(function() {

	//////////////////// eidt-setting

	// edit style
	$('.collapse-bar').toggle(function (){
		$(this).parents('body').addClass('collapsed-nav');
	},function (){
		$(this).parents('body').removeClass('collapsed-nav');
	});
	
	// resource action
	$('#source-settings .tab-pane li .action').hide();
	$('#source-settings .tab-pane li').hover(function (){
		$(this).children('.action').show();
	},function (){
		$(this).children('.action').hide();
	});	  
	
	// left-hud nav
//	$('.left-hud nav li h4').wrap('<div class="wraparea" />');
	$('.left-hud nav li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
	$('.left-hud nav li ol').hide();
	$('.left-hud nav li.unfold').children('ol').show();
	$('.left-hud nav li:has(ol)').addClass('hasmenu');
	$('.left-hud nav .wraparea').click(function() {
		$(this).parent('li:has(ol)').toggleClass('unfold');
		$(this).parent('li:has(ol)').children('ol').slideToggle('fast');
	});
	
	// right-hud mod
	$('.right-hud .sidebar .mod-hd').click(function() {
		$(this).parents('.sidebar .mod').toggleClass('fold');
		$(this).parents('.sidebar .mod').children('.mod-bd').slideToggle('fast');
	});
	
	// scroll:fixed left-hud & right-hud
	$(document).scroll(function () { 
	  $(".left-hud, .right-hud").css( "margin-left", "-" + $(document).scrollLeft() + "px" );
    });
	
	// view structure
	$('.viewstr').click(function() {
		$('.book .typo').toggleClass('structure');
	});
	
	//////////////////// eidt-book-chapter
	
	// edit-book-chapter ----- table of contents
	$('.table-of-contents li:has(ol)').addClass('hasmenu unfold');
//	$('.table-of-contents li h4').wrap('<div class="wraparea" />');
	$('.table-of-contents li > .wraparea').append('<div class="btn-draged"></div><div class="action"><ul><li><a href="#">编辑</a></li><li class="new"><a href="javacsript:void(0)">+ 添加</a><div class="new-bd"><ul><li class="folder"><a href="#myModal" data-toggle="modal">章</a></li><li class="doc"><a href="#">节</a></li><li class="dm"><a href="#">DM</a></li><li class="a"><a href="#">知识点</a></li></ul></div></span></li><li><a href="#">删除</a></li><li><a href="#">预览</a></li></ul><div class="edit-content"><a href="edit_setting.html" rel="tooltip" title="编辑章节内容">编辑章节内容</a></div></div>');
	// action-new
	/*$('.action .new, .new-chapter').hover(function (){
		$(this).children('.new-bd').show();
	},function (){
		$(this).children('.new-bd').hide();
	});	 (整合）*/
	// hitarea
	$('.table-of-contents li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
	$('.table-of-contents li .wraparea .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
	});
	// wraparea
	/*$(document).click(function() {
		$('.table-of-contents .wraparea').removeClass('active').children('.action').hide();
	});
	$('.table-of-contents .wraparea h4').click(function(event) {
		$('.table-of-contents .wraparea h4').parent('.wraparea').removeClass('active').children('.action').hide();
		$(this).parent('.wraparea').addClass('active').children('.action').show();
		$('.related-mod').show();
		event.stopPropagation();
	});(整合)*/
	$('.table-of-contents .wraparea').click(function(event) {
		//event.stopPropagation();
	});
	// tooltip
	$('.table-of-contents .chapter-level li a, .edit-content a').tooltip();
	// table-of-contents 6 level show
	/*$('.table-of-contents .chapter-level li:first-child a').click(function() {
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
	});*/
	set_ChapterLevel_control();
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
//	$('.internal-wrap aside nav li:first').addClass('menu-dashboard');
//	$('.internal-wrap aside nav li h4').wrap('<div class="wraparea" />');
//	$('.internal-wrap aside nav li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
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
	/*$('.lock-status a').click(function() {
		$('.lock-status').toggleClass('unlock');
	});*/
	
	// content-bd aside
	addChapterWrap();
	set_Chapter_actions();
	/*$('.content-bd aside .cat-list li:has(ol)').addClass('hasmenu unfold');
	$('.content-bd aside .cat-list li h4').wrap('<div class="wraparea" />');
	$('.content-bd aside .cat-list li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
	/*$('.content-bd aside .cat-list li .wraparea .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
	});(整合)*/

	// content-bd table tr:active
	$('.related-mod').hide();
	/*$(document).click(function() {
		$('.content-bd table tr').removeClass('active').children('.action').hide();
		$('.content-bd table tr td, .content-bd table th').css('border-bottom', '1px solid #dfdfdf');
		$('.related-mod').hide();
	});(整合)*/
	$('.related-mod, .content-bd table').click(function(event) {
		event.stopPropagation();
	});
	// table not.hascheckbox
	$('.content-bd table[class!=hascheckbox] tbody tr:first-child').click(function(event) {
		$('.content-bd table tr td').css('border-bottom', '1px solid #dfdfdf');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).children('td').css('border-bottom', '1px solid #9c9');
		$('table th').css('border-bottom', '1px solid #9c9');
		$('.related-mod').show();
		event.stopPropagation();
	});
	$('.content-bd table[class!=hascheckbox] tbody tr:gt(0)').click(function(event) {
		$('.content-bd table td, .content-bd table th').css('border-bottom', '1px solid #dfdfdf');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).children('td').css('border-bottom', '1px solid #9c9');
		$(this).prev().children('td').css('border-bottom', '1px solid #9c9');
		$('.related-mod').show();
		event.stopPropagation();
	});
	// table.hascheckbox
	$('.content-bd table[class=hascheckbox] tbody tr:first-child').children('td').not(':first-child').click(function(event) {
		$('.content-bd table tr td').css('border-bottom', '1px solid #dfdfdf');
		$(this).parent('tr').addClass('active').siblings().removeClass('active');
		$(this).parent('tr').children('td').css('border-bottom', '1px solid #9c9');
		$('table th').css('border-bottom', '1px solid #9c9');
		$('.related-mod').show();
		event.stopPropagation();
	});
	$('.content-bd table[class=hascheckbox] tbody tr:gt(0)').children('td').not(':first-child').click(function(event) {
		$('.content-bd table td, .content-bd table th').css('border-bottom', '1px solid #dfdfdf');
		$(this).parent('tr').addClass('active').siblings().removeClass('active');
		$(this).parent('tr').children('td').css('border-bottom', '1px solid #9c9');
		$(this).parent('tr').prev().children('td').css('border-bottom', '1px solid #9c9');
		$('.related-mod').show();
		event.stopPropagation();
	});
	
	// checked all
	$('table td input[type=checkbox]').each(function () { 
		$(this).click(function () { 
			if ($('table td input[type=checkbox]:checked').length == $('table td input[type=checkbox]').length) { 
				$('table th input[type=checkbox]').attr('checked', 'checked'); 
			} else $('table th input[type=checkbox]').removeAttr('checked'); 
		}); 
	});
	$('table th input[type=checkbox]').click(function () { 
		if ($('table th input[type=checkbox]:checked').length == $('table th input[type=checkbox]').length) { 
			$('table td input[type=checkbox]').attr('checked', 'checked'); 
		} else $('table td input[type=checkbox]').removeAttr('checked'); 
	});
	
	// nanoScrollber
	$('.nanoscrollbar').wrapInner('<div class="nano"><div class="content"></div></div>');
	$(".nano").nanoScroller();
		
});

// right-column scroll:fixed
$(document).ready(function() {
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 78 ) {
			$(".internal-wrap .right-column").addClass("fix");
			$(".internal-wrap .right-column").css({
	              "left": $('.internal-wrap .left-column').width() + 230
	     	});
		} else {
			$(".internal-wrap .right-column").removeClass("fix");
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

/* add by garry gu (函数整合)*/
function addChapterWrap(){
	$('.table-of-contents li:has(ol)').addClass('hasmenu unfold');
	$('.table-of-contents li > .wraparea').append('<div class="btn-draged"></div><div class="action"><ul><li class="edit"><a href="#">编辑</a></li><li class="new"><a href="javacsript:void(0)">+ 添加</a><div class="new-bd"><ul><li class="folder"><a href="#myModal" data-toggle="modal">章</a></li><li class="doc"><a href="#">节</a></li><li class="dm"><a href="#">DM</a></li><li class="knowledge"><a href="#">知识点</a></li></ul></div></span></li><li class="remove"><a href="#">删除</a></li><li class="preview"><a href="#">预览</a></li></ul><div class="edit-content"><a href="edit_setting.html" rel="tooltip" title="编辑章节内容">编辑章节内容</a></div></div>');
	$('.table-of-contents li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
}
function set_Chapter_actions(){
	$(document).click(function() {
		$('.content-bd table tr').removeClass('active').children('.action').hide();
		$('.content-bd table tr td, .content-bd table th').css('border-bottom', '1px solid #dfdfdf');
		$('.related-mod').hide();
	});
	$('.table-of-contents li .wraparea .hitarea').live('click',function() {
		$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
	});
	$(document).click(function() {
		$('.table-of-contents .wraparea').removeClass('active').children('.action').hide();
	});
	$('.table-of-contents .wraparea h4').live('click',function(event) {
		$('.table-of-contents .wraparea h4').parent('.wraparea').removeClass('active').children('.action').hide();
		$(this).parent('.wraparea').addClass('active').children('.action').show();
		$('.related-mod').show();
		event.stopPropagation();
	});
	// action-new
	$('.action .new, .new-chapter').live('mouseover mouseout',function (event){
		if(event.type=='mouseover')
			$(this).children('.new-bd').show();
	    else 
			$(this).children('.new-bd').hide();
	});	
    $('.lock-status a').live('click',function(){
		if($(this).parent().hasClass('unlock')){
			$(this).parent().removeClass('unlock');
			$(this).parent().addClass('lock');
			if(is_server) chapter_lock();
		}
		else {
			$(this).parent().removeClass('lock');
			$(this).parent().addClass('unlock');
			if(is_server) chapter_unlock();
		}
	})
}
function set_ChapterLevel_control(){
	$('.table-of-contents .chapter-level li:first-child a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol >li > ol').hide();
		$('.table-of-contents ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(2) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol > li > ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol), .table-of-contents ol > li > ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(3) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol), .table-of-contents ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(4) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol), .table-of-contents ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold');
	});
	$('.table-of-contents .chapter-level li:nth-child(5) a').click(function() {
		$('.table-of-contents ol, .table-of-contents ol li').show();
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li > ol > li > ol').hide();
		$('.table-of-contents ol > li:has(ol), .table-of-contents ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li > ol > li:has(ol), .table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold').addClass('unfold');
		$('.table-of-contents ol > li > ol > li > ol > li > ol > li > ol > li > ol > li:has(ol)').removeClass('unfold');
	});

}
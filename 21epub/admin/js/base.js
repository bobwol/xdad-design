$(document).ready(function() {
	
	// load-modal
	$('body').append('<div class="modals"></div>');
	$('.modals').load('load/modal.html');
	
	// load-msg
	$('body.cat-management').append('<div class="msg"></div>');
	$('.msg').load('load/msg.html .status.success');

	// setNanoscrollbar
	setNanoscrollbar();
	
	

	// non-editable
	$('.non-editable .ui-layout-right button, .non-editable .ui-layout-right input, .non-editable .ui-layout-right textarea, .non-editable .ui-layout-right select').attr('disabled','disabled')
	
	// adminbar
	$('.adminbar .menu-mod').hover(function (){
		$(this).children('.adminbar .menu-bd').show();
	},function (){
		$(this).children('.adminbar .menu-bd').hide();
	});	 
	$('.adminbar .menu-bd li').hover(function (){
		$(this).children('ul').show();
	},function (){
		$(this).children('ul').hide();
	});	
	
	// nav
	$('nav li .hitarea').click(function() {
		$(this).parents('nav li').toggleClass('unfold');
		$(this).parents('nav li').children('ul').slideToggle('fast');
	});
	$('nav li > ul > li').hover(function (){
		$(this).children('ul').show();
	},function (){
		$(this).children('ul').hide();
	});
	
	// collapse-bar
	$('.ui-layout-left').append("<div class='collapse-bar'></div>");
	$('.collapse-bar').toggle(function (){
		$('.ui-layout').addClass('collapsed-nav');
		$('.ui-layout').removeClass('uncollapsed-nav');
	},function (){
		$('.ui-layout').removeClass('collapsed-nav');
		$('.ui-layout').addClass('uncollapsed-nav');
	});
	
	// tab-component
	$('.tab-component li a').click(function() {
		$(this).parent().parent().children('li').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	
	// categories
	$('.ui-layout .categories li:has(ul)').addClass('hasmenu unfold');
	$('.ui-layout .categories li h4').wrap('<div class="wraparea" />');
	$('.ui-layout .categories li:has(ul) > .wraparea').append('<div class="hitarea"></div>');
	$('.ui-layout .categories li .wraparea .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li:has(ul)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ul)').children('ul').slideToggle('fast');
	});
	// left-column categories
	// $('.ui-layout .left-column .categories li h4 a').click(function() {
	// 	$('.ui-layout .left-column .categories li').removeClass('active');
	// 	$(this).parent().parent().parent('li').addClass('active');
	// });
	// main-column categories
	$('.ui-layout .main-column .categories li h4 a').click(function() {
		$('.ui-layout .main-column .categories li').removeClass('active');
		$(this).parent().parent().parent('li').addClass('active');
	});
	
	//////////// CATEGORIES ACTION
	// content-management left-column
	// $('.content-management .left-column .categories li > .wraparea').append('<div class="action-new"><a href="javascript:void(0)">新建</a><ul><li><a href="edit_info.html">富文本</a></li><li><a href="edit_info.html">图片集</a></li><li><a href="edit_info.html">PDF</a></li><li><a href="edit_info.html">交互内容</a></li><li class="divider"></li><li><a href="#lib">引入内容</a></li></ul></div>');
	
	// $('.content-management .left-column .categories > ul > li > ul > li > .wraparea').append('<div class="share"><a href="#" rel="tooltip" title="共享信息">共享信息</a></div>');
	
	// example
	// $('.content-management .left-column .categories > ul > li > .wraparea:gt(2)').append('<div class="platform"><ul><li class="platform-web" rel="tooltip" title="WEB">WEB</li><li class="platform-ipad" rel="tooltip" title="iPad">iPad</li></ul></div><div class="type-link"><a href="#" rel="tooltip" title="引入内容">引入内容</a></div>');
	
	// cat-management main-column
	$('.cat-management .categories li > .wraparea').append('<div class="btn-draged" rel="tooltip" title="上下拖拽"></div><div class="action"><ul><li><a href="#editModal">编辑</a></li><li><a href="#editModal">添加子分类</a></li><li><a href="#confirmModal">删除</a></li></ul></div>');
	// content-organization right-column
	// $('.content-organization .right-column .categories li > .wraparea').append('<div class="action"><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">编辑</a></li><li class="action-new"><a href="javascript:void(0)">+ 追加</a><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">添加子分类</a></li><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">新建链接</a></li><li><a href="#lib" data-toggle="modal" data-keyboard="false" data-backdrop="false">引入内容</a></li><li><a href="#categories" data-toggle="modal" data-keyboard="false" data-backdrop="false">引入分类</a></li><li class="divider"></li><li><a href="#confirmModal">删除</a></li></ul></li></ul></div><!-- action end --><div class="btn-draged" rel="tooltip" title="上下拖拽"></div>');
	
	// $('.content-organization .right-column .categories > ul > li > .wraparea').append('<div class="platform"><ul><li class="platform-web" rel="tooltip" title="WEB">WEB</li><li class="platform-ipad" rel="tooltip" title="iPad">iPad</li></ul></div>');
	// $('.content-organization .right-column .categories > ul > li > ul > li .wraparea').append('<div class="type-link"><a href="#" rel="tooltip" title="引入内容">引入内容</a></div>');

	// example
	// $('.content-organization .right-column .categories > ul > li > ul > li .wraparea').addClass('unpublished').append('<div class="action-pub"><a href="#confirmModal" rel="tooltip" title="发布">发布</a></div>');
	// $('.content-organization .right-column .categories li > .wraparea').eq(0).addClass('published').append('<div class="action-pub"><a href="#confirmModal" rel="tooltip" title="收回">收回</a></div>');
	// $('.content-organization .right-column .categories li > .wraparea').eq(4).addClass('has-update').append('<div class="action-pub"><a href="javascript:void(0)" rel="tooltip" title="更新">更新</a><ul><li><a href="#confirmModal">更新</a></li><li><a href="#confirmModal">放弃更新</a></li></ul></div>');
	// $('.content-organization .right-column .categories li > .wraparea').eq(5).removeClass('unpublished').addClass('published').append('<div class="action-pub"><a href="#confirmModal" rel="tooltip" title="收回">收回</a></div>');

	
	
	// setModal
	$('a[href="#lib"], button[data-target="#lib"], a[href="#material"], button[data-target="#material"], a[href="#editModal"], button[data-target="#editModal"], a[href="#newPage"], button[data-target="#newPage"], a[href="#newUser"], button[data-target="#newUser"], a[href="#upload"], button[data-target="#upload"], a[href="#confirmModal"], button[data-target="#confirmModal"]').mouseover(function (){
		setModals();
	});
	
	
	//////////// RELATED-INFO RELATED JS
	// related-info hide
	$('.ui-layout-right.related-info').hide();
	$('.ui-layout').wrap('<div class="wrap" style="position:absolute; width:100%; height:100%;">');

	// click ui-layout-center content, related-info show
	$('.ui-layout-center .column-bd table tr, .gallery-list li, .cat-management .main-column .categories li, .content-organization .right-column .categories li').click(function(event) {
		$('.cat-management .main-column .categories li, .content-organization .right-column .categories li').removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		$('.ui-layout-right.related-info').show();
		// nano
		$('.ui-layout-right.related-info .nano').nanoScroller();
		// stop
		/*$('button, input, a.del').click(function(event) {
			event.stopPropagation();
		});	*/
		
		event.stopPropagation();
	});
	// click other area, related-info hide
	$('.wrap').click(function(event) {
		$('.column-bd table tr, .gallery-list li, .cat-management .categories li, .content-organization .right-column .categories li').removeClass('active');
		$('.ui-layout-right.related-info').hide();
	});
	// stop
	$('.ui-layout-right .mod, .column-bd table tr td .action ul, td input[type="checkbox"], .modal, .modal-backdrop, .action a, .cat-management .main-column .categories li .hitarea, .content-organization .right-column .categories li .hitarea, .btn-draged, .action-pub a').click(function(event) {
		event.stopPropagation();
	});
							
							
	

	////////// EDIT-FORM
	$('.material-info-mod dl p').click(function () {
	  var text = $(this).text();
	  $(this).hide();
	  $(this).parent().children('.editform').show();
      $(this).parent().children('.editform').children('input, textarea').val(text).focus();
    });
		$('.non-editable .material-info-mod dl p').click(function () {
		  var text = $(this).text();
		  $(this).show();
		  $(this).parent().children('.editform').hide();
		  $(this).parent().children('.editform').children('input, textarea').val(text).focus();
		});
	$('.material-info-mod .action-cancel').click(function () {
	  $(this).parent().parent('.editform').hide();
	  $(this).parent().parent().parent().children('p').show();
    });
	$('.material-info-mod .action-save').click(function () {
	  var val = $(this).parent().parent('.editform').children('input, textarea').val();
	  $(this).parent().parent('.editform').hide();
	  $(this).parent().parent().parent().children('p').show();
	  $(this).parent().parent().parent().children('p').text(val);
    });

	// Tooltip:after other module
	$('.btn-draged, .status a, .platform li, .type-link a, .share a, .action-pub a').tooltip();
		
});





// MSG
$(function(){
	$('.msg a.close').click(function() {
		$(this).parents('.status').fadeOut('fast');
	});
	setTimeout(function(){$('.msg').fadeOut('slow')}, 3000);
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

// setCategories
function setCategories() {	
	// categories
	$('.modal .categories li:has(ul)').addClass('hasmenu unfold');
	$('.modal .categories li h4').wrap('<div class="wraparea" />');
	$('.modal .categories li:has(ul) > .wraparea').append('<div class="hitarea"></div>');
	$('.modal .categories li .wraparea .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li:has(ul)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ul)').children('ul').slideToggle('fast');
	});
	// left-column categories
	$('.modal .left-column .categories li h4 a').click(function() {
		$('.modal .left-column .categories li').removeClass('active');
		$(this).parent().parent().parent('li').addClass('active');
	});
	// main-column categories
	$('.modal .main-column .categories li h4 a').click(function() {
		$('.modal .main-column .categories li').removeClass('active');
		$(this).parent().parent().parent('li').addClass('active');
	});
}

// setModals
function setModals() {	
	// lib
	$('a[href="#lib"], button[data-target="#lib"]').click(function() {
		$('#lib').modal({backdrop:false});
	});
	// material
	$('a[href="#material"], button[data-target="#material"]').click(function() {
		$('#material').modal({backdrop:false});
	});
	// edit
	$('a[href="#editModal"], button[data-target="#editModal"]').click(function() {
		$('#editModal').modal({backdrop:false});
	});
	// newPage
	$('a[href="#newPage"], button[data-target="#newPage"]').click(function() {
		$('#newPage').modal({backdrop:false});
	});
	// newUser
	$('a[href="#newUser"], button[data-target="#newUser"]').click(function() {
		$('#newUser').modal({backdrop:false});
	});
	// upload
	$('a[href="#upload"], button[data-target="#upload"]').click(function() {
		$('#upload').modal({backdrop:false});
	});
	// delete
	$('a[href="#confirmModal"], button[data-target="#confirmModal"]').click(function() {
		$('#confirmModal').modal({backdrop:false});
	});
}


// setPreview
function setPreview() {
	// RICHTEXT
	$('.edit-info .action-preview, .edit-richtext .action-preview, tr.richtext .action a[href="#preview"]').click(function() {
		$('#preview .modal-body').empty();
		$('#preview').modal();
		$('#preview .modal-body').load('load/preview.html .richtext', (function() {setNanoscrollbar();}));
	});
	// TAB
	$('.edit-tab .action-preview, tr.tab .action a[href="#preview"]').click(function() {
		$('#preview .modal-body').empty();
		$('#preview').modal();
		$('#preview .modal-body').load('load/preview.html .tab', (function() {setNanoscrollbar();}));
		$('.modal-backdrop').click(function(event) {
			event.stopPropagation();
		});
	});
	// SLIDE
	$('.edit-gallery .action-preview, tr.gallery .action a[href="#preview"], tr.slide .action a[href="#preview"], .mod-ft .action-preview').click(function() {
		$('#preview .modal-body').empty();
		$('#preview').modal();
		$('#preview .modal-body').load('load/preview.html .slide');
		$('.modal-backdrop').click(function(event) {
			event.stopPropagation();
		});
	});
	// MATERIAL
	$('.ui-layout-right .action a[href="#preview"], .ui-layout-right .action button[data-target="#preview"], .material-management table.list tr .action a[href="#preview"], .gallery-list .action a[href="#preview"]').click(function() {
		$('#preview .modal-body').empty();
		$('#preview').modal();
		$('#preview .modal-body').load('load/preview.html .material', (function() {
			// info
			$('.more-info a').click(function() {
				$('.info-mod').toggle();
			});
			$('.info-mod .close a').click(function() {
				$('.info-mod').hide();
			});
			// autoMiddle
			$('.preview-modal .preview-content >').autoMiddle();
		}));
	});
}












// toolTiper
(function($){
	$(document).ready(function() {				   
		toolTiper('.action-new');
	});
	$(window).resize(function() {
		toolTiper('.action-new');
	});
	var toolTiper = function(element) {
		var element = (typeof element == 'object')  ? element : $(element);
		var delayTime = [];
		var menuTip = $('.action-new > ul');
		element.each(function(index) {		
			$(this).hover(function() {
				var top = $(this).offset().top;
				var left = $(this).offset().left;
				delayTime[index] = setTimeout(function() {
					if ((top + 22 + 143) + 60 < $(document).height()) {
						menuTip.css({'top':20 } );
					} else {
						menuTip.css({'top':-143 } );
					}
					menuTip.show();
				}, 200)
			}, function() {
				clearTimeout(delayTime[index]);
				menuTip.hide();
			})
		});
	}
})(jQuery);


// autoMiddle
(function($) {
	$.fn.autoMiddle = function(){
		return this.each(function(){
			$(this).css("position","absolute");
			$(this).css({
	              "left": ($(this).parent('.preview-content').width() - $(this).outerWidth())/2,
	              "top": ($(this).parent('.preview-content').height() - $(this).outerHeight())/2
	     	});
		});
	}
})(jQuery);
$(function() {
	$(window).resize(function() {
		$('.preview-modal .preview-content >').autoMiddle();
	});
});
$(function (){
	$('.categories').JT();

})
$(document).ready(function() {
	
	// load-modal
	$('body').append('<div class="modals"></div>');
	$('.modals').load('modules/modal.html');
	
	// load-msg
	$('body.cat-management').append('<div class="msg"></div>');
	$('.msg').load('modules/msg.html .status');
	
	// example - editbar
	$('.detail.edit-richtext .ui-layout-center-bd .main-column .column-bd .typo-hd, .detail.edit-tab .ui-layout-center-bd .main-column .column-bd .typo-hd').css({'background':'#f0f0ee url("../public/tiny_mce_bar.png") no-repeat 60px 50%'});

	// edit-copponent
	$('.typo.tiny-editor .component.tab').append('<div class="action"><ul><li class="preview"><a href="#preview">预览</a></li><li class="edit"><a href="edit_tab.html" target="_blank">编辑</a></li><li class="delete"><a href="#confirmModal">删除</a></li></ul></div>');
	$('.typo.tiny-editor .component.slide').append('<div class="action"><ul><li class="preview"><a href="#preview">预览</a></li><li class="edit"><a href="edit_gallery.html" target="_blank">编辑</a></li><li class="delete"><a href="#confirmModal">删除</a></li></ul></div>');
	
	// update-tip
	$('.detail .ui-layout-center .main-column .column-hd').append('<div class="update-tip">变更提醒：以下内容与发布版本发生变更<a href="#confirmModal" class="action-recover" rel="tooltip" title="复原">复原</a></div>');

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
	// collapse-bar
	$('.edit-layout-left').append("<div class='collapse-bar'></div>");
	$('.collapse-bar').toggle(function (){
		$('.edit-layout').addClass('collapsed-nav');
		$('.edit-layout').removeClass('uncollapsed-nav');
	},function (){
		$('.edit-layout').removeClass('collapsed-nav');
		$('.edit-layout').addClass('uncollapsed-nav');
	});
	
	// tab-component
	$('.tab-component > ul > li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.typo-bd section article').eq($('.tab-component > ul > li').index(this)).addClass('active').siblings().removeClass('active');
	});	  
	$('.tab-component > ul > li').append('<div class="action-move"><a href="#">移动</a></div><ul class="action"><li><a href="#editModal">编辑</a></li><li><a href="#confirmModal">删除</a></li></ul>');
	
	
	// categories
	$('.ui-layout .categories li:has(ul)').addClass('hasmenu unfold');
	$('.ui-layout .categories li h4').wrap('<div class="wraparea" />');
	$('.ui-layout .categories li:has(ul) > .wraparea').append('<div class="hitarea"></div>');
	$('.ui-layout .categories li .wraparea .hitarea').click(function() {
		$(this).parent('.wraparea').parent('li:has(ul)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ul)').children('ul').slideToggle('fast');
	});
	// left-column categories
	$('.ui-layout .left-column .categories li h4 a').click(function() {
		$('.ui-layout .left-column .categories li').removeClass('active');
		$(this).parent().parent().parent('li').addClass('active');
	});
	// main-column categories
	$('.ui-layout .main-column .categories li h4 a').click(function() {
		$('.ui-layout .main-column .categories li').removeClass('active');
		$(this).parent().parent().parent('li').addClass('active');
	});
	
	//////////// CATEGORIES ACTION
	// content-management left-column
	$('.content-management .left-column .categories li > .wraparea').append('<div class="action-new"><a href="javascript:void(0)">新建</a><ul><li><a href="edit_info.html">富文本</a></li><li><a href="edit_info.html">图片集</a></li><li><a href="edit_info.html">PDF</a></li><li><a href="edit_info.html">交互内容</a></li><li class="divider"></li><li><a href="#lib">引入内容</a></li></ul></div>');
	
	$('.content-management .left-column .categories > ul > li > ul > li > .wraparea').append('<div class="share"><a href="#" rel="tooltip" title="共享信息">共享信息</a></div>');
	
	// example
	$('.content-management .left-column .categories > ul > li > .wraparea:gt(2)').append('<div class="platform"><ul><li class="platform-web" rel="tooltip" title="Web">Web</li><li class="platform-ipad" rel="tooltip" title="iPad">iPad</li></ul></div><div class="type-link"><a href="#" rel="tooltip" title="引入内容">引入内容</a></div>');
	
	// cat-management main-column
	$('.cat-management .categories li > .wraparea').append('<div class="btn-draged" rel="tooltip" title="上下拖拽"></div><div class="action"><ul><li><a href="#editModal">编辑</a></li><li><a href="#editModal">添加子分类</a></li><li><a href="#confirmModal">删除</a></li></ul></div>');
	
	// content-organization right-column
	/*$('.content-organization .right-column .categories li > .wraparea').append('<div class="action"><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">编辑</a></li><li class="action-new"><a href="javascript:void(0)">+ 追加</a><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">添加子分类</a></li><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">新建链接</a></li><li><a href="#lib" data-toggle="modal" data-keyboard="false" data-backdrop="false">引入内容</a></li><li><a href="#categories" data-toggle="modal" data-keyboard="false" data-backdrop="false">引入分类</a></li><li class="divider"></li><li><a href="#confirmModal">删除</a></li></ul></li></ul></div><!-- action end --><div class="btn-draged" rel="tooltip" title="上下拖拽"></div>');*/
	
	$('.content-organization .right-column .categories > ul > li > .wraparea').append('<div class="platform"><ul><li class="platform-web" rel="tooltip" title="Web">Web</li><li class="platform-ipad" rel="tooltip" title="iPad">iPad</li></ul></div>');
	$('.content-organization .right-column .categories > ul > li > ul > li .wraparea').append('<div class="type-link"><a href="#" rel="tooltip" title="引入内容">引入内容</a></div>');

	// example
	$('.content-organization .right-column .categories > ul > li > ul > li .wraparea').addClass('unpublished').append('<div class="action-pub"><a href="#confirmModal" rel="tooltip" title="发布">发布</a></div>');
	$('.content-organization .right-column .categories li > .wraparea').eq(0).addClass('published').append('<div class="action-pub"><a href="#confirmModal" rel="tooltip" title="收回">收回</a></div>');
	$('.content-organization .right-column .categories li > .wraparea').eq(4).addClass('has-update').append('<div class="action-pub"><a href="javascript:void(0)" rel="tooltip" title="更新">更新</a><ul><li><a href="#confirmModal">更新</a></li><li><a href="#confirmModal">放弃更新</a></li></ul></div>');
	$('.content-organization .right-column .categories li > .wraparea').eq(5).removeClass('unpublished').addClass('published').append('<div class="action-pub"><a href="#confirmModal" rel="tooltip" title="收回">收回</a></div>');
	
	// example 2
	$('.content-organization .right-column .categories > ul > li > .wraparea').addClass('page').append('<div class="action"><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">编辑</a></li><li class="action-new"><a href="javascript:void(0)">+ 追加</a><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">添加子分类</a></li><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">新建链接</a></li><li><a href="#lib" data-toggle="modal" data-keyboard="false" data-backdrop="false">引入内容</a></li><li><a href="#categories" data-toggle="modal" data-keyboard="false" data-backdrop="false">引入分类</a></li><li class="divider"></li><li><a href="#confirmModal">删除</a></li></ul></li></ul></div><!-- action end --><div class="btn-draged" rel="tooltip" title="上下拖拽"></div>');
	
	$('.content-organization .right-column .categories > ul > li:last ul li > .wraparea').addClass('cat').append('<div class="action"><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">编辑</a></li><li class="action-new"><a href="javascript:void(0)">+ 追加</a><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">添加子分类</a></li><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">新建链接</a></li><li><a href="#lib" data-toggle="modal" data-keyboard="false" data-backdrop="false">引入内容</a></li><li><a href="#categories" data-toggle="modal" data-keyboard="false" data-backdrop="false">引入分类</a></li><li class="divider"></li><li><a href="#confirmModal">删除</a></li></ul></li></ul></div><!-- action end --><div class="btn-draged" rel="tooltip" title="上下拖拽"></div>');
	
	$('.content-organization .right-column .categories > ul > li:first > ul > li > .wraparea').addClass('content').append('<div class="action"><ul><li><a href="#editModal" data-toggle="modal" data-keyboard="false" data-backdrop="false">编辑</a></li><li><a href="#confirmModal">删除</a></li></ul></div><!-- action end --><div class="btn-draged" rel="tooltip" title="上下拖拽"></div>');
	
	
	//////////// RELATED-INFO
	// related-info hide
	$('.ui-layout-right.related-info').hide();
	$('.ui-layout').wrap('<div class="wrap" style="position:absolute; width:100%; height:100%;">');

	// click, related-info show
	$('.ui-layout-center .column-bd table tr, .gallery-list li, .cat-management .main-column .categories li, .content-organization .right-column .categories li').click(function(event) {
		$('.cat-management .main-column .categories li, .content-organization .right-column .categories li').removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		$('.ui-layout-right.related-info').show();
		event.stopPropagation();
	});
	// click, related-info hide
	$('.wrap').click(function(event) {
		$('.column-bd table tr, .gallery-list li, .cat-management .categories li, .content-organization .right-column .categories li').removeClass('active');
		$('.ui-layout-right.related-info').hide();
	});
	// stop
	$('.ui-layout-right .mod, .column-bd table tr td .action ul, td input[type="checkbox"], .modal, .modal-backdrop, .action a, .cat-management .main-column .categories li .hitarea, .content-organization .right-column .categories li .hitarea, .btn-draged, .action-pub a').click(function(event) {
		event.stopPropagation();
	});
							
	// table.list delete draft
	$('a[href="#delete"]').click(function (){
		$(this).parents('tr').fadeOut(1000).children('td').css({ 'background': '#f2bfbf', 'border-color': '#f2bfbf', 'border-bottom': '1px solid #c99', 'opacity': '.5' });
	});					
	

	////////// EDIT-FORM
	$('.info-mod dl p').click(function () {
	  var text = $(this).text();
	  $(this).hide();
	  $(this).parent().children('.editform').show();
      $(this).parent().children('.editform').children('input, textarea').val(text).focus();
    });					
	$('.info-mod .action-cancel').click(function () {
	  $(this).parent().parent('.editform').hide();
	  $(this).parent().parent().parent().children('p').show();
    });
	$('.info-mod .action-save').click(function () {
	  var val = $(this).parent().parent('.editform').children('input, textarea').val();
	  $(this).parent().parent('.editform').hide();
	  $(this).parent().parent().parent().children('p').show();
	  $(this).parent().parent().parent().children('p').text(val);
    });
	// non-editable
	$('.non-editable .info-mod dl p').click(function () {
	  var text = $(this).text();
	  $(this).show();
	  $(this).parent().children('.editform').hide();
	  $(this).parent().children('.editform').children('input, textarea').val(text).focus();
	});

	
	// setNanoscrollbar
	setNanoscrollbar();
	$('.nano').mouseover(function (){
		$('.nano').nanoScroller();
	});
	
	// setModal
	$('a[href="#lib"], button[data-target="#lib"], a[href="#material"], button[data-target="#material"], a[href="#categories"], button[data-target="#categories"], a[href="#editModal"], button[data-target="#editModal"], a[href="#newUser"], button[data-target="#newUser"], a[href="#upload"], button[data-target="#upload"], a[href="#confirmModal"], button[data-target="#confirmModal"]').mouseover(function (){
		setModal();
	});
	// setPreview
	$('a[href="#preview"], button[data-target="#preview"]').mouseover(function (){
		setPreview();
	});
	
	////////// large-modal content demo
	// lib
	$('a[href="#lib"], button[data-target="#lib"]').click(function() {
		$('#lib .modal-body').load('list_2col.html .ui-layout-center-bd >', (function() {setCategories();setNanoscrollbar();setPreview();}));
	});
	// material
	$('a[href="#material"], button[data-target="#material"]').click(function() {
		$('#material .modal-body').load('list_2col.html .ui-layout-center-bd >', (function() {setCategories();setNanoscrollbar();setPreview();}));
	});
	// categories
	$('a[href="#categories"], button[data-target="#categories"]').click(function() {
		$('#categories .modal-body .left-column .column-bd').load('content_organization.html .ui-layout-center-bd .left-column .column-bd >');
		$('#categories .modal-body .right-column .column-bd').load('list_2col.html .ui-layout-right .mod:last-child .mod-bd >', (function() {setCategories();setNanoscrollbar();}));
	});
	
	
	////////// Tooltip:after other module
	$('[rel="tooltip"]').tooltip({ html: true, delay: { show: 100, hide: 0 }, container: 'body' });
		
		
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
	// right-column 'type of category'
	$('.modal .right-column .categories > ul > li > .wraparea').addClass('page');
	$('.modal .right-column .categories > ul > li:last ul li > .wraparea').addClass('cat');
	$('.modal .right-column .categories > ul > li:first > ul > li > .wraparea').addClass('content');
}


// setModal
function setModal() {	
	// lib
	$('a[href="#lib"], button[data-target="#lib"]').click(function() {
		$('#lib').modal({backdrop:false});
	});
	// material
	$('a[href="#material"], button[data-target="#material"]').click(function() {
		$('#material').modal({backdrop:false});
	});
	// categories
	$('a[href="#categories"], button[data-target="#categories"]').click(function() {
		$('#categories').modal({backdrop:false});
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
	$('.edit-info .action-preview, .edit-richtext .action-preview, tr.richtext .action a[href="#preview"], .edit-fluid-doc .topbar button[data-target="#preview"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#fff"});
		$('#preview').modal();
		$('#preview .modal-body').load('modules/preview.html .richtext', (function() {
			setNanoscrollbar();
			// info
			$('.more-info a').click(function() {
				$('.caption-mod').toggle();
			});
			$('.caption-mod .close a').click(function() {
				$('.caption-mod').hide();
			});
		}));
	});
	// TAB
	$('.edit-tab .action-preview, tr.tab .action a[href="#preview"], .lib-mod li.tab .action a[href="#preview"], .component.tab .action a[href="#preview"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#fff"});
		$('#preview').modal();
		$('#preview .modal-body').load('modules/preview.html .tab', (function() {setNanoscrollbar();}));
		$('.modal-backdrop').click(function(event) {
			event.stopPropagation();
		});
	});
	// SLIDE
	$('.edit-gallery .action-preview, tr.gallery .action a[href="#preview"], tr.slide .action a[href="#preview"], .mod-ft .action-preview, .lib-mod li.slide .action a[href="#preview"], .component.slide .action a[href="#preview"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#222"});
		$('#preview').modal();
		$('#preview .modal-body').append('<div class="loading"></div>');
		$('#preview .modal-body').load('modules/preview.html #myCarousel2', (function() {
			// info
			$('.more-info a').click(function() {
				$('.caption-mod').toggle();
			});
			$('.caption-mod .close a').click(function() {
				$('.caption-mod').hide();
			});
			
			// autoMiddle @ img_load
			$('.preview-modal .carousel').hide();
			$('.carousel img').load(function(){
				$('.loading').hide();
				$(this).css({
					"max-height": $(window).height() - 80 - 36
				});
				$('.preview-modal .carousel').autoMiddle().fadeIn();
			});
		}));
		$('.modal-backdrop').click(function(event) {
			event.stopPropagation();
		});
	});
	// MATERIAL
	$('#sA .action a[href="#preview"], .ui-layout-right .action button[data-target="#preview"], .material-management table.list tr .action a[href="#preview"], .gallery-list .action a[href="#preview"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#222"});
		$('#preview').modal();
		$('#preview .modal-body').append('<div class="loading"></div>');
		$('#preview .modal-body').load('modules/preview.html .material', (function() {
			// info
			$('.more-info a').click(function() {
				$('.caption-mod').toggle();
			});
			$('.caption-mod .close a').click(function() {
				$('.caption-mod').hide();
			});
			// autoMiddle @ img_load
			$('.preview-modal .material').hide();
			$('.material img').load(function(){
				$('.loading').hide();
				$(this).css({
					"max-height": $(window).height() - 80 - 36
				});
				$('.preview-modal .material').autoMiddle().fadeIn();
			});
		}));
		$('.modal-backdrop').click(function(event) {
			event.stopPropagation();
		});
	});
}

// MSG
$(function(){
	$('.msg a.close').click(function() {
		$(this).parents('.status').fadeOut('fast');
	});
	setTimeout(function(){$('.msg').fadeOut('slow')}, 3000);
});


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
			$(this).css({
				"margin-top": ($(this).parent().height() - $(this).height())/2
			});
		});
	}
})(jQuery);
$(function() {
	$(window).resize(function() {
		$('.preview-modal .carousel img, .preview-modal .material img').css({
			"max-height": $(window).height() - 80 - 36
		});
		$('.preview-modal .carousel, .preview-modal .material').autoMiddle();
	});
});
$(document).ready(function() {
	
	// load modals
	$('body').append('<div class="modals"></div>');
	
	// load-msg
	$('body.cat-management').append('<div class="msg"></div>');
	$('body.cat-management .msg').load('modules/msg.html .status');
	
	// ui-layout-top load adminbar
	$('.ui-layout-top').load('modules/adminbar.html', (function() {
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
	}));
	
	// ui-layout-left load nav
	$('.ui-layout-left').load('modules/nav.html', (function() {
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
		// active
		$('.dashboard nav li.menu-dashboard').addClass('active');
		$('.document-management.fixed-doc nav li.menu-doc').addClass('active unfold').children('ul').children('li:first-child').children('a').addClass('active');
		$('.document-management.fluid-doc nav li.menu-doc').addClass('active unfold').children('ul').children('li:nth-child(2)').children('a').addClass('active');
		$('.content-management nav li.menu-content').addClass('active unfold').children('ul').children('li:first-child').children('a').addClass('active');
		$('.component-management nav li.menu-component').addClass('active unfold').children('ul').children('li:first-child').children('a').addClass('active');
		//	$('.material-management nav li.menu-material').addClass('active unfold').children('ul').children('li:first-child').children('a').addClass('active');
		$('.cat-management nav li.menu-material').addClass('active').children('ul').children('li:nth-child(3)').children('a').addClass('active');
		$('.lib-management nav li.menu-lib').addClass('active');
		$('.content-organization nav li.menu-org').addClass('active');
		$('.user-management nav li.menu-user').addClass('active');
		$('.publish-management nav li.menu-publish').addClass('active');
		// collapse-bar
		$('.ui-layout-left').append("<div class='collapse-bar'></div>");
		$('.collapse-bar').toggle(function (){
			$('.ui-layout').addClass('collapsed-nav');
			$('.ui-layout').removeClass('uncollapsed-nav');
		},function (){
			$('.ui-layout').removeClass('collapsed-nav');
			$('.ui-layout').addClass('uncollapsed-nav');
		});
	}));
	
	
	
	
	// checked all
	$('.ui-layout .column-bd table.list td input[type=checkbox]').click(function () { 
		if ($('.ui-layout .column-bd table.list td input[type=checkbox]:checked').length == $('.ui-layout .column-bd table.list td input[type=checkbox]').length) { 
			$('.ui-layout .column-hd table.list th input[type=checkbox]').attr('checked', 'checked'); 
		} else $('.ui-layout .column-hd table.list th input[type=checkbox]').removeAttr('checked'); 
	});
	$('.ui-layout .column-hd table.list th input[type=checkbox]').click(function () { 
		if ($('.ui-layout .column-hd table.list th input[type=checkbox]:checked').length == $('.ui-layout .column-hd table.list th input[type=checkbox]').length) { 
			$('.ui-layout .column-bd table.list td input[type=checkbox]').attr('checked', 'checked'); 
		} else $('.ui-layout .column-bd table.list td input[type=checkbox]').removeAttr('checked'); 
	});
	
	// checked all
	$('.ui-layout .typo-bd input[type=checkbox]').click(function () { 
		if ($('.ui-layout .typo-bd input[type=checkbox]:checked').length == $('.ui-layout .typo-bd input[type=checkbox]').length) { 
			$('.ui-layout .typo-hd input[type=checkbox]').attr('checked', 'checked'); 
		} else $('.ui-layout .typo-hd input[type=checkbox]').removeAttr('checked'); 
	});
	$('.ui-layout .typo-hd input[type=checkbox]').click(function () { 
		if ($('.ui-layout .typo-hd input[type=checkbox]:checked').length == $('.ui-layout .typo-hd input[type=checkbox]').length) { 
			$('.ui-layout .typo-bd input[type=checkbox]').attr('checked', 'checked'); 
		} else $('.ui-layout .typo-bd input[type=checkbox]').removeAttr('checked'); 
	});
	
	
	
	/*$('.typo .element').prepend('<a href="#" class="action-active" rel="tooltip" title="激活编辑">激活</a><button class="btn btn-small btn-primary action-done" type="button" rel="tooltip" title="编辑" data-target="#confirmModal"><i class="icon-edit icon-white"></i></button><button class="btn btn-small action-cancel" type="button" rel="tooltip" title="预览" data-target="#preview"><i class="icon-zoom-in"></i></button><button class="btn btn-small action-del" type="button" rel="tooltip" title="删除" data-target="#confirmModal"><i class="icon-trash"></i></button>');
	
	$('.mceContentBody .element').mouseover(function() {
		$('[rel="tooltip"]').tooltip({ html: true, delay: { show: 100, hide: 0 }, container: 'body' });
		setModal();
		setPreview();
	});
	
	// active element
	$('.mceContentBody .element a.action-active').click(function() {
		$(this).parent('.element').toggleClass('active').siblings().removeClass('active');
	});*/
	
	

	// collapse mod-bd
	$('.mod .mod-hd').click(function() {
		$(this).parent().children('.mod-bd').slideToggle('fast');
	//	$(this).parent().siblings().children('.mod-bd').slideUp('fast');
	});
	
	// ui-resiable
	$('.typo.tiny-editor .element').prepend('<div class="ui-resizable-handle ui-resizable-n"></div><div class="ui-resizable-handle ui-resizable-e"></div><div class="ui-resizable-handle ui-resizable-s"></div><div class="ui-resizable-handle ui-resizable-w"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"></div><div class="ui-resizable-handle ui-resizable-sw"></div><div class="ui-resizable-handle ui-resizable-ne"></div><div class="ui-resizable-handle ui-resizable-nw"></div>');

	// example - editbar
	/*$('.detail.edit-richtext .ui-layout-center-bd .main-column .column-bd .typo-hd, .detail.edit-tab .ui-layout-center-bd .main-column .column-bd .typo-hd').css({'background':'#f0f0ee url("../public/tiny_mce_bar.png") no-repeat 60px 50%'});*/
	
	// update-tip
	$('.detail .ui-layout-center .main-column .column-hd').append('<div class="update-tip">变更提醒：以下内容与发布版本发生变更<a href="#confirmModal" class="action-recover" rel="tooltip" title="复原">复原</a></div>');

	// non-editable
	$('.non-editable .ui-layout-right button, .non-editable .ui-layout-right input, .non-editable .ui-layout-right textarea, .non-editable .ui-layout-right select').attr('disabled','disabled')
	
	
	// collapse-bar doc-layout
	$('.doc-layout-left').append("<div class='collapse-bar'></div>");
	$('.collapse-bar').click(function (){
		$('.doc-layout').toggleClass('collapsed-nav');
		$('.doc-layout').toggleClass('uncollapsed-nav');	
	});
	
	// tab-component
	$('.tab-component > ul > li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	//	$('.typo-bd section article').eq($('.tab-component > ul > li').index(this)).addClass('active').siblings().removeClass('active');
	//	$('.typo-bd section').eq($('.tab-component > ul > li').index(this)).show().siblings().hide();
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
	$('.content-management .left-column .categories li > .wraparea, .document-management .left-column .categories li > .wraparea').append('<div class="action-new"><a href="javascript:void(0)">新建</a><ul><li><a href="edit_info.html">富文本</a></li><li><a href="edit_info.html">图片集</a></li><li><a href="edit_info.html">PDF</a></li><li><a href="edit_info.html">交互内容</a></li><li class="divider"></li><li><a href="#lib">引入内容</a></li></ul></div>');
	// example
	$('.content-management .left-column .categories > ul > li > ul > li > .wraparea, .document-management .left-column .categories > ul > li > ul > li > .wraparea').append('<div class="share"><a href="#" rel="tooltip" title="共享信息">共享信息</a></div>');
	$('.content-management .left-column .categories > ul > li > .wraparea:gt(2), .document-management .left-column .categories > ul > li > .wraparea:gt(2)').append('<div class="platform"><ul><li class="platform-web" rel="tooltip" title="Web">Web</li><li class="platform-ipad" rel="tooltip" title="iPad">iPad</li></ul></div><div class="type-link"><a href="#" rel="tooltip" title="引入内容">引入内容</a></div>');
	
	// cat-management main-column
	$('.cat-management .categories li > .wraparea').append('<div class="btn-draged" rel="tooltip" title="上下拖拽"></div><div class="action"><ul><li><a href="#editModal">编辑</a></li><li><a href="#editModal">添加子分类</a></li><li><a href="#confirmModal">删除</a></li></ul></div>');
	
	// content-organization right-column
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
	$('.ui-layout-right .mod, .column-bd table tr td .action ul, td input[type="checkbox"], .modal, .modal-backdrop, .cat-management .main-column .categories li .hitarea, .content-organization .right-column .categories li .hitarea, .btn-draged, .action-pub a, .action input[type="checkbox"], .action a').click(function(event) {
		event.stopPropagation();
	});
							
	// table.list delete draft
	$('a[href="#delete"]').click(function (){
		$(this).parents('tr').fadeOut(1000).children('td').css({ 'background': '#f2bfbf', 'border-color': '#f2bfbf', 'border-bottom': '1px solid #c99', 'opacity': '.5' });
	});
	$('a[href="#update"]').click(function (){
		$(this).parents('tr').children('td').css({ 'background': '#fc9', 'border-color': '#f2bfbf', 'border-bottom': '1px solid #c99', 'opacity': '.5' });
	});
	
	$('.typo-hd .action-delete').click(function (){
		$('.typo-bd li:has(".action > input[checked]")').fadeOut(1000).css({ 'background': '#f2bfbf', 'border-color': '#f2bfbf', 'border-bottom': '1px solid #c99', 'opacity': '.5' });
	});				
	

	////////// EDIT-FORM
	$('.info-mod dl dd p').each(function(index) {
		var text2 = $(this).text();
		if (text2.length==0)
		{
			$(this).addClass('empty').append('<em>点击添加内容</em>');
		}
	});
	// APPEND FORM
	$('.info-mod dl.inputform dd').append('<div class="editform" style="display:none;"><input type="text" value="" style="width:234px;"><div><button class="btn btn-small btn-primary action-save" type="button">保存</button><button class="btn btn-small action-cancel" type="button" style="margin-left:10px;">取消</button></div></div>');
	$('.info-mod dl.textareaform dd').append('<div class="editform" style="display:none;"><textarea rows="4" id="description" style="width:246px; margin:0 0 10px;"></textarea><div><button class="btn btn-small btn-primary action-save" type="button">保存</button><button class="btn btn-small action-cancel" type="button" style="margin-left:10px;">取消</button></div></div>');

	// CLICK
	$('.info-mod dl p').click(function () {
		if ( $(this).hasClass('empty') ){
			$(this).hide();
			$(this).parent().children('.editform').show();
			$(this).parent().children('.editform').children('input, textarea').val('').focus();
		}
		else {
			var text = $(this).text();
			$(this).hide();
			$(this).parent().children('.editform').show();
			$(this).parent().children('.editform').children('input, textarea').val(text).focus();
		}	  
    });
	
	// SAVE
	$('.info-mod .action-save').click(function () {
		var val = $(this).parent().parent('.editform').children('input, textarea').val();
		if (val.length==0)
		{
			$(this).parent().parent().parent().children('p').empty();
			$(this).parent().parent().parent().children('p').addClass('empty').append('<em>点击添加内容</em>');
		}
		else { 
			$(this).parent().parent().parent().children('p').removeClass('empty');
			$(this).parent().parent().parent().children('p').text(val);
		}
    });	
	
	// SAVE & CANCEL	
	$('.info-mod .action-save, .info-mod .action-cancel').click(function () {
		$(this).parent().parent('.editform').hide();
		$(this).parent().parent().parent().children('p').show();
	});

	// non-editable
	$('.non-editable .info-mod dl p').click(function () {
	  var text = $(this).text();
	  $(this).show();
	  $(this).parent().children('.editform').hide();
	  $(this).parent().children('.editform').children('input, textarea').val(text).focus();
	});

	
	// nanoscrollbar
	$('.nanoscrollbar').wrapInner('<div class="nano"><div class="content"></div></div>');
	$('.nano').nanoScroller();
	$('.nano .pane').css({'visibility': 'hidden'});
	$('.nano').hover(function (){
			$(this).children('.pane').css({'visibility': 'visible'});
		},function (){
			$(this).children('.pane').css({'visibility': 'hidden'});
	});
	$('.nano').mouseover(function (){
		$('.nano').nanoScroller();
	//	$('.tab-content .nano').nanoScroller({ sliderMaxHeight: $(window).height() - 75 - 36 - 9 - 32 - 1 });
	});
	
	
	
	
	////////// Tooltip:after other module
	$('[rel="tooltip"]').tooltip({ html: true, delay: { show: 100, hide: 0 }, container: 'body' });
	

	
	
	
	
	
});









// setNanoscrollbar
function setNanoscrollbar() {	
	$('.modal .nanoscrollbar').wrapInner('<div class="nano"><div class="content"></div></div>');
	$('.modal .nano').nanoScroller();
	$('.modal .nano .pane').css({'visibility': 'hidden'});
	$('.modal .nano').hover(function (){
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
		return false();
	});
	// main-column categories
	$('.modal .main-column .categories li h4 a').click(function() {
		$('.modal .main-column .categories li').removeClass('active');
		$(this).parent().parent().parent('li').addClass('active');
		return false();
	});
	// right-column 'type of category'
	$('.modal .right-column .categories > ul > li > .wraparea').addClass('page');
	$('.modal .right-column .categories > ul > li:last ul li > .wraparea').addClass('cat');
	$('.modal .right-column .categories > ul > li:first > ul > li > .wraparea').addClass('content');
}

// setCheckall
function setCheckall() {	
	$('.modal .column-bd table.list td input[type=checkbox]').click(function () { 
		if ($('.modal .column-bd table.list td input[type=checkbox]:checked').length == $('.modal .column-bd table.list td input[type=checkbox]').length) { 
			$('.modal .column-hd table.list th input[type=checkbox]').attr('checked', 'checked'); 
		} else $('.modal .column-hd table.list th input[type=checkbox]').removeAttr('checked'); 
	});
	$('.modal .column-hd table.list th input[type=checkbox]').click(function () { 
		if ($('.modal .column-hd table.list th input[type=checkbox]:checked').length == $('.modal .column-hd table.list th input[type=checkbox]').length) { 
			$('.modal .column-bd table.list td input[type=checkbox]').attr('checked', 'checked'); 
		} else $('.modal .column-bd table.list td input[type=checkbox]').removeAttr('checked'); 
	});
}










// MODAL
$(function() {
	
	$('a[href="#lib"], button[data-target="#lib"], a[href="#material"], button[data-target="#material"], a[href="#categories"], button[data-target="#categories"], a[href="#editModal"], button[data-target="#editModal"], a[href="#newUser"], button[data-target="#newUser"], a[href="#upload"], button[data-target="#upload"], a[href="#confirmModal"], button[data-target="#confirmModal"], a[href="#preview-fixed-doc"], button[data-target="#preview-fixed-doc"], a[href="#preview-fluid-doc"], button[data-target="#preview-fluid-doc"]').mouseover(function (){
		setModal();
	});
	
	////////// large-modal content demo
	// lib
	$('a[href="#lib"], button[data-target="#lib"]').click(function() {
		$('#lib .modal-body').load('list_2col.html .ui-layout-center-bd >', (function() {setCategories();setNanoscrollbar();setPreview();setCheckall();}));
	});
	// material
	$('a[href="#material"], button[data-target="#material"]').click(function() {
		$('#material .modal-body').load('list_2col.html .ui-layout-center-bd >', (function() {setCategories();setNanoscrollbar();setPreview();setCheckall();}));
	});
	// categories
	$('a[href="#categories"], button[data-target="#categories"]').click(function() {
		$('#categories .modal-body .left-column .column-bd').load('content_organization.html .ui-layout-center-bd .left-column .column-bd >');
		$('#categories .modal-body .right-column .column-bd').load('list_2col.html .ui-layout-right .mod:last-child .mod-bd >', (function() {setCategories();setNanoscrollbar();}));
	});
	
});
// setModal
function setModal() {
	// lib
	$('a[href="#lib"], button[data-target="#lib"]').click(function() {
		$('#lib').modal({backdrop:false});
		return false();
	});
	// material
	$('a[href="#material"], button[data-target="#material"]').click(function() {
		$('#material').modal({backdrop:false});
		return false();
	});
	// categories
	$('a[href="#categories"], button[data-target="#categories"]').click(function() {
		$('#categories').modal({backdrop:false});
		return false();
	});
	// edit
	$('a[href="#editModal"], button[data-target="#editModal"]').click(function() {
		$('#editModal').modal({backdrop:false});
		return false();
	});
	// newPage
	$('a[href="#newPage"], button[data-target="#newPage"]').click(function() {
		$('#newPage').modal({backdrop:false});
		return false();
	});
	// newUser
	$('a[href="#newUser"], button[data-target="#newUser"]').click(function() {
		$('#newUser').modal({backdrop:false});
		return false();
	});
	// upload
	$('a[href="#upload"], button[data-target="#upload"]').click(function() {
		$('#upload').modal({backdrop:false});
		return false();
	});
	// delete
	$('a[href="#confirmModal"], button[data-target="#confirmModal"]').click(function() {
		$('#confirmModal').modal({backdrop:false});
		return false();
	});
	
	// FIXED-DOC
	$('a[href="#preview-fixed-doc"], button[data-target="#preview-fixed-doc"]').click(function() {
		$('#doc .modal-body').empty().css({"background": "#e3e3e3"});
		$('#doc').modal();
		$('#doc .modal-body').load('modules/preview.html > .fixed-doc', (function() {
			setNanoscrollbar();
			setModal();
			setPreview();
		}));
		return false();
	});
	// FLUID-DOC
	$('a[href="#preview-fluid-doc"], button[data-target="#preview-fluid-doc"]').click(function() {
		$('#doc .modal-body').empty().css({"background": "#e3e3e3"});
		$('#doc').modal();
		$('#doc .modal-body').load('fluid_doc.html .doc-container', (function() {
			setNanoscrollbar();
			setModal();
			setPreview();
		}));
		return false();
	});
	
}




// PREVIEW
$(function() {
	$('a[href="#preview-richtext"], button[data-target="#preview-richtext"], a[href="#preview-slide"], button[data-target="#preview-slide"], a[href="#preview-tab"], button[data-target="#preview-tab"], a[href="#preview-video"], button[data-target="#preview-video"], a[href="#preview-image"], button[data-target="#preview-image"], a[href="#preview-html-package"], button[data-target="#preview-html-package"]').mouseover(function (){
		setPreview();
	});
});
// setPreview
function setPreview() {
	// RICHTEXT
	$('a[href="#preview-richtext"], button[data-target="#preview-richtext"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#fff"});
		$('#preview').modal();
		$('#preview .modal-body').load('modules/preview.html > .richtext', (function() {
			setNanoscrollbar();
			setModal();
			setPreview();
			// info
			$('.more-info a').click(function() {
				$('.caption-mod').toggle();
			});
			$('.caption-mod .close a').click(function() {
				$('.caption-mod').hide();
			});
		}));
		return false();
	});
	// SLIDE
	$('a[href="#preview-slide"], button[data-target="#preview-slide"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#222"});
		$('#preview').modal();
		$('#preview .modal-body').append('<div class="loading"></div>');
		$('#preview .modal-body').load('modules/preview.html > #myCarousel2', (function() {
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
		return false();
	});
	// TAB
	$('a[href="#preview-tab"], button[data-target="#preview-tab"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#fff"});
		$('#preview').modal();
		$('#preview .modal-body').load('modules/preview.html > .tab', (function() {setNanoscrollbar();}));
		$('.modal-backdrop').click(function(event) {
			event.stopPropagation();
		});
		return false();
	});
	// IMAGE
	$('a[href="#preview-image"], button[data-target="#preview-image"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#222"});
		$('#preview').modal();
		$('#preview .modal-body').append('<div class="loading"></div>');
		$('#preview .modal-body').load('modules/preview.html > .image', (function() {
			// info
			$('.more-info a').click(function() {
				$('.caption-mod').toggle();
			});
			$('.caption-mod .close a').click(function() {
				$('.caption-mod').hide();
			});
			// autoMiddle @ img_load
			$('.preview-modal .image').hide();
			$('.image img').load(function(){
				$('.loading').hide();
				$(this).css({
					"max-height": $(window).height() - 80 - 36
				});
				$('.preview-modal .image').autoMiddle().fadeIn();
			});
		}));
		$('.modal-backdrop').click(function(event) {
			event.stopPropagation();
		});
		return false();
	});
	// VIDEO
	$('a[href="#preview-video"], button[data-target="#preview-video"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#222"});
		$('#preview').modal();
		$('#preview .modal-body').load('modules/preview.html > .video', (function() {
			// info
			$('.more-info a').click(function() {
				$('.caption-mod').toggle();
			});
			$('.caption-mod .close a').click(function() {
				$('.caption-mod').hide();
			});
			setNanoscrollbar();
		}));
		return false();
	});
	// HTML-PACKAGE
	$('a[href="#preview-html-package"], button[data-target="#preview-html-package"]').click(function() {
		$('#preview .modal-body').empty().css({"background": "#222"});
		$('#preview').modal();
		$('#preview .modal-body').load('modules/preview.html > .html-package', (function() {
			// info
			$('.more-info a').click(function() {
				$('.caption-mod').toggle();
			});
			$('.caption-mod .close a').click(function() {
				$('.caption-mod').hide();
			});
			setNanoscrollbar();
		}));
		return false();
	});
	
}










// MSG
$(function(){
	$('.msg a.close').click(function() {
		$(this).parents('.status').fadeOut('fast');
	});
	setTimeout(function(){$('.msg').fadeOut('slow')}, 3000);
});


// action-new
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
		$('.preview-modal .carousel img, .preview-modal .material img, .preview-modal .image img').css({
			"max-height": $(window).height() - 80 - 36
		});
		$('.preview-modal .carousel, .preview-modal .material, .preview-modal .image img').autoMiddle();
	});
});
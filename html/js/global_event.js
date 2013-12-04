/* define global event */
$(document).ready(function(){
	init_global_events();
})
function init_global_events(){
	init_global_msg_close_event();
	init_history_back_event();
	init_parent_children_tree();
	init_collapsebar_click_event();
	init_sidebar_collapse_event();
	init_global_scroll_fix_event();
	init_global_topbar_menu_event();
	init_global_categories_event();
	init_global_workflow_atag_click_event();
	init_global_workflow_submit_button_event();
}

/* global events */
/* for global site action */


/* for global msg */
function init_global_msg_close_event(){
	$('.msg a.close').live('click',function() {
		$(this).parents('.status').fadeOut('fast');
	});
}

function init_history_back_event(){
	set_click_event('div.return a',function(){
		//if(!edit_changed){

		//var status=get_history_back_status();
			if(document.referrer!="") {
				window.location.href=document.referrer;
			}
			else window.location.href='/dashboard';
			return false;
		//}
		// else{
			// var returned=window.confirm('你还没有保存，是否继续?<br>确定要离开此页吗？');
			// if(returned){
				// if(document.referrer!="") {
					// window.location.href=document.referrer;
				// }
				// else window.location.href='/dashboard';
				// return false;			
			// }
			// else return false;
			// //return false;
		// }
	})
}

function init_parent_children_tree(){
	set_click_event('.wraparea .hitarea', function() {
		$(this).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
		$(this).parent('.wraparea').parent('li:has(ul)').toggleClass('unfold');
		$(this).parent('.wraparea').parent('li:has(ul)').children('ul').slideToggle('fast');
	});
}
function init_leftnavbar_hover_event(){
	$('.internal-wrap aside nav li > ul > li').hover(function (){
		$(this).children('ul').show();
	},function (){
		$(this).children('ul').hide();
	});
}
function init_collapsebar_click_event(){
	$('.collapse-bar').toggle(function (){
		$(this).parents('body').addClass('collapsed-nav');
	},function (){
		$(this).parents('body').removeClass('collapsed-nav');
	});
}

function init_sidebar_collapse_event(){
	set_click_event('.right-hud .sidebar .mod-hd',function() {
		$(this).parents('.sidebar .mod').toggleClass('fold');
		$(this).parents('.sidebar .mod').children('.mod-bd').slideToggle('fast');
	});
}

function init_global_scroll_fix_event(){
	$(document).scroll(function () { 
	  $(".left-hud, .right-hud").css( "margin-left", "-" + $(document).scrollLeft() + "px" );
    });
	$(".internal-wrap .right-column").css({"max-height": $(window).height() - 193, "overflow": "auto"});
	$(".internal-wrap .inner-container > section").css({ "min-height": $(window).height() - 141 });
	$(document).scroll(function() {
		if ( $(document).scrollTop() > 78 ) {
			$(".internal-wrap .right-column").addClass("fixed");
			$(".internal-wrap .right-column").css({
	        	"left": $('.internal-wrap .left-column').width() + 230, "max-height": $(window).height() - 40
			});
		} else {
			$(".internal-wrap .right-column").removeClass("fixed");
		}
	});
	$(window).resize(function() {
		$(".internal-wrap .right-column").css({ "left": $('.internal-wrap .left-column').width() + 230, "max-height": $(window).height() - 193, "overflow": "auto" });
		$(".internal-wrap .inner-container > section").css({ "min-height": $(window).height() - 141 });
	});
	$(document).scroll(function () { 
	  $(".internal-wrap .right-column").css( "margin-left", "-" + $(document).scrollLeft() + "px" );
    });

}

function init_global_topbar_menu_event(){
	set_hover_event('.internal-wrap header .menu-mod', function(event){
		$(event.currentTarget).children('.internal-wrap header .menu-bd').show();
	},function (event){
		$(event.currentTarget).children('.internal-wrap header .menu-bd').hide();
	});	 

	set_hover_event('.internal-wrap header .menu-bd li', function(event){
		$(event.currentTarget).children('.internal-wrap header .menu-bd li > ul').show();
	},function (event){
		$(event.currentTarget).children('.internal-wrap header .menu-bd li > ul').hide();
	});		
}

function init_global_categories_event(){
	set_click_event('button[name=setcategories]',function() {
		global_set_categories();
	});
}

function init_global_workflow_submit_button_event(){

	set_click_event('div#workflow button.btn',function(opt){
		var ret = {}, opt;
		object_url = $('div#workflow #objecturl').val();
		ret['transition'] = $('div#workflow #transition').val();
		ret['comment']  = $('div#workflow #comment').val();
		opt = "transition="+ret['transition']+"&comment="+ret['comment'];

		json_post(object_url + "/operatestate.json",opt,function(){
			modal_hide('div#workflow');
		},true);
	})
}

function init_global_workflow_atag_click_event(){

	set_click_event('a.workflow',function(opt){

		var object_url = $(this).attr('href');
		var transition = $(this).attr('id');
		var label = $(this).text();

		$("div#workflow").html(global_workflow_template({"label":label,"transition":transition,"object_url":object_url}));
		modal_show('div#workflow');
		return false;
	})
}
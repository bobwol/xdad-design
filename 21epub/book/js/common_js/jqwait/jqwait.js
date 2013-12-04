/*
 * jqwait.js  
 *
 * version 0.1 test
 * 
 * by garry gu (garry.guzy@gmail.com)
 *
 * underscore-min.js needed for this plugin 
 *
 */

 /* for wait handle */
/* define wait object */
var garry_jqwait={
	type:'icon',
	mask:'transparent',
	preventhandle:true,
	beforestart:function(){},
	end:function(){},
	interval:1000,
	derectives:[],
	derectivechecklist:[],
	id:'',
	singlewait:true,
	start:function(){
		if(jqwait_available){
			jqwait_available=false;
			if(!args.mask) args.mask='transparent';
			if(!args.type) args.type='icon';
			showmask(args.mask);
			preventhandle();
			jqwait_args=args;	
			jqwait_showpopup(args.type);
			if(args.start) args.start();
			jqwaitid=setInterval(jqwait_check,1000);
		}
	},
	init:function(){
	}
}
 /* define wait varibles */
var derectives=[];
var derectivechecklist=[];
var jqwaitid;
var jqwait_args;
var jqwait_available=true;
var loading;
var loadingTimer, loadingFrame = 1;
var jqwait_on=false;//This varible use to detech where jqwait is on
 /* end fo varibles defining */

 /* jqwait main function */
function jqwait_simple(args){
	if(!jqwait_on){
		if(!args) var args={};
		if(!args.modal) args.modal=false;
		preventhandle();
		jqwait_create_fancybox(args.modal);
		jqwait_on=true;
	}
}
function jqwait_simple_close(args){
	if(jqwait_on){
		jqwait_close_fancybox();
		releasepreventhandle();
		jqwait_on=false;
	}
}
function jqwait(args){
	if(jqwait_available){
		if(!args) var args={};
		if(!args.modal) args.modal=false;
		jqwait_available=false;
		preventhandle();
		jqwait_args=args;	
		//jqwait_createpopup({modal:false});
		jqwait_create_fancybox(args.modal);
		if(args.start) args.start();
		jqwaitid=setInterval(jqwait_check,500);
	}
}
function jqwait_check(){
	var newderectives=[];
	for (derective in derectives)	{
		if(_.include(derectivechecklist,derectives[derective])){
			//if(jqwait_args.type=='text') popuptext({clear:false,text:derectives[derective]+'.........ok<br>'});
			continue;
		}
		else newderectives.push(derectives[derective]);
	}
	derectives=newderectives;
	if(_.isEmpty(derectives)){
		jqwait_close();
		jqwait_args.end();
	}
}
function jqwait_create_fancybox(modal){
	$('body').append(
		loading	= $('<div id="fancybox-loading" style="display:none;"><div></div></div>'),
		overlay	= $('<div id="fancybox-overlay" class="mask modal"></div>')
	);
	if(modal) overlay.addClass('ui-widget-overlay');
	clearInterval(loadingTimer);
	overlay.show();
	loading.show();
	loadingTimer = setInterval(_animate_loading, 66);
}
function jqwait_close_fancybox(args){
	loading.hide();
	overlay.hide();
	loadingFrame = 1;
	clearInterval(loadingTimer);
	loading.remove();
	overlay.remove();
}
_animate_loading = function() {
	if (!loading.is(':visible')){
		clearInterval(loadingTimer);
		return;
	}

	$('div', loading).css('top', (loadingFrame * -40) + 'px');

	loadingFrame = (loadingFrame + 1) % 12;
};
function jqwait_createpopup(args){
	if(!args||!args.width) args.width=32;
	if(!args||!args.height) args.height=50;
	if(!args||!args.waitname) args.waitname='jqwait';
	if(!args||!args.modal) args.modal=false;
	$('body').children('div#jqwait').remove();//clear original alert ,if exist 
	$('body').append('<div id="jqwait" style="width:32px;"></div>');
	$('body').children('div#jqwait').dialog({
			autoOpen: true,
			height: args.height,
			width: args.width,
			modal: args.modal,
			create:function(event,ui){
			},
			close:function(event,ui){
			},
			dialogClass:args.waitname,
			draggable:false,
			resizable:false
    })
}
function jqwait_closepopup(){
	$('div#jqwait').dialog('close');
	$('div#jqwait').dialog('destroy');
	$('div#jqwait').remove();
}

function jqwait_close(){
	clearInterval(jqwaitid);
	//$("div#popupwindow").html('');
	//closemask();
	//jqwait_closepopup();
	jqwait_close_fancybox();
	releasepreventhandle();
	jqwait_available=true;
}
/* end of jqwait */


/* for popup */


var jqwait_mousedownfn=function(e){
	e.preventDefault();
}
var jqwait_keypressfn=function(e){
	e.preventDefault();
}
function preventhandle(){
	$(document).bind('keypress',jqwait_keypressfn);
	$(document).bind('mousedown',jqwait_mousedownfn);
}
function releasepreventhandle(){
	$(document).unbind('keypress',jqwait_keypressfn);
	$(document).unbind('mousedown',jqwait_mousedownfn);
}

/* end for popup */
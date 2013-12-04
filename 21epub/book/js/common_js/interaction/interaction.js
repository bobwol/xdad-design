/*
 * interaction.js  
 *
 * version 0.2 test
 * 
 * by garry gu (garry.guzy@gmail.com)
 *
 *   
 */


/* for base func*/


/* for model */
function model_geturl(id){//through the model id to get this model's collection fatch url ,this function return a standand (maybe) url string
	var iHandlemodel=iElementlist.get(id);
	var url='/'+id;//for example '1234' it's parent is 'portal',it will do this_function to find parent 
	if (iHandlemodel.get('iType')=='Page'){//next time it find portal return portal
		return iHandlemodel.id+'/';
	}
	else {
		url=model_geturl(iHandlemodel.get('iParent'))+iHandlemodel.id+'/';
		return url;
	}// so it will be portal
}
/* @ end */

/* for page */
function page_dom_focus(pageid){//for pageview
	$('fieldset#dom').children('ul.page').each(function(){
		if($(this).attr('id')==pageid) $(this).removeClass('hidden');
		else $(this).addClass('hidden');
	})
}

function page_addPage(){
	var url='addpage.json';
	jqwait_simple();
	$.getJSON(url, function(data) {
		if(data.code==200){
			var ipageid=data.data;
			iPagelist.add({iType:'Page',id:ipageid});
			jqwait_simple_close();
		}
	});
}
/* end for page */




/* for tabs change */
function changetabs(container,tab){
	tabDiv=$('ul#'+container);
	tabDiv.children('li').each(function(){
		if($(this).attr('id')==tab) $(this).addClass('selected');
		else $(this).removeClass('selected');
	})
}
/* end for tabs change */




/* for action init */
function initialize(){//init when a new page load
	   $('#info_dom').append('<li id="iRoot"><ul></ul></li>');
	   init_models();
	  // init_interaction_area();
	   //info_window_create();
	  // $('#resource_tabs').tabs();
	  // resources_window_create();
	   init_interaction_actions();
	   init_page_actions();
}
function init_models(){
	iElementlist = new iElementCollection;//this collection contain all the models include the root
	//iRoot= new iRootModel({id:'interaction_area',iType:'Root'});
}


function init_interaction_actions(){
	$('.interaction-action ul').selectable({
			filter: 'li',
			selected: function(){
				changetabs($(this).parent('ul').attr('id'),$(this).attr('id'));
				var iType=$('.interaction-action ul').children('li.ui-selected').attr('id')
				var iCommon=_.clone(interaction.model[iType].prototype.defaults.iCommon);
				if(iCommon) iCommon.landscape=_.clone(iCommon.landscape);
				if(iCommon) iCommon.portait=_.clone(iCommon.portait);
				var iDetail=_.clone(interaction.model[iType].prototype.defaults.iDetail);
				var newmodel=new interaction.model[iType]({iType:iType,iCommon:iCommon,iDetail:iDetail,iParent:interaction.elementlist.url,iUrl:context_url+interaction.elementlist.url});
			}
	});
}

var pageid;
function init_page_actions(){
	$('.navi header .action-add').click(function(){
		//page_addPage();
		//return false;
	})
	$('.navi header .action-del').click(function(){
		var ipageid=$('.doc-layout-left .thumbs').find('li.ui-selected').attr('id');
		if(!ipageid) return false;
		iPagelist.get(ipageid).iview.removemodel();
		return false;
	})
}

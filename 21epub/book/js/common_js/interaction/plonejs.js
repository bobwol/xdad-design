/*
 * interaction.js  
 *
 * version 0.3 bata
 * 
 * by garry gu (garry.guzy@gmail.com)
 *
 *   
 */



/* for all */
function gettypebyname(typecontainer,name){//specify the container of the type where to find ,and the name of the type
	var element=$(typecontainer+' [name='+name+']');
	if(element[0]){
		return element[0].tagName == "INPUT" ? $(element[0]).attr("type").toLowerCase() : element[0].tagName.toLowerCase();
	}
	else return '';
}
function getlist(element){//return an array list of a jquery element which share same selector
	var checkarray=new Array();
	$(element).each(function(){
            checkarray.push($(this).attr('id'));
    })
	return checkarray;
}
function getcheckedlist(checkbox){// return the checkbox value list,these checkbox has the same name
	var checkarray=new Array();
	$('[name='+checkbox+']:checked').each(function(){
            checkarray.push($(this).val());
    })
	return checkarray;
}
function getcheckedlistvalue(checkcontainer,checkbox){// return the checkbox value list,these checkbox has the same name
	var checkarray=new Array();
	$(checkcontainer+' [name='+checkbox+']:checked').each(function(){
            checkarray.push($(this).val());
    })
	return checkarray;
}
function getcheckfieldvalue(checkcontainer,checkboxname){ //use to get the checked value from its container, return a checked list or false if no value
	var checkarray=new Array();
	$(checkcontainer+' [name='+checkboxname+']:checked').each(function(){
            checkarray.push($(this).val());
    })
	if(checkarray.length>0) {
		if(checkarray.length==1) return checkarray[0];
		else return checkarray;
	}
	else return 'false';
}
function removeconfirm(text){//it's a confirm always use for remove ,you can pass text as argument
	if(!text) text='Are you sure';//a stupid but simple question 
	return confirm(text);
}

function ajax_get(UIDiv,url,data,func){//ajaxget , from url?data , and put the data
	  jQuery.ajax({
					 type: 'GET',
					 url: url,
					 data: encodeURI(data),
					 dataType: 'html',
					 contentType: 'text/html; charset=utf-8', 
					 success: function(html) { 
						UIDiv.html(html);
						func();
					 }    
	  }); 
}
function ajax_json_get(url,func){
	$.getJSON(url, function(data) {
		return data;
	})
}
function ajax_post(url,data,func){//ajaxpost , from url?data , and put the data
	  jQuery.ajax({
					 type: 'POST',
					 url: url,
					 data: encodeURI(data),
					 contentType: 'application/x-www-form-urlencoded', 
					 success: function(html) { 
						func();
					 }    
	  }); 
}
function getratio(width,height){
	var ratio=parseInt(width/height*100);
	return parseFloat(ratio/100);
}
function getratiobyid(id){
	var iHandlemodel=iElementlist.get(id);
	var commonattr=iHandlemodel.get('iCommon')[iPageDirection];
	var ratio=parseInt(commonattr[iWidth]/commonattr[iHeight]);
	return parseFloat(ratio/100);
}
/* @end */

/* for model 
//this is the function list for models ,that means for data sync with the server background
//including create, update , remove , and error handle ,etc 
*/
function model_find(id){//this function is the easiest function but maybe the most frequent usage , it's find the model through the id
	var iHandlemodel=iElementlist.get(id);
	return iHandlemodel;
}
function model_geturl(id){//through the model id to get this model's collection fatch url ,this function return a standand (maybe) url string
	var iHandlemodel=iElementlist.get(id);
	var url='/'+id;//for example '1234' it's parent is 'portal',it will do this_function to find parent 
	if (iHandlemodel.get('iParent')=='body'){//next time it find portal return portal
		return 'portal';
	}
	else {
		url=model_geturl(iHandlemodel.get('iParent'))+url;
		return url;
	}// so it will be portal
}
function model_gettypelist(id,typelist){//this function use to get the specific typelist models of the collection query by id
	var iHandlemodel=iElementlist.get(id);
	var items=iHandlemodel.icollection.childlist;//get the collection's childlist
	var results=items;
	if(typelist){
		var results=_.filter(items,function(item){
			return _.include(typelist,iElementlist.get(item).get('iType'));
		})
	}
	return results;
}
function model_gettitlebyid(id){
	var iModel=iElementlist.get(id);
	if(iModel){
		var detail=iModel.get('iDetail');
		return detail['iTitle']||iModel.id;
	}
}
function model_gettitlebyids(ids){
	var results=_.map(ids,function(id){
		var iModel=iElementlist.get(id);
		var detail=iModel.get('iDetail');
		return detail['iTitle']||iModel.id;
	})
	return results;
}
function model_constructcommonargsbyattr(id,attr,value){//construct the common position field by a single attr
	//this function is called by model function when a model change happened to common
	//this function is used when you don't know what kind of attr you got, maybe a x or width
	var ihandlemodel=iElementlist.get(id);
	var common=ihandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var args={};
	if(attr=='iStartx') args.iStartx=parseInt(value);
	else	args.iStartx=commonattr.iStartx;
	if(attr=='iStarty') args.iStarty=parseInt(value);
	else	args.iStarty=commonattr.iStarty;
	if(attr=='iWidth')  args.iWidth=parseInt(value);
	else	args.iWidth=commonattr.iWidth;
	if(attr=='iHeight') args.iHeight=parseInt(value);
	else    args.iHeight=commonattr.iHeight;
	return args;
}
function model_constructcommonargsbyargs(id,args){//through id to construct a common field ,args are like iStartx:''
	//just like above ,but it use another kind of type to construct the common attr
	//return args object args.iStartx, etc
	//when you have a single or mutiple args change but not all args ,you want get all args ,use it
	var ihandlemodel=iElementlist.get(id);
	var common=ihandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	if(!args.iStartx&&args.iStartx!=0) args.iStartx=commonattr.iStartx;
	if(!args.iStarty&&args.iStarty!=0) args.iStarty=commonattr.iStarty;
	if(!args.iWidth&&args.iWidth!=0) args.iWidth=commonattr.iWidth;
	if(!args.iHeight&&args.iHeight!=0) args.iHeight=commonattr.iHeight;
	for (arg in args){
		args[arg]=parseInt(args[arg]);
	}
	return args;
}
function model_constructcommonbyargs(id,args){//when you have got the args ,x,y ,or width, height 
	//this function can easily get a whole common val by args 
	var ihandlemodel=iElementlist.get(id);
	var common=ihandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	if(!args.iStartx&&args.iStartx!=0) args.iStartx=commonattr.iStartx;
	if(!args.iStarty&&args.iStarty!=0) args.iStarty=commonattr.iStarty;
	if(!args.iWidth&&args.iWidth!=0) args.iWidth=commonattr.iWidth;
	if(!args.iHeight&&args.iHeight!=0) args.iHeight=commonattr.iHeight;
	if(iPageDirection=='landscape') return {portait:common.portait,landscape:args};
	else return {portait:args,landscape:common.landscape};
}
function model_constructargsbyratio(id,ratio){
	//this is a complicated function that it construct the common width and height attribute by ratio
	//it compare width and height to deside use what to fit the ratio ,intend to make the element can fit the parentdiv ,not to extent out
	//this function also return args object which can be easilly reused by other construct function ,or put to handle model changes
	var ihandlemodel=iElementlist.get(id);
	var common=ihandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var args={};
	if(ratio>1||ratio==1){//that means the image width>height
		args.iWidth=commonattr.iWidth;
		args.iHeight=parseInt(args.iWidth/ratio);
	}
	else{
		args.iHeight=commonattr.iHeight;
		args.iWidth=parseInt(args.iHeight*ratio);
	}
	return args;
}
function model_setcommonbyargs(id){//to set this function is simplify the common set operations ,single pass the args can make common change easily

}
function model_adjustcommon(id){//sometimes the model common value has changed by some instances or actions that can't not  be pre checked
	//by any other functions ,like border change ,image enlarge ,or user handle ,
	//but we can use this function to force the coordinate value to be correct 
	//this correct operation is not force back to its original value as model_commonchange ,but adjust the value to make it correct
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var iParentdiv=div_find(iHandlemodel.get('iParentdiv'));
	var bordervalue=model_border_value(id);
	var checkresult=advancedcoordinationcheck(id,commonattr);
	var args=_.clone(commonattr);
	if(checkresult.left) args.iStartx=0;
	if(checkresult.top) args.iStarty=0;
	if(checkresult.right) args.iWidth=iParentdiv.width()-bordervalue.right-bordervalue.left;
	if(checkresult.bottom) args.iHeight=iParentdiv.height()-bordervalue.top-bordervalue.bottom;
	if(checkresult.left||checkresult.top||checkresult.right||checkresult.bottom){
		var newcommon=model_constructcommonbyargs(id,args)
		iHandlemodel.set('iCommon',newcommon);
		iHandlemodel.trigger('change:div');
		iHandlemodel.trigger('change:form');
		return true;//true means ajust happen
	}
	else return false;
}
function model_fatchall(url,id){//there serveral varibles needed for this function 
	//the url ,that means the url which the ajax json fatch use to get the data
	//id , point to the model for render this data
	var iHandlemodel=iElementlist.get(id);
	if(!url) url=hosturl+'overlayall.json';
	$.getJSON(url, function(data) {
		iHandlemodel.trigger('afterfatchall',data);
	})
}
function model_render(id,data){//this is a very useful function which render the data fatch by fatchall function which get all the model back at once 
	//a recrusive function called to add all the items to the collections and render all the elements 
	var iHandlemodel=iElementlist.get(id);
	_.each(data,function(model){
		if(model['suboverlay']){
			var suboverlay=model['suboverlay'];
			delete model['suboverlay'];
		}	
		model.iParent=iHandlemodel.id;
		if(!iHandlemodel.icollection.get(model.id)) iHandlemodel.icollection.add(new interaction.model[model.iType](model));
		if(suboverlay) model_render(model.id,suboverlay);
	})
	iHandlemodel.trigger('afterfatchchild');//when this fatch finish ,the callback are equal to the function model_fatchchild finish 
}
function model_init(id){//throught id to find the model ,and use this model.icollection to fatch all the models within it 
		var iHandlemodel=iElementlist.get(id);
		iHandlemodel.icollection.reset([],{silent: true});//empty the collection
		iHandlemodel.icollection.fetch({
				success:function(){
					//derectivechecklist.push(imodel.id);
					dom_update(iHandlemodel);
					iHandlemodel.trigger('afterfatchchild');//for handle when init loading finished 
				},
				error:function(){
				}
		});
}
function model_create(model,args){
	model.save(
		{},
		{
			wait:true,
			success: function(model,response){
				returned=eval(response);
				if(returned.Status=="Success"){
					model.set('id',returned.ID.toString());//set the new model id
					//derectivechecklist=['add'];
					model.createhandle(returned);
					if(args&&args.end) args.end();
				}
				else{
					model_error({
						method:'create',
						status:returned.Status,
						msg:returned.Message,
						model:model
					})
				}
			},
			error: function(){ 
				model_error({
					method:'create',
					status:'ServerError',
					msg:'server error or server is not available now,please try again!',
					model:model
				})
			} 
		}
	);
}
function model_update(id){
	var ihandlemodel=iElementlist.get(id);
	ihandlemodel.save(
		{},
		{
			wait:true,
			success: function(model,response){
				returned=eval(response);
				if(returned.Status=="Success"){
					//derectivechecklist.push(id);
					model.trigger('updatesuccess');
				}
				else{
					model_error({
						method:'update',
						status:returned.Status,
						msg:returned.Message,
						id:id
					})
				}
			},
			error: function(){ 
				model_error({
					method:'update',
					status:'ServerError',
					msg:'server error or server is not available now,please try again!',
					id:id
				})
			} 
		}
	);
}
function model_removeconfirm(id){
	if(removeconfirm()){
		var iHandleModel=iElementlist.get(id);
		iHandleModel.trigger('removemodel');
	}
}
function model_error(args){
	if(args.status=='ServerError'){
		alert(args.msg);
		jqwait_simple_close();
		return args.method;
	}
	switch(args.method){
		case 'create':{
			alert(args.msg);
			jqwait_simple_close();
			break;
		}
		case 'update':{
			if(args.status=='VerifyError'){
				alert(args.msg);
			}
			else if(args.status=='NonExistError'){
				alert(args.msg);
				var ihandlemodel=iElementlist.get(args.id);
				ihandlemodel.trigger('updateerror',args);
			}
			break;
		}
		case 'remove':{
			if(args.status=='VerifyError'){
				alert(args.msg);
				jqwait_simple_close();
			}
			else if(args.status=='NonExistError'){
				alert(args.msg);
				var ihandlemodel=iElementlist.get(args.id);
				ihandelmodel.trigger('removeerror',args);
				jqwait_simple_close();
			}
			break;
		}
	}

}
function model_ratiofixxed(id){//this function is use to estimate the state of model ratiofixxed attribute
	var iHandlemodel=iElementlist.get(id);
	if(iHandlemodel.get('ratiofixxed')) return true;
	else return false;
}
function model_ratiofixset(id){//this function is use to set the state of model ratiofixxed attribute
	//attention: ratiofixxed is used for focused element ,becasue it's always action width keyscontrol or input handle 
	//that are only take action to focused item ,so make the global varible to handle it 
	var iHandlemodel=iElementlist.get(id);
	iHandlemodel.set('ratiofixxed',true);
}
function model_ratiofixreset(id){
	var iHandlemodel=iElementlist.get(id);
	iHandlemodel.set('ratiofixxed',false);
}
function model_border_value(id){//return the border value of the element
	var iHandlediv=div_find(id);
	var borderleftwidth=parseInt(iHandlediv.css('borderLeftWidth'));
	var borderrightwidth=parseInt(iHandlediv.css('borderRightWidth'));
	var bordertopwidth=parseInt(iHandlediv.css('borderTopWidth'));
	var borderbottomwidth=parseInt(iHandlediv.css('borderBottomWidth'));
	return {top:bordertopwidth,right:borderrightwidth,bottom:borderbottomwidth,left:borderleftwidth};
}
function model_confirm(id){//this function is called by confirm button or by some events that need to confirm the object
	var iHandlemodel=iElementlist.get(id);
	if(elementfocus==true&&iHandlemodel){
			iHandlemodel.trigger('confirm');//pass confirm change to the model
	}
}
function model_getratio(id){
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var ratio=parseInt(common[iPageDirection].iWidth/common[iPageDirection].iHeight*100);
	return parseFloat(ratio/100);
}

/* @end */


/* for element(div)  
//so this is the function for element or say div ,because the element are all use div tags and find using div_find
//content all the base function to handle the element
//including div_find , settop, etc
*/
function div_find(id){//throught id to find the Div object 
	return $('div.element[id="'+id+'"]');
}
function div_hide_itype_field(id){
	var iHandlediv=iElementlist.get(id);
	iHandlediv.children('span.iType').hide();
}
function div_hidebuttons(id){//hide the control and content button when needed 
	var iHandlediv=div_find(id);
	iHandlediv.children('span#control').addClass('hidden');
}
function div_showbuttons(id){
	var iHandlediv=div_find(id);
	iHandlediv.children('span#control').removeClass('hidden');
}
function div_create_sitebutton(id){//these are the button control for whole site

}
function div_remove_sitebutton(id){
}
function div_removecontrolbutton(id){//this function called when the control button need to be removed 
	iHandlediv=div_find(id);
	iHandlediv.children("span#control").remove();
}
function div_createfoldercontentfield(id){
	var iHandlediv=div_find(id);
	iHandlediv.append('<span class="iFoldercontent component" style="height:100%;width:100%;"><h3><a>plonejsfolder</a></h3><div><ul></ul></div></span>');
	iHandlediv.children('.iFoldercontent').accordion({
		    fillSpace:true
    })
}
function div_createnavfield(id){
	var iHandlediv=div_find(id);
	iHandlediv.append('<span class="iNavfield component" style="height:100%;width:100%;"></span>');
}
function div_createstylefield(id){//sometimes wo want to set some background field or border fields to display the effect ,we use this function
	var iHandlediv=div_find(id);
	iHandlediv.append('<span class="iStylefield component"></span>');
}
function div_createimagefield(id){
	var iHandlediv=div_find(id);
	iHandlediv.append('<span id="imagefield" class="iImagefield component"></span>');
}
function div_createelementshade(id){
	var iHandlediv=div_find(id);
	iHandlediv.append('<span id="shade" class="iShade component"></span>')
}
function div_create_icon_buttons(id,Ulspan,buttonname,buttonimg,createtype){
	//for which div by div_find
	//and the span field to create the button
	//the buttonname of the button 
	//the img which the button will display 
	//createtype specific,if it's a content create button 
	var iHandlediv=div_find(id);
	var iCreatespan=iHandlediv.children(Ulspan);
	iCreatespan.append('<button id="'+buttonname+'" title="'+createtype+'" onclick="model_new(\''+id+'\',\''+createtype+'\')">'+createtype+'</button>');
	$( "button#"+buttonname).button({
		text: false,
		icons: {
			primary: buttonimg
		}
	})
}
function div_createcontentbutton(id,args){//this is a custom function which use to create content button
 // how to define the buttons ,that must be customed
}
function div_createcontrolbutton(id,args){
// what button to set the control area need to be customed
	var iHandlediv=div_find(id);
	iHandlediv.append('<span id="control" class="iControl component"><button id="confirm"><i class="icon-ok"></i></button><button id="remove">remove</button></span>');
	$( "button#confirm" ).button({
		text: false,
		icons: {
			primary: "ui-icon-check"
		}
	})
	$( "button#remove" ).button({
		text: false,
		icons: {
			primary: "ui-icon-trash"
		}
	})
}
function div_createtextfield(id){
	var iHandlediv=div_find(id);
	$('<div class="iTextfield component"></div>').insertBefore(iHandlediv.children('.iShade'));
}
function div_createtypefield(id,type){
	var iHandlediv=div_find(id);
	iHandlediv.append("<span id='"+id+"' class='iType component'><a id='iLock' class='lock'></a><a id='iType'>"+type+"</span>");
}
function div_createaddDiv(id,type){ //the func for create div element 
	var iHandlemodel=iElementlist.get(id);
	var parentdiv=div_find(iHandlemodel.get('iParentdiv'));
	if(iHandlemodel.get('iParentdiv')=='body') parentdiv=$('body');
	parentdiv.append("<div data-id='"+id+"' class='new element "+type+"'></div>");
	currentDiv=$('div.new.element');
	currentDiv.removeClass("new");
	currentDiv.css("position",'absolute');
	currentDiv.append('<input type="hidden" name="divid" id="divid" class="divid" value="'+id+'">');//create a id hidden field which can be used for div find
	div_createtypefield(id,type);
	div_createimagefield(id);
	div_createelementshade(id);
}
function div_removediv(id){//this function action to remove the specific div element
	var iHandlediv=div_find(id);
	iHandlediv.remove();
}
function div_resetdiv(id){//reset the element size by id
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var iHandlediv=div_find(id);
	iHandlediv.width(commonattr.iWidth);
	iHandlediv.height(commonattr.iHeight);
    iHandlediv.css("left",commonattr.iStartx);
    iHandlediv.css("top",commonattr.iStarty);
}
function div_resetdivwidthheight(id){//this div set only change the width and height of the div ,not including the x y coordinates
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var iHandlediv=div_find(id);
	iHandlediv.width(commonattr.iWidth);
	iHandlediv.height(commonattr.iHeight);
}
function div_resetdivxy(id){//this reset only change x y coordinates of the element
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var iHandlediv=div_find(id);
    iHandlediv.css("left",commonattr.iStartx);
    iHandlediv.css("top",commonattr.iStarty);
}
function div_resetimage(id){
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var iHandlediv=div_find(id);
	iHandlediv.children('span#imagefield').children('img').width(commonattr.iWidth);
	iHandlediv.children('span#imagefield').children('img').height(commonattr.iHeight);
}
function div_resettext(id){
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var iHandlediv=div_find(id);
	iHandlediv.children('div.iTextfield').width(commonattr.iWidth);
	iHandlediv.children('div.iTextfield').height(commonattr.iHeight);
}
function div_resetshade(id){//why use -2 ,because the shade has a border which contain 2 px width and 2 px height , we should count it
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var iHandlediv=div_find(id);
	iHandlediv.children('span.iShade').width(commonattr.iWidth-2);
	iHandlediv.children('span.iShade').height(commonattr.iHeight-2);
}
function div_resetstylefield(id){
	var iHandlemodel=iElementlist.get(id);
	var common=iHandlemodel.get('iCommon');
	var commonattr=common[iPageDirection];
	var iHandlediv=div_find(id);
	iHandlediv.children('span.iStylefield').width(commonattr.iWidth-2);
	iHandlediv.children('span.iStylefield').height(commonattr.iHeight-2);
}

function div_imagesizechoose(id){//this function use to automatically choose the proper size image for display in the imagefield
	var iHandlemodel=iElementlist.get(id);
	var args=iHandlemodel.get('iCommon')[iPageDirection];
    if(args.iWidth<=16&&args.iHeight<=16) return '/image_listing';
	if(args.iWidth<=32&&args.iHeight<=32) return '/image_icon';
	if(args.iWidth<=64&&args.iHeight<=64) return '/image_tile';
	if(args.iWidth<=128&&args.iHeight<=128) return '/image_thumb';
	if(args.iWidth<=200&&args.iHeight<=200) return '/image_mini';
	if(args.iWidth<=400&&args.iHeight<=400) return '/image_preview';
	if(args.iWidth<=768&&args.iHeight<=768) return '/image_large';
	return '/image';
}
/* end for div */

/* for attributes 
* the attributes are info related to the model element 
* but some times we want to add some dynamic control or content ,so add these functions to handle these operations
*/
function attributes_add_items(id,attrname,items,options){
	var type="checkbox";
	if(options){//set attributes options ,if options offered
		if(options.type) type=options.type;
	}
	var iHandlemodel=iElementlist.get(id);
	_.each(items,function(item){
		var title=model_gettitlebyid(item);
		$('div#info_attributes ul.'+attrname).append('\
			<li  id=\"'+item+'\" class=\"dom_item attributes_item db clear\">\
				<span class="fl"><input type="'+type+'" name="'+attrname+'" value="'+item+'"></span>\
				<span class="fl">\
						<a id=\"'+item+'\" class=\"dom_move\">\
								<img src=\"n\/i_move.png\" class="vm"><\/a>\
				</span>\
				<span class="fl attributes_item_name">\
										'+title+'<\/span>\
				<span id=\"elementaction\" class="fr">\
						<a id=\"'+item+'\" class=\"dom_visibility\"><img src=\"n/i_visibility.png\" class="vm"><\/a>\
						<a id=\"remove\" onclick=\"model_removeconfirm(\''+item+'\')\">\
							<img class="vm" src=\"n/i_removeelement.png\"><\/a>\
				<\/span><\/li>');
	})
}
function attributes_items_update(id,o_itemlist,n_itemlist){//automatically update the attributes items when dynamic system has changed
	var iHandlemodel=iElementlist.get(id);
	if(!_.isArray(o_itemlist)) o_itemlist=Array(o_itemlist);
	var difference=_.difference(o_itemlist,n_itemlist);//get the noExist items
	var itemlist=_.reject(o_itemlist,function(item){
		return _.include(difference,item);
	});//reconstruct the itemlist without the nonexist items
	if(!isEmpty(difference)) {
		var remove=true;
	}
	var displaylist=_.clone(itemlist);
	difference=_.difference(itemlist,n_itemlist);//to judge if new item added
	if(!isEmpty(difference)) var add=true;
	itemlist=_.union(itemlist,n_itemlist);
	return {itemlist:itemlist,add:add,remove:remove,displaylist:displaylist};
}
/*@ end */

/* for dom 
//what is dom ,dom is the field to store the element list info, which you can sort ,select , remove ,or handle it from the 
// dom list , instead of handle the element from the screen , it can easilly view all the list ,
//the dom give another useful method to handle all the element ,and it can be customed 
*/
function dom_find(id){//this function is similar to the div finder ,from which to find the dom item by id
	var querydiv;
	$('div#info_dom .dom_item').each(function(){
		if($(this).attr('id')==id) {
			querydiv=$(this);
		}
	})
	return querydiv;
}
function dom_field_focus(id){//this function set for dom_field focus ,when a folder layout or overlay is focused ,the field will set focus too
	$('div#info_dom .accordion h3').each(function(){
		if($(this).attr('id')==id) {
			$('div#info_dom .accordion').accordion('activate',false);//close all active
			$('div#info_dom .accordion .dom_field').css('display','none');
			$('div#info_dom .accordion').accordion('activate',$(this));//then open current field
			$('div#info_dom .accordion .dom_field').css('height','auto');
			//$(this).children('a').trigger('click');
		}
	})
}
function dom_createfield(id){
	var iHandlemodel=iElementlist.get(id);
	var iType=iHandlemodel.get('iType');
	var has_dom=false;
	$('div#info_dom .accordion .dom_field').each(function(){
		if($(this).attr('id')==id) has_dom=true;
	})
	if(has_dom==false){
		$('div#info_dom .accordion').append('\
			<div class="group">\
				<h3 id="'+id+'"><a href="#">'+iType+'</a></h3>\
				<ul id="'+id+'" class="dom_field"></div>\
			</div>\
		');
	}
	$('div#info_dom .accordion').accordion('destroy').accordion({collapsible:true,autoheight:false,clearstyle:true,header: "h3" });
	$('div#info_dom .accordion .dom_field').css('height','auto');
}
function dom_removefield(id){
	$('div#info_dom .accordion .dom_field').each(function(){
		if($(this).attr('id')==id) $(this).parent().remove();
	})
}
function dom_createinfo(parentid,id,type){
	$('div#info_dom .accordion .dom_field').each(function(){
		if($(this).attr('id')==parentid){
			$(this).append('<li  id=\"'+id+'\" class=\"dom_item db clear '+type+'\">\
								<span class="fl">\
									<a id=\"'+id+'\" class=\"dom_move\">\
									<img src=\"n\/i_move.png\" class="vm"><\/a>\
								</span>\
								<span class="fl dom_name">\
										'+type+'<\/span>\
								<span id=\"elementaction\" class="fr">\
									<a id=\"'+id+'\" class=\"dom_visibility\"><img src=\"n/i_visibility.png\" class="vm"><\/a>\
									<a id=\"remove\" onclick=\"model_removeconfirm(\''+id+'\')\"><img class="vm" src=\"n/i_removeelement.png\"><\/a><\/span><\/li>');
			$('div#info_dom .accordion').accordion( "option", "autoHeight", false );
		}
	})
}
function dom_removeinfo(parentid,id){
	$('div#info_dom .accordion .dom_item').each(function(){
		if($(this).attr('id')==id){
			$(this).remove();
		}
	})
	$('div#info_attributes .items .dom_item').each(function(){
		if($(this).attr('id')==id){
			$(this).remove();
		}
	})
}
function dom_updatename(id,domname){//use title or id to update the dom's name ,which can easily recognized by user
	$('div#info_dom .accordion h3').each(function(){
		if($(this).attr('id')==id) $(this).children('a').html(domname);
	})
	$('div#info_dom .accordion li.dom_item').each(function(){
		if($(this).attr('id')==id) $(this).children('span.dom_name').html(domname);
	})
}
function dom_update(imodel){ //for dom update when sort happen,not use now
	$('ul.dom').each(function(){
		if($(this).attr('id')==imodel.id){
			$(this).empty();			
			_.map(imodel.icollection.models,function(model){
				dom_createinfo(imodel.id,model.id,model.get('iType'));
			})
		}
	})
}
/* @end */

/* for form | info 
//the form area is the attribute display and modify or set area
// from which you can change the element infomations or images display
// and the from area can also set the common position of the element by input
*/
function info_window_create(){
	$('div.info_window').dialog({
			position:['right',55],
			create:function(event, ui){
				info_window_tabs();
				$('.info_window_dialog .ui-dialog-titlebar').bind('dblclick',function(){
					$('.info_window').toggle('fold');
					$('.info_window_dialog .ui-dialog-buttonpane').toggleClass('hidden');
					$('.info_window_dialog').css('height','auto');//fixxed the problem when the window resize;
				})
				$('.info_window_dialog').addClass('iShadow');
				$('.info_window').show('fold',1000);
				$('.info_window').removeClass('hidden');
			},
			open:function(event,ui){
				//iCurrentModel.trigger('resources_open');
			},
			autoOpen: true ,
			minWidth:250,
			width:250,
			minHeight:400,
			height:500,
			zIndex:3999,
			dialogClass:'info_window_dialog plonejs_window plonejs_window_noclose'
	});
}
function info_window_tabs(){
	$('div.info_window_tabs').tabs();
}
function info_fillattributes(id){//before fill an attributes , the attributes area should be clear
	var iHandlemodel=iElementlist.get(id);
	common=iHandlemodel.get('iCommon')[iPageDirection];
	detail=iHandlemodel.get('iDetail');
	for (attr in common)
	{
		 $('div#info_attributes [name='+attr+']').val(common[attr]);
	}
	for (attr in detail)
	{
		var type=gettypebyname('div#info_attributes',attr);
		if(type=='select'){
			$('div#info_attributes [name='+attr+']').val(detail[attr]);
			changesection(attr,detail[attr]);//for select ,we should set some select change function
		}
		else if(type=='radio'){
			$('div#info_attributes [name='+attr+'][value='+detail[attr]+']').attr('checked',true);
		}
		else if(type=='checkbox'){//for the checkbox ,there is something difficult , because there maybe one value or maybe an array list
			if(_.isArray(detail[attr])) $('div#info_attributes [name='+attr+']').val(detail[attr]);
			else $('div#info_attributes [name='+attr+']').val([detail[attr]]);
		}
		else $('div#info_attributes [name='+attr+']').val(detail[attr]);
	}
}
function info_resetdom(id){
	$('div#info_dom').children('.accordion').empty();
}
function info_addresources_mutiple(imgArray,imgplus){
	for(img in imgArray )
	{
		$('div#info_resources').append('<li id=\"'+imgArray[img]+'\" class="imglist_item"><span id="imglist_move"><img src=\"n\/i_move.png\"><\/span>\
								  <span id="imglist_img"><img class=\"imglist_img\" src=\"'+imgArray[img]+imgplus+'\"><\/span>\
								  <span><span id="imglist_name">'+imgArray[img].substr(imgArray[img].lastIndexOf('/')+1)+'<\/span>\
								  <span id="imglist_action">\
									  <a id="imglist_file"><img src="n\/i_file.png"><\/a>\
									  <a id="imglist_info"><img src="n\/i_edit.png"><\/a>\
									  <a id="imglist_change"><img src="n\/i_refresh.png"><\/a>\
									  <a id="imglist_remove"><img src="n\/i_removeelement.png"><\/a>\
								   <\/span></span><\/li>\
								  ');
	}
}
function info_addresources_single(resource,imgplus){
	$('div#info_resources').append('<li id=\"'+resource+'\" class="imglist_item"><span id="imglist_move"><img src=\"n\/i_move.png\"><\/span>\
							  <span id="imglist_img"><img class=\"imglist_img\" src=\"'+resource+imgplus+'\"><\/span>\
							  <span><span id="imglist_name">'+resource.substr(resource.lastIndexOf('/')+1)+'<\/span>\
							  <span id="imglist_action">\
								  <a id="imglist_file"><img src="n\/i_file.png"><\/a>\
								  <a id="imglist_info"><img src="n\/i_edit.png"><\/a>\
								  <a id="imglist_change"><img src="n\/i_refresh.png"><\/a>\
								  <a id="imglist_remove"><img src="n\/i_removeelement.png"><\/a>\
							   <\/span></span><\/li>\
							  ');
}
function info_loadresources(id,single){
	var ihandlemodel=iElementlist.get(id);
	if(isEmpty(ihandlemodel)==false){
		var imgArray=ihandlemodel.get('iDetail').iImglist||'';
		if(!isEmpty(imgArray)){
			info_resetresources();
			info_addresources_mutiple(imgArray,'/image_thumb');
		}
		else{
			info_resetresources();
		}
	}
}
function info_unbindattributes_input(id){
		$('div#info_attributes input').each(function(){
			$(this).unbind('change');
		});
		$('div#info_attributes select').each(function(){
			$(this).unbind('change');
		});
}
function info_focustab(tabid){
	$('div.info_window_tabs').tabs('select',tabid);
}
function info_settext(id){
	text_window_open();
	//popup_create_textarea_popup(id,'iText_area');
}
/* @end */

/* for buttons window 
* the button window represent a set of controls for element 
*/
function buttons_window_create(){
	$('body').append('<div class=\"buttons_window tc\"><\/div>');
	$('div.buttons_window').dialog({
			position:[50,20],
			create:function(event, ui){
				$('.buttons_window_dialog .ui-dialog-titlebar').bind('dblclick',function(){
					$('.buttons_window').toggle('fold');
					$('.buttons_window_dialog .ui-dialog-buttonpane').toggleClass('hidden');
					$('.buttons_window_dialog').css('height','auto');//fixxed the problem when the window resize;
				})
				$('.buttons_window_dialog').addClass('iShadow');
				buttons_actions();
			},
			open:function(event,ui){
				$('div.buttons_window').dialog( "option", "position", [50,20] );
			},
			autoOpen: false,
			minWidth:40,
			width:40,
			minHeight:60,
			height:300,
			zIndex:3999,
			dialogClass:'buttons_window_dialog plonejs_window plonejs_window_noclose'
	});
}
function buttons_create_buttons(buttons){
	_.each(buttons,function(button){
		if(button['type']=='icon'){
			$('div.buttons_window').append('<button title="'+button['title']+'" class="icon_button '+button['classname']+'">'+button['classname']+'</button>').children('.'+button['classname']).button({
				text: false,
				icons: {
					primary: button['icon']
				}
			});
		}
		if(button['type']=='text'){
			$('div.buttons_window').append('<button title="'+button['title']+'" class="text_button '+button['classname']+'">'+button['text']+'</button>').children('.'+button['classname']).button();
		}
	})
}
function buttons_actions(){
//custom area 
}
/* @end */

/* for resource window */
function resources_window_close(){
	$('div.resources_window').dialog('close');//close the img choose window
}
function resources_window_getresources(url){//this resources function use to get resources from server 
	ajax_get($('div.resources_window'),url,'',function(){
		derectivechecklist.push('imgwindow');
		resources_window_setuploadbutton();
	})
}
function resources_window_update(id,url,resources_type){
	ajax_get($('div.#resource_right'),url,'',function(){
		resources_window_imgpreview();
		resources_window_setuploadbutton(id,'',resources_type);
	})
}
function resources_window_setuploadbutton(id,url,data){
	if(!url) url=$('[name=uploadUrl]').val();//using global set
	if(!data) data=uploaddata;//same as above
	var UIDiv=$('.uploaderContainer');
	var iHandlemodel=iElementlist.get(id);
	ajax_get(UIDiv,url,data,function(){
		iHandlemodel.trigger('resources_updatesuccess');
	});
}
function resources_window_create(){//initial create the resources window for upload and choose
	$('div.resources_window').dialog({
			position:'center',
			create:function(event, ui){
				$('.resources_window_dialog').addClass('iShadow');
			},
			open:function(event,ui){
				iCurrentModel.trigger('resources_open');
			},
			autoOpen: false ,
			minWidth:580,
			maxHeight:600,
			zIndex:3999,
			dialogClass:'resources_window_dialog plonejs_window plonejs_window_close'
	});
}
function resources_window_open(){
	$('div.resources_window').dialog("open");
}
function resources_window_checkeditems(resourcestype){
	$('[name=imgitems]').val(['']);
	if(isEmpty(iCurrentModel)==false){
		if(resourcestype=='iIcon'){
			if(isEmpty(iCurrentModel.get('iDetail').iIconlist)==false){
				$('[name=imgitems]').val([iCurrentModel.get('iDetail').iIconlist]);
			}
		}
		if(resourcestype=='iImg'){
			if(isEmpty(iCurrentModel.get('iDetail').iImglist)==false){
				$('[name=imgitems]').val(iCurrentModel.get('iDetail').iImglist);
			}
		}
	}
}
function resources_window_setbutton(resourcestype){
	$('div.resources_window').dialog("option", "buttons", {
		"save":function(){
			var imgArray=getcheckedlist('imgitems');
			iCurrentModel.trigger('resources_save',resourcestype,imgArray);
		},
		"cancel":function(){
			$(this).dialog('close');
		}
	});
}

 function addPage(id,title){// add upload image
	 var timestamp = Date.parse(new Date());
	 var imgurl=$('[name=imgUrl]').val();
	 $("#resource_list").append("<li class=\"resource_items fl\" >\
							  <div id=\""+id+"\" class=\"resource_item fl\">\
								<a title=\""+title+"\" id=\""+id+"\" href=\""+imgurl+"\/" + id + "\/image\"><img src=\""+imgurl+"\/" + id + "\/image_thumb?"+timestamp+"\"><\/a><\/div>\
							  <div id=\""+id+"\" class=\"resource_title fl\">\
								<a title=\""+title+"\" id=\""+id+"\">"+title+"<\/a><\/div>\
							  <div class=\"resource_check fr\">\
								<input type=\"checkbox\" name=\"imgitems\" id=\"" + id + "\" value=\""+imgurl+"\/" + id + "\" alt=\"" + id + "\" title=\"" + title + "\"><\/div>\
	 <\/li>");
	resources_window_imgpreview();
}
function resources_window_imgpreview(){
	$('.resource_item a').fancybox({type:'image'});
}
/* @end*/

/* for colorpick */
function set_colorpick(id){
	var iHandlemodel=iElementlist.get(id);
	$('.colorpick').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
			var attrname=$(el).attr('name');
			var attrvalue=$(el).val();
			iHandlemodel.trigger('change:model',attrname,attrvalue);
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		}
	})
	.bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
	});
}
function reset_colorpick(id){
	$('div.colorpicker').remove();
}
/* @end */

/* for text */
function text_window_open(){
	$('div.text_window').dialog('open');
}
function text_window_close(){
	$('div.text_window').dialog('close');
}
function text_window_create(){
	$('body').append('<div class=\"text_window\"><textarea class="text_window_area" style="width:500px;"></textarea></div>');
	$('div.text_window').dialog({
			position:'center',
			create:function(event, ui){
				text_window_loadtinymce();
				$('.text_window_dialog').addClass('iShadow');
			},
			open:function(event,ui){
				//iCurrentModel.trigger('text_open');
			},
			autoOpen: false ,
			width:500,
			minWidth:500,
			maxWidth:500,
			zIndex:3999,
			dialogClass:'text_window_dialog plonejs_window plonejs_window_close'
	});
}
function text_window_setbutton(texttype){
	$('div.text_window').dialog("option", "buttons", {
		"save":function(){
			var textval=$('.text_window_area').html();
			iCurrentModel.trigger('text_save',texttype,textval);
		},
		"cancel":function(){
			$(this).dialog('close');
		}
	});
}
function text_window_loadtext(id,texttype){
	iHandlemodel=iElementlist.get(id);
	Detail=iHandlemodel.get('iDetail');
	$('.text_window_area').html(Detail[texttype]);
}
function text_window_loadtinymce(){
	$('textarea.text_window_area').tinymce({
        script_url : hosturl+'tiny_mce/tiny_mce.js',
        mode : 'textareas',
		theme : "advanced",
		plugins : "autolink,table,inlinepopups,searchreplace,fullscreen,visualchars,wordcount",

		// Theme options
		theme_advanced_buttons1 : "newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,formatselect,fontselect,fontsizeselect",
		theme_advanced_buttons2 : "search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,|,forecolor,backcolor,|,hr,removeformat,visualaid",
		theme_advanced_buttons3 : "tablecontrols,|,sub,sup,|,charmap,iespell,|,ltr,rtl,|,fullscreen",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		theme_advanced_source_editor_width : 550,
		theme_advanced_resizing : true,
		theme_advanced_resize_horizontal : false,
		content_css : "tiny_mce/content.css",
		formats : {
			alignleft : {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'left'},
			aligncenter : {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'center'},
			alignright : {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'right'},
			alignfull : {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'full'},
			bold : {inline : 'span', 'classes' : 'bold'},
			italic : {inline : 'span', 'classes' : 'italic'},
			underline : {inline : 'span', 'classes' : 'underline', exact : true},
			strikethrough : {inline : 'del'}
		}
	});
}
/* tinymce control */
function myCustomOnInit() {
	$('table.mceLayout').css('width','100%');
	$('table.mceLayout').css('height','100%');
	$('table.mceLayout').css('background','transparent');
	$('table.mceLayout').children('tbody').children('tr.last').css('position','absolute');
	$('table.mceLayout').children('tbody').children('tr.last').css('background','#FFFFFF');
	$('table.mceLayout').children('tbody').children('tr.last').css('top','-50px');
	$('table.mceLayout').children('tbody').children('tr.mceLast').css('position','absolute');
	$('table.mceLayout').children('tbody').children('tr.mceLast').css('background','#FFFFFF');
	$('table.mceLayout').children('tbody').children('tr.mceLast').css('top','-50px');
	$('table.mceLayout iframe').css('height','100%');
	$('table.mceLayout iframe').css('background','transparent');
	iCurrentModel.iview.resettinymcefield();
}
function text_tinymce_init(){
	tinyMCE.init({
        mode : "none",
		theme : "advanced",
		content_css : "tiny_mce/content.css",
		init_instance_callback : myCustomOnInit,
		theme_advanced_buttons1 : "fontselect,fontsizeselect,|,bold,italic,underline,strikethrough,|,undo,redo,|,bullist,numlist,|,forecolor",
		theme_advanced_buttons2 :"",
		theme_advanced_buttons3 :""
    });
}
function text_tinymce_load(id){
	var iHandlediv=div_find(id);
	var textareaid=iHandlediv.children('div.iTextfield').attr('id');
	tinyMCE.execCommand('mceAddControl',false, textareaid);
}
function text_tinymce_save(id){
	var iHandlediv=div_find(id);
	var textareaid=iHandlediv.children('div.iTextfield').attr('id');
	var textval = tinyMCE.getInstanceById(textareaid).getBody().innerHTML;
	var iHandlemodel=iElementlist.get(id);
	Detail=iHandlemodel.get('iDetail');
	Detail['iText']=textval;
	if (tinyMCE.getInstanceById(textareaid))
	{
		tinyMCE.execCommand('mceFocus', false, textareaid);                    
		tinyMCE.execCommand('mceRemoveControl', false, textareaid);
	}
}
/* @end */

/* for validate func */
function isNumeric(input){
	return typeof(parseInt(input))=='number'&&parseInt(input)==input;
}
function coordinationcheckinfo(common){
	return coordinationcheck(common.iStartx,common.iStarty,common.iWidth,common.iHeight);
}
function div_check(id,startx,starty,width,height){//a new position check which is specific for model by id 
	numcheck=isNumeric(width)&&isNumeric(height)&&isNumeric(startx)&&isNumeric(starty);
	if(numcheck==false){return errormessage.numbererror;}
	coordcheck=coordinationcheck(id,parseInt(startx),parseInt(starty),parseInt(width),parseInt(height));
	if(coordcheck!='ok'){return errormessage.positionerror;}
	return '1';
}
function coordinationcheckbyargs(id,args){//sometimes you don't have to provide detail attributes ,but an args object indeed
	return coordinationcheck(id,args.iStartx,args.iStarty,args.iWidth,args.iHeight);
}
function coordinationcheck(id,x,y,width,height){
	var iHandlemodel=iElementlist.get(id);
	var iParentdiv=div_find(iHandlemodel.get('iParentdiv'));
	var bordervalue=model_border_value(id);
	if(iHandlemodel.get('iParentdiv')=='body') return 'ok';//optimised for body,because body can be no limited 
	if(x<0||y<0||width<0||height<0){
		if(x<0) return 'xleftout';
		if(y<0) return 'ytopout';
	}
	else if((x+width+bordervalue.left+bordervalue.right)>iParentdiv.width()||(y+height+bordervalue.top+bordervalue.bottom)>iParentdiv.height()){
		if((x+width)>iParentdiv.width()) return 'xrightout';
		if((y+height)>iParentdiv.height()) return 'ybottomout';
	}
	else return 'ok';
}
function advancedcoordinationcheck(id,args){
	var iHandlemodel=iElementlist.get(id);
	var iParentdiv=div_find(iHandlemodel.get('iParentdiv'));
	var bordervalue=model_border_value(id);
	var checkresult={left:false,right:false,top:false,bottom:false};
	if(iHandlemodel.get('iParentdiv')=='body') return checkresult;//optimised for body,because body can be no limited 
	if(args.iStartx<0) checkresult.left=true;
	if(args.iStarty<0) checkresult.top=true;
	if((args.iStartx+bordervalue.left+bordervalue.right+args.iWidth)>iParentdiv.width()) checkresult.right=true;
	if((args.iStarty+bordervalue.top+bordervalue.bottom+args.iHeight)>iParentdiv.height()) checkresult.bottom=true;
	return checkresult;
}
function isEmpty(item){
	if(item==''||item==null||item==[]||item=={}) return true;
	else return false;
}
function checkimgfield(){
}

/* end of validate func */

/* custom function area */
function popup_create_image_popup(name,imageurl,args){
	if(!args.width) args.width=768;
	if(!args.height) args.height=768;
	$('body').children('div#'+name).remove();//clear original alert ,if exist 
	$('body').append('<div id='+name+'>'+alert_content+'</div>');
	$('body').children('div#'+name).dialog({
			autoOpen: true,
			height: args.height,
			width: args.width,
			modal: true,
			buttons: {
				'confirm':function(){
					$(this).dialog('close');
					$(this).dialog('destroy');
				}
			},
			create:function(event,ui){
			},
			close:function(event,ui){
			},
			dialogClass:'alert_popup',
			draggable:false,
			resizable:false
    })
}
function popup_create_alert_popup(name,alert_content,args){
	if(!args.width) args.width=300;
	if(!args.height) args.height=100;
	$('body').children('div#'+name).remove();//clear original alert ,if exist 
	$('body').append('<div id='+name+'>'+alert_content+'</div>');
	$('body').children('div#'+name).dialog({
			autoOpen: true,
			height: args.height,
			width: args.width,
			modal: true,
			buttons: {
				'confirm':function(){
					$(this).dialog('close');
					$(this).dialog('destroy');
				}
			},
			create:function(event,ui){
			},
			close:function(event,ui){
			},
			dialogClass:'alert_popup',
			draggable:false,
			resizable:false
    })
}
function popup_create_confirm_popup(name,confirm_content,args){
	if(!args.width) args.width=300;
	if(!args.height) args.height=100;
	$('body').children('div#'+name).remove();//clear original alert ,if exist 
	$('body').append('<div id='+name+'>'+confirm_content+'</div>');
	$('body').children('div#'+name).dialog({
			autoOpen: true,
			height: args.height,
			width: args.width,
			modal: true,
			buttons: {
				'confirm':function(){
					$(this).dialog('close');
					$(this).dialog('destroy');
					if(args.func) args.func();
				},
				'cancel':function(){
					$(this).dialog('close');
					$(this).dialog('destroy');
				}
			},
			create:function(event,ui){
			},
			close:function(event,ui){
			},
			dialogClass:'alert_popup',
			draggable:false,
			resizable:false
    })
}
function popup_create_textarea_popup(id,name){
	$('body').children('div#'+name).remove();
	$('body').append('<div id='+name+'></div>');
	$('body').children('div#'+name).append('<form><textarea name='+name+' style="width:450px;height:400px;"></textarea></form>');
	$('body').children('div#'+name).dialog({
			autoOpen: true,
			height: 500,
			width: 500,
			modal: true,
			buttons: {
				"save":function(){
					var detail=iCurrentModel.get('iDetail');
					detail['iText']=$('[name='+name+']').htmlarea('toHtmlString');
					iCurrentModel.set('iDetail',detail);
					$(this).dialog('destroy');
				},
				"close": function(){
					$(this).dialog('destroy');
				}
			},
			create:function(event,ui){
				var detail=iCurrentModel.get('iDetail');
				$('[name='+name+']').val(detail['iText']);
				popup_create_html_textarea(name);
			},
			close:function(event,ui){
				$(this).dialog('destroy');
			},
			dialogClass:'normal'
    })
}
function popup_create_html_textarea(name){
	$('[name='+name+']').htmlarea({
		toolbar: [
			["html","|","bold", "italic", "underline", "|", "orderedlist","unorderedlist","|","forecolor","|","p", "h1", "h2", "h3", "h4", "h5", "h6","|","link", "unlink"]
		],
		css: "jHtmlArea.Editor.css"
	});
}

/* @end */

/* global init */
function init_global_actions(){//this function define the global click actions which will be used globalized
	//use bind/unbind for those always exist items 
	//use live/unlive for those always exist by create new
	//and use delegate to togglur actions is a easy way for a same type of DOM list 
	$('a.text_upload').live('click',function(){
		iCurrentModel.trigger('text_beforeopen',$(this).attr('id'));
	})
	$('.listingBar a').live('click',function(){
		var url=$(this).attr('href');
		ajax_get($('div.#resource_right'),url,'',function(){
			resources_window_imgpreview();
		})
		return false;
	})
}
function init_global_models(){//some models are global models ,will be take actions all entirely the whole site 
}
function init_global_div_selectable(container){//this function initialset the element selectable actions, 
	//when a element selected , the element can be focused or handled 
	$(container).selectable({
		filter: 'span.iType',
		selected: function(event,ui){
			id=$('span.iType.ui-selected').attr('id');
			var ihandlemodel=iElementlist.get(id);
			ihandlemodel.trigger('focus');
		}
	});
}
function init_global_typefield_autohide(){
	$('body').delegate('.iType','mouseover mouseout',function(event,ui){
		id=$(this).attr('id');
		iHandlemodel=iElementlist.get(id);
		if (event.type == 'mouseover') {
			$(this).show();
		} else {
			$(this).hide();
		}
	});
}
function init_global_dom_sortable(){//this function act as a sort initialized function 
	var startposition = -1;
	$("ul.dom_field").sortable({
		handle:'a.dom_move',
		axis:'y',
		items:'li.dom_item',
		start:function(event,ui){
			startposition = ui.item.prevAll().length + 1;
		},
        update: function(event, ui) {
			if(startposition!=-1){
				var delta=(ui.item.prevAll().length + 1)-startposition;
				id=$(ui.item).attr('id');
				var iHandlemodel=iElementlist.get(id);
				iHandlemodel.trigger('dom_sort',delta);
			}
        }		
	});
}
function init_global_items_sortable(){//this sort system is use for attributes dynamic items
	//these items can be use for element control or element display etc.
	var startposition = -1;	
	$("ul.items").sortable({
	    handle:'a.dom_move',
		axis:'y',
		items:'li.attributes_item',
		start:function(event,ui){
			startposition = ui.item.prevAll().length + 1;
		},
        update: function(event, ui) {
			if(startposition!=-1){
				var delta=(ui.item.prevAll().length + 1)-startposition;
				id=$(ui.item).attr('id');
				iCurrentModel.trigger('items_sort',delta);
			}
        }
	});
}
function init_global_user_actions(){
	//$('.user_manage').accordion({
	//		collapsible: true
	//});
}
$(document).ready(function(){
	elementfocus=false;// when a plonejs instance start,there is no element focused initially , or canbe selected further
	init_global_actions();
	init_global_models();
})
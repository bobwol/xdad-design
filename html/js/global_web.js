/* set global func for web */
function set_click_event(target,func){//set click event
	$(target).live('click',func);
}
function cancel_click_event(target,func){
	if(func)
		$(target).die('click',func);
	else
		$(target).die('click');
}
function set_hover_event(target,funcover,funcout){
	$(target).live('mouseover mouseout',function (event){
		if(event.type=='mouseover')
			funcover(event);
	    else 
			funcout(event);
	});	
}
function cancel_hover_event(target){
	$(target).die('mouseover mouseout');
}
function set_change_event(target,func){
	$(target).live('change',func);
}
function fire_event(event){
	$(document).trigger(event);
}
function on_event(event,func){
	$(document).live(event,func);
}
function getUniqueId(prefix,suffix){// get a unique id for client and no repeat in current instance
	if(!prefix) prefix='';
	if(!suffix) suffix='';
	var id=_.uniqueId(prefix);
	id=id+suffix;
	if(iElementlist.get(id))
	{
		id=getUniqueId(prefix,suffix);
	}
	return id;
}
function getRequest(key) {//return the location ref

   var url = location.search; //获取url中"?"符后的字串

   var theRequest = new Object();

   if (url.indexOf("?") != -1) {

      var str = url.substr(1);

      strs = str.split("&");

      for(var i = 0; i < strs.length; i ++) {

         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

      }

   }

   if(key) return theRequest[key];
   else return theRequest;

}
function modal_create(modalname){
	$('body').append(modal_template({name:modalname}));
	$('#'+modalname).modal({show:false});
}
function modal_show(modal){//显示一个Modal窗口
	$(modal).modal('show');
}
function modal_hide(modal){//隐藏一个modal窗口
	$(modal).modal('hide');
}
function compare_value(value1,value2,returned1,returned2){//compare two value and return 
	return (value1==value2)?returned1:returned2;
}
function get_object_key(object){
	var result=[];
	_.map(object,function(value,key){
		result.push(key);
	})
	return result;
}

function get_checkbox_value(target){// return the checkbox value list,these checkbox has the same name
	var checkarray=new Array();
	$(target).each(function(){
            checkarray.push($(this).val());
    })
	return checkarray;
}
function display_message(type,msg){
	$('.msg').html(msg_template({"type":type,"msg":msg}));
	$('.msg').show();
	setTimeout(function(){$('.msg').fadeOut('slow')}, 3000);
}
function datapicker_load(opt){
	if(!opt) opt={};
	$('.date_picker').datepicker(opt);
}
function get_history_back_status(){
	var  flag=false;        
	if (($.browser.msie) || ($.browser.opera)){
		if(history.length>0){
			flag=true;
		}
	}
	else {
		if(window.history.length>1)  {
		 flag=true;
		}
    }
	return flag;
}
function reset_scrollspy(){
    $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
    });
}

function global_categories_load(object_url, selector) {
	var url=object_url+'/getcategories';
	json_load(url,function(d){
		 	console.log(d);
		 	$(selector).html(global_categories_template({"data":d,"object_url":object_url}));
	})

}

function global_set_categories() {

		var checkarray=new Array();
		$('input[name=category]:checked').each(function(){
	            checkarray.push($(this).val());
	    })

		var url=$('input[name=object_url]')[0].value+'/setcategories';
		var data='model='+JSON.stringify(checkarray);

		json_post(url,data,function(d){
		},true);
}
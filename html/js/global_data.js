/* for global data */
$(document).ready(function(){
})
function html_load(url,callback,prompt){
    prompt=error_prompt_standardize(prompt);
    var returned=$.ajax({
        url:url,
        type:"GET",
        data:"",
        dataType:"HTML",
        success:function(data){
            if(jqwait_on) jqwait_simple_close();
            if(prompt.json_success_prompt) display_message('success',data.msg);
            callback(data);
        },
        error:function(){
            if(prompt.server_error_prompt) display_message('error','服务器请求未应答');
            $(document).trigger('server_error');
            if(jqwait_on) jqwait_simple_close();
        }
    })
    return returned;
}
function json_load(url,callback,prompt){
	prompt=error_prompt_standardize(prompt);
	var returned=$.ajax({
		url:url,
		type:"GET",
		data:"",
		dataType:"JSON",
		success:function(data){
			var code=data.code;
			if(code==200){
				var d=data.data;
				if(prompt.json_success_prompt) display_message('success',data.msg);
				callback(d,code);
			}
			else{
				$(document).trigger('json_error',code,data.msg);
				if(prompt.json_error_prompt) error_handle(code,data.msg);
				if(jqwait_on) jqwait_simple_close();
			}
		},
		error:function(){
			if(prompt.server_error_prompt) display_message('error','服务器请求未应答');
			$(document).trigger('server_error');
			if(jqwait_on) jqwait_simple_close();
		}
	})
	return returned;
}
function json_post(url,data,callback,prompt){
	prompt=error_prompt_standardize(prompt);
	$.ajax({
		url:url,
		type:"POST",
		data:data,
		dataType:"JSON",
		success:function(data){
			var code=data.code;
			if(code==200){
				var d=data.data;
				if(prompt.json_success_prompt) display_message('success',data.msg);
				callback(d);
			}
			else{
				$(document).trigger('json_error',code,data.msg);
				if(prompt.json_error_prompt) error_handle(code,data.msg);
				if(jqwait_on) jqwait_simple_close();
			}
		},
		error:function(){
			if(prompt.server_error_prompt) display_message('error','服务器请求未应答');
			$(document).trigger('server_error');
			if(jqwait_on) jqwait_simple_close();
		}
	})
}
/* for model global */
function model_get_attributes(id){
	var iHandlemodel=iElementlist.get(id);
	return iHandlemodel.attributes;
}
function model_set_attributes(id,attributes){
	var iHandlemodel=iElementlist.get(id);
	iHandlemodel.set(attributes);
}
function model_set_value(id,key,value){// This function use to set model attributes by key and value 
	var iHandlemodel=iElementlist.get(id);
	iHandlemodel.set(key,value);
}
function model_get_value(id,key){
	var iHandlemodel=iElementlist.get(id);
	if(!iHandlemodel) return null;
	return iHandlemodel.has(key)?iHandlemodel.get(key):null;
}

function model_reset_collection(id,data,opt){//reset the model collection 
	var iHandlemodel=iElementlist.get(id);
	iHandlemodel.icollection.reset(data,{silent:true});
}
function model_add_collection(id,data,opt){//append model data
	var iHandlemodel=iElementlist.get(id);
	iHandlemodel.icollection.add(data,{silent:true});
}
function model_set_collection_data(id,data,opt){
	if(!opt) opt.reset=true;
	var iHandlemodel=iElementlist.get(id);
	if(opt.reset) iHandlemodel.icollection.reset({},{silent:true});
	iHandlemodel.icollection.add(data);
}
function model_get_collection_data(id){
	var iHandlemodel=iElementlist.get(id);
	var returned=[];
	iHandlemodel.icollection.each(function(model){
	    returned.push(model.attributes);
	})
	return returned;
}
function model_save(id,opt){
	if(!opt.attributes) opt.attributes={};
	var ihandlemodel=iElementlist.get(id);
	ihandlemodel.save(
		opt.attributes,
		{
			wait:true,
			success: function(model,response){
				returned=eval(response);
				if(returned.code==200){
					//derectivechecklist.push(id);
					if(opt.prompt) display_message('success',returned.msg);
					model.trigger('updatesuccess',returned.data);
					if(opt.callback) {
						if(returned.data) opt.callback(returned.data);
						else opt.callback();
					}
				}
				else{
					$(document).trigger('json_error',code,data.msg);
					error_handle(code,data.msg);
					if(jqwait_on) jqwait_simple_close();
				}
			},
			error:function(){
				display_message('error','服务器请求未应答');
				$(document).trigger('server_error');
				if(jqwait_on) jqwait_simple_close();
			}
		}
	);
}

function model_update(id,callback,prompt){
	var ihandlemodel=iElementlist.get(id);
	ihandlemodel.save(
		{},
		{
			wait:true,
			success: function(model,response){
				returned=eval(response);
				if(returned.code==200){
					//derectivechecklist.push(id);
					if(prompt) display_message('success',returned.msg);
					model.trigger('updatesuccess',returned.data);
					if(callback) {
						if(returned.data) callback(returned.data);
						else callback();
					}
				}
				else{
					$(document).trigger('json_error',code,data.msg);
					error_handle(code,data.msg);
					if(jqwait_on) jqwait_simple_close();
				}
			},
			error:function(){
				display_message('error','服务器请求未应答');
				$(document).trigger('server_error');
				if(jqwait_on) jqwait_simple_close();
			}
		}
	);
}

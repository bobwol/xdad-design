/* func for error handle */
function error_handle(code,msg){
	display_message('error',msg);
}

function error_prompt_standardize(prompt){//This function use to standardize the prompt info system
	if(!prompt) prompt={"json_success_prompt":false,"json_error_prompt":true,"server_error_prompt":true};
	else{
		if(_.isBoolean(prompt)) prompt={"json_success_prompt":prompt,"json_error_prompt":prompt,"server_error_prompt":prompt};
	}
	return prompt;
}
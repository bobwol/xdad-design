define(['global/main','text!workflow/template/workflowTemplate.js'],function(){
	window.workflow={};
	function book_workflow_load(){
		var url=context_url+'getprojectinfo.json';
		global.json.load(url,function(d,code){
			iBook_Workflow.set(d.data);
			$('div.workflow').html(_.template(workflowTemplate,{"code":code}));
		})
	}
	function book_workflow_start(){
		var url=context_url+"startproject.json";
		global.json.post(url,'',function(d,code){
			var id=d.data.id;
			if(context_type.indexOf('Topic')>0){
				window.location.href='/topic_task?id='+id;
			}else{
				window.location.href='/project?id='+id;				
			}
		})
	}
	function book_project_manage(){
		var id=iBook_Workflow.id;
		if(context_type.indexOf('Topic')>0){
			window.location.href='/topic_task?id='+id;
		}else{
			window.location.href='/project?id='+id;				
		}
	}
	set_click_event('div.workflow button',function(){
		if($(this).hasClass('btn-startworkflow')){
			book_workflow_start();
		}
		else if($(this).hasClass('btn-projectmanage')){
			book_project_manage();
		}
		return false;
	})
	workflow.get_book_workflow_status=function(code){
		if(iBook_Workflow.get('editable'))
			return (code==403)?"disabled=true":"";
		else if (code==204)
			return "";
		else return "disabled=true";
	}
	
	workflow.get_book_workflow_button_class=function(code){
		switch(code){
			case 403: return "btn btn-small btn-project btn-forbiddenworkflow"; 
			case 204: return "btn btn-small btn-primary btn-project btn-startworkflow";
			case 200: return "btn btn-small btn-project btn-projectmanage";
		}
		if(code==204) return "btn btn-small btn-primary btn-project btn-startworkflow";
		else return "btn btn-small btn-project";
	}
	
	workflow.get_book_workflow_flag_class=function(code){
		switch(code){
			case 403: return "icon-off"; 
			case 204: return "icon-off icon-white";
			case 200: return "icon-flag";
		}
	}
	
	workflow.get_book_workflow_operate_name=function(code){
		switch(code){
			case 403: return "启用工作流"; 
			case 204: return "启用工作流";
			case 200: return "项目管理";
		}
	}
	var workflowTemplate=require('text!workflow/template/workflowTemplate.js');
	iBook_Workflow=new Backbone.Model({id:'Book_Workflow'});
	workflow.load=book_workflow_load;
})

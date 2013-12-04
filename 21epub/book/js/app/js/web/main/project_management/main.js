(function(win){
	win.project_management={
	}
})(window);
$(document).ready(function(){

	process.model=new iProcessModel({id:'process',el:'.ui-layout-center-bd .list-content table tbody',wrap:null,template:process.template});
	process.model.query=process.processlist;	
	project.model=new iProjectModel({id:'project',el:'.ui-layout-center-bd .list-tree',wrap:'ul',template:project.template});
	project_management.event.init();
	global.modal.create('project_submitModal','modal-small');
	global.modal.create('projectManagement','modal-small');
	global.modal.create('processManagement','modal-small');
	global.modal.create('projectGroup','large-modal');
	user.model=new iuserModel({id:'user',el:'#projectGroup .list-content table tbody',wrap:null,template:user.group_template});
	workgroup.model=new iWorkgroupModel({id:'workgroup',el:'#projectGroup .list-tree',wrap:'ul',template:workgroup.template});
	user.model.query=user.usersList;
	//$('.ui-layout-center-bd').html(global.template.list());
	project_management.list=new global.list({
		list_template:global.template.list_project,
		list_el:'.ui-layout-center-bd',
		left:{
			el:'.ui-layout-center-bd .list-tree',
			model:project.model,
			onClick:function(id){
				project.renderinfo(id);
			}
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:null,
			template:process.list_menu
		},
		right:{
			el:'.ui-layout-center-bd .list-content table tbody',
			//wrap:null,
			model:process.model,
			onClick:function(id){
				process.renderinfo(id);
			}
		},
		page:{
			el:'.ui-layout-center-bd .list-page',
			model:process.model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	project_management.list.render_list();
	project_management.list.render_menu();
	project.projects(function(data){
		if(data.code==200){
			var d=data.data;
			project.model.set(d);
			global.model.model2tree(project.model,"results","");
			project_management.list.render_left();
			if(project.model.icollection.length){
				var id;
				if(global.getRequest('id')) {
					id=global.getRequest('id');
					var projectA = $(project_management.list.options.left.model.el).find('li[id="'+id+'"] h4 a');
				}
				else var projectA = $(project_management.list.options.left.model.el).find('li h4 a')[0];
				projectA.click();
				project_management.list.render_right();
			}
		}
	});
	project_management.workgroup_list=new global.list({
		list_template:workgroup.list_template,
		list_el:'#projectGroup .modal-body',
		left:{
			el:'#projectGroup .list-tree',
			model:workgroup.model
		},
		menu:{
			el:'#projectGroup .list-menu',
			model:null,
			template:user.list_menu
		},
		right:{
			el:'#projectGroup .list-content table tbody',
			//wrap:null,
			model:user.model,
			onClick:function(id){
			}
		},
		page:{
			el:'#projectGroup .list-page',
			model:user.model,
			template:global.template.list_page	
		}
	});
})

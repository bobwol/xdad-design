(function(win){
	win.mytask_management={
		event:{
			init:function(){
				this.onSet();
				//this.onPreview();
				//this.onSave();
				//this.onDelete();
			},
			onSave:function(){
				set_click_event('.action-save',function(event){
					if(units.model.current){
						var model=global.model.getModelById(units.model,units.model.current);
						$('.action-save').button('loading');
						units.model.set('results',[model.toJSON()]);
						units.model.set('type','Root');
						units.saveitems();					
					}
				})
			},
			onPreview:function(){
				set_click_event('.ui-layout-right .action-preview',function(event){
					if(units.model.current){
						var model=global.model.getModelById(units.model,units.model.current);
						window.open('http://xdad-site.21epub.com' + model.get('target_id').replace('/xdad','')+'/page');
						return false;					
					}
				})
			},
			onSet:function(){
				var setModel=function(name,values,model){
					var data={};
					if(name) data[name]=values;
					else data=values;
					if(model=='project') project.update(data);
					if(model=='process') task.update(data);
				}
				global.event.onModEvent(setModel);
			},
			onDelete:function(){
				set_click_event('.list-delete_confirmation',function(){
					var id=$(this).parents('.content-item').first().attr('id')||units.model.current;
					//photogallery.insert(ids);
					global.confirmDelete(function(){
						global.model.remove(units.model,[id],function(data){
							if(data.code==200) global.message('success',data.msg);
						});
					});
					return false;
				})
			}
		}
	}
})(window);
$(document).ready(function(){
	global.modal.create('project_submitModal','modal-small');
	project.model=new iProjectModel({id:'project',el:'.list-tree',wrap:'ul',template:project.template});
	task.model=new iTaskModel({id:'task',el:'.list-content table tbody',wrap:null,template:task.ListTemplate});
	global.modal.create('projectManagement','modal-small');
	global.modal.create('processManagement','modal-small');
	task.model.query=task.load;
	mytask_management.event.init();
	mytask_management.list=new global.list({
		list_template:global.template.list_project,
		list_el:'.ui-layout-center-bd',
		left:{
			el:'.list-tree',
			model:project.model,
			onClick:function(id){
				project.renderinfo(id);
			}
		},
		menu:{
			el:'.list-menu',
			model:null,
			template:task.MenuTemplate
		},
		right:{
			el:'.list-content table tbody',
			//wrap:null,
			model:task.model,
			onClick:function(id){
				task.renderinfo(id);
			}
		},
		page:{
			el:'.list-page',
			model:task.model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	mytask_management.list.render_list();
	mytask_management.list.render_menu();
	project.projects(function(data){
		if(data.code==200){
			var d=data.data;
			project.model.set(d);
			global.model.model2tree(project.model,"results","");
			mytask_management.list.render_left();
			if(project.model.icollection.length){
				var projectA = $(mytask_management.list.options.left.model.el).find('li h4 a')[0];
				projectA.click();
			}
		}
	});
})

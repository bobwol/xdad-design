(function(project_management){
	project_management.event={
		init:function(){
			this.onSet();
			this.onLib();
			this.onMemberActions();
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
				if(model=='process') process.update(data);
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
		},
		onLib:function(){
			set_click_event('button.projectGroup',function(){
				//contentstree.contentstreeid=$(this).parents('.content-item').first().attr('id');
				$('#projectGroup.modal').html(workgroup.modal_template());
				workgroup.model.icollection.reset();
				user.model.icollection.reset();
				project_management.workgroup_list.render_list();
				workgroup.load(function(data){
					if(data.code==200){
						var d=data.data;
						workgroup.model.set(d);
						global.model.model2collection(workgroup.model,"results");
						project_management.workgroup_list.render_left();
					}
				});
				user.usersList(function(data){
					if(data.code==200){
						var d=data.data;
						user.model.set(d);
						global.model.model2collection(user.model,"results");
						project_management.workgroup_list.render_right();
						project_management.workgroup_list.render_menu();
						project_management.workgroup_list.render_page();
					}		
				});
				global.modal.show('#projectGroup');
				return false;
			});
		},
		onMemberActions:function(){
			set_click_event('button.action-addmember',function(){
				var ids=global.get_array($('input[name=user_list]:checked'),'value');
				project.addmember(ids);
				return false;
			});
			set_click_event('button.action-removemember',function(){
				var ids=global.get_array($('input[name=user_list]:checked'),'value');
				project.removemember(ids);
				return false;
			})
			set_click_event('button.action-showmembers',function(){
				var members=project.getmembers();
				project_management.workgroup_list.options.right.model.icollection.reset();
				project_management.workgroup_list.options.right.model.set({results:members});
				global.model.model2collection(project_management.workgroup_list.options.right.model,'results');
			})
		}
	}
})(project_management);

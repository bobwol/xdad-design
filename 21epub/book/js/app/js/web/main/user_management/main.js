(function(win){
	win.user_list={
	}
})(window);
$(document).ready(function(){
	user.list_model=new iuserModel({id:'user',el:'.ui-layout-center-bd .list-content table tbody',wrap:null,template:user.list_template});
	user.list_model.query=user.usersList;
	user_list.event.init();
	user.event.init();
	global.modal.create('user_info_modal','medium-modal');
	// filter.model.query=filter.component_filterconfig;
	user_list.list=new global.list({
		list_template:global.template.list_single_1_nocover,
		list_el:'.ui-layout-center-bd',
		left:{
			//el:'#contentstree',
			model:null
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			// template:global.template.list_menu
			model:null,
			template:user.list_menu
		},
		right:{
			el:'.ui-layout-center-bd .list-content ',
			wrap:'ul',
			type:'tree',
			model:user.list_model,
			onClick:function(id){
				// user.renderinfo(id);
			}
		},
		page:{
			el:'.list-page',
			model:user.list_model,
			template:global.template.list_page	
		}
	});
	user_list.list.render_list();
	user.usersList(function(data){
		if(data.code==200){
			var d=data.data;
			user.list_model.set(d);
			global.model.model2collection(user.list_model,"results");
			user_list.list.render_right();
			user_list.list.render_page();
			user_list.list.render_menu();							
		}		
	});
})

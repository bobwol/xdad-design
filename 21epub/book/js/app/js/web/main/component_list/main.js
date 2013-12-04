(function(win){
	win.component_list={
	}
})(window);
$(document).ready(function(){
	component.list_model=new icomponentModel({id:'component',el:'.ui-layout-center-bd .list-content table tbody',wrap:null,template:component.list_template});
	component.list_model.query=component.componentslist;
	component_list.event.init();
	filter.model.query=filter.component_filterconfig;
	global.modal.create_preview_modal('material_preview');
	//global.modal.create('component_list');
	//$('.ui-layout-center-bd').html(global.template.list());
	component_list.list=new global.list({
		list_template:global.template.list_single_1,
		list_el:'.ui-layout-center-bd',
		left:{
			//el:'#contentstree',
			model:null
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:filter.model,
			template:global.template.list_menu
		},
		right:{
			el:'.ui-layout-center-bd .list-content ',
			wrap:'ul',
			type:'tree',
			model:component.list_model,
			onClick:function(id){
				component.renderinfo(id);
			}
		},
		page:{
			el:'.list-page',
			model:component.list_model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	component_list.list.render_list();
	component.componentslist(function(data){
		if(data.code==200){
			var d=data.data;
			component.list_model.set(d);
			global.model.model2collection(component.list_model,"results");
			component_list.list.render_right();
			component_list.list.render_page();
			component_list.list.render_menu();							
		}		
	});
})

(function(win){
	win.pending_list={
	}
})(window);
$(document).ready(function(){
	units.model=new iunitsModel({id:'units',el:'.list-content table tbody',wrap:null,template:units.pending_template});
	units.event.init();
	pending_list.event.init();
	global.modal.create_preview_modal('material_preview');
	global.modal.create('action_modal','medium-modal');
	// filter.model.query=filter.component_filterconfig;
	pending_list.list=new global.list({
		list_template:global.template.list_single_1,
		list_el:'.ui-layout-center-bd',
		left:{
			//el:'#contentstree',
			model:null
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:null,
			template:units.pending_menu
		},
		right:{
			el:'.ui-layout-center-bd .list-content ',
			wrap:'ul',
			type:'collection',
			model:units.model,
			onClick:function(id){
				units.renderinfo(id);
			}
		},
		page:{
			el:'.list-page',
			model:units.model,
			template:global.template.list_page	
		}
	});
	pending_list.list.render_list();
	units.unitslist(function(data){
		if(data.code==200){
			var d=data.data;
			units.model.set(d);
			global.model.model2collection(units.model,"results");
			pending_list.list.render_right();
			pending_list.list.render_page();
			pending_list.list.render_menu();							
		}		
	});
})

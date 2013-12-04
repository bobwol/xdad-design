(function(win){
	win.edit={
	}
})(window);
$(document).ready(function(){
	edit.event.init();
	edit.event.init();
	edit.model=new ieditModel({id:'edit',el:'#lib .list-tree',wrap:'ul',template:edit.template});
	filter.list_model=new ifilterModel({id:'filter',el:'#lib .list-menu table > thead > tr',wrap:null,template:filter.template});
	filter.list_model.query=filter.filterconfig;
	units.model=new iunitsModel({id:'units',el:'#lib .list-content table tbody',wrap:null,template:units.template});
	units.model.query=units.unitslist;
	global.modal.create('category_edit','medium-modal');
	global.modal.create('lib','large-modal');
	window.content_list={};
	content_list.list=new global.list({
		list_template:global.template.list,
		list_el:'#lib .modal-body',
		left:{
			model:edit.model
		},
		menu:{
			el:'#lib .list-menu',
			model:filter.list_model,
			template:global.template.list_menu
		},
		right:{
			el:'.list-content table tbody',
			wrap:null,
			model:units.model,
			onClick:function(id){
				//units.renderinfo(id);
			}
		},
		page:{
			el:'.list-page',
			model:units.model,
			template:global.template.list_page	
		}
	});
	//$('.ui-layout-center-bd').html(global.template.list());
	edit.list=new global.list({
		list_template:global.template.list_2,
		list_el:'.ui-layout-center-bd',
		left:{
			el:'.ui-layout-center-bd .list-tree',
			wrap:'ul',
			type:'tree',
			model:channel.model
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
			model:edit.list_model,
			onClick:function(id){
				edit.renderinfo(id);
			}
		},
		page:{
			el:'.list-page',
			model:edit.list_model,
			template:global.template.list_page	
		}
	});
	edit.list.render_list();
	channel.channels(function(data){
		if(data.code==200){
			var d=data.data;
			channel.model.set(d);
			global.model.model2tree(channel.model,"results","children");
			edit.list.render_left();
		}		
	})
	edit.edit(function(data){
		if(data.code==200){
			var d=data.data;
			edit.list_model.set(d);
			global.model.model2tree(edit.list_model,"results","children");
			edit.list.render_right();
			//edit.list.render_menu();
			edit.list.render_page();
			edit.sortable(function(id){
				var ids_tree=global.get_tree($('.ui-layout-center-bd .list-content'),'ul','li.content-item','id');
				ids_tree=global.model.getModelTreeByIdsTree(edit.list_model,ids_tree);
				global.model.sort_tree(edit.list_model,edit.list_model,ids_tree);
			})
			//edit.list.hasmenu_check();
		}
	});
})

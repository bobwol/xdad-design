(function(win){
	win.content_organization={
	}
})(window);
$(document).ready(function(){
	contentstree.event.init();
	content_organization.event.init();
	contentstree.model=new icontentstreeModel({id:'contentstree',el:'#lib .list-tree',wrap:'ul',template:contentstree.template});
	filter.list_model=new ifilterModel({id:'filter',el:'#lib .list-menu table > thead > tr',wrap:null,template:filter.template});
	filter.list_model.query=filter.filterconfig;
	units.model=new iunitsModel({id:'units',el:'#lib .list-content table tbody',wrap:null,template:units.template});
	units.model.query=units.unitslist;
	global.modal.create('category_edit','medium-modal');
	global.modal.create('link_edit','medium-modal');
	global.modal.create('lib','large-modal');
	material.init_list();
	material.init_change_list();
	window.content_list={};
	content_organization.category_list=new global.list({
		list_template:global.template.list_3,
		list_el:'#lib .modal-body',
		left:{
			model:channel.list_model
		},
		menu:{
			el:'#lib .list-menu',
			model:null,
			template:global.template.list_menu
		},
		right:{
			type:"tree",
			model:contentstree.lib_model,
			onClick:function(id){
				//units.renderinfo(id);
			}
		},
		page:{
			el:'#lib .list-page.null',
			model:contentstree.lib_model,
			template:global.template.list_page	
		}
	});
	content_list.list=new global.list({
		list_template:global.template.list,
		list_el:'#lib .modal-body',
		left:{
			model:contentstree.model
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
			el:'#lib .list-page',
			model:units.model,
			template:global.template.list_page	
		}
	});
	//$('.ui-layout-center-bd').html(global.template.list());
	content_organization.list=new global.list({
		list_template:global.template.list_2,
		list_el:'.ui-layout-center-bd',
		left:{
			type:'tree',
			model:channel.model
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:null,
			template:global.template.list_menu1
		},
		right:{
			el:'.ui-layout-center-bd .list-content ',
			wrap:'ul',
			type:'tree',
			model:contentstree.list_model,
			onClick:function(id){
				contentstree.renderinfo(id);
			}
		},
		page:{
			el:'.list-page.null',
			model:contentstree.list_model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	content_organization.list.render_list();
	channel.channels(function(data){
		if(data.code==200){
			var d=data.data;
			channel.model.set(d);
			global.model.model2tree(channel.model,"results","children");
			content_organization.list.render_left();
		}		
	})
	contentstree.contentstree(function(data){
		if(data.code==200){
			var d=data.data;
			contentstree.list_model.set(d);
			global.model.model2tree(contentstree.list_model,"results","children");
			content_organization.list.render_right();
			content_organization.list.render_menu();
			content_organization.list.render_page();
			contentstree.sortable(function(id){
				var ids_tree=global.get_tree($('.ui-layout-center-bd .list-content'),'ul','li.content-item','id');
				ids_tree=global.model.getModelTreeByIdsTree(contentstree.list_model,ids_tree);
				global.model.sort_tree(contentstree.list_model,contentstree.list_model,ids_tree);
			})
			//content_organization.list.hasmenu_check();
		}
	});
})

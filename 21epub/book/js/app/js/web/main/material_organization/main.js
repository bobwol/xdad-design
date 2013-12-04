(function(win){
	win.material_organization={
	}
})(window);
$(document).ready(function(){
	global.modal.create('category_edit','medium-modal');
	material.init_list();
	material.init_change_list();
	material_organization.event.init();
	category.list_model=new icategoryModel({id:'category',el:'.ui-layout-center-bd .list-content',wrap:'ul',template:category.list_template});
	material_organization.list=new global.list({
		list_template:global.template.list_single,
		list_el:'.ui-layout-center-bd',
		left:{
			el:'.ui-layout-center-bd .list-tree',
			wrap:'ul',
			type:'tree',
			model:null
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:null,
			template:global.template.list_menu
		},
		right:{
			el:'.ui-layout-center-bd .list-content ',
			wrap:'ul',
			type:'tree',
			model:category.list_model,
			onClick:function(id){
				category.renderinfo(id);
			}
		},
		page:{
			el:'.ui-layout-center-bd .list-page',
			model:null,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	material_organization.list.render_list();
	$('.ui-layout-center-bd .column-hd').append(
		[
'		<button class="btn btn-small action-add" type="button" style="position:absolute; left:30px; top:8px;">',
'			<i class="icon-plus-sign"></i> 添加分类',
'		</button>',
		].join("")
	);
	category.categories('material',function(data){
		if(data.code==200){
			var d=data.data;
			category.list_model.set(d);
			global.model.model2tree(category.list_model,"results","children");
			material_organization.list.render_right();
			category.sortable(function(id){
				var ids_tree=global.get_tree($('.ui-layout-center-bd .list-content'),'ul','li.content-item','id');
				ids_tree=global.model.getModelTreeByIdsTree(category.list_model,ids_tree);
				global.model.sort_tree(category.list_model,category.list_model,ids_tree);
			})
		}
	});
})

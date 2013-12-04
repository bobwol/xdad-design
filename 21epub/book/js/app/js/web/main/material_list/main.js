(function(win){
	win.material_list={
	}
})(window);
$(document).ready(function(){
	addPage=function(){
		material.materialslist(function(data){
			if(data.code==200){
				var d=data.data;
				material_list.model.icollection.reset();
				material_list.model.set(d);
				global.model.model2collection(material_list.model,"results");
				material_list.list.render_right();
				material_list.list.render_page();						
			}
			else global.throwerror(data.msg);	
		});
	}
	material_list.model=new iMaterialModel({id:'material_list',el:'.ui-layout-center-bd .list-content table tbody',wrap:null,template:material.template});
	material_list.model.query=material.materialslist;
	category.model=new icategoryModel({id:'category',el:'.ui-layout-center-bd .list-tree',wrap:'ul',template:category.template});
	material_list.event.init();
	material.event.init();
	filter.model.query=filter.material_filterconfig;
	global.modal.create_preview_modal('material_preview');
	$('.ui-layout-center-hd').append('<button class="btn btn-small action-upload" type="button">批量上传</button>');
	//global.modal.create('material_list');
	//$('.ui-layout-center-bd').html(global.template.list());
	material_list.list=new global.list({
		list_template:global.template.list,
		list_el:'.ui-layout-center-bd',
		left:{
			//el:'#contentstree',
			model:category.model
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:filter.model,
			template:global.template.list_menu
		},
		right:{
			//el:'.list-content table tbody',
			//wrap:null,
			model:material_list.model,
			onClick:function(id){
				material.renderinfo(id);
			}
		},
		page:{
			el:'.ui-layout-center-bd .list-page',
			model:material_list.model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	material_list.list.render_list();
	category.categoriesforlist(function(data){
		if(data.code==200){
			var d=data.data;
			category.model.set(d);
			global.model.model2tree(category.model,"results",'children');	
			material_list.list.render_left();
		}
	});
	material.materialslist(function(data){
		if(data.code==200){
			var d=data.data;
			material_list.model.set(d);
			global.model.model2collection(material_list.model,"results");
			material_list.list.render_right();
			material_list.list.render_page();
			material_list.list.render_menu();							
		}		
	});
})

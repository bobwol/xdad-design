(function(win){
	win.imagesfolder_view={
	}
})(window);
$(document).ready(function(){
	material_list.model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:photogallery.list_template});
	material_list.change_model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:photogallery.change_list_template});
	material_list.model.query=material_list.change_model.query=material.materialslistforinsert;
	material.event.init();
	imagesfolder_view.event.init();
	photogallery.event.init();
	global.modal.create('material_list');
	$('#material_list').html(material.material_list_modal_template);
	global.modal.create_preview_modal('material_preview');
	filter.list_model.query=filter.material_filterconfig;
	material_list.list=new global.list({
		list_template:global.template.list,
		list_el:'#material_list .modal-body',
		left:{
			el:'#material_list .list-tree',
			model:category.model
		},
		menu:{
			el:'#material_list .list-menu',
			model:filter.list_model,
			template:global.template.list_menu
		},
		right:{
			el:'#material_list .list-content table tbody',
			wrap:null,
			model:material_list.model,
			template:photogallery.list_template
		},
		page:{
			el:'#material_list .list-page',
			model:material_list.model,
			template:global.template.list_page	
		}
	});
	material_list.change_list=new global.list({
		list_template:global.template.list,
		list_el:'#material_list .modal-body',
		left:{
			el:'#material_list .list-tree',
			model:category.model
		},
		menu:{
			el:'#material_list .list-menu',
			model:material_list.change_model,
			template:global.template.list_menu
		},
		right:{
			el:'#material_list .list-content table tbody',
			wrap:null,
			model:material_list.change_model,
			template:photogallery.list_template
		},
		page:{
			el:'#material_list .list-page',
			model:material_list.change_model,
			template:global.template.list_page	
		}
	});
	photogallery.getimages(function(data){
		 if(data.code==200){
			 var d=data.data;
			 photogallery.model.set(d);
			 global.model.model2collection(photogallery.model,"results");
			 photogallery.sortable(function(){
			 	var ids=global.get_array($('.gallery-list .content ul').children('li'),'id');
			 	//console.info(ids);
			 	global.model.sort(photogallery.model,ids);
			 });
		    // $('article.article#bodycontent').html(content);
		 }
	});
})
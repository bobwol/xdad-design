(function(win){
	win.series_view={
	}
})(window);
$(document).ready(function(){
	material_list.model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:lhh.list_template});
	material_list.change_model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:lhh.change_list_template});
	material_list.model.query=material_list.change_model.query=material.materialslistforinsert;
	contentstree.model=new icontentstreeModel({id:'contentstree',el:'#lib .list-tree',wrap:'ul',template:contentstree.template});
	units.model=new iunitsModel({id:'units',el:'.list-content table tbody',wrap:null,template:lhh.list_template});
	series_view.event.init();
	lhh.event.init();
	units.model.query=units.unitslistforlhh;
	global.modal.create('material_list');
	global.modal.create('lib','large-modal');
	$('#material_list').html(material.material_list_modal_template);
	global.modal.create_preview_modal('material_preview');
	filter.list_model=new ifilterModel({id:'filter',el:'#lib .list-menu table > thead > tr',wrap:null,template:filter.template});
	filter.list_model.query=filter.filterconfig;
	series_view.list=new global.list({
		list_template:global.template.list,
		list_el:'#lib .modal-body',
		left:{
			model:contentstree.model
		},
		menu:{
			el:'#lib .list-menu',
			model:null,
			template:lhh.list_menu
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
	material_list.list=new global.list({
		list_template:global.template.list,
		list_el:'#material_list .modal-body',
		left:{
			el:'#material_list .list-tree',
			model:category.model
		},
		menu:{
			el:'#material_list .list-menu',
			model:null,
			template:global.template.list_menu
		},
		right:{
			el:'#material_list .list-content table tbody',
			wrap:null,
			model:material_list.model,
			template:lhh.list_template
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
			model:null,
			template:global.template.list_menu
		},
		right:{
			el:'#material_list .list-content table tbody',
			wrap:null,
			model:material_list.change_model,
			template:lhh.list_template
		},
		page:{
			el:'#material_list .list-page',
			model:material_list.change_model,
			template:global.template.list_page	
		}
	});
	lhh.getlhhs(function(data){
		 if(data.code==200){
			 var d=data.data;
			 lhh.model.set(d);
			 global.model.model2collection(lhh.model,"results");
			 lhh.sortable(function(){
			 	var ids=global.get_array($('.gallery-list .content ul').children('li'),'id');
			 	//console.info(ids);
			 	global.model.sort(lhh.model,ids);
			 });
		    // $('article.article#bodycontent').html(content);
		 }
	});
})
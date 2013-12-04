(function(win){
	win.ref_resource_list={
		renderinfo:function(id){
			var model=ref_resource_list.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		}
	}
})(window);
$(document).ready(function(){
	ref_resource_list.model=new iMaterialModel({id:'ref_resource_list',el:'.ui-layout-center-bd .column-bd .list-content table tbody',wrap:null,template:material.ref_template});
	ref_resource_list.model.query=material.refmaterials;
	ref_resource_list.event.init();
	global.modal.create_preview_modal('material_preview');
	//global.modal.create('ref_resource_list');
	//$('.ui-layout-center-bd').html(global.template.list());
	filter.model.query=filter.ref_filterconfig;
	var Template=global.template.list_single_1;
	if(context_type!='ImagesTopic' && context_type!='FluidTopic' && typeof chapter != undefined) {
		Template=global.template.list_chapter;
		chapter.model=new ichapterModel({id:'chapter',el:'.ui-layout-center-bd .column-bd .list-tree',wrap:'ul',template:chapter.nav_template});
	}
	ref_resource_list.list=new global.list({
		list_template:Template,
		list_el:'.ui-layout-center-bd .column-bd',
		left:{
			//el:'#contentstree',
			el:'.list-tree',
			model:chapter.model
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:null,
			template:global.template.ref_menu
		},
		right:{
			//el:'.list-content table tbody',
			//wrap:null,
			model:ref_resource_list.model,
			onClick:function(id){
				ref_resource_list.renderinfo(id);
			}
		},
		page:{
			el:'.ui-layout-center-bd .list-page',
			model:ref_resource_list.model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	ref_resource_list.list.render_list();
	if(context_type!='ImagesTopic' && context_type!='FluidTopic' && typeof chapter != undefined){
		chapter.chapters(function(data){
			if(data.code==200){
				var d=data.data;
				chapter.model.set(d);
				global.model.model2tree(chapter.model,"Result",'');	
				ref_resource_list.list.render_left();
				if(chapter.model.icollection.length){
					var chapterA = $(ref_resource_list.list.options.left.model.el).find('li h4 a')[0];
					chapterA.click();
				}
			}
		});		
	}
	if(context_type=='ImagesTopic' || context_type=='FluidTopic'){
		ref_resource_list.list.render_menu();
		ref_resource_list.model.query(function(data){
			if(data.code==200){
				var d=data.data;
				ref_resource_list.model.set(d);
				global.model.model2collection(ref_resource_list.model,"results");
				ref_resource_list.list.render_right();
				ref_resource_list.list.render_page();
			}
		})
	}
	material_list.model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:material.ref_list_template});
	material_list.model.query=material.materialslistforinsert;
	material.event.init();
	filter.list_model.query=filter.material_filterconfig;
	global.modal.create('material_list');
	$('#material_list').html(material.material_list_modal_template);	
	material_list.list=new global.list({
		list_template:global.template.comac_material_list,
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
			template:material.ref_list_template
		},
		page:{
			el:'#material_list .list-page',
			model:material_list.model,
			template:global.template.list_page	
		}
	});

})

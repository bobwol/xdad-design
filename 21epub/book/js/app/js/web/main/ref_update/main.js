(function(win){
	win.ref_resource_update={
		renderinfo:function(id){
			var model=ref_resource_update.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		}
	}
})(window);
$(document).ready(function(){
	ref_resource_update.model=new iMaterialModel({id:'ref_resource_update',el:'.ui-layout-center-bd .column-bd .list-content table tbody',wrap:null,template:material.ref_update_template});
	ref_resource_update.model.query=material.updatedmaterials;
	ref_resource_update.event.init();
	global.modal.create_preview_modal('material_preview');
	var Template=global.template.list_single_1;
	if(context_type!='ImagesTopic' && context_type!='FluidTopic' && typeof chapter != undefined) {
		Template=global.template.list_chapter;
		chapter.model=new ichapterModel({id:'chapter',el:'.ui-layout-center-bd .column-bd .list-tree',wrap:'ul',template:chapter.nav_template});
	}
	filter.model.query=filter.update_filterconfig;
	ref_resource_update.list=new global.list({
		list_template:Template,
		list_el:'.ui-layout-center-bd .column-bd',
		left:{
			//el:'#contentstree',
			el:'.list-tree',
			model:chapter.model
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:filter.model,
			template:global.template.update_menu
		},
		right:{
			//el:'.list-content table tbody',
			//wrap:null,
			model:ref_resource_update.model,
			onClick:function(id){
				ref_resource_update.renderinfo(id);
			}
		},
		page:{
			el:'.ui-layout-center-bd .list-page',
			model:ref_resource_update.model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	ref_resource_update.list.render_list();
	if(context_type!='ImagesTopic' && context_type!='FluidTopic' && typeof chapter != undefined){
		chapter.chapters(function(data){
			if(data.code==200){
				var d=data.data;
				chapter.model.set(d);
				global.model.model2tree(chapter.model,"Result","pages");	
				ref_resource_update.list.render_left();
				if(chapter.model.icollection.length){
					var chapterA = $(ref_resource_update.list.options.left.model.el).find('li h4 a')[0];
					chapterA.click();
				}
			}
		});
	}
	if(context_type=='ImagesTopic' || context_type=='FluidTopic'){
		ref_resource_update.list.render_menu();
		ref_resource_update.model.query(function(data){
			if(data.code==200){
				var d=data.data;
				ref_resource_update.model.set(d);
				global.model.model2collection(ref_resource_update.model,"results");
				ref_resource_update.list.render_right();
				ref_resource_update.list.render_page();
			}
		})
	}
})

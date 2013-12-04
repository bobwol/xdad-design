(function(win){
	win.body_view={

	}
})(window);
$(document).ready(function(){
	body_view.event.init();
	material.event.init();
	global.modal.create('material_list');
	$('.ui-layout').die('click');
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
			template:material.list_template
		},
		page:{
			el:'#material_list .list-page',
			model:material_list.model,
			template:global.template.list_page	
		}
	});
	bodycontent.getbody(function(data){
		if(data.code==200){
			var d=data.data;
			bodycontent.model.set(d);
			global.model.model2collection(bodycontent.model,"results");
			var content= bodycontent.model.icollection.at(0).get('body');
		    $('article.article#bodycontent').html(content);
		    tEditor.load('bodycontent');
		}
	});
	// material.materialslistforinsert(function(data){
		// if(data.code==200){
			// material.event.init();
			// var d=data.data;
			// material.model.set(d);
			// global.model.model2collection(material.model,"results");
			// //material.model.iview.render_collection();
			// //$('.tab-content #sB ul').html(material.model.iview.render_collection());
			// //$('.material_list_table tbody').html(material.model.iview.render_collection(material.list_template));
		// }		
	// });
	component.componentslistforinsert(function(data){
		if(data.code==200){
			component.event.init();
			var d=data.data;
			component.model.set(d);
			global.model.model2collection(component.model,"results");
		}		
	});
})

(function(win){
	win.tabcomponent_view={
	}
})(window);
$(document).ready(function(){
	tabcomponent_view.event.init();
	material.event.init();
	$('.ui-layout').die('click');
	global.modal.create('material_list');
	$('#material_list').html(material.material_list_modal_template);
	global.modal.create_preview_modal('material_preview')
	global.modal.create('addtab','medium-modal');
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
	bodycontent.getbodies(function(data){
		if(data.code==200){
			var d=data.data;
			bodycontent.model=bodycontent.tabs_model;
			bodycontent.model.set(d);
			global.setscrollnano('.ui-layout-center-bd');
			if($('.tabs_area').find('.tab-content').length==0)	$('.tabs_area').find('.content').addClass('tab-content');
			global.model.model2collection(bodycontent.tabs_model,"results");
			if(bodycontent.tabs_model.icollection.length>0){
				bodycontent.tabs_model.iview.render_collection(bodycontent.tab_template);
				$('.ui-layout-center-bd .nav-tabs a:first').tab('show');
				//var content= bodycontent.model.icollection.at(0).get('body');
			   // $('article.article#bodycontent').html(content);
			    tEditor.load('article'+bodycontent.tabs_model.icollection.at(0).id);				
			}
			bodycontent.sortable(function(){
			 	var ids=global.get_array($('.tabview.tab-component > ul').children('li').children('a[data-toggle="tab"]'),'href');
			 	ids=_.map(ids,function(id){
			 		return id.split('#')[1];
			 	})
			 	global.model.sort(bodycontent.tabs_model,ids);
			});
		}
	});
	component.componentslistforinsertwithslide(function(data){
		if(data.code==200){
			component.event.init();
			var d=data.data;
			component.model.set(d);
			if($('.tab-components').find('.tab-content').length==0)	$('.tab-components').find('.content').addClass('tab-content');
			global.model.model2collection(component.model,"results");
		}		
	});
})

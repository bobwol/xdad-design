function Pack(name){
	var result=[];
	result.push('/app/js/web/'+name+'/main.js');
	result.push('/app/js/web/'+name+'/template.js');
	result.push('/app/js/web/'+name+'/data.js');
	result.push('/app/js/web/'+name+'/model.js');
	result.push('/app/js/web/'+name+'/event.js');
	return result;
};
(function(win){
	win.content_list={
	}
})(window);
require(_.union(Pack('units'),Pack("contentstree"),["app/js/web/main/content_list/event.js"]), function() {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
	units.event.init();
	//content_list.event.init();
	global.modal.create_preview_modal('material_preview');
	//global.modal.create('material_list');
	//$('.ui-layout-center-bd').html(global.template.list());
	content_list.list=new global.list({
		list_template:global.template.list,
		list_el:'.ui-layout-center-bd',
		left:{
			//el:'#contentstree',
			model:contentstree.model
		},
		menu:{
			el:'.list-menu',
			model:filter.model,
			template:global.template.list_menu
		},
		right:{
			//el:'.list-content table tbody',
			//wrap:null,
			model:units.model,
			onClick:function(id){
				units.renderinfo(id);
			}
		},
		page:{
			el:'.list-page',
			model:units.model,
			template:global.template.list_page	
		}
	});
	content_list.list.render_list();
	content_list.list.render_menu();
	contentstree.contentstree_manage(function(data){
		if(data.code==200){
			var d=data.data;
			contentstree.model.set(d);
			global.model.model2tree(contentstree.model,"results","children");
			content_list.list.render_left();
		}
	});
	units.unitslist(function(data){
		if(data.code==200){
			var d=data.data;
			units.model.set(d);
			global.model.model2collection(units.model,"results");
			content_list.list.render_right();
			content_list.list.render_page();
		}		
	});
});
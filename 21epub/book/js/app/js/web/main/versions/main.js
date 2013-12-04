(function(win){
	win.versions_list={
	}
})(window);
$(document).ready(function(){
	versions_list.model=new iVersionModel({id:'versions_list',el:'.ui-layout-center-bd .column-bd .list-content table tbody',wrap:null,template:version.template});
	versions_list.model.query=version.versions;
	versions_list.event.init();
	versions_list.list=new global.list({
		list_template:global.template.list_single_1_nocover,
		list_el:'.ui-layout-center-bd .column-bd',
		left:{
			//el:'#contentstree',
			model:null
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:null,
			template:version.list_menu
		},
		right:{
			//el:'.list-content table tbody',
			//wrap:null,
			model:versions_list.model,
			onClick:function(id){
				
			}
		},
		page:{
			el:'.ui-layout-center-bd .list-page',
			model:versions_list.model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	versions_list.list.render_list();
	version.versions(function(data){
		if(data.code==200){
			var d=data.data;
			versions_list.model.set(d);
			global.model.model2collection(versions_list.model,"results");
			versions_list.list.render_right();
			versions_list.list.render_page();
			versions_list.list.render_menu();							
		}		
	});

})

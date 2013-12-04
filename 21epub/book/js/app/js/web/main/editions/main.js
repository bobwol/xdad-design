(function(win){
	win.editions_list={
		refresh:function(){
				edition.editions(function(data){
					if(data.code==200){
						var d=data.data;
						editions_list.model.icollection.reset();
						editions_list.model.set(d);
						global.model.model2collection(editions_list.model,"results");
						editions_list.list.render_right();
						editions_list.list.render_page();		
						editions_list.list.render_menu();							
					}		
				});
		}
	}
})(window);
$(document).ready(function(){
	editions_list.model=new iEditionModel({id:'editions_list',el:'.ui-layout-center-bd .column-bd .list-content table tbody',wrap:null,template:edition.template});
	editions_list.model.query=edition.editions;
	editions_list.event.init();
	global.modal.create('createEdition','medium-modal');
	editions_list.list=new global.list({
		list_template:global.template.list_single_1_nocheckbox,
		list_el:'.ui-layout-center-bd .column-bd',
		left:{
			//el:'#contentstree',
			model:null
		},
		menu:{
			el:'.ui-layout-center-bd .list-menu',
			model:null,
			template:edition.list_menu
		},
		right:{
			//el:'.list-content table tbody',
			//wrap:null,
			model:editions_list.model,
			onClick:function(id){
				var model=editions_list.model.icollection.get(id);
				var properties=model.get('properties');
				global.render_template(model.toJSON(),properties);
			}
		},
		page:{
			el:'.ui-layout-center-bd .list-page',
			model:editions_list.model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	editions_list.list.render_list();
	editions_list.refresh();
})

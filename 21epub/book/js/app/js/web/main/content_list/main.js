(function(win){
	win.content_list={
	}
	var ModelForSave=Backbone.Model.extend({
		initialize:function(){
			this.set('id','ModelForsave');
		},
		sync: function(method, model, options) {
			var Model_JSON=this.list.toJSON();
			this.attributes=Model_JSON;
			if(method=='create'){
				return;
			}
			if(method=='update'){
				options.url=this.url;
			}
			if(method=='delete'){
				return;
			}
			if(method=='read'){
				options.url=context_url+interaction.currentpage.id+'/getanimations';
			}
			Backbone.emulateHTTP = true ;
			Backbone.emulateJSON = true ;
			Backbone.sync(method, model, options);
		}
	})
	content_list.ModelForSave=new ModelForSave();
})(window);
$(document).ready(function(){
	units.event.init();
	content_list.event.init();
	global.modal.create_preview_modal('material_preview');
	global.modal.create('lib','large-modal');
	window.afterworkflow=function(data){
		var data=data.data.results[0];
		var id=data.id;
		global.model.getModelById(units.model,id).set(data);
	}
	//global.modal.create('material_list');
	//$('.ui-layout-center-bd').html(global.template.list());
	content_list.category_list=new global.list({
		list_template:global.template.list_3,
		list_el:'#lib .modal-body',
		left:{
			model:channel.list_model
		},
		menu:{
			el:'#lib .list-menu',
			model:null,
			template:global.template.list_menu
		},
		right:{
			type:"tree",
			model:contentstree.lib_model,
			onClick:function(id){
				//units.renderinfo(id);
			}
		},
		page:{
			el:'#lib .list-page.null',
			model:contentstree.lib_model,
			template:global.template.list_page	
		}
	});
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
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
			$('.ui-layout-center-bd .list-content table tbody').sortable('destroy');
			content_list.event.onListSort();
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
			content_list.event.onListSort();
		}		
	});
	// filter.filterconfig(function(data){
		// if(data.code==200){
			// content_list.list.render_menu();
			// var d=data.data;
			// filter.model.set(d);
			// global.model.model2tree(filter.model,"results","children");
		// }			
	// })
})

(function(win){
	win.topic_list={
		event:{
			init:function(){
				this.onSet();
				//this.onPreview();
				//this.onSave();
				this.onDelete();
				this.onEdit();
			},
			onSave:function(){
				set_click_event('.action-save',function(event){
					if(topic.list_model.current){
						var model=global.model.getModelById(topic.list_model,topic.list_model.current);
						$('.action-save').button('loading');
						topic.list_model.set('results',[model.toJSON()]);
						topic.list_model.set('type','Root');
						units.saveitems();					
					}
				})
			},
			onEdit:function(){
				set_click_event('.list-edit',function(event){
					var id=$(this).parents('.content-item').first().attr('id');
					var model=global.model.getModelById(topic.list_model,id);
					window.open(model.get('url')+'/writing');
					return false;			
				})

			},
			onPreview:function(){
				set_click_event('.list-topic-preview',function(event){
					var id=$(this).parents('.content-item').first().attr('id');
					var model=global.model.getModelById(topic.list_model,id);
					window.open(model.get('url')+'/newcbtview');
					return false;					
				})
			},
			onSet:function(){
				var setModel=function(name,values){
					var data={};
					data[name]=values;
					topic.list_model.update(data);
				}
				global.event.onModEvent(setModel);
			},
			onDelete:function(){
				set_click_event('.list-delete_confirmation',function(){
					var id=$(this).parents('.content-item').first().attr('id')||topic.list_model.current;
					//photogallery.insert(ids);
					global.confirmDelete(function(){
						global.model.remove(topic.list_model,[id],function(data){
							if(data.code==200) global.message('success',data.msg);
						});
					});
					return false;
				})
			}
		}
	}
})(window);
$(document).ready(function(){
	topic_list.event.init();
	category.model=new icategoryModel({id:'category',el:'.ui-layout-center-bd .list-tree',wrap:'ul',template:category.template});
	//global.modal.create_preview_modal('material_preview');
	//global.modal.create('material_list');
	//$('.ui-layout-center-bd').html(global.template.list());
	topic_list.list=new global.list({
		list_template:global.template.list,
		list_el:'.ui-layout-center-bd',
		left:{
			//el:'#contentstree',
			model:category.model
		},
		menu:{
			el:'.list-menu',
			model:filter.model,
			template:global.template.list_menu
		},
		right:{
			//el:'.list-content table tbody',
			//wrap:null,
			model:topic.list_model,
			onClick:function(id){
				topic.renderinfo(id);
			}
		},
		page:{
			el:'.list-page',
			model:topic.list_model,
			template:global.template.list_page	
		},
		afterquery:function(){
			$('.ui-layout-right').empty();
		}
	});
	topic_list.list.render_list();
	topic_list.list.render_menu();
	category.categoriesfortopic(function(data){
		if(data.code==200){
			var d=data.data;
			category.model.set(d);
			global.model.model2tree(category.model,"results","children");
			topic_list.list.render_left();
		}
	});
	topic.load(function(data){
		if(data.code==200){
			var d=data.data;
			topic.list_model.set(d);
			global.model.model2collection(topic.list_model,"results");
			topic_list.list.render_right();
			topic_list.list.render_page();
		}		
	});
})

requirejs.config({
	baseurl:'./',
	paths:path,
	shim:shim
})
require(['lists/main','text!template/list.js','text!template/left.js','text!template/right.js','text!template/menu.js','text!template/page.js','data/left','data/right','text!'+iPath+'categories_template.js','text!'+iPath+'update_template.js'],function(lists){
	var list_template=require('text!template/list.js');
	var left_template=require('text!template/left.js');
	var right_template=require('text!template/right.js');
	var menu_template=require('text!template/menu.js');
	var page_template=require('text!template/page.js');
	window.content_list=new lists.list({
			initialize:{
				container:'.ui-layout-center-bd',
				template:list_template,
				servertemplatefiles: servertemplatefiles,
				filter:false,
			},
			menu:{
				container:'.column-hd table tr',
				template:menu_template,
			},
			left:{
				container:'.treeview',
				template:left_template,
				wrap:'ul',
				events:{
				},	
				url:portal_url+'usergroups.json',
				//data:left_data,
			},
			right:{
				defaults:{
					creator:'',
					review_state:'public'
				},
				container:'.column-bd table tbody',
				template:right_template,
				wrap:null,
				saveurl:portal_url+'saveusers',
				events:{
				},
				url:portal_url+'userslist1.json',
				//data:right_data,
				onClick:function(id){
					var model=content_list.options.right.model.icollection.get(id);
					var properties=model.get('properties');
					//console.log(model.toJSON());
					global.render_template(model.toJSON(),properties);				
				}
			},
			page:{
				container:'.right-column .column-ft',
				template:page_template,
			},
	})
	content_list.render();
	$('.action-save').live('click',function(){
		var model=global.model.getModelById(content_list.options.right.model,content_list.options.right.current);
		model.iview.savemodel();
	})
	var setModel=function(name,values){
		var data={};
		data[name]=values;
		var model=global.model.getModelById(content_list.options.right.model,content_list.options.right.current);
		model.set(data);
		$(content_list.options.right.model.el).find('.content-item[id="'+content_list.options.right.model.current+'"]').addClass('active');
	}
	global.event.onModEvent(setModel);
})
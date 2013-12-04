//use for requireJS
define(['lists/main','global/main'],function(){
	if($('body').find('#materialslist').length==0) global.modal.create('materialslist','large-modal');
	window.material_list=new lists.list({
			initialize:{
				container:'#materialslist',
				//template:list_template,
				templatefile:'material/template/list.js',
				wait:true,
				events:{
					'click .action-inset':function(){
						var ids=global.get_array($('input[name=material_list]:checked'),'value');
						article.insert(material_list.options.right.model,ids);
						return false;
					}
				}
			},
			menu:{
				container:'.right-column .column-hd table tr',
				templatefile:'global/templates/menu.js',
			},
			left:{
				container:'.treeview',
				templatefile:'material/template/left.js',
				wrap:'ul',
				events:{
				},	
				url:portal_url+'categories.json?type=material',
				//data:left_data,
			},
			right:{
				defaults:{
				},
				container:'.right-column .column-bd table tbody',
				templatefile:'material/template/right.js',
				wrap:null,
				events:{
					'click .material-insert':function(){
						article.insert(material_list.options.right.model,[this.model.id]);
						return false;
					}
				},
				url:portal_url+'materialslist.json?source=insert',
			},
			page:{
				container:'.right-column .column-ft',
				templatefile:'global/templates/page.js',
			},
			filter:{
				defaults:{
				},
				name:'filter',
				container:'.right-column .column-hd table tr',
				url:portal_url+'material_filterconfig.json',	
				templatefile:'global/templates/filter.js',
			}
	})
	$('.material-lib').live('click',function(){
		global.modal.show('#materialslist');
		return false;
	})
	material_list.render();
})

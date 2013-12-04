requirejs.config({
	waitSeconds:100,
	paths:path,
    shim:shim
});
if(window.location.href.indexOf('-debug')==-1){
	this.console = {
		log:function(){

		},
		info:function(){
			
		}
	};
};
require(['lists/main','lists/mvc','iEditor/main','task/main','article/main','quickupload/main','material/main'],function(){
	window.enablePagination=true;
	window.iCurrentModel=null;
	global.modal.create('task_submitModal','modal-small');
	global.modal.create('materialslist','large-modal');
	window.material_list=new lists.list({
			initialize:{
				container:'#materialslist',
				//template:list_template,
				templatefile:'template/list.js',
				wait:true,
                                filter:false,
				events:{
					'click .action-inset':function(){
						var ids=global.get_array($('input[name=material_list]:checked'),'value');
						article.insert(material_list.options.right.model,ids);
						return false;
					}
				},
				filter:null
			},
			menu:{
				container:'.right-column .column-hd table tr',
				templatefile:'material/template/menu.js',
			},
			left:{
				container:'.treeview',
				templatefile:'material/template/left.js',
				wrap:'ul',
				events:{
				},	
				url:portal_url+'tdms_menus.json',
				// url:portal_url+'categories.json?type=material',
				//data:left_data,
			},
			right:{
				defaults:{
				},
				container:'.right-column .column-bd table tbody',
				templatefile:'template/right.js',
				wrap:null,
				events:{
					'click .material-insert':function(){
						article.insert(material_list.options.right.model,[this.model.id]);
						return false;
					}
				},
				// url:portal_url+'materialslist.json?source=insert&size=20',
				url: portal_url+'tdms_datas.json?size=20',
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
	material_list.render();
	var id=global.getRequest('id');
	task.model=new iTaskModel({id:'task'});
	iEditor.event.init();
	article.event.init();
	article.setinitialselected();
	window.refmaterial_list=new lists.mvc({
			container:'#ref_material',
			templatefile:'template/refmaterial.js',
			type:'grid',
			wrap:'ul',
			events:{
					'click .material-insert':function(){
						article.insert(refmaterial_list.options.model,[this.model.id]);
						return false;
					}
			},
			url:context_url+'refmaterials.json',
			bindchange:true,
			reset:true,
			wait:true,
			addMore:true,
			request:'id',
	})
	article.load(id,function(data){
		article.render(data);
		iEditor.init();
		if(window.location.hash&&window.location.hash!=""){
			$('a[href="'+window.location.hash+'"]').trigger('click');
		}
		if(enablePagination){
			iEditor.addCssRegion();			
		}
        else global.setscrollnano('.doc-layout-center');
	})
	task.getinfo(id,function(data){
		if(data.code==200){
			task.model.set(data.data);
			
		}
		else{
			global.message(data.msg);
		}
		$('.topbar .btn-group').html(task.taskinfoTemplate(task.model.toJSON()));
		window.taskmvc=new lists.mvc({
			container:'.summary-mod .mod-bd',
			templatefile:'template/taskinfo.js',
			type:'custom',
			data:task.model.toJSON(),
			bindchange:false,
		})
		taskmvc.render();
	})
	$('a[href="#material"]').on('click',function(){
		global.modal.show('#materialslist');
		return false;
	})
	refmaterial_list.render();
	window.materialupload=new upload({
		onUpload:function(){
			material_list.load_right();
		},
	})
	$('.btn-preview').on('click',function(){
		if (typeof id == "undefined")
			window.open(context_url+'preview');
		else
			window.open(context_url+'preview?id='+id);
	})
})

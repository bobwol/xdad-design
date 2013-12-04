path.material_lib = iPath+'app/js/web/main/material_lib';
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
require(['lists/main','lists/mvc','global/main','global/global_web', 'text!template/referenceTemplate.js','text!template/list.js','workflow/main'],function(){
    	var itemmodel=new iAppModel({id:"item"});
		global.modal.create_preview_modal('material_preview');
		var url=context_url+'getitem.json'
		global.json.load(url,function(data){
			if(data.code==200){
				itemmodel.set(data.data);
				global.model.model2collection(itemmodel,"results");
				var model=itemmodel.icollection.at(0);
				if(model) global.render_template(model.toJSON(),model.toJSON().properties);
			}
		})
		var setModel=function(name,values){
			var data={};
			data[name]=values;
			var model=itemmodel.icollection.at(0);
			if(model) model.set(data);
		}
		global.event.onModEvent(setModel);
        set_click_event('.ui-layout-right .action-preview',function(event){
            window.open('http://xdad-site.21epub.com/' + context_url.replace(portal_url, '') +'/view');
            return false;
        });
		set_click_event('.action-save',function(event){
			$('.action-save').button('loading');
			itemmodel.set('results',global.model.tree2model(itemmodel,"children","children"));
			itemmodel.setsync=function(){//this function use to prejudge if this model need to sync with dateserver
				return true;
			};
			itemmodel.seturl=function(method){
				var url=context_url+'saveitems.json';
				if(method=='update'){
					return url;
				}
			}
			global.model.save(itemmodel,null,function(data){
				if(data.code==200)
					//global.message('success',data.msg);
					$('.action-save').button('loading');
					$('form#edit-form').submit();
			});
		})
		if(context_type!='FluidTopic'&&context_type!='ImagesTopic') return;
	    var referenceTemplate=require('text!template/referenceTemplate.js');
		$('.ui-layout-center-bd form').append(referenceTemplate);
		window.reference=new lists.mvc({
			defaults:{
				note:null,
				version:null,
				newestversion:null,
			},
			container:'.reference-area .ref',
			templatefile:'template/referenceItem.js',
			servertemplatefiles:servertemplatefiles,
			type:'grid',
			wrap:null,
			events:{
				'click a.del':function(){
					var view=this;
					lists.confirmDelete(function(){
						view.model.destroy();
						reference.saveAll(function(data){
							if(data.code==200){
								global.message('success',data.msg);
								var d=data.data;
								console.log(d);
							}else{
								global.message('error',data.msg);
							}
						});
					})
					return false;
				}
			},
			url:context_url+'getquotes',
			saveallurl:context_url+'setquotes',
			bindchange:true,
			reset:true,
			wait:true,
			addMore:true,
			inlineEdit:true,
			onChange:function(id){
				reference.saveAll(function(data){
					if(data.code==200){
						global.message('success',data.msg);
						var d=data.data;
						console.log(d);
					}else{
						global.message('error',data.msg);
					}
				});
			}
	    })
	    reference.render();
	if($('body').find('#materialslist').length==0) global.modal.create('materialslist','large-modal');

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
						if(ids.length==0) return;
						_.each(ids,function(id){
							var model=material_list.options.right.model.icollection.get(id);
							reference.options.model.icollection.add(model.toJSON());
						})
						reference.saveAll(function(data){
							if(data.code==200){
								global.message('success',data.msg);
								var d=data.data;
								console.log(d);
							}else{
								global.message('error',data.msg);
							}
						});
						return false;
					},
					'change select#material_lib_id':function(){
						var material_lib_id = $(this).val();
						material_list.options.left.url = portal_url + "tdms_menus.json?id=" + material_lib_id;
						material_list.options.left.model.icollection.reset()
						material_list.options.right.model.icollection.reset()
						material_list.load_left();
					}
				}
			},
			menu:{
				container:'.right-column .column-hd table tr',
				templatefile:'material_lib/template/menu.js',
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
				templatefile:'material/template/right.js',
				wrap:null,
				events:{
					'click .material-insert':function(){
						var ids=[this.model.id];
						if(ids.length==0) return;
						_.each(ids,function(id){
							var model=material_list.options.right.model.icollection.get(id);
							reference.options.model.icollection.add(model.toJSON());
						})
						reference.saveAll(function(data){
							if(data.code==200){
								global.message('success',data.msg);
								var d=data.data;
								console.log(d);
							}else{
								global.message('error',data.msg);
							}
						});
						return false;
					}
				},
				// url:portal_url+'materialslist.json?source=insert',
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
	$('.material-lib').live('click',function(){
		global.modal.show('#materialslist');
		return false;
	})
	material_list.render();
	// $('#materialslist div.modal-header').append('<select style="position:absolute; top: 8px; left: 110px; width:auto;" id="material_lib_id"><option value="1">TDMS</option><option value="2">S1000D</option><option value="3">SBOM</option><option value="4">PPT</option><option value="5">教材编制</option></select>');
	workflow.load();
})

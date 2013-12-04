path.material_lib=iPath+'app/js/web/main/material_lib';
requirejs.config({
	waitSeconds:100,
	paths:path,
    shim:shim
});
require(['lists/main']	,function(lists){

	var query=(document.location.search?("?"+document.location.search.replace('?',"")):"");
	// var query=global.getRequest();
	window.content_list=new lists.list(
		{
		    "initialize": {
		        "container": ".ui-layout-center-bd",
		        "templatefile": "material_lib/template/list.js" ,
		        "servertemplatefiles": false,
		        "left": true,
		        "right": true,
		        "menu": true,
		        "filter": false,
		        "page": true,
		        "search": true,
		        "wait": true,
		        "request":null
		    },
		    "left": {
		        "container": ".list-tree",
		        "className": "tree-item",
		        "url": portal_url + "tdms_menus.json" + (query?query:''),
		        "templatefile": "material_lib/template/left.js" ,
		        "wrap": "ul",
		        "rightpanel": true,
		        "type": "tree"
		    },
		    "right": {
		        "container": ".list-content table tbody",
		        "className": "content-item",
		        "url": portal_url + "tdms_datas.json?size=20",
		        "templatefile": "material_lib/template/right.js" ,
		        "wrap": false,
		        "rightpanel": true,
		        "type": "grid"
		    },
		    "menu": {
		        "container": ".right-column .column-hd table tr",
		        "templatefile": "material_lib/template/menu.js" ,
		    },
		    "filter": {
		        "container": ".list-menu table > thead > tr",
		        "url": "http://ca1.21epub.com/filterconfig.json",
		        "templatefile": "global/templates/filter.js"
		    },
		    "page": {
		        "container": ".list-page",
		        "templatefile": "global/templates/page.js"
		    }
		}
	)
	content_list.render();

	$("select").on("change", function() {
		 // window.location.href= portal_url + 'material_lib?id=' + $(this).val();
		 content_list.options.left.url = portal_url + "tdms_menus.json?id=" + $(this).val();
		 content_list.options.left.model.icollection.reset()
		 content_list.options.right.model.icollection.reset()
		 content_list.render();
	});
})
path.dashboard_updated=iPath+'app/js/web/main/dashboard_updated';
requirejs.config({
	waitSeconds:100,
	paths:path,
    shim:shim
});
require(['lists/main'],function(lists){
	window.content_list=new lists.list(

		{
		    "initialize": {
		        "container": ".ui-layout-center-bd",
		        "templatefile": "global/templates/list_single_1.js",
		        "servertemplatefiles": "[\"categories_template.js\",\"material_categories_template.js\",\"channels_template.js\",\"page_support_template.js\",\"settings_template.js\",\"category_support_template.js\",\"update_template.js\",\"top_setting_template.js\"]",
		        "request": false,
		        "left": false,
		        "right": true,
		        "menu": true,
		        "filter": false,
		        "page": true,
		        "search": true,
		        "wait": false
		    },
		    "left": {
		        "container": ".list-tree",
		        "className": "tree-item",
		        "url": portal_url + "contentstree.json?source=manage",
		        "templatefile": "global/templates/left.js",
		        "wrap": "ul",
		        "rightpanel": true,
		        "type": "tree"
		    },
		    "right": {
		        "container": ".list-content table tbody",
		        "className": "content-item",
		        "url": portal_url + "updatedslist.json",
		        "templatefile": "web/main/dashboard_updated/template/right.js",
		        "wrap": false,
		        "rightpanel": true,
		        "type": "grid"
		    },
		    "menu": {
		        "container": ".right-column .column-hd table tr",
		        "templatefile": "global/templates/menu.js"
		    },
		    "filter": {
		        "container": ".list-menu table > thead > tr",
		        "url": portal_url + "filterconfig.json",
		        "templatefile": "global/templates/filter.js"
		    },
		    "page": {
		        "container": ".list-page",
		        "templatefile": "global/templates/page.js"
		    }
		}

	)
	content_list.render();

})
define(['lists/main', 'global/main','quickupload/main','text!material/template/list.js','text!material/template/left.js','text!material/template/right.js','text!material/template/filter.js','text!material/template/page.js','text!material/template/menu.js','text!material/template/listforchange.js','text!material/template/rightforchange.js'], function() {
	window.material = {
		listforinsert : function(callback,opts) {
			if(!opts) opts={};
			$defaults={
				onlistload:null,
				onleftload:null,
				onrightload:null,
				onfilterload:null
			}
			var options=$.extend(true,{},$defaults, typeof opts == 'object' && opts);
			if ($('#materialslistforinsert').length == 0)
				global.modal.create('materialslistforinsert', 'large-modal');
			var material_list = new lists.list({
				initialize : {
					container : '#materialslistforinsert',
					templatefile : 'material/template/list.js',
					wait : true,
					events : {
						'click .action-inset' : function() {
							var ids = global.get_array($('input[name=material_list]:checked'), 'value');
							if (callback)
								callback(material_list, ids);
							return false;
						}
					},
					onUpdate:options.onlistload
				},
				menu : {
					container : '.right-column .column-hd table tr',
					templatefile : 'material/template/menu.js',
				},
				left : {
					container : '.treeview',
					templatefile : 'material/template/left.js',
					wrap : 'ul',
					events : {
					},
					url : portal_url + 'categories.json?type=material',
					onUpdate:options.onleftload
				},
				right : {
					defaults : {
					},
					container : '.right-column .column-bd table tbody',
					templatefile : 'material/template/right.js',
					wrap : null,
					events : {
						'click .material-insert' : function() {
							if (callback)
								callback(material_list, [this.model.id]);
							return false;
						}
					},
					url : portal_url + 'materialslist.json?source=insert&size=20',
					onUpdate:options.onrightload
				},
				page : {
					container : '.right-column .column-ft',
					templatefile : 'material/template/page.js',
				},
				filter : {
					defaults : {
					},
					name : 'filter',
					container : '.right-column .column-hd table tr',
					url : portal_url + 'material_filterconfig.json',
					templatefile : 'material/template/filter.js',
					onUpdate:options.onfilterload
				}
			})
			material_list.render();
			materialupload=new upload({
				onUpload:function(){
					material_list.load_right();
				},
			})
		},
		listforchange : function(callback,opts) {
			if(!opts) opts={};
			$defaults={
				onlistload:null,
				onleftload:null,
				onrightload:null,
				onfilterload:null
			}
			var options=$.extend(true,{},$defaults, typeof opts == 'object' && opts);
			if ($('#materialslistforchange').length == 0)
				global.modal.create('materialslistforchange', 'large-modal');
			var material_list = new lists.list({
				initialize : {
					container : '#materialslistforchange',
					templatefile : 'material/template/listforchange.js',
					wait : true,
					events : {
						'click .action-inset' : function() {
							var ids = global.get_array($(material_list.options.list.container).find('input[name=material_list]:checked'), 'value');
							if (callback)
								callback(material_list, ids);
							return false;
						}
					},
					onUpdate:options.onlistload
				},
				menu : {
					container : '.right-column .column-hd table tr',
					templatefile : 'material/template/menu.js',
				},
				left : {
					container : '.treeview',
					templatefile : 'material/template/left.js',
					wrap : 'ul',
					events : {
					},
					url : portal_url + 'categories.json?type=material',
					onUpdate:options.onleftload
				},
				right : {
					defaults : {
					},
					container : '.right-column .column-bd table tbody',
					templatefile : 'material/template/rightforchange.js',
					wrap : null,
					events : {
						'click .material-change' : function() {
							if (callback)
								callback(material_list, [this.model.id]);
							return false;
						}
					},
					url : portal_url + 'materialslist.json?source=insert&size=20',
					onUpdate:options.onrightload
				},
				page : {
					container : '.right-column .column-ft',
					templatefile : 'material/template/page.js',
				},
				filter : {
					defaults : {
					},
					name : 'filter',
					container : '.right-column .column-hd table tr',
					url : portal_url + 'material_filterconfig.json',
					templatefile : 'material/template/filter.js',
					onUpdate:options.onfilterload
				}
			})
			material_list.render();
			materialupload=new upload({
				onUpload:function(){
					material_list.load_right();
				},
			})
		}
	}
})

path.topic_task=iPath+'app/js/web/main/topic_task';
path.process=iPath+'app/js/web/process';
requirejs.config({
	waitSeconds:100,
	paths:path,
    shim:shim
});
require(['lists/main','lists/mvc','datepicker','text!'+iPath+'userslist.json'],function(lists){
	userslist_json=require('text!'+iPath+'userslist.json');
	window.userslist=JSON.parse(userslist_json);
	userslist=userslist.code==200?userslist.data.results:[];
	global.modal.create('processManagement','modal-small');
	window.content_list=new lists.list(
		{
		    "initialize": {
		        "container": ".ui-layout-center-bd",
		        "templatefile": "global/templates/list_single_1_nocover.js",
		        "servertemplatefiles": "[\"app/js/web/main/topic_task/template/info_properties.js\"]",
		        "request": false,
		        "left": false,
		        "right": true,
		        "menu": true,
		        "filter": false,
		        "page": true,
		        "search": false,
		        "wait": true,
		        "request": 'id'
		    },
		    "left": {
		        "container": ".list-tree",
		        "className": "tree-item",
		        "url": portal_url + "contentstree.json?source=manage",
		        "templatefile": "global/templates/left.js",
		        "wrap": "ul",
		        "rightpanel": false,
		        "type": "tree"
		    },
		    "right": {
		        "container": ".list-content table tbody",
		        "className": "content-item",
		        "url": portal_url + "processeslist.json?source=manage",
		        "saveurl":function(){
		        	return portal_url+'setprocess.json?id='+content_list.options.right.current;
		        },
		        "templatefile": "topic_task/template/right.js",
		        "wrap": false,
		        "rightpanel": true,
		        "type": "grid",
		        "events":{
		        	'click .list-active':function(){
		        		var view=this;
		        		var url=portal_url+ 'operateprocess.json?id='+this.model.id+'&type=active';
		        		global.json.load(url,function(data){
		        			if(data.code==200){
		        				global.message('success',data.msg);
		        				view.model.set(data.data[0]);
		        			}
		        			else
		        				global.throwerror(data.msg);
		        		})
		        		return false;
		        	},
		        	'click .list-hangup':function(){
		        		var view=this;
		        		var url=portal_url+ 'operateprocess.json?id='+this.model.id+'&type=hangup';
		        		global.json.load(url,function(data){
		        			if(data.code==200){
		        				global.message('success',data.msg);
		        				view.model.set(data.data[0]);
		        			}
		        			else
		        				global.throwerror(data.msg);
		        		})
		        		return false;		        		
		        	}
		        }
		    },
		    "menu": {
		        "container": ".main-column .column-hd.list-menu",
		        "templatefile": "topic_task/template/menu.js"
		    },
		    "filter": {
		        "container": ".list-menu table > thead > tr",
		        "url": portal_url + "filterconfig.json",
		        "templatefile": "global/templates/filter.js"
		    },
		    "page": {
		        "container": ".list-page",
		        "templatefile": "global/templates/page.js"
		    },
		    "rightpanel":{
		    	events:{
		    		'click .action-modal':function(model,options){
		    			var taskmanage=new lists.mvc({
								container:'#processManagement',
								templatefile:'process/template/processmanagement.js',
								events:{
									'click .btn':function(){
										var data=global.serializeValue('#processManagement');
										model.set(data);
										content_list.render_template(model,content_list.options.right);
										model.iview.savemodel(function(){
											
										})
										delete taskmanage;
										$('#processManagement').empty();
										return false;
									}
								},
								onUpdate:function(){
									datapicker_load({format:'yyyy-mm-dd',autoclose:true});
								},
								data:model.toJSON(),
						});
						taskmanage.render();
						global.modal.show('#processManagement');
						return false;
		    		}
		    	}
		    }
		}
	)
	content_list.render();
	window.project={
		getmembers:function(){
			return [{id: "1user",name: "1user"},{id: "2user",name: "2user"}];
		}		
	}

	// 设置专题的人员及起止日期



	// 专题的预览/启动/关闭

})
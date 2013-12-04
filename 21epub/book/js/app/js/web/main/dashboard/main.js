requirejs.config({
	waitSeconds : 100,
	paths : path,
	shim : shim
});
require(['lists/main', 'lists/mvc'], function(lists) {
	window.content_list = new lists.list({
		"initialize" : {
			"container" : ".ui-layout-center-bd",
			"templatefile" : "template/list.js",
			"request" : false,
			"left" : false,
			"right" : true,
			"menu" : true,
			"filter" : false,
			"page" : true,
			"search" : true,
			"wait" : true
		},
		"right" : {
			"container" : ".notification-list",
			"className" : "content-item",
			"url" : portal_url + "mynoticeslist.json",
			"templatefile" : "template/right.js",
			"wrap" : 'ul',
			"rightpanel" : false,
			"type" : "grid",
			"onClick" : function(id) {
				var model = content_list.options.right.model.icollection.get(id);
				var detail = new lists.mvc({
					container : '.right-column .column-bd .content',
					templatefile : 'template/detail.js',
					data : model.toJSON()
				})
				detail.render();

				if (model.get('status')=='unread'){
					var ret={};
					ret['id'] = model.get('id');
					global.json.post(portal_url + "operatenotice",ret, function(data){
						if(data.code==200){
							var d=data.data.results[0];
							var id=d.id;
							global.model.getModelById(content_list.options.right.model,id).set(d);

							var msgNum = parseInt($('#unreadMsgNum').attr('data-num'));
							$('#unreadMsgNum').text('('+(msgNum-1)+')');
							$('#unreadMsgNum').attr('data-num', msgNum-1);
							// $('li.unread#'+model.get('id').toString()).attr('class','content-item')
						}else{
							global.message('error',data.msg);
						}
					});
				}
			}
		},
		"menu" : {
			"container" : ".left-column .column-hd",
			"templatefile" : "template/menu.js"
		},
		"filter" : {
			// "container": ".list-menu table > thead > tr",
			// "url": "http://ca-dev.21epub.com/filterconfig.json",
			// "templatefile": "global/templates/filter.js"
		},
		"page" : {
			"container" : ".list-page",
			"templatefile" : "global/templates/page.js"
		}
	})
	content_list.render();
})
path.richtext = iPath + 'app/js/web/main/richtext';
requirejs.config({
	waitSeconds : 100,
	paths : path,
	shim : shim
});
require(['lists/main', 'lists/mvc', 'iEditor/main', 'quickupload/main', 'material/main'], function() {
	global.switch.rightpanelclear=false;
	var componentlist = new lists.mvc({
		"container" : "#sB",
		"servertemplatefiles" : false,
		"request" : false,
		"className" : "content-item",
		"url" : portal_url + "componentslist.json?insert=true",
		"templatefile" : "richtext/template/component.js",
		"wrap" : "ul",
		"search" : false,
		"wait" : true,
		"addmore" : true,
		"rightpanel" : false,
		"type" : "grid",
		"events":{
			'click .list-insert':function(){
				iEditor.insert([this.model.toJSON()]);
			}
		}
	})
	var textmvc = new lists.mvc({
		"container" : ".main-column .content",
		"servertemplatefiles" : false,
		"request" : false,
		"className" : "content-item",
		"url" : context_url+"getbody",
		"templatefile" : "richtext/template/body.js",
		"wrap" : false,
		"search" : false,
		"wait" : true,
		"addmore" : false,
		"rightpanel" : false,
		"type" : "tree",
		"bindchange":false,
		"onUpdate":function(){
			var id=$('section.textbody > acticle').attr('id');
			iEditor.initForRichtext('mce_0');
			$('.action-save').button('reset');
			$('.action-save').removeAttr('disabled');
		},
		'events':{
			'a click':function(){
				return false;
			}
		},
		saveurl:context_url+'setbody'
	})
	textmvc.render();
	componentlist.render();
	material.listforinsert(function(material_list, ids) {
		if(ids&&ids.length>0){
			ids=_.map(ids,function(id){
				return material_list.options.right.model.icollection.get(id).toJSON();
			})
			iEditor.insert(ids);
		}
	});

	$('a[href="#sC"]').on('click', function() {
		global.modal.show('#materialslistforinsert');
	})
	global.actionsave=global.autosave=function(callback){
		var content=$('section.textbody > article').html();
		textmvc.options.model.icollection.at(0).set('body',content);
		var id=textmvc.options.model.icollection.at(0).id;
		textmvc.saveone(id,function(data){
			global.change=false;
			callback();
		});
	}
})
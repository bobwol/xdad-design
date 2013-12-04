$(function(){
	$('body').append(global.modal.create('upload','medium-modal'));
	$('#upload').css('z-index','2000');
});

(function(win){
	win.upload={
		init:function(){
			var url=portal_url+'medias/miniupload';
			// var data='typeupload=interaction.image';
			// url=url+'?'+data;
			var UIDiv=$('.upload-hd');
			global.html.load(url,function(data){
				UIDiv.html(data);
			})
		}
	}
})(window);

function addPage(){
	material.materialslistforinsert(function(data){
		if(data.code==200){
			var d=data.data;
			material_list.model.clear();
			material_list.model.icollection.reset();
			material_list.model.set(d);
			global.model.model2collection(material_list.model,"results");
			material_list.list.render_right();
			material_list.list.render_page();						
		}
		else global.throwerror(data.msg);	
	});
}

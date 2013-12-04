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
(function(upload){
	upload.event={
		init:function(){
			this.onUploadModal();
		},
		onUploadModal:function(){
			set_click_event('.action-upload',function(){
				$('#upload.modal').html(upload.modal_template());
				upload.init();
				global.modal.show('#upload');
				return false;
			})
		}
	};
	upload.event.init();
})(upload);
(function(upload){
upload.modal_template=_.template(
	[
'	  <div class="modal-header">',
'	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'	    <h3>上传素材</h3>',
'	  </div>',
'	  <div class="modal-body">',
'	    <div class="upload-hd">',
'	      <button class="btn btn-small btn-primary" type="button">上传素材</button>',
'	      <p>提示：每次最多可以批量上传二十张照片，按着 “command” 键可以一次选择多张照片。</p>',
'	    </div>',
'	    <div class="upload-ft">',
// '	      <button class="btn btn-small" type="button">取消上传</button>',/div>',
'	  </div>',
	].join("")
);
})(upload);
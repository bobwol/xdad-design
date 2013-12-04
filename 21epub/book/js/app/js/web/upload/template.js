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
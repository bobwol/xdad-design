define(['global/main','quickupload/fileuploader','quickupload/helpers','quickupload/jquery.uploadify','quickupload/swfobject'],function(){
	var upload_template=_.template(
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

	window.upload=function(options){
		this.defaults={
			url:portal_url+'medias/miniupload',
			template:upload_template,
			onUpload:null,
		}
		this.options=options;
		var $defaults=$.extend({},this.defaults);
		this.options=$.extend(true,{},$defaults, typeof options == 'object' && options);
	    this.init();
	}
	window.upload.prototype={
		init:function(){
			$('body').append(global.modal.create('upload','medium-modal'));
			$('#upload').css('z-index','2000');
			$('#upload.modal').html(this.options.template());
			var url=this.options.url;
			var UIDiv=$('.upload-hd');
			if(this.options.onUpload) window.addPage=this.options.onUpload;
			global.html.load(url,function(data){
				UIDiv.html(data);
				set_click_event('.action-upload',function(){
					global.modal.show('#upload');
					return false;
				})
			})
		}
	}
})

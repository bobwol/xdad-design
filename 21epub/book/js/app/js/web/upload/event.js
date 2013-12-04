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

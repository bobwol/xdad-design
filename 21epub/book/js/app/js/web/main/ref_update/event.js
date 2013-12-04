(function(ref_resource_update){
	ref_resource_update.event={
		init:function(){
			this.onPreviewCurrent();
			this.onPreviewNewest();
		},
		onPreviewCurrent:function(){
			set_click_event('.material_preview_current',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var model=ref_resource_update.model.icollection.get(id);
				$('#material_preview').html(global.template.preview(model.toJSON()));	
				global.modal.show('#material_preview');	
				return false;	
			})	
		},
		onPreviewNewest:function(){
			set_click_event('.material_preview_newest',function(){
				var id=$(this).parents('.content-item').first().attr('id');

				var model=ref_resource_update.model.icollection.get(id);
				$('#material_preview').html(global.template.preview(model.toJSON()));	
				global.modal.show('#material_preview');	
				return false;	
			})	
		}
	}
})(ref_resource_update);

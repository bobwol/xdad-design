(function(material){
	material.event={
		init:function(){
			//this.onListInsert();
			this.onPreview();
			this.onListPreview();
		},
		onPreview:function(){
			set_click_event('.material_preview',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var model=material.model.icollection.get(id);
				$('#material_preview').html(global.template.preview(model.toJSON()));	
				$('#material_preview').show();	
				return false;	
			})
		},
		onListPreview:function(){
			set_click_event('.material_list_preview',function(){
				var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				var model=material_list.model.icollection.get(id);
				$('#material_preview').html(global.template.preview(model.toJSON()));	
				global.modal.show('#material_preview');	
				return false;	
			})			
		}
	}

})(material);	
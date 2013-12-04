(function(component){
	component.event={
		init:function(){
			this.onInsert();
			this.onPreview();
		},
		onInsert:function(){
			set_click_event('.component_insert',function(){
				var id=$(this).parent().parent().parent().parent().attr('id');
				component.insert(id);
				global.change=true;
				return false;
			})
		},
		onPreview:function(){
			set_click_event('.component_preview',function(){
				var id=$(this).parent().parent().parent().parent().attr('id');
				var model=component.model.icollection.get(id);
				$('#material_preview').html(global.template.preview(model.toJSON()));	
				global.modal.show('#material_preview');	
				return false;	
			})
		}
	}

})(component);
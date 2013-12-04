(function(win){
	win.photogallery={
		sortable:function(callback){
			$('.gallery-list .content').sortable({
				handle:'a.action-move',
				items:'li',
				start:function(event,ui){
					startposition = ui.item.prevAll().length + 1;
				},
		        update: function(event, ui) {
					if(startposition!=-1){
						var delta=(ui.item.prevAll().length + 1)-startposition;
						id=$(ui.item).attr('id');
						callback(id);
						//var iHandlemodel=iElementlist.get(id);
						//iHandlemodel.trigger('dom_sort',delta);
					}
		        }		
			});
		},
		displayimage:function(id){
			var model=photogallery.model.icollection.get(id);
			$('#material_preview').html(global.template.preview(model.toJSON()));	
			global.modal.show("#material_preview");	
			return false;
		}
	};
})(window);
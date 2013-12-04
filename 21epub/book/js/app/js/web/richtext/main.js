(function(win){
	win.bodycontent={
		sortable:function(callback){
			$('.tabview.tab-component > ul').sortable({
				handle:'div.action-move > a',
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
		}
	};
})(window);
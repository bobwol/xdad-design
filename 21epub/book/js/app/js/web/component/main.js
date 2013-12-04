(function(win){
	win.component={
		insert:function(id){
			var iHandlemodel=component.model.icollection.get(id);
			var content=iHandlemodel.get('content');
			content=content+'<p><br></p>';
			tEditor.insert(content);
		},
		renderinfo:function(id){
			var model=component.list_model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		}
	};
})(window);
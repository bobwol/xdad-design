(function(win){
	win.project={
		renderinfo:function(id){
			var model=project.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties,true);
			$('.ui-layout-right').find('.mod[id="'+id+'"]').find('.action-modal').each(function(){
				var modalname=$(this).attr('data-target');
				var attr=$(this).attr('data-attr');
				$(this).on('click',function(){
					global.modal.openDataModal('#'+modalname,model,project[modalname+'_template']);
				})
			})
		},
		getmembers:function(){
			var model=project.model.icollection.get(project.model.current);
			return model.get('members');
		}
	};
})(window);
(function(win){
	win.process={
		renderinfo:function(id){
			var model=process.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties,true);
			$('.ui-layout-right').find('.mod[id="'+id+'"]').find('.action-modal').each(function(){
				var modalname=$(this).attr('data-target');
				var attr=$(this).attr('data-attr');
				$(this).on('click',function(){
					global.modal.openDataModal('#'+modalname,model,process[modalname+'_template']);
					datapicker_load({format:'yyyy-mm-dd',autoclose:true});
				})
			})
		},
	};
})(window);
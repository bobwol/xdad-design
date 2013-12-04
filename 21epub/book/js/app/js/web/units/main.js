(function(win){
	win.units={
		renderinfo:function(id){
			var model=units.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		},
		pendingAction:function(id){
			var executeArray = new Array("publish","retract");
			var rejectArray = new Array("reject","reject_retract");
			if(id=='preview'){
				return "预览"
			}else if(executeArray.indexOf(id)>=0){
				return "执行"
			}else if(rejectArray.indexOf(id)>=0){
				return "拒绝"
			}
		}
	};
})(window);
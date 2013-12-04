(function(units){
	units.event={
		init:function(){
			//this.onUpdateChannels();
		},
		onUpdateChannels:function(){
			set_click_event('.action-update-channels',function(){
				var data=global.serializeValue('.publish-mod');
				units.updateChannels(data);
				return false;
			})
		}
	}
})(units);
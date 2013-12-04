(function(bodycontent){
	bodycontent.event={
		_init:function(){
			
		},
		save_event:function(){
			set_click_event('.save.bodycontent',function(){
				bodycontent.setbody();
			})
		}
	}
})(bodycontent);
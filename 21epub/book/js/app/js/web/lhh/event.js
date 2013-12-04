(function(lhh){
	lhh.event={
		init:function(){
			this.onZoomout();
			this.onInsert();
			this.onSelectAction();
		},
		onZoomout:function(){
			set_click_event('a.action-preview',function(){
				var id=$(this).parent().parent().attr('id');
				lhh.displayimage(id);
				return false;
			})
		},
		onInsert:function(){
			set_click_event('.lhh_list_insert',function(){
				var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				material.lhh_insert([id]);
				global.change=true;
				return false;
			})
		},
		onSelectAction:function(){
			set_click_event('button.action-selectall',function(){
				$('.gallery-list').find('input[type="checkbox"]').attr('checked','checked');
			})
			set_click_event('button.action-unselectall',function(){
				$('.gallery-list').find('input[type="checkbox"]').removeAttr('checked');
			})
		}
	}
})(lhh);
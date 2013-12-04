(function(versions_list){
	versions_list.event={
		init:function(){
			this.onSaveNew();
			this.onRevert();
			this.onView();
			this.onEdit();
			this.onPreview();
		},
		onSaveNew:function(){
			set_click_event('a[href="#savenew"]',function(){
				global.json.load(context_url + "savenewversion.json",function(data){
					if(data.code==200){
						var d=data.data;
						versions_list.model.set(d);
						versions_list.model.icollection.reset();
						global.model.model2collection(versions_list.model,"results");
						versions_list.list.render_right();
						versions_list.list.render_page();
						versions_list.list.render_menu();
					}else{
						global.message('error',data.msg);
					}
				});
				return false;
			})	
		},
		onRevert:function(){
			set_click_event('a[href="#revert"]',function(){
				var ret={};
				ret['version_id']=$(this).parent().parent().parent().parent().parent().attr('id');
				global.json.post(context_url + "revertversion.json",ret, function(data){
					if(data.code==200){
						var d=data.data;
						versions_list.model.set(d);
						versions_list.model.icollection.reset();
						global.model.model2collection(versions_list.model,"results");
						versions_list.list.render_right();
						versions_list.list.render_page();
						versions_list.list.render_menu();
					}else{
						global.message('error',data.msg);
					}
				});
				return false;
			})		
		},
		onView:function(){
			set_click_event('a[href="#view"]',function(){
				return false;
			})
		},
		onEdit:function(){
			set_click_event('a[href="#edit"]',function(){
				return false;
			})
		},
		onPreview:function(){
			set_click_event('a[href="#preview"]',function(){
				return false;
			})
		}
	}
})(versions_list);

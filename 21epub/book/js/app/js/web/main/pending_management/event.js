(function(pending_list){
	pending_list.event={
		init:function(){
			// this.onPreview();
			this.onExcute();
			this.excute();
			// this.onRoleSetting();
		},
		onPreview:function(){
			set_click_event('.list-preview',function(event){
				var url=$(this).attr('href');
				global.html.load(url,function(data){
					$('#material_preview').html(global.template.preview({title:document.title,preview:data,description:null}));
					global.modal.show('#material_preview');	
				})
				return false;
			})
		},
		onExcute:function(){
			set_click_event('.list-workflow',function(){
				var id = $(this).parent().parent().parent().parent().parent().attr('id');
				var form_model = {};
				form_model.title=$(this).text();
				form_model.id=id
				form_model.name=$('#'+id+' span.title').text();
				form_model.transition=$(this).attr('id');
				$('#action_modal').html(global.template.operate_modal(form_model));
				global.modal.show('#action_modal');	
				return false;
			})
		},
		excute:function(){
			set_click_event('#action_modal button.btn',function(){

				var workflow_data=global.serializeForm('#action_modal form');
				console.info(workflow_data);


				global.confirmDelete(function(){
					global.model.remove(units.model,[id],function(data){
						if(data.code==200) global.message('success',data.msg);
					});
				});
				global.modal.hide('#action_modal');
				return false;
				// var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				// global.confirmDelete(function(){
				// 	global.model.remove(user.list_model,[id],function(data){
				// 		if(data.code==200) global.message('success',data.msg);
				// 	});
				// });
				// return false;
			})
		}
		// onRoleSetting:function(){

		// }
	}
})(pending_list);

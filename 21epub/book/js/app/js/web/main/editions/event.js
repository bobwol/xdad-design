(function(editions_list){
	editions_list.event={
		init:function(){
			this.onSave();
			this.onCreateEdition();
			this.createEdition();
		},
		onSave:function(){
			set_click_event('.action-save',function(event){
				if(editions_list.model.current){

					var checkarray=new Array();
					$('.categories input[name=values]:checked').each(function(){
				            checkarray.push($(this).val());
				    })

					var url=context_url+editions_list.model.current+'/setcategories';
					var ret={'model':JSON.stringify(checkarray)};

					global.json.post(url,ret,function(){
						editions_list.refresh();
					});
				}
			})
		},
		onCreateEdition:function(){
			set_click_event('a[href="#createEdition"]',function(){
				$('#createEdition').html(edition.create_edition());
				global.modal.show('#createEdition');
				return false;
			})
		},
		createEdition:function(){
			set_click_event('div.modal#createEdition  button.btn',function(){
				edition.create_edtion();
				return false;
			})

		}
	}
})(editions_list);

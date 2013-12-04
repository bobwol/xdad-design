(function(win){
	win.edition={

		create_edtion:function(){
			var ret={};
			global.json.post(context_url + "createedition.json",ret,function(data){
				if(data.code==200){
					editions_list.refresh();
					$('#createEdition').empty();
					global.modal.hide('#createEdition');
				}else{
					global.message('error',data.msg);
				}
			});
		},
	};
})(window);
epub.app(function(){
	epub["import"]('epub.modules.bacon@1.0');

	$(function(){
		$('#bt1').click(function(){
			
			$("#single_line_left").bacon({
				"container":"#container"
				// 'flows':["#single_line_left1"]
			});
		})
		
	})

})
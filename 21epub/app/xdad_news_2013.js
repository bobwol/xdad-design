epub.app(function(){
	epub["import"]('epub.modules.tmpl@1.0');
	epub["import"]('epub.modules.page@4.0');
	$(function(){
		var url = "workslist.json?size=20&page=";
		var template = [
				'<ul>',
				'{{each(i, name) data.results}}',
					'<li>',
					'	<span class="title">',
					'		<a href=".${target_id}/view">${title}</a>',
					'	</span>',
					'	<span class="time">${created}</span>',
					'</li>',
				'{{/each}}',
				'</ul>'
		].join('');
		var $content = $('.listview.news-list');
		var catchData = {};
		var isFirst = true;
		var numpages = 1;
		
		function render (no,callback){

			var urlA = url+no;
			console.log(urlA)
			var data = catchData[urlA];
			if(data){
				$content.html("");
				$.tmpl(template,data).appendTo($content);
				callback();
			}else{
				$.ajax({
		            dataType: 'json',
		            type: 'GET',
		            url: urlA,
		            success: function (data, textStatus, jqXHR) {
		                var data = data;
		                // console.log(isFirst)

	                	$content.html("");
	               		$.tmpl(template,data).appendTo($content);	

		                if(isFirst){
			                numpages = data['data']['numpages'];
							isFirst = false;
		                };
		                catchData[urlA] = data;
		                callback();
		            },
		            error: function() {
		               
		            }
		        });
			};
		};

		render(1, function(){
				$('#pagination').page({
					totalPages:numpages||1,
					goto:function(no){
						render (no,function(){
							$.each($('div.action a'), function(){$(this).attr('href', $(this).attr('href').replace('ca-admin','ca-site'))});
						});
					}
				});	
				if($('li.active ul li.active a').text()){
					$('section h1').html('<h1>' + $('li.active ul li.active a').text() + '</h1>');
				}
		});
		
	});

})

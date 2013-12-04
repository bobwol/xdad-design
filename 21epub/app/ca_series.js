epub.app(function(){
	epub["import"]('epub.modules.tmpl@1.0');
	epub["import"]('epub.modules.page@4.0');
	$(function(){
		var url = "getlhhs?page=";
		var template = [
				'<ul>',
				'{{each(i, name) data.results}}',
				'	<li class="single">',
				'		<div class="cover">',
				'			<a href="${target_id}/info.html">',
				'				<img src="${thumbnail}" alt="">',
				'			</a>',
				'			<div class="action">',
				'				<ul>',
				'					<li>',
				'						<a href="${target_id}/info.html" >查看</a>',
				'					</li>',
				'					<li>',
				'						<a href="${target_id}/read.html">阅读</a>',
				'					</li>',
				'				</ul>',
				'			</div>',
				'			<div class="overlay"></div>',
				'		</div>',
				'		<div class="desc">',
				'			<h4><a href="javascript:void(0);">《${title}》</a></h4>',
                '      		<ul>',
				'                <li>${publisher}</li>',
				'          </ul>',
				'		</div>',
				'	</li>',
				'{{/each}}',
				'</ul>'
		].join('');
		var $content = $('.list.active');
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

		$('li.single .cover').live('mouseover',function(){$(this).children('.action, .overlay').show();});
		$('li.single .cover').live('mouseout',function(){$(this).children('.action, .overlay').hide();});

		render(1, function(){
				$('#pagination').page({
					totalPages:numpages||1,
					goto:function(no){
						render (no,function(){
							$.each($('div.action a'), function(){$(this).attr('href', $(this).attr('href').replace('ca-admin','ca-site'))});
						});
					}
				});			
		});
		
	});

})

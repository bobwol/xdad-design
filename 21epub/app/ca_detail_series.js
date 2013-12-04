epub.app(function(){
	epub["import"]('epub.modules.tmpl@1.0');
	epub["import"]('epub.modules.page@4.0');
	$(function(){
		var url = "../../../../data/detail_series.json?size=";
		var template = [
			'<ul>',
			'{{each(i, name) results}}',
			'	<li class="${calssa}">',
			'		<div class="cover">',
			'			<a href="#">',
			'				<img src="${img}" alt="">',
			'			</a>',
			'			<div class="action">',
			'				<ul>',
			'					<li>',
			'						<a href="#">查看</a>',
			'					</li>',
			'					<li>',
			'						<a href="#">阅读</a>',
			'					</li>',
			'				</ul>',
			'			</div>',
			'			<div class="overlay"></div>',
					
			'			<div class="desc">',
			'				{{html desc}}',
			'			</div>',
			'		</div>',
			'	</li>',
			'{{/each}}',
			'</ul>'
		].join('');
		var $content = $('.list.active');
		var catchData = {};
		var isFirst = true;
		function render (no){

			var urlA = url+no;
			console.log(urlA)
			var data = catchData[urlA];
			if(data){
				$content.html("");
				$.tmpl(template,data).appendTo($content);
			}else{
				$.ajax({
		            dataType: 'json',
		            type: 'GET',
		            url: urlA,
		            success: function (data, textStatus, jqXHR) {
		                var data = data;
		                console.log(isFirst)
		                if(isFirst){
		                	isFirst = false;
		                }else{
		                	$content.html("");
		               		$.tmpl(template,data).appendTo($content);	
		               		
		                }
		                catchData[urlA] = data;
		            },
		            error: function() {
		               
		            }
		        });
			}
			
		};

		

		$('#pagination').page({
			totalPages:$content.attr('data-totalPages')||12,
			goto:function(no){
				render (no);
			}
		})
		
	});

})

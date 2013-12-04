epub.app(function(){

	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.simpleSlide@3.0')
	$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
					$(".go-top").goToTop({});
			});

			if(epub.runtimeEnvironment.platform == 'mobile'){
			
			}else{
				$('.list .cover').live({
				   mouseenter:function()
				   {
				      $(this).children('.action, .overlay').show();
				   },
				   mouseleave:function()
				   {
				      $(this).children('.action, .overlay').hide();
				   }
				});
			};
	});	
	epub["import"]('epub.modules.tabA@2.0');
	$(function(){
		var lis = [];
		$('.tab-mod .hd ul').each(function(){
			lis.push($(this).find('li')[0]);
		})
		$($('.tab-mod .hd ul')).tabA({
			tabALoaded:lis,
			url:"/ca-site/{param}/workslist.json?size=4",
			template:[
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
				'{{if type!="Series"}}',
				'					<li>',
				'						<a href="${target_id}/read.html">阅读</a>',
				'					</li>',
				'{{/if}}',
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
			].join('')
		})
	});

	$('.slideshow').simpleSlide({
				data:{},//data,
				template:[
					'<div class="left"><a href="javascript:void(0)">prev</a></div>',
	        		'<div class="next"><a href="javascript:void(0)">next</a></div>'
				].join(''),
				containerSelecter:"div.slideshow-inner",
				liSelecter:"div.slideshow-inner div.item",
				prevSelecter:"a.left",
				nextSelecter:"a.right",
				pagenationSelecter:".slideshow-indicators li"
			});

})

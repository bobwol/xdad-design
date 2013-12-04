epub.app(function(){
	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.goToTop@1.0')

	$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
					$(".go-top").goToTop({});
			});
			// $('nav li a').each(function(){$(this).attr('href', '/'+$(this).parent().attr('id')+'/list.html' )});


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

			$('div.return a').live('click',function(){
				if(document.referrer!="") {
					window.location.href=document.referrer;
				};
				return false;
			});
	});	

	epub["import"]('epub.modules.simpleSlide@3.0')
	$('.slideshow').simpleSlide({
				data:{},//data,
				template:[
					'<div class="prev"><a href="javascript:void(0)">prev</a></div>',
	        		'<div class="next"><a href="javascript:void(0)">next</a></div>'
				].join(''),
				containerSelecter:"div.slideshow-inner",
				liSelecter:"div.slideshow-inner div.item",
				prevSelecter:"a.left",
				nextSelecter:"a.right",
				pagenationSelecter:".slideshow-indicators li",
				dlSelecter:"dl",
				showAfter:function ($li){

				}
			});

	epub["import"]('epub.modules.tmpl@1.0');

	epub["import"]('epub.modules.tabA@2.0');
	$(function(){
		var lis = [];
		$('.tab-mod .hd ul').each(function(){
			lis.push($(this).find('li')[0]);
		})
		$($('.tab-mod .hd ul')).tabA({
			tabALoaded:lis,
			url:"/ca-site/{param}/workslist.json?size=16",
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

})

epub.def(function(){

	epub["import"]('epub.modules.tmpl@1.0');	
	$.fn.autoMiddle = function(){
		
		var _read_area = $('.read-area');
		var _read_area_img = $('.read-area').find('img');
		var _read_area_img_rate = _read_area_img.data("_read_area_img_rate")
		if(_read_area_img_rate!=-1){
			if(!_read_area_img_rate){
				_read_area_img_rate = _read_area_img.height()/_read_area_img.width();
				_read_area_img.data("_read_area_img_rate",_read_area_img_rate);
			}
			if(_read_area_img.attr('width')!='100%')_read_area_img.css('width',"100%");
			_read_area_img.css('height',(_read_area_img_rate*_read_area_img.width())+"px");
		}
		
		return this.each(function(){
			var sub = ($(this).parent().height() - $(this).height())/2;
			
			if(sub<0)sub = 0;
			$(this).css({
				  "margin-top":sub
			});
		});
	}
	function clear_read_area_img_rate(rate){
		
		var _read_area = $('.read-area');
		var _read_area_img = $('.read-area').find('img');
		if(rate){
			_read_area_img.data("_read_area_img_rate",null);
			
		}else{
			_read_area_img.data("_read_area_img_rate",-1);
		}
		_read_area_img.css('width',"");
		_read_area_img.css('height',"");
	}

	$.read = function(options){
		var url = options.url||"../../../../data/ca_read.json?page=";
		var template = options.template ||[
			'{{each(i, name) results}}',
			'<li data-img="${img}"><a href="javascript:void(0);"><img src="${thumb_img}"></a></li>',
			'{{/each}}'
		].join('');
		var $slideArea = $('.content-area');
		var $content = $('.thumbs>ul');
		var totalPages  = $content.attr('data-totalPages')||5;
		var currentPage = 1;
		var currentElement = null;
		var isLoad = true;
		var $pre = $('.prev');
		var $next = $('.next');
		var index = 0;

		function getActiveIndex() {
		    var $active = $content.find('li.active')
		    var $items = $active.parent().children()
	        return $items.index($active)
	    }

		var imgArr = [];
		$content.find('li').each(function(){
			var $el = $(this);
			var src = $el.attr('data-img');
			imgArr.push(src);
		});

		var isLoading = false;
		var isFirst = true;
		function loopLoadImg(){
			if(imgArr.length>0){
				if(isLoading){
					setTimeout(function (){
						loopLoadImg();
					},1000)
				}else{
					isLoading = true;
					var src = imgArr.shift();
					var tempImg=new Image(); 
					tempImg.onerror = tempImg.onload = function(){
						if(isFirst){
							
							var $el = $($content.find('li')[0])
							var src = $el.attr('data-img');
							var t = $slideArea.find('img');
							$('.loading').show(); 
							$('.read-area').hide(); 
							if(getActiveIndex()!=index)return;
							clear_read_area_img_rate()
							
							
							t[0].onerror = t[0].onload = function(){
							
								$('.read-area').autoMiddle();
								
								$('.loading').hide(); 
								$('.read-area').fadeIn(); 
							
							}
							t.attr("src",src);
						}
						isLoading = false;
						loopLoadImg();
						isFirst = false;
					};
					tempImg.src = src;
				}
				
			}
		}
		
		$pre.click(function (){
			if(index==0){

			}else{
				index = index -1;
				$content.trigger('click.li',$( $content.find('li')[index]));
			}
		})
		$next.click(function (){
			var len =  $content.find('li').length;
			if(index==len-1){
				render();
			}else{
				index = index + 1;
				$content.trigger('click.li',$( $content.find('li')[index]));
			}
		})

		function render (){
			var temp = currentPage+1;
			if(temp>totalPages){

			}else{
				isLoad = false;
				var urlA = url+temp;
				
				$.ajax({
		            dataType: 'json',
		            type: 'GET',
		            url: urlA,
		            success: function (data, textStatus, jqXHR) {
		                var data = data;
		               $(data.results).each(function(i,item){
							var $el = item;
							var src = $el.img;
							imgArr.push(src);
							loopLoadImg();
						});
		                $.tmpl(template,data).appendTo($content);	
		                $('.nano').nanoScroller();
		                currentPage  = temp;
		                isLoad = true;
		                setTimeout(function (){
		                	render();
		                },100)
		                
		            },
		            error: function() {
		               
		            }
		        });
				
			}
		};

		
		
		$('.nano').nanoScroller();
		$('.nano .pane').css({'visibility': 'hidden'});
		$('.nano').hover(function (){
				if(isLoad)$(this).children('.pane').css({'visibility': 'visible'});
			},function (){
				$(this).children('.pane').css({'visibility': 'hidden'});
		});
		$(".nano").debounce("scrollend", function(e) {
		  	 render();
		}, 100);

		var clickSelecter = "li";
		$content.delegate(clickSelecter, 'click', function(e){
			$content.trigger('click.li',$(this));

		});
		$content.bind('click.li',function(e,el){
			if(!el)return;
			var $el = $(el);

			if($el.hasClass("active")){

			}else{
				$el.addClass('active').siblings().removeClass('active');
			};
			index = $el.parent().children('li').index(el);
			loadImg();
		})
		
		function loadImg($el){
			
			$('.loading').show(); 
			$('.read-area').hide(); 
			
			var $el = $($content.find('li')[index])
			var src = $($el.find('img')).attr('src')
			var bigSrc = $el.attr('data-img');
			var t = $slideArea.find('img');
			clear_read_area_img_rate(true);
			t.attr("src",src);
			// $('.read-area').autoMiddle();
			// $('.loading').hide(); 
			// $('.read-area').fadeIn(); 
			
		
			var tempImg=new Image(); 
			tempImg.onload = function(){
				
				if(getActiveIndex()!=index)return;
				clear_read_area_img_rate();
				//t.onload = null;
				$('.loading').show(); 
				$('.read-area').hide(); 
				t.attr("src",bigSrc);
				// $('.read-area').fadeIn(); 
				//console.log(2)
				//$('.read-area').autoMiddle();
			};
			tempImg.src = bigSrc;
			appear($el);

		}
		function appear($el){

			var top = $el.offset().top;
			var height = $el.height();
			var sliderTop = $('.slider').css("top");
			sliderTop = sliderTop.replace('px','');
			sliderTop = parseFloat(sliderTop,10);
			
			var thumbsPaddingTop = $('.thumbs').css('paddingTop').replace('px','');

			if( $(window).height()<= top+height){
				
			 	$(".nano").nanoScroller({ scrollTop: top+$('.content').scrollTop()-$('.topbar').height()-thumbsPaddingTop});//-
			}
			if(top<$('.topbar').height()){
				
			 	$(".nano").nanoScroller({ scrollTop: top+$('.content').scrollTop()-$('.topbar').height()-thumbsPaddingTop});//-
			}
			$('.pages').html((index+1)+"/"+totalPages);
		}
		function init(){
			
			var $el = $($content.find('li')[0])
			var src = $($el.find('img')).attr('src')
			var t = $slideArea.find('img');
			// t.attr("src", $el.attr('data-img'));
			t.attr("src", src);
			$('.loading').hide(); 
			$('.read-area').fadeIn(); 
			
			$('.read-area').autoMiddle();
			appear($el);
			$(window).resize(function() {
			
				$('.read-area').autoMiddle();
			});
		}
		init();
		loopLoadImg();
		render();
	}
	
});
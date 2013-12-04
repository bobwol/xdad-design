
epub.app(function(){
	// css for iPad

	// if((navigator.userAgent.match(/iPad/i))){
	// 	document.write('<link href="../css/ipad.css" rel="stylesheet" type="text/css">'); 
	// }
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.waterfall@2.0')
	epub["import"]('epub.modules.pop@2.0')
	epub["import"]('epub.modules.bootstrap@1.0')
	$(function(){
		$('.infinite_scroll').wallterfall({
			infinitescroll:{
				destUrl:"./workslist.json"
			}
		});
	})

	$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
					$(".go-top").goToTop({});
			});
	});
	$(function(){
		var ins = $().pop();
		$('.waterfallstream').bind("click",function(event){
	        var el = event.target;
	        switch(el.nodeName.toLowerCase()){
	            case "img" :
	            	//do somethings
	            	var data = $(el).parents(".item").data('infinite_scroll_data');
	            	var detail = data.detail, ul_images = [], foto_images = [];
	            	$.each(detail, function(i, item) {
				        ul_images.push(item['thumbnail']);
				        foto_images.push(item['picture']);
				    });
					ins.show({//horizontal||vertical
						direction:data["direction"]||"vertical",
						ul:ul_images,
						foto:foto_images,
						dt:data["title"],
						dd:data["description"]
					});
	            break;
	           
	            case "p" :
	                //do somethings
	            break;
	           
	            default:
	                //do somethings
	        }
	    });
	});
	$(function(){
		// menu
		$('.wrap aside ul li h4').wrap('<div class="wraparea" />');
		$('.wrap aside ul li:has(ul) > .wraparea').append("<div class='hitarea'></div>");
		$('.wrap aside ul li:has(ul)').addClass('unfold');
		$('.wrap aside ul li .hitarea').click(function() {
			$(this).parent('.wraparea').parent('li').toggleClass('unfold');
			$(this).parent('.wraparea').parent('li').children('ul').slideToggle('fast');
		});
		
		// welcome
		$('.welcome nav li a').tooltip();
		$(window).resize(function() {
			$('.welcome .container').css("height","100%");
		});
	})
})
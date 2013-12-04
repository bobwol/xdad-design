
epub.app(function(){
	
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.waterfall@1.0')
	epub["import"]('epub.modules.pop@1.0')
	$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
					$(".go-top").goToTop({});
			});
	});
	$(function(){
		var ins = $().pop();
		$('.infinite_scroll').bind("click",function(event){
	        var el = event.target;
	        switch(el.nodeName.toLowerCase()){
	            case "img" :
	            	//do somethings
	            	var data = $(el).parents(".item").data('infinite_scroll_data');
					ins.show({//horizontal||vertical
	            		direction:data["direction"],
						ul:data["ul"],
						foto:data["foto"],
						dt:data["dt"],
						dd:data["dd"]
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
})
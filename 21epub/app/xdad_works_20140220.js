
epub.app(function(){
	// css for iPad

	// if((navigator.userAgent.match(/iPad/i))){
	// 	document.write('<link href="../css/ipad.css" rel="stylesheet" type="text/css">'); 
	// }
	epub["import"]('epub.modules.waterfall@3.0')
	epub["import"]('epub.modules.pop@4.0')
	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.supersized@2.0')
	epub["import"]('epub.modules.page@3.0')
	epub["import"]('epub.modules.base@6.0')

	// waterfalls
	$(document).ready(function() {				   
		if ( $(window).width() < 1205) {
			$('.waterfallstream').css( {'width':937} );
		} else if ( $(window).width() < 1443) {
			$('.waterfallstream').css( {'width':1175} );
		} else if ( $(window).width() < 1681) {
			$('.waterfallstream').css( {'width':1413} );
		} else if ( $(window).width() < 1919) {
			$('.waterfallstream').css( {'width':1651} );
		} else if ( $(window).width() >= 1919) {
			$('.waterfallstream').css( {'width':1889} );
		}
	});

	$(window).resize(function() {
		if ( $(window).width() < 1205) {
			$('.waterfallstream').css( {'width':937} );
		} else if ( $(window).width() < 1443) {
			$('.waterfallstream').css( {'width':1175} );
		} else if ( $(window).width() < 1681) {
			$('.waterfallstream').css( {'width':1413} );
		} else if ( $(window).width() < 1919) {
			$('.waterfallstream').css( {'width':1651} );
		} else if ( $(window).width() >= 1919) {
			$('.waterfallstream').css( {'width':1889} );
		}
	});

	$(function(){
		$('.infinite_scroll').wallterfall({
			infinitescroll:{
				destUrl:"./workslist.json"
			}
		});
		$('div.categories-mod>h4').html('<a href="javascript:void(0)">'+$('nav div.nav-bd ul li.active a').html()+'<b>▼</b></a>');
	})

	$(function(){
		var ins = $().pop(
				{
					templates:{
						foto:[
							' <ul>',
							'	{{each covers}}	',
							'		{{if !$index}}',
							'			<li class="active">',
							'      			<img src="${picture}" alt="">',
							'			</li>',
							'		{{else}}',
							'			<li class="" style="display: none;">',
							'      			<img src="${picture}" alt="">',
							'			</li>',
							'		{{/if}}',
							'	{{/each}}',
							' </ul>',
						].join(''),
						dl:[
							'        <dt>${dt}</dt>',
							'        {{html dd}}',	
						].join(''),
						ul:[
							' <ul>',
							'		 {{each thumbs}}	',
							'			{{if !$index}}',
							'           <li class="active"><img src="${$value}" alt=""></li>',
							'			{{else}}	',
							'        	<li><img src="${$value}" alt=""></li>',
							'			{{/if}}',
							'		 {{/each}}',
							' </ul>',
						].join(''),
						pop:[
							'  <div class="lightbox-container">',
							'    <div class="close"><a href="javascript:void(0);">CLOSE [X]</a></div>',
							'    <div class="loading">Loading...</div>',
							'    <div class="slideshow">',
							'	 	<dl class="gallery-caption"></dl>',
							'		<div class="thumb"></div>',
							'		<div class="foto"></div>',
							'		<div class="prev slideshow-control"><a href="javascript:void(0)">prev</a></div>',
							'		<div class="next slideshow-control"><a href="javascript:void(0)">next</a></div>',
							'    </div>',
							'  </div>',
							'  <div class="overlay"></div>',
						].join('')
					}
				}
			);
		$('.waterfallstream').bind("click",function(event){
	        var el = event.target;
	        switch(el.nodeName.toLowerCase()){
	            case "img" :
	            	//do somethings
	            	var data = $(el).parents(".item").data('infinite_scroll_data');
	            	var detail = data.detail, ul_images = [], foto_images = [];
	            	$.each(detail, function(i, item) {
				        ul_images.push(item['thumbnail']);
				        foto_images.push({
				        	picture:item['picture'],
				        	height:item['height'],
				        	width:item['width']
				        });
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
})
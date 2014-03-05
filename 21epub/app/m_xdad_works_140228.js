
epub.app(function(){
	// css for iPad

	// if((navigator.userAgent.match(/iPad/i))){
	// 	document.write('<link href="../css/ipad.css" rel="stylesheet" type="text/css">'); 
	// }
	epub["import"]('epub.modules.mwaterfall@1.0')
	epub["import"]('epub.modules.pop@4.0')
	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.supersized@2.0')
	epub["import"]('epub.modules.page@3.0')
	epub["import"]('epub.modules.mbase@2.0');



	// waterfalls
	$('.waterfallstream').show();
	$(document).ready(function() {			   
		if ( $(window).width() < 575) {
			$('.waterfallstream').css( {'width':300} );
		} else if ( $(window).width() < 630) {
			$('.waterfallstream').css( {'width':455} );
		} else if ( $(window).width() < 785) {
			$('.waterfallstream').css( {'width':610} );
		} else if ( $(window).width() < 940) {
			$('.waterfallstream').css( {'width':765} );
		} else if ( $(window).width() < 1095) {
			$('.waterfallstream').css( {'width':920} );
		} else if ( $(window).width() < 1250) {
			$('.waterfallstream').css( {'width':1075} );
		} else if ( $(window).width() < 1405) {
			$('.waterfallstream').css( {'width':1230} );
		} else if ( $(window).width() < 1560) {
			$('.waterfallstream').css( {'width':1385} );
		} else if ( $(window).width() < 1715) {
			$('.waterfallstream').css( {'width':1540} );
		} else if ( $(window).width() < 1870) {
			$('.waterfallstream').css( {'width':1695} );
		} else if ( $(window).width() < 2015) {
			$('.waterfallstream').css( {'width':1850} );
		} else if ( $(window).width() >= 2025) {
			$('.waterfallstream').css( {'width':2005} );
		}
		$('.waterfallstream').css( {'margin':'0px auto'} );
	});
	$(window).resize(function() {
		if ( $(window).width() < 575) {
			$('.waterfallstream').css( {'width':300} );
		} else if ( $(window).width() < 630) {
			$('.waterfallstream').css( {'width':455} );
		} else if ( $(window).width() < 785) {
			$('.waterfallstream').css( {'width':610} );
		} else if ( $(window).width() < 940) {
			$('.waterfallstream').css( {'width':765} );
		} else if ( $(window).width() < 1095) {
			$('.waterfallstream').css( {'width':920} );
		} else if ( $(window).width() < 1250) {
			$('.waterfallstream').css( {'width':1075} );
		} else if ( $(window).width() < 1405) {
			$('.waterfallstream').css( {'width':1230} );
		} else if ( $(window).width() < 1560) {
			$('.waterfallstream').css( {'width':1385} );
		} else if ( $(window).width() < 1715) {
			$('.waterfallstream').css( {'width':1540} );
		} else if ( $(window).width() < 1870) {
			$('.waterfallstream').css( {'width':1695} );
		} else if ( $(window).width() < 2015) {
			$('.waterfallstream').css( {'width':1850} );
		} else if ( $(window).width() >= 2025) {
			$('.waterfallstream').css( {'width':2005} );
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
							'',
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
	            	window.location.href = location.href.replace("/works.html", data['target_id'] + '/single');
	            	break;
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
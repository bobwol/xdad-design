epub.def(function(){
	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.nanoscroller@1.0')
	epub["import"]('epub.modules.page@3.0')

	$(function(){

		$(document).ready(function() {
			
			$("nav > li, .nav-bd").live({
				mouseover: function() {
					$(this).children('.nav-bd').show();	
				},
				mouseout: function() {
					$(this).children('.nav-bd').hide();
				}
			});
			
			$(".categories-mod, .nav-bd").live({
				mouseover: function() {
					$(this).children('.nav-bd').show();	
				},
				mouseout: function() {
					$(this).children('.nav-bd').hide();
				}
			});

			
			
			// // aside menu
			// $('aside ul li h4').wrap('<div class="wraparea" />');
			if($('aside ul').length){
				$('aside ul li:has(ul) > .wraparea').append("<div class='hitarea'></div>");
				$('aside ul li:has(ul)').addClass('hasmenu');
				$('aside ul li.active').parents('li').each(function(){$(this).addClass('unfold')});
				$('aside li.active').parents('li.active').each(function(){$(this).removeClass('active')});
				$('aside ul li.unfold > ul').css("display","block");
				$('aside ul li:has(ul) .hitarea').click(function() {
					var this_li = $(this).parent('.wraparea').parent('li');
					this_li.siblings('.unfold').toggleClass('unfold').children('ul').css('display','none');
					this_li.toggleClass('unfold');
					this_li.children('ul').slideToggle('fast');
				});

			}

			// footer:hover
			$(".fixed-bottom footer").live({
				mouseover: function() {
					$(this).stop(true,false).animate({
						bottom:0
					},150);
				},
				mouseout: function() {
					$(this).stop(true,false).animate({
						bottom:-149
					},150);
				}
			});

			// container add padding-bottom
			if ( $('.container').height() > $(window).height() - 120 ) {
				$(".container").css({ 'padding-bottom':'70px' });
			}
			
			if ( $(window).height() < 672 ) {
				$("body").addClass("mini-mode");
				$("body").addClass("fixed-top fixed-bottom");
				// fixed-aside
				$(document).scroll(function() {
					if ( $('aside').height() < $(window).height() - 120 ) {
						$("body").addClass("fixed-aside");
					} else {
						$("body").removeClass("fixed-aside");
					}
				});
				// fixed-top
				$(document).scroll(function() {
					$("body").addClass("fixed-top");
				});
				// fixed-bottom
				$(document).scroll(function() {
					$("body").addClass("fixed-bottom");	
					$('footer').css({ bottom:-149 });
				});
			} else {
				$("body").removeClass("mini-mode");
				// fixed-aside	
				if ( $('aside').height() < $(window).height() - 120 ) {
					$(document).scroll(function() {
						if ( $(document).scrollTop() > 120 ) {
							$("body").addClass("fixed-aside");
						} else {
							$("body").removeClass("fixed-aside");
						}
					});
				}
				// fixed-top
				$(document).scroll(function() {
					if ( $(document).scrollTop() > 120 ) {
						$("body").addClass("fixed-top");
					} else {
						$("body").removeClass("fixed-top");
					}
				});
				// fixed-bottom
				$(document).scroll(function() {
					if ( $(document).scrollTop() > 40 ) {
						$('footer').css({ bottom:-149 });
						$("body").addClass("fixed-bottom");	
					} else {
						$('footer').css({ bottom:0 });
						$("body").removeClass("fixed-bottom");
					}
				});
			}
		});

		$(window).resize(function() {
			if ( $(window).height() < 672 ) {
				$("body").addClass("mini-mode");
				$("body").addClass("fixed-top fixed-bottom");
				$('footer').css({ bottom:-149 });
				// fixed-aside
				$(document).scroll(function() {
					if ( $('aside').height() < $(window).height() - 120 ) {
						$("body").addClass("fixed-aside");
					} else {
						$("body").removeClass("fixed-aside");
					}
				});
				// fixed-top
				$(document).scroll(function() {
					$("body").addClass("fixed-top");
				});
				// fixed-bottom
				$(document).scroll(function() {
					$("body").addClass("fixed-bottom");	
					$('footer').css({ bottom:-149 });
				});
			}else {
				$("body").removeClass("mini-mode");
				// fixed-aside	
				if ( $('aside').height() < $(window).height() - 120 ) {
					$(document).scroll(function() {
						if ( $(document).scrollTop() > 120 ) {
							$("body").addClass("fixed-aside");
						} else {
							$("body").removeClass("fixed-aside");
						}
					});
				} else {
					$(document).scroll(function() {
						$("body").removeClass("fixed-aside");
					});
				}


				// fixed-top
				if ( $(document).scrollTop() > 120 ) {
					$("body").addClass("fixed-top");
				} else {
					$("body").removeClass("fixed-top");
				}
				$(document).scroll(function() {
					if ( $(document).scrollTop() > 120 ) {
						$("body").addClass("fixed-top");
					} else {
						$("body").removeClass("fixed-top");
					}
				});

				// fixed-bottom
				if ( $(document).scrollTop() > 40 ) {
					$('footer').css({ bottom:-149 });
					$("body").addClass("fixed-bottom");	
				} else {
					$('footer').css({ bottom:0 });
					$("body").removeClass("fixed-bottom");
				}
				$(document).scroll(function() {
					if ( $(document).scrollTop() > 40 ) {
						$('footer').css({ bottom:-149 });
						$("body").addClass("fixed-bottom");	
					} else {
						$('footer').css({ bottom:0 });
						$("body").removeClass("fixed-bottom");
					}
				});

			};
		});


		// back to top
		$(document).ready(function() {

			$(function() {
				$(document).scroll(function() {
					if ($(document).scrollTop() > 200) {
						$("#back-to-top").fadeIn(200);
					}
					else
					{
						$("#back-to-top").fadeOut(200);
					}
				});
				$("#back-to-top").click(function() {
					$('body,html').animate({
						scrollTop: 0
					},
					300);
					return false;
				});
			});

			function getLanguage(){
				if (location.href.indexOf('/en/')>0) return 'en';
				if (location.href.indexOf('/zh/')>0) return 'zh';
			}

			$(".work-list").page({
					url:{
						contentstree:'/'+getLanguage()+'/columnitems.json?id=60years',
						unlitslist:'/'+getLanguage()+'/60years/{id}/workslist.json?size=100'
					},
					templates:{
						unlitslist:[
							'<ul>',
								'{{each(index,value) data.results}}',
									// '{{if !index}}',
									// //'<li class="active" data-body="${value.body}"  data-title ="${value.title}">',
									// '{{else}}',
									'<li data-body="${value.detail}" data-title ="${value.title}">',
									// '{{/if}}',
									'<div class="thumb"><img src="${value.thumbnail}" alt=""></div>',
									'<div class="title">${value.title}</div>',
									'<div class="sub-title">${value.description}</div>',
									'</li>',
								'{{/each}}',
							'</ul>'
						].join(''),
						contentstree:[
							'{{each(index,value) data.results}}',
								'{{if !index}}',

								'<h4 id ="${value.id}" type="${value.type_categorized}" class="goto">${value.title}</h4>',
								'{{else}}',
								'<h4 id ="${value.id}" type="${value.type_categorized}" style="display:none;" class="goto">${value.title}</h4>',
								'{{/if}}',
							'{{/each}}',
							'<div class="list nanoscrollbar">',
								'<div class="nano">',
									'<div class="content">',
									'</div>',
								'</div>',
							'</div>',
							'<div class="prev" data-rel = "_prev"><a href="javascript:void(0)">prev</a></div>',
				      		'<div class="next" data-rel = "_next"><a href="javascript:void(0)">next</a></div>'
						].join(''),
						detail:[
							'<hgroup>',
							'	<h1>${title}</h1>',
							'</hgroup>',
							'<article class="nanoscrollbar">',
							'	{{html body}}',
							'</article>'
						].join('')
					},
			});

			$(function(){
				$('.nanoscrollbar').wrapInner('<div class="nano"><div class="content"></div></div>');
				$('.nano').nanoScroller();
			});


			$('li[id*="contentstree_149"] a').addClass('lightbox-history-works');
			$('li[id*="contentstree_149"] a').live('click',function(){
				$('.lightbox.history-works-modal').show();
				return false;
			});

			$('li[id="8bbe8ba14f5c54c1"] div.nav-bd').css('width','980px');

			// close lightbox
			$('.lightbox .overlay, .lightbox .close a').live("click", function() {
				$('.lightbox').fadeOut('fast');
			});


		});


	});

});


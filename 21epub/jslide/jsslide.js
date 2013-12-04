(function($) {
	 $.NBSection = function(opts) {
		var $section,
			$header,
			$footer,
			$pages,
			$progress,
            $modal,
            $catalogue,
			currentPage='',
			newPageCount = 1,
			hist=[],
			index = 0,
			config={},
            backSelector = '.back, .cancel, .goback';
		var setHash = function(node) {
            var divId = node.attr('id');
            if (!divId) {
                node.attr('id', divId = 'n-' + newPageCount);
            }
            location.hash = divId;
        };
		var addPageToHistory = function(page,animation) {
        	 hist.unshift({
                page: page,
                animation: animation,
                hash: '#' + page.attr('id'),
                id: page.attr('id')
            });
        };
		
		var setIndex = function(dir,fun) {
			if (index >= len) {
				index = len -1;
			} else if (index < 0) {
				index = 0;
			} else {
               
				showPageByHref(index,{
					dir:dir,
					fun:fun
				});
			}
		};
		var doNavigation = function (options) {
			var opts = $.extend({
					goingBack:false,
					fun:function () {}
				},options||{});
            
			$(':focus').blur();
            var fromPage = $('section>.current');
			
            var toPage = $($pages[index].id)
				
            if (toPage.is('.current')) {
                return;
            }
			
            var animation =opts.goingBack ? 'right' : 'left';
			
            var navigationEndHandler = function(e) {
					
                fromPage.unbind('webkitAnimationEnd', navigationEndHandler);
                fromPage.removeClass(animation + ' out current');
                toPage.removeClass(animation + ' in');
                setHash(toPage);
//                if (fromPage.attr('remove')) {
//                    fromPage.disScroll().remove();
//                }
                opts.fun.call();
            };
            setTimeout(function() {
                fromPage.addClass(animation + ' out').bind('webkitAnimationEnd', navigationEndHandler);
                toPage.addClass(animation + ' in current');
            }, 10);
            if (opts.goingBack) {
                hist.shift();
            } else {
               addPageToHistory(toPage);
            }
			progress();
			
			NBScroll(config.pages[index].id);
            return this;
		}
	
		
		var toolBar = function () {
			$footer.find("a[data-role='tool']")	.bind("click", function() {
				var key = $(this).attr("data-key");
				
				switch (key) {
					case "Next": {
						//向后播放
						index++;
						setIndex(0);
						break;	
					}
					case "Prev": {
						//向前播放
						index--;
						setIndex(1);
						break;	
					}
					case "Home": {
						//向前播放
						index=0;
						setIndex(1);
						break;	
					}
					case "Index": {
                        Index();
						location.hash = "#example";
						break;	
					}
					case "Paint": {
						if(!canvas.isShow())canvas.show();else canvas.hide();
						break;	
					}
					case "Catalogue": {
						catalogue.click();
						break;	
					}
                }
                if(key!=="Paint") {
                    if(canvas.isShow())canvas.hide();
                }
                if(key!=="Catalogue") {
                   $catalogue.hideFloaty();
                }
			});
		}
        function liclick() {
            var _index = $(this).attr("index");
            
            if(_index<index) {
                index = _index;
                setIndex(1);
            }
            else if(_index>index){
                index = _index;
                setIndex(0);
            }
        }
        var Index = function () {
            var color = ["brand","promotion","show","event"]
            var html = [' <div class="css3Tutorial02 clrfix">','<ul>'];
            for(var i=1;i<len;i++){
                var no = i%4;
                html.push('<li class="'+color[no]+'" index = '+i+'>'+(i)+'</li>');
            }
            html.push('</ul></div>');
           $modal.html(html.join(""));
           ;(function ($modal) {
               $modal.click(function(e) {
                   
                    var e = e || window.event;
	                var target = e.srcElement || e.target;
	    
	                if (target.tagName == "LI") {
                      
                        var _index = target.getAttribute("index");
                        
                        if(_index>index){
                            index = _index;
                            setIndex(0);
                        }else if(_index<index) {
                            index = _index;
                            setIndex(1);
                        }else {
                            var hash = $.trim(config.pages[index].id)
                            location.hash = "#"+hash;
                        }
	                }
	            });
	        })($modal);

        }
		var progress = function () {
			$progress[0].style.width = ((index+1)/len)*100 + "%";
		}
		var canvas= function () {
		
		}
		canvas.init = function () {
			$canvas.css({
				display:'none',
				position:'absolute',
				left:0,
				top:0
			});
		}
		canvas.show = function () {
			canvas.ready();
			$canvas.css({
				display:'',
				cursor:'crosshair'
			});
			
			$canvas.bind('mousedown',canvas.mouseDown)
			.bind('mouseup',canvas.mouseUp) 
			.bind('mousemove',canvas.mouseMove);
		}
		canvas.hide = function () {
			canvas.clear();
			$canvas.unbind('mousedown',canvas.mouseDown);
			$canvas.unbind('mouseup', canvas.mouseUp);
			$canvas.unbind('mousemove',canvas.mouseMove);
		}
		canvas.ready = function () {
			$canvas[0].width = window.innerWidth;
			$canvas[0].height = window.innerHeight;
			$canvas[0].style.zIndex = 9;
			$canvas.context = $canvas[0].getContext('2d');
			$canvas.context.lineWidth = 5;
			$canvas.context.lineCap = 'round';
			$canvas.context.strokeStyle = "red";
		}
		canvas.clear = function () {
			$canvas.context && $canvas.context.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
			$canvas.hide();
		}
		canvas.mouseDown = function (e) {
			
			$canvas.isMouseDown = true;
			$canvas.iLastX = e.clientX - $canvas[0].offsetLeft + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft);
			$canvas.iLastY = e.clientY - $canvas[0].offsetTop + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
		}
		canvas.mouseUp = function () {
			$canvas.isMouseDown = false;
			$canvas.iLastX = -1;
			$canvas.iLastY = -1;
		}
		canvas.mouseMove = function (e) {
			if ($canvas.isMouseDown) {
				var iX = e.clientX - $canvas[0].offsetLeft + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft);
				var iY = e.clientY - $canvas[0].offsetTop + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop);
				$canvas.context.beginPath();
				$canvas.context.moveTo($canvas.iLastX, $canvas.iLastY);
				$canvas.context.lineTo(iX, iY);
				$canvas.context.stroke();
				$canvas.iLastX = iX;
				$canvas.iLastY = iY;
			}
		}
		canvas.isShow = function () {
			return $canvas.is(":visible");
		}
        $.fn.makeFloaty = function(options){
            var defaults = {
                align: 'top',
                spacing: 20,
                time: '.3s'
            }
            var settings = $.extend({}, defaults, options);
            settings.align = (settings.align == 'top') ? 'top' : 'bottom';
            
            return this.each(function(){
                var $el = $(this);
                
                $el.css({
                    '-webkit-transition': 'top ' + settings.time + ' ease-in-out',
                    'display': 'block',
                    'min-height': '0 !important'
                }).data('settings', settings);
                
                $(document).bind('scroll', function(){
                    if ($el.data('floatyVisible') === true)
                    {
                        $el.scrollFloaty();
                    }
                });
                $el.scrollFloaty();
            });
        }

        $.fn.scrollFloaty = function(){
            return this.each(function(){
                var $el = $(this);
                var settings = $el.data('settings');
                var wHeight = $('html').attr('clientHeight'); // WRONG
                
                var newY = window.pageYOffset +
                    ((settings.align == 'top') ? 
                        settings.spacing : wHeight - settings.spacing - $el.get(0).offsetHeight);
                
                $el.css('top', newY).data('floatyVisible', true);
            });
        }

        $.fn.hideFloaty = function(){
            
            return this.each(function(){
                var $el = $(this);
                var oh = $el.get(0).offsetHeight;
                
                $el.css('top', -oh-10+"px").data('floatyVisible', false);
            });
        }
        
        $.fn.toggleFloaty = function(){
            return this.each(function(){
                var $el = $(this);
                if ($el.data('floatyVisible') === true){
                    $el.hideFloaty();
                }
                else
                {
                    $el.scrollFloaty();
                }
            });
        }
        var catalogue= function () {
		
		}
		catalogue.init = function () {
             
            var html = [' <div class="button-wrapper">'];
            for(var i=1;i<len;i++){
                var page = $pages[i];
                html.push('<a href="javascript:void(0);" class="a-btn" index='+(i)+'><span></span><span>'+page.title+'</span><span>'+page.en+'</span></a>');
            }
            html.push('</div></div>');
           
            $catalogue.html(html.join(""));
            ;(function ($catalogue) {
               $catalogue.click(function(e) {
                    var e = e || window.event;
	                var target = e.srcElement || e.target;
	                if (target.tagName == "SPAN") {
                        var parent = target.parentNode;
                        var _index = parent.getAttribute("index");
                        var fun = function () {
                            $catalogue.hideFloaty();
                        }
                        if(_index>index){
                            index = _index;
                            setIndex(0,fun);
                        }else if(_index<index) {
                            index = _index;
                            setIndex(1,fun);
                        }else {
                            fun();
                        } 
                    }
	            });
	        })($catalogue);
           
		}
        catalogue.click = function () {
			if(!catalogue.isinit) {
				 $catalogue.makeFloaty({
					spacing: 45,
					time: '1s'
				});
				catalogue.isinit = true;
			}else {
				$catalogue.toggleFloaty();
			}
           
        }
        
		var showPageByHref = function (index,options) {
			
			var href = config.pages[index].id
				
			if (/^#/.test(href)) {
                var page = $(href);
                if (page.length != 0) {
                   doNavigation(options);
                }
            } else {
				 var href = config.path+config.pages[index].id
				 $.ajax({
					url : href,
					data: null,
					cache : false,
					dataType:'text',
					success: function (node, textStatus) {
                        var box = document.createElement('div');
                        
                        var templates = {
                            html:"",
                            json:{},
                            script:function () {}
                        }
                        box.innerHTML = node;
                       
                        var $box = $(box);
						$box.find("script").each(function (index, script) {
                            var templateNode = $(script);
                            var id = templateNode.attr("id");
                            var html = templateNode.html();
							html = $.trim(html);
							if(html.length!==0) templates[id] = html;
                        });
                        var title = config.pages[index].title;
                        var prev = '<div id="page2">'+
                                        '<div class="toolbar">'+
                                            '<h1>'+title+'</h1>'+
                                            '<a class="back" href="#">'+(index==1?"Home":"Back")+'</a>'+
                                            '<a class="button" href="javascript:void(0);">'+index+'</a>'+
                                        '</div>'+
                                        '<div class="scroll_wrapper">'+
                                            '<div>'+
                                                '<article>';
                        var next = '</article></div></div></div>';
                        var page = $('<div></div>').setTemplate(prev+templates["html"]+next);
                        var json = typeof(templates["json"]) == 'object' ? templates["json"] : eval('(' + templates["json"] + ')');
                        var script = typeof(templates["script"]) == 'function' ? templates["script"] : eval('(' + templates["script"] + ')');
                        page.processTemplate(json)
                          
                        var $node = $(page);
						var uid = 'n-' +(++newPageCount);
                        $node.attr('id', uid).appendTo('section');
                        $node.find("code").each(function (index, code) {
                            var templateNode = $(code);
                            var id = templateNode.attr("id");
                            var html =  $("#"+id,$box[0]).html();
							html = $.trim(html);
							templateNode.html(html);
                        });
                        
						

                         script();                         
							 
							//.scroll();
						config.pages[index].id = "#"+uid;
                        
						doNavigation(options);
                        Rainbow.color();
					},
					error: function (node) {
						
					}
				});
				
			}
		}
		var NBScroll = function (id) {
			var context = $(id);
			if(context.data("scroll"))return;
			var wrapper = $(".scroll_wrapper",context[0]);
			wrapper.attr("id",id+"_scroll_wrapper")
			var theIscroll = new iScroll(id+"_scroll_wrapper", { scrollbarClass: 'myScrollbar' });
			context.data("scroll",theIscroll)
        }
        $.fn.tap = function(fn){
            if ($.isFunction(fn))
            {
                var tapEvent = 'click';
                return $(this).live(tapEvent, fn);
            } else {
                $(this).trigger('tap');
            }
        }
		var tapHandler = function(e) {
            var $el = $(e.target);
            if ($el.is(backSelector)) {
                index--;
				setIndex(1);
            } 
        };

		$(document).ready(function() {
			
			config = $.extend(true,config,$.configs||{});
			config.pages.unshift({
				id:'#default'
			});
			
			$section = $('section');
			$header = $('header');
			$footer = $('footer');
			$pages = config.pages;
			$progress = $('header  span');
			$canvas = $('canvas');
            $modal = $('#modal');
			$catalogue = $('.floaty');
			len = $pages.length;
			
			if ($('section > .current').length == 0) {
                currentPage = $('section > *:first');
            } else {
                currentPage = $('section > .current:first');
                $('section > .current').removeClass('current');
            }
			$(currentPage).addClass('current');
            setHash(currentPage);
            addPageToHistory(currentPage);
            scrollTo(0, 0);
            //$('section > *').css('minHeight', window.innerHeight-$header.height-$footer.height);
			toolBar();
			progress();
			canvas.init();
            catalogue.init();
			NBScroll("#default");
            $(backSelector).tap(tapHandler);
         });
	 }
     
})(jQuery);

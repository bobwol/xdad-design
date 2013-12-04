epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0')
	epub["import"]('epub.modules.masonry@1.0')
	epub["import"]('epub.modules.infinitescroll@1.0')
	epub["import"]('epub.modules.lazyload@1.0')
	epub["import"]('epub.modules.page@1.0')
	$(function(){
		//总页数
		var totalPages = 1;
		//当前页
		var currentPage = 1;
		//infinite_scroll绑定对象
		var $infinite_scroll = $(".infinite_scroll");

		var desturl = "http://localhost/dev/appserv/21epub/project/site/template/works/test.php"
		function item_masonry(){ 
			// $('.item img').load(function(){ 
			// 	$('.infinite_scroll').masonry({ 
			// 		itemSelector: '.masonry_brick',
			// 		columnWidth:223,
			// 		gutterWidth:15								
			// 	});		
			// });	
			$('.infinite_scroll').masonry({ 
				itemSelector: '.masonry_brick',
				columnWidth:223,
				gutterWidth:15								
			});	
		}
		function item_callback(){ 
			$('.item').mouseover(function(){
		//		$(this).css('box-shadow', '0 1px 5px rgba(35,25,25,0.5)');
		//		$('.btns',this).show();
			}).mouseout(function(){
		//		$(this).css('box-shadow', '0 1px 3px rgba(34,25,25,0.2)');
		//		$('.btns',this).hide();		 	
			});
			item_masonry();	
		}
		
		item_callback();  

		//$('.item').fadeIn();
		$infinite_scroll.infinitescroll({
			navSelector  	: "#more",
			nextSelector 	: "#more a",
			itemSelector 	: "body",
			loading:{
				img: "../img/loading.gif",
				msgText: ' ',
				finishedMsg: '木有了',
				finished: function(){
					if(currentPage>=totalPages){ //到第10页结束事件
						$("#more").remove();
						$("#infscr-loading").hide();
						$('#pagination').page({
								totalPages:currentPage,
								goto:function(no){
									
									scrollTo(0,$('#page_'+no).offset().top - $('#page_1').offset().top);
								}
							});
						$("#pagination").show();
						$(window).unbind('.infscr');
					}
				}		
			},
			errorCallback	:function(){ 
				$('#pagination').page({
								totalPages:currentPage,
								goto:function(no){
									
									scrollTo(0,$('#page_1').offset().top-$('#page_'+no).offset().top);
								}
							});
				$("#pagination").show();
			},
			debug:false,
			appendCallback	:true,
			dataType	 	: 'json',
			path: function(index) {
				currentPage = index;
				creatTag();
				return desturl+"?page="+currentPage;
			},
			template:function(data){
				  var template = [
				   '{{each(i, name) results}}',
				   '  <div class="item masonry_brick ">',
				   '    <div class="item_t">',
				   '     <div class="img horizontal"> <a href="javascript:void(0);"><img src="../public/works/grey.gif" alt="${alt}" data-original="${src}" style="height:${height}px;width:221px;"/></a>',
				   '       <div class="btns"> <a href="javascript:void(0);" class="img_album_btn">收藏作品</a> </div>',
				   '     </div>',
				   '     <div class="title"><span>${title}</span></div>',
				   '   </div>',
				   '   <div class="item_b clearfix">',
				   '     <div class="items_likes fl"> <a href="javascript:void(0);" class="like_btn">喜欢</a> <em class="bold">${likes}</em> </div>',
				   '     <div class="items_comment fr"><a href="javascript:void(0);">评论</a><em class="bold">(${comments})</em></div>',
				   '   </div>',
				   ' </div> ',
				   '{{/each}}'
				   ].join('');

				return $.tmpl(template,data)
			}
		}
		,function(newElements){
			var $newElems = $(newElements);

			$('.infinite_scroll').masonry('appended', $newElems, false);
			//$newElems.fadeIn();
			$newElems.find("img").lazyload({
				effect       : "fadeIn",
             	failurelimit : 0,
             	auto:true
			});
			var tmplItem = $newElems.tmplItem();
			var data = tmplItem.data.results;
			var nodes = tmplItem.nodes;
			for (var i = nodes.length - 1; i >= 0; i--) {
				var node = nodes[i];
				$(node).data('infinite_scroll_data',data[i])
			};
			item_callback();
			return;
		});
		function creatTag(){
			var instance = $infinite_scroll.data('infinitescroll'),
				opts = instance.options;
			var pos = $(opts.navSelector).offset()
			var $temp = $('<div></div>');
			$temp.css({
				position:'absolute',
				top:pos.top+"px",
				left:"0px",
				height:'10px',
				width:'100px',
				visibility:'hidden',
				background:'red'
			}).appendTo($('body'));	
			$temp.attr('id','page_'+currentPage);
			
		}
		
		;(function(){

			var instance = $infinite_scroll.data('infinitescroll'),
           		condition,
				opts = instance.options,
				box = $(opts.contentSelector).is('table') ? $('<tbody/>') : $('<div/>');
			creatTag();

			$(opts.navSelector).hide();
            opts.loading.msg
	            .appendTo(opts.loading.selector)
	            .show(opts.loading.speed,function(){
	            	beginAjax();
	            });

	        function beginAjax(){
	        	$.ajax({
	                dataType: 'json',
	                type: 'GET',
	                url:desturl+"?page="+currentPage,
	                success: function (data, textStatus, jqXHR) {
	                  
	                    condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === "success" || textStatus === "notmodified");
	                    
	                    if (opts.appendCallback) {
	                        // if appendCallback is true, you must defined template in options.
	                        // note that data passed into _loadcallback is already an html (after processed in opts.template(data)).
	                        if (opts.template !== undefined) {
	                            var theData = opts.template(data);
	                            box.append(theData);
	                            if (condition) {
	                            	totalPages = data.totalPages;
	                                instance._loadcallback(box, theData);
	                            } else {
	                                instance._error('end');
	                            }
	                        } else {
	                            instance._debug("template must be defined.");
	                            instance._error('end');
	                        }
	                    } else {
	                         
	                        // if appendCallback is false, we will pass in the JSON object. you should handle it yourself in your callback.
	                        if (condition) {
	                            instance._loadcallback(box, data, desturl);
	                        } else {
	                            instance._error('end');
	                        }
	                    }
	                },
	                error: function() {
	                    instance._debug("JSON ajax request failed.");
	                    instance._error('end');
	                }
	            });
	        }
            

		})();
		
	});

})
	
	
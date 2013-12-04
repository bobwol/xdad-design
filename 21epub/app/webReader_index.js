epub.app(function(){
	epub["import"]('epub.modules.iscroll@1.0');
	;(function($){
		$.fn.columnize = function(options) {
			var defaults = {
				width: 400,
				columnFloat:"left",
				cssClassPrefix:"",
				doneFunc : function(){}
			};
			var options = $.extend(defaults, options);
			return this.each(function() {
				
				var $inBox = options.target ? options.orientation.find(options.target) : $(this);
				var maxHeight = $(this).height();
				var $cache = $('<div></div>'); // this is where we'll put the real content
				var cssClassPrefix = defaults.cssClassPrefix;
				$cache.append($(this).contents().clone(true));
				$inBox.empty();
				function prefixTheClassName(className, withDot){
					var dot = withDot ? "." : "";
					return dot + className;
				}
				columnizeIt();
				function columnizeIt() {
					var numCols = Math.round($inBox.width() / options.width);
					if(options.columns) numCols = options.columns;
					if(numCols <= 1){
						return singleColumnizeIt();
					}
					//......
				}
				function singleColumnizeIt(){
					$inBox.empty();
					$inBox.append($("<div class='"
					 + prefixTheClassName("first") + " "
					 + prefixTheClassName("last") + " "
					 + prefixTheClassName("column") + " "
					 + "' style='width:100%; float: " + options.columnFloat + ";'></div>")); 

					$col = $inBox.children().eq($inBox.children().length-1);
					$destroyable = $cache.clone(true);
					if(options.overflow){
						targetHeight = options.overflow.height;
						columnize($col, $destroyable, $col, targetHeight);
						var html = "";
						var div = document.createElement('DIV');
						while($destroyable[0].childNodes.length > 0){
							var kid = $destroyable[0].childNodes[0];
							if(kid.attributes){
								for(var i=0;i<kid.attributes.length;i++){
									if(kid.attributes[i].nodeName.indexOf("jQuery") == 0){
										kid.removeAttribute(kid.attributes[i].nodeName);
									}
								}
							}
							div.innerHTML = "";
							div.appendChild($destroyable[0].childNodes[0]);
							html += div.innerHTML;
						}
						var overflow = $(options.overflow.id)[0];
						overflow.innerHTML = html;
					}
					$inBox.append($("<br style='clear:both;'>"));
					if(options.overflow && options.overflow.doneFunc){
						options.overflow.doneFunc();
					}
				}
				function columnize($putInHere, $pullOutHere, $parentColumn, targetHeight){
					//
					// add as many nodes to the column as we can,
					// but stop once our height is too tall
					while(($parentColumn.height() < targetHeight) && $pullOutHere[0].childNodes.length){
						var node = $pullOutHere[0].childNodes[0]
						
						$putInHere.append(node);
					}
					if($putInHere[0].childNodes.length == 0) return;
					
					// now we're too tall, so undo the last one
					var kids = $putInHere[0].childNodes;
					var lastKid = kids[kids.length-1];
					$putInHere[0].removeChild(lastKid);
					var $item = $(lastKid);
					
					//
					// now lets try to split that last node
					// to fit as much of it as we can into this column
					if($item[0].nodeType == 3){
						// it's a text node, split it up
						var oText = $item[0].nodeValue;
						var counter2 = options.width / 18;
						if(options.accuracy)
						counter2 = options.accuracy;
						var columnText;
						var latestTextNode = null;
						while($parentColumn.height() < targetHeight && oText.length){
							var indexOfSpace = oText.indexOf(' ', counter2);
							if (indexOfSpace != -1) {
								columnText = oText.substring(0, oText.indexOf(' ', counter2));
							} else {
								columnText = oText;
							}
							latestTextNode = document.createTextNode(columnText);
							$putInHere.append(latestTextNode);
							
							if(oText.length > counter2 && indexOfSpace != -1){
								oText = oText.substring(indexOfSpace);
							}else{
								oText = "";
							}
						}
						if($parentColumn.height() >= targetHeight && latestTextNode != null){
							// too tall :(
							$putInHere[0].removeChild(latestTextNode);
							oText = latestTextNode.nodeValue + oText;
						}
						if(oText.length){
							$item[0].nodeValue = oText;
						}else{
							return false; // we ate the whole text node, move on to the next node
						}
					}
					
					if($pullOutHere.contents().length){
						$pullOutHere.prepend($item);
					}else{
						$pullOutHere.append($item);
					}
					
					return $item[0].nodeType == 3;
				}
				function split($putInHere, $pullOutHere, $parentColumn, targetHeight){
					
					if($pullOutHere.contents().length){
						var $cloneMe = $pullOutHere.contents(":first");
						//
						// make sure we're splitting an element
						if($cloneMe.get(0).nodeType != 1) return;
						
						//
						// clone the node with all data and events
						var $clone = $cloneMe.clone(true);
						//
						// need to support both .prop and .attr if .prop doesn't exist.
						// this is for backwards compatibility with older versions of jquery.
						if($clone.get(0).nodeType == 1 && !$clone.hasClass(prefixTheClassName("dontend"))){ 
							$putInHere.append($clone);
							if($clone.is("img") && $parentColumn.height() < targetHeight + 20){
								//
								// we can't split an img in half, so just add it
								// to the column and remove it from the pullOutHere section
								$cloneMe.remove();
							}else if(!$cloneMe.hasClass(prefixTheClassName("dontsplit")) && $parentColumn.height() < targetHeight + 20){
								//
								// pretty close fit, and we're not allowed to split it, so just
								// add it to the column, remove from pullOutHere, and be done
								$cloneMe.remove();
							}else if($clone.is("img") || $cloneMe.hasClass(prefixTheClassName("dontsplit"))){
								//
								// it's either an image that's too tall, or an unsplittable node
								// that's too tall. leave it in the pullOutHere and we'll add it to the 
								// next column
								$clone.remove();
							}else{
								//
								// ok, we're allowed to split the node in half, so empty out
								// the node in the column we're building, and start splitting
								// it in half, leaving some of it in pullOutHere
								$clone.empty();
								if(!columnize($clone, $cloneMe, $parentColumn, targetHeight)){
									// this node still has non-text nodes to split
									// add the split class and then recur
									$cloneMe.addClass(prefixTheClassName("split"));
									if($cloneMe.children().length){
										split($clone, $cloneMe, $parentColumn, targetHeight);
									}
								}else{
									// this node only has text node children left, add the
									// split class and move on.
									$cloneMe.addClass(prefixTheClassName("split"));
								}
								if($clone.get(0).childNodes.length == 0){
									// it was split, but nothing is in it :(
									$clone.remove();
								}
							}
						}
					}
				}
				
			});
		}

	})(jQuery);

	$(function(){
			var orientation = getOrientationchange();
			var $newsletterContent = $('#newsletterContent');
			var $template = $(".page_template:first");
			

			/*获取浏览器的宽高*/
			function getScreen(){

				return {
					width:window.innerWidth,
					height:window.innerHeight
				}
			}
			function getActualScreen(){
				var _screen = getScreen();
				var _w = _screen.width - 42;
				var _h = _screen.height - 42 - 32;
				return {
					width:_w,
					height:_h<140?140:_h
				}
			}
			function setPageWidth(){
				var _screen = getActualScreen();
				var _w = _screen.width;
				var _h = _screen.height;

				var arr = [
					"<style>",
					".page .header hr, .page .footer hr{ width: "+(_w-20)+"px; }",
					".page{ width: "+_w+"px; height: "+_h+"px; border: 1px solid black; margin: 20px; position: relative;float: left; }",
					"</style>"				
				].join("");
				
				
				$('.page_width').html(arr);

			}
			/*添加样式*/
			/*
			function insertCss(){}
			*/

			/*绑定resize事件*/
			function bindOrientationchange(callback){
				callback = callback||function(orientation){
					document.body.parentNode.setAttribute("class", orientation);
				}
				var supportOrientation = (typeof window.orientation == "number" && typeof window.onorientationchange == "object");
				var updateOrientation = function() {
					if (supportOrientation) {
							updateOrientation = function() {
							var orientation = window.orientation;
							
							switch (orientation) {
								case 90:
								case - 90 :
								orientation = "landscape";
									break;
								default:
								orientation = "portrait";
							}
							callback(orientation)

		                };
					} else {
					    updateOrientation = function() {
					        var orientation = (window.innerWidth > window.innerHeight) ? "landscape": "portrait";
							
					        callback(orientation)
					    };

		            }
					updateOrientation();
				};
				var init = function() {
					updateOrientation();

					
					if (supportOrientation) {
		                window.addEventListener("orientationchange", updateOrientation, false);
		            } else {
		                window.setInterval(updateOrientation,2000);
		            }
		        };
				init();
				
		        // window.addEventListener("DOMContentLoaded", init, false);
			}
			function getOrientationchange(){
				
				var supportOrientation = (typeof window.orientation == "number" && typeof window.onorientationchange == "object");

				if (supportOrientation) {
					var orientation = window.orientation;
					switch (orientation) {
						case 90:
						case - 90 :
						orientation = "landscape";
							break;
						default:
						orientation = "portrait";
					}
				}else{
					var orientation = (window.innerWidth > window.innerHeight) ? "landscape": "portrait";
				}
				return orientation
			}
			
			bindOrientationchange(function (ori){

				if(ori !== orientation){
					orientation = getOrientationchange();
					
					if(ori=='landscape'){
						creatHorizontalNewsletterContent();
					}else{
						creatVerticalNewsletterContent()
					}
				}
			});
			function buildNewsletter($obj,orientation,callback){
				setPageWidth();
				$('#scroller').css('width',999999999);
				var _screen = getActualScreen();
				var _h = _screen.height - 140;
				
				var page = 0;
				$('#pageNumber').val(page+1);	
				(function(){
					var fn = arguments.callee;
					var len = $obj.contents().length;
					if(!len){
						if(callback)callback(page);
						return;	
					}
					page++;
					var $page = $template.clone().addClass("page").css("display", "block");
					$page.find(".footer span").append(page);
					$("."+orientation).append($page);
					$obj.columnize({
						columns: 1,
						target: ".page:last .content",
						overflow: {
							height: _h,
							id: "#"+$obj.attr('id'),
							doneFunc: function(){
								console.log("done with page::"+page);
								fn();
							}
						},
						orientation:$("."+orientation)
					})	
				})();
			};
			function creatAfter(page){
				var myScroll;
				function loaded() {
					myScroll = new iScroll('wrapper', {
						snap: true,
						momentum: false,
						hScrollbar: false,
						onScrollEnd: function () {
							// document.querySelector('#indicator > li.active').className = '';
							// document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
							$('#pageNumber').val(this.currPageX+1)
						}
					 });
				}
				loaded();
				$('#scroller').css('width',page*(getScreen().width));
				$('#numPages').html('of '+page);
				$('#pageNumber').bind('blur',function(){
					var _v = $(this).val();
					
					if((_v-1)==myScroll.currPageX){

					}else{
						myScroll.scrollToPage(_v-1, 0);
						return false;
					}
				})
				$('#previous').bind('click',function(){
					myScroll.scrollToPage('prev', 0);
					$('#pageNumber').val(myScroll.currPageX+1)
					return false;
				})
				$('#next').bind('click',function(){
					if(myScroll.currPageX+1>=page)return;
					myScroll.scrollToPage('next', 0);
					$('#pageNumber').val(myScroll.currPageX+1)
					return false;
				})
				myScroll.refresh();
			}

			function creatVerticalNewsletterContent(){
				$('.horizontal').hide();
				$('.vertical').show();
				console.log("creatVerticalNewsletterContent")
				
				if($('#verticalNewsletterContent').length>0)$('#verticalNewsletterContent').remove();
				var $verticalNewsletterContent = $newsletterContent.clone().attr('id','verticalNewsletterContent');
				$('body').append($verticalNewsletterContent)
				// return
				buildNewsletter($verticalNewsletterContent,'vertical',function(page){
					creatAfter(page)
				})
			}
			function creatHorizontalNewsletterContent(){
				$('.vertical').hide();
				$('.horizontal').show();
				
				console.log("creatHorizontalNewsletterContent")
				// return
				if($('#horizontalNewsletterContent').length>0)$('#horizontalNewsletterContent').remove();
				var $horizontalNewsletterContent = $newsletterContent.clone().attr('id','horizontalNewsletterContent');

				$('body').append($horizontalNewsletterContent)

				buildNewsletter($horizontalNewsletterContent,'horizontal',function(page){
					creatAfter(page)
				})
			}

			if(orientation=='landscape'){
				
				creatHorizontalNewsletterContent();
			}else{
				
				creatVerticalNewsletterContent();
			}
			
			
	});
})

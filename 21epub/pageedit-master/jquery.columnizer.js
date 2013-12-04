// version 1.6.0
// http://welcome.totheinter.net/columnizer-jquery-plugin/
// created by: Adam Wulf @adamwulf, adam.wulf@gmail.com

(function($){

 $.fn.columnize = function(options) {


	var defaults = {
		// default width of columns
		width: 400,
		// optional # of columns instead of width
		columns : false,
		// true to build columns once regardless of window resize
		// false to rebuild when content box changes bounds
		buildOnce : false,
		// an object with options if the text should overflow
		// it's container if it can't fit within a specified height
		overflow : false,
		// this function is called after content is columnized
		doneFunc : function(){},
		// if the content should be columnized into a 
		// container node other than it's own node
		target : false,
		// re-columnizing when images reload might make things
		// run slow. so flip this to true if it's causing delays
		ignoreImageLoading : true,
		// should columns float left or right
		columnFloat : "left",
		// ensure the last column is never the tallest column
		lastNeverTallest : false,
		// (int) the minimum number of characters to jump when splitting
		// text nodes. smaller numbers will result in higher accuracy
		// column widths, but will take slightly longer
		accuracy : false,
		// don't automatically layout columns, only use manual columnbreak
		manualBreaks : false,
		// previx for all the CSS classes used by this plugin
		// default to empty string for backwards compatibility
		cssClassPrefix : ""
	};
	var options = $.extend(defaults, options);
	

    return this.each(function() {
	    var $inBox = options.target ? $(options.target) : $(this);
		var $cache = $('<div></div>'); // this is where we'll put the real content
		var manualBreaks = options.manualBreaks;
		var cssClassPrefix = defaults.cssClassPrefix;
		if(typeof(options.cssClassPrefix) == "string"){
			cssClassPrefix = options.cssClassPrefix;
		}
		$cache.append($(this).contents().clone(true));
		
	  	function prefixTheClassName(className, withDot){
			var dot = withDot ? "." : "";
			if(cssClassPrefix.length){
				return dot + cssClassPrefix + "-" + className;
			}
			return dot + className;
		}

		
		
		
         
		/**
		 * this fuction builds as much of a column as it can without
		 * splitting nodes in half. If the last node in the new column
		 * is a text node, then it will try to split that text node. otherwise
		 * it will leave the node in $pullOutHere and return with a height
		 * smaller than targetHeight.
		 * 
         * Returns a boolean on whether we did some splitting successfully at a text point
         * (so we know we don't need to split a real element). return false if the caller should
         * split a node if possible to end this column.
		 *
		 * @param putInHere, the jquery node to put elements into for the current column
		 * @param $pullOutHere, the jquery node to pull elements out of (uncolumnized html)
		 * @param $parentColumn, the jquery node for the currently column that's being added to
		 * @param targetHeight, the ideal height for the column, get as close as we can to this height
		 */
		 //if(!columnize($clone, $cloneMe, $parentColumn, targetHeight)){
		function columnize($putInHere, $pullOutHere, $parentColumn, targetHeight){
			//
			// add as many nodes to the column as we can,
			// but stop once our height is too tall
			var i = 0;
			while((manualBreaks || $parentColumn[0].scrollHeight <= targetHeight) && $pullOutHere[0].childNodes.length){
				i++
				

				var node = $pullOutHere[0].childNodes[0]
				
				//
				// Because we're not cloning, jquery will actually move the element"
				// http://welcome.totheinter.net/2009/03/19/the-undocumented-life-of-jquerys-append/
				if($(node).find(prefixTheClassName("columnbreak", true)).length){
					//
					// our column is on a column break, so just end here
					return;
				}
				if($(node).hasClass(prefixTheClassName("columnbreak"))){
					//
					// our column is on a column break, so just end here
					return;
				}
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
			// if($item[0].nodeType == 3){
			// 	// it's a text node, split it up
			// 	var oText = $item[0].nodeValue;
			// 	var counter2 = options.width / 18;
			// 	if(options.accuracy)
			// 	counter2 = options.accuracy;
			// 	var columnText;
			// 	var latestTextNode = null;
			// 	while($parentColumn.height() < targetHeight && oText.length){
			// 		var indexOfSpace = oText.indexOf(' ', counter2);
			// 		if (indexOfSpace != -1) {
			// 			columnText = oText.substring(0, oText.indexOf(' ', counter2));
			// 		} else {
			// 			columnText = oText;
			// 		}
			// 		latestTextNode = document.createTextNode(columnText);
			// 		$putInHere.append(latestTextNode);
					
			// 		if(oText.length > counter2 && indexOfSpace != -1){
			// 			oText = oText.substring(indexOfSpace);
			// 		}else{
			// 			oText = "";
			// 		}
			// 	}
			// 	if($parentColumn.height() >= targetHeight && latestTextNode != null){
			// 		// too tall :(
			// 		$putInHere[0].removeChild(latestTextNode);
			// 		oText = latestTextNode.nodeValue + oText;
			// 	}
			// 	if(oText.length){
			// 		$item[0].nodeValue = oText;
			// 	}else{
			// 		return false; // we ate the whole text node, move on to the next node
			// 	}
			// }

			if($pullOutHere.contents().length){
				$pullOutHere.prepend($item);
			}else{
				$pullOutHere.append($item);
			}
			return $item[0].nodeType == 3;
		}
		
		/**
		 * Split up an element, which is more complex than splitting text. We need to create 
		 * two copies of the element with it's contents divided between each
		 */
		function split($putInHere, $pullOutHere, $parentColumn, targetHeight){
			if($putInHere.contents(":last").find(prefixTheClassName("columnbreak", true)).length){
				//
				// our column is on a column break, so just end here
				return;
			}
			if($putInHere.contents(":last").hasClass(prefixTheClassName("columnbreak"))){
				//
				// our column is on a column break, so just end here
				return;
			}
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
				if($cloneMe.hasClass(prefixTheClassName("columnbreak"))){
					//
					// ok, we have a columnbreak, so add it into
					// the column and exit
					$putInHere.append($clone);
					$cloneMe.remove();
				}else if (manualBreaks){
					// keep adding until we hit a manual break
					$putInHere.append($clone);
					$cloneMe.remove();
				}else if($clone.get(0).nodeType == 1 && !$clone.hasClass(prefixTheClassName("dontend"))){ 
					$putInHere.append($clone);
					if($clone.is("img") && $parentColumn.height() < targetHeight + 20){
						//
						// we can't split an img in half, so just add it
						// to the column and remove it from the pullOutHere section
						$cloneMe.remove();
					}else if(!$cloneMe.hasClass(prefixTheClassName("dontsplit")) && $parentColumn[0].scrollHeight <= targetHeight ){//+ 20
						
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
		
		
		
		
		/**
		 * returns true if the input dom node
		 * should not end a column.
		 * returns false otherwise
		 */
		function checkDontEndColumn(dom){

			if(dom.nodeType == 3){
				// text node. ensure that the text
				// is not 100% whitespace
				if(/^\s+$/.test(dom.nodeValue)){
						//
				        // ok, it's 100% whitespace,
				        // so we should return checkDontEndColumn
				        // of the inputs previousSibling
				        if(!dom.previousSibling) return false;
					return checkDontEndColumn(dom.previousSibling);
				}
				return false;
			}
			if(dom.nodeType != 1) return false;
			if($(dom).hasClass(prefixTheClassName("dontend"))) return true;
			if(dom.childNodes.length == 0) return false;
			return checkDontEndColumn(dom.childNodes[dom.childNodes.length-1]);
		}

		function singleColumnizeIt() {
			// $inBox.empty();
			// $inBox.append($("<div class='"
			//  + prefixTheClassName("first") + " "
			//  + prefixTheClassName("last") + " "
			//  + prefixTheClassName("column") + " "
			//  + "' style='width:100%; float: " + options.columnFloat + ";'></div>")); //"
			$col = $inBox//.children().eq($inBox.children().length-1)||$inBox;
		
			$destroyable = $cache.clone(true);

			targetHeight = options.overflow.height;
			

			columnize($col, $destroyable, $col, targetHeight);
			
			// make sure that the last item in the column isn't a "dontend"
			if(!$destroyable.contents().find(":first-child").hasClass(prefixTheClassName("dontend"))){
				split($col, $destroyable, $col, targetHeight);
			}
			
			while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
				var $lastKid = $col.contents(":last");
				$lastKid.remove();
				$destroyable.prepend($lastKid);
			}

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
			console.log("overflow.html",html)
			
			if(options.overflow && options.overflow.doneFunc){
				options.overflow.doneFunc();
			}
			
		}
		singleColumnizeIt();
    });
 };
})(jQuery);

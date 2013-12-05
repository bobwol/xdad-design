(function( $, undefined ) {
		
	function DDR(elem,opts){
		this._create( elem,opts );
	}
	DDR.prototype = {
		_create:function (element,options){
			$.data( element, 'ddr', this );
			this.element = $( element );
			this.options = $.extend( true, {},{
				appendTo: "parent",
				revertDuration: 500,
				container:null,
				droppables:$("#trash"),
				tolerance: 'fit',
				drop:function ($item,$trash){
					this.deleteImage($item,$trash)
				},
				deleteImage:function ($item,$trash){
						
					var recycle_icon = $("<a href='javascript:void(0);' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>");
					$item.fadeOut(function() {
						var $list = $( "ul", $trash ).length ?
							$( "ul", $trash ) :
							$( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );

						$item.find( "a.ui-icon-trash" ).remove();
						
						$item.find( ".ui-widget-header" ).remove();
						$item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
							$item
								.animate({ width: "48px" })
								.find( "img" )
									.animate({ height: "36px" });
						});
					});
					recycle_icon.click(function(){
						$(this).parent().fadeOut(function() {$(this).remove();})
					})
				},
				mxLeft:			0,//左边限制 
				mxRight:		(DDR.getViewportSize().w - this.element[0].offsetWidth - 2),//右边限制 
				mxTop:			0,//上边限制 
				mxBottom:		(DDR.getViewportSize().h - this.element[0].offsetHeight - 2)//下边限制 
			}, options||{});
			this._init();
		},
		_init:function (){
			var self = this;
			this._mxLeft = parseInt(this.options.mxLeft); 
			this._mxRight = parseInt(this.options.mxRight); 
			this._mxTop = parseInt(this.options.mxTop); 
			this._mxBottom = parseInt(this.options.mxBottom); 
			this._mxContainer = this.options.container || null; 
			
			this._mouseMoveDelegate = function(event) {
				return self._mouseMove(event);
			};
			this._mouseUpDelegate = function(event) {
				return self._mouseUp(event);
			};
			this.element
			.bind('mousedown', function(event) {
				$target = $( event.target );
				if($target.hasClass('ui-icon-trash')){
					var  $item =$target.parent().clone().removeAttr('id');
					if ( $target.is( "a.ui-icon-trash" ) ) {
						self.options.deleteImage( $item, $(self.options.droppables[0]));
					}
					return false;
					
				}else {
					return self._mouseDown(event);
				}
				
			})
			
		},
		_mouseDown: function(event) {
			var self = this;
			if ($.browser.msie && event.button == 1 || !$.browser.msie && event.button == 0||($.browser.msie&&$.browser.version=="9.0"&& event.button == 0)) {
				
			} else {
				return false;
			}
			if ($.browser.msie) {
				this.element[0].setCapture();
				event.cancelBubble = true;
			} else {
				window.captureEvents(Event.mousemove);
				event.preventDefault();
				event.stopPropagation();
			}
			
			$(document)
			.bind('mousemove', this._mouseMoveDelegate)
			.bind('mouseup', this._mouseUpDelegate);

			var mouseOffset = this._getMouseOffset(this.element,event);
			var temp = $(this.element).offset();
			this._w = $(this.element)[0].offsetWidth;
			this._h = $(this.element)[0].offsetHeight;
			this._x = mouseOffset.x; 
			this._y = mouseOffset.y;
			this._lastPos = temp;
			this.helper = this._createHelper(event);
			this._cacheHelperProportions();
			this._cacheMargins();
			this._draging = true;
			
		},
		_getMouseOffset:function (target, ev) {
			ev = ev || window.event;
			var docPos = $(target).offset();
			var mousePos = DDR.getMousePos(ev);
			return {
				x: mousePos.x - docPos.left,
				y: mousePos.y - docPos.top
			};
		},
		_mouseMove: function(event) {
			if(!this._draging) return;
			if (document.all)event.returnValue = false;
			var iLeft = DDR.getMousePos(event).x - this._x, 
			iTop = DDR.getMousePos(event).y - this._y,
			mxLeft = this._mxLeft, 
			mxRight = this._mxRight, 
			mxTop = this._mxTop, 
			mxBottom = this._mxBottom;
			
			if(!!this._mxContainer){
				var pos =$(this._mxContainer).offset();
				mxLeft = Math.max(mxLeft,pos.left);
				mxTop = Math.max(mxTop,pos.top);
				mxRight = Math.min(mxRight,pos.right- this.element[0].offsetWidth);
				mxBottom = Math.min(mxBottom, pos.bottom- this.element[0].offsetHeight);
					
			};
			iLeft = Math.max(Math.min(iLeft, mxRight), mxLeft);
			iTop = Math.max(Math.min(iTop, mxBottom), mxTop);
			document.title=iLeft+"/"+iTop;
			this.helper[0].style.left = iLeft - this.margins.left + "px"; ;
			this.helper[0].style.top = iTop - this.margins.top + "px";
			
		},
		_mouseUp: function(event) {
			if ($.browser.msie && event.button == 1 || !$.browser.msie && event.button == 0||($.browser.msie&&$.browser.version=="9.0"&& event.button == 0)) {
				
			} else {
				return false;
			}
			
			$(document)
			.unbind('mousemove', this._mouseMoveDelegate)
			.unbind('mouseup', this._mouseUpDelegate);
			
			if ($.browser.msie) {
				this.element[0].releaseCapture();
				event.cancelBubble = true;
			} else {
				window.releaseEvents(this.element[0].mousemove);
			}
			this._mouseStop(event);
			this._draging = false;
		},
		_createHelper: function(event) {
			var o = this.options;
			console.log()
			var helper = this.element.clone().removeAttr('id');
			if(!helper.parents('body').length) helper.appendTo((o.appendTo == 'parent' ? this.element[0].parentNode : o.appendTo));
			
			helper.css({
				"position":"absolute",
				"left":this._lastPos.left,
				"rop":this._lastPos.top,
				"zIndex":DDR.zIndex,
				"width":this._w,
				"height":this._h
			});
			DDR.zIndex++;
			return helper;

		},
		_mouseStop: function(event) {
			var self = this;
			var dropped = this._drop();
			if(!dropped){
				$(this.helper).animate(this._lastPos, parseInt(this.options.revertDuration, 10), function() {
					self._clear();
				});
			}
		},
		_clear: function() {
			this.helper.remove();
			this.helper = null;
		},
		_cacheMargins: function() {
			this.margins = {
				left: (parseInt(this.element.css("marginLeft"),10) || 0),
				top: (parseInt(this.element.css("marginTop"),10) || 0),
				right: (parseInt(this.element.css("marginRight"),10) || 0),
				bottom: (parseInt(this.element.css("marginBottom"),10) || 0)
			};
		},

		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			};
		},
		_intersect:function(draggable, droppable, toleranceMode) {
			var self = this;
			var dgpos = $(draggable).offset();
			var dppos = $(droppable).offset();

			var x1 = dgpos.left,
				x2 = x1 + self.helperProportions.width,
				y1 = dgpos.top, 
				y2 = y1 + self.helperProportions.height;
			var l = dppos.left,
				r = l + $(droppable).outerWidth(),
				t = dppos.top,
				b = t + $(droppable).outerHeight();
			switch (toleranceMode) {
				case 'fit':
					return (l <= x1 && x2 <= r
						&& t <= y1 && y2 <= b);
					break;
				case 'intersect':
					return (l < x1 + (self.helperProportions.width / 2) // Right Half
						&& x2 - (self.helperProportions.width / 2) < r // Left Half
						&& t < y1 + (self.helperProportions.height / 2) // Bottom Half
						&& y2 - (self.helperProportions.height / 2) < b ); // Top Half
					break;
				case 'pointer':
					var draggableLeft = ((draggable.positionAbs || draggable.position.absolute).left + (draggable.clickOffset || draggable.offset.click).left),
						draggableTop = ((draggable.positionAbs || draggable.position.absolute).top + (draggable.clickOffset || draggable.offset.click).top),
						isOver = $.ui.isOver(draggableTop, draggableLeft, t, l, droppable.proportions.height, droppable.proportions.width);
					return isOver;
					break;
				case 'touch':
					return (
							(y1 >= t && y1 <= b) ||	// Top edge touching
							(y2 >= t && y2 <= b) ||	// Bottom edge touching
							(y1 < t && y2 > b)		// Surrounded vertically
						) && (
							(x1 >= l && x1 <= r) ||	// Left edge touching
							(x2 >= l && x2 <= r) ||	// Right edge touching
							(x1 < l && x2 > r)		// Surrounded horizontally
						);
					break;
				default:
					return false;
					break;
				}

		},
		_drop: function() {
			var self = this;
			var dropped = false;
			$.each(self.options.droppables || [], function() {
				if (self._intersect(self.helper, this, self.options.tolerance)){
					self.helper[0].style.position = '';
					self.options.drop(self.helper,this);
					return dropped = true;
				}

					
			});
			return dropped;
		}
	}
	DDR.getMousePos = function(ev) {
		ev = ev || window.event;
		if (ev.pageX || ev.pageY) {
			return {
				x: ev.pageX,
				y: ev.pageY
			};
		}

		if (document.documentElement && document.documentElement.scrollTop) {
			return {
				x: ev.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft,
				y: ev.clientY + document.documentElement.scrollTop - document.documentElement.clientTop
			};
		}
		else if (document.body) {
			return {
				x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
				y: ev.clientY + document.body.scrollTop - document.body.clientTop
			};
		}
	}
	DDR.zIndex = 1000;
	DDR.getViewportSize = function () {
		return { 
		w: (window.innerWidth) ? 
		window.innerWidth :
		(document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : 
		document.body.offsetWidth,
		h: (window.innerHeight) ? 
		window.innerHeight :
		(document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : 
		document.body.offsetHeight 
		}
	}
	$.fn.ddr = function(options) {   
		
		return this.each(function() {   
			var instance = $.data( this, 'ddr');
			if ( instance ) {
				
			} else {
				$.data( this, 'ddr', new DDR(this,options));
			}
		
		});
	};  
	 

})(jQuery);
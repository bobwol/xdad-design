$(function(){
    var dragresize = new DragResize('dragresize', { minWidth: 120, minHeight: 50, minLeft: 20, minTop: 20, maxLeft: 900, maxTop: 600 });
	var treedict = new TreeDict();
	var rightmenu = new RightMenu();
	
	treedict.init();

    rightmenu.treedict = treedict;
	dragresize.treedict = treedict;
    rightmenu.dragresize = dragresize;

    window.treedict = treedict;
    window.rightmenu = rightmenu;
    window.dragresize = dragresize;
	
	var Bar = function() {this.init();};
	Bar.prototype = {
		init:function(){
			var idA = ['dropbox','kitjs'];
			this.data = {};
			for(var i = 0 ; i < idA.length ; i ++){
				var id = idA[i];
				this.data[id] = $("#"+id);
			}
			this.hide();
		},
		show:function(id,ref){
			var tmpPos = $(ref).offset();
			var dragPos = {
				left: tmpPos.left, 
				top: tmpPos.top,
				width: $(ref)[0].offsetWidth, 
				height: $(ref)[0].offsetHeight
			};
			$("#"+id).css({
				position:'absolute',
				left:dragPos.left+'px',
				top:(dragPos.top+dragPos.height)+'px',
				visible:'visibility',
				'z-index':9999
			})
		},
		hide:function (){
			for(var i in this.data){
				this._hide(this.data[i]);
				
			}
		},
		_hide:function (elem){
			elem.css({
				position:'absolute',
				left:'-999px',
				top:'-999px',
				visible:'visibility',
				'z-index':9999
			})
		}
		
	}
	var bar = new Bar();
	window.bar = bar;
	function log(msg){
		console.log(msg)
	}
    var contains = function(root, el) {
        if (root.compareDocumentPosition)
            return root === el || !!(root.compareDocumentPosition(el) & 16);
        if (root.contains && el.nodeType === 1){
            return root.contains(el) && root !== el;
        }
        while ((el = el.parentNode))
            if (el === root) return true;
        return false;
    } 
	/*
	
	
	*/
	var drsbox = $("#drsbox");
	var dashbox = $("#dashbox");
	$.belowthefold = function(element, settings) {
        var fold;
        var $container = $(settings.container);
        fold = $container.offset().top + $container.height();
        return fold <= $(element).offset().top;
    };
	function getDims(elems) {
		var dims = [], i = 0, offset;
		offset = $(elems).offset();
		dims = [
			offset.top,
			offset.left,
			elems.offsetWidth,
			elems.offsetHeight
		];
		return dims;
	}
    function checkOverlap(collection1,collection2) {
		var dims1 = getDims(collection1),
			dims2 = getDims(collection2),
			x1 = dims1[1], y1 = dims1[0],
			w1 = dims1[2], h1 = dims1[3],
			x2 = dims2[1], y2 = dims2[0],
			w2 = dims2[2], h2 = dims2[3];
			
		return x1>x2&&x1<x2+w2&&y1>y2&&y1<y2+h2&&x1+w1>x2&&x1+w1<x2+w2&&y1+h1>y2&&y1+h1<y2+h2;
	}
	$.rightoffold = function(element, settings) {
        var fold;
		var $container = $(settings.container);
        fold = $container.offset().left + $container.width();
        return fold <= $(element).offset().left;
    };
        
    $.abovethetop = function(element, settings) {
        var fold;
        var $container = $(settings.container);
        fold = $container.offset().top;
        return fold >= $(element).offset().top + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        var fold;
        var $container = $(settings.container);
		fold = $container.offset().left;
        return fold >= $(element).offset().left + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && 
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };
	$.isOverlap = function(idOne,idTwo){
		var objOne=$(idOne),
			objTwo=$(idTwo),
			offsetOne = objOne.offset(),
			offsetTwo = objTwo.offset(),
			topOne=offsetOne.top,
			topTwo=offsetTwo.top,
			leftOne=offsetOne.left,
			leftTwo=offsetTwo.left,
			widthOne = objOne.width(),
			widthTwo = objTwo.width(),
			heightOne = objOne.height(),
			heightTwo = objTwo.height();
		var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne 
				&& topTwo > topOne && topTwo < topOne+heightOne,
			rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne 
				&& topTwo > topOne && topTwo < topOne+heightOne,
			leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne 
				&& topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,
			rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne 
				&& topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
		return leftTop || rightTop || leftBottom || rightBottom;
	}
	
	
    dragresize.isElement = function(elm) {
	    if (elm.className && elm.className.indexOf('drsElement') > -1) return true;
	};
	dragresize.isHandle = function(elm) {
	    if (elm.className && elm.className.indexOf('drsMoveHandle') > -1) return true;
	};
	
	dragresize.ondragfocus = function() { bar.hide();rightmenu.hide();};
	dragresize.ondragstart = function(isResize) {
		var ref = $(this.ref);
		var pos = ref.offset();
		var parent = ref.parent();
		var top = pos.top//+ref[0].offsetHeight;
		var p_top = parent.offset().top;
		var h = ref[0].offsetHeight;
		var p_h = parent[0].offsetHeight;
		var suby = "";
		var type= '';
		if (top+h==p_top+p_h){
			dragresize.equal = true;
		}
	
	};
	dragresize.ondragmove = function(isResize) { 
		var ref = $(this.ref);
		var pos = ref.offset();
		//log(dragresize.pushKnob)
		if(dragresize.pushKnob){
			// var o_h = parseInt(ref.attr("o_height").replace('px',''),10);
			// var o_t = parseInt(ref.attr("o_height").replace('px',''),10);
			// var o_h = parseInt(ref.attr("o_height").replace('px',''),10);
			var parent = ref.parent();
			var top = pos.top//+ref[0].offsetHeight;
			var p_top = parent.offset().top;
			var h = ref[0].offsetHeight;
			var p_h = parent[0].offsetHeight;
			var suby = "";
			var type= '';
			 if(top+h>p_top+p_h){
				dragresize.equal = true;
				type='down'
				suby = (top+h)-(p_top+p_h);
				dragresize.treedict.KnobUp(ref[0],suby,type);	
			}else {
				if(dragresize.equal){
					if(top<p_top){
					
					}else {
						type='up'
						suby = (top+h)-(p_top+p_h);
						dragresize.treedict.KnobUp(ref[0],suby,type);	
					}
					
				};
			}
			
			
			
		}else{
			var dragArray = $(".dragdropresize");
			var l = dragArray.length;
			for (var k = 0; k < l; k++) {
				var drag = dragArray[k];
				if(contains(ref[0],drag)||contains(drag,ref[0]))continue;
				if ($.isOverlap(drag,ref[0])) {
					 var tmpPos = $(drag).offset();
					 dragresize.dashbox.show({
						left: tmpPos.left, 
						top: tmpPos.top,
						width: drag.offsetWidth, 
						height: drag.offsetHeight
					});
				} else {
					dragresize.dashbox.hide();
				}
			}
		}
		
        
	};
	dragresize.ondragend = function(isResize) {
		dragresize.equal = false;
        console.log('ondragend')
		if(dragresize.pushKnob){
			dragresize.treedict.endKnobUp();	
			dragresize.pushKnobA = null;	
			dragresize.pushKnob = null;				
			/*
			如果是layout拖拽，
			遍历dragresize.Knob,
			则统一修改data,
			将遍历dragresize.Knob清空,
			然后在刷新*/
			return;
		}
		console.log('isResize= '+isResize)
		var ref = $(this.ref);
		var pos = ref.offset();
		console.log(pos)
		console.log(!checkOverlap(ref[0],ref.parent()[0]))
		console.log(rightmenu.dragresize.refID)
		
		//return;
		dragresize.dashbox.hide();
        var dragArray = $(".dragdropresize");
		var l = dragArray.length;
		var ref = $(this.ref);
		var pos = ref.offset();
        console.log(pos)
        var isInsert = false;
		for (var k = 0; k < l; k++) {
			var drag = dragArray[k];
			if(contains(ref[0],drag)||contains(drag,ref[0]))continue;
            if (checkOverlap(ref[0],drag)) {
                drag.appendChild(ref[0]);
                var tmpPos = $(drag).offset();
                var ret = {
                    left:pos.left-tmpPos.left,
                    top:pos.top-tmpPos.top
                }
                console.log(ret)
                ref.css(ret); 
                isInsert = true;
                break;				
            }
		}
		log("isInsert="+isInsert);
        if(isInsert){
            dragresize.treedict.up(ref[0],true);		
        }else {
            if (!checkOverlap(ref[0],ref.parent()[0])) {
                dragresize.treedict.box.firstChild.appendChild(ref[0]);
                ref.css({
                    left:pos.left,
                    top:pos.top
                });  
                dragresize.treedict.up(ref[0],true);				
            }else{
				
                 dragresize.treedict.up(ref[0]);	
            }
        }
	};
	dragresize.ondragblur = function() { dragresize.dashbox.hide();};
	dragresize.updateref = function(elm) {this.ref = elm,this.refID = elm.id};
	dragresize.updatezindex = function(zIndex) {drsbox[0].style.zIndex = zIndex};
	dragresize.apply(document);
	dragresize.show = function (elm){
		var pos = $(elm).offset();
		if($(elm).css("position")!="absolute"){
			$(elm).css({
				position:"absolute",
				left:pos.left,
				top:pos.top
			})
		}
		var elmX = parseInt(pos.left);
		var elmY = parseInt(pos.top);
		var elmW = elm.offsetWidth;
		var elmH = elm.offsetHeight;
		css.zIndex++;
		drsbox.css({
			left: elmX,
			top:  elmY,
			width:  elmW,
			height:  elmH
			
		})
		$(elm)[0].style.zIndex = css.zIndex;
		
		dragresize.minWidth = parseInt($(elm).css("minwidth"),10)||dragresize.o_minWidth;
		dragresize.minHeight = parseInt($(elm).css("minHeight"),10)||dragresize.o_minHeight;
		dragresize.updateref(elm);
		css.zIndex++
		dragresize.updatezindex(css.zIndex);
	}
	
	dragresize.hide = function(){
		drsbox.css(css.hide);
	};
	dragresize.regDragsPos = function() {
		var arrDragDivs = [];
		var dragTbl = $(".dragdropresize");
		var i=0;
		var l = dragTbl.length;
		var tmpDiv, tmpPos;
		for (; i < l; i++) {
			tmpDiv = dragTbl[i];
			tmpPos = $(tmpDiv).offset();
			arrDragDivs.push({
				id: tmpDiv.id, 
				left: tmpPos.left, 
				top: tmpPos.top,
				width: tmpDiv.offsetWidth, 
				height: tmpDiv.offsetHeight,
				elem:tmpDiv
			});
		}
		return arrDragDivs;
	}
    
	dragresize.dashbox = {
		show:function (odragArray){
			dashbox.css({
				left: odragArray.left-2,
				top:  odragArray.top-2,
				width:  odragArray.width+2,
				height:  odragArray.height+2,
				zIdex:99999
			})
		},
		hide:function (){
			dashbox.css({
				left: "-999px",
				top:  "-999px",
				width:  0,
				height:  0,
				zIdex:99999
			})
		}
	}
	dragresize.regDragLayout = function(Y) {
		return
		 $(this.ref).next(".dragresize").each(function (){
			var elm = $(this);
			var top = $(this)[0].style.top;
			var height = $(this)[0].style.offsetHeight;
			var y = elm.attr("y");
			var sub = Y-y;
			elm.css({
				top:top+sub,
				height:height+sub
			})
		})
	}
	
	var css = {
		dra:"dragdropresize",
		drs:"drsElement",
		hide:{
			visibility: "visible",
			left: "-999px",
			top:  "-999px",
			width:  0,
			height:  0,
			minHeight:"50px"
		},
		zIndex:1
		
	}
	$(document).bind('mousedown',function (e){
		if(e.which==3)return;
		var elm = e.target || e.srcElement,
		newElement = null,
		isDrs = null,
		isElm = null;
		while (elm) {
			var $elm = $(elm);
			if ($elm.hasClass("remove")) {
					console.log($elm.parents(".dragdropresize"))
					document.body.removeChild($elm.parents(".dragdropresize")[0]);
					break
			}  else if ($elm.hasClass(css.dra)) {
				isElm = true;
				newElement = elm;
				break
            }else if($elm.hasClass(css.drs)){
				isDrs = true;
				newElement = elm;
				break
			}
			log(elm)
            elm = elm.parentNode;
        }
		if(isElm){
		
			dragresize.show(elm);
		}else if (isDrs){
		
		}else {
			dragresize.hide();
		}
		
	});
	
	
})
epub.def(function(){
	var Bacon = function (element,options){
		this.$selecter = $(element);
	    if (!this._create(options)) {
	        this.failed = true;
	    }
	}
	Bacon.prototype = {
        $container:null,
        $copy:null,
        textNodes:null,
        $flow:null,
        $flowContainer:null,
        lineHeight:null,
        flowHeight:null,
        maxLine:null,
        options:null,
        flowIndex:null,
        $currentLine:null,
        
		/*

		*/
		_create:function(options){
			var opts = $.extend(true, {}, Bacon.defaults, options);
			this.options = opts;
            this.$container = (this.options.container)?$(this.options.container):$('body');
			this.flowIndex = 0;
			if (!this._validate(options)) {
                return false;
            }
          	this._init();
          	return true;
        },
        /*
		*校验
        */
        _validate: function(opts) {
            for (var key in opts) {
                if (key.indexOf && key.indexOf('selector') > -1 && $(opts[key]).length === 0) {
                    this._debug('Your ' + key + ' found no elements.');
                    return false;
                }
            }

            return true;
        },
        /*
        *初始化一些变量
        */
        _init:function(){
        	this.$copy = this.$selecter.clone();
            this.textNodes = this._getTextNodes();
        	this.$flow = this._getFlow(this.flowIndex);
            this.$flowContainer = this._createFlowContainer();
        	// this.lineHeight = this._getLineHeight();
         //    this.flowHeight = this._getFlowHeight();
        	// this.maxLine = this._getMaxLine();
            this._render();
        },
       /*
        *获取textnodes
        */
        _getTextNodes:function (){
            var self = this;
           

           var textNodes = self.$copy.find('*').add(self.$copy).contents()
                .not(self.$copy.find('*'));

            // Split each textNode into individual textNodes, one for each
            // word

            textNodes.each(function (index, lastNode) {
                var startOfWord = /\W\b/,
                    result;
                    
                
                while (startOfWord.exec(lastNode.nodeValue) !== null) {
                    result = startOfWord.exec(lastNode.nodeValue);
            
                    // startOfWord matches the character before the start of a
                    // word, so need to add 1.
                    lastNode = lastNode.splitText(result.index + 1);
                        
                    
                }

            });
            return textNodes;
        },
        /*
        *获取当前的流向    
        */
        _getFlow:function(index){
            var $flow = $(this.options.flows[index]);
            if($flow.length<1){
                $flow = this._createFlow();
            }
            return $flow
        },
        /*
        *创建flow的容器
        */
        _createFlowContainer:function(){
            var $flowContainer = $("<div></div>").css('position', 'relative').width('100%').height('100%');
            $flowContainer.appendTo(this.$flow);
            return $flowContainer; 
        },
        /*
        *动态创建flow
        */
        _createFlow:function(){
            var index = this.flowIndex;
            var $temp = $('<div id="single_line_left'+index+'" style="height:400px;border:1px solid red;"  class="single_line"></div>')
            .appendTo(this.$container);
            this.options.flows.push($temp)
            return this._getFlow(this.flowIndex)

        },
        /*
		*判断内容是否益处当前流向
        */
        _isBenefit:function(){

        },
        /*
        *获取行高
        */
        _getLineHeight:function(){
        	var testLine = $("<div></div>").css('visibility', 'hidden').text('test');
        	this.$flowContainer.empty();
        	this.$flowContainer.append(testLine);
        	var lineHeight = testLine.height();
			testLine.remove();
			return lineHeight;
        },
        /*
        *获取当前flow的高度
        */
        _getFlowHeight:function(){
            var height = this.$flowContainer.height();
            return height;
        },
        /*
        *获取总行数
        */
        _getMaxLine:function(){
        	var maxLine = Math.floor(this.flowHeight / this.lineHeight);
            return maxLine;
        },
         /*
        *画行
        */
        _render:function(){
            this.$currentLine = this._createRow(); 
            console.log(this.$currentLine)
            this._recurseThroughNodes($(".line_content", this.$currentLine), this.$copy)
            this._adjustTop();
        },
        /*
        *插入行
        */
        _createRow:function(){
            var $thisLine = 
            $("<div></div>")
                .addClass('line')
                .css('width', (this.$flow.width()) + 'px')
                .css('height', 'auto');    

            $thisLine
                .append($("<div></div>")
                .addClass('line_content')
                .css({
                    // 'text-align':this.options['text-align']
                    // ,'width':'100%'
                }));
            this.$flowContainer.append($thisLine);
            return $thisLine;
        },
        /*
        *递归插入nodes
        */
        _recurseThroughNodes:function(currentNode, copyNode){
            var self = this;
            $(copyNode).contents().each(function () {
                var nextCopy;
                if (this.nodeType == 3) {
                    $(this).appendTo(currentNode);
                }else{
                    nextCopy = $(this).clone().empty().appendTo(currentNode);
                    self._recurseThroughNodes(nextCopy, this);
                }
                if ($(".line_content", self.$currentLine).width() >= self.$currentLine.width() || $(".line_content", self.$currentLine).height() > self.$currentLineHeight) {
                    $(this, currentNode).remove();
                    self.$currentLine = self._createRow();
                    currentNode = $(".line_content",  self.$currentLine);
                    $(".line_content", self.$currentLine[0]).append(this);
                }
                if(self.$flowContainer.height()<self._calculateHeight()){
                    $(this, currentNode).remove();
                    self._adjustTop();
                    self.flowIndex++;
                    self.$flow = self._getFlow(self.flowIndex);
                    self.$flowContainer = self._createFlowContainer();
                    self.$currentLine = self._createRow(); 
                    currentNode = $(".line_content",  self.$currentLine);
                    $(".line_content", self.$currentLine[0]).append(this);

                }
                
            })

           
        },
        /*
        *计算当前总高度
        */
        _calculateHeight:function(){
            var totalLinesHeight = 0;
            $(".line", this.$flowContainer).each(function() {
                totalLinesHeight += $('.line_content', this).height();
            });
            return totalLinesHeight;
        },
        /*
        *设置高度
        */
        _adjustTop:function(){
            var totalLinesHeight = 0;
            $(".line", this.$flow).each(function() {
                $(this).css('top', totalLinesHeight + 'px');
                totalLinesHeight += $('.line_content', this).height();
                // $('.line_content', this).append(' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            });
        }

	}
	Bacon.defaults = {
		'text-align'	: 'justify',
		'flows':[]
	}

	$.fn.bacon = function(options) {
		var options = options || {};
        var thisCall = typeof options;
        switch (thisCall) {

            // method 
            case 'string':
                var args = Array.prototype.slice.call(arguments, 1);
                
                this.each(function () {
                    var instance = $.data(this, 'bacon');
                  	if (!instance) {
                        return false;
                    }

                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                        return false;
                    }
                    instance[options].apply(instance, args);
                });
            break;
            case 'object':

                this.each(function () {

                var instance = $.data(this, 'bacon');

                if (instance) {

                    // update options of current instance
                    instance.update(options);

                } else {

                    // initialize new instance
                    instance = new Bacon(this,options);

                    // don't attach if instantiation failed
                    if (!instance.failed) {
                        $.data(this, 'bacon', instance);
                    }

                }

            });

            break;

        }

        return this;
    };
	

})

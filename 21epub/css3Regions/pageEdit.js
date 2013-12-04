/*
每个region都要具有一定的功能：
    益处时的回调
    指定流动
    删除流动
*/
;(function(){
    // Generic Testing Function
    var supports = (function() {  
       var div     = document.createElement('div'),  
           vendors = 'Khtml Ms O Moz Webkit'.split(' '),  
           len     = vendors.length;  
      
       return function(prop) {  
          if (prop in div.style) return true;  
      
          prop = prop.replace(/^[a-z]/, function(val) {  
             return val.toUpperCase();  
          });  
      
          while (len--) {  
             if (vendors[len] + prop in div.style) {   
                return true;  
             }  
          }  
          return false;  
       };  
    })();  
      
    // Test
    if ( supports('flowInto') ) { 
       $('html').addClass('cssregions');  
    } else {
       $('html').addClass('no-cssregions'); 
    }
    function PageEdit(obj,opt){
            this.setOptions(obj,opt);
    }
    PageEdit.prototype = {
        setOptions:function(obj,opt){
            this.opt = $.extend(true,{},PageEdit.defaults,opt||{});
            this.$obj = $(obj);
            this.$obj.attr('contentEditable',true);
            this.page = 1;
            this.pages = {};
            this.init();
        }, 
        init:function(){

            this.articleSelecterClass = "PageEdit_article";
            this.regionClass = "PageEdit_region";//region_"+time;
            this.pageBreakClass = "PageEdit_break";
            /*
            */
            var css = [
                    '.'+this.articleSelecterClass+'{',
                    '   -webkit-flow-into: article;',
                    '    -moz-flow-into: article;',
                    '    -ms-flow-into: article;',
                    '    -o-flow-into: article;',
                    '    flow-into: article;',
                    '}',
                    '.'+this.regionClass+'{',
                    '   -webkit-flow-from: article;',
                    '    -moz-flow-from: article;',
                    '    -ms-flow-from: article;',
                    '    -o-flow-from: article;',
                    '    flow-from: article;',
                    '   -webkit-region-overflow: break;',
                    '    overflow: hidden;',
                    '    region-fragment: break;',
                    '    -webkit-region-fragment: break;',

                    '    /* overflow is irrelevant within regions when above is specified... */',
                    '    overflow: none;',
                    '}',
                    '.'+this.pageBreakClass+'{',
                    '   page-break-before:always;',
                    '}'
                ].join('');

            this.creatStyle(css);

            this.$articleSelecter = this.$obj//.show();
            
            this.$editSelecter = $(this.opt.editSelecter);

            if(this.$editSelecter.length<1){
                this.$editSelecter = $('<div class="PageEdit_edit"></div>');
                $('body')[0].appendChild(this.$editSelecter[0]);

            }
           
            var time = (+new Date())
            var id = this.$articleSelecter.attr('id');

            if(!id){
                id = "article_"+time;
                this.$articleSelecter.attr('id',id);
            }
          
            
            this.articleSelecterId = id;
            this.$articleSelecter.addClass(this.articleSelecterClass)
            this.$template = $('<div></div>');
            this.$template[0].innerHTML = this.opt.templates.page;
           
            this.$template.find(this.opt.regionSelecter).addClass(this.regionClass);

            this.$previewSelecter = $('<div class="PageEdit_preview"></div>').hide();
             
            this.$editSelecter[0].parentNode.appendChild(this.$previewSelecter[0]);
           
            var inp =  this.$editSelecter[0];
            var div = this.$previewSelecter[0];
            inp.parentNode.insertBefore(div,inp.nextSibling)

            var namedFlows = document.webkitGetNamedFlows();
            this.namedFlow = namedFlows.namedItem("article");

            this.bindEvent();
            this.render();
        },
        creatStyle:function(str){
            if(document.all){
                window.style=str;
                document.createStyleSheet("javascript:style");
            }else{
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML=str;
                document.getElementsByTagName('HEAD').item(0).appendChild(style);
            }
        },
        bindEvent:function(){
            this.namedFlow.addEventListener("webkitregionlayoutupdate", this.updateLayout.bind(this))
        },
        render:function(){
            var namedFlow = this.namedFlow;
            
            var added = 0;
            while (namedFlow.firstEmptyRegionIndex == -1) {
                 this.addPage();
                ++added;

                // FIXME: Workaround for Webkit bug 92506
                // Throttle the maximum amount of regions to be added
                if (added == 40)
                    break;
            }

            this.updateLayout({target: namedFlow})
        },
        updateLayout:function(e){     
            
            var lastRegion, newRegion, emptyRegion,
            
                // the named flow instance
                namedFlow = e.target,      
                
                // get a collection of regions associated with this named flow
                regions = namedFlow.getRegions()

            // are there any empty regions ?
            if (namedFlow.firstEmptyRegionIndex !== -1){   
                emptyRegion = regions[namedFlow.firstEmptyRegionIndex] 
                this.delPage(emptyRegion);
            }      
                                                                              
            // does the content fully fit in the available regions?
            if (namedFlow.overset){ 
                this.addPage();
                
            }
        },
        addPage:function(){
            console.log('addPage')
            var $page = this.$template.clone();
            $page.find(this.opt.regionSelecter).attr('id','page_'+this.page)
            this.pages['page_'+this.page] = $page;

            this.$editSelecter.append($page);
            this.page++;
        },
        delPage:function(region){
            console.log('delPage')
            $(this.pages[$(region).attr('id')]).remove();
        },
       
        save:function(){
            
                
            var self = this;
            var destination = this.$previewSelecter.html("");
            var pages = {};
            
            $(self.opt.regionSelecter,this.$editSelecter[0]).each(function(index,elem){
                var ranges = $(elem)[0].webkitGetRegionFlowRanges();
                    pages[index] = {};
                    // console.log("index::",index)
               
              
                var $page = self.$template.clone()
                
                ranges.forEach(function(range) {
                    // console.log("range::",range)
                    // // console.log("range.getBoundingClientRect::",range.getBoundingClientRect())
                    // // console.log("range.cloneContents::",range.cloneContents().firstChild)

                    
                    
                    // console.log("$(range.cloneContents().firstChild).offset()::",$(range.cloneContents().firstChild).offset())
                    if(!pages[index]['startContainer']){
                        pages[index]['startContainer'] = range.startContainer;
                    }
                    if(!pages[index]['startOffset']){
                        pages[index]['startOffset'] = range.startOffset;
                    }
                     // console.log('tempRange',range.startContainer)
                    if(!pages[index]['range']){
                        pages[index]['range'] = range.cloneRange();
                    }
                    pages[index]['endContainer'] = range.endContainer;
                    pages[index]['endOffset'] = range.endOffset;
                    // console.log('range',range)

                    
                })
                //重新设置range
                var tempRange = pages[index]['range'];
                var startContainer = pages[index]['startContainer'];
                var startOffset = pages[index]['startOffset'];
                var endContainer = pages[index]['endContainer'];
                var endOffset = pages[index]['endOffset'];

                if(startContainer.nodeType==3){
                    if(startContainer.parentNode.tagName=='TD'){
                        startContainer = startContainer.parentNode;
                        startOffset = 0;
                    }
                }
                tempRange.setStart(startContainer,startOffset);
                tempRange.setEnd(endContainer,endOffset);
                pages[index]['newRange'] = tempRange;
                var span = self.insertSpan(tempRange)
                $page.attr('data-rangeTop',$(span).offset().top)
                var parentSpanTop = $(span).parent().offset().top 
                if(parentSpanTop>$(span).offset().top){
                     $page.attr('data-rangeTop',$(this).offset().top)
                }
                tempRange.setStart(startContainer,startOffset);
                tempRange.setEnd(endContainer,endOffset);
                // $endContainer[0].appendChild($('')[0])
                //     console.log('========')

                //获取range包含的节点
                var commonAncestorContainer = tempRange.commonAncestorContainer;
                if($(commonAncestorContainer).attr('id')==self.articleSelecterId||$(commonAncestorContainer).parents("#"+self.articleSelecterId).length){
                    var tempCommonAncestorContainer = self.execContentsAction(commonAncestorContainer,function(clone){
                        clone.appendChild(pages[index]['newRange'].cloneContents())
                    });
                    
                    pages[index]['cloneContents'] = tempCommonAncestorContainer.firstChild;
                }else {
                     pages[index]['cloneContents'] = pages[index]['newRange'].cloneContents();
                }
               // 将节点加入模板中  
               $page.find(self.opt.regionSelecter)[0].appendChild(pages[index]['cloneContents']);
               //记录当然region的高度
               $page.attr('data-regionTop',$(this).offset().top)
               //article模板移出flow-info ／ mce-content-body contenteditable
               $page.find('.'+self.articleSelecterClass)
                    .removeClass(self.articleSelecterClass)
                    .removeClass('mce-content-body')
                    .attr('contenteditable',false)
                    .removeAttr('id')
                    .parent()
                    .css('overflow','visible');
                //region 移出flow-from
               $page.find(self.opt.regionSelecter).removeClass(self.regionClass)

               // var  pos = $(tempstartContainer).offset();
               // $page.attr('data-rangeTop',pos.top)

               
               // // var first =  $page.find('.region').find('.flowed')[0].firstChild;
               // // console.log(first)
               // // console.log($(first)[0].style['paddingTop'])
               //  console.log( pages[index]['cloneContents'])
                // console.log($page[0])
                // var range = document.createRange();
                // var pn  = pages[index]['startContainer'];
                // // console.log('tagName',pn.parentNode.tagName)
                // if(pn.nodeType==3){
                //  pn = pn.parentNode;

                // }else{
                //  pn = pn.childNodes[tempRange['startOffset']]
                // }
               
                // //   console.log('pn',pn)
                // var tempstartContainer = null
                // if($(pn)[0].children[0]){
                //  tempstartContainer = $($(pn)[0].children[0])[0]
                // }else{
                //  tempstartContainer = $(pn)[0];
                // }
                
                //  $(tempstartContainer).addClass('startContainer')
                
                // range.setStart(pn,0);
                // // console.log(pages[index]['startContainer'])

                $(destination).append($page);
            })
        
        },
        getPageContent:function(){
            this.save();
            var str=this.$previewSelecter.html();
            this.opt.preview(str);
        },
        preview:function(){
            this.save();
            // return
            this.$articleSelecter.hide();
            this.$editSelecter.hide();
            this.$previewSelecter.show();
            this.$previewSelecter.find('.region').each(function(){
                var that = $(this);
                var $articleFirst = that.find('.PageEdit_endContainer');
                that.parent().parent().parent().attr('data-rangetop_1',$articleFirst.offset().top)
                that.parent().parent().parent().attr('data-regiontop_1',that.offset().top)

                var datarangetop = that.parent().parent().parent().attr('data-rangetop')
                var dataregiontop = that.parent().parent().parent().attr('data-regiontop')
                var datarangetop_1 = that.parent().parent().parent().attr('data-rangetop_1')
                var dataregiontop_1 = that.parent().parent().parent().attr('data-regiontop_1')
                var sub = (datarangetop - dataregiontop  )-(datarangetop_1 - dataregiontop_1);
                // console.log(datarangetop,datarangetop_1,dataregiontop,dataregiontop_1,sub)
                that.parent().parent().parent().attr("data-sub",sub)
                that.find('.flowed ').css('margin-top',that.parent().parent().parent().attr("data-sub")+"px") 
            })  
            this.clearSpan();
            

        },
        getPreviewContent:function(callback){

            
            if(this.$previewSelecter.css('display')!='none'){

            }else{
                this.preview();
            }
            
            var $clone = $('html').clone(true);
            $clone.addClass('inited');
            $clone.find('script').remove();
            $clone.find('.navbar').remove();
            $clone.find(this.opt.editSelecter).remove();
            $clone.find("#"+this.$articleSelecter.attr('id')).remove();
            if(callback)callback.call(window,$clone);
            var html = $clone[0].outerHTML;
            this.edit();
            // console.log(html)
            return html;
        },
        previewOpenWindow:function(){
            var str = this.getPreviewContent()
             var html = [
                '<!DOCTYPE HTML>',
                str
            ].join('');
           
            var go=open("","运行html代码预览功能","");
            go.document.open();
            go.document.write(html);
            go.document.close();
        },
        edit:function(){
            this.$previewSelecter.html("");
            this.$previewSelecter.hide();
            this.$articleSelecter.show();
            this.$editSelecter.show();
        },
        isBody:function (node) {
            return  node && node.nodeType == 1 && node.tagName.toLowerCase() == 'body';
        },
        findParent:function (node, filterFn, includeSelf) {
            var self = this;
            if (node && !self.isBody(node)) {
                node = includeSelf?node : node.parentNode;
                while (node) {
                    if (!filterFn || filterFn(node) || self.isBody(node)) {
                        return filterFn && !filterFn(node) && self.isBody(node) ? null : node;
                    }
                    node = node.parentNode;
                }
            }
            return null;
        },
        findParents:function (node, includeSelf, filterFn, closerFirst) {
            var self = this;
            var parents = includeSelf && ( filterFn && filterFn(node) || !filterFn ) ? [node] : [];
            while (node = self.findParent(node, filterFn)) {
                parents.push(node);
            }
            return closerFirst ? parents : parents.reverse();
        },
        execContentsAction:function(node,callback){
           
            var self = this;
            var frag = document.createElement('div');
            var parents = self.findParents(node, true);

            for (var i = 0; $(parents[i]).attr('id')!=self.articleSelecterId;) {
                i++;
            }

            var clone = frag;
            var currentLevel;
            for (var j = i, si; si = parents[j]; j++) {
                currentLevel = si.cloneNode(false);
                clone.appendChild(currentLevel);
                clone = currentLevel;
            }
            callback&&callback(clone)

            return frag
        },
        pageBreak:function(){
            if(this.$previewSelecter.css('display')!='none'){
                this.edit();
            }

            var blockNode = this.getBlockNodeForSelection();
            // console.log(blockNode)
            $(blockNode).toggleClass(this.pageBreakClass)
        },
        insertSpan:function(Range){
            // console.log('insertSpan',Range)
            var ELEMENT_NODE = 1;
            var TEXT_NODE = 3;
            var Range = Range
            var startContainer = Range.startContainer;
            var startOffset = Range.startOffset;
            var endContainer = Range.endContainer;
            var endOffset = Range.endOffset;
            var commonAncestorContainer = Range.commonAncestorContainer;

            if(startContainer.nodeType != TEXT_NODE){
                // console.log('==== start')
                var len = startContainer.childNodes.length;
                if(startOffset>len-1)startOffset = len-1
                // console.log('insertSpan startContainer.childNodes[startOffset]',startOffset)
                Range.setStart(startContainer.childNodes[startOffset],0)
                
                // console.log('==== end')
            }
            
                

            Range.collapse(true);
            var oSpan = document.createElement("span");
            oSpan.style['background-color'] = "red";
            oSpan.style['color'] = "red";
            oSpan.style.width = "1px";
            oSpan.style.height = "1px";
            oSpan.className="PageEdit_endContainer";
            // oSpan.appendChild(document.createTextNode("|"));
            Range.insertNode(oSpan);

            
            return oSpan
        },
        clearSpan:function(){
            $('.PageEdit_endContainer').remove();
        },
        getRange: function() {
            var selection = window.getSelection();
            if (selection.rangeCount) {
                return selection.getRangeAt(0);
            }
        },
        getBlockNodeForSelection: function() {
            var node;
            var range = this.getRange();
            
            if (!range)
                return null;

            node = range.commonAncestorContainer;
            // if (node.nodeType == 1)
            //  node = node.childNodes[range.startOffset];
            
            var blockNode = null;
            while (node) {
                
                if (node.nodeType == 1){
                    blockNode = node;
                    break;
                }
                blockNode = node;
                node = node.parentNode;
            }
            return blockNode;
        },
        canvas:function(){
            var str = this.getPreviewContent()
            var temp = [
                "<script src='jquery-1.9.1.min.js'><\/script>",
                "<script src='../html2canvas/html2canvas.js'><\/script>",
                "<script>",
                "html2canvas(document.body, {",
                "    allowTaint: true,",
                "    taintTest: false,",
                "    onrendered: function(canvas) {",
                "       document.body.appendChild(canvas);",
                "       $('.preview').remove();",
                "    }",
                "})",
                "<\/script>"
            ].join('')
            var html = [
                '<!DOCTYPE HTML>',
                str,
                temp
            ].join('');
           
            var go=open("","运行html代码预览功能","");
            go.document.open();
            go.document.write(html);
            go.document.close();
        },
        pdf:function(){



            var str = this.getPreviewContent()
            var temp = [
                "<script src='jquery-1.9.1.min.js'><\/script>",
                "<script src='../html2canvas/html2canvas.js'><\/script>",
                "<script src='../jsPDF/jspdf.js'><\/script>",
                "<script src='../jsPDF/libs/Deflate/adler32cs.js'><\/script>",
                "<script src='../css3Regions/FileSaverjs/FileSaver.js'><\/script>",
                "<script src='../css3Regions/Blobjs/BlobBuilder.js'><\/script>",
                "<script src='../jsPDF/jspdf.plugin.addimage.js'><\/script>",
                "<script src='../jsPDF/jspdf.plugin.standard_fonts_metrics.js'><\/script>",
                "<script src='../jsPDF/jspdf.plugin.split_text_to_size.js'><\/script>",
                "<script src='../jsPDF/jspdf.plugin.from_html.js'><\/script>",

                "<script>",
                "html2canvas(document.body, {",
                "    allowTaint: true,",
                "    taintTest: false,",
                "    onrendered: function(canvas) {",
                "       document.body.appendChild(canvas);",
                "       $('.preview').remove();",
                "       data = canvas.toDataURL('image/jpeg').slice('data:image/jpeg;base64,'.length);",
                "       data = atob(data);",
                "       doc = new jsPDF();",
                "       doc.addImage(data, 'JPEG',0, 0, 200,906);",
                // "        doc.output('datauri');",
                "       doc.save('output.pdf');",
                "    }",
                "})",
                "<\/script>"
            ].join('')
            var html = [
                '<!DOCTYPE HTML>',
                str,
                temp
            ].join('');
           
            var go=open("","运行html代码预览功能","");
            go.document.open();
            go.document.write(html);
            go.document.close();
        }

      
    }
    PageEdit.defaults = {
        templates:{
            page:[
                '<center style="display:block;">',
                '    <div  style="text-align:left;background-color:white;width:14.5cm; height:23.97cm; padding-top:96px; padding-right:120px; padding-bottom:96px; padding-left:120px;">',
                '        <div  class="region" style="border:dotted 2px #cccccc;width:100%;height:100%;overflow:hidden;">',
                '       </div>',
                '   </div>',
                '</center>'
            ].join("")
        },
        editSelecter:'.edit',
        regionSelecter:'.region'
        
    }

    $.fn.pageEdit = function(options) {
        var options = options || {};
        var thisCall = typeof options;
        console.log(this.length)
        if(!this.length){
            
        }
        switch (thisCall) {

            // method 
            case 'string':
                var args = Array.prototype.slice.call(arguments, 1);
               
                this.each(function () {
                    var instance = $.data(this, 'pageEdit');
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

                var instance = $.data(this, 'pageEdit');

                if (instance) {

                    // update options of current instance
                    instance.update(options);

                } else {

                    // initialize new instance
                    instance = new PageEdit(this,options);

                    // don't attach if instantiation failed
                    if (!instance.failed) {
                        $.data(this, 'pageEdit', instance);
                    }

                }


            });

            break;

        }

        return this;
    };

})();
    
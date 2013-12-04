 //jq("#beijing").TitleShow("<div class='mapDiv'>北京地图热点效果-这里是测试换行效果-这里是测试换行效果</div>");
 jQuery.fn.extend({
    TitleShow: function(strHTML) {
        var xOffset = 80;
        var yOffset = -75;
        var preview = jq("#preview_container");
        if(preview.length<=0){
            jq("body").append("<div id='preview_container'></div>");
            preview = jq("#preview_container");
        }
        preview.css({
            "display":"none",
            "position":"absolute",
            "width":"150px",
"word-break":"break-all"
        });
        return this.each(function() {
            var _this = jq(this);
            _this.hover(
                function(e){
                    preview.html(strHTML);
                    preview
                        .css("top",(e.pageY - xOffset) + "px")
                        .css("left",(e.pageX + yOffset) + "px")
                        .css("opaticy",0)
                        .show()
                        .stop()
                        .animate({"opacity":0.9},300);
                        
                },function(){
                    preview
                        .stop()
                        .animate({"opacity":0},300,function(){
                            jq(this).hide();
                        });
                }
            )
            _this.mousemove(function(e){
                preview
                    .css("top",(e.pageY - xOffset) + "px")
                    .css("left",(e.pageX + yOffset) + "px");
            });
        });
    }
});
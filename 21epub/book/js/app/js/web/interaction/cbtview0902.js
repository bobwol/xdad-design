requirejs.config({
	waitSeconds:100,
	paths:path,
    shim:shim
});
if(window.location.href.indexOf('-debug')==-1){
	this.console = {
		log:function(){

		},
		info:function(){
			
		}
	};
};
require(['interaction_view/main'],function(){
	interaction_view.init();
    $('.return a').live('click',function(){
	   var url = location.search; //获取url中"?"符后的字串	
	   var theRequest = new Object();
	   if (url.indexOf("?") != -1) {
	      var str = url.substr(1);
	      strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++){
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1])
	      }
	   }
	   if(theRequest['from']=='page') $(window.parent.document.getElementById('PreviewWindow')).remove();
	   return false;
    });
})
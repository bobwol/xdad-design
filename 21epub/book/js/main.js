requirejs.config({
	waitSeconds:100,
	paths:path,
    shim:shim
});
// if(0/*window.location.href.indexOf('-debug')==-1*/){
// 	this.console = {
// 		log:function(){

// 		},
// 		info:function(){
			
// 		}
// 	};
// };
window.Logs=window.console.log;

require(['lists/main','lists/mvc','iEditor/main','article/main'],function(){
	window.enablePagination=true;
	window.iCurrentModel=null;
	
	var id=global.getRequest('id');
	
	iEditor.event.init();
	article.event.init();
	
	article.setinitialselected();

	
	article.load(id,function(data){

		article.render(data);
		
		iEditor.init();
		if(window.location.hash&&window.location.hash!=""){
			$('a[href="'+window.location.hash+'"]').trigger('click');
		}
		if(enablePagination){
			iEditor.addCssRegion();			
		}
        else global.setscrollnano('.doc-layout-center');
	})
	$('.btn-preview').on('click',function(){
		$('.page-container').data('pageEdit').previewOpenWindow();
		return;
		if (typeof id == "undefined")
			window.open(context_url+'preview');
		else
			window.open(context_url+'preview?id='+id);
	})
})

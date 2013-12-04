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
require(['lists/main','lists/mvc','task/main','iEditor/main','article/main'],function(){
	window.enablePagination=true;
	window.iCurrentModel=null;
	global.modal.create('task_submitModal','modal-small');
	global.modal.create('materialslist','large-modal');
	var id=global.getRequest('id');
	task.model=new iTaskModel({id:'task'});
	// article.load(id,function(data){
		// article.render(data);
	if(enablePagination){
		iEditor.addCssRegion();			
	}
        // else global.setscrollnano('.doc-layout-center');
	// })
	article.mvc=new lists.mvc({
			container:'.page-container',
			templatefile:'article/template/articlePreviewTemplate.js',
			type:'grid',
			wrap:null,
			events:{
			},
			url:context_url+'getbodies?id='+id,
			bindchange:false,
			reset:true,
			wait:true,
			addMore:false,
	})
	article.mvc.render();
	task.getinfo(id,function(data){
		if(data.code==200){
			task.model.set(data.data);
			
		}
		else{
			global.message(data.msg);
		}
		$('.topbar .btn-group').html(task.taskinfoTemplate(task.model.toJSON()));
		window.taskmvc=new lists.mvc({
			container:'.summary-mod .mod-bd',
			templatefile:'template/taskinfo.js',
			type:'custom',
			data:task.model.toJSON(),
			bindchange:false,
		})
		taskmvc.render();
	})
})

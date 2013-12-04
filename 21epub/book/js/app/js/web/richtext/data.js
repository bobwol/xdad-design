(function(bodycontent){
	bodycontent.getbody=function(callback){
		var url=context_url+'getbody';
		global.json.load(url,callback)
	};
	bodycontent.setbody=function(callback){
		var url=context_url+'/setbody';
		global.model.save(bodycontent.model,null,function(data){
			if(data.code==200)
				global.message('success',data.msg);
				if(callback) callback();
		});
		//global.model.save(url,)
	};
	bodycontent.getbodies=function(callback){
		var url=context_url+'getbodies';
		global.json.load(url,callback,true)
	};
	bodycontent.setbodies=function(callback){
		var url=context_url+'/setbodies?debug=true';
		bodycontent.model.seturl=function(method){
			if(method=='update'){
				return url;
			}
		}
		global.model.save(bodycontent.model,null,function(data){
			if(data.code==200)
				global.message('success',data.msg);
				if(callback) callback();
		});
		//global.model.save(url,)
	};
	bodycontent.add=function(id,title){
		bodycontent.model.icollection.add({id:id,title:title});
		var iHandlemodel=bodycontent.model.icollection.get(id);
		$('.ui-layout-center-bd .nav-tabs').children('ul').append(iHandlemodel.iview.render_model(bodycontent.tab_template));
		$('.ui-layout-center-bd .tab-content').append(iHandlemodel.iview.render_model(bodycontent.content_template));
	};
	bodycontent.remove=function(id){
		var model=bodycontent.model.icollection.get(id);
		bodycontent.model.icollection.remove(model);
		if(bodycontent.model.icollection.length>0){
			$('.ui-layout-center-bd .nav-tabs a[href="#'+bodycontent.model.icollection.at(0).id+'"]').tab('show');
			tEditor.load('article'+bodycontent.model.icollection.at(0).id);
		}
	};
	bodycontent.edit=function(data){
		var id=data.id;
		var model=bodycontent.model.icollection.get(data.id);
		delete data.id;
		model.set(data);
		$('.ui-layout-center-bd .nav-tabs').find('a.title[data-id="'+id+'"]').html(data.title);
	};	
})(bodycontent);
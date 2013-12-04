(function(material){
	material.materialslistforinsert=function(callback,opt){
		if(!opt) opt="";
		else opt='&'+opt;
		var url=portal_url+'materialslist.json?source=insert'+opt;
		global.json.load(url,callback);
	};
	material.materialslist=function(callback,opt){
		if(!opt) opt="";
		else opt='&'+opt;
		var url=portal_url+'materialslist.json?source=manage&size=20'+opt;
		global.json.load(url,callback);
	};
	material.refmaterials=function(callback,opt){
		if(!opt) opt="";
		else opt='&'+opt;
		var url=context_url+'refmaterials.json?source=manage'+opt;
		global.json.load(url,callback);
	};
	material.updatedmaterials=function(callback,opt){
		if(!opt) opt="";
		else opt='&'+opt;
		var url=context_url+'updatedmaterials.json?source=manage'+opt;
		global.json.load(url,callback);
	};
	material.setcategories=function(callback){
		global.model.save(material_list.model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				if(callback) callback();
			}
		});
	};
	material.update=function(data){
		if(material_list.model.current){
			var model=global.model.getModelById(material_list.model,material_list.model.current);
			model.set(data);
			$(material_list.model.el).find('.content-item[id="'+material_list.model.current+'"]').addClass('active');
		}
	};	
	material.jsonload=function(id){
		iCurrentMaterial=id;
		var url='/static/'+id+'/index.json';
		global.json.load(url, function(d) {
			var data = d.data;
			var result=data.Result;
			for (i in result){
				var content=result[i];
				var overlays=content.overlays;
				interactionpageid=global.getUniqueId('interactpage_');
				add_interaction_page(interactionpageid,i);
				_.each(overlays,function(overlay){
					overlay.iType=number2type(overlay.iType);
					var oldoverlay=iElementlist.get(overlay.id);
					if(oldoverlay) iElementlist.remove(oldoverlay);
				})
				ComacInteractionCollection.reset(overlays,{silent: true});
			}
			if(result.length>1){
				$('a.carousel-control').removeClass('hidden');
				$('.carousel').carousel({
					interval:false,
				});
				$('a.carousel-control.left').addClass('hidden');
				$('.carousel').on('slid',function(){
					if($('div#interaction_area').children().first().hasClass('active')) $('a.carousel-control.left').addClass('hidden');
					else $('a.carousel-control.left').removeClass('hidden');
					if($('div#interaction_area').children().last().hasClass('active')) $('a.carousel-control.right').addClass('hidden');
					else $('a.carousel-control.right').removeClass('hidden');
				})
			}
			else{
				$('a.carousel-control').addClass('hidden');
			}
		});
	}	
	// material.setimages=function(data){
		// var url=context_url+'/setimages';
		// global.model.save(photogallery.model,null,function(data){
			// console.info(data);
		// },true);
		// //global.model.save(url,)
	// };
})(material);
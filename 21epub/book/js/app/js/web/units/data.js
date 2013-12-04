(function(units){
	units.unitslist=function(callback,opt){
		var query=(document.location.search?("?"+document.location.search.replace('?',"")):"");
		if(query=="") query=opt?("?"+opt):"";
		else query=query+(opt?("&"+opt):"");
		var url=context_url+'unitslist_bg.json'+query;
		global.json.load(url,callback)
	};
	units.unitslistforinsert=function(callback,opt){
		if(!opt) opt='';
		else opt="&"+opt;
		var url=context_url+'unitslist_bg.json?source=insert'+opt;
		global.json.load(url,callback)
	};
	units.unitslistforlhh=function(callback,opt){
		if(!opt) opt='';
		else opt="&"+opt;
		var url=portal_url+'unitslist_bg.json?source=insert&portal_type=interaction.lhh'+opt;
		global.json.load(url,callback)		
	};
	units.saveitems=function(callback){
		var url=portal_url+'saveitems.json';
		global.model.save(units.model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				if(callback) callback();
			}
		});
	};
	units.update=function(data,id){
		if(units.model.current||id){
			var modelid=id||units.model.current;
			var model=global.model.getModelById(units.model,modelid);
			model.set(data);
			if(units.model.current) $(units.model.el).find('.content-item[id="'+units.model.current+'"]').addClass('active');
		}
	};	
	units.updateChannels=function(data){
		if(units.model.current){
			var model=global.model.getModelById(units.model,units.model.current);
			data.web_option=parseInt(data.web_option);
			data.ipad_option=parseInt(data.ipad_option);
			data={channels:data};
			model.set(data);
		}
	};
	units.updateCategory=function(value,checked){
		if(units.model.current){
			var model=global.model.getModelById(units.model,units.model.current);
			var categories=model.toJSON().categories;
			var values=_.clone(categories.values);
			if(checked=='checked') values=_.union(values,[value]);
			else values=_.without(values,value);
			data={categories:{values:values}};
			model.set(data);
		}		
	};
})(units);
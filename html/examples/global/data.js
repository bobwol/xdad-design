(function(global){
	global.html={
		load:function(url,callback,debug){
			if(global.debug||debug) url=url+'?debug=1';
			var returned=$.ajax({
				url:url,
				type:"GET",
				data:"",
				success:function(data){
					$(document).trigger('server_ok');
					callback(data,data.code);
				},
				error:function(){
					display_message('error','服务器请求未应答');
					$(document).trigger('server_error');
					if(jqwait_on) jqwait_simple_close();
				}
			})
			return returned;
		},
	};
	global.json={
		load:function(url,callback,debug){
			if(global.debug||debug) url=url+'?debug=1';
			var returned=$.ajax({
				url:url,
				type:"GET",
				data:"",
				dataType:"JSON",
				success:function(data){
					$(document).trigger('server_ok');
					callback(data,data.code);
				},
				error:function(){
					display_message('error','服务器请求未应答');
					$(document).trigger('server_error');
					if(jqwait_on) jqwait_simple_close();
				}
			})
			return returned;
		},
		post:function(url,data,callback){
			$.ajax({
				url:url,
				type:"POST",
				data:data,
				dataType:"JSON",
				success:function(data){
					var code=data.code;
					$(document).trigger('server_ok');
					callback(data,data.code);
				},
				error:function(){
					display_message('error','服务器请求未应答');
					$(document).trigger('server_error');
					if(jqwait_on) jqwait_simple_close();
				}
			})
		}
	}
	global.model={
		getIds:function(model){//return the model's Id list for tree or collection
			var returned=[];
			returned=model.icollection.pluck('id');
			model.icollection.each(function(m){
				returned=_.union(returned,global.model.getIds(m));
			});
			return returned;
		},
		getModelList:function(list,model){//return a list for model or collection or tree
			model.icollection.each(function(m){
				global.model.getModelList(list,m);
				list.add(model);
			})
		},
		getModelTreeByIdsTree:function(model,ids_tree){
			_.each(ids_tree,function(ids){
				ids.model=global.model.getModelById(model,ids.id);
				ids.children=global.model.getModelTreeByIdsTree(model,ids.children);
			})
			return ids_tree;
		},
		getModelById:function(model,id){
			var returned=null;
			model.icollection.each(function(m){
				if(m.id==id) returned=m;
				var result=global.model.getModelById(m,id);
                if(result) returned=result;
			})
			return returned;
		},
		getRootModel:function(model){
			return model.Root;
		},
		getModelCollectionById:function(model,id){
			var returned=null;
			if(model.icollection.get(id)) return model.icollection;
			model.icollection.each(function(m){
				var result=global.model.getModelCollectionById(m,id)
				if(result) returned=result;
			})
			return returned;
		},
		collection2model:function(model,ResultsType){
			var results=[];
			if(model.icollection.length>0){
				model.icollection.each(function(m){
					var dict={};
					dict=_.clone(m.toJSON());
					results.push(dict);					
				})
			}
			return results;
		},
		tree2model:function(model,ResultsType,ChildrenType){
			var results=[];
			model.icollection.each(function(m){
				var dict={};
				dict=_.clone(m.toJSON());
				dict[ResultsType]=global.model.tree2model(m,ChildrenType,ChildrenType);
				results.push(dict);					
			})
			return results;			
		},
		model2collection:function(model,ResultsType){
			if(model.has(ResultsType)){
				model.icollection.add(model.get(ResultsType));
			}
		},
		model2tree:function(model,ResultsType,ChildrenType){
			if(model.has(ResultsType)){
				model.icollection.add(model.get(ResultsType));
				model.icollection.each(function(m){
					if(m.has(ChildrenType)){
						global.model.model2tree(m,ChildrenType,ChildrenType);
					}
				})
			}			
		},
		save:function(model,attributes,callback){
			if(!attributes) attributes={};
			model.save(
				attributes,
				{
					wait:true,
					success: function(m,response){
						$('.action-save').button('reset');
						returned=eval(response);
						callback(response);
					},
					error:function(){
						$('.action-save').button('reset');
						display_message('error','服务器请求未应答');
						$(document).trigger('server_error');
						if(jqwait_on) jqwait_simple_close();
					}
				}
			);
		},
		sort:function(model,ids){
			model.icollection.reset(_.map(ids,function(id){
					return model.icollection.get(id);
			}),{silent:true});
		},
		sort_tree:function(Root,model,ids_tree){
			for(i in ids_tree){
				var id=ids_tree[i].id;			
				global.model.sort_tree(Root,ids_tree[i].model,ids_tree[i].children);
			}
			model.icollection.reset(_.pluck(ids_tree,'model'),{silent:true});
		}
	}
})(global);
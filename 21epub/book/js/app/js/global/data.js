(function(){
	if(typeof global=="undefined") global={};
	if(typeof jqwait_on=="undefined") jqwait_on=null;
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
				error:function(response){
					console.info(response);
					global.message('error','服务器请求未应答');
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
					global.message('error','服务器请求未应答');
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
					global.message('error','服务器请求未应答');
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
				if(ids.id&&ids.id!="") ids.model=global.model.getModelById(model,ids.id);
				else ids.model=null;
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
			if(!attributes) attributes=null;
			model.save(
				attributes,
				{
					wait:true,
					success: function(m,response){
						if($('.action-save').length>0) $('.action-save').button('reset');
						returned=eval(response);
						if(jqwait_on) jqwait_simple_close();
						callback(response);
					},
					error:function(){
						$('.action-save').button('reset');
						global.message('error','服务器请求未应答');
						$(document).trigger('server_error');
						if(jqwait_on) jqwait_simple_close();
					}
				}
			);
		},
		saveall:function(collection,callback){
			
		},
		sort:function(model,ids){
			model.icollection.reset(_.map(ids,function(id){
					return model.icollection.get(id);
			}),{silent:true});
		},
		sort_tree:function(Root,model,ids_tree){
			if(ids_tree.length>0){
				for(i in ids_tree){
					var id=ids_tree[i].id;			
					global.model.sort_tree(Root,ids_tree[i].model,ids_tree[i].children);
				}
				model.icollection.reset(_.pluck(ids_tree,'model'),{silent:true});
			}
		},
		remove:function(model,ids,callback){
			_.each(ids,function(id){
				var m=global.model.getModelById(model,id);
				m.destroy({
					wait:true,
					success: function(m,response){
						returned=eval(response);
						callback(response);
					},
					error:function(){
						global.message('error','服务器请求未应答');
						$(document).trigger('server_error');
						if(jqwait_on) jqwait_simple_close();
					}
				});
			})
		},
		translate:function(model){
			var translate_items=[];
			var values=_.clone(model.attributes);
			if(model.translate) translate_items=model.translate;
			_.each(translate_items,function(i){
				values[i]=global.dict.query(values[i]);
			})
			return values;
		},
		replace:function(source,target,keys){//replace a model with some value
			if(keys){
				_.each(keys,function(key){
					source.set(key,target.get(key));
				})				
			}
			else {
				var dict=target.toJSON();
				delete dict.id;
				source.set(dict);
			}
		},
		copy:function(source,target,ids,keepid){
			_.each(ids,function(id){
				var model=global.model.getModelById(source,id);
				model_data=_.clone(model.toJSON());
				if(!keepid) model_data.id=global.getUniqueId(target,target.Root.id+"_",null);
				target.icollection.add(model_data);
			})
		},
		copy_tree:function(source,target,ids_tree,keepid){
			_.each(ids_tree,function(ids){
				if(ids.id&&ids.id!=""){
					var model=global.model.getModelById(source,ids.id);
					var model_data=_.clone(model.toJSON());
					if(!keepid) model_data.id=global.getUniqueId(target,target.Root.id+"_",null);
					target.icollection.add(model_data);
					global.model.copy_tree(source,target.icollection.get(model_data.id),ids.children,keepid);
				}
				else {
					global.model.copy_tree(source,target,ids.children,keepid);
				}
			})
		},
		sent:function(url,data,callback){
			var modelstructure=Backbone.Model.extend({
				initialize:function(){
					this.set('id','GlobalSave');
				},
				sync: function(method, model, options) {
					this.attributes=data;
					if(method=='create'){
						return;
					}
					if(method=='update'){
						options.url=url;
					}
					if(method=='delete'){
						return;
					}
					if(method=='read'){
						return;
					}
					Backbone.emulateHTTP = true ;
					Backbone.emulateJSON = true ;
					Backbone.sync(method, model, options);
				}				
			})	
			var model=new modelstructure();
			global.model.save(model,{},function(d){
				callback(d);
			})
		}
	}
})();
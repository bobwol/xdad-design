(function(project){
	project.projects=function(callback){
		var url=portal_url+'projectslist.json';
		global.json.load(url,callback);
	};
	project.update=function(data){
		if(project.model.current){
			var model=global.model.getModelById(project.model,project.model.current);
			if(data.roles){
				var roles=model.toJSON().roles;
				roles=_.map(roles,function(i){
					var dict=i;
					for(k in dict){
						dict[k]=data.roles[roles.indexOf(i)];
					}
					return dict;
				})
				data.roles=roles;
			}
			console.log(data);
			model.set(data);
			$(project.model.el).find('.content-item[id="'+project.model.current+'"]').addClass('active');
			global.model.save(model,{},function(data){
				if(data.code==200){
					global.message('success',data.msg);
					model.set(data.data);
					project.renderinfo(model.id);
				}
			})
		}
	};
	project.check_member_status=function(userid){
		if(project.model.current){
			var model=global.model.getModelById(project.model,project.model.current);
			var members=model.get('members');
			var returned=false;
			_.each(members,function(member){
				if(member.id==userid) returned=true;
			})
		};
		return returned;
	};
	project.addmember=function(ids){
		if(project.model.current){
			var model=global.model.getModelById(project.model,project.model.current);
			var members=model.get('members');
			var memberids=_.pluck(members,'id');
			var newmemberids=_.union(memberids,ids);
			console.log(newmemberids);
			members=_.map(newmemberids,function(i){
				return {id:i,name:user.model.icollection.get(i)?user.model.icollection.get(i).toJSON().name:_.findWhere(members,{id:i}).name};
			})
			model.set('members',members);
			global.model.save(model,{},function(data){
				if(data.code==200){
					global.message('success',data.msg);
					model.set(data.data);
					project.renderinfo(model.id);
				}
			})		
			user.model.icollection.each(function(model){
				model.iview.update();
			});
		};		
	};
	project.removemember=function(ids){
		if(project.model.current){
			var model=global.model.getModelById(project.model,project.model.current);
			var members=model.get('members');
			var memberids=_.pluck(members,'id');
			var newmemberids=_.reject(memberids,function(id){return _.include(ids,id);});
			console.log(newmemberids);
			members=_.map(newmemberids,function(i){
				return {id:i,name:user.model.icollection.get(i)?user.model.icollection.get(i).toJSON().name:_.findWhere(members,{id:i}).name};
			})
			model.set('members',members);
			global.model.save(model,{},function(data){
				if(data.code==200){
					global.message('success',data.msg);
					model.set(data.data);
					project.renderinfo(model.id);
				}
			});
			user.model.icollection.each(function(model){
				model.iview.update();
			});	
		};		
	}
})(project);
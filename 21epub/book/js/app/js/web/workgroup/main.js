		var iWorkgroupModel=iAppModel.extend({
			defaults:{
			},
			el:'.list-content table tbody',
			wrap:null,
			setcollection:function(){
				this.icollection=new iWorkgroupCollection();
			},
			setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
				return true;
			},
			setview:function(){
				this.iview=new iWorkgroupView({model:this});
			},
			seturl:function(method){
				var url;
				
				//if(method=='create'){
				//	options.url=hosturl+this.url+'overlaycreate.json';
				//}
				if(method=='update'){
					 url=portal_url+"setworkgroup.json?id="+this.id;
				}
				if(this.debug){
					url=url+'?debug=1';
				}
				return url;
				//if(method=='delete'){
				//	options.url=hosturl+this.url+'overlaydelete.json?id='+model.id;
				//}
				//if(method=='read'){
				//	options.url=hosturl+this.url+'overlayget.json?id='+model.id;
				//}
			}			
		});
		var iWorkgroupCollection=iAppCollection.extend({
			initialize:function(){
				this.setonadd();
				this.setonreset();
				this.setonremove();
			},
			model:iWorkgroupModel
		});
		var iWorkgroupView=iAppView.extend({
			initialize:function(options){
				_.bindAll(this);
				this.model.bind('change',this.update);
			},
			events:{

			},
		});
(function(win){
	win.workgroup={};
	win.workgroup=$.extend(workgroup,{
		event:function(){
			
		},
		load:function(callback,opt){
			if(!opt) opt="";
			else opt='&'+opt;
			var url=portal_url+'workgroupslist.json'+opt;
			global.json.load(url,callback);
		},
		submit:function(data){
		
		},
		update:function(data){
			if(workgroup.model.current){
				var model=global.model.getModelById(workgroup.model,workgroup.model.current);
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
				$(workgroup.model.el).find('.content-item[id="'+workgroup.model.current+'"]').addClass('active');
				global.model.save(model,{},function(data){
					if(data.code==200){
						global.message('success',data.msg);
						model.set(data.data);
						workgroup.renderinfo(model.id);
					}
				})
			}
		},
		renderinfo:function(id){
			var model=workgroup.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties,true);
			$('.ui-layout-right').find('.mod[id="'+id+'"]').find('.action-modal').each(function(){
				var modalname=$(this).attr('data-target');
				var attr=$(this).attr('data-attr');
				$(this).on('click',function(){
					global.modal.openDataModal('#'+modalname,model,workgroup[modalname+'_template']);
					datapicker_load({format:'yyyy-mm-dd',autoclose:true});
				})
			})

		},
		template:_.template(
			[
  '            <li id=<%=id%>>',
'					<div class="wraparea">',
   '            		 <h4><a href="#"><%=name%></a></h4>',
    '					<div class="hitarea"></div>',
   '				</div>',
 '			 </li>'
 			].join("")
		),
		ListTemplate:_.template(
			[
	'			<tr id="<%=id%>" class="<%=status%> content-item">',
				'    <td><input type="checkbox"></td>',
				'    <td><span class="title red"><%=title%></span>',
				'      <div class="action">',
				'        <ul><% _.each(operationalitems,function(operate){ %>',
'				<%if(operate.enabled){%>',
				'			  <li><a class="list-<%=operate.id%>" href="#<%=operate.id%>"><%=global.dict.query(operate.id)%></a></li>',
'				<%}else{%>',
				'			  <li><%=global.dict.query(operate.id)%></li>',
'				<%}%>',
				'		<% }) %></ul>',
				'      </div></td>',
	'			     <td>',
	'			     	<span class="status"><a style="color:#090;" href="page_edit.html"><%=global.dict.query(type)%></a></span>',
	'			     </td>',
				'    <td><%=left%></td>',
				'    <td><%=roles[0]["writing"]%></td>',
				'    <td><%=planEnd%></td>',
				'    <td><%=planStart%></td>',
				'    <td><%=progress%>%</td>',
				'</tr>',
			].join("")
		),
		MenuTemplate:_.template(
		[
			'			<table cellspacing="0" class="hascheckbox list">',
			'            	<thead>',
			'					<tr>',
			'						<th scope="col">子任务</th>',
			'						<th scope="col" width="10%">类型</th>',
			'						<th scope="col" width="10%">剩余</th>',
			'						<th scope="col" width="10%">编辑</th>',
			'						<th scope="col" width="15%">开始日期</th>',
			'						<th scope="col" width="15%">结束日期</th>',
			'						<th scope="col" width="10%">进度</th>',
			'					</tr>',
			'				</thead>',
			'            </table>'
		].join("")
		),
	    modal_template:_.template(
		[
'		  <div class="modal-header">',
'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'		    <h3>项目组成员设置</h3>',
'		    <button class="btn btn-small action-addmember action-inset" type="button">添加成员</button>',
'		    <button class="btn btn-small action-removemember action-inset" type="button" style="left:415px">移除成员</button>',
'	      <button class="btn btn-small action-showmembers action-inset" type="button" style="position:absolute; left:auto;right: 50px; top:5px;">查看项目组成员</button>',
'		  </div>',
'		  <div class="modal-body">',
'		 </div>'
			].join("")
		),
		list_template:_.template(
			[
'	      <div class="left-column">',
'	        <div class="column-hd">',
'	          <h3>分类目录</h3>',
'	        </div>',
'	        <div class="column-bd nanoscrollbar">',
'	          <div class="categories list-tree" id="contentstree">',
'	            <ul>',
'	              <li class="active">',
'					<div class="wraparea">',
'	                	<h4><a href="#">所有</a></h4>',
'					</div>',
'	              </li>',
'				</ul>',
'	          </div>',
'	        </div>',
'	      </div>',
'	      <div class="right-column">',
'	        <div class="column-hd list-menu">',
'	        </div>',
'	        <div class="column-bd nanoscrollbar list-content">',
'	          <table cellspacing="0" class="hascheckbox units hascover list">',
'	            <tbody>',
'	            </tbody>',
'	          </table>',
'	        </div>',
'	        <div class="column-ft list-page">',
'	        </div>',
'	      </div>',
			].join("")
		),
	})
})(window);
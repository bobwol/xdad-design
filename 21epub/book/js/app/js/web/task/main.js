		var iTaskModel=iAppModel.extend({
			defaults:{		
				planEnd	:'',
				stage	:null,
				status	:null,
				project_id	:null,
				demand	:'',
				progress	:	0,
				properties:[],
				planStart	:'',
				left	:null,
				title	:null,
				type	:null,
			},
			el:'.list-content table tbody',
			wrap:null,
			setcollection:function(){
				this.icollection=new iTaskCollection();
			},
			setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
				return true;
			},
			setview:function(){
				this.iview=new iTaskView({model:this});
			},
			seturl:function(method){
				var url;
				
				//if(method=='create'){
				//	options.url=hosturl+this.url+'overlaycreate.json';
				//}
				if(method=='update'){
					 url=portal_url+"settask.json?id="+this.id;
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
		var iTaskCollection=iAppCollection.extend({
			initialize:function(){
				this.setonadd();
				this.setonreset();
				this.setonremove();
			},
			model:iTaskModel
		});
		var iTaskView=iAppView.extend({
			initialize:function(options){
				_.bindAll(this);
				this.model.bind('change',this.update);
			},
			events:{
				'click .status a':'todo',
				'click .list-preview':'preview',
				'click .list-progress':'progress',
				'click .list-submit':'submit',
				'click .list-execute':'execute'
			},
			todo:function(){
				if(this.model.get('stage')=='writing'){
					document.location.href=portal_url+this.model.get('target')+'/writing';
				}
				return false;
			},
			preview:function(){
				document.location.href=portal_url+this.model.get('target')+'/preview?id='+this.model.id;
				return false;
			},
			submit:function(){
				var view=this;
				$("#project_submitModal").html(task.SubmitTemplate({"model":this.model.toJSON(),"type":'submit'}));
				global.modal.show('#project_submitModal');
				$('#project_submitModal .btn').on('click',function(){
					var result={};
					result.id=view.model.id;
					result.type='submit';
					result.comment=$('#project_submitModal #comment').val();
					task.submit(result,function(data){
						if(data.code==200){
							global.message('success',data.msg);
							var model=task.model.icollection.get(data.data.id);
							model.set(data.data);
						}
						else{
							global.message('error',data.msg);
						}
					});
				})
				return false;
			},
			progress:function(){
				return false;
			},
			execute:function(){
				if(this.model.get('stage')=='writing'){
					document.location.href=portal_url+this.model.get('target')+'/writing';
				}else{
					document.location.href=portal_url+this.model.get('target')+'/preview';
				}
				return false;

			}
			//template:iTaskTemplate
		});
(function(win){
	win.task={};
	win.task=$.extend(task,{
		event:function(){
			
		},
		load:function(callback,opt){
			if(!opt) opt="";
			else opt='&'+opt;
			var url=portal_url+'taskslist.json?source=manage'+opt;
			global.json.load(url,callback);
		},
		getinfo:function(id,callback){
			if(!id) id=global.getRequest('id');
			var url=context_url+'gettaskinfo.json?id='+id;
			global.json.load(url,callback);			
		},
		submit:function(data,callback){
			var url=portal_url+"operatetask.json";
			data.isPassed=1;
			var isPassed=(data.isPassed?"&isPassed="+data.isPassed:'');
			var progress=(data.progress?"&progress="+data.progress:'');
			var data="id="+data.id+"&comment="+data.comment+isPassed+progress;
			global.json.post(url,data,function(data){
				if(callback) callback(data);
			})			
		},
		update:function(data){
			if(task.model.current){
				var model=global.model.getModelById(task.model,task.model.current);
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
				$(task.model.el).find('.content-item[id="'+task.model.current+'"]').addClass('active');
				global.model.save(model,{},function(data){
					if(data.code==200){
						global.message('success',data.msg);
						model.set(data.data);
						task.renderinfo(model.id);
					}
				})
			}
		},
		operate:function(data,callback){
			var url=portal_url+'operatetask.json';
			global.json.post(url,data,function(data){
				if(callback) callback(data);
			})
		},
		renderinfo:function(id){
			var model=task.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties,true);
			$('.ui-layout-right').find('.mod[id="'+id+'"]').find('.action-modal').each(function(){
				var modalname=$(this).attr('data-target');
				var attr=$(this).attr('data-attr');
				$(this).on('click',function(){
					global.modal.openDataModal('#'+modalname,model,task[modalname+'_template']);
					datapicker_load({format:'yyyy-mm-dd',autoclose:true});
				})
			})

		},
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
	'			     	<span class="status"><a style="color:#090;" href="page_edit.html"><%=global.dict.query(stage)%></a></span>',
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
		SubmitTemplate:_.template(
			[
		'  <div class="modal-header">',
		'    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
		'    <h3 id="myModalLabel"><%=global.dict.query(type)%></h3>',
		'  </div>',
		'  <div class="modal-body">',
		'    <form class="form-horizontal">',
		'      <div class="control-group">',
		'        <label class="control-label" for="name" style="width:70px;">标题：</label>',
		'        <div class="controls" style="margin-left:80px;">',
		'          <input type="text" id="name" value="<%=model.title%>" disabled style="width:300px; margin-right:10px;">',
		'			<input type="hidden" name="id" value="<%=model.id%>">',
		'        </div>',
		'      </div>',
		'      <div class="control-group" style="margin-bottom:0;">',
		'        <label class="control-label" for="chapterCode" style="width:70px;">备注：</label>',
		'        <div class="controls" style="margin-left:80px;">',
		'          <textarea id="comment" rows="4" style="width:300px;"></textarea>',
		'        </div>',
		'      </div>',
		'    </form>',
		'  </div>',
		'  <div class="modal-footer">',
		'    <button class="btn" data-dismiss="modal" aria-hidden="true">确定</button>',
		'    <a href="#" data-dismiss="modal" aria-hidden="true">[ 取消 ]</a> </div>',
			'<div class="modal-header">',
		  ].join("")
		),
		processManagement_template:_.template(
				[
				  '<div class="modal-header">',
		'			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
		'			<h3 id="myModalLabel">任务管理</h3>',
		'		  </div>',
		'		  <div class="modal-body task-management">',
		'			<ul style="border:1px solid #ddd; border-bottom:0; margin-bottom:20px;">',
		'			  <li><span class="alignleft">开始时间 *：</span><span class="alignright">',
		'				<input type="text" class="date_picker" name="planStart" id="datepicker_start" style="width:108px; border-radius:0; background:url\(\'../img/icon_datepicker.png\'\) no-repeat 95% 50%;" value="<%=planStart%>">',
		'				</span></li>',
		'			  <li><span class="alignleft">结束时间 *：</span><span class="alignright">',
		'				<input type="text" class="date_picker" name="planEnd" id="datepicker_end" style="width:108px; border-radius:0; background:url\(\'../img/icon_datepicker.png\'\) no-repeat 95% 50%;" value="<%=planEnd%>">',
		'				</span></li>',
		'			</ul>',
		'			<ul style="border:1px solid #ddd; border-bottom:0;">',
		'			 <% _.each(roles,function(item){ _.each(item,function(user,role){ %>',
		'			  <li><span class="alignleft"><%=global.dict.query(role)%><span style="<%=["writing","sreview2"].indexOf(role)>=0?"color:red":"display:none" %>">(*)</span>：</span><span class="alignright">',
		'				<select style="width:120px;" name="roles" data-mutiple=1>',
		'					<option value="">无</option>',
		'				  <% _.each(project.getmembers(),function(member){ %>',
		'					<option value=<%=member.id%> <%=compare_value(member.id,user,"selected","")%>><%=member.name %></option>',
		'				  <% }); %>',
		'				</select>',
		'				</span>',
		'			</li>',
		'			<% }); %>',
		'			<% }); %>',
		'			</ul>',
		'		  </div>',
		'		  <div class="modal-footer">',
		'			<button class="btn" data-dismiss="modal" aria-hidden="true">确定</button>',
		'			<a href="#" data-dismiss="modal" aria-hidden="true">[ 取消 ]</a> ',
		'		  </div>',
				].join("")
		),
		taskinfoTemplate:_.template(
			[
'				<% if(type&&type=="writing"&&status=="doing") { %>',
'				<button class="btn btn-small action-save btn-save btn-primary" style="width:95px">保存 (<%=progress%>%)</button>',
'				<button class="btn btn-small btn-primary dropdown-toggle" data-toggle="dropdown" style="width:30px; border-radius:0 15px 15px 0; padding-right:12px;"><span class="caret"></span></button>',
'				<ul class="dropdown-menu">',
'				<li><span style="padding-left:20px; line-height:30px;">进度</span></li>',
'				<li class="divider"></li>',
'				<% for (i=10;i<101;i=i+10) { %>',
'				<li><a href="#"><%=i%>%</a></li>',
'				<% } %>',
'				<li class="divider"></li>',
'				<%if(Number(progress)==100){%>',
'				<li style="padding:5px 20px 10px 20px;">',
'				<button class="btn btn-small btn-primary pageedit_submit" href="#task_submitModal"><i class="icon-ok-sign icon-white"></i> 提交</button>',
'				</li>',
'				<%}%>',
'				</ul>',
'				<% }else{ %>',
'				<button class="btn btn-small action-save btn-save btn-primary" style="width:95px; border-radius:15px 15px 15px 15px;">保存</button>',
'				<% } %>			',
			].join("")
		),

	})
})(window);
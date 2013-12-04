(function(process){
	process.template=_.template(
		[
			'<tr class="content-item <%=status%>" id="<%=id%>">',
			'    <td width="40"><% if(type!="FluidTopic"){ %><input type="checkbox"><%}%></td>',
			'    <td><span class="title red"><%=title%></span>',
			'      <div class="action">',
				'        <ul><% _.each(operationalitems,function(operate){ %>',
'				<%if(operate.enabled){%>',
				'			  <li><a class="process-<%=operate.id%>" href="#<%=operate.id%>"><%=global.dict.query(operate.id)%></a></li>',
'				<%}else{%>',
				'			  <li><%=global.dict.query(operate.id)%></li>',
'				<%}%>',
				'		<% }) %></ul>',
			'      </div></td>',
			'    <td width="10%"><span class="status"><%=global.dict.query(status)%></span></td>',
			'    <td width="10%"><%=left%></td>',
			'    <td width="10%"><%=roles[0]["writing"]%></td>',
			'    <td width="15%"><%=planStart%></td>',
			'    <td width="15%"><%=planEnd%></td>',
			'    <td width="10%"><%=progress%>%</td>',
			'</tr>',
		].join("")
	);

	process.list_menu=_.template(
		[,
			'			<table cellspacing="0" class="hascheckbox list">',
			'            	<thead>',
			'					<tr>',
			'						<th scope="col" width="40"><input type="checkbox"></th>',
			'						<th scope="col">子项目</th>',
			'						<th scope="col" width="10%">状态</th>',
			'						<th scope="col" width="10%">剩余</th>',
			'						<th scope="col" width="10%">编辑</th>',
			'						<th scope="col" width="15%">开始日期</th>',
			'						<th scope="col" width="15%">结束日期</th>',
			'						<th scope="col" width="10%">进度</th>',
			'					</tr>',
			'				</thead>',
			'            </table>'
		].join("")
	);
	process.processManagement_template=_.template(
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
	);

})(process);
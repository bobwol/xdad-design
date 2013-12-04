(function(project){
	project.template=_.template(
		[
			'            <li id=<%=id%> class="<%=status%>">',
			'				<div class="wraparea">',
			'            		<h4><a href="#"><%=title%></a></h4>',
			'      <div class="action-new"><a href="javascript:void(0)">▼</a>',
			'       <ul style="visibility: visible; position: absolute; top: 20px; display: none;">',
			'		<% _.each(operationalitems,function(operate){ %>',
			'				<%if(operate.enabled){%>',
			'			  <li><a class="list-<%=operate.id%>" href="#<%=operate.id%>"><%=global.dict.query(operate.id)%></a></li>',
			'				<%}else{%>',
			'			  <li><a href="#" style="pointer-events: none; color:#aaa !important;"><%=global.dict.query(operate.id)%></a></li>',
			'				<%}%>',
			'		<% }) %></ul>',
			'      </div>',
			'				</div>',
			'			 </li>'
		].join("")
	);
	project.projectManagement_template=_.template(
		[
		'<form>',
'		  <div class="modal-header">',
'			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'			<h3 id="myModalLabel">任务管理</h3>',
'		  </div>',
'		  <div class="modal-body task-management">',
'			<ul style="border:1px solid #ddd; border-bottom:0;">',
'			 <% _.each(roles,function(item){ _.each(item,function(user,role){ %>',
'			  <li><span class="alignleft"><%=global.dict.query(role)%><span style="<%=role=="mreview2"?"color:red":"display:none"%>">(*)</span>：</span><span class="alignright">',
'				<select style="width:120px;" name="roles" data-mutiple=1>',
'					<option value="">无</option>',
'				  <% _.each(members,function(member){ %>',
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
'		  </form>',
	].join("")
	);
})(project);
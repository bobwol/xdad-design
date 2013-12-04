(function(edition){
	edition.template=_.template(
		[
			'           <tr class="content-item <% if (published){ %>publish-version<% } %> <% if (type=="E"){ %>current-version<% } %>" id=<%=id%>>',
			'	            <td width="20%"><span class="title"><%=versionNumber%></span></td>',
			'	            <td width="10%"><%=creator%>',
			'	                <% if (review_state=="visible") {%><div class="action">',
			'	                      <ul><li><a class="workflow" href="<%=context_url%><%=id%>" id="submit">提交</a></li></ul>',
			'	                    </div><% } %>',
			'	                  </div></td>',
			'	            <td width="15%"><%=createdtime%></td>',
			'	            <td width="10%"><%=type%></td>',
		    '				<td width="15%"><% if (type=="E"){ %>编辑版本 <% } %></td>',
		    '				<td width="15%"><% if (published){ %>已提交<% } %></td>',
		                    '<td width="15%">',
		                    '		<% if (type=="E"){ %><span class="done"><a href="#createEdition" data-toggle="modal">提交</a><% } %>',
		                    '		<% if (type!="E" && !published){ %><span class="done"><a  href="<%=context_url%><%=id%>"  class="workflow" id="publish">发布</a></span>',
		                    '		<% } else if (type!="E" && published) { %><span class="done"><a  href="<%=context_url%><%=id%>"  class="workflow" id="retract">撤回</a></span><% } %>',
		                    '</td>',
			'           </tr>',
		].join("")
	);
	edition.list_menu=_.template(
		[
			'<table cellspacing="0" class="list">',
			'  <thead>',
'				  <tr>',
'                    <th scope="col" width="20%">版本</th>',
'                    <th scope="col" width="10%">创建人</th>',
'                    <th scope="col" width="15%">创建时间</th>',
'                    <th scope="col" width="10%">类别</th>',
'                    <th scope="col" width="15%"><!--状态--></th>',
'                    <th scope="col" width="15%">审核过程</th>',
'                    <th scope="col" width="15%">操作</th>',
'                  </tr>',
            '  </thead>',
            '</table>',
		].join("")
	);
	edition.create_edition=_.template(
		[
		'	<div class="modal-header">',
		'		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
		'		<h3 id="myModalLabel">提交请求</h3>',
		'	</div>',
		'	<div class="modal-body">',
		'		<form class="form-horizontal">',
		'			<div class="control-group">',
		'				<label class="control-label" for="chapterName" style="width:70px;">标题：</label>',
		'				<div class="controls" style="margin-left:80px;">',
		'					<input type="text" id="editionName" value="提交发布" style="width:210px; margin-right:10px;">',
		'					<select style="width:70px;" id="editionType" name="edition_type">',
		'						<option value="new" selected="">新建</option>',
		'						<option value="revised">修订</option>',
		'						<option value="updated">更新</option>',
		'					</select>',
		'				</div>',
		'			</div>',
		'			<div class="control-group" style="margin-bottom:0;">',
		'				<label class="control-label" for="chapterCode" style="width:70px;">说明：</label>',
		'				<div class="controls" style="margin-left:80px;">',
		'					<textarea id="editionComment" rows="4" style="width:300px;" name="edition_comment"></textarea>',
		'				</div>',
		'			</div>',
		'		</form>',
		'	</div>',
		'	<div class="modal-footer">',
		'		<button class="btn">确定</button>',
		'		<a href="#" data-dismiss="modal" aria-hidden="true">[ 取消 ]</a>',
		'	</div>',
		].join("")
	);


})(edition);
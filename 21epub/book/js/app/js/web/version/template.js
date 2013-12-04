(function(version){
	version.template=_.template(
		[
			'           <tr class="content-item" id=<%=version_id%>>',
			'	            <td width="12%"><span class="title"><%=versionNumber%></span></td>',
			'	            <td width="12%"><%=creator%>',
			'	                <div class="action">',
			'	                      <ul>',
		    '              <% if (type=="E"){ %><li><a href="#savenew" data-toggle="modal">复制为新版</a></li><% } %>',
		    '              <% if (type!="E"){ %><li><a href="#revert" data-toggle="modal">复制为新版</a></li><% } %>',
		    '              <% if (type=="TP"||type=="P"){ %><li><a href="#view">查看</a></li><% } %>',
		    // '              <% if (type=="E"){ %><li><a href="#edit">编辑</a></li><% } %>',
		    // '              <% if (type!="T"){ %><li><a href="#preview">预览</a></li><% } %>',
			'	                      </ul>',
			'	                    </div>',
			'	                  </div></td>',
			'	            <td width="12%"><%=createtime%></td>',
			'	            <td width="12%"><%=type%></td>',
		    '				<td><% if (type=="E"){ %>编辑版本 <% } %><% if (published){ %>已发布版本<% } %></td>',
			'	            <td width="20%"><%=source%></td>',
			'               <td width="15%"><% if (type=="P"||type=="TP"){ %><a href="<%=pdf%>" target="_blank">PDF</a> | <a href="<%=html%>" target="_blank">HTML</a><% } %></td>',
			'           </tr>',
		].join("")
	);
	version.list_menu=_.template(
		[
			'<table cellspacing="0" class="hascheckbox list">',
			'  <thead>',
            '    <tr>',
            '      <th scope="col" width="12%">版本</th>',
            '      <th scope="col" width="12%">创建人</th>',
            '      <th scope="col" width="12%">创建时间</th>',
            '      <th scope="col" width="12%">类别</th>',
            '      <th scope="col"><!--状态--></th>',
            '      <th scope="col" width="20%">源版本</th>',
            '      <th scope="col" width="15%">导出</th>',
            '    </tr>',
            '  </thead>',
            '</table>',
		].join("")
	);
})(version);
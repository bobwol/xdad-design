(function(user){
      user.template=_.template(
            [].join("")
        );
      user.list_menu=_.template(

            [
                  '               <table cellspacing="0" class="hascheckbox  nocover units list">',
                  '                 <thead>',
                  '                   <tr>',
                  '                     <th scope="col" width="5%"><input type="checkbox" value="selectall"></th>',
                  '                     <th scope="col" width="25%">用户名</th>',
                  '                     <th scope="col" width="25%">用户姓名</th>',
                  '                     <th scope="col" width="25%">电子邮件</th>',
                  '                     <th scope="col" width="20%">角色</th>',
                  '                   </tr>',
                  '                 </thead>',
                  '               </table>',
            ].join("")
        );
      user.group_list_menu=_.template(

            [
                  '               <table cellspacing="0" class="hascheckbox list">',
                  '                 <thead>',
                  '                   <tr>',
                  '                     <th scope="col" width="5%"><input type="checkbox" value="selectall"></th>',
                  '                     <th scope="col" >用户名</th>',
                  '                     <th scope="col" >用户姓名</th>',
                  '                     <th scope="col" >电子邮件</th>',
                  '                     <th scope="col" >角色</th>',
'                  						<th scope="col"> 状态</th>',
                  '                   </tr>',
                  '                 </thead>',
                  '               </table>',
            ].join("")
        );
      user.add_template=_.template(
            [
                  '<div class="modal-header">',
                  '     <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
                  '     <h3>新建用户信息</h3>',
                  '</div>',
                  '<div class="modal-body">',
                  '  <form class="form-horizontal">',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="id"><em>*</em> 用户名: </label>',
                  '        <div class="controls">',
                  '          <input type="text" id="id" name="id" value="">',
                  '        </div>',
                  '      </div>',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="name"><em>*</em> 姓名: </label>',
                  '        <div class="controls">',
                  '          <input type="text" id="name" name="name" value="">',
                  '        </div>',
                  '      </div>',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="email"><em>*</em> 电子邮件: </label>',
                  '        <div class="controls">',
                  '          <input type="text" id="email" name="email" value="">',
                  '        </div>',
                  '      </div>',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="password"><em>*</em> 密码: </label>',
                  '        <div class="controls">',
                  '          <input type="password" id="password" name="password" value="">',
                  '        </div>',
                  '      </div>',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="confirm_password"><em>*</em> 确认密码: </label>',
                  '        <div class="controls">',
                  '          <input type="password" id="confirm_password" name="confirm_password" value="">',
                  '        </div>',
                  '      </div>',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="role"> 角色：</label>',
                  '        <div class="controls">',
                  '          <select id="roles" name="roles">',
                  '            <option value="Site Administrator">管理员</option>',
                  '            <option value="Reviewer">审核</option>',
                  '            <option value="Editor">编审</option>',
                  '            <option value="Member" selected>编辑</option>',
                  '          </select>',
                  '        </div>',
                  '      </div>',
                  '  </form>',
                  '</div>',
                  '<div class="modal-footer">',
                  '     <button class="btn" id="user-add">确定</button>',
                  '</div>'
            ].join("")
      );
	user.edit_template=_.template(
		[
               	'<div class="modal-header">',
                  '     <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
                  '     <h3>编辑<%=id%>用户信息</h3>',
                  '</div>',
                  '<div class="modal-body">',
                  '  <form class="form-horizontal">',
                  '      <input type="hidden" id="id" name="id" value="<%=id%>">',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="name"><em>*</em> 姓名: </label>',
                  '        <div class="controls">',
                  '          <input type="text" id="name" name="name" value="<%=name%>">',
                  '        </div>',
                  '      </div>',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="email"><em>*</em> 电子邮件: </label>',
                  '        <div class="controls">',
                  '          <input type="text" id="email" name="email" value="<%=email%>">',
                  '        </div>',
                  '      </div>',
                  '      <div class="control-group">',
                  '        <label class="control-label" for="role"> 角色：</label>',
                  '        <div class="controls">',
                  '          <select id="roles" name="roles">',
                  '            <option value="Site Administrator" <% if(roles=="Site Administrator"){ %>selected<% } %>>管理员</option>',
                  '            <option value="Reviewer" <% if(roles=="Reviewer"){ %>selected<% } %>>审核</option>',
                  '            <option value="Editor" <% if(roles=="Editor"){ %>selected<% } %>>编审</option>',
                  '            <option value="Contributor" <% if(roles=="Contributor"){ %>selected<% } %>>编辑</option>',
                  '          </select>',
                  '        </div>',
                  '      </div>',
                  '  </form>',
                  '</div>',
                  '<div class="modal-footer">',
                  '     <button class="btn" id="user-edit">确定</button>',
                  '</div>'
		].join("")
	);
	user.list_template=_.template(
		[
                  '<tr class="content-item" id=<%=id%>>',
                  '   <td width="5%"><input type="checkbox" name="user_list" value=<%=id%>></td>',
                  '   <td width="25%"><div class="action-td"><span class="title"><%=id%></span>',
                  '            <div class="action">',
                  '                  <ul>',
                  '                       <li><a class="user-edit" href="#">编辑</a></li>',
                  '                       <li><a class="user-remove" href="#">删除</a></li>',
                  '                  </ul>',
                  '            </div>',
                  '   </div></td>',
                  '   <td width="25%"><%=name%></td>',
                  '   <td width="25%"><%=email%></td>',
                  '   <td width="20%"><%=global.dict.query(roles)%></td>',
                  '</tr>'
		].join("")
	);
	user.group_template=_.template(
		[
                  '<tr class="content-item" id=<%=id%>>',
                  '   <td><input type="checkbox" name="user_list" value=<%=id%>></td>',
                  '   <td><%=id%></td>',
                  '   <td><div class="action-td"><span class="title"><%=name%></span>',
                  '   </div></td>',
                  '   <td><%=email%></td>',
                  '   <td><%=global.dict.query(roles)%></td>',
'                   <td><span class=<%=project.check_member_status(id)?"used":"unused"%>><%=project.check_member_status(id)?"已添加":"未添加"%></span></td>',
                  '</tr>'
		].join("")
	)
})(user);
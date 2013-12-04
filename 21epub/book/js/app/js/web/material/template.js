(function(material){
	material.template=_.template(
		[
	'	     <tr class="content-item <%=review_state%>" id=<%=id%>>',
    '            <td width="5%"><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 '              		<% _.each(operationalitems,function(action){ %>',
 '              			<li><a class="list-<%=action.id%>" href=<%=url+"/"+action.id%>><%=global.dict.query(action.name)%></a></li>',
 '              		<%   }) %>',
   '                   </ul>',
   '                 </div>',
   '               </div></td>',
    '            <td width="12%"><%=created%></td>',
    '            <td width="10%"><%=creator%></td>',
 '               <td width="10%"><span class="update"><%=global.dict.query(review_state)%></span></td>',
    '            <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
  '           </tr>'
		].join("")
	)
	material.list_template=_.template(
		[
    '	     <tr class="content-item <%=review_state%>" id=<%=id%>>',
    '            <td width="5%"><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
    '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 		'			     <li><a class="material_list_insert" href="#">插入</a></li>',
    // '                      <li><a href="#">查看</a></li>',
    '                     <li><a class="material_list_preview" href="#">预览</a></li>',
    // '                     <li><a class="material_list_addfav" href="#">收藏</a></li>',
    // '                     <li><a href="#">收回</a></li>',
    '                   </ul>',
    '                 </div>',
    '               </div></td>',
    '            <td width="12%"><%=created%></td>',
    '            <td width="10%"><%=creator%></td>',
    '            <td width="10%"><span class="update"><%=review_state%></span></td>',
    '            <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
    '           </tr>'
		].join("")
	)
  material.ref_template=_.template(
    [
    '      <tr class="content-item" id=<%=id%> data-type="tdms">',
    '         <td width="5%"><input type="checkbox" name="refmaterial_list" value=<%=id%>></td>',
    '         <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
    '         <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
    '                     <li><a class="list_preview" href="<%=preview%>">预览</a></li>',
    '                     <li><a class="ref_remove" href="#">移除</a></li>',
    '                   </ul>',
    '                 </div>',
    '               </div></td>',
    '         <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
    '       </tr>'
    ].join("")
  )  
  material.ref_list_template=_.template(
    [
    '      <tr class="content-item <%=review_state%>" id=<%=id%>>',
    '            <td><input type="checkbox" name="material_list" value=<%=id%> <%=material.check_material_is_imported(id)%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
    '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
    '          <li><a class="material_list_insert" href="#">插入</a></li>',
    // '                      <li><a href="#">查看</a></li>',
    '                     <li><a class="material_list_preview" href="#">预览</a></li>',
    // '                     <li><a class="material_list_addfav" href="#">收藏</a></li>',
    // '                     <li><a href="#">收回</a></li>',
    '                   </ul>',
    '                 </div>',
    '               </div></td>',
    '            <td><%=created%></td>',
    '            <td><%=creator%></td>',
    '               <td><span class="update"><%=review_state%></span></td>',
    '              <td><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
    '           </tr>'
    ].join("")
  )
  material.ref_update_template=_.template(
    [
    '      <tr class="content-item" id=<%=id%>>',
    '         <td width="5%"><input type="checkbox" name="refmaterial_list" value=<%=id%>></td>',
    '         <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
    '         <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul id="<%=id%>">',
    '                     <li><a class="material_preview_current" href="#">预览引用</a></li>',
    '                     <li><a class="material_preview_newest" href="#">预览更新</a></li>',
    '                   </ul>',
    '                 </div>',
    '               </div></td>',
    '         <td id="<%=id%>" width="10%"><span class="version"><a class="material_preview_current" href="#"><%=version%></a></span></td>',
    '         <td id="<%=id%>" width="10%"><span class="version"><a class="material_preview_newest" href="#"><%=newestversion%></a></span></td>',
    '         <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
    '       </tr>'
    ].join("")
  )  
	material.material_list_modal_template=_.template(
		[
'		  <div class="modal-header">',
'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'		    <h3>素材库</h3>',
'		    <button class="btn btn-small btn-primary action-upload" type="button" data-target="#upload" data-keyboard="false" data-backdrop="false">上传素材</button>',
'		    <button class="btn btn-small action-insert action-inset" type="button">插入所选</button>',
'	    <form class="search" style="position:absolute; left:auto; right:50px; top:5px;">',
'	      <input type="text" placeholder="搜索" class="input-medium search-query">',
'	      <button class="btn" type="submit"><i class="icon-search"></i></button>',
'	    </form>',
'		  </div>',
'		  <div class="modal-body">',
'		 </div>'
].join("")
	);
	material.pagination_template=_.template(
		[
		'   <ul>',
'              <li class="disabled"><a href="#">«</a></li>',
'              <li class="disabled"><a href="#">‹</a></li>',
'              <li class="active"><a href="#">1</a></li>',
'              <li><a href="#">2</a></li>',
'              <li><a href="#">3</a></li>',
'              <li><a href="#">4</a></li>',
'              <li><a href="#">5</a></li>',
'              <li><a href="#">›</a></li>',
'              <li><a href="#">»</a></li>',
'            </ul>',
		].join("")
	);
	material.change_list_template=_.template(
		[
	'	     <tr class="content-item <%=review_state%>" id=<%=id%>>',
    '            <td><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 		'			     <li><a class="material_list_change" href="#">替换</a></li>',
  //'                      <li><a href="#">查看</a></li>',
   '                     <li><a class="material_list_preview" href="#">预览</a></li>',
   //'                     <li><a class="material_list_addfav" href="#">收藏</a></li>',
  // '                     <li><a href="#">收回</a></li>',
   '                   </ul>',
   '                 </div>',
   '               </div></td>',
    '            <td><%=created%></td>',
    '            <td><%=creator%></td>',
 '               <td><span class="update"><%=review_state%></span></td>',
  '           </tr>'
		].join("")
	)
})(material);
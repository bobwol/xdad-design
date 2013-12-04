(function(component){
	component.template=_.template(
		[
 		'	<li id=<%=id%> class="component_item content-item" data-type=<%=type%>>',
 		'		<span class="thumb">',
 		'			<img src=<%=thumbnail%> alt=<%=title%>>',
 		'		</span>',
 		'		<span class="title"><%=title%></span>',
 		'		<span class="type">',
 		'			<img src=<%=icon%> width="32" height="32" alt="">',
 		'		</span>',
 		'		<div class="action">',
 		'		  <ul>		   ',
 		'			<li><a class="component_insert" href="#">插入</a></li>',
 		'			<li><a href="<%=url%>/preview" class="list-preview">预览</a></li>',
 		'		  </ul>',
 		'		</div>',
 		'	</li>'
		].join("")
	);
	component.list_template=_.template(
		[
  '      <tr class="content-item <%=review_state%>" id=<%=id%> data-type=<%=type%>>',
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
   '             <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
  '           </tr>'
		].join("")
	)
})(component);
(function(photogallery){
	photogallery.template=_.template(
		[
		  '<li class="span2" id=<%=id%>>',
		   ' <div class="thumb">',
		    '  <img src="<%=thumbnail||""%>" width="120" height="120" alt="">',
		 '   </div>',
		'	  <div class="action">',
		'	  	<input type="checkbox" name="photogallery_list"	value=<%=id%>>',
		'	  	<a class="action-preview"><img src="i/r_zoom.png"></a>',
		'	  	<a class="action-move"><img src="i/r_move.png"></a>',
		 '   </div>',
		'  </li>',
		].join("")
	);
	photogallery.list_template=_.template(
		[
	'	     <tr class="published" id=<%=id%>>',
    '            <td><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 		'			     <li><a class="photogallery_list_insert" href="#">插入</a></li>',
  '                      <li><a href="#">查看</a></li>',
   '                     <li><a class="material_list_preview" href="#">预览</a></li>',
   '                     <li><a class="material_list_addfav" href="#">收藏</a></li>',
   '                     <li><a href="#">收回</a></li>',
   '                   </ul>',
   '                 </div>',
   '               </div></td>',
    '            <td><%=created%></td>',
    '            <td><%=creator%></td>',
 '               <td><span class="update"><%=review_state%></span></td>',
  '           </tr>'
		].join("")
	);
	photogallery.change_list_template=_.template(
		[
	'	     <tr class="published" id=<%=id%>>',
    '            <td><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 		'			     <li><a class="photogallery_list_change" href="#">替换</a></li>',
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
})(photogallery);
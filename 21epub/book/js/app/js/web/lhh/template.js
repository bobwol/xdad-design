(function(lhh){
	lhh.template=_.template(
		[
		  '<li class="span2" id=<%=id%>>',
		   ' <div class="thumb">',
		    '  <img src=<%=thumbnail%> width="120" height="120" alt="">',
		 '   </div>',
		'	  <div class="action">',
		'	  	<input type="checkbox" name="lhh_list"	value=<%=id%>>',
		'	  	<a class="action-preview"><img src="i/r_zoom.png"></a>',
		'	  	<a class="action-move"><img src="i/r_move.png"></a>',
		 '   </div>',
		'  </li>',
		].join("")
	);
	lhh.list_template=_.template(
		[
	'	     <tr class="published" id=<%=id%> data-type="<%=type%>">',
    '            <td width="5%"><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 		'			     <li><a class="list_insert" href="#">插入</a></li>',
   '                     <li><a class="list-preview" href="#">预览</a></li>',
   '                   </ul>',
   '                 </div>',
   '               </div></td>',
			'	            <td width="12%"><%=created%></td>',
			'	            <td width="10%"><%=creator%></td>',
			'	            <td width="10%"><span class="status"><%=global.dict.query(review_state)%></span></td>',
			'               <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
  '           </tr>'
		].join("")
	);
	lhh.change_list_template=_.template(
		[
	'	     <tr class="published" id=<%=id%>>',
    '            <td><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 		'			     <li><a class="lhh_list_change" href="#">替换</a></li>',
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
	);
	lhh.modal_template=_.template(
		[
'		  <div class="modal-header">',
'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'		    <h3>素材库</h3>',
'		    <button class="btn btn-small btn-primary action-insert action-inset" type="button">插入所选</button>',
'	    <form class="search" style="position:absolute; left:auto; right:50px; top:5px;">',
'	      <input type="text" placeholder="搜索" class="input-medium search-query">',
'	      <button class="btn" type="submit"><i class="icon-search"></i></button>',
'	    </form>',
'		  </div>',
'		  <div class="modal-body">',
'		 </div>'
].join("")
	);
		lhh.list_menu=_.template(
			[
'	          <table cellspacing="0" class="hascheckbox list">',
'	            <thead>',
'	              <tr>',
'	                <th scope="col" width="5%"><input type="checkbox" value="selectall"></th>',
'	                <th scope="col" colspan="2">标题</th>',
'	                <th scope="col" width="12%">创建时间</th>',
'	                <th scope="col" width="10%">创建者</th>',
'	                <th scope="col" width="10%">状态</th>',
'	                <th scope="col" width="10%">类型</th>',
'	              </tr>',
'	            </thead>',
'	          </table>',
			].join("")
		);
})(lhh);
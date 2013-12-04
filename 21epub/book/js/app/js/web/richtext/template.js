(function(bodycontent){
	bodycontent.tab_template=_.template(
		[
	'	       <li>',
	'	       	<a href="#<%=id%>" data-toggle="tab" data-id=<%=id%> class="title"><%=title%></a>',
     '           <ul class="action">',
    '              <li><a class="action-edit" href="#<%=id%>">编辑</a></li>',
     '             <li><a class="action-remove" href="#<%=id%>">删除</a></li>',
    '            </ul>',
'				<div class="action-move">',
'					<a href="#">移动</a>',
'				</div>',
    '          </li>'
		].join("")
	);
	bodycontent.content_template=_.template(
		[
'          <div class="tab-pane" id=<%=id%>>',
'            <section class="epub tiny_mce"> ',
'              <!--<hgroup>',
'                <h1><%=title%></h1>',
'              </hgroup>-->',
'              <article id="article<%=id%>" class="typo">',
'				<%=body%>',
'              </article>',
'            </section>',
'           </div>'
		].join("")
	);
	bodycontent.newtab_modal_template=_.template(
		[
'		  <div class="modal-header">',
'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'		    <h3>新增／编辑 TAB</h3>',
'		  </div>',
'		  <div class="modal-body">',
'		    <form class="form-horizontal">',
'		      <div class="control-group">',
'		        <label class="control-label" for="title"><em>*</em> 标题：</label>',
'		        <div class="controls">',
'		          <input type="text" id="title" name="title" value=<%=title%>>',
'					<input type="hidden" name="id" value=<%=id%>>',
'		        </div>',
'		      </div>',
'		    </form>',
'		  </div>',
'		  <div class="modal-footer">',
'		    <button class="btn tab-button">确定</button>',
'		  </div>',
		].join("")
	)
})(bodycontent);
/* define global template */

var msg_template=_.template(
  '<div class="status <%=type%>">\
    <p><%=globaldict_lookup(msg)%></p>\
    <a href="#" class="close">Close</a></div>'
)

var modal_template=_.template(
		[
		'<div class="modal" id=<%=name%> tabindex="-1" role="dialog" aria-labelledby="<%=name%>Label" aria-hidden="true">',
		'</div>'
		].join("")
)

var global_workflow_template=_.template([

		'  <div class="modal-header">',
		'    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
		'    <h3 id="myModalLabel"><%=label%></h3>',
		'  </div>',
		'  <div class="modal-body">',
		'    <form class="form-horizontal">',
		'      <div class="control-group">',
		'        <label class="control-label" for="name" style="width:70px;">标题：</label>',
		'        <div class="controls" style="margin-left:80px;">',
		'          <input type="text" id="name" value="<%=label%>" disabled style="width:300px; margin-right:10px;">',
		'          <input type="hidden" id="transition" value="<%=transition%>">',
		'          <input type="hidden" id="objecturl" value="<%=object_url%>">',		
		'        </div>',
		'      </div>',
		'      <div class="control-group" style="margin-bottom:0;">',
		'        <label class="control-label" for="chapterCode" style="width:70px;">说明：</label>',
		'        <div class="controls" style="margin-left:80px;">',
		'          <textarea id="comment" rows="4" style="width:300px;"></textarea>',
		'        </div>',
		'      </div>',
		'    </form>',
		'  </div>',
		'  <div class="modal-footer">',
		'    <button class="btn">确定</button>',
		'    <a href="#" data-dismiss="modal" aria-hidden="true">[ 取消 ]</a> </div>'

	].join(""))

var global_categories_template=_.template([

	    '<div class="mod related-mod publish-mod" style="display: block;">',
			'<div class="mod-hd">分类设定</div>',
		    '<div class="mod-bd">',
	          '<dl>',
	            '<%_.each(data,function(item){%>',
		            '<dd>',
	                      '<h3><%=item.title%></h3>',
	                      '<ul>',
	                    '<%_.each(item.children,function(subitem){%>',
	                        '<li>',
	                          '<label class="checkbox">',
	                            '<input type="checkbox" ',
	                            '	value="<%=subitem.id%>"',
	                            '	name="category"  <%if(subitem.selected){%>checked=""<%}%>>',
	                            '<%=subitem.title%></label>',
	                        '</li>',
	                    '<%});%>',
	                      '</ul>',
	                '</dd>',
	            '<%});%>',
	          '</dl>',
	          '<div class="submit">',
	            '<button class="btn" name="setcategories" type="button">保存</button>',
	            '<input type="hidden" name="object_url" value="<%=object_url%>"/>',
	          '</div>',
	        '</div>',
      	'</div>'

	].join(""))
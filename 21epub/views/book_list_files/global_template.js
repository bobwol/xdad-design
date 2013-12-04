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
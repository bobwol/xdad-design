(function(channel){
	channel.template=_.template(
		[
  '            <li id=<%=id%>>',
  '					<div class="wraparea">',
   '             <h4><a href="#"><%=title%></a></h4>',
   '					</div>',
 '			 </li>'
		].join("")
	)
})(channel);
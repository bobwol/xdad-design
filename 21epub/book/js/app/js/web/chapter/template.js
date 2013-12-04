(function(chapter){
	chapter.template=_.template(
		[
'            <li id=<%=id%>>',
'				<div class="wraparea">',
'            		<h4><a href="#"><%=title%></a></h4>',
'					<div class="hitarea"></div>',
'				</div>',
'			 </li>'
		].join("")
	);
	chapter.nav_template=_.template(
		[
'            <li id=<%=id%>>',
'				<div class="wraparea">',
'            		<h4><a href="#"><%=title%></a></h4>',
'              		<% if(updated_num>0){ %><div class="platform">',
'              			<ul>',
'							<li rel="tooltip" class="updated" ><%=updated_num%></li>',
'              			</ul>',
'              		</div><% } %>',
'             		<div class="type-link">',
'            			<a rel="tooltip" href="#" class="preview-content" data-original-title="预览章节内容">预览</a>',
'            		</div>',
'				</div>',
'			 </li>'
		].join("")
	);
})(chapter);
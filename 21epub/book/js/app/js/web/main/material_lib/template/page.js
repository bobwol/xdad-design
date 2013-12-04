          <div class="result-stats">共<%=numpages%>页，<%=sum%>条记录</div>
	          <div class="pagination pagination-centered">
	            <ul>
				 <% var startpage=global.get_page(page,numpages,10).start; var endpage=global.get_page(page,numpages,10).end; %>
	              <li <% var left=(page!=1&&numpages>1)?"":"class=disabled";%><%=left%>><a class="first" href="#">«</a></li>
	              <li <% var left=(page!=1&&numpages>1)?"":"class=disabled";%><%=left%>><a class="prev" href="#">‹</a></li>
				<% for(i=startpage;i<=endpage;i++){ %>
					<li <% var current=(i==page)?"class=active":""; %><%=current%>><a class="page" href="#"><%=i%></a></li>
				<% } %>
	              <li <% var right=(page!=numpages&&numpages>0)?"":"class=disabled";%><%=right%>><a class="next" href="#">›</a></li>
	              <li <% var right=(page!=numpages&&numpages>0)?"":"class=disabled";%><%=right%>><a class="last" href="#">»</a></li>
	            </ul>
	          </div>
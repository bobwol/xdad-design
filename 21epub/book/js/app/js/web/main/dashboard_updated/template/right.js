              <tr id="<%=id%>" class="<%=review_state%> <%=type%> gallery" <% if(typeof position != "undefined"){ %>data-position="<%=position%>"<% } %>>
                <td><span class="thumb"><img src="<%=picture%>" alt=""></span></td>
                <td><span class="title"><%=title%></span>
                  <div class="action">
                    <ul>
										<% _.each(operationalitems,function(operate){ %>
											<% if(operate.type=="workflow"){ %>
					                        	<li><a class="workflow" id="<%=operate.id%>" href="<%=url%>"><%=global.dict.query(operate.name)%></a></li>
											<% }else{ %>
					                        	<li><a class="list-<%=operate.id%>" href=<%=url+"/"+operate.id%>><%=global.dict.query(operate.name)%></a></li>
											<% } %>
										<% }) %>
                    </ul>
                  </div></td>
                <td width="12%"><%=created%></td>
                <td width="10%"><%=creator%></td>
                <td width="10%"><span class="status"><%=global.dict.query(review_state)%></span></td>
              </tr>

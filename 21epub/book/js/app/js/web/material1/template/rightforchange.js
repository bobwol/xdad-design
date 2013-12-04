              <tr id="<%=id%>" class="<%=review_state%> <%=type%> gallery" data-type="<%=type%>">
                <td width="40"><input type="checkbox" name="material_list" value="<%=id%>"></td>
                <td><span class="thumb"><img src="<%=thumbnail%>" alt=""></span></td>
                <td><span class="title"><%=title%></span>
                  <div class="action">
                    <ul>
          						<li>
          							<a href="#" class="material-change">替换</a>
          						</li>
          						<li>
          							<a href="<%=url%>/preview" class="list-preview">预览</a>
          						</li>
                    </ul>
                  </div></td>
                <td width="12%"><%=created%></td>
                <td width="10%"><%=creator%></td>
                <td width="10%"><span class="status"><%=global.dict.query(review_state)%></span></td>
                <td width="12%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>
              </tr>

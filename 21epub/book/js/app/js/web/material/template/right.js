              <tr id="<%=id%>" class="content-item"  data-type="tdms" >
                <td width="40"><input type="checkbox" name="material_list" value="<%=id%>"></td>
                <td><span class="thumb"><img src="<%=thumbnail%>" alt=""></span></td>
                <td><span class="title"><%=title%></span>
                  <div class="action">
                    <ul>
						<li>
							<a href="#" class="material-insert">插入</a>
						</li>
						<li>
							<a href="<%=preview%>" class="list-preview">预览</a>
						</li>
                    </ul>
                  </div></td>
                <td width="15%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>
              </tr>

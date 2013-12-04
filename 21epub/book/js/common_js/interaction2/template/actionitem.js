      <li data-type="<%=iType%>" id="<%=id%>" class="action-item">
                  <div class="wraparea">
          <% if(notitle){ %>
          	 <h4><%=global.dict.query(interaction.getActionTypeName(iType))%><%=interaction.ActionExecTypes[iDetail.results[0].iAction]%></h4>
          <%}else{%>
          	<h4 rel="tooltip" data-original-title="<%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get("iType")%>(<%=global.dict.query(interaction.getActionTypeName(iType))%><%=interaction.ActionExecTypes[iDetail.results[0].iAction]%>)"><%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get("iType")%>(<%=global.dict.query(interaction.getActionTypeName(iType))%><%=interaction.ActionExecTypes[iDetail.results[0].iAction]%>)</h4>
          <%}%>
          <div title="" rel="tooltip" class="btn-draged" data-original-title="上下拖拽"></div>
                    <div class="operation">
           <a class="btn btn-link action-play" rel="tooltip" data-original-title="预览"><i class="icon-play"></i></a>
           <a class="btn btn-link action-edit" rel="tooltip" data-original-title="设定"><i class="icon-edit"></i></a>
                 <a title="" rel="tooltip" class="action-del" href="#" data-original-title="移除"><i class="icon-remove"></i></a>
            </div>
          </div>
      </li>
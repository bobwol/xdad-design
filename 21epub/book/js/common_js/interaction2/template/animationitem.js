   <li data-type="<%=iType%>" id="<%=id%>" class="animation-item">
               
          <% if(notitle){ %>
          	 <h4><%=interaction.getAnimationTypeName(iType)%></h4>
          <%}else{%>
			<h4 rel="tooltip" data-original-title="<%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get("iType")%>(<%=interaction.getAnimationTypeName(iType)%>)"><%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get("iType")%>(<%=interaction.getAnimationTypeName(iType)%>)</h4>
          <%}%>  
            
       
                 <div class="operation">
           <a class="btn btn-link animation-play" rel="tooltip" data-original-title="预览"><i class="icon-play"></i></a>
           <a class="btn btn-link animation-edit" rel="tooltip" data-original-title="设定"><i class="icon-edit"></i></a>
                 <a title="" rel="tooltip" class="action-del" href="#" data-original-title="移除"><i class="icon-remove"></i></a>
                 <% if(!notitle){ %>
                 <a data-original-title="上下拖拽" href="#" rel="tooltip" title="" class="btn-draged">
					<i class="icon-align-justify"></i>
				</a>
				<%  } %>
         </div>
      
   </li>
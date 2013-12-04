<tr class="content-item <%=status%>" id="<%=id%>" data-type="<%=type%>">
    <td width="40"><input type="checkbox"></td>
    <td><span class="title red"><%=title%></span>
      <div class="action">
        <ul><% _.each(operationalitems,function(operate){ %>
				<%if(operate.enabled){%>
			  <li><a class="list-<%=operate.id%>" href="<%=url%>/<%=operate.id%>"><%=global.dict.query(operate.id)%></a></li>
				<%}else{%>
			  <li><%=global.dict.query(operate.id)%></li>
				<%}%>
		<% }) %></ul>
      </div></td>
    <td width="10%"><span class="status"><%=global.dict.query(status)%></span></td>
    <td width="10%"><%=left%></td>
    <td width="10%"><%=roles[0]["writing"]%></td>
    <td width="15%"><%=planStart%></td>
    <td width="15%"><%=planEnd%></td>
    <td width="10%"><%=progress%>%</td>
</tr>
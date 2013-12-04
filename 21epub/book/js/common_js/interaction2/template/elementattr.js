       <li class="db clear" id="<%=id%>">
         <span class="fl">
           <% var iItemlist=interaction.elementlist.get(elementid).iview.getdetail().iItemlist %>
           <input type="checkbox" value=<%=id%> name="iItemlist" data-attr="iDetail" <%=(_.include(iItemlist,id))&&"checked=checked"||""%>>
         </span>
         <span class="fl">
           <a class="dom_move" id="<%=id%>">
             <img class="vm" src="n/i_move.png">
           </a>                
         </span>
         <span class="fl dom_name"><%=iType%></span>
       </li>
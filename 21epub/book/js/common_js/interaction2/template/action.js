     <fieldset id="<%=id%>" class="actions">
                <legend><%=global.dict.query(id)%></legend>
         <div class="action">
         <select name="iActionType" class="actiontype">
           <%if(type=="object"){%>
           <%_.each(interaction.ActionTypes,function(value,key){%>
             <option value=<%=key%>><%=global.dict.query(value)%></option>         
           <%})%>
           <%}%>
           <%if(type=="button"){%>
           	<% if(interaction.current.toJSON().iDetail.isSwitch){ %>
           <%_.each(interaction.ButtonActionTypes,function(value,key){%>
             <option value=<%=key%>><%=global.dict.query(value)%></option>         
           <%})%>
            <% } %>
           	<% if(!interaction.current.toJSON().iDetail.isSwitch){ %>
           <%_.each(interaction.ActionTypes,function(value,key){%>
             <option value=<%=key%>><%=global.dict.query(value)%></option>         
           <%})%>
            <% } %>
           <%}%>        
           </select>
         <button class="btn btn-small action-addaction action-add"><i class="icon-plus"></i></button>
         </div>
         <div class="list">
           <ul></ul>
           </div>
     </fieldset>
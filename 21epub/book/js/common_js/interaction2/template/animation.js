     <fieldset id="<%=id%>" class="animation">
       <legend><%=global.dict.query(id)%></legend>
       <div class="action">
         <select name="iAnimationType" class="animationtype">
           <%if(type=="object"){%>     
           <%_.each(interaction.AnimationTypes,function(value,key){%>     
           <option value=<%=key%>>
             <%=value%></option>
           <%})%>     
           <%}%>     
           <%if(type=="media"){%>     
           <%_.each(interaction.MediaAnimationTypes,function(value,key){%>     
           <option value=<%=key%>>
             <%=value%></option>
           <%})%>     
           <%}%></select>
         <button class="btn btn-small action-addanimation action-add"><i class="icon-plus"></i></button>
       </div>
       <div class="list">
       <ul></ul></div>
     </fieldset>
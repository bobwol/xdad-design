<div id=<%=id%>>
          <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
           <h3 id="myModalLabel">任务管理</h3>
         </div>
         <div class="modal-body task-management">
           <ul style="border:1px solid #ddd; border-bottom:0; margin-bottom:20px;">
             <li><span class="alignleft">开始时间 *：</span><span class="alignright">
               <input type="text" class="date_picker" name="planStart" id="datepicker_start" style="width:108px; border-radius:0; ackground:url\(\'../img/icon_datepicker.png\'\) no-repeat 95% 50%;" value="<%=planStart%>">
               </span></li>
             <li><span class="alignleft">结束时间 *：</span><span class="alignright">
               <input type="text" class="date_picker" name="planEnd" id="datepicker_end" style="width:108px; border-radius:0; ackground:url\(\'../img/icon_datepicker.png\'\) no-repeat 95% 50%;" value="<%=planEnd%>">
               </span></li>
           </ul>
           <ul style="border:1px solid #ddd; border-bottom:0;">
            <% _.each(roles,function(item){ _.each(item,function(user,role){ %>
             <li><span class="alignleft"><%=global.dict.query(role)%><span style="<%=["writing","sreview2"].indexOf(role)>0?"color:red":"display:none" %>">(*)</span>：</span><span class="alignright">
               <select style="width:120px;" name="roles.<%=roles.indexOf(item)%>.<%=role%>">
                   <option value="">无</option>
                 <% _.each(userslist,function(member){ %>
                   <option value=<%=member.id%> <%=(member.id==user)?"selected":""%>><%=member.name %></option>
                 <% }); %>
               </select>
               </span>
           </li>
           <% }); %>
           <% }); %>
           </ul>
         </div>
         <div class="modal-footer">
           <button class="btn" data-dismiss="modal" aria-hidden="true">确定</button>
           <a href="#" data-dismiss="modal" aria-hidden="true">[ 取消 ]</a> 
         </div>
</div>
<% if(model.has("type")&&model.get("type")=="writing"&&model.get("status")=="doing") { %>
<button class="btn btn-small action-save" style="width:95px; border-radius:15px 0 0 15px;">保存 (<%=model.get("progress")%>%)</button>
<button class="btn btn-small dropdown-toggle" data-toggle="dropdown" style="width:30px; border-radius:0 15px 15px 0; padding-right:12px;"><span class="caret"></span></button>
<ul class="dropdown-menu">
<li><span style="padding-left:20px; line-height:30px;">进度</span></li>
<li class="divider"></li>
<% for (i=10;i<101;i=i+10) { %>
<li><a href="#"><%=i%>%</a></li>
<% } %>
<li class="divider"></li>
<%if(Number(model.get("progress"))==100){%>
<li style="padding:5px 20px 10px 20px;">
<button class="btn btn-small btn-primary pageedit_submit" href="#task_submitModal"><i class="icon-ok-sign icon-white"></i> 提交</button>
</li>
<%}%>
</ul>
<% }else{ %>
<button class="btn btn-small save" style="width:95px; border-radius:15px 15px 15px 15px;">保存</button>
<% } %>
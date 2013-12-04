(function(units){
	units.demo_template=_.template(
		[
			'           <tr class="content-item <%=review_state%> <%=type%>" id=<%=id%> data-type="<%=type%>">',
			'               <td width="5%"><input name="unit-item" type="checkbox" value=<%=id%>></td>',
			'               <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
			'	            <td width=""><span class="title"><%=title%></span>',
			'	                <div class="action">',
			'	                      <ul>',
			'							<% _.each(operationalitems,function(operate){ %>',
			'								<% if(operate.type=="workflow"){ %>',
			'		                        	<li><a class="workflow" id="<%=operate.id%>" href="<%=url%>"><%=global.dict.query(operate.name)%></a></li>',
			'								<% }else{ %>',
			'		                        	<li><a class="list-<%=operate.id%>" href=<%=url+"/"+operate.id%>><%=global.dict.query(operate.name)%></a></li>',
			'								<% } %>',
			'							<% }) %>',
			'	                      </ul>',
			'	                    </div>',
			'	                  </div></td>',
			'	            <td width="12%"><%=created%></td>',
			'	            <td width="10%"><%=creator%></td>',
			'	            <td width="10%"><span class="status"><%=global.dict.query(review_state)%></span></td>',
			'               <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
			'           </tr>',
		].join("")
	);
	units.template=_.template(
		[
			'           <tr class="content-item <%=review_state%> <%=type%> <% if(typeof top_setting != "undefined"){ if (top_setting["values"]){ %>ontop<% }} %>" id=<%=id%> data-type="<%=type%>"  <%if(typeof position != "undefined"){%>data-position=<%=position%><%}%>>',
			'               <td width="5%"><input name="unit-item" type="checkbox" value=<%=id%> <% if(typeof readonly!= "undefined" && readonly){%>disabled<%}%>></td>',
			'               <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
			'	            <td width=""><span class="title"><%=title%></span>',
			'	                <div class="action">',
			'	                      <ul>',
			'							<% _.each(operationalitems,function(operate){ %>',
			'								<% if(operate.type=="workflow"){ %>',
			'		                        	<li><a class="list-<%=operate.id%> workflow" id="<%=operate.id%>" href="<%=url%>"><%=global.dict.query(operate.name)%></a></li>',
			'								<% }else{ %>',
			'		                        	<li><a class="list-<%=operate.id%>" href=<%=url+"/"+operate.id%> <% if(_.has(operate, "target")){ %> target="<%=operate.target%>" <% } %>><%=global.dict.query(operate.name)%></a></li>',
			'								<% } %>',
			'							<% }) %>',
			'	                      </ul>',
			'	                    </div>',
			'	                  </div></td>',
			'	            <td width="12%"><%=created%></td>',
			'	            <td width="10%"><%=creator%></td>',
			'	            <td width="10%"><span class="status"><%=global.dict.query(review_state)%></span></td>',
			'               <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
			'           </tr>',
		].join("")
	);
	units.pending_template=_.template(
		[
			'<% if(_.indexOf(["pending","retracting"],review_state)>=0){ %>',
			'           <tr class="content-item <%=review_state%> <%=type%>" id=<%=id%> data-type="<%=type%>">',
			'               <td width="5%"><input name="unit-item" type="checkbox" value=<%=id%> <% if(typeof readonly!= "undefined" && readonly){%>disabled<%}%>></td>',
			'               <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
			'	            <td width=""><span class="title"><%=title%></span>',
			'	                <div class="action">',
			'	                    <ul>',
			'						<% _.each(operationalitems,function(operate){ %>',
			'							<% if(_.indexOf(["preview","reject_retract","retract","reject","publish"], operate.id)>=0 ){ %>',
			'	                        	<li>',
			'								  <% if(operate.type=="workflow"){ %>',
			'									<a class="<% if(operate.id!="preview"){ %>workflow<% }else{ %>list-<%=operate.id%><% } %>" id="<%=operate.id%>" href=<%=url%>><%=units.pendingAction(operate.name)%></a>',
			'								  <% }else{ %>',
			'		                        	<li><a class="list-<%=operate.id%>" href=<%=url+"/"+operate.id%>><%=global.dict.query(operate.name)%></a></li>',
			'								  <% } %>',
			'								</li>',							
			'							<% } %>',
			'						<% }) %>',
			'	                    </ul>',
			'	                </div></td>',
			'               <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
			'	            <td width="10%"><%=creator%></td>',
			'	            <td width="12%"><%=created%></td>',
			'	            <td width="10%"><span class="status"><%if(typeof isWorkingCopy != "undefined" && isWorkingCopy){%>更新<%}else if(review_state=="pending"){%>发布<%}else{%>收回<%}%></span></td>',
			'           </tr>',
			'<% } %>',
		].join("")
	);
	units.pending_menu=_.template(
		[
			'	        <table cellspacing="0" class="hascheckbox list">',
			'	          <thead>',
			'	            <tr>',
			'	                <th scope="col" width="5%"><input type="checkbox" value="selectall"></th>',
			'	                <th scope="col" colspan="2">标题</th>',
			'	                <th scope="col" width="10%">类型</th>',
			'	                <th scope="col" width="10%">提交者</th>',
			'	                <th scope="col" width="12%">提交日期</th>',
			'	                <th scope="col" width="10%">行为</th>',
			'	            </tr>',
			'	          </thead>',
			'	        </table>',
		].join("")
	);
	units.pending_menu=_.template(
		[
			'	        <table cellspacing="0" class="hascheckbox list">',
			'	          <thead>',
			'	            <tr>',
			'	                <th scope="col" width="5%"><input type="checkbox" value="selectall"></th>',
			'	                <th scope="col" colspan="2">标题</th>',
			'	                <th scope="col" width="10%">类型</th>',
			'	                <th scope="col" width="10%">提交者</th>',
			'	                <th scope="col" width="12%">提交日期</th>',
			'	                <th scope="col" width="10%">行为</th>',
			'	            </tr>',
			'	          </thead>',
			'	        </table>',
		].join("")
	);
})(units);
<fieldset class="actionitem" style="margin:0">
   	<div class="item" style="margin:0 0 15px;">对象: 
   		<div style="float:right; width:140px; height:15px; margin:0 0 0 5px;">
   			<%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get('iType')%>
   		</div>
   	</div>
	<div class="actiondetail">
		<div style="margin:0 0 15px;" class="item">
			Actions:
			<select name="iAction" data-type="number" style="float:right; width:140px; height:24px; margin:0 0 0 5px;">
				<%_.each(interaction.ActionExecTypes,function(value,key){%>
					<option value="<%=key%>" <%=(iDetail.results&&iDetail.results[0]&&iDetail.results[0].iAction==key)&&"selected"||""%>><%=value%></option>			
				<%})%>
			</select>
		</div>
	</div>
	<ul class="detailitems">
	<div class="item" style="margin:0 0 15px;">参数设置:</div>
	<%if(iDetail&&iDetail.results[0].iAction==0){%>
	<%_.each(interaction.iAnimationGroupList.toJSON(),function(i){%>
		<li id="<%=i.id%>"><input type="checkbox" name="values" value="<%=i.id%>" <%=iDetail.results&&_.include(iDetail.results[0].values,i.id)&&"checked"||""%>/><%=interaction.elementlist.get(i.overlay_id).toJSON().iDetail.title||interaction.elementlist.get(i.overlay_id).toJSON().iType%>(<%=interaction.AnimationTypes[i.iType]||interaction.MediaAnimationTypes[i.iType]%>)</li>	
	<%})%>	
	<%}%>
	<%if(iDetail&&iDetail.results[0].iAction==1||iDetail&&iDetail.results[0].iAction==2){%>
	<%_.each(interaction.elementlist.toJSON(),function(i){%>
		<li id="<%=i.id%>"><input type="checkbox" name="values" value="<%=i.id%>" <%=iDetail.results&&_.include(iDetail.results[0].values,i.id)&&"checked"||""%>/><%=interaction.elementlist.get(i.id).toJSON().iDetail.title||interaction.elementlist.get(i.id).toJSON().iType%></li>
	<%})%>		
	<%}%>
	</ul>
	<div style="text-align:center"><a class="btn btn-small btn-primary action-confirm" style="display:inline"><i class="icon-ok icon-white"></i></a></div>
</fieldset>
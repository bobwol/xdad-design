<fieldset class="actionitem" style="margin:0">
   	<div class="item" style="margin:0 0 15px;"><%=global.dict.query('Action Object')%>: 
   		<div style="float:right; width:140px; height:15px; margin:0 0 0 5px;">
   			<%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get('iType')%>
   		</div>
   	</div>
	<div class="actiondetail">
		<div style="margin:0 0 15px;" class="item">
			<%=global.dict.query('Trigger')%>:
			<select name="iAction" data-type="number" style="float:right; width:140px; height:24px; margin:0 0 0 5px;">
				<%_.each(interaction.ActionExecTypes,function(value,key){%>
					<option value="<%=key%>" <%=(iDetail.results&&iDetail.results[0]&&iDetail.results[0].iAction==key)&&"selected"||""%>><%=global.dict.query(value)%></option>			
				<%})%>
			</select>
		</div>
	</div>
	<ul class="detailitems" style="position:relative;">
	<!--<div class="item" style="margin:0 0 15px;">参数设置:</div>-->
	<%if(iDetail&&iDetail.results[0].iAction==0){%>
	<%_.each(interaction.iAnimationlist.toJSON(),function(i){%>
		<li id="<%=i.id%>"><input type="checkbox" name="values" value="<%=i.id%>" <%=iDetail.results&&_.include(iDetail.results[0].values,i.id)&&"checked"||""%>/> <%=interaction.elementlist.get(i.overlay_id).toJSON().iDetail.title||interaction.elementlist.get(i.overlay_id).toJSON().iType%>(<%=interaction.AnimationTypes[i.iType]||interaction.MediaAnimationTypes[i.iType]%>)</li>	
	<%})%>	
	<%}%>
	<%if(iDetail&&iDetail.results[0].iAction==1||iDetail&&iDetail.results[0].iAction==2){%>
	<%_.each(interaction.elementlist.toJSON(),function(i){%>
		<li id="<%=i.id%>"><input type="checkbox" name="values" value="<%=i.id%>" <%=iDetail.results&&_.include(iDetail.results[0].values,i.id)&&"checked"||""%>/> <%=interaction.elementlist.get(i.id).toJSON().iDetail.title||interaction.elementlist.get(i.id).toJSON().iType%></li>
	<%})%>		
	<%}%>
	<%if(iDetail&&iDetail.results[0].iAction==5||iDetail&&iDetail.results[0].iAction==5){%>
	<li id="first"><input type="radio" name="values" value="first" <%=iDetail.results&&iDetail.results[0].values=="firts"&&"checked"||""%>/>首页</li>
	<li id="first"><input type="radio" name="values" value="last" <%=iDetail.results&&iDetail.results[0].values=="last"&&"checked"||""%>/>最后页</li>
	<li id="first"><input type="radio" name="values" value="prev" <%=iDetail.results&&iDetail.results[0].values=="prev"&&"checked"||""%>/>上一页</li>
	<li id="first"><input type="radio" name="values" value="next" <%=iDetail.results&&iDetail.results[0].values=="next"&&"checked"||""%>/>下一页</li>
	<li><input type="radio" name="values" <%=iDetail.results&&!_.include(["first","next","last","prev"],iDetail.results[0].values)&&"checked"||""%>/>指定页
	<select name="values" style="width:150px;" <%=iDetail.results&&_.include(["first","next","last","prev"],iDetail.results[0].values)&&"disabled"||""%>>
	<%_.each(iPagelist.toJSON(),function(i){%>
		<option id="<%=i.id%>" value="<%=i.uid%>" <%=iDetail.results&&iDetail.results[0].values==i.uid&&"selected"||""%>><%="页"+(iPagelist.indexOf(iPagelist.get(i.id))+1)%></option>
	<%})%>	
	</select>	
	<%}%>
	</li>
	</ul><br/>
</fieldset>
<div style="text-align:center"><a class="btn btn-small btn-primary action-confirm" style="display:inline"><i class="icon-ok icon-white"></i></a></div>
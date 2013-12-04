 <div class="mod animation-mod settings-mod" style="display: block;">
          <div class="mod-hd">
            <h3>动画选项</h3>
            <button class="close" type="button">×</button>
          </div>
          <div class="mod-bd nanoscrollbar" style="min-height:400px;">
          <div class="setting-body">
<fieldset class="animationitem" style="margin:0">
	<legend><%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get("iType")%>(<%=interaction.getAnimationTypeName(iType)%>)</legend>
   	<div class="item">对象: 
   		<div style="float:right; width:140px; height:15px; margin:0 0 0 5px;">
   			<%=interaction.elementlist.get(overlay_id).toJSON().iDetail.title||interaction.elementlist.get(overlay_id).get('iType')%>
   		</div>
   	</div>
	<div class="animationdetail">
		 <div class="item">
			延迟(秒):<input type="text" name="delay" data-type="number" style="float:right; width:140px; height:15px; margin:0 0 0 5px;" value="<%=iTiming.delay%>">
		</div>
		<%if(interaction.elementlist.get(overlay_id).toJSON().iType!="Audio"&&interaction.elementlist.get(overlay_id).toJSON().iType!="Video"){ %>
		 <div class="item">
			持续(秒):<input type="text" name="duration" data-type="number" style="float:right; width:140px; height:15px; margin:0 0 0 5px;" value="<%=iTiming.duration%>">
		</div>
		<div class="item">
		    重复(次):
			<select name="repeat" data-type="number" style="float:right; width:140px; height:24px; margin:0 0 0 5px;">
				<%_.each(interaction.RepeatTypes,function(value,key){%>
					<option value="<%=key%>" <%=(iTiming.repeat==key)&&"selected"||""%>><%=value%></option>			
				<%})%>
				    <option value="2" <%=(iTiming.repeat==2)&&"selected"||""%>>2</option>
				    <option value="3" <%=(iTiming.repeat==3)&&"selected"||""%>>3</option>	
			</select>
		</div>
		 <div class="item">
			<input name="rewind" data-type="boolean" type="checkbox" value="true" <%=(iTiming.rewind==true)&&"checked"||""%>> 播放完返回开头
		</div>
		<% } %>
		<div class="item">
			出现方式:
			<select name="start" data-type="number" style="float:right; width:140px; height:24px; margin:0 0 0 5px;">
				<%_.each(interaction.StartTypes,function(value,key){%>
					<option value="<%=key%>" <%=(iTiming.start==key)&&"selected"||""%>><%=value%></option>			
				<%})%>
			</select>
		</div>
		 <div class="item">
			<input name="waitaction" data-type="boolean" type="checkbox" value="true" <%=(iTiming.waitaction==true)&&"checked"||""%>> 是否等待触发器触发
		</div>
		<%if(interaction.elementlist.get(overlay_id).toJSON().iType!="Audio"&&interaction.elementlist.get(overlay_id).toJSON().iType!="Video"){ %>
		<div class="item">
		    效果:
			<select name="ease" data-type="number" style="float:right; width:140px; height:24px; margin:0 0 0 5px;">
				<%_.each(interaction.EaseTypes,function(value,key){%>
					<option value="<%=key%>" <%=(iTiming.ease==key)&&"selected"||""%>><%=global.dict.query(value)%></option>			
				<%})%>
			</select>
		</div>
		<% } %>
	</div>
	<ul class="detailitems">
	<div class="item" >参数设置:</div>
	<%if(_.include([101,201],iType)){%>
		<div class="item" >
			方向:
			<select name="direction" data-type="number" style="float:right; width:140px; height:24px; margin:0 0 0 5px;">
				<%_.each(interaction.DirectionTypes,function(value,key){%>
					<option value="<%=key%>" <%=(iDetail.direction&&iDetail.direction==key)&&"selected"||""%>><%=global.dict.query(value)%></option>			
				<%})%>
			</select>	
		</div>	
	<%}%>
	<%if(_.include([302,301],iType)){%>
		<div class="item" >
			<input name="autoRotate" data-type="boolean" type="checkbox" value="true" <%=(iDetail.autoRotate==true)&&"checked"||""%>> 跟随路径旋转
		</div>	
	<%}%>
	<%if(_.include([401],iType)){%>
		<div class="item" >比列(倍):
				<input type="text" name="scale" data-type="number" style="float:right; width:140px; height:15px; margin:0 0 0 5px;" value="<%=iDetail.scale%>">
		</div>	
	<%}%>
	<%if(_.include([402],iType)){%>
		<div class="item" >不透明度(0~1):
				<input type="text" name="opacity" data-type="number" style="float:right; width:140px; height:15px; margin:0 0 0 5px;" value="<%=iDetail.opacity%>">
		</div>	
	<%}%>
	<%if(_.include([403],iType)){%>
		<div class="item" >旋转角度:
				<input type="text" name="rotation" data-type="number" style="float:right; width:140px; height:15px; margin:0 0 0 5px;" value="<%=iDetail.rotation%>">
		</div>	
		<div class="item" >轴向:
			<select name="axial" data-type="number" style="float:right; width:140px; height:24px; margin:0 0 0 5px;">
				<%_.each(interaction.AxialTypes,function(value,key){%>
					<option value="<%=key%>" <%=(iDetail.axial&&iDetail.axial==key)&&"selected"||""%>><%=value%></option>			
				<%})%>
			</select>	
		</div>	
	<%}%>
	</ul>
</fieldset>
<div style="text-align:center" class="item-save"><a class="btn btn-small btn-primary animation-confirm" style="display:inline"><i class="icon-ok icon-white"></i></a></div>
          </div>
  		  </div>
  </div>
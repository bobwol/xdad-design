				<div class="element component <%=iType.toLowerCase()%>" id="<%=id%>" style="position: absolute; width:<%=iCommon[iPageDirection].iWidth%>px; height:<%=iCommon[iPageDirection].iHeight%>px; left:<%=iCommon[iPageDirection].iStartx%>px; top:<%=iCommon[iPageDirection].iStarty%>px;">
					<div class="iMask" style="postion:absolute;width:100%;height:100%;z-index:0;" rel="tooltip" data-title="双击进入地图编辑，点击外部区域可以退出地图编辑"></div>
					<div class="iContent" style="postion:absolute;width:100%;height:100%;z-index:-1"></div>
				</div>
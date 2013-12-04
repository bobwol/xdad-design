<div class="iView static" data-type="<%=iType%>" id="<%=id%>" style="position: absolute; width: <%=iCommon[iPageDirection].iWidth%>px; height: <%=iCommon[iPageDirection].iHeight%>px; left: <%=iCommon[iPageDirection].iStartx%>px; top: <%=iCommon[iPageDirection].iStarty%>px;background-color:transparent;backgroud-repeat:no-repeat;background-postion:center;">
	<%if(iType=="RichText"){%>
					<div class="iText nanoscrollbar">
						<%=iDetail.iText%>
					</div>		
	<%}%>
</div>

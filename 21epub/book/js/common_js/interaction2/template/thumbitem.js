<div class="interaction_thumbitem" data-type="<%=iType%>" data-id="<%=id%>" style="position: absolute; width:<%=iCommon[iPageDirection].iWidth%>px; height:<%=iCommon[iPageDirection].iHeight%>px; left:<%=iCommon[iPageDirection].iStartx%>px; top:<%=iCommon[iPageDirection].iStarty%>px;overflow:hidden;">
	<%if(iType=="RichText"){%>
		<div class="typo">
			<%=iDetail.iText%>
		</div>		
	<%}%>
	<%if(iType=="Map"){%>
		<div class="typo">
			<%=iDetail.iText%>
		</div>		
	<%}%>
	<%if(iType=="Pay"){%>
		<div class="typo">
			<%=iDetail.iText%>
		</div>		
	<%}%>
	<%if(iType=='Image'){%>
			<%if(iDetail.iImg&&iDetail.iImg[0]){%>
				<img class="Context" src="<%=iDetail.iImg[0].thumbnail%>" style="width:100%;height:100%;">
			<%}%>
	<%}%>
	<%if(iType=='Slide'){%>
				<%if(iDetail.iImg&&iDetail.iImg[0]){%>
						<img class="Context" src="<%=iDetail.iImg[0].thumbnail%>" style="width:100%;height:100%;position:absolute;">
				<%}%>
	<%}%>
	<%if(iType=='CycleImage'){%>
				<%if(iDetail.iImg&&iDetail.iImg[0]){%>
						<img class="Context" src="<%=iDetail.iImg[0].thumbnail%>" style="width:100%;height:100%;position:absolute;">
				<%}%>
	<%}%>
	<%if(iType=='Button'){%>
				<%if(iDetail.iconNormal&&iDetail.iconNormal[0]){%>
						<img class="Context" src="<%=iDetail.iconNormal[0].thumbnail%>" style="width:100%;height:100%;position:absolute;">
				<%}%>
	<%}%>
	<%if(iType=='Video'){%>
		<div style="width:100%;height:100%;position:absolute;background:#ccc;">
		</div>
	<%}%>
</div>
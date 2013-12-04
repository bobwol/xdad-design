<div class="iView dynamic hide" data-type="<%=iType%>" id="<%=id%>" style="position: absolute; width: 1px; height: 1px; background-color:transparent;backgroud-repeat:no-repeat;background-postion:center;">
	<%if(iType=="RichText"){%>
					<div class="iText nanoscrollbar Element" style="position:absolute;left: -<%=iCommon[iPageDirection].iWidth/2%>px; top: -<%=iCommon[iPageDirection].iHeight/2%>px;background-color:transparent;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;">
						<%=iDetail.iText%>
					</div>		
	<%}%>
	<%if(iType=='Image'){%>
		<div class="iImage Element" style="position:absolute;left: -<%=iCommon[iPageDirection].iWidth/2%>px; top: -<%=iCommon[iPageDirection].iHeight/2%>px;background-color:transparent;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;">
			<%if(iDetail.iImg&&iDetail.iImg[0]){%>
				<img class="Context" src="<%=iDetail.iImg[0].picture%>" style="width:100%;height:100%;">
			<%}%>
		</div>
	<%}%>
	<%if(iType=='Slide'){%>
		<div class="iSlide Element" style="overflow:hidden;position:absolute;left: -<%=iCommon[iPageDirection].iWidth/2%>px; top: -<%=iCommon[iPageDirection].iHeight/2%>px;background-color:transparent;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;">
			<div class="slidecontent" style="position:absolute;width:100%;height:100%;">
				<%if(iDetail.iImg){%>
					<%_.each(iDetail.iImg,function(i){%>
						<img class="Context hide" src="<%=i.picture%>" style="width:100%;height:100%;position:absolute;">
					<%})%>
				<%}%>
			</div>
		</div>
	<%}%>
	<%if(iType=='CycleImage'){%>
		<div class="iCycleImage Element" style="overflow:hidden;position:absolute;left: -<%=iCommon[iPageDirection].iWidth/2%>px; top: -<%=iCommon[iPageDirection].iHeight/2%>px;background-color:transparent;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;">
			<div class="CycleImagecontent" style="position:absolute;width:100%;height:100%;">
				<%if(iDetail.iImg){%>
					<%_.each(iDetail.iImg,function(i){%>
						<img class="Context" src="<%=i.picture%>" style="opacity:0;width:100%;height:100%;position:absolute;">
					<%})%>
				<%}%>
			</div>
		</div>
	<%}%>
	<%if(iType=='Video'){%>
		<div class="iVideo Element" style="position:absolute;left: -<%=iCommon[iPageDirection].iWidth/2%>px; top: -<%=iCommon[iPageDirection].iHeight/2%>px;background-color:transparent;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;">
			<%if(iDetail.iFile&&iDetail.iFile[0]){%>
			<video id="Video_<%=id%>" class="video-js vjs-default-skin" style="position:absolute;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;" preload="auto">
			  <source src="<%=iDetail.iFile[0].file||iDetail.iFile[0].content%>" type="video/x-m4v" />
			</video>
			<%}%>
		</div>
	<%}%>
	<%if(iType=='Button'){%>
		<div class="iButton Element" style="position:absolute;left: -<%=iCommon[iPageDirection].iWidth/2%>px; top: -<%=iCommon[iPageDirection].iHeight/2%>px;background-color:transparent;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;">
			<%if(iDetail.iconNormal&&iDetail.iconNormal[0]){%>
				<img class="Context iconNormal" src="<%=iDetail.iconNormal[0].picture%>" style="width:100%;height:100%;">
			<%}%>
			<%if(iDetail.iconActive&&iDetail.iconActive[0]){%>
				<img class="Context iconActive" src="<%=iDetail.iconActive[0].picture%>" style="width:100%;height:100%;display:none;">
			<%}%>
		</div>
	<%}%>
	<%if(iType=="Map"){%>
					<div class="iMap nanoscrollbar Element" style="position:absolute;left: -<%=iCommon[iPageDirection].iWidth/2%>px; top: -<%=iCommon[iPageDirection].iHeight/2%>px;background-color:transparent;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;">
						<%=iDetail.iText%>
					</div>		
	<%}%>
	<%if(iType=="Pay"){%>
					<div class="iPay nanoscrollbar Element" style="position:absolute;left: -<%=iCommon[iPageDirection].iWidth/2%>px; top: -<%=iCommon[iPageDirection].iHeight/2%>px;background-color:transparent;width:<%=iCommon[iPageDirection].iWidth%>px;height:<%=iCommon[iPageDirection].iHeight%>px;">
						<%=iDetail.iText%>
					</div>		
	<%}%>
</div>
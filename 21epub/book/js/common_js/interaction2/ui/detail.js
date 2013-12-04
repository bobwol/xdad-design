define(['underscore'],function(){
	var detail={
			Image:_.template(
				[
'					<fieldset class="detail no-legend">',
// '						<div class="item">',
// '							<input data-attr="iDetail" data-type="boolean" name="iAdapt" type="checkbox" value="true" <%=iDetail.iAdapt&&"checked=true"%>> 边框适应图片大小',
// '						</div>',
'						<div class="item">',
'							<input data-attr="iDetail" data-type="boolean" name="iFullview" type="checkbox" value="true" <%=iDetail.iFullview&&"checked=true"%>> 点击全屏显示',
'						</div>',
'					</fieldset>',
				].join("")	
			),
			Button:_.template(
				[
'					<fieldset class="detail no-legend">',
'						<div class="item">',
'							<input data-attr="iDetail" data-type="boolean" name="isSwitch" type="checkbox" value="true" <%=iDetail.isSwitch&&"checked=true"%>> 是否设为开关',
'						</div>',
'					</fieldset>',
				].join("")	
			),
			VideoType:_.template(
				[
'				<fieldset class="typedetail no-legend" id="iVideotype">',
'					<label class="db">选择类型</label>',
'					<select data-attr="iDetail" name="iVideotype" class="db">',
'						<option <%=(iDetail.iVideotype=="mediafile")&&"selected"||""%> value="mediafile">视频文件</option>',
'						<option <%=(iDetail.iVideotype=="streammedia")&&"selected"||""%> value="streammedia">流媒体</option>',
'					</select>',
'				</fieldset>',
				].join("")
			),
			Video:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div class="info_set1" class="">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iAdapt" type="checkbox" value="true" <%=iDetail.iAdapt&&"checked=true"||""%>></span><span class="text1"> 边框适应视频比例</span>',
'					</div>',
'					<div class="info_set1">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iControl" type="checkbox" value="true" <%=iDetail.iControl&&"checked=true"||""%>></span><span class="text1"> 是否显示控制条</span>',
'					</div>',
'					<div class="info_set1">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iAutoplay" type="checkbox" value="true" <%=iDetail.iAutoplay&&"checked=true"||""%>></span><span class="text1"> 自动播放</span>',
'					</div>',
'					<div class="info_set1">',
'					<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iRepeat" type="checkbox" value="true" <%=iDetail.iRepeat&&"checked=true"||""%>></span><span class="text1"> 循环播放</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			Audio:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div class="info_set1">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iAutoplay" type="checkbox" value="true" <%=iDetail.iAutoplay&&"checked=true"||""%>></span><span class="text1"> 自动播放</span>',
'					</div>',
'					<div class="info_set1">',
'						<span class="input1"><input data-attr="iDetail" data-type="boolean" name="iRepeat" type="checkbox" value="true" <%=iDetail.iRepeat&&"checked=true"||""%>></span><span class="text1"> 循环播放</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			LinkType:_.template(
				[
'				<fieldset class="no-legend typedetail">',
'					<span class="quarter">选择类型</span>',
'					<span class="threequarter">',
'					<select name="iLinktype" data-attr="iDetail" class="threequarter ui-state-default ui-corner-all">',
'						<option <%=(iDetail.iLinktype=="hyperlink")&&"selected"||""%> value="hyperlink">超链接</option>',
'						<option <%=(iDetail.iLinktype=="gotopage")&&"selected"||""%> value="gotopage">go to Page</option>',
'						<option <%=(iDetail.iLinktype=="Cortona3D")&&"selected"||""%> value="Cortona3D">Cortona3D</option>',
'					</select>',
'					</span>',
'				</fieldset>',
				].join("")
			),
			Link:_.template(
				[
'				<%if(iDetail.iLinktype=="hyperlink"){%>',
'				<fieldset class="no-legend detail">',
'					<div class="item">',
'						<span>网址:</span>',
'						<span><input data-attr="iDetail" class="ui-state-default ui-corner-all" name="iUrl" type="text"  value=<%=iDetail.iUrl%>></span>',
'					</div>',
'					<div class="cls"></div>',
'					<div class="item">',
'						<span><input data-attr="iDetail" data-type="boolean" <%=(iDetail.iSafari)&&"checked=checked"||""%> name="iSafari" type="checkbox" value="true"> </span>',
'						<span>在Safari中打开</span>',
'					</div>',
'				</fieldset>',
'				<% }%>',
'				<%if(iDetail.iLinktype=="gotopage"){%>',
'				<fieldset class="no-legend detail">',
'					<div class="item">',
'						<span><input data-attr="iDetail" name="iGoto" type="radio" value="page" <%=(iDetail.iGoto=="page")&&"checked=checked"||""%>>转到：</span>',
'						<span><input data-attr="iDetail" class="inputquarter ui-state-default ui-corner-all" name="iPage" type="text" value=<%=iDetail.iPage%>>页</span>',
'					</div>',
'					<div class="cls"></div>',
'					<span class="half"><input data-attr="iDetail" name="iGoto" type="radio" <%=(iDetail.iGoto=="prev")&&"checked=checked"||""%> value="prev">前一页</span>',
'					<span class="half"><input data-attr="iDetail" name="iGoto" type="radio" <%=(iDetail.iGoto=="next")&&"checked=checked"||""%> value="next">后一页</span>',
'				</fieldset>',
'				<% }%>',
'				<%if(iDetail.iLinktype=="Cortona3D"){%>',
'				<fieldset class="no-legend detail">',
'					<div id="iUpload" class="item">',
'						<span class="item">选择文件</span>',
'						<div class="cls"></div>',
'						<span class="quarter"><a id="iFile" data-attr="iFile" class="resources_upload"><img src="n/i_upload.png"></a></span>',
'					</div>',
'				</fieldset>',
'				<% }%>',
				].join("")
			),
			SlideType:_.template(
				[
'				<fieldset class="typedetail">',
'					<legend>选择类型</legend>',
'					<div class="item"><span><input data-attr="iDetail" type="radio" name="iSlidetype" value="横向" <%=(iDetail.iSlidetype=="横向")&&"checked=checked"||""%>> 横向</span> <span style="margin-left:10px;"><input data-attr="iDetail" type="radio" name="iSlidetype" value="纵向" <%=(iDetail.iSlidetype=="纵向")&&"checked=checked"||""%>> 纵向</span></div>',
'				</fieldset>',
				].join("")
			),
			Slide:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div id="" class="item">',
'						<span><input data-attr="iDetail" <%=(iDetail.iAutoplay)&&"checked=checked"||""%> data-type="boolean" name="iAutoplay" type="checkbox" value="true"> 自动播放</span>',
'					</div>',
'					<div id="" class="item">',
'						<span><input name="iRepeat" data-attr="iDetail" <%=(iDetail.iRepeat)&&"checked=checked"||""%> data-type="boolean" type="checkbox" data-attr="iDetail" value="true"> 循环</span><span style="margin-left:10px;"> 间隔 <input data-attr="iDetail" class="count" type="text" name="iInterval" value=<%=iDetail.iInterval%>> 秒</span>',
'					</div>',
'					<div class="item">',
'						<span><input name="iFade" data-attr="iDetail" type="radio" value="Fade" <%=(iDetail.iFade=="Fade")&&"checked=checked"||""%>> Fade</span> <span style="margin-left:10px;"><input data-attr="iDetail" name="iFade" type="radio" value="Slip" <%=(iDetail.iFade=="Slip")&&"checked=checked"||""%>> Slip</span>',
'					</div>',
'					<div id="" class="item">',
'						<span><input name="iSlipable" data-attr="iDetail" data-type="boolean" type="checkbox" value="true" <%=(iDetail.iSlipable)&&"checked=checked"||""%>> 可滑动</span><span style="margin-left:10px;"><input data-attr="iDetail" data-type="boolean" name="iPagenumber" type="checkbox" value="true" <%=(iDetail.iPagenumber)&&"checked=checked"||""%>> 显示页码</span>',
'					</div>',
'					<div class="item">',
'						<span><input name="iFullview" data-attr="iDetail" data-type="boolean" type="checkbox" value="true" <%=(iDetail.iFullview)&&"checked=checked"||""%>> 全屏</span><span style="margin-left:10px;"><input data-attr="iDetail" data-type="boolean" type="checkbox" name="iWholeswitch" value="true" <%=(iDetail.iWholeswitch)&&"checked=checked"||""%>> 整幅切换</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			CycleImage:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div id="" class="item">',
'						<span> <input data-attr="iDetail" <%=(iDetail.iAutoplay)&&"checked=checked"||""%> data-type="boolean" name="iAutoplay" type="checkbox" value="true"> 是否自动播放</span> <span style="margin-left:10px;">时间间隔 <input data-attr="iDetail" class="count" type="text" name="iInterval" value=<%=iDetail.iInterval%>> 秒</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			RichText:_.template(
				[
'				<fieldset class="no-legend detail">',
'					<div class="half">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iBackground" type="checkbox" value="true" <%=(iDetail.iBackground)&&"checked=checked"||""%>> </span>',
'						<span>背景透明</span>',
'					</div>',
'					<div class="half">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iScrollable" type="checkbox" value="true" <%=(iDetail.iScrollable)&&"checked=checked"||""%>> </span>',
'						<span>可滚动</span>',
'					</div>',
'				</fieldset>',
				].join("")
			),
			ShowHide:_.template(
				[
'				<fieldset class="no-legend detail">',
'				<div class="item">',
'					<input type="checkbox" name="iStatus" data-attr="iDetail" data-type="boolean" value="true" class="ui-state-default" <%=(iDetail.iStatus)&&"checked=checked"||""%>> 初始状态为隐藏',
'				</div>',
'				<div class="item elementlist"><ul>',
'				</ul></div>',
'				<div id="iUpload" class="item">',
'					<span class="quarter tc"><a id="iIconon" data-attr="iIconon" data-type="string" class="resources_upload"><img src=<%=iDetail.iIconon&&iDetail.iIconon||"n/i_upload.png"%>></a></span>',
'					<span class="quarter tc"><a id="iIconoff" data-attr="iIconoff" data-type="string" class="resources_upload"><img src=<%=iDetail.iIconoff&&iDetail.iIconoff||"n/i_upload.png"%>></a></span>',
'					<div class="cls"></div>',
'					<span class="quarter tc">On</span>',
'					<span class="quarter tc">Off</span>',
	'			</div>',
'				</fieldset>',
				].join("")
			),
			WebcontentType:_.template(
				[
'				<fieldset class="no-legend typedetail">',
'					<span class="quarter">选择类型</span>',
'					<span class="threequarter"><select data-attr="iDetail" name="iWebcontenttype" class="threequarter ui-state-default ui-corner-all">',
'						<option <%=(iDetail.iWebcontenttype=="local")&&"selected"||""%> value="local">Html本地文件包</option>',
'						<option <%=(iDetail.iWebcontenttype=="external")&&"selected"||""%> value="external">外部网页</option>',
'					</select>',
'					</span>',
'				</fieldset>',
				].join("")
			),
			Webcontent:_.template(
				[
'				<fieldset class="no-legend detail">',
'				<div class="item">',
'					<span>地址:</span>',
'					<span><input data-attr="iDetail" class="ui-state-default ui-corner-all" name="iUrl" type="text"  value=<%=iDetail.iUrl%>></span>',
'				</div>',
'				<div class="cls"></div>',
'				<hr class="item ui-widget-header">',
'				<%if(iDetail.iWebcontenttype=="local"){%>',
'				<div id="local" class="iWebcontenttype">',
'					<div id="iUpload" class="item">',
'						<span class="item">选择文件</span>',
'						<div class="cls"></div>',
'						<span class="quarter"><a id="iFile" data-attr="iFile" data-type="string" class="resources_upload"><img src="n/i_upload.png"></a></span>',
'					</div>',
'					<div class="cls"></div>',
'					<div class="half">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iBackground" type="checkbox" value="true" <%=(iDetail.iBackground)&&"checked=checked"||""%>> </span>',
'						<span>背景透明</span>',
'					</div>',
'					<div class="half">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iScrollable" type="checkbox" value="true" <%=(iDetail.iScrollable)&&"checked=checked"||""%>> </span>',
'						<span>可滚动</span>',
'					</div>',
'				</div>',
'				<% }%>',
'				<%if(iDetail.iWebcontenttype=="external"){%>',
'				<div id="external" class="iWebcontenttype">',
'					<div class="item">',
'						<span><input data-attr="iDetail" data-type="boolean" name="iBackground" type="checkbox" value="true" <%=(iDetail.iBackground)&&"checked=checked"||""%>> </span>',
'						<span>背景透明</span>',
'					</div>',
'				</div>',
'				<%}%>',
'				</fieldset>',
				].join("")
			),
			ElementsGroup:_.template(
				[
'				<fieldset class="no-legend detail">',
'				<div class="item elementlist categories"><ul>',
'				</ul></div>',
'				<div class="cls"></div>',
'				<hr class="item ui-widget-header">',
'               <div class="item">时间间隔（秒）<input data-attr="iDetail" class="ui-state-default" type="text" name="iInterval" style="width:40px" value=<%=iDetail.iInterval%>></div>',
'				</fieldset>',
				].join("")
			),
			AnimationGroup:_.template(
				[
'				<fieldset class="detail">',
'				<legend>Timeline</legend>',
'				<div class="item animations"><div class="list"><ul>',
'				</ul></div></div>',
'				<div class="cls"></div>',
'				</fieldset>',
				].join("")
			),
			ActionList:_.template(
				[
'				<fieldset class="detail">',
'				<legend>所有事件列表</legend>',
'				<div class="item actions"><div class="list"><ul>',
'				</ul></div></div>',
'				<div class="cls"></div>',
'				</fieldset>',
				].join("")
			),
		}
	return detail;
})

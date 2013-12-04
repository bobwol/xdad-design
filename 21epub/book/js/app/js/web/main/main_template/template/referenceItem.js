<li id="<%=id%>">
	<div>
		<span class="alignright">
			<a href="#" class="del">×</a>
		</span>
		文献：
		<a href="<%=url%>" target="_blank"><%=title%></a>(<%=version%>)
	</div>
	<dl class="inputform">

	<dd style="padding-left:36px;">
		<p id="note" style="padding:5px 0" data-type="text"><%=(note?note:"<em>点击添加内容</em>")%></p>
	</dd>
</dl>
</li>
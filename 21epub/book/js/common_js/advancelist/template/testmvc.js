<div class="mvctest_area" id="<%=id%>">
<div class="mod" data-fill="true" style="width:49%;float:left">
	<div class="mod-hd">List 测试</div>
	<div class="mod-bd">
		<ul>
			<li>
				<span class="status">container：<input type="text" name="container" style="width:500px"></span>
			</li>
			<li>
				<span class="status">支持关键字搜索：<input type="checkbox" name="search" data-type="boolean"></span>
			</li>
			<li>
				<span class="status">后台模板列表：<input type="text" name="servertemplatefiles" data-type="boolean" style="width:400px"></span>
			</li>
			<li>
				<span class="wait">wait功能：<input type="checkbox" name="wait" data-type="boolean"></span>
			</li>	
			<li>
				<span class="wait">more功能：<input type="checkbox" name="addmore" data-type="boolean"></span>
			</li>	
			<li>
				<span class="status">request参数(例如:id)：<input type="text" name="request" data-type="boolean" style="width:400px"></span>
			</li>	
			<li>
				<span class="status">className：<input type="text" name="className"></span>
			</li>
			<li>
				<span class="status">url：<input type="text" name="url" style="width:500px" data-type="boolean"></span>
			</li>
			<li>
				<span class="status">模板地址：<input type="text" name="templatefile" data-type="boolean" style="width:500px"></span>
			</li>
			<li>
				<span class="status">类型：
					<select name="type">
						<option value="grid">grid</option>
						<option value="tree">tree</option>	
						<option value="tree">custom</option>					
					</select>
				</span>
			</li>
			<li>
				<span class="status">wrap：<input type="text" name="wrap" data-type="boolean"></span>
			</li>
			<li>
				<span class="status">显示右边栏：<input type="checkbox" name="rightpanel" data-type="boolean"></span>
			</li>
		</ul>
	</div>
	<div class="mod-ft">
		<button type="button" class="btn btn-small btn-primary mvctest-confirm">确定</button>
		<button type="button" class="btn btn-small btn-primary mvctest-code">代码</button>
	</div>
</div>
</div>
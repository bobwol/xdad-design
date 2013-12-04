<div tabindex="-1" class="ia-menu ia-menu-has-icons ia-menu-align pagemenu" style="border-width: 1px; z-index: 65535;position:absolute;">
	<div style="width: 160px;">
		<% if(iType=="overlay"){ %>
		<div tabindex="-1" class="ia-menu-item <%=interaction.copyitems.length>0?"":"disabled"%>" id="pasteoverlay">
			<span class="menu-action">粘贴元素</span>
		</div>
		<% } %>
		<% if(iType=="page"){ %>
		<div style="width: 160px;">
			<div tabindex="-1" class="ia-menu-item" id="addblankpage">
				<span class="menu-action">新增空白页</span>
			</div>
		</div>
		<div tabindex="-1" class="ia-menu-item <%=interaction.copypages.length>0?"":"disabled"%>" id="pastepage">
			<span class="menu-action">粘贴页面</span>
		</div>
		<% } %>
	</div>
</div>
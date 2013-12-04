<div tabindex="-1" id="<%=id%>" class="ia-menu ia-menu-has-icons ia-menu-align pagemenu" style="border-width: 1px; z-index: 65535;position:absolute;">
	<% if(iType=='Page'){ %>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item" id="addblankpage">
			<span class="menu-action">新增空白页</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item" id="copypage">
			<span class="menu-action">复制页面</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item <%=interaction.copypages.length>0?"":"disabled"%>" id="pastepage">
			<span class="menu-action">粘贴页面</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item" id="pagetolib">
			<span class="menu-action">导出到库</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item" id="removepage">
			<span class="menu-action action-insertpageToresources">删除</span>
		</div>
	</div>
	<% } %>
	<% if(_.include(['Image','RichText','CycleImage','Slide','Video','Audio','Button','Map','Pay'],iType)){ %>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item" id="copyoverlay">
			<span class="menu-action">复制元素</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item <%=interaction.copyitems.length>0?"":"disabled"%>" id="pasteoverlay">
			<span class="menu-action">粘贴元素</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item" id="overlaytolib">
			<span class="menu-action">导出元素到库</span>
		</div>
	</div>
	<% if(interaction.floatmenu&&interaction.floatmenu.ids&&interaction.floatmenu.ids.length<2&&interaction.elementlist.get(interaction.floatmenu.ids[0]).toJSON().iType!="Audio"&&interaction.elementlist.get(interaction.floatmenu.ids[0]).toJSON().iType!="Video"){ %>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item <%=(interaction.iAnimationlist.where({overlay_id:interaction.floatmenu.ids[0]}).length>0)?"":"disabled"%>" id="copyanimation">
			<span class="menu-action">复制动画</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item <%=(interaction.copyanimations.length>0)?"":"disabled"%>" id="pasteanimation">
			<span class="menu-action">粘贴动画</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item <%=(interaction.iAnimationlist.where({overlay_id:interaction.floatmenu.ids[0]}).length>0)?"":"disabled"%>" id="animationtolib">
			<span class="menu-action">导出动画到库</span>
		</div>
	</div>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item <%=(interaction.iAnimationlist.where({overlay_id:interaction.floatmenu.ids[0]}).length>0)?"":"disabled"%>" id="removeanimation">
			<span class="menu-action">删除动画</span>
		</div>
	</div>
	<% } %>
	<div style="width: 160px;">
		<div tabindex="-1" class="ia-menu-item" id="removeoverlay">
			<span class="menu-action action-insertpageToresources">删除</span>
		</div>
	</div>
	<% }%>
</div>
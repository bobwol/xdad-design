     <fieldset id="<%=id%>" class="resources">
		        <legend><%=title||global.dict.query('Resources')%></legend>
		        <div class="action">
        <button data-target="#material" type="button" class="btn btn-small action-file" data-type="<%=type%>" rel="tooltip" data-title="引入素材"><i class="icon-arrow-up"></i></button>
        <button type="button" class="btn btn-small action-fullsize" rel="tooltip" data-title="素材尺寸还原">1:1</button>
      </div>
    </fieldset>
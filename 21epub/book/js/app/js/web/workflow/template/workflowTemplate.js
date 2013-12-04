<button <%=workflow.get_book_workflow_status(code)%>
	type="button" style="position:absolute; top:2px; right:10px;" class="
	<%=workflow.get_book_workflow_button_class(code)%>
	"> <i class="<%=workflow.get_book_workflow_flag_class(code)%>"></i>
	<%=workflow.get_book_workflow_operate_name(code)%>
</button>
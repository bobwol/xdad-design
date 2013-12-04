		<th width="10%" scope="col">
			<select name=<%=id%>>
				<option value=null><%=title%></option>
				<% _.each(options,function(option){ %> 
					<option value=<%=option.id%>><%=option.title%></option>
				<% }) %> 
			</select>
		</th>
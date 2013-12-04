<section id=<%=id%>>
	<hgroup>
		<h3><% if(typeof numberId !="undefined"){ %><span class="number"><%=numberId%></span><%}%> <span class="title"><%=title%></span></h3>
	</hgroup>
	<article><%=content%></article>
</section>
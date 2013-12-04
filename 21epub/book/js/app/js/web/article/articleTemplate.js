<section class="article">
	<hgroup>
		<h2><% if(typeof numberId != "undefined") {%><span class="number"><%=numberId%></span> <% } %><span class="title"><%=title%></span></h2>
	</hgroup>
	<article id=<%=id%>><%=content%></article>
</section>
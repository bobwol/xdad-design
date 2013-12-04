epub.app(function(){

	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.reveal@2.3.0')
	$(function(){

			// Full list of configuration options available here:
			// https://github.com/hakimel/reveal.js#configuration
			Reveal.initialize({
				// controls: true,
				progress: true,
				history: true,
				center: true,
				width: 1024,
				height: 699,


				theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
				transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none

			});
			Reveal.addEventListener( 'slidechanged', function( event ) {
			    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
			    section = event.currentSlide;
			    // current_id = $(section).attr('id');
			    console.log(section);
			    console.log(event.previousSlide);
			});
	});	

})

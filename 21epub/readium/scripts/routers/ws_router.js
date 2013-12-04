// This is the router used by the web served version of readium
// This router is used in the book view of the chrome extension build of readium



Readium.Routers.ViewerRouter = Backbone.Router.extend({
	routes: (function(){
		var pathName = document.location.pathname;
		var pathNameArr = pathName.split('/')
		pathNameArr[pathNameArr.length-1] = '';
		var pathNameStr = pathNameArr.join('/');
		var pathNameStr = pathNameStr.slice(1);
		var ret = {};
		ret[pathNameStr+"viewer.html?book=:key"] = "openBook";
		ret["*splat"] = "splat_handler";
		console.log(ret)
		return ret;
	})(),

	openBook: function(key) {
		console.log(key)
		// look up the book by its key in the global array or library data
		var book_data = _.find(window.ReadiumLibraryData, function(obj) {
			return obj.key === key;
		});

		if(book_data) {
			// initialze the viewer for that book
			window._epub = new Readium.Models.EPUB(book_data);
		
			window._epubController = new Readium.Models.EPUBController(_.extend({epub : window._epub}, book_data));
			window._applicationView = new Readium.Views.ViewerApplicationView({
				model: window._epubController
			});
			window._applicationView.render();
		}
		else {
			// did not find the book in our library
			alert("The book you requested does not exist");
		}

	},

	splat_handler: function(splat) {
		console.log(splat)
	}

});
var enableNavigationConfirmation = !(window.location.href.slice(window.location.href.indexOf("?") + 1).split("&").indexOf("leavePagePopUp=false") > -1);
var message = "Note: Any unsaved changes will be lost.";
window.onbeforeunload = function(a) {
	
};
W.Classes.setDynamicScriptLoading(true);
W.UserMedia.updateMedia();

function setPreloaderState(b) {
	var a = $("editor_preloader");
	a.set("class", b)
}
$(document).addEvent("domready", function() {
	window.setPreloaderState("editorLoading");
	
	function a() {
		if (W.Experiments.isReady() && W.Resources.bundleExist("EDITOR_LANGUAGE")) {
			W.Data.getDataByQuery("#EDITOR_STRUCTURE", function(c) {
				LOG.reportEditorLoadingEvent("SET SITE CALLED", 100);
				W.Viewer.setSite($("EDITOR_STRUCTURE"), c, false)
			})
		} else {
			W.Utils.callLater(a, [], window, 10)
		}
	}
	function b() {
		if (W.HtmlScriptsLoader.isReady()) {
			console.log(1)
			W.Theme.setInitDataItems({
				THEME_DATA: {
					type: "Theme",
					properties: {
						CONTACT_DIRECTORY: {
							type: "themeUrl",
							value: "editorIcons/links"
						},
						NETWORKS_DIRECTORY: {
							type: "themeUrl",
							value: "editorIcons/links"
						},
						EXTERNAL_LINKS_DIRECTORY: {
							type: "themeUrl",
							value: "editorIcons/links"
						},
						PAGES_DIRECTORY: {
							type: "themeUrl",
							value: "editorIcons/links"
						},
						THEME_DIRECTORY: {
							type: "themeUrl",
							value: "editor_mobile"
						},
						WEB_THEME_DIRECTORY: {
							type: "webThemeUrl",
							value: "editor_web"
						}
					}
				}
			});
			a()
		} else {	
			console.log(2)
			W.Utils.callLater(b, [], window, 10)
		}
	}
	b()
});
W.HtmlScriptsLoader.notifyScriptLoad();
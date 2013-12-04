var mapApplication;
var map;
var snippetFunc;
var previewIFrame;
var largerMapLink;
var snippetArea;
var frameSize = {};
var customSize = {};
var widthJitter = 1;
var snippetHeight;
var snippetWidth;
var controlsInitialized = false;
var sizeWidth = {
	"small" : 300,
	"medium" : 425,
	"large" : 640
};
var sizeHeight = {
	"small" : 300,
	"medium" : 350,
	"large" : 480
};
function onLoad() {
	embedPreviewMap();
	setupPreviewWindow();
}

function embedPreviewMap() {
	snippetArea = document.getElementById("snippetarea");
	document.getElementById("preview").innerHTML = snippetArea.value;
}

function setupPreviewWindow() {
	mapApplication = frames[0].gApplication;
	if (!mapApplication) {
		setTimeout(setupPreviewWindow, 50);
	} else {
		var previewFrame = frames[0];
		map = mapApplication.getMap();
		snippetFunc = previewFrame.glesnip;
		previewIFrame = previewFrame.frameElement;
		largerMapLink = document.getElementById("preview").getElementsByTagName("a")[0];
		previewFrame.GEvent.addListener(mapApplication, "updatepageurl", updateSnippetAndLink);
		previewFrame.GEvent.addListener(mapApplication, "vpage", updateSnippetAndLink);
		if (map.isLoaded()) {
			setupMapSizeControls();
		} else {
			previewFrame.GEvent.addListener(map, "load", setupMapSizeControls);
		}
	}
}

function parseCustomFields() {
	var customField = document.getElementsByName("customsize");
	for (var i = 0; i < customField.length; i++) {
		customField[i].parsedValue = parseInt(customField[i].value);
	}
}

function setupMapSizeControls() {
	if (controlsInitialized)
		return;
	var sizeButton = document.getElementsByName("size");
	for (var i = 0; i < sizeButton.length; i++) {
		sizeButton[i].onclick = changeSize;
	}
	var customField = document.getElementsByName("customsize");
	for (var i = 0; i < customField.length; i++) {
		customSize[customField[i].id] = customField[i];
		customField[i].onchange = changeSize;
		if (customField[i].value == "") {
			customField[i].value = previewIFrame[customField[i].id];
		}
	}
	parseCustomFields();
	frameSize["width"] = previewIFrame.width;
	frameSize["height"] = previewIFrame.height;
	snippetWidth = previewIFrame.width;
	snippetHeight = previewIFrame.height;
	for (var i = 0; i < sizeButton.length; i++) {
		if (sizeButton[i].checked && i != 1) {
			sizeButton[i].onclick();
		}
	}
	controlsInitialized = true;
}

function updateSnippetAndLink(event) {
	var fullUrl = mapApplication.getPageUrl();
	var embedUrl = fullUrl + "&output=embed";
	snippetFunc(snippetWidth, snippetHeight, embedUrl, function(snippet) {
		snippetArea.value = snippet;
		var start = snippet.indexOf('href="') + 6;
		var end = snippet.indexOf('"', start);
		largerMapLink.href = snippet.substring(start, end).replace(/&amp;/g, '&');
	});
}

function updateSnippetSize(snippet) {
	snippet = snippet.replace(/ width="[0-9]*"/, ' width="' + snippetWidth + '"');
	snippet = snippet.replace(/ height="[0-9]*"/, ' height="' + snippetHeight + '"');
	return snippet;
}

function changeSize() {
	var size = this.value;
	if (size == "custom") {
		parseCustomFields();
		disableCustomSize(false);
		frameSize["width"] = customSize["width"].parsedValue + widthJitter;
		widthJitter *= -1;
		frameSize["height"] = customSize["height"].parsedValue;
		snippetWidth = customSize["width"].parsedValue;
		snippetHeight = customSize["height"].parsedValue;
	} else if (this.name == "customsize") {
		var s = parseInt(size, 10);
		if (!isNaN(s) && s > 0) {
			frameSize[this.id] = s;
			if (this.id == "width") {
				snippetWidth = s;
			} else {
				snippetHeight = s;
			}
		}
		if (this.id == 'height') {
			frameSize["width"] = parseInt(frameSize["width"]) + widthJitter;
			widthJitter *= -1;
		}
	} else {
		disableCustomSize(true);
		frameSize["width"] = sizeWidth[size];
		frameSize["height"] = sizeHeight[size];
		snippetWidth = frameSize["width"];
		snippetHeight = frameSize["height"];
	}
	var center = map.getCenter();
	previewIFrame.height = parseInt(frameSize["height"]);
	previewIFrame.width = parseInt(frameSize["width"]);
	snippetArea.value = updateSnippetSize(snippetArea.value);
	setTimeout(function() {
		map.panTo(center);
	}, 500);
}

function disableCustomSize(disable) {
	customSize["width"].disabled = disable;
	customSize["height"].disabled = disable;
}//]]></script></head><body onload="onLoad()"><div class="header"><div class="logo"><style>div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,textarea,p,blockquote,th,td,img{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img,abbr,acronym{border:0}img{-moz-user-select:none}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}textarea{resize:none}a{outline:none}html,body{}</style><a class="logohref" href="#" style="width:137px;height:41px"> <img class="logo-img-2" src="/images/experiments/nav_logo78.png" alt="转到 Google Maps首页" style="top:-41px"> </a></div></div><div><ol><li class="step">自定义</li><div id="sizeradio" class="stepcontent"><table border="0"><tr><td colspan="2" class="grplbl">地图大小</td></tr><tr><td><input type="radio" name="size" value="small" id="sizesmall"/></td><td class="itemlbl"><label for="sizesmall">小</label></td></tr><tr><td><input type="radio" name="size" value="medium" id="sizemedium" checked /></td><td class="itemlbl"><label for="sizemedium">中</label></td></tr><tr><td><input type="radio" name="size" value="large" id="sizelarge"/></td><td class="itemlbl"><label for="sizelarge">大</label></td></tr><tr><td><input type="radio" name="size" value="custom" id="sizecustom"/></td><td class="itemlbl"><label for="sizecustom">自定义</label></td></tr><tr><td></td><td class="itemlbl">宽度&nbsp;<input type="text" id="width" name="customsize" size="5" disabled/>&nbsp;高度&nbsp;<input type="text" id="height" name="customsize" size="5" disabled/></td></tr></table></div><li class="step notfirst">预览</li><div id="preview" class="stepcontent"></div><li class="step notfirst">请复制此 HTML 并将其粘贴嵌入到您的网站上</li><div style="text-align:left"class="stepcontent"><textarea id="snippetarea" rows="8" cols="50" readonly><iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://ditu.google.cn/?ie=UTF8&amp;amp;ll=31.064698,120.975952&amp;amp;spn=1.486868,2.90863&amp;amp;t=m&amp;amp;z=9&amp;amp;vpsrc=6&amp;amp;brcurrent=3,0x35b27040b1f53c33:0x295129423c364a1,1%3B5,0,1&amp;amp;output=embed"></iframe><br /><small><a href="http://ditu.google.cn/?ie=UTF8&amp;amp;ll=31.064698,120.975952&amp;amp;spn=1.486868,2.90863&amp;amp;t=m&amp;amp;z=9&amp;amp;vpsrc=6&amp;amp;brcurrent=3,0x35b27040b1f53c33:0x295129423c364a1,1%3B5,0,1&amp;amp;source=embed" style="color:#0000FF;text-align:left">查看大图</a></small></textarea></div></ol></div></body></html>

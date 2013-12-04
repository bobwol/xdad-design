W.Classes.newClass({
	name: "mobile.editor.managers.serverfacade.SiteSerializer",
	Class: {
		initialize: function() {},
		serializeSiteData: function(d) {
			var c = d.W.Data.getDirtyDataObjectsMap();
			return Object.map(c, this._handleSingleDataItem)
		},
		_handleSingleDataItem: function(c, d) {
			if (d === "SITE_STRUCTURE") {
				return {
					siteName: c.getData().siteName,
					mainPage: c.getData().mainPage,
					type: "Document"
				}
			} else {
				return c.cloneData()
			}
		},
		serializeThemeData: function(c) {
			var d = Object.map(c, function(b, g) {
				var a = Object.clone(b.getData());
				delete(a.metaData);
				return a
			});
			return d
		},
		serializeSiteProperties: function(b) {
			return Object.map(b, this._handleSingleSiteProperty)
		},
		_handleSingleSiteProperty: function(b) {
			return Object.filter(b.getData(), function(d, a) {
				return a !== "metaData" && a !== "id"
			})
		},
		serializeSiteStructure: function(c) {
			var d = {};
			d.type = "Document";
			d.componentProperties = this._getSiteComponentProperties(c);
			d.children = this._serializeSiteNodes(c);
			d.themeData = this._getSiteThemeData(c);
			return d
		},
		_getSiteThemeData: function(d) {
			if (!d.W.Theme.hasDirtyObjects()) {
				return {}
			}
			var f = d.W.Theme.getDirtyDataObjectsMap();
			var e = this.serializeThemeData(f);
			return e ? e : {}
		},
		_getSiteComponentProperties: function(d) {
			var e = d.W.ComponentData.getDirtyDataObjectsMap();
			var f = this.serializeSiteProperties(e);
			return f ? f : {}
		},
		_serializeSiteNodes: function(f) {
			var e = this._getSiteStructureChildren(f).map(this._handleSingleSiteNode);
			var d = f.W.Data.getDataMap()["SITE_STRUCTURE"].get("pages");
			return this._sortNodesByPagesData(e, d)
		},
		_sortNodesByPagesData: function(d, c) {
			return d.sort(function(b, a) {
				if (b.type == "Page" && a.type == "Page") {
					return pages.indexOf(b.dataQuery) - pages.indexOf(a.dataQuery)
				}
				return (b.type == "Page") ? -1 : (a.type == "Page") ? 1 : 0
			})
		},
		_getSiteStructureChildren: function(b) {
			return b.$("SITE_STRUCTURE").getChildren()
		},
		_handleSingleSiteNode: function(b) {
			if (b.get("role") == "SitePages") {
				return b.getChildren().map(this._handleSitePage)
			} else {
				if (b.get("comp") === "mobile.core.components.Container") {
					return this._handleContainer(b)
				}
			}
			return []
		},
		_handleSitePage: function(d) {
			var c = this._getComponentInitialStructure(d, "Page", {
				components: this._handleContainerComponents(d)
			});
			return this._extendNodeStructureData(c, d)
		},
		_handleContainer: function(d) {
			var c = this._getComponentInitialStructure(d, "Container", {
				components: this._handleContainerComponents(d),
				componentType: "mobile.core.components.Container"
			});
			return this._extendNodeStructureData(c, d)
		},
		_handleContainerComponents: function(b) {
			return b.getChildren("[comp]").map(this._handleComponent)
		},
		_handleComponent: function(d) {
			var c = this._getComponentInitialStructure(d, "Component", {
				componentType: d.get("comp")
			});
			return this._extendNodeStructureData(c, d)
		},
		_extendNodeStructureData: function(d, c) {
			if (c.get("propertyQuery")) {
				d.propertyQuery = c.get("propertyQuery")
			}
			return d
		},
		_getComponentInitialStructure: function(g, e, h) {
			var f = Object.filter(g, function(a, b) {
				return b === "id" || b === "dataquery" || b === "styleId" || b === "skin"
			});
			f = Object.merge(f, h, {
				type: e
			});
			return f
		}
	}
});
W.Classes.newClass({
	name: "mobile.editor.managers.serverfacade.ServerApiUrls",
	Class: {
		_constants: {
			EDITOR_URL_PART: "/renderer/edit/{0}",
			PREVIEW_URL_PART: "/renderer/preview/{0}",
			CLONE_URL_PART: "/api/clone_save",
			SAVE_AS_URL_PART: "/api/clone_save",
			SAVE_AS_FACEBOOK: "/api/create_and_attach",
			SAVE_DOCUMENT_URL_PART: "/api/update",
			PUBLISH_DOCUMENT_URL_PART: "/api/publish/{0}",
			PUBLISH_TEMPLATE_URL_PART: "/api/save_as_template/{0}",
			SEND_EMAIL_URL_PART: "/email/{0}",
			SITE_EXISTS_URL_PART: "/api/exists/{0}",
			GET_DATA_URL_PART: "/api/get/{0}/data_node?dataNodeId={1}",
			SAVE_HTML_TEMP_URL_PART: "/api/html/save_temp",
			GET_STATIC_CONTENT_URL_PART: "/api/html/get?url={0}",
			META_SITE_ID_QUERY_PARAM_NAME: "metaSiteId",
			SESSION_ID_PARAM_NAME: "editorSessionId",
			DEBUG_PARAM_NAME: "mode",
			DATA_NODE_ID_PARAM_NAME: "dataNodeId"
		},
		initialize: function() {},
		getSitePreviewUrl: function(b) {
			return this._getUrl(this._constants.PREVIEW_URL_PART, [b])
		},
		getSiteEditorUrl: function(c) {
			var d = this._getUrlWithQueryParams(this._constants.EDITOR_URL_PART, [c]);
			if (W.Config.isInDebugMode()) {
				d = this._addQueryParamToUrl(d, this._constants.DEBUG_PARAM_NAME, W.Config.getDebugMode())
			}
			return d
		},
		getCloneUrl: function() {
			return this._getUrlWithQueryParams(this._constants.CLONE_URL_PART)
		},
		getSaveAsUrl: function() {
			var b = this._getUrl(this._constants.SAVE_AS_URL_PART);
			b = this._addSessionIdQueryParam(b);
			return b
		},
		getSaveAsFacebookUrl: function() {
			var b = W.Config.getServiceTopologyProperty("editorServerRootFB") + this._constants.SAVE_AS_FACEBOOK;
			b = this._addMetaSiteQueryParam(b);
			b = this._addSessionIdQueryParam(b);
			return b
		},
		getSaveDocumentUrl: function() {
			return this._getUrlWithQueryParams(this._constants.SAVE_DOCUMENT_URL_PART)
		},
		getPublishDocumentUrl: function(b) {
			return this._getUrlWithQueryParams(this._constants.PUBLISH_DOCUMENT_URL_PART, [b])
		},
		getPublishTemplateUrl: function(b) {
			return this._getUrlWithQueryParams(this._constants.PUBLISH_TEMPLATE_URL_PART, [b])
		},
		getSendEmailUrl: function(b) {
			return this._getUrlWithQueryParams(this._constants.SEND_EMAIL_URL_PART, [b])
		},
		getSiteExistsUrl: function(b) {
			return this._getUrlWithQueryParams(this._constants.SITE_EXISTS_URL_PART, [b])
		},
		getGetDataNode: function(c, d) {
			return this._getUrlWithQueryParams(this._constants.GET_DATA_URL_PART, [c, d])
		},
		getSaveHtmlTempUrl: function() {
			return this._getUrlWithQueryParams(this._constants.SAVE_HTML_TEMP_URL_PART)
		},
		getGetContentFromStaticUrlUrl: function(b) {
			return this._getUrl(this._constants.GET_STATIC_CONTENT_URL_PART, [b])
		},
		_getUrlWithQueryParams: function(d, f) {
			var e = this._getUrl(d, f, true);
			e = this._addMetaSiteQueryParam(e);
			e = this._addSessionIdQueryParam(e);
			if (!W.Utils.isValidUrl(e)) {
				LOG.reportError(wixErrors.SERVER_INVALID_SERVICE_URL, "ServerApiUrls", "_getUrl", e)
			}
			return e
		},
		_getUrl: function(i, h, j) {
			var g = this._getUrlBasePart() + (i || "");
			if (h && h.length > 0) {
				for (var f = 0;
				f < h.length;
				f++) {
					g = g.replace("{" + f + "}", h[f])
				}
			}
			if (g.contains("{")) {
				LOG.reportError(wixErrors.UNKNOWN_ERROR, "ServerApiUrls", "_getUrl", {
					actualError: "more place holders in url than values passed",
					urlSegment: i
				});
				return null
			}
			if (!j && !W.Utils.isValidUrl(g)) {
				LOG.reportError(wixErrors.SERVER_INVALID_SERVICE_URL, "ServerApiUrls", "_getUrl", g)
			}
			return g
		},
		_addMetaSiteQueryParam: function(d) {
			var c = W.Config.getEditorModelProperty("metaSiteId");
			if (!c) {
				return d
			}
			return this._addQueryParamToUrl(d, this._constants.META_SITE_ID_QUERY_PARAM_NAME, c)
		},
		_addSessionIdQueryParam: function(d) {
			var c = W.Config.getEditorModelProperty("editorSessionId");
			if (!c) {
				return d
			}
			return this._addQueryParamToUrl(d, this._constants.SESSION_ID_PARAM_NAME, c)
		},
		_getUrlBasePart: function() {
			var b;
			if (W.Config.isFacebookSite()) {
				b = W.Config.getServiceTopologyProperty("editorServerRootFB")
			} else {
				b = W.Config.getServiceTopologyProperty("editorServerRoot")
			}
			return this._cleanUpUrlEnding(b)
		},
		_cleanUpUrlEnding: function(b) {
			return b.replace(/[\/\\\\]$/, "")
		},
		_addQueryParamToUrl: function(e, h, g) {
			var f = e && e.indexOf("?") == -1 ? "?" : "&";
			e += f + h + "=" + g;
			return e
		}
	}
});
W.Classes.newClass({
	name: "mobile.editor.managers.serverfacade.ServerFacadeBase",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		initialize: function() {
			var f = W.Classes.get("mobile.core.managers.serverfacade.WixRESTClient");
			var d = W.Classes.get("mobile.editor.managers.serverfacade.ServerApiUrls");
			var e = W.Classes.get("mobile.editor.managers.serverfacade.SiteSerializer");
			this._restClient = new f();
			this._urlBuilder = new d();
			this._siteSerializer = new e();
			this._version
		},
		cloneDocument: function(i, p, o, k, m) {
			this._checkForCorruptedPagesInMainMenu();
			var j = this._urlBuilder.getCloneUrl();
			var n = this._wrapSuccessErrorCallbacks(k, m);
			var l = {
				sourceSiteId: p,
				targetName: o,
				documents: [this._siteSerializer.serializeSiteStructure(i)],
				dataNodes: this._siteSerializer.serializeSiteData(i),
				metaSiteData: this._getMetaSiteDto()
			};
			this._restClient.post(j, l, n)
		},
		saveAs: function(i, p, o, k, m) {
			var j = this._urlBuilder.getSaveAsUrl();
			var n = this._wrapSuccessErrorCallbacks(k, m);
			var l = {
				sourceSiteId: p,
				targetName: o,
				documents: [this._siteSerializer.serializeSiteStructure(i)],
				dataNodes: this._siteSerializer.serializeSiteData(i),
				metaSiteData: this._getMetaSiteDto()
			};
			this._restClient.post(j, l, n)
		},
		saveDocument: function(l, h, j, m) {
			this._checkForCorruptedPagesInMainMenu();
			var i = this._urlBuilder.getSaveDocumentUrl();
			var n = this._wrapSuccessErrorCallbacks(j, m);
			var k = this.getSaveDocumentParams(l, h);
			this._restClient.post(i, k, n)
		},
		getSaveDocumentParams: function(c, d) {
			return {
				id: c,
				documents: [this._siteSerializer.serializeSiteStructure(d)],
				dataNodes: this._siteSerializer.serializeSiteData(d),
				metaSiteData: this._getMetaSiteDto(),
				version: this._version
			}
		},
		saveDocumentAsFacebook: function(h, k, m) {
			var i = this._urlBuilder.getSaveAsFacebookUrl();
			var j = W.Managers.Preview.getPreviewManagers();
			j.Data.markAllDirty();
			j.Theme.markAllDirty();
			j.ComponentData.markAllDirty();
			var n = this._wrapSuccessErrorCallbacks(k, m);
			var l = {
				documents: [this._siteSerializer.serializeSiteStructure(h)],
				dataNodes: this._siteSerializer.serializeSiteData(h)
			}
		},
		publishDocument: function(k, i, l) {
			var h = this._urlBuilder.getPublishDocumentUrl(k);
			var g = this._wrapSuccessErrorCallbacks(i, l);
			var j = {};
			this._restClient.post(h, j, g)
		},
		publishTemplate: function(k, i, l) {
			var h = this._urlBuilder.getPublishTemplateUrl(k);
			var g = this._wrapSuccessErrorCallbacks(i, l);
			var j = {};
			this._restClient.post(h, j, g)
		},
		sendAddressToMail: function(k, i, l) {
			var h = this._urlBuilder.getSendEmailUrl(k);
			var g = this._wrapSuccessErrorCallbacks(i, l);
			var j = {};
			this._restClient.post(h, j, g)
		},
		getThemeDataJson: function(d, f, e) {
			throw new Error("getThemeDataJson is not working any more. please help by fixing it.")
		},
		saveHtmlAsTempStaticUrl: function(g, i, k) {
			var h = this._urlBuilder.getSaveHtmlTempUrl();
			var l = this._wrapSuccessErrorCallbacks(i, k);
			var j = {
				html: g
			};
			this._restClient.post(h, j, l)
		},
		getContentFromStaticUrl: function(h, i, l) {
			var k = this._urlBuilder.getGetContentFromStaticUrlUrl(h);
			var g = this._wrapSuccessErrorCallbacks(i, l);
			var j = {};
			this._restClient.get(k, j, g)
		},
		getPremiumFlag: function(b) {
			throw new Error("getPremiumFlag is not working any more. please help by fixing it.")
		},
		getPreviewUrl: function(b) {
			return this._urlBuilder.getSitePreviewUrl(b)
		},
		isReady: function() {
			return true
		},
		clone: function() {
			return this.parent()
		},
		_setVersion: function(b) {
			this._version = b
		},
		_wrapSuccessErrorCallbacks: function(d, c) {
			return {
				onSuccess: d,
				onError: c
			}
		},
		_wrapCompleteCallbacks: function(d, c) {
			return {
				onComplete: function(a) {
					if (a) {
						d(a)
					} else {
						c(a)
					}
				}
			}
		},
		_isValidItem: function(b) {
			return b !== undefined
		},
		_getMetaSiteDto: function() {
			var d = W.Data.getDataByQuery("#SITE_SETTINGS");
			var f = {};
			if (this._isValidItem(d.get("thumbnail"))) {
				f.thumbnail = d.get("thumbnail")
			}
			if (this._isValidItem(d.get("favicon"))) {
				f.favicon = d.get("favicon")
			}
			if (this._isValidItem(d.get("siteTitleSEO"))) {
				var e = d.get("siteTitleSEO").length === 0;
				e ? f.title = null : f.title = d.get("siteTitleSEO")
			}
			if (this._isValidItem(d.get("allowSEFindSite"))) {
				f.indexable = d.get("allowSEFindSite")
			}
			if (this._isValidItem(d.get("keywordsSEO"))) {
				f.metaTags = f.metaTags || [];
				f.metaTags.push({
					name: "keywords",
					value: d.get("keywordsSEO")
				})
			}
			if (this._isValidItem(d.get("siteDescriptionSEO"))) {
				f.metaTags = f.metaTags || [];
				f.metaTags.push({
					name: "description",
					value: d.get("siteDescriptionSEO")
				})
			}
			return f
		},
		_httpCompletionCallback: function(d, c) {
			if (d && d === this._restClient.CALLBACK_STATUS.SUCCESS) {
				if (c && c.payload && c.payload.version) {
					this._setVersion(c.payload.version)
				}
			}
		},
		_checkForCorruptedPagesInMainMenu: function() {
			var p = W.Preview.getPreviewManagers();
			var o = p.Data.getDataByQuery("#SITE_STRUCTURE");
			var i = o.get("pages");
			if (!p.Data.isDataAvailable("#MAIN_MENU")) {
				return
			}
			var l = p.Data.getDataByQuery("#MAIN_MENU");
			var m = l.getAllItems();
			for (var n = 0;
			n < m.length;
			n++) {
				var k = m[n].get("refId");
				if (!i.contains(k)) {
					l.deleteNavigationItem(k);
					LOG.reportError(wixErrors.MENU_CORRUPTION_UNKNOWN_PAGE, "ServerFacadeBase", "_checkForCorruptedPagesInMainMenu", k)
				}
			}
			for (n = 0;
			n < i.length;
			n++) {
				var j = i[n];
				if (!l.getItemByRefId(j)) {
					l.createAndAddNavigationItem(j, null, n);
					LOG.reportError(wixErrors.MENU_CORRUPTION_MISSING_PAGE, "ServerFacadeBase", "_checkForCorruptedPagesInMainMenu", j)
				}
			}
		}
	}
});
W.Classes.newClass({
	name: "mobile.editor.managers.serverfacade.ServerFacade",
	Class: {
		Extends: "mobile.editor.managers.serverfacade.ServerFacadeBase"
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.utils.InputValidators",
	Class: {
		Binds: [],
		charactersValidator: function(c) {
			var b = new RegExp("[" + Constants.Page.INVALID_CHARACTERS + "]");
			var a = c.match(b);
			if (a !== null) {
				return W.Resources.get("EDITOR_LANGUAGE", "INPUT_INVALID_CHARACTERS") + " (" + a.join() + ")"
			}
		},
		numKeywordValidator: function(b) {
			var a = b.split(/\W+/);
			if (a.length > Constants.Page.KEYWORD_SEO_MAX_WORDS) {
				return W.Resources.get("EDITOR_LANGUAGE", "PAGE_SETTINGS_TOO_MANY_KEYWORDS")
			}
		},
		pageNameCharactersValidator: function(c) {
			var b = new RegExp("[" + Constants.Page.INVALID_PAGE_NAME_CHARACTERS + "]");
			var a = c.match(b);
			if (a !== null) {
				return W.Resources.get("EDITOR_LANGUAGE", "INPUT_INVALID_CHARACTERS") + " (" + a.join() + ")"
			}
			b = new RegExp("[^\x00-\x7F]");
			a = c.match(b);
			if (a !== null) {
				return W.Resources.get("EDITOR_LANGUAGE", "INPUT_INVALID_CHARACTERS") + " (" + a.join() + ")"
			}
		},
		pageNameValidator: function(a) {
			if (a.length == 0) {
				return W.Resources.get("EDITOR_LANGUAGE", "PAGE_NAME_TOO_SHORT")
			}
			return this.pageNameCharactersValidator(a)
		}
	}
});
W.Classes.newClass({
	name: "mobile.editor.managers.UserMediaManager",
	imports: ["mobile.core.managers.serverfacade.WixRESTClient"],
	Class: {
		Extends: Events,
		initialize: function() {
			this._restClient = new this.imports.WixRESTClient()
		},
		_mediaList: [],
		_photoList: [],
		_flashUpdateMessage: null,
		_flashUpdateContent: null,
		_wixPhotoList: null,
		_wixIconList: null,
		_wixSocialIconList: null,
		_wixClipArtList: null,
		_wixBackgroundList: null,
		_wixBackgroundTextureList: null,
		_wixBackgroundPatternList: null,
		isReady: function() {
			return true
		},
		clone: function() {
			return new this.$class()
		},
		deleteMedia: function(d) {
			var e = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/delete?accept=javascript&format=jsonp";
			var f = new Request.JSONP({
				url: e + "&fileName=" + d + "&r=" + Math.random(),
				onComplete: this.updateMedia.bind(this)
			});
			f.send()
		},
		updateMedia: function(i) {
			if (i && typeOf(i) != "string") {
				i = null
			}
			var n = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=picture";
			var h = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=document";
			var m = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=site_icon";
			var k = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=swf";
			var j = {
				media: {
					URL: n,
					onComplete: this._setMedia.bind(this)
				},
				document: {
					URL: h,
					onComplete: this._setDocs.bind(this)
				},
				ugd: {
					URL: h,
					onComplete: this._setDocs.bind(this)
				},
				favicons: {
					URL: m,
					onComplete: this._setFavicons.bind(this)
				},
				site_icon: {
					URL: m,
					onComplete: this._setFavicons.bind(this)
				},
				swf: {
					URL: k,
					onComplete: this._setSWFs.bind(this)
				}
			};
			if (i) {
				this._doUpdateMedia(j[i])
			} else {
				for (var l in j) {
					this._doUpdateMedia(j[l])
				}
			}
		},
		_doUpdateMedia: function(c) {
			var d = new Request.JSONP({
				url: c.URL + "&r=" + Math.random(),
				onComplete: c.onComplete
			});
			d.send()
		},
		_setMedia: function(c, d) {
			this._photoList = [];
			this._setList(c, d, this._photoList)
		},
		_setDocs: function(c, d) {
			this._docsList = [];
			this._setList(c, d, this._docsList)
		},
		_setFavicons: function(c, d) {
			this._faviconsList = [];
			this._setList(c, d, this._faviconsList)
		},
		_setSWFs: function(c, d) {
			this._swfList = [];
			this._setList(c, d, this._swfList)
		},
		_setList: function(g, f, h) {
			if (f.errorCode !== 0) {
				LOG.reportError(wixErrors.MEDIA_ERR_GETTING_LIST, this.className, "_getDivComponents", "server: " + f.errorCode + "");
				return
			}
			this._mediaList = f.payload.mediaItems;
			this._mediaList.sort(function(a, b) {
				return (b.ts - a.ts)
			});
			for (var e = 0;
			e < this._mediaList.length;
			e++) {
				this._mediaList[e].type = "MediaItem";
				h.push(this._mediaList[e])
			}
			this.fireEvent("mediaUpdated", {
				mediaList: this._mediaList,
				dataList: h
			})
		},
		getMedia: function() {
			return this._photoList || []
		},
		convertToClientData: function(b) {
			if (b.type != "MediaItem") {
				return Object.clone(b)
			}
			switch (b.mediaType) {
			case "picture":
				return {
					type: "Image",
					title: b.title,
					uri: b.fileName,
					description: b.description,
					height: b.height,
					width: b.width
				};
			case "site_icon":
				return {
					type: "Image",
					title: b.title ? b.title : b.originalFileName,
					uri: b.fileName,
					description: b.description,
					height: b.height,
					width: b.width
				};
			case "document":
			case "ugd":
				return {
					type: "Document",
					title: b.title ? b.title : b.originalFileName,
					uri: b.fileName,
					description: b.description
				};
			case "swf":
				return {
					type: "FlashComponent",
					title: b.title,
					uri: b.fileName,
					icon_uri: b.iconUrl,
					description: b.description,
					height: b.height,
					width: b.width
				}
			}
		},
		_loadWixMedia: function(b) {
			if (this._wixPhotoList && this._wixBackgroundList && this._wixBackgroundPatternList && this._wixClipArtList && this._wixSocialIconList && this._wixBackgroundTextureList) {
				b()
			} else {
				this._restClient.jsonp(W.Config.getServiceTopologyProperty("scriptsRoot") + "/resources/mobile/media/PublicMedia.js", null, {
					onComplete: function(a) {
						this._wixPhotoList = a.wixPhotoList;
						this._wixSocialIconList = a.wixSocialIconList;
						this._wixBackgroundList = a.wixBackgroundList;
						this._wixBackgroundTextureList = a.wixBackgroundTextureList;
						this._wixBackgroundPatternList = a.wixBackgroundPatternList;
						this._wixClipArtList = a.wixClipArtList;
						b(true)
					}.bind(this),
					onRequest: function(a) {
						this._publicMediaMooCallback = a
					}.bind(this)
				})
			}
		},
		getWixMedia: function(d, c) {
			this._loadWixMedia(function(a) {
				var b = [];
				switch (d) {
				case "photos":
					b = this._wixPhotoList;
					break;
				case "social_icons":
					b = this._wixSocialIconList;
					break;
				case "backgrounds":
					b = this._wixBackgroundList;
					break;
				case "backgroundTextures":
					b = this._wixBackgroundTextureList;
					break;
				case "backgroundPatterns":
					b = this._wixBackgroundPatternList;
					break;
				case "clipart":
					b = this._wixClipArtList;
					break;
				case "user_photos":
					b = this.getMedia();
					break;
				case "user_docs":
					b = this._docsList;
					break;
				case "user_favicons":
					b = this._faviconsList;
					break;
				case "user_swf":
					b = this._swfList;
					break
				}
				c(b)
			}.bind(this))
		},
		flashUpdate: function(c, d) {
			this._flashUpdateMessage = c;
			this._flashUpdateContent = d;
			W.Utils.debugTrace("UserMediaManager.flashUpdate " + c + " " + d);
			setTimeout(this.parseUpdate.bind(this), 1)
		},
		parseUpdate: function() {
			if (this._flashUpdateMessage == "uploadComplete") {
				setTimeout(function() {
					this.updateMedia(this._flashUpdateContent || undefined)
				}.bind(this), 500);
				this.fireEvent("UploadComplete")
			}
			if (this._flashUpdateMessage == "Error") {
				this.fireEvent("UploadError", this._flashUpdateContent)
			}
			if (this._flashUpdateMessage == "progressUpdate") {
				this.fireEvent("UploadProgressUpdate", {
					message: JSON.decode("[" + this._flashUpdateContent + "]")
				})
			}
			if (this._flashUpdateMessage == "validationError") {
				this.fireEvent("validationError", {
					message: this._flashUpdateContent
				})
			}
		}
	}
});
W.Classes.newClass({
	name: "mobile.editor.managers.PreviewManager",
	Class: {
		Extends: Events,
		initialize: function() {
			this._siteReadyTimeout = 60000;
			this._previewReady = false;
			this._preview = this._buildIFrame();
			this._targetPageId = null
		},
		isSiteReady: function() {
			return this._previewReady
		},
		loadSite: function(i, j, k, h) {
			this._previewReady = false;
			this._siteReadyCallback = j;
			this._pageChangedCallback = k;
			this._siteErrorCallback = h;
			var g;
			if (window.location) {
				g = W.ServerFacade.getPreviewUrl(i)
			}
			if (window.location.search) {
				g += W.Viewer._getUrlSearchParameters()
			}
			if (window.location.href.indexOf("/src/OfflineEditor.html") > 0) {
				g = "OfflinePreview.html"
			}
			if (g.indexOf("?") > -1) {
				g += "&"
			} else {
				g += "?"
			}
			g += "isEdited=true";
			if (W.Utils.getQueryParam("stack") === "true") {
				g += "&stack=true"
			}
			var l = W.Utils.getQueryParam("scriptsRoot");
			if (l) {
				g += "&scriptsRoot=" + l
			}
			this._preview.set("src", g);
			this._preview.uncollapse();
			window.setPreloaderState("siteLoading");
			W.Utils.callLater(this._previewLoadedHandler.bind(this), null, null, 50)
		},
		getPreviewManagers: function() {
			if (!this._previewReady) {
				return null
			}
			return this._preview.contentWindow.W.Managers.getManagers()
		},
		getPreviewSite: function() {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "getPreviewSite", "");
				return
			}
			return this._preview.contentWindow
		},
		isPreviewDataChanged: function() {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "isPreviewDataChanged", "");
				return
			}
			var b = this._preview.contentWindow.W.Data.isDataChange() || this._preview.contentWindow.W.Theme.isDataChange() || this._preview.contentWindow.W.ComponentData.isDataChange();
			return b
		},
		flagPreviewDataChange: function() {
			if (!this._previewReady) {
				throw new Error("Preview error: Preview not ready")
			}
			return this._preview.contentWindow.W.Data.flagDataChange()
		},
		clearPreviewDataChange: function() {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "clearPreviewDataChange", "");
				return
			}
			var b = this._preview.contentWindow.W;
			b.Data.clearDataChange();
			b.ComponentData.clearDataChange();
			b.Theme.clearDataChange();
			b.Data.clearDirtyObjectsMap();
			b.ComponentData.clearDirtyObjectsMap();
			b.Theme.clearDirtyObjectsMap()
		},
		scrollToElement: function(b) {
			this.getIFrame().contentWindow.W.Viewer.scrollToElement(b)
		},
		getPreviewThemeProperty: function(b) {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "getPreviewThemeProperty", "");
				return
			}
			return this._preview.contentWindow.W.Theme.getProperty(b)
		},
		setPreviewThemeProperty: function(c, d) {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "setPreviewThemeProperty", "");
				return
			}
			return this._preview.contentWindow.W.Theme.setProperty(c, d)
		},
		getPreviewThemeRawProperty: function(b) {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "getPreviewThemeRawProperty", "");
				return
			}
			return this._preview.contentWindow.W.Theme.getRawProperty(b)
		},
		clearPreviewThemeOverrides: function() {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, this.className, "clearThemePropertyOverrides", "")
			}
			this._preview.contentWindow.W.Theme.clearOverrides()
		},
		getPreviewThemeOverrides: function() {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, this.className, "getPreviewThemeOverrides", "")
			}
			return this._preview.contentWindow.W.Theme.getOverrides()
		},
		addEventForPreviewThemePropertyChange: function(b) {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "addEventForPreviewThemePropertyChange", "");
				return
			}
			return this._preview.contentWindow.W.Theme.addEvent("propertyChange", b)
		},
		goToPage: function(b) {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "goToPage", "");
				return
			}
			this._targetPageId = b;
			this._preview.contentWindow.W.Viewer.goToPage(b)
		},
		getPreviewCurrentPageId: function() {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "getPreviewCurrentPageId", "")();
				return
			}
			return this._preview.contentWindow.W.Viewer.getCurrentPageId()
		},
		getPreviewCurrentPageComponents: function() {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "getPreviewCurrentPageComponents", "")();
				return
			}
			var b = this.getPreviewCurrentPageId();
			return this._getDivComponents(b)
		},
		getPreviewHeaderComponents: function() {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "getPreviewHeaderComponents", "")();
				return
			}
			return this._getDivComponents("SITE_HEADER")
		},
		_getDivComponents: function(d) {
			if (!this._previewReady) {
				LOG.reportError(wixErrors.PREVIEW_NOT_READY, "PreviewManager", "_getDivComponents", "")();
				return []
			}
			var c = this._preview.contentWindow.$(d);
			if (!c) {
				LOG.reportError(wixErrors.PREVIEW_INVALID_ID, "PreviewManager", "_getDivComponents", "div id" + d + "")();
				return []
			}
			return c.getChildren("[comp]").map(function(a) {
				if (a.getLogic && a.getLogic()) {
					return a.getLogic()
				}
				LOG.reportError(wixErrors.PREVIEW_COMP_NOT_READY, "PreviewManager", "_getDivComponents", a.get("id") + "")();
				return {
					invalidComponent: a.get("id")
				}
			})
		},
		getHtmlElement: function(b) {
			return this._preview.contentWindow.$(b)
		},
		getIFrame: function() {
			return this._preview
		},
		clone: function() {
			return new this.$class()
		},
		isReady: function() {
			return true
		},
		_onPreviewNavigation: function() {
			if (this._targetPageId !== this._preview.contentWindow.W.Viewer.getCurrentPageId() && this._pageChangedCallback) {
				this._targetPageId = this._preview.contentWindow.W.Viewer.getCurrentPageId();
				this._pageChangedCallback()
			}
		},
		_buildIFrame: function() {
			this._loadAttmpet = 0;
			var b = new IFrame({
				id: "live-preview-iframe",
				styles: {
					width: "100%",
					height: "100%"
				}
			});
			b.addClass("hidden");
			b.setProperty("frameborder", "0");
			return b
		},
		_previewLoadedHandler: function() {
			this._loadTime = new Date().getTime();
			var d = this._preview.contentWindow;
			var e = true;
			try {
				e = (d && d.W)
			} catch (f) {}
			if (e) {
				setTimeout(this._isSiteReadyDelay.bind(this), 10)
			} else {
				if (this._loadAttmpet === 3) {
					this._siteErrorCallback && this._siteErrorCallback("Site preview invalid: W is undefined")
				}
				this._loadAttmpet++;
				this._previewLoadTimeoutId = W.Utils.callLater(this._previewLoadedHandler.bind(this), null, null, 300)
			}
		},
		showPreviewTip: function(i, j) {
			var h;
			if (!this._tipDiv) {
				h = this._tipDiv = new Element("div");
				h.addClass("previewTipDiv");
				this._tipDivFX = new Fx.Tween(h, {
					duration: "100ms",
					link: "cancel",
					property: "height"
				});
				this._tipDivFX.onComplete = function() {
					if (this.closing) {
						h.setStyle("display", "none")
					}
				}.bind(this);
				this._titleSpan = new Element("span");
				this._titleSpan.addClass("previewTipDivTitle");
				this._contentSpan = new Element("span");
				this._contentSpan.addClass("previewTipDivContent");
				this._titleSpan.insertInto(h);
				this._contentSpan.insertInto(h);
				var f = $("previewContainer");
				if (f) {
					h.insertInto(f)
				}
			} else {
				h = this._tipDiv;
				this._tipDivFX.cancel();
				h.uncollapse()
			}
			var g = this._tipDivFX;
			this.closing = false;
			this._tipDivFX.start(40, 60);
			if (this.tipDivTimeOut) {
				clearTimeout(this.tipDivTimeOut)
			}
			this.tipDivTimeOut = setTimeout(function() {
				this.closing = true;
				g.start(40, 0)
			}.bind(this), 3500);
			h = this._tipDiv;
			this._titleSpan.set("text", i);
			this._contentSpan.set("text", j)
		},
		getPages: function(c) {
			var d = this;
			this.getPreviewManagers().Data.getDataByQuery("#SITE_STRUCTURE", function(a) {
				d.getPreviewManagers().Data.getDataByQueryList(a.get("pages"), function(b) {
					c(b)
				})
			})
		},
		_isSiteReadyDelay: function() {
			var c;
			try {
				c = this._preview && this._preview.contentWindow && this._preview.contentWindow.W && this._preview.contentWindow.W.Viewer
			} catch (d) {}
			if (c && c.isSiteReady()) {
				c.setLinkTipFunc(W.LinkTypes.showLinkTip);
				this._previewReady = true;
				if (this._siteReadyCallback && this._pageChangedCallback) {
					this._siteReadyCallback();
					c.addEvent("pageTransitionEnded", this._onPreviewNavigation.bind(this))
				}
				window.setPreloaderState("ready");
				W.Commands.executeCommand("PreviewIsReady")
			} else {
				if (new Date().getTime() - this._loadTime > this._siteReadyTimeout) {
					this._siteErrorCallback("Site preview took too long");
					LOG.reportError(wixErrors.PREVIEW_MANAGER_PREVIEW_TOO_LONG)
				}
				setTimeout(this._isSiteReadyDelay.bind(this), 10)
			}
		}
	}
});
Constants.EditorEvents = {
	SITE_LOADED: "site_loaded!",
	SITE_PAGE_CHANGED: "site_page_changed!"
};
Constants.EditorManagerBase = {
	MILLISECONDS_TO_POP_UP_AUTO_FIRST_SAVE: 300000
};
W.Classes.newClass({
	name: "mobile.editor.managers.EditorManagerBase",
	Class: {
		Extends: Events,
		Static: {
			_DPM_DELIMITER: "*"
		},
		initialize: function() {
			this._DATA_PANEL_MAP = {
				"Page*mobile.core.components.PageTitle": {
					logic: "mobile.editor.components.editpanels.PageTitleDataPanel",
					skin: "mobile.editor.skins.editpanels.PageTitleDataPanelSkin"
				},
				"Header*mobile.core.components.Header": {
					logic: "mobile.editor.components.editpanels.HeaderDataPanel",
					skin: "mobile.editor.skins.editpanels.HeaderDataPanelSkin"
				},
				"Document*mobile.core.components.SiteMenu": {
					logic: "mobile.editor.components.editpanels.SiteMenuDataPanel",
					skin: "mobile.editor.skins.editpanels.SiteMenuDataPanelSkin"
				},
				"RichText*mobile.core.components.RichText": {
					logic: "mobile.editor.components.editpanels.ParagraphDataPanel",
					skin: "mobile.editor.skins.editpanels.ParagraphDataPanelSkin"
				},
				"RichTextImage*mobile.core.components.RichTextImage": {
					logic: "mobile.editor.components.editpanels.RichTextImageDataPanel",
					skin: "mobile.editor.skins.editpanels.RichTextImageDataPanelSkin"
				},
				"LinkList*mobile.core.components.ContactList": {
					logic: "mobile.editor.components.editpanels.LinkListDataPanel",
					skin: "mobile.editor.skins.editpanels.LinkListDataPanelSkin"
				},
				"LinkList*mobile.core.components.ExternalLinksList": {
					logic: "mobile.editor.components.editpanels.LinkListDataPanel",
					skin: "mobile.editor.skins.editpanels.LinkListDataPanelSkin"
				},
				"LinkList*mobile.core.components.NetworkList": {
					logic: "mobile.editor.components.editpanels.LinkListDataPanel",
					skin: "mobile.editor.skins.editpanels.LinkListDataPanelSkin"
				},
				"TwitterFollow*mobile.core.components.FacebookComment": {
					logic: "mobile.editor.components.editpanels.FacebookCommentDataPanel",
					skin: "mobile.editor.skins.editpanels.FacebookCommentDataPanelSkin"
				},
				"TwitterFollow*mobile.core.components.FacebookLike": {
					logic: "mobile.editor.components.editpanels.FacebookLikeDataPanel",
					skin: "mobile.editor.skins.editpanels.FacebookLikeDataPanelSkin"
				},
				"TwitterFollow*mobile.core.components.GooglePlusOne": {
					logic: "mobile.editor.components.editpanels.GooglePlusOneDataPanel",
					skin: "mobile.editor.skins.editpanels.GooglePlusOneDataPanelSkin"
				},
				"TwitterTweet*mobile.core.components.TwitterTweet": {
					logic: "mobile.editor.components.editpanels.TwitterTweetDataPanel",
					skin: "mobile.editor.skins.editpanels.TwitterTweetDataPanelSkin"
				},
				"TwitterFollow*mobile.core.components.TwitterFollow": {
					logic: "mobile.editor.components.editpanels.TwitterFollowDataPanel",
					skin: "mobile.editor.skins.editpanels.TwitterFollowDataPanelSkin"
				},
				"ServiceList*mobile.core.components.ServiceList": {
					logic: "mobile.editor.components.editpanels.ServiceListDataPanel",
					skin: "mobile.editor.skins.editpanels.ServiceListDataPanelSkin"
				},
				"ImageList*mobile.core.components.PhotoGalleryGrid": {
					logic: "mobile.editor.components.editpanels.ImageListDataPanel",
					skin: "mobile.editor.skins.editpanels.ImageListDataPanelSkin"
				},
				"Image*mobile.core.components.Image": {
					logic: "mobile.editor.components.editpanels.ImageDataPanel",
					skin: "mobile.editor.skins.editpanels.ImageDataPanelSkin"
				},
				"Image*mobile.core.components.Photo": {
					logic: "mobile.editor.components.editpanels.PhotoDataPanel",
					skin: "mobile.editor.skins.editpanels.PhotoDataPanelSkin"
				}
			};
			this._THEME_PANEL_MAP = {
				"mobile.core.components.PageTitle": ["mobile.core.skins.PageTitleSkin"],
				"mobile.core.components.Header": ["mobile.core.skins.HeaderSkin"],
				"mobile.core.components.SiteMenu": ["mobile.core.skins.GlobalMenuSkin"],
				"mobile.core.components.RichText": ["mobile.core.skins.RichTextSkin"],
				"mobile.core.components.RichTextImage": ["mobile.core.skins.RichTextImageSkin"],
				"mobile.core.components.ContactList": ["mobile.core.skins.ContactListSkin", "mobile.core.skins.ContactItemSkin"],
				"mobile.core.components.ExternalLinksList": ["mobile.core.skins.GlobalMenuSkin", "mobile.core.skins.MenuButtonSkin"],
				"mobile.core.components.NetworkList": ["mobile.core.skins.NetworkListSkin", "mobile.core.skins.NetworkItemSkin"],
				"mobile.core.components.ServiceList": ["mobile.core.skins.ServiceListSkin", "mobile.core.skins.ServiceItemSkin"],
				"mobile.core.components.PhotoGalleryGrid": ["mobile.core.skins.PhotoGalleryGridDefaultSkin", "mobile.core.skins.PhotoGalleryFullScreenDefaultSkin"],
				"mobile.core.components.HomeButton": ["mobile.core.skins.HomeButtonSkin"],
				"mobile.core.components.Image": ["mobile.core.skins.ImageSkin"],
				"mobile.core.components.Button": ["mobile.core.skins.ButtonSkin"]
			};
			this.SAVE_DELAY = 0;
			this._setLanguage();
			var b = function() {
					if (!W.Viewer.isSiteReady()) {
						W.Utils.callLater(b)
					} else {
						this._viewer = W.Viewer;
						this._mediaDialog = null;
						this._siteId = null;
						this._siteIsTemplate = null;
						this._acociatedFlashSiteId = null;
						if (window.tinyMCE) {
							this._configTinyMCE()
						}
						this.notifyFlowEvent = this.notifyFlowEvent.bind(this);
						this.closeColorPicker = this.closeColorPicker.bind(this);
						this._setEditorWiring();
						var a = function() {
								if (W.Viewer.isSiteReady()) {
									if (!W.Viewer._originalOnHashChange) {
										W.Viewer._originalOnHashChange = W.Viewer._onHashChange
									}
									W.Utils.hash.removeEvent("change", W.Viewer._onHashChange);
									W.Viewer._onHashChange = this._onHashChange.bind(this);
									W.Utils.hash.addEvent("change", W.Viewer._onHashChange);
									this._docId = window.siteId;
									if (this._docId) {
										this._openEditorInEditMode()
									} else {
										this._openEditorInNewMode()
									}
								} else {
									W.Utils.callLater(a)
								}
							}.bind(this);
						a();
						this._isEditorReady = true
					}
				}.bind(this);
			if (debugMode != "unit_test") {
				b()
			}
			this._isReady = true;
			this._keysEnabled = true;
			this._registerCommands();
			W.Resources.setCurrentBundle("EDITOR_LANGUAGE")
		},
		_setLanguage: function() {
			var e = ["en", "de", "es", "fr", "it", "pl", "pt", "ru"];
			var h = "en";
			var f = h;
			if (W.Utils.getQueryParam("lang")) {
				f = W.Utils.getQueryParam("lang").toLowerCase()
			} else {
				if (window.editorModel && window.editorModel.languageCode) {
					f = String(window.editorModel.languageCode).toLowerCase()
				}
			}
			if (window.editorModel) {
				var g = window.editorModel.runningExperiments;
				if (e.contains(f) && (g && (g.MultiLang == "New" || g["Lang_" + f] == "New"))) {
					h = f
				}
			}
			window.wixEditorLangauge = h
		},
		setKeysEnabled: function(b) {
			this._keysEnabled = b
		},
		_openEditorInNewMode: function() {
			LOG.reportEvent(wixEvents.EDITOR_FLOW_OPEN_NEW);
			this._siteEditMode = false;
			this._gotoPage("template_page")
		},
		_openEditorInEditMode: function() {
			this._siteEditMode = true;
			this._gotoPage("edit_page");
			this.loadSite(this._docId, W.Config.siteNeverSavedBefore())
		},
		_configTinyMCE: function() {
			var d = "";
			var c = "bold,italic,underline,strikethrough, separator,justifyleft,justifycenter,justifyright,justifyfull, separator, bullist, numlist, separator, link, unlink, separator,undo, redo";
			if (!window.Browser.ie) {
				c = c + ", separator, charmap"
			}
			tinyMCE.init({
				mode: "specific_textareas",
				editor_selector: "richTextEditor",
				theme: "advanced",
				theme_advanced_buttons1: c,
				theme_advanced_buttons2: "",
				theme_advanced_buttons3: "",
				width: "100%",
				height: "250px",
				plugins: "paste",
				paste_text_sticky: true,
				setup: function(a) {
					a.onInit.add(function(b) {
						b.pasteAsPlainText = true
					})
				}
			})
		},
		notifyFlowEvent: function(e, h, g) {
			var f = true;
			switch (h) {
			case "previewSiteLoaded":
				this._siteLoaded(g);
				break;
			case "sitePageChange":
				this._sitePageChangeHandler(e, g, true);
				break;
			default:
				f = false
			}
			f = this._notifyFlowEventExtra(e, h, g) || f;
			if (!f) {
				LOG.reportError(wixErrors.EDITOR_MANAGER_INVALID_FLOW_EVENT, "EditorManager", "notifyFlowEvent", h)
			}
		},
		_notifyFlowEventExtra: function(e, d, f) {
			return false
		},
		_sitePageChangeHandler: function(d, e, f) {
			if (d !== W.Preview) {
				W.Preview.goToPage(e)
			}
			this.fireEvent(Constants.EditorEvents.SITE_PAGE_CHANGED, e);
			this._sitePageChangeHandlerExtra(e, f)
		},
		_sitePageChangeHandlerExtra: function(d, c) {},
		clone: function() {
			return new this.$class()
		},
		isReady: function() {
			return this._isReady
		},
		getSiteStructure: function() {
			return this._siteStructure
		},
		getPageCount: function() {
			return this._siteStructure.get("pages").length
		},
		_setEditorWiring: function() {},
		_siteLoaded: function(b) {
			LOG.reportEditorLoadingEvent("SITE LOADED", 140);
			this.fireEvent(Constants.EditorEvents.SITE_LOADED, b);
			this._siteStructure = b;
			this._setMetaSiteData();
			this._siteLoadedExtra(b)
		},
		_setMetaSiteData: function() {
			if (window.editorModel && window.editorModel.metaSiteData) {
				var h = window.editorModel.metaSiteData;
				var e = {
					type: "SiteSettings",
					siteName: h.siteName,
					siteTitleSEO: h.title,
					thumbnail: h.thumbnail,
					favicon: h.favicon,
					allowSEFindSite: h.indexable
				};
				if (h.metaTags) {
					for (var g = 0;
					g < h.metaTags.length;
					g++) {
						var f = h.metaTags[g];
						if (f.name == "keywords") {
							e.keywordsSEO = f.value
						} else {
							if (f.name == "description") {
								e.siteDescriptionSEO = f.value
							}
						}
					}
				}
				W.Data.addDataItem("SITE_SETTINGS", e)
			} else {
				W.Data.addDataItem("SITE_SETTINGS", {
					type: "SiteSettings"
				})
			}
		},
		_siteLoadedExtra: function() {},
		_saveCurrentDocument: function(d) {
			if (this._siteId && !this._siteIsTemplate && W.Preview.isSiteReady()) {
				var f = function() {
						if (W.Preview.isPreviewDataChanged()) {
							this.refreshMyAccount();
							W.ServerFacade.saveDocument(this._siteId, W.Preview.getPreviewSite(), function() {
								this._lastSaveTime = new Date().getTime()
							}.bind(this), function(a) {
								W.Utils.errorPopup(W.Resources.get("EDITOR_LANGUAGE", "ERROR_SAVE_TITLE"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_SAVE_DOCUMENT"), a)
							});
							W.Preview.clearPreviewDataChange()
						}
					}.bind(this);
				if (d) {
					f()
				} else {
					var e = new Date().getTime() - (this._lastSaveTime || 0);
					if (e > this.SAVE_DELAY) {
						f()
					}
				}
			} else {
				LOG.reportError(wixErrors.EDITOR_MANAGER_SAVE_SITE, "mobile.editor.Managers.EditorManager", "_saveCurrentDocument")
			}
		},
		_gotoPage: function(b) {},
		_onHashChange: function(b) {},
		_openEditHeaderPanel: function() {},
		_openEditDesignPanel: function() {},
		disableAutoSave: function() {
			this._disableAutoSave = true
		},
		_openEditPanel: function(b) {},
		loadSite: function(g, e, f, h) {
			if (e) {
				setTimeout(function() {
					if (!this._disableAutoSave) {
						W.Commands.executeCommand("WEditorCommands.Save")
					}
				}.bind(this), Constants.EditorManagerBase.MILLISECONDS_TO_POP_UP_AUTO_FIRST_SAVE)
			}
			this._siteId = g;
			this._siteIsTemplate = e;
			if (e) {
				this._templateId = g
			}
			LOG.reportEditorLoadingEvent("START LOAD SITE", 150);
			W.Preview.loadSite(g, function() {
				W.Preview.getPreviewManagers().Data.getDataByQueryList(this._getNecessarySiteLoadedData(), function(a) {
					W.Preview.clearPreviewDataChange();
					this._loadSiteOnDataExtra(g, e, a);
					this._createSiteMenuDataIfNeeded();
					this.notifyFlowEvent(W.Preview, "previewSiteLoaded", a["#SITE_STRUCTURE"]);
					W.Commands.executeCommand("EditorCommands.SiteLoaded")
				}.bind(this))
			}.bind(this), function() {
				this.notifyFlowEvent(W.Preview, "sitePageChange", W.Preview.getPreviewCurrentPageId())
			}.bind(this), this._onSiteLoadError)
		},
		_createSiteMenuDataIfNeeded: function() {
			var g = W.Preview.getPreviewManagers();
			var i = g.Data.isDataAvailable("#MAIN_MENU");
			if (!i) {
				var l = "#SITE_PAGES";
				var k = g.Viewer.getSiteNode();
				if (!k) {
					return W.Utils.callLater(this._createSiteMenuDataIfNeeded, [l], this, 10)
				}
				var h = k.getElements("[comp=mobile.core.components.Page]");
				if (h && h.length > 0) {
					var j = g.Data.addDataItem("MAIN_MENU", {
						items: [],
						type: "Menu"
					});
					h.each(function(b) {
						var a = b.get("dataQuery");
						j.createAndAddNavigationItem(a)
					}.bind(this))
				}
			}
		},
		_getNecessarySiteLoadedData: function() {
			return ["#SITE_STRUCTURE", "#SITE_HEADER"]
		},
		_loadSiteOnDataExtra: function(f, d, e) {},
		_updateDataPanel: function() {},
		_onSiteLoadError: function() {},
		deletePage: function(d) {
			var c = W.Resources;
			if (this.getSiteStructure().get("pages").length == 1) {
				W.EditorDialogs.openPromptDialog(c.get("EDITOR_LANGUAGE", "DELETE_PAGE_LASTPAGE_DIALOG_TITLE"), c.get("EDITOR_LANGUAGE", "DELETE_PAGE_LASTPAGE_DIALOG_TEXT"), undefined, W.EditorDialogs.DialogButtonSet.OK, function(a) {
					return
				});
				return
			}
			W.EditorDialogs.openPromptDialog(c.get("EDITOR_LANGUAGE", "DELETE_PAGE_DIALOG_TITLE"), c.get("EDITOR_LANGUAGE", "DELETE_PAGE_DIALOG_TEXT") + ' "' + d.get("title") + '"?', undefined, W.EditorDialogs.DialogButtonSet.DELETE_CANCEL, function(h) {
				if (h.result == "DELETE") {
					LOG.reportEvent(wixEvents.REMOVE_PAGE);
					var j = W.Preview.getPreviewManagers().Data;
					var i = W.Preview.getPreviewManagers().Viewer.getSiteNode();
					var b = i.getElement("#SITE_PAGES").getElement("#" + d.get("id"));
					b.getLogic().dispose();
					W.Preview.getPreviewManagers().Data.flagDataChange();
					var a = j.getDataByQuery("#MAIN_MENU");
					a.deleteNavigationItem("#" + d.get("id"));
					W.Preview.getPreviewManagers().Viewer.indexPages("#SITE_PAGES");
					W.Preview.getPreviewManagers().Viewer.updatePagesData();
					W.Preview.getPreviewManagers().Data.getDataByQuery("#SITE_STRUCTURE", function(e) {
						var f = e.get("pages");
						if (f.length > 0) {
							W.Commands.executeCommand("EditorCommands.gotoSitePage", f[0].substr(1))
						}
					})
				}
			}.bind(this))
		},
		deleteMedia: function(d) {
			var c = W.Resources;
			W.EditorDialogs.openPromptDialog(c.get("EDITOR_LANGUAGE", "DELETE_MEDIA_TITLE"), c.get("EDITOR_LANGUAGE", "DELETE_MEDIA_TEXT"), undefined, W.EditorDialogs.DialogButtonSet.YES_NO, function(a) {
				if (a.result == "YES") {
					W.UserMedia.deleteMedia(d)
				}
			}.bind(this), false)
		},
		_getSitePagesContainer: function() {
			return W.Preview.getPreviewManagers().Viewer.getSiteNode().getElement("#SITE_PAGES")
		},
		_addPreviewDataItem: function(v, w, r) {
			for (var p in r) {
				if (!r[p].isList) {
					var z = v + "_" + p;
					var s = r[p];
					var u = this._addPreviewDataItem(z, s.data, s.dataRefs);
					w[p] = u
				} else {
					var t = r[p].items;
					var q = [];
					for (var x = 0;
					x < t.length; ++x) {
						var A = "i" + x;
						var y = t[x].data;
						var j = t[x].dataRefs;
						var B = this._addPreviewDataItem(A, y, j);
						q.push(B)
					}
					w[p] = q
				}
			}
			return this._createPreviewPresetData(w, v)
		},
		_createPreviewPresetData: function(c, d) {
			c = Object.clone(c);
			return "#" + W.Preview.getPreviewManagers().Data.addDataItemWithUniqueId(d, c).id
		},
		_onAddPage: function(l) {
			LOG.reportEvent(wixEvents.ADD_PAGE, {
				label: l.name
			});
			var t = W.Preview.getPreviewManagers().Viewer.getNewUniquePageId(l.name);
			this._createPageDataObj(t, l.name, l.menuButtonIcon);
			for (var r = 0;
			r < l.componentList.length;
			r++) {
				var p = l.componentList[r];
				var q = this._addPreviewDataItem(l.name, p.data, p.dataRefs);
				p.uID = q;
				var o = l.componentList[r].comp.substr(l.componentList[r].comp.lastIndexOf("."));
				p.htmlId = W.Preview.getPreviewManagers().Utils.getUniqueId(t + "_" + o)
			}
			var i = this._getNewPageNode(t, l.componentList);
			var n = this._getSitePagesContainer();
			i.insertInto(n);
			var m = i.getElements("[comp]");
			m.push(i);
			var s = new Async.Bulk(m, null, {
				completeEvent: "wixified",
				completeCallback: function() {
					i.getLogic().setAsWixified();
					var b = W.Preview.getPreviewManagers();
					b.Data.flagDataChange();
					var a = b.Viewer;
					a.indexPages(n);
					a.updatePagesData();
					a.goToPage(t)
				}
			});
			this._wixifyComponents(m)
		},
		_onAddComponent: function(b) {},
		_wixifyComponents: function(b) {
			W.Utils.callLater(function() {
				b.wixify()
			})
		},
		_createPageDataObj: function(h, g, e) {
			var f = {
				type: "Page",
				title: g,
				icon: e,
				hideTitle: true,
				metaData: {
					isPreset: true
				}
			};
			W.Preview.getPreviewManagers().Data.addDataItem(h, f);
			return f
		},
		_getNewPageNode: function(d, c) {},
		_addComponentsNodes: function(g, i) {
			var k = new Elements();
			for (var l = 0;
			l < i.length;
			l++) {
				var h = i[l];
				var j = W.Preview.getPreviewManagers().Viewer.createElement("div", {
					dataQuery: h.uID,
					comp: h.comp,
					skin: h.skin,
					id: h.htmlId
				});
				j.inject(g);
				k.push(j)
			}
			return k
		},
		getDialogLayer: function() {
			return $("dialogLayer")
		},
		_createFlash: function() {
			var f = {};
			var g = {};
			g.quality = "high";
			g.bgcolor = "#ffffff";
			g.allowscriptaccess = "always";
			g.allowfullscreen = "true";
			g.wMode = "transparent";
			g.scale = "noScale";
			var e = {};
			e.id = "refresher";
			e.name = "refresher";
			e.align = "middle";
			var h = W.Utils.getUniqueId("FlashCont");
			swfobject.embedSWF(W.Config.getServiceTopologyProperty("scriptsRoot") + "/flash/GalleryRefreshNotifier.swf", "flashUpdater", 5, 5, "10.0.0", "playerProductInstall.swf", f, g, e);
			this._flashObj = $(e.id)
		},
		refreshMyAccount: function() {
			if (this._flashObj && this._flashObj.onGalleryRefresh) {
				this._flashObj.onGalleryRefresh()
			}
		},
		addDataPanel: function(d, f, e) {
			this._DATA_PANEL_MAP[d + this._DPM_DELIMITER + f] = e;
			W.Components.getOverrideComponentName(f, function(a) {
				this._DATA_PANEL_MAP[d + this._DPM_DELIMITER + a] = e
			}.bind(this))
		},
		getDataPanel: function(d, c) {
			return this._DATA_PANEL_MAP[d + this._DPM_DELIMITER + c]
		},
		getThemePanel: function(b) {
			if (!this._THEME_PANEL_MAP[b]) {}
			return {
				logic: "editor.ThemePanel",
				skin: "mobile.editor.skins.ThemePanelSkin",
				targetComponentSkinList: this._THEME_PANEL_MAP[b]
			}
		},
		getColorPicker: function(e, d) {
			this.closeColorPicker();
			var f = W.Components.createComponent("mobile.editor.components.ColorPicker", "mobile.editor.skins.ColorPickerSkin", undefined, undefined, undefined, function(l) {
				if (f.$destroy) {
					l.dispose()
				} else {
					l.open();
					d = d || {};
					var o = new W.Color(d.color || "#FF0000");
					var c = W.Utils.getWindowSize();
					var m = f.getSize();
					var a = {};
					if (d.event) {
						a = W.Utils.getMidPos(m.x, m.y, d.event)
					}
					var n = a.x || d.x || (c.width / 2) - (m.x / 2) + document.body.scrollLeft;
					var p = a.y || d.y || (c.height / 2) - (m.y / 2) + document.body.scrollTop;
					var b = (d.allowAlpha === true);
					l.setColor(o, true);
					l.setPosition(n, p);
					l.enableAlpha(b);
					f.setStyle("visibility", "visible");
					e(l);
					l.addEvent("close", this.closeColorPicker)
				}
			}.bind(this));
			this._colorPickerNode = f;
			f.setStyle("visibility", "hidden");
			f.insertInto(this._editorComponents.colorPickerLayer)
		},
		closeColorPicker: function() {
			if (this._colorPickerNode) {
				if (this._colorPickerNode.getLogic) {
					this._colorPickerNode.getLogic().removeEvents()
				} else {
					this._colorPickerNode.$destroy = true
				}
				this._colorPickerNode = null;
				this._editorComponents.colorPickerLayer.empty()
			}
		},
		getStudioPicker: function(d, c) {
			this.closeStudioPicker();
			this._studioPickerNode = W.Components.createComponent("mobile.editor.components.StudioPicker", "mobile.editor.skins.StudioPickerSkin", undefined, undefined, undefined, function(m) {
				if (!vpIns.$destroy) {
					m.open();
					c = c || {};
					var k = c.value || "";
					var b = c.mode || "";
					var l = W.Utils.getWindowSize();
					var n = vpIns.getSize();
					var a = {};
					if (c.event) {
						a = W.Utils.getMidPos(n.x, n.y, c.event)
					}
					var o = a.x || c.x || (l.width / 2) - (n.x / 2) + document.body.scrollLeft;
					var p = a.y || c.y || (l.height / 2) - (n.y / 2) + document.body.scrollTop;
					m.setMode(b);
					m.setValue(k, true);
					m.setPosition(o, p);
					d(m);
					m.addEvent("close", this.closeStudioPicker)
				} else {
					m.removeEvents()
				}
			}.bind(this));
			this._studioPickerNode.insertInto(this._editorComponents.studioPickerLayer)
		},
		closeStudioPicker: function() {
			if (this._studioPickerNode) {
				if (this._studioPickerNode.getLogic) {
					this._studioPickerNode.getLogic().removeEvents()
				} else {
					this._studioPickerNode.$destroy = true
				}
				this._studioPickerNode = null;
				this._editorComponents.studioPickerLayer.empty()
			}
		},
		_isNavigationReady: function() {
			return this._editorComponents
		},
		_publish: function() {},
		_gotoSitePage: function(b) {
			this._sitePageChangeHandler(null, b, true)
		},
		_registerCommands: function() {
			var b = W.Commands;
			this._publishCommand = b.registerCommandAndListener("EditorCommands.Publish", this, this._publish, null);
			this._sitePageCommand = b.registerCommandAndListener("EditorCommands.gotoSitePage", this, this._gotoSitePage, null)
		}
	}
});
W.Classes.newClass({
	name: "mobile.editor.managers.DialogManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		initialize: function() {
			this._openDialogs = [];
			this._isReady = true;
			this._onKeyDown = this._onKeyDown.bind(this);
			window.addEvent("resize", function() {
				if (this.openDialog && this.openDialog.getLogic && this.openDialog.getLogic().setDialogPositionOnScreen) {
					this.openDialog.getLogic().setDialogPositionOnScreen()
				}
			}.bind(this));
			this.DialogButtons = {
				OK: "OK",
				CANCEL: "CANCEL",
				YES: "YES",
				NO: "NO",
				DONE: "DONE",
				DELETE: "DELETE"
			};
			this.DialogButtonSet = {
				OK: [this.DialogButtons.OK],
				DONE: [this.DialogButtons.DONE],
				OK_CANCEL: [this.DialogButtons.OK, this.DialogButtons.CANCEL],
				DELETE_CANCEL: [this.DialogButtons.DELETE, this.DialogButtons.CANCEL],
				YES_NO: [this.DialogButtons.YES, this.DialogButtons.NO],
				NONE: []
			};
			this._initializeExtra()
		},
		_initializeExtra: function() {},
		clone: function() {
			return this.parent()
		},
		isReady: function() {
			return (this._isReady === true)
		},
		closeAllDialogs: function() {
			this._closeAllDialogs()
		},
		_closeTopDialog: function(c) {
			var d = this._openDialogs.pop();
			if (d && d.getLogic) {
				if (c) {
					d.getLogic().triggerConfirmButton()
				} else {
					if (!d.getLogic().triggerCancelButton()) {
						d.getLogic().closeDialog()
					}
				}
			}
		},
		_closeAllDialogs: function() {
			while (this._openDialogs.length > 0) {
				var b = this._openDialogs.pop();
				if (b && b.getLogic) {
					b.getLogic().closeDialog()
				}
			}
		},
		passClickToNextDialog: function(g, h) {
			var f = this._getTopSemiModalDialog();
			if (f) {
				var j = f.getLogic();
				var i = j.getDialogBoxCoordinates();
				if (g < i.left || g > i.right || h < i.top || h > i.bottom) {
					j.closeDialog();
					this.passClickToNextDialog(g, h)
				}
			}
		},
		_getTopSemiModalDialog: function() {
			for (var b = this._openDialogs.length - 1;
			b >= 0; --b) {
				if (this._openDialogs[b].getLogic().getModalMode() === Constants.DialogWindow.TYPES.SEMI_MODAL) {
					return this._openDialogs[b]
				}
			}
			return null
		},
		_registerOpenDialog: function(d, c) {
			if (c) {
				this._closeAllDialogs()
			}
			this._openDialogs.push(d);
			W.Editor.setKeysEnabled(false)
		},
		_onDialogClosing: function(c) {
			var d = this._openDialogs.indexOf(c);
			if (d != -1) {
				this._openDialogs.splice(d, 1)
			}
			if (this._openDialogs.length === 0) {
				W.Editor.setKeysEnabled(true)
			}
		},
		openMediaDialog: function(f, d, e) {
			if (!e) {
				e = "photos"
			}
			this._createAndOpenDialog("_mediaDialog", "mobile.editor.components.dialogs.MediaDialog", "mobile.editor.skins.dialogs.MediaDialogSkin", function(a) {
				a.setDialogOptions(d, e, f)
			}, null, null, false, null, false)
		},
		openAddLinkDialog: function(c, d) {
			this._createAndOpenDialog("_addLinkDialog", "mobile.editor.components.dialogs.AddLinkDialog", "mobile.editor.skins.dialogs.AddLinkDialogSkin", function(a) {
				a.setDialogOptions(c, d)
			}, null, null, false, null, false)
		},
		openAddPageDialog: function(b) {
			this._createAndOpenDialog("_addPageDialog", "mobile.editor.components.dialogs.AddPageDialog", "mobile.editor.skins.dialogs.AddPageDialogSkin", function(a) {
				a.setDialogOptions(b)
			}, null, null, false, null, true)
		},
		openAddComponentDialog: function(b) {
			this._createAndOpenDialog("_addComponentDialog", "mobile.editor.components.dialogs.AddComponentDialog", "mobile.editor.skins.dialogs.AddComponentDialogSkin", function(a) {
				a.setDialogOptions(b)
			}, null, null, false, null, true)
		},
		openErrorDialog: function(g, e, f, h) {
			this._createAndOpenDialog("_errorDialog", "mobile.editor.components.dialogs.ErrorDialog", "mobile.editor.skins.dialogs.ErrorDialogSkin", function(a) {
				a.setDialogOptions(g, e, f, h, undefined)
			}, null, null, false, null, true)
		},
		openPromptDialog: function(i, k, h, l, j, g) {
			if (g !== false) {
				g = true
			}
			this._createAndOpenDialog("_promptDialog", "mobile.editor.components.dialogs.MessageDialog", "mobile.editor.skins.dialogs.MessageDialogSkin", function(a) {
				a.setDialogOptions(k, h, j, {
					title: i,
					buttonSet: l
				})
			}, null, null, false, null, g)
		},
		openLinkEditDialog: function(i, k, h, l, j, g) {
			this._createAndOpenDialog("_promptDialog", "mobile.editor.components.dialogs.MessageDialog", "mobile.editor.skins.dialogs.MessageDialogSkin", function(a) {
				a.setDialogOptions(k, h, j, {
					title: i,
					buttonSet: l
				})
			}, null, null, false, null, true)
		},
		_createAndOpenDialog: function(v, o, l, u, m, n, t, q, p, s) {
			var r;
			if (!s) {
				r = this[v]
			}
			if (!r) {
				r = W.Components.createComponent("mobile.editor.components.dialogs.DialogWindow", "mobile.editor.skins.dialogs.DialogWindowSkin", undefined, {}, function() {
					var a = r.getLogic();
					r.addEvent("innerDialogReady", function() {
						if (t) {
							a.openDialog()
						} else {
							a.getInnerDialog().addEvent("dialogOptionsSet", function() {
								a.openDialog()
							})
						}
						u(a.getInnerDialog().getLogic())
					});
					r.addEvent("dialogClosed", function() {
						this._onDialogClosing(r)
					}.bind(this));
					if (m) {
						a.setDialogOptions(m)
					}
					a.setDialog(o, l, q, n)
				}.bind(this));
				this[v] = r
			} else {
				u(this[v].getLogic().getInnerDialog().getLogic());
				if (t) {
					this[v].getLogic().openDialog()
				}
			}
			this._registerOpenDialog(r, p);
			document.addEvent(Constants.CoreEvents.KEY_DOWN, this._onKeyDown);
			return r
		},
		_onKeyDown: function(b) {
			if (b.key == "esc") {
				this._closeTopDialog(false);
				return
			}
			if (b.key == "enter") {
				if (b.target.nodeName != "TEXTAREA") {
					this._closeTopDialog(true)
				}
				return
			}
		},
		_createFloatingDialog: function(u, o, l, t, m, n, s, p, v, r) {
			var q;
			if (!r) {
				q = this[u]
			}
			if (!q) {
				q = W.Components.createComponent("mobile.editor.components.dialogs.DialogWindow", "wysiwyg.editor.skins.dialogs.FloatingDialogSkin", undefined, {}, function() {
					var a = q.getLogic();
					q.addEvent("innerDialogReady", function() {
						if (s) {
							a.openDialog(m)
						} else {
							a.getInnerDialog().addEvent("dialogOptionsSet", function() {
								a.openDialog(m)
							})
						}
						t(a.getInnerDialog().getLogic())
					});
					q.addEvent("dialogClosed", function() {
						document.removeEvent(Constants.CoreEvents.KEY_DOWN, this._onKeyDown);
						this._onDialogClosing(q);
						this.openDialog = null
					}.bind(this));
					if (m) {
						a.setDialogOptions(m)
					}
					a.setDialog(o, l, p, n)
				}.bind(this));
				this[u] = q
			} else {
				t(this[u].getLogic().getInnerDialog().getLogic());
				if (s) {
					this[u].getLogic().openDialog()
				}
			}
			this._registerOpenDialog(q, v);
			document.addEvent(Constants.CoreEvents.KEY_DOWN, this._onKeyDown);
			return q
		}
	}
});
W.Managers.list.combine([{
	Class: "mobile.editor.managers.UserMediaManager",
	target: "UserMedia"
}, {
	Class: "mobile.editor.managers.serverfacade.ServerFacade",
	target: "ServerFacade"
}, {
	Class: "mobile.editor.managers.PreviewManager",
	target: "Preview"
}, {
	Class: "mobile.editor.managers.EditorManager",
	target: "Editor"
}, {
	Class: "mobile.editor.managers.DialogManager",
	target: "EditorDialogs"
}]);
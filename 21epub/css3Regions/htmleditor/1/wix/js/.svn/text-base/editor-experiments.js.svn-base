W.Experiments.registerExperimentComponent("WixApps", "New", {
	name: "experiments.mobile.editor.components.dialogs.DialogWindow",
	skinParts: {},
	Class: {
		Extends: "mobile.editor.components.dialogs.DialogWindow",
		_setupButtons: function(c) {
			this._clearButtons();
			this._skinParts.okContainer.empty();
			this._skinParts.cancelContainer.empty();
			var d = 0;
			if (!c.length) {
				this._skinParts.buttonContainer.collapse()
			} else {
				c.forEach(function(a) {
					if (a == W.EditorDialogs.DialogButtons.OK || a == W.EditorDialogs.DialogButtons.YES || a == W.EditorDialogs.DialogButtons.DONE || a == W.EditorDialogs.DialogButtons.SAVE) {
						this._addButton(a, true, null, this._skinParts.okContainer)
					} else {
						if (a == W.EditorDialogs.DialogButtons.DELETE) {
							this._addButton(a, true, "red", this._skinParts.okContainer)
						} else {
							if (a == W.EditorDialogs.DialogButtons.CANCEL || a == W.EditorDialogs.DialogButtons.NO || a == W.EditorDialogs.DialogButtons.DISCARD) {
								this._addButton(a, true, "grayed", this._skinParts.cancelContainer)
							} else {
								this._addButton(a, true, null, this._skinParts.okContainer)
							}
						}
					}
				}.bind(this))
			}
		},
		setCloseCallBack: function(b) {
			this._closeCallBack = b
		},
		triggerConfirmButton: function(b) {
			if ( !! this._buttonsMap[W.EditorDialogs.DialogButtons.OK]) {
				this._onButtonClicked(W.EditorDialogs.DialogButtons.OK);
				return true
			} else {
				if ( !! this._buttonsMap[W.EditorDialogs.DialogButtons.YES]) {
					this._onButtonClicked(W.EditorDialogs.DialogButtons.YES);
					return true
				} else {
					if ( !! this._buttonsMap[W.EditorDialogs.DialogButtons.SAVE]) {
						this._onButtonClicked(W.EditorDialogs.DialogButtons.SAVE);
						return true
					} else {
						if ( !! this._buttonsMap[W.EditorDialogs.DialogButtons.DELETE]) {
							this._onButtonClicked(W.EditorDialogs.DialogButtons.DELETE);
							return true
						}
					}
				}
			}
			return false
		},
		triggerCancelButton: function() {
			if ( !! this._buttonsMap[W.EditorDialogs.DialogButtons.CANCEL]) {
				this._onButtonClicked(W.EditorDialogs.DialogButtons.CANCEL);
				return true
			} else {
				if ( !! this._buttonsMap[W.EditorDialogs.DialogButtons.NO] !== null) {
					this._onButtonClicked(W.EditorDialogs.DialogButtons.NO);
					return true
				} else {
					if ( !! this._buttonsMap[W.EditorDialogs.DialogButtons.DISCARD] !== null) {
						this._onButtonClicked(W.EditorDialogs.DialogButtons.DISCARD);
						return true
					}
				}
			}
			return false
		},
		_onButtonClicked: function(c) {
			var d = this._buttonsMap[c];
			if (!d || (d && d.getLogic && d.getLogic().isEnabled())) {
				if (this._closeCallBack != null) {
					if (this._closeCallBack({
						result: c
					}) !== false) {
						this.fireEvent("onDialogClosing", {
							result: c
						});
						this.closeDialog()
					}
				} else {
					this.fireEvent("onDialogClosing", {
						result: c
					});
					this.closeDialog()
				}
			}
		}
	}
});
W.Experiments.registerExperimentComponent("AudioPlayer", "New", {
	name: "experiments.mobile.editor.components.dialogs.MediaDialog",
	skinParts: {
		content: {
			type: "htmlElement"
		},
		pageController: {
			type: "mobile.editor.components.PageControllerSimple"
		},
		progressOuter: {
			type: "htmlElement"
		},
		progressInner: {
			type: "htmlElement"
		},
		errorContent: {
			type: "htmlElement"
		},
		uploadBTN: {
			type: "mobile.editor.components.UploadButton"
		}
	},
	Class: {
		Extends: "mobile.editor.components.dialogs.MediaDialog",
		initialize: function(i, f, g) {
			this.parent(i, f, g);
			this._dialogWindow = g && g.dialogWindow;
			this._dialogOptionsSet = false;
			this._galleryConfigurations = {
				backgrounds: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_PHOTOS"),
						skinpart: "yourPicsTab",
						listID: "user_photos",
						allowDelete: true
					}, {
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_BACKGROUNDS"),
						skinpart: "wixBgTab",
						listID: "backgrounds"
					}, {
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_PATTERNS"),
						skinpart: "wixPatternsTab",
						listID: "backgroundPatterns"
					}, {
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_TEXTURES"),
						skinpart: "wixTexturesTab",
						listID: "backgroundTextures"
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_IMAGE"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_IMAGES"),
						extensions: "*.jpg;*.gif;*.png;*.jpeg",
						macExtensions: "*.jpg;*.gif;*.png;*.jpeg",
						wixType: "media",
						compType: "photo",
						mediaS: "media"
					},
					onUpdateIndex: 0
				},
				photos: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_PHOTOS"),
						skinpart: "wixPicsTab",
						listID: "user_photos",
						allowDelete: true
					}, {
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_PHOTOS"),
						skinpart: "yourPicsTab",
						listID: "photos"
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_IMAGE"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_IMAGES"),
						extensions: "*.jpg;*.gif;*.png;*.jpeg",
						macExtensions: "*.jpg;*.gif;*.png;*.jpeg",
						wixType: "media",
						compType: "photo",
						mediaS: "media"
					},
					onUpdateIndex: 0
				},
				clipart: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_CLIPART"),
						skinpart: "yourPicsTab",
						listID: "clipart"
					}, {
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_PHOTOS"),
						skinpart: "wixPicsTab",
						listID: "user_photos",
						allowDelete: true
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_IMAGE"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_IMAGES"),
						extensions: "*.jpg;*.gif;*.png;*.jpeg",
						macExtensions: "*.jpg;*.gif;*.png;*.jpeg",
						wixType: "media",
						compType: "photo",
						mediaS: "media"
					},
					onUpdateIndex: 1
				},
				icons: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_ICONS"),
						skinpart: "wixIconsTab",
						listID: "icons"
					}, {
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_PHOTOS"),
						skinpart: "wixPicsTab",
						listID: "user_photos",
						allowDelete: true
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_ICON"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_IMAGES"),
						extensions: "*.jpg;*.gif;*.png;*.jpeg",
						macExtensions: "*.jpg;*.gif;*.png;*.jpeg",
						wixType: "media",
						compType: "photo",
						mediaS: "picture"
					},
					onUpdateIndex: 1
				},
				social_icons: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_SOCIAL_ICONS"),
						skinpart: "wixSocialIconsTab",
						listID: "social_icons"
					}, {
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_PHOTOS"),
						skinpart: "wixPicsTab",
						listID: "user_photos",
						allowDelete: true
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_ICON"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_IMAGES"),
						extensions: "*.jpg;*.gif;*.png;*.jpeg",
						macExtensions: "*.jpg;*.gif;*.png;*.jpeg",
						wixType: "media",
						compType: "photo",
						mediaS: "media"
					},
					onUpdateIndex: 1
				},
				favicon: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_CLIPART"),
						skinpart: "yourPicsTab",
						listID: "user_favicons",
						allowDelete: true
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_ICON"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_IMAGES"),
						extensions: "*.jpg;*.gif;*.png;*.jpeg",
						macExtensions: "*.jpg;*.gif;*.png;*.jpeg",
						wixType: "site_icon",
						compType: "ficons",
						mediaS: "ficons"
					},
					onUpdateIndex: 0
				},
				documents: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_DOCS"),
						skinpart: "wixPicsTab",
						listID: "user_docs",
						allowDelete: true
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_GENERAL"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_DOCS"),
						extensions: "*.doc;*.docx;*.pdf;*.xls;*.xlsx;*.ppt;*.pptx;*.odf;*.odt;",
						macExtensions: "*.doc;*.docx;*.pdf;*.xls;*.xlsx;*.ppt;*.pptx;*.odf;*.odt;",
						wixType: "document",
						compType: "document",
						mediaS: "ugd"
					},
					onUpdateIndex: 0
				},
				swf: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_SWF"),
						skinpart: "wixSwfTab",
						listID: "user_swf",
						allowDelete: true
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_SWF"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_SWFS"),
						extensions: "*.swf;",
						macExtensions: "*.swf",
						wixType: "swf",
						compType: "picture",
						mediaS: "media"
					},
					onUpdateIndex: 0
				},
				audio: {
					tabs: [{
						caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_AUDIO"),
						skinpart: "wixAudioTab",
						listID: "user_audio",
						allowDelete: true
					}],
					uploadFileType: {
						label: this.injects().Resources.get("EDITOR_LANGUAGE", "UPLOAD_GENERAL"),
						description: this.injects().Resources.get("EDITOR_LANGUAGE", "GENERAL_AUDIO"),
						extensions: "*.mp3;",
						macExtensions: "*.mp3;",
						wixType: "music",
						compType: "media",
						mediaS: "mp3"
					},
					onUpdateIndex: 0
				}
			};
			this._galleryConfigurations.SlideShowGallery = this._galleryConfigurations.photos;
			this._galleryConfigurations.MatrixGallery = this._galleryConfigurations.photos;
			this._galleryConfigurations.SliderGallery = this._galleryConfigurations.photos;
			this._tabNamesMap = {
				UserMedia: {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_PHOTOS"),
					skinpart: "yourPicsTab"
				},
				Photos: {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_PHOTOS"),
					skinpart: "wixPicsTab"
				},
				Backgrounds: {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_BACKGROUNDS"),
					skinpart: "wixBgTab"
				},
				Patterns: {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_PATTERNS"),
					skinpart: "wixBgPatternTab"
				},
				Icons: {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_ICONS"),
					skinpart: "wixIconsTab"
				},
				"Social Icons": {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_SOCIAL_ICONS"),
					skinpart: "wixSocialIconsTab"
				},
				ClipArt: {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_CLIPART"),
					skinpart: "wixClipArtTab"
				},
				SWF: {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_SWF"),
					skinpart: "wixSwfTab"
				},
				Audio: {
					caption: this.injects().Resources.get("EDITOR_LANGUAGE", "MEDIA_DIALOG_TAB_USER_AUDIO"),
					skinpart: "wixAudioTab"
				}
			};
			this._multipleSelection = true;
			this._currentSelection = [];
			var h = this;
			this._imageListener = function(a) {
				if (a.type == "click") {
					h._onImageClick(this)
				} else {
					if (a.type == "deleteItemClicked") {
						h._onDeleteClicked(this)
					} else {
						h._onDoubleClick(this)
					}
				}
			};
			var j = this.injects().UserMedia;
			j.addEvent("mediaUpdated", this._userMediaUpdate);
			j.addEvent("UploadProgressUpdate", this._onUploadProgress);
			j.addEvent("UploadError", this._onUploadError);
			j.addEvent("validationError", this._onValidationError)
		}
	}
});
W.Experiments.registerNewExperimentSchemaProps("SocialPanel", "New", "SiteSettings", {
	suppressTrackingCookies: {
		type: "boolean",
		"default": ""
	},
	fbAdminsUserId: {
		type: "string",
		"default": ""
	}
});
W.Experiments.registerExperimentManager("AudioPlayer", "New", {
	name: "experiments.mobile.editor.managers.UserMediaManager",
	Class: {
		Extends: "mobile.editor.managers.UserMediaManager",
		updateMedia: function(j) {
			if (j && typeOf(j) != "string") {
				j = null
			}
			var p = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=picture";
			var i = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=document";
			var o = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=site_icon";
			var m = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=swf";
			var k = "http://editor." + W.Config.getServiceTopologyProperty("mediaServerRoot") + "/media/private/get?accept=javascript&format=jsonp&action=media.get&mediaType=music";
			var l = {
				media: {
					URL: p,
					onComplete: this._setMedia.bind(this)
				},
				document: {
					URL: i,
					onComplete: this._setDocs.bind(this)
				},
				ugd: {
					URL: i,
					onComplete: this._setDocs.bind(this)
				},
				favicons: {
					URL: o,
					onComplete: this._setFavicons.bind(this)
				},
				site_icon: {
					URL: o,
					onComplete: this._setFavicons.bind(this)
				},
				swf: {
					URL: m,
					onComplete: this._setSWFs.bind(this)
				},
				music: {
					URL: k,
					onComplete: this._setAudios.bind(this)
				}
			};
			if (j) {
				this._doUpdateMedia(l[j])
			} else {
				for (var n in l) {
					this._doUpdateMedia(l[n])
				}
			}
		},
		_setAudios: function(c, d) {
			this._audioList = [];
			this._setList(c, d, this._audioList)
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
				};
			case "music":
				return {
					type: "AudioPlayer",
					title: b.title ? b.title : b.originalFileName,
					uri: b.fileName,
					description: b.description,
					icon_uri: b.iconUrl,
					originalFileName: b.originalFileName
				}
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
					break;
				case "user_audio":
					b = this._audioList;
					break
				}
				c(b)
			}.bind(this))
		}
	}
});
W.Experiments.registerExperimentClass("FBShare", "New", {
	name: "experiments.wysiwyg.editor.commandregistrars.AccountCommandRegistrar",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.AccountCommandRegistrar",
		Binds: [],
		registerCommands: function() {
			var a = W.Commands;
			this._upgradeToPremiumCommand = a.registerCommandAndListener("WEditorCommands.UpgradeToPremium", this, this._onUpgradeToPremiumCommand);
			this._publishCommand = a.registerCommandAndListener("WEditorCommands.Publish", this, this._onPublishCommand);
			this._goToMyAcountCommand = a.registerCommandAndListener("WEditorCommands.GoToMyAcount", this, this._onGoToMyAcountCommand);
			this._manageDomainCommand = a.registerCommandAndListener("WEditorCommands.ManageDomain", this, this._onManageDomainCommand);
			this._postInFacebookCommand = a.registerCommandAndListener("WEditorCommands.PostInFacebook", this, this._onPostInFacebookCommand);
			this._postInTwitterCommand = a.registerCommandAndListener("WEditorCommands.ShareInTwitter", this, this._onShareInTwitterCommand)
		},
		_onPostInFacebookCommand: function(d) {
			if (this._isPremiumUser = this.injects().Config.isPremiumUser()) {
				window.open("http://www.facebook.com/sharer/sharer.php?u=" + d.url + "&t=" + d.text);
				return
			}
			var a = (window.location.host.indexOf("wix.com") != -1) ? "304553036307597" : "394905507233800";
			var c = this._getFacebookShareData(d);
			var b = {
				appId: a,
				status: true,
				cookie: true,
				xfbml: true
			};
			window.fbAsyncInit = function() {
				window.FB.init(b);
				window.FB.ui(c)
			}.bind(this);
			if (!window.FB) {
				this._initFacebookSDK()
			} else {
				window.FB.ui(c)
			}
		},
		_getFacebookShareData: function(g) {
			var a = this.injects().Data.getDataMap().SITE_SETTINGS.getData();
			var f = a.siteTitleSEO ? a.siteTitleSEO : this.injects().Preview.getPreviewManagers().Viewer.getSiteName();
			var b = a.siteDescriptionSEO ? a.siteDescriptionSEO : "";
			var c = a.thumbnail ? "http://static.pita.wixpress.com/media/" + a.thumbnail : null;
			var e = window.editorModel.languageCode;
			var d = "vir_fb_pub_h";
			return {
				method: "stream.publish",
				name: f,
				caption: "{*actor*} " + W.Resources.get("EDITOR_LANGUAGE", "PUBLIH_FB_SHARE_CAPTION"),
				description: b,
				picture: c,
				link: g.url,
				action_links: [{
					text: "Create a Free Website",
					href: "http://www.wix.com/?utm_campaign=" + d + "_" + e + "&experiment_id=" + g.url
				}]
			}
		},
		_initFacebookSDK: function() {
			var c = document;
			var b, e = "facebook-jssdk",
				a = c.getElementsByTagName("script")[0];
			if (c.getElementById(e)) {
				return
			}
			b = c.createElement("script");
			b.id = e;
			b.async = true;
			b.src = "//connect.facebook.net/en_US/all.js";
			a.parentNode.insertBefore(b, a)
		}
	}
});
W.Experiments.registerExperimentClass("FPP", "New", {
	name: "experiment.wysiwyg.editor.commandregistrars.ComponentCommandRegistrarFpp",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.ComponentCommandRegistrar",
		_setSelectedComponentPosSize: function(f) {
			var h = W.Editor.getEditedComponent();
			var d = W.Editor.getPropertyPanel();
			var e = h.getSizeLimits();
			var a = f.updateLayout;
			var b = h.useLayoutOnDrag();
			if (f.x != undefined) {
				h.setX(f.x)
			}
			if (f.y != undefined) {
				if (b) {
					f.y = Math.max(h.getMinDragY(), f.y)
				}
				h.setY(f.y)
			}
			if (f.width != undefined) {
				h.setWidth(this._enforceMinMax(f.width, e.minW, e.maxW))
			}
			if (f.height != undefined) {
				var g = this._enforceMinMax(f.height, e.minH, e.maxH);
				h.setHeight(g);
				if (h.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer")) {
					var c = W.Editor.getScopeNode(W.Editor.EDIT_MODE.CURRENT_PAGE);
					c.getLogic().setHeight(g);
					W.Layout.reportResize([c.getLogic()])
				}
			}
			var i = [h];
			if (h.isMultiSelect) {
				i = h.getSelectedComps()
			}
			if (a && !b) {
				if (f.width != undefined || f.height != undefined) {
					W.Layout.reportResize(i)
				} else {
					W.Layout.reportMove(i)
				}
			}
			if (f.enforceAnchors || b) {
				W.Layout.enforceAnchors(i, true)
			}
			if (d && d.isEnabled()) {
				d.updateCompPosSize()
			}
			W.Editor._editorComponents.editingFrame.fitToComp();
			if (!W.Editor.getParentContainerHighLight()) {
				W.Editor.onComponentChanged(false, true)
			}
		}
	}
});
W.Experiments.registerExperimentClass("MCM", "New", {
	name: "wysiwyg.editor.commandregistrars.ComponentCommandRegistrarMCMNew",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.ComponentCommandRegistrar",
		_setSelectedComponentPosSize: function(g) {
			var d = g.editedComponent || W.Editor._editedComponent;
			var f = d.getSizeLimits();
			var c = g.updateLayout;
			var a = d.useLayoutOnDrag();
			if (g.x != undefined) {
				d.setX(g.x)
			}
			if (g.y != undefined) {
				if (a) {
					g.y = Math.max(d.getMinDragY(), g.y)
				}
				d.setY(g.y)
			}
			if (g.width != undefined) {
				d.setWidth(this._enforceMinMax(g.width, f.minW, f.maxW))
			}
			if (g.height != undefined) {
				var e = this._enforceMinMax(g.height, f.minH, f.maxH);
				d.setHeight(e);
				if (d.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer")) {
					var b = W.Editor.getScopeNode(W.Editor.EDIT_MODE.CURRENT_PAGE);
					b.getLogic().setHeight(e);
					W.Layout.reportResize([b.getLogic()])
				}
			}
			var h = [d];
			if (d.isMultiSelect) {
				h = d.getSelectedComps()
			}
			if (c && !a) {
				if (g.width != undefined || g.height != undefined) {
					W.Layout.reportResize(h)
				} else {
					W.Layout.reportMove(h)
				}
			}
			if (g.enforceAnchors || a) {
				W.Layout.enforceAnchors(h, true)
			}
			if (W.Editor._editorComponents.componentPanel) {
				W.Editor._editorComponents.componentPanel.updateCompPosSize()
			}
			W.Editor._editorComponents.editingFrame.fitToComp()
		}
	}
});
W.Experiments.registerExperimentClass("MasterPage", "New", {
	name: "wysiwyg.editor.commandregistrars.ComponentCommandRegistrarMasterPageNew",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.ComponentCommandRegistrar",
		_setSelectedComponentPosSize: function(g) {
			var d = W.Editor._editedComponent;
			var f = d.getSizeLimits();
			var c = g.updateLayout;
			var a = d.useLayoutOnDrag();
			if (g.x != undefined) {
				d.setX(g.x)
			}
			if (g.y != undefined) {
				if (a) {
					g.y = Math.max(d.getMinDragY(), g.y)
				}
				d.setY(g.y)
			}
			if (g.width != undefined) {
				d.setWidth(this._enforceMinMax(g.width, f.minW, f.maxW))
			}
			if (g.height != undefined) {
				var e = this._enforceMinMax(g.height, f.minH, f.maxH);
				d.setHeight(e);
				if (d.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer")) {
					var b = W.Editor.getScopeNode(W.Editor.EDIT_MODE.CURRENT_PAGE);
					b.getLogic().setHeight(e);
					W.Layout.reportResize([b.getLogic()])
				}
			}
			var h = [d];
			if (d.isMultiSelect) {
				h = d.getSelectedComps()
			}
			if (c && !a) {
				if (g.width != undefined || g.height != undefined) {
					W.Layout.reportResize(h)
				} else {
					W.Layout.reportMove(h)
				}
			}
			if (g.enforceAnchors || a) {
				W.Layout.enforceAnchors(h, true)
			}
			if (W.Editor._editorComponents.componentPanel) {
				W.Editor._editorComponents.componentPanel.updateCompPosSize()
			}
			W.Editor._editorComponents.editingFrame.fitToComp()
		}
	}
});
W.Experiments.registerExperimentClass("TPA", "New", {
	name: "experiments.wysiwyg.editor.commandregistrars.ComponentCommandRegistrarTPANew",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.ComponentCommandRegistrar",
		registerCommands: function() {
			var a = W.Commands;
			this._changeSelectedComponentPosSizeCommand = a.registerCommandAndListener("WEditorCommands.SetSelectedCompPositionSize", this, this._setSelectedComponentPosSize);
			this._addComponentCommand = a.registerCommandAndListener("WEditorCommands.AddComponent", this, this._onAddComponent);
			this._addAppComponentCommand = a.registerCommandAndListener("WEditorCommands.AddAppComponent", this, this._onAddAppComponent);
			this._addComponentfullParamsCommand = a.registerCommandAndListener("WEditorCommands.AddComponentFullParams", this, this._onAddComponentFullParams);
			this._gridSnapToGridCommand = a.registerCommandAndListener("EditCommands.SnapToGrid", this, this._onSnapToGrid)
		},
		_onAddComponent: function(b) {
			if (!W.Editor._componentData) {
				return
			}
			if (!b) {
				return W.Utils.debugTrace("WEditManager::_onAddComponent: Missing parameter")
			}
			var a = b.compData || W.Editor._componentData[b.compType];
			return this._onAddComponentInternal(b, a)
		},
		_onAddAppComponent: function(e) {
			var b = e.appDefinitionDataObj;
			var d = e.widgetId || null;
			var c = e.type;
			var a = b.appDefinitionId;
			var f = this.injects().AppStoreManager.countAppElements(c, a);
			LOG.reportEvent(wixEvents.APPS_FLOW_APP_BUTTON_CLICKED, {
				g1: a,
				i1: f
			});
			W.EditorDialogs.openAddAppDialog(b, c, d, function() {
				this.injects().AppStoreManager.addComponent(c, b, d);
				LOG.reportEvent(wixEvents.APPS_FLOW_APP_ADDED_TO_STAGE, {
					g1: b.appDefinitionId
				})
			}.bind(this))
		}
	}
});
W.Experiments.registerExperimentClass("URM", "New", {
	name: "experiments.wysiwyg.editor.commandregistrars.EditCommandRegistrar",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.EditCommandRegistrar",
		Binds: [],
		registerCommands: function() {
			var a = W.Commands;
			this._copyCommand = a.registerCommandAndListener("EditCommands.Copy", this, this._onCopy);
			this._pasteCommand = a.registerCommandAndListener("EditCommands.Paste", this, this._onPaste);
			this._cutCommand = a.registerCommandAndListener("EditCommands.Cut", this, this._onCut);
			this._duplicateCommand = a.registerCommandAndListener("EditCommands.Duplicate", this, this._onDuplicate);
			this._deleteSelectedComponentCommand = a.registerCommandAndListener("WEditorCommands.WDeleteSelectedComponent", this, this._confirmAndDeleteSelectedComponent);
			this._undoCommand = a.registerCommandAndListener("WEditorCommands.Undo", this, this._onUndo);
			this._redoCommand = a.registerCommandAndListener("WEditorCommands.Redo", this, this._onRedo);
			this._moveTopCommand = a.registerCommandAndListener("WEditorCommands.MoveTop", this, this._onMoveTop);
			this._moveBottomCommand = a.registerCommandAndListener("WEditorCommands.MoveBottom", this, this._onMoveBottom);
			this._moveForwardCommand = a.registerCommandAndListener("WEditorCommands.MoveForward", this, this._onMoveForward);
			this._moveBackCommand = a.registerCommandAndListener("WEditorCommands.MoveBack", this, this._onMoveBack)
		},
		setKeyboardEvents: function() {
			var a = W.InputBindings;
			a.addBinding("ctrl+v", {
				command: this._pasteCommand
			});
			a.addBinding("ctrl+c", {
				command: this._copyCommand
			});
			a.addBinding("ctrl+x", {
				command: this._cutCommand
			});
			a.addBinding("ctrl+d", {
				command: this._duplicateCommand
			});
			a.addBinding("ctrl+[", {
				command: this._moveBottomCommand
			});
			a.addBinding("ctrl+]", {
				command: this._moveTopCommand
			});
			a.addBinding("ctrl+&lt", {
				command: this._moveBackCommand
			});
			a.addBinding("ctrl+&gt", {
				command: this._moveForwardCommand
			});
			a.addBinding("delete", {
				command: this._deleteSelectedComponentCommand
			});
			a.addBinding("ctrl+z", {
				command: this._undoCommand
			});
			a.addBinding("ctrl+y", {
				command: this._redoCommand
			})
		},
		_onUndo: function() {
			W.UndoRedoManager.undo()
		},
		_onRedo: function() {
			W.UndoRedoManager.redo()
		}
	}
});
W.Experiments.registerExperimentClass("GridLines", "New", {
	name: "experiments.wysiwyg.editor.commandregistrars.EditorCommandRegistrarGridLinesNew",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.EditorCommandRegistrar",
		registerCommands: function() {
			var a = W.Commands;
			this._toggleGridLinesCommand = a.registerCommandAndListener("EditCommands.ToggleGridLines", this, this._onToggleGridLines);
			this._setVerticalGridLinesCommand = a.registerCommandAndListener("EditCommands.SetVerticalGridLines", this, this._onSetVerticalGridLines);
			this._setEditModeCommand = a.registerCommandAndListener("WEditorCommands.WSetEditMode", this, this._onSetEditMode)
		},
		_onToggleGridLines: function(a) {
			this.injects().Editor.getEditorUI().getSkinPart("gridLines").toggleGrid()
		},
		_onSetVerticalGridLines: function(b) {
			var a = this.injects().Editor.getEditorUI().getSkinPart("gridLines");
			b ? a.showVerticalGridLines() : a.hideVerticalGridLines()
		},
		_onGrid: function() {}
	}
});
W.Experiments.registerExperimentClass("WalkMe", "New", {
	name: "experiments.wysiwyg.editor.commandregistrars.EditorCommandRegistrarWalkMeNew",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.EditorCommandRegistrar",
		Binds: [],
		registerCommands: function() {
			var a = W.Commands;
			this._gridCommand = a.registerCommandAndListener("EditCommands.ToggleGridLines", this, this._onGrid);
			this._setEditModeCommand = a.registerCommandAndListener("WEditorCommands.WSetEditMode", this, this._onSetEditMode);
			this._walkMeThroughCommand = a.registerCommandAndListener("WEditorCommands.ShowWalkThru", this, this._onWalkThru)
		},
		_onWalkThru: function() {
			try {
				wmjQuery("#walkme-menu-closed").click();
				LOG.reportEvent(wixEvents.WALK_ME_BUTTON_CLICKED)
			} catch (a) {
				LOG.reportError(wixErrors.WALK_ME_FAILED_TO_LOAD)
			}
		}
	}
});
W.Experiments.registerExperimentClass("WixApps", "New", {
	name: "experiments.wysiwyg.editor.commandregistrars.OpenDialogCommandRegistrarWixAppsNew",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.OpenDialogCommandRegistrar",
		_showHelpDialog: function(e, c) {
			var a = this.injects().Config.getHelpServerUrl();
			var d;
			if (e.indexOf("node/") == 0) {
				d = "/" + e
			} else {
				d = W.Data.dataMap.HELP_IDS._data[e]
			}
			var b = a + d;
			W.EditorDialogs.openHelpDialog(b)
		}
	}
});
W.Experiments.registerExperimentClass("MasterPage", "New", {
	name: "wysiwyg.editor.commandregistrars.OpenPanelCommandRegistrarMasterPageNew",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.OpenPanelCommandRegistrar",
		_stopRichTextEdit: function() {
			if (W.Editor._editorComponents.editingFrame.getState("editMode") == "inPlaceEdit") {
				W.Editor._editorComponents.editingFrame.stopEditRichText()
			}
		}
	}
});
W.Experiments.registerExperimentClass("SM", "New", {
	name: "wysiwyg.editor.commandregistrars.OpenPanelCommandRegistrarMasterPageNew",
	Class: {
		Extends: "wysiwyg.editor.commandregistrars.OpenPanelCommandRegistrar",
		initialize: function() {
			var a = W.Commands;
			this._showSiteMembers = a.registerCommandAndListener("WEditorCommands.SiteMembers", this, this._onShowSiteMembers)
		},
		_onShowSiteMembers: function(a) {
			var b = "siteMembers";
			if (this._showPanelIfExist(b)) {
				return
			}
			W.Editor._editorUI.createComponentPart(b, false, a, function(c) {
				this._savePanelInCache(c, b);
				W.Editor._editorUI.showSubPanelWithParentPanelSize(c, true)
			}.bind(this))
		}
	}
});
W.Experiments.registerExperimentComponent("FPP", "New", {
	name: "experiments.wysiwyg.editor.components.ComponentEditBoxFpp",
	skinParts: merge({
		deleteButton: undefined,
		duplicateButton: undefined,
		moveForwardButton: undefined,
		moveBackButton: undefined,
		controls: undefined
	}),
	Class: {
		Extends: "wysiwyg.editor.components.ComponentEditBox",
		_states: {
			editMode: ["normalEdit", "inPlaceEdit", "differentScopeEdit", "nonDragEdit"],
			isMasterPage: ["masterPage", "notMasterPage"],
			isSiteSegment: ["siteSegment", "notSiteSegment"]
		},
		_actionsMap: merge({
			deleteButton: undefined,
			moveBackButton: undefined,
			moveForwardButton: undefined,
			duplicateButton: undefined
		}),
		_onAllSkinPartsReady: function() {
			this.collapse();
			this._addToolTipToSkinPart(this._skinParts.dragHandle, "Boundary_box_drag_handle_ttid");
			this._addToolTipToSkinPart(this._skinParts.pushKnob, "Boundary_box_push_knob_ttid")
		},
		_getEditModeState: function() {
			return this.getState("editMode")
		},
		_setEditModeState: function(a) {
			this.setState(a, "editMode")
		},
		_setIsMasterPage: function() {
			var a = this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer");
			var c = this.injects().Editor.getComponentScope(this._editedComponent);
			var b = !a && c == "MASTER_PAGE" ? "masterPage" : "notMasterPage";
			this.setState(b, "isMasterPage")
		},
		editComponent: function(a, b) {
			W.UndoRedoManager._startTransaction(this._getCompScopeId());
			if (this._getEditModeState() == "inPlaceEdit") {
				this.stopEditRichText()
			}
			this._stopListeningToComp();
			this._isInScope = true;
			this._editedComponent = this.injects().Editor.getEditedComponent();
			this._showPotentialHGroups = false;
			this._setEditModeState("normalEdit");
			if (this.injects().Editor.getParentContainerHighLight()) {
				if (this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.HeaderContainer") || this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer") || this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.FooterContainer")) {
					this.setState("siteSegment", "isSiteSegment")
				} else {
					this.setState("notSiteSegment", "isSiteSegment")
				}
			}
			this.fitToComp(this._editedComponent);
			this.uncollapse();
			this._zIndexChangedHandler(this._editedComponent);
			this._positionResizeAnchors();
			this._listenToUserEvents();
			this._editedComponent.addEvent("autoSizeChange", this._onCompAutoSized);
			if (this.injects().Editor.getEditMode() == "MASTER_PAGE") {
				this.injects().Commands.executeCommand("Tooltip.ShowTip", {
					id: "part_of_master_page_ttid"
				}, this._editedComponent)
			}
			if (a) {
				this._mouseDownDragHandler(b, this._editedComponent.useLayoutOnDrag(), false)
			}
			this.refreshMultiSelect()
		},
		_showControllers: function() {
			this._skinParts.dragHandle.uncollapse();
			this._skinParts.topLeftKnob.uncollapse();
			this._skinParts.topRightKnob.uncollapse();
			this._skinParts.bottomLeftKnob.uncollapse();
			this._skinParts.bottomRightKnob.uncollapse();
			this._skinParts.pushKnob.uncollapse();
			if (!this._leftEnabled) {
				this._skinParts.leftKnob.collapse();
				this._skinParts.topLeftKnob.collapse();
				this._skinParts.bottomLeftKnob.collapse()
			} else {
				this._skinParts.leftKnob.uncollapse()
			}
			if (!this._rightEnabled) {
				this._skinParts.rightKnob.collapse();
				this._skinParts.topRightKnob.collapse();
				this._skinParts.bottomRightKnob.collapse()
			} else {
				this._skinParts.rightKnob.uncollapse()
			}
			if (!this._topEnabled) {
				this._skinParts.topKnob.collapse();
				this._skinParts.topLeftKnob.collapse();
				this._skinParts.topRightKnob.collapse()
			} else {
				this._skinParts.topKnob.uncollapse()
			}
			if (!this._bottomEnabled) {
				this._skinParts.pushKnob.collapse();
				this._skinParts.bottomKnob.collapse();
				this._skinParts.bottomLeftKnob.collapse();
				this._skinParts.bottomRightKnob.collapse()
			} else {
				this._skinParts.bottomKnob.uncollapse()
			}
			if (this.getState("isSiteSegment") == "siteSegment") {
				this._skinParts.bottomKnob.collapse();
				this._skinParts.bottomLeftKnob.collapse();
				this._skinParts.bottomRightKnob.collapse()
			}
		},
		_hideControllers: function() {
			this._skinParts.dragHandle.collapse();
			this._skinParts.leftKnob.collapse();
			this._skinParts.topLeftKnob.collapse();
			this._skinParts.bottomLeftKnob.collapse();
			this._skinParts.rightKnob.collapse();
			this._skinParts.topRightKnob.collapse();
			this._skinParts.bottomRightKnob.collapse();
			this._skinParts.topKnob.collapse();
			this._skinParts.topLeftKnob.collapse();
			this._skinParts.topRightKnob.collapse();
			this._skinParts.pushKnob.collapse();
			this._skinParts.bottomKnob.collapse();
			this._skinParts.bottomLeftKnob.collapse();
			this._skinParts.bottomRightKnob.collapse()
		},
		_zIndexChangedHandler: function(b) {
			if (b === this._editedComponent) {
				if (this._editedComponent.isMultiSelect) {
					this.moveForwardEnabled = false;
					this.moveBackEnabled = false
				} else {
					var a = this._editedComponent.getParentComponent();
					this.moveForwardEnabled = a.canMoveForward(this._editedComponent);
					this.moveBackEnabled = a.canMoveBack(this._editedComponent)
				}
				var c = this.injects().Commands.getCommand("WEditorCommands.MoveForward");
				c.setState(this.moveForwardEnabled);
				c = this.injects().Commands.getCommand("WEditorCommands.MoveTop");
				c.setState(this.moveForwardEnabled);
				c = this.injects().Commands.getCommand("WEditorCommands.MoveBottom");
				c.setState(this.moveBackEnabled);
				c = this.injects().Commands.getCommand("WEditorCommands.MoveBack");
				c.setState(this.moveBackEnabled)
			}
		},
		_editRichText: function() {
			var b = this._editedComponent;
			var d = this._skinParts.richTextEditor;
			var a = this._previewManager.previewToEditorCoordinates(b.getGlobalPositionRefNode());
			var c = this._view.getPosition();
			a.x -= c.x;
			a.y -= c.y;
			d.setPositioning(a, b.getWidth(), b.getPhysicalHeight());
			d.setWidth(b.getWidth());
			d.setMinHeight(b.getMinPhysicalHeight() + b.getExtraPixels().height);
			d.setHeight(b.getPhysicalHeight());
			b.getRichTextContainer().setStyle("visibility", "hidden");
			this._setEditModeState("inPlaceEdit");
			d.createEditor(b.getDataItem());
			d.getDataItem().addEvent(Constants.DataEvents.DATA_CHANGED, this._updateRichTextDataAndSize);
			this.injects().Commands.executeCommand(Constants.EditorUI.CLOSE_ALL_PANELS);
			this.injects().Editor.hideFloatingPanel()
		},
		_mouseDownDragHandlerExtra: function(c, b, a) {
			this.injects().Editor.hideFloatingPanel()
		},
		_mouseUpHandler: function(c, a) {
			var d = c.control || c.event.metaKey;
			if (a && d && this._editedComponent.getX() == this._compStartPoint.x && this._editedComponent.getY() == this._compStartPoint.y) {
				var b = this.injects().Preview.componentFromGlobalCoordinates(c.client.x, c.client.y, W.Preview.selectionFilter);
				this.injects().Editor.handleComponentClicked(b, c)
			} else {
				if (!this._dragThresholdReached && this._getEditModeState() != "inPlaceEdit") {
					this.injects().Editor.openComponentPropertyPanels(c.page)
				}
			}
		},
		_openSiteSegmentPropertyPanel: function(a) {
			this.injects().Editor.openComponentPropertyPanels(a.page)
		},
		_handlePossibleDropInsideContainer: function(a, b) {
			a = a || {};
			var c = this._areContainersEqual && this._areContainersEqual(this._lastContainerContainingComponent, this._draggedOverContainer);
			if (this._draggedOverContainer && !c) {
				this.addEditedComponentToContainer(this._draggedOverContainer.htmlNode, null, a.page, b)
			} else {
				this.addEditedComponentToContainer(this._editedComponent.getParentComponent().getViewNode(), null, a.page, b)
			}
		},
		addEditedComponentToContainer: function(a, h, l, e) {
			var j = this._editedComponent;
			var c = j.getViewNode();
			if (c != a && c.getParent("[comp]") != a) {
				var k = a.getLogic();
				var m = this._getAllSelectedComponents();
				var f = this.injects().Preview.getGlobalRefNodePositionInEditor(k);
				h = h || this.injects().Preview.getGlobalRefNodePositionInEditor(j);
				var b, g;
				for (b = 0;
				b < m.length; ++b) {
					g = m[b];
					k.addChild(g)
				}
				this.injects().Layout.reportReparent(m, this._originalContainer);
				this.executeCommand({
					x: h.x - f.x,
					y: h.y - f.y
				});
				this.injects().Editor.setSelectedComp(j);
				var d = this.injects().Editor.getPropertyPanel();
				this.injects().Editor.openComponentPropertyPanels(l || h, true, e)
			}
		},
		_isPositionChanged: function() {},
		_setDeleteButtonState: function() {},
		_setDuplicateButtonState: function() {},
		_deleteButtonClickHandler: function() {},
		_moveBackHandler: function() {},
		_moveForwardHandler: function() {},
		_duplicateHandler: function() {}
	}
});
W.Experiments.registerExperimentComponent("GridLines", "New", {
	name: "experiments.wysiwyg.editor.components.ComponentEditBoxGridLinesNew",
	imports: ["mobile.core.components.Page"],
	skinParts: merge({
		pushKnob: {
			type: "wysiwyg.editor.components.WButton"
		},
		dragHandle: {
			type: "wysiwyg.editor.components.WButton"
		}
	}),
	Class: {
		Extends: "wysiwyg.editor.components.ComponentEditBox",
		_onAllSkinPartsReady: function() {
			this.collapse();
			this._addToolTipToSkinPart(this._skinParts.duplicateButton, "Boundary_box_Duplicate_button_ttid");
			this._addToolTipToSkinPart(this._skinParts.moveBackButton, "Boundary_box_Arrow_down_ttid");
			this._addToolTipToSkinPart(this._skinParts.moveForwardButton, "Boundary_box_Arrow_up_ttid");
			this._addToolTipToSkinPart(this._skinParts.deleteButton, "Boundary_box_Trash_can_ttid");
			this._addToolTipToSkinPart(this._skinParts.dragHandle, "Boundary_box_drag_handle_ttid");
			this._addToolTipToSkinPart(this._skinParts.pushKnob, "Boundary_box_push_knob_ttid")
		},
		_mouseDownHandler: function(e) {
			W.UndoRedoManager._startTransaction(this._getCompScopeId());
			this._disablePredraggingOperations();
			e.stopPropagation();
			var a = e.target.get("skinPart");
			if (a == "icon") {
				a = e.target.getParent().get("skinPart")
			}
			if (this._actionsMap[a]) {
				this[this._actionsMap[a]](e);
				return
			}
			var c, f;
			if (e.control && this._editedComponent) {
				c = this._editedComponent.getViewNode().getParent();
				f = false
			}
			if (this._getEditModeState() == "inPlaceEdit") {
				var d = this._previewManager.getGlobalRefNodePositionInEditor(this._editedComponent, true);
				if ((e.client.y - d.y > this._skinParts.richTextEditor._skinParts.toolbar.offsetTop) || (d.x - e.client.x > this._skinParts.richTextEditor._skinParts.toolbar.offsetLeft)) {
					return
				}
			}
			var b = this.injects().Preview.componentFromGlobalCoordinates(e.client.x, e.client.y, this.injects().Preview.selectionFilter, c, f);
			if (this._editedComponent.isMultiSelect) {
				this._mouseDownDragHandler(e, false, true)
			} else {
				if (b && b !== this._editedComponent) {
					this.injects().Editor.handleComponentClicked(b, e)
				} else {
					if (this._isInScope) {
						this._mouseDownDragHandler(e, this._editedComponent.useLayoutOnDrag(), true)
					}
				}
			}
		},
		_mouseDownDragHandler: function(e, b, a, d) {
			if (!d && this.getState("isSiteSegment") == "siteSegment") {
				this._openSiteSegmentPropertyPanel(e);
				return
			}
			if (!e || e.rightClick || !this._isInScope) {
				return
			}
			this._pageGroup = this.injects().Preview.getPreviewManagers().Viewer.getPageGroup();
			if (!this.injects().Editor.getEditorUI().getSkinPart("preview").getSkinPart("gridLines")) {
				this._gridLinesStateBeforeCompMovement = this._pageGroup.getState()
			}
			this._mouseComponentModifier.setEditedComponent(this._editedComponent);
			this._saveMouseDownInitState(e);
			this._isVerticalPush = b;
			this._enablePredraggingOperations();
			if (!b) {
				this._containersGeometry = this.getContainersGeometry(this.injects().Editor.getEditingScope());
				this._containersGeometryOfCurrentPageAndMasterPage = this.getContainersGeometryOfCurrentPageAndMasterPage();
				this._lastContainerContainingComponent = this.getEditedComponentContainerInPosition(this._mouseStartPoint.x, this._mouseStartPoint.y, this._containersGeometryOfCurrentPageAndMasterPage);
				var c = W.Preview.getPreviewManagers().Viewer.getCurrentPageNode();
				this._topBarHeight = W.Editor.getEditorUI().getSkinPart("mainEditorBar").getViewNode().getHeight() - 1;
				this._pageBottomAbs = c.getPosition().y + c.getLogic().getHeight() + this._topBarHeight;
				this._isStartOfDragBelowPage = this._mouseStartPoint.y > this._pageBottomAbs
			}
			W.Commands.executeCommand("EditCommands.SetVerticalGridLines", true);
			this.fireEvent("dragStarted", e);
			this._siteBody.addEvent(Constants.CoreEvents.MOUSE_MOVE, this._dragMouseMoveHandler);
			this._siteBody.addEvent(Constants.CoreEvents.MOUSE_UP, this._dragMouseUpHandler);
			window.addEvent(Constants.CoreEvents.BLUR, this._dragMouseBlurHandler);
			this._mouseComponentModifier.mouseDownDragHandler(e, b, a, d);
			this._mouseDownDragHandlerExtra(e, b, a)
		},
		_dragMouseUpHandler: function(a) {
			this._disablePredraggingOperations();
			W.Commands.executeCommand("EditCommands.SetVerticalGridLines", false);
			if (!this._isVerticalPush && this._mouseComponentModifier.getDragThresholdReached()) {
				this._handlePossibleDropInsideContainer(a, this._mouseComponentModifier.isPropertyPanelVisible())
			}
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_MOVE, this._dragMouseMoveHandler);
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_UP, this._dragMouseUpHandler);
			window.removeEvent(Constants.CoreEvents.BLUR, this._dragMouseBlurHandler);
			if (!this._editedComponent) {
				return
			}
			this.injects().Editor.highlightContainer();
			this.injects().Editor.highlightParentContainer();
			this._updateAnchorGuides()
		},
		editComponent: function(d, a, c) {
			W.UndoRedoManager._startTransaction(this._getCompScopeId());
			if (this._getEditModeState() == "inPlaceEdit") {
				this.stopEditRichText()
			}
			this._stopListeningToComp();
			this._isInScope = true;
			this._editedComponent = d;
			this._showPotentialHGroups = false;
			this._originalLocation = d.getPosition();
			this._setEditModeState("normalEdit");
			if (this.injects().Editor.getEditMode() == "MASTER_PAGE") {
				this.injects().Commands.executeCommand("Tooltip.ShowTip", {
					id: "part_of_master_page_ttid"
				}, d)
			}
			this.fitToComp(d);
			this.uncollapse();
			this._setDeleteButtonState();
			this._setDuplicateButtonState();
			this._zIndexChangedHandler(this._editedComponent);
			this._positionResizeAnchors();
			this._listenToUserEvents();
			var b = this;
			d.addEvent("autoSizeChange", this._onCompAutoSized);
			if (a) {
				this._mouseDownDragHandler(c, d.useLayoutOnDrag(), false)
			}
			this.refreshMultiSelect();
			if (this._editedComponent.isSiteSegment()) {
				this.setState("siteSegment", "isSiteSegment");
				this._setPushAndDragHandles(true)
			} else {
				this.setState("notSiteSegment", "isSiteSegment");
				this._setPushAndDragHandles(false)
			}
			this.fireEvent("componentSelected")
		},
		_setPushAndDragHandles: function(h) {
			var e = this.injects().Theme.getProperty("WEB_THEME_DIRECTORY");
			var k = "button/smart-tools-icons-large-small-blue-orange.png";
			var g = [this._skinParts.dragHandle.getViewNode(), this._skinParts.pushKnob.getViewNode()];
			if (h) {
				for (var c = 0;
				c <= 1;
				c++) {
					g[c].setStyle("right", "");
					g[c].setStyle("width", "25px");
					g[c].setStyle("height", "25px");
					g[c].setStyle("line-height", "25px");
					g[c].setStyle("margin-top", "0px");
					var b = this.injects().Preview.getPreviewSite();
					var f = b.$("PAGES_CONTAINER");
					var j = f.getPosition().x;
					var d = j + parseInt(f.getStyle("width"));
					g[c].setStyle("left", d - parseInt(g[c].getStyle("width")) + 2)
				}
				this._skinParts.dragHandle.getViewNode().setStyle("top", "14px");
				this._skinParts.pushKnob.getViewNode().setStyle("top", -parseInt(this._skinParts.pushKnob.getViewNode().getStyle("height")) - 5);
				if (this._editedComponent.getOriginalClassName() == "wysiwyg.viewer.components.PagesContainer") {
					var a = "url(" + e + "button/smart-icons-bg-blue-big.png) no-repeat 0 0";
					this._skinParts.dragHandle.getViewNode().setStyle("background", a);
					this._skinParts.pushKnob.getViewNode().setStyle("background", a);
					this._skinParts.dragHandle.setParameters({
						iconSrc: k,
						iconSize: {
							width: 25,
							height: 25
						},
						spriteOffset: {
							x: 1,
							y: 2
						}
					});
					this._skinParts.pushKnob.setParameters({
						iconSrc: k,
						iconSize: {
							width: 25,
							height: 25
						},
						spriteOffset: {
							x: 1,
							y: -51
						}
					})
				} else {
					var a = "url(" + e + "button/smart-icons-bg-orange-big.png) no-repeat 0 0";
					this._skinParts.dragHandle.getViewNode().setStyle("background", a);
					this._skinParts.pushKnob.getViewNode().setStyle("background", a);
					this._skinParts.dragHandle.setParameters({
						iconSrc: k,
						iconSize: {
							width: 25,
							height: 25
						},
						spriteOffset: {
							x: 1,
							y: -105
						}
					});
					this._skinParts.pushKnob.setParameters({
						iconSrc: k,
						iconSize: {
							width: 25,
							height: 25
						},
						spriteOffset: {
							x: 1,
							y: -163
						}
					})
				}
			} else {
				for (var c = 0;
				c <= 1;
				c++) {
					g[c].setStyle("right", "55%");
					g[c].setStyle("left", "");
					g[c].setStyle("width", "19px");
					g[c].setStyle("height", "19px");
					g[c].setStyle("line-height", "19px");
					g[c].setStyle("top", "6px");
					g[c].setStyle("margin-top", "-10px")
				}
				if (this.injects().Editor.getEditMode() == "MASTER_PAGE") {
					var a = "url(" + e + "button/smart-icons-bg-orange-small.png) no-repeat 0 0";
					this._skinParts.dragHandle.getViewNode().setStyle("background", a);
					this._skinParts.pushKnob.getViewNode().setStyle("background", a);
					this._skinParts.dragHandle.setParameters({
						iconSrc: k,
						iconSize: {
							width: 19,
							height: 19
						},
						spriteOffset: {
							x: 0,
							y: -132
						}
					});
					this._skinParts.pushKnob.setParameters({
						iconSrc: k,
						iconSize: {
							width: 19,
							height: 19
						},
						spriteOffset: {
							x: 0,
							y: -187
						}
					})
				} else {
					var a = "url(" + e + "button/smart-icons-bg-blue-small.png) no-repeat 0 0";
					this._skinParts.dragHandle.getViewNode().setStyle("background", a);
					this._skinParts.pushKnob.getViewNode().setStyle("background", a);
					this._skinParts.dragHandle.setParameters({
						iconSrc: k,
						iconSize: {
							width: 19,
							height: 19
						},
						spriteOffset: {
							x: 0,
							y: -25
						}
					});
					this._skinParts.pushKnob.setParameters({
						iconSrc: k,
						iconSize: {
							width: 19,
							height: 19
						},
						spriteOffset: {
							x: 0,
							y: -79
						}
					})
				}
			}
		},
		_disablePredraggingOperations: function() {
			if (!this._isVerticalPush) {
				this._showControllers();
				this._setPushAndDragHandles(false)
			}
			if (this.injects().Editor.getEditorUI().getSkinPart("preview").getSkinPart("gridLines")) {
				W.Commands.executeCommand("EditCommands.SetVerticalGridLines", false)
			} else {
				this._pageGroup = this._pageGroup || this.injects().Preview.getPreviewManagers().Viewer.getPageGroup();
				if (this._pageGroup.getState() == "showGridLines" && this._gridLinesStateBeforeCompMovement != "showGridLines" && this._draggingIsInProcess) {
					this._pageGroup.toggleGrid()
				}
			}
			this._editedComponent.getViewNode().setStyle("z-index", "auto");
			this._editedComponent.getViewNode().setStyle("position", "absolute");
			this._draggingIsInProcess = false
		}
	}
});
W.Experiments.registerExperimentComponent("MCM", "New", {
	name: "experiments.wysiwyg.editor.components.ComponentEditBoxMCM",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.ComponentEditBox",
		Binds: ["_mouseDownHandler", "_mouseDownDragHandler", "_mouseUpHandler", "_topResizeHandler", "_bottomPushResizeHandler", "_bottomResizeHandler", "_rightResizeHandler", "_leftResizeHandler", "_topRightResizeHandler", "_topLeftResizeHandler", "_bottomRightResizeHandler", "_bottomLeftResizeHandler", "_rightResizeLogic", "_leftResizeLogic", "_topResizeLogic", "_bottomResizeLogic", "fitToComp", "_deleteButtonClickHandler", "_onScreenResize", "_doubleClickHandler", "_editRichText", "stopEditRichText", "_dragVerticalyHandler", "_moveForwardHandler", "_moveBackHandler", "showAnchorsHandler", "_updateRichTextDataAndSize", "_onEditorReady", "_onCompAutoSized", "_positionResizeAnchors", "_dragMouseMoveHandler", "_dragMouseUpHandler", "_dragMouseBlurHandler", "_resizeMouseUpHandler", "_resizeMouseMoveHandler", "_clearAnchorGuides"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			W.Classes.get("mobile.core.components.Container", function(f) {
				this._containerBaseClass = f
			}.bind(this));
			this.setMaxH(this.imports.Page.MAX_HEIGHT + 50);
			this.setMaxW(5000);
			this.setCommand("WEditorCommands.SetSelectedCompPositionSize");
			this._siteBody = $$("body");
			this._previewManager = this.injects().Preview;
			var e = this.injects().Viewer;
			e.addEvent(e.SCREEN_RESIZE_EVENT, this._onScreenResize);
			this.injects().Commands.registerCommandAndListener(Constants.EditorUI.RESIZE_HANDLES_CHANGED, this, this._positionResizeAnchors);
			this.injects().Commands.registerCommandAndListener(Constants.EditorUI.START_EDIT_RICH_TEXT, this, this._editRichText);
			var d = this.injects().Editor;
			d.addEvent(d.EDITOR_READY, this._onEditorReady);
			this._mouseComponentModifier = new(W.Classes.get("wysiwyg.editor.managers.MouseComponentModifier"))()
		},
		_preResizeOperations: function(a) {
			this._clearAnchorGuides();
			this.fireEvent("resizeStarted", a);
			this._mouseComponentModifier.setEditedComponent(this._editedComponent)
		},
		_topResizeHandler: function(a) {
			if (!this._enabledSides(W.BaseComponent.ResizeSides.TOP)) {
				return
			}
			this._setEditedComponentMinimumHeightToPhysicalHeight();
			this._preResizeOperations(a);
			this._getResizeResultingChanges = this._mouseComponentModifier.getTopResizeResultingChanges;
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler);
			this._mouseComponentModifier.topResizeHandler(a)
		},
		_bottomPushResizeHandler: function(a) {
			this._bottomResizeHandler(a)
		},
		_bottomResizeHandler: function(a) {
			if (!this._enabledSides(W.BaseComponent.ResizeSides.BOTTOM)) {
				return
			}
			this._setEditedComponentMinimumHeightToPhysicalHeight();
			this._preResizeOperations(a);
			this._getResizeResultingChanges = this._mouseComponentModifier.getBottomResizeResultingChanges;
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler);
			this._mouseComponentModifier.bottomResizeHandler(a)
		},
		_rightResizeHandler: function(a) {
			if (!this._enabledSides(W.BaseComponent.ResizeSides.RIGHT)) {
				return
			}
			this._preResizeOperations(a);
			this._getResizeResultingChanges = this._mouseComponentModifier.getRightResizeResultingChanges;
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler);
			this._mouseComponentModifier.rightResizeHandler(a)
		},
		_leftResizeHandler: function(a) {
			if (!this._enabledSides(W.BaseComponent.ResizeSides.LEFT)) {
				return
			}
			this._preResizeOperations(a);
			this._getResizeResultingChanges = this._mouseComponentModifier.getLeftResizeResultingChanges;
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler);
			this._mouseComponentModifier.leftResizeHandler(a)
		},
		_topRightResizeHandler: function(a) {
			if (!this._enabledSides(W.BaseComponent.ResizeSides.RIGHT)) {
				return
			}
			this._setEditedComponentMinimumHeightToPhysicalHeight();
			this._preResizeOperations(a);
			this._getResizeResultingChanges = this._mouseComponentModifier.getTopRightResizeResultingChanges;
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler);
			this._mouseComponentModifier.topRightResizeHandler(a)
		},
		_topLeftResizeHandler: function(a) {
			if (!this._enabledSides(W.BaseComponent.ResizeSides.LEFT)) {
				return
			}
			this._setEditedComponentMinimumHeightToPhysicalHeight();
			this._preResizeOperations(a);
			this._getResizeResultingChanges = this._mouseComponentModifier.getTopLeftResizeResultingChanges;
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler);
			this._mouseComponentModifier.topLeftResizeHandler(a)
		},
		_bottomRightResizeHandler: function(a) {
			if (!this._enabledSides(W.BaseComponent.ResizeSides.RIGHT)) {
				return
			}
			this._setEditedComponentMinimumHeightToPhysicalHeight();
			this._preResizeOperations(a);
			this._getResizeResultingChanges = this._mouseComponentModifier.getBottomRightResizeResultingChanges;
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler);
			this._mouseComponentModifier.bottomRightResizeHandler(a)
		},
		_bottomLeftResizeHandler: function(a) {
			if (!this._enabledSides(W.BaseComponent.ResizeSides.LEFT)) {
				return
			}
			this._setEditedComponentMinimumHeightToPhysicalHeight();
			this._preResizeOperations(a);
			this._getResizeResultingChanges = this._mouseComponentModifier.getBottomLeftResizeResultingChanges;
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler);
			this._mouseComponentModifier.bottomLeftResizeHandler(a)
		},
		_resizeMouseUpHandler: function() {
			if (this._editedComponent) {
				this._siteBody.removeEvent("mousemove", this._resizeMouseMoveHandler);
				this._siteBody.removeEvent("mouseup", this._resizeMouseUpHandler);
				this._updateAnchorGuides();
				if (this._getEditModeState() == "inPlaceEdit") {
					this._skinParts.richTextEditor.stopResize()
				}
			}
		},
		_resizeMouseMoveHandler: function(b) {
			var c = this._getResizeResultingChanges(b);
			if (this._editedComponent && this._editedComponent.isEditableInPlace()) {
				if (!isNaN(c.width)) {
					this._skinParts.richTextEditor.setWidth(c.width)
				}
				if (!isNaN(c.height)) {
					this._skinParts.richTextEditor.setMinHeight(this._editedComponent.getMinPhysicalHeight() + this._editedComponent.getExtraPixels().height);
					this._skinParts.richTextEditor.setHeight(c.height)
				}
			}
			if (this._editedComponent && c.context) {
				var a = this._editedComponent.getHeight() + this._editedComponent.getExtraPixels().height;
				var d = this._editedComponent.getViewNode().getSize().y;
				if (a < d) {
					this._showMinHeightMark(a)
				}
			}
		},
		_resizeHandler: function(b, a) {},
		_rightResizeLogic: function(a) {},
		_leftResizeLogic: function(a) {},
		_topResizeLogic: function(a) {},
		_bottomResizeLogic: function(a) {},
		_getEnforceAnchors: function(a) {},
		_fireChangeEvent: function(a, b) {},
		_setComponentPosSize: function(b, a) {},
		_saveMouseDownInitState: function(b) {
			this._mouseStartPoint = {
				x: b.page.x,
				y: b.page.y
			};
			this._compStartPoint = {
				x: this._editedComponent.getX(),
				y: this._editedComponent.getY()
			};
			this._minY = this._editedComponent.getMinDragY();
			var a = W.Preview.getPreviewManagers().Viewer.getCurrentPageNode();
			this._topBarHeight = W.Editor.getEditorUI().getSkinPart("mainEditorBar").getViewNode().getHeight() - 1;
			this._pageBottomAbs = a.getPosition().y + a.getLogic().getHeight() + this._topBarHeight
		},
		_getAllSelectedComponents: function() {
			return this._mouseComponentModifier._getAllSelectedComponents()
		},
		_toggleGridScaleIfControlPressed: function(a) {},
		roundToGrid: function(a, b) {},
		_mouseDownDragHandlerExtra: function(c, b, a) {},
		_mouseUpHandler: function(b, a) {},
		_mouseDownDragHandler: function(e, b, a, d) {
			if (!d && this.getState("isSiteSegment") == "siteSegment") {
				this._openSiteSegmentPropertyPanel(e);
				return
			}
			if (!e || e.rightClick || !this._isInScope) {
				return
			}
			this._pageGroup = this.injects().Preview.getPreviewManagers().Viewer.getPageGroup();
			if (!this.injects().Editor.getEditorUI().getSkinPart("preview").getSkinPart("gridLines")) {
				this._gridLinesStateBeforeCompMovement = this._pageGroup.getState()
			}
			this._mouseComponentModifier.setEditedComponent(this._editedComponent);
			this._saveMouseDownInitState(e);
			this._isVerticalPush = b;
			this._enablePredraggingOperations();
			if (!b) {
				this._containersGeometry = this.getContainersGeometry(this.injects().Editor.getEditingScope());
				this._containersGeometryOfCurrentPageAndMasterPage = this.getContainersGeometryOfCurrentPageAndMasterPage();
				this._lastContainerContainingComponent = this.getEditedComponentContainerInPosition(this._mouseStartPoint.x, this._mouseStartPoint.y, this._containersGeometryOfCurrentPageAndMasterPage);
				var c = W.Preview.getPreviewManagers().Viewer.getCurrentPageNode();
				this._topBarHeight = W.Editor.getEditorUI().getSkinPart("mainEditorBar").getViewNode().getHeight() - 1;
				this._pageBottomAbs = c.getPosition().y + c.getLogic().getHeight() + this._topBarHeight;
				this._isStartOfDragBelowPage = this._mouseStartPoint.y > this._pageBottomAbs
			}
			this._siteBody.addEvent(Constants.CoreEvents.MOUSE_MOVE, this._dragMouseMoveHandler);
			this._siteBody.addEvent(Constants.CoreEvents.MOUSE_UP, this._dragMouseUpHandler);
			window.addEvent(Constants.CoreEvents.BLUR, this._dragMouseBlurHandler);
			this._mouseComponentModifier.mouseDownDragHandler(e, b, a, d);
			this._mouseDownDragHandlerExtra(e, b, a)
		},
		_enablePredraggingOperations: function() {
			if (!this._isVerticalPush) {
				this._hideControllers()
			}
			if (this.injects().Editor.getEditorUI().getSkinPart("preview").getSkinPart("gridLines")) {
				W.Commands.executeCommand("EditCommands.SetVerticalGridLines", true)
			} else {
				if (this._pageGroup.getState() != "showGridLines") {
					this._pageGroup.toggleGrid()
				}
			}
			this._editedComponent.getViewNode().setStyle("z-index", 999999);
			this._editedComponent.getViewNode().setStyle("position", "relative");
			this._draggingIsInProcess = true
		},
		_disablePredraggingOperations: function() {
			if (!this._isVerticalPush) {
				this._showControllers()
			}
			if (this.injects().Editor.getEditorUI().getSkinPart("preview").getSkinPart("gridLines")) {
				W.Commands.executeCommand("EditCommands.SetVerticalGridLines", false)
			} else {
				this._pageGroup = this._pageGroup || this.injects().Preview.getPreviewManagers().Viewer.getPageGroup();
				if (this._pageGroup.getState() == "showGridLines" && this._gridLinesStateBeforeCompMovement != "showGridLines" && this._draggingIsInProcess) {
					this._pageGroup.toggleGrid()
				}
			}
			this._editedComponent.getViewNode().setStyle("z-index", "auto");
			this._editedComponent.getViewNode().setStyle("position", "absolute");
			this._draggingIsInProcess = false
		},
		_dragMouseMoveHandler: function(a) {
			this._clearAnchorGuides();
			if (!this._mouseComponentModifier.getDragThresholdReached()) {
				return
			}
			if (!this._isVerticalPush) {
				this._handlePossibleContainerDragOver(a.client.x, a.client.y)
			}
			this._pageGroup.refreshGrid();
			this.fireEvent("componentEditBoxMoved")
		},
		_dragMouseUpHandler: function(a) {
			this._disablePredraggingOperations();
			if (!this._isVerticalPush && this._mouseComponentModifier.getDragThresholdReached()) {
				this._handlePossibleDropInsideContainer(a, this._mouseComponentModifier.isPropertyPanelVisible())
			}
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_MOVE, this._dragMouseMoveHandler);
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_UP, this._dragMouseUpHandler);
			window.removeEvent(Constants.CoreEvents.BLUR, this._dragMouseBlurHandler);
			if (!this._editedComponent) {
				return
			}
			this.injects().Editor.highlightContainer();
			this.injects().Editor.highlightParentContainer();
			this._updateAnchorGuides()
		},
		_dragMouseBlurHandler: function() {
			window.removeEvent(Constants.CoreEvents.BLUR, this._dragMouseBlurHandler);
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_MOVE, this._dragMouseMoveHandler);
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_UP, this._dragMouseUpHandler)
		}
	}
});
W.Experiments.registerExperimentComponent("MasterPage", "New", {
	name: "experiments.wysiwyg.editor.components.ComponentEditBoxMasterPageNew",
	skinParts: {
		topLeft: {
			type: "htmlElement"
		},
		left: {
			type: "htmlElement"
		},
		bottomLeft: {
			type: "htmlElement"
		},
		bottom: {
			type: "htmlElement"
		},
		pushKnob: {
			type: "htmlElement"
		},
		bottomRight: {
			type: "htmlElement"
		},
		right: {
			type: "htmlElement"
		},
		topRight: {
			type: "htmlElement"
		},
		top: {
			type: "htmlElement"
		},
		minHeightMark: {
			type: "htmlElement"
		},
		deleteButton: {
			type: "htmlElement"
		},
		duplicateButton: {
			type: "htmlElement"
		},
		moveForwardButton: {
			type: "htmlElement"
		},
		moveBackButton: {
			type: "htmlElement"
		},
		anchorGuides: {
			type: "htmlElement"
		},
		controls: {
			type: "htmlElement"
		},
		topKnob: {
			type: "htmlElement"
		},
		topRightKnob: {
			type: "htmlElement"
		},
		rightKnob: {
			type: "htmlElement"
		},
		bottomRightKnob: {
			type: "htmlElement"
		},
		bottomKnob: {
			type: "htmlElement"
		},
		bottomLeftKnob: {
			type: "htmlElement"
		},
		leftKnob: {
			type: "htmlElement"
		},
		topLeftKnob: {
			type: "htmlElement"
		},
		dragHandle: {
			type: "htmlElement"
		},
		multiSelectLayer: {
			type: "htmlElement"
		},
		richTextEditor: {
			type: "wysiwyg.editor.components.richtext.WRichTextEditor"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.ComponentEditBox",
		_states: {
			editMode: ["normalEdit", "inPlaceEdit", "differentScopeEdit", "nonDragEdit"],
			isMasterPage: ["masterPage", "notMasterPage"],
			isSiteSegment: ["siteSegment", "notSiteSegment"]
		},
		_getEditModeState: function() {
			return this.getState("editMode")
		},
		_setEditModeState: function(a) {
			this.setState(a, "editMode")
		},
		_setIsMasterPage: function() {
			var a = this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer");
			var c = this.injects().Editor.getComponentScope(this._editedComponent);
			var b = !a && c == "MASTER_PAGE" ? "masterPage" : "notMasterPage";
			this.setState(b, "isMasterPage")
		},
		_saveMouseDownInitState: function(a) {
			this._mouseStartPoint = {
				x: a.page.x,
				y: a.page.y
			};
			this._compStartPoint = {
				x: this._editedComponent.getX(),
				y: this._editedComponent.getY()
			};
			this._originalContainer = this._editedComponent.getParentComponent();
			this._dragThresholdReached = false
		},
		editComponent: function(d, a, c) {
			W.UndoRedoManager._startTransaction(this._getCompScopeId());
			if (this._getEditModeState() == "inPlaceEdit") {
				this.stopEditRichText()
			}
			this._stopListeningToComp();
			this._isInScope = true;
			this._editedComponent = d;
			this._showPotentialHGroups = false;
			this._originalLocation = d.getPosition();
			if (this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.HeaderContainer") || this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer") || this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.FooterContainer")) {
				this.setState("siteSegment", "isSiteSegment")
			} else {
				this.setState("notSiteSegment", "isSiteSegment")
			}
			this._setEditModeState("normalEdit");
			if (this.injects().Editor.getEditMode() == "MASTER_PAGE") {
				this.injects().Commands.executeCommand("Tooltip.ShowTip", {
					id: "part_of_master_page_ttid"
				}, d)
			}
			this.fitToComp(d);
			this.uncollapse();
			this._setDeleteButtonState();
			this._setDuplicateButtonState();
			this._zIndexChangedHandler(this._editedComponent);
			this._positionResizeAnchors();
			this._listenToUserEvents();
			var b = this;
			d.addEvent("autoSizeChange", this._onCompAutoSized);
			if (a) {
				this._mouseDownDragHandler(c, d.useLayoutOnDrag(), false)
			}
			this.refreshMultiSelect()
		},
		_showControllers: function(d, b, c, a) {
			this._skinParts.controls.uncollapse();
			this._skinParts.dragHandle.uncollapse();
			this._skinParts.topLeftKnob.uncollapse();
			this._skinParts.topRightKnob.uncollapse();
			this._skinParts.bottomLeftKnob.uncollapse();
			this._skinParts.bottomRightKnob.uncollapse();
			this._skinParts.pushKnob.uncollapse();
			if (!this._leftEnabled) {
				this._skinParts.leftKnob.collapse();
				this._skinParts.topLeftKnob.collapse();
				this._skinParts.bottomLeftKnob.collapse()
			} else {
				this._skinParts.leftKnob.uncollapse()
			}
			if (!this._rightEnabled) {
				this._skinParts.rightKnob.collapse();
				this._skinParts.topRightKnob.collapse();
				this._skinParts.bottomRightKnob.collapse()
			} else {
				this._skinParts.rightKnob.uncollapse()
			}
			if (!this._topEnabled) {
				this._skinParts.topKnob.collapse();
				this._skinParts.topLeftKnob.collapse();
				this._skinParts.topRightKnob.collapse()
			} else {
				this._skinParts.topKnob.uncollapse()
			}
			if (!this._bottomEnabled) {
				this._skinParts.pushKnob.collapse();
				this._skinParts.bottomKnob.collapse();
				this._skinParts.bottomLeftKnob.collapse();
				this._skinParts.bottomRightKnob.collapse()
			} else {
				this._skinParts.bottomKnob.uncollapse()
			}
			if (this.getState("isSiteSegment") == "siteSegment") {
				this._skinParts.bottomKnob.collapse();
				this._skinParts.bottomLeftKnob.collapse();
				this._skinParts.bottomRightKnob.collapse()
			}
		},
		_dragVerticalyHandler: function(a) {
			this._mouseDownDragHandler(a, true, false, true)
		},
		_mouseDownHandler: function(d) {
			W.UndoRedoManager._startTransaction(this._getCompScopeId());
			this._disablePredraggingOperations();
			d.stopPropagation();
			if (this._actionsMap[d.target.get("skinPart")]) {
				this[this._actionsMap[d.target.get("skinPart")]](d);
				return
			}
			var b, e;
			if (d.control && this._editedComponent) {
				b = this._editedComponent.getViewNode().getParent();
				e = false
			}
			if (this._getEditModeState() == "inPlaceEdit") {
				var c = this._previewManager.getGlobalRefNodePositionInEditor(this._editedComponent, true);
				if ((d.client.y - c.y > this._skinParts.richTextEditor._skinParts.toolbar.offsetTop) || (c.x - d.client.x > this._skinParts.richTextEditor._skinParts.toolbar.offsetLeft)) {
					return
				}
			}
			var a = this.injects().Preview.componentFromGlobalCoordinates(d.client.x, d.client.y, this.injects().Preview.selectionFilter, b, e);
			if (this._editedComponent.isMultiSelect) {
				this._mouseDownDragHandler(d, false, true)
			} else {
				if (a && a !== this._editedComponent) {
					this.injects().Editor.handleComponentClicked(a, d)
				} else {
					if (this._isInScope) {
						this._mouseDownDragHandler(d, this._editedComponent.useLayoutOnDrag(), true)
					}
				}
			}
		},
		_enablePredraggingOperations: function() {
			this._hideControllers();
			if (this.injects().Editor.getEditorUI().getSkinPart("preview").getSkinPart("gridLines")) {
				W.Commands.executeCommand("EditCommands.SetVerticalGridLines", true)
			} else {
				if (this._pageGroup.getState() != "showGridLines") {
					this._pageGroup.toggleGrid()
				}
			}
			this._editedComponent.getViewNode().setStyle("z-index", 999999);
			this._editedComponent.getViewNode().setStyle("position", "relative");
			this._draggingIsInProcess = true
		},
		_disablePredraggingOperations: function() {
			this._showControllers();
			if (this.injects().Editor.getEditorUI().getSkinPart("preview").getSkinPart("gridLines")) {
				W.Commands.executeCommand("EditCommands.SetVerticalGridLines", false)
			} else {
				this._pageGroup = this._pageGroup || this.injects().Preview.getPreviewManagers().Viewer.getPageGroup();
				if (this._pageGroup.getState() == "showGridLines" && this._gridLinesStateBeforeCompMovement != "showGridLines" && this._draggingIsInProcess) {
					this._pageGroup.toggleGrid()
				}
			}
			this._editedComponent.getViewNode().setStyle("z-index", "auto");
			this._editedComponent.getViewNode().setStyle("position", "absolute");
			this._draggingIsInProcess = false
		},
		_openSiteSegmentPropertyPanel: function(a) {
			this.injects().Editor.openComponentPropertyPanel(this._editedComponent)
		},
		_mouseDownDragHandler: function(c, d, b, k) {
			if (!k && this.getState("isSiteSegment") == "siteSegment") {
				this._openSiteSegmentPropertyPanel(c);
				return
			}
			if (!c || c.rightClick || !this._isInScope) {
				return
			}
			this._pageGroup = this.injects().Preview.getPreviewManagers().Viewer.getPageGroup();
			if (!this.injects().Editor.getEditorUI().getSkinPart("preview").getSkinPart("gridLines")) {
				this._gridLinesStateBeforeCompMovement = this._pageGroup.getState()
			}
			this._saveMouseDownInitState(c);
			this._enablePredraggingOperations();
			if (!d) {
				this._containersGeometry = this.getContainersGeometry(this.injects().Editor.getEditingScope());
				this._containersGeometryOfCurrentPageAndMasterPage = this.getContainersGeometryOfCurrentPageAndMasterPage();
				this._lastContainerContainingComponent = this.getEditedComponentContainerInPosition(this._mouseStartPoint.x, this._mouseStartPoint.y, this._containersGeometryOfCurrentPageAndMasterPage);
				var j = W.Preview.getPreviewManagers().Viewer.getCurrentPageNode();
				this._topBarHeight = W.Editor.getEditorUI().getSkinPart("mainEditorBar").getViewNode().getHeight() - 1;
				this._pageBottomAbs = j.getPosition().y + j.getLogic().getHeight() + this._topBarHeight;
				this._isStartOfDragBelowPage = this._mouseStartPoint.y > this._pageBottomAbs
			}
			if (d) {
				var e = this._editedComponent.getMinDragY()
			}
			var g = $$("body");
			var i = false;
			var h = function(p) {
					var o = this._toggleGridScaleIfControlPressed(p);
					this._clearAnchorGuides();
					var m = p.page.x;
					var r = p.page.y;
					var n = m - this._mouseStartPoint.x;
					var l = r - this._mouseStartPoint.y;
					this._dragThresholdReached = this._dragThresholdReached || Math.abs(n) > 5 || Math.abs(l) > 5;
					if (!this._dragThresholdReached) {
						return
					}
					if (d) {
						var q = Math.max(this.roundToGrid(this._compStartPoint.y + l, o), e);
						this.executeCommand({
							y: q,
							enforceAnchors: true
						})
					} else {
						this.executeCommand({
							x: this.roundToGrid(this._compStartPoint.x + n, o),
							y: this.roundToGrid(this._compStartPoint.y + l, o)
						});
						this._handlePossibleContainerDragOver(p.client.x, p.client.y)
					}
					this._pageGroup.refreshGrid();
					this.fireEvent("componentEditBoxMoved")
				}.bind(this);
			var a = function(o) {
					this._disablePredraggingOperations();
					var m = o.client.y + window.getScroll().y;
					var l = (m > this._pageBottomAbs);
					this._editedComponent.setShowOnAllPagesChangeability(!l);
					var n = this.injects().Editor.getPropertyPanel();
					var p = n && n.isEnabled();
					if (!d && this._dragThresholdReached) {
						this._handlePossibleDropInsideContainer(o, p)
					}
					g.removeEvent(Constants.CoreEvents.MOUSE_MOVE, h);
					g.removeEvent(Constants.CoreEvents.MOUSE_UP, a);
					window.removeEvent(Constants.CoreEvents.BLUR, f);
					if (!this._editedComponent) {
						return
					}
					this.injects().Editor.highlightContainer();
					this.injects().Editor.highlightParentContainer();
					if (l && this.injects().Editor.getComponentScope(this._editedComponent) == this.injects().Editor.EDIT_MODE.CURRENT_PAGE) {
						this.injects().Editor.moveCurrentComponentToOtherScope(p)
					}
					if (this._editedComponent.getX() != this._compStartPoint.x || this._editedComponent.getY() != this._compStartPoint.y) {
						this.injects().Layout.reportMove(this._getAllSelectedComponents())
					}
					this._updateAnchorGuides();
					this._mouseUpHandler(o, b);
					W.UndoRedoManager._endTransaction(this._getCompScopeId())
				}.bind(this);
			var f = function() {
					window.removeEvent(Constants.CoreEvents.BLUR, f);
					g.removeEvent(Constants.CoreEvents.MOUSE_MOVE, h);
					g.removeEvent(Constants.CoreEvents.MOUSE_UP, a)
				};
			g.addEvent(Constants.CoreEvents.MOUSE_MOVE, h);
			g.addEvent(Constants.CoreEvents.MOUSE_UP, a);
			window.addEvent(Constants.CoreEvents.BLUR, f);
			this._mouseDownDragHandlerExtra(c, d, b)
		},
		getContainersGeometryOfCurrentPageAndMasterPage: function() {
			var a = [];
			a = a.concat(this.getContainersGeometry(this.injects().Editor.getScopeNode(this.injects().Editor.EDIT_MODE.CURRENT_PAGE), false));
			a = a.concat(this.getContainersGeometry(this.injects().Editor.getScopeNode(this.injects().Editor.EDIT_MODE.MASTER_PAGE), true));
			return a
		},
		getContainersGeometry: function(k, h) {
			var e = this.injects().Editor;
			h = typeof(h) == "boolean" ? h : e.getEditMode() == e.EDIT_MODE.MASTER_PAGE;
			var a = [];
			var g = k.getElements("[comp]");
			if (!h) {
				g.unshift(k)
			}
			var j = this._getAllSelectedComponents();
			for (var c = 0;
			c < g.length;
			c++) {
				var b = g[c];
				if (!b.getLogic) {
					continue
				}
				var m = b.getLogic();
				if (!h || b.getParent("[comp=wysiwyg.viewer.components.PageGroup]") == null) {
					if (instanceOf(m, this._containerBaseClass) && m.isContainer() && !this._logicArrayContains(j, m)) {
						var f = m._getEditBoxReferenceNode();
						var d = this._previewManager.getNodeGlobalPosition(f);
						var l = f.getSize();
						a.push({
							htmlNode: b,
							logic: m,
							x: d.x,
							y: d.y,
							width: l.x,
							height: l.y
						})
					}
				}
			}
			return a
		},
		addEditedComponentToContainer: function(a, f) {
			var g = this._editedComponent;
			var c = g.getViewNode();
			if (c != a && c.getParent("[comp]") != a) {
				var h = a.getLogic();
				var j = this._getAllSelectedComponents();
				var d = this.injects().Preview.getGlobalRefNodePositionInEditor(h);
				f = f || this.injects().Preview.getGlobalRefNodePositionInEditor(g);
				var b, e;
				for (b = 0;
				b < j.length; ++b) {
					e = j[b];
					h.addChild(e)
				}
				this.injects().Layout.reportReparent(j, this._originalContainer);
				this.executeCommand({
					x: f.x - d.x,
					y: f.y - d.y
				})
			}
			this.injects().Editor.setSelectedComp(g, undefined, undefined, true)
		},
		_handlePossibleDropInsideContainer: function() {
			if (this._draggedOverContainer && !this._areContainersEqual(this._lastContainerContainingComponent, this._draggedOverContainer)) {
				this.addEditedComponentToContainer(this._draggedOverContainer.htmlNode)
			} else {
				this.addEditedComponentToContainer(this._editedComponent.getParentComponent().getViewNode())
			}
		},
		_handlePossibleContainerDragOver: function(a, f) {
			this._draggedOverContainer = this.getEditedComponentContainerInPosition(a + window.pageXOffset, f + window.pageYOffset, this._containersGeometryOfCurrentPageAndMasterPage);
			var e = this._areContainersEqual(this._draggedOverContainer, this._lastContainerContainingComponent);
			var d = this.injects().Editor.getComponentScope(this._editedComponent) == this.injects().Editor.EDIT_MODE.MASTER_PAGE;
			this.injects().Editor.highlightParentContainer(this._lastContainerContainingComponent);
			var c;
			if (!e) {
				this.injects().Editor.highlightContainer(this._draggedOverContainer);
				this.injects().Editor.highlightParentContainer();
				if (this._draggedOverContainer) {
					c = this.injects().Editor.getComponentScope(this._draggedOverContainer.logic) == this.injects().Editor.EDIT_MODE.MASTER_PAGE ? "masterPage" : "notMasterPage";
					this.setState(c, "isMasterPage")
				} else {
					c = d ? "masterPage" : "notMasterPage";
					this.setState(c, "isMasterPage")
				}
			} else {
				this.injects().Editor.highlightContainer();
				c = d ? "masterPage" : "notMasterPage";
				this.setState(c, "isMasterPage")
			}
			var b = f + window.getScroll().y;
			if (b > this._pageBottomAbs) {
				this.setState("masterPage", "isMasterPage")
			}
			this._showDraggingRelatedToolTip(b)
		},
		_areContainersEqual: function(b, a) {
			return (b && a && b.logic == a.logic)
		},
		_showDraggingRelatedToolTip: function(d) {
			var a = this._checkIfToShowMakePageLongerToolTip(d);
			var f = this._areContainersEqual(this._draggedOverContainer, this._lastContainerContainingComponent);
			var b = this._draggedOverContainer && this.injects().Editor.getComponentScope(this._draggedOverContainer.logic) == this.injects().Editor.getComponentScope(this._editedComponent);
			var c = (d > this._pageBottomAbs);
			if (!a && c && !this._isStartOfDragBelowPage) {
				a = "drag_to_footer_and_change_state_ttid"
			} else {
				if (!a && this._draggedOverContainer && !f && !b) {
					var e = this._draggedOverContainer.logic;
					if (e.isInstanceOfClass("wysiwyg.viewer.components.HeaderContainer")) {
						a = "drag_to_header_and_change_state_ttid"
					} else {
						if (e.isInstanceOfClass("mobile.core.components.Page")) {
							a = "drag_to_page_and_change_state_ttid"
						} else {
							a = this.injects().Editor.getComponentScope(this._draggedOverContainer.logic) == this.injects().Editor.EDIT_MODE.CURRENT_PAGE ? "drag_to_container_on_page_and_change_state_ttid" : "drag_to_container_on_all_pages_and_change_state_ttid"
						}
					}
				}
			}
			if (a) {
				this.injects().Commands.executeCommand("Tooltip.ShowTip", {
					id: a
				}, this._editedComponent)
			} else {
				this.injects().Commands.executeCommand("Tooltip.CloseTip")
			}
		},
		_checkIfToShowMakePageLongerToolTip: function(c) {
			var b = 20;
			var a = this.injects().Editor.getComponentScope(this._editedComponent) == this.injects().Editor.EDIT_MODE.CURRENT_PAGE;
			if (a && c > this._pageBottomAbs - b && c < this._pageBottomAbs + b) {
				return "try_to_make_the_page_longer_ttid"
			} else {
				return null
			}
		},
		removeEditedComponentFromContainer: function() {
			var c = this._editedComponent.getParentComponent();
			var a = this._getAllSelectedComponents();
			for (var b = 0;
			b < a.length;
			b++) {
				c.removeChild(a[b])
			}
			this.injects().Layout.reportDeleteComponent(c)
		},
		getEditedComponentContainerInPosition: function(f, e, j) {
			var g;
			var d;
			g = null;
			d = this._editedComponent.getViewNode();
			for (var c = 0;
			c < j.length;
			c++) {
				var a = j[c];
				if (d != a.htmlNode) {
					var b = a.logic.isInstanceOfClass("wysiwyg.viewer.components.ScreenWidthContainer") || a.logic.isInstanceOfClass("mobile.core.components.Page");
					if ((b || (f > a.x && f < (a.x + a.width))) && e > a.y && e < (a.y + a.height)) {
						var h = a.logic;
						if (this._editedComponent.isContainable(h)) {
							g = a
						}
					}
				}
			}
			return g
		},
		_resizeHandler: function(f, d) {
			if (!this._isInScope) {
				return
			}
			W.UndoRedoManager._startTransaction(this._getCompScopeId());
			this._clearAnchorGuides();
			this.injects().Layout.reportResizeStart();
			var c = this._editedComponent;
			var g = this._siteBody;
			this._editedComponent.saveCurrentDimensions();
			this._resizeMouseStartPoint = {
				x: d.client.x,
				y: d.client.y
			};
			if (this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer")) {
				this._minCompContentH = this.injects().Layout.getComponentMinResizeHeight(this.injects().Preview.getPreviewManagers().Viewer.getCurrentPageNode().getLogic())
			} else {
				this._minCompContentH = this.injects().Layout.getComponentMinResizeHeight(this._editedComponent)
			}
			var b = this._editedComponent.getPhysicalHeight();
			if (this._minCompContentH > b) {
				this._minCompContentH = 10
			}
			this._resizeStartComponentGeometry = {
				x: c.getX(),
				y: c.getY(),
				width: c.getWidth(),
				height: c.getHeight()
			};
			this._fireChangeEvent("layoutResizeStart", this._resizeStartComponentGeometry);
			var e = function(h) {
					f(h)
				}.bind(this);
			var a = function() {
					this._pushResize = false;
					g.removeEvent("mousemove", e);
					g.removeEvent("mouseup", a);
					this.injects().Layout.reportResize([c]);
					if (this._editedComponent) {
						this._editedComponent.fireEvent("resizeEnd");
						window.fireEvent("resizeEnd");
						this._updateAnchorGuides();
						if (this._getEditModeState() == "inPlaceEdit") {
							this._skinParts.richTextEditor.stopResize()
						}
					}
					this._fireChangeEvent("layoutResizeStop");
					W.UndoRedoManager._endTransaction(this._getCompScopeId())
				}.bind(this);
			g.addEvent("mousemove", e);
			g.addEvent("mouseup", a)
		}
	}
});
W.Experiments.registerExperimentComponent("MasterPage", "New", {
	name: "experiments.wysiwyg.editor.components.ContainerHighLightMasterPageNew",
	skinParts: {
		outline: {
			type: "htmlElement"
		},
		label: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.ContainerHighLight",
		_states: {
			componentScope: ["page", "master"],
			highlightAllWidth: ["enabled"],
			highlightContainerType: ["attachToContainer", "parentContainer"]
		},
		initialize: function(c, a, b) {
			this._siteBody = $$("body");
			this._previewManager = this.injects().Preview;
			this._highlightContainerType = b.highlightContainerType;
			this.parent(c, a, b)
		},
		_onAllSkinPartsReady: function() {
			this.setState(this._highlightContainerType == "parentContainer" ? "parentContainer" : "attachToContainer", "highlightContainerType");
			this.collapse()
		},
		highlightComponent: function(a) {
			this._highlightedComponent = a;
			if (a) {
				this._skinParts.label.set("text", this._getAttachText(a.logic));
				this._highlightContainer();
				this.uncollapse()
			} else {
				this.collapse()
			}
		},
		_getAttachText: function(a) {
			var b = this._highlightContainerType == "parentContainer" ? "PARENT" : "ATTACH";
			if (a.isInstanceOfClass("wysiwyg.viewer.components.HeaderContainer")) {
				return this.injects().Resources.get("EDITOR_LANGUAGE", "CONTAINER_HIGHLIGHT_" + b + "_HEADER")
			}
			if (a.isInstanceOfClass("wysiwyg.viewer.components.FooterContainer")) {
				return this.injects().Resources.get("EDITOR_LANGUAGE", "CONTAINER_HIGHLIGHT_" + b + "_FOOTER")
			}
			if (a.isInstanceOfClass("mobile.core.components.Page")) {
				return this.injects().Resources.get("EDITOR_LANGUAGE", "CONTAINER_HIGHLIGHT_" + b + "_PAGE")
			}
			if (a.isInstanceOfClass("wysiwyg.viewer.components.ScreenWidthContainer")) {
				return this.injects().Resources.get("EDITOR_LANGUAGE", "CONTAINER_HIGHLIGHT_" + b + "_STRIP")
			}
			if (a.isInstanceOfClass("mobile.core.components.Container")) {
				return this.injects().Resources.get("EDITOR_LANGUAGE", "CONTAINER_HIGHLIGHT_" + b + "_CONTAINER")
			}
			return this.injects().Resources.get("EDITOR_LANGUAGE", "CONTAINER_HIGHLIGHT_" + b + "_FALLBACK")
		},
		_highlightContainer: function() {
			var a = this.injects().Editor;
			if (a.getComponentScope(this._highlightedComponent.htmlNode) === a.EDIT_MODE.MASTER_PAGE) {
				this.setState("master", "componentScope")
			} else {
				this.setState("page", "componentScope")
			}
			this._fitToContainer()
		},
		_fitToContainer: function() {
			var a = this._highlightedComponent.logic.isInstanceOfClass("wysiwyg.viewer.components.ScreenWidthContainer") || this._highlightedComponent.logic.isInstanceOfClass("mobile.core.components.Page");
			if (a) {
				this.setState("enabled", "highlightAllWidth")
			} else {
				if (this.getState("highlightAllWidth")) {
					this.removeState("enabled", "highlightAllWidth")
				}
			}
			this.setX(a ? 0 : this._highlightedComponent.x - 5);
			this.setY(this._highlightedComponent.y - 5);
			this._skinParts.outline.setStyles({
				width: a ? window.getSize().x - 4 : this._highlightedComponent.width + 5,
				height: this._highlightedComponent.height + 5
			})
		}
	}
});
Constants.EditorUI = {
	SHOW_PANEL: "EditorUI.ShowPanel",
	SHOW_TOOLBAR: "EditorUI.ShowToolbar",
	SHOW_SUB_PANEL: "EditorUI.ShowSubPanel",
	CLOSE_PANEL: "EditorUI.ClosePanel",
	CLOSE_SUB_PANEL: "EditorUI.HideSubPanel",
	CLOSE_ALL_PANELS: "EditorUI.HideAllPanels",
	CLOSE_PROPERTY_PANEL: "EditorUI.ClosePropertyPanel",
	START_EDIT_RICH_TEXT: "EditorUI.StartEditRichText",
	RESIZE_HANDLES_CHANGED: "EditorUI.ResizeHandlesChanged",
	CLOSED_PANELS: "closedPanels",
	DESIGN_PANEL: "designPanel",
	ADD_PANEL: "addPanel",
	PAGES_PANEL: "pagesPanel",
	SETTINGS_PANEL: "settingsPanel",
	EDIT_STATE_BAR_VISIBLE: "editStateBarVisible",
	EDIT_STATE_BAR_HIDDEN: "editStateBarHidden",
	EDIT_CONTROLS_VISIBLE: "editControlsVisible",
	EDIT_CONTROLS_HIDDEN: "editControlsHidden",
	PANEL_CLOSING: "pclose!",
	MediaQuery: {
		TIMEOUT: 40,
		Height: {
			DEFAULT: 0,
			MINIMAL: 600
		},
		Width: {
			DEFAULT: 0,
			MINIMAL: 960
		}
	},
	Max: {
		SIDE_PANEL_HEIGHT: 530
	}
};
W.Experiments.registerExperimentComponent("FPP", "New", {
	name: "experiments.wysiwyg.editor.components.EditorUIFpp",
	skinParts: merge({
		componentPanel: undefined,
		propertyPanel: {
			type: "wysiwyg.editor.components.panels.ComponentPanel"
		},
		floatingPanel: {
			type: "wysiwyg.editor.components.panels.FloatingPropertyPanel"
		}
	}),
	Class: {
		Extends: "wysiwyg.editor.components.EditorUI",
		Binds: ["_onWindowResize", "_onPanelClosing", "_onSiteLoaded", "showPropertyPanel"],
		showFloatingPropertyPanel: function(a) {
			var b = this.injects().Editor.getFloatingPanel();
			if (b) {
				b.addEvent("showPropertyPanel", this.showPropertyPanel);
				b.showPanel(a)
			}
		},
		showPropertyPanel: function() {
			var a = this.injects().Editor.getPropertyPanel();
			a.enable();
			var b = this._currentSubPanel;
			if (b.panel != a) {
				this._showPanel(a, b, true, this._skinParts.propertyPanelContainer)
			}
		},
		hidePropertyPanel: function() {
			var a = this.injects().Editor.getPropertyPanel();
			a.disable();
			var b = this._currentSubPanel;
			this._showPanel(null, b, false, this._skinParts.propertyPanelContainer)
		},
		_onClosePropertyPanel: function() {
			this.hidePropertyPanel()
		},
		getPropertyPanelComp: function() {
			return this._skinParts.propertyPanel
		},
		getFloatingPanelComp: function() {
			return this._skinParts.floatingPanel
		}
	}
});
Constants.EditorUI = {
	SHOW_PANEL: "EditorUI.ShowPanel",
	SHOW_TOOLBAR: "EditorUI.ShowToolbar",
	SHOW_SUB_PANEL: "EditorUI.ShowSubPanel",
	CLOSE_PANEL: "EditorUI.ClosePanel",
	CLOSE_SUB_PANEL: "EditorUI.HideSubPanel",
	CLOSE_ALL_PANELS: "EditorUI.HideAllPanels",
	CLOSE_PROPERTY_PANEL: "EditorUI.ClosePropertyPanel",
	START_EDIT_RICH_TEXT: "EditorUI.StartEditRichText",
	RESIZE_HANDLES_CHANGED: "EditorUI.ResizeHandlesChanged",
	CLOSED_PANELS: "closedPanels",
	DESIGN_PANEL: "designPanel",
	ADD_PANEL: "addPanel",
	PAGES_PANEL: "pagesPanel",
	SETTINGS_PANEL: "settingsPanel",
	EDIT_STATE_BAR_VISIBLE: "editStateBarVisible",
	EDIT_STATE_BAR_HIDDEN: "editStateBarHidden",
	EDIT_CONTROLS_VISIBLE: "editControlsVisible",
	EDIT_CONTROLS_HIDDEN: "editControlsHidden",
	PANEL_CLOSING: "pclose!",
	MediaQuery: {
		TIMEOUT: 40,
		Height: {
			DEFAULT: 0,
			MINIMAL: 600
		},
		Width: {
			DEFAULT: 0,
			MINIMAL: 960
		}
	},
	Max: {
		SIDE_PANEL_HEIGHT: 530
	}
};
W.Experiments.registerExperimentComponent("GridLines", "New", {
	name: "experiments.wysiwyg.editor.components.EditorUIGridLinesNew",
	skinParts: merge({
		parentContainerHighlight: {
			type: "wysiwyg.editor.components.ContainerHighLight",
			argObject: {
				highlightContainerType: "parentContainer"
			}
		},
		gridLines: {
			type: "wysiwyg.editor.components.GridLines"
		}
	}),
	Class: {
		Extends: "wysiwyg.editor.components.EditorUI",
		getParentContainerHighLight: function() {
			return this._skinParts.parentContainerHighlight
		}
	}
});
Constants.EditorUI = {
	SHOW_PANEL: "EditorUI.ShowPanel",
	SHOW_TOOLBAR: "EditorUI.ShowToolbar",
	SHOW_SUB_PANEL: "EditorUI.ShowSubPanel",
	CLOSE_PANEL: "EditorUI.ClosePanel",
	CLOSE_SUB_PANEL: "EditorUI.HideSubPanel",
	CLOSE_ALL_PANELS: "EditorUI.HideAllPanels",
	CLOSE_PROPERTY_PANEL: "EditorUI.ClosePropertyPanel",
	START_EDIT_RICH_TEXT: "EditorUI.StartEditRichText",
	RESIZE_HANDLES_CHANGED: "EditorUI.ResizeHandlesChanged",
	CLOSED_PANELS: "closedPanels",
	DESIGN_PANEL: "designPanel",
	ADD_PANEL: "addPanel",
	PAGES_PANEL: "pagesPanel",
	SETTINGS_PANEL: "settingsPanel",
	EDIT_STATE_BAR_VISIBLE: "editStateBarVisible",
	EDIT_STATE_BAR_HIDDEN: "editStateBarHidden",
	EDIT_CONTROLS_VISIBLE: "editControlsVisible",
	EDIT_CONTROLS_HIDDEN: "editControlsHidden",
	PANEL_CLOSING: "pclose!",
	MediaQuery: {
		TIMEOUT: 40,
		Height: {
			DEFAULT: 0,
			MINIMAL: 600
		},
		Width: {
			DEFAULT: 0,
			MINIMAL: 960
		}
	},
	Max: {
		SIDE_PANEL_HEIGHT: 530
	}
};
W.Experiments.registerExperimentComponent("MasterPage", "New", {
	name: "experiments.wysiwyg.editor.components.EditorUIMasterPageNew",
	skinParts: merge({
		parentContainerHighlight: {
			type: "wysiwyg.editor.components.ContainerHighLight",
			argObject: {
				highlightContainerType: "parentContainer"
			}
		}
	}),
	Class: {
		Extends: "wysiwyg.editor.components.EditorUI",
		getParentContainerHighLight: function() {
			return this._skinParts.parentContainerHighlight
		}
	}
});
Constants.EditorUI = {
	SHOW_PANEL: "EditorUI.ShowPanel",
	SHOW_TOOLBAR: "EditorUI.ShowToolbar",
	SHOW_SUB_PANEL: "EditorUI.ShowSubPanel",
	CLOSE_PANEL: "EditorUI.ClosePanel",
	CLOSE_SUB_PANEL: "EditorUI.HideSubPanel",
	CLOSE_ALL_PANELS: "EditorUI.HideAllPanels",
	CLOSE_PROPERTY_PANEL: "EditorUI.ClosePropertyPanel",
	START_EDIT_RICH_TEXT: "EditorUI.StartEditRichText",
	RESIZE_HANDLES_CHANGED: "EditorUI.ResizeHandlesChanged",
	CLOSED_PANELS: "closedPanels",
	DESIGN_PANEL: "designPanel",
	ADD_PANEL: "addPanel",
	PAGES_PANEL: "pagesPanel",
	SETTINGS_PANEL: "settingsPanel",
	EDIT_STATE_BAR_VISIBLE: "editStateBarVisible",
	EDIT_STATE_BAR_HIDDEN: "editStateBarHidden",
	EDIT_CONTROLS_VISIBLE: "editControlsVisible",
	EDIT_CONTROLS_HIDDEN: "editControlsHidden",
	PANEL_CLOSING: "pclose!",
	MediaQuery: {
		TIMEOUT: 40,
		Height: {
			DEFAULT: 0,
			MINIMAL: 600
		},
		Width: {
			DEFAULT: 0,
			MINIMAL: 960
		}
	},
	Max: {
		SIDE_PANEL_HEIGHT: 530
	}
};
W.Experiments.registerExperimentComponent("SM", "New", {
	name: "experiments.wysiwyg.editor.components.EditorUISM",
	skinParts: merge({
		siteMembers: {
			type: "wysiwyg.editor.components.panels.SiteMembersPanel",
			dataQuery: "#SITE_SETTINGS",
			autoCreate: false,
			argObject: {
				closeCommand: Constants.EditorUI.CLOSE_SUB_PANEL
			}
		}
	}),
	Class: {
		Extends: "wysiwyg.editor.components.EditorUI"
	}
});
Constants.EditorUI = {
	SHOW_PANEL: "EditorUI.ShowPanel",
	SHOW_TOOLBAR: "EditorUI.ShowToolbar",
	SHOW_SUB_PANEL: "EditorUI.ShowSubPanel",
	CLOSE_PANEL: "EditorUI.ClosePanel",
	CLOSE_SUB_PANEL: "EditorUI.HideSubPanel",
	CLOSE_ALL_PANELS: "EditorUI.HideAllPanels",
	CLOSE_PROPERTY_PANEL: "EditorUI.ClosePropertyPanel",
	START_EDIT_RICH_TEXT: "EditorUI.StartEditRichText",
	RESIZE_HANDLES_CHANGED: "EditorUI.ResizeHandlesChanged",
	CLOSED_PANELS: "closedPanels",
	DESIGN_PANEL: "designPanel",
	ADD_PANEL: "addPanel",
	PAGES_PANEL: "pagesPanel",
	SETTINGS_PANEL: "settingsPanel",
	EDIT_STATE_BAR_VISIBLE: "editStateBarVisible",
	EDIT_STATE_BAR_HIDDEN: "editStateBarHidden",
	EDIT_CONTROLS_VISIBLE: "editControlsVisible",
	EDIT_CONTROLS_HIDDEN: "editControlsHidden",
	PANEL_CLOSING: "pclose!",
	MediaQuery: {
		TIMEOUT: 40,
		Height: {
			DEFAULT: 0,
			MINIMAL: 600
		},
		Width: {
			DEFAULT: 0,
			MINIMAL: 960
		}
	},
	Max: {
		SIDE_PANEL_HEIGHT: 530
	}
};
W.Experiments.registerExperimentComponent("SocialPanel", "New", {
	name: "experiments.wysiwyg.editor.components.EditorUI",
	skinParts: merge({
		social: {
			type: "wysiwyg.editor.components.panels.SocialPanel",
			dataQuery: "#SITE_SETTINGS",
			autoCreate: false,
			argObject: {
				closeCommand: Constants.EditorUI.CLOSE_SUB_PANEL
			}
		}
	}),
	Class: {
		Extends: "wysiwyg.editor.components.EditorUI",
		_states: {
			editStateBar: [Constants.EditorUI.EDIT_STATE_BAR_VISIBLE, Constants.EditorUI.EDIT_STATE_BAR_HIDDEN],
			editControls: [Constants.EditorUI.EDIT_CONTROLS_VISIBLE, Constants.EditorUI.EDIT_CONTROLS_HIDDEN],
			panels: [Constants.EditorUI.CLOSED_PANELS, Constants.EditorUI.DESIGN_PANEL, Constants.EditorUI.ADD_PANEL, Constants.EditorUI.PAGES_PANEL, Constants.EditorUI.SETTINGS_PANEL],
			mediaQueryWidth: ["defaultWidth", "minimalWidth"],
			mediaQueryHeight: ["defaultHeight", "minimalHeight"]
		}
	}
});
Constants.EditorUI = {
	SHOW_PANEL: "EditorUI.ShowPanel",
	SHOW_TOOLBAR: "EditorUI.ShowToolbar",
	SHOW_SUB_PANEL: "EditorUI.ShowSubPanel",
	CLOSE_PANEL: "EditorUI.ClosePanel",
	CLOSE_SUB_PANEL: "EditorUI.HideSubPanel",
	CLOSE_ALL_PANELS: "EditorUI.HideAllPanels",
	CLOSE_PROPERTY_PANEL: "EditorUI.ClosePropertyPanel",
	START_EDIT_RICH_TEXT: "EditorUI.StartEditRichText",
	RESIZE_HANDLES_CHANGED: "EditorUI.ResizeHandlesChanged",
	CLOSED_PANELS: "closedPanels",
	DESIGN_PANEL: "designPanel",
	ADD_PANEL: "addPanel",
	PAGES_PANEL: "pagesPanel",
	SETTINGS_PANEL: "settingsPanel",
	EDIT_STATE_BAR_VISIBLE: "editStateBarVisible",
	EDIT_STATE_BAR_HIDDEN: "editStateBarHidden",
	EDIT_CONTROLS_VISIBLE: "editControlsVisible",
	EDIT_CONTROLS_HIDDEN: "editControlsHidden",
	PANEL_CLOSING: "pclose!",
	MediaQuery: {
		TIMEOUT: 40,
		Height: {
			DEFAULT: 0,
			MINIMAL: 600
		},
		Width: {
			DEFAULT: 0,
			MINIMAL: 960
		}
	},
	Max: {
		SIDE_PANEL_HEIGHT: 530
	}
};
W.Experiments.registerExperimentComponent("WalkMe", "New", {
	name: "experiments.wysiwyg.editor.components.EditorUIWalkMeNew",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.EditorUI",
		_showFirstTimeInEditorHelp: function() {
			var b = !W.CookiesManager.getCookie("showHtmlEditorIntro");
			var a = editorModel.siteHeader.documentType == "template";
			var c = W.Utils.getQueryParam("noIntro");
			if (b && !c && a) {
				if (window.wixEditorLangauge == "en") {
					this.injects().Editor.getWalkMe().showFirstTimeWelcomeScreen()
				} else {
					W.Commands.executeCommand("WEditorCommands.ShowHelpDialog", "FirstTimeInEditor")
				}
				W.CookiesManager.setCookieParam("showHtmlEditorIntro", false)
			}
		}
	}
});
W.Experiments.registerNewExperimentComponent("GridLines", "New", {
	name: "wysiwyg.editor.components.GridLines",
	skinParts: {
		headerTop: {
			type: "htmlElement"
		},
		headerBottom: {
			type: "htmlElement"
		},
		pagesContainerTop: {
			type: "htmlElement"
		},
		pagesContainerBottom: {
			type: "htmlElement"
		},
		footerTop: {
			type: "htmlElement"
		},
		footerBottom: {
			type: "htmlElement"
		},
		gridBodyRight: {
			type: "htmlElement"
		},
		gridBodyLeft: {
			type: "htmlElement"
		},
		headerDragHandle: {
			type: "wysiwyg.editor.components.WButton"
		},
		headerStretchHandle: {
			type: "wysiwyg.editor.components.WButton"
		},
		pagesContainerDragHandle: {
			type: "wysiwyg.editor.components.WButton"
		},
		pagesContainerStretchHandle: {
			type: "wysiwyg.editor.components.WButton"
		},
		footerDragHandle: {
			type: "wysiwyg.editor.components.WButton"
		},
		footerStretchHandle: {
			type: "wysiwyg.editor.components.WButton"
		},
		currentYLabel: {
			type: "htmlElement"
		},
		currentHeightLabel: {
			type: "htmlElement"
		},
		headerLabel: {
			type: "htmlElement"
		},
		pagesContainerLabel: {
			type: "htmlElement"
		},
		footerLabel: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		_states: {
			verticalGridLines: ["verticalEnabled", "verticalDisabled"],
			horizontalGridLines: ["horizontalEnabled", "horizontalDisabled"],
			siteSegmentHandlesUsed: ["siteSegmentHandlesUsedMasterPage", "siteSegmentHandlesUsedNotMasterPage", "siteSegmentHandlesNotUsed"]
		},
		Binds: ["toggleGrid", "_refreshGridLines", "_onHeaderDragMouseDown", "_onHeaderStretchMouseDown", "_onPagesContainerDragMouseDown", "_onPagesContainerStretchMouseDown", "_onFooterDragMouseDown", "_onFooterStretchMouseDown", "_dragMouseMoveHandler", "_dragMouseUpHandler", "_stretchMouseMoveHandler", "_stretchMouseUpHandler", "_onComponentEditBoxSelectedNewComponent", "_onComponentEditBoxDragStarted", "_onComponentEditBoxStretchStarted"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this.injects().Commands.registerCommandListenerByName("EditorCommands.SiteLoaded", this, this._onSiteLoaded);
			this._gridLinesTurnedOn = false;
			this._mouseComponentModifier = new(W.Classes.get("wysiwyg.editor.managers.MouseComponentModifier"))();
			this._siteBody = $$("body")
		},
		_onHeaderDragMouseDown: function(a) {
			this._onDragMouseDown(a, this._headerNode.getLogic())
		},
		_onPagesContainerDragMouseDown: function(a) {
			this._onDragMouseDown(a, this._pagesContainerNode.getLogic())
		},
		_onFooterDragMouseDown: function(a) {
			this._onDragMouseDown(a, this._footerNode.getLogic())
		},
		_onHeaderStretchMouseDown: function(a) {
			this._onStretchMouseDown(a, this._headerNode.getLogic())
		},
		_onPagesContainerStretchMouseDown: function(a) {
			this._onStretchMouseDown(a, this._pagesContainerNode.getLogic())
		},
		_onFooterStretchMouseDown: function(a) {
			this._onStretchMouseDown(a, this._footerNode.getLogic())
		},
		_onDragMouseDown: function(b, c) {
			this._editedSegmentLogic = c;
			var a = parseInt(this._editedSegmentLogic.getViewNode().getStyle("top")) + this._topBarHeight;
			this._skinParts.currentYLabel.setStyle("top", a + "px");
			this._updateCurrentYLabel();
			this._skinParts.currentYLabel.setStyle("display", "block");
			this._siteBody.addEvent("mousemove", this._dragMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._dragMouseUpHandler);
			this._mouseComponentModifier.setEditedComponent(this._editedSegmentLogic);
			this._mouseComponentModifier.mouseDownDragHandler(b, true, true, true)
		},
		_dragMouseUpHandler: function(a) {
			this._skinParts.currentYLabel.setStyle("display", "none");
			this._siteBody.removeEvent("mousemove", this._dragMouseMoveHandler);
			this._siteBody.removeEvent("mouseup", this._dragMouseUpHandler);
			this.setState("siteSegmentHandlesNotUsed", "siteSegmentHandlesUsed")
		},
		_dragMouseMoveHandler: function(a) {
			this._updateCurrentYLabel()
		},
		_updateCurrentYLabel: function() {
			var a = this._editedSegmentLogic.getY();
			this._skinParts.currentYLabel.set("text", "Y: " + a + " px")
		},
		_onStretchMouseDown: function(b, c) {
			this._editedSegmentLogic = c;
			this._skinParts.currentHeightLabel.setStyle("display", "block");
			var a = parseInt(this._editedSegmentLogic.getViewNode().getStyle("top")) + parseInt(this._editedSegmentLogic.getViewNode().getStyle("height")) + this._topBarHeight;
			this._skinParts.currentHeightLabel.setStyle("top", (a - parseInt(this._skinParts.currentHeightLabel.getSize().y)) + "px");
			this._updateCurrentHeightLabel();
			this._siteBody.addEvent("mousemove", this._stretchMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._stretchMouseUpHandler);
			this._mouseComponentModifier.setEditedComponent(this._editedSegmentLogic);
			this._mouseComponentModifier.bottomResizeHandler(b)
		},
		_stretchMouseUpHandler: function(a) {
			this._skinParts.currentHeightLabel.setStyle("display", "none");
			this._siteBody.removeEvent("mousemove", this._stretchMouseMoveHandler);
			this._siteBody.removeEvent("mouseup", this._stretchMouseUpHandler);
			this.setState("siteSegmentHandlesNotUsed", "siteSegmentHandlesUsed")
		},
		_stretchMouseMoveHandler: function(a) {
			this._updateCurrentHeightLabel()
		},
		_updateCurrentHeightLabel: function() {
			var a = this._editedSegmentLogic.getHeight();
			this._skinParts.currentHeightLabel.set("text", "H: " + a + " px")
		},
		_onComponentEditBoxDragStarted: function(b) {
			var a = this.injects().Editor.getEditedComponent();
			if (a.isSiteSegment()) {
				if (a.getOriginalClassName() == "wysiwyg.viewer.components.PagesContainer") {
					this.setState("siteSegmentHandlesUsedNotMasterPage", "siteSegmentHandlesUsed")
				} else {
					this.setState("siteSegmentHandlesUsedMasterPage", "siteSegmentHandlesUsed")
				}
				this._onDragMouseDown(b, a)
			}
		},
		_onComponentEditBoxStretchStarted: function(b) {
			var a = this.injects().Editor.getEditedComponent();
			if (a.isSiteSegment()) {
				if (a.getOriginalClassName() == "wysiwyg.viewer.components.PagesContainer") {
					this.setState("siteSegmentHandlesUsedNotMasterPage", "siteSegmentHandlesUsed")
				} else {
					this.setState("siteSegmentHandlesUsedMasterPage", "siteSegmentHandlesUsed")
				}
				this._onStretchMouseDown(b, a)
			}
		},
		_onComponentEditBoxSelectedNewComponent: function() {
			if (this.getState("horizontalGridLines") == "horizontalEnabled") {
				this._showHandles()
			}
		},
		_showHandles: function() {
			var a = this.injects().Editor.getEditedComponent();
			if (a == this._headerNode.getLogic()) {
				this._skinParts.headerDragHandle.getViewNode().setStyle("display", "none");
				this._skinParts.headerStretchHandle.getViewNode().setStyle("display", "none");
				this._skinParts.pagesContainerDragHandle.getViewNode().setStyle("display", "block");
				this._skinParts.pagesContainerStretchHandle.getViewNode().setStyle("display", "block");
				this._skinParts.footerDragHandle.getViewNode().setStyle("display", "block");
				this._skinParts.footerStretchHandle.getViewNode().setStyle("display", "block")
			} else {
				if (a == this._pagesContainerNode.getLogic()) {
					this._skinParts.pagesContainerDragHandle.getViewNode().setStyle("display", "none");
					this._skinParts.pagesContainerStretchHandle.getViewNode().setStyle("display", "none");
					this._skinParts.headerDragHandle.getViewNode().setStyle("display", "block");
					this._skinParts.headerStretchHandle.getViewNode().setStyle("display", "block");
					this._skinParts.footerDragHandle.getViewNode().setStyle("display", "block");
					this._skinParts.footerStretchHandle.getViewNode().setStyle("display", "block")
				} else {
					if (a == this._footerNode.getLogic()) {
						this._skinParts.footerDragHandle.getViewNode().setStyle("display", "none");
						this._skinParts.footerStretchHandle.getViewNode().setStyle("display", "none");
						this._skinParts.headerDragHandle.getViewNode().setStyle("display", "block");
						this._skinParts.headerStretchHandle.getViewNode().setStyle("display", "block");
						this._skinParts.pagesContainerDragHandle.getViewNode().setStyle("display", "block");
						this._skinParts.pagesContainerStretchHandle.getViewNode().setStyle("display", "block")
					} else {
						this._skinParts.headerDragHandle.getViewNode().setStyle("display", "block");
						this._skinParts.headerStretchHandle.getViewNode().setStyle("display", "block");
						this._skinParts.pagesContainerDragHandle.getViewNode().setStyle("display", "block");
						this._skinParts.pagesContainerStretchHandle.getViewNode().setStyle("display", "block");
						this._skinParts.footerDragHandle.getViewNode().setStyle("display", "block");
						this._skinParts.footerStretchHandle.getViewNode().setStyle("display", "block")
					}
				}
			}
		},
		_hideHandles: function() {
			this._skinParts.headerDragHandle.getViewNode().setStyle("display", "none");
			this._skinParts.headerStretchHandle.getViewNode().setStyle("display", "none");
			this._skinParts.pagesContainerDragHandle.getViewNode().setStyle("display", "none");
			this._skinParts.pagesContainerStretchHandle.getViewNode().setStyle("display", "none");
			this._skinParts.footerDragHandle.getViewNode().setStyle("display", "none");
			this._skinParts.footerStretchHandle.getViewNode().setStyle("display", "none")
		},
		_onSiteLoaded: function() {
			this._topBarHeight = W.Editor.getEditorUI().getSkinPart("mainEditorBar").getViewNode().getHeight() - 1;
			var a = this.injects().Preview.getPreviewSite();
			this._headerNode = a.$("SITE_HEADER");
			this._pagesContainerNode = a.$("PAGES_CONTAINER");
			this._footerNode = a.$("SITE_FOOTER");
			this._headerNode.getLogic().addEvent(Constants.CoreEvents.RESIZE, this._refreshGridLines);
			this._pagesContainerNode.getLogic().addEvent(Constants.CoreEvents.RESIZE, this._refreshGridLines);
			this._footerNode.getLogic().addEvent(Constants.CoreEvents.RESIZE, this._refreshGridLines);
			this._headerNode.getLogic().addEvent("componentMoved", this._refreshGridLines);
			this._pagesContainerNode.getLogic().addEvent("componentMoved", this._refreshGridLines);
			this._footerNode.getLogic().addEvent("componentMoved", this._refreshGridLines);
			window.addEvent(Constants.CoreEvents.RESIZE, this._refreshGridLines);
			window.addEvent(Constants.CoreEvents.SCROLL, this._refreshGridLines);
			this.injects().Editor.getComponentEditBox().addEvent("componentSelected", this._onComponentEditBoxSelectedNewComponent);
			this.injects().Editor.getComponentEditBox().addEvent("dragStarted", this._onComponentEditBoxDragStarted);
			this.injects().Editor.getComponentEditBox().addEvent("resizeStarted", this._onComponentEditBoxStretchStarted);
			this._editedSegmentLogic = this._headerNode.getLogic();
			this._skinParts.headerDragHandle.getViewNode().addEvent(Constants.CoreEvents.MOUSE_DOWN, this._onHeaderDragMouseDown);
			this._skinParts.headerStretchHandle.getViewNode().addEvent(Constants.CoreEvents.MOUSE_DOWN, this._onHeaderStretchMouseDown);
			this._skinParts.pagesContainerDragHandle.getViewNode().addEvent(Constants.CoreEvents.MOUSE_DOWN, this._onPagesContainerDragMouseDown);
			this._skinParts.pagesContainerStretchHandle.getViewNode().addEvent(Constants.CoreEvents.MOUSE_DOWN, this._onPagesContainerStretchMouseDown);
			this._skinParts.footerDragHandle.getViewNode().addEvent(Constants.CoreEvents.MOUSE_DOWN, this._onFooterDragMouseDown);
			this._skinParts.footerStretchHandle.getViewNode().addEvent(Constants.CoreEvents.MOUSE_DOWN, this._onFooterStretchMouseDown);
			this._handleButtonHeight = parseInt(this._skinParts.headerStretchHandle.getViewNode().getStyle("height"));
			this._handleButtonWidth = parseInt(this._skinParts.headerDragHandle.getViewNode().getStyle("width"));
			this._skinParts.headerLabel.set("text", W.Resources.get("EDITOR_LANGUAGE", "GRIDLINES_LABEL_HEADER"));
			this._skinParts.pagesContainerLabel.set("text", W.Resources.get("EDITOR_LANGUAGE", "GRIDLINES_LABEL_PAGE"));
			this._skinParts.footerLabel.set("text", W.Resources.get("EDITOR_LANGUAGE", "GRIDLINES_LABEL_FOOTER"));
			this._setButtons();
			this._refreshGridLines();
			W.Commands.executeCommand("EditorCommands.GridLinesLoaded")
		},
		_setButtons: function() {
			var a = "button/smart-tools-icons-large-small-blue-orange.png";
			this._addToolTipToSkinPart(this._skinParts.headerDragHandle, "Boundary_box_drag_handle_ttid");
			this._addToolTipToSkinPart(this._skinParts.headerStretchHandle, "Boundary_box_push_knob_ttid");
			this._addToolTipToSkinPart(this._skinParts.pagesContainerDragHandle, "Boundary_box_drag_handle_ttid");
			this._addToolTipToSkinPart(this._skinParts.pagesContainerStretchHandle, "Boundary_box_push_knob_ttid");
			this._addToolTipToSkinPart(this._skinParts.footerDragHandle, "Boundary_box_drag_handle_ttid");
			this._addToolTipToSkinPart(this._skinParts.footerStretchHandle, "Boundary_box_push_knob_ttid");
			this._skinParts.headerDragHandle.setParameters({
				iconSrc: a,
				iconSize: {
					width: 19,
					height: 19
				},
				spriteOffset: {
					x: 0,
					y: -25
				}
			});
			this._skinParts.headerStretchHandle.setParameters({
				iconSrc: a,
				iconSize: {
					width: 19,
					height: 19
				},
				spriteOffset: {
					x: 0,
					y: -79
				}
			});
			this._skinParts.pagesContainerDragHandle.setParameters({
				iconSrc: a,
				iconSize: {
					width: 19,
					height: 19
				},
				spriteOffset: {
					x: 0,
					y: -25
				}
			});
			this._skinParts.pagesContainerStretchHandle.setParameters({
				iconSrc: a,
				iconSize: {
					width: 19,
					height: 19
				},
				spriteOffset: {
					x: 0,
					y: -79
				}
			});
			this._skinParts.footerDragHandle.setParameters({
				iconSrc: a,
				iconSize: {
					width: 19,
					height: 19
				},
				spriteOffset: {
					x: 0,
					y: -25
				}
			});
			this._skinParts.footerStretchHandle.setParameters({
				iconSrc: a,
				iconSize: {
					width: 19,
					height: 19
				},
				spriteOffset: {
					x: 0,
					y: -79
				}
			})
		},
		_refreshGridLines: function() {
			this._refreshHYLabels();
			this._refreshHorizontalGridLines();
			this._refreshVerticalGridLines()
		},
		_refreshHYLabels: function() {
			var b = parseInt(this._editedSegmentLogic.getViewNode().getStyle("top")) + this._topBarHeight;
			this._skinParts.currentYLabel.setStyle("top", b + "px");
			var a = parseInt(this._editedSegmentLogic.getViewNode().getStyle("top")) + parseInt(this._editedSegmentLogic.getViewNode().getStyle("height")) + this._topBarHeight;
			this._skinParts.currentHeightLabel.setStyle("top", (a - parseInt(this._skinParts.currentHeightLabel.getSize().y)) + "px")
		},
		_refreshHorizontalGridLines: function() {
			if (this.getState("horizontalGridLines") == "horizontalEnabled") {
				var f = parseInt(this._headerNode.getStyle("top")) + this._topBarHeight;
				var c = parseInt(this._headerNode.getStyle("top")) + parseInt(this._headerNode.getStyle("height")) + this._topBarHeight;
				var a = parseInt(this._pagesContainerNode.getStyle("top")) + this._topBarHeight;
				var e = parseInt(this._pagesContainerNode.getStyle("top")) + parseInt(this._pagesContainerNode.getStyle("height")) + this._topBarHeight;
				var g = parseInt(this._footerNode.getStyle("top")) + this._topBarHeight;
				var h = parseInt(this._footerNode.getStyle("top")) + parseInt(this._footerNode.getStyle("height")) + this._topBarHeight;
				this._skinParts.headerTop.setStyle("top", f + "px");
				this._skinParts.headerBottom.setStyle("top", c + "px");
				this._skinParts.pagesContainerTop.setStyle("top", a + "px");
				this._skinParts.pagesContainerBottom.setStyle("top", e + "px");
				this._skinParts.footerTop.setStyle("top", g + "px");
				this._skinParts.footerBottom.setStyle("top", h + "px");
				var b = window.getSize().x;
				var d = window.getScroll().x;
				this._skinParts.headerTop.setStyle("width", b);
				this._skinParts.headerBottom.setStyle("width", b);
				this._skinParts.pagesContainerTop.setStyle("width", b);
				this._skinParts.pagesContainerBottom.setStyle("width", b);
				this._skinParts.footerTop.setStyle("width", b);
				this._skinParts.footerBottom.setStyle("width", b);
				this._skinParts.headerTop.setStyle("left", d);
				this._skinParts.headerBottom.setStyle("left", d);
				this._skinParts.pagesContainerTop.setStyle("left", d);
				this._skinParts.pagesContainerBottom.setStyle("left", d);
				this._skinParts.footerTop.setStyle("left", d);
				this._skinParts.footerBottom.setStyle("left", d);
				this._skinParts.headerDragHandle.getViewNode().setStyle("top", (f - 2) + "px");
				this._skinParts.headerStretchHandle.getViewNode().setStyle("top", c - this._handleButtonHeight + "px");
				this._skinParts.pagesContainerDragHandle.getViewNode().setStyle("top", (a - 2) + "px");
				this._skinParts.pagesContainerStretchHandle.getViewNode().setStyle("top", e - this._handleButtonHeight + "px");
				this._skinParts.footerDragHandle.getViewNode().setStyle("top", (g - 2) + "px");
				this._skinParts.footerStretchHandle.getViewNode().setStyle("top", h - this._handleButtonHeight + "px");
				this._skinParts.headerLabel.setStyle("top", f + "px");
				this._skinParts.pagesContainerLabel.setStyle("top", a + "px");
				this._skinParts.footerLabel.setStyle("top", g + "px");
				this._skinParts.headerLabel.setStyle("left", (b / 2) + "px");
				this._skinParts.pagesContainerLabel.setStyle("left", (b / 2) + "px");
				this._skinParts.footerLabel.setStyle("left", (b / 2) + "px")
			}
		},
		_refreshVerticalGridLines: function() {
			if (this.getState("verticalGridLines") == "verticalEnabled") {
				var c = this._pagesContainerNode.getPosition().x;
				var b = c + parseInt(this._pagesContainerNode.getStyle("width"));
				this._skinParts.gridBodyLeft.setStyle("left", c + "px");
				this._skinParts.gridBodyRight.setStyle("left", b + "px");
				var a = this._handleButtonWidth + 2;
				this._skinParts.headerDragHandle.getViewNode().setStyle("left", (b - a) + "px");
				this._skinParts.headerStretchHandle.getViewNode().setStyle("left", (b - a) + "px");
				this._skinParts.pagesContainerDragHandle.getViewNode().setStyle("left", (b - a) + "px");
				this._skinParts.pagesContainerStretchHandle.getViewNode().setStyle("left", (b - a) + "px");
				this._skinParts.footerDragHandle.getViewNode().setStyle("left", (b - a) + "px");
				this._skinParts.footerStretchHandle.getViewNode().setStyle("left", (b - a) + "px");
				this._skinParts.currentYLabel.setStyle("left", b + "px");
				this._skinParts.currentHeightLabel.setStyle("left", b + "px")
			}
		},
		toggleGrid: function() {
			if (this._gridLinesTurnedOn) {
				this._gridLinesTurnedOn = false;
				this.hideAllGridLines()
			} else {
				this._gridLinesTurnedOn = true;
				this.showAllGridLines()
			}
		},
		showAllGridLines: function() {
			this.showHorizontalGridLines();
			this.showVerticalGridLines()
		},
		hideAllGridLines: function() {
			this.hideHorizontalGridLines();
			this.hideVerticalGridLines()
		},
		showVerticalGridLines: function() {
			this.setState("verticalEnabled", "verticalGridLines");
			this._refreshVerticalGridLines()
		},
		hideVerticalGridLines: function() {
			if (!this._gridLinesTurnedOn) {
				this.setState("verticalDisabled", "verticalGridLines")
			}
		},
		showHorizontalGridLines: function() {
			this.setState("horizontalEnabled", "horizontalGridLines");
			this._refreshHorizontalGridLines();
			this._showHandles()
		},
		hideHorizontalGridLines: function() {
			if (!this._gridLinesTurnedOn) {
				this.setState("horizontalDisabled", "horizontalGridLines");
				this._hideHandles()
			}
		}
	}
});
W.Experiments.registerExperimentComponent("TPA", "New", {
	name: "experiments.wysiwyg.editor.components.IframeTPANew",
	skinParts: {
		iframe: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.Iframe",
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._height = b.height || "100%"
		},
		_changeSize: function(c) {
			var b = c.x || c.w;
			var a = c.y || c.h;
			if (b) {
				this.setWidth(b, false, false);
				this._skinParts.iframe.setStyle("width", b + "px")
			}
			if (a) {
				this.setHeight(a, false, false);
				this._skinParts.iframe.setStyle("height", a + "px")
			}
			this._wCheckForSizeChangeAndFireAutoSized(0)
		}
	}
});
W.Experiments.registerNewExperimentComponent("PagesDropDown", "New", {
	name: "wysiwyg.editor.components.SiteNavigationDropDown",
	skinParts: {
		label: {
			type: "htmlElement",
			autoBindDictionary: "NAVIGATION_DROP_DOWN_LABEL"
		},
		select: {
			type: "htmlElement"
		},
		options: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_initMenu", "_populateDropDown", "_updateSelection", "_gotoSelectedPage", "_updatePageName", "_onFocus", "_onBlur", "_onOptionClick", "_onKeyPress"],
		Static: {
			CLASS_NAME_CHILD: "child",
			CLASS_NAME_SELECTED: "selected",
			CLASS_NAME_BOLD: "bold"
		},
		_states: {
			mouse: ["selected"]
		},
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._selectedOption = null
		},
		_onAllSkinPartsReady: function() {
			if (this.injects().Preview.isSiteReady()) {
				this._menuData = this.injects().Preview.getPreviewManagers().Data.getDataByQuery("#MAIN_MENU")
			}
			if (!this._menuData) {
				this._initOnSiteReady()
			} else {
				this._initMenu()
			}
		},
		_initOnSiteReady: function() {
			var a = W.Commands.getCommand("EditorCommands.SiteLoaded");
			if (!a) {
				W.Commands.registerCommandAndListener("EditorCommands.SiteLoaded", this, this._initMenu)
			} else {
				a.registerListener(this, this._initMenu)
			}
		},
		_initMenu: function() {
			this._menuData = this._menuData || this.injects().Preview.getPreviewManagers().Data.getDataByQuery("#MAIN_MENU");
			this._populateDropDown();
			this._menuData.addEvent(Constants.DataEvents.DATA_CHANGED, this._populateDropDown);
			this.injects().Editor.addEvent(Constants.EditorEvents.SITE_PAGE_CHANGED, this._updateSelection);
			this._skinParts.select.addEvent(Constants.CoreEvents.CHANGE, this._gotoSelectedPage);
			this._skinParts.select.addEvent(Constants.CoreEvents.CLICK, this._onFocus);
			this._skinParts.options.addEvent(Constants.CoreEvents.CLICK, this._onOptionClick)
		},
		_onFocus: function(a) {
			a.stopPropagation();
			if (this.getState("mouse") == "selected") {
				this._onBlur(a);
				return
			}
			this.setState("selected", "mouse");
			document.body.addEvent(Constants.CoreEvents.CLICK, this._onBlur);
			document.body.addEvent(Constants.CoreEvents.KEY_DOWN, this._onKeyPress)
		},
		_onBlur: function(a) {
			a.stopPropagation();
			this.removeState("selected", "mouse");
			document.body.removeEvent(Constants.CoreEvents.CLICK, this._onBlur);
			document.body.removeEvent(Constants.CoreEvents.KEY_DOWN, this._onKeyPress)
		},
		_onOptionClick: function(b) {
			b = b || {};
			var a = b.target;
			this._setSelected(a);
			this._skinParts.select.fireEvent(Constants.CoreEvents.CHANGE, {
				value: a.getAttribute("value")
			});
			this._onBlur(b)
		},
		_onKeyPress: function(b) {
			b.stopPropagation();
			switch (b.key) {
			case "up":
				var a = this._selectedOption.getPrevious();
				if (!a) {
					a = this._skinParts.options.getLast()
				}
				this._setSelected(a);
				b.preventDefault();
				break;
			case "down":
				this._setSelected(this._selectedOption.getNext());
				b.preventDefault();
				break;
			case "enter":
			case "space":
				b.target = this._selectedOption;
				this._onOptionClick(b);
				break;
			case "esc":
			case "tab":
				this._onBlur(b);
				break
			}
		},
		_setSelected: function(d) {
			var a = this._skinParts.select;
			var b = this._skinParts.options;
			var c = this._skinParts.options.getElement("." + this.CLASS_NAME_SELECTED);
			c && c.removeClass(this.CLASS_NAME_SELECTED);
			d = d || this._skinParts.options.getFirst();
			d.addClass(this.CLASS_NAME_SELECTED);
			a.setAttribute("value", d.getAttribute("value"));
			a.set("html", d.get("html"));
			var e = d.getPosition(b).y;
			var f = b.getScroll().y;
			if (e > b.getSize().y + f || e < 0) {
				b.scrollTo(0, e)
			}
			this._selectedOption = d
		},
		_populateDropDown: function() {
			var f, e, d, a, c;
			var b = this._menuData.getItems();
			this._skinParts.select.empty();
			this._skinParts.options.empty();
			for (f = 0, a = b.length;
			f < a;
			f++) {
				this._insertOption(b[f], false);
				c = b[f].get("items");
				for (e = 0, d = c.length;
				e < d;
				e++) {
					this._insertOption(c[e], true)
				}
			}
			this._updateSelection()
		},
		_insertOption: function(f, a) {
			var e = f.get("refId");
			var b = this.injects().Preview.getPreviewManagers().Data.getDataByQuery(e);
			var c = b.get("title") || "";
			var d = new Element("span", {
				html: c
			});
			if (a) {
				d.addClass(this.CLASS_NAME_CHILD)
			} else {
				d.addClass(this.CLASS_NAME_BOLD)
			}
			b.addEvent(Constants.DataEvents.DATA_CHANGED, this._updatePageName);
			d.insertInto(this._skinParts.options);
			d.setAttribute("value", (e.indexOf("#") === 0) ? e.substr(1) : e)
		},
		_updatePageName: function(d) {
			var c = d.get("id");
			var b = this._skinParts.options.getElement('[value="' + c + '"]');
			var a = this._skinParts.select;
			b.set("html", d.get("title") || "");
			if (a.getAttribute("value") == c) {
				a.set("html", d.get("title") || "")
			}
		},
		_gotoSelectedPage: function() {
			var a = this._skinParts.select.getAttribute("value");
			this.injects().Commands.executeCommand("EditorCommands.gotoSitePage", a)
		},
		_updateSelection: function() {
			var a = this.injects().Preview.getPreviewManagers().Viewer.getCurrentPageId();
			var b = this._skinParts.options.getElement('[value="' + a + '"]');
			this._setSelected(b)
		},
		_removeAllDataEvents: function() {
			var f, e, d, a, c;
			var b = this._menuData.getItems();
			for (f = 0, a = b.length;
			f < a;
			f++) {
				b[f].get("refId").removeEvent(Constants.DataEvents.DATA_CHANGED, this._updatePageName);
				c = b[f].get("items");
				for (e = 0, d = c.length;
				e < d;
				e++) {
					c[e].get("refId").removeEvent(Constants.DataEvents.DATA_CHANGED, this._updatePageName)
				}
			}
			this._menuData.removeEvent(Constants.DataEvents.DATA_CHANGED, this._populateDropDown)
		},
		_removeAllDomEvents: function() {
			document.body.removeEvent(Constants.CoreEvents.CLICK, this._onBlur);
			document.body.removeEvent(Constants.CoreEvents.KEY_DOWN, this._onKeyPress)
		},
		dispose: function() {
			this._removeAllDomEvents();
			this._removeAllDataEvents();
			this.parent()
		}
	}
});
W.Experiments.registerExperimentComponent("ToolTip", "New", {
	name: "experiments.wysiwyg.editor.components.ToolTip",
	skinParts: {
		moreInfo: {
			type: "htmlElement"
		},
		title: {
			type: "htmlElement"
		},
		isDontShowAgain: {
			type: "htmlElement"
		},
		isDontShowAgainCont: {
			type: "htmlElement"
		},
		moreHelp: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.viewer.components.InfoTip",
		_states: {
			hidden: ["hidden", "visible"],
			isMoreLess: ["isMoreLess"],
			isDontShowAgain: ["isDontShowAgain"],
			moreHelp: ["isMoreHelp"]
		},
		Binds: ["initialize", "_callTip"],
		options: {
			tipId: "",
			cookieName: "tips"
		},
		actions: {
			moreInfo: function() {
				this[0].removeState("isMoreLess", "isMoreLess")
			},
			dontShow: function() {
				this[0]._dontShow(this[1])
			},
			moreHelp: function() {
				this[0]._goToHellp(this[1])
			}
		},
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			W.Commands.registerCommandAndListener("Tooltip.ShowTip", this, this._showToolTipCmd);
			W.Commands.registerCommandAndListener("Tooltip.CloseTip", this, this._closeToolTipCmd);
			W.Commands.registerCommandListenerByName("WEditorCommands.WSetEditMode", this, function(d) {
				if (d.editMode == W.Editor.EDIT_MODE.PREVIEW || d.previousEditMode == W.Editor.EDIT_MODE.PREVIEW) {
					this._closeTip()
				}
			})
		},
		_onAllSkinPartsReady: function() {
			this._skinParts.moreInfo.set("text", W.Resources.get("EDITOR_LANGUAGE", "MORE_INFO"));
			this._skinParts.isDontShowAgainCont.appendText(W.Resources.get("EDITOR_LANGUAGE", "DONT_SHOW_AGAIN"))
		},
		_isToolTipMarkedAsDontShow: function(a) {
			return W.CookiesManager.getCookieParams(this.options.cookieName).indexOf(a) >= 0
		},
		_getToolTipFromMap: function(a) {
			return W.Data.dataMap.TOOLTIPS._data.toolTips[a] || false
		},
		_setToolTipValues: function(b) {
			var c = this.injects().Resources;
			var d = c.replacePlaceholders("EDITOR_LANGUAGE", b.title);
			var a = c.replacePlaceholders("EDITOR_LANGUAGE", b.content);
			this.parent(a);
			this._skinParts.title.set("html", d);
			this._setState(b.isMoreLess, "isMoreLess");
			this._skinParts.moreInfo.setCollapsed(!b.isMoreLess);
			this._setState(b.isDontShowAgain, "isDontShowAgain");
			this._skinParts.isDontShowAgainCont.setCollapsed(!b.isDontShowAgain);
			this._tipHelp(b.help)
		},
		_callTip: function(c, b) {
			if (this._isToolTipMarkedAsDontShow(c.id)) {
				return
			}
			var a = this._getToolTipFromMap(c.id);
			if (!a) {
				return false
			}
			this._resetToolTip();
			this.options.tipId = c.id;
			this._setToolTipValues(a);
			this._showTip(this._getToolTipCallerNode(b))
		},
		_resetToolTip: function() {
			for (var a in this.skinParts) {
				this._skinParts[a].empty()
			}
			this._skinParts.isDontShowAgain.checked = false
		},
		_tipHelp: function(b) {
			var a = b.isMoreHelp && !! b.text && !! b.url && b.text != "" && b.url != "";
			if (a) {
				this.setState("isMoreHelp");
				this._skinParts.moreHelp.set("text", b.text);
				this._skinParts.moreHelp.set("href", b.url)
			} else {
				this.removeState("isMoreHelp")
			}
			this._skinParts.moreHelp.setCollapsed(!a)
		},
		_goToHellp: function(b) {
			var a = this.injects().Config.getHelpServerUrl();
			var c = a + "/" + b.get("href");
			W.EditorDialogs.openHelpDialog(c)
		},
		_dontShow: function(a) {
			var b = (a.getElement("input") && a.getElement("input").get("checked")) || a.get("checked");
			if (b) {
				W.CookiesManager.setCookieParam(this.options.cookieName, this.options.tipId)
			} else {
				W.CookiesManager.removeCookieParam(this.options.cookieName, this.options.tipId)
			}
		}
	}
}, "wysiwyg.editor.components.ToolTip");
W.Experiments.registerExperimentComponent("TPA", "New", {
	name: "experiments.wysiwyg.editor.components.WButtonTPANew",
	skinParts: {
		icon: {
			type: "htmlElement",
			optional: "true"
		},
		label: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.WButton",
		_getIconUrl: function(b) {
			var a = this.injects().Theme.getProperty("WEB_THEME_DIRECTORY") + this._iconSrc;
			if (this._iconSrc.indexOf("http") == 0) {
				a = this._iconSrc
			}
			return a
		}
	}
});
W.Experiments.registerExperimentComponent("GridLines", "New", {
	name: "experiments.wysiwyg.editor.components.WEditorPreviewGridLinesNew",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.WEditorPreview",
		_setHeightAccordingToMode: function() {
			var a = 100;
			if (W.Editor.getEditMode() == W.Editor.EDIT_MODE.PREVIEW) {
				a = 0
			}
			var c = this._previewHeight + a;
			this._skinParts.mouseEventCatcher.setStyle("height", c);
			this._skinParts.viewFullSize.setStyle("height", c);
			var b = this.injects().Editor.getEditorUI().getSkinPart("gridLines");
			b.setHeight(c);
			b.setWidth(0)
		},
		setEditingMode: function(a) {
			var b = this.injects().Editor.getEditorUI().getSkinPart("gridLines");
			if (a) {
				this._skinParts.mouseEventCatcher.setStyle("display", "block");
				b.getViewNode().setStyle("display", "block")
			} else {
				this._skinParts.mouseEventCatcher.setStyle("display", "none");
				b.getViewNode().setStyle("display", "none")
			}
			this._skinParts.mouseEventCatcherLeft.setStyle("display", "none");
			this._skinParts.mouseEventCatcherRight.setStyle("display", "none");
			this._skinParts.mouseEventCatcherTop.setStyle("display", "none");
			this._skinParts.mouseEventCatcherBottom.setStyle("display", "none");
			this._setHeightAccordingToMode()
		}
	}
});
W.Experiments.registerNewExperimentComponent("TPA", "New", {
	name: "wysiwyg.editor.components.dialogs.AddAppDialog",
	skinParts: {
		description: {
			type: "htmlElement"
		},
		additionalDescription: {
			type: "htmlElement"
		},
		button: {
			type: "wysiwyg.editor.components.inputs.ButtonInput",
			argObject: {
				buttonLabel: "Add to Page",
				iconSrc: "/button-plus.png",
				iconSize: "32px"
			}
		},
		imageContainer: {
			type: "htmlElement"
		},
		photoSlide: {
			type: "wysiwyg.viewer.components.SlideShowGallery",
			argObject: {
				hideIndicatorElement: true
			},
			hookMethod: "_initializeSlideShow"
		}
	},
	imports: ["wysiwyg.editor.managers.AppStoreManager"],
	traits: ["mobile.editor.components.traits.DataPanel"],
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_onDialogClosing"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._closeDialogCB = b.closeCallback;
			this._appDefinitionData = b.appDefinitionData;
			this._type = b.type;
			this._widgetId = b.widgetId;
			this._dialogWindow = b.dialogWindow;
			this._dialogWindow.addEvent("onDialogClosing", this._onDialogClosing);
			this.Types = this.imports.AppStoreManager.Types
		},
		render: function() {},
		_onAllSkinPartsReady: function(c) {
			var j = this._appDefinitionData.appDefinitionId;
			c.button.addEvent("click", function() {
				var k = this.injects().AppStoreManager.countAppElements(this._type, j);
				LOG.reportEvent(wixEvents.APPS_FLOW_ADD_AS_TO_PAGE_BUTTON, {
					c1: this._type,
					i1: k
				});
				this._closeDialogCB();
				W.EditorDialogs.closeAllDialogs()
			}.bind(this));
			if (!W.TPAEditorManager.isAddAllowed(this._type, j)) {
				c.button.disable()
			}
			var i = this._appDefinitionData.description;
			var d = this.injects().Resources.get("EDITOR_LANGUAGE", "ADD_AS_PAGE");
			if (this._type != this.Types.TPA_SECTION) {
				var h = this._appDefinitionData.widgets;
				var e = h && h[this._widgetId];
				i = (e && e.description) || i;
				d = this.injects().Resources.get("EDITOR_LANGUAGE", "ADD_TO_PAGE")
			}
			c.button.setButtonLabel(d);
			c.description.set("text", i);
			c.additionalDescription.set("text", this.injects().Resources.get("EDITOR_LANGUAGE", "APPS_ADD_DIALOG_BOTTOM_DESCRIPTION"));
			c.imageContainer.setStyle("background-image", "url('" + this.injects().Config.getServiceTopologyProperty("staticMediaUrl") + "/157176afb17f2ed4238938cc188c40e8.wix_mp')");
			var a = [];
			var b = this._appDefinitionData.pictures;
			var g = b.length;
			if (g > 0) {
				var f = 3 - g;
				while (f > 0) {
					b.push(b[0]);
					f--
				}
				Array.each(b, function(l) {
					var k = this.injects().Data.addDataItemWithUniqueId("tpa", {
						type: "Image",
						uri: l
					});
					a.push("#" + k.id)
				}.bind(this))
			}
			c.photoSlide.setWidth(450);
			c.photoSlide.setHeight(250);
			c.photoSlide.setComponentProperty("expandEnabled", false);
			c.photoSlide.setDataItem(this.injects().Data.createDataItem({
				type: "ImageList",
				items: a
			}, "ImageList"));
			c.photoSlide.addEvent("displayerChanged", function() {
				LOG.reportEvent(wixEvents.APPS_FLOW_SLIDESHOW_INTERACTION, {
					g1: this._appDefinitionData.appDefinitionId
				})
			}.bind(this))
		},
		_initializeSlideShow: function(a) {
			a.dataItem = this.injects().Data.createDataItem({
				type: "ImageList",
				items: []
			}, "ImageList");
			return a
		},
		_onDialogClosing: function(a) {
			if (a.result == "CANCEL") {
				LOG.reportEvent(wixEvents.APPS_FLOW_ADD_DIALOG_CANCELED, {
					g1: this._appDefinitionData.appDefinitionId
				})
			}
		}
	}
});
W.Experiments.registerExperimentComponent("StyleNS", "New", {
	name: "experiments.wysiwyg.editor.components.dialogs.ChooseStyleDialog",
	Class: {
		Extends: "wysiwyg.editor.components.dialogs.ChooseStyleDialog",
		setEditedComponent: function(d) {
			this.disposeFields();
			this._editedComponent = d;
			this._originalStyle = d.getStyle().getId();
			this._currentlySelectedStyle = d.getStyle().getId();
			var j = this._editedComponent.getStyleNameSpace();
			var h = this._data.get("styleItems");
			var f = [];
			var a = h[j];
			var b;
			for (var c = 0;
			c < a.length;
			c++) {
				var e = W.Data.createDataItem({
					type: "Button",
					label: this.injects().Resources.get("EDITOR_LANGUAGE", "COMPONENT_STYLE_" + a[c]),
					commandParameter: a[c]
				}, "Button");
				if (a[c] == this._originalStyle) {
					b = c
				}
				f.push(e)
			}
			var g = this.addSelectionListInputField("", f, null, {
				type: "wysiwyg.editor.components.ChooseStyleButton",
				skin: "wysiwyg.editor.skins.buttons.ChooseStyleButtonSkin",
				numRepeatersInLine: 1
			});
			g.selectItemAtIndex(b);
			g.addEvent("itemOver", this._itemOver);
			g.addEvent("itemOut", this._itemOut);
			g.addEvent("inputChanged", this._itemClick);
			g.addEvent("editStyleClicked", this._editStyleClicked)
		},
		_setStyleByID: function(c) {
			var b = this.injects().Preview.getPreviewManagers().Theme.isStyleAvailable(c);
			if (b) {
				this.injects().Preview.getPreviewManagers().Theme.getStyle(c, function(e) {
					this._editedComponent.setStyle(e)
				}.bind(this))
			} else {
				var d = this._editedComponent.getStyleNameSpace();
				var a = W.Editor.getDefaultSkinForStyle(c) || W.Editor.getDefaultSkinForComp(d) || this._editedComponent.getSkin().className;
				this.injects().Preview.getPreviewManagers().Theme.createStyle(c, d, a, function(e) {
					this._editedComponent.setStyle(e)
				}.bind(this))
			}
		}
	}
});
W.Experiments.registerNewExperimentComponent("ColorPicker", "New", {
	name: "wysiwyg.editor.components.dialogs.ColorPickerDialog",
	skinParts: {
		SLBox: {
			type: "htmlElement"
		},
		SLBoxSolidColor: {
			type: "htmlElement"
		},
		SOverlay: {
			type: "htmlElement"
		},
		LOverlay: {
			type: "htmlElement"
		},
		HSPointer: {
			type: "htmlElement"
		},
		hueSlider: {
			type: "htmlElement"
		},
		hueBg: {
			type: "htmlElement"
		},
		hueBar: {
			type: "htmlElement"
		},
		HInput: {
			type: "htmlElement"
		},
		SInput: {
			type: "htmlElement"
		},
		LInput: {
			type: "htmlElement"
		},
		hexController: {
			type: "htmlElement"
		},
		hexInput: {
			type: "htmlElement"
		},
		alphaController: {
			type: "htmlElement"
		},
		alphaInput: {
			type: "htmlElement"
		},
		originColor: {
			type: "htmlElement"
		},
		currentColor: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_recalculateByBoxAndSlider", "_onBeforeClose", "_onHexChanged"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			b = b || {};
			this._color = new W.Color(b.color || "#FF0000");
			this._colorFullSL = this._createFullSLColor(this._color);
			this._isAlphaEnabled = b.isAlphaEnabled !== false;
			this._closeCommand = this.injects().Commands.createCommand("cp");
			this._changeCB = b.onChange;
			this._dialogWindow = b.dialogWindow;
			this._dialogWindow.addEvent("onDialogClosing", this._onBeforeClose)
		},
		render: function() {
			var a = this.injects().Theme.getProperty("THEME_DIRECTORY");
			var b = this._skinParts;
			b.SOverlay.set("src", a + "colorPicker/s_overlay.png");
			b.LOverlay.set("src", a + "colorPicker/l_overlay.png");
			b.hueBg.set("src", a + "colorPicker/hue.png");
			this._measureGUI();
			this.setOriginalColor(this._color);
			this._setFunctionality();
			this._syncToColor()
		},
		getColor: function() {
			return new W.Color(this._color)
		},
		setColor: function(b, a) {
			this._color = new W.Color(b);
			this._colorFullSL = this._createFullSLColor(b);
			if (a) {
				this.setOriginalColor(this._color)
			}
			this._syncToColor("newColor")
		},
		getOriginalColor: function() {
			return new W.Color(this._colorOrigin)
		},
		setOriginalColor: function(a) {
			this._colorOrigin = new W.Color(a);
			var b = (this._colorOrigin.getAlpha() === 0) ? 0.01 : this._colorOrigin.getAlpha();
			this._setBgColor(this._skinParts.originColor, this._colorOrigin.getHex(false), b, true)
		},
		enableAlpha: function(a) {
			this._isAlphaEnabled = a;
			if (!a && this._color) {
				this._color.setAlpha(1);
				this._syncToColor("alphaToggle");
				this._skinParts.alphaController.hide()
			} else {
				this._skinParts.alphaController.show()
			}
		},
		_onBeforeClose: function(c) {
			var b = "cancel";
			var a = this.getOriginalColor();
			if (c && c.result == "OK") {
				b = "ok";
				a = this.getColor()
			}
			this._onColorChange(a, b)
		},
		_onColorChange: function(a, b) {
			b = b || "change";
			this._changeCB({
				color: a,
				cause: b
			})
		},
		_onHexChanged: function() {
			var a = this._skinParts.hexInput.value;
			if (a === this._color.getHex()) {
				return
			}
			this._color.setHex(a);
			this._colorFullSL.setHex(a);
			this._syncToColor("hexInput")
		},
		_syncToColor: function(c) {
			var a, d, b = (c == "alphaInput" || c == "newColor");
			if (!this._isAlphaEnabled) {
				this._color.setAlpha(1)
			}
			this._setBgColor(this._skinParts.SLBoxSolidColor, this._colorFullSL.getHex(false), this._color.getAlpha(), b);
			if (c != "HSPointer" || c == "newColor") {
				a = ((this._color.getSaturation() / 100) * this._slSize.x) - +this._slPointerHalfSize;
				d = (this._slSize.y - ((this._color.getLuminous() / 100) * this._slSize.y)) - this._slPointerHalfSize;
				this._skinParts.HSPointer.setStyles({
					left: a,
					top: d
				})
			}
			if (c != "hueBar" || c == "newColor") {
				d = (this._colorFullSL.getHue() / 360) * (this._hueSliderHeight - this._hueSliderBarHeight);
				this._skinParts.hueBar.setStyle("top", d)
			}
			if (c != "alphaInput") {
				this._skinParts.alphaInput.value = Math.round(this._color.getAlpha() * 100)
			}
			if (c != "HInput") {
				this._skinParts.HInput.value = Math.round(this._color.getHue())
			}
			if (c != "SInput") {
				this._skinParts.SInput.value = Math.round(this._color.getSaturation())
			}
			if (c != "LInput") {
				this._skinParts.LInput.value = Math.round(this._color.getLuminous())
			}
			if (c != "hexInput") {
				this._skinParts.hexInput.value = this._color.getHex().substr(1)
			}
			this._setBgColor(this._skinParts.currentColor, this._color.getHex(false), this._color.getAlpha(), b);
			this._onColorChange(this._color, "change")
		},
		_setBgColor: function(b, a, c, d) {
			b.setStyle("background-color", a);
			if (d) {
				if (!window.Browser.ie) {
					b.setStyle("opacity", c)
				} else {
					b.setStyle("filter", "alpha(opacity=" + c * 100 + ")")
				}
			}
		},
		_measureGUI: function() {
			this._slPointerHalfSize = this._skinParts.HSPointer.getSize().x / 2;
			this._slSize = this._skinParts.SLBox.getSize();
			this._hueSliderHeight = this._skinParts.hueSlider.getSize().y;
			this._hueSliderBarHeight = this._skinParts.hueBar.getSize().y
		},
		_setHexInput: function() {
			this._skinParts.hexInput.addEvent("keyup", this._onHexChanged);
			this._skinParts.hexInput.addEvent("paste", this._onHexChanged)
		},
		_setSatAndLumDrag: function() {
			this._slPointerDrag = new Drag.Move(this._skinParts.HSPointer, {
				limit: {
					x: [(0 - this._slPointerHalfSize), (this._slSize.x - this._slPointerHalfSize)],
					y: [(0 - this._slPointerHalfSize), (this._slSize.y - this._slPointerHalfSize)]
				},
				onDrag: this._recalculateByBoxAndSlider,
				snap: 0
			})
		},
		_setSatAndLumClick: function() {
			this._skinParts.SLBox.addEvent("mousedown", function(a) {
				a = new Event(a);
				this._skinParts.HSPointer.setStyles({
					top: a.page.y - this._skinParts.SLBox.getTop() - this._slPointerHalfSize,
					left: a.page.x - this._skinParts.SLBox.getLeft() - this._slPointerHalfSize
				});
				this._slPointerDrag.start(a);
				this._recalculateByBoxAndSlider()
			}.bind(this))
		},
		_setHueSliderDrag: function() {
			var a = this._skinParts.hueBar.getStyle("left").toInt();
			a = (isNaN(a)) ? 0 : a;
			this._hueSliderDrag = new Drag.Move(this._skinParts.hueBar, {
				limit: {
					x: [a, a],
					y: [0, (this._hueSliderHeight - this._hueSliderBarHeight)]
				},
				onDrag: this._recalculateByBoxAndSlider,
				snap: 0
			})
		},
		_setHueSliderClick: function() {
			this._skinParts.hueSlider.addEvent("mousedown", function(a) {
				a = new Event(a);
				this._skinParts.hueBar.setStyle("top", (a.page.y - this._skinParts.hueSlider.getTop()));
				this._hueSliderDrag.start(a);
				this._recalculateByBoxAndSlider()
			}.bind(this))
		},
		_setFunctionality: function() {
			this._setHexInput();
			this._setSatAndLumDrag();
			this._setSatAndLumClick();
			this._setHueSliderDrag();
			this._setHueSliderClick();
			this._setInputFunctionality(this._skinParts.alphaInput, 0, 100, 100, function(a) {
				this._color.setAlpha(a / 100);
				this._syncToColor("alphaInput")
			}.bind(this));
			this._setInputFunctionality(this._skinParts.HInput, 0, 359, 359, function(a) {
				if (a === this._color.getHue()) {
					return
				}
				this._color.setHue(a);
				this._colorFullSL.setHue(a);
				this._syncToColor("HInput")
			}.bind(this));
			this._setInputFunctionality(this._skinParts.SInput, 0, 100, 100, function(a) {
				if (a === this._color.getSaturation()) {
					return
				}
				this._color.setSaturation(a);
				this._syncToColor("SInput")
			}.bind(this));
			this._setInputFunctionality(this._skinParts.LInput, 0, 100, 100, function(a) {
				if (a === this._color.getLuminous()) {
					return
				}
				this._color.setLuminous(a);
				this._syncToColor("LInput")
			}.bind(this));
			this._skinParts.originColor.addEvent("click", function() {
				this.setColor(this._colorOrigin)
			}.bind(this))
		},
		_setInputFunctionality: function(c, d, a, b, f) {
			var e = function(i) {
					i.stop();
					var g, h = c.value.toInt();
					h = Math.round(Number((isNaN(h)) ? b : h));
					if (i.type == Element.Events.mousewheel.base) {
						h += (i.wheel != -1) ? 1 : -1
					}
					g = Math.min(h, a);
					g = Math.max(g, d);
					if (g != h || i.type == Element.Events.mousewheel.base) {
						c.value = g
					}
					f(g)
				}.bind(this);
			c.addEvents({
				keyup: e,
				mousewheel: e
			})
		},
		_recalculateByBoxAndSlider: function(d) {
			var c = ((this._skinParts.HSPointer.getStyle("left").toInt() + this._slPointerHalfSize) / this._slSize.x) * 100;
			var a = 100 - (((this._skinParts.HSPointer.getStyle("top").toInt() + this._slPointerHalfSize) / this._slSize.y) * 100);
			var b = ((this._skinParts.hueBar.getStyle("top").toInt()) / (this._hueSliderHeight - this._hueSliderBarHeight)) * 360;
			this._color.setHsl([b, c, a]);
			this._colorFullSL.setHue(b);
			this._syncToColor()
		},
		_createFullSLColor: function(b) {
			var a = new W.Color(b);
			a.setSaturation(100);
			a.setLuminous(100);
			return a
		}
	}
});
W.Experiments.registerExperimentComponent("ColorPicker", "New", {
	name: "experiments.wysiwyg.editor.components.dialogs.ColorSelectorColorPicker",
	skinParts: {
		content: {
			type: "htmlElement"
		},
		customColorLink: {
			type: "htmlElement",
			autoBindDictionary: "SELECT_COLOR_DIALOG_CUSTOM"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.dialogs.ColorSelector",
		_openCustomColorPicker: function(c) {
			var a = new W.Color(this._selectedColor);
			var f = this.injects().Utils.getPositionRelativeToWindow(this._skinParts.view);
			var b = this._skinParts.view.getSize();
			var d = {
				color: a,
				onChange: this._onCustomColorPickerClose,
				callback: this._closeColorDialog,
				top: f.y + b.y * 0.66,
				left: f.x + b.x * 0.66
			};
			this.injects().Commands.executeCommand("WEditorCommands.ShowColorPickerDialog", d)
		},
		_onCustomColorPickerReady: function() {}
	}
});
W.Experiments.registerNewExperimentComponent("Dev", "New", {
	name: "wysiwyg.editor.components.dialogs.ExperimentsDialog",
	skinParts: {
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.base.AutoPanel",
		Binds: ["_onRunClick", "_onCheckBoxClick", "_onBeforeClose"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._experiments = {};
			this._initializePrivateList();
			this._dialogWindow = b.dialogWindow;
			this._dialogWindow.addEvent("onDialogClosing", this._onBeforeClose)
		},
		_initializePrivateList: function() {
			var e = W.Experiments._deploymentOrder;
			for (var d = 0;
			d < e.length;
			d++) {
				var g = e[d].id;
				var f = W.Experiments._registeredExperiments[g];
				if (f) {
					var a = Object.keys(f);
					for (var b = 0;
					b < a.length;
					b++) {
						var c = a[b];
						var h = typeof W.Experiments._deployedExperiments[g] != "undefined" && W.Experiments._deployedExperiments[g] == c;
						this._experiments[g + " " + c] = {
							expId: g,
							groupId: c,
							opened: h
						}
					}
				}
			}
		},
		_createFields: function() {
			this.setNumberOfItemsPerLine(1, 15);
			for (var b in this._experiments) {
				var a = this._experiments[b];
				if (b != "Dev New") {
					this.addCheckBoxField(a.expId + ": " + a.groupId).setValue(b).addEvent("inputChanged", function(c) {
						this._experiments[c.valueString].opened = !this._experiments[c.valueString].opened
					}.bind(this)).runWhenReady(function(c) {
						c.setChecked(this._experiments[c.getValueString()].opened)
					}.bind(this));
					this.addBreakLine(1, "1px solid #ddd", 4)
				}
			}
		},
		_onOkClick: function() {
			var a = "http://" + window.location.host + window.location.pathname + "?" + this._buildExperimentsQuery();
			this._loadEditor(a)
		},
		_onCheckBoxClick: function() {},
		_buildExperimentsQuery: function() {
			var b = "leavePagePopUp=false";
			if (window.location.search.indexOf("mode=debug") >= 0) {
				b += "&mode=debug"
			}
			for (expId in this._experiments) {
				var a = this._experiments[expId];
				if (a.opened && a.expId != "Dev") {
					b += "&experiment=" + a.expId + ":" + a.groupId
				}
			}
			return b
		},
		_loadEditor: function(a) {
			window.location = a
		},
		_onBeforeClose: function(a) {
			if (a && a.result == "OK") {
				this._onOkClick()
			}
		}
	}
});
W.Experiments.registerExperimentComponent("SM", "New", {
	name: "experiments.wysiwyg.editor.components.dialogs.SaveDialogSMNew",
	skinParts: {
		content: {
			type: "htmlElement"
		}
	},
	traits: ["mobile.editor.components.traits.DataPanel"],
	Class: {
		Extends: "wysiwyg.editor.components.dialogs.SaveDialog",
		Binds: [],
		_completeOtherProvisionAfterMetasiteSave: function(a, b) {
			this.injects().SMEditor.completeProvisionAfterMetasiteSave(function() {
				b()
			}.bind(this))
		}
	}
});
W.Experiments.registerExperimentComponent("TPA", "New", {
	name: "experiments.wysiwyg.editor.components.dialogs.SaveDialogTPANew",
	skinParts: {
		content: {
			type: "htmlElement"
		}
	},
	traits: ["mobile.editor.components.traits.DataPanel"],
	Class: {
		Extends: "wysiwyg.editor.components.dialogs.SaveDialog",
		Binds: [],
		_onCloneSuccess: function(b) {
			window.enableNavigationConfirmation = false;
			var a = b.metaSiteId;
			window.editorModel.metaSiteId = a;
			window.siteHeader.id = b.id;
			if (W.Config.siteNeverSavedBefore()) {
				W.AppStoreManager.completeProvisionAfterMetasiteSave(a, function() {
					this._completeOtherProvisionAfterMetasiteSave(a, function() {
						this._navigateToEditOnFirstSave()
					}.bind(this))
				}.bind(this))
			} else {
				this._navigateToEditOnFirstSave()
			}
		},
		_completeOtherProvisionAfterMetasiteSave: function(a, b) {
			b()
		},
		_navigateToEditOnFirstSave: function() {
			if (this.injects().Config.siteNeverSavedBefore() || this._saveAs) {
				var b = this.getExperimentsFromUrl();
				var a = W.Utils.getQueryParam("appDefinitionId", location.href);
				if (a) {
					b = b.concat(["appDefinitionId=" + a])
				}
				var c = "&" + b.join("&");
				window.location = W.ServerFacade.getEditUrl(window.siteHeader.id) + c + "#save=1"
			}
		},
		getExperimentsFromUrl: function() {
			var c = window.location.search.slice(1);
			var b = c.split("&");
			var a = [];
			if (b) {
				a = b.filter(function(e, d) {
					return e.test(/^experiment|override_featureToggles/)
				})
			}
			return a
		}
	}
});
W.Experiments.registerNewExperimentComponent("TPA", "New", {
	name: "wysiwyg.editor.components.dialogs.TPASettings",
	skinParts: {
		iframe: {
			type: "htmlElement"
		}
	},
	traits: ["mobile.editor.components.traits.DataPanel"],
	Class: {
		Extends: "wysiwyg.editor.components.Iframe",
		Binds: ["_handlePostMessage"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._previewComponent = b.previewComponent;
			this._appIsAlive = false;
			this._dialogWindow = b.dialogWindow;
			this._dialogWindow.addEvent("onDialogClosing", this._onDialogClosing);
			window.addEventListener("message", this._handlePostMessage, false)
		},
		render: function() {
			var b = this._previewComponent.getAppData();
			this._appDefinitionId = b.appDefinitionId;
			var d = b.settingsUrl;
			var c = this.injects().Preview.getPreviewManagers().TPA;
			var a = c.getURLBuilder().buildStateLessUrl(d, ["instance", "width"], this, b);
			if (!a) {
				this.injects().TPA.showAppNotAvailable(this)
			} else {
				this.setUrl(a);
				this.injects().Preview.getPreviewManagers().TPA.reportLoadStart(this)
			}
			LOG.reportEvent(wixEvents.APPS_FLOW_APP_SETTINGS_OPEN, {
				g1: this._appDefinitionId
			})
		},
		isAppAlive: function() {
			return this._appIsAlive
		},
		handleHeightChanged: function(a) {
			this._changeSize({
				h: a - 5
			})
		},
		handleAppSettingsChanged: function() {
			var a = this._previewComponent.getApplicationId();
			this.injects().Preview.getPreviewManagers().TPA.getComponentRegistrar().each(a, function(b) {
				b.renderWhenPossible()
			})
		},
		handleAppIsAlive: function() {
			this._appIsAlive = true
		},
		handleAppSettingsClose: function() {
			this._dialogWindow.closeDialog()
		},
		_handlePostMessage: function(a) {
			this.injects().Preview.getPreviewManagers().TPA.handlePostMessage(a, function(b) {
				if (this.getComponentId() == b) {
					return this
				} else {
					return null
				}
			}.bind(this))
		},
		_onDialogClosing: function(a) {
			LOG.reportEvent(wixEvents.APPS_FLOW_APP_SETTINGS_CLOSE, {
				g1: this._appDefinitionId
			})
		},
		dispose: function() {
			window.removeEventListener("message", this._handlePostMessage, false);
			this.parent()
		}
	}
});
W.Experiments.registerNewExperimentComponent("AudioPlayer", "New", {
	name: "wysiwyg.editor.components.inputs.AudioInput",
	skinParts: {
		noItemLabel: {
			type: "htmlElement"
		},
		label: {
			type: "htmlElement"
		},
		changeButton: {
			type: "wysiwyg.editor.components.WButton"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.inputs.BaseInput",
		Binds: ["_onAudioSelect", "_openAudioDialog"],
		_states: ["gotAudio"],
		HeightWidth: {
			height: null,
			width: null
		},
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._buttonText = b.buttonText || "";
			this._buttonTextWhenNoSelectedItem = b.buttonTextWhenNoSelectedItem || this._buttonText;
			this._defaultEmptyItemText = b.defaultEmptyItemText || "";
			this._galleryTypeID = b.galleryConfigID || "audio";
			this.setCommand("WEditorCommands.OpenImageDialog")
		},
		render: function() {
			this.parent();
			this._setAudioFileSelectedState();
			var a = this._isGotAudioFile() ? this._buttonText : this._buttonTextWhenNoSelectedItem;
			this._skinParts.changeButton.setLabel(a);
			this._skinParts.noItemLabel.set("html", this._defaultEmptyItemText)
		},
		setValue: function(a) {
			this._audioRawData = a;
			this._setAudioFileSelectedState();
			this.setLabel(a.originalFileName)
		},
		_setAudioFileSelectedState: function() {
			if (this._isGotAudioFile()) {
				this.setState("gotAudio")
			} else {
				this.removeState("gotAudio")
			}
		},
		_isGotAudioFile: function() {
			return !!this._audioRawData && this._audioRawData.uri.length > 0
		},
		getValue: function() {
			return this._audioRawData
		},
		_openAudioDialog: function() {
			this.executeCommand({
				callback: this._onAudioSelect,
				galleryTypeID: this._galleryTypeID
			})
		},
		_onAudioSelect: function(b) {
			var a = this.injects().Data.createDataItem(b);
			this.setValue(a.getData());
			this._changeEventHandler({})
		},
		_changeEventHandler: function(a) {
			this.parent(a)
		},
		_listenToInput: function() {
			this._skinParts.changeButton.addEvent(Constants.CoreEvents.CLICK, this._openAudioDialog)
		},
		_stopListeningToInput: function() {
			this._skinParts.changeButton.removeEvent(Constants.CoreEvents.CLICK, this._openAudioDialog)
		}
	}
});
W.Experiments.registerNewExperimentComponent("BoxShadow", "New", {
	name: "wysiwyg.editor.components.inputs.BoxShadowInput",
	skinParts: {
		label: {
			type: "htmlElement"
		},
		shadowX: {
			type: "wysiwyg.editor.components.inputs.Slider",
			argObject: {
				min: -50,
				max: 50
			}
		},
		shadowY: {
			type: "wysiwyg.editor.components.inputs.Slider",
			argObject: {
				min: -50,
				max: 50
			}
		},
		shadowBlur: {
			type: "wysiwyg.editor.components.inputs.Slider",
			argObject: {
				min: 0,
				max: 100
			}
		},
		shadowSpread: {
			type: "wysiwyg.editor.components.inputs.Slider",
			argObject: {
				min: -50,
				max: 50
			}
		},
		shadowColor: {
			type: "wysiwyg.editor.components.inputs.ColorInput"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.inputs.BaseInput",
		_states: {
			label: ["hasLabel", "noLabel"]
		},
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._value = new W.BoxShadow()
		},
		setValue: function(a) {
			this._value = new W.BoxShadow(a);
			this._skinParts.shadowX.setValue(parseInt(this._value.getOffsetX()));
			this._skinParts.shadowY.setValue(parseInt(this._value.getOffsetY()));
			this._skinParts.shadowBlur.setValue(parseInt(this._value.getBlurRadius()));
			this._skinParts.shadowSpread.setValue(parseInt(this._value.getSpreadRadius()));
			this._skinParts.shadowColor.setValue(this._value.getColor())
		},
		getValue: function() {
			this._value.setOffsetX(this._skinParts.shadowX.getValue());
			this._value.setOffsetY(this._skinParts.shadowY.getValue());
			this._value.setBlurRadius(this._skinParts.shadowBlur.getValue());
			this._value.setSpreadRadius(this._skinParts.shadowSpread.getValue());
			this._value.setColor(this._skinParts.shadowColor.getValue());
			return this._value.getCssValue()
		},
		_onAllSkinPartsReady: function() {
			this._skinParts.shadowX.setLabel("X");
			this._skinParts.shadowY.setLabel("Y");
			this._skinParts.shadowBlur.setLabel("Blur");
			this._skinParts.shadowSpread.setLabel("Spread");
			this._skinParts.shadowColor.setLabel("Color")
		},
		disable: function() {
			this.parent();
			if (this.isReady()) {
				this._skinParts.shadowX.disable();
				this._skinParts.shadowY.disable();
				this._skinParts.shadowBlur.disable();
				this._skinParts.shadowSpread.disable();
				this._skinParts.shadowColor.disable()
			}
		},
		enable: function() {
			this.parent();
			if (this.isReady()) {
				this._skinParts.shadowX.enable();
				this._skinParts.shadowY.enable();
				this._skinParts.shadowBlur.enable();
				this._skinParts.shadowSpread.enable();
				this._skinParts.shadowColor.enable()
			}
		},
		_listenToInput: function() {
			this._skinParts.shadowX.addEvent("inputChanged", this._changeEventHandler);
			this._skinParts.shadowY.addEvent("inputChanged", this._changeEventHandler);
			this._skinParts.shadowBlur.addEvent("inputChanged", this._changeEventHandler);
			this._skinParts.shadowSpread.addEvent("inputChanged", this._changeEventHandler);
			this._skinParts.shadowColor.addEvent("inputChanged", this._changeEventHandler)
		},
		_stopListeningToInput: function() {
			this._skinParts.shadowX.removeEvent("inputChanged", this._changeEventHandler);
			this._skinParts.shadowY.removeEvent("inputChanged", this._changeEventHandler);
			this._skinParts.shadowBlur.removeEvent("inputChanged", this._changeEventHandler);
			this._skinParts.shadowSpread.removeEvent("inputChanged", this._changeEventHandler);
			this._skinParts.shadowColor.removeEvent("inputChanged", this._changeEventHandler)
		}
	}
});
W.Experiments.registerExperimentComponent("Dev", "New", {
	name: "experiments.wysiwyg.editor.components.inputs.CheckBox",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.inputs.CheckBox",
		_states: {
			label: ["hasLabel", "noLabel"]
		},
		getValueString: function() {
			return this._skinParts.checkBox.getProperty("value")
		},
		_changeEventHandler: function(d) {
			var c = this.getValue();
			var a = this.getValueString();
			var b = {
				value: c,
				valueString: a,
				origEvent: d,
				compLogic: this
			};
			this.fireEvent("inputChanged", b)
		}
	}
});
W.Experiments.registerExperimentComponent("ColorPicker", "New", {
	name: "experiments.wysiwyg.editor.components.inputs.ColorInputColorPicker",
	skinParts: merge({
		colorButton: {
			type: "wysiwyg.editor.components.ColorDialogButton"
		}
	}),
	Class: {
		Extends: "wysiwyg.editor.components.inputs.ColorInput",
		_states: {
			label: ["hasLabel", "noLabel"],
			mouse: ["over", "pressed"]
		},
		_showPicker: function(a) {
			this._skinParts.colorButton.openColorDialog(a)
		}
	}
});
W.Experiments.registerNewExperimentComponent("AudioPlayer", "New", {
	name: "wysiwyg.editor.components.panels.AudioPlayerPanel",
	imports: [],
	traits: ["mobile.editor.components.traits.DataPanel"],
	skinParts: {
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.base.AutoPanel",
		Binds: [],
		initialize: function(c, a, b) {
			this.parent(c, a, b)
		},
		_createFields: function() {
			this.addInputGroupField(function() {
				this.addAudioField(null, this.injects().Resources.get("EDITOR_LANGUAGE", "AUDIO_REPLACE_AUDIO"), this.injects().Resources.get("EDITOR_LANGUAGE", "AUDIO_SET_AUDIO"), this.injects().Resources.get("EDITOR_LANGUAGE", "AUDIO_NO_ITEM_TEXT"), "audio", false, undefined, undefined).bindToDataItem(this._data)
			});
			this.addLabel(this.injects().Resources.get("EDITOR_LANGUAGE", "AUDIO_OPTIONS_TEXT"));
			this.addInputGroupField(function() {
				this.addCheckBoxField(this._translate("AUDIOPLAYER_AUTOPLAY")).bindToField("autoPlay");
				this.addCheckBoxField(this._translate("AUDIOPLAYER_LOOP")).bindToField("loop");
				this.addBreakLine("10px", "1px solid #bbb", "10px");
				this.addSliderField(this._translate("AUDIOPLAYER_VOLUME"), 0, 100, 1, false, false).bindToField("volume")
			});
			this.injects().Data.getDataByQuery("#STYLES", this._createStylePanel)
		},
		getAcceptableDataTypes: function() {
			return ["AudioPlayer"]
		}
	}
});
W.Experiments.registerNewExperimentComponent("ColorPicker", "New", {
	name: "wysiwyg.editor.components.ColorDialogButton",
	skinParts: {
		label: {
			type: "htmlElement"
		},
		bg: {
			type: "htmlElement"
		},
		icon: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.WButton",
		Binds: ["_onColorChange", "_closeColorDialog"],
		Static: {},
		_states: {},
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			b = b || {};
			this._isAlphaEnabled = b.isAlphaEnabled !== false;
			this._isHexEnabled = b.isHexEnabled || false;
			this._defaultColor = b.color || "#000000"
		},
		render: function() {
			this.setHexDisplay(this._isHexEnabled)
		},
		_onAllSkinPartsReady: function() {
			this.setColor(this._defaultColor)
		},
		setColor: function(a) {
			this._color = new W.Color(a);
			this._skinParts.bg.setStyles({
				"background-color": this._color.getHex()
			});
			if (Modernizr && Modernizr.opacity) {
				this._skinParts.bg.setStyle("opacity", this._color.getAlpha())
			} else {
				this._skinParts.bg.setStyle("filter", "alpha(opacity=" + this._color.getAlpha() * 100 + ")")
			}
		},
		enableAlpha: function(a) {
			this._isAlphaEnabled = a;
			if (!a && this._color) {
				this._color.setAlpha(1);
				this.setColor(this._color)
			}
		},
		setHexDisplay: function(a) {
			this._isHexEnabled = a
		},
		setSize: function(b, a) {
			if (b) {
				this._view.setStyle("width", b)
			}
			if (a) {
				this._view.setStyle("height", a)
			}
		},
		getColor: function() {
			return this._color
		},
		openColorDialog: function() {
			var c = this.injects().Utils.getPositionRelativeToWindow(this._skinParts.view);
			var a = this._skinParts.view.getSize();
			var b = {
				color: this.getColor(),
				onChange: this._onColorChange,
				callback: this._closeColorDialog,
				top: c.y + a.y * 0.66,
				left: c.x + a.x * 0.66
			};
			this.injects().Commands.executeCommand("WEditorCommands.ShowColorPickerDialog", b)
		},
		_onColorChange: function(a) {
			if (!a) {
				return
			}
			this.setColor(a.color);
			this.fireEvent(Constants.CoreEvents.CHANGE, {
				color: a.color,
				cause: a.cause
			})
		},
		_closeColorDialog: function() {},
		_onClick: function(a) {
			this.parent(a);
			this.openColorDialog()
		}
	}
});
W.Experiments.registerExperimentComponent("FPP", "New", {
	name: "experiments.wysiwyg.editor.components.panels.ComponentPanelFpp",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.ComponentPanel",
		_states: {
			moveScope: ["moveToMaster", "moveToPage", "disabled", "notChangeable"]
		},
		exitEditMode: function() {
			this._disposeInnerDataPanel();
			this.injects().Commands.executeCommand(Constants.EditorUI.CLOSE_PROPERTY_PANEL)
		},
		setEditedComponent: function() {
			var a = (this._editedComponent == this.injects().Editor.getEditedComponent());
			if (a) {
				this._setPanelScope();
				return
			}
			this._editedComponent = this.injects().Editor.getEditedComponent();
			this._addToolTipToSkinPart(this._skinParts.allowAnchorsButton, "Boundary_box_Anchor_button_ttid");
			this._setPanelTexts();
			this._setPanelScope();
			this._setPanelPartsFromData();
			this.updateCompPosSize();
			this._setShowAnchorsButtonState(false);
			this._disableInputsAccordingToComponent();
			this._setPanelHeightRelativeToWindowHeight();
			this._enableAnchorsButton()
		},
		_onAllSkinPartsReady: function() {
			this.collapse();
			this.disable();
			this._bindInternalEvents();
			this._bindExternalEvents();
			this._addInMasterPageCheckBox()
		},
		_enableAnchorsButton: function() {
			this._enableLayoutLocks = !this._editedComponent.isMultiSelect && this._editedComponent.allowHeightLock();
			if (this._enableLayoutLocks) {
				this._skinParts.allowAnchorsButton.removeAttribute("disabled")
			} else {
				this._skinParts.allowAnchorsButton.setAttribute("disabled", "disabled")
			}
		},
		_bindExternalEvents: function() {
			window.addEvent(Constants.CoreEvents.RESIZE, this._setPanelHeightRelativeToWindowHeight);
			this.injects().Editor.addEvent(Constants.EditorEvents.SITE_PAGE_CHANGED, function() {
				if (this._editedComponent) {
					this.updateCompPosSize()
				}
			}.bind(this))
		},
		_bindInternalEvents: function() {
			this._skinParts.xInput.addEvent(Constants.CoreEvents.BLUR, this._onFieldChange);
			this._skinParts.yInput.addEvent(Constants.CoreEvents.BLUR, this._onFieldChange);
			this._skinParts.wInput.addEvent(Constants.CoreEvents.BLUR, this._onFieldChange);
			this._skinParts.hInput.addEvent(Constants.CoreEvents.BLUR, this._onFieldChange);
			this._skinParts.xInput.addEvent(Constants.CoreEvents.KEY_UP, this._onKeyUp);
			this._skinParts.yInput.addEvent(Constants.CoreEvents.KEY_UP, this._onKeyUp);
			this._skinParts.wInput.addEvent(Constants.CoreEvents.KEY_UP, this._onKeyUp);
			this._skinParts.hInput.addEvent(Constants.CoreEvents.KEY_UP, this._onKeyUp);
			this._skinParts.allowAnchorsButton.addEvent(Constants.CoreEvents.CLICK, this._onAllowAnchorsButtonClick);
			this._skinParts.dataPanelContainer.addEvent(Constants.CoreEvents.MOUSE_WHEEL, this.injects().Utils.stopMouseWheelPropagation);
			this._skinParts.help.addEvent(Constants.CoreEvents.CLICK, function() {
				this.injects().Commands.executeCommand("WEditorCommands.ShowHelpDialog", "COMPONENT_PANEL_" + this._getComponentLabel())
			}.bind(this))
		},
		_addInMasterPageCheckBox: function() {
			var b = this.injects().Editor;
			this._skinParts.isInMasterCB.addEvent("inputChanged", function(c) {
				b.moveCurrentComponentToOtherScope(this.isEnabled())
			});
			this._skinParts.isInMasterCB.setValue(false);
			this._skinParts.isInMasterCB.setLabel(this.injects().Resources.get("EDITOR_LANGUAGE", "SHOW_ON_ALL_PAGES"));
			var a = this.injects().Theme.getProperty("WEB_THEME_DIRECTORY") + "icons/property_panel_help_sprite.png";
			this._tooltipIcon = new Element("span", {
				html: "&nbsp;",
				"class": "tooltipIcon",
				styles: {
					backgroundImage: "url(" + a + ")"
				}
			});
			this._skinParts.isInMasterCB._skinParts.label.grab(this._tooltipIcon, "after").setStyles({
				display: "inline"
			})
		},
		_setPanelTexts: function() {
			var c = this._getComponentLabel();
			var b = this.injects().Resources.get("EDITOR_LANGUAGE", "COMP_" + c);
			var a = this.injects().Resources.get("EDITOR_LANGUAGE", "COMP_DESC_" + c);
			this._skinParts.panelLabel.set("html", b);
			this._skinParts.panelDescription.set("html", a)
		},
		_setPanelScope: function() {
			if (!this._editedComponent.canMoveToOtherScope()) {
				this.setState("disabled", "moveScope")
			} else {
				var a = this._editorMode == this.injects().Editor.EDIT_MODE.CURRENT_PAGE;
				this._skinParts.isInMasterCB.setValue(!a);
				if (this._editedComponent.getShowOnAllPagesChangeability()) {
					this.setState(a ? "moveToMaster" : "moveToPage", "moveScope");
					this._skinParts.isInMasterCB.enable();
					this._addToolTipToSkinPart(this._tooltipIcon, "Component_Panel_is_in_master_ttid")
				} else {
					this.setState("notChangeable", "moveScope");
					this._skinParts.isInMasterCB.disable();
					this._addToolTipToSkinPart(this._tooltipIcon, "Component_Panel_is_in_master_not_changeable_ttid")
				}
			}
		},
		_setPanelPartsFromData: function() {
			this._skinParts.dataPanelContainer.empty();
			this._dataPanel = null;
			var b = this._editedComponent.getDataItem();
			var a = (b) ? b.getType() : "";
			var c = this.injects().Editor.getDataPanel(a, this._editedComponent.getOriginalClassName());
			if (c) {
				this._dataPanel = this.injects().Components.createComponent(c.logic, c.skin, this._editedComponent.getDataItem(), {
					previewComponent: this._editedComponent
				});
				this._skinParts.dataPanelContainer.adopt(this._dataPanel)
			}
		},
		_onFieldChange: function(c) {
			var d = parseInt(c.target.getProperty("value"), 10);
			var b = this.injects().Commands.getCommand("WEditorCommands.SetSelectedCompPositionSize");
			var e = null;
			var a = {};
			var f = this.getSizeLimits();
			if (isNaN(d)) {
				this.updateCompPosSize();
				return
			}
			switch (c.target) {
			case this._skinParts.xInput:
				a.x = Math.min(Math.max(d, this.MINIMUM_X_DEFAULT), this.MAXIMUM_X_DEFAULT);
				if (a.x != this.last.x) {
					this.last.x = a.x;
					e = a
				}
				break;
			case this._skinParts.yInput:
				a.y = Math.min(Math.max(d, this.MINIMUM_Y_DEFAULT), this.MAXIMUM_Y_DEFAULT);
				if (a.y != this.last.y) {
					this.last.y = a.y;
					e = a
				}
				break;
			case this._skinParts.wInput:
				if (this._editedComponent && this._editedComponent.isHorizResizable()) {
					a.width = Math.min(Math.max(d, f.minW), f.maxW);
					if (a.width != this.last.width) {
						this.last.width = a.width;
						e = a
					}
				}
				break;
			case this._skinParts.hInput:
				if (this._editedComponent && this._editedComponent.isVertResizable()) {
					a.height = Math.min(Math.max(d, f.minH), f.maxH);
					if (a.height != this.last.height) {
						this.last.height = a.height;
						e = a
					}
				}
				break
			}
			if (e) {
				e.updateLayout = true;
				b.execute(e, this);
				if (e.width || e.height) {
					this._editedComponent.fireEvent("resizeEnd")
				}
			}
		},
		_setPanelHeightRelativeToWindowHeight: function() {
			var b = 120;
			var a = 0;
			this._panelDetailsHeight = this._measureHeightWithoutContent();
			if (!this._panelDetailsHeight) {
				if (this._measureAgainLater()) {
					return
				}
			} else {
				this._heightCalcTimerCounter = 0
			}
			a = window.getSize().y - this._panelDetailsHeight - b;
			this._skinParts.dataPanelContainer.setStyle("height", a)
		},
		_disposeInnerDataPanel: function() {
			this._dataPanel && this._dataPanel.dispose();
			this._dataPanel = null;
			this._editedComponent = null
		}
	}
});
W.Experiments.registerExperimentComponent("GridLines", "New", {
	name: "experiments.wysiwyg.editor.components.panels.ComponentPanelGridLinesNew",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.ComponentPanel",
		updateCompPosSize: function() {
			if (this._editedComponent) {
				this.last.x = this._editedComponent.getX();
				this.last.y = this._editedComponent.getY();
				this.last.width = this._editedComponent.getWidth();
				this.last.height = this._editedComponent.getHeight();
				this._skinParts.xInput.setProperty("value", this.last.x);
				this._skinParts.yInput.setProperty("value", this.last.y);
				this._skinParts.wInput.setProperty("value", this.last.width);
				this._skinParts.hInput.setProperty("value", this.last.height)
			}
		}
	}
});
W.Experiments.registerExperimentComponent("MasterPage", "New", {
	name: "experiments.wysiwyg.editor.components.panels.ComponentPanelMasterPage",
	skinParts: {
		dataPanelContainer: {
			type: "htmlElement"
		},
		panelLabel: {
			type: "htmlElement"
		},
		panelDescription: {
			type: "htmlElement"
		},
		xInput: {
			type: "htmlElement"
		},
		yInput: {
			type: "htmlElement"
		},
		wInput: {
			type: "htmlElement"
		},
		hInput: {
			type: "htmlElement"
		},
		help: {
			type: "htmlElement"
		},
		close: {
			type: "htmlElement",
			command: Constants.EditorUI.CLOSE_PROPERTY_PANEL
		},
		generalProperties: {
			type: "htmlElement"
		},
		scopeButtonContainer: {
			type: "htmlElement"
		},
		isInMasterCB: {
			type: "wysiwyg.editor.components.inputs.CheckBox"
		},
		allowAnchorsButton: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.ComponentPanel",
		_states: {
			moveScope: ["moveToMaster", "moveToPage", "disabled", "notChangeable"]
		},
		editComponent: function(e) {
			var c = (this._editedComponent == e);
			this._editedComponent = e;
			this._updateGenericComponentData();
			if (c) {
				return
			}
			this._skinParts.panelLabel.empty();
			this._skinParts.panelDescription.empty();
			var i = this._getComponentLabel();
			var d = this.injects().Resources.get("EDITOR_LANGUAGE", "COMP_" + i);
			var g = this.injects().Resources.get("EDITOR_LANGUAGE", "COMP_DESC_" + i);
			this._skinParts.panelLabel.set("html", d);
			this._skinParts.panelDescription.set("html", g);
			if (this._editedComponent) {
				this._editedComponent.removeEvent("positionChange", this._updateComponentPos)
			}
			this._skinParts.dataPanelContainer.empty();
			var a = this._editedComponent.getDataItem();
			var h = (a) ? a.getType() : "";
			var f = W.Editor.getDataPanel(h, this._editedComponent.getOriginalClassName());
			if (f) {
				var b = this._createComponentDataPanel(f, this._editedComponent);
				this._skinParts.dataPanelContainer.adopt(b)
			}
			this._editedComponent.addEvent("positionChange", this._updateComponentPos);
			this._view.uncollapse();
			this.updateCompPosSize();
			this._setShowAnchorsButtonState(false);
			this._enableLayoutLocks = !this._editedComponent.isMultiSelect && this._editedComponent.allowHeightLock();
			this._skinParts.allowAnchorsButton.setAttribute("disabled", this._enableLayoutLocks ? "false" : "true");
			this._disableInputsAccordingToComponent();
			this._setPanelHeightRelativeToWindowHeight()
		},
		_updateGenericComponentData: function() {
			if (!this._editedComponent.canMoveToOtherScope()) {
				this.setState("disabled", "moveScope")
			} else {
				var a = this._editorMode == this.injects().Editor.EDIT_MODE.CURRENT_PAGE;
				this._skinParts.isInMasterCB.setValue(!a);
				if (this._editedComponent.getShowOnAllPagesChangeability()) {
					this.setState(a ? "moveToMaster" : "moveToPage", "moveScope");
					this._skinParts.isInMasterCB.enable();
					this._addToolTipToSkinPart(this._tooltipIcon, "Component_Panel_is_in_master_ttid")
				} else {
					this.setState("notChangeable", "moveScope");
					this._skinParts.isInMasterCB.disable();
					this._addToolTipToSkinPart(this._tooltipIcon, "Component_Panel_is_in_master_not_changeable_ttid")
				}
			}
		}
	}
});
W.Experiments.registerExperimentComponent("TPA", "New", {
	name: "experiments.wysiwyg.editor.components.panels.ComponentPanel",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.ComponentPanel",
		setLabel: function(a) {
			this._skinParts.panelLabel.set("text", a)
		},
		setDescription: function(a) {
			this._skinParts.panelDescription.set("text", a)
		},
		_onHelpClick: function() {
			if (this._editedComponent.getHelpId) {
				W.Commands.executeCommand("WEditorCommands.ShowHelpDialog", this._editedComponent.getHelpId())
			} else {
				W.Commands.executeCommand("WEditorCommands.ShowHelpDialog", "COMPONENT_PANEL_" + this._getComponentLabel())
			}
		}
	}
});
W.Experiments.registerExperimentComponent("SocialPanel", "New", {
	name: "experiments.wysiwyg.editor.components.panels.FaviconAndThumbnailPanel",
	skinParts: {
		panelLabel: {
			type: "htmlElement"
		},
		help: {
			type: "htmlElement"
		},
		close: {
			type: "htmlElement",
			command: "this._closeCommand"
		},
		doneButton: {
			type: "wysiwyg.editor.components.WButton",
			autoBindDictionary: "done",
			command: "this._closeCommand"
		},
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.FaviconAndThumbnailPanel",
		_onAllSkinPartsReady: function() {
			this.parent();
			this._skinParts.panelLabel.set("html", this._translate("FAVICON_TITLE"))
		},
		_createFields: function() {
			if (this._appType == Constants.WEditManager.SITE_TYPE_WEB) {
				this.addBreakLine("15px");
				this.addSubLabel(this._translate("FAVICON_PANEL_FAVICON_DESCRIPTION"), null);
				if (this.injects().Config.isPremiumUser()) {
					this.addImageField(null, 150, 150, this._translate("FAVICON_PANEL_CHANGE"), "favicon").bindToRemappedDataFields({
						favicon: "uri"
					})
				} else {
					this.addSubLabel(this._translate("FAVICON_PANEL_UPGRADE_TO_UPLOAD_FAVICON_DESCRIPTION"), null);
					this.addButtonField("", this._translate("FAVICON_PANEL_UPGRADE_NOW")).addEvent("click", this._onUpgradeClick)
				}
			}
		}
	}
});
W.Experiments.registerNewExperimentComponent("FPP", "New", {
	name: "wysiwyg.editor.components.panels.FloatingPropertyPanel",
	skinParts: {
		label: {
			type: "htmlElement"
		},
		help: {
			type: "htmlElement"
		},
		duplicate: {
			type: "wysiwyg.editor.components.WButton"
		},
		remove: {
			type: "wysiwyg.editor.components.WButton"
		},
		forward: {
			type: "wysiwyg.editor.components.WButton"
		},
		back: {
			type: "wysiwyg.editor.components.WButton"
		},
		settings: {
			type: "wysiwyg.editor.components.WButton",
			argObject: {
				label: "FPP_SETTINGS_LABEL",
				labelType: "langKey"
			}
		},
		design: {
			type: "wysiwyg.editor.components.WButton",
			argObject: {
				label: "FPP_DESIGN_LABEL",
				labelType: "langKey"
			}
		},
		customButton: {
			type: "wysiwyg.editor.components.WButton",
			autoCreate: false
		},
		actions: {
			type: "htmlElement"
		},
		customActions: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_showPropertyPanel", "hidePanel", "_hidePanelOnMouseMove", "_setOrderButtonsState", "_showStyleDialog", "_getAllStyles", "_setPositionOnceOnReady", "_onSingleCustomPartReady", "_onTransitionEnd", "_onHelpButtonClick"],
		Static: {
			DRAG_OFFSET: 40,
			OFFSET_FROM_MOUSE: {
				x: 20,
				y: 0
			},
			OFFSET_FROM_PANEL: {
				x: 200,
				y: 120
			}
		},
		_states: {
			transition: ["fade"]
		},
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._editedComponent = null;
			this._customParts = [];
			this._customPartsReady = false;
			this._customPartsLength = 0;
			this._lastKnownMousePosition = {
				x: 0,
				y: 0
			};
			this._hasCssTransitions = Modernizr.csstransitions
		},
		setEditedComponent: function(a) {
			if (this._editedComponent === this.injects().Editor.getEditedComponent()) {
				return
			}
			this._editedComponent = this.injects().Editor.getEditedComponent();
			this._setLabel(this._editedComponent.getOriginalClassName().split(".").getLast());
			this._setPanelCommands(a)
		},
		setPosition: function(a, h) {
			if (isNaN(a) || isNaN(h)) {
				a = this._lastKnownMousePosition.x;
				h = this._lastKnownMousePosition.y
			} else {
				this._lastKnownMousePosition = {
					x: a,
					y: h
				}
			}
			var b = window.getScroll();
			var c = window.getSize();
			var g = this.OFFSET_FROM_MOUSE;
			var d = this.getViewNode().getSize();
			var f = (a + g.x - b.x);
			if (f + d.x > c.x) {
				f = f - d.x - (2 * g.x)
			}
			var e = (h + g.y - b.y);
			if (e + d.y > c.y) {
				e = e - d.y - (2 * g.y)
			}
			this.setX(f);
			this.setY(e)
		},
		showPanel: function(a) {
			this.injects().Preview.getPreviewManagers().Commands.registerCommandListenerByName("WViewerCommands.ComponentZIndexChanged", this, this._setOrderButtonsState);
			this._setDeleteButtonState();
			this._setOrderButtonsState(this._editedComponent);
			window.addEvent(Constants.CoreEvents.MOUSE_MOVE, this._hidePanelOnMouseMove);
			this.uncollapse();
			if (a) {
				this.setPosition(a.x, a.y);
				if (!this.isPanelReady()) {
					this.addEvent("customPartsReady", this._setPositionOnceOnReady)
				}
			}
			if (this._hasCssTransitions) {
				clearTimeout(this._transitionTimer);
				this._transitionTimer = this.callLater(function() {
					this.removeState("fade", "transition")
				}, null, 10)
			}
		},
		hidePanel: function() {
			window.removeEvent(Constants.CoreEvents.MOUSE_MOVE, this._hidePanelOnMouseMove);
			clearTimeout(this._transitionTimer);
			if (this._hasCssTransitions) {
				this.setState("fade", "transition")
			} else {
				this.collapse()
			}
		},
		isPanelReady: function() {
			return this.isReady() && this._customPartsReady
		},
		_onAllSkinPartsReady: function() {
			this._setButtons();
			this._enableDrag();
			this.collapse();
			this.injects().Data.getDataByQuery("#STYLES", this._getAllStyles);
			this._setTransitionEndListener()
		},
		_onSingleCustomPartReady: function() {
			this._customPartsReady = true;
			for (var a = 0;
			a < this._customPartsLength;
			a++) {
				if (!this._customParts || !this._customParts.length || !this._customParts[a] || !this._customParts[a].getLogic || !this._customParts[a].getLogic().isReady()) {
					this._customPartsReady = false;
					break
				}
				if (this._customPartsReady) {
					this.fireEvent("customPartsReady")
				}
			}
		},
		_setPositionOnceOnReady: function() {
			this.setPosition();
			this.removeEvent("customPartsReady", this._setPositionOnceOnReady)
		},
		_hidePanelOnMouseMove: function(f) {
			f = f || {};
			var d = f.page;
			var b = this._view.getPosition();
			var a = window.getScroll();
			var e = this._view.getSize();
			var c = false;
			if (b) {
				if (d.x < b.x + a.x - this.OFFSET_FROM_PANEL.x) {
					c = true
				}
				if (d.x > b.x + a.x + e.x + this.OFFSET_FROM_PANEL.x) {
					c = true
				}
				if (d.y < b.y + a.y - this.OFFSET_FROM_PANEL.y) {
					c = true
				}
				if (d.y > b.y + a.y + e.y + this.OFFSET_FROM_PANEL.y) {
					c = true
				}
				if (c) {
					this.hidePanel()
				}
			}
		},
		_setLabel: function(a) {
			this._skinParts.label.set("html", this.injects().Resources.get("EDITOR_LANGUAGE", "FPP_" + a, "&nbsp;"));
			this._setCustomLabelIfNeeded()
		},
		_setCustomLabelIfNeeded: function() {
			var b = this._editedComponent.getOriginalClassName();
			if (b.contains("TPA")) {
				var a = this._editedComponent.getAppDefinitionId();
				this.injects().AppStoreManager.getAppDefinitionData(a, function(c) {
					this._skinParts.label.set("html", c.name)
				}.bind(this))
			}
		},
		_setButtons: function() {
			var a = "button/fpp-buttons-icons.png";
			this._addToolTipToSkinPart(this._skinParts.duplicate, "Boundary_box_Duplicate_button_ttid");
			this._addToolTipToSkinPart(this._skinParts.back, "Boundary_box_Arrow_down_ttid");
			this._addToolTipToSkinPart(this._skinParts.forward, "Boundary_box_Arrow_up_ttid");
			this._addToolTipToSkinPart(this._skinParts.remove, "Boundary_box_Trash_can_ttid");
			this._skinParts.duplicate.setParameters({
				iconSrc: a,
				iconSize: {
					width: 26,
					height: 27
				},
				spriteOffset: {
					x: 0,
					y: -54
				},
				command: "EditCommands.Duplicate"
			});
			this._skinParts.back.setParameters({
				iconSrc: a,
				iconSize: {
					width: 26,
					height: 27
				},
				spriteOffset: {
					x: 0,
					y: -81
				},
				command: "WEditorCommands.MoveBack"
			});
			this._skinParts.forward.setParameters({
				iconSrc: a,
				iconSize: {
					width: 26,
					height: 27
				},
				spriteOffset: {
					x: 0,
					y: -27
				},
				command: "WEditorCommands.MoveForward"
			});
			this._skinParts.remove.setParameters({
				iconSrc: a,
				iconSize: {
					width: 26,
					height: 27
				},
				spriteOffset: {
					x: 0,
					y: 0
				},
				command: "WEditorCommands.WDeleteSelectedComponent"
			})
		},
		_showPropertyPanel: function() {
			if (this._isPage()) {
				var a = this._getPageComponent();
				this._openPageSettings(a)
			} else {
				this.fireEvent("showPropertyPanel")
			}
		},
		_setDeleteButtonState: function() {
			var a = this.injects().Editor.canDeleteSelectedComponent();
			var b = this.injects().Commands.getCommand("WEditorCommands.WDeleteSelectedComponent");
			b.setState(a);
			(a) ? this._skinParts.remove.enable() : this._skinParts.remove.disable()
		},
		_setOrderButtonsState: function(d) {
			var c = this.injects().Editor.getEditedComponent();
			var b = null;
			var a = false;
			var e = false;
			if (d === c) {
				if (!c.isMultiSelect) {
					b = c.getParentComponent();
					a = b.canMoveBack(c);
					e = b.canMoveForward(c)
				}(a) ? this._skinParts.back.enable() : this._skinParts.back.disable();
				(e) ? this._skinParts.forward.enable() : this._skinParts.forward.disable()
			}
		},
		_setPanelCommands: function(c) {
			var a = this.injects().Editor.getComponentMetaData(this._editedComponent, c);
			var b = 0;
			if (!a || !a.general || typeof a.general !== "object" || (a.custom && !Array.isArray(a.custom))) {
				LOG.reportError(wixErrors.INVALID_EDITOR_META_DATA, "FloatingPropertyPanel", "_setPanelCommands", a)
			}
			a.general.settings = true;
			if (a.general.settings !== false) {
				this._skinParts.settings.uncollapse();
				this._skinParts.settings.addEvent(Constants.CoreEvents.CLICK, this._showPropertyPanel)
			} else {
				this._skinParts.settings.collapse();
				this._skinParts.settings.removeEvent(Constants.CoreEvents.CLICK, this._showPropertyPanel)
			}
			if (a.general.design) {
				this._skinParts.design.uncollapse();
				this._skinParts.design.addEvent(Constants.CoreEvents.CLICK, this._showStyleDialog)
			} else {
				this._skinParts.design.collapse();
				this._skinParts.design.removeEvent(Constants.CoreEvents.CLICK, this._showStyleDialog)
			}
			if (a.general.help !== false) {
				this._skinParts.help.uncollapse();
				this._skinParts.help.addEvent(Constants.CoreEvents.CLICK, this._onHelpButtonClick)
			} else {
				this._skinParts.help.collapse();
				this._skinParts.help.removeEvent(Constants.CoreEvents.CLICK, this._onHelpButtonClick)
			}
			this._populateCustomButtons(a.custom)
		},
		_buildCustomButtonArgObject: function(b) {
			var a = {};
			if (b.label) {
				a.label = this.injects().Resources.get("EDITOR_LANGUAGE", b.label)
			}
			a.command = b.command;
			a.commandParameter = Object.clone(b.commandParameter);
			a.commandParameter.selectedComp = this._editedComponent;
			if (b.commandParameterDataRef && b.commandParameter) {
				if (b.commandParameterDataRef == "SELF") {
					a.commandParameter.data = this._editedComponent.getDataItem()
				}
			}
			return a
		},
		_populateCustomButtons: function(a) {
			this._disposeCustomParts();
			if (a && a.length) {
				var c = this.getSkinPartDefinition("customButton");
				var d = null;
				this._customPartsLength = a.length;
				for (var b = 0;
				b < this._customPartsLength;
				b++) {
					c.argObject = this._buildCustomButtonArgObject(a[b]);
					d = this._createComponentbyDefinition(c, null, this._onSingleCustomPartReady);
					d.insertInto(this._skinParts.customActions);
					this._customParts.push(d)
				}
			}
		},
		_disposeCustomParts: function() {
			var a = null;
			this._customParts = this._customParts || [];
			while (this._customParts.length) {
				a = this._customParts.pop();
				a.dispose()
			}
			this._skinParts.customActions.empty();
			this._customPartsReady = false
		},
		_showStyleDialog: function() {
			var a = this.injects().Editor.getEditedComponent();
			if (this._isPage()) {
				a = this._getPageComponent()
			}
			if (this._allCompStyles[a.getOriginalClassName()].length > 1) {
				this.injects().EditorDialogs.openStyleSelector(a)
			} else {
				var b = this.injects().Commands.getCommand("WEditorCommands.CustomizeComponentStyle");
				b.execute({
					editedComponent: a,
					left: 0,
					top: 0
				})
			}
		},
		_getAllStyles: function(a) {
			this._allCompStyles = a && a.get && a.get("styleItems")
		},
		_enableDrag: function() {
			var b = window.getSize();
			var a = {
				x: [10, b.x - this.DRAG_OFFSET],
				y: [this.DRAG_OFFSET, b.y - this.DRAG_OFFSET]
			};
			this._drag = new Drag.Move(this._skinParts.view, {
				snap: 0,
				handle: this._skinParts.label,
				limit: a
			})
		},
		_onHelpButtonClick: function() {
			W.Commands.executeCommand("WEditorCommands.ShowHelpDialog", "COMPONENT_PANEL_" + this._editedComponent.getOriginalClassName().split(".").getLast())
		},
		_whichTransitionEvent: function() {
			var a;
			var b = document.createElement("fakeelement");
			var c = {
				transition: "transitionEnd",
				OTransition: "oTransitionEnd",
				MSTransition: "msTransitionEnd",
				MozTransition: "transitionend",
				WebkitTransition: "webkitTransitionEnd"
			};
			for (a in c) {
				if (b.style[a] !== undefined) {
					return c[a]
				}
			}
			return null
		},
		_onTransitionEnd: function() {
			if (this.getState() === "fade") {
				this.collapse()
			}
		},
		_setTransitionEndListener: function() {
			if (this._hasCssTransitions) {
				var a = this._whichTransitionEvent();
				this._view.addEventListener(a, this._onTransitionEnd, false)
			}
		},
		_openPageSettings: function(c) {
			var a = c.getDataItem();
			var b = "#" + a.get("id");
			this.injects().Commands.executeCommand("WEditorCommands.Pages");
			this.injects().Commands.executeCommand("WEditorCommands.PageSettings", {
				pageId: b
			})
		},
		_isPage: function() {
			var a = this.injects().Editor.getEditedComponent();
			return (a.getOriginalClassName() == "wysiwyg.viewer.components.PagesContainer")
		},
		_getPageComponent: function() {
			var a = this.injects().Preview.getPreviewCurrentPageId();
			return this.injects().Preview.getHtmlElement(a).getLogic()
		}
	}
});
W.Experiments.registerExperimentComponent("Dev", "New", {
	name: "experiments.editor.components.panels.MainEditorBarDevNew",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.MainEditorBar",
		_addDebugActions: function() {
			W.Commands.registerCommandAndListener("Experiments.Open", this, this._openDialog);
			this.addInputGroupField(function() {
				this.setNumberOfItemsPerLine(0);
				this.addButtonField(null, "Experiments", false, {
					iconSrc: "maineditortabs/dark-icon-sprite.png",
					iconSize: {
						width: 26,
						height: 26
					},
					spriteOffset: {
						x: 0,
						y: -189
					}
				}, "mainBarEditActions", null, "Main_Menu_Experiment_ttid", "Experiments.Open")
			}, "skinless")
		},
		_openDialog: function() {
			W.EditorDialogs.openExperimentsDialog()
		}
	}
});
W.Experiments.registerExperimentComponent("GridLines", "New", {
	name: "experiments.editor.components.panels.MainEditorBarGridLinesNew",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.MainEditorBar",
		_addEditActions: function() {
			this.addInputGroupField(function(a) {
				this.setNumberOfItemsPerLine(0);
				this.addButtonField(null, this._translate("MAIN_BAR_COPY"), false, {
					iconSrc: "maineditortabs/dark-icon-sprite.png",
					iconSize: {
						width: 26,
						height: 26
					},
					spriteOffset: {
						x: 0,
						y: -27
					}
				}, "mainBarEditActions", null, "Main_Menu_Copy_ttid", "EditCommands.Copy");
				this.addButtonField(null, this._translate("MAIN_BAR_PASTE"), false, {
					iconSrc: "maineditortabs/dark-icon-sprite.png",
					iconSize: {
						width: 26,
						height: 26
					},
					spriteOffset: {
						x: 0,
						y: 0
					}
				}, "mainBarEditActions", null, "Main_Menu_Paste_ttid", "EditCommands.Paste");
				this.addButtonField(null, this._translate("MAIN_BAR_GRID"), true, {
					iconSrc: "maineditortabs/dark-icon-sprite.png",
					iconSize: {
						width: 26,
						height: 26
					},
					spriteOffset: {
						x: 0,
						y: -54
					}
				}, "mainBarEditActions", null, "Main_Menu_Grid_ttid", "EditCommands.ToggleGridLines").runWhenReady(function(b) {
					b.toggleSelected(true);
					W.Commands.registerCommandListenerByName("EditorCommands.GridLinesLoaded", a, a._onGridLinesLoaded)
				});
				this.addButtonField(null, this._translate("MAIN_BAR_SNAP"), true, {
					iconSrc: "maineditortabs/dark-icon-sprite.png",
					iconSize: {
						width: 26,
						height: 26
					},
					spriteOffset: {
						x: 0,
						y: -81
					}
				}, "mainBarEditActions", null, "Snap_To_Grip_Toggle_ttid", "EditCommands.SnapToGrid").runWhenReady(function(b) {
					b.toggleSelected(true);
					W.Commands.executeCommand("EditCommands.SnapToGrid", true)
				})
			}, "skinless")
		},
		_onGridLinesLoaded: function() {
			W.Commands.executeCommand("EditCommands.ToggleGridLines", true)
		}
	}
});
W.Experiments.registerExperimentComponent("PagesDropDown", "New", {
	name: "experiments.editor.components.panels.MainEditorBarPagesDropDown",
	skinParts: merge({
		pagesDropDown: {
			type: "wysiwyg.editor.components.SiteNavigationDropDown"
		}
	}),
	Class: {
		Extends: "wysiwyg.editor.components.panels.MainEditorBar"
	}
});
W.Experiments.registerExperimentComponent("URMButtons", "New", {
	name: "experiments.editor.components.panels.MainEditorBar",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.MainEditorBar",
		_addUndoActions: function() {
			this.addInputGroupField(function() {
				this.setNumberOfItemsPerLine(0);
				this.addButtonField(null, this._translate("MAIN_BAR_UNDO"), false, {
					iconSrc: "maineditortabs/dark-icon-sprite.png",
					iconSize: {
						width: 26,
						height: 26
					},
					spriteOffset: {
						x: 0,
						y: -108
					}
				}, "mainBarEditActions", null, "Main_Menu_Undo_ttid", "WEditorCommands.Undo");
				this.addButtonField(null, this._translate("MAIN_BAR_REDO"), false, {
					iconSrc: "maineditortabs/dark-icon-sprite.png",
					iconSize: {
						width: 26,
						height: 26
					},
					spriteOffset: {
						x: 0,
						y: -135
					}
				}, "mainBarEditActions", null, "Main_Menu_Redo_ttid", "WEditorCommands.Redo")
			}, "skinless")
		}
	}
});
W.Experiments.registerExperimentComponent("WalkMe", "New", {
	name: "experiments.editor.components.panels.MainEditorBarWalkMeNew",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.MainEditorBar",
		_addDocumentActions: function() {
			var a = {
				iconSrc: "maineditortabs/dark-help-sprite.png",
				iconSize: {
					width: 18,
					height: 18
				},
				spriteOffset: {
					x: 0,
					y: 0
				}
			};
			this.addInputGroupField(function() {
				this.setNumberOfItemsPerLine(0);
				this.addButtonField(null, this._translate("MAIN_BAR_PREVIEW"), false, null, "mainBarDocActions", null, null, "WEditorCommands.WSetEditMode", {
					editMode: W.Editor.EDIT_MODE.PREVIEW,
					src: "previewBtn"
				});
				this.addButtonField(null, this._translate("MAIN_BAR_SAVE"), false, null, "mainBarDocActions", null, null, "WEditorCommands.Save", {
					promptResultDialog: true,
					src: "saveBtn"
				});
				this.addButtonField(null, this._translate("MAIN_BAR_PUBLISH"), false, null, "mainBarDocActions", null, null, "WEditorCommands.OpenPublishDialog", {});
				this.addButtonField(null, this._translate("MAIN_BAR_UPGRADE"), false, null, "mainBarDocActions", null, null, "WEditorCommands.UpgradeToPremium", {
					referralAdditionalInfo: Constants.WEditManager.UPGRADE_SRC.TOP_PANEL
				});
				if (window.wixEditorLangauge == "en") {
					this.addButtonField(null, this._translate("WALK_THROUGH"), false, {
						iconSrc: "maineditortabs/dark-icon-sprite.png",
						iconSize: {
							width: 26,
							height: 26
						},
						spriteOffset: {
							x: 0,
							y: -162
						}
					}, "mainBarEditActions", null, "Main_Menu_WalkMe_ttid", "WEditorCommands.ShowWalkThru")
				}
				this.addButtonField(null, this._translate("MAIN_BAR_HELP"), false, a, "mainBarHelpIcon", null, null, "WEditorCommands.ShowHelpDialog", "TopBar")
			}, "skinless")
		}
	}
});
W.Experiments.registerExperimentComponent("TPA", "New", {
	name: "experiments.wysiwyg.editor.components.panels.PageSettingsPanelTPANew",
	imports: ["wysiwyg.editor.utils.InputValidators"],
	traits: ["mobile.editor.components.traits.DataPanel"],
	skinParts: {
		panelLabel: {
			type: "htmlElement",
			autoBindDictionary: "PAGE_SETTINGS"
		},
		help: {
			type: "htmlElement"
		},
		close: {
			type: "htmlElement",
			command: "this._closeCommand"
		},
		duplicate: {
			type: "wysiwyg.editor.components.WButton",
			autoBindDictionary: "duplicate"
		},
		deletePage: {
			type: "wysiwyg.editor.components.WButton",
			autoBindDictionary: "delete"
		},
		doneButton: {
			type: "wysiwyg.editor.components.WButton",
			autoBindDictionary: "done",
			command: "this._closeCommand"
		},
		content: {
			type: "htmlElement"
		},
		topBar: {
			type: "htmlElement"
		},
		pageActions: {
			type: "htmlElement"
		},
		bottom: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.PageSettingsPanel",
		render: function() {
			this.parent();
			this.setState("hidden");
			if (!W.Preview.getPreviewManagers().Viewer.isHomePage()) {
				this._skinParts.deletePage.show()
			} else {
				this._skinParts.deletePage.hide()
			}
			if (this._previewComponent.isThirdPartyApplicationPage()) {
				this._skinParts.duplicate.hide()
			} else {
				this._skinParts.duplicate.show()
			}
			setTimeout(function() {
				this.setState("shown")
			}.bind(this), 0)
		}
	}
});
W.Experiments.registerNewExperimentComponent("SM", "New", {
	name: "wysiwyg.editor.components.panels.SiteMembersPanel",
	skinParts: {
		panelLabel: {
			type: "htmlElement",
			autoBindDictionary: "SITE_MEMBERS_TITLE"
		},
		help: {
			type: "htmlElement"
		},
		close: {
			type: "htmlElement",
			command: "this._closeCommand"
		},
		doneButton: {
			type: "wysiwyg.editor.components.WButton",
			autoBindDictionary: "done",
			command: "this._closeCommand"
		},
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.SettingsSubPanel",
		Binds: ["_openForm", "_activateSiteMembers"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._siteMembersMgr = this.injects().SMEditor
		},
		_createFields: function() {
			this.addTitle(this._translate("SITE_MEMBERS_TITLE_FULL"), null, "bold");
			this.addSubLabel(this._translate("SITE_MEMBERS_DESCRIPTION"), null);
			this._provisionBtn = this.addButtonField("", "Activate Site Members Service").addEvent("click", this._activateSiteMembers);
			this._provisionBtn.runWhenReady(function(a) {
				if (this._siteMembersMgr.isServiceProvisioned()) {
					a.disable()
				}
			}.bind(this));
			this.addTitle("For Testing:", null, "bold");
			this._inp = this.addComboBoxField("Start With", [{
				label: this._translate("LINK_DLG_LOGIN_OPT_LOGIN_TAB"),
				value: "login"
			}, {
				label: this._translate("LINK_DLG_LOGIN_OPT_SIGNUP_TAB"),
				value: "register"
			}], "login", 2);
			this.addButtonField("", "Open Form").addEvent("click", this._openForm)
		},
		_showHelp: function() {
			W.Commands.executeCommand("WEditorCommands.ShowHelpDialog", "SETTINGS_SUB_PANEL_SEO")
		},
		_activateSiteMembers: function(a) {
			this._siteMembersMgr.provisionIfNeeded(function() {
				this._provisionBtn.disable()
			}.bind(this))
		},
		_openForm: function() {
			W.Preview.getPreviewManagers().Commands.executeCommand("WViewerCommands.SiteMembers.Open", {
				form: this._inp.getValue()
			});
			W.Commands.executeCommand("WEditorCommands.WSetEditMode", {
				editMode: W.Editor.EDIT_MODE.PREVIEW,
				src: "previewBtn"
			})
		}
	}
});
W.Experiments.registerExperimentComponent("SliderAutoPlay", "New", {
	name: "experiments.editor.components.panels.SliderGalleryPanel",
	imports: [],
	traits: ["mobile.editor.components.traits.DataPanel"],
	skinParts: {
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.SliderGalleryPanel",
		Binds: [],
		_createFields: function() {
			var b = this._previewComponent.getComponentProperties()._schema;
			var a = b.autoplayInterval;
			this.addInputGroupField(function() {
				this.setNumberOfItemsPerLine(1);
				this.addListEditorButton(W.Resources.get("EDITOR_LANGUAGE", "GALLERY_ORGANIZE_PHOTOS"), this._data, "SliderGallery")
			});
			this.addInputGroupField(function() {
				this.setNumberOfItemsPerLine(1);
				this.addComboBox(W.Resources.get("EDITOR_LANGUAGE", "GALLERY_IMAGE_MODE"), "Gallery_Settings_Image_Scaling_ttid").bindToProperty("imageMode");
				var c = "radiobuttons/aspRatio/radio_button_states.png";
				var f = {
					w: "46px",
					h: "52px"
				};
				var e = {
					options: [{
						value: "16:9",
						image: c,
						dimensions: f,
						icon: "radiobuttons/aspRatio/16-9.png"
					}, {
						value: "4:3",
						image: c,
						dimensions: f,
						icon: "radiobuttons/aspRatio/4-3.png"
					}, {
						value: "1:1",
						image: c,
						dimensions: f,
						icon: "radiobuttons/aspRatio/1-1.png"
					}, {
						value: "3:4",
						image: c,
						dimensions: f,
						icon: "radiobuttons/aspRatio/3-4.png"
					}, {
						value: "9:16",
						image: c,
						dimensions: f,
						icon: "radiobuttons/aspRatio/9-16.png"
					}],
					display: "inline",
					defaultValue: "",
					group: ""
				};
				var d = this.addRadioImagesField(W.Resources.get("EDITOR_LANGUAGE", "SLIDER_GALLERY_ASPECT_RATIO"), e.options, e.defaultValue, e.group, e.display).bindToProperty("aspectRatioPreset");
				this.addVisibilityCondition(d, function() {
					return this._previewComponent.getComponentProperty("imageMode") == "clipImage"
				}.bind(this))
			});
			this.addInputGroupField(function() {
				this.addSliderField(W.Resources.get("EDITOR_LANGUAGE", "GALLERY_MARGIN"), 0, 250, 1, false, false).bindToProperty("margin");
				this.addSliderField(W.Resources.get("EDITOR_LANGUAGE", "SLIDER_GALLERY_SPEED"), 1, 30, 1, false, true).bindToProperty("maxSpeed");
				this.addCheckBoxField(W.Resources.get("EDITOR_LANGUAGE", "SLIDER_GALLERY_LOOP")).bindToProperty("loop")
			});
			this.addInputGroupField(function() {
				this.setNumberOfItemsPerLine(1);
				this.addCheckBoxField(W.Resources.get("EDITOR_LANGUAGE", "GALLERY_EXPAND_MODE"), "Gallery_Settings_Expand_Mode_ttid").bindToProperty("expandEnabled")
			});
			this.addInputGroupField(function() {
				this.addCheckBoxField(W.Resources.get("EDITOR_LANGUAGE", "SLIDESHOW_GALLERY_AUTOPLAY")).bindToProperty("autoplay")
			});
			this.addInputGroupField(function() {
				var c = [{
					label: "Left to Right",
					value: "LTR"
				}, {
					label: "Right to Left",
					value: "RTL"
				}];
				this.addRadioButtonsField("Autoplay Direction", c, "RTL").bindToProperty("autoPlayDirection")
			});
			this.injects().Data.getDataByQuery("#STYLES", this._createStylePanel)
		},
		getAcceptableDataTypes: function() {
			return ["ImageList"]
		}
	}
});
W.Experiments.registerNewExperimentComponent("SocialPanel", "New", {
	name: "wysiwyg.editor.components.panels.SocialPanel",
	imports: [],
	skinParts: {
		panelLabel: {
			type: "htmlElement"
		},
		help: {
			type: "htmlElement"
		},
		close: {
			type: "htmlElement",
			command: "this._closeCommand"
		},
		doneButton: {
			type: "wysiwyg.editor.components.WButton",
			autoBindDictionary: "done",
			command: "this._closeCommand"
		},
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.SettingsSubPanel",
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._appType = this.injects().Config.getApplicationType()
		},
		_onAllSkinPartsReady: function() {
			this.parent();
			this._skinParts.panelLabel.set("html", this._translate("SOCIAL_TITLE"))
		},
		_onCancel: function() {
			this._data.restoreSnapshot();
			this.injects().Commands.executeCommand(this._closeCommand)
		},
		_onSave: function() {
			this.injects().Commands.executeCommand(this._closeCommand)
		},
		_showHelp: function() {
			W.Commands.executeCommand("WEditorCommands.ShowHelpDialog", "SETTINGS_SUB_PANEL_Social")
		},
		_createFields: function() {
			this.addTitle(this._translate("SOCIAL_PANEL_FAVICON_THUMBNAIL"), null, "bold");
			this.addSubLabel(this._translate("SOCIAL_PANEL_THUMBNAIL_DESCRIPTION"), null);
			this.addImageField(null, 150, 150, this._translate("SOCIAL_PANEL_CHANGE"), "clipart").bindToRemappedDataFields({
				thumbnail: "uri"
			});
			this.addBreakLine("20px");
			this.addTitle(this._translate("SOCIAL_PANEL_FACEBOOK"), null, "bold");
			this.addInlineTextLinkField(null, this._translate("SOCIAL_PANEL_FACEBOOK_DESCRIPTION"), this._translate("SOCIAL_PANEL_FACEBOOK_LEARN_MORE")).addEvent(Constants.CoreEvents.CLICK, this._showHelp);
			this.addBreakLine("20px");
			this.addInputField(this._translate("SOCIAL_PANEL_FACEBOOK_LABEL"), this._translate("SOCIAL_PANEL_FACEBOOK_PLACEHOLDER"), 0, 256).bindToField("fbAdminsUserId")
		}
	}
});
W.Experiments.registerExperimentComponent("SocialPanel", "New", {
	name: "experiments.wysiwyg.editor.components.panels.StatisticsPanel",
	skinParts: {
		panelLabel: {
			type: "htmlElement",
			autoBindDictionary: "STATISTICS_TITLE"
		},
		help: {
			type: "htmlElement"
		},
		close: {
			type: "htmlElement",
			command: "this._closeCommand"
		},
		doneButton: {
			type: "wysiwyg.editor.components.WButton",
			autoBindDictionary: "done",
			command: "this._closeCommand"
		},
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.StatisticsPanel",
		_createFields: function() {
			this.addTitle(this._translate("STATISTICS_PANEL_TITLE_FULL"), null, "bold");
			this.addSubLabel(this._translate("STATISTICS_PANEL_DESCRIPTION"), null);
			this.addBreakLine("20px");
			this._isPremiumUser ? this._siteHasDomain() : this._createFreeNoDomain();
			this.addBreakLine("15px");
			this.addTitle(this._translate("STATISTICS_PANEL_COOKIE_TITLE"), null, "bold");
			this.addSubLabel(this._translate("STATISTICS_PANEL_COOKIE_DESCRIPTION_1"));
			this.addSubLabel(this._translate("STATISTICS_PANEL_COOKIE_DESCRIPTION_2"));
			if (this._isPremiumUser) {
				this.addSubLabel(this._translate("STATISTICS_PANEL_COOKIE_PREMIUM"), null, "bold")
			}
			this.addCheckBoxField(this._translate("STATISTICS_PANEL_COOKIE_CHECKBOX_LABEL")).bindToField("suppressTrackingCookies").addEvent("inputChanged", function(a) {
				LOG.reportEvent(wixEvents.EU_COOKIE_CHECKBOX_CLICKED, {
					c1: Number(a.value)
				})
			})
		}
	}
});
W.Experiments.registerNewExperimentComponent("TPA", "New", {
	name: "wysiwyg.editor.components.panels.TPAPanel",
	imports: [],
	traits: ["mobile.editor.components.traits.DataPanel"],
	skinParts: {
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.base.AutoPanel",
		initialize: function(c, a, b) {
			this.parent(c, a, b)
		},
		render: function() {
			this._applicationId = this._previewComponent._data.get("applicationId");
			this._appData = this._previewComponent.getAppData();
			var a = this._appData.appDefinitionId;
			this.injects().AppStoreManager.getAppDefinitionData(a, function(b) {
				var c = this.injects().Editor.getPropertyPanel();
				c.setLabel(b.name || "Settings")
			}.bind(this));
			this.parent()
		},
		_createFields: function() {
			this.addTPASettingsButton(this._applicationId, this._previewComponent, this._translate("APPS_SETTINGS_APPS"))
		},
		getAcceptableDataTypes: function() {
			return ["TPA", "TPAWidget"]
		}
	}
});
W.Experiments.registerExperimentConstant("AudioPlayer", "New", "wysiwyg.editor.components.panels.base.AutoPanel", {
	AutoPanel: {
		Skins: {
			DEFAULT: {
				AudioInput: {
					"default": "wysiwyg.editor.skins.inputs.AudioInputSkin",
					organizeBlueAction: "wysiwyg.editor.skins.inputs.ImageInputSkin",
					gallery: "wysiwyg.editor.skins.inputs.ImageInputForGallerySkin"
				}
			}
		}
	}
});
W.Experiments.registerExperimentComponent("AudioPlayer", "New", {
	name: "experiments.wysiwyg.editor.components.panels.base.AutoPanelAudioPlayerNew",
	imports: ["wysiwyg.editor.components.panels.base.InputFieldProxy"],
	skinParts: {
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.editor.components.panels.base.AutoPanel",
		addAudioField: function(d, g, b, a, c, h, f, e) {
			return this._addField("wysiwyg.editor.components.inputs.AudioInput", this.getSkinFromSet("AudioInput", f), {
				labelText: d,
				buttonText: g,
				buttonTextWhenNoSelectedItem: b,
				defaultEmptyItemText: a,
				galleryConfigID: c,
				deleteText: h,
				toolTip: {
					toolTipId: e,
					addQuestionMark: true,
					toolTipGetter: function() {
						return this._skinParts.label
					}
				}
			})
		}
	}
});
W.Experiments.registerExperimentComponent("BoxShadow", "New", {
	name: "experiments.wysiwyg.editor.components.panels.base.AutoPanelBoxShadow",
	imports: ["wysiwyg.editor.components.panels.base.InputFieldProxy"],
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.base.AutoPanel",
		addBoxShadowField: function(a, b) {
			return this._addField("wysiwyg.editor.components.inputs.BoxShadowInput", this.getSkinFromSet("BoxShadow"), {
				labelText: a,
				toolTip: {
					toolTipId: b
				}
			})
		}
	}
});
W.Experiments.registerExperimentComponent("TPA", "New", {
	name: "experiments.wysiwyg.editor.components.panels.base.AutoPanelTPANew",
	Class: {
		Extends: "wysiwyg.editor.components.panels.base.AutoPanel",
		addTPASettingsButton: function(d, b, c) {
			var a = this.injects().TPAEditorManager.getAppData(d);
			this.addInputGroupField(function() {
				var e = this;
				this.addButtonField(null, c, null, null, "blueWithArrow").addEvent(Constants.CoreEvents.CLICK, function() {
					var f = this.injects().Utils.getPositionRelativeToWindow(this._skinParts.view);
					e.injects().EditorDialogs.openTPASettingsDialog(a, {
						left: f.x,
						top: f.y
					}, b)
				}.bind(this))
			})
		}
	}
});
W.Experiments.registerExperimentComponent("BoxShadow", "New", {
	name: "experiments.wysiwyg.editor.components.panels.design.AdvancedStylingBoxShadow",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.editor.components.panels.design.AdvancedStyling",
		_buildAdditionalConfigsGroup: function(c, d) {
			var e = function(i) {
					var g = d.getPropertySource(i);
					var m;
					var l = this.injects().Resources.get("EDITOR_LANGUAGE", d.getPropertyLangKey(i));
					if (g == "theme") {
						m = this.injects().Preview.getPreviewManagers().Theme.getProperty(d.get(i))
					} else {
						m = d.get(i)
					}
					var k = d.getPropertyType(i);
					switch (k) {
					case Constants.SkinParamCssTypesToGeneralTypesMap.size:
						var n = new W.Size(m);
						var h = this.addSliderField(l, 0, 15, 1, false);
						h.setValue(n.getAmount());
						h.addEvent("inputChanged", function(p) {
							var o = p.value;
							if (g == "theme") {}
							if (g == "value") {
								n.setAmount(o);
								d.set(i, n.getCssValue())
							}
						});
						break;
					case Constants.SkinParamCssTypesToGeneralTypesMap.boxShadow:
						var j, f;
						f = this.addCheckBoxField(this._translate("ADVANCED_ENABLE_SHADOW")).setValue(d.getPropertyExtraParamValue(i, "isOn")).addEvent("inputChanged", function(o) {
							var p = o.value;
							if (g == "theme") {}
							if (g == "value") {
								if (p) {
									j.enable();
									d.setPropertyExtraParamValue(i, "isOn", true, true)
								} else {
									j.disable();
									d.setPropertyExtraParamValue(i, "isOn", false, true)
								}
							}
						});
						j = this.addBoxShadowField().setValue(m).addEvent("inputChanged", function(o) {
							d.set(i, o.value)
						});
						j.runWhenReady(function(o) {
							if (!f || f.getValue()) {
								o.enable()
							} else {
								o.disable()
							}
						});
						break
					}
				}.bind(this);
			for (var b = 0;
			b < c.length;
			b++) {
				var a = c[b];
				e(a)
			}
		}
	}
});
W.Experiments.registerExperimentComponent("StyleNS", "New", {
	name: "experiments.wysiwyg.editor.components.panels.design.AdvancedStyling",
	Class: {
		Extends: "wysiwyg.editor.components.panels.design.AdvancedStyling",
		Binds: ["_updateSkinListDataItem", "_skinSelected", "_resetAndRebuildSkinTree"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			if (b.selectedComponent) {
				this._selectedComp = b.selectedComponent
			} else {}
			this._fieldTree = []
		},
		_createFields: function() {
			var a = this.injects().Resources;
			this._skinItem = W.Data.createDataItem({
				items: [],
				type: "list"
			});
			this._skinGallery = this.addSelectionListInputFieldWithDataProvider(a.get("EDITOR_LANGUAGE", "REPLACE_COMPONENT_SKIN"), this._skinItem, {
				type: "wysiwyg.editor.components.ThumbGallery",
				skin: "wysiwyg.editor.skins.ThumbGallerySkin"
			}, {
				type: "wysiwyg.editor.components.ThumbGalleryItem",
				skin: "wysiwyg.editor.skins.ThumbGalleryItemSkin",
				numRepeatersInLine: 4
			});
			this._skinGallery.addEvent("inputChanged", this._skinSelected);
			this.setupComponentModeParams()
		},
		setupComponentModeParams: function() {
			var a = this._selectedComp.getStyle().getId();
			this._styleSelected({
				value: a
			})
		},
		_updateComponentList: undefined,
		_componentSelected: undefined,
		_updateStyleCombo: undefined,
		_styleSelected: function(b) {
			this._resetFieldTree();
			var a = b.value;
			W.Data.getDataByQuery("#SKINS", function(e) {
				if (!e || !e.get("components")) {
					return W.Utils.debugTrace("WEditor: missing component data or data list")
				}
				var g = this.injects().Preview.getPreviewManagers().Theme;
				this._skinList = e.get("components");
				var d = g.isStyleAvailable(a);
				if (d) {
					g.getStyle(a, this._updateSkinListDataItem)
				} else {
					var f = this._selectedComp.getStyleNameSpace();
					var c = this._skinList[f][0];
					g.createStyle(a, f, c, this._updateSkinListDataItem)
				}
			}.bind(this))
		},
		_updateSkinListDataItem: function(a) {
			W.Data.getDataByQuery("#SKIN_DESCRIPTION", function(c) {
				var e = c.get("skins");
				this._styleData = a;
				var k = this._selectedComp.getStyleNameSpace();
				var j = this._skinList[k];
				var h = [];
				var d = this._styleData.getSkin();
				for (var f = 0;
				f < j.length;
				f++) {
					var g = e[j[f]].description;
					var b = this.injects().Config.getServiceTopologyProperty("staticSkinUrl") + e[j[f]].iconUrl;
					h[f] = {
						value: j[f],
						label: g,
						iconUrl: b
					};
					if (d == j[f]) {
						this._skinGallery.selectItemAtIndex(f)
					}
				}
				this._skinItem.setData({
					type: "list",
					items: h
				}, false);
				this._resetAndRebuildSkinTree()
			}.bind(this))
		}
	}
});
W.Experiments.registerNewExperimentDataItemProps("AudioPlayer", "New", "ADD_COMPONENT_TABS", "items", [{
	type: "Button",
	category: "media",
	iconSrc: "buttons/add_media_05.png",
	label: "Audio Player",
	command: "WEditorCommands.AddComponent",
	commandParameter: {
		compType: "addAudioPlayer",
		styleId: ""
	}
}]);
W.Experiments.registerNewExperimentDataItemProps("AudioPlayer", "New", "STYLES", "styleItems", {
	"wysiwyg.viewer.components.AudioPlayer": ["ap1", "ap2"]
});
W.Experiments.registerNewExperimentDataItemProps("AudioPlayer", "New", "STYLE_DEFAULT_SKIN", "items", {
	ap1: "wysiwyg.viewer.skins.AudioPlayerSkin",
	ap2: "wysiwyg.viewer.skins.AudioPlayerMinimalSkin"
});
var ecommerceDefObj = {
	type: "WLA",
	appDefinitionId: "55a88716-958a-4b91-b666-6c1118abdee4",
	name: "eCommerce",
	appIcon: "http://4.bp.blogspot.com/-3K1D8kTtZn8/T43eKPyYG5I/AAAAAAAAK3U/TYE2y6QmM-w/s1600/lushfabglam-win-our-$25-visa-gift-card-and-go-shoping7.jpg",
	pictures: ["http://www.stealsanddealstv.com/wp-content/uploads/2012/04/online-retailers-shopping-bags.jpg"],
	description: "Turns your website into an E-commerce store",
	widgets: {
		"30b4a102-7649-47d9-a60b-bfd89dcca135": {
			widgetId: "30b4a102-7649-47d9-a60b-bfd89dcca135",
			name: "Product List",
			widgetIcon: "http://info.museumstoreassociation.org/Portals/97999/images/brown-shopping-bag-256x256.png",
			pictures: ["http://www.packagingsource.com/catalog/images/Metallic-Shopping-Bags.jpg"],
			description: null
		},
		"adbeffec-c7df-4908-acd0-cdd23155a817": {
			widgetId: "adbeffec-c7df-4908-acd0-cdd23155a817",
			name: "Cart",
			widgetIcon: "http://xpress.symfonip.com/symwp/wp-content/uploads/2011/10/Shopping_Cart.png?9d7bd4",
			pictures: [],
			description: null
		},
		"c029b3fd-e8e4-44f1-b1f0-1f83e437d45c": {
			widgetId: "c029b3fd-e8e4-44f1-b1f0-1f83e437d45c",
			name: "View cart",
			widgetIcon: "http://www.a4commerce.com/images/icon/web-shopping-cart-creator-trans.png",
			pictures: [],
			description: null
		},
		"cd54a28f-e3c9-4522-91c4-15e6dd5bc514": {
			widgetId: "cd54a28f-e3c9-4522-91c4-15e6dd5bc514",
			name: "Checkout button",
			widgetIcon: "http://www.electricalproducts.com.au/images/promo/5/check_out_small.jpg",
			pictures: [],
			description: null
		}
	}
};
W.Experiments.registerNewExperimentDataItemProps("Ecom", "New", "ADD_COMPONENT_TABS", "items", [{
	type: "Button",
	category: "widgets",
	iconSrc: ecommerceDefObj.widgets["30b4a102-7649-47d9-a60b-bfd89dcca135"].widgetIcon,
	label: "E-commerce Product List",
	command: "WEditorCommands.AddAppComponent",
	commandParameter: {
		appDefinitionDataObj: ecommerceDefObj,
		type: "wixappsPart",
		widgetId: "30b4a102-7649-47d9-a60b-bfd89dcca135"
	}
}, {
	type: "Button",
	category: "widgets",
	iconSrc: ecommerceDefObj.widgets["adbeffec-c7df-4908-acd0-cdd23155a817"].widgetIcon,
	label: "E-commerce Cart",
	command: "WEditorCommands.AddAppComponent",
	commandParameter: {
		appDefinitionDataObj: ecommerceDefObj,
		type: "wixappsPart",
		widgetId: "adbeffec-c7df-4908-acd0-cdd23155a817"
	}
}, {
	type: "Button",
	category: "widgets",
	iconSrc: ecommerceDefObj.widgets["c029b3fd-e8e4-44f1-b1f0-1f83e437d45c"].widgetIcon,
	label: "E-commerce View Cart",
	command: "WEditorCommands.AddAppComponent",
	commandParameter: {
		appDefinitionDataObj: ecommerceDefObj,
		type: "wixappsPart",
		widgetId: "c029b3fd-e8e4-44f1-b1f0-1f83e437d45c"
	}
}, {
	type: "Button",
	category: "widgets",
	iconSrc: ecommerceDefObj.widgets["cd54a28f-e3c9-4522-91c4-15e6dd5bc514"].widgetIcon,
	label: "E-commerce Checkout Button",
	command: "WEditorCommands.AddAppComponent",
	commandParameter: {
		appDefinitionDataObj: ecommerceDefObj,
		type: "wixappsPart",
		widgetId: "cd54a28f-e3c9-4522-91c4-15e6dd5bc514"
	}
}]);
W.Experiments.registerNewExperimentDataItemProps("NewComps", "New", "STYLES", "styleItems", {
	"wysiwyg.viewer.components.SelectableSliderGallery": ["selsg1"],
	contentGallery: ["pgg_cg1", "pgg_cg1"],
	"wysiwyg.viewer.components.TableComponent": ["tblc1"],
	"wysiwyg.viewer.components.inputs.NumberInput": ["numi1"],
	ecomAddProduct: ["ecom_ap"],
	ecomViewCart: ["ecom_vc1", "ecom_vc2", "ecom_vc3"],
	ecomCheckout: ["ecom_co1", "ecom_co2", "ecom_co3"]
});
W.Experiments.registerNewExperimentDataItemProps("PaginatedGrid", "New", "ADD_COMPONENT_TABS", "items", [{
	type: "Button",
	category: "gallery",
	iconSrc: "buttons/add_gallery_04.png",
	label: "ADD_ANIMATED_GRID_GALLERY",
	command: "WEditorCommands.AddComponent",
	commandParameter: {
		compType: "addPaginatedGridGallery",
		styleId: ""
	}
}]);
W.Experiments.registerNewExperimentDataItemProps("PaginatedGrid", "New", "STYLES", "styleItems", {
	"wysiwyg.viewer.components.PaginatedGridGallery": ["pagg1", "pagg2", "pagg3"]
});
W.Experiments.registerNewExperimentDataItemProps("SM", "New", "SETTINGS_PANEL", "items", [{
	type: "Button",
	iconSrc: "buttons/add_btns_08.png",
	toggleMode: false,
	label: "SITE_MEMBERS",
	command: "WEditorCommands.SiteMembers"
}]);
W.Experiments.registerNewExperimentDataItemProps("SM", "New", "SETTINGS_PANEL_FB_MODE", "items", [{
	type: "Button",
	iconSrc: "buttons/add_btns_08.png",
	toggleMode: false,
	label: "SITE_MEMBERS",
	command: "WEditorCommands.SiteMembers"
}]);
W.Experiments.registerExperimentDataItem("SocialPanel", "New", "SETTINGS_PANEL", {
	type: "PropertyList",
	items: [{
		type: "Button",
		iconSrc: "buttons/site_name.png",
		toggleMode: false,
		label: "SITE_NAME",
		command: "WEditorCommands.ShowSiteName"
	}, {
		type: "Button",
		iconSrc: "buttons/favicon_thumbnail.png",
		toggleMode: false,
		label: "FAVICON",
		command: "WEditorCommands.ShowFaviconAndThumbnail"
	}, {
		type: "Button",
		iconSrc: "buttons/seo.png",
		toggleMode: false,
		label: "SEO",
		command: "WEditorCommands.ShowSEO"
	}, {
		type: "Button",
		iconSrc: "buttons/statistics.png",
		toggleMode: false,
		label: "STATISTICS",
		command: "WEditorCommands.ShowStatistics"
	}, {
		type: "Button",
		iconSrc: "buttons/add_social_08.png",
		toggleMode: false,
		label: "SOCIAL",
		command: "WEditorCommands.ShowSocial"
	}]
});
W.Experiments.registerExperimentDataItem("SocialPanel", "New", "SETTINGS_PANEL_FB_MODE", {
	type: "PropertyList",
	items: [{
		type: "Button",
		iconSrc: "buttons/site_name.png",
		toggleMode: false,
		label: "SITE_NAME",
		command: "WEditorCommands.ShowSiteName"
	}, {
		type: "Button",
		iconSrc: "buttons/statistics.png",
		toggleMode: false,
		label: "STATISTICS",
		command: "WEditorCommands.ShowStatistics"
	}, {
		type: "Button",
		iconSrc: "buttons/add_social_08.png",
		toggleMode: false,
		label: "SOCIAL",
		command: "WEditorCommands.ShowSocial"
	}]
});
W.Experiments.registerNewExperimentDataItemProps("Staff", "Wix", "LINK_BUTTONS_TYPE", "items", [{
	buttonLabel: "LINK_DLG_LOGIN",
	spriteOffset: {
		x: 0,
		y: 0
	},
	linkType: "LOGIN"
}]);
var app1DefObj = {
	type: "WLA",
	appDefinitionId: "d77360d8-a1e6-4041-83c8-118d25a45a1f",
	name: "Menu",
	appIcon: "http://www.qantas.com.au/img/150x150/frequent-flyer/icon-eat.jpg",
	pictures: ["http://th08.deviantart.net/fs71/PRE/f/2010/108/b/9/Restaurant_Menu_Inside_by_ajranovic.jpg", "http://moosetoothgrill.com/images/menu2.jpg", "http://3.bp.blogspot.com/_Wn9naEwvJic/TP7s0QXe1XI/AAAAAAAAACs/DzGIn7g9vTA/s1600/RestaurantMenu_A_2007.gif"],
	description: "Menu testing app",
	widgets: {
		"c741a4e1-e5cf-4b77-a899-43b6ee29d955": {
			widgetId: "c741a4e1-e5cf-4b77-a899-43b6ee29d955",
			name: null,
			widgetIcon: "http://www.qantas.com.au/img/150x150/frequent-flyer/icon-eat.jpg",
			pictures: ["http://joebess.com/Feb12/AnimationBlogIndex.gif", "http://themes.zenverse.net/themedata/monoshade/screenshots/indexstyle1.gif"],
			description: null
		}
	},
	packageName: "app1"
};
W.Experiments.registerNewExperimentDataItemProps("WixApps", "New", "ADD_COMPONENT_TABS", "items", []);
W.Experiments.registerNewExperimentDataItem("PanelsData", "New", "PROPERTY_PANELS", {
	type: "PropertyList",
	items: [{
		dataType: "Menu",
		compType: "wysiwyg.viewer.components.menus.DropDownMenu",
		panelCompType: "wysiwyg.editor.components.panels.HorizontalMenuPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "Document",
		compType: "wysiwyg.viewer.components.HorizontalMenu",
		panelCompType: "wysiwyg.editor.components.panels.HorizontalMenuPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "Image",
		compType: "wysiwyg.viewer.components.WPhoto",
		panelCompType: "wysiwyg.editor.components.panels.WPhotoMenuPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "ImageList",
		compType: "mobile.core.components.PhotoGalleryGrid",
		panelCompType: "wysiwyg.editor.components.panels.WGalleryPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "Image",
		compType: "wysiwyg.viewer.components.ClipArt",
		panelCompType: "wysiwyg.editor.components.panels.ClipArtMenuPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "TwitterTweet",
		compType: "wysiwyg.viewer.components.WTwitterTweet",
		panelCompType: "wysiwyg.editor.components.panels.TwitterTweetPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "TwitterFollow",
		compType: "wysiwyg.viewer.components.WTwitterFollow",
		panelCompType: "wysiwyg.editor.components.panels.TwitterFollowPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "TwitterFollow",
		compType: "wysiwyg.viewer.components.TwitterFeed",
		panelCompType: "wysiwyg.editor.components.panels.TwitterFeedPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.WFacebookLike",
		panelCompType: "wysiwyg.editor.components.panels.FacebookLikePanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.WFacebookComment",
		panelCompType: "wysiwyg.editor.components.panels.FacebookCommentPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.WGooglePlusOne",
		panelCompType: "wysiwyg.editor.components.panels.GooglePlusOnePanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "PayPalButton",
		compType: "wysiwyg.viewer.components.PayPalButton",
		panelCompType: "wysiwyg.editor.components.panels.PayPalButtonPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "GeoMap",
		compType: "wysiwyg.viewer.components.GoogleMap",
		panelCompType: "wysiwyg.editor.components.panels.GoogleMapPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "HtmlComponent",
		compType: "wysiwyg.viewer.components.HtmlComponent",
		panelCompType: "wysiwyg.editor.components.panels.HtmlComponentPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "EbayItemsBySeller",
		compType: "wysiwyg.viewer.components.EbayItemsBySeller",
		panelCompType: "wysiwyg.editor.components.panels.EbayItemsBySellerPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "ContactForm",
		compType: "wysiwyg.viewer.components.ContactForm",
		panelCompType: "wysiwyg.editor.components.panels.ContactFormPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "FlashComponent",
		compType: "wysiwyg.viewer.components.FlashComponent",
		panelCompType: "wysiwyg.editor.components.panels.FlashComponentPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "Video",
		compType: "wysiwyg.viewer.components.Video",
		panelCompType: "wysiwyg.editor.components.panels.VideoPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "ImageList",
		compType: "wysiwyg.viewer.components.PaginatedGridGallery",
		panelCompType: "wysiwyg.editor.components.panels.PaginatedGridGalleryPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "SiteButton",
		compType: "wysiwyg.viewer.components.AdminLoginButton",
		panelCompType: "wysiwyg.editor.components.panels.AdminLoginButtonPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "ImageList",
		compType: "wysiwyg.viewer.components.MatrixGallery",
		panelCompType: "wysiwyg.editor.components.panels.MatrixGalleryPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "ImageList",
		compType: "wysiwyg.viewer.components.LinkBar",
		panelCompType: "wysiwyg.editor.components.panels.LinkBarPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "ImageList",
		compType: "wysiwyg.viewer.components.SlideShowGallery",
		panelCompType: "wysiwyg.editor.components.panels.SlideShowGalleryPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "ImageList",
		compType: "wysiwyg.viewer.components.SliderGallery",
		panelCompType: "wysiwyg.editor.components.panels.SliderGalleryPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "SiteButton",
		compType: "wysiwyg.viewer.components.SiteButton",
		panelCompType: "wysiwyg.editor.components.panels.ButtonPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "FlickrBadgeWidget",
		compType: "wysiwyg.viewer.components.FlickrBadgeWidget",
		panelCompType: "wysiwyg.editor.components.panels.FlickrBadgeWidgetPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "SoundCloudWidget",
		compType: "wysiwyg.viewer.components.SoundCloudWidget",
		panelCompType: "wysiwyg.editor.components.panels.SoundCloudWidgetPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "mobile.core.components.Container",
		panelCompType: "wysiwyg.editor.components.panels.ContainerPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.ScreenWidthContainer",
		panelCompType: "wysiwyg.editor.components.panels.ContainerPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.HeaderContainer",
		panelCompType: "wysiwyg.editor.components.panels.ContainerPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.FooterContainer",
		panelCompType: "wysiwyg.editor.components.panels.ContainerPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.PagesContainer",
		panelCompType: "wysiwyg.editor.components.panels.PagesContainerPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.editor.managers.wedit.MultiSelectProxy",
		panelCompType: "wysiwyg.editor.components.panels.MultiSelectProxyPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.VerticalLine",
		panelCompType: "wysiwyg.editor.components.panels.LinesPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "",
		compType: "wysiwyg.viewer.components.FiveGridLine",
		panelCompType: "wysiwyg.editor.components.panels.LinesPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}, {
		dataType: "RichText",
		compType: "wysiwyg.viewer.components.WRichText",
		panelCompType: "wysiwyg.editor.components.panels.WRichTextPanel",
		panelSkinType: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
	}]
});
W.Experiments.registerNewExperimentDataItemProps("MasterPage", "New", "TOOLTIPS", "toolTips", {
	drag_to_header_and_change_state_ttid: {
		isMoreLess: false,
		isDontShowAgain: true,
		content: "<p>Element will appear on all pages</p>",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		},
		title: "Drop on Header"
	},
	drag_to_page_and_change_state_ttid: {
		isMoreLess: false,
		isDontShowAgain: true,
		content: "<p>Element will appear only on this page.</p>",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		},
		title: "Drop on Page"
	},
	drag_to_footer_and_change_state_ttid: {
		isMoreLess: false,
		isDontShowAgain: true,
		content: "Element will appear on all pages<br> <b>Want to make your page longer?</b> <br> Click on the page element and use the <br> Stretch handle to lengthen the page.",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		},
		title: "Drop here"
	},
	drag_to_container_on_page_and_change_state_ttid: {
		isMoreLess: false,
		isDontShowAgain: true,
		content: "<p>Element will appear only on this page</p>",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		},
		title: "Drop here"
	},
	drag_to_container_on_all_pages_and_change_state_ttid: {
		isMoreLess: false,
		isDontShowAgain: true,
		content: "<p>Element will appear on all pages</p>",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		},
		title: "Drop here"
	},
	try_to_make_the_page_longer_ttid: {
		isMoreLess: false,
		isDontShowAgain: true,
		content: "<p>You can lengthen the page by clicking on the page element and using its Stretch Handle</p>",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		},
		title: "Want to make your page longer?"
	},
	Component_Panel_is_in_master_not_changeable_ttid: {
		isMoreLess: false,
		isDontShowAgain: false,
		content: "<p>Elements in the footer appear on all pages. Moving an element up to your pages will make it appear on that page only. </p>",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		}
	}
});
W.Experiments.registerNewExperimentDataItemProps("URMButtons", "New", "TOOLTIPS", "toolTips", {
	Main_Menu_Undo_ttid: {
		isMoreLess: false,
		isDontShowAgain: false,
		content: "<p>Undo Ctrl+Z</p>",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		}
	},
	Main_Menu_Redo_ttid: {
		isMoreLess: false,
		isDontShowAgain: false,
		content: "<p>Redo Ctrl+Y</p>",
		isPublished: true,
		help: {
			isMoreHelp: false,
			text: null,
			url: ""
		}
	}
});
W.Experiments.registerNewExperimentDataItemProps("AudioPlayer", "New", "COMPONENT_TYPES", "list", function() {
	return [{
		key: "addAudioPlayer",
		component: {
			comp: "wysiwyg.viewer.components.AudioPlayer",
			skin: "wysiwyg.viewer.skins.AudioPlayerSkin",
			data: {
				type: "AudioPlayer"
			},
			layout: {
				width: 400,
				height: 100
			}
		}
	}]
});
W.Experiments.registerNewExperimentDataItemProps("PaginatedGrid", "New", "COMPONENT_TYPES", "list", [{
	key: "addPaginatedGridGallery",
	component: {
		groupType: "Gallery",
		comp: "wysiwyg.viewer.components.PaginatedGridGallery",
		skin: "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridOverlay",
		data: {
			type: "ImageList"
		},
		dataRefs: {
			items: {
				isList: true,
				items: [{
					data: {
						type: "Image",
						title: "Purple flower",
						uri: "74f8adfdfcbda24e8c5f82891082c0ab.wix_mp",
						description: "Some description here",
						width: 699,
						height: 800
					}
				}, {
					data: {
						type: "Image",
						title: "Yellow flowers",
						uri: "38f2706aeb32e13e36c1d9780ea8d208.wix_mp",
						description: "Some description here",
						width: 4000,
						height: 3000
					}
				}, {
					data: {
						type: "Image",
						title: "White flower",
						uri: "6c90a0673862c3ba34f0cd12a004aa6f.wix_mp",
						description: "Some description here",
						width: 2240,
						height: 1488
					}
				}, {
					data: {
						type: "Image",
						title: "Yellow flowers",
						uri: "38f2706aeb32e13e36c1d9780ea8d208.wix_mp",
						description: "Some description here",
						width: 4000,
						height: 3000
					}
				}, {
					data: {
						type: "Image",
						title: "White flower",
						uri: "6c90a0673862c3ba34f0cd12a004aa6f.wix_mp",
						description: "Some description here",
						width: 2240,
						height: 1488
					}
				}, {
					data: {
						type: "Image",
						title: "Purple flower",
						uri: "74f8adfdfcbda24e8c5f82891082c0ab.wix_mp",
						description: "Some description here",
						width: 699,
						height: 800
					}
				}, {
					data: {
						type: "Image",
						title: "White flower",
						uri: "6c90a0673862c3ba34f0cd12a004aa6f.wix_mp",
						description: "Some description here",
						width: 2240,
						height: 1488
					}
				}, {
					data: {
						type: "Image",
						title: "Purple flower",
						uri: "74f8adfdfcbda24e8c5f82891082c0ab.wix_mp",
						description: "Some description here",
						width: 699,
						height: 800
					}
				}, {
					data: {
						type: "Image",
						title: "Purple flower",
						uri: "74f8adfdfcbda24e8c5f82891082c0ab.wix_mp",
						description: "Some description here",
						width: 699,
						height: 800
					}
				}, {
					data: {
						type: "Image",
						title: "Yellow flowers",
						uri: "38f2706aeb32e13e36c1d9780ea8d208.wix_mp",
						description: "Some description here",
						width: 4000,
						height: 3000
					}
				}, {
					data: {
						type: "Image",
						title: "White flower",
						uri: "6c90a0673862c3ba34f0cd12a004aa6f.wix_mp",
						description: "Some description here",
						width: 2240,
						height: 1488
					}
				}, {
					data: {
						type: "Image",
						title: "Yellow flowers",
						uri: "38f2706aeb32e13e36c1d9780ea8d208.wix_mp",
						description: "Some description here",
						width: 4000,
						height: 3000
					}
				}, {
					data: {
						type: "Image",
						title: "White flower",
						uri: "6c90a0673862c3ba34f0cd12a004aa6f.wix_mp",
						description: "Some description here",
						width: 2240,
						height: 1488
					}
				}, {
					data: {
						type: "Image",
						title: "Purple flower",
						uri: "74f8adfdfcbda24e8c5f82891082c0ab.wix_mp",
						description: "Some description here",
						width: 699,
						height: 800
					}
				}, {
					data: {
						type: "Image",
						title: "White flower",
						uri: "6c90a0673862c3ba34f0cd12a004aa6f.wix_mp",
						description: "Some description here",
						width: 2240,
						height: 1488
					}
				}, {
					data: {
						type: "Image",
						title: "Purple flower",
						uri: "74f8adfdfcbda24e8c5f82891082c0ab.wix_mp",
						description: "Some description here",
						width: 699,
						height: 800
					}
				}, {
					data: {
						type: "Image",
						title: "Yellow flowers",
						uri: "38f2706aeb32e13e36c1d9780ea8d208.wix_mp",
						description: "Some description here",
						width: 4000,
						height: 3000
					}
				}]
			}
		},
		layout: {
			width: 480,
			height: 360
		}
	}
}]);
W.Experiments.registerNewExperimentManager("TPA", "New", "AppStoreManager", {
	name: "wysiwyg.editor.managers.AppStoreManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		Static: {
			Types: {
				TPA_SECTION: "tpaSection",
				TPA_WIDGET: "tpaWidget",
				WIX_APPS_PART: "wixappsPart"
			}
		},
		initialize: function() {
			W.AppStoreManager = this;
			if (W.Managers && W.Managers.list) {
				W.Managers.list.push({
					target: "AppStoreManager"
				})
			}
			this._isReady = false;
			this._nextTempApplicationId = 0;
			this._loadAppDefinitionData(function(a) {
				this._appDefinitionData = a;
				this._addToComponentSelection();
				this._isReady = true
			}.bind(this))
		},
		isReady: function() {
			return this._isReady
		},
		getAppsDefinitionData: function(a) {
			if (!this._appDefinitionData) {
				W.Utils.callLater(this.getAppsDefinitionData, [a])
			} else {
				return a(this._appDefinitionData)
			}
		},
		getAppDefinitionData: function(b, c) {
			if (!this._appDefinitionData) {
				W.Utils.callLater(this.getAppDefinitionData, [b, c])
			} else {
				var a = this._appDefinitionData[b] || {};
				return c(a)
			}
		},
		addComponent: function(b, a, c) {
			this.provisionApp(b, a, c, function(e, f, d, g) {
				this.injects().Preview.getPreviewManagers().Viewer.getAppDataHandler().registerAppData(e);
				this.getAppManager(f).onProvisionCompleted(e, f, d, g)
			}.bind(this))
		},
		getAppManager: function(a) {
			return (this.isTPAType(a) ? W.TPAEditorManager : W.AppsEditor)
		},
		isTPAType: function(a) {
			return ([this.Types.TPA_SECTION, this.Types.TPA_WIDGET].indexOf(a) != -1)
		},
		countAppElements: function(b, a) {
			return this.getAppManager(b).countAppElements(b, a)
		},
		provisionApp: function(d, b, e, g) {
			var f = this.injects().Preview.getPreviewManagers().Viewer.getAppDataHandler().getAppsData();
			var a = b.appDefinitionId;
			var c = false;
			Object.each(f, function(i, h) {
				var j = f[h];
				if (!c && j.appDefinitionId == a) {
					g(j, d, b, e);
					c = true
				}
			}, this);
			if (!c) {
				if (W.Config.siteNeverSavedBefore()) {
					this._provisionAppBeforeMetasiteSave(a, function(h) {
						h.applicationId = this.getNextGeneratedApplicationId();
						g(h, d, b, e)
					}.bind(this))
				} else {
					this._provisionApp(a, function(h) {
						g(h, d, b, e)
					}.bind(this))
				}
			}
		},
		completeProvisionAfterMetasiteSave: function(d, c) {
			var b = W.TPAEditorManager.getInstalledAppsInfo();
			var a = W.AppsEditor && W.AppsEditor.getInstalledAppsInfo() || [];
			var e = {
				metaSiteId: d,
				apps: b.concat(a)
			};
			if (b.length + a.length > 0) {
				this._completeProvisionAfterMetasiteSave(e, c)
			} else {
				c()
			}
		},
		getNextGeneratedApplicationId: function() {
			this._nextTempApplicationId += 1;
			return this._nextTempApplicationId
		},
		_addToComponentSelection: function() {
			if (!W.Experiments.isMarked({
				TPAButtons: "New"
			})) {
				return
			}
			W.Data.getDataByQuery("#ADD_COMPONENT_TABS", function(b) {
				var a = b.get("items");
				this.getAppsDefinitionData(function(c) {
					Object.each(c, function(d) {
						if (d.type == "WLA") {
							this.addWixAppsButtons(d, a)
						} else {
							this.addTPAButtons(d, a)
						}
					}.bind(this))
				}.bind(this))
			}.bind(this))
		},
		addWixAppsButtons: function(b, a) {},
		addTPAButtons: function(d, a) {
			var c = d.hasSection;
			if (c) {
				var b = this._findPlaceInEditorMenu(d, a);
				a.splice(b, 0, {
					type: "Button",
					category: d.category || "widgets",
					iconSrc: d.appIcon || "buttons/icon_placeholder.png",
					label: d.name,
					command: "WEditorCommands.AddAppComponent",
					commandParameter: {
						appDefinitionDataObj: d,
						type: this.Types.TPA_SECTION
					}
				})
			}
			Object.each(d.widgets, function(g, f) {
				var e = this._findPlaceInEditorMenu(d, a);
				a.splice(e, 0, {
					type: "Button",
					category: d.category || "widgets",
					iconSrc: g.widgetIcon || d.appIcon || "buttons/icon_placeholder.png",
					label: g.name || d.name,
					command: "WEditorCommands.AddAppComponent",
					commandParameter: {
						appDefinitionDataObj: d,
						type: this.Types.TPA_WIDGET,
						widgetId: f
					}
				})
			}.bind(this))
		},
		_findPlaceInEditorMenu: function(e, b) {
			function a(g, f) {
				function h(i) {
					return f.indexOfByPredicate(function(j) {
						return j.category == i
					})
				}
				if (g == "widgets") {
					if (!this._widgetsStartingIndex) {
						this._widgetsStartingIndex = h("widgets")
					}
					return this._widgetsStartingIndex
				} else {
					return h("widgets")
				}
			}
			var d = e.category || "widgets";
			var c = e.placeInEditorMenu || 3;
			c += a(d, b);
			return c
		},
		_provisionApp: function(a, b) {
			W.ServerFacade.provisionApp(a, b, this._onProvisionError)
		},
		_provisionAppBeforeMetasiteSave: function(a, b) {
			W.ServerFacade.provisionAppBeforeMetasiteSave(a, b, this._onProvisionError)
		},
		_onProvisionError: function(a) {
			W.Utils.errorPopup(W.Resources.get("EDITOR_LANGUAGE", "ERROR_PROVISION_APP_TITLE"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_PROVISION_APP"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_CODE_IS") + " " + a.errorCode)
		},
		_completeProvisionAfterMetasiteSave: function(b, a) {
			W.ServerFacade.completeProvisionAfterMetasiteSave(b, a, function(c) {
				LOG.reportError(wixErrors.APPS_UNABLE_TO_COMPLETE_PROVISION_POST_SAVE, this.$className, "_completeProvisionAfterMetasiteSave", c.code, c.description);
				a()
			})
		},
		_loadAppDefinitionData: function(a) {
			W.ServerFacade.loadAppDefinition("map", a, function(c) {
				LOG.reportError(wixErrors.APPS_UNABLE_TO_LOAD_APP_DEFINITIONS, this.$className, "_loadAppDefinitionData", c.code, c.description);
				var b = {};
				a(b)
			})
		}
	}
});
W.Experiments.registerExperimentManager("WixApps", "New", {
	name: "experiments.wysiwyg.editor.managers.wixapps.AppStoreManager",
	Class: {
		Extends: "wysiwyg.editor.managers.AppStoreManager",
		addWixAppsButtons: function(e, a) {
			var d = null;
			if (window.serviceTopology && window.serviceTopology.scriptsLocationMap && window.serviceTopology.scriptsLocationMap.wixapps) {
				d = window.serviceTopology.scriptsLocationMap.wixapps + "/javascript/wixapps/apps/" + e.packageName + "/"
			}
			var b = function(g) {
					if (d && g) {
						var f = g.match(/^(http:\/\/)?(images\/.*)/);
						if (f) {
							return d + f[2]
						}
					}
					return g
				};
			if (e.pictures) {
				for (var c = 0;
				c < e.pictures.length;
				c++) {
					e.pictures[c] = b(e.pictures[c])
				}
			}
			Object.each(e.widgets, function(i, h) {
				var g = this._findPlaceInEditorMenu(e, a);
				var f = b(i.widgetIcon || e.appIcon);
				a.splice(g, 0, {
					type: "Button",
					category: e.category || "widgets",
					iconSrc: f || "buttons/icon_placeholder.png",
					label: i.name || e.name,
					command: "WEditorCommands.AddAppComponent",
					commandParameter: {
						appDefinitionDataObj: e,
						type: this.Types.WIX_APPS_PART,
						widgetId: h
					}
				})
			}.bind(this))
		}
	}
});
W.Experiments.registerNewExperimentManager("SM", "New", "SMEditor", {
	name: "wysiwyg.viewer.managers.SMEditorManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		Binds: [],
		initialize: function() {
			W.SMEditor = this;
			if (W.Managers && W.Managers.list) {
				W.Managers.list.push({
					target: "SMEditor"
				})
			}
		},
		provisionIfNeeded: function(a) {
			if (this.injects().Config.siteNeverSavedBefore()) {
				this._provisionBeforeMetasiteSave(a)
			} else {
				this._provision(a)
			}
		},
		_getSiteMembersViewManager: function() {
			return this.injects().Preview.getPreviewManagers().SiteMembers
		},
		_provision: function(a) {
			W.ServerFacade.smProvision(function(b) {
				this._getSiteMembersViewManager().setData(b);
				a(b)
			}.bind(this), function(b) {
				LOG.reportError("Unable to provision for the site members service", this.$className, "_provision", b.code, b.description)
			}.bind(this))
		},
		_provisionBeforeMetasiteSave: function(a) {
			W.ServerFacade.smProvisionAppBeforeMetasiteSave(function(b) {
				this._getSiteMembersViewManager().setData(b);
				this._preSaveProvisionSuccess = true;
				a(b)
			}.bind(this), function(b) {
				LOG.reportError("Unable to provision the site members service", this.$className, "_provisionBeforeMetasiteSave", b.code, b.description)
			}.bind(this))
		},
		completeProvisionAfterMetasiteSave: function(a) {
			if (!this._preSaveProvisionSuccess) {
				a()
			}
			W.ServerFacade.smCompleteProvisionAfterMetasiteSave(this._getCollectionId(), function() {
				a()
			}, function(b) {
				LOG.reportError("Unable to complete provision for the site members service", this.$className, "completeProvisionAfterMetasiteSave", b.code, b.description)
			}.bind(this))
		},
		isServiceProvisioned: function() {
			return this._getSiteMembersViewManager().isSMDataAvailable()
		},
		isServiceOperational: function() {
			var a = this.isServiceProvisioned();
			var b = !W.Config.siteNeverSavedBefore();
			return (a && b)
		},
		_getCollectionId: function() {
			return this._getSiteMembersViewManager().getCollectionId()
		}
	}
});
W.Experiments.registerNewExperimentManager("TPA", "New", "TPAEditorManager", {
	name: "wysiwyg.editor.managers.TPAEditorManager",
	imports: ["wysiwyg.editor.managers.AppStoreManager"],
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		Binds: ["onProvisionCompleted"],
		initialize: function() {
			W.TPAEditorManager = this;
			if (W.Managers && W.Managers.list) {
				W.Managers.list.push({
					target: "TPAEditorManager"
				})
			}
			this._defineDataPanels();
			this._isReady = true;
			this.Types = this.imports.AppStoreManager.Types
		},
		isReady: function() {
			return this._isReady
		},
		_defineDataPanels: function() {
			W.Editor.addDataPanel("TPAWidget", "wysiwyg.viewer.components.tpapps.TPAWidget", {
				logic: "wysiwyg.editor.components.panels.TPAPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			W.Editor.addDataPanel("TPA", "wysiwyg.viewer.components.tpapps.TPASection", {
				logic: "wysiwyg.editor.components.panels.TPAPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			})
		},
		getTPAComponentsOnSite: function(b) {
			var a = "TPA";
			if (b != undefined) {
				a = (b == this.Types.TPA_SECTION ? "TPASection" : "TPAWidget")
			}
			return W.Preview.getPreviewSite().$("SITE_STRUCTURE").getElements("div[comp*='" + a + "']")
		},
		getAppData: function(a) {
			return this.injects().Preview.getPreviewManagers().Viewer.getAppDataHandler().getAppData(a)
		},
		getWidgetData: function(b, a) {
			return this.injects().Preview.getPreviewManagers().Viewer.getAppDataHandler().getWidgetData(b, a)
		},
		onProvisionCompleted: function(c, d, b, e) {
			var a = b.appDefinitionId;
			switch (d) {
			case this.Types.TPA_SECTION:
				if (this.isAddAllowed(d, a)) {
					this._createSection(b, c)
				} else {}
				break;
			case this.Types.TPA_WIDGET:
				this._createWidget(c, e);
				break
			}
		},
		getInstalledAppsInfo: function() {
			var a = this.getTPAComponentsOnSite();
			var b = {};
			Array.each(a, function(f) {
				var c = f.getLogic();
				var g = c.getApplicationId();
				var d = c.getAppData();
				var e = d.instanceId;
				if (!b.hasOwnProperty(g)) {
					b[g] = {
						appDefinitionId: c.getAppDefinitionId(),
						applicationId: c.getApplicationId(),
						instanceId: e
					}
				}
			});
			return Object.values(b)
		},
		_createWidget: function(a, c) {
			var e = this.getWidgetData(a.applicationId, c);
			var b = {
				w: e.defaultWidth,
				h: e.defaultHeight
			};
			var d = {
				compData: {
					comp: "wysiwyg.viewer.components.tpapps.TPAWidget",
					skin: "wysiwyg.viewer.skins.TPAWidgetSkin",
					data: {
						type: "TPAWidget",
						widgetId: c,
						applicationId: a.applicationId
					},
					layout: {
						width: b.w,
						height: b.h
					}
				}
			};
			W.Commands.executeCommand("WEditorCommands.AddComponent", d, this)
		},
		_createSection: function(b, a) {
			var c = W.Utils.getUniqueId("tpaPg");
			var e = W.Utils.getUniqueId("TPASctn");
			var d = {
				w: a.defaultWidth || this.injects().Preview.getPreviewManagers().Viewer.getDocWidth(),
				h: a.defaultHeight || 500
			};
			var f = {
				name: b.name,
				serializedPageData: {
					componentType: "mobile.core.components.Page",
					type: "Page",
					id: c,
					argObject: {},
					styleId: "p3",
					skin: "mobile.core.skins.InlineSkin",
					layout: {
						x: 0,
						y: 0,
						width: d.w,
						height: d.h,
						anchors: []
					},
					data: {
						type: "Page",
						metaData: {
							isPreset: false,
							schemaVersion: "1.0",
							isHidden: false
						},
						title: b.name,
						hideTitle: true,
						icon: b.icon,
						descriptionSEO: b.description,
						metaKeywordsSEO: "",
						pageTitleSEO: b.name,
						pageUriSEO: "blank",
						hidePage: false,
						underConstruction: false,
						tpaApplicationId: a.applicationId
					},
					dataRefs: {},
					components: [{
						componentType: "wysiwyg.viewer.components.tpapps.TPASection",
						type: "Component",
						id: e,
						styleId: "tpas0",
						skin: "wysiwyg.viewer.skins.TPASectionSkin",
						layout: {
							x: 0,
							y: 0,
							width: d.w,
							height: d.h,
							anchors: [{
								type: "BOTTOM_PARENT",
								targetComponent: c,
								locked: false,
								distance: 0,
								topToTop: 0,
								originalValue: 50
							}]
						},
						data: {
							type: "TPA",
							applicationId: a.applicationId,
							metaData: {}
						}
					}]
				}
			};
			W.Commands.executeCommand("WEditorCommands.AddPage", {
				page: f
			}, this)
		},
		isAppInstalledOnSite: function(b, a) {
			return this.countAppElements(b, a) > 0
		},
		isAddAllowed: function(b, a) {
			if (b == this.Types.TPA_SECTION) {
				return (this.countAppElements(b, a) == 0)
			} else {
				return true
			}
		},
		countAppElements: function(c, a) {
			var d = 0;
			var b = this.getTPAComponentsOnSite(c);
			Array.each(b, function(f) {
				var e = f.getLogic();
				if (e.getAppDefinitionId() == a) {
					d++
				}
			});
			return d
		}
	}
});
W.Experiments.registerExperimentClass("GridLines", "New", {
	name: "experiments.wysiwyg.editor.managers.WCommandRegistrarGridLinesNew",
	Class: {
		Extends: "wysiwyg.editor.managers.WCommandRegistrar",
		registerCommands: function() {
			var a = W.Commands;
			a.registerCommand("EditorCommands.SiteLoaded");
			a.registerCommand("EditorCommands.GridLinesLoaded");
			this._editCommandRegistrar.registerCommands();
			this._saveCommandRegistrar.registerCommands();
			this._openDialogCommandRegistrar.registerCommands();
			this._openPanelCommandRegistrar.registerCommands();
			this._pageManipulationCommandRegistrar.registerCommands();
			this._accountCommandRegistrar.registerCommands();
			this._componentCommandRegistrar.registerCommands();
			this._editorCommandRegistrar.registerCommands()
		}
	}
});
W.Experiments.registerExperimentManager("ColorPicker", "New", {
	name: "experiments.wysiwyg.editor.managers.WDialogManagerColorPicker",
	Class: {
		Extends: "wysiwyg.editor.managers.WDialogManager",
		openColorPickerDialog: function(a) {
			this._createAndOpenWDialog("_colorPickerDialog", "wysiwyg.editor.components.dialogs.ColorPickerDialog", "wysiwyg.editor.skins.dialogs.ColorPickerDialogSkin", function(b) {}, {
				width: 310,
				height: 260,
				maxHeight: 260,
				top: a.top,
				left: a.left,
				position: Constants.DialogWindow.POSITIONS.DYNAMIC,
				allowScroll: false,
				semiModal: true,
				allowDrag: true,
				buttonSet: W.EditorDialogs.DialogButtonSet.OK_CANCEL,
				title: W.Resources.get("EDITOR_LANGUAGE", "SELECT_COLOR_DIALOG_TITLE")
			}, null, true, a, false, false)
		}
	}
});
W.Experiments.registerExperimentManager("Dev", "New", {
	name: "experiments.wysiwyg.editor.managers.WDialogManagerDevNew",
	Class: {
		Extends: "wysiwyg.editor.managers.WDialogManager",
		openExperimentsDialog: function() {
			this._createAndOpenWDialog("_experimentsDialog", "wysiwyg.editor.components.dialogs.ExperimentsDialog", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function() {}, {
				title: "Experiments Control Panel",
				width: 400,
				minHeight: 300,
				maxHeight: 600,
				position: Constants.DialogWindow.POSITIONS.TOP,
				allowScroll: true,
				allowDrag: false,
				modal: true,
				buttonSet: this.DialogButtonSet.OK_CANCEL
			}, null, true, null, true, false, true)
		}
	}
});
W.Experiments.registerExperimentManager("IframeDialog", "New", {
	name: "experiments.wysiwyg.editor.managers.WDialogManager",
	Class: {
		Extends: "wysiwyg.editor.managers.WDialogManager",
		openHelpDialog: function(a, b) {
			b = b || {
				dialogId: "_helpDialog",
				height: 610,
				width: 610,
				title: W.Resources.get("EDITOR_LANGUAGE", "IFRAME_HELP_TITLE"),
				description: ""
			};
			this.openIframeDialog(a, b)
		},
		openIframeDialog: function(a, b) {
			b.height = b.height || 610;
			b.width = b.width || 610;
			b.dialogId = b.dialogId || "_iframeDialog";
			return this._createAndOpenWDialog(b.dialogId, "wysiwyg.editor.components.Iframe", "wysiwyg.editor.skins.IframeSkin", function(c) {
				c.setUrl(a)
			}, {
				width: b.width,
				maxHeight: b.height,
				position: Constants.DialogWindow.POSITIONS.CENTER,
				allowScroll: true,
				nonModal: true,
				allowDrag: true,
				title: b.title,
				description: b.description,
				buttonSet: this.DialogButtonSet.NONE
			}, null, true, b, false, false, true)
		},
		_onDialogClosing: function(b, c, a) {
			this.parent(b);
			if (!a) {
				delete this[c]
			}
		},
		_createAndOpenWDialog: function(c, i, l, d, k, j, e, g, h, b, a) {
			var f;
			if (b) {
				f = this[c]
			}
			if (a && this[c]) {
				if (this[c].getLogic) {
					this[c].getLogic().closeDialog()
				} else {
					delete this[c]
				}
			}
			if (!f || !f.getLogic) {
				f = W.Components.createComponent("mobile.editor.components.dialogs.DialogWindow", k.dialogSkin || "wysiwyg.editor.skins.dialogs.WDialogWindowSkin", undefined, {}, function() {
					var m = f.getLogic();
					f.addEvent("innerDialogReady", function() {
						if (e) {
							m.openDialog(k)
						} else {
							m.getInnerDialog().addEvent("dialogOptionsSet", function() {
								m.openDialog(k)
							})
						}
						d(m.getInnerDialog().getLogic())
					});
					f.addEvent("dialogClosed", function() {
						this._onDialogClosing(f, c, b)
					}.bind(this));
					k && m.setDialogOptions(k);
					m.setDialog(i, l, g, j)
				}.bind(this));
				this[c] = f
			} else {
				d(this[c].getLogic().getInnerDialog().getLogic());
				if (e) {
					this[c].getLogic().openDialog(k)
				}
			}
			this._registerOpenDialog(f, h);
			document.addEvent(Constants.CoreEvents.KEY_DOWN, this._onKeyDown);
			return f
		}
	}
});
W.Experiments.registerExperimentManager("TPA", "New", {
	name: "experiments.wysiwyg.editor.managers.WDialogManagerTpaNew",
	Class: {
		Extends: "wysiwyg.editor.managers.WDialogManager",
		openTPASettingsDialog: function(b, d, c) {
			var e = "SIDE_PANEL_PAGES_ADD_TPA";
			var a = b.settingsHeight || 550;
			this._createAndOpenWDialog("_tpaSettingsDialog", "wysiwyg.editor.components.dialogs.TPASettings", "wysiwyg.editor.skins.IframeSkin", function(f) {}, {
				width: b.settingsWidth || 550,
				maxHeight: a,
				top: d.top,
				left: d.left,
				position: Constants.DialogWindow.POSITIONS.SIDE,
				allowScroll: true,
				tabs: false,
				title: b.appDefinitionName,
				titleHeight: 50,
				description: "",
				allowDrag: true,
				helpIcon: true,
				semiModal: true,
				buttonSet: this.DialogButtonSet.NONE,
				helplet: null
			}, null, true, {
				height: a,
				applicationId: b.applicationId,
				previewComponent: c
			}, true, false, true)
		},
		openAddAppDialog: function(a, b, c, e) {
			var d = "SIDE_PANEL_PAGES_ADD_TPA";
			if (W.AppStoreManager.countAppElements(b, a.appDefinitionId) == 0) {
				this._createAndOpenWDialog("_addAppDialog", "wysiwyg.editor.components.dialogs.AddAppDialog", "wysiwyg.editor.skins.dialogs.AddAppDialogSkin", function(f) {}, {
					width: 550,
					position: Constants.DialogWindow.POSITIONS.CENTER,
					tabs: false,
					title: a.name,
					titleHeight: 50,
					description: "",
					allowDrag: true,
					helpIcon: true,
					semiModal: true,
					buttonSet: this.DialogButtonSet.NONE,
					helplet: d,
					dialogSkin: "wysiwyg.editor.skins.dialogs.TPADialogWindowSkin"
				}, null, true, {
					closeCallback: e,
					appDefinitionData: a,
					widgetId: c,
					type: b
				}, true, false, true)
			} else {
				e()
			}
		}
	}
});
W.Experiments.registerExperimentManager("WixApps", "New", {
	name: "experiments.wysiwyg.editor.managers.WDialogManager",
	Class: {
		Extends: "wysiwyg.editor.managers.WDialogManager",
		_initializeExtra: function() {
			this.DialogButtons.DISCARD = "DISCARD";
			this.DialogButtons.SAVE = "SAVE";
			this.DialogButtons.DUPLICATE = "DUPLICATE";
			this.DialogButtons.OK_ADD_ANOTHER = "OK_ADD_ANOTHER";
			this.DialogButtonSet.SAVE_DISCARD = [this.DialogButtons.SAVE, this.DialogButtons.DISCARD]
		},
		openWixAppsDataDialog: function(c, a) {
			var b = {
				width: 1000,
				minHeight: 650
			};
			return this._createAndOpenWDialog("_WixAppsDataEditor", "wixapps.integration.components.editor.DataEditorDialog", "wixapps.integration.skins.editor.DataEditorDialogSkin", function(d) {
				d.setDialogOptions(c, a)
			}, {
				width: b.width,
				minHeight: b.minHeight,
				allowDrag: false,
				position: Constants.DialogWindow.POSITIONS.CENTER,
				showToolbar: false,
				tabs: false,
				buttonSet: this.DialogButtonSet.SAVE_DISCARD
			}, null, false, b, null, false)
		},
		openWixAppsEditItemDialog: function(d, g, c, b, e, f) {
			var h = {
				width: 950,
				minHeight: 300
			};
			var a;
			if (f) {
				a = [this.DialogButtons.CANCEL, this.DialogButtons.OK, this.DialogButtons.OK_ADD_ANOTHER]
			} else {
				a = [this.DialogButtons.CANCEL, this.DialogButtons.OK, this.DialogButtons.DUPLICATE, this.DialogButtons.DELETE]
			}
			return this._createAndOpenWDialog("_WixAppsDataItemEditor", "wixapps.integration.components.editor.DataItemEditorDialog", "wixapps.integration.skins.editor.DataItemEditorDialogSkin", function(i) {
				i.setDialogOptions(d, g, c, b, e, f)
			}, {
				width: h.width,
				minHeight: h.minHeight,
				allowDrag: false,
				position: Constants.DialogWindow.POSITIONS.CENTER,
				showToolbar: false,
				tabs: false,
				buttonSet: a
			}, null, false, h, null, false)
		},
		openProxyStyleSelector: function(a, c) {
			c = c || {};
			var d = a && a.$className && a.$className.split(".").getLast();
			var b = "CHOOSE_STYLE_" + d;
			if (!W.Data.dataMap.HELP_IDS._data[b]) {
				b = undefined
			}
			this._createAndOpenWDialog("_chooseStyle", "wixapps.integration.components.panels.ProxyStylePanel", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function(e) {
				if (!Browser.safari) {
					e.setEditedComponent(a)
				} else {
					setTimeout(function() {
						e.setEditedComponent(a)
					}, 120)
				}
			}, {
				width: 300,
				top: c.top,
				left: c.left,
				position: Constants.DialogWindow.POSITIONS.SIDE,
				level: 1,
				allowScroll: true,
				showToolbar: true,
				semiModal: true,
				allowDrag: true,
				buttonSet: this.DialogButtonSet.OK_CANCEL,
				title: W.Resources.get("EDITOR_LANGUAGE", "CHOOSE_STYLE_TITLE"),
				description: W.Resources.get("EDITOR_LANGUAGE", "CHOOSE_STYLE_DESCRIPTION"),
				helplet: b
			}, "#STYLES", true, null, false, false, true)
		},
		openTextStyleSelector: function(a, c) {
			var d = a && a.$className && a.$className.split(".").getLast();
			var b = "CHOOSE_STYLE_" + d;
			if (!W.Data.dataMap.HELP_IDS._data[b]) {
				b = undefined
			}
			this._createAndOpenWDialog("_chooseStyle", "wixapps.integration.components.panels.ChooseTextStylePanel", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function(e) {
				if (!Browser.safari) {
					e.setEditedComponent(a)
				} else {
					setTimeout(function() {
						e.setEditedComponent(a)
					}, 120)
				}
			}, {
				width: 300,
				top: c.top,
				left: c.left,
				position: Constants.DialogWindow.POSITIONS.SIDE,
				level: 1,
				allowScroll: true,
				showToolbar: true,
				semiModal: true,
				allowDrag: true,
				buttonSet: this.DialogButtonSet.OK_CANCEL,
				title: W.Resources.get("EDITOR_LANGUAGE", "CHOOSE_STYLE_TITLE"),
				description: W.Resources.get("EDITOR_LANGUAGE", "CHOOSE_STYLE_DESCRIPTION"),
				helplet: b
			}, "#STYLES", true, {
				currentStyle: c.currentStyle
			}, false, false, true)
		},
		openSpacerPropertiesDialog: function(a, b, c) {
			this._createAndOpenWDialog("_chooseStyle", "wixapps.integration.components.panels.SpacerPropertiesDialog", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function(d) {
				d.setEditedProxy(a, b)
			}, {
				width: 300,
				top: c.top,
				left: c.left,
				position: Constants.DialogWindow.POSITIONS.SIDE,
				level: 1,
				allowScroll: true,
				showToolbar: true,
				semiModal: true,
				allowDrag: true,
				buttonSet: this.DialogButtonSet.OK_CANCEL,
				title: W.Resources.get("EDITOR_LANGUAGE", "CHOOSE_STYLE_TITLE"),
				description: W.Resources.get("EDITOR_LANGUAGE", "CHOOSE_STYLE_DESCRIPTION"),
				helplet: null
			}, undefined, true, {
				currentStyle: c.currentStyle
			}, false, false, true)
		},
		openWixAppsSiteMustBeSaved: function() {
			this._createFloatingDialog("_mustSaveBeforeEditingWixAppsData", "wixapps.integration.components.editor.SaveBeforeDataEditingDialog", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function() {}, {
				width: 700,
				minHeight: 150,
				position: Constants.DialogWindow.POSITIONS.TOP,
				allowScroll: true,
				allowDrag: false,
				buttonSet: this.DialogButtonSet.NONE
			}, null, true, null, false, true)
		}
	}
});
W.Experiments.registerExperimentManager("AudioPlayer", "New", {
	name: "experiments.wysiwyg.editor.managers.WEditorManagerAudioPlayerNew",
	Class: {
		Extends: "wysiwyg.editor.managers.WEditorManager",
		_siteLoadedExtra: function(a) {
			this.addDataPanel("AudioPlayer", "wysiwyg.viewer.components.AudioPlayer", {
				logic: "wysiwyg.editor.components.panels.AudioPlayerPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.parent(a);
			this._originalSiteLoadedExtra(a)
		},
		_originalSiteLoadedExtra: function(a) {
			this.addDataPanel("Menu", "wysiwyg.viewer.components.menus.DropDownMenu", {
				logic: "wysiwyg.editor.components.panels.HorizontalMenuPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("Document", "wysiwyg.viewer.components.HorizontalMenu", {
				logic: "wysiwyg.editor.components.panels.HorizontalMenuPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("Image", "wysiwyg.viewer.components.WPhoto", {
				logic: "wysiwyg.editor.components.panels.WPhotoMenuPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("ImageList", "mobile.core.components.PhotoGalleryGrid", {
				logic: "wysiwyg.editor.components.panels.WGalleryPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("Image", "wysiwyg.viewer.components.ClipArt", {
				logic: "wysiwyg.editor.components.panels.ClipArtMenuPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("TwitterTweet", "wysiwyg.viewer.components.WTwitterTweet", {
				logic: "wysiwyg.editor.components.panels.TwitterTweetPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("TwitterFollow", "wysiwyg.viewer.components.WTwitterFollow", {
				logic: "wysiwyg.editor.components.panels.TwitterFollowPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("TwitterFollow", "wysiwyg.viewer.components.TwitterFeed", {
				logic: "wysiwyg.editor.components.panels.TwitterFeedPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.WFacebookLike", {
				logic: "wysiwyg.editor.components.panels.FacebookLikePanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.WFacebookComment", {
				logic: "wysiwyg.editor.components.panels.FacebookCommentPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.WGooglePlusOne", {
				logic: "wysiwyg.editor.components.panels.GooglePlusOnePanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("PayPalButton", "wysiwyg.viewer.components.PayPalButton", {
				logic: "wysiwyg.editor.components.panels.PayPalButtonPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("GeoMap", "wysiwyg.viewer.components.GoogleMap", {
				logic: "wysiwyg.editor.components.panels.GoogleMapPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("HtmlComponent", "wysiwyg.viewer.components.HtmlComponent", {
				logic: "wysiwyg.editor.components.panels.HtmlComponentPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("EbayItemsBySeller", "wysiwyg.viewer.components.EbayItemsBySeller", {
				logic: "wysiwyg.editor.components.panels.EbayItemsBySellerPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("ContactForm", "wysiwyg.viewer.components.ContactForm", {
				logic: "wysiwyg.editor.components.panels.ContactFormPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("FlashComponent", "wysiwyg.viewer.components.FlashComponent", {
				logic: "wysiwyg.editor.components.panels.FlashComponentPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("Video", "wysiwyg.viewer.components.Video", {
				logic: "wysiwyg.editor.components.panels.VideoPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("ImageList", "wysiwyg.viewer.components.PaginatedGridGallery", {
				logic: "wysiwyg.editor.components.panels.PaginatedGridGalleryPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("SiteButton", "wysiwyg.viewer.components.AdminLoginButton", {
				logic: "wysiwyg.editor.components.panels.AdminLoginButtonPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("ImageList", "wysiwyg.viewer.components.MatrixGallery", {
				logic: "wysiwyg.editor.components.panels.MatrixGalleryPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("ImageList", "wysiwyg.viewer.components.LinkBar", {
				logic: "wysiwyg.editor.components.panels.LinkBarPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("ImageList", "wysiwyg.viewer.components.SlideShowGallery", {
				logic: "wysiwyg.editor.components.panels.SlideShowGalleryPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("ImageList", "wysiwyg.viewer.components.SliderGallery", {
				logic: "wysiwyg.editor.components.panels.SliderGalleryPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("SiteButton", "wysiwyg.viewer.components.SiteButton", {
				logic: "wysiwyg.editor.components.panels.ButtonPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("FlickrBadgeWidget", "wysiwyg.viewer.components.FlickrBadgeWidget", {
				logic: "wysiwyg.editor.components.panels.FlickrBadgeWidgetPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("SoundCloudWidget", "wysiwyg.viewer.components.SoundCloudWidget", {
				logic: "wysiwyg.editor.components.panels.SoundCloudWidgetPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "mobile.core.components.Container", {
				logic: "wysiwyg.editor.components.panels.ContainerPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.ScreenWidthContainer", {
				logic: "wysiwyg.editor.components.panels.ContainerPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.HeaderContainer", {
				logic: "wysiwyg.editor.components.panels.ContainerPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.FooterContainer", {
				logic: "wysiwyg.editor.components.panels.ContainerPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.PagesContainer", {
				logic: "wysiwyg.editor.components.panels.PagesContainerPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.editor.managers.wedit.MultiSelectProxy", {
				logic: "wysiwyg.editor.components.panels.MultiSelectProxyPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.VerticalLine", {
				logic: "wysiwyg.editor.components.panels.LinesPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("", "wysiwyg.viewer.components.FiveGridLine", {
				logic: "wysiwyg.editor.components.panels.LinesPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			this.addDataPanel("RichText", "wysiwyg.viewer.components.WRichText", {
				logic: "wysiwyg.editor.components.panels.WRichTextPanel",
				skin: "wysiwyg.editor.skins.panels.base.AutoPanelSkin"
			});
			W.Preview.getPreviewManagers().Data.getDataByQuery(a.get("mainPage"), function(b) {
				this.setEditingScope(b.get("id"))
			}.bind(this));
			W.Data.getDataByQuery("#PAGE_TRANSITIONS", this._processTransitions);
			W.Data.getDataByQueryList(["#PAGE_TYPES", "#SKINS"], this._processTemplatePagesData);
			this._commandRegistrar.setKeyboardEvents();
			this._editorUI.createComponentPart("pagesPanel", true);
			this._registerPreviewCommands();
			W.Preview.getPreviewManagers().Viewer.addEvent("pageTransitionStarted", this._onPageTransitionStarted);
			W.Preview.getPreviewManagers().Viewer.addEvent("pageTransitionEnded", this._onPageTransitionEnded);
			this.fireEvent(this.EDITOR_READY);
			LOG.reportEvent(wixEvents.EDITOR_READY)
		}
	}
});
W.Experiments.registerExperimentManager("FPP", "New", {
	name: "experiments.wysiwyg.editor.managers.WEditorManagerFpp",
	Class: {
		Extends: "wysiwyg.editor.managers.WEditorManager",
		_setEditorWiring: function() {
			var b = $("editorUI");
			if (!b.getLogic || !b.getLogic().isReady()) {
				var a = function() {
						b.removeEvent(Constants.ComponentEvents.READY, a);
						this._setEditorWiring()
					}.bind(this);
				b.addEvent(Constants.ComponentEvents.READY, a);
				return
			}
			this._editorUI = b.getLogic();
			this._editorComponents = {
				flashUpdater: $("flashUpdater"),
				colorPickerLayer: $("pickerLayer"),
				pickerLayer: $("pickerLayer"),
				floatingPanel: this._editorUI.getFloatingPanelComp(),
				propertyPanel: this._editorUI.getPropertyPanelComp(),
				editingFrame: this._editorUI.getComponentEditBox(),
				containerHighlight: this._editorUI.getContainerHighLight(),
				parentContainerHighlight: this._editorUI.getParentContainerHighLight && this._editorUI.getParentContainerHighLight()
			};
			this._editorComponents.editingFrame.addEvent("componentEditBoxMoved", function() {
				this.resetNumOfNewComponentsWithoutComponentMovement()
			}.bind(this));
			W.Data.getDataByQuery("#COMPONENT_TYPES", this._onComponentData.bind(this));
			if (!Browser.safari) {
				this._createFlash()
			}
		},
		handleComponentClicked: function(a, b) {
			if (!a || a === this._editedComponent) {
				this.clearSelectedComponent()
			} else {
				if (!b.control && !b.event.metaKey) {
					this.clearSelectedComponent();
					this.setSelectedComp(a, true, b)
				} else {
					if (a.isMultiSelectable() && this._editedComponent && this._editedComponent.isMultiSelectable()) {
						if (!W.Utils.getIsSibling(a.getViewNode(), this._editedComponent.getViewNode())) {
							return
						}
						var d = a;
						var c;
						this.hideFloatingPanel();
						if (this._editedComponent.isMultiSelect) {
							d = this._editedComponent;
							c = this._editedComponent.getSelectedComps();
							if (c.contains(a)) {
								c.erase(a)
							} else {
								c.push(a)
							}
							if (c.length == 1) {
								d = c[0]
							} else {
								d.setSelectedComps(c)
							}
							this.setSelectedComp(d, false, b);
							this.openComponentPropertyPanels(b.page, true, false)
						} else {
							this.setSelectedComps([this._editedComponent, a], b);
							this.openComponentPropertyPanels(b.page, true, false)
						}
					}
				}
			}
		},
		setSelectedComp: function(c, b, d) {
			var a = this.getComponentScope(c);
			if (this._editMode != a) {
				W.Commands.executeCommand("WEditorCommands.WSetEditMode", {
					editMode: this.EDIT_MODE[a]
				});
				this.setSelectedComp(c, b, d);
				return
			}
			this._editedComponent = c;
			this._commandRegistrar.enableEditCommands(true);
			this._editorComponents.editingFrame.editComponent(b, d);
			W.Commands.executeCommand("WEditorCommands.SelectedComponentChange", {
				comp: c
			})
		},
		openComponentPropertyPanels: function(e, b, a) {
			var d = this._editorComponents.propertyPanel;
			var c = this._editorComponents.floatingPanel;
			b = (typeof b === "undefined") ? true : b;
			if (d && c) {
				d.setEditedComponent();
				c.setEditedComponent(e);
				if (b) {
					this._editorUI.showFloatingPropertyPanel(e)
				}
				if (a) {
					this._editorUI.showPropertyPanel()
				}
			}
		},
		moveCurrentComponentToOtherScope: function(e) {
			if (!this._editedComponent.canMoveToOtherScope()) {
				return
			}
			var c = W.Editor.getSelectedComp().getParentComponent();
			var a;
			if (c) {
				a = c.getComponentId() || null
			}
			var f = this._editMode == this.EDIT_MODE.CURRENT_PAGE ? this.EDIT_MODE.MASTER_PAGE : this.EDIT_MODE.CURRENT_PAGE;
			var d = this.getScopeNode(f);
			var b = W.Preview.getGlobalRefNodePositionInEditor(this._editedComponent);
			this._editorComponents.editingFrame.removeEditedComponentFromContainer();
			var h = this._editorComponents.editingFrame.getContainersGeometry(d, f == this.EDIT_MODE.MASTER_PAGE);
			var g = this._editorComponents.editingFrame.getEditedComponentContainerInPosition(b.x, b.y, h);
			this._editorComponents.editingFrame.addEditedComponentToContainer(g ? g.htmlNode : d, b, null, e);
			this._editorComponents.editingFrame._updateAnchorGuides();
			if (f == this.EDIT_MODE.MASTER_PAGE) {
				LOG.reportEvent(wixEvents.SHOW_IN_ALL_PAGES_SELECTED, {
					c1: this._editedComponent.className
				})
			}
			this._editedComponent.saveCurrentCoordinates();
			this._editedComponent.saveCurrentDimensions();
			W.UndoRedoManager._endTransaction(null)
		},
		clearSelectedComponent: function() {
			this._editedComponent = null;
			this._editorComponents.editingFrame.exitEditMode();
			this.hidePropertyPanel();
			this.hideFloatingPanel();
			this._commandRegistrar.enableEditCommands(false)
		},
		hideFloatingPanel: function() {
			if (this._editorComponents.floatingPanel) {
				this._editorComponents.floatingPanel.hidePanel()
			}
		},
		hidePropertyPanel: function() {
			if (this._editorComponents.propertyPanel) {
				this._editorComponents.propertyPanel.exitEditMode()
			}
		},
		getParentContainerHighLight: function() {
			return this._editorComponents.parentContainerHighlight
		},
		getPropertyPanel: function() {
			return this._editorComponents && this._editorComponents.propertyPanel || null
		},
		getComponentMetaData: function(b, a) {
			return b && b.EDITOR_META_DATA
		}
	}
});
W.Experiments.registerExperimentManager("MasterPage", "New", {
	name: "experiments.wysiwyg.editor.managers.WEditorManagerMasterPageNew",
	Class: {
		Extends: "wysiwyg.editor.managers.WEditorManager",
		_setEditorWiring: function() {
			var b = $("editorUI");
			if (!b.getLogic || !b.getLogic().isReady()) {
				var a = function() {
						b.removeEvent(Constants.ComponentEvents.READY, a);
						this._setEditorWiring()
					}.bind(this);
				b.addEvent(Constants.ComponentEvents.READY, a);
				return
			}
			this._editorUI = b.getLogic();
			this._editorUI.createComponentPart("componentPanel", true, null, function(d) {
				this._editorComponents.componentPanel = d;
				d.setX(92);
				d.setY(65)
			}.bind(this));
			W.Data.getDataByQuery("#COMPONENT_TYPES", this._onComponentData.bind(this));
			var c = {};
			this._editorComponents = c;
			c.flashUpdater = $("flashUpdater");
			c.colorPickerLayer = $("pickerLayer");
			c.pickerLayer = $("pickerLayer");
			c.editingFrame = this._editorUI.getComponentEditBox();
			this._editorComponents.editingFrame.addEvent("componentEditBoxMoved", function() {
				this.resetNumOfNewComponentsWithoutComponentMovement()
			}.bind(this));
			c.containerHighlight = this._editorUI.getContainerHighLight();
			c.parentContainerHighlight = this._editorUI.getParentContainerHighLight();
			if (!Browser.safari) {
				this._createFlash()
			}
		},
		highlightParentContainer: function(a) {
			this._editorComponents.parentContainerHighlight.highlightComponent(a)
		},
		doDeleteSelectedComponent: function() {
			if (!this._editedComponent.isDeleteableRecurse()) {
				return
			}
			var a = this._editedComponent.getParentComponent();
			this._editedComponent.dispose();
			W.Layout.reportDeleteComponent(a);
			this.clearSelectedComponent()
		}
	}
});
W.Experiments.registerExperimentManager("PanelsData", "New", {
	name: "experiments.wysiwyg.editor.managers.WEditorManager",
	Class: {
		Extends: "wysiwyg.editor.managers.WEditorManager",
		Binds: ["_processTemplatePagesData", "_onPageTransitionStarted", "_onPageTransitionEnded", "_addDataPanels"],
		_siteLoadedExtra: function(a) {
			W.Data.getDataByQuery("#PROPERTY_PANELS", this._addDataPanels);
			W.Preview.getPreviewManagers().Data.getDataByQuery(a.get("mainPage"), function(b) {
				this.setEditingScope(b.get("id"))
			}.bind(this));
			W.Data.getDataByQuery("#PAGE_TRANSITIONS", this._processTransitions);
			W.Data.getDataByQueryList(["#PAGE_TYPES", "#SKINS"], this._processTemplatePagesData);
			this._commandRegistrar.setKeyboardEvents();
			this._editorUI.createComponentPart("pagesPanel", true);
			this._registerPreviewCommands();
			W.Preview.getPreviewManagers().Viewer.addEvent("pageTransitionStarted", this._onPageTransitionStarted);
			W.Preview.getPreviewManagers().Viewer.addEvent("pageTransitionEnded", this._onPageTransitionEnded);
			this.fireEvent(this.EDITOR_READY);
			LOG.reportEvent(wixEvents.EDITOR_READY)
		},
		_addDataPanels: function(b) {
			var a = b.get("items");
			a.forEach(function(c) {
				this.addDataPanel(c.dataType, c.compType, {
					logic: c.panelCompType,
					skin: c.panelSkinType
				})
			}, this)
		}
	}
});
W.Experiments.registerExperimentClass("SocialPanel", "New", {
	name: "experiments.wysiwyg.editor.managers.WEditorManagerSocialPanel",
	Class: {
		Extends: "wysiwyg.editor.managers.WEditorManager",
		_setMetaSiteData: function() {
			if (window.editorModel && window.editorModel.metaSiteData) {
				var c = window.editorModel.metaSiteData;
				var b = {
					type: "SiteSettings",
					siteName: c.siteName,
					siteTitleSEO: c.title,
					thumbnail: c.thumbnail,
					favicon: c.favicon,
					allowSEFindSite: c.indexable,
					suppressTrackingCookies: c.suppressTrackingCookies
				};
				if (c.metaTags) {
					for (var d = 0;
					d < c.metaTags.length;
					d++) {
						var a = c.metaTags[d];
						if (a.name == "keywords") {
							b.keywordsSEO = a.value
						} else {
							if (a.name == "description") {
								b.siteDescriptionSEO = a.value
							} else {
								if (a.name == "fb_admins_meta_tag") {
									b.fbAdminsUserId = a.value
								}
							}
						}
					}
				}
				W.Data.addDataItem("SITE_SETTINGS", b)
			} else {
				W.Data.addDataItem("SITE_SETTINGS", {
					type: "SiteSettings"
				})
			}
		}
	}
});
W.Experiments.registerExperimentManager("TPA", "New", {
	name: "experiments.wysiwyg.editor.managers.WEditorManagerTPA",
	Class: {
		Extends: "wysiwyg.editor.managers.WEditorManager",
		_gotoSitePage: function(b) {
			this._sitePageChangeHandler(null, b, true);
			var a = W.Preview.getPreviewManagers();
			var d = a.Viewer.getSiteNode();
			var c = d.getElement("#" + b);
			if (c.getLogic().isThirdPartyApplicationPage()) {
				c.getLogic().addEvent("pageContentReady", function(e) {
					var f = c.getLogic().getThirdPartyApplicationComponent();
					W.Editor.setSelectedComp(f)
				}.bind(this))
			}
		}
	}
});
W.Experiments.registerExperimentManager("WalkMe", "New", {
	name: "experiments.wysiwyg.editor.managers.WEditorManagerWalkMeNew",
	Class: {
		Extends: "wysiwyg.editor.managers.WEditorManager",
		initialize: function() {
			this._commandRegistrar = new(W.Classes.get("wysiwyg.editor.managers.WCommandRegistrar"))();
			this._editorStatusAPI = new(W.Classes.get("wysiwyg.editor.managers.WEditorStatusAPI"))();
			this.parent();
			this._editMode = this.EDIT_MODE.CURRENT_PAGE;
			this._editorUI = null;
			this._keysEnabled = true;
			this._editorStatusAPI.setSaveInProcess(false);
			this._curGridScale = 1;
			this.resetNumOfNewComponentsWithoutComponentMovement();
			if (window.wixEditorLangauge == "en") {
				this._walkMe = new(W.Classes.get("wysiwyg.editor.managers.wedit.WalkMe"))()
			}
		},
		getWalkMe: function() {
			return this._walkMe
		}
	}
});
W.Experiments.registerExperimentManager("Zoom", "New", {
	name: "experiments.wysiwyg.editor.managers.WEditorManager",
	Class: {
		Extends: "wysiwyg.editor.managers.WEditorManager",
		_registerPreviewCommands: function() {
			var a = W.Preview.getPreviewManagers().Commands;
			a.registerCommandAndListener("linkableComponent.navigateSameWindow", this, this._onPreviewLink, null);
			a.registerCommandAndListener("socialWidget.interact", this, this._onSocialWidgetInteraction, null);
			a.registerCommand("WPreviewCommands.WEditModeChanged");
			var b = a.registerCommand("EditorCommands.SiteLoaded");
			b.execute()
		}
	}
});
W.Experiments.registerNewExperimentClass("TPA", "New", {
	name: "wysiwyg.editor.managers.serverfacade.WServerApiUrlsForApps",
	Class: {
		Extends: "wysiwyg.editor.managers.serverfacade.WServerApiUrls",
		initialize: function() {
			this._w_constants = Object.merge(this._w_constants, {
				APPS_PROVISION_URL: "/appStore/provision/{0}",
				APPS_PRE_SAVE_PROVISION_URL: "/appStore/pre-save-provision/{0}",
				APPS_COMPLETE_PROVISION_URL: "/appStore/post-save-complete-provision",
				APPS_LOAD_DEFINITIONS: "/appStore/{0}",
				APP_DEFINITION_ID_QUERY_PARAM_NAME: "appDefinitionId"
			})
		},
		getProvisionAppUrl: function(a) {
			return this._getUrlWithQueryParams(this._w_constants.APPS_PROVISION_URL, [a])
		},
		getPreSaveProvisionAppUrl: function(a) {
			return this._getUrl(this._w_constants.APPS_PRE_SAVE_PROVISION_URL, [a])
		},
		getCompleteProvisionUrl: function() {
			return this._getUrlWithQueryParams(this._w_constants.APPS_COMPLETE_PROVISION_URL)
		},
		getLoadAppDefinitionsUrl: function(b) {
			var a = this._getUrl(this._w_constants.APPS_LOAD_DEFINITIONS, [b]);
			a = this._addAppDefinitionIdParam(a);
			return a
		},
		_getUrlBasePart: function() {
			var a = W.Config.getServiceTopologyProperty("appStoreUrl");
			if (a) {
				return this._cleanUpUrlEnding(a)
			} else {
				return undefined
			}
		},
		_addAppDefinitionIdParam: function(b) {
			var a = W.Utils.getQueryParam("appDefinitionId");
			if (!a) {
				return b
			}
			return this._addQueryParamToUrl(b, this._w_constants.APP_DEFINITION_ID_QUERY_PARAM_NAME, a)
		}
	}
});
W.Experiments.registerNewExperimentClass("SM", "New", {
	name: "wysiwyg.editor.managers.serverfacade.WServerApiUrlsForSiteMembers",
	Class: {
		Extends: "wysiwyg.editor.managers.serverfacade.WServerApiUrls",
		initialize: function() {
			this._w_constants = Object.merge(this._w_constants, {
				SM_PROVISION_URL: "/api/lifecycle/provision/{0}",
				SM_PRE_SAVE_PROVISION_URL: "/api/lifecycle/beforeMetaSiteSaveProvision",
				SM_COMPLETE_PROVISION_URL: "/api/lifecycle/afterMetaSiteSaveProvision/{0}/{1}",
				ACCEPT_JSONP_QUERY_PARAM_KEY: "accept",
				ACCEPT_JSONP_QUERY_PARAM_VALUE: "jsonp"
			})
		},
		getProvisionUrl: function() {
			var b = W.Config.getEditorModelProperty("metaSiteId");
			var a = this._getUrl(this._w_constants.SM_PROVISION_URL, [b]);
			a = this._addAcceptJSONPParam(a);
			return a
		},
		getPreSaveProvisionUrl: function() {
			var a = this._getUrl(this._w_constants.SM_PRE_SAVE_PROVISION_URL);
			a = this._addAcceptJSONPParam(a);
			return a
		},
		getCompleteProvisionUrl: function(c) {
			var b = W.Config.getEditorModelProperty("metaSiteId");
			var a = this._getUrl(this._w_constants.SM_COMPLETE_PROVISION_URL, [b, c]);
			a = this._addAcceptJSONPParam(a);
			return a
		},
		_getUrlBasePart: function() {
			var a = W.Config.getServiceTopologyProperty("siteMembersUrl");
			if (a) {
				return this._cleanUpUrlEnding(a)
			} else {
				return undefined
			}
		},
		_addAcceptJSONPParam: function(a) {
			return this._addQueryParamToUrl(a, this._w_constants.ACCEPT_JSONP_QUERY_PARAM_KEY, this._w_constants.ACCEPT_JSONP_QUERY_PARAM_VALUE)
		}
	}
});
W.Experiments.registerExperimentClass("SM", "New", {
	name: "experiments.wysiwyg.editor.managers.serverfacade.WServerFacadeSM",
	Class: {
		Extends: "wysiwyg.editor.managers.serverfacade.WServerFacade",
		_initialize2: function() {
			var a = W.Classes.get("wysiwyg.editor.managers.serverfacade.WServerApiUrlsForSiteMembers");
			this._smUrlBuilder = new a()
		},
		smProvision: function(e, c) {
			var a = this._smUrlBuilder.getProvisionUrl();
			var b = this._wrapCompleteCallbacks(e, c);
			var d = {};
			this._restClient.jsonp(a, d, b, true)
		},
		smProvisionAppBeforeMetasiteSave: function(e, c) {
			var a = this._smUrlBuilder.getPreSaveProvisionUrl();
			var b = this._wrapCompleteCallbacks(e, c);
			var d = {};
			this._restClient.jsonp(a, d, b, true)
		},
		smCompleteProvisionAfterMetasiteSave: function(b, e, d) {
			var a = this._smUrlBuilder.getCompleteProvisionUrl(b);
			var c = this._wrapCompleteCallbacks(e, d);
			this._restClient.jsonp(a, {}, c, true)
		}
	}
});
W.Experiments.registerExperimentClass("SocialPanel", "New", {
	name: "experiments.wysiwyg.editor.managers.serverfacade.WServerFacadeSocialPanel",
	Class: {
		Extends: "wysiwyg.editor.managers.serverfacade.WServerFacade",
		_getMetaSiteDto: function() {
			var b = W.Data.getDataByQuery("#SITE_SETTINGS");
			var c = {};
			if (this._isValidItem(b.get("thumbnail"))) {
				c.thumbnail = b.get("thumbnail")
			}
			if (this._isValidItem(b.get("favicon"))) {
				c.favicon = b.get("favicon")
			}
			if (this._isValidItem(b.get("siteTitleSEO"))) {
				var a = b.get("siteTitleSEO").length === 0;
				a ? c.title = null : c.title = b.get("siteTitleSEO")
			}
			if (this._isValidItem(b.get("allowSEFindSite"))) {
				c.indexable = b.get("allowSEFindSite")
			}
			if (this._isValidItem(b.get("suppressTrackingCookies"))) {
				c.suppressTrackingCookies = b.get("suppressTrackingCookies")
			}
			if (this._isValidItem(b.get("fbAdminsUserId"))) {
				c.metaTags = c.metaTags || [];
				c.metaTags.push({
					name: "fb_admins_meta_tag",
					value: b.get("fbAdminsUserId")
				})
			}
			if (this._isValidItem(b.get("keywordsSEO"))) {
				c.metaTags = c.metaTags || [];
				c.metaTags.push({
					name: "keywords",
					value: b.get("keywordsSEO")
				})
			}
			if (this._isValidItem(b.get("siteDescriptionSEO"))) {
				c.metaTags = c.metaTags || [];
				c.metaTags.push({
					name: "description",
					value: b.get("siteDescriptionSEO")
				})
			}
			return c
		}
	}
});
W.Experiments.registerExperimentClass("TPA", "New", {
	name: "experiments.wysiwyg.editor.managers.serverfacade.WServerFacadeTPA",
	Class: {
		Extends: "wysiwyg.editor.managers.serverfacade.WServerFacade",
		initialize: function() {
			var a = W.Classes.get("wysiwyg.editor.managers.serverfacade.WSiteSerializer");
			var c = W.Classes.get("wysiwyg.editor.managers.serverfacade.WServerApiUrls");
			var b = W.Classes.get("wysiwyg.editor.managers.serverfacade.WServerApiUrlsForApps");
			this.parent();
			this._siteSerializer = new a();
			this._urlBuilder = new c();
			this._urlBuilderForApps = new b()
		},
		provisionApp: function(a, e, d) {
			var b = this._urlBuilderForApps.getProvisionAppUrl(a);
			var c = this._wrapSuccessErrorCallbacks(e, d);
			this._restClient.post(b, {}, c)
		},
		provisionAppBeforeMetasiteSave: function(a, f, d) {
			var b = this._urlBuilderForApps.getPreSaveProvisionAppUrl(a);
			var c = this._wrapSuccessErrorCallbacks(f, d);
			var e = {};
			this._restClient.post(b, e, c)
		},
		completeProvisionAfterMetasiteSave: function(d, e, c) {
			var a = this._urlBuilderForApps.getCompleteProvisionUrl();
			var b = this._wrapSuccessErrorCallbacks(e, c);
			this._restClient.post(a, d, b)
		},
		loadAppDefinition: function(b, e, d) {
			var a = this._urlBuilderForApps.getLoadAppDefinitionsUrl(b);
			if (W.Utils.isValidUrl(a)) {
				var c = this._wrapSuccessErrorCallbacks(e, d);
				this._restClient.get(a, null, c)
			} else {
				LOG.reportError(wixErrors.SERVER_INVALID_SERVICE_URL, "WServerFacade", "loadAppDefinition", a);
				e({})
			}
		}
	}
});
W.Experiments.registerNewExperimentClass("WalkMe", "New", {
	name: "wysiwyg.editor.managers.wedit.WalkMe",
	Class: {
		initialize: function() {
			this._addWalkThruScript();
			window.walkme_ready = this._handleWalkMeReady;
			window.walkme_event = this._handleWalkMeEvent;
			window.walkme_player_event = this._handleWalkMePlayerEvent
		},
		_addWalkThruScript: function() {
			var a = new Element("script");
			a.setAttribute("type", "text/javascript");
			a.setAttribute("src", "http://cdn.walkme.com/users/2677/walkme_2677.js");
			document.head.appendChild(a)
		},
		_handleWalkMeReady: function() {
			LOG.reportEvent(wixEvents.WALK_ME_LOADED)
		},
		_handleWalkMeEvent: function(a) {
			if (a.Type == "UserStoppedWalkthruAfterStop") {
				LOG.reportEvent(wixEvents.WALK_ME_CLOSED, {
					g1: a.WalkthruId
				})
			}
			if (a.WalkthruId == 6102 && (a.Type == "UserStoppedWalkthruAfterStop" || a.Type == "WalkthruCompleted")) {
				WalkMeAPI.startWalkthruById(6700)
			}
			if (a.WalkthruId == 6037 && a.Type == "UserStoppedWalkthruAfterStop") {
				WalkMeAPI.startWalkthruById(6700)
			}
		},
		_handleWalkMePlayerEvent: function(a) {
			if (a.Type == "WalkthruSelected") {
				LOG.reportEvent(wixEvents.WALK_ME_STEP_BEGUN, {
					g1: a.WalkthruId
				})
			}
		},
		showFirstTimeWelcomeScreen: function() {
			try {
				LOG.reportEvent(wixEvents.FIRST_TIME_WALK_ME_PRESENTED);
				WalkMeAPI.startWalkthruById(6103)
			} catch (a) {
				LOG.reportError(wixErrors.WALK_ME_FAILED_TO_LOAD)
			}
		}
	}
});
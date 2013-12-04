Constants.WEditManager = {
	SITE_TYPE_FACEBOOK: "HtmlFacebook",
	SITE_TYPE_WEB: "HtmlWeb",
	SITE_TYPE_MOBILE: "HtmlMobile",
	UPGRADE_SRC: {
		PUBLISH_WEBSITE_SUCCESS_DIALOG: "PUBLISH_WEBSITE_SUCCESS_DIALOG",
		PUBLISH_FB_SITE_SUCCESS_DIALOG: "PUBLISH_FB_SITE_SUCCESS_DIALOG",
		SITE_NAME_PANEL: "SITE_NAME_PANEL",
		STATISTICS_PANEL: "STATISTICS_PANEL",
		TOP_PANEL: "TOP_PANEL",
		FAVICON_AND_THUMBNAIL_PANEL: "FAVICON_AND_THUMBNAIL_PANEL"
	},
	DEFAULT_GRID_SCALE: 5
};
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WEditorManager",
	Class: {
		Extends: "mobile.editor.managers.EditorManagerBase",
		Static: {
			EDIT_MODE: {
				CURRENT_PAGE: "CURRENT_PAGE",
				MASTER_PAGE: "MASTER_PAGE",
				PREVIEW: "PREVIEW"
			},
			EDITOR_READY: "editorready",
			Z_INDEX_CHANGE_TYPES: {
				BACK: "BACK",
				FORWARD: "FORWARD",
				TOP: "TOP",
				BOTTOM: "BOTTOM"
			}
		},
		Binds: ["_processTemplatePagesData", "_onPageTransitionStarted", "_onPageTransitionEnded"],
		initialize: function() {
			this._commandRegistrar = new(W.Classes.get("wysiwyg.editor.managers.WCommandRegistrar"))();
			this._editorStatusAPI = new(W.Classes.get("wysiwyg.editor.managers.WEditorStatusAPI"))();
			this.parent();
			this._editMode = this.EDIT_MODE.CURRENT_PAGE;
			this._editorUI = null;
			this._keysEnabled = true;
			this._editorStatusAPI.setSaveInProcess(false);
			this._curGridScale = 1;
			this.resetNumOfNewComponentsWithoutComponentMovement()
		},
		getNumOfNewComponentsWithoutComponentMovement: function() {
			return this._numOfNewComponentsWithoutComponentMovement
		},
		resetNumOfNewComponentsWithoutComponentMovement: function() {
			this._numOfNewComponentsWithoutComponentMovement = 0
		},
		incrementNumOfNewComponentsWithoutComponentMovement: function() {
			this._numOfNewComponentsWithoutComponentMovement++
		},
		getEditorStatusAPI: function() {
			return this._editorStatusAPI
		},
		getEditMode: function() {
			return this._editMode
		},
		getStateBarSize: function() {
			return this._editorUI.getStateBarSize()
		},
		getEditedComponent: function() {
			return this._editedComponent
		},
		getSelectedComp: function() {
			return this.getEditedComponent()
		},
		getPropertyPanel: function() {
			return this._editorComponents && this._editorComponents.componentPanel || null
		},
		getFloatingPanel: function() {
			return this._editorComponents && this._editorComponents.floatingPanel || null
		},
		getComponentEditBox: function() {
			return this._editorComponents && this._editorComponents.editingFrame || null
		},
		setEditMode: function(g) {
			if (!Object.contains(this.EDIT_MODE, g)) {
				return
			}
			var b = this._editMode;
			this._editMode = g;
			var h = W.Preview.getHtmlElement("SITE_PAGES").getLogic();
			var d = W.Preview.getPreviewManagers().Commands;
			var e = W.Commands;
			var f = W.Preview.getPreviewManagers().Viewer;
			this.clearSelectedComponent();
			switch (g) {
			case this.EDIT_MODE.CURRENT_PAGE:
				this.setEditingScope(f.getCurrentPageId());
				this._editorUI.showEditControls();
				this._editorUI.hideEditStateBar();
				this._editorUI.showDialogLayer();
				break;
			case this.EDIT_MODE.MASTER_PAGE:
				this.setEditingScope("SITE_STRUCTURE");
				this._editorUI.showDialogLayer();
				break;
			case this.EDIT_MODE.PREVIEW:
				this._editorUI.hideEditControls();
				this._editorUI.hideDialogLayer();
				this._editorUI.showEditStateBar();
				break
			}
			h.editModeChange(g);
			var c = d.getCommand("WPreviewCommands.WEditModeChanged");
			if (!c) {
				c = d.registerCommand("WPreviewCommands.WEditModeChanged")
			}
			c.execute(g, b);
			var a = e.getCommand("WPreviewCommands.WEditModeChanged");
			if (!a) {
				a = e.registerCommand("WPreviewCommands.WEditModeChanged")
			}
			a.execute(g, b)
		},
		_siteLoadedExtra: function(a) {
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
		},
		_processTemplatePagesData: function(b) {
			var a = b["#PAGE_TYPES"].get("items");
			this._compSkinList = b["#SKINS"].get("components");
			for (var c = 0;
			c < a.length; ++c) {
				var d = a[c].serializedPageData.components;
				this._recursivelyDefineDefaultSkinForComponentList(d, this._compSkinList)
			}
		},
		getDefaultSkinForComp: function(a) {
			return this._compSkinList[a][0]
		},
		getDefaultSkinForStyle: function(a) {
			var b = W.Data.getDataByQuery("#STYLE_DEFAULT_SKIN").get("items");
			if (b[a]) {
				return b[a]
			}
			return null
		},
		_recursivelyDefineDefaultSkinForComponentList: function(d, b) {
			for (var a = 0;
			a < d.length;
			a++) {
				var c = d[a].componentType;
				if (b[c]) {
					d[a].skin = b[c][0]
				} else {
					LOG.reportError(wixErrors.NO_DEFAULT_SKIN_FOUND, "WEditManager", "_recursivelyDefineDefaultSkinForComponentList", d[a].componentType)
				}
				if (d[a].components) {
					this._recursivelyDefineDefaultSkinForComponentList(d[a].components, b)
				}
			}
		},
		_registerPreviewCommands: function() {
			var a = W.Preview.getPreviewManagers().Commands;
			a.registerCommandAndListener("linkableComponent.navigateSameWindow", this, this._onPreviewLink, null);
			a.registerCommandAndListener("socialWidget.interact", this, this._onSocialWidgetInteraction, null);
			a.registerCommandAndListener("adminLogin.submitAttempt", this, this._onAdminLoginSubmit, null);
			a.registerCommandAndListener("siteMembers.submitAttempt", this, this._onSiteMembersSubmit, null);
			a.registerCommand("WPreviewCommands.WEditModeChanged")
		},
		_onPreviewLink: function(a) {
			W.Commands.executeCommand("Tooltip.ShowTip", {
				id: "link_on_same_page_ttid"
			}, a.component)
		},
		_onSocialWidgetInteraction: function(b) {
			var a = b.component.className;
			W.Commands.executeCommand("Tooltip.ShowTip", {
				id: "Social_Widgets_Only_On_Public"
			}, b.component)
		},
		_onAdminLoginSubmit: function(a) {
			W.Commands.executeCommand("Tooltip.ShowTip", {
				id: "login_only_in_public_ttid"
			}, a.component)
		},
		_onSiteMembersSubmit: function(a) {
			W.Commands.executeCommand("Tooltip.ShowTip", {
				id: a.tooltipId
			}, a.component)
		},
		setEditingScope: function(a) {
			this._editingScope = W.Preview.getPreviewSite().$(a);
			this.clearSelectedComponent()
		},
		getEditingScope: function() {
			return this._editingScope
		},
		getScopeNode: function(a) {
			var b;
			if (a == this.EDIT_MODE.MASTER_PAGE) {
				b = "SITE_STRUCTURE"
			} else {
				b = W.Preview.getPreviewManagers().Viewer.getCurrentPageId()
			}
			return W.Preview.getPreviewSite().$(b)
		},
		_getSitePagesContainer: function() {
			return W.Preview.getPreviewManagers().Viewer.getSiteNode().getElement("#SITE_PAGES").getLogic().getInlineContentContainer()
		},
		_sitePageChangeHandlerExtra: function(a, b) {
			if (this.getEditMode() == this.EDIT_MODE.CURRENT_PAGE) {
				this.setEditingScope(a)
			}
		},
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
			if (!Browser.safari) {
				this._createFlash()
			}
		},
		getComponentScope: function(b) {
			var c = W.Preview.getPreviewManagers().Viewer.getCurrentPageNode();
			var a = b.getViewNode ? b.getViewNode() : b;
			if (c.contains(a)) {
				return this.EDIT_MODE.CURRENT_PAGE
			}
			return this.EDIT_MODE.MASTER_PAGE
		},
		handleComponentClicked: function(a, c) {
			if (a && a !== this._editedComponent) {
				var b = a;
				var e = c.control || c.event.metaKey;
				if (e && this._editedComponent && a.isMultiSelectable() && this._editedComponent.isMultiSelectable()) {
					if (W.Utils.getIsSibling(a.getViewNode(), this._editedComponent.getViewNode())) {
						var d;
						if (this._editedComponent.isMultiSelect) {
							b = this._editedComponent;
							d = this._editedComponent.getSelectedComps();
							if (d.contains(a)) {
								d.erase(a)
							} else {
								d.push(a)
							}
							if (d.length == 1) {
								b = d[0]
							} else {
								b.setSelectedComps(d)
							}
							this.setSelectedComp(b, false, c)
						} else {
							this.setSelectedComps([this._editedComponent, a], c)
						}
					}
				} else {
					this.setSelectedComp(b, true, c)
				}
			} else {
				this.clearSelectedComponent()
			}
		},
		setSelectedComps: function(d, b) {
			var c = W.Classes.get("wysiwyg.editor.managers.wedit.MultiSelectProxy");
			var a = new c();
			a.setSelectedComps(d);
			this.setSelectedComp(a, false, b)
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
			this._editorComponents.editingFrame.editComponent(c, b, d);
			this.openComponentPropertyPanel(c)
		},
		openComponentPropertyPanel: function(b) {
			var a = this._editorComponents.componentPanel;
			if (a) {
				a.editComponent(b);
				this._editorUI.showPropertyPanel(a, true)
			}
		},
		clearSelectedComponent: function() {
			this._editedComponent = null;
			this._editorComponents.editingFrame.exitEditMode();
			this.hidePropertyPanel();
			this._commandRegistrar.enableEditCommands(false)
		},
		hideComponentEditBox: function() {
			this._editorComponents.editingFrame.exitEditMode()
		},
		hidePropertyPanel: function() {
			if (this._editorComponents.componentPanel) {
				this._editorComponents.componentPanel.exitEditMode()
			}
		},
		highlightContainer: function(a) {
			this._editorComponents.containerHighlight.highlightComponent(a)
		},
		saveHtmlContent: function(a) {
			W.ServerFacade.saveHtmlComponentData(siteHeader.id, a, function() {}, function() {})
		},
		onComponentChanged: function(b, e) {
			var g = W.Preview.getPreviewManagers().Viewer.getCurrentPageNode().getLogic();
			var a = W.Layout.getComponentMinResizeHeight(g);
			var f = g.getHeight();
			if (e && a > f) {
				W.Commands.executeCommand("Tooltip.ShowTip", {
					id: "drag_push_footer"
				}, this._editedComponent)
			}
			if (!b) {
				a = Math.max(a, f)
			}
			g.setHeight(a);
			var d = W.Preview.getPreviewManagers().Viewer.getSiteNode().getLogic();
			var c = W.Layout.getComponentMinResizeHeight(d);
			d.setHeight(c);
			if (this._editedComponent && this._editorComponents.componentPanel) {
				this._editorComponents.componentPanel.updateCompPosSize()
			}
		},
		getAvailableTypes: function(e) {
			var c = {};
			var b = this._componentData;
			var a, f;
			var d;
			for (f in b) {
				d = b[f];
				if (d.comp === e) {
					a = d.groupType;
					break
				}
			}
			for (f in b) {
				d = b[f];
				if (d.groupType === a) {
					c[d.comp] = f
				}
			}
			return c
		},
		replaceCurrentComponent: function(d, c) {
			var f = this._componentData[c];
			var j = this._editedComponent;
			var g = f.comp;
			var i = f.skin;
			var e = "#" + j.getDataItem().get("id");
			var a = f.props;
			var n = j.getViewNode().get("id");
			var m = j.getWidth();
			var h = j.getHeight();
			var l = j.getX();
			var k = j.getY();
			var b = j.getViewNode().getParent();
			this.doDeleteSelectedComponent();
			W.CompDeserializer.createAndAddComponent(b, {
				comp: g,
				skin: i,
				htmlId: n,
				uID: e,
				props: a,
				layout: {
					x: l,
					y: k,
					width: m,
					height: h
				}
			}, true)
		},
		canDeleteSelectedComponent: function() {
			if (!this._editedComponent || !this._editedComponent.isDeleteableRecurse()) {
				return false
			}
			return (this._editMode == this.getComponentScope(this._editedComponent))
		},
		doDeleteSelectedComponent: function() {
			if (!this._editedComponent.isDeleteableRecurse()) {
				return
			}
			var a = this._editedComponent.getParentComponent();
			this._editedComponent.dispose();
			W.Layout.reportDeleteComponent(a);
			this.clearSelectedComponent();
			this.onComponentChanged(true)
		},
		moveCurrentComponentToOtherScope: function() {
			if (!this._editedComponent.canMoveToOtherScope()) {
				return
			}
			var c = W.Editor.getSelectedComp().getParentComponent();
			var a;
			if (c) {
				a = c.getComponentId() || null
			}
			var e = this._editMode == this.EDIT_MODE.CURRENT_PAGE ? this.EDIT_MODE.MASTER_PAGE : this.EDIT_MODE.CURRENT_PAGE;
			var d = this.getScopeNode(e);
			var b = W.Preview.getGlobalRefNodePositionInEditor(this._editedComponent);
			this._editorComponents.editingFrame.removeEditedComponentFromContainer();
			var g = this._editorComponents.editingFrame.getContainersGeometry(d, e == this.EDIT_MODE.MASTER_PAGE);
			var f = this._editorComponents.editingFrame.getEditedComponentContainerInPosition(b.x, b.y, g);
			this._editorComponents.editingFrame.addEditedComponentToContainer(f ? f.htmlNode : d, b);
			this._editorComponents.editingFrame._updateAnchorGuides();
			if (e == this.EDIT_MODE.MASTER_PAGE) {
				LOG.reportEvent(wixEvents.SHOW_IN_ALL_PAGES_SELECTED, {
					c1: this._editedComponent.className
				})
			}
			this._editedComponent.saveCurrentCoordinates();
			this._editedComponent.saveCurrentDimensions();
			W.UndoRedoManager._endTransaction(null)
		},
		_getNecessarySiteLoadedData: function() {
			return ["#SITE_STRUCTURE"]
		},
		_saveCurrentDocument: function() {
			this._commandRegistrar._saveCommandRegistrar._saveCurrentDocument()
		},
		_onAddComponent: function(b, a) {
			W.Commands.executeCommand("WEditorCommands.AddComponent", b)
		},
		_getNewPageNode: function(a, c) {
			var b = W.Preview.getPreviewManagers().Viewer.createElement("div", {
				comp: "mobile.core.components.Page",
				dataQuery: "#" + a,
				skin: "mobile.core.skins.InlineSkin",
				id: a,
				"class": "sitePage",
				x: 0,
				y: 0,
				width: 800,
				height: 600
			});
			this._addComponentsNodes(b, c);
			return b
		},
		addAllComponents: function() {
			var b = [];
			for (var a in this._componentData) {
				W.Commands.getCommand("WEditorCommands.AddComponent").execute(a);
				b.push(this._componentData[a].comp)
			}
			return b
		},
		addAllComponentsWithIntervals: function(e, c, a) {
			a = a || 1000;
			var f = [];
			var b = 0;
			for (var d in this._componentData) {
				b++;
				if (b < e || b > c) {
					continue
				}
				setTimeout(function() {
					W.Commands.getCommand("WEditorCommands.AddComponent").execute({
						compType: d
					});
					f.push(this._componentData[d].comp)
				}.bind(this), 1000 * (b - e))
			}
			return f
		},
		_onComponentData: function(b) {
			var d = {};
			this._componentData = d;
			var c = b && b.get("list");
			if (!c) {
				return W.Utils.debugTrace("WEditor: missing component data or data list")
			}
			for (var a = c.length - 1;
			a >= 0; --a) {
				var f = c[a];
				if (f.key) {
					var e = f.component;
					if (typeof e === "function") {
						e = e()
					}
					d[f.key] = e
				} else {
					W.Utils.debugTrace("WEditor::_onComponentData: Missing key in component data")
				}
			}
		},
		setKeysEnabled: function(a) {
			this._keysEnabled = a;
			W.InputBindings.setKeysEnabled(a)
		},
		_registerCommands: function() {
			this.parent();
			this._commandRegistrar.registerCommands()
		},
		_createDataItemsForPageComponents: function(f, d, e) {
			for (var b = 0;
			b < d.length;
			b++) {
				var a = d[b];
				if (a.data) {
					var g = this._addPreviewDataItem(f, a.data, a.dataRefs);
					a.uID = g
				}
				var c = d[b].componentType.substr(d[b].componentType.lastIndexOf("."));
				a.htmlId = W.Preview.getPreviewManagers().Utils.getUniqueId(e + c);
				if (a.components) {
					this._createDataItemsForPageComponents(f, a.components, e)
				}
			}
		},
		_processTransitions: function(c) {
			try {
				var f = W.Preview.getPreviewManagers().Viewer.getPageGroup();
				var k = f.getComponentProperty("transition");
				var h = c.get("items");
				var b = false;
				if (h && h.length) {
					for (var d = h.length - 1;
					d >= 0; --d) {
						var j = h[d];
						var a = (j.value == k);
						if (a != j.selected) {
							b = true;
							j.selected = a
						}
					}
				}
				if (b) {
					c.setData(c.getData())
				}
			} catch (g) {}
		},
		closeColorPicker: function() {
			if (this._colorPickerNode) {
				if (this._colorPickerNode.getLogic) {
					this._colorPickerNode.getLogic().removeEvents()
				} else {
					this._colorPickerNode.$destroy = true
				}
				this._colorPickerNode.dispose()
			}
		},
		getPageWidth: function() {
			return W.Preview.getPreviewManagers().Viewer.getPageGroup().getWidth()
		},
		_onPageTransitionStarted: function() {
			this.setKeysEnabled(false)
		},
		_onPageTransitionEnded: function() {
			window.scrollTo(0, 0);
			this.setKeysEnabled(true)
		},
		getGridScale: function() {
			return this._curGridScale
		},
		setGridScale: function(a) {
			this._curGridScale = a
		},
		getEditorUI: function(a) {
			return this._editorUI
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WClipBoard",
	Class: {
		Extends: Events,
		initialize: function() {
			this._currentClip = null;
			this._isReady = true
		},
		setClip: function(a) {
			var b = this.copyComponent(a);
			this._currentClip = b
		},
		duplicateComp: function(a, b) {
			var c = this.copyComponent(a);
			this.pasteFromClip(b, true, c)
		},
		copyComponent: function(a) {
			if (!a.isMultiSelect) {
				return W.CompSerializer.serializeComponent(a.getViewNode(), true)
			} else {
				var c = [];
				for (var b = 0;
				b < a.getSelectedComps().length;
				b++) {
					c.unshift(W.CompSerializer.serializeComponent(a.getSelectedComps()[b].getViewNode(), true))
				}
				return {
					isMultiSelect: true,
					comps: c
				}
			}
		},
		isReady: function() {
			return this._isReady
		},
		clone: function() {
			return new this.$class()
		},
		getClip: function() {
			return this._currentClip
		},
		paste: function(b, c, a) {
			if (a == undefined) {
				a = true
			}
			if (this._currentClip) {
				return this.pasteFromClip(b, c, this._currentClip, a)
			} else {
				return null
			}
		},
		pasteFromClip: function(c, f, d, b, e) {
			if (b == undefined) {
				b = true
			}
			if (d.isMultiSelect) {
				W.CompDeserializer.createAndAddComponents(c, d.comps, b);
				return
			}
			var a = W.CompDeserializer.createAndAddComponent(c, d, f, b, undefined, e);
			W.Editor._editorComponents.editingFrame.highlightEditingFrame();
			return a
		}
	}
});
Constants.AlignmentCommands = {
	UP: "Align Up",
	DOWN: "Align Down",
	LEFT: "Align Left",
	RIGHT: "Align Right",
	HCENTER: "Horizontal Center",
	VCENTER: "Vertical Center",
	HSIZE: "Match Size Horizontally",
	VSIZE: "Match Size Vertically",
	HDISTR: "Distribute Horizontally",
	VDISTR: "Distribute Vertically"
};
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WAlignmentTools",
	Class: {
		Extends: Events,
		initialize: function() {
			this._isReady = true
		},
		isReady: function() {
			return this._isReady
		},
		clone: function() {
			return new this.$class()
		},
		Options: {
			comps: null,
			prevPositionsAndSizes: [],
			command: null,
			isRelative: null
		},
		Funcs: {
			getXorY: null,
			setXorY: null,
			getWidthOrHeight: null,
			getMinOrMax: null,
			setWidthOrHeight: null
		},
		arrangeComponents: function(b, c, a) {
			this._init(b, c, a);
			switch (c) {
			case Constants.AlignmentCommands.LEFT:
			case Constants.AlignmentCommands.RIGHT:
			case Constants.AlignmentCommands.UP:
			case Constants.AlignmentCommands.DOWN:
				this._align();
				break;
			case Constants.AlignmentCommands.HCENTER:
			case Constants.AlignmentCommands.VCENTER:
				this._center();
				break;
			case Constants.AlignmentCommands.HSIZE:
			case Constants.AlignmentCommands.VSIZE:
				this._matchSizes();
				break;
			case Constants.AlignmentCommands.HDISTR:
			case Constants.AlignmentCommands.VDISTR:
				this._distribute();
				break
			}
		},
		undo: function(c) {
			var a = this.Options.prevPositionsAndSizes.pop();
			if (a == undefined) {
				return
			}
			for (var b = 0;
			b < c.length;
			b++) {
				c[b].setX(a[b].x);
				c[b].setY(a[b].y);
				c[b].setWidth(a[b].width);
				c[b].setHeight(a[b].height)
			}
		},
		_init: function(b, c, a) {
			this.Options.comps = b;
			this._savePrevPositionsAndSizes();
			this.Options.command = c;
			this.Options.isRelative = a;
			this.Funcs.getXorY = this.getXorYFunc(c);
			this.Funcs.setXorY = this.setXorYFunc(c);
			this.Funcs.getWidthOrHeight = this.getWidthOrHeightFunc(c);
			this.Funcs.getMinOrMax = this.getMinOrMaxFunc(c);
			this.Funcs.setWidthOrHeight = this.setWidthOrHeightFunc(c)
		},
		_savePrevPositionsAndSizes: function() {
			var a = [];
			var c = this.Options.comps;
			for (var b = 0;
			b < c.length;
			b++) {
				a.push({
					x: c[b].getX(),
					y: c[b].getY(),
					width: c[b].getWidth(),
					height: c[b].getPhysicalHeight()
				})
			}
			this.Options.prevPositionsAndSizes.push(a)
		},
		_align: function() {
			var b = this.getTargetXorY(this.Options.command);
			for (var a = 0;
			a < this.Options.comps.length;
			a++) {
				this.Funcs.setXorY(this.Options.comps[a], b, this.Funcs.getWidthOrHeight(this.Options.comps[a]))
			}
		},
		_center: function() {
			var a = this.getTargetCenter();
			for (var b = 0;
			b < this.Options.comps.length;
			b++) {
				this.Funcs.setXorY(this.Options.comps[b], a, this.Funcs.getWidthOrHeight(this.Options.comps[b]))
			}
		},
		_matchSizes: function() {
			var b = this.getTargetSize();
			for (var a = 0;
			a < this.Options.comps.length;
			a++) {
				this.Funcs.setWidthOrHeight(this.Options.comps[a], b)
			}
		},
		_distribute: function() {
			this.Options.comps.sort(function(f, e) {
				return this.Funcs.getXorY(f) - this.Funcs.getXorY(e)
			}.bind(this));
			var c = 0;
			for (var a = 1;
			a < this.Options.comps.length;
			a++) {
				c += this.Funcs.getXorY(this.Options.comps[a]) - this.Funcs.getXorY(this.Options.comps[a - 1]) - this.Funcs.getWidthOrHeight(this.Options.comps[a - 1])
			}
			var d = 0;
			if (this.Options.isRelative) {
				c += this.Funcs.getXorY(this.Options.comps[0]);
				var b = this.Options.comps[this.Options.comps.length - 1];
				c += this.Funcs.getWidthOrHeight(b.getViewNode().getParent()) - (this.Funcs.getXorY(b) + this.Funcs.getWidthOrHeight(b));
				d = c / (this.Options.comps.length - 1 + 2)
			} else {
				d = c / (this.Options.comps.length - 1)
			}
			if (this.Options.isRelative) {
				this.Funcs.setXorY(this.Options.comps[0], d, 0)
			}
			for (a = 1;
			a < this.Options.comps.length;
			a++) {
				this.Funcs.setXorY(this.Options.comps[a], this.Funcs.getXorY(this.Options.comps[a - 1]) + this.Funcs.getWidthOrHeight(this.Options.comps[a - 1]) + d)
			}
		},
		getTargetXorY: function() {
			if (this.Options.isRelative) {
				return this.Funcs.getWidthOrHeight(this.Options.comps[0].getViewNode().getParent())
			} else {
				var a = this.Funcs.getXorY(this.Options.comps[0]) + this.Funcs.getWidthOrHeight(this.Options.comps[0]);
				for (var b = 1;
				b < this.Options.comps.length;
				b++) {
					a = this.Funcs.getMinOrMax(a, this.Funcs.getXorY(this.Options.comps[b]) + this.Funcs.getWidthOrHeight(this.Options.comps[b]))
				}
				return a
			}
		},
		getTargetCenter: function() {
			if (this.Options.isRelative) {
				return this.Funcs.getWidthOrHeight(this.Options.comps[0].getViewNode().getParent())
			} else {
				var b = 0;
				for (var a = 0;
				a < this.Options.comps.length;
				a++) {
					b += this.Funcs.getXorY(this.Options.comps[a]) + this.Funcs.getWidthOrHeight(this.Options.comps[a])
				}
				return b / this.Options.comps.length
			}
		},
		getTargetSize: function() {
			return this.Funcs.getWidthOrHeight(this.Options.comps[0])
		},
		getXorYFunc: function(a) {
			return function(b) {
				switch (a) {
				case Constants.AlignmentCommands.LEFT:
				case Constants.AlignmentCommands.RIGHT:
				case Constants.AlignmentCommands.HCENTER:
				case Constants.AlignmentCommands.HSIZE:
				case Constants.AlignmentCommands.HDISTR:
					return b.getX();
				case Constants.AlignmentCommands.UP:
				case Constants.AlignmentCommands.DOWN:
				case Constants.AlignmentCommands.VCENTER:
				case Constants.AlignmentCommands.VSIZE:
				case Constants.AlignmentCommands.VDISTR:
					return b.getY()
				}
			}
		},
		getWidthOrHeightFunc: function(a) {
			return function(b) {
				switch (a) {
				case Constants.AlignmentCommands.LEFT:
					return 0;
				case Constants.AlignmentCommands.RIGHT:
					return b.getWidth();
				case Constants.AlignmentCommands.UP:
					return 0;
				case Constants.AlignmentCommands.DOWN:
				case Constants.AlignmentCommands.VSIZE:
				case Constants.AlignmentCommands.VDISTR:
					return (b.getPhysicalHeight) ? b.getPhysicalHeight() : b.getHeight();
				case Constants.AlignmentCommands.HCENTER:
					return b.getWidth() / 2;
				case Constants.AlignmentCommands.VCENTER:
					return (b.getPhysicalHeight) ? b.getPhysicalHeight() / 2 : b.getHeight() / 2;
				case Constants.AlignmentCommands.HSIZE:
				case Constants.AlignmentCommands.HDISTR:
					return b.getWidth()
				}
			}
		},
		setXorYFunc: function(a) {
			return function(b, c, d) {
				switch (a) {
				case Constants.AlignmentCommands.LEFT:
				case Constants.AlignmentCommands.HSIZE:
				case Constants.AlignmentCommands.HDISTR:
					b.setX(c);
					break;
				case Constants.AlignmentCommands.RIGHT:
				case Constants.AlignmentCommands.HCENTER:
					b.setX(c - d);
					break;
				case Constants.AlignmentCommands.UP:
				case Constants.AlignmentCommands.VSIZE:
				case Constants.AlignmentCommands.VDISTR:
					b.setY(c);
					break;
				case Constants.AlignmentCommands.DOWN:
				case Constants.AlignmentCommands.VCENTER:
					b.setY(c - d);
					break
				}
			}
		},
		setWidthOrHeightFunc: function(a) {
			return function(b, c) {
				switch (a) {
				case Constants.AlignmentCommands.HSIZE:
					if (b._resizableSides.indexOf("RESIZE_LEFT") == -1 || b._resizableSides.indexOf("RESIZE_RIGHT") == -1) {
						break
					}
					if (c > b._maximumWidth) {
						b.setWidth(b._maximumWidth);
						break
					}
					if (c < b._minimumWidth) {
						b.setWidth(b._minimumWidth);
						break
					}
					b.setWidth(c);
					break;
				case Constants.AlignmentCommands.VSIZE:
					if (b._resizableSides.indexOf("RESIZE_TOP") == -1 || b._resizableSides.indexOf("RESIZE_BOTTOM") == -1) {
						break
					}
					if (c > b._maximumHeight) {
						b.setWidth(b._maximumHeight);
						break
					}
					if (c < b._minimumHeight) {
						b.setWidth(b._minimumHeight);
						break
					}
					var d = b.getExtraPixels();
					b.setHeight(c - d.top - d.bottom);
					break
				}
			}
		},
		getMinOrMaxFunc: function(a) {
			return function(c, b) {
				switch (a) {
				case Constants.AlignmentCommands.LEFT:
				case Constants.AlignmentCommands.UP:
					return Math.min(c, b);
				case Constants.AlignmentCommands.RIGHT:
				case Constants.AlignmentCommands.DOWN:
					return Math.max(c, b)
				}
			}
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WPreviewManager",
	Class: {
		Extends: "mobile.editor.managers.PreviewManager",
		Binds: ["_onSiteResized"],
		initialize: function() {
			W.Classes.get("mobile.core.components.Container", function(a) {
				this._containerBaseClass = a
			}.bind(this));
			this.parent()
		},
		_onPreviewReady: function() {
			var a = this.getPreviewManagers().Utils.createStyleSheet("PREVIEW_STYLE");
			this.getPreviewManagers().Viewer.addEvent("resize", this._onSiteResized);
			this._onSiteResized(this.getPreviewManagers().Viewer.getSiteHeight())
		},
		_onSiteResized: function(a) {
			this.fireEvent("previewResized", a)
		},
		_isSiteReadyDelay: function() {
			this.parent();
			var b;
			try {
				b = this._preview && this._preview.contentWindow && this._preview.contentWindow.W && this._preview.contentWindow.W.Viewer
			} catch (a) {}
			if (b && b.isSiteReady()) {
				this._onPreviewReady()
			}
		},
		getPreviewComponent: function() {
			return $("previewContainer")
		},
		previewToEditorCoordinates: function(a, c) {
			var b = this.getPreviewComponent().getLogic().getPreviewPosition();
			a.x += b.x;
			a.y += b.y;
			if (c) {
				a.x -= window.pageXOffset;
				a.y -= window.pageYOffset
			}
			return a
		},
		editorToPreviewCoordinates: function(b) {
			var c = this.getPreviewComponent().getLogic().getPreviewPosition();
			var a = window.getScroll();
			b.x -= c.x;
			b.y -= c.y;
			b.y += a.y;
			return b
		},
		getGlobalRefNodePositionInEditor: function(b, c) {
			var a = b.getGlobalPositionRefNode();
			return this.previewToEditorCoordinates(a, c)
		},
		getNodeGlobalPosition: function(b) {
			var a = b.getPosition();
			return this.previewToEditorCoordinates(a)
		},
		selectionFilter: function(a) {
			if (!a.isSelectable() || !a.getIsDisplayed()) {
				return false
			}
			return true
		},
		componentFromGlobalCoordinates: function(a, e, d, c, b) {
			a += window.pageXOffset;
			e += window.pageYOffset;
			if (!c) {
				c = this.getPreviewManagers().Viewer.getSiteNode()
			}
			return this._componentFromGlobalCoordinatesRecurse(a, e, c, d, b)
		},
		_componentFromGlobalCoordinatesRecurse: function(n, m, a, l, j) {
			j = (j == false) ? false : true;
			var g, h;
			if (a.getLogic && instanceOf(a.getLogic(), this._containerBaseClass)) {
				var t = a.getLogic();
				g = t.getChildComponents().reverse();
				h = t.getGlobalPositionRefNode();
				var b = this.getPreviewComponent().getLogic().getPreviewPosition();
				h.x += b.x;
				h.y += b.y
			} else {
				g = a.getChildren("[comp]").reverse();
				h = this.getNodeGlobalPosition(a)
			}
			for (var s = 0;
			s < g.length;
			s++) {
				var k = g[s];
				var o = k.getLogic && k.getLogic();
				if (!o) {
					continue
				}
				if (j) {
					if (instanceOf(o, this._containerBaseClass)) {
						var u = g[s].getLogic().getInlineContentContainer();
						var c = this._componentFromGlobalCoordinatesRecurse(n, m, u, l, j);
						if (c) {
							return c
						}
					}
				}
				var e = h.x + o.getSelectableX();
				var d = h.y + o.getSelectableY();
				var r = o.getSelectableWidth();
				o.flushPhysicalHeightCache();
				var p = o.getSelectableHeight();
				var f = 21;
				if (r < f) {
					e -= Math.round((f - r) / 2);
					r = f
				}
				if (p < f) {
					d -= Math.round((f - p) / 2);
					p = f
				}
				var q = true;
				if (l && !l(o)) {
					q = false
				}
				if (q && n > e && n < (e + r) && m > d && m < (d + p)) {
					return o
				}
			}
			return null
		},
		topLevelContainerUnderMouse: function(a) {
			var d = this.getNodeGlobalPosition(this._preview.contentWindow.$("SITE_STRUCTURE"));
			var h = a.client.x + window.pageXOffset;
			var g = a.client.y + window.pageYOffset;
			var c = this._preview.contentWindow.$("SITE_STRUCTURE").getChildren("[comp]");
			for (var e = 0;
			e < c.length;
			e++) {
				var b = c[e];
				var f = b.getPosition();
				f.x += d.x;
				f.y += d.y;
				var j = b.getSize();
				if (h > f.x && h < (f.x + j.x) && g > f.y && g < (f.y + j.y)) {
					return b
				}
			}
		},
		setInPlaceEditingMode: function(a) {
			this.getPreviewComponent().getLogic().setInPlaceEditingMode(a)
		},
		scrollToElement: function(a) {}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WDialogManager",
	Class: {
		Extends: "mobile.editor.managers.DialogManager",
		Binds: ["openAdvancedStylingDialog", "openLinkDialog", "openColorAdjusterDialog"],
		_initializeExtra: function() {},
		openLinkDialog: function(b) {
			var a = "LINK_DIALOG";
			this._createAndOpenWDialog("_linkDialog", "wysiwyg.editor.components.dialogs.LinkDialog", "wysiwyg.editor.skins.dialogs.LinkDialogSkin", function(c) {}, {
				width: 320,
				top: b.top,
				left: b.left,
				position: b.position || Constants.DialogWindow.POSITIONS.DYNAMIC,
				allowScroll: false,
				semiModal: true,
				allowDrag: true,
				title: b.title || W.Resources.get("EDITOR_LANGUAGE", "LINK_DIALOG_DEFAULT_TITLE"),
				description: b.description || W.Resources.get("EDITOR_LANGUAGE", "LINK_DIALOG_DEFAULT_DESCRIPTION"),
				helplet: a
			}, null, true, b, false, false)
		},
		openColorAdjusterDialog: function(a) {
			this._createAndOpenWDialog("_colorAdjustmentDailog", "wysiwyg.editor.components.dialogs.ColorAdjuster", "wysiwyg.editor.skins.dialogs.ColorAdjusterSkin", function(b) {}, {
				width: 300,
				height: 200,
				top: a.top,
				left: a.left,
				position: Constants.DialogWindow.POSITIONS.DYNAMIC,
				allowScroll: false,
				semiModal: true,
				allowDrag: true,
				buttonSet: W.EditorDialogs.DialogButtonSet.OK_CANCEL,
				title: W.Resources.get("EDITOR_LANGUAGE", "ADJUST_DIALOG_TITLE"),
				description: W.Resources.get("EDITOR_LANGUAGE", "ADJUST_DIALOG_DESCRIPTION")
			}, null, true, a, false, false)
		},
		openColorSelectorDialog: function(a) {
			this._createAndOpenWDialog("_colorSelectorDialog", "wysiwyg.editor.components.dialogs.ColorSelector", "wysiwyg.editor.skins.dialogs.ColorSelectorSkin", function(b) {}, {
				width: 195,
				minHeight: 195,
				top: a.top,
				left: a.left,
				position: Constants.DialogWindow.POSITIONS.DYNAMIC,
				allowScroll: false,
				semiModal: true,
				allowDrag: true,
				buttonSet: W.EditorDialogs.DialogButtonSet.NONE,
				title: W.Resources.get("EDITOR_LANGUAGE", "SELECT_COLOR_DIALOG_TITLE")
			}, null, true, a, false, false)
		},
		openFontDialog: function(a) {
			this._createAndOpenWDialog("_fontDialog", "wysiwyg.editor.components.dialogs.FontPicker", "wysiwyg.editor.skins.dialogs.FontPickerSkin", function(b) {}, {
				width: 270,
				top: a.top,
				left: a.left,
				position: Constants.DialogWindow.POSITIONS.DYNAMIC,
				allowScroll: false,
				semiModal: true,
				allowDrag: true,
				buttonSet: W.EditorDialogs.DialogButtonSet.OK_CANCEL,
				title: a.title || W.Resources.get("EDITOR_LANGUAGE", "FONT_DIALOG_TITLE"),
				helplet: "FontPicker"
			}, null, true, a, false, false)
		},
		openAdvancedStylingDialog: function(b) {
			var c = b && b.selectedComponent && b.selectedComponent.$className && b.selectedComponent.$className.split(".").getLast();
			var a = "ADVANCED_STYLING_" + c;
			if (!W.Data.dataMap.HELP_IDS._data[a]) {
				a = undefined
			}
			this._createAndOpenWDialog("_advancedStyleDialog", "wysiwyg.editor.components.panels.design.AdvancedStyling", "wysiwyg.editor.skins.panels.AdvancedStylingSkin", function(d) {}, {
				width: 300,
				maxHeight: 600,
				top: b.top,
				left: b.left,
				position: Constants.DialogWindow.POSITIONS.SIDE,
				level: 2,
				allowScroll: true,
				semiModal: true,
				allowDrag: true,
				title: W.Resources.get("EDITOR_LANGUAGE", "ADVANCED_STYLES"),
				description: W.Resources.get("EDITOR_LANGUAGE", "ADVANCED_STYLES_DESCRIPTION"),
				helplet: a
			}, null, true, b, false, false)
		},
		openInputDialog: function(a) {
			this._createAndOpenWDialog("_inputDialog", "wysiwyg.editor.components.dialogs.InputDialog", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function() {}, {
				width: 400,
				position: Constants.DialogWindow.POSITIONS.CENTER,
				allowScroll: false,
				allowDrag: false,
				title: a.title || "",
				description: a.description || "",
				placeholderText: a.placeholderText || "",
				buttonSet: W.EditorDialogs.DialogButtonSet.OK_CANCEL
			}, null, true, a, false, false)
		},
		openErrorDialog: function(d, b, a, c) {
			this._createAndOpenWDialog("_errorDialog", "mobile.editor.components.dialogs.ErrorDialog", "mobile.editor.skins.dialogs.ErrorDialogSkin", function(e) {
				e.setDialogOptions(d, b, a, c, undefined)
			}, {
				width: 500,
				minHeight: 200
			}, null, false, null, false)
		},
		openSomePublishDialog: function(b, a) {
			this._createFloatingDialog(b, a, "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function() {}, {
				width: 700,
				minHeight: 150,
				position: Constants.DialogWindow.POSITIONS.TOP,
				allowScroll: true,
				allowDrag: false,
				buttonSet: this.DialogButtonSet.NONE
			}, null, true, null, false, true)
		},
		openPublishWebsiteSuccessDialog: function() {
			this.openSomePublishDialog("_publishWebsiteSuccessDialog", "wysiwyg.editor.components.dialogs.PublishWebsiteSuccessDialog")
		},
		openPublishWebsiteShareDialog: function() {
			this.openSomePublishDialog("_publishWebsiteShareDialog", "wysiwyg.editor.components.dialogs.PublishWebsiteShareDialog")
		},
		openPublishFbSiteDialog: function() {
			this.openSomePublishDialog("_publishFbSiteDialog", "wysiwyg.editor.components.dialogs.PublishFbSiteDialog")
		},
		openPublishFbSiteSuccessDialog: function() {
			this.openSomePublishDialog("_publishFbSiteSuccessDialog", "wysiwyg.editor.components.dialogs.PublishFbSiteSuccessDialog")
		},
		openSaveDialog: function(a) {
			if (W.Editor.getEditorStatusAPI().getSaveInProcess()) {
				return
			}
			W.Editor.getEditorStatusAPI().setSaveInProcess(true);
			a = a || {};
			W.Data.getDataByQuery("#SITE_SETTINGS", function(b) {
				if (a.saveAs || (!this._saveDialog && W.Config.siteNeverSavedBefore())) {
					this._saveDialog = this._createFloatingDialog("_saveDialog", "wysiwyg.editor.components.dialogs.SaveDialog", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function() {
						this._saveDialog.addEvent("dialogClosed", function() {
							W.Editor.getEditorStatusAPI().setSaveInProcess(false);
							this._saveDialog.dispose();
							this._saveDialog = null
						}.bind(this))
					}.bind(this), {
						width: 650,
						minHeight: 150,
						position: Constants.DialogWindow.POSITIONS.TOP,
						allowScroll: true,
						allowDrag: false,
						description: a.description || "",
						buttonSet: this.DialogButtonSet.NONE
					}, b, true, a, false, true)
				} else {
					W.ServerFacade.saveDocument(siteHeader.id, W.Preview.getPreviewSite(), function() {}, function() {})
				}
			}.bind(this))
		},
		openSaveSuccessDialog: function() {
			this.openSomePublishDialog("_saveSuccessDialog", "wysiwyg.editor.components.dialogs.SaveSuccessDialog")
		},
		openPublishWebsiteDialog: function() {
			W.Data.getDataByQuery("#SITE_SETTINGS", function(a) {
				this._createFloatingDialog("_PublishDialog", "wysiwyg.editor.components.dialogs.PublishWebsiteDialog", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function() {}, {
					width: 650,
					minHeight: 150,
					position: Constants.DialogWindow.POSITIONS.TOP,
					allowScroll: true,
					allowDrag: false,
					buttonSet: this.DialogButtonSet.NONE
				}, a, true, null, false, true)
			}.bind(this))
		},
		openListEditDialog: function(c, b) {
			if (!b) {
				b = "photos"
			}
			var a = {
				galleryConfigID: b,
				addButtonText: W.Resources.get("EDITOR_LANGUAGE", "ADD_" + b.toUpperCase() + "_BUTTON_TEXT"),
				showDescription: (b != "social_icons"),
				showTitle: (b != "social_icons"),
				showSplashScreen: (b != "social_icons")
			};
			var d = "ORGANIZE_" + b;
			if (!W.Data.dataMap.HELP_IDS._data[d]) {
				d = undefined
			}
			this._createAndOpenWDialog("_listEditDialog" + c.get("id"), "wysiwyg.editor.components.dialogs.ListEditDialog", "wysiwyg.editor.skins.dialogs.WListEditDialogSkin", function(e) {}, {
				width: 550,
				height: 510,
				position: Constants.DialogWindow.POSITIONS.CENTER,
				allowScroll: false,
				semiModal: true,
				allowDrag: true,
				buttonSet: this.DialogButtonSet.OK_CANCEL,
				title: W.Resources.get("EDITOR_LANGUAGE", "ORGANIZE_" + b.toUpperCase() + "_DIALOG_TITLE"),
				description: W.Resources.get("EDITOR_LANGUAGE", "ORGANIZE_" + b.toUpperCase() + "_DIALOG_DESCRIPTION"),
				helplet: d
			}, c, true, a, false, false)
		},
		openWAddPageDialog: function(b) {
			var a = "SIDE_PANEL_PAGES_ADD_PAGE";
			this._createAndOpenWDialog("_addPageDialog", "wysiwyg.editor.components.dialogs.WAddPageDialog", "wysiwyg.editor.skins.dialogs.WAddPageDialogSkin", function(c) {
				c.setDialogOptions()
			}, {
				width: 480,
				position: Constants.DialogWindow.POSITIONS.CENTER,
				tabs: false,
				description: W.Resources.get("EDITOR_LANGUAGE", "ADD_PAGE_DIALOG_DESCRIPTION"),
				allowDrag: false,
				helpIcon: true,
				helplet: a
			}, null, true, b, true)
		},
		openStyleSelector: function(a, c) {
			c = c || {};
			var d = a && a.$className && a.$className.split(".").getLast();
			var b = "CHOOSE_STYLE_" + d;
			if (!W.Data.dataMap.HELP_IDS._data[b]) {
				b = undefined
			}
			this._createAndOpenWDialog("_chooseStyle", "wysiwyg.editor.components.dialogs.ChooseStyleDialog", "wysiwyg.editor.skins.panels.base.AutoPanelSkin", function(e) {
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
		openHelpDialog: function(a, b) {
			b = b || {
				height: 620,
				width: 610,
				title: W.Resources.get("EDITOR_LANGUAGE", "IFRAME_HELP_TITLE"),
				description: ""
			};
			this._createAndOpenWDialog("_helpDialog", "wysiwyg.editor.components.Iframe", "wysiwyg.editor.skins.IframeSkin", function(c) {
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
		_createAndOpenWDialog: function(c, i, l, d, k, j, e, g, h, b, a) {
			var f;
			if (b) {
				f = this[c]
			}
			if (a && this[c]) {
				this[c].getLogic().closeDialog()
			}
			if (!f || !f.getLogic) {
				f = W.Components.createComponent("mobile.editor.components.dialogs.DialogWindow", (k && k.dialogSkin) || "wysiwyg.editor.skins.dialogs.WDialogWindowSkin", undefined, {}, function() {
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
						this._onDialogClosing(f)
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
		},
		openMediaDialog: function(e, b, a) {
			var d = {
				width: 600,
				minHeight: 250
			};
			if (!a) {
				a = "photos"
			}
			var c = "IMAGE_GALLERY_" + a;
			if (!W.Data.dataMap.HELP_IDS._data[c]) {
				c = undefined
			}
			this._createAndOpenWDialog("_mediaDialog", "mobile.editor.components.dialogs.MediaDialog", "wysiwyg.editor.skins.dialogs.WMediaDialogSkin", function(f) {
				f.setDialogOptions(b, a, e, {
					tabs: true
				})
			}, {
				width: d.width,
				minHeight: d.minHeight,
				allowDrag: false,
				position: Constants.DialogWindow.POSITIONS.CENTER,
				helplet: c,
				showToolbar: true,
				tabs: true,
				buttonSet: W.EditorDialogs.DialogButtonSet.OK_CANCEL
			}, null, false, d, false, false, true)
		},
		openPromptDialog: function(f, d, a, c, e, b) {
			if (b !== false) {
				b = true
			}
			this._createAndOpenWDialog("_promptDialog", "mobile.editor.components.dialogs.MessageDialog", "mobile.editor.skins.dialogs.MessageDialogSkin", function(g) {
				g.setDialogOptions(d, a, e, {
					width: 480,
					minHeight: 10,
					tabs: false,
					title: f,
					buttonSet: c
				})
			}, {
				position: Constants.DialogWindow.POSITIONS.CENTER
			}, null, false, null, b)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.serverfacade.WServerApiUrls",
	Class: {
		Extends: "mobile.editor.managers.serverfacade.ServerApiUrls",
		initialize: function() {},
		_w_constants: {
			PREVIEW_URL_PART: "/renderer/render/{0}/{1}"
		},
		getSitePreviewUrl: function(a) {
			return this._getUrl(this._w_constants.PREVIEW_URL_PART, [W.Config.getDocumentType(), a])
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.serverfacade.WSiteSerializer",
	Class: {
		Extends: "mobile.editor.managers.serverfacade.SiteSerializer",
		_serializeSiteNodes: function(c) {
			var a = c.$("SITE_STRUCTURE");
			var d = W.CompSerializer.serializeComponents(a.getChildren("[comp]"));
			var b = c.W.Data.getDataMap()["SITE_STRUCTURE"].get("pages");
			return this._sortNodesByPagesData(d, b)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.serverfacade.WServerFacade",
	Class: {
		Extends: "mobile.editor.managers.serverfacade.ServerFacade",
		initialize: function() {
			var a = W.Classes.get("wysiwyg.editor.managers.serverfacade.WSiteSerializer");
			var b = W.Classes.get("wysiwyg.editor.managers.serverfacade.WServerApiUrls");
			this.parent();
			this._siteSerializer = new a();
			this._urlBuilder = new b();
			this._initialize2()
		},
		_initialize2: function() {},
		getEditUrl: function(a) {
			return this._urlBuilder.getSiteEditorUrl(a)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WComponentSerializer",
	Class: {
		Extends: Events,
		initialize: function() {
			W.Classes.get("mobile.core.components.Container", function(a) {
				this._containerBaseClass = a
			}.bind(this));
			W.Classes.get("mobile.core.components.Page", function(a) {
				this._pageClass = a
			}.bind(this));
			this._isReady = true
		},
		isReady: function() {
			return this._isReady
		},
		clone: function() {
			return new this.$class()
		},
		serializeComponent: function(g, d) {
			var f = g.getLogic();
			var e = {};
			e.componentType = g.get("comp");
			if (instanceOf(f, this._pageClass)) {
				e.type = "Page"
			} else {
				if (instanceOf(f, this._containerBaseClass)) {
					e.type = "Container"
				} else {
					e.type = "Component"
				}
			}
			e.id = g.get("id");
			if (g.get("styleId")) {
				e.styleId = g.get("styleId")
			}
			e.skin = g.get("skin") || "mobile.core.skins.InlineSkin";
			e.layout = this._getComponentLayout(f);
			if (!d) {
				var h = g.get("dataquery");
				if (h) {
					e.dataQuery = h
				}
				var b = g.get("propertyQuery");
				if (b) {
					pq = b.replace(/^(#+)/gi, "");
					e.propertyQuery = pq
				}
			} else {
				var c;
				if (!f.isUsingExternalData()) {
					c = this._extractDataObject(f.getDataItem())
				} else {
					e.uID = g.get("dataQuery")
				}
				if (c) {
					e.data = c.data;
					e.dataRefs = c.dataRefs;
					delete e.data.id
				}
				var a = this._extractDataObject(f.getComponentProperties());
				if (a) {
					e.props = a.data;
					delete e.props.id
				}
			}
			if (f.hasChildren()) {
				e.components = this.serializeComponents(f.getChildComponents(), d)
			}
			return e
		},
		serializeComponents: function(c, a) {
			var b = [];
			c.forEach(function(d) {
				b.push(this.serializeComponent(d, a))
			}, this);
			return b
		},
		_getComponentLayout: function(f) {
			var b, c;
			var d;
			var a;
			if (f) {
				b = {
					x: f.getX(),
					y: f.getY(),
					width: f.getWidth(),
					height: f.getHeight()
				};
				d = f.getAnchors();
				a = f.getHorizontalGroup()
			} else {
				b = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}
			}
			var e = [];
			if (d && d.length > 0) {
				for (c = 0;
				c < d.length;
				c++) {
					if (!d[c].toComp.getIsDisposed()) {
						e.push(this.serializeAnchor(d[c]))
					} else {
						W.Utils.debugTrace("WComponentSerializer", "_getComponentLayout", "anchors[i].toComp.isDisposed()==true")
					}
				}
			}
			if (a && a.length && a[0].fromComp == f) {
				for (c = 1;
				c < a.length;
				c++) {
					e.push(this.serializeAnchor(a[c]))
				}
			}
			b.anchors = e;
			return b
		},
		_extractDataObject: function(b) {
			if (!b) {
				return null
			}
			var d = b.getData();
			var a = {};
			var c = {};
			Object.each(d, function(i, g) {
				var e = b.getFieldType ? b.getFieldType(g) : null;
				switch (e) {
				case "ref":
					var f = b.getDataManager().getDataByQuery(i);
					c[g] = this._extractDataObject(f);
					break;
				case "refList":
					var h = {
						isList: true,
						items: []
					};
					c[g] = h;
					var j = b.getDataManager().getDataByQueryList(i);
					Object.each(j, function(m, l, k) {
						h.items.push(this._extractDataObject(m))
					}, this);
					break;
				default:
					a[g] = i
				}
			}, this);
			return {
				data: a,
				dataRefs: c
			}
		},
		serializeAnchor: function(a) {
			var b = {};
			b.type = a.type;
			b.targetComponent = a.toComp.getID();
			b.locked = a.locked;
			b.distance = a.distance;
			b.topToTop = a.topToTop;
			b.originalValue = a.originalValue;
			return b
		}
	}
});
Constants.WComponentDeserializer = {
	POSITION_OFFSET: 30
};
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WComponentDeserializer",
	Class: {
		Extends: Events,
		initialize: function() {
			this._isReady = true
		},
		isReady: function() {
			return this._isReady
		},
		clone: function() {
			return new this.$class()
		},
		createAndAddComponents: function(e, b, h, a) {
			var k = {};
			var j = 0;
			for (var d = 0;
			d < b.length;
			d++) {
				var f = e.getPosition().x + b[d].layout.x + b[d].layout.width;
				if (f > j) {
					j = f
				}
			}
			for (var d = 0;
			d < b.length;
			d++) {
				var g = Constants.WComponentDeserializer.POSITION_OFFSET;
				b[d].layout.y += g;
				if (j + g < window.innerWidth) {
					b[d].layout.x += g
				}
			}
			var l = this._createAndAddComponentsRecurse(e, b, k, a);
			var c = new Async.Bulk(l, null, {
				completeEvent: Constants.ComponentEvents.READY,
				completeCallback: function() {
					if (h) {
						W.Editor.setSelectedComps(l.map(function(i) {
							return i.getLogic()
						}))
					}
				}.bind(this)
			})
		},
		_createAndAddComponentsRecurse: function(f, c, h, a) {
			var j = [];
			var d;
			for (d = 0;
			d < c.length;
			d++) {
				var g = this._createAndAddComponentRecurse(f, c[d], null, h, a);
				j.push(g)
			}
			var e = new Async.Bulk(j, null, {
				completeEvent: "wixified",
				completeCallback: function() {
					for (d = 0;
					d < c.length;
					d++) {
						var n = [];
						var m = c[d].layout.anchors.slice();
						for (var k = 0;
						k < m.length;
						k++) {
							if (h[m[k].targetComponent] != undefined) {
								var l = Object.clone(m[k]);
								l.targetComponent = h[m[k].targetComponent];
								n.push(l)
							}
						}
						var i = W.Preview.getHtmlElement(h[c[d].id]).getLogic();
						W.Preview.getPreviewManagers().Layout.attachSavedAnchorsToComponent(i, n)
					}
				}.bind(this)
			});
			var b = new Async.Bulk(j, null, {
				completeEvent: Constants.ComponentEvents.READY,
				completeCallback: function() {
					this._allItems.push(j);
					this._itemsCount -= j.length;
					if (this._itemsCount == 0) {
						for (var k = 0;
						k < this._allItems.length;
						k++) {
							var i = Array.map(this._allItems[k], function(l) {
								return l.getLogic()
							}, this);
							if (!a) {
								W.Layout.enforceAnchors(i, false)
							}
						}
						if (a) {
							a()
						}
					}
				}.bind(this)
			});
			return j
		},
		_itemsCount: 0,
		_allItems: [],
		_getItemsCount: function(a) {
			var b = 0;
			if (a.components) {
				b = a.components.length;
				for (var c = 0;
				c < a.components.length;
				c++) {
					b += this._getItemsCount(a.components[c])
				}
			}
			return b
		},
		createAndAddComponent: function(e, p, m, l, h, b) {
			var k;
			this._itemsCount = this._getItemsCount(p);
			this._allItems = [];
			var n = {};
			var g;
			if (l == undefined) {
				l = true
			}
			var d = e.getLogic();
			if (!m) {
				g = {
					x: p.layout.x,
					y: p.layout.y
				};
				var o = {
					x: window.getWidth() / 2,
					y: window.getHeight() / 2
				};
				o = W.Preview.editorToPreviewCoordinates(o);
				var f = d.getInlineContentContainer();
				var a = f.getPosition();
				o.x -= a.x;
				o.y -= a.y;
				p.layout.x = Math.round(o.x - (p.layout.width / 2));
				p.layout.y = Math.round(o.y - (p.layout.height / 2));
				k = Constants.WComponentDeserializer.POSITION_OFFSET * W.Editor.getNumOfNewComponentsWithoutComponentMovement();
				W.Editor.incrementNumOfNewComponentsWithoutComponentMovement()
			} else {
				if (p.componentType == "mobile.core.components.Page") {
					k = 0;
					W.Editor.resetNumOfNewComponentsWithoutComponentMovement()
				} else {
					k = Constants.WComponentDeserializer.POSITION_OFFSET
				}
			}
			if (k) {
				p.layout.y += k;
				var i = e.getPosition().x + p.layout.x + p.layout.width;
				if (i + k < window.innerWidth) {
					p.layout.x += k
				}
			}
			var j = this._createAndAddComponentRecurse(e, p, h, n, b);
			if (l) {
				var c = function() {
						j.removeEvent(Constants.ComponentEvents.READY, c);
						var q = j.getLogic();
						W.Editor.setSelectedComp(q)
					}.bind(this);
				j.addEvent(Constants.ComponentEvents.READY, c)
			}
			if (g) {
				p.layout.x = g.x;
				p.layout.y = g.y
			}
			return j
		},
		_createAndAddComponentRecurse: function(c, j, f, h, a) {
			var d = c.getLogic();
			var i;
			var e = j.componentType.substr(j.componentType.lastIndexOf(".") + 1);
			j.htmlId = W.Preview.getPreviewManagers().Utils.getUniqueId(e);
			if (j.data != undefined) {
				j.uID = W.Editor._addPreviewDataItem(Constants.components.DEFAULT_PREFIX, j.data, j.dataRefs)
			}
			if (j.props != undefined) {
				j.propsID = this._addPreviewPropItem(j.props, Constants.components.DEFAULT_PREFIX)
			}
			var g = this._addComponentsNodes(d.getInlineContentContainer(), [j])[0];
			if (j.componentType == "mobile.core.components.Page") {
				g.set("id", j.uID.replace("#", ""))
			}
			h[j.id] = g.get("id");
			var b = function() {
					g.removeEvent(Constants.ComponentEvents.WIXIFIED, b);
					W.Preview.getPreviewManagers().Data.flagDataChange();
					if (this._itemsCount == 0 && a) {
						a()
					}
				}.bind(this);
			g.addEvent(Constants.ComponentEvents.WIXIFIED, b);
			if (f) {
				g.setProperty("styleId", f)
			}
			if (!g.getProperty("styleId")) {
				W.Data.getDataByQuery("#STYLES", function(n) {
					if (!n || !n.get("styleItems")) {
						return
					}
					var m = n.get("styleItems");
					var k = m[j.componentType];
					if (!k || k.length < 1) {
						g.wixify();
						return g
					}
					var o = k[0];
					g.setProperty("styleId", o);
					var l = W.Preview.getPreviewManagers().Theme.isStyleAvailable(o);
					if (l) {
						W.Preview.getPreviewManagers().Theme.invalidateStyle(o);
						g.wixify(j.argObject)
					} else {
						i = this._getSkinForStyle(g);
						W.Preview.getPreviewManagers().Theme.createStyle(o, j.componentType, i, function(p) {
							g.wixify(j.argObject)
						}.bind(this))
					}
				}.bind(this))
			} else {
				var f = g.getProperty("styleId");
				if (!W.Preview.getPreviewManagers().Theme.isStyleAvailable(f)) {
					i = this._getSkinForStyle(g);
					W.Preview.getPreviewManagers().Theme.createStyle(f, j.componentType, i, function(k) {
						g.wixify(j.argObject)
					}.bind(this))
				} else {
					g.wixify(j.argObject)
				}
			}
			this._waitAndAddChildComponents(g, j, h, a);
			return g
		},
		_waitAndAddChildComponents: function(d, a, b, c) {
			if (!a.components || a.components.length == 0) {
				return
			}
			d.addEvent(Constants.ComponentEvents.READY, function() {
				this._createAndAddComponentsRecurse(d, a.components, b, c)
			}.bind(this))
		},
		_addPreviewPropItem: function(b, a) {
			b = Object.clone(b);
			if (!b.metaData) {
				b.metaData = {}
			}
			return "#" + W.Preview.getPreviewManagers().ComponentData.addDataItemWithUniqueId(a, b).id
		},
		_addComponentsNodes: function(a, h) {
			var d = new Elements();
			for (var c = 0;
			c < h.length;
			c++) {
				var b = h[c];
				var f = {
					comp: b.componentType,
					skin: b.skin,
					styleId: b.styleId,
					id: b.htmlId,
					x: b.layout.x,
					y: b.layout.y,
					width: b.layout.width,
					height: b.layout.height
				};
				if (b.layout.adjustWidthToSite) {
					var e = W.Preview.getPreviewManagers().Viewer.getPageGroup();
					f.width = e.getWidth()
				}
				if (b.uID) {
					f.dataQuery = b.uID
				}
				if (b.propsID) {
					f.propertyQuery = b.propsID
				}
				var g = W.Preview.getPreviewManagers().Viewer.createElement("div", f);
				g.insertInto(a);
				if (b.children) {
					this._addComponentsNodes(g, b.children)
				}
				d.push(g)
			}
			return d
		},
		_getSkinForStyle: function(b) {
			var a = b.get("styleid");
			if (a && W.Editor.getDefaultSkinForStyle(a)) {
				return W.Editor.getDefaultSkinForStyle(a)
			} else {
				if (b.get("skin")) {
					return b.get("skin")
				} else {
					return W.Editor.getDefaultSkinForComp(b.get("comp"))
				}
			}
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.HtmlScriptsLoader",
	Class: {
		Extends: "mobile.core.managers.HtmlScriptsLoader",
		_nonIndexedScriptFiles: ["core-data-types.js", "editor-data-types.js", "web-editor-data.js"],
		_scriptFiles: ["core-data-types.js", "editor-data-types.js", "web-editor-data.js", "resources/WSkinEditorData.js", "core-components.js", "editor-components.js", "web-viewer-components.js", "web-editor-components.js", "editor-deploy.js"],
		_getScriptRoot: function(a) {
			if(a == "editor-deploy.js"){
				return "js/html-wysiwyg";
			}else if (a == "resources/WSkinEditorData.js") {
				return serviceTopology.staticSkinUrl
			} else {
				return this.parent()
			}
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.wedit.MultiSelectProxy",
	Class: {
		Extends: Events,
		EDITOR_META_DATA: {
			general: {
				settings: true,
				design: false
			},
			custom: []
		},
		initialize: function() {},
		isMultiSelect: true,
		setSelectedComps: function(c) {
			this._selectedComps = c;
			var b = this.getPosition();
			this._selectedPosDelta = [];
			for (var a = 0;
			a < c.length; ++a) {
				this._selectedPosDelta.push({
					x: c[a].getX() - b.x,
					y: c[a].getY() - b.y
				})
			}
		},
		getSelectedComps: function() {
			return this._selectedComps
		},
		saveCurrentCoordinates: function() {
			for (var a = 0;
			a < this._selectedComps.length; ++a) {
				this._selectedComps[a].saveCurrentCoordinates()
			}
		},
		setX: function(a) {
			var d = a;
			for (var c = 0;
			c < this._selectedComps.length; ++c) {
				var b = this._selectedComps[c];
				var e = this._selectedPosDelta[c].x + d;
				b.setX(e)
			}
		},
		setY: function(e) {
			var c = e;
			for (var b = 0;
			b < this._selectedComps.length; ++b) {
				var a = this._selectedComps[b];
				var d = this._selectedPosDelta[b].y + c;
				a.setY(d)
			}
		},
		getViewNode: function() {
			return this._selectedComps[0].getViewNode()
		},
		getParentComponent: function() {
			return this._selectedComps[0].getParentComponent()
		},
		getX: function() {
			var a = Number.MAX_VALUE;
			for (var b = 0;
			b < this._selectedComps.length;
			b++) {
				a = Math.min(a, this._selectedComps[b].getX())
			}
			return a
		},
		getY: function() {
			var b = Number.MAX_VALUE;
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				b = Math.min(b, this._selectedComps[a].getY())
			}
			return b
		},
		getWidth: function() {
			var b = -Number.MAX_VALUE;
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				b = Math.max(b, this._selectedComps[a].getX() + this._selectedComps[a].getWidth())
			}
			return b - this.getX()
		},
		getPhysicalHeight: function() {
			var b = -Number.MAX_VALUE;
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				b = Math.max(b, this._selectedComps[a].getY() + this._selectedComps[a].getPhysicalHeight())
			}
			return b - this.getY()
		},
		getHeight: function() {
			return this.getPhysicalHeight()
		},
		getGlobalPosition: function() {
			var a = this.getViewNode().getParent().getPosition();
			return {
				x: a.x + this.getX(),
				y: a.y + this.getY()
			}
		},
		getGlobalPositionRefNode: function() {
			return this.getGlobalPosition()
		},
		getSelectableWidth: function() {
			var b = -Number.MAX_VALUE;
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				b = Math.max(b, this._selectedComps[a].getSelectableX() + this._selectedComps[a].getSelectableWidth())
			}
			return b - this.getSelectableX()
		},
		getSelectableHeight: function() {
			var b = -Number.MAX_VALUE;
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				b = Math.max(b, this._selectedComps[a].getSelectableY() + this._selectedComps[a].getSelectableHeight())
			}
			return b - this.getSelectableY()
		},
		getSelectableX: function() {
			var a = Number.MAX_VALUE;
			for (var b = 0;
			b < this._selectedComps.length;
			b++) {
				a = Math.min(a, this._selectedComps[b].getSelectableX())
			}
			return a
		},
		getSelectableY: function() {
			var b = Number.MAX_VALUE;
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				b = Math.min(b, this._selectedComps[a].getSelectableY())
			}
			return b
		},
		getSizeRefNode: function() {
			return {
				y: this.getPhysicalHeight(),
				x: this.getWidth()
			}
		},
		getDataItem: function() {
			return null
		},
		useLayoutOnDrag: function() {
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				if (this._selectedComps[a].useLayoutOnDrag()) {
					return true
				}
			}
			return false
		},
		isResizable: function() {
			return false
		},
		isHorizontallyMovable: function() {
			return true
		},
		isVerticallyMovable: function() {
			return true
		},
		getPosition: function() {
			return {
				y: this.getY(),
				x: this.getX(),
				height: this.getPhysicalHeight(),
				width: this.getWidth()
			}
		},
		getHorizontalGroup: function() {
			return null
		},
		isEditableInPlace: function() {
			return false
		},
		isContainable: function(b) {
			var c = true;
			for (var a = 0;
			a < this._selectedComps.length; ++a) {
				c = c & this._selectedComps[a].isContainable(b)
			}
			return c
		},
		getSizeLimits: function() {
			return {
				minW: 10,
				maxW: 10000,
				minH: 10,
				maxH: 10000
			}
		},
		getExtraPixels: function() {
			return {
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				width: 0,
				height: 0
			}
		},
		getResizableSides: function() {
			return []
		},
		isMultiSelectable: function() {
			return true
		},
		isHorizResizable: function() {
			return false
		},
		onMovement: function() {
			this.fireEvent("componentMoved")
		},
		isVertResizable: function() {
			return false
		},
		isDeleteable: function() {
			return true
		},
		isDuplicatable: function() {
			return true
		},
		dispose: function() {
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				this._selectedComps[a].dispose()
			}
		},
		isDeleteableRecurse: function() {
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				if (!this._selectedComps[a].isDeleteableRecurse()) {
					return false
				}
			}
			return true
		},
		getMinDragY: function() {
			var d = -Number.MAX_VALUE;
			var b = this.getY();
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				var c = this._selectedComps[a].getMinDragY(this.getSelectedComps()) - this._selectedComps[a].getY() + b;
				d = Math.max(d, c)
			}
			return d
		},
		isInstanceOfClass: function(a) {
			return false
		},
		getShowOnAllPagesChangeability: function() {
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				if (!this._selectedComps[a].getShowOnAllPagesChangeability()) {
					return false
				}
			}
			return true
		},
		setShowOnAllPagesChangeability: function(b) {
			for (var a = 0;
			a < this._selectedComps.length;
			a++) {
				this._selectedComps[a].setShowOnAllPagesChangeability(b)
			}
		},
		getComponentProperties: function() {},
		canMoveToOtherScope: function() {
			return true
		}
	}
});
W.Managers.list.combine([{
	Class: "wysiwyg.editor.managers.WClipBoard",
	target: "ClipBoard"
}, {
	Class: "wysiwyg.editor.managers.WAlignmentTools",
	target: "AlignmentTools"
}, {
	Class: "wysiwyg.editor.managers.WComponentSerializer",
	target: "CompSerializer"
}, {
	Class: "wysiwyg.editor.managers.WComponentDeserializer",
	target: "CompDeserializer"
}, {
	Class: "wysiwyg.editor.managers.UndoRedoManager",
	target: "UndoRedoManager"
}]);
W.Managers.override([{
	Class: "wysiwyg.editor.managers.WPreviewManager",
	target: "Preview"
}, {
	Class: "wysiwyg.editor.managers.serverfacade.WServerFacade",
	target: "ServerFacade"
}, {
	Class: "wysiwyg.editor.managers.WEditorManager",
	target: "Editor"
}, {
	Class: "wysiwyg.editor.managers.WDialogManager",
	target: "EditorDialogs"
}, {
	Class: "wysiwyg.editor.managers.HtmlScriptsLoader",
	target: "HtmlScriptsLoader"
}]);
W.Experiments.registerNewExperimentComponent("MCM", "New", {
	name: "wysiwyg.editor.managers.MouseComponentModifier",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_dragMouseMoveHandler", "_dragMouseUpHandler", "_resizeMouseMoveHandler", "_resizeMouseUpHandler", "_dragMouseBlurHandler", "getRightResizeResultingChanges", "getLeftResizeResultingChanges", "getTopResizeResultingChanges", "getBottomResizeResultingChanges", "getTopLeftResizeResultingChanges", "getTopRightResizeResultingChanges", "getBottomLeftResizeResultingChanges", "getBottomRightResizeResultingChanges"],
		initialize: function(c, a, b) {
			this._editedComponent = undefined;
			this._siteBody = $$("body")
		},
		topResizeHandler: function(a) {
			this._resizeHandler(this.getTopResizeResultingChanges, a)
		},
		bottomPushResizeHandler: function(a) {
			this._pushResize = true;
			this._bottomResizeHandler(a)
		},
		bottomResizeHandler: function(a) {
			this._resizeHandler(this.getBottomResizeResultingChanges, a)
		},
		rightResizeHandler: function(a) {
			this._resizeHandler(this.getRightResizeResultingChanges, a)
		},
		leftResizeHandler: function(a) {
			this._resizeHandler(this.getLeftResizeResultingChanges, a)
		},
		topRightResizeHandler: function(a) {
			this._resizeHandler(this.getTopRightResizeResultingChanges, a)
		},
		topLeftResizeHandler: function(a) {
			this._resizeHandler(this.getTopLeftResizeResultingChanges, a)
		},
		bottomRightResizeHandler: function(a) {
			this._resizeHandler(this.getBottomRightResizeResultingChanges, a)
		},
		bottomLeftResizeHandler: function(a) {
			this._resizeHandler(this.getBottomLeftResizeResultingChanges, a)
		},
		setEditedComponent: function(a) {
			this._editedComponent = a
		},
		_resizeHandler: function(c, b) {
			W.UndoRedoManager._startTransaction(this._getCompScopeId());
			this.injects().Layout.reportResizeStart();
			this._editedComponent.saveCurrentDimensions();
			this._resizeMouseStartPoint = {
				x: b.client.x,
				y: b.client.y
			};
			this._moveHandler = c;
			if (this._editedComponent.isInstanceOfClass("wysiwyg.viewer.components.PagesContainer")) {
				this._minCompContentH = this.injects().Layout.getComponentMinResizeHeight(this.injects().Preview.getPreviewManagers().Viewer.getCurrentPageNode().getLogic())
			} else {
				this._minCompContentH = this.injects().Layout.getComponentMinResizeHeight(this._editedComponent)
			}
			var a = this._editedComponent.getPhysicalHeight();
			if (this._minCompContentH > a) {
				this._minCompContentH = 10
			}
			this._resizeStartComponentGeometry = {
				x: this._editedComponent.getX(),
				y: this._editedComponent.getY(),
				width: this._editedComponent.getWidth(),
				height: this._editedComponent.getHeight()
			};
			this._fireChangeEvent("layoutResizeStart", this._resizeStartComponentGeometry);
			this._siteBody.addEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.addEvent("mouseup", this._resizeMouseUpHandler)
		},
		_resizeMouseMoveHandler: function(a) {
			var b = this._moveHandler(a);
			b.editedComponent = this._editedComponent;
			this._setComponentPosSize(b)
		},
		_resizeMouseUpHandler: function() {
			this._pushResize = false;
			this._siteBody.removeEvent("mousemove", this._resizeMouseMoveHandler);
			this._siteBody.removeEvent("mouseup", this._resizeMouseUpHandler);
			this.injects().Layout.reportResize([this._editedComponent]);
			if (this._editedComponent) {
				this._editedComponent.fireEvent("resizeEnd");
				window.fireEvent("resizeEnd")
			}
			this._fireChangeEvent("layoutResizeStop");
			W.UndoRedoManager._endTransaction(this._getCompScopeId())
		},
		getRightResizeResultingChanges: function(c) {
			var b = this._toggleGridScaleIfControlPressed(c);
			var a = c.client.x - this._resizeMouseStartPoint.x;
			return {
				width: this.roundToGrid(this._resizeStartComponentGeometry.width + a, b)
			}
		},
		getLeftResizeResultingChanges: function(d) {
			var b = this._toggleGridScaleIfControlPressed(d);
			var a = this._resizeMouseStartPoint.x - d.client.x;
			var c = this._resizeStartComponentGeometry.width + a;
			var e = this.roundToGrid(this._resizeStartComponentGeometry.x - a, b);
			var f = this._resizeStartComponentGeometry.x - e;
			if (c > this._editedComponent.getSizeLimits().minW) {
				return {
					x: e,
					width: this._resizeStartComponentGeometry.width + f
				}
			} else {
				return {}
			}
		},
		getTopResizeResultingChanges: function(d) {
			var c = this._toggleGridScaleIfControlPressed(d);
			var b = this._resizeMouseStartPoint.y - d.client.y;
			var f = this.roundToGrid(this._resizeStartComponentGeometry.y - b, c);
			var g = this._resizeStartComponentGeometry.y - f;
			var a = this._resizeStartComponentGeometry.height + g + this._editedComponent.getExtraPixels().height;
			var e = this._editedComponent.getSizeLimits().minH;
			a = Math.max(a, e);
			return {
				y: f,
				height: a
			}
		},
		getBottomResizeResultingChanges: function(d) {
			var b = this._toggleGridScaleIfControlPressed(d);
			var a = d.client.y - this._resizeMouseStartPoint.y;
			var c = this._resizeStartComponentGeometry.height + a;
			c = Math.max(c, this._minCompContentH);
			return {
				height: this.roundToGrid(c, b),
				enforceAnchors: this._getEnforceAnchors(d),
				context: this
			}
		},
		getTopRightResizeResultingChanges: function(b) {
			var c = this.getTopResizeResultingChanges(b);
			var a = this.getRightResizeResultingChanges(b);
			return Object.merge(c, a)
		},
		getTopLeftResizeResultingChanges: function(a) {
			var b = this.getTopResizeResultingChanges(a);
			var c = this.getLeftResizeResultingChanges(a);
			return Object.merge(b, c)
		},
		getBottomRightResizeResultingChanges: function(c) {
			var a = this.getBottomResizeResultingChanges(c);
			var b = this.getRightResizeResultingChanges(c);
			return Object.merge(a, b)
		},
		getBottomLeftResizeResultingChanges: function(b) {
			var a = this.getBottomResizeResultingChanges(b);
			var c = this.getLeftResizeResultingChanges(b);
			return Object.merge(a, c)
		},
		_getEnforceAnchors: function(a) {
			return this._pushResize || a.control || this._editedComponent.useLayoutOnResize()
		},
		_fireChangeEvent: function(a, b) {
			this.injects().Layout.fireEvent(a, b)
		},
		_saveMouseDownInitState: function(b) {
			this._mouseStartPoint = {
				x: b.page.x,
				y: b.page.y
			};
			this._compStartPoint = {
				x: this._editedComponent.getX(),
				y: this._editedComponent.getY()
			};
			this._dragThresholdReached = false;
			this._minY = this._editedComponent.getMinDragY();
			var a = W.Preview.getPreviewManagers().Viewer.getCurrentPageNode();
			this._topBarHeight = W.Editor.getEditorUI().getSkinPart("mainEditorBar").getViewNode().getHeight() - 1;
			this._pageBottomAbs = a.getPosition().y + a.getLogic().getHeight() + this._topBarHeight
		},
		_toggleGridScaleIfControlPressed: function(c) {
			var b = this.injects().Editor.getGridScale();
			var a = c.control;
			if (a) {
				b = (b == 1) ? Constants.WEditManager.DEFAULT_GRID_SCALE : 1
			}
			return b
		},
		roundToGrid: function(a, c) {
			var b = c ? c : this.injects().Editor.getGridScale();
			return a - (a % b)
		},
		_getAllSelectedComponents: function() {
			var a;
			if (this._editedComponent.isMultiSelect) {
				a = this._editedComponent.getSelectedComps()
			} else {
				a = [this._editedComponent]
			}
			return a
		},
		_setComponentPosSize: function(a) {
			if (this._editedComponent) {
				if (a.context) {
					this.injects().Commands.executeCommand("WEditorCommands.SetSelectedCompPositionSize", a, a.context)
				} else {
					this.injects().Commands.executeCommand("WEditorCommands.SetSelectedCompPositionSize", a)
				}
			}
		},
		getDragThresholdReached: function() {
			return this._dragThresholdReached
		},
		mouseDownDragHandler: function(d, b, a, c) {
			this._saveMouseDownInitState(d);
			this._isVerticalPush = b;
			this._allowDeselection = a;
			this._siteBody.addEvent(Constants.CoreEvents.MOUSE_MOVE, this._dragMouseMoveHandler);
			this._siteBody.addEvent(Constants.CoreEvents.MOUSE_UP, this._dragMouseUpHandler);
			window.addEvent(Constants.CoreEvents.BLUR, this._dragMouseBlurHandler);
			this._mouseDownDragHandlerExtra(d, this._isVerticalPush, a)
		},
		_mouseDownDragHandlerExtra: function(c, b, a) {},
		_getCompScopeId: function() {
			return this._editedComponent.getParentComponent().getComponentId()
		},
		isPropertyPanelVisible: function() {
			var a = this.injects().Editor.getPropertyPanel();
			return (a && a.isEnabled())
		},
		_dragMouseMoveHandler: function(f) {
			var d = this._toggleGridScaleIfControlPressed(f);
			var b = f.page.x;
			var h = f.page.y;
			var c = b - this._mouseStartPoint.x;
			var a = h - this._mouseStartPoint.y;
			this._dragThresholdReached = this._dragThresholdReached || Math.abs(c) > 5 || Math.abs(a) > 5;
			if (!this._dragThresholdReached) {
				return
			}
			if (this._isVerticalPush) {
				var g = Math.max(this.roundToGrid(this._compStartPoint.y + a, d), this._minY);
				this.injects().Commands.executeCommand("WEditorCommands.SetSelectedCompPositionSize", {
					y: g,
					enforceAnchors: true,
					editedComponent: this._editedComponent
				})
			} else {
				this.injects().Commands.executeCommand("WEditorCommands.SetSelectedCompPositionSize", {
					x: this.roundToGrid(this._compStartPoint.x + c, d),
					y: this.roundToGrid(this._compStartPoint.y + a, d),
					editedComponent: this._editedComponent
				})
			}
		},
		_dragMouseUpHandler: function(d) {
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_MOVE, this._dragMouseMoveHandler);
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_UP, this._dragMouseUpHandler);
			window.removeEvent(Constants.CoreEvents.BLUR, this._dragMouseBlurHandler);
			var c = d.client.y + window.getScroll().y;
			var b = (c > this._pageBottomAbs);
			this._editedComponent.setShowOnAllPagesChangeability(!b);
			if (b && this.injects().Editor.getComponentScope(this._editedComponent) == this.injects().Editor.EDIT_MODE.CURRENT_PAGE) {
				this.injects().Editor.moveCurrentComponentToOtherScope(this.isPropertyPanelVisible())
			}
			if (this._editedComponent.getX() != this._compStartPoint.x || this._editedComponent.getY() != this._compStartPoint.y) {
				this.injects().Layout.reportMove(this._getAllSelectedComponents())
			}
			var e = d.control || d.event.metaKey;
			if (this._allowDeselection && e && this._editedComponent.getX() == this._compStartPoint.x && this._editedComponent.getY() == this._compStartPoint.y) {
				var a = this.injects().Preview.componentFromGlobalCoordinates(d.client.x, d.client.y, W.Preview.selectionFilter);
				this.injects().Editor.handleComponentClicked(a, d)
			}
			if (this._dragThresholdReached === false) {
				this.injects().Editor.openComponentPropertyPanel(this._editedComponent)
			}
			W.UndoRedoManager._endTransaction(this._getCompScopeId())
		},
		_dragMouseBlurHandler: function() {
			window.removeEvent(Constants.CoreEvents.BLUR, this._dragMouseBlurHandler);
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_MOVE, this._dragMouseMoveHandler);
			this._siteBody.removeEvent(Constants.CoreEvents.MOUSE_UP, this._dragMouseUpHandler)
		}
	}
});
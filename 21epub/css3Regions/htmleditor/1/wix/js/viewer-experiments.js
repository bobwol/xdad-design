W.Experiments.registerNewExperimentComponent("AudioPlayer", "New", {
	name: "wysiwyg.viewer.components.AudioPlayer",
	skinParts: {
		playButton: {
			type: "htmlElement"
		},
		stopButton: {
			type: "htmlElement"
		},
		pauseButton: {
			type: "htmlElement"
		}
	},
	Class: {
		EDITOR_META_DATA: {
			general: {
				settings: true,
				design: true
			},
			custom: [{
				label: "AUDIO_REPLACE_AUDIO",
				command: "WEditorCommands.OpenImageDialog",
				commandParameter: {
					galleryConfigID: "audio"
				},
				commandParameterDataRef: "SELF"
			}]
		},
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_play", "_pause", "_stop", "_setVolume", "_onApiLoaded", "_createAudioPlayer"],
		_states: ["playing"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._loadApi()
		},
		_onAllSkinPartsReady: function(a) {
			this._createAudioPlayer()
		},
		_createAudioPlayer: function() {
			if (!this.$class._audioManagerWasLoaded) {
				W.Utils.callLater(this._createAudioPlayer, null, this, 10);
				return
			}
			this._skinParts.playButton.addEvent("click", this._play);
			this._skinParts.stopButton.addEvent("click", this._stop);
			this._skinParts.pauseButton.addEvent("click", this._pause);
			this.injects().Commands.registerCommandListenerByName("WPreviewCommands.WEditModeChanged", this, this._onModeChange);
			if (this.$class._audioManagerWasLoaded) {
				this._audio = this._createAudioObject()
			}
			window.addEventListener("blur", function() {
				this._pause()
			}.bind(this));
			if (this._isAudioReady && this._data.get("autoPlay")) {
				this._play()
			}
		},
		_onModeChange: function(a) {
			if ((this._isInPreviewMode(a) && this._data.get("autoPlay") && this._fileWasSet())) {
				this._play()
			} else {
				this._stop()
			}
		},
		_fileWasSet: function() {
			return this._data.get("uri").length > 0
		},
		_isInPreviewMode: function(a) {
			return a.toLowerCase() === Constants.ViewManager.VIEW_MODE_PREVIEW.toLowerCase()
		},
		_play: function() {
			if (this._fileWasSet()) {
				this.setState("playing");
				var a = {
					volume: this._data.get("volume")
				};
				if (this._data.get("loop")) {
					a.onfinish = this._play
				}
				this._audio.play(a)
			}
		},
		_pause: function() {
			if (this._fileWasSet()) {
				this.removeState("playing");
				this._audio.pause()
			}
		},
		_stop: function() {
			if (this._fileWasSet() && this._audio) {
				this.removeState("playing");
				this._audio.stop();
				this._audio.destruct();
				this._audio = this._createAudioObject()
			}
		},
		_createAudioObject: function() {
			return soundManager.createSound({
				id: this._view.getAttribute("id"),
				url: this._getFullUrl(this._data.get("uri"))
			})
		},
		_getFullUrl: function(b) {
			if (b.indexOf("http://") === -1) {
				var a = window.serviceTopology.staticServerUrl;
				if (a[a.length - 1] !== "/") {
					a += "/"
				}
				a += "mp3/" + b;
				return a
			}
			return b
		},
		_setVolume: function(b) {
			var a = b.value || 100;
			this._audio.volume = a / 100
		},
		_onDataChange: function(a) {
			this.parent(a);
			this._stop()
		},
		getAcceptableDataTypes: function() {
			return ["AudioPlayer"]
		},
		_getSoundManagerFolder: function() {
			var a = window.serviceTopology.scriptsRoot;
			if (a[a.length - 1] !== "/") {
				a += "/"
			}
			a += "resources/wysiwyg/media/soundmanager2/";
			return a
		},
		_onApiLoaded: function() {
			soundManager.url = this._getSoundManagerFolder();
			soundManager.onready(function() {
				this.$class._audioManagerWasLoaded = true
			}.bind(this))
		},
		_loadApi: function() {
			if (!this.$class.audioApiLoaded) {
				this.$class.audioApiLoaded = true;
				this.apiScriptNode = document.createElement("script");
				var a = document.getElementsByTagName("script")[0];
				this.apiScriptNode.src = this._getSoundManagerFolder() + "soundmanager2-nodebug-jsmin.js";
				this.apiScriptNode.onload = this._onApiLoaded;
				a.parentNode.insertBefore(this.apiScriptNode, a)
			}
		}
	}
});
W.Experiments.registerExperimentComponent("NewComps", "New", {
	name: "experiments.wysiwyg.viewer.components.DisplayerNewComps",
	skinParts: clone(),
	traits: ["mobile.core.components.traits.LinkableComponent", "wysiwyg.viewer.components.traits.SelectableOption"],
	Class: {
		Extends: "wysiwyg.viewer.components.Displayer",
		_states: merge({
			selectState: ["selected", "unselected"]
		}),
		setSelected: function(a) {
			this.setState(a ? "selected" : "unselected", "selectState")
		}
	}
});
W.Experiments.registerExperimentComponent("Zoom", "New", {
	name: "experiments.wysiwyg.viewer.components.DisplayerZoom",
	skinParts: clone(),
	traits: ["mobile.core.components.traits.LinkableComponent"],
	Class: {
		Extends: "wysiwyg.viewer.components.Displayer",
		_onZoomClick: function(b) {
			if (b.rightClick === false && this._expandEnabled) {
				var c = this._data.get("id");
				var a = this._parentList.getData()["items"].indexOf("#" + c);
				this.injects().Commands.executeCommand("WViewerCommands.OpenZoom", {
					itemsList: this._parentList,
					currentIndex: a,
					getDisplayerDivFunction: this.injects().Viewer.getDefaultGetZoomDisplayerFunction("Image"),
					getHashPartsFunction: function(d, e) {
						this.injects().Data.getDataItem(d, function(f) {
							e({
								id: f.get("id"),
								title: f.get("title")
							})
						})
					}
				})
			}
		}
	}
});
W.Experiments.registerNewExperimentComponent("ToolTip", "New", {
	name: "wysiwyg.viewer.components.InfoTip",
	skinParts: {
		content: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		_states: {
			hidden: ["hidden", "visible"]
		},
		Binds: ["initialize", "_callTip", "_showTip", "_mouseOut", "_mouseIn", "_timerToClose", "_closeToolTipCmd", "_showToolTipCmd", "_stayInWindowBounds"],
		_mouseInside: false,
		_onCallerMouseMoveWasCalled: false,
		_shouldShowTooltipAfterTimout: false,
		_tipToShow: "",
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this.tipNode = this.getViewNode();
			this.tipNode.addEvent("click", this._handleEvent);
			this.tipNode.addEvent("mouseleave", this._mouseOut);
			this.tipNode.addEvent("mouseenter", this._mouseIn);
			document.addEvent("keyup", this._mouseOut);
			this.setState("hidden")
		},
		_closeToolTipCmd: function() {
			this._tipToShow = "";
			this._hideToolTipTimeOut = setTimeout(function() {
				if (!this._mouseInside) {
					this._closeTip()
				}
			}.bind(this), 150)
		},
		_showToolTipCmd: function(b, a) {
			this._shouldShowTooltipAfterTimout = true;
			this._tipToShow = b.id;
			clearTimeout(this._hideToolTipTimeOut);
			window.setTimeout(function() {
				if (this._shouldShowTooltipAfterTimout && this._tipToShow === b.id) {
					this._callTip(b, a)
				}
			}.bind(this), 100)
		},
		_handleEvent: function(d) {
			var a = d.target;
			if (a.get("href")) {
				d.preventDefault()
			}
			var b = this.getLogic();
			var c = a.get("action");
			if (c) {
				(b.actions[c].bind([b, a]))()
			}
		},
		_setToolTipValues: function(a) {
			this._skinParts.content.set("html", a)
		},
		_getToolTipCallerNode: function(a) {
			if (typeOf(a.source) == "element") {
				return a.source
			}
			return a.source.getViewNode()
		},
		_callTip: function(b, a) {
			this._resetToolTip();
			this._setToolTipValues(b.content);
			this._showTip(this._getToolTipCallerNode(a))
		},
		_resetToolTip: function() {
			this._skinParts.content.empty()
		},
		_showTip: function(a) {
			var c = this.getViewNode();
			var b = this._getPosition(a, c);
			c.setStyles({
				top: b.y,
				left: b.x[0],
				right: b.x[1]
			});
			this.removeState("hidden", "hidden");
			this._timerToClose(c, a)
		},
		_timerToClose: function(b, a) {
			var c;
			this.onCallerMove = function() {
				this._onCallerMouseMoveWasCalled = true;
				$(document.body).removeEvent("mousemove", this.onCallerMove)
			}.bind(this);
			$(document.body).addEvent("mousemove", this.onCallerMove);
			this.checkIfOut = function() {
				if (this._mouseInside || !this._onCallerMouseMoveWasCalled) {
					this.createTimer()
				} else {}
			}.bind(this);
			this.createTimer = function() {
				c = setTimeout(this.checkIfOut, 3000)
			};
			this.createTimer()
		},
		_getPosition: function(e, a) {
			var j = e.getPosition();
			var b = e.getHeight();
			var l = e.getWidth();
			var f = j.y;
			var g = j.x;
			var k = a.getHeight();
			var m = a.getWidth();
			var d = g - (m / 2);
			this._top = f - k;
			this._left = d;
			this._right = "auto";
			this._stayInWindowBounds(b, l, f, g, k);
			var n = a.offsetParent.getPosition();
			var c = n.y;
			var h = n.x;
			this._top = this._top - c;
			this._left = this._left - h;
			this._right = this._right + h;
			return {
				x: [this._left, this._right],
				y: this._top
			}
		},
		_stayInWindowBounds: function(e, d, a, c, h) {
			var b = window.innerWidth;
			var f = window.innerHeight;
			if (this._top - document.body.getScroll().y < 0) {
				var g = a + h;
				if (g > f + document.body.getScroll().y + h) {
					if (a < 0) {
						g = a
					} else {
						g = document.body.getScroll().y
					}
				}
				this._top = g > 0 ? g : 0
			}
			if (this._left < 0) {
				this._left = c
			} else {
				if (this._left > b) {
					this._left = "auto";
					this._right = c + d
				}
			}
		},
		_setState: function(a, b) {
			a ? this.setState(b) : this.removeState(b)
		},
		_closeTip: function() {
			this._shouldShowTooltipAfterTimout = false;
			this._onCallerMouseMoveWasCalled = false;
			this.setState("hidden");
			this.getViewNode().setStyles({
				top: 0,
				left: 0
			})
		},
		_mouseOut: function(a) {
			this._mouseInside = false;
			this._closeTip()
		},
		_mouseIn: function(a) {
			this._mouseInside = true
		}
	}
});
W.Experiments.registerExperimentComponent("WixApps", "New", {
	name: "experiments.wysiwyg.viewer.components.MatrixGallery",
	imports: ["experiments.wysiwyg.viewer.utils.ComponentSequencer"],
	skinParts: clone(),
	propertiesSchemaName: clone(),
	Class: {
		Extends: "wysiwyg.viewer.components.MatrixGallery"
	}
});
W.Experiments.registerExperimentComponent("Zoom", "New", {
	name: "experiments.wysiwyg.viewer.components.MediaZoom",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.viewer.components.MediaZoom",
		_currentScrollY: undefined,
		_opened: false,
		setGallery: function(d, c, b, a) {
			if (!this._validateArgs(d, c)) {
				return
			}
			this._opened = true;
			this._getDisplayerDivFunction = b;
			this._getHashPartsFunction = a;
			this.setDataItem(d);
			this.setListAndCurrentIndex(d, c);
			this._setNextPrevVisibility()
		},
		setImage: function(c, b, a) {
			var d = this.injects().Data.createDataItem({
				type: "list",
				items: [c]
			});
			this.setGallery(d, 0, b, a)
		},
		isZoomOpened: function() {
			return this._opened
		},
		_editModeChanged: function(b, a) {
			if (this._isDisposed) {
				return
			}
			this._closeZoom();
			this.injects().Viewer.removeZoomElement();
			this.dispose()
		},
		_closeZoom: function() {
			this.collapse();
			this.injects().Viewer.exitFullScreenMode();
			this.setDataItem(null);
			this.resetIterator();
			this._skinParts.virtualContainer.empty();
			this._skinParts.itemsContainer.empty();
			this._skinParts.dialogBox.setStyles({
				width: "100px"
			});
			this._opened = false;
			this.unlock();
			this._lastCurrentItem = null
		},
		_handleCurrentItemChange: function() {
			this.lock();
			var a = function(b) {
					var c = this.injects().Utils.hash.getHashParts();
					if (c.id === b.id && c.extData === b.extData) {
						this.showZoomImage()
					} else {
						this.injects().Utils.hash.setHash(b.id, b.title, b.extData)
					}
				}.bind(this);
			if (this._getHashPartsFunction) {
				this._getHashPartsFunction(this._currentItem, a)
			}
		},
		_renderCurrentDisplayer: function(d) {
			var a = this._skinParts.virtualContainer;
			for (var b = 0;
			b < a.childNodes.length;
			b++) {
				a.childNodes[b].destroy()
			}
			var c = this;
			this._getDisplayerDivFunction(this._currentItem, {
				x: this._imageMaxWidth,
				y: this._imageMaxHeight
			}, function(e) {
				e.insertInto(c._skinParts.virtualContainer);
				c._transitionToCurrentDisplayer()
			})
		},
		validateArgs: function(c, b) {
			if (!c || !typeof(b) == "number") {
				return false
			}
			var a = c.length;
			if (c.length < 1) {
				return false
			}
			if (b < 0 || b >= a) {
				LOG.reportError(wixErrors.EDITOR_INDEX_OUT_OF_RANGE, "wysiwyg.viewer.components.MediaZoom", "setGallery", b);
				return false
			}
			return true
		}
	}
});
W.Experiments.registerExperimentComponent("LazyShare", "New", {
	name: "experiments.viewer.components.MediaZoomDisplayer",
	traits: ["mobile.core.components.traits.LinkableComponent"],
	skinParts: {
		title: {
			type: "htmlElement",
			optional: false
		},
		description: {
			type: "htmlElement",
			optional: false
		},
		link: {
			type: "htmlElement",
			optional: true
		},
		imageWrapper: {
			type: "htmlElement",
			command: "WViewerCommands.MediaZoom.Next"
		},
		image: {
			type: "mobile.core.components.Image",
			dataRefField: "*",
			optional: false,
			hookMethod: "_addImageArgs"
		},
		lazyShare: {
			type: "wysiwyg.viewer.components.LazySocialPanel",
			optional: false
		}
	},
	Class: {
		Extends: "wysiwyg.viewer.components.MediaZoomDisplayer",
		Binds: ["_setCorrectImageSize"]
	}
});
W.Experiments.registerNewExperimentComponent("NewComps", "New", {
	name: "wysiwyg.viewer.components.MessageView",
	imports: [],
	skinParts: {
		blockingLayer: {
			type: "htmlElement"
		},
		closeButton: {
			type: "htmlElement"
		},
		favIcon: {
			type: "htmlElement"
		},
		header: {
			type: "htmlElement"
		},
		text: {
			type: "htmlElement"
		},
		dialog: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_onClose"],
		Static: {},
		initialize: function(c, a, b) {
			this.parent(c, a, b)
		},
		_onAllSkinPartsReady: function(a) {
			a.closeButton.addEvent("click", this._onClose)
		},
		_onDataChanged: function() {
			this.parent()
		},
		showMessage: function(a) {
			this.uncollapse();
			this._skinParts.headerText.set("text", a.msgTitle);
			this._skinParts.text.set("text", a.msgBody);
			this._visible = true
		},
		visible: function() {
			return this._visible
		},
		_onClose: function() {
			this.collapse();
			this._visible = false;
			this.fireEvent("complete")
		}
	}
});
W.Experiments.registerExperimentComponent("GridLines", "New", {
	name: "experiments.wysiwyg.viewer.components.PageGroupGridLinesNew",
	skinParts: merge({
		grid: undefined
	}),
	Class: {
		Extends: "wysiwyg.viewer.components.PageGroup",
		_states: [],
		Binds: ["onCurrentPageResize", "_resizePage", "_onTransitionFinished"],
		toggleGrid: function() {},
		refreshGrid: function() {},
		_setHorizontalGrid: function() {},
		_setVerticalGrid: function() {},
		_resizePage: function(a) {
			if (!a) {
				a = this._currentPage.getLogic().getHeight()
			}
			this.setHeight(a);
			W.Layout.enforceAnchors([this])
		}
	}
});
W.Experiments.registerExperimentComponent("MasterPage", "New", {
	name: "experiments.wysiwyg.viewer.components.PagesContainer",
	skinParts: {
		inlineContent: {
			type: "htmlElement"
		},
		screenWidthBackground: {
			type: "htmlElement"
		},
		bg: {
			type: "htmlElement"
		},
		centeredContent: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.viewer.components.PagesContainer",
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this.setMaxH(this.imports.Page.MAX_HEIGHT);
			this.setMinH(this.imports.Page.MIN_HEIGHT);
			this._resizableSides = [W.BaseComponent.ResizeSides.BOTTOM]
		},
		getSelectableX: function() {
			return this.parent()
		},
		getSelectableWidth: function() {
			return this.parent()
		}
	}
});
W.Experiments.registerExperimentComponent("Fix3713", "New", {
	name: "experiments.wysiwyg.viewer.components.PaginatedGridGallery",
	skinParts: clone(),
	imports: ["wysiwyg.viewer.utils.MatrixTransitions", "wysiwyg.viewer.utils.GalleryUtils", "mobile.core.utils.LinkUtils"],
	traits: ["wysiwyg.viewer.components.traits.GalleryAutoplay"],
	propertiesSchemaName: clone(),
	Class: {
		Extends: "wysiwyg.viewer.components.PaginatedGridGallery",
		_getNextPageItemIndex: function() {
			var a = this._currentItemIndex + this._pageItemsCount;
			if (a >= this._numItems) {
				a = 0
			}
			return a
		},
		_getPrevPageItemIndex: function() {
			var a = this._currentItemIndex - this._pageItemsCount;
			if (a < 0) {
				a = (this._getTotalPageCount() - 1) * this._pageItemsCount
			}
			return a
		},
		_getTotalPageCount: function() {
			var a = Math.floor(this._numItems / this._pageItemsCount);
			if ((this._numItems % this._pageItemsCount) > 0) {
				a++
			}
			return a
		},
		_getCounterText: function(a, c) {
			var b = Math.floor(a / this._pageItemsCount);
			var d = this._getTotalPageCount();
			return String(b + 1) + "/" + String(d)
		}
	}
});
W.Experiments.registerExperimentComponent("WixApps", "New", {
	name: "experiments.wysiwyg.viewer.components.PaginatedGridGalleryWixApps",
	skinParts: clone(),
	imports: ["wysiwyg.viewer.utils.MatrixTransitions", "wysiwyg.viewer.utils.GalleryUtils", "mobile.core.utils.LinkUtils"],
	traits: ["wysiwyg.viewer.components.traits.GalleryAutoplay"],
	propertiesSchemaName: clone(),
	Class: {
		Extends: "wysiwyg.viewer.components.PaginatedGridGallery",
		Binds: ["_onRollOverViewCreated"],
		_rolloverSequencer: null,
		_hasRollOver: true,
		initialize: function(c, a, b) {
			b = b || {};
			this.parent(c, a, b);
			this._transitionUtils = new this.imports.MatrixTransitions();
			this._linkUtils = new this.imports.LinkUtils();
			this._view.addEvent(Constants.CoreEvents.MOUSE_MOVE, this._onMouseMove);
			this._view.addEvent(Constants.CoreEvents.MOUSE_OUT, this._onRollOut);
			if (b.sequencingHook === undefined) {
				this._sequencer.resolveItem = function() {
					return {
						comp: "wysiwyg.viewer.components.ImageLite",
						skin: "mobile.core.skins.InlineSkin"
					}
				}
			}
			if (b.rolloverHook) {
				this._rolloverSequencer = new this.imports.ComponentSequencer();
				this._rolloverSequencer.resolveItem = b.rolloverHook;
				this._rolloverSequencer.addEvent("componentSetup", this._onRollOverViewCreated)
			}
			if (b.sequencingHook && !b.rolloverHook) {
				this._hasRollOver = false
			}
		},
		getSequencer: function() {
			return this._sequencer
		},
		_translateRefList: function(d) {
			var h;
			var a = [];
			var c;
			var g;
			var f = this._skinParts.itemsContainer.children;
			var b = typeOf(d[0]);
			d = d.slice(0);
			for (var e = 0;
			e < f.length;
			e++) {
				h = f[e];
				c = h.getLogic().getDataItem();
				g = (b === "string") ? "#" + c.get("id") : c;
				if (d.contains(g)) {
					a.push(h);
					d.splice(d.indexOf(g), 1)
				}
			}
			return a
		},
		_updateDisplayerInfo: function(a) {
			if (this._skinParts.rolloverHolder && this._rolloverSequencer) {
				this._rolloverSequencer.createComponents(this._skinParts.rolloverHolder, [a])
			} else {
				if (a && a.getData && "title" in a.getData() && "description" in a.getData()) {
					this._skinParts.title.set("text", a.get("title"));
					this._skinParts.description.set("text", a.get("description"))
				}
			}
		},
		_onRollOverViewCreated: function(a) {
			this._setupItem(a.compView)
		},
		_onMouseMove: function(b) {
			if (this._transitionPending === true) {
				return
			}
			var c = this._findDisplayerFromPosition(b.page);
			if (c && this._skinParts.rolloverHolder && this._hasRollOver) {
				if (this._highlightedDisplayer !== c) {
					this._highlightedDisplayer = c;
					var a = c.getCoordinates(this._skinParts.rolloverHolder.getParent());
					this._skinParts.rolloverHolder.setStyles({
						visibility: "visible",
						position: "absolute",
						padding: 0,
						left: a.left,
						top: a.top,
						width: a.width,
						height: a.height
					});
					this.setState("idle");
					window.requestAnimFrame(function() {
						if (this._highlightedDisplayer) {
							this._updateDisplayerInfo(c.getLogic().getDataItem());
							var e = this._highlightedDisplayer.getLogic().getDataItem();
							if (e.getType && e.getType === "Image") {
								var d = this.getSkinPart("link");
								this._linkUtils.linkifyElement(this, d, e, true)
							}
							this.setState("rollover")
						}
					}.bind(this))
				}
			} else {
				this._resetRollOver()
			}
		}
	}
});
W.Experiments.registerExperimentComponent("Zoom", "New", {
	name: "experiments.wysiwyg.viewer.components.PaginatedGridGalleryZoom",
	skinParts: clone(),
	traits: ["wysiwyg.viewer.components.traits.GalleryAutoplay"],
	imports: ["wysiwyg.viewer.utils.MatrixTransitions", "wysiwyg.viewer.utils.GalleryUtils", "mobile.core.utils.LinkUtils"],
	propertiesSchemaName: "PaginatedGridGalleryProperties",
	Class: {
		Extends: "wysiwyg.viewer.components.PaginatedGridGallery",
		_onClick: function(d) {
			var c;
			if (d.rightClick === false && this.getComponentProperty("expandEnabled") === true) {
				var e = this._highlightedDisplayer || this._findDisplayer(d.target);
				if (e) {
					c = e.getLogic().getDataItem();
					var f = c.get("id");
					var b = this._data.get("items");
					var a = b.indexOf("#" + f);
					this.injects().Commands.executeCommand("WViewerCommands.OpenZoom", {
						itemsList: this._data,
						currentIndex: a,
						getDisplayerDivFunction: this.injects().Viewer.getDefaultGetZoomDisplayerFunction("Image"),
						getHashPartsFunction: function(g, h) {
							this.injects().Data.getDataItem(g, function(j) {
								h({
									id: j.get("id"),
									title: j.get("title")
								})
							})
						}
					})
				}
			}
		}
	}
});
W.Experiments.registerExperimentComponent("GridLines", "New", {
	name: "experiments.wysiwyg.viewer.components.ScreenWidthContainer",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.viewer.components.ScreenWidthContainer",
		_onResize: function() {
			this.parent()
		}
	}
});
W.Experiments.registerNewExperimentComponent("NewComps", "New", {
	name: "wysiwyg.viewer.components.SelectableSliderGallery",
	skinParts: {
		imageItem: {
			type: "wysiwyg.viewer.components.Displayer",
			repeater: true,
			container: "itemsContainer",
			dataRefField: "items"
		},
		itemsContainer: {
			type: "htmlElement"
		},
		swipeLeftHitArea: {
			type: "htmlElement"
		},
		swipeRightHitArea: {
			type: "htmlElement"
		}
	},
	Class: {
		Extends: "wysiwyg.viewer.components.SliderGallery",
		_selectedItem: null,
		initialize: function(c, a, b) {
			this._expandEnabled = false;
			this._initialSelectedIndex = 0;
			if (b.selectedIndex) {
				this._initialSelectedIndex = b.selectedIndex
			}
			this.parent(c, a, b)
		},
		_setupDisplayer: function(a, b) {
			this.parent(a);
			if (b === this._initialSelectedIndex) {
				this.setSelectedState(a)
			}
			a.addEvent("itemSelected", function() {
				this.setSelectedState(a);
				this.fireEvent("imageSelected", a.getDataItem())
			}.bind(this))
		},
		setSelectedState: function(a) {
			if (this._selectedItem) {
				if (this._selectedItem === a) {
					return
				}
				this._selectedItem.setSelected(false)
			}
			this._selectedItem = a;
			this._selectedItem.setSelected(true)
		}
	}
});
W.Experiments.registerExperimentComponent("NewComps", "New", {
	name: "experiments.wysiwyg.viewer.components.SiteButton",
	Class: {
		Extends: "wysiwyg.viewer.components.SiteButton",
		_onMouseDown: function(a) {
			if (this.isEnabled() && this.getState() != "selected") {
				this.setState("pressed");
				this.fireEvent(Constants.CoreEvents.MOUSE_DOWN, a)
			}
		}
	}
});
W.Experiments.registerExperimentComponent("SliderAutoPlay", "New", {
	name: "experiments.viewer.components.SliderGallery",
	skinParts: {
		imageItem: {
			type: "wysiwyg.viewer.components.Displayer",
			repeater: true,
			container: "itemsContainer",
			dataRefField: "items"
		},
		itemsContainer: {
			type: "htmlElement"
		},
		swipeLeftHitArea: {
			type: "htmlElement"
		},
		swipeRightHitArea: {
			type: "htmlElement"
		}
	},
	propertiesSchemaName: "SliderGalleryProperties",
	traits: ["mobile.core.components.traits.SwipeSupport", "wysiwyg.viewer.components.traits.GalleryAutoplay"],
	Class: {
		EDITOR_META_DATA: {
			general: {
				settings: true,
				design: true
			},
			custom: [{
				label: "GALLERY_ORGANIZE_PHOTOS",
				command: "WEditorCommands.OpenListEditDialog",
				commandParameter: {
					galleryConfigID: "SliderGallery"
				},
				commandParameterDataRef: "SELF"
			}]
		},
		Extends: "wysiwyg.viewer.components.SliderGallery",
		Binds: ["gotoNext", "gotoPrev", "_updateMovementNoLoop", "_updateMovementInLoop", "_stopMovement"],
		_states: {
			autoplay: ["on", "off"]
		},
		_itemHolder: null,
		_itemWidth: 0,
		_itemHeight: 0,
		_gap: 20,
		_movementSpeed: 0,
		_shiftOffset: 0,
		_shiftOffsetMax: 0,
		_shiftOffsetMin: 0,
		_maxSpeed: 0.05,
		_aspectRatio: 0,
		_movementActive: false,
		_debugMode: false,
		_imageMode: "",
		_lastUpdate: NaN,
		_updateMovementFunc: null,
		_loop: false,
		_itemsHolderSize: 0,
		_contentOverflow: false,
		_segment: 0,
		_isZoomed: false,
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this.addEvent("resizeEnd", this._onResizeEnd);
			this.injects().Commands.registerCommandListenerByName("WPreviewCommands.WEditModeChanged", this, this._onChangeMode, null)
		},
		_onChangeMode: function(a) {
			if (a !== "PREVIEW") {
				this._stopMovement()
			}
		},
		_onResizeEnd: function() {
			this._recalcItemSize();
			this._allRepeatersReady = false;
			this._renderIfReady()
		},
		_recalcItemSize: function() {
			if (this._skinParts) {
				this._itemHeight = Math.floor(this._skinParts.itemsContainer.getHeight());
				this._itemWidth = Math.floor(this._itemHeight * this._aspectRatio)
			}
		},
		_processDataRefs: function(a) {
			if (this._loop === true) {
				return a.concat(a)
			} else {
				return a
			}
		},
		_onDataChange: function(a) {
			this._enableMovement(false);
			this._aspectRatio = this._parseAspectRatioPreset(this.getComponentProperty("aspectRatioPreset"));
			if (this._aspectRatio) {
				this.setComponentProperty("aspectRatio", this._aspectRatio, true)
			} else {
				this._aspectRatio = parseFloat(this.getComponentProperty("aspectRatio"))
			}
			this._loop = this.getComponentProperty("loop") === true;
			this._maxSpeed = parseInt(this.getComponentProperty("maxSpeed"));
			this._imageMode = String(this.getComponentProperty("imageMode"));
			this._gap = parseInt(this.getComponentProperty("margin"));
			this.parent()
		},
		_parseAspectRatioPreset: function(c) {
			var a = c.split(":");
			var b = 0;
			if (a.length == 2) {
				b = parseFloat(a[0]) / parseFloat(a[1])
			}
			return b
		},
		_onAllSkinPartsReady: function() {
			this._itemHolder = this._skinParts.itemsContainer;
			this._itemHolder.setStyles({
				position: "absolute",
				left: "0px",
				right: "0px",
				top: "0px",
				bottom: "0px",
				"white-space": "nowrap",
				"-webkit-transform": "translateZ(0)"
			});
			this._skinParts.itemsContainer.setStyles({
				overflow: (this._debugMode) ? "visible" : "hidden",
				border: (this._debugMode) ? "1px solid black" : "0"
			});
			this.injects().Commands.registerCommandListenerByName("WViewerCommands.SetMediaZoomImage", this, this._onMediaZoomClicked, null);
			this.injects().Commands.registerCommandListenerByName("WViewerCommands.MediaZoom.Close", this, this._onMediaZoomClosed, null);
			this._skinParts.itemsContainer.addEvent(Constants.CoreEvents.MOUSE_OVER, function() {
				this._stopMovement(1)
			}.bind(this));
			if (this.getComponentProperties().getData().autoplay) {
				this._hideSwipeArea()
			} else {
				this._showSwipeArea()
			}
			this.injects().ComponentData.addEvent(Constants.DataEvents.DATA_CHANGED, function(a) {
				a.getData().autoplay ? this._hideSwipeArea() : this._showSwipeArea()
			}.bind(this));
			this.injects().ComponentData.addEvent(Constants.DataEvents.DATA_CHANGED, function() {
				this._bindAutoPlayControls()
			}.bind(this))
		},
		_showSwipeArea: function() {
			this._skinParts.swipeLeftHitArea.uncollapse();
			this._skinParts.swipeRightHitArea.uncollapse();
			this._bindSwipeAreas();
			this._unbindAutoPlayControls()
		},
		_hideSwipeArea: function() {
			this._skinParts.swipeLeftHitArea.collapse();
			this._skinParts.swipeRightHitArea.collapse();
			this._unbindSwipeAreas();
			this._bindAutoPlayControls()
		},
		_bindSwipeAreas: function() {
			this.setState("off", "autoplay");
			this._skinParts.swipeLeftHitArea.addEvent(Constants.CoreEvents.MOUSE_MOVE, this.gotoPrev);
			this._skinParts.swipeRightHitArea.addEvent(Constants.CoreEvents.MOUSE_MOVE, this.gotoNext);
			this._skinParts.swipeLeftHitArea.addEvent(Constants.CoreEvents.MOUSE_OUT, this._stopMovement);
			this._skinParts.swipeRightHitArea.addEvent(Constants.CoreEvents.MOUSE_OUT, this._stopMovement)
		},
		_unbindSwipeAreas: function() {
			this.setState("on", "autoplay");
			this._skinParts.swipeLeftHitArea.removeEvent(Constants.CoreEvents.MOUSE_MOVE, this.gotoPrev);
			this._skinParts.swipeRightHitArea.removeEvent(Constants.CoreEvents.MOUSE_MOVE, this.gotoNext);
			this._skinParts.swipeLeftHitArea.removeEvent(Constants.CoreEvents.MOUSE_OUT, this._stopMovement);
			this._skinParts.swipeRightHitArea.removeEvent(Constants.CoreEvents.MOUSE_OUT, this._stopMovement)
		},
		_bindAutoPlayControls: function() {
			if (this.getComponentProperties().getData().autoPlayDirection == "LTR") {
				this._skinParts.itemsContainer.removeEvent(Constants.CoreEvents.MOUSE_OUT, this.gotoNext);
				this._skinParts.itemsContainer.addEvent(Constants.CoreEvents.MOUSE_OUT, this.gotoPrev)
			} else {
				this._skinParts.itemsContainer.removeEvent(Constants.CoreEvents.MOUSE_OUT, this.gotoPrev);
				this._skinParts.itemsContainer.addEvent(Constants.CoreEvents.MOUSE_OUT, this.gotoNext)
			}
		},
		_unbindAutoPlayControls: function() {
			this._view.removeEvent(Constants.CoreEvents.MOUSE_OUT, this.gotoNext);
			this._view.removeEvent(Constants.CoreEvents.MOUSE_OUT, this.gotoPrev);
			this._view.addEvent(Constants.CoreEvents.MOUSE_OUT, this._stopMovement)
		},
		_onMediaZoomClicked: function() {
			this._isZoomed = true;
			this._stopMovement(0)
		},
		_onMediaZoomClosed: function() {
			this._isZoomed = false;
			this._enableMovement(true);
			if (this.getComponentProperties().getData().autoplay) {
				if (this.getComponentProperties().getData().autoPlayDirection == "LTR") {
					this.gotoPrev()
				} else {
					this.gotoNext()
				}
				return
			}
			if (this._skinParts.zoom) {
				this._skinParts.zoom.fireEvent("mosuseout")
			}
		},
		getAcceptableDataTypes: function() {
			return ["ImageList"]
		},
		render: function() {
			var a;
			this._recalcItemSize();
			this._updateMovementFunc = (this._loop === true) ? this._updateMovementInLoop : this._updateMovementNoLoop;
			if (this._loop === false) {
				this._segment = 0
			}
			this._shiftOffset = 0;
			this._itemsHolderSize = 0;
			for (a = 0;
			a < this._itemHolder.children.length;
			a++) {
				this._setupDisplayer(this._itemHolder.children[a].getLogic());
				this._itemsHolderSize += this._itemHolder.children[a].getLogic().getWidth() + this._gap
			}
			this._checkItemsVisibility();
			this._applyShiftOffset()
		},
		_checkItemsVisibility: function() {
			var b = this._itemHolder.children.length / 2;
			var a = (this._loop === true ? this._itemsHolderSize / 2 : this._itemsHolderSize);
			this._contentOverflow = (a > this._skinParts.itemsContainer.getWidth());
			if (this._loop === true && this._contentOverflow === false) {
				this._segment = 0
			}
			for (i = 0;
			i < this._itemHolder.children.length;
			i++) {
				if (this._loop === true && this._contentOverflow === false && i >= b) {
					this._itemHolder.children[i].setStyle("opacity", "0.0")
				} else {
					this._itemHolder.children[i].setStyle("opacity", "1.0")
				}
			}
		},
		_setupDisplayer: function(a) {
			a.invalidateSize();
			a.setSize(this._itemWidth, this._itemHeight, this._imageMode);
			a.setOwner(this);
			a.getViewNode().setStyles({
				position: "static",
				display: "inline-block",
				"vertical-align": "top",
				"margin-right": String(this._gap) + "px",
				"margin-left": "0px",
				opacity: "1.0"
			})
		},
		_moveToRight: function() {
			if (this._contentOverflow) {
				this._setMovementSpeed(this._maxSpeed);
				this._enableMovement(true)
			}
		},
		_moveToLeft: function() {
			if (this._contentOverflow) {
				this._setMovementSpeed(-this._maxSpeed);
				this._enableMovement(true)
			}
		},
		gotoNext: function() {
			if (this._isZoomed) {
				return
			}
			if (this._contentOverflow) {
				this._setMovementSpeed(this._maxSpeed);
				this._enableMovement(true)
			}
		},
		gotoPrev: function() {
			if (this._isZoomed) {
				return
			}
			if (this._contentOverflow) {
				this._setMovementSpeed(-this._maxSpeed);
				this._enableMovement(true)
			}
		},
		_enableMovement: function(a) {
			if (a === true && this._movementActive === false) {
				window.requestAnimFrame(this._updateMovementFunc)
			}
			if (a === true) {
				if (!this._movementActive) {
					this._shiftOffsetMin = -(this._itemsHolderSize - this._skinParts.itemsContainer.getWidth() - this._gap);
					this._movementActive = true
				}
			} else {
				this._movementActive = false;
				this._movementSpeed = 0
			}
		},
		_stopMovement: function(a) {
			var b = this.injects().Utils.Tween;
			b.to(this, a === undefined ? 1 : a, {
				_movementSpeed: 0,
				onComplete: function() {
					this.getState("autoplay") === "off" ? this._enableMovement(false) : this._enableMovement(true)
				}.bind(this)
			})
		},
		_setMovementSpeed: function(a) {
			var b = this.injects().Utils.Tween;
			b.to(this, 1, {
				_movementSpeed: a
			})
		},
		_calcMovementCoeficient: function() {
			var b = 1;
			var a = new Date().getTime();
			if (!isNaN(this._lastUpdate)) {
				b = ((a - this._lastUpdate) / 16)
			}
			this._lastUpdate = a;
			return 1
		},
		_updateMovementNoLoop: function() {
			var a = this._calcMovementCoeficient();
			if (this._movementActive) {
				this._shiftOffset += -this._movementSpeed * a;
				if (this._shiftOffset > this._shiftOffsetMax) {
					this._shiftOffset = this._shiftOffsetMax;
					this._enableMovement(false)
				}
				if (this._shiftOffset < this._shiftOffsetMin) {
					this._shiftOffset = this._shiftOffsetMin;
					this._enableMovement(false)
				}
				this._applyShiftOffset()
			}
			if (this._movementActive) {
				window.requestAnimFrame(this._updateMovementFunc)
			}
		},
		_updateMovementInLoop: function() {
			var a = this._calcMovementCoeficient();
			if (this._movementActive) {
				this._shiftOffset += -this._movementSpeed * a;
				if (this._movementSpeed < 0) {
					this._segment = 0;
					if (this._shiftOffset > (this._shiftOffsetMax)) {
						this._shiftOffset -= this._itemsHolderSize / 2
					}
				}
				if (this._movementSpeed > 0) {
					this._segment = 1;
					if (this._shiftOffset < 0) {
						this._shiftOffset += this._itemsHolderSize / 2
					}
				}
				this._applyShiftOffset()
			}
			if (this._movementActive) {
				window.requestAnimFrame(this._updateMovementFunc)
			}
		},
		_applyShiftOffset: function() {
			var a = this._shiftOffset - (this._segment * this._itemsHolderSize / 2);
			if (this._itemHolder.children.length > 0) {
				this._itemHolder.children[0].setStyle("margin-left", String(Math.floor(a)) + "px")
			}
		}
	}
});
W.Experiments.registerExperimentComponent("NewComps", "New", {
	name: "experiments.wysiwyg.viewer.components.SliderGallery",
	Class: {
		Extends: "wysiwyg.viewer.components.SliderGallery",
		render: function() {
			var a;
			this._recalcItemSize();
			this._updateMovementFunc = (this._loop === true) ? this._updateMovementInLoop : this._updateMovementNoLoop;
			if (this._loop === false) {
				this._segment = 0
			}
			this._shiftOffset = 0;
			this._itemsHolderSize = 0;
			for (a = 0;
			a < this._itemHolder.children.length;
			a++) {
				this._setupDisplayer(this._itemHolder.children[a].getLogic(), a);
				this._itemsHolderSize += this._itemHolder.children[a].getLogic().getWidth() + this._gap
			}
			this._checkItemsVisibility();
			this._applyShiftOffset()
		},
		_setupDisplayer: function(a, b) {
			a.invalidateSize();
			a.setSize(this._itemWidth, this._itemHeight, this._imageMode);
			a.setOwner(this);
			a.getViewNode().setStyles({
				position: "static",
				display: "inline-block",
				"vertical-align": "top",
				"margin-right": String(this._gap) + "px",
				"margin-left": "0px",
				opacity: "1.0"
			})
		}
	}
});
W.Experiments.registerNewExperimentComponent("NewComps", "New", {
	name: "wysiwyg.viewer.components.TableComponent",
	skinParts: {
		tableBody: {
			type: "htmlElement"
		},
		tableHeader: {
			type: "htmlElement",
			optional: true
		},
		tableFooter: {
			type: "htmlElement",
			optional: true
		},
		table: {
			type: "htmlElement",
			optional: true
		}
	},
	imports: ["experiments.wysiwyg.viewer.utils.ComponentSequencer"],
	propertiesSchemaName: "TableComponentProperties",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_createBodyRow", "_createHeaderCell", "_createFooterCell", "_createBodyCell", "_addSpacerRow"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._rowsSequencer = new this.imports.ComponentSequencer();
			this._rowsSequencer.resolveItem = this._createBodyRow;
			this._rowsSequencer.addEvent("productionFinished", this._addSpacerRow);
			this._bodyCellSequencingHook = b.SequencingHook;
			this._headerFooterCellSequencingHook = b.HeaderFooterSequencingHook || b.SequencingHook
		},
		_onAllSkinPartsReady: function(a) {
			this.parent(a);
			var b = this.getComponentProperty("minHeight");
			if (b) {
				this.setMinH(b)
			}
			if (this.getDataItem()) {
				this._populateTable()
			}
		},
		_onComponentPropertyChange: function(b, a) {
			if (b === "minHeight") {
				this.setMinH(a)
			}
		},
		setMinH: function(a) {
			if (this._skinParts) {
				this._skinParts.table.setStyle("height", a + "px")
			}
			this.parent(a);
			this.setHeight(a)
		},
		_onDataChange: function(a, c, b) {
			if (this._skinParts) {
				if (c == "minHeight") {
					this.setMinH(b.minHeight || b)
				} else {
					this._populateTable();
					this.fireEvent("autoSized", {
						ignoreLayout: false
					})
				}
			}
			this.parent(a, c, b)
		},
		_populateTable: function() {
			var a = this.getDataItem();
			this._rowsSequencer.createComponents(this._skinParts.tableBody, a.get("items"));
			if (a.hasField("header")) {
				var c = this._createRow(a.get("header"), this._createHeaderCell);
				this._skinParts.tableHeader.empty().adopt(c)
			} else {
				this._skinParts.tableHeader.removeFromDOM()
			}
			if (a.hasField("footer")) {
				var b = this._createRow(a.get("footer"), this._createFooterCell);
				this._skinParts.tableFooter.empty().adopt(b)
			} else {
				this._skinParts.tableFooter.removeFromDOM()
			}
		},
		_createBodyRow: function(a) {
			return this._createRow(a, this._createBodyCell)
		},
		_createRow: function(d, a) {
			var c = new Element("tr");
			var b = new this.imports.ComponentSequencer();
			b.resolveItem = a;
			b.createComponents(c, d);
			return c
		},
		_createHeaderCell: function(a, b, c) {
			return this._createCell(a, b, c, "th", this._headerFooterCellSequencingHook)
		},
		_createFooterCell: function(a, b, c) {
			return this._createCell(a, b, c, "td", this._headerFooterCellSequencingHook)
		},
		_createBodyCell: function(a, b, c) {
			return this._createCell(a, b, c, "td", this._bodyCellSequencingHook)
		},
		_createCell: function(a, b, d, c, g) {
			var f = new Element(c);
			var e = g(a, b, d);
			if (e) {
				f.grab(e)
			}
			return f
		},
		_addSpacerRow: function() {
			var a = new Element("tr", {
				"class": "spacer"
			});
			var b = new Element("td", {
				colspan: "100%"
			});
			a.adopt(b);
			this._skinParts.tableBody.adopt(a);
			this.fireEvent("autoSized", {
				ignoreLayout: false
			})
		},
		getAcceptableDataTypes: function() {
			return ["list", "Table"]
		}
	}
});
W.Experiments.registerExperimentComponent("WixApps", "New", {
	name: "experiments.wysiwyg.viewer.components.VerticalRepeater",
	skinParts: clone(),
	imports: ["experiments.wysiwyg.viewer.utils.ComponentSequencer"],
	Class: {
		Extends: "wysiwyg.viewer.components.VerticalRepeater"
	}
});
W.Experiments.registerExperimentComponent("Zoom", "New", {
	name: "experiments.wysiwyg.viewer.components.WixAds",
	skinParts: clone(),
	Class: {
		Extends: "wysiwyg.viewer.components.WixAds",
		initialize: function(d, b, c) {
			this.parent(d, b, c);
			var a = this.injects().Commands;
			a.registerCommandListenerByName("WPreviewCommands.WEditModeChanged", this, this._onModeChange);
			a.registerCommandListenerByName("WViewerCommands.OpenZoom", this, function() {
				this._showHideAds(false)
			});
			a.registerCommandListenerByName("WViewerCommands.MediaZoom.Close", this, function() {
				this._showHideAds(!this._isPremium())
			});
			this.injects().Viewer.addHeightChangeCallback(this._getAdHeight)
		}
	}
});
W.Experiments.registerNewExperimentComponent("NewComps", "New", {
	name: "wysiwyg.viewer.components.inputs.ColorOption",
	skinParts: {
		tooltip: {
			type: "wysiwyg.viewer.components.InfoTip"
		}
	},
	Class: {
		Extends: "wysiwyg.viewer.components.inputs.TextOption",
		_onAllSkinPartsReady: function() {
			this.getViewNode().setStyle("background-color", this.getDataItem().get("text"));
			this._initializeTooTip(this.getViewNode())
		}
	}
});
W.Experiments.registerNewExperimentComponent("NewComps", "New", function() {
	return {
		name: "wysiwyg.viewer.components.inputs.NumberInput",
		propertiesSchemaName: "NumberInputProperties",
		Class: {
			Extends: "wysiwyg.viewer.components.inputs.TextInput",
			_prevValue: null,
			_onAllSkinPartsReady: function() {
				this.parent();
				this._prevValue = this._skinParts.input.get("value");
				this._skinParts.input.setAttribute("min", this.getComponentProperty("minValue"));
				this._skinParts.input.setAttribute("max", this.getComponentProperty("maxValue"))
			},
			_changeEventHandler: function(c) {
				if (c.code && !W.Utils.isInputKey(c.code)) {
					return
				}
				var b = this._getValue();
				if (!b) {
					b = this._prevValue
				} else {
					if (b < this.getComponentProperty("minValue")) {
						b = this.getComponentProperty("minValue")
					} else {
						if (b > this.getComponentProperty("maxValue")) {
							b = this.getComponentProperty("maxValue")
						}
					}
				}
				if (b != this._prevValue) {
					this._prevValue = b;
					b = this.injects().Utils.convertToHtmlText(b);
					var a = {
						value: b,
						origEvent: c,
						compLogic: this
					};
					this.fireEvent("inputChanged", a)
				}
			}
		}
	}
});
W.Experiments.registerNewExperimentComponent("NewComps", "New", {
	name: "wysiwyg.viewer.components.inputs.OptionsListInput",
	skinParts: {
		itemsContainer: {
			type: "htmlElement"
		}
	},
	traits: ["wysiwyg.viewer.components.traits.ValidationSettings"],
	imports: ["experiments.wysiwyg.viewer.utils.ComponentSequencer"],
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_onItemSelected"],
		_selectedItem: null,
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._sequencer = new this.imports.ComponentSequencer();
			if (b) {
				this._sequencer.resolveItem = function() {
					return {
						comp: b.compType,
						skin: b.compSkin
					}
				}
			}
		},
		_onAllSkinPartsReady: function() {},
		_preventRenderOnDataChange: function(a, c, b) {
			return c == "selected"
		},
		_prepareForRender: function() {
			this._sequencer.addEvent("productionFinished", function(a) {
				this._onSequencerFinished(a)
			}.bind(this));
			this._sequencer.createComponents(this.getViewNode(), this.getDataItem().get("items"));
			return true
		},
		_onSequencerFinished: function(b) {
			var a = b.elements;
			a.forEach(function(d) {
				var c = d.getLogic();
				c.addEvent("itemSelected", this._onItemSelected);
				if (c.getDataItem() === this.getDataItem().get("selected")) {
					this._selectedItem = c;
					this._selectedItem.setSelected(true)
				}
			}.bind(this))
		},
		_onItemSelected: function(a) {
			if (this._selectedItem) {
				if (this._selectedItem === a) {
					return
				}
				this._selectedItem.setSelected(false)
			}
			this._selectedItem = a;
			this._selectedItem.setSelected(true);
			var b = this._selectedItem.getDataItem();
			this.getDataItem().set("selected", b);
			this.fireEvent("selectionChanged", b)
		},
		getAcceptableDataTypes: function() {
			return ["SelectableList"]
		}
	}
});
W.Experiments.registerNewExperimentComponent("NewComps", "New", {
	name: "wysiwyg.viewer.components.inputs.TextAreaInput",
	skinParts: {
		textarea: {
			type: "htmlElement"
		}
	},
	traits: ["wysiwyg.viewer.components.traits.ValidationSettings"],
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		states: {
			validation: ["valid", "invalid"]
		},
		Binds: ["_changeEventHandler", "_fireBlur", "_fireKeyUp", "_checkMaxLength"],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this.addEvent(this.VALID_STATE_CHANGED_EVENT, function(d) {
				this.setState(d ? "valid" : "invalid", "validation")
			}.bind(this));
			b = b || {};
			this._maxLength = b.maxLength || 50
		},
		_onAllSkinPartsReady: function() {
			var a = this._skinParts.textarea;
			a.set("value", this.getDataItem().get("text"));
			if (Browser.ie) {
				this._skinParts.textarea.addEvent(Constants.CoreEvents.KEY_UP, this._checkMaxLength)
			}
			this.setMaxLength(this._maxLength);
			this._listenToInput()
		},
		_checkMaxLength: function(d) {
			var a = this._skinParts.textarea.get("value");
			var b = a.length;
			if (a.length > this._maxLength) {
				var c = this._maxLength - b;
				a = a.slice(0, c);
				this._skinParts.textarea.set("value", a)
			}
		},
		setMaxLength: function(a) {
			this._maxLength = a;
			this._skinParts.textarea.setProperty("maxlength", a)
		},
		_changeEventHandler: function(b) {
			if (b.code == 13) {
				return false
			}
			if (b.code && !W.Utils.isInputKey(b.code)) {
				return
			}
			var a = this._getValue();
			a = this.injects().Utils.convertToHtmlText(a);
			this.getDataItem().set("text", b.value)
		},
		_fireBlur: function(a) {
			this.fireEvent(Constants.CoreEvents.BLUR, a)
		},
		_fireKeyUp: function(a) {
			this.fireEvent(Constants.CoreEvents.KEY_UP, a)
		},
		_listenToInput: function() {
			this._skinParts.textarea.addEvent(Constants.CoreEvents.KEY_UP, this._changeEventHandler);
			this._skinParts.textarea.addEvent(Constants.CoreEvents.KEY_UP, this._fireKeyUp);
			this._skinParts.textarea.addEvent(Constants.CoreEvents.CUT, this._changeEventHandler);
			this._skinParts.textarea.addEvent(Constants.CoreEvents.PASTE, this._changeEventHandler);
			this._skinParts.textarea.addEvent(Constants.CoreEvents.CHANGE, this._changeEventHandler);
			this._skinParts.textarea.addEvent(Constants.CoreEvents.BLUR, this._fireBlur)
		},
		_stopListeningToInput: function() {
			this._skinParts.textarea.removeEvent(Constants.CoreEvents.KEY_UP, this._changeEventHandler);
			this._skinParts.textarea.removeEvent(Constants.CoreEvents.KEY_UP, this._fireKeyUp);
			this._skinParts.textarea.removeEvent(Constants.CoreEvents.CUT, this._changeEventHandler);
			this._skinParts.textarea.removeEvent(Constants.CoreEvents.PASTE, this._changeEventHandler);
			this._skinParts.textarea.removeEvent(Constants.CoreEvents.CHANGE, this._changeEventHandler);
			this._skinParts.textarea.removeEvent(Constants.CoreEvents.BLUR, this._fireBlur)
		},
		_getValue: function() {
			var a = this._skinParts.textarea;
			var b = "";
			if (!a.hasClass("isPlaceholder")) {
				b = a.get("value")
			}
			return b
		},
		dispose: function() {
			this._stopListeningToInput();
			this.parent()
		},
		getAcceptableDataTypes: function() {
			return ["Text"]
		}
	}
});
W.Experiments.registerNewExperimentComponent("NewComps", "New", {
	name: "wysiwyg.viewer.components.inputs.TextOption",
	skinParts: {
		size: {
			type: "htmlElement"
		},
		tooltip: {
			type: "wysiwyg.viewer.components.InfoTip"
		}
	},
	traits: ["wysiwyg.viewer.components.traits.SelectableOption"],
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		_states: {
			selectState: ["selected", "unselected"],
			enabledState: ["enabled", "disabled"]
		},
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this.setSelected(false)
		},
		_onAllSkinPartsReady: function() {
			var a = this._skinParts.size;
			a.set("text", this.getDataItem().get("text"));
			this._initializeTooTip(this.getViewNode())
		},
		_initializeTooTip: function(a) {
			var c = this._skinParts.tooltip;
			var b = this.getDataItem().get("description");
			a.addEvent("mouseenter", function() {
				c._showToolTipCmd({
					id: 1,
					content: b
				}, {
					source: a
				})
			});
			a.addEvent("mouseleave", function() {
				c._closeToolTipCmd()
			})
		},
		_onDataChange: function(a, c, b) {
			this.setEnabled(this.getDataItem().get("enabled"))
		},
		setSelected: function(a) {
			this.setState(a ? "selected" : "unselected", "selectState")
		},
		setEnabled: function(a) {
			this.setState(a ? "enabled" : "disabled", "enabledState")
		},
		getAcceptableDataTypes: function() {
			return ["SelectOption"]
		}
	}
});
W.Experiments.registerNewExperimentComponent("TPA", "New", {
	name: "wysiwyg.viewer.components.tpapps.TPABase",
	Class: {
		Extends: "wysiwyg.viewer.components.IFrameComponent",
		Binds: [],
		_renderTriggers: [Constants.DisplayEvents.DISPLAY_CHANGED],
		MIN_SIZE: 100,
		MAX_LOAD_RETRIES: 10,
		EDITOR_META_DATA: {
			general: {
				settings: true,
				design: false
			}
		},
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._initialized = false;
			this._appIsAlive = false;
			this._loadingTries = 0;
			this.setMinW(this.MIN_SIZE);
			this.setMinH(this.MIN_SIZE);
			this.addEvent("resizeEnd", this._onResizeEnd)
		},
		setIFrameSrc: function(a) {
			if (!a) {
				this.injects().TPA.showAppNotAvailable(this)
			} else {
				this.parent(a)
			}
		},
		setUrl: function(a) {
			this._iframe.src = a
		},
		render: function() {
			this.parent();
			this.injects().TPA.reportLoadStart(this);
			this._isRenderNeeded = false
		},
		_onDataChange: function(a) {
			this._initializeWithData()
		},
		_initializeWithData: function() {
			if (this._initialized) {
				return
			}
			this._applicationId = this._data.get("applicationId");
			this._appData = this.injects().Viewer.getAppDataHandler().getAppData(this._applicationId);
			this._appDefinitionId = this._appData.appDefinitionId;
			if (this.injects().Viewer.isPublicMode()) {
				LOG.reportEvent(wixEvents.APPS_FLOW_APP_LOADED_ON_VIEWER, {
					g1: this._appDefinitionId,
					i1: this._applicationId
				})
			}
			this.injects().TPA.getComponentRegistrar().register(this);
			this._initialized = true
		},
		handleAppSettingsChanged: function() {
			this._renderIfReady()
		},
		handleHeightChanged: function(a) {
			this._changeSize({
				h: a
			})
		},
		handleAppIsAlive: function() {
			this._appIsAlive = true
		},
		handleAppSettingsClose: function() {},
		handleSmRequestLogin: function() {
			this.injects().Commands.executeCommand("WViewerCommands.SiteMembers.Open", {
				form: "login"
			})
		},
		handleSmLogout: function() {
			this.injects().SiteMembers.logout()
		},
		_editModeChanged: function(b, a) {
			this._editMode = b
		},
		isAppAlive: function() {
			return this._appIsAlive
		},
		getAppDefinitionId: function() {
			return this._appDefinitionId
		},
		getApplicationId: function() {
			return this._data && this._data.get("applicationId")
		},
		getAppData: function() {
			return this._appData
		},
		_onResize: function() {
			if (this.isRendered() && this._initialized) {
				this._changeSize({
					w: this.getWidth(),
					h: this.getHeight()
				})
			}
		},
		getSectionURL: function() {
			return this.injects().TPA.getSectionURL(this._applicationId)
		},
		renderWhenPossible: function() {
			this._isRenderNeeded = true;
			if (this.getIsDisplayed()) {
				this._renderIfReady()
			}
		},
		_onResizeEnd: function() {
			if (this._appIsAlive && this._skinParts) {
				this._renderIfReady()
			}
			this._wCheckForSizeChangeAndFireAutoSized(3)
		},
		dispose: function() {
			this.injects().TPA.getComponentRegistrar().unregister(this);
			this.parent()
		}
	}
});
W.Experiments.registerNewExperimentComponent("TPA", "New", {
	name: "wysiwyg.viewer.components.tpapps.TPASection",
	imports: [],
	Class: {
		Extends: "wysiwyg.viewer.components.tpapps.TPABase",
		Binds: [],
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this._resizableSides = [W.BaseComponent.ResizeSides.RIGHT, W.BaseComponent.ResizeSides.LEFT]
		},
		render: function() {
			this.parent()
		},
		_getUrl: function() {
			if (!this._initialized) {
				return ""
			}
			var a = this._appData.sectionUrl;
			return this.injects().TPA.getURLBuilder().buildUrl(a, ["instance", "section-url", "target", "width"], this, this._appData)
		},
		getAcceptableDataTypes: function() {
			return ["TPA"]
		},
		handleAppStateChanged: function(a) {
			this.injects().Utils.hash.setHashExtData(a)
		},
		isDeleteable: function() {
			return false
		},
		canMoveToOtherScope: function() {
			return false
		}
	}
});
W.Experiments.registerNewExperimentComponent("TPA", "New", {
	name: "wysiwyg.viewer.components.tpapps.TPAWidget",
	imports: [],
	Class: {
		Extends: "wysiwyg.viewer.components.tpapps.TPABase",
		Binds: [],
		initialize: function(c, a, b) {
			this.parent(c, a, b)
		},
		_getUrl: function() {
			var b = this._data.get("widgetId");
			var c = this.injects().Viewer.getAppDataHandler().getWidgetData(this._applicationId, b);
			var a = c.widgetUrl;
			return this.injects().TPA.getURLBuilder().buildStateLessUrl(a, ["instance", "section-url", "target", "width"], this, this._appData)
		},
		handleAppStateChanged: function() {},
		getAcceptableDataTypes: function() {
			return ["TPAWidget"]
		}
	}
});
W.Experiments.registerExperimentTrait("Zoom", "New", {
	name: "experiments.wysiwyg.viewer.components.traits.GalleryAutoplay",
	trait: {
		Extends: "wysiwyg.viewer.components.traits.GalleryAutoplay",
		initialize: function() {
			this._states.slideshow = ["autoplayOn", "autoplayOff"];
			this.addEvent(Constants.ComponentEvents.RENDER, this._onComponentRender);
			this.addEvent(Constants.ComponentEvents.READY, this._onComponentReady);
			if (this.injects().Viewer.getPreviewMode() === true) {
				this._suppressAutoplay = true;
				this.injects().Commands.registerCommandListenerByName("WPreviewCommands.WEditModeChanged", this, this._onModeChange)
			}
			this.injects().Commands.registerCommandListenerByName("WViewerCommands.MediaZoom.Close", this, this._onMediaZoomClosed);
			this.injects().Commands.registerCommandListenerByName("WViewerCommands.OpenZoom", this, this._onMediaZoomOpened)
		}
	}
});
W.Experiments.registerNewExperimentTrait("NewComps", "New", {
	name: "wysiwyg.viewer.components.traits.SelectableOption",
	trait: {
		Static: {
			ITEM_SELECTED_EVENT: "itemSelected"
		},
		_isSelected: false,
		initialize: function(c, a, b) {
			this.parent(c, a, b);
			this.getViewNode().addEvent("click", function() {
				this.fireEvent(this.ITEM_SELECTED_EVENT, this)
			}.bind(this))
		},
		setSelected: function(a) {
			this._isSelected = a
		}
	}
});
W.Experiments.registerNewExperimentTrait("WixApps", "New", {
	name: "wysiwyg.viewer.components.traits.VideoUtils",
	trait: {
		_videoUrl: {
			YOUTUBE: "http://youtu.be/",
			VIMEO: "http://vimeo.com/"
		},
		_getServices: function() {
			var a = {
				YOUTUBE: {
					url: "http://www.youtube.com/embed/",
					getPreviewUrl: this._getYouTubePreviewUrl
				},
				VIMEO: {
					url: "http://player.vimeo.com/video/",
					getPreviewUrl: this._getVimeoPreviewUrl
				}
			};
			return a
		},
		_getYouTubePreviewUrl: function(d, a) {
			var c = "http://img.youtube.com/vi/[repLace]/0.jpg";
			var b = c.replace("[repLace]", d);
			a(b);
			return b
		},
		_getVimeoPreviewUrl: function(d, a) {
			var c = "http://vimeo.com/api/v2/video/[repLace].json";
			var b = c.replace("[repLace]", d);
			var e = new Request.JSONP({
				url: b + "?r=" + Math.random(),
				onComplete: function(f) {
					a(f[0].thumbnail_large)
				}
			});
			e.send()
		},
		_getYoutubeId: function(c) {
			var d = "";
			var a = /(?:youtube\.com\/watch[^\s]*[\?&]v=)([\w-]+)/g;
			var e = /(?:youtu\.be\/)([\w-]+)/g;
			var b = a.exec(c) || e.exec(c);
			if (b && b.length && b[1]) {
				d = b[1]
			}
			return d
		},
		_getVimeoId: function(c) {
			var d = "";
			var a = /vimeo\.com\/(\d+)$/gi;
			var b = a.exec(c);
			if (b && b.length && b[1]) {
				d = b[1]
			}
			return d
		},
		_getVideoDataFromVideoUrl: function(a) {
			var b = null;
			var c = this._getYoutubeId(a);
			if (c) {
				b = "YOUTUBE"
			} else {
				c = this._getVimeoId(a);
				if (c) {
					b = "VIMEO"
				}
			}
			if (c && b) {
				return {
					videoId: c,
					videoType: b
				}
			} else {
				return {}
			}
		},
		_getVideoUrlFromVideoData: function(a) {
			var c = a.videoId;
			var b = a.videoType;
			if (!c || !b) {
				return ""
			}
			return this._videoUrl[b] + c
		}
	}
});
W.Experiments.registerNewExperimentDataTypeSchema("AudioPlayer", "New", "AudioPlayer", {
	uri: {
		type: "string",
		"default": ""
	},
	autoPlay: {
		type: "Boolean",
		"default": false
	},
	loop: {
		type: "Boolean",
		"default": false
	},
	visible: {
		type: "Boolean",
		"default": true
	},
	volume: {
		type: "number",
		"default": 100
	},
	title: {
		type: "string",
		"default": ""
	},
	description: {
		type: "string",
		"default": ""
	},
	icon_uri: {
		type: "string",
		"default": ""
	},
	originalFileName: {
		type: "string",
		"default": ""
	}
});
W.Experiments.registerNewExperimentDataTypeSchema("Zoom", "New", "PermaLink", {
	appType: {
		type: "string",
		"enum": ["ListsApps", "ThirdPartyApps"]
	},
	dataItemRef: "ref"
});
W.Experiments.registerNewExperimentDataTypeSchema("NewComps", "New", "SelectOption", {
	value: "string",
	text: "string",
	enabled: {
		type: "boolean",
		"default": "true"
	},
	description: "string"
});
W.Experiments.registerNewExperimentCompSchemaProps("SliderAutoPlay", "New", "SliderGalleryProperties", {
	autoplayInterval: {
		type: "number",
		"default": "0",
		minimum: 0,
		maximum: 30,
		description: "Autoplay interval"
	},
	autoplay: {
		type: "boolean",
		"default": false,
		description: ""
	},
	showAutoplay: {
		type: "boolean",
		"default": true,
		description: ""
	},
	transDuration: {
		type: "number",
		minimum: 0,
		maximum: 5,
		"default": 0,
		description: "Duration of the transition in seconds"
	},
	autoPlayDirection: {
		type: "string",
		"default": "LTR"
	}
});
W.Experiments.registerNewExperimentDataTypeSchema("TPA", "New", "TPA", {
	applicationId: {
		type: "string",
		"default": "",
		description: "application ID"
	}
});
W.Experiments.registerNewExperimentDataTypeSchema("TPA", "New", "TPAWidget", {
	"extends": "TPA",
	widgetId: {
		type: "string",
		"default": "",
		description: "some amazing description"
	}
});
W.Experiments.registerNewExperimentDataTypeSchema("NewComps", "New", "Table", {
	items: "refList",
	header: "refList",
	footer: "refList"
});
W.Experiments.registerNewExperimentManager("SM", "New", "SiteMembers", {
	name: "wysiwyg.viewer.managers.SiteMembersManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		Binds: ["_initializeAPI"],
		initialize: function() {
			W.SiteMembers = this;
			if (W.Managers && W.Managers.list) {
				W.Managers.list.push({
					target: "SiteMembers"
				})
			}
			this._loadScript();
			this._loadData()
		},
		_loadData: function() {
			this.setData(this.injects().Viewer.getAppDataHandler().getSiteMembersData())
		},
		setData: function(a) {
			this._smData = a;
			this._initializeAPI()
		},
		_loadScript: function() {
			if (!window.SiteMembers) {
				var a = window.serviceTopology.scriptsLocationMap;
				var b = a.sitemembers;
				this.injects().Viewer.loadExternalScript(b + "/SiteMembers.js", function() {
					this._scriptLoaded = true
				}.bind(this))
			} else {
				this._scriptLoaded = true
			}
		},
		_initializeAPI: function() {
			if (!this._scriptLoaded) {
				this.injects().Utils.callLater(this._initializeAPI, [], this, 50);
				return
			}
			var c = W.Config.getServiceTopologyProperty("siteMembersUrl");
			var b = "siteMembers";
			var a = window.SiteMembers;
			var d = this.getCollectionId();
			window[b] = new a(d, c, b);
			this._api = window[b];
			this._apiReady = true
		},
		getCollectionId: function() {
			return this._smData && this._smData.smcollectionId
		},
		getCollectionOwner: function() {
			return this._smData && this._smData.owner
		},
		isSMDataAvailable: function() {
			var a = this.getCollectionId();
			return !!a
		},
		login: function(b, a, d, c) {
			if (!this._apiReady) {
				return
			}
			this._api.login(b, a, d, c)
		},
		register: function(b, a, d, c) {
			if (!this._apiReady) {
				return
			}
			this._api.register(b, a, d, c)
		},
		logout: function() {
			if (!this._apiReady) {
				return
			}
			return this._api.logout()
		},
		isSessionValid: function() {
			if (!this._apiReady) {
				return
			}
			return this._api.isSessionValid()
		}
	}
});
W.Experiments.registerNewExperimentManager("TPA", "New", "TPA", {
	name: "wysiwyg.viewer.managers.TPAManager",
	imports: ["wysiwyg.viewer.managers.tpa.URLBuilder", "wysiwyg.viewer.managers.tpa.TPAComponentRegistrar"],
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		Binds: ["_waitForAppAlive"],
		Static: {
			TPA_MESSAGE: "TPA",
			MAX_LOAD_RETRIES: 20,
			MessageTypes: {
				HEIGHT_CHANGED: "heightChanged",
				APP_SETTINGS_CHANGED: "appSettingsChanged",
				APP_IS_ALIVE: "appIsAlive",
				APP_SETTINGS_CLOSE: "appSettingsClose",
				APP_STATE_CHANGED: "appStateChanged",
				SM_REQUEST_LOGIN: "smRequestLogin",
				SM_LOGOUT: "smLogout"
			}
		},
		initialize: function() {
			W.TPA = this;
			if (W.Managers && W.Managers.list) {
				W.Managers.list.push({
					target: "TPA"
				})
			}
			this._urlBuilder = new this.imports.URLBuilder();
			this._componentRegistrar = new this.imports.TPAComponentRegistrar();
			this._loadAttempts = {};
			this._addPostMessageCallback(function(a) {
				this.handlePostMessage(a, function(b) {
					var c = $(b);
					return c && c.getLogic()
				})
			}.bind(this))
		},
		isReady: function() {
			return true
		},
		_addPostMessageCallback: function(c) {
			var b = "addEventListener";
			var a = "message";
			if (Browser.ie && window.attachEvent) {
				b = "attachEvent";
				a = "onmessage"
			}
			window[b](a, c, false)
		},
		handlePostMessage: function(c, h) {
			var a = JSON.parse(c.data);
			var b = a.type;
			if (a && a.intent && a.intent == this.TPA_MESSAGE && b) {
				var e = a.compId;
				var d = h(e);
				if (!d) {
					return
				}
				if (Object.contains(this.MessageTypes, b)) {
					var f = "handle" + b.capitalize();
					var g = d[f];
					if (g) {
						g.apply(d, [a.data])
					} else {
						LOG.reportError("Handler function not found - " + b, "wysiwyg.viewer.managers.TPA", "handlePostMessage")
					}
				} else {
					LOG.reportError("Unknown post message type - " + b, "wysiwyg.viewer.managers.TPA", "handlePostMessage")
				}
			}
		},
		getURLBuilder: function() {
			return this._urlBuilder
		},
		getComponentRegistrar: function() {
			return this._componentRegistrar
		},
		getSectionURL: function(g) {
			var a = this._componentRegistrar.getPageId(g);
			var c = W.Data.getDataByQuery("#" + a);
			var e = c && c.get("title");
			var f = this.getPageState(a);
			var b = this.injects().Viewer.isPublicMode();
			var d = location.protocol + "//" + location.host + location.pathname;
			d = !b ? d : ((window.publicModel && window.publicModel["externalBaseUrl"]) || d);
			return d + "#!" + this.injects().Utils.hash.getHashPartsString(a, e, f)
		},
		reportLoadStart: function(a) {
			this._waitForAppAlive(a)
		},
		_waitForAppAlive: function(a) {
			if (W.Config.isInDebugMode()) {
				return
			}
			var b = a.getComponentId();
			if (!a.isAppAlive()) {
				if (!this._loadAttempts.hasOwnProperty(b)) {
					this._loadAttempts[b] = 0
				}
				this._loadAttempts[b] += 1;
				if (this._loadAttempts[b] > this.MAX_LOAD_RETRIES) {
					this.showAppNotAvailable(a)
				} else {
					a.callLater(this._waitForAppAlive, [a], 500)
				}
			} else {
				this._loadAttempts[b] = 0
			}
		},
		showAppNotAvailable: function(a) {
			if (a.isRendered()) {
				a.setUrl(W.Config.getServiceTopologyProperty("scriptsRoot") + "/html/external/apps404.html")
			}
		},
		setPageState: function(a, b) {
			if (!this._stateByPage) {
				this._stateByPage = {}
			}
			this._stateByPage[a] = b
		},
		getPageState: function(a) {
			var b = this._stateByPage && this._stateByPage[a];
			return b || ""
		},
		dispose: function() {
			window.removeEventListener("message", this.handlePostMessage, false);
			this.parent()
		}
	}
});
W.Experiments.registerExperimentManager("SM", "New", {
	name: "experiments.wysiwyg.viewer.managers.WViewManagerSM",
	Class: {
		Extends: "wysiwyg.viewer.managers.WViewManager",
		_registerMoreCommands: function(a) {
			a.registerCommandAndListener("WViewerCommands.SiteMembers.Open", this, this._openSiteMembersPopup);
			a.registerCommandAndListener("WViewerCommands.SiteMembers.Close", this, this._closeSiteMembersPopup)
		},
		_openSiteMembersPopup: function(a) {
			if (!this.injects().Viewer.isPublicMode() && !W.Config.isInDebugMode()) {
				return
			}
			var b = a && a.form;
			var c = this.injects().SiteMembers;
			if (!c.isSessionValid() && c.isSMDataAvailable() && !this._siteMembers) {
				W.Components.createComponent("wysiwyg.viewer.components.sm.SMContainer", "wysiwyg.viewer.skins.sm.SMContainerSkin", null, {
					formType: b || "register"
				}, function() {}, function(f) {
					this._siteMembers = f;
					var d = f.getViewNode();
					d.setStyle("opacity", "0.0");
					d.insertInto(this._siteNode);
					var e = new Fx.Tween(d, {
						duration: "short",
						link: "ignore"
					}).start("opacity", "1.0")
				}.bind(this))
			}
		},
		_closeSiteMembersPopup: function() {
			if (this._siteMembers) {
				var a = this._siteMembers.getViewNode();
				var b = new Fx.Tween(a, {
					duration: "short",
					link: "chain"
				});
				b.addEvent("complete", function() {
					b.removeEvent("complete", arguments.callee);
					a.removeFromDOM();
					delete this._siteMembers
				}.bind(this));
				b.start("opacity", "0.0")
			}
		}
	}
});
W.Experiments.registerExperimentManager("Zoom", "New", {
	name: "experiments.wysiwyg.viewer.managers.WViewManager",
	Class: {
		Extends: "wysiwyg.viewer.managers.WViewManager",
		_registerCommands: function() {
			var a = W.Commands;
			a.registerCommandAndListener("WViewerCommands.OpenZoom", this, this.setZoomData);
			a.registerCommandAndListener("WViewerCommands.AdminLogin.Open", this, this._openAdminLogin);
			a.registerCommandAndListener("WViewerCommands.AdminLogin.Close", this, this._closeAdminLogin);
			a.registerCommandListenerByName("WPreviewCommands.WEditModeChanged", this, this._onEditModeChanged)
		},
		_onHashChange: function(b) {
			b = b || {};
			if (this.isSiteReady()) {
				var a = b.newHash;
				if (!W.Data.isDataAvailable("#" + a)) {
					this._changePageFromHash(a)
				} else {
					this._handleValidHashChange(b)
				}
			}
		},
		_handleValidHashChange: function(e) {
			var a = e.newHash;
			var g = e.extData;
			var d = e.isIdChanged;
			var c = e.isExtDataChanged;
			var b = e.silent;
			var f = this._zoomComp && this._zoomComp.getLogic().isZoomOpened();
			if (d) {
				W.Data.getDataByQuery("#" + a, function(h) {
					this._onHashDataItemIdChange(a, h, f)
				}.bind(this));
				if (e.isForSureAfterChange) {
					LOG.reportPageEvent(window.location.href)
				}
			} else {
				if (c) {
					if (f) {
						this._zoomComp.getLogic().showZoomImage()
					} else {
						this._onPageExtraDataChange(g, a, b)
					}
				}
			}
		},
		_onHashDataItemIdChange: function(a, c, d) {
			var b = c.getType && c.getType();
			if (b === "Page" && a) {
				this._changePageFromHash(a);
				return
			}
			if (d) {
				this._zoomComp.getLogic().showZoomImage();
				return
			}
			if (b === "Image") {
				W.Commands.executeCommand("WViewerCommands.OpenZoom", {
					item: "#" + c.get("id"),
					getDisplayerDivFunction: this.getDefaultGetZoomDisplayerFunction("Image")
				}, this)
			} else {
				if (b == "PermaLink" && c.get("appType") == "ListsApps") {
					W.Apps.openPermaLink(c)
				}
			}
		},
		getDefaultGetZoomDisplayerFunction: function(a) {
			if (a == "Image") {
				return function(b, d, c) {
					this.injects().Components.createComponent("wysiwyg.viewer.components.MediaZoomDisplayer", "wysiwyg.viewer.skins.displayers.MediaZoomDisplayerSkin", b, {
						maxWidth: d.x,
						maxHeight: d.y
					}, null, function(e) {
						c(e.getViewNode())
					})
				}
			}
		},
		_setZoomDataAndShow: undefined,
		setZoomData: function(a) {
			this._initZoomIfNeeded(function() {
				this._setZoomDataInner(a)
			}.bind(this))
		},
		removeZoomElement: function() {
			if (this._zoomComp) {
				this._zoomComp.removeFromDOM();
				delete this._zoomComp
			}
		},
		_setZoomDataInner: function(a) {
			if (a.itemsList) {
				this._zoomComp.getLogic().setGallery(a.itemsList, a.currentIndex, a.getDisplayerDivFunction, a.getHashPartsFunction)
			} else {
				if (a.item) {
					this._zoomComp.getLogic().setImage(a.item, a.getDisplayerDivFunction, a.getHashPartsFunction)
				}
			}
		},
		_initZoomIfNeeded: function(a) {
			if (!this._zoomComp) {
				this._zoomComp = W.Components.createComponent("wysiwyg.viewer.components.MediaZoom", "wysiwyg.viewer.skins.MediaZoomSkin", null, null, function(b) {
					b.getViewNode().insertInto(this._siteNode)
				}.bind(this), a)
			} else {
				if (a) {
					a()
				}
			}
		}
	}
});
W.Experiments.registerExperimentManager("TPA", "New", {
	name: "experiments.wysiwyg.viewer.managers.WViewManagerTPA",
	imports: ["wysiwyg.viewer.managers.appdata.AppDataHandler"],
	Class: {
		Extends: "wysiwyg.viewer.managers.WViewManager",
		Binds: [],
		_setDataObjectFromHash: undefined,
		_onHashChange: function(e) {
			e = e || {};
			if (this.isSiteReady()) {
				var a = e.newHash;
				var f = e.extData;
				var d = e.isIdChanged;
				var c = e.isExtDataChanged;
				var b = e.silent;
				if (!W.Data.isDataAvailable("#" + a)) {
					this._changePageFromHash(a)
				} else {
					if (d) {
						W.Data.getDataByQuery("#" + a, function(g) {
							this._onHashDataItemIdChange(a, g)
						}.bind(this));
						if (e.isForSureAfterChange) {
							LOG.reportPageEvent(window.location.href)
						}
					} else {
						if (c) {
							this._onPageExtraDataChange(f, a, b)
						}
					}
				}
			}
		},
		_onHashDataItemIdChange: function(a, b) {
			if (b.getType && b.getType() === "Page" && a) {
				this._changePageFromHash(a)
			}
			if (b.getType && b.getType() === "Image") {
				this._setMediaZoomItemAndShow(b)
			}
		},
		_onPageExtraDataChange: function(f, b, a) {
			var c = this._getPageDataFromHash(b);
			W.TPA.setPageState(b, f);
			if (a) {
				return
			}
			var e = c.get("tpaApplicationId");
			var d = W.TPA.getComponentRegistrar().getSection(e);
			if (d) {
				d._renderIfReady()
			}
		},
		_setUrlHashToPage: function(a) {
			var c = this._pagesData[a];
			if (c) {
				var b = W.TPA.getPageState(a);
				W.Utils.hash.setHash(a, c.get("pageUriSEO"), b)
			}
		},
		getAppDataHandler: function() {
			if (!this._appDataHandler) {
				this._appDataHandler = new this.imports.AppDataHandler()
			}
			return this._appDataHandler
		}
	}
});
W.Experiments.registerNewExperimentClass("TPA", "New", {
	name: "wysiwyg.viewer.managers.appdata.AppDataHandler",
	Class: {
		getAppsData: function() {
			if (!window.rendererModel) {
				window.rendererModel = {}
			}
			if (!window.rendererModel.clientSpecMap) {
				window.rendererModel.clientSpecMap = {}
			}
			return window.rendererModel.clientSpecMap
		},
		registerAppData: function(a) {
			this.getAppsData()[a.applicationId] = a
		},
		getAppData: function(a) {
			return this.getAppsData()[a] || {}
		},
		getWidgetData: function(c, b) {
			var a = this.getAppData(c).widgets || {};
			return a[b] || {}
		},
		getSiteMembersData: function() {
			var b = Object.filter(this.getAppsData(), function(c) {
				return c && c.type && c.type.toLowerCase() == "sitemembers"
			});
			var a = Object.values(b);
			if (a && a.length > 0) {
				return a[0]
			} else {
				return {}
			}
		}
	}
});
W.Experiments.registerNewExperimentClass("TPA", "New", {
	name: "wysiwyg.viewer.managers.tpa.TPAComponentRegistrar",
	Class: {
		Static: {
			SECTION: "section",
			WIDGETS: "widgets",
			SECTION_PAGE_ID: "pageId",
			APPLICATION_ID_KEY: "tpaApplicationId"
		},
		initialize: function() {
			this._components = {}
		},
		register: function(a, d) {
			d = a.getApplicationId() || d;
			var c = this._getDataObjectByApplicationId(d);
			if (a && a.getOriginalClassName() == "wysiwyg.viewer.components.tpapps.TPASection") {
				c[this.SECTION] = a
			} else {
				var b = this._getWidgets(d);
				b.push(a)
			}
		},
		unregister: function(b, e) {
			e = b.getApplicationId() || e;
			var d = this._getDataObjectByApplicationId(e);
			if (b && b.getOriginalClassName() == "wysiwyg.viewer.components.tpapps.TPASection") {
				delete d[this.SECTION]
			} else {
				var c = this._getWidgets(e);
				var a = c.indexOfByPredicate(function(f) {
					return (f === b)
				}.bind(this));
				c.splice(a, 1)
			}
		},
		getPageId: function(d) {
			var b = W.Data.getDataMap();
			var c = Object.filter(b, function(e) {
				return e.get("type") == "Page" && e.get(this.APPLICATION_ID_KEY) == d
			}.bind(this));
			var a = Object.values(c);
			if (a.length > 0) {
				return a[0].get("id") || null
			} else {
				return null
			}
		},
		_getDataObjectByApplicationId: function(a) {
			if (!this._components[a]) {
				this._components[a] = {}
			}
			return this._components[a]
		},
		_getByApplicationId: function(c) {
			var a = [].concat(this._getWidgets(c));
			var b = this.getSection(c);
			if (b) {
				a.push(b)
			}
			return a
		},
		each: function(c, b) {
			var a = this._getByApplicationId(c);
			Array.each(a, function(d) {
				b(d)
			})
		},
		_getWidgets: function(b) {
			var a = this._getDataObjectByApplicationId(b);
			if (!a[this.WIDGETS]) {
				a[this.WIDGETS] = []
			}
			return a[this.WIDGETS]
		},
		getSection: function(b) {
			var a = this._getDataObjectByApplicationId(b);
			return a[this.SECTION]
		}
	}
});
W.Experiments.registerNewExperimentClass("TPA", "New", {
	name: "wysiwyg.viewer.managers.tpa.URLBuilder",
	Class: {
		buildStateLessUrl: function(c, d, a, b) {
			return this._buildUrlInternal(c, false, d, a, b)
		},
		buildUrl: function(c, d, a, b) {
			return this._buildUrlInternal(c, true, d, a, b)
		},
		_buildUrlInternal: function(e, f, h, b, c) {
			if (!e) {
				return null
			}
			var a = function(j) {
					switch (j) {
					case "app-state":
						return this._getCurrentState();
						break;
					case "instance":
						return c.instance;
						break;
					case "section-url":
						if (W.Viewer.isPublicMode()) {
							return b.getSectionURL() || null
						} else {
							return g
						}
						break;
					case "target":
						if (W.Viewer.isPublicMode()) {
							return "_top"
						} else {
							return "_self"
						}
						break;
					case "width":
						return b.getViewNode().getWidth();
						break;
					case "cacheKiller":
						return this._getCacheKiller();
						break;
					case "compId":
						return b.getComponentId();
						break
					}
				}.bind(this);
			var g = "";
			var d = [];
			g = e;
			if (f) {
				g += this._getCurrentState()
			}
			if (!String.contains(g, "?")) {
				g += "?"
			} else {
				g += "&"
			}
			h.push("cacheKiller", "compId");
			Array.each(h, function(j) {
				d.push(j + "=" + encodeURIComponent(a(j)))
			});
			return g + d.join("&")
		},
		_getCacheKiller: function() {
			return new Date().getTime().toString()
		},
		_getCurrentState: function() {
			var a = W.Utils.hash.getHashParts(location.hash);
			return "/" + (a.extData || "")
		}
	}
});
W.Experiments.registerNewExperimentSchemaProps("NewComps", "New", "ComboBoxInputProperties", {
	hasPrompt: {
		type: "boolean",
		"default": false,
		description: "Display prompt in combo"
	},
	promptText: {
		type: "string",
		"default": "",
		description: "The text that will be displayed in the prompt"
	}
});
W.Experiments.registerNewExperimentSchemaProps("NewComps", "New", "NumberInputProperties", {
	minValue: {
		type: "number",
		"default": 0,
		description: "minimum allowed value"
	},
	maxValue: {
		type: "number",
		"default": 999,
		description: "maximum allowed value"
	}
});
W.Experiments.registerNewExperimentSchemaProps("NewComps", "New", "TableComponentProperties", {
	minHeight: {
		type: "number",
		"default": undefined,
		description: "minimum allowed value"
	}
});
W.ComponentEvents = W.ComponentEvents || {};
W.ComponentEvents.COMPONENT_SEQUENCER_COMP_SETUP = "componentSetup";
W.ComponentEvents.COMPONENT_SEQUENCER_PRODUCTION_FINISHED = "productionFinished";
W.Experiments.registerNewExperimentClass("WixApps", "New", {
	name: "experiments.wysiwyg.viewer.utils.ComponentSequencer",
	imports: ["wysiwyg.viewer.utils.GalleryUtils"],
	Class: {
		Binds: [],
		Extends: Events,
		_actionQueue: null,
		_pendingElements: [],
		_createdElements: [],
		_reusedElements: [],
		_preExistingElements: [],
		initialize: function() {
			this._actionQueue = new this.imports.GalleryUtils().createActionQueue(function() {
				return (this._pendingElements.length == 0)
			}.bind(this), 3)
		},
		resolveItem: function(a, c, b) {},
		createComponents: function(a, b) {
			this._resolveRefList(b, function(c) {
				this._createCompsFromDataList(a, c)
			}.bind(this))
		},
		reset: function() {
			this._pendingElements.forEach(function(a) {
				a.removeEvent(Constants.ComponentEvents.READY)
			});
			this._pendingElements = [];
			this._createdElements = [];
			this._reusedElements = [];
			this._preExistingElements = []
		},
		_resolveRefList: function(e, f) {
			var b = typeOf(e) === "array" ? e : e.get("items");
			var d = [];
			var a = b.length;
			if (b.length) {
				for (var c = 0;
				c < b.length;
				c++) {
					this._resolveCompData(b[c], c, function(h, g) {
						d[g] = h;
						a--;
						if (a === 0) {
							f(d)
						}
					})
				}
			} else {
				f([])
			}
		},
		_resolveCompData: function(a, b, c) {
			if (typeOf(a) === "string") {
				W.Data.getDataByQuery(a, function(d) {
					c(d, b)
				})
			} else {
				c(a, b)
			}
		},
		_createCompsFromDataList: function(a, c) {
			this._preExistingElements = a.getChildren().slice(0);
			this._pendingElements = [];
			this._createdElements = [];
			this._reusedElements = [];
			for (var b = 0;
			b < c.length;
			b++) {
				this._setupComponent(a, b, c)
			}
			this._preExistingElements.forEach(function(d) {
				if (!this._reusedElements.contains(d)) {
					this._removeElement(d)
				}
			}.bind(this));
			this._checkIfAllDone()
		},
		_setupComponent: function(a, c, e) {
			var b = e[c];
			var g;
			var f;
			var d = this._findReusableComponent(this._preExistingElements, b);
			if (d) {
				g = "reuse";
				this._reusedElements.push(d)
			} else {
				g = "create";
				d = this.createComponent(a, b, c, e)
			}
			a.adopt(d);
			this._createdElements.push(d);
			if (!this._pendingElements.contains(d)) {
				this.fireEvent(W.ComponentEvents.COMPONENT_SEQUENCER_COMP_SETUP, {
					method: g,
					compView: d,
					index: c
				})
			}
		},
		createComponent: function(b, d, c, f) {
			var e;
			var h = this.resolveItem(d, c, f);
			var g = typeOf(h);
			var a = this._getCompStyle(b);
			if (g === "element") {
				e = h;
				if (!e.getLogic && !e.hasAttribute("comp")) {
					this._supplyMinimalLogic(e, d)
				}
			} else {
				e = new Element("div");
				e.setAttribute("comp", h.comp);
				e.setAttribute("skin", h.skin);
				e.wixify(h.args || {}, d, undefined, undefined, a);
				this._pendingElements.push(e)
			}
			e.addEvent(Constants.ComponentEvents.READY, function() {
				this.fireEvent(W.ComponentEvents.COMPONENT_SEQUENCER_COMP_SETUP, {
					method: "create",
					compView: e,
					index: c
				});
				var j = this._pendingElements.indexOf(e);
				if (j != -1) {
					this._pendingElements.splice(j, 1);
					this._checkIfAllDone()
				}
			}.bind(this));
			return e
		},
		_checkIfAllDone: function() {
			if (this._pendingElements.length == 0) {
				this._onAllComponentsReady()
			}
		},
		_supplyMinimalLogic: function(b, a) {
			var c = {
				getDataItem: function() {
					return a
				},
				dispose: function() {
					a = null
				}
			};
			b.getLogic = function() {
				return c
			}
		},
		_onAllComponentsReady: function() {
			var a = this._createdElements.slice(0);
			this._createdElements = [];
			this._reusedElements = [];
			this._preExistingElements = [];
			this.fireEvent(W.ComponentEvents.COMPONENT_SEQUENCER_PRODUCTION_FINISHED, {
				elements: a
			})
		},
		_removeElement: function(a) {
			if (a.getLogic) {
				a.getLogic().dispose()
			}
			a.destroy()
		},
		_findReusableComponent: function(d, a) {
			var c;
			for (var b = 0;
			b < d.length;
			b++) {
				c = d[b];
				if (c.getLogic) {
					if (this._dataItemsIdentical(a, c.getLogic().getDataItem())) {
						return c
					}
				}
			}
		},
		_dataItemsIdentical: function(b, a) {
			if (b === a) {
				return true
			} else {
				if (b.get && a.get && b.hasField("id") && a.hasField("id")) {
					var d = b.get("id");
					var c = a.get("id");
					return (d && c && (d === c))
				} else {
					return false
				}
			}
		},
		_getCompStyle: function(a) {
			var b;
			if (!this._style) {
				b = a;
				while (b && !b.getLogic) {
					b = b.getParent()
				}
				if (b && b.getLogic) {
					return b.getLogic().getStyle()
				}
			}
		}
	}
});
W.Experiments.registerNewExperimentManager("NewComps", "New", "MessagesController", {
	name: "wysiwyg.viewer.utils.MessageViewController",
	Class: {
		Binds: ["_showMessageBox", "_messageBoxClosed"],
		initialize: function() {
			W.MessagesController = this;
			this._messagesQueue = [];
			this.BETWEEN_MESSAGES_DELAY = 700
		},
		_initIfNeededMessageView: function(a) {
			if (!this._messageBox) {
				this._messageBox = W.Components.createComponent("wysiwyg.viewer.components.MessageView", "wysiwyg.viewer.skins.MessageViewSkin", null, null, function(b) {
					$$("body").adopt(this._messageBox);
					this._messageBox.getLogic().addEvent("complete", this._messageBoxClosed)
				}.bind(this), a)
			} else {
				if (a) {
					a()
				}
			}
		},
		showError: function(a, b) {
			var c = {};
			c.msgTitle = a;
			c.msgBody = b;
			this._messagesQueue.push(c);
			this._initIfNeededMessageView(this._showMessageBox)
		},
		showMessage: function(a, c, d) {
			var b = {};
			b.msgTitle = a;
			b.msgBody = c;
			b.cb = d;
			this._messagesQueue.push(b);
			this._initIfNeededMessageView(this._showMessageBox)
		},
		_showMessageBox: function() {
			if ((this._messagesQueue.length > 0) && (!this._messageBox.getLogic().visible())) {
				this._messageBox.getLogic().showMessage(this._messagesQueue.shift())
			}
		},
		_messageBoxClosed: function() {
			setTimeout(function() {
				this._showMessageBox()
			}.bind(this), this.BETWEEN_MESSAGES_DELAY)
		},
		kill: function() {
			if (this._messageBox) {
				this._messageBox.dispose();
				this._messageBox.removeFromDOM()
			}
		},
		isReady: function() {
			return true
		}
	}
});
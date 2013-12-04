Constants.ComponentEvents = {
	DISPLAYED: "displayed",
	READY: "componentReady",
	WIXIFIED: "wixified",
	PROPERTY_CHANGE: "componentPropertyChange",
	READY_FOR_RENDER: "readyForRender",
	RENDER: "render"
};
Constants.ComponentPartTypes = {
	HTML_ELEMENT: "htmlElement"
};
var SizeLimits = new Class({
	minW: null,
	minH: null,
	maxW: null,
	maxH: null,
	initialize: function() {},
	clone: function() {
		var b = new SizeLimits();
		b.minW = this.minW;
		b.minH = this.minH;
		b.maxW = this.maxW;
		b.maxH = this.maxH;
		return b
	}
});
W.BaseComponentClassData = {
	name: "mobile.core.components.base.BaseComponent",
	Class: {
		Extends: Events,
		Binds: ["getComponentProperties", "_setSkinPartElements", "_onDataChange", "_onDefaultAction", "_replaceSkin", "_replaceSkinAsync", "_onRenderingTriggerEvent", "_onComponentWixified", "_onEditModeChanged", "_skinParamsChange"],
		Static: {
			MINIMUM_X_DEFAULT: -2000,
			MAXIMUM_X_DEFAULT: 2000,
			MINIMUM_Y_DEFAULT: -1000,
			MAXIMUM_Y_DEFAULT: 40000,
			MINIMUM_WIDTH_DEFAULT: 5,
			MINIMUM_HEIGHT_DEFAULT: 5,
			MAXIMUM_WIDTH_DEFAULT: 2500,
			MAXIMUM_HEIGHT_DEFAULT: 2000
		},
		_renderTriggers: [],
		initialize: function(g, e, f) {
			this._compId = g;
			this._view = e;
			this._styleNameSpace = f && f.styleNameSpace;
			this._isEnabled = !e.disabled;
			this._view.setProperty("id", (f && f.id) || g);
			this._allComponentPartsReady = false;
			this._componentReady = false;
			this._isRenderNeeded = true;
			this._autoBoundParts = null;
			this._isDisposed = false;
			this._isRendered = false;
			this._editorMode = "CURRENT_PAGE";
			var h = (f && f.command) || e.getAttribute("command");
			this._commandParameter = (f && f.commandParameter) || e.getAttribute("commandParameter");
			this._command = null;
			this._commandName = null;
			this._usesExternalData = false;
			this._callLaterIDs = [];
			this._stateGrpDict = {};
			this._sizeLimits = this.getSizeLimits();
			this._minimumTimeBetweenRenders = this._minimumTimeBetweenRenders || 0;
			this._lastRenderTime = -9999;
			this._renderDelayed = false;
			if (h) {
				this.setCommand(h, this._commandParameter)
			}
			this._isDisplayed = false;
			e.addEvent(Constants.ComponentEvents.WIXIFIED, this._onComponentWixified);
			this.injects().Commands.registerCommandListenerByName("WPreviewCommands.WEditModeChanged", this, this._onEditModeChanged)
		},
		toString: function() {
			return "[Component " + this.className + " #" + this._compId + "]"
		},
		getComponentId: function() {
			return this._compId
		},
		getComponentType: function() {
			return this._view.get("comp")
		},
		_getDataManager: function() {
			return this._data.getDataManager()
		},
		getViewNode: function() {
			return this._view
		},
		getStyleNameSpace: function() {
			return this._styleNameSpace || this.getOriginalClassName()
		},
		getSizeLimits: function() {
			if (this._sizeLimits === undefined) {
				this._sizeLimits = new SizeLimits();
				this._sizeLimits.minW = this._sizeLimits.minW || this.MINIMUM_WIDTH_DEFAULT;
				this._sizeLimits.minH = this._sizeLimits.minH || this.MINIMUM_HEIGHT_DEFAULT;
				this._sizeLimits.maxW = this._sizeLimits.maxW || this.MAXIMUM_WIDTH_DEFAULT;
				this._sizeLimits.maxH = this._sizeLimits.maxH || this.MAXIMUM_HEIGHT_DEFAULT;
				this._originalSizeLimits = this._sizeLimits.clone()
			}
			return this._sizeLimits
		},
		_initSizeLimits: function() {},
		setMinW: function(b) {
			this.getSizeLimits().minW = b;
			this._originalSizeLimits.minW = b;
			this._applySizeLimitsIfNeeded()
		},
		setMinH: function(b) {
			this.getSizeLimits().minH = b;
			this._originalSizeLimits.minH = b;
			this._applySizeLimitsIfNeeded()
		},
		setMaxW: function(b) {
			this.getSizeLimits().maxW = b;
			this._originalSizeLimits.maxW = b;
			this._applySizeLimitsIfNeeded()
		},
		setMaxH: function(b) {
			this.getSizeLimits().maxH = b;
			this._originalSizeLimits.maxH = b;
			this._applySizeLimitsIfNeeded()
		},
		_applySizeLimitsIfNeeded: function() {
			if (this._$width < this.getSizeLimits().minW || this._$width > this.getSizeLimits().maxW) {
				this.setWidth(this._$width)
			}
			if (this._$height < this.getSizeLimits().minH || this._$height > this.getSizeLimits().maxH) {
				this.setHeight(this._$height)
			}
		},
		getAcceptableDataTypes: function() {
			return [""]
		},
		getRawData: function() {
			return this._data ? this._data.getData() : undefined
		},
		getDataItem: function() {
			return this._data
		},
		isUsingExternalData: function() {
			return this._usesExternalData
		},
		setDataItem: function(e) {
			var f = this._data;
			try {
				if (f) {
					f.removeComponentWithInterest(this);
					f.removeEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChange)
				}
			} catch (d) {}
			this._data = e;
			if (e && e != f) {
				this._data.addComponentWithInterest(this);
				this._data.addEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChange)
			}
			this._onDataChange(e);
			this._tryCreatingComponentParts()
		},
		setDataByQuery: function(d, c) {
			this.injects().Data.getDataByQuery(d, function(a) {
				this.setDataItem(a);
				c()
			}.bind(this))
		},
		_setSkinPartElements: function(b) {
			this._validateSkinParts(b);
			this._skinPartElements = b;
			this._tryCreatingComponentParts()
		},
		_validateSkinParts: function(d) {
			for (var e in this._skinPartsSchema) {
				var f = this._skinPartsSchema[e];
				if (!d[e] && !f.optional && f.autoCreate !== false && !f.repeater) {
					LOG.reportError(wixErrors.SKIN_PART_MISSING, this.$className + " / " + this._skin.$className, "_validateSkinParts", e)()
				}
			}
		},
		_tryCreatingComponentParts: function() {
			if (this._skinPartElements && (this._data || this.getAcceptableDataTypes().indexOf("") >= 0)) {
				this._loadComponentParts()
			}
		},
		_loadComponentParts: function() {
			this._allComponentPartsReady = false;
			this._skinParts = this._skinPartElements;
			var f = [];
			for (var e in this._skinPartsSchema) {
				if ("view" == e) {
					continue
				}
				var g = this._createInnerComponent(e, this._skinParts[e], true);
				if (g) {
					f.push(g)
				}
			}
			delete this._skinPartElements;
			if (f.length !== 0) {
				var h = new Async.Bulk(f, null, {
					completeEvent: Constants.ComponentEvents.READY,
					onComplete: function() {
						for (var a = 0;
						a < f.length;
						a++) {
							var c = f[a];
							var b = c.get("skinPart");
							if (b) {
								this._skinParts[b] = c.getLogic()
							}
						}
						this._setAllPartsReady()
					}.bind(this)
				})
			} else {
				this._setAllPartsReady()
			}
		},
		_createInnerComponent: function(e, f, g) {
			var h = this.getSkinPartDefinition(e);
			if (h.type == Constants.ComponentPartTypes.HTML_ELEMENT || h.repeater) {
				return
			}
			if (g && h.autoCreate === false) {
				return
			}
			h.skin = h.skin || f.getProperty("skin");
			return this._createComponentbyDefinition(h, f)
		},
		_createComponentbyDefinition: function(n, h, j) {
			h = h || new Element("div");
			h.setProperty("skinPart", n.id);
			var l;
			if (n.dataQuery) {
				l = n.dataQuery
			} else {
				if (n.dataRefField) {
					var k = n.dataRefField;
					if (k == "*") {
						l = this._data
					} else {
						l = this._data.get(k)
					}
				} else {
					if (n.dataItem) {
						l = n.dataItem
					} else {
						if (n.dataType) {
							l = this._data.getDataManager().addDataItemWithUniqueId("", {
								type: n.dataType
							}).dataObject;
							l.setMeta("isPersistent", false)
						}
					}
				}
			}
			if (this._data && this._data.getDataManager() != W.Data) {
				h.set("dataQuerySource", "preview")
			} else {
				if (n.dataQuerySource) {
					h.set("dataQuerySource", n.dataQuerySource)
				}
			}
			n.argObject = n.argObject || {};
			var i;
			if (n.styleGroup && this._style) {
				i = (n.styleGroup == "inherit") ? this._style : this._style.getStyleByGroupName(n.styleGroup)
			}
			var m;
			if (j || i) {
				m = function(a) {
					if (i) {}
					if (j) {
						j(a)
					}
				}
			}
			return this.injects().Components.createComponent({
				compNode: h,
				type: n.type,
				skin: n.skin,
				data: l,
				args: n.argObject,
				componentReadyCallback: m,
				innerStyle: i
			})
		},
		getSkinPartDefinition: function(g) {
			var h = this._skinPartsSchema[g];
			if (!h) {
				LOG.reportError(wixErrors.CM_NO_PART, this.className, "getSkinPartParams", skinPartName);
				return ret
			}
			var i = this._skinPartsSchema[g] || {};
			var f = (this._skin && this._skin.getCompPartsDefinition()[g]) || {};
			var j = Object.merge({
				id: g
			}, f, i);
			if (j.hookMethod && typeOf(this[j.hookMethod]) == "function") {
				j.argObject = j.argObject || {};
				j = this[j.hookMethod](j)
			}
			return j
		},
		_setAllPartsReady: function() {
			if (this._allComponentPartsReady) {
				return
			}
			this._allComponentPartsReady = true;
			this._registerDataBindings();
			this._registerSkinPartCommands();
			this._applySizeLimitsIfNeeded();
			this._onAllSkinPartsReady(this._skinParts);
			this._renderIfReady()
		},
		setTextContent: function() {
			W.Utils.debugTrace("")
		},
		setSkin: function(e) {
			if (this._skin) {
				this._skin.unRegister()
			}
			if (this._skinParts && this._skinParts.inlineContent) {
				var g = this._skin.getInlineContent();
				this._view.empty();
				this._view.adopt(g)
			}
			this._skin = e;
			var h = this.getSizeLimits();
			var f = this._originalSizeLimits;
			h.minW = this._skin.minW || f.minW;
			h.minH = this._skin.minH || f.minH;
			h.maxW = this._skin.maxW || f.maxW;
			h.maxH = this._skin.maxH || f.maxH;
			this._skin.register(this._view, this._setSkinPartElements, this._skinParamsChange)
		},
		_skinParamsChange: function(b) {},
		setStyle: function(b) {
			if (b === this._style) {
				return
			}
			if (this._style) {
				this._style.removeEvent("skinChange", this._replaceSkinAsync)
			}
			this._style = b;
			if (b.getSkin() != this._skin.$className) {
				this._skin.injects().Skins.getSkin(b.getSkin(), this._replaceSkin)
			} else {
				this._skin.applyStyle(b)
			}
			this._updateViewAttributes();
			this._style.addEvent("skinChange", this._replaceSkinAsync);
			this._onStyleReady()
		},
		_onEditModeChanged: function(c) {
			var d = this._editorMode;
			this._editorMode = c;
			this._editModeChanged(c, d)
		},
		_editModeChanged: function(c, d) {},
		_onStyleReady: function() {},
		getStyle: function() {
			return this._style
		},
		_replaceSkinAsync: function() {
			this._skin.injects().Skins.getSkin(this._style.getSkin(), this._replaceSkin)
		},
		_replaceSkin: function(c) {
			var d = new c();
			d.applyStyle(this._style);
			this.setSkin(d)
		},
		_updateViewAttributes: function() {
			this._view.removeAttribute("styleId");
			this._view.removeAttribute("styleid");
			this._view.setAttribute("skin", this._skin.$className);
			if (this._style) {
				this._view.removeAttribute("skin");
				this._view.setAttribute("styleId", this._style.getId())
			}
		},
		render: function() {},
		_onAllSkinPartsReady: function() {},
		_onDataChange: function(e, f, d) {
			if (!this._preventRenderOnDataChange(e, f, d)) {
				this._renderIfReady()
			}
		},
		_preventRenderOnDataChange: function(e, f, d) {},
		_renderIfReady: function() {
			if (this._componentReady) {
				this._tryRender(true)
			} else {
				this._testComponentReady()
			}
		},
		renderIfNeeded: function() {
			if (this._componentReady) {
				this._tryRender(false)
			} else {
				this._testComponentReady()
			}
		},
		_tryRender: function(f) {
			this._isRenderNeeded = this._isRenderNeeded || ( !! f);
			if (!this._componentReady || !this._needsRender()) {
				return this._componentReady
			}
			var d = false;
			if (this._minimumTimeBetweenRenders === 0 || this._timeSinceLastRender() > this._minimumTimeBetweenRenders) {
				if (this._prepareForRender()) {
					d = true;
					this.fireEvent(Constants.ComponentEvents.READY_FOR_RENDER);
					if (!this._skipRender && this._isDisplayed) {
						this._isRenderNeeded = false;
						this._newlyDisplayed = false;
						this._lastRenderTime = new Date().getTime();
						this.render();
						this._isRendered = true;
						this._refreshDataBindings();
						if (!this._areRenderingTriggersAttached) {
							this._areRenderingTriggersAttached = true;
							this._attachRenderTriggers()
						}
						this.fireEvent(Constants.ComponentEvents.RENDER);
						this._view.fireEvent(Constants.ComponentEvents.RENDER)
					}
				}
			} else {
				if (!this._renderDelayed) {
					this._renderDelayed = true;
					var e = Math.max(10, this._minimumTimeBetweenRenders - this._timeSinceLastRender());
					this.callLater(this._delayedRenderCB, [f], e)
				}
			}
			return d
		},
		_delayedRenderCB: function(b) {
			this._renderDelayed = false;
			this._tryRender(b)
		},
		_timeSinceLastRender: function() {
			return new Date().getTime() - this._lastRenderTime
		},
		_needsRender: function() {
			return this._isRenderNeeded
		},
		isReady: function() {
			return this._componentReady
		},
		isRendered: function() {
			return this._isRendered
		},
		setCollapsed: function(b) {
			if (b) {
				this.collapse()
			} else {
				this.uncollapse()
			}
		},
		callLater: function(g, f, e) {
			var h = this.injects().Utils.callLater(g, f, this, e);
			if (h) {
				this._callLaterIDs.push(h)
			}
			return h
		},
		callRenderLater: function(b) {
			b = b || 100;
			if (!this._renderDelayed) {
				this._renderDelayed = true;
				this.callLater(function() {
					this._renderDelayed = false;
					this._renderIfReady()
				}.bind(this), [], b)
			}
		},
		collapse: function() {
			if (this._view) {
				this._view.collapse()
			}
		},
		uncollapse: function(b) {
			if (this._view) {
				this._view.uncollapse(b)
			}
		},
		setState: function(g, f) {
			this._processStates();
			var h = this._currentState;
			if (!f) {
				f = this._stateGrpDict[g] || "DEFAULT"
			}
			f = f.toUpperCase();
			var e = this._stateMap[f];
			if (!e) {
				LOG.reportError(wixErrors.CM_UNKNOWN_STATE_GROUP, this.$className, "setState", f)
			} else {
				if (e.indexOf(g) < 0) {
					LOG.reportError(wixErrors.CM_UNKNOWN_STATE_NAME, this.$className, "setState", f + ":" + g)
				} else {
					this._currentStateMap[f] = g;
					this._syncState()
				}
			}
		},
		hasState: function(f, e) {
			this._processStates();
			if (!e) {
				e = this._stateGrpDict[f] || "DEFAULT"
			}
			e = e.toUpperCase();
			var d = this._stateMap[e];
			if (!d) {
				return false
			} else {
				if (d.indexOf(f) < 0) {
					return false
				} else {
					return true
				}
			}
		},
		removeState: function(g, f) {
			this._processStates();
			f = (f || "DEFAULT").toUpperCase();
			var e = this._stateMap[f];
			if (!e) {
				LOG.reportError(wixErrors.CM_UNKNOWN_STATE_GROUP, this.$className, "removeState", f)
			} else {
				var h = this._currentStateMap[f];
				if (h == g) {
					delete this._currentStateMap[f]
				}
				this._syncState()
			}
		},
		_syncState: function() {
			var i = [];
			for (var h in this._stateMap) {
				if (this._currentStateMap[h]) {
					i.push(this._currentStateMap[h])
				}
			}
			var f = i.join(" ");
			var g = this._view;
			var j = this._currentState || "";
			this._currentState = f;
			if (g === null) {
				return
			}
			g.setProperty("state", f);
			g.addClass("FOCRE_REFLOW_PLEASE");
			g.removeClass("FOCRE_REFLOW_PLEASE");
			if (f != j) {
				this._onStateChange(f, j);
				this.fireEvent("stateChange", {
					newState: f,
					oldState: j
				});
				g.triggerDisplayChanged()
			}
		},
		getState: function(c) {
			var d;
			if (c) {
				if (!this._currentStateMap) {
					this._processStates()
				}
				d = (this._currentStateMap[c.toUpperCase()])
			} else {
				d = this._view.getProperty("state")
			}
			return d || ""
		},
		_processStates: function() {
			if (this._stateMap) {
				return
			}
			var m, l;
			this._currentStateMap = {};
			this._stateMap = {
				DEFAULT: []
			};
			var h = this._states || [];
			var i = {};
			if (h instanceof Array) {
				for (m = 0;
				m < h.length; ++m) {
					l = h[m];
					if (typeof(l) != "string") {
						LOG.reportError(wixErrors.CM_MALFORMED_STATES, this.$className, "_processStates", h)
					} else {
						this._stateMap.DEFAULT.push(l)
					}
				}
			} else {
				if (typeof(h) == "object") {
					for (var j in h) {
						var k = h[j];
						if (k instanceof Array) {
							var n = j.toUpperCase();
							this._stateMap[n] = k.concat();
							for (m = 0;
							m < k.length; ++m) {
								l = k[m];
								if (l in i) {
									LOG.reportError(wixErrors.CM_DUPLICATE_STATE_NAME, this.$className, "_processStates", l)
								}
								i[l] = true;
								this._stateGrpDict[l] = n
							}
						} else {
							LOG.reportError(wixErrors.CM_MALFORMED_STATES, this.$className, "_processStates", j)
						}
					}
				} else {
					LOG.reportError(wixErrors.CM_MALFORMED_STATES, this.$className, "_processStates", h)
				}
			}
		},
		dispose: function() {
			if (this._isDisposed) {
				return LOG.reportError(wixErrors.COMPONENT_ALREADY_DISPOSED, this.className, "dispose", this._compId)
			}
			if (this._view) {
				this._view.cleanup();
				this._view.destroy();
				this._view = null;
				this._isDisposed = true
			}
			if (this._data) {
				this._data.removeComponentWithInterest(this);
				this._data.removeEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChange);
				this._data.getDataManager().removeDataItem(this._data);
				delete this._data
			}
			if (this._properties) {
				this._properties.removeComponentWithInterest(this);
				this._properties.removeEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChange);
				this._properties.getDataManager().removeDataItem(this._properties);
				delete this._properties
			}
			while (this._callLaterIDs.length > 0) {
				var i = this._callLaterIDs.pop();
				if (i) {
					this.injects().Utils.clearCallLater(i)
				}
			}
			this.removeEvents();
			var h = this.injects().Commands;
			if (h) {
				h.unregisterListener(this)
			}
			if (this.getSkin()) {
				this.getSkin().dispose()
			}
			if (this._skinParts) {
				for (var e in this._skinParts) {
					var l = this._skinParts[e];
					if (l) {
						if (l._compId) {
							try {
								l.dispose()
							} catch (j) {}
						} else {
							try {
								l.cleanup();
								l.destroy()
							} catch (k) {}
						}
					}
				}
				this._skinParts = null
			}
		},
		getIsDisposed: function() {
			return this._isDisposed
		},
		_onComponentWixified: function() {
			var n = this._view;
			if (this._canFocus) {
				n.addEvent(Constants.CoreEvents.FOCUS, this._onFocus.bind(this));
				n.addEvent(Constants.CoreEvents.BLUR, this._onBlur.bind(this))
			}
			this._isDisplayed = n.isNodeDisplayed();
			this._areRenderingTriggersAttached = false;
			var k = this._triggers;
			if (k) {
				for (var l = k.length - 1;
				l >= 0; --l) {
					var m = k[l];
					n.addEvent(m, this._onDefaultAction)
				}
			}
			var j = Constants.DisplayEvents,
				i = this._onRenderingTriggerEvent;
			for (var c in Constants.DisplayEvents) {
				n.addEvent(j[c], i)
			}
		},
		_onComponentReady: function() {
			var b = this._view
		},
		_attachRenderTriggers: function() {
			var f = this._renderTriggers || [];
			var e = this._view;
			for (var d = f.length - 1;
			d >= 0; --d) {
				e.addEvent(f[d], this._onRenderingTriggerEvent)
			}
		},
		_testComponentReady: function() {
			if (this._componentReady) {
				return
			}
			if (this._view.getLogic) {
				if (this._isBaseComponentReady()) {
					this._componentReady = true;
					if (this._isEnabled) {
						this._handleEnabled()
					} else {
						this._handleDisabled()
					}
					if (this._tryRender()) {
						this.fireEvent(Constants.ComponentEvents.READY);
						this._view.fireEvent(Constants.ComponentEvents.READY)
					} else {
						this._componentReady = false
					}
				}
			} else {
				var b = function() {
						this._view.removeEvent(Constants.ComponentEvents.WIXIFIED, b);
						this._testComponentReady()
					}.bind(this);
				this._view.addEvent(Constants.ComponentEvents.WIXIFIED, b)
			}
		},
		_isBaseComponentReady: function() {
			return this._allComponentPartsReady && !! this._skinParts && ( !! this._data || this.getAcceptableDataTypes().indexOf("") >= 0)
		},
		_prepareForRender: function() {
			return true
		},
		_onStateChange: function(c, d) {},
		fancify: function(c) {
			var d = this.injects().Components.createComponent("mobile.editor.components.FancyItem", "mobile.editor.skins.FancyItemSkin", undefined, {}, null, function() {
				var a = this;
				d.getLogic().createGui({
					dataPanel: this,
					upClickHandler: c.upCallback,
					downClickHandler: c.downCallback,
					deleteHandler: c.deleteCallback,
					showHideToggleHandler: c.isHiddenCallback,
					isHidden: c.initialIsHidden
				}, this._skinParts.fancyContainer);
				d.getLogic()._skinParts.view.insertInto(a._skinParts.view);
				this._tryRender(true);
				c.readyCallback && c.readyCallback()
			}.bind(this))
		},
		_refreshDataBindings: function() {
			var i = this._autoBoundParts;
			if (!i || !i.length) {
				return
			}
			var v = this._data && this._data.getData();
			var p = this.injects();
			var s = p.Resources;
			var q = p.Utils;
			var z = this._skinParts;
			for (var u = i.length - 1;
			u >= 0; --u) {
				var y = i[u];
				var t;
				var w = z[y.skinPart];
				if (!w) {
					continue
				}
				if (y.bindToData) {
					t = v && v[y.bindToData];
					if (null === t || undefined === t) {
						LOG.reportError(wixErrors.CM_NO_DATA, this.className, "refreshDataBindings", y.bindToData);
						continue
					}
				} else {
					if (y.bindToDictionary) {
						t = s.get("EDITOR_LANGUAGE", y.bindToDictionary);
						if (null === t || undefined === t) {
							LOG.reportError(wixErrors.CM_NO_DICTIONARY_DATA, this.className, "refreshDataBindings", y.bindToDictionary);
							continue
						}
					} else {
						if (y.bindToSelf) {
							t = this[y.bindToSelf]
						}
					}
				}
				if (y.dictionaryFallback && t.match(/^\s*$/)) {
					t = s.get("EDITOR_LANGUAGE", y.dictionaryFallback)
				}
				if (y.isView) {
					var x = y.viewType;
					if ("" === x) {
						var B = w.nodeName;
						if (B.toLowerCase() == "input") {
							var A = w.getAttribute("type").toLowerCase();
							if ("text" == A) {
								x = "textinput"
							} else {
								if ("checkbox" == A || "radio" == A) {
									x = "check"
								}
							}
						} else {
							x = "text"
						}
						y.viewType = x
					}
					if ("textinput" == x) {
						w.setAttribute("value", t)
					} else {
						if ("check" == x) {
							var r = q.stringToBoolean(t);
							if (r) {
								w.setAttribute("checked", true)
							} else {
								w.removeAttribute("checked")
							}
						} else {
							w.innerHTML = t
						}
					}
				} else {
					w.setTextContent(t)
				}
			}
		},
		hide: function() {
			if (this._view) {
				this._view.hide()
			}
		},
		show: function() {
			if (this._view) {
				this._view.show()
			}
		},
		_disableLinks: function(c) {
			var d = this;
			c.addEvent("click", function(b) {
				var a = d.injects().Viewer;
				if (a.getPreviewMode()) {
					b.preventDefault();
					if (W.Viewer.getLinkTipFunc()) {
						var g = $(this).getProperty("href") || "";
						var h = d.injects().Data.createDataItem({
							type: "Link",
							target: g,
							linkType: "FREE_LINK"
						});
						W.Viewer.getLinkTipFunc()(h)
					}
				}
			})
		},
		_sanitizeLinks: function(f) {
			for (var e = 0;
			e < f.length; ++e) {
				var d = f[e];
				this._sanitizeLink(d)
			}
		},
		_sanitizeLink: function(c) {
			var d = c.get("href");
			if (d) {
				if (d.indexOf("http://") !== 0 && d.indexOf("https://") !== 0) {
					if (d.indexOf("telnet://") !== 0 && d.indexOf("ftp://") !== 0 && d.indexOf("mailto:") !== 0) {
						if (d.indexOf("@") > 0) {
							c.set("href", "mailto:" + d)
						} else {
							if (d.indexOf("www") === 0 || (d.indexOf("www") !== 0 && d.indexOf("#") !== 0)) {
								c.set("href", "http://" + d)
							}
						}
					}
				}
			}
		},
		_onFocus: function() {},
		_onBlur: function() {},
		_onDefaultAction: function() {
			this.executeCommand()
		},
		executeCommand: function(f) {
			if (!this._command) {
				if (this._commandName) {
					var e = W.Commands.getCommand(this._commandName);
					if (e) {
						this.setCommand(e, this._commandParameter)
					}
				}
			}
			if (this._command) {
				var d = arguments.length > 0 ? f : this._commandParameter;
				if (d) {
					d = this._parseDataReference(d)
				}
				this._command.execute(d, this)
			}
		},
		enable: function() {
			if (!this._isEnabled) {
				this._isEnabled = true;
				this._view.removeAttribute("disabled");
				this._handleEnabled()
			}
		},
		disable: function() {
			if (this._isEnabled) {
				this._isEnabled = false;
				this._view.setAttribute("disabled", "disabled");
				this._handleDisabled()
			}
		},
		isEnabled: function() {
			return this._isEnabled
		},
		setCommand: function(f, d) {
			var e = this.injects().Commands;
			if (typeof(f) == "string") {
				this._commandName = f;
				f = e.getCommand(f)
			} else {
				if (!(f instanceof e.Command)) {
					LOG.reportError(wixErrors.BAD_COMMAND, this.className, "setCommand", f);
					return
				}
			}
			this._commandParameter = d;
			if (this._command) {
				this._command.unregisterListener(this);
				this._command = null
			}
			if (f) {
				this._command = f;
				f.registerListener(this, null, this._onCommandStatusChanged);
				if (this._commandName) {
					delete this._commandName
				}
			} else {
				if (this._commandName) {
					e.registerCommandListenerByName(this._commandName, this, null, this._onCommandStatusChanged)
				}
			}
		},
		getCommandName: function() {
			return this._command ? this._command.getName() : this._commandName
		},
		getCommandParameter: function() {
			return this._commandParameter
		},
		_onCommandStatusChanged: function(b) {
			if (b.isEnabled()) {
				this.enable()
			} else {
				this.disable()
			}
		},
		_onEnabled: function() {},
		_handleEnabled: function() {
			var d = this._view;
			var e = d.tabIndex;
			var f = d._savedTabIndex;
			if (null === e || undefined === e) {
				e = -1
			}
			if (-1 == e) {
				if (f !== undefined) {
					d.tabIndex = f
				} else {
					if (this._canFocus) {
						d.tabIndex = 0
					}
				}
			}
			if (this._canFocus) {
				d.addClass("focusable")
			}
			if (this._componentReady) {
				this._onEnabled()
			}
		},
		_onDisabled: function() {},
		_handleDisabled: function() {
			var c = this._view;
			var d = c.tabIndex;
			if (null === d || undefined === d) {
				d = -1
			}
			if (d >= 0) {
				c._savedTabIndex = d;
				c.tabIndex = -1
			}
			if (document.activeElement == c) {
				c.blur()
			}
			if (this._canFocus) {
				c.removeClass("focusable")
			}
			if (this._componentReady) {
				this._onDisabled()
			}
		},
		_onRenderingTriggerEvent: function(h) {
			var f = this._view.isNodeDisplayed();
			switch (h) {
			case Constants.DisplayEvents.COLLAPSED:
			case Constants.DisplayEvents.REMOVED_FROM_DOM:
				this._isDisplayed = false;
				this._newlyDisplayed = false;
				break;
			case Constants.DisplayEvents.SKIN_CHANGE:
				if (this._renderTriggers.contains(Constants.DisplayEvents.SKIN_CHANGE)) {
					if (f) {
						this._renderIfReady()
					} else {
						this._skinSizeInvalidated = true
					}
				}
				break;
			case Constants.DisplayEvents.MOVED_IN_DOM:
				if (this._view.isNodeDisplayed() && this._renderTriggers.contains(Constants.DisplayEvents.MOVED_IN_DOM)) {
					this._renderIfReady()
				}
				this._skin.renderCssIfNeeded();
				break;
			default:
				var g = this._isDisplayed;
				this._isDisplayed = f;
				this._newlyDisplayed = this._newlyDisplayed || (!g && this._isDisplayed);
				var e = this._renderTriggers.contains(h) || this._renderTriggers.contains(Constants.DisplayEvents.DISPLAY_CHANGED);
				if (this._newlyDisplayed && (e || !this._areRenderingTriggersAttached || this._skinSizeInvalidated)) {
					this._skinSizeInvalidated = false;
					this._renderIfReady()
				}
				this._skin.renderCssIfNeeded();
				this._addedToDom();
				break
			}
		},
		getIsDisplayed: function() {
			return this._isDisplayed
		},
		_addedToDom: function() {},
		checkVisibility: function() {
			this._isDisplayed = this._view.isNodeDisplayed();
			return this._isDisplayed
		},
		_setDataField: function(c, d) {
			this._data.set(c, d, true)
		},
		_setMetaDataField: function(c, d) {
			this._data.setMeta(c, d)
		},
		getFocusNode: function() {
			var c = this._skinParts.view;
			for (var d in this._skinPartsSchema) {
				if (this._skinPartsSchema[d].focus) {
					c = this._skinParts[d] || c
				}
			}
			return c
		},
		getSkinPart: function(b) {
			return this._skinParts[b]
		},
		getSkin: function() {
			return this._skin
		},
		setComponentProperties: function(c) {
			var d = this._properties;
			this._properties = c;
			c.addComponentWithInterest(this);
			if (c && c != d) {
				this._properties.addEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChange)
			}
		},
		getComponentProperty: function(b) {
			if (!this._properties) {
				this._createComponentProperties()
			}
			return this._properties.get(b)
		},
		setComponentProperty: function(f, d, e) {
			if (!this._properties) {
				this._createComponentProperties()
			}
			this._properties.set(f, d, e)
		},
		_createComponentProperties: function() {
			var d = this._compId;
			var c = this._propertiesSchemaName;
			if (!c) {
				return null
			}
			this._properties = W.ComponentData.addDataItem(d, {
				type: c
			}, this);
			this._properties.addComponentWithInterest(this);
			this._view.setProperty("propertyQuery", d);
			this._properties.addEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChange)
		},
		deleteComponentProperty: function(b) {},
		_onComponentPropertyChange: function(c, d) {},
		_loadComponentProperties: function() {},
		getComponentProperties: function() {
			if (!this._properties) {
				this._createComponentProperties()
			}
			return this._properties
		},
		_registerSkinPartCommands: function() {
			var p = this._skinPartsSchema;
			var l = this.injects().Commands;
			for (var k in p) {
				var o = p[k];
				var n = this._skinParts[k];
				var j = this._parseDataReference(o.command);
				if (!n || !j) {
					continue
				}
				var r;
				if (typeof(j) == "string") {
					r = l.getCommand(j)
				} else {
					r = j
				}
				if ("view" == k || o.type == Constants.ComponentPartTypes.HTML_ELEMENT) {
					var q = this._parseDataReference(o.commandParameter);
					if (r) {
						n._command = r
					} else {
						n._commandName = j
					}
					n._commandParameter = q;
					var m = n.nodeName.toLowerCase();
					if (m == "select") {
						n.addEvent(Constants.CoreEvents.CHANGE, this._elementChangeExecuteCommand)
					} else {
						n.addEvent(Constants.CoreEvents.CLICK, this._elementExecuteCommand)
					}
				} else {
					n.setCommand(r || j, o.commandParameter)
				}
			}
		},
		_registerDataBindings: function() {
			var r = [];
			var o = this._skinPartsSchema;
			for (var k in o) {
				var n = o[k];
				var m = this._skinParts[k];
				if (!m) {
					continue
				}
				var q = (n.type == Constants.ComponentPartTypes.HTML_ELEMENT);
				var l = q ? m : m.getViewNode();
				var p = null;
				var j = n.autoBindData || (l && l.getAttribute("autoBindData"));
				if (j) {
					p = {
						bindToData: j
					}
				} else {
					j = n.autoBindDictionary || (l && l.getAttribute("autoBindDictionary"));
					if (j) {
						p = {
							bindToDictionary: j
						}
					} else {
						j = n.autoBindThis || (l && l.getAttribute("autoBindThis"));
						if (j) {
							p = {
								bindToSelf: j
							}
						}
					}
				}
				if (p) {
					p.skinPart = k;
					p.isView = q;
					p.viewType = "";
					p.dictionaryFallback = n.dictionaryFallback;
					r.push(p)
				}
			}
			if (r.length) {
				this._autoBoundParts = r
			}
		},
		_parseDataReference: function(j) {
			if (!j || (typeof(j) != "string")) {
				return j
			}
			var e = j;
			try {
				var i = j.indexOf("this.");
				if (0 === i) {
					try {
						e = this[j.substring(5)]
					} catch (h) {
						e = null
					}
					if (!e) {
						W.Utils.debugTrace(this.className + " unknown part data reference " + j)
					}
				} else {
					i = j.indexOf("data.");
					if (0 === i) {
						if (!this._data || !(e = this._data.get(j.substring(5)))) {
							W.Utils.debugTrace(this.className + " missing data for skinpart " + j)
						}
					}
				}
			} catch (g) {
				W.Utils.debugTrace(this.className + " error processing partData " + j)
			}
			return e
		},
		_elementExecuteCommand: function(d) {
			var c = this._command || (this._command = W.Commands.getCommand(this._commandName));
			if (c) {
				c.execute(this._commandParameter || d, this)
			}
		},
		_elementChangeExecuteCommand: function(e) {
			var f = this.value;
			var d = this._command || (this._command = W.Commands.getCommand(this._commandName));
			if (d) {
				d.execute(f)
			}
		},
		onDraggedToStage: function() {},
		hasChildren: function() {
			return false
		}
	}
};
W.Classes.newClass({
	name: "mobile.core.skins.BaseSkin",
	Class: {
		Binds: ["_onStylePropChange"],
		initialize: function() {
			this._isDisposed = false
		},
		_comps: [],
		_params: [{
			type: "domId",
			name: "Component ID",
			id: "compId",
			inherited: true
		}],
		_html: "<div></div>",
		_css: ["base {}"],
		_viewNode: null,
		_updatePartsCallback: null,
		_skinParts: null,
		_inlineContainer: null,
		applyStyle: function(b) {
			if (!b || this._style === b) {
				return
			}
			this._removeOldStyle();
			this._addStyle(b);
			this._render()
		},
		_removeOldStyle: function() {
			if (this._style) {
				this._style.removeEvent(Constants.StyleEvents.PROPERTY_CHANGED, this._onStylePropChange)
			}
			delete this._style
		},
		_addStyle: function(b) {
			this._style = b;
			this._style.addEvent(Constants.StyleEvents.PROPERTY_CHANGED, this._onStylePropChange)
		},
		register: function(e, d, f) {
			if (!this._isRegistered()) {
				this._viewNode = e;
				this._updatePartsCallback = d;
				this._skinParamChangeCallback = f;
				this._render()
			} else {
				LOG.reportError(wixErrors.SKIN_MANAGER_RE_REGISTER, "mobile.core.skins.BaseSkin", "register", e.getProperty("id"))
			}
		},
		unRegister: function() {
			this._viewNode = null;
			this.dispose()
		},
		_isRegistered: function() {
			return (this._viewNode && this._updatePartsCallback)
		},
		getInlineContent: function() {
			if (!this._skinParts) {
				return this._viewNode.getChildren()
			}
			if (this._skinParts.inlineContent) {
				return this._skinParts.inlineContent.getChildren()
			}
			return null
		},
		_render: function() {
			if (!this._isRegistered()) {
				return
			}
			var c = this.getInlineContent();
			this._skinParts = this._buildSkin();
			if (this._skinParts.inlineContent && c) {
				this._skinParts.inlineContent.empty();
				for (var d = 0;
				d < c.length;
				d++) {
					c[d].insertInto(this._skinParts.inlineContent, "bottom", Constants.DisplayEvents.MOVED_IN_DOM)
				}
			}
			this._updatePartsCallback(this._skinParts)
		},
		_onStylePropChange: function(b) {
			this.injects().Skins.stylePropertiesChangedForSkin(this.className, this._style, b.properties);
			this._skinParamChangeCallback(b.properties)
		},
		_informLogicOfParamChanges: function() {},
		_buildSkin: function(b) {
			this._renderCss();
			return this._renderHtml(b)
		},
		_renderCss: function() {
			this.injects().Skins.buildSkinCSS(this.className, this._style)
		},
		_renderHtml: function(c) {
			var d = this._viewNode;
			if (c && c.viewNode) {
				d = c.viewNode
			}
			return this.injects().Skins.buildSkinHTML(this.className, d, this._style)
		},
		renderCssIfNeeded: function() {
			var h = true;
			if (this._style) {
				h = this._style.isStyleRenderedForAllSkins()
			} else {
				var e = this.getSkinClassData();
				var g = e.CSSBuildFlags;
				for (var f in g) {
					if (!g[f]) {
						h = false;
						break
					}
				}
			}
			if (!h) {
				this._renderCss()
			}
		},
		getStyle: function() {
			return this._style
		},
		getParams: function() {
			return this._params
		},
		getCompPartsDefinition: function() {
			return this.compParts || {}
		},
		getCompPartSkinName: function(d) {
			var c = this.compParts;
			return c && c[d].skSin
		},
		getUniqueClass: function(b) {
			return this.injects().Skins.getUniqueClass(b, this.$className)
		},
		dispose: function() {
			this._isDisposed = true;
			this._updatePartsCallback = null;
			this._removeOldStyle()
		},
		getParamValue: function(b) {
			this.injects().Skins.getSkinParamValue(b, this._style)
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.data.DataItemBase",
	Class: {
		Extends: Events,
		Binds: ["fireDataChangeEvent"],
		Static: {
			METADATA_DEFAULTS: {
				isPreset: false,
				isHidden: false,
				description: "",
				isPersistent: true
			},
			getFieldsFilterArray: function(b) {
				if (typeOf(b) == "array") {
					return b
				}
				return Object.keys(b)
			}
		},
		initialize: function(c, d) {
			this._data = c;
			if (c.type && (typeof(c.type) != "string")) {
				throw ("invalid data type. must be string")
			}
			this._dataType = c.type;
			this._dataManager = d || this.injects().Data;
			this.componentsWithInterest = []
		},
		setData: function(e, f) {
			var d = (this._data !== e);
			this._data = e;
			this._dataType = e.type;
			d && !f && this.fireDataChangeEvent()
		},
		setFields: function(e) {
			var f = {};
			var g = {};
			var h = this._data;
			Object.forEach(e, function(a, b) {
				if (h[b] !== a) {
					f[b] = h[b];
					g[b] = a
				}
				this.set(b, a, true)
			}.bind(this));
			if (Object.keys(f).length > 0) {
				this.fireDataChangeEvent(g, f)
			}
		},
		setMeta: function(f, i, j) {
			if (f in this.METADATA_DEFAULTS) {
				this._data.metaData = this._data.metaData || {};
				this._data.metaData[f] = i;
				if (j) {
					var h = {
						key: i
					};
					var g = {};
					this.fireDataChangeEvent(h, g)
				}
			} else {
				LOG.reportError(wixErrors.INVALID_METADATA_FIELD, "DataItemBase", "setMeta", f)()
			}
		},
		set: function(l, j, k, g) {
			j = this.injects().Utils.sanitizeUnicode(j);
			if (this._data[l] !== j) {
				var h = {};
				h[l] = this._data[l];
				this._data[l] = j;
				this.setMeta("isPreset", false);
				if (!k) {
					var i = {};
					i[l] = j;
					this.fireDataChangeEvent(l, i, h, g)
				}
			}
		},
		getFields: function(f) {
			var e = {};
			var d = this.getFieldsFilterArray(f);
			d.forEach(function(a) {
				e[a] = this.get(a)
			}.bind(this));
			return e
		},
		getData: function() {
			return this._data
		},
		getType: function() {
			return this._data.type
		},
		getMeta: function(d) {
			if (d in this.METADATA_DEFAULTS) {
				var c = this._data.metaData && this._data.metaData[d];
				if (c !== undefined) {
					return c
				}
				return this.METADATA_DEFAULTS[d]
			} else {
				LOG.reportError(wixErrors.INVALID_METADATA_FIELD, "DataItemBase", "getMeta", d)()
			}
		},
		get: function(d) {
			var c = this._data[d];
			if (typeof(c) === "string") {
				c = this._sanitizeString(c)
			}
			return c
		},
		_sanitizeString: function(b) {
			return b.replace(/[\u0080\u0099\u009C]/g, "")
		},
		fireDataChangeEvent: function(f, h, j, i) {
			this._dataManager.markDirtyObject(this);
			this._dataManager.flagDataChange();
			var g = (f !== undefined) ? [this, f, h, j] : [this];
			this.fireEvent(Constants.DataEvents.DATA_CHANGED, g);
			this._dataManager.reportDataItemChangeEvent(this, h, j, i)
		},
		toString: function() {
			return "[Data Object]"
		},
		getDataManager: function() {
			return this._dataManager
		},
		addComponentWithInterest: function(b) {
			this.componentsWithInterest.include(b)
		},
		removeComponentWithInterest: function(b) {
			this.componentsWithInterest.erase(b)
		},
		cloneData: function() {
			return Object.clone(this.getData())
		},
		hasField: function(c) {
			var d = this._data[c];
			return d !== null && d != undefined
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.data.DataItemWithSchema",
	Class: {
		Extends: "mobile.core.managers.data.DataItemBase",
		Implements: [Events],
		Static: {
			FIELD_TYPE_DEFAULTS: {
				refList: [],
				ref: "",
				number: Number.NaN,
				string: "",
				color: "255,255,255,1",
				"boolean": false,
				object: {},
				list: []
			}
		},
		initialize: function(f, d, e) {
			this._schema = f;
			this._snapshot = {};
			this.parent(d, e);
			this._setSchemaDefaults()
		},
		reset: function() {
			for (var c in this._schema) {
				var d = this._schema[c]["default"];
				if (this._data[c] != d) {
					this.set(c, d)
				}
			}
		},
		removeField: function(b) {
			delete this._data[b]
		},
		takeSnapshot: function() {
			var b = {};
			this._cloneBySchema(b, this._data);
			this._snapshot = b
		},
		restoreSnapshot: function(b) {
			if (this._snapshot) {
				this._cloneBySchema(this._data, this._snapshot);
				this.discardSnapshot();
				if (b !== false) {
					this.fireDataChangeEvent()
				}
			} else {
				LOG.reportError(wixErrors.DATA_MISSING_SNAPSHOT, "DataItem", "restoreSnapshot", this._dataType)
			}
		},
		discardSnapshot: function() {
			this._snapshot = null
		},
		getSchema: function() {
			return this._schema
		},
		setSchema: function(b) {
			this._schema = b
		},
		getFieldSchema: function(b) {
			return this._schema[b]
		},
		_setSchemaDefaults: function() {
			for (var h in this._schema) {
				var g = this._schema[h];
				if (g && g["default"]) {
					var e = this._data[h];
					var f = this.get(h);
					if (!e && e != f) {
						this.set(h, f)
					}
				}
			}
		},
		get: function(e) {
			var g = this.parent(e);
			var h = this._schema[e];
			if (g !== undefined && g !== null) {
				if (Constants.DataTypes.TYPE_RESOURCE_KEY == h) {
					var f = this.getDataManager().getResourceManager();
					if (f) {
						g = f.get("EDITOR_LANGUAGE", g, g)
					}
				}
			} else {
				g = this._getDefaultValue(e);
				this._data[e] = g
			}
			if ("color" == h) {
				return new W.Color(value)
			}
			return g
		},
		getFieldType: function(b) {
			return this._schema[b]
		},
		_getDefaultValue: function(f) {
			var d = this._schema[f];
			var e;
			if (!d) {
				LOG.reportError(wixErrors.SCHEMA_MISSING_KEY, "DataItemWithSchema", "_getDefaultValue", [this._data, this._schema, f])();
				return
			}
			if (typeof d == "string") {
				e = this.FIELD_TYPE_DEFAULTS[d]
			} else {
				if (d.hasOwnProperty("default")) {
					e = d["default"]
				} else {
					e = this.FIELD_TYPE_DEFAULTS[d.type]
				}
			}
			return this._cloneDefaultObject(e)
		},
		_cloneDefaultObject: function(b) {
			if (b instanceof Array) {
				return b.splice(0, 0)
			}
			if (typeof b == "object") {
				return Object.clone(b)
			}
			return b
		},
		_cloneBySchema: function(j, i) {
			for (var f in this._schema) {
				var h = i[f];
				var g = typeof h;
				if ("object" == g) {
					j[f] = Object.clone(h)
				} else {
					j[f] = h
				}
			}
			return j
		},
		copySchemaFieldsFrom: function(d, c) {
			this._cloneBySchema(this._data, d._data);
			if (!c) {
				this.fireDataChangeEvent()
			}
		},
		copySchemaFieldsTo: function(d, c) {
			this._cloneBySchema(d._data, this._data);
			if (!c) {
				d.fireDataChangeEvent()
			}
		},
		setData: function(d, c) {
			if (d === this._data) {
				return
			}
			if (!this._data) {
				this.parent(d, c)
			} else {
				if (this._data.type == d.type) {
					d.id = this._data.id;
					this.parent(d, false);
					this._setSchemaDefaults();
					if (c !== false) {
						this.fireDataChangeEvent()
					}
				}
			}
		},
		hasField: function(c) {
			var d = this._data[c];
			return d !== null && d != undefined
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.data.PropertiesItem",
	Class: {
		Extends: "mobile.core.managers.data.DataItemWithSchema",
		initialize: function(g, e, f, h) {
			this.parent(g, e, f);
			this._ownerComponent = h
		}
	}
});
Constants.STYLE = {
	SOURCE: {
		THEME: "theme",
		VALUE: "value"
	}
};
W.Classes.newClass({
	name: "mobile.core.managers.style.StyleProperties",
	imports: ["mobile.core.managers.utils.BufferFunction"],
	Class: {
		Extends: Events,
		Binds: ["_onThemePropertiesChange"],
		Static: {
			STYLE_PROPERTIES_FILTER: {
				color: [Constants.STYLE.SOURCE.THEME],
				font: [Constants.STYLE.SOURCE.THEME],
				radius: [Constants.STYLE.SOURCE.VALUE],
				size: [Constants.STYLE.SOURCE.VALUE],
				boxShadow: [Constants.STYLE.SOURCE.VALUE]
			},
			PROPERTY_TYPE_EXTRA_PARAMS: {
				color: {
					alpha: {
						prefix: "alpha",
						defaultValue: 1,
						type: "number"
					}
				},
				boxShadow: {
					isOn: {
						prefix: "boxShadowToggleOn",
						defaultValue: true,
						type: "boolean"
					}
				}
			}
		},
		initialize: function(g, h, e, f) {
			if (g && h && e && f) {
				this._configStyle(g, h, e, f)
			}
		},
		setRedirectCssTarget: function(b) {
			this._redirectCssTarget = (b === true)
		},
		isCssRedirectedToStyle: function() {
			return this._redirectCssTarget
		},
		updateCssRule: function(d, c) {
			this._changedCssClasses[d] = c;
			this._dispatchCssChanges()
		},
		_dispatchCssChanges: function() {
			this.fireEvent("cssChanged", this._changedCssClasses);
			this._changedCssClasses = {}
		},
		_configStyle: function(h, i, j, f) {
			this._redirectCssTarget = false;
			this._changedCssClasses = {};
			var g = new this.imports.BufferFunction(this, "_dispatchCssChanges");
			g.setBufferTime(50);
			this._resetUsedSkinNameArray();
			this.StyleClass = W.Classes.get("mobile.core.managers.style.StyleProperties");
			this._isStyleRendered = {};
			this._groupId = i.get("id") + "-" + f.getNewGroupId();
			this._topLevelStyle = f;
			this._styleDataItem = i;
			this._styleRawData = h;
			h.properties = h.properties || {};
			h.propertiesSource = h.propertiesSource || {};
			h.groups = h.groups || {};
			this._resetData(h.properties, h.propertiesSource, h.groups);
			this._changes = {};
			this.createStylesAndRawData(h, j);
			W.Theme.getDataItem().addEvent(Constants.DataEvents.DATA_CHANGED, this._onThemePropertiesChange)
		},
		_resetData: function(d, e, f) {
			this._properties = d || {};
			this._propertiesSource = e || {};
			this._groups = f || {};
			this._propertiesTypes = {};
			this._propertiesCounter = {};
			this._propertiesLangKey = {};
			this._groupsStyleObjects = {}
		},
		getRawData: function() {
			return this._groups
		},
		_onThemePropertiesChange: function(f, e) {
			for (var g in e) {
				for (var h in this._properties) {
					if (this._propertiesSource[h] == Constants.STYLE.SOURCE.THEME && this._properties[h] == g) {
						this._firePropertyChangesEvent(h)
					}
				}
			}
		},
		_firePropertyChangesEvent: function(b) {
			this._changes[b] = this._propertiesTypes[b];
			this.injects().Utils.clearCallLater(this._dispatchEventId);
			this._dispatchEventId = this.injects().Utils.callLater(this._dispatchChangeEventAndResetChanges, [], this, 50)
		},
		_dispatchChangeEventAndResetChanges: function() {
			this.fireEvent(Constants.StyleEvents.PROPERTY_CHANGED, {
				style: this,
				properties: this._changes
			});
			this._changes = {}
		},
		isStyleRenderedForSkin: function(b) {
			return this._isStyleRendered[b] || false
		},
		isStyleRenderedForAllSkins: function() {
			for (var b in this._isStyleRendered) {
				if (!this._isStyleRendered[b]) {
					return false
				}
			}
			return true
		},
		setStyleRenderFlag: function(d) {
			for (var c in this._isStyleRendered) {
				this.setStyleRenderFlagForSkin(c, d)
			}
		},
		setStyleRenderFlagForSkin: function(c, d) {
			this._isStyleRendered[c] = d
		},
		invalidateStyle: function() {
			this.setStyleRenderFlag(false);
			for (var b in this._groupsStyleObjects) {
				this._groupsStyleObjects[b].invalidateStyle()
			}
		},
		get: function(b) {
			return this._properties[b]
		},
		getStyleByGroupName: function(b) {
			return this._groupsStyleObjects[b]
		},
		set: function(g, e) {
			var h = {};
			var f = {};
			h[g] = e;
			f[g] = this._properties[g];
			this._properties[g] = e;
			this._styleDataItem.fireDataChangeEvent(g, h, f);
			this._firePropertyChangesEvent(g)
		},
		changePropertySource: function(d, e, f) {
			if (this._isPropertySourceValid(f)) {
				this._propertiesSource[d] = f;
				this.set(d, e)
			} else {
				LOG.reportError(wixErrors.STYLE_PROP_SRC_UNKNOWN, "StyleProperties", "changePropertySource", f)()
			}
		},
		_isPropertySourceValid: function(f) {
			var d = false;
			for (var e in Constants.STYLE.SOURCE) {
				if (Constants.STYLE.SOURCE[e] === f) {
					d = true
				}
			}
			return d
		},
		getPropertyExtraParamValue: function(h, f) {
			var j = this.getPropertyType(h);
			var g = this._getExtraParamDefinitionByType(j, f);
			if (!g) {
				LOG.reportError("STYLE_EXTRA_PARAM_DEFINITION_MISSING", "StyleProperties", "setPropertyExtraParamValue", j + "-" + f)();
				return
			}
			var i = this._getPropertyExtraParamId(h, g.prefix);
			return this._convertStringToType(this._properties[i], g.type)
		},
		setPropertyExtraParamValue: function(n, q, k, j) {
			var o = this.getPropertyType(n);
			var l = this._getExtraParamDefinitionByType(o, q);
			if (!l) {
				LOG.reportError("STYLE_EXTRA_PARAM_DEFINITION_MISSING", "StyleProperties", "setPropertyExtraParamValue", o + "-" + q)();
				return
			}
			var m = this._getPropertyExtraParamId(n, l.prefix);
			this._properties[m] = String(k);
			var p = {};
			var r = {};
			p[m] = this._properties[m];
			this._styleDataItem.fireDataChangeEvent(n, p, r);
			if (j) {
				this._firePropertyChangesEvent(n, p, r)
			}
		},
		_convertStringToType: function(c, d) {
			switch (d) {
			case "number":
				c = Number(c);
				break;
			case "boolean":
				c = String(c).toLowerCase() === "true";
				break
			}
			return c
		},
		_getExtraParamDefinitionByType: function(c, d) {
			return this.PROPERTY_TYPE_EXTRA_PARAMS[c] && this.PROPERTY_TYPE_EXTRA_PARAMS[c][d]
		},
		_getPropertyExtraParamId: function(c, d) {
			return d + "-" + c
		},
		isPropertyAvailable: function(b) {
			return this._propertiesTypes.hasOwnProperty(b)
		},
		createStylesAndRawData: function(c, d) {
			this._topLevelStyle.unprocessedSkins.add(d);
			W.Skins.getSkin(d, function(b) {
				this._addUsedSkinName(d);
				var a = new b();
				this._saveSkinParamsAsProperties(a.getParams());
				this._parseSkinInnerComponents(c, a.getCompPartsDefinition());
				this._topLevelStyle.unprocessedSkins.remove(d)
			}.bind(this))
		},
		_saveSkinParamsAsProperties: function(c) {
			for (var d = 0;
			d < c.length;
			d++) {
				this._addProperty(c[d])
			}
		},
		_addProperty: function(d) {
			var f = d.id;
			var e = this._getParamData(d);
			if (e.source != "unknown" && !e.ignore) {
				this._properties[f] = this._properties[f] || d.defaultTheme || d.defaultValue;
				this._propertiesTypes[f] = e.type;
				this._propertiesSource[f] = this._propertiesSource[f] || e.source;
				this._propertiesLangKey[f] = e.langKey;
				this._increasePropertyUseCount(f);
				this._setPropertyExtraParams(f, e)
			}
		},
		_parseSkinInnerComponents: function(k, i) {
			for (var l in i) {
				var n = i[l].skin;
				var h = i[l].styleGroup;
				if (!h || h.toLowerCase() == "undefined") {
					continue
				}
				if (h == "inherit") {
					this.createStylesAndRawData(k, n)
				} else {
					if (!k.groups[h]) {
						k.groups[h] = {
							properties: {},
							groups: {}
						}
					}
					var j = k.groups[h];
					if (!this._groupsStyleObjects[h]) {
						var m = new this.StyleClass(j, this._styleDataItem, n, this._topLevelStyle);
						this._groupsStyleObjects[h] = m
					} else {
						this._groupsStyleObjects[h].createStylesAndRawData(j, n)
					}
				}
			}
		},
		_getParamData: function(j) {
			var f = {
				source: "unknown"
			};
			if (j.defaultTheme) {
				f.source = Constants.STYLE.SOURCE.THEME;
				f.value = j.defaultTheme;
				f.type = W.Theme.getPropertyType(j.defaultTheme)
			} else {
				if (j.defaultValue) {
					f.source = Constants.STYLE.SOURCE.VALUE;
					f.value = j.defaultValue;
					f.type = this._getGeneralTypeFromCssType(j.type)
				}
			}
			f.langKey = j.lang || j.id;
			f.styleDefaults = j.styleDefaults || {};
			var h = (j.noshow === true);
			var i = this.STYLE_PROPERTIES_FILTER[f.type];
			var g = i && i.contains(f.source);
			f.ignore = (h === true || g !== true);
			return f
		},
		_increasePropertyUseCount: function(b) {
			if (this._propertiesCounter[b]) {
				this._propertiesCounter[b] += 1
			} else {
				this._propertiesCounter[b] = 1
			}
		},
		_garbageCollection: function() {
			for (var c in this._properties) {
				if (!this._propertiesCounter[c]) {
					delete this._properties[c]
				}
			}
			this.setStyleRenderFlag(false);
			for (var d in this._groupsStyleObjects) {
				this._groupsStyleObjects[d]._garbageCollection()
			}
		},
		_getGeneralTypeFromCssType: function(b) {
			return Constants.SkinParamCssTypesToGeneralTypesMap[b] || "unknown"
		},
		_setPropertyExtraParams: function(k, m) {
			var o = m.type;
			var n = this.PROPERTY_TYPE_EXTRA_PARAMS[o];
			if (n) {
				var l = m.styleDefaults;
				for (var i in n) {
					var j = n[i];
					var p = this._getPropertyExtraParamId(k, j.prefix);
					this._properties[p] = this._properties[p] || l[j.prefix] || j.defaultValue;
					this._propertiesTypes[p] = o + "-" + i;
					this._increasePropertyUseCount(p)
				}
			}
		},
		getId: function() {
			return this._groupId
		},
		getProperties: function() {
			return this._properties
		},
		getGroups: function() {
			return this._groupsStyleObjects
		},
		getPropertyType: function(b) {
			return this._propertiesTypes[b]
		},
		getPropertySource: function(b) {
			return this._propertiesSource[b]
		},
		getPropertyLangKey: function(b) {
			return this._propertiesLangKey[b]
		},
		_addUsedSkinName: function(b) {
			this._usedSkinArray.push(b)
		},
		_resetUsedSkinNameArray: function() {
			this._usedSkinArray = []
		},
		getSkinArray: function() {
			return this._usedSkinArray
		}
	}
});
Constants.StyleEvents = {
	SKIN_CHANGED: "skinChange",
	READY: "styleReady",
	PROPERTY_CHANGED: "propertyChange"
};
W.Classes.newClass({
	name: "mobile.core.managers.style.Style",
	Class: {
		Extends: "mobile.core.managers.style.StyleProperties",
		initialize: function(b) {
			if (b) {
				this._setStyleDataItem(b)
			}
		},
		_setStyleDataItem: function(b) {
			this._skinName = b.get("skin");
			this._resetDataCollection();
			if (!b.get("style")) {
				b.set("style", {})
			}
			this._configStyle(b.get("style"), b, this._skinName, this)
		},
		_resetDataCollection: function() {
			this._groupIdCounter = 0;
			var b = this._onProcessAllSkins.bind(this);
			this.unprocessedSkins = {
				map: {},
				size: 0,
				add: function(a) {
					if (this.map[a]) {
						this.map[a] = 1
					} else {
						this.map[a]++
					}
					this.size++
				},
				remove: function(a) {
					if (this.map[a]) {
						this.map[a]--
					} else {}
					this.size--;
					if (this.size === 0) {
						b()
					}
				}
			}
		},
		_onProcessAllSkins: function() {
			this._garbageCollection();
			if (this._oldSkinName != this._skinName) {
				this.fireEvent(Constants.StyleEvents.SKIN_CHANGED)
			}
			this.fireEvent(Constants.StyleEvents.READY, this)
		},
		getNewGroupId: function() {
			this._groupIdCounter = this._groupIdCounter || 0;
			this._groupIdCounter++;
			return this._groupIdCounter
		},
		setSkin: function(b) {
			if (this._skinName == b) {
				return false
			}
			this._resetUsedSkinNameArray();
			this.setStyleRenderFlag(false);
			this._oldSkinName = this._skinName;
			this._skinName = b;
			this._styleDataItem.set("skin", b);
			this._styleRawData.properties = {};
			this._styleRawData.propertiesSource = {};
			this._styleRawData.groups = {};
			this._resetData(this._styleRawData.properties, this._styleRawData.propertiesSource, this._styleRawData.groups);
			this.createStylesAndRawData(this._styleRawData, b);
			return true
		},
		getSkin: function() {
			return this._skinName
		},
		getId: function() {
			return this._styleDataItem.get("id")
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.skin.SkinParser",
	Class: {
		parseSkinData: function(w) {
			var y = w.className;
			var v = w._params || [];
			var q = w._html || "";
			var p = w._css || [];
			var e = [];
			var s = {};
			var u = {};
			var r = this._addStylePlaceHolder(this.getSkinCSSName(y));
			v = this._processSkinParams(v, y);
			for (var t = 0;
			t < p.length; ++t) {
				var x = p[t];
				if (!x) {
					var z = "";
					try {
						z = p.join(",")
					} catch (i) {}
					LOG.reportError(wixErrors.SKIN_PROBLEM_WITH_RULE, this.className, "_registerSkinData", y + "(" + t + ") : " + z)
				} else {
					this._processSkinCssClass(x, v, r, u, s, e)
				}
			}
			return {
				params: v,
				html: q,
				css: e,
				compParts: w.compParts || {},
				skinPartClasses: s,
				skinSpecificClasses: u,
				skinCSSName: r,
				CSSBuildFlags: {},
				canFocus: !! w.canFocus
			}
		},
		getSkinCSSName: function(b) {
			return b.replace(/\./g, "_")
		},
		_processSkinParams: function(h, g) {
			for (var j = 0;
			j < h.length; ++j) {
				var i = h[j];
				if (i.defaultParam) {
					refLoop: for (var f = 0;
					f < h.length; ++f) {
						if (h[f].id == i.defaultParam) {
							i.defaultParam = h[f];
							break refLoop
						}
					}
					if (typeof i.defaultParam == "string") {
						LOG.reportError(wixErrors.SKIN_PARAM_REF_NOT_FOUND, g, "_processSkinParams", i.id)();
						delete i.defaultParam;
						i.defaultValue = ""
					}
				}
			}
			return h
		},
		_processSkinCssClass: function(j, w, s, v, t, r) {
			var z = j.indexOf("{");
			var q = j.lastIndexOf("}");
			if (z != -1 && q != -1 && (z < q - 1)) {
				var y = j.substr(0, z);
				var o = j.substring(z + 1, q);
				var x = this._getParamsUsed(o, w);
				var p = y.split(",");
				for (var u = 0;
				u < p.length; ++u) {
					y = this._processSkinCssSelector(p[u], s, v, t);
					r.push({
						selector: y,
						rules: o,
						params: x
					})
				}
			}
		},
		_processSkinCssSelector: function(j, o, k, l) {
			var i = this._convertCssSelector(j, o, k, l);
			var p = j.length ? j.charAt(0) : "";
			var m = (p == "[" || p == ":" || p === "" || p == "{" || p == "." || p == ">");
			if (m || (i == j)) {
				var n = m ? "" : " ";
				i = "." + o + n + i
			}
			i = i.trim().replace(/\s+/g, " ");
			return i
		},
		_convertCssSelector: function(q, l, p, n) {
			var m = /%(\.?[a-z0-9]+)%/i;
			var j, r, o;
			j = q.match(m);
			while (j) {
				if (j.length < 2) {
					break
				}
				r = j[1];
				var k = this.getUniqueClass(r, l);
				if (k.type == "class") {
					p[r.substring(1)] = k.uniqueClass
				} else {
					n[r] = k.uniqueClass
				}
				q = q.replace(m, "." + k.uniqueClass);
				j = q.match(m)
			}
			return q
		},
		getUniqueClass: function(e, h) {
			var f = {};
			if (e.charAt(0) == ".") {
				var g = e.substring(1);
				f.uniqueClass = h + "-c-" + g;
				f.type = "class"
			} else {
				f.uniqueClass = h + "-" + e;
				f.type = "skinPart"
			}
			return f
		},
		_getParamsUsed: function(k, l) {
			var n = [];
			if (!k || (!l || l.length === 0)) {
				return n
			}
			for (var o = 0, j = l.length;
			o < j; ++o) {
				if (k.indexOf("[" + l[o].id + "]") != -1) {
					n[l[o].id] = l[o]
				}
			}
			var p = {};
			for (var i in n) {
				var m = n[i];
				if (m.defaultParam) {
					while (m.defaultParam !== undefined) {
						m = m.defaultParam
					}
					p[m.id] = m
				}
			}
			return Object.values(Object.merge(n, p))
		},
		_addStylePlaceHolder: function(b) {
			return b + Constants.skinManager.STYLE_CSS_PLACEHOLDER
		}
	}
});
(function() {
	var b;
	W.Classes.newClass({
		name: "mobile.core.managers.skin.SkinRenderer",
		Class: {
			initialize: function() {
				this._stylesheet = this._generateSkinsStylesSheet()
			},
			replaceStylePlaceHolder: function(d, a) {
				return d.split(Constants.skinManager.STYLE_CSS_PLACEHOLDER).join(a)
			},
			registerSkinCSSNow: function(f, g) {
				var h = f.css;
				for (var a = 0;
				a < h.length; ++a) {
					this.updateSkinCSSClass(h[a].selector, h[a].rules, h[a].params, f.params, g)
				}
			},
			updateSkinCSSClass: function(r, e, i, a, v) {
				styleId = this.getStyleId(v);
				for (var q = 0;
				q < i.length; ++q) {
					var u = i[q];
					var t = u.id;
					var s = this._getParamValue(u, v);
					var p = this._paramValueToCss(s, u);
					if (p === null) {
						p = ""
					}
					e = e.split("[" + t + "]").join(p)
				}
				r = this.replaceStylePlaceHolder(r, styleId);
				if (v && v.isCssRedirectedToStyle()) {
					v.updateCssRule(r, e)
				} else {
					try {
						this._stylesheet.updateRule(r, e)
					} catch (o) {}
				}
			},
			getParamValue: function(a, d) {
				return this._getParamValue(a, d)
			},
			_getParamValue: function(n, m) {
				var j = null;
				if (n.defaultParam) {
					var i = n.defaultParam;
					return this._applyParamMutators(this._getParamValue(i, m), n)
				}
				if (m && m.get(n.id)) {
					var a = m.getPropertySource(n.id);
					j = m.get(n.id);
					if (a == "theme") {
						j = this.injects().Theme.getProperty(j)
					}
					j = this._castToType(j, n);
					j = this._addExtraToParamByType(n, j, m);
					return this._applyParamMutators(j, n)
				}
				if (n.defaultTheme) {
					var k = n.defaultTheme;
					var l = W.Theme.getProperty(k);
					l = this._castToType(l, n);
					return this._applyParamMutators(l, n)
				}
				if (n.defaultValue) {
					j = this._castToType(n.defaultValue, n);
					return this._applyParamMutators(j, n)
				}
				return null
			},
			_castToType: function(d, a) {
				switch (a.type) {
				case Constants.SkinParamTypes.COLOR:
				case Constants.SkinParamTypes.COLOR_ALPHA:
				case Constants.SkinParamTypes.BG_COLOR:
					d = new W.Color(d);
					break;
				case Constants.SkinParamTypes.SIZE:
					d = new W.Size(d);
					break;
				case Constants.SkinParamTypes.BOX_SHADOW:
					d = new W.BoxShadow(d);
					break;
				case Constants.SkinParamTypes.BORDER_RADIUS:
					d = new W.BorderRadius(d);
					break
				}
				return d
			},
			_addExtraToParamByType: function(a, i, j) {
				var g = j.getPropertyType(a.id);
				if (g == "color") {
					var h = j.getPropertyExtraParamValue(a.id, "alpha");
					i.setAlpha(h)
				}
				if (g == "boxShadow") {
					i.setToggleOn(j.getPropertyExtraParamValue(a.id, "isOn") === true)
				}
				return i
			},
			_applyParamMutators: function(h, i) {
				if (i.mutators) {
					for (var j = 0;
					j < i.mutators.length;
					j += 2) {
						var g = h[i.mutators[j]];
						if (g && typeof g == "function") {
							var a = i.mutators[j + 1];
							if (!a || typeOf(a) != "array") {
								a = (!a) ? [] : [a]
							}
							h = g.apply(h, a)
						} else {
							LOG.reportError(wixErrors.SKIN_PARAM_MUTATOR_FUNC_NOT_FOUND, "SkinRenderer", "_applyParamMutators", g)()
						}
					}
				}
				return h
			},
			_paramValueToCss: function(i, l) {
				var j = Constants.skinManager.FEATURES;
				if (i !== undefined && i !== null) {
					l = l || {};
					switch (l.type) {
					case Constants.SkinParamTypes.BG_COLOR:
						var a = i;
						var k = a.getAlpha();
						if (k > 0) {
							if (Modernizr.rgba === true && k < 1) {
								i = "background-color:rgba(" + a.getRgba() + ");"
							} else {
								i = "background-color:" + a.getHex(false) + ";";
								if (j.filter_alpha && k < 1) {
									i += "filter:alpha(opacity=" + (k * 100) + ");"
								}
							}
						} else {
							i = "background-color:transparent;"
						}
						break;
					case Constants.SkinParamTypes.BORDER_RADIUS:
						var h = W.Utils.getCSSBrowserFeature("border-radius");
						if (h) {
							i = h + ":" + i + ";"
						} else {
							i = ""
						}
						break;
					case Constants.SkinParamTypes.TRANSITION:
						h = W.Utils.getCSSBrowserFeature("transition");
						if (h) {
							i = h + ":" + i + ";"
						} else {
							i = ""
						}
						break;
					case Constants.SkinParamTypes.BOX_SHADOW:
						if (W.Utils.getCSSBrowserFeature("box-shadow")) {
							i = W.Utils.getCSSBrowserFeature("box-shadow") + ":" + i.getCssValue() + ";"
						} else {
							i = ""
						}
						break;
					case Constants.SkinParamTypes.FONT:
						i = "font:" + i.getCssValue() + ";";
						break;
					case Constants.SkinParamTypes.SIZE:
						i = i.getCssValue();
						break;
					case Constants.SkinParamTypes.COLOR:
						i = (i.getHex !== undefined) ? i.getHex(false) : i;
						break;
					case Constants.SkinParamTypes.COLOR_ALPHA:
						a = i;
						k = a.getAlpha();
						if (k > 0) {
							if (Modernizr.rgba === true && k < 1) {
								i = "rgba(" + a.getRgba() + ")"
							} else {
								i = a.getHex(false)
							}
						} else {
							i = "transparent"
						}
						break
					}
					return i
				} else {
					return null
				}
			},
			buildSkinHTML: function(a, i, E) {
				styleId = this.getStyleId(E);
				var u = a.html;
				var v = this.replaceStylePlaceHolder(a.skinCSSName, styleId);
				i.empty();
				i.set("html", u);
				if (a.canFocus) {
					i.tabIndex = 0
				} else {
					if (i.tabIndex === 0) {
						i.tabIndex = -1
					}
				}
				if (i._wixCSSName) {
					i.removeClass(i._wixCSSName);
					delete i._wixCSSName
				}
				if (v) {
					i.addClass(v);
					i._wixCSSName = v
				}
				var F = {
					view: i
				};
				var A = $$(i.getElements("[skinPart]"));
				var C = a.compParts || {};
				var w = a.skinPartClasses || {};
				for (var x = 0;
				x < A.length; ++x) {
					var y = A[x];
					var G = y.getAttribute("skinPart");
					F[G] = y;
					var H = w[G];
					if (H) {
						y.addClass(this.replaceStylePlaceHolder(H, styleId))
					}
					var D = y.getAttribute("skin");
					if (!D && C[G] && C[G].skin) {
						D = C[G].skin;
						if (D) {
							y.setAttribute("skin", D)
						}
					}
				}
				var z = a.skinSpecificClasses || {};
				for (var B in z) {
					var t = $(i).getElements("." + B);
					t.removeClass(B).addClass(this.replaceStylePlaceHolder(z[B], styleId))
				}
				return F
			},
			getStyleId: function(a) {
				return (a && a.getId()) || ""
			},
			_skinStyleNodeId: null,
			_generateSkinsStylesSheet: function() {
				if (!b) {
					b = W.Utils.createStyleSheet("WIX_SKIN_STYLES")
				}
				this._skinStyleNodeId = b.styleNode.get("id");
				return b
			},
			getCssNodeId: function() {
				return this._skinStyleNodeId
			},
			removeCssRule: function(a) {
				this._stylesheet.removeRuleBySelector(a)
			}
		}
	})
})();
W.Classes.newClass({
	name: "mobile.core.managers.skin.CssGarbageCollector",
	Class: {
		Binds: ["runGarbageCollector"],
		initialize: function(e, f, d) {
			this._styleDataMap = e;
			this._skinDataMap = f;
			this._skinRenderer = d;
			this._DomTraverserClass = W.Classes.get("mobile.core.managers.skin.GCDomTraverse")
		},
		runGarbageCollector: function() {
			this._domTraverser = new this._DomTraverserClass();
			this._domTraverser.traverseDomAndCollectUsedStyles(function(d, c) {
				this._runGarbageCollectorOnStyles(d);
				this._runGarbageCollectorOnSkins(c)
			}.bind(this))
		},
		_runGarbageCollectorOnStyles: function(g) {
			var e = this._findUnusedStyles(g);
			for (var f in e) {
				if (!e[f]) {
					continue
				}
				var h = e[f];
				this._processUnusedStyles(h)
			}
		},
		_findUnusedStyles: function(c) {
			var d = Object.filter(this._styleDataMap, function(a, b) {
				return (!c.contains(b))
			});
			return d
		},
		_runGarbageCollectorOnSkins: function(g) {
			var f = this._findUnusedSkins(g);
			for (var e in f) {
				var h = this._skinDataMap[e];
				if (h) {
					this._removeUnusedSkinRules(h)
				}
			}
		},
		_findUnusedSkins: function(c) {
			var d = Object.filter(this._skinDataMap, function(a, b) {
				return (!c.contains(b))
			});
			return d
		},
		_processUnusedStyles: function(h) {
			var l = h.getSkinArray();
			var j = h.getGroups();
			for (var m in j) {
				var k = j[m];
				this._processUnusedStyles(k)
			}
			for (var i = 0;
			i < l.length;
			i++) {
				var n = this._skinDataMap[l[i]];
				if (n) {
					this._removeUnusedSkinRules(n, h.getId())
				}
			}
			h.setStyleRenderFlag(false)
		},
		_removeUnusedSkinRules: function(h, f) {
			var i = h.css;
			if (!i) {
				return
			}
			for (var j = 0;
			j < i.length;
			j++) {
				if (!f) {
					f = ""
				}
				var g = this._skinRenderer.replaceStylePlaceHolder(i[j].selector, f);
				this._skinRenderer.removeCssRule(g);
				h.CSSBuildFlags[f] = false
			}
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.skin.GCDomTraverse",
	Class: {
		initialize: function() {
			this._usedStyles = [];
			this._usedSkins = []
		},
		traverseDomAndCollectUsedStyles: function(b) {
			this._traverseElementAndCollect($(document.body));
			b(this._usedStyles, this._usedSkins)
		},
		_traverseElementAndCollect: function(h) {
			var g = h.isDisplayed();
			if (!g) {
				return
			}
			this._collectElementStylesSkins(h);
			var e = h.getChildren();
			if (!e || !e.length) {
				return
			}
			for (var f = 0;
			f < e.length;
			f++) {
				this._traverseElementAndCollect(e[f])
			}
		},
		_collectElementStylesSkins: function(f) {
			var g = f.getAttribute("styleId");
			if (g) {
				this._usedStyles.push(g)
			}
			var h = f.getAttribute("skin");
			if (h) {
				this._usedSkins.push(h)
			}
			var e = f.getLogic && f.getLogic().getSkin && f.getLogic().getSkin().$className;
			if (e) {
				this._usedSkins.include(e)
			}
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.utils.BufferFunction",
	Class: {
		Binds: ["_wrapperFunction"],
		initialize: function(d, c) {
			this._isFirstCallDelayed = false;
			this._bufferTime = 1000;
			this._lastCallArguments;
			this._replaceFunctionAndSaveOriginal(d, c);
			this._clearBuffer()
		},
		setBufferTime: function(b) {
			this._bufferTime = b
		},
		getBufferTime: function(b) {
			return this._bufferTime
		},
		setIsFirstCallDelayed: function(b) {
			this._isFirstCallDelayed = b
		},
		getIsFirstCallDelayed: function(b) {
			return this._isFirstCallDelayed
		},
		_replaceFunctionAndSaveOriginal: function(d, c) {
			this._scope = d;
			this._originalFunction = d[c];
			d[c] = this._wrapperFunction
		},
		_wrapperFunction: function() {
			this._lastCallArguments = arguments;
			this._tryCallingFunction()
		},
		_tryCallingFunction: function() {
			if (this.isReadyToCall()) {
				this.callOriginalFunction();
				this._delayCall(this._clearBuffer)
			} else {
				this._delayCall(this._clearBufferAndTryCallingFunction)
			}
		},
		callOriginalFunction: function() {
			this._originalFunction.apply(this._scope, this._lastCallArguments)
		},
		isReadyToCall: function() {
			return (!this._callTimerId && this._isFirstCallDelayed === false)
		},
		_clearBuffer: function() {
			this._callTimerId = undefined
		},
		_clearBufferAndTryCallingFunction: function() {
			this._clearBuffer();
			this._tryCallingFunction()
		},
		_delayCall: function(b) {
			this.injects().Utils.clearCallLater(this._callTimerId);
			this._callTimerId = this.injects().Utils.callLater(b, [], this, this._bufferTime)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.undoredomanager.LayoutChange",
	Class: {
		Extends: Events,
		Binds: ["_onUpdateAnchors", "_serializeAnchors"],
		initialize: function() {
			this._compSerializer = this.injects().CompSerializer
		},
		startListenTo: function(a) {
			a.addEvent("updateAnchors", this._onUpdateAnchors)
		},
		_reportChange: function(a) {
			this.fireEvent(Constants.DataEvents.DATA_CHANGED, a)
		},
		_onUpdateAnchors: function(b) {
			var a = b.data;
			this._reportChange(this._serializeData(a))
		},
		_serializeData: function(a) {
			a.type = this.className;
			a.oldAnchors = this._serializeAnchors(a.oldAnchors);
			a.newAnchors = this._serializeAnchors(a.newAnchors);
			return a
		},
		_serializeAnchors: function(b) {
			var c = [];
			var a = this._compSerializer;
			b.each(function(d) {
				c.push(a.serializeAnchor(d))
			});
			return c
		},
		_deSerializeData: function(b) {
			var a = this.injects().Preview.getPreviewSite().$$("#" + b.compId)[0].getLogic();
			return {
				compRef: a,
				oldAnchors: this._deSerializeAnchors(b.oldAnchors, a),
				newAnchors: this._deSerializeAnchors(b.newAnchors, a)
			}
		},
		_deSerializeAnchors: function(c, a) {
			var d = [];
			var b = this.injects().Preview.getPreviewManagers().Layout;
			c.each(function(e) {
				d.push(b.desrializeAnchor(e, a))
			});
			return d
		},
		_replaceComponentAnchors: function(a, b) {
			this._removeReverseAnchorsFromTargetComponent(a);
			a.setAnchors(b)
		},
		_removeReverseAnchorsFromTargetComponent: function(a) {
			var b = a.getAnchors();
			b.each(function(c) {
				this._removeSingleAnchorFromTargetComponent(c)
			}.bind(this))
		},
		_removeSingleAnchorFromTargetComponent: function(b) {
			var c = b.toComp;
			var d = c.getReverseAnchors();
			var a = d.indexOf(b);
			d.splice(a, 1)
		},
		_undo: function(a) {
			var b = this._deSerializeData(a);
			this._replaceComponentAnchors(b.compRef, b.oldAnchors);
			this.injects().Layout.enforceAnchors([b.compRef], true, true)
		},
		_redo: function(a) {
			var b = this._deSerializeData(a);
			this._replaceComponentAnchors(b.compRef, b.newAnchors)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.undoredomanager.PositionChange",
	Class: {
		Extends: Events,
		Binds: ["_onChange"],
		startListenTo: function(a) {
			a.addEvent("updatePosition", this._onChange);
			a.addEvent("updateSize", this._onChange)
		},
		_onChange: function(b) {
			var a = b.data;
			this.fireEvent(Constants.DataEvents.DATA_CHANGED, a)
		},
		_updateComponentPosition: function(a, b) {
			b.x != null ? a.setX(b.x) : false;
			b.y != null ? a.setY(b.y) : false;
			a.saveCurrentCoordinates()
		},
		_updateComponentDimensions: function(a, b) {
			b.h != null ? a.setHeight(b.h) : false;
			b.w != null ? a.setWidth(b.w) : false;
			a.saveCurrentDimensions()
		},
		_getComp: function(a) {
			return this.injects().Preview.getPreviewSite().$$("#" + a)[0].getLogic()
		},
		_undo: function(a) {
			var b = this._getComp(a.compId);
			if (this._hasCoordinates(a)) {
				this._updateComponentPosition(b, a.oldCoordinates)
			}
			if (this._hasDimensions(a)) {
				this._updateComponentDimensions(b, a.oldDimensions);
				b.fireEvent("resizeEnd")
			}
		},
		_redo: function(a) {
			var b = this._getComp(a.compId);
			if (this._hasCoordinates(a)) {
				this._updateComponentPosition(b, a.newCoordinates)
			}
			if (this._hasDimensions(a)) {
				this._updateComponentDimensions(b, a.newDimensions);
				b.fireEvent("resizeEnd")
			}
		},
		_hasCoordinates: function(a) {
			return a.oldCoordinates && a.newCoordinates
		},
		_hasDimensions: function(a) {
			return a.oldDimensions && a.newDimensions
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.undoredomanager.PropertyChange",
	Class: {
		Extends: Events,
		Binds: ["_onDataChange", "_getDataItemById"],
		startListenTo: function(a) {
			this._dataManager = a;
			a.addEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChange)
		},
		_reportChange: function(a) {
			this.fireEvent(Constants.DataEvents.DATA_CHANGED, a)
		},
		_onDataChange: function(c, e, b, d) {
			var a = {
				type: this.className,
				sender: d || null,
				dataItemId: c.getData().id,
				newValue: e,
				oldValue: b
			};
			if (typeof a.newValue === "undefined" && typeof a.oldValue === "undefined") {
				return
			}
			this._reportChange(a);
			return a
		},
		_applyValue: function(b, e) {
			var c = this._getDataItemById(b);
			var a = Object.keys(e)[0];
			var d = e[a];
			c.set(a, d, false, "undo")
		},
		_undo: function(a) {
			this._applyValue(a.dataItemId, a.oldValue)
		},
		_redo: function(a) {
			this._applyValue(a.dataItemId, a.newValue)
		},
		_getDataItemById: function(a) {
			return this._dataManager.getDataByQuery("#" + a)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.undoredomanager.DataChange",
	Class: {
		Extends: Events,
		Binds: ["_onDataChange", "_getDataItemById"],
		startListenTo: function(a) {
			this._dataManager = a;
			a.addEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChange)
		},
		_reportChange: function(a) {
			this.fireEvent(Constants.DataEvents.DATA_CHANGED, a)
		},
		_onDataChange: function(c, e, b, d) {
			var a = {
				type: this.className,
				timestamp: new Date().getTime(),
				sender: d || null,
				dataItemId: c.getData().id,
				newValue: e,
				oldValue: b
			};
			this._reportChange(a);
			return a
		},
		_applyValue: function(b, e) {
			var c = this._getDataItemById(b);
			var a = Object.keys(e)[0];
			var d = e[a];
			c.set(a, d, false, "undo")
		},
		_undo: function(a) {
			this._applyValue(a.dataItemId, a.oldValue)
		},
		_redo: function(a) {
			this._applyValue(a.dataItemId, a.newValue)
		},
		_getDataItemById: function(a) {
			return this._dataManager.getDataByQuery("#" + a)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.commandregistrars.EditCommandRegistrar",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: [],
		initialize: function() {},
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
			})
		},
		enableEditCommands: function(c) {
			c = !! c;
			var a = [this._copyCommand, this._cutCommand, this._duplicateCommand, this._moveBackCommand, this._moveForwardCommand, this._moveTopCommand, this._moveBottomCommand];
			for (var b = a.length - 1;
			b >= 0; --b) {
				a[b].setState(c)
			}
		},
		_onCopy: function(b, a) {
			if (!W.Editor._editedComponent || !W.Editor._editedComponent.isDeleteableRecurse()) {
				return
			}
			W.ClipBoard.setClip(W.Editor._editedComponent)
		},
		_onPaste: function(b, a) {
			if (W.Editor._editingScope) {
				var c = a.source ? a.source.shiftKey : false;
				W.ClipBoard.paste(W.Editor._editingScope, c)
			}
		},
		_onCut: function(b, a) {
			if (!W.Editor._editedComponent || !W.Editor._editedComponent.isDeleteableRecurse()) {
				return
			}
			W.EditorDialogs.openPromptDialog(W.Resources.get("EDITOR_LANGUAGE", "CUT_COMPONENT_TITLE"), W.Resources.get("EDITOR_LANGUAGE", "CUT_COMPONENT_TEXT"), "", W.EditorDialogs.DialogButtonSet.OK_CANCEL, function(c) {
				if (c.result == "OK") {
					W.ClipBoard.setClip(W.Editor._editedComponent);
					W.Editor.doDeleteSelectedComponent()
				}
			}.bind(this))
		},
		_onDuplicate: function(b, a) {
			if (!W.Editor._editedComponent || !W.Editor._editedComponent.isDeleteableRecurse()) {
				return
			}
			W.ClipBoard.duplicateComp(W.Editor._editedComponent, W.Editor._editedComponent.getParentComponent().getViewNode())
		},
		_confirmAndDeleteSelectedComponent: function() {
			if (!W.Editor.canDeleteSelectedComponent()) {
				return
			}
			var a = "DELETE_COMPONENT_TEXT";
			if (W.Editor._editedComponent.isMultiSelect) {
				a = "DELETE_MULTI_COMPONENT_TEXT"
			}
			W.EditorDialogs.openPromptDialog(W.Resources.get("EDITOR_LANGUAGE", "DELETE_COMPONENT_TITLE"), W.Resources.get("EDITOR_LANGUAGE", a), "", W.EditorDialogs.DialogButtonSet.DELETE_CANCEL, function(b) {
				if (b.result == "DELETE") {
					LOG.reportEvent(wixEvents.COMPONENT_REMOVED, {
						c1: W.Editor._editedComponent.className
					});
					W.Editor.doDeleteSelectedComponent()
				}
			}.bind(this))
		},
		_onUndo: function() {
			this.injects().UndoRedoManager.undo()
		},
		_onRedo: function() {
			this.injects().UndoRedoManager.redo()
		},
		_onMoveTop: function() {
			this._onZIndexChange(W.Editor.Z_INDEX_CHANGE_TYPES.TOP)
		},
		_onMoveBottom: function() {
			this._onZIndexChange(W.Editor.Z_INDEX_CHANGE_TYPES.BOTTOM)
		},
		_onMoveForward: function() {
			this._onZIndexChange(W.Editor.Z_INDEX_CHANGE_TYPES.FORWARD)
		},
		_onMoveBack: function() {
			this._onZIndexChange(W.Editor.Z_INDEX_CHANGE_TYPES.BACK)
		},
		_onZIndexChange: function(a) {
			if (W.Editor._editedComponent == null) {
				return
			}
			var c = W.Editor._editedComponent;
			var b = c.getParentComponent();
			b.moveChild(c, a)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.commandregistrars.SaveCommandRegistrar",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: [],
		initialize: function() {},
		registerCommands: function() {
			var a = W.Commands;
			this._saveCommand = a.registerCommandAndListener("WEditorCommands.Save", this, this._onSaveCommand);
			this._saveAsCommand = a.registerCommandAndListener("WEditorCommands.SaveAs", this, this._onSaveAsCommand);
			this._saveAsTemplateCommand = a.registerCommandAndListener("WEditorCommands.SaveAsTemplate", this, this._onPublishTemplateCommand)
		},
		setKeyboardEvents: function() {
			var a = W.InputBindings;
			if (window.debugMode == "debug") {
				a.addBinding("ctrl+e", {
					command: this._saveAsCommand,
					commandParameter: {
						promptResultDialog: true
					}
				})
			}
			if (W.Editor._siteIsTemplate === false && editorModel.siteHeader.userId === "84770f67-ecbd-44b6-b35a-584f2dc15af1") {
				a.addBinding("ctrl+p", {
					command: this._saveAsTemplateCommand,
					commandParameter: {
						promptResultDialog: true
					}
				})
			}
			a.addBinding("ctrl+s", {
				command: this._saveCommand,
				commandParameter: {
					promptResultDialog: true
				}
			})
		},
		_onSaveCommand: function(b, a) {
			if (!W.Preview.isSiteReady()) {
				return
			}
			if (W.Editor._editMode == W.Editor.EDIT_MODE.PREVIEW) {
				return
			}
			if (W.Config.siteNeverSavedBefore()) {
				W.EditorDialogs.openSaveDialog()
			} else {
				if (W.Editor.getEditorStatusAPI().getSaveInProcess()) {
					return
				}
				W.Editor.getEditorStatusAPI().setSaveInProcess(true);
				W.ServerFacade.saveDocument(window.siteHeader.id, W.Preview.getPreviewSite(), function() {
					W.Editor.getEditorStatusAPI().setSaveInProcess(false);
					if (b && b.onCompleteCallback) {
						b.onCompleteCallback()
					} else {
						if (b && b.promptResultDialog) {
							W.EditorDialogs.openPromptDialog(W.Resources.get("EDITOR_LANGUAGE", "SUCCESS_SAVE_TITLE"), W.Resources.get("EDITOR_LANGUAGE", "SUCCESS_SAVE_DESCRIPTION"), "", W.EditorDialogs.DialogButtonSet.OK)
						}
					}
					if (window.opener && window.opener.document.domain == document.domain) {
						window.opener.location.reload()
					}
				}, function(c, d) {
					W.Editor.getEditorStatusAPI().setSaveInProcess(false);
					if (b && b.onErrorCallback) {
						b.onErrorCallback()
					} else {
						if (b && b.promptResultDialog) {
							W.EditorDialogs.openPromptDialog(W.Resources.get("EDITOR_LANGUAGE", "ERROR_SAVE_TITLE"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_SAVE_DOCUMENT"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_CODE_IS") + " " + d, W.EditorDialogs.DialogButtonSet.OK)
						}
					}
				})
			}
			if (b && (b.src == "saveBtn")) {
				LOG.reportEvent(wixEvents.SAVE_BUTTON_CLICKED_IN_MAIN_WINDOW, {
					g1: W.Editor._templateId
				})
			}
		},
		_onSaveAsCommand: function(c, a) {
			var b = {
				saveAs: true
			};
			W.EditorDialogs.openSaveDialog(b)
		},
		_onPublishTemplateCommand: function() {
			if (!W.Preview.isSiteReady()) {
				return
			}
			var a = {};
			a.onCompleteCallback = function() {
				W.ServerFacade.publishTemplate(window.siteHeader.id, function() {}, function(b) {})
			}.bind(this);
			this._onSaveCommand(a)
		},
		_saveCurrentDocument: function() {
			if (!W.Config.siteNeverSavedBefore()) {
				this._onSaveCommand()
			}
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.commandregistrars.OpenDialogCommandRegistrar",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: [],
		initialize: function() {},
		registerCommands: function() {
			var a = W.Commands;
			this._openPublishDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenPublishDialog", this, this._onOpenPublishDialogCommand);
			this._openPublishWebsiteDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenPublishWebsiteDialog", this, this._onOpenPublishWebsiteDialogCommand);
			this._openPublishWebsiteSuccessDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenPublishWebsiteSuccessDialog", this, this._onOpenPublishWebsiteSuccessDialogCommand);
			this._openPublishWebsiteShareDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenPublishWebsiteShareDialog", this, this._onOpenPublishWebsiteShareDialogCommand);
			this._openPublishFbSiteDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenPublishFbSiteDialog", this, this._onOpenPublishFbSiteDialogCommand);
			this._openPublishFbSiteSuccessDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenPublishFbSiteSuccessDialog", this, this._onOpenPublishFbSiteSuccessDialogCommand);
			this._openSaveSuccessDialogCommand = a.registerCommandAndListener("WEditorCommands.SaveSuccessDialog", this, this._onOpenSaveSuccessDialogCommand);
			this._addPageDialogCommand = a.registerCommandAndListener("WEditorCommands.AddPageDialog", this, this._onOpenAddPageDialog);
			this._openFontDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenFontDialogCommand", this, this._openFontDialog);
			this._openColorSelectorDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenColorSelectorDialogCommand", this, this._openColorSelectorDialog);
			this._openLinkDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenLinkDialogCommand", this, this._openLinkDialog);
			this._openColorAdjusterDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenColorAdjusterDialogCommand", this, this._openColorAdjusterDialog);
			this._openListEditDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenListEditDialog", this, this._openListEditDialog);
			this._openListEditDialogCommand = a.registerCommandAndListener("WEditorCommands.OpenImageDialog", this, this._openImageDialog);
			this._showHelpDialogCommand = a.registerCommandAndListener("WEditorCommands.ShowHelpDialog", this, this._showHelpDialog);
			this._showColorPickerDialogCommand = a.registerCommandAndListener("WEditorCommands.ShowColorPickerDialog", this, this._openColorPickerDialog)
		},
		_onOpenPublishDialogCommand: function(b, a) {
			LOG.reportEvent(wixEvents.PUBLISH_BUTTON_CLICKED_IN_MAIN_WINDOW);
			if (!W.Preview.isSiteReady()) {
				return
			}
			if (W.Config.siteNeverSavedBefore()) {
				this.injects().Commands.executeCommand("WEditorCommands.Save", b);
				return
			}
			if (W.Config.getApplicationType() == Constants.WEditManager.SITE_TYPE_FACEBOOK) {
				this._onOpenPublishFbSiteDialogCommand()
			} else {
				this._onOpenPublishWebsiteDialogCommand()
			}
		},
		_onOpenPublishWebsiteDialogCommand: function(b, a) {
			W.EditorDialogs.openPublishWebsiteDialog()
		},
		_onOpenPublishWebsiteSuccessDialogCommand: function(b, a) {
			W.EditorDialogs.openPublishWebsiteSuccessDialog()
		},
		_onOpenPublishWebsiteShareDialogCommand: function(b, a) {
			W.EditorDialogs.openPublishWebsiteShareDialog()
		},
		_onOpenPublishFbSiteDialogCommand: function(b, a) {
			W.EditorDialogs.openPublishFbSiteDialog()
		},
		_onOpenPublishFbSiteSuccessDialogCommand: function(b, a) {
			W.EditorDialogs.openPublishFbSiteSuccessDialog()
		},
		_onOpenSaveSuccessDialogCommand: function(b, a) {
			W.EditorDialogs.openSaveSuccessDialog()
		},
		_onOpenAddPageDialog: function(b, a) {
			W.EditorDialogs.openWAddPageDialog(b)
		},
		_openColorSelectorDialog: function(a) {
			W.EditorDialogs.openColorSelectorDialog(a)
		},
		_openFontDialog: function(a) {
			W.EditorDialogs.openFontDialog(a)
		},
		_openLinkDialog: function(a) {
			W.EditorDialogs.openLinkDialog(a)
		},
		_openColorAdjusterDialog: function(a) {
			W.EditorDialogs.openColorAdjusterDialog(a)
		},
		_openListEditDialog: function(a) {
			W.EditorDialogs.openListEditDialog(a.data, a.galleryConfigID)
		},
		_openImageDialog: function(a) {
			a = a || {};
			W.EditorDialogs.openMediaDialog(a.callback || this._onImgSelectDefault, false, a.galleryTypeID || "photos")
		},
		_onImgSelectDefault: function(c) {
			c.width = Number(c.width);
			c.height = Number(c.height);
			var b = W.Data.createDataItem(c);
			var a = W.Editor.getEditedComponent().getDataItem();
			a.setFields(b.getData())
		},
		_showHelpDialog: function(e, c) {
			var a = this.injects().Config.getHelpServerUrl();
			var d = W.Data.dataMap.HELP_IDS._data[e];
			var b = a + d;
			W.EditorDialogs.openHelpDialog(b)
		},
		_openColorPickerDialog: function(a) {
			W.EditorDialogs.openColorPickerDialog(a)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.commandregistrars.OpenPanelCommandRegistrar",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: [],
		initialize: function() {},
		registerCommands: function() {
			var a = W.Commands;
			this._pagesCommand = a.registerCommandAndListener("WEditorCommands.Pages", this, this._onPages);
			this._settingsCommand = a.registerCommandAndListener("WEditorCommands.Settings", this, this._onSettings);
			this._designCommand = a.registerCommandAndListener("WEditorCommands.Design", this, this._showEditDesignPanel);
			this._showComponentCategoriesCommand = a.registerCommandAndListener("WEditorCommands.ShowComponentCategories", this, this._onShowComponentCategories);
			this._showSiteName = a.registerCommandAndListener("WEditorCommands.ShowSiteName", this, this._onShowSiteName);
			this._showFaviconAndThumbnail = a.registerCommandAndListener("WEditorCommands.ShowFaviconAndThumbnail", this, this._onShowFaviconAndThumbnail);
			this._showSocial = a.registerCommandAndListener("WEditorCommands.ShowSocial", this, this._onShowSocial);
			this._showSEO = a.registerCommandAndListener("WEditorCommands.ShowSEO", this, this._onShowSEO);
			this._showStatistics = a.registerCommandAndListener("WEditorCommands.ShowStatistics", this, this._onShowStatistics);
			this._showBackgroundDesignPanelCommand = a.registerCommandAndListener("WEditorCommands.ShowBackgroundDesignPanel", this, this._onShowBackgroundDesignPanel);
			this._showBackgroundEditorPanelCommand = a.registerCommandAndListener("WEditorCommands.ShowBackgroundEditorPanel", this, this._onShowBackgroundEditorPanel);
			this._showColorsPanelCommand = a.registerCommandAndListener("WEditorCommands.ShowColorsPanel", this, this._onShowColorsPanel);
			this._showFontsPanelCommand = a.registerCommandAndListener("WEditorCommands.ShowFontsPanel", this, this._onShowFontsPanel);
			this._advancedDesignCommand = a.registerCommandAndListener("WEditorCommands.AdvancedDesign", this, this._showAdvancedDesignPanel);
			this._customizeComponentStyle = a.registerCommandAndListener("WEditorCommands.CustomizeComponentStyle", this, this._onCustomizeComponentStyle);
			this._customizeColorsCommand = a.registerCommandAndListener("WEditorCommands.CustomizeColors", this, this._onCustomizeColors);
			this._customizeFontsCommand = a.registerCommandAndListener("WEditorCommands.CustomizeFonts", this, this._onCustomizeFonts);
			this._pageSettingsCommand = a.registerCommandAndListener("WEditorCommands.PageSettings", this, this._onPageSettings);
			this._backToParentPanelCommand = a.registerCommandAndListener("WEditorCommands.BackToParentPanel", this, this._backToParentPanel);
			this._showComponentCategoryCommand = a.registerCommandAndListener("WEditorCommands.ShowComponentCategory", this, this._onShowAddComponent)
		},
		_onPages: function() {
			this._stopRichTextEdit();
			W.Editor.clearSelectedComponent();
			W.Editor._editorUI.showComponentInPanel("pagesPanel", true, null, Constants.EditorUI.PAGES_PANEL)
		},
		_onSettings: function(a) {
			var b = a ? a.callback : null;
			this._stopRichTextEdit();
			W.Editor._editorUI.showComponentInPanel("settings", true, null, Constants.EditorUI.SETTINGS_PANEL, b)
		},
		_showEditDesignPanel: function() {
			this._stopRichTextEdit();
			W.Editor._editorUI.showComponentInPanel("design", true, null, Constants.EditorUI.DESIGN_PANEL)
		},
		_onShowComponentCategories: function() {
			this._stopRichTextEdit();
			W.Editor._editorUI.showComponentInPanel("masterComponents", true, null, Constants.EditorUI.ADD_PANEL)
		},
		_stopRichTextEdit: function() {
			if (W.Editor._editorComponents.editingFrame.getState() == "inPlaceEdit") {
				W.Editor._editorComponents.editingFrame.stopEditRichText()
			}
		},
		_onShowSiteName: function(a) {
			var b = "siteName";
			if (this._showPanelIfExist(b)) {
				return
			}
			W.Editor._editorUI.createComponentPart(b, false, a, function(c) {
				this._savePanelInCache(c, b);
				W.Editor._editorUI.showSubPanelWithParentPanelSize(c, true)
			}.bind(this))
		},
		_onShowFaviconAndThumbnail: function(a) {
			var b = "faviconAndThumbnail";
			if (this._showPanelIfExist(b)) {
				return
			}
			W.Editor._editorUI.createComponentPart(b, false, a, function(c) {
				this._savePanelInCache(c, b);
				W.Editor._editorUI.showSubPanelWithParentPanelSize(c, true)
			}.bind(this))
		},
		_onShowSocial: function(a) {
			var b = "social";
			if (this._showPanelIfExist(b)) {
				return
			}
			W.Editor._editorUI.createComponentPart(b, false, a, function(c) {
				this._savePanelInCache(c, b);
				W.Editor._editorUI.showSubPanelWithParentPanelSize(c, true)
			}.bind(this))
		},
		_onShowSEO: function(a) {
			var b = "seo";
			if (this._showPanelIfExist(b)) {
				return
			}
			W.Editor._editorUI.createComponentPart(b, false, a, function(c) {
				this._savePanelInCache(c, b);
				W.Editor._editorUI.showSubPanelWithParentPanelSize(c, true)
			}.bind(this));
			LOG.reportEvent(wixEvents.SEO_PANEL_OPENED)
		},
		_onShowStatistics: function(a) {
			var b = "statistics";
			if (this._showPanelIfExist(b)) {
				return
			}
			W.Editor._editorUI.createComponentPart(b, false, a, function(c) {
				this._savePanelInCache(c, b);
				W.Editor._editorUI.showSubPanelWithParentPanelSize(c, true)
			}.bind(this))
		},
		_onShowBackgroundDesignPanel: function(b, a) {
			W.Editor._editorUI.showComponentInPanel("backgroundDesign", true, null, Constants.EditorUI.DESIGN_PANEL, function(c) {
				c.saveCurrentState()
			})
		},
		_onShowBackgroundEditorPanel: function(b, a) {
			W.Editor._editorUI.showComponentInPanel("backgroundEditor", false, null, Constants.EditorUI.DESIGN_PANEL, function(c) {
				c.saveCurrentState()
			})
		},
		_onShowColorsPanel: function(b, a) {
			W.Editor._editorUI.showComponentInPanel("colorDesign", true, null, Constants.EditorUI.DESIGN_PANEL, function(c) {
				c.saveCurrentState()
			})
		},
		_onShowFontsPanel: function(a, b) {
			W.Editor._editorUI.showComponentInPanel("fonts", true, null, Constants.EditorUI.DESIGN_PANEL, function(c) {
				c.saveCurrentState()
			})
		},
		_showAdvancedDesignPanel: function(b, a) {
			W.Data.getDataByQuery("#STYLES", function(c) {
				if (!c || !c.get("styleItems")) {
					return
				}
				W.EditorDialogs.openAdvancedStylingDialog({
					styleList: c._data.styleItems,
					selectedComponent: b.editedComponent,
					left: b.left
				})
			}.bind(this))
		},
		_onCustomizeComponentStyle: function(a) {
			a = a || {};
			W.Commands.executeCommand("WEditorCommands.AdvancedDesign", a)
		},
		_onCustomizeColors: function(b, a) {
			W.Editor._editorUI.showComponentInPanel("customizeColors", true, null, Constants.EditorUI.DESIGN_PANEL);
			LOG.reportEvent(wixEvents.CUSTOMIZE_COLORS_OPENED)
		},
		_onCustomizeFonts: function(b, a) {
			W.Editor._editorUI.showComponentInPanel("customizeFonts", true, null, Constants.EditorUI.DESIGN_PANEL, function(c) {
				c.saveCurrentState()
			});
			LOG.reportEvent(wixEvents.CUSTOMIZE_FONTS_OPENED)
		},
		_onPageSettings: function(a) {
			W.Editor._siteStructure.getDataManager().getDataByQuery(a.pageId, this._onPageSettingsDataReady.bind(this))
		},
		_onPageSettingsDataReady: function(a) {
			if (this._showPanelIfExist(a._data.id)) {
				return
			}
			W.Editor._editorUI.createComponentPart("pageSettings", false, {
				data: a
			}, function(b) {
				this._savePanelInCache(b, a._data.id);
				W.Editor._editorUI.showSubPanelWithParentPanelSize(b, true)
			}.bind(this))
		},
		_backToParentPanel: function() {
			var a = W.Editor._editorUI.popHistory();
			if (a) {
				W.Editor._editorUI.showComponentInPanel(a.skinPart, true, a.args, a.state)
			}
		},
		_onShowAddComponent: function(a) {
			if (a == "widgets") {
				LOG.reportEvent(wixEvents.APPS_FLOW_ADDON_CLICKED, {
					c1: a
				})
			}
			W.Editor._editorUI.showComponentInPanel("addComponent", false, {
				category: a
			}, Constants.EditorUI.ADD_PANEL)
		},
		_showPanelIfExist: function(a) {
			this._cachedPanels = this._cachedPanels || {};
			if (this._cachedPanels[a]) {
				W.Editor._editorUI.showSubPanelWithParentPanelSize(this._cachedPanels[a], true);
				return true
			}
			return false
		},
		_savePanelInCache: function(a, b) {
			this._cachedPanels = this._cachedPanels || {};
			this._cachedPanels[b] = a
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.commandregistrars.PageManipulationCommandRegistrar",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_pastePage", "_updatePageMenuItem"],
		initialize: function() {},
		registerCommands: function() {
			var a = W.Commands;
			this._pageTransitionCommand = a.registerCommandAndListener("WEditorCommands.PageTransition", this, this._onPageTransitionChanged);
			this._deletePageCommand = a.registerCommandAndListener("WEditorCommands.DeletePage", this, this._onDeletePage);
			this._duplicatePageCommand = a.registerCommandAndListener("WEditCommands.DuplicatePage", this, this._onDuplicatePage);
			this._addPageCommand = a.registerCommandAndListener("WEditorCommands.AddPage", this, this._onWAddPage)
		},
		_onPageTransitionChanged: function(c, b) {
			var a = W.Preview.getPreviewManagers().Viewer.getPageGroup();
			a.setComponentProperty("transition", c)
		},
		_onDeletePage: function(a, b) {
			W.Editor.deletePage(a)
		},
		_onDuplicatePage: function(d) {
			var a = d.newPageName;
			var c = d.pageParent;
			var e = W.Preview.getPreviewSite().$(d.pageHtmlId).getLogic();
			var b = W.ClipBoard.copyComponent(e);
			this._pastePage(b, a, c)
		},
		_onWAddPage: function(d) {
			var c = d.page;
			var a = d.parent;
			LOG.reportEvent(wixEvents.ADD_PAGE, {
				label: c.name
			});
			var b = function(e) {
					if (e.data) {
						e.data.metaData.isPreset = true
					}
					if (e.components) {
						e.components.forEach(b)
					}
				};
			c.serializedPageData.components.forEach(b);
			this._pastePage(c.serializedPageData, c.name, a);
			this.injects().UndoRedoManager._endTransaction(null)
		},
		_pastePage: function(c, a, b) {
			W.Editor.setEditMode(W.Editor.EDIT_MODE.CURRENT_PAGE);
			var f = W.Preview.getPreviewManagers().Viewer;
			var e = f.getSiteNode().getElement("#SITE_PAGES");
			var d = W.ClipBoard.pasteFromClip(e, true, c, false, function() {
				d.getLogic().listenForContentRendered()
			}.bind(this));
			d.addEvent(Constants.ComponentEvents.READY, function() {
				W.Preview.getPreviewManagers().Data.getDataByQuery(d.get("dataquery"), function(g) {
					var i = g.get("id");
					d.set("id", i);
					var h = W.Utils.convertToValidUrlPart(a);
					g.set("pageUriSEO", h);
					g.set("title", a);
					f.indexPages(e);
					f.updatePagesData();
					this._updatePageMenuItem(b, g);
					d.getLogic().setAsWixified();
					W.Commands.executeCommand("EditorCommands.gotoSitePage", i)
				}.bind(this))
			}.bind(this))
		},
		_updatePageMenuItem: function(b, a) {
			var c = W.Preview.getPreviewManagers().Data.getDataByQuery("#MAIN_MENU");
			c.createAndAddNavigationItem("#" + a.get("id"), b)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.commandregistrars.AccountCommandRegistrar",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: [],
		initialize: function() {},
		registerCommands: function() {
			var a = W.Commands;
			this._upgradeToPremiumCommand = a.registerCommandAndListener("WEditorCommands.UpgradeToPremium", this, this._onUpgradeToPremiumCommand);
			this._publishCommand = a.registerCommandAndListener("WEditorCommands.Publish", this, this._onPublishCommand);
			this._goToMyAcountCommand = a.registerCommandAndListener("WEditorCommands.GoToMyAcount", this, this._onGoToMyAcountCommand);
			this._manageDomainCommand = a.registerCommandAndListener("WEditorCommands.ManageDomain", this, this._onManageDomainCommand);
			this._postInFacebookCommand = a.registerCommandAndListener("WEditorCommands.PostInFacebook", this, this._onPostInFacebookCommand);
			this._postInTwitterCommand = a.registerCommandAndListener("WEditorCommands.ShareInTwitter", this, this._onShareInTwitterCommand)
		},
		_onUpgradeToPremiumCommand: function(h, f) {
			if (W.Config.siteNeverSavedBefore()) {
				var e = W.Resources.get("EDITOR_LANGUAGE", "MUST_SAVE_BEFORE_PUBLISH");
				var g = {
					description: e
				};
				W.EditorDialogs.openSaveDialog(g)
			} else {
				var a = window.serviceTopology.premiumServerUrl;
				var c = a + "/wix/api/premiumStart";
				var d = W.Config.getMetaSiteId();
				var b = "edhtml_" + h.referralAdditionalInfo;
				window.open(c + "?siteGuid=" + d + "&referralAdditionalInfo=" + b);
				W.EditorDialogs.openPromptDialog(W.Resources.get("EDITOR_LANGUAGE", "REFRESH_WHEN_UPGRADE_COMPLETED_TITLE"), W.Resources.get("EDITOR_LANGUAGE", "REFRESH_WHEN_UPGRADE_COMPLETED_DESCRIPTION"), "", W.EditorDialogs.DialogButtonSet.OK)
			}
		},
		_onPublishCommand: function() {
			if (!W.Preview.isSiteReady()) {
				return
			}
			var a = {};
			a.onCompleteCallback = function() {
				if (W.Config.getApplicationType() == Constants.WEditManager.SITE_TYPE_FACEBOOK) {
					W.ServerFacade.publishDocument(window.siteHeader.id, function() {
						W.Commands.executeCommand("WEditorCommands.OpenPublishFbSiteSuccessDialog")
					}, function(b, c) {
						W.Utils.errorPopup(W.Resources.get("EDITOR_LANGUAGE", "ERROR_PUBLISH_DOCUMENT_FB_TITLE"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_PUBLISH_DOCUMENT_FB"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_CODE_IS") + " " + c)
					})
				} else {
					W.ServerFacade.publishDocument(siteHeader.id, function() {
						W.Commands.executeCommand("WEditorCommands.OpenPublishWebsiteSuccessDialog")
					}, function(b, c) {
						W.EditorDialogs.openPromptDialog(W.Resources.get("EDITOR_LANGUAGE", "ERROR_PUBLISH_TITLE"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_PUBLISH_DOCUMENT"), W.Resources.get("EDITOR_LANGUAGE", "ERROR_CODE_IS") + " " + c, W.EditorDialogs.DialogButtonSet.OK, function() {})
					})
				}
			}.bind(this);
			this.injects().Commands.executeCommand("WEditorCommands.Save", a)
		},
		_onGoToMyAcountCommand: function() {
			var a = window.serviceTopology.dashboardUrl;
			window.open(a);
			this._closeDialog()
		},
		_onManageDomainCommand: function() {
			var a = window.serviceTopology.premiumServerUrl;
			window.open(a + "/wix/api/domainViewForm?domainName=anotherpleskdomainfortest.com&")
		},
		_onPostInFacebookCommand: function(a) {
			window.open("http://www.facebook.com/sharer/sharer.php?u=" + a.url + "&t=" + a.text)
		},
		_onShareInTwitterCommand: function(b) {
			var a = b.isPremium ? W.Resources.get("EDITOR_LANGUAGE", "TWITTER_CHECK_OUT_MY_SITE_MSG_PREMIUM") : W.Resources.get("EDITOR_LANGUAGE", "TWITTER_CHECK_OUT_MY_SITE_MSG_NON_PREMIUM");
			window.open("https://twitter.com/intent/tweet?url=" + b.siteUrl + "&text=" + a + "&related=" + W.Resources.get("EDITOR_LANGUAGE", "TWITTER_RELATED_WIX_ACCOUNTS"))
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.commandregistrars.ComponentCommandRegistrar",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: [],
		initialize: function() {},
		registerCommands: function() {
			var a = W.Commands;
			this._changeSelectedComponentPosSizeCommand = a.registerCommandAndListener("WEditorCommands.SetSelectedCompPositionSize", this, this._setSelectedComponentPosSize);
			this._addComponentCommand = a.registerCommandAndListener("WEditorCommands.AddComponent", this, this._onAddComponent);
			this._addComponentfullParamsCommand = a.registerCommandAndListener("WEditorCommands.AddComponentFullParams", this, this._onAddComponentFullParams);
			this._gridSnapToGridCommand = a.registerCommandAndListener("EditCommands.SnapToGrid", this, this._onSnapToGrid)
		},
		_setSelectedComponentPosSize: function(e) {
			var c = W.Editor._editedComponent;
			var d = c.getSizeLimits();
			var b = e.updateLayout;
			var a = c.useLayoutOnDrag();
			if (e.x != undefined) {
				c.setX(this._enforceMinMax(e.x, this.MINIMUM_X_DEFAULT, this.MAXIMUM_X_DEFAULT))
			}
			if (e.y != undefined) {
				if (a) {
					e.y = Math.max(c.getMinDragY(), e.y)
				}
				c.setY(this._enforceMinMax(e.y, this.MINIMUM_Y_DEFAULT, this.MAXIMUM_Y_DEFAULT))
			}
			if (e.width != undefined) {
				c.setWidth(this._enforceMinMax(e.width, d.minW, d.maxW))
			}
			if (e.height != undefined) {
				c.setHeight(this._enforceMinMax(e.height, d.minH, d.maxH))
			}
			var f = [c];
			if (c.isMultiSelect) {
				f = c.getSelectedComps()
			}
			if (b && !a) {
				if (e.width != undefined || e.height != undefined) {
					W.Layout.reportResize(f)
				} else {
					W.Layout.reportMove(f)
				}
			}
			if (e.enforceAnchors || a) {
				W.Layout.enforceAnchors(f, true)
			}
			if (W.Editor._editorComponents.componentPanel) {
				W.Editor._editorComponents.componentPanel.updateCompPosSize()
			}
			W.Editor._editorComponents.editingFrame.fitToComp();
			W.Editor.onComponentChanged(false, true)
		},
		_enforceMinMax: function(c, b, a) {
			return Math.min(Math.max(c, b), a)
		},
		_onAddComponentFullParams: function(b, a) {
			this._addComponentToCurrentScope(b.compDef, b.styleId)
		},
		_addComponentToCurrentScope: function(d, b) {
			var e = W.Preview.getPreviewManagers().Viewer;
			var a;
			if (W.Editor.getEditMode() == W.Editor.EDIT_MODE.CURRENT_PAGE) {
				a = e.getSiteNode().getElement("#" + e.getCurrentPageId())
			} else {
				if (W.Editor.getEditMode() == W.Editor.EDIT_MODE.MASTER_PAGE) {
					a = e.getSiteNode()
				}
			}
			if (d.comp) {
				d.componentType = d.comp
			}
			var c = W.CompDeserializer.createAndAddComponent(a, d, undefined, undefined, b, undefined);
			c.addEvent(Constants.ComponentEvents.READY, function() {
				this.injects().Editor._editorComponents.editingFrame.highlightEditingFrame();
				c.getLogic().onDraggedToStage()
			}.bind(this))
		},
		_onAddComponent: function(c, a) {
			if (!W.Editor._componentData) {
				return
			}
			if (!c) {
				return W.Utils.debugTrace("WEditManager::_onAddComponent: Missing parameter")
			}
			var b = W.Editor._componentData[c.compType];
			return this._onAddComponentInternal(c, b)
		},
		_onAddComponentInternal: function(b, a) {
			if (!a) {
				return W.Utils.debugTrace("WEditManager::_onAddComponent: unknown component type " + b)
			}
			var c = a.data;
			if (c) {
				c.metaData = c.metaData || {};
				c.metaData.isPreset = true
			}
			if (W.Editor._editMode != W.Editor.EDIT_MODE.CURRENT_PAGE) {
				W.Commands.executeCommand("WEditorCommands.WSetEditMode", {
					editMode: W.Editor.EDIT_MODE.CURRENT_PAGE
				})
			}
			W.Editor.clearSelectedComponent();
			this._addComponentToCurrentScope(a, b.styleId);
			LOG.reportEvent(wixEvents.COMPONENT_ADDED, {
				c1: b.compType,
				c2: b.styleId
			})
		},
		_onSnapToGrid: function(b) {
			if (b == undefined) {
				var a = W.Editor.getGridScale() != 1 ? 1 : Constants.WEditManager.DEFAULT_GRID_SCALE;
				W.Editor.setGridScale(a);
				return
			}
			if (b) {
				W.Editor.setGridScale(Constants.WEditManager.DEFAULT_GRID_SCALE)
			} else {
				W.Editor.setGridScale(1)
			}
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.commandregistrars.EditorCommandRegistrar",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: [],
		initialize: function() {},
		registerCommands: function() {
			var a = W.Commands;
			this._gridCommand = a.registerCommandAndListener("EditCommands.ToggleGridLines", this, this._onGrid);
			this._setEditModeCommand = a.registerCommandAndListener("WEditorCommands.WSetEditMode", this, this._onSetEditMode)
		},
		_onSetEditMode: function(b, a) {
			if (!W.Preview.isSiteReady()) {
				return
			}
			W.Editor.setEditMode(b.editMode);
			if (b && (b.src == "previewBtn")) {
				LOG.reportEvent(wixEvents.PREVIEW_BUTTON_CLICKED_IN_MAIN_WINDOW, {
					g1: W.Editor._templateId
				})
			}
		},
		_onGrid: function(b) {
			var a = W.Preview.getPreviewManagers().Viewer.getPageGroup();
			a.toggleGrid()
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WCommandRegistrar",
	imports: ["wysiwyg.editor.commandregistrars.EditCommandRegistrar"],
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: ["_keydownEventHandler", "_keyupEventHandler"],
		initialize: function() {
			this._editCommandRegistrar = new(W.Classes.get("wysiwyg.editor.commandregistrars.EditCommandRegistrar"))();
			this._saveCommandRegistrar = new(W.Classes.get("wysiwyg.editor.commandregistrars.SaveCommandRegistrar"))();
			this._openDialogCommandRegistrar = new(W.Classes.get("wysiwyg.editor.commandregistrars.OpenDialogCommandRegistrar"))();
			this._openPanelCommandRegistrar = new(W.Classes.get("wysiwyg.editor.commandregistrars.OpenPanelCommandRegistrar"))();
			this._pageManipulationCommandRegistrar = new(W.Classes.get("wysiwyg.editor.commandregistrars.PageManipulationCommandRegistrar"))();
			this._accountCommandRegistrar = new(W.Classes.get("wysiwyg.editor.commandregistrars.AccountCommandRegistrar"))();
			this._componentCommandRegistrar = new(W.Classes.get("wysiwyg.editor.commandregistrars.ComponentCommandRegistrar"))();
			this._editorCommandRegistrar = new(W.Classes.get("wysiwyg.editor.commandregistrars.EditorCommandRegistrar"))();
			this._ignoreKeyhandlerInTags = null
		},
		registerCommands: function() {
			var a = W.Commands;
			a.registerCommand("EditorCommands.SiteLoaded");
			this._editCommandRegistrar.registerCommands();
			this._saveCommandRegistrar.registerCommands();
			this._openDialogCommandRegistrar.registerCommands();
			this._openPanelCommandRegistrar.registerCommands();
			this._pageManipulationCommandRegistrar.registerCommands();
			this._accountCommandRegistrar.registerCommands();
			this._componentCommandRegistrar.registerCommands();
			this._editorCommandRegistrar.registerCommands()
		},
		setKeyboardEvents: function() {
			var a = W.InputBindings;
			this._ignoreKeyhandlerInTags = a.ignoreKeyhandlerInTags;
			$$("body").addEvent("keydown", this._keydownEventHandler);
			$$("body").addEvent("keyup", this._keyupEventHandler);
			this._editCommandRegistrar.setKeyboardEvents();
			this._saveCommandRegistrar.setKeyboardEvents()
		},
		enableEditCommands: function(a) {
			this._editCommandRegistrar.enableEditCommands(a)
		},
		_keyupEventHandler: function(a) {
			if (!W.Editor._keysEnabled || this._ignoreKeyhandlerInTags.contains(a.target.get("tag"))) {
				return true
			}
		},
		_keydownEventHandler: function(d) {
			if (!W.Editor._keysEnabled) {
				return this._preventBackSpace(d)
			}
			if (this._ignoreKeyhandlerInTags.contains(d.target.get("tag"))) {
				return true
			}
			var g = 1;
			var f = d.control || d.event.metaKey;
			if (f) {
				g = 10
			}
			var e = W.Commands.getCommand("WEditorCommands.SetSelectedCompPositionSize");
			var a;
			var b, c;
			if (d.code == 17 && W.Editor._editedComponent) {
				W.Editor._editorComponents.editingFrame.refreshMultiSelect()
			}
			if (d.key == "down" && W.Editor._editedComponent) {
				b = W.Editor._editedComponent.getY();
				a = {
					y: b + g
				}
			}
			if (d.key == "up" && W.Editor._editedComponent) {
				b = W.Editor._editedComponent.getY();
				a = {
					y: b - g
				}
			}
			if (d.key == "left" && W.Editor._editedComponent) {
				c = W.Editor._editedComponent.getX();
				a = {
					x: c - g
				}
			}
			if (d.key == "right" && W.Editor._editedComponent) {
				c = W.Editor._editedComponent.getX();
				a = {
					x: c + g
				}
			}
			if (a) {
				a.updateLayout = true;
				e.execute(a, this);
				d.preventDefault();
				d.stopPropagation();
				return false
			}
			return this._preventBackSpace(d)
		},
		_preventBackSpace: function(a) {
			if (this._ignoreKeyhandlerInTags.contains(a.target.get("tag"))) {
				return
			}
			var b;
			if (window.event) {
				b = window.event.keyCode
			} else {
				if (a.code) {
					b = a.code
				}
			}
			if (b == 8) {
				a.preventDefault();
				return false
			}
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.WEditorStatusAPI",
	Class: {
		Extends: "mobile.core.components.base.BaseComponent",
		Binds: [],
		initialize: function() {},
		getSaveInProcess: function() {
			return this._saveInProcess
		},
		setSaveInProcess: function(a) {
			this._saveInProcess = a
		},
		isPreviouslyPublished: function() {
			return (this._alreadyPublishedBefore || W.Preview.getPreviewSite().window.rendererModel.published)
		},
		markSiteAsPublishedBefore: function() {
			this._alreadyPublishedBefore = true
		}
	}
});
Constants.ServerErrors = {
	NO_DATA: {
		errorDescription: "no data",
		errorCode: -9999,
		payload: "no data"
	},
	SERVER_UNHANDLED_ERROR: {
		errorDescription: "server unhandled error",
		errorCode: -9999,
		payload: "no data"
	}
};
W.Classes.newClass({
	name: "mobile.core.managers.serverfacade.RESTClient",
	Class: {
		Static: {
			CALLBACK_STATUS: {
				SUCCESS: "success",
				ERROR: "error"
			},
			REQUEST_OBJECT: {
				jsonrpc: "2.0",
				id: 1,
				method: "",
				params: []
			}
		},
		initialize: function() {},
		get: function(f, h, i) {
			var g = this._createRequestOptions(f, h, i);
			var j = new Request.JSON(g);
			if (h) {
				j.get(JSON.encode(h))
			} else {
				j.get()
			}
		},
		post: function(f, h, i) {
			var g = this._createRequestOptions(f, h, i);
			g.headers = {
				"Content-Type": "application/json; charset=utf-8"
			};
			var j = new Request.JSON(g);
			j.post(JSON.encode(h))
		},
		jsonp: function(l, i, j, g) {
			var h = this._createRequestOptions(l, i, j);
			if (g) {
				h.onComplete = function(a, b) {
					this._onComplete(b, j)
				}.bind(this)
			}
			var k = new Request.JSONP(h);
			k.send(JSON.encode(i))
		},
		jsonrpc: function(g, h, j, f) {
			var i = Object.clone(this.REQUEST_OBJECT);
			i.method = h;
			i.params = j;
			this.post(g, i, {
				onSuccess: function(a) {
					if (a.result && typeof(f.onSuccess) === "function") {
						f.onSuccess(a.result)
					} else {
						if (typeof(f.onError) === "function") {
							f.onError({
								errorDescription: "json-rpc returned an error",
								errorCode: -9999,
								payload: a.error
							})
						}
					}
				},
				onError: f.onError
			})
		},
		responseCallback: null,
		_createRequestOptions: function(i, k, o) {
			var l = function(a) {
					this._onSuccess(a, o)
				}.bind(this);
			var p = function(a) {
					this._onError(a, o)
				}.bind(this);
			var m = function(a) {
					this._onComplete(a, o)
				}.bind(this);
			var n = function(b, a) {
					this._onRequest(b, a, o)
				}.bind(this);
			var j = {
				url: i,
				urlEncoded: false,
				onSuccess: l,
				onFailure: p,
				onComplete: m,
				onRequest: n
			};
			return j
		},
		_onSuccess: function(d, c) {
			if (d) {
				this._executeSuccessCallback(c.onSuccess, d)
			} else {
				this._executeFailureCallback(c.onError, Constants.ServerErrors.NO_DATA)
			}
			this._executeUsersCallback(this.CALLBACK_STATUS.SUCCESS, d)
		},
		_onError: function(d, f) {
			if (d) {
				var e = Object.clone(Constants.ServerErrors.SERVER_UNHANDLED_ERROR);
				e.errorCode = d.status;
				this._executeFailureCallback(f.onError, e)
			} else {
				this._executeFailureCallback(f.onError, Constants.ServerErrors.NO_DATA)
			}
			this._executeUsersCallback(this.CALLBACK_STATUS.ERROR, d)
		},
		_onComplete: function(d, c) {
			this._executeSuccessCallback(c.onComplete, d)
		},
		_onRequest: function(g, i, k) {
			var j = W.Utils.getQueryParam("callback", g).split(".");
			var h = window;
			for (var l = 0;
			l < j.length;
			l++) {
				h = h[j[l]]
			}
			if (typeof(k.onRequest) === "function") {
				k.onRequest(h, g, i)
			}
		},
		_executeSuccessCallback: function(c, d) {
			if (typeOf(c) === "function") {
				c(d)
			}
		},
		_executeFailureCallback: function(c, d) {
			if (typeOf(c) === "function") {
				c(d.errorDescription, d.errorCode, d.payload)
			}
		},
		_executeUsersCallback: function(d, c) {
			if (this.responseCallback && typeOf(this.responseCallback) === "function") {
				this.responseCallback(d, c)
			}
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.serverfacade.WixRESTClient",
	Class: {
		Extends: "mobile.core.managers.serverfacade.RESTClient",
		initialize: function() {},
		_onSuccess: function(d, c) {
			this._validateServerSuccessResponse(d);
			if (d) {
				if (d.success) {
					this._executeSuccessCallback(c.onSuccess, d)
				} else {
					this._executeFailureCallback(c.onError, d)
				}
			} else {
				this._executeFailureCallback(c.onError, Constants.ServerErrors.NO_DATA)
			}
			this._executeUsersCallback(this.CALLBACK_STATUS.SUCCESS, d.payload)
		},
		_onComplete: function(d, c) {
			this._validateServerSuccessResponse(d);
			this.parent(d, c)
		},
		_validateServerSuccessResponse: function(b) {
			if (!b || b.success === false) {
				LOG.reportError(wixErrors.SERVER_RETURNED_ERROR, "RESTClient", "_onComplete", b)
			}
		},
		_executeSuccessCallback: function(f, e) {
			var d = (e && e.payload) || e;
			this.parent(f, d)
		},
		_executeUsersCallback: function(e, d) {
			var f = (d && d.payload) || d;
			this.parent(e, f)
		}
	}
});
W.Classes.newClass({
	name: "wysiwyg.editor.managers.UndoRedoManager",
	imports: ["wysiwyg.editor.managers.undoredomanager.LayoutChange", "wysiwyg.editor.managers.undoredomanager.PropertyChange", "wysiwyg.editor.managers.undoredomanager.PositionChange", "wysiwyg.editor.managers.undoredomanager.DataChange"],
	Class: {
		Extends: Events,
		Binds: ["_onChange", "_getComponentDataManager", "_resetStacks", "_onSiteLoaded", "_beforeSiteLoaded", "_startTransaction", "undo", "redo", "_onPageChange"],
		_constants: {
			Modules: {
				LAYOUT_CHANGE: "LayoutChange",
				COMP_DATA_CHANGE: "PropertyChange",
				POSITION_CHANGE: "PositionChange",
				DATA_CHANGE: "DataChange"
			},
			Commands: {
				UNDO: "_undo",
				REDO: "_redo"
			},
			_prefix: "wysiwyg.editor.managers.undoredomanager."
		},
		initialize: function() {
			this._historyStack = [];
			this._knownFutureStack = [];
			this._transactionStack = [];
			this._layoutData = new this.imports.LayoutChange();
			this._positionData = new this.imports.PositionChange();
			this._compPropData = new this.imports.PropertyChange();
			this._compData = new this.imports.DataChange();
			this._isReady = false;
			W.Managers.addEvent("deploymentCompleted", this._beforeSiteLoaded)
		},
		isReady: function() {
			return this._isReady
		},
		clone: function() {
			return new this.$class()
		},
		_beforeSiteLoaded: function() {
			this.injects().Commands.registerCommandListenerByName("EditorCommands.SiteLoaded", this, this._onSiteLoaded, null);
			this.injects().Commands.registerCommandListenerByName("WEditorCommands.AddPage", this, this._onAddPage, null);
			this.injects().Commands.registerCommandListenerByName("WEditorCommands.AddComponent", this, this._resetStacks, null);
			this._isReady = true
		},
		_onSiteLoaded: function() {
			W.Editor.addEvent(Constants.EditorEvents.SITE_PAGE_CHANGED, this._onPageChange);
			W.Managers.getManagers().Layout.addEvent("resetHistoryStack", this._resetStacks);
			this._layoutData.addEvent(Constants.DataEvents.DATA_CHANGED, this._onChange);
			this._positionData.addEvent(Constants.DataEvents.DATA_CHANGED, this._onChange);
			this._compPropData.addEvent(Constants.DataEvents.DATA_CHANGED, this._onChange);
			this._compData.addEvent(Constants.DataEvents.DATA_CHANGED, this._onChange);
			this.modules = {};
			this.modules[this._constants.Modules.LAYOUT_CHANGE] = this._layoutData;
			this.modules[this._constants.Modules.POSITION_CHANGE] = this._positionData;
			this.modules[this._constants.Modules.COMP_DATA_CHANGE] = this._compPropData;
			this.modules[this._constants.Modules.DATA_CHANGE] = this._compData;
			var a = W.Managers.getManagers();
			this._layoutData.startListenTo(a.Layout);
			this._positionData.startListenTo(a.Layout);
			this._compPropData.startListenTo(this._getComponentPropDataManager());
			this._compData.startListenTo(this._getComponentDataManager());
			this._currentPageId = this._getCurrentPageId()
		},
		_onChange: function(d) {
			if (d && d.sender === "undo") {
				return
			}
			this._resetFutureStack();
			if (this._isInTransaction) {
				this._transactionStack.unshift(d);
				var c = d.type === this._constants._prefix + "DataChange";
				var a = d.type === this._constants._prefix + "PropertyChange";
				if (c || a) {
					this._endTransaction(this._startScopeId);
					this._startTransaction(this._startScopeId)
				}
				return
			}
			if (d && d.timestamp && this._isUndoable() && this._historyStack[0].timestamp) {
				var b = this._historyStack[0];
				if (b.type != d.type) {
					return
				}
				if (b.dataItemId != d.dataItemId) {
					return
				}
				if (d.timestamp - b.timestamp < 500) {
					return
				}
			}
			if (d) {
				d.pageId = W.Preview.getPreviewManagers().Viewer.getCurrentPageId()
			}
			this._historyStack.unshift(d)
		},
		undo: function() {
			if (!this._isUndoable()) {
				return false
			}
			var b = this._historyStack[0];
			this._currentPageId = this._getCurrentPageId();
			if (this._currentPageId != b.pageId) {
				W.Preview.getPreviewManagers().Viewer.addEvent("pageTransitionEnded", this.undo);
				this.injects().Preview.goToPage(b.pageId);
				return
			} else {
				W.Preview.getPreviewManagers().Viewer.removeEvent("pageTransitionEnded", this.undo)
			}
			if (this._isTransactionData(b)) {
				this._undoTransaction(b.transaction);
				var a = this.injects().Editor.getComponentEditBox()._editedComponent;
				if (a && a.getLogic) {
					this.injects().Layout.enforceAnchors([a], true, false)
				}
			} else {
				this._applyChangeMap(this._constants.Commands.UNDO, b, b.type)
			}
			this._knownFutureStack.unshift(b);
			this._removeItemFromStack(this._historyStack);
			this._refreshComponentEditBox();
			this.injects().Editor.onComponentChanged(true);
			return true
		},
		redo: function() {
			if (!this._isRedoable()) {
				return false
			}
			var a = this._knownFutureStack[0];
			this._currentPageId = this._getCurrentPageId();
			if (this._currentPageId != a.pageId) {
				this.injects().Preview.getPreviewManagers().Viewer.addEvent("pageTransitionEnded", this.redo);
				this.injects().Preview.goToPage(a.pageId);
				return
			} else {
				W.Preview.getPreviewManagers().Viewer.removeEvent("pageTransitionEnded", this.redo)
			}
			if (this._isTransactionData(a)) {
				this._redoTransaction(a.transaction)
			} else {
				this._applyChangeMap(this._constants.Commands.REDO, a, a.type)
			}
			this._historyStack.unshift(a);
			this._removeItemFromStack(this._knownFutureStack);
			this._refreshComponentEditBox();
			this.injects().Editor.onComponentChanged(true);
			return true
		},
		_undoTransaction: function(a) {
			for (var c = 0;
			c < a.length; ++c) {
				var b = a[c].type;
				this._applyChangeMap(this._constants.Commands.UNDO, a[c], b)
			}
		},
		_redoTransaction: function(a) {
			for (var c = 0;
			c < a.length; ++c) {
				var b = a[c].type;
				this._applyChangeMap(this._constants.Commands.REDO, a[c], b)
			}
		},
		_startTransaction: function(a) {
			if (a === null && !this._isInTransaction) {
				this._resetAfterTransaction = true
			}
			if (a) {
				this._startScopeId = a
			} else {
				this._startScopeId = null
			}
			if (this._isInTransaction) {
				return
			}
			this._isInTransaction = true;
			this._transactionStack = []
		},
		_endTransaction: function(a) {
			if (this._resetAfterTransaction) {
				this._resetAfterTransaction = false;
				this._resetStacks();
				return
			}
			if (this._resetStacksFlag) {
				this._transactionStack = [];
				this._resetStacksFlag = false;
				return
			}
			if (a == null || a != this._startScopeId) {
				this._resetStacks();
				return
			}
			this._isInTransaction = false;
			if (!this._transactionStack.length) {
				return
			}
			this._historyStack.unshift({
				transaction: this._transactionStack,
				pageId: W.Preview.getPreviewManagers().Viewer.getCurrentPageId()
			});
			this._transactionStack = []
		},
		_isTransactionData: function(a) {
			return a.transaction && typeOf(a.transaction) == "array"
		},
		_applyChangeMap: function(c, a, b) {
			this.modules[this._getType(b)][c](a)
		},
		_getType: function(a) {
			return a.replace(this._constants._prefix, "")
		},
		_resetFutureStack: function() {
			if (this._isRedoable()) {
				this._knownFutureStack = []
			}
		},
		_isUndoable: function() {
			return this._historyStack.length > 0
		},
		_isRedoable: function() {
			return this._knownFutureStack.length > 0
		},
		_removeItemFromStack: function(a) {
			a.splice(0, 1)
		},
		_refreshComponentEditBox: function() {
			var a = this.injects().Editor;
			if (a.getSelectedComp()) {
				a.getComponentEditBox().fitToComp()
			}
		},
		_onAddPage: function() {
			this._startTransaction(null)
		},
		_resetStacks: function() {
			this._resetStacksFlag = true;
			this._endTransaction(null);
			this._isInTransaction = false;
			this._transactionStack = [];
			this._knownFutureStack = [];
			this._historyStack = []
		},
		_onPageChange: function(a) {
			this._currentPageId = a
		},
		_getCurrentPageId: function() {
			return W.Preview.getPreviewManagers().Viewer.getCurrentPageId()
		},
		_getComponentPropDataManager: function() {
			return this.injects().Preview.getPreviewManagers().ComponentData
		},
		_getComponentDataManager: function() {
			return this.injects().Preview.getPreviewManagers().Data
		}
	}
});
Constants.SkinParamTypes = {
	BORDER_RADIUS: "cssBorderRadius",
	BG_COLOR: "cssBgColor",
	BOX_SHADOW: "boxShadow",
	COLOR: "color",
	COLOR_ALPHA: "color_alpha",
	FONT: "cssFont",
	SIZE: "size",
	OTHER: "cssStr",
	URL: "url",
	TRANSITION: "transition"
};
Constants.SkinParamCssTypesToGeneralTypesMap = {
	cssBorderRadius: "radius",
	cssBgColor: "color",
	boxShadow: "boxShadow",
	color: "color",
	color_alpha: "color",
	cssFont: "font",
	size: "size",
	cssStr: "string",
	url: "url",
	transition: "transition"
};
Constants.skinManager = {
	STYLE_CSS_PLACEHOLDER: "[STYLE_PH]",
	FEATURES: {}
};
(function() {
	var c = new Element("div");
	var d = function(b, a, f) {
			c.style.cssText = a;
			Constants.skinManager.FEATURES[b] = f(c)
		};
	d("filter_alpha", "filter:alpha(opacity=0.9);", function(a) {
		return (a.style.filter !== undefined && a.style.filter.indexOf("alpha") != -1)
	});
	d("opacity", "opacity:0.7;", function(a) {
		return (a.style.opacity !== undefined && a.style.opacity == "0.7")
	});
	d("background-color_rgba", "background-color:rgba(255,0,0,0.5);", function(a) {
		return (a.style.backgroundColor !== undefined && a.style.backgroundColor.indexOf("rgba") != -1)
	});
	d("border-radius", "border-top-right-radius:0.1em;", function(a) {
		return (a.style.borderTopRightRadius !== undefined && a.style.borderTopRightRadius.indexOf("0.1em") != -1)
	});
	d("-webkit-border-radius", "-webkit-border-top-right-radius:0.2em;", function(a) {
		return (a.style.webkitBorderTopRightRadius !== undefined && a.style.webkitBorderTopRightRadius.indexOf("0.2em") != -1)
	});
	d("-moz-border-radius", "-moz-border-radius-topright:0.3em;", function(a) {
		return (a.style.MozBorderRadiusTopright !== undefined && a.style.MozBorderRadiusTopright.indexOf("0.3em") != -1)
	})
})();
W.Classes.newClass({
	name: "mobile.core.managers.SkinManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		Binds: ["buildSkinCSS", "_onThemeChange", "_checkThemePropChanges", "_checkStylePropChanges"],
		initialize: function() {
			this._SkinParserClass = W.Classes.get("mobile.core.managers.skin.SkinParser");
			this._SkinRendererClass = W.Classes.get("mobile.core.managers.skin.SkinRenderer");
			this._CssGarbageCollectorClass = W.Classes.get("mobile.core.managers.skin.CssGarbageCollector");
			this._skinParser = new this._SkinParserClass();
			this._skinRenderer = new this._SkinRendererClass();
			this._skinQue = new W.Queue();
			this._skinClassMap = {};
			this._skinDataMap = {};
			this._styleDataMap = {};
			this._cssGarbageCollector = new this._CssGarbageCollectorClass(this._styleDataMap, this._skinDataMap, this._skinRenderer);
			if (W.Classes.getClassStatus("mobile.core.skins.BaseSkin") == "missing") {
				this.newSkin(W.BaseSkinClassData)
			}
			W.Theme.addEvent("propertyChange", this._onThemeChange);
			setInterval(this._cssGarbageCollector.runGarbageCollector, 10000)
		},
		newSkin: function(k) {
			if (this._skinClassMap[k.name] || this._skinDataMap[k.name]) {
				LOG.reportError(wixErrors.SKIN_ALREADY_EXIST, this.className, "newSkin", k.name + "");
				return
			}
			var l = k.Class;
			var h = (k.imports || []);
			k.imports = h;
			var j = l.compParts || {};
			for (var n in j) {
				var m = j[n].skin;
				if (m && h.indexOf(m) < 0) {
					h.push(m)
				}
			}
			if (k.name != "mobile.core.skins.BaseSkin" && !instanceOf(l.Extends, String)) {
				l.Extends = "mobile.core.skins.BaseSkin"
			}
			if (k.onSkinReady) {
				this._skinQue.add(k.name, k.onSkinReady)
			}
			k.onClassReady = function(b) {
				var a = this._skinParser.parseSkinData(b.prototype);
				this._skinDataMap[k.name] = a;
				b.prototype.getSkinClassData = function() {
					return a
				};
				this._onSkinReady(b, k.name)
			}.bind(this);
			var i = W.Classes;
			i.newClass(k)
		},
		override: function(c, d) {
			if (!c) {
				throw new Error("null/undefine skin name to override: ")
			}
			this.getSkin(c, function() {
				this._skinClassMap[c] = d
			}.bind(this))
		},
		getSkin: function(d, c) {
			if (this._skinClassMap[d]) {
				W.Utils.callLater(c, [this._skinClassMap[d]]);
				return this._skinClassMap[d]
			} else {
				this._skinQue.add(d, c);
				W.Classes.get(d, function() {});
				return null
			}
		},
		_onSkinReady: function(c, d) {
			this._skinClassMap[d] = c;
			this._skinQue.getQueue(d).forEach(function(a) {
				a(this._skinClassMap[d])
			}.bind(this));
			this._skinQue.removeKey(d)
		},
		_$getCssId: function() {
			return this._skinRenderer.getCssNodeId()
		},
		clone: function() {
			var b = this.parent();
			Object.forEach(this._skinClassMap, function(d, a) {
				b._skinClassMap[a] = d
			});
			Object.forEach(this._skinDataMap, function(d, a) {
				b._skinDataMap[a] = d
			});
			return b
		},
		isReady: function() {
			return (!this._skinQue.hasQueue())
		},
		buildSkinCSS: function(f, h) {
			var g = this._skinDataMap[f];
			if (!g) {
				LOG.reportError(wixErrors.SKIN_MANAGER_NO_DATA_FOR_SKIN, "mobile.core.managers.SkinManager", "buildSkinCSS", f);
				return
			}
			var e = this._skinRenderer.getStyleId(h);
			if (g.CSSBuildFlags[e] || (h && h.isStyleRenderedForSkin(f))) {
				return
			}
			if (h) {
				this._styleDataMap[e] = h;
				h.setStyleRenderFlagForSkin(f, true)
			} else {
				g.CSSBuildFlags[e] = true
			}
			this._skinRenderer.registerSkinCSSNow(g, h)
		},
		buildSkinHTML: function(f, g, h) {
			if (!(f && g)) {
				var j = g && g.getProperty("id");
				LOG.reportError(wixErrors.SKIN_MANAGER_MISSING_ARGUMENTS, "mobile.core.managers.SkinManager", "buildSkinHTML", "skinName=" + f + " compId=" + j + "compViewNode: " + g);
				return {}
			}
			var i = this._skinDataMap[f];
			if (!i) {
				LOG.reportError(wixErrors.SKIN_MANAGER_NO_DATA_FOR_SKIN, "mobile.core.managers.SkinManager", "buildSkinHTML", f);
				return {}
			}
			return this._skinRenderer.buildSkinHTML(i, g, h)
		},
		stylePropertiesChangedForSkin: function(g, i, j) {
			var f = i && i.getId();
			if (g && f && j) {
				if (!this._styleChangedProps) {
					this._styleChangedProps = {}
				}
				this._styleChangedProps[g] = this._styleChangedProps[g] || {};
				this._styleChangedProps[g][f] = this._styleChangedProps[g][f] || {
					style: i,
					props: {}
				};
				for (var h in j) {
					this._styleChangedProps[g][f].props[h] = ""
				}
				if (!this._styleChangeCallLater) {
					this._styleChangeCallLater = W.Utils.callOnNextRender(this._checkStylePropChanges, 100)
				}
			}
		},
		_onThemeChange: function(c) {
			var d = c.name;
			if (d) {
				if (!this._themeChangedProps) {
					this._themeChangedProps = {}
				}
				this._themeChangedProps[d] = c;
				if (!this._themeChangeCallCallLater) {
					this._themeChangeCallCallLater = W.Utils.callOnNextRender(this._checkThemePropChanges, 100)
				}
			}
		},
		_checkStylePropChanges: function() {
			var j, k, m, i, l, n, o, p;
			delete this._styleChangeCallLater;
			for (j in this._styleChangedProps) {
				k = this._styleChangedProps[j];
				m = this._skinDataMap[j];
				for (i in k) {
					l = k[i].style;
					n = k[i].props;
					o = m.css;
					for (p = 0;
					p < o.length; ++p) {
						if (this._isSkinCssClassContainsPartialParams(o[p], n, "id")) {
							this._skinRenderer.updateSkinCSSClass(o[p].selector, o[p].rules, o[p].params, m.params, l)
						}
					}
				}
			}
			delete this._styleChangedProps
		},
		_checkThemePropChanges: function() {
			delete this._themeChangeCallCallLater;
			if (this === W.Skins) {
				for (var f in this._skinDataMap) {
					var g = this._skinDataMap[f];
					var h = this._skinDataMap[f].css;
					for (var e = 0;
					e < h.length; ++e) {
						if (this._isSkinCssClassContainsPartialParams(h[e], this._themeChangedProps, "defaultTheme")) {
							this._skinRenderer.updateSkinCSSClass(h[e].selector, h[e].rules, h[e].params, g.params)
						}
					}
				}
			}
			delete this._themeChangedProps
		},
		_isSkinCssClassContainsPartialParams: function(k, l, i) {
			var j = k.params;
			for (var h in l) {
				for (var g = 0;
				g < j.length; ++g) {
					if (j[g][i] && j[g][i] == h) {
						return true
					}
				}
			}
			return false
		},
		getSkinParamValue: function(h, g, k) {
			var i = this._skinDataMap[h].params;
			for (var l = 0;
			l < i.length;
			l++) {
				var j = i[l];
				if (j.id == g) {
					return this._skinRenderer.getParamValue(j, k)
				}
			}
			return null
		},
		getUniqueClass: function(g, e) {
			var h = this._skinParser.getSkinCSSName(e);
			var f = this._skinParser.getUniqueClass(g, h);
			return f.uniqueClass
		}
	}
});
Constants.add("components.DEFAULT_PREFIX", "c");
Constants.add("components.BASE_LIST_ITEM_PREFIX", "bli");
W.Classes.newClass({
	name: "mobile.core.managers.ComponentManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		Binds: ["getComponent"],
		initialize: function() {
			this._componentQue = new W.Queue();
			if (W.BaseComponentClassData) {
				W.Classes.newClass(W.BaseComponentClassData);
				delete W.BaseComponentClassData
			}
			this._componentMap = {
				"mobile.core.components.base.BaseComponent": W.Classes.get("mobile.core.components.base.BaseComponent")
			};
			if (!this._componentMap["mobile.core.components.base.BaseComponent"]) {
				LOG.reportError(wixErrors.MANAGERS_INVALID_CLASS, "ComponentManager", "initialize", "W.BaseComponentClassData is missing")()
			}
		},
		newComponent: function(i) {
			if (this._componentMap[i.name]) {
				LOG.reportError(wixErrors.CM_NAME_ALREADY_EXIST, this.className, "newComponent", i.name)();
				return
			}
			if (i.name != "mobile.core.components.base.BaseComponent" && !instanceOf(i.Class.Extends, String)) {
				LOG.reportError(wixErrors.CM_NO_EXTEND, this.className, "newComponent", "")();
				return
			}
			var h = i.skinParts || {};
			i.Class._skinPartsSchema = h;
			var g = (i.imports || []);
			i.imports = g;
			for (var f in h) {
				var j = h[f].type;
				if (j && j != Constants.ComponentPartTypes.HTML_ELEMENT && g.indexOf(j) < 0) {
					g.push(j)
				}
			}
			i.Class._propertiesSchemaName = i.propertiesSchemaName;
			if (i.onComponentReady) {
				this._componentQue.add(i.name, i.onComponentReady)
			}
			i.onClassReady = function(a) {
				this._onComponentClassReady(a, i.name)
			}.bind(this);
			W.Classes.newClass(i)
		},
		override: function(d, c) {
			if (!d) {
				throw new Error("null/undefined component name for override")
			}
			this._componentMap[d] = c
		},
		getComponent: function(d, c) {
			if (this._componentMap[d]) {
				W.Utils.callLater(c, [this._componentMap[d]]);
				return this._componentMap[d]
			} else {
				this._componentQue.add(d, c);
				W.Classes.get(d, function() {});
				return null
			}
		},
		getOverrideComponentName: function(e, f) {
			var d = this.getComponent(e, function(a) {
				W.Utils.callLater(f, [a.prototype.className])
			}.bind(this));
			return d
		},
		_onComponentClassReady: function(f, d) {
			this._componentMap[d] = f;
			var e = this._componentQue.getQueue(d);
			e.forEach(function(a) {
				a(this._componentMap[d])
			}.bind(this));
			this._componentQue.removeKey(d)
		},
		createComponent: function(s, p, x, u, n, o, w, t, y, v) {
			if (s && typeOf(s) == "object") {
				var z = s;
				s = z.type;
				p = z.skin || p;
				x = z.data || x;
				u = z.args || u;
				n = z.wixifyCallback || n;
				o = z.componentReadyCallback || o;
				w = z.domIdPrefix || w;
				t = z.compNode || t;
				v = z.innerStyle
			}
			if (!s || typeOf(s) != "string") {
				LOG.reportError(wixErrors.CM_LOGIC_TYPE, this.className, "createComponent", "created from:" + this.className + "");
				return new Element("span")
			}
			var q = {
				comp: s,
				skin: p
			};
			if (x) {
				var r = typeof(x);
				if (r == "string") {
					q.dataQuery = x;
					x = null
				} else {
					if (r == "object") {
						if (!x._dataType) {
							LOG.reportError(wixErrors.WIXIFY_MISSING_DATA_TYPE, this.className, "createComponent", "created from:" + this.className)
						}
					}
				}
			}
			if (t) {
				t.setProperties(q)
			} else {
				t = new Element("div", q)
			}
			if (n && typeof n == "function") {
				t.addEvent("wixified", function() {
					n(t.getLogic())
				})
			}
			if (o && typeof o == "function") {
				t.addEvent(Constants.ComponentEvents.READY, function() {
					t.removeEvent(Constants.ComponentEvents.READY, arguments.callee);
					o(t.getLogic())
				})
			}
			if (x && x._dataType) {
				t.wixify(u, x, w, y, v)
			} else {
				t.wixify(u, null, w, y, v)
			}
			return t
		},
		clone: function() {
			var c = this.parent();
			for (var d in this._componentMap) {
				c._componentMap[d] = this._componentMap[d]
			}
			for (d in this._componentQue.map) {
				c._componentQue.map[d] = this._componentQue.map[d]
			}
			return c
		},
		isReady: function() {
			return (this._componentMap["mobile.core.components.base.BaseComponent"] && !this._componentQue.hasQueue())
		}
	}
});
Constants.DataEvents = {
	DATA_CHANGED: "dataChanged",
	BEFORE_CHANGE: "beforeDataChange",
	AFTER_CHANGE: "afterDataChange"
};
Constants.DataTypes = {
	TYPE_RESOURCE_KEY: "resourceKey"
};
W.Classes.newClass({
	name: "mobile.core.managers.data.DataManager",
	Class: {
		Extends: Events,
		initialize: function() {
			this.dataMap = {};
			this.dirtyDataObjectsMap = {};
			this.dataTypesMap = {};
			this.dataTypesSchemaMap = {};
			this.dataTypesClassMap = {};
			this.callbackQueue = new W.Queue();
			this._DataItemBase = W.Classes.get("mobile.core.managers.data.DataItemBase");
			this._DataItemWithSchema = W.Classes.get("mobile.core.managers.data.DataItemWithSchema");
			this._dataPropsAdds = {};
			this._schemaPropsAdds = {}
		},
		flagDataChange: function() {
			this._dataChanged = true
		},
		clearDataChange: function() {
			this._dataChanged = false
		},
		isDataChange: function() {
			return (this._dataChanged === true)
		},
		registerDataTypeSchema: function(f, h) {
			var e = h["extends"];
			if (e) {
				var g = this.dataTypesSchemaMap[e];
				if (!g) {
					LOG.reportError(wixErrors.SCHEMA_MISSING_KEY, "DataManager", "registerDataTypeSchema", [f, e])();
					return
				}
				Object.merge(h, g)
			}
			this._appendSchemaPropAdds(f, h);
			this.dataTypesSchemaMap[f] = h
		},
		registerDataTypeClass: function(c) {
			c.onClassReady = function(a) {
				this._onDataTypeClassReady(a, c.type)
			}.bind(this);
			var d = W.Classes;
			d.newClass(c)
		},
		_onDataTypeClassReady: function(d, c) {
			this.dataTypesClassMap[c] = d
		},
		clearDirtyObjectsMap: function() {
			this.dirtyDataObjectsMap = {}
		},
		hasDirtyObjects: function() {
			return W.Utils.objectSizeDelta(this.dirtyDataObjectsMap)
		},
		markDirtyObject: function(e) {
			var f = e._data;
			var d = f.id;
			this.dirtyDataObjectsMap[d] = e
		},
		setInitDataItems: function(b) {
			this.skipDirtyMarking = true;
			this.addDataItems(b);
			delete this.skipDirtyMarking
		},
		addDataItems: function(d) {
			for (var c in d) {
				this.addDataItem(c, d[c])
			}
		},
		addDataItem: function(f, d) {
			this._appendDataPropAdds(f, d);
			var e = this.createDataItem(d);
			e._data.id = f;
			this.dataMap[f] = e;
			this._runCallbacks(f, e);
			if (!this.skipDirtyMarking) {
				this.markDirtyObject(e)
			}
			return e
		},
		override: function(c, d) {
			if (!c || !this.dataMap[c]) {
				throw new Error("Invalid data id name for override: " + c)
			}
			this.dataMap[c] = d
		},
		addDataProps: function(d, f, e) {
			this._dataPropsAdds[d] = this._dataPropsAdds[d] || {};
			if (typeOf(e) == "array") {
				this._dataPropsAdds[d][f] = this._dataPropsAdds[d][f] || [];
				this._dataPropsAdds[d][f].combine(e)
			} else {
				if (typeOf(e) == "object") {
					this._dataPropsAdds[d][f] = this._dataPropsAdds[d][f] || {};
					Object.merge(this._dataPropsAdds[d][f], (e))
				}
			}
		},
		addSchemaProps: function(c, d) {
			this._schemaPropsAdds[c] = this._schemaPropsAdds[c] || {};
			Object.merge(this._schemaPropsAdds[c], d)
		},
		_appendDataPropAdds: function(d, e) {
			if (this._dataPropsAdds.hasOwnProperty(d)) {
				var f = this._dataPropsAdds[d];
				Object.each(f, function(a, b) {
					if (typeOf(e[b]) == "array") {
						e[b].combine(a)
					} else {
						if (typeOf(e[b]) == "object") {
							Object.merge(e[b], (a))
						}
					}
				})
			}
		},
		_appendSchemaPropAdds: function(d, c) {
			if (this._schemaPropsAdds.hasOwnProperty(d)) {
				Object.merge(c, this._schemaPropsAdds[d])
			}
		},
		addDataItemWithUniqueId: function(h, e) {
			var g;
			do {
				g = h + Number.random(0, 99999).toString(36);
				g = g.replace(" ", "_")
			} while (this.dataMap[g]);
			var f = this.addDataItem(g, e);
			return {
				id: g,
				dataObject: f
			}
		},
		reportDataItemChangeEvent: function(e, g, f, h) {
			this.fireEvent(Constants.DataEvents.DATA_CHANGED, [e, g, f, h])
		},
		_runCallbacks: function(c, d) {
			this.callbackQueue.popQueue(c).forEach(function(a) {
				a(d)
			})
		},
		createDataItem: function(g, f) {
			f = f || g.type;
			var i = this.dataTypesSchemaMap[f];
			var h = this.dataTypesClassMap[f];
			if (!i && !h && f !== undefined) {
				var j = "/schema=[" + f + "]";
				LOG.reportError(wixErrors.SCHEMA_MISSING, "DataManager", "createDataItem" + j, [f])
			}
			if (i) {
				return new this._DataItemWithSchema(i, g, this)
			} else {
				if (h) {
					return new h(g, this)
				} else {
					return new this._DataItemBase(g, this)
				}
			}
		},
		isDataItem: function(b) {
			return b && instanceOf(b, this._DataItemBase)
		},
		getDataByQuery: function(g, h) {
			var e = null;
			if (g.indexOf("#") === 0) {
				var f = g.substr(1);
				e = this.dataMap[f];
				if (!e) {
					this.callbackQueue.add(f, h)
				} else {
					W.Utils.callLater(h, [e]);
					return e
				}
			} else {
				LOG.reportError(wixErrors.DM_MALFORMED_QUERY, "DataManager", "getDataByQuery", g);
				W.Utils.callLater(h, [null])
			}
		},
		isDataAvailable: function(f) {
			var d = null;
			if (f.indexOf("#") === 0) {
				var e = f.substr(1);
				d = this.dataMap[e];
				if (d) {
					return true
				} else {
					return false
				}
			} else {
				LOG.reportError(wixErrors.DM_MALFORMED_QUERY, "DataManager", "isDataAvailable", f);
				return false
			}
		},
		getDataByQueryList: function(r, i) {
			var q = {};
			var p = function(a) {
					return function(c) {
						q[a] = c;
						var b = true;
						for (var d = 0;
						d < r.length; ++d) {
							if (!q[r[d]]) {
								b = false;
								break
							}
						}
						if (b && i) {
							i(q)
						}
					}
				};
			if (r.length === 0) {
				var m = {};
				W.Utils.callLater(i, [m])
			} else {
				var l = {};
				var n = true;
				for (var o = 0;
				o < r.length; ++o) {
					var k = this.getDataByQuery(r[o], p(r[o]));
					if (k) {
						l[r[o]] = k
					} else {
						n = false
					}
				}
				if (n) {
					return l
				}
			}
		},
		getDataMap: function() {
			return this.dataMap
		},
		getDirtyDataObjectsMap: function() {
			return Object.filter(this.dirtyDataObjectsMap, function(b) {
				return b.getMeta("isPersistent")
			})
		},
		clone: function() {
			var b = new this.$class();
			this._copyData(b);
			return b
		},
		isReady: function() {
			return true
		},
		_copyData: function(d) {
			d.dataTypesMap = Object.clone(this.dataTypesMap);
			d.dataTypesSchemaMap = Object.clone(this.dataTypesSchemaMap);
			d.dataTypesClassMap = Object.clone(this.dataTypesClassMap);
			for (var e in this.dataMap) {
				var f = Object.clone(this.dataMap[e].getData());
				d.addDataItem(e, f)
			}
		},
		toString: function() {
			return "[Data Manager]"
		},
		markAllDirty: function() {
			for (var b in this.dataMap) {
				this.dirtyDataObjectsMap[b] = this.dataMap[b]
			}
		},
		getResourceManager: function() {
			return W.Resources
		},
		removeDataItem: function(d) {
			var c = typeof d == "string" ? d : this.getQueryOfDataItem(d);
			this._removeIfSafe(c)
		},
		_removeIfSafe: function(c) {
			var d = c && this.dataMap[c.substr(1)];
			if (!d) {
				return
			}
			if (d.componentsWithInterest.length === 0 && !this._isReferenced(c)) {
				d.removeAllEvents();
				delete this.dataMap[c.substr(1)]
			}
		},
		_isReferenced: function(d) {
			var f, e;
			for (f in this.dataMap) {
				e = this.dataMap[f].getData();
				if (e && e.items && e.items.indexOf && e.items.indexOf(d) !== -1) {
					return true
				}
			}
			return false
		},
		getQueryOfDataItem: function(d) {
			var c;
			for (c in this.dataMap) {
				if (d === this.dataMap[c]) {
					return "#" + c
				}
			}
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.ThemeManager",
	Class: {
		Extends: "mobile.core.managers.data.DataManager",
		Binds: ["_onDataChanged", "_onDataReady", "_onPropChange", "_updateEffectedProps"],
		Static: {
			INIT_STYLE_RAW_DATA: {
				type: "TopLevelStyle",
				skin: "skin-name-place-holder",
				style: {
					properties: {},
					groups: {}
				}
			},
			TEXT_STYLE_SHEET: ""
		},
		getStyle: function(e, g, f) {
			if (this._styleCache[e]) {
				W.Utils.callLater(g, [this._styleCache[e]])
			} else {
				this._styleQueue.add(e, g);
				if (this._styleQueue.getQueue(e).length > 1) {
					return
				}
				var h = function(a) {
						a.removeEvent(Constants.StyleEvents.READY, h);
						this._styleCache[e] = a;
						this._styleQueue.getQueue(e).forEach(function(b) {
							b(a)
						});
						this._styleQueue.removeKey(e)
					}.bind(this);
				if (this.isStyleAvailable(e)) {
					this.getDataByQuery("#" + e, function(c) {
						var a = c.get("style");
						var b = new this.TopLevelStyleClass(c);
						b.addEvent(Constants.StyleEvents.READY, h)
					}.bind(this))
				} else {
					this.createStyle(e, "", f, h)
				}
			}
		},
		isStyleAvailable: function(b) {
			return this.isDataAvailable("#" + b)
		},
		invalidateStyle: function(b) {
			if (this._styleCache[b]) {
				this._styleCache[b].invalidateStyle()
			}
		},
		createStyle: function(i, m, j, k) {
			if (this._stylesInProcess[i] || this._styleCache[i]) {
				LOG.reportError(wixErrors.STYLE_ALREADY_EXISTS, "ThemeManager", "createStyle", i)()
			}
			var l = Object.clone(this.INIT_STYLE_RAW_DATA);
			l.skin = j;
			var p = this.addDataItem(i, l);
			var n = new this.TopLevelStyleClass(p);
			this._stylesInProcess[i] = n;
			var o = function() {
					n.removeEvent("styleReady", o);
					var a = n.getId();
					delete this._stylesInProcess[a];
					this._styleCache[a] = n;
					k(n)
				}.bind(this);
			n.addEvent("styleReady", o)
		},
		initialize: function(b) {
			this.parent();
			this.TopLevelStyleClass = W.Classes.get("mobile.core.managers.style.Style");
			this._placeHoldersMap = {};
			this._isReady = false;
			this._styleQueue = new W.Queue();
			this._styleCache = {};
			this._stylesInProcess = {};
			this._isOperating = false;
			if (b) {
				this._onDataReady(b)
			}
		},
		setInitDataItems: function(d) {
			
			this.parent(d);
			var c = "#THEME_DATA";
			if (this.isDataAvailable(c)) {
				this.getDataByQuery(c, this._onDataReady)
			} else {
				W.Data.getDataByQuery(c, this._onDataReady)
			}
		},
		getPropertyType: function(b) {
			return this._data.getFieldSchema(b).type
		},
		_onDataReady: function(g) {
			var h = g.get("type") === "Theme";
			if (h) {
				var j = g;
				g = this.addDataItem(j.get("id"), {
					type: this._getThemeSchemaTypeName()
				});
				var i = j.get("properties");
				for (var f in i) {
					g.set(f, i[f].value)
				}
			}
			this._setData(g);
			this._isReady = true
		},
		_getThemeSchemaTypeName: function() {
			return "FlatTheme"
		},
		_setData: function(b) {
			this._flattenData(b);
			if (this._data) {
				this._data.removeEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChanged)
			}
			this._data = b;
			this._data.addEvent(Constants.DataEvents.DATA_CHANGED, this._onDataChanged);
			this._indexAllPlaceholders();
			W.Css.updateAllThemeCss()
		},
		_flattenData: function(A) {
			this._flattenedDataItems = {};
			var B = A.getData();
			var x = A.getSchema();
			var v = {};
			var t, w, i;
			for (i in B) {
				if (typeOf(B[i]) == "array") {
					t = i;
					var k = B[i];
					var q = k.length;
					var y = x[i].defaultItems;
					if (y.length > q) {
						for (var z = q;
						z < y.length;
						z++) {
							k.push(y[z]);
							q++
						}
					}
					for (w = 0;
					w < q;
					w++) {
						v[t + "_" + w] = k[w];
						this._flattenedDataItems[t + "_" + w] = t
					}
				} else {
					v[i] = B[i]
				}
			}
			A.setData(v);
			var s = {};
			for (i in x) {
				if (x[i].type == "array") {
					t = i;
					var r = x[i].itemType;
					var u = x[i].defaultItems;
					for (w = 0;
					w < u.length;
					w++) {
						s[t + "_" + w] = {
							type: r,
							"default": u[w]
						};
						if (!this._flattenedDataItems[t + "_" + w]) {
							this._flattenedDataItems[t + "_" + w] = t
						}
					}
				} else {
					s[i] = x[i]
				}
			}
			A.setSchema(s)
		},
		_indexAllPlaceholders: function() {
			this._placeHoldersMap = {};
			var c = this._data.getSchema();
			for (var d in c) {
				this._updatePlaceholdersInProperty(d, this.getRawProperty(d))
			}
		},
		_updatePlaceholdersInProperty: function(h, k, n) {
			var m = this._getPlaceholders(k, true);
			var i = (n) ? this._getPlaceholders(n, true) : {};
			var l = Object.merge({}, i, m);
			for (var j in l) {
				this._placeHoldersMap[j] = this._placeHoldersMap[j] || {};
				if (m[j] && !i[j]) {
					this._placeHoldersMap[j][h] = h
				} else {
					if (!m[j]) {
						delete this._placeHoldersMap[j][h]
					}
				}
			}
		},
		_getPlaceholders: function(l, n) {
			var m = /\[([^}]+)\]/g;
			var p = /\{([^}]+)\}|\[([^}]+)\]/g;
			var o = (n) ? p : m;
			var j = {};
			var i = o.exec(l);
			while (i) {
				var k = i[1] || i[2];
				if (k) {
					j[k] = k
				}
				i = o.exec(l)
			}
			return j
		},
		clone: function() {
			var c = this.parent();
			this._copyData(c);
			var d = c.dataMap.THEME_DATA;
			c._setData(d);
			return c
		},
		isReady: function() {
			return this._isReady
		},
		getProperties: function() {
			var e = {};
			var f = this._data.getSchema();
			for (var d in f) {
				e[d] = {
					value: this.getRawProperty(d),
					type: this._data.getFieldSchema(d).type
				}
			}
			return e
		},
		getProperty: function(i, k, o) {
			var l = this._data.get(i);
			var m = typeOf(l) == "string" ? l : Object.clone(l);
			var j = this._data.getFieldSchema(i);
			if (!j) {
				LOG.reportError(wixErrors.SCHEMA_MISSING_KEY, "ThemeManager", "getProperty", [i, this._data.getData(), null]);
				return null
			}
			var p = this._data.getFieldSchema(i).type;
			if (!k && typeOf(m) == "string" && (m.indexOf("[") != -1)) {
				for (var n in this._data.getSchema()) {
					if (m.indexOf("[" + n + "]") != -1) {
						m = m.split("[" + n + "]").join(this.getProperty(n))
					}
				}
			}
			if (o) {
				return m
			}
			switch (p) {
			case "themeUrl":
				return W.Config.getServiceTopologyProperty("staticThemeUrl") + "/" + m + "/";
			case "color":
				return new W.Color(m);
			case "background":
				return new W.Background(m, this);
			case "font":
				return new W.Font(m, this);
			case "radius":
				return new W.BorderRadius(m)
			}
			return m
		},
		_onDataChanged: function(e, f) {
			if (this._isOperating) {
				return
			}
			this._isOperating = true;
			this._indexAllPlaceholders();
			if (typeof f == "string") {
				this._updateEffectedProps(f)
			} else {
				for (var d in f) {
					this._updateEffectedProps(d)
				}
			}
			this._isOperating = false
		},
		getRawProperty: function(b) {
			return this.getProperty(b, true, true)
		},
		clearOverrides: function() {
			this._data.reset()
		},
		getOverrides: function() {
			return this.getProperties()
		},
		getDataItem: function() {
			return this._data
		},
		setProperty: function(e, g) {
			var f = this._data.getFieldSchema(e);
			if (!f) {
				LOG.reportError(wixErrors.SCHEMA_MISSING_KEY, "ThemeManager", "setProperty", [e, this._data.getData(), null]);
				return
			}
			var h = f.type;
			if (h == "color") {
				if (g && g.getRgba) {
					g = g.getRgba()
				}
			}
			this._updatePlaceholdersInProperty(e, g, this.getRawProperty(e));
			this._data.set(e, g);
			this._updateEffectedProps(e)
		},
		getPropertiesAccordingToType: function(e) {
			var f = [];
			var g = this._data.getSchema();
			for (var h in g) {
				if (e == this._data.getFieldSchema(h).type) {
					f.push(h)
				}
			}
			return f
		},
		_onPropChange: function(g, h) {
			var i = [g];
			h = h || this.getProperty(g);
			this.fireEvent("propertyChange", {
				name: g,
				newVal: h,
				type: "propertyChange"
			});
			var j = this._placeHoldersMap[g];
			for (var f in j) {
				i.combine(this._onPropChange(f, this.getProperty(f)))
			}
			return i
		},
		_updateEffectedProps: function(d) {
			var f = this._onPropChange(d);
			var e = {};
			f.forEach(function(a) {
				e[a] = this._data.get(a)
			}.bind(this));
			this._data.fireDataChangeEvent(e)
		},
		getDirtyDataObjectsMap: function() {
			var h = this.parent();
			if (h && h.THEME_DATA) {
				h.THEME_DATA = this.createDataItem(Object.clone(h.THEME_DATA.getData()), this._getThemeSchemaTypeName());
				var g = h.THEME_DATA.getData();
				for (var f in g) {
					if (this._flattenedDataItems[f]) {
						var e = this._flattenedDataItems[f];
						if (!g[e]) {
							g[e] = []
						}
						g[e].push(g[f]);
						delete g[f]
					}
				}
			}
			return h
		}
	}
});
Constants.CSS = {
	COLORS: ["transparent", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
	SYSTEM_FONTS: {
		"sans-serif": [
			["Arial", "Helvetica"],
			["Arial Black", "Gadget"],
			["Impact", "Charcoal"],
			["Lucida Sans Unicode", "Lucida Grande"],
			["Tahoma", "Geneva"],
			["Verdana", "Geneva"]
		],
		serif: ["Georgia", ["Palatino Linotype", "Book Antiqua", "Palatino"],
			["Times New Roman", "Times"]
		],
		cursive: ["Comic Sans MS"],
		monospace: ["Courier New", ["Lucida Console", "Monaco"]]
	},
	CUSTOM_FONTS: {
		"sans-serif": ["Anton", "Basic", "Jockey One", "Jura", "Open Sans", "Overlock", "Play", "Signika", "Spinnaker", "Chelsea Market"],
		serif: ["Caudex", "EB Garamond", "Enriqueta", "Forum", "Noticia Text", "Fredericka the Great", "Kelly Slab", "Josefin Slab"],
		cursive: ["Lobster", "Niconne", "Marck Script", "Mr De Haviland", "Patrick Hand", "Sarina", "Corben"],
		monospace: []
	}
};
W.Classes.newClass({
	name: "mobile.core.managers.CssManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		Binds: ["_onThemePropertyChange"],
		Static: {
			GLOBAL_THEME_CSS_TYPES: ["font", "color"],
			FONT_SERVICE_URL: "http://fonts.googleapis.com/css?family=",
			THEME_STYLE_SHEET: null
		},
		initialize: function() {
			this._themeStyleSheet = this._generateThemeStylesSheet();
			this._configureSystemFonts();
			this._configureCustomFonts();
			W.Theme.addEvent("propertyChange", this._onThemePropertyChange)
		},
		_configureSystemFonts: function() {
			this._systemFontsCssDefinition = {};
			this._systemFontsNames = [];
			for (var h in Constants.CSS.SYSTEM_FONTS) {
				var i = Constants.CSS.SYSTEM_FONTS[h];
				for (var l = 0;
				l < i.length; ++l) {
					var j = i[l];
					var k = (typeOf(j) == "array") ? j[0] : j;
					this._systemFontsNames.push(k);
					var g = (typeOf(j) == "array") ? j.concat().reverse() : [j];
					g.push(h);
					this._addQuoteToArrayElementsIfContainSpaces(g);
					this._systemFontsCssDefinition[k] = g.join(",")
				}
			}
		},
		_configureCustomFonts: function() {
			this._customFontsCssDefinition = {};
			this._customFontsNames = [];
			for (var h in Constants.CSS.CUSTOM_FONTS) {
				var i = Constants.CSS.CUSTOM_FONTS[h];
				for (var l = 0;
				l < i.length; ++l) {
					var j = i[l];
					var k = (typeOf(j) == "array") ? j[0] : j;
					this._customFontsNames.push(k);
					var g = (typeOf(j) == "array") ? j.concat().reverse() : [j];
					g.push(h);
					this._addQuoteToArrayElementsIfContainSpaces(g);
					this._customFontsCssDefinition[k] = g.join(",")
				}
			}
		},
		_addQuoteToArrayElementsIfContainSpaces: function(c) {
			for (var d = 0;
			d < c.length; ++d) {
				if (c[d].indexOf(" ")) {
					c[d] = '"' + c[d] + '"'
				}
			}
		},
		_onThemePropertyChange: function(c) {
			var d = W.Theme.getPropertyType(c.name);
			if (this.GLOBAL_THEME_CSS_TYPES.contains(d)) {
				this._updateThemeGlobalCssByPropertyName(c.name, d)
			}
		},
		updateAllThemeCss: function() {
			for (var h = 0;
			h < this.GLOBAL_THEME_CSS_TYPES.length; ++h) {
				var g = this.GLOBAL_THEME_CSS_TYPES[h];
				var e = W.Theme.getPropertiesAccordingToType(g);
				for (var f = 0;
				f < e.length; ++f) {
					this._updateThemeGlobalCssByPropertyName(e[f], g)
				}
			}
		},
		_updateThemeGlobalCssByPropertyName: function(f, j) {
			var h = this.getThemeGlobalPropertyCssDefinition(f, j);
			this._themeStyleSheet.updateRule(h.selector, h.rules);
			if (j == "font") {
				var g = W.Theme.getProperty(f).getFontFamily();
				var i = this.getFontType(g);
				if (i == "custom") {
					this.loadFont(g)
				}
			}
		},
		getThemeGlobalPropertyCssDefinition: function(l, k, j) {
			k = k || W.Theme.getPropertyType(l);
			var g = W.Theme.getProperty(l);
			var h;
			var i = "";
			switch (k) {
			case "font":
				h = "." + l;
				if (!j) {
					i = g.getCssRule()
				} else {
					i = "font: " + g.getCssValue()
				}
				break;
			case "color":
				h = "." + l;
				i = "color:" + g.getHex(false);
				break
			}
			return {
				selector: h,
				rules: i
			}
		},
		_generateThemeStylesSheet: function() {
			if (!this.$class.THEME_STYLE_SHEET) {
				this.$class.THEME_STYLE_SHEET = W.Utils.createStyleSheet("WIX_THEME_STYLES")
			}
			this._themeStyleNodeId = this.$class.THEME_STYLE_SHEET.styleNode.get("id");
			return this.$class.THEME_STYLE_SHEET
		},
		getCssNodeId: function() {
			return this._themeStyleNodeId
		},
		getDefaultFont: function() {
			var b = Constants.CSS.SYSTEM_FONTS["sans-serif"][0];
			b = (typeOf(b) === "array") ? b[0] : b;
			return b
		},
		getFontFallbacksCss: function(b) {
			return this._systemFontsCssDefinition[b] || this._customFontsCssDefinition[b] || '"' + b + '"'
		},
		getFontList: function() {
			return [].concat(this._systemFontsNames, this._customFontsNames).sort()
		},
		getFontType: function(b) {
			if (this._systemFontsNames.indexOf(b) != -1) {
				return "system"
			}
			if (this._customFontsNames.indexOf(b) != -1) {
				return "custom"
			}
			return null
		},
		getUsedFontsUrl: function() {
			var g = W.Theme.getPropertiesAccordingToType("font");
			var e = {};
			for (var h = 0;
			h < g.length; ++h) {
				var f = W.Theme.getProperty(g[h]).getFontFamily();
				if (this.getFontType(f) == "custom") {
					e[f] = f
				}
			}
			return this.FONT_SERVICE_URL + this._getFontsQuery(e)
		},
		loadFont: function(h) {
			this._readyFonts = this._readyFonts || {};
			this._loadedFonts = this._loadedFonts || {};
			var f = (this._customFontsNames.indexOf(h) != -1);
			var e = (this._readyFonts[h]);
			var g = (this._loadedFonts[h]);
			if (!f || e || g) {
				return
			}
			this._loadedFonts[h] = h;
			if (!this._fontLoadCallLater) {
				this._fontLoadCallLater = W.Utils.callLater(this._loadFonts, undefined, this, 50)
			}
		},
		_loadFonts: function() {
			delete this._fontLoadCallLater;
			var d = this.FONT_SERVICE_URL + this._getFontsQuery(this._loadedFonts);
			for (var c in this._loadedFonts) {
				this._readyFonts[c] = c;
				delete this._loadedFonts[c]
			}
			this._addFontsLoaderCssTag(d)
		},
		_getFontsQuery: function(c) {
			fontQuery = "";
			for (var d in c) {
				fontQuery += d.split(" ").join("+");
				fontQuery += ":n,b,i,bi|"
			}
			return fontQuery
		},
		_addFontsLoaderCssTag: function(f) {
			var d = document.createElement("link");
			d.rel = "stylesheet";
			d.type = "text/css";
			d.href = f;
			var e = document.getElementsByTagName("link")[0];
			e.parentNode.insertBefore(d, e)
		},
		clone: function() {
			return this.parent()
		},
		isReady: function() {
			return true
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.ResourceManager",
	imports: ["mobile.core.managers.serverfacade.WixRESTClient"],
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		initialize: function() {
			this._restClient = new this.imports.WixRESTClient();
			this.bundles = {};
			this._runningRequests = {};
			this.local = W.Config.getLanguage();
			this._isReady = true;
			this._initializeExtra()
		},
		_initializeExtra: function() {},
		clone: function() {
			var b = this.parent();
			b.bundles = Object.clone(this.bundles);
			b.local = this.local;
			b._currentBundle = this._currentBundle;
			return b
		},
		isReady: function() {
			return (this._isReady === true)
		},
		setCurrentBundle: function(b) {
			this._currentBundle = b
		},
		get: function(h, g, e) {
			var f = this.bundles[h];
			if (!f) {
				LOG.reportError(wixErrors.RESOURCE_MANAGER_BUNDLE_NOT_FOUND, "mobile.editor.managers.ResourceManager", "get", [h, g]);
				return "bundle wasn't loaded yet: [ " + h + " ] when requesting [ " + g + " ]"
			}
			if (!f.hasOwnProperty(g)) {
				return e ? e : ("localized item not found: [ " + g + "] in bundle: [ " + h + " ] ")
			} else {
				return f[g]
			}
		},
		replacePlaceholders: function(d, f) {
			if (typeof f !== "string") {
				return ""
			}
			var e = this.bundles[d];
			if (!e) {
				LOG.reportError(wixErrors.RESOURCE_MANAGER_BUNDLE_NOT_FOUND, "mobile.editor.managers.ResourceManager", "replacePlaceholders", [d, f])
			}
			f = f.replace(/\[.+?\]/g, function(j, a, c) {
				var i = j.substring(1, j.length - 1);
				var b = e[i];
				return (b !== undefined) ? b : j
			});
			return f
		},
		exist: function(d, f) {
			var e = this.bundles[d];
			return (e && e.hasOwnProperty(f))
		},
		bundleExist: function(b) {
			return this.bundles[b]
		},
		getCur: function(c, d) {
			return this.get(this._currentBundle, c, d)
		},
		set: function(c, d) {
			this.bundles[c] = d
		},
		loadResourceBundle: function(e, f) {
			if (this.bundles[e]) {
				if (typeof(f) === "function") {
					f(this.bundles[e])
				}
				return
			}
			var d = false;
			if (!this._runningRequests[e]) {
				d = true;
				this._runningRequests[e] = {
					pendingCallbacks: []
				}
			}
			if (typeof(f) === "function") {
				this._runningRequests[e].pendingCallbacks.push(f)
			}
			if (d) {
				this._loadResourceForFirstTime(e)
			}
		},
		_loadResourceForFirstTime: function(d) {
			var e = W.Config.getResourcesStaticUrl();
			e += d + "/" + this.local + ".js";
			var f = this;
			this._restClient.jsonp(e, null, {
				onComplete: function(a) {
					f.set(d, a);
					f._runningRequests[d].pendingCallbacks.forEach(function(b) {
						b(a)
					});
					delete f._runningRequests[d]
				},
				onRequest: function(a) {
					f._runningRequests[d].mooCallback = a
				}
			})
		},
		loadResourceBundles: function(f, g) {
			var h = 0;
			for (var e = 0;
			e < f.length;
			e++) {
				this.loadResourceBundle(f[e], function() {
					h++;
					if (h == f.length) {
						g()
					}
				})
			}
		}
	}
});
W.Managers.ThemeDataManager = new WClass({
	className: "themeDataManager",
	Extends: W.Managers.DataManager
});
Constants.PropertyEvents = {
	PROPERTY_CHANGED: "propertyChanged"
};
W.Classes.newClass({
	name: "mobile.core.managers.data.ComponentDataManager",
	Class: {
		Extends: "mobile.core.managers.data.DataManager",
		initialize: function() {
			this._PropertiesItem = W.Classes.get("mobile.core.managers.data.PropertiesItem");
			this.parent()
		},
		addDataItem: function(g, h, e) {
			var f = this.createDataItem(h, e);
			f._data.id = g;
			this.dataMap[g] = f;
			this._runCallbacks(g, f);
			this.markDirtyObject(f);
			return f
		},
		createDataItem: function(f, h) {
			var e = f.type;
			var g = this.dataTypesSchemaMap[e];
			if (g) {
				return new this._PropertiesItem(g, f, this, h)
			} else {
				return new this._DataItemBase(f, this)
			}
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.ConfigurationManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		_getEditorModel: function() {
			return window.editorModel
		},
		getEditorModelProperty: function(d) {
			var c = this._getEditorModel();
			return c && c[d]
		},
		getRendererModelProperty: function(b) {
			return window.rendererModel && window.rendererModel[b]
		},
		getServiceTopologyProperty: function(b) {
			return window.serviceTopology && window.serviceTopology[b]
		},
		getHelpServerUrl: function() {
			var b = this.getServiceTopologyProperty("helpServer") || "http://help.wixpress.com/support/main/html5";
			if (window.wixEditorLangauge && window.wixEditorLangauge !== "en") {
				b = b.replace("www", window.wixEditorLangauge)
			}
			return b
		},
		setServiceTopologyProperty: function(c, d) {
			window.serviceTopology[c] = d
		},
		getUserPublicUrl: function() {
			return this.getEditorModelProperty("publicUrl")
		},
		getUserDomainListUrl: function() {
			var b = this.getServiceTopologyProperty("premiumServerUrl");
			return b + "/wix/api/domainConsole"
		},
		getSiteId: function() {
			return window.siteId
		},
		getMetaSiteId: function() {
			return this.getEditorModelProperty("metaSiteId") || this.getRendererModelProperty("metaSiteId")
		},
		siteNeverSavedBefore: function() {
			return this.getEditorModelProperty("firstSave")
		},
		setMetaSiteId: function(b) {
			window.editorModel.metaSiteId = b
		},
		userHasFacebookSite: function() {
			return this._userHasAppType(Constants.WEditManager.SITE_TYPE_FACEBOOK)
		},
		userHasMobileSite: function() {
			return this._userHasAppType(Constants.WEditManager.SITE_TYPE_MOBILE)
		},
		userHasWebSite: function() {
			return this._userHasAppType(Constants.WEditManager.SITE_TYPE_WEB)
		},
		_userHasAppType: function(f) {
			var d = this.getEditorModelProperty("serviceMappings");
			if (!d) {
				return false
			}
			for (var e in d) {
				if (d[e].applicationType == f) {
					return true
				}
			}
			return false
		},
		isPremiumUser: function() {
			var b = this.getEditorModelProperty("metaSiteData");
			if (!b || !b.premiumFeatures) {
				return false
			}
			return (b.premiumFeatures.length > 0)
		},
		getCreateMobileSiteLink: function() {
			var g = this.getServiceTopologyProperty("createMobileUrl");
			var f = this.getEditorModelProperty("metaSiteData").siteName;
			var h = this.getMetaSiteId();
			var e = g + f + "?flashSiteId=" + h;
			return e
		},
		getCreateFacebookSiteLink: function() {
			return this._getCreateWysiwygSiteLink(Constants.WEditManager.SITE_TYPE_FACEBOOK)
		},
		getCreateWebsiteLink: function() {
			return this._getCreateWysiwygSiteLink(Constants.WEditManager.SITE_TYPE_WEB)
		},
		_getCreateWysiwygSiteLink: function(e) {
			var f = (e == Constants.WEditManager.SITE_TYPE_WEB) ? this.getServiceTopologyProperty("createWebsiteUrl") : this.getServiceTopologyProperty("createFacebookUrl");
			var g = this.getMetaSiteId();
			var h = f + "?metasite=" + g;
			return h
		},
		isInDebugMode: function() {
			return window.debugMode !== "nodebug"
		},
		isFacebookSite: function() {
			var b = this.getApplicationType();
			return b && b.toLowerCase() === "htmlfacebook"
		},
		getDebugMode: function() {
			return window.debugMode
		},
		getApplicationType: function() {
			return window.rendererModel && window.rendererModel.applicationType || window.siteHeader && window.siteHeader.applicationType
		},
		getDocumentType: function() {
			return window.siteHeader && window.siteHeader.documentType
		},
		getMediaStaticUrl: function(d) {
			var c = this.getServiceTopologyProperty("staticMediaUrl") + "/";
			if (/[^.]+$/.exec(d)[0] == "ico") {
				c = c.replace("media", "ficons")
			}
			return c
		},
		getResourcesStaticUrl: function() {
			var b = this.getServiceTopologyProperty("resourcesRoot");
			return b || this.getServiceTopologyProperty("scriptsRoot") + "/resources/wysiwyg/bundles/"
		},
		getLanguage: function() {
			return "en-us"
		},
		isReady: function() {
			return true
		},
		clone: function() {
			return this.parent()
		},
		createPackage: function() {}
	}
});
Constants.ViewManager = {
	VIEW_MODE_SITE: "site",
	VIEW_MODE_EDITOR: "editor",
	VIEW_MODE_PREVIEW: "preview"
};
W.Classes.newClass({
	name: "mobile.core.managers.ViewManagerBase",
	Class: {
		Extends: Events,
		Binds: ["_onTransitionFinished", "_onEditModeChanged", "_onHashChange"],
		initialize: function() {
			this._isReady = true;
			this._isSiteReady = false;
			this._pages = null;
			this._pagesData = null;
			this._mainPageData = null;
			this._siteStructureData = null;
			this._currentPageId = null;
			this._isFullScreen = null;
			this._fullScreenCallbacks = [];
			this._requiredConfigParams = ["staticMediaUrl", "staticThemeUrl", "scriptsRoot", "emailServer", "htmlComponentEchoUrl"];
			this._scrollLock = false;
			this._isPageScrollToTopEnabled = true;
			this._stopAnimation = null;
			this._loadedExtJS = {};
			this._pendingExtJS = [];
			this._onSiteReady = this._onSiteReady.bind(this);
			this._loadNextPage = this._loadNextPage.bind(this);
			this._loadScript = this._loadScript.bind(this);
			this._onScriptLoaded = this._onScriptLoaded.bind(this);
			var b = W.Utils.getQueryParam("isEdited");
			if (b == "true") {
				this.setPreviewMode(true)
			}
			this.addEvent("pageTransitionEnded", this._onTransitionFinished)
		},
		setPreviewMode: function(b) {
			this._isPreview = b;
			if (b && document && document.body) {
				$(document.body).addClass("prevMode")
			}
		},
		setStopAnimation: function(b) {
			this._stopAnimation = b
		},
		getNewUniquePageId: function(d) {
			var c;
			do {
				c = W.Utils.getUniqueId(d + "Page")
			} while (this._pages[c] !== undefined);
			return c
		},
		isScrollLock: function() {
			return this._scrollLock
		},
		setLinkTipFunc: function(b) {
			this._linkTipFunc = b
		},
		getLinkTipFunc: function() {
			return this._linkTipFunc
		},
		getPreviewMode: function() {
			return !!this._isPreview
		},
		setSite: function(h, e, g) {
			if (!h) {
				LOG.reportError(wixErrors.VM_INVALID_SITE_NODE, this.className, "setSite", "")
			}
			if (!e) {
				LOG.reportError(wixErrors.VM_INVALID_SITE_DATA, this.className, "setSite", "")
			}
			this._siteNode = h;
			this._siteStructureData = e;
			this.indexPages("#SITE_PAGES");
			this._siteNode.addEvent(Constants.ComponentEvents.WIXIFIED, function() {
				e.addComponentWithInterest(this.getLogic())
			});
			if (!W.Editor) {
				this._wixifySiteLazily(h, g)
			} else {
				this._wixifyEntireSite(h)
			}
			var f = this._siteNode.getProperty("comp");
			if (f && f.contains("components.SiteStructure")) {
				this._siteNode.wixify()
			}
		},
		_getUrlSearchParameters: function() {
			return window.location.search
		},
		_wixifyEntireSite: function(e) {
			var f = e.getElements("[comp]");
			if (e.get("comp")) {
				f.push(e)
			}
			var d = new Async.Bulk(f, null, {
				timeout: 20000,
				completeEvent: Constants.ComponentEvents.READY,
				completeCallback: function() {
					f.removeClass("initHidden");
					this.updatePagesData();
					for (var a in this._pages) {
						this._pages[a].getLogic().setAsWixified()
					}
					this._onSiteReady()
				}.bind(this)
			});
			f.wixify()
		},
		_getAllComponentsButPageContents: function(c) {
			var d = c.getElements("#SITE_PAGES> div[comp]").combine([c.getElement("#SITE_HEADER")]).combine(c.getElements("#SITE_HEADER div[comp]")).combine(c.getElements("#SITE_FOOTER")).combine(c.getElements("#SITE_FOOTER div[comp]"));
			if (c.get("comp")) {
				d.push(c)
			}
			return d
		},
		_wixifySiteLazily: function(f, g) {
			var h = this._getAllComponentsButPageContents(f);
			var e = new Async.Bulk(h, null, {
				completeEvent: Constants.ComponentEvents.READY,
				completeCallback: function() {
					h.removeClass("initHidden");
					this.updatePagesData();
					var d = [];
					if (g === false) {
						for (var i in this._pages) {
							d.push(this._pages[i].getLogic())
						}
					} else {
						var a = this._getPageDataFromHash(W.Utils.hash.getHash());
						d.push(this._pages[a.get("id")].getLogic())
					}
					var b = new Async.Bulk(d, null, {
						completeEvent: "contentWixified",
						completeCallback: function() {
							this._onSiteReady()
						}.bind(this)
					});
					for (var c = 0;
					c < d.length; ++c) {
						d[c].wixifyContent()
					}
				}.bind(this)
			});
			h.wixify()
		},
		_onSiteReady: function() {
			this.setPreviewMode(this._isPreview);
			this._isReady = true;
			this._isSiteReady = true;
			window.scrollTo(0, 1);
			this._onHashChange({
				newHash: W.Utils.hash.getHash(),
				isFiredAfterChange: true,
				isIdChanged: true
			});
			W.Utils.hash.addEvent("change", this._onHashChange);
			this._loadNextPage();
			this._reportBIEvents();
			if (window.viewMode == "editor" && window.location.hash == "#save=1") {
				window.location.hash = "";
				W.Commands.executeCommand("WEditorCommands.SaveSuccessDialog")
			}
		},
		_reportBIEvents: function() {
			switch (window.viewMode) {
			case "preview":
				LOG.reportEvent(wixEvents.PREVIEW_READY);
				break;
			case "site":
				LOG.reportEvent(wixEvents.SITE_READY);
				break
			}
		},
		getViewMode: function() {
			return window.viewMode
		},
		_loadNextPage: function() {},
		setViewerConfig: function(b) {},
		createElement: function(d, c) {
			return new Element(d, c)
		},
		clone: function() {
			return new this.$class()
		},
		isReady: function() {
			return this._isReady
		},
		isSiteReady: function() {
			return this._isSiteReady
		},
		_onHashChange: function(f) {
			f = f || {};
			if (this.isSiteReady()) {
				var e = f.newHash;
				var d = f.isIdChanged;
				if (!W.Data.isDataAvailable("#" + e)) {
					this._changePageFromHash(e)
				} else {
					W.Data.getDataByQuery("#" + e, function(a) {
						this._setDataObjectFromHash(a, e, d)
					}.bind(this));
					if (f.isForSureAfterChange) {
						LOG.reportPageEvent(window.location.href)
					}
				}
			}
		},
		_setDataObjectFromHash: function(f, d, e) {
			if (e && f.getType && f.getType() === "Page" && d) {
				this._changePageFromHash(d)
			}
		},
		_changePageFromHash: function(e) {
			var f = this._getPageDataFromHash(e);
			if (f === null) {
				return
			}
			var d = f.get("id");
			if (d == this._currentPageId) {
				return
			}
			if (d) {
				this._pageTransition(d)
			}
		},
		_getPageDataFromHash: function(i) {
			i = i || W.Utils.hash.getHash();
			var h = this._mainPageData;
			for (var f in this._pagesData) {
				var j = this._pagesData[f];
				var g = j.getMeta("isHidden") && !this._isPreview;
				if (j.get("id") == i && !g) {
					h = j;
					break
				}
			}
			return h
		},
		_pageTransition: function(j) {
			var h = this.getCurrentPageNode();
			var i = this._siteNode.getElement("#" + j);
			if (i) {
				W.Utils.clearCallLater(this._setVisiblePageCallId);
				this._currentPageId = j;
				if (this._isFullScreen) {
					this.exitFullScreenMode()
				}
				if (h) {
					h.getLogic().collapse()
				} else {
					for (var f in this._pages) {
						var g = this._pages[f];
						if (g != i) {
							g.getLogic().collapse()
						}
					}
				}
				i.getLogic().uncollapse();
				this._setVisiblePageCallId = W.Utils.callLater(function() {
					i.getLogic().wixifyContent(function() {
						if (W.Editor) {
							W.Editor.setKeysEnabled(true)
						}
						this.fireEvent("pageTransitionEnded");
						W.Utils.callLater(function() {})
					}.bind(this))
				}.bind(this));
				if (W.Editor) {
					W.Editor.setKeysEnabled(false)
				}
				this.fireEvent("pageTransitionStarted")
			}
		},
		getScrollTop: function() {
			return document.body.scrollTop
		},
		getPagesData: function() {
			return this._pagesData
		},
		_scrollToTopOnPageChange: function() {
			if (this._isPageScrollToTopEnabled) {
				if (this._isPreview) {
					this._siteNode.setStyle("top", "0px");
					$(document.body).setStyle("background-position", "0px 0px")
				} else {
					$(document.body).scrollTo(0, 0)
				}
			}
		},
		goToPage: function(d) {
			if (this._scrollLock) {
				return
			}
			if (this._stopAnimation !== null) {
				this._stopAnimation.stop()
			}
			this._scrollToTopOnPageChange();
			var c = this._pagesData[d];
			if (!c) {
				return
			}
			if (this._currentPageId == d) {
				return
			}
			this._pageTransition(d)
		},
		_onTransitionFinished: function() {
			this._setUrlHashToPage(this._currentPageId)
		},
		_setUrlHashToPage: function(d) {
			var c = this._pagesData[d];
			if (c) {
				W.Utils.hash.setHash(d, c.get("pageUriSEO"))
			}
		},
		goToHomePage: function() {
			this.goToPage(this._mainPageData.get("id"))
		},
		isHomePage: function(b) {
			b = b || this._currentPageId;
			if (this._isSiteReady) {
				return (b == this._mainPageData.get("id"))
			}
			return true
		},
		getCurrentPageId: function() {
			return this._currentPageId
		},
		getCurrentPageNode: function() {
			var b = null;
			if (this._currentPageId && this._siteNode) {
				b = this._siteNode.getElement("#" + this._currentPageId)
			}
			return b
		},
		indexPages: function(i) {
			var r = this._siteNode.getElement(i);
			if (!r) {
				return W.Utils.callLater(this.indexPages, [i], this, 10)
			}
			var p = {};
			var q = [];
			r.getElements("[comp=mobile.core.components.Page]").each(function(b) {
				var c = b.get("id") || W.Utils.getUniqueId("page");
				p[c] = b;
				b.addClass("sitePage");
				var a = b.get("dataQuery");
				if (a != this._siteStructureData.get("mainPage")) {
					q.push(a)
				}
			}.bind(this));
			var o = this._siteStructureData.getData().pages;
			if (!o) {
				o = []
			}
			for (var n = 0;
			n < o.length; ++n) {
				var l = o[n];
				var m = q.indexOf(l);
				if (m != -1) {
					q.splice(m, 1);
					q.splice(n, 0, l)
				}
			}
			var k = W.Data.isDataChange();
			this._siteStructureData.set("pages", q);
			k && W.Data.flagDataChange();
			this._pages = p
		},
		loadExternalScript: function(g, e, f) {
			var h = this;
			if (g in this._loadedExtJS) {
				e();
				return "ALREADY_LOADED"
			} else {
				if (g in this._pendingExtJS) {
					this._pendingExtJS[g].push(e);
					return "PENDING_LOAD"
				} else {
					this._pendingExtJS[g] = [e];
					this._loadScript(g, f);
					return "FIRST_LOAD"
				}
			}
		},
		_loadScript: function(g, f) {
			var e = document.createElement("script");
			e.type = "text/javascript";
			e.async = false;
			if (e.readyState) {
				e.onreadystatechange = function() {
					if (e.readyState === "loaded" || e.readyState === "complete") {
						e.onreadystatechange = null;
						this._onScriptLoaded(g)
					}
				}.bind(this)
			} else {
				e.onload = function() {
					this._onScriptLoaded(g)
				}.bind(this)
			}
			e.src = g;
			var h = document.getElementsByTagName("script")[0];
			h.parentNode.insertBefore(e, h)
		},
		_onScriptLoaded: function(d) {
			this._loadedExtJS[d] = true;
			var f = this._pendingExtJS[d];
			for (var e = 0;
			e < f.length;
			e++) {
				f[e]()
			}
			delete this._pendingExtJS[d]
		},
		_getSiteViewMode: function() {
			var b = window.viewMode;
			if (b == "preview" && window.top === window) {
				return "site"
			}
			return b
		},
		isPublicMode: function() {
			return (this._getSiteViewMode() == "site")
		},
		updatePagesData: function() {
			this._pagesData = {};
			for (var c in this._pages) {
				var d = this._pages[c].getLogic().getDataItem();
				this._pagesData[d.get("id")] = d;
				if (this._siteStructureData.get("mainPage") == "#" + d.get("id")) {
					this._mainPageData = d
				}
			}
		},
		getPages: function() {
			return this._pages
		},
		getSiteNode: function() {
			return this._siteNode
		},
		_onEditModeChanged: function(b) {
			this._editorMode = b
		},
		getEditorMode: function() {
			return this._editorMode
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.LinkTypesManager",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		langFlag: false,
		_allTypes: {
			FACEBOOK: {
				target: "http://www.facebook.com/wix",
				text: "Facebook",
				linkType: ["EXTERNAL_LINKS", "NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			LINKEDIN: {
				target: "http://www.linkedin.com/wix",
				text: "LinkedIn",
				linkType: ["NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			TWITTER: {
				target: "http://www.twitter.com/wix",
				text: "Twitter",
				linkType: ["EXTERNAL_LINKS", "NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			CALL: {
				target: "212.000.0000",
				text: "Call Me",
				linkType: ["CONTACT", "EXTERNAL_LINKS", "NETWORKS"],
				protocol: "tel:",
				tip: "call"
			},
			SMS: {
				target: "212.000.0000",
				text: "Text Me",
				linkType: ["CONTACT", "EXTERNAL_LINKS", "NETWORKS"],
				protocol: "sms:",
				tip: "text"
			},
			EMAIL: {
				target: "feedback@wix.com",
				text: "Email",
				linkType: ["CONTACT", "EXTERNAL_LINKS", "NETWORKS"],
				protocol: "mailto:",
				tip: "send an email to"
			},
			MAP: {
				target: "wix offices new york",
				text: "Address",
				linkType: ["CONTACT", "EXTERNAL_LINKS", "NETWORKS"],
				protocol: "http://maps.google.com/maps?f=q&source=s_q&hl=en&q=",
				tip: "open map for address "
			},
			BLOGGER: {
				target: "http://www.blogger.com/wix",
				text: "Blogger",
				linkType: ["NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			YOUTUBE: {
				target: "http://www.youtube.com/wix",
				text: "Youtube",
				linkType: ["NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			FREE_LINK: {
				target: "http://www.wix.com",
				text: "Any link",
				linkType: ["CONTACT", "EXTERNAL_LINKS", "NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			FLICKR: {
				target: "http://www.flickr.com/wix",
				text: "Flickr",
				linkType: ["NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			SKYPE: {
				target: "http://www.skype.com/wix",
				text: "Skype",
				linkType: ["NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			MYSPACE: {
				target: "http://www.myspace.com/wix",
				text: "MySpace",
				linkType: ["NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			VIMEO: {
				target: "http://www.vimeo.com/wix",
				text: "Vimeo",
				linkType: ["NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			},
			DELICIOUS: {
				target: "http://www.delicious.com/wix",
				text: "Delicious",
				linkType: ["NETWORKS"],
				protocol: "http://",
				tip: "navigate to"
			}
		},
		getLinkTypesByMeta: function(h) {
			var i;
			if (this.langFlag === false) {
				for (i in this._allTypes) {
					this._allTypes[i].text = W.Resources.get("EDITOR_LANGUAGE", i + "_TITLE")
				}
				this.langFlag = true
			}
			var f = [];
			var g = {};
			var j = true;
			for (i in this._allTypes) {
				f = this._allTypes[i]["linkType"];
				if (f.indexOf(h) >= 0) {
					g[i] = this._allTypes[i];
					j = false
				}
			}
			if (j == true) {
				LOG.reportError(wixErrors.LT_LINK_UNKNOWN, "LinkTypesManager", "getLinkTypesByMeta", h + "")
			}
			return g
		},
		getNewLink: function(d) {
			if (!this._allTypes[d]) {
				LOG.reportError(wixErrors.LT_INVALID_LINK_TYPE, "LinkTypesManager", "getNewLink", d + "")
			}
			var c = Object.clone(this._allTypes[d]);
			c.metaData = {
				isPreset: true
			};
			c.linkType = d;
			c.type = "Link";
			delete c.tip;
			delete c.protocol;
			return c
		},
		getLinkIcon: function(b) {
			return b.toLowerCase() + ".png"
		},
		gotoLink: function(h) {
			if (W.Viewer.isScrollLock()) {
				return
			}
			var i = h.get("linkType");
			var m = h.get("target");
			if (!W.Viewer.getPreviewMode()) {
				var j = !this._skipForceFlash(m.toLowerCase()) && this._matchCurrentUrl(m.toLowerCase());
				if (j) {
					this.setForceFlashCookie()
				}
				var n = (m.toLowerCase().indexOf("https://") === 0);
				if (n) {
					m = m.replace("https://", "")
				} else {
					if (m.toLowerCase().indexOf("http://") === 0) {
						m = m.replace("http://", "")
					}
				}
				var k = this._allTypes[i]["protocol"];
				if (k == "http://" && n) {
					k = "https://"
				}
				var l = k + m;
				this._changeLocation(l)
			} else {
				if (W.Viewer.getLinkTipFunc()) {
					W.Viewer.getLinkTipFunc()(h, this)
				}
			}
		},
		_changeLocation: function(b) {
			document.location.href = b
		},
		showLinkTip: function(d) {
			var e = d.get("linkType");
			var f = this._allTypes[e]["tip"] + " " + d.get("target");
			W.Preview.showPreviewTip("Link will", f)
		},
		isReady: function() {
			return true
		},
		clone: function() {
			return this.parent()
		},
		stripUrl: function(f) {
			var g = f.replace(/(\w+:\/\/)*([\w\-_]+\.)*([\w\-_]+\.[\w\-_]+).*/, "$3");
			var i = {
				com: true,
				org: true,
				net: true,
				edu: true,
				gov: true,
				mil: true,
				info: true,
				co: true,
				ac: true
			};
			var j = g.split(".");
			var h = j[0];
			if (!i[h]) {
				return g
			}
			return f.replace(/(\w+:\/\/)*([\w\-_]+\.)*([\w\-_]+\.[\w\-_]+\.[\w\-_]+).*/, "$3")
		},
		setForceFlashCookie: function() {
			var e = new Date();
			e.setTime(e.getTime());
			var f = 20;
			var d = new Date(e.getTime() + (f * 1000 * 60));
			document.cookie = "forceFlashSite=true;path=" + window.location.pathname + ";domain=." + this.stripUrl(window.location.hostname) + ";expires=" + d.toGMTString()
		},
		_skipForceFlash: function(b) {
			return window.location.href.toLowerCase() == b
		},
		_matchCurrentUrl: function(b) {
			return this.stripUrl(window.location.href.toLowerCase()) == this.stripUrl(b)
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.HtmlScriptsLoader",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		_nonIndexedScriptFiles: [],
		_scriptFiles: [],
		_isReady: false,
		_loadProgress: 0,
		Binds: ["_getIndexJson", "_onIndexSuccess", "_onIndexError", "_onIndexFailure"],
		initialize: function() {
			this._scriptLoader = new W.ClassManager.ScriptLoader();
			this._scriptLoader.setBodyAsScriptsAnchor();
			if (!this._isInTestMode()) {
				this._start()
			} else {
				this._isReady = true
			}
		},
		isReady: function() {
			if (!this._isInDebugMode() && !this._isInTestMode()) {
				return this._loadProgress == this._scriptFiles.length
			} else {
				return this._isReady
			}
		},
		clone: function() {
			return this
		},
		notifyScriptLoad: function() {
			this._loadProgress++
		},
		_isInDebugMode: function() {
			return (window.debugMode !== "nodebug")
		},
		_start: function() {
			W.Managers.addEvent(W.Managers.DEPLOYMENT_COMPLETED_EVENT, function() {
				if (!this.isReady()) {
					if (this._isInDebugMode()) {
						this._getIndexJson()
					} else {
						this._loadMinifiedScripts()
					}
					this._isReady = true
				}
			}.bind(this))
		},
		_isInDebugMode: function() {
			return (W.Config.isInDebugMode())
		},
		_isInTestMode: function() {
			return (window.debugMode == "unit_test")
		},
		_getIndexJson: function() {
			var d = this._getScriptRoot() + "/index.json";
			var c = null;
			if (XMLHttpRequest) {
				c = new XMLHttpRequest();
				c.open("GET", d, true)
			} else {
				if (XDomainRequest) {
					c = new XDomainRequest();
					c.open("get", d);
					c.setRequestHeader = function(b, a) {}
				}
			}
			c.onabort = function(a) {
				this._onIndexFailure("request aborted")
			}.bind(this);
			c.ontimeout = function(a) {
				this._onIndexFailure("request timeout")
			}.bind(this);
			c.onerror = function(a) {
				this._onIndexFailure("request error")
			}.bind(this);
			c.onload = function() {
				var b = {};
				try {
					b = JSON.parse(c.responseText)
				} catch (a) {
					this._onIndexError(c)
				}
				this._onIndexSuccess(b)
			}.bind(this);
			c.send()
		},
		_onIndexSuccess: function(b) {
			this._loadIndexScriptSets(b.fileSets)
		},
		_onIndexError: function(b) {
			LOG.reportError(wixErrors.HTML_SCRIPTS_LOADER_INVALID_INDEX, this.className, "_getIndexJson", b)
		},
		_onIndexFailure: function(b) {
			LOG.reportError(wixErrors.HTML_SCRIPTS_LOADER_UNABLE_TO_LOAD_INDEX, this.className, "_getIndexJson", b.statusText);
			this._loadMinifiedScripts()
		},
		_loadMinifiedScripts: function() {
			this._scriptLoader.loadMissingScripts(this._getFullUrls(this._scriptFiles))
		},
		_loadIndexScriptSets: function(f) {
			for (var e = 0;
			e < this._scriptFiles.length;
			e++) {
				var g = this._scriptFiles[e];
				var h = f.filter(function(a) {
					return a.minifiedFile == g
				})[0];
				if (h) {
					this._loadScriptSet(h.minifiedFile, h.sourceFiles)
				} else {
					this._loadScriptSet(g)
				}
			}
		},
		_getScriptRoot: function(b) {
			return serviceTopology.scriptsRoot
		},
		_getFullUrls: function(f) {
			var e = [];
			for (var d = 0;
			d < f.length;
			d++) {
				e[d] = this._getScriptRoot(f[d]) + "/" + f[d]
			}
			
			return e
		},
		_loadScriptSet: function(c, d) {
			d = this._nonIndexedScriptFiles.contains(c) ? [c] : (d || [c]);
			this._scriptLoader.loadMissingScripts(this._getFullUrls(d))
		}
	}
});
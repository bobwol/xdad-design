var client_version = "1.192.0-SNAPSHOT";
if (client_version == "${artifact.baseVersion}") {
	client_version = "DBG"
}
if (window.debugMode && window.debugMode !== "nodebug") {
	document.title = "(;,;) " + client_version
}
var W = {
	Managers: {},
	BaseClasses: {}
};

function getCookieInfo(j) {
	var i = document.cookie.split(";");
	var g = j;
	for (var c = 0;
	c < i.length;
	c++) {
		var h = i[c];
		while (h.charAt(0) == " ") {
			h = h.substring(1, h.length)
		}
		if (h.indexOf(g) === 0) {
			h = h.substring(g.length, h.length);
			return h.replace("=", "")
		}
	}
	return ""
}
var creationSource = "http://m.wix.com";
if (window.siteHeader && window.siteHeader.creationSource) {
	switch (window.siteHeader.creationSource.toLocaleLowerCase()) {
	case "web":
		creationSource = "http://www.wix.com";
		break;
	case "standalone":
		creationSource = "http://mobile.wix.com";
		break
	}
}
var _userAnalyticsAccount = "";
if (window.googleAnalytics) {
	_userAnalyticsAccount = (window.googleAnalytics.length === 0) ? "" : window.googleAnalytics
}
var isAnalyticsEnabled = !(window.publicModel && window.publicModel.suppressTrackingCookies);
LOG = new WixLogger({
	errors: window.wixErrors,
	events: window.wixEvents,
	wixAnalytics: ["UA-2117194-45"],
	userAnalytics: ["UA-2117194-15", "UA-2117194-44", _userAnalyticsAccount],
	enableGoogleAnalytics: isAnalyticsEnabled,
	floggerServerURL: window.serviceTopology.biServerUrl || "http://flogger.wixpress.com/",
	version: ((window.viewMode != "editor") ? "VR" : "ER") + window.client_version,
	siteId: (window.siteId ? siteId : ""),
	userId: (window.siteHeader && window.siteHeader.userId) || "00000000-0000-0000-0000-000000000000",
	userType: getCookieInfo("userType"),
	userLanguage: getCookieInfo("wixLanguage") || "unknown",
	session: getCookieInfo("_wix_browser_sess") || "00000000-0000-0000-0000-000000000000",
	computerId: getCookieInfo("_wixCIDX") || "00000000-0000-0000-0000-000000000000",
	creationSource: creationSource,
	wixAppId: 3,
	sendPageTrackToWix: window.viewMode == "editor",
	sendPageTrackToUser: window.viewMode == "site",
	debugMode: (window.debugMode == "debug"),
	onEvent: function(d, c) {},
	onError: function(i, f, g, h) {
		if (window.debugMode == "debug" || window.debugMode == "unit_test") {
			if (window.console && window.console.error) {
				console.error(i.desc, i, f, g, h)
			}
		}
	}
});

function getPhysicalScreenDimensions() {
	var f = 1024,
		g = 768;
	try {
		f = screen.availWidth;
		g = screen.availHeight;
		if (typeof f == "undefined") {
			f = 1024
		}
		if (typeof g == "undefined") {
			g = 768
		}
	} catch (d) {
		f = 1024;
		g = 768
	}
	return {
		width: (f),
		height: (g)
	}
}
$(document).addEvent("domready", function() {
	LOG.reportEditorLoadingEvent("DOM LOADED", 160);
	switch (window.viewMode) {
	case "editor":
		var g = 0,
			i = 0;
		if (window && window.screen && window.screen.width) {
			g = window.screen.width
		}
		if (window && window.screen && window.screen.height) {
			i = window.screen.height
		}
		var h = {
			i1: g,
			c1: i
		};
		LOG.reportEvent(wixEvents.EDITOR_DOM_LOADED, h);
		var f = getPhysicalScreenDimensions();
		window.resizeTo(f.width, f.height);
		break;
	case "preview":
		LOG.reportEvent(wixEvents.PREVIEW_DOM_LOADED);
		break;
	case "site":
		LOG.reportEvent(wixEvents.SITE_DOM_LOADED);
		break
	}
});
W.ErrorLog = (function() {
	var g = [];
	try {
		var d = console.error;
		console.error = function(b) {
			g.push(b);
			try {
				d.apply(console, arguments)
			} catch (a) {}
		}
	} catch (f) {}
	return {
		getLog: function() {
			return g
		},
		clearLog: function() {
			g = []
		}
	}
})();
if (debugMode != "unit_test") {
	var topLevelDomains = {
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
	var subDomain = document.domain.split(".");
	if (subDomain.length > 2) {
		var beforeLastPart = subDomain[subDomain.length - 2];
		if (topLevelDomains[beforeLastPart]) {
			subDomain = subDomain[subDomain.length - 3] + "." + subDomain[subDomain.length - 2] + "." + subDomain[subDomain.length - 1]
		} else {
			subDomain = subDomain[subDomain.length - 2] + "." + subDomain[subDomain.length - 1]
		}
	}
	try {
		document.domain = subDomain
	} catch (e) {}
}(function() {
	if (typeof(Constants) != "undefined") {
		return
	}
	Constants = {
		add: function(d, g) {
			var f = this.splitNameAndNamespace(d);
			this.addConstant(f.namespace, f.name, g)
		},
		addConstant: function(g, i, h) {
			var f = this.getNamespace(g, true);
			if (f) {
				if (undefined === f[i]) {
					f[i] = h
				}
			} else {
				throw "ERROR CREATING CONSTANT  nameSpace=" + g + " name=" + i + " value=" + h
			}
		},
		getNamespace: function(i, l) {
			if (!i) {
				return false
			}
			var k = i.split(".");
			var p = this;
			for (var m = 0, j = k.length;
			m < j; ++m) {
				var n = k[m];
				if (!p[n]) {
					if (l) {
						var o = {};
						p[n] = o;
						p = o
					} else {
						return null
					}
				} else {
					p = p[n]
				}
			}
			return p
		},
		splitNameAndNamespace: function(h) {
			var i, g;
			var f = h.lastIndexOf(".");
			if (f > -1) {
				i = h.substr(0, f);
				g = h.substr(f + 1)
			} else {
				i = "";
				g = h
			}
			return {
				name: g,
				namespace: i
			}
		}
	}
})();
(function() {
	window.WClass = function(a, o) {
		var b = this;
		a = a || {};
		a.className = o || a.className;
		b.validateScope(this, a.className);
		if (!b.validateClassData(a)) {
			return b.InvalidWClass
		}
		a.$className = a.className;
		var p = b.clonePrototype(a.Extends);
		var l = {};
		for (var m in p) {
			l[m] = p[m]
		}
		b.implementTraits(a.Implements, l);
		for (m in a) {
			l[m] = a[m]
		}
		var c = l.Static;
		delete l.Static;
		if (!a.Extends) {
			if (a.hasOwnProperty("toString") && typeof a.toString == "function") {
				l.toString = a.toString
			} else {
				l.toString = this._$wclassToString
			}
			l.hasClassAncestor = this._hasClassAncestor
		}
		if (p.Implements instanceof Array) {
			l.Implements.combine(p.Implements)
		}
		l.Binds = b.aggregateBinds(l.Binds, p.Binds, l.Implements);
		l.$parentPrototype = p;
		l.parent = function() {
			var k;
			var i;
			var h = l.parent.caller || arguments.callee.caller || arguments.caller;
			if (!h) {
				throw new Error("no caller!")
			}
			do {
				k = k ? k.$parentPrototype : l;
				if (!k) {
					return
				}
				for (i in k) {
					if (k[i] === h) {
						break
					}
				}
			} while (k[i] !== h);
			if (!k || !k[i] || !k.$parentPrototype) {
				return
			}
			var j = b.realParent(k);
			while (k[i] === j[i]) {
				k = j;
				j = b.realParent(k)
			}
			k = b.realParent(k);
			if (!k || !k[i] || typeof k[i] != "function") {
				return
			}
			return k[i].apply(this, arguments)
		};
		var n = function() {
				b.validateScope(this);
				b.clonePrototypeObjects(this);
				b.bindMethods(l.Binds, this);
				if (l.initialize && typeof l.initialize == "function") {
					l.initialize.apply(this, arguments)
				}
				b.initializeTraits(l.Implements, this, arguments)
			};
		b.copyStatic(n, l, c, a.Extends);
		l.constructor = n;
		n.prototype = l;
		l.$class = n;
		l.$class.$originalClassName = l.$className;
		l.getOriginalClassName = function() {
			return l.$class.$originalClassName || l.$className
		};
		if (a.$extendsName) {
			l.$class.$extendsName = a.$extendsName;
			delete a.$extendsName
		} else {
			delete l.$class.$extendsName
		}
		return n
	};
	window.WClass.prototype = {
		constructor: window.WClass,
		realParent: function(b) {
			var a = b.$parentPrototype;
			while (a && a.$className && b.$class.$extendsName && (b.$class.$extendsName != a.$className)) {
				a = a.$parentPrototype
			}
			return a
		},
		validateScope: function(a) {
			if (a === window || !a) {
				LOG.reportError(wixErrors.WCLASS_CLASS_MUST_USE_NEW_OP, "WClass", "validateScope")()
			}
			for (key in a) {
				if (a.hasOwnProperty(key)) {
					LOG.reportError(wixErrors.WCLASS_CLASS_MUST_USE_NEW_OP, "WClass", "validateScope")()
				}
			}
		},
		clonePrototype: function(a) {
			if (typeof a != "function") {
				return {}
			}
			var c = {};
			var b = a.prototype || {};
			if (b === Function.prototype || b === Function) {
				return c
			}
			for (key in b) {
				if (b.hasOwnProperty(key) || key == "toString") {
					c[key] = b[key]
				}
			}
			return c
		},
		validateClassData: function(a) {
			var b;
			if (typeof a != "object") {
				return LOG.reportError(wixErrors.WCLASS_CLASS_DATA_INVALID, "WClass", "validateClassData", b)()
			}
			if (typeof a.className != "string" || a.className.length === 0) {
				return LOG.reportError(wixErrors.WCLASS_CLASS_EMPTY_STRING, "WClass", "validateClassData")()
			}
			for (b in a) {
				if (this.reservedWords.contains(b)) {
					return LOG.reportError(wixErrors.WCLASS_CLASS_RESERVED, "WClass", "validateClassData", b)()
				}
			}
			if (a.Implements && !(a.Implements instanceof Array)) {
				return LOG.reportError(wixErrors.WCLASS_CLASS_DATA_INVALID, "WClass", "validateClassData", "Implements is not an array")()
			}
			if (a.Binds && !(a.Binds instanceof Array)) {
				return LOG.reportError(wixErrors.WCLASS_CLASS_DATA_INVALID, "WClass", "validateClassData", "Binds is not an array")()
			}
			return true
		},
		reservedWordsForTraits: ["initialize", "parent", "Extends", "Implements", "Binds", "$parentPrototype", "$className"],
		reservedWords: ["parent", "$parentPrototype", "$className"],
		bindMethods: function(i, b) {
			var c, j, a;
			if (i instanceof Array) {
				for (c = 0, j = i.length;
				c < j;
				c++) {
					a = i[c];
					if (typeof b[a] == "function") {
						b[a] = b[a].bind(b)
					} else {
						LOG.reportError(wixErrors.WCLASS_INVALID_BIND, "WClass", "bindMethods", a)
					}
				}
			}
		},
		implementTraits: function(b, c) {
			var i, l, k, a;
			c.Implements = [];
			if (b instanceof Array) {
				for (i = 0, l = b.length;
				i < l;
				i++) {
					k = b[i];
					c.Implements.push(k);
					if (typeof k == "function") {
						k = k.prototype
					}
					for (a in k) {
						if (a && !this.reservedWordsForTraits.contains(a)) {
							c[a] = k[a]
						}
					}
				}
			}
		},
		initializeTraits: function(a, b, l) {
			var c, m, i;
			if (a instanceof Array) {
				for (c = 0, m = a.length;
				c < m;
				c++) {
					i = a[c];
					if (typeof i == "function") {
						i = i.prototype
					}
					var n = i.initialize;
					if (n && typeof n == "function") {
						n.apply(b, l)
					}
				}
			}
		},
		clonePrototypeObjects: function(a) {
			var b;
			for (b in a) {
				if (a[b] && typeof a[b] == "object") {
					a[b] = (a[b] instanceof Array) ? a[b].clone() : Object.clone(a[b])
				}
			}
		},
		copyStatic: function(b, c, a, i) {
			var j;
			if (typeof i == "function") {
				for (j in i) {
					if (i.hasOwnProperty(j)) {
						b[j] = i[j]
					}
				}
			}
			if (a) {
				for (j in a) {
					if (c[j]) {
						throw new Error("The property " + j + " conflicts with a static property")
					}
					b[j] = c[j] = a[j]
				}
			}
		},
		aggregateBinds: function(h, a, b) {
			var c = [];
			if (h instanceof Array) {
				c.combine(h)
			}
			if (a instanceof Array) {
				c.combine(a)
			}
			b && b.forEach(function(i) {
				if (i.Binds instanceof Array) {
					c.combine(i.Binds)
				} else {
					if (i.prototype && i.prototype.Binds instanceof Array) {
						c.combine(i.prototype.Binds)
					}
				}
			});
			return c
		},
		_findMethod: function(b, c) {
			while (b) {
				if (b.hasOwnProperty(c)) {
					var a = b[c];
					if (typeof(a) == "function") {
						return a
					}
				}
				if (b.Extends) {
					b = b.Extends.prototype
				} else {
					return null
				}
			}
			return null
		},
		_hasClassAncestor: function(a, b) {
			var j = this;
			do {
				var k = j.className;
				var l;
				if (b) {
					var c = new RegExp("\\.?" + a + "(\\.|$)");
					l = k && k.match(c)
				} else {
					l = (k == a)
				}
				if (l) {
					return true
				}
				j = j.Extends && j.Extends.prototype
			} while (j);
			return false
		},
		_$wclassToString: function() {
			return "[wclass " + (this.className || "") + "]"
		},
		InvalidWClass: function() {
			throw new Error("invalid WClass")
		}
	};
	var g = instanceOf;
	var f;
	var d = window;
	d.instanceOf = f = function(a, b) {
		if (b === d.WClass && a && typeof a == "function" && a.prototype && a.prototype.$className) {
			return true
		}
		if (a && a.$className && typeof b == "function" && b.prototype && b.prototype.$className) {
			return a.$className == b.prototype.$className || instanceOf(a.$parentPrototype, b)
		} else {
			d.instanceOf = g;
			var c = instanceOf(a, b);
			d.instanceOf = f;
			return c
		}
	}
}());
W.ClassManager = W.ClassManager || {};
W.ClassManager.ClassRepository = new WClass({
	className: "managers.classmanager.ClassRepository",
	Binds: ["loadMissingClasses"],
	initialize: function() {
		this._readyClasses = {};
		this._waitingForDependencies = {};
		this._waitingForClassReady = {};
		this._scriptLoadingQueue = [];
		this._scriptLoader = new W.ClassManager.ScriptLoader();
		this._loadingMissingClassesStarted = false;
		this._loadingMissingClassesTimer = null
	},
	getClass: function(b) {
		return this._readyClasses[b] || null
	},
	getClassWhenReady: function(d, c) {
		if (this.isClassReady(d)) {
			if (c) {
				c(this.getClass(d))
			}
			return this.getClass(d)
		}
		if (!this.isClassLoaded(d)) {
			this._addClassesToScriptLoadingQueue([d])
		}
		if (!this._waitingForClassReady[d]) {
			this._waitingForClassReady[d] = []
		}
		if (c) {
			this._waitingForClassReady[d].push(c)
		}
	},
	getClassStatus: function(b) {
		if (this.isClassReady(b)) {
			return "ready"
		}
		if (this.isClassLoaded(b)) {
			return "pending"
		}
		return "missing"
	},
	getClassStatusDetails: function(l, i) {
		if (!i) {
			i = 1
		}
		if (this.isClassReady(l)) {
			return "ready"
		}
		if (this.isClassLoaded(l)) {
			var g = "pending:\n";
			var j = this._waitingForDependencies[l].dependenciesArray;
			for (var h = 0;
			h < j.length;
			h++) {
				var k = this.getClassStatusDetails(j[h], i + 1);
				if (k != "ready") {
					g += this._addTabs(i) + "class :" + j[h] + ":" + k
				}
			}
			return g
		}
		return "missing"
	},
	_addTabs: function(g) {
		var d = "";
		for (var f = 0;
		f < g;
		f++) {
			d += "\t"
		}
		return d
	},
	registerClass: function(g) {
		var j = g.prototype.$className;
		this._readyClasses[j] = g;
		if (this._waitingForClassReady[j]) {
			for (var f = 0;
			f < this._waitingForClassReady[j].length;
			f++) {
				this._waitingForClassReady[j][f](g)
			}
			delete this._waitingForClassReady[j]
		}
		for (var h in this._waitingForDependencies) {
			var i = this._waitingForDependencies[h];
			if (this.areClassesReady(i.dependenciesArray)) {
				delete this._waitingForDependencies[h];
				i.callback(i.classData)
			}
		}
	},
	isClassReady: function(b) {
		return typeof this._readyClasses[b] !== "undefined"
	},
	deleteClass: function(b) {
		delete this._readyClasses[b]
	},
	areClassesReady: function(h) {
		var f, g;
		var i = true;
		for (f = 0, g = h.length;
		f < g;
		f++) {
			if (!this.isClassReady(h[f])) {
				i = false;
				break
			}
		}
		return i
	},
	registerDependentClass: function(f, g, d) {
		if (this.areClassesReady(f)) {
			g(d);
			return
		}
		this._waitingForDependencies[d.name] = {
			dependenciesArray: f,
			callback: g,
			classData: d
		};
		this._addClassesToScriptLoadingQueue(f)
	},
	loadMissingClasses: function() {
		var b = this._filterLoadedClassesFromList(this._scriptLoadingQueue);
		clearTimeout(this._loadingMissingClassesTimer);
		delete this._loadingMissingClassesTimer;
		this._loadingMissingClassesStarted = true;
		if (b.length > 0) {
			this._scriptLoader.loadMissingClasses(b)
		}
		this._scriptLoadingQueue = []
	},
	isClassLoaded: function(b) {
		return this.isClassReady(b) || this._waitingForDependencies[b]
	},
	isReady: function() {
		var b;
		for (b in this._waitingForDependencies) {
			return false
		}
		this._scriptLoadingQueue = this._filterLoadedClassesFromList(this._scriptLoadingQueue);
		if (this._scriptLoadingQueue.length) {
			return false
		}
		for (b in this._waitingForClassReady) {
			return false
		}
		return true
	},
	clone: function() {
		var b = new W.ClassManager.ClassRepository();
		b._readyClasses = Object.clone(this._readyClasses);
		if (this._loadingMissingClassesStarted) {
			b.loadMissingClasses()
		}
		return b
	},
	_addClassesToScriptLoadingQueue: function(c) {
		var d = this._filterLoadedClassesFromList(c);
		this._scriptLoadingQueue.combine(d);
		if (this._loadingMissingClassesStarted && !this._loadingMissingClassesTimer) {
			this._loadingMissingClassesTimer = setTimeout(this.loadMissingClasses, 10)
		}
	},
	_filterLoadedClassesFromList: function(h) {
		var f, g;
		var i = [];
		for (f = 0, g = h.length;
		f < g;
		f++) {
			if (!this.isClassLoaded(h[f])) {
				i.include(h[f])
			}
		}
		return i
	},
	override: function(c, d) {
		if (!c) {
			throw new Error("Invalid class name for override")
		}
		this._readyClasses[c] = d
	}
});

function merge(d) {
	var c = function() {
			return d
		};
	c.mergeFlag = true;
	return c
}
function clone() {
	return {
		cloneFlag: true
	}
}
W.ClassManager = W.ClassManager || {};
W.ClassManager.ClassParser = new WClass({
	className: "managers.classmanager.ClassParser",
	Binds: ["registerClass"],
	initialize: function(b) {
		this._repository = b;
		this._overrides = {}
	},
	override: function(d, g) {
		this._overrides[d] = this._overrides[d] || [];
		var f = this._overrides[d].length ? this._overrides[d].getLast() : d;
		this._overrides[d].push(g);
		return f
	},
	registerClass: function(i) {
		var h = this._getClassDataErrorCode(i);
		if (h) {
			LOG.reportError(wixErrors.CLASS_INVALID_PENDING_OBJECT, i && i.name || "Unknown class", "class data validation", h);
			return
		}
		var g = this._getItemDependencies(i);
		var f = this._repository.areClassesReady(g);
		if (f) {
			this._prepClassData(i);
			var j = new WClass(i.Class, i.name);
			if (i.Class.Extends) {
				this._overrideClassObjectFields(j.prototype.Extends.prototype, j.prototype)
			}
			this._repository.registerClass(j);
			if (i.onClassReady) {
				i.onClassReady(j)
			}
			return j
		} else {
			this._repository.registerDependentClass(g, this.registerClass, i)
		}
	},
	_overrideClassObjectFields: function(i, m) {
		for (var j in m) {
			if (m.hasOwnProperty(j)) {
				var n = m[j];
				var k;
				if (n instanceof Function && n.mergeFlag) {
					n = n();
					if (typeOf(n) == "object") {
						k = Object.clone(i[j]);
						for (var h in n) {
							if (n.hasOwnProperty(h)) {
								if (n[h] === undefined) {
									delete k[h]
								} else {
									k[h] = n[h]
								}
							}
						}
					} else {
						if (typeOf(n) == "array") {
							k = i[j].clone();
							k.combine(n)
						}
					}
					m[j] = k
				} else {
					if (n && n.cloneFlag) {
						var l = i[j];
						if (typeOf(l) == "object") {
							k = Object.clone(i[j])
						} else {
							if (typeOf(l) == "array") {
								k = i[j].clone()
							} else {
								if (typeOf(l) == "string") {
									k = i[j]
								}
							}
						}
						m[j] = k
					}
				}
			}
		}
	},
	_getItemDependencies: function(c) {
		var d = [];
		if (c.Class && c.Class.Extends) {
			d.combine(this._extractStringsOnlyArray(c.Class.Extends))
		}
		if (c.imports) {
			d.combine(this._extractStringsOnlyArray(c.imports))
		}
		if (c.traits) {
			d.combine(this._extractStringsOnlyArray(c.traits))
		}
		d = this._replaceDependenciesWithOverrides(c.name, d);
		return d
	},
	_replaceDependenciesWithOverrides: function(d, c) {
		if (Object.keys(this._overrides).length) {
			Array.each(c, function(a, b) {
				if (this._overrides[a]) {
					var g = this._overrides[a].length - 1;
					var h = this._overrides[a].indexOf(d);
					if (h >= 0) {
						g = h ? h - 1 : 0
					}
					if (this._overrides[a][g] != d) {
						c[b] = this._overrides[a][g]
					}
				}
			}.bind(this))
		}
		return c
	},
	_extractStringsOnlyArray: function(b) {
		if (typeOf(b) == "string") {
			return [b]
		}
		if (typeOf(b) == "array") {
			return b.filter(this._isString)
		}
		return []
	},
	_isString: function(b) {
		return typeOf(b) == "string"
	},
	_prepClassData: function(b) {
		b = this._prepClassExtends(b);
		b = this._prepClassTraits(b);
		b = this._prepClassImports(b);
		b = this._prepClassInstanceOf(b);
		b.Class.injects = function() {
			return W.Managers.getManagers()
		};
		return b
	},
	_prepClassExtends: function(b) {
		if (b.Class.Extends && (typeOf(b.Class.Extends) == "string")) {
			b.Class.Extends = this._repository.getClass(b.Class.Extends)
		}
		return b
	},
	_prepClassTraits: function(g) {
		if (g.traits) {
			g.Class.Implements = [];
			for (var d = 0;
			d < g.traits.length;
			d++) {
				var f = g.traits[d];
				g.Class.Implements.push(this._repository.getClass(f))
			}
		}
		return g
	},
	_prepClassImports: function(j) {
		var k;
		var m = j.Class.Extends;
		var l = m && m.prototype && m.prototype.imports;
		l ? k = Object.clone(m.prototype.imports) : k = {};
		if (j.imports) {
			for (var i = 0;
			i < j.imports.length;
			i++) {
				var n = j.imports[i];
				var h = n.split(".").getLast();
				k[h] ? k[n] = this._repository.getClass(n) : k[h] = this._repository.getClass(n)
			}
			j.Class.imports = k
		}
		return j
	},
	_prepClassInstanceOf: function(b) {
		b.Class._instanceOf = b.Class.Extends && b.Class.Extends.prototype._instanceOf || [];
		b.Class._instanceOf.push(name);
		return b
	},
	_getClassDataErrorCode: function(b) {
		if (!b || typeOf(b.Class) !== "object") {
			return "No class data was found"
		}
		if (!b.name || !instanceOf(b.name, String)) {
			return "No class name"
		}
		if (!this._isValidClassName(b.name)) {
			return "Invalid class name: " + b.name
		}
		if (b.Extends && !(typeOf(b.Extends) == "string")) {
			return "Extends must be a string"
		}
		if (b.imports && !this._isStringArray(b.imports)) {
			return "Invalid imports array"
		}
		if (b.traits && !this._isStringArray(b.traits)) {
			return "Invalid traits array"
		}
		return false
	},
	_isValidClassName: function(f) {
		var h = f.split(".");
		var g = h.length - 1;
		for (var i = 0;
		i < g;
		i++) {
			if (h[i].length === 0) {
				return false
			}
			if (!h[i].test(/^[a-z][a-z0-9_]*$/)) {
				return false
			}
		}
		if (!h[g].test(/^[A-Z][A-Za-z0-9_]*$/)) {
			return false
		}
		return true
	},
	_isStringArray: function(b) {
		if (typeOf(b) != "array") {
			return false
		}
		return b.every(function(a) {
			return (typeOf(a) == "string")
		})
	}
});
W.ClassManager = W.ClassManager || {};
W.ClassManager.ScriptLoader = new WClass({
	className: "managers.classmanager.ScriptLoader",
	initialize: function() {
		this._scriptDirectory = "javascript";
		this._scriptBaseRoot = window.serviceTopology.scriptsRoot + "/" + this._scriptDirectory + "/";
		this._scriptRootByPackage = {};
		if (window.serviceTopology && window.serviceTopology.scriptsLocationMap) {
			Object.each(window.serviceTopology.scriptsLocationMap, function(c, d) {
				this._scriptRootByPackage[d] = c + "/" + this._scriptDirectory + "/"
			}.bind(this))
		}
		this._staticSkinBaseRoot = window.serviceTopology.staticSkinUrl + "/" + this._scriptDirectory + "/";
		this._loadStartDelay = 10;
		this._clearLoadContext();
		this._newScriptsAnchor = document.head
	},
	loadMissingClasses: function(d) {
		if (!d.length) {
			return
		}
		var c = this._convertClassNamesToUrls(d);
		this._ensureSingleScriptLoadingInterval(c)
	},
	getScriptRoot: function() {
		return this._scriptBaseRoot
	},
	loadMissingScripts: function(b) {
		
		this._ensureSingleScriptLoadingInterval(b)
	},
	setBodyAsScriptsAnchor: function() {
		this._newScriptsAnchor = document.body
	},
	_clearLoadContext: function() {
		this._loadContext = {
			id: null,
			urls: []
		}
	},
	_ensureSingleScriptLoadingInterval: function(b) {
		this._loadContext.urls.combine(b);
		
		if (this._loadContext.id) {
			W.Utils.clearCallLater(this._loadContext.id)
		}
		this._loadContext.id = W.Utils.callLater(this._loadMissingScripts, null, this, this._loadStartDelay)
	},
	_convertClassNamesToUrls: function(d) {
		var c = [];
		d.forEach(function(b) {
			var a = b.replace(/\./g, "/");
			if (b.test(/^nopkg|^test|^experiments/) || !a) {
				c.push("")
			} else {
				a = a + ".js";
				if (a.indexOf("wysiwyg/") === 0 && a.indexOf("/skins/") > 0) {
					a = this._staticSkinBaseRoot + a
				} else {
					var h = a.match("^[^/]*");
					var g = this._scriptRootByPackage[h] ? this._scriptRootByPackage[h] : this._scriptBaseRoot;
					a = g + a
				}
				c.push(a)
			}
		}.bind(this));
		return c
	},
	_loadMissingScripts: function() {
	
		var b = this._getNonLoadedScriptsFromSet(this._loadContext.urls);
		b.forEach(function(a) {
			this._loadScript(a)
		}, this);
		this._clearLoadContext()
	},
	_getNonLoadedScriptsFromSet: function(j) {
		var i = document.scripts || Array.from(document.getElementsByTagName("script"));
		var l = {};
		for (var k = 0;
		k < i.length;
		k++) {
			var n = i[k].src;
			n = this._convertToInnerScriptUrl(n);
			l[n.toLowerCase()] = 1
		}
		var m = [];
		var h = 0;
		j.forEach(function(a) {
			if (!(this._convertToInnerScriptUrl(a).toLowerCase() in l)) {
				m.push(a)
			}
		}.bind(this));
		return m
	},
	_convertToInnerScriptUrl: function(f) {
		var g = this._scriptDirectory + "/([^?]+)";
		var d = f.match(g);
		return d ? d[1] : f
	},
	_loadScript: function(d) {
		
		var g = "";
		g = W.Utils.getAntiCacheSuffix();
		var f = new Element("script", {
			src: d + g,
			type: "text/javascript"
		});
		console.log(f)
		return f.inject(this._newScriptsAnchor, "bottom")
	}
});
W.ClassManager.ClassManager = new WClass({
	className: "ClassManager",
	initialize: function() {
		this._classRepo = new W.ClassManager.ClassRepository();
		this._classParser = new W.ClassManager.ClassParser(this._classRepo)
	},
	get: function(c, d) {
		return this._classRepo.getClassWhenReady(c, d)
	},
	override: function(c, d) {
		this._classRepo.override(c, d)
	},
	overrideDependency: function(c, d) {
		return this._classParser.override(c, d)
	},
	getClassStatus: function(b) {
		return this._classRepo.getClassStatus(b)
	},
	getClassStatusDetails: function(b) {
		return this._classRepo.getClassStatusDetails(b)
	},
	newClass: function(b) {
		return this._classParser.registerClass(Object.clone(b))
	},
	newTrait: function(b) {
		b.Class = b.trait;
		delete b.trait;
		this.newClass(b)
	},
	newClasses: function(b) {
		Object.forEach(b, this.newClass.bind(this))
	},
	setDynamicScriptLoading: function() {
		this._classRepo.loadMissingClasses()
	},
	_getClassDataErrorCode: function(b) {
		this._classParser._getClassDataErrorCode(b)
	},
	removeClass: function(b) {
		this._classRepo.deleteClass(b)
	},
	isReady: function() {
		return this._classRepo.isReady()
	},
	clone: function() {
		var b = new W.ClassManager.ClassManager();
		b._classRepo = this._classRepo.clone();
		b._classParser = new W.ClassManager.ClassParser(b._classRepo);
		return b
	}
});
W.Classes = new(W.ClassManager.ClassManager)();
var Events = new WClass({
	className: "Events",
	addEvent: function(c, d) {
		c = this._removeOn(c);
		this.$events = this.$events || {};
		this.$events[c] = (this.$events[c] || []).include(d);
		return this
	},
	addEvents: function(d) {
		for (var c in d) {
			this.addEvent(c, d[c])
		}
		return this
	},
	fireEvent: function(h, f, g) {
		if (this.$events) {
			h = this._removeOn(h);
			var i = this.$events[h];
			if (!i) {
				return this
			}
			f = Array.from(f);
			i.each(function(a) {
				if (!a) {
					return
				}
				if (g) {
					a.delay(g, this, f)
				} else {
					a.apply(this, f)
				}
			}, this)
		}
		return this
	},
	removeEvent: function(h, i) {
		if (this.$events) {
			h = this._removeOn(h);
			var f = this.$events[h];
			if (f) {
				if (i) {
					var g = f.indexOf(i);
					if (g != -1) {
						delete f[g]
					}
				} else {
					delete this.$events[h]
				}
			}
		}
		return this
	},
	removeEvents: function(i) {
		var h;
		if (typeOf(i) == "object") {
			for (h in i) {
				this.removeEvent(h, i[h])
			}
			return this
		}
		if (i) {
			i = this._removeOn(i)
		}
		for (h in this.$events) {
			if (i && i != h) {
				continue
			}
			var f = this.$events[h];
			for (var g = f.length;
			g--;) {
				this.removeEvent(h, f[g])
			}
		}
		return this
	},
	_removeOn: function(b) {
		return b.replace(/^on([A-Z])/, function(a, d) {
			return d.toLowerCase()
		})
	},
	removeAllEvents: function() {
		this.$events = {}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.BaseManager",
	Class: {
		isReady: function() {
			throw ("Manager did not implemented isReady method")
		},
		clone: function() {
			return new this.$class()
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.ExperimentsManager",
	Class: {
		initialize: function(b) {
			this._registeredExperiments = b ? Object.clone(b) : {};
			this._markedExperiments = {};
			this._deployedItems = {};
			this._deployedExperiments = {};
			this._deploymentProgress = 0;
			this._uniqueIdentifier = 0;
			this._deploymentSize = 0;
			this._deploymentOrder = [];
			this._cleanServerList()
		},
		Static: {
			NEW_EXPER_ITEM: "New",
			DELETED_EXPER_ITEM: "Deleted",
			REFACTORED_EXPER_ITEM: "Refactored"
		},
		_cleanServerList: function() {
			if (this._isInEditor()) {
				var d = {};
				var f = /^App~\w{1,}~\w{4}-\w{4}-\w{4}-\w{4}/;
				for (var g in editorModel.runningExperiments) {
					if (f.test(g)) {
						d[g] = editorModel.runningExperiments[g];
						delete editorModel.runningExperiments[g]
					}
				}
				editorModel.runningApps = d
			}
		},
		notifyManagersDeploymentStart: function() {
			this._markDevExperiment();
			this._deployBasicsExperiments(this._markedExperiments)
		},
		notifyManagersDeploymentDone: function() {
			this._countDeploymentSize();
			this._validateExperiments(this._markedExperiments);
			this._deployHighLevelExperiments(this._markedExperiments)
		},
		markExperimentsForDeployment: function(b) {
			this._markedExperiments = Object.merge(this._markedExperiments, b)
		},
		isDeployed: function(d) {
			var f = false;
			for (var g in d) {
				if (!this._deployedExperiments.hasOwnProperty(g) || this._deployedExperiments[g] !== d[g]) {
					f = false;
					break
				} else {
					f = true
				}
			}
			return f
		},
		_isInDevMode: function() {
			return (window.debugMode !== "nodebug" && window.debugMode !== "unit_test")
		},
		_isInEditor: function() {
			return (window.editorModel !== undefined)
		},
		_markDevExperiment: function() {
			if (this._isInDevMode() && this._isInEditor()) {
				this.markExperimentsForDeployment({
					Dev: "New"
				})
			}
		},
		isMarked: function(d) {
			for (var c in d) {
				if (this._markedExperiments.hasOwnProperty(c)) {
					if (this._markedExperiments[c] == d[c]) {
						return true
					}
				}
			}
			return false
		},
		setDeploymentOrder: function(b) {
			this._deploymentOrder = b
		},
		registerNewExperimentClass: function(d, f, g) {
			this._registerNewExperimentClassItem(d, f, "new_classes", g)
		},
		registerNewExperimentTrait: function(g, d, f) {
			this._registerNewExperimentClassItem(g, d, "new_traits", f)
		},
		registerNewExperimentSkin: function(g, f, d) {
			this._registerNewExperimentClassItem(g, f, "new_skins", d)
		},
		registerNewExperimentComponent: function(g, f, d) {
			this._registerNewExperimentClassItem(g, f, "new_components", d)
		},
		registerNewExperimentDataItem: function(i, j, f, g) {
			var h = this._getExperimentGroup(i, j, "new_data");
			h[f] = g
		},
		registerNewExperimentDataTypeSchema: function(j, f, g, i) {
			var h = this._getExperimentGroup(j, f, "new_dataTypeSchema");
			h[g] = i
		},
		registerNewExperimentManager: function(i, f, j, g) {
			var h = this._getExperimentGroup(i, f, "new_managers");
			h[j] = g
		},
		registerExperimentConstant: function(f, g, h, i) {
			this._registerExperimentClassItem(f, g, "constants", i, h)
		},
		registerExperimentTrait: function(j, k, h, g) {
			var i = this._getExperimentGroup(j, k, "traits");
			var l = g || h.trait.Extends;
			i[l] = h
		},
		registerExperimentManager: function(i, f, g, h) {
			this._registerExperimentClassItem(i, f, "managers", g, h)
		},
		registerExperimentClass: function(i, f, h, g) {
			this._registerExperimentClassItem(i, f, "classes", h, g)
		},
		registerExperimentSkin: function(i, g, f, h) {
			this._registerExperimentClassItem(i, g, "skins", f, h)
		},
		registerExperimentComponent: function(h, f, i, g) {
			this._registerExperimentClassItem(h, f, "components", i, g)
		},
		registerExperimentDataItem: function(i, j, f, g) {
			var h = this._getExperimentGroup(i, j, "data");
			h[f] = g
		},
		registerNewExperimentDataItemProps: function(l, g, h, i, k) {
			var j = this._getExperimentGroup(l, g, "data_prop");
			j[h + "_" + i] = k
		},
		registerNewExperimentSchemaProps: function(j, f, g, i) {
			var h = this._getExperimentGroup(j, f, "schema_prop");
			h[g] = i
		},
		registerNewExperimentCompSchemaProps: function(j, f, g, i) {
			var h = this._getExperimentGroup(j, f, "comp_schema_prop");
			h[g] = i
		},
		getDeployedExperiments: function() {
			return this._deployedItems
		},
		_recordDeployment: function(d, c) {
			this._deployedItems[d] = this._deployedItems[d] || [];
			this._deployedItems[d].push(c);
			this._deploymentProgress++
		},
		_makeNewDataProps: function(f, j) {
			var i = j.lastIndexOf("_");
			var h = j.slice(i + 1);
			var g = j.slice(0, i);
			W.Data.addDataProps(g, h, f);
			this._recordDeployment(j, this.NEW_EXPER_ITEM)
		},
		_makeNewSchemaProps: function(d, c) {
			W.Data.addSchemaProps(c, d);
			this._recordDeployment(c, this.NEW_EXPER_ITEM)
		},
		_makeNewCompSchemaProps: function(d, c) {
			W.ComponentData.addSchemaProps(c, d);
			this._recordDeployment(c, this.NEW_EXPER_ITEM)
		},
		_makeNewClass: function(b) {
			W.Classes.newClass(b);
			this._recordDeployment(b.name, this.NEW_EXPER_ITEM)
		},
		_makeNewTrait: function(b) {
			W.Classes.newTrait(b);
			this._recordDeployment(b.name, this.NEW_EXPER_ITEM)
		},
		_makeNewSkin: function(b) {
			W.Skins.newSkin(b);
			this._recordDeployment(b.name, this.NEW_EXPER_ITEM)
		},
		_makeNewComponent: function(b) {
			W.Components.newComponent(b);
			this._recordDeployment(b.name, this.NEW_EXPER_ITEM)
		},
		_makeNewData: function(c, d) {
			W.Data.addDataItem(d, c);
			this._recordDeployment(d, this.NEW_EXPER_ITEM)
		},
		_makeNewManager: function(d, c) {
			W.Classes.newClass(d);
			W.Managers.list.combine([{
				Class: d.name,
				target: c
			}]);
			this._recordDeployment(d.name, this.NEW_EXPER_ITEM)
		},
		_makeNewDataTypeSchema: function(d, c) {
			W.Data.registerDataTypeSchema(c, d);
			this._recordDeployment(c, this.NEW_EXPER_ITEM)
		},
		_deployBasicsExperiments: function(b) {
			this._deployExperiments(b, this._overrideBasicItems)
		},
		_getOrderedExperiment: function(d) {
			for (var f = 0;
			f < this._deploymentOrder.length;
			f++) {
				var g = this._deploymentOrder[f];
				if (g.id === d) {
					return g
				}
			}
			return null
		},
		_isExperimentOrdered: function(b) {
			return (this._deploymentOrder.some(function(g, a, f) {
				return (g.id === b)
			}))
		},
		_validateExperimentConflicts: function(b) {
			return (b.conflicts.every(function(f, a) {
				var g = this._markedExperiments.hasOwnProperty(f);
				if (g) {
					this._reportInvalidExperiment(b.id, wixErrors.EXPERIMENT_IN_CONFLICT, "in conflict with: " + f)
				}
				return !g
			}.bind(this)))
		},
		_validateExperimentDependencies: function(b) {
			return (b.dependencies.every(function(g, a) {
				var f = this._markedExperiments.hasOwnProperty(g);
				if (!f) {
					this._reportInvalidExperiment(b.id, wixErrors.EXPERIMENT_MISSING_DEPENDENCY, "dependency: " + g + " is missing")
				}
				return f
			}.bind(this)))
		},
		_reportInvalidExperiment: function(i, f, h) {
			var g = "Experiment: " + i + " " + h;
			if (this._isInDevMode()) {
				alert(g)
			} else {
				LOG.reportError(f, "ExperimentsManager", g)
			}
		},
		_validateSingleExperiment: function(g, d) {
			var f;
			if (!g || !d || !(f = this._getOrderedExperiment(g))) {
				this._reportInvalidExperiment(g, wixErrors.EXPERIMENT_UNKNOWN, "was not added to experiments-order.js");
				return false
			}
			if (this._registeredExperiments[g] && this._registeredExperiments[g][d]) {
				return (this._validateExperimentConflicts(f) && this._validateExperimentDependencies(f))
			}
			return true
		},
		_validateExperiments: function(d) {
			var g, f;
			for (g in this._markedExperiments) {
				f = this._markedExperiments[g];
				this._validateSingleExperiment(g, f)
			}
		},
		_deployHighLevelExperiments: function(b) {
			this._deployExperiments(b, this._overrideHighLevelItems)
		},
		_deployExperiments: function(l, j) {
			var k, g, i;
			for (var h = 0;
			h < this._deploymentOrder.length;
			h++) {
				k = this._deploymentOrder[h].id;
				if (l[k]) {
					g = l[k];
					i = this._registeredExperiments[k] && this._registeredExperiments[k][g];
					if (i) {
						j.call(this, i);
						this._deployedExperiments[k] = g
					}
				}
			}
		},
		_overrideBasicItems: function(b) {
			this._overrideItems(b.constants, this._overrideConstants);
			this._overrideItems(b.traits, this._overrideTrait);
			this._overrideItems(b.new_traits, this._makeNewTrait);
			this._overrideItems(b.classes, this._overrideClass);
			this._overrideItems(b.new_classes, this._makeNewClass);
			this._overrideItems(b.managers, this._overrideClass);
			this._overrideItems(b.new_managers, this._makeNewManager)
		},
		_overrideHighLevelItems: function(b) {
			this._overrideItems(b.skins, this._overrideSkin);
			this._overrideItems(b.components, this._overrideComponent);
			this._overrideItems(b.data, this._overrideData);
			this._overrideItems(b.data_prop, this._makeNewDataProps);
			this._overrideItems(b.schema_prop, this._makeNewSchemaProps);
			this._overrideItems(b.comp_schema_prop, this._makeNewCompSchemaProps);
			this._overrideItems(b.new_dataTypeSchema, this._makeNewDataTypeSchema);
			this._overrideItems(b.new_data, this._makeNewData);
			this._overrideItems(b.new_skins, this._makeNewSkin);
			this._overrideItems(b.new_components, this._makeNewComponent)
		},
		_countDeploymentSize: function() {
			var g = this._markedExperiments;
			this._deploymentSize = 0;
			for (var l in g) {
				var h = g[l];
				var i = this._registeredExperiments[l] && this._registeredExperiments[l][h];
				if (i) {
					for (var j in i) {
						var k = Object.keys(i[j]).length;
						this._deploymentSize += k
					}
				}
			}
		},
		_overrideConstants: function(c, d) {
			W.Classes.get(d, function(a) {
				Object.merge(Constants, c);
				this._recordDeployment(d + "_" + c, this.NEW_EXPER_ITEM)
			}.bind(this))
		},
		_overrideItems: function(g, d) {
			if (g && d) {
				for (itemName in g) {
					var f = g[itemName];
					if (typeof f === "function") {
						f = f()
					}
					d.call(this, f, itemName)
				}
			}
		},
		_overrideClass: function(c, d) {
			W.Classes.overrideDependency(d, c.name);
			W.Classes.get(d, function(a) {
				c.onClassReady = function(b) {
					b.$originalClassName = d;
					W.Classes.override(d, b);
					this._recordDeployment(d, b.prototype.$className)
				}.bind(this);
				if (c.Class.Extends === d && a.prototype.Extends) {
					c.Class.$extendsName = a.prototype.Extends.prototype.$className
				}
				W.Classes.newClass(c)
			}.bind(this))
		},
		_overrideTrait: function(c, d) {
			W.Classes.overrideDependency(d, c.name);
			W.Classes.get(d, function(a) {
				c.onClassReady = function(b) {
					b.$originalClassName = d;
					W.Classes.override(d, b);
					this._recordDeployment(d, b.prototype.$className)
				}.bind(this);
				if (c.trait.Extends === d && a.prototype.Extends) {
					c.Class.$extendsName = a.prototype.Extends.prototype.$className
				}
				W.Classes.newTrait(c)
			}.bind(this))
		},
		_overrideSkin: function(c, d) {
			W.Classes.overrideDependency(d, c.name);
			W.Classes.get(d, function(a) {
				W.Classes.get(c.name, function(b) {
					W.Classes.override(d, b)
				}.bind(this));
				c.onSkinReady = function(b) {
					W.Skins.override(d, b);
					this._recordDeployment(d, b.prototype.$className)
				}.bind(this);
				if (c.Class.Extends === d && a.prototype.Extends) {
					c.Class.$extendsName = a.prototype.Extends.prototype.$className
				}
				W.Skins.newSkin(c)
			}.bind(this))
		},
		_overrideComponent: function(f, g) {
			var d = W.Classes.overrideDependency(g, f.name);
			W.Components.getComponent(d, function(a) {
				W.Classes.get(f.name, function(b) {
					b.$originalClassName = g;
					W.Classes.override(g, b);
					W.Components.override(g, b);
					this._recordDeployment(g, b.prototype.$className)
				}.bind(this));
				if (f.Class.Extends === g && a.prototype.Extends) {
					f.Class.$extendsName = a.prototype.Extends.prototype.$className
				}
				W.Components.newComponent(f)
			}.bind(this))
		},
		_overrideData: function(c, d) {
			W.Data.getDataByQuery("#" + d, function(a) {
				this._makeNewData(c, d)
			}.bind(this))
		},
		_registerExperimentClassItem: function(k, m, l, i, h) {
			var j = this._getExperimentGroup(k, m, l);
			var n = h || i.Class.Extends;
			j[n] = i
		},
		_registerNewExperimentClassItem: function(i, f, j, g) {
			var h = this._getExperimentGroup(i, f, j);
			h[g.name || this._getUniqueIdentifier()] = g
		},
		_getUniqueIdentifier: function() {
			return ("id_" + this._uniqueIdentifier++)
		},
		_getExperimentGroup: function(g, f, d) {
			this._registeredExperiments[g] = this._registeredExperiments[g] || {};
			this._registeredExperiments[g][f] = this._registeredExperiments[g][f] || {};
			this._registeredExperiments[g][f][d] = this._registeredExperiments[g][f][d] || {};
			return this._registeredExperiments[g][f][d]
		},
		markExperimentFromURL: function() {
			var i = window.location.search.slice(1);
			var k = i.split("&");
			if (k) {
				var l = k.filter(function(a, b) {
					return (a.indexOf("experiment") == 0)
				});
				for (var g = 0;
				g < l.length;
				g++) {
					var j = l[g].split("=")[1];
					var h = {};
					h[j.split(":")[0]] = j.split(":")[1];
					this.markExperimentsForDeployment(h)
				}
			}
		},
		isReady: function() {
			return (this._deploymentProgress == this._deploymentSize)
		}
	}
});
W.Classes.get("mobile.core.managers.ExperimentsManager", function(b) {
	W.Experiments = new b()
});
W.Classes.newClass({
	name: "mobile.core.managers.deployment.Managers",
	Class: {
		Extends: Events,
		Binds: ["deploySingleManager"],
		Static: {
			DEPLOYMENT_COMPLETED_EVENT: "deploymentCompleted"
		},
		initialize: function() {
			this.addEvent(this.DEPLOYMENT_COMPLETED_EVENT, function() {});
			this._deploymentProgress = 0;
			this._syncMode = false
		},
		list: [{
			Class: "mobile.core.utils.Utils",
			target: "Utils"
		}, {
			Class: "mobile.core.utils.InputBindings",
			target: "InputBindings"
		}, {
			Class: "mobile.core.managers.ClassManager",
			target: "Classes"
		}, {
			Class: "mobile.core.utils.Commands",
			target: "Commands"
		}, {
			Class: "mobile.core.managers.data.DataManager",
			target: "Data"
		}, {
			Class: "mobile.core.managers.data.ComponentDataManager",
			target: "ComponentData"
		}, {
			Class: "mobile.core.managers.ThemeManager",
			target: "Theme"
		}, {
			Class: "mobile.core.managers.CssManager",
			target: "Css"
		}, {
			Class: "mobile.core.managers.ComponentManager",
			target: "Components"
		}, {
			Class: "mobile.core.managers.SkinManager",
			target: "Skins"
		}, {
			Class: "mobile.core.managers.ConfigurationManager",
			target: "Config"
		}, {
			Class: "mobile.core.managers.ResourceManager",
			target: "Resources"
		}, {
			Class: "mobile.core.managers.LinkTypesManager",
			target: "LinkTypes"
		}, {
			Class: "mobile.core.managers.ViewManager",
			target: "Viewer"
		}, {
			Class: "mobile.core.managers.HtmlScriptsLoader",
			target: "HtmlScriptsLoader"
		}],
		deploy: function() {
			
			this._preDeploy();
			LOG.reportEditorLoadingEvent("DEPLOY MANAGERS START", 120);
			
			this.list.each(this.deploySingleManager);
			
			this._injectsList = null;
			LOG.reportEditorLoadingEvent("DEPLOY MANAGERS END", 130)
		},
		deploySync: function() {
			this._preDeploy();
			LOG.reportEditorLoadingEvent("DEPLOY MANAGERS START", 120);
			this.list.each(this.deploySingleManagerSync);
			this._injectsList = null;
			LOG.reportEditorLoadingEvent("DEPLOY MANAGERS END", 130);
			W.Experiments.notifyManagersDeploymentDone();
			this.fireEvent(this.DEPLOYMENT_COMPLETED_EVENT);
			this._syncMode = true
		},
		_preDeploy: function() {
			W.Experiments.notifyManagersDeploymentStart();
			this._deploymentSize = this.list.length - 1
		},
		_postDeploy: function() {
			++this._deploymentProgress;
			if (this.isReady()) {
				W.Experiments.notifyManagersDeploymentDone();
				this.fireEvent(this.DEPLOYMENT_COMPLETED_EVENT)
			}
		},
		isReady: function() {
			if (this._syncMode) {
				return true
			} else {
				return (this._deploymentProgress >= this._deploymentSize)
			}
		},
		deploySingleManager: function(c, d) {
			
			if (!instanceOf(c.target, String)) {
				LOG.reportError(wixErrors.MANAGERS_INVALID_NAME, this.className, "deploySingleManager", null);
				throw new Error(wixErrors.MANAGERS_INVALID_NAME.desc)
			}
			if (c.Class != "mobile.core.managers.ClassManager") {
				W.Classes.get(c.Class, function(a) {
					if (!instanceOf(a, Function) && !instanceOf(a, Class)) {
						LOG.reportError(wixErrors.MANAGERS_INVALID_CLASS, this.className, "deploySingleManager", c.target);
						throw new Error(wixErrors.MANAGERS_INVALID_CLASS.desc)
					}
					W[c.target] = new a();
					this._postDeploy()
				}.bind(this))
			}
		},
		deploySingleManagerSync: function(d, f) {
			if (!instanceOf(d.target, String)) {
				LOG.reportError(wixErrors.MANAGERS_INVALID_NAME, this.className, "deploySingleManager", null);
				throw new Error(wixErrors.MANAGERS_INVALID_NAME.desc)
			}
			if (d.Class != "mobile.core.managers.ClassManager") {
				var g = W.Classes.get(d.Class);
				if (!instanceOf(g, Function) && !instanceOf(g, Class)) {
					LOG.reportError(wixErrors.MANAGERS_INVALID_CLASS, this.className, "deploySingleManager", d.target);
					throw new Error(wixErrors.MANAGERS_INVALID_CLASS.desc)
				}
				W[d.target] = new g()
			}
		},
		takeSnapshot: function() {
			if (!this.isReady()) {
				return false
			}
			var h = this.getManagers();
			var f = {};
			if (Object.some(h, function(a) {
				if (!instanceOf(a.isReady, Function)) {
					LOG.reportError(wixErrors.MANAGERS_INVALID, a.className, "takeSnapshot", "");
					throw new Error(wixErrors.MANAGERS_INVALID.desc)
				}
				return !a.isReady()
			})) {
				return false
			}
			var g = {};
			this.list.forEach(function(a) {
				var b = a.target;
				var c = W[b];
				g[b] = c;
				W[b] = f[b] = c.clone()
			});
			for (var i in g) {
				W[i] = g[i]
			}
			this._snapshot = f;
			return true
		},
		_$notReadyList: function() {
			var d = this.getManagers();
			var f = true;
			for (var g in d) {
				if (!d[g].isReady()) {
					W.Utils.debugTrace(g + " is not ready");
					f = false
				}
			}
			if (f) {
				return "all managers are ready :)"
			}
		},
		deploySnapshot: function() {
			if (this._snapshot === undefined) {
				return false
			}
			Object.forEach(this._snapshot, function(c, d) {
				W[d] = c.clone()
			});
			this._injectsList = null;
			return true
		},
		hasSnapShot: function() {
			return this._snapshot !== undefined
		},
		getManagers: function() {
			var b = this._injectsList;
			if (!b) {
				b = {};
				this.list.forEach(function(a) {
					b[a.target] = W[a.target]
				});
				this._injectsList = b
			}
			return b
		},
		override: function(b) {
			this.list.forEach(function(d) {
				var a = b.filter(function(c) {
					return c.target == d.target
				});
				if (a.length > 0) {
					d.Class = a[a.length - 1].Class
				}
			})
		}
	}
});
W.Classes.get("mobile.core.managers.deployment.Managers", function(b) {
	W.Managers = new b()
});
Array.implement({
	moveItem: function(f, d) {
		var g = this[f];
		if (d < 0) {
			d = 0
		}
		if (d > this.length - 1) {
			d = this.length - 1
		}
		this.splice(f, 1);
		this.splice(d, 0, g)
	},
	getIndexByField: function(h, i) {
		for (var f = 0, g = this.length;
		f < g;
		f++) {
			if (this[f][h] == i) {
				return f
			}
		}
		return -1
	},
	getByField: function(g, d) {
		var f = this.getIndexByField(g, d);
		return f >= 0 ? this[f] : undefined
	},
	indexOfByPredicate: function(d) {
		for (var c = 0;
		c < this.length;
		c++) {
			if (d(this[c])) {
				return c
			}
		}
		return -1
	},
	intersect: function(c, d) {
		return this.filter(function(a) {
			return c.some(function(b) {
				return d ? d(a, b) : a === b
			})
		})
	},
	isIntersecting: function(c, d) {
		return this.some(function(a) {
			return c.some(function(b) {
				return d ? d(a, b) : a === b
			})
		})
	},
	first: function(g) {
		var d;
		for (var f = 0; !d && f < this.length;
		f++) {
			if (g(this[f])) {
				d = this[f]
			}
		}
		return d
	}
});
if (!Array.isArray) {
	Array.implement({
		isArray: function(b) {
			return Object.prototype.toString.call(b) === "[object Array]"
		}
	})
}
var Async = new WClass({
	className: "Async",
	initialize: function() {}
});
Async.Bulk = new WClass({
	className: "Async.Bulk",
	Implements: [Options, Events],
	Binds: ["run"],
	options: {
		completeEvent: "complete",
		errorEvent: "error",
		completeCallback: null,
		errorCallback: null,
		parallel: true,
		specialTargets: [{
			target: null,
			method: null,
			completeEvent: null,
			errorEvent: null
		}],
		executeDelay: false,
		keepAlive: false,
		stopOnErrors: true,
		timeout: 0
	},
	_method: null,
	_pending: [],
	_running: false,
	_error: [],
	_complete: [],
	_done: [],
	initialize: function(j, h, i) {
		if (!j || j.length === undefined) {
			LOG.reportError(wixErrors.BULK_INVALID_TARGET, "Async.Bulk", "initialize", j)();
			return this
		}
		this.setOptions(i);
		this._targets = j;
		this._method = h;
		var f = this;
		var g = window;
		if (this.options.timeout > 0) {
			this._timeoutInterval = g.setTimeout(this._bulkOperationTimeout.bind(this), this.options.timeout)
		}
		this._onTargetComplete = function() {
			this.removeEvent(f._getTargetDetails(this).completeEvent, f._onTargetComplete);
			f._pending.erase(this);
			f._complete.push(this);
			f._done.push(this);
			f._checkProgress()
		};
		this._onTargetFailed = function() {
			this.removeEvent(f._getTargetDetails(this).errorEvent, f._onTargetFailed);
			f._pending.erase(this);
			f._error.push(this);
			f._done.push(this);
			f._checkProgress()
		};
		if (!this.options.executeDelay) {
			this.run()
		} else {
			if (instanceOf(this.options.executeDelay, Number) && this.options.executeDelay > 0) {
				g.setTimeout(this.run, this.options.executeDelay)
			}
		}
	},
	_bulkOperationTimeout: function() {
		LOG.reportError(wixErrors.BULK_TIMEOUT, "Async.Bulk", "_bulkOperationTimeout", String(this.options.timeout) + " ms | Pending Operations:" + this._pending)()
	},
	run: function() {
		if (this._targets.length !== undefined && this._targets.length !== null && this._targets.length === 0) {
			this._clearInterval();
			this._handleBulkComplete()
		}
		if (this.options.parallel) {
			this._targets.each(function(c, d) {
				this._addToQue(c, d)
			}, this);
			this._targets.each(this._runMethodOnTarget, this)
		}
	},
	_clearInterval: function() {
		if (this._timeoutInterval) {
			clearInterval(this._timeoutInterval);
			delete this._timeoutInterval
		}
	},
	_runMethodOnTarget: function(b) {
		if (instanceOf(this._method, Function)) {
			this._method.call(b)
		}
		if (instanceOf(this._method, String)) {
			if (instanceOf(b[this._method], Function)) {
				b[this._method].call(b)
			} else {
				LOG.reportError(wixErrors.BULK_NO_METHOD, "Async.Bulk", "_runMethodOnTarget", b)()
			}
		}
	},
	stop: function(b) {},
	destroy: function() {
		if (this._targets) {
			this._targets.each(function(b) {
				b.removeEvent(this._getTargetDetails(this).completeEvent, this._onTargetComplete);
				b.removeEvent(this._getTargetDetails(this).errorEvent, this._onTargetFailed)
			}, this)
		}
		this._targets = null
	},
	progress: function() {
		return {
			complete: this._complete.slice(),
			error: this._error.slice(),
			total: this._targets.slice()
		}
	},
	_addToQue: function(g, f) {
		var d = this._getTargetDetails(g);
		this._pending[f] = g;
		g.addEvent(d.completeEvent, this._onTargetComplete);
		g.addEvent(d.errorEvent, this._onTargetFailed)
	},
	_onTargetComplete: undefined,
	_onTargetFailed: undefined,
	_getTargetDetails: function(h) {
		var f;
		var g;
		var i = {
			method: this._method,
			completeEvent: this.options.completeEvent,
			errorEvent: this.options.errorEvent
		};
		for (f = 0, g = this.options.specialTargets.length;
		f < g;
		f++) {
			if (this.options.specialTargets[f].target === h) {
				return this.options.specialTargets[f].target.implement(i)
			}
		}
		return i
	},
	_checkProgress: function() {
		if (this._pending.length > 0) {
			if (!this.options.parallel) {}
		} else {
			if (this.options.stopOnErrors && this._error.length > 0) {
				this._handleBulkError()
			} else {
				this._handleBulkComplete()
			}
			this._clearInterval();
			if (!this.options.keepAlive) {
				this.destroy()
			}
		}
	},
	_handleBulkError: function(b) {
		if (b) {
			this.fireEvent("error", [this._complete, this._error]);
			if (instanceOf(this.options.errorCallback, Function)) {
				this.options.errorCallback(this._complete, this._error)
			}
		} else {
			window.setTimeout(this._handleBulkError.bind(this, true), 1)
		}
	},
	_handleBulkComplete: function(b) {
		if (b) {
			this.fireEvent("complete", [this._complete, this._error]);
			if (instanceOf(this.options.completeCallback, Function)) {
				this.options.completeCallback(this._complete, this._error)
			}
		} else {
			window.setTimeout(this._handleBulkComplete.bind(this, true), 1)
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.managers.Hash",
	Class: {
		Extends: Events,
		intervalId: 0,
		initialize: function() {
			this._storedExtData = "";
			if ("onhashchange" in window && !Browser.ie8) {
				window.onhashchange = function() {
					this._onHashChange()
				}.bind(this)
			} else {
				this._storedObjectId = window.location.hash;
				clearInterval(this.intervalId);
				this.intervalId = window.setInterval(function() {
					this._onHashChange()
				}.bind(this), 100)
			}
		},
		_onHashChange: function() {
			var i = this.getHashParts();
			if (this._storedObjectId != i.id || this._storedExtData != i.extData) {
				var h = this._storedObjectId != i.id;
				var g = i.extData && (this._storedExtData != i.extData);
				this._storedObjectId = i.id;
				this._storedExtData = i.extData;
				var f = false;
				if (this._ignoreHashExtData) {
					if (this._ignoreHashExtData == i.extData) {
						delete this._ignoreHashExtData;
						f = true
					}
				}
				this.fireEvent("change", {
					newHash: i.id,
					isForSureAfterChange: true,
					extData: i.extData,
					isIdChanged: h,
					isExtDataChanged: g,
					silent: f
				})
			}
		},
		getHash: function() {
			var d = window.location.hash;
			d = unescape(d);
			var c = this.getHashParts(d);
			return c.id
		},
		getHashParts: function(q) {
			q = q || window.location.hash;
			var p = "|",
				o = "/",
				s = "/",
				v = q,
				m = "",
				r = "";
			if ((q.length > 1) && q.substr(0, 2) == "#!") {
				v = q.substr(2)
			} else {
				if (q.charAt(0) == "#") {
					v = q.substr(1)
				}
			}
			var t = v.indexOf(o),
				l = v.indexOf(p),
				n = o;
			if ((l != -1) && (l < t) || (l > -1) && (t == -1)) {
				n = p
			}
			var u = v.indexOf(n);
			if (u > -1) {
				m = v.substr(0, u);
				v = v.substr(u + 1)
			}
			u = v.indexOf(s);
			if (u > -1) {
				r = v.substr(u + 1);
				v = v.substr(0, u)
			}
			return {
				id: v ? v : "",
				title: m ? m : "",
				extData: r ? r : ""
			}
		},
		getHashPartsString: function(h, k, i) {
			var l = "|";
			var j = "/";
			var g = h;
			if (k) {
				k = k.trim();
				k = k.replace(j, "_");
				k = k.replace(l, "_");
				g = k.trim() + j + h
			}
			if (i) {
				g += j + i
			}
			return g
		},
		setHash: function(i, k, j, m) {
			var n = this.getHashPartsString(i, k, j);
			var l = this._storedObjectId !== i;
			var h = j && (this._storedExtData != j);
			if (l || h) {
				if (m) {
					this._ignoreHashExtData = j
				}
				this.fireEvent("change", {
					newHash: i,
					isForSureAfterChange: false,
					extData: j,
					isExtDataChanged: h,
					isIdChanged: l,
					silent: (m == true)
				});
				W.Utils.callLater(function() {
					var a = window.location.hash;
					if (a !== "#!" + n) {
						window.location.hash = "!" + n
					}
				}.bind(this))
			}
		},
		setHashExtData: function(d) {
			var c = this.getHashParts();
			this.setHash(c.id, c.title, d, true)
		}
	}
});
W.Queue = function() {
	this.map = {}
};
W.Queue.prototype = {
	add: function(d, c) {
		this.map[d] = this.map[d] || [];
		this.map[d].push(c)
	},
	addUnique: function(f, h) {
		this.map[f] = this.map[f] || [];
		var i = true;
		for (var g = 0;
		g < this.map[f].length;
		g++) {
			if (this.map[f][g] === h) {
				i = false;
				break
			}
		}
		if (i) {
			this.map[f].push(h)
		}
	},
	remove: function(d, c) {
		this.map[d] && this.map[d].erase(c)
	},
	removeKey: function(b) {
		delete this.map[b]
	},
	removeAll: function() {
		this.map = {}
	},
	getQueue: function(b) {
		return this.map[b] || []
	},
	getQueueKeys: function() {
		return Object.keys(this.map)
	},
	hasQueue: function() {
		return Object.some(this.map, function() {
			return true
		})
	},
	popQueue: function(c) {
		var d = this.getQueue(c);
		this.removeKey(c);
		return d
	}
};
Element.implement({
	cleanup: function() {
		var b = $(this.parentNode);
		if (b) {
			b.removeEvents(Constants.DisplayEvents.ADDED_TO_DOM)
		}
	},
	insertInto: function(i, h, j) {
		if (!i) {
			LOG.reportError(wixErrors.CM_NULL_PARENT, "Element", "insertInto");
			return this
		}
		if (!h && this.getParent() === i) {
			return this
		}
		var f = $(i);
		f.grab(this, h);
		if ("before" == h || "after" == h) {
			i = i.parentNode;
			if (null === i) {
				LOG.reportError(wixErrors.CM_NULL_PARENT, "Element", "insertInto");
				return this
			}
		}
		var g = Constants.DisplayEvents.ADDED_TO_DOM;
		if (this.getLogic && this.getLogic().getIsDisplayed()) {
			g = Constants.DisplayEvents.MOVED_IN_DOM
		}
		j = j || g;
		if (this.isNodeDisplayed()) {
			this.fireEventRecursively(Constants.DisplayEvents.ADDED_TO_DOM, j)
		}
		return this
	},
	fireEventRecursively: function(j, g, h) {
		this.fireEvent(j, g, h);
		var k = this.getChildren();
		for (var l = 0;
		l < k.length;
		l++) {
			var i = k[l];
			if (i.fireEventRecursively) {
				i.fireEventRecursively(j, g, h)
			}
		}
	},
	removeFromDOM: function() {
		var d = this.isNodeDisplayed();
		if (this.parentNode) {
			var c = $(this.parentNode);
			if (c) {
				c.removeEvent(Constants.DisplayEvents.ADDED_TO_DOM, this._insertedToDOMCB)
			}
			this.dispose()
		}
		if (d) {
			this._onDisplayChangedEvent(Constants.DisplayEvents.REMOVED_FROM_DOM, 0)
		}
	},
	setCollapsed: function(b) {
		if (b) {
			this.collapse()
		} else {
			this.uncollapse()
		}
	},
	toggleCollapsed: function() {
		if (this.hasClass(Constants.CoreClasses.HIDDEN)) {
			this.uncollapse()
		} else {
			this.collapse()
		}
		return this
	},
	collapse: function() {
		if (false === this.hasClass(Constants.CoreClasses.HIDDEN)) {
			this.addClass(Constants.CoreClasses.HIDDEN);
			this._onDisplayChangedEvent(Constants.DisplayEvents.COLLAPSED, 0)
		}
		return this
	},
	uncollapse: function(b) {
		if (this.hasClass(Constants.CoreClasses.HIDDEN)) {
			this.removeClass(Constants.CoreClasses.HIDDEN);
			if (b) {
				this.addClass(b)
			}
			this._onDisplayChangedEvent(Constants.DisplayEvents.DISPLAYED, 0)
		}
		return this
	},
	triggerDisplayChanged: function() {
		this._onDisplayChangedEvent(Constants.DisplayEvents.DISPLAY_CHANGED, 0)
	},
	isConnectedToDOM: function() {
		var c = this;
		var d = document.documentElement;
		while (c) {
			if (c.documentElement == d) {
				return true
			}
			c = c.parentNode
		}
		return false
	},
	isCollapsed: function() {
		var g = document.documentElement;
		var f = this;
		while (f) {
			if (g == f.documentElement) {
				return false
			}
			var i = f.style;
			var h = f.getStyle("display");
			if ("none" == h || f.hasClass("hidden")) {
				return true
			}
			f = f.parentNode
		}
		return false
	},
	isNodeDisplayed: function() {
		var f = this;
		var g = document.documentElement;
		while (f) {
			if (typeOf(f) == "document") {
				return true
			}
			var h = $(f);
			if (!h) {
				return false
			}
			var i = h.getStyle("display");
			if ("none" == i || h.hasClass("hidden")) {
				return false
			}
			f = f.parentNode
		}
		return false
	},
	_onDisplayChangedEvent: function(m) {
		var l, o, n, j;
		if (this.getElementsByTagName) {
			l = this.getElementsByTagName("*") || [];
			if (Browser.ie) {
				if (Array.slice) {
					l = Array.slice(l)
				} else {
					n = [];
					for (o = l.length - 1;
					o >= 0; --o) {
						n[o] = l[o]
					}
					l = n
				}
			} else {
				l = Array.prototype.slice.call(l)
			}
		} else {
			l = this.getElements("*") || []
		}
		for (o = 0, j = l.length;
		o < j; ++o) {
			try {
				n = l[o];
				if (n.fireEvent) {
					n.fireEvent(m, m)
				}
			} catch (k) {
				this._reportUnknownError(k)
			}
		}
		try {
			this.fireEvent(m, m)
		} catch (i) {
			this._reportUnknownError(i)
		}
	},
	_reportUnknownError: function(h) {
		var i = this && this.getLogic && this.getLogic() && this.getLogic()._editedComponent && this.getLogic()._editedComponent.$className || "no component name";
		var f = h && h.message || "no message";
		var g = wixErrors.UNKNOWN_ERROR;
		g.ignore = true;
		LOG.reportError(g, "Element.js", i, f)
	},
	_insertedToDOM: function(b) {
		this.fireEvent(Constants.DisplayEvents.ADDED_TO_DOM, b)
	},
	getContentRect: function(d) {
		d = d || $$("body")[0];
		var c = this.getCoordinates(d);
		this.getElements("div").forEach(function(b) {
			if (b.isVisible() === true && b.isDisplayed() === true) {
				var a = b.getCoordinates(d);
				if (a.left < c.left) {
					c.left = a.left
				}
				if (a.right > c.right) {
					c.right = a.right
				}
				if (a.top < c.top) {
					c.top = a.top
				}
				if (a.bottom > c.bottom) {
					c.bottom = a.bottom
				}
			}
		});
		c.width = c.right - c.left;
		c.height = c.bottom - c.top;
		return c
	},
	_insertedToDOMCB: null
});
Element.NativeEvents.cut = 2;
Element.NativeEvents.paste = 2;
Element.Events.paste = {
	base: "paste",
	condition: function(b) {
		this.fireEvent(Constants.CoreEvents.PASTE, b, 1);
		return false
	}
};
Constants.CoreEvents = {
	CLICK: "click",
	KEY_DOWN: "keydown",
	KEY_UP: "keyup",
	KEY_PRESS: "keypress",
	COPY: "copy",
	CUT: "cut",
	BLUR: "blur",
	FOCUS: "focus",
	PASTE: "paste",
	MOUSE_OVER: "mouseover",
	MOUSE_OUT: "mouseout",
	MOUSE_DOWN: "mousedown",
	MOUSE_UP: "mouseup",
	MOUSE_MOVE: "mousemove",
	MOUSE_WHEEL: "mousewheel",
	CHANGE: "change",
	INPUT: "input",
	RESIZE: "resize",
	SCROLL: "scroll"
};
Constants.DisplayEvents = {
	ADDED_TO_DOM: "insertedToDOM",
	REMOVED_FROM_DOM: "removedFromDOM",
	DISPLAYED: "displayed!",
	COLLAPSED: "collapsed!",
	DISPLAY_CHANGED: "displayed?",
	MOVED_IN_DOM: "movedInDOM",
	SKIN_CHANGE: "skinChange"
};
Constants.CoreClasses = {
	HIDDEN: "hidden"
};
Element.Events.cut = {
	base: "cut",
	condition: function(b) {
		this.fireEvent(Constants.CoreEvents.CUT, b, 1);
		return false
	}
};
W.Classes.newClass({
	name: "mobile.core.utils.Utils",
	imports: ["mobile.core.utils.Styles", "mobile.core.utils.Tween", "mobile.core.managers.Hash"],
	Class: {
		initialize: function() {
			this._styles = new this.imports.Styles();
			this.hash = new this.imports.Hash();
			this.Tween = this.imports.Tween
		},
		createStyleSheet: function(b) {
			return this._styles.createStyleSheet(b)
		},
		instanceIndex: 0,
		_prefixCounterMap: {},
		iframeCallback: 0,
		convertToValidUrlPart: function(b) {
			return b.replace(/[ ]/g, "-").replace(/[^A-Za-z0-9-]/g, "").toLowerCase()
		},
		isURLPartValid: function(b) {
			return (/[^a-z_0-9]/.test(b) === false) && b.length >= 4
		},
		_$getUniqeId: function(g) {
			var d = this.instanceIndex;
			var f = this.getUniqueId(g);
			this.instanceIndex = d;
			return f
		},
		getUniqueId: function(b) {
			b = b ? b.replace(/[^A-Za-z0-9_-]/g, "") : "";
			if (b.length > 3) {
				b = b ? b.replace(/[aeiou]/gi, "") : ""
			}
			b = b ? b : Constants.components.DEFAULT_PREFIX;
			if (this._prefixCounterMap[b] === undefined) {
				this._prefixCounterMap[b] = 0
			} else {
				this._prefixCounterMap[b]++
			}
			while ($(b + this._prefixCounterMap[b].toString(36))) {
				this._prefixCounterMap[b]++
			}
			return b + this._prefixCounterMap[b].toString(36)
		},
		callLater: function(h, i, f, j) {
			
			if (h && typeOf(h) === "function") {
				i = i || [];
				f = f || window;
				j = j || 1;
				var g = (this.getQueryParam("stack") === "true") ? this.getStackTrace() : "";
				return setTimeout(function() {
					h.callLaterStack = g;
					h.apply(f, i);
					delete h.callLaterStack
				}, j)
			}
		},
		clearCallLater: function(b) {
			clearTimeout(b)
		},
		callOnNextRender: function(g, f) {
			f = f || 60;
			var d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function(a) {
				window.setTimeout(a, f)
			};
			return d(g)
		},
		clearOnNextRender: function(d) {
			var c = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
			c(d)
		},
		errorPopup: function(g, f, d) {
			if (W.EditorDialogs) {
				if (window.debugMode && window.debugMode !== "nodebug") {
					W.EditorDialogs.openErrorDialog(g, f, d)
				} else {
					W.EditorDialogs.openErrorDialog(g, f)
				}
			}
		},
		debugTrace: function() {
			if (window.debugMode !== "nodebug") {
				if (window.console) {
					if (window.debugMode == "unit_test") {
						console.oldLog.apply(console, arguments)
					} else {
						if (console.log.apply) {
							console.log.apply(console, arguments)
						} else {
							console.log(arguments)
						}
					}
				}
			}
		},
		reportWixifyTimeOut: function(g, f, h, i) {
			this.debugTrace(["* Wixify timeout id:" + g.get("id") + " comp:" + g.get("comp"),
			{
				node: g,
				logic: f,
				skin: h,
				data: i
			}, {
				pendingClasses: W.Classes._pendingNewClassesQueue.map,
				pendingSkins: W.Skins._skinQue.map
			}])
		},
		alertError: function(i, f, g, h, j) {
			if (!j) {
				LOG.reportError(i, f, g, h)
			}
			this.errorPopup("Error", h, f + "." + g + "\n\n" + h);
			return (window.debugMode != "debug") ?
			function() {} : null
		},
		getComputedStyle: function(b) {
			if (window.getComputedStyle) {
				return window.getComputedStyle(b, null)
			} else {
				return b.currentStyle
			}
		},
		serverRequest: function(l, j, m, k, i) {
			var n = "";
			var h = new Request.JSON({
				url: n + l,
				onSuccess: k,
				onFailure: i
			});
			if (j == "post") {
				h.post(m)
			} else {
				h.get(m)
			}
		},
		isReady: function() {
			return true
		},
		clone: function() {
			return new this.$class()
		},
		isValidUrl: function(d) {
			var c = new RegExp("^(ftps|ftp|http|https):\\/\\/[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&*;:/~\\+#!|]*[\\w\\-\\@?^=%&*;/~\\+#!|])?$");
			return c.test(d)
		},
		isValidUrlNoProtocol: function(d) {
			var c = new RegExp("^[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&*;:/~\\+#!|]*[\\w\\-\\@?^=%&*;/~\\+#!|])?$");
			return c.test(d)
		},
		isValidEmail: function(d) {
			var c = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return c.test(d)
		},
		isValidTwitterUser: function(d) {
			var c = /^@?[a-zA-Z0-9_%]+$/;
			return c.test(d)
		},
		isNumber: function(b) {
			return !isNaN(parseFloat(b)) && isFinite(b)
		},
		getQueryParam: function(l, g) {
			l = l.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var h = "[\\?&]" + l + "=([^&#]*)";
			var i = new RegExp(h);
			var j = g || window.location.href;
			var k = i.exec(j);
			if (k === null) {
				return ""
			} else {
				return k[1]
			}
		},
		isValidColor: function(b) {
			return instanceOf(b, String) && ((b.indexOf("#") === 0 && (b.length === 4 || b.length === 7) && !isNaN(b.replace("#", "0x"))) || Constants.CSS.COLORS.contains(b.toLowerCase()))
		},
		isObjectEmpty: function(b) {
			return Object.some(b, function() {
				return true
			})
		},
		validatePageTitle: function(c) {
			var d = c;
			d = d.replace(/[^A-Za-z0-9_ ]/g, "");
			if (d.indexOf(" ") === 0) {
				while (d.indexOf(" ") === 0) {
					d = d.substr(1)
				}
			}
			if (d.indexOf("  ") > -1) {
				while (d.indexOf("  ") > -1) {
					d = d.replace("  ", " ")
				}
			}
			d = d.substr(0, Constants.Page.NAME_MAX_LENGTH);
			if (d === "") {
				d = "untitled"
			}
			return d
		},
		_sendURLtoGoogleAnalytics: function(c, d) {
			c._trackPageview(d)
		},
		_getGoogleAnalyticsTracker: function(b) {
			if (!window._gat) {
				return
			}
			pageTracker = _gat._getTracker(b);
			pageTracker._initData();
			return pageTracker
		},
		reportSiteAnalytics: function(i, h) {
			var j = "UA-2117194-25";
			var g = "site";
			var f = g + "/" + i;
			if (h) {
				f = f + "/" + h
			}
			this.sendToGoogleAnalytics(f, j)
		},
		reportEditorAnalytics: function(i, h) {
			var j = "UA-2117194-23";
			var g = "editor";
			var f = g + "/" + i;
			if (h) {
				f = f + "/" + h
			}
			if (window.siteHeader) {
				if (window.siteHeader.username) {
					f = f + "/" + siteHeader.username
				}
				if (window.siteHeader.siteName) {
					f = f + "/" + siteHeader.siteName
				}
			}
			this.sendToGoogleAnalytics(f, j)
		},
		sendToGoogleAnalytics: function(i, n) {
			
			try {
				if (window._gat) {
					var m = this._getGoogleAnalyticsTracker(n);
					this._sendURLtoGoogleAnalytics(m, i, n);
					return
				}
				var k = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
				var j = new Element("script", {
					id: "googleAnalyticsScript"
				});
				var o = document.getElementsByTagName("script")[0];
				j.type = "text/javascript";
				o.parentNode.insertBefore(j, o);
				j.src = k + "google-analytics.com/ga.js";
				this.gaCheck(i, n)
			} catch (l) {}
		},
		gaCheck: function(g, f) {
			try {
				if (window._gat) {
					var i = this._getGoogleAnalyticsTracker(f);
					this._sendURLtoGoogleAnalytics(i, g)
				} else {
					setTimeout(this.gaCheck.bind(this, g, f), 1000)
				}
			} catch (h) {}
		},
		show: function(b) {
			$(b).uncollapse()
		},
		setChildIndex: function(g, i, l) {
			var k = g.getChildren();
			var j = k[i];
			var h = k[l];
			if (j == h) {
				j.fireEvent(Constants.DisplayEvents.MOVED_IN_DOM, Constants.DisplayEvents.MOVED_IN_DOM)
			}
			if (j && h) {
				j.inject(h, (l < i ? "before" : "after"));
				j.fireEvent(Constants.DisplayEvents.MOVED_IN_DOM, Constants.DisplayEvents.MOVED_IN_DOM);
				h.fireEvent(Constants.DisplayEvents.MOVED_IN_DOM, Constants.DisplayEvents.MOVED_IN_DOM)
			}
		},
		hide: function(b) {
			$(b).collapse()
		},
		waitForElement: function(i, l, k, h) {
			var j = 0;
			var m = k / l;
			var n = setInterval(function() {
				j++;
				if (j > m) {
					clearInterval(n);
					h(false)
				}
				var a = $$(i).length;
				if (a > 0) {
					clearInterval(n);
					h(true)
				}
			}, l)
		},
		getWindowSize: function() {
			var g, d;
			if (typeof window.innerWidth != "undefined") {
				g = window.innerWidth;
				d = window.innerHeight
			} else {
				if (typeof document.documentElement !== "undefined" && typeof document.documentElement.clientWidth !== "undefined" && document.documentElement.clientWidth !== 0) {
					g = document.documentElement.clientWidth;
					d = document.documentElement.clientHeight
				} else {
					var f = document.getElementsByTagName("body")[0];
					g = f.clientWidth;
					d = f.clientHeight
				}
			}
			return {
				width: g,
				height: d
			}
		},
		getPositionRelativeToWindow: function(f) {
			if (!$$(f).length) {
				return {
					x: 0,
					y: 0
				}
			}
			var i = $$(f)[0];
			var h = i.getPosition();
			var g = window.getScroll();
			h.x -= g.x;
			h.y -= g.y;
			return h
		},
		_htmlTextReplacements: [
			["<", "&lt;"],
			[">", "&gt;"]
		],
		convertToHtmlText: function(h) {
			h = h.toString();
			for (var f = 0;
			f < this._htmlTextReplacements.length; ++f) {
				var i = this._htmlTextReplacements[f][0];
				var g = this._htmlTextReplacements[f][1];
				while (h.indexOf(i) != -1) {
					h = h.replace(i, g)
				}
			}
			return h
		},
		convertFromHtmlText: function(h) {
			for (var f = 0;
			f < this._htmlTextReplacements.length; ++f) {
				var i = this._htmlTextReplacements[f][0];
				var g = this._htmlTextReplacements[f][1];
				while (h.indexOf(g) != -1) {
					h = h.replace(g, i)
				}
			}
			return h
		},
		getStackTrace: function(f) {
			f = (!isNaN(f) && f > 0) ? f : 1;
			var h = new Error();
			var g = "(no stack)";
			if (h.stack) {
				g = h.stack
			} else {
				if (window.opera && h.message) {
					g = h.message
				} else {}
			}
			g = g.split("[object Object]").join("{}");
			g = g.split("[object Array]").join("[]");
			g = g.replace(/at/g, "");
			g = g.split(window.serviceTopology.scriptsRoot + "/javascript/").join("");
			var i = g.split("\n");
			if (i[0].toLowerCase() == "error") {
				f++
			}
			i = i.splice(f);
			return i.join("<<").replace(/\s{2,}/g, " ")
		},
		objectSizeDelta: function(g) {
			var f = 0;
			for (var d in g) {
				if (g.hasOwnProperty(d)) {
					f++
				}
			}
			return f
		},
		getTimestamp: function() {
			var k = [W.Resources.get("EDITOR_LANGUAGE", "DAY_SUNDAY"), W.Resources.get("EDITOR_LANGUAGE", "DAY_MONDAY"), W.Resources.get("EDITOR_LANGUAGE", "DAY_TUESDAY"), W.Resources.get("EDITOR_LANGUAGE", "DAY_WEDNESDAY"), W.Resources.get("EDITOR_LANGUAGE", "DAY_THURSDAY"), W.Resources.get("EDITOR_LANGUAGE", "DAY_FRIDAY"), W.Resources.get("EDITOR_LANGUAGE", "DAY_SATURDAY")];
			var r = new Date();
			var l = r.getDate();
			var o = r.getMonth() + 1;
			var j = W.Resources.get("EDITOR_LANGUAGE", "MONTH_" + o);
			var p = r.getHours();
			if (p < 10) {
				p = "0" + p
			}
			var q = r.getMinutes();
			if (q < 10) {
				q = "0" + q
			}
			var n = r.getDay();
			var m = r.getYear() + 1900;
			return k[n] + ", " + l + " " + j + " " + m + ", " + p + ":" + q
		},
		isEquivalent: function(i, j) {
			if (typeof i !== typeof j) {
				return false
			}
			if (i instanceof Array && !(j instanceof Array)) {
				return false
			}
			if ((typeof i && typeof j) == "function") {
				return true
			}
			if (typeof i === "string" || typeof i === "number" || typeof i === "boolean") {
				return (i === j)
			}
			var g = 0;
			var h = (i instanceof Array);
			if (!h) {
				for (var l in i) {
					if (i.hasOwnProperty(l) && !j.hasOwnProperty(l)) {
						return false
					} else {
						++g
					}
				}
				for (l in j) {
					if (j.hasOwnProperty(l)) {
						g--
					}
				}
				if (g !== 0) {
					return false
				}
				for (l in i) {
					if (i.hasOwnProperty(l) && !this.isEquivalent(i[l], j[l])) {
						return false
					}
				}
			} else {
				var k = function(a, b) {
						return W.Utils.isEquivalent(a, j[b])
					};
				return (i.length == j.length && i.every(k, j))
			}
			return true
		},
		getMidPos: function(h, w, t) {
			var o = window.getSize();
			var v = o.x;
			var p = o.y;
			var q, r, s, u;
			if (t.page) {
				q = t.page.x;
				r = t.page.y;
				s = t.client.x + h;
				u = t.client.y + w
			} else {
				q = t.pageX;
				r = t.pageY;
				s = t.clientX + h;
				u = t.clientY + w
			}
			var x = (s >= v) ? (q - (s - v)) : q;
			var y = (u >= p) ? (r - (u - p)) : r;
			return {
				x: x,
				y: y
			}
		},
		getCSSBrowserFeature: function(c) {
			var d = Modernizr.prefixed(c.camelCase());
			return (!d) ? false : d.replace(/([A-Z])/g, function(a, b) {
				return "-" + b.toLowerCase()
			}).replace(/^ms-/, "-ms-")
		},
		numberToPageId: function(g) {
			var d = g.toString(36);
			var f = d.length;
			if (f < 3) {
				d = "0000".substr(0, 3 - f) + d
			}
			return d
		},
		getAntiCacheSuffix: function() {
			var g = W.Utils.getQueryParam("nocache");
			var f = W.Utils;
			var d;
			if (true) {
				d = ""
			} else {
				if (!f._antiCacheSuffix) {
					f._antiCacheSuffix = new Date().getTime().toString(36)
				}
				d = "?noCache=" + f._antiCacheSuffix
			}
			return d
		},
		sanitizeUnicode: function(b) {
			return typeof b == "string" ? b.replace(/[\u2028\u2029]/g, "\u000A") : b
		},
		stringToBoolean: function(b) {
			if (!b) {
				return false
			}
			return b.toLowerCase() == "true"
		},
		getIsSibling: function(c, d) {
			return c && d && c.getParent() === d.getParent()
		},
		requestAnimFrame: function() {},
		isInputKey: function(b) {
			if (!b) {
				return false
			}
			if (b < 48) {
				return (b == 13 || b == 32 || b == 8 || b == 46)
			}
			if (b >= 112 && b <= 145) {
				return false
			}
			if (b > 90 && b <= 93) {
				return false
			}
			return true
		},
		setUrlParam: function(h, k, l) {
			var j = h.split("?");
			var i = [];
			var m = false;
			if (j.length == 2) {
				i = j[1].split("&");
				for (var n = 0;
				n < i.length;
				n++) {
					if (i[n].indexOf(k + "=") === 0) {
						i[n] = k + "=" + String(l);
						m = true;
						break
					}
				}
			}
			if (!m) {
				i.push(k + "=" + String(l))
			}
			j[1] = i.join("&");
			h = j.join("?");
			return h
		},
		prepareIFrameForWrite: function(g, i) {
			try {
				var j = g.contentWindow.document || g.contentWindow.document;
				i(g, j)
			} catch (k) {
				var h = "tmp" + (this.iframeCallback++);
				W[h] = function() {
					var a = g.contentDocument || g.contentWindow.document;
					i(g, a)
				};
				g.src = W.Config.getServiceTopologyProperty("scriptsRoot") + "/html/sameDomainIFrame.html?d=" + encodeURIComponent(document.domain) + "&c=" + encodeURIComponent(h)
			}
		},
		getMailFromMailtoURL: function(j) {
			var f = "mailto:";
			var h = f.length;
			if (j.substr(0, h) == f) {
				j = j.substr(h)
			}
			var i = "?subject=";
			var g = j.indexOf(i);
			if (g > -1) {
				j = j.substr(0, g)
			}
			return j
		},
		stopMouseWheelPropagation: function(c) {
			c = c || {};
			var d = this.getSize().y;
			if ((this.scrollTop === (this.scrollHeight - d) && c.wheel < 0) || (this.scrollTop === 0 && c.wheel > 0)) {
				c.preventDefault()
			}
		},
		forceBrowserRepaint: function(d, c) {
			if (Browser.safari) {
				d = d || $$("body");
				c = c || 150;
				d.setStyle("opacity", 0.99);
				setTimeout(function() {
					d.setStyle("opacity", 1)
				}, c)
			}
		},
		forceBrowserRepaintOnScroll: function(b) {
			if (Browser.safari) {
				b = b || $$("body");
				this._op = (this._op === 1) ? 0.99 : 1;
				b.setStyle("opacity", this._op)
			}
		},
		naiveInstanceOf: function(c, d) {
			if (!c) {
				return false
			}
			if (!instanceOf(d, String) && instanceOf(c, d)) {
				return true
			}
			if (!instanceOf(d, String)) {
				d = d.prototype.className
			}
			if (c._instanceOf === undefined || d === undefined) {
				return false
			}
			return c._instanceOf.some(function(a) {
				return a == d
			})
		},
		getAddPageTemplateFromMainPage: function(d, f, g) {
			return this.getAddPageTemplateFromPage("mainPage", d, f, g)
		},
		getAddPageTemplateFromCurrentPage: function(d, f, g) {
			return this.getAddPageTemplateFromPage(W.Preview.getPreviewManagers().Viewer.getCurrentPageId(), d, f, g)
		},
		printNodesWithStyle: function(g, i) {
			var h = this.getComputedStyle(g);
			if (h && h[i] && h[i] != "auto") {
				console.log(h[i], g)
			}
			if (!g.childNodes) {
				return
			}
			var j = g.childNodes;
			for (var f = 0;
			f < j.length;
			f++) {
				this.printNodesWithStyle(j[f], i)
			}
		},
		getAddPageTemplateFromPage: function(r, l, p, q) {
			p = p || "";
			var k = W.Preview.getHtmlElement(r).getLogic();
			var j = "ADD_PAGE_" + l.toUpperCase() + "_GROUPNAME";
			var o = "ADD_PAGE_" + l.toUpperCase() + p + "_NAME";
			var m = "ADD_PAGE_" + l.toUpperCase() + p + "_DESCRIPTION";
			var n = {
				group: j,
				name: o,
				applicationType: q || Constants.WEditManager.SITE_TYPE_WEB,
				previewPic: l.toLowerCase() + p + ".png",
				pageDescription: m,
				serializedPageData: W.ClipBoard.copyComponent(k)
			};
			strRet = JSON.encode(n);
			strRet = strRet.replace(/\\\"/g, "\\'");
			return strRet
		}
	}
});
(function() {
	var h = {
		getType: function() {
			return ""
		}
	};
	var f = function(p) {
			if (!p.dataInstance) {
				p.dataInstance = h
			}
			var r = p.idPrefix ? p.idPrefix + "___" : "";
			var n = p.logicClass.prototype.className;
			var o = n.lastIndexOf(".");
			n = o > -1 ? n.substr(o) : n;
			var a = p.viewNode.getProperty("id") || W.Utils.getUniqueId(r + n);
			var d = new p.logicClass(a, p.viewNode, p.compData.argsObject);
			var q = new p.skinClass();
			if (p.compData.innerStyle) {
				q.applyStyle(p.compData.innerStyle)
			}
			d.setSkin(q);
			if (p.style) {
				d.setStyle(p.style)
			}
			var b = d.getAcceptableDataTypes();
			var c = p.dataInstance.getType();
			if (p.compProperties) {
				d.setComponentProperties(p.compProperties)
			}
			if (b.indexOf(c) != -1) {
				if (p.dataInstance !== h) {
					d.setDataItem(p.dataInstance)
				}
			} else {
				LOG.reportError(wixErrors.WIXIFY_INVALID_DATA_TYPE, "wrong data type", c, ", data type: " + c + ", acceptable types: " + b + ", component: " + d.className)
			}
			p.viewNode.getLogic = function() {
				return d
			};
			p.viewNode.fireEvent(Constants.ComponentEvents.WIXIFIED);
			d.fireEvent(Constants.ComponentEvents.WIXIFIED)
		};
	Element.implement({
		wixify: function(b, E, H, z, x) {
			var A, F, c, d, G, D, y, B, a, J;
			A = this.getProperty("comp");
			F = this.getProperty("skin");
			c = this.getProperty("dataQuery");
			d = this.getProperty("propertyQuery");
			D = {
				argsObject: b,
				innerStyle: x
			};
			J = this.getProperty("styleId");
			if (!z && Constants.WixifyTimeOut) {
				z = Constants.WixifyTimeOut
			}
			var C = new i(f, z, A);
			if (J) {
				W.Theme.getStyle(J, function(j) {
					C.setParam("style", j);
					W.Skins.getSkin(j.getSkin(), C.getAsyncSetterFor("skinClass"))
				}, F)
			} else {
				C.setParam("style", undefined);
				if (!F) {
					LOG.reportError(wixErrors.WIXIFY_NO_SKIN, "Element", "wixify", A);
					return
				}
				W.Skins.getSkin(F, C.getAsyncSetterFor("skinClass"))
			}
			if (!A) {
				LOG.reportError(wixErrors.WIXIFY_NO_COMP, "Element", "wixify", A);
				return
			}
			if (this.getLogic) {
				LOG.reportError(wixErrors.WIXIFY_ALREADY_WIXIFIED, "Element", "wixify", A);
				return
			}
			G = this;
			G.fireEvent("wixifyStarted");
			C.setParam("viewNode", G);
			C.setParam("idPrefix", H);
			C.setParam("compData", D);
			if (E) {
				C.setParam("dataInstance", E)
			} else {
				if (c) {
					var w, I = this.getProperty("dataQuerySource");
					if (!I || I != "preview" || !W.Editor) {
						w = W.Data
					} else {
						w = W.Preview.getPreviewManagers().Data
					}
					w.getDataByQuery(c, C.getAsyncSetterFor("dataInstance"))
				} else {
					C.setParam("dataInstance", h)
				}
			}
			if (d) {
				this.isTimedOut = false;
				this.propQueryTimer = setTimeout(function() {
					this.isTimedOut = true;
					C.setParam("compProperties", undefined)
				}.bind(this), 10000);
				W.ComponentData.getDataByQuery(d, function(j) {
					if (!this.isTimedOut) {
						clearTimeout(this.propQueryTimer);
						C.getAsyncSetterFor("compProperties")(j)
					}
				}.bind(this))
			} else {
				C.setParam("compProperties", undefined)
			}
			W.Components.getComponent(A, C.getAsyncSetterFor("logicClass"));
			C.run();
			return this
		}
	});
	Elements.implement({
		wixify: function(b, c) {
			for (var a = this.length - 1;
			a > -1; --a) {
				this[a].wixify(b, c)
			}
			return this
		}
	});
	var g = 2000;

	function i(a, c, b) {
		this._requiredParams = {
			compData: null,
			compProperties: null,
			idPrefix: null,
			logicClass: null,
			skinClass: null,
			dataInstance: null,
			viewNode: null,
			style: null
		};
		this._wixifyCallback = a;
		this._paramsSet = {};
		this._className = b;
		this._startTime = new Date().getTime();
		this._wixifyTimeout = c ? c : g
	}
	i.prototype = {
		_timedOut: null,
		_timeOutId: null,
		run: function() {
			this._timeOutHandler = setTimeout(function() {
				this._clearTimeout();
				this._onWixifyTimeout()
			}.bind(this), this._wixifyTimeout)
		},
		_clearTimeout: function() {
			clearTimeout(this._timeOutHandler)
		},
		setParam: function(b, a) {
			if (!this._requiredParams.hasOwnProperty(b)) {
				throw ("this wixifier is not waiting for a parameter named " + b)
			}
			this._requiredParams[b] = a;
			this._paramsSet[b] = new Date().getTime() - this._startTime;
			this._checkIfEverythingIsThere()
		},
		getAsyncSetterFor: function(a) {
			return function(b) {
				this.setParam(a, b)
			}.bind(this)
		},
		_checkIfEverythingIsThere: function() {
			var b = true;
			for (var a in this._requiredParams) {
				if (this._requiredParams.hasOwnProperty(a)) {
					if (this._paramsSet[a] === undefined) {
						b = false;
						break
					}
				}
			}
			if (b) {
				this._onAllWixifyParamsReady()
			}
		},
		_onAllWixifyParamsReady: function() {
			this._clearTimeout();
			if (this._wixifyCallback) {
				this._wixifyCallback(this._requiredParams)
			}
			if (this._timedOut) {
				var a = new Date().getTime() - this._startTime;
				LOG.reportError(wixErrors.WIXIFY_FINISHED_AFTER_TIMEOUT, a, this._timeOutId, a)
			}
		},
		_onWixifyTimeout: function() {
			this._timedOut = new Date().getTime() - this._startTime;
			this._timeOutId = "[" + this._className + ":" + this._timedOut + "]";
			var a = this._requiredParams,
				l = this._paramsSet;
			var d = [];
			var k = [];
			for (var b in a) {
				if (a.hasOwnProperty(b)) {
					if (l[b] === undefined) {
						d.push(b)
					}
				}
			}
			var c = "Time: " + this._wixifyTimeout + ". missing: " + d.join(",");
			W.Utils.debugTrace("Wixify Error", this._className, this._timeOutId, c);
			if ((d.length == 1) && (d[0]) == "compProperties") {
				LOG.reportError(wixErrors.WIXIFY_TIMEOUT, this._className, this._timeOutId, c);
				this._onAllWixifyParamsReady()
			}
		},
		toString: function() {
			return "[Wixifier]"
		}
	}
})();
(function() {
	W.Color = new WClass({
		className: "Color",
		initialize: function(h, a, i, j) {
			if (typeOf(i) == "number" && typeOf(a) == "number" && typeOf(h) == "number") {
				this.setRed(h);
				this.setGreen(a);
				this.setBlue(i);
				this.setAlpha(j)
			} else {
				if (typeOf(h) == "string") {
					if (h.indexOf("#") === 0) {
						this.setHex(h)
					} else {
						var b = h.replace(/[rgba\(\)]/g, "");
						this.setRgba(b)
					}
				} else {
					this._isUpdateDisabled = true;
					h = h || {};
					this.setRed((h.getRed && typeOf(h.getRed) == "function") ? h.getRed() : 0);
					this.setGreen((h.getGreen && typeOf(h.getGreen) == "function") ? h.getGreen() : 0);
					this.setBlue((h.getBlue && typeOf(h.getBlue) == "function") ? h.getBlue() : 0);
					this.setAlpha((h.getAlpha && typeOf(h.getAlpha) == "function") ? h.getAlpha() : 1);
					this._isUpdateDisabled = false;
					this._updateHsb()
				}
			}
		},
		invert: function() {
			return this.getInvertColor()
		},
		saturation: function(a) {
			this.setSaturation(a * (this._s / 100));
			return this
		},
		luminous: function(a) {
			this.setLuminous(a * (this._l / 100));
			return this
		},
		alpha: function(a) {
			this.setAlpha(a * (this._a / 100));
			return this
		},
		maxSaturation: function(a) {
			if (this._s > a) {
				this.setSaturation(a)
			}
			return this
		},
		minSaturation: function(a) {
			if (this._s < a) {
				this.setSaturation(a)
			}
			return this
		},
		maxLuminous: function(a) {
			if (this._l > a) {
				this.setLuminous(a)
			}
			return this
		},
		minLuminous: function(a) {
			if (this._l < a) {
				this.setLuminous(a)
			}
			return this
		},
		getHex: function(a) {
			var b = "#" + this._formatHexColor(this._r) + this._formatHexColor(this._g) + this._formatHexColor(this._b);
			if (a) {
				b += this._formatHexColor(this._a * 255)
			}
			return b
		},
		getRgb: function() {
			return this._r + "," + this._g + "," + this._b
		},
		getRgba: function() {
			return this.getRgb() + "," + this._a
		},
		getRed: function() {
			return this._getValue(this._r, 0)
		},
		getGreen: function() {
			return this._getValue(this._g, 0)
		},
		getBlue: function() {
			return this._getValue(this._b, 0)
		},
		getAlpha: function() {
			return this._getValue(this._a, 1)
		},
		getHue: function() {
			return this._getValue(this._h, 0)
		},
		getSaturation: function() {
			return this._getValue(this._s, 100)
		},
		getLuminous: function() {
			return this._getValue(this._l, 100)
		},
		getInvertColor: function() {
			return new W.Color([255 - this._r, 255 - this._g, 255 - this._b].join(","))
		},
		_getValue: function(a, b) {
			return (!a && a !== 0) ? b : a
		},
		setRed: function(a) {
			this._r = this._validateValue(a, 0, 255, 0);
			this._updateHsb()
		},
		setGreen: function(a) {
			this._g = this._validateValue(a, 0, 255, 0);
			this._updateHsb()
		},
		setBlue: function(a) {
			this._b = this._validateValue(a, 0, 255, 0);
			this._updateHsb()
		},
		setAlpha: function(a) {
			this._a = this._validateValue(a, 0, 1, 1)
		},
		setHue: function(a) {
			this._h = this._validateValue(a, 0, 360, 0);
			this._updateRgb()
		},
		setSaturation: function(a) {
			this._s = this._validateValue(a, 0, 100, 100);
			this._updateRgb()
		},
		setLuminous: function(a) {
			this._l = this._validateValue(a, 0, 100, 100);
			this._updateRgb()
		},
		setHex: function(a) {
			if (a.charAt(0) == "#") {
				a = a.substr(1)
			}
			this._isUpdateDisabled = true;
			this.setRed(parseInt(a.substr(0, 2), 16));
			this.setGreen(parseInt(a.substr(2, 2), 16));
			this.setBlue(parseInt(a.substr(4, 2), 16));
			var b = parseInt(a.substr(6, 2), 16);
			if (!isNaN(b) || !this._a) {
				this.setAlpha((b === 0) ? 0 : b / 255)
			}
			this._isUpdateDisabled = false;
			this._updateHsb()
		},
		setRgba: function(a) {
			this._isUpdateDisabled = true;
			var b = this._formatSplitValue(a, ["r", "g", "b", "a"]);
			this.setRed(b.r);
			this.setGreen(b.g);
			this.setBlue(b.b);
			this.setAlpha(b.a);
			this._isUpdateDisabled = false;
			this._updateHsb()
		},
		setHsl: function(b) {
			this._isUpdateDisabled = true;
			var a = this._formatSplitValue(b, ["h", "s", "l"]);
			this.setHue(a.h);
			this.setSaturation(a.s);
			this.setLuminous(a.l);
			this._isUpdateDisabled = false;
			this._updateRgb()
		},
		_formatSplitValue: function(a, b) {
			var g = {};
			if (typeOf(a) == "string") {
				a = a.split(",")
			}
			if (typeOf(a) == "array") {
				for (var h = 0;
				h < b.length; ++h) {
					g[b[h]] = a[h]
				}
			}
			return g
		},
		_validateValue: function(a, b, h, g) {
			if (a !== 0) {
				a = a || g || b
			}
			a = Number(String(a).trim());
			if (isNaN(a) || a > h) {
				a = h
			}
			if (a < b) {
				a = b
			}
			return a
		},
		_formatHexColor: function(a) {
			a = a || "00";
			if (typeOf(a) == "number") {
				a = Math.round(a);
				a = a.toString(16)
			}
			while (a.length < 2) {
				a = "0" + a
			}
			return a.toUpperCase()
		},
		_updateHsb: function() {
			if (this._isUpdateDisabled === true) {
				return
			}
			var a = c(this._r, this._g, this._b);
			this._h = a.h || 0;
			this._s = a.s || 0;
			this._l = a.l || 0
		},
		_updateRgb: function() {
			if (this._isUpdateDisabled === true) {
				return
			}
			var a = d(this._h, this._s, this._l);
			this._r = a.r;
			this._g = a.g;
			this._b = a.b
		},
		toString: function() {
			return this.getHex(false)
		}
	});

	function d(p, s, t) {
		var r, a, f, q, i, u, v, b;
		p %= 360;
		if (t === 0) {
			return ({
				r: 0,
				g: 0,
				b: 0
			})
		}
		s /= 100;
		t /= 100;
		p /= 60;
		q = Math.floor(p);
		i = p - q;
		u = t * (1 - s);
		v = t * (1 - (s * i));
		b = t * (1 - (s * (1 - i)));
		if (q === 0) {
			r = t;
			a = b;
			f = u
		} else {
			if (q == 1) {
				r = v;
				a = t;
				f = u
			} else {
				if (q == 2) {
					r = u;
					a = t;
					f = b
				} else {
					if (q == 3) {
						r = u;
						a = v;
						f = t
					} else {
						if (q == 4) {
							r = b;
							a = u;
							f = t
						} else {
							if (q == 5) {
								r = t;
								a = u;
								f = v
							}
						}
					}
				}
			}
		}
		r = Math.floor(r * 255);
		a = Math.floor(a * 255);
		f = Math.floor(f * 255);
		return ({
			r: r,
			g: a,
			b: f
		})
	}
	function c(p, a, f) {
		var b, q, i, o, n, r;
		p /= 255;
		a /= 255;
		f /= 255;
		b = Math.min(Math.min(p, a), f);
		q = Math.max(Math.max(p, a), f);
		if (b == q) {
			return ({
				h: undefined,
				s: 0,
				l: q * 100
			})
		}
		i = (p == b) ? a - f : ((a == b) ? f - p : p - a);
		o = (p == b) ? 3 : ((a == b) ? 5 : 1);
		n = Math.floor((o - i / (q - b)) * 60) % 360;
		r = Math.floor(((q - b) / q) * 100);
		q = Math.floor(q * 100);
		return ({
			h: n,
			s: r,
			l: q
		})
	}
})();
(function() {
	Constants.FONT = {
		STYLE: ["normal", "italic"],
		VARIANT: ["normal", "small-caps", "inherit"],
		WEIGHT: ["normal", "bold", "bolder", "lighter"],
		UNITS: ["px", "em", "pt", "ex", "in", "cm", "mm", "pc"]
	};
	W.Font = new WClass({
		className: "Font",
		initialize: function(h, f) {
			this.setThemeManager(f);
			if (typeOf(h) == "string") {
				this._parseFontString(h)
			} else {
				var i = h || {};
				this.setStyle((i.getStyle && typeOf(i.getStyle) == "function") ? i.getStyle() : undefined);
				this.setVariant((i.getVariant && typeOf(i.getVariant) == "function") ? i.getVariant() : undefined);
				this.setWeight((i.getWeight && typeOf(i.getWeight) == "function") ? i.getWeight() : undefined);
				this.setSize((i.getSize && typeOf(i.getSize) == "function") ? i.getSize() : undefined);
				this.setLineHeight((i.getLineHeight && typeOf(i.getLineHeight) == "function") ? i.getLineHeight() : undefined);
				this.setFontFamily((i.getFontFamily && typeOf(i.getFontFamily) == "function") ? i.getFontFamily() : undefined);
				if (i.getColorReference && typeOf(i.getColorReference) == "function" && i.getColorReference() !== "") {
					this.setColorReference(i.getColorReference())
				} else {
					var g = (i.getColor && typeOf(i.getColor) == "function") ? i.getColor() : "#000000";
					this.setColor(g)
				}
			}
		},
		getThemeString: function() {
			var b = (this._colorSource === "theme") ? "{" + this.getColorReference() + "}" : this.getColor();
			return [this._style, this._variant, this._weight, this.getSize() + "/" + this.getLineHeight(), this.getFontFamilyWithNoSpaces(), b].join(" ")
		},
		getCssRule: function() {
			return ["font:", this.getCssValue(), "; color:", this.getColor()].join(" ")
		},
		getCssValue: function() {
			var b = this.getFontFamilyWithFallbacks();
			return [this._style, this._variant, this._weight, this.getSize() + "/" + this.getLineHeight(), b].join(" ")
		},
		getStyle: function() {
			return this._style
		},
		getVariant: function() {
			return this._variant
		},
		getWeight: function() {
			return this._weight
		},
		getSize: function() {
			return this._fontSize + this._fontUnit
		},
		getLineHeight: function() {
			return this._lineHeightSize + this._lineHeightUnit
		},
		getFontFamily: function() {
			return this._fontFamily
		},
		getFontFamilyWithNoSpaces: function() {
			return this._fontFamily.replace(/\s/g, "+")
		},
		getFontFamilyWithFallbacks: function() {
			return W.Css.getFontFallbacksCss(this._fontFamily)
		},
		getColorReference: function() {
			return this._colorName
		},
		getColor: function() {
			return this._color
		},
		_parseFontString: function(f) {
			var d = f.split(" ");
			var g = d[3] ? d[3].split("/") : [];
			this.setStyle(d[0]);
			this.setVariant(d[1]);
			this.setWeight(d[2]);
			this.setSize(g[0]);
			this.setLineHeight(g[1]);
			this.setFontFamily(d[4]);
			this._setColor(d[5])
		},
		setThemeManager: function(b) {
			this._themeManager = b
		},
		setStyle: function(b) {
			b = (Constants.FONT.STYLE.contains(b)) ? b : Constants.FONT.STYLE[0];
			this._style = b
		},
		setVariant: function(b) {
			b = (Constants.FONT.VARIANT.contains(b)) ? b : Constants.FONT.VARIANT[0];
			this._variant = b
		},
		setWeight: function(b) {
			b = (Constants.FONT.WEIGHT.contains(b)) ? b : Constants.FONT.WEIGHT[0];
			this._weight = b
		},
		setSize: function(d) {
			var c = this._seperateSizeFromUnit(d);
			this._fontSize = c.size;
			this._fontUnit = c.unit
		},
		setLineHeight: function(d) {
			var c = this._seperateSizeFromUnit(d);
			this._lineHeightSize = c.size;
			this._lineHeightUnit = c.unit
		},
		setFontFamily: function(d) {
			d = d && d.replace(/\+/g, " ");
			var c = W.Css.getFontType(d);
			if (!c) {
				d = W.Css.getDefaultFont();
				c = "system"
			}
			this._fontFamily = d
		},
		setColorReference: function(b) {
			this._colorSource = "theme";
			this._colorName = b;
			this._color = new W.Color(this._themeManager && this._themeManager.getProperty(b)).getHex()
		},
		setColor: function(b) {
			this._colorSource = "value";
			this._colorName = "";
			this._color = new W.Color(b).getHex()
		},
		_setColor: function(g) {
			var f = "";
			var d = g && (g.test(/\{.+\}/) || g.test(/\[.+\]/));
			if (g && (d)) {
				f = (d && g.substring(1, g.length - 1)) || g;
				this.setColorReference(f)
			} else {
				this.setColor(g)
			}
		},
		_seperateSizeFromUnit: function(g) {
			g = String(g);
			var f = parseFloat(g);
			var d = g.split(String(f)).join("");
			f = (!isNaN(f)) ? f : this._getDefaultFontSize();
			d = (Constants.FONT.UNITS.contains(d)) ? d : this._getDefaultFontUnit();
			return {
				unit: d,
				size: f
			}
		},
		_getDefaultFontSize: function() {
			return (this._fontSize) ? this._fontSize : 12
		},
		_getDefaultFontUnit: function() {
			return (this._fontUnit) ? this._fontUnit : Constants.FONT.UNITS[0]
		},
		toString: function() {
			return this.getCssValue()
		}
	})
})();
(function() {
	Constants.Background = {
		VALID_WIDTH: ["auto", "contain", "cover"],
		VALID_POSITION_X: ["left", "right", "center"],
		VALID_POSITION_Y: ["top", "bottom", "center"],
		VALID_ATTACHMENT: ["scroll", "fixed"],
		VALID_REPEAT: ["repeat", "no-repeat"],
		DEFAULT_PYRAMID_SIZE: 1920
	};
	W.Background = new WClass({
		className: "Background",
		initialize: function(f, d) {
			this.setThemeManager(d);
			if (!f) {
				return
			}
			if (f.getThemeString) {
				f = f.getThemeString()
			}
			var g = f.split(" ").filter(function(a) {
				return !!a
			});
			this.set.apply(this, g)
		},
		setThemeManager: function(b) {
			this._themeManager = b
		},
		set: function(s, k, p, l, m, t, n, o, q, r) {
			this._setColor(r);
			this.setImage(s, k, p);
			this.setRepeat(n, o);
			this.setAttachment(q);
			this.setPosition(l, m);
			this.setWidth(t)
		},
		setWidth: function(d) {
			var f = parseInt(d, 10);
			var g = Constants.Background.VALID_WIDTH;
			this._width = (g.contains(d) || !isNaN(f)) ? d : (this._width || g[0])
		},
		setPosition: function(f, h) {
			if (typeof h == "undefined") {
				var g = f.split(" ");
				if (g.length === 2) {
					f = g[0];
					h = g[1]
				}
			}
			var i = Constants.Background.VALID_POSITION_X;
			var j = Constants.Background.VALID_POSITION_Y;
			this._x = (i.contains(f)) ? f : this._x || i[0];
			this._y = (j.contains(h)) ? h : this._y || j[0]
		},
		setAttachment: function(d) {
			var c = Constants.Background.VALID_ATTACHMENT;
			this._attachment = (c.contains(d)) ? d : this._attachment || c[0]
		},
		setColorReference: function(b) {
			this._colorSource = "theme";
			this._colorName = b;
			this._color = new W.Color(this._themeManager && this._themeManager.getProperty(b)).getHex()
		},
		setColor: function(b) {
			this._colorSource = "value";
			this._colorName = "";
			this._color = new W.Color(b).getHex()
		},
		_setColor: function(g) {
			var f = "";
			var d = g && (g.test(/\{.+\}/) || g.test(/\[.+\]/));
			if (g && (d)) {
				f = (d && g.substring(1, g.length - 1)) || g;
				this.setColorReference(f)
			} else {
				this.setColor(g)
			}
		},
		setImage: function(f, d, g) {
			this._imageId = f || "none";
			this._imageW = d || 0;
			this._imageH = g || 0
		},
		setPyramidSize: function(b) {
			this._pyramid = b
		},
		setRepeat: function(g, h) {
			if (typeof h == "undefined") {
				var f = g.split(" ");
				switch (f.length) {
				case 1:
					h = g;
					break;
				case 2:
					g = f[0];
					h = f[1]
				}
			}
			var i = Constants.Background.VALID_REPEAT;
			this._repeatX = (i.contains(g)) ? g : this._repeatX || i[0];
			this._repeatY = (i.contains(h)) ? h : this._repeatY || i[0]
		},
		getCssValue: function(d) {
			var c = (d) ? "background:" : "";
			if (this.getImageId()) {
				c += [this.getUrl(), this.getPosition(), this.getRepeatUnified(), this.getAttachment()].join(" ") + " "
			}
			c += this.getColor();
			return c
		},
		getCssSizeValue: function(b) {
			return this.getWidth(b)
		},
		getCssRule: function(d) {
			var c = this.getCssValue(true);
			if (d) {
				c += ";" + this.getCssSizeValue(true)
			}
			return c
		},
		getCssRules: function() {
			return [this.getUrl(true), this.getPosition(true), this.getWidth(true), this.getRepeat(true), this.getAttachment(true), this.getColor(true)].join(";")
		},
		getThemeString: function() {
			var b = (this._colorSource === "theme") ? "{" + this.getColorReference() + "}" : this.getColor();
			return [this.getImageId(), this.getImageSize()[0], this.getImageSize()[1], this.getPosition(), this.getWidth(), this.getRepeat(), this.getAttachment(), b].join(" ")
		},
		getWidth: function(d) {
			var c = (d) ? "background-size:" : "";
			c += this._width;
			return c
		},
		getWidthInline: function(b) {
			if ((Modernizr && Modernizr.backgroundsize) || b) {
				return "/" + this.getWidth()
			}
			return ""
		},
		getPosition: function(d) {
			var c = (d) ? "background-position:" : "";
			c += this.getPositionX() + " " + this.getPositionY();
			return c
		},
		getPositionX: function(d) {
			var c = (d) ? "background-position-x:" : "";
			c += this._x;
			return c
		},
		getPositionY: function(d) {
			var c = (d) ? "background-position-y:" : "";
			c += this._y;
			return c
		},
		getAttachment: function(d) {
			var c = (d) ? "background-attachment:" : "";
			c += this._attachment;
			return c
		},
		getColor: function(d) {
			var c = (d) ? "background-color:" : "";
			c += this._color;
			return c
		},
		getColorReference: function() {
			return this._colorName
		},
		getUrl: function(f) {
			var d = W.Config.getServiceTopologyProperty("staticMediaUrl") + "/";
			var g = (f) ? "background-image:" : "";
			if (this._imageId == "none") {
				g += this._imageId
			} else {
				g += "url(" + d + this._imageId + this._getPyramidSuffix() + ")"
			}
			return g
		},
		getImageSize: function() {
			return [this._imageW, this._imageH]
		},
		getImageId: function() {
			return this._imageId || "none"
		},
		_getPyramidSuffix: function() {
			var l = "";
			var i = this._pyramid || Constants.Background.DEFAULT_PYRAMID_SIZE;
			var h = [];
			var j = 1;
			var g;
			var k;
			h[0] = parseInt(this.getImageSize()[0], 10);
			h[1] = parseInt(this.getImageSize()[1], 10);
			j = h[0] / h[1];
			g = h[0];
			k = h[1];
			if (h[0] > i || h[1] > i) {
				g = (h[0] >= h[1]) ? i : Math.round(j * i);
				k = (h[1] >= h[0]) ? i : Math.round((1 / j) * i)
			}
			l = "_crp_0_0_" + h[0] + "_" + h[1] + "_" + g + "_" + k + "_crp";
			return l
		},
		getRepeat: function(d) {
			var c = (d) ? "background-repeat:" : "";
			c += this._repeatX + " " + this._repeatY;
			return c
		},
		getRepeatUnified: function(d) {
			var c = (d) ? "background-repeat:" : "";
			if (this._repeatX == this._repeatY) {
				c += (this._repeatX == "no-repeat") ? "no-repeat" : "repeat"
			} else {
				c += (this._repeatX == "repeat") ? "repeat-x" : "repeat-y"
			}
			return c
		},
		toString: function() {
			return this.getCssValue()
		}
	})
}());
(function() {
	Constants.BorderRadius = {
		VALID_UNITS: ["px", "%", "em"]
	};
	W.BorderRadius = new WClass({
		className: "BorderRadius",
		initialize: function(d) {
			if (d.getThemeString) {
				d = d.getThemeString()
			} else {
				if (Array.isArray(d)) {
					d = d.join(" ")
				} else {
					d = d.toString()
				}
			}
			var c = d.split(" ").filter(function(a) {
				return !!a
			});
			this.set.apply(this, c)
		},
		square: function(j, f, g, h) {
			this._isLocked = false;
			for (var i = 0;
			i < arguments.length; ++i) {
				switch (arguments[i].toLowerCase()) {
				case "tr":
					this._topRightRadius = 0;
					break;
				case "tl":
					this._topLeftRadius = 0;
					break;
				case "br":
					this._bottomRightRadius = 0;
					break;
				case "bl":
					this._bottomLeftRadius = 0;
					break
				}
			}
			return this
		},
		set: function(h, i, f, g) {
			this._isLocked = false;
			if (typeof h == "undefined") {
				h = 0
			}
			if (typeof i == "undefined") {
				i = h;
				this._isLocked = true
			}
			if (typeof f == "undefined") {
				f = h
			}
			if (typeof g == "undefined") {
				g = i
			}
			this.setTopLeft(h, this._isLocked);
			this.setTopRight(i, this._isLocked);
			this.setBottomRight(f, this._isLocked);
			this.setBottomLeft(g, this._isLocked)
		},
		setTopLeft: function(d, g) {
			this._isLocked = !! g;
			var f = this._seperateSizeFromUnit(d, this._topLeftUnits);
			this._topLeftRadius = f.size;
			this._topLeftUnits = f.unit
		},
		setTopRight: function(d, g) {
			this._isLocked = !! g;
			var f = this._seperateSizeFromUnit(d, this._topRightUnits);
			this._topRightRadius = f.size;
			this._topRightUnits = f.unit
		},
		setBottomRight: function(d, g) {
			this._isLocked = !! g;
			var f = this._seperateSizeFromUnit(d, this._bottomRightUnits);
			this._bottomRightRadius = f.size;
			this._bottomRightUnits = f.unit
		},
		setBottomLeft: function(d, g) {
			this._isLocked = !! g;
			var f = this._seperateSizeFromUnit(d, this._bottomLeftUnits);
			this._bottomLeftRadius = f.size;
			this._bottomLeftUnits = f.unit
		},
		_seperateSizeFromUnit: function(h, f) {
			h = String(h);
			var g = parseFloat(h);
			var i = h.split(String(g)).join("");
			g = (!isNaN(g)) ? g : 0;
			i = (Constants.BorderRadius.VALID_UNITS.contains(i)) ? i : f || Constants.BorderRadius.VALID_UNITS[0];
			return {
				unit: i,
				size: g
			}
		},
		getCssValue: function() {
			if (this._isLocked) {
				return this.getTopLeft()
			}
			return [this.getTopLeft(), this.getTopRight(), this.getBottomRight(), this.getBottomLeft()].join(" ")
		},
		getCssRule: function(b) {
			return "border-radius:" + this.getCssValue()
		},
		getThemeString: function() {
			return this.getCssValue()
		},
		getTopLeft: function() {
			return this._topLeftRadius + this._topLeftUnits
		},
		getTopRight: function() {
			return this._topRightRadius + this._topRightUnits
		},
		getBottomRight: function() {
			return this._bottomRightRadius + this._bottomRightUnits
		},
		getBottomLeft: function() {
			return this._bottomLeftRadius + this._bottomLeftUnits
		},
		getIsLocked: function() {
			return this._isLocked
		},
		getUnits: function() {
			return [this._topLeftUnits, this._topRightUnits, this._bottomRightUnits, this._bottomLeftUnits]
		},
		toString: function() {
			return this.getCssValue()
		}
	})
})();
(function() {
	Constants.BoxShadow = {
		VALID_UNITS: ["px"]
	};
	W.BoxShadow = new WClass({
		className: "BoxShadow",
		initialize: function(f, h) {
			this._shadow = [];
			var i = f || "0 0 0 0 #000";
			if (i.getCssValue) {
				i = i.getCssValue()
			}
			this._parseShadowString(i);
			var g;
			if (h !== undefined && h !== null) {
				g = h
			} else {
				g = true
			}
			this.setToggleOn(g)
		},
		setDefaultValue: function(b) {
			this._defaultValue = b
		},
		setToggleOn: function(b) {
			this._toggleOn = b
		},
		setColor: function(d, c) {
			c = c || 0;
			this._shadow[c].color = new W.Color(d)
		},
		setBlurRadius: function(d, c) {
			c = c || 0;
			this._shadow[c].blur = this._getSizeFromUnit(d)
		},
		setSpreadRadius: function(d, c) {
			c = c || 0;
			this._shadow[c].spread = this._getSizeFromUnit(d)
		},
		setOffset: function(f, g, d) {
			g = (typeof g != "undefined") ? g : f;
			this.setOffsetX(f, d);
			this.setOffsetY(g, d)
		},
		setOffsetX: function(d, c) {
			c = c || 0;
			this._shadow[c].x = this._getSizeFromUnit(d);
			this._shadow[c].angle = this._calcAngle();
			this._shadow[c].distance = this._calcDistance()
		},
		setOffsetY: function(c, d) {
			d = d || 0;
			this._shadow[d].y = this._getSizeFromUnit(c);
			this._shadow[d].angle = this._calcAngle();
			this._shadow[d].distance = this._calcDistance()
		},
		setInset: function(d, c) {
			this._shadow[c || 0].inset = (d) ? "inset" : ""
		},
		setDistance: function(c, d) {
			d = d || 0;
			this._shadow[d].distance = this._getSizeFromUnit(c);
			this._shadow[d].x = Math.round(this._shadow[d].distance * Math.sin(this._shadow[d].angle));
			this._shadow[d].y = Math.round(this._shadow[d].distance * Math.cos(this._shadow[d].angle))
		},
		setAngle: function(h, i, f) {
			var g = (i) ? Math.PI / 180 : 1;
			f = f || 0;
			this._shadow[f].angle = (h * g) || 0;
			this._shadow[f].x = Math.round(this._shadow[f].distance * Math.sin(this._shadow[f].angle));
			this._shadow[f].y = Math.round(this._shadow[f].distance * Math.cos(this._shadow[f].angle))
		},
		setUnit: function(c, d) {
			d = d || 0;
			this._shadow[d].unit = (Constants.BoxShadow.VALID_UNITS.contains(c)) ? c : Constants.BoxShadow.VALID_UNITS[0]
		},
		getDistance: function(b) {
			b = b || 0;
			return (this._shadow[b].distance || 0)
		},
		getAngle: function(g, d) {
			d = d || 0;
			var f = (g) ? 180 / Math.PI : 1;
			return (this._shadow[d].angle || 0) * f
		},
		getColor: function(c) {
			c = c || 0;
			var d = this._shadow[c].color;
			if (Modernizr && Modernizr.rgba) {
				return "rgba(" + d.getRgba() + ")"
			}
			return d.getHex()
		},
		getBlurRadius: function(b) {
			b = b || 0;
			return this._shadow[b].blur
		},
		getSpreadRadius: function(b) {
			b = b || 0;
			return this._shadow[b].spread
		},
		getOffsetX: function(b) {
			b = b || 0;
			return this._shadow[b].x
		},
		getOffsetY: function(b) {
			b = b || 0;
			return this._shadow[b].y
		},
		getInset: function(b) {
			b = b || 0;
			return this._shadow[b].inset
		},
		getToggleOn: function() {
			return this._toggleOn
		},
		getThemeString: function() {
			return this.getCssValue()
		},
		getCssValue: function() {
			if (this._toggleOn) {
				return this._getCssValueFromShadowObject()
			} else {
				return ""
			}
		},
		_calcAngle: function(g) {
			g = g || 0;
			var f = (2 * Math.PI);
			var h = this.getAngle(g);
			var i = this._shadow[g].y / this._shadow[g].x;
			if (i && i !== Infinity && !isNaN(h)) {
				h = ((Math.atan(i) % f) + f) % f
			}
			return h
		},
		_calcDistance: function(d) {
			d = d || 0;
			var f = this._shadow[d].x || 0;
			var g = this._shadow[d].y || 0;
			return Math.round(Math.sqrt(f * f + g * g))
		},
		_getSizeFromUnit: function(g) {
			g = String(g);
			var f = parseFloat(g);
			var d = g.split(String(f)).join("");
			f = (!isNaN(f)) ? f : 0;
			return f
		},
		_parseShadowString: function(j) {
			var h;
			var f = [];
			var g = 0;
			var i;
			if (typeof j !== "string") {
				return
			}
			h = j.trim().replace(/\s*([\(\)\}\s,])\s*/g, "$1").replace(/([\)\}]|#\w{3,6}),/g, "$1, ").replace(/[,;]$/, "");
			if (!h) {
				return ""
			}
			f = h.split(", ");
			for (g = 0;
			g < f.length;
			g++) {
				i = f[g].split(" ");
				if (i[0] != "inset") {
					i.unshift("")
				}
				this._shadow[g] = [];
				this.setUnit("px", g);
				this.setInset(i[0], g);
				this.setOffset(i[1], i[2], g);
				this.setBlurRadius(i[3], g);
				this.setSpreadRadius((i.length > 5) ? i[4] : 0, g);
				this.setColor(i.getLast(), g)
			}
		},
		_getCssValueFromShadowObject: function() {
			var c = [];
			for (var d = 0;
			d < this._shadow.length;
			d++) {
				c.push([this.getInset(d), this.getOffsetX(d) + this._shadow[d].unit, this.getOffsetY(d) + this._shadow[d].unit, this.getBlurRadius(d) + this._shadow[d].unit, this.getSpreadRadius(d) + this._shadow[d].unit, this.getColor(d)].join(" ").trim())
			}
			return c.join(",")
		},
		toString: function() {
			return this.getCssValue()
		}
	})
})();
(function() {
	W.Size = new WClass({
		className: "Size",
		Static: {
			UNITS: ["px", "%", "em"],
			DEFAULT_AMOUNT_FOR_UNIT: {
				px: 12,
				"%": 100,
				em: 1
			}
		},
		initialize: function(c) {
			if (typeOf(c) == "string") {
				this._parseSizeString(c)
			} else {
				var d = c || {};
				this.setUnit((d.getUnit && typeOf(d.getUnit) == "function") ? d.getUnit() : undefined);
				this.setAmount((d.setAmount && typeOf(d.setAmount) == "function") ? d.setAmount() : undefined)
			}
		},
		multiply: function(b) {
			this._amount *= b;
			return this
		},
		decrease: function(b) {
			this._amount -= b;
			return this
		},
		increase: function(b) {
			this._amount += b;
			return this
		},
		getThemeString: function() {
			return this.getCssValue()
		},
		getCssRule: function() {
			return this.getCssValue()
		},
		getCssValue: function() {
			return this._amount + this._unit
		},
		getAmount: function() {
			return this._amount
		},
		getUnit: function() {
			return this._unit
		},
		_parseSizeString: function(c) {
			var d = this._seperateAmountFromUnit(c);
			this.setAmount(d.amount);
			this.setUnit(d.unit)
		},
		setAmount: function(b) {
			if (b || b === 0) {
				this._amount = b
			} else {
				this._amount = this._getDefaultAmountForUnit(this._unit)
			}
		},
		setUnit: function(b) {
			this._unit = b || this._getDefaultUnit()
		},
		_seperateAmountFromUnit: function(g) {
			g = String(g);
			var f = parseFloat(g);
			var d = g.split(String(f)).join("");
			d = (this.UNITS.contains(d)) ? d : this._getDefaultUnit();
			f = (!isNaN(f)) ? f : this._getDefaultAmountForUnit(d);
			return {
				unit: d,
				amount: f
			}
		},
		_getDefaultAmountForUnit: function(b) {
			return this.DEFAULT_AMOUNT_FOR_UNIT[b] || 1
		},
		_getDefaultUnit: function() {
			return (this._unit) ? this._unit : this.UNITS[0]
		},
		toString: function() {
			return this.getCssValue()
		}
	})
})();
(function() {
	var B, w, u, s, y, v, G, t;
	B = new Element("style", {
		id: "testCss"
	}).inject(document.head);
	s = (B.sheet) ? "sheet" : "styleSheet";
	w = B[s];
	if (!w) {
		LOG.reportError(wixErrors.UTILS_STYLE_NOT_FOUND, "Styles", "feature detection")
	}
	y = (w.ownerNode) ? "ownerNode" : "owningElement";
	G = (w.deleteRule) ? "deleteRule" : "removeRule";
	v = (w.cssRules) ? "cssRules" : "rules";
	var z = function(a) {
			return a.replace(/[\s]+/g, " ").replace(/'/g, '"').replace(/^\s+/, "").replace(/\s*$/, "")
		};
	var C;
	if (w.insertRule) {
		C = function(d, a) {
			d = z(d);
			if (this._rulesMap[d]) {
				LOG.reportError(wixErrors.UTILS_RULE_ALREADY_EXIST, "Styles", "createRule", d + "");
				return
			}
			var c = this.insertRule(d + "{" + a + "}", this.cssRules.length);
			var b = this.cssRules[c];
			this._rulesMap[d] = b;
			this._browserSelectorMapping[d] = b.selectorText;
			return b
		}
	} else {
		C = function(f, a) {
			f = z(f);
			if (this._rulesMap[f]) {
				LOG.reportError(wixErrors.UTILS_RULE_ALREADY_EXIST, "Styles", "createRule", f + "");
				return
			}
			var c = this.addRule(f, a);
			var b;
			if (c != -1) {
				b = this.rules[c]
			} else {
				for (var d = 0;
				d < this.rules.length; ++d) {
					if (this.rules[d].selectorText == f) {
						b = this.rules[d];
						break
					}
				}
			}
			this._rulesMap[f] = b;
			this._browserSelectorMapping[f] = b.selectorText;
			return b
		}
	}
	w._rulesMap = {};
	w._browserSelectorMapping = {};
	u = C.apply(w, ["#tempSelector", "color:black;"]);
	t = (u.cssText) ? "cssText" : "no_support";
	var H = function() {
			return this[s]
		};
	var x = function() {
			return this[v]
		};
	var F = function() {
			this._rulesMap = undefined;
			this.styleNode.dispose()
		};
	var A = function() {
			this._rulesMap = [];
			for (var a = this[v].length - 1;
			a >= 0; --a) {
				this[G](a)
			}
		};
	var D = function(a) {
			a = z(a);
			return (this._rulesMap[a]) ? this._rulesMap[a] : null
		};
	var E = function(f) {
			f = z(f);
			var b = false;
			if (this._rulesMap[f]) {
				var a = this._browserSelectorMapping[f];
				var d = this[v].length - 1;
				for (var c = d;
				c >= 0; --c) {
					if (this[v][c].selectorText == a) {
						this[G](c);
						b = true
					}
				}
				delete this._rulesMap[f]
			}
			return b
		};
	var r;
	if (w.cssRules) {
		r = function(c, a) {
			c = z(c);
			var b = this._rulesMap[c];
			if (!b) {
				b = this.createRule(c, a);
				this._rulesMap[c] = b
			} else {
				b.style[t] = a
			}
			return b
		}
	} else {
		r = function(b, a) {
			b = z(b);
			if (this._rulesMap[b]) {
				this.removeRuleBySelector(b);
				delete this._rulesMap[b]
			}
			return this.createRule(b, a)
		}
	}
	W.Classes.newClass({
		name: "mobile.core.utils.Styles",
		Class: {
			createStyleSheet: function(d) {
				var b = W.Utils.getUniqueId(d);
				var c = new Element("style", {
					id: b
				}).inject(document.head);
				var f = c[s];
				if (!f) {
					var a = document.styleSheets;
					for (var g = 0;
					g < a.length; ++g) {
						if (a[g][y] === c) {
							f = a[g];
							break
						}
					}
				}
				if (f) {
					f._rulesMap = {};
					f._browserSelectorMapping = {};
					f.styleNode = c;
					f.getRuleList = x;
					f.removeStyleSheet = F;
					f.clearRules = A;
					f.getRuleBySelector = D;
					f.removeRuleBySelector = E;
					f.updateRule = r;
					f.createRule = C;
					c.getStyleSheet = H;
					return f
				}
				LOG.reportError(wixErrors.UTILS_ERR_CREATE_STYLE, "Styles", "createStyleSheet", "")
			}
		}
	})
})();


window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(c, d) {
		window.setTimeout(c, 1000 / 60)
	}
})();
W.Classes.newClass({
	name: "mobile.core.utils.Tween",
	Class: {
		Static: {
			_activeTweens: [],
			killAll: function() {
				while (this._activeTweens.length > 0) {
					this.killTween(this._activeTweens[0])
				}
			},
			killTweensOf: function(d) {
				var c = [];
				this._activeTweens.forEach(function(a) {
					if (a._target === d) {
						c.push(a)
					}
				});
				c.forEach(function(a) {
					this.killTween(a)
				})
			},
			killTween: function(c) {
				var d;
				c.dispose();
				d = this._activeTweens.indexOf(c);
				if (d != -1) {
					this._activeTweens.splice(d, 1)
				}
			},
			_startTween: function() {
				this.killTweensOf(this._target);
				this._activeTweens.push(this);
				this._t0 = this._getCurrentTime();
				window.requestAnimFrame(this._render.bind(this))
			},
			debugMode: false,
			log: function() {},
			to: function(i, j, h) {
				var g = this;
				var f = new g(i, j, h)
			},
			execute: function(i, j, l, k) {
				k.myProp = j;
				var h = this;
				var g = new h({
					myProp: i
				}, l, k)
			}
		},
		initialize: function(m, q, r) {
			var k, j;
			this._target = m;
			this._duration = Math.floor(q * 1000);
			this._easeParams = [];
			this._t = 0;
			this._tStep = null;
			this._isAlive = true;
			var l = typeOf(m) == "element";
			if (l) {
				this._setValueFunc = this._setStyle
			} else {
				this._setValueFunc = this._setTargetProperty
			}
			this._easeFunc = this.linear;
			var n = this._parseParameter(r, "ease", "linear");
			if (this[n] !== undefined && typeOf(this[n]) == "function") {
				this._easeFunc = this[n]
			}
			this._onCompleteCallback = this._parseParameter(r, "onComplete", null);
			this._onUpdateCallback = this._parseParameter(r, "onUpdate", null);
			var p = this._parseParameter(r, "delay", 0);
			for (var o in r) {
				if (l || m[o] !== undefined) {
					k = {};
					k.propName = o;
					if (l) {
						j = m.getStyle(o);
						k.origValue = parseFloat(j);
						k.unit = this._parseUnit(j);
						if (isNaN(k.origValue)) {
							k.origValue = 0;
							k.unit = "px"
						}
					} else {
						k.origValue = parseFloat(m[o])
					}
					k.targetValue = parseFloat(r[o]);
					this._easeParams.push(k)
				}
			}
			if (p === 0) {
				this._startTween()
			} else {
				p = parseInt(p * 1000, 10);
				setTimeout(this._startTween.bind(this), p)
			}
		},
		_parseUnit: function(c) {
			var d = /[^0-9-]+$/;
			if (d.test(c) === true) {
				return String(String(c).match(d)[0])
			} else {
				return ""
			}
		},
		_parseParameter: function(i, h, f) {
			var g;
			if (i[h] !== undefined) {
				g = i[h];
				delete i[h]
			} else {
				g = f
			}
			return g
		},
		_render: function() {
			var h;
			var i;
			if (this._isAlive) {
				var f = this._getCurrentTime();
				this._tStep = f - this._t0;
				this._t0 = f;
				this._t += this._tStep;
				for (var g = 0;
				g < this._easeParams.length;
				g++) {
					h = this._easeParams[g];
					if (this._t < this._duration) {
						i = this._easeFunc(this._t, 0, 1, this._duration) * (h.targetValue - h.origValue) + h.origValue
					} else {
						i = h.targetValue
					}
					if (this.debugMode === true) {
						this.log(this._tStep, this._t, i)
					}
					if (h.unit) {
						if (h.unit == "px") {
							i = Math.round(i)
						}
					}
					this._setValueFunc(h.propName, i, h.unit);
					if (this._onUpdateCallback !== null) {
						this._onUpdateCallback(i, this._target, h.propName)
					}
				}
				if (this._t < this._duration) {
					window.requestAnimFrame(this._render.bind(this))
				} else {
					if (this._onCompleteCallback !== null) {
						this._onCompleteCallback(this)
					}
					this.killTween(this)
				}
			}
		},
		_getCurrentTime: function() {
			return new Date().getTime()
		},
		_setStyle: function(g, d, f) {
			this._target.setStyle(g, String(d) + f)
		},
		_setTargetProperty: function(c, d) {
			this._target[c] = d
		},
		dispose: function() {
			this._isAlive = false;
			this._target = null;
			this._onCompleteCallback = null;
			this._onUpdateCallback = null
		},
		linear: function(h, b, c, d) {
			return c * h / d + b
		},
		strong_easeIn: function(h, b, c, d) {
			return c * (h /= d) * h * h * h * h + b
		},
		strong_easeOut: function(h, b, c, d) {
			return c * ((h = h / d - 1) * h * h * h * h + 1) + b
		},
		strong_easeInOut: function(h, b, c, d) {
			if ((h /= d * 0.5) < 1) {
				return c * 0.5 * h * h * h * h * h + b
			}
			return c * 0.5 * ((h -= 2) * h * h * h * h + 2) + b
		},
		swing: function(h, b, c, d) {
			return (-Math.cos(this.linear(h, b, c, d) * Math.PI) / 2) + 0.5
		}
	}
});

W.Classes.newClass({
	name: "mobile.core.utils.LinkUtils",
	Class: {
		Static: {
			linkType: {
				SMS: "SMS",
				CALL: "CALL",
				SKYPE: "SKYPE",
				MAP: "MAP",
				EMAIL: "EMAIL",
				FACEBOOK: "FACEBOOK",
				FLICKR: "FLICKR",
				BLOGGER: "BLOGGER",
				MYSPACE: "MYSPACE",
				LINKEDIN: "LINKEDIN",
				TWITTER: "TWITTER",
				TUMBLR: "TUMBLR",
				YOUTUBE: "YOUTUBE",
				VIMEO: "VIMEO",
				PAGE: "PAGE",
				FREE_LINK: "FREE_LINK",
				TEXT: "TEXT",
				DELICIOUS: "DELICIOUS",
				WEBSITE: "WEBSITE",
				DOCUMENT: "DOCUMENT",
				LOGIN: "LOGIN"
			},
			linkTarget: {
				SAME_WINDOW: "_self",
				NEW_WINDOW: "_blank"
			}
		},
		linkifyElement: function(n, m, h, l) {
			this._fixTargetBug(h);
			var k = h.get("href");
			var j = h.get("target");
			var i = h.get("linkType");
			if (k && j) {
				this._createLink(n, m, i, k, j);
				this._setLinkState(n);
				if (l === true) {
					this._disableLinkClickPropagation(m)
				}
			} else {
				this._removeLinkstate(n)
			}
		},
		_createLink: function(h, n, i, l, k) {
			var m = (W.Viewer.getEditorMode() == "PREVIEW");
			var j = (k === "_self" && i === "WEBSITE");
			if (m && j) {
				this._bindPageLeaveWarningToLink(h, n)
			} else {
				n.set("href", l);
				n.setStyle("cursor", "pointer");
				n.set("target", k);
				n.removeEvents("click")
			}
		},
		_setLinkState: function(b) {
			if (b.hasState("noLink", "linkableComponent")) {
				b.removeState("noLink", "linkableComponent")
			}
		},
		_removeLinkstate: function(b) {
			if (b.hasState("noLink", "linkableComponent")) {
				b.setState("noLink", "linkableComponent")
			}
		},
		_fixTargetBug: function(d) {
			var c = d.get("target");
			if (c == "same" || c == "self") {
				c = "_self";
				d.set("target", "_self")
			}
		},
		_disableLinkClickPropagation: function(b) {
			b.addEvent("click", function(a) {
				a.stopPropagation()
			})
		},
		_bindPageLeaveWarningToLink: function(d, c) {
			c.erase("href");
			c.erase("target");
			c.addEvent("click", function(a) {
				a.preventDefault();
				this._showNavigationDisabledTooltip(d)
			}.bind(this))
		},
		_showNavigationDisabledTooltip: function(d) {
			var c = {
				component: d
			};
			this.injects().Commands.executeCommand("linkableComponent.navigateSameWindow", c, d)
		}
	}
});
W.Classes.newClass({
	name: "mobile.core.utils.Commands",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		initialize: function() {
			this._commandMap = {};
			this._pendingMap = {};
			return this
		},
		isReady: function() {
			return true
		},
		clone: function() {
			return this.parent()
		},
		toString: function() {
			return "[Commands Manager]"
		},
		getCommand: function(c) {
			var d = null;
			if (c) {
				if (c instanceof this.Command) {
					d = c
				} else {
					d = this._commandMap[c] || null
				}
			}
			return d
		},
		registerCommand: function(g, j) {
			var k = this._commandMap[g];
			if (k) {
				if (!j) {
					LOG.reportError(wixErrors.COMMAND_DUPLICATE, "Commands", "registerCommand", g)
				}
				return k
			}
			k = this.createCommand(g);
			this._commandMap[g] = k;
			var h = this._pendingMap[g];
			if (h) {
				for (var l = 0;
				l < h.length; ++l) {
					var i = h[l];
					k.registerListener(i.listener, i.executeCB, i.changedCB)
				}
				delete this._pendingMap[g]
			}
			return k
		},
		registerCommandAndListener: function(g, j, h, i, k) {
			var l = this.registerCommand(g, k);
			l.registerListener(j, h, i);
			return l
		},
		executeCommand: function(i, h, f) {
			var g = typeof(i);
			if ("string" == g) {
				i = this.getCommand(i)
			}
			if (i) {
				i.execute(h, f)
			}
		},
		registerCommandListenerByName: function(l, j, g, i) {
			var k = this.getCommand(l);
			if (k) {
				k.registerListener(j, g, i)
			} else {
				var h = this._pendingMap[l] || [];
				h.push({
					listener: j,
					executeCB: g,
					changedCB: i
				});
				this._pendingMap[l] = h
			}
		},
		createCommand: function(b) {
			return new this.Command(b)
		},
		unregisterCommand: function(d) {
			var c = this._commandMap[d];
			if (c) {
				c.dispose();
				delete this._commandMap[d]
			}
		},
		unregisterListener: function(g) {
			for (var f in this._commandMap) {
				var d = this._commandMap[f];
				d.unregisterListener(g)
			}
		},
		Command: W.Classes.newClass({
			name: "mobile.core.utils.commands.Command",
			Class: {
				initialize: function(b) {
					this._listeners = [];
					this._zombies = [];
					this._isEnabled = true;
					this._name = b;
					this._numTimesExecuted = 0;
					this._broadcasting = false
				},
				getNumTimesExecuted: function() {
					return this._numTimesExecuted
				},
				registerListener: function(h, g, f) {
					var i = this._findListenerIndex(h, g);
					if (i < 0) {
						this._listeners.push({
							listener: h,
							onExecute: g,
							onEnabledChanged: f
						});
						if (f) {
							f.call(h, this)
						}
					}
				},
				unregisterListener: function(c) {
					if (this._broadcasting) {
						this._zombies.push(c)
					} else {
						var d;
						while ((d = this._findListenerIndex(c)) >= 0) {
							this._listeners.splice(d, 1)
						}
					}
				},
				dispose: function() {
					this._listeners = []
				},
				getName: function() {
					return this._name
				},
				execute: function(g, d) {
					if (!this._isEnabled) {
						return
					}
					var f = {
						command: this,
						source: d
					};
					this._numTimesExecuted++;
					this._broadcast("onExecute", [g, f])
				},
				setState: function(b) {
					this._setEnabled( !! b)
				},
				enable: function() {
					this._setEnabled(true)
				},
				disable: function() {
					this._setEnabled(false)
				},
				isEnabled: function() {
					return this._isEnabled
				},
				_broadcast: function(m, o) {
					var i = this._listeners.length;
					this._broadcasting = true;
					for (var n = 0;
					n < i; ++n) {
						try {
							var k = this._listeners[n];
							var j = k[m];
							if (j) {
								j.apply(k.listener, o)
							}
						} catch (l) {
							W.Utils.debugTrace("Exception whlile processing command", this._name, l, l.stack || "")
						}
					}
					this._broadcasting = false;
					this._cleanupZombies()
				},
				_setEnabled: function(b) {
					b = !! b;
					if (b != this._isEnabled) {
						this._isEnabled = b;
						this._broadcastEnabledChanged()
					}
				},
				_broadcastEnabledChanged: function() {
					this._broadcast("onEnabledChanged", [this])
				},
				_cleanupZombies: function() {
					var g;
					if (0 >= this._zombies.length) {
						return
					}
					for (var d = this._zombies.length - 1;
					d >= 0; --d) {
						var f = this._zombies[d];
						while ((g = this._findListenerIndex(f)) >= 0) {
							this._listeners.splice(g, 1)
						}
					}
					this._zombies = []
				},
				_findListenerIndex: function(h, g) {
					var f = this._listeners;
					for (var i = f.length - 1;
					i >= 0; --i) {
						if (f[i].listener === h && (g === undefined || f[i].onExecute === g)) {
							return i
						}
					}
					return -1
				}
			}
		})
	}
});

W.Classes.newClass({
	name: "mobile.core.utils.InputBindings",
	Class: {
		Extends: "mobile.core.managers.BaseManager",
		initialize: function() {
			
			this.ignoreKeyhandlerInTags = ["input", "select", "textarea"];
			this._bindingLayers = [];
			this._layersMap = {};
			this._currentBindingLayer = null;
			this._uniqueLayerId = (new Date()).getTime() % 100;
			this._addBindingLayer("DEFAULT");
			this.setBindingLayer("DEFAULT");
			this._keyUpHandler = this._keyUpHandler.bind(this);
			this._keyDownHandler = this._keyDownHandler.bind(this);
			this._isListening = false;
			this._keysEnabled = true;
			this._listen()
		},
		isReady: function() {
			return true
		},
		clone: function() {
			return new this.$class()
		},
		addBindingLayer: function() {
			var b = "bl_" + (++this._uniqueLayerId);
			this._addBindingLayer(b);
			this.setBindingLayer(b);
			return b
		},
		setBindingLayer: function(d) {
			if (this._currentBindingLayer && this._currentBindingLayer.name == d) {
				return this._currentBindingLayer
			}
			var c = this._layersMap[d];
			if (!c) {
				W.Utils.debugTrace("setBindingLayer: Missing layer " + String(d));
				return
			}
			this._currentBindingLayer = c;
			this._bindingLayers.push(c)
		},
		disposeBindingLayer: function(d) {
			if (d == "DEFAULT") {
				W.Utils.debugTrace("disposeBindingLayer: layer DEFAULT can't be disposed");
				return
			}
			var c = this._layersMap[d];
			if (!c) {
				W.Utils.debugTrace("setBindingLayer: Missing layer " + String(d));
				return
			}
			if (c == this._currentBindingLayer) {
				this._popBindingLayer()
			}
		},
		removeBindingLayer: function(d) {
			if (d == "DEFAULT") {
				W.Utils.debugTrace("disposeBindingLayer: layer DEFAULT can't be disposed");
				return
			}
			var c = this._layersMap[d];
			if (c == this._currentBindingLayer) {
				this._popBindingLayer()
			}
		},
		addBinding: function(j, g) {
			var h = g.isUp ? this._currentBindingLayer.keyUpBindingMap : this._currentBindingLayer.keyDownBindingMap;
			var f = this._parseKeySequence(j);
			if (!f) {
				return
			}
			var i = h[f.key] || [];
			f.command = g.command;
			f.commandName = g.commandName;
			f.commandParameter = g.commandParameter;
			i.push(f);
			h.keys[f.key] = i;
			h.keyCodes[f.keyCode] = i
		},
		removeBinding: function(m, h) {
			var j = h.isUp ? this._currentBindingLayer.keyUpBindingMap : this._currentBindingLayer.keyDownBindingMap;
			var i = this._parseKeySequence(m);
			if (!i) {
				return
			}
			var k = j.keys[i.key];
			var l = j.keyCodes[i.keyCode];
			if (!k) {
				return
			}
			for (var n = k.length - 1;
			n >= 0; --n) {
				if (this._equalKeySequences(k[n], i)) {
					k.splice(n, 1);
					l.splice(n, 1)
				}
			}
			if (k.length < 1) {
				delete j.keys[i.key];
				delete j.keyCodes[i.keyCode]
			}
		},
		setKeysEnabled: function(b) {
			this._keysEnabled = b
		},
		_keyUpHandler: function(d) {
			if (!this._keysEnabled || this.ignoreKeyhandlerInTags.contains(d.target.get("tag"))) {
				return true
			}
			var c = this._currentBindingLayer.keyUpBindingMap;
			this._processKeyEvent(d, c)
		},
		_keyDownHandler: function(d) {
			if (!this._keysEnabled || this.ignoreKeyhandlerInTags.contains(d.target.get("tag"))) {
				return true
			}
			var c = this._currentBindingLayer.keyDownBindingMap;
			this._processKeyEvent(d, c)
		},
		_processKeyEvent: function(k, r) {
			var l = k.key;
			var i = k.keyCode || k.code;
			if (!k || !(l || i)) {
				return true
			}
			var n, p;
			if (i) {
				n = k.altKey;
				p = k.ctrlKey
			} else {
				n = k.alt;
				p = k.control
			}
			var m = r.keys[l] || r.keyCodes[i];
			if (!m) {
				return true
			}
			for (var o = m.length - 1;
			o >= 0; --o) {
				var q = m[o];
				if (p != q.control || n != q.alt) {
					continue
				}
				if ((q.command || (q.command = W.Commands.getCommand(q.commandName))) && q.command.isEnabled()) {
					k.preventDefault();
					q.command.execute(q.commandParameter, k);
					return false
				}
			}
			return true
		},
		_parseKeySequence: function(k) {
			if (!k) {
				return null
			}
			k = k.replace("++", "+plus");
			var l = k.split("+");
			var i = {
				key: "",
				alt: false,
				control: false
			};
			for (var o = l.length - 1;
			o >= 0; --o) {
				var p = "";
				var j = l[o].toLowerCase();
				var m = j.length;
				if (m < 1) {
					continue
				}
				switch (j) {
				case "[":
					i.keyCode = 219;
					break;
				case "]":
					i.keyCode = 221;
					break;
				case "&lt":
					i.keyCode = 188;
					break;
				case "&gt":
					i.keyCode = 190;
					break;
				case "escape":
					i.keyCode = 27;
					break;
				case "enter":
					i.keyCode = 13;
					break;
				case "del":
				case "delete":
					i.keyCode = 46;
					break;
				case "alt":
					i.alt = true;
					break;
				case "ctrl":
				case "control":
					i.control = true;
					break;
				case "plus":
					j = "+";
				default:
					if (i.key) {
						return null
					}
					var n = j.charAt(0);
					if ("#" == n) {
						i.keyCode = parseInt(j.substring(1), 10)
					} else {
						i.key = j;
						if (1 == m) {
							i.keyCode = n.toUpperCase().charCodeAt(0)
						}
						break
					}
				}
			}
			return i
		},
		_listen: function() {
			if (this._isListening) {
				return
			}
			var d = $$("body");
			if (d && d.length) {
				var f = d[0];
				if (f.addEventListener) {
					f.addEventListener("keydown", this._keyDownHandler, true)
				} else {
					f.addEvent("keydown", this._keyDownHandler)
				}
				f.addEvent("keyup", this._keyUpHandler);
				this._isListening = true
			} else {
				var g = function() {
						window.removeEvent("load", g);
						this._listen()
					}.bind(this);
				window.addEvent("load", g)
			}
		},
		_equalKeySequences: function(c, d) {
			if (!c || !d) {
				return false
			}
			return c.key == d.key && c.control == d.control && c.alt == d.alt
		},
		_addBindingLayer: function(c) {
			var d = {
				name: c,
				keyUpBindingMap: {
					keys: {},
					keyCodes: {}
				},
				keyDownBindingMap: {
					keys: {},
					keyCodes: {}
				}
			};
			this._layersMap[c] = d;
			return d
		},
		_popBindingLayer: function() {
			var b = this._bindingLayers.length;
			if (b < 2) {
				return
			}
			this._bindingLayers.pop();
			this._currentBindingLayer = this._bindingLayers[b - 2]
		}
	}
});
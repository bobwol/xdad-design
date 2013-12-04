W.Experiments.setDeploymentOrder([{
	id: "Dev",
	dependencies: [],
	conflicts: []
}, {
	id: "FBShare",
	dependencies: [],
	conflicts: []
}, {
	id: "TPA",
	dependencies: [],
	conflicts: []
}, {
	id: "TPAButtons",
	dependencies: [],
	conflicts: []
}, {
	id: "SM",
	dependencies: ["TPAButtons", "TPA"],
	conflicts: []
}, {
	id: "MasterPage",
	dependencies: [],
	conflicts: []
}, {
	id: "MCM",
	dependencies: [],
	conflicts: []
}, {
	id: "GridLines",
	dependencies: [],
	conflicts: []
}, {
	id: "SocialPanel",
	dependencies: [],
	conflicts: []
}, {
	id: "URM",
	dependencies: [],
	conflicts: []
}, {
	id: "URMButtons",
	dependencies: [],
	conflicts: []
}, {
	id: "FPP",
	dependencies: [],
	conflicts: []
}, {
	id: "LazyShare",
	dependencies: [],
	conflicts: []
}, {
	id: "Staff",
	dependencies: [],
	conflicts: []
}, {
	id: "AdminLogin",
	dependencies: [],
	conflicts: []
}, {
	id: "Flash",
	dependencies: [],
	conflicts: []
}, {
	id: "PaginatedGrid",
	dependencies: [],
	conflicts: []
}, {
	id: "PayPal",
	dependencies: [],
	conflicts: []
}, {
	id: "ToolTip",
	dependencies: [],
	conflicts: []
}, {
	id: "PanelsData",
	dependencies: [],
	conflicts: []
}, {
	id: "StyleNS",
	dependencies: [],
	conflicts: []
}, {
	id: "Fullcolor",
	dependencies: [],
	conflicts: []
}, {
	id: "IframeDialog",
	dependencies: [],
	conflicts: []
}, {
	id: "Zoom",
	dependencies: [],
	conflicts: []
}, {
	id: "NewComps",
	dependencies: ["PanelsData", "ToolTip"],
	conflicts: []
}, {
	id: "WixApps",
	dependencies: [],
	conflicts: []
}, {
	id: "Ecom",
	dependencies: ["StyleNS", "IframeDialog", "Zoom", "NewComps", "PanelsData", "ToolTip", "WixApps"],
	conflicts: []
}, {
	id: "WalkMe",
	dependencies: [],
	conflicts: []
}, {
	id: "MultiLang",
	dependencies: [],
	conflicts: []
}, {
	id: "PagesDropDown",
	dependencies: [],
	conflicts: []
}, {
	id: "AudioPlayer",
	dependencies: [],
	conflicts: []
}, {
	id: "SliderAutoPlay",
	dependencies: [],
	conflicts: []
}, {
	id: "Lang_es",
	dependencies: [],
	conflicts: []
}, {
	id: "Lang_de",
	dependencies: [],
	conflicts: []
}, {
	id: "Lang_fr",
	dependencies: [],
	conflicts: []
}, {
	id: "Lang_it",
	dependencies: [],
	conflicts: []
}, {
	id: "Lang_pl",
	dependencies: [],
	conflicts: []
}, {
	id: "Lang_pt",
	dependencies: [],
	conflicts: []
}, {
	id: "Lang_ru",
	dependencies: [],
	conflicts: []
}, {
	id: "BoxShadow",
	dependencies: [],
	conflicts: []
}, {
	id: "ColorPicker",
	dependencies: [],
	conflicts: []
}, {
	id: "Fix3713",
	dependencies: [],
	conflicts: []
}]);
W.Experiments.registerExperimentComponent("MasterPage", "New", {
	name: "experiments.mobile.core.components.PageMasterPageNew",
	skinParts: {},
	Class: {
		Extends: "mobile.core.components.Page",
		render: function() {}
	}
});
W.Experiments.registerExperimentComponent("TPA", "New", {
	name: "experiments.mobile.core.components.PageTPANew",
	skinParts: {},
	Class: {
		Extends: "mobile.core.components.Page",
		getThirdPartyApplicationComponent: function() {
			var b = this._view.getElement("[comp*='TPASection']");
			return b.getLogic()
		},
		isThirdPartyApplicationPage: function() {
			if (this._data.get("tpaApplicationId")) {
				return true
			}
		}
	}
});
W.Experiments.registerExperimentManager("Ecom", "New", {
	name: "experiments.mobile.core.managers.ConfigurationManagerEcomNew",
	Class: {
		Extends: "mobile.core.managers.ConfigurationManager",
		getMediaStaticUrl: function(d) {
			var c = this.getServiceTopologyProperty("staticMediaUrl") + "/";
			if (/[^.]+$/.exec(d)[0] == "ico") {
				c = c.replace("media", "ficons")
			} else {
				if ((d).indexOf("_mi.") > 0) {
					c = c.replace("media", "micons")
				}
			}
			return c
		},
		getCurrentOrigin: function() {
			var b = "http://" + window.location.host;
			return b
		},
		getMetaSiteData: function() {
			return this.getEditorModelProperty("metaSiteData")
		},
		getPremiumFeatures: function() {
			var c = this.getRendererModelProperty("premiumFeatures");
			if (!c) {
				var d = this.getMetaSiteData();
				c = d && d.premiumFeatures
			}
			return c
		}
	}
});
W.Experiments.registerExperimentManager("Staff", "Wix", {
	name: "experiments.core.managers.CssManagerStaff",
	Class: {
		Extends: "mobile.core.managers.CssManager",
		_configureSystemFonts: function() {
			Constants.CSS.SYSTEM_FONTS["sans-serif"].push(["Helvetica Neue"]);
			Constants.CSS.SYSTEM_FONTS["sans-serif"].push(["Helvetica Neue Italic"]);
			Constants.CSS.SYSTEM_FONTS["sans-serif"].push(["Helvetica Neue Thin"]);
			Constants.CSS.SYSTEM_FONTS["sans-serif"].push(["Helvetica Neue Medium"]);
			this._systemFontsCssDefinition = {};
			this._systemFontsNames = [];
			this._addFontsLoaderCssTag(window.serviceTopology.publicStaticsUrl + "/css/Helvetica/fontFace.css");
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
		}
	}
});
W.Experiments.registerExperimentClass("Zoom", "New", {
	name: "experiments.mobile.core.managers.data.DataManager",
	Class: {
		Extends: "mobile.core.managers.data.DataManager",
		getDataItem: function(d, c) {
			if (typeof(d) == "string") {
				this.injects().Data.getDataByQuery(d, c)
			} else {
				c(d)
			}
		},
		getDataItemsList: function(c, d) {
			if (c.length > 0 && typeof(c[0]) == "string") {} else {}
		},
		getDataItemsByType: function(c) {
			var d = Object.values(this.dataMap);
			return Object.filter(d, function(a) {
				return a.getType() == c
			})
		}
	}
});
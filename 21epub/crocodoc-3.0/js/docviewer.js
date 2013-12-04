var CoreViewer = function(c) {

		var k = this;
		var y = jQuery;
		this.zoom = function(Q) {
			t(Q)
		};
		this.scrollTo = function(Q, R) {
			N(Q, R)
		};
		this.bind = function(Q, R) {
			y(k).bind(Q, R)
		};
		this.ready = function(Q) {
			console.log(F)
			F ? Q(P("ready")) : y(k).bind("ready", Q)
		};
		this.status = function() {
			return M
		};
		var h = null;
		var J = null;
		var o = null;
		var d = null;
		var b = null;
		var G = [];
		var K = null;
		var z = null;
		var e = 0;
		var w, p = null;
		var s = null;
		var I = {};
		var F = false;
		var E, D, v, O, C = null;
		var A = false;
		var u = false;
		var M = null;
		var g = function() {

				var U = y.fn.jquery.split(".");
				var V = parseInt(U[0], 10);
				var W = parseInt(U[1], 10);
				if (V !== 1 || W < 6) {
					throw new Error("Crocodoc: jQuery 1.6+ is required")
				} else {
					if (V === 1 && W >= 9 && !y.browser) {
						throw new Error("Crocodoc: jQuery.browser is required (https://github.com/jquery/jquery-migrate/)")
					}
				}
				console.log(_doc)
				h = _doc;
				var T = (h.status == 4);
				var S = (h.metadata != null && !T);
				var R = (h.pageStatuses.indexOf("0") == -1 && S);
				//J = y('<div class="doc"></div>').appendTo(y("#" + c.id).addClass("docviewer")).get(0);

				J = y('.doc')
				if (!R) {
					var Q = new StatusUpdater(J, h);
					y(Q).bind("statusupdate", m);
					y(k).bind("fail", r)
				}
				m({
					type: "statusupdate",
					viewable: S,
					failed: T,
					step: h.step,
					pages: h.pageStatuses
				})
			};
		var L = function() {
				o = h.assetsLocation;
				d = h.metadata;
				var aa = h.pageStatuses;
				var R = (h.pageStatuses.indexOf("0") == -1 && h.metadata && h.status != 4);
				var Z = (R) ? "full" : "init";
				var X = (y.browser.msie && y.browser.version <= 8) ? ("ie" + y.browser.version).substr(0, 3) : "std";
				var W = o + "css/" + X + "-" + Z + ".css";
				if (document.createStyleSheet) {
					document.createStyleSheet(W)
				} else {
					y("head").append('<link rel="stylesheet" href="' + W + '" type="text/css" />')
				}
				q();
				var S = d.defaults;
				for (var V = 0; V < d.numpages; V++) {
					var T = S.width;
					var ab = S.height;
					var Y = String(V + 1);
					if (Y in d.pages) {
						T = d.pages[Y].width;
						ab = d.pages[Y].height
					}
					var U = (T * CoreViewer.PXPT_RATIO) / 10;
					var ae = (ab * CoreViewer.PXPT_RATIO) / 10;
					// var ac = '<div class="page-outer" style="width:{width}em; height:{height}em;"><div id="Page{num}" class="page" style="width:{width}em; height:{height}em;"></div></div>';
					// ac = ac.replace(/{width}/g, U).replace(/{height}/g, ae).replace(/{num}/g, Y);
					// y(ac).appendTo(J);
					G.push([T, ab])
				}
				t(c.zoom);
				N(c.page || 1);
				b = new LazyLoader(J, aa, d, o);
				y(k).bind("zoom resize statusupdate", function(af) {
					y(b).triggerHandler(af)
				});
				y(b).bind("pagechange unavailable", function(af) {
					y(k).triggerHandler(af)
				});
				var ad = J.offsetWidth * J.offsetHeight;
				var Q = function() {
						var af = J.offsetWidth * J.offsetHeight;
						if (af && ad != af) {
							ad = af;
							n()
						}
					};
				y(window).resize(Q);
				setInterval(Q, 50);
				y(k).triggerHandler(P("ready"));
				F = true
			};
		var P = function(Q) {
				return {
					type: Q,
					numpages: d.numpages,
					zoom: z,
					trueZoom: K,
					zoomIn: w,
					zoomOut: p,
					zoomMode: s
				}
			};
		var q = function() {
				var T = false;
				var S = /Windows NT 5/.test(navigator.userAgent);
				var R = /(iPhone|iPod|iPad)/.test(navigator.userAgent);
				var U = !! ("ontouchstart" in window);
				var Q = true;
				if (y.browser.mozilla && y.browser.version.split(".")[0] >= 6 && !S) {
					T = true
				}
				if (y.browser.msie && y.browser.version.split(".")[0] >= 9 && !S) {
					T = true
				}
				if (U) {
					if (y.browser.webkit && y.browser.version < 534) {
						e = 0.8;
						Q = false
					}
				}
				if (T) {
					y(J).addClass("subpx")
				} else {
					if (!U) {
						y(J).addClass("no-subpx")
					} else {
						y(J).addClass("mobile");
						if (R && (y.browser.version < 536.26 || d.numpages > 32)) {
							y(J).addClass("no-inertia")
						}
						if (!Q) {
							y(J).addClass("no-subpx");
							y(J).bind("touchstart", H);
							y(J).bind("touchmove", B)
						} else {
							y(J).bind("gesturestart", a);
							y(J).bind("gesturechange", f);
							y(J).bind("gestureend", x);
							y(J).bind("touchmove", function() {
								if (A) {
									return false
								}
							})
						}
					}
				}
			};
		var N = function(S, U) {
				var R = null;
				if (S == "prev" && b.currentPage > 1) {
					R = b.currentPage - 1
				} else {
					if (S == "next" && b.currentPage < d.numpages) {
						R = b.currentPage + 1
					} else {
						if (typeof(S) == "number") {
							R = S
						}
					}
				}
				if (R) {
					var Q = (U || 0) * DocViewer.PXPT_RATIO * K;
					var T = y(J).scrollTop() + y("#Page" + R).parent().position().top + Q;
					y(J).scrollTop(Math.round(T))
				}
			};
		var t = function(S) {
				if (Number(S)) {
					s = null;
					l(Number(S))
				} else {
					if (S == "fitWidth") {
						s = "fitWidth";
						l(i("fitWidth"))
					} else {
						if (S == "fitHeight") {
							s = "fitHeight";
							l(i("fitHeight"))
						} else {
							if (S == "auto") {
								s = "auto";
								l(i("auto"))
							} else {
								if (S == "in" || S == "out") {
									var R = j(S);
									if (R.zoom) {
										s = R.mode;
										l(R.zoom)
									}
								} else {
									if (S == null) {
										if (!z) {
											s = null;
											var Q = i("auto");
											if (Q == i("fitWidth")) {
												s = "fitWidth"
											} else {
												if (Q == i("fitHeight")) {
													s = "fitHeight"
												}
											}
											l(Q)
										} else {
											if (s) {
												l(i(s))
											}
										}
									}
								}
							}
						}
					}
				}
			};
		var j = function(W) {
				var U = NaN;
				var S = {};
				var R = i("fitWidth");
				var X = i("fitHeight");
				if (e > 0) {
					S[e] = null
				}
				if (R >= e) {
					S[R] = "fitWidth"
				}
				if (X >= e) {
					S[X] = "fitHeight"
				}
				for (var T = 0; T < CoreViewer.ZOOM_LEVELS.length; T++) {
					var Q = CoreViewer.ZOOM_LEVELS[T];
					if (Q >= e) {
						S[CoreViewer.ZOOM_LEVELS[T]] = null
					}
				}
				var V = function(Z, aa) {
						return (W == "in") ? (Z > aa) : (Z < aa)
					};
				for (var Y in S) {
					if (V(Y, z) && !V(Y, U)) {
						U = Y
					}
				}
				return {
					zoom: U,
					mode: S[U]
				}
			};
		var l = function(Z) {
				if (b) {
					var V = b.visiblePages[0];
					var T = y("#Page" + V).offset().top - y(J).offset().top;
					var S = y(J).scrollLeft();
					var Q = y(".page-outer", J).width();
					var Y = y("#Page" + V).height()
				}
				z = Math.max(Z, e);
				if (y.browser.msie) {
					var R = 10 * z * (3 / 4);
					if (s) {
						var X = (z == i("fitHeight")) ? Math.ceil : Math.floor;
						if (y.browser.msie && y.browser.version <= 7) {
							R -= 0.025
						}
						R = X(R * 20) / 20
					}
					y(J).css("font-size", (R) + "pt");
					if (y.browser.msie && y.browser.version <= 7) {
						y(".page-outer", J).css("zoom", "normal").css("zoom", 1)
					}
				} else {
					y(J).css("font-size", (10 * z) + "px")
				}
				K = (y(".page").width() / G[0][0]) / CoreViewer.PXPT_RATIO;
				if (b) {
					var U = y("#Page" + V);
					var W = U.offset().top - y(J).offset().top + y(J).scrollTop();
					T *= (T > 0) ? 1 : U.height() / Y;
					y(J).scrollTop(W - T);
					S += (y(".page-outer", J).width() - Q) / 2;
					y(J).scrollLeft(S)
				}
				w = !isNaN(j("in")["zoom"]);
				p = !isNaN(j("out")["zoom"]);
				y(k).triggerHandler(P("zoom"))
			};
		var i = function(T) {
				if (T == "fitWidth") {
					var X = J.clientWidth || y(J).width() - 17;
					var S = (X < 750) ? 36 : y(".page-outer").outerWidth() - y(".page-outer").width();
					var Q = d.defaults.width * CoreViewer.PXPT_RATIO;
					return (X - S) / Q
				} else {
					if (T == "fitHeight") {
						var R = y(J).height();
						var S = y(".page-outer").outerHeight(true) - y(".page-outer").height();
						var W = d.defaults.height * CoreViewer.PXPT_RATIO;
						return (R - S) / W
					} else {
						if (T == "auto") {
							if (d.defaults.width > d.defaults.height) {
								var V = i("fitWidth");
								var U = i("fitHeight");
								return Math.min(V, U)
							} else {
								var V = i("fitWidth");
								return Math.min(1, V)
							}
						}
					}
				}
			};
		var m = function(Q) {
				if (!F && Q.viewable) {
					L()
				} else {
					if (Q.failed) {
						setTimeout(function() {
							y(k).triggerHandler("fail")
						}, 0)
					}
				}
				M = Q;
				y(k).triggerHandler(Q)
			};
		var r = function() {
				y(J).hide();
				var Q = '<div class="error-overlay"><div class="msg"><h3>Preview not Available</h3><p>An error occured while converting this document.</p></div></div>';
				y(Q).insertAfter(J)
			};
		var n = function() {
				if (s) {
					l(i(s))
				}
				w = !isNaN(j("in")["zoom"]);
				p = !isNaN(j("out")["zoom"]);
				y(k).triggerHandler(P("resize"))
			};
		var H = function(Q) {
				Q = Q.originalEvent;
				if (Q.touches.length == 1) {
					E = Q.touches[0].pageX;
					D = Q.touches[0].pageY;
					v = y(this).scrollTop();
					O = y(this).scrollLeft()
				}
			};
		var B = function(R) {
				R = R.originalEvent;
				if (R.touches.length == 1) {
					var Q = R.touches[0].pageX;
					var S = R.touches[0].pageY;
					y(this).scrollTop(v + (D - S));
					y(this).scrollLeft(O + (E - Q))
				}
				return false
			};
		var a = function(Q) {
				A = true;
				u = false
			};
		var f = function(Q) {
				if (!u) {
					Q = Q.originalEvent;
					if (Q.scale > 1.25) {
						t("in");
						u = true
					} else {
						if (Q.scale < 0.75) {
							t("out");
							u = true
						}
					}
				}
			};
		var x = function(Q) {
				A = false
			};
		g()
	};
CoreViewer.PXPT_RATIO = 110 / 72;
CoreViewer.ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
var DocViewer = CoreViewer;
var LazyLoader = function(l, a, n, d) {
		var q = this;
		var f = jQuery;
		this.visiblePages = [];
		this.currentPage = null;
		var b = [];
		var k = [];
		var s = [];
		var z = {};
		var u = [];
		var A = !! ("ontouchstart" in window);
		var c = function() {
				for (var F = 0; F < n.numpages; F++) {
					var D = (a.charAt(F) || "1") == "1";
					s.push(D ? 0 : -1)
				}
				viewersize = [f(l).width(), f(l).height()];
				t();
				f(l).scroll(B);
				f(q).bind("zoom", o);
				f(q).bind("resize", v);
				f(q).bind("statusupdate", m);
				f(l).append('<div class="font-loader"></div>');
				window.jsonp_PageLoaded = function(H, I, J) {
					if (true || location.search.indexOf("slow") == -1) {
						y(I, J)
					} else {
						setTimeout(function() {
							y(I, J)
						}, 1500)
					}
				};
				if (A) {
					if (a.indexOf("0") == -1) {
						var G = [];
						for (var F = 0; F < n.fonts.length; F++) {
							var E = n.fonts[F];
							G.push(E.id)
						}
						h(G)
					}
				}
				x(2500)
			};
		var B = function(E) {
				var D = f(l).scrollTop();
				setTimeout(function() {
					if (D == f(l).scrollTop()) {
						x()
					}
				}, 50)
			};
		var v = function() {
				x()
			};
		var o = function() {
				t();
				x()
			};
		var m = function(D) {
				C(D.pages)
			};
		var C = function(E) {
				for (var D = 0; D < n.numpages; D++) {
					if (s[D] == -1 && (E.charAt(D) || "1") == "1") {
						s[D] = 0
					}
				}
				x()
			};
		var t = function() {
				b = [];
				k = [];
				var J = f(l).scrollTop();
				var G = f(l).offset().top;
				var D = f(".page", l);
				for (var E = 0; E < D.length; E++) {
					var I = D[E];
					var H = f(I).offset().top - G + J;
					var F = H + f(I).height();
					b.push(H);
					k.push(F)
				}
			};
		var x = function(D) {
				var J = f(l).scrollTop();
				var I = J + f(l).height();
				var F = Math.max(0, e(b, (J + I) / 2));
				if (q.currentPage != F + 1) {
					q.currentPage = F + 1;
					f(q).trigger({
						type: "pagechange",
						page: q.currentPage
					});
					j(F)
				}
				var E = Math.min(n.numpages - 1, p(k, J));
				var H = Math.max(0, e(b, I));
				q.visiblePages = [];
				for (var G = E; G <= H; G++) {
					q.visiblePages.push(G + 1);
					j(G)
				}
				D = D || 1250;
				var E = Math.min(n.numpages - 1, p(k, J - D));
				var H = Math.max(0, e(b, I + D));
				for (var G = E; G <= H; G++) {
					j(G)
				}
				if (A) {
					r()
				}
				w()
			};
		var j = function(F) {
				if (s[F] == -1) {
					return false
				} else {
					if (s[F] < 1) {
						s[F] = 1;
						// var E = f("#Page" + (F + 1));
						// E.addClass("loading").append('<span class="loading-msg">Loading...</span>');
						// f.getScript(d + "doc." + F + ".js");
						// var J = E.attr("style");
						// var I = '<div class="layer img"><img class="bg-img" style="{style}" src="{loc}images/page-{index}.png" /></div>';
						// I = I.replace(/{style}/g, J).replace(/{index}/g, F).replace(/{loc}/g, d);
						// f(I).appendTo(E).error(function(K) {
							// f(q).trigger({
								// type: "unavailable",
								// page: F + 1
							// })
						// });
						var H = [];
						for (var G = 0; G < n.fonts.length; G++) {
							var D = n.fonts[G];
							if (D.first - 1 <= F && D.last - 1 >= F && !z[D.id]) {
								H.push(D.id)
							}
						}
						h(H)
					}
				}
			};
		var h = function(F) {
				for (var D = 0; D < F.length;
				D++) {
					var G = F[D];
					f(".font-loader").append('<span class="f' + G + '">&nbsp;</span>');
					z[G] = true
				}
				if (f.browser.msie && f.browser.version <= 8) {
					for (var D = 0; D < F.length;
					D++) {
						var G = F[D];
						var E = f(".font-loader .f" + G).css("font-family").replace(/['"]/g, "");
						if (E.slice(0, 1) != "f") {
							u.push(G)
						}
					}
				}
			};
		var w = function() {
				if (u.length > 0 && f.browser.msie && f.browser.version <= 8) {
					if (document.styleSheets.length == 30) {
						var G = [];
						for (var F = 0; F < n.fonts.length; F++) {
							if (!z[n.fonts[F].id]) {
								G.push(n.fonts[F].id)
							}
						}
						h(G)
					}
					var H = "";
					while (u.length > 0) {
						var I = u.pop(0);
						var D = d + "fonts/" + I + ".eot";
						H += ".f" + I + " { font-family: 'f" + I + "', sans-serif; } ";
						H += "@font-face { font-family: 'f" + I + "'; src: url('" + D + "'); } "
					}
					var E = document.createElement("style");
					E.setAttribute("type", "text/css");
					f("head").append(E);
					E.styleSheet.cssText = H
				}
			};
		var y = function(E, G) {
				var D = f("#Page" + (E + 1));
				f(".loading-msg", D).hide();
				var F = f(G).find(".layer.text");
				i(F);
				f(F).insertAfter(D.find(".layer.img"));
				s[E] = 2
			};
		var p = function(F, D) {
				for (var E = 0; E < F.length && F[E] < D; E++) {}
				return E
			};
		var e = function(F, D) {
				for (var E = F.length - 1;
				E >= 0 && F[E] > D; E--) {}
				return E
			};
		var i = function(F) {
				if (A) {
					var D = F.find(".tb");
					for (var E = 0; E < D.length; E++) {
						var H = D[E];
						var G = {
							top: 0,
							marginTop: 0
						};
						f(H).find(".ln").each(function() {
							var I = f(this).attr("style");
							I += "top:" + (G.top) + "em; ";
							I += "; position:absolute;";
							f(this).attr("style", I);
							var J = g(this);
							G.top += (J.height + J.marginTop)
						})
					}
				}
			};
		var g = function(H) {
				var J = {};
				var E = {
					left: /left:([\d\.\-]+)em/,
					top: /top:([\d\.\-]+)em/,
					width: /width:([\d\.\-]+)em/,
					height: /height:([\d\.\-]+)em/,
					marginLeft: /margin-left:([\d\.\-]+)em/,
					marginTop: /margin-top:([\d\.\-]+)em/
				};
				var G = f(H).attr("style");
				for (var F in E) {
					var I = E[F];
					var D = I.exec(G);
					var K = D ? Number(D[1]) : 0;
					J[F] = K
				}
				return J
			};
		var r = function() {
				for (var E = 1; E <= n.numpages;
				E++) {
					var D = (E >= q.currentPage - 3 && E <= q.currentPage + 3);
					f("#Page" + E).toggleClass("hidden", !D)
				}
			};
		c()
	};
var StatusUpdater = function(g, r) {
		var j = this;
		var e = jQuery;
		var f = null;
		var c = null;
		var a = 0;
		var o = 0;
		var l = false;
		var q = false;
		var d = typeof(window.io) !== "undefined" && typeof(window.io.connect) === "function";
		var h = null;
		if (d) {
			var i = r.socketioHost;
			var k = {
				transports: ["websocket", "xhr-polling"]
			};
			h = io.connect(i + "docstatus", k)
		}
		var b = function() {
				q = (r.status == 4);
				l = (r.metadata != null && !q);
				if (q) {
					return
				}
				p();
				if (d) {
					h.on("status", function(s) {
						s = JSON.parse(s);
						m(s)
					}).on("disconnect", function() {}).on("connect", function() {
						h.emit("subscribe", {
							session_string: r.session
						})
					}).on("subscribed", function() {
						n()
					}).on("connect_failed", function() {
						d = false;
						n()
					}).on("error", function() {
						d = false;
						n()
					})
				} else {
					setTimeout(n, 3000)
				}
			};
		var m = function(v) {
				var u = v.status;
				var y = v.pageStatuses || "";
				var x = v.metadata;
				var s = v.step;
				if ((u == 3 || u == 4) && h && h.socket) {
					h.socket.disconnect()
				}
				var t = (y.match(/1/g) || []).length;
				var A = {
					DOWNLOADING: 1,
					PROCESSING: 2,
					CONVERTING: 3,
					DONE: 4
				};
				var w = A[s] || 0;
				var z = 10 * u + w + t / 100000;
				if (z > o || (!r.metadata && x)) {
					o = Math.max(o, z);
					r.status = u;
					r.step = s;
					r.pageStatuses = y;
					r.metadata = x ? x : r.metadata;
					q = (r.status == 4);
					l = (r.metadata != null && !q);
					p();
					e(j).trigger({
						type: "statusupdate",
						viewable: l,
						failed: q,
						step: s,
						pages: y
					})
				}
			};
		var n = function() {
				var s = r.webserviceUrl;
				var t = s + "document/status?session=[session]&callback=?";
				t = t.replace("[session]", r.session);
				if (!r.metadata) {
					t += "&include-metadata=true"
				}
				e.getJSON(t, function(u) {
					m(u);
					if (!d) {
						if (r.status != 3 && r.status != 4) {
							if (a < 60) {
								a++;
								setTimeout(n, 3000)
							} else {
								e(j).trigger({
									type: "statusupdate",
									viewable: false,
									failed: true,
									step: null,
									pages: r.pageStatuses
								})
							}
						}
					}
				})
			};
		var p = function() {
				if (q) {
					e(c).hide()
				} else {
					if (l) {
						if (!f) {
							var u = '<div class="inc-loading" style="display:none;"><div class="msg">Processing page <span class="numerator">1</span>/<span class="denominator">1</span>...</div><div class="bar"><div class="progress"></div></div></div>';
							f = e(u).insertAfter(g).get(0)
						}
						e(c).hide();
						var s = r.pageStatuses;
						var v = s.length;
						var t = s.indexOf("0") + 1;
						if (t) {
							e(f).show();
							e(".denominator", f).text(v);
							e(".numerator", f).text(t);
							e(".progress", f).width("" + Math.round((t - 1) / v * 100) + "%")
						} else {
							e(".msg", f).text("Complete");
							e(".progress", f).width("100%");
							e(f).delay(2500).fadeOut()
						}
					} else {
						if (!c) {
							var u = '<div class="conversion-overlay"><div class="msg"><span>Generating preview</span></div></div>';
							c = e(u).insertAfter(g).get(0)
						}
					}
				}
			};
		b()
	};
var Annotator = function(J, d, t, s, f, G) {
		var l = this;
		var D = null;
		var x = null;
		var z = [];
		var A = {};
		var p = {};
		var j = null;
		var m = null;
		var u = null;
		var h = function() {
				D = J;
				x = DocViewer.PXPT_RATIO * D;
				var N = d.defaults;
				var O, K;
				for (var M = 0; M < d.numpages; M++) {
					var L = String(M + 1);
					if (L in d.pages) {
						O = d.pages[L].width;
						K = d.pages[L].height
					} else {
						O = N.width;
						K = N.height
					}
					z.push([O, K])
				}
				j = new CommentManager(t);
				$(j).bind({
					"update remove marginshow marginhide": function(Q) {
						$(l).triggerHandler(Q)
					},
					add: o,
					commentless: r
				});
				$(SelectManager).bind({
					"select deselect": function(Q) {
						I()
					}
				});
				u = new MouseEventSimulator(D);
				for (var M = 0; M < s.length; M++) {
					n(s[M])
				}
				var P = f.slice(0);
				P.sort(function(R, Q) {
					var S = R.annotation.y;
					var T = Q.annotation.y;
					return (S != T) ? (S - T) : (R.created - Q.created)
				});
				for (var M = 0; M < P.length; M++) {
					i(P[M], J)
				}
				$(l).bind({
					zoom: c,
					modechange: F,
					settingschange: B
				});
				$(".doc").on({
					mousedown: k,
					mouseup: w
				}, ".page");
				$(document).bind({
					mousedown: function(Q) {
						document.isLeftMouseButtonDown = true
					},
					mouseup: function(Q) {
						document.isLeftMouseButtonDown = false
					}
				})
			};
		var c = function(L) {
				D = L.trueZoom;
				x = DocViewer.PXPT_RATIO * D;
				for (var K in p) {
					var M = p[K];
					$(M).triggerHandler(L)
				}
				$(j).triggerHandler(L);
				$(u).triggerHandler(L)
			};
		var F = function(L) {
				m = L.mode;
				if (SelectManager.selected) {
					SelectManager.selected.deselect()
				}
				var K = $(".docviewer").removeAttr("color");
				switch (m) {
				case "comment-point":
					break;
				case "comment-text":
					break;
				case "comment-area":
					break;
				case "highlight":
					K.attr("color", G.highlight.color);
					var M = TextSelectionUtilities.getSelectionRange();
					if (M) {
						b({
							type: "highlight",
							selectionRange: M
						})
					}
					break;
				case "textbox":
					break;
				case "strikeout":
					break;
				case "drawing":
					break
				}
				I()
			};
		var B = function(M) {
				if (m == "highlight") {
					$(".docviewer").attr("color", G.highlight.color)
				}
				var N = SelectManager.selected;
				if (N) {
					var L = M.property.split(".")[0];
					var K = M.property.split(".")[1];
					if (N.annotation.type == L) {
						N.annotation[K] = M.value;
						N.update()
					}
				}
			};
		var k = function(L) {
				var K = $(document.activeElement);
				if (SelectManager.selected != null || K.is("textarea")) {
					return
				} else {
					if (K.attr("contenteditable") == "true") {
						return
					}
				}
				if (m == "comment-point") {
					b({
						type: "point",
						event: L,
						requireComment: true
					})
				} else {
					if (m == "textbox") {
						b({
							type: "textbox",
							event: L
						})
					} else {
						if (m == "comment-area" || m == "drawing") {
							$(document.body).one({
								"mousemove.drag": function(M) {
									v(L, M);
									return false
								},
								mouseup: function() {
									$(this).unbind("mousemove.drag")
								}
							});
							document.isLeftMouseButtonDown = true;
							return false
						} else {
							if ($(L.target).is("svg")) {
								$(document.body).addClass("buggy-pointer-events")
							}
						}
					}
				}
			};
		var w = function(K) {
				if (m == "highlight" || m == "comment-text" || m == "strikeout") {
					var L = TextSelectionUtilities.getSelectionRange();
					if (L) {
						if (m == "highlight") {
							b({
								type: "highlight",
								selectionRange: L
							})
						} else {
							if (m == "comment-text") {
								b({
									type: "highlight",
									selectionRange: L,
									requireComment: true
								})
							} else {
								if (m == "strikeout") {
									b({
										type: "strikeout",
										selectionRange: L
									})
								}
							}
						}
					}
				}
				if ($(document.body).hasClass("buggy-pointer-events")) {
					$(document.body).removeClass("buggy-pointer-events")
				}
			};
		var v = function(L, K) {
				if (m == "comment-area") {
					b({
						type: "area",
						event: L,
						moveEvent: K,
						requireComment: true
					})
				} else {
					if (m == "drawing") {
						$(document.body).addClass("drawing");
						b({
							type: "drawing",
							event: L,
							moveEvent: K
						})
					}
				}
			};
		var o = function(K) {
				var L = K.object;
				if (L.annotation.waiting) {
					delete L.annotation.waiting;
					H(L.annotation)
				}
				$(l).triggerHandler(K)
			};
		var r = function(L) {
				var K = L.annotation;
				var M = p[K.uuid];
				if (!M.removed) {
					if (K.type != "highlight") {
						M.remove()
					} else {
						if (!L.incomplete) {
							M.remove()
						} else {
							if (K.waiting) {
								M.remove()
							}
						}
					}
				}
			};
		var g = function(L) {
				var K = L.object;
				if (!K.incomplete && !K.waiting) {
					$(l).triggerHandler(L)
				}
			};
		var a = function(M) {
				var K = M.object;
				var O = p[K.uuid];
				var N = j.getComments(O);
				for (var L = 0; L < N.length; L++) {
					var P = N[L];
					j.remove(P)
				}
				delete p[K.uuid];
				if (!K.waiting) {
					$(l).triggerHandler(M)
				}
			};
		var q = function(K) {
				y(this.annotation)
			};
		var I = function() {
				var K = $(".docviewer").get(0);
				K.className = K.className.replace(/\b [\w-]+-mode\b/g, "");
				var M = true;
				if (SelectManager.selected && SelectManager.selected.annotation) {
					var L = SelectManager.selected.annotation;
					M = L.type == "drawing" && L.incomplete
				}
				if (M && m) {
					$(".docviewer").addClass(m + "-mode")
				}
			};
		var n = function(K) {
				var L = K.page;
				if (!(L in A)) {
					C(L)
				}
				if (N in p) {} else {
					var O = null;
					var N = K.uuid;
					var M = t ? ((t.uuid == K.owner.uuid) || t.admin) : false;
					switch (K.type) {
					case "point":
						O = new RenderedPoint(K, M, D, A[K.page]);
						break;
					case "area":
						O = new RenderedArea(K, M, D, A[K.page]);
						break;
					case "drawing":
						O = new RenderedDrawing(K, M, D, A[K.page]);
						break;
					case "highlight":
						O = new RenderedHighlight(K, M, D, u);
						break;
					case "strikeout":
						O = new RenderedStrikeout(K, M, D, u);
						break;
					case "textbox":
						O = new RenderedTextbox(K, M, D);
						break
					}
					p[N] = O;
					$(O).bind({
						update: g,
						remove: a,
						commentrequest: q,
						"select deselect": function(P) {
							$(l).triggerHandler(P)
						}
					});
					if (!K.incomplete) {
						H(K)
					}
					return O
				}
			};
		var H = function(K) {
				if (K.waiting) {
					y(K)
				} else {
					$(l).triggerHandler({
						type: "add",
						object: K
					})
				}
				I()
			};
		var b = function(aj, aa) {
				var ac = Model.createUuid();
				var P = Model.time();
				if (aj.event) {
					var af = aj.event;
					var ai = $(af.target).closest(".page");
					var O = ai.offset();
					var T = E((af.pageX - O.left) / x);
					var S = E((af.pageY - O.top) / x);
					var M = Number(ai.get(0).id.replace("Page", ""))
				}
				if (aj.moveEvent) {
					var af = aj.moveEvent;
					var ad = (af.pageX - O.left) / x;
					var L = (af.pageY - O.top) / x
				}
				var N = {
					"class": "Annotation",
					uuid: ac,
					created: P,
					modified: P,
					page: M,
					x: T,
					y: S,
					owner: t,
					unescaped: true
				};
				if (aj.type == "point") {
					$.extend(N, {
						type: "point"
					})
				} else {
					if (aj.type == "area") {
						var X = E(Math.max(0, ad - T));
						var Y = E(Math.max(0, L - S));
						$.extend(N, {
							type: "area",
							height: X,
							width: Y
						});
						N.incomplete = true
					} else {
						if (aj.type == "drawing") {
							var K = [
								[0, 0, ad - T, L - S]
							];
							$.extend(N, {
								type: "drawing",
								lines: K,
								color: G.drawing.color
							});
							N.incomplete = true
						} else {
							if (aj.type == "textbox") {
								var W = G.textbox.size;
								$.extend(N, {
									type: "textbox",
									y: S - 4,
									width: 0,
									height: W,
									size: W,
									color: G.textbox.color,
									fill: G.textbox.fill,
									content: ""
								});
								N.incomplete = true
							} else {
								if (aj.selectionRange) {
									var ak = aj.selectionRange;
									var U = ak.commonAncestorContainer || ak.parentElement();
									var ai = $(U).closest(".page");
									if (!ai) {
										return
									}
									var Z = TextSelectionUtilities.getContent(ak);
									if (Z.length > 1000 && !aa) {
										ConfirmDialog.show("Are you sure you want to highlight the selected text?", null, null, null, function(al) {
											if (al) {
												b(aj, true)
											}
										});
										return
									}
									var ae = TextSelectionUtilities.getRectanglesFromRange(ak);
									var ah = E(ae.x / x);
									var ag = E(ae.y / x);
									M = Number(ai.get(0).id.replace("Page", ""));
									var Q = ae.rectangles;
									for (var ab = 0; ab < Q.length; ab++) {
										var V = Q[ab];
										V.x = E(V.x / x);
										V.y = E(V.y / x);
										V.width = E(V.width / x);
										V.height = E(V.height / x)
									}
									$.extend(N, {
										x: ah,
										y: ag,
										page: M,
										rectangles: Q,
										content: Z
									});
									if (aj.type == "highlight") {
										$.extend(N, {
											type: "highlight",
											color: G.highlight.color
										})
									} else {
										if (aj.type == "strikeout") {
											$.extend(N, {
												type: "strikeout"
											})
										}
									}
								}
							}
						}
					}
				}
				if (aj.requireComment) {
					N.waiting = true
				}
				var R = n(N);
				if (N.incomplete) {
					$(R).one("complete", function() {
						H(N)
					})
				}
				if (N.waiting) {
					setTimeout(function() {
						R.select()
					}, 0)
				}
				if (aj.type == "strikeout") {
					e(N)
				}
			};
		var y = function(K) {
				var L = Model.createUuid();
				var M = Model.time();
				var N = {
					"class": "Comment",
					uuid: L,
					created: M,
					modified: M,
					annotation: K,
					content: "",
					owner: t
				};
				N.incomplete = true;
				i(N);
				setTimeout(function() {
					j.focus(N)
				}, 100)
			};
		var i = function(L) {
				var K = p[L.annotation.uuid];
				j.add(K, L)
			};
		var e = function(P) {
				var U = G.textbox.size;
				var O = "FF0000";
				var T = "FFFFFF";
				var K = Model.createUuid();
				var M = Model.time();
				var Q = P.page;
				var S = P.rectangles[0].x;
				var R = P.rectangles[0].y - U - 4;
				var N = {
					"class": "Annotation",
					type: "textbox",
					uuid: K,
					created: M,
					modified: M,
					page: Q,
					x: S,
					y: R,
					width: 0,
					height: U,
					size: U,
					color: O,
					fill: T,
					content: "",
					owner: t,
					unescaped: true
				};
				N.incomplete = true;
				var L = n(N);
				$(L).one("complete", function() {
					H(N);
					var V = p[P.uuid];
					V.renderedTextbox = L
				})
			};
		var C = function(K) {
				var L = $("#Page" + K);
				$('<div class="layer highlights"></div>').appendTo(L);
				$('<div class="layer strikeouts"></div>').appendTo(L);
				var N = $('<div class="layer annotations"></div>').appendTo(L).get(0);
				var M = Raphael(N, "100%", "100%");
				$(M.canvas).css("overflow", "visible");
				A[K] = M
			};
		var E = function(K, L) {
				return Math.round(K * 100) / 100
			};
		h()
	};
var RenderedAnnotation = function(b, e) {
		var d = this;
		this.annotation = b;
		this.editable = e;
		this.selected = false;
		this.removed = false;
		this.hasComments = false;
		this.anchorLocation = {
			x: null,
			y: null
		};
		this.tooltipLocation = {
			x: null,
			y: null
		};
		this.remove = function() {
			d.removed = true;
			if (d.selected) {
				d.deselect()
			}
			SelectManager.unregister(d);
			$(d).triggerHandler({
				type: "remove",
				object: d.annotation
			})
		};
		this.select = function() {
			d.selected = true;
			$(d).triggerHandler({
				type: "select",
				object: d.annotation
			})
		};
		this.deselect = function() {
			d.selected = false;
			$(d).triggerHandler({
				type: "deselect",
				object: d.annotation
			})
		};
		var a = function() {
				$(d).bind({
					setattach: c,
					setdetach: f
				});
				SelectManager.register(d)
			};
		var c = function(g) {
				d.hasComments = true
			};
		var f = function(g) {
				d.hasComments = false
			};
		a()
	};
var SelectManager = new(function() {
	var b = this;
	this.selected = null;
	this.selectEvent = {};
	this.register = function(e) {
		d(e)
	};
	this.unregister = function(e) {
		c(e)
	};
	var a = function() {
			$(".docviewer").bind({
				mousedown: function(f) {
					if (b.selected) {
						if (f.pageX != b.selectEvent.pageX || f.pageY != b.selectEvent.pageY) {
							b.selected.deselect()
						}
					}
				}
			});
			$(document).bind({
				keydown: function(i) {
					if (b.selected) {
						var h = $(document.activeElement);
						if ((i.which == 46 || i.which == 8) && !h.is("textarea") && !h.attr("contenteditable")) {
							var f = b.selected.annotation.type;
							if (b.selected.hasComments) {
								var g = "Delete this comment?"
							} else {
								if (f == "drawing") {
									var g = "Delete this drawing?"
								} else {
									if (f == "strikeout") {
										var g = "Delete this strikeout?"
									} else {
										if (f == "textbox") {
											var g = "Delete this text box?"
										} else {
											if (f == "highlight") {
												var g = "Delete this highlight?"
											}
										}
									}
								}
							}
							ConfirmDialog.show(g, null, null, null, function(e) {
								if (e) {
									b.selected.remove()
								}
							});
							return false
						}
					}
				}
			})
		};
	var d = function(e) {
			$(e).bind({
				"mousedown.selectmanager": function(f) {
					b.selectEvent = f;
					if (e == b.selected) {
						return
					}
					if (b.selected) {
						b.selected.deselect()
					}
					e.select()
				},
				"deselect.selectmanager": function() {
					if (b.selected == e) {
						b.selected = null
					}
					$(b).triggerHandler({
						type: "deselect"
					})
				},
				"select.selectmanager": function() {
					if (b.selected && b.selected != e) {
						b.selected.deselect()
					}
					b.selected = e;
					$(b).triggerHandler({
						type: "select"
					})
				}
			})
		};
	var c = function(e) {
			$(e).unbind("mousedown.selectmanager").unbind("deselect.selectmanager").unbind("select.selectmanager")
		};
	a()
})();
var MouseEventSimulator = function(m) {
		var o = this;
		this.register = function(q) {
			l(q)
		};
		var n;
		var f = {};
		var d = {};
		var p = null;
		var k = {};
		var e = function() {
				n = m;
				$(o).bind("zoom", function(q) {
					n = q.trueZoom
				})
			};
		var l = function(x) {
				var q = x.annotation.page;
				if (!f[q]) {
					i(q)
				}
				var v = x.annotation.uuid;
				var u = x.annotation.rectangles;
				var s = Math.min.apply(this, $.map(u, function(y) {
					return y.x
				}));
				var w = Math.min.apply(this, $.map(u, function(y) {
					return y.y
				}));
				var r = Math.max.apply(this, $.map(u, function(y) {
					return y.x + y.width
				}));
				var t = Math.max.apply(this, $.map(u, function(y) {
					return y.y + y.height
				}));
				d[q][v] = {
					x0: s,
					y0: w,
					x1: r,
					y1: t,
					rectangles: u,
					target: x
				};
				$(x).bind("remove", function() {
					delete d[q][v];
					if (p == x) {
						p = null
					}
				})
			};
		var i = function(q) {
				var r = $("#Page" + q);
				r.on({
					mousedown: function(s) {
						b(s, q, r)
					},
					mousemove: function(s) {
						h(s, q, r)
					},
					mouseleave: function(s) {
						g(s, q, r)
					},
					contextmenu: function(s) {
						return j(s, q, r)
					}
				});
				f[q] = true;
				d[q] = []
			};
		var b = function(s, q, r) {
				if (p && s.pageX == k.pageX && s.pageY == k.pageY) {
					$(p).triggerHandler({
						type: "mousedown",
						pageX: s.pageX,
						pageY: s.pageY,
						which: s.which
					})
				}
			};
		var h = function(s, q, r) {
				var t = a(s, q, r);
				if (p && t != p && !document.isLeftMouseButtonDown) {
					$(p).triggerHandler({
						type: "mouseleave",
						pageX: s.pageX,
						pageY: s.pageY
					})
				}
				if (t && t != p && !document.isLeftMouseButtonDown) {
					$(t).triggerHandler({
						type: "mouseenter",
						pageX: s.pageX,
						pageY: s.pageY
					})
				}
				p = t;
				k = s
			};
		var g = function(s, q, r) {
				if (p) {
					$(p).triggerHandler({
						type: "mouseleave",
						pageX: s.pageX,
						pageY: s.pageY
					})
				}
				p = null;
				k = s
			};
		var j = function(s, q, r) {
				if (p && s.pageX == k.pageX && s.pageY == k.pageY) {
					$(p).triggerHandler({
						type: "contextmenu",
						pageX: s.pageX,
						pageY: s.pageY,
						which: s.which
					});
					return false
				}
			};
		var a = function(v, A, z) {
				var t = z.offset();
				var s = DocViewer.PXPT_RATIO * n;
				var B = (v.pageX - t.left) / s;
				var w = (v.pageY - t.top) / s;
				var u = d[A];
				for (var q in u) {
					var r = u[q];
					if (B >= r.x0 && B <= r.x1 && w >= r.y0 && w <= r.y1) {
						if (c(r.rectangles, B, w)) {
							return r.target
						}
					}
				}
			};
		var c = function(u, t, q) {
				for (var s = 0; s < u.length; s++) {
					var v = u[s];
					if (t >= v.x && t <= v.x + v.width && q >= v.y && q <= v.y + v.height) {
						return v
					}
				}
			};
		e()
	};
var ContextMenu = function(e, d) {
		var c = this;
		this.show = function(h, i) {
			b(h, i);
			return this
		};
		this.setItemVisibility = function(i, h) {
			g(i, h);
			return this
		};
		var f = null;
		var a = function() {
				f = $("." + e);
				if (!f.get(0)) {
					var k = '<div class="context-menu ' + e + '" style="display:none;"></div>';
					f = $(k).appendTo($(".docviewer"));
					f.mousedown(function() {
						return false
					});
					for (var j = 0; j < d.length; j++) {
						var l = d[j];
						var h = $('<div class="item ' + l.className + '" action="' + l.action + '">' + l.text + "</div>");
						f.append(h);
						h.click(function() {
							var i = $(this).attr("action");
							var m = f.data("target");
							if (m) {
								$(m).triggerHandler({
									type: "click",
									action: i
								})
							}
							f.hide();
							return false
						})
					}
				}
			};
		var b = function(h, i) {
				f.data("target", c);
				f.css("top", i + "px").css("left", h + "px").show();
				$(document.body).one("mousedown", function() {
					f.hide()
				})
			};
		var g = function(i, h) {
				f.find(".item." + i).toggle(h)
			};
		a()
	};
var CommentManager = function(c) {
		var h = this;
		this.emphasizedCommentSet = null;
		this.add = function(j, k) {
			g(j, k)
		};
		this.remove = function(j) {
			e(j)
		};
		this.focus = function(j) {
			i(j)
		};
		this.getComments = function(j) {
			return a(j)
		};
		var b = {};
		var f = false;
		var d = function() {
				$(h).bind("commentless", function(j) {
					if ($(".comment-set").length == 0 && f) {
						$(".doc").removeClass("show-margins");
						$(h).triggerHandler("marginhide");
						f = false
					}
				})
			};
		var g = function(l, m) {
				if (!f) {
					$(".doc").addClass("show-margins");
					$(h).triggerHandler("marginshow");
					f = true
				}
				var j = l.annotation.page;
				var k = b[j];
				if (!k) {
					k = new PageMargin(j, c);
					b[j] = k;
					$(k).bind({
						"add update remove commentless": function(n) {
							$(h).triggerHandler(n)
						},
						"emphasize.commentmanager": function(n) {
							if (h.emphasizedCommentSet && h.emphasizedCommentSet != n.commentSet) {
								h.emphasizedCommentSet.unemphasize();
								h.emphasizedCommentSet.blur()
							}
							h.emphasizedCommentSet = n.commentSet
						},
						"unemphasize.commentmanager": function(n) {
							if (h.emphasizedCommentSet == n.commentSet) {
								h.emphasizedCommentSet = null
							}
						}
					});
					$(h).bind("zoom", function(n) {
						$(k).triggerHandler(n)
					})
				}
				k.add(l, m)
			};
		var e = function(k) {
				var j = b[k.annotation.page];
				j.remove(k)
			};
		var i = function(k) {
				var j = b[k.annotation.page];
				j.focus(k)
			};
		var a = function(l) {
				var k = l.annotation.page;
				if (k in b) {
					var j = b[k];
					return j.getComments(l)
				} else {
					return []
				}
			};
		d()
	};
var PageMargin = function(r, t) {
		var m = this;
		this.add = function(u, v) {
			l(u, v)
		};
		this.remove = function(u) {
			s(u)
		};
		this.focus = function(u) {
			n(u)
		};
		this.getComments = function(u) {
			return h(u)
		};
		var f = null;
		var b = {};
		var o = [];
		var q = null;
		var g = null;
		var p = null;
		var c = function() {
				q = $("#Page" + r).parent();
				p = $('<div class="comment-lines"></div>').appendTo(q);
				f = Raphael(p.get(0), "100%", "100%");
				$(f.canvas).css("overflow", "visible");
				g = $('<div id="PageMargin' + r + '" class="page-margin"></div>').appendTo(q);
				$(m).bind("zoom", function(u) {
					k(u)
				})
			};
		var l = function(v, x) {
				var w = b[v.annotation.uuid];
				if (!w) {
					w = new CommentSet(v, t, f);
					w.move(a(w));
					b[v.annotation.uuid] = w;
					o.push(w);
					o.sort(PageMargin.setSorter);
					$(w).bind({
						heightchange: j,
						destroy: e,
						"add update remove": function(y) {
							$(m).triggerHandler(y)
						},
						"emphasize.pagemargin": function(y) {
							$(m).triggerHandler({
								type: "emphasize",
								commentSet: w
							})
						}
					});
					$(v).bind("update", i)
				}
				w.add(x);
				for (var u = 0; u < o.length; u++) {
					d(o[u])
				}
			};
		var s = function(v) {
				var u = b[v.annotation.uuid];
				u.remove(v)
			};
		var n = function(v) {
				var u = b[v.annotation.uuid];
				u.focus(v)
			};
		var h = function(v) {
				var u = v.annotation.uuid;
				if (u in b) {
					var w = b[v.annotation.uuid];
					return w.getComments()
				} else {
					return []
				}
			};
		var j = function() {
				var u = $.inArray(this, o);
				for (var v = u + 1; v < o.length; v++) {
					var x = o[v];
					var w = d(x);
					if (!w) {
						break
					}
				}
				if (u == o.length - 1) {
					g.height(this.y + this.height);
					p.height(g.height());
					q.css("min-height", g.height() - 20 + "px")
				}
			};
		var i = function() {
				var v = b[this.annotation.uuid];
				if (v && v.updateNeeded()) {
					o.sort(PageMargin.setSorter);
					for (var u = 0; u < o.length; u++) {
						var v = o[u];
						d(v)
					}
				}
			};
		var e = function(y) {
				var x = this.renderedAnnotation.annotation.uuid;
				delete b[x];
				var w = $.inArray(this, o);
				if (w == o.length - 1) {
					var v = (w > 0) ? o[w - 1] : null;
					if (v) {
						g.height(v.y + v.height);
						p.height(g.height());
						q.css("min-height", g.height() - 20 + "px")
					} else {
						g.height("100%");
						p.height(g.height());
						q.css("min-height", "none")
					}
				}
				o.splice(w, 1);
				var u = this.renderedAnnotation.annotation;
				$(m).triggerHandler({
					type: "commentless",
					annotation: u,
					incomplete: y.incomplete
				})
			};
		var k = function(v) {
				for (var u = 0; u < o.length; u++) {
					var w = o[u];
					d(w)
				}
			};
		var d = function(z) {
				var x = z.y;
				var w = $.inArray(z, o);
				var v = (w > 0) ? o[w - 1] : null;
				var u = z.renderedAnnotation.anchorLocation;
				if (v && v.y + v.height > u.y) {
					z.move(v.y + v.height)
				} else {
					z.move(u.y)
				}
				if (w == o.length - 1) {
					g.height(z.y + z.height);
					p.height(g.height());
					q.css("min-height", g.height() - 20 + "px")
				}
				var y = (x != z.y);
				return y
			};
		var a = function(x) {
				var w = x.renderedAnnotation.anchorLocation.y;
				for (var u = 0; u < o.length; u++) {
					var x = o[u];
					var v = (u + 1 < o.length) ? o[u + 1] : null;
					if (w >= x.renderedAnnotation.anchorLocation.y) {
						if (!v || w <= v.renderedAnnotation.anchorLocation.y) {
							if (x.y + x.height > w) {
								return x.y + x.height
							} else {
								if (x.y >= w) {
									return w
								}
							}
						}
					}
				}
				return w
			};
		c()
	};
PageMargin.setSorter = function(d, c) {
	var f = d.renderedAnnotation.anchorLocation.y;
	var e = c.renderedAnnotation.anchorLocation.y;
	return f - e
};
var CommentSet = function(l, C, c) {
		var o = this;
		this.renderedAnnotation = l;
		this.y = null;
		this.height = 0;
		this.anchorLocation = null;
		this.add = function(D) {
			m(D)
		};
		this.remove = function(D) {
			z(D)
		};
		this.move = function(D) {
			r(D)
		};
		this.focus = function(D) {
			p(D)
		};
		this.unemphasize = function() {
			u()
		};
		this.blur = function() {
			s()
		};
		this.getComments = function() {
			return f()
		};
		this.updateNeeded = function() {
			return v()
		};
		var k = null;
		var t = null;
		var j = true;
		var n = false;
		var b = false;
		var a = function() {
				o.y = l.anchorLocation.y;
				o.anchorLocation = $.extend({}, l.anchorLocation);
				var D = l.annotation.page;
				var F = '<div class="comment-set incomplete"><div class="comments"></div><div class="menu"><span class="reply">Reply</span><span class="delete">Delete</span></div></div>';
				k = $(F).appendTo($("#PageMargin" + D));
				k.css("top", o.y + "px");
				g();
				var I = function() {
						n = true;
						k.addClass("hover");
						x();
						$(l).triggerHandler("emphasize")
					};
				var E = function() {
						n = false;
						k.removeClass("hover");
						u();
						if (!b) {
							$(l).triggerHandler("unemphasize")
						}
					};
				k.hover(I, E);
				var G = function() {
						t.hide()
					};
				var H = function() {
						t.show()
					};
				var J = function() {
						u();
						s()
					};
				$(l).bind({
					"dragstart.commentset": G,
					"dragstop.commentset": H,
					"select.commentset": x,
					"deselect.commentset": J,
					"mouseenter.commentset": x,
					"mouseleave.commentset": u
				});
				$(o).bind("destroy", function() {
					$(l).unbind("dragstart.commentset").unbind("dragstop.commentset").unbind("mouseenter.commentset").unbind("mouseleave.commentset").unbind("select.commentset").unbind("deselect.commentset")
				});
				if (l.selected) {
					x()
				}
				if (C) {
					k.addClass("editable");
					k.on({
						focus: y,
						blur: d,
						keydown: h
					}, ".comment.editable");
					k.find(".delete").click(q);
					k.find(".reply").click(i);
					if ((l.annotation.owner.uuid == C.uuid) || C.admin) {
						k.addClass("removable")
					}
				}
				$(l).triggerHandler("setattach")
			};
		var y = function() {
				var D = $(this).data("comment");
				if ((D.owner.uuid == C.uuid) || C.admin) {
					b = true;
					$(l).triggerHandler("emphasize");
					$(this).addClass("editing").find(".content").attr("spellcheck", true);
					k.addClass("editing-child");
					x()
				}
			};
		var d = function(F) {
				if ($(this).is(".removed")) {
					return
				}
				if ($(document.activeElement).closest(".comment-set").get(0) == k.get(0)) {
					return false
				}
				var G = $(this).data("comment");
				$(this).removeClass("editing").find(".content").attr("spellcheck", false);
				if (!k.find(".editing").get(0)) {
					b = false;
					k.removeClass("editing-child");
					$(l).triggerHandler("unemphasize");
					u()
				}
				var E = $(this).find(".content");
				var D = $.trim($(this).find(".content").val());
				if (D.length != $(this).find(".content").val().length) {
					E.val(D);
					if (!$.browser.msie) {
						E.height(0)
					}
					E.css("height", E.get(0).scrollHeight + 16)
				}
				if (D == "") {
					z(G)
				} else {
					if (D != G.content) {
						G.content = D;
						G.unescaped = true;
						if (!G.incomplete) {
							$(o).triggerHandler({
								type: "update",
								object: G
							})
						} else {
							delete G.incomplete;
							if (j) {
								j = false;
								k.removeClass("incomplete")
							}
							$(o).triggerHandler({
								type: "add",
								object: G
							})
						}
					}
				}
			};
		var h = function(F) {
				var E = $(".content", this);
				var D = E.val().length;
				setTimeout(function() {
					if (!$.browser.msie) {
						E.height(0)
					}
					E.css("height", E.get(0).scrollHeight + 16);
					e()
				}, 0)
			};
		var q = function() {
				k.removeClass("hover");
				var F = k.offset();
				var D = F.left;
				var G = F.top + o.height;
				var E = "Delete " + ((o.getComments().length == 1) ? "this comment?" : "these comments?");
				ConfirmDialog.show(E, D, G, 230, function(H) {
					if (H) {
						B()
					}
				})
			};
		var B = function() {
				k.find(".comment").each(function() {
					var D = $(this).data("comment");
					if (!D.incomplete) {
						$(o).triggerHandler({
							type: "remove",
							object: D
						})
					}
				});
				w()
			};
		var i = function() {
				var E = Model.createUuid();
				var F = Model.time();
				var D = l.annotation;
				var G = {
					"class": "Comment",
					uuid: E,
					created: F,
					modified: F,
					annotation: D,
					content: "",
					owner: C
				};
				G.incomplete = true;
				m(G);
				p(G)
			};
		var z = function(D) {
				$("#" + D.uuid).addClass("removed").remove();
				if (!D.incomplete) {
					$(o).triggerHandler({
						type: "remove",
						object: D
					})
				}
				if (!k.find(".comment").get(0)) {
					w()
				} else {
					e()
				}
			};
		var p = function(E) {
				var D = $("#" + E.uuid);
				D.find(".content").focus()
			};
		var f = function() {
				var D = [];
				k.find(".comment").each(function() {
					var E = $(this).data("comment");
					D.push(E)
				});
				return D
			};
		var x = function() {
				if (b || l.selected) {
					$(o).triggerHandler({
						type: "emphasize"
					})
				}
				t.addClass("emphasized");
				k.addClass("emphasized");
				A()
			};
		var s = function() {
				k.find("textarea:focus").blur()
			};
		var u = function() {
				if (!b && !n && !l.selected) {
					t.removeClass("emphasized");
					k.removeClass("emphasized");
					A()
				}
			};
		var w = function() {
				t.remove();
				k.remove();
				e();
				$(o).triggerHandler({
					type: "destroy",
					incomplete: j
				});
				$(l).triggerHandler("setdetach")
			};
		var r = function(D) {
				if (o.y != D || v()) {
					o.y = D;
					k.css("top", o.y + "px");
					o.anchorYCoord = l.anchorLocation.y;
					g()
				}
				if (v()) {
					o.anchorLocation = $.extend({}, l.anchorLocation)
				}
			};
		var v = function() {
				var E = o.anchorLocation;
				var D = l.anchorLocation;
				return (E.x != D.x || E.y != D.y)
			};
		var m = function(J) {
				var G = J.uuid;
				var D = $("#" + G, k);
				if (D.get(0)) {} else {
					var F = '<div id="' + G + '" class="comment"><span class="owner" /></div>';
					D = $(F).data("comment", J);
					$(".owner", D).text(J.owner.name.unescapeHTML() + ": ");
					var E = C ? ((J.owner.uuid == C.uuid) || C.admin) : false;
					if (E) {
						D.addClass("editable")
					}
					D.appendTo(k.find(".comments"));
					if (E) {
						var F = '<textarea class="content" spellcheck="false" rows="1" />';
						var I = $(F).css("text-indent", ($(".owner", D).width() + 3) + "px");
						I.val(J.content.unescapeHTML());
						if ($.browser.msie && $.browser.version <= 7) {
							I.attr("rows", 100)
						}
						D.append(I);
						if (!J.content && $.browser.webkit) {
							I.val(" ")
						}
						I.css("height", (I.get(0).scrollHeight + 16))
					} else {
						var F = '<div class="content" />';
						var I = $(F).css("text-indent", ($(".owner", D).width() + 3) + "px");
						var H = J.content.unescapeHTML().replace(/\n/g, "\u200B");
						var F = $("<div />").text(H).html().replace(/\u200B/g, "<br>");
						I.html(F);
						D.append(I)
					}
					if (!J.incomplete) {
						$(o).triggerHandler({
							type: "add",
							object: J
						});
						if (j) {
							j = false;
							k.removeClass("incomplete")
						}
					}
				}
				e()
			};
		var g = function() {
				if (!t) {
					t = c.path();
					t.attr({
						stroke: "#E7C054",
						"stroke-width": 2,
						"stroke-dasharray": "."
					})
				}
				var E = l.annotation.page;
				var F = $("#Page" + E).width();
				var J = l.anchorLocation;
				var H = {
					x: F + 4,
					y: J.y
				};
				var G = {
					x: F + 18,
					y: o.y
				};
				var D = {
					x: F + 20,
					y: o.y
				};
				var I = [
					["M", J.x, J.y],
					["L", H.x, H.y],
					["L", G.x, G.y],
					["L", D.x, D.y]
				];
				t.attr("path", I)
			};
		var A = function() {
				if (t.hasClass("emphasized")) {
					var D = ($.browser.msie && $.browser.version <= 8) ? " " : "";
					t.attr({
						"stroke-dasharray": D
					})
				} else {
					t.attr({
						"stroke-dasharray": "."
					})
				}
			};
		var e = function() {
				var D = k.outerHeight(true) || 0;
				if (D != o.height) {
					o.height = D;
					$(o).triggerHandler("heightchange")
				}
			};
		a()
	};
var ConfirmDialog = function() {
		var b = this;
		var d = false;
		this.show = function(g, e, j, h, i) {
			if (!d) {
				a()
			}
			h = h || 210;
			$(".overlay").show();
			var f = $(".confirm-dialog");
			f.find(".message").html(g);
			if (e && j) {
				f.css({
					width: h + "px",
					left: e + "px",
					top: j + "px",
					"margin-left": "0",
					"margin-top": "0"
				}).show()
			} else {
				f.css({
					width: h + "px",
					left: "50%",
					top: "50%",
					"margin-left": (-h / 2) + "px"
				}).show().css("margin-top", (-f.height() / 2) + "px")
			}
			if (f.outerHeight() + j + 6 > $(window).height()) {
				f.css("top", ($(window).height() - f.outerHeight() - 6) + "px").show()
			}
			if (f.outerWidth() + e + 6 > $(window).width()) {
				f.css("left", ($(window).width() - f.outerWidth() - 6) + "px").show()
			}
			f.find(".ok").unbind("click").click(function() {
				c();
				i(true)
			}).focus();
			f.find(".cancel").unbind("click").click(function() {
				c();
				i(false)
			})
		};
		var c = function() {
				$(".overlay").hide();
				$(".confirm-dialog").hide()
			};
		var a = function() {
				var e = '<div class="confirm-dialog" style="display:none;"><div class="inner"><div class="message"></div><div class="buttons"><button class="ok">OK</button><button class="cancel">Cancel</button></div></div></div>';
				$(e).appendTo(document.body);
				var e = '<div class="overlay" style="display:none;"></div>';
				$(e).appendTo(document.body);
				d = true
			}
	};
ConfirmDialog = new ConfirmDialog();
var DocViewer = function(d) {
		var k = new CoreViewer(d);
		k.mode = function(l) {
			a(l)
		};
		k.settings = function(m, l) {
			if (!m) {
				return c
			} else {
				i(m, l)
			}
		};
		k.scrollToAnnotation = function(l) {
			j(l)
		};
		var h = null;
		var c = null;
		var g = null;
		var b = null;
		var e = null;
		var f = function(n) {
				var m = _doc;
				editable = _doc.editable;
				g = new Model(m.objects, m.session, m.demo);
				e = g.get(m.user);
				c = $.extend(true, {}, DocViewer.DEFAULT_SETTINGS);
				if ($.browser.msie) {
					$(".docviewer").addClass("no-pointer-events")
				}
				var l = g.filter({
					"class": "Annotation"
				});
				var o = g.filter({
					"class": "Comment"
				});
				b = new Annotator(n.trueZoom, m.metadata, e, l, o, c);
				$(k).bind("zoom resize modechange settingschange", function(p) {
					$(b).triggerHandler(p)
				});
				$(b).bind({
					"marginshow marginhide": function(p) {
						k.zoom()
					},
					"add update remove": function(p) {
						$(g).triggerHandler(p);
						$(k).triggerHandler(p)
					},
					"select deselect": function(p) {
						$(k).triggerHandler(p)
					}
				});
				$(g).bind("ajaxerror", function(q, p) {
					switch (p) {
					case 403:
						alert("An error occurred while updating your document. This session has expired.");
						break;
					case 400:
						alert("An error occurred while updating your document. Please refresh this page and try re-adding your edit.");
						break
					}
				});
				if (o) {
					k.zoom()
				}
			};
		var a = function(l) {
				if (true || h != l) {
					h = l;
					$(k).triggerHandler({
						type: "modechange",
						mode: h
					})
				}
			};
		var i = function(o, n) {
				var m = o.split(".")[0];
				var l = o.split(".")[1];
				c[m][l] = n;
				$(k).triggerHandler({
					type: "settingschange",
					property: o,
					value: n
				})
			};
		var j = function(m) {
				var l = g.get(m);
				k.scrollTo(l.page, l.y - 25)
			};
		k.ready(f);
		return k
	};
DocViewer.PXPT_RATIO = CoreViewer.PXPT_RATIO;
DocViewer.ZOOM_LEVELS = CoreViewer.ZOOM_LEVELS;
DocViewer.HIGHLIGHT_COLORS = ["FFF688", "FCCC6A", "BFF694", "98DDFF"];
DocViewer.DRAWING_COLORS = ["000000", "FF0000", "0000FF", "00AA00"];
DocViewer.TEXTBOX_COLORS = ["000000", "FF0000", "0000FF", "00AA00"];
DocViewer.TEXTBOX_SIZES = [8, 10, 12, 14, 18, 24, 36];
DocViewer.DEFAULT_SETTINGS = {
	drawing: {
		color: "000000"
	},
	highlight: {
		color: "FFF688"
	},
	textbox: {
		color: "000000",
		size: 10,
		fill: null
	}
};
var Model = function(c, a, k) {
		var l = this;
		this.get = function(t) {
			return r(t)
		};
		this.filter = function(t) {
			return j(t)
		};
		var i = {};
		var m = {};
		var s = [];
		var f = [];
		var b = function() {
				for (var u = 0; u < c.length; u++) {
					var t = c[u];
					i[t.uuid] = t
				}
				for (var w in i) {
					var t = i[w];
					if (t.owner) {
						var w = t.owner;
						t.owner = i[w]
					}
					if (t.annotation) {
						var w = t.annotation;
						t.annotation = i[w]
					}
				}
				for (var w in i) {
					var t = i[w];
					var v = o(t);
					m[w] = v
				}
				$(l).bind("add", h);
				$(l).bind("remove", p);
				$(l).bind("update", d)
			};
		var r = function(t) {
				return i[t]
			};
		var j = function(x) {
				var w = [];
				for (var v in i) {
					var y = true;
					var t = i[v];
					for (var u in x) {
						if (t[u] != x[u]) {
							y = false;
							break
						}
					}
					if (y) {
						w.push(t)
					}
				}
				return w
			};
		var h = function(u) {
				var t = u.object;
				if (!(t.uuid in i)) {
					i[t.uuid] = t;
					m[t.uuid] = o(t);
					n(t)
				}
			};
		var p = function(u) {
				var t = u.object;
				if (t.uuid in i) {
					delete i[t.uuid];
					delete m[t.uuid];
					e(t)
				}
			};
		var d = function(x) {
				var t = x.object;
				var v = o(t);
				if (v != m[t.uuid]) {
					var w = i[t.uuid];
					for (var u in t) {
						if (u == "owner" || u == "annotation") {
							if (t[u].uuid != w[u].uuid) {
								w[u] = r(t[u].uuid)
							}
						} else {
							if (t[u] != w[u]) {
								w[u] = t[u]
							}
						}
					}
					m[t.uuid] = v;
					n(t)
				}
			};
		var n = function(t) {
				if (s.length + f.length == 0) {
					setTimeout(q, 0)
				}
				if (t.owner && t.owner.unsaved) {
					delete t.owner.unsaved;
					s.push(t.owner)
				}
				s.push(t)
			};
		var e = function(t) {
				if (s.length + f.length == 0) {
					setTimeout(q, 0)
				}
				f.push(t)
			};
		var q = function() {
				var w = [];
				for (var v = 0; v < s.length; v++) {
					var u = s[v];
					var x = g(u);
					w.push(x)
				}
				var t = [];
				for (var v = 0; v < f.length; v++) {
					var u = f[v];
					var x = g(u);
					t.push(x)
				}
				if (!k) {
					$.post("/webservice/document/update", {
						session: a,
						save: JSON.stringify(w),
						"delete": JSON.stringify(t)
					}).error(function(y) {
						$(l).triggerHandler("ajaxerror", y.status)
					})
				}
				s = [];
				f = []
			};
		var o = function(t) {
				var y = g(t);
				var x = $.param(y);
				var w = 0;
				for (var u = 0; u < x.length; u++) {
					var v = x.charCodeAt(u);
					w = ((w << 5) - w) + v;
					w = w & w
				}
				return w
			};
		var g = function(t) {
				var u = $.extend({}, t);
				if (u.owner) {
					u.owner = u.owner.uuid
				}
				if (u.annotation) {
					u.annotation = u.annotation.uuid
				}
				delete u.created;
				delete u.modified;
				delete u.unsaved;
				delete u.admin;
				delete u.unescaped;
				return u
			};
		b()
	};
Model.createUuid = function() {
	var a = function() {
			return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
		};
	return (a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a())
};
Model.time = function() {
	return (new Date()).getTime() / 1000
};
var TextSelectionUtilities = function() {
		var s = this;
		this.getSelectionRange = function() {
			return b()
		};
		this.getRectanglesFromRange = function(G) {
			return k(G)
		};
		this.getContent = function(G) {
			return D(G)
		};
		var b = function() {
				var G = null;
				if (F()) {
					if ($.browser.msie) {
						G = document.selection.createRange()
					} else {
						G = window.getSelection().getRangeAt(0)
					}
				}
				return G
			};
		var k = function(I) {
				try {
					var K = [];
					var S, R;
					w(I);
					var V = C();
					var T = $(V[0]).closest(".page").offset();
					if (T == null) {
						return
					}
					for (var L = 0; L < V.length; ++L) {
						var W = V[L];
						var H = y(W);
						var P = r(W, T);
						var Q = false;
						var G = $(".text.layer").get(0);
						if (G) {
							if ($(G).css("-moz-transform") && $(G).css("-moz-transform") != "none") {
								Q = true
							} else {
								if ($(G).css("-webkit-transform") && $(G).css("-webkit-transform") != "none") {
									Q = true
								} else {
									if ($(G).css("transform") && $(G).css("transform") != "none") {
										Q = true
									} else {
										if ($(G).css("zoom") && $(G).css("zoom") != "normal") {
											Q = true
										}
									}
								}
							}
						}
						var J = Q ? 10 : 1;
						if (H.width > 0 && H.height > 0) {
							K.push({
								x: P.left,
								y: P.top,
								width: H.width / J,
								height: H.height / J
							})
						}
					}
					S = K[0].x, R = K[0].y;
					for (var L = 1; L < K.length; ++L) {
						if (K[L].x < S) {
							S = K[L].x
						}
						if (K[L].y < R) {
							R = K[L].y
						}
					}
					return {
						rectangles: K,
						x: S,
						y: R
					}
				} finally {
					$(".hl").removeClass("hl");
					if ($.browser.msie) {
						var N = $("font");
						var M = N.length;
						for (var L = 0, O; O = N[L++];) {
							if (O.style && O.style.backgroundColor) {
								var U = O.style.backgroundColor;
								if (U == "#000001" || U == "rgb(0, 0, 1)") {
									$(O).css({
										"background-color": "transparent"
									})
								}
							}
						}
					}
				}
			};
		var D = function(G) {
				if ($.browser.msie) {
					return z(G.text)
				} else {
					return z(i(G.toString(), " "))
				}
			};
		var F = function() {
				if ($.browser.msie) {
					var H = null;
					if (document.selection.type == "Text") {
						H = document.selection.createRange();
						if (H.text == "") {
							return false
						}
						return true
					} else {
						if (document.selection.type == "None") {
							return false
						}
					}
					return true
				} else {
					var G = window.getSelection();
					if (!G || G.rangeCount == 0) {
						return false
					}
					var H = G.getRangeAt(0);
					if (H == null || (H.toString()) == "" || H.collapsed) {
						return false
					}
					if ($(H.startContainer).closest(".layer.text").length == 0 || $(H.endContainer).closest(".layer.text").length == 0) {
						return false
					}
					return true
				}
			};
		var r = function(I, H) {
				var G = $(I).offset();
				var K = G.left - H.left;
				var J = G.top - H.top;
				return {
					top: J,
					left: K
				}
			};
		var x = function(G) {
				if ($.browser.msie) {
					return $(G.parentElement()).closest(".page-outer")
				} else {
					return $(G.startContainer).closest(".page-outer")
				}
			};
		var w = function(I) {
				if ($.browser.msie) {
					document.selection.empty();
					I.select();
					document.execCommand("backcolor", false, "#000001");
					var P = $("font");
					var N = P.length;
					var O = [];
					for (var K = 0, Q; Q = P[K++];) {
						if (Q.style && Q.style.backgroundColor) {
							var T = Q.style.backgroundColor;
							if (T == "#000001" || T == "rgb(0, 0, 1)") {
								var M = q(Q);
								O = O.concat(M)
							}
						}
					}
					for (var K = 0; K < O.length; ++K) {
						n(O[K])
					}
					document.selection.empty()
				} else {
					if (I.collapsed) {
						return null
					}
					var S = I.startContainer;
					var L = I.endContainer;
					var H = I.startOffset;
					var G = I.endOffset;
					var R = false,
						J = false;
					if (G > 0 && G < L.nodeValue.length && L.nodeType == 3) {
						L.splitText(G);
						J = true
					}
					if (H > 0 && H < S.nodeValue.length && S.nodeType == 3) {
						S = S.splitText(H);
						if (L == S.previousSibling) {
							L = S
						}
						R = true
					}
					var O = j($(S).closest(".layer.text")[0], S, L);
					$.each(O, function(V, U) {
						n(U)
					});
					window.getSelection().removeAllRanges()
				}
			};
		var C = function() {
				var H = $(),
					G = [];
				H = $().add($(".hl")).add($(".hl").parent());
				H = H.filter(function() {
					var J = true;
					var K = $(this).children();
					if (K.filter(".hl").size() > 0) {
						J = K.filter(function() {
							return $(this).hasClass("hl") && z($(this).text()) != ""
						}).size() > 0
					}
					var L = true;
					var I = this;
					$.each(l(I), function() {
						if ($(this).parent() != I && !$(this).parent().hasClass("hl")) {
							L = false;
							return false
						}
					});
					return J && L
				});
				$.each(H, function() {
					var J = true;
					for (var I = 0; I < H.length; I++) {
						if ($(this).parent()[0] == H[I]) {
							J = false;
							break
						}
					}
					if (J) {
						G.push(this)
					}
				});
				return G
			};
		var y = function(H) {
				var K = $(H).height();
				var J = $(H).width();
				var I = 0;
				var G = 0;
				$.each($(H).find("*"), function() {
					if ($(this).get(0).tagName.toLowerCase().indexOf("wbr") == -1) {
						var L = $(this).height();
						var M = $(this).width();
						I = Math.max(I, L);
						G = Math.max(G, M)
					}
				});
				return {
					height: Math.max(K, I),
					width: Math.max(J, G)
				}
			};
		var n = function(H) {
				var G = $('<span class="hl"></span>').append($(H).clone());
				$(H).replaceWith(G)
			};
		var A = function(J, I) {
				var H = [];

				function G(N, M) {
					if (N.nodeType == 3) {
						if (!M || M(N)) {
							H.push(N)
						}
					} else {
						for (var L = 0, K = N.childNodes.length; L < K; ++L) {
							G(N.childNodes[L], M)
						}
					}
				}
				G(J, I);
				return H
			};
		var q = function(G) {
				var I = [];

				function H(K) {
					if (K.nodeType == 3) {
						I.push(K)
					} else {
						for (var J = 0; J < K.childNodes.length; ++J) {
							H(K.childNodes[J])
						}
					}
				}
				H(G);
				return I
			};
		var j = function(I, K, H) {
				var L = false,
					G = false,
					M = [];

				function J(P) {
					var Q = false;
					if (P == K) {
						L = true;
						if (P.nodeType == 3) {
							M.push(P);
							Q = true
						}
					}
					if (P == H) {
						G = true;
						if (!Q && P.nodeType == 3) {
							M.push(P)
						}
					} else {
						if (P.nodeType == 3) {
							if (L && !G && !Q) {
								M.push(P)
							}
						} else {
							for (var O = 0, N = P.childNodes.length; !G && O < N; ++O) {
								J(P.childNodes[O])
							}
						}
					}
				}
				J(I);
				return M
			};
		var f = function(G) {
				if (!$.browser.msie) {
					return t(G)
				} else {
					return v(G)
				}
			};
		var a = function(H, G) {
				if (!$.browser.msie) {
					return E(H, G)
				}
			};
		var p = function(H, G) {
				if (!$.browser.msie) {
					return u(H, G)
				}
			};
		var B = function(H, G) {
				if (!$.browser.msie) {
					return e(H, G)
				} else {
					return h(H)
				}
			};
		var o = function(H, G) {
				if (!$.browser.msie) {
					return d(H, G)
				} else {
					return g(H)
				}
			};
		var v = function(G) {
				var H = z(G.text);
				G.findText(H);
				return G
			};
		var g = function(H) {
				if (H.nodeType == 3) {
					return H
				}
				for (var G = H.childNodes.length - 1;
				G >= 0; --G) {
					var I = H.childNodes[G];
					return o(I)
				}
			};
		var h = function(H) {
				if (H.nodeType == 3) {
					return H
				}
				for (var G = 0; G < H.childNodes.length; ++G) {
					var I = H.childNodes[G];
					return B(I)
				}
			};
		var t = function(I) {
				var U = true;
				var M = true;
				var R = null;
				var N = null;
				if (I.startContainer.nodeType != 3) {
					U = false
				}
				if (I.endContainer.nodeType != 3) {
					M = false
				}
				if (U) {
					R = e(I.startContainer, true)
				}
				if (M) {
					N = d(I.endContainer, true)
				}
				var S = "";
				if (!R) {
					U = false
				}
				if (U) {
					if (R == I.startContainer) {
						S = R.textContent.substr(I.startOffset)
					} else {
						S = R.textContent
					}
					var T = m(S);
					while (T == "" && R && R != N) {
						var H = E(R, true);
						if (!H) {
							U = false;
							break
						}
						R = e(H, true);
						if (!R) {
							U = false;
							break
						}
						S = R.textContent;
						T = m(S)
					}
					if (U) {
						var K = S.length - T.length
					}
				}
				var P = "";
				if (!N) {
					M = false
				}
				if (M) {
					if (N == I.endContainer) {
						P = N.textContent.substr(0, I.endOffset)
					} else {
						P = N.textContent
					}
					var G = c(P);
					while (G == "" && N && N != R) {
						var H = u(N, false);
						if (!H) {
							M = false;
							break
						}
						N = d(H, false);
						if (!N) {
							M = false;
							break
						}
						P = N.textContent;
						G = c(P)
					}
					if (M) {
						var J = P.length - G.length
					}
				}
				var Q = I.cloneRange();
				if (U) {
					var O = R == I.startContainer ? I.startOffset : 0;
					O += K;
					Q.setStart(R, O)
				}
				if (M) {
					var L = N == I.endContainer ? N.length - I.endOffset : 0;
					L += J;
					Q.setEnd(N, N.textContent.length - L)
				}
				window.getSelection().removeAllRanges();
				window.getSelection().addRange(Q);
				return Q
			};
		var e = function(I, G) {
				if (I.nodeType == 3) {
					return I
				}
				if (G) {
					var J = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
					J.currentNode = I;
					return J.nextNode()
				} else {
					var J = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
					J.currentNode = I;
					var H = J.lastChild();
					J.currentNode = H;
					return J.nextNode()
				}
			};
		var d = function(I, G) {
				if (I.nodeType == 3) {
					return I
				}
				if (G) {
					var K = document.createTreeWalker(I, NodeFilter.SHOW_TEXT, null, false);
					var H = K.lastChild();
					if (H != null) {
						return H
					}
				}
				var J = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
				J.currentNode = I;
				return J.previousNode()
			};
		var E = function(I, G) {
				if (G) {
					var J = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, null, false);
					J.currentNode = I;
					return J.nextNode()
				} else {
					var J = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, null, false);
					J.currentNode = I;
					var H = J.lastChild();
					J.currentNode = H;
					return J.nextNode()
				}
			};
		var u = function(I, G) {
				if (G) {
					var K = document.createTreeWalker(I, NodeFilter.SHOW_ALL, null, false);
					var H = K.lastChild();
					if (H != null) {
						return H
					}
				}
				var J = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, null, false);
				J.currentNode = I;
				return J.previousNode()
			};
		var l = function(H) {
				var G = [];
				$(H).contents().each(function() {
					var I = arguments.callee;
					if (this.nodeType == 3) {
						G.push(this)
					} else {
						$(this).contents().each(I)
					}
				});
				return G
			};
		var z = function(G) {
				return (G == null) ? null : G.replace(/^\s+|\s+$/g, "")
			};
		var m = function(G) {
				return (G == null) ? null : G.replace(/^\s+/, "")
			};
		var c = function(G) {
				return (G == null) ? null : G.replace(/\s+$/, "")
			};
		var i = function(G, H) {
				return (G == null) ? null : G.replace(/[\n\r\t]/g, H)
			}
	};
TextSelectionUtilities = new TextSelectionUtilities();
var RenderedArea = function(i, v, e, g) {
		var s = new RenderedAnnotation(i, v);
		var w = $.extend({}, s);
		s.remove = function() {
			y()
		};
		s.select = function() {
			t()
		};
		s.deselect = function() {
			r()
		};
		var a = null;
		var A = null;
		var o = null;
		var q = null;
		var f = null;
		var b = [];
		var z = null;
		var c = function() {
				a = e;
				A = DocViewer.PXPT_RATIO * a;
				var N = i.x * A;
				var M = i.y * A;
				var E = i.width * A;
				var P = i.height * A;
				o = g.set();
				f = g.rect(0, 0, 0, 0);
				q = g.rect(0, 0, 0, 0);
				f.attr({
					stroke: "#DB0000"
				});
				q.attr({
					"stroke-width": 7,
					stroke: "#FFF",
					"stroke-opacity": 0.01
				});
				q.addClass("area-fg");
				if (s.editable) {
					q.addClass("editable")
				}
				o.push(f, q);
				for (var H = 0; H < 4; H++) {
					b.push(g.rect(0, 0, 0, 0));
					b[H].attr({
						fill: "#f2f2f2",
						stroke: "#999"
					});
					b[H].addClass("resize-handle-" + H);
					b[H].index = H;
					o.push(b[H])
				}
				m(N, M, E, P);
				B();
				$(s).bind({
					emphasize: h,
					unemphasize: l,
					zoom: n
				});
				if (s.editable) {
					o.mousedown(C);
					o.hover(p, u);
					z = new ContextMenu("area-menu", [{
						text: "Remove Annotation",
						className: "remove-btn",
						action: "remove"
					}]);
					$(z).bind("click", d);
					$(q.node).bind("contextmenu", function(R) {
						z.show(R.pageX, R.pageY);
						return false
					});
					var D = function() {
							this.ox = this.attr("x");
							this.oy = this.attr("y");
							this.width = this.attr("width");
							this.height = this.attr("height");
							this.moved = false;
							$(document.body).addClass("dragging")
						};
					var F = function(S, R) {
							if (!this.moved) {
								this.moved = true;
								$(s).triggerHandler("dragstart")
							}
							m(this.ox + S, this.oy + R, this.width, this.height)
						};
					var I = function() {
							if (this.moved) {
								j();
								$(s).triggerHandler("dragstop")
							}
							$(document.body).removeClass("dragging")
						};
					q.drag(F, D, I);
					var O = function() {
							var S = q.attr("x");
							var V = q.attr("y");
							var U = q.attr("width");
							var R = q.attr("height");
							this.x0 = [S + U, S, S, S + U][this.index];
							this.y0 = [V + R, V + R, V, V][this.index];
							this.x1 = [S, S + U, S + U, S][this.index];
							this.y1 = [V, V, V + R, V + R][this.index];
							this.resizing = false;
							if (!s.annotation.incomplete) {
								var T = "resizing-" + ["nwse", "nesw", "nwse", "nesw"][this.index];
								$(document.body).addClass(T)
							}
						};
					var L = function(U, T) {
							if (!this.resizing) {
								this.resizing = true;
								$(s).triggerHandler("dragstart")
							}
							var S = Math.min(this.x0, this.x1 + U);
							var W = Math.min(this.y0, this.y1 + T);
							var V = Math.abs(this.x1 + U - this.x0) || 0.001;
							var R = Math.abs(this.y1 + T - this.y0) || 0.001;
							m(S, W, V, R)
						};
					var Q = function() {
							if (this.resizing) {
								this.resizing = false;
								j();
								$(s).triggerHandler("dragstop")
							}
							$(document.body).removeClass("resizing-nwse resizing-nesw")
						};
					for (var H = 0; H < 4; H++) {
						b[H].drag(L, O, Q)
					}
				} else {
					$(q.node).bind("contextmenu mousedown", function(R) {
						return false
					})
				}
				if (s.annotation.incomplete) {
					q.addClass("incomplete");
					var J = b[2];
					O.apply(J);
					var G = $(q.node).closest(".page").offset();
					G.left += q.attr("x") + q.attr("width");
					G.top += q.attr("y") + q.attr("height");
					var K = function(R) {
							L.apply(J, [R.pageX - G.left, R.pageY - G.top]);
							return false
						};
					$(document.body).bind("mousemove", K);
					$(document.body).one("mouseup", function() {
						q.removeClass("incomplete");
						$(document.body).unbind("mousemove", K);
						Q.apply(J);
						k();
						B()
					})
				}
			};
		var p = function() {
				if (!f.hasClass("hover") && !document.isLeftMouseButtonDown) {
					f.addClass("hover");
					B();
					$(s).triggerHandler("mouseenter")
				}
			};
		var u = function() {
				if (f.hasClass("hover") && !document.isLeftMouseButtonDown) {
					f.removeClass("hover");
					B();
					$(s).triggerHandler("mouseleave")
				}
			};
		var h = function(D) {
				if (!f.hasClass("emphasize")) {
					f.addClass("emphasize");
					B()
				}
			};
		var l = function(D) {
				if (f.hasClass("emphasize")) {
					f.removeClass("emphasize");
					B()
				}
			};
		var k = function() {
				j();
				delete s.annotation.incomplete;
				$(s).triggerHandler("complete")
			};
		var d = function(F) {
				var E = F.action;
				if (E == "remove") {
					var D = "Delete attached comments?";
					ConfirmDialog.show(D, null, null, 220, function(G) {
						if (G) {
							y()
						}
					})
				}
			};
		var n = function(G) {
				a = G.trueZoom;
				A = DocViewer.PXPT_RATIO * a;
				var E = s.annotation.x * A;
				var H = s.annotation.y * A;
				var F = s.annotation.width * A;
				var D = s.annotation.height * A;
				m(E, H, F, D)
			};
		var C = function(F) {
				if (F.pageX || F.pageY) {
					var E = F.pageX;
					var D = F.pageY
				} else {
					if (F.clientX || F.clientY) {
						var E = F.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
						var D = F.clientY + document.body.scrollTop + document.documentElement.scrollTop
					}
				}
				$(s).triggerHandler({
					type: "mousedown",
					pageX: E,
					pageY: D
				})
			};
		var j = function() {
				s.annotation.x = x(q.attr("x") / A);
				s.annotation.y = x(q.attr("y") / A);
				s.annotation.width = x(q.attr("width") / A);
				s.annotation.height = x(q.attr("height") / A);
				var D = q.attr("x") + q.attr("width") + f.attr("stroke-width");
				var E = q.attr("y") + 8;
				s.anchorLocation = {
					x: D,
					y: E
				};
				if (!s.annotation.incomplete) {
					$(s).triggerHandler({
						type: "update",
						object: s.annotation
					})
				}
			};
		var y = function() {
				o.remove();
				w.remove()
			};
		var t = function() {
				f.addClass("selected");
				B();
				w.select()
			};
		var r = function(D) {
				if (!s.removed) {
					f.removeClass("selected");
					B()
				}
				w.deselect()
			};
		var m = function(E, G, F, D) {
				q.attr({
					x: E,
					y: G,
					width: F,
					height: D
				});
				f.attr({
					x: E,
					y: G,
					width: F,
					height: D,
					"stroke-width": Math.round(1.31 * A)
				});
				b[0].attr({
					x: E - 3,
					y: G - 3,
					width: 6,
					height: 6
				});
				b[1].attr({
					x: E + F - 3,
					y: G - 3,
					width: 6,
					height: 6
				});
				b[2].attr({
					x: E + F - 3,
					y: G + D - 3,
					width: 6,
					height: 6
				});
				b[3].attr({
					x: E - 3,
					y: G + D - 3,
					width: 6,
					height: 6
				});
				s.anchorLocation = {
					x: E + F,
					y: G + 8
				}
			};
		var B = function() {
				if (!s.annotation.incomplete) {
					if (f.hasClass("emphasize") || f.hasClass("hover") || f.hasClass("selected")) {
						f.attr({
							stroke: "#A90101"
						});
						if (s.editable && (f.hasClass("hover") || f.hasClass("selected"))) {
							for (var D = 0; D < 4; D++) {
								b[D].show()
							}
						}
						return
					}
				}
				f.attr({
					stroke: "#DB0000"
				});
				for (var D = 0; D < 4; D++) {
					b[D].hide()
				}
			};
		var x = function(D, E) {
				return Math.round(D * 100) / 100
			};
		c();
		return s
	};
var RenderedDrawing = function(o, z, L, h) {
		var i = new RenderedAnnotation(o, z);
		var r = $.extend({}, i);
		i.remove = function() {
			u()
		};
		i.update = function() {
			w()
		};
		i.select = function() {
			C()
		};
		i.deselect = function() {
			G()
		};
		var E = null;
		var t = null;
		var B = null;
		var s = null;
		var g = null;
		var n = null;
		var I = null;
		var p = {};
		var a = null;
		var q = null;
		var m = false;
		var e = false;
		var H = !! ("ontouchstart" in window);
		var f = function() {
				E = L;
				t = h.set();
				B = h.path();
				B.attr({
					stroke: "#" + o.color
				});
				t.push(B);
				I = $('<div class="drawing-bbox"></div>');
				$(B.node).closest("div").prepend(I);
				J();
				$(i).bind("zoom", b);
				if (o.incomplete) {
					I.hide();
					m = true;
					$(B.node).closest(".page").bind({
						"mousedown.drawing": y,
						"mousemove.drawing": A,
						"mouseup.drawing": v
					});
					setTimeout(function() {
						C()
					}, 0)
				} else {
					x();
					D()
				}
			};
		var D = function() {
				var P = B.attr("path");
				var S = H ? 24 : 12;
				s = h.path();
				s.addClass("drawing-hitpath");
				s.attr({
					path: P,
					"stroke-width": S,
					stroke: "#FFFFFF",
					opacity: 0.01
				});
				t.push(s);
				g = h.rect(p.x, p.y, p.width, p.height);
				g.attr({
					"stroke-width": 8,
					stroke: "#FFF",
					"stroke-opacity": 0.01
				});
				g.addClass("drawing-bboxpath");
				g.hide();
				t.push(g);
				if (z) {
					s.addClass("editable");
					g.addClass("editable");
					var Q = function() {
							if (!B.hasClass("hover") && !document.isLeftMouseButtonDown) {
								B.addClass("hover");
								I.addClass("hover");
								l()
							}
						};
					var O = function() {
							if (B.hasClass("hover") && !document.isLeftMouseButtonDown) {
								B.removeClass("hover");
								I.removeClass("hover");
								l()
							}
						};
					s.hover(Q, O);
					$(s.node).add(g.node).mousedown(function(T) {
						$(i).triggerHandler({
							type: "mousedown",
							pageX: T.pageX,
							pageY: T.pageY
						})
					});
					var R = function() {
							s.ox = s.attr("x");
							s.oy = s.attr("y");
							this.moved = false;
							$(document.body).addClass("dragging");
							e = true
						};
					var N = function(U, T) {
							t.translate(U - s.ox, T - s.oy);
							I.css("margin", T + "px 0 0 " + U + "px");
							s.ox = U;
							s.oy = T;
							if (!this.moved) {
								this.moved = true
							}
						};
					var M = function() {
							if (this.moved) {
								t.translate(-s.ox, -s.oy);
								I.css("margin", 0);
								d(s.ox, s.oy)
							}
							$(document.body).removeClass("dragging");
							e = false;
							l()
						};
					s.drag(N, R, M);
					g.drag(N, R, M);
					q = new ContextMenu("drawing-menu", [{
						text: "Remove Drawing",
						className: "remove-btn",
						action: "remove"
					}]);
					$(s.node).add(g.node).bind("contextmenu", function(T) {
						q.show(T.pageX, T.pageY);
						return false
					});
					$(q).bind("click", K)
				} else {
					$(s.node).bind("contextmenu mousedown", function(T) {
						return false
					})
				}
			};
		var x = function() {
				n = h.path();
				var N = B.attr("path");
				var M = 1 * DocViewer.PXPT_RATIO * E + 4;
				n.attr({
					path: N,
					"stroke-width": M,
					stroke: "#00F",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					opacity: 0
				});
				n.toBack();
				t.push(n);
				l()
			};
		var c = function(M) {
				k();
				M.css({
					top: p.y + "px",
					left: p.x + "px",
					width: p.width + "px",
					height: p.height + "px"
				})
			};
		var k = function() {
				var Q = B.attr("path");
				var S = $.map(Q, function(T) {
					return T[1]
				});
				var R = $.map(Q, function(T) {
					return T[2]
				});
				var N = Math.min.apply(this, S) - 15;
				var P = Math.min.apply(this, R) - 15;
				var M = Math.max.apply(this, S) + 15;
				var O = Math.max.apply(this, R) + 15;
				p.x = N;
				p.y = P;
				p.width = M - N;
				p.height = O - P
			};
		var b = function(M) {
				E = M.trueZoom;
				J()
			};
		var y = function(O) {
				m = true;
				$(document.body).addClass("drawing");
				var P = $(B.node).closest(".page").offset();
				var M = O.pageX - P.left;
				var Q = O.pageY - P.top;
				var N = B.attr("path");
				N.push(["M", M, Q]);
				B.attr("path", N);
				if (a) {
					a.clearQueue().stop().hide()
				}
				document.isLeftMouseButtonDown = true;
				return false
			};
		var A = function(O) {
				if (m) {
					var P = $(B.node).closest(".page").offset();
					var M = O.pageX - P.left;
					var Q = O.pageY - P.top;
					var N = B.attr("path");
					N.push(["L", M, Q]);
					B.attr("path", N);
					return false
				}
			};
		var v = function(O) {
				m = false;
				$(document.body).removeClass("drawing");
				var N = B.attr("path");
				if (N[N.length - 1][0] == "M") {
					N.pop();
					B.attr("path", N)
				} else {
					if (!a) {
						var M = '<div class="complete-drawing-ui" style="display:none;"><div class="drawing-actions"><a class="complete">Complete</a><a class="cancel">Cancel</a></div></div>';
						a = $(M).appendTo($(this).closest(".page-outer"));
						a.find(".complete").bind({
							click: function() {
								j()
							},
							"mousedown mouseup": function() {
								return false
							}
						}).end().find(".cancel").bind({
							click: function(P) {
								u()
							},
							"mousedown mouseup": function(P) {
								return false
							}
						})
					}
				}
				a.clearQueue().stop().fadeTo(500, 0).fadeTo(250, 1);
				c(a)
			};
		var j = function(M) {
				a.remove();
				I.show();
				c(I);
				$(B.node).closest(".page").unbind(".drawing");
				if (M) {
					return
				}
				var Q = B.attr("path");
				var O = o.x;
				var N = o.y;
				var P = DocViewer.PXPT_RATIO * E;
				var V = [];
				var W = null;
				for (var R = 0; R < Q.length; R++) {
					var U = Q[R];
					if (U[0] == "M") {
						W = [];
						V.push(W)
					}
					var T = U[1] / P;
					var S = U[2] / P;
					W.push(F(T - O));
					W.push(F(S - N))
				}
				o.lines = V;
				delete i.annotation.incomplete;
				$(i).triggerHandler("complete");
				x();
				D();
				l()
			};
		var K = function(M) {
				u()
			};
		var J = function() {
				var P = DocViewer.PXPT_RATIO * E;
				var O = i.annotation.x;
				var N = i.annotation.y;
				var R = [];
				for (var S = 0; S < i.annotation.lines.length;
				S++) {
					var W = i.annotation.lines[S];
					var U = (W[0] + O) * P;
					var T = (W[1] + N) * P;
					R.push(["M", U, T]);
					for (var Q = 2; Q < W.length; Q += 2) {
						var U = (W[Q] + O) * P;
						var T = (W[Q + 1] + N) * P;
						R.push(["L", U, T])
					}
				}
				B.attr("path", R);
				c(I);
				var V = 1 * P;
				B.attr("stroke-width", V);
				if (s) {
					s.attr("path", R)
				}
				if (g) {
					g.attr({
						x: p.x,
						y: p.y,
						height: p.height,
						width: p.width
					})
				}
				if (n) {
					var M = 1 * DocViewer.PXPT_RATIO * E + 4;
					n.attr({
						path: R,
						"stroke-width": M
					})
				}
			};
		var d = function(N, M) {
				var O = DocViewer.PXPT_RATIO * E;
				i.annotation.x += N / O;
				i.annotation.y += M / O;
				J();
				$(i).triggerHandler({
					type: "update",
					object: i.annotation
				})
			};
		var w = function() {
				B.attr("stroke", "#" + i.annotation.color);
				n.attr("stroke", "#" + i.annotation.color);
				$(i).triggerHandler({
					type: "update",
					object: i.annotation
				})
			};
		var u = function() {
				if (i.annotation.incomplete) {
					j(true)
				}
				I.remove();
				t.remove();
				r.remove()
			};
		var C = function() {
				B.addClass("select");
				I.addClass("select");
				l();
				r.select()
			};
		var G = function(M) {
				if (!i.removed) {
					if (i.annotation.incomplete) {
						j()
					}
					B.removeClass("select");
					I.removeClass("select");
					l()
				}
				r.deselect()
			};
		var l = function() {
				if (!e) {
					if (B.hasClass("select")) {
						g ? g.show() : null
					} else {
						if (B.hasClass("hover")) {
							g ? g.hide() : null
						} else {
							g ? g.hide() : null
						}
					}
				}
			};
		var F = function(M) {
				return Math.round(M * 100) / 100
			};
		f();
		return i
	};
var RenderedHighlight = function(f, s, d, h) {
		var o = new RenderedAnnotation(f, s);
		var t = $.extend({}, o);
		o.remove = function() {
			u()
		};
		o.update = function() {
			g()
		};
		o.select = function() {
			q()
		};
		o.deselect = function() {
			n()
		};
		var a = null;
		var w = null;
		var j = $();
		var v = null;
		var k = null;
		var b = function() {
				a = d;
				w = DocViewer.PXPT_RATIO * a;
				var N = $("#Page" + f.page).find(".layer.annotations");
				var O = $("#Page" + f.page).find(".layer.highlights");
				var L = DocViewer.PXPT_RATIO / 10;
				for (var F = 0; F < f.rectangles.length; F++) {
					var H = f.rectangles[F];
					var K = H.x * L;
					var I = H.y * L;
					var E = H.width * L;
					var M = H.height * L;
					var D = f.color;
					var B = "top:" + I + "em; left:" + K + "em; width:" + E + "em; height:" + M + "em; background:#" + D;
					var G = '<div class="highlight" style="' + B + '" color="' + D + '" />';
					j = j.add($(G).appendTo(O))
				}
				if (f.waiting) {
					x()
				}
				var A = Math.max.apply(this, $.map(f.rectangles, function(P) {
					return P.x + P.width
				}));
				var C = Math.min.apply(this, $.map(f.rectangles, function(P) {
					return P.y
				}));
				var J = {
					x: 0,
					y: 0,
					height: 0,
					distance: 99999
				};
				for (var F = 0; F < f.rectangles.length; F++) {
					var y = f.rectangles[F];
					var z = Math.sqrt(Math.pow(y.x + y.width - A, 2) + Math.pow(y.y - C, 2));
					if (z < J.distance) {
						J = {
							distance: z,
							x: y.x + y.width,
							y: y.y,
							height: y.height
						}
					}
				}
				k = {
					x: J.x,
					y: J.y + J.height * 1 / 2
				};
				p();
				$(o).bind("zoom", m);
				if (o.editable) {
					h.register(o);
					$(o).bind({
						mouseenter: l,
						mouseleave: r,
						emphasize: e,
						unemphasize: i
					});
					v = new ContextMenu("highlight-menu", [{
						text: "Add Comment",
						className: "add-comment-btn",
						action: "add-comment"
					}, {
						text: "Remove Highlight",
						className: "remove-btn",
						action: "remove"
					}]);
					$(o).bind("contextmenu", function(P) {
						v.setItemVisibility("add-comment-btn", !o.hasComments).show(P.pageX, P.pageY)
					});
					$(v).bind("click", c)
				} else {}
			};
		var l = function(y) {
				j.addClass("hover")
			};
		var r = function(y) {
				j.removeClass("hover")
			};
		var e = function(y) {
				j.addClass("emphasize")
			};
		var i = function(y) {
				j.removeClass("emphasize")
			};
		var m = function(y) {
				a = y.trueZoom;
				w = DocViewer.PXPT_RATIO * a;
				p()
			};
		var c = function(A) {
				var z = A.action;
				if (z == "remove") {
					if (o.hasComments) {
						var y = "Delete attached comments?";
						ConfirmDialog.show(y, null, null, 220, function(B) {
							if (B) {
								u()
							}
						})
					} else {
						u()
					}
				} else {
					if (z == "add-comment") {
						$(o).triggerHandler("commentrequest")
					}
				}
			};
		var u = function() {
				j.remove();
				t.remove()
			};
		var g = function() {
				var y = o.annotation.color;
				j.css("background", "#" + y).attr("color", y);
				$(o).triggerHandler({
					type: "update",
					object: o.annotation
				})
			};
		var x = function() {
				j.addClass("selected")
			};
		var q = function() {
				x();
				t.select()
			};
		var n = function(y) {
				j.removeClass("selected");
				t.deselect()
			};
		var p = function() {
				var z = k.x * w;
				var A = k.y * w;
				o.anchorLocation = {
					x: z,
					y: A
				}
			};
		b();
		return o
	};
var RenderedPoint = function(g, r, d, e) {
		var n = new RenderedAnnotation(g, r);
		var t = $.extend({}, n);
		n.remove = function() {
			v()
		};
		n.select = function() {
			o()
		};
		n.deselect = function() {
			m()
		};
		var a = null;
		var x = null;
		var q = null;
		var u = {
			x: null,
			y: null
		};
		var w = null;
		var s = !! ("ontouchstart" in window);
		var b = function() {
				a = d;
				x = DocViewer.PXPT_RATIO * a;
				var B = g.x * x;
				var F = g.y * x;
				u = {
					x: B,
					y: F
				};
				var E = s ? 24 : 12;
				q = e.path();
				q.addClass("point");
				q.attr({
					fill: "#DB0000",
					"stroke-width": E,
					stroke: "#FFF",
					"stroke-opacity": 0.01
				});
				if (n.editable) {
					q.addClass("editable")
				}
				j();
				$(n).bind({
					emphasize: f,
					unemphasize: i,
					zoom: k
				});
				if (n.editable) {
					q.hover(l, p);
					$(q.node).mousedown(z);
					w = new ContextMenu("point-menu", [{
						text: "Remove Annotation",
						className: "remove-btn",
						action: "remove"
					}]);
					$(q.node).bind("contextmenu", function(G) {
						w.show(G.pageX, G.pageY);
						return false
					});
					$(w).bind("click", c);
					var D = function() {
							this.ox = 0;
							this.oy = 0;
							this.moved = false;
							$(document.body).addClass("dragging")
						};
					var C = function(H, G) {
							this.translate(H - this.ox, G - this.oy);
							this.ox = H;
							this.oy = G;
							if (!this.moved) {
								this.moved = true;
								$(n).triggerHandler("dragstart")
							}
						};
					var A = function() {
							if (this.moved) {
								this.translate(-this.ox, -this.oy);
								h(u.x + this.ox, u.y + this.oy);
								$(n).triggerHandler("dragstop")
							}
							$(document.body).removeClass("dragging")
						};
					q.drag(C, D, A)
				} else {
					$(q.node).bind("contextmenu mousedown", function(G) {
						return false
					})
				}
			};
		var l = function(A) {
				if (!this.hasClass("hover") && !document.isLeftMouseButtonDown) {
					this.addClass("hover");
					y();
					$(n).triggerHandler("mouseenter")
				}
			};
		var p = function(A) {
				if (this.hasClass("hover") && !document.isLeftMouseButtonDown) {
					this.removeClass("hover");
					y();
					$(n).triggerHandler("mouseleave")
				}
			};
		var f = function(A) {
				if (!q.hasClass("emphasize")) {
					q.addClass("emphasize");
					y()
				}
			};
		var i = function(A) {
				if (q.hasClass("emphasize")) {
					q.removeClass("emphasize");
					y()
				}
			};
		var k = function(A) {
				a = A.trueZoom;
				x = DocViewer.PXPT_RATIO * a;
				u = {
					x: g.x * x,
					y: g.y * x
				};
				j()
			};
		var z = function(A) {
				$(n).triggerHandler({
					type: "mousedown",
					pageX: A.pageX,
					pageY: A.pageY
				})
			};
		var c = function(C) {
				var B = C.action;
				if (B == "remove") {
					var A = "Delete attached comments?";
					ConfirmDialog.show(A, null, null, 220, function(D) {
						if (D) {
							v()
						}
					})
				}
			};
		var h = function(A, D) {
				var C = A / x;
				var B = D / x;
				n.annotation.x = Math.round(C * 100) / 100;
				n.annotation.y = Math.round(B * 100) / 100;
				u = {
					x: A,
					y: D
				};
				j();
				$(n).triggerHandler({
					type: "update",
					object: n.annotation
				})
			};
		var v = function() {
				q.remove();
				t.remove()
			};
		var o = function() {
				q.addClass("selected");
				y();
				t.select()
			};
		var m = function(A) {
				if (!n.removed) {
					q.removeClass("selected");
					y()
				}
				t.deselect()
			};
		var j = function() {
				var A = u.x;
				var F = u.y;
				var B = 6 * x;
				var E = 6 * x;
				var D = 3 * x;
				var C = [
					["M", A, F],
					["l", -B / 2, -D],
					["l", 0, -E],
					["l", B, 0],
					["l", 0, E],
					["z"]
				];
				q.attr({
					path: C
				});
				n.anchorLocation = {
					x: A + B / 2,
					y: F - D - E / 2
				};
				n.tooltipLocation = {
					x: A - 5,
					y: F - E - D - 5
				}
			};
		var y = function() {
				if (q.hasClass("hover") || q.hasClass("emphasize") || q.hasClass("selected")) {
					q.attr({
						fill: "#A90101"
					})
				} else {
					q.attr({
						fill: "#DB0000"
					})
				}
			};
		b();
		return n
	};
var RenderedStrikeout = function(c, b, m, e) {
		var p = new RenderedAnnotation(c, b);
		var n = $.extend({}, p);
		p.remove = function() {
			f()
		};
		p.select = function() {
			l()
		};
		p.deselect = function() {
			i()
		};
		p.renderedTextbox = null;
		var o = null;
		var k = $();
		var a = $();
		var d = null;
		var h = function() {
				o = m;
				var B = $("#Page" + c.page).find(".layer.annotations");
				var C = $("#Page" + c.page).find(".layer.highlights");
				var w = $("#Page" + c.page).find(".layer.strikeouts");
				for (var t = 0; t < c.rectangles.length; t++) {
					var x = c.rectangles[t];
					var z = x.x * DocViewer.PXPT_RATIO / 10;
					var y = x.y * DocViewer.PXPT_RATIO / 10;
					var s = x.width * DocViewer.PXPT_RATIO / 10;
					var A = x.height * DocViewer.PXPT_RATIO / 10;
					var q = "top:" + y + "em; left:" + z + "em; width:" + s + "em; height:" + A + "em;";
					var u = '<div class="strikeout-bg" style="' + q + '" />';
					k = k.add($(u).appendTo(C));
					y = y + A * 0.4;
					A = A * 0.14;
					var q = "top:" + y + "em; left:" + z + "em; width:" + s + "em; height:" + A + "em;";
					var u = '<div class="strikeout" style="' + q + '" />';
					a = a.add($(u).appendTo(w))
				}
				$(p).bind("zoom", g);
				if (p.editable) {
					e.register(p);
					var v = function(D) {
							k.addClass("hover");
							a.addClass("hover")
						};
					var r = function(D) {
							k.removeClass("hover");
							a.removeClass("hover")
						};
					$(p).hover(v, r);
					if ($.browser.msie) {
						a.mouseenter(v);
						a.mouseleave(r);
						a.mousedown(function(D) {
							$(p).triggerHandler({
								type: "mousedown",
								pageX: D.pageX,
								pageY: D.pageY
							})
						})
					}
					d = new ContextMenu("strikeout-menu", [{
						text: "Remove Strikeout",
						className: "remove-btn",
						action: "remove"
					}]);
					$(p).add(a).bind("contextmenu", function(D) {
						d.show(D.pageX, D.pageY);
						return false
					});
					$(d).bind("click", j)
				}
			};
		var g = function(q) {
				o = q.trueZoom
			};
		var j = function(r) {
				var q = r.action;
				if (q == "remove") {
					f()
				}
			};
		var f = function() {
				k.remove();
				a.remove();
				if (p.renderedTextbox && !p.renderedTextbox.removed) {
					p.renderedTextbox.remove()
				}
				n.remove()
			};
		var l = function() {
				k.addClass("selected");
				a.addClass("selected");
				n.select()
			};
		var i = function(q) {
				k.removeClass("selected");
				a.removeClass("selected");
				n.deselect()
			};
		h();
		return p
	};
var RenderedTextbox = function(i, r, d, f) {
		var p = new RenderedAnnotation(i, r);
		var s = $.extend({}, p);
		p.remove = function() {
			v()
		};
		p.update = function() {
			k()
		};
		p.select = function() {
			q()
		};
		p.deselect = function() {
			o()
		};
		var a = d;
		var e = null;
		var g = null;
		var w = null;
		var b = function() {
				var C = $("#Page" + i.page).find(".layer.annotations");
				e = $('<div class="textbox"><div class="handle" /><div class="content"></div></div>');
				g = $(e).find(".content");
				if (r) {
					e.addClass("editable");
					g.attr("contenteditable", "true")
				}
				var B = i.y * DocViewer.PXPT_RATIO / 10;
				var A = i.x * DocViewer.PXPT_RATIO / 10;
				e.css("top", B + "em").css("left", A + "em");
				var D = i.size * DocViewer.PXPT_RATIO / 10;
				g.css("font-size", D + "em");
				g.css("color", "#" + i.color);
				e.css("background-color", p.annotation.fill ? "#" + p.annotation.fill : "transparent");
				if (i.content) {
					var z = i.content.unescapeHTML().replace(/\n/g, "\u200B");
					var y = $("<div />").text(z).html().replace(/\u200B/g, "<br>");
					g.html(y);
					i.content = i.content.unescapeHTML();
					i.unescaped = true
				}
				e.appendTo(C);
				if (i.incomplete) {
					setTimeout(function() {
						p.select();
						g.focus()
					}, 0)
				}
				$(p).bind("zoom", n);
				if (r) {
					g.focus(u).blur(h);
					e.mousedown(x).mouseup(m);
					e.draggable({
						cancel: ".content",
						stop: l
					});
					w = new ContextMenu("textbox-menu", [{
						text: "Remove Text",
						className: "remove-btn",
						action: "remove"
					}]);
					e.bind("contextmenu", function(E) {
						w.show(E.pageX, E.pageY);
						return false
					});
					$(w).bind("click", c)
				}
			};
		var n = function(y) {
				a = y.trueZoom
			};
		var u = function() {
				e.addClass("focus")
			};
		var h = function() {
				e.removeClass("focus");
				var y = g.html().replace(/<br>|<div>|<\/p>[ \r\n]*<p>/gi, "\u200B").replace(/<\/div>/gi, "");
				var A = $.trim($("<div />").html(y).text().replace(/\u200B/g, "\n"));
				if (A == "") {
					v()
				} else {
					if (A == p.annotation.content) {
						return
					}
					p.annotation.content = A;
					if (p.annotation.incomplete) {
						delete p.annotation.incomplete;
						$(p).triggerHandler("complete")
					} else {
						var z = j();
						var B = DocViewer.PXPT_RATIO * a;
						p.annotation.width = t(z.width / B);
						p.annotation.height = t(z.height / B);
						$(p).triggerHandler({
							type: "update",
							object: p.annotation
						})
					}
				}
			};
		var x = function(y) {
				if ($(y.target).hasClass("handle")) {
					$(document.body).addClass("dragging")
				}
				$(p).triggerHandler({
					type: "mousedown",
					pageX: y.pageX,
					pageY: y.pageY
				})
			};
		var m = function(y) {
				$(document.body).removeClass("dragging")
			};
		var l = function(E) {
				var D = j();
				var F = DocViewer.PXPT_RATIO * a;
				var y = e.position();
				var C = D.x / F;
				var B = D.y / F;
				var A = D.x / (a * 10);
				var z = D.y / (a * 10);
				e.css("top", z + "em").css("left", A + "em");
				p.annotation.x = C;
				p.annotation.y = B;
				p.annotation.width = t(D.width / F);
				p.annotation.height = t(D.height / F);
				$(p).triggerHandler({
					type: "update",
					object: p.annotation
				});
				$(document.body).removeClass("dragging")
			};
		var c = function(y) {
				if (y.action == "remove") {
					v()
				}
			};
		var j = function() {
				var A = {};
				var y = e.position();
				A.x = y.left;
				A.y = y.top;
				var z = e.find(".content");
				A.width = z.width();
				A.height = z.height();
				return A
			};
		var k = function() {
				var y = p.annotation.size * DocViewer.PXPT_RATIO / 10;
				g.css("font-size", y + "em");
				g.css("color", "#" + p.annotation.color);
				e.css("background-color", p.annotation.fill ? "#" + p.annotation.fill : "transparent");
				$(p).triggerHandler({
					type: "update",
					object: p.annotation
				})
			};
		var q = function() {
				e.addClass("selected");
				s.select()
			};
		var o = function(y) {
				e.removeClass("selected");
				if (e.is(".focus")) {
					g.blur()
				}
				s.deselect()
			};
		var v = function() {
				e.remove();
				s.remove()
			};
		var t = function(y) {
				return Math.round(y * 100) / 100
			};
		b();
		return p
	};

/*(function() {
	var b = '.docviewer { padding:0; } .docviewer .doc { margin:0; padding:0; position:absolute; height:100%; width:100%; overflow:auto; overflow-y:scroll; } .docviewer .doc { font-size:10px; } .docviewer .font-loader { position:fixed; top:0; right:0; height:1px; overflow:hidden; } .docviewer .font-loader span { display:inline-block; width:1px; height:1px; } .docviewer .page-outer { margin:15px auto; padding:5px 18px; position:relative; } .docviewer .page { background:white; position:relative; overflow:hidden; } .docviewer .page .loading-msg { display:block; position:absolute; top:33%; width:100%; text-align:center; margin-top:-7px; z-index:10; font-weight:bold; color:#aaa; font-size:14px; } .docviewer .inc-loading { position:absolute; bottom:10px; right:24px; width:200px; text-align:center; z-index:10; } .docviewer .inc-loading .bar { height:4px; width:180px; margin:2px auto; } .docviewer .inc-loading .bar .progress { height:100%; width:0%; float:left; } .docviewer .conversion-overlay { position:absolute; top:0; left:0; right:0; bottom:0; text-align:center; font-family:Arial,Helvetica,sans-serif; } .docviewer .conversion-overlay .msg { position:absolute; top:45%; left:50%; height:20px; width:200px; margin:-10px 0 0 -100px; } .docviewer .conversion-overlay .msg span { font-size:16px; padding-left:24px; background:url("data:image/gif;base64,R0lGODlhEAALAPQAAP///wAAANra2tDQ0Orq6gYGBgAAAC4uLoKCgmBgYLq6uiIiIkpKSoqKimRkZL6+viYmJgQEBE5OTubm5tjY2PT09Dg4ONzc3PLy8ra2tqCgoMrKyu7u7gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA") no-repeat left center; *padding-left:0; *background:none; } .docviewer .error-overlay { position:absolute; top:0; left:0; right:0; bottom:0; text-align:center; font-family:Arial,Helvetica,sans-serif; z-index:2; background:#fff; } .docviewer .error-overlay .msg { position:absolute; top:45%; left:50%; height:20px; width:290px; margin:-10px 0 0 -145px; } .docviewer .error-overlay .msg h3 { font-size:16px; font-weight:bold; margin:0; } .docviewer .error-overlay .msg p { font-size:13px; margin:5px 0; } .doc.mobile { -webkit-overflow-scrolling:touch; } .doc.mobile.no-inertia { -webkit-overflow-scrolling:auto; } .doc.mobile .ln.x span { white-space:nowrap; } .doc.mobile .page.hidden .layer { display:none; } .docviewer .doc { background:#eee; } .docviewer .page { outline:1px solid #BBB; } .docviewer .inc-loading { text-shadow:1px 1px 0 #fff; } .docviewer .inc-loading .bar { border:1px solid #999; background:#fff; } .docviewer .inc-loading .bar .progress { background-color:#ccc; } ';
	var a = document.createElement("style");
	a.type = "text/css";
	if (a.styleSheet) {
		a.styleSheet.cssText = b
	} else {
		a.appendChild(document.createTextNode(b))
	}
	document.getElementsByTagName("head")[0].appendChild(a)
})();
*/
// ┌─────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.0 - JavaScript Vector Library                             │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
// └─────────────────────────────────────────────────────────────────────┘ \\

(function(a) {
	var b = "0.3.2",
		c = "hasOwnProperty",
		d = /[\.\/]/,
		e = "*",
		f = function() {},
		g = function(a, b) {
			return a - b
		},
		h, i, j = {
			n: {}
		},
		k = function(a, b) {
			var c = j,
				d = i,
				e = Array.prototype.slice.call(arguments, 2),
				f = k.listeners(a),
				l = 0,
				m = !1,
				n, o = [],
				p = {},
				q = [],
				r = [];
			h = a, i = 0;
			for (var s = 0, t = f.length; s < t; s++)"zIndex" in f[s] && (o.push(f[s].zIndex), f[s].zIndex < 0 && (p[f[s].zIndex] = f[s]));
			o.sort(g);
			while (o[l] < 0) {
				n = p[o[l++]], q.push(n.apply(b, e));
				if (i) {
					i = d;
					return q
				}
			}
			for (s = 0; s < t; s++) {
				n = f[s];
				if ("zIndex" in n) if (n.zIndex == o[l]) {
					q.push(n.apply(b, e));
					if (i) {
						i = d;
						return q
					}
					do {
						l++, n = p[o[l]], n && q.push(n.apply(b, e));
						if (i) {
							i = d;
							return q
						}
					} while (n)
				} else p[n.zIndex] = n;
				else {
					q.push(n.apply(b, e));
					if (i) {
						i = d;
						return q
					}
				}
			}
			i = d;
			return q.length ? q : null
		};
	k.listeners = function(a) {
		var b = a.split(d),
			c = j,
			f, g, h, i, k, l, m, n, o = [c],
			p = [];
		for (i = 0, k = b.length; i < k; i++) {
			n = [];
			for (l = 0, m = o.length; l < m; l++) {
				c = o[l].n, g = [c[b[i]], c[e]], h = 2;
				while (h--) f = g[h], f && (n.push(f), p = p.concat(f.f || []))
			}
			o = n
		}
		return p
	}, k.on = function(a, b) {
		var c = a.split(d),
			e = j;
		for (var g = 0, h = c.length; g < h; g++) e = e.n, !e[c[g]] && (e[c[g]] = {
			n: {}
		}), e = e[c[g]];
		e.f = e.f || [];
		for (g = 0, h = e.f.length; g < h; g++) if (e.f[g] == b) return f;
		e.f.push(b);
		return function(a) {
			+a == +a && (b.zIndex = +a)
		}
	}, k.stop = function() {
		i = 1
	}, k.nt = function(a) {
		if (a) return (new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)")).test(h);
		return h
	}, k.unbind = function(a, b) {
		var f = a.split(d),
			g, h, i, k = [j];
		for (var l = 0, m = f.length; l < m; l++) for (var n = 0; n < k.length; n += i.length - 2) {
			i = [n, 1], g = k[n].n;
			if (f[l] != e) g[f[l]] && i.push(g[f[l]]);
			else for (h in g) g[c](h) && i.push(g[h]);
			k.splice.apply(k, i)
		}
		for (l = 0, m = k.length; l < m; l++) {
			g = k[l];
			while (g.n) {
				if (b) {
					if (g.f) {
						for (n = 0, jj = g.f.length; n < jj; n++) if (g.f[n] == b) {
							g.f.splice(n, 1);
							break
						}!g.f.length && delete g.f
					}
					for (h in g.n) if (g.n[c](h) && g.n[h].f) {
						var o = g.n[h].f;
						for (n = 0, jj = o.length; n < jj; n++) if (o[n] == b) {
							o.splice(n, 1);
							break
						}!o.length && delete g.n[h].f
					}
				} else {
					delete g.f;
					for (h in g.n) g.n[c](h) && g.n[h].f && delete g.n[h].f
				}
				g = g.n
			}
		}
	}, k.version = b, k.toString = function() {
		return "You are running Eve " + b
	}, typeof module != "undefined" && module.exports ? module.exports = k : a.eve = k
})(this), function() {
	function cr(b, d, e, f, h, i) {
		e = Q(e);
		var j, k, l, m = [],
			o, p, q, t = b.ms,
			u = {},
			v = {},
			w = {};
		if (f) for (y = 0, z = cl.length; y < z; y++) {
			var x = cl[y];
			if (x.el.id == d.id && x.anim == b) {
				x.percent != e ? (cl.splice(y, 1), l = 1) : k = x, d.attr(x.totalOrigin);
				break
			}
		} else f = +v;
		for (var y = 0, z = b.percents.length; y < z; y++) {
			if (b.percents[y] == e || b.percents[y] > f * b.top) {
				e = b.percents[y], p = b.percents[y - 1] || 0, t = t / b.top * (e - p), o = b.percents[y + 1], j = b.anim[e];
				break
			}
			f && d.attr(b.anim[b.percents[y]])
		}
		if ( !! j) {
			if (!k) {
				for (attr in j) if (j[g](attr)) if (U[g](attr) || d.paper.customAttributes[g](attr)) {
					u[attr] = d.attr(attr), u[attr] == null && (u[attr] = T[attr]), v[attr] = j[attr];
					switch (U[attr]) {
					case C:
						w[attr] = (v[attr] - u[attr]) / t;
						break;
					case "colour":
						u[attr] = a.getRGB(u[attr]);
						var A = a.getRGB(v[attr]);
						w[attr] = {
							r: (A.r - u[attr].r) / t,
							g: (A.g - u[attr].g) / t,
							b: (A.b - u[attr].b) / t
						};
						break;
					case "path":
						var B = bG(u[attr], v[attr]),
							D = B[1];
						u[attr] = B[0], w[attr] = [];
						for (y = 0, z = u[attr].length; y < z; y++) {
							w[attr][y] = [0];
							for (var E = 1, F = u[attr][y].length; E < F; E++) w[attr][y][E] = (D[y][E] - u[attr][y][E]) / t
						}
						break;
					case "transform":
						var G = d._,
							H = bQ(G[attr], v[attr]);
						if (H) {
							u[attr] = H.from, v[attr] = H.to, w[attr] = [], w[attr].real = !0;
							for (y = 0, z = u[attr].length; y < z; y++) {
								w[attr][y] = [u[attr][y][0]];
								for (E = 1, F = u[attr][y].length; E < F; E++) w[attr][y][E] = (v[attr][y][E] - u[attr][y][E]) / t
							}
						} else {
							var I = d.matrix || new bR,
								J = {
									_: {
										transform: G.transform
									},
									getBBox: function() {
										return d.getBBox(1)
									}
								};
							u[attr] = [I.a, I.b, I.c, I.d, I.e, I.f], bO(J, v[attr]), v[attr] = J._.transform, w[attr] = [(J.matrix.a - I.a) / t, (J.matrix.b - I.b) / t, (J.matrix.c - I.c) / t, (J.matrix.d - I.d) / t, (J.matrix.e - I.e) / t, (J.matrix.e - I.f) / t]
						}
						break;
					case "csv":
						var K = r(j[attr])[s](c),
							L = r(u[attr])[s](c);
						if (attr == "clip-rect") {
							u[attr] = L, w[attr] = [], y = L.length;
							while (y--) w[attr][y] = (K[y] - u[attr][y]) / t
						}
						v[attr] = K;
						break;
					default:
						K = [][n](j[attr]), L = [][n](u[attr]), w[attr] = [], y = d.paper.customAttributes[attr].length;
						while (y--) w[attr][y] = ((K[y] || 0) - (L[y] || 0)) / t
					}
				}
				var M = j.easing,
					O = a.easing_formulas[M];
				if (!O) {
					O = r(M).match(N);
					if (O && O.length == 5) {
						var P = O;
						O = function(a) {
							return cp(a, +P[1], +P[2], +P[3], +P[4], t)
						}
					} else O = be
				}
				q = j.start || b.start || +(new Date), x = {
					anim: b,
					percent: e,
					timestamp: q,
					start: q + (b.del || 0),
					status: 0,
					initstatus: f || 0,
					stop: !1,
					ms: t,
					easing: O,
					from: u,
					diff: w,
					to: v,
					el: d,
					callback: j.callback,
					prev: p,
					next: o,
					repeat: i || b.times,
					origin: d.attr(),
					totalOrigin: h
				}, cl.push(x);
				if (f && !k && !l) {
					x.stop = !0, x.start = new Date - t * f;
					if (cl.length == 1) return cn()
				}
				l && (x.start = new Date - x.ms * f), cl.length == 1 && cm(cn)
			} else k.initstatus = f, k.start = new Date - k.ms * f;
			eve("anim.start." + d.id, d, b)
		}
	}
	function cq(a, b) {
		var c = [],
			d = {};
		this.ms = b, this.times = 1;
		if (a) {
			for (var e in a) a[g](e) && (d[Q(e)] = a[e], c.push(Q(e)));
			c.sort(bc)
		}
		this.anim = d, this.top = c[c.length - 1], this.percents = c
	}
	function cp(a, b, c, d, e, f) {
		function o(a, b) {
			var c, d, e, f, j, k;
			for (e = a, k = 0; k < 8; k++) {
				f = m(e) - a;
				if (z(f) < b) return e;
				j = (3 * i * e + 2 * h) * e + g;
				if (z(j) < 1e-6) break;
				e = e - f / j
			}
			c = 0, d = 1, e = a;
			if (e < c) return c;
			if (e > d) return d;
			while (c < d) {
				f = m(e);
				if (z(f - a) < b) return e;
				a > f ? c = e : d = e, e = (d - c) / 2 + c
			}
			return e
		}
		function n(a, b) {
			var c = o(a, b);
			return ((l * c + k) * c + j) * c
		}
		function m(a) {
			return ((i * a + h) * a + g) * a
		}
		var g = 3 * b,
			h = 3 * (d - b) - g,
			i = 1 - g - h,
			j = 3 * c,
			k = 3 * (e - c) - j,
			l = 1 - j - k;
		return n(a, 1 / (200 * f))
	}
	function cd() {
		return this.x + q + this.y + q + this.width + " × " + this.height
	}
	function cc() {
		return this.x + q + this.y
	}
	function bR(a, b, c, d, e, f) {
		a != null ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
	}
	function bw(a) {
		var b = [];
		for (var c = 0, d = a.length; d - 2 > c; c += 2) {
			var e = [{
				x: +a[c],
				y: +a[c + 1]
			}, {
				x: +a[c],
				y: +a[c + 1]
			}, {
				x: +a[c + 2],
				y: +a[c + 3]
			}, {
				x: +a[c + 4],
				y: +a[c + 5]
			}];
			d - 4 == c ? (e[0] = {
				x: +a[c - 2],
				y: +a[c - 1]
			}, e[3] = e[2]) : c && (e[0] = {
				x: +a[c - 2],
				y: +a[c - 1]
			}), b.push(["C", (-e[0].x + 6 * e[1].x + e[2].x) / 6, (-e[0].y + 6 * e[1].y + e[2].y) / 6, (e[1].x + 6 * e[2].x - e[3].x) / 6, (e[1].y + 6 * e[2].y - e[3].y) / 6, e[2].x, e[2].y])
		}
		return b
	}
	function bv() {
		return this.hex
	}
	function bt(a, b, c) {
		function d() {
			var e = Array.prototype.slice.call(arguments, 0),
				f = e.join("␀"),
				h = d.cache = d.cache || {},
				i = d.count = d.count || [];
			if (h[g](f)) {
				bs(i, f);
				return c ? c(h[f]) : h[f]
			}
			i.length >= 1e3 && delete h[i.shift()], i.push(f), h[f] = a[m](b, e);
			return c ? c(h[f]) : h[f]
		}
		return d
	}
	function bs(a, b) {
		for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0])
	}
	function a(c) {
		if (a.is(c, "function")) return b ? c() : eve.on("DOMload", c);
		if (a.is(c, E)) {
			var e = c,
				f = a._engine.create[m](a, e.splice(0, 3 + a.is(e[0], C))),
				h = f.set(),
				i = 0,
				j = e.length,
				k;
			for (; i < j; i++) k = e[i] || {}, d[g](k.type) && h.push(f[k.type]().attr(k));
			return h
		}
		var l = Array.prototype.slice.call(arguments, 0);
		if (a.is(l[l.length - 1], "function")) {
			var n = l.pop();
			return b ? n.call(a._engine.create[m](a, l)) : eve.on("DOMload", function() {
				n.call(a._engine.create[m](a, l))
			})
		}
		return a._engine.create[m](a, arguments)
	}
	a.version = "2.0.0", a.eve = eve;
	var b, c = /[, ]+/,
		d = {
			circle: 1,
			rect: 1,
			path: 1,
			ellipse: 1,
			text: 1,
			image: 1
		},
		e = /\{(\d+)\}/g,
		f = "prototype",
		g = "hasOwnProperty",
		h = {
			doc: document,
			win: window
		},
		i = {
			was: Object.prototype[g].call(h.win, "Raphael"),
			is: h.win.Raphael
		},
		j = function() {
			this.ca = this.customAttributes = {}
		},
		k, l = "appendChild",
		m = "apply",
		n = "concat",
		o = "createTouch" in h.doc,
		p = "",
		q = " ",
		r = String,
		s = "split",
		t = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [s](q),
		u = {
			mousedown: "touchstart",
			mousemove: "touchmove",
			mouseup: "touchend"
		},
		v = r.prototype.toLowerCase,
		w = Math,
		x = w.max,
		y = w.min,
		z = w.abs,
		A = w.pow,
		B = w.PI,
		C = "number",
		D = "string",
		E = "array",
		F = "toString",
		G = "fill",
		H = Object.prototype.toString,
		I = {},
		J = "push",
		K = a._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
		L = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
		M = {
			NaN: 1,
			Infinity: 1,
			"-Infinity": 1
		},
		N = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
		O = w.round,
		P = "setAttribute",
		Q = parseFloat,
		R = parseInt,
		S = r.prototype.toUpperCase,
		T = a._availableAttrs = {
			"arrow-end": "none",
			"arrow-start": "none",
			blur: 0,
			"clip-rect": "0 0 1e9 1e9",
			cursor: "default",
			cx: 0,
			cy: 0,
			fill: "#fff",
			"fill-opacity": 1,
			font: '10px "Arial"',
			"font-family": '"Arial"',
			"font-size": "10",
			"font-style": "normal",
			"font-weight": 400,
			gradient: 0,
			height: 0,
			href: "http://raphaeljs.com/",
			opacity: 1,
			path: "M0,0",
			r: 0,
			rx: 0,
			ry: 0,
			src: "",
			stroke: "#000",
			"stroke-dasharray": "",
			"stroke-linecap": "butt",
			"stroke-linejoin": "butt",
			"stroke-miterlimit": 0,
			"stroke-opacity": 1,
			"stroke-width": 1,
			target: "_blank",
			"text-anchor": "middle",
			title: "Raphael",
			transform: "",
			width: 0,
			x: 0,
			y: 0
		},
		U = a._availableAnimAttrs = {
			blur: C,
			"clip-rect": "csv",
			cx: C,
			cy: C,
			fill: "colour",
			"fill-opacity": C,
			"font-size": C,
			height: C,
			opacity: C,
			path: "path",
			r: C,
			rx: C,
			ry: C,
			stroke: "colour",
			"stroke-opacity": C,
			"stroke-width": C,
			transform: "transform",
			width: C,
			x: C,
			y: C
		},
		V = /\s*,\s*/,
		W = {
			hs: 1,
			rg: 1
		},
		X = /,?([achlmqrstvxz]),?/gi,
		Y = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,
		Z = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,
		$ = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/ig,
		_ = a._radial_gradient = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,
		ba = {},
		bb = function(a, b) {
			return a.key - b.key
		},
		bc = function(a, b) {
			return Q(a) - Q(b)
		},
		bd = function() {},
		be = function(a) {
			return a
		},
		bf = a._rectPath = function(a, b, c, d, e) {
			if (e) return [["M", a + e, b], ["l", c - e * 2, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - e * 2], ["a", e, e, 0, 0, 1, -e, e], ["l", e * 2 - c, 0], ["a", e, e, 0, 0, 1, -e, -e], ["l", 0, e * 2 - d], ["a", e, e, 0, 0, 1, e, -e], ["z"]];
			return [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]]
		},
		bg = function(a, b, c, d) {
			d == null && (d = c);
			return [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]]
		},
		bh = a._getPath = {
			path: function(a) {
				return a.attr("path")
			},
			circle: function(a) {
				var b = a.attrs;
				return bg(b.cx, b.cy, b.r)
			},
			ellipse: function(a) {
				var b = a.attrs;
				return bg(b.cx, b.cy, b.rx, b.ry)
			},
			rect: function(a) {
				var b = a.attrs;
				return bf(b.x, b.y, b.width, b.height, b.r)
			},
			image: function(a) {
				var b = a.attrs;
				return bf(b.x, b.y, b.width, b.height)
			},
			text: function(a) {
				var b = a._getBBox();
				return bf(b.x, b.y, b.width, b.height)
			}
		},
		bi = a.mapPath = function(a, b) {
			if (!b) return a;
			var c, d, e, f, g;
			a = bG(a);
			for (e = 0, ii = a.length; e < ii; e++) {
				g = a[e];
				for (f = 1, jj = g.length; f < jj; f += 2) c = b.x(g[f], g[f + 1]), d = b.y(g[f], g[f + 1]), g[f] = c, g[f + 1] = d
			}
			return a
		};
	a._g = h, a.type = h.win.SVGAngle || h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
	if (a.type == "VML") {
		var bj = h.doc.createElement("div"),
			bk;
		bj.innerHTML = '<v:shape adj="1"/>', bk = bj.firstChild, bk.style.behavior = "url(#default#VML)";
		if (!bk || typeof bk.adj != "object") return a.type = p;
		bj = null
	}
	a.svg = !(a.vml = a.type == "VML"), a._Paper = j, a.fn = k = j.prototype = a.prototype, a._id = 0, a._oid = 0, a.is = function(a, b) {
		b = v.call(b);
		if (b == "finite") return !M[g](+a);
		if (b == "array") return a instanceof Array;
		return b == "null" && a === null || b == typeof a && a !== null || b == "object" && a === Object(a) || b == "array" && Array.isArray && Array.isArray(a) || H.call(a).slice(8, -1).toLowerCase() == b
	}, a.angle = function(b, c, d, e, f, g) {
		if (f == null) {
			var h = b - d,
				i = c - e;
			if (!h && !i) return 0;
			return (180 + w.atan2(-i, -h) * 180 / B + 360) % 360
		}
		return a.angle(b, c, f, g) - a.angle(d, e, f, g)
	}, a.rad = function(a) {
		return a % 360 * B / 180
	}, a.deg = function(a) {
		return a * 180 / B % 360
	}, a.snapTo = function(b, c, d) {
		d = a.is(d, "finite") ? d : 10;
		if (a.is(b, E)) {
			var e = b.length;
			while (e--) if (z(b[e] - c) <= d) return b[e]
		} else {
			b = +b;
			var f = c % b;
			if (f < d) return c - f;
			if (f > b - d) return c - f + b
		}
		return c
	};
	var bl = a.createUUID = function(a, b) {
			return function() {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
			}
		}(/[xy]/g, function(a) {
			var b = w.random() * 16 | 0,
				c = a == "x" ? b : b & 3 | 8;
			return c.toString(16)
		});
	a.setWindow = function(b) {
		eve("setWindow", a, h.win, b), h.win = b, h.doc = h.win.document, initWin && initWin(h.win)
	};
	var bm = function(b) {
			if (a.vml) {
				var c = /^\s+|\s+$/g,
					d;
				try {
					var e = new ActiveXObject("htmlfile");
					e.write("<body>"), e.close(), d = e.body
				} catch (f) {
					d = createPopup().document.body
				}
				var g = d.createTextRange();
				bm = bt(function(a) {
					try {
						d.style.color = r(a).replace(c, p);
						var b = g.queryCommandValue("ForeColor");
						b = (b & 255) << 16 | b & 65280 | (b & 16711680) >>> 16;
						return "#" + ("000000" + b.toString(16)).slice(-6)
					} catch (e) {
						return "none"
					}
				})
			} else {
				var i = h.doc.createElement("i");
				i.title = "Raphaël Colour Picker", i.style.display = "none", h.doc.body.appendChild(i), bm = bt(function(a) {
					i.style.color = a;
					return h.doc.defaultView.getComputedStyle(i, p).getPropertyValue("color")
				})
			}
			return bm(b)
		},
		bn = function() {
			return "hsb(" + [this.h, this.s, this.b] + ")"
		},
		bo = function() {
			return "hsl(" + [this.h, this.s, this.l] + ")"
		},
		bp = function() {
			return this.hex
		},
		bq = function(b, c, d) {
			c == null && a.is(b, "object") && "r" in b && "g" in b && "b" in b && (d = b.b, c = b.g, b = b.r);
			if (c == null && a.is(b, D)) {
				var e = a.getRGB(b);
				b = e.r, c = e.g, d = e.b
			}
			if (b > 1 || c > 1 || d > 1) b /= 255, c /= 255, d /= 255;
			return [b, c, d]
		},
		br = function(b, c, d, e) {
			b *= 255, c *= 255, d *= 255;
			var f = {
				r: b,
				g: c,
				b: d,
				hex: a.rgb(b, c, d),
				toString: bp
			};
			a.is(e, "finite") && (f.opacity = e);
			return f
		};
	a.color = function(b) {
		var c;
		a.is(b, "object") && "h" in b && "s" in b && "b" in b ? (c = a.hsb2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : a.is(b, "object") && "h" in b && "s" in b && "l" in b ? (c = a.hsl2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : (a.is(b, "string") && (b = a.getRGB(b)), a.is(b, "object") && "r" in b && "g" in b && "b" in b ? (c = a.rgb2hsl(b), b.h = c.h, b.s = c.s, b.l = c.l, c = a.rgb2hsb(b), b.v = c.b) : (b = {
			hex: "none"
		}, crl.r = b.g = b.b = b.h = b.s = b.v = b.l = -1)), b.toString = bp;
		return b
	}, a.hsb2rgb = function(a, b, c, d) {
		this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
		var e, f, g, h, i;
		a = a % 360 / 60, i = c * b, h = i * (1 - z(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a];
		return br(e, f, g, d)
	}, a.hsl2rgb = function(a, b, c, d) {
		this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h);
		if (a > 1 || b > 1 || c > 1) a /= 360, b /= 100, c /= 100;
		a *= 360;
		var e, f, g, h, i;
		a = a % 360 / 60, i = 2 * b * (c < .5 ? c : 1 - c), h = i * (1 - z(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a];
		return br(e, f, g, d)
	}, a.rgb2hsb = function(a, b, c) {
		c = bq(a, b, c), a = c[0], b = c[1], c = c[2];
		var d, e, f, g;
		f = x(a, b, c), g = f - y(a, b, c), d = g == 0 ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = g == 0 ? 0 : g / f;
		return {
			h: d,
			s: e,
			b: f,
			toString: bn
		}
	}, a.rgb2hsl = function(a, b, c) {
		c = bq(a, b, c), a = c[0], b = c[1], c = c[2];
		var d, e, f, g, h, i;
		g = x(a, b, c), h = y(a, b, c), i = g - h, d = i == 0 ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = i == 0 ? 0 : f < .5 ? i / (2 * f) : i / (2 - 2 * f);
		return {
			h: d,
			s: e,
			l: f,
			toString: bo
		}
	}, a._path2string = function() {
		return this.join(",").replace(X, "$1")
	};
	var bu = a._preload = function(a, b) {
			var c = h.doc.createElement("img");
			c.style.cssText = "position:absolute;left:-9999em;top-9999em", c.onload = function() {
				b.call(this), this.onload = null, h.doc.body.removeChild(this)
			}, c.onerror = function() {
				h.doc.body.removeChild(this)
			}, h.doc.body.appendChild(c), c.src = a
		};
	a.getRGB = bt(function(b) {
		if (!b || !! ((b = r(b)).indexOf("-") + 1)) return {
			r: -1,
			g: -1,
			b: -1,
			hex: "none",
			error: 1,
			toString: bv
		};
		if (b == "none") return {
			r: -1,
			g: -1,
			b: -1,
			hex: "none",
			toString: bv
		};
		!W[g](b.toLowerCase().substring(0, 2)) && b.charAt() != "#" && (b = bm(b));
		var c, d, e, f, h, i, j, k = b.match(L);
		if (k) {
			k[2] && (f = R(k[2].substring(5), 16), e = R(k[2].substring(3, 5), 16), d = R(k[2].substring(1, 3), 16)), k[3] && (f = R((i = k[3].charAt(3)) + i, 16), e = R((i = k[3].charAt(2)) + i, 16), d = R((i = k[3].charAt(1)) + i, 16)), k[4] && (j = k[4][s](V), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), k[1].toLowerCase().slice(0, 4) == "rgba" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100));
			if (k[5]) {
				j = k[5][s](V), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), (j[0].slice(-3) == "deg" || j[0].slice(-1) == "°") && (d /= 360), k[1].toLowerCase().slice(0, 4) == "hsba" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100);
				return a.hsb2rgb(d, e, f, h)
			}
			if (k[6]) {
				j = k[6][s](V), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), (j[0].slice(-3) == "deg" || j[0].slice(-1) == "°") && (d /= 360), k[1].toLowerCase().slice(0, 4) == "hsla" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100);
				return a.hsl2rgb(d, e, f, h)
			}
			k = {
				r: d,
				g: e,
				b: f,
				toString: bv
			}, k.hex = "#" + (16777216 | f | e << 8 | d << 16).toString(16).slice(1), a.is(h, "finite") && (k.opacity = h);
			return k
		}
		return {
			r: -1,
			g: -1,
			b: -1,
			hex: "none",
			error: 1,
			toString: bv
		}
	}, a), a.hsb = bt(function(b, c, d) {
		return a.hsb2rgb(b, c, d).hex
	}), a.hsl = bt(function(b, c, d) {
		return a.hsl2rgb(b, c, d).hex
	}), a.rgb = bt(function(a, b, c) {
		return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
	}), a.getColor = function(a) {
		var b = this.getColor.start = this.getColor.start || {
			h: 0,
			s: 1,
			b: a || .75
		},
			c = this.hsb2rgb(b.h, b.s, b.b);
		b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
			h: 0,
			s: 1,
			b: b.b
		}));
		return c.hex
	}, a.getColor.reset = function() {
		delete this.start
	}, a.parsePathString = bt(function(b) {
		if (!b) return null;
		var c = {
			a: 7,
			c: 6,
			h: 1,
			l: 2,
			m: 2,
			r: 4,
			q: 4,
			s: 4,
			t: 2,
			v: 1,
			z: 0
		},
			d = [];
		a.is(b, E) && a.is(b[0], E) && (d = by(b)), d.length || r(b).replace(Y, function(a, b, e) {
			var f = [],
				g = b.toLowerCase();
			e.replace($, function(a, b) {
				b && f.push(+b)
			}), g == "m" && f.length > 2 && (d.push([b][n](f.splice(0, 2))), g = "l", b = b == "m" ? "l" : "L");
			if (g == "r") d.push([b][n](f));
			else while (f.length >= c[g]) {
				d.push([b][n](f.splice(0, c[g])));
				if (!c[g]) break
			}
		}), d.toString = a._path2string;
		return d
	}), a.parseTransformString = bt(function(b) {
		if (!b) return null;
		var c = {
			r: 3,
			s: 4,
			t: 2,
			m: 6
		},
			d = [];
		a.is(b, E) && a.is(b[0], E) && (d = by(b)), d.length || r(b).replace(Z, function(a, b, c) {
			var e = [],
				f = v.call(b);
			c.replace($, function(a, b) {
				b && e.push(+b)
			}), d.push([b][n](e))
		}), d.toString = a._path2string;
		return d
	}), a.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
		var j = 1 - i,
			k = A(j, 3),
			l = A(j, 2),
			m = i * i,
			n = m * i,
			o = k * a + l * 3 * i * c + j * 3 * i * i * e + n * g,
			p = k * b + l * 3 * i * d + j * 3 * i * i * f + n * h,
			q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
			r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
			s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
			t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
			u = j * a + i * c,
			v = j * b + i * d,
			x = j * e + i * g,
			y = j * f + i * h,
			z = 90 - w.atan2(q - s, r - t) * 180 / B;
		(q > s || r < t) && (z += 180);
		return {
			x: o,
			y: p,
			m: {
				x: q,
				y: r
			},
			n: {
				x: s,
				y: t
			},
			start: {
				x: u,
				y: v
			},
			end: {
				x: x,
				y: y
			},
			alpha: z
		}
	};
	var bx = bt(function(a) {
		if (!a) return {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		a = bG(a);
		var b = 0,
			c = 0,
			d = [],
			e = [],
			f;
		for (var g = 0, h = a.length; g < h; g++) {
			f = a[g];
			if (f[0] == "M") b = f[1], c = f[2], d.push(b), e.push(c);
			else {
				var i = bF(b, c, f[1], f[2], f[3], f[4], f[5], f[6]);
				d = d[n](i.min.x, i.max.x), e = e[n](i.min.y, i.max.y), b = f[5], c = f[6]
			}
		}
		var j = y[m](0, d),
			k = y[m](0, e);
		return {
			x: j,
			y: k,
			width: x[m](0, d) - j,
			height: x[m](0, e) - k
		}
	}, null, function(a) {
		return {
			x: a.x,
			y: a.y,
			width: a.width,
			height: a.height
		}
	}),
		by = function(b) {
			var c = [];
			if (!a.is(b, E) || !a.is(b && b[0], E)) b = a.parsePathString(b);
			for (var d = 0, e = b.length; d < e; d++) {
				c[d] = [];
				for (var f = 0, g = b[d].length; f < g; f++) c[d][f] = b[d][f]
			}
			c.toString = a._path2string;
			return c
		},
		bz = a._pathToRelative = bt(function(b) {
			if (!a.is(b, E) || !a.is(b && b[0], E)) b = a.parsePathString(b);
			var c = [],
				d = 0,
				e = 0,
				f = 0,
				g = 0,
				h = 0;
			b[0][0] == "M" && (d = b[0][1], e = b[0][2], f = d, g = e, h++, c.push(["M", d, e]));
			for (var i = h, j = b.length; i < j; i++) {
				var k = c[i] = [],
					l = b[i];
				if (l[0] != v.call(l[0])) {
					k[0] = v.call(l[0]);
					switch (k[0]) {
					case "a":
						k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] - d).toFixed(3), k[7] = +(l[7] - e).toFixed(3);
						break;
					case "v":
						k[1] = +(l[1] - e).toFixed(3);
						break;
					case "m":
						f = l[1], g = l[2];
					default:
						for (var m = 1, n = l.length; m < n; m++) k[m] = +(l[m] - (m % 2 ? d : e)).toFixed(3)
					}
				} else {
					k = c[i] = [], l[0] == "m" && (f = l[1] + d, g = l[2] + e);
					for (var o = 0, p = l.length; o < p; o++) c[i][o] = l[o]
				}
				var q = c[i].length;
				switch (c[i][0]) {
				case "z":
					d = f, e = g;
					break;
				case "h":
					d += +c[i][q - 1];
					break;
				case "v":
					e += +c[i][q - 1];
					break;
				default:
					d += +c[i][q - 2], e += +c[i][q - 1]
				}
			}
			c.toString = a._path2string;
			return c
		}, 0, by),
		bA = a._pathToAbsolute = bt(function(b) {
			if (!a.is(b, E) || !a.is(b && b[0], E)) b = a.parsePathString(b);
			if (!b || !b.length) return [["M", 0, 0]];
			var c = [],
				d = 0,
				e = 0,
				f = 0,
				g = 0,
				h = 0;
			b[0][0] == "M" && (d = +b[0][1], e = +b[0][2], f = d, g = e, h++, c[0] = ["M", d, e]);
			for (var i, j, k = h, l = b.length; k < l; k++) {
				c.push(i = []), j = b[k];
				if (j[0] != S.call(j[0])) {
					i[0] = S.call(j[0]);
					switch (i[0]) {
					case "A":
						i[1] = j[1], i[2] = j[2], i[3] = j[3], i[4] = j[4], i[5] = j[5], i[6] = +(j[6] + d), i[7] = +(j[7] + e);
						break;
					case "V":
						i[1] = +j[1] + e;
						break;
					case "H":
						i[1] = +j[1] + d;
						break;
					case "R":
						var m = [d, e][n](j.slice(1));
						for (var o = 2, p = m.length; o < p; o++) m[o] = +m[o] + d, m[++o] = +m[o] + e;
						c.pop(), c = c[n](bw(m));
						break;
					case "M":
						f = +j[1] + d, g = +j[2] + e;
					default:
						for (o = 1, p = j.length; o < p; o++) i[o] = +j[o] + (o % 2 ? d : e)
					}
				} else if (j[0] == "R") m = [d, e][n](j.slice(1)), c.pop(), c = c[n](bw(m)), i = ["R"][n](j.slice(-2));
				else for (var q = 0, r = j.length; q < r; q++) i[q] = j[q];
				switch (i[0]) {
				case "Z":
					d = f, e = g;
					break;
				case "H":
					d = i[1];
					break;
				case "V":
					e = i[1];
					break;
				case "M":
					f = i[i.length - 2], g = i[i.length - 1];
				default:
					d = i[i.length - 2], e = i[i.length - 1]
				}
			}
			c.toString = a._path2string;
			return c
		}, null, by),
		bB = function(a, b, c, d) {
			return [a, b, c, d, c, d]
		},
		bC = function(a, b, c, d, e, f) {
			var g = 1 / 3,
				h = 2 / 3;
			return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
		},
		bD = function(a, b, c, d, e, f, g, h, i, j) {
			var k = B * 120 / 180,
				l = B / 180 * (+e || 0),
				m = [],
				o, p = bt(function(a, b, c) {
					var d = a * w.cos(c) - b * w.sin(c),
						e = a * w.sin(c) + b * w.cos(c);
					return {
						x: d,
						y: e
					}
				});
			if (!j) {
				o = p(a, b, -l), a = o.x, b = o.y, o = p(h, i, -l), h = o.x, i = o.y;
				var q = w.cos(B / 180 * e),
					r = w.sin(B / 180 * e),
					t = (a - h) / 2,
					u = (b - i) / 2,
					v = t * t / (c * c) + u * u / (d * d);
				v > 1 && (v = w.sqrt(v), c = v * c, d = v * d);
				var x = c * c,
					y = d * d,
					A = (f == g ? -1 : 1) * w.sqrt(z((x * y - x * u * u - y * t * t) / (x * u * u + y * t * t))),
					C = A * c * u / d + (a + h) / 2,
					D = A * -d * t / c + (b + i) / 2,
					E = w.asin(((b - D) / d).toFixed(9)),
					F = w.asin(((i - D) / d).toFixed(9));
				E = a < C ? B - E : E, F = h < C ? B - F : F, E < 0 && (E = B * 2 + E), F < 0 && (F = B * 2 + F), g && E > F && (E = E - B * 2), !g && F > E && (F = F - B * 2)
			} else E = j[0], F = j[1], C = j[2], D = j[3];
			var G = F - E;
			if (z(G) > k) {
				var H = F,
					I = h,
					J = i;
				F = E + k * (g && F > E ? 1 : -1), h = C + c * w.cos(F), i = D + d * w.sin(F), m = bD(h, i, c, d, e, 0, g, I, J, [F, H, C, D])
			}
			G = F - E;
			var K = w.cos(E),
				L = w.sin(E),
				M = w.cos(F),
				N = w.sin(F),
				O = w.tan(G / 4),
				P = 4 / 3 * c * O,
				Q = 4 / 3 * d * O,
				R = [a, b],
				S = [a + P * L, b - Q * K],
				T = [h + P * N, i - Q * M],
				U = [h, i];
			S[0] = 2 * R[0] - S[0], S[1] = 2 * R[1] - S[1];
			if (j) return [S, T, U][n](m);
			m = [S, T, U][n](m).join()[s](",");
			var V = [];
			for (var W = 0, X = m.length; W < X; W++) V[W] = W % 2 ? p(m[W - 1], m[W], l).y : p(m[W], m[W + 1], l).x;
			return V
		},
		bE = function(a, b, c, d, e, f, g, h, i) {
			var j = 1 - i;
			return {
				x: A(j, 3) * a + A(j, 2) * 3 * i * c + j * 3 * i * i * e + A(i, 3) * g,
				y: A(j, 3) * b + A(j, 2) * 3 * i * d + j * 3 * i * i * f + A(i, 3) * h
			}
		},
		bF = bt(function(a, b, c, d, e, f, g, h) {
			var i = e - 2 * c + a - (g - 2 * e + c),
				j = 2 * (c - a) - 2 * (e - c),
				k = a - c,
				l = (-j + w.sqrt(j * j - 4 * i * k)) / 2 / i,
				n = (-j - w.sqrt(j * j - 4 * i * k)) / 2 / i,
				o = [b, h],
				p = [a, g],
				q;
			z(l) > "1e12" && (l = .5), z(n) > "1e12" && (n = .5), l > 0 && l < 1 && (q = bE(a, b, c, d, e, f, g, h, l), p.push(q.x), o.push(q.y)), n > 0 && n < 1 && (q = bE(a, b, c, d, e, f, g, h, n), p.push(q.x), o.push(q.y)), i = f - 2 * d + b - (h - 2 * f + d), j = 2 * (d - b) - 2 * (f - d), k = b - d, l = (-j + w.sqrt(j * j - 4 * i * k)) / 2 / i, n = (-j - w.sqrt(j * j - 4 * i * k)) / 2 / i, z(l) > "1e12" && (l = .5), z(n) > "1e12" && (n = .5), l > 0 && l < 1 && (q = bE(a, b, c, d, e, f, g, h, l), p.push(q.x), o.push(q.y)), n > 0 && n < 1 && (q = bE(a, b, c, d, e, f, g, h, n), p.push(q.x), o.push(q.y));
			return {
				min: {
					x: y[m](0, p),
					y: y[m](0, o)
				},
				max: {
					x: x[m](0, p),
					y: x[m](0, o)
				}
			}
		}),
		bG = a._path2curve = bt(function(a, b) {
			var c = bA(a),
				d = b && bA(b),
				e = {
					x: 0,
					y: 0,
					bx: 0,
					by: 0,
					X: 0,
					Y: 0,
					qx: null,
					qy: null
				},
				f = {
					x: 0,
					y: 0,
					bx: 0,
					by: 0,
					X: 0,
					Y: 0,
					qx: null,
					qy: null
				},
				g = function(a, b) {
					var c, d;
					if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
					!(a[0] in {
						T: 1,
						Q: 1
					}) && (b.qx = b.qy = null);
					switch (a[0]) {
					case "M":
						b.X = a[1], b.Y = a[2];
						break;
					case "A":
						a = ["C"][n](bD[m](0, [b.x, b.y][n](a.slice(1))));
						break;
					case "S":
						c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d][n](a.slice(1));
						break;
					case "T":
						b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"][n](bC(b.x, b.y, b.qx, b.qy, a[1], a[2]));
						break;
					case "Q":
						b.qx = a[1], b.qy = a[2], a = ["C"][n](bC(b.x, b.y, a[1], a[2], a[3], a[4]));
						break;
					case "L":
						a = ["C"][n](bB(b.x, b.y, a[1], a[2]));
						break;
					case "H":
						a = ["C"][n](bB(b.x, b.y, a[1], b.y));
						break;
					case "V":
						a = ["C"][n](bB(b.x, b.y, b.x, a[1]));
						break;
					case "Z":
						a = ["C"][n](bB(b.x, b.y, b.X, b.Y))
					}
					return a
				},
				h = function(a, b) {
					if (a[b].length > 7) {
						a[b].shift();
						var e = a[b];
						while (e.length) a.splice(b++, 0, ["C"][n](e.splice(0, 6)));
						a.splice(b, 1), k = x(c.length, d && d.length || 0)
					}
				},
				i = function(a, b, e, f, g) {
					a && b && a[g][0] == "M" && b[g][0] != "M" && (b.splice(g, 0, ["M", f.x, f.y]), e.bx = 0, e.by = 0, e.x = a[g][1], e.y = a[g][2], k = x(c.length, d && d.length || 0))
				};
			for (var j = 0, k = x(c.length, d && d.length || 0); j < k; j++) {
				c[j] = g(c[j], e), h(c, j), d && (d[j] = g(d[j], f)), d && h(d, j), i(c, d, e, f, j), i(d, c, f, e, j);
				var l = c[j],
					o = d && d[j],
					p = l.length,
					q = d && o.length;
				e.x = l[p - 2], e.y = l[p - 1], e.bx = Q(l[p - 4]) || e.x, e.by = Q(l[p - 3]) || e.y, f.bx = d && (Q(o[q - 4]) || f.x), f.by = d && (Q(o[q - 3]) || f.y), f.x = d && o[q - 2], f.y = d && o[q - 1]
			}
			return d ? [c, d] : c
		}, null, by),
		bH = a._parseDots = bt(function(b) {
			var c = [];
			for (var d = 0, e = b.length; d < e; d++) {
				var f = {},
					g = b[d].match(/^([^:]*):?([\d\.]*)/);
				f.color = a.getRGB(g[1]);
				if (f.color.error) return null;
				f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), c.push(f)
			}
			for (d = 1, e = c.length - 1; d < e; d++) if (!c[d].offset) {
				var h = Q(c[d - 1].offset || 0),
					i = 0;
				for (var j = d + 1; j < e; j++) if (c[j].offset) {
					i = c[j].offset;
					break
				}
				i || (i = 100, j = e), i = Q(i);
				var k = (i - h) / (j - d + 1);
				for (; d < j; d++) h += k, c[d].offset = h + "%"
			}
			return c
		}),
		bI = a._tear = function(a, b) {
			a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
		},
		bJ = a._tofront = function(a, b) {
			b.top !== a && (bI(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
		},
		bK = a._toback = function(a, b) {
			b.bottom !== a && (bI(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
		},
		bL = a._insertafter = function(a, b, c) {
			bI(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
		},
		bM = a._insertbefore = function(a, b, c) {
			bI(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
		},
		bN = function(a) {
			return function() {
				throw new Error("Raphaël: you are calling to method “" + a + "” of removed object")
			}
		},
		bO = a._extractTransform = function(b, c) {
			if (c == null) return b._.transform;
			c = r(c).replace(/\.{3}|\u2026/g, b._.transform || p);
			var d = a.parseTransformString(c),
				e = 0,
				f = 0,
				g = 0,
				h = 1,
				i = 1,
				j = b._,
				k = new bR;
			j.transform = d || [];
			if (d) for (var l = 0, m = d.length; l < m; l++) {
				var n = d[l],
					o = n.length,
					q = r(n[0]).toLowerCase(),
					s = n[0] != q,
					t = s ? k.invert() : 0,
					u, v, w, x, y;
				q == "t" && o == 3 ? s ? (u = t.x(0, 0), v = t.y(0, 0), w = t.x(n[1], n[2]), x = t.y(n[1], n[2]), k.translate(w - u, x - v)) : k.translate(n[1], n[2]) : q == "r" ? o == 2 ? (y = y || b.getBBox(1), k.rotate(n[1], y.x + y.width / 2, y.y + y.height / 2), e += n[1]) : o == 4 && (s ? (w = t.x(n[2], n[3]), x = t.y(n[2], n[3]), k.rotate(n[1], w, x)) : k.rotate(n[1], n[2], n[3]), e += n[1]) : q == "s" ? o == 2 || o == 3 ? (y = y || b.getBBox(1), k.scale(n[1], n[o - 1], y.x + y.width / 2, y.y + y.height / 2), h *= n[1], i *= n[o - 1]) : o == 5 && (s ? (w = t.x(n[3], n[4]), x = t.y(n[3], n[4]), k.scale(n[1], n[2], w, x)) : k.scale(n[1], n[2], n[3], n[4]), h *= n[1], i *= n[2]) : q == "m" && o == 7 && k.add(n[1], n[2], n[3], n[4], n[5], n[6]), j.dirtyT = 1, b.matrix = k
			}
			b.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, h == 1 && i == 1 && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
		},
		bP = function(a) {
			var b = a[0];
			switch (b.toLowerCase()) {
			case "t":
				return [b, 0, 0];
			case "m":
				return [b, 1, 0, 0, 1, 0, 0];
			case "r":
				return a.length == 4 ? [b, 0, a[2], a[3]] : [b, 0];
			case "s":
				return a.length == 5 ? [b, 1, 1, a[3], a[4]] : a.length == 3 ? [b, 1, 1] : [b, 1]
			}
		},
		bQ = a._equaliseTransform = function(b, c) {
			c = r(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
			var d = x(b.length, c.length),
				e = [],
				f = [],
				g = 0,
				h, i, j, k;
			for (; g < d; g++) {
				j = b[g] || bP(c[g]), k = c[g] || bP(j);
				if (j[0] != k[0] || j[0].toLowerCase() == "r" && (j[2] != k[2] || j[3] != k[3]) || j[0].toLowerCase() == "s" && (j[3] != k[3] || j[4] != k[4])) return;
				e[g] = [], f[g] = [];
				for (h = 0, i = x(j.length, k.length); h < i; h++) h in j && (e[g][h] = j[h]), h in k && (f[g][h] = k[h])
			}
			return {
				from: e,
				to: f
			}
		};
	a._getContainer = function(b, c, d, e) {
		var f;
		f = e == null && !a.is(b, "object") ? h.doc.getElementById(b) : b;
		if (f != null) {
			if (f.tagName) return c == null ? {
				container: f,
				width: f.style.pixelWidth || f.offsetWidth,
				height: f.style.pixelHeight || f.offsetHeight
			} : {
				container: f,
				width: c,
				height: d
			};
			return {
				container: 1,
				x: b,
				y: c,
				width: d,
				height: e
			}
		}
	}, a.pathToRelative = bz, a._engine = {}, a.path2curve = bG, a.matrix = function(a, b, c, d, e, f) {
		return new bR(a, b, c, d, e, f)
	}, function(b) {
		function d(a) {
			var b = w.sqrt(c(a));
			a[0] && (a[0] /= b), a[1] && (a[1] /= b)
		}
		function c(a) {
			return a[0] * a[0] + a[1] * a[1]
		}
		b.add = function(a, b, c, d, e, f) {
			var g = [
				[],
				[],
				[]
			],
				h = [
					[this.a, this.c, this.e],
					[this.b, this.d, this.f],
					[0, 0, 1]
				],
				i = [
					[a, c, e],
					[b, d, f],
					[0, 0, 1]
				],
				j, k, l, m;
			a && a instanceof bR && (i = [
				[a.a, a.c, a.e],
				[a.b, a.d, a.f],
				[0, 0, 1]
			]);
			for (j = 0; j < 3; j++) for (k = 0; k < 3; k++) {
				m = 0;
				for (l = 0; l < 3; l++) m += h[j][l] * i[l][k];
				g[j][k] = m
			}
			this.a = g[0][0], this.b = g[1][0], this.c = g[0][1], this.d = g[1][1], this.e = g[0][2], this.f = g[1][2]
		}, b.invert = function() {
			var a = this,
				b = a.a * a.d - a.b * a.c;
			return new bR(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
		}, b.clone = function() {
			return new bR(this.a, this.b, this.c, this.d, this.e, this.f)
		}, b.translate = function(a, b) {
			this.add(1, 0, 0, 1, a, b)
		}, b.scale = function(a, b, c, d) {
			b == null && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
		}, b.rotate = function(b, c, d) {
			b = a.rad(b), c = c || 0, d = d || 0;
			var e = +w.cos(b).toFixed(9),
				f = +w.sin(b).toFixed(9);
			this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d)
		}, b.x = function(a, b) {
			return a * this.a + b * this.c + this.e
		}, b.y = function(a, b) {
			return a * this.b + b * this.d + this.f
		}, b.get = function(a) {
			return +this[r.fromCharCode(97 + a)].toFixed(4)
		}, b.toString = function() {
			return a.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
		}, b.toFilter = function() {
			return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
		}, b.offset = function() {
			return [this.e.toFixed(4), this.f.toFixed(4)]
		}, b.split = function() {
			var b = {};
			b.dx = this.e, b.dy = this.f;
			var e = [
				[this.a, this.c],
				[this.b, this.d]
			];
			b.scalex = w.sqrt(c(e[0])), d(e[0]), b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear], b.scaley = w.sqrt(c(e[1])), d(e[1]), b.shear /= b.scaley;
			var f = -e[0][1],
				g = e[1][1];
			g < 0 ? (b.rotate = a.deg(w.acos(g)), f < 0 && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(w.asin(f)), b.isSimple = !+b.shear.toFixed(9) && (b.scalex.toFixed(9) == b.scaley.toFixed(9) || !b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate;
			return b
		}, b.toTransformString = function(a) {
			var b = a || this[s]();
			return b.isSimple ? "t" + [b.dx, b.dy] + "s" + [b.scalex, b.scaley, 0, 0] + "r" + [b.rotate, 0, 0] : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
		}
	}(bR.prototype);
	var bS = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
	navigator.vendor == "Apple Computer, Inc." && (bS && bS[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && bS && bS[1] < 8 ? k.safari = function() {
		var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
			stroke: "none"
		});
		setTimeout(function() {
			a.remove()
		})
	} : k.safari = bd;
	var bT = function() {
			this.returnValue = !1
		},
		bU = function() {
			return this.originalEvent.preventDefault()
		},
		bV = function() {
			this.cancelBubble = !0
		},
		bW = function() {
			return this.originalEvent.stopPropagation()
		},
		bX = function() {
			if (h.doc.addEventListener) return function(a, b, c, d) {
				var e = o && u[b] ? u[b] : b,
					f = function(e) {
						var f = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
							i = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
							j = e.clientX + i,
							k = e.clientY + f;
						if (o && u[g](b)) for (var l = 0, m = e.targetTouches && e.targetTouches.length; l < m; l++) if (e.targetTouches[l].target == a) {
							var n = e;
							e = e.targetTouches[l], e.originalEvent = n, e.preventDefault = bU, e.stopPropagation = bW;
							break
						}
						return c.call(d, e, j, k)
					};
				a.addEventListener(e, f, !1);
				return function() {
					a.removeEventListener(e, f, !1);
					return !0
				}
			};
			if (h.doc.attachEvent) return function(a, b, c, d) {
				var e = function(a) {
						a = a || h.win.event;
						var b = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
							e = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
							f = a.clientX + e,
							g = a.clientY + b;
						a.preventDefault = a.preventDefault || bT, a.stopPropagation = a.stopPropagation || bV;
						return c.call(d, a, f, g)
					};
				a.attachEvent("on" + b, e);
				var f = function() {
						a.detachEvent("on" + b, e);
						return !0
					};
				return f
			}
		}(),
		bY = [],
		bZ = function(a) {
			var b = a.clientX,
				c = a.clientY,
				d = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
				e = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
				f, g = bY.length;
			while (g--) {
				f = bY[g];
				if (o) {
					var i = a.touches.length,
						j;
					while (i--) {
						j = a.touches[i];
						if (j.identifier == f.el._drag.id) {
							b = j.clientX, c = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
							break
						}
					}
				} else a.preventDefault();
				var k = f.el.node,
					l, m = k.nextSibling,
					n = k.parentNode,
					p = k.style.display;
				h.win.opera && n.removeChild(k), k.style.display = "none", l = f.el.paper.getElementByPoint(b, c), k.style.display = p, h.win.opera && (m ? n.insertBefore(k, m) : n.appendChild(k)), l && eve("drag.over." + f.el.id, f.el, l), b += e, c += d, eve("drag.move." + f.el.id, f.move_scope || f.el, b - f.el._drag.x, c - f.el._drag.y, b, c, a)
			}
		},
		b$ = function(b) {
			a.unmousemove(bZ).unmouseup(b$);
			var c = bY.length,
				d;
			while (c--) d = bY[c], d.el._drag = {}, eve("drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, b);
			bY = []
		},
		b_ = a.el = {};
	for (var ca = t.length; ca--;)(function(b) {
		a[b] = b_[b] = function(c, d) {
			a.is(c, "function") && (this.events = this.events || [], this.events.push({
				name: b,
				f: c,
				unbind: bX(this.shape || this.node || h.doc, b, c, d || this)
			}));
			return this
		}, a["un" + b] = b_["un" + b] = function(a) {
			var c = this.events,
				d = c.length;
			while (d--) if (c[d].name == b && c[d].f == a) {
				c[d].unbind(), c.splice(d, 1), !c.length && delete this.events;
				return this
			}
			return this
		}
	})(t[ca]);
	b_.data = function(b, c) {
		var d = ba[this.id] = ba[this.id] || {};
		if (arguments.length == 1) {
			if (a.is(b, "object")) {
				for (var e in b) b[g](e) && this.data(e, b[e]);
				return this
			}
			eve("data.get." + this.id, this, d[b], b);
			return d[b]
		}
		d[b] = c, eve("data.set." + this.id, this, c, b);
		return this
	}, b_.removeData = function(a) {
		a == null ? ba[this.id] = {} : ba[this.id] && delete ba[this.id][a];
		return this
	}, b_.hover = function(a, b, c, d) {
		return this.mouseover(a, c).mouseout(b, d || c)
	}, b_.unhover = function(a, b) {
		return this.unmouseover(a).unmouseout(b)
	}, b_.drag = function(b, c, d, e, f, g) {
		function i(i) {
			(i.originalEvent || i).preventDefault();
			var j = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
				k = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft;
			this._drag.x = i.clientX + k, this._drag.y = i.clientY + j, this._drag.id = i.identifier, !bY.length && a.mousemove(bZ).mouseup(b$), bY.push({
				el: this,
				move_scope: e,
				start_scope: f,
				end_scope: g
			}), c && eve.on("drag.start." + this.id, c), b && eve.on("drag.move." + this.id, b), d && eve.on("drag.end." + this.id, d), eve("drag.start." + this.id, f || e || this, i.clientX + k, i.clientY + j, i)
		}
		this._drag = {}, this.mousedown(i);
		return this
	}, b_.onDragOver = function(a) {
		a ? eve.on("drag.over." + this.id, a) : eve.unbind("drag.over." + this.id)
	}, b_.undrag = function() {
		var b = bY.length;
		while (b--) bY[b].el == this && (a.unmousedown(bY[b].start), bY.splice(b++, 1), eve.unbind("drag.*." + this.id));
		!bY.length && a.unmousemove(bZ).unmouseup(b$)
	}, k.circle = function(b, c, d) {
		var e = a._engine.circle(this, b || 0, c || 0, d || 0);
		this.__set__ && this.__set__.push(e);
		return e
	}, k.rect = function(b, c, d, e, f) {
		var g = a._engine.rect(this, b || 0, c || 0, d || 0, e || 0, f || 0);
		this.__set__ && this.__set__.push(g);
		return g
	}, k.ellipse = function(b, c, d, e) {
		var f = a._engine.ellipse(this, b || 0, c || 0, d || 0, e || 0);
		this.__set__ && this.__set__.push(f);
		return f
	}, k.path = function(b) {
		b && !a.is(b, D) && !a.is(b[0], E) && (b += p);
		var c = a._engine.path(a.format[m](a, arguments), this);
		this.__set__ && this.__set__.push(c);
		return c
	}, k.image = function(b, c, d, e, f) {
		var g = a._engine.image(this, b || "about:blank", c || 0, d || 0, e || 0, f || 0);
		this.__set__ && this.__set__.push(g);
		return g
	}, k.text = function(b, c, d) {
		var e = a._engine.text(this, b || 0, c || 0, r(d));
		this.__set__ && this.__set__.push(e);
		return e
	}, k.set = function(b) {
		!a.is(b, "array") && (b = Array.prototype.splice.call(arguments, 0, arguments.length));
		var c = new cs(b);
		this.__set__ && this.__set__.push(c);
		return c
	}, k.setStart = function(a) {
		this.__set__ = a || this.set()
	}, k.setFinish = function(a) {
		var b = this.__set__;
		delete this.__set__;
		return b
	}, k.setSize = function(b, c) {
		return a._engine.setSize.call(this, b, c)
	}, k.setViewBox = function(b, c, d, e, f) {
		return a._engine.setViewBox.call(this, b, c, d, e, f)
	}, k.top = k.bottom = null, k.raphael = a;
	var cb = function(a) {
			var b = a.getBoundingClientRect(),
				c = a.ownerDocument,
				d = c.body,
				e = c.documentElement,
				f = e.clientTop || d.clientTop || 0,
				g = e.clientLeft || d.clientLeft || 0,
				i = b.top + (h.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
				j = b.left + (h.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
			return {
				y: i,
				x: j
			}
		};
	k.getElementByPoint = function(a, b) {
		var c = this,
			d = c.canvas,
			e = h.doc.elementFromPoint(a, b);
		if (h.win.opera && e.tagName == "svg") {
			var f = cb(d),
				g = d.createSVGRect();
			g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
			var i = d.getIntersectionList(g, null);
			i.length && (e = i[i.length - 1])
		}
		if (!e) return null;
		while (e.parentNode && e != d.parentNode && !e.raphael) e = e.parentNode;
		e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null;
		return e
	}, k.getById = function(a) {
		var b = this.bottom;
		while (b) {
			if (b.id == a) return b;
			b = b.next
		}
		return null
	}, k.forEach = function(a, b) {
		var c = this.bottom;
		while (c) {
			if (a.call(b, c) === !1) return this;
			c = c.next
		}
		return this
	}, b_.getBBox = function(a) {
		if (this.removed) return {};
		var b = this._;
		if (a) {
			if (b.dirty || !b.bboxwt) this.realPath = bh[this.type](this), b.bboxwt = bx(this.realPath), b.bboxwt.toString = cd, b.dirty = 0;
			return b.bboxwt
		}
		if (b.dirty || b.dirtyT || !b.bbox) {
			if (b.dirty || !this.realPath) b.bboxwt = 0, this.realPath = bh[this.type](this);
			b.bbox = bx(bi(this.realPath, this.matrix)), b.bbox.toString = cd, b.dirty = b.dirtyT = 0
		}
		return b.bbox
	}, b_.clone = function() {
		if (this.removed) return null;
		var a = this.paper[this.type]().attr(this.attr());
		this.__set__ && this.__set__.push(a);
		return a
	}, b_.glow = function(a) {
		if (this.type == "text") return null;
		a = a || {};
		var b = {
			width: (a.width || 10) + (+this.attr("stroke-width") || 1),
			fill: a.fill || !1,
			opacity: a.opacity || .5,
			offsetx: a.offsetx || 0,
			offsety: a.offsety || 0,
			color: a.color || "#000"
		},
			c = b.width / 2,
			d = this.paper,
			e = d.set(),
			f = this.realPath || bh[this.type](this);
		f = this.matrix ? bi(f, this.matrix) : f;
		for (var g = 1; g < c + 1; g++) e.push(d.path(f).attr({
			stroke: b.color,
			fill: b.fill ? b.color : "none",
			"stroke-linejoin": "round",
			"stroke-linecap": "round",
			"stroke-width": +(b.width / c * g).toFixed(3),
			opacity: +(b.opacity / c).toFixed(3)
		}));
		return e.insertBefore(this).translate(b.offsetx, b.offsety)
	};
	var ce = {},
		cf = function(b, c, d, e, f, g, h, i, j) {
			var k = 0,
				l = 100,
				m = [b, c, d, e, f, g, h, i].join(),
				n = ce[m],
				o, p;
			!n && (ce[m] = n = {
				data: []
			}), n.timer && clearTimeout(n.timer), n.timer = setTimeout(function() {
				delete ce[m]
			}, 2e3);
			if (j != null && !n.precision) {
				var q = cf(b, c, d, e, f, g, h, i);
				n.precision = ~~q * 10, n.data = []
			}
			l = n.precision || l;
			for (var r = 0; r < l + 1; r++) {
				n.data[r * l] ? p = n.data[r * l] : (p = a.findDotsAtSegment(b, c, d, e, f, g, h, i, r / l), n.data[r * l] = p), r && (k += A(A(o.x - p.x, 2) + A(o.y - p.y, 2), .5));
				if (j != null && k >= j) return p;
				o = p
			}
			if (j == null) return k
		},
		cg = function(b, c) {
			return function(d, e, f) {
				d = bG(d);
				var g, h, i, j, k = "",
					l = {},
					m, n = 0;
				for (var o = 0, p = d.length; o < p; o++) {
					i = d[o];
					if (i[0] == "M") g = +i[1], h = +i[2];
					else {
						j = cf(g, h, i[1], i[2], i[3], i[4], i[5], i[6]);
						if (n + j > e) {
							if (c && !l.start) {
								m = cf(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), k += ["C" + m.start.x, m.start.y, m.m.x, m.m.y, m.x, m.y];
								if (f) return k;
								l.start = k, k = ["M" + m.x, m.y + "C" + m.n.x, m.n.y, m.end.x, m.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
								continue
							}
							if (!b && !c) {
								m = cf(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n);
								return {
									x: m.x,
									y: m.y,
									alpha: m.alpha
								}
							}
						}
						n += j, g = +i[5], h = +i[6]
					}
					k += i.shift() + i
				}
				l.end = k, m = b ? n : c ? l : a.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), m.alpha && (m = {
					x: m.x,
					y: m.y,
					alpha: m.alpha
				});
				return m
			}
		},
		ch = cg(1),
		ci = cg(),
		cj = cg(0, 1);
	a.getTotalLength = ch, a.getPointAtLength = ci, a.getSubpath = function(a, b, c) {
		if (this.getTotalLength(a) - c < 1e-6) return cj(a, b).end;
		var d = cj(a, c, 1);
		return b ? cj(d, b).end : d
	}, b_.getTotalLength = function() {
		if (this.type == "path") {
			if (this.node.getTotalLength) return this.node.getTotalLength();
			return ch(this.attrs.path)
		}
	}, b_.getPointAtLength = function(a) {
		if (this.type == "path") return ci(this.attrs.path, a)
	}, b_.getSubpath = function(b, c) {
		if (this.type == "path") return a.getSubpath(this.attrs.path, b, c)
	};
	var ck = a.easing_formulas = {
		linear: function(a) {
			return a
		},
		"<": function(a) {
			return A(a, 1.7)
		},
		">": function(a) {
			return A(a, .48)
		},
		"<>": function(a) {
			var b = .48 - a / 1.04,
				c = w.sqrt(.1734 + b * b),
				d = c - b,
				e = A(z(d), 1 / 3) * (d < 0 ? -1 : 1),
				f = -c - b,
				g = A(z(f), 1 / 3) * (f < 0 ? -1 : 1),
				h = e + g + .5;
			return (1 - h) * 3 * h * h + h * h * h
		},
		backIn: function(a) {
			var b = 1.70158;
			return a * a * ((b + 1) * a - b)
		},
		backOut: function(a) {
			a = a - 1;
			var b = 1.70158;
			return a * a * ((b + 1) * a + b) + 1
		},
		elastic: function(a) {
			if (a == !! a) return a;
			return A(2, -10 * a) * w.sin((a - .075) * 2 * B / .3) + 1
		},
		bounce: function(a) {
			var b = 7.5625,
				c = 2.75,
				d;
			a < 1 / c ? d = b * a * a : a < 2 / c ? (a -= 1.5 / c, d = b * a * a + .75) : a < 2.5 / c ? (a -= 2.25 / c, d = b * a * a + .9375) : (a -= 2.625 / c, d = b * a * a + .984375);
			return d
		}
	};
	ck.easeIn = ck["ease-in"] = ck["<"], ck.easeOut = ck["ease-out"] = ck[">"], ck.easeInOut = ck["ease-in-out"] = ck["<>"], ck["back-in"] = ck.backIn, ck["back-out"] = ck.backOut;
	var cl = [],
		cm = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(a) {
		setTimeout(a, 16)
	}, cn = function() {
		var b = +(new Date),
			c = 0;
		for (; c < cl.length; c++) {
			var d = cl[c];
			if (d.el.removed || d.paused) continue;
			var e = b - d.start,
				f = d.ms,
				h = d.easing,
				i = d.from,
				j = d.diff,
				k = d.to,
				l = d.t,
				m = d.el,
				o = {},
				p, r = {},
				s;
			d.initstatus ? (e = (d.initstatus * d.anim.top - d.prev) / (d.percent - d.prev) * f, d.status = d.initstatus, delete d.initstatus, d.stop && cl.splice(c--, 1)) : d.status = (d.prev + (d.percent - d.prev) * (e / f)) / d.anim.top;
			if (e < 0) continue;
			if (e < f) {
				var t = h(e / f);
				for (var u in i) if (i[g](u)) {
					switch (U[u]) {
					case C:
						p = +i[u] + t * f * j[u];
						break;
					case "colour":
						p = "rgb(" + [co(O(i[u].r + t * f * j[u].r)), co(O(i[u].g + t * f * j[u].g)), co(O(i[u].b + t * f * j[u].b))].join(",") + ")";
						break;
					case "path":
						p = [];
						for (var v = 0, w = i[u].length; v < w; v++) {
							p[v] = [i[u][v][0]];
							for (var x = 1, y = i[u][v].length; x < y; x++) p[v][x] = +i[u][v][x] + t * f * j[u][v][x];
							p[v] = p[v].join(q)
						}
						p = p.join(q);
						break;
					case "transform":
						if (j[u].real) {
							p = [];
							for (v = 0, w = i[u].length; v < w; v++) {
								p[v] = [i[u][v][0]];
								for (x = 1, y = i[u][v].length; x < y; x++) p[v][x] = i[u][v][x] + t * f * j[u][v][x]
							}
						} else {
							var z = function(a) {
									return +i[u][a] + t * f * j[u][a]
								};
							p = [
								["m", z(0), z(1), z(2), z(3), z(4), z(5)]
							]
						}
						break;
					case "csv":
						if (u == "clip-rect") {
							p = [], v = 4;
							while (v--) p[v] = +i[u][v] + t * f * j[u][v]
						}
						break;
					default:
						var A = [][n](i[u]);
						p = [], v = m.paper.customAttributes[u].length;
						while (v--) p[v] = +A[v] + t * f * j[u][v]
					}
					o[u] = p
				}
				m.attr(o), function(a, b, c) {
					setTimeout(function() {
						eve("anim.frame." + a, b, c)
					})
				}(m.id, m, d.anim)
			} else {
				(function(b, c, d) {
					setTimeout(function() {
						eve("anim.frame." + c.id, c, d), eve("anim.finish." + c.id, c, d), a.is(b, "function") && b.call(c)
					})
				})(d.callback, m, d.anim), m.attr(k), cl.splice(c--, 1);
				if (d.repeat > 1 && !d.next) {
					for (s in k) k[g](s) && (r[s] = d.totalOrigin[s]);
					d.el.attr(r), cr(d.anim, d.el, d.anim.percents[0], null, d.totalOrigin, d.repeat - 1)
				}
				d.next && !d.stop && cr(d.anim, d.el, d.next, null, d.totalOrigin, d.repeat)
			}
		}
		a.svg && m && m.paper && m.paper.safari(), cl.length && cm(cn)
	}, co = function(a) {
		return a > 255 ? 255 : a < 0 ? 0 : a
	};
	b_.animateWith = function(b, c, d, e, f, g) {
		var h = d ? a.animation(d, e, f, g) : c;
		status = b.status(c);
		return this.animate(h).status(h, status * c.ms / h.ms)
	}, b_.onAnimation = function(a) {
		a ? eve.on("anim.frame." + this.id, a) : eve.unbind("anim.frame." + this.id);
		return this
	}, cq.prototype.delay = function(a) {
		var b = new cq(this.anim, this.ms);
		b.times = this.times, b.del = +a || 0;
		return b
	}, cq.prototype.repeat = function(a) {
		var b = new cq(this.anim, this.ms);
		b.del = this.del, b.times = w.floor(x(a, 0)) || 1;
		return b
	}, a.animation = function(b, c, d, e) {
		if (b instanceof cq) return b;
		if (a.is(d, "function") || !d) e = e || d || null, d = null;
		b = Object(b), c = +c || 0;
		var f = {},
			h, i;
		for (i in b) b[g](i) && Q(i) != i && Q(i) + "%" != i && (h = !0, f[i] = b[i]);
		if (!h) return new cq(b, c);
		d && (f.easing = d), e && (f.callback = e);
		return new cq({
			100: f
		}, c)
	}, b_.animate = function(b, c, d, e) {
		var f = this;
		if (f.removed) {
			e && e.call(f);
			return f
		}
		var g = b instanceof cq ? b : a.animation(b, c, d, e);
		cr(g, f, g.percents[0], null, f.attr());
		return f
	}, b_.setTime = function(a, b) {
		a && b != null && this.status(a, y(b, a.ms) / a.ms);
		return this
	}, b_.status = function(a, b) {
		var c = [],
			d = 0,
			e, f;
		if (b != null) {
			cr(a, this, -1, y(b, 1));
			return this
		}
		e = cl.length;
		for (; d < e; d++) {
			f = cl[d];
			if (f.el.id == this.id && (!a || f.anim == a)) {
				if (a) return f.status;
				c.push({
					anim: f.anim,
					status: f.status
				})
			}
		}
		if (a) return 0;
		return c
	}, b_.pause = function(a) {
		for (var b = 0; b < cl.length; b++) cl[b].el.id == this.id && (!a || cl[b].anim == a) && eve("anim.pause." + this.id, this, cl[b].anim) !== !1 && (cl[b].paused = !0);
		return this
	}, b_.resume = function(a) {
		for (var b = 0; b < cl.length; b++) if (cl[b].el.id == this.id && (!a || cl[b].anim == a)) {
			var c = cl[b];
			eve("anim.resume." + this.id, this, c.anim) !== !1 && (delete c.paused, this.status(c.anim, c.status))
		}
		return this
	}, b_.stop = function(a) {
		for (var b = 0; b < cl.length; b++) cl[b].el.id == this.id && (!a || cl[b].anim == a) && eve("anim.stop." + this.id, this, cl[b].anim) !== !1 && cl.splice(b--, 1);
		return this
	}, b_.toString = function() {
		return "Raphaël’s object"
	};
	var cs = function(a) {
			this.items = [], this.length = 0, this.type = "set";
			if (a) for (var b = 0, c = a.length; b < c; b++) a[b] && (a[b].constructor == b_.constructor || a[b].constructor == cs) && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
		},
		ct = cs.prototype;
	ct.push = function() {
		var a, b;
		for (var c = 0, d = arguments.length; c < d; c++) a = arguments[c], a && (a.constructor == b_.constructor || a.constructor == cs) && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
		return this
	}, ct.pop = function() {
		this.length && delete this[this.length--];
		return this.items.pop()
	}, ct.forEach = function(a, b) {
		for (var c = 0, d = this.items.length; c < d; c++) if (a.call(b, this.items[c], c) === !1) return this;
		return this
	};
	for (var cu in b_) b_[g](cu) && (ct[cu] = function(a) {
		return function() {
			var b = arguments;
			return this.forEach(function(c) {
				c[a][m](c, b)
			})
		}
	}(cu));
	ct.attr = function(b, c) {
		if (b && a.is(b, E) && a.is(b[0], "object")) for (var d = 0, e = b.length; d < e; d++) this.items[d].attr(b[d]);
		else for (var f = 0, g = this.items.length; f < g; f++) this.items[f].attr(b, c);
		return this
	}, ct.clear = function() {
		while (this.length) this.pop()
	}, ct.splice = function(a, b, c) {
		a = a < 0 ? x(this.length + a, 0) : a, b = x(0, y(this.length - a, b));
		var d = [],
			e = [],
			f = [],
			g;
		for (g = 2; g < arguments.length; g++) f.push(arguments[g]);
		for (g = 0; g < b; g++) e.push(this[a + g]);
		for (; g < this.length - a; g++) d.push(this[a + g]);
		var h = f.length;
		for (g = 0; g < h + d.length; g++) this.items[a + g] = this[a + g] = g < h ? f[g] : d[g - h];
		g = this.items.length = this.length -= b - h;
		while (this[g]) delete this[g++];
		return new cs(e)
	}, ct.exclude = function(a) {
		for (var b = 0, c = this.length; b < c; b++) if (this[b] == a) {
			this.splice(b, 1);
			return !0
		}
	}, ct.animate = function(b, c, d, e) {
		(a.is(d, "function") || !d) && (e = d || null);
		var f = this.items.length,
			g = f,
			h, i = this,
			j;
		if (!f) return this;
		e && (j = function() {
			!--f && e.call(i)
		}), d = a.is(d, D) ? d : j;
		var k = a.animation(b, c, d, j);
		h = this.items[--g].animate(k);
		while (g--) this.items[g] && !this.items[g].removed && this.items[g].animateWith(h, k);
		return this
	}, ct.insertAfter = function(a) {
		var b = this.items.length;
		while (b--) this.items[b].insertAfter(a);
		return this
	}, ct.getBBox = function() {
		var a = [],
			b = [],
			c = [],
			d = [];
		for (var e = this.items.length; e--;) if (!this.items[e].removed) {
			var f = this.items[e].getBBox();
			a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
		}
		a = y[m](0, a), b = y[m](0, b);
		return {
			x: a,
			y: b,
			width: x[m](0, c) - a,
			height: x[m](0, d) - b
		}
	}, ct.clone = function(a) {
		a = new cs;
		for (var b = 0, c = this.items.length; b < c; b++) a.push(this.items[b].clone());
		return a
	}, ct.toString = function() {
		return "Raphaël‘s set"
	}, a.registerFont = function(a) {
		if (!a.face) return a;
		this.fonts = this.fonts || {};
		var b = {
			w: a.w,
			face: {},
			glyphs: {}
		},
			c = a.face["font-family"];
		for (var d in a.face) a.face[g](d) && (b.face[d] = a.face[d]);
		this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b];
		if (!a.svg) {
			b.face["units-per-em"] = R(a.face["units-per-em"], 10);
			for (var e in a.glyphs) if (a.glyphs[g](e)) {
				var f = a.glyphs[e];
				b.glyphs[e] = {
					w: f.w,
					k: {},
					d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
						return {
							l: "L",
							c: "C",
							x: "z",
							t: "m",
							r: "l",
							v: "c"
						}[a] || "M"
					}) + "z"
				};
				if (f.k) for (var h in f.k) f[g](h) && (b.glyphs[e].k[h] = f.k[h])
			}
		}
		return a
	}, k.getFont = function(b, c, d, e) {
		e = e || "normal", d = d || "normal", c = +c || {
			normal: 400,
			bold: 700,
			lighter: 300,
			bolder: 800
		}[c] || 400;
		if ( !! a.fonts) {
			var f = a.fonts[b];
			if (!f) {
				var h = new RegExp("(^|\\s)" + b.replace(/[^\w\d\s+!~.:_-]/g, p) + "(\\s|$)", "i");
				for (var i in a.fonts) if (a.fonts[g](i) && h.test(i)) {
					f = a.fonts[i];
					break
				}
			}
			var j;
			if (f) for (var k = 0, l = f.length; k < l; k++) {
				j = f[k];
				if (j.face["font-weight"] == c && (j.face["font-style"] == d || !j.face["font-style"]) && j.face["font-stretch"] == e) break
			}
			return j
		}
	}, k.print = function(b, d, e, f, g, h, i) {
		h = h || "middle", i = x(y(i || 0, 1), -1);
		var j = this.set(),
			k = r(e)[s](p),
			l = 0,
			m = p,
			n;
		a.is(f, e) && (f = this.getFont(f));
		if (f) {
			n = (g || 16) / f.face["units-per-em"];
			var o = f.face.bbox[s](c),
				q = +o[0],
				t = +o[1] + (h == "baseline" ? o[3] - o[1] + +f.face.descent : (o[3] - o[1]) / 2);
			for (var u = 0, v = k.length; u < v; u++) {
				var w = u && f.glyphs[k[u - 1]] || {},
					z = f.glyphs[k[u]];
				l += u ? (w.w || f.w) + (w.k && w.k[k[u]] || 0) + f.w * i : 0, z && z.d && j.push(this.path(z.d).attr({
					fill: "#000",
					stroke: "none",
					transform: [
						["t", l * n, 0]
					]
				}))
			}
			j.transform(["...s", n, n, q, t, "t", (b - q) / n, (d - t) / n])
		}
		return j
	}, a.format = function(b, c) {
		var d = a.is(c, E) ? [0][n](c) : arguments;
		b && a.is(b, D) && d.length - 1 && (b = b.replace(e, function(a, b) {
			return d[++b] == null ? p : d[b]
		}));
		return b || p
	}, a.fullfill = function() {
		var a = /\{([^\}]+)\}/g,
			b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
			c = function(a, c, d) {
				var e = d;
				c.replace(b, function(a, b, c, d, f) {
					b = b || d, e && (b in e && (e = e[b]), typeof e == "function" && f && (e = e()))
				}), e = (e == null || e == d ? a : e) + "";
				return e
			};
		return function(b, d) {
			return String(b).replace(a, function(a, b) {
				return c(a, b, d)
			})
		}
	}(), a.ninja = function() {
		i.was ? h.win.Raphael = i.is : delete Raphael;
		return a
	}, a.st = ct, function(b, c, d) {
		function e() {
			/in/.test(b.readyState) ? setTimeout(e, 9) : a.eve("DOMload")
		}
		b.readyState == null && b.addEventListener && (b.addEventListener(c, d = function() {
			b.removeEventListener(c, d, !1), b.readyState = "complete"
		}, !1), b.readyState = "loading"), e()
	}(document, "DOMContentLoaded"), i.was ? h.win.Raphael = a : Raphael = a, eve.on("DOMload", function() {
		b = !0
	})
}(), window.Raphael.svg &&
function(a) {
	var b = "hasOwnProperty",
		c = String,
		d = parseFloat,
		e = parseInt,
		f = Math,
		g = f.max,
		h = f.abs,
		i = f.pow,
		j = /[, ]+/,
		k = a.eve,
		l = "",
		m = " ",
		n = "http://www.w3.org/1999/xlink",
		o = {
			block: "M5,0 0,2.5 5,5z",
			classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
			diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
			open: "M6,1 1,3.5 6,6",
			oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
		},
		p = {};
	a.toString = function() {
		return "Your browser supports SVG.\nYou are running Raphaël " + this.version
	};
	var q = function(d, e) {
			if (e) {
				typeof d == "string" && (d = q(d));
				for (var f in e) e[b](f) && (f.substring(0, 6) == "xlink:" ? d.setAttributeNS(n, f.substring(6), c(e[f])) : d.setAttribute(f, c(e[f])))
			} else d = a._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
			return d
		},
		r = {},
		s = /^url\(#(.*)\)$/,
		t = function(b, c) {
			var d = b.getAttribute("fill");
			d = d && d.match(s), d && !--r[d[1]] && (delete r[d[1]], c.defs.removeChild(a._g.doc.getElementById(d[1])))
		},
		u = function(b, e) {
			var j = "linear",
				k = b.id + e,
				m = .5,
				n = .5,
				o = b.node,
				p = b.paper,
				r = o.style,
				s = a._g.doc.getElementById(k);
			if (!s) {
				e = c(e).replace(a._radial_gradient, function(a, b, c) {
					j = "radial";
					if (b && c) {
						m = d(b), n = d(c);
						var e = (n > .5) * 2 - 1;
						i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && n != .5 && (n = n.toFixed(5) - 1e-5 * e)
					}
					return l
				}), e = e.split(/\s*\-\s*/);
				if (j == "linear") {
					var t = e.shift();
					t = -d(t);
					if (isNaN(t)) return null;
					var u = [0, 0, f.cos(a.rad(t)), f.sin(a.rad(t))],
						v = 1 / (g(h(u[2]), h(u[3])) || 1);
					u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
				}
				var w = a._parseDots(e);
				if (!w) return null;
				b.gradient && (p.defs.removeChild(b.gradient), delete b.gradient), k = k.replace(/[\(\)\s,\xb0#]/g, "-"), s = q(j + "Gradient", {
					id: k
				}), b.gradient = s, q(s, j == "radial" ? {
					fx: m,
					fy: n
				} : {
					x1: u[0],
					y1: u[1],
					x2: u[2],
					y2: u[3],
					gradientTransform: b.matrix.invert()
				}), p.defs.appendChild(s);
				for (var x = 0, y = w.length; x < y; x++) s.appendChild(q("stop", {
					offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
					"stop-color": w[x].color || "#fff"
				}))
			}
			q(o, {
				fill: "url(#" + k + ")",
				opacity: 1,
				"fill-opacity": 1
			}), r.fill = l, r.opacity = 1, r.fillOpacity = 1;
			return 1
		},
		v = function(a) {
			var b = a.getBBox(1);
			q(a.pattern, {
				patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
			})
		},
		w = function(d, e, f) {
			if (d.type == "path") {
				var g = c(e).toLowerCase().split("-"),
					h = d.paper,
					i = f ? "end" : "start",
					j = d.node,
					k = d.attrs,
					l = k["stroke-width"],
					n = g.length,
					r = "classic",
					s, t, u, v, w, x = 3,
					y = 3,
					z = 5;
				while (n--) switch (g[n]) {
				case "block":
				case "classic":
				case "oval":
				case "diamond":
				case "open":
				case "none":
					r = g[n];
					break;
				case "wide":
					y = 5;
					break;
				case "narrow":
					y = 2;
					break;
				case "long":
					x = 5;
					break;
				case "short":
					x = 2
				}
				r == "open" ? (x += 2, y += 2, z += 2, u = 1, v = f ? 4 : 1, w = {
					fill: "none",
					stroke: k.stroke
				}) : (v = u = x / 2, w = {
					fill: k.stroke,
					stroke: "none"
				}), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {};
				if (r != "none") {
					var A = "raphael-marker-" + r,
						B = "raphael-marker-" + i + r + x + y;
					a._g.doc.getElementById(A) ? p[A]++ : (h.defs.appendChild(q(q("path"), {
						"stroke-linecap": "round",
						d: o[r],
						id: A
					})), p[A] = 1);
					var C = a._g.doc.getElementById(B),
						D;
					C ? (p[B]++, D = C.getElementsByTagName("use")[0]) : (C = q(q("marker"), {
						id: B,
						markerHeight: y,
						markerWidth: x,
						orient: "auto",
						refX: v,
						refY: y / 2
					}), D = q(q("use"), {
						"xlink:href": "#" + A,
						transform: (f ? " rotate(180 " + x / 2 + " " + y / 2 + ") " : m) + "scale(" + x / z + "," + y / z + ")",
						"stroke-width": 1 / ((x / z + y / z) / 2)
					}), C.appendChild(D), h.defs.appendChild(C), p[B] = 1), q(D, w);
					var E = u * (r != "diamond" && r != "oval");
					f ? (s = d._.arrows.startdx * l || 0, t = a.getTotalLength(k.path) - E * l) : (s = E * l, t = a.getTotalLength(k.path) - (d._.arrows.enddx * l || 0)), w = {}, w["marker-" + i] = "url(#" + B + ")";
					if (t || s) w.d = Raphael.getSubpath(k.path, s, t);
					q(j, w), d._.arrows[i + "Path"] = A, d._.arrows[i + "Marker"] = B, d._.arrows[i + "dx"] = E, d._.arrows[i + "Type"] = r, d._.arrows[i + "String"] = e
				} else f ? (s = d._.arrows.startdx * l || 0, t = a.getTotalLength(k.path) - s) : (s = 0, t = a.getTotalLength(k.path) - (d._.arrows.enddx * l || 0)), d._.arrows[i + "Path"] && q(j, {
					d: Raphael.getSubpath(k.path, s, t)
				}), delete d._.arrows[i + "Path"], delete d._.arrows[i + "Marker"], delete d._.arrows[i + "dx"], delete d._.arrows[i + "Type"], delete d._.arrows[i + "String"];
				for (w in p) if (p[b](w) && !p[w]) {
					var F = a._g.doc.getElementById(w);
					F && F.parentNode.removeChild(F)
				}
			}
		},
		x = {
			"": [0],
			none: [0],
			"-": [3, 1],
			".": [1, 1],
			"-.": [3, 1, 1, 1],
			"-..": [3, 1, 1, 1, 1, 1],
			". ": [1, 3],
			"- ": [4, 3],
			"--": [8, 3],
			"- .": [4, 3, 1, 3],
			"--.": [8, 3, 1, 3],
			"--..": [8, 3, 1, 3, 1, 3]
		},
		y = function(a, b, d) {
			b = x[c(b).toLowerCase()];
			if (b) {
				var e = a.attrs["stroke-width"] || "1",
					f = {
						round: e,
						square: e,
						butt: 0
					}[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0,
					g = [],
					h = b.length;
				while (h--) g[h] = b[h] * e + (h % 2 ? 1 : -1) * f;
				q(a.node, {
					"stroke-dasharray": g.join(",")
				})
			}
		},
		z = function(d, f) {
			var i = d.node,
				k = d.attrs,
				m = i.style.visibility;
			i.style.visibility = "hidden";
			for (var o in f) if (f[b](o)) {
				if (!a._availableAttrs[b](o)) continue;
				var p = f[o];
				k[o] = p;
				switch (o) {
				case "blur":
					d.blur(p);
					break;
				case "href":
				case "title":
				case "target":
					var r = i.parentNode;
					if (r.tagName.toLowerCase() != "a") {
						var s = q("a");
						r.insertBefore(s, i), s.appendChild(i), r = s
					}
					o == "target" && p == "blank" ? r.setAttributeNS(n, "show", "new") : r.setAttributeNS(n, o, p);
					break;
				case "cursor":
					i.style.cursor = p;
					break;
				case "transform":
					d.transform(p);
					break;
				case "arrow-start":
					w(d, p);
					break;
				case "arrow-end":
					w(d, p, 1);
					break;
				case "clip-rect":
					var t = c(p).split(j);
					if (t.length == 4) {
						d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
						var x = q("clipPath"),
							z = q("rect");
						x.id = a.createUUID(), q(z, {
							x: t[0],
							y: t[1],
							width: t[2],
							height: t[3]
						}), x.appendChild(z), d.paper.defs.appendChild(x), q(i, {
							"clip-path": "url(#" + x.id + ")"
						}), d.clip = z
					}
					if (!p) {
						var A = a._g.doc.getElementById(i.getAttribute("clip-path").replace(/(^url\(#|\)$)/g, l));
						A && A.parentNode.removeChild(A), q(i, {
							"clip-path": l
						}), delete d.clip
					}
					break;
				case "path":
					d.type == "path" && (q(i, {
						d: p ? k.path = a._pathToAbsolute(p) : "M0,0"
					}), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && w(d, d._.arrows.startString), "endString" in d._.arrows && w(d, d._.arrows.endString, 1)));
					break;
				case "width":
					i.setAttribute(o, p), d._.dirty = 1;
					if (k.fx) o = "x", p = k.x;
					else break;
				case "x":
					k.fx && (p = -k.x - (k.width || 0));
				case "rx":
					if (o == "rx" && d.type == "rect") break;
				case "cx":
					i.setAttribute(o, p), d.pattern && v(d), d._.dirty = 1;
					break;
				case "height":
					i.setAttribute(o, p), d._.dirty = 1;
					if (k.fy) o = "y", p = k.y;
					else break;
				case "y":
					k.fy && (p = -k.y - (k.height || 0));
				case "ry":
					if (o == "ry" && d.type == "rect") break;
				case "cy":
					i.setAttribute(o, p), d.pattern && v(d), d._.dirty = 1;
					break;
				case "r":
					d.type == "rect" ? q(i, {
						rx: p,
						ry: p
					}) : i.setAttribute(o, p), d._.dirty = 1;
					break;
				case "src":
					d.type == "image" && i.setAttributeNS(n, "href", p);
					break;
				case "stroke-width":
					if (d._.sx != 1 || d._.sy != 1) p /= g(h(d._.sx), h(d._.sy)) || 1;
					d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && y(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && w(d, d._.arrows.startString), "endString" in d._.arrows && w(d, d._.arrows.endString, 1));
					break;
				case "stroke-dasharray":
					y(d, p, f);
					break;
				case "fill":
					var C = c(p).match(a._ISURL);
					if (C) {
						x = q("pattern");
						var D = q("image");
						x.id = a.createUUID(), q(x, {
							x: 0,
							y: 0,
							patternUnits: "userSpaceOnUse",
							height: 1,
							width: 1
						}), q(D, {
							x: 0,
							y: 0,
							"xlink:href": C[1]
						}), x.appendChild(D), function(b) {
							a._preload(C[1], function() {
								var a = this.offsetWidth,
									c = this.offsetHeight;
								q(b, {
									width: a,
									height: c
								}), q(D, {
									width: a,
									height: c
								}), d.paper.safari()
							})
						}(x), d.paper.defs.appendChild(x), i.style.fill = "url(#" + x.id + ")", q(i, {
							fill: "url(#" + x.id + ")"
						}), d.pattern = x, d.pattern && v(d);
						break
					}
					var E = a.getRGB(p);
					if (!E.error) delete f.gradient, delete k.gradient, !a.is(k.opacity, "undefined") && a.is(f.opacity, "undefined") && q(i, {
						opacity: k.opacity
					}), !a.is(k["fill-opacity"], "undefined") && a.is(f["fill-opacity"], "undefined") && q(i, {
						"fill-opacity": k["fill-opacity"]
					});
					else if ((d.type == "circle" || d.type == "ellipse" || c(p).charAt() != "r") && u(d, p)) {
						if ("opacity" in k || "fill-opacity" in k) {
							var F = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
							if (F) {
								var G = F.getElementsByTagName("stop");
								q(G[G.length - 1], {
									"stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
								})
							}
						}
						k.gradient = p, k.fill = "none";
						break
					}
					E[b]("opacity") && q(i, {
						"fill-opacity": E.opacity > 1 ? E.opacity / 100 : E.opacity
					});
				case "stroke":
					E = a.getRGB(p), i.setAttribute(o, E.hex), o == "stroke" && E[b]("opacity") && q(i, {
						"stroke-opacity": E.opacity > 1 ? E.opacity / 100 : E.opacity
					}), o == "stroke" && d._.arrows && ("startString" in d._.arrows && w(d, d._.arrows.startString), "endString" in d._.arrows && w(d, d._.arrows.endString, 1));
					break;
				case "gradient":
					(d.type == "circle" || d.type == "ellipse" || c(p).charAt() != "r") && u(d, p);
					break;
				case "opacity":
					k.gradient && !k[b]("stroke-opacity") && q(i, {
						"stroke-opacity": p > 1 ? p / 100 : p
					});
				case "fill-opacity":
					if (k.gradient) {
						F = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), F && (G = F.getElementsByTagName("stop"), q(G[G.length - 1], {
							"stop-opacity": p
						}));
						break
					};
				default:
					o == "font-size" && (p = e(p, 10) + "px");
					var H = o.replace(/(\-.)/g, function(a) {
						return a.substring(1).toUpperCase()
					});
					i.style[H] = p, d._.dirty = 1, i.setAttribute(o, p)
				}
			}
			B(d, f), i.style.visibility = m
		},
		A = 1.2,
		B = function(d, f) {
			if (d.type == "text" && !! (f[b]("text") || f[b]("font") || f[b]("font-size") || f[b]("x") || f[b]("y"))) {
				var g = d.attrs,
					h = d.node,
					i = h.firstChild ? e(a._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
				if (f[b]("text")) {
					g.text = f.text;
					while (h.firstChild) h.removeChild(h.firstChild);
					var j = c(f.text).split("\n"),
						k = [],
						m;
					for (var n = 0, o = j.length; n < o; n++) m = q("tspan"), n && q(m, {
						dy: i * A,
						x: g.x
					}), m.appendChild(a._g.doc.createTextNode(j[n])), h.appendChild(m), k[n] = m
				} else {
					k = h.getElementsByTagName("tspan");
					for (n = 0, o = k.length; n < o; n++) n ? q(k[n], {
						dy: i * A,
						x: g.x
					}) : q(k[0], {
						dy: 0
					})
				}
				q(h, {
					x: g.x,
					y: g.y
				}), d._.dirty = 1;
				var p = d._getBBox(),
					r = g.y - (p.y + p.height / 2);
				r && a.is(r, "finite") && q(k[0], {
					dy: r
				})
			}
		},
		C = function(b, c) {
			var d = 0,
				e = 0;
			this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.matrix = a.matrix(), this.realPath = null, this.paper = c, this.attrs = this.attrs || {}, this._ = {
				transform: [],
				sx: 1,
				sy: 1,
				deg: 0,
				dx: 0,
				dy: 0,
				dirty: 1
			}, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null
		},
		D = a.el;
	C.prototype = D, D.constructor = C, a._engine.path = function(a, b) {
		var c = q("path");
		b.canvas && b.canvas.appendChild(c);
		var d = new C(c, b);
		d.type = "path", z(d, {
			fill: "none",
			stroke: "#000",
			path: a
		});
		return d
	}, D.rotate = function(a, b, e) {
		if (this.removed) return this;
		a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), e == null && (b = e);
		if (b == null || e == null) {
			var f = this.getBBox(1);
			b = f.x + f.width / 2, e = f.y + f.height / 2
		}
		this.transform(this._.transform.concat([
			["r", a, b, e]
		]));
		return this
	}, D.scale = function(a, b, e, f) {
		if (this.removed) return this;
		a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), b == null && (b = a), f == null && (e = f);
		if (e == null || f == null) var g = this.getBBox(1);
		e = e == null ? g.x + g.width / 2 : e, f = f == null ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
			["s", a, b, e, f]
		]));
		return this
	}, D.translate = function(a, b) {
		if (this.removed) return this;
		a = c(a).split(j), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this.transform(this._.transform.concat([
			["t", a, b]
		]));
		return this
	}, D.transform = function(c) {
		var d = this._;
		if (c == null) return d.transform;
		a._extractTransform(this, c), this.clip && q(this.clip, {
			transform: this.matrix.invert()
		}), this.pattern && v(this), this.node && q(this.node, {
			transform: this.matrix
		});
		if (d.sx != 1 || d.sy != 1) {
			var e = this.attrs[b]("stroke-width") ? this.attrs["stroke-width"] : 1;
			this.attr({
				"stroke-width": e
			})
		}
		return this
	}, D.hide = function() {
		!this.removed && this.paper.safari(this.node.style.display = "none");
		return this
	}, D.show = function() {
		!this.removed && this.paper.safari(this.node.style.display = "");
		return this
	}, D.remove = function() {
		if (!this.removed) {
			this.paper.__set__ && this.paper.__set__.exclude(this), k.unbind("*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node);
			for (var b in this) delete this[b];
			this.removed = !0
		}
	}, D._getBBox = function() {
		if (this.node.style.display == "none") {
			this.show();
			var a = !0
		}
		var b = {};
		try {
			b = this.node.getBBox()
		} catch (c) {} finally {
			b = b || {}
		}
		a && this.hide();
		return b
	}, D.attr = function(c, d) {
		if (this.removed) return this;
		if (c == null) {
			var e = {};
			for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
			e.gradient && e.fill == "none" && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
			return e
		}
		if (d == null && a.is(c, "string")) {
			if (c == "fill" && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
			if (c == "transform") return this._.transform;
			var g = c.split(j),
				h = {};
			for (var i = 0, l = g.length; i < l; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
			return l - 1 ? h : h[g[0]]
		}
		if (d == null && a.is(c, "array")) {
			h = {};
			for (i = 0, l = c.length; i < l; i++) h[c[i]] = this.attr(c[i]);
			return h
		}
		if (d != null) {
			var m = {};
			m[c] = d
		} else c != null && a.is(c, "object") && (m = c);
		for (var n in m) k("attr." + n + "." + this.id, this, m[n]);
		for (n in this.paper.customAttributes) if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) {
			var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
			this.attrs[n] = m[n];
			for (var p in o) o[b](p) && (m[p] = o[p])
		}
		z(this, m);
		return this
	}, D.toFront = function() {
		if (this.removed) return this;
		this.node.parentNode.appendChild(this.node);
		var b = this.paper;
		b.top != this && a._tofront(this, b);
		return this
	}, D.toBack = function() {
		if (this.removed) return this;
		if (this.node.parentNode.firstChild != this.node) {
			this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper);
			var b = this.paper
		}
		return this
	}, D.insertAfter = function(b) {
		if (this.removed) return this;
		var c = b.node || b[b.length - 1].node;
		c.nextSibling ? c.parentNode.insertBefore(this.node, c.nextSibling) : c.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper);
		return this
	}, D.insertBefore = function(b) {
		if (this.removed) return this;
		var c = b.node || b[0].node;
		c.parentNode.insertBefore(this.node, c), a._insertbefore(this, b, this.paper);
		return this
	}, D.blur = function(b) {
		var c = this;
		if (+b !== 0) {
			var d = q("filter"),
				e = q("feGaussianBlur");
			c.attrs.blur = b, d.id = a.createUUID(), q(e, {
				stdDeviation: +b || 1.5
			}), d.appendChild(e), c.paper.defs.appendChild(d), c._blur = d, q(c.node, {
				filter: "url(#" + d.id + ")"
			})
		} else c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur), c.node.removeAttribute("filter")
	}, a._engine.circle = function(a, b, c, d) {
		var e = q("circle");
		a.canvas && a.canvas.appendChild(e);
		var f = new C(e, a);
		f.attrs = {
			cx: b,
			cy: c,
			r: d,
			fill: "none",
			stroke: "#000"
		}, f.type = "circle", q(e, f.attrs);
		return f
	}, a._engine.rect = function(a, b, c, d, e, f) {
		var g = q("rect");
		a.canvas && a.canvas.appendChild(g);
		var h = new C(g, a);
		h.attrs = {
			x: b,
			y: c,
			width: d,
			height: e,
			r: f || 0,
			rx: f || 0,
			ry: f || 0,
			fill: "none",
			stroke: "#000"
		}, h.type = "rect", q(g, h.attrs);
		return h
	}, a._engine.ellipse = function(a, b, c, d, e) {
		var f = q("ellipse");
		a.canvas && a.canvas.appendChild(f);
		var g = new C(f, a);
		g.attrs = {
			cx: b,
			cy: c,
			rx: d,
			ry: e,
			fill: "none",
			stroke: "#000"
		}, g.type = "ellipse", q(f, g.attrs);
		return g
	}, a._engine.image = function(a, b, c, d, e, f) {
		var g = q("image");
		q(g, {
			x: c,
			y: d,
			width: e,
			height: f,
			preserveAspectRatio: "none"
		}), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
		var h = new C(g, a);
		h.attrs = {
			x: c,
			y: d,
			width: e,
			height: f,
			src: b
		}, h.type = "image";
		return h
	}, a._engine.text = function(b, c, d, e) {
		var f = q("text");
		b.canvas && b.canvas.appendChild(f);
		var g = new C(f, b);
		g.attrs = {
			x: c,
			y: d,
			"text-anchor": "middle",
			text: e,
			font: a._availableAttrs.font,
			stroke: "none",
			fill: "#000"
		}, g.type = "text", z(g, g.attrs);
		return g
	}, a._engine.setSize = function(a, b) {
		this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox);
		return this
	}, a._engine.create = function() {
		var b = a._getContainer.apply(0, arguments),
			c = b && b.container,
			d = b.x,
			e = b.y,
			f = b.width,
			g = b.height;
		if (!c) throw new Error("SVG container not found.");
		var h = q("svg"),
			i = "overflow:hidden;",
			j;
		d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(h, {
			height: g,
			version: 1.1,
			width: f,
			xmlns: "http://www.w3.org/2000/svg"
		}), c == 1 ? (h.style.cssText = i + "position:absolute;left:" + d + "px;top:" + e + "px", a._g.doc.body.appendChild(h), j = 1) : (h.style.cssText = i + "position:relative", c.firstChild ? c.insertBefore(h, c.firstChild) : c.appendChild(h)), c = new a._Paper, c.width = f, c.height = g, c.canvas = h, c.clear(), c._left = c._top = 0, j && (c.renderfix = function() {}), c.renderfix();
		return c
	}, a._engine.setViewBox = function(a, b, c, d, e) {
		k("setViewBox", this, this._viewBox, [a, b, c, d, e]);
		var f = g(c / this.width, d / this.height),
			h = this.top,
			i = e ? "meet" : "xMinYMin",
			j, l;
		a == null ? (this._vbSize && (f = 1), delete this._vbSize, j = "0 0 " + this.width + m + this.height) : (this._vbSize = f, j = a + m + b + m + c + m + d), q(this.canvas, {
			viewBox: j,
			preserveAspectRatio: i
		});
		while (f && h) l = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
			"stroke-width": l
		}), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
		this._viewBox = [a, b, c, d, !! e];
		return this
	}, a.prototype.renderfix = function() {
		var a = this.canvas,
			b = a.style,
			c = a.getScreenCTM() || a.createSVGMatrix(),
			d = -c.e % 1,
			e = -c.f % 1;
		if (d || e) d && (this._left = (this._left + d) % 1, b.left = this._left + "px"), e && (this._top = (this._top + e) % 1, b.top = this._top + "px")
	}, a.prototype.clear = function() {
		a.eve("clear", this);
		var b = this.canvas;
		while (b.firstChild) b.removeChild(b.firstChild);
		this.bottom = this.top = null, (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël " + a.version)), b.appendChild(this.desc), b.appendChild(this.defs = q("defs"))
	}, a.prototype.remove = function() {
		k("remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
		for (var a in this) this[a] = removed(a)
	};
	var E = a.st;
	for (var F in D) D[b](F) && !E[b](F) && (E[F] = function(a) {
		return function() {
			var b = arguments;
			return this.forEach(function(c) {
				c[a].apply(c, b)
			})
		}
	}(F))
}(window.Raphael), window.Raphael.vml &&
function(a) {
	var b = "hasOwnProperty",
		c = String,
		d = parseFloat,
		e = Math,
		f = e.round,
		g = e.max,
		h = e.min,
		i = e.abs,
		j = "fill",
		k = /[, ]+/,
		l = a.eve,
		m = " progid:DXImageTransform.Microsoft",
		n = " ",
		o = "",
		p = {
			M: "m",
			L: "l",
			C: "c",
			Z: "x",
			m: "t",
			l: "r",
			c: "v",
			z: "x"
		},
		q = /([clmz]),?([^clmz]*)/gi,
		r = / progid:\S+Blur\([^\)]+\)/g,
		s = /-?[^,\s-]+/g,
		t = "position:absolute;left:0;top:0;width:1px;height:1px",
		u = 21600,
		v = {
			path: 1,
			rect: 1,
			image: 1
		},
		w = {
			circle: 1,
			ellipse: 1
		},
		x = function(b) {
			var d = /[ahqstv]/ig,
				e = a._pathToAbsolute;
			c(b).match(d) && (e = a._path2curve), d = /[clmz]/g;
			if (e == a._pathToAbsolute && !c(b).match(d)) {
				var g = c(b).replace(q, function(a, b, c) {
					var d = [],
						e = b.toLowerCase() == "m",
						g = p[b];
					c.replace(s, function(a) {
						e && d.length == 2 && (g += d + p[b == "m" ? "l" : "L"], d = []), d.push(f(a * u))
					});
					return g + d
				});
				return g
			}
			var h = e(b),
				i, j;
			g = [];
			for (var k = 0, l = h.length; k < l; k++) {
				i = h[k], j = h[k][0].toLowerCase(), j == "z" && (j = "x");
				for (var m = 1, r = i.length; m < r; m++) j += f(i[m] * u) + (m != r - 1 ? "," : o);
				g.push(j)
			}
			return g.join(n)
		},
		y = function(b, c, d) {
			var e = a.matrix();
			e.rotate(-b, .5, .5);
			return {
				dx: e.x(c, d),
				dy: e.y(c, d)
			}
		},
		z = function(a, b, c, d, e, f) {
			var g = a._,
				h = a.matrix,
				k = g.fillpos,
				l = a.node,
				m = l.style,
				o = 1,
				p = "",
				q, r = u / b,
				s = u / c;
			m.visibility = "hidden";
			if ( !! b && !! c) {
				l.coordsize = i(r) + n + i(s), m.rotation = f * (b * c < 0 ? -1 : 1);
				if (f) {
					var t = y(f, d, e);
					d = t.dx, e = t.dy
				}
				b < 0 && (p += "x"), c < 0 && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -r + n + e * -s;
				if (k || g.fillsize) {
					var v = l.getElementsByTagName(j);
					v = v && v[0], l.removeChild(v), k && (t = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), v.position = t.dx * o + n + t.dy * o), g.fillsize && (v.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(v)
				}
				m.visibility = "visible"
			}
		};
	a.toString = function() {
		return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
	}, addArrow = function(a, b, d) {
		var e = c(b).toLowerCase().split("-"),
			f = d ? "end" : "start",
			g = e.length,
			h = "classic",
			i = "medium",
			j = "medium";
		while (g--) switch (e[g]) {
		case "block":
		case "classic":
		case "oval":
		case "diamond":
		case "open":
		case "none":
			h = e[g];
			break;
		case "wide":
		case "narrow":
			j = e[g];
			break;
		case "long":
		case "short":
			i = e[g]
		}
		var k = a.node.getElementsByTagName("stroke")[0];
		k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
	}, setFillAndStroke = function(e, i) {
		e.attrs = e.attrs || {};
		var l = e.node,
			m = e.attrs,
			p = l.style,
			q, r = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
			s = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
			t = e;
		for (var y in i) i[b](y) && (m[y] = i[y]);
		r && (m.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur);
		if (i.path && e.type == "path" || r) l.path = x(~c(m.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(m.path) : m.path), e.type == "image" && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0));
		"transform" in i && e.transform(i.transform);
		if (s) {
			var A = +m.cx,
				C = +m.cy,
				D = +m.rx || +m.r || 0,
				E = +m.ry || +m.r || 0;
			l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((A - D) * u), f((C - E) * u), f((A + D) * u), f((C + E) * u), f(A * u))
		}
		if ("clip-rect" in i) {
			var F = c(i["clip-rect"]).split(k);
			if (F.length == 4) {
				F[2] = +F[2] + +F[0], F[3] = +F[3] + +F[1];
				var G = l.clipRect || a._g.doc.createElement("div"),
					H = G.style;
				H.clip = a.format("rect({1}px {2}px {3}px {0}px)", F), l.clipRect || (H.position = "absolute", H.top = 0, H.left = 0, H.width = e.paper.width + "px", H.height = e.paper.height + "px", l.parentNode.insertBefore(G, l), G.appendChild(l), l.clipRect = G)
			}
			i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = o)
		}
		if (e.textpath) {
			var I = e.textpath.style;
			i.font && (I.font = i.font), i["font-family"] && (I.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (I.fontSize = i["font-size"]), i["font-weight"] && (I.fontWeight = i["font-weight"]), i["font-style"] && (I.fontStyle = i["font-style"])
		}
		"arrow-start" in i && addArrow(t, i["arrow-start"]), "arrow-end" in i && addArrow(t, i["arrow-end"], 1);
		if (i.opacity != null || i["stroke-width"] != null || i.fill != null || i.src != null || i.stroke != null || i["stroke-width"] != null || i["stroke-opacity"] != null || i["fill-opacity"] != null || i["stroke-dasharray"] != null || i["stroke-miterlimit"] != null || i["stroke-linejoin"] != null || i["stroke-linecap"] != null) {
			var J = l.getElementsByTagName(j),
				K = !1;
			J = J && J[0], !J && (K = J = B(j)), e.type == "image" && i.src && (J.src = i.src), i.fill && (J.on = !0);
			if (J.on == null || i.fill == "none" || i.fill === null) J.on = !1;
			if (J.on && i.fill) {
				var L = c(i.fill).match(a._ISURL);
				if (L) {
					J.parentNode == l && l.removeChild(J), J.rotate = !0, J.src = L[1], J.type = "tile";
					var M = e.getBBox(1);
					J.position = M.x + n + M.y, e._.fillpos = [M.x, M.y], a._preload(L[1], function() {
						e._.fillsize = [this.offsetWidth, this.offsetHeight]
					})
				} else J.color = a.getRGB(i.fill).hex, J.src = o, J.type = "solid", a.getRGB(i.fill).error && (t.type in {
					circle: 1,
					ellipse: 1
				} || c(i.fill).charAt() != "r") && addGradientFill(t, i.fill, J) && (m.fill = "none", m.gradient = i.fill, J.rotate = !1)
			}
			if ("fill-opacity" in i || "opacity" in i) {
				var N = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+a.getRGB(i.fill).o + 1 || 2) - 1);
				N = h(g(N, 0), 1), J.opacity = N, J.src && (J.color = "none")
			}
			l.appendChild(J);
			var O = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
				P = !1;
			!O && (P = O = B("stroke"));
			if (i.stroke && i.stroke != "none" || i["stroke-width"] || i["stroke-opacity"] != null || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) O.on = !0;
			(i.stroke == "none" || i.stroke === null || O.on == null || i.stroke == 0 || i["stroke-width"] == 0) && (O.on = !1);
			var Q = a.getRGB(i.stroke);
			O.on && i.stroke && (O.color = Q.hex), N = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+Q.o + 1 || 2) - 1);
			var T = (d(i["stroke-width"]) || 1) * .75;
			N = h(g(N, 0), 1), i["stroke-width"] == null && (T = m["stroke-width"]), i["stroke-width"] && (O.weight = T), T && T < 1 && (N *= T) && (O.weight = 1), O.opacity = N, i["stroke-linejoin"] && (O.joinstyle = i["stroke-linejoin"] || "miter"), O.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (O.endcap = i["stroke-linecap"] == "butt" ? "flat" : i["stroke-linecap"] == "square" ? "square" : "round");
			if (i["stroke-dasharray"]) {
				var U = {
					"-": "shortdash",
					".": "shortdot",
					"-.": "shortdashdot",
					"-..": "shortdashdotdot",
					". ": "dot",
					"- ": "dash",
					"--": "longdash",
					"- .": "dashdot",
					"--.": "longdashdot",
					"--..": "longdashdotdot"
				};
				O.dashstyle = U[b](i["stroke-dasharray"]) ? U[i["stroke-dasharray"]] : o
			}
			P && l.appendChild(O)
		}
		if (t.type == "text") {
			t.paper.canvas.style.display = o;
			var V = t.paper.span,
				W = 100,
				X = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
			p = V.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), X = d(X ? X[0] : m["font-size"]), p.fontSize = X * W + "px", t.textpath.string && (V.innerHTML = c(t.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
			var Y = V.getBoundingClientRect();
			t.W = m.w = (Y.right - Y.left) / W, t.H = m.h = (Y.bottom - Y.top) / W, t.X = m.x, t.Y = m.y + t.H / 2, ("x" in i || "y" in i) && (t.path.v = a.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
			var Z = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
			for (var $ = 0, _ = Z.length; $ < _; $++) if (Z[$] in i) {
				t._.dirty = 1;
				break
			}
			switch (m["text-anchor"]) {
			case "start":
				t.textpath.style["v-text-align"] = "left", t.bbx = t.W / 2;
				break;
			case "end":
				t.textpath.style["v-text-align"] = "right", t.bbx = -t.W / 2;
				break;
			default:
				t.textpath.style["v-text-align"] = "center", t.bbx = 0
			}
			t.textpath.style["v-text-kern"] = !0
		}
	}, addGradientFill = function(b, f, g) {
		b.attrs = b.attrs || {};
		var h = b.attrs,
			i = Math.pow,
			j, k, l = "linear",
			m = ".5 .5";
		b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, function(a, b, c) {
			l = "radial", b && c && (b = d(b), c = d(c), i(b - .5, 2) + i(c - .5, 2) > .25 && (c = e.sqrt(.25 - i(b - .5, 2)) * ((c > .5) * 2 - 1) + .5), m = b + n + c);
			return o
		}), f = f.split(/\s*\-\s*/);
		if (l == "linear") {
			var p = f.shift();
			p = -d(p);
			if (isNaN(p)) return null
		}
		var q = a._parseDots(f);
		if (!q) return null;
		b = b.shape || b.node;
		if (q.length) {
			b.removeChild(g), g.on = !0, g.method = "none", g.color = q[0].color, g.color2 = q[q.length - 1].color;
			var r = [];
			for (var s = 0, t = q.length; s < t; s++) q[s].offset && r.push(q[s].offset + n + q[s].color);
			g.colors = r.length ? r.join() : "0% " + g.color, l == "radial" ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = m, g.angle = 0) : (g.type = "gradient", g.angle = (270 - p) % 360), b.appendChild(g)
		}
		return 1
	}, Element = function(b, c) {
		this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = c, this.matrix = a.matrix(), this._ = {
			transform: [],
			sx: 1,
			sy: 1,
			dx: 0,
			dy: 0,
			deg: 0,
			dirty: 1,
			dirtyT: 1
		}, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null
	};
	var A = a.el;
	Element.prototype = A, A.constructor = Element, A.transform = function(b) {
		if (b == null) return this._.transform;
		var d = this.paper._viewBoxShift,
			e = d ? "s" + [d.scale, d.scale] + "-1-1t" + [d.dx, d.dy] : o,
			f;
		d && (f = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || o)), a._extractTransform(this, e + b);
		var g = this.matrix.clone(),
			h = this.skew,
			i = this.node,
			j, k = ~c(this.attrs.fill).indexOf("-"),
			l = !c(this.attrs.fill).indexOf("url(");
		g.translate(-0.5, -0.5);
		if (l || k || this.type == "image") {
			h.matrix = "1 0 0 1", h.offset = "0 0", j = g.split();
			if (k && j.noRotation || !j.isSimple) {
				i.style.filter = g.toFilter();
				var m = this.getBBox(),
					p = this.getBBox(1),
					q = m.x - p.x,
					r = m.y - p.y;
				i.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
			} else i.style.filter = o, z(this, j.scalex, j.scaley, j.dx, j.dy, j.rotate)
		} else i.style.filter = o, h.matrix = c(g), h.offset = g.offset();
		f && (this._.transform = f);
		return this
	}, A.rotate = function(a, b, e) {
		if (this.removed) return this;
		if (a != null) {
			a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), e == null && (b = e);
			if (b == null || e == null) {
				var f = this.getBBox(1);
				b = f.x + f.width / 2, e = f.y + f.height / 2
			}
			this._.dirtyT = 1, this.transform(this._.transform.concat([
				["r", a, b, e]
			]));
			return this
		}
	}, A.translate = function(a, b) {
		if (this.removed) return this;
		a = c(a).split(k), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([
			["t", a, b]
		]));
		return this
	}, A.scale = function(a, b, e, f) {
		if (this.removed) return this;
		a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), b == null && (b = a), f == null && (e = f);
		if (e == null || f == null) var g = this.getBBox(1);
		e = e == null ? g.x + g.width / 2 : e, f = f == null ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
			["s", a, b, e, f]
		])), this._.dirtyT = 1;
		return this
	}, A.hide = function() {
		!this.removed && (this.node.style.display = "none");
		return this
	}, A.show = function() {
		!this.removed && (this.node.style.display = o);
		return this
	}, A._getBBox = function() {
		if (this.removed) return {};
		return this.type == "text" ? {
			x: this.X + (this.bbx || 0) - this.W / 2,
			y: this.Y - this.H,
			width: this.W,
			height: this.H
		} : pathDimensions(this.attrs.path)
	}, A.remove = function() {
		if (!this.removed) {
			this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
			for (var b in this) delete this[b];
			this.removed = !0
		}
	}, A.attr = function(c, d) {
		if (this.removed) return this;
		if (c == null) {
			var e = {};
			for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
			e.gradient && e.fill == "none" && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
			return e
		}
		if (d == null && a.is(c, "string")) {
			if (c == j && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
			var g = c.split(k),
				h = {};
			for (var i = 0, m = g.length; i < m; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
			return m - 1 ? h : h[g[0]]
		}
		if (this.attrs && d == null && a.is(c, "array")) {
			h = {};
			for (i = 0, m = c.length; i < m; i++) h[c[i]] = this.attr(c[i]);
			return h
		}
		var n;
		d != null && (n = {}, n[c] = d), d == null && a.is(c, "object") && (n = c);
		for (var o in n) l("attr." + o + "." + this.id, this, n[o]);
		if (n) {
			for (o in this.paper.customAttributes) if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) {
				var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
				this.attrs[o] = n[o];
				for (var q in p) p[b](q) && (n[q] = p[q])
			}
			n.text && this.type == "text" && (this.textpath.string = n.text), setFillAndStroke(this, n)
		}
		return this
	}, A.toFront = function() {
		!this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper);
		return this
	}, A.toBack = function() {
		if (this.removed) return this;
		this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper));
		return this
	}, A.insertAfter = function(b) {
		if (this.removed) return this;
		b.constructor == a.st.constructor && (b = b[b.length - 1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper);
		return this
	}, A.insertBefore = function(b) {
		if (this.removed) return this;
		b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), a._insertbefore(this, b, this.paper);
		return this
	}, A.blur = function(b) {
		var c = this.node.runtimeStyle,
			d = c.filter;
		d = d.replace(r, o), +b !== 0 ? (this.attrs.blur = b, c.filter = d + n + m + ".Blur(pixelradius=" + (+b || 1.5) + ")", c.margin = a.format("-{0}px 0 0 -{0}px", f(+b || 1.5))) : (c.filter = d, c.margin = 0, delete this.attrs.blur)
	}, a._engine.path = function(a, b) {
		var c = B("shape");
		c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
		var d = new Element(c, b),
			e = {
				fill: "none",
				stroke: "#000"
			};
		a && (e.path = a), d.type = "path", d.path = [], d.Path = o, setFillAndStroke(d, e), b.canvas.appendChild(c);
		var f = B("skew");
		f.on = !0, c.appendChild(f), d.skew = f, d.transform(o);
		return d
	}, a._engine.rect = function(b, c, d, e, f, g) {
		var h = a._rectPath(c, d, e, f, g),
			i = b.path(h),
			j = i.attrs;
		i.X = j.x = c, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect";
		return i
	}, a._engine.ellipse = function(a, b, c, d, e) {
		var f = a.path(),
			g = f.attrs;
		f.X = b - d, f.Y = c - e, f.W = d * 2, f.H = e * 2, f.type = "ellipse", setFillAndStroke(f, {
			cx: b,
			cy: c,
			rx: d,
			ry: e
		});
		return f
	}, a._engine.circle = function(a, b, c, d) {
		var e = a.path(),
			f = e.attrs;
		e.X = b - d, e.Y = c - d, e.W = e.H = d * 2, e.type = "circle", setFillAndStroke(e, {
			cx: b,
			cy: c,
			r: d
		});
		return e
	}, a._engine.image = function(b, c, d, e, f, g) {
		var h = a._rectPath(d, e, f, g),
			i = b.path(h).attr({
				stroke: "none"
			}),
			k = i.attrs,
			l = i.node,
			m = l.getElementsByTagName(j)[0];
		k.src = c, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = c, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0);
		return i
	}, a._engine.text = function(b, d, e, g) {
		var h = B("shape"),
			i = B("path"),
			j = B("textpath");
		d = d || 0, e = e || 0, g = g || "", i.v = a.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = c(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
		var k = new Element(h, b),
			l = {
				fill: "#000",
				stroke: "none",
				font: a._availableAttrs.font,
				text: g
			};
		k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = c(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, setFillAndStroke(k, l), h.appendChild(j), h.appendChild(i), b.canvas.appendChild(h);
		var m = B("skew");
		m.on = !0, h.appendChild(m), k.skew = m, k.transform(o);
		return k
	}, a._engine.setSize = function(a, b) {
		var c = this.canvas.style;
		this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), c.width = a, c.height = b, c.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && setViewBox.apply(this, this._viewBox);
		return this
	}, a._engine.setViewBox = function(b, c, d, e, f) {
		a.eve("setViewBox", this, this._viewBox, [b, c, d, e, f]);
		var h = this.width,
			i = this.height,
			j = 1 / g(d / h, e / i),
			k, l;
		f && (k = i / e, l = h / d, d * k < h && (b -= (h - d * k) / 2 / k), e * l < i && (c -= (i - e * l) / 2 / l)), this._viewBox = [b, c, d, e, !! f], this._viewBoxShift = {
			dx: -b,
			dy: -c,
			scale: j
		}, this.forEach(function(a) {
			a.transform("...")
		});
		return this
	};
	var B, C = function(a) {
			var b = a.document;
			b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
			try {
				!b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), B = function(a) {
					return b.createElement("<rvml:" + a + ' class="rvml">')
				}
			} catch (c) {
				B = function(a) {
					return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
				}
			}
		};
	C(a._g.win), a._engine.create = function() {
		var b = a._getContainer.apply(0, arguments),
			c = b.container,
			d = b.height,
			e, f = b.width,
			g = b.x,
			h = b.y;
		if (!c) throw new Error("VML container not found.");
		var i = new a._Paper,
			j = i.canvas = a._g.doc.createElement("div"),
			k = j.style;
		g = g || 0, h = h || 0, f = f || 512, d = d || 342, i.width = f, i.height = d, f == +f && (f += "px"), d == +d && (d += "px"), i.coordsize = u * 1e3 + n + u * 1e3, i.coordorigin = "0 0", i.span = a._g.doc.createElement("span"), i.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", j.appendChild(i.span), k.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", f, d), c == 1 ? (a._g.doc.body.appendChild(j), k.left = g + "px", k.top = h + "px", k.position = "absolute") : c.firstChild ? c.insertBefore(j, c.firstChild) : c.appendChild(j), i.renderfix = function() {};
		return i
	}, a.prototype.clear = function() {
		a.eve("clear", this), this.canvas.innerHTML = o, this.span = a._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
	}, a.prototype.remove = function() {
		a.eve("remove", this), this.canvas.parentNode.removeChild(this.canvas);
		for (var b in this) this[b] = removed(b);
		return !0
	};
	var D = a.st;
	for (var E in A) A[b](E) && !D[b](E) && (D[E] = function(a) {
		return function() {
			var b = arguments;
			return this.forEach(function(c) {
				c[a].apply(c, b)
			})
		}
	}(E))
}(window.Raphael) /*Custom CSS methods*/

Raphael.el.addClass = function(str) {
	var node = this.node;

	//if an element is removed, it's possible for hover, etc handlers to remain active...
	if (typeof(node) == 'undefined') {
		return;
	}

	if (this.hasClass(str)) {
		//already has class
		return;
	} else if (node.className.baseVal != undefined) {
		//SVG node
		node.className.baseVal += ' ' + str;
	} else {
		//VML node
		node.className += ' ' + str;
	}
}

Raphael.el.removeClass = function(str) {
	var node = this.node;

	//if an element is removed, it's possible for hover, etc handlers to remain active...
	if (typeof(node) == 'undefined') {
		return;
	}

	var className = (node.className.baseVal != undefined) ? node.className.baseVal : node.className;
	className = className.replace(str, '').replace('  ', ' ');
	if (node.className.baseVal != undefined) {
		//SVG node
		node.className.baseVal = className;
	} else {
		//VML node
		node.className = className;
	}
}

Raphael.el.hasClass = function(str) {
	var node = this.node;

	//if an element is removed, it's possible for hover, etc handlers to remain active...
	if (typeof(node) == 'undefined') {
		return;
	}

	var className = (node.className.baseVal != undefined) ? node.className.baseVal : node.className;
	return (className.indexOf(str) != -1);
}
var AnnotationManager = function(Q, P, l) {
		var e = this;
		var R = function() {
				c = new CommentPanel(Q, P);
				q();
				e.scale()
			};
		var S = "",
			v = "";
		this.deactivateAllModes = function() {
			$(S).die("mousedown", z).die("mousedown", x).die("mousedown", N).die("mousedown", K).die("mousedown", B).die("mousedown", O);
			$(v).die("mouseup", C).die("mouseup", I);
			a(k.ANNOTATING);
			E()
		};
		this.activateAnnotationMode = function(X) {
			this.deactivateAllModes();console.log(2)
			E();
			switch (X) {
			case DocViewer.HIGHLIGHT_MODE:
				h(C, false);
				o(B, ".layer.highlight,.layer.anno,.layer.text,.layer.commentline");
				break;
			case DocViewer.STRIKEOUT_MODE:
				h(I, false);
				o(O, ".layer.highlight,.layer.anno,.layer.text,.layer.commentline");
				break;
			case DocViewer.ANCHOR_MODE:
				H(k.ANNOTATING);
				o(K);
				break;
			case DocViewer.AREA_MODE:
				H(k.ANNOTATING);
				o(x);
				break;
			case DocViewer.TEXT_COMMENT_MODE:
				h(C, true);
				o(B, ".layer.highlight,.layer.anno,.layer.text,.layer.commentline");
				break;
			case DocViewer.DRAW_MODE:
				H(k.ANNOTATING);
				o(N);
				break;
			case DocViewer.TEXTBOX_MODE:
				H(k.ANNOTATING);
				o(z);
				break;
			default:
				break
			}
		};
		this.renderAnnotation = function(Z) {
			switch (Z.type) {
			case AnnoTypes.DRAWING:
				f(Z.id, Z.pageNumber, Z.x, Z.y, Z.lines, Z.color, Z.author, false);
				break;
			case AnnoTypes.AREA:
				W(Z.id, Z.pageNumber, Z.x, Z.y, Z.width, Z.height, Z.author, false);
				break;
			case AnnoTypes.ANCHOR:
				M(Z.id, Z.pageNumber, Z.x, Z.y, Z.author);
				break;
			case AnnoTypes.TEXTBOX:
				var Y = m(Z.id, Z.content, Z.x, Z.y, Z.pageNumber, Z.color, Z.size, Z.bgColor, Z.author);
				break;
			case AnnoTypes.HIGHLIGHT:
				var X = u(Z.id, Z.content, Z.pageNumber, Z.x, Z.y, Z.color, Z.author, JSON.parse(Z.rectangles));
				X.relatedAnnotation = Z.relatedAnnotation;
				break
			}
		};
		this.clearAnnotation = function(X) {
			G(X.id)
		};
		this.getAnnotation = function(X) {
			return y[X]
		};
		this.addReplacementText = function(X) {
			d(y[X.id])
		};
		this.attachComment = function(X) {
			c.renderComment(null, y[X.id], "", 0, w.authorId, w.name, true)
		};
		this.renderComment = function(aa, Y) {
			var Z = i[aa.author] ? i[aa.author].name : null;
			var X = y[aa.annoId];
			if (X) {
				c.renderComment(aa.id, X, aa.content, aa.orderIndex, aa.author, Z, false, false, Y)
			}
		};
		this.updateCommentPositions = function() {
			c.updatePositions()
		};
		this.clearCommentReply = function(X) {
			c.clearCommentReply(X)
		};
		this.toggleCommentPanel = function() {
			c.toggle()
		};
		this.setActiveAuthorInfo = function(X) {
			w = X;
			c.setActiveAuthorInfo(X)
		};
		this.setKnownAuthors = function(X) {
			i = X
		};
		this.updateAuthor = function(X) {
			c.updateAuthor(X)
		};
		this.scale = function() {
			E();
			$(".layer.anno").each(function(X) {
				var Y = $(this).closest(".page-outer").find(".page");
				$(this).width(Y.width())
			});
			$(".layer.highlight").each(function(X) {
				var Y = $(this).closest(".page-outer").find(".page");
				$(this).width(Y.width())
			});
			$(".layer.strikeout").each(function(X) {
				var Y = $(this).closest(".page-outer").find(".page");
				$(this).width(Y.width())
			});
			$.each(y, function(Y, X) {
				X.scale()
			});
			c.scale()
		};
		this.endCurrentDrawing = function() {
			E()
		};
		this.defocusActiveAnnotation = function(Y, aa, ac, X, ab, Z) {
			if (AnnotationManager.activeAnnotation) {
				var ad = AnnotationManager.activeAnnotation.type;
				if (aa && ad == AnnoTypes.TEXTBOX) {
					AnnotationManager.activeAnnotation.defocus(Y);
					return true
				} else {
					if (ac && ad == AnnoTypes.DRAWING) {
						AnnotationManager.activeAnnotation.defocus(Y);
						return true
					} else {
						if (X && ad == AnnoTypes.ANCHOR) {
							AnnotationManager.activeAnnotation.defocus(Y);
							return true
						} else {
							if (ab && ad == AnnoTypes.AREA) {
								AnnotationManager.activeAnnotation.defocus(Y);
								return true
							} else {
								if (Z && ad == AnnoTypes.HIGHLIGHT) {
									AnnotationManager.activeAnnotation.defocus(Y);
									return true
								}
							}
						}
					}
				}
			}
			return false
		};
		this.defocusActiveComment = function() {
			return c.defocusActiveComment()
		};
		this.updateVisibleAuthors = function(X) {
			for (var Z in y) {
				var Y = y[Z];
				if ($.inArray(Y.author, X) !== -1) {
					Y.show()
				} else {
					Y.hide()
				}
			}
			c.handleCheckedAuthorListChange(X)
		};
		this.setHighlightColor = function(Z, Y) {
			if (Y) {
				var X = y[Y.id];
				X.setColor(Z)
			} else {
				if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation.types == AnnoTypes.HIGHLIGHT) {
					AnnotationManager.activeAnnotation.setColor(Z)
				}
			}
		};
		this.setDrawingColor = function(Y, X) {
			if (X) {
				var Z = y[X.id];
				Z.setColor(Y)
			} else {
				if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation.type == AnnoTypes.DRAWING) {
					AnnotationManager.activeAnnotation.setColor(Y)
				}
			}
			E()
		};
		this.setTextboxColor = function(Z, Y) {
			if (Y) {
				var X = y[Y.id];
				X.setColor(Z)
			} else {
				if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation.type == AnnoTypes.TEXTBOX) {
					AnnotationManager.activeAnnotation.setColor(Z)
				}
			}
		};
		this.setTextboxSize = function(X) {
			if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation.type == AnnoTypes.TEXTBOX) {
				AnnotationManager.activeAnnotation.setSize(X)
			}
		};
		this.setTextboxBGColor = function(X) {
			if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation.type == AnnoTypes.TEXTBOX) {
				AnnotationManager.activeAnnotation.setBGColor(X)
			}
		};
		this.createHighlight = function(Y, X) {
			F(Y, X)
		};
		this.createStrikeout = function(X) {
			F(X, false, true)
		};
		this.getIsReadOnly = function(X) {
			return P || ((w && w.authorId != X) && !Q)
		};
		var L = {},
			y = {};
		var b = {};
		var i = {};
		var c = null;
		var w;
		var D = null;
		var p = null;
		var q = function() {
				$(c).bind({
					commentUpdated: function(Z, Y) {
						Y.annoId = Y.comment.annotation.id;
						Y.annoType = Y.comment.annotation.type;
						Y.author = Y.authorId;
						var X = CommentInfo.makeFromObject(Y);
						$(e).trigger("commentUpdated", [X])
					},
					commentDeleted: function(X, Y) {
						$(e).trigger("commentDeleted", [Y])
					},
					visibilityChanged: function(X) {
						$(e).trigger("commentPanelVisibilityChanged", [X])
					},
					commentFocused: function(Y, X) {}
				})
			};
		var G = function(ad) {
				var aa = y[ad];
				if (aa) {
					if (aa.type == AnnoTypes.DRAWING && aa == A) {
						E()
					}
					if (aa.type == AnnoTypes.HIGHLIGHT) {
						var Y = V(aa.pageNumber);
						for (var Z = 0; Z < aa.rectangles.length; ++Z) {
							var ab = aa.rectangles[Z];
							Y.remove({
								x: ab.x + 1,
								y: ab.y + 1,
								w: 1,
								h: 1
							}, ab.id)
						}
						if (aa.relatedAnnotation != "") {
							G(aa.relatedAnnotation)
						}
						HighlightUtilities.clearSelection()
					}
					if (aa.type == AnnoTypes.TEXTBOX) {
						for (var ad in y) {
							var ac = y[ad];
							if (ac.relatedAnnotation == aa.id) {
								ac.relatedAnnotation = "";
								var X = HighlightInfo.makeFromObject(ac);
								$(e).trigger("annotationUpdated", [X])
							}
						}
					}
					e.defocusActiveAnnotation(true, true, true, true, true, true);
					aa.destroy();
					delete y[ad];
					if (aa.comment) {
						n(aa.comment.id)
					}
					$(e).trigger("annotationDeleted", [ad])
				}
			};
		var n = function(X) {
				c.destroyComment(X)
			};
		var t = function(Y, X) {
				c.focusComment(Y, X)
			};
		var A = null;
		var N = function(ab) {
				if (ab.button != 2) {
					if (e.defocusActiveAnnotation(true, true, true, true, true, true)) {
						return
					}
					if (e.defocusActiveComment()) {
						return
					}
					var Z = $(ab.target).closest(".page-outer");
					var ad = Z.offset();
					var Y = parseInt(Z.attr("pagenum")) + 1;
					var ac = (ab.pageX - ad.left) / DocumentManager.DRAWSCALE;
					var aa = (ab.pageY - ad.top) / DocumentManager.DRAWSCALE;
					if (A && A.pageNumber == Y) {
						A.addLine(ac, aa)
					} else {
						var X = f(null, Y, ac, aa, "[]", l.newDrawColor, w.authorId, true);
						A = X
					}
				}
			};
		var f = function(X, ac, af, ae, ag, Y, ab, aa) {
				var ad = y[X];
				if (ad) {
					ad.toggleUpdates(false);
					ad.setLines(ag);
					ad.setPosition(af, ae);
					ad.setColor(Y);
					ad.toggleUpdates(true)
				} else {
					var Z = e.getIsReadOnly(ab);
					ad = new Drawing(X, J(ac), ac, af, ae, ag, Y, ab, Z, aa);
					y[ad.id] = ad;
					if (!Z) {
						$(ad).bind({
							annotationUpdated: function(aj) {
								var ai = aj.target;
								var ah = DrawingInfo.makeFromObject(ai);
								$(e).trigger("annotationUpdated", [ah])
							},
							dragStarted: function(ah) {
								E();
								H(k.DRAGGING)
							},
							dragStopped: function(ah) {
								a(k.DRAGGING)
							},
							drawStarted: function(ah) {
								H(k.DRAGGING)
							},
							drawStopped: function(ai, ah) {
								a(k.DRAGGING);
								if (!ah) {
									E()
								}
							},
							annotationContextMenu: function(aj, ai) {
								var ah = DrawingInfo.makeFromObject(ai.annotation);
								ai.annotation = ah;
								$(e).trigger("annotationContextMenu", [ai])
							},
							focused: function(ai) {
								var ah = ai.target;
								l.setDrawingMode(ah.color, true)
							},
							defocused: function(ah) {
								l.setCurrentMode(Toolbar.LAST_CURRENT_MODE)
							},
							deleteRequested: function(ah) {
								G(ah.target.id)
							}
						})
					}
				}
				return ad
			};
		var E = function() {
				if (A) {
					A.endDrawing()
				}
				A = null
			};
		var K = function(ac) {
				if (e.defocusActiveAnnotation(true, true, true, true, true, true)) {
					return
				}
				if (e.defocusActiveComment()) {
					return
				}
				var ad = $(ac.target).closest(".page-outer");
				var ab = ad.find(".layer.anno");
				var Z = ad.offset();
				var ae = parseInt(ad.attr("pagenum")) + 1;
				var Y = (ac.pageX - Z.left) / DocumentManager.DRAWSCALE;
				var X = (ac.pageY - Z.top) / DocumentManager.DRAWSCALE;
				var aa = M(null, ae, Y, X, w.authorId);
				var af = AnchorInfo.makeFromObject(aa);
				$(e).trigger("annotationUpdated", [af]);
				setTimeout(function() {
					aa.focus(true)
				}, 0)
			};
		var M = function(ad, aa, X, ac, Z) {
				var Y = y[ad];
				if (Y) {
					Y.setPosition(X, ac);
					c.annotationUpdated(Y)
				} else {
					var ab = e.getIsReadOnly(Z);
					Y = new Anchor(ad, J(aa), aa, X, ac, Z, ab);
					y[Y.id] = Y;
					if (!ab) {
						$(Y).bind({
							annotationUpdated: function(ag) {
								var af = ag.target;
								var ae = AnchorInfo.makeFromObject(af);
								$(e).trigger("annotationUpdated", [ae]);
								c.annotationUpdated(af)
							},
							dragStarted: function(ae) {
								H(k.DRAGGING)
							},
							dragStopped: function(ae) {
								a(k.DRAGGING)
							},
							annotationContextMenu: function(ag, af) {
								var ae = AnchorInfo.makeFromObject(af.annotation);
								af.annotation = ae;
								$(e).trigger("annotationContextMenu", [af])
							},
							focused: function(ae) {
								l.setAnchorMode(true);
								var af = ae.target.comment;
								if (af) {
									t(af, false)
								} else {
									c.renderComment(null, ae.target, "", 0, w.authorId, w.name, true)
								}
							},
							defocused: function(ae) {
								l.setCurrentMode(Toolbar.LAST_CURRENT_MODE);
								var af = ae.target.comment;
								if (af) {
									af.defocus()
								}
							},
							deleteRequested: function(ae) {
								G(ae.target.id)
							}
						})
					}
				}
				return Y
			};
		var x = function(aa) {
				if (aa.button != 2) {
					if (e.defocusActiveAnnotation(true, true, true, true, true, true)) {
						return
					}
					if (e.defocusActiveComment()) {
						return
					}
					var Y = $(aa.target).closest(".page-outer");
					var ac = Y.offset();
					var X = parseInt(Y.attr("pagenum")) + 1;
					var ab = (aa.pageX - ac.left) / DocumentManager.DRAWSCALE;
					var Z = (aa.pageY - ac.top) / DocumentManager.DRAWSCALE;
					W(null, X, ab, Z, 0, 0, w.authorId, true)
				}
			};
		var W = function(Y, ad, af, ae, Z, ag, ac, ab) {
				var X = y[Y];
				if (X) {
					X.setPositionAndDimensions(af, ae, Z, ag);
					c.annotationUpdated(X)
				} else {
					var aa = e.getIsReadOnly(ac);
					X = new Area(Y, J(ad), ad, af, ae, Z, ag, ac, aa, ab);
					y[X.id] = X;
					if (!aa) {
						$(X).bind({
							annotationUpdated: function(aj) {
								var ai = aj.target;
								var ah = AreaInfo.makeFromObject(ai);
								$(e).trigger("annotationUpdated", [ah]);
								c.annotationUpdated(ai)
							},
							dragStarted: function(ah) {
								H(k.DRAGGING)
							},
							dragStopped: function(ah) {
								a(k.DRAGGING)
							},
							annotationContextMenu: function(aj, ai) {
								var ah = AreaInfo.makeFromObject(ai.annotation);
								ai.annotation = ah;
								$(e).trigger("annotationContextMenu", [ai])
							},
							focused: function(ah) {
								l.setAreaMode(true);
								var ai = ah.target.comment;
								if (ai) {
									t(ai, false)
								} else {
									c.renderComment(null, ah.target, "", 0, w.authorId, w.name, true)
								}
							},
							defocused: function(ah) {
								l.setCurrentMode(Toolbar.LAST_CURRENT_MODE);
								var ai = ah.target.comment;
								if (ai) {
									ai.defocus()
								}
							},
							deleteRequested: function(ah) {
								G(ah.target.id)
							}
						})
					}
				}
				return X
			};
		var z = function(X) {
				if (e.defocusActiveAnnotation(true, true, true, true, true, true)) {
					return
				}
				if (e.defocusActiveComment()) {
					return
				}
				T(X)
			};
		var T = function(af) {
				var ag = $(af.target).closest(".page-outer");
				var ah = parseInt(ag.attr("pagenum")) + 1;
				var Z = af.pageX;
				var Y = af.pageY;
				var ab = ag.offset();
				Z = (Z - ab.left);
				Y = (Y - ab.top);
				var ai = 16;
				var X = 2;
				var ae = 5;
				var aa = $('<div class="textbox normal"><div class="textbox-inner"></div></div>').appendTo($(".layer.anno").eq(0));
				aa.css({
					fontSize: l.newTextSize * DocumentManager.DRAWSCALE
				});
				var ad = aa.outerHeight() - (ai / 2) - (DocumentManager.DRAWSCALE * X);
				var am = DocumentManager.DRAWSCALE * ae;
				var ac = Y - ad;
				var an = Z - ae;
				var al = an / DocumentManager.DRAWSCALE;
				var ak = ac / DocumentManager.DRAWSCALE;
				aa.remove();
				var aj = m(null, "", al, ak, ah, l.newTextColor, l.newTextSize, l.newTextBGColor, w.authorId);
				setTimeout(function() {
					aj.focus(true, true)
				}, 0)
			};
		var m = function(X, aa, ag, ae, ac, Y, ah, af, ab) {
				var ad = y[X];
				if (ad) {
					ad.toggleUpdates(false);
					ad.setContent(aa);
					ad.setColor(Y);
					ad.setPosition(ag, ae);
					ad.setSize(ah);
					ad.setBGColor(af);
					ad.toggleUpdates(true)
				} else {
					var Z = e.getIsReadOnly(ab);
					ad = new Textbox(X, s(ac), aa, ag, ae, ac, Y, ah, af, ab, Z);
					y[ad.id] = ad;
					if (!Z) {
						$(ad).bind({
							annotationUpdated: function(ak) {
								var aj = ak.target;
								var ai = TextboxInfo.makeFromObject(aj);
								$(e).trigger("annotationUpdated", [ai])
							},
							deleteRequested: function(ai) {
								G(this.id)
							},
							dragStarted: function(ai) {
								H(k.DRAGGING)
							},
							dragStopped: function(ai) {
								a(k.DRAGGING)
							},
							annotationContextMenu: function(ak, aj) {
								var ai = TextboxInfo.makeFromObject(aj.annotation);
								aj.annotation = ai;
								$(e).trigger("annotationContextMenu", [aj])
							},
							focused: function(aj) {
								var ai = aj.target;
								l.setTextboxMode(ai.color, ai.size, ai.bgColor, true)
							},
							defocused: function(ai) {
								l.setCurrentMode(Toolbar.LAST_CURRENT_MODE)
							}
						})
					}
				}
				return ad
			};
		var g = null;
		var C = function(Z, X) {
				if (Z.button != 2) {
					var aa = HighlightUtilities.getSelectionRange();
					var Y = Z.data.customData;
					if (aa) {
						F(aa, Y, X)
					}
					Z.stopPropagation();
					Z.preventDefault()
				}
			};
		var B = function(Y, X) {
				if (e.defocusActiveAnnotation(true, true, true, true, true, true)) {
					return
				}
				if (e.defocusActiveComment()) {
					return
				}
			};
		var U = function(Y) {
				var X = true;
				if (Y.length > 2000) {
					X = confirm("Are you sure you want to select this much text?")
				}
				return X
			};
		var F = function(Y, ab, af) {
				var ae = HighlightUtilities.getRangeStartPage(Y);
				var ad = HighlightUtilities.getHLRangeContent(Y);
				if (!U(ad)) {
					HighlightUtilities.clearSelection();
					return
				}
				var ac = ae.offset();
				var ag = parseInt(ae.attr("pagenum")) + 1;
				var Z = HighlightUtilities.getRectanglesFromSelection(Y);
				if (Z != null) {
					var aa = af ? 0 : l.newHighlightColor;
					var X = u(null, ad, ag, Z.x, Z.y, aa, w.authorId, Z.rectangles);
					if (ab) {
						c.renderComment(null, X, "", 0, w.authorId, w.name, true)
					}
					if (af) {
						d(X)
					}
					var ah = HighlightInfo.makeFromObject(X);
					$(e).trigger("annotationUpdated", [ah])
				}
			};
		var d = function(Z) {
				if (Z.relatedAnnotation == "") {
					var X = m(null, "", Z.x, Z.y - 15, Z.pageNumber, 16711698, 8, 0, w.authorId);
					var Y = TextboxInfo.makeFromObject(X);
					$(e).trigger("annotationUpdated", [Y]);
					Z.addRelatedAnnotation(X);
					setTimeout(function() {
						X.focus(true, false)
					}, 0)
				} else {
					var X = y[Z.relatedAnnotation];
					X.focus(true, false)
				}
			};
		var u = function(X, ae, ag, ai, ah, aa, af, ac) {
				var Y = y[X];
				if (Y) {} else {
					var ad = e.getIsReadOnly(af);
					Y = new Highlight(X, $("#page" + (parseInt(ag) - 1)).find(".layer.highlight"), ae, ai, ah, ag, aa, af, ad, ac);
					var Z = V(ag);
					for (var ab = 0; ab < ac.length; ++ab) {
						Z.insert({
							x: ac[ab].x,
							y: ac[ab].y,
							w: ac[ab].width,
							h: ac[ab].height
						}, Y.id)
					}
					y[Y.id] = Y;
					if (!ad) {
						$(Y).bind({
							annotationUpdated: function(al) {
								var ak = al.target;
								var aj = HighlightInfo.makeFromObject(ak);
								$(e).trigger("annotationUpdated", [aj])
							},
							annotationContextMenu: function(al, ak) {
								var aj = HighlightInfo.makeFromObject(ak.annotation);
								ak.annotation = aj;
								$(e).trigger("annotationContextMenu", [ak])
							},
							deleteRequested: function(aj) {
								G(aj.target.id)
							}
						})
					}
				}
				return Y
			};
		var I = function(X) {
				C(X, true)
			};
		var O = function(X) {
				B(X, true)
			};
		var s = function(Y) {
				var X = $("#page" + (parseInt(Y) - 1)).find(".layer.anno");
				return X.length > 0 ? X : null
			};
		var V = function(Y) {
				var X = null;
				if (b[Y]) {
					X = b[Y]
				} else {
					X = new RTree();
					b[Y] = X;
					r(Y)
				}
				return X
			};
		var J = function(Z) {
				var X = null;
				if (L[Z]) {
					X = L[Z]
				} else {
					var Y = s(Z);
					if (Y) {
						X = Raphael(Y.get(0), "100%", "100%");
						L[Z] = X
					}
				}
				return X
			};
		var j = function(ad) {
				var ae = $(ad.target).closest(".page-outer");
				var af = parseInt(ae.attr("pagenum")) + 1;
				var ab = ae.offset();
				var aa = (ad.pageX - ab.left) / DocumentManager.DRAWSCALE;
				var Z = (ad.pageY - ab.top) / DocumentManager.DRAWSCALE;
				var ag = V(af).search({
					x: aa,
					y: Z,
					w: 1,
					h: 1
				});
				var X = [];
				for (var ac = 0; ac < ag.length; ++ac) {
					var Y = y[ag[ac]];
					if (Y && Y.isVisible()) {
						X.push(y[ag[ac]])
					}
				}
				return X
			};
		var r = function(X) {
				$("#page" + (parseInt(X) - 1)).live("mousemove", function(Z) {
					if (!AnnotationManager.isDragging) {
						var Y = j(Z);
						if (g && g == Y[0]) {
							return
						}
						if (g && !g.isReadOnly) {
							g.setHover(false);
							g = null
						}
						if (Y.length > 0 && typeof(Y[0]) !== "undefined" && !Y[0].isReadOnly) {
							Y[0].setHover(true);
							g = Y[0]
						}
					}
				});
				$("#page" + (parseInt(X) - 1)).live("contextmenu", function(Z) {
					var Y = j(Z);
					if (Y.length > 0 && !Y[0].isReadOnly) {
						Z.stopPropagation();
						return false
					}
				});
				$("#page" + (parseInt(X) - 1)).live("mouseup", function(Z) {
					if (Z.isPropagationStopped()) {
						return
					}
					var Y = j(Z);
					if (Y.length > 0 && !Y[0].isReadOnly) {
						Y[0].showContextMenu(Z.pageX, Z.pageY);
						Z.stopPropagation();
						return false
					}
				})
			};
		var o = function(X, Y) {
				if ($.browser.msie) {
					S = ".page, .layer.anno";
					$(".page, .layer.anno").live("mousedown", X)
				} else {
					S = Y || ".layer.anno";
					$(S).live("mousedown", X)
				}
			};
		var h = function(Y, X) {
				v = ".page-outer";
				$(v).live("mouseup", {
					customData: X
				}, Y)
			};
		var k = {
			ANNOTATING: 1,
			DRAGGING: 2
		};
		var H = function(X) {
				if (!AnnotationManager.isAnnotating && !AnnotationManager.isDragging) {
					$("#Doc").addClass("annotating");
					if ($.browser.msie) {
						p = $("#Doc")[0].onselectstart;
						$("#Doc")[0].onselectstart = function() {
							return false
						};
						D = $("#Doc")[0].ondragstart;
						$("#Doc")[0].ondragstart = function() {
							return false
						}
					}
				}
				if (X == k.ANNOTATING) {
					AnnotationManager.isAnnotating = true
				}
				if (X == k.DRAGGING) {
					AnnotationManager.isDragging = true
				}
			};
		var a = function(X) {
				if (X == k.ANNOTATING) {
					AnnotationManager.isAnnotating = false
				}
				if (X == k.DRAGGING) {
					AnnotationManager.isDragging = false
				}
				if (!AnnotationManager.isAnnotating && !AnnotationManager.isDragging) {
					$("#Doc").removeClass("annotating");
					if ($.browser.msie) {
						$("#Doc")[0].onselectstart = p;
						p = null;
						$("#Doc")[0].ondragstart = D;
						D = null
					}
				}
			};
		R()
	};
AnnotationManager.activeAnnotation = null;
AnnotationManager.activeComment = null;
AnnotationManager.isAnnotating = false;
AnnotationManager.isDragging = false;
var CommentPanel = function(t, D) {
		var r = this;
		var w = function() {
				y()
			};
		this.show = function() {
			if (!$("#Doc").hasClass("hide-comment-panel")) {
				return
			}
			$("#Doc").removeClass("hide-comment-panel");
			n();
			$(r).trigger("visibilityChanged", [true])
		};
		this.hide = function() {
			if ($("#Doc").hasClass("hide-comment-panel")) {
				return
			}
			$("#Doc").addClass("hide-comment-panel");
			$(r).trigger("visibilityChanged", [false])
		};
		this.toggle = function() {
			if ($(".comment-pane").is(":visible")) {
				this.hide()
			} else {
				this.show()
			}
		};
		this.renderComment = function(P, J, N, L, M, I, O, K) {
			j(P, J, N, L, M, I, O, K)
		};
		this.updatePositions = function() {
			A();
			var I = u(false);
			E(false, I)
		};
		this.clearComment = function(I) {
			B(I)
		};
		this.focusComment = function(M, I, K) {
			$("#DocHolder").scrollLeft(10000000);
			if (e(M)) {
				var J = u(true, M.annotation.pageNumber);
				A();
				E(true, J);
				var L = $("#page" + (parseInt(M.annotation.pageNumber) - 1)).find(".comment-pane .overflow-close-button");
				L.show();
				s = true
			}
			M.focusReply(K)
		};
		this.defocusActiveComment = function() {
			if (AnnotationManager.activeComment) {
				AnnotationManager.activeComment.defocus(true);
				return true
			}
			return false
		};
		this.destroyComment = function(K) {
			var J = k[K];
			if (J) {
				q(J);
				J.destroy();
				J.annotation.comment = null;
				A();
				var I = u(false, J.annotation.pageNumber);
				E(false, I);
				delete k[K]
			}
			if (m.length == 0) {
				r.hide()
			}
		};
		this.clearCommentReply = function(I) {
			v(I)
		};
		this.annotationUpdated = function(I) {
			var K = I.comment;
			if (K) {
				g(K);
				A();
				var J = u(false, K.annotation.pageNumber);
				E(false, J)
			}
		};
		this.setActiveAuthorInfo = function(I) {
			x = I;
			this.updateAuthor(x)
		};
		this.updateAuthor = function(J) {
			for (var I in F) {
				var K = F[I];
				if (K.authorId === J.authorId) {
					K.updateAuthorName(J.name)
				}
			}
		};
		this.scale = function() {
			A();
			var I = u(false);
			n();
			E(false, I)
		};
		this.handleCheckedAuthorListChange = function(I) {
			for (var K in k) {
				var J = k[K];
				if ($.inArray(J.annotation.author, I) !== -1) {
					J.show();
					J.authorHidden = false
				} else {
					J.hide();
					J.authorHidden = true
				}
			}
		};
		var k = {},
			H = {},
			o = {};
		var F = {};
		var m = [];
		var x;
		var s = false;
		var j = function(I, K, P, J, Q, R, L, N) {
				var O = f(I);
				if (O) {
					O.setContent(P);
					O.authorName = x.name;
					return O.comment
				}
				var M;
				if (K.comment) {
					M = K.comment
				} else {
					if (m.length == 0) {
						r.show()
					}
					M = C(I, K, Q, N);
					K.comment = M
				}
				O = a(M, I, P, J, Q, R, N);
				if (L) {
					r.focusComment(M, true, O)
				} else {
					i(M, false)
				}
				return M
			};
		var B = function(I) {
				if (I) {
					I.deleteAllReplies();
					r.destroyComment(I.id);
					$(".comment-pane .overflow-close-button").click()
				}
			};
		var a = function(K, I, O, J, P, R, L) {
				var M = D || P != x.authorId;
				var N = K.addCommentReply(new CommentReply(I, P, R, O, J, M));
				F[N.id] = N;
				$(N).bind({
					replyDeleteRequested: function(S) {
						d(S)
					},
					commentUpdated: function(S) {
						z(S)
					},
					heightChanged: function(S) {
						A()
					}
				});
				if (L != false) {
					A();
					var Q = u(false, K.annotation.pageNumber);
					E(false, Q)
				}
				return N
			};
		var v = function(L) {
				var J = F[L];
				if (J) {
					var K = J.comment;
					K.destroyCommentReply(J);
					if (K.getNumReplies() == 0) {
						B(K)
					}
					A();
					var I = u(false, K.annotation.pageNumber);
					E(false, I)
				}
			};
		var C = function(O, I, M, J) {
				var K = !D && ((M == x.authorId) || t);
				var N = new Comment(O, I, c(I.pageNumber), D, K);
				$(N).bind({
					commentDeleteRequested: function(P) {
						b(P)
					},
					addReplyRequested: function(P) {
						var Q = P.target;
						if (Q) {
							j(null, Q.annotation, "", Q.getMaxOrderIndex() + 1, x.authorId, x.name, true)
						}
					},
					commentFocused: function(P) {
						$(r).trigger("commentFocused", [P])
					},
					commentDefocused: function(Q) {
						var R = Q.target;
						var P = u(false, R.annotation.pageNumber);
						E(false, P)
					}
				});
				k[N.id] = N;
				h(N);
				if (J != false) {
					A();
					var L = u(false, N.annotation.pageNumber);
					E(false, L)
				}
				return N
			};
		var h = function(N) {
				var L = N.getYPosition();
				var M = N.annotation.pageNumber;
				var J;
				for (J = 0; J < m.length; J++) {
					var I = m[J];
					var K = I.annotation.pageNumber;
					if (M < K || M == K && L < I.getYPosition()) {
						break
					}
				}
				m.splice(J, 0, N)
			};
		var q = function(K) {
				var J;
				for (J = 0; J < m.length; J++) {
					var I = m[J];
					if (I == K) {
						break
					}
				}
				m.splice(J, 1)
			};
		var g = function(L) {
				var K = L.getYPosition();
				var J;
				for (J = 0; J < m.length; J++) {
					var I = m[J];
					if (I == L) {
						break
					}
				}
				m.splice(J, 1);
				h(L)
			};
		var A = function() {
				if (m.length == 0) {
					return
				}
				var O = m[0];
				O.setViewPosition(O.getYPosition());
				var M, P, I, L;
				for (var K = 1; K < m.length; K++) {
					M = m[K - 1];
					P = m[K];
					I = M.getViewPosition() * DocumentManager.DRAWSCALE;
					L = P.getYPosition() * DocumentManager.DRAWSCALE;
					var N = P.annotation.pageNumber == M.annotation.pageNumber ? Math.max(0, I + (M.getHeight() - L) + 10) : 0;
					var J = P.getYPosition() + (N / DocumentManager.DRAWSCALE);
					P.setViewPosition(J)
				}
			};
		var f = function(I) {
				return F[I]
			};
		var z = function(I) {
				$(r).trigger("commentUpdated", [I.target])
			};
		var b = function(I) {
				B(I.target)
			};
		var d = function(I) {
				$(r).trigger("commentDeleted", [I.target.id]);
				v(I.target.id)
			};
		var E = function(J, K) {
				if (typeof(K) != "undefined" && K != null && (J || !s)) {
					var L = $("#page" + (parseInt(K.annotation.pageNumber) - 1));
					if (J && K != null) {
						L.find(".comment-pane").css("z-index", 100);
						var I = (L.offset().top + K.getViewPosition() * DocumentManager.DRAWSCALE + K.getDOMElement().height() + 33) - L.offset().top;
						L.find(".commentline.layer").height(I);
						L.find(".comment-pane").height(I)
					} else {
						$(".comment-pane").css("z-index", 12);
						L.find(".commentline.layer").height("100%");
						L.find(".comment-pane").height("100%")
					}
				}
			};
		var u = function(K, J) {
				var I = m[m.length - 1];
				if (K || !s) {
					for (var L = 0; L < m.length; ++L) {
						if (J == null || J == m[L].annotation.pageNumber) {
							i(m[L], K);
							I = m[L]
						}
					}
					$(".comment-pane").removeClass("transparent");
					$(".layer.commentline").removeClass("transparent");
					if (K) {
						$('.page-outer[pagenum!="' + (parseInt(J) - 1) + '"]').find(".comment-pane").addClass("transparent").end().find(".layer.commentline").addClass("transparent")
					}
				}
				return I
			};
		var i = function(J, I) {
				if (J.authorHidden == true || (e(J) && !I)) {
					J.hide();
					if (J.overflowHidden != true && I == false) {
						J.overflowHidden = true;
						if (o[J.annotation.pageNumber] != null) {
							o[J.annotation.pageNumber] = o[J.annotation.pageNumber] + 1
						} else {
							o[J.annotation.pageNumber] = 1
						}
					}
				} else {
					J.show();
					if (J.overflowHidden == true) {
						o[J.annotation.pageNumber] = o[J.annotation.pageNumber] - 1;
						J.overflowHidden = false
					}
				}
				G(J.annotation.pageNumber, o[J.annotation.pageNumber] > 0)
			};
		var e = function(K) {
				var J = false;
				var I = $("#page" + (parseInt(K.annotation.pageNumber) - 1));
				if (K.getViewPosition() * DocumentManager.DRAWSCALE + K.getDOMElement().height() > I.height()) {
					J = true
				}
				return J
			};
		var G = function(J) {
				var I = $("#page" + (parseInt(J) - 1)).find(".comment-pane .overflow-button");
				var L = $("#page" + (parseInt(J) - 1)).find(".comment-pane .overflow-close-button");
				var K = o[J];
				if (typeof(K) != "undefined" && K > 0) {
					I.show()
				} else {
					I.hide()
				}
				L.hide()
			};
		var p = function(I) {
				return $("#page" + (parseInt(I) - 1)).find(".commentline.layer")
			};
		var c = function(K) {
				var I = null;
				if (H[K]) {
					I = H[K]
				} else {
					var J = p(K);
					I = Raphael(J.get(0), "100%", "100%");
					H[K] = I
				}
				return I
			};
		var l = function() {};
		var y = function() {
				$("#CommentPanelCloseBtn").live("click", function(I) {
					$(document.body).addClass("hide-commentpanel")
				});
				$(".comment-pane .overflow-button").live("click", function(L) {
					var K = parseInt($(this).closest(".page-outer").attr("pagenum")) + 1;
					var J = $(this).closest(".comment-pane").find(".overflow-close-button");
					var I = u(true, K);
					A();
					E(true, I);
					J.show();
					s = true
				});
				$(".comment-pane .overflow-close-button").live("click", function(L) {
					s = false;
					var K = parseInt($(this).closest(".page-outer").attr("pagenum")) + 1;
					var J = $(this).closest(".comment-pane").find(".overflow-close-button");
					var I = u(false, K);
					A();
					E(false, I);
					J.hide()
				})
			};
		var n = function() {};
		w()
	};
var ContextMenu = function() {
		var c = this;
		var b = function() {
				d = $("#AnnotationMenu");
				e()
			};
		this.show = function(f, k, g) {
			a = g;
			$(document).bind("mousedown", c.hide);
			var j = $("#DocHolder").offset();
			var h = $("#DocHolder").scrollTop();
			var i = $("#DocHolder").scrollLeft();
			d.find("li").hide();
			switch (g.type) {
			case AnnoTypes.HIGHLIGHT:
				if (g.color == 0) {
					d.find(".strikeout").show()
				} else {
					d.find(".highlight").show()
				}
				break;
			case AnnoTypes.ANCHOR:
				d.find(".anchor").show();
				break;
			case AnnoTypes.AREA:
				d.find(".area").show();
				break;
			case AnnoTypes.DRAWING:
				d.find(".drawing").show();
				break;
			case AnnoTypes.TEXTBOX:
				d.find(".textbox").show();
				break
			}
			d.css({
				top: "",
				left: ""
			}).offset({
				top: k + h - j.top,
				left: f + i - j.left
			}).show()
		};
		this.hide = function() {
			$(document).unbind("mousedown", c.hide);
			d.hide()
		};
		var a;
		var d;
		var e = function() {
				$(".contextMenu").live("contextmenu", function() {
					return false
				});
				d.find("li").bind("mousedown", function() {
					return false
				});
				d.find("li").bind("click", function() {
					var f = {
						action: ($(this).attr("action")).split(" "),
						annotation: a
					};
					$(c).trigger("itemClicked", [f])
				})
			};
		b()
	};
var DocViewer = function(i, r, O, G, ai) {
		var p = this;
		var ah = false,
			t = null,
			d = null,
			B = null,
			X = null,
			N = null,
			ap = r,
			e = null,
			x = null,
			R = null,
			D = null;
		var ak = function() {};
		this.run = function() {
			var av = Utilities.isBrowserCompatible();
			ah = i.readonly;
			x = new Toolbar(ah, i.pageCount, G);
			d = new AnnotationPanel(ah);
			B = new AuthorPanel(i);
			X = new SidePanel(O);
			t = new AnnotationManager(ai, ah, x);
			N = new DocTitle(i.title, ah);
			e = new Model();
			D = new ContextMenu();
			R = new SharingDialog(i.uuid);
			ao();
			F();
			v();
			c();
			o();
			V();
			al();
			C();
			l();
			m();
			I(INITIAL_AUTHOR_INFO);
			aa(DocViewer.SELECT_MODE);
			R.setShareParameters(i.sharingParams);
			ap.setInitialZoom();
			t.scale();
			var aw = e.getUserPrefs();
			var ax = aw.annoTbShowing;
			x.setAnnotateToolbarState(ax, true);
			var at = aw.drColor != null && typeof(aw.drColor) != "undefined" ? aw.drColor : INITIAL_PEN_COLOR;
			var aA = aw.tbColor != null && typeof(aw.tbColor) != "undefined" ? aw.tbColor : 0;
			var au = aw.tbSize != null && typeof(aw.tbSize) != "undefined" ? aw.tbSize : 12;
			var az = aw.tbBGColor != null && typeof(aw.tbBGColor) != "undefined" ? aw.tbBGColor : -1;
			var ay = aw.hlColor != null && typeof(aw.hlColor) != "undefined" ? aw.hlColor : 16774792;
			x.initializeDrawColor(at);
			x.initializeTextboxColor(aA);
			x.initializeTextboxSize(au);
			x.initializeTextboxBGColor(az);
			x.initializeHighlightColor(ay);
			if (!ah && !aw.tut) {
				w();
				e.updateUserPref("tut", 1)
			}
			if (ah) {
				Z = false
			}
		};
		var ao = function() {
				$(t).bind({
					annotationUpdated: function(av, at) {
						q(at, function(aw) {
							if (aw) {}
						});
						var au = e.getUserPrefs();
						if (!au.sidePanelShown) {
							B.flash();
							e.updateUserPref("sidePanelShown", 1)
						}
					},
					annotationDeleted: function(au, at) {
						W(at, function(av) {
							if (av) {}
						})
					},
					annotationContextMenu: function(au, at) {
						D.show(at.x, at.y, at.annotation)
					},
					commentUpdated: function(au, at) {
						e.saveComment(at);
						d.updateComment(at)
					},
					commentDeleted: function(au, at) {
						e.deleteComment(at);
						d.deleteComment(at)
					},
					commentPanelVisibilityChanged: function(at) {
						ap.resizeForCommentPanel();
						t.scale()
					}
				})
			};
		var F = function() {
				$(d).bind({
					annotationClick: function(ax, au) {
						var aw = t.getAnnotation(au);
						if (aw) {
							var ay = aw.getAnnoLocationInfo();
							var av = $("#page" + (parseInt(aw.pageNumber) - 1)).offset().top;
							var at = $("#DocHolder").offset().top;
							ap.scrollTo(aw.pageNumber, ay + av - at)
						}
					}
				})
			};
		var v = function() {
				$(X).bind({
					opened: function() {
						ap.resize();
						t.scale()
					},
					closed: function() {
						ap.resize();
						t.scale()
					}
				})
			};
		var c = function() {
				$(B).bind({
					authorInfoChange: function(av, au) {
						var at = e.getCurrentAuthorInfo();
						at.name = au.name;
						at.email = au.email;
						e.setAuthorInfo(at, null, ah);
						if (at.name) {
							$.cookie("cc_authorname", at.name, {
								expires: 365
							})
						}
						at = e.getCurrentAuthorInfo();
						d.updateAuthorInfo(at);
						t.setActiveAuthorInfo(at)
					},
					authorLeave: function(at) {
						e.setAuthorInactive()
					},
					sharingButtonClick: function(at) {
						R.open(e.getCurrentAuthorInfo().authorId)
					},
					authorHoverChange: function(av, au, at) {
						d.handleAuthorHoverChange(au, at)
					},
					checkedAuthorListChange: function(au, at) {
						d.handleCheckedAuthorListChange(at.authorIdList);
						t.updateVisibleAuthors(at.authorIdList)
					},
					loginRequest: function(au, av, at) {
						T(av, at, function(aw) {
							if (!aw) {
								aq(av);
								h(av, function(ax) {
									authorpanel.loginRequestedCallback(aw);
									I(ax)
								})
							} else {
								authorpanel.loginRequestedCallback(aw)
							}
						})
					}
				})
			};
		var o = function() {
				$(N).bind({
					titleUpdated: function(at, au) {
						e.setTitle(au, function(av) {
							if (av) {
								e.log(LogTypes.ERROR, "Error setting document title:" + av.toString())
							}
						})
					}
				})
			};
		var C = function() {
				$(D).bind({
					itemClicked: function(av, au) {
						switch (au.action[0]) {
						case "delete":
							t.clearAnnotation(au.annotation);
							W(au.annotation.id, function(aw) {
								if (aw) {}
							});
							break;
						case "color":
							var at = parseInt(au.action[1]);
							switch (au.annotation.type) {
							case AnnoTypes.HIGHLIGHT:
								t.setHighlightColor(at, au.annotation);
								break;
							case AnnoTypes.DRAWING:
								t.setDrawingColor(at, au.annotation);
								break;
							case AnnoTypes.TEXTBOX:
								t.setTextboxColor(at, au.annotation);
								break
							}
							break;
						case "addcomment":
							t.attachComment(au.annotation);
							break;
						case "addreplacement":
							t.addReplacementText(au.annotation)
						}
						D.hide()
					}
				})
			};
		var V = function() {
				$(ap).bind({
					currentPageChange: function(au, at) {
						x.setCurrentPage(at)
					},
					setZoomLevel: function(at, au) {
						x.setZoomUI(au);
						t.scale()
					}
				})
			};
		var al = function() {
				$(x).bind({
					annotateToolbarVisibilityChange: function(au, at) {
						e.updateUserPref("annoTbShowing", at)
					},
					highlightRequested: function(au, av, at) {
						setTimeout(function() {
							t.createHighlight(av, at)
						}, 0)
					},
					highlightModeActivated: function(at) {
						ar(true)
					},
					highlightModeDeactivated: function(at) {
						ar(false)
					},
					strikeoutRequested: function(at, au) {
						t.createStrikeout(au)
					},
					strikeoutModeActivated: function(at) {
						P(true)
					},
					strikeoutModeDeactivated: function(at) {
						P(false)
					},
					drawingModeActivated: function(at) {
						g(true)
					},
					drawingModeDeactivated: function(at) {
						g(false)
					},
					textboxModeActivated: function(au, at) {
						k = at === true;
						ad(true)
					},
					textboxModeDeactivated: function(at) {
						ad(false)
					},
					commentModeActivated: function(au, at) {
						ac(at, true)
					},
					commentModeDeactivated: function(au, at) {
						ac(at, false)
					},
					commentModeChanged: function(au, at) {
						ac(at, true)
					},
					areaModeActivated: function(at) {
						Q(true)
					},
					areaModeDeactivated: function(at) {
						Q(false)
					},
					anchorModeActivated: function(at) {
						n(true)
					},
					anchorModeDeactivated: function(at) {
						n(false)
					},
					anyModeDeactivated: function(at) {
						aa(z)
					},
					pageUp: function(at) {
						ap.pageUp()
					},
					pageDown: function(at) {
						ap.pageDown()
					},
					goToPage: function(au, at) {
						ap.goToPage(at)
					},
					zoomIn: function() {
						ap.zoomIn()
					},
					zoomOut: function() {
						ap.zoomOut()
					},
					setZoom: function(at, au) {
						ap.setZoom(au);
						t.scale()
					},
					setDrawColor: function(au, at) {
						t.setDrawingColor(at.hex);
						e.updateUserPref("drColor", at.index)
					},
					setTextColor: function(au, at) {
						t.setTextboxColor(at.hex);
						e.updateUserPref("tbColor", at.index)
					},
					setTextSize: function(au, at) {
						t.setTextboxSize(at);
						e.updateUserPref("tbSize", at)
					},
					setTextBGColor: function(au, at) {
						t.setTextboxBGColor(at);
						e.updateUserPref("tbBGColor", at)
					},
					setHighlightColor: function(at, au) {
						S();
						e.updateUserPref("hlColor", au)
					},
					shareBtnClicked: function() {
						R.open(e.getCurrentAuthorInfo().authorId)
					},
					exportRequested: function(az, ax) {
						var ay = function(aB, aC) {
								if (IS_DEMO) {
									alert("Your annotations will not be included because you are viewing this document in demo mode.")
								}
								switch (aB.errorCode) {
								case 0:
									if (aC == 1) {
										if (!DEBUG) {
											_gaq.push(["_trackEvent", "download", "annotated"])
										}
										location.href = "/download/m/?uuid=" + i.uuid + "&shortId=" + i.shortId + "&marked=" + aB.uuid;
										x.exportComplete(0, aC, aB)
									} else {
										if (aC == 2) {
											if (!DEBUG) {
												_gaq.push(["_trackEvent", "download", "google-docs"])
											}
											$.ajax({
												type: "POST",
												url: "/webservice/document/export",
												data: {
													marked: aB.uuid,
													uuid: i.uuid,
													shortId: i.shortId
												},
												success: function(aD) {
													if (aD == "error") {
														return;
														e.getExportPermissions(function(aF, aE) {
															window.location.hash = "";
															if (!aF) {
																x.exportComplete(2, aC, null, aE)
															} else {
																aw(aC)
															}
														})
													} else {
														x.exportComplete(0, aC, aD)
													}
												},
												error: function(aD, aF, aE) {
													window.location.hash = "";
													x.exportComplete(1, aC, "")
												}
											})
										}
									}
									break;
								case 1:
									alert("We are unable to generate your document.  The original may be copy protected.");
									x.exportComplete(1, aC, "");
									break;
								case 2:
									alert("There was an error generating your document. Please contact support.");
									x.exportComplete(1, aC, "");
									break;
								case 3:
									alert("There was an error printing your document. Please contact support.");
									x.exportComplete(1, aC, "");
									break;
								case 4:
								default:
									alert("There was an error generating your document. Please contact support.");
									x.exportComplete(1, aC, "");
									break
								}
							};
						var aw = function(aD) {
								var aE = e.getAllAnnotations();
								var aC = false;
								for (var aF in aE) {
									var aB = aE[aF];
									if (aB.type == AnnoTypes.HIGHLIGHT && !aB.rectangles) {
										aC = true;
										break
									}
								}
								if (aC) {
									alert("Note: One or more highlights in this document will not be shown because they were created before Crocodoc's update in July, 2010.")
								}
								$.ajax({
									url: "/printer/render",
									type: "POST",
									data: {
										uuid: i.uuid,
										shortId: i.shortId
									},
									contentType: "application/json; charset=utf-8",
									dataType: "json",
									success: function(aG) {
										ay(aG, aD)
									},
									error: function(aI, aG, aH) {
										alert("There was an error generating your document. Please contact support.");
										x.exportComplete(1, aD, "")
									}
								})
							};
						var au = null;
						switch (ax) {
						case 0:
							if (!DEBUG) {
								_gaq.push(["_trackEvent", "download", "original"])
							}
							location.href = "/download/?uuid=" + i.uuid + "&shortId=" + i.shortId;
							break;
						case 1:
							aw(ax);
							break;
						case 2:
							var at = false;
							for (var aA in e.getAllAnnotations()) {
								at = true
							}
							for (var aA in e.getAllComments()) {
								at = true
							}
							var av = false;
							if (at) {
								av = confirm("Include annotations within this document?")
							}
							if (av) {
								x.startExport();
								aw(1)
							} else {
								location.href = "/download/?uuid=" + i.uuid + "&shortId=" + i.shortId
							}
						}
					}
				})
			};
		var f = null;
		var l = function() {
				$("#DocHolder").mousedown(am);
				$(window).smartresize(an);
				$("#DocHolder").scroll(u)
			};
		$("#LeftPane").bind("touchstart", function(at) {
			Y(at)
		}, false);
		$("#LeftPane").bind("touchmove", function(at) {
			E(at)
		}, false);
		$("#LeftPane").bind("touchend", function(at) {
			aj(at)
		}, false);
		var Y = function(au) {
				var at = au.originalEvent.touches;
				f = at[0].pageY
			};
		var E = function(au) {
				var av = au.originalEvent.touches[0];
				au.preventDefault();
				var at = f - av.pageY;
				f = av.pageY;
				$("#DocHolder").scrollTop($("#DocHolder").scrollTop() + at)
			};
		var aj = function(at) {};
		var ar = function(at) {
				if (at) {
					aa(DocViewer.HIGHLIGHT_MODE)
				} else {
					aa(z)
				}
			};
		var P = function(at) {
				if (at) {
					aa(DocViewer.STRIKEOUT_MODE)
				} else {
					aa(z)
				}
			};
		var g = function(at) {
				if (at) {
					aa(DocViewer.DRAW_MODE)
				} else {
					aa(z)
				}
			};
		var ad = function(at) {
				if (at) {
					aa(DocViewer.TEXTBOX_MODE)
				} else {
					aa(z)
				}
			};
		var ac = function(au, at) {
				switch (au) {
				case Toolbar.ANCHOR_COMMENT_MODE:
					n(at);
					break;
				case Toolbar.AREA_COMMENT_MODE:
					Q(at);
					break;
				case Toolbar.TEXT_COMMENT_MODE:
					ab(at);
					break
				}
			};
		var Q = function(at) {
				if (at) {
					aa(DocViewer.AREA_MODE)
				} else {
					aa(z)
				}
			};
		var n = function(at) {
				if (at) {
					aa(DocViewer.ANCHOR_MODE)
				} else {
					aa(z)
				}
			};
		var ab = function(at) {
				if (at) {
					aa(DocViewer.TEXT_COMMENT_MODE)
				} else {
					aa(z)
				}
			};
		var z, y;
		var a, J, M, U, j, L, ag;
		var k = false;
		var aa = function(at) {
				t.defocusActiveAnnotation(true, true, true, true, true, true);
				if (y == at) {
					return
				}
				a = false;
				J = false;
				strikeoutMode = false;
				M = false;
				U = false;
				j = false;
				L = false;
				ag = false;
				t.deactivateAllModes();
				switch (at) {
				case DocViewer.SELECT_MODE:
					z = at;
					a = true;
					break;
				case DocViewer.HIGHLIGHT_MODE:
					J = true;
					t.activateAnnotationMode(at);
					break;
				case DocViewer.STRIKEOUT_MODE:
					strikeoutMode = true;
					t.activateAnnotationMode(at);
					break;
				case DocViewer.TEXTBOX_MODE:
					M = true;
					t.activateAnnotationMode(at);
					break;
				case DocViewer.DRAW_MODE:
					U = true;
					t.activateAnnotationMode(at);
					break;
				case DocViewer.ANCHOR_MODE:
					j = true;
					t.activateAnnotationMode(at);
					break;
				case DocViewer.AREA_MODE:
					L = true;
					t.activateAnnotationMode(at);
					break;
				case DocViewer.TEXT_COMMENT_MODE:
					ag = true;
					t.activateAnnotationMode(at);
					break
				}
				y = at;
				S()
			};
		var am = function(at) {
				if (y == DocViewer.SELECT_MODE) {
					t.defocusActiveAnnotation(true, true, true, true, true, true);
					t.defocusActiveComment()
				}
			};
		var an = function(at) {
				ap.resize();
				t.scale()
			};
		var u = function(at) {
				t.endCurrentDrawing()
			};
		var S = function() {
				switch (y) {
				case DocViewer.HIGHLIGHT_MODE:
					af(DocViewer.CURRENT_HL_CURSOR);
					break;
				case DocViewer.STRIKEOUT_MODE:
					af(DocViewer.STRIKEOUT_CURSOR);
					break;
				case DocViewer.TEXTBOX_MODE:
					af(DocViewer.TEXTBOX_CURSOR);
					break;
				case DocViewer.DRAW_MODE:
					af(DocViewer.PENCIL_CURSOR);
					break;
				case DocViewer.ANCHOR_MODE:
					af(DocViewer.COMMENT_ANCHOR_CURSOR);
					break;
				case DocViewer.AREA_MODE:
					af(DocViewer.COMMENT_AREA_CURSOR);
					break;
				case DocViewer.TEXT_COMMENT_MODE:
					af(DocViewer.COMMENT_TEXT_CURSOR);
					break;
				default:
					af(DocViewer.NO_CURSOR)
				}
			};
		var A = -1;
		var af = function(au) {
				if (au == A && au != DocViewer.CURRENT_HL_CURSOR) {
					return
				}
				A = au;
				var av = $(".layer.anno").add($(".page"));
				av.removeClass("drw_cursor tb_cursor hl_yellow_cursor hl_orange_cursor hl_green_cursor hl_blue_cursor strikeout_cursor canchor_cursor carea_cursor ctext_cursor nw_resize_cursor ne_resize_cursor");
				switch (A) {
				case DocViewer.CURRENT_HL_CURSOR:
					var at = Highlight.colorLookup[x.newHighlightColor].cursorClass;
					av.addClass(at);
					break;
				case DocViewer.TEXTBOX_CURSOR:
					av.addClass("tb_cursor");
					break;
				case DocViewer.STRIKEOUT_CURSOR:
					av.addClass("strikeout_cursor");
					break;
				case DocViewer.PENCIL_CURSOR:
					av.addClass("drw_cursor");
					break;
				case DocViewer.COMMENT_ANCHOR_CURSOR:
					av.addClass("canchor_cursor");
					break;
				case DocViewer.COMMENT_AREA_CURSOR:
					av.addClass("carea_cursor");
					break;
				case DocViewer.COMMENT_TEXT_CURSOR:
					av.addClass("ctext_cursor");
					break;
				case DocViewer.NW_RESIZE_CURSOR:
					av.addClass("nw_resize_cursor");
					break;
				case DocViewer.NE_RESIZE_CURSOR:
					av.addClass("ne_resize_cursor");
					break;
				case DocViewer.NO_CURSOR:
					break
				}
			};
		var I = function(at) {
				if (!ah) {
					e.setAuthorInfo(at, null, ah);
					if (at.name) {
						at.name = unescape(at.name)
					}
					B.setActiveAuthorInfo(at);
					d.updateAuthorInfo(at);
					t.setActiveAuthorInfo(at)
				}
			};
		var q = function(at, au) {
				e.saveAnnotation(at, au);
				d.updateAnnotation(Utilities.clone(at, true))
			};
		var W = function(at, au) {
				e.deleteAnnotation(at, au);
				d.deleteAnnotation(at)
			};
		var m = function() {
				e.loadDocument(i, function() {
					s();
					var au = e.getAllAnnotations();
					var av = e.getAllComments();
					for (var aw in au) {
						t.renderAnnotation(au[aw])
					}
					for (var aw in av) {
						t.renderComment(av[aw], false)
					}
					t.updateCommentPositions();
					d.setAnnotations(au, av);
					if (Z) {
						var at = location.search.indexOf("dr") != -1;
						setTimeout(function() {
							b(at)
						}, 4000)
					}
				})
			};
		var s = function() {
				var at = e.getKnownAuthors();
				d.setKnownAuthors(at);
				B.setKnownAuthors(at);
				t.setKnownAuthors(at)
			};
		var H = [
			[4, 180],
			[10, 180],
			[20, 120],
			[60, 300],
			[300, 60 * 60 * 12]
		];
		var ae = function() {
				var aw = new Date();
				var au = aw.getTime() - (e.lastModified || e.startTime).getTime();
				var at = 0;
				for (var ay = 0, ax = H.length; ay < ax; ay++) {
					var av = H[ay];
					at += av[1] * 1000;
					if (au < at) {
						return av[0] * 1000
					}
				}
				return null
			};
		var Z = true;
		var b = function(at) {
				if (!Z) {
					return
				}
				e.refreshDocument(i.uuid, function(aC, az, aw, au, aA, aB) {
					if (aC) {
						e.log(LogTypes.ERROR, aC);
						return
					}
					for (var ay = 0; ay < az.length; ay++) {
						t.renderAnnotation(az[ay])
					}
					for (var ay = 0; ay < aw.length; ay++) {
						t.clearAnnotation(aw[ay])
					}
					for (var ay = 0; ay < au.length; ay++) {
						var ax = au[ay];
						B.updateAuthorInfo(ax);
						d.updateAuthorInfo(ax);
						t.updateAuthor(ax)
					}
					for (var ay = 0; ay < aA.length; ay++) {
						t.renderComment(aA[ay])
					}
					for (var ay = 0; ay < aB.length; ay++) {
						t.clearCommentReply(aB[ay].id)
					}
					d.updateAnnotations(az, aw);
					d.updateComments(aA, []);
					if (!at && Z) {
						var av = ae();
						if (typeof(av) === "number") {
							setTimeout(function() {
								b()
							}, av)
						} else {
							Z = false
						}
					}
				})
			};
		var w = function() {
				$(".support-email").attr("href", "mailto:support@crocodoc.com").text("support@crocodoc.com");
				$("#Tutorial").overlay({
					expose: {
						maskId: "OverlayMask",
						color: "#000",
						loadSpeed: 200,
						opacity: 0.4
					},
					closeOnClick: true,
					api: true,
					top: 0,
					onBeforeLoad: K
				}).load()
			};
		var K = function() {
				var aA = $("#AnnotateButton"),
					aB = $("#ShareButton"),
					ax = $("#DownloadButton"),
					ay = $("#OpenSidebarButton");
				var aw = aA.offset(),
					at = aB.offset(),
					av = ax.offset(),
					az = ay.offset();
				var au = $("#LeftPane");
				$("#AnnoTut").css({
					top: aw.top,
					left: (aw.left - 290 - 8)
				});
				$("#ShareTut").css({
					top: at.top + 10,
					left: at.left - 130 - 5
				});
				$("#DownloadTut").css({
					top: av.top + ax.outerHeight() + 5,
					left: av.left - 70
				});
				$("#CollabTut").css({
					top: az.top + ay.outerHeight() + 3,
					left: az.left - 60
				});
				$("#MainTut").css({
					left: (au.outerWidth() / 2) - (470 / 2)
				});
				$("#TutQuestions").click(function(aC) {
					$(this).hide();
					$("#TutFAQ").show()
				})
			};
		var T = function(av, at, au) {};
		var aq = function(at) {};
		var h = function(au, at) {};
		ak()
	};
DocViewer.SELECT_MODE = 0;
DocViewer.STRIKEOUT_MODE = 1;
DocViewer.HIGHLIGHT_MODE = 2;
DocViewer.TEXTBOX_MODE = 3;
DocViewer.DRAW_MODE = 4;
DocViewer.ANCHOR_MODE = 5;
DocViewer.AREA_MODE = 6;
DocViewer.TEXT_COMMENT_MODE = 7;
DocViewer.NO_CURSOR = -1;
DocViewer.OPEN_HAND_CURSOR = 0;
DocViewer.CLOSED_HAND_CURSOR = 1;
DocViewer.CARET_CURSOR = 2;
DocViewer.CURRENT_HL_CURSOR = 3;
DocViewer.TEXTBOX_CURSOR = 4;
DocViewer.STRIKEOUT_CURSOR = 5;
DocViewer.HAND_POINTER = 6;
DocViewer.PENCIL_CURSOR = 7;
DocViewer.COMMENT_AREA_CURSOR = 8;
DocViewer.COMMENT_TEXT_CURSOR = 9;
DocViewer.NW_RESIZE_CURSOR = 10;
DocViewer.NE_RESIZE_CURSOR = 11;
DocViewer.COMMENT_ANCHOR_CURSOR = 12;
var DocumentManager = function(E) {
		var t = this;
		var x = function() {
				DocumentManager.PAGE_COUNT = E.pageCount;
				// if (IS_IMAGE) {
					// var I = E.fileExt == "psd" ? "png" : E.fileExt;
					// var H = E.assetsLocation + "doc." + I;
					// $("<img />").bind("load", function() {
						// $("#page0").find(".bg-img").attr("src", $(this).attr("src")).show().live("mousedown", function(J) {
							// J.preventDefault()
						// }).end().find(".page").css("visibility", "visible").end().find(".throbber-container").remove()
					// }).attr("src", H);
					// return
				// }
				for (var G = 0; G < E.pageCount; ++G) {
					c[G] = {
						status: B.NONE,
						loadTimeoutId: null
					}
				}
				if (E.status == DOCUMENT_STATUS.CONVERTING) {
					// s();
					// setTimeout(D, 5000);
					// h();
					// for (var G = 0; G < Math.min(E.pageCount, 5); G++) {
						// if (v[G + 1]) {
							// l(G)
						// }
					// }
				} else {
					// if ($.browser.msie && $.browser.version <= 8) {
						// h()
					// }
					for (var G = 0; G < Math.min(E.pageCount, 5); G++) {
						l(G)
					}
				}
				$(".page-outer").bind("appear", function(J) {
					y(this)
				});
				$(".page-outer").lazyload({
					threshold: 400,
					container: "#DocHolder"
				});
				e.scroll(function(K) {
					var J = p();
					if (J !== w) {
						w = J;
						$(t).trigger("currentPageChange", [w])
					}
				});
				$(".bg-img").live("mousedown", function(J) {
					J.preventDefault()
				})
			};
		this.setInitialZoom = function() {
			if (E.fileExt == "ppt" || E.fileExt == "pptx") {
				var H = n(true);
				var I = u();
				if (H < I) {
					j("w")
				} else {
					j("h")
				}
			} else {
				var L = n(true);
				var G = n(false);
				var K = false;
				var J;
				if (L > 1) {
					J = "1"
				} else {
					if (L > 0.5) {
						J = "w"
					} else {
						J = "w";
						K = true
					}
				}
				j(J, K)
			}
			$(".page-outer").css("visibility", "visible")
		};
		this.pageLoaded = function(H, G, I) {
			r(H, G, I)
		};
		this.pageUp = function() {
			t.goToPage(Math.max(1, w - 1))
		};
		this.pageDown = function() {
			t.goToPage(Math.min(E.pageCount, w + 1))
		};
		this.goToPage = function(I) {
			var H = $("#page" + (I - 1)).find(".page");
			var G = H.closest(".page-outer");
			f(H, a - (parseInt(G.css("margin-bottom")) / 2))
		};
		this.scrollTo = function(H, J, I) {
			var G = (I ? 0 : e.scrollTop()) - a;
			e.scrollTop(J + G);
			if (H !== w) {
				w = H;
				$(t).trigger("currentPageChange", [w])
			}
		};
		this.setZoom = function(G) {
			j(G)
		};
		this.zoomIn = function() {
			var J = DocumentManager.SCALE;
			var L = n(true);
			var H = u();
			var K;
			var G = J;
			for (var I = 0; I < DocumentManager.ZOOMLEVELS.length; ++I) {
				if (DocumentManager.ZOOMLEVELS[I] > J) {
					if ($.browser.msie && J == Math.floor(DocumentManager.ZOOMLEVELS[I] * 10) / 10) {
						continue
					}
					K = DocumentManager.ZOOMLEVELS[I];
					G = K;
					break
				}
			}
			if (A != "fill" && J < L && L < K) {
				K = L;
				G = "w"
			}
			if (A != "fit" && J < H && H < K) {
				K = H;
				G = "h"
			}
			j(G)
		};
		this.zoomOut = function() {
			var I = DocumentManager.SCALE;
			var L = n(true);
			var G = u();
			var J;
			var K = I;
			for (var H = DocumentManager.ZOOMLEVELS.length - 1; H >= 0; --H) {
				if (DocumentManager.ZOOMLEVELS[H] < I) {
					J = DocumentManager.ZOOMLEVELS[H];
					K = J;
					break
				}
			}
			if (A != "fill" && I > L && L > J) {
				J = L;
				K = "w"
			}
			if (A != "fit" && I > G && G > J) {
				J = G;
				K = "h"
			}
			j(K)
		};
		this.resize = function() {
			if (A == "fit") {
				j("h")
			} else {
				if (A == "fill") {
					j("w")
				}
			}
		};
		this.resizeForCommentPanel = function() {
			var H = n(true);
			if (A == "fill" || H < DocumentManager.SCALE) {
				var G = H < 0.75 ? 0.75 : "w";
				j(G)
			}
		};
		var k = 5000;
		var A;
		var B = {
			NONE: 0,
			LOADING: 1,
			LOADED: 2,
			ERROR: 3
		};
		var c = [];
		var F = {};
		var d = $("#Doc"),
			e = $("#DocHolder");
		var b = [];
		var a = parseFloat(d.css("marginTop").replace("px", ""));
		var q = $("#page0").outerHeight() + 0 + a;
		var w = 1;
		var v = {
			1: 1
		},
			g = 0;
		var s = function() {
				for (var G in E.pageInfo) {
					var H = E.pageInfo[G];
					if (H && !H.dummy) {
						v[Number(G)] = 1;
						g++
					}
				}
				o(g, E.pageCount);
				$(".inc-status").show()
			};
		var o = function(H, G) {
				$(".inc-status").find(".numerator").text(H).end().find(".denomenator").text(G).end().find(".prog").css("width", (H / G * 100) + "%")
			};
		var z = 3000;
		var D = function() {
				var G = [];
				for (var H in v) {
					if (v[H] != 2) {
						v[H] = 2;
						G.push(H)
					}
				}
				$.ajax({
					type: "GET",
					url: "/webservice/document/status",
					data: "task_id=" + E.task_id + "&shortId=" + E.shortId + "&pad=false&known=" + JSON.stringify(G) + "&withdoc=true",
					cache: false,
					success: function(L) {
						L = JSON.parse(L);
						if (L == null) {} else {
							var I = L.document.status;
							if (I == DOCUMENT_STATUS.ERROR) {} else {
								if (I == DOCUMENT_STATUS.CONVERTING) {
									setTimeout(D, z)
								} else {
									if (I == DOCUMENT_STATUS.AVAILABLE) {
										$(".inc-status .msg").text("Complete");
										setTimeout(function() {
											$(".inc-status").fadeOut()
										}, 1000)
									}
								}
							}
							var M = L.document.pageInfo;
							var J = E.pageInfo;
							for (var K in M) {
								J[K] = M[K];
								K = Number(K);
								if (v[K] != 2) {
									v[K] = 1;
									g++
								}
							}
							o(g, E.pageCount);
							m();
							E.embeddedFontInfo = L.document.embeddedFontInfo;
							h()
						}
					},
					error: function(I, K, J) {}
				})
			};
		var h = function() {
				var G = [];
				for (var H = 0; H < E.embeddedFontInfo.length; ++H) {
					if ($.inArray(E.embeddedFontInfo[H], b) == -1) {
						b.push(E.embeddedFontInfo[H]);
						G.push(E.embeddedFontInfo[H])
					}
				}
				i(G)
			};
		var i = function(L) {
				var H = [];
				for (var J = 0; J < L.length; J++) {
					var K = L[J];
					var N = $("#FontPreloader").find(".f" + K).get(0);
					if (!N) {
						N = $('<span class="f' + K + '">&nbsp;</span>').get(0);
						$("#FontPreloader").append(N)
					}
					if ($.browser.msie && $.browser.version <= 8) {
						var I = $(N).css("font-family").replace(/['"]/g, "");
						if (!I || I[0] != "f") {
							H.push(K)
						}
					}
				}
				if ($.browser.msie && $.browser.version <= 8 && H.length > 0) {
					var G = "";
					for (var J = 0; J < H.length; J++) {
						var K = H[J];
						var M = E.assetsLocation + "fonts/" + K + ".eot";
						G += ".f" + K + " { font-family: 'f" + K + "', sans-serif; } ";
						G += "@font-face { font-family: 'f" + K + "'; src: url('" + M + "'); } "
					}
					if (document.styleSheets.length < 31) {
						var O = document.createElement("style");
						O.setAttribute("type", "text/css");
						$("head").append(O);
						O.styleSheet.cssText = G
					} else {}
				}
			};
		var m = function() {
				var H = [];
				for (var I in F) {
					if (!E.pageInfo[I].dummy) {
						H.push(I)
					} else {}
				}
				for (var G = 0; G < H.length; ++G) {
					var I = H[G];
					delete F[I];
					l(I - 1)
				}
			};
		var y = function(H) {
				var G = $(H).attr("pagenum");
				l(G)
			};
		var l = function(L) {
				L = parseInt(L);
				var M = L + 1;
				var K = c[L];
				if (K.status !== B.NONE) {
					return
				}
				if (E.pageInfo[M].dummy) {
					F[M] = 1;
					return
				}
				$("#page" + L).css({
					width: E.pageInfo[M].width,//+ "em",
					height: E.pageInfo[M].height//+ "em"
				});
				$(".page-outer").lazyload("refresh", {
					page: L
				});
				var H = 3 - L.toString().length;
				var G = H == 2 ? "00" : H == 1 ? "0" : "";
				var J = E.assetsLocation + "images/page-" + G + L + ".png";
				$("<img />").bind("load", function() {
					var N = $(this).attr("src");
					if (c[L].status == B.LOADED) {
						$("#page" + L + " .bg-img").attr("src", N)
					} else {
						c[L].imgSrc = N
					}
				}).attr("src", J);
				var I = document.createElement("script");
				//I.src = E.assetsLocation + "doc." + L + ".js";
				I.text = "doc_" + L + "_js();";
				I.id = "jsonp_page" + L;
				I.type = "text/javascript";
				K.status = B.LOADING;
				K.loadTimeoutID = setTimeout(function() {
					C(L)
				}, k);
				K.scriptElem = I;
				$("head").get(0).appendChild(I)
			};
		var r = function(J, H, L) {
				var K = c[H];
				delete K.scriptElem;
				K.status = B.LOADED;
				clearTimeout(K.loadTimeoutID);
				var I = $("#page" + H);
				I.find(".throbber-container").remove();
				I.find(".page").replaceWith(L);
				I.find(".page")[0].style.visibility = "visible";
				if (c[H].imgSrc) {
					I.find(".bg-img").attr("src", c[H].imgSrc)
				}
				var G = I.find(".layer.highlight");
				G.insertBefore(I.find(".layer.text"))
			};
		var C = function(H) {
				var G = c[H];
				if (G.status !== B.LOADED) {
					G.status = B.ERROR
				}
			};
		var f = function(G, J) {
				var I = G.parents(".page-outer");
				var H = parseInt(I.attr("pagenum")) + 1;
				var K = -e.offset().top + G.offset().top + J;
				t.scrollTo(H, K)
			};
		var p = function() {
				var G = (e.scrollTop() + (e.height() / 2)) / Math.max($("#Doc").height(), e.height());
				return Math.floor(G * E.pageCount) + 1
			};
		var j = function(K, J) {
				var I;
				if (K == "w") {
					var H = J && true;
					I = n(!J);
					A = "fill"
				} else {
					if (K == "h") {
						I = u();
						A = "fit"
					} else {
						I = parseFloat(K);
						A = "scale"
					}
				}
				if ($.browser.msie && $.browser.version <= 8) {
					I = Math.floor(I * 10) / 10
				}
				DocumentManager.SCALE = I;
				DocumentManager.DRAWSCALE = DocumentManager.SCALE * DocumentManager.PIXPNTRATIO;
				if (K == "h") {
					$("#Doc").css("font-size", I * 10 + "px");
					t.goToPage(w)
				} else {
					var G = $("#DocHolder").scrollTop() / $("#Doc").height();
					$("#Doc").css("font-size", I * 10 + "px");
					$("#DocHolder").scrollTop($("#Doc").height() * G)
				}
				$(".page-outer").lazyload("refresh");
				$(t).trigger("setZoomLevel", [K])
			};
		var n = function(N) {
				var J = $("#Doc");
				var L = $("#page" + (p() - 1)).find(".page");
				var P = L.outerWidth(true);
				var G = J.width();
				var K = $(".comment-pane").is(":visible") && N ? $(".comment-pane").outerWidth(true) : 0;
				var M = ((G - K) / (P)) * DocumentManager.SCALE;
				var O = J.height();
				var Q = M * O;
				var R = $("#DocHolder").height();
				var H = O > R;
				var I = Q > R;
				if (M < 1) {
					if (H && !I) {
						G += $.scrollbarWidth();
						M = ((G - K) / (P)) * DocumentManager.SCALE
					}
				} else {
					if (!H && I) {
						G -= $.scrollbarWidth();
						M = ((G - K) / (P)) * DocumentManager.SCALE
					}
				}
				return M
			};
		var u = function() {
				var G = $("#page" + (p() - 1));
				var I = G.outerHeight(true);
				var J = $("#DocHolder").outerHeight();
				var H = (J / I) * DocumentManager.SCALE;
				return Math.max(H, 0.25)
			};
		x()
	};
DocumentManager.jDocHolder = $("#DocHolder");
DocumentManager.PAGE_COUNT = -1;
DocumentManager.getCurrentPage = function() {
	var a = (DocumentManager.jDocHolder.scrollTop() + (DocumentManager.jDocHolder.height() / 2)) / Math.max($("#Doc").height(), DocumentManager.jDocHolder.height());
	return Math.floor(a * DocumentManager.PAGE_COUNT) + 1
};
DocumentManager.ZOOMLEVELS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
DocumentManager.SCALE = 1;
DocumentManager.PIXPNTRATIO = 1.527777;
DocumentManager.DRAWSCALE = DocumentManager.SCALE * DocumentManager.PIXPNTRATIO;
var DOCUMENT_STATUS = {
	QUEUED: 1,
	CONVERTING: 2,
	AVAILABLE: 3,
	ERROR: 4
};
var HighlightUtilities = {
	getRectanglesFromSelection: function(s) {
		try {
			var h = [];
			var k, j;
			HighlightUtilities.classifyHighlightedNodes(s);
			var b = HighlightUtilities.groupLines();
			var c = $(b[0]).closest(".page-outer").offset();
			if (c == null) {
				return
			}
			for (var n = 0; n < b.length; ++n) {
				var l = b[n];
				var g = HighlightUtilities.getActualSize(l);
				var d = HighlightUtilities.getLayerOffset(l, c);
				var p = false;
				var m = $(".text.layer").get(0);
				if (m) {
					if ($(m).css("-moz-transform") && $(m).css("-moz-transform") != "none") {
						p = true
					} else {
						if ($(m).css("-webkit-transform")) {
							p = true
						} else {
							if ($(m).css("transform")) {
								p = true
							} else {
								if ($(m).css("zoom") && $(m).css("zoom") != "normal") {
									p = true
								}
							}
						}
					}
				}
				var q = p ? 10 : 1;
				var r = (p && $.browser.mozilla) ? 10 : 1;
				h.push({
					x: d.left / (DocumentManager.DRAWSCALE * r),
					y: d.top / (DocumentManager.DRAWSCALE * r),
					width: g.width / (DocumentManager.DRAWSCALE * q),
					height: g.height / (DocumentManager.DRAWSCALE * q)
				})
			}
			k = h[0].x, j = h[0].y;
			for (var n = 1; n < h.length; ++n) {
				if (h[n].x < k) {
					k = h[n].x
				}
				if (h[n].y < j) {
					j = h[n].y
				}
			}
			return {
				rectangles: h,
				x: k,
				y: j
			}
		} finally {
			$(".hl").removeClass("hl");
			if ($.browser.msie) {
				var e = $("font");
				var o = e.length;
				for (var n = 0, f; f = e[n++];) {
					if (f.style && f.style.backgroundColor) {
						var a = f.style.backgroundColor;
						if (a == "#000001" || a == "rgb(0, 0, 1)") {
							$(f).css({
								"background-color": "transparent"
							})
						}
					}
				}
			}
		}
	},
	getLayerOffset: function(c, b) {
		var a = $(c).offset();
		var e = a.left - b.left;
		var d = a.top - b.top;
		return {
			top: d,
			left: e
		}
	},
	getRangeStartPage: function(a) {
		if ($.browser.msie) {
			return $(a.parentElement()).closest(".page-outer")
		} else {
			return $(a.startContainer).closest(".page-outer")
		}
	},
	getHLRangeContent: function(a) {
		if ($.browser.msie) {
			return Utilities.trima(a.text)
		} else {
			return Utilities.trima(Utilities.replaceNL(a.toString(), " "))
		}
	},
	classifyHighlightedNodes: function(c) {
		if ($.browser.msie) {
			document.selection.empty();
			c.select();
			document.execCommand("backcolor", false, "#000001");
			var k = $("font");
			var h = k.length;
			var j = [];
			for (var e = 0, l; l = k[e++];) {
				if (l.style && l.style.backgroundColor) {
					var o = l.style.backgroundColor;
					if (o == "#000001" || o == "rgb(0, 0, 1)") {
						var g = HighlightUtilities.getTextNodesBelow(l);
						j = j.concat(g)
					}
				}
			}
			for (var e = 0; e < j.length; ++e) {
				HighlightUtilities.wrapNode(j[e])
			}
			document.selection.empty()
		} else {
			if (c.collapsed) {
				return null
			}
			var n = c.startContainer;
			var f = c.endContainer;
			var b = c.startOffset;
			var a = c.endOffset;
			var m = false,
				d = false;
			if (a > 0 && a < f.nodeValue.length && f.nodeType == 3) {
				f.splitText(a);
				d = true
			}
			if (b > 0 && b < n.nodeValue.length && n.nodeType == 3) {
				n = n.splitText(b);
				if (f == n.previousSibling) {
					f = n
				}
				m = true
			}
			console.log(3)
			var j = HighlightUtilities.getTextNodesBetween($(n).closest(".layer.text")[0], n, f);
			$.each(j, function(p, i) {
				HighlightUtilities.wrapNode(i)
			});
			window.getSelection().removeAllRanges()
		}
	},
	clearSelection: function() {
		if ($.browser.msie) {
			document.selection.empty()
		} else {
			window.getSelection().removeAllRanges()
		}
	},
	groupLines: function() {
		var b = $(),
			a = [];
		b = $().add($(".hl")).add($(".hl").parent());
		b = b.filter(function() {
			var d = true;
			var e = $(this).children();
			if (e.filter(".hl").size() > 0) {
				d = e.filter(function() {
					return $(this).hasClass("hl") && Utilities.trima($(this).text()) != ""
				}).size() > 0
			}
			var f = true;
			var c = this;
			$.each($(c).textNodes(), function() {
				if ($(this).parent() != c && !$(this).parent().hasClass("hl")) {
					f = false;
					return false
				}
			});
			return d && f
		});
		$.each(b, function() {
			var d = true;
			for (var c = 0; c < b.length; c++) {
				if ($(this).parent()[0] == b[c]) {
					d = false;
					break
				}
			}
			if (d) {
				a.push(this)
			}
		});
		return a
	},
	getActualSize: function(b) {
		var e = $(b).height();
		var d = $(b).width();
		var c = 0;
		var a = 0;
		$.each($(b).find("*"), function() {
			if ($(this).get(0).tagName.toLowerCase().indexOf("wbr") == -1) {
				var f = $(this).height();
				var g = $(this).width();
				c = Math.max(c, f);
				a = Math.max(a, g)
			}
		});
		return {
			height: Math.max(e, c),
			width: Math.max(d, a)
		}
	},
	wrapNode: function(b) {
		var a = $('<span class="hl"></span>').append($(b).clone());
		$(b).replaceWith(a)
	},
	isThereASelection: function() {
		if ($.browser.msie) {
			var b = null;
			if (document.selection.type == "Text") {
				b = document.selection.createRange();
				if (b.text == "") {
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
			console.log(1)
			var a = window.getSelection();
			if (!a || a.rangeCount == 0) {
				return false
			}
			var b = a.getRangeAt(0);
			if (b == null || (b.toString()) == "" || b.collapsed) {
				return false
			}
			console.log(4)

			if ($(b.startContainer).closest(".layer.text").length == 0 || $(b.endContainer).closest(".layer.text").length == 0) {
				return false
			}
			return true
		}
	},
	getSelectionRange: function() {
		var a = null;
		if (HighlightUtilities.isThereASelection()) {
			if ($.browser.msie) {
				a = document.selection.createRange()
			} else {
				a = window.getSelection().getRangeAt(0)
			}
		}
		return a
	},
	collectTextNodes: function(d, c) {
		var b = [];

		function a(h, g) {
			if (h.nodeType == 3) {
				if (!g || g(h)) {
					b.push(h)
				}
			} else {
				for (var f = 0, e = h.childNodes.length; f < e; ++f) {
					a(h.childNodes[f], g)
				}
			}
		}
		a(d, c);
		return b
	},
	getTextNodesBelow: function(a) {
		var c = [];

		function b(e) {
			if (e.nodeType == 3) {
				c.push(e)
			} else {
				for (var d = 0; d < e.childNodes.length; ++d) {
					b(e.childNodes[d])
				}
			}
		}
		b(a);
		return c
	},
	getTextNodesBetween: function(c, e, b) {
		var f = false,
			a = false,
			g = [];

		function d(k) {
			var l = false;
			if (k == e) {
				f = true;
				if (k.nodeType == 3) {
					g.push(k);
					l = true
				}
			}
			if (k == b) {
				a = true;
				if (!l && k.nodeType == 3) {
					g.push(k)
				}
			} else {
				if (k.nodeType == 3) {
					if (f && !a && !l) {
						g.push(k)
					}
				} else {
					for (var j = 0, h = k.childNodes.length; !a && j < h; ++j) {
						d(k.childNodes[j])
					}
				}
			}
		}
		d(c);
		return g
	},
	trimRange: function(a) {
		if (!$.browser.msie) {
			return HighlightUtilities._trimRangeFF(a)
		} else {
			return HighlightUtilities._trimRangeIE(a)
		}
	},
	findNextNode: function(b, a) {
		if (!$.browser.msie) {
			return HighlightUtilities._findNextNodeFF(b, a)
		}
	},
	findPreviousNode: function(b, a) {
		if (!$.browser.msie) {
			return HighlightUtilities._findPreviousNodeFF(b, a)
		}
	},
	findNextTextNode: function(b, a) {
		if (!$.browser.msie) {
			return HighlightUtilities._findNextTextNodeFF(b, a)
		} else {
			return HighlightUtilities._findNextTextNodeIE(b)
		}
	},
	findPreviousTextNode: function(b, a) {
		if (!$.browser.msie) {
			return HighlightUtilities._findPreviousTextNodeFF(b, a)
		} else {
			return HighlightUtilities._findPreviousTextNodeIE(b)
		}
	},
	_trimRangeIE: function(a) {
		var b = Utilities.trima(a.text);
		a.findText(b);
		return a
	},
	_findPreviousTextNodeIE: function(b) {
		if (b.nodeType == 3) {
			return b
		}
		for (var a = b.childNodes.length - 1; a >= 0; --a) {
			var c = b.childNodes[a];
			return HighlightUtilities.findPreviousTextNode(c)
		}
	},
	_findNextTextNodeIE: function(b) {
		if (b.nodeType == 3) {
			return b
		}
		for (var a = 0; a < b.childNodes.length; ++a) {
			var c = b.childNodes[a];
			return HighlightUtilities.findNextTextNode(c)
		}
	},
	_trimRangeFF: function(c) {
		var o = true;
		var g = true;
		var l = null;
		var h = null;
		if (c.startContainer.nodeType != 3) {
			o = false
		}
		if (c.endContainer.nodeType != 3) {
			g = false
		}
		if (o) {
			l = HighlightUtilities._findNextTextNodeFF(c.startContainer, true)
		}
		if (g) {
			h = HighlightUtilities._findPreviousTextNodeFF(c.endContainer, true)
		}
		var m = "";
		if (!l) {
			o = false
		}
		if (o) {
			if (l == c.startContainer) {
				m = l.textContent.substr(c.startOffset)
			} else {
				m = l.textContent
			}
			var n = Utilities.ltrima(m);
			while (n == "" && l && l != h) {
				var b = HighlightUtilities._findNextNodeFF(l, true);
				if (!b) {
					o = false;
					break
				}
				l = HighlightUtilities._findNextTextNodeFF(b, true);
				if (!l) {
					o = false;
					break
				}
				m = l.textContent;
				n = Utilities.ltrima(m)
			}
			if (o) {
				var e = m.length - n.length
			}
		}
		var j = "";
		if (!h) {
			g = false
		}
		if (g) {
			if (h == c.endContainer) {
				j = h.textContent.substr(0, c.endOffset)
			} else {
				j = h.textContent
			}
			var a = Utilities.rtrima(j);
			while (a == "" && h && h != l) {
				var b = HighlightUtilities._findPreviousNodeFF(h, false);
				if (!b) {
					g = false;
					break
				}
				h = HighlightUtilities._findPreviousTextNodeFF(b, false);
				if (!h) {
					g = false;
					break
				}
				j = h.textContent;
				a = Utilities.rtrima(j)
			}
			if (g) {
				var d = j.length - a.length
			}
		}
		var k = c.cloneRange();
		if (o) {
			var i = l == c.startContainer ? c.startOffset : 0;
			i += e;
			k.setStart(l, i)
		}
		if (g) {
			var f = h == c.endContainer ? h.length - c.endOffset : 0;
			f += d;
			k.setEnd(h, h.textContent.length - f)
		}
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(k);
		return k
	},
	_findNextTextNodeFF: function(c, a) {
		if (c.nodeType == 3) {
			return c
		}
		if (a) {
			var d = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
			d.currentNode = c;
			return d.nextNode()
		} else {
			var d = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
			d.currentNode = c;
			var b = d.lastChild();
			d.currentNode = b;
			return d.nextNode()
		}
	},
	_findPreviousTextNodeFF: function(c, a) {
		if (c.nodeType == 3) {
			return c
		}
		if (a) {
			var e = document.createTreeWalker(c, NodeFilter.SHOW_TEXT, null, false);
			var b = e.lastChild();
			if (b != null) {
				return b
			}
		}
		var d = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
		d.currentNode = c;
		return d.previousNode()
	},
	_findNextNodeFF: function(c, a) {
		if (a) {
			var d = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, null, false);
			d.currentNode = c;
			return d.nextNode()
		} else {
			var d = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, null, false);
			d.currentNode = c;
			var b = d.lastChild();
			d.currentNode = b;
			return d.nextNode()
		}
	},
	_findPreviousNodeFF: function(c, a) {
		if (a) {
			var e = document.createTreeWalker(c, NodeFilter.SHOW_ALL, null, false);
			var b = e.lastChild();
			if (b != null) {
				return b
			}
		}
		var d = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, null, false);
		d.currentNode = c;
		return d.previousNode()
	}
};
var Toolbar = function(C, q, D) {
		var ag = this;
		var U = function() {
				if (!C) {
					g.mousedown(af);
					$("#CommentDropButton").click(a);
					$("#CommentSub li").click(o);
					Z.mousedown(H);
					W.click(F);
					m.click(K);
					ab.mousedown(O);
					$("#DrawToolSettings .swatch").click(function(av) {
						v(true, this.getAttribute("value"))
					});
					$("#TextToolSettings .swatch").click(function(av) {
						j(true, this.getAttribute("value"))
					});
					$("#HighlightToolSettings .swatch").click(function(av) {
						f(true, parseInt(this.getAttribute("value")))
					});
					$("#TextSizeSel").click(d);
					$("#TextSizeSub li").click(r);
					$("#TextBGBtn").click(function(av) {
						ad(true, ($(this).hasClass("white") ? -1 : 0))
					});
					$("#AnnotateButton").click(x)
				}
				$("#DownloadButton").click(au);
				$("#DownloadSub .fancy-sub-item").click(n);
				c.find(".close").click(function(av) {
					c.dialog("close")
				});
				c.find(".authorize").click(w);
				$("#ShareButton").click(function(av) {
					$(ag).trigger("shareBtnClicked")
				});
				ac.click(B);
				al.click(k);
				ap.click(N);
				$("#ZoomSub li").click(at);
				J.click(t);
				e.click(y);
				aq.bind("mousedown", function() {
					if (!$(this).hasClass("active")) {
						$(this).addClass("active").text(V).attr("contenteditable", "true");
						Utilities.setSelection($(this)[0])
					}
				}).bind("mouseup", function() {
					$(this).focus()
				}).bind("focus", function(av) {}).bind("blur", function() {
					$(this).removeClass("active").removeAttr("contenteditable");
					var av = $(this).text();
					if (av == "") {
						ag.setCurrentPage(V)
					} else {
						if (parseInt(av) !== V) {
							av = parseInt(av);
							if (av >= 1 && av <= q) {
								ag.setCurrentPage(av);
								$(ag).trigger("goToPage", [av])
							} else {
								ag.setCurrentPage(V)
							}
						} else {
							ag.setCurrentPage(V)
						}
					}
				}).bind("keypress", function(av) {
					if (av.which == 13) {
						$(this).blur()
					} else {
						if (!Utilities.validateNumber(av)) {
							return false
						} else {
							if (av.which == 60 || av.which == 62) {
								return false
							}
						}
					}
				});
				ag.setCurrentPage(1);
				ap.val(1);
				if (D) {
					X(true, true, true)
				}
			};
		var c = $("#DownloadDialog").dialog({
			autoOpen: false,
			modal: true,
			resizable: false,
			closeOnEscape: false,
			width: 400
		});
		var Z = $("#HighlightButton"),
			W = $("#DrawButton"),
			m = $("#TextboxButton"),
			g = $("#CommentButton"),
			ab = $("#StrikeoutButton");
		var ac = $("#ZoomOutBtn"),
			al = $("#ZoomInBtn"),
			ap = $("#ZoomSel"),
			J = $("#PageUpBtn"),
			e = $("#PageDownBtn");
		var ah = $("#AnnoSettingsSection");
		var aq = $("#CurrentPage");
		var aj = $('<img width="16" height="16" src="./checkmark16.png"/>');
		var V = 1;
		this.setCurrentPage = function(av) {
			av = parseInt(av);
			setTimeout(function() {
				aq.text("Page " + (av) + "/" + q);
				J.toggleClass("disabled", av === 1).toggleClass("normal", av !== 1);
				e.toggleClass("disabled", av === q).toggleClass("normal", av !== q)
			}, 0);
			V = av
		};
		this.setAnnotateToolbarState = function(av, aw) {
			if (av === null || av == 1) {
				X(true, aw, true)
			}
		};
		this.setZoomUI = function(av) {
			Y(av)
		};
		this.initializeDrawColor = function(av) {
			G = av;
			ag.newDrawColor = P[G]
		};
		this.initializeTextboxColor = function(av) {
			R = av;
			ag.newTextColor = am[R]
		};
		this.initializeTextboxSize = function(av) {
			an = av;
			ag.newTextSize = an
		};
		this.initializeTextboxBGColor = function(av) {
			ai = av;
			ag.newTextBGColor = ai
		};
		this.initializeHighlightColor = function(av) {
			ag.newHighlightColor = av;
			f(false, ag.newHighlightColor)
		};
		this.setTextboxMode = function(aw, ax, ay, av) {
			this.setCurrentMode(Toolbar.TEXTBOX_MODE, av);
			j(false, b[aw]);
			aa(false, ax);
			ad(false, ay)
		};
		this.setDrawingMode = function(aw, av) {
			this.setCurrentMode(Toolbar.DRAWING_MODE, av);
			v(false, ae[aw])
		};
		this.setAnchorMode = function(av) {
			this.setCurrentMode(Toolbar.COMMENT_MODE, av);
			u(Toolbar.ANCHOR_COMMENT_MODE)
		};
		this.setAreaMode = function(av) {
			this.setCurrentMode(Toolbar.COMMENT_MODE, av);
			u(Toolbar.AREA_COMMENT_MODE)
		};
		this.setTextMode = function(av) {
			this.setCurrentMode(Toolbar.COMMENT_MODE, av);
			u(Toolbar.TEXT_COMMENT_MODE)
		};
		var Q = Toolbar.NONE_MODE,
			T = Toolbar.ANCHOR_COMMENT_MODE,
			ak = Q;
		this.setCurrentMode = function(aw, av) {
			av = av === true;
			if (aw === Toolbar.LAST_CURRENT_MODE) {
				aw = Q
			} else {
				if (!av) {
					Q = aw
				}
			}
			if (aw == ak) {
				return
			}
			ak = aw;
			Z.toggleClass("active", aw === Toolbar.HIGHLIGHT_MODE).toggleClass("normal", aw !== Toolbar.HIGHLIGHT_MODE);
			W.toggleClass("active", aw === Toolbar.DRAWING_MODE).toggleClass("normal", aw !== Toolbar.DRAWING_MODE);
			m.toggleClass("active", aw === Toolbar.TEXTBOX_MODE).toggleClass("normal", aw !== Toolbar.TEXTBOX_MODE);
			ab.toggleClass("active", aw === Toolbar.STRIKEOUT_MODE).toggleClass("normal", aw !== Toolbar.STRIKEOUT_MODE);
			g.toggleClass("active", aw === Toolbar.COMMENT_MODE).toggleClass("normal", aw !== Toolbar.COMMENT_MODE);
			g.parent().toggleClass("active", aw === Toolbar.COMMENT_MODE).toggleClass("normal", aw !== Toolbar.COMMENT_MODE);
			if (aw === Toolbar.COMMENT_MODE) {
				A(true);
				X(true);
				S(false);
				if (!av) {
					i = true
				}
			} else {
				if (aw === Toolbar.TEXTBOX_MODE || aw === Toolbar.DRAWING_MODE || aw === Toolbar.HIGHLIGHT_MODE) {
					L(aw === Toolbar.HIGHLIGHT_MODE);
					M(aw === Toolbar.DRAWING_MODE);
					E(aw === Toolbar.TEXTBOX_MODE);
					X(true);
					S(true);
					if (!av) {
						i = true
					}
				} else {
					S(false);
					X(i)
				}
			}
		};
		this.startExport = function() {
			p("DLWait")
		};
		this.exportComplete = function(az, ax, ay, aw) {
			var av = "DLError";
			switch (az) {
			case 0:
				av = "DLSuccess";
				break;
			case 2:
				av = aw ? "DLAuthorize" : "DLError";
				break
			}
			p(av, ax, ay, aw)
		};
		var S = function(av) {
				if (av) {
					if ($.browser.msie) {
						ah.show().find(".subnav").removeClass("visible").hide()
					} else {
						ah.show("slide", {
							direction: "left"
						}, 200).find(".subnav").removeClass("visible").hide()
					}
				} else {
					if (ah.is(":visible")) {
						if ($.browser.msie) {
							ah.hide().find(".subnav").removeClass("visible").hide()
						} else {
							ah.hide("slide", {
								direction: "left"
							}, 200).find(".subnav").removeClass("visible").hide()
						}
					}
				}
			};
		this.newHighlightColor = null;
		var L = function(av) {
				if (av) {
					f(false, ag.newHighlightColor);
					$("#HighlightToolSettings").show()
				} else {
					$("#HighlightToolSettings").hide()
				}
			};
		var ae = {
			0: 0,
			14352384: 1,
			2511082: 2,
			56136: 3
		};
		var P = [0, 14352384, 2511082, 56136];
		var G;
		this.newDrawColor = null;
		var M = function(av) {
				if (av) {
					v(false, ae[ag.newDrawColor]);
					$("#DrawToolSettings").show()
				} else {
					$("#DrawToolSettings").hide()
				}
			};
		var b = {
			0: 0,
			16711698: 1,
			2511082: 2,
			56136: 3
		};
		var am = [0, 16711698, 2511082, 56136];
		var R, an, ai;
		this.newTextColor = null, this.newTextSize = null, this.newTextBGColor = null;
		var E = function(av) {
				if (av) {
					j(false, b[ag.newTextColor]);
					aa(false, ag.newTextSize);
					ad(false, ag.newTextBGColor);
					$("#TextToolSettings").show()
				} else {
					$("#TextToolSettings").hide()
				}
			};
		var A = function(av) {
				u(T)
			};
		var u = function(aw) {
				var av = "split-left active";
				av += (aw == Toolbar.ANCHOR_COMMENT_MODE ? " point" : aw == Toolbar.AREA_COMMENT_MODE ? " area" : " text");
				$("#CommentButton").attr("class", av)
			};
		var i = false;
		var x = function(aw) {
				if (MOBILE) {
					alert("Mobile support coming soon!");
					return
				}
				var av = $("#AnnotateButton");
				if (!av.hasClass("disabled")) {
					i = !i;
					if (!i) {
						$(ag).trigger("anyModeDeactivated");
						ag.setCurrentMode(Toolbar.NONE_MODE)
					}
					X(i)
				}
			};
		var s = false;
		var X = function(ax, aw, av) {
				if (ax == s) {
					return
				}
				var az = $("#AnnotateButton");
				var ay = $("#AnnotationToolbar");
				if (ax) {
					if (av || $.browser.msie) {
						ay.addClass("visible").show()
					} else {
						ay.addClass("visible").show("slide", {
							direction: "up"
						}, 200)
					}
					az.addClass("active").removeClass("normal");
					if (aw) {
						i = true
					}
				} else {
					if (av || $.browser.msie) {
						ay.hide().removeClass("visible")
					} else {
						ay.hide("slide", {
							direction: "up"
						}, 200).removeClass("visible")
					}
					az.removeClass("active").addClass("normal")
				}
				s = ax;
				$(ag).trigger("annotateToolbarVisibilityChange", [ax ? 1 : 0])
			};
		var H = function() {
				if (Z.hasClass("active")) {
					Z.removeClass("active");
					ag.setCurrentMode(Toolbar.NONE_MODE);
					$(ag).trigger("highlightModeDeactivated")
				} else {
					var av = ar(false);
					if (!av) {
						Z.addClass("active");
						ag.setCurrentMode(Toolbar.HIGHLIGHT_MODE);
						$(ag).trigger("highlightModeActivated")
					}
				}
			};
		var O = function() {
				if (ab.hasClass("active")) {
					ab.removeClass("active");
					ag.setCurrentMode(Toolbar.NONE_MODE);
					$(ag).trigger("strikeoutModeDeactivated")
				} else {
					var av = ar(false, true);
					if (!av) {
						ab.addClass("active");
						ag.setCurrentMode(Toolbar.STRIKEOUT_MODE);
						$(ag).trigger("strikeoutModeActivated")
					}
				}
			};
		var F = function(av) {
				W.toggleClass("active");
				if (W.hasClass("active")) {
					ag.setCurrentMode(Toolbar.DRAWING_MODE);
					$(ag).trigger("drawingModeActivated")
				} else {
					ag.setCurrentMode(Toolbar.NONE_MODE);
					$(ag).trigger("drawingModeDeactivated")
				}
			};
		var K = function(av) {
				m.toggleClass("active");
				if (m.hasClass("active")) {
					ag.setCurrentMode(Toolbar.TEXTBOX_MODE);
					$(ag).trigger("textboxModeActivated")
				} else {
					ag.setCurrentMode(Toolbar.NONE_MODE);
					$(ag).trigger("textboxModeDeactivated")
				}
			};
		var af = function(av) {
				$("#CommentSub").removeClass("visible").hide();
				if (g.hasClass("active")) {
					g.removeClass("active");
					ag.setCurrentMode(Toolbar.NONE_MODE);
					$(ag).trigger("commentModeDeactivated", [T])
				} else {
					if (T == Toolbar.TEXT_COMMENT_MODE) {
						var aw = ar(true);
						if (aw) {
							return
						}
					}
					g.addClass("active");
					ag.setCurrentMode(Toolbar.COMMENT_MODE);
					$(ag).trigger("commentModeActivated", [T])
				}
			};
		var a = function(az) {
				var ax = $("#CommentSub");
				var aw = g.parent();
				if (ax.hasClass("visible")) {
					if (Q !== Toolbar.COMMENT_MODE) {
						aw.removeClass("active")
					}
					ax.removeClass("visible").hide()
				} else {
					if (Q !== Toolbar.COMMENT_MODE) {
						aw.addClass("active")
					}
					var av = aw.offset();
					var ay = $("#AnnotationToolbar").offset();
					var aA = aw.outerHeight();
					ax.css({
						left: (av.left - ay.left) + "px",
						top: (av.top - ay.top) + aA + "px"
					});
					ax.addClass("visible").show();
					$(document).one("click", function() {
						ax.removeClass("visible").hide()
					})
				}
				return false
			};
		var o = function(aw) {
				$("#CommentSub").removeClass("visible").hide();
				var av = parseInt($(this).attr("val"));
				T = av;
				if (Q !== Toolbar.COMMENT_MODE) {
					ag.setCurrentMode(Toolbar.COMMENT_MODE);
					$(ag).trigger("commentModeActivated", [T])
				} else {
					u(T);
					$(ag).trigger("commentModeChanged", [T])
				}
			};
		var h = 1;
		var B = function() {
				$(ag).trigger("zoomOut")
			};
		var k = function() {
				$(ag).trigger("zoomIn")
			};
		var N = function() {
				var aw = $("#ZoomSub");
				if (aw.hasClass("visible")) {
					aw.removeClass("visible").hide()
				} else {
					var av = $("#ZoomSel").offset();
					var ax = $("#ViewerToolbar").offset();
					var ay = $("#ZoomSel").outerHeight();
					aw.css({
						left: (av.left) + "px",
						top: (av.top - ax.top) + ay + "px"
					});
					aw.addClass("visible").show();
					$(document).one("click", function() {
						aw.removeClass("visible").hide()
					})
				}
				return false
			};
		var at = function(av) {
				$("#ZoomSub").removeClass("visible").hide();
				z($(this).find("span").attr("value"))
			};
		var z = function(av) {
				$(ag).trigger("setZoom", [av])
			};
		var Y = function(aw) {
				$("#ZoomSel").attr("value", aw);
				var av = $('#ZoomSub li span[value="' + $("#ZoomSel").attr("value") + '"]').text();
				$("#ZoomSel .zoomtext").text(av)
			};
		var j = function(av, aw) {
				aw = parseInt(aw);
				$('#TextToolSettings .swatch[value="' + aw + '"]').append(aj);
				if (av) {
					R = aw;
					ag.newTextColor = am[R];
					$(ag).trigger("setTextColor", [{
						index: aw,
						hex: ag.newTextColor
					}])
				}
			};
		var d = function(ay) {
				$(this).blur();
				var aw = $("#TextSizeSub");
				if (aw.hasClass("visible")) {
					aw.removeClass("visible").hide()
				} else {
					var av = $(this).offset();
					var ax = $("#AnnotationToolbar").offset();
					var az = $(this).outerHeight();
					aw.css({
						left: (av.left - ax.left) + "px",
						top: (av.top - ax.top) + az + "px"
					});
					aw.addClass("visible").show()
				}
			};
		var r = function(aw) {
				var av = $(aw.target);
				av = av.is("span") ? av : av.find("span");
				$("#TextSizeSub").removeClass("visible").hide();
				aa(true, av.attr("value"))
			};
		var aa = function(aw, av) {
				av = parseInt(av);
				$("#TextSizeSel").attr("value", av);
				var ax = $('#TextSizeSub li span[value="' + av + '"]').text();
				$("#TextSizeSel").text(ax);
				if (aw) {
					an = av;
					ag.newTextSize = an;
					$(ag).trigger("setTextSize", [ag.newTextSize])
				}
			};
		var ad = function(aw, av) {
				av = parseInt(av);
				$("#TextBGBtn").toggleClass("white", av !== -1);
				if (aw) {
					ai = av;
					ag.newTextBGColor = ai;
					$(ag).trigger("setTextBGColor", [ag.newTextBGColor])
				}
			};
		var v = function(aw, av) {
				av = parseInt(av);
				$('#DrawToolSettings .swatch[value="' + av + '"]').append(aj);
				if (aw) {
					G = av;
					ag.newDrawColor = P[G];
					$(ag).trigger("setDrawColor", [{
						index: av,
						hex: ag.newDrawColor
					}])
				}
			};
		var l = "yellow";
		var f = function(av, aw) {
				$('#HighlightToolSettings .swatch[value="0x' + aw.toString(16).toUpperCase() + '"]').append(aj);
				var ax = Highlight.colorLookup[aw].colorClass;
				Z.removeClass(l).addClass(ax);
				l = ax;
				if (av) {
					ag.newHighlightColor = aw;
					$(ag).trigger("setHighlightColor", [ag.newHighlightColor])
				}
			};
		var ar = function(ax, aw) {
				var ay = HighlightUtilities.getSelectionRange();
				if (ay) {
					var av = aw ? "strikeoutRequested" : "highlightRequested";
					$(ag).trigger(av, [ay, ax]);
					return true
				} else {
					return false
				}
			};
		var t = function() {
				$(ag).trigger("pageUp")
			};
		var y = function() {
				$(ag).trigger("pageDown")
			};
		var au = function(aA) {
				if (EMBEDDED) {
					$(ag).trigger("exportRequested", [2])
				} else {
					var ax = $(this);
					ax.blur();
					var ay = $("#DownloadSub");
					if (ay.hasClass("visible")) {
						ay.removeClass("visible").hide();
						ax.removeClass("open")
					} else {
						var av = ax.offset();
						var az = $("#ViewerToolbar").offset();
						var aC = ax.outerHeight(),
							aw = ax.outerWidth();
						var aB = ay.outerWidth();
						ay.css({
							left: (av.left - az.left + aw + 8 - aB) + "px",
							top: (av.top - az.top + aC - 1) + "px"
						});
						ax.addClass("open");
						setTimeout(function() {
							ay.addClass("visible").show();
							$(document).one("click", function() {
								ay.removeClass("visible").hide();
								ax.removeClass("open")
							})
						}, 0)
					}
				}
			};
		var n = function(aw) {
				$("#DownloadButton").removeClass("open");
				$("#DownloadSub").removeClass("visible").hide();
				var av = parseInt($(this).attr("value"));
				if (av !== 0) {
					p("DLWait")
				}
				$(ag).trigger("exportRequested", [av])
			};
		var I = null;
		var p = function(av, ax, ay, aw) {
				if (av == "DLSuccess") {
					if (ax !== 2) {
						c.dialog("close");
						return
					} else {
						$("#DLSuccess a").attr("href", ay)
					}
				} else {
					if (av == "DLAuthorize") {
						I = aw
					}
				}
				c.find(".view").hide();
				$("#" + av).show();
				c.dialog("open")
			};
		var w = function(av) {
				window.open(I, "Google Authentication");
				setTimeout(ao, 100)
			};
		var ao = function() {
				var av = window.location.hash;
				if (av == "#authorized") {
					window.location.hash = "";
					$(ag).trigger("exportRequested", [2])
				} else {
					if (av == "#failed") {
						window.location.hash = "";
						c.dialog("close")
					} else {
						setTimeout(ao, 100)
					}
				}
			};
		U()
	};
Toolbar.NONE_MODE = 0;
Toolbar.LAST_CURRENT_MODE = 1;
Toolbar.HIGHLIGHT_MODE = 2;
Toolbar.TEXTBOX_MODE = 3;
Toolbar.DRAWING_MODE = 4;
Toolbar.STRIKEOUT_MODE = 5;
Toolbar.COMMENT_MODE = 6;
Toolbar.ANCHOR_COMMENT_MODE = 10;
Toolbar.AREA_COMMENT_MODE = 11;
Toolbar.TEXT_COMMENT_MODE = 12;
var Anchor = function(B, f, J, u, s, i, w) {
		var z = this;
		if (arguments.length === 7) {
			this.id = B != null ? B : Utilities.generateUUID();
			this.canvas = f;
			this.pageNumber = J;
			this.x = u;
			this.y = s;
			this.author = i;
			this.comment = null;
			this.isReadOnly = w
		} else {
			this.id = Utilities.generateUUID();
			this.canvas = null;
			this.pageNumber = -1;
			this.x = -1;
			this.y = -1;
			this.author = null;
			this.comment = null;
			this.isReadOnly = false
		}
		this.type = AnnoTypes.ANCHOR;
		var G = function() {
				p = z.canvas.set();
				q = z.canvas.path();
				j = z.canvas.path();
				A = z.canvas.path();
				j.insertBefore(q);
				A.insertBefore(j);
				p.push(q, j, A);
				z.x = Math.round(z.x);
				z.y = Math.round(z.y);
				e = z.x * DocumentManager.DRAWSCALE;
				c = z.y * DocumentManager.DRAWSCALE;
				t();
				if (!z.isReadOnly) {
					H()
				}
				C(Anchor.NORMAL)
			};
		this.focus = function(x) {
			if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation != this) {
				AnnotationManager.activeAnnotation.defocus()
			}
			if (K !== Anchor.ACTIVE) {
				C(Anchor.ACTIVE);
				AnnotationManager.activeAnnotation = this
			}
			if (x) {
				$(z).trigger("focused")
			}
		};
		this.defocus = function(x) {
			if (AnnotationManager.activeAnnotation !== this) {
				return
			}
			if (K === Anchor.ACTIVE) {
				AnnotationManager.activeAnnotation = null;
				C(Anchor.NORMAL)
			}
			if (x) {
				$(z).trigger("defocused")
			}
		};
		this.scale = function() {
			var x = DocumentManager.DRAWSCALE;
			p.scale(x, x, 0, 0);
			e = z.x * x;
			c = z.y * x;
			F(e, c)
		};
		this.destroy = function() {
			k(false);
			p.remove()
		};
		this.deleteSelf = function() {
			var x = $(q.node).closest(".layer.anno");
			x.removeClass("drag_cursor_open").removeClass("drag_cursor_closed");
			$(z).trigger("deleteRequested")
		};
		this.getAnnoLocationInfo = function() {
			return q.getBBox().y
		};
		this.show = function() {
			p.show()
		};
		this.hide = function() {
			p.hide()
		};
		this.getLinePosition = function() {
			return [z.x + b / 2, z.y - b]
		};
		this.setPosition = function(y, x) {
			z.x = Math.round(y);
			z.y = Math.round(x);
			z.scale()
		};
		this.setHover = function(x) {
			if (K != Area.ACTIVE) {
				if (x) {
					C(Anchor.HOVER)
				} else {
					C(Anchor.NORMAL)
				}
			}
		};
		var p;
		var h;
		var e, c;
		var q, j, A;
		var n = 2;
		var E = 12;
		var b = 6;
		var K;
		var m = false,
			r = false;
		var D = "#DB0000";
		var d = "#A90101";
		var t = function() {
				var x = b * DocumentManager.DRAWSCALE;
				var L = b * DocumentManager.DRAWSCALE;
				var y = (b / 2) * DocumentManager.DRAWSCALE;
				h = [
					["M", e, c],
					["l", -x / 2, -y],
					["l", 0, -L],
					["l", x, 0],
					["l", 0, L],
					["z"]
				];
				p.attr("path", h);
				q.attr({
					"stroke-width": 0,
					fill: D
				});
				j.attr({
					"stroke-width": n,
					stroke: "#ff0",
					"stroke-opacity": 0
				});
				A.attr({
					"stroke-width": E,
					stroke: "#000",
					"stroke-opacity": 0.001
				});
				Utilities.addSVGClasses(q.node, ["anchornode", "vector"]);
				Utilities.addSVGClasses(j.node, ["anchornode", "vector"]);
				Utilities.addSVGClasses(A.node, ["anchornode", "vector"]);
				$(q.node).tipsy({
					html: true,
					voffset: 2,
					hoffset: -10,
					gravity: "sw",
					title: l,
					trigger: "manual"
				})
			};
		var F = function(L, P) {
				var M = b * DocumentManager.DRAWSCALE;
				var O = b * DocumentManager.DRAWSCALE;
				var N = (b / 2) * DocumentManager.DRAWSCALE;
				h = [
					["M", L, P],
					["l", -M / 2, -N],
					["l", 0, -O],
					["l", M, 0],
					["l", 0, O],
					["z"]
				];
				p.attr("path", h)
			};
		var I = function(N, M, L, R, P) {
				if (!m) {
					$(z).trigger("dragStarted");
					if (z.comment) {
						z.comment.setLineVisibility(false)
					}
					m = true
				}
				var Q, O;
				Q = e + N;
				O = c + M;
				F(Q, O)
			};
		var v = function(y) {
				var x = q.attr("path");
				e = x[0][1];
				c = x[0][2];
				z.x = Math.round(e / DocumentManager.DRAWSCALE);
				z.y = Math.round(c / DocumentManager.DRAWSCALE);
				if (z.comment) {
					z.comment.setLineVisibility(true)
				}
				$(z).trigger("dragStopped");
				$(z).trigger("annotationUpdated")
			};
		var o = function(L, P, O) {
				if (O.button == 2 || O.metaKey === true) {
					var N = {
						annotation: z,
						x: L,
						y: P
					};
					$(z).trigger("annotationContextMenu", [N]);
					$(document).one("contextmenu", function() {
						return false
					})
				} else {
					m = false;
					r = true;
					var M = $(this.node).closest(".layer.anno");
					M.addClass("drag_cursor_close")
				}
				k(false);
				a = true;
				O.stopPropagation()
			};
		var g = function(y) {
				if (y.button == 2 || y.metaKey === true) {} else {
					r = false;
					if (m) {
						m = false;
						v(y)
					} else {
						if (K !== Anchor.ACTIVE) {
							z.focus(true)
						}
					}
				}
				setTimeout(function() {
					a = false
				}, 1000);
				var x = $(this.node).closest(".layer.anno");
				x.removeClass("drag_cursor_close");
				y.stopPropagation()
			};
		var l = function() {
				if (z.comment) {
					return z.comment.getTooltipText()
				}
				return ""
			};
		var a = false;
		var k = function(y) {
				var x = (!a && y) ? "show" : "hide";
				$(q.node).tipsy(x)
			};
		var H = function() {
				p.mouseover(function() {
					if (K == Anchor.ACTIVE) {
						k(true)
					} else {
						if (!AnnotationManager.isDragging) {
							C(Anchor.HOVER);
							k(true);
							if (z.comment) {
								z.comment.hover(true)
							}
						}
					}
					var x = $(this.node).closest(".layer.anno");
					x.addClass("drag_cursor_open")
				});
				p.mouseout(function() {
					if (K == Anchor.ACTIVE) {
						k(false)
					} else {
						C(Anchor.NORMAL);
						k(false);
						if (z.comment) {
							z.comment.hover(false)
						}
					}
					var x = $(this.node).closest(".layer.anno");
					x.removeClass("drag_cursor_open")
				});
				q.drag(I, o, g);
				j.drag(I, o, g);
				A.drag(I, o, g)
			};
		var C = function(x) {
				if (x == K) {
					return
				}
				if (r) {
					return
				}
				K = x;
				switch (x) {
				case Anchor.NORMAL:
					q.attr("fill", D);
					break;
				case Anchor.ACTIVE:
					q.attr("fill", d);
					break;
				case Anchor.HOVER:
					q.attr("fill", d);
					break
				}
			};
		G()
	};
Anchor.NORMAL = 1;
Anchor.ACTIVE = 2;
Anchor.HOVER = 3;
var Area = function(I, p, u, L, K, a, e, r, w, A) {
		var q = this;
		if (arguments.length === 10) {
			this.id = I != null ? I : Utilities.generateUUID();
			this.canvas = p;
			this.pageNumber = u;
			this.x = L;
			this.y = K;
			this.width = a;
			this.height = e;
			this.author = r;
			this.comment = null;
			this.isReadOnly = w
		} else {
			this.id = Utilities.generateUUID();
			this.canvas = null;
			this.pageNumber = -1;
			this.x = -1;
			this.y = -1;
			this.width = -1;
			this.height = -1;
			this.author = null;
			this.comment = null;
			this.isReadOnly = w
		}
		this.type = AnnoTypes.AREA;
		var T = function(ad) {
				F = q.canvas.set();
				E = q.canvas.set();
				M = q.canvas.rect();
				N = q.canvas.rect();
				S = q.canvas.rect();
				N.insertBefore(M);
				S.insertBefore(N);
				E.push(M, N, S);
				q.x = Math.round(q.x);
				q.y = Math.round(q.y);
				q.width = Math.round(q.width);
				q.height = Math.round(q.height);
				Y = q.x * DocumentManager.DRAWSCALE;
				V = q.y * DocumentManager.DRAWSCALE;
				n = q.width * DocumentManager.DRAWSCALE;
				b = q.height * DocumentManager.DRAWSCALE;
				Z();
				if (!w) {
					O()
				}
				R(Area.NORMAL);
				if (ad == true) {
					v = false;
					var y = function(ah) {
							var af = $(M.node).closest(".layer.anno").offset();
							var ag = (ah.pageX - af.left) - (Y + n);
							var ae = (ah.pageY - af.top) - (V + b);
							P(ag, ae, null, null, null);
							ah.stopPropagation();
							ah.preventDefault()
						};
					var x = function(ae) {
							if (!Q) {
								q.deleteSelf()
							} else {
								aa(ae)
							}
							$(M.node).closest(".page-outer").unbind("mousemove", y).unbind("mouseup", x)
						};
					$(M.node).closest(".page-outer").bind("mousemove", y).bind("mouseup", x);
					Q = false;
					z = true;
					o = {
						left: false,
						top: false
					}
				}
			};
		this.focus = function(x) {
			if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation != this) {
				AnnotationManager.activeAnnotation.defocus()
			}
			if (B !== Area.ACTIVE) {
				R(Area.ACTIVE, true);
				AnnotationManager.activeAnnotation = this
			}
			if (x) {
				$(q).trigger("focused")
			}
		};
		this.defocus = function(x) {
			if (AnnotationManager.activeAnnotation !== this) {
				return
			}
			if (B === Area.ACTIVE) {
				AnnotationManager.activeAnnotation = null;
				R(Area.NORMAL)
			}
			$("#ZoomSel").focus();
			if (x) {
				$(q).trigger("defocused")
			}
		};
		this.scale = function() {
			var x = DocumentManager.DRAWSCALE;
			E.scale(x, x, 0, 0);
			Y = q.x * x;
			V = q.y * x;
			n = q.width * x;
			b = q.height * x;
			i(Y, V, n, b)
		};
		this.destroy = function() {
			ab(false);
			F.remove();
			E.remove()
		};
		this.deleteSelf = function() {
			var x = $(M.node).closest(".layer.anno");
			x.removeClass("drag_cursor_open").removeClass("drag_cursor_closed");
			$(q).trigger("deleteRequested")
		};
		this.getAnnoLocationInfo = function() {
			return M.getBBox().y
		};
		this.show = function() {
			F.show();
			E.show()
		};
		this.hide = function() {
			F.hide();
			E.hide()
		};
		this.getLinePosition = function() {
			return [q.x + q.width + G, q.y + 8]
		};
		this.setPositionAndDimensions = function(ad, y, ae, x) {
			q.x = Math.round(ad);
			q.y = Math.round(y);
			q.width = Math.round(ae);
			q.height = Math.round(x);
			q.scale()
		};
		this.setHover = function(x) {
			if (B != Area.ACTIVE) {
				if (x) {
					R(Area.HOVER, false)
				} else {
					R(Area.NORMAL)
				}
			}
		};
		var E;
		var M, N, S;
		var F;
		var t, k, g, d;
		var c = 4;
		var G = 1.5;
		var ac = 4;
		var J = 6;
		var C = 1;
		var o;
		var v = null;
		var B;
		var Q = false,
			z = false;
		var Y, V, n, b;
		var D = "#DB0000";
		var H = "#A90101";
		var X = "#979797";
		var m = "#DAE9FC";
		var Z = function() {
				E.attr({
					x: Y,
					y: V,
					width: n,
					height: b
				});
				M.attr({
					stroke: D,
					"stroke-width": G * DocumentManager.DRAWSCALE
				});
				N.attr({
					stroke: "#ff0",
					"stroke-opacity": 0,
					"stroke-width": ac * DocumentManager.DRAWSCALE
				});
				S.attr({
					stroke: "#000",
					"stroke-opacity": 0.001,
					"stroke-width": J * DocumentManager.DRAWSCALE
				});
				Utilities.addSVGClasses(M.node, ["areanode", "vector"]);
				Utilities.addSVGClasses(N.node, ["areanode", "vector"]);
				Utilities.addSVGClasses(S.node, ["areanode", "vector"]);
				W();
				$(M.node).tipsy({
					html: true,
					voffset: 2,
					hoffset: -5,
					gravity: "sw",
					title: j,
					trigger: "manual"
				})
			};
		var i = function(ae, ah, af, ad) {
				var ag = c * DocumentManager.DRAWSCALE;
				E.attr({
					x: ae,
					y: ah,
					width: af,
					height: ad
				});
				t.attr({
					x: ae - ag / 2,
					y: ah - ag / 2,
					width: ag,
					height: ag
				});
				k.attr({
					x: ae + af - ag / 2,
					y: ah - ag / 2,
					width: ag,
					height: ag
				});
				g.attr({
					x: ae - ag / 2,
					y: ah + ad - ag / 2,
					width: ag,
					height: ag
				});
				d.attr({
					x: ae + af - ag / 2,
					y: ah + ad - ag / 2,
					width: ag,
					height: ag
				});
				M.attr({
					"stroke-width": G * DocumentManager.DRAWSCALE
				});
				N.attr({
					"stroke-width": ac * DocumentManager.DRAWSCALE
				});
				S.attr({
					"stroke-width": J * DocumentManager.DRAWSCALE
				});
				F.attr({
					stroke: X,
					fill: m
				})
			};
		var W = function() {
				var x = c * DocumentManager.DRAWSCALE;
				t = q.canvas.rect(Y - x / 2, V - x / 2, x, x);
				k = q.canvas.rect(Y + n - x / 2, V - x / 2, x, x);
				g = q.canvas.rect(Y - x / 2, V + b - x / 2, x, x);
				d = q.canvas.rect(Y + n - x / 2, V + b - x / 2, x, x);
				F.push(t, k, g, d);
				F.attr({
					stroke: X,
					fill: m,
					"stroke-width": C
				});
				Utilities.addSVGClasses(t.node, ["arearesizenode", "top", "left", "vector"]);
				Utilities.addSVGClasses(k.node, ["arearesizenode", "top", "right", "vector"]);
				Utilities.addSVGClasses(g.node, ["arearesizenode", "bottom", "left", "vector"]);
				Utilities.addSVGClasses(d.node, ["arearesizenode", "bottom", "right", "vector"]);
				F.hide()
			};
		var s = function(af, ae, ad, ah, ag) {
				if (!Q) {
					$(q).trigger("dragStarted");
					if (v == null) {
						v = false
					}
					if (q.comment) {
						q.comment.setLineVisibility(false)
					}
					Q = true
				}
				var ad, ah;
				ad = Y + af;
				ah = V + ae;
				i(ad, ah, n, b)
			};
		var h = function(x) {
				v = null;
				Y = M.attr("x");
				V = M.attr("y");
				q.x = Math.round(Y / DocumentManager.DRAWSCALE);
				q.y = Math.round(V / DocumentManager.DRAWSCALE);
				if (q.comment) {
					q.comment.setLineVisibility(true)
				}
				$(q).trigger("dragStopped");
				$(q).trigger("annotationUpdated")
			};
		var P = function(al, ak, ah, af, ae) {
				if (!Q) {
					$(q).trigger("dragStarted");
					if (v == null) {
						v = true
					}
					if (q.comment) {
						q.comment.setLineVisibility(false)
					}
					Q = true
				}
				var ai, ag, ad, aj;
				if (o.left) {
					ai = Y + al;
					ad = n - al
				} else {
					ai = Y;
					ad = n + al
				}
				if (o.top) {
					ag = V + ak;
					aj = b - ak
				} else {
					ag = V;
					aj = b + ak
				}
				if (ad < 0) {
					ad = -ad;
					ai -= ad
				}
				if (aj < 0) {
					aj = -aj;
					ag -= aj
				}
				i(ai, ag, ad, aj)
			};
		var f = function(x) {
				o = null;
				v = null;
				n = M.attr("width");
				b = M.attr("height");
				Y = M.attr("x");
				V = M.attr("y");
				q.x = Math.round(Y / DocumentManager.DRAWSCALE);
				q.y = Math.round(V / DocumentManager.DRAWSCALE);
				q.width = Math.round(n / DocumentManager.DRAWSCALE);
				q.height = Math.round(b / DocumentManager.DRAWSCALE);
				if (q.comment) {
					q.comment.setLineVisibility(true)
				}
				$(q).trigger("dragStopped");
				$(q).trigger("annotationUpdated")
			};
		var U = function(ad, ah, ag) {
				if (ag.button == 2 || ag.metaKey === true) {
					var af = {
						annotation: q,
						x: ad,
						y: ah
					};
					$(q).trigger("annotationContextMenu", [af]);
					$(document).one("contextmenu", function() {
						return false
					})
				} else {
					Q = false;
					z = true;
					if (Utilities.hasSVGClass(this.node, "arearesizenode")) {
						o = {
							left: Utilities.hasSVGClass(this.node, "left"),
							top: Utilities.hasSVGClass(this.node, "top")
						}
					} else {
						var ae = $(this.node).closest(".layer.anno");
						ae.addClass("drag_cursor_close")
					}
				}
				ab(false);
				l = true;
				ag.stopPropagation()
			};
		var aa = function(y) {
				if (y.button == 2 || y.metaKey === true) {} else {
					z = false;
					if (Q) {
						Q = false;
						if (o != null) {
							f(y);
							var x = $(this.node).closest(".layer.anno");
							x.removeClass("nw_resize_cursor").removeClass("ne_resize_cursor");
							q.focus(true)
						} else {
							h(y)
						}
					} else {
						if (B !== Area.ACTIVE) {
							q.focus(true)
						}
					}
				}
				setTimeout(function() {
					l = false
				}, 1000);
				var x = $(this.node).closest(".layer.anno");
				x.removeClass("drag_cursor_close");
				y.stopPropagation()
			};
		var j = function() {
				if (q.comment) {
					return q.comment.getTooltipText()
				}
				return ""
			};
		var l = false;
		var ab = function(y) {
				var x = (!l && y) ? "show" : "hide";
				$(M.node).tipsy(x)
			};
		var O = function() {
				var ad = function(ae) {
						var ah = Utilities.hasSVGClass(ae, "left");
						var ag = Utilities.hasSVGClass(ae, "top");
						var af = "nw_resize_cursor";
						if ((ah && !ag) || (!ah && ag)) {
							af = "ne_resize_cursor"
						}
						return af
					};
				var x = function(ag) {
						if (!AnnotationManager.isDragging) {
							if (B == Area.ACTIVE) {
								ab(true)
							} else {
								R(Area.HOVER, true);
								ab(true);
								if (q.comment) {
									q.comment.hover(true)
								}
							}
							var ae = $(this.node).closest(".layer.anno");
							if (Utilities.hasSVGClass(this.node, "arearesizenode")) {
								var af = ad(this.node);
								ae.addClass(af)
							} else {
								ae.addClass("drag_cursor_open")
							}
						}
					};
				var y = function() {
						if (!z) {
							if (B == Area.ACTIVE) {
								ab(false)
							} else {
								R(Area.NORMAL);
								ab(false);
								if (q.comment) {
									q.comment.hover(false)
								}
							}
							var ae = $(this.node).closest(".layer.anno");
							if (Utilities.hasSVGClass(this.node, "arearesizenode")) {
								ae.removeClass("nw_resize_cursor").removeClass("ne_resize_cursor")
							} else {
								ae.removeClass("drag_cursor_open").removeClass("drag_cursor_closed")
							}
						}
					};
				E.mouseover(x);
				E.mouseout(y);
				F.mouseover(x);
				F.mouseout(y);
				M.drag(s, U, aa);
				N.drag(s, U, aa);
				S.drag(s, U, aa);
				t.drag(P, U, aa);
				k.drag(P, U, aa);
				g.drag(P, U, aa);
				d.drag(P, U, aa)
			};
		var R = function(y, x) {
				if (y == B) {
					return
				}
				if (z) {
					return
				}
				B = y;
				switch (y) {
				case Area.NORMAL:
					M.attr("stroke", D);
					if (v != true) {
						F.hide()
					}
					break;
				case Area.ACTIVE:
					M.attr("stroke", H);
					if (x && v != false) {
						F.show()
					}
					break;
				case Area.HOVER:
					M.attr("stroke", H);
					if (x && v != false) {
						F.show()
					}
					break
				}
			};
		T(A)
	};
Area.NORMAL = 1;
Area.ACTIVE = 2;
Area.HOVER = 3;
var Comment = function(u, i, e, j, s) {
		var f = this;
		if (arguments.length === 5) {
			this.id = u != null ? u : Utilities.generateUUID();
			this.annotation = i;
			this.canvas = e;
			this.isReadOnly = j
		} else {
			this.id = Utilities.generateUUID();
			this.annotation = null;
			this.canvas = null;
			this.isReadOnly = false
		}
		var C = function() {
				c = $("#page" + (f.annotation.pageNumber - 1)).find(".comment-pane");
				a = $("#page" + (f.annotation.pageNumber - 1)).find(".layer.commentline");
				E = a.offset();
				H = f.getYPosition();
				J = f.canvas.set();
				b = f.canvas.path();
				h = f.canvas.path();
				h.insertBefore(h);
				J.push(b, h);
				Utilities.addSVGClasses(b.node, ["linenode", "vector"]);
				Utilities.addSVGClasses(h.node, ["linenode", "vector"]);
				b.attr({
					stroke: x,
					"stroke-width": t,
					"stroke-dasharray": "."
				});
				h.attr({
					stroke: "#000",
					"stroke-opacity": 0.001,
					"stroke-width": w
				});
				G();
				y();
				B(Comment.NORMAL)
			};
		this.focusReply = function(K) {
			var L = K ? K : A[A.length - 1];
			L.focus(true, true)
		};
		this.getYPosition = function() {
			var K = f.annotation.getLinePosition()[1];
			return K
		};
		this.getViewPosition = function() {
			return H
		};
		this.setViewPosition = function(K) {
			H = K;
			l()
		};
		this.getHeight = function() {
			return r.find(".commentbody").outerHeight()
		};
		this.getDOMElement = function() {
			return r
		};
		this.getNumReplies = function() {
			return A.length
		};
		this.getMaxOrderIndex = function() {
			return A.length > 0 ? A[A.length - 1].orderIndex : -1
		};
		this.deleteAllReplies = function() {
			var K = A.slice();
			$.each(K, function(L, M) {
				M.deleteSelf()
			});
			if (i) {
				i.deleteSelf()
			}
		};
		this.focus = function() {
			if (AnnotationManager.activeComment) {
				AnnotationManager.activeComment.defocus()
			}
			if (m !== Comment.ACTIVE) {
				B(Comment.ACTIVE);
				AnnotationManager.activeComment = f
			}
			$(f).trigger("commentFocused")
		};
		this.defocus = function(M) {
			if (AnnotationManager.activeComment !== this) {
				return
			}
			if (m === Comment.ACTIVE) {
				AnnotationManager.activeComment = null;
				B(Comment.NORMAL);
				for (var K = A.length - 1; K >= 0; --K) {
					var L = A[K];
					var N = L.getText();
					if (N == "") {
						L.deleteSelf()
					}
				}
				if (M) {
					$("#Dummy").focus()
				}
				$(f).trigger("commentDefocused")
			}
		};
		this.hover = function(K) {
			if (!f.isReadOnly) {
				if (m == Comment.ACTIVE) {} else {
					if (K) {
						B(Comment.HOVER)
					} else {
						B(Comment.NORMAL)
					}
					if (f.annotation && f.annotation.setHover) {
						f.annotation.setHover(K)
					}
				}
			}
		};
		this.show = function() {
			r.show();
			v();
			J.show()
		};
		this.hide = function() {
			r.hide();
			J.hide()
		};
		this.destroy = function() {
			p();
			r.remove();
			J.remove()
		};
		this.addCommentReply = function(K) {
			K.comment = f;
			var L = K.getDOMObject();
			if (A.length > 0) {
				L.addClass("sub")
			}
			L.appendTo(r.find(".commentbody")).show();
			A.push(K);
			$(K).bind({
				focused: function(M) {
					if (m !== Comment.ACTIVE) {
						f.focus()
					}
				},
				defocused: function(M) {
					if (m === Comment.ACTIVE) {
						f.defocus(false)
					}
				}
			});
			return K
		};
		this.destroyCommentReply = function(L) {
			var K = $.inArray(L, A);
			if (K != -1) {
				L.destroy();
				A.splice(K, 1);
				if (K === 0 && A.length > 0) {
					A[0].getDOMObject().removeClass("sub")
				}
			}
		};
		this.setLineVisibility = function(K) {
			K ? J.show() : J.hide()
		};
		this.getTooltipText = function() {
			var M = null,
				L = A.length,
				K;
			if (L > 0) {
				K = A[0];
				M = K.authorName + ": " + K.content
			}
			if (L > 1) {
				M += "<br>(" + (L - 1) + (L == 2 ? " reply)" : " replies)")
			}
			return M
		};
		var r;
		var m;
		var A = [];
		var H;
		var c;
		var a;
		var E;
		var J, b, h;
		var z;
		var F;
		var t = 2;
		var w = 6;
		var d = 7;
		var x = "#E5B438";
		var q = "#E5B438";
		var G = function() {
				r = $('<div class="comment normal"><div class="commentbody"></div><div class="commentmenu"></div></div>');
				var N = r.find(".commentmenu");
				var M = $('<span class="menuitem reply">Reply</span>');
				M.appendTo(N);
				var K = $('<span class="menuitem delete">Delete</span>');
				K.appendTo(N);
				var L = (H * DocumentManager.DRAWSCALE) - d;
				if (s) {
					r.addClass("owner")
				}
				r.appendTo(c).css({
					top: L
				}).show();
				F = r.position().left;
				v()
			};
		var v = function() {
				if (a.length > 0) {
					var N = f.annotation.getLinePosition();
					var K = [r.offset().left - E.left, (r.offset().top - E.top) + d];
					var M = [N[0] * DocumentManager.DRAWSCALE, N[1] * DocumentManager.DRAWSCALE];
					var O = [K[0] - 3, K[1]];
					var L = [K[0] - F + 5, M[1]];
					z = [
						["M", K[0], K[1]],
						["L", O[0], O[1]],
						["L", L[0], L[1]],
						["L", M[0], M[1]]
					];
					J.attr("path", z)
				}
			};
		var l = function() {
				var K = (H * DocumentManager.DRAWSCALE) - d;
				r.css({
					top: K
				});
				v()
			};
		var k = function(K) {
				f.hover(true)
			};
		var o = function(K) {
				f.hover(false)
			};
		var D = function(K) {
				K.stopPropagation();
				return false
			};
		var I = function(K) {
				K.stopPropagation()
			};
		var g = function(K) {
				$(f).trigger("addReplyRequested");
				K.stopPropagation();
				return false
			};
		var n = function(K) {
				if (s) {
					f.defocus();
					$(f).trigger("commentDeleteRequested")
				}
				K.stopPropagation();
				return false
			};
		var y = function() {
				r.bind("mousedown", D).bind("mouseup", I).bind("mouseenter", k).bind("mouseleave", o);
				r.find(".menuitem.reply").bind("click", g);
				r.find(".menuitem.delete").bind("click", n)
			};
		var p = function() {
				r.unbind("mousedown", D).unbind("mouseup", I).unbind("mouseenter", k).unbind("mouseleave", o);
				r.find(".menuitem.reply").unbind("click", g);
				r.find(".menuitem.delete").unbind("click", n)
			};
		var B = function(K) {
				if (K == m) {
					return
				}
				m = K;
				switch (K) {
				case Comment.NORMAL:
					r.removeClass("active").addClass("normal");
					b.attr({
						stroke: x,
						"stroke-dasharray": "."
					});
					break;
				case Comment.ACTIVE:
					r.removeClass("normal").addClass("active");
					b.attr({
						stroke: q,
						"stroke-dasharray": ""
					});
					break;
				case Comment.HOVER:
					r.removeClass("normal").addClass("active");
					b.attr({
						stroke: q,
						"stroke-dasharray": ""
					});
					break
				}
			};
		C()
	};
Comment.NORMAL = 1;
Comment.ACTIVE = 2;
Comment.HOVER = 3;
var CommentReply = function(m, n, v, p, q, i) {
		var l = this;
		var k = "anonymous",
			h = $.browser.msie ? "" : ": ";
		if (arguments.length === 6) {
			this.id = m != null ? m : Utilities.generateUUID();
			this.authorId = n;
			this.authorName = v ? v : k;
			this.content = p;
			this.orderIndex = q;
			this.comment = null;
			this.isReadOnly = i
		} else {
			this.id = Utilities.generateUUID();
			this.authorId = null;
			this.authorName = "";
			this.content = "";
			this.orderIndex = -1;
			this.comment = null;
			this.isReadOnly = true
		}
		var r = function() {
				var y = $.getMarkupText(l.content, true);
				s = $('<div class="commentreply"><span class="replyauthor">' + l.authorName + h + '</span><div class="replycontent" spellcheck="false">' + y + "&#8203;</div></div>");
				e = s.find(".replycontent");
				if (!l.isReadOnly) {
					e.attr("contentEditable", true)
				}
				u = s.outerHeight();
				t()
			};
		this.focus = function(y, z) {
			if (y) {
				o()
			}
			if (z) {
				$(l).trigger("focused")
			}
		};
		this.defocus = function(y) {
			var z = a();
			if (z == "") {
				l.deleteSelf()
			} else {
				e.removeClass("editmode");
				if (y) {
					$(l).trigger("defocused")
				}
			}
		};
		this.deleteSelf = function() {
			$(l).trigger("replyDeleteRequested")
		};
		this.destroy = function() {
			w();
			s.remove()
		};
		this.updateAuthorName = function(y) {
			y = y ? y : k;
			s.find(".replyauthor").html(y + h)
		};
		this.getDOMObject = function() {
			return s
		};
		this.getText = function() {
			return a()
		};
		this.setContent = function(y) {
			l.content = y;
			var z = $.getMarkupText(l.content, true);
			e.html(z)
		};
		var s, e, u;
		var o = function() {
				if (!l.isReadOnly) {}
				e.focus();
				e.addClass("editmode")
			};
		var b = function(y) {};
		var x = function(y) {
				$(l).trigger("focused")
			};
		var g = function(y) {
				y.stopPropagation()
			};
		var c = function(y) {
				e.focus();
				if (!l.isReadOnly) {
					l.focus(true, true)
				}
				y.stopPropagation()
			};
		var f = function(y) {
				var z = s.outerHeight();
				if (z != u) {
					u = z;
					$(l).trigger("heightChanged")
				}
				clearTimeout(d);
				d = setTimeout(j, 500)
			};
		var t = function() {
				s.bind("mousedown", g).bind("mouseup", c).bind("blur keyup paste", f);
				e.bind("keypress", Utilities.onKeyPressed).bind("blur", b)
			};
		var w = function() {
				s.unbind("mousedown", g).unbind("mouseup", c).unbind("blur keyup paste", f);
				e.unbind("blur", b).unbind("focus", x).unbind("mousedown", g).unbind("keypress", Utilities.onKeyPressed).unbind("mousedown", function(y) {
					y.stopPropagation()
				})
			};
		var a = function() {
				var y = $.trim(e.getPreText());
				return y ? y.replace(/\u200B/g, "") : y
			};
		var d;
		var j = function() {
				var y = a();
				if (l.content != y) {
					l.content = Utilities.trima(y.escapeHTML());
					$(l).trigger("commentUpdated")
				}
			};
		r()
	};
var Drawing = function(B, e, j, F, E, M, v, g, n, r) {
		var f = this;
		if (arguments.length === 10) {
			this.id = B != null ? B : Utilities.generateUUID();
			this.canvas = e;
			this.pageNumber = j;
			this.x = F;
			this.y = E;
			this.lines = M;
			this.color = v;
			this.author = g;
			this.isReadOnly = n
		} else {
			this.id = Utilities.generateUUID();
			this.canvas = null;
			this.pageNumber = -1;
			this.x = -1;
			this.y = -1;
			this.lines = "[]";
			this.color = -1;
			this.author = null;
			this.isReadOnly = false
		}
		this.type = AnnoTypes.DRAWING;
		var S = function(x) {
				ad = f.canvas.set();
				G = f.canvas.path();
				I = f.canvas.path();
				R = f.canvas.path();
				I.insertBefore(G);
				R.insertBefore(I);
				ad.push(R, I, G);
				K = $('<div class="boundingbox"></div>');
				$(G.node).closest(".layer.anno").append(K);
				f.x = Math.round(f.x);
				f.y = Math.round(f.y);
				X = f.x * DocumentManager.DRAWSCALE;
				V = f.y * DocumentManager.DRAWSCALE;
				ab();
				if (!n) {
					J()
				}
				Q(Drawing.NORMAL);
				if (x) {
					w(f.x, f.y)
				}
			};
		this.focus = function(x) {
			if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation != this) {
				AnnotationManager.activeAnnotation.defocus()
			}
			if (s !== Drawing.ACTIVE) {
				Q(Drawing.ACTIVE);
				AnnotationManager.activeAnnotation = this
			}
			if (x) {
				$(f).trigger("focused")
			}
		};
		this.defocus = function(x) {
			if (AnnotationManager.activeAnnotation !== this) {
				return
			}
			if (s === Drawing.ACTIVE) {
				AnnotationManager.activeAnnotation = null;
				Q(Drawing.NORMAL)
			}
			if (x) {
				$(f).trigger("defocused")
			}
		};
		this.destroy = function() {
			ad.remove();
			K.remove()
		};
		this.deleteSelf = function() {
			var x = $(G.node).closest(".layer.anno");
			x.removeClass("drag_cursor_open").removeClass("drag_cursor_closed");
			$(f).trigger("deleteRequested")
		};
		this.scale = function() {
			X = f.x * DocumentManager.DRAWSCALE;
			V = f.y * DocumentManager.DRAWSCALE;
			m = H(l);
			i = k(m);
			c(X, V);
			G.attr("stroke-width", z * DocumentManager.DRAWSCALE);
			I.attr("stroke-width", af * DocumentManager.DRAWSCALE);
			R.attr("stroke-width", D * DocumentManager.DRAWSCALE)
		};
		this.setColor = function(x) {
			if (x === f.color) {
				return
			}
			f.color = x;
			G.attr("stroke", Utilities.intToColorString(f.color));
			if (N) {
				$(f).trigger("annotationUpdated")
			}
		};
		this.getAnnoLocationInfo = function() {
			return G.getBBox().y
		};
		this.show = function() {
			ad.show()
		};
		this.hide = function() {
			ad.hide()
		};
		this.addLine = function(ag, ah) {
			w(ag, ah)
		};
		this.endDrawing = function() {
			R.attr({
				"stroke-width": D * DocumentManager.DRAWSCALE
			});
			I.attr({
				"stroke-width": af * DocumentManager.DRAWSCALE
			});
			I.attr("stroke-opacity", 1);
			setTimeout(function() {
				I.attr("stroke-opacity", 0)
			}, 300);
			W = false
		};
		var N = true;
		this.toggleUpdates = function(x) {
			N = x === true
		};
		this.setPosition = function(y, x) {
			f.x = Math.round(y);
			f.y = Math.round(x);
			X = f.x * DocumentManager.DRAWSCALE;
			V = f.y * DocumentManager.DRAWSCALE;
			c(X, V)
		};
		this.setLines = function(x) {
			f.lines = x;
			ab()
		};
		var l = [];
		var m = [];
		var i = [];
		var ad;
		var K;
		var G, I, R;
		var z = 1;
		var af = 4;
		var D = 10;
		var U = 1;
		var Y;
		var a;
		var s;
		var O = false,
			p = false;
		var X, V;
		var o = null;
		var ae = null;
		var W;
		var ab = function() {
				G.attr({
					stroke: Utilities.intToColorString(f.color),
					"stroke-width": z * DocumentManager.DRAWSCALE
				});
				I.attr({
					stroke: "#FF0",
					"stroke-opacity": 0,
					"stroke-width": af * DocumentManager.DRAWSCALE
				});
				R.attr({
					stroke: "#000",
					"stroke-opacity": 0.001,
					"stroke-width": D * DocumentManager.DRAWSCALE
				});
				ad.attr({
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				});
				Utilities.addSVGClasses(G.node, ["drawingnode", "vector"]);
				Utilities.addSVGClasses(I.node, ["drawingnode", "vector"]);
				Utilities.addSVGClasses(R.node, ["drawingnode", "vector"]);
				l = q(f.lines);
				if (l.length > 0) {
					m = H(l);
					i = k(m);
					var x = [
						["M", X, V]
					].concat(i);
					ad.attr("path", x)
				}
			};
		var c = function(ag, ai) {
				var ah = [
					["M", ag, ai]
				].concat(i);
				ad.attr("path", ah);
				G.attr({
					"stroke-width": z * DocumentManager.DRAWSCALE
				});
				I.attr({
					"stroke-width": af * DocumentManager.DRAWSCALE
				});
				R.attr({
					"stroke-width": D * DocumentManager.DRAWSCALE
				})
			};
		var Z = function(ai) {
				if (ai) {
					var ak = 10;
					var al = G.getBBox();
					if (al) {
						var ah = al.x - ak;
						var am = al.y - ak;
						var aj = al.width + (2 * ak);
						var ag = al.height + (2 * ak);
						K.css({
							top: am,
							left: ah,
							width: aj,
							height: ag
						});
						K.show()
					}
				} else {
					K.hide()
				}
			};
		var w = function(ag, ah) {
				O = false;
				W = true;
				o = new Array();
				o[0] = ["M", ag * DocumentManager.DRAWSCALE, ah * DocumentManager.DRAWSCALE];
				ae = f.canvas.path(o);
				ae.attr({
					stroke: Utilities.intToColorString(f.color),
					"stroke-width": z * DocumentManager.DRAWSCALE
				});
				$(G.node).closest(".page-outer").bind("mousemove", aa).bind("mouseup", u);
				I.attr({
					"stroke-width": z * DocumentManager.DRAWSCALE
				});
				R.attr({
					"stroke-width": z * DocumentManager.DRAWSCALE
				});
				Y = $(G.node).closest(".layer.anno").offset()
			};
		var u = function(ag) {
				$(G.node).closest(".page-outer").unbind("mousemove", aa).unbind("mouseup", u);
				if (O) {
					var x = ae.attr("path");
					var y = C(x);
					l = l.concat(y);
					m = H(l);
					i = k(m);
					f.lines = A(l);
					c(X, V);
					R.attr({
						"stroke-width": z * DocumentManager.DRAWSCALE
					});
					I.attr({
						"stroke-width": z * DocumentManager.DRAWSCALE
					});
					ae.remove();
					$(f).trigger("dragStopped");
					$(f).trigger("annotationUpdated")
				}
				$(f).trigger("drawStopped", [O]);
				O = false;
				o = null;
				ae = null;
				ag.stopPropagation()
			};
		var aa = function(ag) {
				if (!O) {
					O = true;
					$(f).trigger("drawStarted")
				}
				var y = (ag.pageX - Y.left);
				var x = (ag.pageY - Y.top);
				P(y, x);
				ag.stopPropagation();
				ag.preventDefault()
			};
		var P = function(ag, ah) {
				if (o.length == 1) {
					o[o.length] = ["L", ag, ah]
				} else {
					o[o.length] = [ag, ah]
				}
				ae.attr({
					path: o
				})
			};
		var h = function(ai, ah, ag, ak, aj) {
				if (!O) {
					$(f).trigger("dragStarted");
					O = true
				}
				var ag, ak;
				ag = X + ai;
				ak = V + ah;
				c(ag, ak);
				Z(true);
				return false
			};
		var b = function(aj) {
				var ak = DocumentManager.DRAWSCALE;
				m = G.attr("path");
				var ah = m[0][1];
				var y = m[0][2];
				var ag = ah - X;
				var x = y - V;
				X = ah;
				V = y;
				l = t(l, ag / ak, x / ak);
				f.x = Math.round(X / DocumentManager.DRAWSCALE);
				f.y = Math.round(V / DocumentManager.DRAWSCALE);
				i = k(m);
				f.lines = A(l);
				var ai = [
					["M", X, V]
				].concat(i);
				ad.attr("path", ai);
				$(f).trigger("dragStopped");
				$(f).trigger("annotationUpdated");
				return false
			};
		var T = function(ah, an, al, ai, ag, am) {
				if (al.button == 2 || al.metaKey === true) {
					var ak = {
						annotation: f,
						x: ah,
						y: an
					};
					$(f).trigger("annotationContextMenu", [ak]);
					$(document).one("contextmenu", function() {
						return false
					})
				} else {
					O = false;
					p = true;
					var aj = $(this.node).closest(".layer.anno");
					aj.addClass("drag_cursor_close")
				}
				al.stopPropagation();
				return false
			};
		var ac = function(y) {
				if (y.button == 2 || y.metaKey === true) {} else {
					p = false;
					if (O) {
						O = false;
						b(y)
					} else {
						if (s !== Drawing.ACTIVE) {
							f.focus(true)
						}
					}
				}
				var x = $(this.node).closest(".layer.anno");
				x.removeClass("drag_cursor_close");
				y.stopPropagation();
				return false
			};
		var d = function(x) {
				switch (x.keyCode) {
				case 46:
					f.deleteSelf();
					break
				}
			};
		var J = function() {
				ad.mouseover(function() {
					if (s == Drawing.ACTIVE) {} else {
						if (!AnnotationManager.isDragging) {
							Q(Drawing.HOVER)
						}
					}
					var x = $(this.node).closest(".layer.anno");
					x.addClass("drag_cursor_open")
				});
				ad.mouseout(function() {
					if (s == Drawing.ACTIVE) {} else {
						Q(Drawing.NORMAL)
					}
					var x = $(this.node).closest(".layer.anno");
					x.removeClass("drag_cursor_open")
				});
				G.drag(h, T, ac);
				I.drag(h, T, ac);
				R.drag(h, T, ac)
			};
		var L = function(x) {
				if (x) {
					$(document).bind("keydown", d)
				} else {
					$(document).unbind("keydown", d)
				}
			};
		var A = function(al) {
				var ak = "[[";
				var ai = false;
				for (var aj = 0; aj < al.length; ++aj) {
					var ah = al[aj];
					var am = ah[0];
					if (am == "M") {
						if (ai) {
							ak = ak.slice(0, ak.length - 1);
							ak += "],["
						}
						var ag = Math.round(ah[1] - f.x);
						var an = Math.round(ah[2] - f.y);
						ak += ag + "," + an + ","
					} else {
						if (am == "L") {
							ai = true;
							var ag = Math.round(ah[1] - f.x);
							var an = Math.round(ah[2] - f.y);
							ak += ag + "," + an + ","
						} else {
							ai = true;
							var ag = Math.round(ah[0] - f.x);
							var an = Math.round(ah[1] - f.y);
							ak += ag + "," + an + ","
						}
					}
				}
				ak = ak.slice(0, ak.length - 1) + "]]";
				return ak
			};
		var q = function(aj) {
				var y = JSON.parse(aj);
				var ai = [];
				for (var ah = 0; ah < y.length; ++ah) {
					var x = y[ah];
					ai.push(["M", f.x + x[0], f.y + x[1]]);
					for (var ag = 2; ag < x.length; ag += 2) {
						ai.push(["L", f.x + x[ag], f.y + x[ag + 1]])
					}
				}
				return ai
			};
		var k = function(ak) {
				var al = [];
				var ai = X;
				var ah = V;
				for (var ag = 0; ag < ak.length; ++ag) {
					var am = ak[ag];
					var x = am[0];
					if (x == "M") {
						var y = am[1] - ai;
						var aj = am[2] - ah;
						al.push(["m", y, aj]);
						ai = am[1];
						ah = am[2]
					} else {
						if (x == "m") {
							var y = am[1];
							var aj = am[2];
							al.push(["m", y, aj]);
							ai += am[1];
							ah += am[2]
						} else {
							if (x == "L") {
								var y = am[1] - ai;
								var aj = am[2] - ah;
								al.push(["l", y, aj]);
								ai = am[1];
								ah = am[2]
							} else {
								if (x == "l") {
									var y = am[1];
									var aj = am[2];
									al.push(["l", y, aj]);
									ai += am[1];
									ah += am[2]
								} else {
									var y = am[0] - ai;
									var aj = am[1] - ah;
									al.push(["l", y, aj]);
									ai = am[0];
									ah = am[1]
								}
							}
						}
					}
				}
				return al
			};
		var H = function(ah) {
				var ag = [];
				var ai = DocumentManager.DRAWSCALE;
				for (var y = 0; y < ah.length; ++y) {
					var x = ah[y];
					var aj = [];
					if (x.length == 2) {
						aj.push(x[0] * ai);
						aj.push(x[1] * ai);
						ag.push(aj)
					} else {
						aj.push(x[0]);
						aj.push(x[1] * ai);
						aj.push(x[2] * ai);
						ag.push(aj)
					}
				}
				return ag
			};
		var C = function(ah) {
				var aj = [];
				var ai = DocumentManager.DRAWSCALE;
				for (var y = 0; y < ah.length; ++y) {
					var x = ah[y];
					var ag = [];
					if (x.length == 2) {
						ag.push(x[0] / ai);
						ag.push(x[1] / ai);
						aj.push(ag)
					} else {
						ag.push(x[0]);
						ag.push(x[1] / ai);
						ag.push(x[2] / ai);
						aj.push(ag)
					}
				}
				return aj
			};
		var t = function(aj, ah, y) {
				var ag = [];
				for (var ai = 0; ai < aj.length; ++ai) {
					var x = aj[ai];
					var ak = [];
					if (x.length == 2) {
						ak.push(x[0] + ah);
						ak.push(x[1] + y)
					} else {
						ak.push(x[0]);
						ak.push(x[1] + ah);
						ak.push(x[2] + y)
					}
					ag.push(ak)
				}
				return ag
			};
		var Q = function(x) {
				if (x == s) {
					return
				}
				if (p) {
					return
				}
				s = x;
				switch (x) {
				case Drawing.NORMAL:
					L(false);
					K.removeClass("hovered");
					Z(false);
					break;
				case Drawing.ACTIVE:
					L(true);
					K.removeClass("hovered");
					Z(true);
					break;
				case Drawing.HOVER:
					K.addClass("hovered");
					if (!W) {
						Z(true)
					}
					break
				}
			};
		S(r)
	};
Drawing.NORMAL = 1;
Drawing.ACTIVE = 2;
Drawing.HOVER = 3;
var Highlight = function(p, z, s, l, j, w, t, e, n, i) {
		var o = this;
		if (arguments.length === 10) {
			this.id = p != null ? p : Utilities.generateUUID();
			this.layer = z;
			this.content = s;
			this.x = l;
			this.y = j;
			this.pageNumber = w;
			this.color = t;
			this.author = e;
			this.rectangles = i;
			this.relatedAnnotation = "";
			this.isReadOnly = n
		} else {
			this.id = Utilities.generateUUID();
			this.layer = null;
			this.content = null;
			this.x = -1;
			this.y = -1;
			this.pageNumber = -1;
			this.color = 0;
			this.author = null;
			this.rectangles = "[]";
			this.relatedAnnotation = "";
			this.isReadOnly = false
		}
		this.type = AnnoTypes.HIGHLIGHT;
		var u = function() {
				k()
			};
		this.deleteSelf = function() {
			$(o).trigger("deleteRequested")
		};
		this.destroy = function() {
			f(false);
			for (var x = 0; x < r.length; ++x) {
				r[x].detach()
			}
		};
		this.scale = function() {
			for (var x = 0; x < r.length; ++x) {
				r[x].detach()
			}
			k()
		};
		this.focus = function(x) {
			if (AnnotationManager.activeAnnotation) {
				AnnotationManager.activeAnnotation.defocus()
			}
			if (x) {
				$(o).trigger("focused")
			}
		};
		this.defocus = function(x) {
			if (AnnotationManager.activeAnnotation !== this) {
				return
			}
			$("#ZoomSel").focus()
		};
		this.hide = function() {
			for (var x = 0; x < r.length; ++x) {
				$(r[x]).hide()
			}
			q = false
		};
		this.show = function() {
			for (var x = 0; x < r.length; ++x) {
				$(r[x]).show()
			}
			q = true
		};
		this.isVisible = function() {
			return q
		};
		this.getAnnoLocationInfo = function() {
			return b
		};
		this.getLinePosition = function() {
			return [v.x1, v.y0 + ((v.y1 - v.y0) / 2)]
		};
		this.setColor = function(x) {
			if (x === o.color) {
				return
			}
			o.color = x;
			for (var y = 0; y < r.length; ++y) {
				r[y].css("background-color", Utilities.intToColorString(o.color))
			}
			$(o).trigger("annotationUpdated")
		};
		this.addRelatedAnnotation = function(x) {
			if (o.relatedAnnotation != "") {
				return
			}
			o.relatedAnnotation = x.id
		};
		this.setHover = function(A) {
			if (o.color == 0) {
				var B = A ? 0.1 : 0;
				for (var y = 0; y < r.length; ++y) {
					if ($(r[y]).closest(".layer.highlight").length > 0) {
						$(r[y]).css({
							opacity: B
						})
					}
				}
			} else {
				var x = A ? Utilities.intToColorString(Highlight.colorLookup[o.color].hoverColor) : Utilities.intToColorString(o.color);
				for (var y = 0; y < r.length; ++y) {
					$(r[y]).css({
						"background-color": x
					})
				}
			}
			f(A)
		};
		this.showContextMenu = function(A, C) {
			var B = {
				annotation: o,
				x: A,
				y: C
			};
			$(o).trigger("annotationContextMenu", [B])
		};
		var q = true;
		var r = [];
		var c, b, d, m;
		var v = {
			x0: 0,
			y0: 1000000,
			x1: 0,
			y1: 1000000
		};
		var k = function() {
				var C = o.rectangles;
				for (var B = 0; B < C.length; ++B) {
					var A = C[B];
					var D = $('<div class="hlrect normal"></div>');
					r.push(D);
					c = A.x * DocumentManager.DRAWSCALE;
					b = A.y * DocumentManager.DRAWSCALE;
					d = A.width * DocumentManager.DRAWSCALE;
					m = A.height * DocumentManager.DRAWSCALE;
					D.appendTo(o.layer).css({
						"background-color": Utilities.intToColorString(o.color),
						top: b,
						left: c,
						width: d,
						height: m
					});
					if (o.color == 0) {
						var y = $(o.layer).closest(".page-outer").find(".layer.strikeout");
						D.css({
							opacity: 0
						});
						strikescaledY = b + (m / 2) + (m * 0.02);
						strikescaledH = m * 0.1;
						var x = $('<div class="hlrect normal"></div>');
						r.push(x);
						x.appendTo(y).css({
							"background-color": "#F00",
							top: strikescaledY,
							left: c,
							width: d,
							height: strikescaledH
						});
						x.show()
					}
					D.show();
					if (A.y <= v.y1 && A.x + A.width >= v.x1) {
						v.x0 = A.x;
						v.y0 = A.y;
						v.x1 = A.x + A.width;
						v.y1 = A.y + A.height
					}
				}
				r[0].tipsy({
					html: true,
					voffset: 2,
					hoffset: -10,
					gravity: "sw",
					title: g,
					trigger: "manual"
				})
			};
		var h = function(x) {
				x.stopPropagation()
			};
		var h = function(x) {
				x.stopPropagation()
			};
		var g = function() {
				if (o.comment) {
					return o.comment.getTooltipText()
				}
				return ""
			};
		var a = false;
		var f = function(y) {
				var x = (!a && y) ? "show" : "hide";
				r[0].tipsy(x)
			};
		u()
	};
Highlight.colorLookup = {
	16774792: {
		index: 0,
		hoverColor: 16765696,
		colorClass: "yellow",
		cursorClass: "hl_yellow_cursor"
	},
	16567402: {
		index: 1,
		hoverColor: 16755757,
		colorClass: "orange",
		cursorClass: "hl_orange_cursor"
	},
	12580500: {
		index: 2,
		hoverColor: 9695232,
		colorClass: "green",
		cursorClass: "hl_green_cursor"
	},
	10018303: {
		index: 3,
		hoverColor: 7524349,
		colorClass: "blue",
		cursorClass: "hl_blue_cursor"
	},
	0: {
		index: -1,
		hoverColor: 0,
		colorClass: "",
		cursorClass: ""
	}
};
var Textbox = function(z, d, l, G, F, o, r, i, B, k, n) {
		var j = this;
		if (arguments.length === 11) {
			this.id = z != null ? z : Utilities.generateUUID();
			this.layer = d;
			this.content = l;
			this.x = G;
			this.y = F;
			this.pageNumber = o;
			this.color = r;
			this.size = i;
			this.bgColor = B;
			this.author = k;
			this.isReadOnly = n
		} else {
			this.id = Utilities.generateUUID();
			this.layer = null;
			this.content = null;
			this.x = -1;
			this.y = -1;
			this.pageNumber = -1;
			this.color = 0;
			this.size = -1;
			this.bgColor = -1;
			this.author = null;
			this.isReadOnly = false
		}
		this.type = AnnoTypes.TEXTBOX;
		this.width = 0;
		this.height = 0;
		var N = function() {
				R = j.x * DocumentManager.DRAWSCALE;
				Q = j.y * DocumentManager.DRAWSCALE;
				D = j.size * DocumentManager.DRAWSCALE;
				S()
			};
		this.deleteSelf = function() {
			$(j).trigger("deleteRequested")
		};
		this.destroy = function() {
			if (!j.isReadOnly) {
				u();
				clearTimeout(E)
			}
			A.detach();
			A = f = null;
			A = f = null
		};
		this.scale = function() {
			var x = DocumentManager.DRAWSCALE;
			R = j.x * x;
			Q = j.y * x;
			D = j.size * x;
			e(R, Q)
		};
		this.focus = function(x, y) {
			if (AnnotationManager.activeAnnotation && AnnotationManager.activeAnnotation != this) {
				AnnotationManager.activeAnnotation.defocus()
			}
			if (q !== Textbox.ACTIVE) {
				M(Textbox.ACTIVE);
				AnnotationManager.activeAnnotation = this
			}
			if (x) {
				C()
			}
			if (y) {
				$(j).trigger("focused")
			}
		};
		this.defocus = function(x) {
			if (AnnotationManager.activeAnnotation !== this) {
				return
			}
			if (q === Textbox.ACTIVE) {
				AnnotationManager.activeAnnotation = null;
				M(Textbox.NORMAL)
			}
			var y = a();
			if (y == "") {
				if (x) {
					$(j).trigger("defocused")
				}
				$(this).trigger("deleteRequested")
			} else {
				f.blur();
				Utilities.clearSelection();
				if (x) {
					$(j).trigger("defocused")
				}
			}
		};
		this.hide = function() {
			if (A) {
				A.hide()
			}
		};
		this.show = function() {
			if (A) {
				A.show()
			}
		};
		var J = true;
		this.toggleUpdates = function(x) {
			J = x === true
		};
		this.setContent = function(x) {
			j.content = x;
			var y = $.getMarkupText(j.content, false);
			f.html(y)
		};
		this.setColor = function(x) {
			L();
			if (x === j.color) {
				return
			}
			j.color = x;
			A.css("color", Utilities.intToColorString(j.color));
			if (J) {
				$(j).trigger("annotationUpdated")
			}
		};
		this.setPosition = function(y, x) {
			j.x = y;
			j.y = x;
			j.scale()
		};
		this.setSize = function(x) {
			L();
			if (x === j.size) {
				return
			}
			j.size = x;
			D = j.size * DocumentManager.DRAWSCALE;
			A.css("fontSize", D);
			j.width = A.width() / DocumentManager.DRAWSCALE;
			j.height = A.height() / DocumentManager.DRAWSCALE;
			if (J) {
				$(j).trigger("annotationUpdated")
			}
		};
		this.setBGColor = function(x) {
			L();
			if (x === j.bgColor) {
				return
			}
			j.bgColor = x;
			if (j.bgColor !== -1) {
				A.css({
					backgroundColor: "#FFFFFF"
				})
			} else {
				A.css({
					backgroundColor: ""
				})
			}
			if (J) {
				$(j).trigger("annotationUpdated")
			}
		};
		this.getAnnoLocationInfo = function() {
			return Q
		};
		var m, c, b;
		var w, v;
		var K = false;
		var R, Q, D;
		var S = function() {
				if (A || f) {
					j.destroy()
				}
				var x = $.getMarkupText(j.content, false);
				A = $('<div class="textbox normal"><div class="textbox-inner" spellcheck="false">' + x + "</div></div>");
				f = A.find(".textbox-inner");
				A.appendTo(j.layer).css({
					color: Utilities.intToColorString(j.color),
					fontSize: D
				});
				A.css({
					top: Q,
					left: R
				});
				A.show();
				if (j.bgColor !== -1) {
					A.css({
						backgroundColor: "#FFFFFF"
					})
				}
				if (!j.isReadOnly) {
					H()
				}
			};
		var C = function() {
				f.attr("contentEditable", true);
				var x = f[0];
				if (x.firstChild) {
					Utilities.setSelection(x, true)
				}
				f.focus();
				A.toggleClass("editmode", true)
			};
		var L = function() {
				if (A.hasClass("editmode")) {
					C()
				}
			};
		var e = function(V, W) {
				A.css({
					fontSize: D
				});
				A.css({
					top: W,
					left: V
				})
			};
		var H = function() {
				A.bind("mousedown", P).bind("mouseup", U).bind("mouseenter", p).bind("mouseleave", t).bind("contextmenu", s);
				f.bind("blur keyup paste", T).bind("keypress", Utilities.onKeyPressed)
			};
		var u = function() {
				A.unbind("mousedown", P).unbind("mouseup", U).unbind("mouseenter", p).unbind("mouseleave", t).unbind("contextmenu", s);
				f.unbind("blur keyup paste", T).unbind("keypress", Utilities.onKeyPressed)
			};
		var g = function(V) {
				if (!K) {
					$(j).trigger("dragStarted");
					A.addClass("dragging");
					K = true
				}
				var y = V.pageX - m.left;
				var x = V.pageY - m.top;
				w = y - c;
				v = x - b;
				e(w, v)
			};
		var s = function(x) {
				x.stopPropagation();
				return false
			};
		var P = function(V) {
				if (V.button == 2 || V.metaKey === true) {
					var y = {
						annotation: j,
						x: V.pageX,
						y: V.pageY
					};
					$(j).trigger("annotationContextMenu", [y])
				} else {
					if (q == Textbox.ACTIVE && A.hasClass("editmode") && V.target !== V.currentTarget) {} else {
						m = j.layer.offset();
						c = (V.pageX - m.left) - R;
						b = (V.pageY - m.top) - Q;
						K = false;
						$("#Doc").bind("mousemove", g).bind("mouseup", U);
						var x = A.closest(".layer.anno");
						x.removeClass("drag_cursor_open").addClass("drag_cursor_close")
					}
				}
				V.stopPropagation()
			};
		var U = function(y) {
				if (y.button == 2 || y.metaKey === true) {} else {
					$("#Doc").unbind("mousemove", g).unbind("mouseup", U);
					if (K) {
						K = false;
						R = w;
						Q = v;
						j.x = R / DocumentManager.DRAWSCALE;
						j.y = Q / DocumentManager.DRAWSCALE;
						$(this).removeClass("dragging");
						$(j).trigger("dragStopped");
						$(j).trigger("annotationUpdated");
						L()
					} else {
						if (!AnnotationManager.isDragging) {
							j.focus(false, true);
							if ($(y.target).closest(".textbox-inner").length > 0 && !A.hasClass("editmode")) {
								C()
							}
						}
					}
				}
				var x = A.closest(".layer.anno");
				x.removeClass("drag_cursor_close").addClass("drag_cursor_open");
				y.stopPropagation()
			};
		var p = function(y) {
				if (q == Textbox.ACTIVE) {} else {
					if (!AnnotationManager.isDragging) {
						M(Textbox.HOVER)
					}
				}
				var x = A.closest(".layer.anno");
				x.addClass("drag_cursor_open")
			};
		var t = function(y) {
				if (q == Textbox.ACTIVE) {} else {
					if (!AnnotationManager.isDragging) {
						M(Textbox.NORMAL)
					}
				}
				var x = A.closest(".layer.anno");
				x.removeClass("drag_cursor_open")
			};
		var T = function(x) {
				clearTimeout(E);
				E = setTimeout(O, 500)
			};
		var h = function(x) {
				switch (x.keyCode) {
				case 46:
					if (!f.attr("contenteditable")) {
						j.deleteSelf()
					}
					break
				}
			};
		var A, f;
		var q = Textbox.NORMAL;
		var a = function() {
				var x = $.trim(f.getPreText());
				return x ? x.replace(/\u200B/g, "") : x
			};
		var E;
		var O = function() {
				var x = a();
				if (j.content != x) {
					j.content = x.escapeHTML();
					j.width = A.width() / DocumentManager.DRAWSCALE;
					j.height = A.height() / DocumentManager.DRAWSCALE;
					$(j).trigger("annotationUpdated")
				}
			};
		var I = function(x) {
				if (x) {
					$(window).bind("keydown", h)
				} else {
					$(window).unbind("keydown", h)
				}
			};
		var M = function(x) {
				if (x == q) {
					return
				}
				if (K) {
					return
				}
				q = x;
				switch (x) {
				case Textbox.NORMAL:
					A.removeClass("focused").removeClass("hovered").addClass("normal");
					f.removeAttr("contenteditable");
					A.removeClass("editmode");
					I(false);
					break;
				case Textbox.HOVER:
					A.addClass("hovered");
					break;
				case Textbox.ACTIVE:
					A.removeClass("normal").addClass("focused");
					I(true);
					break
				}
			};
		N()
	};
Textbox.NORMAL = 1;
Textbox.ACTIVE = 2;
Textbox.HOVER = 3;
var AnnotationPanel = function() {
		var p = this;
		this.setAnnotations = function(C, D) {
			u(C, D)
		};
		this.updateAnnotation = function(C) {
			j(C)
		};
		this.deleteAnnotation = function(C) {
			r(C)
		};
		this.updateAnnotations = function(D, C) {
			g(D, C)
		};
		this.updateComment = function(C) {
			x(C)
		};
		this.deleteComment = function(C) {
			o(C)
		};
		this.updateComments = function(D, C) {
			z(D, C)
		};
		this.setKnownAuthors = function(C) {
			w(C)
		};
		this.updateAuthorInfo = function(C) {
			v(C)
		};
		this.handleAuthorHoverChange = function(C, D) {
			d(C, D)
		};
		this.handleCheckedAuthorListChange = function(C) {
			i(C)
		};
		var A = {};
		var t = {};
		var b = {};
		var k = {};
		var q = "page";
		var s = $(".groups-list").get(0);
		var h = $(".group-template").removeClass("group-template").remove().show().get(0);
		var e = $(".annotation-template").removeClass("annotation-template").remove().show().get(0);
		var u = function(C, D) {
				b = $.extend(true, {}, C);
				k = $.extend(true, {}, D);
				B()
			};
		var j = function(E) {
				b[E.id] = $.extend(true, {}, E);
				if (t[E.author]) {
					return
				}
				var D = y();
				var I = null;
				var N = null;
				var G = null;
				for (var F = 0; F < D.length; F++) {
					var M = D[F];
					for (var J = 0; J < M.annotations.length; J++) {
						if (M.annotations[J].id == E.id) {
							I = M;
							N = F;
							G = J;
							break
						}
					}
					if (I) {
						break
					}
				}
				if (I) {
					var H = $("#Group-" + I.id).get(0);
					if (!H) {
						H = m(I);
						if (N == 0) {
							$(H).prependTo(s)
						} else {
							var L = $(".group:eq(" + (N - 1) + ")", s).get(0);
							$(H).insertAfter(L)
						}
					}
					$("#Annotation-" + E.id).remove();
					var K = $(".annotations-list", H).get(0);
					var C = a(E);
					if (G == 0) {
						$(C).prependTo(K)
					} else {
						var L = $(".annotation:eq(" + (G - 1) + ")", K).get(0);
						$(C).insertAfter(L)
					}
				}
			};
		var r = function(F) {
				var D = b[F];
				delete b[F];
				if (D && t[D.author]) {
					return
				}
				var C = $("#Annotation-" + F).get(0);
				var E = $(C).closest(".group").get(0);
				$(C).remove();
				if ($(E).find(".annotation").length == 0) {
					$(E).remove()
				}
			};
		var g = function(D, C) {
				for (var E = 0; E < D.length; E++) {
					j(D[E])
				}
				for (var E = 0; E < C.length; E++) {
					r(C[E].id)
				}
			};
		var x = function(D) {
				k[D.id] = D;
				if (b[D.annoId]) {
					var C = b[D.annoId];
					j(C)
				}
			};
		var o = function(E) {
				var D = k[E];
				if (D) {
					delete k[E];
					if (b[D.annoId]) {
						var C = b[D.annoId];
						j(C)
					}
				}
			};
		var z = function(D, C) {
				for (var E = 0; E < D.length; E++) {
					x(D[E])
				}
				for (var E = 0; E < C.length; E++) {
					o(C[E].id)
				}
			};
		var w = function(C) {
				A = $.extend(true, {}, C)
			};
		var v = function(C) {
				A[C.authorId] = $.extend(true, {}, C);
				B()
			};
		var d = function(D, E) {
				for (var F in b) {
					var C = b[F];
					if (C.author == D) {
						if (E) {
							$("#Annotation-" + C.id).addClass("hover")
						} else {
							$("#Annotation-" + C.id).removeClass("hover")
						}
					}
				}
			};
		var i = function(F) {
				var E = {};
				for (var C = 0; C < F.length; C++) {
					E[F[C]] = true
				}
				t = {};
				for (var D in A) {
					if (!E[D]) {
						t[D] = true
					}
				}
				B()
			};
		var B = function() {
				var C = y();
				$(s).empty();
				for (var D = 0; D < C.length; D++) {
					var F = C[D];
					var E = m(F);
					$(E).appendTo(s)
				}
			};
		var y = function() {
				var D = {};
				for (var E in b) {
					var C = b[E];
					if (t[C.author]) {
						continue
					}
					var H = (q == "page") ? C.pageNumber : C.author;
					var I = D[H];
					if (!I) {
						if (q == "page") {
							var J = "Page " + C.pageNumber
						} else {
							var J = A[C.author].name || "anonymous"
						}
						I = {
							id: H,
							header: J,
							annotations: []
						};
						D[H] = I
					}
					I.annotations.push(C)
				}
				var G = [];
				$.each(D, function() {
					G.push(this)
				});
				D = G;
				D.sort(function(L, K) {
					if (q == "page") {
						return L.id - K.id
					} else {
						var N = (L.header != "anonymous") ? L.header : "zzzzzzzzzzz";
						var M = (K.header != "anonymous") ? K.header : "zzzzzzzzzzz";
						if (N.toLowerCase() > M.toLowerCase()) {
							return 1
						} else {
							if (N.toLowerCase() < M.toLowerCase()) {
								return -1
							} else {
								return 0
							}
						}
					}
				});
				for (var F = 0; F < D.length; F++) {
					var I = D[F];
					I.annotations.sort(function(L, K) {
						if (L.pageNumber != K.pageNumber) {
							return L.pageNumber - K.pageNumber
						} else {
							return L.y - K.y
						}
					})
				}
				return D
			};
		var m = function(G) {
				var H = $(h).clone().attr("id", "Group-" + G.id);
				H.find(".group-header").html(G.header);
				var F = H.find(".annotations-list").get(0);
				for (var E = 0; E < G.annotations.length; E++) {
					var D = G.annotations[E];
					var C = a(D);
					$(C).appendTo(F)
				}
				return H
			};
		var a = function(C) {
				var D = $(e).clone().attr("id", "Annotation-" + C.id);
				var K = "",
					L = "";
				if (C.type === AnnoTypes.STICKYNOTE) {
					K = C.content === "" ? "(Blank note)" : C.content;
					L = "note-" + C.color
				} else {
					if (C.type === AnnoTypes.HIGHLIGHT) {
						K = C.content;
						var J = Highlight.colorLookup[C.color].index;
						L = C.color === 0 ? "strikeout" : "highlight highlight-" + J
					} else {
						if (C.type === AnnoTypes.TEXTBOX) {
							K = C.content;
							L = "ap-textbox"
						} else {
							if (C.type === AnnoTypes.DRAWING) {
								K = "(Drawing)";
								L = "drawing"
							} else {
								if (C.type === AnnoTypes.ANCHOR) {
									K = null;
									L = "anchor"
								} else {
									if (C.type === AnnoTypes.AREA) {
										K = null;
										L = "area"
									}
								}
							}
						}
					}
				}
				var G = null;
				for (var I in k) {
					var H = k[I];
					if (H.annoId == C.id) {
						L += " ap-comment";
						if (C.type == AnnoTypes.HIGHLIGHT) {
							G = H.content
						} else {
							K = H.content
						}
					}
				}
				var E = A[C.author] || {};
				if (q == "page") {
					var M = E && E.name && E.name != "" ? E.name : "anonymous"
				} else {
					var M = "Page " + C.pageNumber
				}
				D.find(".name").html(M + " - ");
				if (K) {
					D.find(".content").html(K)
				} else {
					D.find(".content").html('<i style="color:Gray;">blank</i>')
				}
				if (G && $.trim(G) != "") {
					D.find(".sub-content").text(G).show()
				}
				D.data("className", L).data("annotation", C).addClass(L);
				var F = null;
				if (!C.lastModified || typeof(C.lastModified) == "undefined") {
					F = l(new Date())
				} else {
					F = l(n(C.lastModified))
				}
				D.find(".date").text("Modified " + f(F));
				return D.get(0)
			};

		function f(F) {
			var D = new Date((F || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
				E = (((new Date()).getTime() - D.getTime()) / 1000),
				C = Math.floor(E / 86400);
			if (isNaN(C) || C < 0) {
				return "just now"
			}
			return C == 0 && (E < 86400 && "today") || C == 1 && "yesterday" || C < 365 && D.format("mmmm dS") || D.format("mmmm dS, yyyy")
		}
		function n(J) {
			var K = J.match(/\d+/g),
				H = K[0],
				G = K[1],
				I = K[2],
				F = K[3],
				E = K[4],
				C = K[5];
			var D = new Date(Date.UTC(H, G - 1, I, F, E, C));
			return D
		}
		function l(E) {
			var G = E.getFullYear(),
				H = E.getMonth() + 1,
				D = E.getDate(),
				C = E.getHours(),
				I = E.getMinutes(),
				F = E.getSeconds();
			return G + "-" + H + "-" + D + "T" + C + ":" + I + ":" + F
		}
		var c = function() {
				$(".annotation").live("click", function(D) {
					var C = $(this).data("annotation");
					$(p).trigger("annotationClick", [C.id])
				});
				$("#GroupByButton").live("click", function() {
					if ($("#GroupByMenu:hidden").length > 0) {
						$("#GroupByMenu").show()
					} else {
						$("#GroupByMenu").hide()
					}
					return false
				});
				$("body").live("click", function() {
					$("#GroupByMenu").hide()
				});
				$("#GroupByMenu .item").live("click", function() {
					var C = $(this).attr("value");
					var D = $(this).text();
					$("#GroupByButton").text(D);
					if (q != C) {
						q = C;
						B()
					}
				})
			};
		c()
	};
var AuthorPanel = function(j) {
		var l = this;
		this.enable = function() {};
		this.setActiveAuthorInfo = function(n) {
			e(n)
		};
		this.updateAuthorInfo = function(n) {
			k(n)
		};
		this.setKnownAuthors = function(n) {
			for (authId in n) {
				var o = n[authId];
				k(o)
			}
		};
		this.loginRequestedCallback = function(n) {
			loginRequestedCallback(n)
		};
		this.flash = function() {
			if (i) {
				if ($(document.body).hasClass("hide-sidebar")) {
					var n = '<div class="tipsyCustomArrow"></div><b>Tip:</b> Click button to<br/> view your annotations';
					$("#OpenSidebarButton").tipsy({
						trigger: "manual",
						fade: true,
						gravity: "nw",
						voffset: 3,
						hoffset: -178,
						html: true,
						className: "authorTip",
						fallback: n
					});
					$("#OpenSidebarButton").tipsy("show");
					$(".authorTip").live("click", function() {
						$("#OpenSidebarButton").tipsy("hide")
					});
					$("#OpenSidebarButton").live("click", function() {
						$("#OpenSidebarButton").tipsy("hide")
					})
				} else {
					var o = $("#CollaboratorOnboardingPanel");
					if ($.browser.msie) {
						o.show()
					} else {
						$("#CollaboratorOnboardingPanel").show("slide", {
							direction: "up"
						}, 500)
					}
				}
			}
		};
		var i = false;
		var g = null;
		var f = null;
		var h = null;
		var c = $(".authors-box").get(0);
		var b = $(".author-list").get(0);
		var a = $(".author-template").removeClass("author-template").remove().get(0);
		var e = function(n) {
				if (!j.readonly) {
					h = n.name;
					g = n.authorId;
					$(".author-top-box").find(".author-checkbox").attr("id", g);
					$(".author-top-box").data("author", n);
					f = n.email;
					if (h) {
						$("#AuthorName").val(h.unescapeHTML());
						$("#AuthorName").removeClass("watermark")
					} else {} if (f) {
						$("#SettingsLink").text("Change notification settings")
					}
				}
			};
		var k = function(q) {
				var o = q.authorId;
				if (o == g) {
					return
				}
				var u = $("#Author-" + o);
				var r = true;
				if (u.get(0)) {
					u.find(".additional-author-name").removeClass("empty")
				} else {
					u = $(a).clone().attr("id", "Author-" + o).show().appendTo(b);
					$(".author-checkbox", u).attr("id", o);
					r = false
				}
				var s = "anonymous";
				if (q.name && q.name != "") {
					s = q.name;
					u.find(".additional-author-name").removeClass("empty")
				} else {
					u.find(".additional-author-name").addClass("empty")
				}
				u.find(".additional-author-name").html(s);
				u.data("author", q);
				if (q.state == 1) {
					u.find(".additional-author-name").addClass("online")
				} else {
					if (q.state == 0) {
						u.find(".additional-author-name").removeClass("online");
						if (q.contributed == false) {
							$("#Author-" + o).remove()
						}
					}
				}
				var t = $(c).outerHeight();
				var v = c ? c.scrollHeight : 0;
				if (v > t) {
					var p = $("#TopPane").height();
					if (p < 200) {
						var n = p + (v - t);
						if (n > 200) {
							n = 200
						}
						$("#RightPane").trigger("resize", [n])
					}
				}
			};
		var m = function() {
				var p = $(".author-checkbox:checked");
				var n = [];
				for (var o = 0; o < p.length; o++) {
					var r = p[o].id;
					n.push(r)
				}
				var q = {
					authorIdList: n
				};
				$(l).trigger("checkedAuthorListChange", [q])
			};
		var d = function() {
				if (!j.readonly) {
					var n = "Enter your name";
					$("#AuthorName").watermark(n);
					var p = function(s) {
							var r = s;
							if (!r) {
								var q = $("#AuthorName").val();
								q = q.escapeHTML();
								if (q == n) {
									q = null
								}
								if (q == h) {
									return
								}
								h = q;
								r = {
									name: h,
									email: f
								}
							}
							$(l).trigger("authorInfoChange", [r])
						};
					$("#AuthorName").click(function() {}).focus(function() {
						var q = $(this);
						if (!q.hasClass("focus-field")) {
							setTimeout(function() {
								q.select()
							}, 0)
						}
						q.removeClass("idle-field").addClass("focus-field")
					}).blur(function() {
						$(this).removeClass("focus-field").addClass("idle-field");
						p()
					}).keypress(function(q) {
						if (q.keyCode == 13) {
							$(this).blur()
						}
					});
					$(window).unload(function() {
						$(l).trigger("authorLeave")
					});
					$("#InviteAuthorsButton").click(function() {
						$(l).trigger("sharingButtonClick");
						if (!DEBUG) {
							_gaq.push(["_trackEvent", "sidebar-sharing", "invite-btn-clicked"])
						}
					});
					$(".email-notification-dialog .close-x, .email-notification-dialog .close-button").click(function() {
						$(".email-notification-dialog").hide()
					});
					$(".author-email").keypress(function(q) {
						if (q.which == 13) {
							$(".submit-email").click()
						}
					});
					$(".submit-email").click(function() {
						var q = $(".author-email").val();
						if (q != "") {
							if (!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(q)) {
								alert("invalid email address")
							} else {
								$(".email-notification-dialog .panel").hide();
								$(".email-notification-dialog .email-conf-panel").show();
								f = $.trim(q);
								$("#SettingsLink").text("Change notification settings");
								p()
							}
						}
					})
				}
				$(".additional-author").live("hover", function(s) {
					var r = $(this).data("author");
					var q = s.type == "mouseover";
					if (r.contributed) {
						$(l).trigger("authorHoverChange", [r.authorId, q])
					}
				});
				$(".author-top-box").live("hover", function(s) {
					var r = $(this).data("author");
					var q = s.type == "mouseover";
					if (r && r.contributed) {
						$(l).trigger("authorHoverChange", [r.authorId, q])
					}
				});
				$(".additional-author .inner").live("mouseup", function(q) {
					$("input[type=checkbox]", this).click()
				});
				$("input[type='checkbox']").attr("checked", "true");
				$("input[type='checkbox']").live("click", function() {
					setTimeout(m, 0)
				});
				$("input[type='checkbox']").live("mouseup", function() {
					return false
				});
				var o = function() {
						$(".onboarding-panel input.error").removeClass("error");
						var q = $.trim($("#OnboardingNameInput").val());
						if (q == "") {
							$("#OnboardingNameInput").addClass("error").focus();
							return false
						}
						return {
							name: q,
							email: ""
						}
					};
				if (!j.readonly && !IS_AUTHENTICATED && !IS_DEMO && INITIAL_AUTHOR_INFO.name == null && !SHOW_OWNER_ONBOARDING) {
					i = true;
					$(document).ready(function() {});
					$("#OnboardingNameInput").watermark("anonymous");
					$("#OnboardingLoginLink").click(function() {
						$(".onboarding-panel").hide();
						$("#CollaboratorOnboardingPanel").hide();
						var q = location.pathname + location.search;
						location.href = "/accounts/login/?next=" + q
					});
					$("#SetNameButton").mousedown(function() {
						$(this).addClass("active");
						$(document).one("mouseup", function() {
							$("#SetNameButton").removeClass("active")
						})
					});
					$("#SetNameButton").click(function() {
						var r = o();
						if (r) {
							e({
								authorId: g,
								name: r.name
							});
							p(r);
							var q = $("#CollaboratorOnboardingPanel");
							if ($.browser.msie) {
								q.hide()
							} else {
								$("#CollaboratorOnboardingPanel").hide("slide", {
									direction: "up"
								}, 500)
							}
							if (!DEBUG) {
								_gaq.push(["_trackEvent", "sidebar-onboarding", "info-added", ((email) ? "has-email" : "no-email")])
							}
						}
					});
					$("#OnboardingNameInput").keypress(function(q) {
						if (q.which == 13) {
							$("#SetNameButton").click()
						}
					})
				}
			};
		d()
	};
var AnnoTypes = {
	ANNOTATIONINFO: 100,
	HIGHLIGHT: 0,
	TEXTBOX: 2,
	DRAWING: 3,
	ANCHOR: 4,
	AREA: 5
};
var EqualityFields = {};
var AnnotationInfo = function(g, e, c, b, a, f, d) {
		if (arguments.length === 7) {
			this.id = g;
			this.content = e;
			this.color = c;
			this.pageNumber = b;
			this.x = a;
			this.y = f;
			this.author = d
		} else {
			this.id = Utilities.generateUUID();
			this.content = null;
			this.color = 0;
			this.pageNumber = -1;
			this.x = -1;
			this.y = -1;
			this.author = null
		}
		this.equals = function(h) {
			if (!h) {
				return false
			}
			for (var k = 0; k < EqualityFields.baseEqualityFields.length; k++) {
				var j = EqualityFields.baseEqualityFields[k];
				if (this[j] !== h[j]) {
					return false
				}
			}
			for (var k = 0; k < EqualityFields[this.type].length; k++) {
				var j = EqualityFields[this.type][k];
				if (this[j] !== h[j]) {
					return false
				}
			}
			return true
		};
		this.transform = function(h) {
			var i = h == "unescape" ? String.prototype.unescapeHTML : String.prototype.escapeHTML;
			this.content = i.apply(this.content)
		};
		this.type = AnnoTypes.ANNOTATIONINFO
	};
EqualityFields.baseEqualityFields = ["type", "id", "content", "color", "x", "y", "pageNumber"];
EqualityFields[AnnoTypes.ANNOTATIONINFO] = [];
var HighlightInfo = function(a, e, b, g, h, f, c, d, i) {
		if (arguments.length === 9) {
			AnnotationInfo.apply(this, [a, e, b, g, h, f, c]);
			this.rectangles = d;
			this.relatedAnnotation = i
		} else {
			AnnotationInfo.apply(this, []);
			this.rectangles = null;
			this.relatedAnnotation = null
		}
		this.type = AnnoTypes.HIGHLIGHT
	};
EqualityFields[AnnoTypes.HIGHLIGHT] = ["relatedAnnotation"];
HighlightInfo.makeFromObject = function(b) {
	var a = new HighlightInfo(b.id, b.content, b.color, b.pageNumber, b.x, b.y, b.author, b.rectangles, b.relatedAnnotation);
	return a
};
var DrawingInfo = function(g, c, a, f, b, d, e) {
		if (arguments.length === 7) {
			AnnotationInfo.apply(this, [g, "", d, c, a, f, e]);
			this.lines = b
		} else {
			AnnotationInfo.apply(this, []);
			this.lines = null
		}
		this.type = AnnoTypes.DRAWING
	};
EqualityFields[AnnoTypes.DRAWING] = ["lines"];
DrawingInfo.makeFromObject = function(b) {
	var a = new DrawingInfo(b.id, b.pageNumber, b.x, b.y, b.lines, b.color, b.author);
	return a
};
var AnchorInfo = function(e, b, a, d, c) {
		if (arguments.length === 5) {
			AnnotationInfo.apply(this, [e, "", 0, b, a, d, c])
		} else {
			AnnotationInfo.apply(this, [])
		}
		this.type = AnnoTypes.ANCHOR
	};
EqualityFields[AnnoTypes.ANCHOR] = [];
AnchorInfo.makeFromObject = function(b) {
	var a = new AnchorInfo(b.id, b.pageNumber, b.x, b.y, b.author);
	return a
};
var AreaInfo = function(g, c, b, f, e, a, d) {
		if (arguments.length === 7) {
			AnnotationInfo.apply(this, [g, "", 0, c, b, f, d]);
			this.width = e;
			this.height = a
		} else {
			AnnotationInfo.apply(this, []);
			this.width = -1;
			this.height = -1
		}
		this.type = AnnoTypes.AREA
	};
EqualityFields[AnnoTypes.AREA] = ["width", "height"];
AreaInfo.makeFromObject = function(b) {
	var a = new AreaInfo(b.id, b.pageNumber, b.x, b.y, b.width, b.height, b.author);
	return a
};
var TextboxInfo = function(a, e, i, f, h, b, j, c, k, g, d) {
		if (arguments.length === 11) {
			AnnotationInfo.apply(this, [a, e, c, h, i, f, d]);
			this.width = b;
			this.height = j;
			this.size = k;
			this.bgColor = g
		} else {
			AnnotationInfo.apply(this, []);
			this.width = -1;
			this.height = -1;
			this.size = -1;
			this.bgColor = -1
		}
		this.type = AnnoTypes.TEXTBOX
	};
EqualityFields[AnnoTypes.TEXTBOX] = ["width", "height", "size", "bgColor"];
TextboxInfo.makeFromObject = function(b) {
	var a = new TextboxInfo(b.id, b.content, b.x, b.y, b.pageNumber, b.width, b.height, b.color, b.size, b.bgColor, b.author);
	return a
};
var CommentInfo = function(f, d, a, e, b, c) {
		if (arguments.length === 6) {
			this.id = f;
			this.content = d;
			this.annoId = a;
			this.annoType = e;
			this.orderIndex = b;
			this.author = c
		} else {
			this.id = null;
			this.content = "";
			this.annoId = null;
			this.annoType = -1;
			this.orderIndex = 0;
			this.author = null
		}
		this.equals = function(g) {
			if (!g) {
				return false
			}
			for (var j = 0; j < CommentInfo.EQUALITY_FIELDS.length; j++) {
				var h = CommentInfo.EQUALITY_FIELDS[j];
				if (this[h] !== g[h]) {
					return false
				}
			}
			return true
		};
		this.transform = function(g) {
			var h = g == "unescape" ? String.prototype.unescapeHTML : String.prototype.escapeHTML;
			this.content = h.apply(this.content)
		}
	};
CommentInfo.EQUALITY_FIELDS = ["id", "content", "annoId", "orderIndex", "author"];
CommentInfo.makeFromObject = function(a) {
	var b = new CommentInfo(a.id, a.content, a.annoId, a.annoType, a.orderIndex, a.author);
	return b
};
var DocTitle = function(c, d) {
		var b = this;
		var a = function() {
				e = c;
				if (!d) {
					$("#HeaderTitle").bind("mousedown", function() {
						$(this).addClass("active").attr("contenteditable", "true")
					}).bind("blur", function() {
						$(this).removeClass("active").removeAttr("contenteditable");
						var f = $(this).text().escapeHTML();
						$(this).detach().insertAfter(".logo");
						if (f == "") {
							$(this).text(e)
						} else {
							if (f != e) {
								e = f;
								document.title = e.unescapeHTML() + " | Crocodoc";
								$(b).trigger("titleUpdated", [e])
							}
						}
					}).bind("keypress", function(f) {
						if (f.which == 13) {
							$(this).blur()
						} else {
							if (f.which == 60 || f.which == 62) {
								return false
							}
						}
					})
				}
			};
		var e = null;
		a()
	};
var Model = function() {
		var n = this;
		var m = function() {};
		var l = null;
		var f = {};
		var g = {};
		var d = null;
		this.startTime = new Date();
		this.lastModified = null;
		var j = null;
		var b = null;
		this.getExportPermissions = function(o) {
			$.post("/user/getExportPermissions", {}, function(p) {
				var q = "";
				var r = false;
				if (p == "true") {
					r = true
				} else {
					q = p
				}
				if (typeof o == "function") {
					o(r, q)
				}
			})
		};
		var i = ["tut", "annoTbShowing", "tbColor", "tbSize", "tbBGColor", "drColor", "hlColor", "sidePanelShown"];
		this.getUserPrefs = function() {
			var p = {};
			for (var q in i) {
				var o = i[q];
				var r = $.cookie(o);
				if (r) {
					r = parseInt(r)
				}
				p[o] = r
			}
			return p
		};
		this.updateUserPref = function(o, p) {
			$.cookie(o, p.toString(), {
				expires: 730
			})
		};
		var k = {};
		var h = {};
		this.getKnownAuthors = function() {
			return Utilities.clone(h, true)
		};
		this.getCurrentAuthorInfo = function() {
			return Utilities.clone(k, true)
		};
		this.setAuthorInfo = function(o, q, p) {
			k = o;
			h[k.authorId] = k;
			if (!p) {
				e(q)
			}
		};
		this.setAuthorInactive = function() {
			k.state = 0;
			e(null, true)
		};
		var e = function(t, o) {
				o = o || false;
				if (typeof(t) !== "function") {
					t = function() {}
				}
				if (IS_DEMO) {
					setTimeout(function() {
						t()
					}, 0);
					return
				}
				if (k.authorId) {
					var p = Utilities.clone(k, true);
					p.name = p.name ? p.name.unescapeHTML() : p.name;
					var s = $.query.get("countview") == "false";
					var q = JSON.stringify(p);
					var r = {
						author: q,
						smode: s,
						shortId: l.shortId
					};
					if (o && n.lastModified) {
						if (!j || j < n.lastModified) {
							r.triggeremail = true
						}
					}
					$.ajax({
						url: "/webservice/author/save",
						type: "POST",
						async: !o,
						contentType: "application/json; charset=utf-8",
						data: r,
						dataType: "json",
						success: function(u) {
							t(u)
						},
						error: function(w, u, v) {
							t(v)
						}
					})
				}
			};
		var a = {};
		this.loadDocument = function(p, q) {
			if (typeof(q) !== "function") {
				q = function() {}
			}
			l = p;
			k.document = l.uuid;
			var o = function(t, z) {
					d = t.now;
					var r = JSON.parse(t.authors);
					var s = JSON.parse(t.annos);
					var v = JSON.parse(t.comments);
					for (var w = 0; w < r.length; w++) {
						var u = r[w].fields;
						u.name = u.name ? u.name.escapeHTML() : u.name;
						a[r[w].pk] = u.authorId;
						h[u.authorId] = u
					}
					for (var w = 0; w < s.length; ++w) {
						var y = s[w].fields;
						y.id = s[w].pk;
						if (y.author) {
							y.author = a[y.author]
						}
						switch (y.type) {
						case AnnoTypes.HIGHLIGHT:
							y = HighlightInfo.makeFromObject(y);
							break;
						case AnnoTypes.TEXTBOX:
							y = TextboxInfo.makeFromObject(y);
							break;
						case AnnoTypes.DRAWING:
							y = DrawingInfo.makeFromObject(y);
							break;
						case AnnoTypes.ANCHOR:
							y = AnchorInfo.makeFromObject(y);
							break;
						case AnnoTypes.AREA:
							y = AreaInfo.makeFromObject(y);
							break;
						default:
							continue
						}
						y.transform("escape");
						f[y.id] = y
					}
					for (var w = 0; w < v.length; ++w) {
						var x = v[w].fields;
						x.id = v[w].pk;
						x = CommentInfo.makeFromObject(x);
						x.transform("escape");
						g[x.id] = x;
						if (x.author) {
							x.author = a[x.author]
						}
					}
					z()
				};
			if (DOCUMENT_GET) {
				setTimeout(function() {
					o(DOCUMENT_GET, q)
				}, 10)
			} else {
				$.ajax({
					url: "/webservice/document/get",
					type: "GET",
					cache: false,
					data: "uuid=" + l.uuid + "&shortId=" + l.shortId,
					dataType: "json",
					contentType: "application/json; charset=utf-8",
					success: function(r) {
						o(r, q)
					},
					error: function(t, r, s) {
						q(s)
					}
				})
			}
		};
		this.refreshDocument = function(p, q) {
			if (typeof(q) !== "function") {
				q = function() {}
			}
			if (IS_DEMO) {
				setTimeout(function() {
					q([], [], [], [], [])
				}, 0);
				return
			}
			var o = function(x, G) {
					if (!x || typeof(x) == "string") {
						G("Error in refreshDocument callback, response was: " + x);
						return
					}
					d = x.now;
					var r = JSON.parse(x.authors);
					var t = JSON.parse(x.annos);
					var z = JSON.parse(x.comments);
					var B = [],
						w = [],
						s = [];
					var v = (new Date()).getTime();
					for (var A = 0; A < r.length; A++) {
						var y = r[A].fields;
						y.name = y.name ? y.name.escapeHTML() : y.name;
						var u = h[y.authorId];
						if (u && u.name == y.name && u.state == y.state && u.contributed == y.contributed) {
							continue
						}
						a[r[A].pk] = y.authorId;
						h[y.authorId] = y;
						s[s.length] = y
					}
					for (var A = 0; A < t.length; ++A) {
						var E = t[A].fields;
						E.id = t[A].pk;
						if (E.author) {
							E.author = a[E.author]
						}
						if (E.deleted) {
							f[E.id] = null;
							delete f[E.id];
							w[w.length] = E
						} else {
							switch (E.type) {
							case AnnoTypes.HIGHLIGHT:
								E = HighlightInfo.makeFromObject(E);
								break;
							case AnnoTypes.TEXTBOX:
								E = TextboxInfo.makeFromObject(E);
								break;
							case AnnoTypes.DRAWING:
								E = DrawingInfo.makeFromObject(E);
								break;
							case AnnoTypes.ANCHOR:
								E = AnchorInfo.makeFromObject(E);
								break;
							case AnnoTypes.AREA:
								E = AreaInfo.makeFromObject(E);
								break
							}
							E.transform("escape");
							var u = f[E.id];
							if (u) {
								if (u.author == n.getCurrentAuthorInfo().authorId || u.lastSaved && (v - u.lastSaved) < 5000) {
									continue
								}
								if (E.equals(u)) {
									continue
								}
							}
							B[B.length] = f[E.id] = E
						}
					}
					var D = [];
					var F = [];
					for (var A = 0; A < z.length; ++A) {
						var C = z[A].fields;
						C.id = z[A].pk;
						if (C.deleted) {
							g[C.id] = null;
							delete g[C.id];
							F[F.length] = C
						} else {
							var u = g[C.id];
							C = CommentInfo.makeFromObject(C);
							C.transform("escape");
							if (u) {
								if (u.author == n.getCurrentAuthorInfo().authorId || u.lastSaved && (v - u.lastSaved) < 5000) {
									continue
								}
								if (C.equals(u)) {
									continue
								}
							}
							if (C.author) {
								C.author = a[C.author]
							}
							D[D.length] = g[C.id] = C
						}
					}
					G(null, B, w, s, D, F)
				};
			$.ajax({
				url: "/webservice/document/refresh",
				type: "POST",
				data: {
					uuid: l.uuid,
					shortId: l.shortId,
					loadTime: d
				},
				dataType: "json",
				contentType: "application/json; charset=utf-8",
				success: function(r) {
					o(r, q)
				},
				error: function(t, r, s) {
					q(s)
				}
			})
		};
		this.getDocument = function() {
			if (l) {
				return Utilities.clone(l, true)
			}
			return null
		};
		this.setTitle = function(o, p) {
			if (IS_DEMO) {
				setTimeout(function() {
					p()
				}, 0);
				return
			}
			if (l) {
				l.title = o;
				o = o.unescapeHTML();
				$.ajax({
					url: "/webservice/document/rename",
					type: "POST",
					data: {
						uuid: l.uuid,
						title: o
					},
					dataType: "json",
					contentType: "application/json; charset=utf-8",
					success: function(q) {
						p()
					},
					error: function(s, q, r) {
						p(r)
					}
				})
			}
		};
		this.getAllComments = function() {
			return Utilities.clone(g, true)
		};
		this.getAnnotation = function(o) {
			var p = f[o];
			return p ? Utilities.clone(p, true) : null
		};
		this.saveComment = function(q, r) {
			if (typeof(r) != "function") {
				r = function() {}
			}
			if (IS_DEMO) {
				setTimeout(function() {
					r()
				}, 0);
				return
			}
			if (!q) {
				return
			}
			clearInterval(b);
			b = setTimeout(c, 1000 * 60 * 10);
			q.transform("unescape");
			var p = Utilities.clone(q, true);
			q.transform("escape");
			g[q.id] = q;
			n.lastModified = new Date();
			q.lastSaved = n.lastModified.getTime();
			p.document = l.uuid;
			var o = JSON.stringify(p);
			$.ajax({
				url: "/webservice/comment/save",
				type: "POST",
				contentType: "application/json; charset=utf-8",
				data: {
					comment: o,
					shortId: l.shortId
				},
				dataType: "json",
				success: function(s) {
					r(s)
				},
				error: function(u, s, t) {
					r(t)
				}
			})
		};
		this.deleteComment = function(o, r, p) {
			if (typeof(r) !== "function") {
				r = function() {}
			}
			if (IS_DEMO) {
				setTimeout(function() {
					r()
				}, 0);
				return
			}
			var q = g[o];
			if (!q) {
				r();
				return null
			}
			g[o] = null;
			delete g[o];
			if (!p) {
				n.lastModified = new Date();
				clearInterval(b);
				b = setTimeout(c, 1000 * 60 * 10);
				if (typeof(r) !== "function") {
					r = function() {}
				}
				$.ajax({
					url: "/webservice/comment/delete",
					type: "POST",
					data: "commentId=" + o + "&shortId=" + l.shortId,
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function(s) {
						r(s)
					},
					error: function(u, s, t) {
						r(t)
					}
				})
			}
		};
		this.getAllAnnotations = function() {
			return Utilities.clone(f, true)
		};
		this.saveAnnotation = function(p, r) {
			if (typeof(r) !== "function") {
				r = function() {}
			}
			if (IS_DEMO) {
				setTimeout(function() {
					r()
				}, 0);
				return
			}
			if (!p) {
				return
			}
			clearInterval(b);
			b = setTimeout(c, 1000 * 60 * 10);
			p.transform("unescape");
			var q = Utilities.clone(p, true);
			p.transform("escape");
			f[p.id] = p;
			n.lastModified = new Date();
			p.lastSaved = n.lastModified.getTime();
			q.document = l.uuid;
			var o = JSON.stringify(q);
			$.ajax({
				url: "/webservice/annotation/save",
				type: "POST",
				contentType: "application/json; charset=utf-8",
				data: {
					anno: o,
					shortId: l.shortId
				},
				dataType: "json",
				success: function(s) {
					r(s)
				},
				error: function(u, s, t) {
					r(t)
				}
			})
		};
		this.deleteAnnotation = function(o, r, q) {
			if (typeof(r) !== "function") {
				r = function() {}
			}
			if (IS_DEMO) {
				setTimeout(function() {
					r()
				}, 0);
				return
			}
			var p = f[o];
			if (!p) {
				r();
				return null
			}
			f[o] = null;
			delete f[o];
			if (!q) {
				n.lastModified = new Date();
				clearInterval(b);
				b = setTimeout(c, 1000 * 60 * 10);
				if (typeof(r) !== "function") {
					r = function() {}
				}
				$.ajax({
					url: "/webservice/annotation/delete",
					type: "POST",
					data: {
						annoId: o,
						type: p.type,
						shortId: l.shortId
					},
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function(s) {
						r(s)
					},
					error: function(u, s, t) {
						r(t)
					}
				})
			}
			return p.relatedAnnotation
		};
		this.log = function(o, r) {
			if (IS_DEMO) {
				return
			}
			var p = {
				messageType: o,
				message: r
			};
			var q = JSON.stringify(p).replace("&", "%26");
			$.ajax({
				url: "/webservice/log/log",
				type: "POST",
				dataType: "json",
				contentType: "application/json; charset=utf-8",
				data: {
					msgObj: q
				}
			})
		};
		var c = function() {
				if (IS_DEMO) {
					return
				}
				j = new Date();
				var o = JSON.stringify(k);
				var p = "author=" + encodeURIComponent(o);
				$.ajax({
					url: "/webservice/author/triggeremail",
					type: "POST",
					contentType: "application/json; charset=utf-8",
					data: p,
					dataType: "json",
					success: function(q) {}
				})
			};
		m()
	};
var LogTypes = {
	ERROR: 0,
	INFO: 1,
	DEBUG: 2
};
var SidePanel = function(c) {
		var a = this;
		var e = function() {
				if (c) {
					b()
				} else {
					d()
				}
				$("#OpenSidebarButton").live("click", function(f) {
					b()
				});
				$(".sidebar-close").live("click", function(f) {
					d()
				})
			};
		var b = function() {
				$(document.body).removeClass("hide-sidebar");
				var i = $(".authors-box");
				if (i.height() < i[0].scrollHeight) {
					var h = i[0].scrollHeight - i.height();
					var f = $("#TopPane").height();
					var g = Math.min(f + h, 200);
					$("#TopPane").height(g)
				}
				$("#PageSplitter").trigger("resize");
				$(a).trigger("opened")
			};
		var d = function() {
				$(document.body).addClass("hide-sidebar");
				$(a).trigger("closed")
			};
		e()
	};
var Utilities = {
	elementContainsPoint: function(e, b) {
		var g, d, f, c, a, h;
		g = e.offset().left;
		d = g + e.width();
		f = e.offset().top;
		c = f + e.height();
		a = b.x;
		h = b.y;
		if (a <= d && a >= g) {
			if (h <= c && h >= f) {
				return true
			}
		}
		return false
	},
	eventKiller: function(a) {
		a.stopPropagation();
		a.preventDefault();
		return false
	},
	clone: function(b, a) {
		if (a) {
			return $.extend(true, {}, b)
		} else {
			return $.extend({}, b)
		}
	},
	isBrowserCompatible: function() {
		return true
	},
	generateUUID: function() {
		function a() {
			return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
		}
		return (a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()).toUpperCase()
	},
	generateShortId: function() {
		function a() {
			var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			var d = Math.floor(Math.random() * 62);
			return e.substr(d, 1)
		}
		var c = "";
		for (var b = 0; b < 7; b++) {
			c += a()
		}
		return c
	},
	validateNumber: function(b) {
		var a = window.event ? b.keyCode : b.which;
		if (b.keyCode == 8 || b.keyCode == 46 || b.keyCode == 37 || b.keyCode == 39) {
			return true
		} else {
			if (a < 48 || a > 57) {
				return false
			} else {
				return true
			}
		}
	},
	setSelection: function(a, d) {
		if (document.createRange) {
			var b = document.createRange(),
				c = window.getSelection();
			b.selectNodeContents(a);
			if (d) {
				b.collapse(false)
			}
			c.removeAllRanges();
			c.addRange(b)
		} else {
			if (document.body.createTextRange) {
				var b = document.body.createTextRange();
				b.moveToElementText(a);
				if (d) {
					b.collapse(false)
				}
				b.select()
			}
		}
	},
	clearSelection: function() {
		if (window.getSelection) {
			window.getSelection().removeAllRanges()
		} else {}
	},
	addSVGClasses: function(b, c) {
		for (var a = 0; a < c.length; a++) {
			if (!Utilities.hasSVGClass(b, c[a])) {
				if (typeof b.className.baseVal != "undefined") {
					b.className.baseVal += " " + c[a]
				} else {
					b.className += " " + c[a]
				}
			}
		}
	},
	hasSVGClass: function(e, d) {
		var a = false;
		var c;
		if (typeof e.className.baseVal != "undefined") {
			c = e.className.baseVal.split(" ")
		} else {
			c = e.className.split(" ")
		}
		for (var b = 0; b < c.length; b++) {
			if (d == c[b]) {
				a = true
			}
		}
		return a
	},
	removeSVGClass: function(d, c) {
		var e = typeof d.className.baseVal != "undefined";
		if (Utilities.hasSVGClass(d, c)) {
			var b;
			if (e) {
				b = d.className.baseVal.split(" ")
			} else {
				b = d.className.split(" ")
			}
			var f = [];
			for (var a = 0; a < b.length; a++) {
				if (!(c == b[a])) {
					f.push(b[a])
				}
			}
			if (e) {
				d.className.baseVal = f.join(" ")
			} else {
				d.className = f.join(" ")
			}
		}
	},
	intToColorString: function(c) {
		if (typeof c !== "number") {
			return c
		}
		var b = "#000000";
		var a = c.toString(16);
		return b.substring(0, 7 - a.length) + a
	},
	validateEmailAddresses: function(j) {
		var c = new RegExp("^\\w(?:\\w|-|\\.|\\+(?!\\.|@))*@\\w(?:\\w|-|\\.(?!\\.))*\\.\\w{2,3}");
		var b = new RegExp('\\"?(.*?)\\"?\\s*?<\\s*(.*?)\\s*>');
		var f = j.split(",");
		var g = "";
		for (var e = 0; e < f.length; ++e) {
			var k = $.trim(f[e]);
			if (k == "") {
				continue
			}
			var l = false,
				a = "",
				h = "";
			if (k.match(b)) {
				var d = b.exec(k);
				a = d[1];
				h = d[2];
				if (h.match(c)) {
					l = true
				}
			} else {
				if (k.match(c)) {
					h = k;
					l = true
				}
			}
			if (!l) {
				return false
			}
			if (g != "") {
				g += ","
			}
			g += k
		}
		return g
	},
	trima: function(a) {
		return (a == null) ? null : a.replace(/^\s+|\s+$/g, "")
	},
	ltrima: function(a) {
		return (a == null) ? null : a.replace(/^\s+/, "")
	},
	rtrima: function(a) {
		return (a == null) ? null : a.replace(/\s+$/, "")
	},
	replaceNL: function(a, b) {
		return (a == null) ? null : a.replace(/[\n\r\t]/g, b)
	},
	onKeyPressed: function(a) {
		if (a.which == 13) {
			if (window.getSelection && window.getSelection().getRangeAt) {} else {
				if (document.selection && document.selection.createRange) {
					document.selection.createRange().pasteHTML("<br>&#x200B;");
					$(a.target).one("keypress", function(c) {
						if (c.which == 13) {
							return
						}
						var b = $(c.target);
						b.html(b.html().replace(/\u200B/g, ""))
					});
					return false
				}
			}
		}
	}
};
String.prototype.escapeHTML = function() {
	return this.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
};
String.prototype.unescapeHTML = function() {
	return this.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&amp;/g, "&")
};
$.fn.getPreText = function() {
	var b = $("<pre />").html(this.html());
	var a = this.css("display");
	if ($.browser.webkit && a != "inline") {
		b.find("div").replaceWith(function() {
			return "\n" + this.innerHTML
		})
	}
	if ($.browser.msie) {
		b.find("p").replaceWith(function() {
			return this.innerHTML + "<br>"
		})
	}
	if ($.browser.mozilla || $.browser.opera || $.browser.msie || $.browser.webkit && a == "inline") {
		if (b.find("br").length > 0) {
			b.find("br").replaceWith("\n")
		}
	}
	return b.text()
};
$.getMarkupText = function(g, f) {
	var b = g.split("\n");
	var c = b[0];
	if (b.length === 1) {
		return c
	}
	var e;
	if ($.browser.webkit && !f) {
		e = function(h) {
			return h == "" ? "<div><br></div>" : "<div>" + h + "</div>"
		}
	} else {
		if (false && $.browser.msie) {
			e = function(h) {
				return "<p>" + h + "</p>"
			}
		} else {
			e = function(h) {
				return "<br>" + h
			}
		}
	}
	b.shift();
	for (var d in b) {
		var a = b[d];
		c += e(a)
	}
	return c
};
(function($, b, a) {
	$.scrollbarWidth = function() {
		var c, d;
		if (a === b) {
			c = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body");
			d = c.children();
			a = d.innerWidth() - d.height(99).innerWidth();
			c.remove()
		}
		return a
	}
})(jQuery);
$.fn.textNodes = function() {
	var a = [];
	this.contents().each(function() {
		var b = arguments.callee;
		if (this.nodeType == 3) {
			a.push(this)
		} else {
			$(this).contents().each(b)
		}
	});
	return $(a)
};
$.expr[":"].raph = function(e, b, d, a) {
	var f = e.getAttribute("class");
	return (f && f.indexOf(d[3]) != -1)
};
var SharingDialog = function(l) {
		var k = this;
		this.open = function(m) {
			e = m;
			g()
		};
		this.setShareParameters = function(m) {
			f = m
		};
		var j = function() {
				i = $("#ShareDialog").dialog({
					autoOpen: false,
					modal: true,
					resizable: false,
					closeOnEscape: false,
					width: 400
				});
				i.find(".dialog-toggle").click(function(m) {
					var n = this.getAttribute("id");
					if (d === n) {
						return
					}
					g(n)
				});
				i.find(".close").click(function(m) {
					i.dialog("close")
				});
				$("#ShareLinkInput,#ShareEmbedInput").bind("click focus", function(m) {
					this.select()
				});
				$("#SendEmailBtn").click(function() {
					b()
				});
				i.find(".readonly-checkbox").change(function(m) {
					c();
					var n = $(this).closest(".panel").find(".url-to-copy");
					$(n).css("background-color", "#FFFFCC");
					setTimeout(function() {
						$(n).css("background-color", "#FFFFFF")
					}, 250)
				});
				$("#ShareLinkPanel .readonly-checkbox").attr("checked", true);
				$("#ShareEmbedPanel .readonly-checkbox").removeAttr("checked")
			};
		var i = null;
		var d = "ShareLink";
		var e = null;
		var f = null;
		var g = function(n) {
				n = n || d;
				i.find(".dialog-toggle").removeClass("active");
				$("#" + n).addClass("active");
				i.find(".panel").hide();
				var m = $("#" + n + "Panel");
				m.show();
				setTimeout(function() {
					m.find(".first").focus()
				}, 0);
				d = n;
				a("SharingView");
				i.dialog("open");
				c()
			};
		var c = function() {
				var o = location.host;
				var n = null;
				if (f.readonly) {
					i.find(".readonly-checkbox").attr("disabled", true).removeAttr("checked");
					i.find(".readonly-checkbox").parent().addClass("disabled")
				}
				var p = function(t) {
						if (t) {
							var s = f.editId
						} else {
							if (f.readId) {
								var s = f.readId
							} else {
								var r = Utilities.generateShortId();
								f.readId = r;
								$.ajax({
									type: "POST",
									url: "/webservice/document/share",
									data: {
										uuid: l,
										shortId: f.editId,
										readId: r
									}
								});
								var s = r
							}
						}
						return s
					};
				if ($("#ShareLinkPanel").is(":visible")) {
					n = p($("#ShareLinkPanel .readonly-checkbox").is(":checked"));
					var q = "http://" + o + "/" + n;
					$("#ShareLinkInput").val(q)
				}
				if ($("#ShareEmbedPanel").is(":visible")) {
					n = p($("#ShareEmbedPanel .readonly-checkbox").is(":checked"));
					var m = '<iframe src="http://' + o + "/" + n + '?embedded=true" width="100%" height="600" style="border:1px solid #ddd;"></iframe>';
					$("#ShareEmbedInput").val(m)
				}
			};
		var b = function(o) {
				var m = Utilities.validateEmailAddresses($("#ShareEmailTo").val());
				if (m) {
					var n = $("#ShareEmailMsg").val();
					n = n.replace(new RegExp("\\r", "g"), "\n");
					a("WaitView");
					i.find(".error-box").hide();
					h(m, n)
				} else {
					i.find(".error-box").text("Please verify that all email addresses are valid").show()
				}
			};
		var h = function(m, o) {
				var n = f.editId || f.readId;
				$.ajax({
					type: "POST",
					url: "/webservice/document/email",
					data: {
						uuid: l,
						shortId: n,
						recipients: m,
						message: o,
						authorId: e
					},
					success: function() {
						a("SuccessView")
					},
					error: function(p, r, q) {
						a("ErrorView")
					}
				})
			};
		var a = function(m) {
				i.find(".view").hide();
				$("#" + m).show()
			};
		j()
	};
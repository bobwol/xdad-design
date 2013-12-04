;(function(){
	String.prototype.escapeHTML = function() {
		return $('<div />').text(this+"").html();
	}
	String.prototype.unescapeHTML = function() {
		return $('<div />').html(this+"").text();
	}
	//创建docview结构
	$.fn.annotate = function(opt){
		
		var ins = this.data("Annotate");
		
		if(ins){
			ins.update&&ins.update(opt)
		}else{
			var ins = new Annotate(this,opt)
			this.data("Annotate",ins);
		}
		return this;
	}

	function Annotate(el,opt){
		
		var $el = $(el);
		var width = $el.width();
		var height = $el.height();
		var html = $el.html();
		$el.remove();
		var str = [
			'<div class="annotation-toolbar" style="display: ;">',
				'<!--Annotation Buttons-->',
				'<div class="annotation-btns">',
				'	<span original-title="Comment" class="btn split-btn comment-btn" mode="comment-point">',
				'		<span class="label">Comment</span>',
				'		<span class="arrow"></span>',
				'	</span>',
				'	<span original-title="Draw" class="btn text-btn drawing-btn" mode="drawing">Draw</span>',
				'	<span original-title="Highlight" class="btn text-btn highlight-btn" mode="highlight">Highlight</span>',
				'	<span original-title="Text" class="btn text-btn textbox-btn" mode="textbox">Text</span>',
				'	<span original-title="Strikeout" class="btn text-btn strikeout-btn" mode="strikeout">Strikeout</span>',
				'</div>',

				'<!--Annotation Settings-->',
				'<div class="settings-container">',
				'	<div style="display: none;" class="annotation-settings">',
				'		<div type="highlight comment-text">',
				'			<div class="label">Highlight tool:</div>',
				'			<div class="colors">',
				'				<div class="color" color="FFF688" style="background-color:#FFF688;"></div>',
				'				<div class="color" color="FCCC6A" style="background-color:#FCCC6A;"></div>',
				'				<div class="color" color="BFF694" style="background-color:#BFF694;"></div>',
				'				<div class="color" color="98DDFF" style="background-color:#98DDFF;"></div>',
				'			</div>',
				'		</div>',
				'		<div type="textbox">',
				'			<div class="label">Text tool:</div>',
				'			<div class="colors">',
				'				<div class="color" color="000000" style="background-color:#000000;"></div>',
				'				<div class="color" color="FF0000" style="background-color:#FF0000;"></div>',
				'				<div class="color" color="0000FF" style="background-color:#0000FF;"></div>',
				'				<div class="color" color="00AA00" style="background-color:#00AA00;"></div>',
				'			</div>',
				'			<div class="size">',
				'				<select>',
				'					<option value="8">8pt</option>',
				'					<option value="10">10pt</option>',
				'					<option value="12">12pt</option>',
				'					<option value="14">14pt</option>',
				'					<option value="18">18pt</option>',
				'					<option value="24">24pt</option>',
				'					<option value="36">36pt</option>',
				'				</select>',
				'			</div>',
				'			<div class="fill">',
				'				<div class="color" color=""></div>',
				'				<div class="color" color="FFFFFF" style="display:none;"></div>',
				'			</div>',
				'		</div>',
				'		<div type="drawing">',
				'			<div class="label">Draw tool:</div>',
				'			<div class="colors">',
				'				<div class="color" color="000000" style="background-color:#000000;"></div>',
				'				<div class="color" color="FF0000" style="background-color:#FF0000;"></div>',
				'				<div class="color" color="0000FF" style="background-color:#0000FF;"></div>',
				'				<div class="color" color="00AA00" style="background-color:#00AA00;"></div>',
				'			</div>',
				'		</div>',
				'		<!--<div type="point comment-point">point options</div>-->',
				'		<!--<div type="area comment-area">area options</div>-->',
				'		<!--<div type="strikeout">strikeout options</div>-->',
				'	</div>',
				'</div>',
			'</div>',
			'<!--Dropdown-->',
			'<div class="dropdown">',
			'	<div mode="comment-point">Point Comment</div>',
			'	<div mode="comment-area">Area Comment</div>',
			'	<div mode="comment-text">Text Comment</div>',
			'</div>',
			'<div id="DocViewer" class="docviewer">',
			'	<div class="doc subpx" style="font-size: 10px;">',
			'		<div style="width:79.75em; height:121em;" class="page-outer">',
			'			<div style="width:79.75em; height:121em;" class="page loading" id="Page1">',
			'				<div class="layer text">',		
			'				</div>',
			'			</div>',
			'		</div>',
			'	</div>',
			'</div>'
		].join('');
		var $container = $('<div></div>').appendTo($('body'));
		$container.html(str);
		var $layer_text = $container.find('.layer.text');
		$layer_text.html(html);

		
		(function() {
			var jAnnoToolbar = $('.annotation-toolbar');
			var onresize = function() {
				var width = $(document.body).width();
				jAnnoToolbar.toggleClass('narrow', width < 765);
			}
			$(window).resize(onresize);
			onresize();
		})();
		
		
		//Doc parameters
		window._doc = {
			"status": 3,
			"socketioHost": "//socket.crocodoc.com:5555/",
			"objects": [{
				"name": "weixj",
				"created": 1372496953.0,
				"unsaved": true,
				"modified": 1372496953.0,
				"class": "User",
				"id": 1,
				"uuid": "f87230db-0869-301f-8f53-db687c799774"
			}],
			"pageStatuses": "",
			"demo": true,
			"editable": true,
			"webserviceUrl": "//crocodoc.com/webservice/",
			"step": "DONE",
			"session": "sdf",
			"user": "f87230db-0869-301f-8f53-db687c799774",
			"assetsLocation": "./",
			"metadata": {
				"numpages": 1,
				"fonts": [{
					"last": 13,
					"id": 497,
					"first": 1
				}],
				"pages": {},
				"defaults": {
					"width": 522.0,
					"height": 792.0
				}
			}
		};

		//Initial parameters
		var viewerParams = {
			"id": "DocViewer",
			"page": 1,
			"zoom": "auto"
		};


		//Initialize core
		var docViewer = new DocViewer(viewerParams);

		docViewer.ready(function(e) {

			//Viewer state
			var currentpage = 1;
			var numpages = e.numpages;
			updateButtonState();

			//Helper methods ----------------------------

			function updateButtonState() {
				$('.current-page').val(currentpage + ' of ' + numpages);
				$('.prev').toggleClass('disabled', currentpage == 1);
				$('.next').toggleClass('disabled', currentpage == numpages);
			}

			//Toolbar events ----------------------------
			$('.zoom-in').click(function() {
				docViewer.zoom('in');
			});
			$('.zoom-out').click(function() {
				docViewer.zoom('out');
			});
			$('.prev').click(function() {
				docViewer.scrollTo('prev');
			});
			$('.next').click(function() {
				docViewer.scrollTo('next');
			});
			$('.current-page').click(function() {
				$(this).addClass('active').val(currentpage).select();
			});
			$('.current-page').keyup(function(e) {
				if (e.which == 13) {
					$(this).blur();
				}
			});
			$('.current-page').blur(function() {
				$(this).removeClass('active');
				var num = Number($(this).val());
				if (num != currentpage && num > 0 && num <= numpages) {
					docViewer.scrollTo(num);
				} else {
					updateButtonState();
				}
			});

			//Button events -----------------------------
			$('.btn').mousedown(function() {
				var jBtn = $(this);
				if (!jBtn.hasClass('disabled')) {
					jBtn.addClass('active');
				}
			});
			$(document.body).mouseup(function() {
				$('.btn.active').removeClass('active');
			});

			//Viewer events -----------------------------
			docViewer.bind({
				'pagechange': function(e) {
					currentpage = e.page;
					updateButtonState();
				},
				'unavailable': function(e) {
					var data = {
						session: _doc.session,
						msg: 'page unavailable: ' + e.page
					};
					$.ajax({
						url: '/webservice/document/log',
						data: data
					});
				}
			});
		});

		//Viewer state
		var selected = null; //currently selected annotation
		var settings = null;

		var currentMode = null;
		var prevMode = 'comment-point'; //tracks which mode should be triggered when the annotate button is clicked
		var focusedMode = null; //TODO: should just use selected.annotation.type instead of this
		var keepAnnoTBOpen = $.cookie('annotation-toolbar.show') === 'true' || false; //indicates if the annotation toolbar should still be open when no mode is selected or annotation selected
		var annoTBOpen = false; //helper variable to help with animations
		var currentSettingsMode = null;

		//Wait until viewer is ready
		docViewer.ready(function(e) {
			$('.annotate').click(function() {
				if (annoTBOpen && !keepAnnoTBOpen) {
					//The anno TB had been open only because an annotation was focused, so don't toggle keepAnnoTBOpen to true
				} else {
					keepAnnoTBOpen = !keepAnnoTBOpen;
				}

				$.cookie('annotation-toolbar.show', keepAnnoTBOpen, {expires:365});
				if (!keepAnnoTBOpen) {
					//remember the previous mode
					prevMode = currentMode;
					docViewer.mode(null);
				}
				else {
					//re-enable the previous  mode
					docViewer.mode(prevMode);
				}
				updateAnnotationToolbar();
			});

			$('.btn.download').click(function(){
				//hack to deselect current annotation
				docViewer.mode(currentMode);
			});

			$('.annotation-btns span[mode]').click(function(e){
				keepAnnoTBOpen = true; //if a user ever clicks on an annotation button, make sure toolbar stays open

				if ($(this).hasClass('selected')) {
					docViewer.mode(null);
				} else {
					docViewer.mode($(this).attr('mode'));
				}
			});

			//Comment button events ---------------------
			$('.split-btn .arrow').bind('mousedown click mouseup', function(){
				return false;
			});
			$('.split-btn .arrow').mousedown(function(){
				$(this).parent().addClass('active');
			});
			$('.split-btn .arrow').click(function(){
				var jDropdown = $('.dropdown');
				if(jDropdown.is(':hidden')) {
					var offset = $(this).parent().offset();
					var height = $(this).parent().outerHeight();
					jDropdown.css({
						'top': offset.top+height+'px',
						'left': offset.left+'px'
					}).show();
				}
				else {
					jDropdown.hide();
					$('.btn.active').removeClass('active');
				}
			});
			$('.dropdown div[mode]').click(function(){
				var mode = $(this).attr('mode');
				docViewer.mode(mode);
				$('.dropdown').hide();
			});
			$('.dropdown').mousedown(function(){
				return false;
			});
			$(document.body).mousedown(function(){
				if($('.dropdown').is(':visible')) {
					$('.dropdown').hide();
					$('.split-btn.active').removeClass('active');
				}
			});

			//Viewer events -----------------------------
			docViewer.bind({
				'modechange': function(e) {
					currentMode = e.mode;

					//update toolbar
					if(currentMode && currentMode.split('-')[0] == 'comment') {
						//update comment mode
						$('.comment-btn').attr('mode', currentMode);
					}

					//if the use clicks an annotation button (e.g. Draw), always keep toolbar open
					if (currentMode) {
						keepAnnoTBOpen = true;
					}

					updateAnnotationToolbar();
				},
				'select': function(e) {
					selected = e.object;
					focusedMode = selected.type;
					updateAnnotationToolbar();
				},
				'deselect': function(e) {
					selected = null;
					focusedMode = null;

					//This timeout eliminates some unnecessary animations
					setTimeout(function(){ updateAnnotationToolbar(); }, 0);
				}
			});

			//Settings events ---------------------------
			$('.colors .color').click(function(){
				//not selected?
				if(!$(this).is('.selected')) {
					$('.colors .color.selected').removeClass('selected');
					$(this).addClass('selected');
					var color = $(this).attr('color');

					//change color setting
					var type = (selected ? selected.type : currentMode);
					if(type == 'highlight' || type == 'comment-text') {
						docViewer.settings('highlight.color', color);
					}
					else if(type == 'textbox') {
						docViewer.settings('textbox.color', color);
					}
					else if(type == 'drawing') {
						docViewer.settings('drawing.color', color);
					}
				}
			});

			$('.fill .color').click(function(){
				//change fill color setting
				$('.fill .color').toggle();
				var color = $('.fill .color:visible').attr('color') || null;
				docViewer.settings('textbox.fill', color);
			});

			$('.size select').change(function(){
				//set size setting
				var size = Number($(this).val());
				docViewer.settings('textbox.size', size);
			});

			var updateAnnotationToolbar = function(dontAnimate) {
				var jAnnoToolbar = $('.annotation-toolbar');
				var jAnnoBtn = $('.annotate');

				if (keepAnnoTBOpen || focusedMode) {
					if (!annoTBOpen) {
						dontAnimate ? jAnnoToolbar.show() : jAnnoToolbar.show('slide', { direction: 'up' }, 200);
						annoTBOpen = true;
					}

					if (!jAnnoBtn.hasClass('selected')) {
						jAnnoBtn.addClass('selected');
					}
				} else {
					if (annoTBOpen) {
						dontAnimate ? jAnnoToolbar.hide() : jAnnoToolbar.hide('slide', { direction: 'up' }, 200);
						annoTBOpen = false;
					}

					jAnnoBtn.removeClass('selected');

					if (selected) {
						selected.deselect();
					}
				}

				updateSettings(dontAnimate);
			}

			var updateSettings = function(dontAnimate) {
				var jSettings = $('.annotation-settings');
				var jAnnoBtns = $('.annotation-btns');
				var newSettingsMode = focusedMode || currentMode;

				jAnnoBtns.find('.selected').removeClass('selected');

				if (!keepAnnoTBOpen && !newSettingsMode) {
					//hide flyout menu
					jSettings.hide().find('div[type]:visible').hide();
					currentSettingsMode = null;
					return;

				} else if (newSettingsMode) {
					//no settings?
					if (jSettings.find('div[type~='+newSettingsMode+']').length == 0) {
						//hide flyout menu
						if (currentSettingsMode) {
							dontAnimate ? jSettings.hide() : jSettings.hide('slide', { direction: 'left' }, 200);
							currentSettingsMode = null;
						}
					//new settings?
					} else if (newSettingsMode != currentSettingsMode) {
						var menu1 = jSettings.find('div[type~='+currentSettingsMode+']').get(0);
						var menu2 = jSettings.find('div[type~='+newSettingsMode+']').get(0);
						//new menu?
						if(menu1 != menu2) {
							//update flyout menu
							jSettings.hide()
							.find('div[type]').hide().end()
							.find('div[type~='+newSettingsMode+']').show();
							dontAnimate ? jSettings.show() : jSettings.show('slide', { direction: 'left' }, 200);
							currentSettingsMode = newSettingsMode;
						}
					}

					//Emphasize an annotation tool button.
					//comment?
					if(newSettingsMode == 'area' || newSettingsMode == 'point') {
						jAnnoBtns.find('.comment-btn').addClass('selected');
					}
					//comment text?
					else if(newSettingsMode == 'highlight' && selected && selected.waiting) {
						jAnnoBtns.find('.comment-btn').addClass('selected');
					}
					//other
					else {
						jAnnoBtns.find('.btn[mode='+newSettingsMode+']').addClass('selected');
					}

				} else {
					//hide flyout menu
					if (currentSettingsMode) {
						dontAnimate ? jSettings.hide() : jSettings.hide('slide', { direction: 'left' }, 200);
						currentSettingsMode = null;
					}
					return;
				}

				//update settings
				jSettings.find('.colors .color.selected').removeClass('selected');

				//selected annotation?
				if(selected) {
					//has color?
					if(selected.color) {
						jSettings.find('.colors .color:visible').each(function(){
							if($(this).attr('color') == selected.color) {
								//select color
								$(this).addClass('selected');
							}
						});
					}
					//has size?
					if(selected.size) {
						jSettings.find('.size select').val(selected.size);
					}
					//has fill?
					if(focusedMode == 'textbox') {
						var fill = selected.fill || '';
						jSettings.find('.fill .color').hide();
						jSettings.find('.fill .color[color="'+fill+'"]').show();
					}
				}
				//show current defaults
				else {
					//set color
					var color = null;
					if(newSettingsMode == 'highlight' || newSettingsMode == 'comment-text') {
						color = settings.highlight.color;
					}
					else if(newSettingsMode == 'textbox') {
						color = settings.textbox.color;
					}
					else if(newSettingsMode == 'drawing') {
						color = settings.drawing.color;
					}
					if(color) {
						jSettings.find('.colors .color:visible').each(function(){
							if($(this).attr('color') == color) {
								//select color
								$(this).addClass('selected');
							}
						});

					}
					if(newSettingsMode == 'textbox') {
						//set size
						jSettings.find('.size select').val(settings.textbox.size);

						//set fill
						var fill = settings.textbox.fill || '';
						jSettings.find('.fill .color').hide();
						jSettings.find('.fill .color[color="'+fill+'"]').show();
					}
				}
			}

			//Toolbar state ----------------
			settings = docViewer.settings();
			updateAnnotationToolbar(true);
		});

		var setupTooltips = function() {
			$('.btn').tipsy({ className:'btn-tooltip', opacity:0.75, noArrow:false, voffset:1, trigger:'manual' });
			$('.annotation-toolbar').on({
				'mouseenter': function() {$(this).tipsy('show'); },
				'mouseleave mousedown': function() { $(this).tipsy('hide'); }
			}, '.narrow .btn[original-title], .btn.narrow[original-title]:not(.selected)');
			$('.btn[original-title] .arrow').mousedown(function(){
				$(this).closest('.narrow .btn[original-title]').tipsy('hide');
			});
		};
		setupTooltips();
	}
	
})();
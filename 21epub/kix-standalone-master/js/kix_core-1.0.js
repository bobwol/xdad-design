function f(a) {
	throw a;
}
var k = void 0,
	l = !0,
	m = null,
	q = !1,
	r = "",
	aa = "\u0003",
	aaa = "\u0003\n",
	ba = "\t",
	da = "\n",
	baa = "\nCategory: ",
	caa = "\nEvent trace:\n",
	ea = "\x0B",
	fa = "\f",
	ga = "\u0010",
	ha = "\u0011",
	ja = "\u0012",
	daa = "\u0012\u001c\u0011",
	ka = "\u0019",
	la = "\u001a",
	ma = "\u001b",
	na = "\u001c",
	oa = "\u001d",
	pa = "\u001e",
	qa = "\u001f",
	s = " ",
	eaa = "  font-family: '",
	faa = "  font-style: ",
	gaa = "  font-weight: ",
	haa = "  src:",
	iaa = " (",
	jaa = " - Delete: ",
	kaa = " - Redraw: ",
	laa = " //@ sourceURL=",
	maa = " >= ",
	naa = " @ ",
	oaa = " Number: ",
	paa = " [",
	qaa = " average: ",
	raa =
		" delta:",
	saa = " docs-icon-",
	taa = " docs-icon-img-legacy",
	uaa = " due to: ",
	vaa = " format('",
	waa = " in range [",
	xaa = " is already registered.",
	yaa = " is not a valid color string",
	zaa = " is not inside a table.",
	Aaa = " local('",
	Baa = " multiple times.",
	Caa = ' name="',
	Daa = " overflow:auto;",
	Eaa = " should have moved into segment ",
	Faa = " should not be serialized and sent to the server.",
	Gaa = " should not contain ",
	Haa = ' target="_blank"',
	Iaa = " total: ",
	Jaa = ' type="',
	Kaa = " unexpectedly. ",
	Laa = " url(",
	Maa = " was set after the initial load timing values were reported.",
	Naa = " { ",
	Oaa = " }",
	ra = "!",
	sa = '"',
	Paa = '" class="docs-butterbar-warning-link">',
	Qaa = '" class="docs-butterbar-warning-link">Click here</span> to remove the problematic changes and continue editing.',
	Raa = '" style="',
	Saa = '" style="background-color:',
	Taa = '" style="width:',
	ta = '">',
	Uaa = '">&nbsp;</span>',
	Vaa = '"></body></html>',
	Waa = '"></span><span style="position: absolute; white-space:nowrap;',
	va = "#",
	Xaa = "#$1$1$2$2$3$3",
	wa = "#000000",
	Yaa = "#1155cc",
	Zaa = "#666666",
	$aa = "#808080",
	aba = "#aaa",
	bba = "#f00",
	xa = "#fff",
	ya = "$",
	cba = "$$$$",
	dba = "$1",
	za = "$i",
	Aa = "%",
	eba = "%27",
	Ba = "&",
	Ca = "&amp;",
	Da = "&gt;",
	fba = "&ldquo;",
	gba = "&lrm;",
	hba = "&lsquo;",
	Ea = "&lt;",
	Fa = "&nbsp;",
	iba = "&nbsp;</span>",
	jba = "&quot;",
	kba = "&rdquo;",
	lba = "&rlm;",
	mba = "&rsquo;",
	Ga = "'",
	nba = "')",
	oba = "'),",
	pba = "';\n",
	qba = "'Times New Roman',serif",
	Ha = "(",
	rba = "(\\d*)(\\D*)",
	sba = "(^",
	tba = "(c)",
	uba = "(licensed\\/font\\/|licensed\\/font\\?kit=|",
	vba = "(r)",
	Ia = ")",
	wba = ") during ",
	xba = ")([a-z])",
	yba = ")?$",
	Ja = "*",
	Ka = "+",
	zba = "+Ctrl+X",
	Aba = "+H",
	La = ",",
	Ma = ", ",
	Bba = ", number of spacers = ",
	Cba = ",i",
	Na = "-",
	Dba = "--\x3e",
	Eba = "-10000px",
	Fba = "-1000px",
	Gba = "-active",
	Hba = "-checkbox",
	Iba = "-checked",
	Jba = "-closure-parent-stylesheet",
	Kba = "-closure-rule-index",
	Oa = "-content",
	Lba = "-disabled",
	Mba = "-e-",
	Nba = "-f",
	Oba = "-focused",
	Pba = "-highlight",
	Qba = "-hover",
	Rba = "-moz",
	Sba = "-moz-transform",
	Tba = "-ms",
	Uba = "-ms-transform",
	Vba = "-n",
	Wba = "-o",
	Xba = "-o-transform",
	Yba = "-open",
	Pa = "-rtl",
	Zba = "-selected",
	$ba = "-sprite",
	aca = "-transition:opacity 1s linear;",
	bca = "-v",
	cca = "-webkit",
	dca = "-webkit-nbsp-mode",
	eca = "-webkit-transform",
	Qa = ".",
	Ra = "...",
	Sa = "/",
	Ta = "//",
	Ua = "/a/",
	fca = "/a/$1/drawings/",
	gca = "/a/drawings/",
	hca = "/ccc",
	ica = "/comment",
	Va = "/create",
	jca = "/d/",
	kca = "/drawings/a/",
	Wa = "/edit",
	lca = "/font/getmetadata",
	mca = "/jserror",
	nca = "/leave",
	oca = "/localpresent",
	pca = "/lv",
	qca = "/m",
	rca = "/prefs",
	sca = "/preview",
	tca = "/renderdata",
	uca = "/url",
	vca = "/view",
	Xa = "0",
	wca = "00",
	xca = "000",
	Ya = "0px",
	Za = "1",
	yca = "1, 2, 3",
	zca = "1.0",
	Aca = "1.15",
	Bca = "1.15 lines spaced",
	Cca = "1.5",
	Dca = "1.5 lines spaced",
	Eca = "1.8",
	$a = "1.9",
	Fca = "1.9.2",
	Gca = "1/2",
	Hca = "1/3",
	Ica = "1/4",
	Jca = "1/5",
	Kca = "1/6",
	Lca = "1/8",
	ab = "10",
	bb = "10.0",
	Mca = "11",
	cb = "12",
	db = "13",
	Nca = "15",
	eb = "1px",
	fb = "2",
	Oca = "2.0",
	Pca = "2/3",
	Qca = "2/5",
	gb = "3",
	Rca = "3/4",
	Sca = "3/5",
	Tca = "3/8",
	hb = "4",
	Uca = "4/5",
	Vca = "400px",
	ib = "5",
	Wca = "5/6",
	Xca = "5/8",
	Yca = "525",
	Zca = "528",
	$ca = "531",
	ada = "535.3",
	jb = "6",
	kb = "7",
	bda = "7/8",
	lb = "8",
	mb = "9",
	cda = "9.0",
	nb = ":",
	ob = ": ",
	dda = ":0px;",
	pb = ";",
	eda = ";\n",
	fda = ";\n}",
	gda = "; display: ",
	hda = "; display: none;",
	ida = ";background-color:",
	jda = ";border-bottom-color:",
	kda = ";border-top-color:",
	lda = ";color:",
	mda = ";domain=",
	nda = ";expires=",
	oda = ";font-style:",
	pda = ";font-variant:",
	qda = ";font-weight:",
	rda = ";path=",
	sda = ";secure",
	tda = ";text-decoration:",
	uda = ";vertical-align:",
	vda = ";width:",
	qb = "<",
	wda = '<!DOCTYPE html><html><body><span style="position: absolute; white-space:nowrap; font-size:0px;',
	xda = "<--",
	yda = "</bdo>",
	rb = "</span>",
	zda = "</span></a>",
	Ada = "</span></span>",
	Bda = "</span></span></a>",
	Cda = "<==",
	Dda = "<=>",
	Eda = '<META HTTP-EQUIV="refresh" content="0; url=',
	sb = '<a href="',
	Fda = '<bdo dir="ltr">',
	Gda = '<bdo dir="rtl">',
	Hda = '<br class="kix-line-break">',
	Ida = '<div class="goog-inline-block">Reload this page to enable Offline Docs.<span id="docs-chrome-needchromeappbutter-reload-link" class="docs-butterbar-link">Reload</span></div>',
	Jda = '<div style="',
	tb = '<img src="',
	ub = '<span class="',
	Kda = '<span class="goog-inline-block" style="width:',
	vb = '<span id="',
	wb = '<span style="',
	Lda = '<span style="font-size:',
	Mda = '<span style="white-space: pre;">',
	Nda = '<span style="width:100px;display:inline-block;position:relative;"/>',
	xb =
		"<span>",
	zb = "=",
	Oda = "==>",
	Ab = ">",
	Cb = "?",
	Db = "@",
	Pda = "@font-face ",
	Qda = "@font-face {\n",
	Eb = "A",
	Rda = "A delete entity event was fired for an entity that doesn't exist.",
	Sda = "A moved in child index should not be greater a child marked for layout.",
	Tda = "A moved in child index should not be greater than the overflow child.",
	Uda = "A tether entity event was fired for an entity that doesn't exist: ",
	Vda = "A transaction was running for a long time",
	Wda = "A, B, C",
	Xda = "ACCESS_STATE_COMMENTABLE",
	Yda = "ACCESS_STATE_EDITABLE",
	Zda = "APPLET",
	$da = "AREA",
	aea = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
	bea = "Add comment ||||",
	cea = "Add fonts ||||",
	dea = "Add fonts...",
	eea = "Add space after paragraph",
	fea = "Add space before paragraph",
	gea = "Adding a task to a segment that doesn't yet exist",
	hea = "Adding child segment with no renderer.",
	iea = "Adding child to layout for child not in this segment.",
	jea = "Adding children to layout without an offset.",
	kea = "Align",
	lea = "Alignment: center",
	mea = "Alignment: justified",
	nea = "Alignment: left",
	oea = "Alignment: right",
	pea = "All entries in segmentsNeedLayout_ should be greater than the current segment index.",
	qea = "All selected ranges should be contained in a single section.",
	rea = "Alt",
	sea = "Alt+",
	tea = "Alt+/",
	uea = "Alt+A",
	vea = "Alt+B",
	wea = "Alt+E",
	xea = "Alt+Enter",
	yea = "Alt+F",
	zea = "Alt+H",
	Aea = "Alt+I",
	Bea = "Alt+O",
	Cea = "Alt+Shift+",
	Dea = "Alt+Shift+5",
	Eea = "Alt+Shift+Down",
	Fea = "Alt+Shift+Up",
	Gea = "Alt+Shift+~",
	Hea = "Alt+T",
	Iea = "Alt+V",
	Jea = "An add entity event was fired for an entity that doesn't exist: ",
	Kea = "An empty title was set on the doc",
	Lea = "An entity redraw was requested for an entity that doesn't exist: ",
	Mea = "An error prevented this document from being saved. Please copy your changes via the ",
	Nea = "An update entity event was fired for an entity that doesn't exist.",
	Oea = "Android",
	Pea = "ApplicationMetadata",
	Qea = "Apply 'Heading 1'",
	Rea = "Apply 'Heading 2'",
	Sea = "Apply 'Heading 3'",
	Tea = "Apply 'Heading 4'",
	Uea = "Apply 'Heading 5'",
	Vea = "Apply 'Heading 6'",
	Wea = "Apply 'Normal text'",
	Xea = "Apply 'Subtitle'",
	Yea = "Apply 'Title'",
	Zea = "Arial",
	$ea = "Arial,sans-serif",
	afa = "At least one of the marked ranges in the selection are corrupted and can not be fixed.",
	bfa = "Attempted to install ",
	cfa = "Attempted to install a feature before base features have been registered.",
	Fb = "B",
	dfa = "BASE",
	Gb = "BODY",
	efa = "BR",
	Hb = "BUTTON",
	Ib = "Ba",
	ffa = "Bad url ",
	gfa = "Binding a non-existent action to function ",
	hfa = "Bold",
	ifa = "Bookmark",
	jfa = "Border color",
	kfa = "Border style",
	lfa = "Both forceLayout and opt_forceNoContents are true.",
	mfa =
		"Bottom",
	nfa = "Bottom of page",
	ofa = "Bullet",
	pfa = "Bullet \u25cf",
	qfa = "Bulleted list",
	Jb = "C",
	rfa = "CLIENT_ERROR",
	sfa = "COL",
	tfa = "COMMAND",
	ufa = "CSS1Compat",
	vfa = "CURSOR_POSITION",
	wfa = "Called getHeight with a non-zero segment: ",
	xfa = "Called getLineSpacerRange with a location outside this line.",
	yfa = "Called getSegmentForSpacerIndex with an index outside this line.",
	zfa = "Called hasMovedInSegmentBeenLaidOut with a child index that was never moved in.",
	Afa = "Called layout with a non-zero segment index: ",
	Bfa =
		"Calling deleteSpacers with invalid params: startIndex =",
	Cfa = "Calling insertDelta with invalid parameters - index:",
	Dfa = "Calling redrawOverlay with an invalid range: [",
	Efa = "Calling redrawRange with an invalid range: [",
	Kb = "Cancel",
	Ffa = "Cannot check for paragraph start with an out of bounds spacer index: ",
	Gfa = "Cannot create storage adapters for unsupported browser",
	Hfa = "Cannot initialize queue without a record",
	Ifa = "Cannot modify file or directory",
	Jfa = "Cell was inserted but has no renderer for its segment.",
	Kfa = "Center",
	Lfa = "Center align",
	Mfa = "Changes took too long to be received by server. Shutting down to prevent data loss.",
	Nfa = "Chat",
	Ofa = "Chat ||||",
	Pfa = "Child ",
	Qfa = "Child can not be rendered or moved in a segment above.childType was ",
	Rfa = "Child doesn't fit into the given available space.",
	Sfa = "Chrome",
	Tfa = "Chrome app is installed and enabled, but not effective (indicating a Chrome bug)",
	Ufa = "Circular reference detected",
	Vfa = "Clear all items",
	Wfa = "Clear formatting",
	Xfa = "Cold start occurred while online",
	Yfa = "Comment",
	Zfa = "Comment layout should never result in a deleted segment.",
	Lb = "Comments",
	$fa = "Compact controls",
	Mb = "Component already rendered",
	Nb = "Content-Type",
	aga = "Context Menu",
	Ob = "Copy",
	bga = "Copy formatting",
	cga = "Copy link URL",
	dga = "Copy ||||",
	ega = "Corresponding footnote not found.",
	fga = "Could not create embedded object view for type: ",
	gga = "Could not find object to update.",
	hga = "Count words",
	iga = "Courier New",
	jga = "Ctrl",
	kga = "Ctrl+",
	lga = "Ctrl+,",
	mga = "Ctrl+.",
	nga = "Ctrl+/",
	oga = "Ctrl+A",
	pga = "Ctrl+Alt+",
	qga = "Ctrl+Alt+C",
	rga = "Ctrl+Alt+F",
	sga = "Ctrl+Alt+M",
	tga = "Ctrl+Alt+Num-",
	uga = "Ctrl+Alt+Shift+A",
	vga = "Ctrl+Alt+Shift+G",
	wga = "Ctrl+Alt+Shift+I",
	xga = "Ctrl+Alt+Shift+K",
	yga = "Ctrl+Alt+Shift+M",
	zga = "Ctrl+Alt+V",
	Aga = "Ctrl+B",
	Bga = "Ctrl+C",
	Cga = "Ctrl+Enter",
	Dga = "Ctrl+F",
	Ega = "Ctrl+G",
	Fga = "Ctrl+I",
	Gga = "Ctrl+Insert",
	Hga = "Ctrl+K",
	Iga = "Ctrl+O",
	Jga = "Ctrl+P",
	Kga = "Ctrl+S",
	Lga = "Ctrl+Shift+,",
	Mga = "Ctrl+Shift+.",
	Nga = "Ctrl+Shift+7",
	Oga = "Ctrl+Shift+8",
	Pga = "Ctrl+Shift+A",
	Qga = "Ctrl+Shift+C",
	Rga = "Ctrl+Shift+Down",
	Sga = "Ctrl+Shift+E",
	Tga = "Ctrl+Shift+Esc",
	Uga = "Ctrl+Shift+F",
	Vga = "Ctrl+Shift+G",
	Wga = "Ctrl+Shift+J",
	Xga = "Ctrl+Shift+K",
	Yga = "Ctrl+Shift+L",
	Zga = "Ctrl+Shift+Left",
	$ga = "Ctrl+Shift+R",
	aha = "Ctrl+Shift+Right",
	bha = "Ctrl+Shift+Up",
	cha = "Ctrl+Shift+V",
	dha = "Ctrl+Shift+Y",
	eha = "Ctrl+Shift+Z",
	fha = "Ctrl+Shift+\\",
	gha = "Ctrl+Space",
	hha = "Ctrl+U",
	iha = "Ctrl+V",
	jha = "Ctrl+X",
	kha = "Ctrl+Y",
	lha = "Ctrl+Z",
	mha = "Ctrl+\\",
	nha = "Ctrl+open-square-bracket",
	oha = "Ctrl+semicolon",
	pha = "Ctrl+~",
	qha = "Cursor is well beyond the end of the document.",
	Pb = "Cut",
	Qb =
		"D",
	Rb = "DIV",
	rha = "DOCS_",
	sha = "DOCS_EMBED_",
	tha = "Database error.",
	uha = "Debug=true",
	vha = "Decrease indent",
	wha = "Define",
	xha = "Define word",
	yha = "Delete",
	zha = "Delete Comment",
	Aha = "Delete bookmark",
	Bha = "Delete column",
	Cha = "Delete row",
	Dha = "Delete table",
	Eha = "Delete table of contents",
	Fha = "Deleted renderers not processed.",
	Gha = "Deleting from page greater than total page number.",
	Hha = "Deleting non-tethered entity.",
	Iha = "Deleting segment with children in it.",
	Jha = "Dismiss",
	Kha = "DocIdEntityTypeIndex",
	Lha = "Docs Help",
	Mha = "Document",
	Sb = "DocumentCommands",
	Tb = "DocumentCommandsMetadata",
	Ub = "DocumentCommandsMetadataStaging",
	Vb = "DocumentCommandsStaging",
	Nha = "DocumentEntities",
	Oha = "DocumentLocks",
	Xb = "Documents",
	Pha = "Double spaced",
	Qha = "Download as",
	Rha = "Download as Microsoft Word (.docx)",
	Sha = "Download as OpenDocument Format (.odt)",
	Tha = "Download as PDF Document (.pdf)",
	Uha = "Download as Plain Text (.txt)",
	Vha = "Download as Rich Text Format (.rtf)",
	Wha = "Download as Web Page (.html, zipped)",
	Xha = "Drawing",
	Yha = "Drawing...",
	Zha = "DrawingViews can be created only from drawings.",
	$ha = "Drawing|",
	Yb = "E",
	aia = "EMBED",
	Zb = "Edit",
	bia = "Edit - ",
	cia = "Edit Menu",
	dia = "Edit description...",
	eia = "Email as attachment...",
	fia = "Email collaborators...",
	gia = "End",
	hia = "End marker being deleted.",
	iia = "EndToEnd",
	jia = "Equation...",
	kia = "Error %s: %s",
	lia = "Error checking store for user.",
	mia = "Error in protected function: ",
	nia = "Error initializing the database.",
	oia = "Error opening database.",
	pia = "Error pushing document id",
	qia = "Error reading FontMetadata",
	ria = "Error reading FontMetadata.",
	sia = "Error reading SyncObjects.",
	tia = "Error reading all SyncObjects",
	uia = "Error reading documents.",
	via = "Error reading pending queue.",
	wia = "Error reading users.",
	xia = "Error removing document ids",
	yia = "Error upgrading the database.",
	zia = "Error while loading script ",
	Aia = "Error writing records.",
	Bia = "Esc",
	Cia = "Expanded past the boundary at the end.",
	Dia = "Expanded past the boundary at the start.",
	Eia = "Expecting a table start marker; cannot get a location from an invalid table.",
	$b = "F",
	Fia = "F3",
	Gia = "FRAME",
	ac = "Fa",
	Hia = "Failed to get document ids from storage of ",
	Iia = "Failed to initialize database.",
	Jia = "Failed to load module ",
	Kia = "Failed to read fontmetadata for ",
	Lia = "Failed to read fontmetadata.",
	Mia = "Failed to remove document ids from storage of ",
	Nia = "Failed to upgrade database.",
	Oia = "Failed to write document ids to storage of ",
	Pia = "Failed to write updated fontMetadata for ",
	Qia = "File Menu",
	Ria = "File or directory already exists at specified path",
	Sia = "File or directory not found",
	Tia = "File or directory not readable",
	Uia = "File sync failed.",
	Via = "File sync result had failures",
	Wia = "FileEntities",
	Xia = "Filesystem error (",
	Yia = "Fill color",
	Zia = "Find and replace...",
	$ia = "Find...",
	aja = "Firefox",
	bja = "Folders...",
	cja = "Font",
	dja = "Font metadata for an unexpected font family was received.",
	eja = "Font size",
	bc = "FontMetadata",
	fja = "Font|",
	gja = "Footer",
	hja = "Footnote",
	ija = "Form",
	jja = "Format",
	kja = "Format Menu",
	lja = "Found deleted renderers in header or footer.",
	mja = "From template...",
	nja = "Full screen",
	cc = "G",
	oja = "G+ ||||",
	dc = "GET",
	pja = "GOOGLE_INPUT_CHEXT_FLAG",
	qja = "Georgia",
	rja = "Get help with...",
	sja = "Get more apps...",
	tja = "Getting the lock failed",
	uja = "Google+ Community",
	vja = "GoogleDocs",
	ec = "H",
	wja = "HEAD",
	fc = "HR",
	xja = "Header",
	yja = "Heading 1",
	zja = "Heading 2",
	Aja = "Heading 3",
	Bja = "Heading 4",
	Cja = "Heading 5",
	Dja = "Heading 6",
	Eja = "Heading cannot be set to null",
	Fja = "Help Center",
	Gja = "Help Menu",
	Hja = "Hollow list",
	Ija = "Hollow \u25cb",
	Jja = "Horizontal line",
	gc = "I",
	Kja = "I, II, III",
	Lja = "IDB error.",
	hc = "IFRAME",
	ic = "IMG",
	jc = "INPUT",
	Mja = "INVALID_STATE_ERR",
	Nja = "ISINDEX",
	Oja = "If the proxy has been discarded, the command queue must be null",
	Pja = "Image...",
	Qja = "ImageViews can be created only from images.",
	Rja = "Image|",
	Sja = "Impressions",
	Tja = "Incorrect spacer at start marker ",
	Uja = "Increase indent",
	Vja = "Index not in view and redraw is not an insert.",
	Wja = "Initialization error, error:",
	Xja = "Input tool ||||",
	Yja = "Input tools",
	Zja = "Insecure or disallowed operation",
	kc = "Insert",
	$ja = "Insert Menu",
	aka = "Insert bookmark",
	bka = "Insert column left",
	cka = "Insert column right",
	dka = "Insert comment",
	eka = "Insert drawing",
	fka = "Insert drawing...",
	gka = "Insert equation",
	hka = "Insert footer",
	ika = "Insert footnote",
	jka = "Insert function",
	kka = "Insert header",
	lka = "Insert horizontal line",
	mka = "Insert image",
	nka = "Insert image...",
	oka = "Insert link",
	pka = "Insert link...",
	qka = "Insert page break",
	rka = "Insert page count",
	ska = "Insert page number at bottom of page",
	tka = "Insert page number at top of page",
	uka = "Insert past the end: ",
	vka = "Insert row above",
	wka = "Insert row below",
	xka = "Insert special characters...",
	yka = "Insert table",
	zka = "Insert table of contents",
	Aka = "Insert: ",
	Bka = "Inserting a segment in the middle of the view.",
	Cka = "Inserting a segment that wasn't at the end.",
	Dka = "Internal abort: ",
	Eka = "Invalid Blob response for URL ",
	Fka = "Invalid encoding",
	Ika = "Invalid event type",
	Jka = "Invalid filetype",
	Kka = "Invalid line-ending specifier",
	Lka = "Invalid listener argument",
	Mka = "Invalid modification",
	Nka = "Invalid state",
	Oka = "Invalid type when repositioning anchored plugin.",
	Pka = "Invalid type when repositioning relative plugin.",
	Qka = "Italic",
	lc = "J",
	Rka = "JavaScript",
	Ska = "Jsloader error (code #",
	Tka = "Justified",
	Uka = "Justify",
	mc = "K",
	Vka = "KEYGEN",
	nc = "KIX-0-system-box",
	Wka = "KIX-0-system-stretchbox",
	Xka = "Keyboard shortcuts",
	oc = "L",
	Yka = "LI",
	Zka = "LINK",
	$ka = "Language",
	ala = "Layout is being called recursively.",
	bla = "Learn more",
	pc = "Left",
	cla = "Left align",
	dla = "Left-to-right text",
	ela = "Line color",
	fla = "Line spacing",
	gla = "Line spacing: 1.0",
	hla = "Line spacing: 1.15",
	ila = "Line spacing: 1.5",
	jla = "Line spacing: 2.0",
	kla = "Line weight",
	lla = "Link...",
	mla = "List style: 1, 2, 3",
	nla = "List style: A, B, C",
	ola = "List style: Bullet \u25cf",
	pla = "List style: Hollow \u25cb",
	qla = "List style: I, II, III",
	rla = "List style: Square \u25a0",
	sla = "List style: a, b, c",
	tla = "List style: i, ii, iii",
	ula = "List styles",
	qc = "Loading...",
	vla = "Local URL retrieval failed.",
	wla = "Local fetch failed ",
	xla = "Local storage error: ",
	yla = "Local syncing of remote resource failed",
	zla = "LocalStorePendingCommandQueue storage error: ",
	Ala = "Lock acquisition failed.",
	Bla = "Lock could not be obtained.",
	Cla = "Lock could not be refreshed",
	Dla = "Lock could not be refreshed because the IDB version changed.",
	Ela = "Lock transaction error",
	Fla = "Lowercase Latin Letters",
	Gla = "Lowercase Roman Letters",
	rc = "M",
	Hla = "META",
	sc = "MSIE",
	Ila = "MSXML2.XMLHTTP",
	Jla = "MSXML2.XMLHTTP.3.0",
	Kla = "MSXML2.XMLHTTP.6.0",
	tc = "Ma",
	Lla = "Macros Menu",
	Mla = "Make a copy...",
	Nla = "Malformed webfonts json received.",
	Ola = "Meta",
	Pla = "Meta+",
	Qla = "Meta+Shift",
	Rla = "Metadata styles of type: ",
	Sla = "Microsoft Word (.docx)",
	Tla = "Microsoft.XMLHTTP",
	Ula = "Missing Content-Type for URL ",
	Vla = "Missing common cursor style value for ",
	Wla = "Missing font file extension for format ",
	Xla = "Missing group updateFn for ",
	Yla = "Missing header/footer view on page ",
	Zla = "Missing setPropertyFn for ",
	$la = "Module errback failures: ",
	uc = "More",
	ama = "More deleted renderers than expected.",
	bma = "More than one user in local storage",
	cma = "Move into current footnote",
	dma = "Move to footer",
	ema = "Move to header",
	fma = "Move to next bookmark",
	gma = "Move to next comment",
	hma = "Move to next footnote",
	ima = "Move to next heading",
	jma = "Move to next misspelling",
	kma = "Move to previous bookmark",
	lma = "Move to previous comment",
	mma = "Move to previous footnote",
	nma = "Move to previous heading",
	oma = "Move to previous misspelling",
	pma = "Move to top of application",
	qma = "Moving in 0 child segments.",
	rma = "Moving in more than one child segment when segment has not beenlaid out",
	sma = "Moz",
	tma = "MozOpacity",
	vc = "N",
	uma = "NOFRAMES",
	vma = "NOSCRIPT",
	wc = "NOT_ANONYMOUS",
	xc = "Na",
	yc = "Nd",
	wma = "Nesting level should be defined for getting next paragraph starts for an ordered list.",
	xma = "New",
	yma = "New document",
	zma = "New document from template...",
	Ama = "New drawing",
	Bma = "New form",
	Cma = "New presentation",
	Dma = "New script",
	Ema = "New spreadsheet",
	Fma = "NewDocumentIds",
	Gma = "Next redraw is DELETE but no deleted document slice.",
	Hma = "No",
	Ima = "No call to DB connection callbacks when opening the database: DB Version: ",
	Jma = "No data results.",
	Kma = "No document loader available.",
	Lma =
		"No font response object.",
	Mma = "Non-applyable command type ",
	Nma = "Normal Text",
	Oma = "Not all renderers were removed from child ",
	zc = "Not available",
	Pma = "Numbered list",
	Qma = "Numbers",
	Ac = "O",
	Rma = "OBJECT",
	Sma = "OK",
	Tma = "OL",
	Uma = 'Offline Docs is not working because you are not using the Drive Chrome app or it is disabled. Either <span id="docs-chrome-needchromeappbutter-install-app" class="docs-butterbar-link-no-pad">install the Drive app</span> or <a href="/offline/optout" class="docs-butterbar-link-no-pad" target="_blank">disable Offline Docs</a>.',
	Vma = "Onblocked handler called when upgrading database.",
	Wma = "Open link",
	Xma = "Open...",
	Yma = "OpenDocument Format (.odt)",
	Zma = "Opera",
	$ma = "Operation aborted",
	ana = "Optimize style intersection caching for style of type: ",
	bna = "Options",
	cna = "Organize...",
	Bc = "P",
	dna = "PARAM",
	ena = "PDF Document (.pdf)",
	Cc = "POST",
	fna = "PRE",
	gna = "Page break",
	hna = "Page count",
	ina = "Page number",
	jna = "Page setup...",
	kna = "PageCountProvider is null and page counts are enabled.",
	lna = "Paint format",
	mna = "Paragraph Indent End",
	nna = "Paragraph Indent First Line",
	ona = "Paragraph Indent Start",
	pna = "Paragraph styles",
	Dc = "Paste",
	qna = "Paste formatting",
	rna = "Paste from server",
	sna = "Paste ||||",
	tna = "Pending command queue not yet set.",
	Ec = "PendingQueueCommands",
	Fc = "PendingQueues",
	una = "Ping ",
	vna = "Plain Text (.txt)",
	wna = "Preferences...",
	xna = "Presentation",
	yna = "Print",
	zna = "Print layout",
	Ana = "Print preview",
	Bna = "Problem | error |||",
	Cna = "Problem | help |||",
	Dna = "Processing a line render task with no available layouts.",
	Gc = "ProfileData",
	Ena = "Publish to the web...",
	Hc =
		"Q",
	Fna = "QUOTA_EXCEEDED_ERR",
	Gna = "Queue is marked undeliverable but not unitialized",
	Hna = "Queue is undeliverable and anachronistic on cold start",
	Ina = "Queue is undeliverable and anachronistic, and no cold start url is available",
	Jna = "Quota exceeded",
	Kna = "QuotaExceededError",
	Ic = "R",
	Lna = "Reading font metadata is not enabled",
	Mna = "Reading from uninitialized IDB database.",
	Nna = "Redo",
	Ona = "Redrawing at an inline location with no height.",
	Pna = "Redrawing the same child twice.",
	Qna = "Remote fetch failed",
	Rna = "Remote fetches failed ",
	Sna = "Remove space after paragraph",
	Tna = "Remove space before paragraph",
	Una = "Removing a segment that wasn't at the end.",
	Vna = "Removing an id that was not previously inserted.",
	Wna = "Removing child not in segment.",
	Xna = "Removing child segment with no renderer.",
	Yna = "Rename...",
	Zna = "Render mode DELETE with no deleted renderer.",
	$na = "Render mode should start at NONE before being populated.",
	aoa = "Rendering without any pages.",
	boa = "Report abuse",
	coa = "Report an issue",
	doa = "Report issue | error |||",
	eoa = "Request for cell start index past the end of the row.",
	foa = "Request for child start index past the end of the view.",
	goa = "Request for offset top past the end of the segment.",
	hoa = "Requested segment for spacer not owned by this view.",
	ioa = "Research",
	joa = "Reset styles",
	koa = "Restart numbering...",
	loa = "Rich Text Format (.rtf)",
	Jc = "Right",
	moa = "Right align",
	noa = "Right-to-left text",
	ooa = "RowView is deleting its own start marker.",
	Kc = "S",
	Lc = "SCRIPT",
	poa = "SECURITY_ERR",
	qoa = "SELECT",
	roa = "SOURCE",
	Mc = "SPAN",
	soa = "STYLE",
	toa = "Safari",
	uoa = "Sans",
	Nc = "Save",
	voa = "Save as my default styles",
	woa = "Script",
	xoa = "Script editor...",
	yoa = "Script gallery...",
	zoa = "Script manager...",
	Aoa = "Script...",
	Boa = "Search the menus",
	Coa = "See original",
	Doa = "See revision history",
	Eoa = "Segment that has not been laid out should have only one child segment.",
	Foa = "Segment that has not been laid outshould have only one child segment.",
	Goa = "Select all",
	Hoa = "Select all matching text",
	Ioa = "Select input tools",
	Joa = "Select none",
	Koa = "Serif",
	Loa = "Set paragraph end indent",
	Moa = "Set paragraph first line indent",
	Noa = "Set paragraph start indent",
	Ooa = "Set text direction to left-to-right.",
	Poa = "Set text direction to right-to-left.",
	Qoa = "Set the heading style for text",
	Roa = "Setting document lock status when local store is not an object",
	Soa = "Setting document when a document is already loaded",
	Toa = "Setting document when local store is not an object",
	Uoa = "Setting document when user is not an object",
	Voa = "Setting height to child not in segment.",
	Woa = "Setting local store when a document is already loaded",
	Xoa = "Setting local store when a user is already loaded",
	Yoa = "Setting local store when one is already available",
	Zoa = "Setting user when a document is already loaded",
	$oa = "Setting user when a user is already loaded",
	apa = "Setting user when local store is not an object",
	bpa = "Shape",
	cpa = "Share...",
	Oc = "Shift",
	dpa = "Shift+Delete",
	epa = "Shift+Esc",
	fpa = "Shift+F3",
	gpa = "Shift+Insert",
	hpa = "Should have a content element during redraw.",
	ipa = "Should never call StyleIntersectionCache#get with start index > end index.",
	jpa = "Should not async redraw once initial redraw is done.",
	kpa = "Should not call getEndOfSection with an out of bounds spacer index: ",
	lpa = "Should not call getParagraphEndIndex with an index past the last spacer index.",
	mpa = "Should not call getStartOfSection with an out of bounds spacer index: ",
	npa = "Show equation toolbar",
	opa = "Show ruler",
	ppa = "Show spelling suggestions",
	qpa = "Single spaced",
	rpa = "Some changes could not be synced, and this file may not be accessible offline.",
	spa = "Some fonts could not be loaded offline.",
	tpa = "Some fonts could not be loaded. Please try opening this document online.",
	upa = "Spacer is in block, but not in any of its words.",
	vpa = "Speak selection",
	wpa = "Special characters...",
	xpa = "Spelling...",
	ypa = "Spreadsheet",
	zpa = "Square list",
	Apa = "Square \u25a0",
	Bpa = "Star",
	Cpa = "Start",
	Dpa = "Start and end points must be 2D",
	Epa = "Start marker being deleted.",
	Fpa = "StartToEnd",
	Gpa = "StartToStart",
	Hpa = "StateIndex",
	Ipa = "Strikethrough",
	Jpa = "Style",
	Kpa = "Styles",
	Lpa = "Subscribe",
	Mpa = "Subscript",
	Npa = "Subtitle",
	Opa =
		"Superscript",
	Pc = "SyncObjects",
	Ppa = "Syncing offline changes...",
	Qc = "T",
	Qpa = "TABLE",
	Rpa = "TBODY",
	Spa = "TD",
	Rc = "TEXTAREA",
	Tpa = "TH",
	Upa = "TR",
	Vpa = "TRACK",
	Sc = "Ta",
	Wpa = "Table",
	Xpa = "Table Menu",
	Ypa = "Table of contents",
	Zpa = "Table properties...",
	$pa = "Text background color",
	aqa = "Text box",
	bqa = "Text color",
	cqa = "The cursor is not in the document.",
	dqa = "The cursor is not on either end of the new selection.",
	eqa = "The cursor should never pass beyond the end of the last section spacer.",
	fqa = "The document could not be loaded from local storage.",
	gqa = "The index being sanitized should not be outside the spacer range.",
	hqa = "The index should be in the specified table.",
	iqa = "The new anchor is not on a renderable spacer.",
	jqa = "The rough selection will not contain anchor after sanitization.",
	kqa = "The style intersection cache invariant has been broken. The end indices correspodning to ",
	lqa = "The two marked ranges must not intersect.",
	mqa = "There are future segments needing layout but hasNextSegment is false.",
	nqa = "There should be at least one raw style of type ",
	oqa = "There should be at least one style of type ",
	pqa = "This document has unsaved changes. Do you want to leave the page and discard your changes?",
	qqa = "This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.",
	rqa = "This queue is holding state from a previous session",
	sqa = "Timed out after ",
	tqa = "Timeout reached for loading script ",
	uqa = "Times",
	vqa = "Times New Roman",
	wqa = "Timing field ",
	xqa = "Title",
	yqa = "To",
	zqa = "Toggle bulleted list",
	Aqa =
		"Toggle input tools ||||",
	Bqa = "Toggle numbered list",
	Cqa = "Toggle screen reader support",
	Dqa = "Tools Menu",
	Eqa = "Top",
	Fqa = "Top of page",
	Gqa = "Translate document...",
	Hqa = "Transparent",
	Iqa = "Trying to override existing comment container for id: ",
	Jqa = "UL",
	Kqa = "UNKNOWN",
	Tc = "US",
	Lqa = "UTF-8",
	Mqa = "Ua",
	Nqa = "Unable to calculate bidi runs.",
	Oqa = "Unable to delete FontMetadata",
	Pqa = "Unable to set parent component",
	Qqa = "Unable to write FontMetadata",
	Rqa = "Unable to write SyncObject.",
	Sqa = "Unavailable when offline",
	Tqa = "Undeliverable queue reset",
	Uqa = "Underline",
	Vqa = "Underline ||||",
	Wqa = "Undo",
	Xqa = "Uneven number of arguments",
	Yqa = "Unknown error",
	Zqa = "Unrecognized error",
	$qa = "Unsupported sync object type in database: ",
	ara = "Update 'Heading 1' to match",
	bra = "Update 'Heading 2' to match",
	cra = "Update 'Heading 3' to match",
	dra = "Update 'Heading 4' to match",
	era = "Update 'Heading 5' to match",
	fra = "Update 'Heading 6' to match",
	gra = "Update 'Normal text' to match",
	hra = "Update 'Subtitle' to match",
	ira = "Update 'Title' to match",
	jra = "Update table of contents",
	kra = "Upload...",
	lra = "Uppercase Latin Letters",
	mra = "Uppercase Roman Letters",
	nra = "Use my default styles",
	ora = "User Forum",
	pra = "User is opted in, but chrome app is disabled or not installed.",
	Uc = "Users",
	Vc = "V",
	qra = "Video...",
	rra = "View Menu",
	sra = "View print layout",
	Wc = "W",
	tra = "WBR",
	ura = "WEBVIEW",
	vra = "WEBVIEWCONTROL",
	wra = "Web Page (.html, zipped)",
	xra = "Web clipboard",
	yra = "Web clipboard help",
	zra = "Webkit",
	Ara = "Width",
	Bra = "Word count",
	Xc = "X",
	Yc = "Xa",
	Zc = "Y",
	Cra = "Yes",
	$c = "Z",
	Dra = "Zoom in",
	Era = "Zoom out",
	ad = "[",
	Fra = "[-",
	Gra = "[Range:",
	Hra = '[\\"\u201c\u201d]',
	Ira = "[\\'\u2018\u2019]",
	Jra = "[object Array]",
	Kra = "[object Function]",
	Lra = "[object Window]",
	bd = "\\",
	Mra = "\\$1",
	Nra = "\\/)([^/.]+)(.",
	Ora = "\\\\",
	Pra = "\\s",
	Qra = "\\u",
	Rra = "\\x08",
	cd = "]",
	Sra = "]+",
	Tra = "].",
	Ura = "]. Model ends at: ",
	dd = "^",
	ed = "_",
	Vra = "__",
	Wra = "__initcheck",
	Xra = "__protected_",
	Yra = "__proto__",
	Zra = "__wrapper_",
	$ra = "_i",
	asa = "_start",
	bsa = "_temp",
	csa = '_temp"></span>',
	fd = "`",
	gd = "a",
	dsa = "a, b, c",
	esa = "aa",
	hd = "abort",
	id = "absolute",
	fsa = "acl",
	v = "action",
	jd = "active",
	gsa = "activity-box-closed",
	hsa = "add a footer |||| ",
	isa = "add a header  ||||",
	jsa = "add column left ||||",
	ksa = "add column right ||||",
	lsa = "add row above ||||",
	msa = "add row below ||||",
	nsa = "addFileToDirectory_",
	kd = "ae",
	osa = "al",
	psa = "alc",
	qsa = "align center | center alignment |||",
	rsa = "align justified | justified alignment | justify ||",
	ssa = "align left | left alignment |||",
	tsa = "align right | right alignment |||",
	ld = "all",
	usa = "alpha(opacity=",
	vsa = "alt",
	wsa =
		"am",
	xsa = "anchor | link | add a bookmark |  add an anchor | add a link",
	md = "animate",
	ysa = "anonymous",
	zsa = "appLoad",
	nd = "application/x-vnd.google-docs-internal-object",
	od = "application/x-vnd.google-docshtml+dom",
	Asa = "application/x-www-form-urlencoded;charset=utf-8",
	Bsa = "apply subtitle style ||||",
	Csa = "apply title style ||||",
	Dsa = "apply-language-settings",
	pd = "ar",
	Esa = "aria-",
	qd = "aria-label",
	rd = "array",
	Fsa = "arraybuffer",
	Gsa = "as",
	Hsa = "assertive",
	Isa = "at",
	Jsa = "atomic",
	sd = "authkey",
	Ksa = "autocorrectLinks",
	Lsa = "autocorrectSmartQuotes",
	td = "autogen",
	Msa = "autogen_type",
	ud = "b",
	Nsa = "b_gt",
	Osa = "b_gt_i",
	Psa = "b_ifl",
	Qsa = "b_ifl_i",
	Rsa = "b_il",
	Ssa = "b_il_i",
	Tsa = "b_sn",
	Usa = "b_sn_i",
	vd = "b_ts",
	Vsa = "ba",
	Wsa = "background-color:",
	Xsa = "background-color: ",
	Ysa = "background: ",
	Zsa = "backspace",
	$sa = "baseline",
	wd = "basicEdit",
	ata = "be",
	bta = "beforecopy",
	cta = "beforecut",
	dta = "beforedrag",
	xd = "beforehide",
	eta = "beforepaste",
	yd = "beforeshow",
	fta = "beforeunload",
	gta = "begin",
	hta = "bg",
	ita = "bg_c",
	jta = "blob",
	Ad = "blur",
	kta = "bn",
	lta = "body",
	w =
		"bold",
	Bd = "bookmark",
	mta = "boolean",
	nta = "booleanPreferenceChange",
	ota = "border-color",
	pta = "border-color: ",
	qta = "border-width",
	rta = "borderBottom",
	sta = "borderBottomWidth",
	tta = "borderLeft",
	uta = "borderLeftWidth",
	vta = "borderRight",
	wta = "borderRightWidth",
	xta = "borderTop",
	yta = "borderTopWidth",
	zta = "boxes ||||",
	Ata = "br",
	Bta = "bs",
	Cta = "build-label",
	Dta = "buildLabel",
	Cd = "button",
	Dd = "c",
	Eta = "c/o",
	Fta = "call",
	Gta = "callee",
	Ed = "cancel",
	Hta = "cant_install",
	Ita = "caps-lock",
	Jta = "carriageReturn",
	Fd = "cb",
	Gd = "cell",
	Hd = "cell_bgc",
	Id = "cell_pb",
	Jd = "cell_pl",
	Kd = "cell_pr",
	Ld = "cell_pt",
	Kta = "cell_va",
	Lta = "cf",
	Md = "change",
	Mta = "change | describe |||",
	Nta = "changed",
	Ota = "changesStoredLocally",
	Nd = "character",
	Pta = "checkStoreHasUser request",
	Qta = "checked",
	Rta = "chromeVoxLoaded",
	Sta = "chv",
	Tta = "circles ||||",
	Uta = "class",
	Vta = "clear styles ||||",
	Wta = "clear-formatting",
	Xta = "clearPendingQueueSentBundle_",
	Yta = "clearPendingQueueSentItems_",
	Zta = "clearPendingQueue_",
	Od = "click",
	$ta = "clipboard",
	Pd = "close",
	aua = "clr_type",
	bua = "cmtKey",
	cua = "coe",
	dua =
		"col_wt",
	eua = "col_wv",
	fua = "coldstart",
	Rd = "color",
	Sd = "command",
	Td = "comment",
	Ud = "complete",
	gua = "compositionend",
	hua = "compositionstart",
	iua = "compositionupdate",
	jua = "connect",
	Vd = "containsBidiContent",
	kua = "content-type",
	lua = "content-width",
	mua = "context.",
	Wd = "contextmenu",
	Xd = "continue",
	nua = "control",
	Yd = "copy",
	oua = "count | roman numerals | outline ||",
	pua = "cov",
	qua = "cr",
	rua = "create new picture | new image | visio | diagram | chart",
	sua = "create | automate | macro | extension | plugin",
	tua = "create | new slides | powerpoint | keynote |",
	uua = "create | new survey | poll | question |",
	vua = "create | new workbook | excel | numbers |",
	wua = "create | template | resume | letter |",
	xua = "create | write | word | pages |",
	Zd = "cs_cids",
	$d = "csi",
	be = "ctrl",
	yua = "ctxt",
	zua = "cursorMove",
	Aua = "custom-color-event-type",
	ce = "cut",
	de = "cv",
	Bua = "cvox.Api",
	ee = "d",
	Cua = "d_id",
	Dua = "d_revision",
	fe = "da",
	Eua = "data",
	Fua = "data-",
	Gua = "dataType",
	Hua = "datetime-local",
	ge = "dblclick",
	Iua = "dcKey",
	Jua = "dcau",
	Kua = "dcl_",
	Lua = "dcmKey",
	he = "dd",
	ie = "de",
	Mua = "deKey",
	je = "deactivate",
	Nua = "decrease paragraph indent ||| |",
	Oua = "decrease-embedded-entity-size",
	ke = "default",
	Pua = "defaultStyleSetId",
	Qua = "defaultStyleSetsChange",
	Rua = "del",
	le = "delete",
	Sua = "deleteComment",
	Tua = "deleteDocument COMMENTS",
	Uua = "deleteDocument DOCUMENTS",
	Vua = "deleteDocument DOCUMENT_COMMANDS",
	Wua = "deleteDocument DOCUMENT_COMMANDS_METADATA",
	Xua = "deleteDocument DOCUMENT_COMMANDS_METADATA_STAGING",
	Yua = "deleteDocument DOCUMENT_COMMANDS_STAGING",
	Zua = "deleteDocument DOCUMENT_ENTITIES",
	$ua = "deleteKey",
	ava = "deletePendingQueueForDoc_ PENDING_QUEUES",
	bva = "deletePendingQueueForDoc_ PENDING_QUEUE_COMMANDS",
	cva = "delpe",
	me = "delta-x",
	ne = "delta-y",
	dva = "destroy",
	eva = "detected",
	oe = "di",
	pe = "dialog",
	fva = "dictionary | look up | lookup | |",
	gva = "direction",
	hva = "direction | reverse | bidirectional text | hebrew | arabic",
	iva = "disabled",
	jva = "disabled-or-not-installed",
	kva = "disconnect",
	qe = "display",
	lva = "display: none",
	mva = "display:none",
	re = "div",
	nva = "dlKey",
	se = "dm",
	ova = "docId",
	pva = "docIdEntityTypeIndex",
	qva = "doco_anchor",
	rva = "docos-eos",
	sva = "docosJobset=",
	tva =
		"docosKeyData",
	te = "docs",
	uva = "docs-action-data-extractor",
	vva = "docs-action-registered",
	wva = "docs-aiiws",
	xva = "docs-app-be",
	yva = "docs-app-e",
	zva = "docs-app-fmcl",
	Ava = "docs-app-ml-fcl",
	Bva = "docs-app-ml-mlc",
	Cva = "docs-app-ml-mrs",
	Dva = "docs-app-ml-pqi",
	Eva = "docs-app-ml-pqs",
	Fva = "docs-app-pqi",
	Gva = "docs-app-sma",
	Hva = "docs-apply-similar-spellcheck-suggestion",
	Iva = "docs-apply-spellcheck-suggestion",
	Jva = "docs-apply-spellcheck-suggestion-no-focus",
	ue = "docs-apps-lsi",
	ve = "docs-bars",
	Kva = "docs-bold",
	Lva = "docs-border-color",
	Mva = "docs-border-style",
	Nva = "docs-butter-warning-link",
	Ova = "docs-butterbar-container",
	Pva = "docs-butterbar-container-compact",
	Qva = "docs-butterbar-link",
	Rva = "docs-butterbar-wrap",
	Sva = "docs-chat-focus",
	Tva = "docs-chat-sidebar",
	we = "docs-chrome",
	Uva = "docs-chrome-focus",
	Vva = "docs-chrome-needchromeappbutter-install-app",
	Wva = "docs-chrome-needchromeappbutter-reload-link",
	Xva = "docs-clear-formatting",
	Yva = "docs-clipboard",
	Zva = "docs-clipboard-clear-items",
	$va = "docs-clipboard-copy",
	awa = "docs-clipboard-help",
	bwa =
		"docs-clipboard-paste-from-server",
	cwa = "docs-collab",
	dwa = "docs-collections",
	ewa = "docs-context-menu",
	fwa = "docs-context-menu-shortcut",
	gwa = "docs-copy",
	hwa = "docs-copy-link",
	iwa = "docs-copypaste-custom",
	jwa = "docs-custom-inline",
	kwa = "docs-cut",
	lwa = "docs-delete-link",
	mwa = "docs-details-close",
	nwa = "docs-details-focus",
	owa = "docs-details-sidebar",
	pwa = "docs-docos-accept-suggestion",
	qwa = "docs-docos-activity-box",
	rwa = "docs-docos-commentsbutton",
	swa = "docs-docos-delete-discussion",
	twa = "docs-docos-insert-discussion",
	uwa = "docs-docos-move-into-discussion",
	vwa = "docs-docos-move-to-discussion-next",
	wwa = "docs-docos-move-to-discussion-previous",
	xwa = "docs-docos-reject-suggestion",
	ywa = "docs-document",
	zwa = "docs-download-menu",
	Awa = "docs-drawing",
	Bwa = "docs-edit",
	Cwa = "docs-edit-custom",
	Dwa = "docs-edit-description",
	Ewa = "docs-edit-font-family",
	Fwa = "docs-edit-menu",
	Gwa = "docs-egc",
	xe = "docs-emt",
	Hwa = "docs-eoi",
	Iwa = "docs-eqccs",
	Jwa = "docs-eqcws",
	Kwa = "docs-ereft",
	Lwa = "docs-eww",
	Mwa = "docs-feedback",
	Nwa = "docs-file-custom",
	Owa = "docs-file-menu",
	Pwa = "docs-fill-color",
	Qwa = "docs-find",
	Rwa = "docs-find-and-replace-start",
	Swa = "docs-find-and-replace-stop",
	Twa = "docs-find-next",
	Uwa = "docs-find-previous",
	Vwa = "docs-find-start",
	Wwa = "docs-focus-bubble",
	Xwa = "docs-font-family",
	Ywa = "docs-font-size",
	Zwa = "docs-fonts",
	$wa = "docs-fonts-erfm",
	axa = "docs-fonts-ewfish",
	bxa = "docs-fonts-ewfm",
	cxa = "docs-form",
	dxa = "docs-format-menu",
	exa = "docs-global_promos",
	fxa = "docs-google-help",
	gxa = "docs-header",
	hxa = "docs-help-center",
	ixa = "docs-help-custom",
	jxa = "docs-help-forum",
	kxa =
		"docs-help-google-plus",
	lxa = "docs-help-menu",
	mxa = "docs-help-shortcuts",
	nxa = "docs-hide-controls",
	oxa = "docs-icon",
	pxa = "docs-icon-",
	qxa = "docs-icon-align-center",
	rxa = "docs-icon-align-justify",
	sxa = "docs-icon-align-left",
	txa = "docs-icon-align-right",
	uxa = "docs-icon-comment",
	vxa = "docs-icon-drawing-black",
	wxa = "docs-icon-enter-compact",
	xxa = "docs-icon-exit-compact",
	yxa = "docs-icon-image",
	zxa = "docs-icon-img",
	Axa = "docs-icon-img-container",
	Bxa = "docs-icon-indent",
	Cxa = "docs-icon-insert-equation",
	Dxa = "docs-icon-insert-horizontal-line",
	Exa = "docs-icon-insert-page-break",
	Fxa = "docs-icon-line-spacing",
	Gxa = "docs-icon-list-bullet",
	Hxa = "docs-icon-list-number",
	Ixa = "docs-icon-outdent",
	Jxa = "docs-icon-reload",
	Kxa = "docs-icon-settings",
	Lxa = "docs-icon-text-ltr",
	Mxa = "docs-icon-text-rtl",
	Nxa = "docs-ignore-word",
	Oxa = "docs-ignore-word-contextual",
	Pxa = "docs-ignore-word-no-focus",
	Qxa = "docs-image",
	Rxa = "docs-importwarnings",
	Sxa = "docs-importwarningsfeature",
	Txa = "docs-impression-code",
	Uxa = "docs-input-tools-menu",
	Vxa = "docs-insert-link",
	Wxa = "docs-insert-link-dialog",
	Xxa = "docs-insert-menu",
	Yxa = "docs-italic",
	Zxa = "docs-line-color",
	$xa = "docs-line-width",
	aya = "docs-loading-indicator",
	bya = "docs-localstore-cvi",
	cya = "docs-localstore-elrp",
	dya = "docs-localstore-eodrcu",
	eya = "docs-localstore-eopcu",
	fya = "docs-localstore-ilat",
	gya = "docs-localstore-ounv",
	ye = "docs-long-label",
	hya = "docs-macros-menu",
	iya = "docs-make-copy",
	jya = "docs-menu-bar",
	ze = "docs-menubar",
	kya = "docs-menubar-edit-focus",
	lya = "docs-menubar-file-focus",
	mya = "docs-menubar-format-focus",
	nya = "docs-menubar-help-focus",
	oya = "docs-menubar-insert-focus",
	pya = "docs-menubar-macros-focus",
	qya = "docs-menubar-table-focus",
	rya = "docs-menubar-tools-focus",
	sya = "docs-menubar-view-focus",
	tya = "docs-menubars",
	Ae = "docs-mlti",
	uya = "docs-more-button",
	Be = "docs-net-ci",
	Ce = "docs-net-ni",
	vya = "docs-new-custom",
	wya = "docs-new-menu",
	xya = "docs-no-fill",
	yya = "docs-no-line",
	zya = "docs-no-text-bgcolor",
	De = "docs-null",
	Aya = "docs-obsImUrl",
	Bya = "docs-omnibox",
	Cya = "docs-omnibox-toolbar",
	Dya = "docs-online",
	Eya = "docs-open",
	Fya = "docs-open-custom",
	Gya = "docs-open-link",
	Hya = "docs-organize",
	Iya = "docs-override-spellcheck-suggestion",
	Jya = "docs-override-spellcheck-suggestion-no-focus",
	Kya = "docs-paint-format",
	Lya = "docs-paste",
	Mya = "docs-pn",
	Nya = "docs-preferences",
	Oya = "docs-presentation",
	Pya = "docs-print",
	Qya = "docs-print-preview",
	Rya = "docs-print-preview-close",
	Sya = "docs-publish",
	Tya = "docs-publish-custom",
	Uya = "docs-redo",
	Vya = "docs-reference-insert-image",
	Wya = "docs-reference-insert-image-placeholder",
	Xya = "docs-reference-insert-link",
	Yya = "docs-reference-insert-text",
	Zya = "docs-reference-menu",
	$ya = "docs-reference-pane-container",
	aza = "docs-reference-placeholder-container",
	bza = "docs-reference-placeholder-title",
	cza = "docs-reference-sidebar",
	dza = "docs-rename",
	Ee = "docs-replace",
	eza = "docs-replace-all",
	fza = "docs-report-abuse",
	gza = "docs-reverse",
	Fe = "docs-revert",
	hza = "docs-revisions-close",
	iza = "docs-revisions-custom",
	jza = "docs-revisions-diff",
	kza = "docs-revisions-focus",
	lza = "docs-revisions-revert",
	mza = "docs-revisions-show",
	nza = "docs-revisions-sidebar",
	oza = "docs-revisions-zoomin",
	pza = "docs-revisions-zoomout",
	qza = "docs-rn",
	rza = "docs-save",
	sza = "docs-script",
	tza = "docs-se",
	uza = "docs-select-all",
	vza = "docs-select-none",
	wza = "docs-shape",
	xza = "docs-share",
	yza = "docs-show-spellcheck-tool",
	zza = "docs-show_reference",
	Aza = "docs-speak-copy-selection",
	Bza = "docs-speak-selection",
	Cza = "docs-special-character",
	Ge = "docs-spell-est",
	Dza = "docs-spreadsheet",
	Eza = "docs-star",
	Fza = "docs-stopped",
	Gza = "docs-strikethrough",
	Hza = "docs-subscribe",
	Iza = "docs-subscript",
	Jza = "docs-suggest",
	Kza = "docs-sup",
	Lza = "docs-superscript",
	He = "docs-synonyms",
	Mza = "docs-table-menu",
	Nza = "docs-template",
	Oza = "docs-text-add-child",
	Ie = "docs-text-apTab",
	Pza = "docs-text-bgcolor",
	Je = "docs-text-bksp",
	Qza = "docs-text-box",
	Rza = "docs-text-color",
	Ke = "docs-text-cr",
	Le = "docs-text-ctTxt",
	Sza = "docs-text-dd",
	Me = "docs-text-del",
	Ne = "docs-text-elei",
	Tza = "docs-text-elf",
	Uza = "docs-text-elstsa",
	Vza = "docs-text-elstsfi",
	Oe = "docs-text-encp",
	Wza = "docs-text-epcf",
	Xza = "docs-text-esm",
	Yza = "docs-text-ewf",
	Zza = "docs-text-fgcolor",
	$za = "docs-text-fi-dfls",
	aAa = "docs-text-fi-dl",
	bAa = "docs-text-fi-fl",
	cAa = "docs-text-fi-fm",
	dAa = "docs-text-fi-init",
	eAa = "docs-text-imeIn",
	Pe = "docs-text-inCh",
	fAa = "docs-text-linestartplugin-bullet",
	Qe = "docs-text-overlay-bookmark",
	Re = "docs-text-overlay-bookmark-selection",
	gAa = "docs-text-overlay-bookmark-selection-highlight",
	hAa = "docs-text-overlay-cell-selection",
	Se = "docs-text-overlay-comment",
	Te = "docs-text-overlay-doco-anchor",
	Ue = "docs-text-overlay-equation",
	Ve = "docs-text-overlay-ime-whiteout",
	iAa = "docs-text-overlay-line-selection",
	We = "docs-text-overlay-selection",
	Xe =
		"docs-text-overlay-spelling-error",
	jAa = "docs-text-remove-child",
	kAa = "docs-text-render-line-contents",
	lAa = "docs-text-update-padding",
	mAa = "docs-text-update-properties",
	nAa = "docs-text-update-size",
	oAa = "docs-texteventtarget-iframe",
	pAa = "docs-toggle-input-tools",
	qAa = "docs-toggle-screenreader",
	rAa = "docs-tool-bar",
	sAa = "docs-toolbar",
	tAa = "docs-toolbar-wrapper",
	uAa = "docs-tools-custom",
	vAa = "docs-tools-define",
	wAa = "docs-tools-menu",
	xAa = "docs-undeliverablequeuebutter-cloudboard-span",
	yAa = "docs-undeliverablequeuebutter-reset-span",
	zAa = "docs-underline",
	AAa = "docs-undo",
	BAa = "docs-upload",
	CAa = "docs-upload-custom",
	DAa = "docs-user_dictionary",
	EAa = "docs-usop",
	FAa = "docs-usupfje",
	GAa = "docs-video",
	HAa = "docs-view-compact",
	IAa = "docs-view-custom",
	JAa = "docs-view-menu",
	KAa = "docs-wsoou",
	LAa = "docs-ww",
	MAa = "docs-ww_shown",
	NAa = "docs-zoom-in",
	OAa = "docs-zoom-out",
	PAa = "docs_eoal",
	QAa = "docs_fonts_initial",
	RAa = "docs_offline_cold",
	SAa = "docs_offline_incremental_commands",
	TAa = "docs_offline_maybe_optin",
	UAa = "docs_offline_maybe_optout",
	VAa = "docs_offline_nonempty_pendingqueue",
	WAa = "docs_offline_opted_in",
	XAa = "docs_offline_opted_out",
	YAa = "docs_offline_warm",
	ZAa = "docstext-autocorrect-spellcheck-suggestion",
	Ye = "docstext-bullet",
	Ze = "docstext-bulleted-list",
	$Aa = "docstext-bulleted-list-bullet",
	aBa = "docstext-bulleted-list-hollow",
	bBa = "docstext-bulleted-list-square",
	$e = "docstext-line-spacing",
	cBa = "docstext-line-spacing-double",
	af = "docstext-line-spacing-menu",
	dBa = "docstext-line-spacing-one-point-five",
	eBa = "docstext-line-spacing-one-point-one-five",
	fBa = "docstext-line-spacing-single",
	bf = "docstext-line-view",
	gBa = "docstext-list",
	cf = "docstext-list-restart-numbering",
	df = "docstext-list-styles",
	hBa = "docstext-move-paragraph-down",
	iBa = "docstext-move-paragraph-up",
	jBa = "docstext-move-to-misspelling-next",
	kBa = "docstext-move-to-misspelling-previous",
	ef = "docstext-numbered-list",
	lBa = "docstext-numbered-list-latin-lower",
	mBa = "docstext-numbered-list-latin-upper",
	nBa = "docstext-numbered-list-number",
	oBa = "docstext-numbered-list-roman-lower",
	pBa = "docstext-numbers-list-roman-upper",
	ff = "docstext-paragraph-alignment",
	gf = "docstext-paragraph-alignment-center",
	hf = "docstext-paragraph-alignment-justify",
	jf = "docstext-paragraph-alignment-left",
	kf = "docstext-paragraph-alignment-menu",
	lf = "docstext-paragraph-alignment-right",
	qBa = "docstext-paragraph-direction",
	mf = "docstext-paragraph-indent",
	rBa = "docstext-paragraph-indent-end",
	sBa = "docstext-paragraph-indent-start",
	nf = "docstext-paragraph-outdent",
	of = "docstext-paragraph-spacing-after-remove",
	pf = "docstext-paragraph-spacing-before-remove",
	qf = "docstext-paragraph-styles",
	tBa = "docstext-paragraph-view",
	rf = "docstext-show-spell-corrections",
	uBa = "docstext-speak-current-page",
	vBa = "docstext-speak-styles",
	wBa = "docstext-speak-table-cell-headers",
	xBa = "docstext-speak-table-cell-location",
	yBa = "docstext-speak-table-column-header",
	zBa = "docstext-speak-table-row-header",
	ABa = "docstext-stop-screen-reader",
	sf = "docstext-text-ltr",
	tf = "docstext-text-rtl",
	BBa = "docstext-unprintable",
	uf = "document",
	CBa = "document-creation",
	DBa = "documentStyle",
	EBa = "documentType",
	vf = "documentViewSizeChange",
	FBa = "documents",
	GBa = "double spacing | double space |||",
	wf = "down",
	xf = "drag",
	HBa = "dragend",
	IBa = "dragenter",
	JBa = "dragleave",
	KBa = "dragover",
	yf = "dragstart",
	Bf = "drawing",
	LBa = "drawingsOfflineUrl",
	MBa = "drcuap",
	NBa = "drdn",
	OBa = "drop",
	PBa = "ds",
	QBa = "ds_b",
	RBa = "ds_cf",
	SBa = "ds_ch",
	TBa = "ds_fi",
	UBa = "ds_hi",
	VBa = "ds_mb",
	Cf = "ds_ml",
	Df = "ds_mr",
	Ef = "ds_mt",
	Ff = "ds_ph",
	Gf = "ds_pw",
	WBa = "dt",
	XBa = "dtKey",
	Hf = "e",
	If = "ea",
	YBa = "earlycancel",
	ZBa = "ease-in",
	$Ba = "ease-out",
	aCa = "easl",
	bCa = "ed",
	cCa = "edit",
	dCa = "edit scripts ||||",
	eCa = "edit_new",
	fCa = "editorHeightChange",
	gCa = "edits-before-command",
	Jf = "edits-command",
	Kf = "edits-flush",
	hCa = "edits-post-flush",
	Lf = "edits-selection",
	Mf = "ee_eo",
	iCa = "efpjy",
	Nf = "el",
	Of = "email",
	jCa = "emailAddress",
	kCa = "embed-parent-focus",
	lCa = "emphasis | emphasized |||",
	Pf = "en",
	mCa = "enableStringReplacement",
	nCa = "enable_iframed_embed_api",
	oCa = "enable_maestro",
	Qf = "enable_new_action_framework",
	Rf = "enable_omnibox",
	Sf = "enabled",
	Tf = "end",
	pCa = "endInTable",
	Uf = "enter",
	qCa = "eo_type",
	rCa = "eqfs_c",
	sCa = "eqs_p",
	tCa = "equals",
	Vf = "equation",
	Wf = "equation_function",
	Xf = "error",
	uCa = "errorsender",
	vCa = "esc",
	wCa = "exit | leave |||",
	xCa = "expandBothEnds shrunk the range",
	yCa = "expandEndsWithBoundary shrunk the end without a boundary.",
	zCa = "expandEndsWithBoundary shrunk the start without a boundary.",
	Yf = "expanded",
	ACa = "export | adobe | pdf | download |",
	BCa = "export | download |||",
	CCa = "export | open office | odt | download |",
	DCa = "export | rtf | download ||",
	ECa = "export | txt | download ||",
	FCa = "export | website | html | zip | download",
	Zf = "f",
	$f = "fa",
	GCa = "failed",
	HCa = "families",
	ICa = "familyList",
	JCa = "fastTrack",
	KCa = "fatal",
	LCa = "fatra",
	MCa = "favorite ||||",
	NCa = "fbe",
	OCa = "fcoe",
	PCa = "feedback | message | note | add a comment | discussion",
	ag = "ff",
	bg = "file",
	QCa = "fill-color",
	RCa = "filter",
	SCa = "find scripts | browse scripts | load scripts ||",
	TCa = "find | document | search ||",
	cg = "finish",
	UCa = "fix ||||",
	dg = "fixed",
	VCa = "fmpjy",
	WCa = "fmpl",
	eg = "focus",
	fg = "focusin",
	XCa = "focusout",
	YCa = "folder-outline",
	ZCa = "font-family",
	$Ca = "font-size:",
	aDa = "font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;white-space:nowrap;font-variant:normal;",
	bDa = "font-style",
	cDa = "font-weight",
	dDa = "fontFaces",
	eDa = "fontFamilies",
	fDa = "fontFamily",
	gDa = "fontInstallMonitor-fsi",
	gg = "fontInstalled",
	hDa = "font_preference_change",
	iDa = "fonts",
	jDa = "foot note | add a foot note | reference ||",
	hg = "footnote",
	kDa = "for",
	ig = "force-ctrl-key",
	lDa = "forceRedraw",
	mDa = "form",
	nDa = "fs_id",
	oDa = "ftrack=1",
	jg = "function",
	kg = "g",
	pDa = "g_data",
	qDa = "g_type",
	rDa = "getContainerMinHeight",
	sDa = "getContainerOffsetHeight",
	tDa = "getContainerOffsetTop",
	uDa = "getDocId",
	vDa = "getExternalOnscrollElement",
	wDa = "getExternalScrollableElement",
	xDa = "getShouldSizeHeightToContent",
	yDa = "getTitle",
	zDa = "gi",
	ADa = "goog-buttonset-default",
	BDa = "goog-control",
	lg = "goog-inline-block",
	CDa = "goog-option",
	DDa = "goog-option-selected",
	EDa = "goog_",
	FDa = "google.com",
	GDa = "grammar | check spelling |||",
	HDa = "gu",
	mg = "h",
	IDa = "ha",
	JDa = "handleDirectoryEntryAvailable_",
	KDa = "handleFileSystemAvailable_",
	LDa = "handleGetFileUrlFailed_",
	MDa = "handleRemoveFileFailed_",
	NDa = "handleToggleEquationToolbar_ called when an equation toolbar does not exist.",
	ODa = "handleUpdateCommentSuccess_",
	PDa = "handleXhrComplete_",
	QDa = "hasNextSegment is false, but nextSegmentMustLayout is true.",
	RDa = "hashchange",
	SDa = "hclr_color",
	ng = "he",
	og = "head",
	TDa = "header | h1 |||",
	UDa = "header | h2 |||",
	VDa = "header | h3 |||",
	WDa = "header | h4 |||",
	XDa = "header | h5 |||",
	YDa = "header | h6 |||",
	ZDa = "header ||||",
	pg = "header-footer",
	qg = "headings",
	$Da = "heapLimit",
	rg = "height",
	aEa = "height:",
	bEa = "height: ",
	cEa = "height:100px; overflow-y:scroll; position:absolute; top:-50000px; white-space:nowrap; width:100px; z-index:-50000;",
	dEa = "help",
	eEa = "help forum | user forum | discussion forum ||",
	fEa = "hex",
	gEa = "hfe_hft",
	sg = "hi",
	tg = "hidden",
	ug = "hide",
	hEa = "highlightDoco",
	vg = "hint",
	iEa = "home",
	wg = "horizontal_rule",
	jEa = "hotkeys ||||",
	kEa = "hr | horizontal rule | add a line | add a horizontal line | add a horizontal rule",
	xg = "hs_h1",
	yg = "hs_h2",
	zg = "hs_h3",
	Ag = "hs_h4",
	Bg = "hs_h5",
	Cg = "hs_h6",
	Dg = "hs_nt",
	Eg = "hs_st",
	Fg = "hs_t",
	Gg = "http://",
	lEa = "http://support.google.com/drive/bin/answer.py?answer=161768",
	mEa = "http://support.google.com/drive/bin/answer.py?answer=2983822",
	nEa = "https://",
	Hg = "i",
	oEa = "i, ii, iii",
	pEa = "iKey",
	qEa = "iPad",
	rEa = "iPhone",
	sEa = "iPod",
	tEa = "i_cid",
	uEa = "i_ht",
	vEa = "i_src",
	wEa = "i_wth",
	xEa = "ia",
	yEa = "iba",
	zEa = "ibt",
	Ig = "ic",
	Jg = "icon",
	Kg = "icso",
	Lg = "id",
	AEa = "idbla",
	BEa = "idbrot",
	CEa = "idbrwt",
	Mg = "idle",
	DEa = "ie_css_limit_reached",
	Ng = "iframe",
	EEa = "il",
	Og = "image",
	FEa = "image | drawing | diagram ||",
	GEa = "imeActivate",
	HEa = "imeIn",
	IEa = "import-warnings-focus",
	JEa = "import-warnings-reopen",
	KEa = "import-warnings-sidebar",
	LEa = "importWarnings",
	Pg = "import_warnings",
	Qg =
		"inc",
	MEa = "inches | width | margins | tabs | tab stops",
	Rg = "incident",
	NEa = "increase-embedded-entity-size",
	Sg = "info",
	OEa = "info_params",
	PEa = "initialLoadRedrawComplete",
	Tg = "initialize",
	Ug = "inline",
	QEa = "innerText",
	Vg = "input",
	Wg = "insert",
	REa = "insert-script",
	Xg = "insert-table-menu",
	SEa = "installed",
	TEa = "installing",
	UEa = "internal",
	VEa = "is",
	WEa = "isFastTrack",
	XEa = "isSaved",
	Yg = "it",
	z = "italic",
	Zg = "iw",
	YEa = "iws_iwids",
	$g = "j",
	ah = "ja",
	bh = 'javascript:""',
	ZEa = "jfk-butterBar",
	$Ea = "jfk-butterBar-mini",
	aFa = "jfk-butterBar-shown",
	ch = "jobset",
	bFa = "jobset=",
	dh = "k",
	cFa = "ka",
	eh = "key",
	dFa = "keyEvent",
	eFa = "keyPath",
	fFa = "keyboard",
	fh = "keydown",
	gh = "keypress",
	hh = "keys",
	gFa = "keys-enabled",
	hFa = "keys-visible",
	ih = "keyup",
	jh = "kix",
	iFa = "kix-a11y-aria-toggle",
	kh = "kix-aC",
	jFa = "kix-add-cell",
	kFa = "kix-add-embedded-object",
	lFa = "kix-add-tab-stop-center",
	lh = "kix-add-tab-stop-end",
	mh = "kix-add-tab-stop-start",
	nh = "kix-ae",
	mFa = "kix-ami",
	oh = "kix-ams",
	nFa = "kix-ap",
	oFa = "kix-apply-table-style",
	pFa = "kix-appview",
	qFa = "kix-appview-editor",
	rFa = "kix-appview-spin",
	sFa = "kix-appview-spinner",
	ph = "kix-as",
	tFa = "kix-autogen-region-view",
	uFa = "kix-autogenregionrenderer",
	vFa = "kix-autogenregionrenderer-highlighted",
	wFa = "kix-autogenregionrenderer-reload-button",
	xFa = "kix-bookmark-overlay-selected",
	yFa = "kix-bookmark-overlay-selected-highlighted",
	zFa = "kix-bubble-embedded-entity",
	qh = "kix-cell-view",
	AFa = "kix-cellrenderer",
	BFa = "kix-comment-view",
	CFa = "kix-commentcontainer",
	DFa = "kix-commentcontainer-header",
	EFa = "kix-commentcontainer-highlighted-arrow",
	FFa = "kix-commentoverlayrenderer-highlighted",
	GFa = "kix-commentoverlayrenderer-normal",
	HFa = "kix-commentoverlayrenderer-overlay",
	IFa = "kix-commentoverlayrenderer-resolved",
	JFa = "kix-commentoverlayrenderer-resolved-highlighted",
	KFa = "kix-copy-format",
	LFa = "kix-cursor docstext-unprintable",
	MFa = "kix-cursor-caret",
	NFa = "kix-cursor-italic",
	OFa = "kix-cursor-name",
	PFa = "kix-cursor-top",
	rh = "kix-de",
	QFa = "kix-delPE",
	RFa = "kix-delete-bookmark",
	sh = "kix-delete-column",
	SFa = "kix-delete-comment",
	th = "kix-delete-row",
	TFa = "kix-delete-tab-stop",
	uh = "kix-delete-table",
	UFa =
		"kix-delete-table-of-contents",
	VFa = "kix-discussion-plugin",
	WFa = "kix-dld",
	vh = "kix-document-margins",
	XFa = "kix-document-top-shadow docstext-unprintable",
	YFa = "kix-document-top-shadow-inner",
	ZFa = "kix-document-view",
	$Fa = "kix-double-click-footnote",
	wh = "kix-ds",
	xh = "kix-dss",
	aGa = "kix-e",
	bGa = "kix-eepowk",
	cGa = "kix-embeddedobjectview-drag",
	dGa = "kix-embeddedobjectview-handle",
	eGa = "kix-equation-highlight",
	fGa = "kix-esc",
	gGa = "kix-escape",
	hGa = "kix-exit-table",
	iGa = "kix-export-docx",
	jGa = "kix-export-odt",
	kGa = "kix-export-pdf",
	lGa = "kix-export-rtf",
	mGa = "kix-export-txt",
	nGa = "kix-export-zip",
	yh = "kix-fmc",
	zh = "kix-focus-document",
	oGa = "kix-footnote-view",
	pGa = "kix-footnotenumberview goog-inline-block",
	qGa = "kix-header-footer-view",
	rGa = "kix-heading",
	Ah = "kix-heading-0",
	sGa = "kix-heading-0-menu",
	Bh = "kix-heading-1",
	tGa = "kix-heading-1-menu",
	Ch = "kix-heading-2",
	uGa = "kix-heading-2-menu",
	Dh = "kix-heading-3",
	vGa = "kix-heading-3-menu",
	Eh = "kix-heading-4",
	wGa = "kix-heading-4-menu",
	Fh = "kix-heading-5",
	xGa = "kix-heading-5-menu",
	Gh = "kix-heading-6",
	yGa = "kix-heading-6-menu",
	zGa = "kix-heading-menu",
	Hh = "kix-heading-subtitle",
	AGa = "kix-heading-subtitle-menu",
	Ih = "kix-heading-title",
	BGa = "kix-heading-title-menu",
	CGa = "kix-horizontalruleview",
	DGa = "kix-htmlbookmarkiconoverlay-bottom",
	EGa = "kix-htmlbookmarkiconoverlay-icon-outer",
	FGa = "kix-htmlbookmarkiconoverlay-icon-top",
	GGa = "kix-htmloverlay",
	HGa = "kix-htmloverlay-ime-whiteout",
	IGa = "kix-htmloverlay-under-text",
	JGa = "kix-icon-accessible-img",
	KGa = "kix-icon-accessible-img kix-icon-",
	LGa = "kix-icon-close-comment",
	MGa = "kix-icon-delete-note",
	NGa = "kix-icon-reply-comment",
	OGa = "kix-imageview",
	PGa = "kix-imageview-loading",
	Jh = "kix-inTR",
	QGa = "kix-insert-bookmark",
	Kh = "kix-insert-column-left",
	Lh = "kix-insert-column-right",
	Mh = "kix-insert-comment",
	Nh = "kix-insert-document-slice",
	Oh = "kix-insert-drawing",
	Ph = "kix-insert-equation",
	Qh = "kix-insert-footer",
	Rh = "kix-insert-footnote",
	RGa = "kix-insert-function",
	Sh = "kix-insert-header",
	SGa = "kix-insert-horizontal-line",
	Th = "kix-insert-html",
	Uh = "kix-insert-image",
	Vh = "kix-insert-image-dialog",
	TGa = "kix-insert-page-break",
	UGa = "kix-insert-page-count",
	VGa = "kix-insert-page-number-footer",
	WGa = "kix-insert-page-number-header",
	XGa = "kix-insert-page-number-menu",
	YGa = "kix-insert-plain-text-drop",
	$h = "kix-insert-row-above",
	ai = "kix-insert-row-below",
	ZGa = "kix-insert-table",
	$Ga = "kix-insert-table-of-contents",
	bi = "kix-is",
	ci = "kix-iss",
	aHa = "kix-linestartplugin-footnote",
	bHa = "kix-lineview",
	cHa = "kix-lineview-background",
	dHa = "kix-lineview-content",
	eHa = "kix-lineview-text-block",
	fHa = "kix-load-default-headings-style",
	gHa = "kix-load-user-headings-style",
	hHa = "kix-mc",
	iHa = "kix-move-into-footnote",
	jHa = "kix-move-positioned-entity",
	kHa = "kix-move-to-bookmark-next",
	lHa = "kix-move-to-bookmark-previous",
	mHa = "kix-move-to-embedded-entity-next",
	nHa = "kix-move-to-embedded-entity-previous",
	oHa = "kix-move-to-footnote-next",
	pHa = "kix-move-to-footnote-previous",
	qHa = "kix-move-to-heading-next",
	rHa = "kix-move-to-heading-previous",
	sHa = "kix-move-to-heading1-next",
	tHa = "kix-move-to-heading1-previous",
	uHa = "kix-move-to-heading2-next",
	vHa = "kix-move-to-heading2-previous",
	wHa = "kix-move-to-heading3-next",
	xHa = "kix-move-to-heading3-previous",
	yHa = "kix-move-to-heading4-next",
	zHa = "kix-move-to-heading4-previous",
	AHa = "kix-move-to-heading5-next",
	BHa = "kix-move-to-heading5-previous",
	CHa = "kix-move-to-heading6-next",
	DHa = "kix-move-to-heading6-previous",
	EHa = "kix-move-to-link-next",
	FHa = "kix-move-to-link-previous",
	GHa = "kix-move-to-list-item-next",
	HHa = "kix-move-to-list-item-previous",
	IHa = "kix-move-to-list-next",
	JHa = "kix-move-to-list-previous",
	KHa = "kix-move-to-table-column-end",
	LHa =
		"kix-move-to-table-column-next",
	MHa = "kix-move-to-table-column-previous",
	NHa = "kix-move-to-table-column-start",
	OHa = "kix-move-to-table-end",
	PHa = "kix-move-to-table-next",
	QHa = "kix-move-to-table-previous",
	RHa = "kix-move-to-table-row-end",
	SHa = "kix-move-to-table-row-next",
	THa = "kix-move-to-table-row-previous",
	UHa = "kix-move-to-table-row-start",
	VHa = "kix-move-to-table-start",
	di = "kix-msfd",
	ei = "kix-msfi",
	WHa = "kix-noteview-highlighted",
	XHa = "kix-noteviewmanager",
	YHa = "kix-noteviewmanager-fade1",
	ZHa = "kix-noteviewmanager-fade2",
	$Ha = "kix-noteviewmanager-fade3",
	aIa = "kix-page",
	bIa = "kix-page-bottom",
	cIa = "kix-page-color",
	dIa = "kix-page-compact",
	eIa = "kix-page-compact-first",
	fIa = "kix-page-footer",
	gIa = "kix-page-footnotes-separator",
	hIa = "kix-page-header",
	iIa = "kix-page-header-blurred",
	jIa = "kix-page-paginated",
	fi = "kix-page-setup-dialog",
	kIa = "kix-paginated-footnoteview",
	lIa = "kix-paginateddocumentplugin",
	mIa = "kix-paginateddocumentplugin-compact-mode",
	nIa = "kix-paragraph-indent-first-line",
	oIa = "kix-paragraphrenderer",
	pIa = "kix-paste-format",
	qIa = "kix-print-block",
	rIa = "kix-ps",
	gi = "kix-refresh-autogenerated-region",
	sIa = "kix-remove-cell",
	tIa = "kix-reply-to-comment",
	uIa = "kix-resize-embedded-object",
	hi = "kix-resize-table",
	vIa = "kix-row-view",
	wIa = "kix-rowrenderer-td",
	xIa = "kix-ruler",
	yIa = "kix-save-style-set",
	zIa = "kix-select-text-matching-style",
	ii = "kix-show-equation-toolbar",
	AIa = "kix-show-ruler",
	BIa = "kix-soa",
	CIa = "kix-sr",
	DIa = "kix-ss",
	EIa = "kix-ssc",
	ji = "kix-style-options-menu",
	ki = "kix-table-dialog",
	FIa = "kix-table-direction",
	GIa = "kix-table-view",
	HIa = "kix-tablerenderer",
	IIa = "kix-tablerenderer-container",
	li = "kix-te",
	JIa = "kix-tml",
	KIa = "kix-toggle-paginated-view",
	LIa = "kix-tools-translate",
	mi = "kix-tools-word-count",
	ni = "kix-ue",
	MIa = "kix-undo-save-style-set",
	NIa = "kix-update-cell-properties",
	OIa = "kix-update-drawing",
	PIa = "kix-update-embedded-entity-position",
	oi = "kix-update-heading-1",
	si = "kix-update-heading-2",
	ti = "kix-update-heading-3",
	ui = "kix-update-heading-4",
	vi = "kix-update-heading-5",
	wi = "kix-update-heading-6",
	xi = "kix-update-normal-text",
	yi = "kix-update-subtitle",
	QIa = "kix-update-tab-stop",
	zi = "kix-update-title",
	Ai = "kix-usfd",
	Bi = "kix-usfi",
	Ci = "kix-vcc",
	RIa = "kix-view-original",
	Di = "kix-vm",
	SIa = "kix-ww-overlay",
	TIa = "kix-zoomdocumentplugin-inner",
	UIa = "kix-zoomdocumentplugin-outer",
	VIa = "kixOfflineUrl",
	Ei = "kix_a11y",
	Fi = "kix_app",
	Gi = "kix_ita",
	Hi = "kix_jstex",
	Ii = "kix_tertiary",
	WIa = "kn",
	XIa = "kx-e",
	Ki = "l",
	Li = "la",
	Mi = "label",
	Ni = "language",
	YIa = "language-menu",
	ZIa = "languages ||||",
	$Ia = "lastColdStartedTimestamp",
	aJa = "lastModifiedClientTimestamp",
	bJa = "lastModifiedServerTimestamp",
	cJa = "lastSyncedTimestamp",
	dJa = "lastWarmStartedTimestamp",
	Oi = "le_nb",
	Pi = "left",
	eJa = "letters | abc | outline | count |",
	fJa = "letters | outline | count | ABC |",
	gJa = "lgs_l",
	hJa = "line",
	iJa = "line spacing ||||",
	jJa = "line-color",
	kJa = "line-through",
	lJa = "line-width",
	mJa = "lineviewRedraw",
	Qi = "link",
	nJa = "linksChange",
	Ri = "list",
	oJa = "live",
	pJa = "lj",
	qJa = "lm",
	rJa = "lnk_type",
	Si = "lnks_link",
	Ti = "load",
	sJa = "load default styles ||||",
	Ui = "loaded",
	tJa = "loadend",
	uJa = "localUrl not found in FetchResult.",
	Vi = "locale",
	vJa = "lock",
	wJa = "losecapture",
	xJa = "ls_id",
	yJa = "ls_nest",
	Wi = "ls_ts",
	zJa = "lssv",
	Xi = "ltr",
	Yi = "m",
	AJa = "ma",
	BJa = "macros-editor",
	CJa = "macros-exec",
	DJa = "macros-extensions",
	EJa = "macros-gallery",
	FJa = "macros-insert",
	GJa = "macros-manage",
	HJa = "macros-resume",
	Zi = "main_page",
	IJa = "managingDomain",
	JJa = "margin",
	KJa = "margin-left:",
	LJa = "margin-right:",
	MJa = "math | function | formula | add an equation |",
	NJa = "maybeUnload",
	OJa = "mc",
	PJa = "md",
	$i = "message",
	QJa = "meta",
	RJa = "missingdocosdocumentids",
	SJa = "ml",
	TJa = "mlti",
	aj = "mnemonic",
	UJa =
		"mouse",
	bj = "mousedown",
	cj = "mousemove",
	dj = "mouseout",
	ej = "mouseover",
	fj = "mouseup",
	VJa = "move_offscreen",
	WJa = "mozResponseArrayBuffer",
	XJa = "mpe",
	YJa = "mr",
	ZJa = "ms",
	$Ja = "ms, aborting",
	gj = "n",
	hj = "na",
	aKa = "named",
	bKa = "native code",
	cKa = "navigator.online switched.",
	dKa = "ne",
	eKa = "nestedEndTable",
	fKa = "nestedEndTableSameCell",
	gKa = "nestedStartTable",
	hKa = "nestedStartTableSameCell",
	iKa = "network",
	jKa = "new",
	kKa = "new page | new section | add a page break ||",
	lKa = "newModelFonts",
	ij = "next",
	jj = "nl_",
	kj = "no",
	mKa = "no-color",
	nKa = "noclipboardsupport",
	oKa = "nodeName",
	pKa = "nodeType",
	lj = "none",
	qKa = "nonsnapshottedocumentids",
	mj = "nor",
	rKa = "noreferrer",
	A = "normal",
	sKa = "not-effective",
	tKa = "notInTable",
	uKa = "npe",
	vKa = "nudge-positioned-entity",
	nj = "null",
	oj = "number",
	wKa = "number of pages | add page count |||",
	xKa = "numbers | 123 | numbered | outline | count",
	pj = "o",
	yKa = "oa",
	qj = "object",
	zKa = "od",
	rj = "offline",
	AKa = "offline/comment",
	BKa = "offline/edit",
	CKa = "offline/localpresent",
	DKa = "offline/view",
	EKa = "offlineOptedIn",
	sj = "ok",
	tj = "on",
	FKa =
		"onApiExported",
	GKa = "onChildApiReady",
	HKa = "onDocoClicked",
	IKa = "onInitialRedrawCompleted",
	JKa = "onPageCountChanged",
	KKa = "onPageSizeChanged",
	LKa = "ondlburl",
	MKa = "online",
	NKa = "ooi",
	uj = "opacity",
	OKa = "optInSecret",
	vj = "option",
	PKa = "options | settings | configurations ||",
	QKa = "or",
	RKa = "orientation | landscape | portrait | margins | letter",
	SKa = "oswu",
	TKa = "ouid",
	wj = "p",
	xj = "pa",
	yj = "padding",
	UKa = "padding-",
	VKa = "padding: 2px",
	WKa = "page breaks | pages | pagination ||",
	XKa = "page count | character count |||",
	YKa =
		"page numbers | add page numbers |||",
	ZKa = "pageCountChange",
	$Ka = "pageSetupPreferenceChange",
	aLa = "pageshow",
	bLa = "paint-format",
	zj = "paragraph",
	Aj = "paste",
	cLa = "pause",
	dLa = "pe_lo",
	eLa = "pe_to",
	fLa = "pem",
	gLa = "people ||||",
	hLa = "performPendingQueueOperation_(REPLACE)",
	iLa = "pg-down",
	jLa = "pg-up",
	kLa = "photo | picture | add a photo | add a picture | add an image",
	lLa = "picture | image | chart | graphic | add a diagram",
	mLa = "pixelLeft",
	nLa = "play",
	oLa = "pm",
	pLa = "point | px | pt | bigger | smaller",
	qLa = "pointer-events:none;cursor:default;",
	Hj = "pointerStateChange",
	Ij = "position",
	rLa = "position: absolute; top: -50000px; border: 0; z-index: -50000; width: 50000px",
	sLa = "position: absolute; top: -50000px; white-space:nowrap;overflow: hidden",
	tLa = "position: absolute; top: -50000px; width: 1in; height: 1in",
	uLa = "position: absolute; white-space:nowrap; font-size:0px; top: -50000px;",
	zLa = "position:absolute;top:-999px;left:-999px;",
	Jj = "positioned",
	ALa = "postmortem",
	BLa = "pqcKey",
	CLa = "preferences",
	Kj = "prev",
	DLa = "preview",
	ELa = "print",
	FLa = "printer ||||",
	GLa = 'progid:DXImageTransform.Microsoft.Matrix(M11="0.97", M12="-0.22",M21="0.22", M22="0.97", SizingMethod="auto expand"',
	Lj = "progress",
	HLa = "promo_show_on_load",
	ILa = "propertychange",
	JLa = "protocol-number",
	KLa = "ps_",
	LLa = "ps_al",
	Mj = "ps_hd",
	MLa = "ps_hdid",
	Nj = "ps_ifl",
	NLa = "ps_il",
	Oj = "ps_ir",
	OLa = "ps_ls",
	Pj = "ps_ltr",
	PLa = "ps_sa",
	QLa = "ps_sb",
	Qj = "ps_ts",
	RLa = 'pt;">',
	Rj = "punch",
	SLa = "punchOfflineUrl",
	Sj = "px",
	Tj = "px ",
	TLa = "px !important;",
	ULa = 'px">&nbsp;</span>',
	VLa = 'px"></span>',
	Uj = "px;",
	WLa = "px; background-color: ",
	XLa = "px; display: none;",
	Vj = "px; height: ",
	YLa = "px; left: ",
	ZLa = "px; margin: 0 ",
	$La = "px; width: ",
	aMa = 'px;">',
	bMa = "px;font-family:",
	cMa = "px;height:",
	dMa = 'px;height:100%"></span>',
	eMa = "px;padding-",
	Wj = "q",
	fMa = "queueIsAnachronistic",
	Xj = "r",
	Yj = "radio",
	gMa = "range",
	hMa = "readPendingQueue",
	iMa = "readPendingQueueCommands_",
	jMa = "reading file",
	kMa = "readonly",
	lMa = "ready",
	Zj = "readystatechange",
	mMa = "recentlyUsedFamilyList",
	nMa = "redo",
	oMa = "redraw",
	ak = "reference",
	pMa = "reference | search | lookup | look up |",
	bk =
		"relative",
	qMa = "release-number",
	rMa = "remove column ||||",
	sMa = "remove formatting ||||",
	tMa = "remove row ||||",
	uMa = "remove table ||||",
	vMa = "remove | delete |||",
	wMa = "removeFileEntry_",
	xMa = "request",
	yMa = "request-status",
	zMa = "require_direct_target",
	ck = "resize",
	AMa = "response",
	BMa = "resume",
	CMa = "revision",
	DMa = "revisions history | revert old changes | undo previous changes | fix | prior versions",
	EMa = "rgb",
	dk = "right",
	FMa = "ritz",
	GMa = "ritzOfflineUrl",
	HMa = "rm",
	ek = "role",
	gk = "row",
	IMa = "row_mh",
	JMa = "rplc",
	hk = "rtl",
	ik = "ru",
	KMa = "ruleList",
	LMa = "rvrt",
	jk = "s",
	MMa = "s ",
	kk = "sa",
	NMa = "sasl",
	OMa = "save",
	PMa = "save as | save a copy | save | title |",
	QMa = "save as | save | save a copy | copy to |",
	RMa = "save styles | save all styles |||",
	lk = "sb",
	mk = "sc",
	SMa = "sc_ow",
	TMa = "sc_sugg",
	UMa = "sclr_index",
	nk = "script",
	ok = "scroll",
	VMa = "scrollTo",
	WMa = "scrolling",
	pk = "sdef_ps",
	qk = "sdef_ts",
	XMa = "search | locate |||",
	rk = "select",
	YMa = "select everything ||||",
	ZMa = "selectAll",
	sk = "selected",
	tk = "selection",
	$Ma = "self",
	aNa = "semicolon",
	bNa = "send | webpage |||",
	cNa = "separateTables",
	dNa = "server_time_ms",
	uk = "set",
	eNa = "setContainerHeight",
	fNa = "setDocumentMetadataListener",
	gNa = "setFocusState",
	hNa = "setInterval",
	iNa = "setPageMargin",
	jNa = "setParentFocusCallback",
	kNa = "setTimeout",
	lNa = "setViewHidden",
	mNa = "setVisible",
	nNa = "sfpjy",
	oNa = "shapes",
	pNa = "share-can-email-as-attachment",
	qNa = "share-can-email-collaborators",
	rNa = "share-can-share",
	sNa = "share-email-attachment",
	tNa = "share-email-collaborators",
	uNa = "share-share",
	vk = "shift",
	wk = "shortcut",
	vNa = "shortcut_",
	xk = "show",
	wNa =
		"showEquationToolbar_ called when an equation toolbar does not exist.",
	xNa = "si",
	yk = "sid",
	yNa = "since the style intersection is not present in the style intersection cache map.",
	zNa = "single spacing | single space |||",
	ANa = "singleCell",
	BNa = "singleTable",
	CNa = "size: ",
	zk = "sl",
	DNa = "slka",
	ENa = "small-caps",
	FNa = "smartQuotesChange",
	GNa = "sourceIndex",
	HNa = "space",
	INa = "spacerIndex",
	JNa = "spacers",
	Ak = "span",
	KNa = "special-character",
	Bk = "spellcheck",
	LNa = "splice",
	MNa = "spreadsheet",
	Ck = "sr",
	Dk = "st",
	NNa = "star",
	Ek = "start",
	ONa = "startInTable",
	Hk = "startendmarker",
	PNa = "startmarker",
	QNa = "startupHints",
	RNa = "state",
	Ik = "stateChange",
	SNa = "stateIndex",
	TNa = "static",
	UNa = "status",
	Jk = "stop",
	VNa = "strike-through | strikethrough |||",
	WNa = "strikethrough",
	Kk = "string",
	XNa = "stringReplacementChange",
	YNa = "stringReplacementMapChange",
	ZNa = "strong | dark |||",
	Lk = "style",
	$Na = "styleSetList",
	Mk = "sub",
	aOa = "sub script | sub-script |||",
	bOa = "submit",
	cOa = "subscribe",
	dOa = "subscript",
	eOa = "succeeded",
	Nk = "success",
	fOa = "suggest",
	Ok = "sup",
	gOa = "super",
	hOa =
		"super script | super-script | exponent ||",
	iOa = "superscript",
	jOa = "swp",
	kOa = "symbol | add a symbol | add symbols ||",
	Pk = "syncMap",
	Qk = "t",
	Rk = "ta",
	Sk = "tab",
	lOa = "tab | increase paragraph indent |||",
	mOa = "tabIndex",
	nOa = "target",
	Tk = "tbl",
	oOa = "tbls_bc",
	pOa = "tbls_bw",
	qOa = "tbls_cols",
	rOa = "tbls_ltr",
	sOa = "tbs_al",
	tOa = "tbs_of",
	Uk = "te",
	uOa = "temporary",
	Vk = "test",
	Wk = "text",
	vOa = "text-bgcolor",
	wOa = "text-color",
	xOa = "text-decoration:none;",
	yOa = "text-decrementCharacter",
	zOa = "text-downOneLine",
	AOa = "text-downOneScreen",
	BOa = "text-endOfLine",
	COa = "text-endOfParagraph",
	DOa = "text-endOfSection",
	EOa = "text-endOfWord",
	FOa = "text-exitHeaderFooter",
	GOa = "text-footnoteMarker",
	HOa = "text-incrementCharacter",
	IOa = "text-nextTableCell",
	JOa = "text-previousTableCell",
	KOa = "text-selectAll",
	LOa = "text-startOfLine",
	MOa = "text-startOfParagraph",
	NOa = "text-startOfSection",
	OOa = "text-startOfWord",
	POa = "text-upOneLine",
	QOa = "text-upOneScreen",
	ROa = "text/css",
	Xk = "text/html",
	Yk = "text/javascript",
	Zk = "text/plain",
	$k = "text/x-vnd.google-docshtml+html",
	SOa =
		"textBlockInfoCache is empty",
	TOa = "textContent",
	UOa = "textInput",
	VOa = "textbox",
	WOa = "ti",
	al = "tick",
	XOa = "time",
	YOa = "timeout",
	bl = "title",
	ZOa = "tl",
	$Oa = "tm",
	aPa = "toString",
	bPa = "toc | index | list of sections | add a table of contents |",
	cPa = "toggle_display",
	dPa = "token",
	cl = "top",
	ePa = "top: ",
	fPa = "totalHeap",
	gPa = "touchcancel",
	dl = "touchend",
	el = "touchmove",
	fl = "touchstart",
	hPa = "transform",
	iPa = "transform:scale(%s);-webkit-transform:scale(%s);-moz-transform:scale(%s);-ms-transform:scale(%s);-o-transform:scale(%s);",
	jPa = "transition",
	kPa = 'transition:opacity 1s linear;">',
	lPa = "transitionend",
	gl = "transparent",
	mPa = "trix",
	nPa = "trixOfflineUrl",
	oPa = "trixOfflineUrlSuffix",
	pPa = "trixOnlineUrlSuffix",
	hl = "true",
	qPa = "ts_",
	il = "ts_bd",
	jl = "ts_bgc",
	kl = "ts_bgc2",
	ll = "ts_ff",
	ml = "ts_fgc",
	nl = "ts_fgc2",
	ol = "ts_fs",
	pl = "ts_it",
	ql = "ts_sc",
	rl = "ts_st",
	sl = "ts_un",
	tl = "ts_va",
	ul = "type",
	rPa = "typeChar",
	sPa = "typing",
	vl = "u",
	tPa = "uc=",
	uPa = "udurls",
	vPa = "ue",
	wPa = "uk",
	xPa = "ulnk_url",
	yPa = "uls",
	zPa = "undeliverable",
	wl = "underline",
	APa = "underline line-through",
	BPa = "undo",
	CPa = "unicode-bidi:bidi-override;",
	DPa = 'unicode-bidi:bidi-override;">',
	zl = "unknown",
	Al = "unload",
	Bl = "up",
	EPa = "updateComment",
	FPa = "updateVisiblePages",
	GPa = "updateoverlays",
	HPa = "ur",
	Cl = "url",
	IPa = "url | web site | address | web page | add a hyperlink",
	JPa = "usedHeap",
	KPa = "userActive",
	LPa = "userDictionaryChange",
	MPa = "userIdle",
	NPa = "utm_medium",
	OPa = "utm_source",
	Dl = "v",
	PPa = "va",
	El = "value",
	QPa = "var ",
	RPa = "var _et_ = 1;",
	SPa = "version",
	TPa = "vi",
	UPa = "video",
	VPa = "view",
	WPa = "viewMode",
	XPa = "viewModeButton",
	YPa = "viewModePreferenceChange",
	ZPa = "viewdecorate",
	Fl = "visibility",
	Gl = "visible",
	Hl = "w",
	Il = "warning",
	$Pa = "warningafterdeath",
	aQa = "web clipboard</span> and save them elsewhere. ",
	Jl = "webfontsRender",
	bQa = "webkitTransitionEnd",
	cQa = "white-space:nowrap",
	Kl = "width",
	Ll = "width: ",
	dQa = "window",
	eQa = "window.event",
	fQa = "window.location.href",
	gQa = "withCredentials",
	hQa = "wordList",
	iQa = "writeDataToFile_",
	jQa = "writeNewComment",
	kQa = "writePendingQueueMetadata_",
	lQa = "writePendingQueueSentBundle_",
	mQa = "writely",
	nQa = "www.google.com",
	Ml = "x",
	Nl = "y",
	oQa = "yes",
	Ol = "z",
	pQa = "zh_CN",
	qQa = "zh_TW",
	rQa = "zoom:%s;",
	sQa = "zx",
	Pl = "{",
	Ql = "|",
	tQa = "|[",
	Rl = "}",
	Sl = "~",
	Tl = "\u00a0",
	uQa = "\u00a9",
	vQa = "\u00ae",
	wQa = "\u00bc",
	xQa = "\u00bd",
	yQa = "\u00be",
	zQa = "\u0640",
	Ul = "\u2018",
	Vl = "\u2019",
	Wl = "\u201c",
	Xl = "\u201d",
	Yl = "\u2026",
	AQa = "\u2105",
	BQa = "\u2122",
	CQa = "\u2153",
	DQa = "\u2154",
	EQa = "\u2155",
	FQa = "\u2156",
	GQa = "\u2157",
	HQa = "\u2158",
	IQa = "\u2159",
	JQa = "\u215a",
	KQa = "\u215b",
	LQa = "\u215c",
	MQa = "\u215d",
	NQa = "\u215e",
	OQa = "\u2190",
	PQa = "\u2192",
	QQa = "\u21d0",
	RQa = "\u21d2",
	SQa =
		"\u21d4",
	TQa = "\u25a0",
	UQa = "\u25cb",
	VQa = "\u25cf",
	Zl = "\ue900",
	$l = "\ue901",
	WQa = "\ue902",
	am = "\ueffe",
	bm = "\uefff";

function gm() {
	return function(a) {
		return a
	}
}
function hm() {
	return function() {}
}
function im(a) {
	return function(b) {
		this[a] = b
	}
}
function C(a) {
	return function() {
		return this[a]
	}
}
function D(a) {
	return function() {
		return a
	}
}
var F, XQa = [];

function jm(a) {
	return function() {
		return XQa[a].apply(this, arguments)
	}
}
var YQa = YQa || {}, km = this;

function lm(a) {
	a = a.split(Qa);
	for (var b = km, c; c = a.shift();) if (b[c] != m) b = b[c];
	else return m;
	return b
}
function G() {}
function mm(a) {
	a.ya = function() {
		return a.qoa ? a.qoa : a.qoa = new a
	}
}

function nm(a) {
	var b = typeof a;
	if (b == qj) if (a) {
		if (a instanceof Array) return rd;
		if (a instanceof Object) return b;
		var c = Object.prototype.toString.call(a);
		if (c == Lra) return qj;
		if (c == Jra || typeof a.length == oj && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(LNa)) return rd;
		if (c == Kra || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(Fta)) return jg
	} else return nj;
	else if (b == jg && "undefined" == typeof a.call) return qj;
	return b
}
function I(a) {
	return a !== k
}
function om(a) {
	return nm(a) == rd
}
function pm(a) {
	var b = nm(a);
	return b == rd || b == qj && typeof a.length == oj
}
function qm(a) {
	return typeof a == Kk
}
function rm(a) {
	return typeof a == mta
}
function sm(a) {
	return typeof a == oj
}
function tm(a) {
	return nm(a) == jg
}
function um(a) {
	var b = typeof a;
	return b == qj && a != m || b == jg
}
function vm(a) {
	return a[ZQa] || (a[ZQa] = ++$Qa)
}
var ZQa = "closure_uid_" + (1E9 * Math.random() >>> 0),
	$Qa = 0;

function aRa(a, b, c) {
	return a.call.apply(a.bind, arguments)
}

function bRa(a, b, c) {
	a || f(Error());
	if (2 < arguments.length) {
		var d = Array.prototype.slice.call(arguments, 2);
		return function() {
			var c = Array.prototype.slice.call(arguments);
			Array.prototype.unshift.apply(c, d);
			return a.apply(b, c)
		}
	}
	return function() {
		return a.apply(b, arguments)
	}
}
function K(a, b, c) {
	K = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf(bKa) ? aRa : bRa;
	return K.apply(m, arguments)
}

function wm(a, b) {
	var c = Array.prototype.slice.call(arguments, 1);
	return function() {
		var b = Array.prototype.slice.call(arguments);
		b.unshift.apply(b, c);
		return a.apply(this, b)
	}
}
function xm(a, b) {
	for (var c in b) a[c] = b[c]
}
var ym = Date.now || function() {
		return +new Date
	};

function cRa(a) {
	if (km.execScript) km.execScript(a, Rka);
	else if (km.eval) if (dRa == m && (km.eval(RPa), "undefined" != typeof km._et_ ? (delete km._et_, dRa = l) : dRa = q), dRa) km.eval(a);
	else {
		var b = km.document,
			c = b.createElement(nk);
		c.type = Yk;
		c.defer = q;
		c.appendChild(b.createTextNode(a));
		b.body.appendChild(c);
		b.body.removeChild(c)
	} else f(Error("goog.globalEval not available"))
}
var dRa = m;

function zm(a, b) {
	var c = a.split(Qa),
		d = km;
	!(c[0] in d) && d.execScript && d.execScript(QPa + c[0]);
	for (var e; c.length && (e = c.shift());)!c.length && I(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
}
function L(a, b) {
	function c() {}
	c.prototype = b.prototype;
	a.M = b.prototype;
	a.prototype = new c;
	a.prototype.constructor = a
}
Function.prototype.bind = Function.prototype.bind || function(a, b) {
	if (1 < arguments.length) {
		var c = Array.prototype.slice.call(arguments, 1);
		c.unshift(this, a);
		return K.apply(m, c)
	}
	return K(this, a)
};

function Am(a) {
	Error.captureStackTrace ? Error.captureStackTrace(this, Am) : this.stack = Error().stack || r;
	a && (this.message = String(a))
}
L(Am, Error);
Am.prototype.name = "CustomError";

function Bm(a, b) {
	return 0 == a.lastIndexOf(b, 0)
}
function Cm(a, b) {
	var c = a.length - b.length;
	return 0 <= c && a.indexOf(b, c) == c
}
function Dm(a, b) {
	for (var c = 1; c < arguments.length; c++) {
		var d = String(arguments[c]).replace(/\$/g, cba);
		a = a.replace(/\%s/, d)
	}
	return a
}
function Em(a) {
	return /^[\s\xa0]*$/.test(a)
}
function Fm(a) {
	return Em(a == m ? r : String(a))
}
function Gm(a) {
	return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, r)
}
function Hm(a, b) {
	var c = String(a).toLowerCase(),
		d = String(b).toLowerCase();
	return c < d ? -1 : c == d ? 0 : 1
}

function Im(a) {
	return encodeURIComponent(String(a))
}
function Jm(a) {
	return decodeURIComponent(a.replace(/\+/g, s))
}
function Km(a) {
	if (!eRa.test(a)) return a; - 1 != a.indexOf(Ba) && (a = a.replace(fRa, Ca)); - 1 != a.indexOf(qb) && (a = a.replace(gRa, Ea)); - 1 != a.indexOf(Ab) && (a = a.replace(hRa, Da)); - 1 != a.indexOf(sa) && (a = a.replace(iRa, jba));
	return a
}
var fRa = /&/g,
	gRa = /</g,
	hRa = />/g,
	iRa = /\"/g,
	eRa = /[&<>\"]/;

function Lm(a, b) {
	return -1 != a.indexOf(b)
}

function Mm(a) {
	return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, Mra).replace(/\x08/g, Rra)
}
function Nm(a, b) {
	return Array(b + 1).join(a)
}
function Om(a, b) {
	var c = I(k) ? a.toFixed(k) : String(a),
		d = c.indexOf(Qa); - 1 == d && (d = c.length);
	return Nm(Xa, Math.max(0, b - d)) + c
}
function Pm(a) {
	return Array.prototype.join.call(arguments, r)
}
function Qm() {
	return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ ym()).toString(36)
}

function Rm(a, b) {
	for (var c = 0, d = Gm(String(a)).split(Qa), e = Gm(String(b)).split(Qa), g = Math.max(d.length, e.length), h = 0; 0 == c && h < g; h++) {
		var n = d[h] || r,
			p = e[h] || r,
			t = RegExp(rba, kg),
			u = RegExp(rba, kg);
		do {
			var x = t.exec(n) || [r, r, r],
				y = u.exec(p) || [r, r, r];
			if (0 == x[0].length && 0 == y[0].length) break;
			c = ((0 == x[1].length ? 0 : parseInt(x[1], 10)) < (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? -1 : (0 == x[1].length ? 0 : parseInt(x[1], 10)) > (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? 1 : 0) || ((0 == x[2].length) < (0 == y[2].length) ? -1 : (0 == x[2].length) > (0 == y[2].length) ? 1 : 0) || (x[2] < y[2] ? -1 : x[2] > y[2] ? 1 : 0)
		} while (0 == c)
	}
	return c
}
var jRa = 2147483648 * Math.random() | 0;

function kRa(a) {
	return String(a).replace(/\-([a-z])/g, function(a, c) {
		return c.toUpperCase()
	})
}
function lRa(a) {
	var b = qm(k) ? Mm(k) : Pra;
	return a.replace(RegExp(sba + (b ? tQa + b + Sra : r) + xba, kg), function(a, b, e) {
		return b + e.toUpperCase()
	})
};

function mRa() {};

function Sm(a) {
	return a[a.length - 1]
}
var Tm = Array.prototype,
	Um = Tm.indexOf ? function(a, b, c) {
		return Tm.indexOf.call(a, b, c)
	} : function(a, b, c) {
		c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
		if (qm(a)) return !qm(b) || 1 != b.length ? -1 : a.indexOf(b, c);
		for (; c < a.length; c++) if (c in a && a[c] === b) return c;
		return -1
	}, Vm = Tm.forEach ? function(a, b, c) {
		Tm.forEach.call(a, b, c)
	} : function(a, b, c) {
		for (var d = a.length, e = qm(a) ? a.split(r) : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
	};

function Wm(a, b, c) {
	for (var d = a.length, e = qm(a) ? a.split(r) : a, d = d - 1; 0 <= d; --d) d in e && b.call(c, e[d], d, a)
}
var Xm = Tm.filter ? function(a, b, c) {
		return Tm.filter.call(a, b, c)
	} : function(a, b, c) {
		for (var d = a.length, e = [], g = 0, h = qm(a) ? a.split(r) : a, n = 0; n < d; n++) if (n in h) {
			var p = h[n];
			b.call(c, p, n, a) && (e[g++] = p)
		}
		return e
	}, Ym = Tm.map ? function(a, b, c) {
		return Tm.map.call(a, b, c)
	} : function(a, b, c) {
		for (var d = a.length, e = Array(d), g = qm(a) ? a.split(r) : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
		return e
	}, Zm = Tm.some ? function(a, b, c) {
		return Tm.some.call(a, b, c)
	} : function(a, b, c) {
		for (var d = a.length, e = qm(a) ? a.split(r) : a, g = 0; g < d; g++) if (g in e && b.call(c, e[g], g, a)) return l;
		return q
	}, en = Tm.every ? function(a, b, c) {
		return Tm.every.call(a, b, c)
	} : function(a, b, c) {
		for (var d = a.length, e = qm(a) ? a.split(r) : a, g = 0; g < d; g++) if (g in e && !b.call(c, e[g], g, a)) return q;
		return l
	};

function fn(a, b, c) {
	b = gn(a, b, c);
	return 0 > b ? m : qm(a) ? a.charAt(b) : a[b]
}
function gn(a, b, c) {
	for (var d = a.length, e = qm(a) ? a.split(r) : a, g = 0; g < d; g++) if (g in e && b.call(c, e[g], g, a)) return g;
	return -1
}
function hn(a, b) {
	return 0 <= Um(a, b)
}
function jn(a) {
	return 0 == a.length
}

function kn(a) {
	if (!om(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
	a.length = 0
}
function ln(a, b) {
	hn(a, b) || a.push(b)
}
function mn(a, b, c) {
	nn(a, c, 0, b)
}
function on(a, b) {
	var c = Um(a, b),
		d;
	(d = 0 <= c) && pn(a, c);
	return d
}
function pn(a, b) {
	return 1 == Tm.splice.call(a, b, 1).length
}
function nRa(a, b, c) {
	b = gn(a, b, c);
	0 <= b && pn(a, b)
}
function qn(a) {
	return Tm.concat.apply(Tm, arguments)
}
function rn(a) {
	var b = a.length;
	if (0 < b) {
		for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
		return c
	}
	return []
}

function sn(a, b) {
	for (var c = 1; c < arguments.length; c++) {
		var d = arguments[c],
			e;
		if (om(d) || (e = pm(d)) && Object.prototype.hasOwnProperty.call(d, Gta)) a.push.apply(a, d);
		else if (e) for (var g = a.length, h = d.length, n = 0; n < h; n++) a[g + n] = d[n];
		else a.push(d)
	}
}
function nn(a, b, c, d) {
	return Tm.splice.apply(a, tn(arguments, 1))
}
function tn(a, b, c) {
	return 2 >= arguments.length ? Tm.slice.call(a, b) : Tm.slice.call(a, b, c)
}

function un(a, b) {
	for (var c = b || a, d = {}, e = 0, g = 0; g < a.length;) {
		var h = a[g++],
			n = um(h) ? pj + vm(h) : (typeof h).charAt(0) + h;
		Object.prototype.hasOwnProperty.call(d, n) || (d[n] = l, c[e++] = h)
	}
	c.length = e
}
function vn(a, b, c) {
	c = c || wn;
	for (var d = 0, e = a.length, g; d < e;) {
		var h = d + e >> 1,
			n;
		n = c(b, a[h]);
		0 < n ? d = h + 1 : (e = h, g = !n)
	}
	return g ? d : ~d
}
function xn(a, b) {
	Tm.sort.call(a, b || wn)
}

function yn(a, b) {
	for (var c = 0; c < a.length; c++) a[c] = {
		index: c,
		value: a[c]
	};
	var d = b || wn;
	xn(a, function(a, b) {
		return d(a.value, b.value) || a.index - b.index
	});
	for (c = 0; c < a.length; c++) a[c] = a[c].value
}
function zn(a, b, c) {
	if (!pm(a) || !pm(b) || a.length != b.length) return q;
	var d = a.length;
	c = c || oRa;
	for (var e = 0; e < d; e++) if (!c(a[e], b[e])) return q;
	return l
}
function wn(a, b) {
	return a > b ? 1 : a < b ? -1 : 0
}
function oRa(a, b) {
	return a === b
}
function An(a, b, c) {
	c = vn(a, b, c);
	0 > c && mn(a, b, -(c + 1))
}
function Bn(a, b, c) {
	b = vn(a, b, c);
	0 <= b && pn(a, b)
}

function pRa(a, b) {
	for (var c = [], d = 0; d < b; d++) c[d] = a;
	return c
}
function qRa(a) {
	for (var b = [], c = 0; c < arguments.length; c++) {
		var d = arguments[c];
		om(d) ? b.push.apply(b, qRa.apply(m, d)) : b.push(d)
	}
	return b
};

function Cn(a) {
	a = String(a);
	if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, Db).replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, cd).replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, r))) try {
		return eval(Ha + a + Ia)
	} catch (b) {}
	f(Error("Invalid JSON string: " + a))
}
function Dn(a) {
	return eval(Ha + a + Ia)
}
function En(a) {
	return (new Fn(k)).Pa(a)
}
function Fn(a) {
	this.A = a
}
Fn.prototype.Pa = function(a) {
	var b = [];
	rRa(this, a, b);
	return b.join(r)
};

function rRa(a, b, c) {
	switch (typeof b) {
		case Kk:
			sRa(b, c);
			break;
		case oj:
			c.push(isFinite(b) && !isNaN(b) ? b : nj);
			break;
		case mta:
			c.push(b);
			break;
		case "undefined":
			c.push(nj);
			break;
		case qj:
			if (b == m) {
				c.push(nj);
				break
			}
			if (om(b)) {
				var d = b.length;
				c.push(ad);
				for (var e = r, g = 0; g < d; g++) c.push(e), e = b[g], rRa(a, a.A ? a.A.call(b, String(g), e) : e, c), e = La;
				c.push(cd);
				break
			}
			c.push(Pl);
			d = r;
			for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], typeof e != jg && (c.push(d), sRa(g, c), c.push(nb), rRa(a, a.A ? a.A.call(b, g, e) : e, c), d = La));
			c.push(Rl);
			break;
		case jg:
			break;
		default:
			f(Error("Unknown type: " + typeof b))
	}
}
var tRa = {
	'"': '\\"',
	"\\": Ora,
	"/": "\\/",
	"\b": "\\b",
	"\f": "\\f",
	"\n": "\\n",
	"\r": "\\r",
	"\t": "\\t",
	"\x0B": "\\u000b"
}, uRa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

function sRa(a, b) {
	b.push(sa, a.replace(uRa, function(a) {
		if (a in tRa) return tRa[a];
		var b = a.charCodeAt(0),
			e = Qra;
		16 > b ? e += xca : 256 > b ? e += wca : 4096 > b && (e += Xa);
		return tRa[a] = e + b.toString(16)
	}), sa)
};

function Gn() {
	this.A = []
}
function Hn(a, b, c, d) {
	b || (b = c ? [c] : []);
	a.Ua = b;
	a.A = [];
	if (d) for (b = 0; b < d.length; b++) a.Ua[d[b]] = a.Ua[d[b]] || []
}
function In(a, b, c) {
	if (!a.A[c]) {
		a.A[c] = [];
		for (var d = 0; d < a.Ua[c].length; d++) a.A[c][d] = new b(a.Ua[c][d])
	}
	return a.A[c]
}
function Jn(a, b, c) {
	a.A[b] = c;
	a.Ua[b] = c ? c.ce() : c
}
Gn.prototype.ce = C(Mqa);
Gn.prototype.Pa = function() {
	return En(this.ce())
};
Gn.prototype.toString = function() {
	return this.Ua.toString()
};

function Kn(a) {
	this.A = [];
	Hn(this, a, r, [2])
}
L(Kn, Gn);
Kn.prototype.getName = function() {
	return this.Ua[0]
};

function Ln(a) {
	this.A = [];
	Hn(this, a, r, [0])
}
L(Ln, Gn);

function vRa(a) {
	return a.Ua[1] != m ? a.Ua[1] : q
};

function Mn(a, b, c) {
	for (var d in a) b.call(c, a[d], d, a)
}
function wRa(a, b) {
	var c = {}, d;
	for (d in a) c[d] = b.call(k, a[d], d, a);
	return c
}
function Nn(a) {
	var b = 0,
		c;
	for (c in a) b++;
	return b
}
function On(a) {
	var b = [],
		c = 0,
		d;
	for (d in a) b[c++] = a[d];
	return b
}
function Pn(a) {
	var b = [],
		c = 0,
		d;
	for (d in a) b[c++] = d;
	return b
}
function Qn(a, b) {
	for (var c in a) if (a[c] == b) return l;
	return q
}
function xRa(a, b) {
	var c;
	a: {
		for (c in a) if (b.call(k, a[c], c, a)) break a;
		c = k
	}
	return c && a[c]
}
function Rn(a) {
	for (var b in a) return q;
	return l
}

function yRa(a) {
	for (var b in a) delete a[b]
}
function Sn(a, b) {
	b in a && delete a[b]
}
function Tn(a, b, c) {
	b in a && f(Error('The object already contains the key "' + b + sa));
	a[b] = c
}
function Un(a, b) {
	return b in a ? a[b] : k
}
function Vn(a) {
	var b = {}, c;
	for (c in a) b[c] = a[c];
	return b
}
function Wn(a) {
	var b = nm(a);
	if (b == qj || b == rd) {
		if (a.La) return a.La();
		var b = b == rd ? [] : {}, c;
		for (c in a) b[c] = Wn(a[c]);
		return b
	}
	return a
}
function zRa(a) {
	var b = {}, c;
	for (c in a) b[a[c]] = c;
	return b
}
var ARa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", aPa, "valueOf"];

function Xn(a, b) {
	for (var c, d, e = 1; e < arguments.length; e++) {
		d = arguments[e];
		for (c in d) a[c] = d[c];
		for (var g = 0; g < ARa.length; g++) c = ARa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
	}
}
function Yn(a) {
	var b = arguments.length;
	if (1 == b && om(arguments[0])) return Yn.apply(m, arguments[0]);
	b % 2 && f(Error(Xqa));
	for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
	return c
}

function Zn(a) {
	var b = arguments.length;
	if (1 == b && om(arguments[0])) return Zn.apply(m, arguments[0]);
	for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = l;
	return c
};

function $n(a) {
	this.A = {};
	(a = a || km._docs_flag_initialData) && Xn(this.A, a)
}
mm($n);
$n.prototype.get = function(a) {
	return this.A[a]
};

function go(a, b) {
	var c = a.get(b);
	return qm(c) ? c == hl || c == Za : !! c
}
function ho(a, b) {
	return Number(a.get(b))
}
function io(a, b) {
	var c = a.get(b);
	return c != m ? String(c) : r
}
function BRa() {
	var a = jo().get(OEa);
	return a != m ? Object(a) : {}
};

function jo() {
	return $n.ya()
};

function CRa() {
	return go(jo(), Gwa)
};

function M() {}
M.prototype.sI = q;
M.prototype.cd = C("sI");
M.prototype.dispose = function() {
	this.sI || (this.sI = l, this.O())
};

function N(a, b) {
	var c = wm(O, b);
	a.Go || (a.Go = []);
	a.Go.push(K(c, k))
}
M.prototype.O = function() {
	if (this.Go) for (; this.Go.length;) this.Go.shift()()
};

function O(a) {
	a && typeof a.dispose == jg && a.dispose()
}
function ko(a) {
	for (var b = 0, c = arguments.length; b < c; ++b) {
		var d = arguments[b];
		pm(d) ? ko.apply(m, d) : O(d)
	}
};

function lo() {
	this.A = [];
	this.C = {}
}
L(lo, M);
F = lo.prototype;
F.lga = 1;
F.cS = 0;
F.$a = function(a, b, c) {
	var d = this.C[a];
	d || (d = this.C[a] = []);
	var e = this.lga;
	this.A[e] = a;
	this.A[e + 1] = b;
	this.A[e + 2] = c;
	this.lga = e + 3;
	d.push(e);
	return e
};
F.cg = function(a, b, c) {
	if (a = this.C[a]) {
		var d = this.A;
		if (a = fn(a, function(a) {
			return d[a + 1] == b && d[a + 2] == c
		})) return this.QF(a)
	}
	return q
};
F.QF = function(a) {
	if (0 != this.cS) return this.F || (this.F = []), this.F.push(a), q;
	var b = this.A[a];
	if (b) {
		var c = this.C[b];
		c && on(c, a);
		delete this.A[a];
		delete this.A[a + 1];
		delete this.A[a + 2]
	}
	return !!b
};
F.YK = function(a, b) {
	var c = this.C[a];
	if (c) {
		this.cS++;
		for (var d = tn(arguments, 1), e = 0, g = c.length; e < g; e++) {
			var h = c[e];
			this.A[h + 1].apply(this.A[h + 2], d)
		}
		this.cS--;
		if (this.F && 0 == this.cS) for (; c = this.F.pop();) this.QF(c)
	}
};
F.clear = function(a) {
	if (a) {
		var b = this.C[a];
		b && (Vm(b, this.QF, this), delete this.C[a])
	} else this.A.length = 0, this.C = {}
};
F.Dd = function(a) {
	if (a) {
		var b = this.C[a];
		return b ? b.length : 0
	}
	a = 0;
	for (b in this.C) a += this.Dd(b);
	return a
};
F.O = function() {
	lo.M.O.call(this);
	delete this.A;
	delete this.C;
	delete this.F
};

function mo(a, b) {
	this.cb = a;
	this.F = {};
	this.A = b ? Vn(b) : {};
	I(this.A[gFa]) || (this.A[gFa] = l);
	I(this.A[hFa]) || (this.A[hFa] = l);
	this.isEnabled() || (this.F[ke] = l);
	this.C = new lo
}
L(mo, M);
F = mo.prototype;
F.O = function() {
	mo.M.O.call(this);
	this.C.dispose();
	delete this.C;
	delete this.A
};
F.aa = C(Fd);
F.isEnabled = function() {
	return !!this.Nb(Sf)
};
F.Ca = function(a, b) {
	var c = b || ke,
		d = l;
	if (a) {
		delete this.F[c];
		for (var e in this.F) {
			d = q;
			break
		}
	} else this.F[c] = l, d = q;
	this.setProperty(Sf, d)
};

function DRa(a) {
	return !!a.Nb(hFa)
}

function ERa(a, b) {
	a.setProperty(hFa, b)
}
F.Wa = function() {
	return !!this.Nb(Gl)
};
F.ua = function(a) {
	this.setProperty(Gl, a)
};
F.Cj = function() {
	return !!this.Nb(sk)
};
F.Yc = function(a) {
	this.setProperty(sk, a)
};
F.jn = function() {
	return this.Nb(Mi)
};
F.dd = function() {
	return this.Nb(hh)
};
F.Ga = function() {
	return this.Nb(El)
};
F.Cb = function(a) {
	this.setProperty(El, a)
};
F.Nb = function(a) {
	return this.A[a]
};
F.setProperty = function(a, b) {
	var c = this.A[a];
	if (b !== c) {
		this.A[a] = b;
		this.C.YK(Md, a, b, c);
		var d = FRa(a);
		d && this.C.YK(d, a, b, c)
	}
};
F.qb = function(a, b) {
	if (this.isEnabled()) {
		var c = this.A.selected;
		c != m && this.Yc(!c);
		this.C.YK(v, a, b)
	}
};
F.$a = function(a, b, c) {
	return this.C.$a(a, b, c)
};
F.cg = function(a, b, c) {
	return this.C.cg(a, b, c)
};
F.QF = function(a) {
	return this.C.QF(a)
};

function GRa(a) {
	Vm(a, function(b) {
		b.setProperty(Yj, l);
		b.$a(Md, function(c, d) {
			c == sk && d && Vm(a, function(a) {
				a != b && a.Yc(q)
			})
		})
	})
}
function FRa(a) {
	switch (a) {
		case Sf:
			return Sf;
		case sk:
			return tk;
		case Gl:
			return Fl;
		case El:
			return El;
		default:
			return m
	}
};
var HRa;

function no(a) {
	a = a.className;
	return qm(a) && a.match(/\S+/g) || []
}
function P(a, b) {
	var c = no(a),
		d = tn(arguments, 1),
		e = c.length + d.length;
	IRa(c, d);
	a.className = c.join(s);
	return c.length == e
}
function oo(a, b) {
	var c = no(a),
		d = tn(arguments, 1),
		e = JRa(c, d);
	a.className = e.join(s);
	return e.length == c.length - d.length
}
function IRa(a, b) {
	for (var c = 0; c < b.length; c++) hn(a, b[c]) || a.push(b[c])
}
function JRa(a, b) {
	return Xm(a, function(a) {
		return !hn(b, a)
	})
}

function po(a, b, c) {
	for (var d = no(a), e = q, g = 0; g < d.length; g++) d[g] == b && (nn(d, g--, 1), e = l);
	e && (d.push(c), a.className = d.join(s))
}
function qo(a, b, c) {
	var d = no(a);
	qm(b) ? on(d, b) : om(b) && (d = JRa(d, b));
	qm(c) && !hn(d, c) ? d.push(c) : om(c) && IRa(d, c);
	a.className = d.join(s)
}
function ro(a, b) {
	return hn(no(a), b)
}
function so(a, b, c) {
	c ? P(a, b) : oo(a, b)
}
function KRa(a, b) {
	var c = !ro(a, b);
	so(a, b, c)
};

function LRa(a) {
	return Math.floor(Math.random() * a)
}
function to(a, b, c) {
	return Math.min(Math.max(a, b), c)
};

function uo(a, b) {
	this.x = I(a) ? a : 0;
	this.y = I(b) ? b : 0
}
F = uo.prototype;
F.La = function() {
	return new uo(this.x, this.y)
};
F.ceil = function() {
	this.x = Math.ceil(this.x);
	this.y = Math.ceil(this.y);
	return this
};
F.floor = function() {
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
	return this
};
F.round = function() {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this
};
F.translate = jm(62);
F.scale = jm(138);

function vo(a, b) {
	this.width = a;
	this.height = b
}
function MRa(a, b) {
	return a == b ? l : !a || !b ? q : a.width == b.width && a.height == b.height
}
F = vo.prototype;
F.La = function() {
	return new vo(this.width, this.height)
};
F.jc = function() {
	return !(this.width * this.height)
};
F.ceil = function() {
	this.width = Math.ceil(this.width);
	this.height = Math.ceil(this.height);
	return this
};
F.floor = function() {
	this.width = Math.floor(this.width);
	this.height = Math.floor(this.height);
	return this
};
F.round = function() {
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	return this
};
F.scale = jm(137);
var wo, NRa, ORa, PRa, QRa, xo, yo, zo, RRa;

function Ao() {
	return km.navigator ? km.navigator.userAgent : m
}
function SRa() {
	return km.navigator
}
QRa = PRa = ORa = NRa = wo = q;
var Bo;
if (Bo = Ao()) {
	var TRa = SRa();
	wo = 0 == Bo.indexOf(Zma);
	NRa = !wo && -1 != Bo.indexOf(sc);
	PRa = (ORa = !wo && -1 != Bo.indexOf("WebKit")) && -1 != Bo.indexOf("Mobile");
	QRa = !wo && !ORa && "Gecko" == TRa.product
}
var Co = wo,
	Q = NRa,
	Do = QRa,
	Eo = ORa,
	URa = PRa,
	VRa = SRa(),
	WRa = VRa && VRa.platform || r;
xo = Lm(WRa, "Mac");
yo = Lm(WRa, "Win");
zo = Lm(WRa, "Linux");
RRa = !! SRa() && Lm(SRa().appVersion || r, "X11");
var Fo = Ao();
Fo && Fo.indexOf(Oea);
Fo && Fo.indexOf(rEa);
Fo && Fo.indexOf(qEa);

function XRa() {
	var a = km.document;
	return a ? a.documentMode : k
}
var YRa;
a: {
	var ZRa = r,
		Go;
	if (Co && km.opera) var $Ra = km.opera.version,
		ZRa = typeof $Ra == jg ? $Ra() : $Ra;
	else if (Do ? Go = /rv\:([^\);]+)(\)|;)/ : Q ? Go = /MSIE\s+([^\);]+)(\)|;)/ : Eo && (Go = /WebKit\/(\S+)/), Go) var aSa = Go.exec(Ao()),
		ZRa = aSa ? aSa[1] : r;
	if (Q) {
		var bSa = XRa();
		if (bSa > parseFloat(ZRa)) {
			YRa = String(bSa);
			break a
		}
	}
	YRa = ZRa
}
var Ho = YRa,
	cSa = {};

function Io(a) {
	return cSa[a] || (cSa[a] = 0 <= Rm(Ho, a))
}
function Jo(a) {
	return Q && dSa >= a
}
var eSa = km.document,
	dSa = !eSa || !Q ? k : XRa() || (eSa.compatMode == ufa ? parseInt(Ho, 10) : 5);
var fSa = !Q || Jo(9),
	gSa = !Do && !Q || Q && Jo(9) || Do && Io("1.9.1"),
	hSa = Q && !Io(mb),
	iSa = Q || Co || Eo;

function Ko(a) {
	return a ? new Lo(Mo(a)) : HRa || (HRa = new Lo)
}
function No(a) {
	return qm(a) ? document.getElementById(a) : a
}
function jSa(a, b) {
	var c = b || document;
	return c.querySelectorAll && c.querySelector ? c.querySelectorAll(Qa + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : kSa(document, Ja, a, b)
}
function Oo(a, b) {
	var c = b || document,
		d = m;
	return (d = c.querySelectorAll && c.querySelector ? c.querySelector(Qa + a) : jSa(a, b)[0]) || m
}

function kSa(a, b, c, d) {
	a = d || a;
	b = b && b != Ja ? b.toUpperCase() : r;
	if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? Qa + c : r));
	if (c && a.getElementsByClassName) {
		a = a.getElementsByClassName(c);
		if (b) {
			d = {};
			for (var e = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[e++] = h);
			d.length = e;
			return d
		}
		return a
	}
	a = a.getElementsByTagName(b || Ja);
	if (c) {
		d = {};
		for (g = e = 0; h = a[g]; g++) b = h.className, typeof b.split == jg && hn(b.split(/\s+/), c) && (d[e++] = h);
		d.length = e;
		return d
	}
	return a
}

function lSa(a, b) {
	Mn(b, function(b, d) {
		d == Lk ? a.style.cssText = b : d == Uta ? a.className = b : d == kDa ? a.htmlFor = b : d in mSa ? a.setAttribute(mSa[d], b) : Bm(d, Esa) || Bm(d, Fua) ? a.setAttribute(d, b) : a[d] = b
	})
}
var mSa = {
	cellpadding: "cellPadding",
	cellspacing: "cellSpacing",
	colspan: "colSpan",
	frameborder: "frameBorder",
	height: rg,
	maxlength: "maxLength",
	role: ek,
	rowspan: "rowSpan",
	type: ul,
	usemap: "useMap",
	valign: "vAlign",
	width: Kl
};

function Po(a) {
	a = (a || window).document;
	a = nSa(a) ? a.documentElement : a.body;
	return new vo(a.clientWidth, a.clientHeight)
}
function oSa(a) {
	return !Eo && nSa(a) ? a.documentElement : a.body
}
function Qo(a) {
	return a ? a.parentWindow || a.defaultView : window
}
function Ro(a, b, c) {
	return pSa(document, arguments)
}

function pSa(a, b) {
	var c = b[0],
		d = b[1];
	if (!fSa && d && (d.name || d.type)) {
		c = [qb, c];
		d.name && c.push(Caa, Km(d.name), sa);
		if (d.type) {
			c.push(Jaa, Km(d.type), sa);
			var e = {};
			Xn(e, d);
			delete e.type;
			d = e
		}
		c.push(Ab);
		c = c.join(r)
	}
	c = a.createElement(c);
	d && (qm(d) ? c.className = d : om(d) ? P.apply(m, [c].concat(d)) : lSa(c, d));
	2 < b.length && qSa(a, c, b, 2);
	return c
}
function qSa(a, b, c, d) {
	function e(c) {
		c && b.appendChild(qm(c) ? a.createTextNode(c) : c)
	}
	for (; d < c.length; d++) {
		var g = c[d];
		pm(g) && !(um(g) && 0 < g.nodeType) ? Vm(rSa(g) ? rn(g) : g, e) : e(g)
	}
}

function nSa(a) {
	return a.compatMode == ufa
}
function So(a) {
	if (1 != a.nodeType) return q;
	switch (a.tagName) {
		case Zda:
		case $da:
		case dfa:
		case efa:
		case sfa:
		case tfa:
		case aia:
		case Gia:
		case fc:
		case ic:
		case jc:
		case hc:
		case Nja:
		case Vka:
		case Zka:
		case uma:
		case vma:
		case Hla:
		case Rma:
		case dna:
		case Lc:
		case roa:
		case soa:
		case Vpa:
		case tra:
			return q
	}
	return l
}
function sSa(a, b) {
	qSa(Mo(a), a, arguments, 1)
}
function To(a) {
	for (var b; b = a.firstChild;) a.removeChild(b)
}

function Uo(a, b) {
	b.parentNode && b.parentNode.insertBefore(a, b)
}
function Vo(a, b) {
	b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function tSa(a, b, c) {
	a.insertBefore(b, a.childNodes[c] || m)
}
function Wo(a) {
	return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
function uSa(a, b) {
	var c = b.parentNode;
	c && c.replaceChild(a, b)
}
function vSa(a) {
	var b, c = a.parentNode;
	if (c && 11 != c.nodeType) {
		if (a.removeNode) return a.removeNode(q);
		for (; b = a.firstChild;) c.insertBefore(b, a);
		return Wo(a)
	}
}

function wSa(a) {
	return gSa && a.children != k ? a.children : Xm(a.childNodes, function(a) {
		return 1 == a.nodeType
	})
}
function xSa(a) {
	return a.firstElementChild != k ? a.firstElementChild : Xo(a.firstChild, l)
}
function ySa(a) {
	return a.nextElementSibling != k ? a.nextElementSibling : Xo(a.nextSibling, l)
}
function Xo(a, b) {
	for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
	return a
}
function Yo(a) {
	return um(a) && 1 == a.nodeType
}

function Zo(a, b) {
	if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
	if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
	for (; b && a != b;) b = b.parentNode;
	return b == a
}

function zSa(a, b) {
	if (a == b) return 0;
	if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	if (Q && !Jo(9)) {
		if (9 == a.nodeType) return -1;
		if (9 == b.nodeType) return 1
	}
	if (GNa in a || a.parentNode && GNa in a.parentNode) {
		var c = 1 == a.nodeType,
			d = 1 == b.nodeType;
		if (c && d) return a.sourceIndex - b.sourceIndex;
		var e = a.parentNode,
			g = b.parentNode;
		return e == g ? ASa(a, b) : !c && Zo(e, b) ? -1 * BSa(a, b) : !d && Zo(g, a) ? BSa(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
	}
	d = Mo(a);
	c = d.createRange();
	c.selectNode(a);
	c.collapse(l);
	d = d.createRange();
	d.selectNode(b);
	d.collapse(l);
	return c.compareBoundaryPoints(km.Range.START_TO_END, d)
}
function BSa(a, b) {
	var c = a.parentNode;
	if (c == b) return -1;
	for (var d = b; d.parentNode != c;) d = d.parentNode;
	return ASa(d, a)
}
function ASa(a, b) {
	for (var c = b; c = c.previousSibling;) if (c == a) return -1;
	return 1
}

function CSa(a) {
	var b, c = arguments.length;
	if (c) {
		if (1 == c) return arguments[0]
	} else return m;
	var d = [],
		e = Infinity;
	for (b = 0; b < c; b++) {
		for (var g = [], h = arguments[b]; h;) g.unshift(h), h = h.parentNode;
		d.push(g);
		e = Math.min(e, g.length)
	}
	g = m;
	for (b = 0; b < e; b++) {
		for (var h = d[0][b], n = 1; n < c; n++) if (h != d[n][b]) return g;
		g = h
	}
	return g
}
function Mo(a) {
	return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function $o(a) {
	return a.contentDocument || a.contentWindow.document
}

function ap(a, b) {
	if (TOa in a) a.textContent = b;
	else if (a.firstChild && 3 == a.firstChild.nodeType) {
		for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
		a.firstChild.data = b
	} else To(a), a.appendChild(Mo(a).createTextNode(String(b)))
}
var DSa = {
	SCRIPT: 1,
	STYLE: 1,
	HEAD: 1,
	IFRAME: 1,
	OBJECT: 1
}, ESa = {
	IMG: s,
	BR: da
};

function bp(a, b) {
	b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute(mOa))
}

function cp(a) {
	if (hSa && QEa in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, da);
	else {
		var b = [];
		FSa(a, b, l);
		a = b.join(r)
	}
	a = a.replace(/ \xAD /g, s).replace(/\xAD/g, r);
	a = a.replace(/\u200B/g, r);
	hSa || (a = a.replace(/ +/g, s));
	a != s && (a = a.replace(/^\s*/, r));
	return a
}
function FSa(a, b, c) {
	if (!(a.nodeName in DSa)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, r)) : b.push(a.nodeValue);
	else if (a.nodeName in ESa) b.push(ESa[a.nodeName]);
	else for (a = a.firstChild; a;) FSa(a, b, c), a = a.nextSibling
}

function rSa(a) {
	if (a && typeof a.length == oj) {
		if (um(a)) return typeof a.item == jg || typeof a.item == Kk;
		if (tm(a)) return typeof a.item == jg
	}
	return q
}
function dp(a, b, c, d) {
	c || (a = a.parentNode);
	c = d == m;
	for (var e = 0; a && (c || e <= d);) {
		if (b(a)) return a;
		a = a.parentNode;
		e++
	}
	return m
}
function Lo(a) {
	this.Ub = a || km.document || document
}
F = Lo.prototype;
F.ma = Ko;
F.sb = C("Ub");
F.N = function(a) {
	return qm(a) ? this.Ub.getElementById(a) : a
};
F.kt = jm(27);
F.Mb = function(a, b) {
	return Oo(a, b || this.Ub)
};
F.dp = function(a) {
	return Po(a || this.Vb())
};
F.ha = function(a, b, c) {
	return pSa(this.Ub, arguments)
};
F.createElement = function(a) {
	return this.Ub.createElement(a)
};
F.createTextNode = function(a) {
	return this.Ub.createTextNode(String(a))
};
F.nK = jm(177);

function kp(a) {
	return nSa(a.Ub)
}
F.Vb = function() {
	return this.Ub.parentWindow || this.Ub.defaultView
};

function lp(a) {
	var b = a.Ub;
	a = oSa(b);
	b = b.parentWindow || b.defaultView;
	return Q && Io(ab) && b.pageYOffset != a.scrollTop ? new uo(a.scrollLeft, a.scrollTop) : new uo(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
F.Bj = jm(4);
F.appendChild = function(a, b) {
	a.appendChild(b)
};
F.append = sSa;
F.Ud = To;
F.Nz = Uo;
F.LE = Vo;
F.NZ = tSa;
F.removeNode = Wo;
F.NI = uSa;
F.qda = vSa;
F.jN = wSa;
F.Tr = xSa;
F.mY = ySa;
F.IT = Yo;
F.Du = function(a) {
	if (iSa) return a.parentElement;
	a = a.parentNode;
	return Yo(a) ? a : m
};
F.contains = Zo;
F.xua = Mo;
F.pxa = $o;
F.Hh = ap;
F.KZ = bp;
F.Bh = cp;
F.$Qa = dp;
var GSa = [],
	HSa = [],
	ISa = q;

function JSa(a) {
	GSa[GSa.length] = a;
	if (ISa) for (var b = 0; b < HSa.length; b++) a(K(HSa[b].A, HSa[b]))
};

function mp(a) {
	mp[s](a);
	return a
}
mp[s] = G;

function KSa(a, b) {
	try {
		return mp(a[b]), l
	} catch (c) {}
	return q
};
var LSa = !Q || Jo(9),
	MSa = !Q || Jo(9),
	NSa = Q && !Io(mb),
	np = !Eo || Io(Zca),
	OSa = Do && Io("1.9b") || Q && Io(lb) || Co && Io("9.5") || Eo && Io(Zca),
	PSa = Do && !Io(lb) || Q && !Io(mb);

function R(a, b) {
	this.type = a;
	this.currentTarget = this.target = b
}
F = R.prototype;
F.O = hm();
F.dispose = hm();
F.$y = q;
F.EW = l;
F.stopPropagation = function() {
	this.$y = l
};
F.preventDefault = function() {
	this.EW = q
};
var QSa = Q ? fg : "DOMFocusIn",
	RSa = Q ? XCa : "DOMFocusOut",
	SSa = Eo ? bQa : Co ? "oTransitionEnd" : lPa,
	TSa = {
		VYa: Od,
		pZa: ge,
		G4a: bj,
		K4a: fj,
		J4a: ej,
		I4a: dj,
		H4a: cj,
		g6a: "selectstart",
		X3a: gh,
		W3a: fh,
		Y3a: ih,
		Z_: Ad,
		Iqa: eg,
		cWa: je,
		$Za: QSa,
		a_a: RSa,
		VVa: Md,
		HWa: rk,
		M6a: bOa,
		yJ: Vg,
		N5a: ILa,
		JZa: yf,
		EZa: xf,
		GZa: IBa,
		IZa: KBa,
		HZa: JBa,
		KZa: OBa,
		FZa: HBa,
		Z6a: fl,
		Y6a: el,
		X6a: dl,
		W6a: gPa,
		DYa: fta,
		gZa: Wd,
		$B: Xf,
		hWa: dEa,
		b4a: Ti,
		i4a: wJa,
		O5a: Zj,
		T5a: ck,
		iea: ok,
		h7a: Al,
		z0a: RDa,
		t5a: "pagehide",
		u5a: aLa,
		G5a: "popstate",
		Pm: Yd,
		Xm: Aj,
		Tm: ce,
		AYa: bta,
		BYa: cta,
		CYa: eta,
		Dc: MKa,
		OFFLINE: rj,
		v4a: $i,
		fZa: jua,
		a7a: SSa,
		L4a: "MSGestureChange",
		M4a: "MSGestureEnd",
		N4a: "MSGestureHold",
		O4a: "MSGestureStart",
		P4a: "MSGestureTap",
		Q4a: "MSGotPointerCapture",
		R4a: "MSInertiaStart",
		S4a: "MSLostPointerCapture",
		T4a: "MSPointerCancel",
		U4a: "MSPointerDown",
		V4a: "MSPointerMove",
		X4a: "MSPointerOver",
		W4a: "MSPointerOut",
		Y4a: "MSPointerUp",
		V6a: "textinput",
		dZa: hua,
		eZa: iua,
		cZa: gua
	};

function op(a, b) {
	a && this.init(a, b)
}
L(op, R);
var USa = [1, 4, 2];
F = op.prototype;
F.target = m;
F.Zj = m;
F.CS = 0;
F.m1 = 0;
F.clientX = 0;
F.clientY = 0;
F.button = 0;
F.keyCode = 0;
F.charCode = 0;
F.ctrlKey = q;
F.altKey = q;
F.shiftKey = q;
F.metaKey = q;
F.dL = q;
F.Mc = m;
F.init = function(a, b) {
	var c = this.type = a.type;
	R.call(this, c);
	this.target = a.target || a.srcElement;
	this.currentTarget = b;
	var d = a.relatedTarget;
	d ? Do && (KSa(d, oKa) || (d = m)) : c == ej ? d = a.fromElement : c == dj && (d = a.toElement);
	this.Zj = d;
	this.CS = Eo || a.offsetX !== k ? a.offsetX : a.layerX;
	this.m1 = Eo || a.offsetY !== k ? a.offsetY : a.layerY;
	this.clientX = a.clientX !== k ? a.clientX : a.pageX;
	this.clientY = a.clientY !== k ? a.clientY : a.pageY;
	this.button = a.button;
	this.keyCode = a.keyCode || 0;
	this.charCode = a.charCode || (c == gh ? a.keyCode : 0);
	this.ctrlKey = a.ctrlKey;
	this.altKey = a.altKey;
	this.shiftKey = a.shiftKey;
	this.metaKey = a.metaKey;
	this.dL = xo ? a.metaKey : a.ctrlKey;
	this.state = a.state;
	this.Mc = a;
	a.defaultPrevented && this.preventDefault();
	delete this.$y
};

function pp(a, b) {
	return LSa ? a.Mc.button == b : a.type == Od ? 0 == b : !! (a.Mc.button & USa[b])
}
function VSa(a) {
	return pp(a, 0) && !(Eo && xo && a.ctrlKey)
}
F.stopPropagation = function() {
	op.M.stopPropagation.call(this);
	this.Mc.stopPropagation ? this.Mc.stopPropagation() : this.Mc.cancelBubble = l
};
F.preventDefault = function() {
	op.M.preventDefault.call(this);
	var a = this.Mc;
	if (a.preventDefault) a.preventDefault();
	else if (a.returnValue = q, NSa) try {
		if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
	} catch (b) {}
};
F.ipa = C("Mc");
F.O = hm();
var WSa = 0;

function XSa() {}
F = XSa.prototype;
F.key = 0;
F.ay = q;
F.Gr = q;
F.init = function(a, b, c, d, e, g) {
	tm(a) ? this.A = l : a && a.handleEvent && tm(a.handleEvent) ? this.A = q : f(Error(Lka));
	this.fj = a;
	this.C = b;
	this.src = c;
	this.type = d;
	this.capture = !! e;
	this.xp = g;
	this.Gr = q;
	this.key = ++WSa;
	this.ay = q
};
F.handleEvent = function(a) {
	return this.A ? this.fj.call(this.xp || this.src, a) : this.fj.handleEvent.call(this.fj, a)
};
var qp = {}, rp = {}, sp = {}, tp = {};

function up(a, b, c, d, e) {
	if (om(b)) {
		for (var g = 0; g < b.length; g++) up(a, b[g], c, d, e);
		return m
	}
	a = YSa(a, b, c, q, d, e);
	b = a.key;
	qp[b] = a;
	return b
}

function YSa(a, b, c, d, e, g) {
	b || f(Error(Ika));
	e = !! e;
	var h = rp;
	b in h || (h[b] = {
		Td: 0,
		Pl: 0
	});
	h = h[b];
	e in h || (h[e] = {
		Td: 0,
		Pl: 0
	}, h.Td++);
	var h = h[e],
		n = vm(a),
		p;
	h.Pl++;
	if (h[n]) {
		p = h[n];
		for (var t = 0; t < p.length; t++) if (h = p[t], h.fj == c && h.xp == g) {
			if (h.ay) break;
			d || (p[t].Gr = q);
			return p[t]
		}
	} else p = h[n] = [], h.Td++;
	t = ZSa();
	h = new XSa;
	h.init(c, t, a, b, e, g);
	h.Gr = d;
	t.src = a;
	t.fj = h;
	p.push(h);
	sp[n] || (sp[n] = []);
	sp[n].push(h);
	a.addEventListener ? (a == km || !a.customEvent_) && a.addEventListener(b, t, e) : a.attachEvent(b in tp ? tp[b] : tp[b] = tj + b,
	t);
	return h
}
function ZSa() {
	var a = $Sa,
		b = MSa ? function(c) {
			return a.call(b.src, b.fj, c)
		} : function(c) {
			c = a.call(b.src, b.fj, c);
			if (!c) return c
		};
	return b
}
function vp(a, b, c, d, e) {
	if (om(b)) {
		for (var g = 0; g < b.length; g++) vp(a, b[g], c, d, e);
		return m
	}
	a = YSa(a, b, c, l, d, e);
	b = a.key;
	qp[b] = a;
	return b
}
function wp(a, b, c, d, e) {
	if (om(b)) for (var g = 0; g < b.length; g++) wp(a, b[g], c, d, e);
	else if (d = !! d, a = aTa(a, b, d)) for (g = 0; g < a.length; g++) if (a[g].fj == c && a[g].capture == d && a[g].xp == e) {
		xp(a[g].key);
		break
	}
}

function xp(a) {
	var b = qp[a];
	if (!b || b.ay) return q;
	var c = b.src,
		d = b.type,
		e = b.C,
		g = b.capture;
	c.removeEventListener ? (c == km || !c.customEvent_) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in tp ? tp[d] : tp[d] = tj + d, e);
	c = vm(c);
	sp[c] && (e = sp[c], on(e, b), 0 == e.length && delete sp[c]);
	b.ay = l;
	if (b = rp[d][g][c]) b.pla = l, bTa(d, g, c, b);
	delete qp[a];
	return l
}

function bTa(a, b, c, d) {
	if (!d.mV && d.pla) {
		for (var e = 0, g = 0; e < d.length; e++) d[e].ay ? d[e].C.src = m : (e != g && (d[g] = d[e]), g++);
		d.length = g;
		d.pla = q;
		0 == g && (delete rp[a][b][c], rp[a][b].Td--, 0 == rp[a][b].Td && (delete rp[a][b], rp[a].Td--), 0 == rp[a].Td && delete rp[a])
	}
}
function yp(a) {
	var b = 0;
	if (a != m) {
		if (a = vm(a), sp[a]) {
			a = sp[a];
			for (var c = a.length - 1; 0 <= c; c--) xp(a[c].key), b++
		}
	} else Mn(qp, function(a, c) {
		xp(c);
		b++
	})
}
function aTa(a, b, c) {
	var d = rp;
	return b in d && (d = d[b], c in d && (d = d[c], a = vm(a), d[a])) ? d[a] : m
}

function zp(a, b, c, d, e) {
	var g = 1;
	b = vm(b);
	if (a[b]) {
		var h = --a.Pl,
			n = a[b];
		n.mV ? n.mV++ : n.mV = 1;
		try {
			for (var p = n.length, t = 0; t < p; t++) {
				var u = n[t];
				u && !u.ay && (g &= cTa(u, e) !== q)
			}
		} finally {
			a.Pl = Math.max(h, a.Pl), n.mV--, bTa(c, d, b, n)
		}
	}
	return Boolean(g)
}
function cTa(a, b) {
	a.Gr && xp(a.key);
	return a.handleEvent(b)
}

function dTa(a, b) {
	var c = b.type || b,
		d = rp;
	if (!(c in d)) return l;
	if (qm(b)) b = new R(b, a);
	else if (b instanceof R) b.target = b.target || a;
	else {
		var e = b;
		b = new R(c, a);
		Xn(b, e)
	}
	var e = 1,
		g, d = d[c],
		c = l in d,
		h;
	if (c) {
		g = [];
		for (h = a; h; h = h.Vy) g.push(h);
		h = d[l];
		h.Pl = h.Td;
		for (var n = g.length - 1; !b.$y && 0 <= n && h.Pl; n--) b.currentTarget = g[n], e &= zp(h, g[n], b.type, l, b) && b.EW != q
	}
	if (q in d) if (h = d[q], h.Pl = h.Td, c) for (n = 0; !b.$y && n < g.length && h.Pl; n++) b.currentTarget = g[n], e &= zp(h, g[n], b.type, q, b) && b.EW != q;
	else for (d = a; !b.$y && d && h.Pl; d = d.Vy) b.currentTarget = d, e &= zp(h, d, b.type, q, b) && b.EW != q;
	return Boolean(e)
}

function $Sa(a, b) {
	if (a.ay) return l;
	var c = a.type,
		d = rp;
	if (!(c in d)) return l;
	var d = d[c],
		e, g;
	if (!MSa) {
		e = b || lm(eQa);
		var h = l in d,
			n = q in d;
		if (h) {
			if (0 > e.keyCode || e.returnValue != k) return l;
			a: {
				var p = q;
				if (0 == e.keyCode) try {
					e.keyCode = -1;
					break a
				} catch (t) {
					p = l
				}
				if (p || e.returnValue == k) e.returnValue = l
			}
		}
		p = new op;
		p.init(e, this);
		e = l;
		try {
			if (h) {
				for (var u = [], x = p.currentTarget; x; x = x.parentNode) u.push(x);
				g = d[l];
				g.Pl = g.Td;
				for (var y = u.length - 1; !p.$y && 0 <= y && g.Pl; y--) p.currentTarget = u[y], e &= zp(g, u[y], c, l, p);
				if (n) {
					g = d[q];
					g.Pl = g.Td;
					for (y = 0; !p.$y && y < u.length && g.Pl; y++) p.currentTarget = u[y], e &= zp(g, u[y], c, q, p)
				}
			} else e = cTa(a, p)
		} finally {
			u && (u.length = 0)
		}
		return e
	}
	c = new op(b, this);
	return e = cTa(a, c)
}
JSa(function(a) {
	$Sa = a($Sa)
});

function S(a) {
	this.L = a;
	this.Y = []
}
L(S, M);
var eTa = [];
S.prototype.A = function(a, b, c, d, e) {
	om(b) || (eTa[0] = b, b = eTa);
	for (var g = 0; g < b.length; g++) {
		var h = up(a, b[g], c || this, d || q, e || this.L || this);
		this.Y.push(h)
	}
	return this
};

function Ap(a, b, c, d, e, g) {
	if (om(c)) for (var h = 0; h < c.length; h++) Ap(a, b, c[h], d, e, g);
	else b = vp(b, c, d || a, e, g || a.L || a), a.Y.push(b);
	return a
}
S.prototype.Pb = function(a, b, c, d, e) {
	if (om(b)) for (var g = 0; g < b.length; g++) this.Pb(a, b[g], c, d, e);
	else {
		a: {
			c = c || this;
			e = e || this.L || this;
			d = !! d;
			if (a = aTa(a, b, d)) for (b = 0; b < a.length; b++) if (!a[b].ay && a[b].fj == c && a[b].capture == d && a[b].xp == e) {
				a = a[b];
				break a
			}
			a = m
		}
		a && (a = a.key, xp(a), on(this.Y, a))
	}
	return this
};

function Bp(a) {
	Vm(a.Y, xp);
	a.Y.length = 0
}
S.prototype.O = function() {
	S.M.O.call(this);
	Bp(this)
};
S.prototype.handleEvent = function() {
	f(Error("EventHandler.handleEvent not implemented"))
};

function fTa(a, b, c, d, e) {
	if (!Q && (!Eo || !Io(Yca))) return l;
	if (xo && e) return Cp(a);
	if (e && !d || !c && (17 == b || 18 == b || xo && 91 == b)) return q;
	if (Eo && d && c) switch (a) {
		case 220:
		case 219:
		case 221:
		case 192:
		case 186:
		case 189:
		case 187:
		case 188:
		case 190:
		case 191:
		case 192:
		case 222:
			return q
	}
	if (Q && d && b == a) return q;
	switch (a) {
		case 13:
			return !(Q && Jo(9));
		case 27:
			return !Eo
	}
	return Cp(a)
}

function Cp(a) {
	if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Eo && 0 == a) return l;
	switch (a) {
		case 32:
		case 63:
		case 107:
		case 109:
		case 110:
		case 111:
		case 186:
		case 59:
		case 189:
		case 187:
		case 61:
		case 188:
		case 190:
		case 191:
		case 192:
		case 222:
		case 219:
		case 220:
		case 221:
			return l;
		default:
			return q
	}
}
function gTa(a) {
	switch (a) {
		case 61:
			return 187;
		case 59:
			return 186;
		case 224:
			return 91;
		case 0:
			return 224;
		default:
			return a
	}
};

function hTa() {}
var Dp = new hTa,
	iTa = [Od, Do ? gh : fh];
hTa.prototype.A = function(a, b, c, d, e) {
	function g(a) {
		if (a.type == Od && VSa(a)) b.call(d, a);
		else if (13 == a.keyCode || 3 == a.keyCode) a.type = gh, b.call(d, a)
	}
	g.Bk = b;
	g.oG = d;
	e ? e.A(a, iTa, g, c) : up(a, iTa, g, c)
};
hTa.prototype.Pb = function(a, b, c, d, e) {
	for (var g, h = 0; g = iTa[h]; h++) for (var n = aTa(a, g, !! c) || [], p, t = 0; p = n[t]; t++) if (p.fj.Bk == b && p.fj.oG == d) {
		e ? e.Pb(a, g, p.fj, c, d) : wp(a, g, p.fj, c, d);
		break
	}
};

function Ep(a, b, c, d) {
	this.top = a;
	this.right = b;
	this.bottom = c;
	this.left = d
}
F = Ep.prototype;
F.La = function() {
	return new Ep(this.top, this.right, this.bottom, this.left)
};
F.contains = function(a) {
	return !this || !a ? q : a instanceof Ep ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};

function jTa(a, b) {
	return a == b ? l : !a || !b ? q : a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left
}
F.ceil = function() {
	this.top = Math.ceil(this.top);
	this.right = Math.ceil(this.right);
	this.bottom = Math.ceil(this.bottom);
	this.left = Math.ceil(this.left);
	return this
};
F.floor = function() {
	this.top = Math.floor(this.top);
	this.right = Math.floor(this.right);
	this.bottom = Math.floor(this.bottom);
	this.left = Math.floor(this.left);
	return this
};
F.round = function() {
	this.top = Math.round(this.top);
	this.right = Math.round(this.right);
	this.bottom = Math.round(this.bottom);
	this.left = Math.round(this.left);
	return this
};
F.translate = jm(61);
F.scale = jm(136);

function Fp(a, b, c, d) {
	this.left = a;
	this.top = b;
	this.width = c;
	this.height = d
}
F = Fp.prototype;
F.La = function() {
	return new Fp(this.left, this.top, this.width, this.height)
};

function kTa(a, b) {
	return a == b ? l : !a || !b ? q : a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height
}
F.contains = function(a) {
	return a instanceof Fp ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
F.Df = function() {
	return new vo(this.width, this.height)
};
F.ceil = function() {
	this.left = Math.ceil(this.left);
	this.top = Math.ceil(this.top);
	this.width = Math.ceil(this.width);
	this.height = Math.ceil(this.height);
	return this
};
F.floor = function() {
	this.left = Math.floor(this.left);
	this.top = Math.floor(this.top);
	this.width = Math.floor(this.width);
	this.height = Math.floor(this.height);
	return this
};
F.round = function() {
	this.left = Math.round(this.left);
	this.top = Math.round(this.top);
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	return this
};
F.translate = jm(60);
F.scale = jm(135);

function Gp(a, b, c) {
	qm(b) ? lTa(a, c, b) : Mn(b, wm(lTa, a))
}
function lTa(a, b, c) {
	(c = mTa(a, c)) && (a.style[c] = b)
}
function mTa(a, b) {
	var c = kRa(b);
	if (a.style[c] === k) {
		var d = (Eo ? zra : Do ? sma : Q ? ZJa : Co ? Ac : m) + lRa(b);
		if (a.style[d] !== k) return d
	}
	return c
}
function Hp(a, b) {
	var c = a.style[kRa(b)];
	return "undefined" !== typeof c ? c : a.style[mTa(a, b)] || r
}
function Ip(a, b) {
	var c = Mo(a);
	return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, m)) ? c[b] || c.getPropertyValue(b) || r : r
}

function Jp(a, b) {
	return a.currentStyle ? a.currentStyle[b] : m
}
function Kp(a, b) {
	return Ip(a, b) || Jp(a, b) || a.style && a.style[b]
}
function Lp(a) {
	return Kp(a, Ij)
}
function Mp(a, b, c) {
	var d, e = Do && (xo || RRa) && Io($a);
	b instanceof uo ? (d = b.x, b = b.y) : (d = b, b = c);
	a.style.left = nTa(d, e);
	a.style.top = nTa(b, e)
}
function Np(a) {
	a = a ? Mo(a) : document;
	return Q && !Jo(9) && !kp(Ko(a)) ? a.body : a.documentElement
}

function oTa(a) {
	var b = a.getBoundingClientRect();
	Q && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
	return b
}
function pTa(a) {
	if (Q && !Jo(8)) return a.offsetParent;
	var b = Mo(a),
		c = Kp(a, Ij),
		d = c == dg || c == id;
	for (a = a.parentNode; a && a != b; a = a.parentNode) if (c = Kp(a, Ij), d = d && c == TNa && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || c == dg || c == id || c == bk)) return a;
	return m
}

function Op(a) {
	var b, c = Mo(a),
		d = Kp(a, Ij),
		e = Do && c.getBoxObjectFor && !a.getBoundingClientRect && d == id && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
		g = new uo(0, 0),
		h = Np(c);
	if (a == h) return g;
	if (a.getBoundingClientRect) b = oTa(a), a = lp(Ko(c)), g.x = b.left + a.x, g.y = b.top + a.y;
	else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
	else {
		b = a;
		do {
			g.x += b.offsetLeft;
			g.y += b.offsetTop;
			b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
			if (Eo && Lp(b) == dg) {
				g.x += c.body.scrollLeft;
				g.y += c.body.scrollTop;
				break
			}
			b = b.offsetParent
		} while (b && b != a);
		if (Co || Eo && d == id) g.y -= c.body.offsetTop;
		for (b = a;
		(b = pTa(b)) && b != c.body && b != h;) if (g.x -= b.scrollLeft, !Co || b.tagName != Upa) g.y -= b.scrollTop
	}
	return g
}
function Pp(a, b) {
	var c = Qp(a),
		d = Qp(b);
	return new uo(c.x - d.x, c.y - d.y)
}

function Qp(a) {
	var b = new uo;
	if (1 == a.nodeType) {
		if (a.getBoundingClientRect) {
			var c = oTa(a);
			b.x = c.left;
			b.y = c.top
		} else {
			var c = lp(Ko(a)),
				d = Op(a);
			b.x = d.x - c.x;
			b.y = d.y - c.y
		}
		if (Do && !Io(12)) {
			var e;
			Q ? e = Uba : Eo ? e = eca : Co ? e = Xba : Do && (e = Sba);
			var g;
			e && (g = Kp(a, e));
			g || (g = Kp(a, hPa));
			g ? (a = g.match(qTa), a = !a ? new uo(0, 0) : new uo(parseFloat(a[1]), parseFloat(a[2]))) : a = new uo(0, 0);
			b = new uo(b.x + a.x, b.y + a.y)
		}
	} else e = tm(a.ipa), g = a, a.targetTouches ? g = a.targetTouches[0] : e && a.Mc.targetTouches && (g = a.Mc.targetTouches[0]), b.x = g.clientX, b.y = g.clientY;
	return b
}
function nTa(a, b) {
	typeof a == oj && (a = (b ? Math.round(a) : a) + Sj);
	return a
}
function Rp(a, b) {
	a.style.width = nTa(b, l)
}
function Sp(a) {
	if (Kp(a, qe) != lj) return rTa(a);
	var b = a.style,
		c = b.display,
		d = b.visibility,
		e = b.position;
	b.visibility = tg;
	b.position = id;
	b.display = Ug;
	a = rTa(a);
	b.display = c;
	b.position = e;
	b.visibility = d;
	return a
}
function rTa(a) {
	var b = a.offsetWidth,
		c = a.offsetHeight,
		d = Eo && !b && !c;
	return (!I(b) || d) && a.getBoundingClientRect ? (a = oTa(a), new vo(a.right - a.left, a.bottom - a.top)) : new vo(b, c)
}

function Tp(a, b) {
	var c = a.style;
	uj in c ? c.opacity = b : tma in c ? c.MozOpacity = b : RCa in c && (c.filter = b === r ? r : usa + 100 * b + Ia)
}
function Up(a, b) {
	a.style.display = b ? r : lj
}
function Vp(a) {
	return a.style.display != lj
}
function Wp(a) {
	return hk == Kp(a, gva)
}
var sTa = Do ? "MozUserSelect" : Eo ? "WebkitUserSelect" : m;

function Xp(a, b, c, d) {
	if (/^\d+px?$/.test(b)) return parseInt(b, 10);
	var e = a.style[c],
		g = a.runtimeStyle[c];
	a.runtimeStyle[c] = a.currentStyle[c];
	a.style[c] = b;
	b = a.style[d];
	a.style[c] = e;
	a.runtimeStyle[c] = g;
	return b
}

function tTa(a, b) {
	var c = Jp(a, b);
	return c ? Xp(a, c, Pi, mLa) : 0
}
function uTa(a, b) {
	if (Q) {
		var c = tTa(a, b + pc),
			d = tTa(a, b + Jc),
			e = tTa(a, b + Eqa),
			g = tTa(a, b + mfa);
		return new Ep(e, d, g, c)
	}
	c = Ip(a, b + pc);
	d = Ip(a, b + Jc);
	e = Ip(a, b + Eqa);
	g = Ip(a, b + mfa);
	return new Ep(parseFloat(e), parseFloat(d), parseFloat(g), parseFloat(c))
}
function Yp(a) {
	return uTa(a, yj)
}
var vTa = {
	thin: 2,
	medium: 4,
	thick: 6
};

function wTa(a, b) {
	if (Jp(a, b + Jpa) == lj) return 0;
	var c = Jp(a, b + Ara);
	return c in vTa ? vTa[c] : Xp(a, c, Pi, mLa)
}

function Zp(a) {
	if (Q) {
		var b = wTa(a, tta),
			c = wTa(a, vta),
			d = wTa(a, xta);
		a = wTa(a, rta);
		return new Ep(d, c, a, b)
	}
	b = Ip(a, uta);
	c = Ip(a, wta);
	d = Ip(a, yta);
	a = Ip(a, sta);
	return new Ep(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
function xTa(a) {
	var b = {};
	Vm(a.split(/\s*;\s*/), function(a) {
		a = a.split(/\s*:\s*/);
		2 == a.length && (b[kRa(a[0].toLowerCase())] = a[1])
	});
	return b
}
var qTa = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

function $p() {}
mm($p);
$p.prototype.A = 0;

function aq(a) {
	return nb + (a.A++).toString(36)
}
$p.ya();

function yTa(a) {
	var b = a.offsetLeft,
		c = a.offsetParent;
	!c && Lp(a) == dg && (c = Mo(a).documentElement);
	if (!c) return b;
	if (Do) var d = Zp(c),
		b = b + d.left;
	else Jo(8) && (d = Zp(c), b -= d.left);
	return Wp(c) ? c.clientWidth - (b + a.offsetWidth) : b
};

function bq() {}
L(bq, M);
bq.prototype.customEvent_ = l;
F = bq.prototype;
F.Vy = m;
F.bh = im("Vy");
F.addEventListener = function(a, b, c, d) {
	up(this, a, b, c, d)
};
F.removeEventListener = function(a, b, c, d) {
	wp(this, a, b, c, d)
};
F.dispatchEvent = function(a) {
	return dTa(this, a)
};
F.O = function() {
	bq.M.O.call(this);
	yp(this);
	this.Vy = m
};

function cq(a, b) {
	this.A = a || 1;
	this.C = b || dq;
	this.F = K(this.mAa, this);
	this.G = ym()
}
L(cq, bq);
cq.prototype.enabled = q;
var dq = km;
F = cq.prototype;
F.ab = m;
F.setInterval = function(a) {
	this.A = a;
	this.ab && this.enabled ? (this.stop(), this.start()) : this.ab && this.stop()
};
F.mAa = function() {
	if (this.enabled) {
		var a = ym() - this.G;
		0 < a && a < 0.8 * this.A ? this.ab = this.C.setTimeout(this.F, this.A - a) : (this.dispatchEvent(al), this.enabled && (this.ab = this.C.setTimeout(this.F, this.A), this.G = ym()))
	}
};
F.start = function() {
	this.enabled = l;
	this.ab || (this.ab = this.C.setTimeout(this.F, this.A), this.G = ym())
};
F.stop = function() {
	this.enabled = q;
	this.ab && (this.C.clearTimeout(this.ab), this.ab = m)
};
F.O = function() {
	cq.M.O.call(this);
	this.stop();
	delete this.C
};

function eq(a, b, c) {
	tm(a) ? c && (a = K(a, c)) : a && typeof a.handleEvent == jg ? a = K(a.handleEvent, a) : f(Error(Lka));
	return 2147483647 < b ? -1 : dq.setTimeout(a, b || 0)
}
function fq(a) {
	dq.clearTimeout(a)
};

function gq(a, b) {
	this.C = new S(this);
	this.QD(a || m);
	b && (this.IF = b)
}
L(gq, bq);
F = gq.prototype;
F.Xa = m;
F.Wca = l;
F.Jx = q;
F.R7 = -1;
F.hS = -1;
F.NO = q;
F.zia = l;
F.IF = cPa;
F.xa = C("IF");
F.N = C(Yc);
F.QD = function(a) {
	hq(this);
	this.Xa = a
};
F.FZ = jm(184);

function hq(a) {
	a.Jx && f(Error("Can not change this state of the popup while showing."))
}
F.Wa = C("Jx");
F.ua = function(a) {
	this.F && this.F.stop();
	this.K && this.K.stop();
	if (a) {
		if (!this.Jx && this.vJ()) {
			this.Xa || f(Error("Caller must call setElement before trying to show the popup"));
			this.KA();
			a = Mo(this.Xa);
			this.NO && this.C.A(a, fh, this.HAa, l);
			if (this.Wca) if (this.C.A(a, bj, this.Xca, l), Q) {
				var b;
				try {
					b = a.activeElement
				} catch (c) {}
				for (; b && b.nodeName == hc;) {
					try {
						var d = $o(b)
					} catch (e) {
						break
					}
					a = d;
					b = a.activeElement
				}
				this.C.A(a, bj, this.Xca, l);
				this.C.A(a, je, this.Yca)
			} else this.C.A(a, Ad, this.Yca);
			this.IF == cPa ? this.e_() : this.IF == VJa && this.KA();
			this.Jx = l;
			this.F ? (vp(this.F, Tf, this.rQ, q, this), this.F.play()) : this.rQ()
		}
	} else zTa(this)
};
F.KA = G;

function zTa(a, b) {
	if (!a.Jx || !a.dispatchEvent({
		type: xd,
		target: b
	})) return q;
	a.C && Bp(a.C);
	a.Jx = q;
	a.hS = ym();
	a.K ? (vp(a.K, Tf, wm(a.Hka, b), q, a), a.K.play()) : a.Hka(b);
	return l
}
F.Hka = function(a) {
	this.IF == cPa ? this.fTa() : this.IF == VJa && (this.Xa.style.top = Eba);
	this.MB(a)
};
F.e_ = function() {
	this.Xa.style.visibility = Gl;
	Up(this.Xa, l)
};
F.fTa = function() {
	this.Xa.style.visibility = tg;
	Up(this.Xa, q)
};
F.vJ = function() {
	return this.dispatchEvent(yd)
};
F.rQ = function() {
	this.R7 = ym();
	this.hS = -1;
	this.dispatchEvent(xk)
};
F.MB = function(a) {
	this.dispatchEvent({
		type: ug,
		target: a
	})
};
F.Xca = function(a) {
	a = a.target;
	!Zo(this.Xa, a) && !(150 > ym() - this.R7) && zTa(this, a)
};
F.HAa = function(a) {
	27 == a.keyCode && zTa(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
F.Yca = function(a) {
	if (this.zia) {
		var b = Mo(this.Xa);
		if (Q || Co) {
			if (a = b.activeElement, !a || Zo(this.Xa, a) || a.tagName == Gb) return
		} else if (a.target != b) return;
		150 > ym() - this.R7 || zTa(this)
	}
};
F.O = function() {
	gq.M.O.call(this);
	this.C.dispose();
	O(this.F);
	O(this.K);
	delete this.Xa;
	delete this.C
};

function iq(a) {
	return function() {
		return a
	}
}
var jq = iq(q),
	kq = iq(l),
	lq = iq(m);

function mq(a) {
	return a
}
function nq(a) {
	return function() {
		f(Error(a))
	}
}
function ATa(a) {
	return function() {
		f(a)
	}
}
function oq(a) {
	var b;
	b = b || 0;
	return function() {
		return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
	}
};

function pq(a) {
	this.W = a || Ko();
	this.XV = BTa
}
L(pq, bq);
pq.prototype.Qk = $p.ya();
var BTa = m;
F = pq.prototype;
F.cb = m;
F.Hl = q;
F.Xa = m;
F.XV = m;
F.X5 = m;
F.Il = m;
F.mi = m;
F.eq = m;
F.P4 = q;
F.aa = function() {
	return this.cb || (this.cb = aq(this.Qk))
};
F.rk = jm(110);
F.N = C(Yc);
F.Sb = im(Yc);
F.kt = jm(26);
F.Mb = function(a) {
	return this.Xa ? this.W.Mb(a, this.Xa) : m
};

function T(a) {
	return a.yb || (a.yb = new S(a))
}
function qq(a, b) {
	a == b && f(Error(Pqa));
	b && (a.Il && a.cb && a.Il.yc(a.cb) && a.Il != b) && f(Error(Pqa));
	a.Il = b;
	pq.M.bh.call(a, b)
}
F.getParent = C("Il");
F.bh = function(a) {
	this.Il && this.Il != a && f(Error("Method not supported"));
	pq.M.bh.call(this, a)
};
F.ma = C(Wc);
F.bb = C("Hl");
F.ha = function() {
	this.Xa = this.W.createElement(re)
};
F.Va = function(a) {
	rq(this, a)
};

function rq(a, b, c) {
	a.Hl && f(Error(Mb));
	a.Xa || a.ha();
	b ? b.insertBefore(a.Xa, c || m) : a.W.sb().body.appendChild(a.Xa);
	(!a.Il || a.Il.bb()) && a.za()
}
function sq(a, b) {
	a.Hl && f(Error(Mb));
	if (b && a.qj(b)) {
		a.P4 = l;
		if (!a.W || a.W.sb() != Mo(b)) a.W = Ko(b);
		a.Ic(b);
		a.za()
	} else f(Error("Invalid element to decorate"))
}
F.qj = D(l);
F.Ic = im(Yc);
F.za = function() {
	this.Hl = l;
	tq(this, function(a) {
		!a.bb() && a.N() && a.za()
	})
};
F.Hb = function() {
	tq(this, function(a) {
		a.bb() && a.Hb()
	});
	this.yb && Bp(this.yb);
	this.Hl = q
};
F.O = function() {
	this.Hl && this.Hb();
	this.yb && (this.yb.dispose(), delete this.yb);
	tq(this, function(a) {
		a.dispose()
	});
	!this.P4 && this.Xa && Wo(this.Xa);
	this.Il = this.X5 = this.Xa = this.eq = this.mi = m;
	pq.M.O.call(this)
};
F.ba = C("X5");
F.vg = im("X5");
F.Sa = jm(57);
F.Oa = function(a, b) {
	this.xf(a, this.dc(), b)
};
F.xf = function(a, b, c) {
	a.Hl && (c || !this.Hl) && f(Error(Mb));
	(0 > b || b > this.dc()) && f(Error("Child component index out of bounds"));
	if (!this.eq || !this.mi) this.eq = {}, this.mi = [];
	if (a.getParent() == this) {
		var d = a.aa();
		this.eq[d] = a;
		on(this.mi, a)
	} else Tn(this.eq, a.aa(), a);
	qq(a, this);
	mn(this.mi, a, b);
	a.Hl && this.Hl && a.getParent() == this ? (c = this.Tb(), c.insertBefore(a.N(), c.childNodes[b] || m)) : c ? (this.Xa || this.ha(), b = this.wb(b + 1), rq(a, this.Tb(), b ? b.Xa : m)) : this.Hl && (!a.Hl && a.Xa && a.Xa.parentNode && 1 == a.Xa.parentNode.nodeType) && a.za()
};
F.Tb = C(Yc);
F.dc = function() {
	return this.mi ? this.mi.length : 0
};
F.yc = function(a) {
	return this.eq && a ? Un(this.eq, a) || m : m
};
F.wb = function(a) {
	return this.mi ? this.mi[a] || m : m
};

function tq(a, b, c) {
	a.mi && Vm(a.mi, b, c)
}
function uq(a, b) {
	return a.mi && b ? Um(a.mi, b) : -1
}
F.removeChild = function(a, b) {
	if (a) {
		var c = qm(a) ? a : a.aa();
		a = this.yc(c);
		c && a && (Sn(this.eq, c), on(this.mi, a), b && (a.Hb(), a.Xa && Wo(a.Xa)), qq(a, m))
	}
	a || f(Error("Child is not in parent component"));
	return a
};

function vq(a, b, c) {
	return a.removeChild(a.wb(b), c)
}
F.Ud = function(a) {
	for (var b = []; this.mi && 0 != this.mi.length;) b.push(vq(this, 0, a));
	return b
};
var wq = {
	8: Zsa,
	9: Sk,
	13: Uf,
	16: vk,
	17: be,
	18: vsa,
	19: cLa,
	20: Ita,
	27: vCa,
	32: HNa,
	33: jLa,
	34: iLa,
	35: Tf,
	36: iEa,
	37: Pi,
	38: Bl,
	39: dk,
	40: wf,
	45: Wg,
	46: le,
	48: Xa,
	49: Za,
	50: fb,
	51: gb,
	52: hb,
	53: ib,
	54: jb,
	55: kb,
	56: lb,
	57: mb,
	59: aNa,
	61: tCa,
	65: gd,
	66: ud,
	67: Dd,
	68: ee,
	69: Hf,
	70: Zf,
	71: kg,
	72: mg,
	73: Hg,
	74: $g,
	75: dh,
	76: Ki,
	77: Yi,
	78: gj,
	79: pj,
	80: wj,
	81: Wj,
	82: Xj,
	83: jk,
	84: Qk,
	85: vl,
	86: Dl,
	87: Hl,
	88: Ml,
	89: Nl,
	90: Ol,
	93: "context",
	96: "num-0",
	97: "num-1",
	98: "num-2",
	99: "num-3",
	100: "num-4",
	101: "num-5",
	102: "num-6",
	103: "num-7",
	104: "num-8",
	105: "num-9",
	106: "num-multiply",
	107: "num-plus",
	109: "num-minus",
	110: "num-period",
	111: "num-division",
	112: "f1",
	113: "f2",
	114: "f3",
	115: "f4",
	116: "f5",
	117: "f6",
	118: "f7",
	119: "f8",
	120: "f9",
	121: "f10",
	122: "f11",
	123: "f12",
	186: aNa,
	187: tCa,
	189: "dash",
	188: La,
	190: Qa,
	191: Sa,
	192: Sl,
	219: "open-square-bracket",
	220: bd,
	221: "close-square-bracket",
	222: "single-quote",
	224: "win"
};

function xq(a, b, c) {
	a.setAttribute(Esa + b, c)
};

function yq() {}
var CTa;
mm(yq);
F = yq.prototype;
F.Kk = jm(51);
F.ha = function(a) {
	var b = a.ma().ha(re, this.ij(a).join(s), a.Vd());
	zq(this, a, b);
	return b
};
F.Rf = gm();
F.tv = jm(109);
F.Ld = jm(70);
F.Bm = jm(126);

function zq(a, b, c) {
	b.Wa() || xq(c, tg, !b.Wa());
	b.isEnabled() || a.Kl(c, 1, !b.isEnabled());
	b.jh(8) && a.Kl(c, 8, b.Cj());
	b.jh(16) && a.Kl(c, 16, b.qf());
	b.jh(64) && a.Kl(c, 64, b.yg())
}
F.bN = jm(111);
F.S6 = jm(33);
F.l5 = jm(112);
F.WG = jm(117);
F.ua = function(a, b) {
	Up(a, b);
	a && xq(a, tg, !b)
};
F.XG = jm(118);
F.Kl = function(a, b, c) {
	CTa || (CTa = {
		1: iva,
		8: sk,
		16: Qta,
		64: Yf
	});
	(b = CTa[b]) && xq(a, b, c)
};
F.Kb = function(a, b) {
	var c = this.Rf(a);
	if (c && (To(c), b)) if (qm(b)) ap(c, b);
	else {
		var d = function(a) {
			if (a) {
				var b = Mo(c);
				c.appendChild(qm(a) ? b.createTextNode(a) : a)
			}
		};
		om(b) ? Vm(b, d) : pm(b) && !(pKa in b) ? Vm(rn(b), d) : d(b)
	}
};
F.Qa = D(BDa);

function Aq(a) {
	return a.Qa()
}
F.ij = function(a) {
	var b = this.Qa(),
		c = [b],
		d = Aq(this);
	d != b && c.push(d);
	b = a.kb();
	for (d = []; b;) {
		var e = b & -b;
		d.push(this.FN(e));
		b &= ~e
	}
	c.push.apply(c, d);
	(a = a.bq) && c.push.apply(c, a);
	Q && !Io(kb) && c.push.apply(c, DTa(c));
	return c
};

function DTa(a, b) {
	var c = [];
	b && (a = a.concat([b]));
	Vm([], function(d) {
		en(d, wm(hn, a)) && (!b || hn(d, b)) && c.push(d.join(ed))
	});
	return c
}
F.FN = function(a) {
	this.C || ETa(this);
	return this.C[a]
};
F.WN = jm(181);

function ETa(a) {
	var b = Aq(a);
	a.C = {
		1: b + Lba,
		2: b + Qba,
		4: b + Gba,
		8: b + Zba,
		16: b + Iba,
		32: b + Oba,
		64: b + Yba
	}
};

function Bq() {
	this.A = []
}
L(Bq, yq);
mm(Bq);

function Cq(a, b) {
	var c = a.A[b];
	if (!c) {
		switch (b) {
			case 0:
				c = Aq(a) + Pba;
				break;
			case 1:
				c = Aq(a) + Hba;
				break;
			case 2:
				c = Aq(a) + Oa
		}
		a.A[b] = c
	}
	return c
}
F = Bq.prototype;
F.Kk = jm(50);
F.ha = function(a) {
	var b = a.ma().ha(re, this.ij(a).join(s), FTa(this, a.Vd(), a.ma()));
	GTa(this, a, b, a.jh(8) || a.jh(16));
	zq(this, a, b);
	return b
};
F.Rf = function(a) {
	return a && a.firstChild
};
F.Ld = jm(69);
F.Kb = function(a, b) {
	var c = this.Rf(a),
		d = HTa(this, a) ? c.firstChild : m;
	Bq.M.Kb.call(this, a, b);
	d && !HTa(this, a) && c.insertBefore(d, c.firstChild || m)
};

function FTa(a, b, c) {
	a = Cq(a, 2);
	return c.ha(re, a, b)
}
function HTa(a, b) {
	var c = a.Rf(b);
	if (c) {
		var c = c.firstChild,
			d = Cq(a, 1);
		return !!c && ro(c, d)
	}
	return q
}
function GTa(a, b, c, d) {
	d != HTa(a, c) && (so(c, CDa, d), c = a.Rf(c), d ? (a = Cq(a, 1), c.insertBefore(b.ma().ha(re, a), c.firstChild || m)) : c.removeChild(c.firstChild))
}
F.FN = function(a) {
	switch (a) {
		case 2:
			return Cq(this, 0);
		case 16:
		case 8:
			return DDa;
		default:
			return Bq.M.FN.call(this, a)
	}
};
F.WN = jm(180);
F.Qa = D("goog-menuitem");

function Dq(a, b, c) {
	this.Bk = a;
	this.C = b || 0;
	this.A = c;
	this.Bc = K(this.KFa, this)
}
L(Dq, M);
F = Dq.prototype;
F.cb = 0;
F.O = function() {
	Dq.M.O.call(this);
	this.stop();
	delete this.Bk;
	delete this.A
};
F.start = function(a) {
	this.stop();
	this.cb = eq(this.Bc, I(a) ? a : this.C)
};
F.stop = function() {
	this.lc() && fq(this.cb);
	this.cb = 0
};
F.lc = function() {
	return 0 != this.cb
};
F.KFa = function() {
	this.cb = 0;
	this.Bk && this.Bk.call(this.A)
};

function ITa(a) {
	return typeof a == oj ? 0 < a ? 1 : 0 > a ? -1 : 0 : a ? -1 : 1
}
var JTa = /<[^>]*>|&[^;]+;/g;

function Eq(a, b) {
	return b ? a.replace(JTa, s) : a
}
var KTa = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
	LTa = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]"),
	MTa = /^http:\/\/.*/,
	NTa = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]*$"),
	OTa = RegExp("[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$"),
	PTa = RegExp("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", Hg),
	QTa = /\s+/,
	RTa = /\d/;

function Fq(a, b) {
	for (var c = 0, d = 0, e = q, g = Eq(a, b).split(QTa), h = 0; h < g.length; h++) {
		var n = g[h];
		LTa.test(Eq(n, k)) ? (c++, d++) : MTa.test(n) ? e = l : KTa.test(Eq(n, k)) ? d++ : RTa.test(n) && (e = l)
	}
	return 0 == d ? e ? 1 : 0 : 0.4 < c / d ? -1 : 1
};

function Gq(a) {
	this.Q = a;
	this.A = []
}
L(Gq, M);
Gq.prototype.$a = function(a, b, c, d) {
	b = a.$a(b, c, d || this.Q);
	this.A.push(a, b);
	return this
};

function Hq(a) {
	for (var b, c; c = a.A.pop();)(b = a.A.pop()) && !b.cd() && b.QF(c)
}
Gq.prototype.O = function() {
	Gq.M.O.call(this);
	Hq(this);
	delete this.Q;
	delete this.A
};
var STa = Zn(Sf, El, Gl),
	Iq = Zn(Sf, vg, Mi, sk, El, Gl),
	TTa = Zn(Sf, Jg, hh, Mi, aj, sk, El, Gl),
	UTa = Zn(Sf, Jg, hh, Mi, sk, El, Gl);
Zn(Sf, vg, El, Gl);
var Jq = Zn(Sf, vg, Jg, sk, El, Gl);
var Kq = {
	GNa: ["BC", "AD"],
	FNa: ["Before Christ", "Anno Domini"],
	INa: [lc, $b, rc, Eb, rc, lc, lc, Eb, Kc, Ac, vc, Qb],
	ONa: [lc, $b, rc, Eb, rc, lc, lc, Eb, Kc, Ac, vc, Qb],
	HNa: "January February March April May June July August September October November December".split(" "),
	NNa: "January February March April May June July August September October November December".split(" "),
	KNa: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
	QNa: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
	TNa: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
	SNa: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
	MNa: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
	RNa: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
	$4a: [Kc, rc, Qc, Wc, Qc, $b, Kc],
	PNa: [Kc, rc, Qc, Wc, Qc, $b, Kc],
	LNa: ["Q1", "Q2", "Q3", "Q4"],
	JNa: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
	ENa: ["AM", "PM"],
	yqa: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
	Bqa: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
	dWa: 6,
	p7a: [5, 6],
	eWa: 5
};

function Lq(a, b, c) {
	sm(a) ? (this.A = new Date(a, b || 0, c || 1), VTa(this, c || 1)) : um(a) ? (this.A = new Date(a.getFullYear(), a.getMonth(), a.getDate()), VTa(this, a.getDate())) : (this.A = new Date(ym()), this.A.setHours(0), this.A.setMinutes(0), this.A.setSeconds(0), this.A.setMilliseconds(0))
}
F = Lq.prototype;
F.QG = Kq.dWa;
F.RG = Kq.eWa;
F.La = function() {
	var a = new Lq(this.A);
	a.QG = this.QG;
	a.RG = this.RG;
	return a
};
F.getFullYear = function() {
	return this.A.getFullYear()
};
F.getYear = function() {
	return this.getFullYear()
};
F.getMonth = function() {
	return this.A.getMonth()
};
F.getDate = function() {
	return this.A.getDate()
};
F.getTime = function() {
	return this.A.getTime()
};
F.getDay = jm(146);
F.getUTCFullYear = jm(86);
F.getUTCMonth = jm(76);
F.getUTCDate = jm(171);
F.J8 = jm(20);
F.getUTCHours = function() {
	return this.A.getUTCHours()
};
F.getUTCMinutes = jm(41);
F.getTimezoneOffset = function() {
	return this.A.getTimezoneOffset()
};

function WTa(a) {
	a = a.getTimezoneOffset();
	if (0 == a) a = $c;
	else {
		var b = Math.abs(a) / 60,
			c = Math.floor(b),
			b = 60 * (b - c);
		a = (0 < a ? Na : Ka) + Om(c, 2) + nb + Om(b, 2)
	}
	return a
}
F.set = function(a) {
	this.A = new Date(a.getFullYear(), a.getMonth(), a.getDate())
};
F.setFullYear = function(a) {
	this.A.setFullYear(a)
};
F.setMonth = function(a) {
	this.A.setMonth(a)
};
F.setDate = function(a) {
	this.A.setDate(a)
};
F.setTime = function(a) {
	this.A.setTime(a)
};
F.ara = jm(82);
F.bra = jm(34);
F.$qa = jm(21);
F.add = function(a) {
	if (a.C || a.A) {
		var b = this.getMonth() + a.A + 12 * a.C,
			c = this.getYear() + Math.floor(b / 12),
			b = b % 12;
		0 > b && (b += 12);
		var d;
		a: {
			switch (b) {
				case 1:
					d = 0 == c % 4 && (0 != c % 100 || 0 == c % 400) ? 29 : 28;
					break a;
				case 5:
				case 8:
				case 10:
				case 3:
					d = 30;
					break a
			}
			d = 31
		}
		d = Math.min(d, this.getDate());
		this.setDate(1);
		this.setFullYear(c);
		this.setMonth(b);
		this.setDate(d)
	}
	a.F && (b = new Date(this.getYear(), this.getMonth(), this.getDate(), 12), a = new Date(b.getTime() + 864E5 * a.F), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()),
	this.setDate(a.getDate()), VTa(this, a.getDate()))
};
F.QW = function(a, b) {
	return [this.getFullYear(), Om(this.getMonth() + 1, 2), Om(this.getDate(), 2)].join(a ? Na : r) + (b ? WTa(this) : r)
};
F.ob = function(a) {
	return this.getYear() == a.getYear() && this.getMonth() == a.getMonth() && this.getDate() == a.getDate()
};
F.toString = function() {
	return this.QW()
};

function VTa(a, b) {
	if (a.getDate() != b) {
		var c = a.getDate() < b ? 1 : -1;
		a.A.setUTCHours(a.A.getUTCHours() + c)
	}
}
F.valueOf = function() {
	return this.A.valueOf()
};
Q && Io(8);

function XTa(a, b) {
	this.A = ITa(a);
	this.C = !! b
}
XTa.prototype.F = Fq;
var Qq = {}, YTa = {}, ZTa = {}, $Ta = {}, Rq = {
	lWa: Qq,
	AWa: {},
	BWa: {},
	jC: YTa,
	PVa: {},
	YVa: ZTa,
	TEXT: $Ta
};

function Sq() {
	f(Error("Do not instantiate directly"))
}
Sq.prototype.toString = C("content");

function Tq(a, b) {
	a != m && this.append.apply(this, arguments)
}
F = Tq.prototype;
F.pz = r;
F.set = function(a) {
	this.pz = r + a
};
F.append = function(a, b, c) {
	this.pz += a;
	if (b != m) for (var d = 1; d < arguments.length; d++) this.pz += arguments[d];
	return this
};
F.clear = function() {
	this.pz = r
};
F.ub = function() {
	return this.pz.length
};
F.toString = C("pz");

function aUa() {
	Sq.call(this)
}
L(aUa, Sq);
aUa.prototype.tj = Rq.lWa;

function bUa() {
	Sq.call(this)
}
L(bUa, Sq);
bUa.prototype.tj = Rq.AWa;

function cUa() {
	Sq.call(this)
}
L(cUa, Sq);
cUa.prototype.tj = Rq.BWa;

function dUa() {
	Sq.call(this)
}
L(dUa, Sq);
dUa.prototype.tj = Rq.jC;

function eUa() {
	Sq.call(this)
}
L(eUa, Sq);
eUa.prototype.tj = Rq.PVa;

function fUa() {
	Sq.call(this)
}
L(fUa, Sq);
fUa.prototype.tj = Rq.YVa;

function gUa(a) {
	this.content = String(a)
}
L(gUa, Sq);
gUa.prototype.tj = Rq.TEXT;

function Uq(a) {
	function b() {}
	b.prototype = a.prototype;
	return function(a) {
		var d = new b;
		d.content = String(a);
		return d
	}
}
var Vq = Uq(aUa);
Uq(bUa);
Uq(cUa);
var hUa = Uq(dUa);
Uq(eUa);
Uq(fUa);

function Wq(a) {
	function b() {}
	b.prototype = a.prototype;
	return function(a) {
		if (!String(a)) return r;
		var d = new b;
		d.content = String(a);
		return d
	}
}
var iUa = Wq(gUa);
Wq(aUa);
Wq(bUa);
Wq(eUa);
Wq(fUa);
var jUa, kUa, lUa, mUa, nUa, oUa, pUa;
pUa = oUa = nUa = mUa = lUa = kUa = jUa = q;
var Xq = Ao();
Xq && (-1 != Xq.indexOf(aja) ? jUa = l : -1 != Xq.indexOf("Camino") ? kUa = l : -1 != Xq.indexOf(rEa) || -1 != Xq.indexOf(sEa) ? lUa = l : -1 != Xq.indexOf(qEa) ? mUa = l : -1 != Xq.indexOf(Oea) ? nUa = l : -1 != Xq.indexOf(Sfa) ? oUa = l : -1 != Xq.indexOf(toa) && (pUa = l));
var Yq = jUa,
	qUa = kUa,
	rUa = lUa,
	Zq = mUa,
	sUa = nUa,
	$q = oUa,
	ar = pUa;

function br(a) {
	return (a = a.exec(Ao())) ? a[1] : r
}
var tUa = function() {
	if (Yq) return br(/Firefox\/([0-9.]+)/);
	if (Q || Co) return Ho;
	if ($q) return br(/Chrome\/([0-9.]+)/);
	if (ar) return br(/Version\/([0-9.]+)/);
	if (rUa || Zq) {
		var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Ao());
		if (a) return a[1] + Qa + a[2]
	} else {
		if (sUa) return (a = br(/Android\s+([0-9.]+)/)) ? a : br(/Version\/([0-9.]+)/);
		if (qUa) return br(/Camino\/([0-9.]+)/)
	}
	return r
}();

function cr(a) {
	return 0 <= Rm(tUa, a)
};

function uUa(a, b) {
	var c = vUa;
	return Xm(a, function(a) {
		return 0 > vn(b, a, c)
	})
}
function dr(a, b, c) {
	for (var d in a) if (0 != d.length) {
		var e = Number(d);
		if (!isNaN(e) && b.call(c, e, a[e], a)) break
	}
}
function er(a) {
	var b = [];
	dr(a, function(a) {
		b.push(a);
		return q
	});
	xn(b);
	return b
}
function fr(a, b, c, d) {
	var e = vn(a, b);
	0 > e && (e = -e - 1);
	c = vn(a, c);
	0 <= c ? c++ : c = -c - 1;
	a = a.slice(e, c);
	d && a[0] != b && a.unshift(b);
	return a
}
function wUa(a, b) {
	var c = [];
	dr(a, function(a, e, g) {
		c[0 <= a ? a + b : a] = g[a];
		return q
	});
	return c
}

function gr(a, b, c) {
	var d = a.length,
		e = c || wn;
	if (d) var g = e(b, a[d - 1]);
	0 == d || 0 < g ? a[d] = b : (1 == d || 0 < e(b, a[d - 2])) && 0 > g ? (a[d] = a[d - 1], a[d - 1] = b) : An(a, b, c)
}
function xUa(a, b) {
	b.push(a);
	for (var c = 0; c < a.length; c++) om(a[c]) && (hn(b, a[c]) && f(Error(Ufa)), xUa(a[c], b));
	b.pop()
}
function yUa(a, b, c) {
	if (a.length != b.length) return q;
	c = c || oRa;
	for (var d = 0; d < a.length; d++) if (!c(a[d], b[d])) if (om(a[d]) && om(b[d])) {
		if (!yUa(a[d], b[d], c)) return q
	} else return q;
	return l
}

function zUa(a, b) {
	if (a.length != b.length) return q;
	for (var c = {}, d = 0; d < a.length; d++) {
		var e = a[d];
		c[e] ? c[e]++ : c[e] = 1
	}
	for (d = 0; d < b.length; d++) if (e = b[d], c[e]) 1 == c[e] ? delete c[e] : c[e]--;
	else return q;
	return Rn(c)
};

function hr(a, b, c) {
	if (a == b) return l;
	if (!um(a) || !um(b)) return q;
	var d = Pn(a);
	if (d.length != Pn(b).length) return q;
	c = c || oRa;
	for (var e = 0; e < d.length; e++) {
		var g = d[e];
		if (!(g in b) || !c(a[g], b[g])) return q
	}
	return l
}
function AUa(a, b) {
	return a === b ? l : om(a) && om(b) ? zn(a, b, AUa) : um(a) && um(b) ? hr(a, b, AUa) : q
}
function BUa(a, b) {
	b.push(a);
	for (var c in a) um(a[c]) && (hn(b, a[c]) && f(Error(Ufa)), BUa(a[c], b));
	b.pop()
};

function ir(a, b) {
	this.na = a;
	this.G = {};
	this.C = {};
	this.K = b || q;
	this.L = !this.K
}
L(ir, M);
F = ir.prototype;
F.JZ = q;
F.Ek = q;
F.Cx = function() {
	return this.K || !Rn(this.C)
};
F.Nda = D(q);

function CUa(a, b) {
	var c = jr(a, b);
	return c == m ? m : Wn(c)
}
function kr(a, b) {
	var c = jr(a, b);
	return c == m ? m : c
}
function DUa(a, b) {
	return jr(a, b) == m ? m : a.Nb(b) != r
}
function lr(a, b, c) {
	a.setProperty(b, c ? hl : r)
}
function EUa(a, b) {
	var c = jr(a, b);
	return c == m ? m : Wn(c)
}
function FUa(a, b) {
	var c = a.Nb(b);
	return Wn(c)
}
F.Nb = function(a) {
	return this.G[a]
};

function jr(a, b) {
	var c = a.G[b];
	return c != m ? c : m
}
F.setProperty = function(a, b) {
	if (um(b) && !om(b)) {
		BUa(b, []);
		if (this.G[a] == m || !AUa(this.G[a], b)) {
			var c = Wn(b);
			this.G[a] = c;
			this.L || (this.C[a] = c)
		}
		return this
	}
	if (om(b)) {
		xUa(b, []);
		BUa(b, []);
		if (this.G[a] == m || !yUa(this.G[a], b)) c = Wn(b), this.G[a] = c, this.L || (this.C[a] = c);
		return this
	}
	this.G[a] != b && (this.G[a] = b, this.L || (this.C[a] = b));
	return this
};

function mr(a, b, c, d) {
	var e = a.G,
		g = e[b];
	g == m && (e[b] = g = {});
	g[c] = d;
	a.L || (a = a.C, e = a[b], e == m && (a[b] = e = {}), e[c] = d)
}

function GUa(a) {
	function b() {}
	b.prototype = a.constructor.prototype;
	var c = new b;
	a.XL(c);
	mRa(!a.Cx());
	return c
}
F.XL = function(a) {
	a.G = Vn(this.G);
	a.C = this.C;
	this.C = {};
	a.K = this.K;
	a.JZ = this.JZ;
	a.Ek = this.Ek;
	a.na = this.na;
	this.K = q
};
F.OB = D(m);
F.O = function() {
	ir.M.O.call(this);
	delete this.G;
	delete this.C
};

function nr(a, b, c) {
	ir.call(this, 2, c);
	this.setProperty(Lg, a);
	this.setProperty(EBa, b)
}
L(nr, ir);
var HUa = [0, 1, 4, 2, 3];
F = nr.prototype;
F.Nda = D(l);
F.aa = function() {
	return this.Nb(Lg)
};
F.setTitle = function(a) {
	this.setProperty(bl, a)
};
F.xa = function() {
	return this.Nb(EBa)
};

function IUa(a) {
	if (a.Cx()) {
		var b = ym();
		a.setProperty(cJa, b)
	}
}
function JUa(a, b) {
	a.setProperty(bJa, b)
}
function KUa(a, b) {
	a.setProperty(tva, b)
}
function LUa(a, b) {
	a.setProperty(LEa, b.ce())
}
function or(a, b) {
	a.setProperty(aJa, b)
}
F.OB = function() {
	return this.Ek ? this.aa() : nr.M.OB.call(this)
};

function MUa(a) {
	return {
		type: a.xa(),
		Eaa: kr(a, ch),
		Nwa: jr(a, WEa) == m ? q : a.Nb(WEa) != r
	}
};

function NUa() {
	var a = ho(jo(), gya) || 24;
	return $q && cr(a)
};

function pr(a) {
	this.A = [];
	Hn(this, a, r, [])
}
L(pr, Gn);
pr.prototype.ld = function() {
	return this.Ua[11]
};

function OUa(a) {
	this.A = [];
	Hn(this, a, r, [])
}
L(OUa, Gn);

function PUa(a) {
	this.A = [];
	Hn(this, a, r, [])
}
L(PUa, Gn);

function QUa(a, b) {
	return new mo(a, b)
}
var RUa = q;

function SUa(a, b, c, d, e, g, h, n) {
	var p = {};
	p.label = a;
	p.visible = l;
	p.hint = d || a;
	b && (p.keys = b);
	c && (p.icon = c);
	e != m && (p[Txa] = e);
	g != m && (p[uva] = g);
	h && (p[ye] = h);
	n && (p[He] = n);
	return p
}
function qr(a, b) {
	var c = a.Nb(hh);
	om(c) || (c = [c]);
	c.push(b);
	a.setProperty(hh, c)
}
function rr(a, b) {
	var c = kga + (xo ? Pla : sea);
	qm(b) && (c += b + Ka);
	for (var d = r, e = 0; e < a.length; e++) d += c + a[e] + (e < a.length - 1 ? s : r);
	return d
}

function TUa(a, b) {
	function c(a, c, g, h, n, p, t, u, x) {
		n = n ? sr(n) : n;
		return b ? b(a, SUa(c, h, n, p, g, t, u, x)) : new mo(a, SUa(c, h, n, p, g, t, u, x))
	}
	RUa = l;
	U = {
		lD: c(Uva, pma, 668, yga),
		jF: c(jya, r, 59),
		bF: c(rAa, r, 347),
		Aq: c(ewa, r, 172),
		qt: c(fwa, aga, 173, fha),
		Os: c(wya, xma, 65),
		bD: c(ywa, Mha, 61, k, uf, k, k, yma, xua),
		eD: c(Oya, xna, 66, k, Rj, k, k, Cma, tua),
		BO: c(Dza, ypa, 68, k, MNa, k, k, Ema, vua),
		dD: c(cxa, ija, 63, k, mDa, k, k, Bma, uua),
		cD: c(Awa, Xha, 62, k, Bf, k, k, Ama, rua),
		Csa: c(sza, woa, 690, k, nk, k, k, Dma, sua),
		AO: c(Nza, mja, 64, k, k, k, k, zma, wua),
		aI: c(vya, r, 60),
		Zs: c(zwa,
		Qha, 18),
		aX: c(Owa, r, 24),
		kra: c(Nwa, r, 373),
		OPEN: c(Eya, Xma, 73, Iga, k, k, k, k, TCa),
		mra: c(Fya, r, 344),
		T8: c(CAa, r, 115),
		Dsa: c(BAa, kra, 114),
		Y8: c(iza, r, 90),
		Th: c(dza, Yna, 84, k, k, k, k, k, PMa),
		fX: c(Dwa, dia, 20, Sga, k, k, k, k, Mta),
		tq: c(iya, Mla, 58, k, k, k, k, k, QMa),
		iI: c(rza, Nc, 97, Kga, OMa),
		AD: c(Aza, r, 663),
		mI: c(jwa, r, 79),
		ik: c(Qya, Ana, 80, k, k, k, k, k, FLa),
		kD: c(Rya, r, 81),
		nk: c(Pya, yna, 78, Jga, ELa, k, k, k, FLa),
		Tl: c(Eza, Bpa, 102, k, NNa, k, k, k, MCa),
		bt: c(Hza, Lpa, 104, m, cOa),
		dw: c(xza, cpa, 101, k, k, k, k, k, gLa),
		Rv: c(dwa, bja, 11, m, YCa),
		Wv: c(Hya, cna, 74),
		Qm: c(Sya, Ena, 82, k, k, k, k, k, bNa),
		nra: c(Tya, r, 571),
		Ns: c(fza, boa, 87, k, k, k, k, k, doa),
		$W: c(Fwa, Zb, 22),
		Pm: c(gwa, Ob, 12, Bga, Yd, k, k, k, dga),
		jra: c(iwa, r, 13),
		Tm: c(kwa, Pb, 14, jha, ce, k, k, k, vMa),
		X8: c(Cwa, r, 19),
		Xm: c(Lya, Dc, 76, iha, Aj, k, k, k, sna),
		Ks: c(Uya, Nna, 83, [kha, eha], nMa, k, k, k, UCa),
		Ls: c(uza, Goa, 99, oga, k, k, k, k, YMa),
		gX: c(vza, Joa, 100, Pga, k, k, k, k, YMa),
		Rm: c(AAa, Wqa, 113, lha, BPa, k, k, k, UCa),
		yD: c(Twa, r, 29, [Ega, Fia]),
		zD: c(Uwa, r, 30, [Vga, fpa]),
		ww: c(Vwa, $ia, 31, Dga),
		dJ: c(Qwa, r, 26),
		Qs: c(Rwa, Zia, 27, (xo ? Qla : jga) + Aba, k, k, k, k, XMa),
		qD: c(Swa, r, 28),
		REPLACE: c(Ee, r, 85),
		nw: c(eza, r, 86),
		CO: c(Xxa, kc, 46),
		Asa: c(Qxa, Pja, 43, k, Og, k, k, nka, kLa),
		W: c(wza, bpa, 47, k, oNa, k, k, k, FEa),
		aw: c(Cza, wpa, 48, k, KNa, xka, k, xka, kOa),
		Y: c(Qza, aqa, 49, k, VOa),
		Bsa: c(GAa, qra, 50, k, UPa),
		bX: c(dxa, jja, 34),
		xo: c(Kva, hfa, 2, Aga, w, k, k, k, ZNa),
		Wm: c(Xwa, cja, 32, k, k, k, function(a) {
			var b = new pr;
			qm(a) && (b.Ua[11] = a);
			return b
		}),
		yq: c(Ewa, dea, 21, k, k, k, k, k, cea),
		ew: c(Ywa, eja, 33, k, k, k, function(a) {
			var b = new pr;
			sm(a) && (b.Ua[8] = a);
			return b
		}, k, pLa),
		yo: c(Yxa, Qka, 51, Fga, z, k, k, k, lCa),
		Yv: c(Gza, Ipa,
		103, Dea, WNa, k, k, k, VNa),
		Zv: c(Iza, Mpa, 105, lga, dOa, k, k, k, aOa),
		$v: c(Lza, Opa, 106, mga, iOa, k, k, k, hOa),
		wMa: c(Lva, jfa),
		G: c(Mva, kfa),
		Gz: c(Pza, $pa, 108, k, vOa, k, function(a) {
			var b = new pr;
			qm(a) && (a = new PUa([a]), Jn(b, 2, a));
			return b
		}),
		Ba: c(zya, Hqa, 680, m, mKa),
		Ha: c(Rza, bqa, 374),
		Hz: c(Zza, bqa, 109, m, wOa, k, function(a) {
			var b = new pr;
			qm(a) && (a = new PUa([a]), Jn(b, 3, a));
			return b
		}),
		zo: c(zAa, Uqa, 112, hha, wl, k, k, k, Vqa),
		na: c(xya, Hqa, 69, m, mKa),
		Aa: c(yya, Hqa, 70, m, mKa),
		L: c(Pwa, Yia, 25, m, QCa),
		ea: c(Zxa, ela, 52, m, jJa),
		LINE_WIDTH: c($xa, kla,
		53, m, lJa),
		cw: c(Kya, lna, 75, k, bLa),
		Ps: c(Xva, Wfa, 5, [mha, gha], Wta, Wfa, k, k, sMa),
		Ws: c(Gya, Wma, 356, xea),
		rD: c(lwa, r, 15),
		Kz: c(Vxa, r, 44, k, k, k, k, pka, IPa),
		Wl: c(Wxa, lla, 45, Hga, Qi, oka, k, pka, IPa),
		fw: c(hwa, cga, 362),
		SI: c(Wwa, r, 659, rr([Yb, Bc])),
		eX: c(JAa, r, 118),
		a9: c(IAa, r, 117),
		Ma: c(NAa, Dra, 119, aha),
		Na: c(OAa, Era, 120, Zga),
		Bf: c(HAa, $fa, 116, Uga, k, k, k, k, wCa),
		Uh: c(nxa, nja, 42, k, k, k, k, k, wCa),
		wq: c(qAa, Cqa, 23, Gea),
		sD: c(Bza, vpa, 338, (xo ? Ola : rea) + zba),
		qI: c(wAa, r, 111),
		Z8: c(uAa, r, 110),
		Ms: c(Nya, wna, 77, k, k, k, k, k, PKa),
		Ao: c(vAa, wha, 290,
		dha, k, xha, k, k, fva),
		lk: c(Zya, ioa, 315, wga, k, k, k, k, pMa),
		dn: c(cza, r, 316),
		lw: c(Yya, r, 318),
		kw: c(Vya, r, 317),
		ot: c(Wya, r, 350),
		mw: c(Xya, r, 339),
		dX: c(Mza, Wpa, 107),
		cX: c(lxa, r, 40),
		lI: c(hxa, Fja, 35, k, k, k, k, k, eEa),
		xz: c(jxa, ora, 38, k, k, k, k, k, eEa),
		yz: c(kxa, uja, 367, k, k, k, k, k, oja),
		rq: c(mxa, Xka, 41, nga, k, k, k, k, jEa),
		qq: c(Mwa, coa, 37, k, k, k, k, k, Bna),
		wo: c(fxa, rja, 580, k, k, k, k, k, Cna),
		lra: c(ixa, r, 36),
		Xs: c(Yva, xra, 6, m, $ta),
		Fz: c($va, r, 8, m, Yd),
		LO: c(bwa, rna, 10, k, Aj),
		Az: c(Zva, Vfa, 7),
		hD: c(awa, yra, 9),
		bw: c(oza, Dra, 95),
		Bz: c(pza, Era, 96),
		xq: c(lza, r, 92),
		aD: c(mza, r, 93),
		uo: c(hza, r, 89),
		uh: c(nza, r, 94),
		Dz: c(jza, r, 91),
		Ei: c(kza, Doa, 346, vga, k, k, k, k, DMa),
		OO: c(Tva, r, 4),
		Vm: c(Sva, Nfa, 3, epa, k, k, k, k, Ofa),
		p9: c(KEa, r, 364),
		o9: c(IEa, r, 365),
		BX: c(JEa, r, 573),
		K: c(mwa, r, 353),
		n9: c(owa, r, 355),
		zsa: c(nwa, r, 354),
		Ss: c(Bya, r, 71, xo && Do ? pha : tea, k, Boa),
		uj: c(twa, Yfa, 17, sga, Td, dka, k, dka, bea),
		gJ: c(swa, yha, 16),
		yI: c(qwa, r, 625, uga),
		jS: c(pwa, r, 670),
		hJ: c(uwa, r, 235, rr([Yb, Jb])),
		iJ: c(vwa, gma, 238, rr([vc, Jb])),
		jJ: c(wwa, lma, 239, rr([Bc, Jb])),
		kS: c(xwa, r, 671),
		Kia: c(hya, r, 57),
		oX: c(FJa,
		Aoa, 55, k, REa),
		Js: c(GJa, zoa, 56, k, k, k, k, k, SCa),
		Is: c(BJa, xoa, 54, k, k, k, k, k, dCa),
		nX: c(EJa, yoa, 349),
		Rs: c(CJa, r, 337),
		Ts: c(HJa, r, 352),
		Sv: c(DJa, sja, 664),
		Sm: c(YIa, $ka, 232),
		hI: c(Dsa, r, 169, m, k, k, function(a) {
			var b = new pr;
			qm(a) && (b.Ua[10] = a);
			return b
		}),
		Dc: c(Dya, r, 348),
		Co: c(kCa, r, 358, Tga),
		oI: c(Hva, r, 370),
		FD: c(Iva, r, 121),
		wI: c(Jva, r, 375),
		ED: c(Nxa, r, 130),
		xI: c(Oxa, r, 371),
		gD: c(Pxa, r, 376),
		Tz: c(Iya, r, 148),
		pI: c(Jya, r, 377),
		Uv: c(yza, xpa, 368),
		fD: c(uya, uc, 369),
		hk: c(pAa, r, 360, Xga, k, Yja, k, k, Aqa),
		gk: c(Uxa, r, 359, xga, k, Ioa, k, k,
		Xja)
	};
	U.sD.setProperty(ig, l);
	U.hJ.setProperty(ig, l);
	U.iJ.setProperty(ig, l);
	U.jJ.setProperty(ig, l);
	Do && U.Ss.setProperty(ig, l);
	U.fX.ua(q);
	U.Sm.ua(q);
	U.gX.ua(q);
	U.dw.ua(q);
	U.Ms.ua(q);
	U.Qm.ua(q);
	U.lk.ua(q);
	U.Ns.ua(q);
	U.Co.ua(q);
	U.Uv.ua(q);
	U.Ao.ua(q);
	U.xo.Yc(q);
	U.yo.Yc(q);
	U.zo.Yc(q);
	U.Bf.Yc(q);
	U.Uh.Yc(q);
	U.Tl.Yc(q);
	U.bt.Yc(q);
	U.Tl.ua(q);
	U.bt.ua(q);
	U.Rv.ua(q);
	U.Wv.ua(q);
	xo || (qr(U.Tm, dpa), qr(U.Pm, Gga), qr(U.Xm, gpa));
	U.Bf.setProperty(ig, l);
	$q && qr(U.Xm, cha);
	U.OO.ua(q);
	U.n9.ua(q);
	U.uh.ua(q);
	U.dn.ua(q);
	U.hk.ua(q);
	U.gk.ua(q);
	U.Dc.Ca(l);
	UUa();
	VUa( !! a)
}
function VUa(a) {
	RUa || f(Error("Actions not registered"));
	U.Ks.setProperty(Jg, sr(nMa + (a ? Pa : r)));
	U.Rm.setProperty(Jg, sr(BPa + (a ? Pa : r)))
}
function WUa() {
	var a = zxa;
	Q && !Io(9) && (a += taa);
	return a
}
function sr(a) {
	return WUa() + saa + a
}

function UUa() {
	function a(a, b, e, g, h) {
		a = new mo(a, SUa(b, (xo ? pga : Cea) + e, k, k, h, k, k, k));
		a.Cb(g);
		a.setProperty(ig, l);
		return a
	}
	tr = {
		Dia: a(lya, Qia, $b, U.aX.aa(), 307),
		Cia: a(kya, cia, Yb, U.$W.aa(), 306),
		Jia: a(sya, rra, Vc, U.eX.aa(), 314),
		Gia: a(oya, $ja, gc, U.CO.aa(), 310),
		Fia: a(nya, Gja, ec, U.cX.aa(), 309),
		Iia: a(rya, Dqa, Qc, U.qI.aa(), 313),
		Hia: a(qya, Xpa, Fb, U.dX.aa(), 312),
		Eia: a(mya, kja, Ac, U.bX.aa(), 308),
		IRa: a(pya, Lla, Eb, U.Kia.aa(), 311)
	};
	if ($q && !xo) {
		var b = tr;
		qr(b.Dia, yea);
		qr(b.Cia, wea);
		qr(b.Jia, Iea);
		qr(b.Gia, Aea);
		qr(b.Fia, zea);
		qr(b.Iia, Hea);
		qr(b.Hia, vea);
		qr(b.Eia, Bea);
		qr(b.IRa, uea)
	}
}
var U = {}, tr = {};

function ur(a) {
	this.Fc = um(a) ? a.Fc : a;
	!vr(this, 2) || vr(this, 1)
}
ur.prototype.Ga = C("Fc");

function vr(a, b) {
	return !!(a.Fc & b)
}
ur.prototype.Je = function() {
	return vr(this, 4)
};
ur.prototype.Oj = function() {
	return vr(this, 8)
};

function wr(a) {
	return vr(a, 64) && vr(a, 32)
}
function xr(a, b, c) {
	return vr(a, b) == c ? a : new ur(a.Fc ^ b)
}
ur.prototype.ob = function(a) {
	return this.Fc == a.Fc
};

function yr(a) {
	this.Fa = new ur(a);
	this.R = new S(this)
}
L(yr, bq);
yr.prototype.rU = C(ac);

function zr(a, b) {
	var c = a.Fa;
	return !c.ob(b) ? (a.Fa = b, a.dispatchEvent(new XUa(c)), l) : q
}
function Ar(a) {
	return vr(a.Fa, 2)
}
function YUa(a) {
	zr(a, xr(xr(a.Fa, 1, q), 2, l)) && a.dispatchEvent(ee)
}
yr.prototype.Oj = function() {
	return this.Fa.Oj()
};
yr.prototype.Je = function() {
	return this.Fa.Je()
};

function Br(a) {
	return vr(a.Fa, 16)
}
yr.prototype.O = function() {
	this.R.dispose();
	yr.M.O.call(this)
};

function XUa(a) {
	R.call(this, gd);
	this.A = a
}
L(XUa, R);

function Cr() {
	this.R = new S(this);
	this.C = {}
}
L(Cr, M);
Cr.prototype.bind = function(a) {
	this.A && Ar(this.A.A) ? a.Ca(l, CBa) : (this.C[a.aa()] = a, a.Ca(q, CBa))
};
Cr.prototype.F = function() {
	for (var a in this.C) this.C[a].Ca(l, CBa)
};
Cr.prototype.O = function() {
	Cr.M.O.call(this);
	this.R.dispose();
	delete this.R;
	delete this.A;
	delete this.C
};

function ZUa(a) {
	R.call(this, vva);
	this.action = a
}
L(ZUa, R);

function Dr(a, b) {
	this.F = {};
	this.na = a;
	this.L = b || QUa;
	this.A = {};
	RUa || TUa(a, this.L);
	this.G = {}
}
L(Dr, bq);
F = Dr.prototype;
F.Mw = m;

function Er(a, b) {
	var c = a.A[b],
		d = [],
		e;
	for (e in c) {
		var g = a.F[c[e]];
		d.push(g);
		g.Yc(q)
	}
	GRa(d)
}
F.gb = function(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	var E = {};
	E.enabled = !n;
	E.hint = d;
	e && (d = WUa(), E.icon = d + s + e + (u && this.na ? Pa : r));
	E.keys = g;
	E.label = b;
	E.value = h;
	E.visible = l;
	E.require_direct_target = !! t;
	E[uva] = x;
	E[ye] = y;
	if (E[He] = B) B && B.split(Ql), /[^ \|]\|/.test(B), /\|[^ \|]/.test(B);
	c != m && (E[Txa] = c);
	b = this.F[a] = this.L(a, E);
	p && (this.A[p] || (this.A[p] = {}), this.A[p][h != m && (qm(h) || rm(h) || sm(h)) ? h : a] = a);
	this.Mw && this.Mw.G(b);
	this.dispatchEvent(new ZUa(b));
	return b
};
F.Ja = function(a) {
	return this.F[a] || this.G[a] || m
};
F.Ea = function(a) {
	this.G[a.aa()] || (this.G[a.aa()] = a, this.dispatchEvent(new ZUa(a)));
	this.F[a.aa()] = a;
	this.Mw && this.Mw.G(a)
};
F.dQ = function() {
	return Pn(this.F)
};

function $Ua(a, b, c) {
	if (c = !a.A[b] ? m : a.Ja(a.A[b][c])) c.Yc(l);
	else for (var d in a.A[b])(!a.A[b] ? m : a.Ja(a.A[b][d])).Yc(q)
}
function aVa(a, b, c) {
	if (a = a.Ja(b)) {
		b = a.Nb(Jg);
		var d = !Cm(b, Pa);
		c && !d ? a.setProperty(Jg, b.substring(0, b.length - 4)) : !c && d && a.setProperty(Jg, b + Pa)
	}
}
F.O = function() {
	Dr.M.O.call(this);
	for (var a in this.F) a in this.G || O(this.F[a]);
	delete this.F;
	delete this.A;
	delete this.L;
	delete this.G;
	delete this.Mw
};

function bVa() {
	this.C = cVa(sNa, eia);
	this.F = cVa(tNa, fia);
	this.A = cVa(uNa, cpa);
	this.A.Ca(l)
}
var dVa = m;

function Fr() {
	return dVa || (dVa = new bVa)
}
function cVa(a, b) {
	var c = {};
	c.label = b;
	c.visible = l;
	c.hint = b;
	return new mo(a, c)
};

function Gr(a, b, c) {
	Dr.call(this, a.K, c);
	this.va = a;
	this.W = b;
	if (!go(jo(), Qf)) {
		U.Dc.Ca(q);
		b = this.W;
		c = Fr();
		b.bind(c.A).bind(c.C).bind(c.F).bind(U.OO).bind(U.Xs, k, l).bind(U.Az).bind(U.Fz, k, l).bind(U.hD, k, l).bind(U.LO).bind(U.Rv).bind(U.zsa).bind(U.n9).bind(U.Zs).bind(U.yq).bind(U.lI).bind(U.qq).bind(U.wo).bind(U.xz).bind(U.yz).bind(U.p9).bind(U.o9).bind(U.Asa).bind(U.Bsa).bind(U.Is).bind(U.Rs).bind(U.Sv).bind(U.nX).bind(U.oX).bind(U.Js).bind(U.Ts).bind(U.tq).bind(U.aI).bind(U.dD).bind(U.Csa).bind(U.AO).bind(U.BO).bind(U.Dc).bind(U.Ms).bind(U.mI).bind(U.ik).bind(U.Qm).bind(U.lk).bind(U.kw).bind(U.ot).bind(U.mw).bind(U.lw).bind(U.dn).bind(U.Th).bind(U.Ns).bind(U.Dz).bind(U.Ei).bind(U.xq).bind(U.uh).bind(U.aD).bind(U.bw).bind(U.Bz).bind(U.iI).bind(U.dw).bind(U.Tl).bind(U.bt).bind(U.Ao).bind(U.Dsa).bind(U.T8);
		go(jo(), eya) || b.bind(U.eD);
		go(jo(), dya) || b.bind(U.cD);
		go(jo(), rva) || b.bind(U.uj);
		this.ea(a);
		for (var d in this.A) Er(this, d);
		this.Ea(U.lD);
		this.Ea(U.Zs);
		this.Ea(U.tq);
		this.Ea(U.aI);
		this.Ea(U.bD);
		this.Ea(U.cD);
		this.Ea(U.dD);
		this.Ea(U.Os);
		this.Ea(U.eD);
		this.Ea(U.OPEN);
		this.Ea(U.ik);
		this.Ea(U.nk);
		this.Ea(U.Qm);
		this.Ea(U.Th);
		this.Ea(U.Ei);
		this.Ea(U.uh);
		this.Ea(U.iI);
		this.Ea(U.Pm);
		this.Ea(U.Tm);
		this.Ea(U.Xm);
		this.Ea(U.Ks);
		this.Ea(U.Ls);
		this.Ea(U.Rm);
		this.Ea(U.Qs);
		this.Ea(U.qD);
		this.Ea(U.yD);
		this.Ea(U.zD);
		this.Ea(U.ww);
		this.Ea(U.REPLACE);
		this.Ea(U.nw);
		this.Ea(U.lI);
		this.Ea(U.xz);
		this.Ea(U.yz);
		this.Ea(U.rq);
		this.Ea(U.qq);
		this.Ea(U.xo);
		this.Ea(U.Wm);
		this.Ea(U.yq);
		this.Ea(U.ew);
		this.Ea(U.yo);
		this.Ea(U.Yv);
		this.Ea(U.Zv);
		this.Ea(U.$v);
		this.Ea(U.Gz);
		this.Ea(U.Hz);
		this.Ea(U.zo);
		this.Ea(U.cw);
		this.Ea(U.aw);
		this.Ea(U.rD);
		this.Ea(U.Kz);
		this.Ea(U.Wl);
		this.Ea(U.Ws);
		this.Ea(U.fw);
		this.Ea(U.Ss);
		this.Ea(U.wq);
		this.Ea(U.AD);
		this.Ea(U.sD);
		this.Ea(U.Js);
		this.Ea(U.Is);
		this.Ea(U.Rs);
		this.Ea(U.Ts);
		this.Ea(U.Sv);
		this.Ea(U.Co);
		go(jo(), Kwa) && (this.Ea(U.lk), this.Ea(U.dn), this.Ea(U.lw), this.Ea(U.kw), this.Ea(U.ot), this.Ea(U.mw));
		this.Ea(U.Dc);
		go(jo(), xe) && this.Ea(U.fD);
		this.Ea(U.Aq);
		this.Ea(U.qt);
		eVa(this)
	}
}
L(Gr, Dr);

function eVa(a) {
	for (var b = Pn(a.G), c = 0, d; d = b[c]; c++) a.Ja(d).Ca(q);
	a.Y(a.va)
}
Gr.prototype.gb = function(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	n = n || go(jo(), Qf);
	a = Gr.M.gb.call(this, a, b, c, d, e, g, h, n, p, t, u, x, y, B);
	e && !Bm(e, pxa) && a.setProperty(Jg, KGa + e);
	return a
};

function Hr(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	b = a.gb(b, c, d, e, g, h, n, p, t, u, x, k, y, B);
	go(jo(), Qf) || a.W.bind(b)
}
Gr.prototype.Ea = function(a) {
	Gr.M.Ea.call(this, a);
	go(jo(), Qf) || a.Ca(l)
};

function Ir(a, b, c, d) {
	this.C = c;
	Gr.call(this, a, b, d)
}
L(Ir, Gr);
Ir.prototype.ea = G;
Ir.prototype.Y = function(a) {
	this.Ea(U.lD);
	this.Ea(U.tq);
	U.tq.Ca(!this.C.C, wc);
	this.Ea(U.aI);
	this.Ea(U.bD);
	U.bD.Ca(!this.C.C, wc);
	this.Ea(U.cD);
	this.Ea(U.dD);
	this.Ea(U.Os);
	U.Os.Ca(!this.C.C, wc);
	this.Ea(U.eD);
	this.Ea(U.OPEN);
	U.OPEN.Ca(!this.C.C, wc);
	this.Ea(U.nk);
	U.nk.Ca(l);
	this.Ea(U.ik);
	U.ik.Ca(!($q && cr(14)));
	this.Ea(U.Zs);
	U.Zs.Ca(a.Ha);
	this.Ea(U.Pm);
	this.Ea(U.ww);
	this.Ea(U.yD);
	this.Ea(U.zD);
	this.Ea(U.Ls);
	this.Ea(U.lI);
	this.Ea(U.xz);
	this.Ea(U.yz);
	this.Ea(U.rq);
	this.Ea(U.qq);
	this.Ea(U.Bf);
	this.Ea(U.Uh);
	this.Ea(U.wq);
	this.Ea(U.AD);
	this.Ea(U.sD);
	this.Ea(U.Vm);
	CRa() || U.Vm.Ca(q);
	this.Ea(U.Co);
	U.Co.Ca(q);
	this.Ea(U.dJ);
	if (a.L && (this.Ea(U.yI), this.Ea(U.hJ), this.Ea(U.iJ), this.Ea(U.jJ), 3 == a.A || 4 == a.A)) this.Ea(U.uj), this.Ea(U.gJ);
	3 == a.A && (this.Ea(U.Aq), this.Ea(U.qt));
	U.wo.setProperty(Mi, Lha);
	this.Ea(U.wo);
	this.Ea(U.Dc)
};

function Jr(a, b, c, d) {
	var e = this.K = new Cr;
	e.A = c;
	Ar(e.A.A) ? e.F() : Ap(e.R, e.A.A, ee, e.F);
	Ir.call(this, a, b, c, d)
}
L(Jr, Ir);
Jr.prototype.ea = function(a) {
	Jr.M.ea.call(this, a);
	this.gb(zh, r, 192)
};
Jr.prototype.Y = function(a) {
	Jr.M.Y.call(this, a);
	this.Ea(U.Th);
	U.Th.Ca(!this.C.C, wc);
	var b = a.Go && a.sg && !this.C.C;
	this.Ea(U.Qm);
	U.Qm.Ca(b);
	U.Qm.ua(l);
	this.Ea(U.iI);
	this.Ea(U.Ei);
	this.Ea(U.uh);
	U.Ei.Ca(a.Pc && !this.C.C);
	U.uh.Ca(a.Pc && !this.C.C);
	this.K.bind(U.uh);
	this.K.bind(U.Ei);
	this.Ea(U.Tm);
	this.Ea(U.Xm);
	this.Ea(U.Qs);
	this.Ea(U.qD);
	this.Ea(U.REPLACE);
	this.Ea(U.nw);
	this.Ea(U.Ks);
	this.Ea(U.Rm);
	this.Ea(U.xo);
	this.Ea(U.Ps);
	this.Ea(U.Wm);
	this.Ea(U.yq);
	this.Ea(U.ew);
	this.Ea(U.yo);
	this.Ea(U.Yv);
	this.Ea(U.Zv);
	this.Ea(U.$v);
	this.Ea(U.Gz);
	this.Ea(U.Hz);
	this.Ea(U.zo);
	this.Ea(U.Sm);
	this.Ea(U.hI);
	this.Ea(U.cw);
	U.aw.setProperty(zMa, q);
	this.Ea(U.aw);
	this.Ea(U.rD);
	this.Ea(U.Kz);
	this.Ea(U.Wl);
	this.Ea(U.Ws);
	this.Ea(U.SI);
	this.Ea(U.Ss);
	a = jo();
	go(a, oCa) && (this.Ea(U.Js), this.Ea(U.Is), this.Ea(U.Rs), this.Ea(U.Ts), U.Js.Ca(!this.C.C, wc), U.Is.Ca(!this.C.C, wc), U.Rs.Ca(!this.C.C, wc), U.Ts.Ca(!this.C.C, wc));
	this.Ea(U.Ao);
	go(a, Kwa) && (this.Ea(U.lk), this.Ea(U.dn), this.Ea(U.lw), this.Ea(U.kw), this.Ea(U.ot), this.Ea(U.mw));
	this.Ea(U.oI);
	this.Ea(U.FD);
	this.Ea(U.wI);
	this.Ea(U.ED);
	this.Ea(U.xI);
	this.Ea(U.gD);
	this.Ea(U.Tz);
	this.Ea(U.pI);
	go(a, Ge) && this.Ea(U.Uv);
	this.Ea(U.hk);
	this.Ea(U.gk);
	go(a, xe) && this.Ea(U.fD);
	this.Ea(U.Aq);
	this.Ea(U.qt);
	this.Ea(U.jS);
	this.Ea(U.kS)
};
Jr.prototype.O = function() {
	Jr.M.O.call(this);
	O(this.K)
};

function Kr(a) {
	pq.call(this, a.ma());
	this.Q = a
}
L(Kr, pq);
F = Kr.prototype;
F.Jna = 0;
F.Kna = 0;
F.Lna = q;
F.a7 = l;
F.xc = function(a, b) {
	if (this.N() && (a = Math.round(a), b = Math.round(b), !this.Lna || !(this.Kna == b && this.Jna == a))) this.Jna = a, this.Kna = b, this.N() && (Mp(this.N(), a, b), this.Lna = l)
};
F.Wa = C("a7");
F.ua = function(a) {
	this.N() && a != this.a7 && (this.N().style.display = a ? r : lj, this.a7 = a)
};

function fVa(a) {
	Kr.call(this, a)
}
L(fVa, Kr);

function gVa(a, b) {
	R.call(this, fCa, a);
	this.height = b
}
L(gVa, R);

function Lr(a) {
	this.G = new S(this);
	this.ib = new Gq(this);
	this.K = a;
	this.C = new mo(Yda, {
		enabled: l
	});
	this.F = {};
	this.A = new mo(Xda, {
		enabled: l
	});
	this.W = Mr(this);
	this.L = Nr(this);
	this.ib.$a(this.C, Md, this.ea).$a(this.A, Md, this.Y);
	this.G.A(a, Hf, this.ea);
	this.G.A(a, ud, this.Y)
}
L(Lr, bq);
Lr.prototype.ea = function() {
	var a = Mr(this);
	this.W != a && (this.W = a, this.dispatchEvent(kg))
};
Lr.prototype.Y = function() {
	var a = Nr(this);
	this.L != a && (this.L = a, this.dispatchEvent(Zf))
};

function Mr(a) {
	return Br(a.K) && a.C.isEnabled()
}

function Nr(a) {
	return vr(a.K.Fa, 128) && a.A.isEnabled()
}
function hVa(a, b, c) {
	b ? delete a.F[c] : a.F[c] = l;
	a.C.Ca(b, c)
}
Lr.prototype.O = function() {
	this.G.dispose();
	this.ib.dispose();
	this.C.dispose();
	this.A.dispose();
	Lr.M.O.call(this)
};
var Or = "StopIteration" in km ? km.StopIteration : Error("StopIteration");

function Pr() {}
Pr.prototype.next = function() {
	f(Or)
};
Pr.prototype.Qh = function() {
	return this
};

function iVa(a) {
	return typeof a.Dd == jg ? a.Dd() : pm(a) || qm(a) ? a.length : Nn(a)
}
function Qr(a) {
	if (typeof a.zc == jg) return a.zc();
	if (qm(a)) return a.split(r);
	if (pm(a)) {
		for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
		return b
	}
	return On(a)
}
function jVa(a) {
	if (typeof a.dd == jg) return a.dd();
	if (typeof a.zc != jg) {
		if (pm(a) || qm(a)) {
			var b = [];
			a = a.length;
			for (var c = 0; c < a; c++) b.push(c);
			return b
		}
		return Pn(a)
	}
}

function Rr(a, b, c) {
	if (typeof a.forEach == jg) a.forEach(b, c);
	else if (pm(a) || qm(a)) Vm(a, b, c);
	else for (var d = jVa(a), e = Qr(a), g = e.length, h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
}
function kVa(a, b, c) {
	if (typeof a.every == jg) return a.every(b, c);
	if (pm(a) || qm(a)) return en(a, b, c);
	for (var d = jVa(a), e = Qr(a), g = e.length, h = 0; h < g; h++) if (!b.call(c, e[h], d && d[h], a)) return q;
	return l
};

function Sr(a, b) {
	this.sd = {};
	this.A = [];
	var c = arguments.length;
	if (1 < c) {
		c % 2 && f(Error(Xqa));
		for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
	} else a && Tr(this, a)
}
F = Sr.prototype;
F.Td = 0;
F.XM = 0;
F.Dd = C("Td");
F.zc = function() {
	Ur(this);
	for (var a = [], b = 0; b < this.A.length; b++) a.push(this.sd[this.A[b]]);
	return a
};
F.dd = function() {
	Ur(this);
	return this.A.concat()
};

function Vr(a, b) {
	return Wr(a.sd, b)
}
F.kz = function(a) {
	for (var b = 0; b < this.A.length; b++) {
		var c = this.A[b];
		if (Wr(this.sd, c) && this.sd[c] == a) return l
	}
	return q
};
F.ob = function(a, b) {
	if (this === a) return l;
	if (this.Td != a.Dd()) return q;
	var c = b || lVa;
	Ur(this);
	for (var d, e = 0; d = this.A[e]; e++) if (!c(this.get(d), a.get(d))) return q;
	return l
};

function lVa(a, b) {
	return a === b
}
F.jc = function() {
	return 0 == this.Td
};
F.clear = function() {
	this.sd = {};
	this.XM = this.Td = this.A.length = 0
};
F.remove = function(a) {
	return Wr(this.sd, a) ? (delete this.sd[a], this.Td--, this.XM++, this.A.length > 2 * this.Td && Ur(this), l) : q
};

function Ur(a) {
	if (a.Td != a.A.length) {
		for (var b = 0, c = 0; b < a.A.length;) {
			var d = a.A[b];
			Wr(a.sd, d) && (a.A[c++] = d);
			b++
		}
		a.A.length = c
	}
	if (a.Td != a.A.length) {
		for (var e = {}, c = b = 0; b < a.A.length;) d = a.A[b], Wr(e, d) || (a.A[c++] = d, e[d] = 1), b++;
		a.A.length = c
	}
}
F.get = function(a, b) {
	return Wr(this.sd, a) ? this.sd[a] : b
};
F.set = function(a, b) {
	Wr(this.sd, a) || (this.Td++, this.A.push(a), this.XM++);
	this.sd[a] = b
};

function Tr(a, b) {
	var c, d;
	b instanceof Sr ? (c = b.dd(), d = b.zc()) : (c = Pn(b), d = On(b));
	for (var e = 0; e < c.length; e++) a.set(c[e], d[e])
}
F.La = function() {
	return new Sr(this)
};
F.Qh = function(a) {
	Ur(this);
	var b = 0,
		c = this.A,
		d = this.sd,
		e = this.XM,
		g = this,
		h = new Pr;
	h.next = function() {
		for (;;) {
			e != g.XM && f(Error("The map has changed since the iterator was created"));
			b >= c.length && f(Or);
			var h = c[b++];
			return a ? h : d[h]
		}
	};
	return h
};

function Wr(a, b) {
	return Object.prototype.hasOwnProperty.call(a, b)
};

function Xr(a) {
	this.sd = new Sr;
	a && Yr(this, a)
}
function mVa(a) {
	var b = typeof a;
	return b == qj && a || b == jg ? pj + vm(a) : b.substr(0, 1) + a
}
F = Xr.prototype;
F.Dd = function() {
	return this.sd.Dd()
};
F.add = function(a) {
	this.sd.set(mVa(a), a)
};

function Yr(a, b) {
	for (var c = Qr(b), d = c.length, e = 0; e < d; e++) a.add(c[e])
}
F.remove = function(a) {
	return this.sd.remove(mVa(a))
};
F.clear = function() {
	this.sd.clear()
};
F.jc = function() {
	return this.sd.jc()
};
F.contains = function(a) {
	return Vr(this.sd, mVa(a))
};
F.zc = function() {
	return this.sd.zc()
};
F.La = function() {
	return new Xr(this)
};
F.ob = function(a) {
	return this.Dd() == iVa(a) && nVa(this, a)
};

function nVa(a, b) {
	var c = iVa(b);
	if (a.Dd() > c) return q;
	!(b instanceof Xr) && 5 < c && (b = new Xr(b));
	return kVa(a, function(a) {
		return typeof b.contains == jg ? b.contains(a) : typeof b.kz == jg ? b.kz(a) : pm(b) || qm(b) ? hn(b, a) : Qn(b, a)
	})
}
F.Qh = function() {
	return this.sd.Qh(q)
};

function oVa(a) {
	var b = km.onerror,
		c = q;
	Eo && !Io(ada) && (c = !c);
	km.onerror = function(d, e, g) {
		b && b(d, e, g);
		a({
			message: d,
			fileName: e,
			NPa: g
		});
		return c
	}
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function es(a, b) {
	this.F = [];
	this.Aa = a;
	this.L = b || m
}
F = es.prototype;
F.wj = q;
F.TK = q;
F.v_ = q;
F.Oza = q;
F.h1 = q;
F.YQ = 0;
F.cancel = function(a) {
	if (this.wj) this.C instanceof es && this.C.cancel();
	else {
		if (this.A) {
			var b = this.A;
			delete this.A;
			a ? b.cancel(a) : (b.YQ--, 0 >= b.YQ && b.cancel())
		}
		this.Aa ? this.Aa.call(this.L, this) : this.h1 = l;
		this.wj || this.Bd(new fs)
	}
};
F.qca = function(a, b) {
	this.v_ = q;
	pVa(this, a, b)
};

function pVa(a, b, c) {
	a.wj = l;
	a.C = c;
	a.TK = !b;
	qVa(a)
}
function rVa(a) {
	a.wj && (a.h1 || f(new sVa), a.h1 = q)
}
F.zb = function(a) {
	rVa(this);
	pVa(this, l, a)
};
F.Bd = function(a) {
	rVa(this);
	pVa(this, q, a)
};

function gs(a, b, c) {
	return hs(a, b, m, c)
}
function is(a, b, c) {
	return hs(a, m, b, c)
}
function tVa(a, b) {
	hs(a, b, b, k)
}
function hs(a, b, c, d) {
	a.F.push([b, c, d]);
	a.wj && qVa(a);
	return a
}
function js(a, b) {
	gs(a, K(b.VWa, b))
}
F.VWa = function(a) {
	var b = new es;
	hs(this, b.zb, b.Bd, b);
	a && (b.A = this, this.YQ++);
	return b
};

function uVa(a) {
	return Zm(a.F, function(a) {
		return tm(a[1])
	})
}

function qVa(a) {
	a.K && (a.wj && uVa(a)) && (km.clearTimeout(a.K), delete a.K);
	a.A && (a.A.YQ--, delete a.A);
	for (var b = a.C, c = q, d = q; a.F.length && !a.v_;) {
		var e = a.F.shift(),
			g = e[0],
			h = e[1],
			e = e[2];
		if (g = a.TK ? h : g) try {
			var n = g.call(e || a.L, b);
			I(n) && (a.TK = a.TK && (n == b || n instanceof Error), a.C = b = n);
			b instanceof es && (d = l, a.v_ = l)
		} catch (p) {
			b = p, a.TK = l, uVa(a) || (c = l)
		}
	}
	a.C = b;
	d && (hs(b, K(a.qca, a, l), K(a.qca, a, q)), b.Oza = l);
	c && (a.K = km.setTimeout(ATa(b), 0))
}
function ks(a) {
	var b = new es;
	b.zb(a);
	return b
}

function ls(a) {
	var b = new es;
	b.Bd(a);
	return b
}
function sVa() {
	Am.call(this)
}
L(sVa, Am);
sVa.prototype.message = "Deferred has already fired";
sVa.prototype.name = "AlreadyCalledError";

function fs() {
	Am.call(this)
}
L(fs, Am);
fs.prototype.message = "Deferred was canceled";
fs.prototype.name = "CanceledError";

function ms() {}
L(ms, M);
ms.prototype.vb = hm();

function ns(a, b) {
	this.A = a;
	this.C = b
}
ns.prototype.execute = function(a) {
	this.A && (this.A.call(this.C || m, a), this.A = this.C = m)
};
ns.prototype.abort = function() {
	this.C = this.A = m
};
JSa(function(a) {
	ns.prototype.execute = a(ns.prototype.execute)
});

function os(a, b) {
	this.Fda = a;
	this.cb = b;
	this.C = [];
	this.A = [];
	this.F = []
}
L(os, M);
F = os.prototype;
F.Fla = m;
F.w0 = ms;
F.wf = m;
F.aa = C(Fd);
F.U0 = C("Fla");
F.aO = function(a, b) {
	return vVa(this.C, a, b)
};

function wVa(a, b) {
	vVa(a.A, b, k)
}
function vVa(a, b, c) {
	b = new ns(b, c);
	a.push(b);
	return b
}
F.Ro = function() {
	return !!this.wf
};

function xVa(a, b) {
	var c = new a.w0;
	c.vb(b());
	a.wf = c;
	c = (c = !! yVa(a.F, b())) || !! yVa(a.C, b());
	c || (a.A.length = 0);
	return c
}
F.C_ = function(a) {
	(a = yVa(this.A, a)) && window.setTimeout(nq($la + a), 0);
	this.F.length = 0;
	this.C.length = 0
};

function yVa(a, b) {
	for (var c = [], d = 0; d < a.length; d++) try {
		a[d].execute(b)
	} catch (e) {
		c.push(e)
	}
	a.length = 0;
	return c.length ? c : m
}
F.O = function() {
	os.M.O.call(this);
	O(this.wf)
};

function ps() {
	this.Ch = {};
	this.C = [];
	this.F = [];
	this.A = [];
	this.K = [];
	this.W = {};
	this.G = this.L = new os([], r)
}
L(ps, M);
mm(ps);
F = ps.prototype;
F.pP = m;
F.bS = 0;
F.Yma = q;
F.Zma = q;

function qs(a) {
	return ps.ya().Ch[a]
}
F.gka = D(m);
F.lc = function() {
	return 0 < this.C.length
};

function rs(a) {
	var b = a.Yma,
		c = a.lc();
	c != b && (zVa(a, c ? jd : Mg), a.Yma = c);
	b = 0 < a.K.length;
	b != a.Zma && (zVa(a, b ? KPa : MPa), a.Zma = b)
}
function AVa(a, b, c, d, e) {
	c.aO(e.zb, e);
	wVa(c, function(a) {
		e.Bd(Error(a))
	});
	BVa(a, b) ? d && (CVa(a, b), rs(a)) : d && CVa(a, b)
}

function DVa(a, b) {
	jn(a.C) ? EVa(a, b) : (a.A.push(b), rs(a))
}
function EVa(a, b, c, d) {
	c || (a.bS = 0);
	b = FVa(a, b);
	a.C = b;
	a.F = rn(b);
	rs(a);
	d = K(a.pP.rOa, a.pP, rn(b), a.Ch, m, K(a.pOa, a), K(a.qOa, a), !! d);
	(a = 5E3 * Math.pow(a.bS, 2)) ? window.setTimeout(d, a) : d()
}
function FVa(a, b) {
	for (var c = 0; c < b.length; c++) a.Ch[b[c]].Ro() && f(Error("Module already loaded: " + b[c]));
	for (var d = [], c = 0; c < b.length; c++) d = d.concat(GVa(a, b[c]));
	un(d);
	return 1 < d.length ? (c = d.shift(), a.A = Ym(d, function(a) {
		return [a]
	}).concat(a.A), [c]) : d
}

function GVa(a, b) {
	for (var c = [b], d = rn(a.Ch[b].Fda); d.length;) {
		var e = d.pop();
		a.Ch[e].Ro() || (c.unshift(e), Array.prototype.unshift.apply(d, a.Ch[e].Fda))
	}
	un(c);
	return c
}
function ss(a, b) {
	a.cd() || (xVa(a.Ch[b], K(a.gka, a)) && HVa(a, 4), on(a.K, b), on(a.C, b), jn(a.C) && IVa(a), rs(a))
}
function BVa(a, b) {
	if (hn(a.C, b)) return l;
	for (var c = 0; c < a.A.length; c++) if (hn(a.A[c], b)) return l;
	return q
}

function ts(a, b, c, d, e, g, h) {
	var n = a.Ch[b];
	n.Ro() ? (a = new ns(c, d), h ? a.execute(m) : window.setTimeout(K(a.execute, a), 0)) : BVa(a, b) ? (n.aO(c, d), g && (CVa(a, b), rs(a))) : (n.aO(c, d), e || (g && CVa(a, b), DVa(a, [b])))
}
F.load = function(a, b) {
	var c = [];
	un([a], c);
	for (var d = [], e = {}, g = 0; g < c.length; g++) {
		var h = c[g],
			n = this.Ch[h],
			p = new es;
		e[h] = p;
		n.Ro() ? p.zb(m) : (AVa(this, h, n, !! b, p), BVa(this, h) || d.push(h))
	}
	0 < d.length && DVa(this, d);
	return e[a]
};

function CVa(a, b) {
	hn(a.K, b) || a.K.push(b)
}
F.pOa = function(a) {
	this.bS++;
	401 == a ? (HVa(this, 0), this.A.length = 0) : 410 == a ? (JVa(this, 3), IVa(this)) : 3 <= this.bS ? (JVa(this, 1), IVa(this)) : EVa(this, this.F, l, 8001 == a)
};
F.qOa = function() {
	JVa(this, 2);
	IVa(this)
};

function JVa(a, b) {
	1 < a.F.length ? a.A = Ym(a.F, function(a) {
		return [a]
	}).concat(a.A) : HVa(a, b)
}

function HVa(a, b) {
	var c = a.F;
	a.C.length = 0;
	for (var d = [], e = 0; e < a.A.length; e++) {
		var g = Xm(a.A[e], function(a) {
			var b = GVa(this, a);
			return Zm(c, function(a) {
				return hn(b, a)
			})
		}, a);
		sn(d, g)
	}
	for (e = 0; e < c.length; e++) ln(d, c[e]);
	for (e = 0; e < d.length; e++) {
		for (g = 0; g < a.A.length; g++) on(a.A[g], d[e]);
		on(a.K, d[e])
	}
	var h = a.W.error;
	if (h) for (e = 0; e < h.length; e++) for (var n = h[e], g = 0; g < d.length; g++) n(Xf, d[g], b);
	for (e = 0; e < c.length; e++) a.Ch[c[e]] && a.Ch[c[e]].C_(b);
	a.F.length = 0;
	rs(a)
}

function IVa(a) {
	for (; a.A.length;) {
		var b = Xm(a.A.shift(), function(a) {
			return !this.Ch[a].Ro()
		}, a);
		if (0 < b.length) {
			EVa(a, b);
			return
		}
	}
	rs(a)
}
F.aO = function(a, b) {
	om(a) || (a = [a]);
	for (var c = 0; c < a.length; c++) {
		var d = a[c],
			e = b,
			g = this.W;
		g[d] || (g[d] = []);
		g[d].push(e)
	}
};

function zVa(a, b) {
	for (var c = a.W[b], d = 0; c && d < c.length; d++) c[d](b)
}
F.O = function() {
	ps.M.O.call(this);
	ko(On(this.Ch), this.L);
	this.W = this.A = this.K = this.F = this.C = this.Ch = m
};

function us(a, b, c, d, e, g, h) {
	Kr.call(this, a);
	this.A = b;
	this.L = c;
	this.G = d;
	this.F = e;
	this.K = g;
	this.C = h
}
L(us, Kr);
F = us.prototype;
F.Ez = m;
F.ok = m;
F.cI = m;
F.ks = m;
F.iD = m;
F.sW = q;
F.UV = q;
F.za = function() {
	us.M.za.call(this);
	2 != this.Q.va.A && (KVa(this), T(this).A(this.Q.Ba, [Zf, kg], this.RIa));
	qs(Fi).Ro() && LVa(this)
};
F.Ic = function(a) {
	us.M.Ic.call(this, a);
	var b = this.C;
	a = 4 == this.Q.Ba;
	if (go(jo(), Kg)) {
		var b = b.C,
			c = Ko().N(ve),
			d = Ko().Mb(zxa, Ko().N(XPa)),
			e = Ko().N(Cya),
			g = Ko().N(tya),
			h = Ko().N(gxa);
		switch (b) {
			case 2:
				c.style.display = r;
				go(jo(), Rf) && a && (e.style.display = r);
				break;
			case 3:
				po(d, xxa, wxa);
				c.style.display = r;
				break;
			default:
				po(d, xxa, wxa), c.style.display = r, g.style.display = r, h.style.display = r
		}
	}
};

function MVa(a) {
	if (!a.ks) {
		var b = qs(Fi);
		if (!b.Ro()) return m;
		var b = b.wf,
			c = b.oOa(),
			d = a.ma();
		a.ks = new c(k, k, d);
		a.Oa(a.ks);
		a.ks.ua(q);
		(c = d.N(ve)) && a.ks.Va(c);
		c = a.Q;
		a.ks.C(vs(c, b), c.C);
		a.ks.Ca(NVa(a))
	}
	return a.ks
}
function NVa(a) {
	return go(jo(), Qf) ? a.sW : a.sW && !a.UV
}
F.RIa = function() {
	KVa(this)
};

function KVa(a) {
	var b = a.Q.Ba,
		b = !Mr(b) && !Nr(b);
	b != a.UV && (a.UV = b, OVa(a))
}
F.Ca = function(a) {
	this.sW = a;
	OVa(this)
};

function OVa(a) {
	a.Ez && a.Ez.Ca(a.sW && !a.UV);
	var b = NVa(a);
	a.cI && a.cI.Ca(b);
	a.ks && a.ks.Ca(b)
}

function LVa(a) {
	if (a.ok) {
		var b = qs(Fi).wf,
			c = a.Q;
		a.ok.oDa(vs(c, b), PVa(c, b), c.ba().Ii(), c.C);
		a.cI.Ca(NVa(a));
		b.mDa()()
	}
	4 == a.Q.va.A && (a.Q.C.Ja(ii).$a(v, a.nDa, a), a.Q.C.Ja(Ph).$a(v, a.pDa, a))
}
F.nDa = function() {
	var a = MVa(this);
	a ? QVa(this, !a.Wa()) : this.Q.ra.log(Error(NDa))
};
F.pDa = function() {
	MVa(this) ? QVa(this, l) : this.Q.ra.log(Error(wNa))
};

function QVa(a, b) {
	var c = MVa(a);
	c && c.Wa() != b && (c.ua(b), a.Q.C.Ja(ii).Yc(b), a.dispatchEvent(ck), a.A.qe(3))
}
F.O = function() {
	us.M.O.call(this);
	O(this.iD);
	O(this.cI)
};

function RVa(a) {
	this.F = a
}
F = RVa.prototype;
F.xa = C($b);
F.shift = function() {
	return this
};
F.Pa = function() {
	var a = {};
	a.loc_type = this.F;
	return a
};
F.mM = function(a) {
	return !a || this.F != a.xa() ? 1 : 0
};
F.ob = function(a) {
	return 0 == this.mM(a)
};

function ws(a, b) {
	this.F = 0;
	this.G = a;
	this.C = !! b
}
L(ws, RVa);
ws.prototype.A = C(cc);
ws.prototype.Pa = function() {
	var a = ws.M.Pa.call(this);
	a.si = this.G;
	a.aps = this.C;
	return a
};
ws.prototype.mM = function(a) {
	var b = ws.M.mM.call(this, a);
	return 0 != b ? b : 0 == a.xa() ? this.G - a.A() : -1
};
ws.prototype.shift = function(a, b) {
	return new ws(this.G + a, I(b) ? b : this.C)
};

function xs(a, b) {
	this.start = a < b ? a : b;
	this.end = a < b ? b : a
}
xs.prototype.La = function() {
	return new xs(this.start, this.end)
};

function ys(a, b) {
	return a == b ? l : !a || !b ? q : a.start == b.start && a.end == b.end
}
function zs(a, b) {
	var c = Math.max(a.start, b.start),
		d = Math.min(a.end, b.end);
	return c <= d ? new xs(c, d) : m
}
function As(a, b) {
	return Math.max(a.start, b.start) <= Math.min(a.end, b.end)
}
function Bs(a, b) {
	return a.start <= b.start && a.end >= b.end
}
function Cs(a, b) {
	return a.start <= b && a.end >= b
};

function Ds(a, b, c) {
	a > b && f(Error("Start index must be less than or equal to end index"));
	this.A = a;
	this.C = b;
	a = c.A();
	(a < this.A || a > this.C + 1) && f(Error("Mark must be contained within the range"));
	this.F = c
}
Ds.prototype.G = m;

function Es(a) {
	a.G || (a.G = new xs(a.A, a.C));
	return a.G
}
Ds.prototype.toString = function() {
	return ad + this.A + Ma + this.C + cd
};

function Fs(a, b) {
	return a.start == b.start ? a.end - b.end : a.start - b.start
};

function Gs(a, b, c, d) {
	this.Lb = a;
	this.A = b || m;
	c ? this.F = c : this.A ? (a = this.A.A, b = this.A.C, this.F = new Ds(a, b, this.A.F.A() == a ? new ws(b + 1, l) : new ws(a))) : this.F = m;
	this.G = d || [];
	this.C = this.G.concat();
	this.A && this.C.push(Es(this.A));
	this.F && !ys(Es(this.F), Es(this.A)) && this.C.push(Es(this.F))
}
function Hs(a) {
	return a.Lb
}
function Is(a) {
	return a.A
}
function Js(a) {
	return a.C
}
function Ks(a) {
	return a.A != m
}
Gs.prototype.ob = function(a) {
	if (this == a) return l;
	var b = a.C;
	xn(b, Fs);
	xn(this.C, Fs);
	if (!zn(b, this.C, ys)) return q;
	var b = (b = a.F) ? b.F : a.Lb,
		c = this.F ? this.F.F : this.Lb;
	return this.Lb.ob(a.Lb) && c.ob(b)
};
Gs.prototype.Pa = function() {
	var a = {};
	a.cl = this.Lb.Pa();
	for (var b = [], c = 0; c < this.C.length; c++) b.push([this.C[c].start, this.C[c].end]);
	0 != b.length && (a.sr = b);
	return a
};

function SVa(a, b) {
	if (a.Lb.ob(b)) return l;
	if (0 == b.xa() && Ks(a)) for (var c = 0; c < a.C.length; c++) if (Cs(a.C[c], b.A())) return l;
	return q
}

function Ls(a) {
	return new Gs(a)
}
function Ms(a, b) {
	var c = new ws(a, b < a);
	return a == b ? new Gs(c) : new Gs(c, new Ds(Math.min(a, b), Math.max(a, b) - 1, c))
}
function Ns(a, b, c) {
	return new Gs(a.F, a, b, c)
};

function TVa(a) {
	this.ra = a
}
function Os(a) {
	for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = l;
	return b
}
var UVa = [bm, am, da, aa, WQa, ga, ja, na, ha],
	VVa = Os(UVa),
	WVa = Os([bm, am, oa, pa, ma, ka, qa, la, fa, $l, Zl, da, aa, WQa, na, ha, ja, ga]),
	XVa = Os([oa, pa, ma, ka, qa, la, va, Ja, $l, Zl]),
	YVa = Os([ra, Db, va, ya, Aa, dd, Ba, Ja, Ha, Ia, Ka, zb, bd, Ql, Pl, Rl, ad, cd, pb, nb, sa, Sa, Cb, Qa, La, qb, Ab, Sl, fd, Wl, Xl, "\u00bf", "\u00a1"]),
	ZVa = RegExp("[\x00-\b\n\f-\u001f\ue000-\uf8ff]", kg),
	$Va = RegExp("[\x0B\n]", kg),
	Ps = Os([bm, am, aa, WQa, ga, ja, na, ha]);
TVa.prototype.A = function(a, b, c) {
	return Qs(this, a, b || 0, I(c) ? c : this.ub() - 1)
};

function Qs(a, b, c, d) {
	for (var e = []; c <= d; c++) {
		c = a.indexOf(b, c);
		if (-1 == c || c > d) break;
		e.push(c)
	}
	return e
}
function Rs(a, b) {
	if (b > a.ub() - 1) return Ss(a, a.ub() - 1) + 1;
	if (1 >= b) return 1;
	for (var c = a.lastIndexOf(da, b - 1), c = Math.max(c, 0); c < b - 1 && VVa[Ts(a, c + 1)];) c++;
	return c + 1
}
function Us(a, b) {
	var c = a.ub() - 1;
	b > c && a.ra.log(Error(lpa));
	var d = a.indexOf(da, b);
	return -1 == d || d > c ? c : d
}

function Ss(a, b) {
	return 0 > b ? (a.ra.log(Error(mpa + b)), 0) : a.lastIndexOf(aa, b)
}
function Vs(a, b) {
	var c = a.ub() - 1;
	if (0 > b || b > c) return a.ra.log(Error(kpa + b)), c;
	var d = a.indexOf(aa, b + 1);
	return 0 <= d ? d - 1 : c
}
function Ws(a, b) {
	if (1 > b) return a.ra.log(Error(Ffa + b)), q;
	for (var c = b - 1; 0 <= c; c--) if (Xs(a, c)) return Ys(a, c);
	return l
}
function Ys(a, b) {
	return Ts(a, b) == da
}
function Zs(a, b) {
	return Ts(a, b) == aa
}
function aWa(a, b) {
	return Ts(a, b) == fa
}
function Xs(a, b) {
	return !Ps[Ts(a, b)]
}

function $s(a) {
	return a == da || a == ea || a == ba || a == s || a == fa
}
function at(a, b) {
	return 0 < a.length ? RegExp(ad + Mm(a.join(r)) + cd, b ? r : kg) : m
};

function bt(a) {
	this.A = a
}
F = bt.prototype;
F.Qr = 0;
F.ke = function(a) {
	ct(this, a);
	a.update(this.Pa())
};

function ct(a, b) {
	b.A = a.A;
	b.Qr = a.Qr
}
F.Ga = hm();
F.Tf = D(q);
F.update = function(a) {
	for (var b in a) {
		var c = a[b];
		I(c) && this.Oc(b, c)
	}
};
F.Oc = function(a, b) {
	if (I(bWa(this.A.A).get(a))) {
		var c = this.Ga(a);
		c && !b ? this.Qr-- : !c && b && this.Qr++
	}
};
F.Sr = function() {
	return []
};
F.tU = D(m);

function dt(a) {
	if (0 < a.Qr) return l;
	for (var b = a.Sr(), c = 0; c < b.length; c++) {
		var d = a.Ga(b[c]);
		if (d && dt(d)) return l
	}
	return q
}
F.ao = function() {
	for (var a = [], b = this.Sr(), c = 0; c < b.length; c++) {
		var d = this.Ga(b[c]);
		d && sn(a, d.ao())
	}
	return a
};
F.ho = function(a) {
	var b = [],
		c;
	for (c in a) if (this.Tf(c)) {
		var d = this.Ga(c);
		d && a[c] && sn(b, d.ho(a[c]))
	}
	return b
};
F.I_ = function(a) {
	for (var b = this.Sr(), c = 0; c < b.length; c++) {
		var d = this.Ga(b[c]);
		d && d.I_(a)
	}
};

function cWa(a, b) {
	var c = {};
	a.C7(b, c);
	return c
}
F.C7 = function(a, b) {
	for (var c in a) if (this.Tf(c)) {
		var d = this.Ga(c);
		d && a[c] && d.C7(a[c], b)
	}
};
F.Cm = function(a) {
	dt(a) && f(Error("All annotations with inheritable properties should implement its own version of copyInheritedPropertiesTo."))
};
F.wg = function(a) {
	for (var b in a) {
		var c = this.Ga(b);
		if (this.Tf(b) && c) {
			if (!c.wg(a[b])) return q
		} else if (c != a[b]) return q
	}
	return l
};
F.ob = function(a) {
	if (this == a) return l;
	if (!a) return q;
	a = a.Pa();
	return this.wg(a)
};
F.Bx = function(a, b) {
	if (this.Tf(a)) {
		var c = this.Ga(a);
		return c ? c.ob(b) : c == b
	}
	return this.Ga(a) == b
};

function dWa(a, b) {
	if (a == b) return l;
	var c = dt(a),
		d = dt(b);
	if (c != d) return q;
	if (!c && !d) return a.ob(b);
	c = a.A.K;
	for (d = 0; d < c.length; d++) {
		var e = c[d],
			g = a.A.A.get(e) || m;
		if (g) {
			var h = a.Ga(g),
				g = b.Ga(g);
			if (h && g) continue;
			else if (h != g) return q
		}
		if (a.Tf(e)) {
			if (h = a.Ga(e), e = b.Ga(e), !dWa(h, e)) return q
		} else if (!a.Bx(e, b.Ga(e))) return q
	}
	return l
};

function et(a, b) {
	this.A = b;
	this.W = a
}
L(et, bt);
var eWa = {
	wYa: td,
	QYa: Gd,
	XVa: Td,
	L6: uf,
	aB: Vf,
	VZa: Wf,
	fWa: hg,
	D0a: qg,
	kWa: wg,
	yWa: Pg,
	iO: Ni,
	sj: Qi,
	E2: Ri,
	DWa: zj,
	Doa: gk,
	JWa: Bk,
	N7: Tk,
	TEXT: Wk
}, ft = {}, fWa = {}, gWa = {}, hWa = [],
	iWa = {}, jWa = [Gd, uf, qg, Tk, Wk];
F = et.prototype;
F.xa = C(Wc);
F.eo = function() {
	return []
};
F.Yj = D(q);
F.VH = D(q);
F.Vqa = D(q);
F.YS = D(l);
F.$q = D(l);
F.cK = D(l);
F.Sr = function() {
	if (iWa[this.W]) return iWa[this.W];
	for (var a = this.A.C, b = [], c = 0; c < a.length; c++) {
		var d = a[c];
		this.Tf(d) && b.push(d)
	}
	return iWa[this.W] = b
};
F.yQ = function() {
	return []
};
F.ob = function(a) {
	if (!a) return q;
	if (this == a) return l;
	if (this.xa() != a.xa()) return q;
	for (var b = this.A.C, c = 0; c < b.length; c++) {
		var d = b[c];
		if (!this.Bx(d, a.Ga(d))) return q
	}
	return l
};

function gt(a, b) {
	return !b || a.xa() != b.xa() ? q : dWa(a, b)
}
function kWa(a, b) {
	var c = a.La();
	if (b.xa() != a.xa()) return c;
	b.Cm(c);
	return c
}
F.Jg = function() {
	return this.Pa()
};

function ht(a, b, c, d) {
	if (b = it(b)) for (var e in a) {
		var g = b.A.A.get(e) || m;
		if (g && (d || !I(a[g]))) a[g] = !! c
	}
}

function jt(a, b, c) {
	if (b = it(b)) {
		b = b.A.F;
		for (var d = 0; d < b.length; d++) a[b[d]] = !! c
	}
}
function lWa(a, b) {
	var c, d = m;
	dr(a, function(a, g) {
		if (d) {
			for (var h = d, n = c || h.Pa(), p = h.A.C, t = 0; t < p.length; t++) {
				var u = p[t];
				h.Bx(u, g.Ga(u)) || (n[u] = k)
			}
			c = n
		} else {
			d = g;
			if (b) {
				h = d;
				n = h.A.C;
				for (p = 0; p < n.length; p++) if (t = n[p], h.Tf(t) || !h.Bx(t, b[t])) b[t] = k;
				h = b
			} else h = d.Pa();
			c = h
		}
		return q
	});
	return c || {}
}

function kt(a) {
	var b = a();
	ft[b.xa()] = b;
	fWa[b.xa()] = a;
	if (b.Yj()) for (var b = b.eo(), c = 0; c < b.length; c++) {
		var d = b[c];
		gWa[d] || (hWa.push(d), gWa[d] = []);
		gWa[d].push(a)
	}
}
function it(a) {
	var b = fWa[a];
	b || f(Error("The style for type: " + a + " is not registered."));
	return b()
}
function lt(a) {
	return (a = ft[a]) ? a.Yj() : l
}
function mWa(a) {
	return (a = ft[a]) ? a.VH() : q
}
function mt(a) {
	return (a = ft[a]) ? a.Vqa() : q
};

function nt(a, b, c, d) {
	c = a.A(c);
	if (!c.length) return q;
	c = vn(c, b);
	if (0 <= c) return l;
	c = -c - 1;
	a = a.A(d);
	b = vn(a, b);
	return 0 <= b ? l : c > -b - 1
}
function nWa(a, b, c, d) {
	c = a.A(c);
	if (!c.length) return 1;
	a = a.A(d);
	d = vn(c, b);
	if (0 <= d) return c[d];
	d = -d - 2;
	b = vn(a, b);
	0 > b ? b = -b - 2 : b--;
	if (b >= d) return -1;
	for (; 0 <= d && !(0 > b || 0 == d) && !(c[d] > a[b]);) d--, b--;
	return c[d]
}

function oWa(a, b, c, d) {
	c = a.A(c);
	if (!c.length) return 1;
	a = a.A(d);
	d = vn(c, b);
	0 > d && (d = -d - 2);
	d++;
	b = vn(a, b);
	if (0 > b) b = -b - 1;
	else return a[b];
	if (b >= d) return -1;
	for (; b < a.length && !(d >= c.length) && !(a[b] < c[d]);) d++, b++;
	return a[b]
};

function ot(a) {
	return pt(a.ba().qa(), qt(a.A))
}
function pt(a, b) {
	return nt(a, b, ga, ha)
}
function rt(a, b, c, d) {
	a = a.qa();
	var e = a.ub(),
		g = 0,
		h = Ts(a, b);
	if (h == ga) {
		h = c.call(d, h, b);
		if (h == q) return b;
		b++
	}
	for (; b <= e; b++) {
		h = Ts(a, b);
		switch (h) {
			case ga:
				g++;
				break;
			case ha:
				if (g--, 0 == g) continue
		}
		if (0 >= g && (h = c.call(d, h, b), 0 > g || h == q)) return b
	}
	return a.ub()
}

function pWa(a, b, c, d) {
	a = a.qa();
	var e = 0,
		g = Ts(a, b);
	if (g == ha) {
		g = c.call(d, g, b);
		if (g == q) return;
		b--
	}
	for (; 0 < b; b--) {
		g = Ts(a, b);
		switch (g) {
			case ha:
				e++;
				break;
			case ga:
				if (e--, 0 == e) continue
		}
		if (0 >= e && (g = c.call(d, g, b), 0 > e || g == q)) break
	}
}
function st(a, b) {
	var c = nWa(a, b, ga, ha);
	0 > c && f(Error("TableUtil.getTableStartIndex: Spacer index " + c + zaa));
	return c
}
function tt(a, b) {
	var c = oWa(a, b, ga, ha);
	0 > c && f(Error("TableUtil.getTableEndIndex: Spacer index " + c + zaa));
	return c
}

function ut(a, b) {
	var c = 0,
		d = 0;
	pWa(a, b, function(a) {
		switch (a) {
			case na:
				0 == d && c++;
				break;
			case ja:
				d++
		}
		return l
	});
	return {
		Db: d - 1,
		Gb: c - 1
	}
}
function vt(a, b) {
	Ts(a.qa(), b) != ga && f(Error("tableStartIndex should be a table start marker."));
	var c = 0,
		d = 0;
	rt(a, b, function(a) {
		switch (a) {
			case ja:
			case ha:
				c = Math.max(c, d);
				d = 0;
				break;
			case na:
				d++
		}
		return l
	});
	return c
}

function qWa(a, b, c) {
	var d = Ts(a, b);
	if (d == c) return b;
	d == ga && b--;
	for (var d = st(a, b), e = b;;) {
		Ts(a, e) == ha && e--;
		b = a.lastIndexOf(ha, e);
		0 > b && (b = 1);
		e = a.lastIndexOf(c, e);
		if (e < d) break;
		if (e > b) return e;
		e = st(a, b - 1)
	}
	return 1
}
function wt(a, b) {
	return qWa(a, b, ja)
}
function rWa(a, b, c) {
	var d = 0;
	return rt(a, b, function(a) {
		if (a == ja) {
			if (d == c) return q;
			d++
		}
		return l
	})
}

function sWa(a, b, c) {
	0 <= c.indexOf(Ts(a, b)) && b++;
	for (var d = tt(a, b), e = b;;) {
		b = a.indexOf(ga, e);
		if (0 > b || b > d) b = a.ub() - 1;
		var g = a.indexOf(ha, e);
		g > d + 1 && (g = -1);
		var h;
		h = a;
		for (var n = c, p = d, t = [], u = 0; u < n.length; u++) {
			var x = h.indexOf(n.charAt(u), e);
			0 < x && (!p || x < p) && t.push(x)
		}
		h = 0 < t.length ? Math.min.apply(m, t) : -1;
		var y;
		0 <= g && 0 <= h ? y = Math.min(g, h) : 0 <= g ? y = g : 0 <= h && (y = h);
		if (!y) break;
		if (y < b) return y - 1;
		e = tt(a, b) + 1
	}
	return d - 1
}
function xt(a, b) {
	return sWa(a, b, ja)
}

function yt(a, b, c) {
	var d = c != m ? c : st(a, b);
	if (2 >= b - d) return d + 2;
	b = qWa(a, b, na);
	if (c == m) return b;
	for (; st(a, b) > d;) b = qWa(a, st(a, b), na);
	return b
}
function zt(a, b) {
	return sWa(a, b, daa)
}
function tWa(a, b) {
	var c = 0;
	pWa(a, b, function(a) {
		a == ja && c++;
		return l
	});
	return c - 1
}

function uWa(a, b, c) {
	var d = a.qa();
	a = vWa(a, new xs(b, c));
	b = pt(d, a.start);
	c = pt(d, a.end);
	if (b && c) {
		c = st(d, a.start);
		var e = st(d, a.end),
			g = yt(d, a.end, e);
		b = zt(d, a.start);
		if (c == e) return yt(d, a.start, c) == g ? ANa : BNa;
		if (c > e) return c > g ? hKa : gKa;
		c = tt(d, a.start);
		d = tt(d, a.end);
		return c > d ? b > d ? fKa : eKa : cNa
	}
	return b ? ONa : c ? pCa : tKa
}

function wWa(a, b, c, d) {
	if (0 != c.xa() || 0 != b.xa()) return Ls(c);
	var e = Math.min(c.A(), b.A()),
		g = Math.max(b.A(), c.A()) - 1,
		h = xWa(a, e, g);
	if (-1 == h) return m;
	var n = a.qa();
	if (e == h || g == tt(n, h)) return m;
	var p = At(a, h, e),
		t = At(a, h, g);
	if (p.Db == t.Db && p.Gb == t.Gb) {
		var u = yt(n, e, h),
			n = zt(n, e);
		if (!d && (e != u + 1 || g != n + 1)) return m
	}
	a = yWa(a, h, p, t);
	g = b.A() == g + 1;
	b = new ws((g ? t.Gb < p.Gb : p.Gb <= t.Gb) ? (g ? a[a.length - 1] : a[0]).start : (g ? a[a.length - 1] : a[0]).end + 1, !(g ? t.Gb < p.Gb : p.Gb <= t.Gb));
	p = a.length;
	b = new Ds(a[g ? p - 1 : 0].start, a[g ? p - 1 : 0].end, b);
	c = new Ds(a[g ? 0 : p - 1].start, a[g ? 0 : p - 1].end, c);
	return 2 >= p ? Ns(b, c) : Ns(b, c, tn(a, 1, p - 1))
}
function xWa(a, b, c) {
	switch (uWa(a, b, c)) {
		case ANa:
		case BNa:
		case fKa:
		case eKa:
			return b = vWa(a, new xs(b, c)), st(a.qa(), b.start);
		case hKa:
		case gKa:
			return b = vWa(a, new xs(b, c)), st(a.qa(), b.end);
		case cNa:
			return xWa(a, st(a.qa(), b) - 1, st(a.qa(), c) - 1);
		case pCa:
		case ONa:
		case tKa:
			return -1;
		default:
			f(Error("Unknown table selection type"))
	}
}

function At(a, b, c) {
	Ts(a.qa(), b) != ga && f(Error(Eia));
	var d = 0,
		e = 0;
	rt(a, b + 1, function(a, b) {
		if (b > c) return q;
		switch (a) {
			case na:
				d++;
				break;
			case ja:
				d = 0, e++
		}
		return l
	});
	return 0 == d || 0 == e ? {
		Db: 0,
		Gb: 0
	} : {
		Db: e - 1,
		Gb: d - 1
	}
}

function yWa(a, b, c, d) {
	var e = Math.min(c.Gb, d.Gb),
		g = Math.max(c.Gb, d.Gb),
		h = Math.min(c.Db, d.Db),
		n = Math.max(c.Db, d.Db),
		p = [],
		t, u = 0,
		x = 0;
	rt(a, b, function(b, c) {
		switch (b) {
			case na:
				u == e && (t = c);
				u == g && x > h && p.push(new xs(t, zt(a.qa(), c)));
				u++;
				break;
			case ja:
				(u <= g && x > h || p.length && p[p.length - 1].start != t) && p.push(new xs(t, c - 1));
				if (x > n) return q;
				u = 0;
				x++
		}
		return l
	});
	return p
}

function zWa(a, b) {
	var c = b.C;
	if (0 == c.length) return -1;
	var d = AWa(a, c[0]);
	if (-1 == d) return -1;
	for (var e = 1; e < c.length; e++) if (d != AWa(a, c[e])) return -1;
	return d
}
function AWa(a, b) {
	var c = a.qa();
	if (Ts(c, b.start) != na) return -1;
	c = Ts(c, b.end + 1);
	if (c != na && c != ja && c != ha) return -1;
	var c = st(a.qa(), b.start),
		d = st(a.qa(), b.end);
	return c != d ? -1 : c
}

function BWa(a, b, c, d) {
	var e = a.qa();
	if (37 != d && 39 != d) return {
		location: c,
		Ep: q
	};
	d = b.Lb;
	if (0 != c.xa() || 0 != d.xa()) return {
		location: c,
		Ep: q
	};
	d = d.A();
	var g = c.A();
	b = b.F ? b.F.F.A() : d;
	if (!pt(e, b)) return {
		location: c,
		Ep: q
	};
	var h = st(e, b),
		n = pt(e, g),
		p = n ? st(e, g) : -1,
		t = pt(e, d),
		u = t ? st(e, d) : -1;
	if (g < d && Ts(e, g - 1) == ha && tt(e, b) == g - 1) return Bt(a, g - 2, q);
	if (!t || n && p > u) return n && h == p ? Bt(a, g, g > d) : {
		location: c,
		Ep: q
	};
	h = Ts(e, d);
	if (h == ga || h == ha) return {
		location: c,
		Ep: q
	};
	if (u > b || tt(e, u) < b) return {
		location: c,
		Ep: q
	};
	if (!n || p != u) return Bt(a, d, g < d);
	e = ut(a, g);
	g = ut(a, d);
	return e.Db != g.Db ? Bt(a, d, e.Db < g.Db) : e.Gb != g.Gb ? Bt(a, d, e.Gb < g.Gb) : {
		location: c,
		Ep: q
	}
}
function Bt(a, b, c) {
	if (c) return a = yt(a.qa(), b), {
		location: new ws(a),
		Ep: l
	};
	a = zt(a.qa(), b);
	return {
		location: new ws(a + 1),
		Ep: l
	}
}
function vWa(a, b) {
	var c = b.start,
		d = b.end,
		e = a.qa();
	Ts(e, c) == ga && c--;
	Ts(e, d) == ha && d++;
	return new xs(c, d)
}

function CWa(a, b) {
	var c = a.qa(),
		d = uWa(a, b.start, b.end),
		e = m,
		g = m,
		h = b.start,
		n = b.end;
	Ts(c, h) == ga && pt(c, h - 1) && h--;
	Ts(c, n) == ha && pt(c, n + 1) && n++;
	switch (d) {
		case hKa:
			e = Ct(a, st(c, n), h);
			break;
		case fKa:
			g = Ct(a, st(c, h), n);
			break;
		case cNa:
			c = xWa(a, st(c, h) - 1, st(c, n) - 1); - 1 == c ? (e = Dt(a, h), g = Dt(a, n)) : (e = Ct(a, c, h), g = Ct(a, c, n));
			break;
		case ONa:
			e = Dt(a, h);
			break;
		case pCa:
			g = Dt(a, n)
	}
	return {
		g7: e,
		f7: g
	}
}
function Dt(a, b) {
	pt(a.qa(), b) || f(Error("The index should be in a table."));
	var c = st(a.qa(), b);
	return pt(a.qa(), c - 1) ? Dt(a, c - 1) : c
}

function Ct(a, b, c) {
	Ts(a.qa(), b) != ga && f(Error(Eia));
	(c < b || !pt(a.qa(), c)) && f(Error(hqa));
	c = st(a.qa(), c);
	var d = pt(a.qa(), c - 1);
	c != b && !d && f(Error(hqa));
	return c - 1 > b && d && (a = Ct(a, b, c - 1), a != b) ? a : c
};

function Et() {
	this.A = {}
}
L(Et, M);
Et.prototype.Gr = function(a, b, c) {
	tm(a) ? c && (a = K(a, c)) : a && typeof a.handleEvent == jg ? a = K(a.handleEvent, a) : f(Error(Lka));
	c = new DWa;
	a = eq(K(this.C, this, a, c), b);
	this.A[a] = l;
	return c.cb = a
};
Et.prototype.C = function(a, b) {
	var c = b.aa();
	c === m || delete this.A[c];
	a()
};
Et.prototype.clear = function(a) {
	a === m || delete this.A[a];
	fq(a)
};
Et.prototype.O = function() {
	for (var a in this.A) fq(Number(a));
	Et.M.O.call(this)
};

function DWa() {
	this.cb = m
}
DWa.prototype.aa = C(Fd);

function Ft(a, b, c) {
	b || (b = {});
	var d = c || window;
	c = "undefined" != typeof a.href ? a.href : String(a);
	a = b.target || a.target;
	var e = [],
		g;
	for (g in b) switch (g) {
		case Kl:
		case rg:
		case cl:
		case Pi:
			e.push(g + zb + b[g]);
			break;
		case nOa:
		case rKa:
			break;
		default:
			e.push(g + zb + (b[g] ? 1 : 0))
	}
	g = e.join(La);
	if (b.noreferrer) {
		if (b = d.open(r, a, g)) Q && -1 != c.indexOf(pb) && (c = Ga + c.replace(/'/g, eba) + Ga), b.opener = m, c = Km(c), b.document.write(Eda + c + ta), b.document.close()
	} else b = d.open(c, a, g);
	return b
};

function Gt(a) {
	this.ra = a || m
}
var EWa = [{
	name: "clipboardWrite",
	XW: 0
}],
	FWa = [{
		name: "unlimitedStorage",
		XW: 0
	}, {
		name: "unlimited_storage",
		XW: 0
	}];

function GWa() {
	try {
		return km.chrome.app.isInstalled ? sj : um(HWa()) ? sKa : jva
	} catch (a) {
		return jva
	}
}
function IWa(a, b) {
	if ($q) if (cr(16)) {
		var c = io(jo(), Jua);
		try {
			km.chrome.webstore.install(c, b)
		} catch (d) {
			a.ra && a.ra.log(d), Ft(c || io(jo(), Jua))
		}
	} else Ft(io(jo(), Jua))
}
function HWa() {
	if (!$q) return m;
	try {
		return km.chrome.app.getDetails()
	} catch (a) {
		return m
	}
}

function JWa(a, b) {
	if ($q && GWa() == sj) try {
		for (var c = HWa().permissions || [], d = 0; d < a.length; d++) if (hn(c, a[d].name) && cr(a[d].XW)) return l;
		return q
	} catch (e) {
		return b
	} else return q
};
var KWa = Eo && !Io(534);

function Ht() {
	return Q || KWa || JWa(EWa, q)
};

function LWa(a, b) {
	Am.call(this, Dm(kia, b, MWa(a)));
	this.code = a
}
L(LWa, Am);

function MWa(a) {
	switch (a) {
		case 1:
			return Sia;
		case 2:
			return Zja;
		case 3:
			return $ma;
		case 4:
			return Tia;
		case 5:
			return Fka;
		case 6:
			return Ifa;
		case 7:
			return Nka;
		case 8:
			return Kka;
		case 9:
			return Mka;
		case 10:
			return Jna;
		case 11:
			return Jka;
		case 12:
			return Ria;
		default:
			return Zqa
	}
};

function NWa(a, b) {
	R.call(this, a.type, b)
}
L(NWa, R);

function It() {
	this.A = new FileReader;
	this.A.onloadstart = K(this.SG, this);
	this.A.onprogress = K(this.SG, this);
	this.A.onload = K(this.SG, this);
	this.A.onabort = K(this.SG, this);
	this.A.onerror = K(this.SG, this);
	this.A.onloadend = K(this.SG, this)
}
L(It, bq);
F = It.prototype;
F.abort = function() {
	try {
		this.A.abort()
	} catch (a) {
		f(new LWa(a.code, "aborting read"))
	}
};
F.ng = function() {
	return this.A.result
};
F.getError = function() {
	return this.A.error && new LWa(this.A.error.code, jMa)
};
F.SG = function(a) {
	this.dispatchEvent(new NWa(a, this))
};
F.O = function() {
	It.M.O.call(this);
	delete this.A
};

function OWa(a) {
	var b = new It,
		c = PWa(b);
	b.A.readAsDataURL(a);
	return c
}
function PWa(a) {
	var b = new es;
	a.addEventListener(tJa, wm(function(a, b) {
		var e = b.ng(),
			g = b.getError();
		e != m && !g ? a.zb(e) : a.Bd(g);
		b.dispose()
	}, b, a));
	return b
};

function Jt(a, b) {
	R.call(this, a);
	if (b) a: {
		var c = b.Mc;
		if (c.clipboardData && c.clipboardData.items) {
			for (var c = c.clipboardData.items, d = m, e = 0; e < c.length; e++) {
				var g = c[e];
				if (g.kind == Kk) break a;
				!d && (g.kind == bg && QWa[g.type]) && (d = g.getAsFile())
			}
			this.A = d
		}
	}
}
L(Jt, R);
Jt.prototype.A = m;
var QWa = {
	"image/bmp": l,
	"image/gif": l,
	"image/jpeg": l,
	"image/jpg": l,
	"image/png": l
};

function RWa(a, b, c) {
	!a.A || !b ? c(a) : gs(OWa(a.A), function(a) {
		b.innerHTML = tb + a + ta;
		c(this)
	}, a)
};

function Kt(a, b, c, d, e) {
	this.A = !! b;
	a && this.xc(a, d);
	this.C = e != k ? e : this.Tj || 0;
	this.A && (this.C *= -1);
	this.F = !c
}
L(Kt, Pr);
F = Kt.prototype;
F.Ob = m;
F.Tj = 0;
F.s0 = q;
F.xc = function(a, b, c) {
	if (this.Ob = a) this.Tj = sm(b) ? b : 1 != this.Ob.nodeType ? 0 : this.A ? -1 : 1;
	sm(c) && (this.C = c)
};
F.co = function(a) {
	this.Ob = a.Ob;
	this.Tj = a.Tj;
	this.C = a.C;
	this.A = a.A;
	this.F = a.F
};
F.La = function() {
	return new Kt(this.Ob, this.A, !this.F, this.Tj, this.C)
};
F.next = function() {
	var a;
	if (this.s0) {
		(!this.Ob || this.F && 0 == this.C) && f(Or);
		a = this.Ob;
		var b = this.A ? -1 : 1;
		if (this.Tj == b) {
			var c = this.A ? a.lastChild : a.firstChild;
			c ? this.xc(c) : this.xc(a, -1 * b)
		} else(c = this.A ? a.previousSibling : a.nextSibling) ? this.xc(c) : this.xc(a.parentNode, -1 * b);
		this.C += this.Tj * (this.A ? -1 : 1)
	} else this.s0 = l;
	(a = this.Ob) || f(Or);
	return a
};
F.ob = function(a) {
	return a.Ob == this.Ob && (!this.Ob || a.Tj == this.Tj)
};
F.splice = function(a) {
	var b = this.Ob,
		c = this.A ? 1 : -1;
	this.Tj == c && (this.Tj = -1 * c, this.C += this.Tj * (this.A ? -1 : 1));
	this.A = !this.A;
	Kt.prototype.next.call(this);
	this.A = !this.A;
	for (var c = pm(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) Vo(c[d], b);
	Wo(b)
};

function Lt() {}
function SWa(a) {
	if (a.getSelection) return a.getSelection();
	a = a.document;
	var b = a.selection;
	if (b) {
		try {
			var c = b.createRange();
			if (c.parentElement) {
				if (c.parentElement().document != a) return m
			} else if (!c.length || c.item(0).document != a) return m
		} catch (d) {
			return m
		}
		return b
	}
	return m
}
function TWa(a) {
	a = a.KN();
	return 1 == a.nodeType ? a : a.parentNode
}
Lt.prototype.zx = D(q);
Lt.prototype.sb = function() {
	return Mo(Q ? this.KN() : this.yd())
};
Lt.prototype.Vb = function() {
	return Qo(this.sb())
};
Lt.prototype.nE = jm(75);

function Mt(a, b) {
	Kt.call(this, a, b, l)
}
L(Mt, Kt);

function Nt() {}
L(Nt, Lt);
Nt.prototype.GH = jm(88);
Nt.prototype.cz = jm(80);
Nt.prototype.WU = jm(108);

function Ot(a, b, c, d, e) {
	var g;
	a && (this.Ad = a, this.AH = b, this.zd = c, this.NC = d, 1 == a.nodeType && a.tagName != efa && (a = a.childNodes, (b = a[b]) ? (this.Ad = b, this.AH = 0) : (a.length && (this.Ad = Sm(a)), g = l)), 1 == c.nodeType && ((this.zd = c.childNodes[d]) ? this.NC = 0 : this.zd = c));
	Kt.call(this, e ? this.zd : this.Ad, e, l);
	if (g) try {
		this.next()
	} catch (h) {
		h != Or && f(h)
	}
}
L(Ot, Mt);
F = Ot.prototype;
F.Ad = m;
F.zd = m;
F.AH = 0;
F.NC = 0;
F.XC = jm(85);
F.WC = jm(25);
F.yd = C("Ad");
F.ve = C("zd");
F.dN = function() {
	return this.s0 && this.Ob == this.zd && (!this.NC || 1 != this.Tj)
};
F.next = function() {
	this.dN() && f(Or);
	return Ot.M.next.call(this)
};
F.co = function(a) {
	this.Ad = a.Ad;
	this.zd = a.zd;
	this.AH = a.AH;
	this.NC = a.NC;
	this.kq = a.kq;
	Ot.M.co.call(this, a)
};
F.La = function() {
	var a = new Ot(this.Ad, this.AH, this.zd, this.NC, this.kq);
	a.co(this);
	return a
};

function UWa() {}
function VWa(a, b, c) {
	c = c && !b.Ll();
	b = b.mO();
	try {
		return c ? 0 <= a.mo(b, 0, 1) && 0 >= a.mo(b, 1, 0) : 0 <= a.mo(b, 0, 0) && 0 >= a.mo(b, 1, 1)
	} catch (d) {
		return Q || f(d), q
	}
}
UWa.prototype.Qh = function() {
	return new Ot(this.yd(), this.$e(), this.ve(), this.Cg())
};

function Tt(a) {
	this.Eb = a
}
L(Tt, UWa);

function WWa(a) {
	var b = Mo(a).createRange();
	if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
	else if (Ut(a)) {
		for (var c, d = a;
		(c = d.firstChild) && Ut(c);) d = c;
		b.setStart(d, 0);
		for (d = a;
		(c = d.lastChild) && Ut(c);) d = c;
		b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
	} else c = a.parentNode, a = Um(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
	return b
}
function XWa(a, b, c, d) {
	var e = Mo(a).createRange();
	e.setStart(a, b);
	e.setEnd(c, d);
	return e
}
F = Tt.prototype;
F.La = function() {
	return new this.constructor(this.Eb.cloneRange())
};
F.mO = C("Eb");
F.bW = function() {
	return this.Eb.commonAncestorContainer
};
F.yd = function() {
	return this.Eb.startContainer
};
F.$e = function() {
	return this.Eb.startOffset
};
F.ve = function() {
	return this.Eb.endContainer
};
F.Cg = function() {
	return this.Eb.endOffset
};
F.mo = function(a, b, c) {
	return this.Eb.compareBoundaryPoints(1 == c ? 1 == b ? km.Range.START_TO_START : km.Range.START_TO_END : 1 == b ? km.Range.END_TO_START : km.Range.END_TO_END, a)
};
F.Ll = function() {
	return this.Eb.collapsed
};
F.lb = jm(68);
F.RW = jm(155);
F.select = function(a) {
	var b = Qo(Mo(this.yd()));
	this.YN(b.getSelection(), a)
};
F.YN = function(a) {
	a.removeAllRanges();
	a.addRange(this.Eb)
};
F.TW = jm(140);
F.SW = jm(175);
F.UW = jm(173);
F.collapse = function(a) {
	this.Eb.collapse(a)
};

function Vt(a) {
	this.Eb = a
}
L(Vt, Tt);
Vt.prototype.YN = function(a, b) {
	!b || this.Ll() ? Vt.M.YN.call(this, a, b) : (a.collapse(this.ve(), this.Cg()), a.extend(this.yd(), this.$e()))
};

function Wt(a, b) {
	this.Eb = a;
	this.A = b
}
L(Wt, UWa);

function Xt(a) {
	var b = Mo(a).body.createTextRange();
	if (1 == a.nodeType) b.moveToElementText(a), Ut(a) && !a.childNodes.length && b.collapse(q);
	else {
		for (var c = 0, d = a; d = d.previousSibling;) {
			var e = d.nodeType;
			if (3 == e) c += d.length;
			else if (1 == e) {
				b.moveToElementText(d);
				break
			}
		}
		d || b.moveToElementText(a.parentNode);
		b.collapse(!d);
		c && b.move(Nd, c);
		b.moveEnd(Nd, a.length)
	}
	return b
}
F = Wt.prototype;
F.fs = m;
F.Ad = m;
F.zd = m;
F.Ol = -1;
F.Mm = -1;
F.La = function() {
	var a = new Wt(this.Eb.duplicate(), this.A);
	a.fs = this.fs;
	a.Ad = this.Ad;
	a.zd = this.zd;
	return a
};
F.mO = C("Eb");
F.bW = function() {
	if (!this.fs) {
		var a = this.Eb.text,
			b = this.Eb.duplicate(),
			c = a.replace(/ +$/, r);
		(c = a.length - c.length) && b.moveEnd(Nd, -c);
		c = b.parentElement();
		b = b.htmlText.replace(/(\r\n|\r|\n)+/g, s).length;
		if (this.Ll() && 0 < b) return this.fs = c;
		for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, s).length;) c = c.parentNode;
		for (; 1 == c.childNodes.length && c.innerText == (3 == c.firstChild.nodeType ? c.firstChild.nodeValue : c.firstChild.innerText) && Ut(c.firstChild);) c = c.firstChild;
		0 == a.length && (c = YWa(this, c));
		this.fs = c
	}
	return this.fs
};

function YWa(a, b) {
	for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
		var g = c[d];
		if (Ut(g)) {
			var h = Xt(g),
				n = h.htmlText != g.outerHTML;
			if (a.Ll() && n ? 0 <= a.mo(h, 1, 1) && 0 >= a.mo(h, 1, 0) : a.Eb.inRange(h)) return YWa(a, g)
		}
	}
	return b
}
F.yd = function() {
	this.Ad || (this.Ad = Yt(this, 1), this.Ll() && (this.zd = this.Ad));
	return this.Ad
};
F.$e = function() {
	0 > this.Ol && (this.Ol = ZWa(this, 1), this.Ll() && (this.Mm = this.Ol));
	return this.Ol
};
F.ve = function() {
	if (this.Ll()) return this.yd();
	this.zd || (this.zd = Yt(this, 0));
	return this.zd
};
F.Cg = function() {
	if (this.Ll()) return this.$e();
	0 > this.Mm && (this.Mm = ZWa(this, 0), this.Ll() && (this.Ol = this.Mm));
	return this.Mm
};
F.mo = function(a, b, c) {
	return this.Eb.compareEndPoints((1 == b ? Cpa : gia) + yqa + (1 == c ? Cpa : gia), a)
};

function Yt(a, b, c) {
	c = c || a.bW();
	if (!c || !c.firstChild) return c;
	for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
		var h = d ? e : g - e - 1,
			n = c.childNodes[h],
			p;
		try {
			p = $Wa(n)
		} catch (t) {
			continue
		}
		var u = p.mO();
		if (a.Ll()) if (Ut(n)) {
			if (VWa(p, a)) return Yt(a, b, n)
		} else {
			if (0 == a.mo(u, 1, 1)) {
				a.Ol = a.Mm = h;
				break
			}
		} else {
			if (VWa(a, p)) {
				if (!Ut(n)) {
					d ? a.Ol = h : a.Mm = h + 1;
					break
				}
				return Yt(a, b, n)
			}
			if (0 > a.mo(u, 1, 0) && 0 < a.mo(u, 0, 1)) return Yt(a, b, n)
		}
	}
	return c
}

function ZWa(a, b) {
	var c = 1 == b,
		d = c ? a.yd() : a.ve();
	if (1 == d.nodeType) {
		for (var d = d.childNodes, e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
			var n = d[h];
			if (!Ut(n) && 0 == a.Eb.compareEndPoints((1 == b ? Cpa : gia) + yqa + (1 == b ? Cpa : gia), $Wa(n).mO())) return c ? h : h + 1
		}
		return -1 == h ? 0 : h
	}
	e = a.Eb.duplicate();
	g = Xt(d);
	e.setEndPoint(c ? iia : Gpa, g);
	e = e.text.length;
	return c ? d.length - e : e
}
F.Ll = function() {
	return 0 == this.Eb.compareEndPoints(Fpa, this.Eb)
};
F.lb = jm(67);
F.RW = jm(154);
F.select = function() {
	this.Eb.select()
};
F.TW = jm(139);
F.SW = jm(174);
F.UW = jm(172);
F.collapse = function(a) {
	this.Eb.collapse(a);
	a ? (this.zd = this.Ad, this.Mm = this.Ol) : (this.Ad = this.zd, this.Ol = this.Mm)
};

function Zt(a) {
	this.Eb = a
}
L(Zt, Tt);
Zt.prototype.YN = function(a) {
	a.collapse(this.yd(), this.$e());
	(this.ve() != this.yd() || this.Cg() != this.$e()) && a.extend(this.ve(), this.Cg());
	0 == a.rangeCount && a.addRange(this.Eb)
};

function $t(a) {
	this.Eb = a
}
L($t, Tt);
$t.prototype.mo = function(a, b, c) {
	return Io(Zca) ? $t.M.mo.call(this, a, b, c) : this.Eb.compareBoundaryPoints(1 == c ? 1 == b ? km.Range.START_TO_START : km.Range.END_TO_START : 1 == b ? km.Range.START_TO_END : km.Range.END_TO_END, a)
};
$t.prototype.YN = function(a, b) {
	a.removeAllRanges();
	b ? a.setBaseAndExtent(this.ve(), this.Cg(), this.yd(), this.$e()) : a.setBaseAndExtent(this.yd(), this.$e(), this.ve(), this.Cg())
};

function $Wa(a) {
	if (Q && !Jo(9)) {
		var b = new Wt(Xt(a), Mo(a));
		if (Ut(a)) {
			for (var c, d = a;
			(c = d.firstChild) && Ut(c);) d = c;
			b.Ad = d;
			b.Ol = 0;
			for (d = a;
			(c = d.lastChild) && Ut(c);) d = c;
			b.zd = d;
			b.Mm = 1 == d.nodeType ? d.childNodes.length : d.length;
			b.fs = a
		} else b.Ad = b.zd = b.fs = a.parentNode, b.Ol = Um(b.fs.childNodes, a), b.Mm = b.Ol + 1;
		a = b
	} else a = Eo ? new $t(WWa(a)) : Do ? new Vt(WWa(a)) : Co ? new Zt(WWa(a)) : new Tt(WWa(a));
	return a
}
function Ut(a) {
	return So(a) || 3 == a.nodeType
};

function au() {}
L(au, Lt);

function aXa(a, b) {
	var c = new au;
	c.TC = a;
	c.kq = !! b;
	return c
}
function bu(a, b, c, d) {
	var e = new au;
	e.kq = bXa(a, b, c, d);
	if (Yo(a) && !So(a)) {
		var g = a.parentNode;
		b = Um(g.childNodes, a);
		a = g
	}
	Yo(c) && !So(c) && (g = c.parentNode, d = Um(g.childNodes, c), c = g);
	e.kq ? (e.Ad = c, e.Ds = d, e.zd = a, e.Es = b) : (e.Ad = a, e.Ds = b, e.zd = c, e.Es = d);
	return e
}
F = au.prototype;
F.TC = m;
F.Ad = m;
F.Ds = m;
F.zd = m;
F.Es = m;
F.kq = q;
F.La = function() {
	var a = new au;
	a.TC = this.TC;
	a.Ad = this.Ad;
	a.Ds = this.Ds;
	a.zd = this.zd;
	a.Es = this.Es;
	a.kq = this.kq;
	return a
};
F.xa = D(Wk);
F.xr = jm(198);
F.Nx = jm(194);
F.yr = jm(192);

function cu(a) {
	var b;
	if (!(b = a.TC)) {
		b = a.yd();
		var c = a.$e(),
			d = a.ve(),
			e = a.Cg();
		if (Q && !Jo(9)) {
			var g = b,
				h = c,
				n = d,
				p = e,
				t = q;
			1 == g.nodeType && (h = g.childNodes[h], t = !h, g = h || g.lastChild || g, h = 0);
			var u = Xt(g);
			h && u.move(Nd, h);
			g == n && h == p ? u.collapse(l) : (t && u.collapse(q), t = q, 1 == n.nodeType && (n = (h = n.childNodes[p]) || n.lastChild || n, p = 0, t = !h), g = Xt(n), g.collapse(!t), p && g.moveEnd(Nd, p), u.setEndPoint(iia, g));
			p = new Wt(u, Mo(b));
			p.Ad = b;
			p.Ol = c;
			p.zd = d;
			p.Mm = e;
			b = p
		} else b = Eo ? new $t(XWa(b, c, d, e)) : Do ? new Vt(XWa(b, c, d, e)) : Co ? new Zt(XWa(b,
		c, d, e)) : new Tt(XWa(b, c, d, e));
		b = a.TC = b
	}
	return b
}
F.KN = function() {
	return cu(this).bW()
};
F.yd = function() {
	return this.Ad || (this.Ad = cu(this).yd())
};
F.$e = function() {
	return this.Ds != m ? this.Ds : this.Ds = cu(this).$e()
};
F.ve = function() {
	return this.zd || (this.zd = cu(this).ve())
};
F.Cg = function() {
	return this.Es != m ? this.Es : this.Es = cu(this).Cg()
};
F.zx = C("kq");
F.GH = jm(87);
F.gz = jm(16);
F.Nn = jm(196);
F.lb = jm(66);
F.UH = jm(145);
F.$x = jm(122);
F.Qh = function() {
	return new Ot(this.yd(), this.$e(), this.ve(), this.Cg())
};
F.select = function() {
	cu(this).select(this.kq)
};
F.mz = jm(40);
F.cz = jm(79);
F.WU = jm(107);
F.qN = jm(202);
F.collapse = function(a) {
	a = this.zx() ? !a : a;
	this.TC && this.TC.collapse(a);
	a ? (this.zd = this.Ad, this.Es = this.Ds) : (this.Ad = this.zd, this.Ds = this.Es);
	this.kq = q
};

function du() {}
L(du, Nt);

function cXa(a) {
	var b = new du;
	b.Eb = a;
	return b
}
function dXa(a) {
	for (var b = Mo(arguments[0]).body.createControlRange(), c = 0, d = arguments.length; c < d; c++) b.addElement(arguments[c]);
	return cXa(b)
}
F = du.prototype;
F.Eb = m;
F.rO = m;
F.sO = m;
F.La = function() {
	return dXa.apply(this, eu(this))
};
F.xa = D(nua);
F.xr = jm(197);
F.Nx = jm(193);
F.yr = jm(191);
F.KN = function() {
	return CSa.apply(m, eu(this))
};
F.yd = function() {
	return eXa(this)[0]
};
F.$e = D(0);
F.ve = function() {
	var a = eXa(this),
		b = Sm(a);
	return fn(a, function(a) {
		return Zo(a, b)
	})
};
F.Cg = function() {
	return this.ve().childNodes.length
};

function eu(a) {
	if (!a.rO && (a.rO = [], a.Eb)) for (var b = 0; b < a.Eb.length; b++) a.rO.push(a.Eb.item(b));
	return a.rO
}
function eXa(a) {
	a.sO || (a.sO = eu(a).concat(), a.sO.sort(function(a, c) {
		return a.sourceIndex - c.sourceIndex
	}));
	return a.sO
}
F.gz = jm(15);
F.Nn = jm(195);
F.lb = jm(65);
F.UH = jm(144);
F.$x = jm(121);
F.Qh = function() {
	return new fu(this)
};
F.select = function() {
	this.Eb && this.Eb.select()
};
F.mz = jm(39);
F.nE = jm(74);
F.qN = jm(201);
F.collapse = function() {
	this.sO = this.rO = this.Eb = m
};

function fu(a) {
	a && (this.uC = eXa(a), this.Ad = this.uC.shift(), this.zd = Sm(this.uC) || this.Ad);
	Kt.call(this, this.Ad, q, l)
}
L(fu, Mt);
F = fu.prototype;
F.Ad = m;
F.zd = m;
F.uC = m;
F.XC = jm(84);
F.WC = jm(24);
F.yd = C("Ad");
F.ve = C("zd");
F.dN = function() {
	return !this.C && !this.uC.length
};
F.next = function() {
	this.dN() && f(Or);
	if (!this.C) {
		var a = this.uC.shift();
		this.xc(a, 1, 1);
		return a
	}
	return fu.M.next.call(this)
};
F.co = function(a) {
	this.uC = a.uC;
	this.Ad = a.Ad;
	this.zd = a.zd;
	fu.M.co.call(this, a)
};
F.La = function() {
	var a = new fu(m);
	a.co(this);
	return a
};

function gu(a) {
	return aXa($Wa(a), k)
}
function bXa(a, b, c, d) {
	if (a == c) return d < b;
	var e;
	if (1 == a.nodeType && b) if (e = a.childNodes[b]) a = e, b = 0;
	else if (Zo(a, c)) return l;
	if (1 == c.nodeType && d) if (e = c.childNodes[d]) c = e, d = 0;
	else if (Zo(c, a)) return q;
	return 0 < (zSa(a, c) || b - d)
};
Eo && Io("534.16");
Q && Io("7.0");
Do && Io(Eca);
Eo || Q && Io(mb);
Q || Co || Do && Io($a);
Do || Eo && Io("527");
Q || Eo && Io(Yca);
Eo && Io($ca);
Eo && Io(Zca);
Do && Io($a) || Q || Co || Eo && Io($ca);
Do || Eo && Io("526");
$q && cr(hb) || ar && Io("533") || Do && Io(Oca) || Q && Io(ab);
Co && Io("11.10");
$q && cr(cb);
var fXa = Zn("ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", Gb, "CAPTION", "CENTER", sfa, "COLGROUP", "DETAILS", "DIR", Rb, "DL", "DD", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", fc, Nja, Tma, Yka, "MAP", "MENU", "NAV", "OPTGROUP", "OPTION", Bc, fna, "SECTION", "SUMMARY", Qpa, Rpa, Spa, "TFOOT", Tpa, "THEAD", Upa, Jqa);
Zn(ic, hc, aia);

function hu(a) {
	return a.length || a.childNodes.length
};
Zn(Wk, bg, Cl);

function gXa(a, b) {
	for (var c = 1 == b, d = c ? a.yd() : a.ve(), e = c ? a.$e() : a.Cg(), g = TWa(a); d != g && d != k && !(c && 0 != e || !c && e != hu(d));) var h = d.parentNode,
		e = Um(h.childNodes, d),
		e = c ? e : e + 1,
		d = h;
	g = c ? d : a.yd();
	h = c ? e : a.$e();
	d = c ? a.ve() : d;
	c = c ? a.Cg() : e;
	return bu(g, h, d, c)
};

function hXa(a, b, c, d, e) {
	this.G = d = e || Ko();
	this.ra = a;
	this.K = c;
	a = {
		className: oAa,
		src: bh
	};
	Q && (a.frameborder = Xa, a.allowTransparency = hl);
	a = d.ha(hc, a);
	b && (a.name = oAa);
	Eo && (a.style[dca] = A);
	d.sb().body.appendChild(a);
	this.A = a;
	this.R = new S(this);
	this.C = new Et;
	Eo || iXa ? this.maa() : this.R.A(this.A, Ti, this.maa);
	this.F = q
}
L(hXa, bq);
var iXa = Do && Io(fb),
	jXa = Q && Io(cda) && !Io(bb),
	kXa = !Eo;
F = hXa.prototype;
F.Z1 = q;
F.bka = l;
F.uia = q;
F.via = q;
F.cG = q;
F.jB = m;
F.Bo = m;
F.If = m;
F.i1 = q;
F.wia = 0;
F.$h = C("cG");

function lXa(a, b) {
	if (!a.cG || a.F && !b && zo && $q) return q;
	a.If.innerHTML = b;
	a.K ? b && (a.Xd(), iu(a)) : mXa(a);
	return l
}
F.Bh = function() {
	var a = this.If;
	return Q ? a.innerText : a.textContent
};

function nXa(a) {
	a = a.If;
	Q ? a.innerText = r : a.textContent = r
}
F.setActive = im("Z1");
F.ua = function(a) {
	this.bka != a && (this.A.style.display = a ? r : lj, this.bka = a)
};
F.maa = function() {
	var a;
	if (a = !this.cG) {
		b: {
			this.jB = this.A.contentWindow;
			try {
				this.Bo = this.jB.document
			} catch (b) {
				kXa || f(b);
				3 < this.wia && f(Error("Attempt to initialize target iframe failed."));
				this.A.src = bh;
				this.wia++;
				a = q;
				break b
			}
			this.If = this.Bo.body;
			this.If.spellcheck = q;
			this.If.style.backgroundColor = gl;
			this.If.setAttribute(ek, VOa);
			xq(this.If, tg, l);
			a = l
		}
		a ? (Do ? this.Bo.designMode = tj : this.If.contentEditable = l, this.R.A(this.jB, eg, ju(this.ra, this.UKa, this), l).A(this.jB, Ad, ju(this.ra, this.TKa, this), l), a = l) : a = q
	}
	a && (this.cG = l, this.uia && this.r1(), this.via && this.Xd(), this.dispatchEvent(Tg))
};
F.UKa = function() {
	this.i1 = l;
	this.dispatchEvent(eg)
};
F.TKa = function() {
	this.i1 = q;
	this.dispatchEvent(Ad)
};

function iu(a) {
	a.Z1 && (Q || a.C.Gr(a.r1, 0, a), a.r1())
}
F.r1 = function() {
	if (this.cG) {
		if (this.Z1) {
			Do && window.focus();
			this.jB.focus();
			if (Eo) {
				this.A.focus();
				this.If.focus();
				var a = document.createRange();
				a.selectNodeContents(this.If);
				0 == a.toString().length && window.getSelection().addRange(a)
			}
			if (a = SWa(window)) if (a.empty) try {
				a.empty()
			} catch (b) {} else try {
				a.removeAllRanges()
			} catch (c) {}
		}
	} else this.uia = l
};

function mXa(a) {
	a = a.If;
	if (jXa) a.document.execCommand(ZMa);
	else if (a = gu(a), Eo) {
		var b = gXa(a, 1),
			b = gXa(b, 0),
			c = b.yd();
		a = b.ve();
		var d = b.$e(),
			b = b.Cg();
		if (c == a) {
			for (; a != k && 0 == d && b == hu(a);) c = a.parentNode, d = Um(c.childNodes, a), b = d + 1, a = c;
			c = a
		}
		bu(c, d, a, b).select()
	} else a.select()
}
F.Xd = function() {
	this.cG ? (this.jB.focus(), this.If.focus(), mXa(this)) : this.via = l
};
F.clear = function() {
	var a = lXa(this, r);
	a && Eo && gu(this.If).select();
	return a
};
F.O = function() {
	hXa.M.O.call(this);
	O(this.R);
	delete this.R;
	O(this.C);
	delete this.C;
	this.G.removeNode(this.A);
	delete this.A;
	delete this.If;
	delete this.Bo;
	delete this.jB;
	delete this.G
};

function ku(a, b) {
	this.A = a;
	this.C = b || Ko()
}
var oXa = [nd, $k, od, Xk];
xn(oXa);
var lu = "internal-source-marker_" + Math.random(),
	pXa = RegExp("<[^>]*[\\s\"'][Ii][Dd]=[\"']" + lu + "[\"'][^>]*>");
ku.prototype.F = m;
var qXa = Zn(oXa);
ku.prototype.Ix = jm(142);
ku.prototype.zN = jm(116);
ku.prototype.AN = jm(43);
ku.prototype.ML = jm(49);

function rXa(a) {
	this.A = a
}
rXa.prototype.setData = function(a) {
	lXa(this.A, a)
};
rXa.prototype.getData = function(a) {
	var b = m;
	switch (a) {
		case od:
			b = this.A.If;
			break;
		case $k:
		case Xk:
			b = this.A.If.innerHTML
	}
	return ks(b)
};

function mu(a, b, c) {
	this.ra = b;
	this.G = {};
	this.K = {};
	this.R = new S(this);
	this.C = new Et;
	this.L = c;
	this.F = new ku(new rXa(a));
	this.A = a;
	this.A.$h() ? this.X$() : Ap(this.R, this.A, Tg, this.X$)
}
L(mu, bq);
F = mu.prototype;
F.V2 = q;
F.r3 = q;
F.Iu = m;
F.uA = m;
F.fx = m;
F.X$ = function() {
	if (!this.V2) {
		var a = this.A.If;
		this.R.A(a, Aj, ju(this.ra, this.YKa, this)).A(a, Yd, ju(this.ra, this.WKa, this)).A(a, ce, ju(this.ra, this.XKa, this));
		this.V2 = l
	}
};

function sXa(a, b, c, d) {
	c ? (a.A.Xd(), Q ? a.C.Gr(K(a.aga, a, b, d)) : a.aga(b, d)) : a.dispatchEvent(nKa)
}
F.aga = function(a, b) {
	if (this.V2) {
		var c = b && a == Ob;
		c && (this.r3 = l);
		tXa(this, a);
		this.K[a] = l;
		var d = this.A.If.ownerDocument;
		d ? d.execCommand(a) : f(Error("TextEventTarget contenteElement missing owner document."));
		this.K[a] = q;
		switch (a) {
			case Ob:
				this.dispatchEvent(new uXa);
				break;
			case Pb:
				this.dispatchEvent(ce);
				break;
			case Dc:
				this.dispatchEvent(Aj)
		}
		c && (this.r3 = q)
	}
};
F.WKa = function(a) {
	vXa(this, Ob, new uXa(0, a))
};
F.XKa = function(a) {
	vXa(this, Pb, new Jt(ce, a))
};
F.YKa = function(a) {
	vXa(this, Dc, new Jt(Aj, a));
	a.stopPropagation()
};
F.wOa = function(a) {
	if (a && a.clipboardData) {
		this.Iu = a.clipboardData.getData(Xk);
		if (!this.Iu) {
			this.Iu = a.clipboardData.getData(Zk);
			if (!this.Iu) return;
			this.Iu = Mda + Km(this.Iu) + rb
		}
		this.A.Xd();
		a = ju(this.ra, this.xFa, this);
		this.C.Gr(a, 0)
	}
};
F.xFa = function() {
	3 == this.L.kb() && this.Iu && (this.A.If.innerHTML = this.Iu, vXa(this, Dc, new Jt(Aj), l));
	this.Iu = m
};

function tXa(a, b) {
	switch (b) {
		case Ob:
			a.dispatchEvent(new wXa(a.r3));
			break;
		case Pb:
			a.dispatchEvent(cta);
			break;
		case Dc:
			a.A.clear(), a.dispatchEvent(eta)
	}
}

function vXa(a, b, c, d) {
	d || tXa(a, b);
	a.K[b] || RWa(c, a.A.If, K(a.GKa, a))
}
F.GKa = function(a) {
	var b = a.type;
	this.G[b] || (this.G[b] = l, this.C.Gr(K(this.xOa, this, a), 0))
};
F.xOa = function(a) {
	this.dispatchEvent(a);
	delete this.G[a.type]
};
F.Ix = jm(141);
F.zN = jm(115);
F.AN = jm(42);
F.ML = jm(48);
F.O = function() {
	mu.M.O.call(this);
	delete this.A;
	O(this.R);
	delete this.R;
	O(this.C);
	delete this.C;
	delete this.G;
	this.uA && this.fx && this.fx.removeEventListener(Aj, this.uA, q);
	delete this.fx;
	delete this.uA
};

function wXa(a) {
	R.call(this, bta);
	this.A = a
}
L(wXa, R);

function uXa(a, b) {
	Jt.call(this, Yd, b)
}
L(uXa, Jt);
var nu = 0;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;
nu++;

function ou(a, b, c) {
	this.A = a;
	this.R = new S(this);
	b || (a = c ? c : Eo ? window : document.body, Do && a.tagName.toLowerCase() == lta && (a = a.ownerDocument), a[xXa] = K(this.gMa, this), a[yXa] = K(this.fMa, this))
}
L(ou, bq);
var xXa = Q && !Io(bb) ? "onfocusin" : "onfocus",
	yXa = Q && !Io(ab) ? "onfocusout" : "onblur";
F = ou.prototype;
F.j4 = l;
F.Fa = m;
F.E7 = q;
F.LA = m;

function zXa(a, b) {
	if (a.LA == b || a.LA === m) a.LA = m, I(3) && a.qe(3)
}
F.qe = function(a, b) {
	AXa(this, a, b)
};

function AXa(a, b, c, d) {
	a.LA || (c && (a.LA = c), a.Fa != b && (a.Fa = b, d && !Zq ? a.E7 || (eq(a.ISa, 200, a), a.E7 = l) : a.dispatchEvent(new BXa(a, b))))
}
F.kb = C(ac);
F.ISa = function() {
	this.E7 = q;
	this.Fa === m && f(Error("The state should not be null."));
	this.dispatchEvent(new BXa(this, this.Fa))
};
F.gMa = function() {
	this.j4 = l;
	AXa(this, this.A, k, l)
};
F.fMa = function() {
	this.j4 = q;
	AXa(this, 1, k, l)
};
F.O = function() {
	O(this.R);
	delete this.R;
	ou.M.O.call(this)
};

function BXa(a, b) {
	R.call(this, Ik, a);
	this.state = b
}
L(BXa, R);

function pu() {
	this.R = new S(this)
}
L(pu, bq);
F = pu.prototype;
F.St = q;
F.DN = m;
F.uD = m;
F.setActive = function(a) {
	this.St != a && (a ? (this.Kp(), this.DN && this.Vu(this.DN)) : Bp(this.R), this.Ona(a), this.St = a)
};
F.JR = function(a) {
	this.DN = a;
	this.St && this.Vu(this.DN)
};
F.Ona = hm();
F.Vu = G;
F.O = function() {
	O(this.R);
	delete this.R;
	O(this.uD);
	delete this.uD;
	delete this.DN;
	pu.M.O.call(this)
};
var CXa = io(jo(), "docs-csi-reporting-uri-override") || document.location.protocol + "//csi.gstatic.com/csi",
	DXa = Zn($Da, AEa, BEa, CEa, fPa, JPa);
var EXa = {
	L6a: zk,
	TZa: Nf,
	K6a: "sjl",
	SZa: "ejl",
	I6a: "sac",
	QZa: "eac",
	G6a: "scf",
	OZa: "ecf",
	J6a: NMa,
	RZa: aCa,
	H6a: nNa,
	PZa: iCa,
	hha: psa,
	iha: Sta,
	kha: pua,
	jha: cua,
	lha: NCa,
	mha: WCa,
	nha: OCa,
	oha: osa,
	pha: Jl,
	y4a: PJa,
	z4a: SJa,
	A4a: "mp",
	B4a: XJa,
	C4a: YJa
};

function FXa(a, b, c) {
	this.A = a;
	this.C = b;
	this.F = c
};

function GXa() {}
F = GXa.prototype;
F.init = G;
F.clear = G;
F.RT = G;
F.CA = G;
F.log = hm();

function qu(a) {
	this.K = a || ym;
	this.C = {};
	this.F = new GXa;
	this.saveInitialLoadStats = this.L;
	this.maybeReportMemoryStats = this.G;
	this.getInitialLoadStats = this.W
}
mm(qu);
var ru = {
	qIa: Xa,
	iha: Za,
	kIa: fb,
	hIa: gb,
	lIa: hb,
	kha: ib,
	jha: jb,
	mIa: kb,
	gIa: lb,
	pIa: mb,
	oha: ab,
	lha: Mca,
	jIa: cb,
	pha: db,
	iIa: Nca,
	nIa: "16",
	hha: "17",
	oIa: "18",
	nha: "19",
	mha: "20"
};
qu.prototype.L = function(a) {
	var b = a.el - a.sl,
		c = a.ejl - a.sjl,
		d = a.eac - a.sac,
		e = a.ecf - a.scf,
		g = su(a, NMa, aCa),
		h = su(a, nNa, iCa),
		n = su(a, zk, psa),
		p = a.al - a.sl,
		t = a.chv - a.sl,
		u = a.cov - a.sl,
		x = su(a, zk, cua),
		y = su(a, zk, NCa),
		B = su(a, zk, WCa),
		E = su(a, zk, OCa),
		H = su(a, zk, Jl),
		J = a.ml,
		$ = a.md,
		V = a.mpe,
		ca = a.mp,
		ia = a.mr;
	this.A = {};
	this.A[ru.qIa] = b;
	this.A[ru.kIa] = c;
	this.A[ru.hIa] = d;
	this.A[ru.gIa] = e;
	this.A[ru.oha] = p;
	this.A[ru.iha] = t;
	this.A[ru.kha] = u;
	this.A[ru.lIa] = J;
	n != m && (this.A[ru.hha] = n);
	g != m && (this.A[ru.pIa] = g);
	x != m && (this.A[ru.jha] = x);
	E != m && (this.A[ru.nha] = E);
	$ != m && (this.A[ru.iIa] = $);
	V != m && (this.A[ru.nIa] = V);
	ca != m && (this.A[ru.mIa] = ca);
	ia != m && (this.A[ru.oIa] = ia);
	h != m && (this.A[ru.jIa] = h);
	y != m && (this.A[ru.lha] = y);
	B != m && (this.A[ru.mha] = B);
	H != m && (this.A[ru.pha] = H);
	b = [
		[ZOa, b],
		[pJa, c],
		[cFa, d],
		[Lta, e],
		[osa, p],
		[Sta, t],
		[pua, u],
		[qJa, J]
	];
	n != m && b.push([psa, n]);
	g != m && b.push([DNa, g]);
	x != m && b.push([cua, x]);
	E != m && b.push([OCa, E]);
	$ != m && b.push([se, $]);
	V != m && b.push([fLa, V]);
	ca != m && b.push([oLa, ca]);
	ia != m && b.push([HMa, ia]);
	y != m && b.push([NCa, y]);
	B != m && b.push([WCa, B]);
	h != m && b.push([VCa, h]);
	H != m && b.push([Jl, H]);
	this.F.RT(a.sl, b)
};

function su(a, b, c) {
	c = a[c];
	a = a[b];
	return sm(c) && sm(a) ? c - a : m
}
qu.prototype.W = function() {
	return En(this.A)
};

function tu(a, b) {
	var c = EDa + jRa++;
	a.C[c] = {
		startTime: a.K(),
		UNa: b
	};
	return c
}
function HXa(a, b) {
	for (var c = [], d = 0; d < b.length; d++) c.push(tu(a, b[d]));
	return c
}
function uu(a, b) {
	var c = a.C[b];
	c && (a.F.log(c.UNa, a.K() - c.startTime), delete a.C[b])
}
function IXa(a, b) {
	for (var c = 0; c < b.length; c++) uu(a, b[c])
}
qu.prototype.G = function() {
	var a;
	a: {
		if (km.performance && km.performance.memory && (a = km.performance.memory, 0 != a.totalJSHeapSize)) {
			a = new FXa(Math.round(a.jsHeapSizeLimit / 1048576), Math.round(a.totalJSHeapSize / 1048576), Math.round(a.usedJSHeapSize / 1048576));
			break a
		}
		a = m
	}
	a != m && (this.F.log($Da, a.A), this.F.log(fPa, a.C), this.F.log(JPa, a.F), eq(this.G, 18E5, this))
};

function vu() {
	var a = {};
	try {
		a = Cn(io(jo(), yPa))
	} catch (b) {}
	this.A = a;
	var a = this.A.langs || [],
		c = this.A.override;
	this.F = c ? qn([c], a) : a;
	this.C = this.A.itcs || [];
	this.G = this.A.selected || r
}
mm(vu);

function JXa(a) {
	return rn(a.C)
};

function KXa(a) {
	var b = [wsa, pd, ata, hta, kta, Nf, $f, HDa, ng, sg, Zg, ah, WIa, SJa, YJa, dKa, QKa, xj, ik, kk, xNa, Ck, Rk, Uk, WOa, wPa, HPa, TPa, pQa, qQa];
	a = a.replace(/-/g, ed);
	var c = hn(b, a);
	if (!c) {
		var d = a.indexOf(ed);
		0 < d && (c = hn(b, a.slice(0, d)))
	}
	return c
}
function LXa(a) {
	var b = vu.ya();
	a = 0 == JXa(b).length ? qn(rn(b.F), a) : a;
	for (var b = [], c = 0; c < a.length; c++) {
		var d = a[c];
		KXa(d) ? b.push(d) : (d = d.split(/-|_/g)[0], KXa(d) && b.push(d))
	}
	return b
};

function wu(a, b, c) {
	this.A = a;
	this.C = b;
	this.G = c;
	this.R = new S(this)
}
L(wu, bq);
wu.prototype.vb = function() {
	this.R.A(this.A, Jf, this.F);
	MXa(this)
};
wu.prototype.F = function(a) {
	NXa(a.wd) && MXa(this)
};

function MXa(a) {
	var b = xu(a.C, a.A.ba());
	(0 < JXa(vu.ya()).length || 0 < LXa([b, a.G]).length || No(pja)) && a.dispatchEvent(eva)
}
wu.prototype.O = function() {
	O(this.R);
	wu.M.O.call(this)
};

function yu(a, b, c) {
	this.Eb = a;
	this.K = b;
	this.G = !! c
}
L(yu, M);
yu.prototype.He = C("Eb");
yu.prototype.rb = C(mc);
yu.prototype.F = gm();

function vUa(a, b) {
	return a.C(b)
}
yu.prototype.C = function(a) {
	var b = this.Eb.start - a.He().start;
	return 0 != b ? b : this.Eb.end - a.He().end
};

function zu(a, b, c, d) {
	this.left = a;
	this.top = b;
	this.width = c;
	this.height = d
}
zu.prototype.getHeight = C(rg);
zu.prototype.ob = function(a) {
	return !a ? q : this.left == a.left && this.width == a.width && this.top == a.top && this.height == a.height
};

function OXa(a, b) {
	return a.ob(b)
}
function PXa(a, b, c, d) {
	zu.call(this, a, b, c, d)
}
L(PXa, zu);

function Au(a, b) {
	R.call(this, a, b)
}
L(Au, R);

function QXa(a, b, c, d) {
	R.call(this, HEa, a);
	this.C = b;
	this.F = c;
	this.G = d
}
L(QXa, Au);
QXa.prototype.A = C($b);

function RXa(a, b, c, d) {
	pu.call(this);
	this.ea = a;
	this.A = b;
	this.Y = c;
	this.W = d;
	this.K = m;
	this.L = 0;
	this.G = this.C = q;
	this.F = m
}
L(RXa, pu);
var SXa = zo || xo;

function TXa(a) {
	switch (a.keyCode) {
		case 16:
		case 17:
			return q;
		default:
			return l
	}
}
F = RXa.prototype;
F.Haa = function() {
	this.C && !this.A.Bh().length && (UXa(this), this.R.Pb(this.A.Bo, ih, this.Haa))
};
F.KLa = function() {
	this.dispatchEvent(GEa);
	VXa(this)
};

function VXa(a) {
	var b = Is(a.F.A.getSelection());
	b ? (b = b.A, a.K = a.A.Bh(), Bu(a.F, Ls(new ws(b)), l, l)) : a.K = m;
	ar && a.R.A(a.A.Bo, ih, a.Haa);
	a.G = l;
	a.C = l;
	WXa(a.Y, l, a.A);
	eq(a.jE, 0, a)
}
F.MLa = function() {
	UXa(this)
};

function UXa(a) {
	a.C = q;
	Eo && (SXa && (a.L = 229), nXa(a.A));
	a.jE();
	if (!Eo) {
		var b = a.A.Bh();
		Bu(a.F, Ls(new ws(Cu(a) + b.length)), l, l)
	}
	Du(a.W, Ve, [new xs(0, Number.MAX_VALUE)]);
	a.Vaa()
}
F.LLa = function() {
	eq(this.jE, 0, this)
};
F.OLa = function() {
	this.jE()
};
F.jE = function() {
	if (this.G) {
		var a = this.A.Bh();
		0 <= a.length && (this.C && Du(this.W, Ve, [new xs(0, Number.MAX_VALUE)]), this.dispatchEvent(new QXa(this, a, Cu(this), this.K)));
		this.K = a
	}
};
F.vl = C(Jb);
F.Mn = function(a) {
	var b;
	var c = this.A.Bh(),
		d = Cu(this);
	b = d;
	var e = b + c.length - 1;
	b > a.end || e < a.start || 0 == c.length ? b = [] : (b = Math.max(d, a.start), e = Math.min(d + c.length - 1, a.end), a = Eu(this.ea, Ve), b = [new yu(new xs(b, e), a)]);
	return b || []
};
F.NLa = function(a) {
	if (Eo && 229 == this.L) {
		this.C && UXa(this);
		if (a.Mc) {
			var b = Cu(this),
				c = a.Mc.data.replace(Tl, s);
			this.dispatchEvent(new QXa(this, c, b, m));
			Bu(this.F, Ls(new ws(b + c.length)), l, l)
		}
		a.preventDefault()
	}
};

function XXa(a, b) {
	if (a.C) {
		var c;
		c = b && 0 == b.xa() ? b.A() : Cu(a) + a.A.Bh().length;
		a.C = q;
		Du(a.W, Ve, [new xs(0, Number.MAX_VALUE)]);
		a.jE();
		Bu(a.F, Ls(new ws(c)), l, l);
		eq(a.Vaa, 0, a);
		a.G = q
	}
}
F.Vaa = function() {
	nXa(this.A);
	WXa(this.Y, q, this.A);
	iu(this.A);
	this.G = q
};

function Cu(a) {
	a = a.F.A;
	var b = Is(a.getSelection());
	return b ? b.A : qt(a)
}
F.Kp = function() {
	if (this.A.$h()) {
		var a = this.A.Bo;
		this.R.A(a, hua, this.KLa).A(a, gua, this.MLa).A(a, iua, this.LLa).A(a, Wk, this.OLa).A(a, UOa, this.NLa)
	}
};

function YXa(a, b) {
	R.call(this, a, b)
}
L(YXa, R);
var ZXa = RegExp("[\\u0028\\u005B\\u00AB\\u2018\\u201C\\u3008\\u300A\\u300C\\u300E\\u3010\\u3014\\u3016\\u3018\\u301D\\uFF08\\uFF3B\\uFF5F\\uFF5B]"),
	$Xa = RegExp("[\\u002C\\u0029\\u005D\\u00BB\\u2019\\u201D\\u3001\\u3009\\u300B\\u300D\\u300F\\u3011\\u3015\\u3017\\u3019\\u301F\\u3005\\u303B\\u30FC\\u30FD\\u30FE\\u30A1\\u30A3\\u30A5\\u30A7\\u30A9\\u30C3\\u30E3\\u30E5\\u30E7\\u30EE\\u30F5\\u30F6\\u3041\\u3043\\u3045\\u3047\\u3049\\u3063\\u3083\\u3085\\u3087\\u308E\\u3095\\u3096\\u31F0\\u31F1\\u31F2\\u31F3\\u31F4\\u31F5\\u31F6\\u31F7\\u31F8\\u31F9\\u31FA\\u31FB\\u31FC\\u31FD\\u31FE\\u31FF\\u2010\\u2013\\u301C\\u30A0\\u0021\\u002E\\u003A\\u003B\\u003F\\u203C\\u2047\\u2048\\u2049\\u3001\\u3002\\u30FB\\uFF01\\uFF1F\\uFF09\\uFF3D\\uFF5D\\uFF60]"),
	aYa = RegExp("[\\u2F00-\\u30FF\\u3190-\\u319F\\u31C0-\\u3AEF\\u4E00-\\u9FCF\\uF900-\\uFAFF\\uFE10-\\uFE1F\\uFE30-\\uFE4F\\uFF00-\\uFFEF]"),
	bYa = RegExp("[\\u3000-\\u30FF\\u3200-\\u9FFF\\uF900-\\uFAFF\\uFF00-\\uFFEF]");

function Fu(a, b) {
	for (var c = a; c < b.ub() && !(c != a && cYa(c, b)); c++) if (Gu(c, b, l) && Hu(c + 1, b) != jk) return c + 1;
	return c
}
function Iu(a, b) {
	for (var c = a - 1; 0 <= c; c--) if (cYa(c, b) || dYa(c, b)) return c;
	return 0
}
function eYa(a, b) {
	var c = Ts(b, a);
	return c == ba || c == s
}
function fYa(a, b) {
	for ($s(Ts(b, a)) && a--; Xs(b, a) && eYa(a, b);) a--;
	return a
}
function gYa(a, b) {
	a = fYa(a, b);
	return Xs(b, a) && !$s(Ts(b, a))
}
function Hu(a, b) {
	var c = Ts(b, a);
	return $s(c) ? jk : YVa[c] ? wj : XVa[c] ? Xj : !Ps[c] ? Hl : gj
}

function Gu(a, b, c) {
	var d = c ? a + 1 : a - 1;
	return 0 > d || d >= b.ub() || cYa(a, b) || Hu(a, b) != Hu(d, b) || bYa.test(Ts(b, c ? a + 1 : a))
}
function Ju(a, b) {
	for (var c = a, d = b.ub(), e = a; e < d; e++) if (e == d - 1 || Gu(e, b, l) && !$s(Ts(b, e))) {
		c = e + 1;
		break
	}
	return c
}
function dYa(a, b) {
	return cYa(a, b) ? l : Gu(a, b, q) && Hu(a, b) != jk
}
function cYa(a, b) {
	return Ys(b, a) || Ts(b, a) == ba || !Xs(b, a)
}

function hYa(a, b, c) {
	var d = b.start,
		e = b.end;
	if (dYa(d, a) && Ju(e, a) == e + 1 && Hu(d, a) != jk && Hu(d, a) != gj && Hu(e, a) != jk && Hu(e, a) != gj && (Hu(d - 1, a) == jk || Hu(d - 1, a) == gj)) {
		if (Ts(a, e + 1) == s) return new xs(d, e + 1);
		if (!Ys(a, e + 1) && Ts(a, d - 1) == s && !c) return new xs(d - 1, e)
	}
	return b.La()
}
function iYa(a, b, c) {
	var d = b.A();
	a: {
		for (b = d; 0 <= b; b--) if (Gu(b, a, q)) break a;
		b = d
	}
	for (var e = d, g = a.ub(); d < g; d++) if (d == g - 1 || Gu(d, a, l)) {
		e = d + 1;
		break
	}
	d = e;
	yo && !c && (a = hYa(a, new xs(b, d - 1), l), b = a.start, d = a.end + 1);
	return new xs(b, d)
};

function Ku(a, b) {
	this.G = a;
	this.A = b
}
Ku.prototype.xa = C(cc);

function jYa(a, b, c) {
	Ku.call(this, UJa, a);
	this.C = b;
	this.Eb = c;
	(0 != a.xa() || 0 != b.xa()) && f(Error("Mouse selection ranges should be inline."));
	!this.Eb && a.A() != b.A() && f(Error("Range provided when the anchor and cursor overlap."));
	a = a.A();
	b = b.A();
	c && (!Cs(c, a) && a != c.end + 1) && f(Error("Cursor index outside of mouse selection range."));
	c && (!Cs(c, b) && b != c.end + 1) && f(Error("Anchor index outside of mouse selection range."))
}
L(jYa, Ku);
jYa.prototype.He = C("Eb");

function Lu(a, b) {
	this.C = a;
	this.F = b
}
L(Lu, M);
Lu.prototype.A = m;

function Mu(a, b, c) {
	a.A && (c ? (c = a.A.A.getSelection(), kYa(a, a.A, b, c.F ? c.F.F : c.Lb, l)) : Bu(a.A, Ls(b), l, l))
}
function lYa(a, b, c) {
	if (a.A) {
		var d = a.A.ba();
		d.jc() || (c = Nu(d, c), c < b.end ? (d = Iu(c, d.qa()), 1 > d && (d = 1)) : d = Fu(c, d.qa()), mYa(a, d, nYa(a).A(), b))
	}
}
function oYa(a, b, c) {
	if (a.A) {
		var d = a.A.ba();
		if (!d.jc()) {
			var e = Nu(d, c);
			c = nYa(a).A();
			d = d.qa();
			if (e < b.end) e = Rs(d, e);
			else {
				var g = Vs(d, b.end);
				e > g && (e = g);
				e = Us(d, e) + 1
			}
			mYa(a, e, c, b)
		}
	}
}

function mYa(a, b, c, d) {
	var e = Math.min(b, c, d.start),
		e = Math.max(e, 1);
	d = Math.max(b, c, d.end);
	kYa(a, a.A, new ws(b), new ws(c), l, new xs(e, d))
}
function kYa(a, b, c, d, e, g) {
	g = g ? g : new xs(c.A(), d.A());
	a = pYa(a.F, b, new jYa(c, d, g.start != g.end ? new xs(g.start, g.end - 1) : m));
	Bu(b, a, l, e)
}
function nYa(a) {
	a = a.A.A.getSelection();
	var b = a.F;
	if (b) return b.F;
	a = a.Lb;
	if (0 == a.xa()) return a;
	f(Error("No existing anchor or cursor index for selection."))
}
Lu.prototype.O = function() {
	Lu.M.O.call(this);
	delete this.C;
	delete this.F
};

function qYa(a) {
	this.Fa = a
}
L(qYa, bq);
qYa.prototype.kb = C(ac);

function rYa(a, b, c) {
	R.call(this, Hj, a);
	this.C = b;
	this.A = c
}
L(rYa, R);

function Ou(a, b) {
	this.C = a;
	this.A = b
}
function sYa(a) {
	for (var b = [], c = 0; c < a.length; c++) b.push(new Ou($d, a[c]));
	return b
};

function tYa(a, b, c) {
	this.F = a;
	this.A = b;
	this.C = c || m
};

function uYa(a, b, c) {
	this.F = a;
	this.A = b;
	this.C = c
};

function vYa(a, b, c) {
	this.A = a;
	this.C = b;
	this.F = c || m
};

function wYa(a) {
	this.A = a
};

function xYa(a, b) {
	this.C = !! a;
	this.A = !! b
};

function yYa(a, b, c) {
	this.C = a;
	this.F = b;
	this.G = c || m
}
yYa.prototype.A = C($b);

function zYa(a) {
	this.A = a
};

function Pu() {}
mm(Pu);
var AYa = 72 / 2.54,
	Qu = 72 / 25.4;
Pu.prototype.A = m;

function Ru(a, b, c) {
	a = b * Su(a);
	return c ? a : Math.round(a)
}
function Su(a) {
	if (a.A) return a.A;
	var b = Ro(Ak, {
		style: tLa
	});
	document.body.appendChild(b);
	a.A = b.offsetHeight / 72;
	Wo(b);
	return a.A
};

function BYa(a) {
	this.sd = {};
	this.g8 = {};
	if (a) for (var b in a) {
		var c = b,
			d = a[b];
		this.sd[c] = d;
		this.g8[d] = c
	}
}
BYa.prototype.HW = m;
BYa.prototype.get = function(a) {
	return this.sd[a]
};
BYa.prototype.dd = function() {
	return Pn(this.sd)
};

function bWa(a) {
	if (!a.HW) {
		var b = new a.constructor;
		b.sd = a.g8;
		b.g8 = a.sd;
		b.HW = a;
		a.HW = b
	}
	return a.HW
};

function Tu(a, b) {
	this.L = a;
	this.G = [];
	this.F = [];
	for (var c in b) this.G.push(c), this.F.push(b[c]);
	this.K = this.G.concat(this.L);
	this.C = this.K.concat(this.F);
	this.W = b;
	this.A = new BYa(b)
}
var CYa = new Tu([], {});

function Uu(a, b) {
	var c = On(a);
	if (b) {
		var d = {};
		sn(c, b.L);
		Xn(d, b.W);
		c = new Tu(c, d)
	} else c = new Tu(c, {});
	return c
};

function DYa(a) {
	this.A = EYa;
	this.update(a)
}
L(DYa, bt);
var EYa = Uu({
	oYa: sOa,
	f5a: tOa
});
F = DYa.prototype;
F.Mg = 0;
F.Gx = 0;
F.La = function() {
	var a = new DYa({});
	this.ke(a);
	return a
};
F.qk = C("Mg");

function Vu(a) {
	return Ru(Pu.ya(), a.Gx)
}
function FYa(a) {
	var b = Pu.ya();
	a = a / Su(b);
	return Ru(b, 36 * (Math.floor(a / 36) + 1))
}
F.Oc = function(a, b) {
	switch (a) {
		case sOa:
			this.Mg = b;
			break;
		case tOa:
			this.Gx = b
	}
};
F.Ga = function(a) {
	switch (a) {
		case sOa:
			return this.Mg;
		case tOa:
			return this.Gx
	}
};
F.Pa = function() {
	var a = {};
	a.tbs_al = this.Mg;
	a.tbs_of = this.Gx;
	return a
};

function GYa(a) {
	return new DYa(a)
};

function Wu(a, b) {
	this.A = b;
	this.F = a
}
L(Wu, bt);
var HYa = Uu({
	Om: aua
});
F = Wu.prototype;
F.xa = C($b);
F.Oc = hm();
F.Ga = function(a) {
	switch (a) {
		case aua:
			return this.F
	}
	return Wu.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = {};
	a.clr_type = this.F;
	return a
};
F.tU = D(aua);

function Xu(a) {
	Wu.call(this, 0, IYa);
	a && this.update(a)
}
L(Xu, Wu);
var IYa = Uu({
	WVa: SDa
}, HYa);
F = Xu.prototype;
F.Dr = m;
F.La = function() {
	var a = new Xu;
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.Dr = this.Dr
};
F.ao = function() {
	var a = Xu.M.ao.call(this);
	this.Dr && a.push(this.Dr);
	return a
};
F.ho = function(a) {
	var b = Xu.M.ho.call(this, a);
	a.hclr_color && b.push(a.hclr_color);
	return b
};
F.Oc = function(a, b) {
	switch (a) {
		case SDa:
			this.Dr = b;
			break;
		default:
			Xu.M.Oc.call(this, a, b)
	}
};
F.Ga = function(a) {
	switch (a) {
		case SDa:
			return this.Dr
	}
	return Xu.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = Xu.M.Pa.call(this);
	a.hclr_color = this.Dr;
	return a
};

function Yu(a) {
	Wu.call(this, 1, JYa);
	a && this.update(a)
}
L(Yu, Wu);
var JYa = Uu({
	S0a: UMa
}, HYa);
F = Yu.prototype;
F.TN = 0;
F.La = function() {
	var a = new Yu;
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.TN = this.TN
};
F.Oc = function(a, b) {
	switch (a) {
		case UMa:
			this.TN = b;
			break;
		default:
			Yu.M.Oc.call(this, a, b)
	}
};
F.Ga = function(a) {
	switch (a) {
		case UMa:
			return this.TN
	}
	return Yu.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = Yu.M.Pa.call(this);
	a.sclr_index = this.TN;
	return a
};

function KYa(a) {
	switch (a.clr_type) {
		case 0:
			return new Xu(a);
		case 1:
			return new Yu(a)
	}
	return m
};

function Zu(a) {
	et.call(this, Wk, LYa);
	this.De = new Xu;
	this.nh = new Xu(MYa);
	a && this.update(a)
}
L(Zu, et);

function $u(a) {
	return qPa + a + $ra
}
var av = $u("bgc2"),
	bv = $u("bd"),
	cv = $u(ag),
	dv = $u("fs"),
	ev = $u("fgc2"),
	fv = $u(Yg),
	gv = $u("bgc"),
	hv = $u("fgc"),
	iv = $u(mk),
	jv = $u(Dk),
	kv = $u("un"),
	lv = $u(PPa),
	mv = {
		ts_bd: bv,
		ts_it: fv,
		ts_sc: iv,
		ts_st: jv,
		ts_un: kv,
		ts_ff: cv,
		ts_fs: dv,
		ts_va: lv
	};
go(jo(), Oe) ? (mv.ts_bgc2 = av, mv.ts_fgc2 = ev) : (mv.ts_bgc = gv, mv.ts_fgc = hv);
var LYa = new Tu([], mv),
	MYa = {
		hclr_color: wa
	};
F = Zu.prototype;
F.Mr = q;
F.zv = q;
F.ys = q;
F.zs = q;
F.$i = Zea;
F.hq = q;
F.Kg = 11;
F.Av = q;
F.Fp = q;
F.Bv = q;
F.Yu = q;
F.Cv = q;
F.Zu = q;
F.Dv = q;
F.$u = q;
F.Ev = q;
F.Cf = mj;
F.Fv = q;
F.ye = m;

function nv(a) {
	return Math.max(3, Ru(Pu.ya(), a.Kg))
}
F.ld = C(za);

function ov(a) {
	0 != a.xa() && f(Error("Color is not a hex color."));
	return a.Dr
}
F.Um = C("De");
F.Cm = function(a) {
	a.ys && (a.De = this.De.La(), a.ys = q);
	a.zv && (a.Mr = this.Mr, a.zv = q);
	a.hq && (a.$i = this.$i, a.hq = q);
	a.Av && (a.Kg = this.Kg, a.Av = q);
	a.zs && (a.nh = this.nh.La(), a.zs = q);
	a.Bv && (a.Fp = this.Fp, a.Bv = q);
	a.Cv && (a.Yu = this.Yu, a.Cv = q);
	a.Dv && (a.Zu = this.Zu, a.Dv = q);
	a.Ev && (a.$u = this.$u, a.Ev = q);
	a.Fv && (a.Cf = this.Cf, a.Fv = q);
	a.Qr = 0
};
F.Oc = function(a, b) {
	Zu.M.Oc.call(this, a, b);
	NYa(a);
	switch (a) {
		case kl:
			var c = b,
				d = c.clr_type;
			this.De.xa() == d ? this.De.wg(c) || (this.De.update(c), this.ye = m) : (this.De = KYa(c), this.ye = m);
			break;
		case av:
		case gv:
			this.ys != b && (this.ys = b, this.ye = m);
			break;
		case il:
			this.Mr != b && (this.Mr = b, this.ye = m);
			break;
		case bv:
			this.zv != b && (this.zv = b, this.ye = m);
			break;
		case ll:
			this.$i != b && (this.$i = b, this.ye = m);
			break;
		case cv:
			this.hq != b && (this.hq = b, this.ye = m);
			break;
		case ol:
			this.Kg != b && (this.Kg = b, this.ye = m);
			break;
		case dv:
			this.Av != b && (this.Av = b, this.ye = m);
			break;
		case nl:
			c = b;
			d = c.clr_type;
			this.nh.xa() == d ? this.nh.wg(c) || (this.nh.update(c), this.ye = m) : (this.nh = KYa(c), this.ye = m);
			break;
		case ev:
		case hv:
			this.zs != b && (this.zs = b, this.ye = m);
			break;
		case pl:
			this.Fp != b && (this.Fp = b, this.ye = m);
			break;
		case fv:
			this.Bv != b && (this.Bv = b, this.ye = m);
			break;
		case jl:
			c = {
				clr_type: 0
			};
			c.hclr_color = b;
			this.De.wg(c) || (this.De = new Xu(c), this.ye = m);
			break;
		case ml:
			c = {
				clr_type: 0
			};
			c.hclr_color = b;
			this.nh.wg(c) || (this.nh = new Xu(c), this.ye = m);
			break;
		case ql:
			this.Yu != b && (this.Yu = b, this.ye = m);
			break;
		case iv:
			this.Cv != b && (this.Cv = b, this.ye = m);
			break;
		case rl:
			this.Zu != b && (this.Zu = b, this.ye = m);
			break;
		case jv:
			this.Dv != b && (this.Dv = b, this.ye = m);
			break;
		case sl:
			this.$u != b && (this.$u = b, this.ye = m);
			break;
		case kv:
			this.Ev != b && (this.Ev = b, this.ye = m);
			break;
		case tl:
			this.Cf != b && (this.Cf = b, this.ye = m);
			break;
		case lv:
			this.Fv != b && (this.Fv = b, this.ye = m)
	}
};

function NYa(a) {
	switch (a) {
		case kl:
		case av:
		case nl:
		case ev:
			go(jo(), Oe) || f(Error("Using new color properties when not enabled."));
			break;
		case jl:
		case gv:
		case ml:
		case hv:
			go(jo(), Oe) && f(Error("Using legacy color properties."))
	}
}

function OYa(a, b) {
	var c = {};
	c.ts_bd = a.Mr;
	c.ts_fs = a.Kg;
	c.ts_ff = a.$i;
	c.ts_it = a.Fp;
	c.ts_sc = a.Yu;
	c.ts_st = a.Zu;
	c.ts_un = a.$u;
	c.ts_va = a.Cf;
	go(jo(), Oe) ? (c.ts_bgc2 = a.De.Pa(), c.ts_fgc2 = a.nh.Pa()) : (c.ts_bgc = ov(a.De), c.ts_fgc = ov(a.nh));
	b || (c[bv] = a.zv, c[dv] = a.Av, c[cv] = a.hq, c[fv] = a.Bv, c[iv] = a.Cv, c[jv] = a.Dv, c[kv] = a.Ev, c[lv] = a.Fv, go(jo(), Oe) ? (c[av] = a.ys, c[ev] = a.zs) : (c[gv] = a.ys, c[hv] = a.zs));
	return c
}
F.Pa = function() {
	return OYa(this)
};
F.Jg = function() {
	return OYa(this, l)
};
F.Ga = function(a) {
	NYa(a);
	switch (a) {
		case kl:
			return this.De;
		case av:
		case gv:
			return this.ys;
		case il:
			return this.Mr;
		case bv:
			return this.zv;
		case ll:
			return this.$i;
		case cv:
			return this.hq;
		case ol:
			return this.Kg;
		case dv:
			return this.Av;
		case nl:
			return this.nh;
		case ev:
		case hv:
			return this.zs;
		case pl:
			return this.Fp;
		case fv:
			return this.Bv;
		case jl:
			return ov(this.De);
		case ml:
			return ov(this.nh);
		case ql:
			return this.Yu;
		case iv:
			return this.Cv;
		case rl:
			return this.Zu;
		case jv:
			return this.Dv;
		case sl:
			return this.$u;
		case kv:
			return this.Ev;
		case tl:
			return this.Cf;
		case lv:
			return this.Fv
	}
	return Zu.M.Ga.call(this, a)
};
F.ob = function(a) {
	return !a ? q : this == a ? l : this.xa() != a.xa() ? q : this.ye && a.ye && !dt(this) && !dt(a) && this.nh.xa() == a.nh.xa() && this.De.xa() == a.Um().xa() ? this.ye.ob(a.ye) : Zu.M.ob.call(this, a)
};
F.Tf = function(a) {
	return a == kl || a == nl
};
F.La = function() {
	return PYa(this, q)
};

function PYa(a, b) {
	var c = new Zu;
	QYa(a, c, b);
	return c
}
F.ke = function(a) {
	QYa(this, a, q)
};

function QYa(a, b, c) {
	ct(a, b);
	b.De = a.De.La();
	b.ys = a.ys;
	b.Mr = a.Mr;
	b.zv = a.zv;
	c || (b.$i = a.$i);
	b.hq = a.hq;
	b.Kg = a.Kg;
	b.Av = a.Av;
	b.nh = a.nh.La();
	b.zs = a.zs;
	b.Fp = a.Fp;
	b.Bv = a.Bv;
	b.Yu = a.Yu;
	b.Cv = a.Cv;
	b.Zu = a.Zu;
	b.Dv = a.Dv;
	b.$u = a.$u;
	b.Ev = a.Ev;
	b.Cf = a.Cf;
	b.Fv = a.Fv;
	b.ye = a.ye
}
function RYa(a, b) {
	NYa(b);
	var c = {};
	if (go(jo(), Oe)) {
		var d = {
			clr_type: 0
		};
		d.hclr_color = a;
		c[b] = d
	} else c[b] = a;
	return c
}
function pv() {
	return go(jo(), Oe) ? kl : jl
}
function SYa() {
	return go(jo(), Oe) ? nl : ml
}

function qv() {
	var a = new Zu;
	a.zv = l;
	a.ys = l;
	a.zs = l;
	a.hq = l;
	a.Av = l;
	a.Bv = l;
	a.Cv = l;
	a.Dv = l;
	a.Ev = l;
	a.Fv = l;
	a.Qr = 10;
	return a
}
F.ao = function() {
	var a = Zu.M.ao.call(this);
	if (!go(jo(), Oe)) {
		var b = this.nh;
		b && (b = ov(b)) && a.push(b);
		if (b = this.Um())(b = ov(b)) && a.push(b)
	}
	return a
};
F.ho = function(a) {
	var b = Zu.M.ho.call(this, a),
		c = a.ts_fgc;
	c && b.push(c);
	(a = a.ts_bgc) && b.push(a);
	return b
};
F.I_ = function(a) {
	var b = this.ld();
	b && (a[b] = l)
};
F.C7 = function(a, b) {
	if (a.ts_ff && (cv in a && !a[cv] || a[cv] == k && !this.hq)) b[a.ts_ff] = l;
	else if (a.ts_ff == k && cv in a && !a[cv] && this.hq) {
		var c = this.ld();
		b[c] = l
	}
};
kt(function() {
	return new Zu
});

function TYa(a) {
	var b = nv(a);
	return (a.Cf || mj) != mj ? Math.round(0.6 * b) : b
};

function rv(a) {
	this.A = UYa;
	this.sc = new Zu;
	a && this.update(a)
}
L(rv, bt);
var VYa = [3, 5, 7],
	WYa = [0, 1, 2],
	UYa, sv = {}, XYa;
go(jo(), Ne) ? (sv.b_gt = Osa, sv.b_ifl = Qsa, sv.b_il = Ssa, sv.b_sn = Usa, XYa = [vd]) : XYa = [Nsa, Psa, Rsa, Tsa, vd];
UYa = new Tu(XYa, sv);
var YYa = [vd];
F = rv.prototype;
F.jo = 0;
F.HC = q;
F.re = 0;
F.Lk = q;
F.Ge = 0;
F.Mk = q;
F.Uy = 1;
F.IC = q;
F.La = function() {
	var a = new rv({});
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.jo = this.jo;
	a.HC = this.HC;
	a.re = this.re;
	a.Lk = this.Lk;
	a.Ge = this.Ge;
	a.Mk = this.Mk;
	a.Uy = this.Uy;
	a.IC = this.IC;
	a.sc = this.sc.La()
};
F.Sr = function() {
	return YYa
};
F.$l = C("jo");
F.Eg = C(mk);
F.Qz = function() {
	return Ru(Pu.ya(), this.re)
};
F.vw = function() {
	return Ru(Pu.ya(), this.Ge)
};
F.Ga = function(a) {
	switch (a) {
		case Psa:
			return this.re;
		case Qsa:
			return tv(), this.Lk;
		case Rsa:
			return this.Ge;
		case Ssa:
			return tv(), this.Mk;
		case Nsa:
			return this.jo;
		case Osa:
			return tv(), this.HC;
		case Tsa:
			return this.Uy;
		case Usa:
			return tv(), this.IC;
		case vd:
			return this.sc
	}
	return rv.M.Ga.call(this, a)
};
F.Tf = function(a) {
	switch (a) {
		case vd:
			return l
	}
	return q
};

function ZYa(a) {
	switch (a) {
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			return l;
		default:
			return q
	}
}
function uv(a) {
	return ZYa(a.jo)
}
F.Cm = function(a) {
	go(jo(), Ne) && (a.Lk && (a.re = this.re, a.Lk = q), a.Mk && (a.Ge = this.Ge, a.Mk = q), a.HC && (a.jo = this.jo, a.HC = q), a.IC && (a.Uy = this.Uy, a.IC = q), a.Qr = 0);
	this.sc.Cm(a.sc)
};
F.Oc = function(a, b) {
	go(jo(), Ne) && rv.M.Oc.call(this, a, b);
	switch (a) {
		case Psa:
			this.re = b;
			break;
		case Qsa:
			tv();
			this.Lk = b;
			break;
		case Rsa:
			this.Ge = b;
			break;
		case Ssa:
			tv();
			this.Mk = b;
			break;
		case Nsa:
			this.jo = b;
			break;
		case Osa:
			tv();
			this.HC = b;
			break;
		case Tsa:
			this.Uy = b;
			break;
		case Usa:
			tv();
			this.IC = b;
			break;
		case vd:
			this.sc.update(b), !go(jo(), Tza) && dt(this.sc) && f(Error("Cannot update a bullet text style with inherit values."))
	}
};

function tv() {
	go(jo(), Ne) || f(Error("Cannot access bullet inherit properties when disabled ."))
}
F.Pa = function() {
	var a = {};
	a.b_ifl = this.re;
	a.b_il = this.Ge;
	a.b_gt = this.jo;
	a.b_sn = this.Uy;
	a.b_ts = this.sc.Pa();
	go(jo(), Ne) && (a.b_ifl_i = this.Lk, a.b_il_i = this.Mk, a.b_gt_i = this.HC, a.b_sn_i = this.IC);
	return a
};
var vv = [];
vv[1E3] = rc;
vv[900] = "CM";
vv[500] = Qb;
vv[400] = "CD";
vv[100] = Jb;
vv[90] = "XC";
vv[50] = oc;
vv[40] = "XL";
vv[10] = Xc;
vv[9] = "IX";
vv[5] = Vc;
vv[4] = "IV";
vv[1] = gc;
var wv = [1E3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function xv(a, b) {
	for (var c = r, d = 0; d < wv.length; d++) for (var e = wv[d]; a >= e;) a -= e, c += vv[e];
	return b ? c : c.toLowerCase()
}
function yv(a, b) {
	var c = b ? 65 : 97;
	a--;
	for (var d = a / 26, e = a % 26, g = r, h = 0; h <= d; h++) g += String.fromCharCode(c + e);
	return g
}

function $Ya(a, b) {
	var c;
	if (zv(a, b)) {
		var d = a.Ra(Ri, b);
		c = d.Wc;
		c = (d = a.Fb(d.Cc)) && c != m && uv(d.$f(c))
	} else c = q;
	if (!c) return r;
	c = a.Ra(Ri, b);
	d = c.Wc;
	c = a.Fb(c.Cc).$f(d);
	return aZa(a, b, c.$l())
}
function bZa(a, b) {
	for (var c = a.ic(Ri), d = [], e = 0; e < c.length; e++) {
		var g = c[e],
			h = a.td(Ri, g);
		h && h.Cc == b && d.push(g)
	}
	return d
}
function cZa(a, b) {
	if (0 == b.length) return q;
	var c = a.td(Ri, b[0]);
	if (!c) return q;
	var d = c.Cc;
	if (!d) return q;
	for (var e = 0; e < b.length; e++) if (c = a.td(Ri, b[e]), !c || c.Cc != d) return q;
	return l
}

function zv(a, b) {
	return Av(a.Ra(Ri, b)) != m
}
function Bv(a, b, c) {
	var d = a.Ra(Ri, b),
		e = 1,
		g = d.Cc;
	g && (e = a.Fb(g).$f(d.Wc).Uy);
	return dZa(a, b, c).length + e
}
function dZa(a, b, c) {
	var d = a.ic(Ri),
		e = a.pd(Ri),
		g = a.Ra(Ri, b),
		h = [];
	b = c ? c : Rs(a.qa(), b) - 1;
	a = vn(d, b);
	for (a = 0 > a ? -a - 2 : a; 0 <= a; a--) if (b = e[d[a]], b.Cc == g.Cc && b.Wc == g.Wc) h.unshift((d[a - 1] || 0) + 1);
	else if (b.Cc == g.Cc && b.Wc < g.Wc) break;
	return h
}

function Cv(a, b, c, d, e) {
	var g;
	if (d) g = a.Fb(d);
	else if (zv(a, b)) {
		d = a.Ra(Ri, b);
		var h = d.Cc;
		h && (g = a.Fb(h));
		I(e) || (e = d.Wc)
	}
	if (!g || e == m || !uv(g.$f(e))) return g && e == m && c.log(Error(wma)), m;
	c = g.aa();
	d = e;
	g = a.ic(Ri);
	e = a.pd(Ri);
	h = a.Ra(Ri, b);
	c = c || h.Cc;
	d = d != m ? d : h.Wc;
	a = a.qa();
	h = [];
	b = Us(a, b) + 1;
	for (var n = 0; n < g.length; n++) {
		var p = g[n];
		if (!(p < b)) {
			var t = e[p],
				u = t.Cc,
				t = t.Wc;
			if (u == c && t == d) h.push(Rs(a, p));
			else if (u == c && t < d) break
		}
	}
	return h
}

function aZa(a, b, c) {
	switch (c) {
		case 1:
			a = UQa;
			break;
		case 2:
			a = TQa;
			break;
		case 3:
			a = Bv(a, b) + Qa;
			break;
		case 4:
			a = yv(Bv(a, b), l) + Qa;
			break;
		case 5:
			a = yv(Bv(a, b), q) + Qa;
			break;
		case 6:
			a = xv(Bv(a, b), l) + Qa;
			break;
		case 7:
			a = xv(Bv(a, b), q) + Qa;
			break;
		case 8:
			a = r;
			break;
		default:
			a = VQa
	}
	return a
};

function Dv(a, b, c, d, e, g, h) {
	var n = r;
	a && (n += a + nb);
	c && (n += Ta, b && (n += b + Db), n += c, d && (n += nb + d));
	e && (n += e);
	g && (n += Cb + g);
	h && (n += va + h);
	return n
}
var eZa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

function Ev(a) {
	if (fZa) {
		fZa = q;
		var b = km.location;
		if (b) {
			var c = b.href;
			if (c && (c = Fv(c)) && c != b.hostname) fZa = l, f(Error())
		}
	}
	return a.match(eZa)
}
var fZa = Eo;

function Gv(a) {
	return a && decodeURIComponent(a)
}
function Hv(a, b) {
	return Ev(b)[a] || m
}

function Fv(a) {
	return Gv(Hv(3, a))
}
function Iv(a) {
	return Gv(Hv(5, a))
}
function Jv(a) {
	var b = a.indexOf(va);
	return 0 > b ? m : a.substr(b + 1)
}
function Kv(a) {
	a = Ev(a);
	return Dv(a[1], a[2], a[3], a[4])
}
function Lv(a) {
	var b = a.indexOf(va);
	return 0 > b ? a : a.substr(0, b)
}
function Mv(a) {
	if (a[1]) {
		var b = a[0],
			c = b.indexOf(va);
		0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
		c = b.indexOf(Cb);
		0 > c ? a[1] = Cb : c == b.length - 1 && (a[1] = k)
	}
	return a.join(r)
}

function gZa(a, b, c) {
	if (om(b)) for (var d = 0; d < b.length; d++) gZa(a, String(b[d]), c);
	else b != m && c.push(Ba, a, b === r ? r : zb, Im(b))
}
function hZa(a, b, c) {
	Math.max(b.length - (c || 0), 0);
	for (c = c || 0; c < b.length; c += 2) gZa(b[c], b[c + 1], a);
	return a
}
function Nv(a) {
	a = hZa([], a, k);
	a[0] = r;
	return a.join(r)
}
function iZa(a, b) {
	for (var c in b) gZa(c, b[c], a);
	return a
}
function Ov(a) {
	a = iZa([], a);
	a[0] = r;
	return a.join(r)
}
function Pv(a, b) {
	return Mv(2 == arguments.length ? hZa([a], arguments[1], 0) : hZa([a], arguments, 1))
}

function jZa(a, b, c, d) {
	for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
		var g = a.charCodeAt(b - 1);
		if (38 == g || 63 == g) if (g = a.charCodeAt(b + e), !g || 61 == g || 38 == g || 35 == g) return b;
		b += e + 1
	}
	return -1
}
var kZa = /#|$/;

function Qv(a, b) {
	var c = a.search(kZa),
		d = jZa(a, 0, b, c);
	if (0 > d) return m;
	var e = a.indexOf(Ba, d);
	if (0 > e || e > c) e = c;
	d += b.length + 1;
	return Jm(a.substr(d, e - d))
}
var lZa = /[?&]($|#)/;

function mZa(a, b) {
	for (var c = a.search(kZa), d = 0, e, g = []; 0 <= (e = jZa(a, d, b, c));) g.push(a.substring(d, e)), d = Math.min(a.indexOf(Ba, e) + 1 || c, c);
	g.push(a.substr(d));
	return g.join(r).replace(lZa, dba)
}
function Rv(a, b, c) {
	a = mZa(a, b);
	return Mv([a, Ba, b, zb, Im(c)])
}
function Sv(a, b) {
	Cm(a, Sa) && (a = a.substr(0, a.length - 1));
	Bm(b, Sa) && (b = b.substr(1));
	return Pm(a, Sa, b)
};

function Tv(a) {
	var b = a;
	try {
		Fv(a) == nQa && Iv(a) == uca && (b = Qv(a, Wj))
	} catch (c) {}
	return b ? b : r
};

function Uv(a) {
	this.A = new Sr;
	this.C = a || m
}
L(Uv, M);
F = Uv.prototype;
F.set = function(a, b) {
	this.A.set(a, b)
};
F.dd = function() {
	return this.A.dd()
};
F.remove = function(a) {
	this.A.remove(a)
};
F.execute = function(a, b) {
	var c = this.A.get(a) || this.C;
	return c ? c.apply(k, Array.prototype.slice.call(arguments, 1)) : m
};
F.O = function() {
	Uv.M.O.call(this);
	this.A.clear();
	delete this.A;
	delete this.C
};

function Vv(a, b, c, d) {
	this.A = b;
	this.W = a;
	this.cb = c;
	d && this.update(d)
}
L(Vv, bt);
var nZa = [Bd];
Vv.prototype.xa = C(Wc);
Vv.prototype.aa = C(Fd);
var Wv = new Uv;

function Xv(a, b, c) {
	return Wv.execute(a, b, c)
}
Vv.prototype.Oc = hm();
Vv.prototype.Pa = function() {
	return {}
};
Vv.prototype.ob = function(a) {
	return a instanceof Vv && this.xa() == a.xa() && this.aa() == a.aa() && Vv.M.ob.call(this, a)
};

function oZa(a, b) {
	this.A = b;
	this.F = a
}
L(oZa, bt);
var pZa = Uu({
	Om: rJa
});
F = oZa.prototype;
F.xa = C($b);
F.Oc = hm();
F.Ga = function(a) {
	switch (a) {
		case rJa:
			return this.F
	}
};
F.Pa = function() {
	var a = {};
	a.lnk_type = this.F;
	return a
};
F.tU = D(rJa);

function ew(a, b, c, d) {
	this.G = a;
	this.F = b || [];
	this.C = c || m;
	this.A = d || m
}
F = ew.prototype;
F.M5 = m;
F.xa = C(cc);
F.pd = C($b);
F.Ra = function(a, b) {
	if (this.F[a]) return this.F[a];
	var c = this.ic(),
		d = vn(c, a);
	0 > d && (d = -d - (mWa(this.G) ? 1 : 2));
	return this.F[c[d]] || b && this.A || it(this.G)
};
F.td = function(a) {
	return this.F[a] || m
};
F.ic = function() {
	this.M5 || (this.M5 = this.F ? er(this.F) : []);
	return this.M5
};
F.Pa = function() {
	var a = {};
	a.stsl_type = this.G;
	this.C && (a.stsl_leading = this.C.Pa(), a.stsl_leadingType = this.C.xa());
	this.A && (a.stsl_trailing = this.A.Pa(), a.stsl_trailingType = this.A.xa());
	var b = [];
	dr(this.F, function(a, d) {
		b[a] = d.Pa();
		return q
	});
	a.stsl_styles = b;
	return a
};

function fw(a) {
	oZa.call(this, 0, qZa);
	this.update(a)
}
L(fw, oZa);
var qZa = Uu({
	URL: xPa
}, pZa);
F = fw.prototype;
F.PV = r;
F.La = function() {
	var a = new fw({});
	this.ke(a);
	return a
};
F.Xb = C("PV");
F.Ga = function(a) {
	switch (a) {
		case xPa:
			return this.PV
	}
	return fw.M.Ga.call(this, a)
};
F.Oc = function(a, b) {
	switch (a) {
		case xPa:
			var c = b;
			c && (c.charAt(0) != va && !Hv(1, c)) && (c = Gg + c);
			this.PV = c;
			break;
		default:
			fw.M.Oc.call(this, a, b)
	}
};
F.Pa = function() {
	var a = fw.M.Pa.call(this);
	a.ulnk_url = this.PV.toString();
	return a
};

function gw(a, b, c, d, e, g) {
	this.K = a;
	for (a = 0; a < b.length; a++) if (b[a].xa() == Qi) for (var h = b[a].pd(), n = 0; n < h.length; n++) if (h[n]) {
		var p = h[n].Ig;
		if (p && 0 == p.xa()) {
			var t = Tv(p.Xb());
			p.Oc(xPa, t)
		}
	}
	this.C = b;
	this.G = c || [];
	this.Lf = d || {};
	this.A = e || {};
	this.F = g || {}
}
F = gw.prototype;
F.qa = C(mc);
F.Gh = function(a) {
	for (var b = this.C, c = 0; c < b.length; c++) if (b[c].xa() == a) return b[c];
	b = this.G;
	for (c = 0; c < b.length; c++) if (b[c].xa() == a) return b[c];
	return m
};
F.Ra = function(a, b, c) {
	var d = this.Gh(a);
	return d && d.Ra(b, c) || it(a)
};
F.td = function(a, b) {
	var c = this.Gh(a);
	return c ? c.td(b) : m
};
F.Dj = function(a) {
	return this.Lf[a] || []
};
F.pd = function(a) {
	return (a = this.Gh(a)) ? a.pd() : []
};
F.ic = function(a) {
	return (a = this.Gh(a)) ? a.ic() : []
};
F.Pa = function() {
	var a = {};
	a.dsl_spacers = this.qa();
	var b = [];
	dr(this.C, function(a, c) {
		b[a] = c.Pa();
		return q
	});
	a.dsl_styleslices = b;
	var c = [];
	dr(this.G, function(a, b) {
		c[a] = b.Pa();
		return q
	});
	a.dsl_metastyleslices = c;
	a.dsl_entitypositionmap = this.Lf;
	var d = {}, e = {}, g;
	for (g in this.A) d[g] = this.A[g].Pa(), e[g] = this.A[g].xa();
	a.dsl_entitymap = d;
	a.dsl_entitytypemap = e;
	d = {};
	for (g in this.F) d[g] = this.F[g].Pa();
	a.dsl_relateddocslices = d;
	return a
};

function hw(a, b, c) {
	var d = a.qa();
	c = I(c) ? c : d.length - 1;
	if (b > c) return new gw(r, []);
	var d = d.substring(b, c + 1),
		e = rZa(a.C, b, c),
		g = rZa(a.G, b, c),
		h = a.Lf,
		n = {}, p;
	for (p in h) {
		var t = p;
		n[t] = h[t].slice(b, c + 1)
	}
	var u = {}, x = a.A;
	for (t in n) dr(n[t], function(a, b) {
		for (var c = 0, d; d = b[c]; c++) x[d] && (u[d] = x[d]);
		return q
	});
	return new gw(d, e, g, n, u, Vn(a.F))
}
function rZa(a, b, c) {
	for (var d = [], e = 0, g; g = a[e]; e++) {
		var h = g.pd().slice(b, c + 1);
		d.push(new ew(g.xa(), h))
	}
	return d
}

function sZa(a) {
	for (var b = [], c = a.C, d = 0, e; e = c[d]; ++d) b.push(new ew(e.xa(), k, e.C));
	b = new gw(r, b);
	return iw(a, b, 0, l)
}
function tZa(a, b) {
	return iw(b, a, 0, k)
}
function uZa(a, b, c) {
	c = c != m ? c : b;
	b = hw(a, 0, b - 1);
	a = hw(a, c + 1);
	return tZa(b, a)
}

function iw(a, b, c, d) {
	var e = a.qa(),
		g = b.qa(),
		h = g.length,
		n = e.length,
		e = Pm(e.substr(0, c), g, e.substr(c)),
		g = vZa(a.C, b.C, c, n, h, d),
		n = vZa(a.G, b.G, c, n, h, d);
	c = wZa(a.Lf, b.Lf, c, h);
	var h = Vn(a.A),
		p = b.A,
		t;
	for (t in p) h[t] = p[t];
	if (d) for (t in h) {
		var u = h[t],
			p = h,
			x = t,
			u = Xv(u.xa(), t, u.Pa());
		p[x] = u
	}
	a = Vn(a.F);
	b = b.F;
	for (t in b) a[t] = b[t];
	if (d) for (t in a) a[t] = sZa(a[t]);
	return new gw(e, g, n, c, h, a)
}

function wZa(a, b, c, d) {
	var e = new Xr;
	Yr(e, Pn(a));
	Yr(e, Pn(b));
	for (var g = {}, e = e.zc(), h = 0, n; n = e[h]; h++) {
		var p = [],
			t = a[n];
		t && dr(t, function(a) {
			var b = a >= c ? a + d : a;
			t[a] && (p[b] = t[a].concat());
			return q
		});
		for (var u = er(b[n]), x = 0; x < u.length; x++) {
			var y = u[x];
			p[y + c] = b[n][y].concat()
		}
		g[n] = p
	}
	return g
}

function vZa(a, b, c, d, e, g) {
	for (var h = {}, n = {}, p = {}, t = 0, u; u = a[t]; t++) {
		var x = u.xa();
		h[x] = [];
		dr(u.pd(), function(a, b) {
			h[x][a >= c ? a + e : a] = g ? b.La() : b;
			return q
		});
		0 == c ? (u = u.A) && (p[x] = g ? u.La() : u) : c == d && (u = u.C) && (n[x] = g ? u.La() : u)
	}
	for (t = 0; a = b[t]; t++) {
		x = a.xa();
		h[x] = h[x] || [];
		u = wUa(a.pd(), c);
		for (var y in u) h[x][y] = g ? u[y].La() : u[y];
		0 == c ? (u = a.C) && (n[x] = g ? u.La() : u) : c == d && (u = a.A) && (p[x] = g ? u.La() : u)
	}
	b = [];
	for (y in h) d = y, b.push(new ew(d, h[d], n[d], p[d]));
	return b
}
F.Fb = function(a) {
	return this.A[a]
};

function xZa(a, b) {
	var c = Ss(a.qa(), b);
	if ((c = a.Dj(hg)[c]) && c[0]) for (var d = a.ic(hg), e = 0; e < d.length; e++) if (jw(a.td(hg, d[e])) == c[0]) return d[e];
	return m
}
function yZa(a, b) {
	if (!Ws(a.qa(), b)) return q;
	var c = a.Dj(hg)[b - 1];
	return !!c && 0 < c.length
};

function kw(a, b, c) {
	this.A = a;
	this.F = b;
	this.C = I(c) ? !c : l
};

function lw(a, b) {
	this.ra = a;
	this.A = b
}
L(lw, M);
F = lw.prototype;
F.Kj = m;
F.c4 = function() {
	var a = this.A.nF();
	return new kw(new ws(a.start), LOa)
};
F.b4 = function() {
	var a = this.A.nF();
	return new kw(new ws(a.end, a.start != a.end), BOa)
};
F.UMa = function() {
	return new kw(new ws(mw(this.Kj.A).start), MOa)
};
F.Gja = function() {
	var a = this.Kj,
		b = a.A,
		c = qt(b),
		b = 0 != b.C.Lb.xa() ? 1 : Rs(b.A.qa(), qt(b));
	c == b && 1 != b && (b = Rs(a.ba().qa(), b - 1));
	return new kw(new ws(b), MOa)
};
F.RMa = function() {
	var a = this.Kj,
		b = a.A,
		a = a.ba().qa(),
		c = qt(b),
		b = mw(b).end;
	c == b && b != a.ub() - 1 && (b = Us(a, b + 1));
	return new kw(new ws(b), COa)
};
F.QMa = function() {
	return new kw(new ws(mw(this.Kj.A).end), COa)
};
F.VMa = function(a) {
	var b = this.Kj,
		c = b.ba().qa(),
		d = c.ub() - 1,
		b = qt(b.A);
	b <= d && (b = Us(c, b) + 1);
	b = Math.min(a ? d : d + 1, b);
	return new kw(new ws(b, b > d), MOa)
};
F.Ija = function() {
	var a = this.Kj;
	return new kw(new ws(Ss(a.ba().qa(), qt(a.A)) + 1), NOa)
};
F.Fja = function(a) {
	var b = this.Kj,
		b = Vs(b.ba().qa(), qt(b.A)) + (a ? 0 : 1);
	return new kw(new ws(b, !a), DOa)
};
F.Jja = function(a) {
	return zZa(this, a)
};
F.Eja = function(a) {
	return AZa(this, a)
};
F.Hja = function(a) {
	return this.a4(a, l)
};
F.TMa = function(a) {
	return this.FU(a, l)
};
F.SMa = function(a) {
	return this.FU(a, q, l)
};
F.FU = function(a, b, c) {
	var d = this.Kj,
		e = d.ba(),
		d = d.A,
		g = e.qa(),
		h = d.getSelection(),
		n = qt(d),
		h = h.A,
		p = g.ub() - 1;
	if (n > p) if (h && n - 1 == p) {
		if (!a) return m;
		n--
	} else return this.ra.log(Error(qha)), m;
	p = Vs(e.qa(), n);
	if (h && a && !b) n = h.C + 1, n > p && (n = p);
	else if (n < p && !Zs(e.qa(), n)) if (b) n = Fu(n, g);
	else if (c) e = Ju(n, g), e == n ? (e = Fu(n, g), n = Ju(e, g)) : n = e;
	else for (n++; n <= p && !Xs(g, n);) n++;
	else n == p && !a && n++;
	return new kw(new ws(n, BZa(d, n, a)), b ? OOa : c ? EOa : HOa)
};
F.a4 = function(a, b) {
	var c = this.Kj,
		d = c.ba(),
		c = c.A,
		e = d.qa(),
		g = c.getSelection(),
		h = qt(c),
		n = g.Lb,
		n = 0 == n.xa() && n.C,
		d = Ss(d.qa(), n ? h - 1 : h);
	if ((g = g.A) && a && !b) h = g.A;
	else if (h > d + 1) if (b) h = Iu(h, e), 1 > h && (h = 1);
	else for (h--; 1 < h && !Xs(e, h);) h--;
	return new kw(new ws(h, BZa(c, h, a)), b ? OOa : yOa)
};

function BZa(a, b, c) {
	var d = a.getSelection();
	return c ? q : (Ks(d) ? d.F.F.A() : qt(a)) < b
}

function zZa(a, b) {
	var c = a.Kj,
		d = c.A.getSelection(),
		e = d.Lb,
		d = (d = d.A) ? new ws(d.A) : e;
	if (0 != e.xa()) return m;
	if (b && (!e.ob(d) || e.C != d.C)) e = d, nw(a.A, e);
	d = a.A.Ar(e, l);
	d || (c = Ss(c.ba().qa(), e.C ? e.A() - 1 : e.A()) + 1, d = new ws(c));
	return new kw(d, POa)
}
function AZa(a, b) {
	var c = a.Kj,
		d = c.A.getSelection(),
		e = d.Lb,
		d = (d = d.A) ? new ws(d.C, l) : e;
	if (0 != e.xa()) return m;
	if (b && (!e.ob(d) || e.C != d.C)) e = d.shift(1), nw(a.A, e);
	d = a.A.Ar(e, q);
	d || (c = Vs(c.ba().qa(), e.C ? e.A() - 1 : e.A()), d = new ws(c));
	return new kw(d, zOa)
}
F.WMa = function(a) {
	return CZa(this, l, a)
};
F.PMa = function(a) {
	return CZa(this, q, a)
};

function CZa(a, b, c) {
	var d = a.Kj,
		e = d.ba(),
		d = d.A;
	a = a.A;
	var g = Hs(a.Q.A.A.getSelection()),
		h = ow(a, g),
		n = a.oea(b),
		p = pw(a);
	if (n == a.Y) var t = qw(a),
		p = t.end - t.start;
	var u = qw(a),
		t = new uo(n.nr, n.Fg),
		x;
	x = n.Fg + (u.end - u.start) * (b ? -1 : 1);
	x = to(x, 0, n.b3 - p);
	DZa(n, x);
	p = EZa(a, x);
	ys(u, p) ? a = m : (n = new uo(n.nr, x), h ? (x = m, Cs(u, h.y) && (x = new uo(h.x - t.x, h.y - t.y)), u = u.end - u.start, h = n.y != t.y && !Cs(p, h.y) ? new uo(h.x, (x ? x.y : Math.floor(u / 2)) + n.y) : m) : h = m, a = h ? a.Xh.Zq(h.x - rw(a.Xh), h.y - sw(a.Xh)) : g);
	a || (b ? a = new ws(Ss(e.qa(), qt(d)) + 1) : (e = Vs(e.qa(),
	qt(d)) + (c ? 0 : 1), a = new ws(e, !c)));
	return new kw(a, b ? QOa : AOa, l)
}
F.O = function() {
	lw.M.O.call(this);
	delete this.Kj;
	delete this.ra;
	delete this.A
};

function FZa(a, b, c) {
	lw.call(this, b, c);
	this.Kj = a
}
L(FZa, lw);
FZa.prototype.C = function() {
	var a;
	a = this.Kj;
	var b = qt(a.A);
	a = a.ba();
	var c = xZa(a, b);
	if (c) return new kw(new ws(c + 1, l), GOa);
	b = Ss(a.qa(), b);
	a.Dj(pg)[b] ? (b = GZa(this.A, 0, 0, k, k, l), b = new kw(b, FOa)) : b = m;
	return b
};

function tw(a, b, c) {
	R.call(this, a, c);
	this.A = b || {}
}
L(tw, R);

function HZa(a, b) {
	this.A = a;
	this.zfa = b || m
};

function uw() {}
uw.prototype.A = m;

function vw(a, b) {
	a.C = b;
	return a
}
function ww(a) {
	return new HZa(a.C, a.A)
};

function IZa(a, b) {
	R.call(this, Isa, a);
	this.A = !! b
}
L(IZa, Au);

function xw(a, b, c) {
	R.call(this, Bta, a);
	this.A = !! b;
	this.C = !! c
}
L(xw, Au);

function JZa(a) {
	R.call(this, qua, a)
}
L(JZa, Au);

function KZa(a, b, c) {
	R.call(this, Rua, a);
	this.C = !! b;
	this.A = !! c
}
L(KZa, Au);

function LZa(a, b) {
	R.call(this, Ig, a);
	this.A = b
}
L(LZa, Au);

function MZa(a) {
	this.A = {};
	this.C = !! a
}
function NZa(a) {
	var b = wq[a];
	return b != m ? b : String(a)
}
function OZa(a, b) {
	var c;
	c = r;
	b.metaKey && (c += Sd);
	b.ctrlKey && (c += be);
	b.altKey && (c += vj);
	(a.C ? 0 : b.shiftKey) && (c += vk);
	return (c ? c + Ka : r) + NZa(b.keyCode)
};

function PZa(a) {
	this.A = new MZa;
	yw(this, m, 8, this.k4);
	yw(this, m, 46, this.l4);
	yw(this, m, 13, this.Pja);
	yw(this, m, 9, this.iNa);
	yw(this, vk, 9, this.gNa);
	yw(this, vk, 8, this.k4);
	yw(this, vk, 13, this.jNa);
	a ? (yw(this, vk, 46, this.l4), yw(this, vj, 8, this.Nja), yw(this, vj, 46, this.Oja), yw(this, be, 68, this.l4), yw(this, be, 72, this.k4), yw(this, be, 75, this.hNa), yw(this, be, 79, this.Pja), yw(this, Sd, 8, this.fNa)) : (yw(this, be, 46, this.Oja), yw(this, be, 8, this.Nja))
}
function yw(a, b, c, d) {
	a.A.A[(b ? b + Ka : r) + NZa(c)] = K(d, k)
}
F = PZa.prototype;
F.iNa = function(a) {
	return new IZa(a)
};
F.gNa = function(a) {
	return new IZa(a, l)
};
F.Pja = function(a) {
	return new JZa(a)
};
F.jNa = function(a) {
	return new LZa(a, ea)
};
F.l4 = function(a) {
	return new KZa(a)
};
F.Oja = function(a) {
	return new KZa(a, l)
};
F.hNa = function(a) {
	return new KZa(a, k, l)
};
F.k4 = function(a) {
	return new xw(a)
};
F.Nja = function(a) {
	return new xw(a, k, l)
};
F.fNa = function(a) {
	return new xw(a, l)
};
var QZa = /Meta/i,
	RZa = /Ctrl/ig;

function SZa(a, b) {
	return xo && !b && !a.match(QZa) ? a.replace(RZa, Ola) : a
};

function zw(a, b) {
	a && TZa(this, a, b)
}
L(zw, bq);
F = zw.prototype;
F.Xa = m;
F.xW = m;
F.O7 = m;
F.yW = m;
F.Nm = -1;
F.fz = -1;
F.b8 = q;
var UZa = {
	3: 13,
	12: 144,
	63232: 38,
	63233: 40,
	63234: 37,
	63235: 39,
	63236: 112,
	63237: 113,
	63238: 114,
	63239: 115,
	63240: 116,
	63241: 117,
	63242: 118,
	63243: 119,
	63244: 120,
	63245: 121,
	63246: 122,
	63247: 123,
	63248: 44,
	63272: 46,
	63273: 36,
	63275: 35,
	63276: 33,
	63277: 34,
	63289: 144,
	63302: 45
}, VZa = {
	Up: 38,
	Down: 40,
	Left: 37,
	Right: 39,
	Enter: 13,
	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,
	"U+007F": 46,
	Home: 36,
	End: 35,
	PageUp: 33,
	PageDown: 34,
	Insert: 45
}, WZa = Q || Eo && Io(Yca),
	XZa = xo && Do;
F = zw.prototype;
F.dTa = function(a) {
	if (Eo && (17 == this.Nm && !a.ctrlKey || 18 == this.Nm && !a.altKey || xo && 91 == this.Nm && !a.metaKey)) this.fz = this.Nm = -1; - 1 == this.Nm && (a.ctrlKey && 17 != a.keyCode ? this.Nm = 17 : a.altKey && 18 != a.keyCode ? this.Nm = 18 : a.metaKey && 91 != a.keyCode && (this.Nm = 91));
	WZa && !fTa(a.keyCode, this.Nm, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.fz = Do ? gTa(a.keyCode) : a.keyCode, XZa && (this.b8 = a.altKey))
};
F.eTa = function(a) {
	this.fz = this.Nm = -1;
	this.b8 = a.altKey
};
F.handleEvent = function(a) {
	var b = a.Mc,
		c, d, e = b.altKey;
	Q && a.type == gh ? (c = this.fz, d = 13 != c && 27 != c ? b.keyCode : 0) : Eo && a.type == gh ? (c = this.fz, d = 0 <= b.charCode && 63232 > b.charCode && Cp(c) ? b.charCode : 0) : Co ? (c = this.fz, d = Cp(c) ? b.keyCode : 0) : (c = b.keyCode || this.fz, d = b.charCode || 0, XZa && (e = this.b8), xo && (63 == d && 224 == c) && (c = 191));
	var g = c,
		h = b.keyIdentifier;
	c ? 63232 <= c && c in UZa ? g = UZa[c] : 25 == c && a.shiftKey && (g = 9) : h && h in VZa && (g = VZa[h]);
	a = g == this.Nm;
	this.Nm = g;
	b = new Aw(g, d, a, b);
	b.altKey = e;
	this.dispatchEvent(b)
};
F.N = C(Yc);

function TZa(a, b, c) {
	a.yW && YZa(a);
	a.Xa = b;
	a.xW = up(a.Xa, gh, a, c);
	a.O7 = up(a.Xa, fh, a.dTa, c, a);
	a.yW = up(a.Xa, ih, a.eTa, c, a)
}
function YZa(a) {
	a.xW && (xp(a.xW), xp(a.O7), xp(a.yW), a.xW = m, a.O7 = m, a.yW = m);
	a.Xa = m;
	a.Nm = -1;
	a.fz = -1
}
F.O = function() {
	zw.M.O.call(this);
	YZa(this)
};

function Aw(a, b, c, d) {
	d && this.init(d, k);
	this.type = eh;
	this.keyCode = a;
	this.charCode = b;
	this.repeat = c
}
L(Aw, op);

function Bw(a) {
	this.G = {};
	this.C = {
		ZB: [],
		time: 0
	};
	this.Aa = Zn(ZZa);
	this.Ba = Zn($Za);
	this.W = l;
	this.K = this.Y = q;
	this.na = l;
	this.pZ(a)
}
var a_a;
L(Bw, bq);
var ZZa = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
	$Za = [Rd, "date", "datetime", Hua, Of, "month", oj, "password", "search", "tel", Wk, XOa, Cl, "week"],
	b_a = {
		Uea: wk,
		Tea: vNa
	};
F = Bw.prototype;
F.Ke = function(a, b) {
	c_a(this.G, d_a(1, arguments), a)
};
F.aL = jm(17);
F.CE = jm(19);

function d_a(a, b) {
	var c;
	if (qm(b[a])) c = e_a(b[a]);
	else {
		var d = b,
			e = a;
		om(b[a]) && (d = b[a], e = 0);
		for (c = []; e < d.length; e += 2) c.push({
			keyCode: d[e],
			Ur: d[e + 1]
		})
	}
	return c
}
F.O = function() {
	Bw.M.O.call(this);
	this.G = {};
	wp(this.A, fh, this.dT, q, this);
	xo && (Do && Io(Eca)) && wp(this.A, ih, this.rga, q, this);
	yo && !Do && (wp(this.A, gh, this.sga, q, this), wp(this.A, ih, this.tga, q, this));
	this.A = m
};

function e_a(a) {
	a = a.replace(/[ +]*\+[ +]*/g, Ka).replace(/[ ]+/g, s).toLowerCase();
	a = a.split(s);
	for (var b = [], c, d = 0; c = a[d]; d++) {
		var e = c.split(Ka),
			g;
		c = 0;
		for (var h, n = 0; h = e[n]; n++) {
			switch (h) {
				case vk:
					c |= 1;
					continue;
				case be:
					c |= 2;
					continue;
				case vsa:
					c |= 4;
					continue;
				case QJa:
					c |= 8;
					continue
			}
			g = h;
			if (!a_a) {
				e = {};
				h = k;
				for (h in wq) e[wq[h]] = h;
				a_a = e
			}
			g = a_a[g];
			break
		}
		b.push({
			keyCode: g,
			Ur: c
		})
	}
	return b
}
F.pZ = function(a) {
	this.A = a;
	up(this.A, fh, this.dT, q, this);
	xo && (Do && Io(Eca)) && up(this.A, ih, this.rga, q, this);
	yo && !Do && (up(this.A, gh, this.sga, q, this), up(this.A, ih, this.tga, q, this))
};
F.rga = function(a) {
	if (224 == a.keyCode) this.nqa = l, eq(function() {
		this.nqa = q
	}, 400, this);
	else {
		var b = a.metaKey || this.nqa;
		if ((67 == a.keyCode || 88 == a.keyCode || 86 == a.keyCode) && b) a.metaKey = b, this.dT(a)
	}
};

function f_a(a) {
	return yo && !Do && a.ctrlKey && a.altKey && !a.shiftKey
}
F.sga = function(a) {
	32 < a.keyCode && f_a(a) && (this.ea = l)
};
F.tga = function(a) {
	!this.ea && f_a(a) && this.dT(a)
};

function c_a(a, b, c) {
	var d = b.shift(),
		d = d.keyCode & 255 | d.Ur << 8,
		e = a[d];
	e && (c && (0 == b.length || qm(e))) && f(Error("Keyboard shortcut conflicts with existing shortcut"));
	b.length ? (e || (e = a[d] = {}), c_a(e, b, c)) : a[d] = c
}
function g_a(a, b, c, d) {
	c = c || 0;
	return (d = (d || a.G)[b[c]]) && !qm(d) && 1 < b.length - c ? g_a(a, b, c + 1, d) : d
}
F.dT = function(a) {
	var b;
	b = a.keyCode;
	if (16 == b || 17 == b || 18 == b) b = q;
	else {
		var c = a.target,
			d = c.tagName == Rc || c.tagName == jc || c.tagName == Hb || c.tagName == qoa,
			e = !d && (c.isContentEditable || c.ownerDocument && c.ownerDocument.designMode == tj);
		b = !d && !e || this.Aa[b] || this.K ? l : e ? q : this.na && (a.altKey || a.ctrlKey || a.metaKey) ? l : c.tagName == jc && this.Ba[c.type] ? 13 == b : c.tagName == jc || c.tagName == Hb ? 32 != b : q
	}
	if (b) if (a.type == fh && f_a(a)) this.ea = q;
	else {
		b = (Do ? gTa(a.keyCode) : a.keyCode) & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
		var g, h, c = ym();
		this.C.ZB.length && 1500 >= c - this.C.time ? g = g_a(this, this.C.ZB) : this.C.ZB.length = 0;
		g = g ? g[b] : this.G[b];
		g || (g = this.G[b], this.C.ZB = []);
		g && qm(g) ? h = g : g ? (this.C.ZB.push(b), this.C.time = c, Do && a.preventDefault()) : this.C.ZB.length = 0;
		h && (this.W && a.preventDefault(), this.Y && a.stopPropagation(), g = a.target, b = this.dispatchEvent(new Cw(b_a.Uea, h, g)), (b &= this.dispatchEvent(new Cw(b_a.Tea + h, h, g))) || a.preventDefault(), this.C.ZB.length = 0)
	}
};

function Cw(a, b, c) {
	R.call(this, a, c);
	this.identifier = b
}
L(Cw, R);

function Dw(a) {
	this.Ec = a;
	this.C = this.A = {};
	this.R = new S(this);
	this.R.A(this.Ec, eh, this.G)
}
L(Dw, bq);
var h_a = m;
Dw.prototype.F = 0;
Dw.prototype.Ke = function(a, b) {
	var c;
	c = b.replace(/[ +]*\+[ +]*/g, Ka).replace(/[ ]+/g, s).toLowerCase();
	c = c.split(s);
	for (var d = [], e = 0; e < c.length; e++) {
		for (var g = c[e].split(Ka), h = 0, n = -1, p, t = 0; p = g[t]; t++) {
			switch (p) {
				case vk:
					h |= 1;
					continue;
				case be:
					h |= 2;
					continue;
				case vsa:
					h |= 4;
					continue;
				case QJa:
					h |= 8;
					continue
			}
			g = p;
			if (!h_a) {
				n = {};
				p = k;
				for (p in wq) n[wq[p]] = Number(p);
				h_a = n
			}
			n = h_a[g];
			break
		}
		d.push({
			keyCode: n,
			Ur: h
		})
	}
	i_a(this.A, d, a)
};

function i_a(a, b, c) {
	var d = b.shift(),
		d = d.keyCode & 255 | d.Ur << 8,
		e = a[d];
	e && (c && (0 == b.length || qm(e))) && f(Error("Keyboard shortcut conflicts with existing shortcut."));
	0 < b.length ? (e || (e = a[d] = {}), i_a(e, b, c)) : a[d] = c
}
Dw.prototype.G = function(a) {
	if (!(16 == a.keyCode || 17 == a.keyCode || 18 == a.keyCode)) {
		var b = a.Mc;
		if (b) {
			var c = a.keyCode & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8,
				d = ym();
			1500 < d - this.F && this.C != this.A && (this.C = this.A);
			var e = this.C[c];
			!e && this.C != this.A && (e = this.A[c]);
			var g;
			e ? qm(e) ? (g = e, this.C = this.A) : (this.C = e, this.F = d) : this.C = this.A;
			g && (this.dispatchEvent(new Cw(wk, g, a.target)) || b.preventDefault())
		}
	}
};
Dw.prototype.O = function() {
	O(this.R);
	delete this.C;
	delete this.R;
	delete this.Ec;
	delete this.A;
	Dw.M.O.call(this)
};

function Ew(a, b, c, d, e, g) {
	pu.call(this);
	this.ea = c;
	this.L = d;
	this.K = e;
	this.A = b;
	this.F = a;
	this.G = g;
	this.Y = ww(vw(new uw, 2));
	this.na = Zn(j_a);
	a.$h() ? this.uca() : this.R.A(a, Tg, this.uca)
}
L(Ew, pu);
var j_a = [Rd, "date", "datetime", Hua, Of, "month", oj, "password", "search", "tel", Wk, XOa, Cl, "week"],
	k_a = !Do;
F = Ew.prototype;
F.JF = m;
F.qha = q;
F.P0 = q;
F.Dt = m;

function l_a(a, b, c, d) {
	var e = a.aa();
	d = d != m ? e + s + d : e;
	a = a.Nb(ig);
	b = SZa(b, a);
	c.Ke(d, b);
	c = {};
	c.identifier = d;
	c.yLa = b;
	return c
}
F.uca = function() {
	this.JF = m_a(this.F.Bo);
	this.vb()
};
F.rha = D(l);
F.vb = function() {
	if (!this.qha && this.F.$h() && this.rha()) {
		this.qha = l;
		for (var a = this.A.dQ(), b = 0; b < a.length; b++) n_a(this, a[b]);
		this.St && this.Kp()
	}
};

function m_a(a) {
	k_a ? (a = new Bw(a), a.W = q, a.K = l) : a = new Dw(new zw(a));
	return a
}
F.Kp = function() {
	var a = this.F;
	a.$h() && !this.P0 && (a = a.Bo, this.R.A(a, fh, this.dHa).A(a, gh, this.l1).A(a, ih, this.eHa).A(this.JF, wk, this.D1), this.Lga(), this.P0 = l)
};
F.Vu = function(a) {
	Ew.M.Vu.call(this, a);
	this.R.A(this.A, vva, this.ZJa)
};
F.ZJa = function(a) {
	n_a(this, a.action.aa())
};
F.wja = G;

function n_a(a, b) {
	var c = a.A.Ja(b);
	if (c) {
		var d = c.Nb(hh);
		if (d) for (var d = qm(d) ? [d] : d, e = 1 < d.length, g = 0, h = d.length; g < h; g++) {
			var n = a;
			if (c && n.JF) {
				var p = l_a(c, d[g], n.JF, e ? g : k);
				n.wja(p.identifier, p.yLa)
			}
		}
	}
}
F.Lga = G;
F.dHa = function(a) {
	this.AZ = a;
	if (this.Dt && this.Dt.F(a)) a.preventDefault();
	else {
		var b = this.G;
		!Do && !$q && (!b.C && 229 == a.keyCode ? VXa(b) : b.C && 229 != a.keyCode ? TXa(a) && UXa(b) : b.C && eq(b.jE, 0, b));
		0 == Hs(b.F.A.getSelection()).xa() && TXa(a) && (b.L = a.keyCode);
		17 == a.keyCode && (b = this.A.Ja(ABa)) && b.qb();
		this.mba(a)
	}
};
F.mba = function(a) {
	Do || this.pE(a)
};
F.l1 = function(a) {
	if (this.Dt && this.Dt.F(a)) a.preventDefault();
	else {
		var b = qu.ya(),
			c = tu(b, new Ou(sPa, dFa)),
			d = a.ctrlKey,
			e = a.shiftKey,
			g = a.altKey,
			h = a.keyCode,
			n = a.charCode,
			p = a.ctrlKey || a.altKey || a.metaKey && xo || 27 == a.keyCode && a.shiftKey;
		Do ? (yo && 192 == h && (n = 0), xo && (d && 0 == h && this.AZ != m) && this.pE(this.AZ, l), this.pE(a)) : xo && (g && 70 != n) && (p = q);
		if ((!Do || Cp(h) || 0 == h) && 32 <= n && (!p || g && d && !(47 <= n && 54 >= n || 101 <= n && 112 >= n || 99 == n || 114 == n || 116 == n || 118 == n || e && (84 == n || 69 == n || 77 == n || 73 == n || 75 == n || 74 == n || 83 == n || 68 == n || 60 == n || 58 == n || 43 == n || 34 == n)))) d = String.fromCharCode(n), g = qu.ya(), n = HXa(g, sYa([rPa, wd])), this.dispatchEvent(new LZa(this, d)), IXa(g, n);
		if (!p && (!Do || 112 > h || 123 < h) && !(e && 45 == h)) iu(this.F), a.preventDefault();
		uu(b, c)
	}
};
F.eHa = function(a) {
	this.Dt && this.Dt.F(a) && a.preventDefault()
};
F.pE = function(a, b) {
	if (I(this.L.A.C.A[OZa(this.L.A.C, a)])) {
		var c = qu.ya(),
			d = tu(c, new Ou($d, zua)),
			e = this.L;
		if (e.C) {
			var g;
			g = e.A.C.A[OZa(e.A.C, a)];
			if (g = !g ? m : g(!a.shiftKey)) if (a.shiftKey) {
				var h = new o_a(g.A, e.C.A.getSelection(), a.keyCode),
					h = pYa(e.F, e.C, h);
				Bu(e.C, h, l, g.C, g.F)
			} else Bu(e.C, Ls(g.A), l, g.C, g.F)
		}
		b || a.preventDefault();
		uu(c, d)
	} else if (I(this.K.A.A[OZa(this.K.A, a)])) {
		c = this.K.A.A[OZa(this.K.A, a)];
		if (c = !c ? m : c(this)) e = p_a(c.type), d = qu.ya(), e = HXa(d, sYa(e)), this.dispatchEvent(c), IXa(d, e);
		b || a.preventDefault()
	}
	40 != a.keyCode && 38 != a.keyCode && nw(this.ea, m)
};

function p_a(a) {
	switch (a) {
		case Isa:
			return [Sk, wd];
		case Bta:
			return [Zsa, wd];
		case qua:
			return [Jta, wd];
		case Rua:
			return [$ua, wd];
		case Ig:
			return [rPa, wd]
	}
	return []
}
F.D1 = function(a) {
	var b = a.identifier.split(s),
		c = b[0],
		d = this.A.Ja(c);
	if (!d) return l;
	if (d.isEnabled()) {
		var e;
		1 < b.length && (e = b[1]);
		c == U.Tm.aa() || c == U.Pm.aa() || c == U.Xm.aa() ? (a = q, this.F.Xd()) : d == U.Ls ? a.target.tagName == jc && this.na[a.target.type] || a.target.tagName == Rc ? a = q : (a = l, d.qb(e, this.Y)) : (a = l, d.qb(e, this.Y));
		return !a
	}
	return q
};
F.setActive = function(a) {
	Ew.M.setActive.call(this, a);
	this.G.setActive(a);
	a || (this.P0 = q)
};
F.O = function() {
	Ew.M.O.call(this);
	delete this.ea;
	O(this.G);
	delete this.G;
	O(this.JF);
	delete this.JF;
	O(this.Dt);
	delete this.Dt
};

function o_a(a, b, c) {
	Ku.call(this, fFa, a);
	this.K = b;
	this.F = c
}
L(o_a, Ku);

function q_a(a, b) {
	this.A = a;
	this.F = b
}
q_a.prototype.C = m;

function r_a(a, b) {
	this.A = a;
	this.G = this.C = new MZa(l);
	this.F = b;
	this.LP(b)
}
F = r_a.prototype;
F.L$ = l;
F.DY = m;
F.yE = 39;
F.xE = 37;
F.LP = function(a) {
	Fw(this, m, 38, this.A.Jja);
	Fw(this, m, 40, this.A.Eja);
	Fw(this, m, this.xE, this.A.a4);
	Fw(this, m, this.yE, this.A.FU);
	Fw(this, m, 36, this.A.c4);
	Fw(this, m, 35, this.A.b4);
	Fw(this, m, 33, this.A.WMa);
	Fw(this, m, 34, this.A.PMa);
	a ? (Fw(this, vj, 38, this.A.Gja), Fw(this, Sd, 38, this.A.Ija), Fw(this, vj, 40, this.A.RMa), Fw(this, Sd, 40, this.A.Fja), Fw(this, vj, this.xE, this.A.Hja), Fw(this, Sd, this.xE, this.A.c4), Fw(this, be, this.xE, this.A.c4), Fw(this, vj, this.yE, this.A.SMa), Fw(this, Sd, this.yE, this.A.b4), Fw(this, be, this.yE,
	this.A.b4), Fw(this, be, 65, this.A.UMa), Fw(this, be, 66, this.A.a4), Fw(this, be, 69, this.A.QMa), Fw(this, be, 70, this.OMa, this), Fw(this, be, 78, this.A.Eja), Fw(this, be, 80, this.A.Jja)) : (Fw(this, be, 38, this.A.Gja), Fw(this, be, 40, this.A.VMa), Fw(this, be, this.xE, this.A.Hja), Fw(this, be, this.yE, this.A.TMa), Fw(this, be, 36, this.A.Ija), Fw(this, be, 35, this.A.Fja))
};
F.OMa = function(a) {
	return a ? this.A.FU(a) : m
};

function Fw(a, b, c, d, e) {
	a.C.A[(b ? b + Ka : r) + NZa(c)] = K(d, e || a.A)
};

function s_a(a, b) {
	r_a.call(this, a, b)
}
L(s_a, r_a);
s_a.prototype.LP = function(a) {
	s_a.M.LP.call(this, a);
	Fw(this, m, 27, this.A.C)
};

function t_a(a, b) {
	tw.call(this, uKa);
	this.keyCode = a;
	this.C = b
}
L(t_a, tw);

function Gw(a, b, c, d, e, g, h, n) {
	this.W = c;
	this.Aa = d;
	this.va = n;
	this.C = [];
	Ew.call(this, b, a, d, g, h, e)
}
L(Gw, Ew);
var u_a = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
F = Gw.prototype;
F.MM = 0;
F.AZ = m;
F.RB = m;
F.k3 = q;
F.BM = m;
F.JR = function(a) {
	this.k3 = l;
	!this.RB && 4 != this.va.A && (this.RB = m_a(a));
	Gw.M.JR.call(this, a);
	this.vb()
};
F.rha = function() {
	return this.Aa.bb() && this.k3
};
F.Lga = function() {
	this.R.A(document, ih, this.iLa);
	if (document.body) {
		this.BM = m_a(document.body);
		this.R.A(this.BM, wk, this.D1);
		for (var a = v_a(this), b = 0; b < a.length; b++) {
			var c = this.A.Ja(a[b]);
			if (c && this.BM) {
				var d = c.dd();
				om(d) || (d = [d]);
				for (var e = 0; e < d.length; e++) l_a(c, d[e], this.BM)
			}
		}
	}
};

function v_a(a) {
	0 == a.C.length && (a.C.push(U.yD.aa()), a.C.push(U.zD.aa()), a.C.push(U.ww.aa()), a.C.push(U.nk.aa()), a.C.push(U.Ls.aa()));
	return a.C
}
F.Vu = function(a) {
	Gw.M.Vu.call(this, a);
	this.RB && this.R.A(this.RB, wk, this.D1)
};
F.wja = function(a, b) {
	this.k3 || f(Error("Must set the editing surface before registering any shortcuts."));
	this.RB && !hn(v_a(this), a) && this.RB.Ke(a, b)
};
F.iLa = function(a) {
	if (27 == a.keyCode && (a = this.A.Ja(zh))) {
		var b = ww(vw(new uw, 2));
		a.qb(k, b)
	}
};
F.mba = function(a) {
	var b = qu.ya(),
		c = tu(b, new Ou(sPa, dFa));
	u_a[this.MM] == a.keyCode ? (this.MM++, this.MM >= u_a.length && (this.dispatchEvent(new tw(mk, {}, this)), this.MM = 0)) : this.MM = 0;
	if (0 == Hs(this.W.A.getSelection()).xa()) Do || this.pE(a);
	else a: {
		switch (a.keyCode) {
			case 46:
			case 8:
				this.dispatchEvent(new tw(cva, m, this));
				break;
			case 38:
			case 40:
			case 37:
			case 39:
				if (!go(jo(), bGa)) break a;
				this.dispatchEvent(new t_a(a.keyCode, a.shiftKey));
				break;
			default:
				break a
		}
		a.preventDefault()
	}
	uu(b, c)
};
F.pE = function(a, b) {
	var c = this.W.ba(),
		d = c.qa(),
		e = qt(this.W.A),
		g = d.ub() - 1,
		c = c.Ra(zj, Us(d, e <= g ? e : g)).wc(),
		d = this.L.A;
	d.L$ != c && (d.L$ = c, d.yE = c ? 39 : 37, d.xE = c ? 37 : 39, c ? d.C = d.G : d.DY ? d.C = d.DY : (d.C = d.DY = new MZa(l), d.LP(d.F)));
	Gw.M.pE.call(this, a, b)
};
F.l1 = function(a) {
	0 == Hs(this.W.A.getSelection()).xa() && Gw.M.l1.call(this, a)
};
F.O = function() {
	O(this.BM);
	O(this.RB);
	Gw.M.O.call(this)
};

function Hw(a, b, c) {
	this.A = b;
	this.F = a;
	this.update(c)
}
L(Hw, bt);
var w_a = Uu({
	Om: qCa,
	hz: uEa,
	iz: wEa
});
F = Hw.prototype;
F.uV = 0;
F.Nd = 0;
F.ut = C("uV");
F.ff = function() {
	return Ru(Pu.ya(), this.ut())
};
F.uw = C(yc);
F.Ve = function() {
	return Ru(Pu.ya(), this.uw())
};
F.xa = C($b);
F.Oc = function(a, b) {
	switch (a) {
		case uEa:
			this.Nd = b;
			break;
		case wEa:
			this.uV = b
	}
};
F.Ga = function(a) {
	switch (a) {
		case qCa:
			return this.F;
		case uEa:
			return this.Nd;
		case wEa:
			return this.uV
	}
	return Hw.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = {};
	a.eo_type = this.F;
	a.i_wth = this.uV;
	a.i_ht = this.Nd;
	return a
};
F.tU = D(qCa);
var x_a = [2, 3, 0];

function Iw(a, b) {
	return !b || b.start != b.end ? m : y_a(a, b.start)
}
function Jw(a, b) {
	if (0 == b.xa()) return y_a(a, b.A());
	var c = a.Fb(b.aa());
	if (!c) return m;
	for (var d = c.F, e = 0; e < x_a.length; e++) if (d.xa() == x_a[e]) return c;
	return m
}
function y_a(a, b) {
	var c = a.Ie(Ug, b);
	if (0 < c.length && (c = a.Fb(c[0]), c.xa() == Ug)) for (var d = c.F, e = 0; e < x_a.length; ++e) if (d.xa() == x_a[e]) return c;
	return m
}
function z_a(a) {
	var b = a.A.getSelection(),
		c = b.Lb,
		d = q;
	Jw(a.ba(), c) && (d = 1 == c.xa() ? l : !! b.A);
	return d
};

function A_a(a) {
	var b = a.clientX;
	a = a.clientY;
	if (Q && !Io(cda)) {
		var c = km.document,
			b = b + (c.documentElement.scrollLeft + c.body.scrollLeft);
		a += c.documentElement.scrollTop + c.body.scrollTop
	} else b += km.pageXOffset, a += km.pageYOffset;
	return new uo(b, a)
}
function Kw(a, b, c, d) {
	b = B_a(a, b);
	return a.Zq(b.x, b.y, c, d)
}
function B_a(a, b) {
	var c = A_a(b),
		d = Lw(a);
	c.x -= d.left;
	c.y -= d.top;
	return c
};

function C_a(a, b) {
	R.call(this, he, a);
	this.A = b
}
L(C_a, YXa);

function Mw(a, b, c) {
	pu.call(this);
	this.ea = a;
	this.A = c;
	this.L = b
}
L(Mw, pu);

function Nw(a, b) {
	var c = a.L.kb();
	if (c != b) {
		if (0 == b && 1 == c) {
			var d = a.A.FI;
			d && a.dispatchEvent(new C_a(a, d))
		}
		1 == c && D_a(a.A).ua(q);
		c = a.L;
		b != c.Fa && (d = c.Fa, c.Fa = b, c.dispatchEvent(new rYa(c, d, b)))
	}
}
Mw.prototype.kb = function() {
	return this.L.kb()
};
Mw.prototype.O = function() {
	Mw.M.O.call(this);
	delete this.ea;
	delete this.A;
	delete this.L
};

function Ow(a, b, c, d, e, g, h, n) {
	Mw.call(this, a, h, c);
	this.C = b;
	this.W = d;
	this.na = e;
	this.K = g;
	this.G = new cq(15);
	this.Y = new Dq(G, 500, this);
	this.F = n;
	Q && (a.$h() ? this.wP() : this.R.A(a, Tg, this.yva))
}
L(Ow, Mw);
var E_a = !(Do && Io(Fca)),
	F_a = xo && Eo,
	G_a = Do && Io($a);
F = Ow.prototype;
F.aJ = m;
F.vx = 0;
F.No = m;
F.YZ = 1;
F.Kp = G;
F.Vu = function() {
	this.R.A(this.G, al, this.NIa)
};
F.JGa = function(a) {
	if (pp(a, 0) || pp(a, 1)) if (!pp(a, 1) || !Eo || !zo)(!a.ctrlKey || !F_a) && this.K.qe(3)
};
F.yva = function() {
	this.wP()
};
F.wP = function() {
	this.R.A(this.ea.If, bj, this.LKa)
};
F.LKa = function() {
	XXa(this.W)
};
F.LGa = function(a) {
	H_a(this, a);
	this.vx = 2;
	this.aJ = a;
	this.Y.start()
};

function H_a(a, b) {
	var c = Kw(a.A, b);
	if (c && 0 == c.xa() && !a.C.ba().jc()) {
		var d = a.No = iYa(a.C.ba().qa(), c),
			c = a.F,
			e = new ws(d.end, l),
			d = new ws(d.start);
		c.A && kYa(c, c.A, e, d, q);
		nw(a.A, m)
	}
	a.K.qe(3);
	b.preventDefault()
}
function I_a(a, b) {
	return !a.ob(b) ? q : 0 == a.xa() && 0 == b.xa() ? a.C == b.C : l
}
F.HGa = function(a) {
	var b = this.kb();
	if (0 != b) {
		var c = qu.ya(),
			d = tu(c, new Ou($d, tk));
		a.preventDefault();
		if ((a = Kw(this.A, a, l, 2 == b || 3 == b || 4 == b)) && 0 == a.xa()) {
			var e = this.C.A.getSelection();
			switch (b) {
				case 2:
					I_a(a, e.Lb) || Mu(this.F, a, l);
					break;
				case 3:
					this.No && lYa(this.F, this.No, a);
					break;
				case 4:
					this.No && oYa(this.F, this.No, a);
					break;
				case 5:
					Nw(this, 1);
				case 1:
					this.na || J_a(this.A, a)
			}
		}
		uu(c, d)
	}
};
F.vga = function(a) {
	pp(a, 0) && (this.G.stop(), Nw(this, 0), E_a && 3 == this.K.kb() && a.preventDefault())
};
F.IGa = function(a) {
	if (pp(a, 0) && (!a.ctrlKey || !F_a)) if (5 == this.kb()) {
		var b = Kw(this.A, a);
		b && Hs(this.C.A.getSelection()) != b && Mu(this.F, b, a.shiftKey)
	} else K_a(this)
};

function K_a(a) {
	var b = a.kb();
	(0 == b || 2 == b || 3 == b || 4 == b) && nw(a.A, m)
}
F.GGa = function(a, b) {
	if (pp(b, 0)) {
		var c = this.A,
			d = B_a(c, b);
		if (c.Ue.clientWidth >= d.x && c.Ue.clientHeight >= d.y) {
			c = this.vx;
			if (this.Y.lc() && this.aJ.clientX == b.clientX && this.aJ.clientY == b.clientY) if (1 == c || 3 == c) H_a(this, b), this.vx = 2;
			else {
				if ((c = Kw(this.A, b)) && 0 == c.xa()) {
					var c = mw(this.C.A),
						d = this.F,
						e = new ws(c.end + 1, l),
						g = new ws(c.start);
					d.A && kYa(d, d.A, e, g, q);
					this.No = c;
					nw(this.A, m)
				}
				this.K.qe(3);
				this.vx = 3
			} else this.vx = 1;
			d = 1 == this.vx ? zua : tk;
			c = qu.ya();
			d = tu(c, new Ou($d, d));
			this.aJ = b;
			this.Y.start();
			nw(this.A, m);
			if (e = Kw(this.A, b)) if (this.W.C && Q && XXa(this.W, e), 0 == e.xa()) {
				var g = this.C.ba(),
					h = this.C.A.getSelection();
				2 == this.vx ? (Nw(this, 3), K_a(this)) : 3 == this.vx ? (Nw(this, 4), K_a(this)) : Ks(h) && SVa(h, e) ? this.na ? Bu(this.C, Ls(e), l, l) : Nw(this, 5) : Jw(g, e) ? (e = e.A(), Bu(this.C, Ms(e, e + 1), l, l)) : (Nw(this, 2), K_a(this), Mu(this.F, e, b.shiftKey))
			} else Bu(this.C, Ls(e), l, l);
			e = this.K;
			e.LA !== m && (e.LA = m);
			this.K.qe(3);
			E_a || b.preventDefault();
			uu(c, d)
		}
		E_a && b.preventDefault()
	}
};
F.Ffa = function(a) {
	var b = this.kb();
	if (0 != b) {
		var c = A_a(a),
			d = this.A,
			e;
		var g = d.ma().Vb();
		g != g.top ? (g = qw(d), e = new Fp(d.RE, g.start - d.C.Fg + d.HA, L_a(d), g.end - g.start)) : e = Lw(d);
		var h = e.left,
			g = e.top,
			n = e.width;
		e = e.height;
		if (c.x > h && c.x < h + n && c.y > g && c.y < g + e) this.G.stop();
		else {
			var h = Lw(d),
				p = h.left,
				t = h.top,
				u = h.width,
				x = h.height,
				h = qu.ya(),
				n = tu(h, new Ou($d, tk)),
				p = Math.min(Math.max(c.x - p, 0), u - 1),
				t = Math.min(Math.max(c.y - t, 0), x - 1);
			c.y < g ? (this.YZ = 1, this.G.start()) : c.y > g + e ? (this.YZ = 2, this.G.start()) : this.G.stop();
			if (c = d.Zq(p,
			t)) d = this.C.A.getSelection(), I_a(c, d.Lb) || (2 == b && !this.G.enabled ? Mu(this.F, c, l) : 0 == c.xa() && (3 == b ? this.No && lYa(this.F, this.No, c) : 4 == b && this.No && oYa(this.F, this.No, c)), a.preventDefault());
			uu(h, n)
		}
	}
};
F.NIa = function() {
	var a = 1 == this.YZ;
	switch (this.kb()) {
		case 1:
			var b = this.A,
				c = b.FI;
			c && 0 == c.xa() && (a = b.Ar(c, a)) && J_a(b, a);
			break;
		case 2:
		case 3:
		case 4:
			b = this.F, c = b.C, a = a ? zZa(c, q) : AZa(c, q), Mu(b, a.A, l)
	}
};
F.FGa = function(a) {
	var b = this.C.A.getSelection();
	if (!a.shiftKey) {
		var c = Kw(this.A, a);
		if (c) if (Ks(b) && SVa(b, c)) {
			var b = c.A(),
				d = this.C.A,
				e = d.getSelection(),
				g = e.A,
				h = e.F,
				e = e.G.concat();
			if (!Cs(new xs(g.A, g.C + 1), c.A())) {
				var n = g;
				if (Cs(new xs(h.A, h.C + 1), c.A())) n = new Ds(h.A, h.C, new ws(h.F.A() == h.C + 1 ? h.A : h.C + 1)), e.push(Es(g));
				else for (c = 0; c < e.length; c++) {
					var p = e[c];
					if (Cs(new xs(p.start, p.end + 1), b)) {
						n = new Ds(p.start, p.end, new ws(p.end + 1));
						pn(e, c);
						ys(Es(g), Es(h)) || e.push(Es(g));
						break
					}
				}
				d.setSelection(Ns(n, h, e), l)
			}
		} else 0 == c.xa() && Nw(this, 0), Mu(this.F, c, q);
		this.vca(a);
		G_a && a.stopPropagation();
		a.preventDefault()
	}
};
F.vca = G;
F.O = function() {
	Ow.M.O.call(this);
	delete this.No;
	delete this.K;
	delete this.aJ;
	delete this.C;
	delete this.W;
	O(this.G);
	delete this.G
};

function Pw(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	Ow.call(this, a, b, e, g, h, n, p, x);
	this.Ma = c;
	this.Aa = t;
	this.va = u;
	this.Ha = !! y;
	this.Ba = B || window.top
}
L(Pw, Ow);
F = Pw.prototype;
F.Vu = function(a) {
	Pw.M.Vu.call(this, a);
	var b = this.R;
	Q && !Io(bb) && b.A(a, ge, this.LGa);
	b.A(a, Od, this.JGa).A(a, bj, wm(this.GGa, a)).A(a, fj, this.IGa).A(a, cj, this.HGa).A(this.Aa.sb(), cj, this.Ffa).A(this.Aa.sb(), fj, this.vga);
	this.Ha && b.A(this.Ba.document, cj, this.MGa).A(this.Ba.document, fj, this.vga);
	var c = this.va;
	if (4 == c.A || 3 == c.A) b.A(a, Wd, this.FGa), (a = this.Ma && Ko().N(ve)) && b.A(a, Wd, this.KGa)
};
F.wP = function() {
	Pw.M.wP.call(this);
	this.R.A(this.ea.Bo, Wd, this.kJa)
};
F.MGa = function(a) {
	var b = this.A,
		c = Op(window.frameElement);
	a.clientY -= c.y;
	a.clientX -= c.x;
	b.Y && (a.clientY += b.Y.Fg, a.clientX += b.Y.nr);
	this.Ffa(a)
};
F.KGa = function(a) {
	G_a && a.stopPropagation();
	a.shiftKey || a.preventDefault()
};
F.vca = function(a) {
	var b = ww(vw(new uw, 7));
	U.Aq.qb(new uo(a.clientX, a.clientY), b)
};
F.kJa = function(a) {
	if (!a.shiftKey) {
		var b = ww(vw(new uw, 7));
		U.qt.qb(k, b);
		a.preventDefault()
	}
};

function M_a(a) {
	this.A = a
}
M_a.prototype.ut = function() {
	return N_a(this.A.hf())
};

function Qw(a) {
	a = a.A.hf();
	return N_a(a) - a.hw - a.jw
}
M_a.prototype.uw = function() {
	return O_a(this.A.hf())
};

function P_a(a, b, c, d, e) {
	Mw.call(this, a, c, d);
	this.C = b;
	this.F = e
}
L(P_a, Mw);
F = P_a.prototype;
F.fM = 0;
F.vR = q;
F.aG = 0;
F.xLa = function() {
	this.St && this.Kp()
};
F.Kp = function() {
	if (Zq) {
		var a = this.R;
		if (this.A.bb()) {
			var b = this.A.Ue;
			a.A(b, fl, this.vLa).A(b, el, this.uLa).A(b, [dl, gPa], this.tLa).A(b, Od, this.wLa)
		} else a.A(this.A, ZPa, this.xLa)
	}
};
F.vLa = function(a) {
	var b = a.Mc;
	this.fM = b.touches.length;
	this.vR = q;
	1 < this.fM ? (Nw(this, 2), Q_a(this, b.touches), a.preventDefault()) : (Nw(this, 6), this.aG = eq(K(this.PTa, this, b.touches[0]), 1200, this))
};
F.uLa = function(a) {
	2 == this.kb() && Q_a(this, a.Mc.touches);
	fq(this.aG);
	this.aG = 0
};
F.tLa = function(a) {
	this.fM -= a.Mc.changedTouches.length;
	a = this.kb();
	var b = this.C.A.getSelection();
	switch (a) {
		case 2:
			0 == this.fM && (Nw(this, 0), Rw(this.A, b.Lb));
			break;
		case 6:
			fq(this.aG), this.aG = 0, this.vR && Rw(this.A, b.Lb), Nw(this, 0)
	}
};
F.wLa = function(a) {
	this.vR ? (this.F.qe(3), a.preventDefault()) : ((a = Kw(this.A, a)) && Bu(this.C, Ls(a), l, l), this.F.qe(3))
};
F.PTa = function(a) {
	if (0 < this.aG && (a = Kw(this.A, a)) && 0 == a.xa()) this.C.ba().jc() || (a = iYa(this.C.ba().qa(), a), Bu(this.C, Ms(a.end, a.start), l, q)), this.vR = l
};

function Q_a(a, b) {
	if (!(2 > b.length)) {
		var c = Kw(a.A, b[0]);
		if (c) {
			var d = Kw(a.A, b[1]);
			if (d) {
				var e = a.C;
				(0 != c.xa() || 0 != d.xa()) && f(Error("Inline locations expected."));
				var g = c.A(),
					d = d.A(),
					c = g == d ? new Gs(c) : new Gs(c, new Ds(Math.min(g, d), Math.max(g, d) - 1, c));
				Bu(e, c, l, q)
			}
		}
	}
};

function R_a(a, b, c, d, e, g, h, n, p, t, u, x, y, B, E, H, J, $, V, ca, ia) {
	pu.call(this);
	this.va = a;
	this.Ma = m;
	this.Y = b;
	this.Aa = c;
	this.Ha = d;
	this.C = e;
	this.A = y;
	this.ra = g;
	this.W = h;
	this.G = n;
	this.na = $;
	this.F = p;
	this.Ba = t;
	this.K = u;
	this.Na = x;
	this.L = B;
	this.yb = J;
	this.Ta = V;
	this.ib = new Gq(this);
	this.ea = ca;
	this.Wb = ia;
	(this.uD || (this.uD = new S(this))).A(ca, [kg, Zf], this.fta)
}
L(R_a, pu);
var S_a = [ZMa, tk];
F = R_a.prototype;
F.e$ = m;
F.Uz = m;
F.aZ = q;
F.e5 = m;
F.Cw = m;
F.WZ = m;
F.YX = m;
F.vb = function() {
	T_a(this)
};
F.IEa = function() {
	!this.Cw && (this.Ma && this.W && this.W.ok) && ts(ps.ya(), Gi, this.nRa, this)
};
F.nRa = function() {
	this.W && this.W.ok && (this.Cw = new(qs(Gi).wf.F())(this.va.ea, this.W.ok, this.C, this.G, this.Ta), this.Ma.Cq(28, this.Cw), U_a(this), this.K.Dt = this.Cw.Mz)
};

function V_a(a) {
	return a.F ? a.F.L : a.Ba.L
}
F.fta = function() {
	T_a(this)
};

function T_a(a) {
	var b = Mr(a.ea) || Nr(a.ea);
	a.A.Ca(b);
	a.A.s3 = b
}
F.Ona = function(a) {
	a ? (go(jo(), Qf) || eVa(this.Y), this.mB(U.Pm, this.FOa), this.mB(U.Ls, this.GOa), W_a(this, 3 == this.na.kb())) : (Hq(this.ib), this.aZ = q);
	this.K.setActive(a);
	this.Uz && this.Uz.setActive(a);
	this.Ba ? this.Ba.setActive(a) : this.F && this.F.setActive(a)
};

function X_a(a) {
	if (!a.aZ) {
		var b = a.R;
		b.A(a.C, Lf, a.Nxa).A(a.na, Ik, a.Mxa);
		var c = a.K;
		a.L || b.A(c, Ig, a.hba).A(c, Rua, a.Kxa).A(c, Bta, a.gba).A(a.Na, HEa, a.Lxa);
		c.setActive(l);
		a.F && a.F.setActive(l);
		a.aZ = l
	}
}

function U_a(a) {
	if (!a.L && a.Cw) {
		var b = a.Cw.vd;
		a.R.A(b, Ig, a.hba).A(b, Bta, a.gba).A(b, yua, a.SJa)
	}
}
F.Kp = function() {
	X_a(this);
	U_a(this);
	var a = this.R;
	a.A(this.Ha, Yd, this.TIa);
	this.va.Tv && a.A(this.K, mk, this.UIa);
	this.WZ && Y_a(this);
	this.YX && Z_a(this)
};

function Y_a(a) {
	a.WZ || f(Error("Should not call addListenersForAppModule_ until the app module is setup."));
	var b = a.Y,
		c = a.R;
	a.mB(U.Uh, G);
	a.mB(U.Bf, G);
	if (!a.L) {
		var d = a.ra,
			e = a.W;
		e && c.A(e, ck, ju(d, a.KBa, a));
		a.mB(b.Ja(zh), G);
		a.mB(U.Ks, a.OBa);
		a.mB(U.Rm, a.PBa)
	}
	b = a.K;
	a.L || (c.A(b, cva, a.LBa).A(b, qua, a.JBa).A(b, Isa, a.IBa).A(b, uKa, a.NBa), a.F && c.A(a.F, he, a.MBa))
}

function Z_a(a) {
	a.YX || f(Error("Should not call addListenersForTertiaryModule_ until the tertiary module is setup."));
	a.Uz && !a.L && a.R.A(a.Uz, bCa, a.UJa)
}
F.mB = function(a, b, c) {
	var d = a,
		e = b,
		g = tn(arguments, 2);
	d ? (g.unshift(e, this), e = K.apply(m, g), e = K(this.PRa, this, l, e), e = ju(this.ra, e, this), this.ib.$a(d, v, e)) : this.ra.log(Error(gfa + e))
};
F.PRa = function(a, b, c) {
	a && this.na.qe(3);
	b(c)
};
F.KBa = function() {
	this.G.Me()
};
F.Nxa = function(a) {
	this.L && a.A && W_a(this, l)
};
F.Mxa = function(a) {
	W_a(this, 3 == a.state)
};

function W_a(a, b) {
	if (b && a.L && !Ks(a.C.A.getSelection())) a.Aa.setActive(q);
	else {
		var c = a.Aa;
		c.setActive(b);
		b ? iu(c) : !Q && c.i1 && c.If.blur()
	}
}
F.FOa = function() {
	sXa(this.Ha, Ob, Ht())
};
F.TIa = function() {
	iu(this.Aa);
	this.Aa.clear();
	U.AD.qb()
};

function Sw(a) {
	a.e5 || (a.e5 = new M_a(a.C.ba()));
	return a.e5
}
function $_a(a, b) {
	a.WZ = b;
	a.St && Y_a(a);
	a.G.Ue ? a.vha() : a.R.A(a.G, ZPa, a.vha)
}
F.Kxa = function(a) {
	this.A.execute(Me, new xYa(a.C, a.A))
};
F.LBa = function() {
	this.A.execute(QFa, {})
};
F.gba = function(a) {
	this.A.execute(Je, new vYa(a.A, a.C, this.G))
};
F.NBa = function(a) {
	var b = {};
	b.penk = a.keyCode;
	b.peni = a.C;
	this.Y.Ja(vKa).qb(b)
};
F.SJa = function(a) {
	this.A.execute(Le, this.Cw.sNa(a))
};
F.JBa = function() {
	var a = new wYa(Qw(Sw(this)));
	this.A.execute(Ke, a)
};

function a0a(a, b, c) {
	var d = a.C.ba().qa(),
		e = c ? b : yt(d, b) + 1;
	b = c ? zt(d, b) : b;
	Bu(a.C, Ms(e, b), l, l, c ? IOa : JOa)
}
F.IBa = function(a) {
	var b = a.A;
	if (!zv(this.C.ba(), qt(this.C.A)) && ot(this.C)) if (b) switch (a = this.C.ba().qa(), b = Tw(this.C.A), b = yt(a, b), Ts(a, b - 1)) {
		case ja:
			Ts(a, b - 2) != ga && a0a(this, b - 2, q);
			break;
		case da:
			a0a(this, b - 1, q)
	} else {
		b = this.C.ba();
		a = b.qa();
		var c = this.C.A.getSelection(),
			d = c.A,
			b = d ? d.C : Nu(b, c.Lb),
			b = zt(a, b);
		switch (Ts(a, b + 1)) {
			case ha:
				this.A.execute(Jh, {
					tblRA: q
				});
				break;
			case ja:
				a0a(this, b + 3, l);
				break;
			case na:
				a0a(this, b + 2, l)
		}
	} else a = new uYa(a.A, Qw(Sw(this)), this.G), this.A.execute(Ie, a)
};
F.hba = function(a) {
	this.A.execute(Pe, new zYa(a.A))
};
F.UIa = function() {
	var a = this.G;
	P(a.N(), sFa);
	KRa(a.N(), rFa)
};
F.Lxa = function(a) {
	this.A.execute(eAa, new yYa(a.C, a.A(), a.G))
};
F.MBa = function(a) {
	this.A.execute(Sza, new tYa(a.A, this.Wb, this.e$))
};
F.UJa = function(a) {
	var b = {};
	b.pstDocSl = new gw(a.A.ch, []);
	this.Y.Ja(YGa).qb(b)
};
F.GOa = function() {
	var a = qu.ya(),
		b = HXa(a, sYa(S_a)),
		c = this.C,
		d = this.C.ba(),
		e = qt(c.A),
		g = d.qa(),
		d = d.qa().ub() - 1,
		d = e > d ? d : Vs(g, e);
	Bu(c, Ms(d + 1, Ss(g, e) + 1), l, q, KOa);
	IXa(a, b)
};
F.PBa = function() {
	var a = qu.ya(),
		b = tu(a, new Ou($d, BPa)),
		c = this.A.A,
		d;
	d = c.A;
	if (0 == d.A.length) d = m;
	else {
		d.HP = q;
		var e = b0a(d, d.A);
		e ? (d.F && (d.ii += e.F), d.C.unshift(e), d = e) : d = m
	}
	d && c0a(c, Uw(d.G), d.Y, new d0a(l, d.K), d.A);
	uu(a, b)
};
F.OBa = function() {
	var a = qu.ya(),
		b = tu(a, new Ou($d, nMa)),
		c = this.A.A,
		d;
	a: {
		d = c.A;
		if (0 != d.C.length) {
			var e = b0a(d, d.C);
			if (e) {
				d.F && (d.ii += e.F);
				d.A.unshift(e);
				d = e;
				break a
			}
		}
		d = !d.C.length && d.HP ? d.I$ : m
	}
	if (d) if (d instanceof e0a) c.apply(d.A(), d.C);
	else {
		for (var e = d.C, g = [], h = 0, n; n = e[h]; h++) n.dca() && g.push(n);
		c0a(c, Uw(g), d.L, new d0a(q, d.K), d.A)
	}
	uu(a, b)
};
F.vha = function() {
	var a = this.G.Ue;
	if (a) {
		var b = this.Ha;
		Eo && zo && (b.uA || (b.uA = ju(b.ra, b.wOa, b)), b.fx && b.fx.removeEventListener(Aj, b.uA, q), b.fx = a, b.fx && b.fx.addEventListener(Aj, b.uA, q));
		this.K.JR(a);
		this.F && this.F.JR(a)
	}
};
F.O = function() {
	O(this.A);
	R_a.M.O.call(this);
	O(this.F);
	O(this.K);
	O(this.Na);
	O(this.Uz);
	O(this.Ba);
	O(this.ib);
	O(this.Cw)
};

function f0a(a, b, c, d, e, g, h, n, p, t, u, x, y, B, E, H, J, $) {
	var V = n.Q.F,
		ca = new RXa(n.Q.G, c, n, n.Q.F);
	ca.F = n.Q.A;
	Vw(V, Ve)[bf] = ca;
	var V = new FZa(e, g, n),
		ia;
	ia = new s_a(V, xo);
	ia = new q_a(ia, y);
	ia.C = e;
	ia.A.A.Kj = e;
	var ua = new PZa(xo);
	ia = new Gw(b, c, e, n, ca, ia, ua, a);
	ua = new qYa(0);
	V = new Lu(V, y);
	V.A = e;
	Zq && !a.Ma ? (y = new P_a(c, e, ua, n, x), t = m) : (y = m, t = new Pw(c, e, h, 0, n, ca, p, x, ua, t, a, V, $));
	a = new R_a(a, b, c, d, e, g, h, n, t, y, ia, ca, H, p, 0, 0, u, x, B, E, J);
	a.vb();
	return a
};

function Ww() {
	this.A = {};
	this.C = {}
}
L(Ww, M);

function g0a(a, b, c) {
	var d = c.ba(),
		e;
	e = Ts(d.qa(), b);
	if (a.C[e]) {
		var g = a.A[vm(d)];
		e = !! g && !! g[e]
	} else e = q;
	return !e ? m : (d = (a = a.A[vm(d)]) ? a[Ts(d.qa(), b)] : m) && d.A(b, c)
}
Ww.prototype.register = function(a, b, c) {
	a = vm(a);
	this.A[a] || (this.A[a] = {});
	this.A[a][c] = b;
	this.C[c] = l
};
Ww.prototype.O = function() {
	delete this.A;
	delete this.C;
	Ww.M.O.call(this)
};

function h0a() {
	this.A = []
}
function i0a(a, b, c) {
	var d = {};
	d.element = b;
	d.tu = c;
	An(a.A, d, j0a)
}
function j0a(a, b) {
	return wn(a.tu, b.tu)
};

function Xw() {
	this.A = {}
}
L(Xw, M);
Xw.prototype.Ye = function(a, b) {
	return 0 < k0a(this, a, b).length
};

function k0a(a, b, c) {
	a = a.A[vm(c)];
	var d = [];
	if (!a) return d;
	for (var e = a.A.length, g = 0; g < e; g++) {
		var h = a.A[g].element;
		h.Ye(b, c) && d.push(h)
	}
	return d
}
Xw.prototype.register = function(a, b, c) {
	a = vm(a);
	this.A[a] || (this.A[a] = new h0a);
	i0a(this.A[a], b, c)
};
Xw.prototype.O = function() {
	Xw.M.O.call(this);
	delete this.A
};

function Yw(a) {
	this.A = a
}
L(Yw, M);
var l0a = new Ww,
	Zw = new Xw;

function $w(a, b, c) {
	l0a.register(a.A.ba(), b, c)
}
Yw.prototype.O = function() {
	Yw.M.O.call(this);
	delete this.A
};

function ax() {}
L(ax, M);
F = ax.prototype;
F.vb = function(a, b, c, d, e, g, h, n, p, t, u) {
	if (go(jo(), Qf)) this.Se(a, b), this.K2(a, b), this.Fm(a), this.lj(a);
	else {
		switch (c) {
			case 4:
				this.Se(a, b);
			case 3:
				this.K2(a, b)
		}
		this.Fm(a)
	}
	this.dv(d);
	this.LT(e, g, n);
	this.OT(e, n);
	this.wG(e, new Yw(e.A));
	this.KT(e.F);
	this.$n(e, h);
	this.L2(p);
	this.NT(t);
	this.MT(u);
	this.CM()
};
F.CM = G;
F.LT = G;
F.OT = G;
F.wG = G;
F.Fm = G;
F.K2 = G;
F.Se = G;
F.dv = G;
F.KT = G;
F.$n = G;
F.L2 = G;
F.NT = G;
F.MT = G;
F.lj = G;

function m0a(a, b) {
	Qn(n0a, a[0]) || f(Error("The keyPath should contain a valid type in its first field."));
	this.A = a;
	this.Fa = b
}
var n0a = {
	R6a: Pk
};
m0a.prototype.kb = C(ac);
m0a.prototype.xa = function() {
	return this.A[0]
};

function bx(a, b, c) {
	m0a.call(this, a, b);
	a[0] != Pk && f(Error("SyncMap constructed with wrong type."));
	this.C = c
}
L(bx, m0a);
bx.prototype.get = function(a) {
	return this.C[a]
};
bx.prototype.set = function(a, b) {
	this.C[a] = b
};
bx.prototype.W = C(Jb);

function cx() {
	this.A = m
}
L(cx, bq);

function dx(a, b) {
	this.A = a;
	this.C = b
}
dx.prototype.getName = C(Eb);

function ex(a, b, c) {
	R.call(this, $g, a);
	this.A = b;
	this.C = c
}
L(ex, R);

function fx(a, b, c) {
	this.A = m;
	this.F = a;
	this.Fc = !! b;
	this.C = c || m;
	c && (c.$a(v, this.Aca, this), c.Yc(this.Fc))
}
L(fx, cx);
F = fx.prototype;
F.Aca = function() {
	this.Cb(!this.Fc)
};
F.Cb = function(a) {
	o0a(this, a);
	this.dispatchEvent(new ex(this, new dx(this.F, a), this.A))
};

function o0a(a, b) {
	a.Fc != b && (a.Fc = b, a.C && a.C.Yc( !! b), a.dispatchEvent(nta))
}
F.Ga = C("Fc");
F.update = function(a) {
	rm(a) && o0a(this, a)
};
F.Hu = function(a) {
	o0a(this, a.get(El))
};
F.O = function() {
	fx.M.O.call(this);
	this.C && this.C.cg(v, this.Aca, this);
	delete this.C
};

function gx(a, b) {
	this.A = b
}
L(gx, ax);
gx.prototype.F = m;
gx.prototype.Se = function(a) {
	a.gb(lFa, r, 687);
	a.gb(mh, r, 689);
	a.gb(lh, r, 688);
	a.gb(TFa, r, 182);
	a.gb(QIa, r, 304);
	a.gb(nIa, nna, 270, Moa, k, k, k, k, k, k, k, function(a) {
		var c = new pr;
		sm(a) && (c.Ua[4] = a);
		return c
	});
	this.A && (this.F = a.gb(AIa, opa, 280, opa, k, k, k, k, k, k, k, k, k, MEa))
};
gx.prototype.dv = function(a) {
	this.A && hx(a, new fx(CIa, l, this.F), CIa)
};

function p0a() {
	this.A = m
}
L(p0a, cx);
F = p0a.prototype;
F.Ri = m;
F.Rw = l;
F.Qw = l;
F.Pw = l;
F.GE = l;

function q0a(a, b) {
	a.Pw = b;
	a.dispatchEvent(XNa)
}
function ix(a, b, c, d) {
	var e = {};
	e.acSRKey = b.toLowerCase();
	e.acSRValue = c.toLowerCase();
	e.acSREnabled = d;
	a.Ri[b] = e
}
F.update = function(a) {
	if (om(a)) {
		var b = sm(a[1]) ? !! a[1] : this.Qw,
			c = sm(a[2]) ? !! a[2] : this.Rw,
			d = sm(a[3]) ? !! a[3] : this.Pw;
		a = a[4];
		a = om(a) ? a : m;
		r0a(this, b, c, d, a)
	}
};
F.Hu = function(a) {
	var b = a.get(KMa);
	if (om(b)) {
		for (var c = [], d = 0; d < b.length; d++) {
			var e = {};
			e[1] = b[d].key;
			e[2] = b[d].replacement;
			e[3] = Number(b[d].enabled);
			c.push(e)
		}
		r0a(this, !! a.get(Ksa), !! a.get(Lsa), !! a.get(mCa), c)
	}
};

function r0a(a, b, c, d, e) {
	b = !! b;
	a.Qw != b && (a.Qw = b, a.dispatchEvent(nJa));
	c = !! c;
	a.Rw != c && (a.Rw = c, a.dispatchEvent(FNa));
	d = !! d;
	a.Pw != d && q0a(a, d);
	if (e) {
		a.GE = q;
		a.Ri || (a.Ri = {});
		for (d = 0; d < e.length; d++) {
			var g = e[d];
			um(g) && (c = g[1], qm(c) && c != Yra && (b = g[2], qm(b) && (g = g[3], sm(g) && ix(a, c, b, !! g))))
		}
		a.dispatchEvent(YNa)
	} else a.Ri || (a.Ri = {}, ix(a, tba, uQa, l), ix(a, vba, vQa, l), ix(a, $Oa, BQa, l), ix(a, Eta, AQa, l), ix(a, Ra, Yl, l), ix(a, Gca, xQa, l), ix(a, Hca, CQa, l), ix(a, Ica, wQa, l), ix(a, Jca, EQa, l), ix(a, Kca, IQa, l), ix(a, Lca, KQa, l), ix(a, Pca,
	DQa, l), ix(a, Rca, yQa, l), ix(a, Qca, FQa, l), ix(a, Sca, GQa, l), ix(a, Uca, HQa, l), ix(a, Wca, JQa, l), ix(a, Tca, LQa, l), ix(a, Xca, MQa, l), ix(a, bda, NQa, l), ix(a, xda, OQa, l), ix(a, Cda, QQa, l), ix(a, Dda, SQa, l), ix(a, Oda, RQa, l), ix(a, Dba, PQa, l), a.dispatchEvent(YNa))
};

function jx(a) {
	this.F = a;
	this.A = new p0a
}
L(jx, ax);
jx.prototype.Se = function(a) {
	this.F && a.gb(ZAa, r, 122)
};
jx.prototype.dv = function(a) {
	hx(a, this.A, kh)
};
jx.prototype.O = function() {
	jx.M.O.call(this);
	O(this.A)
};

function s0a(a) {
	this.C = a
}
s0a.prototype.A = function(a, b) {
	return this.Ye(a, b.ba()) ? this.F(a, b) : m
};

function kx(a) {
	this.Xa = a
}
L(kx, M);
kx.prototype.A = m;
kx.prototype.xc = function(a, b) {
	a = Math.round(a);
	b = Math.round(b);
	if (!this.A || !(this.A.x == a && this.A.y == b)) t0a(this, a, b), Mp(this.Xa, a, b)
};

function t0a(a, b, c) {
	a.A ? (a.A.x = b, a.A.y = c) : a.A = new uo(b, c)
}
kx.prototype.O = function() {
	kx.M.O.call(this);
	delete this.A;
	delete this.Xa
};

function lx(a) {
	pq.call(this, a.ma());
	this.Q = a
}
L(lx, pq);
F = lx.prototype;
F.V6 = l;
F.Yn = m;
F.xc = function(a, b) {
	this.Yn && this.Yn.xc(a, b)
};
F.za = function() {
	lx.M.za.call(this);
	this.Yn = new kx(this.N())
};

function rw(a) {
	return a.Yn ? a.Yn.A ? a.Yn.A.x : 0 : 0
}
function sw(a) {
	return a.Yn ? a.Yn.A ? a.Yn.A.y : 0 : 0
}
F.Wa = function() {
	return this.V6 && this.bb()
};
F.ua = function(a) {
	this.N() && a != this.V6 && (this.N().style.display = a ? r : lj, this.V6 = a)
};
F.O = function() {
	lx.M.O.call(this);
	O(this.Yn)
};

function mx(a) {
	lx.call(this, a)
}
L(mx, lx);
mx.prototype.L_ = D(m);
mx.prototype.Eca = function() {
	return []
};

function nx(a) {
	lx.call(this, a)
}
L(nx, mx);
F = nx.prototype;
F.f6 = 1;
F.sc = m;
F.Ana = D(m);
F.uma = G;
F.Eg = function() {
	if (!this.sc) {
		var a = this.Q.ba().Ra(Wk, this.f6).La(),
			b = this.Q.na;
		this.uma(a);
		this.sc = b ? b.UI(a) : a
	}
	return this.sc
};
F.vb = im("f6");
F.ha = function() {
	var a = this.ma().ha(Mc, this.Ana(), this.HV());
	this.Sb(a)
};
F.Df = function() {
	return ox(this.Q.ea, this.Eg(), this.HV())
};
F.bd = D(1);
F.WR = function() {
	return new ws(0)
};

function u0a(a, b) {
	lx.call(this, a);
	this.A = String(b)
}
L(u0a, nx);
u0a.prototype.HV = C(Eb);

function px(a, b, c) {
	this.C = a;
	this.G = b;
	this.K = c;
	(new S(this)).A(this.G.$m().yf(), ZKa, this.L)
}
L(px, s0a);
px.prototype.F = function(a, b) {
	return new u0a(b, this.G.$m().Kq())
};
px.prototype.Ye = function(a, b) {
	return Ts(b.qa(), a) == $l
};
px.prototype.L = function() {
	for (var a = this.K.A($l), b = [], c = 0; c < a.length; c++) b.push(new xs(a[c], a[c]));
	v0a(this.C, b)
};

function qx(a) {
	lx.call(this, a)
}
L(qx, nx);
qx.prototype.A = r;
qx.prototype.HV = C(Eb);
qx.prototype.vb = function(a, b, c) {
	qx.M.vb.call(this, a, b, c);
	this.A = String(c)
};

function rx(a) {
	this.C = a
}
L(rx, s0a);
rx.prototype.F = function(a, b) {
	return new qx(b)
};
rx.prototype.Ye = function(a, b) {
	return Ts(b.qa(), a) == Zl
};

function w0a(a) {
	this.A = a
}
L(w0a, ax);
w0a.prototype.wG = function(a, b) {
	$w(b, new rx(a.L), Zl);
	this.A.$m() ? $w(b, new px(a.L, this.A, a.ba().qa()), $l) : a.ra.log(Error(kna))
};
w0a.prototype.Se = function(a) {
	a.gb(VGa, nfa, 224, nfa, k, k, k, k, k, k, k, k, ska, YKa);
	a.gb(WGa, Fqa, 225, Fqa, k, k, k, k, k, k, k, k, tka, YKa);
	a.gb(XGa, ina, 226, ina);
	a.gb(UGa, hna, 223, hna, k, k, k, k, k, k, k, k, rka, wKa)
};

function sx() {
	this.A = x0a;
	this.F = []
}
L(sx, bt);
var x0a = Uu({
	ZYa: de
});
F = sx.prototype;
F.La = function() {
	var a = new sx;
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.F = [];
	for (var b = 0; b < this.F.length; b++) a.F[b] = this.ama(this.F[b])
};
F.zc = C($b);
F.Ga = function(a) {
	switch (a) {
		case de:
			return this.F
	}
};
F.ce = function(a) {
	a = a || 1;
	if (1 == a) return this.F.concat();
	for (var b = [], c = 0; c < this.F.length; c++) b.push(this.F[c].ce(a - 1));
	return b
};
F.wg = function(a) {
	for (var b in a) switch (b) {
		case de:
			return y0a(this, a[b])
	}
	return q
};
F.Oc = function(a, b) {
	switch (a) {
		case de:
			var c = b.opIndex,
				d = b.opValue;
			switch (b.op) {
				case le:
					pn(this.F, c);
					break;
				case Wg:
					var e = this.BV(d);
					mn(this.F, e, c);
					break;
				case ak:
					c < this.F.length && this.F[c].update(d);
					break;
				case uk:
					kn(this.F);
					for (c = 0; c < d.length; c++) e = this.BV(d[c]), this.F.push(e)
			}
	}
};
F.Pa = function() {
	var a = Ym(this.F, this.A2, this);
	return tx(uk, k, a)
};

function y0a(a, b) {
	var c = b.opIndex,
		d = b.opValue;
	switch (b.op) {
		case le:
		case Wg:
			return q;
		case ak:
			return a.F[c].wg(d);
		case uk:
			c = a.F;
			if (d.length != c.length) return q;
			for (var e = 0; e < c.length; e++) if (!a.Yla(c[e], d[e])) return q;
			return l;
		default:
			return q
	}
}
F.Yla = function(a, b) {
	return a == this.BV(b)
};
F.BV = gm();
F.A2 = gm();
F.ama = gm();

function tx(a, b, c) {
	var d = {};
	d.op = a;
	b != m && (d.opIndex = b);
	c != m && (d.opValue = c);
	a = {};
	a.cv = d;
	return a
}
function ux(a, b) {
	return tx(Wg, a, b)
}

function z0a(a, b) {
	for (var c = om(a) ? a : [a], d = c.length - 1; 0 <= d; d--) b = tx(ak, c[d], b);
	return b
}
function vx(a) {
	return tx(le, a)
};

function wx(a) {
	sx.call(this);
	this.G = a
}
L(wx, sx);
F = wx.prototype;
F.La = function() {
	var a = new wx(this.G);
	this.ke(a);
	return a
};
F.Yla = function(a, b) {
	return a.wg(b)
};
F.BV = function(a) {
	return this.G(a)
};
F.A2 = function(a) {
	return a.Pa()
};
F.ama = function(a) {
	return a.La()
};

function xx(a) {
	et.call(this, zj, A0a);
	this.K = new wx(GYa);
	this.F = B0a;
	a && this.update(a)
}
L(xx, et);

function yx(a) {
	return KLa + a + $ra
}
var C0a = yx(osa),
	zx = yx("ifl"),
	Ax = yx(EEa),
	Bx = yx("ir"),
	Cx = yx("ls"),
	Dx = yx(kk),
	Ex = yx(lk),
	D0a = {
		ps_al: C0a,
		ps_ifl: zx,
		ps_il: Ax,
		ps_ir: Bx,
		ps_ls: Cx,
		ps_sa: Dx,
		ps_sb: Ex
	}, A0a = new Tu([Mj, MLa, Pj, Qj], D0a),
	E0a = Zn(On(D0a)),
	B0a = l;
F = xx.prototype;
F.Mg = 0;
F.mC = q;
F.eh = 0;
F.Oo = r;
F.re = 0;
F.Lk = q;
F.Ge = 0;
F.Mk = q;
F.Ho = 0;
F.nC = q;
F.At = 1.15;
F.oC = q;
F.Jq = 0;
F.pC = q;
F.Bt = 0;
F.qC = q;
F.eo = function() {
	return [da]
};
F.Yj = D(l);
F.VH = D(l);

function F0a(a) {
	switch (a.Mg) {
		case 1:
			return 1;
		case 3:
			return 3;
		case 0:
			return a.wc() ? 0 : 2;
		case 2:
			return a.wc() ? 2 : 0;
		default:
			return 0
	}
}
F.qk = C("Mg");

function Fx(a) {
	return a.eh
}
F.Qz = function() {
	return Ru(Pu.ya(), this.re)
};
F.vw = function() {
	return Ru(Pu.ya(), this.Ge)
};

function G0a(a) {
	return Ru(Pu.ya(), a.Ho)
}
F.wc = C($b);

function Gx(a) {
	return a.K.zc()
}
F.Cm = function(a) {
	a.mC && (a.Mg = this.Mg, a.mC = q);
	a.nC && (a.Ho = this.Ho, a.nC = q);
	a.Lk && (a.re = this.re, a.Lk = q);
	a.Mk && (a.Ge = this.Ge, a.Mk = q);
	a.oC && (a.At = this.At, a.oC = q);
	a.pC && (a.Jq = this.Jq, a.pC = q);
	a.qC && (a.Bt = this.Bt, a.qC = q);
	a.Qr = 0
};
F.Oc = function(a, b) {
	xx.M.Oc.call(this, a, b);
	switch (a) {
		case LLa:
			this.Mg = b;
			break;
		case C0a:
			this.mC = b;
			break;
		case Mj:
			this.eh = b;
			break;
		case MLa:
			this.Oo = b;
			break;
		case Nj:
			this.re = b;
			break;
		case zx:
			this.Lk = b;
			break;
		case NLa:
			this.Ge = b;
			break;
		case Ax:
			this.Mk = b;
			break;
		case Oj:
			this.Ho = b;
			break;
		case Bx:
			this.nC = b;
			break;
		case OLa:
			this.At = b;
			break;
		case Cx:
			this.oC = b;
			break;
		case Pj:
			this.F = b;
			break;
		case PLa:
			this.Jq = b;
			break;
		case Dx:
			this.pC = b;
			break;
		case QLa:
			this.Bt = b;
			break;
		case Ex:
			this.qC = b;
			break;
		case Qj:
			this.K.update(b)
	}
};
F.Pa = function() {
	return H0a(this)
};
F.Jg = function() {
	return H0a(this, l)
};

function H0a(a, b) {
	var c = {};
	c.ps_al = a.Mg;
	c.ps_hd = a.eh;
	c.ps_hdid = a.Oo;
	c.ps_ifl = a.re;
	c.ps_il = a.Ge;
	c.ps_ir = a.Ho;
	c.ps_ltr = a.F;
	c.ps_ls = a.At;
	c.ps_sa = a.Jq;
	c.ps_sb = a.Bt;
	c.ps_ts = a.K.Pa();
	b || (c[C0a] = a.mC, c[zx] = a.Lk, c[Ax] = a.Mk, c[Bx] = a.nC, c[Cx] = a.oC, c[Dx] = a.pC, c[Ex] = a.qC);
	return c
}
F.Ga = function(a) {
	switch (a) {
		case LLa:
			return this.Mg;
		case C0a:
			return this.mC;
		case Mj:
			return this.eh;
		case MLa:
			return this.Oo;
		case Nj:
			return this.re;
		case zx:
			return this.Lk;
		case NLa:
			return this.Ge;
		case Ax:
			return this.Mk;
		case Oj:
			return this.Ho;
		case Bx:
			return this.nC;
		case OLa:
			return this.At;
		case Cx:
			return this.oC;
		case Pj:
			return this.F;
		case PLa:
			return this.Jq;
		case Dx:
			return this.pC;
		case QLa:
			return this.Bt;
		case Ex:
			return this.qC;
		case Qj:
			return this.K
	}
	return xx.M.Ga.call(this, a)
};
F.Tf = function(a) {
	return a == Qj
};
F.La = function() {
	var a = new xx;
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.Mg = this.Mg;
	a.mC = this.mC;
	a.eh = this.eh;
	a.Oo = this.Oo;
	a.Ho = this.Ho;
	a.nC = this.nC;
	a.re = this.re;
	a.Lk = this.Lk;
	a.Ge = this.Ge;
	a.Mk = this.Mk;
	a.At = this.At;
	a.oC = this.oC;
	a.F = this.F;
	a.Jq = this.Jq;
	a.pC = this.pC;
	a.Bt = this.Bt;
	a.qC = this.qC;
	a.K = this.K.La()
};

function Hx(a) {
	return 0 <= a && 6 >= a || 100 == a || 101 == a
}
kt(function() {
	return new xx
});

function I0a(a) {
	var b = new pr,
		c = a.ps_ifl;
	sm(c) && (b.Ua[4] = c);
	a = a.ps_il;
	sm(a) && (b.Ua[5] = a);
	return b
}
function J0a(a) {
	var b = new pr;
	sm(a) && (b.Ua[6] = a);
	return b
}
function Ix(a, b, c, d, e) {
	a.gb(b, r, d, e, k, c).setProperty(ig, l)
}
function K0a(a) {
	var b = new pr;
	sm(a) && (b.Ua[9] = a);
	return b
};

function L0a(a) {
	a: {
		a = a.A;
		var b = Jx(a);
		if (0 == b.length) a = m;
		else {
			for (var c = F0a(a.A.Ra(zj, b[0])), d = 0; d < b.length; d++) {
				var e = F0a(a.A.Ra(zj, b[d]));
				if (c != e) {
					a = m;
					break a
				}
			}
			a = c
		}
	}
	return a
}
function M0a(a) {
	return Kx(a.A, zj).ps_ltr
}
function N0a(a) {
	return Kx(a.A, zj).ps_ls
}
function O0a(a) {
	return (a = P0a(a)) ? uv(a) ? 3 : 0 : m
}
function Q0a(a) {
	return (a = P0a(a)) ? a.$l() : m
}
function R0a(a) {
	return Kx(a.A, zj).ps_hd
}
function P0a(a) {
	var b = Jx(a.A),
		c = m;
	a = a.ba();
	if (cZa(a, b)) {
		var b = a.td(Ri, b[0]),
			d = b.Cc;
		d && (c = a.Fb(d).$f(b.Wc))
	}
	return c
};

function Lx(a) {
	this.C = a ? a.A || a.C : q;
	this.A = a ? a.A : q
}
L(Lx, bq);
Lx.prototype.F = q;
var S0a = RegExp("[\\u05BE\\u05C0\\u05C3\\u05C6\\u05D0-\\u05F4\\u07C0-\\u07EA\\u07F4-\\u07F5\\u07FA-\\u0815\\u081A\\u0824\\u0828\\u0830-\\u083E\\u200F\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB4F\\u0608\\u060B\\u060D\\u061B-\\u064A\\u066D-\\u066F\\u0671-\\u06D5\\u06E5-\\u06E6\\u06EE-\\u06EF\\u06FA-\\u070D\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\uFB50-\\uFD3D\\uFD50-\\uFDFC\\uFE70-\\uFEFC\\u202B\\u202E\\u0600-\\u0603\\u0660-\\u0669\\u066B-\\u066C\\u06DD\\u202A\\u202D\\u202C]"),
	T0a = RegExp("[\\u05BE\\u05C0\\u05C3\\u05C6\\u05D0-\\u05F4\\u07C0-\\u07EA\\u07F4-\\u07F5\\u07FA-\\u0815\\u081A\\u0824\\u0828\\u0830-\\u083E\\u200F\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB4F\\u0608\\u060B\\u060D\\u061B-\\u064A\\u066D-\\u066F\\u0671-\\u06D5\\u06E5-\\u06E6\\u06EE-\\u06EF\\u06FA-\\u070D\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\uFB50-\\uFD3D\\uFD50-\\uFDFC\\uFE70-\\uFEFC\\u202B\\u202E\\u0600-\\u0603\\u0660-\\u0669\\u066B-\\u066C\\u06DD\\u202A\\u202D\\u202C\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DE-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962-\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2-\\u09E3\\u0A01-\\u0A02\\u0A3C\\u0A41-\\u0A51\\u0A70-\\u0A71\\u0A75-\\u0A82\\u0ABC\\u0AC1-\\u0AC8\\u0ACD\\u0AE2-\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D-\\u0B56\\u0B62-\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C56\\u0C62-\\u0C63\\u0CBC\\u0CCC-\\u0CCD\\u0CE2-\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62-\\u0D63\\u0DCA\\u0DD2-\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECD\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86-\\u0F87\\u0F90-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039-\\u103A\\u103D-\\u103E\\u1058-\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085-\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927-\\u1928\\u1932\\u1939-\\u193B\\u1A17-\\u1A18\\u1A56\\u1A58-\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80-\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BA9\\u1C2C-\\u1C33\\u1C36-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA67C-\\uA67D\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA825-\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31-\\uAA32\\uAA35-\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]");
Lx.prototype.La = function() {
	var a = new Lx;
	a.F = this.F;
	a.A = this.A;
	a.C = this.C;
	return a
};

function Mx(a, b, c) {
	this.K = a;
	this.L = b;
	this.A = c;
	this.F = [];
	this.R = new S(this)
}
L(Mx, ax);
Mx.prototype.Se = function(a, b) {
	a.gb(sf, dla, 163, Ooa, Lxa, k, l, q, qBa, k, k, k, k, hva);
	a.gb(tf, noa, 164, Poa, Mxa, k, q, q, qBa, k, k, k, k, hva);
	Er(a, qBa);
	this.F.push(a.gb(FIa, r, 283), a.Ja(tf), a.Ja(sf));
	b.Hx(qBa, M0a)
};
Mx.prototype.CM = function() {
	var a = this.L || this.K || this.A.A;
	U0a(this, a);
	a || this.R.A(this.A, Vd, this.G)
};

function U0a(a, b) {
	for (var c = 0; c < a.F.length; c++) a.F[c].ua(b)
}
Mx.prototype.G = function() {
	if (this.L || this.K || this.A.A) U0a(this, l), this.R.Pb(this.A, Vd, this.G)
};
Mx.prototype.O = function() {
	O(this.R);
	Mx.M.O.call(this)
};

function Nx(a, b, c) {
	this.G = a;
	this.C = b;
	this.F = c || m
}
L(Nx, M);
F = Nx.prototype;
F.gj = m;
F.OK = m;
F.ma = C(Jb);
F.ba = D(m);
F.vg = hm();
F.T2 = function(a) {
	if (this.gj && this.OK && zn(this.OK, a, OXa)) return this.gj;
	this.OK = a;
	this.gj || (this.gj = []);
	var b = a.length;
	if (this.gj.length < b) for (var c = this.gj.length; c < b; c++) {
		var d = this.qy();
		P(d, GGa, BBa);
		this.G && P(d, IGa);
		this.gj.push(d)
	} else this.gj.length > b && (this.gj = tn(this.gj, 0, b));
	for (b = 0; b < this.gj.length; b++) this.gj[b].style.cssText += pb + this.DC(a[b].top, a[b].left, a[b].width, a[b].getHeight());
	return this.gj
};
F.DC = function(a, b, c, d) {
	return Pm(ePa, a, YLa, b, $La, c, Vj, d, Uj)
};
F.qy = function() {
	return this.C.ha(Rb, this.F)
};

function Ox(a, b, c) {
	this.G = a;
	this.F = b;
	this.C = c
}
Ox.prototype.A = function() {
	return new Nx(this.G, this.F, this.C)
};

function Px(a, b, c, d) {
	var e = Ro(Rb, Pm(Axa, s, d ? zxa : JGa, s, a, d ? r : $ba));
	e.innerHTML = Fa;
	a = new Tq(oxa, s, lg, s, d ? r : a);
	if (b) for (d = 0; d < b.length; d++) {
		var g = b[d];
		a.append(s);
		a.append(g)
	}
	b = Ro(Rb, a.toString(), [e]);
	c && (b.title = c);
	return b
};

function V0a(a) {
	Nx.call(this, q, a);
	this.R = new S(this)
}
L(V0a, Nx);
F = V0a.prototype;
F.wda = m;
F.ba = C(Eb);
F.vg = im(Eb);
F.qy = function() {
	var a = this.ma(),
		b = a.ha(Rb),
		c = a.ha(Rb, EGa),
		d = a.ha(Rb, FGa),
		e = Px(DGa);
	this.R.A(c, bj, this.hKa, k, this);
	a.appendChild(b, c);
	a.appendChild(c, d);
	a.appendChild(c, e);
	return b
};
F.hKa = function(a) {
	a.stopPropagation();
	this.wda.C(this.A)
};
F.O = function() {
	O(this.R);
	V0a.M.O.call(this)
};

function W0a(a) {
	this.C = a
}
W0a.prototype.A = function() {
	return new V0a(this.C)
};

function Qx() {}
L(Qx, ax);
Qx.prototype.Se = function(a) {
	a.gb(QGa, ifa, 208, k, k, k, k, k, k, k, k, k, aka, xsa);
	a.gb(RFa, Aha, 176)
};
Qx.prototype.Fm = function(a) {
	Ix(a, kHa, rr([vc, Fb]), 657, fma);
	Ix(a, lHa, rr([Bc, Fb]), 658, kma)
};
Qx.prototype.$n = function(a, b) {
	var c = a.ma();
	Rx(Rx(Rx(b, Qe, new W0a(c)), Re, new Ox(q, c, xFa)), gAa, new Ox(q, c, yFa))
};

function X0a() {}
L(X0a, ax);
X0a.prototype.Se = function(a) {
	a.gb(YGa, r, 366);
	a.gb(Nh, r, 212);
	a.gb(Th, r, 572)
};
X0a.prototype.lj = function(a) {
	a.Ea(U.Tm);
	a.Ea(U.Xm);
	a.Ea(U.Xs);
	a.Ea(U.Fz);
	a.Ea(U.LO);
	a.Ea(U.Az);
	a.Ea(U.hD)
};

function Sx(a) {
	Nx.call(this, l, a, HFa);
	this.A = {
		B1: {},
		PS: {},
		C1: {},
		pfa: {}
	}
}
L(Sx, Nx);
Sx.prototype.vg = function(a) {
	a && (this.A = a, (a = this.gj) && Y0a(this, a))
};
Sx.prototype.ba = C(Eb);

function Y0a(a, b) {
	var c = [],
		d = [];
	Qn(a.A.B1, l) ? d.push(GFa) : c.push(GFa);
	Qn(a.A.PS, l) ? d.push(FFa) : c.push(FFa);
	Qn(a.A.C1, l) ? d.push(IFa) : c.push(IFa);
	Qn(a.A.pfa, l) ? d.push(JFa) : c.push(JFa);
	for (var e = 0, g; g = b[e]; e++) qo(g, c, d)
}
Sx.prototype.T2 = function(a) {
	a = Sx.M.T2.call(this, a);
	Y0a(this, a);
	return a
};

function Tx(a) {
	this.C = a
}
Tx.prototype.A = function() {
	return new Sx(this.C)
};

function Ux(a) {
	pq.call(this, a);
	this.G = []
}
L(Ux, pq);

function Vx(a) {
	Ux.call(this, a);
	this.F = [];
	this.A = {}
}
L(Vx, Ux);
Vx.prototype.Uk = function(a) {
	switch (a.xa()) {
		case Oza:
			var b = a.rb(),
				c = b,
				d = c.getParent();
			if (d) {
				var e = Um(d.F, c),
					g = new pq(d.ma());
				Z0a(d, g, c);
				d.removeChild(c, l);
				d.A[c.aa()] || (d.A[c.aa()] = []);
				d.A[c.aa()].push(e);
				d.F[e] = g;
				c.G.push(d)
			}
			a = a.Aa;
			this.Du(a) == this.N() ? Z0a(this, b, this.F[a]) : (c = b, c.Va(this.Du(a)), c.Hb(), this.Oa(c));
			mn(this.F, b, a);
			$0a(this, a, 1);
			break;
		case jAa:
			b = a.rb();
			if (this == b.getParent()) {
				this.removeChild(b, l);
				if (a = b.G.pop()) c = a1a(a, b.aa()), d = a.F[c], Z0a(a, b, d), a.removeChild(d), d.dispose(), a.F[c] = b;
				a = Um(this.F, b)
			} else on(b.G, this), b = a1a(this, b.aa()), a = this.F[b], this.removeChild(a), a.dispose(), a = b;
			pn(this.F, a);
			$0a(this, a, -1)
	}
};
Vx.prototype.Du = function() {
	return this.N()
};

function Z0a(a, b, c) {
	c = c ? uq(a, c) : a.dc();
	a.Du(c) == a.N() ? a.xf(b, c, l) : (b.Va(a.Du(c)), b.Hb(), a.Oa(b))
}
function a1a(a, b) {
	var c = a.A[b].pop();
	0 == a.A[b].length && delete a.A[b];
	return c
}
function $0a(a, b, c) {
	for (var d in a.A) for (var e = 0; e < a.A[d].length; e++) a.A[d][e] >= b && (a.A[d][e] += c)
};

function Wx(a) {
	Vx.call(this, a)
}
L(Wx, Vx);
Wx.prototype.Uk = function(a) {
	switch (a.xa()) {
		case lAa:
			var b = this.N();
			if (!b) break;
			a.paddingTop !== m && (b.style.paddingTop = a.paddingTop + Sj);
			a.Y !== m && (b.style.paddingRight = a.Y + Sj);
			a.W !== m && (b.style.paddingLeft = a.W + Sj);
			a.L !== m && (b.style.paddingBottom = a.L + Sj);
			break;
		default:
			Wx.M.Uk.call(this, a)
	}
};

function Xx(a) {
	this.C = a
}
Xx.prototype.A = function() {
	return new Wx(this.C)
};

function Yx(a, b, c, d, e, g) {
	this.G = a;
	this.L = b;
	this.W = c;
	this.F = d;
	this.Y = e;
	this.ea = g;
	this.A = {}
}
L(Yx, M);
F = Yx.prototype;
F.aH = m;

function b1a(a) {
	Du(a.L, a.W, [new xs(0, Number.MAX_VALUE)])
}
F.E0 = function(a) {
	return 0 <= this.G.ba().Rc(a)
};
F.vl = D(l);
F.Mn = function(a) {
	for (var b = this.G.ba(), c = [], d = a.start, e = Math.min(b.Ag(this.F, d), a.end); d < a.end;) {
		d > b.qa().ub() - 1 && f(Error("Style start cannot be after the last spacer index."));
		for (var g = Zx(b.Ra(this.F, d)), h = m, n = 0, p; p = g[n]; n++) if (this.A[p] = this.A[p] || [], this.E0(p)) {
			if (h) this.QL(h.rb(), p);
			else {
				var h = p,
					t = Eu(this.Y, this.ea);
				this.QL(t, h);
				h = new yu(new xs(d, e), t);
				c.push(h)
			}
			this.A[p].push(h)
		}
		d = e + 1;
		e = Math.min(b.Ag(this.F, d), a.end)
	}
	return c || []
};
F.QL = function(a, b) {
	var c = a.ba(),
		d = b == this.aH;
	c.PS[b] = d;
	c.B1[b] = !d;
	a.vg(c)
};
F.pF = function(a) {
	if (a != this.aH) {
		var b = this.aH;
		this.aH = m;
		c1a(this, b);
		this.aH = a;
		c1a(this, a)
	}
};

function c1a(a, b) {
	a.A[b] && Wm(a.A[b], function(a, d, e) {
		a.cd() ? pn(e, d) : this.QL(a.rb(), b)
	}, a)
}
F.O = function() {
	for (var a in this.A) for (var b = this.A[a], c = 0; c < b.length; c++) O(b[c]);
	Yx.M.O.call(this)
};

function $x(a, b) {
	lx.call(this, a);
	this.od = b || m
}
L($x, lx);
$x.prototype.getPosition = C(zKa);
$x.prototype.GG = G;
$x.prototype.nU = G;

function d1a(a) {
	this.type = a
};

function e1a(a, b) {
	this.type = 1;
	this.anchor = a;
	this.position = b
}
L(e1a, d1a);

function ay(a, b, c) {
	b = Ss(a.qa(), b);
	return 0 < a.Ie(c, b).length
};

function f1a(a) {
	var b = a.ba();
	a = Tw(a.A);
	return ay(b, a, Td) || ay(b, a, hg)
};

function by() {
	this.A = new Sr;
	this.F = [];
	this.C = [];
	this.G = []
}
L(by, M);
F = by.prototype;
F.QA = m;

function g1a(a, b) {
	return a.top - b.top
}
F.add = function(a, b) {
	var c = this.A.get(a);
	kTa(b, c) || (c ? this.F.push(new xs(c.top, c.top + c.height)) : this.C.push(a), this.A.set(a, b), this.F.push(new xs(b.top, b.top + b.height)), this.QA = m)
};
F.remove = function(a) {
	if (!hn(this.C, a)) {
		var b = this.A.get(a);
		b && (this.F.push(new xs(b.top, b.top + b.height)), this.A.remove(a), this.QA = m)
	}
};
F.shift = function(a, b) {
	for (var c = this.A, d = this.F, e = 0, g; g = a[e]; e++) if (Vr(c, g) && !hn(this.C, g)) {
		var h = this.A.get(g),
			h = h.La();
		h.top += b;
		this.add(g, h)
	}
	g = c.dd();
	for (e = 0; e < g.length; e++) h = g[e], hn(a, h) || (h = c.get(h), d.push(new xs(h.top, h.top + h.height)), d.push(new xs(h.top + b, h.top + h.height + b)))
};

function h1a(a) {
	a.QA || (a.QA = a.A.zc(), xn(a.QA, g1a));
	return a.QA
}
function cy(a) {
	var b = a.F;
	a.F = [];
	return b
}
F.La = function() {
	var a = new by;
	Tr(a.A, this.A);
	a.C = this.C.concat();
	return a
};

function i1a(a, b) {
	var c = new by;
	Tr(c.A, a.A);
	if (go(jo(), Wza)) for (var d = c.A.dd(), e = 0; e < d.length; e++) {
		var g = d[e],
			h = c.A.get(g);
		h && !kTa(h, b.A.get(g)) && c.F.push(new xs(h.top, h.top + h.height));
		c.A.set(g, b.A.get(g))
	} else Tr(c.A, b.A);
	c.C = a.C.concat(b.C);
	return c
}
F.O = function() {
	delete this.A;
	delete this.F;
	delete this.QA;
	delete this.C;
	delete this.G;
	by.M.O.call(this)
};

function dy(a, b, c) {
	this.offset = a;
	this.A = b;
	this.pD = c
};
var j1a = {};

function ey(a) {
	var b = {};
	a = String(a);
	var c = fy(a);
	if (k1a.test(c)) return b.Lh = gy(c), b.type = fEa, b;
	c = l1a(a);
	if (c.length) return b.Lh = hy(c), b.type = EMa, b;
	if (j1a.m8 && (c = j1a.m8[a.toLowerCase()])) return b.Lh = c, b.type = aKa, b;
	f(Error(a + yaa))
}
var m1a = /#(.)(.)(.)/;

function gy(a) {
	k1a.test(a) || f(Error(Ga + a + "' is not a valid hex color"));
	4 == a.length && (a = a.replace(m1a, Xaa));
	return a.toLowerCase()
}

function n1a(a, b, c) {
	a = Number(a);
	b = Number(b);
	c = Number(c);
	(isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && f(Error('"(' + a + La + b + La + c + '") is not a valid RGB color'));
	a = iy(a.toString(16));
	b = iy(b.toString(16));
	c = iy(c.toString(16));
	return va + a + b + c
}
function hy(a) {
	return n1a(a[0], a[1], a[2])
}
var k1a = /^#(?:[0-9a-f]{3}){1,2}$/i,
	o1a = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function l1a(a) {
	var b = a.match(o1a);
	if (b) {
		a = Number(b[1]);
		var c = Number(b[2]),
			b = Number(b[3]);
		if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b) return [a, c, b]
	}
	return []
}
function iy(a) {
	return 1 == a.length ? Xa + a : a
}
function fy(a) {
	return a.charAt(0) == va ? a : va + a
};
var jy = {}, ky = m;

function p1a(a) {
	a = vm(a);
	delete jy[a];
	Rn(jy) && ky && ky.stop()
}
function q1a() {
	ky || (ky = new Dq(function() {
		r1a()
	}, 20));
	var a = ky;
	a.lc() || a.start()
}
function r1a() {
	var a = ym();
	Mn(jy, function(b) {
		s1a(b, a)
	});
	Rn(jy) || q1a()
};

function ly() {
	this.Fa = 0;
	this.K = this.startTime = m
}
L(ly, bq);
ly.prototype.C = function() {
	this.Ij(gta)
};
ly.prototype.F = function() {
	this.Ij(Tf)
};
ly.prototype.Ij = function(a) {
	this.dispatchEvent(a)
};

function my(a, b, c, d) {
	ly.call(this);
	(!om(a) || !om(b)) && f(Error("Start and end parameters must be arrays"));
	a.length != b.length && f(Error("Start and end points must be the same length"));
	this.L = a;
	this.na = b;
	this.duration = c;
	this.Y = d;
	this.A = [];
	this.W = q
}
L(my, ly);
F = my.prototype;
F.ym = 0;
F.play = function(a) {
	if (a || 0 == this.Fa) this.ym = 0, this.A = this.L;
	else if (1 == this.Fa) return q;
	p1a(this);
	this.startTime = a = ym(); - 1 == this.Fa && (this.startTime -= this.duration * this.ym);
	this.K = this.startTime + this.duration;
	this.ym || this.C();
	this.Ij(nLa); - 1 == this.Fa && this.Ij(BMa);
	this.Fa = 1;
	var b = vm(this);
	b in jy || (jy[b] = this);
	q1a();
	s1a(this, a);
	return l
};
F.stop = function(a) {
	p1a(this);
	this.Fa = 0;
	a && (this.ym = 1);
	t1a(this, this.ym);
	this.Ij(Jk);
	this.F()
};
F.O = function() {
	0 == this.Fa || this.stop(q);
	this.Ij(dva);
	my.M.O.call(this)
};

function s1a(a, b) {
	a.ym = (b - a.startTime) / (a.K - a.startTime);
	1 <= a.ym && (a.ym = 1);
	t1a(a, a.ym);
	1 == a.ym ? (a.Fa = 0, p1a(a), a.Ij(cg), a.F()) : 1 == a.Fa && a.B4()
}
function t1a(a, b) {
	tm(a.Y) && (b = a.Y(b));
	a.A = Array(a.L.length);
	for (var c = 0; c < a.L.length; c++) a.A[c] = (a.na[c] - a.L[c]) * b + a.L[c]
}
F.B4 = function() {
	this.Ij(md)
};
F.Ij = function(a) {
	this.dispatchEvent(new u1a(a, this))
};

function u1a(a, b) {
	R.call(this, a);
	this.x = b.A[0];
	this.y = b.A[1];
	this.duration = b.duration;
	this.ym = b.ym;
	this.state = b.Fa
}
L(u1a, R);

function ny(a, b, c, d, e) {
	my.call(this, b, c, d, e);
	this.element = a
}
L(ny, my);
ny.prototype.G = G;
ny.prototype.B4 = function() {
	this.G();
	ny.M.B4.call(this)
};
ny.prototype.F = function() {
	this.G();
	ny.M.F.call(this)
};
ny.prototype.C = function() {
	this.G();
	ny.M.C.call(this)
};

function oy(a, b, c, d, e) {
	(2 != b.length || 2 != c.length) && f(Error(Dpa));
	ny.apply(this, arguments)
}
L(oy, ny);
oy.prototype.G = function() {
	var a;
	if (a = this.W) I(this.ea) || (this.ea = Wp(this.element)), a = this.ea;
	this.element.style[a ? dk : Pi] = Math.round(this.A[0]) + Sj;
	this.element.style.top = Math.round(this.A[1]) + Sj
};

function py(a, b, c, d) {
	var e = [this.W ? yTa(a) : a.offsetLeft, a.offsetTop];
	oy.call(this, a, e, b, c, d)
}
L(py, oy);
py.prototype.C = function() {
	this.L = [this.W ? yTa(this.element) : this.element.offsetLeft, this.element.offsetTop];
	py.M.C.call(this)
};

function qy(a, b, c, d, e) {
	sm(b) && (b = [b]);
	sm(c) && (c = [c]);
	ny.call(this, a, b, c, d, e);
	(1 != b.length || 1 != c.length) && f(Error("Start and end points must be 1D"))
}
L(qy, ny);
qy.prototype.G = function() {
	Tp(this.element, this.A[0])
};
qy.prototype.show = function() {
	this.element.style.display = r
};
qy.prototype.Fk = function() {
	this.element.style.display = lj
};

function ry(a, b, c) {
	qy.call(this, a, 1, 0, b, c)
}
L(ry, qy);
ry.prototype.C = function() {
	this.show();
	ry.M.C.call(this)
};
ry.prototype.F = function() {
	this.Fk();
	ry.M.F.call(this)
};

function sy(a, b, c) {
	qy.call(this, a, 0, 1, b, c)
}
L(sy, qy);
sy.prototype.C = function() {
	this.show();
	sy.M.C.call(this)
};

function v1a(a) {
	return 1 - Math.pow(1 - a, 3)
}
function ty(a) {
	return 3 * a * a - 2 * a * a * a
};

function uy(a, b, c) {
	lx.call(this, a);
	this.C = b;
	this.A = c;
	this.R = new S(this)
}
L(uy, lx);
F = uy.prototype;
F.vT = m;
F.m2 = m;
F.wT = m;
F.e3 = m;
F.z0 = q;
F.tna = q;

function w1a(a) {
	var b = [];
	4 == a.Q.va.A && (a.ma(), a.vT = Px(MGa), b.push(a.vT), a.wT = Px(NGa), b.push(a.wT));
	a.m2 = Px(LGa);
	b.push(a.m2);
	return b
}
F.ha = function() {
	var a = this.ma();
	this.A.N() || this.A.ha();
	var b = a.ha(Rb, k, this.A.N()),
		c = a.ha(Rb, DFa, w1a(this));
	this.e3 = Px(EFa);
	var d = Ru(Pu.ya(), 150),
		a = a.ha(Rb, {
			"class": CFa,
			style: Ll + d + XLa
		}, c, this.e3, b);
	this.Sb(a)
};
F.za = function() {
	uy.M.za.call(this);
	var a = this.Q.ra;
	this.vT && this.R.A(this.vT, Od, ju(a, this.AHa, this));
	this.R.A(this.m2, Od, this.yHa);
	this.wT && this.R.A(this.wT, Od, this.zHa)
};
F.zg = function(a) {
	a != this.z0 && (so(this.N(), WHa, a), this.e3.style.visibility = a ? Gl : tg, this.z0 = a)
};
F.AHa = function() {
	this.ua(q);
	var a = this.Q.C.Ja(SFa);
	if (a) {
		var b = {};
		b.eId = this.C;
		a.qb(b)
	}
};
F.yHa = function() {
	this.ua(q);
	this.dispatchEvent(Pd)
};
F.zHa = function() {
	var a = {};
	a.eId = this.C;
	this.Q.C.Ja(tIa).qb(a)
};

function x1a(a, b, c) {
	var d = 0;
	if (I(b) && I(d) && a.Wa()) if (a.tna || (a.N().style.display = r, a.tna = l), c) {
		if (c = a.N()) d = Math.round(d), b = Math.round(b), sw(a) == b && rw(a) == d || ((new py(c, [d, b], 500, v1a)).play(), a.Yn && t0a(a.Yn, d, b))
	} else a.xc(d, b)
}
F.O = function() {
	O(this.R);
	uy.M.O.call(this)
};

function vy(a, b) {
	this.index = a;
	this.type = b
}
vy.prototype.C = function(a) {
	return !!a && this.index == a.index && this.type == a.type
};

function wy(a) {
	this.F = 1;
	this.cb = a
}
L(wy, RVa);
wy.prototype.aa = C(Fd);
wy.prototype.Pa = function() {
	var a = wy.M.Pa.call(this);
	a.id = this.cb;
	return a
};
wy.prototype.mM = function(a) {
	var b = wy.M.mM.call(this, a);
	return 0 != b ? b : 1 == a.xa() ? Hm(this.cb, a.aa()) : 1
};

function xy(a) {
	this.A = a
}
L(xy, M);
xy.prototype.xa = C(Eb);
xy.prototype.F = D(q);
xy.prototype.C = D(q);
xy.prototype.xF = hm();

function yy(a, b) {
	this.A = Oza;
	this.K = a;
	this.Aa = b
}
L(yy, xy);
yy.prototype.rb = C(mc);
yy.prototype.O = function() {
	delete this.K;
	yy.M.O.call(this)
};

function zy(a) {
	this.A = [];
	this.C = [];
	this.F = a
}
L(zy, M);
zy.prototype.Ga = function(a) {
	var b = this.A,
		c;
	if (b.length > a) {
		var d = 0,
			e = this.C;
		for (c = e.length - 1; 0 <= c && !(e[c].index > a); c--) d += e[c].offset;
		return b[a] + d
	}
	y1a(this, a);
	if (b.length <= a) {
		d = this.F;
		for (c = b.length; c <= a; c++) b[c] = d(c - 1, b[c - 1])
	}
	return b[a]
};
zy.prototype.indexOf = function(a, b) {
	var c = this.A;
	y1a(this, c.length);
	var d = b != m ? b : Number.MAX_VALUE;
	if (a <= c[c.length - 1]) return c = vn(c, a), Math.min(0 > c ? -c - 2 : c, d - 1);
	for (var e = this.F, g, h = c.length; h < d; h++) {
		g = e(h - 1, c[h - 1]);
		c.push(g);
		if (g == a) return h;
		if (g > a) return h - 1
	}
	return d - 1
};

function Ay(a, b) {
	y1a(a, b);
	a.C.length = 0;
	a.A.length = Math.min(a.A.length, b)
}
function z1a(a, b) {
	var c = b.index;
	return a > c ? -1 : a < c ? 1 : 0
}

function y1a(a, b) {
	var c = a.C;
	if (0 != c.length) {
		var d = 0,
			e = c.length - 1,
			g = c[e].index;
		b = Math.min(b, a.A.length - 1);
		if (!(g > b)) {
			for (; g <= b; g++) 0 <= e && c[e].index == g && (d += c[e--].offset), a.A[g] += d;
			c.length = e + 1;
			g + 1 < a.A.length && 0 != d && (c[e + 1] = {
				index: g + 1,
				offset: d
			})
		}
	}
}
zy.prototype.O = function() {
	zy.M.O.call(this);
	delete this.A;
	delete this.F
};

function A1a() {
	this.A = 0;
	this.G = this.F = this.yj = this.Gf = q;
	this.C = []
}
function B1a(a, b, c, d, e) {
	Ep.call(this, a, b, c, d);
	this.Hg = e
}
L(B1a, Ep);

function By() {
	this.A = [];
	this.C = []
}
F = By.prototype;
F.get = function(a) {
	return this.A[a]
};
F.set = function(a, b) {
	this.A[a] = b;
	gr(this.C, a)
};
F.remove = function(a) {
	delete this.A[a];
	Bn(this.C, a)
};
F.dd = C(Jb);

function Cy(a, b, c) {
	a = vn(a.C, b);
	0 > a && (a = -a - (c ? 1 : 2));
	return a
}
F.slice = function(a, b) {
	return this.A.slice(a, b)
};
F.shift = function(a, b) {
	if (b) {
		for (var c = this.C, d = this.A, e = [], g = 0; g < c.length; g++) {
			var h = c[g];
			h >= a ? (c[g] = h + b, e[h + b] = d[h]) : e[h] = d[h]
		}
		this.A = e
	}
};
F.splice = function(a, b) {
	if (!(a >= this.A.length)) {
		var c = this.C;
		if (0 != c.length) {
			for (var d = vn(c, a), d = 0 > d ? -d - 1 : d, e = vn(c, a + b), e = 0 > e ? -e - 1 : e, g = e - d, h = [], n = [], p = this.A, t = 0, u = 0; u < d; u++) t = c[u], h[t] = p[t], n[u] = t;
			for (u = e; u < c.length; u++) t = c[u], h[t - b] = p[t], n[u - g] = t - b;
			h.length = Math.max(p.length, a + b) - b;
			this.A = h;
			this.C = n
		}
	}
};
F.La = function(a) {
	var b = new By,
		c = [];
	a = a || mq;
	for (var d = 0; d < this.C.length; d++) {
		var e = this.C[d];
		c[e] = a(this.A[e])
	}
	b.A = c;
	b.C = this.C.concat();
	return b
};
F.ob = function(a, b) {
	if (this == a) return l;
	if (!a || !(a instanceof By) || !zn(this.C, a.C)) return q;
	for (var c = b || oRa, d = this.C, e = 0; e < d.length; e++) {
		var g = d[e];
		if (!c(this.A[g], a.A[g])) return q
	}
	return l
};

function C1a(a) {
	return function(b, c) {
		return !b ? !c : b.ob(c, a)
	}
};

function Dy() {
	this.F = new by;
	this.A = new by;
	this.G = []
}
L(Dy, M);
Dy.prototype.C = m;

function D1a(a, b) {
	a.C = b;
	var c = a.A,
		d = new by;
	Tr(d.A, b.A);
	for (var e = c.A.dd(), g = 0; g < e.length; g++) d.A.remove(e[g]);
	d.C = b.C.concat();
	for (g = 0; g < c.C.length; g++) on(d.C, c.C[g]);
	a.F = d
}
function Ey(a) {
	a.C || (a.C = i1a(a.F, a.A));
	return a.C
}
function E1a(a, b, c, d) {
	b = F1a(b, c, d);
	if (0 == b.length) return a.A.La();
	c = a.F;
	d = new by;
	for (var e = 0; e < b.length; e++) {
		var g = b[e],
			h = c.A.get(g);
		h && d.A.set(g, h);
		hn(c.C, g) && d.C.push(g)
	}
	return i1a(d, a.A)
}

function G1a(a, b) {
	for (var c = H1a(a, b), d = [], e = 0, g; g = a.G[e]; e++) I1a(c, g) || d.push(new xs(g.top, g.top + g.height));
	for (e = 0; g = c[e]; e++) I1a(a.G, g) || d.push(new xs(g.top, g.top + g.height));
	return d
}
function I1a(a, b) {
	for (var c = 0; c < a.length; c++) if (kTa(a[c], b)) return l;
	return q
}

function H1a(a, b) {
	for (var c = h1a(a.A), d = [], e = 0, g; g = c[e]; e++) {
		var h = Math.max(b.left, g.left),
			n = Math.min(b.left + b.width, g.left + g.width);
		if (h < n) {
			var p = Math.max(b.top, g.top);
			g = Math.min(b.top + b.height, g.top + g.height);
			p < g && d.push(new Fp(Math.abs(b.left - h), Math.abs(b.top - p), n - h, g - p))
		}
	}
	return d
}
Dy.prototype.O = function() {
	O(this.F);
	delete this.F;
	O(this.A);
	delete this.A;
	delete this.G;
	O(this.C);
	delete this.C;
	Dy.M.O.call(this)
};

function Fy(a, b, c) {
	!a && 1 < b && c.log(Error(Eoa));
	this.A = b;
	this.cM = a;
	this.ra = c
}
L(Fy, M);
Fy.prototype.update = function(a, b) {
	!a && 1 < b && this.ra.log(Error(Foa));
	this.cM = a;
	this.A = b
};
Fy.prototype.dh = C(Eb);
Fy.prototype.O = function() {
	delete this.ra;
	Fy.M.O.call(this)
};

function Gy(a) {
	this.A = mAa;
	this.K = a
}
L(Gy, xy);
Gy.prototype.Ga = function(a) {
	return this.K[a]
};
Gy.prototype.O = function() {
	delete this.K;
	Gy.M.O.call(this)
};

function J1a(a, b) {
	this.ra = a;
	this.A = [];
	this.L = [];
	this.K = new zy(K(this.qva, this));
	this.W = [];
	this.C = new By;
	this.F = [];
	this.G = new Dy;
	this.Y = b
}
L(J1a, M);
F = J1a.prototype;
F.iA = q;
F.tk = m;
F.sY = m;
F.MI = m;

function K1a(a) {
	return a.tk && a.tk.y < a.getHeight() ? L1a(a, a.tk.y) : -1
}
function Hy(a) {
	var b = 0 == a.A.length ? -1 : a.A[0];
	if (0 == a.C.dd().length) return b;
	a = a.C.dd()[0];
	return -1 == b ? a : Math.min(b, a)
}
function M1a(a) {
	return 0 == a.A.length ? -1 : a.A[a.A.length - 1]
}
F.getHeight = function() {
	return this.K.Ga(this.A.length)
};

function L1a(a, b) {
	var c = b >= a.getHeight() ? -1 : a.K.indexOf(b);
	return 0 <= c ? a.A[c] : -1
}
function Iy(a, b) {
	var c = vn(a.A, b);
	0 > c && (c = -c - 1);
	return a.K.Ga(c)
}
function N1a(a, b, c, d) {
	0 == d && a.ra.log(Error(qma));
	var e = a.C.get(b) || m;
	d = d || 1;
	e ? c && (e.cM ? e.update(l, e.dh() + d) : e.update(l, d)) : a.C.set(b, new Fy(c, d, a.ra))
}
function Jy(a, b, c) {
	var d = a.C.get(b),
		e = d && d.cM ? d.dh() : 0;
	c && 1 < e ? (d.update(d.cM, d.dh() - 1), e = 1) : a.C.remove(b);
	return e
}
function O1a(a) {
	return 0 == a.C.dd().length ? -1 : a.C.dd()[0]
}

function P1a(a, b) {
	var c = a.C.get(b);
	return !c ? (a.ra.log(Error(zfa)), q) : c.cM
}
function Ky(a, b) {
	return 0 <= vn(a.A, b)
}
function Q1a(a, b) {
	var c = a.C.get(b);
	return c ? c.dh() : 0
}
F.Oa = function(a) {
	var b = vn(this.A, a);
	0 > b && (b = -b - 1, mn(this.A, a, b), mn(this.L, 0, b));
	Ay(this.K, b)
};
F.removeChild = function(a, b) {
	if (b) {
		for (var c = Ey(this.G), d = 0; d < b.length; d++) c.remove(b[d]);
		d = cy(c);
		Ly(this, d);
		D1a(this.G, c)
	}
	c = vn(this.A, a);
	0 > c ? this.C.get(a) ? Jy(this, a) : this.ra.log(Error(Wna)) : (pn(this.A, c), 0 == this.A.length && (this.iA = q), d = this.L[c], pn(this.L, c), Ay(this.K, c + 1), Bn(this.F, a), R1a(this, a, d, 0))
};

function S1a(a, b, c) {
	var d = vn(a.A, b);
	0 > d && (a.ra.log(Error(Voa)), d = -d - 1);
	var e = a.L[d];
	a.L[d] = c;
	Ay(a.K, d + 1);
	R1a(a, b, e, c)
}

function R1a(a, b, c, d) {
	if (d != c) {
		var e = F1a(a.Y, b + 1, a.A[a.A.length - 1]),
			g = Ey(a.G);
		g.shift(e, d - c);
		c = cy(g);
		0 < c.length && (T1a(a, c, b + 1), D1a(a.G, g))
	}
}
function Ly(a, b, c) {
	0 < a.A.length && T1a(a, b, a.A[0], c)
}

function T1a(a, b, c, d) {
	if (0 != b.length) {
		!d && !a.sY && a.ra.log(Error(jea));
		d = d != m ? d : a.sY.y;
		c = vn(a.A, c);
		0 > c && (c = -c - 1);
		for (var e = 0; e < b.length; e++) {
			var g = b[e].start - d >= a.getHeight() ? -1 : a.K.indexOf(b[e].start - d),
				h = b[e].end - d - 1 >= a.getHeight() ? -1 : a.K.indexOf(b[e].end - d - 1);
			if (-1 != g || -1 != h) {
				g = Math.max(g, c);
				for (-1 == h && (h = a.A.length - 1); g <= h; g++) U1a(a, a.A[g])
			}
		}
	}
}
function U1a(a, b) {
	0 > vn(a.A, b) && a.ra.log(Error(iea));
	gr(a.F, b)
}
F.rb = C("MI");

function V1a(a, b) {
	var c = a.W;
	if (b.C()) for (var d = c.length - 1, e; e = c[d]; d--) e.xa() == b.xa() && e.F(b) && (e.xF(b), pn(c, d), O(e));
	c.push(b)
}
F.Va = function() {
	if (this.MI) {
		for (var a = 0, b; b = this.W[a]; a++) this.MI.Uk(b), O(b);
		this.W.length = 0
	}
};
F.qva = function(a, b) {
	return 0 > a ? 0 : a >= this.L.length ? (this.ra.log(Error(goa)), b + 1) : b + this.L[a]
};
F.O = function() {
	J1a.M.O.call(this);
	delete this.ra;
	delete this.tk;
	delete this.L;
	O(this.K);
	delete this.K;
	delete this.A;
	delete this.W;
	delete this.MI;
	delete this.C;
	delete this.F;
	O(this.G);
	delete this.G;
	delete this.Y
};

function My() {
	this.fE = []
}
L(My, M);

function F1a(a, b, c) {
	for (var d = []; b <= c; b++) {
		var e = a.fE[b];
		e && 0 < e.length && sn(d, e)
	}
	return d
}
My.prototype.Ie = function(a) {
	return this.fE[a]
};
My.prototype.Oa = function(a) {
	mn(this.fE, [], a)
};
My.prototype.removeChild = function(a) {
	pn(this.fE, a)
};
My.prototype.O = function() {
	delete this.fE;
	My.M.O.call(this)
};

function Ny(a) {
	this.A = jAa;
	this.K = a
}
L(Ny, xy);
Ny.prototype.rb = C(mc);
Ny.prototype.O = function() {
	delete this.K;
	Ny.M.O.call(this)
};

function W1a(a, b, c, d) {
	this.A = lAa;
	this.paddingTop = I(a) ? a : m;
	this.Y = I(b) ? b : m;
	this.L = I(c) ? c : m;
	this.W = I(d) ? d : m
}
L(W1a, xy);

function Oy(a, b) {
	this.A = nAa;
	this.width = I(a) ? a : m;
	this.height = I(b) ? b : m
}
L(Oy, xy);
Oy.prototype.F = D(l);
Oy.prototype.C = D(l);
Oy.prototype.xF = function(a) {
	a.width === m && (a.width = this.width);
	a.height === m && (a.height = this.height)
};

function Py(a) {
	this.Q = a
}
L(Py, M);
Py.prototype.O = function() {
	delete this.Q;
	Py.M.O.call(this)
};

function Qy(a) {
	this.Q = a;
	this.C = [];
	this.A = [];
	this.F = new zy(K(this.vya, this));
	this.K = [];
	this.Y = new My;
	this.W = []
}
L(Qy, Py);
F = Qy.prototype;
F.Uo = 0;
F.gK = 0;
F.mE = 0;
F.Zk = 0;
F.RY = q;
F.vj = function(a, b, c, d, e, g) {
	this.RY && this.Q.ra.log(Error(ala));
	this.RY = l;
	var h = e.offset,
		n = e.A,
		p = new uo(d.x - this.Zk - this.gK, d.y - this.Uo - this.mE),
		t = Ry(this, c),
		u = X1a(this, c),
		x = this.getHeight(c);
	t.tk && t.tk.x != p.x && (t.F = t.A.concat());
	if (!t.tk || t.tk.x != p.x) {
		var y = {};
		y[lua] = p.x;
		V1a(t, new Gy(y))
	}
	t.tk = p;
	t.sY = new uo(h.x + this.Zk, h.y + this.Uo);
	var B = t.G;
	B.A = n.La();
	B.C = m;
	var E = new Fp(h.x, h.y, p.x, this.getHeight(c)),
		H = G1a(t.G, E);
	Ly(t, H, 0);
	var J;
	if (0 < p.y || g) {
		a: {
			for (var $ = e.pD, V = Ry(this, c), ca = -1, ia = m, ua = 0; 0 == ua;) {
				var yb = Sy(a),
					Bb = K1a(V); - 1 != ca && Bb == ca && this.Q.ra.log(Error(Rfa));
				var Wb = Y1a(this, a, c, b, p, ca);
				if (!Wb) {
					J = 2;
					break a
				}
				var Qd = Wb.type,
					zd = Wb.bu;
				if (V.iA && zd > M1a(V)) {
					(4 == Qd || 3 == Qd) && this.Q.ra.log(Error(Qfa + Qd));
					J = 2;
					break a
				}
				if (ca == zd && (ia == yb || ia && ia.C(yb))) {
					this.Q.ra.log(Error(Pna));
					J = 2;
					break a
				}
				this.caa() && (zd - 1 > ca && Ky(V, zd - 1)) && (zd--, Qd = 4);
				var Bj = c,
					Cj = zd,
					Dj = Qd,
					cm = Wb.Wva;
				if (0 == Dj)(!yb || yb.type != Wg) && f(Error("Trying to create child without an insert redraw.")), Z1a(this, yb, Cj);
				else if (1 == Dj) Z1a(this, m, Cj);
				else if (3 == Dj) {
					var Wh = Cj,
						xl = Bj,
						Fk = this.A[xl],
						Xh = Ty(this, Wh, xl),
						Ji = P1a(Fk, Wh);
					Jy(Fk, Wh, l);
					if (Ky(Fk, Wh)) {
						var fk = this.C[Wh].rb(Xh + Q1a(Fk, Wh) + 1);
						Uy(this, xl + 1, Wh, fk)
					} else Fk.C.get(Wh) && Uy(this, xl + 1, Wh);
					Ji ? $1a(this, xl, Wh, Xh) : a2a(this, xl, Wh)
				} else if (2 == Dj) {
					cm || f(Error("Child moved up but the child's original segment is null"));
					var Yh = Cj,
						ep = Bj,
						Zr = cm,
						Ej = Ry(this, Zr),
						$m = Ty(this, Yh, Zr),
						fp = k;
					Ej.C.get(Yh) ? (fp = P1a(Ej, Yh), Jy(Ej, Yh, l)) : (b2a(this, Zr, Yh), fp = l);
					fp ? $1a(this, ep, Yh, $m) : a2a(this, ep, Yh)
				}
				var ao = this.C[zd];
				if (!ao) {
					J = 2;
					break a
				}
				var gp;
				var $r = a,
					an = ao,
					as = zd,
					bn = b,
					Yv = c,
					bo = Sy($r),
					Gk = an.bd();
				bo && bo.type == le && bo.index == this.F.Ga(as) + bn && bo.F.qa().length >= Gk && 0 < Gk ? (c2a(this, as, Yv) || this.Q.ra.log(Error(Oma + as)), az($r, bo.index, -Gk), gp = l) : gp = q;
				if (!gp) {
					var Zv = !! g && (Hy(V) == zd || -1 == Hy(V)),
						dm = ao,
						ae = zd,
						hp = a,
						bs = b,
						zf = c,
						Fj = h,
						Af = $,
						pi = Zv,
						cs = d2a(this, p, zf, ae),
						qi = k;
					if (0 >= cs.y && !pi && 0 == dm.bd()) {
						var Pt = this.C[ae];
						Pt.bd();
						Pt.dh();
						var wD = Hy(Ry(this, zf)) == ae;
						c2a(this, ae, zf);
						wD ? qi = 1 : (e2a(this, zf, ae), qi = 2)
					} else {
						var Vy = Ty(this, ae, zf),
							ip = Ry(this,
							zf),
							Qt = ip.G,
							yl = this.C[ae],
							xD = f2a(this, Fj, zf, ae),
							Zh = E1a(Qt, this.Y, 0, ae),
							kS = yl.vj(hp, bs + this.F.Ga(ae), Vy, cs, new dy(xD, Zh, Af), pi),
							lS = this.F.Ga(ae + 1) - this.F.Ga(ae),
							$v = yl.bd() - lS,
							Wy = this.F,
							Xy = ae + 1,
							aw = $v;
						if (aw && !(Xy >= Wy.A.length)) {
							var co = Wy.C;
							if (0 == co.length) co[0] = {
								index: Xy,
								offset: aw
							};
							else {
								var cn = vn(co, Xy, z1a);
								0 <= cn ? co[cn].offset += aw : co.splice(-(cn + 1), 0, {
									index: Xy,
									offset: aw
								})
							}
						}
						var eo = this.Y,
							Rt = ae,
							yD = Zh.G;
						Zh.G = [];
						eo.fE[Rt] = yD;
						if (go(jo(), Wza)) {
							var jp = E1a(Qt, this.Y, ae + 1, this.C.length - 1),
								bw = i1a(jp, Zh),
								fo = cy(Zh),
								zD = cy(bw);
							if (0 < fo.length || 0 < zD.length) Ly(ip, fo), Ly(ip, zD), D1a(Qt, bw)
						} else {
							var Mq = cy(Zh);
							0 < Mq.length && (Ly(ip, Mq), jp = E1a(Qt, this.Y, ae + 1, this.C.length - 1), D1a(Qt, i1a(Zh, jp)))
						}
						b: {
							var ri = kS,
								em = Ry(this, zf);
							Bn(em.F, ae);
							var Gj = q;
							ri.yj ? 0 == ri.C.length || this.Q.ra.log(Error(Fha)) : (ri.F && this.Q.ra.log(Error(QDa)), g2a(this, 3 == ri.A ? zf : zf + 1, ae, ri.C) == ri.C.length || this.Q.ra.log(Error(ama)));
							var Yy = Ty(this, ae, zf);
							2 == ri.A ? $1a(this, zf, ae, Yy) : 1 == ri.A && S1a(this.A[zf], ae, this.C[ae].getHeight(Yy));
							if (ri.Gf) {
								U1a(em, ae);
								if (Hy(em) == ae) {
									qi = 1;
									break b
								}
								Uy(this, zf + 1, ae);
								Gj = l
							}
							if (!ri.Gf && ri.yj) {
								c: {
									for (var Nq = ae, dn = zf + 1, ds = ri.F, AD = dn, fm = k; fm = this.A[AD]; AD++) if (Ky(fm, Nq) && ds && U1a(fm, Nq), Ky(fm, Nq) || fm.C.get(Nq)) break c;
									N1a(Ry(this, dn), Nq, q)
								}
								ri.F && An(this.W, zf + 1);
								Gj = l
							}
							var cw;
							if (cw = !ri.Gf) {
								var St;
								if (St = !ri.yj) {
									var mS = hp,
										oJ = bs,
										s3 = zf,
										Zy = ae;
									if (Zy == this.C.length - 1) St = q;
									else {
										var Oq = this.F.Ga(Zy + 1),
											$y = oJ + Oq - 1;
										if (this.ap(oJ, $y)) {
											var dw = bz(this) - Oq;
											az(mS, $y + 1, -dw);
											for (var nS = this.C.length - 1; nS > Zy; nS--) c2a(this, nS, s3) || this.Q.ra.log(Error(Oma + Zy));
											St = l
										} else St = q
									}
								}
								cw = St
							}
							cw && (Gj = l);
							!ri.Gf && ri.G && (Gj = l);
							ae == K1a(em) && (Gj = l);
							Gj && e2a(this, zf, ae + 1);
							!ri.Gf && ri.G ? em.iA = l : M1a(em) == ae && (em.iA = q);
							qi = Gj ? 2 : 0
						}
					}
					ua = qi;
					ca = zd
				}
				ia = yb
			}
			J = ua
		}
		var Gka = X1a(this, c),
			usb = this.getHeight(c);
		(Gka != u || usb != x) && cz(this, c, new Oy(Gka, usb))
	} else J = 1;
	this.W[0] == c && this.W.shift();
	E.height = this.getHeight(c);
	var vLa = t.G;
	vLa.G = H1a(vLa, E);
	vLa.F.C.length = 0;
	var Pq = new A1a,
		wLa;
	a: {
		for (var Hka = c + 1; Hka < this.A.length; Hka++) if (this.A[Hka] && -1 != Hy(this.A[Hka])) {
			wLa = [];
			break a
		}
		for (var vsb = [],
		wsb = c + 1; this.A[wsb];) {
			var ysb = h2a(this, wsb);
			ysb && vsb.push(ysb)
		}
		wLa = vsb
	}
	Pq.C = wLa;
	var xLa = !this.A[c + 1] && !this.ap(b, b + bz(this) - 1);
	Pq.yj = xLa || !! this.A[c + 1];
	var yLa;
	if (!(yLa = xLa)) {
		var zsb = Pq.yj;
		this.W[0] <= c && this.Q.ra.log(Error(pea));
		!zsb && 0 < this.W.length && this.Q.ra.log(Error(mqa));
		yLa = 0 < this.W.length || zsb && -1 != O1a(this.A[c + 1])
	}
	Pq.F = yLa;
	xLa && Ry(this, this.A.length);
	Pq.G = t.iA;
	1 == J && (Pq.Gf = l, An(this.W, c));
	0 != Pq.A && this.Q.ra.log(Error($na));
	var Asb = Ry(this, c);
	if (0 > Hy(Asb) && !Pq.Gf && 0 < c) {
		c < this.A.length - 1 && this.Q.ra.log(Error(Una));
		Pq.A = 3;
		var Bsb = h2a(this, c);
		Bsb && mn(Pq.C, Bsb, 0)
	} else if (this.rb(c)) this.Fw(c) && (Pq.A = 1);
	else {
		this.rb(c + 1) && this.Q.ra.log(Error(Cka));
		var hFc = this.lx(b, c);
		Asb.MI = hFc;
		Pq.A = 2
	}
	this.RY = q;
	return Pq
};
F.hm = function(a, b, c) {
	if (this.A[c]) {
		var d = this.A[c].A;
		if (0 != d.length) for (var e = d[0], d = d[d.length - 1], g = this.F.Ga(d + 1) + b - 1; e <= d;) {
			e = this.F.Ga(e) + b;
			e = i2a(a.C, e);
			if (-1 == e || e > g) break;
			var e = this.F.indexOf(e - b),
				h = this.F.Ga(e);
			this.C[e].hm(a, h + b, Ty(this, e, c));
			e += 1
		}
	}
};

function Ry(a, b) {
	a.A[b] || (a.A[b] = new J1a(a.Q.ra, a.Y), (0 < a.Uo || 0 < a.gK || 0 < a.mE || 0 < a.Zk) && V1a(a.A[b], new W1a(a.Uo, a.gK, a.mE, a.Zk)));
	return a.A[b]
}
function dz(a, b, c) {
	return {
		bu: a,
		type: b,
		Wva: c != m ? c : m
	}
}

function Y1a(a, b, c, d, e, g) {
	var h = Sy(b),
		n = Ry(a, c),
		p = 0 == n.F.length ? -1 : n.F[0],
		t = O1a(n),
		u = h && h.index <= d + bz(a) ? a.F.indexOf(h.index - d) : -1,
		x = K1a(n),
		y;
	if (y = h) if (y = h.type == Wg) 0 > u || 0 <= t && t < u || 0 <= p && p < u || 0 <= x && x < u ? y = 0 : 0 <= t && t == u ? -1 == t || 0 == c ? y = l : (y = M1a(Ry(a, c - 1)), y = t > y) : y = 1;
	if (y) {
		if (0 < u && g < u - 1 && h.index - d == a.F.Ga(u) && Ky(n, u - 1)) return dz(u - 1, 4);
		var B = a.A[c];
		g = u - 1;
		y = u == Hy(B);
		var E = -1 != Hy(B),
			B = Ky(B, g);
		h = !y && E && !B ? q : (y = a.A[c + 1]) && (Ky(y, g) || y.C.get(g)) || h.index - d != a.F.Ga(u) ? q : a.TZ(h, d, u);
		if (h) return dz(u, 0)
	}
	0 <= u && t > u && a.Q.ra.log(Error(Sda));
	0 <= x && t > x && a.Q.ra.log(Error(Tda));
	if (-1 < t && (0 > p || t <= p) && (0 > u || t <= u) && (0 > x || t <= x)) return dz(t, 3);
	if (-1 < p && (0 > u || p <= u) && (0 > x || p <= x)) return dz(p, 4);
	if (-1 < u && Ky(n, u) && (0 > x || u <= x)) return dz(u, 4);
	if (-1 < x) return dz(x, 4);
	t = -1;
	for (p = c + 1;
	(u = a.A[p]) && !(t = Hy(u), -1 != t); p++);
	if (-1 == t) b = {
		bu: -1,
		Hg: -1
	};
	else {
		e = d2a(a, e, c, t);
		if (u = 0 == Ty(a, t, p)) x = p, u = t, h = Ry(a, c), c = Ry(a, x), h1a(Ey(h.G)).length || h1a(Ey(c.G)).length || (c.tk ? c.tk.x : 0) != e.x || c.C.get(u) ? b = l : (b = Sy(b), x = d + a.F.Ga(a.C[u + 1] ? u + 2 : u + 1), b = b && b.index < x || (0 == c.F.length ? -1 : c.F[0]) == u ? l : e.y >= a.C[u].MA()), u = !b;
		b = u ? {
			bu: -2,
			Hg: -1
		} : {
			bu: t,
			Hg: p
		}
	}
	return -2 == b.bu ? m : 0 <= b.bu ? Ky(n, b.bu) ? dz(b.bu, 4) : dz(b.bu, 2, b.Hg) : !a.ap(d, d + bz(a) - 1) ? dz(a.C.length, 1) : m
}
function c2a(a, b, c) {
	a.Bka(b);
	for (var d = a.C[b], e = [], g = 0; g < d.dh(); g++) d.rb(g) && e.push(d.rb(g));
	c = g2a(a, c, b, e);
	O(a.C[b]);
	pn(a.C, b);
	pn(a.K, b);
	a.Y.removeChild(b);
	j2a(a, b, l);
	return c == e.length
}

function e2a(a, b, c) {
	for (var d = Ry(a, b), e = d.A, g = e.length - 1, h; h = e[g]; g--) h >= c && Uy(a, b + 1, h);
	for (h = O1a(d); - 1 != h;) h < c && a.Q.ra.log(Error(Pfa + h + Eaa + d)), Uy(a, b + 1, h), h = O1a(d)
}
function Uy(a, b, c, d) {
	var e = 0,
		g = b - 1,
		h = Ry(a, g),
		n = Ky(h, c);
	n && (b2a(a, g, c, d), e++);
	if (d = !! h.C.get(c)) n || (n = P1a(h, c)), e += Jy(h, c), n || (0 < e && a.Q.ra.log(Error(rma)), e = 1);
	0 < e && N1a(Ry(a, b), c, n, e)
}

function h2a(a, b) {
	0 <= Hy(a.A[b]) && a.Q.ra.log(Error(Iha));
	for (var c = 0; c < a.K.length; c++) for (var d = 0; d < a.K[c].length; d++) a.K[c][d] > b && a.K[c][d]--;
	d = a.A[b].rb();
	O(a.A[b]);
	pn(a.A, b);
	for (c = a.W.length - 1; 0 <= c; c--) if (a.W[c] > b) a.W[c]--;
	else if (a.W[c] == b) {
		pn(a.W, c);
		break
	}
	return d
}
function Z1a(a, b, c) {
	b = a.Ly(b, c);
	mn(a.C, b, c);
	mn(a.K, [], c);
	a.Y.Oa(c);
	j2a(a, c, q)
}

function $1a(a, b, c, d) {
	var e = a.C[c],
		g = e.rb(d);
	if (g) {
		var h = vn(a.A[b].A, c);
		0 > h && (h = -(h + 1));
		cz(a, b, new yy(g, h));
		a2a(a, b, c);
		S1a(a.A[b], c, e.getHeight(d));
		Ay(a.F, c + 1)
	} else a.Q.ra.log(Error(hea))
}
function b2a(a, b, c, d) {
	var e = a.C[c],
		g = a.A[b];
	d || (d = Q1a(g, c), d = e.rb(Ty(a, c, b) + d));
	d ? (cz(a, b, new Ny(d)), g.iA && c == M1a(g) && (g.iA = q), a.A[b].removeChild(c, a.Y.Ie(c)), Bn(a.K[c], b), Ay(a.F, c + 1), An(a.W, b)) : a.Q.ra.log(Error(Xna))
}
F.Bka = G;
F.caa = D(q);
F.rb = function(a) {
	return this.A[a] ? this.A[a].rb() : m
};
F.Va = function(a) {
	var b = this.A[a];
	if (b) {
		b.Va();
		for (var b = b.A, c = 0; c < b.length; c++) for (var d = b[c], e = this.K[d], g = 0; g < e.length; g++) a == e[g] && this.C[d].Fw(g) && this.C[d].Va(g)
	}
};
F.bd = function() {
	return bz(this)
};

function bz(a) {
	return a.F.Ga(a.C.length)
}
F.getHeight = function(a) {
	return this.A[a] ? this.A[a].getHeight() + this.Uo + this.mE : 0
};

function X1a(a, b) {
	return a.A[b] ? (a.A[b].tk ? a.A[b].tk.x : 0) + a.gK + a.Zk : 0
}
F.Fw = function(a) {
	if (this.A[a] && 0 < this.A[a].W.length) return l;
	if (!this.A[a]) return q;
	var b = this.A[a].A;
	if (!b) return q;
	for (var c = 0; c < b.length; c++) for (var d = b[c], e = this.K[d], g = 0; g < e.length; g++) if (a == e[g] && this.C[d].Fw(g)) return l;
	return q
};

function a2a(a, b, c) {
	Ry(a, b).Oa(c);
	a.K[c] || (a.K[c] = []);
	gr(a.K[c], b)
}
function g2a(a, b, c, d) {
	for (var e = 0; a.A[b];) e += Jy(a.A[b], c), Ky(a.A[b], c) && (b2a(a, b, c, d[e]), e++), b++;
	return e
}
function cz(a, b, c) {
	(b = a.A[b]) ? V1a(b, c) : a.Q.ra.log(Error(gea))
}

function d2a(a, b, c, d) {
	a = b.y - Iy(Ry(a, c), d);
	return new uo(b.x, a)
}
function f2a(a, b, c, d) {
	var e = b.y;
	0 < a.A[c].getHeight() && (e += Iy(a.A[c], d));
	return new uo(b.x, e)
}
function Ty(a, b, c) {
	a = a.K[b];
	if (!a) return 0;
	for (b = 0; b < a.length && !(a[b] >= c); b++);
	return b
}
function j2a(a, b, c) {
	c = c ? -1 : 1;
	for (var d = 0; d < a.A.length; d++) {
		for (var e = a.A[d], g = b, h = c, n = 0; n < e.A.length; n++) e.A[n] >= g && (e.A[n] += h);
		0 <= h ? e.C.shift(g, h) : e.C.splice(g, -h);
		for (n = 0; n < e.F.length; n++) e.F[n] >= g && (e.F[n] += h)
	}
}
F.wb = function(a) {
	return this.C[a] || m
};
F.dh = function() {
	for (var a = this.A, b = a.length - 1; 0 <= b; b--) if (a[b].rb()) return b + 1;
	return 0
};
F.vya = function(a, b) {
	return 0 > a ? 0 : a >= this.C.length ? (this.Q.ra.log(Error(foa)), b + 1) : b + this.C[a].bd()
};
F.dA = function(a, b) {
	var c = b.index - a;
	if (0 > c) return this.Q.ra.log(Error(hoa)), 0;
	c = this.F.indexOf(c);
	if (!this.C[c]) return b.type != Wg && this.Q.ra.log(Error(Vja)), Math.max(0, this.A.length - 1);
	if (0 == this.K[c].length) return Math.max(0, this.A.length - 1);
	var d = this.F.Ga(c);
	return this.C[c].dA(a + d, b) + this.K[c][0]
};

function ez(a, b) {
	if (0 != b.xa() || 0 == a.C.length) return -1;
	var c = b.A(),
		d = bz(a);
	if (c > d) return -1;
	var e = b.C;
	if (c == d && !e) return -1;
	var d = a.F.indexOf(c),
		g = a.F.Ga(d);
	e && g == c && (d = Math.max(d - 1, 0));
	return d
}
F.Wq = function(a) {
	var b = ez(this, a);
	if (0 > b) return m;
	var c = this.F.Ga(b);
	return this.C[b].Wq(a.shift(-c))
};
F.Vq = function(a) {
	var b = ez(this, a);
	if (0 > b) return m;
	var c = this.F.Ga(b);
	if (a = this.C[b].Vq(a.shift(-c))) a.start += c, a.end += c;
	return a
};
F.Bn = function(a, b, c) {
	var d = ez(this, a);
	if (0 > d) return m;
	var e = this.F.Ga(d);
	if (a = this.C[d].Bn(a.shift(-e), b, c - this.Zk)) return a.shift(e);
	a = a = 0;
	do {
		d += b ? -1 : 1;
		e = this.C[d];
		if (!e) return m;
		a = this.K[d].length;
		a = b ? a - 1 : 0
	} while (0 >= e.getHeight(a));
	b = b ? e.getHeight(a) : 0;
	a = e.xk(new uo(0, 0), a, c - this.Zk, b, l);
	e = this.F.Ga(d);
	return a ? a.shift(e) : m
};
F.xk = function(a, b, c, d, e, g) {
	if (0 == this.C.length) return m;
	var h = this.A[b];
	if (!e) {
		var n;
		a: {
			n = Ey(h.G);
			for (var p = new uo(a.x + c - this.Zk, a.y + d - this.Uo), t = n.A.dd(), u = 0; u < t.length; u++) if (n.A.get(t[u]).contains(p)) {
				n = t[u];
				break a
			}
			n = m
		}
		if (n) return new wy(n)
	}
	n = to(d - this.Uo, 0, h.getHeight() - 1);
	d = L1a(h, n);
	n -= Iy(h, d);
	c -= this.Zk;
	a = f2a(this, a, b, d);
	return (b = this.C[d].xk(a, Ty(this, d, b), c, n, e, g)) && b.shift(this.F.Ga(d))
};
F.Gj = jm(134);
F.Eh = function(a, b, c) {
	var d;
	d = this.Q.ba();
	if (1 == a.xa()) {
		d = Nu(d, a) - b;
		if (d >= bz(this)) return m;
		d = this.F.indexOf(d)
	} else d = ez(this, a.shift(-b));
	if (0 > d) return m;
	var e = this.F.Ga(d);
	a = this.C[d].Eh(a, b + e, c);
	if (!a) return m;
	b = this.K[d][a.Hg];
	if (!this.A[b]) return m;
	a.Hg = b;
	a.A.x += this.Zk;
	a.A.y += Iy(this.A[b], d) + this.Uo;
	return a
};
F.Mo = function(a) {
	var b = ez(this, a);
	if (0 > b) return m;
	var c = this.F.Ga(b);
	a = this.C[b].Mo(a.shift(-c));
	if (!a) return m;
	c = this.K[b][a.Hg];
	b = Iy(this.A[c], b) + this.Uo;
	a.Hg = c;
	a.left += this.Zk;
	a.right += this.Zk;
	a.top += b;
	a.bottom += b + this.mE;
	return a
};
F.Aw = function(a) {
	var b;
	0 == this.C.length ? b = -1 : (b = bz(this), b = a >= b ? -1 : this.F.indexOf(a));
	if (0 > b) return -1;
	var c = this.F.Ga(b);
	a = this.C[b].Aw(a - c);
	return 0 > a ? -1 : this.K[b][a]
};

function fz(a, b, c, d, e) {
	I(b) && (a.Uo = b);
	I(c) && (a.gK = c);
	I(d) && (a.mE = d);
	I(e) && (a.Zk = e);
	for (var g = 0, h; h = a.A[g]; g++) V1a(h, new W1a(b, c, d, e))
}
F.MA = function() {
	return 0 == this.C.length ? 0 : this.C[0].MA()
};
F.O = function() {
	for (var a = 0; a < this.C.length; a++) O(this.C[a]);
	delete this.C;
	for (a = 0; a < this.A.length; a++) O(this.A[a]);
	delete this.A;
	delete this.F;
	delete this.K;
	delete this.W;
	O(this.Y);
	delete this.Y;
	Qy.M.O.call(this)
};

function gz(a, b, c) {
	Qy.call(this, a);
	this.L = b || m;
	this.ea = c || m
}
L(gz, Qy);
F = gz.prototype;
F.fV = q;
F.iN = q;
F.z5 = hm();
F.vj = function(a, b, c, d, e, g) {
	k2a(this, a, b, l);
	c = gz.M.vj.call(this, a, this.L ? b + 1 : b, c, d, e, g);
	b = b + this.bd() - (this.iN ? 1 : 0);
	k2a(this, a, b, q);
	return c
};

function k2a(a, b, c, d) {
	var e = d ? a.L : a.ea,
		g = Sy(b);
	if (e && g && g.index == c) if (Ts(a.Q.ba().qa(), c) != e) d && a.Q.ra.log(Error(Tja + e.charCodeAt(0)));
	else if (g.type == le) d ? (a.Q.ra.log(Error(Epa)), a.fV = q) : (a.Q.ra.log(Error(hia)), a.iN = q), az(b, c, -1);
	else {
		if (e = g.type == Wg) d ? a.fV = l : a.iN = l;
		d && a.z5(c);
		b.xj(c, e ? 1 : 0)
	}
}
F.hm = function(a, b, c) {
	this.L && (this.fV || f(Error("Layout of overlays for start marker in marker container view should not occur because start marker has not been layed out at index: " + b + Qa)), a.xj(new xs(b, b)));
	gz.M.hm.call(this, a, this.L ? b + 1 : b, c);
	this.ea && this.iN && (b = b + this.bd() - 1, a.xj(new xs(b, b)))
};
F.TZ = function(a, b, c) {
	return (!this.ea ? 0 : Ts(this.Q.ba().qa(), a.index) == this.ea) ? q : this.rH(a, b, c)
};
F.bd = function() {
	var a = gz.M.bd.call(this);
	this.fV && a++;
	this.iN && a++;
	return a
};
F.Bn = function(a, b, c) {
	return (a = gz.M.Bn.call(this, this.L ? a.shift(-1) : a, b, c)) ? this.L ? a.shift(1) : a : m
};
F.xk = function(a, b, c, d, e, g) {
	return (a = gz.M.xk.call(this, a, b, c, d, e, g)) ? this.L ? a.shift(1) : a : m
};
F.Vq = function(a) {
	if (0 == a.A()) return m;
	if (a = gz.M.Vq.call(this, this.L ? a.shift(-1) : a)) a.start++, a.end++;
	return a
};
F.Gj = jm(133);
F.Eh = function(a, b, c) {
	return gz.M.Eh.call(this, a, this.L ? b + 1 : b, c)
};
F.Wq = function(a) {
	return gz.M.Wq.call(this, this.L ? a.shift(-1) : a)
};
F.dA = function(a, b) {
	var c = b.index - a;
	return 0 == c && this.L ? 0 : this.ea && c == this.bd() - 1 && b.type != Wg ? this.dh() - 1 : gz.M.dA.call(this, this.L ? a + 1 : a, b)
};
F.ap = function(a, b) {
	this.ea || f(Error("Subclass should have overridden isEnd if view didn't define an end marker."));
	return !this.ea ? q : Ts(this.Q.ba().qa(), b + 1) == this.ea
};
F.Mo = function(a) {
	return gz.M.Mo.call(this, this.L ? a.shift(-1) : a)
};
F.Aw = function(a) {
	return gz.M.Aw.call(this, this.L ? a - 1 : a)
};

function hz(a, b) {
	gz.call(this, a, aa);
	this.na = b;
	fz(this, 7, 7, 7, 7)
}
L(hz, gz);
hz.prototype.lx = function() {
	return iz(this.Q.G, BFa)
};
hz.prototype.Ly = function(a) {
	return jz(this.na, a.index, a.A, this.Q)
};
hz.prototype.rH = function(a) {
	return this.na.Ye(a.index, a.A, this.Q.ba())
};
hz.prototype.ap = function(a, b) {
	return Vs(this.Q.ba().qa(), b) == b
};

function kz(a, b) {
	$x.call(this, a, new e1a(Zi, dk));
	this.K = b;
	this.C = {};
	this.A = {};
	this.F = a.L;
	this.G = Ru(Pu.ya(), 150)
}
L(kz, $x);
F = kz.prototype;
F.$0 = m;
F.P_ = 0;
F.O_ = 0;
F.ha = function() {
	for (var a = this.ma(), b = [YHa, ZHa, $Ha], c = [], d = 0, e; e = b[d]; d++) c.push(a.ha(Rb, {
		"class": e,
		style: Ll + this.G + Uj
	}));
	this.Sb(a.ha(Rb, XHa, c))
};
F.za = function() {
	kz.M.za.call(this);
	var a = this.Q.A;
	T(this).A(a, Lf, this.GJa).A(a, Kf, this.FJa)
};

function l2a(a, b) {
	a.A[b] && a.removeChild(a.A[b], l);
	O(a.C[b]);
	delete a.C[b];
	O(a.A[b]);
	delete a.A[b]
}
F.Ef = function() {
	var a = m2a(this.F, Td);
	if (0 != a.length) {
		for (var b = this.Q.ba(), c = b.ic(Td), d = {}, e = 0; e < c.length; e++) for (var g = lz(b.Ra(Td, c[e])), h = 0; h < g.length; h++) d[g[h]] = l;
		for (e = 0; c = a[e]; e++) g = c.id, d[g] || (g = mz(this.F, g), h = Vs(b.qa(), c.index), g.xj(h, h - c.index + 1))
	}
	a = n2a(this.F, Td);
	for (b = 0; d = a[b]; b++) l2a(this, d.id);
	a = 0 < a.length;
	b = new dy(new uo(0, 0), new by, 1);
	d = this.Q.ba();
	e = d.ic(Td);
	c = {};
	for (g = 0; g < e.length; g++) for (var h = lz(d.Ra(Td, e[g])), n = 0; n < h.length; n++) {
		var p = h[n];
		if (!c[p] && (c[p] = l, -1 != d.Rc(p))) {
			var t = mz(this.F, p),
				u = Sy(t);
			if (u) {
				a = l;
				this.C[p] || (this.C[p] = new hz(this.Q, this.K));
				for (var x = this.C[p], y = new uo(this.G, Number.MAX_VALUE), B = d.Rc(p); u;) {
					var E = x.vj(t, B, 0, y, b, l),
						u = p,
						H = this.Q,
						J = H.ra,
						$ = this.C[u];
					switch (E.A) {
						case 3:
							J.log(Error(Zfa));
							l2a(this, u);
							break;
						case 2:
							E = $.rb(0);
							this.A[u] && J.log(Error(Iqa + u));
							this.A[u] = new uy(H, u, E);
							this.Oa(this.A[u], l);
							T(this).A(this.A[u], Pd, this.zva);
							break;
						default:
							this.A[u] || f(Error("Trying to render a comment with no container."))
					}
					u = Sy(t)
				}
			}
		}
	}
	a && (nz(this), o2a(this));
	return q
};

function p2a(a, b) {
	if (1 == b.xa()) return m;
	var c = a.Q.ba(),
		c = c.Ie(Td, Ss(c.qa(), b.A()));
	return 0 < c.length && a.C[c[0]] ? c[0] : m
}
F.zG = function(a, b) {
	this.P_ = a;
	this.O_ = b;
	o2a(this)
};

function o2a(a, b) {
	var c = a.Q.ba(),
		d = new oz(a.F),
		e = a.P_ + a.O_,
		g;
	for (g in a.A) {
		var h = a.A[g],
			n = sw(h);
		h.Wa() && (n >= a.P_ && n <= e) && (h = a.C[g], b || h.Va(0), h.hm(d, c.Rc(g), 0))
	}
}
F.fv = jm(31);
F.PG = function() {
	o2a(this, l)
};
F.Jp = function() {
	return Rn(this.A) ? 0 : 4 + this.G
};
F.getHeight = function() {
	return Rn(this.A) ? 0 : this.O_
};
F.OG = function(a) {
	var b = p2a(this, a);
	return !b ? m : this.C[b].Wq(a.shift(-this.Q.ba().Rc(b)))
};
F.Zq = function(a, b, c, d) {
	if (!U.Dc.isEnabled()) return m;
	var e;
	a: {
		e = a;
		var g = b,
			h;
		for (h in this.A) {
			var n = this.A[h],
				p;
			if (p = n.Wa()) {
				p = e;
				var t = g,
					u = n.N();
				if (u) {
					var n = u.offsetLeft,
						x = n + u.offsetWidth,
						y = u.offsetTop,
						u = y + u.offsetHeight;
					p = p > n && p < x && t > y && t < u
				} else p = q
			}
			if (p) {
				e = h;
				break a
			}
		}
		e = m
	}
	if (!e) return m;
	g = this.A[e];
	b -= sw(g) + 2 + 16;
	a -= rw(g) + 2;
	return (a = this.C[e].xk(new uo(0, 0), 0, a, b, c, d)) ? a.shift(this.Q.ba().Rc(e)) : m
};
F.rr = function(a) {
	var b = p2a(this, a);
	if (!b) return m;
	var c = this.C[b],
		b = this.Q.ba().Rc(b);
	if (a = c.Vq(a.shift(-b))) a.start += b, a.end += b;
	return a
};
F.Ar = function(a, b, c) {
	var d = p2a(this, a);
	if (!d) return m;
	var e = this.C[d],
		d = this.Q.ba().Rc(d);
	return (a = e.Bn(a.shift(-d), b, c)) ? a.shift(d) : m
};
F.Wx = function(a, b) {
	var c = p2a(this, a);
	if (!c) return m;
	var d = this.C[c],
		e = this.Q.ba().Rc(c);
	if (d = d.Eh(a, e, b)) c = this.A[c], d.A.x += rw(c) + 2, d.A.y += sw(c) + 16 + 2;
	return d
};
F.GJa = function() {
	var a = this.Q.A,
		b = a.ba(),
		c = a.A;
	if (0 == Hs(c.getSelection()).xa()) {
		var c = Tw(c),
			d = lz(b.Ra(Td, c)),
			e;
		for (e in this.A) this.A[e].zg(hn(d, e));
		for (var g = 0; e = d[g]; g++)(e = this.A[e]) && e.ua(l);
		if (f1a(a) && (a = Ss(b.qa(), c), e = b.Ie(Td, a)[0], e = this.A[e])) e.ua(l), e.zg(l);
		nz(this)
	}
};
F.FJa = function() {
	f1a(this.Q.A) || nz(this)
};

function nz(a) {
	if (a.Wa()) {
		var b = a.Q.ba();
		if (!Rn(a.C)) {
			for (var c = q, d = b.ic(Td), e = b.qa().ub() - 1, g = {}, h = a.getParent(), n = 0; n < d.length; ++n) {
				var p = d[n];
				if (p >= e) break;
				for (var t = lz(b.Ra(Td, p)), u = 0, x; x = t[u]; u++) {
					var y = a.A[x];
					if (!g[x] && y && y.Wa()) {
						var B = ow(h, new ws(p));
						B && (g[x] = B.y, y.z0 && (c = x != a.$0, a.$0 = x))
					}
				}
			}
			b = Pn(g);
			yn(b, function(a, b) {
				return wn(g[a], g[b])
			});
			q2a(a, b, g, c)
		}
	}
}

function q2a(a, b, c, d) {
	for (var e = a.$0, g = Um(b, e), h = e ? c[e] - 5 : Number.MAX_VALUE, n = g - 1, p; p = b[n]; n--) {
		var t = a.A[p],
			u = a.C[p].getHeight(0) + 16 + 4,
			h = Math.min(h - u, c[p]);
		x1a(t, h, d);
		h -= 5
	}
	h = 0;
	n = a.A[e];
	e && (n && n.Wa()) && (x1a(n, c[e], d), h = sw(n) + (a.C[e].getHeight(0) + 16 + 4) + 5);
	for (n = g + 1; p = b[n]; n++) t = a.A[p], u = a.C[p].getHeight(0) + 16 + 4, h = Math.max(h, c[p]), x1a(t, h, d), h = h + u + 5
}
F.zva = function() {
	nz(this)
};
F.GG = function() {
	nz(this)
};
F.O = function() {
	for (var a in this.C) O(this.C[a]);
	for (a in this.A) O(this.A[a]);
	kz.M.O.call(this)
};

function r2a(a, b, c) {
	this.A = new Yx(a, b, Te, Td, c, Se)
}
L(r2a, ax);
F = r2a.prototype;
F.Se = function(a) {
	Hr(a, Mh, Yfa, 211, dka, uxa, sga, k, l, k, k, k, dka, PCa);
	a.gb(SFa, zha, 178, zha, k, k, k, l);
	a.gb(tIa, r, 274)
};
F.KT = function(a) {
	var b = this.A;
	Vw(a, Te)[bf] = b
};
F.LT = function(a, b, c) {
	s2a(b, new t2a(c))
};
F.$n = function(a, b) {
	var c = a.ma();
	pz(b, BFa, new Xx(c));
	Rx(b, Se, new Tx(c))
};
F.O = function() {
	O(this.A);
	delete this.A;
	r2a.M.O.call(this)
};

function t2a(a) {
	this.A = a
}
t2a.prototype.gV = function(a) {
	return new kz(a, this.A)
};

function u2a(a, b) {
	$x.call(this, a, new e1a(Zi, dk));
	this.A = b
}
L(u2a, $x);
F = u2a.prototype;
F.Zg = m;
F.wH = m;
F.HS = m;
F.IB = m;
F.FG = m;
F.Qja = q;
F.vb = function(a, b, c, d, e) {
	this.Zg = a;
	this.Zg.setOption(Docos.OptionName.DOC_SCROLLER, K(this.GTa, this));
	this.wH = b;
	this.HS = e;
	this.IB = d;
	this.FG = c;
	this.Zg.setListener(Docos.EventType.CREATED, K(this.DTa, this));
	this.Zg.setListener(Docos.EventType.POSTED, K(this.nM, this));
	this.Zg.setListener(Docos.EventType.DELETED, K(this.ETa, this));
	this.Zg.setListener(Docos.EventType.SELECTED, K(this.Xt, this));
	this.Zg.setListener(Docos.EventType.INITIAL_SYNC_SUCCESS, K(this.FTa, this));
	a = K(this.oM, this);
	this.Zg.setListener(Docos.EventType.RESOLVED,
	a);
	this.Zg.setListener(Docos.EventType.UNRESOLVED, a);
	this.Zg.updateAll();
	v2a(this);
	w2a(this)
};
F.ha = function() {
	this.Sb(this.ma().ha(Rb, VFa));
	v2a(this)
};
F.za = function() {
	u2a.M.za.call(this);
	w2a(this)
};

function w2a(a) {
	if (a.bb() && a.Zg) {
		var b = a.Q;
		T(a).A(b.A, Lf, a.rLa).A(b.A, Kf, a.WB);
		a.FG && T(a).A(a.FG, gsa, a.qLa);
		a.WB()
	}
}

function v2a(a) {
	if (a.N() && a.Zg) {
		a.Zg.setOption(Docos.OptionName.ANCHOR_DIV, a.Tb());
		var b = a.ma().Mb(qFa);
		a.Zg.setOption(Docos.OptionName.SCROLL_CONTAINER_DIV, b);
		a.Zg.renderAnchorSurface()
	}
}
F.rLa = function(a) {
	if (a.A) {
		a = this.IB.f0(a.C.Lb);
		var b = this.IB.f0(Hs(this.Q.A.A.getSelection()));
		a != b && b ? this.Zg.highlightAnchor(b) : b || this.Zg.highlightAnchor(r)
	}
};
F.GG = function() {
	this.WB()
};
F.nU = function() {
	this.WB()
};
F.WB = function() {
	if (this.IB) {
		var a = this.getParent(),
			b = {}, c = this.IB.KUa(),
			d;
		for (d in c) {
			var e = ow(a, c[d]);
			e && (b[d] = e)
		}
		this.Zg.flushAnchors(b)
	}
};
F.Xt = function(a) {
	var b = m;
	0 < a.anchors.length && (b = a.anchors[0]);
	this.FG && (a.nonAnchored || b && !this.IB.j0(b)) && this.FG.Qia(l);
	this.wH.pF(b)
};
F.qLa = function() {
	this.HS.qe(3)
};
F.GTa = function(a, b) {
	var c = this.IB.j0(a);
	if (a && c) {
		var d = this.getParent(),
			e = ow(d, c);
		if (e) {
			var g = x2a(d);
			if (e.y < g.start + 30 || e.y > g.end) {
				var h = this.Zg.getDocoPosition(a),
					h = h ? h.y : m;
				y2a(d, h == m || h < g.start || h > g.end ? e.y - 30 : e.y - (h - g.start))
			}
			b && (this.HS.qe(3), Bu(this.Q.A, Ls(c), l, q), this.FG.Qia(q))
		}
	}
};
F.ETa = function(a) {
	var b = U.gJ;
	if (a.userInitiated && b && 0 < a.anchors.length) for (var c = 0; c < a.anchors.length; ++c) {
		var d = {};
		d.eId = a.anchors[c];
		b.qb(d)
	}
	b1a(this.wH)
};
F.nM = function(a) {
	if (0 < a.anchors.length) {
		this.HS.qe(3);
		a = this.Q.A;
		var b = Is(a.A.getSelection());
		b && Bu(a, Ls((new ws(b.C)).shift(1)), l, l)
	}
};
F.oM = function(a) {
	for (var b = 0; b < a.anchors.length; ++b) this.wH.K(a.anchors[b]);
	this.wH.pF(m);
	this.WB()
};
F.FTa = function() {
	this.Qja = l;
	this.WB()
};
F.DTa = function() {
	b1a(this.wH);
	this.WB()
};
F.Jp = function() {
	return (this.Zg && this.Qja ? this.Zg.hasVisibleAnchoredDocos() : this.A) ? 200 : 0
};
F.getHeight = D(0);
F.OG = D(m);
F.rr = D(m);
F.Ar = D(m);
F.PG = G;
F.Ef = D(q);
F.zG = G;
F.fv = G;
F.Wx = D(m);
F.Zq = D(m);

function z2a(a) {
	$x.call(this, a);
	this.C = a.L;
	this.A = []
}
L(z2a, $x);
F = z2a.prototype;
F.Jp = D(0);
F.getHeight = D(0);
F.OG = D(m);
F.rr = D(m);
F.Ar = D(m);
F.Zq = D(m);
F.PG = G;
F.Ef = function() {
	for (var a = m2a(this.C, Td), b = 0; b < a.length; b++) this.A.push(a[b].id);
	a = n2a(this.C, Td);
	for (b = 0; b < a.length; b++) on(this.A, a[b].id) || this.Q.ra.log(Error(Vna));
	for (a = 0; a < this.A.length; a++) A2a(this.C, this.A[a]);
	return q
};
F.zG = G;
F.fv = G;
F.Wx = D(m);

function qz(a) {
	this.F = a
}
L(qz, ax);
qz.prototype.A = m;
qz.prototype.LT = function(a, b) {
	s2a(b, new B2a);
	this.A = new C2a(this.F);
	s2a(b, this.A)
};
qz.prototype.lj = function(a) {
	a.Ea(U.yI);
	a.Ea(U.uj);
	a.Ea(U.gJ);
	a.Ea(U.hJ);
	a.Ea(U.iJ);
	a.Ea(U.jJ)
};

function C2a(a) {
	this.C = a;
	this.A = []
}
F = C2a.prototype;
F.T1 = m;
F.Lfa = m;
F.Kfa = m;
F.Ifa = m;
F.Jfa = m;
F.gV = function(a) {
	a = new u2a(a, this.C);
	this.T1 ? a.vb(this.T1, this.Lfa, this.Jfa, this.Ifa, this.Kfa) : this.A.push(a);
	return a
};
F.vb = function(a, b, c, d, e) {
	this.T1 = a;
	this.Lfa = b;
	this.Jfa = c;
	this.Ifa = d;
	this.Kfa = e;
	for (var g = 0, h; h = this.A[g]; g++) h.cd() || h.vb(a, b, c, d, e);
	this.A = []
};

function B2a() {}
B2a.prototype.gV = function(a) {
	return new z2a(a)
};

function D2a() {}
L(D2a, ax);
D2a.prototype.lj = function(a) {
	a.Ea(U.hI)
};

function E2a() {}
L(E2a, ax);
E2a.prototype.Se = function(a) {
	Hr(a, Oh, Yha, 213, eka, vxa, k, k, k, k, k, k, fka, lLa);
	Hr(a, OIa, r, 295)
};

function F2a() {}
L(F2a, ax);
F2a.prototype.Se = function(a) {
	a.gb(jHa, r, 237);
	a.gb(uIa, r, 275);
	a.gb(PIa, r, 296);
	a.gb(Oua, r, 662, k, k, Lga);
	a.gb(NEa, r, 679, k, k, Mga);
	a.gb(vKa, r, 661)
};
F2a.prototype.Fm = function(a) {
	a.gb(mHa, r, 256, k, k, rr([vc, cc]));
	a.gb(nHa, r, 257, k, k, rr([Bc, cc]))
};

function G2a(a, b) {
	this.cb = a;
	this.A = b
}
G2a.prototype.aa = C(Fd);
G2a.prototype.ob = function(a) {
	return a.aa() == this.cb && a.A == this.A
};

function H2a() {
	this.A = []
}
var I2a = {}, J2a = 1;

function rz(a, b, c, d) {
	var e, g = m;
	c = b.ye;
	if (!d && c && (g = r, g == c.A)) {
		e = c.aa();
		var h = a.A[e];
		if (h) return h
	}
	var n = b.Mr,
		p = b.Fp,
		t = b.Yu,
		u = b.Zu,
		x = b.$u;
	c = b.ld();
	var y = nv(b),
		B = b.Cf,
		E = K2a(b.nh),
		H = K2a(b.Um());
	d && (I(d.ts_bd) && (n = !! d.ts_bd), I(d.ts_it) && (p = !! d.ts_it), I(d.ts_sc) && (t = !! d.ts_sc), I(d.ts_st) && (u = !! d.ts_st), I(d.ts_un) && (x = !! d.ts_un), I(d.ts_ff) && (c = d.ts_ff), I(d.ts_fs) && (y = d.ts_fs, y = Ru(Pu.ya(), y)), I(d.ts_va) && (B = d.ts_va), h = SYa(), I(d[h]) && (E = d[h]), h = pv(), I(d[h]) && (H = d[h]));
	if (!e) {
		switch (B) {
			case Mk:
				e = 1;
				break;
			case Ok:
				e = 2;
				break;
			default:
				e = 0
		}
		var h = n | p << 1 | x << 2 | t << 3 | u << 4 | e << 5 | Math.round(100 * y) << 7,
			J;
		if ((J = I2a[c]) && (J = J[H]) && (J = J[E]) && (J = J[h])) {
			if (e = J, d || (b.ye = new G2a(e, g == m ? r : g)), h = a.A[e]) return h
		} else {
			e = J2a;
			J2a++;
			J = [c, H, E];
			for (var $ = I2a, V = 0; V < J.length; V++) {
				var ca = J[V],
					ia = $[ca];
				ia || (ia = $[ca] = {});
				$ = ia
			}
			$[h] = e;
			d || (b.ye = new G2a(e, g == m ? r : g))
		}
	}
	b = (B || mj) != mj ? Math.round(0.6 * y) : y;
	d = E;
	c = sz(c, q);
	c = c.match(/[^-a-zA-Z]/) ? Ga + c + Ga : c;
	c = $Ca + b + bMa + c;
	d && (c += lda + d);
	c = c + (ida + (H ? H : gl)) + (qda + (n ? w : A));
	c += oda + (p ? z : A);
	c += pda + (t ? ENa : A);
	c += tda + (x && u ? APa : x ? wl : u ? kJa : lj);
	u = r;
	switch (B) {
		case mj:
			u = $sa;
			break;
		case Mk:
			u = Mk;
			break;
		case Ok:
			u = gOa
	}
	c += uda + u + pb;
	return a.A[e] = c
};
var L2a = RegExp("[\n\r ]+", kg);
var M2a = RegExp(ea, kg),
	N2a = RegExp(fa, kg),
	O2a = /\t/g,
	P2a = /</g,
	Q2a = />/g,
	R2a = /&/g,
	S2a = / /g,
	T2a = RegExp(Ul, kg),
	U2a = RegExp(Vl, kg),
	V2a = RegExp(Wl, kg),
	W2a = RegExp(Xl, kg),
	X2a = /"/g,
	Y2a = Eo ? '<span class="Apple-tab-span" style="white-space:pre;">\t</span>' : "&nbsp;&nbsp;&nbsp; ",
	Z2a = at([ba, qb, Ab, Ba, Ul, Vl, Wl, Xl, sa, ea], l);

function sz(a, b, c) {
	if (0 == a.length) return a;
	if (1 == a.length) return $2a(a, b, c);
	Z2a.test(a) && (-1 != a.indexOf(Ba) && (a = a.replace(R2a, Ca)), -1 != a.indexOf(sa) && (a = a.replace(X2a, jba)), -1 != a.indexOf(qb) && (a = a.replace(P2a, Ea)), -1 != a.indexOf(Ab) && (a = a.replace(Q2a, Da)), -1 != a.indexOf(Ul) && (a = a.replace(T2a, hba)), -1 != a.indexOf(Vl) && (a = a.replace(U2a, mba)), -1 != a.indexOf(Wl) && (a = a.replace(V2a, fba)), -1 != a.indexOf(Xl) && (a = a.replace(W2a, kba)), -1 != a.indexOf(ba) && (a = a.replace(O2a, c ? r : Y2a)), -1 != a.indexOf(ea) && (a = a.replace(M2a,
	Hda)));
	b && -1 != a.indexOf(s) && (a = a.replace(S2a, Fa));
	b && -1 != a.indexOf(fa) && (a = a.replace(N2a, Nda));
	return a
}
function $2a(a, b, c) {
	switch (a) {
		case s:
			return b ? Fa : a;
		case ba:
			return c ? r : Y2a;
		case Ab:
			return Da;
		case qb:
			return Ea;
		case Ba:
			return Ca;
		case Ul:
			return hba;
		case Vl:
			return mba;
		case Wl:
			return fba;
		case Xl:
			return kba;
		case sa:
			return jba;
		case ea:
			return Hda;
		case fa:
			return b ? Nda : a;
		default:
			return a
	}
}
var a3a = {
	circle: 1,
	square: 2,
	decimal: 3,
	"upper-alpha": 4,
	"lower-alpha": 5,
	"upper-roman": 6,
	"lower-roman": 7,
	disc: 0,
	none: 8
}, b3a = zRa(a3a);

function tz() {
	this.A = []
}
L(tz, H2a);
mm(tz);

function c3a(a, b, c, d) {
	this.Hg = a;
	this.height = b;
	this.A = c;
	this.wc = d
};

function d3a(a) {
	lx.call(this, a);
	ts(ps.ya(), Hi, this.GSa, this, q, q, l)
}
L(d3a, mx);
F = d3a.prototype;
F.DZ = 0;
F.vQ = 0;
F.sc = m;
F.TM = m;
F.Bp = m;
F.aF = m;
F.EZ = q;
F.QM = m;
F.GSa = function() {
	this.aF = qs(Hi).wf.C()(this.Q.A, this.Q.ra);
	this.EZ && v0a(this.Q.L, [new xs(this.DZ, this.DZ + this.vQ - 1)])
};
F.Df = function() {
	return this.TM || new vo(0, 0)
};
F.ha = function() {
	var a = this.ma().ha(Rb, lg);
	a.dir = Xi;
	a.innerHTML = this.QM;
	this.Sb(a)
};
F.bd = C("vQ");
F.vb = function(a) {
	var b = this.Q.ba().qa().indexOf(pa, a);
	0 > b && (b = a);
	this.vQ = b - a + 1;
	b = this.sc = this.Q.ba().Ra(Wk, a);
	this.aF ? (this.QM = this.aF.Va(a, rz(tz.ya(), b)), this.TM = this.aF.Df(), this.TM || (this.TM = ox(this.Q.ea, b, this.QM)), this.Bp = this.aF.G, this.C = this.aF.C, this.EZ = q) : (this.QM = qc, this.TM = ox(this.Q.ea, b, this.QM), this.C = this.Bp = m, this.EZ = l);
	this.ha();
	this.DZ = a
};
F.WR = function(a, b) {
	if (!this.Bp) return m;
	for (var c = Number.MAX_VALUE, d = m, e = 0; e < this.Bp.length; ++e) {
		var g = this.Bp[e];
		g && (g = (a - g.x) * (a - g.x) + (b - g.y) * (b - g.y), g < c && (c = g, d = e))
	}
	return d == m ? m : new ws(d)
};
F.L_ = function(a, b, c) {
	if (!this.Bp || c && !this.C || 0 != a.xa()) return m;
	b = a.A() - b;
	if (0 > b || b >= this.vQ) return m;
	a = this.Bp[b];
	b = this.C[b];
	return a ? new c3a(0, b, a.La(), l) : m
};
F.Eca = function(a) {
	if (!this.Bp) return [];
	var b = this.Bp[a.start],
		c = this.Bp[a.end + 1];
	if (!b || !c) return [];
	for (var b = b.x, c = c.x, d = Number.MAX_VALUE, e = -Number.MAX_VALUE, g = a.start; g <= a.end; g++) {
		var h = this.Bp[g],
			n = this.C[g];
		h && n && (d = Math.min(h.y, d), e = Math.max(h.y + n, e))
	}
	return d >= e ? [] : [new PXa(b, d, c - b, e - d)]
};

function uz() {}
mm(uz);
uz.prototype.A = function(a, b) {
	return this.Ye(a, b.ba()) ? new d3a(b) : m
};
uz.prototype.Ye = function(a, b) {
	return Ts(b.qa(), a) == la
};
var e3a = at([la, pa, ea, aa, ba, ga, ha, ja, na, fa, $l, Zl, da]);

function vz(a, b) {
	var c = a.lastIndexOf(la, b);
	if (1 > c) return m;
	var d = a.indexOf(pa, c);
	return b <= d ? new xs(c, d) : m
}
function wz(a, b) {
	return Ts(a, b) == la ? q : !! vz(a, b)
}
function f3a(a) {
	return wz(a.ba().qa(), qt(a.A))
}

function g3a(a, b) {
	b = b.La();
	var c = a.indexOf(la, b.start),
		d = a.indexOf(pa, b.start);
	if (1 > c && 1 > d) return b;
	for (var e = 1 < c && c < d ? c : b.start, c = a.lastIndexOf(la, b.end), d = a.lastIndexOf(pa, b.end), g = 1 < c && c < d ? d : b.end, h = c = 0, d = 1; e <= g; e++) {
		var n = Ts(a, e);
		switch (n) {
			case la:
			case ka:
				h++;
				break;
			case pa:
			case ma:
				h--;
				break;
			case oa:
				h < d && (d = h)
		}
		h < c && (c = h);
		if (n == pa && e < g) {
			e = a.indexOf(la, e);
			if (1 > e) break;
			e -= 1
		}
	}
	g = -c;
	h -= c;
	d == c && (g++, h++);
	c = b;
	for (d = g; 0 < d && 0 < c.start;) switch (c.start--, g = Ts(a, c.start), g) {
		case la:
		case ka:
			d--;
			break;
		case pa:
		case ma:
			d++
	}
	for (d = a.ub(); 0 < h && c.end < d;) switch (c.end++, g = Ts(a, c.end), g) {
		case la:
		case ka:
			h++;
			break;
		case pa:
		case ma:
			h--
	}
	return b
};

function xz(a, b, c) {
	this.F = a;
	this.A = I(b) ? b : A;
	this.C = I(c) ? c : A;
	this.kr = this.F + Na + this.A + Na + this.C
}
xz.prototype.nVa = C("kr");
xz.prototype.ld = C($b);
xz.prototype.Ra = C(Jb);
xz.prototype.ob = function(a) {
	return a != m && a.nVa != m && this.kr == a.kr
};

function h3a(a, b) {
	R.call(this, SEa, a);
	this.A = b
}
L(h3a, R);

function i3a(a) {
	var b = m;
	try {
		b = a.rules || a.cssRules
	} catch (c) {
		15 == c.code && (c.styleSheet = a, f(c))
	}
	return b
}

function j3a(a) {
	var b = [];
	a = a || document.styleSheets;
	var c = I(k) ? k : q;
	if (a.imports && a.imports.length) for (var d = 0, e = a.imports.length; d < e; d++) sn(b, j3a(a.imports[d]));
	else if (a.length) {
		d = 0;
		for (e = a.length; d < e; d++) sn(b, j3a(a[d]))
	} else {
		var g = i3a(a);
		if (g && g.length) for (var d = 0, e = g.length, h; d < e; d++) h = g[d], h.styleSheet && sn(b, j3a(h.styleSheet))
	}(a.type || a.rules || a.cssRules) && (!a.disabled || c) && b.push(a);
	return b
}

function k3a(a) {
	var b = r;
	a.cssText ? b = a.cssText : a.style && (a.style.cssText && a.selectorText) && (b = a.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, r).replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, r), b = a.selectorText + Naa + b + Oaa);
	return b
}
function l3a(a) {
	return a.parentStyleSheet || a.style && a.style[Jba]
}

function m3a(a, b) {
	var c = l3a(a);
	if (c) {
		var d;
		a: if (a.style && a.style[Kba]) d = a.style[Kba];
		else {
			(d = c || l3a(a)) || f(Error("Cannot find a parentStyleSheet."));
			if ((d = i3a(d)) && d.length) for (var e = 0, g = d.length, h; e < g; e++) if (h = d[e], h == a) {
				d = e;
				break a
			}
			d = -1
		}
		if (0 <= d) {
			c.deleteRule ? c.deleteRule(d) : c.removeRule(d);
			if (0 > d || d == k) d = (c.rules || c.cssRules).length;
			c.insertRule ? c.insertRule(b, d) : (e = /^([^\{]+)\{([^\{]+)\}/.exec(b), 3 == e.length ? c.addRule(e[1], e[2], d) : f(Error("Your CSSRule appears to be ill-formatted.")))
		} else f(Error("Cannot proceed without the index of the cssRule."))
	} else f(Error("Cannot proceed without the parentStyleSheet."))
}

function n3a(a, b) {
	var c = b ? b.sb() : document,
		d = c.createElement(Lk);
	d.type = ROa;
	c.getElementsByTagName(og)[0].appendChild(d);
	d.styleSheet ? d.styleSheet.cssText = a : d.appendChild(c.createTextNode(a))
};

function yz(a) {
	this.G = this.Xa = a;
	this.F = Ko(this.Xa);
	this.A = o3a(this)
}
L(yz, M);
yz.prototype.C = m;

function o3a(a) {
	return a.F.ha(Ak, {
		style: aDa
	}, aea)
}
function zz() {
	if (p3a == m) {
		var a = Ro(Ak, {
			style: zLa
		});
		document.body.appendChild(a);
		p3a = new yz(a)
	}
	return p3a
}
var p3a = m;

function Az(a, b, c) {
	To(a.Xa);
	var d = [];
	b.ld() != r && d.push(Ga + b.ld() + Ga);
	c != r && d.push(c);
	c = 0 < d.length ? d.join(La) : m;
	Gp(a.A, ZCa, c != m ? c : r);
	Gp(a.A, cDa, b.A);
	Gp(a.A, bDa, b.Ra());
	a.F.appendChild(a.Xa, a.A);
	b = a.Xa.offsetWidth;
	a.Xa.removeChild(a.A);
	return b
}
yz.prototype.O = function() {
	yz.M.O.call(this);
	Wo(this.G);
	delete this.G;
	delete this.Xa;
	delete this.C;
	delete this.A
};

function q3a(a) {
	this.G = a;
	this.F = {};
	this.Y = m;
	this.L = 0;
	this.W = m;
	this.K = 0;
	a = -1;
	if (Q) try {
		a = parseFloat(Ho)
	} catch (b) {}
	this.C = a;
	this.A = 0
}
var r3a = m;

function s3a() {
	r3a || (r3a = new q3a(Ko()));
	return r3a
}

function t3a(a, b, c, d) {
	if (9 <= a.C) {
		var e = c.sb(),
			g = K(d ? a.uDa : a.vDa, a),
			h = K(d ? a.yDa : a.zDa, a);
		c = K(d ? a.sDa : a.tDa, a);
		d = K(d ? a.wDa : a.xDa, a);
		if (g() == m || 4096 < c() + 4) {
			d(0);
			var n = e.getElementsByTagName(og)[0],
				e = e.createElement(Lk);
			e.type = ROa;
			n.insertBefore(e, n.lastChild);
			h(e.styleSheet)
		}
		g = g();
		if (g.cssRules) {
			a = b.split(Pda);
			for (b = 1; b < a.length; b++) g.insertRule(Pda + a[b], g.cssRules.length);
			d(c() + a.length - 1)
		} else 20 <= a.A || n3a(b, a.G)
	} else n3a(b, c)
}

function u3a(a, b) {
	for (var c = {}, d = 0; d < b.length; d++) {
		for (var e = b[d].ld(), g = c, h = e, n = Pm, p = c[e], t = b[d], u = Qda, u = u + (eaa + t.ld() + pba), u = u + (faa + t.Ra() + eda), u = u + (gaa + t.F + eda), u = u + haa, x = m, y = t.A, B = 0; B < y.length; B++) {
			var E = y[B];
			E.C ? (E = E.Xb(), u += Aaa + E + oba) : (x && f(Error("Must have exactly one non-local source entry to generate CSS for " + t.ld())), x = E.Xb())
		}
		x || f(Error("Must have at least one non-local source entry to generate CSS for " + t.ld()));
		u += Laa + x + Ia;
		u += vaa + y[0].A + nba;
		u += fda;
		g[h] = n(p, u)
	}
	d = r;
	for (e in c) if (!a.F[e]) {
		if (!Q || 8 < a.C ? 0 : 20 <= a.A) break;
		g = c[e];
		d += g;
		a.F[e] = g
	}
	if (d && (c = d, t3a(a, c, a.G, q), a.A++, e = zz().C)) e = Ko($o(e)), t3a(a, c, e, l)
}
F = q3a.prototype;
F.vDa = C(Zc);
F.zDa = im(Zc);
F.tDa = C(oc);
F.xDa = im(oc);
F.sDa = C(mc);
F.wDa = im(mc);
F.uDa = C(Wc);
F.yDa = im(Wc);

function v3a() {
	this.A = {}
}
v3a.prototype.contains = function(a) {
	return !!this.A[a.kr]
};

function Bz() {
	this.ab = new cq(200);
	this.C = [];
	this.A = [];
	this.R = new S(this);
	this.R.A(this.ab, al, this.K)
}
Bz.prototype.Bc = m;

function w3a(a, b) {
	a.Bc || f(Error("The callback function must be set before adding tasks to the FontInstallTimer."));
	a.C.push(b);
	a.ab.start()
}
Bz.prototype.F = function(a) {
	on(this.C, a);
	jn(this.C) && this.ab.stop()
};
Bz.prototype.K = function() {
	kn(this.A);
	Vm(this.C, this.G, this);
	this.A.length && this.Bc(this.A);
	Vm(this.A, this.F, this)
};
Bz.prototype.G = function(a) {
	a.init();
	a.Cba++;
	var b = 300 <= a.Cba,
		c;
	c = a.uba;
	var d = a.vba,
		e = Az(a.C, a.A, $ea),
		g = Az(a.C, a.A, qba),
		h = a.WA && a.WA[e] && a.WA[g];
	a.F && (!a.Dba && h && e == g) && (a.Dba = l, a.WA = [], a.WA[e] = l);
	c = a.F && !! x3a[a.A.ld()] && 5E3 < a.G() - a.K || (e != c || g != d) && (a.WA == m || !h);
	a.RZ = c;
	a.Bba = a.RZ || b;
	a.Bba && this.A.push(a)
};

function y3a(a, b, c, d) {
	this.C = a;
	this.A = b;
	this.F = c;
	this.G = d;
	this.K = d()
}
var z3a = {}, x3a = {
	Arimo: l,
	Cousine: l,
	Quattrocento: l,
	Tinos: l
}, A3a = {};

function B3a(a, b, c) {
	return new y3a(zz(), a, b, c)
}
F = y3a.prototype;
F.Cba = 0;
F.WA = m;
F.Dba = q;
F.uba = 0;
F.vba = 0;
F.Dda = q;
F.Bba = q;
F.RZ = q;

function C3a(a, b) {
	var c = b + a.A.A + a.A.Ra(),
		d = A3a[c];
	I(d) || (d = new xz(r, a.A.A, a.A.Ra()), d = Az(a.C, d, b), A3a[c] = d);
	return d
}
F.init = function() {
	if (!this.Dda) {
		this.uba = C3a(this, $ea);
		this.vba = C3a(this, qba);
		var a;
		if (this.F) {
			a = this.A.A + this.A.Ra();
			if (!z3a[a]) {
				for (var b = [vqa, Zea, uqa, uoa, Koa], c = b.length, d = [], e = 0; e < c; e++) {
					var g = b[e],
						h;
					h = this.A.Ra();
					h = Az(this.C, new xz(g, this.A.A, h), r);
					d[h] = l;
					this.A.A != A && (h = this.A.Ra(), g = Az(this.C, new xz(g, A, h), r), d[g] = l)
				}
				z3a[a] = d
			}
			a = rn(z3a[a])
		} else a = m;
		this.WA = a;
		this.Dda = l
	}
};

function D3a(a, b, c, d, e) {
	this.C = a;
	this.F = b;
	this.W = c;
	this.G = d;
	this.K = e;
	a = K(this.L, this);
	this.K.Bc = a;
	this.A = {}
}
L(D3a, bq);
D3a.prototype.Lt = function(a) {
	var b = [],
		c = {};
	if (!Q || 8 < this.C.C ? 0 : 20 <= this.C.A) return pRa(DEa, a.length);
	for (var d = [], e = 0; e < a.length; e++) {
		var g = a[e];
		b[e] = E3a(this, g);
		if (!b[e]) {
			b[e] = this.A[g.kr] = TEa;
			var h = g.ld();
			c[h] = F3a(this.G, h);
			d.push(g)
		}
	}
	if (!Rn(c)) {
		e = [];
		for (h in c) e = e.concat(c[h]);
		u3a(this.C, e)
	}
	for (e = 0; e < d.length; e++) c = this.W(d[e], Eo, function() {
		return (new Date).getTime()
	}), w3a(this.K, c);
	return b
};

function E3a(a, b) {
	var c = b.kr;
	a.A[c] ? c = a.A[c] : (c = b.ld(), c = !a.G.A[c] ? Hta : m);
	return c
}
D3a.prototype.L = function(a) {
	for (var b = [], c = 0; c < a.length; c++) {
		var d = a[c];
		if (d.RZ) {
			d = d.A;
			this.A[d.kr] = SEa;
			var e = this.F,
				g = d;
			e.contains(g) || (e.A[g.kr] = l);
			b.push(d)
		}
	}
	this.dispatchEvent(new h3a(this, b))
};

function G3a(a, b) {
	R.call(this, Nta, a);
	this.A = b
}
L(G3a, R);

function Cz() {}
mm(Cz);
for (var Dz = [Zea, "Comic Sans MS", iga, qja, "Impact", vqa, "Trebuchet MS", "Verdana"], H3a = {
	ar: "Arabic Typesetting;Sakkal Majalla;Simplified Arabic;Traditional Arabic;Al Bayan;Baghdad;DecoType Naskh;KufiStandardGK;Nadeem".split(";"),
	hi: ["Aparajita", "Kokila", "Mangal", "Utsaah", "Devanagari MT"],
	iw: "Aharoni;David;FrankRuehl;Gisha;Levenim MT;Miriam;Narkisim;Rod;Arial Hebrew;Corsiva Hebrew;New Peninim MT;Raanana".split(";"),
	ja: "Meiryo;MS Gothic;MS Mincho;MS PGothic;MS PMincho;HiraMaruPro-W4;HiraMinPro-W3;HiraKakuPro-W3;HiraMaruProN-W4;HiraMinProN-W3;HiraKakuProN-W3".split(";"),
	ko: "Batang;Batangche;Dotum;Dotumche;Gulim;Gulimche;Gungsuh;Malgun Gothic;GungSeo;HeadLineA;PCMyungjo;Pilgi".split(";"),
	th: "Angsana New;AngsanaUPC;Browallia New;BrowalliaUPC;Cordia New;CordiaUPC;DilleniaUPC;EucrosiaUPC;FreesiaUPC;IrisUPC;JasmineUPC;KodchiangUPC;Leelawadee;LilyUPC;Ayuthaya;Krungthep;Sathu;Silom;Thonburi".split(";"),
	"zh-CN": "SimSun;SimSun-ExtB;SimHei;NSimSun;Microsoft Yahei;FangSong;KaiTi;Hei;Heiti SC;Kai;STFangsong;STHeiti;STKaiti;STsong".split(";"),
	"zh-TW": "PMingLiu;PMingLiu-ExtB;MingLiu;MingLiu-ExtB;Microsoft JhengHei;DFKai-SB;BiauKai;Heiti TC;LiHei Pro;LiSong Pro".split(";")
}, Ez = {}, Fz = 0; Fz < Dz.length; Fz++) {
	var I3a = Dz[Fz];
	Ez[I3a.toLowerCase()] = I3a
}
for (var J3a in H3a) for (var K3a = H3a[J3a], Fz = 0; Fz < K3a.length; Fz++) {
	var L3a = K3a[Fz];
	Ez[L3a.toLowerCase()] = L3a
}
var M3a = {
	serif: vqa,
	"sans-serif": Zea,
	cursive: vqa,
	fantasy: "Comic Sans MS",
	monospace: "Verdana"
};
Cz.prototype.zT = function(a) {
	return Gz(0, a) || M3a[a.toLowerCase()] || m
};

function Gz(a, b) {
	return b ? Ez[b.toLowerCase()] || m : m
};

function Hz() {}
L(Hz, Cz);
mm(Hz);
Hz.prototype.UI = gm();

function N3a() {
	this.A = {}
}
function O3a(a, b) {
	var c = a.A[b];
	if (!c) return q;
	for (var d in c) if (!c[d]) return q;
	return l
};

function P3a(a, b, c) {
	this.A = a;
	this.ra = b;
	this.F = c;
	this.R = new S(this);
	this.C = new N3a;
	this.R.A(this.F, Nta, this.Lya).A(this.A, SEa, ju(this.ra, this.Kya, this));
	this.G = q
}
L(P3a, bq);
var Q3a = [
	[A, A],
	[w, A],
	[A, z],
	[w, z]
];
F = P3a.prototype;
F.Lya = function(a) {
	a: {
		var b = a.A;
		if (!this.G) {
			a = [];
			for (var c = 0; c < b.length; c++) if (!this.C.A[b[c]]) for (var d = Q3a.length, e = 0; e < d; e++) {
				var g = Q3a[e],
					g = new xz(b[c], g[0], g[1]);
				this.A.F.contains(g) || a.push(g)
			}
			if (a.length) {
				b = this.A.Lt(a);
				for (c = 0; c < b.length; c += d) for (e = g = 0; e < d; e++) {
					var h = b[c + e];
					if (h == TEa) {
						var h = this.C,
							n = a[c + e],
							p = n.ld(),
							n = n.kr;
						h.A[p] || (h.A[p] = {});
						h.A[p][n] || (h.A[p][n] = q);
						g++
					} else if (h == DEa) {
						this.G = l;
						break a
					}
				}
			}
		}
	}
};
F.Kya = function(a) {
	for (var b = [], c = 0; c < a.A.length; c++) {
		var d = a.A[c],
			e = this.C,
			g = d,
			h = g.ld(),
			g = g.kr;
		e.A[h] || (e.A[h] = {});
		e.A[h][g] = l;
		d = d.ld();
		O3a(this.C, d) && b.push(d)
	}
	b.length && this.dispatchEvent(new R3a(this, b))
};
F.UI = function(a) {
	var b = a.ld();
	return !Gz(Hz.ya(), b) && !this.A.F.contains(new xz(b, a.Mr ? w : A, a.Fp ? z : A)) ? PYa(a, l) : a
};
F.zT = function(a) {
	var b = Hz.ya().zT(a);
	b || (b = this.F.F[a.toLowerCase()] || m);
	return b
};
F.O = function() {
	P3a.M.O.call(this);
	O(this.R);
	delete this.R;
	O(this.A);
	delete this.A;
	delete this.ra;
	delete this.F
};

function R3a(a, b) {
	R.call(this, gg, a);
	this.A = b
}
L(R3a, R);

function S3a(a, b, c, d) {
	this.C = b;
	this.F = c;
	this.A = d;
	this.R = new S(this);
	this.R.A(a, gg, this.G)
}
S3a.prototype.G = function() {
	if (this.A()) {
		for (var a = this.C.qa(), b = -1, c = []; 0 <= (b = a.indexOf(pa, b + 1));) c.push(vz(a, b));
		v0a(this.F, c)
	}
};

function Iz(a) {
	return a.G != Wk
};

function T3a(a) {
	switch (a.xa()) {
		case PNa:
			return a.K;
		case Hk:
			return a.K
	}
	f(Error("Tried to get marker for non feature node"))
};

function Jz(a, b, c, d, e) {
	this.G = a;
	this.K = b;
	this.F = c;
	this.C = d;
	this.A = e
}
F = Jz.prototype;
F.eL = jm(183);
F.VR = jm(3);
F.yL = jm(103);
F.xL = jm(190);
F.cka = C(Eb);

function U3a() {
	Jz.call(this, q, q, q, 2, ka)
}
L(U3a, Jz);

function Kz() {}
function V3a(a, b) {
	var c = g3a(a, new xs(b, b));
	return Ts(a, c.start) != ka || Ts(a, c.end) != ma ? m : c
}
Kz.prototype.C = function(a, b) {
	var c = V3a(a, b);
	return c ? c.start : -1
};
Kz.prototype.F = function(a, b) {
	var c = V3a(a, b);
	return c ? c.end : -1
};
Kz.prototype.G = jm(12);
Kz.prototype.A = jm(153);

function Lz(a, b, c, d, e) {
	this.K = a;
	this.G = b;
	this.F = c;
	this.C = d;
	this.A = e
}
F = Lz.prototype;
F.eL = jm(182);
F.VR = jm(2);
F.yL = jm(102);
F.xL = jm(189);
F.cka = C(Eb);

function W3a() {
	Lz.call(this, l, q, q, 2, la)
}
L(W3a, Lz);

function Mz() {}
Mz.prototype.C = function(a, b) {
	var c = vz(a, b);
	return c ? c.start : -1
};
Mz.prototype.F = function(a, b) {
	var c = vz(a, b);
	return c ? c.end : -1
};
Mz.prototype.G = jm(11);
Mz.prototype.A = jm(152);

function X3a() {}
X3a.prototype.rba = D(m);
X3a.prototype.uja = function(a, b) {
	return Y3a(a.qa(), b)
};
X3a.prototype.sba = function(a, b, c) {
	return Y3a(a.qa(), b, c)
};

function Y3a(a, b, c) {
	var d = vz(a, b.start),
		e = vz(a, b.end);
	if (!d && !e) return b;
	if (d && e && ys(d, e)) return g3a(a, b);
	a = b.La();
	d && (a.start = c && c < b.start && c >= d.start ? d.end + 1 : d.start);
	e && (a.end = c && c > b.end && c <= e.end + 1 ? e.start - 1 : e.end);
	return a
};

function Z3a(a, b, c) {
	this.F = a;
	this.A = b;
	this.G = c;
	this.A && ts(ps.ya(), Hi, this.jFa, this, l)
}
L(Z3a, ax);
F = Z3a.prototype;
F.wG = function(a, b) {
	$w(b, uz.ya(), la)
};
F.Se = function(a) {
	a.gb(ii, npa, 279, k, k, k, k, k, k, k, k, k, k, MJa);
	a.gb(Ph, jia, 214, gka, Cxa, k, k, l, k, k, k, k, gka, MJa);
	a.gb(RGa, r, 217, jka)
};
F.$n = function(a, b) {
	Rx(b, Ue, new Ox(q, a.ma(), eGa))
};
F.L2 = function(a) {
	i0a(a.A, new X3a, 1)
};
F.NT = function(a) {
	Nz(Nz(a, new Mz), new Kz)
};
F.MT = function(a) {
	Oz(Oz(a, new W3a), new U3a)
};
F.jFa = function() {
	var a = new S3a(this.A, this.F.ba(), this.G, qs(Hi).wf.A());
	N(this, a)
};

function $3a() {}
L($3a, ax);
$3a.prototype.Fm = function(a) {
	Hr(a, jGa, Yma, 186, k, k, k, k, k, k, k, k, Sha, CCa);
	Hr(a, kGa, ena, 187, k, k, k, k, k, k, k, k, Tha, ACa);
	Hr(a, lGa, loa, 188, k, k, k, k, k, k, k, k, Vha, DCa);
	Hr(a, mGa, vna, 189, k, k, k, k, k, k, k, k, Uha, ECa);
	Hr(a, iGa, Sla, 351, k, k, k, k, k, k, k, k, Rha, BCa);
	Hr(a, nGa, wra, 191, k, k, k, k, k, k, k, k, Wha, FCa)
};
$3a.prototype.lj = function(a) {
	a.Ea(U.Zs)
};

function a4a() {}
L(a4a, ax);
a4a.prototype.lj = function(a) {
	a.Ea(U.dJ);
	a.Ea(U.Qs);
	a.Ea(U.qD);
	a.Ea(U.yD);
	a.Ea(U.zD);
	a.Ea(U.ww);
	a.Ea(U.REPLACE);
	a.Ea(U.nw)
};

function b4a(a) {
	this.A = a || m
}
b4a.prototype.filter = function(a) {
	for (var b = [], c = 0; c < a.length; c++) {
		var d = Cz.ya().zT(a[c]),
			e = this.A ? !! this.A.A[a[c]] : q;
		!d && !e && b.push(a[c])
	}
	return b
};

function c4a(a, b) {
	R.call(this, hDa);
	this.C = a;
	this.A = b
}
L(c4a, R);

function Pz() {
	this.A = m;
	this.C = new Xr;
	this.F = []
}
L(Pz, cx);
Pz.prototype.update = function(a) {
	om(a) && d4a(this, a[1], a[2])
};
Pz.prototype.Hu = function(a) {
	var b = a.get(ICa);
	a = a.get(mMa);
	d4a(this, b, a)
};

function d4a(a, b, c) {
	var d = q,
		e = [];
	b && (om(b) && 0 < b.length) && (a.C.clear(), Yr(a.C, b), d = l, e = b);
	c && (om(c) && 0 < c.length) && (a.F = c, d = l);
	d && a.dispatchEvent(new c4a(q, e))
}
Pz.prototype.O = function() {
	delete this.C;
	delete this.F;
	Pz.M.O.call(this)
};

function e4a(a, b, c) {
	this.A = b;
	this.F = c;
	this.R = new S(this);
	this.R.A(a, gg, this.C)
}
e4a.prototype.C = function(a) {
	for (var b = [], c = 0; c < a.A.length; c++) this.A.C[a.A[c]] && b.push(a.A[c]);
	if (b.length) {
		a = this.F;
		for (var d = Zn(b), c = [], e = a.A.ic(Wk), g = 0; g < e.length; g++) a.A.Ra(Wk, e[g]).ld() in d && c.push(new xs(e[g], g == e.length - 1 ? a.A.qa().ub() - 1 : e[g + 1] - 1));
		var h = a.A.JE(0, a.A.qa().ub()),
			d = {}, e = {}, n;
		for (n in h) {
			var p = h[n];
			if (p.xa() == Ri) for (g = 0; g < b.length; g++) {
				var t = b[g],
					u = {};
				p.I_(u);
				if (t in u) {
					e[p.aa()] = l;
					break
				}
			}
		}
		b = a.A.ic(Ri);
		for (g = 0; g < b.length; g++) n = b[g], (h = a.A.td(Ri, n)) && h.Cc in e && (d[Rs(a.A.qa(),
		n)] = l);
		for (var x in d) g = Number(x), c.push(new xs(g, g));
		for (g = 0; g < a.C.length; g++) v0a(a.C[g], c)
	}
};

function Qz(a, b) {
	this.A = b;
	this.C = a
}
L(Qz, M);
Qz.prototype.O = function() {
	delete this.A;
	delete this.C;
	Qz.M.O.call(this)
};

function Rz(a, b) {
	this.cb = a;
	this.A = !! b
}
Rz.prototype.aa = C(Fd);

function Sz(a) {
	this.$i = a
}
Sz.prototype.ld = C(za);
Sz.prototype.Sp = function() {
	return fja + this.$i
};

function f4a(a, b, c) {
	this.F = a;
	this.C = b;
	this.A = c
}
L(f4a, M);

function g4a(a, b, c, d) {
	this.K = b;
	this.G = c;
	this.C = d;
	this.F = l;
	this.A = [];
	this.R = new S(this);
	N(this, this.R);
	this.R.A(a, hDa, this.L);
	h4a(this, a.C.zc())
}
L(g4a, M);
g4a.prototype.Ca = function(a) {
	if ((this.F = a) && this.A.length) gs(Tz(this.G, this.A), this.C.A, this.C), this.A = []
};
g4a.prototype.L = function(a) {
	h4a(this, a.A)
};

function h4a(a, b) {
	var c = a.K.filter(b);
	if (c.length) {
		for (var d = [], e = 0; e < c.length; e++) d.push(new Rz(new Sz(c[e])));
		a.F ? gs(Tz(a.G, d), a.C.A, a.C) : a.A = a.A.concat(d)
	}
};

function Uz(a, b, c, d) {
	this.F = a;
	this.K = b;
	this.L = c;
	this.G = d;
	this.C = l;
	this.A = [];
	this.R = new S(this);
	this.R.A(this.F, Jf, this.W)
}
L(Uz, M);
Uz.prototype.Ca = function(a) {
	if (this.C = a) i4a(this, this.A), this.A = []
};
Uz.prototype.W = function(a) {
	var b = this.K.A(this.F.ba(), a.wd);
	a = this.K.C(a);
	for (var c = [], d = 0; d < b.length; d++) c.push(new Rz(b[d], a));
	this.C ? i4a(this, c) : this.A = this.A.concat(c)
};

function i4a(a, b) {
	0 < b.length && gs(Tz(a.L, b), a.G.A, a.G)
}
Uz.prototype.O = function() {
	O(this.R);
	Uz.M.O.call(this)
};

function j4a(a, b) {
	this.F = b
}
j4a.prototype.A = function(a, b) {
	for (var c = k4a(a, b), c = this.F.filter(Pn(c)), d = [], e = 0; e < c.length; e++) d.push(new Sz(c[e]));
	return d
};
j4a.prototype.C = D(q);

function Vz(a, b) {
	pq.call(this, b);
	this.C = a
}
L(Vz, pq);
Vz.prototype.A = Sg;
Vz.prototype.F = q;
var l4a = {
	info: "jfk-butterBar-info",
	error: "jfk-butterBar-error",
	warning: "jfk-butterBar-warning",
	promo: "jfk-butterBar-promo"
};
F = Vz.prototype;
F.xa = C(Eb);

function m4a(a, b) {
	a.Tb() && qo(a.N(), l4a[a.A], l4a[b]);
	a.A = b
}
F.Kb = function(a) {
	this.C = a;
	if (a = this.N()) {
		var b = this.ma();
		b.Ud(a);
		b.append(a, this.C)
	}
};
F.Wa = function() {
	var a = this.N();
	return a != m && ro(a, aFa)
};
F.ua = function(a) {
	so(this.N(), aFa, a)
};
F.ha = function() {
	this.Sb(this.ma().ha(re, ZEa));
	var a = this.N();
	xq(a, oJa, Hsa);
	xq(a, Jsa, hl);
	this.Kb(this.C);
	this.F = this.F;
	(a = this.N()) && so(a, $Ea, this.F);
	m4a(this, this.A)
};

function Wz(a, b) {
	this.K = [];
	this.F = {};
	this.C = {};
	this.A = b || Ko(a);
	this.R = new S(this);
	this.G = a || m;
	var c = this.A.N(gxa);
	c && !Vp(c) && n4a(this, l)
}
L(Wz, M);
mm(Wz);

function n4a(a, b) {
	a.G || o4a(a);
	so(a.G, Pva, b)
}
Wz.prototype.postMessage = function(a) {
	hn(this.K, a) || this.K.push(a);
	a = vm(a);
	p4a(this);
	return a
};

function Xz(a, b) {
	nRa(a.K, function(a) {
		var d = vm(a);
		if (b == d) {
			var e = this.F[d];
			if (e) {
				var g = e.N().parentNode,
					h = this.A.mY(g);
				e.dispose();
				Sn(this.F, d);
				this.A.removeNode(g);
				this.A.removeNode(h)
			}
			if (e = this.C[d]) e.dispose(), Sn(this.C, d);
			a.ua(q);
			return l
		}
		return q
	}, a)
}

function p4a(a) {
	Vm(a.K, function(a) {
		var c = vm(a),
			d;
		d = this.A;
		var e = this.F[c];
		if (!e) {
			e = this.F[c] = new Vz(r, d);
			this.G || o4a(this);
			var g = d.ha(re, Rva);
			d.append(this.G, g, d.createElement(Ata));
			e.Va(g);
			e.ua(q)
		}
		d = e;
		g = this.A;
		if (!a.Wa()) {
			e = a.bE();
			if (a.K && a.L) {
				var h = g.ha(gd, {
					href: va,
					className: Nva
				}, a.K),
					e = qn(e + s, h);
				this.R.A(h, Od, a.L)
			}
			a.A && (g = g.ha(Ak, Qva, a.Ja() ? a.Ja().jn() : Jha), e = qn(e, g), Ap(this.R, g, Od, wm(this.L, c, a.Ja())));
			d.Kb(e);
			m4a(d, a.xa());
			0 < a.gh && ((e = this.C[c]) || (e = this.C[c] = new Dq(wm(this.W, c), k, this)), e.start(a.gh));
			d.ua(l);
			a.ua(l)
		}
	}, a)
}
function o4a(a) {
	var b = a.A;
	a.G = b.ha(re, Ova);
	b.appendChild(b.sb().body, a.G)
}
Wz.prototype.L = function(a, b) {
	Xz(this, a);
	if (b) {
		var c = ww(vw(new uw, 6));
		b.qb(k, c)
	}
};
Wz.prototype.W = function(a) {
	Xz(this, a);
	p4a(this)
};

function Yz(a, b, c, d, e) {
	return new Zz(a, b, c, d, e)
}
function q4a(a, b, c, d, e) {
	return new Zz(a, d, e, k, k, b, c)
}
Wz.prototype.O = function() {
	function a(a) {
		O(a)
	}
	Mn(this.F, a);
	Mn(this.C, a);
	Vm(this.K, a);
	O(this.R);
	delete this.F;
	delete this.C;
	delete this.K;
	delete this.R;
	Wz.M.O.call(this)
};

function Zz(a, b, c, d, e, g, h) {
	this.F = a;
	this.G = b;
	this.A = !! c;
	this.gh = sm(d) ? d : 0;
	this.C = e || m;
	this.K = g || m;
	this.L = h || m
}
L(Zz, M);
F = Zz.prototype;
F.Wqa = q;
F.ua = im("Wqa");
F.Wa = C("Wqa");
F.bE = C($b);
F.xa = C(cc);
F.Ja = C(Jb);
F.aa = function() {
	return vm(this)
};
F.O = function() {
	delete this.F;
	delete this.G;
	delete this.A;
	delete this.gh;
	delete this.C;
	Zz.M.O.call(this)
};
var r4a = q;

function s4a() {
	if (!r4a && (r4a = l, !U.Dc.isEnabled())) {
		var a = go(jo(), $wa),
			a = Yz(a ? tpa : spa, Sg, l, 15E3);
		Wz.ya().postMessage(a)
	}
}
var t4a = new Dq(s4a, 2E3);

function $z(a, b, c) {
	this.L = a;
	this.F = b;
	this.K = !! c;
	this.C = m;
	this.G = [];
	this.R = new S(this);
	this.K && this.R.A(this.L, gg, this.W)
}
L($z, M);
$z.prototype.A = function(a) {
	a.FQ.length && s4a();
	a = a.GQ;
	if (a.length) {
		t4a.stop();
		for (var b = {}, c = 0; c < a.length; c++) for (var d = a[c].ng(), e = a[c].aa().ld(), d = d.A[e], g = 0; g < d.length; g++) d[g].C && (b[e] = [d[g]]);
		var c = this.F,
			h;
		for (h in b) if (e = b[h], d = u4a(e)) c.C[h] = d, on(e, d);
		v4a(c);
		this.K ? (this.G = this.G.concat(a), this.C || w4a(this)) : x4a(this, a)
	}
};
$z.prototype.W = function(a) {
	hn(a.A, this.C) && w4a(this)
};

function w4a(a) {
	a.C = m;
	for (var b; b = a.G.shift();) {
		var c = b.aa().ld();
		if (!a.F.A[c]) {
			a.C = c;
			x4a(a, [b]);
			break
		}
	}
}
function x4a(a, b) {
	for (var c = {}, d = 0; d < b.length; d++) Xn(c, b[d].ng().A);
	a.F.update(c)
}
$z.prototype.O = function() {
	O(this.R);
	$z.M.O.call(this)
};

function y4a(a, b, c, d, e) {
	b = new j4a(0, b);
	d = new $z(d, e);
	a = new Uz(a, b, c, d);
	N(a, d);
	return a
};

function k4a(a, b) {
	switch (b.xa()) {
		case ph:
			return cWa(a.Ra(b.G, b.C()), b.L);
		case nh:
			var c = a.Fb(b.aa());
			return cWa(c, b.W());
		case ni:
			return c = a.Fb(b.aa()), cWa(c, b.W())
	}
	return {}
};

function z4a() {}
L(z4a, bq);

function A4a(a, b) {
	R.call(this, lKa, a);
	this.A = b
}
L(A4a, R);

function aA(a, b, c) {
	this.G = a;
	this.C = Zn(b);
	this.F = [];
	for (var d = 0; d < b.length; d++) {
		var e = b[d];
		Gz(Hz.ya(), e) || this.F.push(e)
	}
	this.R = new S(this);
	this.R.A(a, Jf, ju(c, this.K, this));
	this.Ub = this.A = m
}
L(aA, z4a);

function B4a(a) {
	if (a.Ub && a.A && a.A.C && go(jo(), axa)) {
		var b = En(a.F);
		mr(a.Ub, QNa, eDa, b);
		a.A.write([a.Ub], G)
	}
}
aA.prototype.K = function(a) {
	a = k4a(this.G.ba(), a.wd);
	var b = [],
		c;
	for (c in a) this.C[c] || (this.C[c] = l, b.push(c), Gz(Hz.ya(), c) || this.F.push(c));
	0 < b.length && (B4a(this), this.dispatchEvent(new A4a(this, b)))
};
aA.prototype.O = function() {
	O(this.R);
	delete this.R;
	aA.M.O.call(this)
};

function C4a(a, b, c, d, e, g) {
	this.A = a;
	this.L = b;
	this.G = c;
	this.ra = d;
	this.K = e;
	this.W = g;
	this.F = new Pz
}
L(C4a, ax);
F = C4a.prototype;
F.MO = m;
F.dv = function(a) {
	hx(a, this.F, Zwa)
};
F.CM = function() {
	this.A && (gs(this.K, this.HKa, this), gs(this.K, this.IKa, this))
};
F.HKa = function(a) {
	(!this.L || !this.G || !this.A) && f(Error("Must have a redrawRequestor, modelState in the FontFeatureCore when WebFonts is enabled"));
	this.MO = new aA(this.G, a.C, this.ra);
	a = new Qz([this.L], this.G.ba());
	N(this, a);
	a = new e4a(this.A, this.MO, a);
	N(this, a)
};
F.IKa = function(a) {
	gs(a.K, K(function(a) {
		var c = this.F,
			d = new b4a(this.W),
			e = new $z(this.A, this.W, l);
		a = new g4a(c, d, a, e);
		N(a, e);
		N(this, a)
	}, this))
};
F.lj = function(a) {
	a.Ea(U.Wm);
	a.Ea(U.yq);
	a.Ea(U.ew)
};
F.O = function() {
	O(this.F);
	C4a.M.O.call(this)
};

function D4a(a, b, c) {
	this.C = c;
	this.F = a.G;
	this.G = a.ea;
	c = a.ba();
	c.Ie(hg, b - 1);
	c = c.Ra(Wk, b).La();
	c.update({
		ts_va: Ok
	});
	this.sc = c;
	c = a.ba();
	var d = c.ic(hg);
	b = c.Ie(hg, b - 1)[0];
	for (var e = 0, g = 0; g < d.length; g++) if (jw(c.Ra(hg, d[g])) == b) {
		e = g + 1;
		break
	}
	0 < e || a.ra.log(Error(ega));
	this.A = String(e)
}
F = D4a.prototype;
F.h3 = m;
F.L5 = m;
F.getHeight = function() {
	return E4a(this).height
};
F.$s = function() {
	return E4a(this).width
};
F.wc = C(Jb);
F.Eg = C(mk);

function E4a(a) {
	return a.h3 ? a.h3 : a.h3 = ox(a.G, a.sc, a.A)
}
F.rb = function() {
	this.L5 || (this.L5 = F4a(this.F, aHa));
	return this.L5
};

function bA() {}
mm(bA);
bA.prototype.C = function(a, b, c, d) {
	return !this.Ye(a, b.ba()) ? m : new D4a(b, a, d)
};
bA.prototype.Ye = function(a, b) {
	return yZa(b, a)
};

function cA(a) {
	lx.call(this, a)
}
L(cA, nx);
F = cA.prototype;
F.tka = r;
F.D6 = m;
F.uma = function(a) {
	a.update({
		ts_va: Ok
	})
};
F.HV = function() {
	if (this.D6 === m) {
		var a = String,
			b = this.f6,
			c = this.Q.ba().ic(hg),
			b = vn(c, b);
		this.D6 = a(0 <= b ? b + 1 : m)
	}
	return this.D6
};
F.Ana = function() {
	var a = {
		"class": pGa
	};
	a.style = rz(tz.ya(), this.Eg());
	return a
};
F.za = function() {
	cA.M.za.call(this);
	T(this).A(this.N(), ge, this.zJa)
};
F.zJa = function() {
	var a = {};
	a.eId = this.tka;
	var b = ww(vw(new uw, 7));
	this.Q.C.Ja($Fa).qb(a, b)
};
F.vb = function(a, b, c) {
	cA.M.vb.call(this, a, b, c);
	this.tka = jw(this.Q.ba().Ra(hg, a))
};

function dA() {}
mm(dA);
dA.prototype.A = function(a, b) {
	return this.Ye(a, b.ba()) ? new cA(b) : m
};
dA.prototype.Ye = function(a, b) {
	var c;
	if (c = Ts(b.qa(), a) == va) c = b.td(hg, a) != m;
	return c
};

function eA(a) {
	var b = window.location.href,
		c = Lv(window.location.href);
	a = Lv(a) || c;
	b = Lv(b) || c;
	return a == b
};

function G4a(a, b) {
	this.F = a;
	this.A = (this.C = b) || $q
}
var H4a = {};

function I4a(a, b) {
	var c;
	if (b.Ta || b.C) c = r;
	else if (b.F) {
		c = b.W;
		var d = b.Y,
			e = b.Ba,
			g = vb + vm(b.F) + csa;
		(e = e[0]) && (g += !c.ob(e.Ym) || a.A && d != e.UD ? J4a(a, c, d) + K4a(a, e.Ym, e.UD) : r);
		c = g
	} else {
		g = b.Ba;
		c = b.qa();
		var e = r,
			d = 0,
			h = b.G,
			n = b.Ha;
		if (0 < g.length) for (var p = b.W, t = b.Y; d < g.length; d++) {
			if (!n || !h) e += sz(c[d], l, l);
			var u = g[d],
				e = e + (!p.ob(u.Ym) || a.A && t != u.UD ? J4a(a, p, t) + K4a(a, u.Ym, u.UD) : r),
				p = u.Ym,
				t = u.UD
		}
		n ? (g = e, e = b.getHeight(), c = g + (c[d] ? Kda + b.A + cMa + e + ULa : r)) : c = e + sz(c[d], l, l)
	}
	return c
}

function K4a(a, b, c) {
	var d = r;
	if (c && a.A) {
		var e = xOa;
		a.C || (e += qLa);
		d += sb + c + Raa + e + sa;
		eA(c) || (d += Haa);
		d += Ab
	}
	b.Cf != mj && (d += Lda + b.Kg + RLa);
	a = L4a(b, 0, a.F);
	return 0 == d.length ? a : d + a
}
function J4a(a, b, c) {
	a = a.A && !! c;
	b = b.Cf == mj;
	return !b && a ? Bda : b ? a ? zda : rb : Ada
}
function L4a(a, b, c) {
	var d;
	c && (d = RYa(m, pv()));
	a = rz(tz.ya(), a, 0, d);
	(b = H4a[a]) || (b = H4a[a] = wb + a + ta);
	return b
};
var M4a = Q && !Io(bb);

function N4a(a, b, c, d, e) {
	b || (b = gl);
	a.append(ub, lg, Saa, b, vda, d, Uj, e ? KJa : LJa, c, dMa)
};

function O4a(a, b, c) {
	this.ra = a;
	this.A = b;
	this.C = new G4a(this.A, c)
}
function P4a(a, b, c, d, e, g, h) {
	var n = b.length - 1;
	b[n].C && n--;
	if (!(0 > n)) if (e && b[n].G && n--, 0 > n) a.A && !h && N4a(d, m, 0, 0, g);
	else {
		c.append(K4a(a.C, b[0].W, b[0].Y));
		for (e = 0; e <= n; e++) c.append(I4a(a.C, b[e]));
		c.append(J4a(a.C, b[n].na, b[n].Aa));
		if (a.A) {
			a = n;
			c = m;
			for (var p = e = n = 0; p <= a; p++) for (var t = b[p].ea, u = 0; u < t.length; u++) {
				var x = t[u];
				c == x.C ? e += x.A : (M4a || c !== m ? (0 != e && N4a(d, c, n, e, g), n = 0) : n = e, e = x.A, c = x.C)
			}(!h || c !== m) && N4a(d, c, n, e, g)
		}
	}
};

function fA() {}
L(fA, M);
fA.prototype.C = m;
fA.prototype.A = D(r);

function Q4a() {}
L(Q4a, fA);
Q4a.prototype.G = function(a) {
	return a.A
};
Q4a.prototype.A = function(a) {
	return rz(tz.ya(), a.Eg())
};

function R4a() {}
mm(R4a);
R4a.prototype.A = function() {
	return new Q4a
};

function S4a(a) {
	Vx.call(this, a)
}
L(S4a, Wx);
S4a.prototype.ha = function() {
	S4a.M.ha.call(this);
	P(this.N(), kIa)
};

function T4a(a) {
	this.C = a
}
T4a.prototype.A = function() {
	return new S4a(this.C)
};

function gA() {}
L(gA, ax);
gA.prototype.wG = function(a, b) {
	$w(b, dA.ya(), va);
	var c = bA.ya();
	Zw.register(b.A.ba(), c, 0)
};
gA.prototype.Se = function(a) {
	a.gb(Rh, hja, 216, ika, k, rga, k, l, k, k, k, k, ika, jDa)
};
gA.prototype.Fm = function(a) {
	a.gb($Fa, r, 185);
	a.gb(oHa, r, 240, hma, k, rr([vc, $b]));
	a.gb(pHa, r, 241, mma, k, rr([Bc, $b]));
	a.gb(iHa, r, 236, cma, k, rr([Yb, $b]))
};
gA.prototype.$n = function(a, b) {
	U4a(pz(b, oGa, new T4a(a.ma())), aHa, R4a.ya())
};

function V4a() {}
L(V4a, ax);
V4a.prototype.Se = function(a) {
	a.gb(KFa, r, 174, bga, k, qga);
	a.gb(pIa, r, 271, qna, k, zga)
};
V4a.prototype.lj = function(a) {
	a.Ea(U.cw)
};

function W4a() {}
L(W4a, ax);
W4a.prototype.Se = function(a) {
	ERa(a.gb(Sh, xja, 218, ema, k, rr([Ac, ec]), k, k, k, k, k, k, kka, isa), q);
	ERa(a.gb(Qh, gja, 215, dma, k, rr([Ac, $b]), k, k, k, k, k, k, hka, hsa), q)
};
W4a.prototype.$n = function(a, b) {
	pz(b, qGa, new Xx(a.ma()))
};

function X4a(a) {
	lx.call(this, a)
}
L(X4a, mx);
F = X4a.prototype;
F.T6 = 0;
F.Df = function() {
	return new vo(this.T6, 0)
};
F.ha = function() {
	var a = Pm(Ll, this.T6 - 8, ZLa, 4, Uj);
	this.Sb(this.ma().ha(fc, {
		"class": CGa,
		style: a
	}))
};
F.vb = function(a, b) {
	this.T6 = b
};
F.bd = D(1);
F.WR = function() {
	return new ws(0)
};

function hA() {}
mm(hA);
hA.prototype.A = function(a, b) {
	return this.Ye(a, b.ba()) ? new X4a(b) : m
};
hA.prototype.Ye = function(a, b) {
	var c;
	if (c = Ts(b.qa(), a) == Na) c = b.td(wg, a) != m;
	return c
};

function Y4a() {}
L(Y4a, ax);
Y4a.prototype.wG = function(a, b) {
	$w(b, hA.ya(), Na)
};
Y4a.prototype.Se = function(a) {
	a.gb(SGa, Jja, 219, Jja, Dxa, k, k, k, k, k, k, k, lka, kEa)
};

function Z4a(a) {
	this.A = a
}
L(Z4a, ax);
Z4a.prototype.Se = function(a) {
	Hr(a, Vh, Pja, 221, mka, yxa, k, k, !this.A, k, k, k, nka, kLa);
	Hr(a, Uh, r, 220, k, k, k, k, !this.A)
};

function $4a() {}
L($4a, ax);
$4a.prototype.Fm = function(a) {
	Ix(a, EHa, rr([vc, oc]), 258);
	Ix(a, FHa, rr([Bc, oc]), 259)
};
$4a.prototype.lj = function(a) {
	a.Ea(U.rD);
	a.Ea(U.Kz);
	a.Ea(U.Wl);
	a.Ea(U.Ws);
	a.Ea(U.fw)
};

function a5a() {}
L(a5a, ax);
a5a.prototype.Se = function(a, b) {
	a.gb(Ze, ofa, 123, qfa, Gxa, Oga, 0, q, gBa, k, k, k, zqa, Tta);
	a.gb($Aa, pfa, 124, qfa, k, k, 0, q, Ye, k, k, k, ola, Tta).setProperty(qd, qfa);
	a.gb(aBa, Ija, 125, Hja, k, k, 1, q, Ye, k, k, k, pla, Tta).setProperty(qd, Hja);
	a.gb(bBa, Apa, 126, zpa, k, k, 2, q, Ye, k, k, k, rla, zta).setProperty(qd, zpa);
	a.gb(ef, Pma, 142, Pma, Hxa, Nga, 3, q, gBa, k, k, k, Bqa, xKa);
	a.gb(nBa, yca, 145, Qma, k, k, 3, q, Ye, k, k, k, mla, xKa).setProperty(qd, Qma);
	a.gb(mBa, Wda, 144, lra, k, k, 4, q, Ye, k, k, k, nla, fJa).setProperty(qd, lra);
	a.gb(lBa, dsa, 143, Fla, k, k, 5, q, Ye, k,
	k, k, sla, eJa).setProperty(qd, Fla);
	a.gb(pBa, Kja, 147, mra, k, k, 6, q, Ye, k, k, k, qla, oua).setProperty(qd, mra);
	a.gb(oBa, oEa, 146, Gla, k, k, 7, q, Ye, k, k, k, tla, oua).setProperty(qd, Gla);
	a.gb(cf, koa, 136, k, k, k, k, l);
	a.gb(df, ula, 137, ula, Gxa, k, k, k, k, k, l);
	Er(a, gBa);
	Er(a, Ye);
	b.Hx(gBa, O0a).Hx(Ye, Q0a)
};
a5a.prototype.Fm = function(a) {
	Ix(a, IHa, rr([vc, Ac]), 262);
	Ix(a, JHa, rr([Bc, Ac]), 263);
	Ix(a, GHa, rr([vc, gc]), 260);
	Ix(a, HHa, rr([Bc, gc]), 261)
};

function iA() {
	this.A = m
}
L(iA, cx);
iA.prototype.C = m;
iA.prototype.update = function(a) {
	um(a) && b5a(this, a.id, a.ss)
};
iA.prototype.Hu = function(a) {
	b5a(this, a.get(Pua), a.get($Na))
};

function b5a(a, b, c) {
	if (b && c && om(c)) for (var d = 0, e; e = c[d]; d++) if (e.id == b) {
		c5a(a, e.hs);
		break
	}
}
function c5a(a, b) {
	a.C = b;
	a.dispatchEvent(Qua)
};

function d5a() {}
L(d5a, ax);
F = d5a.prototype;
F.qX = m;
F.dv = function(a) {
	this.qX = new iA;
	hx(a, this.qX, DIa)
};
F.Se = function(a, b) {
	for (var c = [], d = 0; 6 >= d; ++d) c[d] = [pga + d, tga + d];
	jA(a, xi, 0, gra, 303, ZDa);
	jA(a, oi, 1, ara, 297, TDa);
	jA(a, si, 2, bra, 298, UDa);
	jA(a, ti, 3, cra, 299, VDa);
	jA(a, ui, 4, dra, 300, WDa);
	jA(a, vi, 5, era, 301, XDa);
	jA(a, wi, 6, fra, 302, YDa);
	jA(a, zi, 100, ira, 325, Csa);
	jA(a, yi, 101, hra, 326, Bsa);
	kA(a, Ah, Wea, 0, 193, c[0], ZDa);
	kA(a, Bh, Qea, 1, 194, c[1], TDa);
	kA(a, Ch, Rea, 2, 195, c[2], UDa);
	kA(a, Dh, Sea, 3, 196, c[3], VDa);
	kA(a, Eh, Tea, 4, 197, c[4], WDa);
	kA(a, Fh, Uea, 5, 198, c[5], XDa);
	kA(a, Gh, Vea, 6, 199, c[6], YDa);
	kA(a, Ih, Yea, 100, 321, k, Csa);
	kA(a,
	Hh, Xea, 101, 322, k, Bsa);
	a.gb(tGa, yja, 194);
	a.gb(sGa, Nma, 193);
	a.gb(uGa, zja, 195);
	a.gb(vGa, Aja, 196);
	a.gb(wGa, Bja, 197);
	a.gb(xGa, Cja, 198);
	a.gb(yGa, Dja, 199);
	a.gb(BGa, xqa, 321);
	a.gb(AGa, Npa, 322);
	a.gb(ji, bna, 281, bna, Kxa);
	a.gb(gHa, nra, 234, nra, k, k, k, k, k, k, k, k, k, sJa);
	a.gb(fHa, joa, 233, joa, k, k, k, k, k, l, k, k, k, Vta);
	Hr(a, yIa, voa, 277, voa, k, k, k, k, k, l, k, k, RMa);
	a.gb(MIa, U.Rm.jn(), 277);
	a.gb(zIa, Hoa, 361);
	c = a.gb(zGa, Kpa, 200, Kpa, k, k, k, k, k, k, k, function(a) {
		var b = new pr;
		sm(a) && (b.Ua[7] = a);
		return b
	});
	b.T3(zj, K(this.FSa, this, a));
	b.Yr(zj, Mj, c, El);
	Er(a, rGa);
	b.Hx(rGa, R0a)
};
F.Fm = function(a) {
	Ix(a, qHa, rr([vc, ec]), 254, ima);
	Ix(a, rHa, rr([Bc, ec]), 255, nma);
	Ix(a, sHa, rr([vc, Za]), 242);
	Ix(a, tHa, rr([Bc, Za]), 243);
	Ix(a, uHa, rr([vc, fb]), 244);
	Ix(a, vHa, rr([Bc, fb]), 245);
	Ix(a, wHa, rr([vc, gb]), 246);
	Ix(a, xHa, rr([Bc, gb]), 247);
	Ix(a, yHa, rr([vc, hb]), 248);
	Ix(a, zHa, rr([Bc, hb]), 249);
	Ix(a, AHa, rr([vc, ib]), 250);
	Ix(a, BHa, rr([Bc, ib]), 251);
	Ix(a, CHa, rr([vc, jb]), 252);
	Ix(a, DHa, rr([Bc, jb]), 253)
};
F.FSa = function(a, b) {
	var c = b.ps_sb || 0,
		d = b.ps_sa || 0,
		e, g = a.Ja(pf);
	g && (0 < c ? (c = Tna, e = 0) : (c = fea, e = 10), g.setProperty(Mi, c), g.setProperty(El, e));
	if (g = a.Ja(of)) 0 < d ? (c = Sna, e = 0) : (c = eea, e = 10), g.setProperty(Mi, c), g.setProperty(El, e)
};

function jA(a, b, c, d, e, g) {
	a.gb(b, d, e, d, k, k, c, k, k, l, k, k, k, g)
}
function kA(a, b, c, d, e, g, h) {
	a.gb(b, c, e, Qoa, k, g, d, q, rGa, l, k, k, k, h)
};

function e5a() {}
L(e5a, ax);
e5a.prototype.lj = function(a) {
	a.Ea(U.nk)
};

function f5a() {}
L(f5a, ax);
f5a.prototype.Se = function(a) {
	a.gb(TGa, gna, 222, k, Exa, Cga, k, k, k, k, k, k, qka, kKa)
};

function g5a(a) {
	this.A = m;
	(this.C = a) && this.C.Yc(1 == this.Fc)
}
L(g5a, cx);
F = g5a.prototype;
F.Fc = 1;
F.Cb = function(a, b) {
	h5a(this, a);
	b || this.dispatchEvent(new ex(this, new dx(Di, a), this.A))
};

function h5a(a, b) {
	a.C && (1 == b ? a.C.Yc(l) : a.C.Yc(q));
	a.Fc != b && (a.Fc = b, a.dispatchEvent(YPa))
}
F.Ga = C("Fc");
F.update = function(a) {
	h5a(this, a)
};
F.Hu = function(a) {
	a = a.get(El);
	I(a) && h5a(this, a)
};

function lA() {
	this.A = m;
	this.C = {}
}
L(lA, cx);
lA.prototype.hf = C(Jb);
lA.prototype.update = function(a) {
	um(a) && i5a(this, a.psPs)
};
lA.prototype.Hu = function(a) {
	i5a(this, a.get(DBa))
};

function i5a(a, b) {
	um(b) && (a.C = b, a.dispatchEvent($Ka))
};

function mA(a) {
	this.F = a
}
L(mA, ax);
mA.prototype.A = m;
mA.prototype.Se = function(a) {
	this.A = a.gb(KIa, zna, 654, zna, k, k, k, q, k, k, k, k, sra, WKa)
};
mA.prototype.Fm = function(a) {
	a.gb(fi, jna, 267, k, k, k, k, 4 != this.F, k, k, k, k, k, RKa);
	a.gb(uBa, r, 656, k, k, rr([Eb, oc]))
};
mA.prototype.dv = function(a) {
	hx(a, new g5a(this.A), Di);
	hx(a, new lA, rIa)
};

function j5a() {}
L(j5a, ax);
j5a.prototype.lj = function(a) {
	a.Ea(U.nk);
	a.Ea(U.ik);
	a.Ea(U.kD);
	a.Ea(U.mI)
};
var nA = m,
	k5a = m;

function l5a(a, b, c) {
	var d = nA;
	if (d) {
		var e = c.dp(),
			g = Sp(d).width,
			g = new vo(e.width - g, 0);
		m5a(c, g);
		c = Yp(b);
		var h = Zp(b),
			g = Math.max(0, g.width - c.left - c.right - h.left - h.right);
		Rp(b, g);
		b = Sp(a);
		g = Qp(a);
		a = Zp(d);
		b = Math.max(g.y + b.height, 0);
		e = Math.max(e.height - b - a.top - a.bottom, 0);
		d.style.top = b + Sj;
		d.style.height = e + Sj
	}
};

function oA(a, b, c) {
	this.A = b;
	this.F = c;
	this.C = m
}
L(oA, ax);
oA.prototype.dv = function(a) {
	this.C = new fx(zza);
	hx(a, this.C, zza)
};
oA.prototype.CM = function() {
	if (this.C && this.C.Ga()) {
		var a = this.A,
			b = this.F,
			c = nA;
		c || (c = a.ha(Rb, bza, ioa), c = a.ha(Rb, aza, c), c = a.ha(Rb, $ya, c), c.style.display = lj, a.sb().body.appendChild(c), nA = c);
		var d = a.N(ze),
			a = a.N(tAa);
		d && a && (l5a(d, a, b), c.style.display = r, k5a = up(b, ck, K(l5a, k, d, a, b)))
	}
};
oA.prototype.Se = function() {
	go(jo(), Qf) || U.Ao.Ca(l);
	U.Ao.ua(l)
};
oA.prototype.lj = function(a) {
	a.Ea(U.lk);
	a.Ea(U.dn);
	a.Ea(U.lw);
	a.Ea(U.kw);
	a.Ea(U.ot);
	a.Ea(U.mw);
	a.Ea(U.Ao)
};

function n5a() {}
L(n5a, ax);
n5a.prototype.lj = function(a) {
	a.Ea(U.aw)
};

function pA() {
	this.A = m;
	this.C = {}
}
L(pA, cx);
mm(pA);

function o5a(a, b, c) {
	a.C[b.toLowerCase()] = l;
	c && (a.dispatchEvent(LPa), a.dispatchEvent(new ex(a, new dx(DAa, [b]), a.A)))
}
pA.prototype.update = function(a) {
	if (om(a) && (a = a[1]) && om(a)) {
		for (var b = q, c = 0; c < a.length; c++) {
			var d = a[c];
			um(d) && (d = d[1], qm(d) && (o5a(this, d, q), b = l))
		}
		b && this.dispatchEvent(LPa)
	}
};
pA.prototype.Hu = function(a) {
	a = a.get(hQa);
	for (var b = 0; b < a.length; b++) o5a(this, a[b].value, q);
	a.length && this.dispatchEvent(LPa)
};

function qA() {}
L(qA, ax);
qA.prototype.A = m;
qA.prototype.Se = function(a) {
	var b = a.W;
	a.gb(jBa, jma, 140, k, k, oha);
	a.gb(kBa, oma, 141, k, k, nha);
	a.gb(rf, ppa, 161, k, k, k, k, k, k, k, k, k, k, GDa);
	a.Ea(U.FD);
	a.Ea(U.ED);
	a.Ea(U.Tz);
	b && b.bind(U.Tz);
	this.A = a.Ja(rf)
};
qA.prototype.lj = function(a) {
	a.Ea(U.oI);
	a.Ea(U.FD);
	a.Ea(U.wI);
	a.Ea(U.ED);
	a.Ea(U.xI);
	a.Ea(U.gD);
	a.Ea(U.Tz);
	a.Ea(U.pI);
	go(jo(), Ge) && a.Ea(U.Uv)
};
qA.prototype.dv = function(a) {
	hx(a, new fx(EIa, l, this.A), EIa);
	hx(a, pA.ya(), DAa)
};

function p5a() {}
L(p5a, ax);
p5a.prototype.lj = function(a) {
	a.Ea(U.jS);
	a.Ea(U.kS)
};

function rA(a) {
	Nx.call(this, l, a, q5a);
	this.A = []
}
L(rA, Nx);
var q5a = xo ? "kix-selection-overlay-mac" : "kix-selection-overlay",
	r5a = (xo ? 0.27 : 0.15) / 12E4;
F = rA.prototype;
F.Wr = m;

function s5a(a, b, c) {
	b = new qy(b, r5a * c, 0, c);
	a.A.push(b);
	b.play()
}
F.ba = C("Wr");
F.vg = function(a) {
	if (this.Wr) {
		var b = this.gj;
		if (a && b && this.Wr.tK == a.tK) {
			var c = this.Wr.timestamp,
				d;
			if (c = 0 < a.timestamp && 0 < c && c < a.timestamp) {
				d = a.timestamp;
				this.Wr.timestamp = d;
				for (var e = 0; e < this.A.length; e++) {
					var g = this.A[e];
					g.cd() || O(g)
				}
				this.A.length = 0
			}
			g = this.Wr.color != a.color;
			a = (this.Wr.color = a.color) || r;
			if (c || g) {
				d = Math.max(12E4 - (ym() - d), 0);
				for (var e = 0, h; h = b[e]; e++) g && (h.style.backgroundColor = a, h.style.borderTopColor = a, h.style.borderBottomColor = a), c && s5a(this, h, d)
			}
		}
	} else this.Wr = a
};
F.DC = function(a, b, c, d) {
	return rA.M.DC.call(this, a, b, c, d - 2)
};
F.qy = function() {
	var a = rA.M.qy.call(this),
		b = this.Wr.color;
	b && (a.style.cssText = Pm(Wsa, b, kda, b, jda, b, pb));
	b = this.Wr.timestamp;
	0 < b && s5a(this, a, Math.max(12E4 - (ym() - b), 0));
	return a
};

function sA(a) {
	this.C = a
}
sA.prototype.A = function() {
	return new rA(this.C)
};

function tA() {}
tA.prototype.C = function(a, b) {
	return pt(a, b) && Ts(a, b) != ja ? yt(a, b) : -1
};
tA.prototype.F = function(a, b) {
	return pt(a, b) && Ts(a, b) != ja ? zt(a, b) : -1
};
tA.prototype.G = jm(10);
tA.prototype.A = jm(151);

function uA(a) {
	Vx.call(this, a)
}
L(uA, Wx);
uA.prototype.ha = function() {
	this.Sb(this.ma().ha(Rb, AFa))
};
uA.prototype.Uk = function(a) {
	switch (a.xa()) {
		case mAa:
			a = a.Ga(lua);
			if (!sm(a)) break;
			this.N().style.width = a + Sj;
			break;
		default:
			uA.M.Uk.call(this, a)
	}
};

function t5a(a) {
	this.C = a
}
t5a.prototype.A = function() {
	return new uA(this.C)
};

function u5a(a) {
	Vx.call(this, a);
	this.C = []
}
L(u5a, Vx);
F = u5a.prototype;
F.E3 = 0;
F.D3 = 0;
F.ha = function() {
	this.Sb(this.ma().ha(Upa))
};
F.Uk = function(a) {
	switch (a.xa()) {
		case jFa:
			var b = this.ma(),
				c = b.ha(Spa, {
					"class": wIa,
					style: bEa + v5a(this, 0) + Sj
				});
			this.C[a.index] ? b.Nz(c, this.C[a.index].element) : b.appendChild(this.N(), c);
			mn(this.C, {
				element: c,
				paddingTop: 0
			}, a.index);
			break;
		case sIa:
			this.ma().removeNode(this.C[a.index].element);
			pn(this.C, a.index);
			break;
		case NIa:
			b = this.C[a.G];
			c = b.element;
			a.width !== m && (c.style.width = a.width + Sj);
			a.borderWidth !== m && (this.D3 != a.borderWidth && (this.D3 = a.borderWidth, c.style.height = v5a(this, b.paddingTop) + Sj), c.style.borderWidth = a.borderWidth + Sj);
			a.borderColor !== m && (c.style.borderColor = a.borderColor);
			a.backgroundColor !== m && (c.style.backgroundColor = a.backgroundColor);
			a.offsetTop !== m && (b.paddingTop = a.offsetTop, c.style.paddingTop = a.offsetTop + Sj, c.style.height = v5a(this, a.offsetTop) + Sj);
			break;
		case mAa:
			a = a.Ga(rg);
			if (!sm(a)) break;
			this.E3 = a;
			for (a = 0; a < this.C.length; a++) b = this.C[a], b.element.style.height = v5a(this, b.paddingTop) + Sj;
			break;
		default:
			u5a.M.Uk.call(this, a)
	}
};
F.Du = function(a) {
	return this.C[a].element
};

function v5a(a, b) {
	return Math.max((Do ? a.E3 + a.D3 : a.E3) - b, 0)
};

function w5a(a) {
	this.C = a
}
w5a.prototype.A = function() {
	return new u5a(this.C)
};

function vA(a) {
	et.call(this, Gd, x5a);
	a && this.update(a)
}
L(vA, et);
var x5a = Uu({
	yYa: Hd,
	p5a: Id,
	q5a: Jd,
	r5a: Kd,
	s5a: Ld,
	m7a: Kta
});
F = vA.prototype;
F.De = r;
F.Vs = 5;
F.Xz = 5;
F.Yz = 5;
F.Zz = 5;
F.Cf = 2;
F.Um = C("De");
F.eo = function() {
	return [na]
};
F.Yj = D(l);
F.Oc = function(a, b) {
	switch (a) {
		case Hd:
			this.De = b;
			break;
		case Ld:
			this.Vs = b;
			break;
		case Id:
			this.Xz = b;
			break;
		case Jd:
			this.Yz = b;
			break;
		case Kd:
			this.Zz = b;
			break;
		case Kta:
			this.Cf = b
	}
};
F.Pa = function() {
	var a = {};
	a.cell_bgc = this.De;
	a.cell_pt = this.Vs;
	a.cell_pb = this.Xz;
	a.cell_pl = this.Yz;
	a.cell_pr = this.Zz;
	a.cell_va = this.Cf;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case Hd:
			return this.De;
		case Ld:
			return this.Vs;
		case Id:
			return this.Xz;
		case Jd:
			return this.Yz;
		case Kd:
			return this.Zz;
		case Kta:
			return this.Cf
	}
	return vA.M.Ga.call(this, a)
};
F.$q = D(q);
F.cK = D(q);
F.La = function() {
	return new vA(this.Pa())
};
F.ao = function() {
	var a = vA.M.ao.call(this);
	this.De && a.push(this.De);
	return a
};
F.ho = function(a) {
	var b = vA.M.ho.call(this, a);
	(a = a.cell_bgc) && b.push(a);
	return b
};
kt(function() {
	return new vA
});

function wA(a) {
	this.A = y5a;
	this.update(a)
}
L(wA, bt);
var y5a = Uu({
	q7a: dua,
	r7a: eua
});
F = wA.prototype;
F.Oz = 1;
F.HD = 0;
F.La = function() {
	var a = new wA({});
	this.ke(a);
	return a
};
F.Oc = function(a, b) {
	switch (a) {
		case dua:
			this.Oz = b;
			break;
		case eua:
			this.HD = b
	}
};
F.Ga = function(a) {
	switch (a) {
		case dua:
			return this.Oz;
		case eua:
			return this.HD
	}
	return wA.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = {};
	a.col_wt = this.Oz;
	a.col_wv = this.HD;
	return a
};

function z5a(a) {
	return new wA(a)
};

function xA(a) {
	et.call(this, Tk, A5a);
	this.F = new wx(z5a);
	a && this.update(a)
}
L(xA, et);
var A5a = Uu({
	wMa: oOa,
	IYa: pOa,
	$Ya: qOa,
	k4a: rOa
});
F = xA.prototype;
F.Ys = wa;
F.Xv = 1;
F.tV = l;
F.eo = function() {
	return [ga]
};
F.Yj = D(l);

function yA(a) {
	return a.F.zc()
}
F.wc = C("tV");
F.Oc = function(a, b) {
	switch (a) {
		case oOa:
			this.Ys = b;
			break;
		case pOa:
			this.Xv = b;
			break;
		case qOa:
			this.F.update(b);
			break;
		case rOa:
			this.tV = b
	}
};
F.Pa = function() {
	var a = {};
	a.tbls_bc = this.Ys;
	a.tbls_bw = this.Xv;
	a.tbls_cols = this.F.Pa();
	a.tbls_ltr = this.tV;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case oOa:
			return this.Ys;
		case pOa:
			return this.Xv;
		case qOa:
			return this.F;
		case rOa:
			return this.tV
	}
	return xA.M.Ga.call(this, a)
};
F.Tf = function(a) {
	switch (a) {
		case qOa:
			return l
	}
	return q
};
F.$q = D(q);
F.cK = D(q);
F.La = function() {
	return new xA(this.Pa())
};

function B5a() {
	return new xA
}
F.ao = function() {
	var a = xA.M.ao.call(this);
	this.Ys && a.push(this.Ys);
	return a
};
F.ho = function(a) {
	var b = xA.M.ho.call(this, a);
	(a = a.tbls_bc) && b.push(a);
	return b
};
kt(B5a);

function C5a(a) {
	this.ra = a;
	this.Ba = [];
	this.L = [];
	this.na = [];
	this.Ha = [];
	this.F = [];
	this.Ta = {};
	this.A = Ru(Pu.ya(), 1);
	this.K = this.Na = this.Y = l;
	this.C = this.G = this.W = 0;
	this.ea = l;
	this.Ma = wa;
	this.Aa = []
}
C5a.prototype.wc = C(If);

function D5a(a, b) {
	a.Na = b;
	a.K = a.K || b
}
function E5a(a, b) {
	a.Y = b;
	a.K = a.K || b
}
function zA(a) {
	a.Y && F5a(a);
	for (var b = 0, c = 0; c < a.C; c++) b += a.L[c];
	return b + a.A
}
function AA(a, b) {
	a.Y && F5a(a);
	return a.L[b]
}
function BA(a, b) {
	return a.ea ? b : a.C - 1 - b
}

function CA(a, b) {
	a.Y && F5a(a);
	var c = a.ea ? 0 : a.W - (zA(a) - a.A);
	b = BA(a, b);
	for (var d = 0; d < b; d++) c += a.L[BA(a, d)];
	return c
}
function G5a(a, b) {
	b -= a.ea ? 0 : a.W - (zA(a) - a.A);
	if (0 > b) return BA(a, 0);
	a.Y && F5a(a);
	for (var c = 0, d = 0; d < a.C; d++) {
		var e = a.L[BA(a, d)];
		if (b < c + e) break;
		c += e
	}
	return BA(a, Math.min(d, a.C - 1))
}
function F5a(a) {
	a.L = [];
	for (var b = 0, c = a.C, d = 0; d < a.Aa.length; d++) {
		var e = a.Aa[d];
		I(e) && (a.L[d] = e, b += e, c--)
	}
	b = (a.W - b) / c;
	b = Math.floor(b);
	b = Math.max(b, Ru(Pu.ya(), 18));
	for (d = 0; d < a.C; d++) I(a.Aa[d]) || (a.L[d] = b);
	E5a(a, q)
};

function DA(a) {
	var b = a.ma();
	Vx.call(this, b);
	this.Q = a
}
L(DA, Wx);
F = DA.prototype;
F.g6 = m;
F.zC = m;
F.vda = m;
F.Wda = m;
F.zl = m;
F.Al = m;
F.vb = function(a, b, c, d) {
	this.vda = a;
	this.Wda = c;
	4 == this.Q.va.A && (ts(ps.ya(), Fi, K(this.VIa, this, b, c), k, l, k, l), this.Q.Y.register(this.aa(), d))
};
F.VIa = function(a, b) {
	var c = qs(Fi).wf;
	this.zl = new(c.XIa())(b, this.Q.ra);
	this.Oa(this.zl);
	this.Al = new(c.YIa())(a, b, this.Q.ra);
	this.Oa(this.Al);
	this.N() && (this.zl.Va(this.N()), this.Al.Va(this.N()));
	this.bb() && (T(this).A(this.N(), cj, this.Gga), T(this).A(this.zl, ck, this.Ega), T(this).A(this.Al, ck, this.Fga))
};
F.ha = function() {
	var a = this.ma();
	this.g6 = a.ha(Rpa);
	this.zC = a.ha(Qpa, HIa, this.g6);
	this.Sb(a.ha(Rb, IIa, this.zC));
	this.zl && this.zl.Va(this.N());
	this.Al && this.Al.Va(this.N())
};
F.za = function() {
	DA.M.za.call(this);
	(this.zl || this.Al) && T(this).A(this.N(), cj, this.Gga);
	this.zl && T(this).A(this.zl, ck, this.Ega);
	this.Al && T(this).A(this.Al, ck, this.Fga)
};
F.Gga = function(a) {
	if (this.zl || this.Al) {
		var b = Qp(this.N()),
			c = a.clientX - b.x;
		a = a.clientY - b.y;
		this.zl && (this.zl.setActive(l), this.zl.Z4(c, a));
		this.Al && (this.Al.setActive(l), this.Al.Z4(c, a))
	}
};
F.Ega = function(a) {
	for (var b = Pu.ya(), c = [], d = [], e = 0; e < a.xJ.length; e++) {
		d.push(0);
		var g = (AA(this.Wda, a.xJ[e]) + a.A[e]) / Su(b);
		c.push(Math.max(g, 18))
	}
	b = {};
	b.rscolI = a.xJ;
	b.rscolWT = d;
	b.rscolWV = c;
	b.tblST = H5a(this.Q.Y, this.aa());
	a = ww(vw(new uw, 7));
	this.Q.C.Ja(hi).qb(b, a)
};
F.Fga = function(a) {
	for (var b = Pu.ya(), c = this.Q.ba(), d = [], e = [], g = H5a(this.Q.Y, this.aa()), h = 0; h < a.rows.length; h++) {
		var n = a.rows[h],
			p = rWa(c, g, n);
		d.push(p);
		for (var n = this.vda.wb(n), t = p = 0; t < n.dh(); t++) p += n.getHeight(t);
		n = (p + a.C[h]) / Su(b);
		e.push(Math.max(n, 0))
	}
	a = {};
	a.rrSI = d;
	a.rrH = e;
	d = ww(vw(new uw, 7));
	this.Q.C.Ja(hi).qb(a, d)
};
F.Tb = C("g6");
F.Uk = function(a) {
	switch (a.xa()) {
		case mAa:
			if (this.zC) {
				var b = a.Ga(Xi);
				b != m && (this.zC.dir = b ? Xi : hk, this.N().dir = b ? Xi : hk);
				var c = a.Ga(Kl);
				c != m && (this.zC.style.width = c + Sj);
				a = a.Ga(qta);
				if (b != m || a != m) this.zC.style.marginLeft = this.zC.style.marginRight = -Math.floor((a || 0) / 2) + Sj
			}
			break;
		default:
			DA.M.Uk.call(this, a)
	}
};
F.O = function() {
	this.Q.Y.unregister(this.aa());
	O(this.Al);
	O(this.zl);
	DA.M.O.call(this)
};

function I5a(a) {
	this.Q = a
}
I5a.prototype.A = function() {
	return new DA(this.Q)
};

function EA() {}
EA.prototype.C = function(a, b) {
	return pt(a, b) ? wt(a, b) : -1
};
EA.prototype.F = function(a, b) {
	return pt(a, b) ? xt(a, b) : -1
};
EA.prototype.G = jm(9);
EA.prototype.A = jm(150);

function J5a() {
	Jz.call(this, q, q, q, 1, na)
}
L(J5a, Jz);

function K5a() {
	Jz.call(this, l, l, l, 0, ga)
}
L(K5a, Jz);

function FA() {}
FA.prototype.C = function(a, b) {
	return pt(a, b) ? st(a, b) : -1
};
FA.prototype.F = function(a, b) {
	return pt(a, b) ? tt(a, b) : -1
};
FA.prototype.G = jm(8);
FA.prototype.A = jm(149);

function L5a() {
	Jz.call(this, l, l, q, 0, ja)
}
L(L5a, Jz);

function M5a() {}
M5a.prototype.rba = function(a, b) {
	var c, d, e;
	if (b.xa() == fFa) {
		d = b.K;
		var g = b.A;
		c = b.F;
		var h = zWa(a, d);
		if (-1 == h) e = BWa(a, d, g, c);
		else {
			var n = d.A,
				p = (e = n.F.A() == n.A) ? n.A + 1 : n.C,
				t = At(a, h, p),
				u = xt(a.qa(), p),
				u = At(a, h, u),
				p = tt(a.qa(), p),
				p = At(a, h, p - 1),
				x = a.Ra(zj, n.F.A()),
				n = At(a, h, d.F.F.A()),
				x = x.wc();
			(n = 38 == c ? 0 == t.Db ? m : {
				Db: t.Db - 1,
				Gb: t.Gb
			} : 40 == c ? t.Db == p.Db ? m : {
				Db: t.Db + 1,
				Gb: t.Gb
			} : 37 == c && x || 39 == c && !x ? !e && t.Db == n.Db && t.Gb == n.Gb ? m : 0 == t.Gb ? 0 == t.Db ? m : {
				Db: t.Db - 1,
				Gb: t.Gb
			} : {
				Db: t.Db,
				Gb: t.Gb - 1
			} : 39 == c && x || 37 == c && !x ? e && t.Db == n.Db && t.Gb == n.Gb ? m : t.Gb == u.Gb ? t.Db == p.Db ? m : {
				Db: t.Db + 1,
				Gb: t.Gb
			} : {
				Db: t.Db,
				Gb: t.Gb + 1
			} : t) ? (n.Db != u.Db && (g = {
				Db: n.Db,
				Gb: 0
			}, g = yWa(a, h, g, g), g = xt(a.qa(), g[0].start), g = At(a, h, g), n.Gb = Math.min(g.Gb, n.Gb)), h = yWa(a, h, n, n), e = {
				location: new ws(e ? h[0].start + 1 : h[0].end),
				Ep: (37 == c || 39 == c) && (t.Gb != n.Gb || t.Db != n.Db)
			}) : e = {
				location: g,
				Ep: q
			}
		}
		c = e.location;
		e = e.Ep;
		d = d.F ? d.F.F : d.Lb
	} else if (b.xa() == UJa) if (d = b.C, c = b.A, e = c, t = d, 0 != e.xa() || 0 != t.xa() ? e = q : (e = e.A(), t = t.A(), pt(a.qa(), t) ? (h = yt(a.qa(), t), g = zt(a.qa(), t), e = t - 1 == h && e - 1 == g) : e = q), e) e = l;
	else {
		if (0 == c.xa() && (e = Ts(a.qa(), c.A()), e == na || e == ja)) c = c.shift(-1);
		e = q
	} else f(Error("Unknown selection change request."));
	return wWa(a, c, d, e)
};
M5a.prototype.uja = function(a, b) {
	var c = CWa(a, b),
		d = b.La(),
		e = c.g7;
	e != m && (d.start = e + 2);
	N5a(a, d, c.f7);
	return d
};
M5a.prototype.sba = function(a, b, c) {
	var d = CWa(a, b),
		e = b.La();
	c <= b.start ? (b = d.g7, b != m && (b <= c ? (c = tt(a.qa(), b), e.start = c + 1) : e.start = b + 2), N5a(a, e, d.f7)) : (b = d.g7, b != m && (e.start = b + 2), d = d.f7, d != m ? (a = tt(a.qa(), d), e.end = a >= c ? d - 1 : a - 1) : Ts(a.qa(), e.end) == ha && e.end--);
	return e
};

function N5a(a, b, c) {
	c != m ? (a = tt(a.qa(), c), b.end = a - 1) : Ts(a.qa(), b.end) == ha && b.end++
};

function O5a(a) {
	this.A = jFa;
	this.index = a
}
L(O5a, xy);

function GA(a, b, c) {
	this.C = a;
	this.F = b;
	this.G = c;
	this.A = []
}
L(GA, M);

function P5a(a, b) {
	a.A[b] || (a.A[b] = {});
	return a.A[b]
}

function Q5a(a, b, c, d, e, g) {
	e = new xs(c, c + e - 1);
	var h = R5a(b.C, e),
		n = [],
		p;
	for (p in b.A) {
		var t = HA(b.A[p], e.start);
		t && Bs(t, e) && n.push(p)
	}
	p = P5a(a, d);
	for (t = 0; t < h.length; t++) {
		var u = h[t],
			x = Vw(a.F, u)[g] || m,
			y = q;
		if (p[u]) if (x && !x.vl()) y = l;
		else if (x) for (var B = 0; B < n.length; B++) if (n[B] == u) {
			y = l;
			break
		}
		if (y) S5a(a, d, p[u]), p[u] = [];
		else if (x && x.vl() && (x = x.Mn(e))) {
			var y = a,
				B = c,
				E = d,
				H = u,
				J = x,
				$ = P5a(y, E),
				V = $[H];
			V == m && (V = [], $[H] = V);
			$ = uUa(V, J);
			S5a(y, E, $);
			for (var H = V, ca = vUa, ia = 0; ia < $.length; ia++) Bn(H, $[ia], ca);
			for (H = 0; H < V.length; H++) V[H].rb().vg(J[H].rb().ba());
			H = [];
			for ($ = 0; $ < V.length; $++) {
				var ca = V[$],
					ua = y,
					yb = B,
					Bb = E,
					ia = ca,
					Wb = ia.He(),
					ua = ua.C.BZ(Bb, yb, Wb, ia.G),
					ia = ia.rb();
				(!ia.OK || !zn(ia.OK, ua, OXa)) && H.push(ca)
			}
			$ = y;
			ca = B;
			ia = E;
			for (ua = 0; ua < H.length; ua++) T5a($, ia, H[ua]);
			U5a($, ca, ia, H);
			J = uUa(J, V);
			U5a(y, B, E, J);
			y = V;
			B = J;
			E = vUa;
			for (V = 0; V < B.length; V++) gr(y, B[V], E);
			0 < x.length && (x = b, y = e, x.A[u] || (x.A[u] = new IA), x.A[u].add(y.start, y.end))
		}
	}
}
function S5a(a, b, c) {
	for (var d = 0; d < c.length; d++) {
		var e = c[d];
		T5a(a, b, e);
		O(e)
	}
}

function T5a(a, b, c) {
	(a = a.C.u3(b)) || f(Error("Detaching overlay with no renderer."));
	if (c = c.rb().gj) for (b = 0; b < c.length; b++) a.ma().removeNode(c[b])
}
function U5a(a, b, c, d) {
	var e = a.C.u3(c);
	e || f(Error("Attaching overlays with no renderer."));
	for (var g = 0; g < d.length; g++) for (var h = d[g], n = h.He(), n = a.C.BZ(c, b, n, h.G), p = h, h = e, t = n, n = h.ma(), p = p.rb().T2(p.F(t)), t = 0; t < p.length; t++) n.Nz(p[t], n.Tr(h.N()))
}
GA.prototype.O = function() {
	for (var a = 0; a < this.A.length; a++) {
		var b = this.A[a],
			c;
		for (c in b) {
			for (var d = b[c], e = 0; e < d.length; e++) O(d[e]), delete d[e];
			delete this.A[c]
		}
		delete this.A[a]
	}
	delete this.A;
	delete this.G;
	delete this.C;
	delete this.F;
	GA.M.O.call(this)
};

function JA(a, b, c) {
	gz.call(this, a, na);
	this.na = new GA(this, this.Q.F, a.Na);
	this.Ba = b;
	this.Aa = c
}
L(JA, gz);
F = JA.prototype;
F.Cf = 2;
F.Bw = 0;
F.lx = function() {
	return iz(this.Q.G, qh)
};
F.Ly = function(a) {
	return jz(this.Aa, a.index, a.A, this.Q)
};
F.rH = function(a, b) {
	return !this.ap(b, a.index - 1) && this.Aa.Ye(a.index, a.A, this.Q.ba())
};
F.z5 = function(a) {
	var b = this.Q.ba().Ra(Gd, a);
	fz(this, Ru(Pu.ya(), b.Vs), Ru(Pu.ya(), b.Zz), Ru(Pu.ya(), b.Xz), Ru(Pu.ya(), b.Yz));
	this.Cf = b.Cf;
	this.Ba(b, a)
};
F.Eh = function(a, b, c) {
	0 == a.xa() && (a.A() == b && !a.C) && (a = a.shift(1));
	if ((a = JA.M.Eh.call(this, a, b, c)) && 0 == a.Hg) a.A.y += this.Bw;
	return a
};
F.xk = function(a, b, c, d, e, g) {
	0 == b && (d -= this.Bw);
	return JA.M.xk.call(this, a, b, c, d, e, g)
};
F.Mo = function(a) {
	if ((a = JA.M.Mo.call(this, a)) && 0 == a.Hg) a.top += this.Bw, a.bottom += this.Bw;
	return a
};
F.hm = function(a, b, c) {
	Q5a(this.na, a, b, c, this.bd(), qh);
	JA.M.hm.call(this, a, b, c)
};
F.BZ = function(a) {
	return [new zu(0, 0, X1a(this, a), this.getHeight(a))]
};
F.u3 = function(a) {
	return this.rb(a)
};
F.ap = function(a, b) {
	switch (Ts(this.Q.ba().qa(), b + 1)) {
		case na:
		case ha:
		case ja:
			return l
	}
	return q
};
F.O = function() {
	JA.M.O.call(this);
	O(this.na)
};

function V5a(a) {
	this.A = sIa;
	this.index = a
}
L(V5a, xy);

function W5a(a) {
	this.A = [];
	this.ra = a
}
L(W5a, M);
F = W5a.prototype;
F.aP = m;
F.Nd = 0;
F.SX = 0;
F.SD = m;

function KA(a, b) {
	a.A.push(b)
}
F.Va = function() {
	if (this.aP) {
		for (var a = 0, b; b = this.A[a]; a++) this.aP.Uk(b), O(b);
		this.A.length = 0
	}
};
F.rb = C("aP");
F.getHeight = function() {
	return Math.max(this.Nd, this.SX)
};
F.O = function() {
	for (var a = 0, b; b = this.A[a]; a++) O(b);
	W5a.M.O.call(this)
};

function LA(a, b, c, d, e, g) {
	this.A = NIa;
	this.G = a;
	this.width = I(b) ? b : m;
	this.borderWidth = I(c) ? c : m;
	this.borderColor = I(d) ? d : m;
	this.backgroundColor = I(e) ? e : m;
	this.offsetTop = I(g) ? g : m
}
L(LA, xy);
LA.prototype.F = function(a) {
	return a.G == this.G
};
LA.prototype.C = D(l);
LA.prototype.xF = function(a) {
	a.width === m && (a.width = this.width);
	a.borderWidth === m && (a.borderWidth = this.borderWidth);
	a.borderColor === m && (a.borderColor = this.borderColor);
	a.backgroundColor === m && (a.backgroundColor = this.backgroundColor);
	a.offsetTop === m && (a.offsetTop = this.offsetTop)
};

function MA(a, b, c) {
	this.Q = a;
	this.F = b;
	this.A = [];
	this.K = new zy(K(this.Hxa, this));
	this.C = [];
	this.L = [];
	this.W = c
}
L(MA, Py);
F = MA.prototype;
F.bP = q;
F.Ow = -1;
F.cP = -1;
F.P9 = 0;

function NA(a, b) {
	if (!a.C[b]) {
		a.C[b] = new W5a(a.Q.ra);
		for (var c = 0; c < a.A.length; c++) KA(a.C[b], new O5a(c)), KA(a.C[b], X5a(a, c, l))
	}
	return a.C[b]
}
F.vj = function(a, b, c, d, e, g) {
	this.P9 = b;
	this.L[0] == c && this.L.shift();
	NA(this, c).SD = d;
	var h = Sy(a);
	if (h && h.index == b) {
		var n = this.Q.ba();
		if (h.type == le) this.Q.ra.log(Error(ooa)), this.bP = q, az(a, b, -1);
		else {
			d = q;
			h.type == Wg && (d = this.bP = l);
			var h = n.Ra(gk, b),
				h = Ru(Pu.ya(), h.Cz),
				n = this.F,
				p = Y5a(this, b);
			h != n.na[p] && (n.na[p] = h, D5a(n, l));
			n = NA(this, 0);
			p = n.getHeight();
			n.SX = h;
			var p = n.getHeight() != p,
				t = {};
			t.height = h;
			KA(n, new Gy(t));
			p && KA(n, new Oy(zA(this.F), this.getHeight(0)));
			a.xj(b, d ? 1 : 0)
		}
	}
	d = h = q;
	for (this.Ow = 0;;) {
		if (p = Sy(a)) {
			var t = p,
				n = this.Ow,
				u = b,
				x = this.K.Ga(n);
			if (t.index - u == x && t.type == Wg && Ts(this.Q.ba().qa(), t.index) == na) {
				t = new JA(this.Q, K(this.jta, this), this.W);
				mn(this.A, t, n);
				Ay(this.K, n);
				t = 0;
				for (u = k; u = this.C[t]; t++) KA(u, new O5a(n)), KA(u, X5a(this, n))
			}
			n = a;
			u = p;
			p = this.Ow;
			x = b;
			if (p >= this.A.length) n = q;
			else {
				var y = this.K.Ga(p),
					t = this.K.Ga(p + 1) - y,
					x = y + x;
				if (u.type == le && u.index == x && u.F.qa().length >= t) {
					O(this.A[p]);
					Ay(this.K, p);
					pn(this.A, p);
					u = 0;
					for (y = k; y = this.C[u]; u++) KA(y, new V5a(p));
					az(n, x, -t);
					n = l
				} else n = q
			}
			if (n) continue
		}
		n = this.A[this.Ow];
		if (!n) break;
		if (0 == n.dh() || n.dh() > c) {
			for (var p = this.Ow, t = a, B = b, u = c, x = e, y = g, E = NA(this, u), H = m, B = this.K.Ga(p) + B, J = u, $ = l; $; J++) {
				var V = NA(this, J),
					ca = V.SD;
				ca || (ca = new uo(E.SD.x, Number.MAX_VALUE));
				ca = ca.La();
				ca.x = AA(this.F, p) - this.F.A;
				ca.y -= this.F.A;
				var $ = new dy(new uo(x.offset.x + CA(this.F, p), x.offset.y + this.A[p].Bw), x.A, x.pD),
					ca = n.vj(t, B, J, ca, $, y),
					ia = n,
					$ = p,
					ua = J,
					yb = ca,
					Bb = NA(this, ua),
					Wb = 0;
				3 == yb.A && (yb.C[Wb] ? KA(Bb, new Ny(yb.C[Wb++])) : this.Q.ra.log(Error(Zna)));
				for (var Qd = ua + 1; Wb < yb.C.length; Wb++) {
					if (this.C[Qd]) KA(this.C[Qd],
					new Ny(yb.C[Wb]));
					else {
						this.Q.ra.log(Error(ama));
						break
					}
					Qd++
				}
				2 == yb.A && ((ia = ia.rb(ua)) ? KA(Bb, new yy(ia, $)) : this.Q.ra.log(Error(Jfa)));
				if (J == u && (H = ca, H.Gf)) break;
				if ($ = ca.F || ca.yj && !! Sy(t)) H.F = l;
				ca.Gf && (gr(this.L, J), V.SD = m, J--, $ = l)
			}
			Ay(this.K, p);
			n = H;
			if (n.Gf) {
				h = l;
				break
			}
			n.F && (d = l)
		}
		this.Ow++
	}
	this.cP = this.Ow = -1;
	a = NA(this, c);
	for (e = b = 0; n = this.A[e]; e++) n = n.getHeight(c), n > b && (b = n);
	e = a.getHeight();
	a.Nd = b;
	a.getHeight() != e && KA(a, new Oy(zA(this.F), this.getHeight(c)));
	if (0 == c) {
		a = NA(this, 0);
		b = a.getHeight();
		for (e = 0; n = this.A[e]; e++) {
			p = n.getHeight(0);
			t = 0;
			switch (n.Cf) {
				case 0:
					t = b - p;
					break;
				case 1:
					t = (b - p) / 2
			}
			t != n.Bw && (n.Bw = t, KA(a, new LA(e, k, k, k, k, t)))
		}
	}
	b = h;
	a = d;
	d = new A1a;
	h = NA(this, c);
	d.Gf = 0 < this.A.length && b || !g && 0 == c && h.SX > h.SD.y;
	g = q;
	for (b = 0; e = this.A[b]; b++) e = e.dh(), e > c && (g = l, e > c + 1 && (d.yj = l));
	if (!d.yj) {
		for (b = c + 1; e = this.C[b]; b++) e.rb() && d.C.push(e.rb()), O(e), Bn(this.L, b);
		this.C.length = c + 1
	}
	if (!a && (a = d.yj)) a = !NA(this, c + 1).SD;
	a && gr(this.L, c + 1);
	d.F = !d.Gf && 0 < this.L.length;
	!g && (0 != c || !this.bP) ? (d.A = 3, h.rb() && mn(d.C, h.rb(), 0),
	O(h), this.C.length = c) : h.rb() ? this.Fw(c) && (d.A = 1) : (g = iz(this.Q.G, vIa), h.aP = g, d.A = 2, this.C[c + 1] && this.C[c + 1].rb() && this.Q.ra.log(Error(Bka)));
	d.Gf && gr(this.L, c);
	return d
};

function Y5a(a, b) {
	0 > a.cP && (a.cP = tWa(a.Q.ba(), b));
	return a.cP
}
F.hm = function(a, b, c) {
	for (var d = 0, e = this.A.length - 1, g = this.K, h = b + this.bd() - 1; d <= e;) {
		d = g.Ga(d) + b;
		d = i2a(a.C, d);
		if (-1 == d || d > h) break;
		var d = g.indexOf(d - b),
			n = g.Ga(d);
		this.A[d].dh() > c && this.A[d].hm(a, n + b, c);
		d += 1
	}
};
F.Fw = function(a) {
	if (this.C[a] && 0 < this.C[a].A.length) return l;
	for (var b = 0, c; c = this.A[b]; b++) if (c.Fw(a)) return l;
	return q
};
F.rb = function(a) {
	return this.C[a] ? this.C[a].rb() : m
};
F.getHeight = function(a) {
	if (!this.C[a]) return 0;
	a = this.C[a].getHeight();
	0 < a && (a += this.F.A);
	return a
};

function X5a(a, b, c) {
	var d = k;
	c && (d = a.Q.ba().Ra(Gd, a.P9 + a.K.Ga(b)).Um());
	return new LA(b, AA(a.F, b) - a.F.A, a.F.A, a.F.Ma, d)
}
F.jta = function(a, b) {
	var c = this.Ow;
	0 > c && f(Error("Cannot be called outside layout."));
	for (var d = 0, e; e = this.C[d]; d++) KA(e, new LA(c, k, k, k, a.Um()));
	d = this.F;
	e = Y5a(this, b);
	var g = new Ep(Ru(Pu.ya(), a.Vs), Ru(Pu.ya(), a.Zz), Ru(Pu.ya(), a.Xz), Ru(Pu.ya(), a.Yz));
	d.F[e] || (d.F[e] = []);
	if (!d.F[e][c] || !jTa(d.F[e][c], g)) d.F[e][c] = g, d.K = l
};
F.Bn = function(a, b, c) {
	var d = Z5a(this, a);
	if (0 > d) return m;
	var e = this.K.Ga(d);
	return (a = this.A[d].Bn(a.shift(-e), b, c - CA(this.F, d))) ? a.shift(e) : m
};
F.Vq = function(a) {
	var b = Z5a(this, a);
	if (0 > b) return m;
	var c = this.K.Ga(b);
	if (a = this.A[b].Vq(a.shift(-c))) a.start += c, a.end += c;
	return a
};
F.xk = function(a, b, c, d, e, g) {
	for (var h = G5a(this.F, c), n = -1, p = 0; 0 <= h - p || h + p < this.A.length; p++) {
		var t = h - p;
		if (this.A[t] && this.A[t].dh() > b) {
			n = t;
			break
		}
		t = h + p;
		if (this.A[t] && this.A[t].dh() > b) {
			n = t;
			break
		}
	}
	p = this.A[n];
	if (!p) return m;
	n == h ? (h = CA(this.F, h), c -= h) : c = n < h == this.F.wc() ? Number.MAX_VALUE : 0;
	return (a = p.xk(new uo(a.x + CA(this.F, n), a.y + this.A[n].Bw), b, c, d, e, g)) ? a.shift(this.K.Ga(n)) : m
};
F.bd = function() {
	return (this.bP ? 1 : 0) + this.K.Ga(this.A.length) - 1
};
F.dh = function() {
	for (var a = 0, b = 0, c; c = this.A[b]; b++) a = Math.max(a, c.dh());
	return a
};
F.Wq = function(a) {
	var b = Z5a(this, a);
	if (0 > b) return m;
	var c = this.K.Ga(b);
	return this.A[b].Wq(a.shift(-c))
};
F.Eh = function(a, b, c) {
	var d = Nu(this.Q.ba(), a);
	if (d > b + this.bd()) return m;
	d -= b;
	0 == a.xa() && a.C && d--;
	if (0 >= d) return m;
	var d = this.K.indexOf(d),
		e = this.A[d],
		g = this.K.Ga(d);
	if (a = e.Eh(a, b + g, c)) a.A.x += CA(this.F, d);
	return a
};
F.Mo = function(a) {
	var b = Z5a(this, a);
	if (0 > b) return m;
	var c = this.A[b],
		d = this.K.Ga(b);
	a = c.Mo(a.shift(-d));
	if (!a) return m;
	b = CA(this.F, b);
	a.left += b;
	a.right += b;
	a.bottom += this.F.A;
	return a
};

function Z5a(a, b) {
	if (0 != b.xa()) return -1;
	var c = b.A();
	if (c > a.bd()) return -1;
	b.C && c--;
	return a.K.indexOf(c)
}
F.Gj = jm(132);
F.Va = function(a) {
	if (this.C[a]) {
		this.C[a].Va();
		for (var b = 0, c; c = this.A[b]; b++) c.Fw(a) && c.Va(a)
	}
};
F.MA = function() {
	for (var a = 0, b = 0; b < this.A.length; b++) a = Math.max(a, this.A[b].MA());
	0 < a && (a += this.F.A);
	return a
};
F.Hxa = function(a, b) {
	return 0 > a ? 1 : a >= this.A.length ? (this.Q.ra.log(Error(eoa)), b + 1) : b + this.A[a].bd()
};
F.dA = D(0);
F.Aw = function(a) {
	if (0 == a || a >= this.bd()) return -1;
	var b = this.K.indexOf(a);
	if (0 > b) return -1;
	var c = this.K.Ga(b);
	return this.A[b].Aw(a - c)
};
F.O = function() {
	for (var a = 0; a < this.A.length; a++) O(this.A[a]);
	O(this.K);
	for (a = 0; a < this.C.length; a++) O(this.C[a]);
	MA.M.O.call(this)
};

function OA(a, b) {
	gz.call(this, a, ga, ha);
	this.G = new C5a(a.ra);
	this.na = b
}
L(OA, gz);
F = OA.prototype;
F.qY = q;
F.vj = function(a, b, c, d, e, g) {
	var h = this.G,
		n = d.x;
	n != h.W && (h.W = n, E5a(h, l));
	h = this.G;
	n = vt(this.Q.ba(), b);
	if (n != h.C) {
		h.C = n;
		E5a(h, l);
		for (n = 0; n < h.F.length; n++) h.F[n] = []
	}
	d = d.La();
	d.y -= this.G.A;
	a = OA.M.vj.call(this, a, b, c, d, e, g);
	if (this.qY) {
		this.qY = q;
		for (b = 0; b < this.C.length; b++) {
			c = this.wb(b);
			e = 0;
			for (g = k; g = c.C[e]; e++) {
				for (d = 0; d < c.A.length; d++) KA(g, X5a(c, d));
				KA(g, new Oy(zA(c.F), c.getHeight(e)))
			}
		}
	}
	return a
};
F.z5 = function(a) {
	a = this.Q.ba().Ra(Tk, a);
	var b = a.wc();
	this.G.ea = b;
	for (var b = this.G, c = yA(a), d = [], e = Pu.ya(), g = 0; g < c.length; g++) {
		var h = c[g];
		h && 1 != h.Oz && (d[g] = Math.max(Ru(e, 18), Ru(e, h.HD)))
	}
	b.Aa = d;
	E5a(b, l);
	b = Ru(Pu.ya(), a.Xv);
	this.G.A = b;
	this.G.Ma = a.Ys;
	this.qY = l;
	for (a = 0; a < this.dh(); a++) $5a(this, a)
};

function $5a(a, b) {
	var c = {};
	c.ltr = a.G.wc();
	c.width = zA(a.G);
	c[qta] = a.G.A;
	c[ota] = a.G.Ma;
	cz(a, b, new Gy(c))
}
function a6a(a) {
	return Math.ceil(a.G.A / 2)
}
F.lx = function(a, b) {
	$5a(this, b);
	var c = iz(this.Q.G, GIa);
	c.vb(this, Ry(this, b), this.G, a - 1);
	this.Q.Ta.register(this, a - 1);
	return c
};
F.Ly = function(a, b) {
	var c = this.G;
	c.G++;
	D5a(c, l);
	mn(c.Ha, [], b);
	mn(c.F, [], b);
	mn(c.na, 0, b);
	return new MA(this.Q, this.G, this.na)
};
F.rH = function(a) {
	return Ts(this.Q.ba().qa(), a.index) == ja
};
F.Bka = function(a) {
	var b = this.G;
	b.G--;
	D5a(b, l);
	pn(b.Ha, a);
	pn(b.F, a);
	pn(b.na, a)
};
F.getHeight = function(a) {
	return 0 == this.G.C || 0 == this.G.G ? 0 : OA.M.getHeight.call(this, a) + this.G.A
};
F.Bn = function(a, b, c) {
	return OA.M.Bn.call(this, a, b, c - a6a(this))
};
F.xk = function(a, b, c, d, e, g) {
	var h = a6a(this),
		n = this.G.A;
	a.x += h;
	a.y += n;
	return OA.M.xk.call(this, a, b, c - h, d - n, e, g)
};
F.Gj = jm(131);
F.Eh = function(a, b, c) {
	a = OA.M.Eh.call(this, a, b, c);
	if (!a) return m;
	a.A.x += a6a(this);
	a.A.y += this.G.A;
	return a
};
F.MA = function() {
	return OA.M.MA.call(this) + this.G.A
};
F.Mo = function(a) {
	a = OA.M.Mo.call(this, a);
	a.bottom += this.G.A;
	return a
};

function b6a(a) {
	this.C = a
}
b6a.prototype.A = function(a) {
	return new OA(a, this.C)
};
b6a.prototype.Ye = function(a, b, c) {
	return Ts(c.qa(), a) == ga
};

function c6a() {}
L(c6a, ax);
F = c6a.prototype;
F.OT = function(a, b) {
	b.register(new b6a(b))
};
F.Se = function(a) {
	a.gb(ZGa, yka, 229, yka, k, k, new vo(0, 0), k, k, k, k, function(a) {
		var c = new pr;
		sm(a.width) && sm(a.height) && (c.Ua[12] = a.width, c.Ua[13] = a.height);
		return c
	});
	a.gb(Xg, yka, 230, yka);
	a.gb(uh, Dha, 181, k, k, k, k, k, k, k, k, k, k, uMa);
	a.gb($h, vka, 227, k, k, k, k, k, k, k, k, k, k, lsa);
	a.gb(ai, wka, 228, k, k, k, k, k, k, k, k, k, k, msa);
	a.gb(th, Cha, 180, k, k, k, k, k, k, k, k, k, k, tMa);
	a.gb(Kh, bka, 209, k, k, k, k, k, k, k, k, k, k, jsa);
	a.gb(Lh, cka, 210, k, k, k, k, k, k, k, k, k, k, ksa);
	a.gb(sh, Bha, 177, k, k, k, k, k, k, k, k, k, k, rMa);
	a.gb(ki, Zpa, 282);
	a.gb(oFa, r, 170);
	a.gb(hi, r, 276)
};
F.Fm = function(a) {
	PA(a, wBa, rr([Qc, ec], Oc), 340);
	PA(a, xBa, rr([Qc, vc], Oc), 341);
	PA(a, zBa, rr([Qc, Ic], Oc), 343);
	PA(a, yBa, rr([Qc, Jb], Oc), 342);
	PA(a, hGa, rr([Qc, Yb], Oc), 327);
	PA(a, VHa, rr([Qc, Kc], Oc), 320);
	PA(a, OHa, rr([Qc, Qb], Oc), 328);
	PA(a, PHa, rr([vc, Qc], Oc), 264);
	PA(a, QHa, rr([Bc, Qc], Oc), 265);
	PA(a, NHa, rr([Qc, gc], Oc), 332);
	PA(a, KHa, rr([Qc, mc], Oc), 329);
	PA(a, LHa, rr([Qc, Fb], Oc), 330);
	PA(a, MHa, rr([Qc, Vc], Oc), 331);
	PA(a, UHa, rr([Qc, lc], Oc), 319);
	PA(a, RHa, rr([Qc, oc], Oc), 333);
	PA(a, SHa, rr([Qc, rc], Oc), 334);
	PA(a, THa, rr([Qc, cc],
	Oc), 335)
};
F.$n = function(a, b) {
	var c = a.ma();
	Rx(pz(pz(pz(b, GIa, new I5a(a)), vIa, new w5a(c)), qh, new t5a(c)), hAa, new sA(c))
};
F.L2 = function(a) {
	i0a(a.A, new M5a, 0)
};
F.NT = function(a) {
	Nz(Nz(Nz(a, new FA), new EA), new tA)
};

function PA(a, b, c, d) {
	a.gb(b, r, d, k, k, c)
}
F.MT = function(a) {
	Oz(Oz(Oz(a, new K5a), new L5a), new J5a)
};

function QA(a) {
	Vx.call(this, a)
}
L(QA, Wx);
QA.prototype.ha = function() {
	this.Sb(this.ma().ha(Rb, oIa))
};
QA.prototype.Uk = function(a) {
	switch (a.xa()) {
		case kFa:
			var b = a.Ha;
			b.getParent() && b.getParent().removeChild(b, l);
			this.Oa(b, l);
			b.N().style.position = id;
			b.xc(a.Ma, a.K);
			break;
		default:
			QA.M.Uk.call(this, a)
	}
};

function d6a(a) {
	this.C = a
}
d6a.prototype.A = function() {
	return new QA(this.C)
};

function e6a(a, b, c) {
	this.A = kFa;
	this.Ha = a;
	this.Ma = b;
	this.K = c
}
L(e6a, xy);
/*

 Copyright (C) 2001-2009, International Business Machines Corporation and
 others.  All Rights Reserved.
*/
function f6a() {
	this.C = 0;
	this.G = [];
	this.F = [];
	this.W = this.Y = this.A = this.L = this.ea = this.K = 0;
	this.na = []
}
f6a.prototype.ub = C(Jb);
var g6a = [1, 2],
	h6a = [2048, 16384],
	i6a = [4096, 32768];

function RA(a, b) {
	return a.ea ? a.G[b] >> 6 : a.K
}
function j6a(a) {
	return !(a.A & 57346) && !(a.A & 32 && a.A & 384984) ? 0 : !(a.A & 6181) ? 1 : 2
}
var k6a = [0, 1, 2, 7, 8, 3, 9, 6, 5, 4, 4, 10, 10, 12, 10, 10, 10, 11, 10],
	l6a = [
		[1, 2, 4, 5, 7, 15, 17, 7, 9, 7, 0, 7, 3, 4],
		[1, 34, 36, 37, 39, 47, 49, 39, 41, 39, 1, 1, 35, 0],
		[33, 2, 36, 37, 39, 47, 49, 39, 41, 39, 2, 2, 35, 1],
		[33, 34, 38, 38, 40, 48, 49, 40, 40, 40, 3, 3, 3, 1],
		[33, 34, 4, 37, 39, 47, 49, 74, 11, 74, 4, 4, 35, 2],
		[33, 34, 36, 5, 39, 47, 49, 39, 41, 76, 5, 5, 35, 3],
		[33, 34, 6, 6, 40, 48, 49, 40, 40, 77, 6, 6, 35, 3],
		[33, 34, 36, 37, 7, 47, 49, 7, 78, 7, 7, 7, 35, 4],
		[33, 34, 38, 38, 8, 48, 49, 8, 8, 8, 8, 8, 35, 4],
		[33, 34, 4, 37, 7, 47, 49, 7, 9, 7, 9, 9, 35, 4],
		[97, 98, 4, 101, 135, 111, 113, 135, 142, 135, 10, 135, 99, 2],
		[33, 34, 4,
		37, 39, 47, 49, 39, 11, 39, 11, 11, 35, 2],
		[97, 98, 100, 5, 135, 111, 113, 135, 142, 135, 12, 135, 99, 3],
		[97, 98, 6, 6, 136, 112, 113, 136, 136, 136, 13, 136, 99, 3],
		[33, 34, 132, 37, 7, 47, 49, 7, 14, 7, 14, 14, 35, 4],
		[33, 34, 36, 37, 39, 15, 49, 39, 41, 39, 15, 39, 35, 5],
		[33, 34, 38, 38, 40, 16, 49, 40, 40, 40, 16, 40, 35, 5],
		[33, 34, 36, 37, 39, 47, 17, 39, 41, 39, 17, 39, 35, 6]
	],
	m6a = [
		[
			[0, 1, 0, 2, 0, 0, 0, 0],
			[0, 1, 3, 3, 20, 20, 0, 1],
			[0, 1, 0, 2, 21, 21, 0, 2],
			[0, 1, 3, 3, 20, 20, 0, 2],
			[32, 1, 3, 3, 4, 4, 32, 1],
			[32, 1, 32, 2, 5, 5, 32, 1]
		],
		[
			[1, 0, 2, 2, 0, 0, 0, 0],
			[1, 0, 1, 3, 20, 20, 0, 1],
			[1, 0, 2, 2, 0, 0, 0, 1],
			[1, 0, 1, 3, 5, 5, 0, 1],
			[33, 0, 33, 3, 4, 4, 0, 0],
			[1, 0, 1, 3, 5, 5, 0, 0]
		]
	];

function SA(a, b, c, d, e) {
	var g = b.C,
		h;
	h = d;
	c = g[b.state][c];
	b.state = c & 15;
	c >>= 4;
	g = g[b.state][7];
	if (0 != c) switch (c) {
		case 1:
			b.F = h;
			break;
		case 2:
			d = b.F;
			break;
		default:
			f("Internal ICU error in processPropertySeq_")
	}
	if (0 != g || d < h) for (b = b.A + g; d < e; d++) a.F[d] = b
}

function n6a(a, b, c, d, e) {
	var g = new o6a,
		h, n, p, t;
	g.state = 0;
	g.A = a.F[b];
	g.C = m6a[g.A & 1];
	SA(a, g, d, b, b);
	p = 17 == a.G[b] ? 1 + d : 0;
	d = b;
	for (h = 0; b <= c; b++) if (t = b >= c ? e : k6a[a.G[b] & -65], n = p, t = l6a[n][t], p = t & 31, t >>= 5, b == c && 0 == t && (t = 1), 0 != t) switch (n = l6a[n][13], t) {
		case 1:
			SA(a, g, n, d, b);
			d = b;
			break;
		case 2:
			h = b;
			break;
		case 3:
			SA(a, g, n, d, h);
			SA(a, g, 4, h, b);
			d = b;
			break;
		case 4:
			SA(a, g, n, d, h);
			d = h;
			h = b;
			break;
		default:
			f("Internal ICU error in resolveImplicitLevels_")
	}
	SA(a, g, e, c, c)
}
function o6a() {}

function p6a(a, b) {
	this.A = a;
	this.K = b || q6a || (q6a = new r6a)
}
var q6a = m;

function s6a(a, b, c) {
	for (var d = a.G;;) {
		for (var e = b, g; b < a.F;) {
			g = 2 == a.A.L && b < a.C ? a.A.F[b] : RA(a.A, b);
			if (g != c) break;
			b++
		}
		b > e && d.push(a.K.C(e, b, c));
		if (b >= a.F || g < c) return b;
		e = d.length - 1;
		b = s6a(a, b, c + 1);
		for (var h = d.length; ++e < --h;) {
			var n = d[e];
			d[e] = d[h];
			d[h] = n
		}
	}
}
function t6a(a, b, c) {
	this.F = a;
	this.A = b;
	this.G = c
}
t6a.prototype.ub = function() {
	return this.A - this.F
};

function r6a() {}
r6a.prototype.C = function(a, b, c) {
	return new t6a(a, b, c)
};

function TA() {
	this.A = {}
}
mm(TA);
var u6a = RegExp("([\\u05BE\\u05C0\\u05C3\\u05C6\\u05D0-\\u05F4\\u07C0-\\u07EA\\u07F4-\\u07F5\\u07FA-\\u0815\\u081A\\u0824\\u0828\\u0830-\\u083E\\u200F\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB4F])|([\\u0030-\\u0039\\u00B2-\\u00B3\\u00B9\\u06F0-\\u06F9\\u2070\\u2074-\\u2079\\u2080-\\u2089\\u2488-\\u249B\\uFF10-\\uFF19])|([\\u002B\\u002D\\u207A-\\u207B\\u208A-\\u208B\\u2212\\uFB29\\uFE62-\\uFE63\\uFF0B\\uFF0D])|([\\u0023-\\u0025\\u00A2-\\u00A5\\u00B0-\\u00B1\\u0609-\\u060A\\u066A\\u09F2-\\u09F3\\u09FB\\u0AF1\\u0BF9\\u0E3F\\u17DB\\u2030-\\u2034\\u20A0-\\u20B8\\u212E\\u2213\\uA838-\\uA839\\uFE5F\\uFE69-\\uFE6A\\uFF03-\\uFF05\\uFFE0-\\uFFE1\\uFFE5-\\uFFE6])|([\\u0600-\\u0603\\u0660-\\u0669\\u066B-\\u066C\\u06DD])|([\\u002C\\u002E-\\u002F\\u003A\\u00A0\\u060C\\u202F\\u2044\\uFE50\\uFE52\\uFE55\\uFF0C\\uFF0E-\\uFF0F\\uFF1A])|([\\u000A\\u000D\\u001C-\\u001E\\u0085\\u2029])|([\\u0009\\u000B\\u001F])|([\\u000C\\u0020\\u1680\\u180E\\u2000-\\u200A\\u2028\\u205F\\u3000])|([\\u0021-\\u0022\\u0026-\\u002A\\u003B-\\u0040\\u005B-\\u0060\\u007B-\\u007E\\u00A1\\u00A6-\\u00A9\\u00AB-\\u00AC\\u00AE-\\u00AF\\u00B4\\u00B6-\\u00B8\\u00BB-\\u00BF\\u00D7\\u00F7\\u02B9-\\u02BA\\u02C2-\\u02CF\\u02D2-\\u02DF\\u02E5-\\u02ED\\u02EF-\\u02FF\\u0374-\\u0375\\u037E-\\u0385\\u0387\\u03F6\\u058A\\u0606-\\u0607\\u060E-\\u060F\\u06E9\\u07F6-\\u07F9\\u0BF3-\\u0BF8\\u0BFA\\u0C78-\\u0C7E\\u0CF1-\\u0CF2\\u0F3A-\\u0F3D\\u1390-\\u1399\\u1400\\u169B-\\u169C\\u17F0-\\u180A\\u1940-\\u1945\\u19DE-\\u19FF\\u1FBD\\u1FBF-\\u1FC1\\u1FCD-\\u1FCF\\u1FDD-\\u1FDF\\u1FED-\\u1FEF\\u1FFD-\\u1FFE\\u2010-\\u2027\\u2035-\\u2043\\u2045-\\u205E\\u207C-\\u207E\\u208C-\\u208E\\u2100-\\u2101\\u2103-\\u2106\\u2108-\\u2109\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125\\u2127\\u2129\\u213A-\\u213B\\u2140-\\u2144\\u214A-\\u214D\\u2150-\\u215F\\u2189-\\u2211\\u2214-\\u2335\\u237B-\\u2394\\u2396-\\u2487\\u24EA-\\u26AB\\u26AD-\\u27FF\\u2900-\\u2B59\\u2CE5-\\u2CEA\\u2CF9-\\u2CFF\\u2E00-\\u2FFB\\u3001-\\u3004\\u3008-\\u3020\\u3030\\u3036-\\u3037\\u303D-\\u303F\\u309B-\\u309C\\u30A0\\u30FB\\u31C0-\\u31E3\\u321D-\\u321E\\u3250-\\u325F\\u327C-\\u327E\\u32B1-\\u32BF\\u32CC-\\u32CF\\u3377-\\u337A\\u33DE-\\u33DF\\u33FF\\u4DC0-\\u4DFF\\uA490-\\uA4C6\\uA60D-\\uA60F\\uA673\\uA67E-\\uA67F\\uA700-\\uA721\\uA788\\uA828-\\uA82B\\uA874-\\uA877\\uFD3E-\\uFD3F\\uFDFD\\uFE10-\\uFE19\\uFE30-\\uFE4F\\uFE51\\uFE54\\uFE56-\\uFE5E\\uFE60-\\uFE61\\uFE64-\\uFE68\\uFE6B\\uFF01-\\uFF02\\uFF06-\\uFF0A\\uFF1B-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF65\\uFFE2-\\uFFE4\\uFFE8-\\uFFFD])|([\\u202A])|([\\u202D])|([\\u0608\\u060B\\u060D\\u061B-\\u064A\\u066D-\\u066F\\u0671-\\u06D5\\u06E5-\\u06E6\\u06EE-\\u06EF\\u06FA-\\u070D\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\uFB50-\\uFD3D\\uFD50-\\uFDFC\\uFE70-\\uFEFC])|([\\u202B])|([\\u202E])|([\\u202C])|([\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DE-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962-\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2-\\u09E3\\u0A01-\\u0A02\\u0A3C\\u0A41-\\u0A51\\u0A70-\\u0A71\\u0A75-\\u0A82\\u0ABC\\u0AC1-\\u0AC8\\u0ACD\\u0AE2-\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D-\\u0B56\\u0B62-\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C56\\u0C62-\\u0C63\\u0CBC\\u0CCC-\\u0CCD\\u0CE2-\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62-\\u0D63\\u0DCA\\u0DD2-\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECD\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86-\\u0F87\\u0F90-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039-\\u103A\\u103D-\\u103E\\u1058-\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085-\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927-\\u1928\\u1932\\u1939-\\u193B\\u1A17-\\u1A18\\u1A56\\u1A58-\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80-\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BA9\\u1C2C-\\u1C33\\u1C36-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA67C-\\uA67D\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA825-\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31-\\uAA32\\uAA35-\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26])|([\\u0000-\\u0008\\u000E-\\u001B\\u007F-\\u0084\\u0086-\\u009F\\u00AD\\u070F\\u200B-\\u200D\\u2060-\\u206F\\uFEFF])");

function v6a(a, b) {
	var c = a.A[b];
	if (c == m) {
		for (var d = u6a.exec(b), e = d ? d.length : 0, g = 1; c == m; g++) g >= e ? c = 0 : d[g] && (c = g);
		a.A[b] = c
	}
	return c
};

function w6a() {
	this.F = new f6a
}
w6a.prototype.A = NaN;
w6a.prototype.G = 0;
w6a.prototype.C = C(Eb);

function x6a(a, b) {
	b -= a.A;
	return 0 <= b && b < a.F.ub() ? 2 == a.F.L && b < a.F.Y ? a.F.F[b] : RA(a.F, b) : NaN
}
function y6a(a, b, c) {
	this.F = a;
	this.C = b;
	this.A = c
}
var z6a = TA.ya();

function A6a(a, b, c, d) {
	t6a.call(this, a, b, c);
	this.C = d
}
L(A6a, t6a);
A6a.prototype.wc = function() {
	return !(this.G & 1)
};

function B6a(a, b, c) {
	this.K = a;
	this.G = b;
	this.F = c;
	this.A = 0
}
L(B6a, r6a);
B6a.prototype.C = function(a, b, c) {
	for (var d = this.K + b, e = this.F, g = this.A, h = g, n = e.length; h < n && this.G + e[h].K < d;) h++;
	d = 0 == g && h == n ? e : e.slice(g, h);
	this.A = h;
	return new A6a(a, b, c, d)
};

function C6a(a, b, c, d, e, g, h) {
	this.paddingTop = a;
	this.A = b;
	this.kta = c;
	this.lta = d;
	this.S9 = e;
	this.TX = g;
	this.wc = h
};

function D6a(a, b, c, d) {
	this.A = kAa;
	this.Ba = a;
	this.height = b;
	this.na = d;
	this.ea = c
}
L(D6a, xy);
D6a.prototype.F = D(l);
D6a.prototype.C = D(l);

function E6a(a) {
	this.ra = a;
	this.A = [];
	this.C = [];
	this.F = []
}
E6a.prototype.reset = function() {
	this.A = [];
	this.C = [];
	this.F = []
};

function F6a(a, b) {
	var c = a.F,
		d = a.F.length,
		e = a.C,
		g = a.C.length,
		h = b.A();
	if (0 == d) return a.ra.log(Error(SOa)), m;
	var n = c[d - 1].A;
	if (1 == d && 0 == g) return {
		x: c[0].C,
		mR: m
	};
	var p = b.C || h > n;
	p && 0 < h && h--;
	for (var h = Math.min(h, n), t, u, n = 0; n < d; n++) if (t = c[n], h <= t.A) {
		u = c[n + 1];
		break
	}
	c = t.C;
	g = u ? u.F : g;
	for (u = t.F; u < g; u++) {
		t = e[u];
		if (h >= t.C && h <= t.A) {
			if (h == t.A && p && !t.F) return {
				x: c + t.width,
				mR: t
			};
			if (t.view) return {
				x: c,
				mR: t
			};
			p && h++;
			t.F ? (e = h, h = t.A, c -= 1) : (e = t.C, h -= 1);
			for (; e <= h; e++) c += a.A[e].width;
			return {
				x: c,
				mR: t
			}
		}
		c += t.width
	}
	a.ra.log(Error(upa));
	return m
}
function G6a(a, b, c, d, e) {
	var g = a.length;
	if (0 < g && (g = a[g - 1], b == g.left + g.width)) {
		g.width += c;
		return
	}
	a.push(new PXa(b, d, c, e))
}
function H6a(a, b, c, d, e, g, h, n, p) {
	return d > c || e < b ? l : d >= b && e <= c ? (G6a(a, g, h, n, p), l) : q
}
function I6a(a, b, c, d, e) {
	this.C = a;
	this.A = b;
	this.width = c;
	this.F = d;
	this.view = e || m
}
function J6a(a, b, c, d, e, g) {
	this.A = b - a;
	this.F = c;
	this.C = d;
	this.ow = e;
	this.G = g
};

function K6a(a, b, c, d, e, g, h, n, p, t, u) {
	this.A = a;
	this.C = b;
	this.G = c;
	this.W = d;
	this.height = e;
	this.L = g;
	this.Y = h;
	this.K = n;
	this.Ym = p;
	this.F = t;
	this.rw = u
};
var L6a = RegExp("[\u0626\u0628\u062a-\u062e\u0633-\u0647\u0649-\u064a\u066e-\u066f\u0678-\u0687\u069a-\u06bf\u06c1-\u06c2\u06cc\u06ce\u06d0-\u06d1\u06fa-\u06fc\u06ff\u0712-\u0714\u071a-\u071d\u071f-\u0727\u0729\u072b\u072d-\u072e\u074e-\u0758\u075c-\u076a\u076d-\u0770\u0772\u0775-\u0777\u077a-\u077f\u07ca-\u07ea\u07fa\u200d]"),
	M6a = RegExp("[\u0622-\u0625\u0627\u0629\u062f-\u0632\u0648\u0671-\u0673\u0675-\u0677\u0688-\u0699\u06c0\u06c3-\u06cb\u06cd\u06cf\u06d2-\u06d3\u06d5\u06ee-\u06ef\u0710\u0715-\u0719\u071e\u0728\u072a\u072c\u072f\u074d\u0759-\u075b\u076b-\u076c\u0771\u0773-\u0774\u0778-\u0779]"),
	N6a = {};

function UA(a) {
	var b = N6a[a];
	b || (b = L6a.test(a) ? Qb : M6a.test(a) ? Ic : vc, N6a[a] = b);
	return b
};

function O6a(a, b) {
	this.A = b;
	this.C = a
};

function VA(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	this.yb = a;
	this.W = b;
	this.Y = c;
	this.na = (a = d ? d[d.length - 1] : m) ? a.Ym : b;
	this.Aa = a ? a.UD : c;
	this.Ba = d;
	this.F = e;
	this.Ha = g;
	this.ea = h;
	this.Ma = n;
	this.L = p;
	this.K = t;
	this.Ta = u;
	this.C = x;
	this.Na = B;
	this.G = y;
	this.A = 0
}
VA.prototype.qa = C("yb");
VA.prototype.wc = C(tc);
VA.prototype.bd = function() {
	return this.K - this.L + 1
};
VA.prototype.getHeight = C(yc);

function P6a(a, b, c, d, e, g, h, n) {
	this.Ha = a;
	this.A = [r];
	this.Y = [];
	this.G = new vo(0, 0);
	this.na = this.ea = b;
	this.C = [];
	this.Na = n;
	this.Aa = this.K = d;
	this.L = q;
	this.Ba = e;
	this.F = this.W = g;
	this.Ma = h
}
F = P6a.prototype;
F.Wz = 0;
F.Nd = 0;
F.GI = 0;
F.uX = q;
F.xX = m;
F.vX = q;
F.wX = q;
F.reset = function(a, b, c, d, e) {
	this.A = [r];
	this.Y = [];
	this.G = new vo(0, 0);
	this.na = this.ea = a;
	this.C = [];
	this.Aa = this.K = b;
	this.L = q;
	this.Ba = c;
	this.F = this.W = d;
	this.Ma = e;
	this.GI = this.Nd = this.Wz = 0;
	this.uX = q;
	this.xX = m;
	this.wX = this.vX = q
};

function Q6a(a) {
	var b = a.K ? a.K.Xb() : m,
		c = a.A.concat(),
		d = 0 == a.Y.length ? [] : a.Y.concat(),
		b = new VA(c, a.ea, b, d, a.xX, q, a.C, a.Ma, a.W - a.Ba, a.F - a.Ba, a.L, a.vX, 0 < a.GI, a.wX);
	if (a.uX) {
		a = a.Ha;
		var d = a.K,
			c = I4a(d, b),
			e = K4a(d, b.W, b.Y),
			g = J4a(d, b.na, b.Aa),
			d = R6a.ya(),
			h = b.wc() ? Fda : Gda,
			e = d.concat(h, e),
			g = d.concat(g, yda),
			g = d.concat(c, g);
		a = S6a(a, d.concat(e, g)).La()
	} else a = new vo(a.Wz, a.Nd);
	b.A = a.width;
	b.Nd = a.height;
	return b
}

function T6a(a, b, c, d) {
	if (!a.na.ob(b) || a.Aa != c) {
		var e = c ? c.Xb() : m;
		a.Y.push({
			Ym: b,
			UD: e
		});
		a.A.push(d);
		a.na = b;
		a.Aa = c
	} else a.A[a.A.length - 1] += d
}
function U6a(a, b, c) {
	var d = a.C[a.C.length - 1];
	d && d.C == b ? d.A += c : a.C.push(new O6a(b, c))
};

function V6a(a, b, c, d, e) {
	this.G = a;
	this.Q = b;
	this.F = c;
	this.A = d;
	this.C = e;
	this.sc = new Zu
}
F = V6a.prototype;
F.gm = 0;
F.ZD = 0;
F.eJ = 0;
F.PD = m;
F.LD = m;
F.TO = 0;
F.Ew = 0;
F.EX = m;
F.DX = m;
F.SO = q;
F.RI = 0;
F.ZO = m;

function W6a(a, b, c, d, e, g, h, n, p, t) {
	var u = a.Q.ba().qa(),
		x = Math.max(d.end - d.start, 0),
		y = a.A.C.length,
		B = b,
		E = u.ub() - 1,
		H = 0 <= a.C.A,
		J = !! t;
	a.gm = 0;
	a.ZD = 0;
	a.eJ = 0;
	a.LD = m;
	a.TO = 0;
	a.Ew = 0;
	a.SO = q;
	a.RI = 0;
	a.sc = new Zu;
	t = a.Q.ba();
	a.EX = t.pd(Wk);
	a.DX = t.pd(Qi);
	X6a(a, b, l);
	a.ZD = Math.max(h, a.F.getHeight(a.sc));
	a.eJ = a.ZD;
	var $ = x;
	h = [];
	for (var V = b, ca = t = m;
	(0 <= $ || J || Ts(u, V) == ea || Ys(u, V)) && B <= E && V <= E;) {
		g = g && 0 == a.gm;
		t = Y6a(a, b, V, E, c, $, x, H, e, d.start, g, n, J);
		if (!t) break;
		h.push(t);
		B = c + t.K;
		if (t.C) break;
		V = t.A;
		a.gm += V;
		a.ZD = Math.max(a.ZD, t.getHeight());
		t.F || (a.eJ = Math.max(a.eJ, t.getHeight()));
		ca = t;
		J = q;
		$ -= V;
		V = B + 1;
		if (t.Na && !Ys(u, V) && Ts(u, V) != ea) break
	}
	g = n = 0;
	ca && ca.G && (a.gm -= ca.A, n = ca.bd(), g = ca.A);
	if (a.LD !== m && 0 != a.LD) {
		a: switch (u = a.TO - d.start, E = a.gm, a.LD) {
			case 2:
				u = Math.max(u - E, 0);
				break a;
			case 1:
				u = to(u - E / 2, 0, x - E);
				break a
		}
		a.Ew = u;
		a.gm += a.Ew;
		a.A.A[b - c] = new vo(a.Ew, 0);
		b -= c;
		a.A.C.splice(y, 0, new I6a(b, b, a.Ew, q, m))
	}
	b = !(!t || !t.C);
	t = a.RI - n;
	if (!a.SO && p && !b) {
		n = x - a.gm;
		p = Math.floor(n / t);
		t = Math.floor(n) % t;
		for (n = 0; n < h.length - 1; n++) if (H = h[n], H.G) {
			J = H.L;
			u = H.A;
			ca = H.bd();
			for (E = 0; E < ca; E++) $ = a.A.A[J + E].width, V = p + (0 < t-- ? 1 : 0), u += V, $ += V, $ = new vo($, H.getHeight()), a.A.A[c + J + E - c] = $;
			H.Ha = l;
			H.A = u;
			H = H.ea;
			J = H.length - 1;
			if (0 <= J) {
				E = H[J];
				E.A += u - E.A;
				for (E = 0; E < J; E++) u = H[E], u.A += -H[E].A
			}
		}
		a.gm = x
	}
	d = d ? d.start : 0;
	y = new J6a(c, b ? B - 1 : B, y, d, d + a.gm, g);
	0 <= a.C.A ? (b = a.C, d = h.length, 0 == d ? c = 0 <= b.A ? [] : m : (t = h[d - 1], x = c + h[0].L - b.A, g = c + t.K + 1 - b.A, 0 <= x && x <= g && g <= b.F.ub() ? (d = new B6a(b.A, c, h), p = b.F, c = t.G ? c + t.L - b.A : g, b = p.ea ? 0 : p.K, p = new p6a(p, d), p.F = g != m && g < p.A.ub() ? g : p.A.ub(), p.C = p.A.Y, c < p.C && (p.C = c), p.G = [],
	s6a(p, x || 0, b), c = p.G, c = d.A == d.F.length ? c : m) : c = m)) : c = m;
	if (c) for (d = 0; d < c.length; d++) x = c[d], g = x.C, g.length && Z6a(a, g, x.wc() != e);
	else Z6a(a, h, q);
	e = B;
	B = a.gm;
	d = a.ZD;
	x = a.eJ;
	g = a.SO;
	p = a.Ew;
	a = a.sc;
	b = [];
	for (t = 0; t < h.length; t++) n = h[t], n.F && b.push(n.F);
	return new K6a(e, h, c, B, d, x, g, p, a, b, y)
}
function Z6a(a, b, c) {
	a = a.A.C;
	for (var d = a.length, e = b.length, g = 0; g < e; g++) {
		var h = b[g];
		if (h.C) break;
		a[d + (c ? e - 1 - g : g)] = new I6a(h.L, h.K, h.A, c, h.F)
	}
}

function Y6a(a, b, c, d, e, g, h, n, p, t, u, x, y) {
	var B = a.Q,
		E = B.ba().qa(),
		H = a.G,
		J = 0,
		$ = n ? x6a(a.C, c) : NaN;
	a.ZO ? a.ZO.reset(a.sc, a.PD, e, c, n ? !($ & 1) : p) : a.ZO = new P6a(a.F, a.sc, 0, a.PD, e, c, n ? !($ & 1) : p, l);
	for (var V = a.ZO, ca = Ts(E, c), ia = g0a(H, c, B), ua, yb = a.PD, Bb = a.sc, Wb = a.RI, Qd = c, zd = l, Bj, Cj, Dj = 0; c <= d; c += J) {
		J = 0;
		if (ca == da || ca == ea) return V.vX = l, Q6a(V);
		var cm = ca == ba;
		if (cm && c > b) return a.SO = l, m;
		X6a(a, c);
		if (ua = ia) {
			if (0 == Dj) {
				var Wh = a,
					xl = ua,
					Fk = c,
					Xh = V;
				xl.vb(Fk, h, x);
				for (var Ji = xl.bd(), fk = k, Yh = k, ep = Fk + Ji; ep >= Fk && !(fk || (fk = Wh.EX[ep]), Yh || (Yh = Wh.DX[ep]), fk && Yh); ep--);
				var fk = fk ? Wh.Q.na.UI(fk) : Xh.ea,
					Zr = Yh ? $6a(Yh) : Xh.K,
					Ej = Xh,
					$m = xl,
					fp = fk,
					ao = Zr,
					gp = $m.Df(),
					$r = Ej,
					an = gp;
				$r.G = an;
				$r.Wz = an.width;
				$r.Nd = an.height;
				if (Ej.Na) {
					var as = K2a(fp.Um());
					U6a(Ej, as, gp.width)
				}
				T6a(Ej, fp, ao, r);
				Ej.F = Ej.W + $m.bd() - 1;
				Ej.xX = $m;
				J = Ji
			}
		} else if (cm) {
			if (0 == Dj) {
				var bn;
				for (var Yv = e, bo = t, Gk = m, Zv = a.Q.ba(), dm = Zv.Ra(zj, b), ae = Gx(dm), hp = 0; hp < ae.length; hp++) {
					var bs = ae[hp],
						zf = Vu(bs);
					if (zf > bo && (!Gk || zf < Vu(Gk))) Gk = bs
				}
				var Fj = Ws(Zv.qa(), Yv),
					Af = dm.Qz(),
					pi = dm.vw();
				if (Fj && (Af < pi && pi > bo) && (!Gk || Vu(Gk) > pi)) bn = {
					offset: dm.vw(),
					O9: 0
				};
				else {
					var cs = Gk;
					bn = cs ? {
						offset: Vu(cs),
						O9: cs.qk()
					} : m
				}
				var qi = a,
					Pt = bn,
					wD = t,
					Vy = V;
				qi.LD = Pt ? Pt.O9 : 0;
				qi.TO = Pt ? Pt.offset : FYa(wD);
				qi.Ew = 0 == qi.LD ? qi.TO - wD : 0;
				var ip = Vy,
					Qt = qi.Ew;
				ip.A[0] = ba;
				var yl = ip,
					xD = new vo(Qt, 0);
				yl.G = xD;
				yl.Wz = xD.width;
				yl.Nd = xD.height;
				ip.L = l;
				ip.F = ip.W;
				J = 1
			}
		} else {
			V.wX = ca == fa;
			var Zh = V,
				kS = ca,
				lS = E,
				$v = c,
				Wy = a.sc,
				Xy = a.PD,
				aw = n;
			if (Zh.L) J = 1;
			else {
				Zh.uX = l;
				var co = $v,
					cn = kS,
					eo = k;
				if (aw) {
					for (var Rt, yD = lS, jp = k, bw = yD.ub(), fo = $v + 1; fo < bw; fo++) {
						var zD = Ts(yD, fo);
						if (17 == v6a(TA.ya(),
						zD)) jp || (jp = new Tq), jp.append(zD);
						else break
					}
					if (Rt = jp ? jp.toString() : r) co += Rt.length, cn += Rt;
					var Mq = v6a(TA.ya(), kS);
					if (13 == Mq) {
						var ri = cn,
							em = lS,
							Gj = co,
							Yy = Wy,
							Nq = Zh.Ha,
							dn = r,
							ds = r,
							AD = Ts(em, $v),
							fm = k;
						c: {
							for (var cw = $v - 1; 1 <= cw; --cw) {
								var St = Ts(em, cw);
								if (17 != v6a(TA.ya(), St)) {
									fm = St;
									break c
								}
							}
							fm = m
						}
						if (UA(AD) == Qb) {
							if (fm && UA(fm) == Qb && (dn = zQa), Gj + 1 < em.ub()) {
								var mS = Ts(em, Gj + 1);
								if (UA(mS) == Qb || UA(mS) == Ic) ds = zQa
							}
						} else UA(AD) == Ic && fm && UA(fm) == Qb && (dn = zQa);
						if (dn != r || ds != r) var oJ = ox(Nq, Yy, dn + ri + ds),
							s3 = ox(Nq, Yy, dn + ds),
							eo = new vo(oJ.width - s3.width, oJ.height);
						else eo = m
					} else 1 << Mq & 120832 && (eo = new vo(0, 0))
				}
				eo || (eo = ox(Zh.Ha, Wy, cn));
				T6a(Zh, Wy, Xy, cn);
				if (Zh.Na) {
					var Zy = K2a(Wy.Um());
					U6a(Zh, Zy, eo.width)
				}
				Zh.GI = cn == s || cn == fa ? Zh.GI + eo.width : 0;
				Zh.Wz += eo.width;
				Zh.Nd = Math.max(Zh.Nd, eo.height);
				Zh.G = eo;
				Zh.F = co;
				J = co - $v + 1
			}
		}
		Dj++;
		if (V.Wz - V.GI > g) {
			if (y) {
				if (1 < Dj) {
					zd = q;
					Cj = Bj;
					break
				}
				a7a(a, V, e, c, J);
				return Q6a(V)
			}
			zd && (zd = q, u && 1 < Dj && (Cj = Bj))
		}(ca == s || ca == fa) && a.RI++;
		a7a(a, V, e, c, J);
		var Oq = c + J,
			$y = Ts(E, Oq),
			ia = g0a(H, Oq, B);
		if (c == d || (ua || ia) || ca == ba || ca == fa || 0 <= $ && $ != x6a(a.C, Oq) || aYa.test(ca) && !ZXa.test(ca) && !$Xa.test($y) || b7a(ca) != b7a($y)) break;
		ca = $y;
		Bj = c
	}
	var dw = Q6a(V);
	return !zd && !(dw.A <= g) ? Cj != m ? (a.PD = yb, a.sc = Bb, a.RI = Wb, Y6a(a, b, Qd, Cj, e, g, h, n, p, t, u, x, y)) : m : dw
}
function a7a(a, b, c, d, e) {
	b = b.G;
	if (1 == e) a.A.A[d - c] = b;
	else {
		var g = b.width,
			h = g % e,
			g = (g - h) / e;
		for (e = d + e; d < e; ++d) {
			var n = new vo(g + h, b.height),
				h = 0;
			a.A.A[d - c] = n
		}
	}
}
function b7a(a) {
	switch (a) {
		case da:
			return 1;
		case ea:
			return 2;
		case fa:
		case s:
			return 3;
		case ba:
			return 4;
		default:
			return 5
	}
}

function X6a(a, b, c) {
	if (c) {
		var d = a.Q.ba();
		c = d.Ra(Wk, b);
		b = d.Ra(Qi, b)
	} else c = a.EX[b], b = a.DX[b];
	c && (a.sc = a.Q.na.UI(c));
	b && (a.PD = $6a(b))
}
function $6a(a) {
	return (a = a.Ig) && 0 == a.xa() ? a : m
};

function WA(a, b, c) {
	this.Q = a;
	this.A = new E6a(a.ra);
	this.K = new GA(this, this.Q.F, this.Q.Na);
	this.L = new V6a(l0a, a, c, this.A, b);
	this.F = iz(a.G, bf);
	this.C = new Dy
}
L(WA, Py);
F = WA.prototype;
F.Yk = 0;
F.qA = 0;
F.Nd = 0;
F.kK = 0;
F.Laa = 0;
F.nZ = 0;
F.il = l;
F.fQ = q;
F.fu = 0;
F.$Y = l;
F.Pq = m;
F.Ge = 0;
F.getHeight = function(a) {
	return 0 != a ? (this.Q.ra.log(Error(wfa + a)), 0) : this.Nd
};
F.bd = C("nZ");
F.dh = D(1);
F.reset = function() {
	this.Ge = 0;
	c7a(this)
};

function c7a(a) {
	a.Yk = a.Nd = a.qA = 0;
	a.A.reset();
	O(a.Pq);
	a.Pq = m
}
F.vj = function(a, b, c, d, e, g) {
	var h = e.offset,
		n = e.A;
	0 != c && this.Q.ra.log(Error(Afa + c));
	c = new A1a;
	var p = this.C;
	p.A = n.La();
	p.C = m;
	var p = new Fp(h.x, h.y, d.x, this.getHeight(0)),
		t = G1a(this.C, p);
	if (this.Laa == d.x && 0 == t.length) {
		var u = Sy(a),
			x = b + this.bd();
		if (!(t = !u)) {
			for (var u = t = u.index, y = this.Q.ba().qa(), B = Ts(y, x), E; x < u && !(E = B, B = Ts(y, x + 1), E == ba || aYa.test(E) && !ZXa.test(E) && !$Xa.test(B) || b7a(E) != b7a(B)); ++x);
			t = t > x + 1
		}
		if (t) return d7a(this, c, b, d, g), c
	}
	this.Laa = d.x;
	c.A = 0 == this.bd() ? 2 : 1;
	t = d.x;
	y = h.y;
	x = h1a(n);
	E = e.pD;
	e = qu.ya();
	n = tu(e, new Ou(oMa, mJa));
	this.fu = t;
	u = this.Q.ba();
	h = XA(this, zj, b);
	this.il = h.wc();
	for (var B = u.qa(), H = this.Ge = (u = Ws(B, b)) ? h.Qz() : h.vw(), J = G0a(h), t = Math.max(0, t - H - J), $ = this.Q, V = this.il, ca = k0a(Zw, b, $.ba()), ia = [], ua = H, yb = 0, Bb; Bb = ca[yb]; yb++) if (Bb = Bb.C(b, $, ua, V)) ia.push(Bb), ua += Bb.$s();
	t = e7a(this, b, H, J, t, y, 0, x, E, ia);
	y = this.bd();
	this.nZ = t.A - b + 1;
	this.fQ = Ys(B, t.A) || Ts(B, t.A) == ea;
	this.$Y = 1 == this.nZ && this.fQ;
	x = 0;
	if (Ys(this.Q.ba().qa(), t.A) && (!f7a(this, b) || !f7a(this, t.A + 1))) x = Ru(Pu.ya(), h.Jq);
	B = 0;
	if (u && (!f7a(this,
	b) || !f7a(this, b - 1))) u = 0, 1 < b && (u = XA(this, zj, b - 1), u = Ru(Pu.ya(), u.Jq)), B = Math.max(Ru(Pu.ya(), h.Bt) - u, 0);
	u = this.kK = Math.max(t.paddingTop, B);
	h = this.qA * Math.max(h.At - 1, 0);
	this.Nd = Math.round(this.Yk + h + x + u);
	this.Pq = new D6a(t, this.Nd, this.Yk, this.kK);
	uu(e, n);
	e = this.bd() - y;
	a.xj(b + this.bd() - 1, e);
	e = Pn(this.Q.F.A);
	for (n = 0; n < e.length; n++) h = b + this.bd() - 1, YA(a.A, e[n], b, h);
	d7a(this, c, b, d, g);
	p.height = this.getHeight(0);
	a = this.C;
	a.G = H1a(a, p);
	a.F.C.length = 0;
	return c
};

function d7a(a, b, c, d, e) {
	a.bd();
	b.Gf = a.getHeight(0) > d.y && !e;
	d = a.Q.ba().qa();
	1 == a.bd() ? b.G = aWa(d, c + a.bd() - 1) : b.G = aWa(d, c + a.bd() - 1) || aWa(d, c + a.bd() - 2)
}
F.hm = function(a, b, c) {
	var d = new xs(b, b + this.bd() - 1);
	Q5a(this.K, a, b, c, this.bd(), bf);
	a.xj(d)
};

function XA(a, b, c) {
	a = a.Q.ba();
	0 < c && (Ys(a.qa(), c) && b != zj && b != Ri) && c--;
	return a.Ra(b, c)
}
function f7a(a, b) {
	return Av(XA(a, Ri, b)) != m
}
F.BZ = function(a, b, c, d) {
	var e = this.A;
	a = d ? this.kK : 0;
	d = d ? this.Yk : this.Nd;
	var g = c.start - b,
		h = c.end - b,
		n = e.F,
		p = e.C,
		t = n.length;
	if (0 == t) b = [new PXa(0, 0, 0, 0)];
	else {
		for (var u = [], x = 0, y, B = 0; B < t; B++, x = y) {
			var E = n[B],
				H = E.C;
			y = E.A;
			if (!H6a(u, g, h, x, y, H, E.ow + E.G - H, a, d)) for (var x = B == t - 1 ? p.length : n[B + 1].F, J = E.F; J < x; J++, H += E) {
				var $ = p[J],
					E = $.width;
				if (!H6a(u, g, h, $.C, $.A, H, E, a, d)) if ($.view) {
					for (var V = b + $.C, ca = $.A - $.C + 1, ia = Math.max(c.start - V, 0), V = Math.min(c.end - V, ca), V = $.view.Eca(new xs(ia, V)), ia = 0; ia < V.length; ++ia) $ = V[ia], $.left += H, $.top += 0;
					$ = u;
					ia = V;
					V = V = k;
					if (0 < ia.length) {
						V = ia[0];
						G6a($, V.left, V.width, V.top, V.getHeight());
						for (V = 1; V < ia.length; V++) $.push(ia[V])
					}
				} else {
					ca = V = 0;
					for (ia = $.C; ia <= $.A; ia++) {
						var ua = e.A[ia].width;
						ia < g || ia > h ? ia > h == $.F && (V += ua) : ca += ua
					}
					G6a(u, H + V, ca, a, d)
				}
			}
		}
		b = n[t - 1];
		h > b.A && G6a(u, b.ow + b.G, 7, a, d);
		b = u
	}
	if (!this.il) {
		b.reverse();
		for (c = b.length - 1; 0 <= c; c--) a = b[c], a.left = this.fu - a.left - a.width
	}
	return b
};
F.u3 = C($b);

function e7a(a, b, c, d, e, g, h, n, p, t) {
	var u = a.Q.ba(),
		x = [],
		y = new xs(c, c + e);
	c7a(a);
	for (var B = 0, E = 0; E < t.length; E++) {
		var H = t[E],
			B = Math.max(B, H.getHeight());
		y.start += H.$s()
	}
	E = g7a(a, b, b, y, x, l, B, p);
	E.length || (H = W6a(a.L, b, b, y, a.il, l, B, p, q, l), 0 < H.F.length && sn(x, H.F), a.Yk = Math.max(a.Yk, H.height), a.qA = Math.max(a.qA, H.L), E.push(H));
	var H = E[E.length - 1].A,
		y = new xs(c, c + e),
		J = h7a(a, y, g + h, n);
	if (J) {
		x.length = 0;
		E.length = 0;
		c7a(a);
		for (var $ = b, V = J.C, ca = q, ia = 0; ia < V.length; ia++) {
			if (!ca) for (var ua = 0; ua < t.length; ua++) V[ia].start += t[ua].$s();
			ua = g7a(a, $, b, V[ia], x, q, B, p);
			ua.length && (E = E.concat(ua), H = ua[ua.length - 1].A, $ = H + 1, ca = l);
			ua = u.qa();
			if ($ > b && ($ > ua.ub() - 1 || Ys(ua, H))) break
		}
		if (!ca) return x.length = 0, e7a(a, b, c, d, e, g, J.A - g + 1, n, p, t)
	}
	b = XA(a, zj, b);
	a: switch (d = y, y = E[E.length - 1].rw.ow - y.start, b.qk()) {
		case 1:
			y = Math.max(0, (d.end - d.start - y) / 2);
			break a;
		case 2:
			y = Math.max(0, d.end - d.start - y);
			break a;
		default:
			y = 0
	}
	b = E;
	d = a.A.F;
	for (e = 0; e < b.length; e++) g = b[e].rw, g.C += y, g.ow += y, d.push(g);
	return new C6a(h, H, x, c, t, E, a.il)
}

function g7a(a, b, c, d, e, g, h, n) {
	for (var p = XA(a, zj, b), t = [], u = new xs(d.start, d.end), x = a.Q.ba().qa(); !(u.start >= u.end || b >= x.ub());) {
		d = W6a(a.L, b, c, u, a.il, g, h, n, 3 == p.qk());
		a.Yk = Math.max(a.Yk, d.height);
		a.qA = Math.max(a.qA, d.L);
		if (!d.C.length) break;
		0 < d.F.length && sn(e, d.F);
		t.push(d);
		if (!d.Y) break;
		g = q;
		b = d.A + 1;
		u.start = d.rw.ow + d.rw.G
	}
	return t
}
F.Va = function(a) {
	!(0 < a) && this.Pq && (this.F.Uk(this.Pq), O(this.Pq), this.Pq = m)
};
F.Fw = function() {
	return !!this.Pq
};
F.rb = C($b);

function h7a(a, b, c, d) {
	for (var e = c + a.Yk, g = [], h = 0, n; n = d[h]; h++) if (!(n.top + n.height <= c)) {
		if (n.top > e) break;
		g.push(n)
	}
	if (0 == g.length) return m;
	xn(g, function(a, b) {
		return wn(a.left, b.left)
	});
	a.il ? (c = b.start, b = b.end) : (c = a.fu - b.end, b = a.fu - b.start);
	d = [];
	e = Number.MAX_VALUE;
	n = g.length - 1;
	for (h = 0; h <= n; h++) {
		var p, t;
		a.il ? (p = g[h], t = p.left) : (p = g[n - h], t = a.fu - p.left - p.width);
		c < t && d.push(new xs(c, t));
		c = Math.max(t + p.width, c);
		e = Math.min(e, p.top + p.height)
	}
	c < b && d.push(new xs(c, b));
	return new i7a(d, e)
}
F.xk = function(a, b, c, d, e, g) {
	return j7a(this, c, g)
};
F.Gj = jm(130);
F.Wq = function(a) {
	if (0 != a.xa()) return m;
	var b = this.bd();
	return a.A() < (a.C ? b + 1 : b) ? this : m
};
F.Vq = function(a) {
	var b = this.bd(),
		c = 0 == a.xa() && a.C ? b + 1 : b;
	return a.A() >= c ? (this.Q.ra.log(Error(xfa)), m) : new xs(0, b - 1)
};
F.Bn = D(m);

function j7a(a, b, c) {
	b = a.il ? b : a.fu - 1 - b;
	var d = a.A,
		e = d.F,
		g = e[0];
	if (!g) return m;
	if (b < g.C || a.$Y) return a = c && a.fQ && a.$Y && 3.5 <= b, new ws(a ? 1 : 0, a);
	for (var h = 0, n; !(n = e[++h], !(n && g.C == g.ow) && (!n || b < n.C)); g = n);
	for (var e = d.C, d = g.C, h = n ? n.F : e.length, p = g.F; p < h; p++) {
		n = e[p];
		if (d + n.width > b) {
			if (!n.view) {
				a: {
					b = b - d;
					a = a.A;
					c = k;
					if (n.F) {
						g = -1;
						for (c = n.C; c <= n.A; c++) g += a.A[c].width;
						b = g - b
					}
					for (c = n.C; c <= n.A; c++) {
						g = a.A[c].width;
						if (b < g / 2) {
							a = new ws(c);
							break a
						}
						b -= g
					}
					a = new ws(c, l)
				}
				return a
			}
			b -= d;
			a.il || (b = n.width - 1 - b);
			return (a = n.view.WR(b,
			0)) && 0 != a.xa() ? a : new ws(n.C + (a ? a.A() : 0))
		}
		d += n.width
	}
	n = g.A + 1;
	c && (a.fQ && d + 3.5 <= b) && n++;
	return new ws(n, l)
}
function k7a(a, b) {
	return Q && b && a < b ? a : 1.2 * a
}
F.dA = D(0);
F.Eh = function(a, b, c) {
	if (0 != a.xa()) return m;
	var d = F6a(this.A, a.shift(-b));
	if (!d) return m;
	var e = d.mR,
		d = d.x,
		g = this.il != (e ? e.F : q);
	if (e && e.view && (b = e.view.L_(a, b + e.C, c))) return this.il || (d += e.width - 1), b.A.x = Math.floor((this.il ? d : this.fu - 1 - d) + b.A.x), b.A.y += this.kK, c && b.height == m && (b.height = Math.min(k7a(TYa(c), nv(c)), this.Yk)), b.wc == m && (b.wc = g), b;
	e = this.kK;
	b = this.Q.ba();
	var h = c || ZA(b, Wk, a),
		n = nv(h);
	a = this.qA;
	b = k7a(n);
	var n = k7a(TYa(h), n),
		p = this.Yk,
		h = h.Cf;
	if (b < p || h == Mk) switch (h) {
		case mj:
		case Ok:
			e += (a < p ? 4 : 0) + p - b - (Q ? a / b : 1.5 * a / b);
			break;
		case Mk:
			e += p - n / 1.2
	}
	c = c ? Math.min(k7a(TYa(c), nv(c)), this.Yk) : m;
	return new c3a(0, c, new uo(Math.floor(this.il ? d : this.fu - 1 - d), e), g)
};
F.Mo = function() {
	return new B1a(0, this.fu, this.Nd, 0, 0)
};
F.MA = function() {
	return this.getHeight(0)
};
F.Aw = function(a) {
	return a >= this.bd() ? (this.Q.ra.log(Error(yfa)), -1) : 0
};
F.O = function() {
	WA.M.O.call(this);
	delete this.A;
	delete this.F;
	delete this.L;
	O(this.Pq);
	delete this.Pq;
	O(this.C);
	delete this.C;
	O(this.K);
	delete this.K
};

function i7a(a, b) {
	this.C = a;
	this.A = b
};

function $A(a, b) {
	Qy.call(this, a);
	this.na = b;
	this.ea = new w6a
}
L($A, Qy);
F = $A.prototype;
F.vj = function(a, b, c, d, e, g) {
	Ry(this, c);
	var h = this.ea,
		n = this.Q.ba();
	if (n.K.C) {
		var p = n.qa(),
			t = Rs(p, b),
			u = Us(p, b) + 1,
			n = n.Ra(zj, t).wc();
		h.A = NaN;
		if (u >= t) {
			u = new y6a(p, t, u - t);
			h.G = n ? 0 : 1;
			p = h.F;
			n = h.G;
			if (0 > n || 61 < n) n = 126 | n & 1;
			p.C = u.A;
			p.K = n;
			p.L = 0;
			p.W = 1;
			p.G = [];
			p.F = [];
			p.na = [];
			p.ea = 126 == (n & 126) ? n : 0;
			if (p.C) {
				var n = 0,
					x, y = p.A = 0,
					B = 126 == (p.K & 126),
					E = 0,
					H, J;
				H = (J = B) ? y = p.K & 1 ? 64 : 0 : 0;
				for (n = 0; n < p.C;) {
					x = v6a(z6a, Ts(u.F, u.C + n));
					p.A |= 1 << x;
					p.G[n++] = x | H;
					if (J) {
						if (0 == x) {
							J = q;
							if (0 != H) {
								H = 0;
								for (x = E; x < n; x++) p.G[x] &= -65
							}
							continue
						}
						if (1 == x || 13 == x) {
							J = q;
							if (0 == H) {
								H = 64;
								for (x = E; x < n; x++) p.G[x] |= 64
							}
							continue
						}
					}
					if (7 == x && n < p.C && (p.W++, J = B)) E = n, H = y
				}
				B && (p.K = RA(p, 0));
				p.A |= g6a[p.K & 1];
				p.Y = p.C;
				p.na[p.W - 1] = p.C;
				u = 0;
				n = RA(p, 0);
				y = 0;
				B = j6a(p);
				if (!(2 != B && 1 == p.W)) if (1 == p.W && !(p.A & 120832)) for (u = 0; u < p.C; ++u) p.F[u] = n;
				else {
					E = n;
					J = 0;
					x = [];
					for (var $ = 0, V = 0, u = p.A = 0; u < p.C; ++u) {
						B = p.G[u] & -65;
						switch (B) {
							case 11:
							case 12:
								H = E + 2 & -130;
								61 >= H ? (x[J++] = E, E = H, 12 == B && (E |= 128)) : 61 == (E & -129) ? ++V : ++$;
								p.A |= 262144;
								break;
							case 14:
							case 15:
								H = (E & -129) + 1 | 1;
								61 >= H ? (x[J++] = E, E = H, 15 == B && (E |= 128)) : ++V;
								p.A |= 262144;
								break;
							case 16:
								0 < V ? --V : 0 < $ && 61 != (E & -129) ? --$ : 0 < J && (--J, E = x[J]);
								p.A |= 262144;
								break;
							case 7:
								V = $ = J = 0;
								n = RA(p, u);
								u + 1 < p.C && (E = RA(p, u + 1), p.na[y++] = u + 1);
								p.A |= 128;
								break;
							case 18:
								p.A |= 262144;
								break;
							default:
								n != E && (n = E, p.A = 0 != (n & 128) ? p.A | i6a[n & 1] | -2147483648 : p.A | h6a[n & 1] | -2147483648), 0 == (n & 128) && (p.A |= 1 << B)
						}
						p.F[u] = n
					}
					0 != (p.A & 516056) && (p.A |= g6a[p.K & 1]);
					B = j6a(p)
				}
				p.L = B;
				switch (p.L) {
					case 0:
						p.Y = 0;
						break;
					case 1:
						p.Y = 0;
						break;
					default:
						if (1 >= p.W && 0 == (p.A & -2147483648)) n6a(p, 0, p.C, RA(p, 0) & 1, RA(p, p.C - 1) & 1);
						else {
							n = 0;
							y = RA(p, 0);
							B = p.F[0];
							H = y < B ? B & 1 : y & 1;
							do {
								u = n;
								y = B;
								for (E = 0 < u && 7 == (p.G[u - 1] & -65) ? RA(p, u) & 1 : H; ++n < p.C && p.F[n] == y;);
								B = n < p.C ? p.F[n] : RA(p, p.C - 1);
								H = (y & -129) < (B & -129) ? B & 1 : y & 1;
								if (0 == (y & 128)) n6a(p, u, n, E, H);
								else {
									do p.F[u++] &= -129;
									while (u < n)
								}
							} while (n < p.C)
						}
						if (0 != (p.A & 383872)) for (u = p.Y; 0 < u;) {
							for (; 0 < u;) {
								n = 1 << (p.G[--u] & -65);
								if (!(n & 383872)) break;
								p.F[u] = RA(p, u)
							}
							for (; 0 < u;) if (n = 1 << (p.G[--u] & -65), 0 != (n & 382976)) p.F[u] = p.F[u + 1];
							else if (0 != (n & 384)) {
								p.F[u] = RA(p, u);
								break
							}
						}
				}
			} else 126 == (n & 126) && (p.K &= 1), p.K & 1 ? (p.A = 2, p.L = 1) : (p.A = 1, p.L = 0), p.W = 0;
			h.A = t
		}
	} else h.A = NaN;
	return $A.M.vj.call(this, a, b, c, d, e, g)
};
F.caa = D(l);
F.TZ = function(a, b) {
	var c = b + this.bd(),
		d = this.ap(b, a.index - 1);
	return 0 == this.C.length || a.index == c && !d
};
F.Ly = function() {
	return new WA(this.Q, this.ea, this.na)
};
F.ap = function(a, b) {
	return Ys(this.Q.ba().qa(), b)
};
F.Gj = jm(129);
F.lx = function() {
	return iz(this.Q.G, tBa)
};

function aB(a, b) {
	$A.call(this, a, b);
	this.L = []
}
L(aB, $A);
aB.prototype.vj = function(a, b, c, d, e, g) {
	Ry(this, c);
	var h = e.offset,
		n = e.A,
		p = [],
		t = [],
		u = this.Q.ba().Ie(Jj, Us(this.Q.ba().qa(), b)),
		x = u.concat();
	n.G = x;
	for (x = 0; x < u.length; x++) {
		var y, B = u[x];
		y = c;
		for (var E = h, H = this.Q.ba().Fb(B), B = this.Q.W.A[B].Df(), E = new Fp(E.x + Ru(Pu.ya(), H.K), E.y + Ru(Pu.ya(), H.L), B.width, B.height), H = 0; H < y; H++) E.top -= this.getHeight(H);
		if (y = 0 <= E.top || 0 == y ? E : m) n.add(u[x], y), t.push(new e6a(this.Q.W.A[u[x]], y.left, y.top - h.y)), p.push(u[x])
	}
	if (this.L[c]) for (x = 0; x < this.L[c].length; x++) h = this.L[c][x],
	hn(p, h) || n.remove(h);
	this.L[c] = p;
	a = aB.M.vj.call(this, a, b, c, d, e, g);
	for (x = 0; x < t.length; x++) b = t[x], (b.K < this.getHeight(c) || !a.yj) && cz(this, c, b);
	a.yj || (this.L.length = c + 1);
	return a
};
aB.prototype.Eh = function(a, b, c) {
	if (1 == a.xa()) {
		var d;
		a: {
			d = a.aa();
			for (var e = this.L.length - 1; 0 <= e; e--) if (hn(this.L[e], d)) {
				d = e;
				break a
			}
			d = -1
		}
		if (-1 != d) return a = this.Q.W.A[a.aa()],
		new c3a(d, m, new uo(rw(a), sw(a)), l)
	}
	return aB.M.Eh.call(this, a, b, c)
};

function l7a(a) {
	this.C = a
}
l7a.prototype.A = function(a) {
	return new aB(a, this.C)
};
l7a.prototype.Ye = function(a, b, c) {
	return Us(c.qa(), a) <= b
};

function bB() {}
L(bB, ax);
bB.prototype.OT = function(a, b) {
	b.registerDefault(new l7a(a.ea))
};
bB.prototype.$n = function(a, b) {
	var c = a.ma();
	pz(b, tBa, new d6a(c))
};
bB.prototype.Se = function(a, b) {
	a.gb(cBa, Oca, 131, Pha, k, k, 2, q, $e, k, k, k, jla, GBa);
	a.gb(dBa, Cca, 133, Dca, k, k, 1.5, q, $e, k, k, k, ila, iJa);
	a.gb(eBa, Aca, 134, Bca, k, k, 1.15, q, $e, k, k, k, hla, iJa);
	a.gb(fBa, zca, 135, qpa, k, k, 1, q, $e, k, k, k, gla, zNa);
	a.gb(af, fla, 132, fla, Fxa, k, k, k, k, k, l, K0a);
	Er(a, $e);
	a.gb(pf, Tna, 159, Tna, k, k, k, k, k, k, k, k, k, iJa);
	a.gb(of, Sna, 158, Sna, k, k, k, k, k, k, k, k, k, iJa);
	Ix(a, hBa, xo ? Rga : Eea, 138);
	Ix(a, iBa, xo ? bha : Fea, 139);
	a.gb(mf, Uja, 154, Uja, Bxa, k, k, k, k, k, k, k, k, lOa);
	a.gb(nf, vha, 157, vha, Ixa, k, k, k, k, k, k, k, k, Nua);
	a.gb(sBa,
	ona, 156, Noa, k, k, k, k, k, k, k, I0a);
	a.gb(rBa, mna, 155, Loa, k, k, k, k, k, k, k, J0a);
	a.gb(qf, pna, 160);
	a.gb(gf, Kfa, 149, Lfa, qxa, Sga, 1, q, ff, k, k, k, lea, qsa);
	a.gb(hf, Tka, 150, Uka, rxa, Wga, 3, q, ff, k, k, k, mea, rsa);
	a.gb(jf, pc, 151, cla, sxa, Yga, 0, q, ff, k, k, k, nea, ssa);
	a.gb(lf, Jc, 153, moa, txa, $ga, 2, q, ff, k, k, k, oea, tsa);
	a.gb(kf, kea, 152);
	Er(a, ff);
	b.Hx(ff, L0a).Hx($e, N0a)
};

function cB(a, b, c, d) {
	Ux.call(this, b);
	this.ra = a;
	this.K = new O4a(a, c, d);
	this.F = c
}
L(cB, Ux);
cB.prototype.C = m;
cB.prototype.A = m;
cB.prototype.Uk = function(a) {
	if (a.xa() == kAa) {
		var b = new Tq,
			c = new Tq,
			d = a.Ba;
		if (0 >= d.TX.length) this.ra.log(Error(Dna));
		else {
			var e = a.ea,
				g = d.TX,
				h = g[0],
				n = d.S9;
			if (!(0 >= n.length)) {
				for (var p = 0, t; t = n[p]; p++) {
					var u = t.rb();
					b.append(xb, u.C ? u.C : u.C = Pm(ub, lg, s, eHa, Raa, u.A(t), ta, u.G(t), rb), rb);
					c.append(u.F ? u.F : u.F = Pm(ub, lg, Taa, t.$s(), VLa))
				}
				if (!(0 < h.C.length) || h.C[0].C) h = h.Ym, n = RYa(m, pv()), n.ts_ff = h.ld(), n.ts_un = q, n.ts_st = q, h = rz(tz.ya(), h, 0, n), b.append(wb, h, Uaa)
			}
			for (h = 0; h < g.length; h++) {
				var n = this.K,
					p = g[h],
					x = d.wc;
				t = b;
				var u = c,
					y = e,
					B = h == g.length - 1;
				if (0 < p.C.length && !p.C[0].C) {
					var E = new Tq,
						H = new Tq;
					if (p.G) {
						var J = p.C,
							$ = p.G;
						if ($) for (var J = q, V = $.length, ca = 0; ca < V; ca++) {
							var ia = $[ca],
								ua = ia.C;
							if (ua.length) {
								var ia = ia.wc(),
									yb = ia != x;
								yb && (J && (E.append(x ? gba : lba), n.A && H.append(x ? gba : lba)), E.append(ia ? Fda : Gda), n.A && H.append(ia ? Fda : Gda));
								var J = yb,
									Bb = ca == V - 1 && !yb;
								P4a(n, ua, E, H, Bb, ia, Bb && B);
								yb && (E.append(yda), n.A && H.append(yda))
							}
						} else n.ra.log(Error(Nqa)), P4a(n, J, E, H, l, x, B)
					} else P4a(n, p.C, E, H, l, x, B);
					x = !! p.G;
					t.append(ub, lg, s, eHa,
					Taa, Math.ceil(p.W - p.K) + Uj, x ? DPa : ta, E.toString(), rb);
					n.A && 0 < H.ub() && u.append(ub, lg, Raa, x ? CPa : r, aEa, y, aMa, H.toString(), rb)
				}
			}
			g = a.height;
			a = a.na;
			e = d.wc;
			this.N().style.height = g + Sj;
			g = this.N();
			g.style.direction = e ? Xi : hk;
			g.style.textAlign = e ? Pi : dk;
			Q && (this.ma().Ud(this.C), this.A && this.ma().Ud(this.A));
			this.C.innerHTML = b.toString();
			this.F && (!this.A && 0 < c.ub() && (b = this.ma(), this.A = b.ha(Rb, cHa), b.Nz(this.A, this.C)), this.A && (this.A.innerHTML = c.toString()));
			c = d.kta;
			for (b = 0; b < c.length; b++) g = c[b], g.N() || g.ha(), h = this.ma(),
			n = h.N(Pm(vm(g), bsa)), h.NI(g.N(), n), this.bb() && !g.bb() && g.za();
			c = d.TX;
			b = d.S9;
			d = d.lta;
			if (this.C) {
				m7a(this.C, JJa, d, e);
				this.A && m7a(this.A, JJa, d, e);
				n = d;
				d = this.C.childNodes;
				g = b.length;
				if (0 < g) {
					n = c[0].rw.C - n;
					for (h = 0; h < g; h++) n -= b[h].$s();
					n7a(this, d[0], n, e, 0);
					n = c[0].rw.C
				}
				for (h = 0; h < c.length; h++) {
					b = d[h + g];
					if (!b) break;
					n7a(this, b, c[h].rw.C - n + c[h].K, e, g + h);
					n = c[h].rw.ow
				}
			} else this.ra.log(Error(hpa));
			this.C.style.paddingTop = a + Sj;
			this.A && (this.A.style.paddingTop = a + Sj)
		}
	}
};
cB.prototype.ha = function() {
	var a = this.ma();
	this.C = a.ha(Rb, dHa);
	this.Sb(a.ha(Rb, bHa, this.C))
};

function n7a(a, b, c, d, e) {
	c = Math.floor(c);
	m7a(b, yj, c, d);
	a.A && (a = a.A.childNodes[e]) && m7a(a, yj, c, d)
}
function m7a(a, b, c, d) {
	var e = d ? pc : Jc;
	c = b == yj ? Math.max(0, c) : c;
	a.style[b + e] = c + Sj;
	a.style[b + (d ? Jc : pc)] = r
};

function o7a(a, b, c) {
	this.ra = a;
	this.C = b;
	this.F = c
}
o7a.prototype.A = function() {
	return new cB(this.ra, this.C, l, this.F)
};

function dB(a, b, c) {
	this.target = a;
	this.G = b || a;
	this.ls = c || new Fp(NaN, NaN, NaN, NaN);
	this.Ub = Mo(a);
	this.R = new S(this);
	N(this, this.R);
	up(this.G, [fl, bj], this.R4, q, this)
}
L(dB, bq);
var p7a = Q || Do && Io("1.9.3");
F = dB.prototype;
F.clientX = 0;
F.clientY = 0;
F.fha = 0;
F.gha = 0;
F.RF = 0;
F.SF = 0;
F.M2 = l;
F.SB = q;
F.uZ = 0;
F.Ca = im("M2");
F.O = function() {
	dB.M.O.call(this);
	wp(this.G, [fl, bj], this.R4, q, this);
	Bp(this.R);
	p7a && this.Ub.releaseCapture();
	this.G = this.target = m
};
F.R4 = function(a) {
	var b = a.type == bj;
	if (this.M2 && !this.SB && (!b || VSa(a))) {
		q7a(a);
		if (0 == this.uZ) if (this.dispatchEvent(new eB(Ek, this, a.clientX, a.clientY, a))) this.SB = l, a.preventDefault();
		else return;
		else a.preventDefault();
		var b = this.Ub,
			c = b.documentElement,
			d = !p7a;
		this.R.A(b, [el, cj], this.sIa, d);
		this.R.A(b, [dl, fj], this.QT, d);
		p7a ? (c.setCapture(q), this.R.A(c, wJa, this.QT)) : this.R.A(Qo(b), Ad, this.QT);
		this.W && this.R.A(this.W, ok, this.tIa, d);
		this.clientX = this.fha = a.clientX;
		this.clientY = this.gha = a.clientY;
		this.RF = this.target.offsetLeft;
		this.SF = this.target.offsetTop;
		this.K = lp(Ko(this.Ub));
		ym()
	} else this.dispatchEvent(YBa)
};
F.QT = function(a) {
	Bp(this.R);
	p7a && this.Ub.releaseCapture();
	if (this.SB) {
		q7a(a);
		this.SB = q;
		var b = r7a(this, this.RF),
			c = s7a(this, this.SF);
		this.dispatchEvent(new eB(Tf, this, a.clientX, a.clientY, a, b, c))
	} else this.dispatchEvent(YBa)
};

function q7a(a) {
	var b = a.type;
	b == fl || b == el ? a.init(a.Mc.targetTouches[0], a.currentTarget) : (b == dl || b == gPa) && a.init(a.Mc.changedTouches[0], a.currentTarget)
}
F.sIa = function(a) {
	if (this.M2) {
		q7a(a);
		var b = 1 * (a.clientX - this.clientX),
			c = a.clientY - this.clientY;
		this.clientX = a.clientX;
		this.clientY = a.clientY;
		if (!this.SB) {
			var d = this.fha - this.clientX,
				e = this.gha - this.clientY;
			if (d * d + e * e > this.uZ) if (this.dispatchEvent(new eB(Ek, this, a.clientX, a.clientY, a))) this.SB = l;
			else {
				this.cd() || this.QT(a);
				return
			}
		}
		c = t7a(this, b, c);
		b = c.x;
		c = c.y;
		this.SB && this.dispatchEvent(new eB(dta, this, a.clientX, a.clientY, a, b, c)) && (this.c8(a, b, c, q), a.preventDefault())
	}
};

function t7a(a, b, c) {
	var d = lp(Ko(a.Ub));
	b += d.x - a.K.x;
	c += d.y - a.K.y;
	a.K = d;
	a.RF += b;
	a.SF += c;
	b = r7a(a, a.RF);
	a = s7a(a, a.SF);
	return new uo(b, a)
}
F.tIa = function(a) {
	var b = t7a(this, 0, 0);
	a.clientX = this.clientX;
	a.clientY = this.clientY;
	this.c8(a, b.x, b.y, l)
};
F.c8 = function(a, b, c) {
	this.target.style.left = b + Sj;
	this.target.style.top = c + Sj;
	this.dispatchEvent(new eB(xf, this, a.clientX, a.clientY, a, b, c))
};

function r7a(a, b) {
	var c = a.ls,
		d = !isNaN(c.left) ? c.left : m,
		c = !isNaN(c.width) ? c.width : 0;
	return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
function s7a(a, b) {
	var c = a.ls,
		d = !isNaN(c.top) ? c.top : m,
		c = !isNaN(c.height) ? c.height : 0;
	return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
function eB(a, b, c, d, e, g, h) {
	R.call(this, a);
	this.clientX = c;
	this.clientY = d;
	this.C = e;
	this.left = I(g) ? g : b.RF;
	this.top = I(h) ? h : b.SF;
	this.A = b
}
L(eB, R);

function u7a(a, b, c, d) {
	var e = {};
	e.dId = b;
	e.eId = c;
	b = ww(vw(new uw, d));
	a.Ja(OIa).qb(e, b)
};

function fB(a, b, c, d, e, g) {
	lx.call(this, a);
	this.K = b;
	this.A = c;
	this.C = d;
	this.G = e;
	this.F = !! g
}
L(fB, mx);
F = fB.prototype;
F.Hp = m;
F.cj = m;
F.jL = m;
F.Tc = m;
F.Dna = q;
F.I4 = m;
F.Df = function() {
	var a = this.A;
	return new vo(4 + a.ff(), 4 + a.Ve())
};

function v7a(a) {
	return Pm(Ll + a.A.ff(), Vj + a.A.Ve(), Uj)
}
function w7a(a, b, c) {
	a && (a.style.width = b, a.style.height = c)
}
F.FF = function(a) {
	if (!this.cd()) {
		if (this.N() && !this.Hp && a) {
			var b = this.ma(),
				c = v7a(this);
			this.Hp = b.ha(ic, {
				style: c,
				src: a
			});
			b.appendChild(this.N(), this.Hp);
			this.bb() && T(this).A(this.Hp, Wd, this.Zca)
		}
		this.Hp && (a && this.Hp.src != a) && (this.Hp.src = a)
	}
};

function x7a(a) {
	var b = y7a(a.K, a.C, a.A);
	if (!b.wj) return gs(b, K(a.FF, a)), m;
	var c = m;
	gs(b, function(a) {
		c = a
	});
	return c
}
F.vb = function() {
	this.update()
};
F.update = function() {
	var a = this.N();
	if (a) {
		var b = this.A.ff() + Sj,
			c = this.A.Ve() + Sj;
		w7a(a, b, c);
		w7a(this.cj, b, c);
		w7a(this.jL, b, c);
		w7a(this.Hp, b, c)
	}
};
F.L_ = function() {
	return new c3a(0, m, new uo(0, 0), m)
};
F.ha = function() {
	var a = this.ma(),
		b = v7a(this);
	this.Sb(a.ha(Rb, {
		style: b + VKa
	}));
	this.FF(x7a(this))
};
F.za = function() {
	fB.M.za.call(this);
	if (this.F && this.G) {
		if (!this.Tc) {
			var a = Pm(Ll, this.A.ff(), Vj, this.A.Ve(), Uj);
			this.jL = this.ma().ha(Rb, {
				"class": dGa,
				style: a
			});
			this.ma().appendChild(this.N(), this.jL);
			a = Pm(Ll, this.A.ff(), Vj, this.A.Ve(), Uj);
			this.cj = this.ma().ha(Rb, {
				"class": cGa,
				style: a
			});
			(!Q || Io(bb)) && Tp(this.cj, 0.5);
			Up(this.cj, q);
			this.ma().sb().body.appendChild(this.cj);
			this.Tc = new dB(this.cj);
			this.Tc.uZ = Math.pow(6, 2)
		}
		T(this).A(this.jL, bj, this.RAa).A(this.Tc, dta, this.PAa).A(this.Tc, Tf, this.QAa);
		2 == this.A.xa() && T(this).A(this.jL, ge, this.ada)
	}
	this.Hp && (T(this).A(this.Hp, Wd, this.Zca), 2 == this.A.xa() && T(this).A(this.Hp, ge, this.ada))
};
F.ada = function() {
	u7a(this.Q.C, this.A.aa(), this.C, 7)
};
F.Sb = function(a) {
	fB.M.Sb.call(this, a);
	this.F || P(a, lg)
};
F.bd = D(1);
F.WR = function() {
	return new ws(0)
};
F.Zca = function(a) {
	a.stopPropagation()
};
F.RAa = function(a) {
	if (this.N() && this.cj) {
		Up(this.cj, l);
		var b = Pp(this.N(), this.ma().sb().body);
		Mp(this.cj, b);
		this.I4 = b;
		this.Tc.R4(a)
	}
};
F.PAa = function() {
	z7a(this, l)
};
F.QAa = function(a) {
	z7a(this, q);
	var b = {};
	b[me] = a.left - this.I4.x;
	b[ne] = a.top - this.I4.y;
	a = ww(vw(new uw, 7));
	this.Q.C.Ja(jHa).qb(b, a)
};

function z7a(a, b) {
	if (a.Dna != b) {
		if (a.cj) if (a.ma().Ud(a.cj), b) {
			Q && Tp(a.cj, 0.5);
			var c = v7a(a),
				c = a.ma().ha(ic, {
					style: c,
					src: x7a(a)
				});
			a.ma().appendChild(a.cj, c)
		} else Q && Tp(a.cj, r), Up(a.cj, q), Mp(a.cj, 0, 0);
		a.Dna = b
	}
}
F.O = function() {
	this.ma().removeNode(this.cj);
	O(this.Tc);
	fB.M.O.call(this)
};
var A7a = new Uv;

function B7a(a, b, c, d, e) {
	var g = 4 == a.va.A,
		h = c.xa();
	(b = A7a.execute(h, a, b.A[h], c, d, g, e)) || a.ra.log(Error(fga + c.xa()));
	return b
};

function C7a(a) {
	this.C = a
}
C7a.prototype.A = function(a, b) {
	var c = b.ba();
	if (this.Ye(a, c)) {
		var d = c.Ie(Ug, a)[0],
			c = gB(c.Fb(d));
		return B7a(b, this.C, c, d, q)
	}
	return m
};
C7a.prototype.Ye = function(a, b) {
	return 0 < b.Ie(Ug, a).length
};

function D7a() {}
L(D7a, fA);
D7a.prototype.G = function(a) {
	return a.C
};
D7a.prototype.A = function(a) {
	var b = rz(tz.ya(), a.Eg()),
		c = a.$s() - E7a(a).width;
	if (c) {
		var d = a.wc() ? dk : Pi;
		a = a.wc() ? Pi : dk;
		b += UKa + d + nb + c + eMa + a + dda
	}
	return b
};

function F7a() {}
mm(F7a);
F7a.prototype.A = function() {
	return new D7a
};

function hB(a) {
	Nx.call(this, q, a, HGa)
}
L(hB, Nx);
hB.prototype.Qd = xa;
hB.prototype.ba = function() {
	return {
		color: this.Qd
	}
};
hB.prototype.vg = function(a) {
	this.Qd = a.color
};
hB.prototype.qy = function() {
	var a = hB.M.qy.call(this);
	a.style.backgroundColor = this.Qd;
	return a
};

function G7a(a) {
	this.C = a
}
G7a.prototype.A = function() {
	return new hB(this.C)
};

function iB(a, b, c, d) {
	this.W = d;
	this.F = a.G;
	this.G = b;
	b = a.ba();
	d = b.Ra(Ri, c);
	var e = d.Eg(),
		g = a.na;
	this.sc = g ? g.UI(e) : e;
	d = b.Fb(d.Cc).$f(d.Wc);
	this.C = aZa(b, c, d.$l());
	this.L = a.Aa
}
L(iB, M);
F = iB.prototype;
F.HT = m;
F.PU = m;
F.getHeight = function() {
	return E7a(this).height
};
F.$s = function() {
	return E7a(this).width
};
F.wc = C(Wc);
F.Eg = C(mk);

function E7a(a) {
	return a.HT ? a.HT : a.HT = ox(a.G, a.sc, a.C)
}
F.rb = function() {
	this.PU || (this.PU = F4a(this.F, fAa));
	return this.PU
};
F.O = function() {
	delete this.F;
	delete this.PU;
	delete this.sc;
	delete this.HT;
	delete this.G;
	delete this.L;
	iB.M.O.call(this)
};

function H7a(a) {
	this.A = a
}
H7a.prototype.C = function(a, b, c, d) {
	return !this.Ye(a, b.ba()) ? m : new iB(b, this.A, a, d)
};
H7a.prototype.Ye = function(a, b) {
	return Ws(b.qa(), a) && zv(b, a)
};

function jB(a, b, c, d, e) {
	iB.call(this, a, b, c, e);
	this.Y = d;
	this.K = a.ba().Ra(zj, c).vw()
}
L(jB, iB);
jB.prototype.A = m;
jB.prototype.$s = function() {
	if (this.A === m) {
		var a = jB.M.$s.call(this),
			b = this.Y;
		this.A = (this.K - b < a ? FYa(b + a) : this.K) - b
	}
	return this.A
};

function I7a(a) {
	this.A = a
}
L(I7a, H7a);
I7a.prototype.C = function(a, b, c, d) {
	return !this.Ye(a, b.A.ba()) ? m : new jB(b, this.A, a, c, d)
};

function J7a(a) {
	this.A = new C7a(a)
}
L(J7a, ax);
F = J7a.prototype;
F.wG = function(a, b) {
	$w(b, this.A, Ja);
	Zw.register(b.A.ba(), new I7a(a.ea), 1)
};
F.Se = function(a, b) {
	b.Yr(Wk, il, U.xo, sk).Yr(Wk, pl, U.yo, sk).Yr(Wk, sl, U.zo, sk);
	b.Yr(Wk, ll, U.Wm, El).Yr(Wk, ol, U.ew, El).Yr(Wk, jl, U.Gz, El).Yr(Wk, ml, U.Hz, El);
	a.gb(vh, r, 183, k, k, k, k, k, k, k, k, function(a) {
		var b = new pr,
			e = a.mt,
			g = a.mr,
			h = a.mb;
		a = a.ml;
		sm(e) && (sm(g) && sm(h) && sm(a)) && (e = new OUa([e, g, h, a]), Jn(b, 0, e));
		return b
	});
	a.gb(cIa, r, 266, k, k, k, k, k, k, k, k, function(a) {
		var b = new pr,
			e = new PUa;
		qm(a) && (e.Ua[0] = a);
		Jn(b, 1, e);
		return b
	})
};
F.K2 = function() {
	go(jo(), Qf) || (U.Aq.Ca(l), U.qt.Ca(l))
};
F.Fm = function(a) {
	a.gb(gGa, r, 378, k, k, Bia);
	a.gb(vBa, r, 660, k, k, rr([Eb, Kc])).setProperty(ig, l)
};
F.$n = function(a, b) {
	var c = a.ma(),
		d = a.ra,
		e = 4 == a.va.A;
	Rx(Rx(U4a(pz(pz(b, ZFa, new Xx(c)), bf, new o7a(d, c, !e)), fAa, F7a.ya()), Ve, new G7a(c)), iAa, new sA(c))
};
F.lj = function(a) {
	a.Ea(U.xo);
	a.Ea(U.Ps);
	a.Ea(U.yo);
	a.Ea(U.Yv);
	a.Ea(U.Zv);
	a.Ea(U.$v);
	a.Ea(U.Gz);
	a.Ea(U.Hz);
	a.Ea(U.zo);
	a.Ea(U.SI);
	a.Ea(U.Aq);
	a.Ea(U.qt)
};

function K7a() {
	Jz.call(this, q, q, l, 1, bm)
}
L(K7a, Jz);

function kB() {}
kB.prototype.C = function(a, b) {
	return nt(a, b, bm, am) ? nWa(a, b, bm, am) : -1
};
kB.prototype.F = function(a, b) {
	return nt(a, b, bm, am) ? oWa(a, b, bm, am) : -1
};
kB.prototype.G = jm(7);
kB.prototype.A = jm(148);

function lB(a, b) {
	gz.call(this, a, bm, am);
	this.na = b
}
L(lB, gz);
lB.prototype.lx = function(a) {
	var b = iz(this.Q.G, tFa);
	b.vb(a - 1);
	return b
};
lB.prototype.Ly = function(a) {
	return jz(this.na, a.index, a.A, this.Q)
};
lB.prototype.rH = function(a) {
	return this.na.Ye(a.index, a.A, this.Q.ba())
};

function L7a(a) {
	this.C = a
}
L7a.prototype.A = function(a) {
	return new lB(a, this.C)
};
L7a.prototype.Ye = function(a, b, c) {
	return Ts(c.qa(), a) == bm
};

function mB(a) {
	var b = a.ma();
	Vx.call(this, b);
	this.Q = a
}
L(mB, Wx);
F = mB.prototype;
F.R_ = q;
F.ha = function() {
	this.Sb(this.ma().ha(Rb, uFa))
};
F.vb = function(a) {
	this.Q.Y.register(this.aa(), a)
};
F.VCa = function() {
	var a = {};
	a.spi = H5a(this.Q.Y, this.aa());
	return a
};
F.XCa = function() {
	var a = this.Q.A,
		b = qt(a.A),
		c = H5a(this.Q.Y, this.aa()),
		a = a.ba().qa().indexOf(am, c),
		b = b > c && b < a;
	this.R_ != b && (this.R_ = b, this.Q.C.Ja(gi).ua(b), so(this.N(), vFa, b))
};
F.za = function() {
	mB.M.za.call(this);
	4 == this.Q.va.A && ts(ps.ya(), Fi, this.QIa, this, l, k, l)
};
F.QIa = function() {
	var a = qs(Fi).wf,
		b = new(a.WCa());
	this.Oa(b, l);
	P(b.N(), wFa);
	var c = this.Q.C.Ja(gi);
	c.ua(this.R_);
	vs(this.Q, a).A(b, c, a.UCa(), K(this.VCa, this), ww(vw(new uw, 7)));
	T(this).A(this.Q.A, Lf, this.XCa)
};
F.O = function() {
	this.Q.Y.unregister(this.aa());
	mB.M.O.call(this)
};

function M7a(a) {
	this.Q = a
}
M7a.prototype.A = function() {
	return new mB(this.Q)
};

function N7a() {}
L(N7a, ax);
F = N7a.prototype;
F.OT = function(a, b) {
	b.register(new L7a(b))
};
F.Se = function(a) {
	a.gb(gi, r, 273, jra, Jxa);
	a.gb($Ga, Ypa, 231, zka, k, k, k, q, k, k, k, k, zka, bPa);
	a.gb(UFa, Eha, 357)
};
F.$n = function(a, b) {
	pz(b, tFa, new M7a(a))
};
F.MT = function(a) {
	Oz(a, new K7a)
};
F.NT = function(a) {
	Nz(a, new kB)
};

function O7a(a, b) {
	this.F = a;
	this.A = b
}
L(O7a, ax);
O7a.prototype.Se = function(a) {
	Hr(a, LIa, Gqa, 291, Gqa, k, k, k, !this.A || this.F.C, k, k, k, k, ZIa)
};

function P7a() {}
L(P7a, ax);
P7a.prototype.Se = function(a) {
	Hr(a, RIa, Coa, 305, k, k, k, k, k, k, l)
};

function Q7a() {
	this.A = No(SIa);
	this.C = new qy(this.A, 0.3, 0.8, 2E3, ty);
	N(this, this.C)
}
L(Q7a, M);
Q7a.prototype.O = function() {
	this.A && (1 == this.C.Fa && this.C.stop(), Wo(this.A), this.A = m)
};

function R7a() {
	this.A = new Q7a;
	N(this, this.A)
}
L(R7a, ax);
R7a.prototype.CM = function() {
	var a = this.A;
	a.A && a.C.play()
};
R7a.prototype.dv = function(a) {
	var b = new fx(MAa);
	hx(a, b, MAa)
};

function S7a() {}
L(S7a, ax);
S7a.prototype.Se = function(a) {
	a.gb(mi, Bra, 292, hga, k, Qga, k, q, k, k, k, k, k, XKa)
};

function nB(a, b, c, d, e, g, h, n, p, t, u, x, y, B, E, H, J, $) {
	this.Y = a;
	this.ea = b;
	this.W = c;
	this.Ha = d;
	this.ra = e;
	this.Q = g;
	this.C = h;
	this.G = n;
	this.Ta = p;
	this.Na = t;
	this.Ma = u;
	this.L = x;
	this.K = y;
	this.F = B;
	this.Ba = E;
	this.na = H;
	this.yb = J;
	this.Aa = $
}
L(nB, M);
nB.prototype.A = m;

function T7a(a, b) {
	b.vb(a.Y, a.ea, a.W, a.Ha, a.Q, a.C, a.G, a.Ta, a.Ma, a.L, a.K)
}
function U7a(a, b, c) {
	a.A ? a.A[b] ? a.ra.log(Error(bfa + b + Baa)) : (a.A[b] = c, T7a(a, c)) : a.ra.log(Error(cfa))
}
nB.prototype.O = function() {
	for (var a in this.A) O(this.A[Number(a)]);
	nB.M.O.call(this)
};

function oB() {
	var a = K(this.C, this);
	window.KX_getEditStats = a
}
mm(oB);
oB.prototype.A = 0;
oB.prototype.F = function(a, b) {
	a.C == sPa && a.A == dFa && (this.A += b)
};
oB.prototype.C = function() {
	return En({
		"0": this.A
	})
};

function V7a(a, b) {
	this.A = a;
	this.C = b
}
V7a.prototype.Pa = function() {
	var a = {};
	0 < this.A.length && (a.e = this.A.join(La));
	this.C && (a.rls = this.C);
	return a
};

function W7a() {
	this.A = []
}
W7a.prototype.C = m;

function pB(a, b) {
	a.A.push(b ? b.replace(Na, ed) : m);
	return a
}
function X7a(a, b) {
	for (var c = 0; c < b.length; c++) pB(a, b[c]);
	return a
}
function Y7a(a, b) {
	a.C = b ? b.replace(Na, ed) : m;
	return a
}
function Z7a(a) {
	return new V7a(a.A, a.C)
};

function $7a(a, b, c, d, e, g, h, n, p) {
	this.K = a;
	this.na = b;
	this.G = c;
	this.Y = d;
	this.ea = e;
	this.W = g;
	this.C = h;
	this.L = !! n;
	this.F = p || m;
	this.A = []
}
L($7a, M);
F = $7a.prototype;
F.init = function() {
	this.L || eq(this.Cha, this.K, this)
};
F.log = function(a, b) {
	this.A.push([a, b]);
	this.L && a8a(this)
};

function a8a(a) {
	var b = ym();
	a.C.zB() ? b8a(a, a.A, b, a.ea, l) && a.clear() : a.F && a.A && (b = a.F, b.A = b.A.concat([new c8a]), a.clear())
}
F.RT = function(a, b) {
	if (this.C.zB()) this.Qda(a, b);
	else if (this.F) {
		var c = this.F;
		c.A = c.A.concat([new c8a])
	} else {
		var c = this.C,
			d = K(this.Qda, this, a, b);
		c.zB() ? d() : c.A.push(d)
	}
};
F.CA = function(a) {
	a8a(this);
	this.G = Z7a(pB(Y7a(X7a(new W7a, this.G.A), this.G.C), a))
};
F.Qda = function(a, b) {
	b8a(this, b, a, this.Y, q)
};

function b8a(a, b, c, d, e) {
	if (window.jstiming == m) return l;
	if (window.jstiming.report == m) return q;
	var g;
	g = new window.jstiming.Timer(c);
	g.name = d;
	for (d = 0; d < b.length; d++) {
		var h = a.W(b[d][0]),
			n = b[d][1];
		h && h != zl && (e ? (g.tick(asa, k, c), g.tick(h, asa, c + n)) : g.tick(h, k, c + n))
	}
	window.jstiming.getNavTiming && window.jstiming.getNavTiming(g);
	window.jstiming.report(g, a.G.Pa(), a.na);
	return l
}
F.Cha = function() {
	0 < this.A.length && a8a(this);
	eq(this.Cha, this.K, this)
};
F.clear = function() {
	this.A.length = 0
};
F.O = function() {
	this.A = m;
	O(this.C);
	delete this.C;
	$7a.M.O.call(this)
};

function d8a() {
	var a = jo().get(NKa);
	if (a == m) return 1;
	var b = a.pa,
		c = a.s,
		a = a.u;
	return b == m || !rm(b) || a == m || !qm(a) || c == m || !om(c) ? 1 : a == r ? 5 : !b ? 3 : jn(c) ? 4 : 2
};

function c8a() {};

function e8a() {
	this.A = []
};

function qB() {
	var a = new Gq(this);
	N(this, a);
	this.A = [];
	a.$a(U.Dc, Sf, K(this.C, this))
}
L(qB, M);
qB.prototype.zB = function() {
	return U.Dc.isEnabled()
};
qB.prototype.C = function() {
	for (var a = 0; a < this.A.length; a++) this.A[a]();
	this.A = []
};
qB.prototype.O = function() {
	delete this.A;
	qB.M.O.call(this)
};

function f8a(a) {
	return a ? a.toString() : zl
};

function rB() {
	this.A = {}
}
mm(rB);
rB.prototype.F = function(a, b) {
	var c = a.C,
		d = a.A;
	this.A[c] || (this.A[c] = {});
	this.A[c][d] || (this.A[c][d] = new g8a);
	c = this.A[c][d];
	c.C += 1;
	c.A += b
};
rB.prototype.C = function() {
	var a = [caa],
		b;
	for (b in this.A) {
		a.push(baa + b + da);
		var c = b,
			d = a,
			e = k;
		for (e in this.A[c]) {
			var g = this.A[c][e];
			d.push(e + oaa + g.C + Iaa + g.A + qaa + g.A / g.C + da)
		}
		this.A[b] = {}
	}
	return a.join(r)
};

function g8a() {
	this.A = this.C = 0
};

function h8a(a, b, c) {
	a = a.qa();
	for (var d = [], e = [], g = 0; g < b.length; g++) {
		var h = b[g].start,
			n = b[g].end;
		Ys(a, n) && (c || n == Vs(a, h) && Ss(a, n) < h) && n--;
		e.push(h);
		n >= h && d.push(new xs(h, n))
	}
	return {
		qu: d,
		yF: e
	}
};

function i8a(a, b) {
	for (var c = [], d = [], e = a.qa(), g = 0; g < b.length; g++) {
		var h = b[g].start,
			n = b[g].end,
			p = a.qa().ub() - 1;
		if (h > p || n > p) break;
		if (n == Vs(e, h) && Ss(e, n) < h && (n--, n < h)) {
			d.push(h);
			break
		}
		for (p = h; p <= n; p++) {
			var t = Ts(e, p),
				u;
			u = p;
			var x = a.qa();
			if (Ts(x, u) != da) u = m;
			else {
				var y = Ts(x, u + 1);
				u = y == ga ? tt(x, u + 1) : y == bm ? x.indexOf(am, u + 1) : m
			}
			if (u != m && u <= n) p = u;
			else {
				if (t == am) {
					n = p - 1;
					break
				}
				t = a.qa();
				u = Ts(t, p);
				if (!Xs(t, p) || !(u != da || t.ub() - 1 <= p + 1 || Xs(t, p + 1))) h != p ? (c.push(new xs(h, p - 1)), d.push(h)) : Ts(a.qa(), h) == da && d.push(h), h = p + 1
			}
		}
		h <= n && (c.push(new xs(h, n)), d.push(h))
	}
	return {
		qu: c,
		yF: d
	}
};

function j8a() {};

function k8a(a) {
	this.Y = a
}
F = k8a.prototype;
F.xa = C(Zc);
F.zaa = D(q);
F.dca = D(l);
F.Ht = D(q);
F.gx = D(q);
F.d_ = D(q);
F.$V = D(1);

function sB(a) {
	this.Y = a
}
L(sB, k8a);
sB.prototype.xa = function() {
	return sB.M.xa.call(this)
};

function tB(a, b) {
	this.Y = li;
	this.cb = a;
	this.Ba = b
}
L(tB, sB);
tB.prototype.aa = C(Fd);
tB.prototype.A = C(Ib);

function uB(a, b) {
	this.Y = wh;
	this.Na = a;
	this.Ba = b
}
L(uB, sB);
uB.prototype.C = C(xc);
uB.prototype.F = C(Ib);

function vB(a, b, c, d, e) {
	this.Y = ph;
	this.G = a;
	this.Ta = b;
	this.Na = c;
	this.L = d;
	this.Ba = !! e
}
L(vB, sB);
vB.prototype.C = C(Sc);
vB.prototype.F = C(xc);
vB.prototype.Ht = function() {
	return this.Ba || mt(this.G)
};

function l8a(a, b) {
	this.A = a;
	this.C = b
};

function m8a() {
	this.A = [];
	this.C = []
}
function n8a(a, b) {
	sn(a.A, b.A);
	var c = b.C;
	wm(nn, a.C, k, 0).apply(m, c)
};

function wB(a) {
	this.Q = a
}
L(wB, M);
wB.prototype.F = m;
wB.prototype.Qb = function(a) {
	a = o8a(this.Q.A, a);
	n8a(this.F, a)
};

function xB(a, b) {
	Bu(a.Q.A, b, l, l)
}
function yB(a, b) {
	n8a(a.F, b.apply())
}
wB.prototype.apply = function() {
	this.F = new m8a;
	this.Uc();
	return new l8a(this.F.A, this.F.C)
};

function zB(a) {
	this.Q = a
}
L(zB, wB);

function AB(a, b, c, d, e, g) {
	this.Q = a;
	this.G = b;
	this.A = c;
	this.K = d;
	this.C = e;
	this.L = !! g
}
L(AB, zB);
AB.prototype.Uc = function() {
	var a = this.G,
		b = this.K,
		c = this.C,
		d = this.Q.A.ba();
	if (this.L || !d.A.C[a]) this.Qb(new vB(this.G, b, c, this.A));
	else if (!Rn(this.A)) {
		var e = this.Q.A.ba().qa(),
			g = Qs(e, da, this.K, this.C),
			e = Us(e, this.C);
		(0 == g.length || e > g[g.length - 1]) && g.push(e);
		for (e = 0; e < g.length; e++) {
			var h = g[e],
				n = d.A.C[a].F(d.A.A, this.A, a, h, d.A.K),
				p = Math.min(h, c);
			this.Qb(new vB(this.G, b, p, n));
			b = h + 1
		}
	}
};
AB.prototype.O = function() {
	delete this.A;
	AB.M.O.call(this)
};

function BB(a) {
	this.Y = rh;
	this.cb = a
}
L(BB, sB);
BB.prototype.aa = C(Fd);

function CB(a, b) {
	this.Q = a;
	this.A = b
}
L(CB, zB);
CB.prototype.Uc = function() {
	var a = this.Q.A,
		b = a.ba();
	b.Fb(this.A) && (a = Hs(a.A.getSelection()), 1 == a.xa() && a.aa() == this.A && xB(this, Ls(new ws(b.Rc(this.A)))), this.Qb(new BB(this.A)))
};

function DB(a, b, c, d) {
	this.Q = a;
	this.G = b;
	this.C = !! d;
	this.A = rn(c)
}
L(DB, zB);
F = DB.prototype;
F.Uaa = q;
F.Xaa = function(a, b) {
	return b
};
F.Yaa = G;
F.Waa = G;
F.Uc = function() {
	for (var a = this.Q.A.ba().qa(), b = this.Q.A.A, c, d = b.getSelection(), e = this.G.length - 1; 0 <= e; e--) {
		var g = a.ub() - 1,
			h = this.Xaa(a, this.G[e]),
			n = h.start,
			h = h.end;
		if (h > a.ub() - 1) return;
		if (this.C && 0 == e) {
			var p = n,
				t = this.Q.A.ba();
			c = t.Ra(Wk, p).Jg();
			if (EB(t.Ra(Qi, p)) && p == t.Zh(Qi, p)) for (t in p = FB(k), t = k, p) delete c[t]
		}
		var p = n,
			t = h,
			u = this.Q.A.ba(),
			x = u.qa();
		if (!(t < p || p > x.ub() - 1)) {
			var y;
			if (y = t < x.ub() - 1) a: {
				y = this.Q.A.ba().qa();
				for (var B = p; B <= t; B++) if (Ys(y, B)) {
					y = l;
					break a
				}
				y = q
			}
			if (y) {
				y = Us(x, t + 1);
				if (!Ws(x, p) || zv(u,
				p)) {
					var B = u.A.Jf(zj, p),
						E = u.A.Jf(Ri, p);
					yB(this, new AB(this.Q, zj, B.Pa(), y, y, l));
					yB(this, new AB(this.Q, Ri, E.Pa(), y, y, l))
				}
				this.Yaa(Us(x, p), y)
			}
			if (p == t && (x = this.Q.A.ba().qa(), x = 1 < p && Xs(x, p - 1) ? p - 1 : p + 1 < x.ub() - 1 && Xs(x, p + 1) ? p + 1 : -1, 0 < x)) for (y = 0; y < nZa.length; y++) if (B = u.Ie(nZa[y], p), 0 != B.length) for (E = 0; E < B.length; E++) this.Qb(new tB(B[E], x));
			u = u.JE(p, t);
			x = k;
			for (x in u) yB(this, new CB(this.Q, x));
			this.Waa(p, t);
			this.Qb(new uB(p, t));
			this.Uaa = l;
			for (y = this.A.length - 1; 0 <= y && !(this.A[y] < p); y--) this.A[y] = this.A[y] > t ? this.A[y] - (t - p + 1) : this.A[y] > p ? p : this.A[y]
		}
		this.C && (p = d, t = this.Q.A.ba(), u = p.F, d = Nu(t, p.Lb), p = u && 1 == p.C.length ? Nu(t, u.F) : m, h >= g - 1 && (d == g + 1 && d--, p && p == g + 1 && p--), d = d > h ? d - (h - n + 1) : d > n ? n : d, p && (p = p > h ? p - (h - n + 1) : p > n ? n : p), d = p ? Ms(d, p) : Ls(new ws(d)))
	}
	this.C && (xB(this, d), c && (b.F = {}, Xn(b.F, c)))
};

function GB(a, b, c, d) {
	et.call(this, b, c);
	this.F = a;
	this.Y = new sx;
	d && this.update(d)
}
L(GB, et);

function Zx(a) {
	return a.Y.zc()
}
F = GB.prototype;
F.Oc = function(a, b) {
	a == this.F && this.Y.update(b)
};
F.Pa = function() {
	var a = {};
	a[this.F] = this.Y.Pa();
	return a
};
F.Ga = function(a) {
	return a == this.F ? this.Y : GB.M.Ga.call(this, a)
};
F.Tf = function(a) {
	return a == this.F
};
F.Bx = function(a, b) {
	var c = this.Ga(a);
	return a == this.F ? zn(c.ce(), b.ce()) : GB.M.Bx.call(this, a, b)
};

function HB(a) {
	GB.call(this, Zd, Td, p8a, a)
}
L(HB, GB);
var p8a = Uu({
	aZa: Zd
});

function lz(a) {
	return Zx(a)
}
HB.prototype.$q = D(q);
HB.prototype.yQ = function() {
	return Zx(this)
};
HB.prototype.La = function() {
	return new HB(this.Pa())
};
kt(function() {
	return new HB
});

function IB(a, b, c, d) {
	this.Q = a;
	hn(q8a, c) || f(Error(c + "cannot be used here"));
	this.A = c;
	this.K = d;
	this.C = b
}
L(IB, zB);
var q8a = [Td];
IB.prototype.Uc = function() {
	dr(this.Q.A.ba().pd(this.A), function(a, b) {
		var c = Um(this.G(b), this.C);
		if (-1 != c) {
			var d = this.Q.A.ba().Ag(this.A, a),
				e = {};
			e[this.K] = vx(c);
			this.Qb(new vB(this.A, a, d, e))
		}
		return q
	}, this)
};

function JB(a, b, c) {
	IB.call(this, a, b, Td, Zd);
	this.L = c
}
L(JB, IB);
JB.prototype.G = function(a) {
	return Zx(a)
};
JB.prototype.Uc = function() {
	JB.M.Uc.call(this);
	var a = this.Q.A.ba(),
		b = a.Rc(this.C); - 1 != b && (a = Vs(a.qa(), b), yB(this, this.L(this.Q, [new xs(b, a)], [])))
};

function r8a(a, b, c, d) {
	this.Q = a;
	this.G = c;
	this.A = b;
	this.C = d
}
L(r8a, zB);
r8a.prototype.Uc = function() {
	var a = this.Q.A.ba(); - 1 != this.A && yB(this, this.C(this.Q, [new xs(this.A, this.A)], [], q, l));
	var b = a.Rc(this.G),
		a = Vs(a.qa(), b);
	yB(this, this.C(this.Q, [new xs(b, a)], []))
};

function KB(a, b, c, d, e, g) {
	DB.call(this, a, b, c, g);
	this.K = !! d;
	this.L = !! e
}
L(KB, DB);
KB.prototype.Xaa = function(a, b) {
	return g3a(a, b)
};
KB.prototype.Yaa = function(a, b) {
	for (var c = this.Q.A.ba(), d = c.Ie(Jj, a), e = 0, g; g = d[e]; e++) {
		g = c.Fb(g);
		var h = g.F.xa();
		(0 == h || 2 == h || 3 == h) && this.Qb(new tB(g.aa(), b))
	}
};
KB.prototype.Waa = function(a, b) {
	this.K || this.Q.va.Y && s8a(this, a, b);
	this.L || t8a(this, a, b)
};

function s8a(a, b, c) {
	var d = a.Q.A.ba(),
		e = d.Gh(Td, b, c).pd();
	if (!(1 == e.length && 0 == Zx(e[0]).length)) {
		var g = new Xr;
		dr(e, function(a, b) {
			var c = Zx(b);
			Yr(g, c);
			return q
		}, a);
		c = [d.Ra(Td, b - 1), d.Ra(Td, c + 1)];
		for (b = 0; d = c[b]; b++) for (var e = Zx(d), h = 0; d = e[h]; h++) g.remove(d);
		c = g.zc();
		for (b = 0; d = c[b]; b++) yB(a, new JB(a.Q, d, u8a))
	}
}
function t8a(a, b, c) {
	b = a.Q.A.ba().Gh(hg, b, c).pd();
	dr(b, function(a, b) {
		var c = b.F;
		c && yB(this, new r8a(this.Q, -1, c, u8a));
		return q
	}, a)
}
function u8a(a, b, c, d, e) {
	return new KB(a, b, c, d, e)
};

function v8a(a) {
	a = a.rU();
	return (wr(a) ? vr(a, 256) : a.Je() || a.Oj()) ? pqa : k
}
function w8a(a) {
	a.onbeforeunload = G;
	a.location.reload()
}
var x8a = ["usp", "urp", OPa, NPa, "utm_campaign", "utm_term", "utm_content"];

function y8a() {
	try {
		var a = km.localStorage;
		if (a && ($q || ar || Q)) if (a.setItem(Vk, Vk), a.getItem(Vk) == Vk && (a.removeItem(Vk), a.getItem(Vk) == m)) return l
	} catch (b) {}
	return q
};

function z8a() {}
z8a.prototype.A = m;

function A8a(a) {
	var b;
	if (!(b = a.A)) b = {}, B8a(a) && (b[0] = l, b[1] = l), b = a.A = b;
	return b
};
var C8a;

function D8a() {}
L(D8a, z8a);

function E8a(a) {
	return (a = B8a(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function B8a(a) {
	if (!a.C && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
		for (var b = [Kla, Jla, Ila, Tla], c = 0; c < b.length; c++) {
			var d = b[c];
			try {
				return new ActiveXObject(d), a.C = d
			} catch (e) {}
		}
		f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
	}
	return a.C
}
C8a = new D8a;

function LB(a) {
	this.headers = new Sr;
	this.A = a || m
}
L(LB, bq);
var F8a = /^https?$/i,
	G8a = [];

function H8a(a) {
	a.dispose();
	on(G8a, a)
}
F = LB.prototype;
F.yy = q;
F.Jd = m;
F.zU = m;
F.AU = r;
F.JG = 0;
F.aC = r;
F.Q3 = q;
F.xU = q;
F.P3 = q;
F.GC = q;
F.IA = 0;
F.bC = m;
F.dx = r;
F.u1 = q;
F.send = function(a, b, c, d) {
	this.Jd && f(Error("[goog.net.XhrIo] Object is active with another request=" + this.AU + "; newUri=" + a));
	b = b ? b.toUpperCase() : dc;
	this.AU = a;
	this.aC = r;
	this.JG = 0;
	this.Q3 = q;
	this.yy = l;
	this.Jd = this.d3();
	this.zU = this.A ? A8a(this.A) : A8a(C8a);
	this.Jd.onreadystatechange = K(this.nja, this);
	try {
		this.P3 = l, this.Jd.open(b, a, l), this.P3 = q
	} catch (e) {
		I8a(this, e);
		return
	}
	a = c || r;
	var g = this.headers.La();
	d && Rr(d, function(a, b) {
		g.set(b, a)
	});
	d = fn(g.dd(), J8a);
	c = km.FormData && a instanceof km.FormData;
	b == Cc && (!d && !c) && g.set(Nb, Asa);
	Rr(g, function(a, b) {
		this.Jd.setRequestHeader(b, a)
	}, this);
	this.dx && (this.Jd.responseType = this.dx);
	gQa in this.Jd && (this.Jd.withCredentials = this.u1);
	try {
		this.bC && (dq.clearTimeout(this.bC), this.bC = m), 0 < this.IA && (this.bC = dq.setTimeout(K(this.gh, this), this.IA)), this.xU = l, this.Jd.send(a), this.xU = q
	} catch (h) {
		I8a(this, h)
	}
};

function J8a(a) {
	return kua == a.toLowerCase()
}
F.d3 = function() {
	return this.A ? E8a(this.A) : E8a(C8a)
};
F.gh = function() {
	"undefined" != typeof YQa && this.Jd && (this.aC = sqa + this.IA + $Ja, this.JG = 8, this.dispatchEvent(YOa), this.abort(8))
};

function I8a(a, b) {
	a.yy = q;
	a.Jd && (a.GC = l, a.Jd.abort(), a.GC = q);
	a.aC = b;
	a.JG = 5;
	K8a(a);
	L8a(a)
}
function K8a(a) {
	a.Q3 || (a.Q3 = l, a.dispatchEvent(Ud), a.dispatchEvent(Xf))
}
F.abort = function(a) {
	this.Jd && this.yy && (this.yy = q, this.GC = l, this.Jd.abort(), this.GC = q, this.JG = a || 7, this.dispatchEvent(Ud), this.dispatchEvent(hd), L8a(this))
};
F.O = function() {
	this.Jd && (this.yy && (this.yy = q, this.GC = l, this.Jd.abort(), this.GC = q), L8a(this, l));
	LB.M.O.call(this)
};
F.nja = function() {
	!this.P3 && !this.xU && !this.GC ? this.n8() : M8a(this)
};
F.n8 = function() {
	M8a(this)
};

function M8a(a) {
	if (a.yy && "undefined" != typeof YQa && (!a.zU[1] || !(4 == MB(a) && 2 == a.Ff()))) if (a.xU && 4 == MB(a)) dq.setTimeout(K(a.nja, a), 0);
	else if (a.dispatchEvent(Zj), 4 == MB(a)) {
		a.yy = q;
		try {
			a.Gn() ? (a.dispatchEvent(Ud), a.dispatchEvent(Nk)) : (a.JG = 6, a.aC = N8a(a) + paa + a.Ff() + cd, K8a(a))
		} finally {
			L8a(a)
		}
	}
}

function L8a(a, b) {
	if (a.Jd) {
		var c = a.Jd,
			d = a.zU[0] ? G : m;
		a.Jd = m;
		a.zU = m;
		a.bC && (dq.clearTimeout(a.bC), a.bC = m);
		b || a.dispatchEvent(lMa);
		try {
			c.onreadystatechange = d
		} catch (e) {}
	}
}
F.lc = function() {
	return !!this.Jd
};
F.Gn = function() {
	var a = this.Ff(),
		b;
	a: switch (a) {
		case 200:
		case 201:
		case 202:
		case 204:
		case 206:
		case 304:
		case 1223:
			b = l;
			break a;
		default:
			b = q
	}
	if (!b) {
		if (a = 0 === a) a = Hv(1, String(this.AU)), !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), a = !F8a.test(a ? a.toLowerCase() : r);
		b = a
	}
	return b
};

function MB(a) {
	return a.Jd ? a.Jd.readyState : 0
}
F.Ff = function() {
	try {
		return 2 < MB(this) ? this.Jd.status : -1
	} catch (a) {
		return -1
	}
};

function N8a(a) {
	try {
		return 2 < MB(a) ? a.Jd.statusText : r
	} catch (b) {
		return r
	}
}
F.kx = function() {
	return String(this.AU)
};
F.lh = function() {
	try {
		return this.Jd ? this.Jd.responseText : r
	} catch (a) {
		return r
	}
};

function O8a(a) {
	try {
		if (!a.Jd) return m;
		if (AMa in a.Jd) return a.Jd.response;
		switch (a.dx) {
			case r:
			case Wk:
				return a.Jd.responseText;
			case Fsa:
				if (WJa in a.Jd) return a.Jd.mozResponseArrayBuffer
		}
		return m
	} catch (b) {
		return m
	}
}
F.getResponseHeader = function(a) {
	return this.Jd && 4 == MB(this) ? this.Jd.getResponseHeader(a) : k
};
F.getAllResponseHeaders = jm(22);
F.Lj = jm(28);
F.Rx = function() {
	return qm(this.aC) ? this.aC : String(this.aC)
};
JSa(function(a) {
	LB.prototype.n8 = a(LB.prototype.n8)
});

function NB(a) {
	this.C = a
}
L(NB, M);
NB.prototype.A = function(a) {
	return P8a(this, a)
};

function OB(a, b) {
	return (b ? Zra : Xra) + vm(a) + Vra
}
function P8a(a, b) {
	var c = OB(a, l);
	b[c] || ((b[c] = Q8a(a, b))[OB(a, q)] = b);
	return b[c]
}
function Q8a(a, b) {
	function c() {
		if (a.cd()) return b.apply(this, arguments);
		try {
			return b.apply(this, arguments)
		} catch (c) {
			a.C(c), f(new R8a(c))
		} finally {}
	}
	c[OB(a, q)] = b;
	return c
}

function S8a(a, b) {
	var c = lm(dQa),
		d = c[b];
	c[b] = function(b, c) {
		qm(b) && (b = wm(cRa, b));
		b = P8a(a, b);
		return d.call ? d.call(this, b, c) : d(b, c)
	};
	c[b][OB(a, q)] = d
}
NB.prototype.O = function() {
	var a = lm(dQa);
	a.setTimeout = a.setTimeout[OB(this, q)] || a.setTimeout;
	a.setInterval = a.setInterval[OB(this, q)] || a.setInterval;
	NB.M.O.call(this)
};

function R8a(a) {
	Am.call(this, mia + (a && a.message ? String(a.message) : String(a)));
	if ((a = (this.kp = a) && a.stack) && qm(a)) this.stack = a
}
L(R8a, Am);

function PB(a, b, c) {
	this.F = b || m;
	this.G = T8a;
	this.L = a;
	c || this.GL()
}
L(PB, bq);

function U8a(a, b) {
	R.call(this, dh);
	this.error = a;
	this.A = b
}
L(U8a, R);
F = PB.prototype;
F.KM = m;

function T8a(a, b, c, d) {
	var e = new LB;
	G8a.push(e);
	up(e, lMa, wm(H8a, e));
	e.send(a, b, c, d)
}
F.GL = function() {
	if (Q) oVa(K(this.ju, this));
	else {
		this.KM = new NB(K(this.ju, this));
		S8a(this.KM, kNa);
		S8a(this.KM, hNa);
		var a = this.KM;
		ISa = l;
		for (var b = K(a.A, a), c = 0; c < GSa.length; c++) GSa[c](b);
		HSa.push(a)
	}
};
F.ju = function(a, b) {
	var c;
	c = lm(fQa);
	if (qm(a)) c = {
		message: a,
		name: Yqa,
		lineNumber: zc,
		fileName: c,
		stack: zc
	};
	else {
		var d, e, g = q;
		try {
			d = a.lineNumber || a.NPa || zc
		} catch (h) {
			d = zc, g = l
		}
		try {
			e = a.fileName || a.filename || a.sourceURL || km.$googDebugFname || c
		} catch (n) {
			e = zc, g = l
		}
		c = g || !a.lineNumber || !a.fileName || !a.stack ? {
			message: a.message,
			name: a.name,
			lineNumber: d,
			fileName: e,
			stack: a.stack || zc
		} : a
	}
	d = b ? Vn(b) : {};
	if (this.F) try {
		this.F(c, d)
	} catch (p) {}
	this.$la(c.message, c.fileName, c.lineNumber, c.stack, d);
	try {
		this.dispatchEvent(new U8a(c,
		d))
	} catch (t) {}
};
F.$la = function(a, b, c, d, e) {
	try {
		var g = Pv(this.L, nk, b, Xf, a, hJa, c);
		a = {};
		a.trace = d;
		if (e) for (var h in e) a[mua + h] = e[h];
		var n = Ov(a);
		this.G(g, Cc, n, this.K)
	} catch (p) {}
};
F.O = function() {
	O(this.KM);
	PB.M.O.call(this)
};

function V8a(a) {
	this.C = a || 100;
	this.A = []
}
F = V8a.prototype;
F.pG = 0;
F.add = function(a) {
	var b = this.A[this.pG];
	this.A[this.pG] = a;
	this.pG = (this.pG + 1) % this.C;
	return b
};
F.get = function(a) {
	a = W8a(this, a);
	return this.A[a]
};
F.set = function(a, b) {
	a = W8a(this, a);
	this.A[a] = b
};
F.Dd = function() {
	return this.A.length
};
F.jc = function() {
	return 0 == this.A.length
};
F.clear = function() {
	this.pG = this.A.length = 0
};
F.zc = function() {
	for (var a = this.Dd(), b = this.Dd(), c = [], a = this.Dd() - a; a < b; a++) c[a] = this.get(a);
	return c
};
F.dd = function() {
	for (var a = [], b = this.Dd(), c = 0; c < b; c++) a[c] = c;
	return a
};
F.kz = function(a) {
	for (var b = this.Dd(), c = 0; c < b; c++) if (this.get(c) == a) return l;
	return q
};

function W8a(a, b) {
	b >= a.A.length && f(Error("Out of bounds exception"));
	return a.A.length < a.C ? b : (a.pG + Number(b)) % a.C
};

function X8a(a) {
	this.F = a;
	this.C = Math.floor(a / 50);
	this.A = new V8a(50)
}
X8a.prototype.get = function(a) {
	return Y8a(this, a, function(a, c) {
		return a + c.count
	})
};

function Y8a(a, b, c) {
	b = b || ym();
	Z8a(a, b);
	var d = 0;
	b = a.C * (Math.floor(b / a.C) + 1) - a.F;
	for (var e = a.A.Dd() - 1; 0 <= e; --e) {
		var g = a.A.get(e);
		if (g.end <= b) break;
		d = c(d, g)
	}
	return d
}
function Z8a(a, b) {
	var c = 0 == a.A.Dd() ? m : a.A.get(a.A.Dd() - 1);
	c && b < c.end - a.C && a.A.clear()
}
function $8a(a) {
	this.end = a
}
$8a.prototype.count = 0;
$8a.prototype.min = Number.MAX_VALUE;
$8a.prototype.max = Number.MIN_VALUE;

function a9a(a, b, c) {
	this.F = a;
	this.C = b;
	this.A = new X8a(1E3 * c)
}
function b9a(a, b) {
	return (a.A.get() + (b != m ? b : 1)) / (a.A.F / 1E3) <= a.C
}
function c9a(a, b) {
	var c = b != m ? b : 1;
	b9a(a, c) || f(new d9a(Pm("Query would cause ", a.F, " to exceed ", a.C, " qps.")));
	var d = a.A,
		e = ym();
	Z8a(d, e);
	var g = 0 == d.A.Dd() ? m : d.A.get(d.A.Dd() - 1);
	if (!g || e >= g.end) g = new $8a(d.C * (Math.floor(e / d.C) + 1)), d.A.add(g);
	g.count += c;
	g.min = Math.min(c, g.min);
	g.max = Math.max(c, g.max)
}
function d9a(a) {
	Am.call(this, a)
}
L(d9a, Am);

function QB(a) {
	this.C = new LB;
	this.W = new Dq(this.L, 3E4, this);
	this.na = new a9a(uCa, 1, 8);
	this.ea = q;
	this.R = new S(this);
	this.Ba = a || 10;
	this.R.A(this.C, Ud, this.Aa);
	this.R.A(this.C, lMa, this.L)
}
L(QB, M);
var RB = {
	jC: vl,
	METHOD: Yi,
	Fj: Dd,
	HEADERS: mg
};
QB.prototype.send = function(a, b, c, d) {
	if (!(this.yP() >= this.Ba)) {
		var e = {};
		e[RB.jC] = a;
		e[RB.METHOD] = b;
		e[RB.Fj] = c;
		e[RB.HEADERS] = d;
		this.Uma(e);
		this.L()
	}
};
QB.prototype.L = function() {
	if (0 < this.yP() && !this.W.lc() && !this.C.lc() && !this.ea) {
		this.W.lc();
		this.C.lc();
		var a = this.LZ();
		if (a) try {
			c9a(this.na, 1), this.C.send(a[RB.jC], a[RB.METHOD], a[RB.Fj], a[RB.HEADERS])
		} catch (b) {
			b instanceof d9a ? this.ea = l : f(b)
		}
	}
};
QB.prototype.Aa = function() {
	var a = this.C.Ff();
	this.C.Gn() || 400 <= a && 500 >= a ? this.s_() : this.W.start()
};
QB.prototype.O = function() {
	ko(this.R, this.W, this.C);
	QB.M.O.call(this)
};

function e9a(a, b) {
	QB.call(this, b);
	this.Y = a;
	this.K = a + bca;
	this.F = a + Nba;
	this.G = a + Vba;
	this.A = km.localStorage;
	y8a();
	var c = SB(this, this.K);
	if (!c || 1 > c) this.A.setItem(this.K, Za), this.A.setItem(this.F, Za), this.A.setItem(this.G, Za);
	this.L()
}
L(e9a, QB);
F = e9a.prototype;
F.Uma = function(a) {
	var b = SB(this, this.G);
	b && 1 == SB(this, this.K) && (this.A.setItem(this.G, String(b + 1)), this.A.setItem(this.Y + Mba + b, En(a)))
};
F.s_ = function() {
	var a = SB(this, this.F);
	a && 1 == SB(this, this.K) && (this.A.removeItem(this.Y + Mba + a), a++, this.A.setItem(this.F, String(a)), 0 == this.yP() && (this.A.setItem(this.F, Za), this.A.setItem(this.G, Za)))
};
F.LZ = function() {
	var a = SB(this, this.F);
	if (!a || 1 != SB(this, this.K)) return m;
	try {
		var b = this.A.getItem(this.Y + Mba + a);
		return b ? Cn(b) : m
	} catch (c) {
		return this.s_(), this.LZ()
	}
};
F.yP = function() {
	return SB(this, this.G) - SB(this, this.F)
};

function SB(a, b) {
	var c = parseInt(a.A.getItem(b), 10);
	return 0 > c || isNaN(c) ? m : c
}
F.O = function() {
	delete this.A;
	e9a.M.O.call(this)
};

function f9a(a) {
	QB.call(this, a);
	this.A = []
}
L(f9a, QB);
F = f9a.prototype;
F.Uma = function(a) {
	this.A.push(a)
};
F.s_ = function() {
	this.A.shift()
};
F.LZ = function() {
	return I(this.A[0]) ? this.A[0] : m
};
F.yP = function() {
	return this.A.length
};
F.O = function() {
	delete this.A;
	f9a.M.O.call(this)
};
nu++;

function TB(a, b, c, d, e, g, h) {
	this.F = {};
	this.ra = m;
	this.A = {};
	this.R = new S(this);
	this.L = !! b;
	this.K = !! g;
	this.G = h || m;
	this.C = m;
	c && y8a() ? this.C = new e9a(c, d) : this.C = new f9a(d);
	b = K(this.C.send, this.C);
	a = go(jo(), FAa) ? io(jo(), Kza) : a || r;
	a += mca;
	c = io(jo(), ch);
	go(jo(), FAa) && c && (a = Pv(a, ch, c));
	c = K(this.Nva, this);
	this.ra = new PB(a, c, k);
	this.ra.K = {
		"X-Same-Domain": Za
	};
	this.ra.G = b;
	this.R.A(this.ra, dh, this.Mva)
}
L(TB, bq);
var g9a = q;

function h9a(a, b, c) {
	a.F[b] = c
}
function i9a(a, b) {
	a.A.queueStartedAnachronistic = b
}
F = TB.prototype;
F.Zf = function(a, b) {
	var c = j9a(KCa, b);
	this.ra || f(a);
	this.ra.ju(a, c)
};
F.log = function(a, b) {
	var c = j9a(Rg, b);
	this.ra || f(a);
	this.ra.ju(a, c)
};

function ju(a, b, c) {
	return K(a.B3, a, b, c)
}
F.B3 = function(a, b, c) {
	var d = tn(arguments, 2);
	if (!this.ra) return a.apply(b, d);
	try {
		return a.apply(b, d)
	} catch (e) {
		this.Zf(e)
	}
};

function j9a(a, b) {
	var c = b ? Vn(b) : {};
	c.severity = a;
	return c
}
F.Mva = function(a) {
	var b = a.A.severity;
	b == Rg || b == $Pa ? this.dispatchEvent(Yi) : (b = Vn(a.error), a.error.propertyIsEnumerable($i) || (b.message = a.error.message), Xn(b, a.A), this.K || (this.L ? k9a(this, En(b)) : k9a(this)), this.dispatchEvent(Ki))
};

function k9a(a, b) {
	a.G ? a.G(b) : window.confirm(qqa) && w8a(window)
}
F.Nva = function(a, b) {
	for (var c in this.F) try {
		b[c] = this.F[c]()
	} catch (d) {}
	Xn(b, this.A);
	c = b.severity || KCa;
	g9a ? c == KCa ? c = ALa : c == Rg && (c = $Pa) : c == KCa && (g9a = l);
	b.severity = c
};
F.O = function() {
	TB.M.O.call(this);
	delete this.F;
	this.R.dispose();
	delete this.R;
	this.ra && this.ra.dispose();
	delete this.ra;
	this.C && this.C.dispose();
	delete this.C;
	delete this.A;
	delete this.G
};

function l9a(a) {
	this.F = a;
	this.A = {};
	this.C = [];
	for (var b = 0; b < a.length; b++) {
		var c = [];
		this.A[a[b]] = c;
		this.C.push(c)
	}
}
F = l9a.prototype;
F.CN = m;
F.La = function() {
	var a = new l9a([]),
		b = this.F;
	a.F = b.concat();
	for (var c = this.C, d = 0; d < c.length; d++) {
		var e = c[d].concat();
		a.C[d] = e;
		a.A[b[d]] = e
	}
	return a
};

function m9a(a) {
	!a.CN && a.F.length && (a.CN = at(a.F));
	a.CN && (a.CN.lastIndex = 0);
	return a.CN
}
function n9a(a, b, c, d) {
	if (!a.A[b]) return -1;
	a = a.A[b];
	c = vn(a, c);
	0 > c && (c = -c - (d ? 2 : 1));
	return 0 <= c && c < a.length ? a[c] : -1
}
F.indexOf = function(a, b) {
	return n9a(this, a, b, q)
};
F.lastIndexOf = function(a, b) {
	return n9a(this, a, b, l)
};
F.remove = function(a, b) {
	for (var c = this.C, d = b - a + 1, e = 0; e < c.length; e++) {
		var g = c[e],
			h = vn(g, a);
		0 > h && (h = -h - 1);
		var n = vn(g, b);
		0 > n && (n = -n - 2);
		for (g.splice(h, n - h + 1); h < g.length; h++) g[h] -= d
	}
};

function UB(a, b) {
	this.ra = a;
	this.C = new l9a(b);
	this.Jz(0, aaa)
}
L(UB, TVa);
UB.prototype.Jz = function(a, b) {
	for (var c = this.C, d = b.length, e = c.C, g = 0; g < e.length; g++) {
		var h = e[g],
			n = vn(h, a);
		for (0 > n && (n = -(n + 1)); n < h.length; n++) h[n] += d
	}
	if (3 > b.length) for (g = 0; g < b.length; g++) d = b.charAt(g), c.A[d] && gr(c.A[d], g + a);
	else if ((e = m9a(c)) && e.test(b)) for (e = m9a(c); g = e.exec(b);) d = g[0], g = g.index, gr(c.A[d], g + a)
};
UB.prototype.remove = function(a, b) {
	this.C.remove(a, b)
};
UB.prototype.A = function(a, b, c) {
	return this.C.A[a] ? (a = this.C.A[a] || m) && I(b) && I(c) ? (b = vn(a, b), 0 > b && (b = -b - 1), c = vn(a, c), 0 > c ? c = -c - 1 : c++, a.slice(b, c)) : a ? a : [] : UB.M.A.call(this, a, b, c)
};

function VB(a, b) {
	UB.call(this, a, b || []);
	this.F = {}
}
L(VB, UB);
var o9a = RegExp(Ga, kg),
	p9a = RegExp(sa, kg);
F = VB.prototype;
F.xl = r;
F.La = function() {
	var a = new VB(this.ra, []);
	a.C = this.C.La();
	a.F = {};
	for (var b in this.F) {
		for (var c = [], d = this.F[b], e = 0; e < d.length; e++) c[e] = d[e].La();
		a.F[b] = c
	}
	a.xl = this.xl;
	return a
};
F.ub = function() {
	return this.xl.length
};

function Ts(a, b) {
	return a.xl.charAt(b)
}
F.slice = function(a, b) {
	return this.xl.slice(a, b + 1)
};
F.indexOf = function(a, b) {
	var c = this.C.A[a] ? this.C.indexOf(a, b || 1) : m;
	return c != m ? c : this.xl.indexOf(a, b)
};
F.lastIndexOf = function(a, b) {
	var c = this.C.A[a] ? this.C.lastIndexOf(a, b != m ? b : this.ub()) : m;
	return c != m ? c : this.xl.lastIndexOf(a, b)
};
F.search = function(a, b, c, d) {
	a = WB(this, a, b);
	if (0 == a.length) return -1;
	if (!d) return a[c ? a.length - 1 : 0].start;
	if (c && 0 > d || !c && d >= this.ub() - 1) return -1;
	d = vn(a, d, function(a, b) {
		return a < b.start ? -1 : a > b.start ? 1 : 0
	});
	return 0 <= d ? a[d].start : (c = a[-d - (c ? 2 : 1)]) ? c.start : -1
};

function WB(a, b, c) {
	if (b == r) return [];
	var d = Mm(b).replace(o9a, Ira).replace(p9a, Hra),
		e = (I(c) ? c : 1) ? kg : zDa;
	c = d + nb + e;
	if (a.F[c]) return a.F[c];
	for (var g = [], d = RegExp(d, e); d.exec(a.xl) != m;) g.push(new xs(d.lastIndex - b.length, d.lastIndex - 1));
	return a.F[c] = g
}
F.Jz = function(a, b) {
	VB.M.Jz.call(this, a, b);
	var c = this.xl;
	this.xl = c.slice(0, a) + b + c.slice(a);
	this.F = {}
};
F.remove = function(a, b) {
	VB.M.remove.call(this, a, b);
	var c = this.xl;
	this.xl = c.slice(0, a) + c.slice(b + 1);
	this.F = {}
};
F.ob = function(a) {
	return this == a ? l : !a || !(a instanceof VB) ? q : this.xl == a.xl
};

function XB(a) {
	et.call(this, Ri, q9a);
	this.sc = go(jo(), Vza) ? qv() : m;
	a && this.update(a)
}
L(XB, et);
var q9a = Uu({
	a4a: xJa,
	c5a: yJa,
	PWa: Wi
});
F = XB.prototype;
F.Cc = m;
F.Wc = 0;
F.eo = function() {
	return [da]
};
F.Yj = D(l);
F.VH = D(l);

function Av(a) {
	return a.Cc
}
F.Eg = C(mk);
F.Cm = function(a) {
	a.sc || (a.sc = qv());
	this.sc.Cm(a.sc)
};
F.Oc = function(a, b) {
	XB.M.Oc.call(this, a, b);
	switch (a) {
		case xJa:
			this.Cc = b;
			break;
		case yJa:
			this.Wc = b;
			break;
		case Wi:
			go(jo(), Vza) ? b ? this.sc.update(b) : this.sc = qv() : b != m ? this.sc ? this.sc.update(b) : this.sc = new Zu(b) : this.sc = m
	}
};
F.Pa = function() {
	return r9a(this, q)
};
F.Jg = function() {
	return r9a(this, l)
};

function r9a(a, b) {
	var c = go(jo(), Uza),
		d = {};
	d.ls_nest = a.Wc;
	d.ls_id = a.Cc;
	c && (c = m, a.sc ? c = b ? a.sc.Jg() : a.sc.Pa() : (b && f(Error("Cannot omit inherit values when the text style is null")), c = {}, jt(c, Wk, l)), d.ls_ts = c);
	return d
}
F.Ga = function(a) {
	switch (a) {
		case yJa:
			return this.Wc;
		case xJa:
			return this.Cc;
		case Wi:
			return this.sc
	}
	return XB.M.Ga.call(this, a)
};
F.La = function() {
	var a = new XB;
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.Cc = this.Cc;
	a.Wc = this.Wc;
	a.sc = this.sc ? this.sc.La() : m
};
F.Tf = function(a) {
	return a == Wi
};
kt(function() {
	return new XB
});

function YB(a, b, c) {
	this.Y = nh;
	this.Aa = a;
	this.cb = b;
	this.Ba = c
}
L(YB, sB);
YB.prototype.aa = C(Fd);
YB.prototype.W = C(Ib);
YB.prototype.dca = function() {
	return Ri != this.Aa
};

function ZB(a) {
	return a + Qa + Qm()
};

function $B(a) {
	et.call(this, hg, s9a);
	a && this.update(a)
}
L($B, et);
$B.prototype.F = r;
var s9a = Uu({
	d_a: nDa
});

function jw(a) {
	return a.F
}
F = $B.prototype;
F.YS = D(q);
F.Yj = D(l);
F.Oc = function(a, b) {
	switch (a) {
		case nDa:
			this.F = b
	}
};
F.Pa = function() {
	var a = {};
	a.fs_id = this.F;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case nDa:
			return this.F
	}
	return $B.M.Ga.call(this, a)
};
F.$q = D(q);
F.yQ = function() {
	return [this.F]
};
F.La = function() {
	return new $B(this.Pa())
};
kt(function() {
	return new $B
});

function aC(a, b) {
	this.Y = bi;
	this.Ba = a;
	this.Na = b
}
L(aC, sB);
aC.prototype.K = C(Ib);
aC.prototype.qa = C(xc);

function bC(a, b, c, d) {
	this.Q = a;
	this.G = b;
	this.C = c;
	this.A = d || {};
	this.A.ts_va = l
}
L(bC, zB);
bC.prototype.Uc = function() {
	var a = (new Zu).Pa(),
		b = FB(k);
	jt(a, Wk, l);
	jt(b, Wk, l);
	ht(b, Wk, q, l);
	ht(this.A, Wk, q, l);
	for (var c in this.A) delete a[c];
	b = (new Zu(b)).Pa();
	c = this.Q.A.ba();
	var d = this.G;
	do {
		var e = !! EB(c.Ra(Qi, d)),
			g = Math.min(this.C, c.Ag(Qi, d));
		yB(this, new AB(this.Q, Wk, e ? b : a, d, g, l));
		d = g + 1
	} while (d <= this.C)
};

function cC(a, b, c, d) {
	this.Q = a;
	this.A = b;
	this.C = c;
	this.G = d || {}
}
L(cC, zB);
cC.prototype.Uc = function() {
	0 < this.A.length && (this.A = this.K());
	if (0 != this.A.length) {
		var a = this.Q.A,
			b = a.ba(),
			c = this.C,
			d = Nu(b, c),
			e = Ws(b.qa(), d),
			g = this.G;
		if (e && !EB(b.Ra(Qi, d))) {
			var c = ZA(b, Wk, c).Jg(),
				h;
			for (h in g) c[h] = g[h];
			g = c
		}
		a = a.A.F;
		for (h in a) g[h] = a[h];
		var a = b.A.Jf(zj, d).Pa(),
			c = b.A.Jf(Ri, d).Pa(),
			n = d <= b.qa().ub() - 1 ? b.Ie(Jj, Us(b.qa(), d)) : [];
		this.Qb(new aC(d, this.A));
		h = this.A;
		for (var e = [], p = 0; p < h.length; p++) {
			p = h.indexOf(da, p);
			if (0 > p) break;
			e.push(p)
		}
		if (0 < e.length && 0 < n.length) {
			p = e[0] + d;
			for (h = 0; h < n.length; h++) this.Qb(new tB(n[h],
			p))
		}
		for (h = 0; h < e.length; h++) n = e[h] + d, a.ps_hdid && (a = Vn(a), a.ps_hdid = ZB(mg)), yB(this, new AB(this.Q, zj, a, n, n, l)), yB(this, new AB(this.Q, Ri, c, n, n, l));
		a = d + this.A.length - 1;
		c = t9a(b.A.A);
		for (h = 0; h < c.length; h++) {
			var e = c[h],
				t;
			t = (n = ft[e]) ? n.$q() : l;
			var u;
			u = (n = ft[e]) ? n.cK() : l;
			if (!(t && u || lt(e))) {
				var n = b.Ra(e, d),
					p = b.Ra(e, a + 1),
					x = it(e),
					y = !n.ob(p);
				t = !t && y;
				u = !u && !n.ob(x) && Ys(b.qa(), d);
				if ((t || u) && !x.ob(n)) yB(this, new AB(this.Q, e, x.Pa(), d, a)), e == Qi && (p.Ig ? (g = {}, yB(this, new bC(this.Q, d, a))) : g = b.Ra(Wk, a + 1).Jg())
			}
		}
		Rn(g) || yB(this, new AB(this.Q, Wk, g, d, a))
	}
};
cC.prototype.qa = C(Eb);
cC.prototype.K = C(Eb);
cC.prototype.O = function() {
	cC.M.O.call(this);
	delete this.C;
	delete this.G
};

function u9a(a, b, c, d) {
	cC.call(this, a, b, c, d)
}
L(u9a, cC);
u9a.prototype.K = function() {
	var a = this.Q.A.ba(),
		b = Nu(a, this.C),
		c = this.qa();
	wz(a.qa(), b) && (c = c.replace(e3a, r));
	return c
};

function v9a(a) {
	this.A = a
};

function dC(a, b, c) {
	this.A = a;
	this.F = b;
	this.ra = c
}
L(dC, v9a);

function w9a(a) {
	(a = Is(a.A.A.getSelection())) || f(Error("No cursor selected range to delete."));
	return a
}
F = dC.prototype;
F.Ih = function(a, b, c) {
	return new cC(this, a, b, c)
};

function eC(a, b, c, d, e) {
	0 == b.length && f(Error("No ranges provided when creating DeleteTextOperation."));
	var g = [];
	b.sort(function(a, b) {
		return a.start - b.start
	});
	if (d = a.l3(b, d, e)) b = d.qu, g = d.yF;
	else for (d = 0; d < b.length; d++) g.push(b[d].start);
	return a.Rpa(b, g, c)
}
F.l3 = function(a, b) {
	return h8a(this.A.ba(), a, b)
};
F.Rpa = function(a, b, c) {
	return new DB(this, a, b, c)
};
F.EF = function() {
	var a = w9a(this);
	return eC(this, [Es(a)], l, l)
};
F.lJ = jm(45);
F.AL = jm(78);
F.Nq = jm(200);

function fC(a, b, c, d, e) {
	dC.call(this, a, c, e);
	this.va = b;
	this.C = d
}
L(fC, dC);
F = fC.prototype;
F.Ih = function(a, b, c) {
	return new u9a(this, a, b, c)
};
F.l3 = function(a, b, c) {
	var d = m,
		e;
	c || (d = i8a(this.A.ba(), a), e = d.yF, a = d.qu);
	return (a = fC.M.l3.call(this, a, b, c)) ? {
		qu: a.qu,
		yF: e ? e : a.yF
	} : d
};
F.Rpa = function(a, b, c) {
	return new KB(this, a, b, k, k, c)
};
F.EF = function() {
	var a = w9a(this),
		b = this.A.ba();
	a.F.A() != a.A && a.F.A() != a.C + 1 && f(Error("mark =" + a.F.A() + " must be on start or end"));
	var c = i8a(b, [Es(a)]),
		b = h8a(b, c.qu, l),
		c = c.yF;
	jn(c) && f(Error("insertIndices cannot be empty"));
	var a = a.F.A(),
		d = c[0],
		e = Math.abs(c[0] - a);
	if (1 < c.length) {
		var g = c.length - 1;
		Math.abs(c[g] - a) < e && (d = c[g])
	}
	c = d;
	b = b.qu;
	0 == b.length ? b = m : b[0].start <= c && c <= b[0].end ? b = b[0] : (a = b.length - 1, b = b[a].start <= c && c <= b[a].end ? b[a] : m);
	return new KB(this, b ? [b] : [], [c], k, k, l)
};
F.lJ = jm(44);
F.AL = jm(77);
F.Nq = jm(199);

function x9a() {}
x9a.prototype.C = kq;

function y9a(a) {
	this.F = a
};

function gC(a) {
	this.F = Bwa;
	this.C = a
}
L(gC, y9a);
xm(hm().prototype, j8a.prototype);

function hC(a, b) {
	this.Y = a;
	for (var c = [], d = 0; d < b.length; d++) {
		var e = b[d];
		e.gx() ? c.push.apply(c, e.Ha.concat()) : c.push(e)
	}
	this.Ha = c
}
L(hC, k8a);
hC.prototype.gx = kq;

function iC(a) {
	hC.call(this, Ae, a);
	this.na = a;
	a: {
		a = this.na;
		for (var b = !! a.length, c = 0; c < a.length; c++) if (!a[c].Ht()) {
			a = q;
			break a
		}
		a = b
	}
	this.Ba = a;
	a = this.na;
	b = 1;
	for (c = 0; c < a.length; c++) b += a[c].$V();
	this.Na = b
}
L(iC, hC);
iC.prototype.Ht = C(Ib);
iC.prototype.$V = C(xc);

function jC() {
	hC.call(this, De, [])
}
L(jC, hC);
mm(jC);
jC.prototype.$V = D(0);

function Uw(a) {
	switch (a.length) {
		case 0:
			return jC.ya();
		case 1:
			return a[0];
		default:
			return new iC(a)
	}
}
function z9a(a, b) {
	for (var c = [], d = 0; d < b.length; d++) c.push(a.ri(b[d]));
	return c
};

function A9a(a, b, c, d, e, g, h, n) {
	this.ea = a;
	this.C = b;
	this.G = c;
	this.Y = d;
	this.L = e;
	this.A = g;
	this.W = h;
	this.K = n;
	this.F = B9a(this.C) + B9a(this.G)
}
A9a.prototype.xa = C(If);

function C9a(a) {
	for (var b = [], c = 0, d; d = a[c]; c++) d.Ht() || b.push(d);
	return b
}
function B9a(a) {
	for (var b = 0, c = 0, d; d = a[c]; c++) b += d.$V();
	return b
};

function kC(a, b) {
	this.F = a;
	this.Q = b
}
L(kC, M);
F = kC.prototype;
F.KF = m;
F.gd = m;
F.apply = function(a) {
	var b = qu.ya(),
		c = HXa(b, this.eda());
	this.KF = new m8a;
	this.gd = m;
	var d = this.Q.A;
	D9a(d, this.fda());
	var e = d.A.getSelection();
	this.A(a);
	a = new l8a(this.KF.A, this.KF.C);
	var g = d.A.getSelection(),
		h = this.gd || new gC(this.F);
	lC(d, h, this.VE());
	IXa(b, c);
	return new A9a(this.F, a.A, a.C, e, g, this.VE(), this.nL(), h)
};
F.VE = kq;
F.fda = jq;
F.toString = function() {
	return bia + this.F
};
F.nL = jq;
F.Ria = kq;
F.Qb = function(a) {
	var b = this.Q;
	this.VE() && this.Ria() ? (a = o8a(b.A, a), n8a(this.KF, a)) : (a = b.A.Qb(a), this.KF.A.push(a))
};

function mC(a, b, c, d) {
	Bu(a.Q.A, b, a.VE(), c, d)
}
function nC(a, b) {
	n8a(a.KF, b.apply())
}
F.eda = iq([]);

function oC(a, b, c) {
	kC.call(this, cwa, a);
	this.G = b;
	this.C = c
}
L(oC, kC);
oC.prototype.A = function(a) {
	a = a.NCa;
	for (var b = 0; b < a.length; b++) this.Qb(a[b]);
	(b = this.Q.A.A.getSelection()) && mC(this, this.G.C(b, a), l)
};
oC.prototype.VE = jq;
oC.prototype.fda = C(Jb);

function E9a(a, b) {
	this.G = a;
	this.F = b
}
L(E9a, x9a);
E9a.prototype.A = function(a) {
	return new oC(a, this.G, this.F)
};

function F9a(a) {
	this.NCa = a
};

function e0a(a, b) {
	this.F = a;
	this.C = b
}
e0a.prototype.A = C($b);

function d0a(a, b) {
	this.F = a ? AAa : Uya;
	this.A = b
}
L(d0a, y9a);

function G9a(a, b, c, d, e, g) {
	this.Q = a;
	this.A = b;
	this.C = c;
	this.F = d;
	this.G = e;
	this.ra = g;
	this.R = new S(this);
	this.R.A(this.C, gj, ju(this.ra, this.Txa, this)).A(this.Q.A, Lf, this.Sxa)
}
L(G9a, M);
F = G9a.prototype;
F.bda = l;
F.Ca = im("bda");
F.apply = function(a, b) {
	var c = a.A(this.Q);
	if ((!c.VE() || this.bda) && a.C(this.Q)) if ((c = c.apply(b)) && (c.C.length || c.G.length)) {
		c.A && this.C.xR(Uw(C9a(c.C)));
		this.A.push(c, a, b);
		var d = this.Q.A;
		d.dispatchEvent(new H9a(d, c.K, c.A))
	}
};

function c0a(a, b, c, d, e) {
	var g = a.Q.A;
	D9a(g, q);
	g.Qb(b);
	Bu(g, c, l, l);
	lC(g, d, e);
	a.C.xR(b);
	g.dispatchEvent(new H9a(g, d, e))
}
F.Txa = function(a) {
	this.apply(this.F, new F9a(a.A))
};
F.Sxa = function(a) {
	a.A && !a.wu && this.A.G.stop()
};
F.O = function() {
	O(this.R);
	delete this.R;
	delete this.F;
	delete this.G;
	G9a.M.O.call(this)
};

function I9a(a, b, c, d, e, g, h) {
	kC.call(this, Jza, a);
	this.G = b;
	this.W = c;
	this.L = d;
	this.K = e;
	this.sE = g;
	this.C = h
}
L(I9a, kC);
I9a.prototype.A = function(a) {
	a = J9a(this, a);
	var b = K9a(a.eba);
	b || (b = ZB(fOa), b = pRa(b, a.eba.length));
	for (var c = [], d = 0; d < a.fba.length; d++) {
		var e = a.fba[d],
			e = this.C.Ap(e, b[d]),
			e = this.L.oE([e], c),
			c = e.C,
			e = e.A[0],
			g = this.C.Cp(e),
			g = g.gx() ? g.Ha.concat() : [g];
		sn(c, g);
		this.Qb(e)
	}
	mC(this, this.K.C(a.Axa, c), l)
};

function J9a(a, b) {
	var c = L9a(a.G, a.Q),
		d = a.W.A(c),
		e = [],
		g = [],
		h = new S(a);
	h.A(c.A, gCa, function(a) {
		a = a.wd;
		var b = c.A.ba();
		e.push(this.sE.PK(a, b));
		g.push(this.sE.QK(a, b))
	});
	d = d.apply(b);
	h.dispose();
	return {
		fba: e,
		eba: g,
		Axa: d.L
	}
};

function M9a(a, b, c, d, e, g, h) {
	this.F = a;
	this.W = b;
	this.K = c;
	this.sE = d;
	this.L = e;
	this.G = h
}
M9a.prototype.A = function(a) {
	return new I9a(a, this.G, this.F, this.W, this.K, this.sE, this.L)
};
M9a.prototype.C = function(a) {
	return this.F.C(a)
};

function K9a(a) {
	for (var b = {}, c = 0; c < a.length; c++) {
		var d = a[c];
		if (0 == d.length) return m;
		for (var e = 0; e < d.length; e++) {
			var g = d[e];
			g in b || (b[g] = 0);
			b[g]++
		}
	}
	d = [];
	for (g in b) d.push(g);
	d.sort(function(a, c) {
		return wn(b[c], b[a])
	});
	g = [];
	for (c = 0; c < d.length; c++) N9a(g, d[c], a);
	return g
}
function N9a(a, b, c) {
	for (var d = 0; d < c.length; d++) if (!a[d]) for (var e = 0; e < c[d].length; e++) if (c[d][e] == b) {
		a[d] = b;
		break
	}
};

function O9a(a, b, c, d, e, g) {
	this.$d = a;
	this.K = b;
	this.F = c;
	this.sE = d;
	this.G = e;
	this.C = g;
	this.A = q
}
O9a.prototype.apply = function(a, b) {
	this.A && (a = new M9a(a, this.K, this.F, this.sE, this.G, 0, this.C));
	this.$d.apply(a, b)
};

function P9a(a, b, c) {
	this.L = a;
	this.K = b;
	this.A = [];
	this.C = [];
	this.F = c;
	this.G = new Dq(G, 2E3, this)
}
L(P9a, M);
F = P9a.prototype;
F.HP = l;
F.I$ = m;
F.ii = 0;
F.push = function(a, b, c) {
	a.A && (this.I$ = new e0a(b, c));
	a: {
		b = a.C;
		c = 0;
		for (var d; d = b[c]; c++) if (d.zaa()) {
			b = l;
			break a
		}
		b = q
	}
	if (b) this.A.length = 0,
	this.C.length = 0,
	this.HP = l,
	this.ii = 0;
	else if (a.C.length || a.G.length || !a.A) if (a.A && (this.HP = l, Q9a(this, this.C)), a.A || 0 < this.A.length || !a.A && 0 < this.C.length) {
		if (this.F) for (b = (a.A || 0 < this.A.length) && !a.A && 0 < this.C.length ? 2 * a.F : a.F; b + this.ii > this.F;) {
			c = 0 < this.A.length ? this.A : this.C;
			if (0 == c.length) break;
			d = this.ii;
			var e = c.pop();
			for (this.ii = d - e.F; 0 < c.length && !c[c.length - 1].A;) d = this.ii, e = c.pop(), this.ii = d - e.F
		}
		if (a.A || 0 < this.A.length) a: if (this.F && (this.ii += a.F), a.W) {
			if (this.G.lc() && 0 < this.A.length && (c = this.A[0], a.xa(), c.xa() == a.xa())) {
				b = this.A;
				c.xa() != a.xa() && f(Error("Cannot merge edit result type " + c.xa() + " to edit result type " + a.xa()));
				d = [];
				sn(d, c.C, a.C);
				e = [];
				sn(e, a.G, c.G);
				c = new A9a(c.xa(), d, e, c.Y, a.L, c.A, c.W, new gC(c.xa()));
				b[0] = c;
				break a
			}
			this.A.unshift(a);
			this.G.start()
		} else this.A.unshift(a),
		this.G.stop();
		!a.A && 0 < this.C.length && (this.F && (this.ii += a.F), this.C.unshift(a))
	}
};

function Q9a(a, b) {
	if (a.F) for (var c = 0, d; d = b[c]; c++) a.ii -= d.F;
	b.length = 0
}
function b0a(a, b) {
	for (var c = [], d = 0; d < b.length; d++) {
		var e = b[d];
		if (e.A) {
			a.F && (a.ii -= e.F);
			pn(b, d);
			var d = e,
				e = c,
				g = a.L,
				h = a.K;
			if (e.length) var n = g.oE(d.G, e),
				c = n.A,
				g = g.IP(d.C, n.C, l),
				n = h.C(d.Y, e),
				e = h.C(d.L, e),
				d = new A9a(d.ea, g, c, n, e, d.A, d.W, d.K);
			return d
		}
		c.unshift(Uw(e.C))
	}
	Q9a(a, b);
	return m
}
F.O = function() {
	O(this.G);
	delete this.G;
	delete this.L;
	delete this.K;
	P9a.M.O.call(this)
};

function pC(a, b) {
	kC.call(this, a, b)
}
L(pC, kC);
pC.prototype.C = iq([]);
pC.prototype.eda = function() {
	return sYa(this.C())
};
var R9a = new Uv;

function qC(a, b) {
	R9a.set(a, b)
};

function S9a(a) {
	this.F = a
}
L(S9a, x9a);
S9a.prototype.A = function(a) {
	return R9a.execute(this.F, a)
};

function T9a() {}
T9a.prototype.oi = function() {
	return jC.ya()
};

function U9a(a, b) {
	R.call(this, gCa, a);
	this.wd = b
}
L(U9a, R);

function V9a(a, b, c, d) {
	R.call(this, Jf, a);
	this.wd = b;
	this.A = c;
	this.C = d
}
L(V9a, R);

function rC(a, b, c, d) {
	R.call(this, a, b);
	this.A = c;
	this.C = d
}
L(rC, R);

function W9a(a, b, c) {
	rC.call(this, Kf, a, b, c)
}
L(W9a, rC);

function X9a() {}
L(X9a, bq);

function H9a(a, b, c) {
	rC.call(this, hCa, a, b, c)
}
L(H9a, rC);

function Y9a(a, b, c, d, e, g) {
	R.call(this, Lf, a);
	this.C = b;
	this.A = c;
	this.wu = d;
	this.G = e;
	this.F = g || m
}
L(Y9a, R);

function Z9a(a, b, c, d, e, g) {
	this.L = a;
	this.A = b;
	this.C = c;
	this.F = d;
	this.G = e;
	this.K = !! g
}
L(Z9a, X9a);
F = Z9a.prototype;
F.f4 = q;
F.JW = q;
F.IR = q;
F.Fu = m;
F.KW = q;
F.LW = q;
F.j8 = k;
F.ba = C(oc);

function Bu(a, b, c, d, e) {
	var g = a.A.getSelection();
	a.A.setSelection(b, c);
	$9a(a, g, c, d, e)
}
function D9a(a, b) {
	a.IR = b;
	a.f4 = l;
	a.Fu = a.A.getSelection()
}
function lC(a, b, c) {
	a.dispatchEvent(new W9a(a, b, c));
	a.JW && (a.dispatchEvent(new Y9a(a, a.Fu, a.KW, l, a.LW, a.j8)), a.JW = q);
	a.IR = q;
	a.f4 = q;
	a.Fu = m
}
F.Qb = function(a) {
	a$a(this, a);
	this.Fu && (this.Fu = this.G.C(this.Fu, [a]));
	return a
};

function o8a(a, b) {
	var c = a$a(a, b, l);
	a.Fu && (a.Fu = a.G.C(a.Fu, [b]));
	return new l8a([b], [c])
}

function a$a(a, b, c) {
	if (b.gx()) return b$a(a, b.Ha.concat(), c);
	if (b.d_()) {
		c$a(a, b);
		var d = a.ba(),
			e = a.C.Vi(b, d);
		d.clear();
		b.gx();
		a.dispatchEvent(new V9a(a, b, e, a.IR));
		e = a.A.getSelection();
		a.A.aj();
		$9a(a, e, l, q);
		c = c ? a.F.oi(b, d) : m;
		b$a(a, b.Ba);
		return c
	}
	d = a.ba();
	c = c ? a.F.oi(b, d) : m;
	c$a(a, b);
	e = a.C.Vi(b, d);
	a.C.apply(b, d) || (b.gx(), a.dispatchEvent(new V9a(a, b, e, a.IR)));
	return c
}
function b$a(a, b, c) {
	for (var d = [], e = 0; e < b.length; e++) d.unshift(a$a(a, b[e], c));
	return c ? Uw(d) : m
}

function c$a(a, b) {
	a.K && (b.gx(), a.dispatchEvent(new U9a(a, b)))
}
function $9a(a, b, c, d, e) {
	a.f4 ? a.JW ? (a.KW = a.KW || c, a.LW = a.LW || d, a.j8 = k) : (a.JW = l, a.KW = c, a.LW = d, a.j8 = e) : a.dispatchEvent(new Y9a(a, b, c, q, d, e))
};

function d$a(a, b, c, d, e, g) {
	Z9a.call(this, a, b, c, d, e, g)
}
L(d$a, Z9a);

function sC() {}
mm(sC);
F = sC.prototype;
F.contains = D(q);
F.US = jm(56);
F.max = function() {
	f(Error("Empty Range has no max."))
};
F.ob = function(a) {
	return a.jc()
};
F.TS = jm(170);
F.jc = D(l);
F.min = function() {
	f(Error("Empty ranges has no min."))
};
F.toString = D("[Empty Range]");

function tC(a, b) {
	a > b && f(Error("Parameter min cannot be greater than Parameter max."));
	this.C = a;
	this.A = b
}
F = tC.prototype;
F.contains = function(a) {
	return this.C <= a && this.A >= a
};
F.US = jm(55);
F.max = C(Eb);
F.ob = function(a) {
	return a.jc() ? q : a.min() === this.C && a.max() === this.A
};
F.TS = jm(169);
F.jc = D(q);
F.min = C(Jb);
F.toString = function() {
	return Gra + this.C + Ma + this.A + cd
};

function uC(a, b) {
	return a <= b ? new tC(a, b) : sC.ya()
}
function e$a(a, b, c) {
	return a == b ? a : a >= b ? a + c : a
}
function f$a(a) {
	if (0 == a.length) return sC.ya();
	for (var b = a[0], c = a[0], d = 0; d < a.length; d++) {
		var e = a[d];
		b > e && (b = e);
		c < e && (c = e)
	}
	return uC(b, c)
}
function g$a(a, b) {
	var c;
	c = Math.min(a - 1, b.max()) - b.min() + 1;
	c = Math.max(0, c);
	return a - c
}
function h$a(a, b) {
	var c = g$a(a.min(), b),
		d = b.contains(a.max()),
		d = g$a(a.max(), b) - (d ? 1 : 0);
	return uC(c, d)
};
xm(hm().prototype, hm().prototype);

function i$a(a, b) {
	this.A = a;
	this.ra = b
}
function j$a(a) {
	return !Ps[a] || a == na
}
function k$a(a) {
	return !Ps[a]
}
function l$a(a) {
	return !Ps[a]
}

function m$a(a, b, c) {
	var d = n$a(a, c.F, q),
		e;
	var g = c.A;
	g || f(Error("The cursor marked range of the selecton is null!"));
	var h = g.F;
	h.A() != g.A && h.A() != g.C + 1 ? (a.ra.log(Error(dqa)), e = new Ds(g.A, g.C, new ws(g.A, h.C))) : e = g;
	var g = d.F,
		h = g.A(),
		n = e.F,
		p = n.A(),
		t = 1 == c.C.length - c.G.length,
		u = h == Es(d).end + 1,
		x = p == Es(e).end + 1;
	b = 0 == b.Lb.xa() && n.A() < b.Lb.A();
	var y;
	y = Es(c.F);
	var B = Es(c.A),
		E = a.A.qa().ub() - 1;
	if (1 > y.start || 1 > B.start || y.start > E || B.start > E || 1 > y.end || 1 > B.end || y.end > E || B.end > E) a.ra.log(Error(afa)), y = l;
	else {
		b: {
			y = c.C;
			B = a.A.qa();
			for (E = 0; E < y.length; E++) if (Ss(B, y[E].start) != Ss(B, y[E].end)) {
				y = q;
				break b
			}
			y = l
		}
		y ? y = q : (a.ra.log(Error(qea)), y = l)
	}
	if (y || t && d.A != e.A && d.C != e.C) return o$a(a, p);
	c = c.G;
	if (0 != c.length) {
		for (B = 0; B < c.length; B++) if (y = c[B], y.start = vC(a, y.start, j$a, l), y.end = vC(a, y.end, k$a, q), -1 == y.start || -1 == y.end || y.start > y.end) pn(c, B), B--;
		xn(c, Fs);
		for (B = 0; B < c.length - 1; B++) c[B].end >= c[B + 1].start && (c[B] = new xs(c[B].start, Math.max(c[B].end, c[B + 1].end)), pn(c, B + 1), B--)
	}
	y = t && u;
	B = e;
	e = wC(a, Es(B).start, j$a, b);
	b = p$a(a, y, B, b);
	b = new xs(e, b);
	if (q$a(b, p, x, h, u)) return Ls(new ws(b.start));
	e = x ? b.end + 1 : b.start;
	x = n.C;
	y = Vs(a.A.qa(), b.start) + 1;
	e >= y && (e > y && a.ra.log(Error(eqa)), e = y, x = l);
	e = new ws(e, x);
	e = new Ds(b.start, b.end, e);
	if (t) {
		b.start > h || b.end < h - 1 ? (a.ra.log(Error(jqa)), d = l) : d = q;
		if (d) return o$a(a, b.start);
		d = new Ds(b.start, b.end, g)
	} else {
		x = d;
		t = wC(a, Es(x).start, j$a, l);
		x = p$a(a, u, x, q);
		t = new xs(t, x);
		x = e;
		As(Es(d), Es(x)) ? (a.ra.log(Error(lqa)), d = l) : d = q;
		if (d) return o$a(a, b.start);
		q$a(t, p, q, h, u) ? (g = new ws(b.start, n.C), d = new Ds(b.start, b.end,
		g)) : d = new Ds(t.start, t.end, g)
	}
	r$a(c, d);
	r$a(c, e);
	return Ns(e, d, c)
}
function p$a(a, b, c, d) {
	return b && !k$a(Ts(a.A.qa(), Es(c).end)) ? Es(c).end + 1 : wC(a, Es(c).end, k$a, d)
}
function q$a(a, b, c, d, e) {
	return a.start > a.end || a.start == a.end && !e && !c || a.start == a.end && e && a.end == d || a.start == a.end && c && a.end == b
}
function r$a(a, b) {
	for (var c = 0; c < a.length; c++) As(a[c], Es(b)) && (pn(a, c), c--)
}

function o$a(a, b) {
	var c = a.A.qa().ub() - 1,
		d = a.A.qa();
	if (1 <= b && b <= c && !Ps[Ts(d, b)]) return Ls(new ws(b));
	if (1 > b || b > c) b = 1;
	return Ls(new ws(Vs(d, b)))
}
function n$a(a, b, c) {
	b || f(Error("The anchor marked range of the selection is null!"));
	var d = b.F,
		e = wC(a, d.A(), l$a, d.A() > (b.C + b.A) / 2);
	return e != d.A() ? (c || a.ra.log(Error(iqa)), a = new ws(e, d.C), c = Math.min(b.A, e), b = Math.max(b.C, e - 1), new Ds(c, b, a)) : b
}

function s$a(a, b, c) {
	if (0 != b.xa()) return b;
	c = c ? 0 == c.xa() && b.A() < c.A() : q;
	var d = b.A(),
		e = d;
	Zs(a.A.qa(), e) && (e += 0 == e ? 1 : -1);
	e = wC(a, e, l$a, c);
	return e != d ? new ws(e, b.C) : b
}
function wC(a, b, c, d) {
	d = !! d;
	var e = a.A.qa().ub(),
		g = b;
	if (0 >= b || b >= e) a.ra.log(Error(gqa)), 2 > e && f(Error("The spacers are not long enough.")), g = 0 >= b ? 1 : e - 1;
	b = vC(a, g, c, d); - 1 == b && (b = vC(a, g, c, !d), -1 == b && f(Error("Could not find a safe spacer for the selection!")));
	return b
}

function vC(a, b, c, d) {
	a = a.A.qa();
	var e = a.ub();
	if (d) for (; 0 < b; b--) {
		if (c(Ts(a, b))) return b;
		if (Zs(a, b)) break
	} else for (; b < e; b++) {
		if (c(Ts(a, b))) return b;
		if (Zs(a, b)) break
	}
	return -1
};

function t$a(a, b) {
	this.ra = a;
	this.A = b;
	this.C = Ls(new ws(1));
	this.F = {};
	this.G = new i$a(this.A, this.ra)
}
F = t$a.prototype;
F.ba = C(Eb);
F.Ne = C(Jb);
F.getSelection = C(Jb);

function qt(a) {
	return Nu(a.A, Hs(a.getSelection()))
}
function Tw(a) {
	var b = a.getSelection(),
		c = b.A;
	return c ? c.A : Nu(a.A, b.Lb)
}
function Jx(a) {
	var b = a.A.qa(),
		c = a.C.A;
	if (!c) return [Us(b, qt(a))];
	var b = a.A.ic(zj),
		d = [];
	u$a(a, b, Es(c), d);
	return d
}

function u$a(a, b, c, d) {
	var e = vn(b, c.start),
		e = 0 > e ? -e - 1 : e;
	a = Us(a.A.qa(), c.end);
	a = vn(b, a);
	for (c = e; c <= a; c++) hn(d, b[c]) || d.push(b[c])
}
function xC(a) {
	var b = a.A.qa(),
		c = a.C.C;
	if (0 == c.length) return [Us(b, qt(a))];
	for (var b = a.A.ic(zj), d = [], e = 0; e < c.length; e++) u$a(a, b, c[e], d);
	xn(d);
	return d
}
function mw(a) {
	var b = a.C.A,
		c = b ? b.A : Nu(a.A, a.C.Lb),
		b = b ? b.C : Nu(a.A, a.C.Lb);
	a = a.A.qa();
	Ts(a, c) == na && c++;
	return new xs(Rs(a, c), Us(a, b))
}
F.aj = function() {
	this.C = Ls(new ws(1))
};
F.setSelection = function(a, b) {
	var c = Ks(a) ? m$a(this.G, this.C, a) : Ls(s$a(this.G, a.Lb, this.C.Lb)),
		d = this.C.Lb,
		e = a.Lb;
	!Rn(this.F) && (b && !e.ob(d)) && (this.F = {});
	this.C = c
};

function Kx(a, b) {
	var c = a.C,
		d = c.A;
	if (d) {
		if (lt(b)) if (b == zj) var e = a.A.qa(),
			c = Rs(e, d.A),
			d = Us(e, d.C);
		else a.ra.log(Error(ana + b)), c = d.A, d = d.C;
		else c = a.A.Zh(b, d.A), d = a.A.Ag(b, d.C) || a.A.qa().ub() - 1;
		return a.A.Y.get(b, c, d)
	}
	return b == Wk ? yC(a).Jg() : ZA(a.A, b, c.Lb).Jg()
}
function yC(a) {
	var b = ZA(a.A, Wk, a.C.Lb).La();
	b.update(a.F);
	return b
};

function v$a(a, b) {
	this.A = a;
	this.C = b
}
function L9a(a, b) {
	var c = b.A.ba(),
		d = new w$a(c.ra, c.Ha, c.ea, c.Aa, c.Ba, c.W, c.K);
	d.K = c.K.La();
	d.W = c.W.concat();
	d.F = c.F.La();
	var e = c.C,
		g = d.C;
	g.C = e.C.La();
	g.A = {};
	for (var h in e.A) g.A[h] = e.A[h].La(x$a);
	g.F = {};
	for (var n in e.F) g.F[n] = e.F[n].La();
	g.mP = e.mP;
	e = c.A;
	g = d.A;
	g.L = e.L.La();
	g.A = e.A.La();
	g.G = e.G;
	d.G = c.G.La();
	d.L = c.L.La();
	c = new t$a(b.ra, d);
	c.setSelection(b.A.A.getSelection(), q);
	d = new d$a(d, c, a.A, new T9a, a.C, l);
	return new fC(d, b.va, b.F, b.C, b.ra)
};

function y$a(a, b, c) {
	this.A = b;
	b.Ca(l);
	this.C = c;
	this.Q = a
}
L(y$a, M);
F = y$a.prototype;
F.t8 = l;
F.s3 = q;
F.DU = l;
F.Ca = im("t8");

function z$a(a, b) {
	if (a.t8 && a.DU) return l;
	var c = b == Me || b == Je;
	return a.t8 ? c : !a.s3 ? q : c || a.DU && (b == eAa || b == Pe)
}
F.execute = function(a, b) {
	z$a(this, a) && Vr(R9a.A, a) && this.C.apply(new S9a(a), b)
};
F.O = function() {
	O(this.A);
	y$a.M.O.call(this)
};

function A$a(a, b, c, d, e, g, h, n, p) {
	var t = new P9a(b, c);
	p = e = new G9a(d, t, e, new E9a(c, q), new E9a(c, l), p);
	go(jo(), fGa) && (p = new O9a(e, b, c, h, n, new v$a(g, c)), p.A = 3 == a);
	return new y$a(d, e, p)
};

function B$a(a, b) {
	var c = {}, d;
	for (d in a) {
		var e = q,
			g = b.A.A.get(d) || m;
		if (g) {
			var h = {};
			h[d] = a[d];
			b.wg(h) ? e = c[g] = l : c[g] = q
		}
		e || (bWa(b.A.A).get(d) ? a[d] && f(Error("Invalid true property found for " + d)) : b.Tf(d) ? (e = b.Ga(d), e = B$a(a[d], e), c[d] = e) : c[d] = a[d])
	}
	return c
};

function zC() {}
zC.prototype.A = function(a, b, c) {
	(a = c.Fb(a)) || f(Error("Invalid list id"));
	return a.$f(b).Eg()
};
zC.prototype.C = function(a, b, c, d) {
	var e = b.Eg(),
		g = b.Cc;
	if (!e && !g) return b = b.La(), e = {}, jt(e, Wk), a = {}, a.ls_ts = e, b.update(a), b;
	if (e && !dt(b)) return b;
	if (!g && e) return b = b.La(), it(Wk).Cm(b.Eg()), b;
	a = this.A(g, b.Wc, d, a, c);
	b = b.La();
	if (!e) return e = {}, e.ls_ts = a.Pa(), b.update(e), b;
	a.Cm(b.Eg());
	return b
};
zC.prototype.F = function(a, b, c, d, e) {
	if (!b.ls_ts) return b;
	c = a.Jf(Ri, d);
	var g = b.ls_id || c.Cc;
	if (!g) return b;
	var h = {}, n;
	for (n in b) if (n != Wi) h[n] = b[n];
	else {
		var p = B$a(b[n], this.A(g, b.ls_nest || c.Wc, e, a, d));
		h[n] = p
	}
	return h
};
zC.prototype.G = D(Ri);

function C$a() {}
L(C$a, zC);
C$a.prototype.A = function(a, b, c, d, e) {
	a = C$a.M.A.call(this, a, b, c, d, e);
	if (!dt(a)) return a;
	b = d.Ii();
	d = d.Yl(zj, e);
	d = b.Eg(d.eh);
	return kWa(a, d)
};

function AC(a) {
	this.A = D$a;
	this.sc = new Zu;
	this.F = new xx;
	a && this.update(a)
}
L(AC, bt);
var D$a = Uu({
	z5a: pk,
	PWa: qk
}),
	E$a = [pk, qk];
F = AC.prototype;
F.La = function() {
	var a = new AC({});
	this.ke(a);
	return a
};
F.Eg = C(mk);
F.Ra = function(a) {
	switch (a) {
		case Wk:
			return this.sc;
		case zj:
			return this.F;
		default:
			return it(a)
	}
};
F.Pa = function() {
	var a = {};
	a.sdef_ps = this.F.Pa();
	a.sdef_ts = this.sc.Pa();
	return a
};
F.Oc = function(a, b) {
	switch (a) {
		case pk:
			this.F.update(b);
			break;
		case qk:
			this.sc.update(b)
	}
};
F.Ga = function(a) {
	switch (a) {
		case pk:
			return this.F;
		case qk:
			return this.sc
	}
	return AC.M.Ga.call(this, a)
};
F.Tf = function(a) {
	return a == pk || a == qk
};
F.Sr = function() {
	return E$a
};

function BC(a) {
	var b = {}, c = a,
		d = {};
	Hx(c) || (c = 6);
	101 == c && (d.ts_ff = qja, d.ts_it = l, go(jo(), Oe) ? d.ts_fgc2 = {
		clr_type: 0,
		hclr_color: Zaa
	} : d.ts_fgc = Zaa);
	d.ts_fs = 11 + F$a(c) - 11;
	a: switch (c) {
		case 0:
			c = q;
			break a;
		case 101:
			c = q;
			break a;
		default:
			c = l
	}
	d.ts_bd = c;
	jt(d, Wk, l);
	ht(d, Wk, q, l);
	b.sdef_ts = d;
	d = {};
	Hx(a) || (a = 6);
	switch (a) {
		case 0:
			d.ps_sa = 0;
			d.ps_sb = 0;
			break;
		case 100:
			d.ps_sa = 6;
			d.ps_sb = 24;
			break;
		case 101:
			d.ps_sa = 4;
			d.ps_sb = 18;
			break;
		case 1:
			d.ps_sa = 6;
			d.ps_sb = 24;
			break;
		case 2:
			d.ps_sa = 4;
			d.ps_sb = 18;
			break;
		case 3:
			d.ps_sa = 4;
			d.ps_sb = 14;
			break;
		case 4:
			d.ps_sa = 2;
			d.ps_sb = 12;
			break;
		case 5:
			d.ps_sa = 2;
			d.ps_sb = 11;
			break;
		case 6:
			d.ps_sa = 2, d.ps_sb = 10
	}
	jt(d, zj, l);
	ht(d, zj, q, l);
	b.sdef_ps = d;
	return new AC(b)
}
function F$a(a) {
	switch (a) {
		case 1:
			return 24;
		case 2:
			return 18;
		case 3:
			return 14;
		case 4:
			return 12;
		case 5:
			return 11;
		case 6:
			return 10;
		case 100:
			return 36;
		case 101:
			return 24;
		default:
			return 11
	}
};

function CC(a) {
	et.call(this, qg, G$a);
	this.Ma = BC(0);
	this.Ta = BC(100);
	this.Na = BC(101);
	this.Y = BC(1);
	this.ea = BC(2);
	this.na = BC(3);
	this.Aa = BC(4);
	this.Ba = BC(5);
	this.Ha = BC(6);
	this.F = [];
	H$a(this);
	a && this.update(a)
}
L(CC, et);
var G$a = Uu({
	d5a: Dg,
	E0a: xg,
	F0a: yg,
	G0a: zg,
	H0a: Ag,
	I0a: Bg,
	J0a: Cg,
	Vf: Fg,
	N6a: Eg
});
F = CC.prototype;
F.Yj = D(l);
F.eo = function() {
	return [aa]
};
F.Oc = function(a, b) {
	switch (a) {
		case Dg:
			this.Ma.update(b);
			H$a(this);
			break;
		case Fg:
			this.Ta.update(b);
			DC(this, 100);
			break;
		case Eg:
			this.Na.update(b);
			DC(this, 101);
			break;
		case xg:
			this.Y.update(b);
			DC(this, 1);
			break;
		case yg:
			this.ea.update(b);
			DC(this, 2);
			break;
		case zg:
			this.na.update(b);
			DC(this, 3);
			break;
		case Ag:
			this.Aa.update(b);
			DC(this, 4);
			break;
		case Bg:
			this.Ba.update(b);
			DC(this, 5);
			break;
		case Cg:
			this.Ha.update(b), DC(this, 6)
	}
};
F.Pa = function() {
	var a = {};
	a.hs_nt = this.Ma.Pa();
	a.hs_h1 = this.Y.Pa();
	a.hs_h2 = this.ea.Pa();
	a.hs_h3 = this.na.Pa();
	a.hs_h4 = this.Aa.Pa();
	a.hs_h5 = this.Ba.Pa();
	a.hs_h6 = this.Ha.Pa();
	a.hs_t = this.Ta.Pa();
	a.hs_st = this.Na.Pa();
	return a
};
F.Ga = function(a) {
	switch (a) {
		case Dg:
			return this.Ma;
		case Fg:
			return this.Ta;
		case Eg:
			return this.Na;
		case xg:
			return this.Y;
		case yg:
			return this.ea;
		case zg:
			return this.na;
		case Ag:
			return this.Aa;
		case Bg:
			return this.Ba;
		case Cg:
			return this.Ha
	}
	return CC.M.Ga.call(this, a)
};
F.Tf = function(a) {
	return a == Dg || a == Fg || a == Eg || a == xg || a == yg || a == zg || a == Ag || a == Bg || a == Cg
};

function H$a(a) {
	DC(a, 0);
	DC(a, 1);
	DC(a, 2);
	DC(a, 3);
	DC(a, 4);
	DC(a, 5);
	DC(a, 6);
	DC(a, 100);
	DC(a, 101)
}
F.Eg = function(a) {
	return this.Ra(a, Wk)
};
F.Ra = function(a, b) {
	var c = this.F[a][b];
	if (c) return c;
	var d;
	if (c = this.F[0][b]) d = c;
	else {
		c = this.Ga(I$a(0)).Ra(b);
		switch (b) {
			case Wk:
				d = new Zu;
				break;
			case zj:
				d = new xx;
				break;
			default:
				f(Error("Invalid style type: " + b))
		}
		d = kWa(c, d);
		this.F[0][b] = d
	}
	if (0 == a) return d;
	d = kWa(this.Ga(I$a(a)).Ra(b), d);
	return this.F[a][b] = d
};

function DC(a, b) {
	a.F[b] = {
		text: m,
		paragraph: m
	}
}
F.$q = D(q);
F.La = function() {
	return new CC(this.Pa())
};

function I$a(a) {
	switch (a) {
		case 1:
			return xg;
		case 2:
			return yg;
		case 3:
			return zg;
		case 4:
			return Ag;
		case 5:
			return Bg;
		case 6:
			return Cg;
		case 100:
			return Fg;
		case 101:
			return Eg;
		default:
			return Dg
	}
}
function J$a(a) {
	switch (a) {
		case xg:
			return 1;
		case yg:
			return 2;
		case zg:
			return 3;
		case Ag:
			return 4;
		case Bg:
			return 5;
		case Cg:
			return 6;
		case Fg:
			return 100;
		case Eg:
			return 101;
		default:
			return 0
	}
}
kt(function() {
	return new CC
});

function K$a() {}
K$a.prototype.F = D(qg);
K$a.prototype.A = function() {
	return [Ri, zj, Wk]
};
K$a.prototype.C = function(a, b, c) {
	a = {};
	var d = c.pn(zj);
	if (b.hs_nt) return d;
	for (var e in b) a[J$a(e)] = l;
	b = [];
	for (e = 0; e < d.length; e++) {
		var g = d[e],
			h = c.Yl(zj, g);
		a[h.eh] && b.push(g)
	}
	return b
};

function EC(a) {
	this.A = a
}
EC.prototype.C = function(a, b, c, d, e) {
	if (b.xa() != Wk && b.xa() != zj || !dt(b)) return b;
	c = Fx(a.Jf(zj, I(e) ? e : c));
	a = a.Ii().Ra(c, b.xa());
	return kWa(b, a)
};
EC.prototype.F = function(a, b, c, d) {
	d = Fx(a.Jf(zj, d));
	a = a.Ii();
	return B$a(b, a.Ra(d, c))
};
EC.prototype.G = C(Eb);

function FC(a) {
	if (!L$a) {
		for (var b = [], c = 0; 8 >= c; c++) b.push(jj + c);
		L$a = new Tu(b, {})
	}
	this.A = L$a;
	this.C = a || M$a(l)
}
L(FC, bt);
var L$a = m,
	N$a = m,
	O$a = m;
F = FC.prototype;
F.La = function() {
	var a = new FC([]);
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.C = [];
	for (var b = 0; b < this.C.length; b++) a.C[b] = this.C[b].La()
};
F.Cm = function(a) {
	for (var b = 0; b < this.C.length; b++) a.C[b] && this.C[b].Cm(a.C[b])
};
F.$f = function(a) {
	return this.C[a] || new rv({})
};
F.Oc = function(a, b) {
	var c = P$a(a);
	this.C[c].update(b)
};
F.Ga = function(a) {
	var b = P$a(a);
	return b != m ? this.C[b] : FC.M.Ga.call(this, a)
};
F.Tf = D(l);
F.Sr = function() {
	if (!O$a) {
		O$a = [];
		for (var a = 0; 8 >= a; a++) O$a[a] = jj + a
	}
	return O$a
};
F.Pa = function() {
	for (var a = this.C, b = {}, c = 0; c < a.length; c++) b[jj + c] = a[c].Pa();
	return b
};

function Q$a(a, b, c, d) {
	b = b ? VYa : WYa;
	return c != m && a == d ? c : b[a % b.length]
}
function M$a(a, b, c) {
	for (var d = [], e = 0; 8 >= e; e++) {
		var g = d,
			h = e,
			n = e,
			p = Q$a(e, a, b, c),
			t = new rv;
		t.jo = p;
		n *= 36;
		t.re = 18 + n;
		t.Ge = 36 + n;
		g[h] = t
	}
	return d
}

function P$a(a) {
	if (!N$a) for (var b = N$a = {}, c = 0; 8 >= c; c++) b[jj + c] = c;
	return N$a[a]
};

function GC(a, b, c) {
	Vv.call(this, Ri, R$a, a);
	this.C = c || new FC;
	this.update(b)
}
L(GC, Vv);
var R$a = Uu({
	b5a: Oi
}),
	S$a = [Oi];
F = GC.prototype;
F.La = function() {
	var a = new GC(this.aa(), {}, new FC([]));
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.C = this.C.La()
};
F.$f = function(a) {
	return this.C.$f(a)
};
F.Cm = function(a) {
	this.C.Cm(a.C)
};
F.Oc = function(a, b) {
	switch (a) {
		case Oi:
			this.C.update(b)
	}
};
F.Ga = function(a) {
	switch (a) {
		case Oi:
			return this.C
	}
	return GC.M.Ga.call(this, a)
};
F.Tf = function(a) {
	return a == Oi
};
F.Sr = function() {
	return S$a
};
F.Pa = function() {
	var a = {};
	a.le_nb = this.C.Pa();
	return a
};
Wv.set(Ri, function(a, b) {
	return new GC(a, b)
});

function T$a() {};

function U$a(a, b) {
	return !a ? !b : a.ob(b)
};

function V$a(a, b) {
	Vv.call(this, Bd, CYa, a, b)
}
L(V$a, Vv);
V$a.prototype.La = function() {
	var a = new V$a(this.aa(), {});
	this.ke(a);
	return a
};
Wv.set(Bd, function(a, b) {
	return new V$a(a, b)
});

function W$a(a, b) {
	Vv.call(this, Td, CYa, a, b)
}
L(W$a, Vv);
W$a.prototype.La = function() {
	var a = new W$a(this.aa(), {});
	this.ke(a);
	return a
};
Wv.set(Td, function(a, b) {
	return new W$a(a, b)
});

function X$a(a, b) {
	Vv.call(this, hg, CYa, a, b)
}
L(X$a, Vv);
X$a.prototype.La = function() {
	var a = new X$a(this.aa(), {});
	this.ke(a);
	return a
};
Wv.set(hg, function(a, b) {
	return new X$a(a, b)
});

function HC(a) {
	Hw.call(this, 2, Y$a, a);
	this.update(a)
}
L(HC, Hw);
var Y$a = Uu({
	ws: Cua,
	V5a: Dua
}, w_a);
F = HC.prototype;
F.cb = r;
F.NV = 0;
F.La = function() {
	var a = new HC({});
	this.ke(a);
	return a
};
F.aa = C(Fd);
F.se = C("NV");
F.Oc = function(a, b) {
	switch (a) {
		case Cua:
			this.cb = b;
			break;
		case Dua:
			this.NV = b;
			break;
		default:
			HC.M.Oc.call(this, a, b)
	}
};
F.Ga = function(a) {
	switch (a) {
		case Cua:
			return this.cb;
		case Dua:
			return this.NV
	}
	return HC.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = HC.M.Pa.call(this);
	a.d_id = this.cb;
	a.d_revision = this.NV;
	return a
};

function IC(a) {
	Hw.call(this, 3, Z$a, a)
}
L(IC, Hw);
var Z$a = Uu({
	mZa: pDa,
	Om: qDa
}, w_a);
F = IC.prototype;
F.o6 = r;
F.n6 = r;
F.La = function() {
	var a = new IC({});
	this.ke(a);
	return a
};
F.Oc = function(a, b) {
	switch (a) {
		case qDa:
			this.o6 = b;
			break;
		case pDa:
			this.n6 = b;
			break;
		default:
			IC.M.Oc.call(this, a, b)
	}
};
F.Ga = function(a) {
	switch (a) {
		case qDa:
			return this.o6;
		case pDa:
			return this.n6
	}
	return IC.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = IC.M.Pa.call(this);
	a.g_type = this.o6;
	a.g_data = this.n6;
	return a
};

function JC(a) {
	Hw.call(this, 0, $$a, a)
}
L(JC, Hw);
var $$a = Uu({
	jZa: tEa,
	i8: vEa
}, w_a);
F = JC.prototype;
F.OV = r;
F.Wy = r;
F.La = function() {
	var a = new JC({});
	this.ke(a);
	return a
};
F.ox = C("OV");
F.gc = C("Wy");
F.ut = function() {
	return this.Wy == nc ? 50 : JC.M.ut.call(this)
};
F.uw = function() {
	return this.Wy == nc ? 50 : JC.M.uw.call(this)
};

function aab(a) {
	return a.Wy == nc || a.Wy == Wka
}
F.Oc = function(a, b) {
	switch (a) {
		case tEa:
			this.Wy = b;
			break;
		case vEa:
			this.OV = b;
			break;
		default:
			JC.M.Oc.call(this, a, b)
	}
};
F.Ga = function(a) {
	switch (a) {
		case tEa:
			return this.Wy;
		case vEa:
			return this.OV
	}
	return JC.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = JC.M.Pa.call(this);
	a.i_cid = this.Wy;
	a.i_src = this.OV;
	return a
};

function bab(a) {
	switch (a) {
		case 2:
			return new HC({});
		case 3:
			return new IC({});
		case 0:
			return new JC({})
	}
	return m
};

function KC(a, b, c, d) {
	Vv.call(this, a, b, c);
	this.F = bab(d)
}
L(KC, Vv);
var cab = Uu({
	MZa: Mf
}),
	dab = [Mf];

function gB(a) {
	return a.F
}
F = KC.prototype;
F.Oc = function(a, b) {
	switch (a) {
		case Mf:
			this.F.update(b)
	}
};
F.Ga = function(a) {
	switch (a) {
		case Mf:
			return this.F
	}
	return KC.M.Ga.call(this, a)
};
F.Tf = function(a) {
	return a == Mf
};
F.Sr = function() {
	return dab
};
F.Pa = function() {
	var a = {};
	a.ee_eo = this.F.Pa();
	return a
};

function eab(a, b) {
	KC.call(this, Ug, cab, a, b)
}
L(eab, KC);
eab.prototype.La = function() {
	var a = new eab(this.aa(), this.F.xa());
	this.ke(a);
	return a
};

function fab(a, b) {
	var c = new eab(a, b.ee_eo.eo_type);
	c.update(b);
	return c
}
Wv.set(Ug, fab);

function LC(a, b) {
	KC.call(this, Jj, gab, a, b)
}
L(LC, KC);
LC.prototype.K = 0;
LC.prototype.L = 0;
var gab = Uu({
	g5a: dLa,
	h5a: eLa
}, cab);
LC.prototype.La = function() {
	var a = new LC(this.aa(), this.F.xa());
	this.ke(a);
	return a
};
LC.prototype.Oc = function(a, b) {
	switch (a) {
		case dLa:
			this.K = b;
			break;
		case eLa:
			this.L = b;
			break;
		default:
			LC.M.Oc.call(this, a, b)
	}
};
LC.prototype.Ga = function(a) {
	switch (a) {
		case dLa:
			return this.K;
		case eLa:
			return this.L
	}
	return LC.M.Ga.call(this, a)
};
LC.prototype.Pa = function() {
	var a = LC.M.Pa.call(this);
	a.pe_lo = this.K;
	a.pe_to = this.L;
	return a
};
Wv.set(Jj, function(a, b) {
	var c = new LC(a, b.ee_eo.eo_type);
	c.update(b);
	return c
});

function MC() {
	this.A = {}
}
MC.prototype.La = function() {
	var a = new MC;
	a.A = {};
	for (var b in this.A) a.A[b] = this.A[b].La();
	return a
};
MC.prototype.bA = C(Eb);
MC.prototype.Fb = function(a) {
	return this.A[a]
};
MC.prototype.ob = function(a) {
	return this == a ? l : !a || !(a instanceof MC) ? q : hr(this.A, a.A, U$a)
};

function hab(a) {
	this.G = {};
	for (var b = 0; b < a.length; b++) {
		var c = a[b],
			d = c.tXa();
		this.G[d] && f(Error("Multiple entity resolvers respond to type " + d));
		this.G[d] = c
	}
	this.C = new MC;
	this.A = {};
	this.F = {}
}
function x$a(a) {
	return a.concat()
}
F = hab.prototype;
F.mP = q;
F.Fb = function(a) {
	return iab(this)[a] || this.C.Fb(a)
};
F.Dj = function(a) {
	return this.A[a] && this.A[a].A || []
};
F.hB = function(a) {
	return (a = this.A[a]) && a.dd() || []
};
F.Ie = function(a, b) {
	return this.A[a] && this.A[a].get(b) || []
};
F.Rc = function(a) {
	var b = this.Fb(a);
	if (!b) return -1;
	b = this.A[b.xa()];
	if (!b) return -1;
	for (var c = b.dd(), d = 0; d < c.length; d++) {
		var e = c[d],
			g = b.get(e);
		if (hn(g, a)) return e
	}
	return -1
};

function jab(a, b, c, d) {
	var e = {};
	a = a.A;
	var g = d ? d : 0,
		h;
	for (h in a) {
		d = h;
		var n = a[d].slice(b, c + 1),
			p = [];
		dr(n, function(a) {
			p[a + g] = n[a].concat();
			return q
		});
		e[d] = p
	}
	return e
}
F.JE = function(a, b) {
	var c = jab(this, a, b),
		d = {}, e;
	for (e in c) dr(c[e], function(a, b) {
		for (var c = 0; c < b.length; c++) {
			var p = b[c];
			d[p] = Xv(e, p, this.Fb(p).Pa())
		}
		return q
	}, this);
	return d
};
F.bA = function() {
	return this.C.bA()
};

function kab(a) {
	var b = {}, c = a.C.bA(),
		d;
	for (d in c) {
		var c = a.Fb(d),
			e = c.xa();
		Ri != e || (b[d] = Xv(e, d, c.Pa()))
	}
	return b
}
function iab(a) {
	if (a.mP) {
		for (var b in a.F) {
			var c = a.G[a.F[b].xa()];
			a.F[b] = c.CMa(a, a.C.Fb(b))
		}
		a.mP = q
	}
	return a.F
}
function lab(a, b, c) {
	var d = a.G[b];
	d && a.G[b] && (iab(a)[c] = d.CMa(a, a.C.Fb(c)))
}
function mab(a, b) {
	var c = a.Fb(b);
	if (c && (c = a.A[c.xa()])) for (var d = c.dd(), e = 0; e < d.length; e++) {
		var g = d[e],
			h = c.get(g);
		if (on(h, b)) {
			0 == h.length && c.remove(g);
			break
		}
	}
}
F.shift = function(a, b) {
	var c = this.A,
		d;
	for (d in c) c[d].shift(a, b)
};
F.splice = function(a, b) {
	var c = b - a + 1,
		d = this.A,
		e;
	for (e in d) d[e].splice(a, c)
};
F.ob = function(a) {
	return this == a ? l : !a || !(a instanceof hab) ? q : hr(this.A, a.A, C1a(zUa)) && this.C.ob(a.C)
};

function NC(a) {
	et.call(this, td, nab);
	a && this.update(a)
}
L(NC, et);
NC.prototype.L = 0;
var nab = Uu({
	Om: Msa
});
F = NC.prototype;
F.YS = D(q);
F.eo = function() {
	return [bm]
};
F.Yj = D(l);
F.Oc = function(a, b) {
	switch (a) {
		case Msa:
			this.L = b
	}
};
F.Pa = function() {
	var a = {};
	a.autogen_type = this.L;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case Msa:
			return this.L
	}
	return NC.M.Ga.call(this, a)
};
F.$q = D(q);
F.La = function() {
	return new NC(this.Pa())
};
kt(function() {
	return new NC
});

function OC(a, b, c, d, e) {
	this.code = a;
	this.width = b;
	this.height = c;
	this.Vca = d || m;
	this.Uca = e || m;
	this.vD = this.height > this.width
}
var PC = [new OC("letter", 612, 792, 'Letter (8.5" x 11")', "Letter (21.6cm x 27.9cm)"), new OC("letter", 792, 612), new OC("tabloid", 792, 1224, 'Tabloid (11" x 17")', "Tabloid (27.9cm x 43.2cm)"), new OC("tabloid", 1224, 792), new OC("legal", 612, 1008, 'Legal (8.5" x 14")', "Legal (21.6cm x 35.6cm)"), new OC("legal", 1008, 612), new OC("statement", 396, 612, 'Statement (5.5" x 8.5")', "Statement (14.0cm x 21.6cm)"), new OC("statement", 612, 396), new OC("executive", 522, 756, 'Executive (7.25" x 10.5")', "Executive (18.4cm x 26.7cm)"),
new OC("executive", 756, 522), new OC("folio", 612, 936, 'Folio (8.5" x 13")', "Folio (21.6cm x 33.0cm)"), new OC("folio", 936, 612), new OC("A3", 297 * Qu, 420 * Qu, 'A3 (11.69" x 16.54")', "A3 (29.7cm x 42.0cm)"), new OC("A3", 420 * Qu, 297 * Qu), new OC("A4", 210 * Qu, 297 * Qu, 'A4 (8.27" x 11.69")', "A4 (21.0cm x 29.7cm)"), new OC("A4", 297 * Qu, 210 * Qu), new OC("A5", 148 * Qu, 210 * Qu, 'A5 (5.83" x 8.27")', "A5 (14.8cm x 21.0cm)"), new OC("A5", 210 * Qu, 148 * Qu), new OC("B4", 250 * Qu, 353 * Qu, 'B4 (9.84" x 13.90")', "B4 (25.0cm x 35.3cm)"), new OC("B4",
353 * Qu, 250 * Qu), new OC("B5", 176 * Qu, 250 * Qu, 'B5 (6.93" x 9.84")', "B5 (17.6cm x 25.0cm)"), new OC("B5", 250 * Qu, 176 * Qu)],
	QC = {};

function RC(a, b) {
	if (QC[a] && I(QC[a][b])) return QC[a][b];
	for (var c = m, d = 0; d < PC.length; d++) {
		var e = PC[d];
		5 >= Math.abs(e.width - a) && 5 >= Math.abs(e.height - b) && (c = e)
	}
	QC[a] || (QC[a] = {});
	return QC[a][b] = c
};

function SC() {
	this.A = oab
}
L(SC, bt);
var oab = Uu({
	WVa: ita
});
F = SC.prototype;
F.Qd = m;
F.La = function() {
	var a = new SC;
	this.ke(a);
	return a
};
F.Xf = C("Qd");
F.Oc = function(a, b) {
	switch (a) {
		case ita:
			this.Qd = b
	}
};
F.Ga = function(a) {
	switch (a) {
		case ita:
			return this.Qd
	}
	return SC.M.Ga.call(this, a)
};
F.Pa = function() {
	var a = {};
	a.bg_c = this.Qd;
	return a
};
F.ao = function() {
	var a = SC.M.ao.call(this);
	this.Qd && a.push(this.Qd);
	return a
};
F.ho = function(a) {
	var b = SC.M.ho.call(this, a);
	a.bg_c && b.push(a.bg_c);
	return b
};

function TC(a) {
	et.call(this, uf, pab);
	this.F = new SC;
	a && this.update(a)
}
L(TC, et);
var pab = Uu({
	cL: QBa,
	hZa: RBa,
	iZa: SBa,
	c_a: TBa,
	C0a: UBa,
	q4a: VBa,
	r4a: Cf,
	s4a: Df,
	t4a: Ef,
	x5a: Gf,
	w5a: Ff
});
F = TC.prototype;
F.ft = 72;
F.jw = 72;
F.ct = 72;
F.hw = 72;
F.eH = 612;
F.dH = 792;
F.m5 = l;
F.n5 = l;
F.o5 = m;
F.p5 = m;
F.lH = RC(612, 792);

function qab(a) {
	return a.F
}
function UC(a) {
	return Ru(Pu.ya(), a.hw)
}
function VC(a) {
	return Ru(Pu.ya(), a.jw)
}
F.Yj = D(l);
F.eo = function() {
	return [aa]
};

function N_a(a) {
	return a.lH ? a.lH.width : a.eH
}

function O_a(a) {
	return a.lH ? a.lH.height : a.dH
}
F.Oc = function(a, b) {
	switch (a) {
		case QBa:
			this.F.update(b);
			break;
		case RBa:
			this.m5 = b;
			break;
		case SBa:
			this.n5 = b;
			break;
		case TBa:
			this.o5 = b;
			break;
		case UBa:
			this.p5 = b;
			break;
		case VBa:
			this.ct = b;
			break;
		case Cf:
			this.hw = b;
			break;
		case Df:
			this.jw = b;
			break;
		case Ef:
			this.ft = b;
			break;
		case Ff:
			this.dH = b;
			this.lH = RC(this.eH, this.dH);
			break;
		case Gf:
			this.eH = b, this.lH = RC(this.eH, this.dH)
	}
};
F.Pa = function() {
	var a = {};
	a.ds_b = this.F.Pa();
	go(jo(), Xza) && (a.ds_cf = this.m5, a.ds_ch = this.n5, a.ds_fi = this.o5, a.ds_hi = this.p5);
	a.ds_mb = this.ct;
	a.ds_ml = this.hw;
	a.ds_mr = this.jw;
	a.ds_mt = this.ft;
	a.ds_ph = this.dH;
	a.ds_pw = this.eH;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case QBa:
			return this.F;
		case RBa:
			return this.m5;
		case SBa:
			return this.n5;
		case TBa:
			return this.o5;
		case UBa:
			return this.p5;
		case VBa:
			return this.ct;
		case Cf:
			return this.hw;
		case Df:
			return this.jw;
		case Ef:
			return this.ft;
		case Ff:
			return this.dH;
		case Gf:
			return this.eH
	}
	return TC.M.Ga.call(this, a)
};
F.Tf = function(a) {
	switch (a) {
		case QBa:
			return l
	}
	return q
};
F.La = function() {
	return new TC(this.Pa())
};
kt(function() {
	return new TC
});

function WC(a) {
	et.call(this, Wf, rab);
	a && this.update(a)
}
L(WC, et);
var rab = Uu({
	p8: rCa
});
F = WC.prototype;
F.GV = r;
F.Yj = D(l);
F.VH = D(q);
F.Oc = function(a, b) {
	switch (a) {
		case rCa:
			this.GV = b
	}
};
F.Pa = function() {
	var a = {};
	a.eqfs_c = this.GV;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case rCa:
			return this.GV
	}
	return WC.M.Ga.call(this, a)
};
F.La = function() {
	return new WC(this.Pa())
};
kt(function() {
	return new WC
});

function XC(a) {
	et.call(this, Vf, sab);
	a && this.update(a)
}
L(XC, et);
var sab = Uu({
	J5a: sCa
});
F = XC.prototype;
F.z6 = ya;
F.eo = function() {
	return [la]
};
F.Yj = D(l);
F.VH = D(q);
F.Oc = function(a, b) {
	switch (a) {
		case sCa:
			this.z6 = b
	}
};
F.Pa = function() {
	var a = {};
	a.eqs_p = this.z6;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case sCa:
			return this.z6
	}
	return XC.M.Ga.call(this, a)
};
F.La = function() {
	return new XC(this.Pa())
};
kt(function() {
	return new XC
});

function YC() {
	et.call(this, wg, CYa)
}
L(YC, et);
F = YC.prototype;
F.eo = function() {
	return [Na]
};
F.Yj = D(l);
F.VH = D(q);
F.YS = D(q);
F.Pa = function() {
	return {}
};
F.La = function() {
	return new YC(this.Pa())
};
kt(function() {
	return new YC
});

function ZC(a) {
	GB.call(this, YEa, Pg, tab, a)
}
L(ZC, GB);
var tab = Uu({
	R0a: YEa
});
ZC.prototype.$q = D(q);
ZC.prototype.La = function() {
	return new ZC(this.Pa())
};
kt(function() {
	return new ZC
});

function $C(a) {
	et.call(this, Ni, uab);
	a && this.update(a)
}
L($C, et);
var uab = Uu({
	iO: gJa
});
F = $C.prototype;
F.kU = m;
F.Yj = D(l);
F.Oc = function(a, b) {
	a == gJa && (this.kU = b)
};
F.Pa = function() {
	var a = {};
	a.lgs_l = this.kU;
	return a
};
F.Ga = function(a) {
	return a == gJa ? this.kU : $C.M.Ga.call(this, a)
};
F.La = function() {
	return new $C(this.Pa())
};
kt(function() {
	return new $C
});

function aD(a) {
	et.call(this, Qi, vab);
	a && this.update(a)
}
L(aD, et);
var vab = Uu({
	sj: Si
});
F = aD.prototype;
F.Ig = m;

function EB(a) {
	return a.Ig
}
F.Oc = function(a, b) {
	switch (a) {
		case Si:
			if (b) {
				var c = b.lnk_type;
				if (this.Ig && (this.Ig.xa() == c || !c)) this.Ig.update(b);
				else {
					a: {
						switch (b.lnk_type) {
							case 0:
								c = new fw(b);
								break a
						}
						c = m
					}
					this.Ig = c
				}
			} else this.Ig = m
	}
};
F.Pa = function() {
	var a = {};
	a.lnks_link = this.Ig ? this.Ig.Pa() : m;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case Si:
			return this.Ig
	}
	return aD.M.Ga.call(this, a)
};
F.Tf = function(a) {
	switch (a) {
		case Si:
			return l
	}
	return q
};
F.$q = D(q);
F.cK = D(q);
F.wg = function(a) {
	for (var b in a) {
		var c = a[b];
		switch (b) {
			case Si:
				if (c && this.Ig && !this.Ig.wg(c) || this.Ig && !c || !this.Ig && c) return q
		}
	}
	return l
};
F.Bx = function(a, b) {
	var c = this.Ga(a);
	return a == Si ? c == b ? l : c && !b || !c && b ? q : c == m && b == m || c.ob(b) : aD.M.Bx.call(this, a, b)
};
F.La = function() {
	return new aD(this.Pa())
};
kt(function() {
	return new aD
});

function bD(a) {
	et.call(this, gk, wab);
	a && this.update(a)
}
L(bD, et);
var wab = Uu({
	w4a: IMa
});
F = bD.prototype;
F.Cz = 0;
F.eo = function() {
	return [ja]
};
F.Yj = D(l);
F.Oc = function(a, b) {
	switch (a) {
		case IMa:
			this.Cz = b
	}
};
F.Pa = function() {
	var a = {};
	a.row_mh = this.Cz;
	return a
};
F.Ga = function(a) {
	switch (a) {
		case IMa:
			return this.Cz
	}
	return bD.M.Ga.call(this, a)
};
F.$q = D(q);
F.cK = D(q);
F.La = function() {
	return new bD(this.Pa())
};
kt(function() {
	return new bD
});

function cD(a) {
	et.call(this, Bk, xab);
	this.G = new sx;
	a && this.update(a)
}
L(cD, et);
var xab = Uu({
	o5a: SMa,
	P6a: TMa
});
F = cD.prototype;
F.Tk = m;
F.Vqa = D(l);
F.Oc = function(a, b) {
	switch (a) {
		case SMa:
			this.Tk = b;
			break;
		case TMa:
			this.G.update(b)
	}
};
F.Pa = function() {
	var a = {};
	a.sc_ow = this.Tk;
	a.sc_sugg = this.G.Pa();
	return a
};
F.Ga = function(a) {
	switch (a) {
		case SMa:
			return this.Tk;
		case TMa:
			return this.G
	}
	return cD.M.Ga.call(this, a)
};
F.Tf = function(a) {
	return a == TMa
};
F.La = function() {
	var a = new cD;
	this.ke(a);
	return a
};
F.ke = function(a) {
	ct(this, a);
	a.Tk = this.Tk;
	a.G = this.G.La()
};
kt(function() {
	return new cD
});

function dD() {
	this.A = {};
	this.C = []
}
F = dD.prototype;
F.La = function() {
	var a = new dD,
		b;
	for (b in this.A) a.A[b] = this.A[b].La(yab);
	a.C = this.C.concat();
	return a
};
F.set = function(a, b, c) {
	eD(this, a).set(b, c)
};
F.remove = function(a, b) {
	eD(this, a).remove(b)
};
F.pd = function(a) {
	return eD(this, a).A
};

function fD(a, b, c) {
	return eD(a, b).get(c) || m
}
function gD(a, b, c) {
	a = eD(a, b);
	var d = mWa(b);
	a.A[c] ? c = a.A[c] : (c = a.C[Cy(a, c, d)], c = I(a.A[c]) ? a.A[c] : m);
	return c || it(b)
}
F.vb = function(a) {
	zab(this, a)
};

function eD(a, b) {
	a.A[b] || zab(a, b);
	return a.A[b]
}
function zab(a, b) {
	a.A[b] || (a.A[b] = new By, a.C.push(b))
}
F.ic = function(a) {
	return eD(this, a).dd()
};
F.shift = function(a, b, c) {
	eD(this, a).shift(b, c)
};
F.splice = function(a, b, c) {
	eD(this, a).splice(b, c)
};
F.ob = function(a) {
	return this == a ? l : !a || !(a instanceof dD) ? q : hr(this.A, a.A, C1a(U$a))
};

function yab(a) {
	return a.La()
};

function Aab(a, b) {
	this.A = a;
	this.C = b
}

function Bab(a, b, c, d, e, g, h) {
	var n, p, t;
	if (!(b in a.A.A)) return new ew(b, []);
	if (b == uf || b == qg) if (d = gD(a.A, b, 0), 0 == c) n = [d.La()];
	else {
		if (!g && (!h || b != qg)) p = d.La()
	} else if (lt(b)) if (b == zj || b == Ri) {
		var u = [];
		g = Qs(a.C, da, c, d);
		for (h = 0; h < g.length; h++) {
			n = g[h];
			var x = gD(a.A, b, n);
			u[n - c] = x.La()
		}
		n = u;
		Ys(a.C, d) || (t = gD(a.A, b, d).La())
	} else {
		t = [];
		u = fr(a.A.ic(b), c, d);
		for (g = 0; g < u.length; g++) h = u[g], t[h - c] = fD(a.A, b, h).La();
		n = t;
		t = gD(a.A, b, d).La()
	} else {
		g = [];
		h = a.A.pd(b);
		n = a.A.ic(b);
		mt(b) ? (a = gD(a.A, b, c - 1), a = h[c] && !h[c].ob(a) ? h[c].La() : it(b)) : a = gD(a.A, b, c);
		a && (g[0] = a.La());
		for (a = 0; a < n.length; a++) if (x = n[a], x > c && x <= d) g[x - c] = h[x].La(), u = x;
		else if (x > d) break;
		if (mt(b) && (!h[d + 1] || h[d + 1].ob(h[u]))) g[u - c] = it(b);
		n = g
	}
	e && n && (n = wUa(n, e));
	return new ew(b, n, p, t)
};

function Cab(a) {
	this.A = new dD;
	for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = l;
	this.C = b;
	this.F = []
}
F = Cab.prototype;
F.La = function() {
	var a = new Cab([]);
	a.A = this.A.La();
	for (var b in this.C) a.C[b] = this.C[b];
	a.F = this.F.concat();
	return a
};
F.vb = function() {
	for (var a = this.A, b = [], c = t9a(this), d = 0, e; e = c[d]; d++) if (a.vb(e), lt(e)) b.push(e);
	else {
		var g = it(e);
		a.set(e, 0, g)
	}
	for (d = 0; c = b[d]; d++) g = it(c), e = g.eo(), hn(e, aa) && (g = it(c), a.set(c, 0, g)), hn(e, da) && (g = it(c), a.set(c, 1, g))
};
F.eA = function(a) {
	return this.A.pd(a)
};

function t9a(a) {
	if (0 == a.F.length) for (var b = Pn(ft), c = 0; c < b.length; c++) {
		var d = b[c];
		a.C[d] && a.F.push(d)
	}
	return a.F
}
F.Jf = function(a, b) {
	return gD(this.A, a, b)
};
F.Yl = function(a, b) {
	return !lt(a) ? m : fD(this.A, a, b)
};
F.px = function(a) {
	return !!this.C[a] && a in ft
};
F.Ii = function() {
	return this.Jf(qg, 0)
};
F.pn = function(a) {
	return this.A.ic(a)
};
F.b_ = function(a, b, c, d, e, g) {
	return Bab(new Aab(this.A, d), a, b, c, e, g)
};
F.shift = function(a, b) {
	for (var c = this.A, d = c.C, e = b.length, g = 0; g < d.length; g++) {
		var h = d[g];
		mt(h) && !lt(h) && (hD(this, h, a - 1), hD(this, h, a));
		c.shift(h, a, e)
	}
	c = at(hWa);
	if (!c || !c.test(b)) c = {};
	else {
		c = at(hWa);
		d = {};
		for (e = this.A; h = c.exec(b);) {
			for (var g = h.index, h = gWa[h[0]] || [], n = [], p = 0; p < h.length; p++) n.push(h[p]());
			h = n;
			for (n = 0; p = h[n]; n++) {
				var t = p.xa();
				this.px(t) && p.YS() && (e.set(t, a + g, p), d[t] || (d[t] = []), d[t].push(g))
			}
		}
		c = d
	}
	return c
};
F.splice = function(a, b, c) {
	for (var d = this.A, e = d.C, g = b - a + 1, h = b + 1, n = 0; n < e.length; n++) {
		var p = e[n];
		if (mt(p) && !lt(p)) hD(this, p, a - 1), b + 1 < c && hD(this, p, b + 1);
		else if (!lt(p) && h < c) {
			var t = d.pd(p),
				u = this.Jf(p, h),
				x = this.Jf(p, a - 1);
			!gt(u, x) && !t[h] ? d.set(p, h, u) : gt(u, x) && d.remove(p, h)
		}
		d.splice(p, a, g)
	}
};

function hD(a, b, c) {
	var d = a.eA(b),
		e = a.pn(b);
	c = Cy(eD(a.A, b), c, k);
	var g = e.length,
		h = e[c],
		n = e[c + 1],
		e = d[e[c - 1]],
		p = d[n],
		d = d[h],
		t = it(b);
	d.ob(t) || (a.A.set(b, h, t), 0 < c && e.ob(t) && a.A.remove(b, h), c < g - 1 && p.ob(t) && a.A.remove(b, n))
}
F.ob = function(a) {
	return this == a ? l : !a || !(a instanceof Cab) ? q : this.A.ob(a.A) && hr(this.C, a.C)
};

function Dab(a, b, c, d, e) {
	this.L = new dD;
	this.G = q;
	this.C = {};
	for (var g = 0; g < b.length; g++) {
		var h = b[g],
			n = h.G();
		this.C[n] && f(Error("Multiple style resolvers are registered for type " + n));
		this.C[n] = h
	}
	this.F = {};
	for (g = 0; g < c.length; g++) b = c[g], n = b.F(), this.F[n] && f(Error("Multiple concrete style updaters respond to type " + n)), this.F[n] = b;
	this.W = {};
	for (g = 0; g < d.length; g++) {
		c = d[g];
		this.W.list && f(Error("Multiple entity concrete style updaters respond to type list"));
		n = [Ri];
		for (b = 0; b < n.length; b++) lt(n[b]) || f(Error("Only tethered style types can be dependent on entities."));
		this.W.list = c
	}
	this.A = new Cab(a);
	this.K = e
}
function iD(a) {
	if (a.G) {
		a.G = q;
		var b;
		b = iD(a).C;
		for (var c = 0; c < b.length; c++) {
			var d = a,
				e = b[c];
			lt(e) ? Eab(d, e) : jD(d, e, 0, m, m)
		}
	}
	return a.L
}
F = Dab.prototype;
F.vb = function() {
	this.A.vb();
	for (var a = iD(this), b = t9a(this.A), c = 0, d; d = b[c]; c++) this.C[d] && (a.vb(d), lt(d) ? Eab(this, d) : jD(this, d, 0, m, m))
};

function Fab(a, b) {
	return a.C[b] ? iD(a).pd(b) : a.eA(b)
}
F.eA = function(a) {
	return this.A.eA(a)
};
F.px = function(a) {
	return this.A.px(a)
};

function Gab(a, b, c) {
	return a.C[b] ? a.Ra(b, c) : a.Jf(b, c)
}
F.Ra = function(a, b) {
	return gD(iD(this), a, b)
};
F.Jf = function(a, b) {
	return this.A.Jf(a, b)
};
F.pn = function(a) {
	return this.A.pn(a)
};

function kD(a, b, c) {
	return a.C[b.xa()].C(a.A, b, c, a.K)
}
F.td = function(a, b) {
	return !lt(a) ? m : this.C[a] ? fD(iD(this), a, b) : this.Yl(a, b)
};
F.Yl = function(a, b) {
	return this.A.Yl(a, b)
};

function Eab(a, b) {
	for (var c = a.pn(b), d = iD(a), e = 0; e < c.length; e++) {
		var g = c[e];
		d.set(b, g, kD(a, a.Jf(b, g), g).La())
	}
}
F.hf = function() {
	return Gab(this, uf, 0)
};
F.Ii = function() {
	return this.A.Ii()
};
F.ic = function(a) {
	return this.C[a] ? iD(this).ic(a) : this.A.pn(a)
};
F.Zh = function(a, b) {
	for (var c = this.ic(a), d = lD(c, b), e = c[d], g = Fab(this, a), h = g[e], d = d - 1; 0 <= d; d--) {
		var n = c[d];
		if (!h.ob(g[n])) break;
		e = n
	}
	return e
};
F.Ag = function(a, b) {
	for (var c = this.ic(a), d = lD(c, b), e = Fab(this, a), g = e[c[d]], h = d + 1; h < c.length && g.ob(e[c[h]]); h++) d = h;
	return c[d + 1] ? c[d + 1] - 1 : m
};

function lD(a, b, c) {
	a = vn(a, b);
	0 > a && (a = -a - (c ? 1 : 2));
	return a
}

function Hab(a, b, c, d, e, g, h, n) {
	for (var p = [], t = a.A.A.C, u = 0; u < t.length; u++) {
		var x = mt(t[u]);
		(e && x || !e && !x) && p.push(a.Gh(t[u], b, c, d, g, h, n))
	}
	return p
}
F.Gh = function(a, b, c, d, e, g, h) {
	return g || !this.C[a] ? this.A.b_(a, b, c, d, e, h || a == qg) : Bab(new Aab(iD(this), d), a, b, c, e, h, l)
};

function Iab(a, b, c) {
	a = iD(a);
	var d = c;
	c = a.ic(zj);
	d == m && (d = vn(c, b), 0 > d && f(Error("Problem finding paragraph start index, paragraph key could not be found in the concrete map.")));
	b = d - 1;
	a = 0;
	0 <= b && (a = c[b] + 1);
	return a
}

function jD(a, b, c, d, e) {
	var g = iD(a),
		h = a.eA(b),
		n = a.pn(b),
		p = Fab(a, b),
		t = a.ic(b),
		u = a.pn(zj);
	e || (e = Math.max(h.length, u[u.length - 1]));
	d || (d = e);
	var x = d + 1;
	if (x <= e) {
		var y = a.A.Jf(b, x);
		g.set(b, x, kD(a, y, x).La())
	}
	var B = d;
	e = [];
	for (var y = lD(n, c), y = Math.max(0, y - 1), E = Math.max(Math.min(lD(n, B) + 1, n.length - 1), y), H = lD(u, n[y], l), H = Math.max(0, H - 1), B = Math.min(lD(u, B, l), u.length - 1); H <= B && y <= E;) {
		var J = u[H] + 1,
			$ = n[y];
		$ < J ? (e.push($), y++) : ($ == J ? (e.push($), y++) : e.push(J), H++)
	}
	for (; H <= B; H++) e.push(u[H] + 1);
	for (H = y; H <= E; H++) e.push(n[H]);
	n = d;
	u = iD(a);
	y = a.ic(b);
	E = Cy(eD(u, b), c, l);
	for (H = y[E]; H != m && H <= n;) u.remove(b, H), H = y[E];
	for (var V, n = t = p[t[lD(t, c - 1)]], u = 0; u < e.length; u++) if (E = e[u], (y = h[E]) && (V = y), E >= c && E <= d) {
		if (!V.Yj() || y) y = kD(a, V, E).La(), y.ob(n) ? g.remove(b, E) : (g.set(b, E, y), n = y)
	} else if (E > d) break;
	t && t.ob(p[c]) && g.remove(b, c);
	p[x] && p[x].ob(n) && g.remove(b, x)
}
F.shift = function(a, b, c) {
	for (var d = this.A.shift(a, b, c), e = iD(this), g = e.C, h = b.length, n = 0; n < g.length; n++) e.shift(g[n], a, h);
	for (var p in d) {
		h = d[p];
		for (n = 0; n < h.length; n++) if (this.C[p]) {
			var t = h[n] + a,
				u = this.A.Yl(p, t),
				u = kD(this, u, t).La();
			e.set(p, t, u)
		}
	}
	p = (p = d.paragraph) && p.length ? p[p.length - 1] : m;
	p = a <= c && p ? a + p + 1 : m;
	for (var x in d) if (h = d[x], n = this.F[x], h[0] != m && n && b.charAt(h[0]) == da) {
		h = h[0] + a;
		n = n.A();
		for (t = 0; t < n.length; t++) if (u = n[t], !lt(u)) {
			var y = Iab(this, h);
			jD(this, u, y, h, c);
			p && !fD(e, u, p) && jD(this, u, p, p, c)
		}
	}
	if (!(1 > a) && this.C.paragraph && fD(e, zj, a - 1)) for (b = 0; b < g.length; b++) c = g[b], this.C[c] && !lt(c) && (d = this.Jf(c, a), d = kD(this, d, a), x = this.ic(c), p = iD(this), h = a, p = Cy(eD(p, c), h, k), this.Ra(c, x[p]).ob(d) || (e.set(c, a, d), p += 2, p < x.length && (x = x[p], this.Ra(c, x).ob(d) && e.remove(c, x))))
};
F.splice = function(a, b, c) {
	this.A.splice(a, b, c);
	var d = iD(this),
		e = d.ic(zj),
		g = e[Cy(eD(d, zj), a, l)],
		e = d.C,
		h = b - a + 1;
	b += 1;
	for (var n = 0; n < e.length; n++) {
		var p = e[n];
		if (!lt(p)) {
			var t = d.pd(p),
				u = this.Ra(p, b),
				x = this.Ra(p, a - 1);
			!u.ob(x) && !t[b] ? d.set(p, b, u) : u.ob(x) && d.remove(p, b)
		}
		d.splice(e[n], a, h)
	}
	e = d.ic(zj);
	if (!(g >= b)) {
		d = Cy(eD(d, zj), a - 1, l);
		a = e[d];
		c = c - h - 1;
		g = iD(this);
		h = Iab(this, a, d);
		d = g.C;
		for (g = 0; g < d.length; g++) e = d[g], lt(e) || jD(this, e, h, a, c)
	}
};
F.ob = function(a) {
	return this == a ? l : !a || !(a instanceof Dab) ? q : this.A.ob(a.A)
};

function Jab() {}
xm(Jab.prototype, hm().prototype);
xm(hm().prototype, Jab.prototype);

function Kab(a, b) {
	this.G = a;
	this.ra = b;
	this.A = {};
	this.C = {};
	this.F = {}
}
Kab.prototype.clear = function(a) {
	a ? (delete this.A[a], delete this.C[a], delete this.F[a]) : (this.A = {}, this.C = {}, this.F = {})
};

function Lab(a, b, c, d) {
	if (a = a.F[b]) if (c = a[c]) return c[d] || m;
	return m
}
function mD(a, b, c, d) {
	var e = a.G(b, c, d);
	Mab(a, b, c, d, e);
	return e
}

function Mab(a, b, c, d, e) {
	var g = a.F[b];
	g || (g = a.F[b] = []);
	var h = g[c];
	h || (h = g[c] = []);
	h[d] = e;
	(e = a.A[b]) || (e = a.A[b] = []);
	(g = e[c]) ? gr(g, d) : e[c] = [d];
	(e = a.C[b]) || (e = a.C[b] = []);
	(a = e[d]) ? gr(a, c) : e[d] = [c]
}
Kab.prototype.get = function(a, b, c) {
	if (b > c) return this.ra.log(Error(ipa)), {};
	var d = Lab(this, a, b, c);
	if (d) return d;
	if (d = (d = this.A[a]) ? d[b] || m : m) {
		var e = vn(d, c);
		if (0 <= e) return this.ra.log(Error(kqa + b + Gaa + c + yNa)), this.clear(), mD(this, a, b, c);
		e = -e - 2;
		if (0 > e) return mD(this, a, b, c);
		e = d[e];
		d = Lab(this, a, b, e);
		d = this.G(a, e + 1, c, Vn(d))
	} else if (d = (d = this.C[a]) ? d[c] || m : m) {
		e = vn(d, b);
		if (0 <= e) return this.clear(), mD(this, a, b, c);
		e = -e - 1;
		if (e >= d.length) return mD(this, a, b, c);
		e = d[e];
		d = Lab(this, a, e, c);
		d = this.G(a, b, e - 1, Vn(d))
	} else return mD(this,
	a, b, c);
	Mab(this, a, b, c, d);
	return d
};

function IA(a, b, c, d) {
	this.C = !d;
	this.A = [];
	if (a) {
		var e = 0;
		d = a.length - 1;
		I(b) && (e = Nab(a, b));
		I(c) && (d = Nab(a, c), d == a.length && (d -= 1));
		for (; e <= d; e++) this.A.push(a[e].La());
		0 < this.A.length && (I(b) && this.A[0].start < b && (this.A[0].start = b), a = this.A.length - 1, I(c) && this.A[a].end > c && (this.A[a].end = c))
	}
}
L(IA, M);

function Nab(a, b) {
	var c = vn(a, new xs(b, b), Oab);
	return 0 > c ? -c - 1 : c
}
function Oab(a, b) {
	return Bs(a, b) || Bs(b, a) ? 0 : a.start < b.start ? -1 : 1
}
F = IA.prototype;
F.ce = C(Eb);

function nD(a, b, c) {
	return (a = HA(a, b)) && a.start <= c ? new xs(Math.max(a.start, b), Math.min(a.end, c)) : m
}
function HA(a, b) {
	for (var c = 0, d; d = a.A[c]; c++) if (d.end >= b) return d;
	return m
}
F.add = function(a, b) {
	for (var c = new xs(a, b), d = q, e = [], g = 0; g < this.A.length; g++) {
		var h = this.A[g];
		Math.max(c.start, h.start) > Math.min(c.end, h.end) + 1 ? (!d && c.end < h.start && (e.push(c), d = l), e.push(h)) : (Bs(c, h) || (c.start = Math.min(c.start, h.start), c.end = Math.max(c.end, h.end)), d || (e.push(c), d = l))
	}
	d || e.push(c);
	this.A = e
};
F.shift = function(a, b) {
	if (0 >= b) return q;
	for (var c = q, d = 0; d < this.A.length; d++) {
		var e = this.A[d];
		if (a <= e.start) e.start += b, e.end += b;
		else if (a <= e.end + (this.C ? 1 : 0)) e.end += b, c = l
	}
	return c
};
F.remove = function(a, b, c) {
	for (var d = [], e = b - a + 1, g = [], h = 0, n; n = this.A[h]; h++) if (n.end < a) d.push(n);
	else if (n.start > b) {
		if (c) {
			var p = d[d.length - 1];
			if (p && p.end == a - 1 && n.start == b + 1) {
				p.end += n.end - n.start + 1;
				continue
			}
			n.start -= e;
			n.end -= e
		}
		d.push(n)
	} else if (n.start >= a && n.end <= b) g.push(n);
	else if (n.start <= a && n.end >= b) g.push(new xs(a, b)), c ? (n.end -= e, d.push(n)) : (n.start < a && d.push(new xs(n.start, a - 1)), n.end > b && d.push(new xs(b + 1, n.end)));
	else if (Cs(n, a)) g.push(new xs(a, n.end)), n.end = a - 1, d.push(n);
	else if (Cs(n, b)) if (g.push(new xs(n.start,
	b)), c) {
		var p = d[d.length - 1],
			t = n.end - b;
		p && p.end == a - 1 ? p.end += t : (n.start = a, n.end = n.start + t - 1, d.push(n))
	} else n.start = b + 1, d.push(n);
	this.A = d;
	return g
};
F.toString = function() {
	for (var a = r, b = 0; b < this.A.length; b++) {
		0 < b && (a += La);
		var c = this.A[b],
			a = a + (ad + c.start + La + c.end + cd)
	}
	return a
};
F.O = function() {
	delete this.A;
	IA.M.O.call(this)
};

function oD() {
	this.A = {}
}
function Pab(a, b) {
	var c = [],
		d;
	for (d in a.A) {
		var e = HA(a.A[d], b);
		e && Cs(e, b) && c.push(d)
	}
	return c
}
function Qab(a) {
	var b = [0],
		c;
	for (c in a.A) for (var d = a.A[c].ce(), e = 0; e < d.length; e++) gr(b, d[e].start), gr(b, d[e].end + 1);
	return b
}
oD.prototype.shift = function(a, b) {
	for (var c in this.A) this.A[c].shift(a, b)
};
oD.prototype.splice = function(a, b) {
	for (var c in this.A) Rab(this, a, b, c, l)
};

function Sab(a, b, c, d) {
	a.A[d] || (a.A[d] = new IA(k, k, k, l));
	a.A[d].add(b, c)
}

function Rab(a, b, c, d, e) {
	a.A[d] && (a.A[d].remove(b, c, e), (a.A[d].A[0] || m) == m && delete a.A[d])
}
oD.prototype.La = function() {
	var a = new oD,
		b;
	for (b in this.A) a.A[b] = new IA(this.A[b].ce(), k, k, l);
	return a
};
oD.prototype.ob = function(a) {
	return this == a ? l : !a || !(a instanceof oD) ? q : hr(this.A, a.A, function(a, c) {
		return zn(a.ce(), c.ce(), ys)
	})
};

function w$a(a, b, c, d, e, g, h) {
	this.ra = a;
	this.Ha = b;
	this.Ba = e;
	this.ea = c;
	this.Aa = d;
	this.K = h;
	this.W = g;
	this.na = [bm, am, la, pa, $l, aa, WQa, ga, ha];
	this.F = new VB(this.ra, this.na);
	this.G = new oD;
	this.L = new oD;
	this.C = new hab(e);
	this.A = new Dab(g, b, c, d, this.C);
	this.Y = new Kab(K(this.iua, this), this.ra)
}
F = w$a.prototype;
F.vb = function() {
	this.A.vb()
};
F.px = function(a) {
	return this.A.px(a)
};
F.qa = C($b);
F.clear = function() {
	this.F = new VB(this.ra, this.na);
	this.C = new hab(this.Ba);
	this.A = new Dab(this.W, this.Ha, this.ea, this.Aa, this.C);
	this.vb()
};
F.jc = function() {
	return 2 == this.F.ub()
};

function pD(a, b) {
	return Pab(a.G, b)
}
function qD(a, b) {
	return Pab(a.L, b)
}
function Tab(a) {
	var b = Qab(a.G);
	b[b.length - 1] >= a.F.ub() && b.pop();
	return b
}
F.Fb = function(a) {
	return this.C.Fb(a)
};
F.Dj = function(a) {
	return this.C.Dj(a)
};
F.hB = function(a) {
	return this.C.hB(a)
};
F.Ie = function(a, b) {
	return this.C.Ie(a, b)
};
F.Rc = function(a) {
	return this.C.Rc(a)
};

function Nu(a, b) {
	var c;
	switch (b.xa()) {
		case 0:
			c = b.A();
			break;
		case 1:
			c = b.aa(), c = a.Rc(c)
	}
	return c
}
F.Ra = function(a, b) {
	return Gab(this.A, a, b)
};
F.td = function(a, b) {
	return this.A.td(a, b)
};
F.pd = function(a) {
	return Fab(this.A, a)
};

function ZA(a, b, c) {
	return Gab(a.A, b, Uab(a, c))
}
function Uab(a, b) {
	var c = Nu(a, b);
	0 < c && !Ws(a.F, c) && c--;
	return c
}
F.hf = function() {
	return this.A.hf()
};
F.Ii = function() {
	return this.A.Ii()
};
F.Zh = function(a, b) {
	return this.A.Zh(a, b)
};
F.Ag = function(a, b) {
	var c = this.A.Ag(a, b);
	return c != m ? c : this.F.ub() - 1
};
F.ic = function(a) {
	return this.A.ic(a)
};
F.Gh = function(a, b, c) {
	var d = this.A.Gh(a, b, c, this.F);
	0 == d.pd().length && (!d.C && !d.A) && this.ra.log(Error(oqa + a + waa + b + Ma + c + Tra));
	return d
};
F.b_ = function(a, b, c, d) {
	d = this.A.Gh(a, b, c, this.F, k, l, d);
	0 == d.pd().length && (!d.C && !d.A) && this.ra.log(Error(nqa + a + waa + b + Ma + c + Tra));
	return d
};
F.JE = function(a, b) {
	return this.C.JE(a, b)
};
F.bA = function() {
	return this.C.bA()
};
F.Yh = function(a, b, c, d, e, g, h, n) {
	var p = this.F.slice(a, b),
		t = 0;
	d && (p = d + p, t = d.length);
	e && (p += e);
	d = Hab(this.A, a, b, this.F, q, t, h, n);
	e = Hab(this.A, a, b, this.F, l, t);
	t = jab(this.C, a, b, t);
	a = c ? {} : this.C.JE(a, b);
	if (g) {
		g = kab(this.C);
		for (var u in g) a[u] || (a[u] = g[u])
	}
	u = {};
	if (!c) {
		var x = new Xr;
		for (c = 0; g = d[c]; c++) g = g.pd(), dr(g, function(a, b) {
			var c = b.yQ();
			0 < c.length && Yr(x, c);
			return q
		});
		g = x.zc();
		for (c = 0; b = g[c]; c++) h = this.Rc(b), 0 <= h && (n = Vs(this.F, h + 1), u[b] = this.Yh(h, n, q))
	}
	return new gw(p, d, e, t, a, u)
};

function Vab(a, b, c) {
	var d = qu.ya(),
		e = tu(d, new Ou(JNa, Wg));
	a.Y.clear();
	var g = a.K;
	!g.A && g.F && (!g.C && T0a.test(c) && (g.C = l), g.C && S0a.test(c) && (g.A = l, g.dispatchEvent(Vd)));
	a.F.Jz(b, c);
	g = c.length;
	a.A.shift(b, c, a.F.ub() - 1);
	a.C.shift(b, g);
	a.G.shift(b, g);
	a.L.shift(b, g);
	uu(d, e)
}
function Wab(a, b, c) {
	var d = qu.ya(),
		e = tu(d, new Ou(JNa, le));
	a.Y.clear();
	a.A.splice(b, c, a.F.ub());
	a.C.splice(b, c);
	a.G.splice(b, c);
	a.L.splice(b, c);
	a.F.remove(b, c);
	uu(d, e)
}
F.rP = function(a) {
	var b = q;
	switch (a.xa()) {
		case bi:
			var c = a;
			Vab(this, c.K(), c.qa());
			break;
		case ci:
			var c = a,
				d = c.K(),
				e = c.qa();
			Vab(this, d, e);
			Sab(this.G, d, d + e.length - 1, c.ea());
			break;
		case wh:
			var g = a;
			Wab(this, g.C(), g.F());
			break;
		case xh:
			g = a;
			Wab(this, g.C(), g.F());
			break;
		case ei:
			var h = a;
			Sab(this.G, h.C(), h.F(), h.ea());
			break;
		case Bi:
			var n = a,
				p = n.C(),
				t = n.F();
			Rab(this.G, p, t, n.ea());
			break;
		case di:
			h = a;
			Sab(this.L, h.C(), h.F(), h.ea());
			break;
		case Ai:
			var n = a,
				u = n.C(),
				x = n.F();
			Rab(this.L, u, x, n.ea());
			break;
		case nh:
			var y = this.C,
				B = a.Aa,
				E = a.aa(),
				H = y.C,
				J = Xv(B, E, a.W());
			J && (H.A[E] = J);
			lab(y, B, E);
			break;
		case ni:
			var $ = this.C,
				V = a.aa(),
				ca = $.C.A[V];
			ca && ca.update(a.W());
			var ia = iab($)[V];
			ia && lab($, ia.xa(), V);
			var ua = this.A,
				yb = a.aa(),
				Bb = a.W(),
				Wb = ua.K.Fb(yb);
			if (Wb) {
				var Qd = Wb.xa();
				if (ua.W[Qd]) {
					var zd;
					var Bj = ua.A,
						Cj = Bb.le_nb,
						Dj = q,
						cm = {}, Wh;
					for (Wh in Cj) if (vd in Cj[Wh]) var xl = P$a(Wh),
						Dj = cm[xl] = l;
					if (Dj) {
						for (var Fk = Bj.pn(Ri), Xh = [], Ji = 0; Ji < Fk.length; Ji++) {
							var fk = Fk[Ji],
								Yh = Bj.Yl(Ri, fk);
							Yh.Cc == yb && cm[Yh.Wc] && Xh.push(fk)
						}
						zd = Xh
					} else zd = m;
					if (zd && 0 != zd.length) for (var ep = [Ri], Zr = iD(ua), Ej = 0, $m; $m = ep[Ej]; Ej++) if (ua.C[$m] && lt($m)) for (var fp = 0, ao; ao = zd[fp]; fp++) {
						var gp = ua.Yl($m, ao);
						gp && Zr.set($m, ao, kD(ua, gp, ao).La())
					}
				}
			}
			break;
		case rh:
			var $r = a.aa(),
				an = this.Fb($r),
				as;
			if (as = an) as = Ri == an.xa();
			as && this.ra.log(Error(Hha));
			mab(this.C, $r);
			break;
		case li:
			var bn = this.C,
				Yv = a.aa(),
				bo = a.A();
			mab(bn, Yv);
			if (!(0 > bo)) {
				var Gk = bn.Fb(Yv);
				if (Gk) {
					var Zv = Gk.xa(),
						dm = bn.A[Zv];
					dm || (dm = bn.A[Zv] = new By);
					var ae = dm.get(bo);
					ae || (ae = [], dm.set(bo, ae));
					ae.push(Yv)
				}
			}
			break;
		case ph:
			a.G == zj && a.L.ps_hd === m && this.ra.log(Error(Eja));
			this.Y.clear(a.G);
			var hp = this.K;
			if (!hp.A && hp.F && a.G == zj) {
				var bs = (a.L || []).ps_ltr;
				bs != m && !bs && (hp.C = l, hp.A = l, hp.dispatchEvent(Vd))
			}
			var zf;
			var Fj = this.A,
				Af = a.G,
				pi = a.C(),
				cs = a.F(),
				qi = a.L,
				Pt = this.F.ub() - 1,
				wD = Fj.F[Af],
				Vy = m,
				ip = m;
			wD && (Vy = wD.C(pi, qi, Fj), ip = wD.A());
			var Qt;
			b: {
				var yl = Fj.A,
					xD = mt(Af) && !lt(Af);
				if (xD) {
					var Zh = yl.pn(Af).concat(),
						kS = Cy(eD(yl.A, Af), pi, k),
						lS = Cy(eD(yl.A, Af), cs, k),
						$v = q,
						Wy = yl.eA(Af),
						Xy = it(Af);
					Xy.update(qi);
					for (var aw = kS; aw <= lS; aw++) {
						var co = Zh[aw];
						Xy.ob(Wy[co]) || (hD(yl, Af, co), $v = l)
					}
					if (!$v) {
						Qt = q;
						break b
					}
				}
				var cn;
				if (lt(Af)) {
					var eo = yl.A,
						Rt = fD(eo, Af, pi),
						yD = q;
					Rt || (Rt = it(Af), eo.set(Af, pi, Rt), yD = l);
					Rt.wg(qi) || (Rt.update(qi), yD = l);
					cn = yD
				} else {
					var jp = q,
						bw = yl.A,
						fo = yl.eA(Af),
						zD = yl.pn(Af),
						Mq = cs + 1;
					if (Mq <= Pt && !fo[Mq]) {
						var ri = yl.Jf(Af, Mq);
						ri.wg(qi) || bw.set(Af, Mq, ri.La())
					}
					var em = fo[pi],
						Gj = fo[pi];
					Gj ? Gj.wg(qi) || (Gj.update(qi), jp = l) : (Gj = yl.Jf(Af, pi), Gj.wg(qi) || (Gj = Gj.La(), Gj.update(qi), jp = l, bw.set(Af, pi, Gj)), em = Gj);
					for (var Yy, Nq = 0; Nq < zD.length; Nq++) {
						var dn = zD[Nq];
						if (dn < pi) Yy = dn;
						else if (dn > pi && dn <= cs) {
							var ds = fo[dn];
							ds && (ds.wg(qi) || (ds.update(qi), jp = l), gt(em, ds) ? (bw.remove(Af, dn), Nq--) : em = ds)
						} else if (dn > cs) break
					}
					I(Yy) && gt(fo[Yy], fo[pi]) && bw.remove(Af, pi);
					fo[Mq] && gt(em, fo[Mq]) && bw.remove(Af, Mq);
					cn = jp || xD
				}
				Qt = cn
			}
			if (Qt) if (lt(Af)) {
				var AD = Fj.td(Af, pi),
					fm;
				var cw = Fj.Yl(Af, pi);
				if (cw) if (Fj.C[Af]) {
					var St = kD(Fj, cw, pi).La();
					iD(Fj).set(Af, pi, St);
					fm = St
				} else fm = m;
				else fm = m;
				if ((!Vy || 0 == Vy.length) && AD && AD.ob(fm)) zf = q;
				else {
					if (Vy && ip) for (var mS = ip, oJ = Vy, s3 = iD(Fj), Zy = 0, Oq; Oq = oJ[Zy]; Zy++) for (var $y = 0, dw; dw = mS[$y]; $y++) if (lt(dw)) {
						var nS = Fj.Yl(dw, Oq);
						nS && s3.set(dw, Oq, kD(Fj, nS, Oq).La())
					} else {
						var Gka = Iab(Fj, Oq);
						jD(Fj, dw, Gka, Oq, Pt)
					}
					zf = l
				}
			} else Fj.C[Af] && jD(Fj, Af, pi, cs, Pt),
			zf = l;
			else zf = q;
			b = !zf;
			break;
		case Ae:
		case De:
		case Ee:
		case Fe:
			f(Error("Mutations of type " + a.xa() + " should not be applied directly to the model."));
		default:
			f(Error("Unknown mutation type: " + a.xa()))
	}
	return b
};
F.iua = function(a, b, c, d) {
	a = this.A.Gh(a, b, c, this.F);
	b = [];
	a.C && b.push(a.C);
	c = a.F;
	for (var e in c) b.push(c[e]);
	a.A && b.push(a.A);
	return lWa(b, d)
};
F.ob = function(a) {
	return this == a ? l : !a || !(a instanceof w$a) ? q : this.F.ob(a.F) && this.G.ob(a.G) && this.L.ob(a.L) && this.C.ob(a.C) && this.A.ob(a.A) && zUa(this.W, a.W)
};

function Xab() {}
Xab.prototype.F = D(zj);
Xab.prototype.A = function() {
	return [Ri, Wk]
};
Xab.prototype.C = function(a, b, c) {
	return Mj in b && ((c = c.Yl(zj, a)) || f(Error("Trying to recompute paragraph style when there is no paragraph style tethered.")), b.ps_hd != c.eh) ? [a] : m
};

function Yab(a, b, c, d, e, g) {
	var h = [new EC(Wk), new EC(zj), new C$a],
		n = [];
	!e.Y && !e.L && n.push(Td);
	go(jo(), Rxa) || n.push(Pg);
	e.W || n.push(Bk);
	e = [];
	for (var p in eWa) {
		var t = eWa[p];
		hn(n, t) || e.push(t)
	}
	n = [new K$a, new Xab];
	p = [new T$a];
	g = new Lx(g);
	h = new w$a(a, h, n, p, [], e, g);
	h.vb();
	a = new t$a(a, h);
	return new d$a(h, a, b, c, d)
};

function Zab(a, b) {
	for (var c = window, d = a.A.La().zc(), e = Vn(a.K), g = 0; g < d.length; g++) {
		var h = d[g];
		c[rha + (b ? b + ed : r) + h] = e[h]
	}
	a.F.push({
		eea: c,
		prefix: b
	})
};

function rD(a, b, c) {
	this.K = a;
	this.C = m;
	b && (this.C = b, this.G = k);
	(this.F = c || m) && this.F.yXa(a)
}
L(rD, M);
rD.prototype.A = function(a, b) {
	var c = this.C[rha + (this.G ? this.G + ed : r) + a];
	if (tm(c)) return c.apply(this.C, Array.prototype.slice.call(arguments, 1));
	if (this.F) return this.F.IXa(a, Array.prototype.slice.call(arguments, 1));
	f(Error("No method bound for " + a))
};
rD.prototype.O = function() {
	delete this.K;
	delete this.C;
	delete this.F;
	rD.M.O.call(this)
};

function sD(a, b) {
	this.K = {};
	this.A = a ? a.A.La() : new Xr;
	this.oG = b || m;
	this.F = []
}
L(sD, M);
sD.prototype.bind = function(a, b) {
	this.K[a] = this.oG ? K(b, this.oG) : b;
	return this
};
sD.prototype.O = function() {
	sD.M.O.call(this);
	for (var a = this.A.La().zc(), b = 0; b < this.F.length; b++) for (var c = this.F[b], d = 0; d < a.length; d++) {
		var e = rha + (c.prefix ? c.prefix + ed : r) + a[d];
		try {
			delete c.eea[e]
		} catch (g) {
			c.eea[e] = k
		}
	}
	delete this.F
};
var $ab = new sD;
Mn({
	q_a: "getId",
	P1a: "isEnabled",
	m6a: "setEnabled",
	U1a: "isVisible",
	y6a: mNa,
	S1a: "isSelected",
	t6a: "setSelected",
	w_a: "getSubscriptionCount",
	o_a: "getHint",
	s_a: "getLabel",
	p_a: "getIcon",
	r_a: "getKeys",
	y_a: "getValue",
	w6a: "setValue",
	t_a: "getProperty",
	s6a: "setProperty",
	YZa: "fireAction",
	bt: cOa,
	j7a: "unsubscribe",
	k7a: "unsubscribeByKey",
	sYa: "areKeysEnabled",
	o6a: "setKeysEnabled",
	tYa: "areKeysVisible",
	p6a: "setKeysVisible"
}, function(a) {
	$ab.A.add(a)
});
var abb = new sD;
Mn({
	rZa: "defineMenu",
	sZa: "defineMenuControl",
	tZa: "defineSelectableGroup",
	H5a: "populateSelect",
	h6a: "setActions",
	u6a: "setToolbarButtonDescriptors",
	v6a: "setTopLevelMenuActions"
}, function(a) {
	abb.A.add(a)
});
var bbb = new sD;
Mn({
	XYa: "closeMenus",
	kZa: "createAction",
	lZa: "createConfig",
	i6a: "setConfig",
	j6a: "setContainerConfig"
}, function(a) {
	bbb.A.add(a)
});
var cbb = new sD;
Mn({
	i_a: rDa,
	j_a: sDa,
	k_a: tDa,
	m_a: vDa,
	n_a: wDa,
	v_a: xDa,
	j5a: GKa,
	k6a: eNa,
	u_a: "getShell"
}, function(a) {
	cbb.A.add(a)
});

function dbb(a) {
	rD.call(this, cbb, a)
}
L(dbb, rD);
dbb.prototype.L = function() {
	return this.A(sDa)
};
dbb.prototype.W = function() {
	return this.A(tDa)
};

function tD(a, b) {
	this.C = a;
	var c = this.A = b,
		d = window.name;
	c.C = window.parent;
	c.G = d
}
L(tD, M);
tD.prototype.vb = function() {
	Zab(this.C);
	this.A.A(GKa)
};
tD.prototype.O = function() {
	tD.M.O.call(this);
	O(this.C);
	delete this.C;
	O(this.A);
	delete this.A
};
nu++;

function ebb(a, b, c) {
	this.L = a || r;
	this.K = b || r;
	this.G = [];
	this.C = !c;
	this.A = new yr(16);
	this.F = m
}
L(ebb, bq);
F = ebb.prototype;
F.KO = q;
F.fh = r;
F.wY = r;
F.mja = r;
F.yU = m;
F.vG = m;
F.qU = q;
F.uU = q;
F.BU = q;
F.KJ = m;
F.tD = m;
F.gc = C(oc);
F.bx = C(mc);
F.Oj = function() {
	return this.A.Oj()
};
F.Je = function() {
	return this.A.Je()
};
F.setTitle = function(a, b, c) {
	if (this.fh != a || b || c) this.fh = a, this.dispatchEvent(new uD(Qb, !! b))
};

function fbb(a, b, c) {
	if (a.yU != b || a.vG != c) a.yU = b, a.vG = c, a.mja = r, a.dispatchEvent(new uD(Ml, q))
}

function gbb(a, b, c) {
	a.F = b;
	a.dispatchEvent(new uD(Hl, !! c))
}
F.O = function() {
	ebb.M.O.call(this);
	this.A.dispose()
};

function uD(a, b) {
	R.call(this, a);
	this.A = b || q
}
L(uD, R);

function hbb() {}
var ibb = new hbb,
	jbb = new hbb;
var kbb = new sD;
Mn({
	l_a: uDa,
	x_a: yDa,
	R1a: XEa,
	u4a: NJa,
	l6a: fNa,
	n6a: gNa,
	r6a: jNa,
	x6a: lNa
}, function(a) {
	kbb.A.add(a)
});

function lbb() {
	sD.call(this, kbb, this);
	this.bind(uDa, this.XUa).bind(yDa, this.YUa).bind(XEa, this.$Ua).bind(NJa, this.Xpa).bind(fNa, this.bVa).bind(gNa, this.cVa).bind(jNa, this.dVa).bind(lNa, this.eVa)
}
L(lbb, sD);

function vD(a, b) {
	lbb.call(this);
	this.C = a;
	this.G = b || m
}
L(vD, lbb);
var mbb = {
	a: "savestate",
	D: bl
};
F = vD.prototype;
F.CR = m;
F.lL = m;
F.$Ua = function() {
	return !this.C.A.Je() && !this.C.A.Oj()
};
F.XUa = function() {
	return this.C.gc()
};
F.YUa = function() {
	return this.C.fh
};
F.cVa = function(a) {
	this.G && this.G.qe(a)
};
F.dVa = function(a, b) {
	U.Co.ua(l);
	U.Co.Ca(l);
	U.Co.$a(v, a);
	b != m && U.Co.setProperty(Mi, b)
};
F.bVa = function(a) {
	this.lL || (this.lL = new S(this), this.lL.A(this.C.A, gd, this.hga).A(this.C, Qb, this.hga));
	this.CR = a
};
F.eVa = G;
F.Xpa = G;
F.hga = function(a) {
	if (this.CR && (a = mbb[a.type])) {
		var b = this.CR;
		b(a)
	}
};
F.O = function() {
	delete this.C;
	delete this.CR;
	delete this.G;
	O(this.lL);
	delete this.lL;
	vD.M.O.call(this)
};

function nbb(a, b, c) {
	vD.call(this, b, a);
	this.L = c
}
L(nbb, vD);
nbb.prototype.Xpa = function(a) {
	var b;
	a: {
		b = this.L;
		if (!a && (a = obb(b))) {
			b = a;
			break a
		}
		b.G();
		b = r
	}
	return b
};
xm(hm().prototype, hm().prototype);

function BD(a, b, c, d) {
	this.cb = a;
	this.A = b;
	this.C = c;
	this.Nd = d
}
BD.prototype.aa = C(Fd);
BD.prototype.se = C(Eb);
BD.prototype.getHeight = C(yc);
BD.prototype.Sp = function() {
	return $ha + this.cb + Ql + this.A + Ql + this.C + Ql + this.Nd
};

function pbb(a) {
	this.F = a
}
pbb.prototype.A = function(a, b) {
	var c;
	switch (b.xa()) {
		case nh:
			c = b.aa();
			break;
		case ni:
			c = b.aa();
			break;
		default:
			return []
	}
	c = a.Fb(c);
	if (c.xa() != Ug && c.xa() != Jj) return [];
	c = c.F;
	if (2 != c.xa()) return [];
	var d = c.ff(),
		e = c.Ve();
	return [new BD(c.aa(), c.se(), d, e)]
};
pbb.prototype.C = function(a) {
	return !(this.F && a.C)
};

function qbb(a) {
	this.A = a
}
function y7a(a, b, c) {
	c = a.C(b, c);
	gs(c, function(a) {
		var c = this.A;
		a ? c.A[b] = a : delete c.A[b]
	}, a);
	return c
};

function rbb(a, b, c) {
	this.A = a;
	this.F = c
}
L(rbb, qbb);
rbb.prototype.C = function(a, b) {
	if (!b.aa()) return ks(m);
	var c = new BD(b.aa(), b.se(), b.ff(), b.Ve()),
		c = Tz(this.F, [new Rz(c)]);
	gs(c, function(a) {
		var b = a.GQ;
		1 != b.length && f(Error("Received invalid number of drawing fetch results."));
		a.FQ.length && f(Error("At least one drawing request failed."));
		return b[0].ng()
	});
	return c
};

function sbb() {
	this.A = {}
};

function CD(a, b) {
	this.cb = a;
	this.A = b
}
CD.prototype.aa = C(Fd);
CD.prototype.ng = C(Eb);

function DD(a, b) {
	for (var c = {}, d = 0; d < a.length; d++) {
		var e = a[d].aa().Sp();
		c[e] = l
	}
	for (d = 0; d < b.length; d++) c[b[d].Sp()] && f(Error("A fetch request can not be both successful and unsuccessful."));
	this.GQ = a;
	this.FQ = b
};

function ED(a, b, c, d, e, g) {
	es.call(this, e, g);
	this.ea = a;
	this.G = [];
	this.W = !! b;
	this.Ha = !! c;
	this.Ba = !! d;
	for (b = 0; b < a.length; b++) hs(a[b], K(this.Y, this, b, l), K(this.Y, this, b, q));
	0 == a.length && !this.W && this.zb(this.G)
}
L(ED, es);
ED.prototype.na = 0;
ED.prototype.Y = function(a, b, c) {
	this.na++;
	this.G[a] = [b, c];
	this.wj || (this.W && b ? this.zb([a, c]) : this.Ha && !b ? this.Bd(c) : this.na == this.ea.length && this.zb(this.G));
	this.Ba && !b && (c = m);
	return c
};
ED.prototype.Bd = function(a) {
	ED.M.Bd.call(this, a);
	Vm(this.ea, function(a) {
		a.cancel()
	})
};

function tbb(a, b, c) {
	this.K = a;
	this.F = b;
	this.A = c
}
tbb.prototype.C = function(a) {
	for (var b = [], c = [], d = 0; d < a.length; d++) {
		var e = a[d].aa(),
			g = {};
		g.cosmoId = e.aa();
		g.container = this.A;
		g = ubb(this.K, this.F, e.aa(), g);
		c.push(e);
		b.push(g)
	}
	a = new ED(b);
	var h = new es;
	gs(a, K(this.G, this, h, c));
	is(a, function(a) {
		h.Bd(a instanceof Error ? a : Rna + a)
	});
	return h
};
tbb.prototype.G = function(a, b, c) {
	if (c) {
		for (var d = [], e = [], g = 0; g < c.length; g++) c[g][0] ? d.push(new CD(b[g], c[g][1])) : e.push(b[g]);
		a.zb(new DD(d, e))
	} else a.Bd(Jma)
};

function FD(a, b) {
	this.F = a || m;
	this.C = !! b;
	this.sd = new Sr;
	this.A = new vbb(r, k);
	this.A.next = this.A.A = this.A
}
function wbb(a, b) {
	var c = a.sd.get(b);
	c && a.C && (c.remove(), xbb(a, c));
	return c
}
F = FD.prototype;
F.get = function(a, b) {
	var c = wbb(this, a);
	return c ? c.value : b
};
F.set = function(a, b) {
	var c = wbb(this, a);
	c ? c.value = b : (c = new vbb(a, b), this.sd.set(a, c), xbb(this, c))
};
F.shift = function() {
	return ybb(this, this.A.next)
};
F.pop = function() {
	return ybb(this, this.A.A)
};
F.remove = function(a) {
	return (a = this.sd.get(a)) ? (this.removeNode(a), l) : q
};
F.removeNode = function(a) {
	a.remove();
	this.sd.remove(a.key)
};
F.Dd = function() {
	return this.sd.Dd()
};
F.jc = function() {
	return this.sd.jc()
};
F.dd = function() {
	return this.map(function(a, b) {
		return b
	})
};
F.zc = function() {
	return this.map(gm())
};
F.contains = function(a) {
	return this.some(function(b) {
		return b == a
	})
};
F.clear = function() {
	zbb(this, 0)
};
F.forEach = function(a, b) {
	for (var c = this.A.next; c != this.A; c = c.next) a.call(b, c.value, c.key, this)
};
F.map = function(a, b) {
	for (var c = [], d = this.A.next; d != this.A; d = d.next) c.push(a.call(b, d.value, d.key, this));
	return c
};
F.some = function(a, b) {
	for (var c = this.A.next; c != this.A; c = c.next) if (a.call(b, c.value, c.key, this)) return l;
	return q
};
F.every = function(a, b) {
	for (var c = this.A.next; c != this.A; c = c.next) if (!a.call(b, c.value, c.key, this)) return q;
	return l
};

function xbb(a, b) {
	a.C ? (b.next = a.A.next, b.A = a.A, a.A.next = b, b.next.A = b) : (b.A = a.A.A, b.next = a.A, a.A.A = b, b.A.next = b);
	a.F != m && zbb(a, a.F)
}

function zbb(a, b) {
	for (var c = a.sd.Dd(); c > b; c--) a.removeNode(a.C ? a.A.A : a.A.next)
}
function ybb(a, b) {
	a.A != b && a.removeNode(b);
	return b.value
}
function vbb(a, b) {
	this.key = a;
	this.value = b
}
vbb.prototype.remove = function() {
	this.A.next = this.next;
	this.next.A = this.A;
	delete this.A;
	delete this.next
};

function GD(a) {
	this.A = {};
	this.C = a || {}
}
GD.prototype.get = function(a, b) {
	return !this.A[a] ? (this.A[a] = new FD(this.C[a], l), m) : this.A[a].get(b, m)
};
GD.prototype.set = function(a, b, c) {
	this.A[a] || (this.A[a] = new FD(this.C[a], l));
	this.A[a].set(b, c)
};
GD.prototype.La = function(a) {
	var b = new GD(a),
		c;
	for (c in this.A) this.A[c].forEach(function(a, e) {
		b.set(c, e, a)
	});
	return b
};

function Abb(a, b, c, d) {
	this.F = a;
	this.K = b;
	this.C = c;
	this.A = new Bbb;
	this.G = !! d
}
F = Abb.prototype;
F.hF = m;
F.RL = m;

function ubb(a, b, c, d) {
	var e = a.C.get(b, c),
		g = new es;
	e ? g.zb(e) : a.G && !U.Dc.isEnabled() ? g.Bd() : c in a.A.A ? a.A.A[c].A.push(g) : a.hF && c in a.hF.A ? a.hF.A[c].A.push(g) : (a.A.A[c] = new Cbb(Xj + Nn(a.A.A), b, [g], d), a.RL === m && (a.RL = eq(a.kDa, 0, a)));
	return g
}
F.kDa = function() {
	this.hF || Dbb(this);
	this.RL !== m && (fq(this.RL), this.RL = m)
};

function Dbb(a) {
	var b = a.A;
	a.A = new Bbb;
	if (!Rn(b.A) && a.F) {
		var c = {}, d = {}, e = {}, g;
		for (g in b.A) {
			var h = b.A[g];
			c[h.id] = [h.C, h.F];
			d[h.id] = g;
			e[h.id] = h.C
		}
		a.hF = b;
		c = {
			renderOps: c
		};
		g = a.G ? 1 : 3;
		HD(ID(JD(KD(LD(a.F.Wd(tca), c), K(a.pya, a, d, e, b)), K(a.qya, a, b)), g).Hf(Lg, a.K))
	}
}
F.pya = function(a, b, c, d) {
	d = d.Ce();
	for (var e in d) {
		var g = d[e],
			h = a[e];
		this.C.set(b[e], h, g);
		for (var h = c.A[h].A, n = 0; n < h.length; n++) h[n].zb(g)
	}
	Ebb(this)
};
F.qya = function(a, b) {
	for (var c in a.A) for (var d = a.A[c], e = 0; e < d.A.length; e++) d.A[e].Bd(b);
	Ebb(this)
};

function Ebb(a) {
	a.hF = m;
	0 < Nn(a.A.A) && Dbb(a)
}
function Bbb() {
	this.A = {}
}
function Cbb(a, b, c, d) {
	this.id = a;
	this.C = b;
	this.A = c;
	this.F = d
};

function MD(a, b, c) {
	this.K = a;
	this.C = m;
	this.G = b;
	this.ra = c;
	this.A = {};
	this.F = [];
	gs(this.G, this.Vxa, this)
}
F = MD.prototype;
F.Vxa = function(a) {
	this.C = a;
	for (a = 0; a < this.F.length; a++) Fbb(this, this.F[a])
};

function Tz(a, b) {
	for (var c = [], d = [], e = 0; e < b.length; e++) {
		var g = b[e].aa().Sp(),
			h = a.A[g];
		h || (c.push(b[e]), a.A[g] = h = new es);
		d.push(h)
	}
	e = new es;
	hs(new ED(d), K(a.nMa, a, e), K(e.Bd, e));
	Fbb(a, c);
	return e
}

function Fbb(a, b) {
	if (a.G.wj) if (a.C) {
		for (var c = [], d = [], e = [], g = 0; g < b.length; g++) {
			var h = b[g];
			if (h.A) c.push(h);
			else {
				var n = a.C.Kca(h);
				d.push(n);
				e.push(h)
			}
		}
		e.length && gs(new ED(d), K(a.lAa, a, e));
		Gbb(a, c)
	} else Gbb(a, b);
	else a.F.push(b)
}
F.lAa = function(a, b) {
	for (var c = {}, d = 0; d < a.length; d++) c[a[d].aa().Sp()] = a[d];
	for (d = 0; d < b.length; d++) if (b[d][0]) {
		var e = b[d][1];
		delete c[e.aa().Sp()];
		this.d5(e)
	}
	Gbb(this, On(c))
};

function Gbb(a, b) {
	if (b.length) {
		for (var c = [], d = 0; d < b.length; d++) c.push(b[d].aa());
		hs(a.K.C(b), K(a.yOa, a), K(a.Q4, a, Qna, c))
	}
}
F.yOa = function(a) {
	var b = a.GQ;
	a = a.FQ;
	a.length && this.Q4(0, a);
	if (this.C) for (c = 0; c < b.length; c++) a = b[c], hs(this.C.sync(a), K(this.d5, this), K(this.Q4, this, yla, [a.aa()]));
	else for (var c = 0; c < b.length; c++) this.d5(b[c])
};
F.d5 = function(a) {
	var b = a.aa().Sp(),
		c = this.A[b];
	delete this.A[b];
	c.zb(a)
};
F.nMa = function(a, b) {
	for (var c = {}, d = {}, e = 0; e < b.length; e++) {
		var g = b[e];
		g[0] ? (g = g[1], c[g.aa().Sp()] = g) : (g = g[1], d[g.Sp()] = g)
	}
	a.zb(new DD(On(c), On(d)))
};
F.Q4 = function(a, b) {
	for (var c = 0; c < b.length; c++) {
		var d = b[c].Sp(),
			e = this.A[d];
		delete this.A[d];
		e.Bd(b[c])
	}
};

function Hbb(a, b, c, d, e, g) {
	a = Ev(a);
	b && (a[1] = b.replace(nb, r));
	b = d || a[5] || Sa;
	c && (b = Ua + c + b);
	Cm(b, Sa) || (b += Sa);
	e && (b += e.replace(Sa, r));
	return Dv(a[1], a[2], a[3], a[4], b, g ? Nv(g) : m)
};

function Ibb(a) {
	a = a.replace(kca, gca);
	return a = a.replace(/\/a\/drawings\/([^\/]+)\//, fca)
};

function Jbb(a, b, c) {
	this.A = a;
	this.G = b;
	this.F = c
}
Jbb.prototype.C = function(a) {
	for (var b = [], c = 0; c < a.length; c++) {
		var d = a[c].aa(),
			e = d.aa(),
			g = d.se(),
			h = d.C,
			n = d.getHeight(),
			p = Hbb(this.G, window.location.protocol, this.F, k, Og, this.A ? [sd, this.A] : k),
			h = new vo(h, n),
			p = Ibb(p),
			n = Ev(p),
			t = n[5];
		if (p = t) t = t.replace(/\/$/, r), p = t.split(Sa), 0 < p.length && p.splice(p.length - 1, 0, ee, e), p = p.join(Sa);
		e = {
			w: String(Math.ceil(h.width)),
			h: String(Math.ceil(h.height))
		};
		g != m && (e.rev = String(g));
		e.ac = 1;
		e = Dv(n[1], n[2], n[3], n[4], p, Ov(e));
		b.push(new CD(d, e))
	}
	return ks(new DD(b, []))
};

function Kbb(a, b, c, d, e) {
	e = e || {};
	var g = new GD,
		h;
	for (h in e) g.set(Og, h, e[h]);
	return new MD(new tbb(new Abb(a, b, g), Og, b), ks(c), d)
};

function Lbb(a) {
	this.cb = a
}
Lbb.prototype.aa = C(Fd);
Lbb.prototype.Sp = function() {
	return Rja + this.cb
};

function Mbb() {}
Mbb.prototype.A = function(a, b) {
	var c;
	a: {
		switch (b.xa()) {
			case nh:
				c = b.aa();
				break a;
			case ni:
				c = b.aa();
				break a
		}
		c = m
	}
	return c && (c = a.Fb(c), c.xa() != Ug && c.xa() != Jj ? c = m : (c = c.F, c = 0 == c.xa() ? !c.gc() || aab(c) ? m : c : m), c) ? [new Lbb(c.gc())] : []
};
Mbb.prototype.C = D(q);

function Nbb(a) {
	this.A = a
}
function Obb(a, b) {
	var c = Tz(a.A, [new Rz(new Lbb(b))]);
	gs(c, function(a) {
		var b = a.GQ;
		1 != b.length && f(Error("Received invalid number of image fetch results."));
		a.FQ.length && f(Error("At least one image request failed."));
		return b[0].ng()
	});
	return c
};

function Pbb(a, b, c) {
	this.A = a;
	this.F = c
}
L(Pbb, qbb);
Pbb.prototype.C = function(a, b) {
	var c = b.gc();
	return !c || aab(b) || !this.F ? ks(m) : Obb(this.F, c)
};
var Qbb = new sD;
Mn({
	i5a: FKa,
	l5a: IKa,
	m5a: JKa,
	n5a: KKa,
	k5a: HKa
}, function(a) {
	Qbb.A.add(a)
});
var Rbb = new sD;
Mn({
	zj: hEa,
	C5a: cLa,
	U5a: BMa,
	$5a: VMa,
	q6a: iNa,
	l7a: FPa
}, function(a) {
	Rbb.A.add(a)
});

function Sbb(a) {
	rD.call(this, Qbb, a)
}
L(Sbb, rD);

function Tbb(a, b, c, d) {
	sD.call(this, Rbb, this);
	this.C = a;
	this.L = b;
	this.G = c;
	this.W = d;
	this.bind(hEa, this.highlightDoco).bind(cLa, this.WNa).bind(BMa, this.XNa).bind(VMa, this.YNa).bind(iNa, this.ZNa).bind(FPa, this.$Na)
}
L(Tbb, sD);
F = Tbb.prototype;
F.YNa = function(a) {
	this.C.Ue.scrollLeft = a
};
F.highlightDoco = function(a) {
	if (!this.G || !this.W) return -1;
	var b = this.G.j0(a);
	if (!b) return -1;
	this.W.pF(a);
	return ND(this.C, b)
};
F.WNa = function() {
	this.L.Ika();
	Ubb(this.C.L)
};
F.XNa = function() {
	this.L.D9()
};
F.ZNa = function(a) {
	var b = this.C.Xh;
	b.Sca = a;
	a = OD(b);
	for (var c = a.start; c <= a.end; c++) Vbb(b, c)
};
F.$Na = function(a, b) {
	this.C.oN(new xs(a, b))
};

function Wbb(a, b, c) {
	this.A = a;
	this.C = b;
	this.F = c;
	this.R = new S(this);
	this.R.A(b, PEa, this.RBa).A(b, fCa, this.QBa).A(b.$m().yf(), ZKa, this.SBa).A(c, Lf, this.TBa)
}
L(Wbb, M);
F = Wbb.prototype;
F.tQ = m;
F.wfa = m;
F.vfa = m;
F.ega = m;
F.RBa = function() {
	this.A.A(IKa)
};
F.QBa = function() {
	var a = this.C.na,
		b = a.ff() + 2,
		a = a.Ve() + 2;
	if (b != this.wfa || a != this.vfa) this.A.A(KKa, b, a), this.wfa = b, this.vfa = a
};
F.SBa = function() {
	var a = this.C.$m().Kq();
	a != this.ega && (this.A.A(JKa, a), this.ega = a)
};
F.TBa = function() {
	if (this.tQ) {
		var a = Hs(this.F.A.getSelection());
		(a = this.tQ.f0(a)) && this.A.A(HKa, a)
	}
};
F.O = function() {
	O(this.R);
	delete this.R;
	delete this.C;
	delete this.A;
	delete this.F;
	delete this.tQ;
	Wbb.M.O.call(this)
};

function PD(a, b) {
	this.G = a;
	var c = this.A = new Sbb;
	c.C = window.parent;
	c.G = ura;
	this.F = new Wbb(this.A, a, b)
}
L(PD, M);
PD.prototype.C = m;
PD.prototype.vb = function(a, b, c) {
	this.C = new Tbb(this.G, a, b, c);
	Zab(this.C, vra);
	b && (this.F.tQ = b);
	this.A.A(FKa)
};
PD.prototype.O = function() {
	O(this.F);
	delete this.F;
	O(this.C);
	delete this.C;
	O(this.A);
	delete this.A;
	PD.M.O.call(this)
};

function Xbb(a) {
	this.A = a
}
function NXa(a) {
	return a.xa() == ph && a.G == Ni
}
function xu(a, b) {
	return b.Ra(Ni, 0).kU || a.A
};

function QD(a) {
	this.A = a
}
QD.prototype.Pa = function() {
	var a = {};
	a.ty = this.A;
	return a
};

function RD() {
	this.A = kd
}
L(RD, QD);
RD.prototype.Pa = function(a) {
	var b = RD.M.Pa.call(this, a);
	b.et = a.Aa;
	b.id = a.aa();
	b.epm = a.W();
	return b
};
RD.prototype.ri = function(a) {
	return new YB(a.et, a.id, a.epm)
};

function SD(a, b) {
	this.A = Gsa;
	this.C = a;
	this.ra = b || m
}
L(SD, QD);
SD.prototype.Pa = function(a) {
	if (a.Ht()) return this.ra && this.ra.log(Error(Rla + a.G + Faa)), {};
	var b = SD.M.Pa.call(this, a),
		c = a.G,
		d = a.L;
	this.C && c == Td && (c = qva, d = Wn(d), d.das_a = d.cs_cids, delete d.cs_cids);
	b.st = c;
	b.si = a.C();
	b.ei = a.F();
	b.sm = d;
	return b
};
SD.prototype.ri = function(a) {
	var b = a.st,
		c = a.si,
		d = a.ei,
		e = a.sm;
	a = !! a.fm;
	if (b == qva) if (this.C) b = Td, e = Wn(e), e.cs_cids = e.das_a, delete e.das_a;
	else return jC.ya();
	return new vB(b, c, d, e, a)
};

function TD() {
	this.A = ie
}
L(TD, QD);
TD.prototype.Pa = function(a) {
	var b = TD.M.Pa.call(this, a);
	b.id = a.aa();
	return b
};
TD.prototype.ri = function(a) {
	return new BB(a.id)
};

function UD() {
	this.A = PBa
}
L(UD, QD);
UD.prototype.Pa = function(a) {
	var b = UD.M.Pa.call(this, a);
	b.si = a.C();
	b.ei = a.F();
	return b
};
UD.prototype.ri = function(a) {
	return new uB(a.si, a.ei)
};

function VD() {
	this.A = VEa
}
L(VD, QD);
VD.prototype.Pa = function(a) {
	var b = VD.M.Pa.call(this, a);
	b.ibi = a.K();
	b.s = a.qa();
	return b
};
VD.prototype.ri = function(a) {
	return new aC(a.ibi, a.s)
};

function Ybb(a, b) {
	this.Y = hHa;
	this.Ba = a;
	this.Ma = b
}
L(Ybb, sB);
Ybb.prototype.A = C(Ib);

function WD() {
	this.A = OJa
}
L(WD, QD);
WD.prototype.Pa = function(a) {
	for (var b = WD.M.Pa.call(this, a), c = [], d = a.Ma, e = 0; e < d.length; ++e) {
		var g = d[e];
		c.push([g.start, g.end])
	}
	b.cl = (new ws(a.A())).Pa();
	b.sr = c;
	return b
};
WD.prototype.ri = function(a) {
	for (var b = a.sr, c = [], d = 0; d < b.length; d++) {
		var e = b[d];
		c.push(new xs(e[0], e[1]))
	}
	return new Ybb((new ws(a.cl.si, a.cl.aps)).A(), c)
};

function XD(a) {
	this.A = TJa;
	this.C = a
}
L(XD, QD);
XD.prototype.Pa = function(a) {
	var b = XD.M.Pa.call(this, a),
		c = [];
	a = a.na;
	for (var d = 0; d < a.length; d++) c.push(this.C.Pa(a[d]));
	b.mts = c;
	return b
};
XD.prototype.ri = function(a) {
	a = a.mts;
	for (var b = [], c = 0; c < a.length; c++) b.push(this.C.ri(a[c]));
	return new iC(b)
};

function Zbb() {
	this.A = nj
}
L(Zbb, QD);
Zbb.prototype.ri = function() {
	return jC.ya()
};
xm(hm().prototype, j8a.prototype);

function YD(a, b) {
	this.Y = a;
	this.Ba = b
}
L(YD, k8a);
YD.prototype.d_ = kq;
YD.prototype.zaa = kq;

function $bb(a) {
	YD.call(this, Ee, a)
}
L($bb, YD);

function ZD(a, b) {
	this.A = a;
	this.C = b
}
L(ZD, QD);
ZD.prototype.Pa = function(a) {
	var b = ZD.M.Pa.call(this, a);
	a = a.Ba;
	for (var c = [], d = 0; d < a.length; d++) c.push(this.C.Pa(a[d]));
	b.snapshot = c;
	return b
};

function acb(a, b) {
	for (var c = [], d = b.snapshot, e = 0; e < d.length; e++) c.push(a.C.ri(d[e]));
	return c
};

function bcb(a) {
	ZD.call(this, JMa, a)
}
L(bcb, ZD);
bcb.prototype.ri = function(a) {
	return new $bb(acb(this, a))
};

function ccb(a, b) {
	YD.call(this, Fe, b);
	this.Na = a
}
L(ccb, YD);
ccb.prototype.se = C(xc);

function dcb(a) {
	ZD.call(this, LMa, a)
}
L(dcb, ZD);
dcb.prototype.ri = function(a) {
	return new ccb(0, acb(this, a))
};

function $D() {
	this.A = Uk
}
L($D, QD);
$D.prototype.Pa = function(a) {
	var b = $D.M.Pa.call(this, a);
	b.id = a.aa();
	b.spi = a.A();
	return b
};
$D.prototype.ri = function(a) {
	return new tB(a.id, a.spi)
};

function aE(a, b) {
	this.Y = ni;
	this.cb = a;
	this.Ba = b
}
L(aE, sB);
aE.prototype.aa = C(Fd);
aE.prototype.W = C(Ib);

function bE() {
	this.A = vPa
}
L(bE, QD);
bE.prototype.Pa = function(a) {
	var b = bE.M.Pa.call(this, a);
	b.id = a.aa();
	b.epm = a.W();
	return b
};
bE.prototype.ri = function(a) {
	return new aE(a.id, a.epm)
};

function ecb() {};

function fcb() {
	this.A = {};
	this.A.is = bi;
	this.A.ds = wh;
	this.A.ae = nh;
	this.A.ue = ni;
	this.A.de = rh;
	this.A.te = li;
	this.A.as = ph;
	this.A.mc = hHa;
	this.A.rvrt = Fe;
	this.A.rplc = Ee;
	this.A.mlti = Ae;
	this.A[nj] = De
}
fcb.prototype.xa = function(a) {
	return this.A[a.ty]
};

function gcb(a, b) {
	this.A = a;
	this.C = b
}
L(gcb, M);

function hcb() {}
F = hcb.prototype;
F.gw = m;
F.iX = m;
F.IP = function(a, b, c) {
	return this.gw ? this.gw.IP(a, b, c) : a
};
F.oE = function(a, b) {
	return this.gw ? this.gw.oE(a, b) : new gcb(a, b)
};
F.EO = function(a) {
	this.gw && this.gw.EO(a);
	this.iX = a
};

function icb(a) {
	this.A = a
}
icb.prototype.ff = function(a) {
	var b = this.A.hf();
	return Ru(Pu.ya(), N_a(b), a)
};
icb.prototype.Ve = function(a) {
	var b = this.A.hf();
	return Ru(Pu.ya(), O_a(b), a)
};

function cE() {}
cE.prototype.KI = function(a, b, c) {
	c = c.A();
	0 < c && (YA(a.A, Qe, c, c), YA(a.A, Re, c, c));
	b = b.A();
	YA(a.A, Qe, b, b);
	YA(a.A, Re, b, b)
};
cE.prototype.II = G;
cE.prototype.JI = function(a, b, c) {
	b = c.A();
	0 < b && (YA(a.A, Qe, b, b), YA(a.A, Re, b, b))
};
cE.prototype.LI = G;

function jcb() {}
F = jcb.prototype;
F.AX = function(a, b) {
	var c = b.K(),
		d = b.qa();
	yZa(a.ba(), c) && dE(a, c + d.length, c + d.length)
};
F.C0 = function(a, b, c) {
	var d = b.C();
	c = c.Yh();
	yZa(a.ba(), d) && dE(a, d, d);
	0 < c.Gh(hg).pd().length && kcb(a, b.C())
};

function kcb(a, b) {
	var c = a.ba(),
		d = c.ic(hg),
		e = vn(d, b);
	for (0 > e && (e = -e - 1); e < d.length; e++) {
		var g = d[e];
		dE(a, g, g);
		g = c.Ra(hg, g);
		g = c.Rc(g.F) + 1;
		0 < g && dE(a, g, g)
	}
}
F.yt = function(a, b) {
	var c = b.C();
	kcb(a, c)
};
F.KI = function(a, b) {
	for (var c = a.ba(), d = c.ic(hg), e = b.aa(), g = 0; g < d.length; g++) {
		var h = d[g];
		if (jw(c.Ra(hg, h)) == e) {
			dE(a, h, h);
			break
		}
	}
};
F.II = G;
F.JI = G;
F.LI = G;

function lcb() {}
F = lcb.prototype;
F.II = G;
F.KI = function(a, b, c) {
	eE(a, b.A());
	eE(a, c.A())
};
F.LI = function(a, b) {
	var c = a.ba().Rc(b.aa());
	eE(a, c)
};
F.JI = function(a, b, c) {
	eE(a, c.A())
};
F.AX = G;
F.C0 = function(a, b, c) {
	b = b.C();
	(c = c.Yh().Lf.positioned) && 0 < c.length && eE(a, b)
};

function eE(a, b) {
	if (!(0 > b)) {
		var c = a.ba().qa(),
			d = Rs(c, b);
		dE(a, d, Math.min(b + 2E3, c.ub() - 1))
	}
};

function mcb() {}
mcb.prototype.yt = function(a, b) {
	var c = b.L;
	VBa in c || Cf in c || Df in c || Ef in c || Ff in c || Gf in c ? (c = b.C(), dE(a, c, Vs(a.C.qa(), c)), c = a.ba(), ncb(this, a, c.Dj(pg)), ncb(this, a, c.Dj(hg))) : dE(a, b.C(), b.C())
};

function ncb(a, b, c) {
	if (c) {
		var d = b.ba();
		dr(c, function(a, c) {
			for (var h = 0; h < c.length; h++) {
				var n = d.Rc(c[h]);
				dE(b, n, Vs(b.C.qa(), n))
			}
			return q
		}, a)
	}
};

function ocb() {}
ocb.prototype.yt = function(a, b) {
	var c = a.ba(),
		d = b.C(),
		c = zt(c.qa(), d);
	dE(a, d, c)
};

function pcb() {}
pcb.prototype.yt = function(a, b) {
	var c = {}, d;
	for (d in b.L) c[J$a(d)] = l;
	if (c[0]) dE(a, 1, a.ba().qa().ub() - 1);
	else {
		d = a.ba();
		for (var e = d.ic(zj), g = 0; g < e.length; g++) {
			var h = e[g],
				n = 0 == g ? 1 : e[g - 1] + 1,
				p = Fx(d.td(zj, h));
			c[p] && dE(a, n, h)
		}
	}
};

function fE() {}
fE.prototype.II = G;
fE.prototype.LI = function(a, b) {
	var c = b.aa(),
		c = a.ba().Rc(c);
	0 <= c && dE(a, c, c)
};
fE.prototype.KI = G;
fE.prototype.JI = G;

function qcb() {}
qcb.prototype.yt = function(a, b) {
	var c = b.C(),
		d = tt(a.ba().qa(), c);
	dE(a, c, d)
};

function gE(a) {
	this.NN = a || window;
	this.KV = up(this.NN, ck, this.gVa, q, this);
	this.pH = Po(this.NN)
}
L(gE, bq);
F = gE.prototype;
F.KV = m;
F.NN = m;
F.pH = m;
F.Df = function() {
	return this.pH ? this.pH.La() : m
};
F.O = function() {
	gE.M.O.call(this);
	this.KV && (xp(this.KV), this.KV = m);
	this.pH = this.NN = m
};
F.gVa = function() {
	var a = Po(this.NN);
	MRa(a, this.pH) || (this.pH = a, this.dispatchEvent(ck))
};

function rcb(a, b) {
	this.efa = !! b;
	this.A = a;
	this.C = new gE;
	this.R = new S(this);
	this.R.A(this.C, ck, this.gFa)
}
L(rcb, bq);
F = rcb.prototype;
F.efa = q;
F.gFa = function(a) {
	this.dispatchEvent(a);
	this.Me()
};
F.Me = function() {
	this.dispatchEvent($b);
	this.dispatchEvent(cc);
	this.dispatchEvent(ec)
};

function m5a(a, b) {
	var c = a.A,
		d = Yp(c);
	c.style.width = Math.max(b.width - d.left - d.right, 0) + Sj;
	a.dispatchEvent($b);
	a.dispatchEvent(ec)
}
F.dp = function() {
	return this.C.Df()
};
F.O = function() {
	rcb.M.O.call(this);
	this.R.dispose();
	this.C.dispose();
	this.A = m
};

function hE() {
	this.A = {}
}
L(hE, M);
hE.prototype.yh = C(Eb);
hE.prototype.O = function() {
	delete this.A;
	hE.M.O.call(this)
};
var scb = RegExp("([\\S\\s]*?)(\\b(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|aero|biz|cat|coop|info|int|jobs|mobi|museum|name|pro|travel|arpa|asia|xxx|[a-z][a-z])\\b)|\\b(?:(https?|ftp)://+|www\\.)\\w[:;,\\.?\\[\\]\\w/~%&=+#-@!]*|$)", kg);

function iE(a) {
	var b = a.A;
	return 0 != Hs(b.getSelection()).xa() ? m : EB(a.ba().Ra(Qi, Tw(b)))
};

function tcb() {}
F = tcb.prototype;
F.yt = function(a, b, c) {
	var d = b.C(),
		e = b.F(),
		g = a.ba(),
		h = b.L;
	b = c.Gh().pd();
	var n = Rs(g.qa(), d);
	dE(a, n, Us(g.qa(), n));
	c = new Xr;
	if (yJa in h) {
		var p = b[0].Wc,
			t = a.ba(),
			u = a.ra,
			x = Cv(t, d, u);
		x && Yr(c, x);
		(x = Cv(t, e, u, k, p)) && Yr(c, x)
	}
	if (xJa in h && h.ls_id === m) {
		var e = a.ba(),
			y;
		for (y in b) {
			t = b[y];
			h = t.Cc;
			p = d + Number(y);
			for (t = t.Wc; 8 >= t; t++)(u = Cv(e, p, a.ra, h, t)) && Yr(c, u)
		}
	}
	d = n - 1;
	d > Ss(g.qa(), d) && zv(g, d) && dE(a, d, d);
	c && ucb(a, c)
};
F.II = G;
F.JI = G;
F.KI = G;
F.LI = function(a, b) {
	for (var c = b.aa(), d = a.ba(), e = new Xr, c = bZa(d, c), g = 0; g < c.length; g++) e.add(Rs(d.qa(), c[g]));
	ucb(a, e)
};
F.AX = function(a, b) {
	var c = a.ba(),
		d = b.K(),
		e = b.qa(),
		g = at([da]);
	if (g && g.test(e)) {
		for (var h, n, g = at([da]); n = g.exec(e);) if (n = Cv(c, d + n.index, a.ra)) h || (h = new Xr), Yr(h, n);
		h && ucb(a, h)
	}
};
F.C0 = function(a, b, c) {
	var d = b.C();
	b = c.Yh();
	var e = a.ba(),
		g = a.ra,
		h;
	b = b.Gh(Ri).pd();
	var n = q;
	dr(b, function(a, b) {
		n = l;
		var c = Cv(e, d - 1, g, b.Cc, b.Wc);
		c && (h || (h = new Xr), Yr(h, c));
		return q
	});
	h && ucb(a, h);
	n && (b = Rs(e.qa(), d) - 1, 0 == b && (b = 1), zv(e, b) && dE(a, b, b))
};

function ucb(a, b) {
	var c = b.zc();
	xn(c);
	for (var d = 0; d < c.length; d++) {
		var e = c[d];
		dE(a, e, e)
	}
};

function vcb() {}
vcb.prototype.yt = function(a, b) {
	var c = b.C(),
		d = a.ba().qa(),
		e = Rs(d, c),
		c = Us(d, e);
	dE(a, e, c);
	e -= 1;
	e > Ss(d, e) && dE(a, e, e);
	e = c + 1;
	e <= Vs(d, c) && dE(a, e, e)
};

function wcb() {}
wcb.prototype.yt = G;

function xcb(a) {
	this.A = a
}
xcb.prototype.yt = function(a, b) {
	var c = b.C(),
		d = b.F();
	YA(a.A, this.A, c, d)
};

function ycb(a, b) {
	this.C = a;
	this.A = b;
	this.F = [];
	this.G = {};
	this.K = {}
}
L(ycb, M);

function jE(a, b, c) {
	a.G[b] && f(Error("An entity redrawer for type: " + b + xaa));
	a.G[b] = c
}
function kE(a, b, c) {
	a.K[b] && f(Error("A style redrawer for type: " + b + xaa));
	a.K[b] = c
}
function zcb(a, b, c) {
	var d = b.C(),
		e = c.Yh();
	Acb(a.C, d, e);
	for (d = 0; d < a.F.length; ++d) a.F[d].C0(a.A, b, c)
}
function Bcb(a, b) {
	var c = a.A.ba().Fb(b);
	if (!c) return a.A.ra.log(Error(Lea + b)), m;
	c = c.xa();
	return a.G[c]
}
ycb.prototype.O = function() {
	delete this.F;
	delete this.G;
	delete this.K;
	delete this.C;
	O(this.A);
	delete this.A;
	ycb.M.O.call(this)
};

function lE(a, b, c) {
	this.A = a;
	this.C = b;
	this.ra = c
}
L(lE, M);
lE.prototype.ba = C(Jb);

function dE(a, b, c) {
	Ccb(a.A, b, c)
}
lE.prototype.O = function() {
	delete this.ra;
	delete this.A;
	delete this.C;
	lE.M.O.call(this)
};

function Dcb(a, b) {
	this.C = a;
	this.A = b
};

function Ecb(a, b) {
	vy.call(this, a, le);
	this.F = b
}
L(Ecb, vy);
Ecb.prototype.C = function(a) {
	return Ecb.M.C.call(this, a) && this.F.qa() == a.F.qa()
};

function Fcb(a, b) {
	vy.call(this, a, Wg);
	this.A = b
}
L(Fcb, vy);
Fcb.prototype.C = function(a) {
	return Fcb.M.C.call(this, a) && this.A == a.A
};

function mE(a, b) {
	this.A = a;
	this.C = b
}
L(mE, M);

function Sy(a) {
	return Gcb(a.A, a.C)
}
mE.prototype.xj = function(a, b) {
	var c = this.A,
		d = this.C.start;
	c.G.remove(d, a);
	var e = c.F.remove(d, a),
		d = Hcb(c, d, a);
	Icb(c, a, b, e, d);
	Jcb(c)
};

function az(a, b, c) {
	var d = a.A;
	a = Hcb(d, a.C.start, b);
	Icb(d, b - 1, c, [], a);
	Jcb(d)
}
mE.prototype.O = function() {
	delete this.A;
	delete this.C;
	mE.M.O.call(this)
};

function oz(a) {
	this.C = a;
	this.A = {}
}
L(oz, M);
oz.prototype.xj = function(a) {
	var b = this.C,
		c = a.start,
		d = a.end,
		e;
	for (e in b.C) b.C[e].remove(c, d);
	for (var g in this.A) this.A[g].remove(a.start, a.end)
};
oz.prototype.O = function() {
	delete this.C;
	delete this.A;
	oz.M.O.call(this)
};

function Kcb(a, b) {
	vy.call(this, a, gMa);
	this.A = b
}
L(Kcb, vy);
Kcb.prototype.C = function(a) {
	return Kcb.M.C.call(this, a) && this.A == a.A
};

function nE(a, b) {
	this.K = a;
	this.C = {};
	this.F = new IA;
	this.G = new IA;
	this.A = [];
	this.W = [];
	this.ra = b
}
L(nE, bq);
nE.prototype.Y = 0;
nE.prototype.L = m;

function Lcb(a, b, c, d) {
	a.A = [];
	dr(b, function(a, b) {
		if (I(c) && a < c || I(d) && a > d) return q;
		this.A[a] = b;
		return q
	}, a)
}
function oE(a, b, c) {
	if (0 > b || 0 >= c) a.ra.log(Error(Cfa + b + raa + c));
	else {
		a.G.shift(b, c);
		Mcb(a, b, c);
		a.L = m;
		for (var d in a.C) a.C[d].shift(b, c);
		a.F.shift(b, c) || a.F.add(b, b + c - 1);
		Jcb(a)
	}
}

function Jcb(a) {
	var b = a.F.ce();
	0 < b.length && b[b.length - 1].end >= a.K.qa().ub() && a.ra.log(Error(uka + b[b.length - 1].end + maa + a.K.qa().ub()))
}
function Ccb(a, b, c) {
	0 > b || c < b || c > a.K.qa().ub() ? a.ra.log(Error(Efa + b + Ma + c + Ura + a.K.qa().ub())) : a.G.add(b, c)
}
function v0a(a, b) {
	if (!(0 >= b.length)) {
		for (var c = 0; c < b.length; c++) Ccb(a, b[c].start, b[c].end);
		a.Y++;
		a.dispatchEvent(lDa)
	}
}
function YA(a, b, c, d) {
	0 > c || 0 > d || d < c ? a.ra.log(Error(Dfa + c + Ma + d + cd)) : (a.C[b] || (a.C[b] = new IA), a.C[b].add(c, d))
}

function Acb(a, b, c) {
	var d = c.qa().length;
	if (0 > b || 0 == d) a.ra.log(Error(Bfa + b + Bba + d));
	else {
		var e = b + d - 1;
		a.L = m;
		a.G.remove(b, e, l);
		var g = a.F.remove(b, e, l),
			h;
		for (h in a.C) a.C[h].remove(b, e, l);
		var n = er(a.W);
		h = [];
		for (var p = 0; p < n.length; p++) {
			var t = n[p];
			if (t > e) break;
			t >= b && t <= e && h.push(t)
		}
		if (0 == h.length) h = c;
		else {
			c = new Ncb(c);
			for (p = 0; t = h[p]; p++) {
				for (var n = 0, u; u = a.W[t][n]; n++) {
					var x = c,
						y = t - b,
						B = u.aa(),
						E = u.xa(),
						H = x.Lf[E];
					H || (H = x.Lf[E] = []);
					(E = H[y]) || (E = H[y] = []);
					E.push(B);
					x.A[B] = u
				}
				delete a.W[t]
			}
			h = c
		}
		for (p = g.length - 1; 0 <= p; p--) t = g[p].end - b, h = tZa(hw(h, 0, g[p].start - b - 1), hw(h, t + 1));
		n = c = t = 0;
		x = er(a.A);
		for (p = 0; p < x.length; p++) {
			for (y = x[p]; c < g.length; c++) {
				u = g[c];
				if (y <= u.end) break;
				n += u.end - u.start + 1
			}
			u = n;
			g[c] && y > g[c].start && (u += y - g[c].start);
			y >= b && y <= e + 1 && (B = a.A[y], h = iw(h, B, y - b + t - u), t += B.qa().length, delete a.A[y]);
			if (y > e) break
		}
		e = Ocb(a, b);
		0 < h.qa().length ? Pcb(a, e, h) : delete a.A[b];
		Mcb(a, e + 1, -d)
	}
}
function Qcb(a, b, c) {
	var d = a.W[b];
	d || (d = a.W[b] = []);
	(a = Xv(c.xa(), c.aa(), c.Pa())) && d.push(a)
}

function Mcb(a, b, c) {
	for (var d = er(a.A), e = [], g = 0; g < d.length; g++) {
		var h = d[g],
			n = h >= b ? h + c : h;
		e[n] = e[n] ? tZa(e[n], a.A[h]) : a.A[h]
	}
	a.A = e;
	d = er(a.W);
	e = [];
	for (g = 0; g < d.length; g++) h = d[g], n = h >= b ? h + c : h, e[n] ? sn(e[n], a.W[h]) : e[n] = a.W[h];
	a.W = e
}
function Rcb(a) {
	return a.L || (a.L = er(a.A))
}
function i2a(a, b) {
	var c = -1,
		d;
	for (d in a.C) {
		var e = HA(a.C[d], b);
		if (e) {
			if (e.start <= b) return b;
			c = -1 == c ? e.start : Math.min(c, e.start)
		}
	}
	return c
}
function R5a(a, b) {
	var c = [],
		d;
	for (d in a.C) nD(a.C[d], b.start, b.end) && c.push(d);
	return c
}

function Gcb(a, b) {
	var c = b.start,
		d = b.end,
		e = nD(a.F, c, d),
		g = nD(a.G, c, d),
		h = Rcb(a),
		n = vn(h, c);
	0 > n && (n = -n - 1);
	h = h[n];
	if (!I(h) || h <= c || h > d + 1) h = -1;
	if (g && (!e || g.start < e.start) && (0 > h || g.start < h)) return d = g.end, e && (d = Math.min(d, e.start - 1)), 0 < h && (d = Math.min(d, h - 1)), new Kcb(g.start, d);
	if (e && (0 > h || e.start < h)) return new Fcb(e.start, e.end);
	if (0 <= h) {
		e = a.A[h];
		if (!e) return a.ra.log(Error(Gma)), m;
		if (h <= d || e.qa().charAt(0) != aa) return new Ecb(h, e)
	}
	return m
}

function m2a(a, b) {
	var c = [],
		d = a.K;
	if (0 == d.Dj(b).length) return c;
	for (var e = d.qa().A(aa), g = a.F.ce(), h = 0, n; n = g[h]; h++) {
		var p = vn(e, n.start);
		n = vn(e, n.end);
		0 > p && (p = -p - 1);
		for (0 > n && (n = -n - 1); p < n; p++) for (var t = e[p], u = d.Ie(b, t), x = 0, y; y = u[x]; x++) c.push({
			id: y,
			index: t
		})
	}
	return c
}

function n2a(a, b) {
	for (var c = [], d = Rcb(a), e = d.length - 1; 0 <= e; e--) for (var g = d[e], h = a.A[g], n = h.qa(), h = h.Lf[b], p = n.length - 1, t = n.lastIndexOf(aa); - 1 != t && -1 != p;) {
		if (h && h[t]) for (var u = h[t], x = 0, y; y = u[x]; x++) {
			var B = a,
				E = g,
				H = t,
				J = p,
				$ = B.A[E],
				V = $.qa().length,
				ca = hw($, H, J);
			0 != H || J != V - 1 ? B.A[E] = uZa($, H, J) : delete B.A[E];
			mn(c, {
				id: y,
				slice: ca
			}, 0)
		}
		p = t - 1;
		t = n.lastIndexOf(aa, p)
	}
	0 < c.length && (a.L = m);
	return c
}
function Scb(a) {
	return !!a.G.A[0] || !! a.F.A[0] || !Rn(a.A)
}

function Hcb(a, b, c) {
	for (var d = [], e = Rcb(a), g = 0; g < e.length; g++) {
		var h = e[g];
		h >= b && h <= c && (d[h] = a.A[h], delete a.A[h], a.L = m)
	}
	return d
}
function Tcb(a, b) {
	var c = b ? a.K.Rc(b) : 0;
	return new xs(c, Vs(a.K.qa(), c))
}
function mz(a, b) {
	var c = Tcb(a, b);
	return new mE(a, c)
}

function Ucb(a, b, c) {
	var d = new nE(a.K, a.ra),
		e = Tcb(a, b);
	if (c) {
		oE(d, e.start, e.end - e.start + 1);
		for (var g = R5a(d, e), h = 0; a = g[h]; h++) YA(d, a, e.start, e.end)
	} else {
		c = a.F;
		var n = e.start,
			p = e.end;
		d.F.dispose();
		d.F = new IA(c.ce(), n, p);
		c = a.G;
		n = e.start;
		p = e.end;
		d.G.dispose();
		d.G = new IA(c.ce(), n, p);
		Lcb(d, a.A, e.start, e.end);
		a = a.C;
		c = e.start;
		e = e.end;
		for (g in d.C) d.C[g].dispose();
		for (h in a) d.C[h] = new IA(a[h].ce(), c, e)
	}
	b = mz(d, b);
	d = new oz(d);
	return new Dcb(b, d)
}

function Icb(a, b, c, d, e) {
	for (var g = 0, h = 0, n; n = d[h]; h++) g += n.end - n.start + 1;
	dr(e, function(a, b) {
		g -= b.qa().length;
		return q
	});
	c = g - c;
	0 < c ? Vcb(a, b, c) : 0 > c && Wcb(a, b, c, d, e)
}

function Vcb(a, b, c) {
	for (b += 1; 0 < c;) {
		var d = HA(a.F, b),
			e = d ? Math.max(d.start, b) : Number.MAX_VALUE,
			g = b,
			h = Rcb(a),
			g = vn(h, g);
		0 > g && (g = -g - 1);
		h = (g < h.length ? h[g] : m) || Number.MAX_VALUE;
		e = Math.min(e, h);
		b < e ? (d = Math.min(c, e - b), a.F.add(b, b + d - 1), c -= d, b = e) : e == h ? (d = a.A[h], e = hw(d, c), g = e.qa().length, 0 < g ? a.A[h] = e : delete a.A[h], a.L = m, c -= d.qa().length - g) : b = Math.min(h, d.end + 1)
	}
}
function Ocb(a, b) {
	if (a.A[b]) return b;
	var c = HA(a.F, b);
	return c && Cs(c, b) ? c.end + 1 : b
}
function Pcb(a, b, c) {
	var d = a.A[b];
	a.A[b] = d ? iw(d, c, 0) : a.A[b] = c
}

function Wcb(a, b, c, d, e) {
	var g = b;
	0 <= c && f(Error("Delta must be negative."));
	c = -c;
	var h = er(e),
		n = m,
		p = -1;
	for (b = Ocb(a, b + 1); 0 < c;) {
		n || (n = d.pop());
		var t = n ? Math.min(n.end, g) : -1;
		0 > p && 0 < h.length && (p = h.pop() - 1);
		t = Math.max(t, p);
		if (g > t) {
			var u = Math.min(c, g - t),
				g = a.K.Yh(g - u + 1, g);
			Pcb(a, b, g);
			a.L = m;
			c -= g.qa().length;
			g = t
		} else t == p ? (p = e[p + 1], p = hw(p, p.qa().length - c), Pcb(a, b, p), a.L = m, c -= p.qa().length, p = -1) : (g = Math.max(p, n.start - 1), g < n.start && (n = m))
	}
}

function A2a(a, b) {
	var c = 0,
		d = Number.MAX_VALUE;
	if (b) var e = Tcb(a, b),
		c = e.start,
		d = e.end;
	a.F.remove(c, d);
	a.G.remove(c, d);
	a.L = m;
	dr(a.A, function(a) {
		a > c && a <= d && delete this.A[a];
		return q
	}, a)
}
function Xcb(a, b) {
	var c = 0,
		d = Number.MAX_VALUE;
	b && (d = Tcb(a, b), c = d.start, d = d.end);
	for (var e in a.C) a.C[e].remove(c, d)
}
nE.prototype.toString = function() {
	for (var a = Aka + this.F.toString() + kaa + this.G.toString() + jaa, b = er(this.A), c = 0; c < b.length; c++) {
		0 < c && (a += La);
		var d = b[c],
			a = a + (Fra + this.A[d].qa().length + naa + d + cd)
	}
	return a
};
nE.prototype.O = function() {
	delete this.K;
	O(this.F);
	delete this.F;
	O(this.G);
	delete this.G;
	delete this.A;
	nE.M.O.call(this)
};

function Ncb(a) {
	gw.call(this, a.qa(), a.C, a.G, a.Lf, a.A, a.F)
}
L(Ncb, gw);

function pE(a, b, c) {
	pq.call(this, c);
	this.C = a;
	this.ra = b
}
L(pE, pq);
F = pE.prototype;
F.RV = l;
F.Wa = C("RV");
F.ua = function(a) {
	this.RV != a && (this.RV = a, this.bb() && this.QV(a))
};
F.QV = function(a) {
	this.bb() ? this.C.ua(a) : this.ra.log(Error(cqa))
};
F.ha = function() {
	this.Sb(this.C.createElement())
};
F.za = function() {
	pE.M.za.call(this);
	this.QV(this.RV)
};
F.Ef = function(a) {
	this.C.Ef(a)
};
F.rb = C(Jb);

function qE(a, b, c) {
	pE.call(this, a, b, c);
	this.A = new cq(500)
}
L(qE, pE);
F = qE.prototype;
F.c_ = l;
F.RM = l;
F.za = function() {
	qE.M.za.call(this);
	T(this).A(this.A, al, this.EKa);
	Ycb(this)
};
F.Hb = function() {
	qE.M.Hb.call(this);
	this.A.stop()
};
F.Ef = function(a) {
	qE.M.Ef.call(this, a);
	Ycb(this)
};
F.QV = function(a) {
	qE.M.QV.call(this, a);
	Ycb(this)
};
F.EKa = function() {
	this.RM = !this.RM;
	this.rb().ua(this.Wa() && this.RM, l)
};

function Ycb(a) {
	a.bb() && (a.c_ && a.Wa() ? (a.A.enabled && a.A.stop(), a.A.start()) : a.A.stop(), a.RM = l, a.rb().ua(a.Wa() && a.RM, q))
}
F.O = function() {
	qE.M.O.call(this);
	O(this.A);
	delete this.A
};

function rE() {}
L(rE, M);
F = rE.prototype;
F.Fg = 0;
F.nr = 0;
F.b3 = 0;
F.gv = m;
F.R = m;

function Zcb(a) {
	return a.R || (a.R = new S(a))
}
function DZa(a, b) {
	b != a.Fg ? (O(a.gv), a.gv = new my([a.Fg], [b], 218, v1a), Zcb(a).A(a.gv, md, a.eNa), Zcb(a).A(a.gv, Tf, wm(a.dNa, b)), a.gv.play()) : $cb(a, b)
}
F.eNa = function(a) {
	$cb(this, a.x)
};
F.dNa = function(a) {
	$cb(this, a);
	O(this.gv);
	this.gv = m
};

function $cb(a, b) {
	a.Fg = b;
	a.Ipa(b);
	a.Fg = a.f8()
}
function sE(a) {
	a.nr = a.qpa();
	a.Fg = a.f8();
	a.b3 = a.ppa()
}
F.Ipa = G;
F.f8 = C("Fg");
F.qpa = C("nr");
F.ppa = C("b3");
F.O = function() {
	O(this.R);
	delete this.R;
	O(this.gv);
	delete this.gv;
	rE.M.O.call(this)
};

function tE(a, b, c) {
	this.Bk = a;
	this.C = b;
	this.A = c;
	this.Bc = K(this.LFa, this)
}
L(tE, M);
F = tE.prototype;
F.mN = q;
F.ab = m;
F.stop = function() {
	this.ab && (fq(this.ab), this.ab = m, this.mN = q)
};
F.O = function() {
	tE.M.O.call(this);
	this.stop()
};
F.LFa = function() {
	this.ab = m;
	this.mN && (this.mN = q, adb(this))
};

function adb(a) {
	a.ab = eq(a.Bc, a.C);
	a.Bk.call(a.A)
};

function uE(a, b, c, d) {
	this.A = a;
	this.C = new tE(d, 50, this);
	Zcb(this).A(b, ok, ju(c, this.TFa, this));
	sE(this)
}
L(uE, rE);
F = uE.prototype;
F.TFa = function() {
	var a = this.C;
	!a.ab ? adb(a) : a.mN = l
};
F.Ipa = function(a) {
	this.A.scrollTop = a
};
F.f8 = function() {
	return this.A.scrollTop
};
F.qpa = function() {
	return this.A.scrollLeft
};
F.ppa = function() {
	return this.A.scrollHeight
};
F.O = function() {
	O(this.C);
	delete this.C;
	delete this.A;
	uE.M.O.call(this)
};

function vE(a, b, c) {
	this.A = a;
	this.F = c;
	this.C = b
}
L(vE, M);
F = vE.prototype;
F.lea = q;
F.zL = l;
F.setActive = im("lea");
F.vl = D(l);
F.Mn = function(a) {
	return this.qna(a) || []
};
F.qna = function(a) {
	var b = [],
		c = this.C.yh();
	if (this.zL) for (var d in c) {
		var e = c[d];
		(e = this.K(a, e.Ne(), d, e.Xf(), e.K)) && sn(b, e)
	}
	c = this.lea ? k : aba;
	(e = this.K(a, this.A.A.getSelection(), $Ma, c)) && sn(b, e);
	if (0 == b.length) return m;
	b.sort(vUa);
	return b
};
F.O = function() {
	delete this.A;
	delete this.C;
	delete this.F;
	vE.M.O.call(this)
};

function wE(a, b, c, d) {
	yu.call(this, a, b);
	this.L = c;
	this.A = d
}
L(wE, yu);
wE.prototype.W = C(Eb);
wE.prototype.C = function(a) {
	if (a.W) {
		var b = this.A,
			c = a.A;
		if (b < c) return -1;
		if (b > c) return 1
	}
	return wE.M.C.call(this, a)
};
wE.prototype.O = function() {
	delete this.L;
	wE.M.O.call(this)
};

function xE(a, b, c) {
	vE.call(this, a, b, c);
	this.L = K(this.qna, this)
}
L(xE, vE);
xE.prototype.K = function(a, b, c, d, e) {
	if (e && 0 >= Math.max(12E4 - (ym() - e), 0)) return m;
	b = b.C;
	if (0 == b.length) return m;
	for (var g = [], h = 0; h < b.length; h++) {
		var n = this.G(b[h], a, c, d, e);
		n && g.push(n)
	}
	return 0 == g.length ? m : g
};
xE.prototype.G = function(a, b, c, d, e) {
	return Iw(this.A.ba(), a) ? m : (a = zs(b, a)) ? (b = Eu(this.F, iAa), b.vg({
		tK: c,
		color: d || m,
		timestamp: e || 0
	}), new wE(a, b, this.A, c)) : m
};
xE.prototype.O = function() {
	xE.M.O.call(this);
	delete this.L
};

function bdb(a) {
	this.C = a;
	this.A = {}
}
L(bdb, bq);

function Vw(a, b) {
	a.A[b] || (a.A[b] = {});
	return a.A[b]
}
function Du(a, b, c) {
	if (0 != c.length) {
		for (var d = 0; d < c.length; d++) YA(a.C, b, c[d].start, c[d].end);
		a.dispatchEvent(GPa)
	}
}
bdb.prototype.O = function() {
	bdb.M.O.call(this);
	for (var a in this.A) delete this.A[a];
	delete this.A
};

function cdb(a) {
	this.A = a
}
cdb.prototype.apply = function(a) {
	a.style.position = id;
	a.style.top = this.A.y + Sj;
	a.style.left = this.A.x + Sj
};

function ddb() {}
ddb.prototype.A = 0;

function edb(a) {
	if (!a.A) {
		var b = document,
			c = b.createElement(re);
		c.innerHTML = r;
		c.style.cssText = cEa;
		b.body.appendChild(c);
		a.A = c.offsetWidth - c.scrollWidth;
		b.body.removeChild(c)
	}
	return a.A
};

function fdb(a, b, c) {
	vE.call(this, a, b, c)
}
L(fdb, vE);
fdb.prototype.K = function(a, b, c, d, e) {
	if (e && 0 >= Math.max(12E4 - (ym() - e), 0)) return m;
	b = b.C;
	if (0 == b.length) return m;
	for (var g = [], h = 0; h < b.length; h++) {
		var n = this.G(b[h], a, c, d, e);
		n && g.push(n)
	}
	return 0 == g.length ? m : g
};
fdb.prototype.G = function(a, b, c, d, e) {
	return Iw(this.A.ba(), a) ? m : Bs(a, b) ? (a = Eu(this.F, hAa), a.vg({
		tK: c,
		color: d || m,
		timestamp: e || 0
	}), new wE(b, a, this.A, c)) : m
};

function yE(a, b, c, d) {
	pE.call(this, a, c, d);
	this.A = b
}
L(yE, pE);
F = yE.prototype;
F.XB = m;
F.za = function() {
	yE.M.za.call(this);
	T(this).A(this.N(), ej, this.wJa).A(this.N(), dj, this.vJa)
};
F.setSelection = im(Eb);
F.getSelection = C(Eb);
F.wJa = function() {
	gdb(this, q)
};
F.vJa = function() {
	gdb(this, l)
};

function gdb(a, b) {
	a.XB && (fq(a.XB), a.XB = m);
	var c = a.rb();
	if (c.Iy && c.Jy && !c.U7) {
		var d = new sy(c.Iy, 100);
		c.Jy.style.display = lj;
		d.play();
		c.U7 = l
	}
	b && (a.XB = eq(a.nTa, 1300, a))
}
F.nTa = function() {
	this.XB = m;
	var a = this.rb();
	if (a.Iy && a.Jy) {
		var b = new ry(a.Iy, 200),
			c = new sy(a.Jy, 200);
		b.play();
		c.play();
		a.U7 = q
	}
};
F.O = function() {
	delete this.A;
	this.XB && fq(this.XB);
	yE.M.O.call(this)
};
var hdb;

function idb(a, b) {
	om(b) || (b = [b]);
	var c = Ym(b, function(a) {
		return qm(a) ? a : a.du + s + a.duration + MMa + a.timing + s + a.lp + jk
	});
	Gp(a, jPa, c.join(La))
};

function zE(a, b, c, d, e) {
	ly.call(this);
	this.Xa = a;
	this.L = b;
	this.Y = c;
	this.A = d;
	this.W = om(e) ? e : [e]
}
L(zE, ly);
F = zE.prototype;
F.play = function() {
	if (1 == this.Fa) return q;
	this.C();
	this.Ij(nLa);
	this.startTime = ym();
	this.Fa = 1;
	if (!I(hdb)) if (Q) hdb = Io(bb);
	else {
		var a = document.createElement(re),
			b = Eo ? cca : Do ? Rba : Q ? Tba : Co ? Wba : m;
		a.innerHTML = Jda + (b ? b + aca : r) + kPa;
		hdb = Hp(a.firstChild, jPa) != r
	}
	if (hdb) return Gp(this.Xa, this.Y), this.G = eq(this.nOa, k, this), l;
	this.B_(q);
	return q
};
F.nOa = function() {
	idb(this.Xa, this.W);
	Gp(this.Xa, this.A);
	this.G = eq(K(this.B_, this, q), 1E3 * this.L)
};
F.stop = function() {
	1 == this.Fa && this.B_(l)
};
F.B_ = function(a) {
	Gp(this.Xa, jPa, r);
	fq(this.G);
	Gp(this.Xa, this.A);
	this.K = ym();
	this.Fa = 0;
	a ? this.Ij(Jk) : this.Ij(cg);
	this.F()
};
F.O = function() {
	this.stop();
	zE.M.O.call(this)
};

function jdb(a, b, c, d, e) {
	return new zE(a, b, {
		opacity: d
	}, {
		opacity: e
	}, {
		du: uj,
		duration: b,
		timing: c,
		lp: 0
	})
}
function kdb(a, b) {
	return jdb(a, b, $Ba, 0, 1)
}
function ldb(a, b) {
	return jdb(a, b, ZBa, 1, 0)
};

function AE(a, b, c, d) {
	this.Q = a;
	this.Qd = b || wa;
	this.A = c || Ko();
	this.G = !! d
}
L(AE, M);
F = AE.prototype;
F.Xx = m;
F.YF = m;
F.N_ = m;
F.vS = l;
F.MN = m;
F.createElement = function() {
	if (this.YF) return this.YF;
	this.Xx = this.A.ha(Rb, {
		"class": MFa,
		style: pta + this.Qd + pb
	});
	this.YF = this.A.ha(Rb, LFa, this.Xx);
	this.N_ = new kx(this.YF);
	return this.YF
};
F.Ef = function(a) {
	var b = a.height;
	if (this.vS || b !== m) {
		var c = this.Q.A.A,
			d;
		if (d = this.G) d = yC(c).Fp;
		c = d;
		so(this.Xx, NFa, c);
		Q && !Io(cda) && (this.Xx.style.filter = c ? GLa : r);
		c = a.A.x;
		a.wc || (c -= 1);
		this.N_.xc(c, a.A.y);
		b === m ? this.Q.ra.log(Error(Ona)) : this.F != b && (this.Xx.style.height = b + Sj, this.F = b)
	}
	this.Q.va.Vl && (a = this.YF) && mp(a.offsetHeight)
};
F.ua = function(a, b) {
	if (this.vS != a || !b) O(this.MN), this.MN = m;
	this.vS != a && (this.vS = a, b ? (this.MN = a ? kdb(this.Xx, 0.13) : ldb(this.Xx, 0.13), this.MN.play()) : this.Xx.style.opacity = a ? 1 : 0)
};
F.ma = C(Eb);
F.Xf = C("Qd");
F.O = function() {
	O(this.N_);
	O(this.MN);
	AE.M.O.call(this)
};

function BE(a, b, c, d) {
	AE.call(this, a, c, d);
	this.C = b
}
L(BE, AE);
F = BE.prototype;
F.Iy = m;
F.Jy = m;
F.U7 = q;
F.createElement = function() {
	var a = BE.M.createElement.call(this);
	if (this.Jy) return a;
	this.Jy = this.ma().ha(Rb, {
		"class": PFa,
		style: Xsa + this.Xf() + pb
	});
	this.Iy = this.ma().ha(Rb, {
		"class": OFa,
		style: Ysa + this.Xf() + hda
	}, this.C);
	a.appendChild(this.Jy);
	a.appendChild(this.Iy);
	return a
};
F.Ef = function(a) {
	BE.M.Ef.call(this, a);
	ap(this.Iy, this.C)
};
F.ua = function(a) {
	BE.M.ua.call(this, a);
	this.Jy.style.display = a ? r : lj;
	this.Iy.style.display = a ? r : lj
};

function CE(a, b) {
	this.Q = a;
	this.F = b || m;
	this.A = {};
	this.C = {}
}
L(CE, M);

function mdb(a, b) {
	O(a.A[b]);
	delete a.A[b];
	O(a.C[b]);
	delete a.C[b]
}
function Ubb(a) {
	for (var b in a.A) mdb(a, b)
}
CE.prototype.Ne = function(a) {
	return this.A[a] || m
};
CE.prototype.O = function() {
	Ubb(this);
	CE.M.O.call(this)
};

function DE(a) {
	this.A = a
}
DE.prototype.xa = C(Eb);
DE.prototype.toString = C(Eb);

function EE() {
	this.A = ld
}
L(EE, DE);
mm(EE);
EE.prototype.C = D(q);

function ndb() {
	this.A = Gl
}
L(ndb, DE);
mm(ndb);
ndb.prototype.C = function(a) {
	return 2 == a
};

function odb(a) {
	this.A = XOa;
	this.F = a || ym;
	this.K = this.F()
}
L(odb, DE);
var pdb = Number(Qv(window.location.href, "redrawTime")) || 100;
odb.prototype.C = function(a, b, c) {
	return !c ? q : this.F() > this.K + pdb
};

function qdb(a) {
	this.A = INa;
	this.G = a
}
L(qdb, DE);
qdb.prototype.C = function(a, b) {
	return -1 == b || b > this.G
};

function FE(a, b) {
	this.A = a;
	this.C = b;
	this.R = new S(this);
	this.R.A(a, Lf, this.iFa)
}
L(FE, M);
F = FE.prototype;
F.xla = q;

function rdb(a, b, c) {
	c = c.C;
	var d = b.C;
	b = [];
	if (1 == c.length && 1 == d.length && a.qfa(a.A, c[0], d[0]) && !Iw(a.A.ba(), d[0])) c = c[0], d = d[0], c.start != d.start && b.push(new xs(c.start, d.start)), c.end != d.end && b.push(new xs(c.end, d.end));
	else {
		for (var e = 0; e < d.length; e++) Iw(a.A.ba(), d[e]) || b.push(d[e]);
		for (e = 0; e < c.length; e++) b.push(c[e])
	}
	if (0 != b.length) {
		c = [];
		for (e = 0; e < b.length; e++) c.push(new xs(b[e].start, b[e].end));
		Du(a.C, We, c)
	}
}
F.qfa = function(a, b, c) {
	return As(b, c)
};
F.setActive = function(a) {
	this.xla != a && (Du(this.C, We, [new xs(0, Number.MAX_VALUE)]), this.xla = a)
};
F.iFa = function(a) {
	rdb(this, this.A.A.getSelection(), a.C)
};
F.O = function() {
	O(this.R);
	delete this.R;
	delete this.A;
	delete this.C;
	FE.M.O.call(this)
};

function sdb(a, b) {
	FE.call(this, a, b)
}
L(sdb, FE);
sdb.prototype.qfa = function(a, b, c) {
	return (b = zs(b, c)) ? (a = a.ba().qa(), !pt(a, b.start) && !pt(a, b.end)) : q
};

function tdb(a, b, c, d) {
	this.A = a;
	this.C = c;
	this.F = d;
	this.R = new S(this);
	this.G = b;
	this.R.A(b, Ik, this.uza).A(c, Lf, this.vza).A(d, kg, this.tza);
	GE(this)
}
L(tdb, M);
F = tdb.prototype;
F.fca = q;
F.baa = q;
F.uza = function() {
	GE(this)
};
F.Ne = C(Eb);
F.vza = function() {
	this.fca = Ks(this.C.A.getSelection());
	GE(this)
};
F.tza = function() {
	GE(this)
};

function GE(a) {
	var b = Mr(a.F),
		c = a.C.A.getSelection(),
		d = a.G.kb(),
		d = (b = b && !a.baa && 1 != d && !a.fca && 0 == c.Lb.xa()) && 3 == d;
	a.A.ua(b);
	a = a.A;
	a.c_ != d && (a.c_ = d, Ycb(a))
}
F.O = function() {
	O(this.A);
	O(this.R);
	tdb.M.O.call(this)
};

function HE(a, b, c, d, e, g, h, n, p, t, u, x, y) {
	Kr.call(this, a);
	this.Ma = b;
	this.Qc = c;
	this.na = d;
	this.vf = e;
	this.pe = g;
	this.K = h;
	this.Jb = new ddb;
	this.Sl = u;
	this.Ha = y || m;
	this.Xl = x || 0;
	this.A = [];
	this.Di = [];
	this.L = new CE(a, this.ma());
	this.fc = new sdb(a.A, a.F);
	b = this.Na = new xE(a.A, new hE, a.G);
	Vw(a.F, We)[bf] = b;
	b = this.Aa = new fdb(a.A, new hE, a.G);
	Vw(a.F, We)[qh] = b;
	this.C = new rE;
	this.fk = t;
	this.Y = m;
	this.Ha && (this.Y = new uE(this.Ha.hX, this.Ha.ora, a.ra, K(this.scroll, this, l)));
	udb(this);
	this.G = this.F = m;
	4 == this.Q.va.A && (this.G = vdb(this),
	this.Oa(this.G.Ne()));
	this.ea = new ycb(this.K, new lE(this.K, this.Q.ba(), this.Q.ra));
	this.rX(this.ea);
	this.ib = new Gq(this);
	this.Ae = q
}
L(HE, fVa);
var wdb = Number(Qv(window.location.href, "redrawTimeout"));
F = HE.prototype;
F.Xh = m;
F.Ue = m;
F.zA = m;
F.sQ = m;
F.HA = 0;
F.RE = 0;
F.RU = m;
F.SU = m;
F.Sz = m;
F.yT = m;
F.FI = m;
F.RO = q;
F.n3 = q;
F.yM = q;
F.Do = m;
F.m4 = m;
F.OI = m;
F.CK = m;
F.NB = m;
F.Bna = q;
F.Qo = m;
F.zM = m;
F.yea = q;
F.qo = m;

function udb(a) {
	var b = a.Q;
	a.g5 = new IE(b, a.Ul, a.na, a.K, b.va.G ? new xdb(a.na) : new ydb(b, a.na));
	a.Ey = new JE(a.g5);
	a.Xh = a.Ey;
	zdb(a, a.Xh);
	for (var b = a.Q, c = 0, d; d = a.Di[c]; c++) zdb(a, d.gV(b))
}
function s2a(a, b) {
	a.Di.push(b);
	zdb(a, b.gV(a.Q))
}
function zdb(a, b) {
	a.A.push(b);
	a.Oa(b);
	a.Ue && a.bb() && (Adb(a, b), a.xA())
}
function Adb(a, b) {
	b.Va(a.Ue);
	var c = b.getPosition();
	(!c || 0 != c.type || c.anchor != Zi) && P(b.N(), BBa)
}
F.rX = function(a) {
	kE(a, Gd, new ocb);
	kE(a, qg, new pcb);
	jE(a, Ug, new fE);
	kE(a, Tk, new qcb);
	var b = new tcb;
	jE(a, Ri, b);
	kE(a, Ri, b);
	a.F.push(b);
	kE(a, zj, new vcb);
	kE(a, Bk, new xcb(Xe));
	kE(a, Td, new xcb(Te));
	kE(a, Ni, new wcb)
};

function vdb(a) {
	var b = a.Q,
		c = b.ma(),
		d = new AE(b, k, c, l),
		c = new qE(d, b.ra, c);
	return new tdb(c, a.Ma, b.A, b.Ba)
}
F.lX = G;

function Bdb(a) {
	a.Ue.style.overflowY = a.pe ? tg : ok;
	a.Q.va.G && (a.Ue.style.overflowX = tg)
}
F.ha = function() {
	var a = this.ma(),
		a = a.ha(Rb, pFa, this.zA = a.ha(Rb, k, this.Ue = a.ha(Rb, qFa)));
	Bdb(this);
	this.Sb(a);
	Cdb(this)
};
F.qj = function(a) {
	return ro(a, pFa)
};
F.Ic = function(a) {
	HE.M.Ic.call(this, a);
	this.ma();
	this.zA = a.lastElementChild != k ? a.lastElementChild : Xo(a.lastChild, q);
	this.Ue = this.zA.lastElementChild != k ? this.zA.lastElementChild : Xo(this.zA.lastChild, q);
	Bdb(this);
	Cdb(this)
};
F.za = function() {
	HE.M.za.call(this);
	this.N().dir = Xi;
	for (var a = T(this), b = this.Q.ra, c = 0, d; d = this.A[c]; c++) Adb(this, d), a.A(d, vf, this.W8);
	oE(this.K, 0, this.Q.ba().qa().ub());
	if (!this.Ae) {
		this.Ae = l;
		var c = this.Q.ba().bA(),
			e;
		for (e in c) c[e].xa() == Jj && Ddb(this.Q.W, e, this.Q)
	}
	this.Ef();
	this.G && this.G.Ne().Va(this.Ue);
	this.F && !this.F.N() && this.F.Va(this.Ue);
	e = this.Q.A;
	a.A(this.Q.F, GPa, this.Hsa).A(e, Lf, ju(b, this.Lsa, this)).A(e, Jf, ju(b, this.Isa, this)).A(e, Kf, ju(b, this.x9, this)).A(this.K, lDa, ju(b, this.x9, this)).A(this.Ma,
	Ik, this.Jsa);
	O(this.C);
	this.C = new uE(this.Ue, this.Ue, this.Q.ra, K(this.scroll, this, q));
	a.A(this.Qc, $b, this.w9);
	this.Me();
	if (this.OI = 4 != this.Q.va.A ? m : this.Q.K.A[Di] || m) Edb(this, this.OI.Ga()), a.A(this.OI, YPa, this.Msa);
	this.qo && !this.RO && (this.RO = l, this.wD());
	this.scroll(q);
	this.dispatchEvent(ZPa);
	this.ib.$a(U.Dc, Sf, K(this.Ksa, this))
};

function Cdb(a) {
	if (!a.yea && a.qo && a.N()) {
		var b = a.Q.va.A;
		if ((4 == b || 3 == b || 2 == b) && a.bb() && !a.RO) a.RO = l, a.wD();
		4 == b && (a.F = new(a.qo.ZEa())(a.Q, a.fk, a.vf, a.Sl), a.Oa(a.F), a.bb() && (a.F.Va(a.Ue), Fdb(a)));
		a.Z0(a.qo);
		a.yea = l
	}
}
F.Z0 = G;

function Lw(a) {
	return new Fp(a.RE, a.HA, L_a(a), pw(a))
}
F.Jsa = function(a) {
	a = a.state;
	var b = 3 == a;
	(b || 2 == a) && KE(this);
	this.Na.setActive(b);
	this.Aa.setActive(b);
	this.fc.setActive(b);
	Gdb(this)
};

function Gdb(a) {
	var b = a.Q;
	3 == a.Ma.kb() && (4 != b.va.A && !Ks(b.A.A.getSelection())) && (a.Ma.qe(2), a.Ue.focus())
}
F.NM = jm(158);

function Hdb(a, b) {
	for (var c = 0, d; d = a.A[c]; c++) if (d = d.OG(b)) return d;
	return m
}
F.Zq = function(a, b, c, d) {
	return GZa(this, a, b, c, d)
};

function GZa(a, b, c, d, e, g) {
	var h = a.C;
	c += h.Fg;
	b += h.nr;
	a: {
		for (h = a.A.length - 1; 0 <= h; h--) {
			var n = a.A[h];
			if (n = n.Zq(b - rw(n), c - sw(n), d, e, g)) {
				a = n;
				break a
			}
		}
		a = m
	}
	return a
}
F.Xu = jm(188);

function KE(a) {
	if (a.CK) {
		var b = a.CK.yh(),
			c;
		for (c in b) {
			var d = a.L.Ne(c);
			if (d) {
				var e = b[c].Ne();
				d.setSelection(e);
				var e = e.Lb,
					g = ZA(a.Q.A.ba(), Wk, e);
				(e = LE(a, e, g)) && d.Ef(e)
			}
		}
	}
	c = a.Q.A.A;
	b = Hs(c.getSelection());
	e = yC(c);
	a.G && (c = a.G.Ne(), (a = LE(a, b, e)) && c.Ef(a))
}
F.Msa = function() {
	Edb(this, this.OI.Ga())
};

function Edb(a, b) {
	for (var c = 0; c < a.A.length; c++) a.A[c].GG(b);
	c = Hs(a.Q.A.A.getSelection());
	Rw(a, c);
	KE(a)
}

function Fdb(a) {
	if (a.F) {
		var b = a.F.kOa();
		if (b) {
			var c = b.start,
				d = b.end,
				e = m,
				g = Hdb(a, c),
				b = Hdb(a, d);
			g && b && (c = ow(a, c), d = ow(a, d), e = new uo(c.x, d.y + b.Yk));
			b = e;
			c = rw(a.Xh) + a.C.nr;
			d = c + a.na.ff();
			e = qw(a);
			a.F.lOa(b, new Ep(e.start, d, e.end, c))
		} else a.F.mka()
	}
}

function Rw(a, b, c) {
	var d, e;
	if (1 == b.xa()) {
		e = Jw(a.Q.A.ba(), b);
		if (!e) return;
		e = d = e.F.Ve()
	} else {
		e = Hdb(a, b);
		if (!e) return;
		d = e.Yk;
		e = e.getHeight(0)
	}
	if (b = ow(a, b)) {
		var g = b.y,
			h = a.y1() - 5,
			n = 5;
		b = edb(a.Jb);
		var p;
		if (p = a.Ha == m) a.sQ == m && (a.sQ = a.Ue.scrollWidth), p = a.sQ + b > L_a(a);
		p && (n += b);
		var t;
		b = qw(a);
		p = K(a.oea, a);
		g += h;
		d = g + d + n;
		n = g < b.end && d > b.start;
		if (e > b.end - b.start && n) t = m;
		else {
			e = m;
			if (d > b.end && !c) t = p(q), c = b.end - b.start - d + g, e = 60 > c ? g : t.Fg + d - b.end + 60;
			else if (g < b.start || c) t = p(l), c = b.end - b.start - d + g, e = 60 > c ? g - c : t.Fg - b.start + g - 60;
			e != m && DZa(t, e);
			t = e
		}
		t != m && Idb(a)
	}
}
function y2a(a, b) {
	var c = qw(a),
		d = a.C;
	DZa(d, d.Fg - (c.start - b));
	Idb(a)
}
function Idb(a) {
	Q && !Io(bb) && a.scroll(a.C == a.Y)
}
function ow(a, b) {
	var c = LE(a, b, m);
	return c ? c.A : m
}
function ND(a, b) {
	var c = LE(a, b, m);
	return c ? c.Hg + 1 : 1
}
F.oN = function(a) {
	this.Xh.oN(a)
};

function LE(a, b, c) {
	for (var d = 0, e; e = a.A[d]; d++) {
		var g = e.Wx(b, c);
		if (g) return g.A.x += rw(e), g.A.y += sw(e), g
	}
	return m
}

function J_a(a, b) {
	a.FI = b;
	var c = D_a(a);
	c.ua(l);
	var d = ZA(a.Q.A.ba(), Wk, b);
	(d = LE(a, b, d)) ? c.Ef(d) : c.ua(q);
	Rw(a, b)
}
function D_a(a) {
	if (!a.Sz) {
		var b = a.Q;
		a.yT || (a.yT = new AE(b, $aa, a.ma(), l));
		b = new pE(a.yT, b.ra, a.ma());
		a.Oa(b);
		b.Va(a.Ue);
		a.Sz = b
	}
	return a.Sz
}
function L_a(a) {
	a.RU == m && (a.RU = a.Ue.offsetWidth);
	return a.RU
}
function pw(a) {
	a.SU == m && (a.SU = a.Ue.offsetHeight);
	return a.SU
}
function qw(a) {
	return EZa(a, a.C.Fg)
}

function EZa(a, b) {
	var c = a.Y,
		d = a.Ha,
		e = b;
	if (d && c) {
		var g = d.hX;
		b += Math.max(0, c.Fg - d.kX());
		e += d.jX() - Math.max(0, d.jX() + d.kX() - (Ko(g).dp().height + c.Fg))
	} else e += pw(a) - 0;
	return new xs(b, e)
}
F.rr = function(a) {
	if (0 != a.xa()) return m;
	for (var b = 0, c; c = this.A[b]; b++) if (c = c.rr(a)) return c;
	return m
};
F.nF = function() {
	return this.rr(Hs(this.Q.A.A.getSelection()))
};

function x2a(a) {
	var b = a.C.Fg;
	a = b + pw(a) - 0;
	return new xs(b, a)
}

function nw(a, b) {
	var c;
	if (b) a: {
		c = 0;
		for (var d; d = a.A[c]; c++) if (d = d.Wx(b, m)) {
			c = d.A.x;
			break a
		}
		c = 0
	} else c = m;
	a.m4 = c
}
F.Ar = function(a, b) {
	this.m4 != m || nw(this, a);
	for (var c = 0, d; d = this.A[c]; c++) if (d = d.Ar(a, b, this.m4)) return d;
	return m
};
F.oea = function(a) {
	var b = this.Ha,
		c = this.Y;
	if (b && c) {
		var d = b.kX(),
			e = d + b.jX(),
			b = Ko(b.hX).dp().height,
			g = c.Fg;
		if (this.pe || a && d < g || !a && e > b + g) return c
	}
	return this.C
};
F.Hsa = function() {
	for (var a = 0, b; b = this.A[a]; a++) b.PG()
};
F.Lsa = function(a) {
	var b = this.Q.A.A,
		c = Tw(b);
	a.wu || this.Ef(new qdb(c));
	a.wu || (KE(this), this.wD());
	a.A && (a.G && Rw(this, Hs(b.getSelection())), Gdb(this))
};
F.mOa = G;

function Jdb(a, b) {
	var c = b.Ne(),
		d = b.A,
		e = a.L.Ne(d);
	if (e)(d = a.L.A[d]) || f(Error("Cannot move nonexistent cursor.")), d.setSelection(c);
	else {
		var e = a.L,
			g = b.Pd();
		e.A[d] && f(Error("Cannot add a cursor with a conflicting session id."));
		g = new BE(e.Q, g, b.Xf(), e.F);
		e.C[d] = g;
		e.A[d] = new yE(g, c, e.Q.ra, e.F);
		e = e.A[d];
		a.Oa(e);
		e.Va(a.Ue)
	}
	d = Hs(e.getSelection());
	c = e;
	g = ZA(a.Q.A.ba(), Wk, d);
	(d = LE(a, d, g)) && c.Ef(d);
	gdb(e, l);
	rdb(a.fc, b.Ne(), b.Y)
}
F.Isa = function(a) {
	switch (a.wd.xa()) {
		case wh:
			Kdb(this, a.wd, a.A);
			break;
		case bi:
			var b = a.wd;
			if (0 != b.qa().length) {
				a = this.ea;
				var c = b.qa();
				if (0 != c.length) {
					var d = b.K(),
						e;
					e = c.indexOf(aa);
					if (-1 == e) e = -1;
					else {
						var g = a.A.ba().qa(),
							h = d + c.length,
							n = h == g.ub() - 1;
						!(h >= g.ub() || Zs(g, h)) && !n && f(Error("Section is not being inserted before a a section marker, the last newline or at the end of the document."));
						g = c.charAt(c.length - 1) == da;
						c.charAt(0) == aa ? (g || f(Error("Section with no leading newline and no ending newline is being inserted.")),
						n && f(Error("Section with no leading newline is being inserted before the last paragraph marker")), e = -1) : (c.charAt(e - 1) != da && f(Error("Expected '\\n' before section marker.")), e = n ? e : -1)
					}
					0 == e && f(Error("Section marker split location can't be zero."));
					1 <= e ? (n = e - 1, 0 < n && oE(a.C, d, n), oE(a.C, d + e, c.length - n), Ccb(a.C, d + n, d + n)) : oE(a.C, d, c.length);
					for (c = 0; c < a.F.length; ++c) a.F[c].AX(a.A, b)
				}
			}
			break;
		case nh:
			b = a.wd;
			a = b.aa();
			if (c = this.Q.ba().Fb(a)) {
				switch (c.xa()) {
					case Jj:
						Ddb(this.Q.W, a, this.Q)
				}
				a = this.ea;
				(c = a.G[b.Aa]) && c.II(a.A, b)
			} else this.Q.ra.log(Error(Jea + a));
			break;
		case ni:
			b = a.wd;
			a = a.A;
			c = b.aa();
			if (d = this.Q.ba().Fb(c)) {
				switch (d.xa()) {
					case Jj:
						if (d = this.Q.W.A[c]) d.update(), z7a(d, q), c = d.Q.ba().Fb(c), d.xc(Ru(Pu.ya(), c.K), Ru(Pu.ya(), c.L))
				}
				c = this.ea;
				(d = Bcb(c, b.aa())) && d.LI(c.A, b, a)
			} else this.Q.ra.log(Error(Nea));
			break;
		case rh:
			b = a.wd;
			a = a.A;
			c = b.aa();
			if (d = this.Q.ba().Fb(c)) {
				switch (d.xa()) {
					case Jj:
						if (d = this.Q.W, e = d.A[c]) Ldb(d, c), delete d.A[c], O(e)
				}
				c = this.ea;
				(d = Bcb(c, b.aa())) && d.JI(c.A, b, a);
				b = c.A.ba().Fb(b.aa());
				a = a.A();
				b && 0 <= a && Qcb(c.C, a, b)
			} else this.Q.ra.log(Error(Rda));
			break;
		case li:
			b = a.wd;
			a = a.A;
			c = b.aa();
			(d = this.Q.ba().Fb(c)) ? (d.xa() == Jj && Ldb(this.Q.W, c), c = this.ea, (d = Bcb(c, b.aa())) && d.KI(c.A, b, a), b = c.A.ba().Fb(b.aa()), a = a.A(), b && 0 <= a && Qcb(c.C, a, b)) : this.Q.ra.log(Error(Uda + c));
			break;
		case ph:
			b = a.wd;
			a = a.A;
			c = this.ea;
			(d = c.K[b.G]) ? d.yt(c.A, b, a) : dE(c.A, b.C(), b.F());
			this.t9(b, a);
			break;
		case Ee:
		case Fe:
			this.Hb();
			O(this.Do);
			this.Do = m;
			this.G && (this.removeChild(this.G.Ne()), O(this.G));
			this.Sz && (this.removeChild(this.Sz), O(this.Sz),
			this.FI = this.Sz = m);
			b = this.Q;
			a = T(this);
			for (c = 0; d = this.A[c]; c++) this.removeChild(d), a.Pb(d, vf, this.W8), O(d);
			this.F && this.F.reset();
			this.Xh = m;
			this.A = [];
			udb(this);
			4 == b.va.A && (this.G = vdb(this), this.Oa(this.G.Ne()));
			Ubb(this.L);
			A2a(this.K);
			Xcb(this.K);
			this.lX();
			this.za()
	}
};

function Mdb(a, b) {
	if (b) a.yM ? (a.Q.ra.log(Error(jpa)), a.Do && a.Do.stop()) : (a.Do || (a.Do = new cq(wdb || 200), T(a).A(a.Do, al, function() {
		this.Ef(new odb)
	})), a.Do.start());
	else if (a.Do && a.Do.stop(), a.n3 && !a.yM) {
		for (var c = 0, d; d = a.A[c]; c++) d.nU();
		a.yM = l;
		a.dispatchEvent(PEa)
	}
}
F.Ef = function(a) {
	a = this.Q.va.tg ? a || (this.yM ? EE.ya() : ndb.ya()) : m;
	for (var b = q, c = 0, d; d = this.A[c]; c++) b = d.Ef(a || EE.ya()) || b;
	a && Mdb(this, b || Scb(this.K));
	this.pe && this.dispatchEvent(new gVa(this, this.getHeight()))
};
F.uJ = jm(54);
F.$m = D(m);
F.x9 = function() {
	this.K.Y++;
	this.Ef();
	KE(this);
	this.wD()
};
F.tZ = function() {
	this.n3 = l
};
F.wD = function() {
	var a = this.Q.C,
		b = ZA(this.Q.ba(), zj, Hs(this.Q.A.A.getSelection()));
	aVa(a, mf, b.wc());
	aVa(a, nf, b.wc());
	aVa(a, Ze, b.wc());
	aVa(a, ef, b.wc());
	Fdb(this);
	if (!go(jo(), Qf)) {
		var b = this.Q.A,
			c = !! iE(b);
		U.fw.Ca(c);
		U.Ws.Ca(c);
		var c = this.Q.va,
			d = b.A.getSelection(),
			e = Ks(d);
		U.Pm.Ca(e);
		U.Tm.Ca(e && 4 == c.A);
		e = d.Lb;
		if (4 == c.A) {
			var g = ot(b);
			ME(a, ki, g);
			ME(a, U.Wl.aa(), 0 == e.xa())
		}
		c.L && (0 != e.xa() ? U.uj.Ca(q, vfa) : Ks(d) ? U.uj.Ca(l, vfa) : U.uj.Ca(gYa(e.A(), b.ba().qa()), vfa));
		b = z_a(this.Q.A);
		ME(a, NEa, b);
		ME(a, Oua, b)
	}
};

function ME(a, b, c) {
	(a = a.Ja(b)) && a.Ca(c)
}
F.t9 = G;

function WXa(a, b, c) {
	if (b) {
		var d = a.Q.A,
			e = d.A,
			g = a.G.Ne().N(),
			g = Op(g),
			h = Hdb(a, Hs(e.getSelection())).rb().N(),
			n = Op(h),
			e = new cdb(n),
			h = h.offsetWidth,
			n = g.x - n.x,
			p = d.A,
			g = yC(p),
			t = RYa(m, pv()),
			g = rz(tz.ya(), g, 0, t),
			t = d.ba().Ra(zj, qt(p)),
			d = t.vw(),
			p = G0a(t),
			t = t.Qz(),
			h = h - (d + p);
		d < t ? d = 0 : (d = d - t, n -= d, h += d);
		e.apply(c.A);
		c.A.style.width = h + Sj;
		c.A.style.height = Vca;
		e = c.If;
		e.style.textIndent = (n || 0) + Sj;
		e.style.marginLeft = (d || 0) + Sj;
		e.style.marginTop = Ya;
		g = xTa(g);
		Q && g.color && (g.color = m);
		Gp(e, g);
		c.F = l
	} else c.A.style.top = Fba, c.A.style.left = Fba, c.A.style.width = eb, c.A.style.height = eb, e = c.If, e.style.marginTop = r, e.style.marginLeft = r, e.style.marginBottom = r, e.style.marginRight = r, c.F = q;
	a = a.G;
	a.baa = b;
	GE(a)
}
function Kdb(a, b, c) {
	var d = c.Yh();
	zcb(a.ea, b, c);
	(b = d.Lf.positioned) && dr(b, function(a, b) {
		for (var c = 0; c < b.length; c++) Ldb(this.Q.W, b[c]);
		return q
	}, a)
}
F.Ksa = function() {
	if (this.CK) {
		var a = this.CK.yh();
		if (U.Dc.isEnabled()) {
			this.Na.zL = l;
			this.Aa.zL = l;
			for (var b in a) {
				var c = a[b];
				c.C || Jdb(this, c)
			}
		} else {
			this.Na.zL = q;
			this.Aa.zL = q;
			b = this.fc;
			var d = [];
			for (c in a) {
				var e = a[c];
				if (!e.C) for (var e = e.Ne().C, g = 0; g < e.length; g++) d.push(new xs(e[g].start, e[g].end))
			}
			Du(b.C, We, d);
			Ubb(this.L)
		}
	}
};
F.zoom = G;
F.GO = G;
F.scroll = function(a) {
	var b = qu.ya(),
		c = tu(b, new Ou($d, WMa));
	a ? sE(this.Y) : sE(this.C);
	Ndb(this);
	uu(b, c)
};

function Ndb(a) {
	if (!Scb(a.K) || a.Q.va.tg && !a.yM) for (var b = qw(a), c = b.end - b.start, d = 0, e; e = a.A[d]; d++) e.zG(b.start, c)
}
F.y1 = D(0);
F.tia = D(0);
F.xA = function() {
	if (this.Ue) {
		for (var a = {}, b = 0, c; c = this.A[b]; b++) {
			var d = c.getPosition();
			if (d && 0 == d.type) {
				var e;
				switch (d.anchor) {
					case Zi:
						d = this.y1();
						e = this.tia(c, Odb(this, l), Odb(this, q));
						a.main_page = c;
						break;
					default:
						this.Q.ra.log(Error(Oka));
						continue
				}
				c.xc(e, d)
			}
		}
		for (b = 0; c = this.A[b]; b++) if ((d = c.getPosition()) && 1 == d.type) if (e = a[d.anchor]) {
			switch (d.position) {
				case Pi:
					d = rw(e) - c.Jp();
					e = sw(e);
					break;
				case dk:
					d = rw(e) + e.Jp();
					e = sw(e);
					break;
				default:
					this.Q.ra.log(Error(Pka));
					continue
			}
			c.xc(d, e)
		}
		KE(this);
		Fdb(this)
	}
};
F.w9 = function() {
	this.NB || (this.NB = eq(ju(this.Q.ra, this.Me, this), 0))
};
F.Me = function() {
	this.NB != m && (fq(this.NB), this.NB = m);
	Q && sE(this.C);
	var a = this.zA,
		b = this.Qc.dp().height;
	this.HA = Op(a).y;
	this.RE = Op(a).x;
	a = Math.max(b - this.HA, this.Xl);
	this.Q.va.G && (a = this.na.Ve());
	this.Ue.style.height = a + Sj;
	this.SU = a;
	this.sQ = this.RU = m;
	this.xA();
	Ndb(this);
	this.iOa();
	a = this.Qc;
	a.dispatchEvent(cc);
	a.dispatchEvent(ec)
};
F.W8 = function() {
	Q && sE(this.C);
	this.Q.va.G && this.w9()
};
F.iOa = G;

function Odb(a, b) {
	for (var c = 0, d = 0, e; e = a.A[d]; d++) {
		var g = e.getPosition();
		if (g && 1 == g.type && (g = g.position, b && g == Pi || !b && g == dk)) c += e.Jp()
	}
	return c
}
F.getHeight = function() {
	return this.Xh ? this.Xh.getHeight() : 0
};
F.O = function() {
	HE.M.O.call(this);
	O(this.G);
	O(this.L);
	O(this.yT);
	O(this.C);
	O(this.Y);
	O(this.fc);
	O(this.Na);
	O(this.Aa);
	O(this.Do);
	O(this.ea);
	O(this.zM);
	O(this.ib);
	this.NB != m && fq(this.NB)
};

function Pdb(a, b) {
	lx.call(this, a);
	this.A = b
}
L(Pdb, lx);
F = Pdb.prototype;
F.vp = m;
F.M0 = 0;
F.N0 = 0;
F.ha = function() {
	var a = this.ma();
	this.vp = a.ha(Rb, YFa);
	this.Sb(a.ha(Rb, XFa, this.vp))
};
F.qj = function() {
	f(Error("Decorating is not supported by kix.ui.DocumentTopShadow."))
};
F.za = function() {
	Pdb.M.za.call(this);
	this.vp.style.opacity = Math.min(1, this.N0 / 300);
	this.vp.style.left = this.M0 + Sj;
	this.vp.style.width = this.A.ff() + 2 + Sj;
	T(this).A(this.Q.A, Jf, this.DJa)
};
F.DJa = function(a) {
	if (a.wd.xa() == ph) {
		a = a.wd;
		var b = a.L;
		this.vp && (a.G == uf && Gf in b) && (this.vp.style.width = this.A.ff() + 2 + Sj)
	}
};

function Qdb(a, b, c, d, e, g) {
	fB.call(this, a, b, c, d, e, g)
}
L(Qdb, fB);
Qdb.prototype.update = function() {
	Qdb.M.update.call(this);
	this.FF(x7a(this))
};
A7a.set(2, function(a, b, c, d, e, g) {
	return 2 != c.xa() ? (a.ra.log(Error(Zha)), m) : new Qdb(a, b, c, d, e, g)
});

function NE(a, b, c, d, e, g) {
	fB.call(this, a, b, c, d, e, g)
}
L(NE, fB);
NE.prototype.FF = function(a) {
	NE.M.FF.call(this, a);
	a = !a;
	if (this.N()) {
		var b = this.A.ff(),
			c = this.A.Ve();
		so(this.N(), 50 <= b && 50 <= c ? PGa : OGa, a)
	}
};
NE.prototype.update = function() {
	NE.M.update.call(this);
	this.N() && this.A.gc() != m && this.FF(x7a(this))
};
A7a.set(0, function(a, b, c, d, e, g) {
	return 0 != c.xa() ? (a.ra.log(Error(Qja)), m) : new NE(a, b, c, d, e, g)
});

function xdb(a) {
	this.C = a;
	this.A = new xs(0, 0)
}
F = xdb.prototype;
F.eE = D(1);
F.dE = function(a) {
	return this.e2(a) + 1
};
F.Tca = G;
F.e2 = function(a) {
	return a * (this.C.ff() + 2)
};
F.getHeight = function() {
	return this.C.Ve() + 2
};
F.IE = function(a) {
	return Math.floor(a / (this.C.ff() + 2))
};
F.Naa = G;
F.clear = G;
F.Nw = D(1);
F.xea = G;
F.yla = G;
F.kga = im(Eb);
F.i$ = function(a) {
	return a < this.A.start ? 0 : a > this.A.end ? 2 : 1
};
F.FS = C(Eb);
F.jga = function() {
	return this.A.start
};

function OE(a, b) {
	Vv.call(this, pg, Rdb, a, b);
	this.G = b.hfe_hft
}
L(OE, Vv);
var Rdb = Uu({
	B0a: gEa
});
OE.prototype.La = function() {
	var a = new OE(this.aa(), {});
	this.ke(a);
	return a
};
OE.prototype.Ga = function(a) {
	switch (a) {
		case gEa:
			return this.G
	}
	return OE.M.Ga.call(this, a)
};
OE.prototype.Pa = function() {
	var a = {};
	a.hfe_hft = this.G;
	return a
};
OE.prototype.Oc = function(a, b) {
	switch (a) {
		case gEa:
			this.G = b;
			break;
		default:
			OE.M.Oc.call(this, a, b)
	}
};
Wv.set(pg, function(a, b) {
	return new OE(a, b)
});

function Sdb(a, b) {
	pq.call(this, a);
	this.C = b;
	this.A = [];
	this.F = Ru(Pu.ya(), 144);
	Tdb === m && (Tdb = Ru(Pu.ya(), 11))
}
L(Sdb, pq);
var Tdb = m;
F = Sdb.prototype;
F.Jo = m;
F.M4 = m;
F.Io = m;
F.pJ = m;
F.cE = m;
F.LN = m;
F.v5 = m;
F.rV = m;
F.s5 = m;
F.pV = m;
F.fH = m;
F.u5 = m;
F.De = m;
F.qV = m;
F.t5 = m;
F.Ala = 0;
F.sV = 0;
F.ha = function() {
	var a = this.ma();
	this.Jo = a.ha(Rb, qIa);
	this.Io = a.ha(Rb, qIa);
	this.cE = a.ha(Rb, {
		"class": gIa,
		style: lva
	});
	this.pJ = a.ha(Rb, qIa, this.cE);
	this.M4 = a.ha(Rb);
	var a = this.ma().ha(Rb, bIa, this.pJ, this.Io),
		b = [aIa];
	this.C && b.push(lg);
	a = this.ma().ha(Rb, b, this.Jo, this.M4, a);
	this.C && (a.style.verticalAlign = cl);
	this.Sb(a)
};
F.update = function(a, b, c, d, e, g) {
	var h = 0.4 * d.Ve(),
		n = Math.min(h, Ru(Pu.ya(), c.ft));
	if (a != this.v5 || n != this.rV) {
		var p = this.v5 = a,
			t = this.N(),
			u = e ? eIa : dIa;
		0 == p ? (e && (e = c.Ga(Ef), e = Ru(Pu.ya(), e), t.style.paddingTop = e + Sj), this.Jo.style.display = lj, this.Io.style.display = lj, this.pJ.style.display = lj, qo(t, jIa, u)) : (e && (t.style.paddingTop = r), this.Jo.style.display = r, this.Io.style.display = r, this.pJ.style.display = r, qo(t, u, jIa))
	}
	h != this.pV && (this.pV = h, this.Jo.style.maxHeight = this.pV + Sj, this.Io.style.maxHeight = this.pV + Sj);
	n != this.rV && (this.rV = n, this.Jo.style.minHeight = this.rV + Sj);
	h = Math.min(h, Ru(Pu.ya(), c.ct));
	h != this.s5 && (this.s5 = h, this.Io.style.minHeight = this.s5 + Sj);
	n = q;
	UC(c) != this.qV && (this.qV = UC(c), this.cE.style.marginLeft = this.qV + Sj, n = l);
	VC(c) != this.t5 && (this.t5 = VC(c), n = l);
	h = this.N();
	d.ff() != this.fH && (this.fH = d.ff(), h.style.width = this.fH + Sj, this.Jo.style.width = this.fH + Sj, this.Io.style.width = this.fH + Sj, n = l);
	n && (n = Math.min(this.fH - (this.t5 + this.qV), this.F), n != this.Ala && (this.Ala = n, this.cE.style.width = n + Sj));
	c = c.F.Xf() || xa;
	c != this.De && (this.De = c, this.N().style.backgroundColor = this.De);
	d = d.Ve();
	0 == a && (d = b);
	d != this.u5 && (this.u5 = d, h.style.height = this.u5 + Sj);
	g != this.sV && (this.sV = g, h.style.marginLeft = this.sV + Sj, h.style.marginRight = this.sV + Sj)
};
F.Kb = function(a) {
	this.LN != a && (this.LN && this.LN.getParent() == this && this.removeChild(this.LN, l), a && (a.getParent() && a.getParent().Kb(m), a.N() || a.ha(), this.ma().appendChild(this.M4, a.N()), this.Oa(a)), this.LN = a)
};

function PE(a, b) {
	a.removeChild(b, l);
	on(a.A, b.N());
	0 == a.A.length && (a.cE.style.display = lj)
};

function ydb(a, b) {
	this.Q = a;
	this.A = new zy(K(this.UBa, this));
	this.F = b;
	this.C = []
}
F = ydb.prototype;
F.cC = 0;
F.U3 = Number.MAX_VALUE;
F.NU = 1;
F.eE = function(a) {
	return this.A.Ga(a) + 1
};
F.dE = D(1);
F.Tca = function(a, b) {
	this.C[a] = b
};
F.e2 = function() {
	return this.F.ff() + 2
};
F.getHeight = function(a) {
	return this.A.Ga(a)
};
F.IE = function(a, b, c) {
	return Math.max(0, this.A.indexOf(b, c))
};
F.Naa = function(a) {
	Ay(this.A, a + 1)
};
F.clear = function() {
	Ay(this.A, 0)
};
F.Nw = C("NU");
F.xea = im("NU");
F.yla = function(a, b) {
	this.cC = a;
	this.U3 = b
};
F.kga = G;
F.i$ = function(a) {
	var b = 1;
	this.cC + this.U3 < this.A.Ga(a) ? b = 2 : this.cC > this.A.Ga(a + 1) && (b = 0);
	return b
};
F.FS = function(a) {
	return new xs(this.IE(0, this.cC, a), this.IE(0, this.cC + this.U3, a))
};
F.jga = function(a, b, c) {
	return 0 == a ? this.A.indexOf(this.cC - b, c - 1) + 1 : this.IE(0, this.cC, c)
};
F.UBa = function(a, b) {
	if (0 > a) {
		var c = 0;
		1 != this.NU && (c = this.Q.ba().hf().Ga(Ef), c = Ru(Pu.ya(), c));
		return c
	}
	c = 1 == this.NU ? this.F.Ve() + 2 + 8 : this.C[a];
	return b + c
};

function QE(a, b) {
	gz.call(this, a, aa);
	this.na = b;
	var c = a.ba().hf();
	fz(this, 0, VC(c), 0, UC(c))
}
L(QE, gz);
QE.prototype.lx = function() {
	return iz(this.Q.G, oGa)
};
QE.prototype.Ly = function(a) {
	return jz(this.na, a.index, a.A, this.Q)
};
QE.prototype.rH = function(a) {
	return this.na.Ye(a.index, a.A, this.Q.ba())
};
QE.prototype.ap = function(a, b) {
	return Vs(this.Q.ba().qa(), b) == b
};

function RE(a, b) {
	gz.call(this, a, aa);
	this.na = b;
	Udb(this)
}
L(RE, gz);
RE.prototype.lx = function() {
	Udb(this);
	return iz(this.Q.G, qGa)
};

function Udb(a) {
	var b = a.Q.ba().hf();
	fz(a, 7, VC(b), 7, UC(b))
}
RE.prototype.Ly = function(a) {
	return jz(this.na, a.index, a.A, this.Q)
};
RE.prototype.rH = function(a) {
	return this.na.Ye(a.index, a.A, this.Q.ba())
};
RE.prototype.ap = function(a, b) {
	return Vs(this.Q.ba().qa(), b) == b
};
var Vdb = /size:.*?;/,
	Wdb = /height:.*?;/,
	Xdb = /@page[\s\S]+size/m,
	Ydb = /@media print[\s\S]+.kix-page[\s\S]+height/m;

function Zdb(a) {
	for (var b = j3a(), c = 0; c < b.length; c++) {
		var d = i3a(b[c]);
		if (d) for (var e = 0; e < d.length; e++) {
			var g = d[e];
			if (4 == g.type || 6 == g.type) {
				var h = k3a(g);
				if (a.test(h)) return g
			}
		}
	}
	return m
};

function $db(a) {
	this.type = 0;
	this.anchor = a
}
L($db, d1a);

function aeb(a, b) {
	$x.call(this, a, b)
}
L(aeb, $x);

function SE(a, b) {
	Qy.call(this, a);
	this.L = b
}
L(SE, Qy);
SE.prototype.lx = function() {
	return iz(this.Q.G, ZFa)
};
SE.prototype.TZ = function(a) {
	return this.L.Ye(a.index, a.A, this.Q.ba())
};
SE.prototype.Ly = function(a) {
	return jz(this.L, a.index, a.A, this.Q)
};
SE.prototype.ap = function(a, b) {
	return Vs(this.Q.ba().qa(), b) == b
};

function TE(a, b, c, d) {
	this.cb = a;
	this.C = b;
	this.F = c != m ? c : m;
	this.A = d != m ? d : m
}
function UE(a) {
	return a.A === m ? -1 : a.A
};

function beb() {
	this.C = [];
	this.A = [];
	this.F = []
}
function ceb(a, b) {
	for (var c = 0; c < a.C.length; c++) if (a.C[c].cb == b) {
		pn(a.C, c);
		break
	}
	for (c = 0; c < a.A.length; c++) if (a.A[c].cb == b) {
		pn(a.A, c);
		break
	}
}
function deb(a, b) {
	return a.C[b]
}
function VE(a) {
	return a.C.length
}
function eeb(a) {
	return a.A.length
};

function IE(a, b, c, d, e) {
	$x.call(this, a, new $db(Zi));
	this.Na = b;
	this.ea = c;
	this.na = d;
	this.C = e;
	this.K = new SE(a, this.Na);
	this.A = [];
	this.Ha = [];
	this.Aa = [];
	this.Y = [];
	this.Ma = [];
	this.Qc = [];
	this.L = [];
	this.F = {};
	this.G = {};
	this.Jb = [];
	this.Ba = [];
	this.Ta = {
		pD: -1,
		version: -1
	};
	this.fc = []
}
L(IE, aeb);
F = IE.prototype;
F.ID = m;
F.V3 = m;
F.kR = q;
F.jR = q;
F.Sca = 0;
F.za = function() {
	IE.M.za.call(this);
	4 == this.Q.va.A && T(this).A(this.Q.A, Lf, this.WIa)
};
F.Jp = function() {
	return this.C.e2(this.A.length)
};
F.getHeight = function() {
	var a = this.C.getHeight(this.A.length);
	0 == this.C.Nw() && (a += this.ea.Ve());
	return a
};

function WE(a, b, c, d) {
	if (!d && 1 != a.C.Nw()) return 0;
	d = a.Q.ba().hf();
	d = 0 == b ? Ru(Pu.ya(), d.ft) : Ru(Pu.ya(), d.ct);
	if ((b = XE(a, b)) && b.views[c]) c = b.views[c].getHeight(0), d = Math.max(d, c);
	return Math.min(0.4 * a.ea.Ve(), d)
}
function YE(a, b) {
	var c = ZE(a, b, pg);
	return c ? a.Q.ba().Fb(c) : m
}
function feb(a, b) {
	var c = a.C.FS(a.A.length),
		c = WE(a, 0, c.start);
	return a.C.jga(b, c, a.A.length)
}

function ZE(a, b, c) {
	a = a.Q.ba();
	b = Nu(a, b.shift(-1));
	b = Ss(a.qa(), b);
	c = a.Ie(c, b);
	return 0 < c.length ? c[0] : m
}
F.OG = function(a) {
	var b = YE(this, a);
	if (b) {
		var c = b.G,
			b = XE(this, c);
		if (0 < b.views.length) return c = feb(this, c), b.views[c].Wq(a.shift(-b.Po))
	}
	return (b = ZE(this, a, hg)) && this.F[b] ? (c = this.Q.ba().Rc(b), this.F[b].Wq(a.shift(-c))) : this.K.Wq(a.shift(-1))
};
F.rr = function(a) {
	var b, c = YE(this, a);
	if (c && (b = c.G, c = XE(this, b), 0 < c.views.length && (b = feb(this, b), b = c.views[b].Vq(a.shift(-c.Po))))) return b.start += c.Po, b.end += c.Po, b;
	if ((b = ZE(this, a, hg)) && this.F[b]) if (c = this.Q.ba().Rc(b), b = this.F[b].Vq(a.shift(-c))) return b.start += c, b.end += c, b;
	if (b = this.K.Vq(a.shift(-1))) b.start++, b.end++;
	return b
};
F.Ar = function(a, b, c) {
	var d = m,
		e = YE(this, a);
	if (e && (d = e.G, e = XE(this, d), 0 < e.views.length && (d = feb(this, d), d = e.views[d].Bn(a.shift(-e.Po), b, c)))) return d.shift(e.Po);
	if ((d = ZE(this, a, hg)) && this.F[d]) if (e = this.Q.ba().Rc(d), d = this.F[d].Bn(a.shift(-e), b, c)) return d.shift(e);
	return (d = this.K.Bn(a.shift(-1), b, c)) ? d.shift(1) : m
};
F.zG = function(a, b) {
	this.C.yla(a, b);
	geb(this);
	$E(this, OD(this))
};
F.oN = function(a) {
	this.C.FS(this.A.length);
	var b = this.A.length - 1;
	a = new xs(to(a.start - 1, 0, b), to(a.end - 1, 0, b));
	this.C.kga(a);
	geb(this);
	$E(this, OD(this))
};
F.fv = jm(30);
F.Zq = function(a, b, c, d, e) {
	var g = this.C.IE(a, b, this.A.length);
	a -= this.C.dE(g);
	b -= this.C.eE(g);
	if (!e && 0 != this.C.Nw()) {
		a: {
			e = b;
			var h = WE(this, 0, g, q),
				n = 1;
			if (e < h) n = 0;
			else {
				h = WE(this, 1, g, q);
				h = this.ea.Ve() - h;
				if (e < h) {
					e = m;
					break a
				}
				e -= h
			}
			e = (n = XE(this, n)) && 0 < n.views.length ? (e = n.views[g].xk(new uo(0, 0), 0, a, e, c, d)) ? e.shift(n.Po) : m : m
		}
		if (e) return e;
		a: {
			n = WE(this, 1, g, q);
			e = VE(aF(this, g));
			if (0 < e && (h = this.Ba[g] ? this.Ba[g].indexOf(this.ea.Ve() - n - b, e + 1) : -1, h < e)) {
				h = Math.max(0, h);
				e = deb(aF(this, g), e - h - 1);
				n += this.Ba[g].Ga(h + 1);
				n = b - (this.ea.Ve() - n);
				e = (n = this.F[e.cb].xk(new uo(0, 0), e.C, a, n, c, d)) ? n.shift(this.Q.ba().Rc(e.cb)) : m;
				break a
			}
			e = m
		}
		if (e) return e
	}
	e = this.L[g];
	if (e == m) return m;
	g = WE(this, 0, g, q);
	return (e = this.K.xk(new uo(0, 0), e, a, b - g, c, d)) ? e.shift(1) : m
};
F.Xu = jm(187);
F.IM = jm(47);
F.Wx = function(a, b) {
	var c = heb(this, a, b);
	if (c || (c = ieb(this, a, b))) return c;
	c = this.K.Eh(a, 1, b);
	if (!c) return m;
	var d = c ? bF(this, c.Hg) : 0;
	c.A.y += this.C.eE(d) + WE(this, 0, d, q);
	c.A.x += this.C.dE(d);
	c.Hg = -1 == d ? 0 : d;
	return c
};

function ieb(a, b, c) {
	if (0 == a.C.Nw()) return m;
	var d = ZE(a, b, hg);
	if (!d || !a.F[d]) return m;
	var e = a.Q.ba().Rc(d);
	b = a.F[d].Eh(b, e, c);
	if (!b) return m;
	var g = a.G[d][b.Hg];
	if (!g || g.A === m) return m;
	var d = UE(g),
		h = VE(aF(a, d));
	c = a.C.eE(d);
	e = a.C.dE(d);
	a = a.ea.Ve() - WE(a, 1, d, q) - a.Ba[d].Ga(h - (g.F === m ? -1 : g.F));
	b.A.y += c + a;
	b.A.x += e;
	b.Hg = d;
	return b
}

function heb(a, b, c) {
	if (0 == a.C.Nw()) return m;
	var d = YE(a, b);
	if (!d) return m;
	var e = d.G,
		g = XE(a, e);
	if (!g || 0 == g.views.length) return m;
	e = feb(a, e);
	if (!g.views[e]) return m;
	b = g.views[e].Eh(b, g.Po, c);
	if (!b) return m;
	b.A.y += a.C.eE(e);
	b.A.x += a.C.dE(e);
	if (1 == d.G || 3 == d.G) b.A.y += a.ea.Ve() - WE(a, 1, e, l);
	b.Hg = e;
	return b
}
function XE(a, b) {
	var c = a.Q.ba().hB(pg);
	if (0 == c.length) return m;
	for (var d = a.Q.ba(), e = 0; e < c.length; e++) {
		var g = d.Ie(pg, c[e])[0];
		if (d.Fb(g).G == b) return {
			id: g,
			Po: c[e],
			views: 0 == b ? a.Ha : a.Aa
		}
	}
	return m
}
F.Ef = function(a) {
	for (var b = n2a(this.na, pg), c = 0, d; d = b[c]; c++) {
		d = d.slice.A[d.id];
		for (var e = 0; e < this.A.length; e++) {
			if (0 == d.G || 2 == d.G) {
				var g = this.A[e],
					h = this.Ha[e].rb(0);
				oo(g.Jo, hIa, iIa)
			} else g = this.A[e], h = this.Aa[e].rb(0), oo(g.Io, fIa);
			g.removeChild(h, l)
		}
		0 == d.G || 2 == d.G ? this.Ha = [] : this.Aa = []
	}
	b = m2a(this.na, pg);
	if (0 < b.length) for (c = 0; d = b[c]; c++) d = this.Q.ba().Fb(d.id), jeb(this, d.G);
	keb(this, 0);
	keb(this, 1);
	b = m2a(this.na, hg);
	if (0 != b.length) {
		c = this.Q.ba();
		g = c.ic(hg);
		d = {};
		for (e = 0; g[e]; e++) h = jw(c.Ra(hg, g[e])),
		d[h] = l;
		for (e = 0; g = b[e]; e++) if (h = g.id, !d[h]) {
			var h = mz(this.na, h),
				n = Vs(c.qa(), g.index);
			h.xj(n, n - g.index + 1)
		}
	}
	b = n2a(this.na, hg);
	for (c = 0; d = b[c]; c++) {
		d = d.id;
		(!this.G[d] || !this.F[d]) && f(Error("Found a delete section with no view."));
		for (e = 0; e < this.G[d].length; e++) g = this.G[d][e], g.A !== m && (PE(this.A[UE(g)], this.F[d].rb(g.C)), An(this.Y, UE(g)));
		O(this.F[d]);
		delete this.F[d];
		delete this.G[d]
	}
	for (b = 0; b < this.A.length; b++) c = leb(this, b), this.fc[b] && this.fc[b].y != c.y && gr(this.Y, b), this.fc[b] = c;
	e = q;
	b = this.Kq();
	g = this.Q.ba().hf();
	c = mz(this.na, m);
	if ((d = Sy(c)) && 0 == d.index) {
		this.C.clear();
		fz(this.K, 0, VC(g), 0, UC(g));
		for (var p in this.F) e = g, fz(this.F[p], 0, VC(e), 0, UC(e));
		for (p = 0; p < this.A.length; p++) Vbb(this, p);
		this.ID.style.backgroundColor = qab(this.Q.ba().hf()).Xf() || xa;
		this.ID.style.height = this.ea.Ve();
		this.ID.style.width = this.ea.ff();
		p = this.ea;
		$q && (e = p.ff(l), g = p.Ve(l), h = Zdb(Xdb), p = Zdb(Ydb), h && p && (e = k3a(h).replace(Vdb, CNa + e + Tj + g + Uj), m3a(h, e), e = bEa + Math.floor(g) + TLa, e = k3a(p).replace(Wdb, e), m3a(p, e)));
		c.xj(0, d.type == Wg ? 1 : 0);
		e = l
	}
	p = meb(this);
	if (0 > p) a = q;
	else {
		g = -1;
		for (h = q; 0 <= p;) {
			p <= g && f(Error("Redrawing the same page multiple times."));
			d = Sy(c);
			n = a;
			d = d ? d.index : -1;
			var t = p,
				u = -1 != g;
			n.xa() == INa ? d = -1 == this.K.Aw(n.G) : (t = this.C.i$(t), d = !n.C(t, d, u));
			if (!d) {
				h = l;
				break
			}
			p > g + 1 && neb(this, c, p - 1);
			neb(this, c, p);
			g = p;
			p = meb(this)
		}
		this.Qc.length = 0;
		geb(this);
		this.Kq() != b && (eq(K(this.dispatchEvent, this, ZKa)), e = l);
		e && this.dispatchEvent(vf);
		a = h
	}
	$E(this, OD(this));
	return a
};

function leb(a, b) {
	var c = WE(a, 0, b, l),
		d = WE(a, 1, b, l);
	return new uo(a.ea.ff(), a.ea.Ve() - c - d)
}
function jeb(a, b, c) {
	if (XE(a, b)) {
		var d = c ? c + 1 : a.A.length;
		for (c = c ? c : 0; c < d; c++) 0 == b ? a.Ha[c] = new RE(a.Q, a.Na) : a.Aa[c] = new RE(a.Q, a.Na)
	}
}

function keb(a, b, c) {
	var d = XE(a, b);
	if (d) {
		var e = c != m,
			g = a.ea.ff(),
			h = a.na,
			n = e ? c : 0;
		c = e ? c + 1 : a.A.length;
		if (e || Sy(mz(h, d.id))) {
			for (; n < c; n++) {
				var p = Ucb(h, d.id, e),
					t = a,
					u = b,
					x = n,
					y = 0 == u ? t.Ha[x] : t.Aa[x],
					B = y.vj(p.C, d.Po, 0, new uo(g, Number.MAX_VALUE), new dy(new uo(0, 0), new by, x + 1));
				if (2 == B.A) {
					var E = y.rb(0);
					0 == u ? (u = t.A[x], P(u.Jo, t.kR ? hIa : iIa), u.Oa(E), E.Va(u.Jo)) : (u = t.A[x], t.jR && P(u.Io, fIa), u.Oa(E), E.Va(u.Io))
				}
				0 < B.C.length && t.Q.ra.log(Error(lja));
				0 != B.A && y.Va(0);
				oeb(a, b, p.A, n, d.Po)
			}
			A2a(h, d.id);
			Xcb(h, d.id)
		}
	}
}
F.PG = function() {
	$E(this, OD(this));
	peb(this, 0);
	peb(this, 1)
};

function OD(a) {
	return a.Q.va.rI ? new xs(0, 0) : a.Q.va.uq ? a.C.FS(a.A.length) : new xs(0, a.A.length - 1)
}
function $E(a, b) {
	for (var c = new oz(a.na), d = b.start; d <= b.end; d++) {
		var e = a.L[d];
		e != m && a.K.hm(c, 1, e);
		for (var e = a, g = c, h = aF(e, d), n = VE(h), p = 0; p < n; p++) {
			var t = h.C[p],
				u = e.Q.ba().Rc(t.cb);
			e.F[t.cb].hm(g, u, t.C)
		}
	}
}
function oeb(a, b, c, d, e) {
	b = 0 == b ? a.Ha : a.Aa;
	b[d] ? b[d].hm(c, e, 0) : 0 != d && a.Q.ra.log(Error(Yla + d))
}

function peb(a, b) {
	var c = XE(a, b);
	if (c) {
		for (var d = 0; d < a.A.length; d++) {
			var e = Ucb(a.na, c.id);
			oeb(a, b, e.A, d, c.Po)
		}
		Xcb(a.na, c.id)
	}
}
function meb(a) {
	var b = Sy(mz(a.na, m)),
		c = Number.MAX_VALUE;
	b && (c = a.K.dA(1, b), c = bF(a, c));
	a.na.Y == a.Ta.version && (c = Math.max(c, a.Ta.pD + 1));
	for (var d in a.F) if (b = Sy(mz(a.na, d))) {
		var b = a.F[d].dA(a.Q.ba().Rc(d), b),
			e = a.G[d];
		e[b] && e[b].A !== m ? c = Math.min(c, UE(e[b])) : e[b - 1] && e[b - 1].A !== m && (c = Math.min(c, UE(e[b - 1]) + 1))
	}
	c == Number.MAX_VALUE && (c = -1);
	a = qeb(a);
	return -1 == a ? c : -1 == c || a < c ? a : c
}

function bF(a, b) {
	if (-1 == b) return -1;
	var c = Um(a.L, b, b);
	return -1 == c ? a.L.length : c
}
function qeb(a) {
	if (0 == a.Ma.length && 0 == a.Y.length) return -1;
	if (0 == a.Ma.length) return a.Y[0];
	if (0 == a.Y.length) return bF(a, a.Ma[0]);
	var b = bF(a, a.Ma[0]);
	return Math.min(a.Y[0], b)
}
function aF(a, b) {
	a.Jb[b] || (a.Jb[b] = new beb);
	return a.Jb[b]
}

function neb(a, b, c) {
	var d, e, g;
	if (!a.A[c]) {
		var h = a.Q.va.G,
			h = new Sdb(a.Q.ma(), h);
		a.xf(h, c, l);
		mn(a.A, h, c);
		h = new zy(K(a.Gua, a, a.A.length - 1));
		a.Ba.push(h);
		for (h = c; h < a.A.length - 1; h++) Ay(a.Ba[h], 0);
		jeb(a, 0, c);
		keb(a, 0, c);
		jeb(a, 1, c);
		keb(a, 1, c)
	}
	var n = leb(a, c);
	a.Ta.version = a.na.Y;
	a.Ta.pD = c;
	for (var h = {}, p = aF(a, c), t = VE(p), u = 0; u < t; u++) {
		var x = p.C[u];
		h[x.cb] = x.C
	}
	aF(a, c).C = [];
	aF(a, c + 1).A = [];
	a.Ba[c] && Ay(a.Ba[c], 0);
	t = aF(a, c);
	x = eeb(t);
	if (0 == x) u = n.y;
	else {
		p = Tdb || 0;
		for (u = 0; u < x; u++) {
			var y = t.A[u],
				B = reb(a, y.cb, y.C, new uo(n.x,
				n.y - p), VE(t), c, l);
			seb(a, y.cb, y.C, c, B, l);
			B.Gf || (p += a.F[y.cb].getHeight(y.C));
			if (B.Gf || B.yj) {
				x = aF(a, c + 1);
				t = tn(t.A, u + 1);
				sn(x.A, t);
				break
			}
		}
		u = n.y - p
	}
	p = new uo(n.x, u);
	t = 0 == eeb(aF(a, c));
	u = 0 < eeb(aF(a, c + 1));
	teb(a, b, c, p, t, u);
	a: if (u = p, B = ueb(a, c), 0 == B.length) u = u.y;
	else {
		g = 0;
		for (var E, x = 0 == VE(aF(a, c)) ? Tdb || 0 : 0, y = 0; y < B.length; y++) {
			var H = B[y];
			if (a.F[H.id] || -1 != a.Q.ba().Rc(H.id)) {
				E = g;
				d = a;
				var J = H.id,
					$ = c,
					V = u;
				g = E;
				var ca = x,
					ia = VE(aF(a, c));
				e = d.K.Mo((new ws(H.Gta)).shift(-1));
				g = Math.max(e ? e.bottom : 0, g);
				d = reb(d, J, 0, new uo(V.x,
				V.y - g - ca), ia, $, q);
				seb(a, H.id, 0, c, d, q);
				if (d.Gf) {
					B = Math.max(E, e.top);
					u = Math.min(0 < y ? u.y - x : u.y, B);
					break a
				}
				if (d.yj) {
					u = g;
					break a
				}
				x += a.F[H.id].getHeight(0)
			}
		}
		u = u.y - x
	}
	u != p.y && (p = new uo(n.x, u), teb(a, b, c, p, t));
	b = aF(a, c);
	n = VE(b);
	for (p = 0; p < n; p++) {
		var ua = b.C[p].cb;
		h[ua] != m && delete h[ua]
	}
	for (ua in h) b = h[ua], a.G[ua] && (a.G[ua][b] && UE(a.G[ua][b]) == c) && (n = a.F[ua].rb(b), PE(a.A[c], n), ceb(aF(a, c), ua), a.G[ua][b] = new TE(ua, b));
	n = ueb(a, c);
	ua = {};
	for (h = 0; h < n.length; h++) if (b = n[h].id, ua[b] = l, (a.F[b] || -1 != a.Q.ba().Rc(b)) && (!a.G[b] || 0 == a.G[b].length || UE(a.G[b][0]) != c)) aF(a, c + 1).A.push(new TE(b, 0)), gr(a.Y, c + 1);
	n = aF(a, c).F;
	for (h = 0; h < n.length; h++) if (b = n[h], !ua[b]) {
		if (p = a.G[b]) {
			0 < p.length && ceb(aF(a, UE(p[p.length - 1]) + 1), b);
			for (t = 0; t < p.length; t++) u = p[t], x = u.C, y = a.F[b].rb(x), u.A !== m && PE(a.A[UE(u)], y), UE(u) > c && gr(a.Y, UE(u)), ceb(aF(a, UE(u)), b), p[t] = new TE(b, x)
		}
		pn(n, h--)
	}
	ua = a.K.dh();
	h = bF(a, ua - 1);
	b = aF(a, c + 1);
	h < c && 0 == VE(aF(a, c)) ? veb(a, c, ua) : h == c && (0 == a.Y.length && 0 == VE(b) && 0 == eeb(b)) && veb(a, c + 1, ua)
}

function teb(a, b, c, d, e, g) {
	e && g && a.Q.ra.log(Error(lfa));
	Bn(a.Y, c);
	var h = a.L[c] === m,
		n;
	a: if (a.L[c] != m) n = a.L[c];
	else {
		for (n = c - 1; 0 <= n; n--) if (a.L[n] != m) {
			n = a.L[c] = a.L[n] + 1;
			break a
		}
		n = a.L[c] = 0
	}
	b = g ? m : a.K.vj(b, 1, n, d, new dy(new uo(0, 0), new by, c + 1), e);
	d = g ? q : h && !b.Gf;
	e = g ? q : !b.yj;
	if ((g ? !h : !h && b.Gf) || d || e) {
		for (h = c + 1; h < a.A.length; h++) gr(a.Y, h);
		a.L.length = c + 1
	}
	if (g || b.Gf || 3 == b.A) a.L[c] = m;
	g = a.L[c];
	g = g != m ? a.K.rb(g) : m;
	a.A[c].Kb(g);
	a.C.Naa(c);
	Vbb(a, c);
	b && (c = n, Bn(a.Ma, c), b.Gf ? gr(a.Ma, c) : b.F ? gr(a.Ma, c + 1) : b.yj || (a.Ma.length = 0))
}
function veb(a, b, c) {
	if (b > a.A.length) a.Q.ra.log(Error(Gha));
	else {
		a.Ha.length = Math.min(b, a.Ha.length);
		a.Aa.length = Math.min(b, a.Aa.length);
		a.Ba.length = b;
		for (var d = a.Ma.length - 1; 0 <= d; d--) a.Ma[d] > c && a.Ma.pop();
		for (d = a.Y.length - 1; 0 <= d; d--) a.Y[d] >= b && a.Y.pop();
		for (var e, d = a.A.length - 1; d >= b; d--) e = a.removeChild(a.A.pop(), l);
		e && (c = e.N()) && mp(c.offsetHeight);
		a.L.length = b
	}
}

function reb(a, b, c, d, e, g, h) {
	a.F[b] || (0 != c && f(Error("Laying out footnote without creating a footnote view.")), a.F[b] = new QE(a.Q, a.Na), a.G[b] = []);
	var n = a.F[b],
		p = mz(a.na, b),
		t = a.Q.ba().Rc(b);
	d = n.vj(p, t, c, d, new dy(new uo(0, 0), new by, g + 1), h && 0 == e);
	for (var p = a.G[b][c], t = d.C, u = a.G[b], x = t.length - 1; 0 <= x; x--) {
		var y = u.pop();
		y.A !== m && (y = UE(y), PE(a.A[y], t[x]), An(a.Y, y))
	}
	if (d.Gf) return d;
	t = !p || 2 == d.A;
	p && g != UE(p) && (p.A !== m && PE(a.A[UE(p)], a.F[b].rb(c)), t = l);
	t && (h || (aF(a, g).F.push(b), a.G[b][0] && (h = aF(a, UE(a.G[b][0])),
	on(h.F, b))), h = a.F[b].rb(c), p = a.A[g], 0 == p.A.length && (p.cE.style.display = r), p.A[e] ? (t = p.A[e], rq(h, t.parentNode, t)) : h.Va(p.pJ), h.Hb(), p.Oa(h), mn(p.A, h.N(), e), a.G[b][c] = new TE(b, c, e, g));
	0 != d.A && n.Va(c);
	return d
}
function seb(a, b, c, d, e, g) {
	var h = aF(a, d);
	if (!e.Gf && a.G[b][c]) {
		var n = VE(h);
		h.C.push(new TE(b, c, n, d));
		a.G[b][c] = new TE(b, c, n, d)
	}
	if (e.yj || e.Gf) d += 1, h = aF(a, d), An(a.Y, d), e.Gf ? g && h.A.push(new TE(b, c)) : h.A.push(new TE(b, c + 1))
}
function geb(a) {
	0 >= a.A.length ? a.Q.ra.log(Error(aoa)) : web(a, OD(a))
}

function web(a, b) {
	for (var c = b.start; c <= b.end; c++) {
		var d = a.L[c];
		d != m && 0 > vn(a.Qc, d) && (a.K.Va(d), An(a.Qc, d))
	}
}
function Vbb(a, b) {
	if (a.A[b]) {
		var c = 0,
			d = a.L[b];
		d != m && (c = a.K.getHeight(d));
		a.A[b].update(a.C.Nw(), c, a.Q.ba().hf(), a.ea, 0 == b, a.Sca);
		a.C.Tca(b, c)
	}
}
F.Gua = function(a, b, c) {
	var d = VE(aF(this, a)) - b - 1;
	if (0 > b || !aF(this, a) || !deb(aF(this, a), d)) return 0;
	a = deb(aF(this, a), d);
	a = this.F[a.cb].getHeight(a.C);
	return c + a
};
F.GG = function(a) {
	this.C.clear();
	this.C.xea(a);
	this.N() && (a = 0 == a, so(this.N(), mIa, a), this.ID.style.display = a ? r : lj);
	for (a = 0; a < this.A.length; a++) Vbb(this, a);
	this.dispatchEvent(vf)
};
F.ha = function() {
	var a = qab(this.Q.ba().hf()).Xf() || xa,
		b = 0 == this.C.Nw() ? r : lj,
		a = bEa + this.ea.Ve() + WLa + a + gda + b + pb;
	this.ID = this.ma().ha(Rb, {
		"class": BBa,
		style: a
	});
	var c;
	this.Q.va.G && (c = {
		style: cQa
	});
	this.V3 = this.ma().ha(Rb, c);
	this.Sb(this.ma().ha(Rb, lIa, this.V3, this.ID))
};
F.Kq = function() {
	return this.L.length
};
F.yf = function() {
	return this
};
F.Tb = C("V3");
F.WIa = function() {
	var a, b;
	b = a = q;
	var c = 0 < this.Aa.length;
	if (0 < this.Ha.length || c)(c = YE(this, Hs(this.Q.A.A.getSelection()))) && (0 == c.G ? a = l : b = l);
	if (a != this.kR || b != this.jR) {
		for (c = 0; c < this.A.length; c++) {
			if (a != this.kR) {
				var d = a;
				po(this.A[c].Jo, d ? iIa : hIa, d ? hIa : iIa)
			}
			b != this.jR && so(this.A[c].Io, fIa, b)
		}
		this.kR = a;
		this.jR = b
	}
};

function ueb(a, b) {
	var c = a.Q.ba(),
		d = a.L[b];
	if (d == m) return [];
	for (var e = [], g = c.ic(hg), h = 0; h < g.length; h++) {
		var n = g[h],
			p = jw(c.Ra(hg, n));
		(!a.G[p] || !a.G[p][0] || !(a.G[p][0].A !== m && UE(a.G[p][0]) < b)) && d == a.K.Aw(n - 1) && e.push({
			id: p,
			Gta: n
		})
	}
	return e
}
F.O = function() {
	IE.M.O.call(this);
	O(this.K);
	for (var a = 0; a < this.Ha.length; a++) O(this.Ha[a]);
	for (a = 0; a < this.Aa.length; a++) O(this.Aa[a]);
	for (var b in this.F) O(this.F[b]);
	for (a = 0; a < this.Ba.length; a++) O(this.Ba[a])
};
var xeb = /%s/g;

function JE(a) {
	$x.call(this, a.Q, k);
	this.$d = a;
	this.Oa(this.$d);
	T(this).A(this.$d, vf, this.aza);
	this.A = 1;
	this.F = 0;
	this.C = 0.125;
	this.G = 8
}
L(JE, aeb);
F = JE.prototype;
F.BG = m;
F.dU = m;
F.zoom = jm(101);
F.GO = function(a, b, c) {
	this.F = a;
	a = sm(c) ? c : 8;
	this.C = to(sm(b) ? b : 0.125, 0.125, 8);
	this.G = to(a, this.C, 8)
};

function yeb(a, b) {
	b = to(b, a.C, a.G);
	a.A != b && (a.A = b, zeb(a))
}
F.aza = function() {
	zeb(this)
};

function zeb(a) {
	a.BG && a.dU && (a.BG.style.width = a.Jp() + Sj, a.BG.style.height = a.getHeight() + Sj, a.dU.style.cssText = 1 == a.A ? r : (Q && !Io(9) ? rQa : iPa).replace(xeb, r + a.A))
}
F.ha = function() {
	this.$d.N() || this.$d.ha();
	this.dU = this.ma().ha(Rb, TIa, this.$d.N());
	this.BG = this.ma().ha(Rb, UIa, this.dU);
	xq(this.BG, tg, l);
	this.Sb(this.BG);
	zeb(this)
};
F.Jp = function() {
	return this.$d.Jp() * this.A
};
F.getHeight = function() {
	return this.$d.getHeight() * this.A
};
F.getPosition = function() {
	return this.$d.getPosition()
};
F.OG = function(a) {
	return this.$d.OG(a)
};
F.rr = function(a) {
	return this.$d.rr(a)
};
F.Ar = function(a, b, c) {
	return this.$d.Ar(a, b, c / this.A)
};
F.Ef = function(a) {
	return this.$d.Ef(a)
};
F.PG = function() {
	this.$d.PG()
};
F.zG = function(a, b) {
	this.$d.zG(a / this.A, b / this.A)
};
F.fv = jm(29);
F.Wx = function(a, b) {
	var c = this.$d.Wx(a, b);
	c && (c.A.x *= this.A, c.A.y *= this.A, c.height && (c.height *= this.A));
	return c
};
F.Zq = function(a, b, c, d, e) {
	return this.$d.Zq(a / this.A, b / this.A, c, d, e)
};
F.GG = function(a) {
	this.$d.GG(a)
};
F.nU = function() {
	this.$d.nU()
};
F.oN = function(a) {
	return this.$d.oN(a)
};
F.Xu = jm(186);
F.IM = jm(46);

function cF(a, b, c, d, e, g, h, n, p, t, u, x, y, B, E, H) {
	this.Ul = x;
	HE.call(this, a, c, d, e, p, g, h, 0, 0, y, B, E, H);
	this.tg = b;
	this.Ta = new Pdb(a, e);
	this.Vl = u;
	this.sg = y;
	this.Ba = m;
	this.Oa(this.Ta);
	this.od = m
}
L(cF, HE);
var Aeb = go(jo(), "enable_anonymous_photo_creation");
F = cF.prototype;
F.Gi = m;
F.CV = m;
F.om = m;
F.wM = m;
F.g5 = m;
F.Ey = m;
F.$m = C("g5");
F.rX = function(a) {
	cF.M.rX.call(this, a);
	jE(a, Bd, new cE);
	var b = new jcb;
	kE(a, hg, b);
	a.F.push(b);
	jE(a, hg, b);
	kE(a, uf, new mcb);
	b = new lcb;
	jE(a, Jj, b);
	a.F.push(b)
};
F.zoom = jm(100);
F.GO = function(a, b, c) {
	this.Ey && (this.Ey.GO(a, b, c), this.xA())
};
F.lX = function() {
	cF.M.lX.call(this);
	this.om && (this.removeChild(this.om), O(this.om), this.om = m);
	this.Gi && (this.removeChild(this.Gi), O(this.Gi), Beb(this))
};
F.qj = function(a) {
	return !cF.M.qj.call(this, a) ? q : l
};
F.za = function() {
	cF.M.za.call(this);
	if (!this.Ta.bb()) {
		var a = this.zA;
		rq(this.Ta, a.parentNode, a)
	}
	this.Vl && this.tg && (this.ma().N(xIa).style.display = (this.Q.K.A[CIa] || m).Ga() ? r : lj)
};
F.Z0 = function(a) {
	cF.M.Z0.call(this, a);
	this.CV = a.wQa()(this.Q, this, this.sg);
	this.tg && (Beb(this), this.Gi.update());
	Ceb(this);
	Deb(this)
};

function Beb(a) {
	var b = qs(Fi).wf;
	if (b && a.N()) {
		var c = a.ma();
		a.Gi = b.mHa()(a.Q, a.Ma, a.na, a.Jb, vs(a.Q, b));
		Eeb(a);
		a.Oa(a.Gi);
		sq(a.Gi, c.N(xIa));
		T(a).A(a.Gi, Fl, ju(a.Q.ra, a.Me, a));
		a.od && a.Gi.g9(a.od)
	}
}
function Deb(a) {
	a.n3 && a.qo && (a.wM || (a.wM = a.qo.NKa()(a, a.Q.A, a.ma())), a.wM && a.wM.sia())
}

function Ceb(a) {
	var b = a.Q,
		c = a.qo;
	if (4 == b.va.A && c) {
		a.Ba || (a.Ba = new(c.mya()), a.sg.register(zFa, a.Ba));
		var d = a.Q.A,
			e = d.ba(),
			g = d.A.getSelection();
		(d = a.Ba.C(e, g)) ? (a.om || (a.om = new(c.nya())(b), a.Oa(a.om), a.om.Va(a.Ue)), c = d.xa() != Ug ? g.Lb : new ws(e.Rc(d.aa())), b = a.Ba.F(e, c), e = a.Ba.A(e, g), (g = ow(a, c)) && a.om.oya(d, g, e, b)) : a.om && a.om.ua(q)
	}
}
F.tZ = function() {
	cF.M.tZ.call(this);
	Deb(this)
};
F.wD = function() {
	cF.M.wD.call(this);
	Ceb(this);
	var a = this.Q.A;
	if (!go(jo(), Qf)) {
		var b = this.Q.C,
			c = this.Q,
			d = c.va;
		if (4 == d.A) {
			var e = f1a(a);
			if (d.C) {
				var g = (!this.vf.C || Aeb) && !e;
				ME(b, Uh, g);
				ME(b, Vh, g)
			}
			d.F && ME(b, Oh, !e);
			ME(b, Xg, !e);
			b = c.C;
			f3a(a) && 4 == d.A && (d.C && (b.Ja(Uh).Ca(q), b.Ja(Vh).Ca(q)), d.F && b.Ja(Oh).Ca(q), b.Ja(Xg).Ca(q), U.Wl.Ca(q))
		}
	}
	this.Gi && this.Gi.update();
	this.Gi && this.Q.va.Y && this.Gi.Ca(!ay(a.ba(), Tw(a.A), Td))
};
F.NM = jm(157);
F.t9 = function(a) {
	a.C();
	switch (a.G) {
		case uf:
			Gf in a.L && this.xA()
	}
};
F.xA = function() {
	if (this.Ue) {
		if (this.Ey) {
			var a = this.Ey,
				b = L_a(this) - 16 - edb(this.Jb) - Odb(this, q) - Odb(this, l);
			pw(this);
			1 == a.F && yeb(a, b / a.$d.Jp())
		}
		cF.M.xA.call(this);
		Ceb(this);
		Eeb(this);
		Feb(this)
	}
};

function Feb(a) {
	if (a.Xh) {
		var b = a.Ta,
			c = rw(a.Xh) - a.C.nr;
		c != b.M0 && (b.vp && (b.vp.style.left = c + Sj), b.M0 = c);
		b = a.Ta;
		a = a.C.Fg;
		b.vp && a != b.N0 && (b.vp.style.opacity = Math.min(1, a / 300));
		b.N0 = a
	}
}
function Eeb(a) {
	a.Gi && a.Xh && a.Gi.ZOa(rw(a.Xh) - a.C.nr)
}
F.scroll = function(a) {
	cF.M.scroll.call(this, a);
	Eeb(this);
	Feb(this)
};
F.y1 = function() {
	return this.Q.va.G ? 0 : 4 == this.Q.va.A ? 5 : 10
};
F.tia = function(a, b, c) {
	if (this.Q.va.G) return 0;
	a = Lw(this).width - a.Jp() - b - c - edb(this.Jb);
	return Math.max(a / 2, 16) + b
};
F.O = function() {
	cF.M.O.call(this);
	O(this.CV);
	O(this.wM)
};

function Geb() {};

function Heb(a, b, c) {
	this.A = a;
	this.Fa = b;
	this.C = c
}
Heb.prototype.kb = C(ac);

function Ieb() {}
Ieb.prototype.Pa = function(a) {
	var b = {};
	b.keyPath = a.A;
	b.state = a.kb();
	b.data = a.C;
	return b
};
nu++;

function dF(a, b, c, d) {
	this.K = a;
	this.F = b || m;
	this.A = {};
	this.R = new S(this);
	this.G = c || km._docs_userPreferences || {};
	this.C = d || m
}
L(dF, M);

function hx(a, b, c) {
	a.A[c] = b;
	a.R.A(b, $g, a.L);
	if (a.C) {
		var d = [Pk, CLa].concat([c]);
		(d = a.C.get(d)) ? (b.A = d, b.Hu(d)) : Jeb(a, b, c)
	} else Jeb(a, b, c)
}
function Jeb(a, b, c) {
	I(a.G[c]) && (a = Dn(a.G[c]), b.update(a))
}
dF.prototype.L = function(a) {
	var b = [a.A];
	a = a.C;
	if (this.F) {
		for (var c = {}, d = 0; d < b.length; d++) c[b[d].getName()] = b[d].C;
		b = [CLa, En(c)];
		b = Nv(b);
		HD(KD(this.F.Wd(rca).Kb(b).Hf(Lg, this.K), K(this.W, this, a)))
	}
};
dF.prototype.W = function(a) {
	if (this.C && a) {
		var b = new Heb(a.A, a.kb(), a.W());
		a = this.C.A;
		b = [(new Ieb).Pa(b)];
		b = Keb(a, b);
		a.C && a.C.write(b, wm(G, b))
	}
};
dF.prototype.O = function() {
	O(this.R);
	delete this.R;
	delete this.A;
	delete this.F;
	dF.M.O.call(this)
};

function Leb(a) {
	this.A = a
}
Leb.prototype.register = function(a, b) {
	this.A.set(b, a)
};
Leb.prototype.unregister = function(a) {
	a = Meb(this, a); - 1 != a && this.A.remove(a)
};

function Meb(a, b) {
	for (var c = -1, d = a.A.dd(), e = 0; e < d.length; e++) {
		var g = d[e];
		if (a.A.get(d[e]) == b) {
			c = g;
			break
		}
	}
	return c
};

function Neb(a, b) {
	this.A = b;
	var c = new S(this);
	c.A(a, Jf, this.C);
	N(this, c)
}
L(Neb, M);
Neb.prototype.C = function(a) {
	var b = a.wd;
	switch (b.xa()) {
		case bi:
			this.A.shift(b.K(), b.qa().length);
			break;
		case wh:
			a = b.C(), b = b.F(), this.A.splice(a, b - a + 1)
	}
};

function eF(a, b, c, d, e, g, h, n) {
	this.yb = a;
	this.F = b;
	this.ra = c;
	this.na = d;
	this.Na = e;
	this.G = g;
	this.Aa = h;
	this.Ta = n
}
L(eF, M);
eF.prototype.ba = C("yb");
eF.prototype.O = function() {
	O(this.F);
	delete this.F;
	delete this.Ta;
	delete this.yb;
	delete this.ra;
	delete this.Na;
	delete this.G;
	delete this.Aa;
	eF.M.O.call(this)
};

function Oeb() {}
function K2a(a) {
	0 != a.xa() && f(Error("Cannot convert color of type " + a.xa()));
	return a.Dr
};

function Peb(a) {
	this.A = a
}
Peb.prototype.register = function(a, b) {
	var c = this.A.get(b);
	c || (c = [], this.A.set(b, c));
	c.push(a)
};
Peb.prototype.unregister = function(a) {
	dr(this.A.A, function(b, c) {
		on(c, a);
		0 == c.length && this.A.remove(b);
		return q
	}, this)
};

function H5a(a, b) {
	var c = -1;
	dr(a.A.A, function(a, e) {
		return hn(e, b) ? (c = a, l) : q
	});
	return c
};

function Qeb(a) {
	this.C = a;
	this.A = {}
}
L(Qeb, M);

function Ddb(a, b, c) {
	var d = gB(c.ba().Fb(b));
	(c = B7a(c, a.C, d, b, l)) && (a.A[b] = c)
}
function Ldb(a, b) {
	var c = a.A[b];
	c && (c.getParent() ? c.getParent().removeChild(c, l) : (c.Hb(), c.ma().removeNode(c.N())))
}
Qeb.prototype.O = function() {
	for (var a in this.A) O(this.A[a]);
	Qeb.M.O.call(this)
};

function fF(a, b, c, d, e, g, h, n, p, t, u, x, y, B, E, H, J) {
	eF.call(this, a.ba(), c, e, h, u, x, H, p);
	this.A = a;
	this.C = b;
	this.W = d;
	this.L = g;
	this.Y = n;
	this.K = t;
	this.Wb = B;
	this.ea = y;
	this.va = E;
	this.Ba = J
}
L(fF, eF);
fF.prototype.Ma = m;
fF.prototype.Ha = m;

function PVa(a, b) {
	a.Ma || (a.Ma = new(b.TSa())(wm(Reb, b)));
	return a.Ma
}
function Reb(a) {
	var b = a.JVa();
	a = a.KVa();
	return new b(k, k, l, a)
}
function vs(a, b) {
	a.Ha || (a.Ha = Reb(b));
	return a.Ha
}
fF.prototype.ma = C("Wb");
fF.prototype.O = function() {
	O(this.Ha);
	O(this.W);
	O(this.Ma);
	fF.M.O.call(this)
};

function Seb(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	var E = new bdb(g),
		H = new By,
		J = new Neb(a, H),
		$ = new Peb(H),
		V = new By,
		H = new Neb(a, V),
		V = new Leb(V),
		ca;
	x && !u.C && (ca = x);
	u = new dF(u.gc(), ca, k, B);
	x = new Geb;
	h = new Qeb(h);
	B = new Oeb;
	a = new fF(a, c, E, h, d, g, n || Hz.ya(), $, V, u, x, p, t, e, b, B, y);
	N(a, J);
	N(a, H);
	return a
};
var Teb = [
	[wa, "#434343", Zaa, "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff"],
	["#980000", bba, "#f90", "#ff0", "#0f0", "#0ff", "#4a86e8", "#00f", "#90f", "#f0f"],
	["#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc", "#dd7e6b", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd", "#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0", "#a61c00", "#cc0000", "#e69138",
		"#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79", "#85200c", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", Yaa, "#0b5394", "#351c75", "#741b47", "#5b0f00", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#1c4587", "#073763", "#20124d", "#4c1130"]
],
	Ueb = function() {
		var a = Zn(Ym(qRa(Teb), gy));
		return function(b) {
			return !b || ey(b).Lh in a
		}
	}();

function Veb() {
	this.A = []
}
L(Veb, bq);

function Web(a, b) {
	b = {
		color: ey(b.color).Lh,
		alpha: b.alpha
	};
	!(1 == b.alpha && Ueb(b.color)) && !fn(a.A, function(a) {
		return b.color == a.color && Math.floor(255 * b.alpha) == Math.floor(255 * a.alpha)
	}, a) && (a.A.push(b), a.dispatchEvent(Aua))
};

function Xeb() {
	this.A = []
}
L(Xeb, Veb);
F = Xeb.prototype;
F.wPa = Zn(jWa);
F.R = m;
F.qia = q;
F.KKa = function(a) {
	a = a.wd;
	if (a.xa() == ph && this.wPa[a.G]) {
		a = it(a.G).ho(a.L);
		for (var b = 0; b < a.length; b++) Web(this, {
			color: a[b],
			alpha: 1
		})
	}
};
F.vb = function(a) {
	if (!this.qia) {
		for (var b = a.ba(), c = 0; c < jWa.length; c++) {
			var d = jWa[c];
			b.px(d) && dr(b.pd(d), function(a, b) {
				for (var c = b.ao(), d = 0; d < c.length; d++) Web(this, {
					color: c[d],
					alpha: 1
				});
				return q
			}, this)
		}
		this.R = new S(this);
		this.R.A(a, Jf, this.KKa);
		this.qia = l
	}
};
F.O = function() {
	O(this.R);
	Xeb.M.O.call(this)
};

function gF() {
	this.C = []
}
gF.prototype.A = m;

function jz(a, b, c, d) {
	(a = Yeb(a, b, c, d.ba())) || f(Error("No provider could be found to provide a view."));
	return a.A(d)
}
gF.prototype.Ye = function(a, b, c) {
	return !!Yeb(this, a, b, c)
};

function Yeb(a, b, c, d) {
	for (var e = 0, g; g = a.C[e]; e++) if (g.Ye(b, c, d)) return g;
	a.A || f(Error("No providers handled the insertion and there is no default provider."));
	return a.A.Ye(b, c, d) ? a.A : m
}
gF.prototype.register = function(a) {
	this.C.push(a)
};
gF.prototype.registerDefault = function(a) {
	this.A && f(Error("Default provider already registered."));
	this.A = a
};

function R6a() {
	this.A = {}
}
mm(R6a);
R6a.prototype.concat = function(a, b) {
	if (a == Yra || b == Yra) return a + b;
	this.A[a] || (this.A[a] = {});
	return !this.A[a][b] ? this.A[a][b] = a + b : this.A[a][b]
};

function Zeb() {
	this.R = new S(this);
	var a = Q ? Daa : r;
	this.L = wda + a + Waa + a + Vaa;
	this.C = Ro(Ak, {
		style: uLa
	});
	document.body.appendChild(this.C);
	this.A = this.C;
	this.K = new G4a(q, q);
	this.G = !! Zq;
	this.F = q
}
L(Zeb, bq);
var $eb = {}, hF = {};
F = Zeb.prototype;
F.bJ = m;
F.Fba = m;
F.BE = m;
F.L8 = m;
F.Baa = function() {
	var a = $o(this.bJ);
	a.open();
	a.write(this.L);
	a.close();
	this.A = this.BE = a.body.firstChild;
	this.Fba = this.BE.nextSibling;
	this.F = l;
	this.dispatchEvent(gc)
};

function afb(a) {
	a.L8 || (a.L8 = new Oeb);
	return a.L8
}
F.getHeight = function(a) {
	a = R6a.ya().concat(L4a(a, afb(this), q), iba);
	return S6a(this, a).height
};

function ox(a, b, c) {
	b = rz(tz.ya(), b, afb(a));
	hF[b] || (hF[b] = {});
	if (!hF[b][c]) {
		var d = a.G ? 50 : 1,
			e = sz(c, l, l);
		a.A.innerHTML = Pm(wb, b, ta, Nm(e, d), rb);
		a = bfb(a.A, l);
		a.width /= d;
		hF[b][c] = a
	}
	return hF[b][c]
}
function S6a(a, b) {
	if (!$eb[b]) {
		var c = a.G ? 50 : 1,
			d;
		a.A.innerHTML = Nm(b, c);
		d = bfb(a.A, k);
		d.width /= c;
		$eb[b] = d
	}
	return $eb[b]
}

function bfb(a, b) {
	var c, d;
	d = b ? a.firstChild || a : a;
	Q ? (c = a.offsetWidth, d = d.offsetHeight) : (d = a.getBoundingClientRect(), c = d.width, d = d.height);
	return new vo(c, d)
}
F.O = function() {
	Zeb.M.O.call(this);
	O(this.R)
};

function cfb() {
	var a;
	if (a = !Q || !Io(bb)) a = lm(Bua) != m;
	return a
};

function iF(a) {
	pq.call(this, a);
	this.A = new Gt
}
L(iF, pq);
F = iF.prototype;
F.ha = function() {
	iF.M.ha.call(this);
	this.N().innerHTML = Uma
};
F.za = function() {
	iF.M.za.call(this);
	var a = this.ma().N(Vva);
	T(this).A(a, Od, this.OIa)
};
F.OIa = function() {
	IWa(this.A, K(this.DNa, this))
};
F.DNa = function() {
	this.N().innerHTML = Ida;
	var a = this.ma().N(Wva);
	Ap(T(this), a, Od, K(km.location.reload, km.location))
};
F.O = function() {
	delete this.A;
	iF.M.O.call(this)
};

function jF(a) {
	this.A = a
}
jF.prototype.append = function(a) {
	a instanceof jF || f(Error("Can only append CommandBasedModelParts."));
	return new jF(this.A.concat(a.A))
};

function kF() {
	this.A = {};
	this.setTime = this.setTime;
	this.incrementTime = this.PE
}
mm(kF);
F = kF.prototype;
F.iK = m;
F.ra = m;
F.N3 = q;
F.Bga = q;
F.Aga = q;
F.vb = function(a, b, c, d) {
	this.N3 && f(Error("Timing object is already set."));
	for (var e in this.A) I(a[e]) && f(Error("Field " + e + " was set twice.")), a[e] = this.A[e];
	this.A = a;
	this.ra = b;
	this.iK = Zn(c);
	for (e in this.A) delete this.iK[e];
	this.Aga = !! d;
	this.N3 = l;
	dfb(this)
};

function efb(a, b) {
	a.N3 && (a.Bga ? a.ra.log(Error(wqa + b + Maa)) : (delete a.iK[b], dfb(a)))
}

function dfb(a) {
	if (0 == Nn(a.iK)) {
		a.Bga = l;
		var b = qu.ya();
		b.L(a.A);
		a.Aga && b.G()
	}
}
F.setTime = function(a) {
	this.A[a] != m && f(Error("Field " + a + " is already set."));
	this.A[a] = ym();
	efb(this, a)
};
F.PE = function(a, b) {
	this.A[a] != m || (this.A[a] = 0);
	this.A[a] += b;
	efb(this, a)
};
km._getTimingInstance = kF.ya;

function lF(a, b, c, d, e, g, h) {
	this.C = a;
	this.Y = b;
	this.L = c;
	this.F = d;
	this.K = e;
	this.G = g;
	this.A = h;
	this.W = 0 > e || (!this.C ? q : (new iC(this.C)).Ht())
}
lF.prototype.getSelection = C(Zc);

function mF(a, b, c) {
	this.A = a;
	this.F = b;
	this.C = c || 0
}
mF.prototype.se = function() {
	return this.A.G
};
mF.prototype.na = jm(160);

function nF() {
	this.A = []
}
L(nF, M);
nF.prototype.C = q;

function ffb(a, b, c) {
	c && (a.A = [], a.C = l);
	a.A.push(b)
}
function gfb(a, b) {
	for (var c = 0; c < a.A.length; ++c) ffb(b, a.A[c], a.C), a.C = q;
	a.A = []
}
nF.prototype.jc = function() {
	return 0 == this.A.length
};
nF.prototype.O = function() {
	nF.M.O.call(this);
	delete this.A
};

function oF(a, b, c, d) {
	nr.call(this, a, b, c);
	this.ea = d;
	this.A = new nF
}
L(oF, nr);
F = oF.prototype;
F.KE = q;
F.lr = q;
F.Cx = function() {
	return oF.M.Cx.call(this) || !this.A.jc()
};
F.XL = function(a) {
	oF.M.XL.call(this, a);
	a.A = new nF;
	gfb(this.A, a.A);
	a.ea = this.ea;
	a.KE = this.KE;
	if (a.lr = this.lr) this.KE = q;
	this.lr = q
};
F.OB = function() {
	return this.A.jc() && !this.lr ? oF.M.OB.call(this) : this.aa()
};
F.O = function() {
	delete this.ea;
	this.A.dispose();
	delete this.A;
	oF.M.O.call(this)
};

function hfb(a, b, c) {
	this.C = a;
	this.W = b;
	this.K = c
}
L(hfb, bq);

function ifb(a, b, c) {
	hfb.call(this, a, b, c)
}
L(ifb, hfb);

function jfb(a, b, c) {
	this.C = a;
	this.F = b;
	this.A = c
};

function pF(a, b, c) {
	Am.call(this, xla + b);
	this.type = a;
	this.kp = c || m
}
L(pF, Am);

function kfb(a) {
	this.ra = a
}
var lfb = km.IDBKeyRange || km.webkitIDBKeyRange,
	qF = $q && cr(21),
	mfb = qF ? kMa : 0,
	nfb = qF ? "readwrite" : 1,
	ofb = qF ? ij : 0,
	pfb = qF ? "nextunique" : 1,
	qfb = qF ? Kj : 2;

function rF(a, b, c, d, e, g) {
	var h = a;
	d && (h = a.index(d));
	a = I(b) ? !I(c) || b == c ? lfb.only(b) : lfb.bound(b, c) : m;
	e = e ? qfb : ofb;
	return g ? h.openKeyCursor(a, e) : h.openCursor(a, e)
}
function sF(a, b, c, d, e) {
	c = !I(d) || c == d ? lfb.only(c) : lfb.bound(c, d);
	a = a[le](c);
	e && (a.onsuccess = e);
	a.onerror = b
}

function tF(a, b, c, d, e, g, h, n, p) {
	b = uF(b, c);
	h = rF(b, h, n, p, k, k);
	var t = [],
		u = 0,
		x = e ? ju(a.ra, e, a) : G;
	h.onsuccess = ju(a.ra, function(a) {
		if (a = a.target.result) {
			var b = I(a.value) ? a.value : a.key;
			u++;
			(b = d(b)) && t.push(b);
			a[Xd]()
		} else x(t)
	}, a);
	g && (h.onerror = ju(a.ra, g, a))
}
function vF(a, b) {
	return function(c) {
		var d = c.target.error;
		b(new pF(0, a + iaa + ((d && d.name) + s + c.target.errorCode + ob + (c.target.internalAbort ? Dka : r) + c.target.webkitErrorMessage) + Ia, c))
	}
};

function rfb(a, b, c, d, e, g, h, n) {
	this.ra = d;
	this.Aa = a;
	this.Y = b;
	this.C = !! e;
	this.A = m;
	this.W = c;
	this.K = m;
	this.L = q;
	this.ab = new cq(g || 6E4);
	this.ea = h || m;
	this.R = new S(this);
	this.R.A(this.ab, al, this.vta);
	this.G = qu.ya();
	this.F = m;
	this.cb = sfb++;
	this.na = n || (this.C ? CEa : BEa)
}
var sfb = 0;
F = rfb.prototype;
F.open = function() {
	this.F = tu(this.G, this.na);
	var a = this.C ? nfb : mfb;
	this.ab.start();
	a = this.Aa.transaction(this.Y, a);
	a.onabort = ju(this.ra, this.bIa, this);
	a.oncomplete = ju(this.ra, this.cIa, this);
	a.onerror = ju(this.ra, this.aIa, this);
	this.K = a
};
F.abort = function() {
	tfb(this);
	this.L = l;
	this.K.abort();
	this.ab.dispose()
};

function uF(a, b) {
	tfb(a);
	return a.K.objectStore(b)
}
function wF(a, b) {
	a.A && f(Error("Completion callback already set"));
	a.A = b
}
function tfb(a) {
	a.K || f(Error("Transaction does not exist"))
}
F.bIa = function(a) {
	var b = this.G,
		c = this.F;
	b.C[c] && delete b.C[c];
	this.ab.dispose();
	this.L || (a.target.internalAbort = l, !this.C && a.target.error && a.target.error.name == Kna ? this.A && this.A() : this.W(a))
};
F.cIa = function() {
	uu(this.G, this.F);
	this.ab.dispose();
	this.A && this.A()
};
F.aIa = function(a) {
	var b = this.G,
		c = this.F;
	b.C[c] && delete b.C[c];
	this.ab.dispose();
	this.W(a)
};
F.vta = function() {
	var a = this.ab.A;
	this.ab.dispose();
	var b = this.ra,
		a = {
			transactionAllowWrite: this.C,
			transactionId: this.cb,
			transactionObjectStores: this.Y.toString(),
			transactionTimeout: a
		};
	b.ra && b.ra.ju(Error(Vda), j9a(Rg, a));
	this.ea && (this.abort(), this.ea())
};

function ufb(a, b) {
	R.call(this, lc, b);
	this.newVersion = a
}
L(ufb, R);

function xF(a) {
	this.ra = a;
	this.A = m
}
L(xF, bq);
xF.prototype.C = function(a) {
	this.close();
	this.dispatchEvent(new ufb(Number(a.version) || a.newVersion || 0))
};
xF.prototype.close = function() {
	this.A && (this.A.onversionchange = m, this.A.close(), this.A = m)
};
xF.prototype.vb = function(a) {
	this.A && f(Error("IdbDocsDatabase already managing a database."));
	a.onversionchange != m && f(Error("This database is being managed by another class."));
	this.A = a;
	a.onversionchange = K(this.C, this)
};

function yF(a) {
	a = parseInt(a.A.version, 10);
	return 0 <= a ? a : -1
}
function vfb(a, b, c, d, e) {
	a.A.setVersion || f(Error("IDBDatabase#setVersion is not supported by this browser."));
	a = a.A.setVersion(String(b));
	a.onsuccess = function(a) {
		a = a.target.result;
		a.oncomplete = e;
		c(a)
	};
	a.onerror = d
}
function wfb(a, b, c, d, e, g, h) {
	a.A || f(Error("Cannot open transaction on uninitialized IdbDocsDatabase"));
	a = new rfb(a.A, b, c, a.ra, d, e, g, h);
	a.open();
	return a
}
xF.prototype.O = function() {
	this.close();
	xF.M.O.call(this)
};
var xfb = km.indexedDB || km.webkitIndexedDB,
	zF = m;

function yfb(a, b, c, d) {
	function e() {
		g = l
	}
	zF && zF.A && f(Error("Only a single connection should be opened to the docs idb database."));
	var g = q;
	eq(function() {
		if (!g) {
			var a = zF;
			c.log(Error(Ima + (a ? yF(a) : zl)))
		}
	}, 6E4);
	var h = xfb.open(vja);
	h.onsuccess = function(d) {
		g = l;
		d = d.target.result;
		d.onerror = vF(tha, b);
		zF === m && (zF = new xF(c));
		zF.vb(d);
		a(zF)
	};
	h.onerror = function(a) {
		g = l;
		vF(oia, d || b)(a)
	};
	h.onblocked = e;
	h.onupgradeneeded = e
}

function zfb(a, b, c, d, e) {
	var g = zF;
	g || f(Error("Setting version " + a + " with no database present"));
	yF(g) >= a && f(Error("Upgrading to a version (" + a + ") less than or equal to current version (" + yF(g) + Ia));
	if (NUa()) {
		var h = g.A.name;
		g.close();
		var n = xfb.open(h, a);
		n.onupgradeneeded = function() {
			var a = n.transaction;
			a.onabort = a.onerror = c;
			b(a)
		};
		n.onerror = c;
		n.onblocked = function(a) {
			e.log(Error(Vma), {
				"Old version": a.oldVersion,
				"New version": a.newVersion,
				"Deprecated version field": a.version
			})
		};
		n.onsuccess = function(a) {
			var b = a.target.result;
			b.onerror = c;
			g.vb(b);
			d(a)
		}
	} else vfb(g, a, b, c, d)
};

function Afb(a, b, c, d) {
	this.A = a;
	this.C = b;
	this.F = c;
	this.G = d;
	this.R = new S(this);
	this.R.A(c, lc, this.wza)
}
L(Afb, M);
F = Afb.prototype;
F.Lx = m;
F.Zla = q;
F.wza = function() {
	this.Zla = l;
	Bfb(this)
};

function Cfb(a, b, c, d, e, g, h, n) {
	if (a.Zla) d(new pF(2, Dla));
	else {
		var p = h;
		p || (p = oq(wm(c, 4)), p = wfb(a.F, [Oha], vF(Ela, K(a.MPa, a, d)), l, e, e ? p : k, g), wF(p, oq(wm(c, 1))));
		e = uF(p, Oha);
		g = e.get([b]);
		c = K(a.LPa, a, b, c, !! h, p);
		d = K(a.KPa, a, p, d);
		g.onsuccess = K(a.JPa, a, b, c, d, e, !! n);
		g.onerror = vF(tja, d)
	}
}
F.KPa = function(a, b, c) {
	a.L ? c.kp.stopPropagation() : (Dfb(this), a.abort(), b(c))
};

function Bfb(a) {
	Dfb(a);
	var b = window.localStorage;
	b && b.setItem(Kua + a.A, String(ym()))
}
F.LPa = function(a, b, c, d, e) {
	this.cd() || (1 == e ? (!this.Lx && 0 != this.C && (this.Lx = new cq(Math.max(this.C - 5E3, 0)), this.R.A(this.Lx, al, K(this.bFa, this, a)), this.Lx.start()), c && b(e)) : (Dfb(this), d.abort(), b(e)))
};
F.bFa = function(a) {
	var b = this.G;
	Cfb(this, a, function(a) {
		1 != a && b(new pF(1, Cla))
	}, b)
};
F.MPa = function(a, b) {
	Dfb(this);
	a(b)
};

function Dfb(a) {
	O(a.Lx);
	a.Lx = m
}
F.JPa = function(a, b, c, d, e, g) {
	if (!this.cd()) {
		g = g.target.result;
		var h;
		if (!(h = !g)) g = new Efb(g.e, g.dlKey[0], g.sId), h = this.A, e ? g.C <= ym() || g.A == h ? h = l : (e = window.localStorage, h = !! e && !! e.getItem(Kua + g.A)) : h = g.A == h;
		h ? (b = wm(b, 1), e = ym() + this.C, a = d.put((new Efb(e, a, this.A)).Pa()), a.onsuccess = b, a.onerror = vF(Ala, c)) : b(2)
	}
};
F.O = function() {
	delete this.F;
	O(this.R);
	delete this.R;
	O(this.Lx);
	delete this.Lx;
	Afb.M.O.call(this)
};

function Efb(a, b, c) {
	this.C = a;
	this.G = b;
	this.A = c
}
Efb.prototype.Pa = function() {
	var a = {};
	a.e = this.C;
	a.dlKey = [this.G];
	a.sId = this.A;
	return a
};

function Ffb(a, b, c, d) {
	ir.call(this, 5, d);
	this.setProperty(oe, a);
	this.setProperty(zEa, b);
	this.setProperty(yEa, c)
}
L(Ffb, ir);

function AF(a, b, c, d, e, g) {
	ir.call(this, 6, c);
	this.Y = d;
	this.F = e.concat();
	this.W = g.concat();
	this.setProperty(ova, a);
	this.setProperty(EBa, b);
	this.setProperty(CMa, -1);
	lr(this, zPa, q)
}
L(AF, ir);
var BF = {
	oda: 1,
	kA: 2,
	$Ba: 3,
	aCa: 4,
	bCa: 5,
	NONE: 6,
	REPLACE: 7
};
F = AF.prototype;
F.Mx = 6;
F.vu = m;
F.eB = m;
F.AK = m;
F.zK = m;

function CF(a) {
	return a.Nb(ova)
}
function Gfb(a) {
	return jr(a, zPa) == m ? q : a.Nb(zPa) != r
}
function Hfb(a, b) {
	lr(a, zPa, b)
}
function Ifb(a, b) {
	a.setProperty(CMa, b)
}
F.se = function() {
	return this.Nb(CMa)
};
F.xa = function() {
	return this.Nb(EBa)
};
F.jc = function() {
	return 0 == this.W.length && 0 == this.F.length
};
F.clear = function() {
	Hfb(this, q);
	DF(this, 2);
	this.F = [];
	this.W = []
};
F.replace = function(a, b) {
	DF(this, 7);
	this.eB = a.concat();
	this.vu = 0 < b.length ? b.concat() : m;
	this.F = a.concat();
	this.W = b.concat()
};

function DF(a, b) {
	6 != a.Mx && f(Error("Multiple pending queue operations between writes."));
	a.Mx = b
}
F.Cx = function() {
	return 6 != this.Mx || AF.M.Cx.call(this)
};
F.XL = function(a) {
	AF.M.XL.call(this, a);
	a.Y = this.Y;
	this.vu && this.vu.length && this.Y++;
	this.eB && (this.Y += this.eB.length);
	a.Mx = this.Mx;
	this.Mx = 6;
	a.vu = this.vu;
	this.vu = m;
	a.eB = this.eB;
	this.eB = m;
	a.AK = this.AK;
	this.AK = m;
	a.zK = this.zK;
	this.zK = m;
	a.F = m;
	a.W = m
};
F.OB = function() {
	return CF(this)
};

function Jfb(a, b) {
	R.call(this, rc, b);
	this.newVersion = a
}
L(Jfb, R);

function Kfb() {}
L(Kfb, bq);

function EF(a, b) {
	ir.call(this, 9, b);
	this.setProperty(Lg, a);
	lr(this, JCa, l)
}
L(EF, ir);
EF.prototype.aa = function() {
	return this.Nb(Lg)
};

function FF(a, b, c, d, e) {
	this.ra = e;
	this.R = new S(this);
	this.C = new kfb(e);
	this.F = a;
	this.R.A(this.F, lc, this.Mya);
	this.A = b;
	this.G = new Afb(c, d, a, b)
}
L(FF, Kfb);
F = FF.prototype;
F.UK = q;

function GF(a, b, c, d, e) {
	return wfb(a.F, b, HF(a, c, d), e)
}
F.Mya = function(a) {
	this.UK = l;
	this.dispatchEvent(new Jfb(a.newVersion))
};

function Lfb(a, b, c, d, e) {
	if (a.UK) eq(wm(c, []));
	else {
		var g = GF(a, [Xb, Tb, Ub], uia, e);
		e = HF(a, uia, e);
		var h = uF(g, Tb),
			h = rF(h, b ? [b] : k, b ? [b, []] : k);
		h.onsuccess = K(a.BVa, a, m, b, c, d, g, e, {});
		h.onerror = e
	}
}
F.BVa = function(a, b, c, d, e, g, h, n) {
	(n = n.target.result) ? (h[n.value.dcmKey[0]] = l, n[Xd]()) : (n = uF(e, Ub), n = rF(n, b ? [b] : k, b ? [b, []] : k), n.onsuccess = K(this.dXa, this, a, b, c, d, e, g, {}, h), n.onerror = g)
};
F.dXa = function(a, b, c, d, e, g, h, n, p) {
	(p = p.target.result) ? (a = p.value.dcmKey[0], n[a] || (h[a] = l), p[Xd]()) : tF(this.C, e, Xb, K(this.aPa, this, a, d, h), c, g, b || k)
};
F.aPa = function(a, b, c, d) {
	if (c[d.id]) return m;
	a = this.VM(a, d);
	if (!a) return m;
	a.L = q;
	(b = b[a.xa()]) ? (b = new oF(a.aa(), b.C, q, b), b.C = {}, b.G = a.G, b.L = q) : b = a;
	return b
};
F.write = function(a, b, c, d) {
	if (this.UK) eq(c);
	else {
		for (var e = new Xr, g = 0; g < a.length; g++) {
			var h = a[g].OB();
			h && e.add(h)
		}
		h = {};
		for (g = 0; g < a.length; g++) for (var n = this.PB(a[g]), p = 0; p < n.length; p++) h[n[p]] = l;
		0 < e.Dd() && (h.DocumentLocks = l);
		h = GF(this, Pn(h), Aia, d, l);
		n = [];
		wF(h, K(this.HJa, this, c, n));
		mRa(1 >= e.Dd());
		c = e.zc();
		for (var t = d || this.A, g = 0; g < c.length; g++) Cfb(this.G, c[g], function(a) {
			1 != a && t(new pF(1, Bla))
		}, t, k, k, h);
		for (g = 0; g < a.length; ++g) this.fB(a[g], h, b, n)
	}
};
F.fB = function(a, b, c, d) {
	if (a instanceof EF) c = uF(b, Uc), a.Ek && f(Error("User deletion is not implemented.")), a.K ? c.add(a.C) : (d = a.aa(), rF(c, d).onsuccess = K(this.R0, this, a, []));
	else if (a instanceof nr) c = c[a.xa()], a.xa(), a.Ek ? this.yB(a, b, d) : (d = uF(b, Xb), a.K ? d.add(a.C) : this.aea(a, d), a.A.C ? (d = K(c.bea, c, a, b), b = a.KE ? uF(b, Vb) : uF(b, Sb), a = a.aa(), sF(b, c.Ft, [a], [a, []], d)) : c.bea(a, b));
	else if (a instanceof AF) Mfb(this, a, b, c);
	else if (a instanceof Ffb) if (c = uF(b, Sja), a.Ek) c[le]([a.Nb(oe), a.Nb(zEa)]);
	else a.K ? (d = {}, d.iKey = [a.Nb(oe), a.Nb(zEa)], d.iba = FUa(a, yEa), c.put(d)) : f(Error("Impressions may not be updated"));
	else f(Error("Attempted to write unsupported record type."))
};
F.HJa = function(a, b) {
	for (var c = 0; c < b.length; c++) this.dispatchEvent(b[c]);
	a()
};

function Mfb(a, b, c, d) {
	var e = Nfb(d, b.xa());
	b.Ek ? Ofb(a, CF(b), c) : b.K ? Pfb(a, b, Qfb(b), e, c) : Rfb(b) ? uF(c, Fc).get(CF(b)).onsuccess = function(d) {
		(d = d.target.result) || f(Error("Tried to update a non-existant pending queue."));
		var h = b.C;
		h.revision && (d.r = b.se());
		I(h.undeliverable) && (d.u = Gfb(b));
		Pfb(a, b, d, e, c)
	} : Pfb(a, b, m, e, c)
}
function Qfb(a) {
	var b = {};
	b.docId = CF(a);
	b.r = a.se();
	b.b = [];
	b.t = a.xa();
	b.u = Gfb(a);
	return b
}
function Rfb(a) {
	if (0 < Nn(a.C)) return l;
	a = a.Mx;
	return a != BF.oda && a != BF.NONE
}

function Pfb(a, b, c, d, e) {
	var g = uF(e, Ec),
		h = b.Mx;
	if (h == BF.REPLACE) {
		for (var h = b.Y, n = b.eB, p = [], t = 0; t < n.length; t++) h++, Sfb(a, b, n[t].C, h, g, d, l), p.push(Tfb(n[t].A, n[t].F, h));
		c.b = p;
		Sfb(a, b, b.vu, h + 1, g, d);
		0 <= b.Y && sF(g, HF(a, hLa), [CF(b)], [CF(b), b.Y])
	} else h == BF.oda ? Sfb(a, b, b.vu, b.Y + 1, g, d) : h == BF.bCa ? c.b.push(Tfb(b.AK, b.zK, b.Y)) : h == BF.kA ? (sF(g, HF(a, Zta), [CF(b)], [CF(b), []]), c.b = []) : h == BF.$Ba ? (d = c.b, 0 < d.length && (d = d[d.length - 1].l, sF(g, HF(a, Yta), [CF(b)], [CF(b), d]), c.b = [])) : h == BF.aCa ? (d = c.b.shift().l, sF(g, HF(a, Xta), [CF(b)], [CF(b), d])) : h != BF.NONE && f(Error("Unknown operation: " + h));
	c && (uF(e, Fc).put(c).onerror = HF(a, kQa))
}
function Sfb(a, b, c, d, e, g, h) {
	if (h || c && 0 != c.length) {
		h = [];
		for (var n = 0; n < c.length; n++) h.push(g.A.Pa(c[n]));
		e.put(Ufb(b, h, d)).onerror = HF(a, lQa)
	}
}
function Tfb(a, b, c) {
	var d = {};
	d.l = c;
	d.s = a;
	d.r = b;
	return d
}
function Ufb(a, b, c) {
	var d = {};
	d.pqcKey = [CF(a), c];
	d.c = b;
	return d
}
F.yB = function(a, b) {
	var c = a.aa(),
		d = uF(b, Sb);
	sF(d, HF(this, Vua), [c], [c, []]);
	d = uF(b, Vb);
	sF(d, HF(this, Yua), [c], [c, []]);
	d = uF(b, Tb);
	sF(d, HF(this, Wua), [c], [c, []]);
	d = uF(b, Ub);
	sF(d, HF(this, Xua), [c], [c, []]);
	Ofb(this, c, b);
	d = uF(b, Xb);
	sF(d, HF(this, Uua), c)
};

function Ofb(a, b, c) {
	var d = uF(c, Ec);
	sF(d, HF(a, bva), [b], [b, []]);
	c = uF(c, Fc);
	sF(c, HF(a, ava), b)
}
function Vfb(a, b, c, d, e) {
	var g = GF(a, [Fc, Ec], via, e),
		h = uF(g, Fc).get(b);
	h.onerror = HF(a, hMa, e);
	h.onsuccess = function(h) {
		(h = h.target.result) ? Wfb(a, b, g, h, c, d, e) : c(m)
	}
}

function Wfb(a, b, c, d, e, g, h) {
	c = uF(c, Ec);
	var n = Nfb(g, d.t),
		p = [];
	b = rF(c, [b], [b, []]);
	b.onerror = HF(a, iMa, h);
	b.onsuccess = function(a) {
		if (a = a.target.result) p.push(a.value), a[Xd]();
		else {
			a = d.b;
			for (var b = 0, c = [], g = [], h = -1, E = 0; E < p.length; E++) if (h = p[E], sn(c, Xfb(n, h.c)), h = h.pqcKey[1], b < a.length) {
				var H = a[b];
				H.l == h && (g.push(new jfb(c, H.r, H.s)), c = [], b++)
			}
			a = new AF(d.docId, d.t, q, h, g, c);
			Ifb(a, d.r);
			Hfb(a, !! d.u);
			a.L = q;
			e(a)
		}
	}
}
F.vb = function(a, b) {
	var c = this.Lq();
	yF(this.F) >= c && f(Error("Database already at expected version."));
	zfb(c, K(this.EHa, this, b || this.A), HF(this, nia, b), a, this.ra)
};
F.PB = function(a) {
	if (a instanceof EF) return [Uc];
	if (a instanceof nr) {
		var b = [Sb, Vb, Tb, Ub, Xb];
		a.Ek && (b = b.concat([Ec, Fc]));
		return b
	}
	if (a instanceof AF) return [Ec, Fc];
	if (a instanceof Ffb) return [Sja];
	f(Error("No object store for unknown record type"))
};
F.EHa = function(a, b) {
	try {
		this.PC(b)
	} catch (c) {
		eq(wm(a, new pF(0, Iia, c)))
	}
};
F.R0 = function(a, b, c) {
	if (c = c.target.result) {
		var d = c.value,
			e = a.C,
			g;
		for (g in e) d[g] = hn(b, g) ? jr(a, g) : a.Nb(g);
		c.update(d)
	} else f(Error(gga))
};

function Nfb(a, b) {
	var c = a[b];
	c || f(Error("No document adapter available for type " + b));
	return c
}
function HF(a, b, c) {
	return vF(b, c || a.A)
}
F.sR = nq("readComments not supported.");
F.Oaa = function(a) {
	a([])
};
F.gfa = function(a, b) {
	b([])
};
F.uQ = jm(36);
F.Ima = function(a, b) {
	b()
};
F.oia = function(a, b) {
	b()
};
F.Hma = function(a, b) {
	b()
};
F.O = function() {
	ko(this.R, this.G);
	FF.M.O.call(this)
};

function Yfb(a, b, c, d, e) {
	FF.call(this, a, b, c, d, e)
}
L(Yfb, FF);
xn([Uc, Xb, Sb, Vb, Tb, Ub, Oha, Sja, Fc, Ec, Wia]);
F = Yfb.prototype;
F.Lq = D(3);
F.LU = D(q);
F.PC = function(a) {
	a = a.db;
	a.createObjectStore(Uc, {
		keyPath: Lg
	});
	a.createObjectStore(Xb, {
		keyPath: Lg
	});
	a.createObjectStore(Sb, {
		keyPath: Iua
	});
	a.createObjectStore(Vb, {
		keyPath: Iua
	});
	a.createObjectStore(Tb, {
		keyPath: Lua
	});
	a.createObjectStore(Ub, {
		keyPath: Lua
	});
	a.createObjectStore(Oha, {
		keyPath: nva
	});
	a.createObjectStore(Sja, {
		keyPath: pEa
	});
	a.createObjectStore(Fc, {
		keyPath: ova
	});
	a.createObjectStore(Ec, {
		keyPath: BLa
	});
	a.createObjectStore(Wia, {
		keyPath: Lg
	}).createIndex(Kha, pva)
};
F.VM = function(a, b) {
	if (a != m && !I(b.acl[a])) return m;
	var c = new nr(b.id, b.documentType, q);
	c.setTitle(b.title);
	c.setProperty(cJa, b.lastSyncedTimestamp);
	c.setProperty(ch, b.jobset);
	lr(c, WEa, !! b.isFastTrack);
	JUa(c, b.lastModifiedServerTimestamp);
	c.setProperty($Ia, b.lastColdStartedTimestamp);
	c.setProperty(dJa, b.lastWarmStartedTimestamp);
	var d = b.acl,
		e;
	for (e in d) mr(c, fsa, e, d[e]);
	return c
};
F.aea = function(a, b) {
	var c = a.aa();
	rF(b, c).onsuccess = K(this.R0, this, a, [])
};

function IF(a) {
	this.A = a
}
L(IF, M);
var Zfb = [
	[]
];
IF.prototype.se = function() {
	return this.A.dcKey[2]
};
IF.prototype.O = function() {
	delete this.A;
	IF.M.O.call(this)
};

function JF(a, b, c, d, e, g, h) {
	hfb.call(this, a, b, c);
	this.A = d;
	this.L = new kfb(e);
	this.Ft = h ? vF(Lja, h) : G;
	this.F = g;
	this.G = kF.ya()
}
L(JF, ifb);
F = JF.prototype;
F.R2 = m;
F.bea = function(a, b) {
	var c = uF(b, Sb),
		d = a.KE ? uF(b, Vb) : c,
		e = a.A,
		g = e.A;
	e.A = [];
	e.C = q;
	for (e = 0; e < g.length; ++e) {
		var h = d,
			n = a,
			p = g[e],
			t, u = p.A.C;
		u || f(Error("Local storage command batch contained no commands."));
		t = u;
		for (var u = [], x = 0; x < t.length; ++x) u.push(this.A.Pa(t[x]));
		n = n.aa();
		t = p.se();
		var x = p.A.L,
			y = {};
		y.dcKey = [n, p.F, t, p.C];
		y.t = x;
		u && (y.c = u);
		p = new IF(y);
		h.put(p.A)
	}
	a.lr && (d = a.aa(), g = K(this.sAa, this, b, a), sF(c, this.Ft, [d], [d, []], g))
};
F.sAa = function(a, b) {
	var c = uF(a, Sb),
		d = uF(a, Vb),
		e = b.aa(),
		d = rF(d, [e], [e, []]);
	d.onsuccess = K(this.ORa, this, c);
	d.onerror = this.Ft
};
F.ORa = function(a, b) {
	var c = b.target.result;
	c && (a.put(c.value).onerror = this.Ft, c[le](), c[Xd]())
};
F.Swa = function(a, b) {
	var c = b.target,
		d = c.result;
	if (!c[Fza]) if (d) {
		var e = new IF(d.value);
		c[Fza] = l;
		d[Xd](d.direction == ofb || d.direction == pfb ? Zfb : -1);
		a(e.se())
	} else a(0)
};
F.Twa = function(a, b, c, d, e, g) {
	d(g);
	this.R2 = ym();
	a = $fb(a.aa(), c, k, b);
	a.onsuccess = K(this.NRa, this, e);
	a.onerror = this.Ft
};
F.NRa = function(a, b) {
	var c = b.target.result;
	if (c) {
		var d = new IF(c.value),
			e = d.A.c || m,
			g = ym() - this.R2;
		this.G.PE(YJa, g);
		e = Xfb(this, e);
		d = d.se();
		a(new jF(e), d);
		c[Xd]();
		this.R2 = ym()
	}
};

function $fb(a, b, c, d) {
	return rF(b, d != m ? [a, d] : [a], d != m ? [a, d, []] : [a, []], k, c)
}
function Xfb(a, b) {
	var c = ym(),
		d = z9a(a.A, b),
		c = ym() - c;
	a.G.PE(PJa, c);
	return d
}
F.O = function() {
	delete this.Ft;
	delete this.A;
	delete this.F;
	delete this.L;
	JF.M.O.call(this)
};

function agb(a, b, c, d) {
	function e(a) {
		d(a.message)
	}
	var g = new JF(jh, 3, 6, a, b, c, e),
		h = new JF(Rj, 4, 6, a, b, c, e),
		n = new JF(FMa, 4, 6, a, b, c, e);
	a = new JF(Bf, 4, 6, a, b, c, e);
	return [n, g, h, a]
};

function bgb(a) {
	this.A = !a;
	this.C = []
}
mm(bgb);
F = bgb.prototype;
F.Hr = m;
F.$h = function() {
	return this.Hr != m
};

function cgb(a) {
	if (a.Hr != m && a.A) for (; 0 < a.C.length;) a.C.shift()()
}
F.mL = function(a, b, c) {
	this.Hr != m && this.A ? this.Hr.mL(a, b, c) : this.C.push(K(this.mL, this, a, b, c))
};
F.sL = function(a, b, c, d) {
	this.Hr != m && this.A ? this.Hr.sL(a, b, c, d) : this.C.push(K(this.sL, this, a, b, c, d))
};
F.JL = function(a, b, c) {
	this.Hr != m && this.A ? this.Hr.JL(a, b, c) : this.C.push(K(this.JL, this, a, b, c))
};

function dgb(a) {
	this.A = (a || window).applicationCache;
	this.R = new S(this);
	a = egb;
	this.R.A(this.A, a.CHECKING, this.ELa).A(this.A, a.$B, this.CLa).A(this.A, a.Tia, this.GLa).A(this.A, a.DOWNLOADING, this.FLa).A(this.A, a.Uia, this.ILa).A(this.A, a.Via, this.JLa).A(this.A, a.Sia, this.DLa).A(this.A, a.OBSOLETE, this.HLa).A(this.A, [a.CHECKING, a.$B, a.Tia, a.DOWNLOADING, a.Uia, a.Via, a.Sia, a.OBSOLETE], this.Wia)
}
L(dgb, bq);
var egb = {
	CHECKING: "checking",
	$B: Xf,
	Tia: "noupdate",
	DOWNLOADING: "downloading",
	Uia: Lj,
	Via: "updateready",
	Sia: "cached",
	OBSOLETE: "obsolete"
};
F = dgb.prototype;
F.ELa = hm();
F.GLa = hm();
F.FLa = hm();
F.ILa = hm();
F.JLa = hm();
F.DLa = hm();
F.HLa = hm();
F.CLa = function() {
	this.Wia()
};
F.Wia = function() {
	(this.A.status == this.A.UNCACHED || this.A.status == this.A.IDLE || this.A.status == this.A.UPDATEREADY || this.A.status == this.A.OBSOLETE) && this.dispatchEvent(vc)
};
F.O = function() {
	O(this.R);
	dgb.M.O.call(this)
};

function fgb(a) {
	this.Ub = a
}
var ggb = /\s*;\s*/;
F = fgb.prototype;
F.isEnabled = function() {
	return navigator.cookieEnabled
};
F.set = function(a, b, c, d, e, g) {
	/[;=\s]/.test(a) && f(Error('Invalid cookie name "' + a + sa));
	/[;\r\n]/.test(b) && f(Error('Invalid cookie value "' + b + sa));
	I(c) || (c = -1);
	e = e ? mda + e : r;
	d = d ? rda + d : r;
	g = g ? sda : r;
	c = 0 > c ? r : 0 == c ? nda + (new Date(1970, 1, 1)).toUTCString() : nda + (new Date(ym() + 1E3 * c)).toUTCString();
	this.Ub.cookie = a + zb + b + e + d + c + g
};
F.get = function(a, b) {
	for (var c = a + zb, d = (this.Ub.cookie || r).split(ggb), e = 0, g; g = d[e]; e++) {
		if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
		if (g == a) return r
	}
	return b
};
F.remove = function(a, b, c) {
	var d = I(this.get(a));
	this.set(a, r, 0, b, c);
	return d
};
F.dd = function() {
	return hgb(this).keys
};
F.zc = function() {
	return hgb(this).dpa
};
F.jc = function() {
	return !this.Ub.cookie
};
F.Dd = function() {
	return !this.Ub.cookie ? 0 : (this.Ub.cookie || r).split(ggb).length
};
F.kz = function(a) {
	for (var b = hgb(this).dpa, c = 0; c < b.length; c++) if (b[c] == a) return l;
	return q
};
F.clear = function() {
	for (var a = hgb(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
};

function hgb(a) {
	a = (a.Ub.cookie || r).split(ggb);
	for (var b = [], c = [], d, e, g = 0; e = a[g]; g++) d = e.indexOf(zb), -1 == d ? (b.push(r), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
	return {
		keys: b,
		dpa: c
	}
}
var igb = new fgb(document);
igb.A = 3950;

function KF(a, b) {
	var c;
	if (a instanceof KF) this.eC = I(b) ? b : a.eC, LF(this, a.By), this.dC = a.dC, MF(this, a.mv), NF(this, a.Hq), OF(this, a.Lo), PF(this, a.A.La()), QF(this, a.UM);
	else if (a && (c = Ev(String(a)))) {
		this.eC = !! b;
		LF(this, c[1] || r, l);
		var d = c[2] || r;
		this.dC = d ? decodeURIComponent(d) : r;
		MF(this, c[3] || r, l);
		NF(this, c[4]);
		OF(this, c[5] || r, l);
		PF(this, c[6] || r, l);
		QF(this, c[7] || r, l)
	} else this.eC = !! b, this.A = new RF(m, 0, this.eC)
}
F = KF.prototype;
F.By = r;
F.dC = r;
F.mv = r;
F.Hq = m;
F.Lo = r;
F.UM = r;
F.eC = q;
F.toString = function() {
	var a = [],
		b = this.By;
	b && a.push(SF(b, jgb), nb);
	if (b = this.mv) {
		a.push(Ta);
		var c = this.dC;
		c && a.push(SF(c, jgb), Db);
		a.push(Im(b));
		b = this.Hq;
		b != m && a.push(nb, String(b))
	}
	if (b = this.Lo) this.mv && b.charAt(0) != Sa && a.push(Sa), a.push(SF(b, b.charAt(0) == Sa ? kgb : lgb));
	(b = this.A.toString()) && a.push(Cb, b);
	(b = this.UM) && a.push(va, SF(b, mgb));
	return a.join(r)
};
F.wk = jm(13);
F.La = function() {
	return new KF(this)
};

function LF(a, b, c) {
	a.By = c ? b ? decodeURIComponent(b) : r : b;
	a.By && (a.By = a.By.replace(/:$/, r))
}

function MF(a, b, c) {
	a.mv = c ? b ? decodeURIComponent(b) : r : b
}
function NF(a, b) {
	b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Hq = b) : a.Hq = m
}
function OF(a, b, c) {
	a.Lo = c ? b ? decodeURIComponent(b) : r : b;
	return a
}
function PF(a, b, c) {
	b instanceof RF ? (a.A = b, ngb(a.A, a.eC)) : (c || (b = SF(b, ogb)), a.A = new RF(b, 0, a.eC));
	return a
}
function TF(a, b, c) {
	a.A.set(b, c);
	return a
}
function QF(a, b, c) {
	a.UM = c ? b ? decodeURIComponent(b) : r : b;
	return a
}
function SF(a, b) {
	return qm(a) ? encodeURI(a).replace(b, pgb) : m
}

function pgb(a) {
	a = a.charCodeAt(0);
	return Aa + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var jgb = /[#\/\?@]/g,
	lgb = /[\#\?:]/g,
	kgb = /[\#\?]/g,
	ogb = /[\#\?@]/g,
	mgb = /#/g;

function RF(a, b, c) {
	this.A = a || m;
	this.C = !! c
}
function UF(a) {
	if (!a.Rg && (a.Rg = new Sr, a.Td = 0, a.A)) for (var b = a.A.split(Ba), c = 0; c < b.length; c++) {
		var d = b[c].indexOf(zb),
			e = m,
			g = m;
		0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
		e = Jm(e);
		e = VF(a, e);
		a.add(e, g ? Jm(g) : r)
	}
}
F = RF.prototype;
F.Rg = m;
F.Td = m;
F.Dd = function() {
	UF(this);
	return this.Td
};
F.add = function(a, b) {
	UF(this);
	this.A = m;
	a = VF(this, a);
	var c = this.Rg.get(a);
	c || this.Rg.set(a, c = []);
	c.push(b);
	this.Td++;
	return this
};
F.remove = function(a) {
	UF(this);
	a = VF(this, a);
	return Vr(this.Rg, a) ? (this.A = m, this.Td -= this.Rg.get(a).length, this.Rg.remove(a)) : q
};
F.clear = function() {
	this.Rg = this.A = m;
	this.Td = 0
};
F.jc = function() {
	UF(this);
	return 0 == this.Td
};

function qgb(a, b) {
	UF(a);
	b = VF(a, b);
	return Vr(a.Rg, b)
}
F.kz = function(a) {
	var b = this.zc();
	return hn(b, a)
};
F.dd = function() {
	UF(this);
	for (var a = this.Rg.zc(), b = this.Rg.dd(), c = [], d = 0; d < b.length; d++) for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
	return c
};
F.zc = function(a) {
	UF(this);
	var b = [];
	if (a) qgb(this, a) && (b = qn(b, this.Rg.get(VF(this, a))));
	else {
		a = this.Rg.zc();
		for (var c = 0; c < a.length; c++) b = qn(b, a[c])
	}
	return b
};
F.set = function(a, b) {
	UF(this);
	this.A = m;
	a = VF(this, a);
	qgb(this, a) && (this.Td -= this.Rg.get(a).length);
	this.Rg.set(a, [b]);
	this.Td++;
	return this
};
F.get = function(a, b) {
	var c = a ? this.zc(a) : [];
	return 0 < c.length ? String(c[0]) : b
};

function rgb(a, b, c) {
	a.remove(b);
	0 < c.length && (a.A = m, a.Rg.set(VF(a, b), rn(c)), a.Td += c.length)
}
F.toString = function() {
	if (this.A) return this.A;
	if (!this.Rg) return r;
	for (var a = [], b = this.Rg.dd(), c = 0; c < b.length; c++) for (var d = b[c], e = Im(d), d = this.zc(d), g = 0; g < d.length; g++) {
		var h = e;
		d[g] !== r && (h += zb + Im(d[g]));
		a.push(h)
	}
	return this.A = a.join(Ba)
};
F.La = function() {
	var a = new RF;
	a.A = this.A;
	this.Rg && (a.Rg = this.Rg.La(), a.Td = this.Td);
	return a
};

function VF(a, b) {
	var c = String(b);
	a.C && (c = c.toLowerCase());
	return c
}
function ngb(a, b) {
	b && !a.C && (UF(a), a.A = m, Rr(a.Rg, function(a, b) {
		var e = b.toLowerCase();
		b != e && (this.remove(b), rgb(this, e, a))
	}, a));
	a.C = b
}
F.tha = jm(58);

function WF(a, b, c) {
	this.url = a;
	this.A = b;
	this.C_ = c;
	this.Ut = new S(this)
}
L(WF, M);
WF.prototype.O = function() {
	O(this.Ut);
	delete this.Ut;
	WF.M.O.call(this)
};

function sgb(a, b, c, d, e) {
	WF.call(this, a, b, c);
	this.C = d || Ko();
	this.F = km.location.protocol + Ta + (e || km.location.hostname)
}
L(sgb, WF);
F = sgb.prototype;
F.Bu = m;
F.q8 = q;
F.vb = function() {
	this.Bu || (this.Bu = this.C.ha(Ng, {
		style: mva,
		src: this.url
	}), this.Ut.A(this.Bu, $i, this.A).A(km.window, $i, K(this.qFa, this)), this.C.sb().body.appendChild(this.Bu))
};
F.dg = function() {
	return !!this.Bu && !this.q8
};
F.connect = function() {
	this.postMessage({
		type: jOa,
		data: jua
	});
	this.q8 = q;
	return l
};
F.qFa = function(a) {
	var b = a.Mc || m;
	b && b.origin == this.F && b.source == this.Bu.contentWindow && this.A(a)
};
F.wla = function() {
	this.Bu && this.postMessage({
		type: jOa,
		data: kva
	});
	this.q8 = l
};
F.postMessage = function(a) {
	this.Bu && this.Bu.contentWindow.postMessage(a, this.F)
};

function tgb(a, b, c) {
	WF.call(this, a, b, c)
}
L(tgb, WF);
F = tgb.prototype;
F.Yp = m;
F.vb = G;
F.dg = function() {
	return !!this.Yp
};
F.connect = function() {
	this.Yp = new SharedWorker(this.url) || m;
	if (!this.Yp) return q;
	this.Ut.A(this.Yp, Xf, this.C_).A(this.Yp.port, $i, this.A);
	this.Yp.port.start();
	return l
};
F.wla = function() {
	this.Yp && (Bp(this.Ut), this.Yp.port.close(), this.Yp = m)
};
F.postMessage = function(a) {
	this.Yp && (qm(a) || (a = En(a)), this.Yp.port.postMessage(a))
};

function ugb(a, b, c, d, e, g) {
	g = !! g;
	a = new KF(a);
	TF(a, TKa, b);
	g && TF(a, fua, hl);
	this.F = a.toString();
	this.A = {};
	b = K(this.CCa, this);
	a = K(this.DCa, this);
	this.C = c ? new sgb(this.F || r, a, b, d, e) : new tgb(this.F, a, b);
	this.C.vb()
}
L(ugb, bq);
F = ugb.prototype;
F.$R = 3;
F.bNa = G;
F.HPa = 1;

function XF(a) {
	return !a.C.dg() || 3 == a.$R
}
function YF(a, b) {
	b != a.$R && (a.$R = b, a.dispatchEvent(Ac))
}
F.connect = function() {
	XF(this) && (this.C.connect() ? YF(this, 2) : YF(this, 3))
};
F.CCa = function() {
	YF(this, 3)
};
F.DCa = function(a) {
	if (!XF(this)) {
		a = a.Mc.data;
		a = qm(a) ? Dn(a) : a;
		if (a.type == AMa) {
			var b = a.data,
				c = b.id,
				d = Un(this.A, c);
			if (d) {
				Sn(this.A, c);
				fq(d.Kja);
				d.ZMa(b.data);
				return
			}
		}
		this.bNa(a)
	}
};

function vgb(a) {
	a.C.wla();
	wgb(a);
	YF(a, 3)
}
function wgb(a) {
	Mn(a.A, function(a) {
		fq(a.Kja);
		a.qNa(4)
	});
	yRa(a.A)
}
F.K5 = function(a, b) {
	YF(this, a);
	b(a)
};
F.qm = function(a, b, c, d, e) {
	var g = d || G;
	XF(this) ? g(1) : (this.postMessage(b), b = -1, d && e && (b = eq(K(this.tNa, this, a, g), e)), this.A[a] = {
		ZMa: c,
		qNa: g,
		Kja: b
	})
};
F.tNa = function(a, b) {
	delete this.A[a];
	b(3)
};
F.postMessage = function(a) {
	XF(this) || this.C.postMessage(a)
};
F.O = function() {
	ugb.M.O.call(this);
	vgb(this);
	delete this.A
};
nu++;
nu++;

function xgb() {}
L(xgb, bq);

function ygb(a, b, c, d) {
	this.C = new Dq(this.cba, c || 5E3, this);
	this.K = d || 3;
	this.R = new S(this);
	this.A = b || m;
	this.F = a
}
L(ygb, M);
F = ygb.prototype;
F.PA = 0;
F.EQ = q;
F.start = function() {
	this.EQ || (this.EQ = l, this.A && this.R.A(this.A, [Bc, Hc], this.eMa), zgb(this))
};

function zgb(a) {
	a.PA = 0;
	if (!a.A || a.A.A) a.F.connect(), a.C.start()
}
F.stop = function() {
	this.C.stop();
	Bp(this.R);
	this.PA = 0;
	this.EQ = q
};
F.eMa = function() {
	this.A.A ? (this.G = l, this.cba()) : this.C.stop()
};
F.cba = function() {
	var a = this.F,
		b = K(this.IPa, this);
	if (XF(a)) a.K5(3, b);
	else {
		var c = K(a.K5, a, 1, b),
			b = K(a.K5, a, 2, b),
			d;
		d = yMa + a.HPa++;
		a.qm(d, {
			type: xMa,
			data: {
				type: UNa,
				data: {},
				id: d
			}
		}, c, b, 500)
	}
};
F.IPa = function(a) {
	if (this.EQ) {
		switch (a) {
			case 1:
				this.PA = 0;
				break;
			case 2:
				this.G || this.PA >= this.K ? (this.PA = 0, vgb(this.F), zgb(this)) : this.PA++;
				break;
			case 3:
				this.PA = 0, vgb(this.F), zgb(this)
		}(!this.A || this.A.A) && this.C.start();
		this.G = q
	}
};
F.O = function() {
	this.stop();
	O(this.C);
	delete this.C;
	O(this.R);
	delete this.R;
	delete this.A;
	delete this.F;
	ygb.M.O.call(this)
};

function ZF(a, b, c, d) {
	this.K = c;
	this.R = new S(this);
	this.A = new ugb(a, b);
	this.C = new ygb(this.A, d);
	this.ab = new cq(5E3);
	this.R.A(this.ab, al, this.F).A(this.A, Ac, this.G)
}
L(ZF, M);
ZF.prototype.start = function() {
	this.C.start();
	this.G()
};
ZF.prototype.F = function() {
	this.A.postMessage({
		type: xMa,
		data: {
			type: vJa,
			data: [this.K],
			id: r
		}
	})
};
ZF.prototype.G = function() {
	3 == this.A.$R ? this.ab.stop() : (this.F(), this.ab.start())
};
ZF.prototype.O = function() {
	O(this.ab);
	delete this.ab;
	O(this.R);
	delete this.R;
	O(this.C);
	delete this.C;
	O(this.A);
	delete this.A;
	ZF.M.O.call(this)
};

function Agb() {}
L(Agb, M);

function Bgb(a, b) {
	this.A = b || te;
	this.ra = a
}
L(Bgb, Agb);
F = Bgb.prototype;
F.gB = m;
F.vb = function(a, b) {
	var c = km.PERSISTENT,
		d = K(this.GVa, this, a, b),
		e = K(this.q4, this, b, Tg);
	I(km.requestFileSystem) ? km.requestFileSystem(c, 10485760, d, e) : I(km.webkitRequestFileSystem) ? km.webkitRequestFileSystem(c, 10485760, d, e) : f(Error("File API unsupported"))
};
F.q4 = function(a, b, c) {
	a(Cgb(b, c.code))
};
F.OH = function(a, b) {
	this.ra.log(Cgb(a, b.code))
};

function Cgb(a, b) {
	var c;
	switch (b) {
		case FileError.SECURITY_ERR:
			c = poa;
			break;
		case FileError.INVALID_STATE_ERR:
			c = Mja;
			break;
		case FileError.QUOTA_EXCEEDED_ERR:
			c = Fna;
			break;
		default:
			c = Kqa
	}
	return Error(Xia + b + s + c + wba + a)
}
F.GVa = function(a, b, c) {
	this.A ? c.root.getDirectory(this.A, {
		create: l
	}, K(this.$ja, this, a, b), K(this.q4, this, b, KDa)) : this.$ja(a, b, c.root)
};
F.$ja = function(a, b, c) {
	this.gB = c;
	c.getFile(Wra, {
		create: l
	}, function() {
		a()
	}, K(this.q4, this, b, JDa))
};

function Dgb(a, b) {
	var c = a.join(Sa);
	c && (c += Sa);
	b && (c += b);
	return c
}
F.$ca = function(a, b, c, d, e, g) {
	if (jn(b)) g = new LB, up(g, Ud, K(this.uUa, this, a, d, e)), g.IA = Math.max(0, 2E4), g.dx = jta, g.send(c, dc);
	else {
		var h = b.shift();
		a = K(this.$ca, this, a, b, c, d, e);
		(g || this.gB).getDirectory(h, {
			create: l
		}, a, K(this.OH, this, nsa))
	}
};
F.uUa = function(a, b, c, d) {
	d = d.target;
	var e = m,
		g = m,
		h = m;
	if (d.Gn()) if (e = d.getResponseHeader(Nb), Fm(e)) h = Error(Ula + d.kx());
	else {
		if (g = O8a(d), g == m || 0 == g.size) h = Error(Eka + d.kx())
	} else h = Error(d.Rx());
	h ? c(h) : (b = K(this.oUa, this, a, g, e, b), this.gB.getFile(a, {
		create: l
	}, b, K(this.OH, this, PDa)));
	d.dispose()
};
F.oUa = function(a, b, c, d, e) {
	e.createWriter(K(this.zVa, this, a, b, c, d, e.toURL()), K(this.OH, this, iQa))
};
F.zVa = function(a, b, c, d, e, g) {
	g.onwriteend = wm(d, a, c, e);
	g.write(b)
};
F.rNa = function(a, b) {
	b.code == FileError.NOT_FOUND_ERR ? a(m) : this.OH(LDa, b)
};
F.pNa = function(a, b) {
	a(b.toURL())
};

function Egb(a, b, c) {
	a.gB.getDirectory(Dgb(b), {}, K(a.xVa, a, c), function() {
		c(m)
	})
}
F.xVa = function(a, b) {
	b.createReader().readEntries(K(this.cXa, this, a))
};
F.cXa = function(a, b) {
	for (var c = [], d = 0; d < b.length; d++) {
		var e = b[d];
		e.isFile && c.push(e.name)
	}
	a(c)
};
F.HCa = function(a, b, c) {
	c.code == FileError.NOT_FOUND_ERR ? b(a) : this.OH(MDa, c)
};
F.ICa = function(a, b, c) {
	c.remove(wm(b, a), K(this.OH, this, wMa))
};
F.O = function() {
	Bgb.M.O.call(this);
	delete this.ra;
	delete this.gB
};

function $F(a, b, c, d, e) {
	this.C = a;
	this.A = b;
	this.L = d;
	this.Bc = e;
	this.G = {};
	this.F = c;
	this.K = Nn(this.A)
}
L($F, M);
F = $F.prototype;
F.Ila = 0;
F.x6 = 0;
F.V_ = 0;
F.Xma = 0;
F.w6 = 0;
F.start = function() {
	this.L ? Egb(this.C, this.F, K(this.VNa, this)) : Fgb(this)
};
F.VNa = function(a) {
	if (a) {
		for (var b = [], c = 0; c < a.length; c++) {
			var d = a[c];
			this.A[d] || b.push(d)
		}
		if (b.length) {
			this.V_ += b.length;
			for (a = 0; a < b.length; a++) {
				c = this.C;
				d = K(this.GCa, this);
				K(this.FCa, this);
				var e = Dgb(this.F, b[a]);
				c.gB.getFile(e, {}, K(c.ICa, c, e, d), K(c.HCa, c, e, d))
			}
		}
	}
	Fgb(this)
};

function Fgb(a) {
	if (0 == a.K) aG(a);
	else for (var b in a.A) {
		var c = a.A[b],
			d = a.F.concat(c.getDirectory()),
			c = c.C,
			e = K(a.OAa, a, b),
			g = K(a.NAa, a);
		a.C.$ca(Dgb(d, b), rn(d), c, e, g)
	}
}
F.OAa = function(a, b, c, d) {
	this.G[a] = d;
	this.Ila++;
	aG(this)
};
F.NAa = function() {
	this.x6++;
	aG(this)
};
F.GCa = function() {
	this.Xma++;
	aG(this)
};
F.FCa = function() {
	this.w6++;
	aG(this)
};

function aG(a) {
	var b = a.Xma + a.w6;
	a.K == a.Ila + a.x6 && a.V_ == b && a.Bc(a)
}
F.LR = function() {
	return 0 < this.x6 || 0 < this.w6
};
F.e0 = function() {
	return this.LR()
};
F.d0 = function(a) {
	return this.G[a]
};
F.O = function() {
	$F.M.O.call(this);
	delete this.C;
	delete this.A
};

function bG(a) {
	this.A = a
}
L(bG, M);
bG.prototype.JL = function(a, b, c) {
	var d = this.A;
	d.gB.getFile(Dgb(b, a), {}, K(d.pNa, d, c), K(d.rNa, d, c))
};
bG.prototype.mL = function(a, b, c) {
	var d = {};
	d[a.aa()] = a;
	(new $F(this.A, d, b, q, c)).start()
};
bG.prototype.sL = function(a, b, c, d) {
	(new $F(this.A, a, b, c, d)).start()
};
bG.prototype.O = function() {
	bG.M.O.call(this);
	delete this.A
};

function cG() {}
cG.prototype.LR = D(l);
cG.prototype.e0 = D(q);
cG.prototype.d0 = D(m);

function Ggb() {}
Ggb.prototype.mL = function(a, b, c) {
	c(new cG)
};
Ggb.prototype.sL = function(a, b, c, d) {
	d(new cG)
};
Ggb.prototype.JL = function(a, b, c) {
	return c(m)
};

function Hgb(a, b, c, d, e) {
	R.call(this, Qc, e);
	this.C = a;
	this.xZ = b;
	this.A = c;
	this.document = d
}
L(Hgb, R);

function Igb() {};

function dG(a) {
	this.A = a
}
L(dG, Igb);

function Jgb(a, b, c) {
	if (a.A.UK) eq(wm(b, []));
	else {
		c = GF(a.A, [Uc], wia, c);
		var d = m;
		tF(a.A.C, c, Uc, K(a.C, a), function(a) {
			d = a
		});
		wF(c, function() {
			d === m || b(d)
		})
	}
}
dG.prototype.C = function(a) {
	var b = new EF(a.id, q);
	b.setProperty(IJa, a.managingDomain);
	b.setProperty(jCa, a.emailAddress);
	b.setProperty(Vi, a.locale);
	b.setProperty(OKa, a.optInSecret);
	a.fastTrack != m && lr(b, JCa, !! a.fastTrack);
	a.internal != m && lr(b, UEa, !! a.internal);
	b.L = q;
	return b
};

function Kgb(a, b, c) {
	if (a.A.UK) eq(wm(b, q));
	else if (hn(a.A.F.A.objectStoreNames, Uc)) {
		var d = GF(a.A, [Uc], lia, c),
			e = uF(d, Uc).openCursor(),
			g = m;
		e.onsuccess = function(a) {
			g = !! a.target.result
		};
		e.onerror = HF(a.A, Pta, c);
		wF(d, function() {
			g === m || b(g)
		})
	} else a.A.ra.log(Error(Mna)), eq(wm(b, q))
};

function eG(a, b, c) {
	ir.call(this, 1, c);
	this.setProperty(oe, a);
	this.setProperty(Hg, b);
	this.setProperty(jk, 1)
}
L(eG, ir);
F = eG.prototype;
F.OB = function() {
	return this.Nb(oe)
};
F.aa = function() {
	return this.Nb(Hg)
};
F.getData = function() {
	return CUa(this, fe)
};
F.setData = function(a) {
	this.setProperty(fe, a)
};
F.kb = function() {
	return this.Nb(jk)
};

function fG(a, b) {
	this.A = a;
	a.bh(this);
	this.F = b;
	Mn(b, function(a) {
		a.bh(this)
	}, this);
	this.C = q;
	this.G = m
}
L(fG, bq);
fG.prototype.sb = function(a, b, c) {
	Lfb(this.A, a, function(a) {
		1 == a.length ? b(a[0]) : b(m)
	}, this.F, c)
};
fG.prototype.write = function(a, b, c) {
	this.C || f(Error("Cannot write to read-only local store."));
	for (var d = [], e = 0; e < a.length; e++) {
		var g = a[e];
		(g.Nda() || g.Cx() || g.Ek) && d.push(GUa(g))
	}
	0 == d.length ? b() : this.A.write(d, this.F, wm(Lgb, d, b), c)
};
fG.prototype.K = function() {
	Bfb(this.A.G)
};

function Lgb(a, b) {
	for (var c = 0; c < a.length; c++) a[c].dispose();
	b()
}
fG.prototype.O = function() {
	fG.M.O.call(this);
	delete this.A;
	delete this.F
};

function gG(a, b, c, d, e) {
	FF.call(this, a, b, c, d, e)
}
L(gG, Yfb);
F = gG.prototype;
F.Lq = D(4);
F.PC = function(a) {
	gG.M.PC.call(this, a);
	Mgb(a)
};
F.LU = D(l);

function Ngb(a, b, c) {
	zfb(a.Lq(), K(a.yMa, a, c || a.A), HF(a, yia, c), b, a.ra)
}
F.yMa = function(a, b) {
	try {
		this.G8(b)
	} catch (c) {
		eq(wm(a, new pF(0, Nia, c)))
	}
};
F.G8 = function(a) {
	Mgb(a)
};

function Mgb(a) {
	a = a.db;
	a.createObjectStore(Pea, {
		keyPath: WBa
	});
	a.createObjectStore(Fma, {
		keyPath: XBa
	});
	a.createObjectStore(Lb, {
		keyPath: bua
	}).createIndex(Hpa, SNa)
}
F.yB = function(a, b, c) {
	var d = a.aa();
	gG.M.yB.call(this, a, b, c);
	a = uF(b, Lb);
	sF(a, HF(this, Tua), [d], [d, []])
};
F.fB = function(a, b, c, d) {
	a instanceof eG ? (b = uF(b, Lb), a.Ek ? b[le]([a.Nb(oe), a.aa()]).onerror = HF(this, Sua) : a.K ? (c = {}, c.cmtKey = [a.Nb(oe), a.aa()], c.stateIndex = [a.kb(), a.Nb(oe)], c.da = a.getData(), b.put(c).onerror = HF(this, jQa)) : (c = [a.Nb(oe), a.aa()], b = rF(b, c), b.onerror = HF(this, EPa), b.onsuccess = K(this.DPa, this, a))) : gG.M.fB.call(this, a, b, c, d)
};
F.aea = function(a, b) {
	var c = a.aa();
	rF(b, c).onsuccess = K(this.R0, this, a, [aJa])
};
F.VM = function(a, b) {
	var c = gG.M.VM.call(this, a, b);
	if (c) {
		KUa(c, b.docosKeyData || m);
		var d = b.importWarnings;
		d && LUa(c, new Ln(d));
		lr(c, Qg, !! b.inc);
		d = b.lastModifiedClientTimestamp;
		d != m && or(c, d)
	}
	return c
};
F.sR = jm(71);
F.vla = jm(147);
F.DPa = function(a, b) {
	var c = b.target.result;
	if (c) {
		var d = c.value,
			e = a.C;
		jk in e && (d.stateIndex = [a.kb(), a.Nb(oe)], delete e.s);
		for (var g in e) d[g] = e[g];
		c.update(d).onerror = HF(this, ODa)
	} else f(Error(gga))
};
F.PB = function(a) {
	if (a instanceof eG) return [Lb];
	var b = gG.M.PB.call(this, a);
	a instanceof nr && a.Ek && b.push(Lb);
	return b
};

function hG(a, b, c, d, e) {
	FF.call(this, a, b, c, d, e)
}
L(hG, gG);
F = hG.prototype;
F.Lq = D(5);
F.LU = D(l);
F.PC = function(a) {
	hG.M.PC.call(this, a);
	Ogb(a)
};
F.G8 = function(a) {
	Ogb(a)
};

function Ogb(a) {
	a.db.createObjectStore(Gc, {
		keyPath: Gua
	})
}
F.yB = function(a, b, c) {
	hG.M.yB.call(this, a, b, c);
	this.Ima([a.aa()], G);
	this.Hma([a.aa()], G)
};
F.fB = function(a, b, c, d) {
	hG.M.fB.call(this, a, b, c, d)
};
F.uQ = jm(35);
F.Ima = function(a, b, c) {
	Pgb(this, qKa, a, b, c)
};
F.oia = function(a, b, c) {
	Qgb(this, RJa, a, b, c)
};
F.Hma = function(a, b, c) {
	Pgb(this, RJa, a, b, c)
};

function Qgb(a, b, c, d, e) {
	var g = GF(a, [Gc], pia, e, l);
	Rgb(a, b, function(h) {
		hn(h, c) ? d() : (h.push(c), h = Sgb(b, h), uF(g, Gc).put(h).onerror = HF(a, Oia + b, e), wF(g, d))
	}, g, e)
}
function Pgb(a, b, c, d, e) {
	var g = GF(a, [Gc], xia, e, l);
	Rgb(a, b, function(h) {
		for (var n = 0; n < c.length; n++) on(h, c[n]);
		h = Sgb(b, h);
		uF(g, Gc).put(h).onerror = HF(a, Mia + b, e);
		wF(g, d)
	}, g, e)
}
function Rgb(a, b, c, d, e) {
	d = uF(d, Gc).get(b);
	d.onsuccess = function(a) {
		a = a.target.result;
		c(a && a.documentIds ? a.documentIds : [])
	};
	d.onerror = HF(a, Hia + b, e)
}

function Sgb(a, b) {
	var c = {};
	c.dataType = a;
	c.documentIds = b;
	return c
}
F.PB = function(a) {
	return hG.M.PB.call(this, a)
};

function iG(a, b, c, d) {
	ir.call(this, 4, d);
	this.setProperty(fDa, a).setProperty(SPa, b).setProperty(dDa, Tgb(c))
}
L(iG, ir);
iG.prototype.ld = function() {
	return this.Nb(fDa)
};

function Tgb(a) {
	for (var b = [], c = 0; c < a.length; c++) {
		for (var d = a[c], e = d.ox(), g = [], h = 0; h < e.length; h++) {
			var n = e[h],
				p = {};
			p.format = n.A;
			p.isSystemFont = n.F;
			p.url = n.C;
			g.push(p)
		}
		e = {};
		e.fontFamily = d.$i;
		e.isMenuFont = d.A;
		e.source = g;
		e.style = d.C;
		e.weight = d.F;
		b.push(e)
	}
	return b
}
function jG(a, b, c, d, e) {
	this.$i = a;
	this.A = b;
	this.C = c;
	this.F = d;
	this.G = e
}
jG.prototype.ld = C(za);
jG.prototype.Ra = C(Jb);
jG.prototype.ox = C(cc);

function Ugb(a, b, c) {
	this.A = a;
	this.F = b;
	this.C = c
}
Ugb.prototype.Xb = C(Jb);

function kG(a, b, c) {
	ir.call(this, 7, a);
	this.setProperty(eFa, b);
	this.setProperty(RNa, c)
}
L(kG, ir);
kG.prototype.setData = function(a) {
	this.setProperty(Eua, a)
};
kG.prototype.getData = function() {
	return this.Nb(Eua)
};
kG.prototype.kb = function() {
	var a = CUa(this, RNa);
	a || f(Error("SyncObject not allowed to have null state."));
	return a
};

function lG(a, b, c, d, e) {
	FF.call(this, a, b, c, d, e)
}
L(lG, hG);
F = lG.prototype;
F.Lq = D(6);
F.LU = D(l);
F.PC = function(a) {
	lG.M.PC.call(this, a);
	Vgb(a)
};
F.G8 = function(a) {
	Vgb(a)
};

function Vgb(a) {
	a = a.db;
	a.createObjectStore(bc, {
		keyPath: fDa
	});
	a.createObjectStore(Nha, {
		keyPath: Mua
	});
	a.createObjectStore(Pc, {
		keyPath: eFa
	})
}
F.yB = function(a, b, c) {
	var d = a.aa();
	lG.M.yB.call(this, a, b, c);
	a = uF(b, Nha);
	sF(a, HF(this, Zua), [d], [d, []])
};
F.fB = function(a, b, c, d) {
	a instanceof iG ? (b = uF(b, bc), a.Ek ? (c = HF(this, Oqa), a = a.ld(), sF(b, c, a)) : a.K ? b.put(a.C).onerror = HF(this, Qqa) : f(Error("FontMetadata update is not implemented."))) : a instanceof kG ? (b = uF(b, Pc), a.Ek && f(Error("SyncObject deletion is not implemented.")), a.K ? b.put(a.C).onerror = HF(this, Rqa) : f(Error("SyncObject update is not implemented."))) : lG.M.fB.call(this, a, b, c, d)
};
F.VM = function(a, b) {
	var c = lG.M.VM.call(this, a, b);
	if (c) {
		var d = b.startupHints;
		if (d) for (var e in d) mr(c, QNa, e, d[e])
	}
	return c
};

function Wgb(a, b, c, d) {
	d = HF(a, qia, d);
	tF(a.C, b, bc, K(a.$Oa, a), function(a) {
		for (var b = {}, d = 0, n; n = a[d]; d++) b[n.ld()] = n;
		c(b)
	}, d)
}
F.$Oa = function(a) {
	for (var b = [], c = a.fontFaces, d = 0, e; e = c[d]; d++) {
		for (var g = e.source, h = [], n = 0, p; p = g[n]; n++) h.push(new Ugb(p.format, p.isSystemFont, p.url));
		b.push(new jG(e.fontFamily, e.isMenuFont, e.style, e.weight, h))
	}
	a = new iG(a.fontFamily, a.version, b, q);
	a.L = q;
	return a
};
F.gfa = function(a, b, c) {
	var d = GF(this, [bc], ria, c);
	Wgb(this, d, K(this.bXa, this, d, a, b, c), c)
};
F.bXa = function(a, b, c, d, e) {
	a = [];
	d = 0;
	for (var g; g = b[d]; d++) a.push(e[g]);
	c(a)
};
F.bPa = function(a) {
	var b = a.data;
	a = new kG(q, a.keyPath, a.state);
	a.setData(b);
	a.L = q;
	return a
};
F.Oaa = function(a, b) {
	var c = GF(this, [Pc], sia, b),
		d = HF(this, tia, b);
	tF(this.C, c, Pc, K(this.bPa, this), a, d)
};
F.PB = function(a) {
	if (a instanceof iG) return [bc];
	if (a instanceof kG) return [Pc];
	var b = lG.M.PB.call(this, a);
	a instanceof nr && a.Ek && b.push(Nha);
	return b
};

function Xgb(a) {
	this.K = a;
	this.A = {};
	this.C = {};
	this.F = m
}
L(Xgb, M);
F = Xgb.prototype;
F.PQ = 0;

function Ygb(a, b) {
	var c = b.Lq();
	a.PQ = Math.max(a.PQ, c);
	a.A[c] = b
}
F.vb = function(a, b, c, d) {
	isNaN(a) && f(Error("Cannot have the target schema version be NaN."));
	a = Math.min(a, this.PQ);
	var e = Zgb(this);
	c && 0 >= e && f(Error("Schema initialization cannot be performed when schema updates are prevented."));
	b = K(this.LMa, this, b);
	c || e >= a ? b() : $gb(this, e, a) ? (c = e + 1, Ngb(this.A[c], K(this.Bja, this, c, a, b, d), d)) : this.A[a].vb(b, d)
};

function $gb(a, b, c) {
	for (b += 1; b <= c; ++b) if (a.A[b] == m || !a.A[b].LU()) return q;
	return l
}
F.Bja = function(a, b, c, d) {
	a = Zgb(this);
	a == b ? c() : (a = a + 1, Ngb(this.A[a], K(this.Bja, this, a, b, c, d), d))
};
F.LMa = function(a) {
	var b = Zgb(this),
		c = this.A[b];
	this.G = new fG(c, this.C[b] || {});
	b = this.F || (this.F = new dG(c));
	this.G.G = b;
	a(this)
};

function Zgb(a) {
	a = yF(a.K);
	return 3 > a ? -1 : a
}
F.O = function() {
	Xgb.M.O.call(this);
	O(this.K);
	for (var a in this.A) this.A[a].dispose();
	delete this.A;
	for (a in this.C) {
		var b = this.C[a],
			c;
		for (c in b) b[c].dispose()
	}
	delete this.C;
	this.G && this.G.dispose();
	delete this.G
};

function ahb(a, b, c, d, e, g) {
	var h = new Xgb(g);
	Ygb(h, new Yfb(g, d, a, b, e));
	Ygb(h, new gG(g, d, a, b, e));
	Ygb(h, new hG(g, d, a, b, e));
	Ygb(h, new lG(g, d, a, b, e));
	c(h)
};

function mG(a, b, c) {
	this.C = a;
	this.F = b;
	this.A = c;
	this.R = new S(this);
	this.R.A(a, Qb, this.G).A(a, vl, this.K).A(a, Hl, this.L)
}
L(mG, M);
mG.prototype.G = function(a) {
	this.A.setTitle(this.C.fh);
	IUa(this.A);
	or(this.A, a.A ? m : ym());
	this.F.write([this.A], G)
};
mG.prototype.K = function() {
	KUa(this.A, this.C.tD);
	IUa(this.A);
	this.F.write([this.A], G)
};
mG.prototype.L = function() {
	var a = this.C.F;
	a && (LUa(this.A, a), IUa(this.A), this.F.write([this.A], G))
};
mG.prototype.O = function() {
	mG.M.O.call(this);
	delete this.C;
	delete this.F;
	delete this.A;
	O(this.R);
	delete this.R
};

function bhb(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	this.G = jo();
	this.A = a;
	this.R = new S(this);
	this.Ba = sm(u) ? u : ho(this.G, zJa);
	this.Ma = b;
	this.Na = c;
	this.F = d;
	this.ea = B || m;
	this.K = e;
	this.Aa = g;
	this.W = h;
	this.ra = n;
	this.C = p;
	this.L = t;
	this.Y = y || m;
	this.Ha = new Gt(this.ra);
	this.na = x || window;
	N(this, new dgb)
}
L(bhb, bq);
F = bhb.prototype;
F.XJ = m;
F.UO = m;
F.QX = m;
F.UY = m;
F.vn = m;
F.XO = m;
F.Uw = m;
F.Ub = m;
F.wna = q;
F.vna = m;
F.So = function() {
	var a = this.A.A;
	zr(a, xr(a.Fa, 32, q));
	this.F.zP();
	this.C && (a = this.C, a.Hr = new Ggb, cgb(a));
	this.XJ = q;
	chb(this, m, m, m, m)
};

function chb(a, b, c, d, e) {
	a.Y && a.Y.CA(c ? WAa : XAa);
	a.dispatchEvent(new Hgb(b, c, d, e))
}
F.cPa = function(a) {
	this.UO = a;
	for (var b = this.Aa(a.K, K(this.z$, this)), c = 0; c < b.length; c++) for (var d = a, e = b[c], g = e.W; g <= e.K; ++g) {
		var h = d.C[g];
		h || (h = d.C[g] = {});
		h[e.C] = e
	}
	this.L ? (d = this.Ba, b = K(this.Uxa, this), c = K(this.gP, this, this.So), e = Zgb(a), d = Math.min(d, a.PQ), e >= d ? (d = a.A[e]) ? Kgb(a.F || (a.F = new dG(d)), b, c) : b(q) : $gb(a, e, d) ? (d = a.A[e] || a.A[e + 1], Kgb(a.F || (a.F = new dG(d)), b, c)) : b(q)) : dhb(this)
};
F.Uxa = function(a) {
	a ? dhb(this) : this.So()
};

function dhb(a) {
	a.UO.vb(a.Ba, K(a.XPa, a), go(a.G, Kg), K(a.WPa, a))
}
F.WPa = function(a) {
	a.kp instanceof Error ? this.ra.log(a.kp) : this.ra.log(Error(Wja + a.message));
	this.So()
};
F.XPa = function(a) {
	!this.vn || this.ra.log(Error(Yoa));
	!this.Uw || this.ra.log(Error(Xoa));
	!this.Ub || this.ra.log(Error(Woa));
	this.vn = a.G;
	this.R.A(this.vn, rc, this.FHa);
	a = this.vn;
	a.G || f(Error("User capability has not been set."));
	Jgb(a.G, K(this.GHa, this), K(this.gP, this, this.So))
};
F.FHa = function() {
	eq(this.na.location.reload, 0, this.na.location)
};
F.GHa = function(a) {
	um(this.vn) || this.ra.Zf(Error(apa));
	!this.Uw || this.ra.log(Error($oa));
	!this.Ub || this.ra.log(Error(Zoa));
	if (0 == a.length) this.So();
	else if (1 < a.length) a = En(HWa()), this.ra.log(Error(bma), {
		appDetails: a
	}), this.So();
	else {
		if (this.L) {
			var b;
			b = a[0];
			var c = d8a();
			if (2 != c) b = c;
			else {
				var d = jo().get(NKa),
					c = d.s,
					d = d.u;
				b.aa() != d ? b = 5 : (b = kr(b, OKa), b = b == m ? 4 : hn(c, b) ? 2 : 4)
			}
			if (2 != b) {
				this.So();
				return
			}
			if (GWa() == sKa) {
				this.ra.log(Error(Tfa));
				this.So();
				return
			}
			if (!JWa(FWa, l)) {
				this.dispatchEvent(Ic);
				a = this.ra;
				a.ra && a.ra.ju(Error(pra), j9a(Rg, k));
				this.So();
				return
			}
		}
		b = this.A;
		b.KO = l;
		b.dispatchEvent(new uD(jk, l));
		a = a[0];
		if (!this.A.bx()) {
			b = this.A;
			if ((c = kr(a, jCa)) && q != b.C) b.C = q, b.dispatchEvent(new uD(Xj, l));
			b.K = c;
			b.dispatchEvent(new uD(Dl, l))
		}
		this.Uw = a;
		a = K(this.Eba, this);
		b = K(this.gP, this, wm(this.Eba, 3));
		c = this.vn.A;
		Cfb(c.G, this.A.gc(), a, b || c.A, ho(jo(), fya), AEa, k, l);
		this.C && (a = new Bgb(this.ra), a.vb(K(this.uya, this, a), K(this.tya, this)));
		if (a = io(this.G, SKa)) this.XO = new ZF(a, this.Uw.aa(), this.A.gc(), this.ea), this.XO.start()
	}
};
F.Eba = function(a) {
	um(this.vn) || this.ra.Zf(Error(Roa));
	this.vn.sb(this.A.gc(), K(this.uMa, this, a))
};
F.uMa = function(a, b) {
	um(this.vn) || this.ra.Zf(Error(Toa));
	um(this.Uw) || this.ra.Zf(Error(Uoa));
	!this.Ub || this.ra.log(Error(Soa));
	var c = this.vn;
	if (!b) {
		var d = c.F[this.Ma];
		b = new oF(this.A.gc(), d.C, l, d);
		d = Ar(this.A.A);
		lr(b, Qg, !d)
	}
	var d = this.Uw.aa(),
		e = this.A.KJ ? 3 : Br(this.A.A) ? 2 : vr(this.A.A.Fa, 128) ? 4 : 1;
	mr(b, fsa, d, e);
	this.Ub = b;
	if (this.XJ = 1 == a) c.C && f(Error("Called setWritable on an already writable localstore.")), c.C = l, d = ym(), go(this.G, Kg) ? (this.Ub.setProperty($Ia, d), this.Ub.K || this.vn.write([this.Ub], G)) : this.Ub.setProperty(dJa,
	d);
	this.K && this.K.load(c, b, l);
	chb(this, this.vn, this.Uw, a, b);
	d = this.A.A;
	zr(d, xr(d.Fa, 32, this.XJ));
	this.XJ ? (d = this.F, e = this.Uw, d.oP = c, d.rf = b, d.Aa = e, d.Y.zb(l), this.QX = new mG(this.A, c, b)) : this.F.zP()
};
F.z$ = function(a) {
	this.ra.Zf(a)
};
F.gP = function(a, b) {
	this.wna || (this.wna = l, this.ra.log(b), this.W && !this.vna && (this.vna = this.W.postMessage(q4a(rpa, bla, this.rRa, Il))), a.call(this))
};
F.rRa = function() {
	Ft(mEa)
};
F.uya = function(a) {
	this.UY = a;
	a = new bG(this.UY);
	var b = this.C;
	b.Hr = a;
	cgb(b)
};
F.tya = function(a) {
	this.ra.log(a)
};
F.O = function() {
	O(this.UO);
	delete this.UO;
	O(this.Ub);
	delete this.Ub;
	delete this.A;
	delete this.ra;
	O(this.R);
	delete this.R;
	delete this.F;
	O(this.QX);
	delete this.QX;
	delete this.K;
	delete this.Aa;
	delete this.UY;
	delete this.C;
	O(this.XO);
	delete this.XO;
	delete this.Ha;
	delete this.ea;
	bhb.M.O.call(this)
};

function ehb(a, b, c) {
	this.A = b;
	this.C = Im(a) + (c ? Cba : r)
};

function nG() {
	this.A = [];
	this.C = []
}
function oG(a, b, c, d) {
	a.A.push(new fhb(b, c, d))
}
function ghb(a, b) {
	sn(a.C, b)
}
function hhb(a, b) {
	for (var c = 0; c < a.A.length; c++) if (hn(a.A[c].F, b)) return a.A[c];
	return hn(a.C, b) ? ihb(a, 3) : m
}
function jhb(a, b, c) {
	if (I(c)) {
		(c = hhb(a, c)) || f(Error("No offline action for given online action"));
		var d = Um(HUa, b),
			e = Um(HUa, c.A);
		if (d >= e) return c.C
	}(a = ihb(a, b)) || f(Error("No offline action for given access level or less."));
	return a.C
}

function ihb(a, b) {
	var c = Um(HUa, b);
	for (-1 == c && f(Error("Requested access level is invalid")); 0 <= c; c--) for (var d = 0; d < a.A.length; d++) if (a.A[d].A == HUa[c]) return a.A[d];
	return m
}
function fhb(a, b, c) {
	this.F = a;
	this.C = b;
	this.A = c
};

function pG(a, b) {
	this.C = a;
	this.A = [a];
	b && (this.A = this.A.concat(b))
}
function khb(a, b) {
	for (var c = 0; c < a.A.length; c++) if (hhb(a.A[c], b)) return l;
	return q
};

function lhb(a) {
	a = Gv(Jv(a));
	if (!a) return {};
	a = a.split(Ba);
	for (var b = {}, c = 0; c < a.length; ++c) {
		var d = a[c].split(zb);
		2 == d.length && (0 < d[0].length && 0 < d[1].length) && (b[Jm(d[0])] = Jm(d[1]))
	}
	return b
};

function mhb(a) {
	this.G = a
}
mhb.prototype.xa = C(cc);

function nhb(a, b, c) {
	this.A = a;
	this.G = c || r
};

function ohb() {
	var a = window,
		b = a.document.title || r,
		c = lhb(a.location.href).ouri;
	c && a.history.replaceState(m, b, c)
};

function qG(a, b, c, d, e, g, h, n, p, t) {
	this.G = a;
	this.A = p ? Sv(Ta + p, b) : b;
	this.C = c;
	I(n) || go(jo(), PAa);
	!g || Bm(g, Sa);
	this.W = g || Wa;
	this.L = d;
	this.F = e || Lg;
	this.K = t
}
L(qG, mhb);

function phb(a, b, c, d) {
	var e = Ev(a.A),
		g = e[5];
	(c = c.A) && (g = Ua + c + g);
	a.L && (g += jca + b);
	var g = g + (d ? d : a.W),
		h;
	a.L || (a = Yn(a.F, b), h = Ov(a));
	return Dv(e[1], e[2], e[3], e[4], g, h)
}

function qhb(a, b) {
	var c;
	c = Iv(b);
	if (Bm(c, Ua)) {
		var d = c.indexOf(Sa, 3);
		c = 0 > d ? r : c.substring(d)
	}
	d = Iv(a.A) || Sa;
	if (!Bm(c, d)) return m;
	d = c = c.substring(d.length);
	Bm(d, Sa) || (d = Sa + d);
	var e, g;
	a: {
		g = a.C;
		for (var h = d, n = 0; n < g.A.length; n++) if (hn(g.A[n].C, h)) {
			g = l;
			break a
		}
		g = q
	}
	if (g) return new nhb(d, a.xa(), e);
	if (Bm(c, jca)) {
		e = c.indexOf(Sa, 3);
		if (0 > e) return m;
		d = c.substring(e);
		if (!khb(a.C, d)) return m;
		e = c.substring(3, e)
	} else if (khb(a.C, d)) {
		if (!(0 <= jZa(b, 0, a.F, b.search(kZa)))) return m;
		e = String(Qv(b, a.F))
	} else return m;
	return new nhb(d,
	a.xa(), e)
};

function rhb(a, b, c) {
	this.C = a;
	this.A = {};
	this.F = !! c
}
L(rhb, M);
var shb = [Va];

function rG(a, b) {
	var c = b.xa();
	a.A[c] && f(Error("Already have an adapter installed for type " + c));
	a.A[c] = b
}
function thb(a, b) {
	var c = a.A[b];
	c || f(Error("No offline URL adapter for documents of type " + b));
	return c
}
function uhb(a) {
	var b = window.location.href,
		c = m;
	Mn(a.A, function(a) {
		(a = qhb(a, b)) && (c = a)
	});
	return c
}
rhb.prototype.O = function() {
	rhb.M.O.call(this)
};

function vhb(a) {
	var b = jo(),
		c = ho(b, bya),
		c = $q && cr(c);
	a = new ehb(kr(a, Vi), kr(a, IJa), DUa(a, UEa) || FDa == kr(a, IJa));
	a = new rhb(a, io(b, LKa), c, io(b, NBa), io(b, MBa));
	c = new nG;
	oG(c, [Wa], BKa, 2);
	oG(c, [sca, vca], DKa, 1);
	oG(c, [ica], AKa, 4);
	ghb(c, shb.concat([r, Sa]));
	c = new pG(c);
	rG(a, new qG(jh, io(b, VIa), c, go(b, uPa), k, k, 0, k, k));
	c = new nG;
	oG(c, [Wa], BKa, 2);
	oG(c, [vca], DKa, 1);
	oG(c, [ica], AKa, 4);
	ghb(c, shb);
	var d = new pG(c);
	rG(a, new qG(Bf, io(b, LBa), d, go(b, uPa), k, k, 0, k, k));
	d = new nG;
	oG(d, [oca], CKa, 1);
	c = new pG(c, [d]);
	rG(a, new qG(Rj,
	io(b, SLa), c, go(b, uPa), k, k, 0, k, k));
	c = new nG;
	oG(c, [hca, pca, qca], io(b, oPa), 1);
	c = new pG(c);
	rG(a, new qG(mPa, io(b, nPa), c, q, eh, io(b, pPa), 0, k, k));
	c = new nG;
	oG(c, [Wa], BKa, 2);
	oG(c, [sca, vca], DKa, 1);
	oG(c, [ica], AKa, 4);
	ghb(c, shb.concat([r, Sa]));
	c = new pG(c);
	rG(a, new qG(FMa, io(b, GMa), c, go(b, uPa), k, k, 0, k, k, function(a) {
		return {
			dl: a.docLocale
		}
	}));
	return a
};

function whb(a) {
	R.call(this, Vc);
	this.A = a
}
L(whb, R);

function xhb(a, b) {
	R.call(this, Wc);
	this.C = a;
	this.A = b
}
L(xhb, R);

function sG() {}
L(sG, bq);
sG.prototype.F = function(a) {
	this.dispatchEvent(new whb(a))
};
sG.prototype.G = function(a, b) {
	this.dispatchEvent(new xhb(a, b))
};
sG.prototype.C = function() {
	this.dispatchEvent(Xc)
};

function yhb(a, b) {
	this.A = a;
	this.ra = b
}
L(yhb, sG);
yhb.prototype.load = function(a, b) {
	if (b.K) this.ra.Zf(Error(fqa));
	else {
		var c = kr(b, bl);
		c != m && this.A.setTitle(c, l);
		c = EUa(b, tva);
		if (c != m) {
			var d = this.A;
			d.tD = c;
			d.dispatchEvent(new uD(vl, l))
		}(c = (c = EUa(b, LEa)) ? new Ln(c) : m) && gbb(this.A, c, l);
		var d = K(this.F, this),
			e = K(this.G, this),
			g = K(this.C, this),
			c = b.ea,
			h = wfb(c.F, [Sb], c.Ft);
		g && wF(h, g);
		g = uF(h, Sb);
		h = b.aa();
		d = K(c.Twa, c, b, 0, g, d, e);
		e = $fb(h, g, l, 0);
		e.onsuccess = K(c.Swa, c, d);
		e.onerror = c.Ft
	}
};

function zhb(a, b) {
	yhb.call(this, a, b)
}
L(zhb, yhb);

function tG() {}
L(tG, bq);
F = tG.prototype;
F.Sqa = 0;
F.y8 = q;
F.bp = q;

function uG(a) {
	return a.hU() && !a.Dw()
}
function vG(a) {
	wG(a);
	return a.Yqa()
}
function Ahb(a) {
	a.WJ() || a.dispatchEvent(Zc)
}
F.U8 = function() {
	this.bp = q;
	var a = new es;
	this.fqa(a);
	return a
};

function xG(a) {
	wG(a);
	return a.WJ()
}
F.vb = function(a) {
	this.y8 = l;
	this.uqa(a);
	this.dispatchEvent(Vsa);
	Ahb(this)
};

function wG(a) {
	a.y8 || f(Error("Attempting to use an uninitialized queue."))
}
F.$h = C("y8");
F.zJ = jm(99);

function yG(a, b, c, d, e) {
	this.A = a;
	this.F = a.aa();
	this.W = a.xa();
	this.K = b;
	this.Y = c;
	this.ra = d;
	this.G = e;
	this.L = -1;
	this.C = new es;
	a = K(this.Jua, this);
	b = K(this.Iua, this);
	Vfb(c.A, this.F, a, c.F, b)
}
L(yG, tG);
F = yG.prototype;
F.eV = q;
F.oU = 0;
F.Sd = m;
F.Jua = function(a) {
	this.Sd = a ? a : new AF(this.F, this.W, l, -1, [], []);
	this.C.zb(this)
};
F.Iua = function(a) {
	this.C.Bd(a);
	this.G(a)
};

function zG(a, b, c, d) {
	a.Y.write(b, K(a.JRa, a, c, d), K(a.KRa, a, c))
}
F.JRa = function(a, b) {
	a.zb(b)
};
F.KRa = function(a, b) {
	a.Bd(b);
	this.G(b)
};
F.VKa = function() {
	this.oU--;
	0 == this.oU && this.dispatchEvent(ya)
};
F.joa = function(a, b) {
	if (xG(this)) this.ra.Zf(Error(rqa));
	else {
		or(this.A, ym());
		var c = this.Sd;
		DF(c, 1);
		c.vu = 0 < b.length ? b.concat() : m;
		sn(c.W, b);
		this.oU++;
		gs(a, this.VKa, this);
		zG(this, [this.Sd, this.A], a)
	}
};
F.sS = jm(164);
F.NP = jm(128);
F.Yqa = function() {
	return this.Sd.se()
};
F.zJ = jm(98);
F.EE = jm(105);
F.hU = function() {
	return 0 < this.Sd.W.length || !this.eV && 0 < this.Sd.F.length
};
F.Gfa = function() {
	return 0 < this.oU
};
F.MP = jm(73);
F.SK = function() {
	for (var a = this.Sd.F, b = [], c = 0; c < a.length; c++) sn(b, a[c].C);
	sn(b, this.Sd.W);
	return b
};
F.VJ = jm(162);
F.OP = jm(1);
F.WJ = function() {
	return this.L > this.Sd.se()
};
F.koa = D(q);
F.FY = D(l);
F.RS = jm(6);
F.Dw = function() {
	return Gfb(this.Sd)
};
F.uqa = function(a) {
	this.Sd || this.ra.Zf(Error(Hfa));
	this.L = a;
	this.hU() ? a < this.Sd.se() && f(Error("Local pending queue ahead of initial model version")) : Ifb(this.Sd, a)
};
F.fqa = function(a) {
	this.Sd.clear();
	this.eV = q;
	zG(this, [this.Sd], a)
};
F.O = function() {
	O(this.Sd);
	yG.M.O.call(this)
};

function AG(a) {
	this.C = [];
	this.A = [];
	this.F = a
}
L(AG, tG);
F = AG.prototype;
F.mT = -1;
F.HL = m;
F.AB = m;
F.W1 = q;
F.joa = function(a, b) {
	sn(this.C, b);
	this.AB == m && (this.AB = ym());
	a.zb(k)
};
F.NP = jm(127);
F.SK = function() {
	return qn(this.A, this.C)
};
F.VJ = jm(161);
F.OP = jm(0);
F.EE = jm(104);
F.hU = function() {
	return !!this.C.length
};
F.Gfa = function() {
	return !!this.C.length || !! this.A.length
};
F.MP = jm(72);
F.Yqa = C("mT");
F.fqa = function(a) {
	this.C = [];
	this.A = [];
	this.AB = this.HL = m;
	this.W1 = q;
	a.zb(k)
};
F.FY = D(q);
F.koa = function() {
	return Bhb(this.HL) || Bhb(this.AB)
};

function Bhb(a) {
	a = a != m ? ym() - a : m;
	return a != m && 18E4 < a
}
F.sS = jm(163);
F.WJ = D(q);
F.uqa = im("mT");
F.RS = jm(5);
F.Dw = C("W1");
F.O = function() {
	AG.M.O.call(this);
	delete this.A;
	delete this.C
};

function Chb(a, b) {
	a.Zf(Error(zla + b.message))
};

function Dhb() {}
L(Dhb, sG);

function Ehb(a, b, c) {
	this.L = b;
	this.A = c;
	this.K = kF.ya();
	this.startLoad = ju(a, this.FIa, this);
	this.loadModelChunk = ju(a, this.EIa, this);
	this.endLoad = ju(a, this.DIa, this)
}
L(Ehb, Dhb);
F = Ehb.prototype;
F.uL = m;
F.RR = m;
F.E1 = -1;
F.FIa = function(a, b) {
	this.uL = a;
	this.RR = b;
	this.F(a)
};
F.EIa = function(a) {
	this.uL === m && f(Error("Failed to initialize WarmStartDocumentLoader before processing first chunk."));
	var b = ym();
	a = z9a(this.L, a);
	b = ym() - b;
	this.K.PE(PJa, b);
	this.E1++;
	if (this.A) {
		b = ym();
		(!a || !a.length) && f(Error("Found empty chunk during warm start."));
		var c = new lF(a, m, this.RR, m, this.uL, this.uL, m),
			d = this.A,
			c = new mF(c, 0, this.E1),
			e = 0 == this.E1;
		d.qP ? !d.A || d.ra.log(Error(Oja)) : ffb(d.A, c, e);
		this.RR !== m && (d = this.A, c = this.RR, c != m && (d.rf ? JUa(d.rf, c) : d.fJ = c));
		b = ym() - b;
		this.K.PE(XJa, b)
	}
	this.G(new jF(a),
	this.uL)
};
F.DIa = function() {
	this.A && Fhb(this.A);
	this.C()
};

function BG(a) {
	this.C = a || km;
	this.A = {};
	this.F = {}
}
L(BG, M);
F = BG.prototype;
F.Ida = l;
F.x0 = q;

function CG(a, b, c) {
	a.x0 && f(Error("Rules may only be added before the manager is started."));
	c = {
		Hda: Zn(b),
		zb: c
	};
	for (var d = 0; d < b.length; ++d) {
		var e = b[d],
			g = a.A[e];
		g == m && (g = [], a.A[e] = g);
		g.push(c)
	}
	return a
}
F.gf = function(a) {
	this.x0 || f(Error("May only pass milestones once the manager has been started "));
	this.Ida || f(Error("One of the milestone managers callbacks threw an exception, disabling the manager permanently."));
	this.F[a] = l;
	var b = this.A[a];
	if (b) {
		delete this.A[a];
		for (var c = 0; c < b.length; ++c) {
			var d = b[c];
			delete d.Hda[a];
			if (Rn(d.Hda)) try {
				d.zb.apply(this.C)
			} catch (e) {
				this.Ida = q, f(e)
			}
		}
	}
	return this
};

function DG(a, b) {
	a.F[b] || f(Error("Milestone " + b + " has not been passed."))
}
F.start = function() {
	this.x0 = l
};
F.O = function() {
	BG.M.O.call(this);
	delete this.C;
	delete this.A
};

function EG() {}
EG.prototype.F = q;
EG.prototype.A = m;
EG.prototype.G = m;

function Ghb() {}
L(Ghb, EG);
Ghb.prototype.C = D(q);

function Hhb(a) {
	this.K = !! a
}
L(Hhb, EG);
Hhb.prototype.C = function() {
	return this.A != m && !this.A && this.G ? q : !this.K || this.F
};

function Ihb(a, b, c, d, e) {
	this.L = a;
	this.F = c;
	this.G = d;
	this.C = kF.ya();
	this.A = new BG(this);
	CG(CG(CG(this.A, [Eva, Cva], this.ova), [Dva, Ava], this.pva), [Dva, Bva], this.kva).start();
	this.R = new S(this);
	this.R.A(b, Vc, this.mva).A(b, Wc, this.nva).A(b, Xc, this.lva);
	this.W = q;
	this.K = e || m
}
L(Ihb, bq);
F = Ihb.prototype;
F.iQ = 0;
F.tda = l;
F.$fa = l;
F.PR = q;
F.TQ = m;
F.jK = m;
F.Jba = q;
F.gr = m;

function Jhb(a) {
	a.TQ || f(Error(tna));
	return a.TQ
}

function Khb(a, b) {
	var c = ym();
	Lhb(a.L, b);
	c = ym() - c;
	a.C.PE(SJa, c);
	a.Jba || (a.C.setTime(WCa), a.C.setTime(nNa), eq(a.Aya, 0, a), a.G.F = l, a.Jba = l, a.F.A.gf(zva), a.A.gf(Ava))
}
F.mva = function(a) {
	this.iQ = a.A;
	this.A.gf(Cva)
};
F.nva = function(a) {
	this.tda && (this.PR = this.iQ != a.A, this.G.A = this.PR, this.tda = q, this.K && this.PR && this.K.CA(SAa));
	a = a.C;
	a != m && (this.gr = this.gr ? this.gr.append(a) : a, this.G.C() || Mhb(this))
};
F.Aya = function() {
	this.cd() || this.$fa && this.C.setTime(iCa)
};
F.ova = function() {
	Jhb(this).vb(this.iQ);
	this.A.gf(Dva);
	this.G.C() || Mhb(this)
};
F.pva = function() {
	!this.PR && !this.jK && Nhb(this)
};
F.lva = function() {
	this.$fa = q;
	this.A.gf(Bva)
};
F.kva = function() {
	var a = Jhb(this);
	if (!xG(a) && this.jK) {
		var b = new jF(a.SK());
		this.gr = this.gr ? this.gr.append(b) : b
	}
	Mhb(this);
	this.C.setTime(NMa);
	b = this.F;
	b.W = this.iQ;
	b.A.gf(Gva);
	this.C.setTime(aCa);
	a.Dw() || (xG(a) ? Ap(this.R, a, Zc, this.JAa) : (Nhb(this), Ohb(this.F)))
};

function Mhb(a) {
	a.gr && (Khb(a, a.gr), a.gr = m)
}
F.JAa = function() {
	this.gr && f(Error("All model parts should be applied before resolving anachronism."));
	Khb(this, new jF(Jhb(this).SK()));
	Nhb(this);
	Ohb(this.F)
};

function Nhb(a) {
	a.W || (a.F.A.gf(xva), a.W = l)
}
F.O = function() {
	O(this.R);
	delete this.R;
	O(this.A);
	delete this.A;
	delete this.TQ;
	delete this.L;
	delete this.F;
	Ihb.M.O.call(this)
};

function Phb(a, b, c, d, e) {
	d = d && go(jo(), Iwa) ? new Hhb : !d && go(jo(), Jwa) ? new Hhb(l) : new Ghb;
	return new Ihb(a, b, c, d, e)
};

function FG(a) {
	pq.call(this, a)
}
L(FG, pq);
var Qhb = {
	CQa: xAa,
	DQa: yAa
};
FG.prototype.ha = function() {
	FG.M.ha.call(this);
	var a = Mea + (vb + Qhb.CQa + Paa + (aQa + (vb + Qhb.DQa + Qaa)));
	this.Tb().innerHTML = a
};
FG.prototype.za = function() {
	FG.M.za.call(this);
	var a = this.ma(),
		b = a.N(xAa),
		a = a.N(yAa);
	T(this).A(b, Od, this.A).A(a, Od, this.C)
};
FG.prototype.A = function() {
	Ft(lEa)
};
FG.prototype.C = function() {
	this.dispatchEvent(If)
};

function Rhb(a, b, c, d) {
	this.A = a;
	this.R = new S(this);
	this.R.A(a, esa, this.z3);
	this.ra = c;
	a.Dw() && (xG(a) ? go(jo(), Kg) ? (this.z3(), c.log(Error(Hna), {
		modelRevision: b,
		queueRevision: vG(a)
	})) : d ? km.location = d : c.Zf(Error(Ina)) : this.z3())
}
L(Rhb, M);
F = Rhb.prototype;
F.sT = m;
F.z3 = function() {
	if (this.A.$h()) {
		if (!this.sT) {
			var a = new FG;
			N(this, a);
			a.Va();
			this.R.A(a, If, this.ZGa);
			this.sT = Yz(a.N(), Il);
			this.ra.K = l
		}
		Wz.ya().postMessage(this.sT)
	} else this.ra.Zf(Error(Gna))
};
F.ZGa = function() {
	this.ra.log(Error(Tqa), {
		queueRevision: vG(this.A),
		queueLength: this.A.SK().length
	});
	gs(this.A.U8(), this.RKa);
	Xz(Wz.ya(), this.sT.aa())
};
F.RKa = function() {
	w8a(window)
};
F.O = function() {
	O(this.R);
	Rhb.M.O.call(this)
};

function Shb(a, b, c, d, e, g, h, n, p, t, u, x, y, B, E, H) {
	E && H && f(Error("Cannot provide both cold and warm start document loaders."));
	var J = go(jo(), Kg);
	this.Aa = b;
	this.A = c;
	this.na = d;
	this.ra = x;
	this.Wb = t;
	x.A.sid = this.Aa;
	x.A.isColdStartOffline = J.toString();
	h9a(x, EKa, function() {
		return a.KO.toString()
	});
	this.yb = p;
	this.Ta = g;
	this.C = m;
	this.R = new S(this);
	this.Ha = y;
	d && !J && (this.na.setTitle(a.fh), a.tD ? Thb(d, a.tD) : go(jo(), rva) && (d.HX = l), (b = a.F) && Uhb(d, b));
	this.Y = b = m;
	J ? (ohb(), b = E || new zhb(a, x), E || N(this, b)) : (this.Y = H || new Ehb(x,
	e, d), H || N(this, this.Y));
	(E = this.Y || b) ? (this.Ma = Phb(h, E, this, J, B), this.W = this.Na = this.Ba = this.Ub = this.L = this.F = this.K = m, this.ea = q, this.G = m, d ? (this.C = new bgb(l), e = wm(agb, e, x), this.G = new bhb(a, n, this.Aa, d, b, e, Wz.ya(), x, this.C, !J, k, k, B, u), Ap(this.R.A(this.G, Ic, K(this.Ysa, this, iF)), this.G, Qc, this.Xsa)) : (this.A.gf(ue), Vhb(this, m))) : x.Zf(Error(Kma))
}
L(Shb, M);
var GG = {
	Vra: xva,
	Xra: zva,
	Lz: Gva,
	Wra: yva,
	e4a: ue,
	Bq: Fva
};

function HG(a) {
	DG(a.A, ue);
	return a.F
}

function Whb(a) {
	DG(a.A, Fva);
	a.K || f(Error("Pending queue should be created local store is initialized."));
	return a.K
}
F = Shb.prototype;
F.sb = function() {
	DG(this.A, ue);
	return this.Ub
};

function Xhb(a) {
	DG(a.A, Gva);
	a.W === m && f(Error("Initial revision should be set after document is loaded."));
	return a.W
}
F.Xsa = function(a) {
	this.L = a.xZ;
	this.Ub = a.document;
	this.F = a.C;
	this.Ba = a.A;
	this.A.gf(ue);
	Vhb(this, 1 == a.A ? this.F : m);
	if (this.Ha && this.F) {
		a = this.Ha;
		var b = K(this.F.K, this.F);
		a.cd() || a.F.push(b)
	}
};

function Vhb(a, b) {
	var c = a.Aa,
		d = a.Ub,
		e = a.ra,
		g = m;
	a.Wb && (b && d) && (g = wm(Chb, e), g = 3 <= b.A.Lq() ? (new yG(d, c, b, e, g)).C : m);
	g ? c = g : (d = new es, d.zb(new AG(c)), c = d);
	gs(c, a.aFa, a)
}
F.aFa = function(a) {
	this.K = a;
	a.$h() && f(Error("Pending queue may not be initialized before the model loader"));
	Ap(this.R, a, Vsa, this.XFa);
	var b = this.Ma;
	b.TQ = a;
	b.jK = uG(a) || a.Dw();
	b.K && b.jK && b.K.CA(VAa);
	b.G.G = !b.jK;
	b.A.gf(Eva)
};
F.XFa = function() {
	Yhb(this.Ta, this.K);
	this.A.gf(Fva);
	var a;
	if (this.L && this.Ub) {
		var b = vhb(this.L),
			c = uhb(b);
		if (c) {
			a = this.Ub;
			var d = c.A,
				e, c = this.L.aa(),
				g = jr(a, fsa),
				c = g ? g[c] || m : m;
			e = c != m ? c : 0;
			b.F || (e = 1);
			var c = MUa(a),
				h;
			switch (0) {
				case 0:
					h = km.location.href;
					break;
				case 1:
					I(d) || f(Error("Action path is needed to build warm start action URL."));
					h = phb(thb(b, c.type), a.aa(), b.C, d);
					break;
				default:
					h = phb(thb(b, c.type), a.aa(), b.C)
			}
			c = thb(b, c.type);
			g = b.C;
			b = h;
			a: {
				h = c.C;
				if (I(d)) {
					for (var n = 0; n < h.A.length; n++) {
						var p = h.A[n];
						if (hhb(p,
						d)) {
							e = jhb(p, e, d);
							break a
						}
					}
					f(Error("No action group for the given online action"))
				}
				e = jhb(h.C, e)
			}
			d = MUa(a);
			n = e;
			h = EUa(a, tva);
			p = g.A;
			e = c.A;
			p && (e = Sv(Kv(c.A), Ua + p), (p = Iv(c.A)) && (e = Sv(e, p)));
			e = Sv(e, n);
			n = [];
			n.push(tPa + g.C);
			d.Eaa && n.push(bFa + d.Eaa);
			d.Nwa && n.push(oDa);
			h && (g = h[28]) && n.push(sva + g);
			g = e += Cb + n.join(Ba);
			d = {};
			d.id = a.aa();
			a: {
				if (e = EUa(a, tva)) {
					if (om(e)) {
						e = 0 == e.length ? Dd : ee;
						break a
					}
					f(Error("Non-array keyData"))
				}
				e = m
			}
			e && (d.cm = e);
			d[jKa] = String( !! DUa(a, Qg));
			d.ouri = b;
			(a = CUa(a, QNa)) && c.K && Xn(d, c.K(a));
			a = r;
			for (var t in d) 0 < a.length && (a += Ba), a += Im(t) + zb + Im(d[t]);
			a = Lv(g) + (Im(a) ? va + Im(a) : r)
		}
	}
	this.Na = new Rhb(Whb(this), this.W, this.ra, a)
};
F.vb = function() {
	if (!this.ea && (this.ea = l, this.G)) {
		var a = this.G;
		if (a.L && 2 != d8a()) a.So();
		else {
			var b = a.Na,
				c = K(a.cPa, a),
				d = K(a.z$, a),
				e = a.ra,
				a = K(a.gP, a, a.So);
			!$q || !cr(ho(jo(), bya)) ? e.Zf(Error(Gfa)) : (b = wm(ahb, b, 35E3, c, d, e), yfb(b, d, e, a))
		}
	}
};
F.Ysa = function(a) {
	a = new a(this.yb);
	N(this, a);
	a.Va();
	Wz.ya().postMessage(Yz(a.N(), Sg))
};

function Ohb(a) {
	DG(a.A, xva);
	if (a.na) {
		var b = a.na;
		b.K.wj || b.K.zb(l)
	}
	a.C && (b = a.C, b.A = l, cgb(b));
	a.A.gf(yva)
}
F.O = function() {
	ko(this.R, this.G, this.K, this.Ma, this.Na);
	Shb.M.O.call(this)
};
nu++;

function IG(a, b, c, d) {
	this.W = a;
	this.A = b;
	this.K = c;
	this.L = d;
	this.F = [];
	this.C = [];
	up(a, fta, K(this.Y, this))
}
L(IG, M);
IG.prototype.Y = function(a) {
	if (!this.cd()) {
		var b = obb(this);
		if (b) {
			if (up(this.W, Al, K(this.G, this)), a.Mc.returnValue = b, Eo) return b
		} else this.G()
	}
};

function obb(a) {
	var b = r;
	a = a.C;
	for (var c = 0; c < a.length && !b; ++c) b = a[c]() || r;
	return b
}
IG.prototype.G = function() {
	if (!this.cd()) {
		for (var a = this.F, b = 0; b < a.length; ++b) a[b]();
		if (a = this.A) a = this.A.Wd(nca).Hf(Lg, this.K, yk, this.L, dPa, this.A.MEa()).A;
		this.dispose();
		if (a) try {
			(new Image).src = a
		} catch (c) {}
	}
};
IG.prototype.O = function() {
	IG.M.O.call(this);
	O(this.A);
	delete this.A;
	delete this.F;
	delete this.C
};

function Zhb(a, b) {
	R.call(this, $f);
	this.C = a;
	this.A = b
}
L(Zhb, R);

function $hb() {
	this.Fa = JG
}
L($hb, bq);

function KG(a, b) {
	var c = a.Fa;
	b != c && (a.Fa = b, a.dispatchEvent(new Zhb(c, b)))
}
$hb.prototype.kb = C(ac);

function LG(a, b) {
	this.C = a;
	this.A = b
}
function MG(a) {
	return 1 == a.A
}
var JG = new LG("IDLE", 1),
	aib = new LG("BUSY", 1),
	bib = new LG("RECOVERING", 2),
	NG = new LG("OFFLINE", 3),
	cib = new LG("SERVER_DOWN", 3),
	dib = new LG("FORBIDDEN", 4),
	eib = new LG("AUTH_REQUIRED", 4),
	fib = new LG("INCOMPATIBLE_SERVER", 5),
	OG = new LG(rfa, 5),
	PG = new LG("SAVE_ERROR", 5);
LG.prototype.toString = C(Jb);

function QG() {
	this.R = new S(this);
	this.F = m;
	this.A = {};
	this.C = {}
}
L(QG, M);
QG.prototype.bind = function(a, b, c) {
	c = new gib(a, !! b, !! c);
	var d = a.aa(),
		e = this.A[d];
	e && !e.ob(c) && f(Error("Tried to bind the same action twice with different options."));
	e || (b || (this.C[a.aa()] = new hib(a.Nb(vg), DRa(a))), this.A[d] = c, iib(this, c));
	return this
};

function jib(a, b) {
	a.F = b;
	a.R.A(b, $f, a.G);
	kib(a)
}
QG.prototype.G = function(a) {
	MG(a.C) != MG(a.A) && kib(this)
};

function kib(a) {
	for (var b in a.A) iib(a, a.A[b])
}

function iib(a, b) {
	if (a.F) {
		var c = b.action,
			d = !b.A,
			e = b.C,
			g = a.F.kb(),
			e = MG(g) || e && g == PG;
		c.Ca(e == d, iKa);
		d && (e ? (d = a.C[c.aa()], ERa(c, d.C), c.setProperty(vg, d.A)) : (a.C[c.aa()] = new hib(c.Nb(vg), DRa(c)), ERa(c, q), g == NG && c.setProperty(vg, Sqa)))
	}
}
QG.prototype.O = function() {
	O(this.R);
	QG.M.O.call(this)
};

function hib(a, b) {
	this.A = a;
	this.C = b
}
function gib(a, b, c) {
	this.action = a;
	this.A = b;
	this.C = c
}
gib.prototype.ob = function(a) {
	return a.action.aa() == this.action.aa() && a.A == this.A && a.C == this.C
};

function lib(a) {
	this.A = [];
	Hn(this, a, r, [])
}
L(lib, Gn);

function mib() {
	this.A = m
}
L(mib, cx);
mib.prototype.update = function(a) {
	a = new lib(a);
	a.Ua[0] && (this.C = a.Ua[0])
};
mib.prototype.Hu = function(a) {
	a = a.get(WPa);
	a != m && (this.C = a)
};

function RG(a) {
	this.A = m;
	this.F = a;
	this.C = {}
}
L(RG, cx);
RG.prototype.update = function(a) {
	for (var b in a) this.C[b] = a[b].dismissed
};
RG.prototype.Hu = function(a) {
	a = a.W();
	for (var b in a) this.C[b] = a[b].dismissed
};
RG.prototype.O = function() {
	delete this.C;
	RG.M.O.call(this)
};

function nib(a, b) {
	R.call(this, IDa, a);
	this.A = b
}
L(nib, R);

function SG() {
	this.R = new S(this);
	this.A = {}
}
L(SG, bq);
SG.prototype.F = jm(37);

function TG(a, b) {
	for (var c in b) a.A[c] = b[c]
}
function UG(a, b) {
	var c = {}, d;
	for (d in b) a.A[d] != b[d] && (a.A[d] = b[d], c[d] = b[d]);
	Rn(c) || a.dispatchEvent(new nib(a, c))
}
SG.prototype.O = function() {
	O(this.R);
	SG.M.O.call(this)
};

function oib() {
	this.C = this.A = q;
	this.F = l
}
L(oib, bq);

function pib(a) {
	SG.call(this);
	this.C = a;
	this.R.A(this.C, xEa, this.G);
	TG(this, qib(this))
}
L(pib, SG);
pib.prototype.G = function() {
	UG(this, qib(this))
};

function qib(a) {
	var b = {};
	b[qNa] = a.C.C;
	b[rNa] = a.C.F;
	b[pNa] = a.C.A;
	return b
};

function rib() {
	var a = LRa(4294967296).toString(16),
		a = Nm(Xa, Math.max(0, 8 - a.length)) + a;
	return LRa(2147483648).toString(16) + a
};

function sib(a) {
	this.Ed = a || m
}
sib.prototype.A = function(a) {
	if (!this.Ed) return m;
	var b = xRa(this.Ed.yh(), function(b) {
		return b.F == a
	});
	return b ? b.Pd() : m
};

function tib(a) {
	this.A = a
}
tib.prototype.Pa = function(a) {
	return [this.A.Pa(a.C), a.G, a.F, a.se(), a.A, a.L]
};

function VG() {
	this.sd = {}
}
VG.prototype.get = function(a) {
	this.sd[a] || f(Error("No value for key " + a));
	return this.sd[a]
};
VG.prototype.set = function(a, b) {
	this.sd[a] = b
};

function uib(a) {
	this.L = a;
	this.F = new VG;
	this.K = new VG;
	this.A = new VG;
	this.C = new VG;
	this.G = new VG
}
F = uib.prototype;
F.apply = function(a, b) {
	return this.F.get(a.xa()).apply(a, b)
};
F.Vi = function(a, b) {
	return this.F.get(a.xa()).Vi(a, b)
};
F.oi = function(a, b) {
	return this.K.get(a.xa()).oi(a, b)
};
F.Pa = function(a) {
	return this.A.get(a.xa()).Pa(a)
};
F.ri = function(a) {
	var b = this.L.xa(a);
	return this.A.get(b).ri(a)
};
F.PK = function(a, b) {
	return this.C.get(a.xa()).PK(a, b)
};
F.QK = function(a, b) {
	return this.C.get(a.xa()).QK(a, b)
};
F.Ap = function(a, b) {
	return this.G.get(a.xa()).Ap(a, b)
};
F.Cp = function(a) {
	return this.G.get(a.xa()).Cp(a)
};

function WG(a, b, c) {
	a.F.set(b, c)
}
function XG(a, b, c) {
	a.K.set(b, c)
}
function YG(a, b, c) {
	a.G.set(b, c)
};

function vib() {
	this.A = {}
}
vib.prototype.register = function(a, b) {
	this.A[a] && f(Error("Bubble already registered."));
	this.A[a] = b
};

function ZG(a) {
	this.C = a || Ko();
	Sr.call(this)
}
var wib;
L(ZG, Sr);
F = ZG.prototype;
F.rM = m;
F.Xa = m;
F.Zt = m;
F.set = function(a, b, c, d) {
	Sr.prototype.set.call(this, a, b);
	c && (this.rM = a);
	d && (this.Zt = a);
	return this
};

function $G(a, b, c, d) {
	return a.set(b.key, b.caption, c, d)
}
F.Va = function() {
	if (this.Xa) {
		this.Xa.innerHTML = r;
		var a = Ko(this.Xa);
		Rr(this, function(b, c) {
			var d = a.ha(Cd, {
				name: c
			}, b);
			c == this.rM && (d.className = ADa);
			this.Xa.appendChild(d)
		}, this)
	}
};
F.N = C(Yc);
F.ma = C(Jb);
F.Fo = jm(18);
var xib = {
	key: sj,
	caption: Sma
}, yib = {
	key: Ed,
	caption: Kb
}, zib = {
	key: oQa,
	caption: Cra
}, Aib = {
	key: kj,
	caption: Hma
}, Bib = {
	key: OMa,
	caption: Nc
}, Cib = {
	key: Xd,
	caption: "Continue"
};

function Dib() {
	return $G(new ZG, xib, l, l)
}
function Eib() {
	return $G($G(new ZG, xib, l), yib, q, l)
}
"undefined" != typeof document && (wib = Dib(), Eib(), $G($G(new ZG, zib, l), Aib, q, l), $G($G($G(new ZG, zib), Aib, l), yib, q, l), $G($G($G(new ZG, Cib), Bib), yib, l, l));
var Fib = G;

function Gib(a) {
	tm(a) || (a = K(a.focus, a));
	Fib = a
};

function aH() {
	this.C = {};
	this.A = {};
	this.R = new S(this)
}
L(aH, M);
mm(aH);
aH.prototype.F = jm(167);
aH.prototype.O = function() {
	delete this.C;
	delete this.A;
	O(this.R);
	delete this.R;
	aH.M.O.call(this)
};

function bH(a) {
	this.A = a;
	Gib(function() {
		zXa(a, pe)
	});
	this.R = new S(this)
}
L(bH, M);
F = bH.prototype;
F.uT = 0;
F.wga = jm(63);
F.yga = jm(32);
F.xga = jm(52);
F.O = function() {
	bH.M.O.call(this);
	O(this.R);
	delete this.R;
	delete this.A
};

function cH() {
	ou.call(this, 2)
}
L(cH, ou);
cH.prototype.F = function() {
	this.qe(3)
};
cH.prototype.C = function() {
	var a = Q && !Io(bb) && this.j4 ? 2 : 1;
	this.qe(a)
};

function Hib(a, b, c) {
	b = (b || window).location.href;
	if (this.C = a || !! b && -1 != b.indexOf(uha)) this.A = c || m, this.A.Ca(l), this.A.jDa(l)
}
L(Hib, M);
Hib.prototype.O = function() {
	Hib.M.O.call(this);
	this.A && (this.A.jDa(q), delete this.A)
};
var Iib = new Hib;

function Jib(a) {
	this.A = a
}
F = Jib.prototype;
F.init = function() {
	for (var a = this.A, b = 0; b < a.length; b++) a[b].init()
};
F.clear = function() {
	for (var a = this.A, b = 0; b < a.length; b++) a[b].clear()
};
F.RT = function(a, b) {
	for (var c = this.A, d = 0; d < c.length; d++) c[d].RT(a, b)
};
F.CA = function(a) {
	for (var b = this.A, c = 0; c < b.length; c++) b[c].CA(a)
};
F.log = function(a, b) {
	for (var c = this.A, d = 0; d < c.length; d++) c[d].log(a, b)
};

function Kib(a, b, c) {
	this.cb = a;
	this.C = b;
	this.A = c
}
Kib.prototype.aa = C(Fd);
Kib.prototype.getDirectory = C(Eb);

function Lib(a, b, c, d, e) {
	this.$i = a;
	this.C = b;
	this.G = c;
	this.F = d;
	this.A = e
}
Lib.prototype.ld = C(za);
Lib.prototype.Ra = C(cc);

function Mib(a, b, c) {
	this.F = a;
	this.C = b;
	this.A = c
}
Mib.prototype.Xb = C($b);

function Nib(a, b, c) {
	this.A = a;
	this.C = b;
	a = {};
	for (var d in this.A) {
		b = this.A[d];
		for (var e = 0, g; g = b[e]; e++) for (var h = 0, n; n = g.A[h]; h++) if (!n.C) {
			var p = n.Xb(),
				t = p.match(uba + this.C + Nra + n.A + yba),
				t = t && 4 == t.length ? t[2] : m,
				u = Oib[n.A];
			a[p] = t ? t + (u || r) : m;
			u || c.log(Error(Wla + n.A))
		}
	}
	this.F = a
}
var Oib = {
	truetype: ".ttf",
	"embedded-opentype": ".eot",
	svg: ".svg",
	swf: ".swf",
	woff: ".woff",
	"x-woff2": ".woff2"
};

function Pib(a, b, c) {
	this.C = a;
	this.F = b;
	this.ra = c;
	this.A = {}
}
F = Pib.prototype;
F.Kca = function(a) {
	if (!go(jo(), $wa)) return ls(Lna);
	var b = a.aa(),
		c = b.ld();
	a = new es;
	var d = this.A[c];
	d ? a.zb(new CD(b, d)) : (d = [c], b = K(this.oFa, this, b, a), c = K(a.Bd, a, Kia + c), this.C.A.gfa(d, b, c));
	return a
};
F.oFa = function(a, b, c) {
	if (c && c[0]) {
		c = c[0];
		for (var d = c.ld(), e = c.Nb(dDa), g = [], h = 0; h < e.length; h++) {
			for (var n = e[h], p = [], t = n.source, u = 0; u < t.length; u++) {
				var x = t[u];
				p.push(new Ugb(x.format, x.isSystemFont, x.url))
			}
			g.push(new jG(n.fontFamily, n.isMenuFont, n.style, n.weight, p))
		}
		e = [];
		for (h = 0; h < g.length; h++) {
			n = g[h];
			p = [];
			for (t = 0; t < n.ox().length; t++) u = n.ox()[t], p.push(new Mib(u.Xb(), u.F, u.A));
			e.push(new Lib(n.ld(), n.A, n.Ra(), n.F, p))
		}
		g = {};
		g[d] = e;
		c = new Nib(g, c.Nb(SPa), this.ra);
		this.A[a.ld()] = c;
		b.zb(new CD(a, c))
	} else b.Bd(Lia)
};
F.sync = function(a) {
	if (!this.C.C || !go(jo(), bxa)) return ks(a);
	for (var b = a.ng(), c = a.aa(), c = b.A[c.ld()], d = {}, e = b.F, g = new es, h = 0; h < c.length; h++) for (var n = c[h].A, p = 0; p < n.length; p++) {
		var t = n[p];
		if (!t.C) {
			var u = e[t.Xb()];
			if (!u) return g.Bd(ffa + t.Xb()), g;
			d[u] = new Kib(u, t.Xb(), r)
		}
	}
	this.F.sL(d, [iDa], q, K(this.ZBa, this, a, g, b));
	return g
};
F.ZBa = function(a, b, c, d) {
	if (d.e0()) b.Bd(Uia);
	else if (d.LR()) b.zb(a);
	else {
		var e = Wn(c);
		a = a.aa();
		var g = e.A[a.ld()];
		c = c.F;
		for (var h = 0; h < g.length; h++) for (var n = g[h].A, p = 0; p < n.length; p++) {
			var t = n[p],
				u = c[t.Xb()];
			!t.C && u && (n[p] = new Mib(d.d0(u), q, t.A))
		}
		var x;
		a: {
			for (var y in e.A) {
				d = [];
				x = e.A[y];
				for (g = 0; g < x.length; g++) {
					c = x[g];
					h = [];
					for (n = 0; n < c.A.length; n++) p = c.A[n], h.push(new Ugb(p.A, p.C, p.Xb()));
					d.push(new jG(c.ld(), c.C, c.Ra(), c.F, h))
				}
				x = new iG(y, e.C, d, l);
				break a
			}
			f(Error("Can not create FontMetadata from invalid record"))
		}
		this.C.write([x],
		K(this.ABa, this, a, b, e), K(b.Bd, b, Pia + a.ld()))
	}
};
F.ABa = function(a, b, c) {
	this.A[a.ld()] = c;
	b.zb(new CD(a, c))
};

function Qib(a) {
	for (var b = a.sources, c = [], d = 0; d < b.length; d++) c.push(new Mib(b[d].url, !! b[d].isLocal, b[d].format));
	return new Lib(a.fontFamily, !! a.menuFont, a.style, a.weight, c)
};

function Rib(a, b, c, d) {
	this.G = a;
	this.ra = b;
	this.F = d || m;
	this.A = {};
	if (c) {
		a = Sib(this, c);
		for (var e in a) this.A[e] = a[e]
	}
}
Rib.prototype.C = function(a) {
	for (var b = [], c = [], d = [], e = 0; e < a.length; e++) {
		var g = a[e].aa();
		b.push(g);
		var h = g.ld(),
			n = this.A[h];
		n ? d.push(new CD(g, n)) : c.push(h)
	}
	a = new es;
	c.length ? this.G && (b = KD(this.G.Wd(lca), K(this.K, this, a, b, d)).Hf(HCa, c.join(La)), this.F && b.Hf(Lg, this.F), HD(b)) : a.zb(new DD(d, []));
	return a
};

function Sib(a, b) {
	var c = {}, d = b.fontMetadataMap || {}, e;
	for (e in d) {
		for (var g = d[e], h = {}, n = h, p = e, t = [], u = g.fontFaces, x = 0; x < u.length; x++) t.push(Qib(u[x]));
		n[p] = t;
		c[e] = new Nib(h, g.version, a.ra)
	}
	return c
}
Rib.prototype.K = function(a, b, c, d) {
	if (d = d.Ce()) {
		var e = Sib(this, d),
			g = {};
		d = {};
		for (var h = 0; h < b.length; h++) g[b[h].ld()] = b[h], d[b[h].ld()] = q;
		for (var n in e) h = e[n], this.A[n] = h, g[n] ? c.push(new CD(g[n], h)) : this.ra.log(Error(dja));
		for (h = 0; h < c.length; h++) n = c[h].aa().ld(), d[n] = l;
		n = [];
		for (h = 0; h < b.length; h++) d[b[h].ld()] || n.push(b[h]);
		a.zb(new DD(c, n))
	} else a.Bd(Lma)
};

function Tib(a) {
	for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = l;
	this.G = b;
	this.A = {};
	this.C = {};
	this.F = {}
}
L(Tib, bq);
Tib.prototype.update = function(a) {
	if (a) for (var b in a) {
		var c = a[b],
			d = c,
			e = u4a(d);
		e && (this.C[b] = e, on(d, e));
		c.length && (this.A[b] = c, this.F[b.toLowerCase()] = b)
	}
	v4a(this);
	b = [];
	for (var g in a) this.A[g] && (b = b.concat(g));
	0 < b.length && this.dispatchEvent(new G3a(this, b))
};

function F3a(a, b) {
	var c = a.A[b];
	return c ? c : m
}
function u4a(a) {
	if (a) for (var b = 0; b < a.length; b++) {
		var c = a[b];
		if (c.C) return c
	}
	return m
}

function v4a(a) {
	for (var b in a.A) a.G[b] && delete a.A[b];
	for (b in a.C) a.G[b] && delete a.C[b];
	for (b in a.F) a.G[a.F[b]] && delete a.F[b]
};

function Uib(a, b, c) {
	this.na = a;
	this.L = io(jo(), ch);
	this.Ha = go(jo(), LCa);
	this.Aa = this.G = this.F = m;
	this.Ba = b || m;
	this.W = this.ea = this.C = m;
	this.Ma = c || m;
	this.Y = new es;
	a = this.pga();
	for (b = 0; b < a.length; b++) js(this.Y, a[b]);
	gs(this.Y, K(this.fGa, this))
}
L(Uib, M);
F = Uib.prototype;
F.rf = m;
F.oP = m;
F.JT = m;
F.fJ = 0;
F.qP = q;
F.AM = m;
F.HX = q;
F.GP = m;

function Fhb(a) {
	var b = new es;
	if (a.qP || !a.rf) return b.zb(l), b;
	a.JT && (a.rf.setTitle(a.JT), a.JT = m);
	0 < a.fJ && (JUa(a.rf, a.fJ), a.fJ = 0);
	a.L && (a.rf.setProperty(ch, a.L), a.L = m);
	lr(a.rf, WEa, a.Ha);
	IUa(a.rf);
	a.AM && (KUa(a.rf, a.AM), a.AM = m);
	a.F && (LUa(a.rf, a.F), a.F = m);
	a.GP != m && (lr(a.rf, Qg, !a.GP), a.GP = m);
	if (a.G != m) {
		var c = a.Aa.aa();
		mr(a.rf, fsa, c, a.G);
		a.G = m
	}
	c = a.C && a.C.wj;
	a.dha(b);
	a.Ba && (a.ea && !a.C) && (a.C = a.Ba.xXa(a.rf, a.ea), a.ea = m);
	a.C && !c && (c = new es, js(b, c), tVa(a.C, K(a.dha, a, c)));
	return b
}
F.dha = function(a) {
	var b = [this.rf];
	this.W && (b = b.concat(this.W), this.W = m);
	this.oP.write(b, K(a.zb, a, l), this.Ma || k);
	this.HX && (this.oP.A.oia(this.na, G, k), this.HX = q)
};
F.fGa = function() {
	var a = this.rf;
	gfb(this.A, a.A);
	O(this.A);
	this.A = a.A;
	this.lr && (a.KE && (a.lr = l), this.lr = q);
	return Fhb(this)
};
F.pga = function() {
	return []
};
F.zP = function() {
	this.qP = l;
	this.F = this.AM = m
};
F.setTitle = function(a) {
	this.rf ? this.rf.setTitle(a) : this.JT = a
};

function Thb(a, b) {
	a.rf ? KUa(a.rf, b) : a.AM = b
}
function Uhb(a, b) {
	a.rf ? LUa(a.rf, b) : a.F = b
};

function dH(a, b, c, d) {
	this.K = new es;
	Uib.call(this, b, c, d);
	this.ra = a;
	this.A = new nF
}
L(dH, Uib);
dH.prototype.lr = q;
dH.prototype.pga = function() {
	return [this.K]
};
dH.prototype.zP = function() {
	dH.M.zP.call(this);
	O(this.A);
	this.A = m
};
dH.prototype.O = function() {
	this.rf || O(this.A);
	dH.M.O.call(this)
};

function Vib(a) {
	this.A = a
};

function Wib() {}
L(Wib, bq);

function eH(a, b, c) {
	this.C = a;
	this.ra = b;
	this.A = c;
	this.R = new S(this)
}
L(eH, Wib);
F = eH.prototype;
F.Iz = m;
F.BI = m;
F.wL = m;
F.uI = m;

function Yhb(a, b) {
	i9a(a.ra, xG(b).toString());
	a.ra.A.queueIsPersistent = b.FY().toString();
	h9a(a.ra, fMa, function() {
		return xG(b).toString()
	});
	h9a(a.ra, Ota, K(function() {
		return wr(this.C.A.Fa).toString()
	}, a));
	a.wL = b
}
function Xib(a) {
	a.wL || f(Error(tna));
	return a.wL
}
F.xR = function(a) {
	this.fra([a])
};
F.fra = function(a) {
	var b = Xib(this);
	b.koa() ? this.ra.Zf(Error(Mfa), Yib(this)) : (wG(b), b.joa(new es, a), b.dispatchEvent($c))
};

function Yib(a) {
	var b = {};
	a.BI && Xn(b, a.BI.I1());
	a.Iz && Xn(b, a.Iz.fVa());
	return b
}
F.E9 = jm(114);
F.O = function() {
	delete this.C;
	delete this.A;
	delete this.ra;
	delete this.uI;
	O(this.Iz);
	delete this.Iz;
	O(this.BI);
	delete this.BI;
	O(this.R);
	delete this.R;
	O(this.wL);
	delete this.wL;
	eH.M.O.call(this)
};

function fH(a, b, c, d, e, g, h, n, p, t, u) {
	this.uri = a;
	this.K = b;
	this.Y = p;
	this.C = c;
	this.W = u || (b ? Cc : dc);
	this.responseType = h;
	this.G = d;
	this.F = e;
	this.L = g;
	this.A = n;
	this.gh = t
}
L(fH, M);
F = fH.prototype;
F.$$ = 0;
F.pca = 0;
F.Ina = 0;
F.Tw = m;
F.$P = m;
F.ME = jm(185);
F.Wo = jm(166);
F.Vd = C(mc);
F.Gt = jm(176);
F.handleError = jm(168);
F.O = function() {
	this.A && this.A.unregister(this);
	this.Tw && (this.Tw.dispose(), this.Tw = m);
	delete this.A;
	delete this.F;
	delete this.G;
	fH.M.O.call(this)
};

function Zib(a, b) {
	this.C = a;
	this.A = b
}
F = Zib.prototype;
F.kca = r;
F.Gca = 3;
F.Z$ = q;
F.Fca = G;
F.Y$ = lq;
F.Hca = G;
F.gh = 2E4;
F.Hf = function(a) {
	var b = [this.A];
	sn(b, arguments);
	this.A = Pv.apply(m, b);
	return this
};
F.Kb = function(a) {
	this.F = a;
	return this
};

function LD(a, b) {
	var c = wRa(b, function(a) {
		return qm(a) ? a : En(a)
	});
	return a.Kb(Ov(c))
}
function JD(a, b, c) {
	a.Fca = K(b, c);
	return a
}
function ID(a, b) {
	a.Gca = b;
	return a
}
function KD(a, b, c) {
	a.Hca = K(b, c);
	return a
}
F.setTimeout = function(a) {
	this.gh = a;
	return this
};

function HD(a) {
	var b;
	b = new fH(a.A, a.F, a.Gca, a.Hca, a.Fca, a.Y$, a.kca, a.C, a.Z$, a.gh, a.G);
	a.C.send(b);
	return b
};

function $ib(a) {
	Bm(a, nEa) || Bm(a, Gg);
	Bm(a, Sa);
	Cm(a, Sa)
};

function ajb(a) {
	this.C = a
}
ajb.prototype.A = r;
ajb.prototype.Wd = function(a) {
	Bm(a, Sa);
	return new Zib(this.C, this.A + a)
};
ajb.prototype.DO = function(a) {
	$ib(a);
	this.A = a
};

function bjb() {
	this.C = []
}
bjb.prototype.A = m;
bjb.prototype.send = function(a) {
	this.A ? this.A.send(a) : this.C.push(a)
};
bjb.prototype.unregister = function(a) {
	this.A && this.A.unregister(a)
};

function cjb(a) {
	this.A = a ? Vn(a) : {}
};

function djb(a, b, c) {
	this.A = a;
	this.C = b;
	this.F = c;
	this.G = go(jo(), Kg);
	this.R = new S(this);
	this.R.A(this.A, gd, this.xza);
	ejb(this)
}
L(djb, M);
F = djb.prototype;
F.zz = m;
F.oca = q;
F.rra = function() {
	ejb(this)
};
F.xza = function(a) {
	wr(this.A.Fa) != wr(a.A) && ejb(this)
};

function ejb(a) {
	var b;
	if (a.F) a.zz ? (b = a.zz.kb(), b = 4 <= b.A || 1 != b.A && !wr(a.A.Fa)) : b = a.G ? !wr(a.A.Fa) : q;
	else if (b = !! a.zz) b = 1 != a.zz.kb().A;
	a.oca != b && (a.oca = b, hVa(a.C, !b, iKa), a.C.A.Ca(!b, iKa))
}
F.O = function() {
	O(this.R);
	delete this.R;
	delete this.zz;
	delete this.C;
	djb.M.O.call(this)
};

function fjb() {}
L(fjb, bq);
var gjb = {
	Dc: MKa,
	OFFLINE: rj
};

function gH() {
	this.R = new S(this);
	np && (OSa ? this.R.A(PSa ? document.body : window, [MKa, rj], this.A) : (this.C = np ? navigator.onLine : l, this.ab = new cq(250), this.R.A(this.ab, al, this.F), this.ab.start()))
}
L(gH, fjb);
gH.prototype.F = function() {
	var a = np ? navigator.onLine : l;
	a != this.C && (this.C = a, this.A())
};
gH.prototype.A = function() {
	this.dispatchEvent((np ? navigator.onLine : 1) ? MKa : rj)
};
gH.prototype.O = function() {
	gH.M.O.call(this);
	this.R.dispose();
	delete this.R;
	this.ab && (this.ab.dispose(), delete this.ab)
};

function hH(a, b, c, d) {
	this.L = (d = I(d) ? d : go(jo(), Kg)) ? ym() : m;
	this.ra = b || m;
	this.R = new S(this);
	this.Ta = a;
	this.Y = new Dq(K(this.na, this, q), 1E4);
	this.Ma = c || 12E4;
	this.ea = new gH;
	this.A = !d;
	this.Ha = ym();
	this.K = this.W = this.G = this.C = this.F = m;
	this.Aa = 0;
	this.R.A(this.ea, gjb.Dc, this.Ba).A(this.ea, gjb.OFFLINE, this.Ba);
	iH(this, l, l)
}
L(hH, xgb);

function hjb(a, b) {
	b && (a.L != m && 1E4 > ym() - a.L) && (ijb(a, Xfa, {
		timeSinceColdStart: ym() - a.L
	}), a.L = m);
	var c;
	b != a.A ? (a.A = b, a.dispatchEvent(b ? Bc : Hc), c = l) : c = q;
	iH(a, c)
}

function iH(a, b, c) {
	var d = ym(),
		e = d - a.Ha;
	if (b) b = c ? 0 : 25E3, a.Ha = d - b;
	else {
		d = b = 25E3;
		for (c = 1; d < e;) {
			b = Math.min(a.Ma, 25E3 * Math.pow(1.2, c++));
			if (b == a.Ma) break;
			d += b
		}
	}
	O(a.F);
	a.F = new Dq(a.Na, b, a);
	a.F.start()
}
hH.prototype.Na = function() {
	iH(this);
	jjb(this);
	this.Y.start();
	this.C = new Image;
	this.C.onerror = K(this.na, this, q);
	this.C.onload = K(this.na, this, l);
	this.C.src = Rv(this.Ta, sQa, Qm())
};
hH.prototype.Ba = function() {
	this.G = np ? navigator.onLine : l;
	this.W = cKa;
	this.K = ym();
	iH(this, l, l)
};
hH.prototype.na = function(a) {
	this.G != m && this.G != a && ijb(this, una + (a ? eOa : GCa) + Kaa + (this.W || r), this.K ? {
		timeSincePing: ym() - this.K
	} : {}, 0.02);
	this.K = this.W = this.G = m;
	jjb(this);
	hjb(this, a)
};

function ijb(a, b, c, d) {
	d = sm(d) ? d : 1;
	a.ra && (Math.random() < d && 2 > a.Aa) && (a.Aa++, a.ra.log(Error(b), c))
}
function jjb(a) {
	a.C && (a.C.onload = m, a.C.onerror = m, a.C = m);
	a.Y.stop()
}
hH.prototype.O = function() {
	jjb(this);
	O(this.F);
	delete this.F;
	O(this.Y);
	delete this.Y;
	O(this.ea);
	delete this.ea;
	O(this.R);
	delete this.R;
	hH.M.O.call(this)
};

function jH(a, b, c, d) {
	this.R = new S(this);
	this.A = Yz(c, Sg);
	this.R.A(d, a, this.F).A(d, b, this.C)
}
L(jH, M);
jH.prototype.F = function() {
	Wz.ya().postMessage(this.A)
};
jH.prototype.C = function() {
	Xz(Wz.ya(), this.A.aa())
};
jH.prototype.O = function() {
	this.C();
	O(this.R);
	delete this.R;
	O(this.A);
	delete this.A;
	jH.M.O.call(this)
};
var kH = 0;

function kjb(a, b, c, d) {
	this.A = a;
	this.K = b;
	this.C = c;
	this.L = d;
	this.G = jC.ya();
	this.F = new jH(Li, AJa, Ppa, b);
	this.R = new S(this);
	this.R.A(c, $c, this.Ava).A(c, fe, this.Eva).A(c, ya, this.Bva).A(b, wj, this.Dva).A(a.A, Dd, this.Cva);
	a = a.A;
	zr(a, xr(a.Fa, 64, c.FY()))
}
L(kjb, M);
F = kjb.prototype;
F.Ava = function() {
	if (!Ar(this.A.A)) {
		var a = this.A.A;
		zr(a, xr(a.Fa, 1, l))
	}
	ljb(this)
};
F.Bva = function() {
	ljb(this)
};
F.Eva = function() {
	ljb(this)
};
F.Dva = function(a) {
	var b = a.A;
	b.W || (Ar(this.A.A) || YUa(this.A.A), a.C ? fbb(this.A, m, ym() + kH) : b.F && b.L && (a = this.L(b.F) || ysa, fbb(this.A, a, b.L)), ljb(this))
};

function ljb(a) {
	var b = a.A.A,
		c = uG(a.C);
	zr(b, xr(xr(b.Fa, 8, a.C.bp), 4, c));
	b = a.A.A;
	zr(b, xr(b.Fa, 256, a.C.Gfa()))
}
F.Cva = function() {
	this.K.xR(this.G)
};
F.O = function() {
	O(this.R);
	delete this.R;
	O(this.F);
	delete this.F;
	kjb.M.O.call(this)
};

function mjb(a, b) {
	this.A = a;
	this.oG = String(b)
}
mjb.prototype.get = function(a) {
	var b = this.A.get(a);
	if (!b.length) return m;
	if (1 == b.length && zn(a, b[0].A)) return b[0];
	for (var c = {}, d = 0; d < b.length; d++) {
		var e = b[d],
			g = e.A;
		g.length != a.length && (c[g[g.length - 1]] = e)
	}
	return c[this.oG] || c[Xa] || m
};

function njb(a) {
	this.C = a;
	this.A = {}
}
function ojb(a, b, c, d, e, g) {
	var h;
	a.A[b] ? h = a.A[b].get(g, m) : (a.A[b] = new FD(k, l), h = m);
	var n = new es;
	h ? n.zb(h) : (b = K(a.F, a, b, g, n, m), a.C.A.JL(d, [FBa, c].concat(e), b));
	return n
}
njb.prototype.F = function(a, b, c, d, e) {
	e ? (this.A[a] || (this.A[a] = new FD(k, l)), this.A[a].set(b, e), c.zb(e)) : d ? (a = d.call(), hs(a, c.zb, c.Bd, c)) : c.zb(m)
};

function pjb() {}
pjb.prototype.A = G;

function lH(a, b, c, d, e) {
	this.L = a;
	this.K = b;
	this.C = c;
	this.A = d;
	this.F = e
}
lH.prototype.Kca = function(a) {
	var b = a.aa();
	a = ojb(this.L, this.C, this.A, b.aa(), this.F, b.aa());
	var c = new es;
	gs(a, function(a) {
		a != m ? c.zb(new CD(b, a)) : c.Bd(vla)
	});
	is(a, function(a) {
		c.Bd(a instanceof Error ? a : wla + a)
	});
	return c
};
lH.prototype.sync = function(a) {
	var b = a.ng(),
		c = a.aa(),
		b = new Kib(c.aa(), b, this.C),
		c = new es;
	a = K(this.G, this, c, a);
	this.K.A.mL(b, [FBa, this.A], a);
	return c
};
lH.prototype.G = function(a, b, c) {
	c.e0() ? a.Bd(Via) : c.LR() ? a.zb(b) : (b = b.aa(), c = c.d0(b.aa()), c != m ? a.zb(new CD(b, c)) : a.Bd(uJa))
};

function qjb(a) {
	this.A = a
};

function rjb(a) {
	this.Wf = {};
	if (a) {
		var b = jVa(a);
		a = Qr(a);
		for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
	}
}
F = rjb.prototype;
F.Fc = k;
F.set = function(a, b) {
	sjb(this, a, b, q)
};
F.add = function(a, b) {
	sjb(this, a, b, l)
};

function sjb(a, b, c, d) {
	for (var e = 0; e < b.length; e++) {
		var g = b.charAt(e);
		a.Wf[g] || (a.Wf[g] = new rjb);
		a = a.Wf[g]
	}
	d && a.Fc !== k && f(Error('The collection already contains the key "' + b + sa));
	a.Fc = c
}
F.get = function(a) {
	for (var b = this, c = 0; c < a.length; c++) {
		var d = a.charAt(c);
		if (!b.Wf[d]) return;
		b = b.Wf[d]
	}
	return b.Fc
};
F.zc = function() {
	var a = [];
	tjb(this, a);
	return a
};

function tjb(a, b) {
	a.Fc !== k && b.push(a.Fc);
	for (var c in a.Wf) tjb(a.Wf[c], b)
}
F.dd = function(a) {
	var b = [];
	if (a) {
		for (var c = this, d = 0; d < a.length; d++) {
			var e = a.charAt(d);
			if (!c.Wf[e]) return [];
			c = c.Wf[e]
		}
		ujb(c, a, b)
	} else ujb(this, r, b);
	return b
};

function ujb(a, b, c) {
	a.Fc !== k && c.push(b);
	for (var d in a.Wf) ujb(a.Wf[d], b + d, c)
}
F.kz = function(a) {
	if (this.Fc === a) return l;
	for (var b in this.Wf) if (this.Wf[b].kz(a)) return l;
	return q
};
F.clear = function() {
	this.Wf = {};
	this.Fc = k
};
F.remove = function(a) {
	for (var b = this, c = [], d = 0; d < a.length; d++) {
		var e = a.charAt(d);
		b.Wf[e] || f(Error('The collection does not have the key "' + a + sa));
		c.push([b, e]);
		b = b.Wf[e]
	}
	a = b.Fc;
	for (delete b.Fc; 0 < c.length;) if (e = c.pop(), b = e[0], e = e[1], Rn(b.Wf[e].Wf)) delete b.Wf[e];
	else break;
	return a
};
F.La = function() {
	return new rjb(this)
};
F.Dd = function() {
	return iVa(this.zc())
};
F.jc = function() {
	return this.Fc === k && (typeof this.Wf.jc == jg ? this.Wf.jc() : pm(this.Wf) || qm(this.Wf) ? jn(this.Wf) : Rn(this.Wf))
};

function vjb(a, b) {
	this.A = a;
	this.ra = b
}
vjb.prototype.write = function(a, b, c) {
	if (this.A.C) {
		for (var d = [], e = 0; e < a.length; e++) {
			var g = a[e],
				h = new kG(l, g.A, g.kb());
			h.setData(wjb(g));
			d.push(h)
		}
		this.A.write(d, b, c)
	}
};

function wjb(a) {
	switch (a.xa()) {
		case Pk:
			return a.W();
		default:
			f(Error("Unsupported sync object type: " + a.xa()))
	}
}
vjb.prototype.C = function(a, b) {
	for (var c = [], d = 0; d < b.length; d++) {
		var e = b[d],
			g = FUa(e, eFa)[0];
		switch (g) {
			case Pk:
				c.push(new bx(FUa(e, eFa), e.kb(), e.getData()));
				break;
			default:
				this.ra.log(Error($qa + g))
		}
	}
	a(c)
};

function xjb(a, b) {
	go(jo(), EAa) || (b = b || []);
	this.ra = a;
	this.C = m;
	this.F = new rjb;
	this.A = new es;
	this.G = !b;
	b && (Keb(this, b), this.A.zb())
}
xjb.prototype.get = function(a) {
	var b = [];
	a = this.F.dd(yjb(a));
	for (var c = 0; c < a.length; c++) b.push(this.F.get(a[c]));
	return b
};

function Keb(a, b) {
	for (var c = [], d = 0; d < b.length; d++) {
		var e = b[d],
			g = e.keyPath,
			h = e.state,
			e = e.data;
		(!g || !h || !e) && f(Error("Serialized SyncUpdate missing required key."));
		g.length || f(Error("SyncUpdate key may not be empty."));
		c.push(zjb(a, new Heb(g, h, e)))
	}
	return c
}
function zjb(a, b) {
	var c = b.A[0];
	switch (c) {
		case Pk:
			var c = b.A,
				d = new bx(c, b.kb(), b.C);
			a.F.set(yjb(c), d);
			return d;
		default:
			f(Error("Unknown sync object type: " + c))
	}
}
function yjb(a) {
	return 0 < a.length ? a.join(Ql) + Ql : r
}
xjb.prototype.K = function(a) {
	for (var b = 0; b < a.length; b++) {
		var c = a[b];
		this.F.set(yjb(c.A), c)
	}
	this.A.zb()
};

function Ajb(a) {
	this.A = a
};

function Bjb(a, b) {
	this.A = a;
	this.ra = b;
	this.R = new S(this)
}
L(Bjb, M);
F = Bjb.prototype;
F.YW = m;
F.FO = q;
F.UZ = q;
F.Yr = function(a, b, c, d, e) {
	this.A.Yr(a, b, c, d, e);
	if (this.FO && (c = this.A, c.En)) if (d = Kx(c.En.A.A, a), a = (c.A[a] || {})[b]) if (b in d) {
		b = d[b];
		for (c = 0; c < a.length; c++) a[c](b)
	} else c.ra.log(Error(Vla + b));
	else c.ra.log(Error(Zla + b));
	return this
};
F.T3 = function(a, b) {
	this.A.T3(a, b);
	if (this.FO) {
		var c = this.A;
		c.En && (c = Kx(c.En.A.A, a), b(c))
	}
	return this
};
F.Hx = function(a, b) {
	this.A.Hx(a, b);
	if (this.FO) {
		var c = this.A;
		c.En && (c.C[a] ? $Ua(c.G, a, (0, c.C[a])(c.En.A)) : c.ra.log(Error(Xla + a)))
	}
	return this
};
F.Sra = function(a) {
	a.wu || Cjb(this)
};
F.Qra = function() {
	Cjb(this)
};
F.Rra = function(a) {
	0 == a.A && (3 == a.C || 4 == a.C || 2 == a.C) ? (this.UZ = q, Cjb(this)) : 2 == a.A && (this.UZ = l, Cjb(this))
};

function Cjb(a) {
	if (!a.UZ && (a = a.A, a.En)) {
		for (var b in a.K) {
			var c = Kx(a.En.A.A, b);
			if (a.A[b]) {
				var d = c,
					e = a.A[b] || {}, g = k;
				for (g in d) {
					var h = e[g];
					if (h) for (var n = d[g], p = 0; p < h.length; p++) h[p](n)
				}
			}
			if (a.F[b]) {
				d = a.F[b] || [];
				for (e = 0; e < d.length; e++)(0, d[e])(c)
			}
		}
		if (a.En) for (var t in a.C) $Ua(a.G, t, (0, a.C[t])(a.En.A))
	}
}
F.O = function() {
	Bjb.M.O.call(this);
	O(this.R);
	delete this.R;
	delete this.YW;
	delete this.A
};

function Djb(a, b) {
	this.G = a;
	this.ra = b;
	this.A = {};
	this.F = {};
	this.C = {};
	this.K = {}
}
L(Djb, M);
F = Djb.prototype;
F.En = m;
F.vg = im("En");
F.Yr = function(a, b, c, d, e) {
	this.K[a] = l;
	this.A[a] || (this.A[a] = {});
	this.A[a][b] || (this.A[a][b] = []);
	this.A[a][b].push(function(a) {
		e && (a = e(a));
		c.setProperty(d, a)
	});
	return this
};
F.T3 = function(a, b) {
	this.K[a] = l;
	this.F[a] || (this.F[a] = []);
	this.F[a].push(b);
	return this
};
F.Hx = function(a, b) {
	this.C[a] = b;
	return this
};
F.O = function() {
	Djb.M.O.call(this);
	delete this.A;
	delete this.F;
	delete this.C;
	delete this.ra;
	delete this.En;
	delete this.G
};

function mH(a) {
	this.A = new h0a;
	this.ra = a
}
L(mH, M);

function pYa(a, b, c) {
	var d;
	var e = b.A.getSelection(),
		g = e.Lb;
	d = c.A;
	var h = e.F ? e.F.F : g,
		g = h,
		n;
	c.xa() == UJa ? (g = c.C, n = c.He()) : n = d.A() == h.A() ? m : d.A() < h.A() ? new xs(d.A(), h.A() - 1) : new xs(h.A(), d.A() - 1);
	if (0 != h.xa() || 0 != d.xa()) d = Ls(h);
	else {
		var h = b.ba().qa(),
			p = e.Lb,
			p = Ss(h, p.C ? p.A() - 1 : p.A()),
			h = Ss(h, d.C ? d.A() - 1 : d.A());
		p != h ? d = e : n ? (e = new Ds(n.start, n.end, d), g = new Ds(n.start, n.end, g), d = new Gs(d, e, g)) : d = new Gs(d)
	}
	if (d == b.A.getSelection()) return d;
	e = d.C;
	if (0 == e.length) a = d;
	else if (1 == e.length) a: {
		var t = d;
		d = a.A.A.length;
		for (e = 0; e < d; e++) if (g = a.A.A[e].element.rba(b.ba(), c)) {
			a = g;
			break a
		}
		var p = t.C[0].start,
			u = t.C[0].end,
			h = t.Lb.A();
		d = t.F.F;
		e = d.A();
		g = b.A.getSelection();
		n = g.Lb.A();
		var x = (g = g.F) ? g.F.A() : n,
			g = h < e,
			p = new xs(p, u);
		if (c.xa() == fFa && (n < h && h < x || x < h && h < n)) {
			c = p;
			b = b.ba();
			h = a.A.A.length;
			for (p = 0; p < h; p++) u = a.A.A[p].element.sba(b, c, n), n <= c.start ? (u.start >= n || a.ra.log(Error(Dia)), u.end >= c.end || a.ra.log(Error(yCa))) : (u.end <= n || a.ra.log(Error(Cia)), u.start <= c.start || a.ra.log(Error(zCa))), c = u;
			a = c
		} else a = Ejb(a, p, b.ba());
		b = new ws(g ? a.start : a.end + 1, t.Lb.C);
		Cs(a, e) || (d = new ws(!g ? a.start : a.end + 1, d.C));
		a = Ns(new Ds(a.start, a.end, b), new Ds(a.start, a.end, d))
	} else {
		e = d;
		g = e.A;
		n = g.F.A() == g.A;
		h = g.F.A() == g.C + 1;
		c = Ejb(a, Es(e.A), b.ba());
		ys(Es(e.A), Es(e.F)) || (t = Ejb(a, Es(e.F), b.ba()));
		p = e.G;
		d = [];
		for (u = 0; u < p.length; u++) d.push(Ejb(a, p[u], b.ba()));
		a = n ? new ws(c.start, e.Lb.C) : h ? new ws(c.end + 1, e.Lb.C) : g.F;
		b = t ? new Ds(t.start, t.end, e.F.F) : m;
		a = Ns(new Ds(c.start, c.end, a), b, d)
	}
	return a
}

function Ejb(a, b, c) {
	for (var d = a.A.A.length, e = 0; e < d; e++) {
		var g = a.A.A[e].element.uja(c, b);
		g.start <= b.start && g.end >= b.end || a.ra.log(Error(xCa));
		b = g
	}
	return b
}
mH.prototype.O = function() {
	mH.M.O.call(this);
	O(this.A);
	delete this.A
};

function nH(a) {
	this.A = [a]
}
L(nH, Jib);
nH.prototype.log = function(a, b) {
	a instanceof Ou && a.C == $d ? nH.M.log.call(this, a.A, b) : a in DXa && nH.M.log.call(this, a, b)
};

function Fjb(a) {
	this.A = a
}
L(Fjb, GXa);
Fjb.prototype.log = function(a, b) {
	a instanceof Ou && this.A(a, b)
};

function Gjb(a, b) {
	this.A = a;
	this.C = b
};

function Hjb() {
	this.C = []
}
Hjb.prototype.A = 0;

function Nz(a, b) {
	a.C.push(b);
	return a
};

function Ijb() {
	this.A = {}
}
function Oz(a, b) {
	var c = b.cka();
	a.A[c] && f(Error("Tried to register a feature emitter to an already registered feature marker."));
	a.A[c] = b;
	return a
}

function Jjb(a, b, c, d, e, g, h) {
	if (c.A[0]) {
		var n = c.A[0] || m,
			p = b.C(),
			t = b.F(),
			u = m;
		Iz(b) && (u = T3a(b), u = a.A[u] || m);
		if (Bs(n, new xs(p, t))) u && u.yL() ? oH(c, d, p - 1, t) : oH(c, d, p, t);
		else if (b.getParent()) if (Iz(b)) u || f(Error("No emitter found for marker node.")), (h = g || u.eL(b, c, a)) && (u.yL() ? oH(c, d, p - 1, p) : oH(c, d, p, p)), Kjb(a, b, c, d, e, h && u.VR(), h && 2 == u.xL()), h && 1 == u.xL() && (a = d.ce(), a.length && e.push(a[a.length - 1].end)), h && b.xa() == Hk && oH(c, d, t, t);
		else for (; t = nD(c, b.C(), b.F());) oH(c, d, t.start, t.end), c.A[0] && !h && e.push(t.end);
		else Kjb(a, b, c, d, e, g, h)
	}
}
function oH(a, b, c, d) {
	a.remove(c, d);
	b.add(c, d)
}
function Kjb(a, b, c, d, e, g, h) {
	for (var n = 0; n < b.dc(); n++) {
		var p = b.wb(n);
		nD(c, p.C(), p.F()) && Jjb(a, p, c, d, e, g, h)
	}
	a = b.xa() == Hk ? b.F() - 1 : b.F();
	nD(c, b.C(), a) != m && f(Error("Selected ranges should not include anything in the node's range after children are traversed."))
};

function Ljb(a, b) {
	this.C = b;
	this.A = [];
	for (var c = 0; c < a.length; c++) Gz(Hz.ya(), a[c]) || O3a(b.C, a[c]) || this.A.push(a[c]);
	this.R = new S(this)
}
L(Ljb, bq);
Ljb.prototype.vb = function() {
	this.A.length ? this.R.A(this.C, gg, this.F) : this.dispatchEvent(gDa)
};
Ljb.prototype.F = function(a) {
	for (var b = 0; b < a.A.length; b++) on(this.A, a.A[b]);
	this.A.length || (this.dispatchEvent(gDa), this.R.Pb(this.C, gg, this.F))
};

function Mjb(a, b, c, d, e, g, h, n) {
	this.F = a;
	this.Y = b;
	this.A = new BG(this);
	CG(CG(this.A, [dAa, bAa, cAa], this.Uua), [$za, aAa], this.Vua).start();
	a = [];
	if (c) {
		c.fontMetadataMap || this.ra.log(Error(Nla));
		c = c.fontMetadataMap || {};
		for (var p in c) c[p].documentFont && a.push(p)
	} else if (d) {
		p = (CUa(d, QNa) || {}).fontFamilies;
		try {
			a = p ? Cn(p) : []
		} catch (t) {
			a = []
		}
	}
	this.C = a;
	this.ra = e;
	this.L = g;
	this.K = new es;
	this.W = h;
	this.G = n;
	this.R = new S(this)
}
L(Mjb, M);
F = Mjb.prototype;
F.vb = function() {
	if (this.F && this.C.length) this.Y.CA(QAa);
	else {
		for (var a = kF.ya(), b = [Jl], c = 0; c < b.length; c++) delete a.iK[b[c]];
		dfb(a)
	}
	this.F && (a = new Ljb(this.C, this.F), Ap(this.R, a, gDa, this.vAa), a.vb());
	this.A.gf(dAa)
};
F.Vua = function() {
	this.L && this.K.zb(this.L)
};
F.Uua = function() {
	if (this.W && this.G) {
		for (var a = this.W, b = a.F.filter(this.C), c = [], d = 0; d < b.length; d++) c.push(new Rz(new Sz(b[d]), k));
		b = Tz(a.C, c);
		gs(b, a.A.A, a.A);
		this.G.Ca(l)
	}
	this.A.gf($za)
};
F.vAa = function() {
	kF.ya().setTime(Jl)
};
F.O = function() {
	O(this.R);
	O(this.A);
	Mjb.M.O.call(this)
};

function Njb() {}
function FB(a) {
	var b = {
		ts_un: l
	};
	go(jo(), Oe) ? b.ts_fgc2 = {
		clr_type: 1,
		sclr_index: 10
	} : b.ts_fgc = Yaa;
	a || ht(b, Wk);
	return b
};

function Ojb() {}
L(Ojb, Njb);

function Pjb() {}
Pjb.prototype.apply = function(a) {
	f(Error(Mma + a.xa()))
};
Pjb.prototype.Vi = function(a) {
	f(Error(Mma + a.xa()))
};

function Qjb(a) {
	this.A = a
}
Qjb.prototype.apply = function(a, b) {
	for (var c = a.na, d = 0; d < c.length; d++) this.A.apply(c[d], b)
};
Qjb.prototype.Vi = function(a) {
	f(Error("Cannot createMemento for command type " + a.xa()))
};

function Rjb() {}
Rjb.prototype.apply = G;
Rjb.prototype.Vi = lq;

function Sjb(a) {
	this.A = a
}
Sjb.prototype.apply = function(a, b) {
	this.A.apply(a.$d, b)
};
Sjb.prototype.Vi = function(a, b) {
	return this.A.Vi(a.$d, b)
};

function Tjb(a) {
	this.A = a
}
Tjb.prototype.apply = function(a, b) {
	b.clear();
	for (var c = a.Ba, d = 0; d < c.length; d++) this.A.apply(c[d], b)
};
Tjb.prototype.Vi = lq;

function pH() {}
pH.prototype.oi = function(a) {
	f(Error("Non-invertible command type " + a.xa()))
};

function qH() {}
qH.prototype.PK = nq("Unexpected call - convertToSuggestCommand");
qH.prototype.QK = nq("Unexpected call - getMergeIds");

function rH() {}
rH.prototype.Ap = nq("Unexpected call - assignSuggestionId");
rH.prototype.Cp = nq("Unexpected call - getSuggestTransformCommand");

function Ujb(a) {
	this.A = a
}
Ujb.prototype.Ap = function(a, b) {
	for (var c = a.na, d = [], e = 0; e < c.length; e++) d.push(this.A.Ap(c[e], b));
	return new iC(d)
};
Ujb.prototype.Cp = function(a) {
	a = a.na;
	for (var b = [], c = 0; c < a.length; c++) b.push(this.A.Cp(a[c]));
	return Uw(b)
};

function Vjb() {}
Vjb.prototype.Ap = function() {
	return jC.ya()
};
Vjb.prototype.Cp = function() {
	return jC.ya()
};

function Wjb(a, b, c) {
	hC.call(this, gza, [c]);
	0 >= a && f(Error("Revision must be greater than zero"));
	this.Ba = a;
	this.Na = b;
	this.$d = c
}
L(Wjb, hC);
Wjb.prototype.se = C(Ib);

function Xjb(a) {
	this.A = a
}
Xjb.prototype.Ap = function(a, b) {
	var c = this.A.Ap(a.$d, b);
	return new Wjb(a.se(), a.Na, c)
};
Xjb.prototype.Cp = function(a) {
	return this.A.Cp(a.$d)
};

function sH() {}
L(sH, M);

function tH(a) {
	this.A = a
}
L(tH, sH);
tH.prototype.Gh = C(Eb);
tH.prototype.O = function() {
	tH.M.O.call(this);
	O(this.A);
	delete this.A
};

function uH() {}
uH.prototype.apply = function(a, b) {
	return b.rP(a)
};
uH.prototype.Vi = D(m);

function vH() {}
L(vH, uH);
vH.prototype.apply = function(a, b) {
	return !b.px(a.G) ? l : vH.M.apply.call(this, a, b)
};
vH.prototype.Vi = function(a, b) {
	var c = a.G;
	if (!b.px(c)) return m;
	c = b.Gh(c, a.C(), a.F());
	return new tH(c)
};

function wH(a, b, c) {
	this.C = b;
	this.F = c
}
L(wH, sH);
wH.prototype.W = C(Jb);
wH.prototype.A = C($b);
wH.prototype.O = function() {
	wH.M.O.call(this);
	delete this.C
};

function Yjb() {}
L(Yjb, uH);
Yjb.prototype.Vi = function(a, b) {
	var c = b.Fb(a.aa());
	if (c) {
		var d = b.Rc(a.aa());
		return new wH(c.xa(), c.Pa(), d)
	}
	return m
};

function xH(a) {
	this.A = a
}
L(xH, sH);
xH.prototype.Yh = C(Eb);
xH.prototype.O = function() {
	xH.M.O.call(this);
	O(this.A);
	delete this.A
};

function Zjb(a, b, c) {
	a = a.Yh(b, c, l);
	return new xH(a)
};

function $jb() {}
L($jb, uH);
$jb.prototype.Vi = function(a, b) {
	return Zjb(b, a.C(), a.F())
};

function akb() {}
L(akb, uH);
akb.prototype.Vi = function(a, b) {
	return Zjb(b, a.C(), a.F())
};

function bkb(a) {
	this.C = a
}
L(bkb, sH);
bkb.prototype.A = C(Jb);

function ckb() {}
L(ckb, uH);
ckb.prototype.Vi = function(a, b) {
	var c = b.Rc(a.aa());
	return new bkb(c)
};

function yH(a) {
	this.A = a
}
L(yH, sH);
yH.prototype.W = C(Eb);
yH.prototype.O = function() {
	yH.M.O.call(this);
	delete this.A
};

function dkb() {}
L(dkb, uH);
dkb.prototype.Vi = function(a, b) {
	var c = b.Fb(a.aa());
	return c ? new yH(c.Pa()) : m
};

function ekb() {}
ekb.prototype.oi = function(a) {
	return Ri == a.Aa ? jC.ya() : new BB(a.aa())
};

function fkb() {}

function gkb(a, b, c) {
	if (b instanceof sx) {
		var d;
		a: {
			for (var e in c) switch (e) {
				case de:
					b: {
						e = c[e];
						var g = e.op;
						c = e.opIndex;
						e = e.opValue;
						switch (g) {
							case le:
								b = b.A2(b.zc()[c]);
								d = ux(c, b);
								break b;
							case Wg:
								d = vx(c);
								break b;
							case ak:
								b = b.zc()[c];
								b = gkb(a, b, e);
								d = z0a(c, b);
								break b;
							case uk:
								d = b.Pa();
								break b
						}
						f(Error("Unknown operator " + g))
					}
					break a
			}
			d = {}
		}
		return d
	}
	if ((d = b.tU()) && d in c) if (e = c[d], b.Ga(d) != e) return b.Pa();
	d = {};
	for (g in c) {
		var h = b.Ga(g);
		if (b.Tf(g)) e = m, h && (e = c[g], e = e != m ? gkb(a, h, e) : h.Pa());
		else if (e = h, I(bWa(b.A.A).get(g)) && !h && ((h = bWa(b.A.A).get(g) || m) || f(Error("Found an inherit property name with no companion: " + g)), !(h in c))) {
			var n = b.Ga(h);
			d[h] = b.Tf(h) ? n.Pa() : n
		}
		d[g] = e
	}
	return d
};

function hkb() {
	this.A = new fkb
}
hkb.prototype.oi = function(a, b) {
	for (var c = [], d = a.G, e = a.C(), g = a.F(), h = a.L, n = b.b_(d, e, g, l).pd(), p = er(n), t = 0; t < p.length; t++) {
		var u = e + p[t],
			x = p[t + 1] ? e + p[t + 1] - 1 : g,
			y = gkb(this.A, n[p[t]], h);
		c.push(new vB(d, u, x, y))
	}
	return Uw(c)
};

function ikb() {}
ikb.prototype.oi = function(a, b) {
	var c = [],
		d = a.aa(),
		e = b.Fb(d);
	if (!e) return jC.ya();
	c.push(new YB(e.xa(), d, e.Pa()));
	e = b.Rc(d);
	0 <= e && c.push(new tB(d, e));
	return Uw(c)
};

function jkb(a, b, c) {
	var d = [],
		e = a.Yh(b, c, l, k, k, k, l, l);
	d.push(new aC(b, e.qa()));
	for (var g = e.C, h = 0; h < g.length; h++) for (var n = g[h], p = n.xa(), t = lt(p), n = n.pd(), u = er(n), x = 0; x < u.length; x++) d.push(new vB(p, b + u[x], t ? b + u[x] : u[x + 1] ? b + u[x + 1] - 1 : c, n[u[x]].Pa()));
	c = e.Lf;
	for (var y in c) {
		var B = y;
		dr(c[B], function(c, e) {
			for (var g in e) {
				var h = e[Number(g)],
					n = a.Fb(h);
				n && (n = n.Pa(), d.push(new YB(B, h, n)), d.push(new tB(h, b + c)))
			}
			return q
		})
	}
	return Uw(d)
};

function kkb() {}
kkb.prototype.oi = function(a, b) {
	return jkb(b, a.C(), a.F())
};

function lkb() {}
lkb.prototype.oi = function(a, b) {
	return jkb(b, a.C(), a.F())
};

function mkb() {}
mkb.prototype.oi = function(a) {
	var b = a.K();
	return new uB(b, b + a.qa().length - 1)
};

function zH(a, b, c) {
	this.Y = xh;
	this.Ta = a;
	this.Na = b;
	this.Ba = c
}
L(zH, sB);
zH.prototype.ea = C(Sc);
zH.prototype.C = C(xc);
zH.prototype.F = C(Ib);

function nkb() {}
nkb.prototype.oi = function(a) {
	var b = a.K();
	return new zH(a.ea(), b, b + a.qa().length - 1)
};

function AH(a, b, c) {
	this.Y = Ai;
	this.Ta = a;
	this.Na = b;
	this.Ba = c
}
L(AH, sB);
AH.prototype.ea = C(Sc);
AH.prototype.C = C(xc);
AH.prototype.F = C(Ib);

function okb() {}
okb.prototype.oi = function(a) {
	return new AH(a.ea(), a.C(), a.F())
};

function BH(a, b, c) {
	this.Y = Bi;
	this.Ta = a;
	this.Na = b;
	this.Ba = c
}
L(BH, sB);
BH.prototype.ea = C(Sc);
BH.prototype.C = C(xc);
BH.prototype.F = C(Ib);

function pkb() {}
pkb.prototype.oi = function(a) {
	return new BH(a.ea(), a.C(), a.F())
};

function qkb() {}
qkb.prototype.oi = function(a, b) {
	return new tB(a.aa(), b.Rc(a.aa()))
};

function CH(a, b, c) {
	this.Y = di;
	this.Ta = a;
	this.Na = b;
	this.Ba = c
}
L(CH, sB);
CH.prototype.ea = C(Sc);
CH.prototype.C = C(xc);
CH.prototype.F = C(Ib);

function rkb() {}
rkb.prototype.oi = function(a) {
	return new CH(a.ea(), a.C(), a.F())
};

function DH(a, b, c) {
	this.Y = ei;
	this.Ta = a;
	this.Na = b;
	this.Ba = c
}
L(DH, sB);
DH.prototype.ea = C(Sc);
DH.prototype.C = C(xc);
DH.prototype.F = C(Ib);

function skb() {}
skb.prototype.oi = function(a) {
	return new DH(a.ea(), a.C(), a.F())
};

function tkb() {
	this.A = new fkb
}
tkb.prototype.oi = function(a, b) {
	var c = b.Fb(a.aa());
	return c ? (c = gkb(this.A, c, a.W()), new aE(a.aa(), c)) : jC.ya()
};

function ukb() {}
ukb.prototype.PK = function(a, b) {
	for (var c = fr(Tab(b), a.C(), a.F(), l), d = [], e = 0; e < c.length; e++) {
		var g = pD(b, c[e]),
			h = e + 1 < c.length ? c[e + 1] - 1 : a.F();
		0 < g.length ? d.push(new zH(g[0], c[e], h)) : d.push(new CH(uOa, c[e], h))
	}
	return Uw(d)
};
ukb.prototype.QK = function(a, b) {
	var c = [];
	sn(c, pD(b, a.C() - 1));
	sn(c, qD(b, a.C() - 1));
	sn(c, pD(b, a.F() + 1));
	sn(c, qD(b, a.F() + 1));
	return c
};

function vkb() {}
vkb.prototype.Ap = gm();
vkb.prototype.Cp = function() {
	return jC.ya()
};

function EH(a, b, c) {
	this.Y = ci;
	this.Ta = a;
	this.Ba = b;
	this.Na = c
}
L(EH, sB);
EH.prototype.ea = C(Sc);
EH.prototype.K = C(Ib);
EH.prototype.qa = C(xc);

function wkb() {}
wkb.prototype.PK = function(a) {
	return new EH(uOa, a.K(), a.qa())
};
wkb.prototype.QK = function(a, b) {
	var c = a.K(),
		d = [];
	sn(d, pD(b, c - 1));
	sn(d, qD(b, c - 1));
	sn(d, pD(b, c));
	sn(d, qD(b, c));
	return d
};

function xkb() {}
xkb.prototype.Ap = function(a, b) {
	return new EH(b, a.K(), a.qa())
};
xkb.prototype.Cp = function() {
	return jC.ya()
};

function ykb() {}
ykb.prototype.Ap = function(a, b) {
	return new CH(b, a.C(), a.F())
};
ykb.prototype.Cp = function(a) {
	var b = Nm(gd, a.F() - a.C() + 1);
	return new aC(a.C(), b)
};

function zkb(a) {
	WG(a, bi, new uH);
	WG(a, ci, new uH);
	WG(a, wh, new $jb);
	WG(a, xh, new akb);
	WG(a, ei, new uH);
	WG(a, Bi, new uH);
	WG(a, di, new uH);
	WG(a, Ai, new uH);
	WG(a, nh, new uH);
	WG(a, ni, new dkb);
	WG(a, rh, new Yjb);
	WG(a, li, new ckb);
	WG(a, ph, new vH);
	var b = {
		"docs-mlti": new Qjb(a),
		"docs-null": new Rjb,
		"docs-replace": new Tjb(a),
		"docs-reverse": new Sjb(a),
		"docs-revert": new Tjb(a),
		"docs-undo": new Pjb
	}, c;
	for (c in b) WG(a, c, b[c])
};

function Akb() {}
L(Akb, M);
Akb.prototype.C = function(a, b) {
	for (var c = a.Lb, d = a.G.concat(), e = a.A, g = e ? Es(e) : m, h = a.F, h = (e = h ? Es(h) : m) ? h.F : c, n = 0; n < b.length; n++) {
		var p = b[n];
		if (p.d_()) return c = new ws(1), Ls(c);
		for (var p = p.gx() ? p.Ha.concat() : [p], c = Bkb(c, p), t = 0; t < d.length; t++) {
			var u = Ckb(d[t], p);
			u ? d[t] = u : pn(d, t--)
		}
		g && (g = Ckb(g, p));
		e && (e = Ckb(e, p), h = Bkb(h, p))
	}
	n = h;
	!g && !e && 0 == d.length ? d = Ls(c) : (h = e ? new Ds(e.start, e.end, n) : m, g ? c = new Ds(g.start, g.end, c) : (c = e ? e : d.shift(), c = new Ds(c.start, c.end, new ws(c.start == (e ? n.A() : -1) ? c.end + 1 : c.start))), d = Ns(c,
	h, d));
	return d
};

function Bkb(a, b) {
	for (var c = 0; c < b.length; c++) if (0 == a.xa()) {
		var d = a,
			e = d.A(),
			g = b[c];
		switch (g.xa()) {
			case bi:
				e = e$a(e, g.K(), g.qa().length);
				break;
			case ci:
				e = e$a(e, g.K(), g.qa().length);
				break;
			case wh:
				e = g$a(e, uC(g.C(), g.F()));
				break;
			case xh:
				e = g$a(e, uC(g.C(), g.F()))
		}
		a = new ws(e, d.C)
	} else if (1 == a.xa()) a: {
		d = a;
		e = b[c];
		g = d.aa();
		switch (e.xa()) {
			case rh:
				if (e.aa() == g) {
					a = new ws(1);
					break a
				}
		}
		a = d
	}
	return a
}

function Ckb(a, b) {
	for (var c = uC(a.start, a.end), d = 0; d < b.length; d++) {
		switch (b[d].xa()) {
			case bi:
				var e = b[d];
				if (c.jc()) e = c;
				else var g = e$a(c.min(), e.K(), e.qa().length),
					c = c.max(),
					e = f$a([g, c >= e.K() ? c + e.qa().length : c]);
				c = e;
				break;
			case ci:
				e = b[d];
				c.jc() ? e = c : (g = e$a(c.min(), e.K(), e.qa().length), c = c.max(), e = f$a([g, c >= e.K() ? c + e.qa().length : c]));
				c = e;
				break;
			case wh:
				e = b[d];
				c = h$a(c, uC(e.C(), e.F()));
				break;
			case xh:
				e = b[d], c = h$a(c, uC(e.C(), e.F()))
		}
		if (c.jc()) return m
	}
	return new xs(c.min(), c.max())
};

function Dkb() {
	this.A = {}
}
Dkb.prototype.Xb = function(a) {
	return this.A[a]
};

function Ekb() {
	this.A = {};
	this.C = {};
	this.F = {}
}
L(Ekb, M);

function pz(a, b, c) {
	a.A[b] && f(Error("Duplicate renderer provider for layout view type: " + b));
	a.A[b] = c;
	return a
}
function U4a(a, b, c) {
	a.C[b] && f(Error("Duplicate renderer provider for line start plugin type: " + b));
	a.C[b] = c;
	return a
}
function Rx(a, b, c) {
	a.F[b] && f(Error("Duplicate renderer provider for overlay type: " + b));
	a.F[b] = c;
	return a
}
function iz(a, b) {
	var c = a.A[b];
	c || f(Error("No renderer provider for layout view type: " + b));
	return c.A()
}

function F4a(a, b) {
	var c = a.C[b];
	c || f(Error("No renderer provider for line start plugin type: " + b));
	return c.A()
}
function Eu(a, b) {
	var c = a.F[b];
	c || f(Error("No renderer provider for overlay type: " + b));
	return c.A()
}
Ekb.prototype.O = function() {
	delete this.A;
	delete this.C;
	delete this.F
};

function FH(a, b) {
	pq.call(this, a);
	this.C = b || aya;
	this.A = l
}
L(FH, pq);
FH.prototype.ha = function() {
	FH.M.ha.call(this);
	var a = this.N();
	P(a, this.C);
	this.Wa() || Up(a, q)
};
FH.prototype.ua = function(a) {
	if (this.A != a && this.dispatchEvent(a ? xk : ug)) {
		var b = this.N();
		b && Up(b, a);
		this.A = a
	}
};
FH.prototype.Wa = C(Eb);

function GH(a, b) {
	this.F = a;
	this.A = b;
	this.R = new S(this);
	this.A.F ? this.C() : Ap(this.R, this.A, gc, this.C)
}
L(GH, M);
GH.prototype.C = function() {
	var a = this.A.bJ,
		b = this.A.Fba,
		c = zz();
	c.C = m;
	c.Xa = c.G;
	c.F = Ko(c.Xa);
	c.A = o3a(c);
	a && (c.Xa = b || $o(a).body.firstChild, c.C = a, c.F = Ko($o(c.C)), c.A = o3a(c));
	b = s3a();
	a = Ko($o(a));
	t3a(b, On(b.F).join(r), a, l);
	this.F.A.gf(cAa)
};
GH.prototype.O = function() {
	O(this.R);
	GH.M.O.call(this)
};

function Fkb(a, b, c, d) {
	this.C = a;
	this.K = b;
	this.ra = c;
	this.F = d
}
Fkb.prototype.A = 0;
Fkb.prototype.G = l;

function Lhb(a, b) {
	var c, d = b.A,
		e = 0;
	0 < a.A && (e = a.C.qa().ub() - a.A);
	if (0 != e) {
		a.G && (a.F && a.F.setTime(NCa), a.G = q);
		for (c = 0; c < d.length; c++) d[c] = Gkb(d[c], e)
	}
	c = a.K.A;
	c.apply(c.G, new F9a(d));
	a.A = a.C.qa().ub() - e
}

function Gkb(a, b) {
	switch (a.xa()) {
		case ph:
			return new vB(a.G, a.C() + b, a.F() + b, a.L);
		case wh:
			return new uB(a.C() + b, a.F() + b);
		case bi:
			return new aC(a.K() + b, a.qa());
		case li:
			return new tB(a.aa(), a.A() + b);
		case Ae:
		case De:
		case Ee:
		case Fe:
		case nh:
		case ni:
		case rh:
			return a;
		default:
			f(Error("Unknown mutation type to be shifted: " + a.xa()))
	}
};

function Hkb(a, b, c, d, e, g, h, n, p, t) {
	this.va = a;
	this.A = b;
	var u = jo();
	this.Ta = go(u, Kg);
	this.sg = new Zeb;
	this.vf = this.Ta ? rib() : c;
	this.ra = d;
	this.ira = h || q;
	this.Ura = n || m;
	this.YH = m;
	this.uq = new xjb(this.ra, t || m);
	c = this.uq.A;
	(!go(u, EAa) || t) && !c.wj && f(Error("Sync object store was not initialized synchronously and is not tied to local storage."));
	t = this.Ha = new BG(this);
	CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(CG(t, [GG.Bq], this.bsa), [GG.Bq], this.asa), [GG.Bq], this.wsa), this.Ta ? [xva, BIa] : [BIa], this.csa), [GG.Bq, Ci, GG.Lz], this.vsa), [Ci, GG.Xra], this.usa), [GG.Vra, Ci], this.dsa), [GG.Lz, Ci], this.ssa), [GG.Wra, Ci], this.esa), [GG.Bq, Ci], this.fsa), [Ci, GG.Lz, GG.Bq, oh], this.isa), [Ci, aGa, oh], this.tsa), [Ci, oh, Ce], this.xsa), [Ci, oh, Ce, Be], this.hsa), [GG.Lz, oh], this.jsa), [Ci, GG.Bq, aGa, oh, yh], this.ksa), [Ci, GG.Bq, GG.Lz, yh, oh], this.psa), [Ci, Be, Ce, JIa], this.lsa), [Ci, GG.Bq, oh, GG.Lz, yh], this.qsa);
	CG(CG(t, [Ci, GG.Lz, yh], this.rsa), [Ci, mFa, WFa], this.Zra);
	a.Ma && CG(t, [Ci, Be, aGa, WFa], this.gsa);
	this.Ta && go(jo(), $wa) && CG(t, [GG.Bq],
	this.$ra);
	t.start();
	this.Qk = new QG;
	this.na = new cH;
	this.Ma = new bH(this.na);
	Ikb(this);
	this.kI = go(jo(), Kg) || 2 == d8a() && this.va.Wb ? new dH(d, this.A.gc()) : m;
	(c = document.getElementById(a.yb)) || f(Error("Docs editor element does not exist."));
	this.Y = Ko(c);
	this.rI = new sib;
	(this.ea = (this.Xl = a.Vc ? new bjb : m) ? new ajb(this.Xl) : m) && this.ea.DO(a.Ba);
	B0a = !a.K;
	this.fc = new rcb(c);
	this.Aa = new uib(new fcb);
	zkb(this.Aa);
	c = this.Aa;
	XG(c, bi, new mkb);
	XG(c, ci, new nkb);
	XG(c, wh, new kkb);
	XG(c, xh, new lkb);
	XG(c, ei, new pkb);
	XG(c, Bi,
	new skb);
	XG(c, di, new okb);
	XG(c, Ai, new rkb);
	XG(c, nh, new ekb);
	XG(c, ni, new tkb);
	XG(c, rh, new ikb);
	XG(c, li, new qkb);
	XG(c, ph, new hkb);
	h = {
		"docs-mlti": new pH,
		"docs-null": new T9a,
		"docs-replace": new pH,
		"docs-reverse": new pH,
		"docs-revert": new pH,
		"docs-undo": new pH
	};
	for (var x in h) XG(c, x, h[x]);
	x = this.Aa;
	x.C.set(bi, new wkb);
	x.C.set(ci, new qH);
	x.C.set(wh, new ukb);
	x.C.set(xh, new qH);
	x.C.set(ei, new qH);
	x.C.set(Bi, new qH);
	x.C.set(di, new qH);
	x.C.set(Ai, new qH);
	c = {
		"docs-mlti": new qH,
		"docs-null": new qH,
		"docs-replace": new qH,
		"docs-reverse": new qH,
		"docs-revert": new qH,
		"docs-undo": new qH
	};
	for (var y in c) x.C.set(y, c[y]);
	y = this.Aa;
	YG(y, bi, new rH);
	YG(y, ci, new xkb);
	YG(y, wh, new rH);
	YG(y, xh, new vkb);
	YG(y, ei, new rH);
	YG(y, Bi, new rH);
	YG(y, di, new ykb);
	YG(y, Ai, new rH);
	YG(y, nh, new rH);
	YG(y, ni, new rH);
	YG(y, rh, new rH);
	YG(y, li, new rH);
	YG(y, ph, new rH);
	x = {
		"docs-mlti": new Ujb(y),
		"docs-null": new Vjb,
		"docs-replace": new rH,
		"docs-reverse": new Xjb(y),
		"docs-revert": new rH,
		"docs-undo": new rH
	};
	for (var B in x) YG(y, B, x[B]);
	B = this.Aa;
	y = a.L;
	B.A.set(bi,
	new VD);
	B.A.set(wh, new UD);
	B.A.set(nh, new RD);
	B.A.set(ni, new bE);
	B.A.set(rh, new TD);
	B.A.set(li, new $D);
	B.A.set(ph, new SD(y, d));
	B.A.set(hHa, new WD);
	B.A.set(Fe, new dcb(B));
	B.A.set(Ee, new bcb(B));
	B.A.set(Ae, new XD(B));
	B.A.set(De, new Zbb);
	this.ZH = (B = io(u, Aya)) ? new hH(B, d) : m;
	this.gra = new ecb;
	this.h9 = new tib(this.Aa);
	this.hra = new qjb(this.h9);
	this.Ae = new Akb;
	this.fI = new hcb;
	B = a.A;
	this.Pc = new hXa(d, a.sI, 4 != B, 0, this.Y);
	this.Sl = new mu(this.Pc, d, this.na);
	this.Wb = new eH(this.A, d, this.kI);
	this.vq = new Ojb;
	this.R8 = new Hjb;
	this.S8 = new Ijb;
	this.gI = new Gjb(this.R8, this.S8);
	y = this.Jb = new IG(window, m, this.A.gc(), this.vf);
	x = wm(v8a, this.A.A);
	y.cd() || y.C.push(x);
	N(this.Jb, this);
	this.C = Yab(d, this.Aa, this.Aa, this.Ae, a, g);
	g || (this.C.ba().K.F = l);
	this.Yra = new fC(this.C, a, this.vq, this.Ae, d);
	g = this.na;
	y = this.A;
	x = this.Jb;
	!go(jo(), nCa) || !window.parent || window.parent == window ? c = q : (c = window.name, c = !! c && Bm(c, sha));
	c ? (g = new nbb(g, y, x), y = new dbb, g = new tD(g, y)) : g = m;
	this.yb = g;
	this.Ba = 4 == B ? new Jr(a, this.Qk, b, QUa) : new Ir(a, this.Qk, b,
	QUa);
	this.oq = this.eI = this.F = m;
	if (go(jo(), Qf)) {
		g = this.Ba;
		g.gb(zh, r, 192);
		g.Ea(U.tq);
		g.Ea(U.aI);
		g.Ea(U.bD);
		g.Ea(U.cD);
		g.Ea(U.dD);
		g.Ea(U.Os);
		g.Ea(U.eD);
		g.Ea(U.BO);
		g.Ea(U.AO);
		g.Ea(U.OPEN);
		g.Ea(U.Qm);
		g.Ea(U.Th);
		g.Ea(U.iI);
		g.Ea(U.Sm);
		g.Ea(U.uo);
		g.Ea(U.Dz);
		g.Ea(U.Ei);
		g.Ea(U.xq);
		g.Ea(U.aD);
		g.Ea(U.uh);
		g.Ea(U.bw);
		g.Ea(U.Bz);
		g.Ea(U.Pm);
		g.Ea(U.Ks);
		g.Ea(U.Ls);
		g.Ea(U.Rm);
		U.wo.setProperty(Mi, Lha);
		g.Ea(U.wo);
		g.Ea(U.lI);
		g.Ea(U.xz);
		g.Ea(U.yz);
		g.Ea(U.rq);
		g.Ea(U.qq);
		g.Ea(U.Ns);
		g.Ea(U.Tl);
		g.Ea(U.Rv);
		g.Ea(U.Wv);
		g.Ea(U.Ms);
		g.Ea(U.dw);
		g.Ea(U.bt);
		g.Ea(U.Bf);
		g.Ea(U.Uh);
		g.Ea(U.lD);
		g.Ea(U.Ss);
		g.Ea(U.Js);
		g.Ea(U.Is);
		g.Ea(U.Rs);
		g.Ea(U.Ts);
		g.Ea(U.Sv);
		g.Ea(U.Co);
		g.Ea(U.Dc);
		g.Ea(U.wq);
		U.wq.Ca(l);
		go(jo(), xe) && g.Ea(U.fD);
		g.Ea(U.hk);
		g.Ea(U.gk);
		g.Ea(U.Vm);
		U.Vm.Ca(CRa());
		for (var E in g.A) Er(g, E)
	}
	E = this.ea;
	x = y = g = m;
	go(jo(), Yza) && (y = new Tib(Dz), g = new P3a(new D3a(s3a(), new v3a, B3a, y, new Bz), d, y), x = new Rib(E, this.ra, p || m, this.A.gc()));
	this.jD = y;
	this.Di = g;
	this.f9 = x;
	this.i9 = new es;
	this.pe = new Ekb;
	this.jI = new gF;
	this.Vc = new Lr(this.A.A);
	this.vI = new Dkb;
	this.Tv = new sbb;
	this.K = m;
	this.Ul = new Xeb;
	this.Vl = new Xbb(a.ea);
	this.L = this.G = m;
	this.R = new S(this);
	this.R.A(this.C, Lf, this.nsa).A(this.A, Qb, this.osa);
	this.$H = m;
	this.dI = new cjb(BRa());
	this.od = A$a(B, this.fI, this.Ae, this.Yra, this.Wb, this.Aa, this.Aa, this.Aa, d);
	this.$b = m;
	this.XH = a.Vc && (4 == B || 3 == B) ? new djb(this.A.A, this.Vc, a.Na) : m;
	this.Na = m;
	this.tg = kF.ya();
	E = new Fkb(this.C.ba(), this.od, d, this.tg);
	x = a.eI.concat();
	c = a.Sl;
	g = Jkb(B, !Ar(b.A));
	B = a.Ul;
	y = a.Wb;
	!a.fk || !g ? g = new GXa : (h = new W7a, 0 < x.length && X7a(h,
	x), c && Y7a(h, c), c = Z7a(h), x = new qB, h = jo(), c = Y7a(X7a(new W7a, c.A), c.C), wva in h.A && (n = io(h, wva), pB(c, n)), Kg in h.A && (h = go(h, Kg) ? RAa : YAa, pB(c, h)), y != m && (y = go(jo(), Kg) || 2 == d8a() && y ? TAa : UAa, pB(c, y)), y = Z7a(c), c = go(jo(), cya), g = new $7a(6E4, CXa, y, g, g, f8a, x, B, c ? new e8a : k));
	this.pq = g;
	this.W = new Shb(b, this.vf, t, this.kI, this.Aa, this.Wb, E, jh, this.Y, a.Na, this.ZH, d, this.Jb, this.pq);
	b = window;
	if (b.history && b.history.replaceState) {
		t = b.location.href;
		for (E = 0; E < x8a.length; E++) t = mZa(t, x8a[E]);
		b.history.replaceState(m, r,
		t)
	}
	E = (t = (b = this.W.C) ? new Vib(b) : m) ? new njb(t) : m;
	b = g = m;
	E && (g = new lH(E, t, Og, this.A.gc(), Og), b = new lH(E, t, Bf, this.A.gc(), Bf));
	t = Kbb(this.ea, this.A.gc(), g, d, e);
	this.Tv.A[0] = new Pbb(this.vI, 0, new Nbb(t));
	e = new pjb;
	t = new Uz(this.C, new Mbb, t, e);
	N(this, t);
	b = new MD(new Jbb(a.od, a.pe, a.Aa), ks(b), d);
	this.Tv.A[2] = new rbb(this.vI, 0, b);
	e = new Uz(this.C, new pbb(this.Ta), b, e);
	N(this, e);
	this.getPerformanceManager = ju(d, this.O8, this);
	this.resize = ju(d, this.Me, this);
	this.getWarmStartDocumentLoader = ju(d, this.msa, this);
	BTa = a.K;
	this.Ta || (a = ho(u, dNa), d = ym() + kH, 3E4 <= Math.abs(d - a) && (kH = a - ym()));
	this.Qc = m;
	this.Q8 = new vib;
	this.P8 = new es;
	if (!this.Ta || !go(jo(), $wa)) Kkb(this, p || m, m);
	this.fk = m
}
L(Hkb, M);
F = Hkb.prototype;
F.Nba = q;
F.jk = m;
F.Ed = m;
F.k9 = m;
F.Caa = q;
F.l9 = m;
F.Hi = m;
F.zI = m;
F.V8 = m;
F.nD = m;
F.QO = m;
F.CD = m;
F.Vv = m;
F.Ppa = q;
F.sja = q;

function Ikb(a) {
	a = wm(function(a, c, d, e) {
		a.Zf(Error(Jia + d + uaa + e))
	}, a.ra);
	ps.ya().aO(Xf, a)
}
F.osa = function() {
	!this.sja && !this.A.fh && (this.sja = l, this.ra.log(Error(Kea)))
};
F.fsa = function() {
	ts(ps.ya(), Fi, K(this.TOa, this, this.L, this.$b, this.G, this.K))
};
F.TOa = function(a, b, c, d) {
	uu(this.O8(), this.V8);
	var e = qs(Fi).wf,
		g = this.va;
	this.ra.G = e.Lra();
	a.qo = e;
	Cdb(a);
	$_a(b, e);
	a = new $hb;
	this.Ta && KG(a, NG);
	if (this.Xl && this.ea) {
		var h = new(e.Nra());
		b = this.fI;
		b.gw = h;
		b.iX && b.gw.EO(b.iX);
		var n = e.Cra();
		b = Whb(this.W);
		this.jk = new n(this.vf, this.va.bI, this.va.Ba, l, !this.va.Ma, this.A, a, this.Wb, this.Aa, this.gra, this.hra, h, this.Ae, this.ra, b, this.W.sb(), this.Ta, this.Ha, wm(e.Gra(), this.Ma), this.ZH, this.dI);
		var h = e.Dra(),
			n = this.A,
			p = this.Y,
			t = this.ra,
			u = this.Ta,
			x = this.va.Na,
			y = this.W;
		DG(y.A, ue);
		b = h(n, a, p, t, u, x, y.Ba, K(b.U8, b), this.ea);
		N(this, b)
	}
	go(jo(), Qf) && (this.F = new(e.tra())(this.Ba, []), this.eI = new(e.sra())(K(this.od.execute, this.od), mq, this.na, this.F), e.Ira()(this.F, a, this.A.A, this.A, this.Vc, this.C), this.YH = new(e.Jra()), this.oq = new(e.Kra())(this.C), this.F.A(this.YH), this.F.A(this.oq), e.ura()(this.F, g));
	if (c) {
		h = this.Pc.Bo;
		a = c.ma();
		b = c.Q;
		if (p = a.N(ze)) n = c.Ez = new(e.Fra())(c.K, k, a), c.Oa(c.Ez), sq(n, p), p = PVa(b, e), n.F(b.va, vs(b, e), p, b.C, b.A.ba()), e.yra()(p, n, h);
		if (h = a.N(sAa)) c.ok = new(e.Mra())(c.G, b.va.Qk, c.L, c.F, k, k, a), c.Oa(c.ok), sq(c.ok, h), c.cI = e.Bra()(c.ok, b.K);
		c.Ez && (c.iD = (new(e.Hra())(PVa(c.Q, e), c.A)).F(), c.iD && (c.iD.qra(), c.ok && c.ok.Ora(c.iD)));
		OVa(c);
		c.bb() && LVa(c);
		e.wra()(this.F || k)
	}
	a = d.K;
	e.xra()(this.fc, a);
	e.vra()(this.A);
	d = this.F ? e.ZW() : k;
	e.pra(this.Ba, 4 != g.A, this.Ma, this.A, this.na, this.F || k, d);
	b = g.Ae;
	this.F ? (e.b9()(uf, b, k, this.F, d), e.c9()(this.A, b, ibb, this.F, d), e.d9()(this.A, k, this.Ma, this.F, d)) : this.A.C || (e.b9()(uf, b), e.c9()(this.A, b, ibb), e.d9()(this.A, k, this.Ma));
	c && this.jk && (this.Vv = e.Ara()(this.A, this.jk.e9(), this.F || k), this.Ta && !g.Na && this.Vv.Pra());
	c = new RG(nFa);
	hx(a, c, nFa);
	N(this, c);
	g = new RG(exa);
	hx(a, g, exa);
	N(this, g);
	go(jo(), HLa) && e.Era()(this.Y, c);
	this.jk && (c = this.jk.e9(), this.XH && (g = this.XH, g.zz || (g.zz = c, g.R.A(c, $f, g.rra), ejb(g))), jib(this.Qk, c));
	e.zra()(this.F || k, d);
	this.Ha.gf(oh)
};
F.rsa = function() {
	cfb() || go(jo(), tza) ? this.MS() : $q && Ap(this.R, document, Rta, this.MS);
	var a = this.Ba.Ja(U.wq.aa());
	a && a.$a(v, this.MS, this);
	var b = this.Y.N(iFa);
	b && this.R.A(b, Od, function() {
		a.qb()
	})
};
F.MS = function() {
	ts(ps.ya(), Ei, K(this.TPa, this, this.Na, this.Hi, this.L));
	var a = this.Ba.Ja(U.wq.aa());
	a && a.cg(v, this.MS, this)
};
F.Zra = function() {
	var a = this.Na.A[14] || m,
		a = new(qs(Ei).wf.vMa())(a ? a.A : m);
	this.zI.Ha(a)
};
F.TPa = function(a, b, c) {
	var d = qs(Ei).wf,
		e = new(d.hDa());
	U7a(a, 38, e);
	a = new(d.fDa())(this.Y);
	e = new(d.gDa())(a, this.A.gc(), this.ea);
	b.Cq(38, e);
	this.zI = new(d.eDa())(this.C, c, a, this.Ba, new(d.dDa())(this.Q8));
	this.zI.vb();
	this.zI.Na(this.va);
	this.Ha.gf(mFa)
};
F.psa = function() {
	ts(ps.ya(), Ii, K(this.xQa, this, this.K, this.Na, this.Hi))
};
F.qsa = function() {
	var a = this.$b,
		b = new wu(a.C, a.Ta, a.va.ea);
	N(a, b);
	(a.uD || (a.uD = new S(a))).A(b, eva, a.IEa);
	b.vb()
};
F.xQa = function(a, b, c) {
	var d = qs(Ii).wf;
	if (this.va.L) {
		var e = a.F,
			g = d.Qsa(),
			h = HG(this.W);
		this.nD = new g(b, c, this.A.gc(), this.va, this.C, e, this.vf, this.pe, this.na, this.Jb, this.Vv ? this.Vv.tI : m, this.Vc, h, this.A.tD, this.W.sb());
		Ap(this.R, this.nD, Ti, this.Vsa);
		this.nD.Wsa()
	} else this.Y.removeNode(this.Y.N(rwa)), this.Ha.gf(WFa);
	b = this.A.F;
	b = b != m && (vRa(b) || 0 != In(b, Kn, 0).length);
	go(jo(), Sxa) && (this.ea && b) && (a = new(d.Ssa())(this.C, a.F, this.pe), U7a(this.Na, 27, a), a = new(d.Rsa())(this.A, this.ea, this.L, this.C, a), this.Hi.Cq(27,
	a));
	4 == this.va.A && go(jo(), Kwa) && (a = this.K.K.A[Di] || m, b = (b = this.Na.A[37] || m) ? b.C : m, this.QO = new(d.Usa())(this.va, this.A, Sw(this.$b), this.C, a, this.K.na, this.vq, this.Hi.G, this.Vl, b), this.Hi.Cq(37, this.QO));
	$q && cr(14) && this.Hi.Cq(36, new(d.Tsa())(this.A, this.L, this.Ma));
	this.Ha.gf(JIa)
};
F.lsa = function() {
	var a = qs(Ii).wf,
		b = qs(Fi).wf,
		c = this.jk.IX(),
		d = this.jk.K9();
	this.nD && this.nD.iva(c, d);
	this.QO && this.QO.jva(c);
	$q && cr(14) || this.Hi.Cq(36, new(a.hva())(this.va.ZH, this.va.Ae, this.A, this.dI, this.fc, this.Ma));
	this.va.C && this.Hi.Cq(25, new(a.fva())(this.C, this.Ma, this.ea, this.A, this.va.ea));
	var e = this.$b;
	e.YX = a;
	e.Uz = new(a.eva())(e.Y, e.C, e.na, e.G, e.va, e.yb);
	e.Uz.setActive(e.St);
	Z_a(e);
	e = this.K.K.A[exa] || m;
	(e = a.dva(this.A.gc(), c, c.Ff(), this.vf, this.Ed, this.na, e)) && N(this, e);
	go($n.ya(), oCa) && (e = this.G ? this.G.Ez : m) && this.Hi.Cq(31, new(a.gva())(this.A, c, d, e, this.Jb, this.vf, b.ZW(), this.C.A, this.Wb, this.F || k))
};
F.xsa = function() {
	var a = this.jk.IX(),
		b = this.Xl;
	for (b.A = a; b.C.length;) b.A.send(b.C.shift());
	this.Jb.A = a;
	var b = qs(Fi).wf,
		c = this.va;
	go(jo(), Qf) ? b.Oba()(this.A, a, k, k, this.F || k, b.ZW()) : this.A.C || b.Oba()(this.A, a);
	if (this.G) {
		c = c.Ae;
		if (!(!this.Vv && !this.G.Ez || !this.F && this.A.C)) {
			var d;
			if (this.F) {
				d = new oib;
				var e = new pib(d);
				this.F.A(e);
				N(this, e);
				N(this, d)
			}
			b.Bya()(this.A, a, jh, mQa, c, this.ra, this.Ma, this.Vv ? this.Vv.Cya() : m, this.F || k, d)
		}
		U.Qm.$a(v, K(this.Dya, this, a))
	}
};
F.Vsa = function() {
	this.Ha.gf(WFa)
};
F.gsa = function() {
	var a = m,
		b = m,
		c = this.Na.A[14] || m;
	c && (a = c.K, b = c.F);
	this.jk ? this.$H.vb(this.jk, a, b) : f(Error("Communications manager does not exist in exportNativeApi."))
};
F.vb = function() {
	if (!this.Caa) {
		var a = this.va,
			b = this.sg;
		if (!b.bJ) {
			Wo(b.bJ);
			var c = b.bJ = Ro(hc, {
				style: rLa,
				frameborder: 0,
				src: bh
			}),
				d = Ro(Mc, {
					style: sLa
				}, c);
			document.body.appendChild(d);
			(Eo ? c.document : c.contentDocument) || c.contentWindow && c.contentWindow.document ? b.Baa() : (b.BE = m, Ap(b.R, c, Ti, b.Baa))
		}
		b.A = b.BE ? b.BE : b.C;
		b = [];
		a.fk && b.push(new nH(this.pq));
		a.vq && (a = oB.ya(), c = rB.ya(), b.push(new Fjb(K(a.F, a))), b.push(new Fjb(K(c.F, c))), a = ju(this.ra, K(rB.ya().C, rB.ya()), this), km.getEventTrace = a);
		a = qu.ya();
		b = new Jib(b);
		a.F = b;
		b.init();
		this.W.vb();
		b = ps.ya();
		(b.Ch.kix_app.Ro() || BVa(b, Fi)) && f(Error("Module load already requested: kix_app"));
		c = GVa(b, Fi);
		for (d = 0; d < c.length; d++) {
			var e = b.pP,
				g = c[d];
			if (!e.VI && !e.A[[g]]) {
				var h = {};
				h[g] = b.Ch[c[d]];
				e.A[[g]] = new Lkb;
				Mkb(e, [g], h)
			}
		}
		this.V8 = tu(a, new Ou($d, zsa));
		this.Caa = l;
		this.yb && this.yb.vb();
		a = this.na;
		b = this.Pc;
		a.R.A(b, eg, a.F).A(b, Ad, a.C);
		this.fk = new FH(this.Y);
		this.fk.Va(this.Y.N(this.va.yb));
		gs(this.uq.A, K(this.Ha.gf, this.Ha, BIa))
	}
};
F.vsa = function() {
	var a = this.Na.A[20] || m;
	if (a) {
		var a = a.MO,
			b = HG(this.W),
			c = this.W.sb();
		if (a && (b && c) && (!a.A || !a.Ub)) a.A = b, a.Ub = c, B4a(a)
	}
};
F.wsa = function() {
	var a = HG(this.W);
	if (a) {
		var b = this.uq;
		if (6 > a.A.Lq() || 6 > ho(jo(), zJa) || !go(jo(), KAa)) b.G && b.A.zb();
		else if (b.C = new vjb(a, b.ra), b.G) {
			var a = b.C,
				c = K(b.K, b),
				b = K(b.A.Bd, b.A),
				c = wm(a.C, c);
			a.A.A.Oaa(c, b)
		} else(a = b.F.zc()) && b.C && b.C.write(a, wm(G, a))
	}
};
F.$ra = function() {
	Kkb(this, m, this.W.sb())
};

function Kkb(a, b, c) {
	var d = a.Di,
		e = a.pq,
		g = a.ra,
		h = a.jD,
		n = a.f9,
		p = a.C,
		t = m,
		u = m,
		x = m;
	n && (h && d) && (x = new b4a(h), t = new MD(n, a.i9, g), u = y4a(p, x, t, d, h), u.Ca(q), n = t, h = new $z(d, h), x = new f4a(x, n, h), N(x, h));
	b = new Mjb(d, e, b, c, g, t, x, u);
	u && x && (N(b, u), N(b, x));
	a.Qc = b;
	u = new GH(a.Qc, a.sg);
	N(a, u);
	a.Qc.vb();
	a.P8.zb(a.Qc)
}
F.csa = function() {
	O(this.fk);
	this.fk = m;
	var a = new nE(this.C.ba(), this.ra);
	N(this, a);
	var b = go(jo(), EAa) ? this.uq : m,
		c;
	b && (c = new mjb(b, 1));
	this.K = Seb(this.C, this.va, this.Ba, this.ra, this.Y, a, this.Tv, this.Di, this.pe, this.sg, this.A, this.ea, this.Vc, c);
	a = this.K.K;
	b = new mib;
	hx(a, b, we);
	N(this, b);
	this.G = this.Y.N(we) ? new us(this.K, this.na, this.sg, this.Ma, this.Ul, this.Vl, b) : m;
	var a = q,
		d, e;
	this.yb && (d = this.yb.A, (a = d.A(xDa)) && (e = d.A(rDa)), d = {
		hX: d.A(wDa),
		ora: d.A(vDa),
		jX: K(d.L, d),
		kX: K(d.W, d)
	});
	this.L = new cF(this.K, this.va.Ta,
	this.na, this.fc, new icb(this.K.ba()), a || this.va.G, this.K.L, 0, this.A, 0, this.Ta, this.jI, this.Q8, this.ea, e, d);
	e = this.va.A;
	1 == e && this.L.GO(1, 0.5, 1);
	this.yb && a && this.R.A(this.L, fCa, this.Tra);
	this.$H = this.va.Ma ? new PD(this.L, this.C) : m;
	a = 4 != e;
	d = new mH(this.ra);
	this.$b = f0a(this.va, this.Ba, this.Pc, this.Sl, this.C, this.ra, this.G, this.L, a, this.Y, this.A, this.na, d, this.Vl, this.Vc, this.od, this.gI, !! this.yb);
	a = new Bjb(new Djb(this.Ba, this.ra), this.ra);
	N(this, a);
	b = this.C;
	c = V_a(this.$b);
	a.FO = l;
	a.YW = b;
	a.A.vg(new Ajb(a.YW));
	a.R.A(b, Lf, ju(a.ra, a.Sra, a)).A(b, Kf, ju(a.ra, a.Qra, a)).A(c, Hj, ju(a.ra, a.Rra, a));
	e = this.Na = new nB(this.Ba, a, e, this.K.K, this.ra, this.K, this.L, this.pe, this.jI, this.Tv, d, this.R8, this.S8, this.Di, this.fc, this.P8, this.jD, this.A);
	d = this.va;
	a = this.ira;
	b = {};
	b[44] = new J7a(e.Na);
	b[29] = new $4a;
	b[35] = new bB;
	b[7] = new X0a;
	b[30] = new a5a;
	b[43] = new N7a;
	b[3] = new jx(d.W);
	b[4] = new w0a(e.C);
	b[5] = new Mx(d.Qk, d.K, e.Q.A.ba().K);
	b[6] = new Qx;
	d.Y && (b[9] = new r2a(e.Q.A, e.Q.F, e.G));
	d.L && (b[15] = new qz(a));
	b[17] = new Z3a(e.Q.A, e.F,
	e.Q.L);
	d.Ha && (b[18] = new $3a);
	b[20] = new C4a(e.F, e.Q.L, e.Q.A, e.Q.ra, e.na, e.yb);
	b[23] = new W4a;
	b[24] = new Y4a;
	b[21] = new gA;
	if (d.C || d.F) b[26] = new F2a;
	b[33] = new f5a;
	b[42] = new c6a;
	b[32] = new d5a;
	b[2] = new gx(0, d.Ta);
	4 == d.A && d.W && (b[40] = new qA);
	4 == d.A && (go(jo(), Kwa) && d.Vc) && (b[37] = new oA(0, e.Q.ma(), e.Ba));
	d.Qc && (b[46] = new P7a);
	b[34] = new mA(d.A);
	b[22] = new V4a;
	d.F && (b[16] = new E2a);
	b[25] = new Z4a(d.C);
	b[45] = new O7a(e.Aa, d.fc);
	b[48] = new S7a;
	go(jo(), Lwa) && (No(SIa) && No(LAa)) && (b[47] = new R7a);
	b[19] = new a4a;
	b[39] = new n5a;
	go(jo(), fGa) && (b[41] = new p5a);
	b[11] = new D2a;
	b[36] = $q && cr(14) ? new e5a : new j5a;
	e.A = b;
	for (var g in e.A) T7a(e, e.A[Number(g)]);
	this.G && sq(this.G, this.Y.N(we));
	sq(this.L, this.Y.N(pFa));
	this.Ha.gf(Ci)
};
F.msa = function() {
	var a = this.W;
	a.ea || f(Error("Calling getWarmStartDocumentLoader() before initializing documentLoadBootStrapper."));
	return a.Y
};
F.bsa = function() {
	var a = new kjb(this.A, this.Wb, Whb(this.W), K(this.rI.A, this.rI));
	N(this, a)
};
F.asa = function() {
	var a = m,
		b = this.W.C,
		c = HG(this.W);
	b && c && (a = new Pib(c, b, this.ra));
	this.i9.zb(a)
};
F.usa = function() {
	this.tg.setTime(pua);
	this.Qc.A.gf(bAa)
};
F.dsa = function() {
	var a = this.$b,
		b = Mr(a.ea) || Nr(a.ea);
	a.A.s3 = b;
	X_a(a);
	this.na.qe(this.yb || window != window.top ? 1 : 3);
	Nkb(this)
};
F.ssa = function() {
	this.Nba || (this.Nba = l, this.C.ba().K.F = l, this.Qc.A.gf(aAa), this.L.tZ())
};
F.esa = function() {
	this.$b.St || (this.na.qe(this.yb || window != window.top ? 1 : 3), this.$b.setActive(l));
	this.G && this.G.Ca(l);
	this.Ha.gf(aGa);
	Nkb(this);
	this.tg.setTime(OCa);
	this.tg.setTime(Nf)
};

function Nkb(a) {
	a.Ppa || (a.Ppa = l, a.tg.setTime(cua))
}
F.isa = function() {
	this.jk && this.jk.vb(Xhb(this.W))
};
F.hsa = function() {
	var a = qs(Fi).wf,
		b = this.jk.IX(),
		c = this.jk.K9();
	this.Ed = new(a.sua())(c, b, this.A.gc(), this.C, this.L, this.Wb, this.Ae, this.ra);
	this.rI.Ed = this.Ed;
	if (this.va.Pc) {
		var d = a.rua(),
			e = go(jo(), Qf) ? this.Ba : k;
		this.l9 = new d(this.L, this.$b, this.fc, this.va, this.A, b, this.Aa, this.h9, this.ra, this.Pc, this.Sl, this.Y, this.sg, this.vq, this.gI, this.jI, this.Di, this.Vc, this.jD, this.f9, m, this.oq || k, e, this.eI || k, this.F || k)
	}(this.bI = a.pua(this.Ed, this.K.K)) && this.bI.k$(K(function(a) {
		Rw(this.L, a.Ne().Lb)
	}, this));
	a = this.k9 = new(a.qua())(c);
	this.R.A(a, ah, K(this.tua, this, this.$b, this.G)).A(a, cFa, K(this.uua, this, this.$b, this.G))
};
F.jsa = function() {
	this.Ul.vb(this.C)
};
F.tsa = function() {
	this.tg.setTime(psa);
	var a = qs(Fi).wf,
		b = this.G ? this.G.iD : m,
		c = a.dua(),
		d = this.G && this.G.ok ? this.G.ok.fua() : m,
		e = this.G && this.G.ok ? this.G.ok.eua() : m,
		g = vs(this.K, a),
		a = PVa(this.K, a),
		h = this.L;
	this.Hi = new c(this.Na, this.od, this.Ba, this.C, this.ra, this.na, this.K.K, this.K.F, this.Ma, this.dI, h, h, this.Y, this.K, this.pe, V_a(this.$b), d, e, g, this.Ura, a, this.fc, this.Vl, b, this.Pc, this.Sl, this.ea, Sw(this.$b), this.vq, this.jD, this.Ul, this.F, this.eI, this.vI, this.gI);
	this.$b.Ma = this.Hi;
	this.Hi.gua(this.va,
	this.A);
	this.$b.e$ = this.Hi.G;
	this.L.Qo = a;
	this.Ha.gf(yh)
};
F.ksa = function() {
	if (this.Hi && this.ea) {
		var a = (new(qs(Fi).wf.Dza())).zza(this.A).Cza(this.ea).Gza(this.Jb).Fza(this.Hi).Bza(this.C),
			b = HG(this.W);
		b && (b.C && go(jo(), Hwa)) && a.Aza(b);
		if (this.CD = a.yza()) a = this.K.C, a.Mw && f(Error("Impression system has already been set.")), a.Mw = this.CD, a.Mw.K(On(a.F)), this.fI.EO(this.CD);
		this.Hi.Eza(this.CD)
	}
};
F.nsa = function(a) {
	var b = this.C.A.getSelection();
	4 != this.va.A ? this.Pc.ua(Ks(b)) : a.A && 0 == b.Lb.xa() && (a = this.Wb, a.Iz && Ar(a.C.A) ? a.Iz.m9(b) : a.uI = b)
};
F.O8 = function() {
	return qu.ya()
};
F.tua = function(a, b) {
	a.A.DU = q;
	b && b.Ca(q)
};
F.uua = function(a, b) {
	a.A.DU = l;
	b && b.Ca(l)
};
F.Dya = function(a) {
	var b = qs(Fi);
	b.Ro() && (new(b.wf.EMa())(this.A.gc(), this.A.fh, a, vG(Xib(this.Wb)))).show()
};
F.Tra = function(a) {
	this.yb.A.A(eNa, a.height)
};
F.Me = function() {
	this.L && this.L.Me()
};
F.O = function() {
	O(this.R);
	O(this.k9);
	O(this.od);
	O(this.zI);
	O(this.Hi);
	O(this.Na);
	O(this.$H);
	O(this.Ba);
	O(this.F);
	O(this.pe);
	O(this.Ed);
	O(this.jk);
	O(this.Qk);
	O(this.A);
	O(this.ZH);
	O(this.bI);
	O(this.XH);
	O(this.G);
	O(this.L);
	O(this.nD);
	O(this.$b);
	O(this.C);
	O(this.Sl);
	O(this.Pc);
	O(this.Ma);
	O(this.K);
	O(this.Di);
	O(this.ra);
	O(this.Ha);
	O(this.kI);
	O(this.na);
	O(this.pq);
	O(this.YH);
	O(this.oq);
	O(this.l9);
	O(this.Ae);
	O(this.Wb);
	O(this.fc);
	O(this.yb);
	O(this.sg);
	O(this.Ul);
	O(this.CD);
	O(this.Vv);
	O(this.Qc);
	O(this.W);
	O(this.Vc);
	O(this.fk);
	O(Iib);
	Hkb.M.O.call(this)
};

function Jkb(a, b) {
	switch (a) {
		case 4:
		case 3:
			return b ? eCa : cCa;
		case 2:
			return VPa;
		case 1:
			return DLa;
		default:
			return m
	}
}

function Okb(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	var E = new ebb(b.gI, b.bx(), go(jo(), Kg) || b.bx() != r);
	E.setTitle(d || r, l);
	d = E.A;
	zr(d, xr(d.Fa, 128, 4 == b.A || 3 == b.A)) && d.dispatchEvent(ud);
	zr(d, xr(d.Fa, 16, 4 == b.A)) && d.dispatchEvent(Hf);
	e || YUa(d);
	u && (E.tD = u, E.dispatchEvent(new uD(vl, l)));
	x && (e = x[0], u = x[1], 3 == x[2] ? fbb(E, ysa, u) : fbb(E, e, u));
	B && gbb(E, new Ln(B), l);
	return new Hkb(b, E, a, c, g, h, n, p, t, y)
};

function Pkb(a) {
	return (a = a.match(/[-_]([a-zA-Z]{2}|\d{3})([-_]|$)/)) ? a[0].replace(/[_-]/g, r) : r
};

function Qkb(a, b, c) {
	this.C = a;
	this.F = b;
	this.A = c
}
var Rkb = new Qkb(72, 8, 4.5),
	Skb = new Qkb(AYa, 4, AYa / 4);

function HH(a) {
	this.jI = a;
	this.A = a.am || 4;
	this.od = a.ak || r;
	this.Sl = a.bl || r;
	this.sg = !! a.ci;
	this.eI = a.csie || [];
	this.Ul = !! a.csisvi;
	this.gI = a.docid;
	this.Xl = a.dau || r;
	this.Aa = a.domain || r;
	this.pe = a.durl || r;
	this.yb = a.elementId;
	this.vI = a.email || r;
	this.tg = !! a.ear;
	this.Qk = !! a.ebc;
	this.Di = !! a.ecb;
	this.Wb = !! a.ecso;
	this.Y = !! a.ec;
	this.fk = !! a.ecsi;
	this.Vl = !! a.edpr;
	this.pq = !! a.edi;
	this.L = !! a.edo;
	this.Jb = !! a.edos;
	this.F = !! a.edr;
	this.Ha = !! a.eex;
	this.G = !! a.ehpl;
	this.C = !! a.eimg;
	this.Tv = !! a.esco;
	this.vq = !! a.els;
	this.oq = !! a.ems;
	this.Ma = !! a.ena;
	this.Na = $q && cr(ho(jo(), bya));
	this.Go = !! a.epub;
	this.W = !! a.erts;
	this.uq = !! a.erv;
	this.rI = !! a.rofp;
	this.Pc = !! a.erh;
	this.dI = !! a.ercp;
	this.Ta = !! a.er;
	this.Vc = !! a.esvcm;
	this.jD = !! a.est;
	this.fc = !! a.etr;
	this.sI = !! a.ewd;
	this.Qc = !! a.hod;
	this.K = !! a.rtl;
	this.ea = a.l || Pf;
	this.kI = a.ogi || r;
	this.bI = a.oui || r;
	this.YH = a.fpu;
	this.ZH = a.psi || r;
	var b = a.l,
		c = b ? Pkb(b) : r;
	this.fI = b == Pf || c == Tc ? Tc : c;
	this.Ba = a.up;
	this.Ae = a.ud;
	this.$H = a.un;
	this.XH = a.wfsl || []
}
HH.prototype.vf = m;
HH.prototype.bx = C("vI");
HH.prototype.na = jm(159);
HH.prototype.La = function(a) {
	var b = Vn(this.jI);
	if (a) for (var c in a) b[c] = a[c];
	return new HH(b)
};

function Tkb(a) {
	var b = Zn(On(EXa));
	a ? delete b.mp : delete b.mr;
	delete b.sfpjy;
	delete b.efpjy;
	delete b.fbe;
	delete b.mpe;
	I(k) && delete b.webfontsRender;
	return Pn(b)
};

function Ukb(a, b) {
	this.A = a;
	this.C = b
};
km._createKixApplication = function(a, b, c, d, e, g, h, n, p, t, u, x, y, B) {
	var E = go(jo(), Kg);
	if (E) {
		var H = lhb(window.location.href);
		(d = lhb(window.location.href).id) || f(Error("No docId in URL"));
		b.docid = d;
		d = H[jKa] == hl;
		H = H.cm;
		b.edo = H == ee;
		b.ec = H == Dd
	}
	b = new HH(b);
	b.Wb && !go(jo(), rva) && f(Error("Offline Docos should always be enabled for cold-start offline."));
	H = k;
	I(g) && I(h) && (H = new Ukb(g, h));
	g = new TB(b.Ba, b.jD, XIa, k);
	h = ho(jo(), qza);
	isNaN(h) || (g.A[qMa] = h.toString());
	h = ho(jo(), Mya);
	isNaN(h) || (g.A[JLa] = h.toString());
	h = io(jo(), Dta);
	g.A[Cta] = h;
	kF.ya().vb(km.DOCS_timing, g, Tkb(E), b.oq);
	a = g.B3(Okb, m, a, b, g, c, d, e, H, n, p, t, u, x, y, B);
	g.B3(a.vb, a);
	return a
};

function IH(a, b, c) {
	this.Q = a;
	this.C = b;
	this.G = !! c;
	this.A = []
}
L(IH, zB);
IH.prototype.Uc = function() {
	this.A = [];
	var a = xC(this.Q.A.A),
		b = this.C,
		c = q;
	b.ps_hdid && b.ps_hdid != r && (c = l);
	ht(b, zj);
	var d;
	if (!(d = !this.G)) a: {
		for (d = 0; d < a.length; d++) if (!this.Q.A.ba().A.Yl(zj, a[d]).wg(b)) {
			d = l;
			break a
		}
		d = q
	}
	if (d) for (d = 0; d < a.length; d++) {
		var e = b;
		c && (e = Vn(b), e.ps_hdid = ZB(mg));
		this.A[a[d]] = e;
		this.Qb(new vB(zj, a[d], a[d], e))
	}
};
IH.prototype.O = function() {
	delete this.C;
	IH.M.O.call(this)
};

function JH(a) {
	this.Q = a
}
L(JH, zB);
JH.prototype.Uc = function() {
	var a = this.Q.A,
		b = xC(a.A),
		c = {};
	if (go(jo(), Uza)) {
		var d = {};
		jt(d, Wk, l);
		c.ls_ts = d
	}
	c.ls_id = m;
	for (d = c.ls_nest = 0; d < b.length; d++) {
		var e = b[d],
			g = a.ba().td(Ri, e),
			g = 36 * g.Wc,
			h = {};
		h.ps_il = g;
		h.ps_ifl = g;
		yB(this, new AB(this.Q, zj, h, e, e));
		go(jo(), Uza) ? yB(this, new AB(this.Q, Ri, c, b[d], b[d], l)) : yB(this, new AB(this.Q, Ri, c, b[d], b[d]))
	}
};

function Vkb(a) {
	this.Mg = a
}
Vkb.prototype.qk = C("Mg");

function KH(a, b) {
	gC.call(this, Je);
	this.W = a;
	this.K = b || m
}
L(KH, gC);
KH.prototype.A = jm(97);
KH.prototype.ng = C(Wc);

function Wkb(a, b) {
	this.A = a;
	this.C = b
}
Wkb.prototype.qa = C(Jb);

function LH(a, b, c, d) {
	this.G = a;
	this.F = b;
	this.C = c;
	this.A = d
};

function Xkb(a) {
	this.A = a
};

function Ykb(a) {
	kC.call(this, Je, a)
}
L(Ykb, pC);
Ykb.prototype.nL = D(l);
Ykb.prototype.A = function(a) {
	var b = this.Q.A,
		c = b.ba(),
		b = b.A,
		d = Js(b.getSelection());
	if (0 < d.length) MH(this, d, l);
	else {
		var b = Tw(b),
			d = a.A,
			e = c.qa();
		if (Ws(e, b)) {
			if (zv(c, b)) {
				a = $Ya(c, b);
				nC(this, new JH(this.Q));
				d && (b = b - 1, MH(this, [new xs(b, b)]));
				this.gd = new KH(1, new Xkb(a));
				return
			}
			var g = c.Ra(zj, b);
			if (1 == g.qk()) {
				a = {
					ps_al: 0
				};
				nC(this, new IH(this.Q, a));
				Zkb(this, 0, g.wc());
				return
			}
			if (2 == g.qk()) {
				a = {
					ps_al: 1
				};
				nC(this, new IH(this.Q, a));
				Zkb(this, 1, g.wc());
				return
			}
			c = g.re;
			g = g.Ge;
			if (0 < g || 0 < c) {
				b = q;
				a = {};
				g == c ? (a.ps_ifl = 0, a.ps_il = 0) : (b = c > g, d = Math.min(g, c), a.ps_ifl = d, a.ps_il = d);
				nC(this, new IH(this.Q, a));
				this.gd = new KH(4, new LH(q, b, q, m));
				return
			}
		}
		b == Ss(e, b) + 1 ? this.gd = new KH(3) : (c = Ts(e, b - 1), $kb(c) || c == da && $kb(Ts(e, b)) ? this.gd = new KH(3) : d ? (a = a.F.nF().start, b != a ? MH(this, [new xs(a, b - 1)]) : (a = b - 1, MH(this, [new xs(a, a)]))) : a.C ? (a = Iu(b, e), a = hYa(e, new xs(a, b - 1)), MH(this, [new xs(a.start, a.end)])) : (a = b - 1, MH(this, [new xs(a, a)])))
	}
};

function Zkb(a, b, c) {
	var d;
	switch (b) {
		case 0:
			d = c ? 0 : 2;
			break;
		case 1:
			d = 1;
			break;
		case 2:
			d = c ? 2 : 0;
			break;
		case 3:
			d = 3;
			break;
		default:
			f(Error("Invalid alignment type specified."))
	}
	a.gd = new KH(0, new Vkb(d))
}
function $kb(a) {
	return a == ga || a == ja || a == na || a == ha
}
function MH(a, b, c) {
	for (var d = a.Q, e = d.A.ba().qa(), g = r, h = [], n = 0; n < b.length; n++) {
		var p = c ? hYa(e, b[n]) : b[n];
		h.push(p);
		g += e.slice(p.start, p.end)
	}
	nC(a, eC(d, h, l));
	a.gd = new KH(2, new Wkb( !! c, g))
}
qC(Je, function(a) {
	return new Ykb(a)
});

function NH(a, b, c) {
	gC.call(this, a);
	this.K = b;
	this.W = !! c
}
L(NH, gC);
NH.prototype.A = jm(96);

function alb(a, b, c) {
	this.Q = a;
	this.C = b;
	this.G = c;
	this.A = m
}
L(alb, zB);
alb.prototype.Uc = function() {
	for (var a = this.Q, b = a.A.ba().qa(), c = r, d = [], e = 0; e < this.C.length; e++) {
		var g = this.G ? hYa(b, this.C[e]) : this.C[e];
		d.push(g);
		c += b.slice(g.start, g.end)
	}
	yB(this, eC(a, d, l));
	this.A = c
};

function blb(a) {
	kC.call(this, Me, a)
}
L(blb, pC);
blb.prototype.nL = D(l);
blb.prototype.A = function(a) {
	var b = this.Q.A,
		c = b.ba(),
		b = b.A,
		d = Js(b.getSelection()),
		b = qt(b);
	0 < d.length ? OH(this, d, l) : (c = c.qa(), d = a.C, a.A ? Ys(c, b) ? b != Vs(c, b) && OH(this, [new xs(b, b)], q) : (a = Us(c, b) - 1, OH(this, [new xs(b, a)], q)) : d && !Ys(c, b) ? (a = dYa(b, c) ? Fu(b, c) : Ju(b, c), a--, OH(this, [new xs(b, a)])) : b != Vs(c, b) ? OH(this, [new xs(b, b)]) : this.gd = new NH(Me, new Wkb(q, r), l))
};

function OH(a, b, c) {
	b = new alb(a.Q, b, !! c);
	nC(a, b);
	b.A == m && f(Error("Attempted to get deleted spacers before operation was applied."));
	a.gd = new NH(Me, new Wkb( !! c, b.A))
}
qC(Me, function(a) {
	return new blb(a)
});

function clb(a) {
	kC.call(this, eAa, a)
}
L(clb, pC);
clb.prototype.A = function(a) {
	var b = a.A(),
		c = a.G;
	c && nC(this, eC(this.Q, [new xs(b, b + c.length - 1)]));
	c = yC(this.Q.A.A).Jg();
	nC(this, this.Q.Ih(a.C, new ws(b), c))
};
qC(eAa, function(a) {
	return new clb(a)
});

function PH(a, b) {
	this.C = a;
	this.A = I(b) ? b : m
};

function QH(a, b) {
	this.Q = a;
	this.G = b;
	this.A = -1
}
L(QH, zB);
QH.prototype.C = q;
QH.prototype.Uc = function() {
	var a = this.Q.A.A;
	Ks(a.getSelection()) ? (a = this.Q.EF(), yB(this, a), this.C = a.Uaa, this.A = a.A[0]) : this.A = qt(a);
	yB(this, this.Q.Ih(this.G, new ws(this.A)))
};

function dlb(a, b) {
	gC.call(this, a);
	this.K = b
}
L(dlb, gC);
dlb.prototype.A = jm(95);

function elb(a) {
	kC.call(this, Pe, a)
}
L(elb, pC);
elb.prototype.nL = D(l);
elb.prototype.A = function(a) {
	a = a.A;
	var b = new QH(this.Q, a);
	nC(this, b);
	mC(this, Ls(new ws(b.A + a.length)), l);
	this.gd = new dlb(Pe, new PH(b.C, a))
};
qC(Pe, function(a) {
	return new elb(a)
});

function RH(a) {
	this.C = a;
	this.A = []
}
L(RH, M);
RH.prototype.U0 = C(Jb);
RH.prototype.O = function() {
	RH.M.O.call(this);
	this.A = this.C = m
};

function SH(a) {
	this.A = new RH(a);
	this.R = new S(this)
}
L(SH, bq);
SH.prototype.load = function() {
	for (var a = this.R, b = this.A.U0(), c = 0; c < b.length; c++) {
		var d = new LB;
		a.A(d, Ud, K(this.C, this, c));
		d.send(b[c])
	}
};
SH.prototype.C = function(a, b) {
	var c = b.target;
	if (c.Gn()) {
		this.A.A[a] = c.lh();
		var d;
		a: {
			var e = this.A;
			d = e.A;
			if (d.length == e.C.length) {
				for (e = 0; e < d.length; e++) if (d[e] == m) {
					d = q;
					break a
				}
				d = l
			} else d = q
		}
		d && this.dispatchEvent(Nk)
	} else this.dispatchEvent(Xf);
	c.dispose()
};
SH.prototype.O = function() {
	SH.M.O.call(this);
	this.R.dispose();
	this.R = m;
	this.A.dispose();
	this.A = m
};
var flb = [];

function glb(a) {
	if (a.length) {
		var b = flb.length;
		sn(flb, a);
		if (!b) {
			a = flb;
			var c = function() {
				var b = a.shift(),
					b = TH(b, k);
				a.length && tVa(b, c)
			};
			c()
		}
	}
}

function TH(a, b) {
	var c = b || {}, d = c.document || document,
		e = document.createElement(Lc),
		g = {
			$t: e,
			gh: k
		}, h = new es(hlb, g),
		n = m,
		p = c.timeout != m ? c.timeout : 5E3;
	0 < p && (n = window.setTimeout(function() {
		ilb(e, l);
		h.Bd(new UH(1, tqa + a))
	}, p), g.gh = n);
	e.onload = e.onreadystatechange = function() {
		if (!e.readyState || e.readyState == Ui || e.readyState == Ud) ilb(e, c.wFa || q, n), h.zb(m)
	};
	e.onerror = function() {
		ilb(e, l, n);
		h.Bd(new UH(0, zia + a))
	};
	lSa(e, {
		type: Yk,
		charset: Lqa,
		src: a
	});
	jlb(d).appendChild(e);
	return h
}

function jlb(a) {
	var b = a.getElementsByTagName(wja);
	return !b || jn(b) ? a.documentElement : b[0]
}
function hlb() {
	if (this && this.$t) {
		var a = this.$t;
		a && a.tagName == Lc && ilb(a, l, this.gh)
	}
}
function ilb(a, b, c) {
	c != m && km.clearTimeout(c);
	a.onload = G;
	a.onerror = G;
	a.onreadystatechange = G;
	b && window.setTimeout(function() {
		Wo(a)
	}, 0)
}
function UH(a, b) {
	var c = Ska + a + Ia;
	b && (c += ob + b);
	Am.call(this, c);
	this.code = a
}
L(UH, Am);

function klb() {
	this.R = new S(this);
	this.A = {}
}
L(klb, bq);
F = klb.prototype;
F.VI = q;
F.QY = q;
F.rOa = function(a, b, c, d) {
	var e = this.A[a] || new Lkb;
	e.G = l;
	e.F = c || m;
	e.A = d || m;
	this.A[a] ? e.C != m && llb(this, a) : (this.A[a] = e, Mkb(this, a, b))
};

function llb(a, b) {
	a.dispatchEvent(new VH(yKa));
	var c = l,
		d = a.A[b],
		e = d.K,
		g = d.C;
	try {
		if (a.QY || a.VI && $q) for (var h = 0; h < e.length; h++) cRa(g[h] + laa + e[h]);
		else cRa(g.join(da))
	} catch (n) {
		c = q
	}
	a.dispatchEvent(new VH(hj));
	c ? d.F && d.F() : (c = d.A, a.dispatchEvent(new VH(xj)), c && c(m));
	delete a.A[b]
}
F.JJa = function(a, b) {
	var c = this.A[b];
	c.C = a.A.A;
	c.G && llb(this, b);
	eq(a.dispose, 5, a)
};

function Mkb(a, b, c) {
	for (var d = [], e = 0; e < b.length; e++) sn(d, c[b[e]].U0());
	a.VI && !(a.QY || a.VI && $q) ? glb(d) : (a.A[b].K = d, c = new SH(d), d = a.R, d.A(c, Nk, K(a.JJa, a, c, b), q, m), d.A(c, Xf, K(a.IJa, a, c, b), q, m), c.load())
}
F.IJa = function(a, b, c) {
	var d = this.A[b];
	d && (delete this.A[b], b = d.A, this.dispatchEvent(new VH(xj)), b && b(c));
	eq(a.dispose, 5, a)
};
F.O = function() {
	klb.M.O.call(this);
	this.R.dispose();
	this.R = m
};

function VH(a) {
	R.call(this, a)
}
L(VH, R);

function Lkb() {
	this.C = this.K = m;
	this.G = q;
	this.A = this.F = m
};
zm("DOCS_initializeModules", function(a, b, c) {
	var d = new klb;
	d.VI = q;
	d.QY = $q;
	var e = ps.ya();
	e.pP = d;
	for (var g in a) e.Ch[g] = new os(a[g], g);
	e.G == e.L && (e.G = m, xVa(e.L, K(e.gka, e)) && HVa(e, 4));
	for (var h in b) e.Ch[h].Fla = b[h];
	c && ss(e, c)
});
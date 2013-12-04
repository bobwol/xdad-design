/**
 * editor_plugin_src.js
 *
 * Copyright 2010, fMath.info
 *
 * License: http://www.fmath.info/LICENCE.jsp
 */
 
var fmath_template=[
'<form action="#">',
'	<input id="mathml_n" name="mathml_n" type="hidden"/>',
'	<input id="mathml_f" name="mathml_f" type="hidden"/>',
'	<table width="100%" height="360">',
'	<tr height="100%">',
'		<td align="center">',
'		<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="850" height="460" id="editML" name="editML" align="middle">',
'			<param name=wmode value="transparent">',
'			<param name="allowScriptAccess" value="always"/>',
'			<param name="allowFullScreen" value="true"/>',
'			<param name="loop" value="false"/>',
'			<param name="quality" value="high" />',
'			<param name="flashVars" value="configUrl=configMathMLEditor.xml&loadOnInit=true"/>',
'			<param name="movie" value="mathml/MathMLEditor.swf?configUrl=configMathMLEditor.xml&loadOnInit=true" />',
'			<embed src="mathml/MathMLEditor.swf?configUrl=configMathMLEditor.xml&loadOnInit=true"',
'	            wmode="transparent"',
'				flashVars="configUrl=configMathMLEditor.xml&loadOnInit=true"',
'				loop="false"',
'				quality="high"',
'				width="850"',
'				height="400"',
'                id="editML"',
'				name="editML"',
'				align="middle"',
'                swliveconnect="true"',
'				allowScriptAccess="always"',
'				allowFullScreen="true"',
'				type="application/x-shockwave-flash"',
'				style="margin-top:-35px;"',
'				pluginspage="http://www.adobe.com/go/getflashplayer" />',
'		</object>',
'		</td>',
'	</tr>',
'	</table>',
'	<div class="mceActionPanel">',
'		<input type="button" class="button" id="update" name="update" value="{#update}" onclick="updateFormula();" />',
'		<input type="button" id="insert" name="insert" value="{#insert}" onclick="insertFormula();" />',
'		<input type="button" id="cancel" name="cancel" value="{#cancel}" onclick="tinyMCEPopup.close();" />',
'	</div>',
'</form>'
].join("");

//tinymce.PluginManager.requireLangPack('fmath_formula');

var urlViewer = "";
var fmath_nbFlash = 0;
var fmath_flashMathML = new Array();
var fmath_selectedElement = "";
var fmath_currentElement = "";
var fmath_selectedData ="";
var fmath_currentData= "";

tinymce.PluginManager.add('fmath_formula', function(editor, url) {
    // Add a button that opens a window
	urlViewer = url;
	
	editor.addCommand('fMathAddFormula', function() {
		fmath_currentElement = fmath_selectedElement;
		fmath_currentData= fmath_selectedData;
		var frame=editor.windowManager.open({
			title:'公式库',
			url :url+'/dialog.htm',
			width : 900,
			height : 450
		});
		window.fmath_editor = editor;
        window.fmath_frame = frame;
	});
    editor.addButton('fmath_formula', {
        text: '公式',
        tooltip:'插入/编辑公式',
        icon: false,
        image:url + '/img/fmath_formula.png',
		cmd:'fMathAddFormula'
    });

	editor.on('NodeChange',function(e) {
		//console.log(e);
		if(e.element){
			var id = $(e.element).attr("id");
			var data = $(e.element).attr("data-math");
			
			var active = (id!=null && id.indexOf("MathMLEq")>=0);
			//cm.setActive('fmath_formula', active);
			if(active){
				fmath_selectedElement = id;
				fmath_selectedData = data;
			}else{
				fmath_selectedElement = "";
				fmath_selectedData = null;
			}
		}

	});
	window.fmath_action={
		addMathML : function(m){
			for(i=(fmath_nbFlash==0?1:fmath_nbFlash);;i++){
					Name = "MathMLEq" + i;
					if(tinymce.activeEditor.dom.select('#'+Name).length>0) continue;
					else {
						fmath_nbFlash=i;
						break;
					}
			}
			fmath_nbFlash =fmath_nbFlash;
			var newName = "MathMLEq" + fmath_nbFlash;
			fmath_flashMathML[newName] = m;
			return newName;
		},

		updateMathML : function(id, m){
			fmath_flashMathML[id] = m;
		},

		getSelected : function(){
			return fmath_currentElement;
		},
		
		getCurrentMathML : function(){
			//return fmath_flashMathML[fmath_currentElement];
			return fmath_currentData?unescape(fmath_currentData):null;
		},

		getMathML : function(name){
			return fmath_flashMathML[name];
		},

		getUrlViewer : function(){
			return urlViewer;
		}
	};
});







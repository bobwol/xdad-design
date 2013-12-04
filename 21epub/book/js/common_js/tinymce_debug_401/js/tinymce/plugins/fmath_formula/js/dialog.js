//-------------------------------------------------------------
//	Created by: Ionel Alexandru 
//	Mail: ionel.alexandru@gmail.com
//	Site: www.fmath.info
//---------------------------------------------------------------
function getMathMLFromJavascript(){
    var editorSwf = getSWF('editorId');
    editorSwf.setMathML('<math><mo selected="true">&xoplus;</mo></math>');
    //return '<math><mo selected="true">&xoplus;</mo></math>';
}

//tinyMCEPopup.requireLangPack();

var MathML_FormulaDialog = {
	init : function() {
		
	},

	insert : function() {
		var fmath_editor = parentWin.fmath_editor;
		var fmath_frame = parentWin.fmath_frame;
		//var urlServer = tinyMCEPopup.editor.plugins["fmath_formula"].getUrlViewer();
		
		var mathml = document.getElementById('mathml_f').value;
		//window.alert(mathml);
		mathml = mathml.replace("<math>", "");
		mathml = mathml.replace("</math>", "");
		if(mathml.indexOf("<?")==0){
			mathml = mathml.substring(mathml.indexOf("/>") + 2);
		}
	
		mathml = mathml.replace(/\n/g,"");
		mathml = mathml.replace(/m:m/g,"m");
		
		var imgName = document.getElementById('mathml_n').value;
		var domain_name="http://"+window.location.hostname+"/";
		imgName=imgName.replace(domain_name,"");

		var newName = fmath_action.addMathML(mathml);
		//var newName=tinymce.DOM.uniqueId('fmath_');
        //alert(mathml);
		var imgTag = '<img id="'+newName+'" data-math="'+escape(mathml)+'" src="'+imgName+'" border="0"/>';
		
		fmath_editor.execCommand('mceInsertContent', false, imgTag);
		//parent.tinymce_refresh_dom('#'+newName);
		//var currentElem = fmath_editor.dom.get(newName);
		//currentElem.setAttribute('src', imgName);
	
		
		fmath_frame.close();
	},
	update : function() {
		var fmath_editor = parentWin.fmath_editor;
		var fmath_frame = parentWin.fmath_frame;

		var name = fmath_action.getSelected();
		
		var mathml = document.getElementById('mathml_f').value;
		mathml = mathml.replace("<math>", "");
		mathml = mathml.replace("</math>", "");
		if(mathml.indexOf("<?")==0){
			mathml = mathml.substring(mathml.indexOf("/>") + 2);
		}
	
		mathml = mathml.replace(/\n/g,"");
		mathml = mathml.replace(/m:m/g,"m");
		
		fmath_action.updateMathML(name, mathml);

		var imgName = document.getElementById('mathml_n').value;
		var domain_name="http://"+window.location.hostname+"/";
		imgName=imgName.replace(domain_name,"");

		fmath_editor.dom.setAttrib(name, 'src', imgName);
		fmath_editor.dom.setAttrib(name, 'data-math', escape(mathml));
		fmath_frame.close();
	}
	
};

// tinyMCEPopup.onInit.add(MathML_FormulaDialog.init, MathML_FormulaDialog);


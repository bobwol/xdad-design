/*
 *
 * Explain Plugin for TinyMCE
 *
 * Copyright 2013 By Blues Zhao zhaoyuyong@21epub.com
 *
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */
var explainNode=null;

var getExplainType=function(p){

	if(!p) return 'cols_1';
	return 'cols_2';
};
var setExplainType=function(){

   tinymce.activeEditor.formatter.apply('explain',{});
   $explainNode=$(tinymce.activeEditor.selection.getNode());
   $explainNode=$explainNode.hasClass('explain')?$explainNode:$explainNode.parent();
   $explainNode.wrapInner('<div class="cell"></div>');
   $explainNode.append('<div class="cell"><p>&nbsp;&nbsp;<br></p></div>');
   $explainNode.parent().append('<p><br></p>');
};
var clearExplainType=function(){

	$children1=$(explainNode.children[0]);
	$children2=$(explainNode.children[1]);
	$children1.children().unwrap();
	$children2.children().unwrap();
	tinymce.activeEditor.formatter.toggle('explain',{},explainNode);
};
tinymce.PluginManager.add('explain', function(editor) {

	editor.addCommand('explainchange', function(command,value) {
		tinymce.activeEditor.formatter.register('explain', {
			block:'div',attributes:{'class':'row-fluid explain'},wrapper:1,remove :'all'
			// selector : 'blockquote', attributes : {'class' : '%value'}
			// //block : 'blockquote', wrapper : 1, remove : 'all',attributes : {'class' : '%value'}
		});
		var explainNodeType=getExplainType(explainNode);
		if(!explainNode) explainNode=editor.selection.getNode();
		var bm = tinymce.activeEditor.selection.getBookmark();
		if(explainNodeType=='cols_1') setExplainType();
		else clearExplainType();
		tinymce.activeEditor.selection.moveToBookmark(bm);
		//console.log(explainNode);
	});

	var updateExplainStatus=function(e){
		var p=null;
		if(editor.selection.getNode().className=='row-fluid explain') p=editor.selection.getNode();
		else p=editor.dom.getParent(editor.selection.getNode(), 'div.row-fluid.explain');
		if(p&&p.className!='row-fluid explain') p=null;
		explainNode=p;
	};

	editor.addButton('explain', {
		text: '解释',
		icon: null,
		tooltip: '设置为解释样式',
		onclick: function(e) {
			updateExplainStatus(e);
			editor.execCommand('explainchange',false,'cancel');
		}
	});
})
/*
 *
 * Indicator Plugin for TinyMCE
 *
 * Copyright 2013 By Blues Zhao zhaoyuyong@21epub.com
 *
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */
var indicatorNode=null;

var getIndicatorType=function(p){

	if(!p) return 'none';
	return 'indicator';
};
var setIndicatorType=function(){

   tinymce.activeEditor.formatter.apply('indicator',{});
   $indicatorNode=$(tinymce.activeEditor.selection.getNode());
   $indicatorNode=$indicatorNode.hasClass('number')?$indicatorNode:$indicatorNode.parent();
   if ($indicatorNode.next().length==0){
   	$indicatorNode.after('<p><br></p>');
   }
};
var clearIndicatorType=function(){

	tinymce.activeEditor.formatter.toggle('indicator',{},indicatorNode);
};
tinymce.PluginManager.add('indicator', function(editor) {

	editor.addCommand('indicatorchange', function(command,value) {
		tinymce.activeEditor.formatter.register('indicator', {
			block:'div',attributes:{'class':'number'},wrapper:1,merge_siblings:false, remove :'all'
			// selector : 'blockquote', attributes : {'class' : '%value'}
			// //block : 'blockquote', wrapper : 1, remove : 'all',attributes : {'class' : '%value'}
		});
		var indicatorNodeType=getIndicatorType(indicatorNode);
		if(!indicatorNode) indicatorNode=editor.selection.getNode();
		var bm = tinymce.activeEditor.selection.getBookmark();
		if(indicatorNodeType=='none') setIndicatorType();
		else clearIndicatorType();
		tinymce.activeEditor.selection.moveToBookmark(bm);
		//console.log(indicatorNode);
	});

	var updateIndicatorStatus=function(e){
		var p=null;
		if(editor.selection.getNode().className=='number') p=editor.selection.getNode();
		else p=editor.dom.getParent(editor.selection.getNode(), 'div.number');
		if(p&&p.className!='number') p=null;
		indicatorNode=p;
	};

	editor.addButton('indicator', {
		text: '指示',
		icon: null,
		tooltip: '设置指示器样式',
		onclick: function(e) {
			updateIndicatorStatus(e);
			editor.execCommand('indicatorchange',false,'cancel');
		}
	});
})
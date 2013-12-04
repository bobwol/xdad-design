/*
 *
 * Status List Box Plugin for TinyMCE
 *
 * Copyright 2012 By Garry Gu garry.guzy@gmail.com
 *
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */
var getBlockquoteType=function(p){
	if ((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" blockquote-s01 ") > -1 ) return 'blockquote-s01';
	if ((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" blockquote-s02 ") > -1 ) return 'blockquote-s02';
	if ((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" blockquote-s03 ") > -1 ) return 'blockquote-s03';
	return 'blockquote';
};
tinymce.PluginManager.add('blockquoteListBox', function(editor) {
	
	var blockquoteType=null;
	editor.on('init',function(){
		editor.formatter.register('blockquotestyle', {
			block:'blockquote',attributes:{'class':'%value'},wrapper:1
		});
		editor.formatter.register('changeblockquotestyle', {
			block:'blockquote',attributes:{'class':'%value'},wrapper:0, remove: 'all'
		});	
	})
	editor.addCommand('blockquotechange', function(command,value) {
		var bm = tinymce.activeEditor.selection.getBookmark();
		if(value=='cancel'){
			if(!blockquoteType){
				value='blockquote-s01';
			}
			else{
				//editor.formatter.remove('changeblockquotestyle');
			}			
		}
		if(value==blockquoteType){
			value="cancel";
		}
		if(value=='cancel') editor.formatter.remove('changeblockquotestyle');
		else if(!blockquoteType){
				editor.formatter.apply('blockquotestyle',{value:value,wrapper:1});
		}
		else editor.formatter.apply('changeblockquotestyle',{value:value,wrapper:1});
		tinymce.activeEditor.selection.moveToBookmark(bm);
	});
	
	var blockquoteItems;
	
	var updateblockquoteStatus=function(e){
		//var spaltenType = editor.dom.getStyle(editor.dom.getParent(editor.selection.getNode(), 'ol,ul'), 'listStyleType') || '';
		var p=null;
		if(editor.selection.getNode().nodeName=='BLOCKQUOTE') p=ed.selection.getNode();
		else{
			p=editor.dom.getParent(editor.selection.getNode(), 'blockquote');
		} 
		if(!p) blockquoteType=null;
		else blockquoteType=getBlockquoteType(p);
		if(e){
			e.control.items().each(function(ctrl) {
				ctrl.active(ctrl.settings.data === blockquoteType);
			});				
		}	
	};

	blockquoteItems = [
		{text:'样式一',data:'blockquote-s01'},
		{text:'样式二',data:'blockquote-s02'},
		{text:'样式三',data:'blockquote-s03'}	
	];

	editor.addButton('blockquoteListBox', {
		icon:'blockquote',
		type: 'splitbutton',
		tooltip: '设置引用样式',
		menu: blockquoteItems,
		onshow: updateblockquoteStatus,
		onselect: function(e) {
			editor.execCommand('blockquotechange',false,e.control.settings.data);
			//applyListFormat('OL', e.control.settings.data);
		},
		onclick: function(e) {
			updateblockquoteStatus();
			editor.execCommand('blockquotechange',false,'cancel');
			//applyListFormat('OL', false);
		},
	    onPostRender: function() {
	        var ctrl = this;
	 
	        editor.on('NodeChange', function(e) {
	        	ctrl.active(e.element.nodeName == 'BLOCKQUOTE'||editor.dom.getParent(e.element, 'blockquote'));
	        });
	    }
	});
})
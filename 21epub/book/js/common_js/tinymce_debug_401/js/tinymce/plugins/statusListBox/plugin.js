/*
 *
 * Status List Box Plugin for TinyMCE
 *
 * Copyright 2012 By Garry Gu garry.guzy@gmail.com
 *
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */
var StatusNode=null;
var getStatusType=function(p){
	if(!p) return 'clear';
	if ((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" warning ") > -1 ) return 'warning';
	if ((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" doubt ") > -1 ) return 'doubt';
	if ((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" info ") > -1 ) return 'info';
	if ((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" error ") > -1 ) return 'error';
	if ((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" success ") > -1 ) return 'success';
};
tinymce.PluginManager.add('statusListBox', function(editor) {

	editor.addCommand('statuschange', function(command,value) {
		editor.formatter.register('status', {
			block:'div',attributes:{'class':'message-box status %value'},wrapper:1,merge_siblings:false
			// selector : 'blockquote', attributes : {'class' : '%value'}
			// //block : 'blockquote', wrapper : 1, remove : 'all',attributes : {'class' : '%value'}
		});
		editor.formatter.register('changestatus', {
			block:'div',attributes:{'class':'message-box status %value'},wrapper:0
			// selector : 'blockquote', attributes : {'class' : '%value'}
			// //block : 'blockquote', wrapper : 1, remove : 'all',attributes : {'class' : '%value'}
		});
		var bm = tinymce.activeEditor.selection.getBookmark();
		var status=getStatusType(StatusNode);
		if(value=='cancel'){
			if(status=='clear'){
				value='warning';
			}
			else{
				value=status;
			}			
		}
		if(status==value){
			if(status=='clear') return;
			else{
				editor.formatter.remove('changestatus',{value:status,wrapper:1},StatusNode);
			}
		}
		else if(value=='clear'&&StatusNode) editor.formatter.remove('changestatus',{value:status,wrapper:1},StatusNode);
		else if(!StatusNode&&value&&value!='clear') {
			StatusNode=tinymce.activeEditor.selection.getNode();
			editor.formatter.apply('status',{value:value,wrapper:1});
			if ($(StatusNode).parents('.message-box').first().next().length==0){
				$(StatusNode).parents('.message-box').first().after('<p><br></p>');
			}
			// $('<p><br></p>').insertAfter(StatusNode.parentNode);
		}
		else if(StatusNode&&value) {
			editor.formatter.apply('changestatus',{value:value,wrapper:0},StatusNode);
			//tinymce.activeEditor.formatter.apply('status',{value:value,wrapper:0});
		}
		tinymce.activeEditor.selection.moveToBookmark(bm);
	});
	
	var statusItems;
	
	var updateStatusStatus=function(e){
		//var spaltenType = editor.dom.getStyle(editor.dom.getParent(editor.selection.getNode(), 'ol,ul'), 'listStyleType') || '';
		var p=null;
		if((" " + editor.selection.getNode().className + " ").replace(/[\n\t]/g, " ").indexOf(" status ") > -1 ) p=editor.selection.getNode();
		else{
			p=editor.dom.getParent(editor.selection.getNode(), 'div');
			if(p) {
				if((" " + p.className + " ").replace(/[\n\t]/g, " ").indexOf(" status ") > -1 ) ;
				else p=null;
			}
		} 
		var statusType=getStatusType(p);
		StatusNode=p;
		if(e){
			e.control.items().each(function(ctrl) {
				ctrl.active(ctrl.settings.data === statusType);
			});				
		}	
	};

	statusItems = [
		{text:'无强调',data:'clear'},
		{text:'警告',data:'warning'},
		// {text:'Doubt',data:'doubt'},
		{text:'警戒',data:'exclamation'},
		{text:'注释',data:'info'},
		// {text:'Error',data:'error'},
		// {text:'Success',data:'success'},		
	];

	editor.addButton('statusListBox', {
		text: '强调',
		type: 'splitbutton',
		tooltip: '设置强调样式',
		menu: statusItems,
		onshow: updateStatusStatus,
		onselect: function(e) {
			editor.execCommand('statuschange',false,e.control.settings.data);
			//applyListFormat('OL', e.control.settings.data);
		},
		onclick: function(e) {
			updateStatusStatus();
			editor.execCommand('statuschange',false,'cancel');
			//applyListFormat('OL', false);
		}
	});
})
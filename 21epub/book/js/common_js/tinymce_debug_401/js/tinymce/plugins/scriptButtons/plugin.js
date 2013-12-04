/*
 *
 * Font Style DropDown Plugin for TinyMCE
 *
 * Copyright 2012 By Garry Gu 
 *
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */
var scriptText=null;

tinymce.PluginManager.add('scriptButtons', function(editor) {

	editor.addCommand('scriptchange', function(command,value) {

	});
	
	var scriptItems, scriptMenuItems = [];
	
	var updateScriptStatus=function(e){

	};


	scriptItems = {
		superscript: {title: 'Superscript', icon: 'superscript', format: 'superscript',cmd:'superscript'},
		subscript: {title: 'Subscript', icon: 'subscript', format: 'subscript',cmd:'subscript'}
	};


	tinymce.each(scriptItems, function(item, name) {
		scriptMenuItems.push({
			icon: item['icon'],
			format: item['format'],
			text: item['text'],
			onPostRender: function() {
				var self = this;

				// TODO: Fix this
				if (editor.formatter) {
					editor.formatter.formatChanged(name, function(state) {
						self.active(state);
					});
				} else {
					editor.on('init', function() {
						editor.formatter.formatChanged(name, function(state) {
							self.active(state);
						});
					});
				}
			},
			onclick: function() {
					tinymce.EditorManager.activeEditor.execCommand('mceToggleFormat', false, item['format']);
			}
		});
	});	

	editor.addButton('scriptButtons', {
		text: null,
		type: 'splitbutton',
		icon:'superscript',
		tooltip: '设定上下标',
		menu: scriptMenuItems,
		onshow: updateScriptStatus,
		onselect: function(e) {
			// console.log(e.control.settings.data);
			// editor.execCommand('scriptchange',false,e.control.settings.data);
		},
		onclick: function() {
			// updateSpaltenStatus();
			// editor.execCommand('scriptchange',false,'cancel');
		}
	});
})
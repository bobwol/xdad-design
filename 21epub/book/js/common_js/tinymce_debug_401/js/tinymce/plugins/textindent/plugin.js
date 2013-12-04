/*
 *
 * Font Style DropDown Plugin for TinyMCE
 *
 * Copyright 2012 By Garry Gu 
 *
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */
var alignNode=null;

tinymce.PluginManager.add('alignButtons', function(editor) {

	editor.addCommand('alignchange', function(command,value) {

	});
	
	var alignItems, alignMenuItems = [];
	
	var updateAlignStatus=function(e){

	};


	alignItems = {
		alignleft: {title: 'Left', icon: 'alignleft', format: 'alignleft',text:'左',cmd:'JustifyLeft'},
		aligncenter: {title: 'Center', icon: 'aligncenter', format: 'aligncenter',text:'居中',cmd: 'JustifyCenter'},
		alignright: {title: 'Right', icon: 'alignright', format: 'alignright',text:'右', cmd: 'JustifyRight', },
		alignjustify: {title: 'Justify', icon: 'alignjustify', format: 'alignjustify',text:'两端',cmd: 'JustifyFull',}
	};


	tinymce.each(alignItems, function(item, name) {
		alignMenuItems.push({
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
					editor.execCommand(item['cmd']);
				}
		});
	});	

	editor.addButton('alignButtons', {
		text: '对齐',
		type: 'splitbutton',
		icon:null,
		tooltip: '设定对齐格式',
		menu: alignMenuItems,
		onshow: updateAlignStatus,
		onselect: function(e) {
			// console.log(e.control.settings.data);
			// editor.execCommand('alignchange',false,e.control.settings.data);
		},
		onclick: function() {
			// updateSpaltenStatus();
			// editor.execCommand('alignchange',false,'cancel');
		}
	});
})
/*
 *
 * Font Style DropDown Plugin for TinyMCE
 *
 * Copyright 2012 By Garry Gu 
 *
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */
var SpaltenNode=null;
var getSpaltenType=function(p){
	if(!p) return 'cols_1';
	if(p.children[0].className=='span6') return 'cols_2';
	if(p.children[0].className=="span4"&&p.children[1].className=='span4') return 'cols_3';
	if(p.children[0].className=="span4"&&p.children[1].className=='span8') return 'cols_1_2';	
	if(p.children[0].className=="span8"&&p.children[1].className=='span4') return 'cols_2_1';
};
var setSpaltenType=function(from,to){
	if(from==to) return;
	if(to=='cols_1'){
		switch(from){
			case 'cols_1_2':
			case 'cols_2_1':
			case 'cols_2': $children1=$(SpaltenNode.children[0]);
			               $children2=$(SpaltenNode.children[1]);
						   $children1.children().unwrap();
						   $children2.children().unwrap();
						   tinymce.activeEditor.formatter.toggle('spalten',{},SpaltenNode);
						   break;
			case 'cols_3': $children1=$(SpaltenNode.children[0]);
			               $children2=$(SpaltenNode.children[1]);
			               $children3=$(SpaltenNode.children[2]);
						   $children1.children().unwrap();
						   $children2.children().unwrap();
						   $children3.children().unwrap();
						   tinymce.activeEditor.formatter.toggle('spalten',{},SpaltenNode);
						   break;
		}
	}
	if(to=='cols_2'){
		switch(from){
			case 'cols_1': 
						   tinymce.activeEditor.formatter.apply('spalten',{});
						   $SpaltenNode=$(tinymce.activeEditor.selection.getNode());
						   $SpaltenNode=$SpaltenNode.hasClass('row-fluid')?$SpaltenNode:$SpaltenNode.parent();
						   $SpaltenNode.wrapInner('<div class="span6"></div>');
						   $SpaltenNode.append('<div class="span6"><p><br></p></div>');
						   $SpaltenNode.parent().append('<p><br></p>');
						   break;
			case 'cols_1_2':
			case 'cols_2_1': SpaltenNode.children[0].className='span6';
							 SpaltenNode.children[1].className='span6';
							 break;
			case 'cols_3': SpaltenNode.children[0].className='span6';
							 SpaltenNode.children[1].className='span6'; 
							SpaltenNode.children[1].innerHTML=SpaltenNode.children[1].innerHTML+SpaltenNode.children[2].innerHTML;
						   $(SpaltenNode.children[2]).remove();
						   break;
		}
	}
	if(to=='cols_3'){
		switch(from){
			case 'cols_1':tinymce.activeEditor.formatter.apply('spalten',{});
						   $SpaltenNode=$(tinymce.activeEditor.selection.getNode());
						   $SpaltenNode=$SpaltenNode.hasClass('row-fluid')?$SpaltenNode:$SpaltenNode.parent();
						   $SpaltenNode.wrapInner('<div class="span4"></div>');
						   $SpaltenNode.append('<div class="span4"><p><br></p></div>');
						   $SpaltenNode.append('<div class="span4"><p><br></p></div>');
						   $SpaltenNode.parent().append('<p><br></p>');
						   break;
			case 'cols_1_2': 
			case 'cols_2_1':
			case 'cols_2': SpaltenNode.children[0].className='span4';
							 SpaltenNode.children[1].className='span4'; 
							 $(SpaltenNode).append('<div class="span4"><p><br></p></div>');
							 break;
		}
	}	
	if(to=='cols_1_2'){
		switch(from){
			case 'cols_1': tinymce.activeEditor.formatter.apply('spalten',{});
						   $SpaltenNode=$(tinymce.activeEditor.selection.getNode());
						   $SpaltenNode=$SpaltenNode.hasClass('row-fluid')?$SpaltenNode:$SpaltenNode.parent();
						   $SpaltenNode.wrapInner('<div class="span4"></div>');
						   $SpaltenNode.append('<div class="span8"><p><br></p></div>');
						   $SpaltenNode.parent().append('<p><br></p>');
						   break;
			case 'cols_2':
			case 'cols_2_1': SpaltenNode.children[0].className='span4';
							 SpaltenNode.children[1].className='span8';
							 break;
			case 'cols_3': SpaltenNode.children[0].className='span4';
							 SpaltenNode.children[1].className='span8'; 
							SpaltenNode.children[1].innerHTML=SpaltenNode.children[1].innerHTML+SpaltenNode.children[2].innerHTML;
						   $(SpaltenNode.children[2]).remove();
						   break;			
		}
	}
	if(to=='cols_2_1'){
		switch(from){
			case 'cols_1': tinymce.activeEditor.formatter.apply('spalten',{});
						   $SpaltenNode=$(tinymce.activeEditor.selection.getNode());
						   $SpaltenNode=$SpaltenNode.hasClass('row-fluid')?$SpaltenNode:$SpaltenNode.parent();
						   $SpaltenNode.wrapInner('<div class="span8"></div>');
						   $SpaltenNode.append('<div class="span4"><p><br></p></div>');
						   $SpaltenNode.parent().append('<p><br></p>');
						   break;
			case 'cols_2':
			case 'cols_1_2': SpaltenNode.children[0].className='span8';
							 SpaltenNode.children[1].className='span4';
							 break;
			case 'cols_3': SpaltenNode.children[0].className='span8';
							 SpaltenNode.children[1].className='span4'; 
							SpaltenNode.children[1].innerHTML=SpaltenNode.children[1].innerHTML+SpaltenNode.children[2].innerHTML;
						   $(SpaltenNode.children[2]).remove();
						   break;			
		}
	}
};
var clearSpaltenType=function(from){
	switch(from){
		case 'cols_1': return;
		case 'cols_1_2':
		case 'cols_2_1':
		case 'cols_2': $children1=$(SpaltenNode.children[0]);
		               $children2=$(SpaltenNode.children[1]);
					   $children1.children().unwrap();
					   $children2.children().unwrap();
					   tinymce.activeEditor.formatter.toggle('spalten',{},SpaltenNode);
					   break;
		case 'cols_3': $children1=$(SpaltenNode.children[0]);
		               $children2=$(SpaltenNode.children[1]);
		               $children3=$(SpaltenNode.children[2]);
					   $children1.children().unwrap();
					   $children2.children().unwrap();
					   $children3.children().unwrap();
					   tinymce.activeEditor.formatter.toggle('spalten',{},SpaltenNode);
					   break;
	}
};
tinymce.PluginManager.add('spaltenListBox', function(editor) {

	editor.addCommand('spaltenchange', function(command,value) {
		tinymce.activeEditor.formatter.register('spalten', {
			block:'div',attributes:{'class':'row-fluid'},wrapper:1,remove :'all'
			// selector : 'blockquote', attributes : {'class' : '%value'}
			// //block : 'blockquote', wrapper : 1, remove : 'all',attributes : {'class' : '%value'}
		});
		var from=getSpaltenType(SpaltenNode);
		var to=value;
		if(to=='cancel'){
			if(from=='cols_1'){
				to='cols_2';
			}
			else{
				to=from;
			}
		}
		if(!SpaltenNode) SpaltenNode=editor.selection.getNode();
		var bm = tinymce.activeEditor.selection.getBookmark();
		if(from!=to) setSpaltenType(from,to);
		else clearSpaltenType(from);
		tinymce.activeEditor.selection.moveToBookmark(bm);
		//console.log(SpaltenNode);
	});
	
	var spaltenItems;
	
	var updateSpaltenStatus=function(e){
		//var spaltenType = editor.dom.getStyle(editor.dom.getParent(editor.selection.getNode(), 'ol,ul'), 'listStyleType') || '';
		var p=null;
		if(editor.selection.getNode().className=='row-fluid') p=editor.selection.getNode();
		else p=editor.dom.getParent(editor.selection.getNode(), 'div.row-fluid');
		if(p&&p.className!='row-fluid') p=null;
		var spaltenType=getSpaltenType(p);
		SpaltenNode=p;
		if(e){
			e.control.items().each(function(ctrl) {
				ctrl.active(ctrl.settings.data === spaltenType);
			});			
		}
	};

	spaltenItems = [
		{text:'一栏',data:'cols_1'},
		{text:'两栏(1:1)',data:'cols_2'},
		{text:'两栏(1:2)',data:'cols_1_2'},
		{text:'两栏(2:1)',data:'cols_2_1'},
		// {text:'三栏',data:'cols_3'},
	];

	editor.addButton('spaltenListBox', {
		text: '分栏',
		type: 'splitbutton',
		icon:null,
		tooltip: '设定分栏',
		menu: spaltenItems,
		onshow: updateSpaltenStatus,
		onselect: function(e) {
			console.log(e.control.settings.data);
			editor.execCommand('spaltenchange',false,e.control.settings.data);
			//applyListFormat('OL', e.control.settings.data);
		},
		onclick: function() {
			updateSpaltenStatus();
			editor.execCommand('spaltenchange',false,'cancel');
		}
	});
})
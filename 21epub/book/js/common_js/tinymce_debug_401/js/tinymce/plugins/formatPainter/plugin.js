var painterswitch=false;
var painterformat=null;
var currentFormatItem=null;
var painterstyle=null;
tinymce.PluginManager.add('formatPainter', function(editor) {

	editor.addCommand('formatpainter', function(command,listName) {
		var selection=editor.selection,dom=editor.dom;
		var parentList = dom.getParent(editor.selection.getStart(), 'P,OL,UL');
		var bm = tinymce.activeEditor.selection.getBookmark();
		if (parentList) {
			if (parentList.nodeName == listName) {
				var blocks=[];
				tinymce.grep(editor.selection.getSelectedBlocks(), function(block) {
					if(block.nodeName=='LI'){
					 	blocks.push(editor.dom.getParent(block, listName));		 
					}
					else blocks.push(block);
				});
				if(painterstyle) {
					tinymce.grep(blocks,function(block){
						editor.dom.setAttrib(block, 'style', painterstyle);	
					})
				}
			} else {
				switch(listName){
					case 'UL':editor.execCommand('InsertUnorderedList');break;
					case 'OL':editor.execCommand('InsertOrderedList');break;
					case 'P': editor.execCommand(parentList.nodeName == 'UL' ? 'InsertUnorderedList' : 'InsertOrderedList');break;
				}
				var blocks=[];
				tinymce.grep(editor.selection.getSelectedBlocks(), function(block) {
					if(block.nodeName=='LI'){
					 	blocks.push(editor.dom.getParent(block, listName));		 
					}
					else blocks.push(block);
				});
				if(painterstyle) {
					tinymce.grep(blocks,function(block){
						editor.dom.setAttrib(block, 'style', painterstyle);	
					})
				}			
			}
		} else {
			switch(listName){
				case 'UL':editor.execCommand('InsertUnorderedList');break;
				case 'OL':editor.execCommand('InsertOrderedList');break;
			}
			var blocks=[];
			tinymce.grep(editor.selection.getSelectedBlocks(), function(block) {
				if(block.nodeName=='LI'){
				 	blocks.push(editor.dom.getParent(block, listName));		 
				}
				else blocks.push(block);
			});
			if(painterstyle) {
				tinymce.grep(blocks,function(block){
					editor.dom.setAttrib(block, 'style', painterstyle);	
				})
			}	
		}		
		tinymce.activeEditor.selection.moveToBookmark(bm);
	});
	function getSelectedItems() {
		return tinymce.grep(editor.selection.getSelectedBlocks(), function(block) {
			return _.include(['P','UL','LI','OL'],block.nodeName);
		});
	}
	
	function isListNode(node) {
		console.log(node);
		return node && (/^(OL|UL)$/).test(node.nodeName);
	}
	
	function removeListTag(){
		
	}
	
	var updateStatus=function(e){
		//var spaltenType = editor.dom.getStyle(editor.dom.getParent(editor.selection.getNode(), 'ol,ul'), 'listStyleType') || '';
		var p=null;
		var items=getSelectedItems();
		if(items.length>0) item=items[0];
		else item=null;
		if(item){
			if(item.nodeName=='LI'||item.nodeName=='OI'){
				 item = editor.dom.getParent(item, 'OL,UL');		 
			}
		}
		currentFormatItem=item;
	};
	var painterFormat=function(e){
		console.log(e.element);
		console.log(editor.selection.getSelectedBlocks());
		editor.execCommand('formatpainter',false,painterformat);
	}
	var startPainter=function(){
		$('article.mce-edit-focus').css('cursor','pointer');
		editor.on('NodeChange',painterFormat);
	}
	
	var stopPainter=function(){
		$('article.mce-edit-focus').css('cursor','text');
		painterswitch=false;
		painterformat=null;
		editor.off('NodeChange',painterFormat);
		$(document).off('keyup');
	}
	
	editor.addButton('formatPainter', {
		text: null,
		icon:'copy',
		tooltip: '复制样式',
		onclick: function(e) {
			updateStatus(e);
			if(painterswitch&&painterformat){
				e.control.active(false);
				stopPainter();
			}
			else{
				if(currentFormatItem){
					painterswitch=true;
					e.control.active(true);
					painterformat=currentFormatItem.nodeName;
					painterstyle=$(currentFormatItem).attr('style')||null;
					startPainter();
					$(document).on('keyup',function(){
						e.control.active(false);
						stopPainter();
					});
				}
			}
			//editor.execCommand('spaltenchange',false,'cancel');
		}
	});
})
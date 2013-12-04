(function() {
var blocks = ['h1', 'h2', 'h3', 'p', 'ul', 'ol', 'div', 'li'];

var CLASS_EDIT_BLOCK = 'edit_block', CLASS_SHOWN = 'edit_shown', CLASS_CURRENT = 'edit_current';
var CLASS_SELECTED = 'edit_selected', CLASS_DISABLED = 'edit_disabled', CLASS_PLACEHOLDER = 'edit_placeholder';
var CLASS_ALIGN_LEFT = 'alignleft', CLASS_ALIGN_CENTER = 'aligncenter', CLASS_ALIGN_RIGHT = 'alignright';

var scriptPath = '';
for (var i = 0; i < document.scripts.length; i++) {
	var s = document.scripts[i];
	var m = /^(.*\/)pageedit\.js(:\d+)?$/.exec(s.getAttribute('src'));
	if (m) {
		scriptPath = m[1];
		break;
	}
}

var NodeTypeUI = {
	container: null,
	button: null,
	dropdown: null,
	currentTypeItem: null,

	init: function() {
		var self = this;

		this.container = createElement('div#edit_nodetype_container');
		this.container.onmousedown = Edit.saveSelection;
		this.button = this.container.append('button#edit_nodetype_button', '\u00a0');
		this.button.onclick = function() {
			self.dropdown.classList.toggle(CLASS_SHOWN);
			this.blur();
		};
		this.dropdown = this.container.append('div#edit_nodetype_dropdown');
		this.dropdown.innerHTML =
			'<div class="edit_nodetype_item" data-tag="h1"><h1>Heading 1</h1></div>' +
			'<div class="edit_nodetype_item" data-tag="h2"><h2>Heading 2</h2></div>' +
			'<div class="edit_nodetype_item" data-tag="h3"><h3>Heading 3</h3></div>' +
			'<div class="edit_nodetype_item" data-tag="p"><p>Paragraph</p></div>' +
			'<div class="edit_nodetype_item" data-tag="pre"><pre>Preformatted</pre></div>';
		this.dropdown.onclick = function(aEvent) {
			self.dropdownClick(aEvent);
		};

		document.documentElement.addEventListener('click', function(aEvent) {
			if (!aEvent.target.ancestor('#edit_nodetype_container')) {
				self.dropdown.classList.remove(CLASS_SHOWN);
			}
		}, false);

		return this.container;
	},
	dropdownClick: function(aEvent) {
		var item = aEvent.target.ancestor('.edit_nodetype_item');
		if (!item)
			return;

		Edit.restoreSelection();
		Edit.Actions.action('formatblock', item.dataset.tag);

		this.button.textContent = item.textContent;
		this.dropdown.classList.remove(CLASS_SHOWN);
	},
	setNodeType: function(aText) {
		if (this.currentTypeItem)
			this.currentTypeItem.classList.remove(CLASS_SELECTED);

		var items = this.dropdown.querySelectorAll('.edit_nodetype_item');
		for (var i = 0; i < items.length; i++) {
			if (items[i].dataset.tag == aText) {
				items[i].classList.add(CLASS_SELECTED);
				this.currentTypeItem = items[i];
				this.button.textContent = items[i].textContent;
				this.button.classList.remove('edit_disabled');
				return;
			}
		}
		this.button.textContent = '\u00a0';
		this.button.classList.add('edit_disabled');
	}
};

var ToolbarUI = {
	element: null,
	buttons: {},
	chain_display: null,

	init: function() {
		this.element = document.body.append('div#edit_toolbar');

		this.element.appendChild(NodeTypeUI.init());

		var group = this.element.append('span');
		this.addButton(group, 'bold', 'B');
		this.addButton(group, 'italic', 'I');
		this.addButton(group, 'underline', 'U');

		group = this.element.append('span.edit_radio_buttons');
		this.addButton(group, 'justifyleft', null, 'text_align_left.png');
		this.addButton(group, 'justifycenter', null, 'text_align_center.png');
		this.addButton(group, 'justifyright', null, 'text_align_right.png');
		this.addButton(group, 'justifyfull', null, 'text_align_justify.png');

		group = this.element.append('span');
		this.addButton(group, 'link', 'a');

		group = this.element.append('span.edit_radio_buttons');
		this.addButton(group, 'ulist', null, 'text_list_bullets.png');
		this.addButton(group, 'olist', null, 'text_list_numbers.png');

		group = this.element.append('span');
		this.addButton(group, 'indent', null, 'text_indent.png');
		this.addButton(group, 'outdent', null, 'text_indent_remove.png');

		group = this.element.append('span');
		this.addButton(group, 'image', null, 'picture.png');

		group = this.element.append('span.edit_radio_buttons');
		this.addButton(group, 'im_alignleft', 'L');
		this.addButton(group, 'im_aligncenter', 'C');
		this.addButton(group, 'im_alignright', 'R');

		this.chain_display = this.element.append('div#edit_chain');

		this.element.addEventListener('mousedown', function(aEvent) {
			if (aEvent.target == this) {
				aEvent.preventDefault();
			}
		}, false);
		this.element.addEventListener('click', function(aEvent) {
			var id = aEvent.target.localName == 'img' ? aEvent.target.parentNode.id : aEvent.target.id;
			switch (id) {
			case 'edit_bold':
			case 'edit_italic':
			case 'edit_underline':
			case 'edit_justifyleft':
			case 'edit_justifycenter':
			case 'edit_justifyright':
			case 'edit_justifyfull':
			case 'edit_indent':
			case 'edit_outdent':
				return Actions.action(id.substring(5), null);
			case 'edit_link':
				return Actions.linkAction();
			case 'edit_ulist':
			case 'edit_olist':
				return Actions.listAction(id.substr(5, 2));
			case 'edit_image':
				return Actions.imageAction();
			case 'edit_im_alignleft':
			case 'edit_im_aligncenter':
			case 'edit_im_alignright':
				return Actions.imageAlignAction(id.substring(8));
			}
		}, false);
	},
	show: function() {
		this.element.classList.add(CLASS_SHOWN);
	},
	hide: function() {
		this.element.classList.remove(CLASS_SHOWN);
	},
	addButton: function(aGroup, aName, aText, aImage) {
		var button = aGroup.append('button#edit_' + aName, aText);
		button.onmousedown = Edit.saveSelection;
		button.onmouseup = Edit.restoreSelection;
		if (aImage)
			button.append('img', null, { 'src': scriptPath + 'icons/' + aImage });
		this.buttons[aName] = button;
		return button;
	},
	setButtonState: function(aButton, aSelected, aDisabled) {
		var classList = this.buttons[aButton].classList;
		classList[aSelected ? 'add' : 'remove'](CLASS_SELECTED);
		classList[aDisabled ? 'add' : 'remove'](CLASS_DISABLED);
	},
	setChain: function(aText, aBold, aItalic, aUnderline, aLink) {
		this.chain_display.textContent = aText;
		this.chain_display.style.fontWeight = aBold ? 'bold' : 'normal';
		this.chain_display.style.fontStyle = aItalic ? 'italic' : 'normal';
		this.chain_display.style.textDecoration = aUnderline ? 'underline' : 'none';
		this.chain_display.style.color = aLink ? 'blue' : '';
	}
};

var Actions = {
	action: function(aCommand, aValue) {
		if (!Edit.currentBlock) return;
		document.execCommand(aCommand, false, aValue);
	},
	linkAction: function() {
		var button = ToolbarUI.buttons['link'];
		if (button.classList.contains(CLASS_SELECTED)) {
			var node = Edit.savedRange.startContainer;
			if (node.nodeType == 3 && Edit.savedRange.startOffset == node.length && node.nextSibling) {
				node = node.nextSibling;
			}
			if (node.childNodes.length == 1) {
				node = node.firstChild;
			}
			if (node.nodeType == 1) {
				node = node.childNodes[Edit.savedRange.startOffset];
			}
			while (node) {
				if (node.nodeType == 1 && node.localName == 'a')
					break;
				node = node.parentNode;
			}
			Edit.savedRange.selectNode(node);
			this.action('unlink', null);
		} else {
			var href;
			if (typeof Edit.linkCallback == 'function')
				href = Edit.linkCallback(Edit.savedRange.toString(), function(aHref) {
						Edit.restoreSelection();
						Actions.action('createlink', aHref);
					});
			else
				href = prompt('Type or paste a link:');
			if (href)
				this.action('createlink', href);
		}
	},
	listAction: function(aListType) {
		var currentListType = null;
		if (ToolbarUI.buttons.ulist.classList.contains(CLASS_SELECTED))
			currentListType = 'ul';
		else if (ToolbarUI.buttons.olist.classList.contains(CLASS_SELECTED))
			currentListType = 'ol';

		var blockNode = Edit.getBlockNodeForSelection();
		if (!blockNode)
			return;

		if (!currentListType) {
			this.action(aListType == 'ul' ? 'insertUnorderedList' : 'insertOrderedList', null);
			Edit.updateUI();
			return;
		}

		var list = Edit.savedRange.startContainer;
		if (list.nodeType == 1)
			list = list.childNodes[Edit.savedRange.startOffset];

		while (list) {
			if (list.nodeType == 1) {
				if (list.localName == 'ul' || list.localName == 'ol') {
					blockNode = list;
					break;
				}
				if (list.classList.contains(CLASS_EDIT_BLOCK)) {
					break;
				}
			}
			list = list.parentNode;
		}
		var parent = blockNode.parentNode;

		if (currentListType == aListType) { // already a list, remove
			var next = blockNode.nextSibling;
			Edit.savedRange.setStartAfter(blockNode);
			for (var i = 0; i < blockNode.childElementCount; i++) {
				var li = blockNode.children[i];
				var p = document.createElement('p');
				var n;
				while (n = li.firstChild) {
					if ((!parent.classList.contains(CLASS_EDIT_BLOCK)) ||
							(n.nodeType == 1 && blocks.indexOf(n.localName) >= 0)) {
						parent.insertBefore(n, next);
						Edit.savedRange.setEndAfter(n);
					} else {
						p.appendChild(n);
					}
				}
				if (p.childNodes.length) {
					parent.insertBefore(p, next);
					Edit.savedRange.setEndAfter(p);
				}
			}
			parent.removeChild(blockNode);

		} else { // convert to other type of list
			var newList = document.createElement(aListType);
			var li;
			while (li = blockNode.firstChild) {
				newList.appendChild(li);
			}
			parent.replaceChild(newList, blockNode);
			Edit.savedRange.selectNode(newList);
		}
		Edit.updateUI();
	},
	imageAction: function(aImage) {
		function finish(aSrc) {
			Edit.restoreSelection();
			var block = Edit.getBlockNodeForSelection();
			var newBlock = document.createElement('div');
			var image = document.createElement('img');
			image.setAttribute('src', aSrc);
			newBlock.appendChild(image);
			block.parentNode.insertBefore(newBlock, block);
		}
		var src;
		if (typeof Edit.imageCallback == 'function')
			src = Edit.imageCallback(aImage, finish);
		if (src)
			finish(src);
	},
	imageAlignAction: function(aClassName) {
		var node;
		var range = Edit.getRange();

		node = range.startContainer;
		if (node.nodeType == 1)
			node = node.childNodes[range.startOffset];
		else if (node.nodeType == 3 && range.startOffset == node.length && node.nextSibling)
			node = node.nextSibling;
		else if (node.childNodes.length == 1)
			node = node.firstChild;

		if (!node || node.localName != 'img')
			return;

		node.classList.remove(CLASS_ALIGN_LEFT);
		node.classList.remove(CLASS_ALIGN_CENTER);
		node.classList.remove(CLASS_ALIGN_RIGHT);
		node.classList.add(aClassName);
	}
};

function EditArea(aContent) {
	this.content = aContent;
	this.init();
}
EditArea.prototype = {
	content: null,
	init: function() {
		this.content.editArea = this;
		function onDragOver(aEvent) {
			var hasFiles = aEvent.dataTransfer.files && aEvent.dataTransfer.files.length;
			if (hasFiles)
				aEvent.preventDefault();

			// var isHTML = aEvent.dataTransfer.types.contains('text/html');
			// if (isHTML) {
			//   var htmlContent = aEvent.dataTransfer.getData('text/html');
			//   if (htmlContent.indexOf('<img') >= 0)
			//     aEvent.preventDefault();
			// }

			// var o = document.getElementById('edit_output');
			// o.textContent = '';
			// for (var i = 0; i < aEvent.dataTransfer.types.length; i++) {
			//   o.textContent += aEvent.dataTransfer.types[i] + '\n';
			// }
		}

		this.content.classList.add(CLASS_EDIT_BLOCK);
		this.content.onclick = Edit.updateUI;
		this.content.ondblclick = function(aEvent) {
			Edit.updateUI();
			if (aEvent.target.localName == 'img')
				Actions.imageAction(aEvent.target);
		};
		this.content.ondragenter = this.content.ondrop = onDragOver;
		this.content.contentEditable = true;
		this.content.onfocus = function() {
			Edit.setCurrentBlock(this);

			if (this._placeholder) {
				var selection = window.getSelection();
				selection.removeAllRanges();
				var r = document.createRange();
				r.selectNodeContents(this._placeholder);
				selection.addRange(r);
			}
			this.classList.remove(CLASS_PLACEHOLDER);
		};
		this.content.onblur = function() {
			for (var i = 0; i < this.childNodes.length; i++) {
				var node = this.childNodes[i];
				if (node.nodeType == 3) {
					this.replaceChild(createElement('p', node.nodeValue), node);
				}
			}
			this._placeholder = null;
			this.classList.remove(CLASS_PLACEHOLDER);
			if (this.textContent == '') {
				this.innerHTML = '<p>Edit this text</p>';
				this._placeholder = this.firstChild;
				this.classList.add(CLASS_PLACEHOLDER);
			} else if (this.textContent == 'Edit this text') {
				this._placeholder = this.firstChild;
				this.classList.add(CLASS_PLACEHOLDER);
			}
		};
		this.content.onkeypress = function(aEvent) {
			if (aEvent.ctrlKey) {
				switch (aEvent.charCode) {
				case 98:
					Edit.Actions.action('bold', null);
					aEvent.preventDefault();
					break;
				case 105:
					Edit.Actions.action('italic', null);
					aEvent.preventDefault();
					break;
				case 117:
					Edit.Actions.action('underline', null);
					aEvent.preventDefault();
					break;
				}
			}
		};
		this.content.onkeyup = function() {
			if (this.textContent == '') {
				this.clearChildNodes();
				var p = this.append('p', 'Edit this text');
				this._placeholder = p;

				var selection = window.getSelection();
				selection.removeAllRanges();
				var r = document.createRange();
				r.selectNodeContents(p);
				selection.addRange(r);
			}
			Edit.updateUI();
		};

		$(this.content).bind('keydown', function(e) {
	       // console.log("" + e.keyCode + " keyDown");
	    }).bind('keyup', function(e) {
	       console.log("" + e.keyCode + " keyUp");
	       $(this)[0].scrollTop += 1;
	       if(e.keyCode==8){
				var range = Edit.getRange();
				var element = range.endContainer;

				console.log('element',element)
				buildNewsletter($(element).parents('center').attr('id'),element,range,'del');
	    	}
	    });

		// var keys = $('.keyboard .key');
	 //    var key_nodes = {};
	 //    $.each(keys, function(_, node) {
	 //      var id, name;
	 //      node = $(node);
	 //      id = node.attr("id");
	 //      name = id.substr(4);
	 //      return key_nodes[name] = name;
	 //    });
	    var on_down = function(node) {
	     	// console.log("" + node + " on_down");
	    };
	    var on_up = function(node) {
	    	if("backspace"==node){
				console.log("" + node + " on_up");
	    		
				var range = Edit.getRange();
				var element = range.startContainer;
				buildNewsletter($(element).parents('center').attr('id'),element,range);
	    	}
	     	
	    };
	    var on_shift_down = function(node) {
	      // console.log("" + node + " on_shift_down");
	    };
	    var on_shift_up = function(node) {
	       // console.log("" + node + " on_shift_up");
	    };
	    var combos = [
	      {
	        keys: "`",		
	        on_keydown: function() {
	          return on_down(key_nodes.accent);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.accent);
	        }
	      }, {
	        keys: "~",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.accent);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.accent);
	        }
	      }, {
	        keys: "1",
	        on_keydown: function() {
	          return on_down(key_nodes.one);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.one);
	        }
	      }, {
	        keys: "!",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.one);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.one);
	        }
	      }, {
	        keys: "2",
	        on_keydown: function() {
	          return on_down(key_nodes.two);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.two);
	        }
	      }, {
	        keys: "@",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.two);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.two);
	        }
	      }, {
	        keys: "3",
	        on_keydown: function() {
	          return on_down(key_nodes.three);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.three);
	        }
	      }, {
	        keys: "#",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.three);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.three);
	        }
	      }, {
	        keys: "4",
	        on_keydown: function() {
	          return on_down(key_nodes.four);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.four);
	        }
	      }, {
	        keys: "$",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.four);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.four);
	        }
	      }, {
	        keys: "5",
	        on_keydown: function() {
	          return on_down(key_nodes.five);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.five);
	        }
	      }, {
	        keys: "%",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.five);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.five);
	        }
	      }, {
	        keys: "6",
	        on_keydown: function() {
	          return on_down(key_nodes.six);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.six);
	        }
	      }, {
	        keys: "^",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.six);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.six);
	        }
	      }, {
	        keys: "7",
	        on_keydown: function() {
	          return on_down(key_nodes.seven);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.seven);
	        }
	      }, {
	        keys: "&",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.seven);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.seven);
	        }
	      }, {
	        keys: "8",
	        on_keydown: function() {
	          return on_down(key_nodes.eight);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.eight);
	        }
	      }, {
	        keys: "*",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.eight);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.eight);
	        }
	      }, {
	        keys: "9",
	        on_keydown: function() {
	          return on_down(key_nodes.nine);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.nine);
	        }
	      }, {
	        keys: "(",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.nine);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.nine);
	        }
	      }, {
	        keys: "0",
	        on_keydown: function() {
	          return on_down(key_nodes.zero);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.zero);
	        }
	      }, {
	        keys: ")",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.zero);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.zero);
	        }
	      }, {
	        keys: "-",
	        on_keydown: function() {
	          return on_down(key_nodes.hyphen);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.hyphen);
	        }
	      }, {
	        keys: "_",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.hyphen);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.hyphen);
	        }
	      }, {
	        keys: "=",
	        on_keydown: function() {
	          return on_down(key_nodes.equals);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.equals);
	        }
	      }, {
	        keys: "+",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.equals);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.equals);
	        }
	      }, {
	        keys: "backspace",
	        on_keydown: function() {
	          return on_down(key_nodes.backspace);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.backspace);
	        }
	      }, {
	        keys: "tab",
	        on_keydown: function() {
	          return on_down(key_nodes.tab);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.tab);
	        }
	      }, {
	        keys: "q",
	        on_keydown: function() {
	          return on_down(key_nodes.q);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.q);
	        }
	      }, {
	        keys: "w",
	        on_keydown: function() {
	          return on_down(key_nodes.w);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.w);
	        }
	      }, {
	        keys: "e",
	        on_keydown: function() {
	          return on_down(key_nodes.e);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.e);
	        }
	      }, {
	        keys: "r",
	        on_keydown: function() {
	          return on_down(key_nodes.r);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.r);
	        }
	      }, {
	        keys: "t",
	        on_keydown: function() {
	          return on_down(key_nodes.t);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.t);
	        }
	      }, {
	        keys: "y",
	        on_keydown: function() {
	          return on_down(key_nodes.y);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.y);
	        }
	      }, {
	        keys: "u",
	        on_keydown: function() {
	          return on_down(key_nodes.u);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.u);
	        }
	      }, {
	        keys: "i",
	        on_keydown: function() {
	          return on_down(key_nodes.i);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.i);
	        }
	      }, {
	        keys: "o",
	        on_keydown: function() {
	          return on_down(key_nodes.o);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.o);
	        }
	      }, {
	        keys: "p",
	        on_keydown: function() {
	          return on_down(key_nodes.p);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.p);
	        }
	      }, {
	        keys: "[",
	        on_keydown: function() {
	          return on_down(key_nodes.left_bracket);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.left_bracket);
	        }
	      }, {
	        keys: "{",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.left_bracket);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.left_bracket);
	        }
	      }, {
	        keys: "]",
	        on_keydown: function() {
	          return on_down(key_nodes.right_bracket);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.right_bracket);
	        }
	      }, {
	        keys: "}",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.right_bracket);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.right_bracket);
	        }
	      }, {
	        keys: "\\",
	        on_keydown: function() {
	          return on_down(key_nodes.backslash);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.backslash);
	        }
	      }, {
	        keys: "|",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.backslash);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.backslash);
	        }
	      }, {
	        keys: "caps_lock",
	        on_keydown: function() {
	          return on_down(key_nodes.caps_lock);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.caps_lock);
	        }
	      }, {
	        keys: "a",
	        on_keydown: function() {
	          return on_down(key_nodes.a);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.a);
	        }
	      }, {
	        keys: "s",
	        on_keydown: function() {
	          return on_down(key_nodes.s);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.s);
	        }
	      }, {
	        keys: "d",
	        on_keydown: function() {
	          return on_down(key_nodes.d);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.d);
	        }
	      }, {
	        keys: "f",
	        on_keydown: function() {
	          return on_down(key_nodes.f);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.f);
	        }
	      }, {
	        keys: "g",
	        on_keydown: function() {
	          return on_down(key_nodes.g);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.g);
	        }
	      }, {
	        keys: "h",
	        on_keydown: function() {
	          return on_down(key_nodes.h);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.h);
	        }
	      }, {
	        keys: "j",
	        on_keydown: function() {
	          return on_down(key_nodes.j);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.j);
	        }
	      }, {
	        keys: "k",
	        on_keydown: function() {
	          return on_down(key_nodes.k);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.k);
	        }
	      }, {
	        keys: "l",
	        on_keydown: function() {
	          return on_down(key_nodes.l);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.l);
	        }
	      }, {
	        keys: ";",
	        on_keydown: function() {
	          return on_down(key_nodes.semicolon);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.semicolon);
	        }
	      }, {
	        keys: ":",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.semicolon);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.semicolon);
	        }
	      }, {
	        keys: "\'",
	        on_keydown: function() {
	          return on_down(key_nodes.apostrophe);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.apostrophe);
	        }
	      }, {
	        keys: "\"",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.apostrophe);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.apostrophe);
	        }
	      }, {
	        keys: "enter",
	        on_keydown: function() {
	          return on_down(key_nodes.enter);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.enter);
	        }
	      }, {
	        keys: "shift",
	        on_keydown: function() {
	          on_down(key_nodes.left_shift);
	          return on_down(key_nodes.right_shift);
	        },
	        on_keyup: function() {
	          on_up(key_nodes.left_shift);
	          return on_up(key_nodes.right_shift);
	        }
	      }, {
	        keys: "z",
	        on_keydown: function() {
	          return on_down(key_nodes.z);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.z);
	        }
	      }, {
	        keys: "x",
	        on_keydown: function() {
	          return on_down(key_nodes.x);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.x);
	        }
	      }, {
	        keys: "c",
	        on_keydown: function() {
	          return on_down(key_nodes.c);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.c);
	        }
	      }, {
	        keys: "v",
	        on_keydown: function() {
	          return on_down(key_nodes.v);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.v);
	        }
	      }, {
	        keys: "b",
	        on_keydown: function() {
	          return on_down(key_nodes.b);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.b);
	        }
	      }, {
	        keys: "n",
	        on_keydown: function() {
	          return on_down(key_nodes.n);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.n);
	        }
	      }, {
	        keys: "m",
	        on_keydown: function() {
	          return on_down(key_nodes.m);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.m);
	        }
	      }, {
	        keys: ",",
	        on_keydown: function() {
	          return on_down(key_nodes.comma);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.comma);
	        }
	      }, {
	        keys: "<",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.comma);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.comma);
	        }
	      }, {
	        keys: ".",
	        on_keydown: function() {
	          return on_down(key_nodes.period);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.period);
	        }
	      }, {
	        keys: ">",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.period);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.period);
	        }
	      }, {
	        keys: "/",
	        on_keydown: function() {
	          return on_down(key_nodes.forwardslash);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.forwardslash);
	        }
	      }, {
	        keys: "?",
	        on_keydown: function() {
	          return on_shift_down(key_nodes.forwardslash);
	        },
	        on_keyup: function() {
	          return on_shift_up(key_nodes.forwardslash);
	        }
	      }, {
	        keys: "ctrl",
	        on_keydown: function() {
	          on_down(key_nodes.left_ctrl);
	          return on_down(key_nodes.right_ctrl);
	        },
	        on_keyup: function() {
	          on_up(key_nodes.left_ctrl);
	          return on_up(key_nodes.right_ctrl);
	        }
	      }, {
	        keys: "alt",
	        on_keydown: function() {
	          on_down(key_nodes.left_alt);
	          return on_down(key_nodes.right_alt);
	        },
	        on_keyup: function() {
	          on_up(key_nodes.left_alt);
	          return on_up(key_nodes.right_alt);
	        }
	      }, {
	        keys: "cmd",
	        on_keydown: function() {
	          on_down(key_nodes.left_cmd);
	          return on_down(key_nodes.right_cmd);
	        },
	        on_keyup: function() {
	          on_up(key_nodes.left_cmd);
	          return on_up(key_nodes.right_cmd);
	        }
	      }, {
	        keys: "space",
	        on_keydown: function() {
	          return on_down(key_nodes.space);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.space);
	        }
	      }, {
	        keys: "up",
	        on_keydown: function() {
	          return on_down(key_nodes.up);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.up);
	        }
	      }, {
	        keys: "down",
	        on_keydown: function() {
	          return on_down(key_nodes.down);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.down);
	        }
	      }, {
	        keys: "left",
	        on_keydown: function() {
	          return on_down(key_nodes.left);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.left);
	        }
	      }, {
	        keys: "right",
	        on_keydown: function() {
	          return on_down(key_nodes.right);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.right);
	        }
	      }, {
	        keys: "print",
	        on_keydown: function(e) {
	          return on_down(key_nodes.print);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.print);
	        }
	      }, {
	        keys: "scroll",
	        on_keydown: function() {
	          return on_down(key_nodes.scroll_lock);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.scroll_lock);
	        }
	      }, {
	        keys: "pause",
	        on_keydown: function() {
	          return on_down(key_nodes.pause_break);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.pause_break);
	        }
	      }, {
	        keys: "insert",
	        on_keydown: function() {
	          return on_down(key_nodes.insert);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.insert);
	        }
	      }, {
	        keys: "home",
	        on_keydown: function() {
	          return on_down(key_nodes.home);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.home);
	        }
	      }, {
	        keys: "pageup",
	        on_keydown: function() {
	          return on_down(key_nodes.page_up);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.page_up);
	        }
	      }, {
	        keys: "delete",
	        on_keydown: function() {
	          return on_down(key_nodes["delete"]);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes["delete"]);
	        }
	      }, {
	        keys: "end",
	        on_keydown: function() {
	          return on_down(key_nodes.end);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.end);
	        }
	      }, {
	        keys: "pagedown",
	        on_keydown: function() {
	          return on_down(key_nodes.page_down);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.page_down);
	        }
	      }, {
	        keys: "num",
	        on_keydown: function() {
	          return on_down(key_nodes.num_lock);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_lock);
	        }
	      }, {
	        keys: "num_divide",
	        on_keydown: function() {
	          return on_down(key_nodes.divide);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.divide);
	        }
	      }, {
	        keys: "num_multiply",
	        on_keydown: function() {
	          return on_down(key_nodes.multiply);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.multiply);
	        }
	      }, {
	        keys: "num_subtract",
	        on_keydown: function() {
	          return on_down(key_nodes.subtract);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.subtract);
	        }
	      }, {
	        keys: "num_add",
	        on_keydown: function() {
	          return on_down(key_nodes.add);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.add);
	        }
	      }, {
	        keys: "num_enter",
	        on_keydown: function() {
	          return on_down(key_nodes.num_enter);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_enter);
	        }
	      }, {
	        keys: "num_decimal",
	        on_keydown: function() {
	          return on_down(key_nodes.num_decimal);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_decimal);
	        }
	      }, {
	        keys: "num_0",
	        on_keydown: function() {
	          return on_down(key_nodes.num_0);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_0);
	        }
	      }, {
	        keys: "num_1",
	        on_keydown: function() {
	          return on_down(key_nodes.num_1);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_1);
	        }
	      }, {
	        keys: "num_2",
	        on_keydown: function() {
	          return on_down(key_nodes.num_2);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_2);
	        }
	      }, {
	        keys: "num_3",
	        on_keydown: function() {
	          return on_down(key_nodes.num_3);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_3);
	        }
	      }, {
	        keys: "num_4",
	        on_keydown: function() {
	          return on_down(key_nodes.num_4);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_4);
	        }
	      }, {
	        keys: "num_5",
	        on_keydown: function() {
	          return on_down(key_nodes.num_5);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_5);
	        }
	      }, {
	        keys: "num_6",
	        on_keydown: function() {
	          return on_down(key_nodes.num_6);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_6);
	        }
	      }, {
	        keys: "num_7",
	        on_keydown: function() {
	          return on_down(key_nodes.num_7);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_7);
	        }
	      }, {
	        keys: "num_8",
	        on_keydown: function() {
	          return on_down(key_nodes.num_8);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_8);
	        }
	      }, {
	        keys: "num_9",
	        on_keydown: function() {
	          return on_down(key_nodes.num_9);
	        },
	        on_keyup: function() {
	          return on_up(key_nodes.num_9);
	        }
	      }
	    ];
	    // keypress.register_many(combos);

		$(this.content).debounce("scroll", function() {
			console.log($(this)[0],"scrollend");
			var range = Edit.getRange();
			var node = range.startContainer;
			buildNewsletter($(this).parents('center').attr('id'),$(this),range,'add');
			
		}, 50);

		if (this.content.textContent == '') {

			this.content.innerHTML = '<p>Edit this text</p>';
			this.content._placeholder = this.content.firstChild;
			this.content.classList.add(CLASS_PLACEHOLDER);
		}
	},
	destroy: function() {
		this.content.classList.remove(CLASS_EDIT_BLOCK);
		this.content.contentEditable = false;
		this.content.onblur =
			this.content.onclick =
			this.content.ondblclick =
			this.content.ondragenter =
			this.content.ondrop =
			this.content.onfocus =
			this.content.onkeyup = null;
	},
	output: function() {
		return serialize(this.content, false);
	},
	outputAsync: function(aCallback) {
		var self = this;
		ScriptLoader.maybeLoadScript(!window.serialize, Edit.scriptPath + 'serialize.js', function() {
			aCallback(self.output());
		});
	}
};

var Edit = {
	scriptPath: scriptPath,
	currentBlock: null,
	savedRange: null,

	Actions: Actions,
	ToolbarUI: ToolbarUI,
	NodeTypeUI: NodeTypeUI,
	EditArea: EditArea,

	setCurrentBlock: function(aDiv) {
		if (aDiv == this.currentBlock)
			return;
		if (this.currentBlock)
			this.currentBlock.classList.remove(CLASS_CURRENT);
		this.currentBlock = aDiv;
		this.range = null;
		if (this.currentBlock) {
			this.currentBlock.classList.add(CLASS_CURRENT);
			ToolbarUI.show();
		} else {
			ToolbarUI.hide();
		}
	},
	updateUI: function() {
		var range = Edit.getRange();
		var node = range.startContainer;
		var collapsed = range.collapsed;

		if (node.nodeType == 1)
			node = node.childNodes[range.startOffset];
		else if (node.nodeType == 3 && range.startOffset == node.length && node.nextSibling)
			node = node.nextSibling;
		else if (node.childNodes.length == 1)
			node = node.firstChild;

		if (!node)
			return;

		var chain = [];
		var leafNode = node.nodeType == 1 ? node : null;
		var blockNode = null;
		var bold = false;
		var italic = false;
		var underline = false;
		var link = false;
		var uList = false;
		var oList = false;
		var image = node.nodeType == 1 && node.localName == 'img';

		do {
			var name;
			if (node.nodeType == 1) {
				name = node.localName;
				if (node.id) name += '#' + node.id;
				if (node.classList) for (var i = 0; i < node.classList.length; i++) name += '.' + node.classList[i];
				if (node.localName == 'b' || node.localName == 'strong' || node.style.fontWeight == 'bold') bold = true;
				if (node.localName == 'i' || node.localName == 'em' || node.style.fontStyle == 'italic') italic = true;
				if (node.localName == 'u' || node.style.textDecoration == 'underline') underline = true;
				if (node.localName == 'a') link = true;
				if (node.localName == 'ul' && !oList) uList = true;
				if (node.localName == 'ol' && !uList) oList = true;
			} else if (node.nodeType == 3) {
				name = '#text';//(' + node.length + ')';
			}

			chain.push(name);
			blockNode = node;
			node = node.parentNode;
		} while (node && !node.classList.contains(CLASS_EDIT_BLOCK));

		var alignment = (blockNode.style && blockNode.style.textAlign) || blockNode.align || 'left';

		// console.log([collapsed, leafNode, blockNode, bold, italic, underline, alignment, link, uList, oList, image]);

		ToolbarUI.setChain(
			chain.reverse().join(' > ') + ' [' + blockNode.localName + ', ' + alignment + ']',
			bold, italic, underline, link
		);

		ToolbarUI.setButtonState('bold', bold, collapsed || image);
		ToolbarUI.setButtonState('italic', italic, collapsed || image);
		ToolbarUI.setButtonState('underline', underline, collapsed || image);
		ToolbarUI.setButtonState('justifyleft', alignment == 'left', image);
		ToolbarUI.setButtonState('justifycenter', alignment == 'center', image);
		ToolbarUI.setButtonState('justifyright', alignment == 'right', image);
		ToolbarUI.setButtonState('justifyfull', alignment == 'justify', image);
		ToolbarUI.setButtonState('link', link, (image || collapsed) && !link);
		ToolbarUI.setButtonState('ulist', uList, image);
		ToolbarUI.setButtonState('olist', oList, image);
		ToolbarUI.setButtonState('indent', false, !uList && !oList);
		ToolbarUI.setButtonState('outdent', false, !uList && !oList);
		ToolbarUI.setButtonState('image', false, image);
		ToolbarUI.setButtonState('im_alignleft', image && leafNode.classList.contains(CLASS_ALIGN_LEFT), !image);
		ToolbarUI.setButtonState('im_aligncenter', image && leafNode.classList.contains(CLASS_ALIGN_CENTER), !image);
		ToolbarUI.setButtonState('im_alignright', image && leafNode.classList.contains(CLASS_ALIGN_RIGHT), !image);

		NodeTypeUI.setNodeType(blockNode.localName);
	},
	getBlockNodeForSelection: function() {
		var node;
		var range = this.getRange();
		if (!range)
			return null;

		node = range.startContainer;
		if (node.nodeType == 1)
			node = node.childNodes[range.startOffset];

		var blockNode = null;
		while (node) {
			if (node.nodeType == 1 && node.classList.contains(CLASS_EDIT_BLOCK))
				break;
			blockNode = node;
			node = node.parentNode;
		}
		return blockNode;
	},
	getRange: function() {
		var selection = window.getSelection();
		if (selection.rangeCount) {
			return selection.getRangeAt(0);
		}
	},
	saveSelection: function() {
		Edit.savedRange = Edit.getRange();
	},
	restoreSelection: function() {
		if (!Edit.savedRange)
			return;

		var selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(Edit.savedRange);
		Edit.currentBlock.focus();
		setTimeout(Edit.updateUI, 0);
	}
};

ToolbarUI.init();
document.documentElement.addEventListener('click', function(aEvent) {
	var element = aEvent.target;
	while (element) {
		if (element.nodeType == 1 &&
				(element.classList.contains(CLASS_EDIT_BLOCK) ||
				element.id == 'edit_toolbar' ||
				element.id == 'darkbox-a' ||
				element.id == 'darkbox-b')) {
			return;
		}
		element = element.parentNode;
	}
	Edit.setCurrentBlock(null);
}, false);

window.Edit = Edit;
})();

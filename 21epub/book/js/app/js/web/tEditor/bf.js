	tEditor.style={
		style_filter:['P','UL','H1','H2','H3','H4','H5','H6','TABLE','BLOCKQUOTE','OL','SMALL','FIGURE'],
		currentstyle:{'spalten':'cols_1','status':false},
		currentstylenode:{'spalten':false,'status':false},
		clear:function(type){//clear the style pattern of specific type
			if(type) $('div.tab-pane#'+type+' li').removeClass('active');
			else {
				$('div.tab-pane li').removeClass('active');
				for (style in currentstylenode )
				{
					this.currentstylenode[style]=false;
				}
			}
		},
		check:function(editor,e){//check current selection style
			var spalten=is_spalten(editor.selection.getNode());
			if(spalten){
				var spalten_type=get_spalten_type(spalten);	
				if(spalten_type) {
					this.focus(this.currentstyle.spalten);
					this.focus_spaltenListBox(this.currentstyle.spalten);
				}
				else {
					style_clear('spalten');
					style_focus_spaltenListBox("");
				}
			}
			else {
				this.focus('cols_1');
				this.focus_spaltenListBox('cols_1');
			}
			var status=is_status(editor.selection.getNode());
			if(status){
				this.focus(this.currentstyle.status);
				this.focus_statusListBox(this.currentstyle.status);
			}
			else{
				this.clear('status');
				this.focus_statusListBox("");
			}
		},
		focus:function(style){//focus the specific node
			$('div.tab-pane li.'+style).parent().children('li').removeClass('active');
			$('div.tab-pane li.'+style).addClass('active');
		},
		focus_spaltenListBox:function(style){
			var c=tinymce.activeEditor.controlManager.get('spaltenListBox');
			c.select(style);
		},
		focus_statusListBox:function(style){
			var c=tinymce.activeEditor.controlManager.get('statusListBox');
			c.select(style);
		},
		filter_node(node,filter){
			var dom=tinymce.activeEditor.dom;
			var selection=tinymce.activeEditor.selection;
			var parents = dom.getParents(node);
			if(_.include(filter,node.nodeName)) return node;
			var returned=false;
			//return parents;
			if(parents.length==0) returned=false;
			_.each(parents, function(parent){
				if(_.include(filter,parent.nodeName)) {
					returned=parent;
				}
			});
			return returned;
		},
		is_p:function(node){//judge the node is a paragraph
			var dom=tinymce.activeEditor.dom;
			var selection=tinymce.activeEditor.selection;
			var parents = dom.getParents(node);
			if(node.nodeName=="p") return node;
			var returned=false;
			//return parents;
			if(parents.length==0) returned=false;
			_.each(parents, function(parent){
				if(parent.nodeName=="P") {
					returned=parent;
				}
			});
			return returned;
		}
		is_status:function(node){//judge the node is a paragraph
			var dom=tinymce.activeEditor.dom;
			var parents = dom.getParents(node);
			var selection=tinymce.activeEditor.selection;
			var returned=false;
			//return parents;
			if(parents.length==0) returned=false;
			_.each(parents, function(parent){
				if(dom.hasClass(parent,'status')) {
					returned=parent;
					tEditor.style.currentstyle.status=tEditor.style.get_status_type(parent);
					tEditor.style.currentstylenode.status=parent;
					return ;
				}
			});
			if(!returned) {
				this.currentstyle.status=false;
				var p=this.filter_node(selection.getStart(),this.style_filter)||this.filter_node(selection.getEnd(),this.style_filter);
				if(p) tEditor.style.currentstylenode.status=p;
				else tEditor.style.currentstylenode.status=false;
			}
			return returned;
		},
function is_spalten(node){//check for spalten node and return it 
	var dom=tinymce.activeEditor.dom;
	var parents = dom.getParents(node);
	var selection=tinymce.activeEditor.selection;
	var returned=false;
	//return parents;
	if(parents.length==0) returned=false;
	_.each(parents, function(parent){
		if(dom.hasClass(parent,'row-fluid')) {
			returned=parent;
			currentstyle.spalten=get_spalten_type(parent);
			currentstylenode.spalten=parent;
		}
	});
	if(!returned) {
		var p=filter_node(selection.getStart(),style_filter)||filter_node(selection.getEnd(),style_filter);
		if(p) {
			currentstyle.spalten='cols_1';
			currentstylenode.spalten=p;
		}
		else {
			currentstylenode.spalten=false;
			currentstyle.status=false;
		}
	}
	return returned;
}
function get_spalten_type(node){//return the spalten type for this node
	var dom=tinymce.activeEditor.dom;
	var returned=false;
	var nodechildren=node.childNodes;
	if(nodechildren.length>1){
		if(dom.hasClass(nodechildren[0],'span6')) returned='cols_2';
		if(dom.hasClass(nodechildren[0],'span4')&&dom.hasClass(nodechildren[1],'span4')) returned='cols_3';
		if(dom.hasClass(nodechildren[0],'span4')&&dom.hasClass(nodechildren[1],'span8')) returned='cols_1_2';
		if(dom.hasClass(nodechildren[0],'span8')&&dom.hasClass(nodechildren[1],'span4')) returned='cols_2_1';
	}
	return returned;
}
function get_status_type(node){
	if($(node).hasClass('warning')) return 'warning';
	else if($(node).hasClass('doubt')) return 'doubt';
	else if($(node).hasClass('info')) return 'info';
	else if($(node).hasClass('error')) return 'error';
	else if($(node).hasClass('success')) return 'success';
	else return false;
}
function get_style_node(node){//check for spalten node and return it 
	var dom=tinymce.activeEditor.dom;
	var parents = dom.getParents(node);
	var returned=node;
	//return parents;
	if(parents.length==0) ;
	_.each(parents,function(parent){
		if($(parent).hasClass('row-fluid')) {
			returned=parent;
		}
	});
	return returned;
}
function if_start_node(node){
	var dom=tinymce.activeEditor.dom;
	var selection=tinymce.activeEditor.selection;
	var startnode=selection.getStart();
	if(startnode==node) return true;
	var parents = dom.getParents(startnode);
	//return parents;
	var returned=false;
	_.each(parents,function(parent){
		if(parent==node) {
			returned=true;
		}
	});
	return returned;
}
function if_end_node(node){
	var dom=tinymce.activeEditor.dom;
	var selection=tinymce.activeEditor.selection;
	var endnode=selection.getEnd();
	if(endnode==node) return true;
	var parents = dom.getParents(endnode);
	//return parents;
	var returned=false;
	_.each(parents,function(parent){
		if(parent==node) {
			returned=true;
		}
	});
	return returned;
}
function get_style_cols_1_content(){
	var dom=tinymce.activeEditor.dom;
	var selection=tinymce.activeEditor.selection;
	var content=filter_node(selection.getStart(),style_filter).outerHTML;
	if(selection.getStart()==selection.getEnd()) return content;
	else {
		var node=filter_node(selection.getStart(),style_filter);
		while(!(if_end_node(node))){
			if(node.nextSibling) {
				content=content+node.nextSibling.outerHTML;
				node=node.nextSibling;
			}
			else break;
		}
	}
	return content;
}
function set_style_cols_1_content(node){
	var dom=tinymce.activeEditor.dom;
	var selection=tinymce.activeEditor.selection;
	if(selection.getStart()==selection.getEnd()) return $(node);
	else {
		node=filter_node(selection.getStart(),style_filter);
		while(!(if_end_node(node))){
			if(node.nextSibling) {
				var nextnode=node.nextSibling;
				node.outerHTML='';
				node=nextnode;
			}
			else break;
		}
		//node.nextSibling.outerHTML='';
	}
	return $(node);
}
function get_style_content(){
	var dom=tinymce.activeEditor.dom;
	var node=$(currentstylenode.spalten)[0];
	var returned={content:''};
	var nodechildren=node.childNodes;
	if(currentstyle.spalten=='cols_1') {returned['content']=node.outerHTML;returned['content1']=get_style_cols_1_content();returned['content2']='<p><br></p>';}
	if(currentstyle.spalten=='cols_2') {returned.content=node.childNodes[0].innerHTML+node.childNodes[1].innerHTML;returned['content1']=node.childNodes[0].innerHTML;returned['content2']=node.childNodes[1].innerHTML;}
	if(currentstyle.spalten=='cols_3') {returned.content=node.childNodes[0].innerHTML+node.childNodes[1].innerHTML+node.childNodes[2].innerHTML;returned.type='cols_3';returned['content1']=node.childNodes[0].innerHTML;returned['content2']=node.childNodes[1].innerHTML;returned['content3']=node.childNodes[2].innerHTML;}
	if(currentstyle.spalten=='cols_1_2') {returned.content=node.childNodes[0].innerHTML+node.childNodes[1].innerHTML;returned.type='cols_1_2';returned['content1']=node.childNodes[0].innerHTML;returned['content2']=node.childNodes[1].innerHTML;}
	if(currentstyle.spalten=='cols_2_1') {returned.content=node.childNodes[0].innerHTML+node.childNodes[1].innerHTML;returned.type='cols_2_1';returned['content1']=node.childNodes[0].innerHTML;returned['content2']=node.childNodes[1].innerHTML;}
	return returned;
}
function get_status_content(){
	if(currentstyle.status){
		var content=$(currentstylenode.status).html();
	}
	else{
		var content=get_style_cols_1_content();
	}
	return content;
}
function style_change(type,style){//change the style 
	var changed=false;
	if(style!=currentstyle[type]){
		switch(currentstyle[type]){
		}
		switch (type){
			case 'status':
				if(currentstylenode.status){
					if(style=='clear'){
						if(currentstyle.status){
							var newcontent=get_status_content();
							changed=true;
						}
					}
					else {
						var content=get_status_content();
						currentstylenode.status=set_style_cols_1_content(currentstylenode.status);
						var newcontent='<div class="message-box status '+style+'">'+content+'</div>';
						changed=true;
					}
			    }
				break;
			case 'spalten':
				if(!currentstylenode.spalten) break;
				var content=get_style_content();
				if(currentstyle.spalten=='cols_3') var newcontent2=content.content2+content.content3;
				else var newcontent2=content.content2;
				if(style=='cols_1'){
					var newcontent=''+content.content+'';
				}
				else if(style=='cols_2'){
					var newcontent='<div class="row-fluid"><div class="span6">'+content.content1+'</div><div class="span6">'+newcontent2+'</div></div>';	
				}
				else if(style=='cols_3'){
					var newcontent='<div class="row-fluid"><div class="span4">'+content.content1+'</div><div class="span4">'+newcontent2+'</div><div class="span4"><p><br></p></div></div>';
				}
				else if(style=='cols_1_2'){
					var newcontent='<div class="row-fluid"><div class="span4">'+content.content1+'</div><div class="span8">'+newcontent2+'</div></div>';	
				}
				else if(style=='cols_2_1'){
					var newcontent='<div class="row-fluid"><div class="span8">'+content.content1+'</div><div class="span4">'+newcontent2+'</div></div>';	
				}
				if(currentstyle.spalten=='cols_1') currentstylenode.spalten=set_style_cols_1_content(currentstylenode.spalten);
				changed=true;
				break;
		}
		if(changed){
			currentstylenode[type]=$(newcontent).replaceAll(currentstylenode[type]);
			if(currentstylenode[type].length>1) {
				var content_patch='';
				var node_number=1;
				while(node_number<currentstylenode[type].length){
					content_patch=content_patch+currentstylenode[type][node_number].outerHTML;
					node_number++;
				}
				currentstylenode[type]=currentstylenode[type][0];
				if(content_patch&&content_patch!='') $(content_patch).insertAfter($(currentstylenode[type]));
			}
			currentstyle[type]=style;
			tinyMCE.execCommand('mceAutoResize');
			tinyMCE.execCommand("mceEndUndoLevel");
			//tinyMCE.DOM.select($(currentstylenode[type])[0]);
			//style_focus(style);
			//tinyMCE.DOM.select(currentstylenode[type]);
			style_check(tinymce.activeEditor);
			//tinymce.activeEditor.selection.select($(currentstylenode[type])[0]);
		}
	}
}
	}
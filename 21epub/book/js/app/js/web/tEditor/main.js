(function(win){
	win.tEditor={
		init:function(){
			tinyMCE.init(tEditor.simple_config);
		},
		onInit:function(){
			$('span#'+iCurrentModel+'_parent').addClass('active article');
			$('span#'+iCurrentModel+'_parent').focus();
			tinyMCE.activeEditor.focus();
			$('table.mceLayout').width('100%');
			$('table.mceLayout').height('100%');
			$('table.mceLayout iframe').css('height',Editor_original_height);
			$(tinymce.activeEditor.getBody()).find('img').load(function(){
				tinyMCE.execCommand('mceRepaint');
				tinyMCE.execCommand('mceAutoResize');
			})
			//tinymce_resizepatch();
			tEditor.resize_patch();
			jqwait_simple_close();
		},
		interactioninit:function(){
			$('table.mceLayout').css('width','100%');
			$('table.mceLayout').css('height','100%');
			$('table.mceLayout').css('background','transparent');
			$('table.mceLayout').children('tbody').children('tr.last').css('position','absolute');
			$('table.mceLayout').children('tbody').children('tr.last').css('background','#FFFFFF');
			$('table.mceLayout').children('tbody').children('tr.last').css('top','-50px');
			$('table.mceLayout').children('tbody').children('tr.mceLast').css('position','absolute');
			$('table.mceLayout').children('tbody').children('tr.mceLast').css('background','#FFFFFF');
			$('table.mceLayout').children('tbody').children('tr.mceLast').css('top','-50px');
			//$('table.mceLayout iframe').css('height','100%');
			$('table.mceLayout iframe').css('background','transparent');
			interaction.current.iview.$el.find('iframe').css('height',interaction.current.iview.getcommon().iHeight+'px');			
		},
		load:function(id){
			if(iCurrentModel&&iCurrentModel==id) ;//when the target is not loaded 
			else{
				if(iCurrentModel) {//finish the current editor
						if (tinyMCE.getInstanceById(iCurrentModel))
						{
							tEditor.unload(iCurrentModel);
						}
				}
			jqwait_simple();
			iCurrentModel=id;
			element=$('article.article#'+iCurrentModel);
			Editor_original_height=$('article#'+iCurrentModel).height();
			tinyMCE.execCommand('mceToggleEditor',false, iCurrentModel);
			}
		},
		unload:function(id){
			tEditor.save_patch();
			tinyMCE.execCommand('mceFocus', false, id);                    
			tinyMCE.execCommand('mceRemoveControl', false, id);
		},
		getOriginData:function(id){
			var content=$('article.article#'+id).html();
			return content;
		},
		getData:function(id){
			var content=tinyMCE.getInstanceById(id).getBody().innerHTML;
			return content;
		},
		insert:function(content){
			tinyMCE.execCommand('mceInsertContent',false,content);
			$(tinymce.activeEditor.getBody()).find('img').load(function(){
				tinyMCE.execCommand('mceRepaint');
				tinyMCE.execCommand('mceAutoResize');
			})
			tinyMCE.execCommand("mceEndUndoLevel");
		},
		resize_patch:function(){
			// $("#"+iCurrentModel+"_ifr").css('height','500px');
			console.info($(tinymce.activeEditor.getBody()).height());
			 if ($.browser.webkit){
				// //make sure if it's a webkit browser you don't include the td element into the wysiwygResize selector option.
				// $("#"+iCurrentModel+"_ifr").wysiwygResize({
					// selector: "table,img",
					// afterResize: function(img){
						// tinyMCE.execCommand('mceAutoResize');
					// }
				// })
			// }
				$(tinymce.activeEditor.getBody()).find('img').live('click',function(){
					tEditor.unresizable();
					tEditor.resizable($(this));
				})
			}
		},
		resizable:function(target){
			var width=target.width();
			var height=target.height();
			target.wrap('<div class="imgwrap" style="height:'+height+'px;width:'+width+'px"></div>');
			target.parent('div.imgwrap').resizable({
				parent:$(tinymce.activeEditor.getBody()),
				onResize:function(x,y){
					target.css('width',x+'px');
					target.css('height',y+'px');
				},
				onStop:function(){
					target.css('width',target.parent('div.imgwrap').width()+'px');
					target.css('height',target.parent('div.imgwrap').height()+'px');
				}
			});
			//$(tinymce.activeEditor.getBody()).on('click',function(e){
				//console.info(e.target);
			//})
		},
		unresizable:function(){
			$(tinymce.activeEditor.getBody()).find('div.imgwrap').each(function(){
				if($(this).find('img').length==0) $(this).remove();
				else{
					$(this).children('.ui-resizable-handle').remove();
					$(this).children('img').unwrap('div.imgwrap');
				}
			})			
		},
		save_patch:function(){
			if ($.browser.webkit){
				$(tinymce.activeEditor.getBody()).find('div.imgwrap').children('.ui-resizable-handle').remove();
				$(tinymce.activeEditor.getBody()).find('div.imgwrap').children('img').unwrap('div.imgwrap');	
			}		
		}
	}
	tEditor.css="common_js/bootstrap/bootstrap.min.css,"+web_url+"css/bootstrap.min.patch.css,"+web_url+"css/typo.css,"+web_url+"css/typo.patch.css,common_js/resizable/resizable.css";
	tEditor.simple_config={
		        mode : "none",
				theme : "advanced",
				language : "zh",
				theme_advanced_toolbar_location : "top",
				plugins : "resizable,autolink,inlinepopups,autoresize,customtable,customlink,paste,noneditable,custom_autosave,customimage,advhr,advlist,lists",
				content_css:tEditor.css,
				init_instance_callback : tEditor.onInit,
				theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,formatselect,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,forecolor,|",
				theme_advanced_buttons2 :"",
				theme_advanced_buttons3 :"",
				paste_block_drop:true,
				paste_text_use_dialog:false,
				extended_valid_elements : "a[*]",
				schema: "html5",
		        style_formats : [
		                {title : 'h1', block : 'h1'},
		                {title : 'h2', block : 'h2'},
		                {title : 'h3', block : 'h3'},
		                {title : 'h4', block : 'h4'},
		                {title : 'h5', block : 'h5'},
		                {title : 'h6', block : 'h6'},
		                {title : 'p', block : 'p'},
		                {title : 'div', block : 'div'},
		                {title : 'pre', block : 'pre'},
		                {title : 'section', block : 'section', wrapper: true, merge_siblings: false},
		                {title : 'article', block : 'article', wrapper: true, merge_siblings: false},
		                {title : 'blockquote', block : 'blockquote', wrapper: true},
		                {title : 'hgroup', block : 'hgroup', wrapper: true},
		                {title : 'aside', block : 'aside', wrapper: true},
		                {title : 'figure', block : 'figure', wrapper: true}
		        ]
	};
	tEditor.interaction_config={
		        mode : "none",
				theme : "advanced",
				language : "zh",
				theme_advanced_toolbar_location : "top",
				content_css:tEditor.css,
				init_instance_callback : tEditor.interactionInit,
			    theme_advanced_buttons1 : "fontselect,fontsizeselect,|,bold,italic,underline,strikethrough,|,undo,redo,|,bullist,numlist,|,forecolor",
				theme_advanced_buttons2 :"",
				theme_advanced_buttons3 :"",
				schema: "html5",
		        style_formats : [
		                {title : 'h1', block : 'h1'},
		                {title : 'h2', block : 'h2'},
		                {title : 'h3', block : 'h3'},
		                {title : 'h4', block : 'h4'},
		                {title : 'h5', block : 'h5'},
		                {title : 'h6', block : 'h6'},
		                {title : 'p', block : 'p'},
		                {title : 'div', block : 'div'},
		                {title : 'pre', block : 'pre'},
		                {title : 'section', block : 'section', wrapper: true, merge_siblings: false},
		                {title : 'article', block : 'article', wrapper: true, merge_siblings: false},
		                {title : 'blockquote', block : 'blockquote', wrapper: true},
		                {title : 'hgroup', block : 'hgroup', wrapper: true},
		                {title : 'aside', block : 'aside', wrapper: true},
		                {title : 'figure', block : 'figure', wrapper: true}
		        ]
		}
})(window);
define(['iEditor/pageEdit','global/main'],function(){
	window.iEditor={
		event:{
			init:function(){
				this.onClick();
			},
			onClick:function(){
				$('section > article').live('click',function(){
  					var id=$(this).parent('section').attr('id');
  					window.iCurrentModel=id;
  					//tinymce.execCommand('mceAddEditor',false,id);
				})
			}
		},
		insert:function(materials){
			if(materials.length==0) return;
			var content="";
			_.each(materials, function(material) {
				content = content+ material.content;
			});		
			content = content + "<p><br/></p>";
			global.change = true;
			tinymce.activeEditor.execCommand('mceInsertContent', false, content);	
		},
		init:function(){
	    	var imageHandle=function(){
	    		$('button:has(i.mce-i-image)').trigger('click');
	    	}
			tinymce.init({
				selector: "section > article",
				//script_url:path.tinymce+'.js',
			    //theme: "modern",
			    language:'zh_CN',
			    plugins: [
			        ["textcolor advlist autolink link autolink image lists charmap print preview hr anchor pagebreak spellchecker"],
			        ["searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking alignButtons scriptButtons"],
			        ["save table contextmenu directionality emoticons template paste explain indicator spaltenListBox statusListBox fmath_formula custom_autosave formatPainter blockquoteListBox"]
			    ],
			    extended_valid_elements : "img[id|data-math|class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]",
			    add_unload_trigger: false,
				valid_children : "+div[p],+div[div],+figure[audio],+figure[video]",
			    schema: "html5",
			    inline: true,
			    menubar:false,
				//paste_create_paragraphs : false,
				//paste_create_linebreaks : false,
				//paste_use_dialog : true,
				// paste_auto_cleanup_on_paste : true,
				paste_remove_styles: true, 
				paste_enable_default_filters: true,
				paste_as_text: true,
				//paste_convert_middot_lists : false,
				//paste_unindented_list_class : "unindentedList",
				//paste_convert_headers_to_strong : true,
				//paste_insert_word_content_callback : "convertWord",
			    //autofocus:true,
			    toolbar: "undo redo | removeformat  styleselect  textindent bold alignButtons scriptButtons bullist outdent indent | explain indicator spaltenListBox statusListBox | link table image | formatPainter fmath_formula |",
			    statusbar: false,
			    contextmenu: "tableprops | cell row column deletetable",
			    setup: function(editor) {
					editor.on('init',function(e){
						$('section').find('img').on('dblclick',imageHandle);
					});
					editor.on('remove',function(e){
						$('section').find('img').off('dblclick',imageHandle);
					});
			    }
			})
		},
		addCssRegion:function(){
			$('body').css('overflow','visible');
			var articledata=$('.doc-layout-center .left-column').html();
			$('.doc-layout-center .left-column').empty();
	        $('.page-container').pageEdit({
	            templates:{
	               page:articledata
	            },
	            editSelecter:'.doc-layout-center .left-column',
	            regionSelecter:'.doc-body',
	            regionContainer:'.doc-container'
	        });	
		},
		initForInteraction:function(){
			tinymce.init({
				selector: ".iText > span",
			    language:'zh_CN',
			    plugins: [
			        ["textcolor advlist autolink link autolink image lists charmap print preview hr anchor pagebreak spellchecker"],
			        ["searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking"],
			        ["save table contextmenu directionality emoticons template paste custom_autosave blockquoteListBox"]
			    ],
			    extended_valid_elements : "img[id|data-math|class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]",
			    add_unload_trigger: false,
				valid_children : "+div[p],+div[div],+figure[audio],+figure[video]",
			    schema: "html5",
			    inline: true,
			    menubar:false,
			    fixed_toolbar_container:'.doc-layout-center',
				//paste_create_paragraphs : false,
				//paste_create_linebreaks : false,
				//paste_use_dialog : true,
				paste_auto_cleanup_on_paste : true,
				//paste_convert_middot_lists : false,
				//paste_unindented_list_class : "unindentedList",
				//paste_convert_headers_to_strong : true,
				//paste_insert_word_content_callback : "convertWord",
			    //auto_focus:true,
			    toolbar: "undo redo | styleselect | fontselect | fontsizeselect forecolor backcolor | blockquoteListBox | bullist numlist outdent indent | link | hr | table | ",
			    statusbar: false,
			    setup: function(editor) {
					editor.on('change setcontent paste keyup',function(e){
						interaction.current.trigger('change:text');
					});
			    }					
			})						
		},
		initForRichtext:function(focus){
			tinymce.init({
				selector: "section > article",
			    language:'zh_CN',
			    plugins: [
			        ["textcolor advlist autolink link autolink image lists charmap print preview hr anchor pagebreak spellchecker"],
			        ["searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking"],
			        ["save table contextmenu directionality emoticons template paste custom_autosave blockquoteListBox"]
			    ],
			    extended_valid_elements : "img[id|data-math|class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]",
			    add_unload_trigger: false,
				valid_children : "+div[p],+div[div],+figure[audio],+figure[video]",
			    schema: "html5",
			    inline: true,
			    menubar:false,
				//paste_create_paragraphs : false,
				//paste_create_linebreaks : false,
				//paste_use_dialog : true,
				paste_auto_cleanup_on_paste : true,
				//paste_convert_middot_lists : false,
				//paste_unindented_list_class : "unindentedList",
				//paste_convert_headers_to_strong : true,
				//paste_insert_word_content_callback : "convertWord",
			   // auto_focus:focus||false,
			    toolbar: "undo redo | styleselect | fontsizeselect forecolor backcolor | blockquoteListBox bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | hr | table | link | spaltenListBox | statusListBox | formatPainter |  fmath_formula",
			    statusbar: false						
			})				
		}
	}
})

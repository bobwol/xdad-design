tinyMCE.init({
		// General options
		mode : "exact",
		elements : "mceEditor, chapter3311",
		theme : "advanced",
		language : "ch",
		plugins : "advlist,autoresize,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",
		setupcontent_callback : "myCustomSetupContent",

		//	Theme options
		//	theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
		//	theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
		//	theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
		//	theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak",
		theme_advanced_buttons1 :  "undo,redo,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,outdent,indent,blockquote,|,formatselect,|,forecolor,backcolor,|,tablecontrols,|,charmap,media",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "none",
		theme_advanced_resizing : true,
		
		// Example content CSS (should be your site CSS)
		content_css : "../css/bootstrap.min.css, ../css/bootstrap.min.patch.css, ../css/style.css, ../css/theme.red.css, ../css/typo.css, ../css/typo.patch.css",
		
		// Drop lists for link/image/media/template dialogs
		template_external_list_url : "js/template_list.js",
		external_link_list_url : "js/link_list.js",
		external_image_list_url : "js/image_list.js",
		media_external_list_url : "js/media_list.js",
		
		// Replace values for the template plugin
		template_replace_values : {
			username : "Some User",
			staffid : "991234"
		}
});

function myCustomSetupContent(mceEditor, body) {
		$('.edit-richtext .mceIframeContainer iframe, .edit-tab .mceIframeContainer iframe').contents().find(body).addClass('typo tiny-editor').css({ "padding":20 });
		// fluid-doc
		$('.edit-fluid-doc .mceIframeContainer iframe').contents().find(body).addClass('typo tiny-editor fluid-doc').css({ "padding":0 });
		$('.edit-fluid-doc .mceEditor.defaultSkin').addClass('active article');
		// table.mceLayout autosave
		$('table.mceLayout').width('100%');
		$('table.mceLayout').height('100%');
		// tinyMCE min-height
		$('.edit-richtext .mceIframeContainer iframe, .edit-tab .mceIframeContainer iframe').css({ "min-height": $('.typo-bd').height() - 2 });
		$(window).resize(function() {
			$('.edit-richtext .mceIframeContainer iframe, .edit-tab .mceIframeContainer iframe').css({ "min-height": $('.typo-bd').height() - 2 });
		});
}

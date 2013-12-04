var path={
		'jquery':portal_url+'common_js/jquery/jquery-1.8.1.min',
		'text':portal_url+'common_js/requireJS/text',
		'template':portal_url+'common_js/interaction/template',
		'paperJS':portal_url+'common_js/paperJS/paper.min',
		'interaction_view':portal_url+'common_js/interaction/view/main',
		'backbone':portal_url+'common_js/backbone/backbone-min-0.9.10',
		'underscore':portal_url+'common_js/backbone/underscore-min-1.4.4',
		'interaction':portal_url+'common_js/interaction/interaction',
		'interaction_model':portal_url+'common_js/interaction/model',
		'preview_model':portal_url+'common_js/interaction/view/model',
		'jquery.nanoscroller':portal_url+'common_js/jquery_nanoscroller/jquery.nanoscroller.min',
		'greensock':portal_url+'common_js/greensock',
		'animation':portal_url+'common_js/interaction/animation_transform',
		'TimelineMax':portal_url+'common_js/greensock/TimelineMax.min',
		'TweenMax':portal_url+'common_js/greensock/TweenMax',
		'buzz':portal_url+'common_js/buzz/buzz',
		'videojs':portal_url+'common_js/videojs/video.min',
		'jqueryui':portal_url+'common_js/jquery/ui/minified/jquery-ui.min',
		'bootstrap':portal_url+'common_js/bootstrap/bootstrap.min',
		'interaction_main':portal_url+'common_js/interaction/interaction_main',
		'globalJS':portal_url+'app/js/global/globalJS',
		'filter':portal_url+'app/js/web/filter/filter',
		'material':portal_url+'app/js/web/material/material',
		'category':portal_url+'app/js/web/category/category',
		'upload':portal_url+'app/js/web/upload/upload',
		'tEditor':portal_url+'app/js/web/tEditor/tEditor',
		'jqwait':portal_url+'common_js/jqwait/jqwait',
		'quickupload':portal_url+'common_js/quickupload',
		'jswait':portal_url+'common_js/jswait/jswait',
		'revealJS':portal_url+'common_js/revealjs/js/reveal',
		'classList':portal_url+'common_js/revealjs/lib/js/classList',
		'templatePage':portal_url+'common_js/interaction/templatepage',
		'presentation':portal_url+'common_js/interaction/presentation',
		'preview_data':portal_url+'app/js/web/interaction/data/preview',
		'jquery.fullscreen':portal_url+'common_js/fullscreen/jquery.fullscreen',
		'html2canvas':portal_url+'common_js/html2canvas/html2canvas'
};

var shim={
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'bootstrap':{
        	deps: ['jquery']
        },
        'revealJS':{
        	deps: ['jquery','classList']
        },
        'jswait':{
        	deps:['jquery']
        },
        'jqueryui':{
        	deps: ['jquery']
        },
        'jquery.nanoscroller':{
        	deps: ['jquery']
        },
        'jquery.fullscreen':{
        	deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'Tweenlite':{
        	deps:['greensock/plugins/CSSPlugin.min','greensock/plugins/BezierPlugin.min']
        },
        'interaction_view':{
        	deps:['jswait','jquery','backbone','jswait','text!template/message.js','text!template/element_view.js','text!template/animateitem_view.js','jquery.nanoscroller','TweenMax','animation','buzz','videojs']
        },
        'preview_model/animation_view':{
        	deps:['interaction_view']
        },
        'globalJS':{
        	deps: ['jquery','backbone','bootstrap']
        },
        'filter':{
        	deps: ['globalJS']
        },
        'quickupload/fileuploader':{
        	deps:['jquery']
        },
        'quickupload/helpers':{
        	deps:['jquery']
        },
        'quickupload/jquery.uploadify':{
        	deps:['jquery']
        },
        'quickupload/swfobject':{
        	deps:['jquery']
        },
        'upload':{
        	deps:['globalJS','quickupload/fileuploader','quickupload/helpers','quickupload/jquery.uploadify','quickupload/swfobject']
        },
        'material':{
        	deps:['globalJS']
        },
        'category':{
        	deps:['globalJS']
        },
        'tEditor':{
        	deps:['globalJS']
        },
        'templatePage':{
        	deps:['interaction_view','text!template/page.js']
        },
        'preview_model/image':{
        	deps:['interaction_view']
        },
        'preview_model/richtext':{
        	deps:['interaction_view']
        },
        'preview_model/preload':{
        	deps:['interaction_view','text!template/preload.js']
        },
        'preview_model/slide':{
        	deps:['interaction_view']
        },
        'preview_model/audio':{
        	deps:['interaction_view']
        },
        'preview_model/video':{
        	deps:['interaction_view']
        },
        'preview_model/cycleimage':{
        	deps:['interaction_view']
        },
        'preview_model/action':{
        	deps:['interaction_view']
        },
        'preview_model/page':{
        	deps:['interaction_view']
        },
        'preview_model/chapter':{
        	deps:['interaction_view']
        },
        'interaction_main':{
        	deps:['paperJS','bootstrap','jqueryui','jquery.nanoscroller',"text!template/book.js","text!template/page_info.js","text!template/animationitemdetail.js",'text!template/actionitemdetail.js','tEditor','upload','material','category','filter','jqwait']
        },
        'interaction':{
        	deps:['interaction_main']
        }
};

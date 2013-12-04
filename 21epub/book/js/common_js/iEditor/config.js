var path={
		'jquery':portal_url+'common_js/jquery/jquery-1.8.1.min',
		'text':portal_url+'common_js/requireJS/text',
		'template':portal_url+'common_js/interaction/template',
		'paperJS':portal_url+'common_js/paperJS/paper.min',
		'backbone':portal_url+'common_js/backbone/backbone-min-0.9.10',
		'underscore':portal_url+'common_js/backbone/underscore-min-1.4.4',
		'jquery.nanoscroller':portal_url+'common_js/jquery_nanoscroller/jquery.nanoscroller.min',
		'TweenMax':portal_url+'common_js/greensock/TweenMax',
		'buzz':portal_url+'common_js/buzz/buzz',
		'videojs':portal_url+'common_js/videojs/video.min',
		'jqueryui':portal_url+'common_js/jquery/ui/minified/jquery-ui.min',
		'bootstrap':portal_url+'common_js/bootstrap/bootstrap.min',
		'filter':portal_url+'app/js/web/filter/filter',
		'upload':portal_url+'app/js/web/upload/upload',
		'quickupload':portal_url+'common_js/quickupload',
		'jswait':portal_url+'common_js/jswait/jswait',
		'jquery_tinymce':portal_url+'common_js/tinymce_debug/js/tinymce/tinymce.jquery',
		'tinymce':portal_url+'common_js/tinymce_debug/js/tinymce/tinymce',
		'iEditor':portal_url+'common_js/iEditor',
		'global':portal_url+'app/js/global',
		'article':portal_url+'app/js/web/article',
		'task':portal_url+'app/js/web/task/main',
		'app':portal_url+'app/js/web',
		'lists':portal_url+'common_js/advancelist',
		'template':'./template'
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
        'jswait':{
        	deps:['jquery']
        },
        'jqueryui':{
        	deps: ['jquery']
        },
        'jquery.nanoscroller':{
        	deps: ['jquery']
        },
        'underscore': {
            exports: '_'
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
        'tinymce':{
        	deps:['jquery_tinymce']
        },
        'jquery_tinymce':{
        	deps:['jquery']
        },
        'iEditor/main':{
        	deps:['global/main','iEditor/pageEdit']
        },
        'iEditor/pageEdit':{
        	deps:['jquery']
        },
        'article/main':{
        	deps:['iEditor/main']
        },
        'global/main':{
        	deps:['global/data','global/template','global/model','global/event','jquery','backbone','bootstrap']
        },
        'global/data':{
        	deps:['jquery','backbone','bootstrap']
        },
        'global/event':{
        	deps:['jquery','backbone','bootstrap']
        },
        'global/model':{
        	deps:['jquery','backbone','bootstrap']
        },
        'global/template':{
        	deps:['jquery','backbone','bootstrap']
        },
        'task':{
        	deps:['global/main']
        },
        'lists/main':{
        	deps:['backbone','bootstrap','global/main','jquery.nanoscroller','jswait']
        },
};
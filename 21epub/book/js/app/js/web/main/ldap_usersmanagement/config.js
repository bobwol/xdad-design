var path={
		'common_js':portal_url+'common_js',
		'app':portal_url+'app',
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
		'globalJS':portal_url+'app/js/global/globalJS',
		'filter':portal_url+'app/js/web/filter/filter',
		'upload':portal_url+'app/js/web/upload/upload',
		'quickupload':portal_url+'common_js/quickupload',
		'jswait':portal_url+'common_js/jswait/jswait',
		'jquery_tinymce':portal_url+'common_js/tinymce_debug/js/tinymce/tinymce.jquery',
		'tinymce':portal_url+'common_js/tinymce_debug/js/tinymce/tinymce',
		'iEditor':portal_url+'common_js/iEditor/main',
		'global':portal_url+'app/js/global/iGlobal',
		'global_main':portal_url+'app/js/global/main',
		'global_data':portal_url+'app/js/global/data',
		'global_event':portal_url+'app/js/global/event',
		'global_model':portal_url+'app/js/global/model',
		'global_template':portal_url+'app/js/global/template',
		'article':portal_url+'app/js/web/article/main',
		'task':portal_url+'app/js/web/task/main',
		'lists':portal_url+'common_js/advancelist',
		'template':'./template',
		'data':'./data',
		'categories_template':portal_url+'categories_template',
		'update_template':portal_url+'update_template',
};

var shim={
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore','jquery'],
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
        'global':{
        	deps: ['global_main','global_data','global_template','global_model','global_event']
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
        'tinymce':{
        	deps:['jquery_tinymce']
        },
        'jquery_tinymce':{
        	deps:['jquery']
        },
        iEditor:{
        	deps:['global']
        },
        'article':{
        	deps:['iEditor']
        },

        'global_main':{
        	deps:['jquery','backbone','bootstrap']
        },
        'global_data':{
        	deps:['global_main']
        },
        'global_model':{
        	deps:['global_main']
        },
        'global_template':{
        	deps:['global_main']
        },
        'global_event':{
        	deps:['global_main']
        },
        'task':{
        	deps:['global']
        },
        'lists/main':{
        	deps:['backbone','bootstrap','global','jquery.nanoscroller']
        },
        'categories_template':{
        	deps:['global']
        },
        'update_template':{
        	deps:['global']
        }
};
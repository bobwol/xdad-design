//base path and shim config for requireJS using , you may use $.extend to extend your path and shim 
var iPath=portal_url;
var path={
		'jquery':iPath+'common_js/jquery/jquery-1.8.1.min',
		'jqueryui':iPath+'common_js/jquery/ui-custom/jquery-ui-1.9.2.custom.min',
		'text':iPath+'common_js/requireJS/text',
		'paperJS':iPath+'common_js/paperJS/paper.min',
		'backbone':iPath+'common_js/backbone/backbone-min-0.9.10',
		'underscore':iPath+'common_js/backbone/underscore-min-1.4.4',
		'jquery.nanoscroller':iPath+'common_js/jquery_nanoscroller/jquery.nanoscroller.min',
		'greensock':iPath+'common_js/greensock',
		'buzz':iPath+'common_js/buzz/buzz',
		'videojs':iPath+'common_js/videojs/video.min',
		'bootstrap':iPath+'common_js/bootstrap/bootstrap.min',
        'datepicker':iPath+'common_js/datepicker/js/bootstrap-datepicker',
		'global':iPath+'app/js/global',
		'upload':iPath+'app/js/web/upload/upload',
		'quickupload':iPath+'common_js/quickupload',
		'jqwait':iPath+'common_js/jqwait/jqwait',
		'jswait':iPath+'common_js/jswait/jswait',
		'revealJS':iPath+'common_js/revealjs/js/reveal',
		'classList':iPath+'common_js/revealjs/lib/js/classList',
		'lists':iPath+'common_js/advancelist',
		'iEditor':iPath+'common_js/iEditor',
		'article':iPath+'app/js/web/article',
        'topic':iPath+'app/js/web/topic',
		'task':iPath+'app/js/web/task',
		'app':iPath+'app/js/web',
		'material':iPath+'app/js/web/material1',
		'workflow':iPath+'app/js/web/workflow',
        'process':iPath+'app/js/web/process',
        'jquery.sortable':iPath+'common_js/jquery/jquery-ui-sortable.min',
        'jquery.fullscreen':iPath+'common_js/fullscreen/jquery.fullscreen',
        'html2canvas':iPath+'common_js/html2canvas/html2canvas',
        'interaction':iPath+'common_js/interaction2',
        'interaction_view':iPath+'common_js/interaction_view',
	   // 'eve' : iPath+'common_js/raphael/eve',
	   // 'raphael-core' : iPath+'common_js/raphael/raphael.core',
	   // 'raphael-svg' : iPath+'common_js/raphael/raphael.svg',
	   // 'raphael-vml' : iPath+'common_js/raphael/raphael.vml',
	    'Raphael' : iPath+'common_js/raphael/raphael-min'
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
        'eve': {
	        deps: ['jquery'],
	        exports: 'eve'
	    },
        'Raphael':{
        	deps: ['jquery','backbone','underscore']
        	//exports:'Raphael'
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
        'jquery.sortable':{
        	deps:['jquery']
        },
        'jquery.nanoscroller':{
        	deps: ['jquery']
        },
        'jquery.fullscreen':{
        	deps: ['jquery']
        },
        'datepicker':{
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'Tweenlite':{
        	deps:['greensock/plugins/CSSPlugin.min','greensock/plugins/BezierPlugin.min']
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
        'global/main':{
        	deps:['jquery','backbone','bootstrap','jquery.nanoscroller','jswait','jqwait','global/data','global/template','global/model','global/event']
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
        'iEditor/pageEdit':{
        	deps:['jquery']
        },
        'article/main':{
        	deps:['iEditor/main']
        },
        'task/main':{
        	deps:['global/main']
        }  
};
var servertemplatefiles=["categories_template.js","material_categories_template.js","channels_template.js","page_support_template.js","settings_template.js","category_support_template.js","update_template.js","top_setting_template.js"];

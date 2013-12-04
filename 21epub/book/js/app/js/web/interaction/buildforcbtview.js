( {
	baseUrl : "../../../../",
	paths : {
		'jquery' : 'common_js/jquery/jquery-1.8.1.min',
		'jqueryui' : 'common_js/jquery/ui/minified/jquery-ui.min',
		'text' : 'common_js/requireJS/text',
		'paperJS' : 'common_js/paperJS/paper.min',
		'backbone' : 'common_js/backbone/backbone-min-0.9.10',
		'underscore' : 'common_js/backbone/underscore-min-1.4.4',
		'jquery.nanoscroller' : 'common_js/jquery_nanoscroller/jquery.nanoscroller.min',
		'greensock' : 'common_js/greensock',
		'buzz' : 'common_js/buzz/buzz',
		'videojs' : 'common_js/videojs/video.min',
		'bootstrap' : 'common_js/bootstrap/bootstrap.min',
		'datepicker' : 'common_js/datepicker/js/bootstrap-datepicker',
		'global' : 'app/js/global',
		'upload' : 'app/js/web/upload/upload',
		'quickupload' : 'common_js/quickupload',
		'jqwait' : 'common_js/jqwait/jqwait',
		'jswait' : 'common_js/jswait/jswait',
		'revealJS' : 'common_js/revealjs/js/reveal',
		'classList' : 'common_js/revealjs/lib/js/classList',
		'lists' : 'common_js/advancelist',
		'iEditor' : 'common_js/iEditor',
		'article' : 'app/js/web/article',
		'task' : 'app/js/web/task',
		'app' : 'app/js/web',
		'material' : 'app/js/web/material1',
		'workflow' : 'app/js/web/workflow',
		'process' : 'app/js/web/process',
		'jquery.sortable' : 'common_js/jquery/jquery-ui-sortable.min',
		'jquery.fullscreen' : 'common_js/fullscreen/jquery.fullscreen',
		'html2canvas' : 'common_js/html2canvas/html2canvas',
		'interaction' : 'common_js/interaction2',
		'interaction_view' : 'common_js/interaction_view'
	},
	shim : {
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
	},
	name : "app/interaction/cbtview0902",
	out : "cbtview-build2013003.js"
})
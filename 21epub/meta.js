
;(function(){
	var lastTime = new Date();
	
	Function.prototype.bind = function(obj) {
		var _this = this;
		return function() {
			return _this.apply(obj,Array.prototype.slice.call(arguments));
		}
	};

	if (!window.console || !console.firebug)
	{
	    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
	    "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

	    window.console = {};
	    for (var i = 0; i < names.length; ++i)
	        window.console[names[i]] = function() {}
	}

	window.epub = new function(){
		//框架版本
		this.version = '0.0.1';
		this.about = function(){
			return "epub \n version:"+this.version+"\n\nCopyright(c) 2009,All rights reserved."
		}
		//js运行环境
		this.runtimeEnvironment = new function(){
			//根目录
			this.codebase = '';
			//是否调试js
			this.debug = true;
			//日志
			this.logs = []
			//获取配制项
			this.config = {
				getConfig:function(){}
			}
			//日志记录
			this.log = function(){
				this.logs[this.logs.length] = log;
			}
			// default is not pro env
			this.pro = false;
			//是否是开发环境
			this.isDev = true;
			//平台判断
			this.platform = "pc";
			//根元素
			this.element = null;
			//逻辑代码文件名称
			this.dataMain = '';
			this.packages = {};
			this.getPackage = function (name){
				return this.packages[name];
			}
			this.tempdeps = [];


		}
	}
	

	var env = epub.runtimeEnvironment;
	
	//Initialize internal variables
	// var _RE_DEPS = /\s*\epub\[["']import["']\]\s*\(\s*["']([^'"\s]+)["']\s*(,*)\s*.*\s*\)/g;
	var _RE_DEPS = /\s*\epub\[["']import["']\]\s*\(\s*["']([^'"\s]+)["']\s*(,*)\s*\)/g;
	function noop () {};
	function isType (obj, type) { return toString.call(obj).indexOf('[object ' + type) == 0; }
	Array.prototype.map = function(f,_this) {
		var arr = [];j=0;
		for(var i=0,n=this.length;i<n;i++){
			arr[j++]=f.call(_this,this[i],i,this);
		}
		return arr;
	};
	Array.prototype.copy = function() {
		var arr = [];j=0;
		for(var i=0,n=this.length;i<n;i++){
			arr[i]=this[i]
		}
		return arr;
	};
	
	var getScriptAbsoluteSrc = function(node) {
        return node.hasAttribute ? node.src :node.getAttribute('src', 4) 
    }
    //加载系统类
	
	var cache = {
		//提供内置模块
	}
	
    var Things = document.getElementsByTagName('script')
    for (var i = Things.length - 1; i >= 0; i--) {
        var loaderSrc = getScriptAbsoluteSrc(Things[i]);
        var match = loaderSrc.match(/meta.js/)
        if (match) {
        	env.element = Things[i];
            env.cordebase = cordebase = loaderSrc.replace(/(.*)meta.js(.*)/g,function(){return arguments[1];})
            break;
        }
    };
    
    //从配制项目获取属性
    //从element元素获取属性
  
    var userAgent= navigator.userAgent,ROOTPATH;
    var os={};
    os.android = userAgent.match(/(Android)\s+([\d.]+)/) || userAgent.match(/Silk-Accelerated/) ? true : false;
    os.ipad = userAgent.match(/(iPad).*OS\s([\d_]+)/) ? true : false;
    os.iphone = !os.ipad && userAgent.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false;
    var href = window.location.href;

    var isMobile = (os.android||os.ipad||os.iphone);
    if(/debug-mobile/.test(href)){
        isMobile = true;
    }
    if(isMobile){
    	env.platform = 'mobile';
    }

	
	if(/debug-dev/.test(href)){
        env.pro = false;
    }
    if(/debug-pac/.test(href)){
        env.pro = false;
        env.pac = true;
    }
	function config(){
		if(arguments.length==1){

			return env[arguments[0]];
		}else if(arguments.length==2){

			env[arguments[0]] = arguments[1];
		}

	};

	
	function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }
    function scripts() {
        return document.getElementsByTagName('script');
    }
    eachReverse(scripts(), function (script) {
        var dataMain = script.getAttribute('data-main');
        config("dataMain",dataMain)
		return true;
    });
	function seek(block){
	    var hdeps = [];
	    var code = block.toString(),h = null;
	    
        while (h = _RE_DEPS.exec(code)) {
        	if(!h[2]){

        		hdeps.push(h[1]);
        	}
        }
	    return hdeps.slice();
	}
	function validate(deps){
		
		for(var i=0;i<deps.length;i++){
			var url = deps[i];
			if(env.packages[url])continue;
			return {
				url:url,
				deps:deps.slice(i)
			}
		}
		
	}
	var cURL = '';
	function copy(obj) {
	    function NewObj(){}
	    NewObj.prototype = obj;
	    return new NewObj();
	}
	function scan(deps){
		var ret = [];
		for(var i=0;i<deps.length;i++){
			var arr = env.packages[deps[i]].deps;
			if(arr.length>0){
				ret.push(arr.join('@'));	
			}
				
		} 
		if(ret.length>0){
			ret = ret.join('@');
			ret = ret.split('@');
		}
		return ret;
	}
	function fetch(deps, callback,list){

		if(!deps.length){
			epub.exec(list)
			callback(list);
			return;
		}
		var copyDeps = deps.copy();
		var url = deps.shift();
		var remote = 0;
		function loopLoad(url){
		
			cURL = url;
			var mod = env.packages[cURL];
			if(mod){
				list.push({
					url:url,
					block:mod.block
				})
				if(!deps.length){
					fetch(scan(copyDeps), callback,list)
				}else{
					
					url = deps.shift();
					loopLoad(url);
				}
			}else{
				env.packages[cURL] = {
					name:deps,
					block:'',
					isLoaded:false,
					deps:[]
				}
				getScript(url,function(){

					env.packages[url]['isLoaded'] = true;
					epub.print(url+" loaded")
					list.push({
						url:url,
						block:env.packages[url].block
					})
					if(!deps.length){
						fetch(scan(copyDeps), callback,list)
						
					}else{
						
						
						
						url = deps.shift();
						loopLoad(url);
					}

					
				})	
			}
			
		}
		loopLoad(url);
		
	}

	function getScript(url, callback){
		var doc = window.document,
	        s = doc.createElement("script");
	    s.type = "text/javascript";
	    s.async = "async"; //for firefox3.6
	    s.src = url+".js";
	    var h = doc.getElementsByTagName("head")[0];
	    s.onload = s.onreadystatechange = function(__, isAbort){
	        if (!s.readyState || /loaded|complete/.test(s.readyState) ) {
	            s.onload = s.onreadystatechange = null;
	     
	            if (h && s.parentNode) {
	                h.removeChild(s);
	            }
	            s = undefined;
	            if (callback) {
	                callback();
	            }
	        }
	    };
	    h.insertBefore(s, h.firstChild);
	}

	epub["getScript"] = getScript;
	epub["print"] = function(message){
		now = (new Date).getTime();
		delta = now -lastTime;
		if(config('debug')){
			if(message){
				_log(delta+":"+message);
			}else {
				_log(delta+":"+'Called'+arguments.callee.caller.name);
			}
		}

	}
	function _log(message){
		if(window.console != undefined){
			console.log(message);
		}

	}
	epub.app = function(fun){
		epub.print('app start');
		if(env.pro){
			fun.call(null);
			epub.print('app end');
			return;
		}
		if(env.platform == 'pc'){
		

		}else if(env.platform=='mobile'){
			
		}else{
			epub.print('不是pc和mobile平台');
			return;
		}
		var str = fun;
		
		var deps = seek(fun);
		deps.unshift('epub.core');

		var realDeps = deps.map(function(item){
			return getPath(item);
		})

		//env.tempdeps = realDeps;
		
		fetch(realDeps,function(args){
			epub.print('app end');
			
		    if(env.pac){
		    	$.ajax({
					type: 'POST',
					url: "http://localhost:3000/package/",
					data: {
						retdata:JSON.stringify({list:args,dataMain:getPath(config("dataMain")),cordebase:env.cordebase})
					},
				   	success:function (data){
						console.log('sucess')
					},
					error: function (e) {
						console.log('error',e)
					},
				    dataType: 'json'
				});
		    }
			fun.call(null,args)
		},[])
	};
	epub['exec'] = function(list){

		for (var i = list.length - 1; i >= 0; i--) {
			var temp = list[i];
			
			if(temp.block)temp.block();
		};


	},
	epub.test = function(){

	}
	epub.def = function(fun){
		var deps = seek(fun);
		var realDeps = deps.map(function(item){
			return getPath(item);
		})

		env.packages[cURL] = {
			block:fun,
			deps:realDeps
		}
		
		// fetch(realDeps,function(args){
		// 	fun.call(null,args)
		// })
	};
	epub['import'] = function(){

		var args = arguments;
		if(args.length>1){
			fetch([getPath(args[0])], args[1],[])
		}else {
			// console.log(args[0])
			// if(env.packages[getPath(args[0])]){
			// 	if(env.packages[getPath(args[0])].block){
			// 		env.packages[getPath(args[0])].block();
			// 	}
			// }
		}

	};
	
	epub['class']=function(){

	}
	epub['extends'] = function(){

	}
	function getPath(str){
		
		var ret = '';
		var temp = str.split('@');
		var modules = temp[0];
		var version = temp[1]||'';
		
		var pathArr = modules.split('.');
		var noInsert = (pathArr[1]=='app');
		pathArr.shift();
		if(!noInsert){
			pathArr.unshift(env.platform);
		}
		if(version)version="-"+version;
		return env.cordebase+pathArr.join('/')+version;
	}
	epub["dir"] = function(){
		var args = arguments;
		if(args.length<1){
			for(var n in this){
				epub.print(n)
			}
		}
	};
	
	function init(){
		epub.print('init start')
		if(config("dataMain")){
			var mainjs = config("dataMain");
			if(env.pro){
				mainjs += "-"+env.platform;
			}
			
			epub["import"](mainjs,function(){
				//epub.print(config("dataMain")+" complet!")
				epub.print('init end')

			})
		}
	}
	//Get the party started
	init();
	
})();

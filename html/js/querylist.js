$(function(){(function($,window,undefined){
if(window.location.href.indexOf('-debug')==-1){
	this.console = {
		log:function(){

		}
	};
}

/*
*去除html标签
*/
/*-------------start-------*/
function delHtmlTag(str){
		
		return "dsafasdfas";	
        return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
} 
/*-----end---------------*/
/*
*模板模块
*/
/*-------------start-------*/
;(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},h=0,c=0,l=[];function g(e,d,g,i){var c={data:i||(d?d.data:{}),_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};e&&a.extend(c,e,{nodes:[],parent:d});if(g){c.tmpl=g;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++h;(l.length?f:b)[h]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a.fn[d].apply(a(i[h]),k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,l,j){if(d[0]&&d[0].nodeType){var f=a.makeArray(arguments),g=d.length,i=0,h;while(i<g&&!(h=a.data(d[i++],"tmplItem")));if(g>1)f[0]=[a.makeArray(d)];if(h&&c)f[2]=function(b){a.tmpl.afterManip(this,b,j)};r.apply(this,f)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var j,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(i(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);j=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(i(c,null,j)):j},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function i(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:i(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=j(c).concat(b);if(d)b=b.concat(j(d))});return b?b:j(c)}function j(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,j,d,b,c,e){var i=a.tmpl.tag[j],h,f,g;if(!i)throw"Template command not found: "+j;h=i._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=k(b);e=e?","+k(e)+")":c?")":"";f=c?b.indexOf(".")>-1?b+c:"("+b+").call($item"+e:b;g=c?f:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else g=f=h.$1||"null";d=k(d);return"');"+i[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(g).split("$1").join(f).split("$2").join(d?d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(d,c,b,a){a=a?","+a+")":b?")":"";return a?"("+c+").call($item"+a:d}):h.$2||"")+"_.push('"})+"');}return _;")}function n(c,b){c._wrap=i(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function k(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,i;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(i=j.length-1;i>=0;i--)m(j[i]);m(k)}function m(j){var p,i=j,k,e,m;if(m=j.getAttribute(d)){while(i.parentNode&&(i=i.parentNode).nodeType===1&&!(p=i.getAttribute(d)));if(p!==m){i=i.parentNode?i.nodeType===11?0:i.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[i]||f[i],null,true);e.key=++h;b[h]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;i=a.data(j.parentNode,"tmplItem");i=i?i.key:0}if(e){k=e;while(k&&k.key!=i){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent,null,true)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);
/*-----end---------------*/
/*
*模板
*/
/*-----start---------*/
var templates = {}
/*-----end---------*/
/*
*模块管理
*/
/*-----start---------*/
var modulseManger = {};
/*-----end---------*/
/*
*功能模块
*/
/*-----start---------*/
/*
*通用模块定义
*/
function define(id,opt){
	function temp (opt){
		$.extend(this,opt);
	}
	temp.prototype={
		render:function(template,data){
			this.selecter.html("");

			$.tmpl(template,{data:data}).appendTo(this.selecter);
			return this;
		},
		bindevent:function(Things){

			var self = this;
			if(!Things||!Things.length)return self;
			self.selecter.click(function (e){
				
				return clickManager(e,Things,self);
			})
			return this;		
		},
		get_data:function(){ 

		},
		item_click:function(){

		},
		update:function(){


		},
		business:function(data,callback){
			var data = data||{};
			var callback = callback||function(){};
			this.render(this.template,data)
			callback.call(this,data)
		}
	}
	$.extend(true,temp.prototype,opt||{});	
	modulseManger[id]=temp;
}

/*
*处理通用的点击事件
*/
function clickManager(e,Things,self){


	var self = self;
	var e = e||window.event;
	var target = e.target||e.srcElement;
	var tagName = target.tagName;
	var currT = null;
	while(self.selecter[0]!=target){
		for (var i = Things.length - 1; i >= 0; i--) {
			var Thing = Things[i];

			var tag = Thing.tag;
			var filter = Thing.filter;
			var success = Thing.success;
			var failed = Thing.failed;
			//console.log(tagName,tag)
			if(tagName==tag && filter(target)){
				currT = Thing;
				break;
			}
		};
		if(currT){
			currT.success(target,e);
			break;
		}else {
			target = target.parentNode;
			tagName = target.tagName;
		}
		
	}
	return self;
	
}
define("List_page",{
	render:function (template,data){
		var row = data.numpages;
		if(!row)return;
		var self = this;
		this.totalpage = row-this.num+1;
		if(this.totalpage<=0)this.totalpage=1;
		
		var html = [];
		html.push('<ul>');
		html.push('<li class="disabled button" data-rel= "prev" id="prev"><a href="javascript:void(0);" >← prev</a></li>');
		var min = this.index+1;
		var max = this.index+this.num;
		
	
		for(var i=0;i<row;i++){
			
			var no = (i+1);
			if(no<=max&&no>=min){
				if(no==1)html.push('<li class="active goto" style="display:;" data-rel="goto" data-no='+no+'><a href="javascript:void(0);">'+no+'</a></li>');
				else html.push('<li class="goto" style="display:;" data-rel="goto" data-no='+no+'><a href="javascript:void(0);">'+no+'</a></li>');
			}else {
				html.push('<li class="goto" style="display:none;" data-rel="goto" data-no='+no+'><a href="javascript:void(0);">'+no+'</a></li>');
			}
		}
		html.push('<li class="disabled button" data-rel= "next" id="next"><a href="javascript:void(0);" >next →</a></li>');
		html.push('</ul>');
		self.selecter.html(html.join(""));
		
		self.$prev = self.selecter.find("#prev"); 
		self.$next = self.selecter.find("#next"); 
		self.$lis = self.selecter.find(".goto"); 
		self.setButton();
		
	},
	next:function(target){
		if($(target).hasClass('disabled'))return;
		var temp = this.index+1;
		if(temp>this.totalpage-1){
		
		}else{
			this.index++;
			this.setPage()
		}
		
	},
	prev:function(target){
		if($(target).hasClass('disabled'))return;
		var temp = this.index-1;
		if(temp<0){
		
		}else{
			this.index--;
			this.setPage()
		}
	},
	setPage:function (){
		var min = this.index+1;
		var max = this.index+this.num;
		this.$lis.each(function(index,li){
			
			
			if(index<=max-1&&index>=min-1){
				$(li).show();
			}else {
				$(li).hide();
			}
		})
		this.setButton();
	},
	setButton:function (){
		
		this.$prev.removeClass('disabled');
		this.$next.removeClass('disabled');
		if (this.$lis.first()[0].style.display!="none") {
			this.$prev.addClass('disabled');
			
		}
		if (this.$lis.last()[0].style.display!="none") {
			this.$next.addClass('disabled');
		}
	}
});
define("List_menu");

define("List_project",{
	get_current:function(){
		var self = this;
		return self.selecter.find(".active");
	}
});
define("List_content",{
	get_current:function(){
		var self = this	;
		return self.selecter.find(".active");
	}
});
define("List_detail",{
	render_content:function(template,data){
		$(".related-mod").remove();
		$('.main-project').find(".mod-bd").hide();
		$.tmpl(template,data).appendTo(this.selecter);
		return this;
	},
	business_content:function(data,callback){
		var data = data||{};
		var callback = callback||function(){};
		this.render_content(this.template.content,data)
		callback.call(this,data)
	}
});
define("List_data",{
	get:function (name){
		return this.data[name]||null;
	},
	set:function(name,value){
		this.data[name]=value;
		return this;
	},
	get_all_data:function(){
		return this.data;
	}
});
/*-----end---------*/
/*
*应用模块基类
*des project manager list app
*/
/*-----start---------*/
function APP(opt,sub){
	
	this.init(opt,sub);
}
APP.prototype = {
	init:function(opt,sub){

		/*
		*存储所有依赖的模块
		*/
		this.dependents = {};
		this.setOptions(opt,sub)
	},
	setOptions:function(opt,sub){
		if(sub&&sub.defaults){
			this.opts = $.extend(true,sub.defaults,opt||{});
			sub.translate = this.opts.translate||function(){ };
		}else{
			this.opts = $.extend(true,APP.defaults,opt||{});
		}
		
		this.setDependents();
	},
	setDependents:function(){
		var dependents = this.opts.dependents;
		
		for(var n in dependents){
			var module = n;
			var opts = dependents[n];
			if(modulseManger[module]){
				this.dependents[module] =	new modulseManger[module](opts.options);  
				this[module] =	this.dependents[module]; 
				for(var n in opts){
					if(n!='options')
					this[module][n] = opts[n];
				}
			}else{

			}
		}
		this.getOpts();
		this.business();
	},
	getDependents:function(){
		console.log(this.dependents);
	},
	getOpts:function(){
		
	},
	business:function(){
		
	},
	get_data_byid:function(id,data){
		var project_lis = data.results||data;
		var ret = {};
		
		for (var i = project_lis.length - 1; i >= 0; i--) {
			var li = project_lis[i];

			if(li.id==id){
				ret = li;
				break;
			}
		};
		return ret;
	}
}
APP.defaults = {
	/*
	*依赖的模块
	*/
	dependents:{
		/*
		*模块名称
		*/
		'List_data':{
			
			/*
			*模块初始化需要的参数
			*/
			options:{
				data:{}
			}

		},
		/*
		*模块名称
		*/
		'List_project':{

			/*
			*模块初始化需要的参数
			*/
			options:{
				selecter:$("#JS_list_project"),
				url:"data_project",
				get_project_data:function(callback){
					callback();
				}
			}

		},
		/*
		*模块名称
		*/
		'List_content':{

			/*
			*模块初始化需要的参数
			*/
			options:{
				selecter:$("#JS_list_content"),
				url:"data_content",
				get_progress_data:function(callback){
					callback();
				}
			}

		},
		/*
		*模块名称
		*/
		'List_detail':{

			/*
			*模块初始化需要的参数
			*/
			options:{
				selecter:$("#JS_list_detail"),
				projectEdit:function(opt){
					alert(2)
				},
				contentEdit:function(opt){
					alert(2)
				}
					
			}

		},
		/*
		*模块名称
		*/
		'List_menu':{

			/*
			*模块初始化需要的参数
			*/
			options:{
				selecter:$("#JS_list_menu"),
				/*
				*项目组成员设置
				*/
				projectGroup:function(opt){},
				/*
				*启动选中子项目
				*/
				startupProject:function(opt){alert(opt)}
			}

		}
	}
}

/*-----end-------*/
/*
*应用模块我的任务
*/
/*----start------*/
function CLTAPP(opt){

    APP.call(this,opt,CLTAPP);
}
CLTAPP.prototype = new APP();
CLTAPP.prototype.business = function(){
	var self = this;
	var modules = {},
		selects= $(),
		search=$(),
		first,
		moduleName;
	var evetns = {
		List_project:[
			{
				tag:"H4",
				filter:function(){
					return true;
				},
				success:function(target){
					auto(target)
				},
				failed:function(){}

			},
			{
				tag:"H3",
				filter:function(){
					return true;
				},
				success:function(target){
					auto(target)
				},
				failed:function(){}

			}
		],
		List_content:[
			{
				tag:"INPUT",
				filter:function(target){
					return true;
				},
				success:function(target){
					
					if($(target).parent().parent().parent()[0].tagName=="THEAD"){

						if($(target).attr("checked")) {

							$("input[type='checkbox']",modules.list_content.selecter.find('tbody')[0]).each(function(){

								if(!$(this).attr("disabled"))$(this).attr("checked","true"); 
							})
						}else{
							$("input[type='checkbox']",modules.list_content.selecter.find('tbody')[0]).removeAttr("checked"); 
						}
					}
					
				},
				failed:function(){

				}

				
			},
			{
				tag:"TR",
				filter:function(target){
					
					if(target.parentNode.tagName!="THEAD"){
						return true;
					}else{
						return false;
					}
				},
				success:function(target){
					var id = target.getAttribute("data-id");
					if($(target).hasClass("active")){

					}else{

						$(target).parent().find(".active").removeClass("active");
						$(target).addClass("active");
					};

					var url = modules.list_content.url;
					if(first.moduleName=="List_project"){
						var project=modules.list_project.get_current();
						console.log("modules.list_data.get(url)")
					console.log(project)
						var projectid = project.attr("data-id");
						url = url+"?id="+projectid;
					}
					
					var ret =self.get_data_byid(id,modules.list_data.get(url).results||modules.list_data.get(url).data.results||modules.list_data.get(url).data)
					modules.list_detail.business_content(ret);
					modules.list_content.item_click(id);
				},
				failed:function(){

				}
			}
		],
		List_detail:[
			{
				tag:"DIV",
				filter:function(target){
					if( $(target).hasClass("mod-hd")){
						return true;
					}else{
						return false;
					}
				},
				success:function(target,e){
					e.stopPropagation();
					if($('.related-mod').find(".mod-bd")[0].style.display!="none"){
						$('.related-mod').find(".mod-bd")[0].style.display="none"
					}else{
						$('.related-mod').find(".mod-bd")[0].style.display=""
					}
					
					
				},
				failed:function(){

				}

				
			}
		],
		List_menu:[],
		List_page:[
			{
				tag:"LI",
				filter:function(target){
					return true;
				},
				success:function(target){
					var rel = target.getAttribute("data-rel");
					function goto(elem){
						var no = elem.getAttribute("data-no");
						if($(elem).hasClass("active"))return;
						$(elem).parent().find(".active").removeClass("active");
						$(elem).addClass("active");
						get_parameters(no,true)
					}
					if(rel&&modules.list_page[rel]){
						modules.list_page[rel](target);
					}else if(rel=="goto"){
						goto(target);
					}
				},
				failed:function(){

				}

				
			}
		]

	}
	
	for (var n in this.dependents) {
		var name = n.toLowerCase();
		var val = this.dependents[n]
		modules[name] = val;
		modules[name].moduleName = n;

		
		if(modules[name].forbid){
			for (var n in modules[name]) {
				modules[name][n] = function(){};
			}
			modules[name].selecter = $();
		}
		modules[name].bindevent(evetns[n]);
	};

	first = modules.list_project;
	
	if(modules.list_project.forbid){
		if(modules.list_content.forbid){
			alert('目录和内容不能都forbid')
			return;
		}else{
			first = modules.list_content;
		}
		
	}
	moduleName = first.moduleName;
	function get_sarch(){
		var arr = []
		var val = search.val();
		if(val==""||val=="搜索"){

		}else{
			
			arr.push("\""+search.attr("data-name")+"\":"+"\"*"+val+"*\"");
		}	
		return arr;
	}
	function get_select(){
		var arr = [];
		selects.each(function(index, domEle){
			var opt =  $(this).find("option:selected");
			var name = $(this).attr("data-name");
			var id = opt.attr("data-id")||1;
			var val = $(this).val();
			if(val == "所有"){
					
			}else{
				
				arr.push("\""+name+"\":\""+id+"\"");
			}
			
		})
		return arr;
	}
	function get_project(){
		var arr = [];
		var currProject = modules.list_project.get_current();
		if(currProject.attr("data-id")){
			
			arr.push("\""+currProject.attr("data-name")+"\":\""+currProject.attr("data-id")+"\"");
		}
		return arr;
	}
	function get_retsults(page){
		var Things = parameters;
		var arr = [];

		for (var i = 0; i < Things.length; i++) {
		
			var ret = Things[i]()
			if(ret.length>0)arr.push(ret.join(","));
		};
		
		var parames = "";
		if(arr.length>0){
			parames = "?filter={"+arr.join(",")+"}&page="+page;
		}else{
			parames = "?page="+page;
		}
		return parames;
		
	}
	function get_parameters(page,ispage){
		var parames = get_retsults(page);
		var get_data = modules.list_menu.get_progress_data||modules.list_menu.get_data;
		get_data(parames,function(data){
			modules.list_content.business(data);
			if(!ispage){
				modules.list_page.index = 0;
				modules.list_page.business(data)
			}
		})
	}
	function menu_callback(data,scope){
		selects = scope.selecter.find("select");
		search = scope.selecter.find(".search-query");
		var collect = scope.selecter.find(".btn-small");
		var submit = scope.selecter.find(".submit");
		search.parent().bind('submit',function(){
			return false;
		})
		search.bind('keydown',function(event){
			if(event.keyCode==13) {
				submit.trigger('click');
			}
		})
		

		search.focus(function(){
			if($(this)[0].value == '搜索'){
				$(this)[0].value = "";
			}
		})
		search.blur(function(){
			if($(this)[0].value == ''){
				$(this)[0].value = "搜索";
			}
		})
		
		submit.click(function(){

			var val = search.val();
			//if(val&&val!='搜索'){
				get_parameters(1)
				
			//}else{
			//	alert("请输入要查询的值，如：子分类一 ")
			//}
		});
	   collect.click(function(e){
			var ret = [];
			
			$("input[type='checkbox']:checkbox:checked",modules.list_content.selecter.find('tbody')[0]).each(function(){
				ret.push($(this).parent().parent().attr("data-uid")||1)
			})
			// if(!ret.length){
			// 	alert('你没有选中的项')
			// }else {
				
				scope.item_click(ret);
			// }
			
		})
		
		selects.bind('change',function(){
			get_parameters(1)
		});
	}
	var parameters = [get_sarch,get_select]
	var main = function (){};
	var auto = function (){};
	
	
	if(moduleName=="List_project"){

		parameters[parameters.length] = get_project;
		main = function(){
			var get_data = first.get_project_data||first.get_data;
			get_data(function (data){
				modules.list_data.set(first.url,data);
				first.business(data,function(data){
					var complete = first.render_complete||function(){
						$('.content-bd aside .cat-list li:has(ol)').addClass('hasmenu');
						$('.content-bd aside .cat-list li h4').wrap('<div class="wraparea" />');
						$('.content-bd aside .cat-list li:has(ol) > .wraparea').append("<div class='hitarea'></div>");

					};
					console.log(first.moduleName+" render complete!")
					complete();
					
					modules.list_menu.business(data,function(data){
						var complete = modules.list_menu.render_complete||function(){};
						console.log(modules.list_menu.moduleName+" render complete!")
						complete();
						menu_callback(data,this)
					})
					var self = this;
					setTimeout(function(){
						auto(first.selecter.find("h4")[0]);
					},0)
				})
			})
		}
		auto = function (target){
			modules.list_detail.selecter&&modules.list_detail.selecter.html("");
			var id = target.getAttribute("data-id");
			if($(target).hasClass("active")){

			}else{
				first.selecter.find(".active").removeClass("active");
				$(target).addClass("active");
			};
			
			var get_data = modules.list_content.get_progress_data||modules.list_content.get_data;
			get_data(id,function(data){
				var url = modules.list_content.url+"?id="+id;
				modules.list_data.set(url,data);
				modules.list_content.business(data,function(){
					var complete = modules.list_content.render_complete||function(){};
					console.log(modules.list_content.moduleName+" render complete!")
					complete();

				})
				modules.list_page.index = 0;
				modules.list_page.business(data,function(){
					var complete = modules.list_page.render_complete||function(){};
					console.log(modules.list_page.moduleName+" render complete!")
					complete();

				})

				selects.each(function(index, domEle){
					$($(this).find("option")[0]).attr("selected", true); 
				})
				search.val("搜索");
				
			});
			if(first.project_click)first.project_click(id);
			first.item_click(id);
		}
		if(!modules.list_project.forbid){
			modules.list_project.refresh = function(){
				console.log("modules.list_project.refresh")
				main();
			}
			modules.list_project.update = function(id,projectdata,progressdata){
				// console.log("list_project.update")
				var url = modules.list_project.url;
				modules.list_data.set(url,projectdata);
				
				var project=modules.list_project.get_current();
				var projectid = project.attr("data-id");
				var urla = modules.list_content.url+"?id="+projectid;

				modules.list_data.set(urla,progressdata);
				
				modules.list_project.business(projectdata)
				modules.list_menu.business(projectdata);	
				var target =""; 
				modules.list_project.selecter.find("h4").each(function(){
					var $this = $(this);
					var idA = $this.attr("data-id");
					if(projectid==idA){
						target = $this[0];
						return false;
					}
				})
				if(!target)return;
				if($(target).parent().parent().hasClass("active")){

				}else{
					$(target).parent().parent().parent().find(".active").removeClass("active");
					$(target).parent().parent().addClass("active");
				};
				
				modules.list_content.business(progressdata)
				if(modules.list_project.project_click)modules.list_project.project_click(projectid);
				modules.list_project.item_click(projectid);
			}
		}

		if(!modules.list_content.forbid){
			modules.list_content.refresh = function(){
				var target = modules.list_project.get_current();
				console.log("modules.list_content.refresh")
				auto(target[0])
			}
			
			modules.list_content.update = function(id,data){
				var contentid = modules.list_content.get_current().attr("data-id");
				var project=modules.list_project.get_current();
				var projectid = project.attr("data-id");
				var url = modules.list_content.url+"?id="+projectid;
				var content_trs = modules.list_data.set(url,data);

				modules.list_content.business(data);
				
				var target =""; 
				modules.list_content.selecter.find("tr").each(function(){
					var $this = $(this);
					var idA = $this.attr("data-id");
					if(contentid==idA){
						target = $this[0];
						return false;
					}
				})
				if(!target)return;
				if($(target).hasClass("active")){

				}else{
					$(target).parent().find(".active").removeClass("active");
					$(target).addClass("active");
				};
				var ret = self.get_data_byid(id,data)
				modules.list_detail.business_content(ret);
				if(this.progress_click)this.progress_click(id);
				this.item_click(id);
			}
			// console.log(modules.list_content)

		}
	}else if(moduleName=="List_content"){
		
		main = function (){
			
			first.get_data(null,function (data){
				modules.list_data.set(first.url,data);
				first.business(data,function(data){
					var self = this;
					setTimeout(function(){
						auto(data,first);
					},0)
				})
			})
		}
		
		
		auto = function (data,scope){
			var target = scope.selecter.find("tbody").find("tr")[0];
			
			modules.list_menu.business(data,function(data){
				menu_callback(data,this)
			})
			if(!target){
				console.log('target not exist')
				return;
			}
			
			var id = target.getAttribute("data-id");
			if($(target).hasClass("active")){

			}else{

				$(target).parent().find(".active").removeClass("active");
				$(target).addClass("active");
			};
			var ret = self.get_data_byid(id,data)

			// modules.list_detail.business_content(ret);
			scope.item_click(id);
			modules.list_page.index = 0;
			// console.log(modules.list_page.business)
			modules.list_page.business(data)
			selects.each(function(index, domEle){
				$($(this).find("option")[0]).attr("selected", true); 
			})
			search.val("搜索");
		}
		if(!modules.list_content.forbid){
			modules.list_content.update = function(id,data){
				var contentid = modules.list_content.get_current().attr("data-id");
				// console.log("list_content.update")
				modules.list_data.set(this.url,data);
				this.business(data);
				var target =""; 
				this.selecter.find("tr").each(function(){
					var $this = $(this);
					var idA = $this.attr("data-id");
					if(contentid==idA){
						target = $this[0];
						return false;
					}
				})
				if(!target)return;
				if($(target).hasClass("active")){

				}else{
					$(target).parent().find(".active").removeClass("active");
					$(target).addClass("active");
				};
				modules.list_detail.business_content(self.get_data_byid(contentid,data));
				this.item_click(contentid);
			}
		}
		

	}
	
	main();
}
CLTAPP.defaults = {
		dependents:{
			"List_project":{
				"options":{
					selecter:$("#JS_list_project"),
					url:"data_project"
				}

			},
						/*
			*模块名称
			*/
			'List_content':{
				
				/*
				*模块初始化需要的参数
				*/
				options:{
					selecter:$("#JS_list_content"),
					url:"data_content"
				}

			},
						/*
			*模块名称
			*/
			'List_page':{
				
				/*
				*模块初始化需要的参数
				*/
				options:{
					selecter:$("#JS_list_page"),
					index:0,
					totalpage:0,
					num:5,
					$lis:[],
					$prev:null,
					$next:null
				}

			},
			/*
			*模块名称
			*/
			'List_data':{
				
				/*
				*模块初始化需要的参数
				*/
				options:{
					data:{}
				}

			},
			/*
			*模块名称
			*/
			'List_menu':{

				/*
				*模块初始化需要的参数
				*/
				options:{
					selecter:$("#JS_list_menu")
				}

			},
			/*
			*模块名称
			*/
			'List_detail':{

				/*
				*模块初始化需要的参数
				*/
				options:{
					selecter:$("#JS_list_detail")
					
						
				}

			}
		}
	}
window.CLTAPP = CLTAPP;
function Dashboard(opt){

    APP.call(this,opt,Dashboard);
}
Dashboard.prototype = new APP();
Dashboard.prototype.business = function(){
	var self = this;
	var modules = {},
		selects,
		search,
		first,
		moduleName;
	var evetns = {
		List_project:[
			{
				tag:"H4",
				filter:function(){
					return true;
				},
				success:function(target){
					auto(target)
				},
				failed:function(){}

			}
		],
		List_content:[
			
		],
		List_detail:[
			
		],
		List_menu:[],
		List_page:[
			{
				tag:"LI",
				filter:function(target){
					return true;
				},
				success:function(target){
					var rel = target.getAttribute("data-rel");
					function goto(elem){
						var no = elem.getAttribute("data-no");
						if($(elem).hasClass("active"))return;
						$(elem).parent().find(".active").removeClass("active");
						$(elem).addClass("active");
						get_parameters(no,true)
					}
					if(rel&&modules.list_page[rel]){
						modules.list_page[rel](target);
					}else if(rel=="goto"){
						goto(target);
					}
				},
				failed:function(){

				}

				
			}
		]

	}
	
	for (var n in this.dependents) {
		var name = n.toLowerCase();
		var val = this.dependents[n]
		modules[name] = val;
		modules[name].moduleName = n;

		
		if(modules[name].forbid){
			for (var n in modules[name]) {
				modules[name][n] = function(){};
			}
			modules[name].selecter = $();
		}
		modules[name].bindevent(evetns[n]);
	};

	first = modules.list_project;
	
	if(modules.list_project.forbid){
		if(modules.list_content.forbid){
			alert('目录和内容不能都forbid')
			return;
		}else{
			first = modules.list_content;
		}
		
	}
	moduleName = first.moduleName;
	function get_sarch(){
		var arr = []
		var val = search.val();
		if(val==""||val=="搜索"){

		}else{
			
			arr.push("\""+search.attr("data-name")+"\":"+"\"*"+val+"*\"");
		}	
		return arr;
	}
	function get_select(){
		var arr = [];
		selects.each(function(index, domEle){
			var opt =  $(this).find("option:selected");
			var name = $(this).attr("data-name");
			var id = opt.attr("data-id")||1;
			var val = $(this).val();
			if(val == "所有"){
					
			}else{
				
				arr.push("\""+name+"\":\""+id+"\"");
			}
			
		})
		return arr;
	}
	function get_project(){
		var arr = [];
		var currProject = modules.list_project.get_current();
		if(currProject.attr("data-id")){
			
			arr.push("\""+currProject.attr("data-name")+"\":\""+currProject.attr("data-id")+"\"");
		}
		return arr;
	}
	function get_retsults(page){
		var parames = "?page="+page;
		return parames;
		
	}
	function get_parameters(page,ispage){
		var parames = get_retsults(page);
		var get_data = modules.list_project.get_data;
		get_data(parames,function (data){
			modules.list_data.set(first.url,data);
			first.business(data,function(data){
				var complete = first.render_complete||function(){

				};
				console.log(first.moduleName+" render complete!")
				complete();
				
				modules.list_menu.business(data,function(data){
					var complete = modules.list_menu.render_complete||function(){};
					console.log(modules.list_menu.moduleName+" render complete!")
					complete();
				})
				
				var self = this;
				setTimeout(function(){
					auto(first.selecter.find("h4")[0]);
				},0)
			})
		})
	}
	function menu_callback(data,scope){
		selects = scope.selecter.find("select");
		search = scope.selecter.find(".search-query");
		var collect = scope.selecter.find(".btn-small");
		var submit = scope.selecter.find(".submit");
		search.parent().bind('submit',function(){
			return false;
		})
		search.bind('keydown',function(event){
			if(event.keyCode==13) {
				submit.trigger('click');
			}
		})
		

		search.focus(function(){
			if($(this)[0].value == '搜索'){
				$(this)[0].value = "";
			}
		})
		search.blur(function(){
			if($(this)[0].value == ''){
				$(this)[0].value = "搜索";
			}
		})
		
		submit.click(function(){

			var val = search.val();
			//if(val&&val!='搜索'){
				get_parameters(1)
				
			//}else{
			//	alert("请输入要查询的值，如：子分类一 ")
			//}
		});
	   collect.click(function(e){
			var ret = [];
			
			$("input[type='checkbox']:checkbox:checked",modules.list_content.selecter.find('tbody')[0]).each(function(){
				ret.push($(this).parent().parent().attr("data-uid")||1)
			})
			// if(!ret.length){
			// 	alert('你没有选中的项')
			// }else {
				
				scope.item_click(ret);
			// }
			
		})
		
		selects.bind('change',function(){
			get_parameters(1)
		});
	}
	var parameters = []
	var main = function (){};
	var auto = function (){};
	
	
	if(moduleName=="List_project"){

		parameters[parameters.length] = get_project;
		main = function(){
			var get_data = first.get_project_data||first.get_data;
			get_data(function (data){
				modules.list_data.set(first.url,data);
				first.business(data,function(data){
					var complete = first.render_complete||function(){

					};
					console.log(first.moduleName+" render complete!")
					complete();
					
					modules.list_menu.business(data,function(data){
						var complete = modules.list_menu.render_complete||function(){};
						console.log(modules.list_menu.moduleName+" render complete!")
						complete();
					})
					modules.list_page.index = 0;
					modules.list_page.business(data,function(){
						var complete = modules.list_page.render_complete||function(){};
						console.log(modules.list_page.moduleName+" render complete!")
						complete();

					})
					var self = this;
					setTimeout(function(){
						auto(first.selecter.find("h4")[0]);
					},0)
				})
			})
		}
		auto = function (target){
			var id = target.getAttribute("data-id");
			if($(target).hasClass("active")){

			}else{
				first.selecter.find(".active").removeClass("active");
				$(target).addClass("active");
			};
			var data = modules.list_data.get(first.url);
			console.log(data)
			var ret = self.get_data_byid(id,data)
			
			modules.list_content.business(ret,function(){
				var complete = modules.list_content.render_complete||function(){};
				console.log(modules.list_content.moduleName+" render complete!")
				complete();

			})
			var get_data = modules.list_content.get_data;
			get_data(id,function(data){
				// var url = modules.list_content.url+"?id="+id;
				// modules.list_data.set(url,data);
				// modules.list_content.business(data,function(){
				// 	var complete = modules.list_content.render_complete||function(){};
				// 	console.log(modules.list_content.moduleName+" render complete!")
				// 	complete();

				// })
			});
			first.item_click(id,target);
		}
	}
	
	main();
}
Dashboard.defaults = {
		dependents:{
			"List_project":{
				"options":{
					selecter:$("#JS_list_project"),
					url:"data_project"
				}

			},
						/*
			*模块名称
			*/
			'List_content':{
				
				/*
				*模块初始化需要的参数
				*/
				options:{
					selecter:$("#JS_list_content"),
					url:"data_content"
				}

			},
						/*
			*模块名称
			*/
			'List_page':{
				
				/*
				*模块初始化需要的参数
				*/
				options:{
					selecter:$("#JS_list_page"),
					index:0,
					totalpage:0,
					num:5,
					$lis:[],
					$prev:null,
					$next:null
				}

			},
			/*
			*模块名称
			*/
			'List_data':{
				
				/*
				*模块初始化需要的参数
				*/
				options:{
					data:{}
				}

			},
			/*
			*模块名称
			*/
			'List_menu':{

				/*
				*模块初始化需要的参数
				*/
				options:{
					selecter:$("#JS_list_menu")
				}

			}
		}
}
window.Dashboard = Dashboard;


/*
*eg
	var gPMLAPP = new PMLAPP({})
*/

})(jQuery,window,undefined);});


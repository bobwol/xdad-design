$(function(){(function($,window,undefined){
/*
*去除html标签
*/
/*-------------start-------*/
function delHtmlTag(str){
		alert(1)
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
var templates = {
	pm_List_project:[
		'<div class="cat-list">',
		'<ol>',
		'{{each(i,item) project_lis}}',
		'<li class="${classname}">',
		'    <h4 data-id="${id}"><a href="javascript:void(0);" title="${title}">${title}</a></h4>',
		'	{{if operationalitems.length}}',
		'    <div class="action">',
		'      <ul>',
		'		{{each(n,name) operationalitems}}',
		'		{{if enabled}}',
		'        <li id="${id}"><a href="＃">${name}</a></li>',
		'		{{else}}',
		'        <li id="${id}">${name}</li>',
		'		{{/if}}',
		'		{{/each}}',
		'      </ul>',
		'    </div>',
		'    {{/if}}',
		'</li>',
		'{{/each}}',
		'</ol>',
		'</div>'].join(""),
	pm_List_content:[
		'<table cellspacing="0" class="hascheckbox" >',
        '<thead>',
        '  <tr>',
        '    <th scope="col"><input type="checkbox"></th>',
        '    <th scope="col">子项目</th>',
        '    <th scope="col" width="10%">状态</th>',
        '    <th scope="col" width="10%">剩余</th>',
        '    <th scope="col" width="10%">编辑</th>',
        '    <th scope="col" width="15%">开始日期</th>',
        '    <th scope="col" width="15%">结束日期</th>',
        '    <th scope="col" width="10%">进度</th>',
        '  </tr>',
        '</thead>',
        '<tbody>',
        '{{each(i,item) content_trs}}',
		'  <tr class="${classname}" data-id="${id}">',
		'  	<td><input type="checkbox"></td>',
		'   <td><div class="action-td"><span class="title">${title}</span>',
		'	{{if operationalitems.length}}',
		'    <div class="action">',
		'      <ul>',
		'		{{each(n,name) operationalitems}}',
		'		{{if enabled}}',
		'        <li id="${id}"><a href="＃">${name}</a></li>',
		'		{{else}}',
		'        <li id="${id}">${name}</li>',
		'		{{/if}}',
		'		{{/each}}',
		'      </ul>',
		'    </div>',
		'    {{/if}}</td>',
		'    <td><span class="status">${status}</span></td>',
        '    <td>${left}</td>',
        '    <td>${WRITING_TYPE}</td>',
        '    <td>${planStart}</td>',
        '    <td>${planEnd}</td>',
        '    <td>${progress}%</td>',
		' </tr>',
		'{{/each}}',
        '</tbody>',
        '</table>'].join(""),
	pm_List_menu:[
		'<h3>全部${project_num}个项目${content_num}个任务</h3>',
		'<button class="btn btn-small" type="button" style="right:150px;" href="#projectGroup" ><i class="icon-user"></i> 项目组成员设置</button>',
		'<button class="btn btn-small startup-project" type="button"><i class="icon-off"></i> 启动选中子项目</button>	'].join(""),
	pm_List_detail:{
		project:[
			'<div class="mod main-project">',
			'<div class="mod-hd">主项目基本信息</div>',
		    '  <div class="mod-bd">',
		    '    <dl>',
		    '      <dt>项目名称</dt>',
		    '      <dd>',
		    '        <p>${title}</p>',
		    '      </dd>',
		    '    </dl>',
		    '    <dl>',
		    '      <dt style="position:relative;">编制说明',
		    '		{{if editable}}',
		    '        <button class="btn btn-small" type="button" style="position:absolute; top:5px; right:10px;" href="#editProject" ><i class="icon-edit"></i> 编辑</button>',
		    '    	{{/if}}',
		    '        <!--<span style="display:block; position:absolute; top:0; right:10px;"><a style="color:#090;" href="#editProject"  data-keyboard="false" data-backdrop="false">编辑</a></span>--></dt>',
		    '      <dd>',
		    '        <p>${demand}</p>',
		    '      </dd>',
		    '    </dl>',
		    '    <!-- sub-project start -->',
		    '    <dl class="task-management">',
		    '      <dt style="position:relative;">任务管理',
		    '		{{if editable}}',
		    '		<button class="btn btn-small" type="button" style="position:absolute; top:5px; right:10px;" href="#taskManagement" ><i class="icon-edit"></i> 编辑</button>',
		  	'    	{{/if}}',
		    '        <!--<span style="display:block; position:absolute; top:0; right:10px;"><a style="color:#090;" href="#taskManagement"  data-keyboard="false" data-backdrop="false">编辑</a></span>--></dt>',
		    '      <dd>',
		    '        <ul>',

		    '		{{each roles}}',
			'         <li><span class="alignleft">${$index}：</span><span class="alignright">${$value}</span></li>',
			'		{{/each}}',
	    	'        </ul>',
		    '      </dd>',
		    '    </dl>',
		    '    <!-- sub-project end --> ',
		    '  </div>',
		    '</div>'].join(""),
		content:[
			'<div class="mod related-mod">',
			'<div class="mod-hd">子项目：初始训练指南</div>',
	        '  <div class="mod-bd">',
	        '    <!-- sub-project start -->',
	        '    <dl class="task-management">',
	        '      <dt style="position:relative;">任务管理',
	        '		{{if editable}}',
	        '        <button class="btn btn-small" type="button" style="position:absolute; top:5px; right:10px;" href="#taskManagement" ><i class="icon-edit"></i> 编辑</button>',
	        '    	{{/if}}',
	        '        <!--<span style="display:block; position:absolute; top:0; right:10px;"><a style="color:#090;" href="#taskManagement"  data-keyboard="false" data-backdrop="false">编辑</a></span>--></dt>',
	        '      <dd>',
	        '        <ul>',
	        '		{{each roles}}',
			'         <li><span class="alignleft">${$index}：</span><span class="alignright">${$value}</span></li>',
			'		{{/each}}',
	        '        </ul>',
	        '      </dd>',
	        '    </dl>',
	        '    <!-- sub-project end -->',
	        '    <dl>',
	        '      <dt>学习重点</dt>',
	        '      <dd>',
	        '        <p>${points}</p>',
	        '      </dd>',
	        '    </dl>',
	        '    <dl>',
	        '      <dt>参考</dt>',
	        '      <dd>',
	        '        <p>${references}</p>',
	        '      </dd>',
	        '    </dl>',
	        '  </div>',
	        '</div>'].join("")
	},
	pt_List_project:[
		'<div class="cat-list">',
		'<ol>',
		'{{each(i,item) project_lis}}',
		'<li class="${classname}">',
		'    <h4 data-id="${id}"><a href="javascript:void(0);" title="${title}">${title}</a></h4>',
		'	{{if operationalitems.length}}',
		'    <div class="action">',
		'      <ul>',
		'		{{each(n,name) operationalitems}}',
		'		{{if enabled}}',
		'        <li id="${id}"><a href="＃">${name}</a></li>',
		'		{{else}}',
		'        <li id="${id}">${name}</li>',
		'		{{/if}}',
		'		{{/each}}',
		'      </ul>',
		'    </div>',
		'    {{/if}}',
		'</li>',
		'{{/each}}',
		'</ol>',
		'</div>'].join(""),
	pt_List_content:[
		'<table cellspacing="0">',
        '<thead>',
        '  <tr>',
        '    <th scope="col">任务</th>',
        '    <th scope="col" width="10%">类型</th>',
        '    <th scope="col" width="10%">剩余</th>',
        '    <th scope="col" width="10%">编辑</th>',
        '    <th scope="col" width="15%">开始日期</th>',
        '    <th scope="col" width="15%">结束日期</th>',
        '    <th scope="col" width="10%">进度</th>',
        '  </tr>',
        '</thead>',
        '<tbody>',
        '{{each(i,item) content_trs}}',
        '  <tr class="${classname}" data-id="${id}">',
        '    <td><div class="action-td"><span class="title">${title}</span>',
        '	{{if operationalitems.length}}',
		'      <div class="action action-block">',
		'      <ul>',
		'		{{each(n,name) operationalitems}}',
		'			{{if enabled}}',
		'			{{if children.length}}',
		'        	<li id="${id}" class="new"><a href="＃">${id}</a>',
		'			{{else}}',
		'        	<li id="${id}"><a href="＃">${id}</a>',
		'    		{{/if}}',
		'			{{if children.length}}',
		'       		<div class="new-bd">',
		'      				<ul>',
		'					{{each(n,name) children}}',
		'						{{if enabled}}',
		'        					<li id="${id}"><a href="＃">${id}</a></li>',
		'						{{else}}',
		'        					<li id="${id}">${id}</li>',
		'						{{/if}}',
		'					{{/each}}',
		'      				</ul>',
		'    			</div>',
		'    		{{/if}}',
		'			</li>',
		'			{{else}}',
		'			{{if children.length}}',
		'        	<li id="${id}" class="new">${id}',
		'			{{else}}',
		'        	<li id="${id}">${id}',
		'    		{{/if}}',
		'			{{if children.length}}',
		'       		<div class="new-bd">',
		'      				<ul>',
		'					{{each(n,name) children}}',
		'						{{if enabled}}',
		'        					<li id="${id}"><a href="＃">${id}</a></li>',
		'						{{else}}',
		'        					<li id="${id}">${id}</li>',
		'						{{/if}}',
		'					{{/each}}',
		'      				</ul>',
		'    			</div>',
		'    		{{/if}}',
		'			</li>',
		'			{{/if}}',
		
		'		{{/each}}',
		'      </ul>',
		'    </div>',
		'    {{/if}}</td>',
		'    <td><span class="status"><a href="page_edit.html" style="color:#090;">${type}</a></span></td>',
        '    <td>${left}</td>',
        '    <td>${status}</td>',
        '    <td>${planStart}</td>',
        '    <td>${planEnd}</td>',
        '    <td>${progress}%</td>',
        '  </tr>',
        '{{/each}}',
    	'</tbody>',
  		'</table>'
    	].join(""),
	pt_List_menu:[
		'<h3>参与${project_num}个项目，共${content_num}个任务（${content_atciveing}个激活，${content_atcive}个待激活，${content_atciveed}个完成）</h3>'
		].join(""),
	pt_List_detail:{
		project:[
			'<div class="mod main-project">',
			'<div class="mod-hd">主项目基本信息</div>',
		    '  <div class="mod-bd">',
		    '    <dl>',
		    '      <dt>项目名称</dt>',
		    '      <dd>',
		    '        <p>${title}</p>',
		    '      </dd>',
		    '    </dl>',
		    '    <dl>',
		    '      <dt style="position:relative;">编制说明',
		    '		{{if editable}}',
		    '        <button class="btn btn-small" type="button" style="position:absolute; top:5px; right:10px;" href="#editProject" ><i class="icon-edit"></i> 编辑</button>',
		    '    	{{/if}}',
		    '        <!--<span style="display:block; position:absolute; top:0; right:10px;"><a style="color:#090;" href="#editProject" data-keyboard="false" data-backdrop="false">编辑</a></span>--></dt>',
		    '      <dd>',
		    '        <p>${demand}</p>',
		    '      </dd>',
		    '    </dl>',
		    '    <!-- sub-project start -->',
		    '    <dl class="task-management">',
		    '      <dt style="position:relative;">任务管理',
		    '		{{if editable}}',
		    '		<button class="btn btn-small" type="button" style="position:absolute; top:5px; right:10px;" href="#taskManagement" ><i class="icon-edit"></i> 编辑</button>',
		  	'    	{{/if}}',
		    '        <!--<span style="display:block; position:absolute; top:0; right:10px;"><a style="color:#090;" href="#taskManagement"  data-keyboard="false" data-backdrop="false">编辑</a></span>--></dt>',
		    '      <dd>',
		    '        <ul>',

		    '		{{each roles}}',
			'         <li><span class="alignleft">${$index}：</span><span class="alignright">${$value}</span></li>',
			'		{{/each}}',
	    	'        </ul>',
		    '      </dd>',
		    '    </dl>',
		    '    <!-- sub-project end --> ',
		    '  </div>',
		    '</div>'].join(""),
		content:[
		'<div class="mod related-mod">',
		'  <div class="mod-hd">任务信息：初始训练指南</div>',
        '  <div class="mod-bd"> ',
        '    <!-- sub-project start -->',
        '    <dl class="task-management">',
        '      <dt style="position:relative;">任务状态</dt>',
        '      <dd>',
        '        <ul>',
        '		{{each roles}}',
		'         <li><span class="alignleft">${$index}：</span><span class="alignright">${$value}</span></li>',
		'		{{/each}}',
        '        </ul>',
        '      </dd>',
        '    </dl>',
        '    <!-- sub-project end -->',
        '    <dl>',
        '      <dt style="position:relative;">学习重点',
       	'		{{if editable}}',
        '        <button class="btn btn-small" type="button" style="position:absolute; top:5px; right:10px;" href="#editPoints" ><i class="icon-edit"></i> 编辑</button>',
        '    	{{/if}}',
        '      </dt>',
        '      <dd>',
        '        <p>${points}</p>',
        '      </dd>',
        '    </dl>',
        '    <dl>',
        '      <dt style="position:relative;">参考',
        '		{{if editable}}',
        '        <button class="btn btn-small" type="button" style="position:absolute; top:5px; right:10px;" href="#editRef" ><i class="icon-edit"></i> 编辑</button>',
        '    	{{/if}}',
        '      </dt>',
        '      <dd>',
        '        <p>${reference}</p>',
        '      </dd>',
        '    </dl>',
        '  </div>',
        '</div>'
		].join("")
	}
	



}
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

			$.tmpl(template,data).appendTo(this.selecter);
			return this;
		},
		bindevent:function(Things){
			var self = this;
			self.selecter.click(function (e){
				return clickManager(e,Things,self);
			})
			return this;		
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
			currT.success(target);
			break;
		}else {
			target = target.parentNode;
			tagName = target.tagName;
		}
		
	}
	return self;
	
}
define("List_page",{
	render:function (data){
		var row = data.row;
		var self = this;
		this.totalpage = row-this.num+1;
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
		if (this.$lis.first().is(":visible") == true) {
			this.$prev.addClass('disabled');
		}
		if (this.$lis.last().is(":visible") == true) {
			this.$next.addClass('disabled');
		}
	}
});
define("List_menu");

define("List_project",{
	getCurrentProject:function(){
		var self = this;
		return self.selecter.find(".active");
	}
});
define("List_content",{
	getCurrentContent:function(){
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
	}
});

/*-----end---------*/
/*
*数据存储模块
*/
/*-----start---------*/
function List_data (opt){
	$.extend(this,opt);
}
List_data.prototype={
	get:function (name){
		return this.data[name]||null;
	},
	set:function(name,value){
		this.data[name]=value;
		return this;
	}
}
modulseManger.List_data=List_data;

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
				projectGroup:function(opt){alert(1)},
				/*
				*启动选中子项目
				*/
				startupProject:function(opt){alert(opt)}
			}

		}
	}
}

/*-----end---------*/
/*
*应用模块项目列表
*/
/*----start------*/
function PMLAPP(opt){

    APP.call(this,opt);
}

PMLAPP.prototype = new APP();
PMLAPP.prototype.business = function(){

    	var list_data = this.dependents['List_data'];
		var list_server = this.dependents['List_server'];
		var list_project = this.dependents['List_project'];
		var list_content = this.dependents['List_content'];
		var list_detail = this.dependents['List_detail'];
		var list_rightmenu =this.dependents['List_rightmenu'];
		var list_menu =this.dependents['List_menu'];

		function byIdGetData(id,data){
			var project_lis = data;
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
		
		function List_contentbusiness(data){
			list_content
				.render(templates.pm_List_content,data)
				
		}
		function List_detailbusiness_project(data){
			list_detail
				.render(templates.pm_List_detail.project,data)
				
		}

		function List_detailbusiness_content(data){
			list_detail
				.render_content(templates.pm_List_detail.content,data)
		}
		function list_projectbusiness(data){

			list_project
				.render(templates.pm_List_project,data)
				
			list_menu
				.render(templates.pm_List_menu,data);	
			;(function(){
				var firstProject = list_project.selecter.find("h4")[0];
				firstProject = $(firstProject);
				var id = firstProject.attr("data-id");
				$(firstProject).parent().parent().find(".active").removeClass("active");
				$(firstProject).addClass("active");

				var url = list_content.url+"?id="+id;
				var data = list_data.get(url);
				var project_lis = list_data.get(list_project.url).project_lis;
				var ret = byIdGetData(id,project_lis)

				var get_progress_data = list_content.get_progress_data;

				if(data){
					List_contentbusiness(data);
					List_detailbusiness_project(ret)
				}else {
					get_progress_data(id,function(data){

						list_data.set(url,data);
						List_contentbusiness(data)
						List_detailbusiness_project(ret)
					});
					// list_server.getList_content(url,function (data){
					// 	list_data.set(url,data);
					// 	List_contentbusiness(data)
					// 	List_detailbusiness_project(ret)
					// })
				}
			})();
		}
		if("入口"){
			
			var url = list_project.url;

			var get_project_data = list_project.get_project_data;
			var data = list_data.get(url);

			if(data){
				list_projectbusiness(data)
			}else {

				get_project_data(function (data){

					list_data.set(url,data);

					list_projectbusiness(data)

				})
				// list_server.getList_project(url,function (data){
					
				// 	list_data.set(url,data);
				// 	list_projectbusiness(data)
				// })
				
			}
		}
		
		
		list_project.bindevent(function(id){
			var url = list_content.url+"?id="+id;
			var get_progress_data = list_content.get_progress_data;
			var data = list_data.get(url);
			var project_lis = list_data.get(list_project.url).project_lis;
			var ret = byIdGetData(id,project_lis)
			if(data){
				List_contentbusiness(data);
				List_detailbusiness_project(ret)
			}else {
				get_progress_data(id,function(data){

					list_data.set(url,data);
					List_contentbusiness(data)
					List_detailbusiness_project(ret)
				});
				// list_server.getList_content(url,function (data){
				// 	list_data.set(url,data);
				// 	List_contentbusiness(data)
				// 	List_detailbusiness_project(ret)
				// })
			}
		})

		list_content.bindevent(function(id){
			var project=list_project.getCurrentProject();
			
			var projectid = project.attr("data-id");
			var url = list_content.url+"?id="+projectid;
		
			var content_trs = list_data.get(url).content_trs;

			var ret = byIdGetData(id,content_trs)

			List_detailbusiness_content(ret);
		})
		list_detail.bindevent(function(target){
			if($(target).parents().hasClass("main-project")){
				var project=list_project.getCurrentProject();
				var projectid = project.attr("data-id");
				if($(target).parents().hasClass("task-management")){
					list_detail.projectTask(projectid);
				}else {
					list_detail.projectDes(projectid);
				}
			}else{
				var content=list_content.getCurrentContent();
				var contentid = content.attr("data-id");
				list_detail.contentTask(contentid);
				
			}
		})
		list_menu.bindevent(function(){
			var ret = [];
			$("input[type='checkbox']:checkbox:checked",list_content.selecter.find('tbody')[0]).each(function(){
				ret.push($(this).parent().parent().attr("data-id")||1)
			})
			return ret;
		})

		

}
window.PMLAPP = PMLAPP;
/*-----end-------*/
/*
*应用模块我的任务
*/
/*----start------*/
function PTLAPP(opt){

    APP.call(this,opt);
}

PTLAPP.prototype = new APP();
PTLAPP.prototype.business = function(){

    	var list_data = this.dependents['List_data'];
		var list_server = this.dependents['List_server'];
		var list_project = this.dependents['List_project'];
		var list_content = this.dependents['List_content'];
		var list_detail = this.dependents['List_detail'];
		var list_rightmenu =this.dependents['List_rightmenu'];
		var list_menu =this.dependents['List_menu'];

		function byIdGetData(id,data){
			var project_lis = data;
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
		
		function List_contentbusiness(data){
			list_content
				.render(templates.pt_List_content,data)
				
		}
		function List_detailbusiness_project(data){
			list_detail
				.render(templates.pm_List_detail.project,data)
				
		}

		function List_detailbusiness_content(data){

			list_detail
				.render_content(templates.pt_List_detail.content,data)
		}
		function list_projectbusiness(data){

			list_project
				.render(templates.pt_List_project,data)
				
			list_menu
				.render(templates.pt_List_menu,data);	
			;(function(){
				var firstProject = list_project.selecter.find("h4")[0];
				firstProject = $(firstProject);
				var id = firstProject.attr("data-id");
				$(firstProject).parent().parent().find(".active").removeClass("active");
				$(firstProject).addClass("active");

				var url = list_content.url+"?id="+id;
				var data = list_data.get(url);
				var project_lis = list_data.get(list_project.url).project_lis;
				var ret = byIdGetData(id,project_lis)

				var get_progress_data = list_content.get_progress_data;

				if(data){
					List_contentbusiness(data);
					List_detailbusiness_project(ret)
				}else {
					get_progress_data(id,function(data){

						list_data.set(url,data);
						List_contentbusiness(data)
						List_detailbusiness_project(ret)
					});
					// list_server.getList_content(url,function (data){
					// 	list_data.set(url,data);
					// 	List_contentbusiness(data)
					// 	List_detailbusiness_project(ret)
					// })
				}
			})();
		}
		if("入口"){
			
			var url = list_project.url;

			var get_project_data = list_project.get_project_data;
			var data = list_data.get(url);

			if(data){
				list_projectbusiness(data)
			}else {

				get_project_data(function (data){

					list_data.set(url,data);

					list_projectbusiness(data)

				})
				// list_server.getList_project(url,function (data){
					
				// 	list_data.set(url,data);
				// 	list_projectbusiness(data)
				// })
				
			}
		}
		
		
		list_project.bindevent(function(id){
			var url = list_content.url+"?id="+id;
			var get_progress_data = list_content.get_progress_data;
			var data = list_data.get(url);
			var project_lis = list_data.get(list_project.url).project_lis;
			var ret = byIdGetData(id,project_lis)
			if(data){
				List_contentbusiness(data);
				List_detailbusiness_project(ret)
			}else {
				get_progress_data(id,function(data){

					list_data.set(url,data);
					List_contentbusiness(data)
					List_detailbusiness_project(ret)
				});
				// list_server.getList_content(url,function (data){
				// 	list_data.set(url,data);
				// 	List_contentbusiness(data)
				// 	List_detailbusiness_project(ret)
				// })
			}
		})

		list_content.bindevent(function(id){

			var project=list_project.getCurrentProject();
			
			var projectid = project.attr("data-id");
			
			var url = list_content.url+"?id="+projectid;
		
			var content_trs = list_data.get(url).content_trs;

			var ret = byIdGetData(id,content_trs)

			List_detailbusiness_content(ret);
		})
		list_detail.bindevent(function(target){
			if($(target).parents().hasClass("main-project")){
				var project=list_project.getCurrentProject();
				var projectid = project.attr("data-id");
				if($(target).parents().hasClass("task-management")){
					list_detail.projectTask(projectid);
				}else {
					list_detail.projectDes(projectid);
				}
			}else{
				var content=list_content.getCurrentContent();
				var contentid = content.attr("data-id");
				list_detail.contentTask(contentid);
				
			}
		})
		// list_menu.bindevent(function(){
		// 	var ret = [];
		// 	$("input[type='checkbox']:checkbox:checked",list_content.selecter.find('tbody')[0]).each(function(){
		// 		ret.push($(this).parent().parent().attr("data-id")||1)
		// 	})
		// 	return ret;
		// })
	
}
window.PTLAPP = PTLAPP;
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
	/*
	*存储dom变量
	*/
	var list_data = this.dependents['List_data'];
	var list_project = this.dependents['List_project'];
	var list_content = this.dependents['List_content'];
	var list_detail = this.dependents['List_detail'];

	var list_page =this.dependents['List_page'];
	var list_menu =this.dependents['List_menu'];
	function getTemplate(module,templateName){
		console.log(module)
		return self.dependents[module][templateName];
	}
	function byIdGetData(id,data){
		var project_lis = data;
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
	var selects,search;
	function getParameter(page,ispage){
		
		var currProject = list_project.getCurrentProject();
		var filter = {};
		selects.each(function(index, domEle){
			var opt =  $(this).find("option:selected");
			var name = $(this).attr("data-name");
			var id = opt.attr("data-id")||1;
			var val = $(this).val();
			if(val == "所有"){
				
			}else{
				filter[name] = id;
			}
		})
		var val = search.val();
		if(val==""||val=="搜索"){

		}else{
			filter[search.attr("data-name")] = "*"+val+"*";
		}
		
		filter[currProject.attr("data-name")] = currProject.attr("data-id");
		
		var parames = {
		   "filter":filter,
		   "page":page
		}
		console.log("list_menubusiness:",parames)
		list_menu.get_progress_data(parames,function(data){
			list_content
				.render(getTemplate("List_menu","template")||templates.cl_List_content,data);
			List_contentbusiness(data);
		//	list_menubusiness(data)
			if(!ispage){
				list_page.index = 0;
				list_pagebusiness(data)
			}
		
			
		})
	}
	function list_menubusiness(data){
		list_menu
			.render(getTemplate("List_menu","template")||templates.cl_List_menu,data);
			selects = list_menu.selecter.find("select");
			search = list_menu.selecter.find(".search-query");
			var collect = list_menu.selecter.find(".btn-small");
			var submit = list_menu.selecter.find(".submit");

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
				if(val&&val!='搜索'){
					getParameter(1)
					
				}else{
					alert("请输入要查询的值，如：子分类一 ")
				}
			});
		   collect.click(function(e){
				var ret = [];
				
				$("input[type='checkbox']:checkbox:checked",list_content.selecter.find('tbody')[0]).each(function(){
					ret.push($(this).parent().parent().attr("data-uid")||1)
				})
				if(!ret.length){
					alert('你没有选中的项')
				}else {
					
					list_menu.collect&&list_menu.collect(ret);
				}
				
			})
			
			selects.bind('change',function(){
				getParameter(1)
			});
	}
	function list_pagebusiness(data){
		list_page
			.render(data);
	}
	function list_projectbusiness(data){
	
		list_project
			.render(getTemplate("List_project","template")||templates.cl_List_project,data)
			$('.content-bd aside .cat-list li:has(ol)').addClass('hasmenu unfold');
			$('.content-bd aside .cat-list li h4').wrap('<div class="wraparea" />');
			$('.content-bd aside .cat-list li:has(ol) > .wraparea').append("<div class='hitarea'></div>");
			auto(list_project.selecter.find("h4")[0])
	}
	function List_contentbusiness(data){

		list_content
			.render(getTemplate("List_content","template")||templates.cl_List_content,data)
			
	}
	function List_detailbusiness_content(data){

		list_detail
			.render_content(getTemplate("List_detail","template").content||templates.cl_List_detail.content,data)
	}
	function auto(target){
		list_detail.selecter.html("");
		var id = target.getAttribute("data-id");
		if($(target).hasClass("active")){

		}else{
			list_project.selecter.find(".active").removeClass("active");
			$(target).addClass("active");
		};
		var url = list_content.url+"?id="+id;
		var get_progress_data = list_content.get_progress_data;
		var data = list_data.get(url);

		// var project_lis = list_data.get(list_project.url).project_lis;
		// var ret =byIdGetData(id,project_lis)
		//if(data){
		//	List_contentbusiness(data);
		//	list_menubusiness(data)
		//	list_pagebusiness(data)
			//List_detailbusiness_project(ret)
		//}else {
			get_progress_data(id,function(data){

				list_data.set(url,data);
				List_contentbusiness(data)
				list_menubusiness(data)
				list_page.index = 0;
				list_pagebusiness(data)
				//List_detailbusiness_project(ret)
			});
		//}	

		if(list_project.project_click)list_project.project_click(id);
	}
	list_project.bindevent([
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
			tag:"DIV",
			filter:function(target){
				if($(target).hasClass("hitarea")){
					return true;
				}else{
					return false;
				}
			},
			success:function(target){
				$(target).parent('.wraparea').parent('li:has(ol)').toggleClass('unfold');
				$(target).parent('.wraparea').parent('li:has(ol)').children('ol').slideToggle('fast');
			},
			failed:function(){

			}
		}
	])
	list_content.bindevent([
		{
			tag:"INPUT",
			filter:function(target){
				return true;
			},
			success:function(target){
				
				if($(target).parent().parent().parent()[0].tagName=="THEAD"){

					if($(target).attr("checked")) {
						$("input[type='checkbox']",list_content.selecter.find('tbody')[0]).attr("checked","true"); 
					}else{
						$("input[type='checkbox']",list_content.selecter.find('tbody')[0]).removeAttr("checked"); 
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
				var project=list_project.getCurrentProject();
			
				var projectid = project.attr("data-id");
				
				var url = list_content.url+"?id="+projectid;
			
				var content_trs = list_data.get(url).content_trs;

				var ret = byIdGetData(id,content_trs)
				List_detailbusiness_content(ret);
				if(list_content.progress_click)list_content.progress_click(id);
				
			},
			failed:function(){

			}
		}
	])



	list_detail.bindevent([
		{
			tag:"BUTTON",
			filter:function(target){
				return true;
			},
			success:function(target){
				
				// if($(target).parents().hasClass("main-project")){
				// 	var project=list_project.getCurrentProject();
				// 	var projectid = project.attr("data-id");
				// 	if($(target).parents().hasClass("task-management")){
				// 		list_detail.projectTask(projectid);
				// 	}else {
				// 		list_detail.projectDes(projectid);
				// 	}
				// }else{
				// 	var content=list_content.getCurrentContent();
				// 	var contentid = content.attr("data-id");
				// 	list_detail.contentTask(contentid);
					
				// }
				
			},
			failed:function(){

			}

			
		},
		{
			tag:"DIV",
			filter:function(target){
				if( $(target).hasClass("mod-hd")){
					return true;
				}else{
					return false;
				}
			},
			success:function(target){
				
				// if($(target).parent().hasClass("main-project")){
				// 	$('.main-project').find(".mod-bd").show();	
				// 	$('.related-mod').find(".mod-bd").hide();	
				// }else{
				// 	$('.main-project').find(".mod-bd").hide();	
				// 	$('.related-mod').find(".mod-bd").show();	
				// };
				
			},
			failed:function(){

			}

			
		}
	])
	list_menu.bindevent([
		{
			tag:"BUTTON",
			filter:function(target){
				return true;
			},
			success:function(target){

				// if($(target).hasClass("startup-project")){
				// 	list_menu.startupProject&&list_menu.startupProject()
				// }else{
				// 	list_menu.projectGroup&&list_menu.projectGroup()
				// };
				
			},
			failed:function(){

			}

			
		}
		
		
	])
	list_page.bindevent([
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
					getParameter(no,true)
				}
				if(rel&&list_page[rel]){
					list_page[rel](target);
				}else if(rel=="goto"){
					goto(target);
				}
			},
			failed:function(){

			}

			
		},

	])
	if("入口"){
		
		var url = list_project.url;
		var get_project_data = list_project.get_project_data;
		//var data = list_data.get(url);
		//if(data){
		//	list_projectbusiness(data)
		//}else {
			get_project_data(function (data){

				list_data.set(url,data);

				list_projectbusiness(data)

			})
			
			
		//}
	}

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
/*-----end-------*/
/*
*eg
	var gPMLAPP = new PMLAPP({})
*/

})(jQuery,window,undefined);});


var projectUrl = "categories.json";
var contentUrl = "unitslist_bg.json";

function List_server() {

}
List_server.prototype = {
	getJson: function(url,opt, callback) {
		$.getJSON(url, opt,function(data) {


			callback(data);
		});
	},
	getList_project: function(url, optcallback) {

		this.getJson(url, function(data) {

			callback(data)
		})

	},
	getList_content: function(url, callback) {
		this.getJson(url, function(data) {

			callback(data)
		})
	}

}
var gServer = new List_server();
function clt_list_project_get_project_data(callback){
	console.log('clt_list_project_get_project_data');
	var ret = {
		msg: "success",
		code: 200,
		data: [

			{
				title: "UI设计方案1",
				children: [],
				id: "1"
			},
			 {
				title: "UI设计方案2",
				children: [],
				id: "2"
			}, 
			{
				title: "UI设计方案3",
				children: [
					{
						title: "C9191飞行手册",
						children: [],
						id: "3"

					}, {
						title: "参考资料",
						children: [],
						id: "4"
					}, {
						title: "课件",
						children: [],
						id: "5"
					}, {
						title: "飞行培训教材",
						children: [],
						id: "6"
					}
				],
				id: "7"
			}
		],
		
		"selects":[
			{
				name:"creater",
				option:[
					{
						id:"1",
						value:"1"

					},
					{
						id:"2",
						value:"2"

					}
				]
			},
			{
				name:"status",
				option:[
					{
						id:"1",
						value:"1"

					},
					{
						id:"2",
						value:"2"

					}
				]
			},
			{
				name:"update",
				option:[
					{
						id:"1",
						value:"1"

					},
					{
						id:"2",
						value:"2"

					}
				]
			}
		]
	}
	// callback(ret);
	gServer.getJson(projectUrl, function(data) {
	 	console.log("projectUrl")
	 	console.log(data)
	 	callback(data.data)
	})

}
function clt_List_content_get_progress_data(id,callback){
	console.log('clt_List_content_get_progress_data');
	console.log('id:'+id);
	
	var ret = {
		"numpages":14,
		"sum":275,
		"data":{
			results:[
				{
					"revision": "4",
					"numberId": "3",
					"review_state": "published",
					"status": "已发布",
					"id": 1,
					"title": "ATA28燃油系统R1",
					"picture": "../public/res_thumb_01.jpg",
					"bigpicture": "../public/res_thumb_02.jpg",
					"operationalitems": [
						{
							"id": "active",
							"name": "查看"
						},
						{
							"id": "close",
							"name": "预览"
						}
					],
					"created": "2012-05-15",
					"description": "概要",
					"updatecontent": "更新内容",
					"update": 1,
					"creator": "LXH"
				}
			]
		}
	}
	
	// callback(ret);
	var url = contentUrl+"?filter={\"type_categorized\":\""+id+"\"}";
	console.log(url)
	gServer.getJson(contentUrl+"?filter={\"type_categorized\":\""+id+"\"}", function(data) {
		
	 	console.log(data)
	 	callback(data.data)
	})
}
function clt_List_menu_get_progress_data(opt,callback){
	console.log("clt_List_menu_get_progress_data")
	console.log(opt)
	var ret = {
		"numpages":14,
		"sum":275,
		"data":{
			results:[
				{
					"revision": "4",
					"numberId": "3",
					"review_state": "published",
					"status": "已发布",
					"id": 1,
					"title": "ATA28燃油系统R1",
					"picture": "../public/res_thumb_01.jpg",
					"bigpicture": "../public/res_thumb_02.jpg",
					"operationalitems": [
						{
							"id": "active",
							"name": "查看"
						},
						{
							"id": "close",
							"name": "预览"
						}
					],
					"created": "2012-05-15",
					"description": "概要",
					"updatecontent": "更新内容",
					"update": 1,
					"creator": "LXH"
				}
			]
		}
	}
	//callback(ret);
	
	gServer.getJson(contentUrl+opt,function(data) {
		console.log("clt_List_menu_get_progress_data")
		console.log(data)
		callback(data.data)
	})
}
function clt_List_page_get_progress_data(opt,callback){
	console.log("clt_List_page_get_progress_data")
	console.log(opt)
	var ret = {
		"numpages":14,
		"sum":275,
		"data":{
			results:[
				{
					"revision": "4",
					"numberId": "3",
					"review_state": "published",
					"status": "已发布",
					"id": 1,
					"title": "ATA28燃油系统R1",
					"picture": "../public/res_thumb_01.jpg",
					"bigpicture": "../public/res_thumb_02.jpg",
					"operationalitems": [
						{
							"id": "active",
							"name": "查看"
						},
						{
							"id": "close",
							"name": "预览"
						}
					],
					"created": "2012-05-15",
					"description": "概要",
					"updatecontent": "更新内容",
					"update": 1,
					"creator": "LXH"
				}
			]
		}
	}	
	//callback(ret);
	gServer.getJson(contentUrl+opt, function(data) {
		console.log("contentUrl")
		console.log(data)
		callback(data.data)
	})
};
;$(function(){
	var gCLTAPP = new CLTAPP({
		dependents:{
			"List_project":{
				"options":{
					clickSelecter:'h3',
					get_project_data:function(callback){
						clt_list_project_get_project_data(callback)
					},
					/*
					*hasAll 为'0'时，不显示所有
					*hasALl 不存在或则parseInt()>0时显示所有
					*/
					template:[
						'{{if hasAll}}',
						'{{if parseInt(hasAll)>0}}',
						'<h3 data-id="" data-name="type_categorized"><a href="javascript:void(0);">所有</a></h3>',
						'{{/if}}',
						'{{else}}',
						'<h3 data-id="" data-name="type_categorized"><a href="javascript:void(0);">所有</a></h3>',
						'{{/if}}',
						'{{each(i,item) data}}',
						
						'{{if children}}',
						'{{if children.length>0}}',
						'<div class="cat-list">',
						'<ol>',
						
						'	<li>',
						'		<h3 data-id="${id}" data-name="type_categorized"><a href="javascript:void(0);">${title}</a></h3>',
						'		<ol style="display:none">',
						'		{{each(i,item) children}}',
						'			<li>',
						'			<h3 data-id="${id}" data-name="type_categorized"><a href="javascript:void(0);">${title}</a></h3>',
						'			</li>',
						'		{{/each}}',
						'		</ol>',
						'	</li>',

						
						'</ol>',
						'</div>',
						'{{else}}',
						'<h3 data-id="${id}" data-name="type_categorized"><a href="javascript:void(0);">${title}</a></h3>',
						'{{/if}}',
						'{{else}}',
						'<h3 data-id="${id}" data-name="type_categorized"><a href="javascript:void(0);">${title}</a></h3>',
						'{{/if}}',

						
						'{{/each}}'
						
					].join("")
					
				}

			},
						/*
			*模块名称
			*/
			'List_content':{
				options:{

					get_progress_data:function(id,callback){
						clt_List_content_get_progress_data(id,callback);
					},
					progress_click:function(id){
						//alert("子项目click")

					},
					template:[
						'<thead>',
						'  <tr>',
						'    <th scope="col"><input type="checkbox"></th>',
						'    <th scope="col" colspan=2>标题</th>',
						'    <th scope="col" width="20%">创建时间</th>',
						'    <th scope="col" width="12%">创建者</th>',
						'    <th scope="col" width="12%">状态</th>',
						'    <th scope="col" width="12%">更新</th>',
						'  </tr>',
						'</thead>',
						'{{each(i,item) data.results}}',
				        '  <tr class="${review_state}" data-id="${id}">',
				        '   <td><input type="checkbox"></td>',
				        '	<td><span class="thumb"><img src="${picture}" alt=""></span></td>',
				        '   <td><div class="action-td"><span class="title">${title}</span>',
				        '	{{if operationalitems.length}}',
						// '      <div class="action items4" style="width:${operationalitems.length*60}px;">',
						'		<div class="action"><ul>',
						'		{{each(n,name) operationalitems}}',
                        '        		<li><a href="${url}/${id}" data-id="${id}">${name}</a></li>',
						'		{{/each}}',
                        '    	</ul></div>',
						// '		{{each(n,name) operationalitems}}',
						// '			{{if n == operationalitems.length-1}}',
						// '				<a href="${url}/${id}" data-id="${id}">${name}</a>',
						// '			{{else}}',
						// '				<a href="${url}/${id}" data-id="${id}">${name}</a> ｜ ',
						// '    		{{/if}}',
						// '		{{/each}}',
						// '	   </div>',
						'	{{/if}}',
				        '    </div></td>',
				        '    <td>${created}</td>',
						'    <td>${creator}</td>',
						'    <td><span class="published">${globaldict_lookup(status)}</span></td>',
						'    <td><span class="update">${update}</span></td>',
				        '  </tr>',
				        '{{/each}}',
				    	'</tbody>',
					].join("")
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
					
					get_progress_data:function(opt,callback){
						clt_List_page_get_progress_data(opt,callback);
					},
					template:[
						'<ul>',
						'	<li class="disabled"><a href="#">← prev</a></li>',
						'	<li class="active"><a href="#">1</a></li>',
						'	<li><a href="#">2</a></li>',
						'	<li><a href="#">3</a></li>',
						'	<li><a href="#">4</a></li>',
						'	<li><a href="#">5</a></li>',
						'	<li><a href="#">next →</a></li>',
						'</ul>'

					].join("")
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
					
					get_progress_data:function(opt,callback){
						clt_List_menu_get_progress_data(opt,callback);
					},
					
					collect:function(opt){
						alert('你选中的项为：'+opt.join(","))
					},
				
					template:[
				        '<h3>教材查询</h3>',
				        '<form class="search">',
				        '  <input data-name="SearchableText" type="text" value="搜索" class="input-medium search-query">',
				        '  <button class="btn submit" type="button"><i class="icon-search"></i></button>',
				        '</form>',
				        // '<button class="btn btn-small" type="button" style="left:480px;"><i class="icon-star"></i> 收藏选中的内容</button>',
				        '	{{each(n,name) selects}}',
				        '	<select style="right:${n*90}px;" data-name="${name}">',
				        '   <option data-id="">所有</option>',
				        '	{{each(n,name) option}}',
				        '   <option data-id="${id}">${value}</option>',
				        '	{{/each}}',
				        '	</select>',
				        '	{{/each}}'
				    ].join("")
				}

			},
			'List_detail':{

				/*
				*模块初始化需要的参数
				*/
				options:{
					template:{
						content:[
							'<div class="mod related-mod">',
							'  <div class="mod-hd">教材信息</div>',
							'  <div class="mod-bd">',
							'   <dl>',
							'    <dd>',
							'    <ul>',
							'      	<li class="cover book-cover"><img src="${picture}" alt=""></li>',
							
							'         <li>名称：<a href="javascript:void(0);">${title}</a></li>',
							'         <li>编号：<a href="javascript:void(0);">${numberId}</a></li>',
							'         <li>修订：<a href="javascript:void(0);">${revision}</a></li>',
							'         <li>创建者：<a href="javascript:void(0);">${creator}</a></li>',
							'    </ul>',
							'   </dd>',
							'   </dl>',
							'   <dl>',
                  					'    <dt>概要</dt>',
                  					'    <dd>',
							'     <p>${description}</p>',
							'    </dd>',
							'   </dl>',
							'  </div>',
							'</div>'
						].join("")
					}
				}

			}
				
		}
	})
});


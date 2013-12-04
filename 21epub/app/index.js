
epub.app(function(){
	epub["import"]('epub.modules.tree@1.0');
	epub["import"]('epub.modules.grid@1.0');
	epub["import"]('epub.modules.detail@1.0');
	epub["import"]('epub.modules.menu@2.0');

	
	function tree_data(callback){
		var ret = {
			data:[ 

			{
				title: "UI设计方案1",
				children: [],
				id: "1",
				name:"S1"
			},
			{
				title: "UI设计方案2",
				children: [],
				id: "2",
				name:"S2"
			},
			{
				title: "UI设计方案3",
				children: [
					{
						title: "C9191飞行手册",
						children: [],
						id: "3",
						name:"S3"

					},
					{
						title: "参考资料",
						children: [],
						id: "4",
						name:"S3"
					},
					{
						title: "课件",
						children: [],
						id: "5",
						name:"S3"
					},
					{
						title: "飞行培训教材",
						children: [],
						id: "6",
						name:"S3"
					}
				],
				id: "7",
				name:"S3"
			}
		]}
		callback(ret);
	}
	function grid_data(callback){
		var ret = {
			"row":14,
			"sum":275,
			"data":[
				{
					"classname":"published",
					"status":"已发布",
					"id":1,
					"title":"ATA28燃油系统R1",
					"src":"../public/res_thumb_01.jpg",
					"cover":"../public/res_thumb_02.jpg",
					
					"operationalitems":[
						{
							"id":"active",
							"name":"查看"
						},
						{
							"id":"close",
							"name":"预览"
						}
					],
					"time":"2012-05-15",
					"roles":{
						"名称":"ATA28燃油系统R1",
						"编号":"SF012"
					},
					"sumary":"概要",
					"updatecontent":"更新内容",
					"update":1,
					"creater":"LXH"
				},
				{
					"classname":"draft",
					"status":"草稿",
					"id":2,
					"title":"ATA28燃油系统R2",
					"src":"../public/res_thumb_01.jpg",
					"cover":"../public/res_thumb_02.jpg",
					"operationalitems":[
						{
							"id":"active",
							"name":"查看"
						},
						{
							"id":"close",
							"name":"预览"
						}
					],
					"time":"2012-05-15",
					"roles":{
						"名称":"ATA28燃油系统R1",
						"编号":"SF012"
					},
					"sumary":"概要",
					"updatecontent":"更新内容",
					"update":1,
					"creater":"LXH"
				},
				{
					"classname":"checking",
					"status":"初稿",
					"id":3,
					"title":"ATA28燃油系统R3",
					"src":"../public/res_thumb_01.jpg",
					"cover":"../public/res_thumb_02.jpg",
					"operationalitems":[
						{
							"id":"active",
							"name":"查看"
						},
						{
							"id":"close",
							"name":"预览"
						}
					],
					"time":"2012-05-15",
					"roles":{
						"名称":"ATA28燃油系统R1",
						"编号":"SF012"
					},
					"sumary":"概要",
					"updatecontent":"更新内容",
					"update":1,
					"creater":"LXH"
				}
			]
		}
		callback(ret);
	}
	$(function(){
		$('#JS_tree').tree({
			"get_data":function(callback){
				tree_data(callback);
			},
			template:[
				'{{each(i,item) data}}',

				'{{if children.length}}',
				'<div class="cat-list">',
				'<ol>',
				'{{if children.length>0}}',
				'	<li class="hasmenu">',
				'{{else}}',
				'	<li>',
				'{{/if}}',
				'		<div class="wraparea"><h4 data-id="${id}" data-name="${name}" data-role="menu" ',

				'><a href="javascript:void(0);">${title}</a></h4>',
				
				'{{if children.length>0}}',
				'	<div class="hitarea"></div>',
				'{{else}}',
				'{{/if}}',
				'</div>',
				'		<ol>',
				'		{{each(i,item) children}}',
				'			<li>',
				'			<div class="wraparea"><h4 data-id="${id}" data-name="${name}" data-role="menu" ><a href="javascript:void(0);">${title}</a></h4></div>',
				'			</li>',
				'		{{/each}}',
				'		</ol>',
				'	</li>',

				
				'</ol>',
				'</div>',
				'{{else}}',
				'<h4 data-id="${id}" data-name="${name}" data-role="menu" ><a href="javascript:void(0);">${title}</a></h4>',
				'{{/if}}',
				'{{/each}}'
				
			].join(""),
			click_selecter: "h4",
			item_click:function(){
				console.log('item_click')
			}
		})
		$('#JS_grid').grid({
			"get_data":function(callback){
				grid_data(callback);
			},
			template:[
				'<table cellspacing="0" class="hascheckbox" id="JS_list_content">',
				'<thead>',
				'  <tr>',
				'    <th scope="col"><input type="checkbox"></th>',
				'    <th scope="col">标题</th>',
				'    <th scope="col" width="20%">创建时间</th>',
				'    <th scope="col" width="12%">创建者</th>',
				'    <th scope="col" width="12%">状态</th>',
				'    <th scope="col" width="12%">更新</th>',
				'  </tr>',
				'</thead>',
				'{{each(i,item) data}}',
		        '  <tr class="${classname}" data-id="${id}">',
		        '    <td><input type="checkbox"></td>',
		        '    <td><div class="action-td"><span class="thumb"><img src="${src}" alt=""></span><span class="title">${title}</span>',
		  //       '	{{if operationalitems.length}}',
				// '      <div class="action items4">',
				// '		{{each(n,name) operationalitems}}',
				// '			{{if n == operationalitems.length-1}}',
				// '				<a href="javascript:void(0);" data-id="${id}">${name}</a>',
				// '			{{else}}',
				// '				<a href="javascript:void(0);" data-id="${id}">${name}</a> ｜ ',
				// '    		{{/if}}',
				// '		{{/each}}',
				// '	   </div>',
				// '	{{/if}}',
		        '    </div></td>',
		        '    <td>${time}</td>',
				'    <td>${creater}</td>',
				'    <td><span class="published">${status}</span></td>',
				'    <td><span class="update">${update}</span></td>',
		        '  </tr>',
		        '{{/each}}',
		    	'</tbody>',
		    	'</table>'
			].join(""),
			click_selecter: "tr",
			item_click:function(){
				console.log('item_click')
			},
			showPage:true
		})
		$('#JS_detail').detail({
			"get_data":function(callback){
				grid_data(callback);
			},
			template:[
				'<div class="mod related-mod">',
				'  <div class="mod-hd">组件信息</div>',
				'  <div class="mod-bd">',
				'    <ul>',
				'      	<li class="cover"><img src="${cover}" alt=""></li>',
				'		{{each roles}}',
				'         <li>${$index}：<a href="javascript:void(0);">${$value}</a></li>',
				'		{{/each}}',
				'    </ul>',
				'    <h3>概要</h3>',
				'    <p>${sumary}</p>',
				'    <h3>更新内容</h3>',
				'    ${updatecontent}',
				'  </div>',
				'</div>'
			].join("")
		})
		$('#JS_filter').detail({
			"get_data":function(callback){
				tree_data(callback);
			},
			template:[
				'<h3>全部${sum}个组件</h3>',
		        '<form class="search">',
		        '  <input data-name="SearchableText" type="text" value="搜索" class="input-medium search-query">',
		        '  <button class="btn submit" type="button"><i class="icon-search"></i></button>',
		        '</form>',
		        '<button class="btn btn-small" type="button" style="left:480px;"><i class="icon-star"></i> 收藏选中的内容</button>',
		        '	{{each(n,name) selects}}',
		        '	<select style="right:${n*90}px;" data-name="${name}">',
		        '   <option data-id="">所有</option>',
		        '	{{each(n,name) option}}',
		        '   <option data-id="${id}">${value}</option>',
		        '	{{/each}}',
		        '	</select>',
		        '	{{/each}}'
			].join("")
		})
		$('body').menu({
			template:[
				'<ul class="menu" id="menu-top-navigation">',
  				'	<li class="menu-item  has-sub-menu">',
				'        <a href="###">增加</a>',
				'        <ul class="sub-menu">',
				'          	<li class="menu-item">',
				'                <a href="###">增加1</a>',
				'            </li>',
				'            <li class="menu-item has-sub-menu">',
				'                <a href="###">增加2</a>',
				'                <ul class="sub-menu">',
				'                   <li class="menu-item has-sub-menu">',
				'                        <a href="###">增加1.1</a>',
				'                        <ul class="sub-menu">',
				'                            <li class="menu-item">',
				'                                <a href="###">增加1.1.1</a>',
				'                            </li>',
				'                            <li class="menu-item">',
				'                                <a href="###">增加1.1.2</a>',
				'                            </li>',
				'                        </ul>',
				'                    </li>',
				'                    <li class="menu-item">',
				'                        <a href="###">增加1.2</a>',
				'                    </li>',
				'                </ul>',
				'            </li>',
				'         </ul>',
				'    </li>',
				' </ul>'
			].join("")
		})
	});	
})
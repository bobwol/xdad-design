
(function(win){
	win.category={
		sortable:function(callback){
			$('.ui-layout-center-bd .list-content').sortable({
				handle:'div.btn-draged',
				items:'li.content-item',
				axis:"y",
				helper:'clone',
				forceHelperSize:true,
				placeholder:'ui-sortable-placehoder',
				//forcePlaceholderSize: true,
				forceHelperSize: false,
				dropOnEmpty:true,
				start:function(event,ui){
					startposition = ui.item.prevAll().length + 1;
					function bindsort(event){
						if(event.type=='mouseover'){
							if($(event.currentTarget).parents('.content-item').first().hasClass('ui-sortable-helper')) return false;
							$(event.currentTarget).parents('.content-item').first().addClass('current');
							$(event.currentTarget).parents('.content-item').first().children().children('h4').addClass('ui-sortable-hover');
							$('.ui-layout-center-bd .list-content').find('li.ui-sortable-placehoder').css('visibility','hidden');
						}
						else{
							if($(event.currentTarget).parents('.content-item').first().hasClass('ui-sortable-helper')) return false;
							$(event.currentTarget).parents('.content-item').first().removeClass('current');
							$(event.currentTarget).parents('.content-item').first().children().children('h4').removeClass('ui-sortable-hover');
							$('.ui-layout-center-bd .list-content').find('li.ui-sortable-placehoder').css('visibility','visible');
						}						
					}
					$('.ui-layout-center-bd .list-content').find('li.content-item').children('div').children('.btn-draged').bind('mouseover mouseout',bindsort);
				},
				stop:function(event,ui){
					$('.ui-layout-center-bd .list-content').find('li.content-item .btn-draged').each(function(){
						$(this).unbind('mouseover mouseout');
					})		
		        	if($('.ui-layout-center-bd .list-content').find('.current').length>0){
		        		category.move($(ui.item).attr('id'),$('.ui-layout-center-bd .list-content').find('.current').first().attr('id'));
		        		$('.ui-layout-center-bd .list-content').find('.current').children().children('h4').removeClass('ui-sortable-hover');
		        		$('.ui-layout-center-bd .list-content').find('.current').removeClass('current');
		        	}
		        	var id=$(ui.item).attr('id');
		        	if(category.checkdom(id)) callback();
		        	else{
		        		global.throwerror('排序错误');
		        		$('.ui-layout-center-bd .list-content').empty();
		        		category.list_model.iview.render_tree();
		        	};	
					//$('.ui-layout-center-bd .list-content').find('li.content-item.empty').remove();				
				},
		        update: function(event, ui) {
					if(startposition!=-1){
						var delta=(ui.item.prevAll().length + 1)-startposition;
						id=$(ui.item).attr('id');
						//callback(id);
						//var iHandlemodel=iElementlist.get(id);
						//iHandlemodel.trigger('dom_sort',delta);
					}
		        },
		        sort:function(event,ui){
		        	//console.info($(event.ralatedTarget));
		        }	
			});
		},
		move:function(sourceid,destid){
			$dest=$('.ui-layout-center-bd .list-content').find('[id="'+destid+'"]');
			$source=$('.ui-layout-center-bd .list-content').find('[id="'+sourceid+'"]');
			if($dest.children('ul').length==0) $dest.append('<ul></ul>');
			$dest.children('ul').append($source.clone());
			$source.remove();
		},
		checkdom:function(id){
			// var dom=$('.ui-layout-center-bd .list-content').find('[id="'+id+'"]');
			// var domtype=dom.attr('data-type');
			// var parent=dom.parents('li.content-item').first();
			// if(domtype=='Column'){
				// if(parent.length==0) return true;
				// else return false;
			// } 
			// if(domtype=="Category"){
				// if(parent.length==0) return false;
				// else{
					// parenttype=parent.attr('data-type');
					// if(parenttype=='Column'||parenttype=='Category') return true;
					// else return false;
				// }
			// }
			// if(parent.length==0) return false;
			// else if(parent.attr('data-type')=='Category'||parent.attr('data-type')=='Column') return true;
			// return false;
			return true;
		},
		renderinfo:function(id){
			var model=global.model.getModelById(category.list_model,id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		}
	};
})(window);
(function(category){
	category.categories=function(type,callback){
		var url=portal_url+'categories.json?type='+type;
		global.json.load(url,callback);
	};
	category.categoriesforlist=function(callback){
		var url=portal_url+'categories.json?source=manage';
		global.json.load(url,callback);
	};
	category.categoriesforinsert=function(callback){
		var url=portal_url+'categories.json?source=insert';
		global.json.load(url,callback);		
	};
	category.setcategories=function(callback){
		global.model.save(category.list_model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				if(callback) callback();
			}
		});
	}
	category.add_category=function(data){
		var parentid=data.id;
		data.id=global.getUniqueId(category.list_model,'category_');
		data.thumbnail=data.thumbnail&&unescape(data.thumbnail);
		data.picture=data.picture&&unescape(data.picture);
		if(parentid=="") var model=category.list_model;
		else var model=global.model.getModelById(category.list_model,parentid);
		model.icollection.add(data);
	};
	category.edit_category=function(data){
		var id=data.id;
		data.thumbnail=data.thumbnail&&unescape(data.thumbnail);
		data.picture=data.picture&&unescape(data.picture);
		var model=global.model.getModelById(category.list_model,id);
		delete data.id;
		model.set(data);
	};
	category.update=function(data){
		if(category.list_model.current){
			var model=global.model.getModelById(category.list_model,category.list_model.current);
			model.set(data);
			$(category.list_model.el).find('.content-item[id="'+category.list_model.current+'"]').addClass('active');
		}
	};
})(category);
(function(category){
	category.template=_.template(
		[
  '            <li id=<%=id%>>',
'					<div class="wraparea">',
   '            		 <h4><a href="#"><%=title%></a></h4>',
    '					<div class="hitarea"></div>',
 '              		<% if(!_.isEmpty(actions)){ %>',
 '              		<div class="action-new">',
 '              			<a href="javascript:void(0)">新建</a>',
 '              			<ul style="top: 20px; display: none;">',
 '              				<% _.each(actions,function(action){ %>',
 '              				<li><a href=<%=portal_url+"createfactory?Type="+action.id+"&id="+id%>><%=action.title%></a></li>',
 '              				<%   }) %>',
 '              			</ul>',
 '              		</div>',
 '              		<% } %>',
   '				</div>',
 '			 </li>'
		].join("")
	);
	category.list_template=_.template(
		[
	  '  <li class="content-item" id=<%=id%>>',
 '	        <div class="wraparea">',
 '	        	<h4><%=title%></h4>',
 '				<div class="hitarea"></div>',
 '	        	<div rel="tooltip" class="btn-draged" data-original-title="上下拖拽">',
 '	        	</div>',
 '	        	<div class="action-pub">',
	 '        		<a href="#" data-original-title="">操作</a>',
	  '       	</div>',
	   '      	<div class="action">',
	    '     		<ul>',
 '	        			<li><a class="action-edit" href="#">编辑</a></li>',
	  '       			<li><a href="#" class="action-addCategory">添加子分类</a></li>',
	      '  	 		<li><a href="#confirmModal" class="action-delete">删除</a></li>',
	        	 '	</ul>',
	     '    	</div>',
	   '      </div>',
	 '   </li>',
		].join("")
	);
	category.edit_template=_.template(
		[
'		  <div class="modal-header">',
'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'		    <h3>新建／编辑分类名称</h3>',
'		  </div>',
'		    <form class="form-horizontal" onsubmit="javascript:return false;">',
'		  <div class="modal-body">',
'		      <div class="control-group">',
'		        <label class="control-label" for="title"><em>*</em> 标题：</label>',
'		        <div class="controls">',
'		          <input type="text" id="title" name="title" value="<%=title%>">',
'		          <input type="hidden" id="id" name="id" value="<%=id%>">',
'		          <input type="hidden" id="thumbnail" name="thumbnail" value="<%=thumbnail&&escape(thumbnail)%>">',
'		          <input type="hidden" id="picture" name="picture" value="<%=picture&&escape(picture)%>">',
'		        </div>',
'		      </div>',
'		      <div class="control-group thumb">',
'		        <label class="control-label">缩略图：</label>',
'		        <div class="controls">',
'		          <div class="action">',
'		            <a class="btn btn-small action-change" type="button">设置</a>',
'		            <!--<input name="" type="file">--> ',
'		          </div>',
'		          <div class="cover"><img src="<%=thumbnail%>" alt=""></div>',
'		        </div>',
'		      </div>',
'		      <div class="control-group">',
'		        <label class="control-label" for="description">描述：</label>',
'		        <div class="controls">',
'		          <textarea rows="4" name="description" id="description"><%=description%></textarea>',
'		        </div>',
'		      </div>',
'		  </div>',
'		  <div class="modal-footer">',
'		    <button class="btn">确定</button>',
'		  </div>',
'		    </form>',
		 ].join("")
	);
	category.modal_template=_.template(
		[
'	  <div class="modal-header">',
'	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'	    <h3>资源库</h3>',
//'	    <button class="btn btn-small btn-primary action-copy" type="button">复制所选</button>',
'	    <button class="btn btn-small btn-primary action-quote-categories action-quote" type="button">引入所选</button>',
//'	    <form class="search" style="position:absolute; left:auto; right:20px; top:5px;">',
//'	      <input type="text" placeholder="搜索" class="input-medium search-query">',
//'	      <button class="btn" type="submit"><i class="icon-search"></i></button>',
//'	    </form>',
//'	    <button class="btn btn-small action-fav" type="button" style="position:absolute; right:205px; top:5px;"><i class="icon-star"></i> 收藏</button>',
'	  </div>',
'	  <div class="modal-body"></div>',
		].join("")
	);
})(category);
var icategoryModel=iAppModel.extend({
	defaults:{
		title:null,
		children:[],
		review_state:'private',
		creator:'',
		type:'Category',
	 	thumbnail: null,
	 	picture:null,
	 	description:null,
		category_support:{
			values:[]
		},
		properties:	["channels","category_support", "category_settings"],
		category_settings:{
			appended:true,
			showcontents:false
		},
		channels:{
			values:['ipad','web'],
			ipad_option:1,
			web_option:1
		},
	    type_categorized: null,
	    actions:[]
	},
	el:'#material_list .list-tree',
	wrap:'ul',
	setcollection:function(){
		this.icollection=new icategoryCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new icategoryView({model:this});
	},
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		var url;
		if(method=='update'){
			url=portal_url+"setcategories?type=material";
		}
		if(this.debug){
			url=url+'?debug=1';
		}
		return url;
		//if(method=='delete'){
		//	options.url=hosturl+this.url+'overlaydelete.json?id='+model.id;
		//}
		//if(method=='read'){
		//	options.url=hosturl+this.url+'overlayget.json?id='+model.id;
		//}
	}
});
var icategoryCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonremove();
	},
	model:icategoryModel
});
var icategoryView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update_tree);
	},
	template:category.template
});
(function(category){
	category.model=new icategoryModel({id:'category',el:'#material_list .list-tree',wrap:'ul',template:category.template});
})(category);

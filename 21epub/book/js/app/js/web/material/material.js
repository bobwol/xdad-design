
(function(win){
	win.material={
		insert:function(id){
			var iHandlemodel=material.model.icollection.get(id);
			var content=iHandlemodel.get('content');
			content=content+"<p><br></p>";
			tEditor.insert(content);
		},
		photogallery_insert:function(ids){
			_.each(ids,function(id){
				var model=material_list.model.icollection.get(id);
				var newmodel=_.clone(model.toJSON());
				newmodel.id=global.getUniqueId(photogallery.model,'photogallery_','');
				if(!photogallery.model.icollection.get(newmodel.id)) {
					photogallery.model.icollection.add(newmodel);
				}
			})
		},
		richtext_insert:function(ids){
			var returned='';
			_.each(ids,function(id){
				var model=material_list.model.icollection.get(id);
				var content=model.get('content');
				returned=returned+content;
			})
			return returned;
		},
		list_load:function(){
			
		},
		photogallery_change:function(id){
			if(photogallery.current){
				var photogallery_model=photogallery.model.icollection.get(photogallery.current);
				var model=material_list.change_model.icollection.get(id);
				var value={};
				value.width=model.toJSON().width;
				value.height=model.toJSON().height;
				value.preview=model.toJSON().preview;
				value.thumbnail=model.toJSON().thumbnail;
				value.thumb_height=model.toJSON().thumb_height;
				value.thumb_width=model.toJSON().thumb_width;
				value.picture=model.toJSON().picture;
				value.uid=model.toJSON().uid;
				photogallery_model.set(value);
				$('.ui-layout-right').html(global.template.photoinfo(photogallery_model.toJSON()));
			}
		},
		category_change:function(id){
			if(category.list_model.current){
				var photogallery_model=photogallery.model.icollection.get(photogallery.current);
				var model=material_list.change_model.icollection.get(id);
				var value={};
				value.width=model.toJSON().width;
				value.height=model.toJSON().height;
				value.preview=model.toJSON().preview;
				value.thumbnail=model.toJSON().thumbnail;
				value.thumb_height=model.toJSON().thumb_height;
				value.thumb_width=model.toJSON().thumb_width;
				value.picture=model.toJSON().picture;
				value.uid=model.toJSON().uid;
				photogallery_model.set(value);
				$('.ui-layout-right').html(global.template.photoinfo(photogallery_model.toJSON()));
			}
		},
		renderinfo:function(id){
			var model=material_list.model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		},
		init_list:function(){
			material.event.init();
			global.modal.create('material_list');
			$('#material_list').html(material.material_list_modal_template);
			global.modal.create_preview_modal('material_preview');			
		},
		init_insert_list:function(){
			material_list.model.query=material.materialslistforinsert;
			filter.list_model.query=filter.material_filterconfig;
			material_list.list=new global.list({
				list_template:global.template.list,
				list_el:'#material_list .modal-body',
				left:{
					el:'#material_list .list-tree',
					model:category.model
				},
				menu:{
					el:'#material_list .list-menu',
					model:filter.list_model,
					template:global.template.list_menu
				},
				right:{
					el:'#material_list .list-content table tbody',
					wrap:null,
					model:material_list.model,
					template:material.list_template
				},
				page:{
					el:'#material_list .list-page',
					model:material_list.model,
					template:global.template.list_page	
				}
			});			
		},
		init_change_list:function(){
			material_list.change_model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:material.change_list_template});
			material_list.model.query=material_list.change_model.query=material.materialslistforinsert;
			filter.list_model.query=filter.material_filterconfig;
			material.change_list=new global.list({
				list_template:global.template.list,
				list_el:'#material_list .modal-body',
				left:{
					el:'#material_list .list-tree',
					model:category.model
				},
				menu:{
					el:'#material_list .list-menu',
					model:filter.list_model,
					template:global.template.list_menu
				},
				right:{
					el:'#material_list .list-content table tbody',
					wrap:null,
					model:material_list.change_model,
				},
				page:{
					el:'#material_list .list-page',
					model:material_list.change_model,
					template:global.template.list_page	
				}
			});
		}
	};
	win.material_list={};
	material.material_list={};
	material.change_list={};
})(window);
(function(material){
	material.materialslistforinsert=function(callback,opt){
		if(!opt) opt="";
		else opt='&'+opt;
		var url=portal_url+'materialslist.json?source=insert'+opt;
		global.json.load(url,callback);
	};
	material.materialslist=function(callback,opt){
		if(!opt) opt="";
		else opt='&'+opt;
		var url=portal_url+'materialslist.json?source=manage'+opt;
		global.json.load(url,callback);
	};
	material.setcategories=function(callback){
		global.model.save(material_list.model,null,function(data){
			if(data.code==200){
				global.message('success',data.msg);
				if(callback) callback();
			}
		});
	};
	material.update=function(data){
		if(material_list.model.current){
			var model=global.model.getModelById(material_list.model,material_list.model.current);
			model.set(data);
			$(material_list.model.el).find('.content-item[id="'+material_list.model.current+'"]').addClass('active');
		}
	};	
	// material.setimages=function(data){
		// var url=context_url+'/setimages';
		// global.model.save(photogallery.model,null,function(data){
			// console.info(data);
		// },true);
		// //global.model.save(url,)
	// };
})(material);
(function(material){
	material.event={
		init:function(){
			//this.onListInsert();
			this.onPreview();
			this.onListPreview();
		},
		onPreview:function(){
			set_click_event('.material_preview',function(){
				var id=$(this).parents('.content-item').first().attr('id');
				var model=material.model.icollection.get(id);
				$('#material_preview').html(global.template.preview(model.toJSON()));	
				$('#material_preview').show();	
				return false;	
			})
		},
		onListPreview:function(){
			set_click_event('.material_list_preview',function(){
				var id=$(this).parent().parent().parent().parent().parent().parent().attr('id');
				var model=material_list.model.icollection.get(id);
				$('#material_preview').html(global.template.preview(model.toJSON()));	
				global.modal.show('#material_preview');	
				return false;	
			})			
		}
	}

})(material);
(function(material){
	material.template=_.template(
		[
	'	     <tr class="content-item <%=review_state%>" id=<%=id%>>',
    '            <td><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 '              		<% _.each(operationalitems,function(action){ %>',
 '              			<li><a class="list-<%=action.id%>" href=<%=url+"/"+action.id%>><%=global.dict.query(action.name)%></a></li>',
 '              		<%   }) %>',
   '                   </ul>',
   '                 </div>',
   '               </div></td>',
    '            <td><%=created%></td>',
    '            <td><%=creator%></td>',
 '               <td><span class="update"><%=global.dict.query(review_state)%></span></td>',
  '           </tr>'
		].join("")
	)
	material.list_template=_.template(
		[
	'	     <tr class="content-item <%=review_state%>" id=<%=id%>>',
    '            <td><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 		'			     <li><a class="material_list_insert" href="#">插入</a></li>',
 // '                      <li><a href="#">查看</a></li>',
   '                     <li><a class="material_list_preview" href="#">预览</a></li>',
  // '                     <li><a class="material_list_addfav" href="#">收藏</a></li>',
  // '                     <li><a href="#">收回</a></li>',
   '                   </ul>',
   '                 </div>',
   '               </div></td>',
    '            <td><%=created%></td>',
    '            <td><%=creator%></td>',
 '               <td><span class="update"><%=review_state%></span></td>',
   '              <td><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
  '           </tr>'
		].join("")
	)
	material.material_list_modal_template=_.template(
		[
'		  <div class="modal-header">',
'		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
'		    <h3>素材库</h3>',
'		    <button class="btn btn-small btn-primary action-upload" type="button" data-target="#upload" data-keyboard="false" data-backdrop="false">上传素材</button>',
'		    <button class="btn btn-small action-insert action-inset" type="button">插入所选</button>',
'	    <form class="search" style="position:absolute; left:auto; right:20px; top:5px;">',
'	      <input type="text" placeholder="搜索" class="input-medium search-query">',
'	      <button class="btn" type="submit"><i class="icon-search"></i></button>',
'	    </form>',
'		  </div>',
'		  <div class="modal-body">',
'		 </div>'
].join("")
	);
	material.pagination_template=_.template(
		[
		'   <ul>',
'              <li class="disabled"><a href="#">«</a></li>',
'              <li class="disabled"><a href="#">‹</a></li>',
'              <li class="active"><a href="#">1</a></li>',
'              <li><a href="#">2</a></li>',
'              <li><a href="#">3</a></li>',
'              <li><a href="#">4</a></li>',
'              <li><a href="#">5</a></li>',
'              <li><a href="#">›</a></li>',
'              <li><a href="#">»</a></li>',
'            </ul>',
		].join("")
	);
	material.change_list_template=_.template(
		[
	'	     <tr class="content-item <%=review_state%>" id=<%=id%>>',
    '            <td><input type="checkbox" name="material_list" value=<%=id%>></td>',
    '             <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
     '            <td><div class="action-td"><span class="title"><%=title%></span>',
    '                <div class="action">',
    '                  <ul>',
 		'			     <li><a class="material_list_change" href="#">替换</a></li>',
  //'                      <li><a href="#">查看</a></li>',
   '                     <li><a class="material_list_preview" href="#">预览</a></li>',
   //'                     <li><a class="material_list_addfav" href="#">收藏</a></li>',
  // '                     <li><a href="#">收回</a></li>',
   '                   </ul>',
   '                 </div>',
   '               </div></td>',
    '            <td><%=created%></td>',
    '            <td><%=creator%></td>',
 '               <td><span class="update"><%=review_state%></span></td>',
  '           </tr>'
		].join("")
	)
})(material);
var iMaterialModel=iAppModel.extend({
	el:'#material_list .list-content table tbody',
	wrap:null,
	setcollection:function(){
		this.icollection=new iMaterialCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iMaterialView({model:this});
	},
	debug:false,
	seturl:function(method){
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		var url;
		if(method=='update'){
			url=portal_url+"saveitems.json";
		}
		if(this.debug){
			url=url+'?debug=1';
		}
		if(method=='delete'){
			return this.get('url')+'/deleteobject';
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
var iMaterialCollection=iAppCollection.extend({
	initialize:function(){
		this.setonaddtree();
		this.setonreset();
		this.setonremove();
	},
	model:iMaterialModel
});
var iMaterialView=iAppView.extend({
	template:material.list_template
});
(function(material){
	material.model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:material.list_template});
	material_list.model=new iMaterialModel({id:'material_list',el:'#material_list .list-content table tbody',wrap:null,template:material.list_template});
	material_list.model.query=material.materialslistforinsert;
})(material);
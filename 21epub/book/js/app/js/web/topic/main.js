var iTopicModel=iAppModel.extend({
	defaults:{
	},
	el:'.list-content table tbody',
	wrap:null,
	setcollection:function(){
		this.icollection=new iTopicCollection();
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	setview:function(){
		this.iview=new iTopicView({model:this});
	},
	seturl:function(method){
		var url;
		
		//if(method=='create'){
		//	options.url=hosturl+this.url+'overlaycreate.json';
		//}
		if(method=='update'){
			return portal_url+'savetopics.json';
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
var iTopicCollection=iAppCollection.extend({
	initialize:function(){
		this.setonadd();
		this.setonreset();
		this.setonremove();
	},
	model:iTopicModel
});
var iTopicView=iAppView.extend({
	initialize:function(options){
		_.bindAll(this);
		this.model.bind('change',this.update);
	},
});
(function(win){
	win.topic={};
	win.topic=$.extend(topic,{
		event:function(){
			
		},
		load:function(callback,opt){
			if(!opt) opt="";
			else opt='&'+opt;
			var url=portal_url+'topicslist.json?source=insert&context_type='+context_type+opt;
			global.json.load(url,callback);
		},
		update:function(data){
			if(topic.model.current){
				var model=global.model.getModelById(topic.model,topic.model.current);
				model.set(data);
				$(topic.model.el).find('.content-item[id="'+topic.model.current+'"]').addClass('active');
			}
		},
		chapter_quote:function(ids){
			_.each(ids,function(id){
				var model=topic.lib_model.icollection.get(id);
				var value=model.toJSON();
				console.log(value);
				value.id=getUniqueId('chapter_');
				chapter_addTopic(value);
			})
		},
		renderinfo:function(id){
			var model=topic.list_model.icollection.get(id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		},
		lib_template:_.template(
			[
	'                <li class="content-item" data-type=<%=type%> id=<%=id%>>',
	'                  <div class="wraparea content"><h4>',
	 '                   <input type="checkbox" name="topic-item" value=<%=id%>>',
	  '                  <%=title%> <% if(description){ %>( <%=description%> )<% } %></h4></div>',
	   '             </li>',
			].join("")
		),
		list_template:_.template(
			[
				'           <tr class="content-item <%=review_state%> <%=type%>" id=<%=id%> data-type="<%=type%>">',
				'               <td><input name="unit-item" type="checkbox" value=<%=id%>></td>',
				'               <td><span class="thumb"><img src=<%=thumbnail%> alt=""></span></td>',
				'	            <td width=""><span class="title"><%=title%></span><span class="desc"><%=description%></span>',
				'	                <div class="action">',
				'	                      <ul>',
				'							<% _.each(operationalitems,function(operate){ %>',
				'								<% if(operate.type=="workflow"){ %>',
				'		                        	<li><a class="workflow" id="<%=operate.id%>" href="<%=url%>"><%=global.dict.query(operate.name)%></a></li>',
				'								<% }else{ %>',
				'		                        	<li><a class="list-<%=operate.id%>" href=<%=url+"/"+operate.id%>><%=global.dict.query(operate.name)%></a></li>',
				'								<% } %>',
				'							<% }) %>',
				'	                      </ul>',
				'	                    </div>',
				'	                  </div></td>',
				'	            <td width="12%"><%=created%></td>',
				'	            <td width="10%"><%=creator%></td>',
				'	            <td width="10%"><span class="status"><%=global.dict.query(review_state)%></span></td>',
				'               <td width="10%"><img src=<%=icon%> width="32" height="32" alt=<%=type%> title=<%=type%> rel="tooltip"></td>',
				'           </tr>',
			].join("")
		),
	});
	topic.list_model=new iTopicModel({id:'topic',el:'.list-content table tbody',wrap:null,template:topic.list_template});
	topic.lib_model=new iTopicModel({id:'topic',el:'#lib .list-content',wrap:"ul",template:topic.lib_template});
	topic.lib_model.query=topic.list_model.query=topic.load;
})(window);
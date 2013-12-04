define(['interaction/model/thumb'],function(){
	thumb= {
		init:function(id){
			var page=iPagelist.get(id);
			interaction.elementlist.each(function(element){
				var JSON=element.toJSON();
				JSON.iPageid=page.id;
				JSON=$.extend(true,{},JSON);
				element.thumbview=new interaction.view.Thumb({model:element});
			})
		},
		load:function(){
			iPagelist.each(function(page){
				page.overlaylist=new interaction.collection.Base();
				page.thumblist=new interaction.collection.Thumb();
				global.json.load(context_url+page.id+'/getoverlays',function(data){
					_.each(data,function(i){
						i.iPageid=page.id;
						page.thumblist.add(i);
					})
				})
			})
		},
		generate:function(container,data){
			_.each(data,function(i){
				i.iPageid=page.id;
				page.thumblist.add(i);
			})			
		}
	}
	interaction.thumb=thumb;
})

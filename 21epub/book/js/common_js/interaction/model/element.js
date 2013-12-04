(function(interaction){
	interaction.collection.element = interaction.collection.Base.extend({//contain all elements include root node
		iSync:true,
		url:'',
		setonadd:function(){
			this.on('add',function(model){
			})
		},
		setonremove:function(){
		},
		sync: function(method, model, options) {
			if(method=='read'){
				options.url=context_url+this.url+'/overlayinit.json';
			}
			Backbone.emulateHTTP = true ;
			Backbone.emulateJSON = true ;
			Backbone.sync(method, model, options);
		},
		parse:function(data){
			var collection=this;
			return(_.map(data,function(d){
				d.iUrl=context_url+collection.url;
				d.iParent=collection.url;
				return new interaction.model[d.iType](d);
			}));
		},
		confirm:function(){
			interaction.iElementListForSave.save();
		},
		changeZindex:function(){
			this.each(function(model){
				model.iview.changeZindex();
			})
		}
	})
	interaction.model.ElementListForSave=Backbone.Model.extend({
		initialize:function(){
			this.set('id','ElementGroup');
		},
		sync: function(method, model, options) {
			var Model_JSON=interaction.elementlist.toJSON();
			this.attributes=Model_JSON;
			if(method=='create'){
				return;
			}
			if(method=='update'){
				options.url=context_url+interaction.currentpage.id+'/setoverlays';
			}
			if(method=='delete'){
				return;
			}
			if(method=='read'){
				options.url=context_url+interaction.currentpage.id+'/getoverlays';
			}
			Backbone.emulateHTTP = true ;
			Backbone.emulateJSON = true ;
			Backbone.sync(method, model, options);
		}
	})
	interaction.iElementListForSave=new interaction.model.ElementListForSave({'id':'Elementlist'});
	interaction.elementlist=new interaction.collection.element();
})(interaction);
	resourcespatch:function(property){
		var view=this;
	 	var resource_model=function(id,picture){
	 		return{
	        review_state: "private",
	        created: "2013-01-17",
	        title: '',
	        width: 2592,
	        thumb_width: 200,
	        picdescription: null,
	        height: 1944,
	        thumb_height: 150,
	        thumbnail: picture,
	        creator: "1user",
	        author: null,
	        id: id,
	        description: "",
	        content: "<img src='"+picture+"'>",
	        operationalitems: [
	          {
	            type: "object",
	            name: "preview",
	            id: "preview"
	          },
	          {
	            type: "object",
	            name: "edit",
	            id: "edit"
	          },
	          {
	            type: "object",
	            name: "delete",
	            id: "delete_confirmation"
	          },
	          {
	            type: "workflow",
	            name: "submit",
	            id: "submit"
	          },
	          {
	            type: "workflow",
	            name: "publish",
	            id: "publish"
	          }
	        ],
	        picture: picture,
	        properties: [
	          "update",
	          "material_categories"
	        ],
	        url: "",
	        modifyTime: null,
	        material_categories: {
	          values: [],
	          readonly: false
	        },
	        preview: "<img src='"+picture+"'>",
	        type: "CustomImage",
	        icon: "http://xdad1.21epub.com/img/type/material_image.png"	 		
	 	};
	 	}
	 	var Detail=this.model.get('iDetail');
		var resources=Detail[property.id];
		if(!resources) return ;
		if(_.isArray(resources)){
			resources=_.map(resources,function(resource){
				if(_.isString(resource)){
					var resourceid=interaction.getUniqueIdByRandom('Resources_');
					resource=resource_model(resourceid,resource);
					resource.elementid=view.model.id;
					resource.resourceattr=property.id;
					return resource;
				}
				else return resource;
			})
			Detail[property.id]=resources;
		}
		else {
			if(_.isString(resources)){
					var resourceid=interaction.getUniqueIdByRandom('Resources_');
					resources=[resource_model(resourceid,resources)];
					resources.elementid=view.model.id;
					resource.resourceattr=property.id;
					Detail[property.id]=resources;
			}
		}
	}
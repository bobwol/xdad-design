define(['interaction/model/base'],function(){
	var resources={
		load:function(){
			
		},
		init:function(){
			material.listforinsert(function(list,ids){
				resources.insert(list.options.right.model,ids);
			});		
		},
		openforchange:function(){
			$('#materialslistforchange').remove();
			var changeoptions={};
			changeoptions.onfilterload=function(){
				$('#materialslistforchange').find('select[name="portal_type"]').attr('disabled',true)
					.val("interaction.image")
					.trigger('change');
			}
			material.listforchange(function(list,ids){
				resources.change(list.options.right.model,ids);
			},changeoptions);	
			global.modal.show('#materialslistforchange');
			return false;		
		},
		open:function(iType){
			var resource_type;
			switch(iType){
				case 'Audio': resource_type="interaction.audio";break;
				case 'Video': resource_type="interaction.video";break;
				default: resource_type="interaction.image";break;
			}
			$('#materialslistforinsert').find('select[name="portal_type"]').attr('disabled',true)
					.val(resource_type)
					.trigger('change');
			global.modal.show('#materialslistforinsert');
			return false;
		},
		insert:function(model,ids){
			var Detail = interaction.current.get('iDetail');
			var dict = {};
			var newtitle="";
			interaction.current.iview.storeundodata();
			dict[interaction.current.iview.resourcesattr] = Detail[interaction.current.iview.resourcesattr];
			if (interaction.current.iview.resourcestype == "single") {
				dict[interaction.current.iview.resourcesattr] = [];
				//if(ids.length==0) dict[interaction.current.iview.resourcesattr]=null;
				//else{
				var JSON = model.icollection.get(ids[0]).toJSON();
				JSON.id = interaction.getUniqueIdByRandom('Resources_');
				JSON.elementid = interaction.current.id;
				JSON.resourceattr = interaction.current.iview.resourcesattr;
				newtitle=JSON.title;
				dict[interaction.current.iview.resourcesattr].push(JSON);
				global.modal.hide('#materialslistforinsert');
				//}
			} else {
				if (!dict[interaction.current.iview.resourcesattr])
					dict[interaction.current.iview.resourcesattr] = [];
				_.each(ids, function(id) {
					var JSON = model.icollection.get(id).toJSON();
					if(ids.indexOf(id)==0) newtitle=JSON.title;
					JSON.id = interaction.getUniqueIdByRandom('Resources_');
					JSON.elementid = interaction.current.id;
					JSON.resourceattr = interaction.current.iview.resourcesattr;
					dict[interaction.current.iview.resourcesattr].push(JSON);
				})
			}
			//dict.title=newtitle;
			interaction.current.iview.setdetail(dict);
			interaction.current.iview.updateresources();
			$('#info_attributes').find('[name="title"]').val(newtitle).trigger('change',{undodata:true});
			return false;
		},
		change:function(model,ids){
			if(!ids||ids.length==0) return;
			else var id=ids[0];
			var JSON=model.icollection.get(id).toJSON();
			var value={};
			value.width=JSON.width;
			value.height=JSON.height;
			value.preview=JSON.preview;
			value.thumbnail=JSON.thumbnail;
			value.thumb_height=JSON.thumb_height;
			value.thumb_width=JSON.thumb_width;
			value.picture=JSON.picture;
			value.uid=JSON.uid;
		    interaction.currentpage.set(value);
			interaction.currentpage.iview.updatepageinfo();
			interaction.currentpage.iview.updatebackground();
			interaction.currentpage.iview.updateanimationpreviewbackground();
			interaction.currentpage.iview.$el.children('a').html('<img src='+interaction.currentpage.get('thumbnail')+'/>');
			global.modal.hide('#materialslistforchange');		
		}
	}
	return resources;
})
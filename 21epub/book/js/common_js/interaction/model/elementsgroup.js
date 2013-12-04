(function(interaction){
	interaction.model.ElementsGroup=interaction.model.Base.extend({
		defaults:{
			iType:'ElementsGroup',//define type
			iLock:true,
			iVisibility:true,
			iCommon:null,
			iDetail:{values:[],interval:5},
			iParent:'',
			iChild:'',
			iOptions:{createfocus:true},//use a new attribute options to control the model ,and can set many options for the model
			iParentModel:null,
			iDraggable:false,
			iResizable:false,
			iTemplate:interaction.template.element,
			iParentdiv:'.interaction-area',
			iAutoindex:false,
			iSync:true,
			iZindex:'-1',
			iUrl:null,
			iAutofocus:true,
			iKeyscontrol:false,
			callback:null,
			iBackground:"rgba(193,56,2,0.5)",
			iResources:null,
			iElementattr:true,
			iResourcesProperties:null,
			iTree:null
		},
		initialize: function(){
			this.options=this.get('iOptions');
			if(!this.id){//if isnew
				/* begin to create and save the new model */
				if(interaction.elementlist.where({'iType':'ElementsGroup'}).length>0) {
					this.destroy();
					interaction.elementlist.where({'iType':'ElementsGroup'})[0].iview.focus();
					return false;
				}
				var model=this;
				if(!this.get('iAutoindex')){
					if(this.options.createwait) jqwait_simple();
					this.savemodel(function(returned){
						model.set('id',returned.ID.toString());//set the new model id
						model.setcollection();
						model.set('values',model.getElementTreeIds());
						model.setmodel();
					});
				}
				else{
					this.set("id",this.get('iType')+"_"+this.cid);
					this.setcollection();
					model.set('values',model.getElementTreeIds());
					this.setmodel();
				}
			}
			else {
				this.setmodel();
			}
		},
		setcollection:function(){
			if(!interaction.elementlist.get(this.id)) interaction.elementlist.add(this);
		},
		setview:function(type){
			this.iview=new interaction.view.ElementsGroup({model:this});
		},
		setsyncmodel:function(){
			var Model_JSON=this.toJSON();
			Model_JSON.iSync=false;
			this.dommodel=new interaction.model.Dom(Model_JSON);
		},
		getElementTreeIds:function(){
			var ids=[];
			interaction.elementlist.each(function(model){
				var Model_JSON=model.toJSON();
				var dict={};
				dict.id=Model_JSON.id;
				ids.push(dict);
			})
			return ids;
		}
	})
	interaction.view.ElementsGroup = interaction.view.Base.extend({
		renderinfo:function(){
			this.infoel.empty();
			this.infoel.append(interaction.template.info.baseinfo(this.model.toJSON()));
			this.infoel.append(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			//this.infoel.append(interaction.template.info.resources(this.model.toJSON()));
			this.updateelementattr();
			this.infoel.append(interaction.template.info.infosave(this.model.toJSON()));
			this.bindinfo();		
		},
		updateinfo:function(){
			this.infoel.find('.detail').replaceWith(interaction.template.detail[this.model.get('iType')](this.model.toJSON()));
			this.updateelementattr();
			this.bindinfo();
		},
		render: function(){//this render always used for a newly create type to show to display and to focus 
			var Model_JSON=this.model.toJSON();
			this.infoel=$('#info_attributes').children('.setting-body');
	    	return this;
		},
		info_focus:function(){
			interaction.changeTab('info_attributes');// when a focus happy ,alway focus to the info attributes area 
			var detail=this.getdetail();
			var ids=interaction.elementlist.pluck('id');
			//detail.value=_.filter(detail.iItemlist,function(iItem){
			//	return _.include(ids,iItem);
			//})
			this.updateinfo();
			this.updateresources();
			this.setdetail({iItemlist:detail.iItemlist});
			this.bindinfo();
		},
		updateelementattr:function(){
			$('#info_attributes .elementlist').children('ul').empty();
			interaction.itreelist.reset();
			var view=this;
			var detail=this.model.get('iDetail');
			detail.values=this.adjustvalues(detail.values);
			this.addtreemodel(detail.values);
			var view=this;
			interaction.sortable('.elementlist','li.treeitem','div.btn-draged',this.sortcheck,function(){
				view.aftersort();
			})
		},
		addtreemodel:function(value,parent){
			var view=this;
			_.each(value,function(model){
				var Model_JSON=interaction.elementlist.get(model.id).toJSON();
				var treemodel=new interaction.model.tree({id:Model_JSON.id,elementid:view.model.id,iType:Model_JSON.iType,iParent:parent});
				if(model.children){
					view.addtreemodel(model.children,model.id);
				}
			})				
		},
		otherfocus:function(){
		},
		sortcheck:function(source,target){
			var sourcetype=interaction.elementlist.get(source).get('iType');
			var targettype=interaction.elementlist.get(target).get('iType');
			if(targettype=="ElementsGroup") return true;
			else return false;
			//console.info({source:source,target:target});
		},
		aftersort:function(){
			var idstree=interaction.get_tree('.elementlist','ul','li.treeitem','id');
			var detail=this.model.get('iDetail');
			detail.values=idstree;
		},
		adjustvalues:function(values,checkvalues){
			var newvalues=[];
			var ids=interaction.elementlist.pluck('id');
			_.each(values,function(value){
				var dict=value;
				if(_.include(ids,value.id)){
					ids=_.reject(ids,function(i){return i==value.id;});
					if(value.children){
						var children=[];
						_.each(value.children,function(child){
							if(_.include(ids,child.id)){
								children.push(child);
								ids=_.reject(ids,function(i){return i==child.id;});
							}					
						})
						dict.children=children;
					}
					newvalues.push(dict);
				}
			});
			_.each(ids,function(id){
				var Model_JSON=interaction.elementlist.get(id).toJSON();
				var dict={};
				dict.id=Model_JSON.id;
				//dict.type=JSON.iType;
				newvalues.push(dict);			
			});
			return newvalues;
		}
	})
})(interaction);
commonpattern['Article']={}
detailpattern['Article']={iTitle:'',iHtml:'',iStyle:''};
var iComacBaseModel=iBaseModel.extend({
	defaults:{
		iOptions:{createfocus:true} //use a new attribute options to control the model ,and can set many options for the model
	},
	setparent:function(type){//like it's name setparent of the model
		//this.set('iParent',this.collection.id);//except root model ,all the models should have a Parent
	},
	setparentdiv:function(type){
		//this.set('iParentdiv','portal');//can be customed , 
	},
	setcollection:function(type){
	},
	seturl:function(type){
	},
	setdomfield:function(type){
		//dom_createfield(this.id);//create a dom field which can contain the doms
	},
	setdominfo:function(type){
		//dom_createinfo(this.get('iParent'),this.id,this.get('iType'));
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return false;
	},
	sync: function(method, model, options) {
		options.url=this.geturl(method);
		Backbone.emulateHTTP = true ;
		Backbone.emulateJSON = true ;
		var type=this.get('iType');
		if(this.setsync(type)) Backbone.sync(method, model, options);
	},
	geturl:function(method){
	}
})
var iComacBaseCollection=iBaseCollection.extend({
})
var iComacBaseView=iBaseView.extend({
	initstart:function(){
	},
	resizable:false,
	draggable:false,
	focus:function(){// this function use to focus the div 
		if(elementfocus==true&&iCurrentModel&&iCurrentModel.id==this.model.id){
		}
		else{
			if(elementfocus==true&&iCurrentModel) {//end the previous element and to operate the next
				model_confirm(iCurrentModel.id)
			}
				iCurrentModel=this.model;//set currentmodel to this
				this.beforefocus();//sometimes we want do something before the element focus process ,we use this function
				//this.info_focus();
				this.div_focus();
				//this.dom_focus();
				elementfocus=true;//global set that a element has been selected or focused,this is a global varible
				//form_fill(this.model.id);//fill the form info field
				//this.setbutton();
				this.afterfocus();//custom set the focus operations
		}
	},
	confirm:function(){
		this.beforeconfirm();//that the same as beforefocus
		model_update(this.model.id);//model update by id
		//this.resetbutton();
		//this.info_confirm();
		//this.dom_confirm();
		this.div_confirm();
		//resources_window_close();//close the resources window
		elementfocus=false; // no element focus now
		iCurrentModel=null;
		this.afterconfirm();//call the function to do some operations after confirm
	},
	div_focus:function(){//add this new function to handle when the focus operation is all about the element
		//this.unlock();//unlock this div for change and move 
		//div_settop(this.model.id);//bring the div to front
		//div_setparenttop(this.model.id);//set the parent div to top 
		//div_set_selected(this.model.id);//set the div to maked up 
		if(this.resizable) div_resize(this.model.id);//resize the div 
		if(this.draggable) {
			div_drag(this.model.id);//drag the div
			div_keyscontrol(this.model.id);//begin the keyscontrol it , alert that this keycontrol can only apple to the current focused item
		}
	},
	div_confirm:function(){//div operation when confirm occur
		if(this.draggable) {
			this.element.draggable("destroy");
			div_releasekeyscontrol(this.model.id);// turn off the keyscontrol system,only use for focus item
		}
		if(this.resizable) this.element.resizable("destroy");
		//div_resettop(this.model.id);//set the div to it's original z-index
		//div_resetparenttop(this.model.id);
		//div_reset_selected(this.model.id);
		//this.lock(); //lock the div , so it can't be changed 
	}
})


var iComacCustomModel=Backbone.Model.extend({
})
/* model varibles */
var hosturl='';
var iElementlist; //contain all the elements
var iCurrentModel;//current model point, which always point to the current model selected or focused
var iCurrentHoverModel;//this model will point to the one which is focus by mouse action
var elementhover=0;
var commonpattern={
	//default:{portait:{iStartx:400,iStarty:200,iWidth:200,iHeight:200},landscape:{iStartx:400,iStarty:200,iWidth:200,iHeight:200}}
};
var detailpattern={
};
/* @end */

/* for model define , when i define model , the model's main function is to define structure ,store data ,
define a collection if need , 
define a view 
*/
var iBaseModel = Backbone.Model.extend({
	/* The base model have several important varibles , 
	   iParent, this attributes defines the parent model (collection) it belongs to 
	   iChild , this attributes also important when this model can contain childs , so this model should has a collection
	   url, which set by this.reseturl to change it , it points to the server url for model sync 
	   iParentdiv, this attribute use for div handle , when manage the divs of the page ,we should know what's the parent node it belong to 
	   model.id can be the same to it's collection's id
	   */
	defaults:{
		iType:'iBasetype',//define type
		iLock:true,
		iVisibility:true,
		iCommon:{},
		iDetail:{},
		iParent:'',
		iChild:'',
		iOptions:{createfocus:true} //use a new attribute options to control the model ,and can set many options for the model
	},
	initialize: function(){
		if(!this.id){//if isnew
			this.setparent(this.get('iType'));//set it's parent object ,the parent is what the dom belongs to ,also use to find it's parent model
			this.setparentdiv(this.get('iType'));//this function set the parentdiv use for create ,handle, drag ,etc 
			this.seturl(this.get('iType'));//this function is initial set the url which for the model sync ,you may change it using reseturl later
			var imodel=this;
			/* begin to create and save the new model */
			this.beforecreate(this.get('iType'));
			if(this.createwait) jqwait_simple();
			model_create(imodel);
		}
		else {
			this.setparent(this.get('iType'));
			this.setparentdiv(this.get('iType'));
			if(!iElementlist.get(this.id)) iElementlist.add(this);//this use for model collection fatch when new model create
			this.commonset(this.get('iType'));//this function will use not only for new but also for fatch model(means a model create by id or create by fatch)
			this.setcollection(this.get('iType'));
			this.setdomfield(this.get('iType'));
			this.setdominfo(this.get('iType'));
			this.setview(this.get('iType'));
			this.afterfatch(this.get('iType'));//this only use for fatch
			this.setoptions(this.get('iType'));
		}
	},
	beforecreate:function(){//before create and save to server ,sometimes we want plus to add some extra info to this model,use this
	},
	createwait:true,
	createhandle:function(returned){//sometimes we want to handle the returnval ,then we can use this
	   if(this.createwait) jqwait_simple_close();
	   if(!iElementlist.get(this.id)) iElementlist.add(this);//add the new model to iElementlist 
	   this.collection.setchildlist();//because this time the element got id ,and can update the parent collection's childlist
	   this.createdatahandle_before(returned);//when the create save return some phrases , this function can handle these infomations
	   this.commonset(this.get('iType'));//this is the set for both new model and old model(fatched)
	   this.setcollection(this.get('iType'));//this function to set the collection of the model
	   this.setdomfield(this.get('iType'));
	   this.setdominfo(this.get('iType'));
	   this.setview(this.get('iType'));//set the model view
	   this.aftercreate(this.get('iType'));//this is the set for model custom
	   this.createdatahandle_later(returned);
	   this.setfocus(this.get('iType'));//set the model focus ,always the model create will be focused by this function
	   this.setoptions(this.get('iType'));//options is set for model control 
	},
	createdatahandle_before:function(returned){
	},
	createdatahandle_later:function(returned){},
	setfocus:function(type){
		var options=this.get('iOptions');
		if(!options||options.createfocus) this.iview.focus();
	},
	setparent:function(type){//like it's name setparent of the model
		this.set('iParent',this.collection.id);//except root model ,all the models should have a Parent
	},
	setparentdiv:function(type){
		this.set('iParentdiv','portal');//can be customed , 
	},
	setcollection:function(type){
	},
	seturl:function(type){
	},
	setdomfield:function(type){
		dom_createfield(this.id);//create a dom field which can contain the doms
	},
	setdominfo:function(type){
		dom_createinfo(this.get('iParent'),this.id,this.get('iType'));
	},
	aftercreate:function(type){//this is the set only for new model create that you can custom it
	},
	commonset:function(type){
		/* you can custom collection here if needed */
		//this.icollection=new iContainerCollection(); 
		//this.icollection.iParent=this.id;
	},
	setview:function(type){
        switch (type){
			case 'plonejs_container': this.iview=new iRootView({model:this});break;
			case 'plonejs_folder': this.iview=new iFolderView({model:this});break;
			case 'plonejs_layout': this.iview=new iLayoutView({model:this});break;
        }
	},
	afterfatch:function(){
	},
	setoptions:function(type){
	},
	setsync:function(type){//this function use to prejudge if this model need to sync with dateserver
		return true;
	},
	url: hosturl+'', //default set to root 
	sync: function(method, model, options) {
		this.reseturl();
		if(method=='create'){
			options.url=hosturl+this.url+'overlaycreate.json';
		}
		if(method=='update'){
			options.url=hosturl+this.url+'overlayupdate.json?id='+model.id;
		}
		if(method=='delete'){
			options.url=hosturl+this.url+'overlaydelete.json?id='+model.id;
		}
		if(method=='read'){
			options.url=hosturl+this.url+'overlayget.json?id='+model.id;
		}
		Backbone.emulateHTTP = true ;
		Backbone.emulateJSON = true ;
		var type=this.get('iType');
		if(this.setsync(type)) Backbone.sync(method, model, options);
	},
	reseturl:function(){}
})

/* end fo model */

/* define collections */
var iBaseCollection =Backbone.Collection.extend({
	initialize:function(){
		this.setonadd();//this set the collection operations when a model add to it 
		this.setonremove();//this set the collection operations when a model remove form it 
		this.otherset();//set other operations for this collection
	},
	setonadd:function(){
	},
	setonremove:function(){
	},
	removechildmodel:function(model){//remove the child models ,this is not use popular ,because when we use ZODB system , we 
		//we remove the parent model , the child's is also removed 
		//so this function use only we the child's are store in another locations
		_.map(model.icollection.models,function(child){
				model_remove(child.id);
		})
	},
	removechilddiv:function(model){//this function use to remove the collection's childs divs 
		//when the childdivs are not belong to its collection's div
		_.map(model.icollection.models,function(child){
				div_removediv(child.id);//remove the childdiv
		})
	},
	removechilddominfo:function(model){//this function uses when the child's dominfo is not in the same place under it's parent dom
		//so we have to manully remove it , but it not happened usually
		_.map(model.icollection.models,function(child){
				dom_removeinfo(child.id);//because the child is still a collection so , we should remove it's dom field
		})
	},
	removechilddomfield:function(model){//this function uses reason equal to removechildmodel ,because the model remove event not 
		// occured , so we need to manually remove the child field
		_.map(model.icollection.models,function(child){
				dom_removefield(child.id);//because the child is still a collection so , we should remove it's dom field
		})
	},
	otherset:function(){
	},
	setchildlist:function(){//all the collection should have this function to have setlist of it's child,this was changed when a model add to it and when a model remove
		//the childlist should be with the collection ,when a model need to find it's child ,it can use model.icollection.childlist
		childlist=_.map(this.models,function(child){
			return child.id;
		})
		this.childlist=childlist;
	},
	setchildvisibility:function(){//this function is use to set the collection childs 
	},
	highlightallchilds:function(){
		_.map(this.models,function(child){
			child.trigger('highlight');
		})
	},
	cancelhighlightallchilds:function(){
		_.map(this.models,function(child){
			child.trigger('cancelhighlight');
		})
	},
	hideallchilds:function(){
		_.map(this.models,function(child){
			child.trigger('divhide');
		})
	},
	showallchilds:function(){
		_.map(this.models,function(child){
			child.trigger('divshow');
		})
	},
	initallchilds:function(){//unlike showchilds ,this function act for Focusview ,because all the childs are not initialated ,so this function 
			//will create and initiate childs
		_.map(this.models,function(child){
			child.iview.creatediv();
			child.iview.divchange();
			if(child.icollection){
				child.icollection.initallchilds();
			}
		})		
	},
	call_childs_handle:function(id,args){
		_.map(this.models,function(child){
			child.iview.parent_change_handle(args);
		})	
	},
	url:'',
	sync: function(method, model, options) {
		this.reseturl();
		if(method=='read'){
			options.url=hosturl+this.url+'overlayinit.json';
		}
		Backbone.sync(method, model, options);
	},
	reseturl:function(){}
})
var iElementCollection = iBaseCollection.extend({//contain all elements include root node
	setonadd:function(){
		this.on('add',function(model){
			//dom_createinfo(this.id,model.id,model.get('iType'));
			this.setchildlist();
		})
	},
	setonremove:function(){
		this.on('remove', function(model){
			this.setchildlist();
		})
	},
	sync:function(){
	}
})
/* end of collections */

/* define view */
var iBaseView = Backbone.View.extend({
	initialize:function(options){
		_.bindAll(this);
		/*model change control 
		  there are serveral cases , the model's attr change 
		  the div need to change 
		  the form need to change
		  sometimes ,these changes happens together ,but sometimes not 
		*/
		this.model.bind('change:model',this.modelchange);//this function set for when change are hanppened to model attributes 
		this.model.bind('change:modelcommon',this.modelcommonchange);//this function called only change the commonattr,args should pass
		this.model.bind('change:modeldetail',this.modeldetailchange);//attrname should pass to this funciton
	    this.model.bind('change:div', this.divchange);//this change only action to the div element
		this.model.bind('change:form', this.formchange);//this change only action to the form field
		this.model.bind('dragging',this.draghandle);//bind the element dragging operation to this function
		this.model.bind('resizing',this.resizehandle);//bind the element resizing operation to this function
		this.model.bind('dragstop',this.dragstop);//this function execute when the drag stoped 
		this.model.bind('lock',this.lock);//togger lock actions
		this.model.bind('unlock',this.unlock);
		this.model.bind('divshow',this.showdiv);
		this.model.bind('divhide',this.hidediv);
		this.model.bind('focus', this.focus);
		this.model.bind('confirm', this.confirm);
		this.model.bind('removemodel', this.removemodel);
		this.model.bind('change:image',this.imagechange);
		this.model.bind('adjustimage',this.imageadjust);//this function set to adjust image to make it fit the div ,or div fit it
		this.model.bind('change:icon',this.iconchange);
		this.model.bind('updatesuccess',this.afterupdate);//this called the function to handle when update finished and successed	
		this.model.bind('removesuccess',this.afterremove);//this called the function to handle when remove finished and successed
		this.model.bind('afterfatchchild',this.afterfatchchild);//this is the function called when a model's collection finish init fatch
		this.model.bind('resources_beforeopen',this.resources_beforeopen);//this function bind before resources window open operation to this model change
		this.model.bind('resources_open',this.resources_open);//this function bind when the resources opened to call this function
		this.model.bind('resources_save',this.resources_save);//this function called when the save button pressed ,can customed by it's passing varibles 
		this.model.bind('resources_updatesuccess',this.resources_updatesuccess);
		this.model.bind('text_beforeopen',this.text_beforeopen);//this function called when the text window prepare to open
		this.model.bind('text_open',this.text_open);//like resources ,text open function called to exeute open opration 
		this.model.bind('text_save',this.text_save);//the same as resources
		this.model.bind('dom_sort',this.dom_sort);//this function handle the dom sort update situation
		this.model.bind('dom_sort_success',this.dom_sort_success);//this function callback when the sort is finish and success
		this.model.bind('afterfatchall',this.afterfatchall);
		this.model.bind('updateerror',this.updateerror);//set the error control for update
		this.model.bind('removeerror',this.removeerror);//set the error control for model remove
		this.model.bind('items_add',this.items_add);//the items system is a new system which sever for the attributes dynamic items adds , control ,change , remove ,sort and etc
		this.model.bind('items_set',this.items_set);
		this.model.bind('items_sort',this.items_sort);//set the items sort control
		this.model.bind('highlight',this.highlight);//when a dom is focused , highlight the accroding elements
		this.model.bind('cancelhighlight',this.cancelhighlight);
		this.model.bind('mouseover',this.mouseover);
		this.model.bind('mouseout',this.mouseout);
		this.bindothers();//this is a custom define function ,you can custom it easilly
		this.beforeinitstart();//this function will be execute before the initfunction start;
		this.initstart();//this function use to start the model's collection to init fatch childs
	},
	/* initial settings */
	border_type:'solid',// this setting set the border type ,solid or dotted etc.
	show_outline_on_hover:false,//if set to true ,there's no border initial display ,but when a element is mouseovered , the outline will be displayed
	element_position:'absolute',//some element are absolute position set and some are relative position 
	childs_change_handle:function(childid,args){},//this function accept the childs change,and handle with these changes to take any actions
	parent_change_handle:function(args){},//this function accept the parent changes , and handle actions will be taken for these changes 
	highlight:function(){
		this.element.addClass('iShadow');
	},
	cancelhighlight:function(){
		this.element.removeClass('iShadow');
	},
	mouseover:function(){
		if(elementhover==0){
			if(elementfocus==true&&iCurrentModel&&iCurrentModel.id==this.model.id) ;
			else {
				this.element.addClass('iShadow');
				this.element.removeClass('nooutline');
			}
			iCurrentHoverModel=this.model;
			elementhover=1;
		}
	},
	mouseout:function(){
		if(elementhover==1){
			this.element.removeClass('iShadow');
			this.element.addClass('nooutline');
			iCurrentHoverModel=null;
			elementhover=0;
		}
	},
	items_handle:function(){},//the items function is use for the items display or other handle function when needed
	items_add:function(){},//the items add function is use for the new items added
	items_set:function(){},//the items set is use for model attributes set when items value change ,sort happen ,remove occur
	items_sort:function(){},
	dom_sort:function(delta){//delta store the distance of the dom changed
		var item_id = this.model.id;
	    this.model.reseturl();
	    var url= this.model.url+"folder_moveitem";
	    var data="item_id="+item_id+"&delta:int="+delta;
		var imodel=this.model;
		ajax_post(url,data,function(){
			imodel.trigger('dom_sort_success');
		});
	},
	dom_sort_success:function(){
	},
	text_beforeopen:function(texttype){//can be customed by the type of the text
		text_window_setbutton(texttype);//set the text buttons such as save etc
		text_window_loadtext(this.model.id,texttype);//load the default text to the text_window
		text_window_open(texttype);
	},
	text_open:function(texttype){
	},
	text_save:function(texttype,textval){//save the textval when save button click 
		Detail=this.model.get('iDetail');
		Detail[texttype]=textval;
		text_window_close(texttype);
		this.textchange();
	},
	resources_type:function(resourcestype){//the type for resources quickupload use 
		return 'typeupload=Image&mediaupload=image';//default type is Image
	},
	resources_url:function(resourcestype){
		return hosturl+'@@medias_browser';
	},
	resources_wait:true,
	resources_beforeopen:function(resourcestype){//this function actions before the resources window opened
		var type=this.resources_type(resourcestype);
		var url=this.resources_url(resourcestype);
		if(this.resources_wait) jqwait_simple({modal:false});
		resources_window_update(this.model.id,url,type);
		resources_window_setbutton(resourcestype);
		resources_window_checkeditems(resourcestype);
		resources_window_open();
	},
	resources_updatesuccess:function(){
		if(this.resources_wait) jqwait_simple_close();
	},
	resources_open:function(){//this function actions when the resources window has opened 
	},
	resources_array_handle:function(imgArray){//from resources save control we got the imgArray , it's a array list ,
		//but sometimes we need use it directly ,and sometimes we want abstract a single image url 
		//default show how to return a single image url
		if(isEmpty(imgArray)==false) return imgArray[0];
		else return '';
	},
	resources_model_save:function(resourcestype,imgResult){//save the resources to model, this function set to be customed when you need to change the img url or something before 
		//pass type and array for custom 
		//default is store the whole imgArray to model attribute
		var detail=this.model.get('iDetail');
		detail[resourcestype]=imgResult;
	},
	resources_info_load:function(resourcestype,imgResult){
		//this function set when the resources are load to the resources area 
		//there can be use single image or the imagelist to display
		info_resetresources();//we need to reset the resources area before load resources
		var imageplus=this.setimageplus();
		if(isEmpty(imgResult)==false){
			if(_.isArray(imgResult)){//this is a img array 
				info_addresources_mutiple(imgResult,imageplus);//mutiple resources use mutiple
			}
			else{
				info_addresources_single(imgResult,imageplus);//a single img to show
			}
		}
	},
	resources_save:function(resourcestype,imgArray){
		var imgResult=this.resources_array_handle(imgArray);
		this.resources_model_save(resourcestype,imgResult);
		this.resources_info_load(resourcestype,imgResult);
		this.afterresources_save();//this function set after the resources are saved
	},
	afterresources_save:function(resourcestype){
		info_focustab('info_resources');
		this.imagechange();
		this.imageadjust();
		resources_window_close();
	},
	lock:function(){
		this.model.set('iLock',true);
		this.element.children('span.iType').children('a#iLock').addClass('lock');
	},
	unlock:function(){
		this.model.set('iLock',false);
		this.element.children('span.iType').children('a#iLock').removeClass('lock');
	},
	showdiv:function(){
		this.element.removeClass('hidden');
		this.model.set('iVisibility',true);
		modelid=this.model.id;
		$("a.dom_visibility").each(function(){
			if($(this).attr('id')==modelid){
				$(this).children('img').attr('src','n/i_visibility.png');
			}
		})
		this.afterdivshow();
	},
	hidediv:function(){
		this.element.addClass('hidden');
		this.model.set('iVisibility',false);
		modelid=this.model.id;
		$("a.dom_visibility").each(function(){
			if($(this).attr('id')==modelid){
				$(this).children('img').attr('src','n/i_invisibility.png');
			}
		})
		this.afterdivhide();
	},
	afterdivhide:function(){
	},
	afterdivshow:function(){
	},
	bindothers:function(){//this function for custom bind operations added ,it will be exeute when the iview called
	},
	beforeinitstart:function(){
	},
	initstart:function(){//so this function always called with the view start 
		this.creatediv();
		this.divchange();
	},
	afterfatchchild:function(){//as the same means that after the function fatchchild is success 
	},
	afterfatchall:function(data){//that means that the function fatchall has success done and return a data value
		model_render(this.model.id,data);
		if(this.fatchallwait) jqwait_simple_close();
	},
	render: function(){//this render always used for a newly create type to show to display and to focus 
		this.creatediv();
		this.focus();
		this.divchange();
	},
	fatchallwait:false,
	fatchall:function(){//fatchall is a function ,not only fatch its direct children but also its children's children recursively
		if(this.fatchallwait) jqwait_simple({modal:true,waitname:'jqwait_fatchall'});
		model_fatchall(hosturl+'overlayall.json',this.model.id);
	},
	fatchchild:function(){//always use the funciton overlayinit to fatch its direct children ,if you want to 
		//fatch all the children include its folders recursively ,you can use fatchall
		model_init(this.model.id);
	},
	beforeimagechange:function(){
		//there's some important things need to be considered
		//such as the imageurl to be diplayed 
		//if the image size should be optimised 
		//and if there is a condition that will restrict the image display
		//and where the image displayed ,the image may displayed inside element itself , or the element maybe displayed inside the attributes area 
		//so there's some functions to do it 

	},
	setimageurl:function(imagename){//the imagename specify the image data to find in model,default is iImglist
		if(!imagename) imagename='iImglist';
		if(this.setimagedisplayallowed){//the image can be a list or a single image url
			var imglist=this.model.get('iDetail')[imagename];
			var imageplus=this.setimageplus();//default is '/image' , but can use optimise to always choose the proper size image ,make the traffic be optimised
			var imgurl;
			if(_.isArray(imglist)) imgurl=imglist[0]+imageplus;
			else imgurl=imglist+imageplus;
			return imgurl;
		}
		else return '';
	},
	setimageplus:function(){
		return '/image';
	},
	setimageurllist:function(imagename){//sometimes we want a imageurl list ,when slide or image gallery need 
		if(!imagename) imagename='iImglist';
		if(this.setimagedisplayallowed){//the image can be a list or a single image url
			var imglist=this.model.get('iDetail')[imagename];
			var imgurllist=[];
			var imageplus=div_imagesizechoose(this.model.id);//always choose the proper size image ,make the traffic be optimised
			for (img in imglist){
				var imgurl=imglist[img]+imageplus;
				imgurllist.push(imgurl);
				imgurl='';
			}
			return imgurllist;
		}
		else return [];
	},
	setimagedisplayallowed:function(imagename){//if allow the image to display or not,initial set it to true
		if(!imagename) imagename='iImglist';
		var imglist=this.model.get('iDetail')[imagename];
		if(imglist&&isEmpty(imglist)==false){
			return true;
		}
		else return false;
	},
	setimagedisplay:function(imagename,imgurl){//set where to display the image , default is to display it inside the element
		this.element.children('span.iShade').addClass('clear');//the iShade is initial set operacy , so must clear it before the image display here
		this.element.children('span.iImagefield').html('<img class="iImage" src="'+imgurl+'">');
	},
	resetimagedisplay:function(imagename){//this function use to reset or say bring back to original situation of the image field
		//default is to reset the element image field
		this.element.children('span.iImagefield').empty();
		this.element.children('span.iShade').removeClass('clear');
	},
	getimagename:function(imagename){//add this function to get the field of the image which name to get the image url
		//default is use iImglist
		return 'iImglist';
	},
	imagechange:function(imagename){//this function is use to show the image field ,when a image is put into the imagefield
		this.beforeimagechange();//this function will be execute before the imagechange
		var imagename=this.getimagename();
		if(this.setimagedisplayallowed(imagename)){
			var imgurl=this.setimageurl(imagename);
			this.setimagedisplay(imagename,imgurl);
		}
		else{
			this.resetimagedisplay(imagename);
		}
		this.afterimagechange();
	},
	afterimagechange:function(){//this function used when the image change happened , we can custom some useful function to handle the image later
		// ratiofixset is one of the most important function ,which will fix the image ratio when resize happen
		model_ratiofixset(this.model.id);//set ratiofix in order to make the image resize can be ratiofixxed 
	},
	textchange:function(){//that mean the text field should be added the textval input by tinymce
		var Detail=this.model.get('iDetail');
		var iText=Detail['iText'];
		if(iText){
			this.element.children('div.iTextfield').html(iText);
		}
	},
	imageadjust:function(){//this function use to adjust the image size make it fit the element width and height ,and also make the element
		//width and height to fix the image it self 
		var commonattr=this.model.get('iCommon')[iPageDirection];
		var thisview=this;
		var modelid=this.model.id;
		this.element.children('span#imagefield').children('img').load(function(){
			var width=$(this).width();
			var height=$(this).height();
			var ratio=getratio(width,height);
			var args=model_constructargsbyratio(modelid,ratio);
			thisview.modelcommonchange(args);
			thisview.divchange();
			thisview.formchange();
		})
	},
	imageadvancedadjust:function(){
	},
	model_border_patch:function(){//if the element has border values , when the common value change , we should recount the element width 
		//and height by adding the border value
		//for input value check
		//and for border style change operations
		model_adjustcommon(this.model.id);
	},
	modelchange:function(attrname,attrvalue){//modelchange ,to find what the changed attr is by attrname 
		//and to set the attrvalue by attrvalue
		var common=this.model.get('iCommon');
		var commonattr=common[iPageDirection];
		detail=this.model.get('iDetail');
		if(attrname in commonattr) {
			var args=model_constructcommonargsbyattr(this.model.id,attrname,attrvalue);
			this.modelcommonchange(args);
		}
		else{
			if(attrname in detail) this.modeldetailchange(attrname,attrvalue);
			else {//represent maybe a new attr need to be added 
				this.modeldetailchangeadapt(attrname,attrvalue);
			};
		}
	},
	modelcommonchange:function(args,silent){
		var common=this.model.get('iCommon');
		var commonattr=common[iPageDirection];
		var args=model_constructcommonargsbyargs(this.model.id,args);
		checkinfo=div_check(this.model.id,args.iStartx,args.iStarty,args.iWidth,args.iHeight);
		if(checkinfo=='1'){
			common=model_constructcommonbyargs(this.model.id,args);
			this.model.set('iCommon',common);
		}
		else {
			if(!silent) alert(checkinfo);
			this.formchange();
		}
		this.modelaftercommonchange(args);
	},
	modeldetailchange:function(attrname,attrvalue){
		var type=gettypebyname('div#info_attributes',attrname);//get the type of the attr 
		var newattrvalue;
		if(type=='checkbox'||type=='radio'){//if checkbox or radio or select ,the value get method are different
				newattrvalue=getcheckfieldvalue('div#info_attributes',attrname);
		}
		else newattrvalue=$('div#info_attributes [name='+attrname+']').val();
		if(this.valuecheck(attrname,newattrvalue)) detail[attrname]=newattrvalue;
		else this.formchange();
		this.model.set('iDetail',detail);
		this.modelafterdetailchange(attrname,attrvalue);
	},
	valuecheck:function(attrname,value){//this value check use for detail change , when detail content has been changed any values canbe checked here 
		//pass true to execute and false to fall back to original
		return true;
	},
	modeldetailchangeadapt:function(attrname,attrvalue){//this function set because sometimes we need to add new attr through input forms
		//and sometimes ,we made the info forms to be dynamic
		//on the other hand , sometimes we may want to fix the attr, not accept other change extend out of the model
		//can be customed here
		type=gettypebyname('div#info_attributes',attrname);//get the type of the attr 
		if(type=='checkbox'||type=='radio'){//if checkbox or radio or select ,the value get method are different
				detail[attrname]=getcheckfieldvalue('div#info_attributes',attrname);
		}
		else detail[attrname]=$('div#info_attributes [name='+attrname+']').val();
		this.model.set('iDetail',detail);
		this.modelafterdetailchange(attrname,attrvalue);
	},
	modelaftercommonchange:function(args){//after model common change ,always change the div acrodinglly 
		//this.model.trigger('change:div');
		//this.call_parent_handle({type:'common',args:args});
	},
	modelafterdetailchange:function(attrname,attrvalue){//this function is a customed area which used for detai change
		//if(attrname=='iShowicon') {
		//	form_loadicon(this.model.id);
		//	this.model.trigger('change:icon');
		//}
		if(attrname=='iDataid'){
			var iHandlediv=div_find(this.model.id);
			iHandlediv.attr("id",$('div#info_attributes [name='+attr+']').val());
		}
		//this.call_childs_handle({type:'detail',args:{attrname:attrname,attrvalue:attrvalue}});
	},
	call_parent_handle:function(args){//sometimes , we want the parent model can be associated to this model's change , we use this function to call parent actions
		var iParentmodel=iElementlist.get(this.model.get('iParent'));
		if(iParentmodel) iParentmodel.iview.childs_change_handle(this.model.id,args);
	},
	call_childs_handle:function(args){//accordingly , we want its' children will be respond to any changes with it's parent model ,we set this function to initiate childs actions
		if(this.model.icollection){
			this.model.icollection.call_childs_handle(this.model.id,args);
		}
	},
	undochange:function(){//when you make changes to a model or element ,but you find it's not the apperance to what you think
		//it's easy ,just undo all the changes ,and turn back to its origiral apperance
	},
	divchange:function(){//this func contain the response for change the div 
		//the div change because that some action change the attr in common that need the div to coresponde changing 
		//and if the model attr change ,maybe will cause both the div change and the form change
		div_resetdiv(this.model.id);//adjust the div size,this reset affect all the element change 
		div_resetshade(this.model.id);//shade field has several function ,firsr some element need a color to discriminate,the shadow can be opercity 
		//and second the border to highlight the focued element are set to shade instead of the element div it self ,that's the main function 
		this.otherreset();//other reset can be customed ,such as image , text field ,or the other
	},
	setdivbackground:function(attrname,bgcolor){//this function set because sometimes we need to dynamically change the element's background
		//to set the div's background ,can use the detail attributes 
		//another way is give a bgcolor phrase ,directly change the background color
		//5/2,change background field to iStylefield , because it can be controled easily and not affect the element it self
		if(bgcolor){
			this.element.children('span.iStylefield').css('background',bgcolor);
		}
		else {
			var Detail=this.model.get('iDetail');
			var attrvalue=Detail['iBackground'];
			if(isEmpty(attrvalue)) bgcolor='';
			else bgcolor='#'+attrvalue;
			this.element.children('span.iStylefield').css('background',bgcolor);
		}
	},
	setdivstyle:function(stylename){//this is the function to set the style of the element 
		//the style not only border or background ,but a series set including shape and color
		if(!stylename) stylename='iStyle';
		var Detail=this.model.get('iDetail');
		var stylevalue=Detail['iStyle'];
		if(stylevalue){
			switch(stylevalue){
				case 'ui_head' :this.resetdivstyle();this.element.addClass('ui-widget-header ui-corner-top ui-head');break;
				case 'ui_wrap' : this.resetdivstyle();this.element.addClass('ui-state-active ui-widget-overlay ui-wrap');break;
				case 'ui_footer' : this.resetdivstyle();this.element.addClass('ui-widget-header ui-corner-bottom ui-footer');break;
				case 'ui_content': this.resetdivstyle();this.element.addClass('ui-widget-content ui-corner-all ui-content');break;
				case 'custom': this.resetdivstyle();break;
			}
		}
	},
	resetdivstyle:function(){
		this.element.removeClass('ui-widget-header ui-widget-overlay ui-widget-content ui-corner-top ui-state-active ui-head ui-wrap ui-content ui-footer');
	},
	otherreset:function(){
		//this.resetimagefield();//reset
		//this.resettextfield();
	},
	resetimagefield:function(){
		div_resetimage(this.model.id);
	},
	aftertinymceload:function(){
		if(this.element_position=='relative') this.element.children('span.mceEditor').addClass('component relative');
		else this.element.children('span.mceEditor').addClass('component');
	},
	resettinymcefield:function(){//for text editor
		var iCommon=this.model.get('iCommon');
		var iCommonattr=iCommon[iPageDirection];
		$('div.mceIframeContainer').css('height','100%');
		$('td.mceIframeContainer').css('height','100%');
		//$('td.mceIframeContainer').children('iframe').css('height',iCommonattr.iHeight);
	},
	resettextfield:function(){
		div_resettext(this.model.id);
	},
	resetfoldercontent:function(){
		this.element.children('.iFoldercontent').accordion('resize');
				//accordion( "option", "fillSpace", true );
	},
	formchange:function(){//simily to upon ,but form instead 
		info_fillattributes(this.model.id);
	},
	draghandle:function(args){
		this.modelcommonchange(args,true);
		this.formchange();
	},
	dragstop:function(args){
		args=model_constructcommonargsbyargs(this.model.id,args);
		this.dragfix(args);
		this.divchange();
	},
	dragfix:function(args){//there is not a good way to solve the div out problem in chrome and IE, so only this function to used
		//checkinfo=coordinationcheck(this.model.id,args.iStartx,args.iStarty,args.iWidth,args.iHeight);
		//if(checkinfo=='xrightout') this.divchange();
		//if(checkinfo=='ybottomout') this.divchange();
		//model_adjustcommon(this.model.id);
	},
	resizehandle:function(args){
		if(squarefixxed==true){
			if(model_ratiofixxed(this.model.id)==true){//this check if the element has a image displayed ,to confirm the ratiofixxed
				var ratio=model_getratio(this.model.id);
				args.iWidth=args.iHeight*ratio;
				this.modelcommonchange(args,true);
				this.divchange();
			}
			else{
				var square=args.iWidth>args.iHeight?args.iWidth:args.iHeight;
				args.iWidth=square;
				args.iHeight=square;
				this.modelcommonchange(args,true);
				this.divchange();
			}
			squarefixxed=false;
		}
		else{
			this.modelcommonchange(args,true);
		}
		this.formchange();
		div_resetshade(this.model.id);
		this.otherreset();//other reset may include imagereset or textreset ,to meet the custom need here ,otherreset can be customed easily
		this.advancedreset();//the advanced reset include some function not commonly used ,such as image files changes or some interactive display 
	},
	advancedreset:function(){},
	advancedresetimage:function(){
		var imagename=this.getimagename();
		if(this.setimagedisplayallowed()){
			var imgurl=this.setimageurl(imagename);
			var src=this.element.children('span.iImagefield').children('img').attr('src');
			if(imgurl!=src){
				this.element.children('span.iImagefield').children('img').attr('src',imgurl);
			}
		}
	},
	resizable:true,//set some options for drag and resize
	draggable:true,
	div_focus:function(){//add this new function to handle when the focus operation is all about the element
		this.unlock();//unlock this div for change and move 
		div_settop(this.model.id);//bring the div to front
		//div_setparenttop(this.model.id);//set the parent div to top 
		div_set_selected(this.model.id);//set the div to maked up 
		if(this.resizable) div_resize(this.model.id);//resize the div 
		if(this.draggable) {
			div_drag(this.model.id);//drag the div
			div_keyscontrol(this.model.id);//begin the keyscontrol it , alert that this keycontrol can only apple to the current focused item
		}
	},
	beforeattributesfill:function(){},//we can add some dynamic contents to the attributes area before fill in the attributes info
	info_focus:function(){
		info_resetattributes();//empty the attributes area 
		info_resetresources();//empty the resources area 
		info_loadattributes(this.model.id);//the resources is image or image list 
		this.beforeattributesfill();
		info_fillattributes(this.model.id);
		this.info_resources_focus();
		info_bindattributes_input(this.model.id);
		info_focustab('info_attributes');// when a focus happy ,alway focus to the info attributes area 
	},
	info_resources_focus:function(){//this function should set to choose which attribute to use to load the resources area and display
		//it maybe a image or a imagelist ,etc
		var Detail=this.model.get('iDetail');
		var imgname=this.getimagename();
		var imgArray=Detail[imgname];
		this.resources_info_load(imgname,imgArray); 
	},
	dom_focus:function(){
		dom_item_focus(this.model.id);
	},
	beforefocus:function(){},
	focus:function(){// this function use to focus the div 
		if(elementfocus==true&&iCurrentModel&&iCurrentModel.id==this.model.id){
		}
		else{
			if(elementfocus==true&&iCurrentModel) {//end the previous element and to operate the next
				model_confirm(iCurrentModel.id)
			}
				iCurrentModel=this.model;//set currentmodel to this
				this.beforefocus();//sometimes we want do something before the element focus process ,we use this function
				this.info_focus();
				this.div_focus();
				this.dom_focus();
				elementfocus=true;//global set that a element has been selected or focused,this is a global varible
				//form_fill(this.model.id);//fill the form info field
				this.setbutton();
				this.afterfocus();//custom set the focus operations
		}
	},
	setcontrolbutton:function(){//these controlbutton are basically control of the element ,such as confirm ,remove 
		div_createcontrolbutton(this.model.id);
	},
	setcontentbutton:function(){//content buttons ,which handle the content create operations
	},
	set_info_window_button:function(){//these buttons are at the bottom of the info_window ,which will perform some opertions
		$('div.info_window').dialog("option", "buttons", {
			"save":function(){
				iCurrentModel.trigger('confirm');
			}
		});
	},
	setbutton:function(){
		this.setcontrolbutton();
		this.setcontentbutton();
		this.set_info_window_button();
	},
	afterfocus:function(){},
	creatediv:function(){//create a div or to recall a div to show 
		this.beforedivcreate();
		div_createaddDiv(this.model.id,this.model.get('iType'));
		this.element=div_find(this.model.id);//when a div create point element to it
		this.afterdivcreate();
		this.div_position_patch();//sometimes we need to change the element and it's component's position and style ,wo use this patch
	},
	div_position_patch:function(){
		div_creatediv_patch(this.model.id,this.element_position);
	},
	beforedivcreate:function(){},//sometimes before div create ,we want set some changes to common ,use this function
	afterdivcreate:function(){//this function called when a element div is created ,a custom area
		//the most common change is imagechange, which to init display the image which are in the image field
		this.imagechange();//form model load the image data to diaplay in the image field
		//this.textchange();//also we can set the text initial to be displayed.
	},
	div_confirm:function(){//div operation when confirm occur
		if(this.draggable) {
			this.element.draggable("destroy");
			div_releasekeyscontrol(this.model.id);// turn off the keyscontrol system,only use for focus item
		}
		if(this.resizable) this.element.resizable("destroy");
		div_resettop(this.model.id);//set the div to it's original z-index
		div_resetparenttop(this.model.id);
		div_reset_selected(this.model.id);
		this.lock(); //lock the div , so it can't be changed 
	},
	info_confirm:function(){//the info attributes confirm
		info_unbindattributes_input(this.model.id);//release the form input
		info_resetattributes();//empty attributes area
		info_resetresources();//empty resources area
		info_focustab('info_dom');
	},
	dom_confirm:function(){
		dom_item_unfocus(this.model.id);
	},
	resetbutton:function(){//reset the element buttons which may remove the button area or remove specific buttons
		$('div.info_window').dialog("option", "buttons",{});//remove the info save button
		div_removecontrolbutton(this.model.id);//remove the control buttons 
	},
	beforeconfirm:function(){},
	confirm:function(){
		this.beforeconfirm();//that the same as beforefocus
		model_update(this.model.id);//model update by id
		this.resetbutton();
		this.info_confirm();
		this.dom_confirm();
		this.div_confirm();
		resources_window_close();//close the resources window
		elementfocus=false; // no element focus now
		iCurrentModel=null;
		this.afterconfirm();//call the function to do some operations after confirm
	},
	afterupdate:function(){
	},
	afterconfirm:function(){
	},
	afterupdate:function(){
	},
	div_remove:function(){//this function set for the remove div when the model removed
		div_removediv(this.model.id);
	},
	dom_remove:function(){
		dom_removeinfo(this.model.get('iParent'),this.model.id);
	},
	other_remove:function(){},
	afterremove:function(){
		if(this.removewait) jqwait_simple_close();
		this.div_remove();
		this.dom_remove();
		if(iCurrentModel&&this.model.id==iCurrentModel.id) {
			info_resetattributes();
			info_resetresources();
			//form_reset();//clear the form info
			elementfocus=false;
			this.div_removekeyscontrol();
			this.currentmodelremove();//this function set when the remove operation is occur on the currentmodel
		}
		this.other_remove();
	},
	div_removekeyscontrol:function(){
		div_releasekeyscontrol(this.model.id);
	},
	currentmodelremove:function(){},
	removewait:true,
	removemodel:function(){//create a jqwait to handle remove , not mutiple remove allowed ,can be customed 
		//id=this.model.id;
		//derectives=[id];
		//derectivechecklist=[];
		//jqwait({
		  // start:function(){model_remove(id);},
		 //  end:function(){}
		//});
		if(this.removewait) jqwait_simple({modal:false});
		model_remove(this.model.id);
	},
	model_initadjust:function(){//this function use when a new created div need to be adjust not only in shape ,but also in position 
		var args=this.model.get('iCommon')[iPageDirection];
		var iParentdiv=div_find(this.model.get('iParentdiv'));
		var iParentwidth=iParentdiv.width();
		var iParentheight=iParentdiv.height();
		var adjust=false;
		if(args.iWidth>iParentwidth) {adjust=true;args.iWidth=iParentwidth;}
		if(args.iHeight>iParentheight) {adjust=true;args.iHeight=iParentheight;}
		if((args.iStartx+args.iWidth)>iParentwidth) {adjust=true;args.iStartx=0;}
		if((args.iStarty+args.iHeight)>iParentheight) {adjust=true;args.iStarty=0;}
		if(adjust) {
			model_update(this.model.id);
			this.divchange();
			this.formchange();
		}
	},
	buttons:{},
	buttons_beforeopen:function(){//before the buttons window open 
		buttons_create_buttons(this.buttons);
	},
	buttons_open:function(){//open the buttons window
		this.buttons_beforeopen();
		$('div.buttons_window').dialog('open');
	},
	buttons_close:function(){//close the buttons window
		$('div.buttons_window').dialog('close');
		$('div.buttons_window').empty();
	},
	set_type_field_autohide:function(){
		this.element.children('.iType').hide();
	},
	updateerror:function(args){
		if(args.status=='NonExistError'){
			this.afterremove();
		}
	},
	removeerror:function(args){}
})

var iSimpleView = iBaseView.extend({
	//so this simple view use for many model that no need any element display function ,just the simple info or simple collection storage 
	//this view still keep the baseview some important usage function which will handle the model
	//like site , root , page or etc , these element may just have some basic function needed for handle
	highlight:function(){
		this.model.icollection.highlightallchilds();
	},
	cancelhighlight:function(){
		this.model.icollection.cancelhighlightallchilds();
	},
	initstart:function(){},
	div_focus:function(){},
	setbutton:function(){
		this.set_info_window_button();
	},
	div_confirm:function(){},
	resetbutton:function(){//reset the element buttons which may remove the button area or remove specific buttons
		$('div.info_window').dialog("option", "buttons",{});//remove the info save button
	},
	div_remove:function(){},
	div_removekeyscontrol:function(){
	},
	hidediv:function(){
		this.model.set('iVisibility',false);
		modelid=this.model.id;
		$("a.dom_visibility").each(function(){
			if($(this).attr('id')==modelid){
				$(this).children('img').attr('src','n/i_invisibility.png');
			}
		})
		this.afterdivhide();
	},
	showdiv:function(){
		this.model.set('iVisibility',true);
		modelid=this.model.id;
		$("a.dom_visibility").each(function(){
			if($(this).attr('id')==modelid){
				$(this).children('img').attr('src','n/i_visibility.png');
			}
		})
		this.afterdivshow();
	}
})

var iFocusView=iBaseView.extend({
	//sometimes there is this model that it doesn't need to display only when someone click to foucs on it 
	initstart:function(){//so this function always called with the view start 
	},
	beforefocus:function(){
		if(this.clearbeforefocus){
			var parentdiv=div_find(this.model.get('iParent'));
			parentdiv.children('div').remove();
		}
		this.creatediv();
		this.divchange();
		this.initchilds();
	},
	clearbeforefocus:true,
	initchilds:function(){
		this.model.icollection.initallchilds();
	}
})
/* end for view */


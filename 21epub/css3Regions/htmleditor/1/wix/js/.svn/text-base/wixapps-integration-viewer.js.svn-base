Constants.WixApps=Constants.WixApps||{TEXT_STYLES:{Title:"font_0",Menu:"font_1","Page title":"font_2","Heading XL":"font_3","Heading L":"font_4","Heading M":"font_5","Heading S":"font_6","Body L":"font_7","Body M":"font_8","Body S":"font_9","Body XS":"font_10"},TEXT_STYLE_NAMES:{font_0:"Title",font_1:"Menu",font_2:"Page title",font_3:"Heading XL",font_4:"Heading L",font_5:"Heading M",font_6:"Heading S",font_7:"Body L",font_8:"Body M",font_9:"Body S",font_10:"Body XS"}};
Constants.WixAppEvents=Constants.WixAppEvents||{APP_PART_RESIZE:"wix:appPartResize"};
W.Classes.newClass({name:"wixapps.integration.WixAppConstants",Class:{}});
W.Components.newComponent({name:"wixapps.integration.components.AppPart",traits:[],imports:["wixapps.integration.WixAppConstants","wixapps.core.views.ViewsCustomizer","wixapps.core.views.ViewDefinitionsRepository","wixapps.core.dataservice.ItemCache","wixapps.core.dataservice.DataService","wixapps.core.views.ProxyFactory","wixapps.integration.proxies.ProxyMap"],skinParts:{inlineContent:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onLogicLoaded"],_states:["loading","error","content"],_eventDispatcher:null,EDITOR_META_DATA:{general:{settings:true,design:false},custom:[{label:"EDIT_DATA_BUTTON",command:"WAppsEditorCommands.OpenEditDataDialog",commandParameter:{}}]},initialize:function(c,a,b,d){this.parent(c,a,b);
this._appInstance=null;
this._eventDispatcher=new Events();
this.setState("content")
},render:function(){if(!this._appInstance){this._appInstance=W.Apps.getApp(this._data.get("appInnerID"));
this._appInstance.registerAppPart(this)
}},initApp:function(){this._customizations=new this.imports.ViewsCustomizer(this._appInstance.getDataItemFactory());
this._viewDefinitions=new this.imports.ViewDefinitionsRepository(this._appInstance.getDataItemFactory());
this._viewDefinitions.cloneAndListen(this._appInstance.getViewDefRepo());
this._applyCustomizationRulesToDefinitions();
this._proxyFactory=new this.imports.ProxyFactory(this._appInstance.getDataItemFactory(),this._appInstance.getTypesManager(),this._viewDefinitions,this._eventDispatcher);
(new this.imports.ProxyMap()).registerComponentProxies(this._proxyFactory);
this._partDef=this._appInstance.getPartDefinition(this._data.get("appPartName"));
if(!this._partDef){throw new Error("AppPart.initApp partName ["+this._data.get("appPartName")+"] not found in app descriptor")
}this._loadPartLogic()
},_applyCustomizationRulesToDefinitions:function(){this._customizations.clearRules();
this._customizations.addRules(this._data.get("appLogicCustomizations"));
var a=this._appInstance.getViewDefRepo();
this._viewDefinitions.getAllViewDefinitions().forEach(function(c){var b=a.getViewDefinition(c.getChildValue("forType"),c.getChildValue("name")).getValue();
this._customizations.applyAll(b);
c.setValue(b)
}.bind(this));
this.fireEvent("customizationApplied")
},getPartDef:function(){return this._partDef
},getHelpId:function(){if(this._partDef.helpId){return this._partDef.helpId
}return this._appInstance.getAppDescriptor().helpId
},getAppPartViewDefRepo:function(){return this._viewDefinitions
},getViewDef:function(){if(!this._mainProxy){return
}return this._mainProxy.getViewDefinition()
},getViewsCustomizer:function(){return this._customizations
},getMainProxy:function(){return this._mainProxy
},getAppInstance:function(){return this._appInstance
},getLogicParams:function(){var a={};
if(this._partDef.logic.display.options){Object.each(this._partDef.logic.display.options,function(d,c){a[c]=d
})
}var b=this._data.get("appLogicParams");
Object.each(b,function(d,c){a[c]=d.value
});
return a
},getEnvironment:function(){if(!this._environment){var a=this;
this._environment={_context:[{dataService:a._appInstance.getDataService(),itemCache:a._appInstance.getItemCache(),dataItemFactory:a._appInstance.getDataItemFactory()}],getProxyFactory:function(){return a._proxyFactory
},getDataItemFactory:function(){return this._getContext().dataItemFactory
},getTypesManager:function(){return a._appInstance.getTypesManager()
},getDataService:function(){return this._getContext().dataService
},getItemCache:function(){return this._getContext().itemCache
},getAppPart:function(){return a
},getAppInstance:function(){return a._appInstance
},getViewDefRepo:function(){return a._appInstance.getViewDefRepo()
},_getContext:function(){return this._context[this._context.length-1]
},newDataServiceContext:function(){var e=this.getDataService();
var d=e.getDataItemFactory().clone();
var c=new a.imports.ItemCache(d);
var b=new a.imports.DataService(e.getTransport(),d,c);
this._context.push({dataService:b,itemCache:c,dataItemFactory:d})
},popDataServiceContext:function(){if(this._context.length<2){throw"no data service context to pop"
}return this._context.pop().dataService
}}
}return this._environment
},_loadPartLogic:function(){W.Classes.get(this._partDef.logic.display.type,this._onLogicLoaded)
},_onLogicLoaded:function(b){var a=this.getEnvironment();
this._logic=new b(a);
this.fireEvent("logicLoaded");
this._runLogic()
},_runLogic:function(){var d=this.getLogicParams();
var b=this;
var a={showProxy:function(e){b.setState("content");
if(!e){return
}b._mainProxy=e;
b._mainComponent=b._mainProxy.createComponent();
b._skinParts.inlineContent.set("html","");
b._skinParts.inlineContent.adopt(b._mainComponent);
b._mainProxy.setupProxy(function(){b.fireEvent("proxyDisplayed",e)
});
b._mainProxy.addEvent("innerCompResize",function(f){if(!b._userResize){b._wCheckForSizeChangeAndFireAutoSized(1)
}})
},showLoadingIndicator:function(){b.setState("loading")
},showErrorIndicator:function(f,e){f=f||-1;
e=e||"Unspecified error";
b.setState("error")
}};
var c=this._data.get("viewName");
if(!c){c=this._partDef.views[0];
this._data.set("viewName",c,true)
}this._logic.run(c,d,a)
},_onAllSkinPartsReady:function(){this._skinParts.inlineContent.setStyles({position:"relative"})
},hasChildren:function(){return false
},isContainer:function(){return false
},_onDataChange:function(b,a,c){if(this._ignoreUpdate){return
}if(this._appInstance){this._runLogic()
}},getAppPartLogic:function(){return this._logic
},getAcceptableDataTypes:function(){return["AppPart"]
},_ruleFits:function(d,a){var b=true;
for(var c in a){if(a[c]!=d[c]){b=false
}}return b
},getCustomization:function(b){var d=[];
if(!b){return this._data.get("appLogicCustomizations")
}else{var c=this._data.get("appLogicCustomizations");
for(var a=c.length-1;
a>-1;
a--){if(this._ruleFits(c[a],b)){d.push(c[a])
}}}return d
},clearCustomizations:function(b){if(!b){this._data.set("appLogicCustomizations",[])
}else{var c=this._data.get("appLogicCustomizations");
for(var a=c.length-1;
a>-1;
a--){if(this._ruleFits(c[a],b)){c.splice(a,1)
}}}this._applyCustomizationRulesToDefinitions();
this._data.fireDataChangeEvent()
},applyCustomizationRule:function(f,b){var a=this._data.get("appLogicCustomizations");
var e=false;
var d;
f.type="AppPartCustomization";
for(var c=0;
c<a.length;
c++){d=a[c];
if(d.forType===f.forType&&d.view===f.view&&d.fieldId===f.fieldId&&d.mode===f.mode&&d.key===f.key){a.splice(c,1);
break
}}a.push(f);
this._ignoreUpdate=!b;
this._data.fireDataChangeEvent();
this._ignoreUpdate=false;
this._applyCustomizationRulesToDefinitions();
this._eventDispatcher.fireEvent(Constants.WixAppEvents.APP_PART_RESIZE)
},_onResize:function(){this.parent();
this._userResize=true;
this._eventDispatcher.fireEvent(Constants.WixAppEvents.APP_PART_RESIZE);
this._userResize=false
}}});
W.Components.newComponent({name:"wixapps.integration.components.ImageLite",imports:["mobile.core.components.image.ImageUrl"],traits:["wixapps.integration.components.traits.ImageDimensionsTrait"],Class:{Extends:"mobile.core.components.base.BaseComponent",_currentUri:"",_img:null,_imgWidth:0,_imgHeight:0,_imageMode:"",initialize:function(c,a,b){this.parent(c,a,b);
this._imageMode=b.imageMode||"fill"
},_onAllSkinPartsReady:function(){if(!this._img){this._img=new Element("img");
this._view.adopt(this._img)
}},render:function(){var a=this._view.getSize();
this.setSize(a.x,a.y)
},setOwner:function(){},invalidateSize:function(){},setWidth:function(b,a,c,d){this.parent(b,a,c);
if(!(d===true)){this.setSize(b,this._$height)
}},setHeight:function(b,a,c,d){this.parent(b,a,c);
if(!(d===true)){this.setSize(this._$width,b)
}},setImageMode:function(a){this._imageMode=a;
this.setSize(this._$width,this._$height)
},setSize:function(c,a,b){b=b||this._imageMode;
this._imgWidth=parseInt(this._data.get("width"));
this._imgHeight=parseInt(this._data.get("height"));
var g=this._getImageModeDimensionsFunc(b)({width:this._$width,height:this._$height},{width:this._imgWidth,height:this._imgHeight});
var d=new this.imports.ImageUrl().getImageUrlFromPyramid({x:parseInt(g.imgWidth),y:parseInt(g.imgHeight)},this._data.get("uri")).url;
if(this._currentUri!==d){this._currentUri=d;
this._img.setAttribute("src",d)
}var f={position:"static",width:Math.round(g.imgWidth)+1,height:parseInt(g.imgHeight),"margin-top":parseInt(g.imgTop),"margin-left":parseInt(g.imgLeft),"box-shadow":"#000 0 0 0","image-rendering":"optimizequality"};
this._img.setStyles(f);
var e={width:parseInt(c),height:parseInt(a),overflow:"hidden"};
if("wrapperWidth" in g){e.width=g.wrapperWidth
}if("wrapperHeight" in g){e.height=g.wrapperHeight
}this._$width=e.width;
this._$height=e.height;
this._view.setStyles(e);
this.fireEvent("autoSizeChange")
},getAcceptableDataTypes:function(){return["Image"]
}}});
W.Components.newComponent({name:"wixapps.integration.components.InlineText",imports:["mobile.core.components.base.BaseComponent"],skinParts:{},Class:{Extends:"mobile.core.components.base.BaseComponent",render:function(){this._view.set("html",this._data.get("text"))
},applyTextStyle:function(a){this._view.setAttribute("class",a)
},getAcceptableDataTypes:function(){return["RichText","Text"]
}}});
W.ComponentData.registerDataTypeSchema("TextInputProperties",{label:"string",placeholder:"string"});
W.Components.newComponent({name:"wixapps.integration.components.inputs.TextInput",skinParts:{input:{type:"htmlElement"}},propertiesSchemaName:"TextInputProperties",Class:{Extends:"mobile.core.components.base.BaseComponent",_states:{label:["hasLabel","noLabel"],validation:["invalid"]},Binds:["_changeEventHandler","_fireBlur","_fireKeyUp","_selectPresetFieldContent","_deselectPresetFieldContent"],render:function(){this.setPlaceholder(this.getComponentProperty("placeholder"));
this.setLabel(this.getComponentProperty("label"));
this.setValue(this.getDataItem().get("text"),false)
},_onAllSkinPartsReady:function(){this.addEvent("inputChanged",function(a){this._ignoreUpdate=true;
this.getDataItem().set("text",a.value);
this._ignoreUpdate=false
}.bind(this));
this._listenToInput()
},dispose:function(){this._stopListeningToInput();
this.parent()
},setPlaceholder:function(a){this._skinParts.input.set("placeholder",a);
if(window.Modernizr&&!window.Modernizr.input.placeholder){this._placeholderPolyFill()
}},_placeholderPolyFill:function(){function b(d){var c=d.target;
if(c.get("value")==""&&c.get("placeholder")){c.addClass("isPlaceholder");
c.set("value",c.get("placeholder"))
}}function a(d){var c=d.target;
if(c.hasClass("isPlaceholder")){c.removeClass("isPlaceholder");
c.set("value","")
}}if(!this.hasPlaceholder){this.hasPlaceholder=true;
this._skinParts.input.addEvent("focus",a);
this._skinParts.input.addEvent("blur",b)
}b({target:this._skinParts.input})
},setLabel:function(a){if(a&&typeof a=="string"){this.setState("hasLabel","label");
this._skinParts.label.set("html",a);
this._skinParts.label.uncollapse()
}else{this.setState("noLabel","label");
this._skinParts.label.set("html","");
this._skinParts.label.collapse()
}},showValidationMessage:function(a){this.setState("invalid","validation");
if(this._skinParts.message){this._skinParts.message.set("text",a);
this._skinParts.message.uncollapse()
}},resetInvalidState:function(){this.removeState("invalid","validation");
if(this._skinParts.message){this._skinParts.message.set("text","");
this._skinParts.message.collapse()
}},setValue:function(c,b){var a=this._skinParts.input;
if(this.hasPlaceholder){a.removeClass("isPlaceholder")
}if(!this._ignoreUpdate){a.set("value",c)
}if(b){a.set("isPreset","true")
}else{a.erase("isPreset")
}},_changeEventHandler:function(c){if(c.code&&!W.Utils.isInputKey(c.code)){return
}this._skinParts.input.set("isPreset","");
var b=this.getValue();
b=this.injects().Utils.convertToHtmlText(b);
var a={value:b,origEvent:c,compLogic:this};
this.fireEvent("inputChanged",a)
},_selectPresetFieldContent:function(a){if(a.target.get("isPreset")){if(!a.target.get("isSelected")){a.target.set("isSelected","true");
a.target.select()
}}},_deselectPresetFieldContent:function(a){a.target.erase("isSelected")
},_fireBlur:function(a){this.fireEvent(Constants.CoreEvents.BLUR,a)
},_fireKeyUp:function(a){this.fireEvent(Constants.CoreEvents.KEY_UP,a)
},_listenToInput:function(){this._skinParts.input.addEvent(Constants.CoreEvents.KEY_UP,this._changeEventHandler);
this._skinParts.input.addEvent(Constants.CoreEvents.KEY_UP,this._fireKeyUp);
this._skinParts.input.addEvent(Constants.CoreEvents.CUT,this._changeEventHandler);
this._skinParts.input.addEvent(Constants.CoreEvents.PASTE,this._changeEventHandler);
this._skinParts.input.addEvent(Constants.CoreEvents.CHANGE,this._changeEventHandler);
this._skinParts.input.addEvent(Constants.CoreEvents.CLICK,this._selectPresetFieldContent);
this._skinParts.input.addEvent(Constants.CoreEvents.BLUR,this._deselectPresetFieldContent);
this._skinParts.input.addEvent(Constants.CoreEvents.BLUR,this._fireBlur)
},_stopListeningToInput:function(){this._skinParts.input.removeEvent(Constants.CoreEvents.KEY_UP,this._changeEventHandler);
this._skinParts.input.removeEvent(Constants.CoreEvents.KEY_UP,this._fireKeyUp);
this._skinParts.input.removeEvent(Constants.CoreEvents.CUT,this._changeEventHandler);
this._skinParts.input.removeEvent(Constants.CoreEvents.PASTE,this._changeEventHandler);
this._skinParts.input.removeEvent(Constants.CoreEvents.CHANGE,this._changeEventHandler);
this._skinParts.input.removeEvent(Constants.CoreEvents.CLICK,this._selectPresetFieldContent);
this._skinParts.input.removeEvent(Constants.CoreEvents.BLUR,this._deselectPresetFieldContent);
this._skinParts.input.removeEvent(Constants.CoreEvents.BLUR,this._fireBlur)
},getValue:function(){var a=this._skinParts.input;
var b="";
if(!a.hasClass("isPlaceholder")){b=a.get("value")
}return b
},getAcceptableDataTypes:function(){return["Text"]
}}});
W.Classes.newClass({name:"wixapps.integration.managers.ApplicationInstance",imports:["wixapps.core.managers.TypesManager","wixapps.core.dataservice.DataServiceTransport","wixapps.core.data.DataItemFactory","wixapps.core.dataservice.ItemCache","wixapps.core.dataservice.DataService","wixapps.core.views.ViewsCustomizer","wixapps.core.views.ViewDefinitionsRepository"],Class:{Binds:["_onDescriptorLoaded"],Extends:Events,initialize:function(a){this._appParts=[];
this._idInMetasite=a.applicationId;
this._appDefinitionId=a.appDefinitionId;
this._packageName=a.packageName;
this._types=new this.imports.TypesManager();
this._dataFactory=new this.imports.DataItemFactory();
this._itemCache=new this.imports.ItemCache(this._dataFactory);
if(a.type=="wixapps"){this._transport=new this.imports.DataServiceTransport(a.datastoreId,"","");
this._dataService=new this.imports.DataService(this._transport,this._dataFactory,this._itemCache)
}else{if(a.type=="ecommerce"){this._magentoStoreId=a.magentoStoreId
}}this._customizations=new this.imports.ViewsCustomizer();
this._viewDefinitions=new this.imports.ViewDefinitionsRepository(this._dataFactory)
},loadDescriptor:function(){W.Apps.requestAppDescriptor(this._packageName,this._onDescriptorLoaded)
},getAppDefinitionId:function(){return this._appDefinitionId
},getPackageName:function(){return this._packageName
},getIdInMetasite:function(){return this._idInMetasite
},getDataService:function(){return this._dataService
},getMagentoStoreId:function(){return this._magentoStoreId
},getAppDescriptor:function(){return this._descriptor
},registerAppPart:function(a){this._appParts.push(a);
if(this.getDescriptorLoaded()){a.initApp()
}},getDescriptorLoaded:function(){return !!this._descriptor
},getTypesManager:function(){return this._types
},getDataServiceTransport:function(){return this._transport
},getDataItemFactory:function(){return this._dataFactory
},getItemCache:function(){return this._itemCache
},getCustomizations:function(){return this._customizations
},getViewDefRepo:function(){return this._viewDefinitions
},getPartDefinition:function(a){if(!this._descriptor||!this._descriptor.parts){return null
}for(var b=0;
b<this._descriptor.parts.length;
b++){if(this._descriptor.parts[b].id==a){return this._descriptor.parts[b]
}}return null
},_onDescriptorLoaded:function(d){this._descriptor=d;
var b;
var e=getSystemTypes();
for(b=0;
b<e.length;
b++){this._types.registerType(e[b])
}for(b=0;
b<d.types.length;
b++){this._types.registerType(d.types[b])
}this._customizations.addRules(d.customizations);
this._addDataEditingCustomizations();
for(b=0;
b<d.views.length;
b++){var c=this._viewDefinitions.cloneAndMultiply(d.views[b]);
for(var a=0;
a<c.length;
a++){this._customizations.applyAll(c[a]);
this._viewDefinitions.setViewDefinition(c[a])
}}for(b=0;
b<this._appParts.length;
b++){this._appParts[b].initApp()
}if(W.Viewer&&W.Viewer.isSiteReady()){this._validateZoomRelatedData()
}W.Commands.registerCommandListenerByName("EditorCommands.SiteLoaded",this,this._validateZoomRelatedData)
},_addDataEditingCustomizations:function(){var d=this.getDescriptorValue(["dataEditing","typeMetaData"]);
var c=this.getCustomizations();
for(var a in d){var b=d[a];
if(b.validationMessages){for(var e in b.validationMessages){c.addRule({forType:a,view:"editorForm",fieldId:e,mode:"*",key:"comp.validationMessage",value:b.validationMessages[e]})
}}}},getDescriptorValue:function(a){return this._getInnerValue(this._descriptor,a)
},_getInnerValue:function(c,d){var a=c;
for(var b=0;
b<d.length;
b++){a=a[d[b]];
if(!a){return null
}}return a
},_validateZoomRelatedData:function(){var c=this._descriptor.parts.filter(function(d){return !!d.zoomParams
});
var a=this._getZoomPartNameToPermaLinkMap();
var b=this;
c.forEach(function(e){var d=a[e.id];
if(!d){d=b._addPermaLinkItem(e);
a[e.id]=d
}})
},getZoomPartData:function(a){var b=this._getZoomPartNameToPermaLinkMap()[a];
return b&&b.partData
},_getZoomPartNameToPermaLinkMap:function(){if(!this._zoomAppPartsToDataItemsMap){var c=W.Data.getDataItemsByType("PermaLink");
var d=Object.values(c);
this._zoomAppPartsToDataItemsMap={};
for(var a=0;
a<d.length;
a++){var b=W.Data.getDataByQuery(d[a].get("dataItemRef"));
if(b.get("appInnerID")==this.getIdInMetasite()){this._zoomAppPartsToDataItemsMap[b.get("appPartName")]={permaLinkData:d[a],partData:b}
}}}return this._zoomAppPartsToDataItemsMap
},_addPermaLinkItem:function(c){var b=W.Data.addDataItemWithUniqueId("appPart",{type:"AppPart",appInnerID:this.getIdInMetasite(),appLogicParams:{},appLogicCustomizations:[],appPartName:c.id,viewName:c.views[0]});
var a=W.Data.addDataItemWithUniqueId("zoom",{type:"PermaLink",appType:"ListsApps",dataItemRef:"#"+b.id}).dataObject;
return{permaLinkData:a,partData:b.dataObject}
},openZoomFromHash:function(a){W.Commands.executeCommand("WViewerCommands.OpenZoom",{item:this._getItemFromHash(),getDisplayerDivFunction:this._getAppPartDivFunction(a),getHashPartsFunction:this._getHashPartsFunction(a)},this)
},openZoomForItemsList:function(e,d,c){var b=this._getZoomPartNameToPermaLinkMap()[c].permaLinkData;
var a=W.Data.createDataItem({type:"list",items:e},"list");
W.Commands.executeCommand("WViewerCommands.OpenZoom",{itemsList:a,currentIndex:d,getDisplayerDivFunction:this._getAppPartDivFunction(b),getHashPartsFunction:this._getHashPartsFunction(b)},this)
},_getAppPartDivFunction:function(a){var b=W.Data.getDataByQuery(a.get("dataItemRef"));
var c=this.getPartDefinition(b.get("appPartName"));
return function(k,g,h){var j=W.Data.createDataItem({type:b.getType()},b.getType());
j.copySchemaFieldsFrom(b,true);
var f=j.get("appLogicParams");
var l=c.zoomParams.itemIdParamName?c.zoomParams.itemIdParamName:"itemId";
f[l]={type:"AppPartParam",value:k.id};
var e=c.defaultWidth?Math.min(c.defaultWidth,g.x):g.x;
var i=c.defaultHeight?c.defaultHeight:"initial";
var d=new Element("div",{width:e});
d.setStyle("min-height",i);
W.Components.createComponent("wixapps.integration.components.AppPart","wysiwyg.viewer.skins.area.EcomZoomAreaSkin",j,null,null,function(m){h(m.getViewNode())
},null,d)
}
},_getHashPartsFunction:function(a){var c=W.Data.getDataByQuery(a.get("dataItemRef"));
var b=this.getPartDefinition(c.get("appPartName")).zoomParams;
return function(d,e){e({id:a.get("id"),title:b.urlTitle?b.urlTitle:"",extData:this._getHashExtraDataString(d.id,d.title)})
}.bind(this)
},_getHashExtraDataString:function(b,a){return b+"/"+a
},_getItemFromHash:function(){var a=W.Utils.hash.getHashParts().extData;
var b=a.split("/");
return{id:b[0],title:b[1]}
}}});
function getSystemTypes(){return[{_iid:"wix:Type",_type:"wix:Type",fields:[{name:"name",type:"String"},{name:"fields",type:"Array<wix:Field>"},{name:"validations",type:"Array<wix:Validation>",defaultValue:"[]"}]},{_iid:"wix:Field",_type:"wix:Type",fields:[{name:"name",type:"String"},{name:"type",type:"String"},{name:"defaultValue"},{name:"computed",type:"Boolean",defaultValue:false},{name:"validations",type:"Array<wix:Validation>",defaultValue:[]}]},{_iid:"wix:Validation",_type:"wix:Type",fields:[{name:"func",type:"String"},{name:"params",type:"Array",defaultValue:[]}]},{_iid:"wix:Object",_type:"wix:Type",fields:[]},{_iid:"wix:Ref",_type:"wix:Type",fields:[{name:"itemId",type:"String"},{name:"collectionId",type:"String"}]},{_iid:"wix:Permission",_type:"wix:Type",fields:[{name:"collectionId",type:"String"},{name:"operation",type:"String"},{name:"role",type:"String"}]},{_iid:"wix:Customizations",_type:"wix:Type",fields:[{name:"rules",type:"Array<wix:Object>",defaultValue:[]}]},{_iid:"wix:Image",_type:"wix:Type",fields:[{name:"title",type:"String",defaultValue:""},{name:"src",type:"String"},{name:"width",type:"Number"},{name:"height",type:"Number"}]},{_iid:"wix:Video",_type:"wix:Type",fields:[{_type:"wix:Field",name:"videoId",type:"String",defaultValue:"UAxMzrWZOpY"},{_type:"wix:Field",name:"videoType",type:"String",defaultValue:"YOUTUBE"}]},{_iid:"wix:Link",_type:"wix:Type",fields:[{name:"linkType",type:"String"},{name:"href",type:"String"},{name:"label",type:"String"},{name:"target",type:"String"},{name:"icon",type:"String"}]},{_iid:"wix:Video",_type:"wix:Type",fields:[{_type:"wix:Field",name:"videoId",type:"String",defaultValue:"UAxMzrWZOpY"},{_type:"wix:Field",name:"videoType",type:"String",defaultValue:"YOUTUBE"}]},{_iid:"wix:NumberInRange",_type:"wix:Type",fields:[{name:"value",type:"Number"},{name:"minValue",type:"Number"},{name:"maxValue",type:"Number"}]}]
}W.Classes.newClass({name:"wixapps.integration.managers.WixAppsManager",imports:["wixapps.integration.managers.ApplicationInstance"],Class:{Binds:[],initialize:function(){W.Apps=this;
this._scriptLoader=new W.ClassManager.ScriptLoader();
this._appInstanceMap={};
this._appDescriptorMap={};
this._descriptionCallBacks={};
if(W.Managers&&W.Managers.list){W.Managers.list.push({target:"Apps"})
}this._loadInstalledApps()
},_loadInstalledApps:function(){var a=W.Viewer.getAppDataHandler().getAppsData();
Object.each(a,function(c,b){if(["wixapps","ecommerce"].indexOf(c.type)!=-1){this.loadApplication(c)
}},this)
},loadApplication:function(b){var a=new this.imports.ApplicationInstance(b);
this._appInstanceMap[b.applicationId]=a;
a.loadDescriptor()
},getApp:function(a){return this._appInstanceMap[a]
},getAppByPackageName:function(a){for(var b in this._appInstanceMap){if(this._appInstanceMap[b].getPackageName()==a){return this._appInstanceMap[b]
}}return null
},requestAppDescriptor:function(b,a){if(this._appDescriptorMap[b]){a(this._appDescriptorMap[b]);
return
}this._scriptLoader.loadMissingClasses([this._buildDescriptorURL(b)]);
this._descriptionCallBacks[b]=this._descriptionCallBacks[b]||[];
this._descriptionCallBacks[b].push(a)
},_buildDescriptorURL:function(a){return"wixapps.apps."+a+".descriptor"
},registerAppDescriptor:function(c){var b=0;
var a=c.packageName;
this._appDescriptorMap[a]=c;
if(this._descriptionCallBacks[a]){for(b=0;
b<this._descriptionCallBacks[a].length;
b++){this._descriptionCallBacks[a][b](c)
}delete this._descriptionCallBacks[a]
}},openPermaLink:function(a){var c=a.get("dataItemRef");
var b=W.Data.getDataByQuery(c);
var d=this._appInstanceMap[b.get("appInnerID")];
d.openZoomFromHash(a)
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.AreaProxy",traits:["wixapps.integration.components.traits.ResizableProxyTrait"],imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",createComponent:function(){return this._createWixComponent("mobile.core.components.Container",undefined,undefined)
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.area.DefaultAreaSkin"
},_getDefaultStyleName:function(){return"c1"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.ButtonProxy",traits:["wixapps.integration.components.traits.ResizableProxyTrait"],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_handleSizeChange"],createComponent:function(){var a=this._createWixComponent("wysiwyg.viewer.components.SiteButton",this._createRawData(),undefined);
if(!this._innerElement.hasAttribute("height")){this._innerElement.setAttribute("height","30")
}return a
},_createRawData:function(){var a=this._viewContext.getValue();
return{type:"SiteButton",label:this._getLabel(a),href:this._getChildValue("href","",a),target:this._getChildValue("target","_self",a),linkType:this._getChildValue("linkType","FREE_LINK",a),icon:this._getChildValue("icon","",a)}
},_getLabel:function(a){var b=null;
b=this._def.getChildValue("label");
b=b||(this._viewContext.getTypeName()=="String"&&a);
b=b||a.label;
b=b||"Submit";
return b
},_getChildValue:function(b,a,c){return this._def.getChildValue(b)||(c[b]?c[b]:a)
},_onDataChanged:function(a){this._refresh();
this.parent(a)
},_onDefinitionsChanged:function(a){this._refresh();
this.parent(a)
},_refresh:function(){if(!this._componentLogic){return
}this._setNewData();
this._handleSizeChange()
},_setNewData:function(){var a=this._componentLogic.getDataItem();
a.setData(this._createRawData())
},_getPropSchemaName:function(){return"ButtonProperties"
},_getPropMap:function(){return{align:"align",margin:"margin"}
},_stylesMap:{"default":{skin:"wysiwyg.viewer.skins.button.BasicButton",style:"b3"},ecomViewCart:{skin:"wysiwyg.viewer.skins.button.BasicButton",style:"ecom_vc1"},ecomCheckout:{skin:"wysiwyg.viewer.skins.button.EcomCheckoutButton",style:"ecom_co1"},ecomAddProduct:{skin:"wysiwyg.viewer.skins.button.EcomAddProductButton",style:"ecom_ap"}},_getDefaultSkinName:function(){var a=this._def.getChildValue("styleNS")||"default";
return this._stylesMap[a].skin
},_getDefaultStyleName:function(){var a=this._def.getChildValue("styleNS")||"default";
return this._stylesMap[a].style
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.ComboBoxProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",initialize:function(a,b){this.parent(a,b)
},createComponent:function(){this.useSkinsInsteadOfStyles();
return this._createWixComponent("wysiwyg.viewer.components.inputs.ComboBoxInput",this._createRawData())
},_createRawData:function(){var b=this._viewContext.getChildByRef("items").getValue();
var a=b.map(this._getOptionWDataItem);
return{type:"SelectableList",items:a,selected:null}
},_getOptionWDataItem:function(b){var c={type:"SelectOption",value:b.value,text:b.text,enabled:b.enabled,description:b.description};
var a=W.Data.createDataItem(c);
a.setMeta("isPersistent",false);
return a
},_getPropSchemaName:function(){return"ComboBoxInputProperties"
},_getPropMap:function(){return{hasPrompt:"hasPrompt",promptText:"promptText"}
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.input.ComboBoxInputSkin"
},_onDataChanged:function(a){this._replaceAllTable()
},_replaceAllTable:function(){var a=this._element;
var b=this.createComponent();
a.parentNode.replaceChild(b,a);
this.setupProxy()
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.DateProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.LabelProxy",_createFormattedText:function(){var b=this._viewContext.getValue();
var a=new Date(b);
return"<span class='"+this._determineStyle()+"'>"+a.toLocaleDateString()+"</span>"
},getProxyMetaTags:function(){return["text"]
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.DateSelectorProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_onComponentDataChanged"],initialize:function(a,b){this.parent(a,b)
},createComponent:function(){var b="wysiwyg.viewer.components.inputs.DateInput";
this.useSkinsInsteadOfStyles();
var a=this._getIsoDate();
return this._createWixComponent(b,{type:"Text",text:a})
},_getPropSchemaName:function(){return"ComboBoxInputProperties"
},_getPropMap:function(){return{hasPrompt:"hasPrompt",promptText:"promptText"}
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.input.DateInputSkin"
},_getIsoDate:function(){var b=this._viewContext.getValue();
var a=new Date(b);
if(a.getDate()==new Date(0).getDate()){b=new Date().toISOString()
}return b
},_onDataChanged:function(a){if(!this._userInputChange){this._element.getLogic().getDataItem().set("text",this._getIsoDate())
}},_onComponentDataChanged:function(a){var b=this._element.getLogic().getDataItem().get("text");
this._userInputChange=true;
this._viewContext.setValue(b);
this._userInputChange=false
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.FormattedPriceProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.LabelProxy",_currencySymbols:{GBP:"\u00A3",USD:"$",NIS:"\u20AA"},_createRawData:function(){var a=this._viewContext.getValue();
return{type:"RichText",text:"<span class='"+this._determineStyle()+"'>"+this._currencySymbols[a.currency]+a.amount.toFixed(2)+"</span>"}
},_onDefinitionsChanged:function(){var a=this._determineStyle();
var b=this._componentLogic.getDataItem().get("text");
b=b.replace(/^\<span[^>]*\>/,"<span class='"+a+"'>");
this._componentLogic.getDataItem().set("text",b)
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.GalleryProxy",imports:["wysiwyg.viewer.utils.GalleryUtils"],traits:["wixapps.integration.components.traits.ResizableProxyTrait"],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_sequencingHook","_sequencingRolloverHook","_onSequencerCompleted"],_sequencerCompleted:false,initialize:function(a,b){this.parent(a,b);
this._childrenComp=b.getChildByRef("childrenComp")||a.getEnvironment().getDataItemFactory().createDataItem({},b);
this._rolloverComp=b.getChildByRef("rolloverComp");
this._galleryUtils=new this.imports.GalleryUtils()
},createComponent:function(){var b=this._createRawData();
var a={sequencingHook:this._sequencingHook};
if(this._rolloverComp){a.rolloverHook=this._sequencingRolloverHook
}return this._createWixComponent("wysiwyg.viewer.components.PaginatedGridGallery",b,a)
},_getPropMap:function(){return{columns:"numCols",rows:"maxRows",gap:"margin",transition:"transition",expandEnabled:"expandEnabled"}
},_getPropSchemaName:function(){return"PaginatedGridGalleryProperties"
},_sequencingHook:function(a,c,b){return this._createGalleryDisplayer(a,this._childrenComp)
},_sequencingRolloverHook:function(a,c,b){return this._createGalleryDisplayer(a.newContext(),this._rolloverComp)
},_createGalleryDisplayer:function(a,d){var c=this._viewContext.getEnvironment().getProxyFactory().createProxy(a,d);
var b=c.createComponent();
b.setStyles({overflow:"hidden",width:"1px",height:"1px"});
if(Browser.firefox){var e=new Element("div");
e.adopt(b);
b.setStyles({width:"100%",height:"100%"});
b=e
}this._galleryUtils.createMinimalGalleryDisplayer(b,a);
c.setupProxy();
return b
},_createRawData:function(){var a=this._viewContext.getChildren();
return{type:"ImageList",items:a}
},_stylesMap:{"default":{skin:"wysiwyg.viewer.skins.paginatedgrid.PaginatedGridDefaultSkin",style:"pagg1"},contentGallery:{skin:"wysiwyg.viewer.skins.paginatedgrid.PaginatedGridEcomSkin",style:"pgg_cg1"}},_getDefaultSkinName:function(){var a=this._def.getChildValue("styleNS")||"default";
return this._stylesMap[a].skin
},_getDefaultStyleName:function(){var a=this._def.getChildValue("styleNS")||"default";
return this._stylesMap[a].style
},_onDefinitionsChanged:function(){this.parent.apply(this,arguments);
window.requestAnimFrame(function(){this._onAppResize()
}.bind(this))
},_onComponentWixified:function(){this._componentLogic.getSequencer().addEvent("productionFinished",this._onSequencerCompleted);
this._componentLogic.getSequencer().addEvent("productionFinished",function(){this._viewContext.getEnvironment().getEventsDispatcher().fireEvent(Constants.WixAppEvents.APP_PART_RESIZE)
}.bind(this));
this._activateResizeMechanism()
},_onSequencerCompleted:function(){this._componentLogic.getSequencer().removeEvent("productionFinished",this._onSequencerCompleted);
this._sequencerCompleted=true;
this._testIfReady()
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.HorizontalLineProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",createComponent:function(){return this._createWixComponent("wysiwyg.viewer.components.FiveGridLine",undefined,undefined,undefined)
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.FiveGridLineSkin"
},_getDefaultStyleName:function(){return"hl1"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.ImageLiteProxy",imports:[],traits:["wixapps.integration.components.traits.ResizableProxyTrait"],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:[],createComponent:function(){var a=this._createRawData();
return this._createWixComponent("wixapps.integration.components.ImageLite",a,{imageMode:this._def.getChildValue("imageMode")||"fill"})
},_createRawData:function(){var a=this._viewContext.getValue();
return{type:"Image",uri:a.src,title:a.title,width:a.width,height:a.height}
},_onDataChanged:function(){var a=this._viewContext.getValue();
this._componentLogic.getDataItem().set("uri",a.src,false);
this._componentLogic.getDataItem().set("title",a.title,false);
this._componentLogic.getDataItem().set("width",a.width,false);
this._componentLogic.getDataItem().set("height",a.height)
},_onDefinitionsChanged:function(a){this._componentLogic.setImageMode(this._def.getChildValue("imageMode")||"fill")
},_getDefaultSkinName:function(){return"mobile.core.skins.InlineSkin"
},_getDefaultStyleName:function(){},_getImplicitDimensions:function(){var a=this._def.getChildValue("imageMode")||"fill";
if(a=="fitWidth"){return["height"]
}else{if(a=="fitHeight"){return["width"]
}else{return[]
}}},_checkMinHeight:function(){}}});
W.Classes.newClass({name:"wixapps.integration.proxies.ImageProxy",imports:[],traits:["wixapps.integration.components.traits.ResizableProxyTrait"],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_handleSizeChange"],createComponent:function(){var b=this._calcSizeAndMode();
var c=this._createRawData(b);
var a={type:"WPhotoProperties",displayMode:b.mode};
return this._createWixComponent("wysiwyg.viewer.components.WPhoto",c,undefined,a)
},_calcSizeAndMode:function(){var c=this._viewContext.getValue();
var b=this._def.getChildValue("width")||0;
var a=this._def.getChildValue("height")||0;
if(!b&&!a){b=200
}var d=b&&a?"fill":"fitWidth";
if(d=="fitWidth"){if(b){a=b*c.height/c.width
}else{b=a*c.width/c.height
}}return{mode:d,width:b,height:a}
},_createRawData:function(a){var b=this._viewContext.getValue();
return{type:"Image",uri:b.src,title:b.title,width:b.width,height:b.height}
},_onComponentWixified:function(){this.parent();
this._validateSizes()
},_validateSizes:function(){var a=this._calcSizeAndMode();
this._componentLogic.setComponentProperty("displayMode",a.mode);
this._componentLogic.setWidth(a.width,false,false);
this._componentLogic.setHeight(a.height,true,false);
this._handleSizeChange()
},_handleSizeChange:function(){this._element.setStyles({width:this._componentLogic.getWidth(),height:this._componentLogic.getHeight()})
},_onDefinitionsChanged:function(a){this.parent(a);
if(this._componentLogic){this._componentLogic.addEvent("render",function(){this._validateSizes();
this._componentLogic.removeEvent("render",arguments.callee)
}.bind(this))
}},_onDataChanged:function(){var a=this._viewContext.getValue();
this._componentLogic.getDataItem().set("uri",a.src,false);
this._componentLogic.getDataItem().set("title",a.title,false);
this._componentLogic.getDataItem().set("width",a.width,false);
this._componentLogic.getDataItem().set("height",a.height);
this._validateSizes()
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.photo.RoundPhoto"
},_getDefaultStyleName:function(){return"wp1"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.ImageSelectorProxy",imports:[],traits:[],Class:{Extends:"wixapps.integration.proxies.ImageProxy",Binds:["_openReplaceMedia","_onImgSelect"],_onComponentWixified:function(){this.parent();
this._galleryTypeID=this._def.getChildValue("galleryConfigID")||"photos";
this._element.addEvent("click",this._openReplaceMedia);
this._element.setStyle("cursor","pointer");
this._element.grab(new Element("div"))
},_openReplaceMedia:function(){W.EditorDialogs.openMediaDialog(this._onImgSelect,false,this._galleryTypeID,false)
},_onImgSelect:function(a){var b=this._viewContext.getValue();
b.width=parseInt(a.width);
b.height=parseInt(a.height);
b.src=a.uri;
this._viewContext.setValue(b)
},_getDefaultSkinName:function(){return"wixapps.integration.skins.editor.ImageSelectorSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.InlineTextProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.LabelProxy",createComponent:function(){var a=this.parent();
a.setAttribute("class",this._determineStyle());
return a
},_createRawData:function(){var a=this._viewContext.getValue();
return{type:"RichText",text:a}
},_onDefinitionsChanged:function(){var a=this._determineStyle();
this._componentLogic.applyTextStyle(a)
},_getViewElement:function(){return"span"
},_getCompName:function(){return"wixapps.integration.components.InlineText"
},_getDefaultStyleName:function(){},_getDefaultSkinName:function(){return"mobile.core.skins.InlineSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.LabelProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",createComponent:function(){this.useSkinsInsteadOfStyles();
var a=this._createRawData();
return this._createWixComponent(this._getCompName(),a)
},_createFormattedText:function(){var a=this._viewContext.getValue();
return"<span class='"+this._determineStyle()+"'>"+a+"</span>"
},_createRawData:function(){return{type:"RichText",text:this._createFormattedText()}
},_onComponentWixified:function(){var a=this._def.getChildValue("noWrap");
if(a===true||a==="true"){this._element.setStyle("white-space","nowrap")
}},_onDefinitionsChanged:function(){this.parent.apply(this,arguments);
var a=this._determineStyle();
var b=this._componentLogic.getDataItem().get("text");
b=b.replace(/^\<span[^>]*\>/,"<span class='"+a+"'>");
this._componentLogic.getDataItem().set("text",b)
},_onDataChanged:function(a){if(this._componentLogic){var b=this._viewContext.getValue();
this._componentLogic.getDataItem().set("text",this._createFormattedText())
}},_determineStyle:function(){var c="";
var a;
var b=Constants.WixApps.TEXT_STYLES[this._def.getChildValue("style")]||this._getDefaultStyleName();
a=this._def.getChildValue("color")||"";
b+=(a?" "+a:"");
var d=this._def.getChildValue("lineThrough");
b+=(d?" lineThrough ":"");
var e=this._def.getChildValue("singleLine");
b+=(e?" singleLine ":"");
return b
},_getCompName:function(){return"wysiwyg.viewer.components.WRichText"
},_getDefaultStyleName:function(){return"font_8"
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.WRichTextSkin"
},getProxyMetaTags:function(){return["text"]
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.NumberInputProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.TextInputProxy",createComponent:function(){this.parent();
var a=this._createRawData();
return this._createWixComponent("wysiwyg.viewer.components.inputs.NumberInput",a)
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.input.NumberInputSkin"
},_getDefaultStyleName:function(){return"numi1"
},_getPropSchemaName:function(){return"NumberInputProperties"
},_getPropMap:function(){return{minValue:"minValue",maxValue:"maxValue"}
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.NumericStepperProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_onComponentDataChanged"],createComponent:function(){this.parent();
var a=this._createRawData();
return this._createWixComponent("wysiwyg.viewer.components.inputs.NumberInput",a)
},_createRawData:function(){var a=this._viewContext.getValue();
return{type:"Text",text:a.value}
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.input.NumberInputSkin"
},_updateCompProperties:function(a){return this._getPropertiesFromData()
},_mapCompProperties:function(){return this._getPropertiesFromData()
},_getPropertiesFromData:function(){var a=this._viewContext.getValue();
return{type:"NumberInputProperties",minValue:a.minValue,maxValue:a.maxValue}
},_onDataChanged:function(a){if(this._componentLogic&&!this._ignoreUpdate){this._componentLogic.getDataItem().set("text",this._viewContext.getValue().value)
}},_onComponentDataChanged:function(a,d,b){this._ignoreUpdate=true;
var c=this._viewContext.getValue();
c.value=b.text;
this._viewContext.setValue(c);
this._ignoreUpdate=false
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.OptionsListProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Static:{listType:{text:{compType:"wysiwyg.viewer.components.inputs.TextOption",compSkin:"wysiwyg.viewer.skins.option.TextOptionSkin"},color:{compType:"wysiwyg.viewer.components.inputs.ColorOption",compSkin:"wysiwyg.viewer.skins.option.ColorOptionSkin"}}},initialize:function(a,b){this.parent(a,b);
this._listType=this._viewContext.getChildByRef("optionType").getValue()
},createComponent:function(){this.useSkinsInsteadOfStyles();
return this._createWixComponent("wysiwyg.viewer.components.inputs.OptionsListInput",this._createRawData(),this.listType[this._listType])
},_createRawData:function(){var b=this._viewContext.getChildByRef("items").getValue();
var a=b.map(this._getOptionWDataItem);
return{type:"SelectableList",items:a,selected:null}
},_getOptionWDataItem:function(b){var c={type:"SelectOption",value:b.value,text:b.text,enabled:b.enabled,description:b.description};
var a=W.Data.addDataItemWithUniqueId("apps",c).dataObject;
a.setMeta("isPersistent",false);
return a
},_onComponentDataChanged:function(){},_onDataChanged:function(a){this._refreshComponentData()
},_onDefinitionsChanged:function(){this.parent.apply(this,arguments);
this._refreshComponentData()
},_refreshComponentData:function(){if(!this._componentLogic){return
}var a=this._createRawData();
this._componentLogic.getDataItem().setData(a)
},_replaceAllTable:function(){var a=this._element;
var b=this.createComponent();
a.parentNode.replaceChild(b,a);
this.setupProxy()
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.option.OptionsListInputSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.ProxyMap",imports:["wixapps.integration.proxies.HorizontalLineProxy","wixapps.integration.proxies.SwitchProxy","wixapps.integration.proxies.LabelProxy","wixapps.integration.proxies.DateProxy","wixapps.integration.proxies.DateSelectorProxy","wixapps.integration.proxies.InlineTextProxy","wixapps.integration.proxies.TextInputProxy","wixapps.integration.proxies.NumberInputProxy","wixapps.integration.proxies.NumericStepperProxy","wixapps.integration.proxies.RichTextEditorInlineProxy","wixapps.integration.proxies.RichTextEditorProxy","wixapps.integration.proxies.FormattedPriceProxy","wixapps.integration.proxies.ImageProxy","wixapps.integration.proxies.ImageLiteProxy","wixapps.integration.proxies.ImageSelectorProxy","wixapps.integration.proxies.VerticalListProxy","wixapps.integration.proxies.ButtonProxy","wixapps.integration.proxies.layout.CssLayoutProxy","wixapps.integration.proxies.layout.BoxLayoutProxy","wixapps.integration.proxies.layout.StackLayoutProxy","wixapps.integration.proxies.SpacerProxy","wixapps.integration.proxies.GalleryProxy","wixapps.integration.proxies.SuperFlowProxy","wixapps.integration.proxies.VerticalListEditorProxy","wixapps.integration.proxies.TableProxy","wixapps.integration.proxies.OptionsListProxy","wixapps.integration.proxies.ComboBoxProxy","wixapps.integration.proxies.TextAreaProxy","wixapps.integration.proxies.SliderGalleryProxy","wixapps.integration.proxies.VideoProxy","wixapps.integration.proxies.VideoThumbProxy","wixapps.integration.proxies.VideoSelectorProxy"],traits:[],Class:{registerComponentProxies:function(a){a.registerProxy("Label",this.imports.LabelProxy,[{forType:"String",forMode:"view"}]);
a.registerProxy("Date",this.imports.DateProxy);
a.registerProxy("DateEdit",this.imports.DateSelectorProxy);
a.registerProxy("InlineText",this.imports.InlineTextProxy);
a.registerProxy("TextInput",this.imports.TextInputProxy,[{forType:"String",forMode:"edit"}]);
a.registerProxy("NumberInput",this.imports.NumberInputProxy);
a.registerProxy("NumericStepper",this.imports.NumericStepperProxy,[{forType:"NumberInRange",forMode:"edit"}]);
a.registerProxy("RichTextEditorInline",this.imports.RichTextEditorInlineProxy);
a.registerProxy("RichTextEditor",this.imports.RichTextEditorProxy);
a.registerProxy("Price",this.imports.FormattedPriceProxy,[{forType:"Price",forMode:"view"}]);
a.registerProxy("Image",this.imports.ImageProxy);
a.registerProxy("Video",this.imports.VideoProxy,[{forType:"Video",forMode:"view"}]);
a.registerProxy("VideoSelector",this.imports.VideoSelectorProxy,[{forType:"Video",forMode:"edit"}]);
a.registerProxy("VideoThumb",this.imports.VideoThumbProxy);
a.registerProxy("ImageLite",this.imports.ImageLiteProxy,[{forType:"wix:Image",forMode:"view"}]);
a.registerProxy("ImageSelector",this.imports.ImageSelectorProxy,[{forType:"wix:Image",forMode:"edit"}]);
a.registerProxy("VerticalList",this.imports.VerticalListProxy,[{forType:"Array",forMode:"view"},{forType:"Array",forMode:"edit"}]);
a.registerProxy("VerticalListEditor",this.imports.VerticalListEditorProxy);
a.registerProxy("Gallery",this.imports.GalleryProxy);
a.registerProxy("VBox",this.imports.BoxLayoutProxy);
a.registerProxy("HBox",this.imports.BoxLayoutProxy);
a.registerProxy("Stack",this.imports.StackLayoutProxy);
a.registerProxy("Css",this.imports.CssLayoutProxy);
a.registerProxy("VSpacer",this.imports.SpacerProxy);
a.registerProxy("HSpacer",this.imports.SpacerProxy);
a.registerProxy("HorizontalLine",this.imports.HorizontalLineProxy);
a.registerProxy("Switch",this.imports.SwitchProxy);
a.registerProxy("SuperFlow",this.imports.SuperFlowProxy);
a.registerProxy("Button",this.imports.ButtonProxy);
a.registerProxy("Table",this.imports.TableProxy);
a.registerProxy("OptionsList",this.imports.OptionsListProxy,[{forType:"OptionsList",forMode:"view"}]);
a.registerProxy("ComboBox",this.imports.ComboBoxProxy,[{forType:"ComboOptionsList",forMode:"view"}]);
a.registerProxy("TextArea",this.imports.TextAreaProxy);
a.registerProxy("SliderGallery",this.imports.SliderGalleryProxy,[{forType:"Array<wix:Image>",forMode:"view"}])
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.RichTextEditorInlineProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",createComponent:function(){var a=this._createRawData();
return this._createWixComponent("wysiwyg.editor.components.richtext.WRichTextEditor",a)
},_getDefaultSkinName:function(){return"wysiwyg.editor.skins.WRichTextEditorSkin"
},_getDefaultStyleName:function(){return"wrte1"
},_createRawData:function(){var a=this._viewContext.getValue();
return{type:"RichText",text:a}
},_onComponentWixified:function(){this._componentLogic.setHeight(25);
this._toolbarId=this._componentLogic.getViewNode().id+"_toolbar";
this._componentLogic._skinParts.toolbar.set("id",this._toolbarId);
this._componentLogic._skinParts.toolbar.setStyle("position","static");
this._componentLogic._skinParts.editor.setStyle("position","static");
var a=function(d){var c=this._componentLogic.editor;
var e=this._componentLogic._skinParts.editor;
c.container.$.setStyles({position:"static",width:"100%"});
c.on("change",function(){this._viewContext.setValue(e.get("html"))
}.bind(this))
}.bind(this);
var b=function(e){if(e.data&&(e.data.className=="cke_styles"||e.data.className=="cke_button_textcolor")){var c=e.data._.panel;
var d=c.element.$;
if(d.className.indexOf("z-dialog")==-1){d.className=d.className+" z-dialog"
}}}.bind(this);
this._componentLogic.createEditor(this._dataItem,this._toolbarId,a,b)
},_onDefinitionsChanged:function(){},_onDataChanged:function(a){if(this._componentLogic){this._componentLogic.getDataItem().set("text",this._viewContext.getValue())
}}}});
W.Classes.newClass({name:"wixapps.integration.proxies.RichTextEditorProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_listenToClickOutside"],_children:[],_label:null,_editor:null,_components:{label:null,editor:null},initialize:function(a,b){this.parent(a,b);
this._label=a.getEnvironment().getProxyFactory().createProxy(a,b.addChild({name:"Label"}));
this._editor=a.getEnvironment().getProxyFactory().createProxy(a,b.addChild({name:"RichTextEditorInline"}));
this._children=[this._label,this._editor]
},createComponent:function(){var a=new Element("div",{styles:{border:"1px solid #b4b4b4"}});
this._element=a;
this._components.label=this._label.createComponent();
a.grab(this._components.label);
this._components.label.addEvent("click",function(){this.setViewMode("edit")
}.bind(this));
this._components.editor=this._editor.createComponent();
a.grab(this._components.editor);
this.setViewMode("view");
return a
},setViewMode:function(a){this._components.label.setStyle("display",a=="edit"?"none":"inherit");
this._components.editor.setStyle("display",a=="edit"?"inherit":"none");
if(a=="edit"){document.body.addEvent("mousedown",this._listenToClickOutside)
}else{document.body.removeEvent("mousedown",this._listenToClickOutside)
}},_listenToClickOutside:function(a){this.setViewMode("view")
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.SliderGalleryProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",createComponent:function(){this.useSkinsInsteadOfStyles();
var a=this._createWixComponent("wysiwyg.viewer.components.SelectableSliderGallery",this._createRawData(),null);
a.setStyle("position","relative");
return a
},_createRawData:function(){var a=this._viewContext.getChildren();
var b=[];
a.forEach(function(c){b.push(this._getWImage(c.getValue()))
},this);
return{type:"ImageList",items:b}
},_getWImage:function(b){var c={type:"Image",title:"",uri:b.src,description:"",height:"height",width:"width",borderSize:"",alt:""};
var a=W.Data.createDataItem(c);
a.setMeta("isPersistent",false);
return a
},_getPropSchemaName:function(){return"SliderGalleryProperties"
},_getPropMap:function(){return{showAutoplay:"showAutoplay",loop:"loop",showCounter:"showCounter",expandEnabled:"expandEnabled"}
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.galleryselectableslider.SelectableSliderGalleryDefaultSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.SpacerProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",_spacerType:"",_spacerSize:10,_sizePropMap:{HSpacer:"width",VSpacer:"height",InlineSpacer:"word-spacing"},createComponent:function(){return this._createElement("div")
},isBoxFlexEnabled:function(){if(this._spacerType){return this._spacerType!=="InlineSpacer"
}else{return !this._isInlineSpacer()
}},getSpacerSize:function(){return this._spacerSize
},_onProxySetup:function(){this._updateSpacerSize()
},_onDefinitionsChanged:function(){this._updateSpacerSize()
},_updateSpacerSize:function(){var c;
this._spacerType=this._def.getChildValue("name");
var a={};
if(this._isInlineSpacer()){this._spacerType="InlineSpacer";
a.display="inline";
this._element.set("text"," ")
}var b=this._def.getChildValue("size");
if(b!==undefined){this._spacerSize=b
}c=this._sizePropMap[this._spacerType];
if(this._spacerSize==="*"){this._def.getParent().addChild({"box-flex":1},"layout");
a.display="block"
}else{if(c){a[c]=parseInt(this._spacerSize)+"px"
}}this._applyStyle(this._element,a)
},_isInlineSpacer:function(){var b=this._element.getPrevious();
var a=this._element.getNext();
var c=(b?b.getStyle("display"):"");
var d=(a?a.getStyle("display"):"");
return(c=="inline")||(c=="inline-block")||(d=="inline")||(d=="inline-block")
},getProxyMetaTags:function(){var a=["spacer"];
if(this._spacerType==="InlineSpacer"){a.push("inline")
}return a
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.SuperFlowProxy",imports:["wixapps.core.layouts.SuperFlowLayout"],Class:{Extends:"wixapps.integration.proxies.WCompositeProxy",_components:[],_layout:null,_layoutModel:null,createComponent:function(){var b=this.setWidth;
this.setWidth=function(c){b.apply(this,[c]);
this._setWidth(c)
}.bind(this);
var a=this._createWixComponent("mobile.core.components.Container");
this._layout=new this.imports.SuperFlowLayout();
this._buildLayoutModel();
this._createChildComponents(a);
this._components.forEach(function(c){c.setStyle("position","absolute")
});
return a
},_buildLayoutModel:function(){var b=this._def.getValue();
var a={items:[]};
if(b.regions){a.regions=Object.clone(b.regions)
}b.items.forEach(function(d){var c={};
if(d.layout){Object.each(d.layout,function(f,e){c[e]=f
})
}a.items.push(c)
});
this._layoutModel=a
},applyLayout:function(){this._layout.setModel(this._layoutModel,this._children);
this._layout.positionElements();
this._element.setStyle("height",this._layout.getHeight())
},_setWidth:function(a){this._layoutModel.minWidth=a;
this.applyLayout()
},_onDefinitionsChanged:function(){this.applyLayout()
},_getDefaultStyleName:function(){return"c1"
},_getDefaultSkinName:function(){return"mobile.core.skins.InlineSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.SwitchProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:[],_child:null,_prevCaseId:null,initialize:function(a,b){this.parent(a,b)
},_updateSwitchState:function(){var a;
var b=false;
if(this._def.getChildByRef("value")){a=this._def.getChildValue("value").toString()
}else{a=this._viewContext.evaluatePath(this._def.getChildValue("data")||"this").getValue().toString()
}if(a!==this._prevCaseId){this._prevCaseId=a;
if(this._child){this._child.dispose();
this._child=null
}if(this._def.getChildByRef("cases")){var d=this._def.getChildByRef("cases").getChildByRef(a)||this._def.getChildByRef("cases").getChildByRef("default");
if(d&&d.getValue()!="NO_PROXY"){this._child=this._viewContext.getEnvironment().getProxyFactory().createProxyFromItemDefinition(this._viewContext,d).proxy;
var c=this._child.createComponent();
if(c){this._element.adopt(c);
var e=d.getChildValue("layout")||{};
this._applyStyle(c,e);
b=true
}}}}return b
},setupProxy:function(){this.parent();
if(this._child){this._child.setupProxy()
}},createComponent:function(){var a=this._createElement();
this._updateSwitchState();
return a
},_onDataChanged:function(){if(this._updateSwitchState()){this._child.setupProxy()
}},_onDefinitionChanged:function(){if(this._updateSwitchState()){this._child.setupProxy()
}}}});
W.Classes.newClass({name:"wixapps.integration.proxies.TableProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_bodyCellHookMethod","_headerAndFooterCellHookMethod"],initialize:function(a,b){this.parent(a,b);
this._proxyFactory=this._viewContext.getEnvironment().getProxyFactory();
this._columnsDefinition=this._getColumnsDef()
},createComponent:function(){return this._createWixComponent("wysiwyg.viewer.components.TableComponent",this._createRawData(),{SequencingHook:this._bodyCellHookMethod,HeaderFooterSequencingHook:this._headerAndFooterCellHookMethod})
},_bodyCellHookMethod:function(b){var a=this._columnsDefinition[b.index].getChildByRef("item");
return this._getCellElement(b.data,a)
},_headerAndFooterCellHookMethod:function(a){if(!a.data){return null
}return this._getCellElement(this._viewContext,a.data)
},_getCellElement:function(d,c){var b=this._proxyFactory.createProxyFromItemDefinition(d,c).proxy;
var a=b.createComponent();
b.setupProxy();
return a
},_createRawData:function(){var b=this._getColumnsDef();
var a=this._getRowsListRawData(this._getRowsDataArray(),b);
var d=this._getHeaderOrFooterRawData(b,"header");
var c=this._getHeaderOrFooterRawData(b,"footer");
return{type:"Table",items:a,header:d,footer:c}
},_getRowsDataArray:function(){var a=this._viewContext;
if(this._def.getChildByRef("rowsDataArray")){var b=this._def.getChildValue("rowsDataArray");
a=this._viewContext.getChildByRef(b)
}return a
},_onDataChanged:function(a){this.parent(a);
if(a.phase==Constants.DataItemEventPhase.ON_TARGET){this._refreshComponentData()
}},_onDefinitionsChanged:function(b){this.parent.apply(this,arguments);
var a=this._getChangedProperties(b);
if(!a.contains("minHeight")){this._refreshComponentData()
}},_refreshComponentData:function(){if(!this._componentLogic){return
}var a=this._createRawData();
this._componentLogic.getDataItem().setData(a)
},_getColumnsDef:function(){return this._def.getChildByRef("columns").getChildren()
},_getRowsListRawData:function(c,b){var a=[];
c.getChildren().forEach(function(f){var d=[];
for(var e=0;
e<b.length;
e++){d[e]={data:f,index:e}
}a.push(d)
}.bind(this));
return a
},_getHeaderOrFooterRawData:function(c,d){var b=false;
var a=[];
c.forEach(function(g,f){var e=g.getChildByRef(d);
if(e){b=true;
a.push({data:e,index:f})
}else{a.push(({data:null,index:f}))
}});
return b?a:null
},_getPropSchemaName:function(){return"TableComponentProperties"
},_getPropMap:function(){return{minHeight:"minHeight"}
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.table.TableComponentDefaultSkin"
},_getDefaultStyleName:function(){return"tblc1"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.TextAreaProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",initialize:function(a,b){this.parent(a,b)
},createComponent:function(){this.useSkinsInsteadOfStyles();
var a=this._createRawData();
return this._createWixComponent("wysiwyg.viewer.components.inputs.TextAreaInput",a)
},_createRawData:function(){var a=this._viewContext.getValue();
return{type:"Text",text:a}
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.input.TextAreaInputSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.TextInputProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_onComponentDataChanged","_onValidation"],createComponent:function(){var b=this._createRawData();
this._viewContext.addEvent(Constants.DataItemEvents.VALIDATION_PERFORMED,this._onValidation);
var a=this._mapCompProperties("TextInputProperties",{label:"label",placeholder:"placeholder"});
return this._createWixComponent("wixapps.integration.components.inputs.TextInput",b,undefined,a)
},_createRawData:function(){var a=this._viewContext.getValue();
return{type:"Text",text:a}
},_onComponentWixified:function(){},_onDefinitionsChanged:function(){var a=this._determineStyle()
},_onDataChanged:function(a){if(this._componentLogic&&!this._ignoreUpdate){this._componentLogic.getDataItem().set("text",this._viewContext.getValue())
}},_onComponentDataChanged:function(a,c,b){this._ignoreUpdate=true;
this._viewContext.setValue(b.text);
this._ignoreUpdate=false
},_onValidation:function(a){if(!this._componentLogic){return
}if(a.valid){this._componentLogic.resetInvalidState()
}else{this._componentLogic.showValidationMessage(this._def.getValue().validationMessage)
}},_getDefaultStyleName:function(){return"ti1"
},_getDefaultSkinName:function(){return"wixapps.integration.skins.TextInputSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.VerticalListEditorProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_sequencingHook"],initialize:function(a,b){this.parent(a,b);
this._childrenComp=b.getChildByRef("childrenComp")||a.getEnvironment().getDataItemFactory().createDataItem({},b)
},createComponent:function(){var a=this._createRawData();
return this._createWixComponent("wysiwyg.viewer.components.VerticalListEditor",a,{sequencingHook:this._sequencingHook})
},_sequencingHook:function(a,e,d){var c=this._viewContext.getEnvironment().getProxyFactory().createProxy(a,this._childrenComp);
var b=c.createComponent();
c.setupProxy();
return b
},_createRawData:function(){var a=this._viewContext.getChildren();
return{type:"ImageList",items:a}
},_getDefaultStyleName:function(){return null
},_getDefaultSkinName:function(){return"wixapps.integration.skins.editor.VerticalListEditorSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.VerticalListProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WProxy",Binds:["_sequencingHook","_onSequencerCompleted"],_sequencerCompleted:false,initialize:function(a,b){this.parent(a,b);
this._childrenComp=b.getChildByRef("childrenComp")||a.getEnvironment().getDataItemFactory().createDataItem({},b)
},createComponent:function(){var a=this._createRawData();
return this._createWixComponent("wysiwyg.viewer.components.VerticalRepeater",a,{sequencingHook:this._sequencingHook})
},_isReady:function(){return this._sequencerCompleted
},_onComponentWixified:function(){this._componentLogic.getSequencer().addEvent("productionFinished",this._onSequencerCompleted)
},_onSequencerCompleted:function(){this._componentLogic.getSequencer().removeEvent("productionFinished",this._onSequencerCompleted);
this._sequencerCompleted=true;
this._testIfReady()
},_sequencingHook:function(a,e,d){var c=this._viewContext.getEnvironment().getProxyFactory().createProxy(a,this._childrenComp);
var b=c.createComponent();
c.setupProxy();
return b
},_createRawData:function(){var a=this._viewContext.getChildren();
return{type:"ImageList",items:a}
},_onDataChanged:function(a){if(a.phase==Constants.DataItemEventPhase.ON_TARGET){this._dataItem.set("items",this._viewContext.getChildren())
}},_getDefaultStyleName:function(){return null
},_getDefaultSkinName:function(){return"mobile.core.skins.InlineSkin"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.VideoProxy",imports:[],traits:["wixapps.integration.components.traits.ResizableProxyTrait"],Class:{Extends:"wixapps.integration.proxies.WProxy",createComponent:function(){var b=this._createRawData(this._viewContext.getValue()),a={type:"Video"};
return this._createWixComponent("wysiwyg.viewer.components.Video",b,undefined,a)
},_createRawData:function(b){var a={type:"Video",videoId:b.videoId,videoType:b.videoType};
return a
},_getDefaultSkinName:function(){return"wysiwyg.viewer.skins.video.VideoDefault"
},_getDefaultStyleName:function(){return"vd1"
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.VideoSelectorProxy",imports:[],traits:["wysiwyg.viewer.components.traits.VideoUtils"],Class:{Extends:"wixapps.integration.proxies.TextInputProxy",Binds:["_onComponentDataChanged"],_createRawData:function(){var a=this._viewContext.getValue();
return{type:"Text",text:this._getVideoUrlFromVideoData(a)}
},_onDataChanged:function(a){if(this._componentLogic&&!this._ignoreUpdate){this._componentLogic.getDataItem().set("text",this._getVideoUrlFromVideoData(this._viewContext.getValue()))
}},_onComponentDataChanged:function(a,d,c){this._ignoreUpdate=true;
var b=this._getVideoDataFromVideoUrl(a.get("text"));
this._viewContext.getChildByRef("videoId").setValue(b.videoId);
this._viewContext.getChildByRef("videoType").setValue(b.videoType);
this._ignoreUpdate=false
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.VideoThumbProxy",imports:[],traits:["wixapps.integration.components.traits.ResizableProxyTrait","wysiwyg.viewer.components.traits.VideoUtils"],Class:{Extends:"wixapps.integration.proxies.ImageProxy",Binds:["_handleSizeChange","_showPic"],_createRawData:function(b){var e=this._viewContext.getValue();
var d=this._viewContext.getValue();
var a=this._getServices()[d.videoType];
var c="84770f_7ce1ddb86000aefa86f1a05553079857.jpg_256";
c=a.getPreviewUrl(d.videoId,this._showPic)||c;
return{type:"Image",uri:c,title:"",width:480,height:360}
},_showPic:function(a){if(this._componentLogic){this._componentLogic.getDataItem().set("uri",a)
}else{this._videoThumbUrl=a
}},_onComponentWixified:function(){this._showPic(this._videoThumbUrl);
this.parent()
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.WArrayProxy",imports:[],traits:["wixapps.integration.proxies.WIntegrationTrait"],Class:{Extends:"wixapps.core.views.proxies.ArrayProxy"}});
W.Classes.newClass({name:"wixapps.integration.proxies.WCompositeProxy",imports:[],traits:["wixapps.integration.proxies.WIntegrationTrait"],Class:{Extends:"wixapps.core.views.proxies.CompositeProxy"}});
W.Classes.newTrait({name:"wixapps.integration.proxies.WIntegrationTrait",trait:{Binds:["_onChildReady"],_dataItem:null,_element:null,_initArgs:null,_componentLogic:null,_applyAfterWixifiedActions:[],_prefix:null,_isWixified:false,_onReady:null,_childrenLeftToBeReady:0,_useSkinsInsteadOfStyles:false,_cssPropDict:{},initialize:function(){if(W&&W.Viewer&&W.Editor){this.useSkinsInsteadOfStyles()
}},useSkinsInsteadOfStyles:function(){this._useSkinsInsteadOfStyles=true
},_createElement:function(a){var b;
var c=this;
b=new Element(a||this._getViewElement());
b.getViewProxy=function(){return c
};
b.setAttribute("hasProxy","true");
b.setAttribute("pos",this._getDefaultPosition());
this._element=b;
return b
},_createWixComponent:function(f,a,b){b=b||{};
this._initArgs=b;
var d,h,g;
var i=this._mapCompProperties()||{};
h=this._def.getChildValue("style")||this._getDefaultStyleName();
d=this._def.getChildValue("skin")||this._getDefaultSkinName();
g=this._def.getChildValue("styleNS");
this._initArgs.styleNameSpace=g;
var e=this._createElement();
e.setAttribute("comp",f);
if(h&&!this._useSkinsInsteadOfStyles){e.setAttribute("styleid",h)
}e.setAttribute("skin",d);
if(a){this._dataItem=W.Data.createDataItem(a);
this._dataItem.setMeta("isPersistent",false);
this._dataItem.addEvent(Constants.DataEvents.DATA_CHANGED,this._onComponentDataChanged)
}if(i.type){var c=W.ComponentData.addDataItemWithUniqueId("wixApps",i);
if(c){c.dataObject.setMeta("isPersistent",false);
e.setAttribute("propertyquery","#"+c.id)
}}e.addEvent(Constants.ComponentEvents.READY,function(){this._onWixComponentWixifiedInternal(e)
}.bind(this));
return e
},setupProxy:function(b){var a=String(this.injects().Utils.getCSSBrowserFeature("boxOrient")||"");
if(a){this._prefix=a.match(/^\-[a-z]+\-/)[0]||""
}this._applyCssNode(this._element);
this._onReady=b;
if(this._children){this._childrenLeftToBeReady=this._children.length;
this._children.each(function(c){c.setupProxy(this._onChildReady)
}.bind(this))
}if(this._element.wixify&&this._element.get("comp")){this._element.wixify(this._initArgs,this._dataItem)
}else{if(this._element.wixifySubElement){this._element.wixifySubElement(this._initArgs,this._dataItem)
}else{this._isWixified=true;
this._testIfReady()
}}window.requestAnimFrame(this._onProxySetup.bind(this))
},_onChildReady:function(){this._childrenLeftToBeReady--;
this._testIfReady()
},_isReady:function(){return this._childrenLeftToBeReady==0&&this._isWixified
},_testIfReady:function(){if(this._onReady&&this._isReady()){this._onReady()
}},_onWixComponentWixifiedInternal:function(a){this._componentLogic=a.getLogic();
this._updateComponentState();
this._onComponentWixified();
this._applyAfterWixifiedActions.forEach(function(b){b.apply(this)
}.bind(this));
this._applyAfterWixifiedActions=[];
this._componentLogic.addEvent("autoSizeChange",function(b){this._viewContext.getEnvironment().getEventsDispatcher().fireEvent("innerCompResize",this._componentLogic)
}.bind(this));
this._isWixified=true;
this._testIfReady()
},_updateComponentState:function(){var a=this._def.getChildValue("enabled");
if(a!==undefined){if(a==="false"||a===false){this._componentLogic.disable()
}else{this._componentLogic.enable()
}}},_registerProxyEvents:function(b,a){this._applyAfterWixified(function(){this._componentLogic.addEvent(b,a)
}.bind(this))
},_applyAfterWixified:function(a){if(this._componentLogic){a.apply(this)
}else{this._applyAfterWixifiedActions.push(a)
}},_mapCompProperties:function(){var d=this._getPropSchemaName();
var c=this._getPropMap();
if(c&&d){var b={type:d};
for(var a in c){if(c[a]&&this._def.getChildValue(a)!=undefined){b[c[a]]=this._def.getChildValue(a)
}}return b
}},_updateCompProperties:function(a){var c=this._getPropMap();
var b=this._def;
a.forEach(function(e){var d=c[e];
if(d){this._componentLogic.setComponentProperty(d,b.getChildValue(e))
}}.bind(this))
},_getPropMap:function(){return{}
},_getPropSchemaName:function(){},_onComponentWixified:function(){},_onComponentDataChanged:function(a,c,b){},_onProxySetup:function(){},setWidth:function(a){this._element.setStyle("width",a)
},getWidth:function(){return this._element.getWidth()
},getHeight:function(){return this._element.getHeight()
},setPos:function(b,a){this._element.setStyles({left:b,top:a})
},_getViewElement:function(){return"div"
},_getDefaultStyleName:function(){return""
},_getDefaultSkinName:function(){return""
},refreshSize:function(){},_onDefinitionsChanged:function(b){this._applyCssNode(this._element);
if(this._componentLogic){var a=this._getChangedProperties(b);
this._updateCompProperties(a);
if(a.contains("enabled")){this._updateComponentState()
}if(!this._getDefaultStyleName()&&!this._def.getChildValue("style")){return
}W.Theme.getStyle(this._def.getChildValue("style")||this._getDefaultStyleName(),function(c){if(c){this._componentLogic.setStyle(c)
}}.bind(this))
}},_onLayoutChange:function(){},_getChangedProperties:function(b){var a=[];
if(b.events){b.events.each(function(e){var c=e.payload.target;
if(c){var d=c.getParent().getChildRef(c);
if(d){a.push(d)
}}})
}return a
},_applyCssNode:function(a){var b=this._def.getChildValue("css");
if(b){this._applyStyle(a,b)
}},_applyStyle:function(c,d){var a={};
var b;
Object.each(d,function(f,e){b=this._processCssProp(e);
a[b]=f
}.bind(this));
c.setStyles(a);
if("width" in a||"height" in a){if(c.getLogic&&c.getLogic()._onResize){setTimeout(function(){c.getLogic()._onResize()
},500)
}}},_processCssProp:function(b){var a;
if(b in this._cssPropDict){a=this._cssPropDict[b]
}else{a=this.injects().Utils.getCSSBrowserFeature(b)||this._prefix+b;
this._cssPropDict[b]=a
}return a
},getProxyMetaTags:function(){return[]
},hasMetaTag:function(a){return this.getProxyMetaTags().contains(a)
},_getDefaultPosition:function(){return""
},getCompLogic:function(){return this._componentLogic
},getElement:function(){return this._element
},dispose:function(){if(this._dataItem){this._dataItem.removeEvent(Constants.DataEvents.DATA_CHANGED,this._onComponentDataChanged)
}if(this._children){this._children.forEach(function(a){a.dispose()
})
}this._dataItem=null;
this._componentLogic=null;
this._element.destroy();
this._element=null
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.WProxy",imports:[],traits:["wixapps.integration.proxies.WIntegrationTrait"],Class:{Extends:"wixapps.core.views.proxies.Proxy"}});
W.Classes.newClass({name:"wixapps.integration.proxies.layout.BoxLayoutProxy",imports:[],traits:["wixapps.integration.utils.FlexBoxIESupport"],Class:{Extends:"wixapps.integration.proxies.layout.CssLayoutProxy",_prefix:"",_orientation:"VBox",_spacers:[],createComponent:function(){this._orientation=this._def.getChildValue("name");
return this.parent()
},getBoxOrientation:function(){return this._orientation
},_setupBox:function(a){if(Modernizr.flexbox!==true){this.applyIESupport()
}this.parent();
setTimeout(this._finalizeLayout.bind(this),1000)
},_processLayoutDef:function(a){this._applyDisplayStyle(this._orientation,a);
this._processBoxFlex(this._element,a);
return a
},_processChildLayoutDef:function(a,b){this._processBoxFlex(this._components[b],a);
this._processSpacers(this._components[b],a,b);
return a
},_applyDisplayStyle:function(b,c){if(c.display===undefined){c.display=this._processCssProp("box")
}var a=this._processCssProp("box-orient");
c[a]=(b=="HBox")?"horizontal":"vertical"
},_processBoxFlex:function(a,b){if(b["box-flex"]!==undefined&&b.width===undefined&&this._orientation==="HBox"&&this._prefix==="-webkit-"){b.width="0"
}},_processSpacers:function(b,c,a){this._processSpacer(b,c,a,"before");
this._processSpacer(b,c,a,"after")
},_processSpacer:function(d,k,f,j){var b=j=="before"?"spacerBefore":"spacerAfter";
var c=k[b]!==undefined?k[b]:(k.spacer||0);
var m=this._spacers[f]||{};
if(k.display=="none"){c=0
}if(m[j]&&(c===0)){this._element.removeChild(m[j]);
delete m[j]
}else{if(!m[j]&&c){var e=this._viewContext.getEnvironment();
var i={comp:{name:this._orientation=="VBox"?"VSpacer":"HSpacer"},layout:{}};
var a=e.getDataItemFactory().createDataItem(i);
var h=e.getProxyFactory().createProxyFromItemDefinition(this._viewContext,a).proxy;
var g=h.createComponent();
g.updateSize=function(o){a.getChildByRef("comp").getChildByRef("size").setValue(o)
};
a.getChildByRef("comp").addChild(c,"size");
m[j]=g;
if(j=="before"){this._element.insertBefore(g,this._components[f])
}else{var l=this._components[f].nextSibling;
if(l){this._element.insertBefore(g,l)
}else{this._element.appendChild(g)
}}var n=a.getChildValue("layout");
this._applyStyle(g,n);
this._processBoxFlex(g,n);
h.setupProxy()
}else{if(!m[j]&&!c){return
}else{m[j].updateSize(c)
}}}this._spacers[f]=m
},_finalizeLayout:function(){}}});
W.Classes.newClass({name:"wixapps.integration.proxies.layout.CssLayoutProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.WCompositeProxy",_nativeEvents:[],createComponent:function(){var b=this._createElement("div");
this._createChildComponents(b);
this._nativeEvents.forEach(function(d){b.addEvent(d.type,d.fn)
});
var c=this._def.getChildByRef("items");
if(c){var a=c.getChildren()
}this._children.forEach(function(d,f){var g=a[f].getChildValue("layout");
if(g){var e=this._components[f];
if("width" in g&&!(String(g.width).contains("%"))){e.setAttribute("width",parseInt(g.width))
}if("height" in g&&!(String(g.height).contains("%"))){e.setAttribute("height",parseInt(g.height))
}}}.bind(this));
return b
},_onProxySetup:function(){this._setupBox(this._element)
},_setupBox:function(a){this._applyLayoutsAsCss()
},_applyLayoutsAsCss:function(){var d={};
if(!this._def.getParent().getParent()){d=this._def.getParent().getChildValue("layout")||{}
}d=this._processLayoutDef(d)||d;
this._applyStyle(this._element,d);
var c=this._def.getChildValue("childLayout")||{};
this._components.forEach(function(e){this._applyStyle(e,c)
}.bind(this));
var b=this._def.getChildByRef("items");
if(b){var a=b.getChildren();
this._children.forEach(function(e,f){var g=a[f].getChildValue("layout")||{};
g=this._processChildLayoutDef(g,f)||g;
this._applyStyle(this._components[f],g)
}.bind(this))
}},_processLayoutDef:function(a){return a
},_processChildLayoutDef:function(a,b){return a
},_registerProxyEvents:function(b,a){this.parent(b,a);
this._nativeEvents.push({type:b,fn:a})
},_onDefinitionsChanged:function(a){if(this._element){this._applyLayoutsAsCss()
}this.parent(a)
}}});
W.Classes.newClass({name:"wixapps.integration.proxies.layout.StackLayoutProxy",imports:[],Class:{Extends:"wixapps.integration.proxies.layout.CssLayoutProxy",_processLayoutDef:function(a){a.position="relative"
},_processChildLayoutDef:function(b,a){b.position=b.position||(a===0?"static":"absolute");
b.left=b.left||"0px";
b.top=b.top||"0px"
}}});
W.Data.registerDataTypeSchema("AppPart",{appInnerID:"string",appLogicParams:"object",appLogicCustomizations:"array",appPartName:"string",viewName:"string"});
W.Skins.newSkin({name:"wixapps.integration.skins.TextAreaSkin",Class:{Extends:"mobile.core.skins.BaseSkin",_tags:[],_params:[{id:"shadowColor",type:Constants.SkinParamTypes.COLOR_ALPHA,defaultValue:"0,0,0,.3"}],_html:'<div class="clearfix"><label skinpart="label"></label><textarea skinpart="input" ></textarea><div skinpart="message"></div></div>',_css:["%.clearfix% {height:100%}","%input% {width:100%; height:100%; padding:12px; line-height: 1.3em;  font-size:1em; border: 1px solid #e3e3e3; box-shadow: 0 1px 1px 0 [shadowColor] inset;}","%input%:hover{border-color: #a3d9f6; }","%input%:focus{border-color: #19a0e9; }",'[state~="hasLabel"] %label% {display:block; padding-bottom: 5px;}',"[disabled] %label% {opacity:0.5}",'[state~="invalid"] input%input%{background: #f6e0dd; border-color: #de4c3a}','[state~="invalid"] %message% {color: #de4c3a; font-size: .916em;}',"input%input%.isPlaceholder{color: #999;}"]}});
W.Skins.newSkin({name:"wixapps.integration.skins.TextInputSkin",Class:{Extends:"mobile.core.skins.BaseSkin",_tags:[],_params:[{id:"rdBottom",type:Constants.SkinParamTypes.BORDER_RADIUS,mutators:["square",["tl","tr"]],defaultValue:"10px"},{id:"shadowColor",type:Constants.SkinParamTypes.COLOR_ALPHA,defaultValue:"0,0,0,.3"}],_html:'<div class="clearfix"><label skinpart="label"></label><input skinpart="input" type="text" /><p skinpart="message"></p></div>',_css:[" {position:relative;}","%input% {width:100%; padding: 0 12px; line-height: 34px; height: 34px; font-size:14px; border: 1px solid #e3e3e3; box-shadow: 0 1px 1px 0 [shadowColor] inset;}","%input%:hover {border-color: #a3d9f6; }","%input%:focus {border-color: #19a0e9; }",'[state~="hasLabel"] %label% {display:block; padding-bottom: 5px;}',"[disabled] %label% {opacity:0.5}",'[state~="invalid"] input%input% {border-color:#d00;}','[state~="invalid"] %message% {position:absolute; bottom:-20px; left:0; right:0; height:20px; line-height:20px; color:#d00; font-size:12px; }',"input%input%.isPlaceholder{color: #999;}"]}});
W.Classes.newTrait({name:"wixapps.integration.utils.FlexBoxIESupport",trait:{Binds:["_ie_recalcFlexes","_ie_onAppPartResize","_ie_resizeHandler"],Static:{_boxProxies:[]},initialize:function(){},_boxFlexes:[],_boxFlexList:[],applyIESupport:function(){this._applyDisplayStyle=this._ie_applyDisplayStyle;
this._processBoxFlex=this._ie_processBoxFlex;
this._finalizeLayout=this._ie_recalcFlexes;
this._ie_replaceResizeEventMechanism(this._element);
Array.forEach(this._element.children,function(b){this._ie_replaceResizeEventMechanism(b)
}.bind(this));
this._registerResizeListeners();
var a=this._getParentBoxProxies();
if(a.length===0){this.addEvent(Constants.WixAppEvents.APP_PART_RESIZE,this._ie_onAppPartResize);
this._finalizeLayout=this._ie_onAppPartResize
}window._boxProxies=window._boxProxies||[];
window._boxProxies.push({proxy:this,depth:a.length})
},_ie_replaceResizeEventMechanism:function(a){if(!a.onresize){a.onresize=function(){a.fireEvent("resize")
}
}},_ie_onAppPartResize:function(){var a=window._boxProxies.sort(function(c,b){return c.depth-b.depth
});
a.reverse().forEach(function(b){b.proxy._ie_onResize()
});
a.forEach(function(b){b.proxy._ie_onResize()
})
},_registerResizeListeners:function(){this._element.addEvent("resize",this._ie_resizeHandler);
Array.forEach(this._element.children,function(a){a.addEvent("resize",this._ie_resizeHandler)
}.bind(this))
},_ie_resizeHandler:function(){this._ie_onResize()
},_ie_onResize:function(){if(this._orientation==="HBox"){}this._ie_recalcFlexes()
},_ie_applyDisplayStyle:function(c,d){var e=(c=="HBox")?"inline-block":"block";
var a=(c=="HBox")?"height":"width";
var b={display:e};
if(e==="inline-block"){b["vertical-align"]="top"
}this._applyToChildren(function(f){f.setStyles(b)
});
if(a==="height"){this._ie_stretchChildrenVertically()
}},_ie_resetChildrenToStretch:function(){if(this._childrenToStretch){this._childrenToStretch.forEach(function(a){a.style.height="";
a.style["min-height"]="0"
})
}},_ie_stretchChildrenVertically:function(){var a=this._element.getSize().y;
this._ie_resetChildrenToStretch();
if(a>0){this._childrenToStretch=this._ie_getChildrenToStretch();
this._ie_getChildrenToStretch().forEach(function(b){b.setStyle("min-height",a);
b.setStyle("height","100%")
}.bind(this))
}},_ie_getChildrenToStretch:function(){return Array.filter(this._element.children,function(a){return !a.style.height
})
},_ie_processBoxFlex:function(a,b){if(b["box-flex"]!==undefined&&!this._boxFlexList.contains(a)){this._element.setStyle("white-space","nowrap");
if(b["white-space"]===undefined){b["white-space"]="normal"
}this._boxFlexList.push(a);
this._boxFlexes.push({element:a,flex:b["box-flex"]})
}delete b["box-flex"]
},_applyToChildren:function(b){for(var a=0;
a<this._element.children.length;
a++){b.call(this,this._element.children[a],a,this._element.children.length)
}},_ie_recalcFlexes:function(){var d=0;
var c=0;
var e=0;
var a=0;
var b;
this._applyToChildren(function(f){if(!this._boxFlexList.contains(f)){d+=this._getSize(f,true)
}}.bind(this));
c=this._getSize(this._element,false)-d;
this._boxFlexes.forEach(function(f){a+=parseInt(f.flex)
});
e=c/a;
this._boxFlexes.forEach(function(f){this._setSize(f.element,Math.floor(e*f.flex)-1)
}.bind(this))
},_getSize:function(b,c){var d=b.getSize();
var a;
var e=c===true?this._getExtraSpace(b,this._orientation):0;
if(this._orientation=="HBox"){a=d.x+e
}else{a=d.y+e
}return a
},_setSize:function(c,f){var d;
var g=0;
g=this._getExtraSpace(c,this._orientation);
if(this._orientation=="HBox"){d="width"
}else{d="height"
}var e=(f-g);
var b=c.getStyle(d);
var a=(b.contains("%")?Infinity:parseInt(b));
if(Math.abs(e-a)>1){c.setStyle(d,e+"px")
}},_getExtraSpace:function(b,a){var c;
a=a||this._orientation;
if(a=="HBox"){c=(parseInt(b.getComputedStyle("margin-left"))||0)+(parseInt(b.getComputedStyle("margin-right"))||0)
}else{c=(parseInt(b.getComputedStyle("margin-top"))||0)+(parseInt(b.getComputedStyle("margin-bottom"))||0)
}return c
},_getParentBoxProxies:function(){var a=Array.filter(this._element.getParents("[hasproxy]"),function(b){return b.getViewProxy().className.contains("BoxLayoutProxy")
});
return a.reverse()
}}});
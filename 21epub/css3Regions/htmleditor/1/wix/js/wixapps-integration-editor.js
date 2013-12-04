W.Classes.newClass({name:"wixapps.integration.managers.WixAppsEditorManager",imports:["wixapps.core.dataservice.DataServiceTransportBase"],traits:["wixapps.integration.components.traits.ContentSelector","wixapps.integration.components.traits.SelectionResolver","wixapps.integration.components.traits.AppsGUITrait"],Class:{Binds:["_initialize"],initialize:function(){if(W.Managers.isReady()){this._initialize();
return
}W.Managers.addEvent(W.Managers.DEPLOYMENT_COMPLETED_EVENT,function(){this._initialize()
})
},_initialize:function(){W.AppsEditor=this;
W.Editor.addDataPanel("AppPart","wixapps.integration.components.AppPart",{logic:"wixapps.integration.components.editor.AppPartDataPanel",skin:"wysiwyg.editor.skins.panels.base.AutoPanelSkin"})
},getWixAppsComponentsOnSite:function(){return W.Preview.getPreviewSite().$("SITE_STRUCTURE").getElements("div[comp='wixapps.integration.components.AppPart']")
},countAppElements:function(b,a){var c=0;
var d=this.getWixAppsComponentsOnSite();
Array.each(d,function(f){var e=f.getLogic();
if(e.getAppInstance().getAppDefinitionId()==a){c++
}});
return c
},getInstalledAppsInfo:function(){var a=this.getWixAppsComponentsOnSite();
var b=[];
var c=this.injects().Preview.getPreviewManagers().Viewer;
Array.each(a,function(g){var d=g.getLogic();
var h=d.getAppInstance();
var f=h.getIdInMetasite();
var e=c.getAppDataHandler().getAppData(f);
b.push({appDefinitionId:e.appDefinitionId,applicationId:f,instanceId:"NOT IN USE"})
});
return b
},onProvisionCompleted:function(b,c,a,d){var e=W.Preview.getPreviewManagers().Apps;
if(!e.getAppByPackageName(b.packageName)){e.loadApplication(b)
}this._addAppPart(b,d)
},_addAppPart:function(a,f){var d=a.widgets[f]||{};
var e={comp:"wixapps.integration.components.AppPart",data:{type:"AppPart",appInnerID:a.applicationId,appLogicParams:{},appLogicCustomizations:[],appPartName:f,viewName:""},layout:{width:d.defaultWidth||500,height:d.defaultHeight||500},skin:"wysiwyg.viewer.skins.AppPartSkin"};
var b=a.packageName+"_"+f+"_1";
var c=W.Commands.getCommand("WEditorCommands.AddComponentFullParams");
c.execute({compDef:e,styleId:b})
},getViewsTree:function(b){var c=b.getEnvironment().getProxyFactory().getDefViewRepo();
var a=[];
b.getEnvironment().getIncludedViews().forEach(function(e){var g=e.split("|");
var f=g[0];
var d=g[1];
a.push(c.getViewDefinition(f,d))
});
return a
}}});
W.Components.newComponent({name:"wixapps.integration.components.editor.AppPartDataPanel",imports:["wixapps.integration.WixAppConstants"],traits:["mobile.editor.components.traits.DataPanel"],skinParts:{content:{type:"htmlElement"}},Class:{Extends:"wysiwyg.editor.components.panels.base.AutoPanel",Binds:["_showHiddenParts","_doCreateFields","_updateCustomizationPanel","_onEditDataClicked","_onCustomizationApplied","_onDataEditorFinish"],initialize:function(c,a,b){this.parent(c,a,b);
var d=this.injects().Editor.getPropertyPanel();
d.setLabel("");
d.setDescription("")
},_createFields:function(){this._previewComponent.addEvent("proxyDisplayed",this._updateCustomizationPanel);
var a=this._previewComponent.getAppPartLogic();
if(!a){this._previewComponent.addEvent("logicLoaded",this._doCreateFields)
}else{this._doCreateFields()
}},_doCreateFields:function(){if(!this._data){return
}this._fieldsCreated=true;
this.disposeFields();
var d=this.injects().Preview.getPreviewManagers().Apps.getApp(this._data.get("appInnerID"));
var c=this._previewComponent.getAppPartLogic();
var k=this;
if(c.generatePanel){this.addInputGroupField(function(){k._dataSelectionPanel=this;
k._updatedDataSelectionPanel()
})
}this.addButtonField(null,"Edit Data",null,null,"blueWithArrow").addEvent(Constants.CoreEvents.CLICK,this._onEditDataClicked);
var g="radiobuttons/wixapps/list-menu-layout-bg-sprite.png";
var h={w:"88px",h:"89px"};
var m=this._previewComponent.getPartDef().views;
var n=this.injects().Editor.getPropertyPanel();
n.setLabel(this._previewComponent.getPartDef().name);
n.setDescription(this._previewComponent.getPartDef().description);
var a=d.getAppDescriptor().viewDescriptions;
var b=[];
for(var f=0;
f<m.length;
f++){for(var e=0;
e<a.length;
e++){if(a[e].id==m[f]){b.push({value:m[f],image:g,dimensions:h,icon:"radiobuttons/wixapps/"+a[e].icon,toolTip:{toolTipId:a[e].name}})
}}}var l=this._data.get("viewName");
this.addRadioImagesField("Choose View",b,null,null,"inline").bindToField("viewName").addEvent("inputChanged",function(){var i=this._data.get("viewName");
if(i!=l){l=i;
this._customizationsPropGroup.collapse()
}}.bind(this));
this.addInputGroupField(function(){k._customizationsPropGroup=this;
k._updateCustomizationPanel()
});
this._showHiddenField=this.addButtonField(null,"Show hidden parts",null,null,"smaller").addEvent(Constants.CoreEvents.CLICK,this._showHiddenParts);
this._previewComponent.addEvent("customizationApplied",this._onCustomizationApplied)
},_onCustomizationApplied:function(){if(!this._fieldsCreated){return
}this.fireEvent("customizationUpdate");
if(!this._showHiddenField){return
}if(this._previewComponent.getCustomization({key:"layout.display",value:"none"}).length>0){this._showHiddenField.enable()
}else{this._showHiddenField.disable()
}},_onEditDataClicked:function(){W.Commands.executeCommand("WAppsEditorCommands.OpenEditDataDialog",{selectedComp:this._previewComponent,onDataEditorFinish:this._onDataEditorFinish})
},_onDataEditorFinish:function(a){if(a){this._updateCustomizationPanel();
this._updatedDataSelectionPanel()
}},_updatedDataSelectionPanel:function(){this._dataSelectionPanel.disposeFields();
var b=this._previewComponent.getLogicParams();
var a=this._previewComponent.getAppPartLogic();
a.generatePanel(this._dataSelectionPanel,this._data,b)
},_updateCustomizationPanel:function(){if(!this._previewComponent._mainProxy){return
}if(this._customizationsPropGroup){this.removeEvent("customizationUpdate");
var a=W.AppsEditor.getViewsTree(this._previewComponent._mainProxy.getViewContext());
if(this._updateViewCustomizations(this._customizationsPropGroup,a)){this._customizationsPropGroup.uncollapse()
}else{this._customizationsPropGroup.collapse()
}}},_showHiddenParts:function(){this._previewComponent.clearCustomizations({key:"layout.display",value:"none"})
},_updateViewCustomizations:function(c,b){var h=false;
c.disposeFields();
var g=[];
for(var e=0;
e<b.length;
e++){var a=b[e].getValue();
if(!a.customizations){continue
}for(var d=0;
d<a.customizations.length;
d++){var f=a.customizations[d];
g.push({view:a,rule:f})
}h=true
}g=g.sort(function(j,i){var l=j.rule.priority||0;
var k=i.rule.priority||0;
return k-l
});
g.forEach(function(k){var j;
switch(k.rule.input.name){case"slider":j=this._createCustomizationSlider(c,k.rule.input,k.view);
break;
case"checkbox":j=this._createCustomizationCheckbox(c,k.rule.input,k.view);
break;
case"textfield":j=this._createCustomizationTextInput(c,k.rule.input,k.view);
break;
case"combobox":j=this._createCustomizationComboBox(c,k.rule.input,k.view);
break;
case"radioimages":j=this._createCustomizationRadioImages(c,k.rule.input,k.view);
break
}if(j&&j.input){j.input.addEvent("inputChanged",function(l){var m=l.value;
if(j.valToRule){m=j.valToRule(m)
}this._previewComponent.applyCustomizationRule({forType:k.view.forType,view:k.view.name,fieldId:k.rule.fieldId,mode:k.rule.mode,key:k.rule.key,value:m},false)
}.bind(this));
var i=function(){var l=this._previewComponent.getAppPartViewDefRepo().getViewDefinition(k.view.forType,k.view.name);
var m=this._previewComponent.getViewsCustomizer().getCurrentValue(l.getValue(),k.rule)||j.defaultVal;
if(j.ruleToVal){m=j.ruleToVal(m)
}j.input.setValue(m)
}.bind(this);
this.addEvent("customizationUpdate",i);
i()
}}.bind(this));
return h
},_createCustomizationSlider:function(a,b){var c=a.addSliderField(b.label,b.minVal,b.maxVal,b.step);
return{input:c,defaultVal:0}
},_createCustomizationCheckbox:function(b,c,a){var d=b.addCheckBoxField(c.label);
return{input:d,ruleToVal:function(e){return c.trueVal==e
},valToRule:function(e){return c[e+"Val"]
},defaultVal:c.defaultVal||c.falseVal}
},_createCustomizationTextInput:function(b,d,a){var c=b.addInputField(d.label,d.placeholderText||"",d.minLength||0,d.maxLength||200);
return{input:c,defaultVal:d.defaultVal||""}
},_createCustomizationComboBox:function(b,d,a){var c=b.addComboBoxField(d.label,d.options);
return{input:c,defaultVal:d.defaultVal||""}
},_createCustomizationRadioImages:function(b,d,a){var c=b.addRadioImagesField(d.label,d.options,d.defaultValue||null,d.group||null,d.display||"inline");
return{input:c,defaultVal:d.defaultVal||""}
},getAcceptableDataTypes:function(){return["AppPart"]
},dispose:function(){W.Commands.unregisterListener(this);
if(this._previewComponent){this._previewComponent.removeEvent("proxyDisplayed",this._updateCustomizationPanel);
this._previewComponent.removeEvent("customizationApplied",this._onCustomizationApplied)
}this.parent()
}}});
W.Components.newComponent({name:"wixapps.integration.components.editor.ChooseTextStyleButton",skinParts:{icon:{type:"htmlElement",optional:"true"},label:{type:"htmlElement"},editStyle:{type:"htmlElement"},extraLabel:{type:"htmlElement"}},Class:{Extends:"wysiwyg.editor.components.WButton",_states:["up","over","selected","pressed"],Binds:["_openCustomizeStylePanel"],Static:{MAX_FONT_SIZE:52},initialize:function(c,b,a){this.parent(c,b,a);
this._themeManager=this.injects().Preview.getPreviewManagers().Theme
},_onAllSkinPartsReady:function(){this.parent();
this._skinParts.editStyle.addEvent("click",this._openCustomizeStylePanel);
this._skinParts.editStyle.set("text",this.injects().Resources.get("EDITOR_LANGUAGE","STYLE_CHANGE_BUTTON"))
},_openCustomizeStylePanel:function(a){a.stopPropagation();
var b=this.injects().Utils.getPositionRelativeToWindow(this._skinParts.view);
this.fireEvent("propagateEvent",{type:"editStyleClicked",params:{left:b.x,top:b.y},fontTitle:this._label})
},render:function(){this.parent();
var b=this._data.get("commandParameter");
var a=this._themeManager.getProperty(b);
var c=a.getSize();
this.injects().Css.loadFont(a.getFontFamily());
if(this._skinParts.icon){this._skinParts.icon.uncollapse();
this._skinParts.icon.setStyle("background-color",a.getColor())
}this._skinParts.extraLabel.set("text",c);
if(parseInt(c)>this.MAX_FONT_SIZE){c=this.MAX_FONT_SIZE+"px";
this._skinParts.extraLabel.addClass("fontSizeExceeded");
this._skinParts.label.set("title",this.injects().Resources.get("EDITOR_LANGUAGE","FONT_PRESET_SIZE_WARNING"))
}else{this._skinParts.extraLabel.removeClass("fontSizeExceeded");
this._skinParts.label.set("title","")
}this._skinParts.label.setStyles({fontFamily:a.getFontFamilyWithFallbacks(),fontStyle:a.getStyle(),fontVariant:a.getVariant(),fontWeight:a.getWeight(),fontSize:c})
}}});
W.Components.newComponent({name:"wixapps.integration.components.editor.DataEditorDialog",traits:[],imports:["wixapps.core.views.ViewsCustomizer","wixapps.core.views.ViewDefinitionsRepository","wixapps.core.views.ProxyFactory","wixapps.integration.proxies.ProxyMap"],skinParts:{listContainer:{type:"htmlElement"},editViewContainer:{type:"htmlElement"},headerView:{type:"htmlElement"},addToParentBTN:{type:"htmlElement"},childTypesContainer:{type:"htmlElement"},listView:{type:"wysiwyg.viewer.components.VerticalListEditor"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onItemEditingCompleted","_addChildListItem","_onListItemClick","_onListItemMoved","_onAddItemClick","_closeAddItemCombo","_onDialogClosing"],_states:{dataSrv:["idle","saving","error"],addChild:["childrenNotAllowed","singleChildType","multipleChildTypes"]},initialize:function(c,a,b,d){this.parent(c,a,b);
this._dialogWindow=b&&b.dialogWindow;
this.setState("childrenNotAllowed","addChild")
},render:function(){var a={type:"ImageList",items:[]};
this._listData=this.injects().Data.createDataItem(a,"ImageList");
this._skinParts.listView.setDataItem(this._listData);
this._skinParts.listView.setSequencingHook(this._addChildListItem);
this._skinParts.listView.addEvent("itemClick",this._onListItemClick);
this._skinParts.listView.addEvent("itemMoved",this._onListItemMoved);
this._skinParts.addToParentBTN.addEvent(Constants.CoreEvents.CLICK,this._onAddItemClick);
this._closeAddItemCombo();
$$("body").addEvent("click",this._closeAddItemCombo)
},setDialogOptions:function(m,b){this._closeCallBack=b;
this._view.fireEvent("dialogOptionsSet",this);
var a=m.getAppInstance().getAppDescriptor();
this._dialogWindow.setCloseCallBack(this._onDialogClosing);
this._dialogWindow.setTitle(a.name);
this._dialogWindow.clearTabs();
this._treeIdMap={};
this._appsEnvironment=m.getEnvironment();
this._appsEnvironment.newDataServiceContext();
this._model=m.getAppPartLogic().getDataEditingModel();
this._logicParams=m.getLogicParams();
this._selectedItemId=m.getAppPartLogic().getSelectedIId(m.getDataItem(),this._logicParams);
var g=this._model.getCategories();
this._refreshables=[];
for(var f=0;
f<g.length;
f++){var n=this._model.getCategorySections(g[f]);
var l=new Element("div");
var h=null;
l.addClass("category");
this._addLabel(l,g[f]);
var o=new Element("ul");
o.addClass("toplist");
var e=this._model.getCategoryHeight(g[f]);
if(e){o.setStyle("height",e)
}l.grab(o);
var d=this._model.getAddNewTypesInCategory(g[f]);
if(d.length>0){this._addNewItemButton(d[0],l)
}this._skinParts.listContainer.grab(l);
for(var c=0;
c<n.length;
c++){var k=n[c].type;
if(k=="tree"){this._addTreeSection(o,n[c].treeId);
this._refreshables.push({type:"tree",treeId:n[c].treeId,div:o})
}else{if(!h){h=o
}this._addListSection(h,g[f],n[c])
}}}this._proxyFactory=new this.imports.ProxyFactory(this._appsEnvironment.getDataItemFactory(),this._appsEnvironment.getTypesManager(),this._appsEnvironment.getViewDefRepo());
(new this.imports.ProxyMap()).registerComponentProxies(this._proxyFactory)
},_updateSelection:function(){if(this._selectedItemId&&this._treeIdMap&&this._treeIdMap[this._selectedItemId]){this._treeIdMap[this._selectedItemId].fireEvent("click")
}else{if(this._defaultSection){this._defaultSection.fireEvent("click")
}}},_onAddItemClick:function(b){var a=this._getAllowedChildren();
if(a.length>1){this._showItemsForContext(b)
}else{this._addItemToContext(b)
}},_addItemToContext:function(b){var c;
var a;
if(this._selectedTreeItem.item){c=this._getAllowedChildren()[0];
a=this._selectedTreeItem.item
}else{c=this._selectedTreeItem.defaultChildType
}this._addNewDataItem(c,a)
},_showItemsForContext:function(c){c.stopPropagation();
var b=this._getAllowedChildren();
this._skinParts.childTypesContainer.empty();
this._skinParts.childTypesContainer.uncollapse();
for(var a=0;
a<b.length;
a++){this._addNewChildTypeButton(b[a])
}},_addNewChildTypeButton:function(a){var b=new Element("li");
b.appendText("Add "+this._model.getTypeFriendlyName(a));
b.addEvent("click",function(){this._addNewDataItem(a,this._selectedTreeItem.item)
}.bind(this));
this._skinParts.childTypesContainer.grab(b)
},_getAllowedChildren:function(){var a;
if(this._selectedTreeItem.item){a=this._model.getAddNewTypesToParent(this._selectedTreeItem.item)
}else{a=this._selectedTreeItem.allowedChildTypes||[this._selectedTreeItem.defaultChildType]
}return a
},_closeAddItemCombo:function(){this._skinParts.childTypesContainer.empty();
this._skinParts.childTypesContainer.collapse()
},_refreshCategoriesPanel:function(){this._treeIdMap={};
if(!this._refreshables){return
}for(var c=0;
c<this._refreshables.length;
c++){var b=this._refreshables[c];
if(b.type=="tree"){var a=this._model.getFullTree(b.treeId);
b.div.set("html","");
this._addTreeItemsRecursive(b.div,a,true)
}}if(this._selectedTreeItem.type!="query"){this._updateSelection()
}},_addTreeSection:function(a,b){this._model.loadTree(b,function(){var c=this._model.getFullTree(b);
this._addTreeItemsRecursive(a,c,true);
this._updateSelection()
}.bind(this))
},_addListSection:function(c,b,d){var a=this._addSectionListItem(d);
a.addClass("listSection");
if(d.isDefault){this._defaultSection=a
}c.grab(a)
},_addLabel:function(b,a){var c=new Element("h4");
c.addClass("listTitle");
c.appendText(a);
b.grab(c)
},_addNewItemButton:function(d,b){var a=new Element("button");
var c=new Element("p");
a.addClass("newItemButton");
c.appendText("New "+this._model.getTypeFriendlyName(d));
a.grab(c);
b.grab(a);
a.addEvent("click",function(){this._addNewDataItem(d)
}.bind(this))
},_addNewDataItem:function(c,b){var a=this._model.getItemTemplate(c);
this._openItemEditor(a,b,true)
},_addTreeItemsRecursive:function(f,e,a){if(!e||e.length==0){return
}var d=new Element("ul");
if(a){d=f
}else{d.addClass("list");
f.grab(d)
}for(var c=0;
c<e.length;
c++){var b=this._addSectionListItem(e[c]);
this._treeIdMap[e[c].item.getChildValue("_iid")]=b;
d.grab(b);
this._addTreeItemsRecursive(b,e[c].children,false)
}},_addSectionListItem:function(a){var b=new Element("li");
var c=new Element("p");
b.grab(c);
b.addEvent(Constants.CoreEvents.CLICK,function(d){if(d){d.stopPropagation()
}this._onSectionSelected(a,c)
}.bind(this));
c.appendText(a.title||a.name);
return b
},_onSectionSelected:function(c,a){this._closeAddItemCombo();
this._skinParts.listContainer.getElements("[class=selectedDataSection]").removeClass("selectedDataSection");
a.addClass("selectedDataSection");
this._selectedTreeItem=c;
this._selectedItemId=null;
if(this._selectedTreeItem.item){this._selectedItemId=this._selectedTreeItem.item.getChildValue("_iid")
}var b=this._getAllowedChildren();
if(b.length==0){this.setState("childrenNotAllowed","addChild")
}else{if(b.length==1){this.setState("singleChildType","addChild")
}else{this.setState("multipleChildTypes","addChild")
}}this._updateListView()
},_updateListView:function(){this._skinParts.headerView.empty();
this._listData.set("items",[]);
this._dragEnabled=false;
if(this._selectedTreeItem.type=="query"){this._skinParts.listView.setDragEnabled(false);
this._model.getQueryItems(this._selectedTreeItem,function(c){this._showChildren(c)
}.bind(this))
}else{var a=this._addChildListItem(this._selectedTreeItem.item,true);
a.addEvent("click",function(){this._onListItemClick({dataItem:this._selectedTreeItem.item})
}.bind(this));
this._skinParts.headerView.grab(a);
this._skinParts.listView.setDragEnabled(true);
this._dragEnabled=true;
var b=this._model.getChildren(this._selectedTreeItem.item);
this._showChildren((b))
}},_showChildren:function(a){this._listData.set("items",a)
},_addChildListItem:function(a,b){b=!!b;
if(a.listData){a=a.listData
}proxy=this._proxyFactory.createView(a,"editorSummary");
newView=proxy.createComponent();
proxy.setupProxy(function(){}.bind(this));
return W.Components.createComponent("wixapps.integration.components.editor.DataEditorItem","wixapps.integration.skins.editor.DataEditorItemSkin",null,{content:newView,isHeader:b,dragEnabled:this._dragEnabled})
},_onListItemClick:function(a){this._openItemEditor(a.dataItem)
},_onListItemMoved:function(a){var b=this._model.getContainmentType(this._selectedTreeItem.item,a.dataItem);
this._model.removeChild(this._selectedTreeItem.item,a.dataItem);
this._model.insertChild(this._selectedTreeItem.item,a.dataItem,b,a.idx);
this._updateListView();
this._refreshCategoriesPanel()
},_openItemEditor:function(b,c,d){if(this._openingDialog){return
}this._openingDialog=true;
var a=setInterval(function(){this._openingDialog=false;
clearInterval(a)
}.bind(this),200);
this.injects().EditorDialogs.openWixAppsEditItemDialog(b,this._appsEnvironment,this._model,this._onItemEditingCompleted,c,d)
},_onItemEditingCompleted:function(e){for(var a=0;
a<e.length;
a++){var d=e[a].action;
var h=e[a].originalItem;
var l=e[a].editedItem;
if(d=="delete"){var m=this._model.getItemParents(h);
for(var g=0;
g<m.length;
g++){this._model.removeChild(m[g],h)
}var b=this._model.getChildren(h);
for(var f=0;
f<b.length;
f++){this._model.removeChild(h,b[f])
}var k=this._model.getDataService().getItemCache();
var c={_type:"wix:Ref",collectionId:this._model.getCollectionOfItem(h),itemId:h.getChildValue("_iid")};
var n=k.key(c.collectionId,c.itemId);
k.remove(n);
if(l.getChildValue("_hash")){k.markItemAsDeleted(n)
}}}this._refreshCategoriesPanel();
this._updateListView()
},_onDialogClosing:function(f){if(this._inSaveProcess){return false
}$$("body").removeEvent("click",this._closeAddItemCombo);
var h=this._appsEnvironment;
var g=h.getDataService();
if(f.result=="DISCARD"){h.popDataServiceContext()
}else{if(f.result=="SAVE"){var l=g.getItemCache();
var a=[];
var m=[];
var i=[];
var k;
var d=l.getItemsMarkedAsDeleted();
var c=d.length;
l.each(function(o,n){if(o.isDirty()||!o.getChildValue("_hash")){a.push(n)
}});
var e=function(){this._inSaveProcess=false;
if(i.length>0){this.injects().EditorDialogs.openErrorDialog("Error Saving Data","Please try again in a few minutes",k.code+"\n"+k.description,null)
}else{h.popDataServiceContext();
var o=h.getItemCache();
m.forEach(function(p){if(l.isItemMarkedAsDeleted(p)){o.remove(p)
}else{var q=o.put(p,l.get(p).getValue(0));
q.resetDirtyFlag()
}});
var n=this.injects().EditorDialogs;
n.openPromptDialog("Saved Successfully!","Data is saved successfully and published","",n.DialogButtonSet.OK);
if(this._closeCallBack){this._closeCallBack(true)
}this._dialogWindow.closeDialog()
}}.bind(this);
var j=function(n,o){return function(p){if(o=="create"){m.unshift(n)
}else{m.push(n)
}if(a.length+c==(m.length+i.length)){e()
}}
};
var b=function(n){return function(o){k=o;
i.push(n);
if(a.length+c==(m.length+i.length)){e()
}}
};
a.forEach(function(n){var o=l.get(n);
if(o.getChildValue("_hash")){g.updateItem(l.idsFromKey(n).collectionId,o,j(n,"update"),b(n))
}else{g.createItem(l.idsFromKey(n).collectionId,o,j(n,"create"),b(n))
}});
d.forEach(function(n){var o=l.idsFromKey(n);
g.deleteItem(o.collectionId,o.itemId,j(n,"delete"),b(n))
});
if(a.length>0||d.length>0){this._inSaveProcess=true;
this.setState("saving");
return false
}else{if(this._closeCallBack){this._closeCallBack(false)
}h.popDataServiceContext()
}}}}}});
W.Components.newComponent({name:"wixapps.integration.components.editor.DataEditorItem",traits:[],imports:[],skinParts:{inlineContent:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["normal","header","draggable","dragged"],Binds:[],initialize:function(c,a,b,d){this.parent(c,a,b);
this._content=b.content;
this._isHeader=b.isHeader;
this._dragEnabled=b.dragEnabled
},render:function(){this._skinParts.inlineContent.grab(this._content)
},_onAllSkinPartsReady:function(a){this.parent(a);
if(this._isHeader){this.setState("header")
}else{if(this._dragEnabled){this.setState("draggable")
}else{this.setState("normal")
}}}}});
W.Components.newComponent({name:"wixapps.integration.components.editor.DataItemEditorDialog",traits:[],imports:["wixapps.core.views.ViewsCustomizer","wixapps.core.views.ViewDefinitionsRepository","wixapps.core.views.ProxyFactory","wixapps.integration.proxies.ProxyMap","wixapps.core.logics.AbstractDataEditingModel"],skinParts:{editViewContainer:{type:"htmlElement"},addToLocationDiv:{type:"htmlElement"},editRefContainer:{type:"htmlElement"},locationDivContainer:{type:"htmlElement"},cancelAddTo:{type:"htmlElement"},addToHeader:{type:"htmlElement"},addToBtn:{type:"wysiwyg.editor.components.WButton"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onDialogClosing","_disconnectFromParent","_openAddToSection","_closeAddToSection"],_states:{parentsEditing:["parentEditable","parentNonEditable"]},_dialogWindow:null,_model:null,_editedItem:null,_originalItem:null,_onCloseCallback:null,_pendingActionsMap:{},initialize:function(c,a,b,d){this.parent(c,a,b);
this._dialogWindow=b&&b.dialogWindow
},setDialogOptions:function(c,e,b,a,d,f){this._isNewItem=f;
this._autoAddToParent=d;
this._model=b;
this._onCloseCallback=a;
this._appsEnvironment=e;
this._view.fireEvent("dialogOptionsSet",this);
this.setState("parentEditable","parentsEditing");
this._dialogWindow.setCloseCallBack(this._onDialogClosing);
this._skinParts.addToBtn.addEvent("click",this._openAddToSection);
this._skinParts.addToHeader.addEvent("click",this._closeAddToSection);
this._skinParts.locationDivContainer.collapse();
this._startEditItem(c)
},_startEditItem:function(b){this._containmentOptions=this._model.getChildContainmentOptions(b.getTypeName());
if(this._containmentOptions.relation==Constants.DataEditingModel.ContainmentOptions.NONE){this._skinParts.addToBtn.collapse();
this.setState("parentNonEditable","parentsEditing")
}else{if(this._containmentOptions.relation==Constants.DataEditingModel.ContainmentOptions.ONE_TO_MANY_REFERENCE){this._skinParts.addToBtn.setLabel("Move");
this._skinParts.addToHeader.appendText("Cancel move");
this._allowMultiParents=false
}else{this._skinParts.addToBtn.setLabel("Include also in");
this._skinParts.addToHeader.appendText("Include also in");
this._allowMultiParents=true
}}var c=this._model.getTypeFriendlyName(b.getTypeName());
if(this._isNewItem){this._dialogWindow.setTitle("Edit "+c)
}else{this._dialogWindow.setTitle("Edit "+c)
}this._dialogWindow.clearTabs();
this._proxyFactory=new this.imports.ProxyFactory(this._appsEnvironment.getDataItemFactory(),this._appsEnvironment.getTypesManager(),this._appsEnvironment.getViewDefRepo());
(new this.imports.ProxyMap()).registerComponentProxies(this._proxyFactory);
this._originalItem=b;
this._editedItem=this._createEditableCopy(this._appsEnvironment.getDataItemFactory(),b);
if(this._autoAddToParent){this._connectToParent(this._autoAddToParent)
}this._showContainmentControls();
var a=this._proxyFactory.createView(this._editedItem,"editorForm","edit");
var d=a.createComponent();
a.setupProxy(function(){}.bind(this));
this._skinParts.editViewContainer.empty();
this._skinParts.editViewContainer.grab(d)
},_showContainmentControls:function(){this._skinParts.editRefContainer.empty();
this._currentItemParents=this._createUpdatedParentsList();
for(var a in this._currentItemParents){if(a!="undefined"){this._addParentButton(this._currentItemParents[a])
}}},_createUpdatedParentsList:function(){var a=this._mapByID(this._model.getItemParents(this._editedItem));
for(var b in this._pendingActionsMap){if(this._pendingActionsMap[b].type=="add"){a[b]=this._pendingActionsMap[b].item
}else{delete a[b]
}}return a
},_buildTreePossibleContainerTree:function(){var a=this._createUpdatedParentsList();
this._model.getPotentialParentsTree(this._editedItem.getTypeName(),function(b){this._buildParentTreeRecurse(b,a,this._skinParts.addToLocationDiv)
}.bind(this))
},_buildParentTreeRecurse:function(e,a,f){if(e.length>0){var c=new Element("ul");
for(var b=0;
b<e.length;
b++){var d=this._createTreeItem(e[b].item,a);
c.grab(d);
this._buildParentTreeRecurse(e[b].children,a,d)
}f.grab(c)
}},_createTreeItem:function(b,a){var c=new Element("li");
var d=new Element("p");
c.grab(d);
d.appendText(b.getChildValue("title"));
if(!a[b.getChildValue("_iid")]){var e=this._model.getContainmentOptions(b,this._editedItem);
if(e.length>0){d.addClass("activePossibleParent");
d.addEvent("click",function(){this._connectToParent(b);
this._closeAddToSection();
this._showContainmentControls()
}.bind(this))
}else{d.addClass("nonPossibleParent")
}}else{d.addClass("currentParent")
}return c
},_addParentButton:function(a){var d=new Element("li");
var c=new Element("p");
c.appendText(this._model.getItemBreadCrumbs(a));
d.grab(c);
d.addClass("itemParent");
if(this._allowMultiParents){var b=new Element("div");
b.addClass("parentDelete");
b.addEvent("click",function(){this._disconnectFromParent(this._editedItem,a)
}.bind(this));
d.grab(b)
}this._skinParts.editRefContainer.grab(d)
},_disconnectFromParent:function(d,b){var c=b.getChildValue("_iid");
var a=this._pendingActionsMap[c];
if(a){if(a.type=="add"){delete this._pendingActionsMap[c]
}}else{this._pendingActionsMap[c]={type:"remove",item:b}
}this._showContainmentControls()
},_connectToParent:function(c){var e=c.getChildValue("_iid");
if(!this._allowMultiParents){var a=this._createUpdatedParentsList();
for(var d in a){this._disconnectFromParent(this._editedItem,a[d])
}}var b=this._pendingActionsMap[e];
if(b){if(b.type=="remove"){delete this._pendingActionsMap[e]
}}else{this._pendingActionsMap[e]={type:"add",item:c}
}this._showContainmentControls()
},_createEditableCopy:function(a,c){var b=c.getValue(c.isRef()?1:0);
return a.createDataItem(b)
},_openAddToSection:function(){this._skinParts.addToBtn.collapse();
this._skinParts.locationDivContainer.uncollapse();
this._skinParts.addToLocationDiv.empty();
this._buildTreePossibleContainerTree()
},_closeAddToSection:function(){this._skinParts.addToBtn.uncollapse();
this._skinParts.locationDivContainer.collapse()
},_saveAsDuplicate:function(){var k=this._model.getCollectionOfItem(this._originalItem);
var f=this._model.copyItem(this._editedItem,k);
var a;
var g=this._model.getItemParents(this._editedItem);
for(var e=0;
e<g.length;
e++){var h=g[e];
a=this._model.getContainmentType(h,this._originalItem);
this._model.insertChild(h,f,a)
}var c=this._model.getChildren(this._editedItem);
for(var d=0;
d<c.length;
d++){var b=c[d];
a=this._model.getContainmentType(this._originalItem,b);
if(a==Constants.DataEditingModel.ContainmentOptions.ONE_TO_MANY_REFERENCE){this._model.removeChild(f,b)
}}this._applyReparentingActions(f);
if(this._onCloseCallback){this._onCloseCallback([{action:"duplicate",originalItem:this._originalItem,editedItem:this._editedItem}])
}},_deleteItem:function(){this._onCloseCallback([{action:"delete",originalItem:this._originalItem,editedItem:this._editedItem}])
},_mapByID:function(b){var c={};
for(var a=0;
a<b.length;
a++){c[b[a].getChildValue("_iid")]=b[a]
}return c
},_applyReparentingActions:function(a){for(var c in this._pendingActionsMap){var b=this._pendingActionsMap[c];
if(b.type=="add"){this._model.insertChild(b.item,a,this._containmentOptions.relation,-1)
}else{this._model.removeChild(b.item,a)
}}},_onDialogClosing:function(c){if(c.result=="CANCEL"){if(this._onCloseCallback){this._onCloseCallback([{action:"cancel",originalItem:this._originalItem,editedItem:this._editedItem}])
}}else{if(c.result=="DELETE"){this._deleteItem()
}else{var b=this._appsEnvironment.getTypesManager().validateDataItem(this._editedItem);
if(!b){return false
}if(c.result=="DUPLICATE"){this._saveAsDuplicate()
}else{if(c.result=="OK"||c.result=="OK_ADD_ANOTHER"){if(this._isNewItem){this._originalItem=this._model.addToCache(this._model.getItemDefaultCollection(this._originalItem.getTypeName()),this._originalItem.getValue(0))
}if(this._editedItem.isDirty()){if(this._originalItem.isRef()){this._originalItem.setReferencedValue(this._editedItem.getValue(0))
}else{this._originalItem.setValue(this._editedItem.getValue(0))
}}this._applyReparentingActions(this._originalItem);
if(this._onCloseCallback){this._onCloseCallback([{action:"update",originalItem:this._originalItem,editedItem:this._editedItem}])
}if(c.result=="OK_ADD_ANOTHER"){var a=this._model.getItemTemplate(this._editedItem.getTypeName());
this._startEditItem(a);
return false
}}}}}}}});
W.Components.newComponent({name:"wixapps.integration.components.editor.SaveBeforeDataEditingDialog",skinParts:{},Class:{Extends:"wysiwyg.editor.components.panels.base.AutoPanel",Binds:["_onContinueEditingClick","_onSave"],initialize:function(c,a,b){this.parent(c,a,b);
this._dialogWindow=b.dialogWindow
},_createFields:function(a){this.setSkinSet("FLOATING_DIALOG");
this.addLabel("Please save before editing data",null,null,"icons/save_publish.png",{x:"-2px",y:0},{width:"30px",height:"30px"});
this.addSubLabel("Editing your data requires that you first save your site");
this.addInlineTextLinkField(null,null,"Save now",null).addEvent(Constants.CoreEvents.CLICK,a._onSave);
this.addInlineTextLinkField(null,null,"Not now, thanks",null).addEvent(Constants.CoreEvents.CLICK,a._onContinueEditingClick)
},_onSave:function(){this._dialogWindow.closeDialog();
W.EditorDialogs.openSaveDialog()
},_onContinueEditingClick:function(){this._dialogWindow.closeDialog();
LOG.reportEvent(wixEvents.CLOSE_SAVE_DIALOG_CLICKED,{g1:W.Editor._templateId})
},_onDialogClosing:function(a){},getAcceptableDataTypes:function(){return[""]
}}});
W.Components.newComponent({name:"wixapps.integration.components.panels.ChooseTextStylePanel",traits:["wixapps.integration.components.traits.CommonPanelTrait"],skinParts:{},Class:{Extends:"wysiwyg.editor.components.panels.base.AutoPanel",Binds:["_itemClick","_onDialogClosing","_validateStyle","_editStyleClicked","_colorSelected","_colorOverrideChange"],initialize:function(c,a,b){this.parent(c,a,b);
this._originalStyle=b.currentStyle;
this._dialogWindow=b.dialogWindow;
this._dialogWindow.addEvent("onDialogClosing",this._onDialogClosing)
},getInlineContentContainer:function(){return this._view
},setEditedComponent:function(g){this.disposeFields();
this._editedComponent=g;
this._currentlySelectedStyle=this._originalStyle;
var k=[];
var b=-1;
var d;
var m;
var n;
var h=this._originalStyle.split(/\s/);
var a=h.filter(function(i){return i.indexOf("font_")===0
}).pick();
var c=h.filter(function(i){return i.indexOf("color_")===0
}).pick();
var e;
for(var f=0;
f<=10;
f++){d="font_"+String(f);
m="FONT_"+String(f)+"_LABEL";
n=new W.Font(d,W.Preview.getPreviewManagers().Theme);
var j=W.Data.createDataItem({type:"Button",label:this.injects().Resources.get("EDITOR_LANGUAGE",m),commandParameter:d},"Button");
k.push(j);
if(d===a){b=f;
e=n;
e.setColorReference(W.Preview.getPreviewManagers().Theme.getProperty(d).getColorReference())
}}this._colorOverrideCheckBox=this.addCheckBoxField("Override text style color:");
this._colorPicker=this.addFontColorField();
if(c){e.setColorReference(c);
this._colorOverrideCheckBox.setValue(true)
}else{this._colorOverrideCheckBox.setValue(false);
this._colorPicker.getHtmlElement().collapse()
}this._colorPicker.setValue(e);
var l=this.addSelectionListInputField("",k,null,{type:"wixapps.integration.components.editor.ChooseTextStyleButton",skin:"wixapps.integration.skins.editor.ChooseTextStyleButtonSkin",numRepeatersInLine:1});
l.selectItemAtIndex(b);
l.addEvent("inputChanged",this._itemClick);
l.addEvent("editStyleClicked",this._editStyleClicked);
this._colorPicker.addEvent("inputChanged",this._colorSelected);
this._colorOverrideCheckBox.addEvent("inputChanged",this._colorOverrideChange);
this.addHideButtonToPanel()
},_editStyleClicked:function(b){var c=this._currentlySelectedStyle;
var a=W.Preview.getPreviewManagers().Theme.getDataMap()["THEME_DATA"].get(c);
W.EditorDialogs.openFontDialog({callback:function(){},font:a,left:100,onChange:function(d){W.Preview.getPreviewManagers().Theme.getDataMap()["THEME_DATA"].set(c,d.font)
},title:b.fontTitle,top:100})
},_itemClick:function(a){this._styleToApply=a.value.commandParameter||a.value.get("commandParameter");
this._setStyleByID(this._styleToApply);
this._currentlySelectedStyle=this._styleToApply
},_invalidateStyle:function(){if(!this._styleRenderCall){this._styleRenderCall=this.injects().Utils.callLater(this._validateStyle,undefined,undefined,50)
}},_validateStyle:function(){this._setStyleByID(this._styleToApply);
delete this._styleRenderCall
},_setStyleByID:function(a){this.injects().Commands.executeCommand("WEditorCommands.ApplyTextStyle",{comp:this._editedComponent,styleName:a})
},_createFields:function(){},_colorSelected:function(a){this.injects().Commands.executeCommand("WEditorCommands.ApplyTextStyleColor",{comp:this._editedComponent,color:a.origEvent.color})
},_colorOverrideChange:function(){var b=this._colorOverrideCheckBox.getValue()===true;
if(b){this._colorPicker.getHtmlElement().uncollapse()
}else{this._colorPicker.getHtmlElement().collapse();
this.injects().Commands.executeCommand("WEditorCommands.ApplyTextStyleColor",{comp:this._editedComponent,color:"none"});
var a=new W.Font(this._colorPicker.getValue(),W.Preview.getPreviewManagers().Theme);
a.setColorReference(W.Preview.getPreviewManagers().Theme.getProperty(this._currentlySelectedStyle).getColorReference());
this._colorPicker.setValue(a)
}},_onDialogClosing:function(a){if(a.result=="CANCEL"){this._setStyleByID(this._originalStyle)
}},getAcceptableDataTypes:function(){return["StyleList"]
}}});
W.Components.newComponent({name:"wixapps.integration.components.panels.ProxyStylePanel",traits:["wixapps.integration.components.traits.CommonPanelTrait"],skinParts:{},Class:{Extends:"wysiwyg.editor.components.dialogs.ChooseStyleDialog",initialize:function(c,a,b){this.parent(c,a,b)
},setEditedComponent:function(a){this._editedComponent=a;
var b=this._data.get("styleItems");
var c=b[a.getStyleNameSpace()];
if(a.getStyle()&&c){this.parent(a)
}this.addHideButtonToPanel()
},_onDialogClosing:function(a){if(a.result=="CANCEL"&&this._originalStyle){this._setStyleByID(this._originalStyle)
}}}});
W.Components.newComponent({name:"wixapps.integration.components.panels.SpacerPropertiesDialog",traits:["wixapps.integration.components.traits.CommonPanelTrait"],skinParts:{},Class:{Extends:"wysiwyg.editor.components.panels.base.AutoPanel",Binds:[],_appHolder:null,_proxyEnv:null,_editedProxy:null,_slider:null,initialize:function(c,a,b){this.parent(c,a,b);
this._dialogWindow=b.dialogWindow
},getInlineContentContainer:function(){return this._view
},setEditedProxy:function(a,b){this._appHolder=a;
this._editedProxy=b;
this._proxyEnv=b.getViewContext().getEnvironment();
if(this._slider){this._slider.setValue(parseInt(this._editedProxy.getSpacerSize()))
}},_createFields:function(a){this._slider=this.addSliderField("Size",0,300,1).addEvent("inputChanged",function(b){this._appHolder.applyCustomizationRule({forType:this._proxyEnv.getForType(),view:this._proxyEnv.getViewName(),fieldId:this._proxyEnv.getFieldId(),mode:"*",key:"comp.size",value:b.value},false)
}.bind(this));
if(this._editedProxy){this._slider.setValue(parseInt(this._editedProxy.getSpacerSize()))
}this.addHideButtonToPanel()
},_onDialogClosing:function(a){},getAcceptableDataTypes:function(){return[""]
}}});
W.Classes.newTrait({name:"wixapps.integration.components.traits.AppsGUITrait",trait:{Binds:["_onOpenEditDataDialog"],initialize:function(){W.Commands.registerCommandAndListener("WAppsEditorCommands.OpenEditDataDialog",this,this._onOpenEditDataDialog,null,true)
},_onOpenEditDataDialog:function(c){if(W.Config.siteNeverSavedBefore()){W.EditorDialogs.openWixAppsSiteMustBeSaved()
}else{var b=c.selectedComp;
if(b.getDataEditDialogParams){var a=b.getDataEditDialogParams();
W.EditorDialogs.openIframeDialog(a.url,a.params).addEvent("dialogClosed",a.onClosedCallback)
}else{var d=c.onDataEditorFinish||function(){};
W.EditorDialogs.openWixAppsDataDialog(b,d)
}}}}});
W.Classes.newTrait({name:"wixapps.integration.components.traits.CommonPanelTrait",trait:{Binds:["_onRender"],initialize:function(){},addHideButtonToPanel:function(){this.addButtonField("","Hide selection").addEvent(Constants.CoreEvents.CLICK,function(){var a=this._editedComponent;
var b=(this._editedComponent?this._editedComponent.getViewNode().getViewProxy():this._editedProxy);
this.injects().Commands.executeCommand("WAppsEditorCommands.HideComponent",{comp:a,proxy:b});
this._onDialogClosing(W.EditorDialogs.DialogButtons.OK);
this._dialogWindow.closeDialog()
}.bind(this))
}}});
W.Classes.newTrait({name:"wixapps.integration.components.traits.ContentSelector",trait:{Binds:["_onContentSelectorClick","_onContentSelectorDown","unmarkSelectedSubComponent","_onMouseMove","_calcComponentCoordinates","_isInside","_filterByPosition","_onSelectionChange"],_marker:null,_editBoxView:null,_editedComponent:null,_mouseDownPos:null,_tooltipShown:false,_selectionRollOverColor:"#000",_selectionEditColor:"#000",initialize:function(){W.Commands.registerCommandAndListener("WEditorCommands.SelectedComponentChange",this,this._onSelectionChange,null,true)
},_onSelectionChange:function(a){this.deactivateContentSelector();
if(a.comp.className=="wixapps.integration.components.AppPart"){this.activateContentSelector($$("#editorUI")[0].getLogic().getSkinPart("componentEditBox").getViewNode(),a.comp)
}},activateContentSelector:function(b,a){this._editBoxView=b;
this._editedComponent=a;
this._editBoxView.addEvent(Constants.CoreEvents.MOUSE_DOWN,this._onContentSelectorDown);
this._editBoxView.addEvent("dblclick",this._onContentSelectorClick);
this._editBoxView.addEvent(Constants.CoreEvents.MOUSE_MOVE,this._onMouseMove);
this._initUIColors(W.Preview.getPreviewManagers().Theme,this._editedComponent)
},deactivateContentSelector:function(){this.unmarkSelectedSubComponent();
if(this._editBoxView){this._editBoxView.removeEvent(Constants.CoreEvents.MOUSE_DOWN,this._onContentSelectorDown);
this._editBoxView.removeEvent("dblclick",this._onContentSelectorClick);
this._editBoxView.removeEvent(Constants.CoreEvents.MOUSE_MOVE,this._onMouseMove);
this._editBoxView=null
}},markSelectedSubComponent:function(a){this._marker=a;
this._markSingleComponent(this._marker);
if(this._tooltipShown===false){this._tooltipShown=true
}},unmarkSelectedSubComponent:function(){if(this._marker&&this._editedComponent&&this._editedComponent.getViewNode()){this._getRelatedComponents(this._marker).forEach(this._unMarkSingleComponent)
}},_markSingleComponent:function(b,c){var a=2;
if(b.getStyle("display")==="inline"){a=0
}b.setStyles({"outline-style":"dashed","outline-width":"1px","outline-color":(c===true?this._selectionEditColor:this._selectionRollOverColor),"outline-offset":a+"px"})
},_unMarkSingleComponent:function(a){a.setStyles({outline:"none"})
},_getRelatedComponents:function(a){var c=a.getViewProxy().getViewDefinition();
var b=this._editedComponent.getSkinPart("inlineContent").getElements("[hasproxy]");
return b.filter(function(d){return(d.getViewProxy().getViewDefinition()===c)
})
},_calcComponentCoordinates:function(a){return a.getCoordinates()
},_isInside:function(b,a){return b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom
},_filterByPosition:function(f,c){var a=this._calcComponentCoordinates(c);
if(c.get("tag")==="span"){var b=document.createRange();
b.selectNode(c);
var e=Array.prototype.slice.call(b.getClientRects(),0);
var d=window.getScroll();
return e.map(function(g){g=Object.clone(g);
g.top+=d.y;
g.bottom+=d.y;
return g
}).some(function(g){return this._isInside(f,g)
}.bind(this))
}else{return this._isInside(f,a)
}},_listElements:function(d,a){var c=[];
var b=a.getChildren();
Array.forEach(b,function(e){var f=false;
if(this._filterByPosition(d,e)){c.push(e);
f=true
}else{if(e.getStyle("position")==="absolute"){f=true
}}if(f){c=c.concat(this._listElements(d,e))
}}.bind(this));
return c
},_findComponents:function(b){var a=this._listElements(b,this._editedComponent.getSkinPart("inlineContent"));
return a.reverse().filter(function(c){return c.hasAttribute("hasproxy")
}).filter(this.isElementEditable.bind(this))
},_onContentSelectorDown:function(a){this._mouseDownPos=a.client
},_onContentSelectorClick:function(f){if(this._editedComponent.getViewNode()){var a=this;
this.unmarkSelectedSubComponent();
var e=Math.abs(f.client.x-this._mouseDownPos.x);
var c=Math.abs(f.client.y-this._mouseDownPos.y);
if(e>3||c>3){return
}var b=this.injects().Preview.editorToPreviewCoordinates(f.client);
var d=this._findComponents(b);
if(d.length>0){this.markSelectedSubComponent(d[0]);
setTimeout(function(){a._getRelatedComponents(d[0]).forEach(function(g){a._markSingleComponent(g,true)
})
},100);
this.editSubSelection(this._editedComponent,d[0])
}}else{this.deactivateContentSelector()
}},_onMouseMove:function(c){if(this._editedComponent.getViewNode()){var a=this.injects().Preview.editorToPreviewCoordinates(c.client);
var b=this._findComponents(a);
if(b.length>0){if(b[0]!==this._marker){this.unmarkSelectedSubComponent()
}this.markSelectedSubComponent(b[0])
}else{this.unmarkSelectedSubComponent()
}}else{this.deactivateContentSelector()
}},_initUIColors:function(d,c){var f=d.getPropertiesAccordingToType("color");
var a=f.map(function(g){return d.getProperty(g)
});
var e=this._getParentCompBgColor(d,c)||this._getDocumentBgColor(d);
if(e){var b=this._getHighlightColors(e,a);
this._selectionRollOverColor=b[0];
this._selectionEditColor=b[1]
}else{this._selectionRollOverColor="#999";
this._selectionEditColor="#333"
}},_getParentCompBgColor:function(d,a){var c=a.getParentComponent();
if(c&&c.getStyle()){var b=c.getStyle().get("bg");
if(b){return d.getProperty(b)
}}},_getDocumentBgColor:function(c){var a=c.getProperty("siteBg");
var b;
if(a){b=a.getColorReference()
}return c.getProperty(b||"color_0")
},_getHighlightColors:function(c,d){var a=this;
var b=d.map(function(e){return{color:e,contrast:a._getContrastValue(e,c)}
}).sort(function(f,e){return e.contrast-f.contrast
}).map(function(e){return e.color.toString()
}).filter(function(g,f,e){return !e.slice(0,f).contains(g)
});
return[b[2],b[4]]
},_getContrastValue:function(b,a){return Math.abs(b._l-a._l)
}}});
W.Classes.newTrait({name:"wixapps.integration.components.traits.ImageDimensionsTrait",trait:{_imageModeDimDict:null,_getImageModeDimensionsFunc:function(a){this._imageModeDimDict=this._imageModeDimDict||{fill:this._calcImageDimensionsFill.bind(this),full:this._calcImageDimensionsFull.bind(this),stretch:this._calcImageDimensionsStretch.bind(this),fitWidth:this._calcImageDimensionsFitWidth.bind(this),fitHeight:this._calcImageDimensionsFitHeight.bind(this)};
return this._imageModeDimDict[a]
},_calcImageDimensionsFill:function(b,a){return this._calcProportionalDimensions(b,a,Math.max(b.width/a.width,b.height/a.height))
},_calcImageDimensionsFull:function(b,a){return this._calcProportionalDimensions(b,a,Math.min(b.width/a.width,b.height/a.height))
},_calcImageDimensionsStretch:function(b,a){return{imgLeft:0,imgTop:0,imgWidth:b.width,imgHeight:b.height}
},_calcImageDimensionsFitWidth:function(b,a){var c=this._calcProportionalDimensions(b,a,b.width/a.width);
c.imgLeft=0;
c.imgTop=0;
c.wrapperWidth=b.width;
c.wrapperHeight=c.imgHeight;
return c
},_calcImageDimensionsFitHeight:function(b,a){var c=this._calcProportionalDimensions(b,a,b.height/a.height);
c.imgLeft=0;
c.imgTop=0;
c.wrapperWidth=c.imgWidth;
c.wrapperHeight=b.height;
return c
},_calcProportionalDimensions:function(f,e,d){var b=d*e.width;
var a=d*e.height;
var g=(f.width-b)/2;
var c=(f.height-a)/2;
return{imgLeft:g,imgTop:c,imgWidth:b,imgHeight:a}
}}});
W.Classes.newTrait({name:"wixapps.integration.components.traits.ResizableProxyTrait",trait:{initialize:function(){},_createWixComponent:function(){var b=this.parent.apply(this,arguments);
b.setAttribute("position","absolute");
var a=this._createElement("div");
a.adopt(b);
a.wixifySubElement=function(){b.wixify.apply(this._innerElement,arguments)
}.bind(this);
this._innerElement=b;
return a
},_onComponentWixified:function(){setTimeout(function(){this._activateResizeMechanism()
}.bind(this),120)
},_activateResizeMechanism:function(){this._componentLogic.addEvent("autoSizeChange",this._handleSizeChange.bind(this));
this.addEvent(Constants.WixAppEvents.APP_PART_RESIZE,this._onAppResize.bind(this));
this._def.addEvent(Constants.DataItemEvents.CHANGE,function(){setTimeout(function(){this._refreshComponentSize()
}.bind(this),250)
}.bind(this));
this._refreshComponentSize()
},_refreshComponentSize:function(){this._setNaturalSize();
this._onAppResize()
},_onAppResize:function(){this._onLayoutChange()
},_onLayoutChange:function(a,c){var b;
if(this._isLayoutBasedWidth()){if(!this._isAbsoluteDimension(a)){b=this._element.getSize();
a=b.x
}this._componentLogic.setWidth(a)
}if(this._isLayoutBasedHeight()){if(!this._isAbsoluteDimension(c)){b=b||this._element.getSize();
c=b.y
}this._componentLogic.setHeight(c)
}},_isAbsoluteDimension:function(a){if(a===undefined){return false
}else{if(typeOf(a)=="string"&&a.contains("%")){return false
}}return true
},_setNaturalSize:function(){if(this._isCompBasedWidth()){var a=this._componentLogic.getSizeLimits().minW;
this._element.setStyle("width",a);
this._innerElement.setStyle("width",a)
}if(this._isCompBasedHeight()){var b=this._componentLogic.getSizeLimits().minH;
this._element.setStyle("height",b);
this._innerElement.setStyle("height",b)
}},_handleSizeChange:function(){if(this._isCompBasedWidth()){this._element.setStyle("width",this._componentLogic.getWidth());
this._innerElement.setStyle("width",this._componentLogic.getWidth())
}if(this._isCompBasedHeight()){this._element.setStyle("height",this._componentLogic.getHeight());
this._innerElement.setStyle("height",this._componentLogic.getHeight())
}},_isLayoutBasedWidth:function(){var a=this._def.getParent().getChildValue("layout");
if(this._getImplicitDimensions().contains("width")){return false
}if(a&&("width" in a)){return true
}else{var b=this._getParentLayoutName();
if(b==="VBox"){return true
}else{if(b==="HBox"){return(a&&("box-flex" in a))
}else{return false
}}}},_isLayoutBasedHeight:function(){var a=this._def.getParent().getChildValue("layout");
if(this._getImplicitDimensions().contains("height")){return false
}if(a&&("height" in a)){return true
}else{var b=this._getParentLayoutName();
if(b==="HBox"){return true
}else{if(b==="VBox"){return(a&&("box-flex" in a))
}else{return false
}}}},_isCompBasedWidth:function(){return !this._isLayoutBasedWidth()
},_isCompBasedHeight:function(){return !this._isLayoutBasedHeight()
},_getParentLayoutName:function(){var a=this._def.getParent();
while(a&&(!a.getChildByRef||!a.getChildByRef("items"))){a=a.getParent()
}if(a){return a.getChildValue("name")
}},_checkMinHeight:function(a){var b=this._componentLogic.getPhysicalHeight();
if(a<b){this._element.setStyle("height",b+"px");
this._componentLogic.setHeight(b);
window.requestAnimFrame(function(){if(this.fireEvent){this.fireEvent(Constants.WixAppEvents.APP_PART_RESIZE)
}}.bind(this))
}},_getDefaultPosition:function(){return"relative"
},_getImplicitDimensions:function(){return[]
}}});
W.Classes.newTrait({name:"wixapps.integration.components.traits.SelectionResolver",trait:{Binds:["_onHideComponent","_onTextStyleApply"],initialize:function(){W.Commands.registerCommandAndListener("WEditorCommands.ApplyTextStyle",this,this._onTextStyleApply,null,true);
W.Commands.registerCommandAndListener("WEditorCommands.ApplyTextStyleColor",this,this._onTextStyleColorApply,null,true);
W.Commands.registerCommandAndListener("WAppsEditorCommands.HideComponent",this,this._onHideComponent,null,true)
},isElementEditable:function(a){return this._resolveEditingFunc(a)!==undefined
},editSubSelection:function(b,a){this._previewComponent=b;
this._editProxyStyle(a)
},_editProxyStyle:function(b){var a=this._resolveEditingFunc(b);
if(a){a.call(this,b)
}},_resolveEditingFunc:function(c){var b;
var a=c.getViewProxy();
if(a.hasMetaTag("text")){b=this._openTextStyleSelector
}else{if(c.getLogic&&c.getLogic().className){b=this._openGeneralStyleSelector
}}return b
},_openTextStyleSelector:function(a){W.EditorDialogs.openTextStyleSelector(a.getLogic(),{left:100,top:100,currentStyle:a.getViewProxy()._determineStyle()})
},_openSpacerPropertiesDialog:function(a){W.EditorDialogs.openSpacerPropertiesDialog(this._previewComponent,a.getViewProxy(),{left:100,top:100})
},_openGeneralStyleSelector:function(c){var b=c.getViewProxy();
var a=b.getCompLogic();
a.addEvent("render",function(){this._replaceStyle(b,a.getStyle().getId())
}.bind(this));
W.EditorDialogs.openProxyStyleSelector(a,{left:100,top:100})
},_onHideComponent:function(b){var a=b.proxy||b.comp.getViewNode().getViewProxy();
this._applyCustomizationRule(a,"layout.display","none",false)
},_applyCustomizationRule:function(d,c,e,a){var b=d.getViewContext().getEnvironment();
this._previewComponent.applyCustomizationRule({forType:b.getForType(),view:b.getViewName(),fieldId:b.getFieldId(),mode:b.getMode(),key:c,value:e},a)
},_onTextStyleApply:function(c){var b=c.comp.getViewNode().getViewProxy();
var a=Constants.WixApps.TEXT_STYLE_NAMES[c.styleName];
if(a){this._replaceStyle(b,a)
}},_onTextStyleColorApply:function(b){if(!this._previewComponent.getViewNode().contains(b.comp.getViewNode())){return
}var a=b.comp.getViewNode().getViewProxy();
this._applyCustomizationRule(a,"comp.color",b.color,false)
},_replaceStyle:function(b,a){this._applyCustomizationRule(b,"comp.style",a,false)
}}});
W.Classes.newTrait({name:"wixapps.integration.components.traits.TrackInstancesTrait",trait:{Binds:[],initialize:function(){window._debug_instanceTrackerCount=window._debug_instanceTrackerCount||0;
window._debug_instanceTrackerCount=window._debug_instanceTrackerCount+1;
this._debug_instanceID=window._debug_instanceTrackerCount
}}});
W.Skins.newSkin({name:"wixapps.integration.skins.editor.ChooseTextStyleButtonSkin",Class:{Extends:"mobile.core.skins.BaseSkin",_params:[{id:"webThemeDir",type:Constants.SkinParamTypes.URL,defaultTheme:"WEB_THEME_DIRECTORY"},{id:"$borderRadius",type:Constants.SkinParamTypes.BORDER_RADIUS,defaultValue:"4px"},{id:"borderColor",type:Constants.SkinParamTypes.COLOR,defaultValue:"#c4c4c4"},{id:"borderColorOver",type:Constants.SkinParamTypes.COLOR,defaultValue:"#89a4af"},{id:"borderColorSelected",type:Constants.SkinParamTypes.COLOR,defaultValue:"#338fc0"},{id:"bgColor",type:Constants.SkinParamTypes.COLOR,defaultValue:"#f9fafc"},{id:"bgColorOver",type:Constants.SkinParamTypes.COLOR,defaultValue:"#f2f3f5"},{id:"bgColorPressed",type:Constants.SkinParamTypes.COLOR,defaultValue:"#f3f3f3"},{id:"shadowColor",type:Constants.SkinParamTypes.COLOR_ALPHA,defaultValue:"0,0,0,.2"},{id:"shadowInsetColor",type:Constants.SkinParamTypes.COLOR_ALPHA,defaultValue:"0,0,0,.7"},{id:"shadowInsetColorOver",type:Constants.SkinParamTypes.COLOR_ALPHA,defaultValue:"255,255,255,.7"},{id:"labelColor",type:Constants.SkinParamTypes.COLOR,defaultValue:"#444444"}],_html:'<div class="iconWrapper"><div skinpart="icon"></div><div class="iconFrame"></div></div><div class="labelContainer clearfix"><div skinpart="label"></div><div skinpart="editStyle"></div></div><em skinpart="extraLabel"></em>',_css:["%.iconWrapper% {width:25px; height:25px; position:absolute; left:8px; top: 50%; margin-top: -12px;}","%icon% {width: 17px; height: 18px; margin: 2px 4px 5px;}","%.iconFrame% {width:25px; height:25px; position:absolute; top:0; left:0; background: url([webThemeDir]button/font-color-frame.png) no-repeat 0 0}","{padding: 0 10px; border: 1px solid [borderColor]; [$borderRadius]; background: [bgColor] url([webThemeDir]button/button-gradient.png) repeat-x 0 50%; position:relative; cursor: pointer; margin-bottom:4px;}",'[state~="over"]{border: 1px solid [borderColorOver]; background: [bgColorOver] none; box-shadow: 0 2px 3px 0 [shadowColor], 0 1px 2px 0 [shadowInsetColorOver] inset}','[state~="selected"]{background: [bgColor] none; border: 2px solid [borderColorSelected]; box-shadow: 0 1px 3px 0 [shadowInsetColor] inset}','[state~="pressed"] {background: [bgColorPressed] none; border-color: transparent; box-shadow: 0 1px 3px 0 [shadowInsetColor] inset}',"%label% {white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width: 60%; float:left; height:48px; line-height:48px; margin-left:30px }","%editStyle% {font-size: .86em; visibility:hidden; float:right; line-height:48px; text-align:right; color: #379acf; padding-right:10px; }",'[state~="selected"] %editStyle% {visibility:visible;}',"%editStyle%:hover{text-decoration:underline;}","[disabled] {opacity: .5;}","%extraLabel%{position:absolute; right: 3px; top: 3px; font-size:11px; color: #aaa;}","%extraLabel%.fontSizeExceeded{color: #d99;}",'%extraLabel%.fontSizeExceeded:after{content:"!"; color: #d99;}']}});
W.Skins.newSkin({name:"wixapps.integration.skins.editor.DataEditorDialogSkin",imports:[],Class:{compParts:{listView:{skin:"wixapps.integration.skins.editor.VerticalListEditorSkin"}},Extends:"mobile.core.skins.BaseSkin",_params:[{id:"rd",type:Constants.SkinParamTypes.BORDER_RADIUS,defaultValue:"3px"},{id:"rdBig",type:Constants.SkinParamTypes.BORDER_RADIUS,defaultValue:"6px"},{id:"rdBigger",type:Constants.SkinParamTypes.BORDER_RADIUS,defaultValue:"9px"},{id:"shd",type:Constants.SkinParamTypes.BOX_SHADOW,defaultValue:"1px 1px 5px 1px rgba(0, 0, 0, 0.6);"},{id:"noShd",type:Constants.SkinParamTypes.BOX_SHADOW,defaultValue:"none"},{id:"tdr",type:Constants.SkinParamTypes.URL,defaultTheme:"BASE_THEME_DIRECTORY"}],_html:'<section skinPart="listContainer"></section><section skinPart="editViewContainer"><div skinPart="listView"></div><header><div skinPart="headerView"></div><button skinPart="addToParentBTN"><p>Add</p></button><ul skinPart="childTypesContainer"></ul></header></section><br style="clear:both;" />',_css:["{ border-bottom:solid 1px #d8d8d8; position:absolute; left:0; right:0; top:36px; bottom:47px; color:#4d4d4d; }"," button { width:130px; height:30px; padding:0; border:solid 1px #c7c7c7; outline:none; cursor:pointer; [rd] background: transparent url([tdr]wix_apps/menus_app_sprite.png) center -1886px repeat-x; }"," button:hover { border-color:#19a3fe; background-position:center -1986px; }"," button p { padding:0 0 0 28px; font-size:16px; line-height:28px; color:#19a3fe; background: transparent url([tdr]wix_apps/menus_app_sprite.png) -130px -166px no-repeat; }"," ul.toplist { overflow-y:scroll; overflow-x:hidden; }","%listContainer% { width:230px; position:absolute; left:0; top:0; bottom:0; margin-top:-2px; }"," h4.listTitle { font-size:15px; font-weight:normal; line-height:40px; color:#10a0ff; margin:0; padding:0 0 0 12px; border-top:solid 1px #d8d8d8; border-bottom:solid 1px #d8d8d8; }","%listContainer% li > p { line-height:16px; padding:5px 0 5px 20px; border-left:solid 10px #ffffff; cursor:pointer; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }","%listContainer% ul { margin-top:8px; }"," ul.toplist > li p { font-weight:bold; }"," ul.list { margin-top:0; }"," ul.list > li p { padding-left:40px; font-weight:normal; background: transparent url([tdr]wix_apps/menus_app_sprite.png) -130px 8px no-repeat; cursor:pointer; }","%listContainer% button.newItemButton { margin:12px 0 30px 30px; }"," ul.toplist li .selectedDataSection { border-left-color:#86cefe; background-color:#11a0ff; color:#ffffff; }"," ul.list li .selectedDataSection { border-left-color:#86cefe; background-color:#11a0ff; color:#ffffff; background-position:-130px -72px; }"," p.selectedDataSection + ul.list li p { background-position:-130px -32px; }"," %listContainer% li > p:hover { border-left-color:#86cefe; background-color:#11a0ff; color:#ffffff; }"," ul.list li > p:hover { border-left-color:#86cefe; background-color:#11a0ff; color:#ffffff; background-position:-130px -72px; }"," p.selectedDataSection + ul.list li p:hover { background-position:-130px -72px; }","%.listSection% { background-position:-130px -32px; font-weight:normal; }","%editViewContainer% { height:100%; margin:0 0 0 230px; position:relative; }",'%editViewContainer%:after { content:""; position:absolute; left:0; top:0; bottom:0; width:10px; background: transparent url([tdr]wix_apps/menus_app_sprite.png) left top no-repeat; }',"%editViewContainer% header { height:120px; position:absolute; top:0; left:0; right:0; }","%headerView% { position:absolute; bottom:0; left:0; right:0; }","%editViewContainer% %addToParentBTN% { position:absolute; top:10px; right:40px; width:90px; }","[state=singleChildType] %editViewContainer% %addToParentBTN% p { padding:0 0 0 28px; background-position:-130px -166px; }","[state=multipleChildTypes] %editViewContainer% %addToParentBTN% p { padding:0 28px 0 0; background-position:-90px -265px; }","[state=childrenNotAllowed] %editViewContainer% %addToParentBTN% { display:none }","%childTypesContainer% { position:absolute; top:45px; right:40px; padding:3px; border:solid 1px #ccc; background:#fff; [rdBigger] [shd] }","%childTypesContainer%:hover { border-color:#11a0ff; }","%childTypesContainer% li { min-width:150px; [rdBig] color:#3b3738; cursor:pointer; padding:2px 25px 4px 6px; border:solid 1px #fff; }","%childTypesContainer% li:hover {  color:#fff; padding:2px 6px 4px 25px; border-color:#ccf; [noShd]background:#11a0ff url([tdr]wix_apps/menus_app_sprite.png) -142px -526px no-repeat; }","%editViewContainer% %listView% { position:absolute; top:120px; bottom:0; left:0; right:0; overflow-y:scroll; overflow-x:hidden; }","%noRealNeed% {float:right;width:300px;}"]}});
W.Skins.newSkin({name:"wixapps.integration.skins.editor.DataEditorItemSkin",imports:[],Class:{compParts:{inlineContent:{type:"htmlElement"}},Extends:"mobile.core.skins.BaseSkin",_params:[{id:"rd",type:Constants.SkinParamTypes.BORDER_RADIUS,defaultValue:"5px"},{id:"pos",type:Constants.SkinParamTypes.OTHER,defaultValue:"position:absolute; top:0; bottom:0; left:0; right:0;"},{id:"dragColor",type:Constants.SkinParamTypes.COLOR_ALPHA,defaultValue:"0,0,3,.5"},{id:"tdr",type:Constants.SkinParamTypes.URL,defaultTheme:"BASE_THEME_DIRECTORY"}],_html:'<div skinPart="inlineContent"></div><div class="wrapper"><p class="itemToolTip">Drag to reorder, click to edit content</p></div>',_css:["{cursor:pointer; position:relative; }","%inlineContent% span {color:#999; display:inline-block; width:100%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}","%.wrapper% {[pos] background:[dragColor]; display:none; }","%.itemToolTip% { position:absolute; top:50%; left:42px; padding:0 30px 0 40px; font-size:12px; letter-spacing:1px; height:20px; line-height:20px; margin-top:-10px; color:#ddf; background:[dragColor]; [rd]}","[state=header] { border-left:solid 10px #86cefe; background:#18a2fd; padding:10px; }","[state=header] %inlineContent% span {color:#fff;}","[state=draggable] {padding:6px 0 6px 42px; border-bottom:solid 1px #dbdbdb; border-top:solid 1px #f4f5f5;}",'[state=draggable] %inlineContent%:before { content:""; position:absolute; left:15px; top:50%; margin-top:-14px; width:13px; height:28px; background:transparent url([tdr]wix_apps/menus_app_sprite.png) -147px -374px no-repeat; }',"[state=draggable]:hover {background-color:#e8f8fe;}","[state=dragged] {cursor:move; padding:6px 100px 6px 42px; outline:solid 2px #59a9fd; width:100%; margin:0 2px;background-color:#e8f8fe;}"]}});
W.Skins.newSkin({name:"wixapps.integration.skins.editor.DataItemEditorDialogSkin",imports:[],Class:{compParts:{addToBtn:{skin:"wysiwyg.editor.skins.buttons.ButtonBaseSkin"}},Extends:"mobile.core.skins.BaseSkin",_params:[{id:"pos",type:Constants.SkinParamTypes.OTHER,defaultValue:"position:absolute; top:0; bottom:0; left:0; right:0;"},{id:"rd",type:Constants.SkinParamTypes.BORDER_RADIUS,defaultValue:"3px"},{id:"shd",type:Constants.SkinParamTypes.BOX_SHADOW,defaultValue:"1px 1px 5px 1px rgba(0, 0, 0, 0.1);"},{id:"tdr",type:Constants.SkinParamTypes.URL,defaultTheme:"BASE_THEME_DIRECTORY"}],_html:'<div skinPart="editViewContainer"></div><section class="locationsMenu"><h5>Included in:</h5><ul skinPart="editRefContainer"></ul><button skinPart="addToBtn"></button><div skinPart="locationDivContainer"><div skinPart="addToHeader"><button skinPart="cancelAddTo"></button></div><div skinPart="addToLocationDiv"></div></div></section>',_css:["{background:#ddf0fe; border:solid 1px #b2cde0; [rd] padding:18px; margin-top:10px; }","%editViewContainer% {padding-right:18px; margin-right:360px;}","%.locationsMenu% {position:absolute; top:65px; bottom:70px; right:28px; width:340px; border-left:solid 1px #e3e3e3; padding-left:18px;}","%.locationsMenu% h5 {font-weight:normal; font-size:14px; color:#7f7f7f; margin:0 0 6px 6px;}","%editRefContainer% {list-style:none}","%.locationsMenu% .itemParent { height:34px; background:#0071bd; margin-bottom:3px; position:relative; [rd] overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}","%.locationsMenu% .itemParent p {line-height:34px; color:#fff; font-weight:bold;  position:absolute; left:12px; right:30px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}","%.locationsMenu% .parentDelete {width:22px; height:22px; margin:6px 6px 0 0; background:#0071bd url([tdr]wix_apps/menus_app_sprite.png) -142px -575px no-repeat; float:right; [rd]}","%.locationsMenu% .parentDelete:hover {background:#e3e3e3 url([tdr]wix_apps/menus_app_sprite.png) -142px -625px no-repeat; cursor:pointer;}","%locationDivContainer% {width:100%; background:#fff; border: solid 1px #e3e3e3; color:#4b4b4b; [shd]}","%locationDivContainer% li > p { line-height:26px; padding:0 20px 0 40px; cursor:pointer; font-weight:bold;overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}","%addToLocationDiv% > ul {padding:7px 0;}","%locationDivContainer% ul li ul li p {padding-left:52px; font-weight:normal;}","%locationDivContainer% li > p:hover {background:#a9e0ff;}","%locationDivContainer% li > p.currentParent {background:transparent url([tdr]wix_apps/menus_app_sprite.png) -125px -675px no-repeat; cursor:default; color:#bbb;}","%locationDivContainer% li li > .currentParent {background:transparent url([tdr]wix_apps/menus_app_sprite.png) -112px -675px no-repeat; cursor:default; color:#bbb;}","%locationDivContainer% li > p.nonPossibleParent {background:transparent; cursor:default; color:#bbb;}","%addToBtn% {width:50%;}",'%editRefContainer%:after {content: ""; position:absolute; top:0; bottom:0; left:0; border-left:solid 1px #fff;}',"%addToHeader% {line-height:34px; background:transparent url([tdr]wix_apps/menus_app_sprite.png) center -1886px repeat-x; color:#4d4d4d; font-weight:bold; padding:0 0 0 12px; outline:solid 1px #c4c4c4;}","%cancelAddTo% {width:22px; height:22px; margin:6px 6px 0 0; background:transparent url([tdr]wix_apps/menus_app_sprite.png) -142px -625px no-repeat; float:right; border:none; [rd]}","[state=parentNonEditable] %.locationsMenu% {display:none;}","[state=parentNonEditable] %editViewContainer% {padding-right:0; margin-right:0;}","%editViewContainer% .color_69 {display:block; color:#818181; font-size:14px; padding:2px 0 4px 5px; font-weight:normal;}","%noRealNeed% {float:right;width:300px;}"]}});
W.Skins.newSkin({name:"wixapps.integration.skins.editor.ImageSelectorSkin",Class:{Extends:"mobile.core.skins.BaseSkin",_params:[{id:"bkg",type:Constants.SkinParamTypes.COLOR_ALPHA,defaultValue:"rgba(0, 0, 0, 0.5);"},{id:"pos",type:Constants.SkinParamTypes.OTHER,defaultValue:"position:absolute; top:0; bottom:0; left:0; right:0;"}],_html:'<a skinPart="link"><div skinPart="img" skin="mobile.core.skins.ImageSkin"></div><p skinPart="overlay">Replace photo</p></a>',_css:["%link%  { cursor:pointer;position:absolute;width:100%;height:100%; border:1px solid;}","%img%  { height:100%; width:100%}","%overlay% { position:absolute; bottom:0px; left:0px; height:35px; line-height:35px; width:100%; text-align:center; text-decoration:underline; color:#75cfff; background:rgba(0, 0, 0, 0.5);}"]}});
W.Skins.newSkin({name:"wixapps.integration.skins.editor.VerticalListEditorSkin",Class:{Extends:"mobile.core.skins.BaseSkin",_params:[],_html:'<div skinPart="inlineContent"></div><div skinPart="dragRuler"></div>',_css:["{position:relative}","%dragRuler%  { position:absolute;display:none;width:100%;left:0px;height:2px;background-color:#99d}"]}});
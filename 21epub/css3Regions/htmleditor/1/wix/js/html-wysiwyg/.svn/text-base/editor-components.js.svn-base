W.Classes.newClass({name:"mobile.core.external_apis.flickr.FlickrAPI",Class:{_apiKey:"0f1c119e0c156ac4b80052270d0a3202",_apiURL:"http://api.flickr.com/services/rest/?format=json",_callback:undefined,getUserID:function(d,f){var e;
e={method:"flickr.people.findByUsername",username:d};
this._callback=f;
this._call(e,function(c){var a;
var b;
a=c.stat!="fail";
b=c.message;
if(a===true){f(a,c.user.id)
}else{f(a,b)
}})
},getTags:function(e,f){var d;
d={method:"flickr.tags.getListUser",user_id:e};
this._callback=f;
this._call(d,function(c){var b;
var a;
a=c.stat!="fail";
b=c.message;
if(a===true){f(a,c.who.tags.tag)
}else{f(a,b)
}})
},_call:function(f,e){f.api_key=this._apiKey;
var d=new Request.JSONP({url:this._apiURL,callbackKey:"jsoncallback",data:f,onComplete:e,timeout:5000,onFailure:this._handleTimeout});
d.send()
},_handleTimeout:function(){if(this._callback){this._callback(false,"Failed connecting to Flickr. Please try again in a few minutes.")
}}}});
W.Components.newComponent({name:"mobile.editor.components.CategorySelector",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],skinParts:{categoryInputsContainer:{type:"htmlElement"},otherInput:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_otherCategorySelected","_onOtherInputChange","_categorySelected"],initialize:function(f,e,d){this.parent(f,e,d);
this._selectedCategory=null;
this._selectedCategoryIndex=null
},render:function(){var i=this.injects().Resources;
var h=this._skinParts.categoryInputsContainer;
var g=this.getAllCategories();
var k="";
for(var l=0;
l<g.length;
l++){var j=i.get("EDITOR_LANGUAGE",g[l]);
k=k+'<li><label><input rel="'+l+'" type="radio" name="category" value="'+g[l]+'" />'+j+"</label></li>"
}h.innerHTML=k;
this._skinParts.otherRadioInput.value=i.get("EDITOR_LANGUAGE","OTHER")
},getAllCategories:function(){return["PHOTOGRAPHY","FOODNDRINK","ECOMMERCE","CONSULTING","BUSINESS","FASHION","PERSONAL","LIFESTYLE","VCARD","DESIGNNART"]
},getSelectedCategoryName:function(){return this._selectedCategory
},getSelectedCategoryIndex:function(){return this._selectedCategoryIndex
},_onAllSkinPartsReady:function(){this._skinParts.otherRadioInput.addEvent("click",this._otherCategorySelected);
var b=this._skinParts.otherInput;
b.setStyle("visibility","hidden");
b.addEvent("keyup",this._onOtherInputChange);
b.addEvent("cut",this._onOtherInputChange);
b.addEvent("paste",this._onOtherInputChange);
b.addEvent("change",this._onOtherInputChange);
this._skinParts.categoryInputsContainer.addEvent("click",this._categorySelected)
},_otherCategorySelected:function(b){this._skinParts.otherInput.setStyle("visibility","visible");
this._selectedCategory=this._skinParts.otherInput.get("value");
this._validateCategory()
},_categorySelected:function(c){if(c.target.get("tag")!="input"){return
}var d=c.target.get("value");
this._skinParts.otherInput.setStyle("visibility","hidden");
this._selectedCategory=d;
this._selectedCategoryIndex=c.target.get("rel");
this._validateCategory()
},_onOtherInputChange:function(b){this._selectedCategory=b.target.get("value");
this._selectedCategoryIndex=b.target.get("rel");
this._validateCategory()
},_validateCategory:function(){if(this._selectedCategory!==null&&this._selectedCategory!==""){this.fireEvent("validation",true)
}else{this.fireEvent("validation",false)
}},_selectedIndex:function(e){var d=this.getAllCategories();
for(var f=0;
f<d.length;
f++){if(d[f]==this._selectedCategory){return f
}}}}});
W.Components.newComponent({name:"mobile.editor.components.ColorButton",skinParts:{},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["openColorPicker","_onPickerFetched","_onColorPickerChange","_onColorPickerClose"],initialize:function(f,d,e){this.parent(f,d,e);
this._isAlphaEnabled=true;
this._isHexEnabled=false;
this.setColor("#000000")
},render:function(){this.setHexDisplay(this._isHexEnabled)
},_onAllSkinPartsReady:function(b){this._skinParts.view.addEvent("click",this.openColorPicker)
},setColor:function(d){this._color=new W.Color(d);
if(this._skinParts){if(this._skinParts.bg){this._skinParts.bg.setStyles({"background-color":this._color.getHex()});
if(!window.Browser.ie){this._skinParts.bg.setStyle("opacity",this._color.getAlpha())
}else{this._skinParts.bg.setStyle("filter","alpha(opacity="+this._color.getAlpha()*100+")")
}}var c=this._color.getInvertColor()
}},setSize:function(c,d){if(c){this._view.setStyle("width",c)
}if(d){this._view.setStyle("height",d)
}},enableAlpha:function(b){this._isAlphaEnabled=b;
if(!b&&this._color){this._color.setAlpha(1);
this.setColor(this._color)
}},setHexDisplay:function(b){this._isHexEnabled=b
},openColorPicker:function(b){this._initColor=new W.Color(this._color);
this.injects().Editor.getColorPicker(this._onPickerFetched,{color:this._color,allowAlpha:this._isAlphaEnabled,event:b});
this.fireEvent("click")
},_onPickerFetched:function(b){this._colorPicker=b;
this._onColorPickerChange({color:new W.Color(this._color)});
this._colorPicker.addEvent("change",this._onColorPickerChange);
this._colorPicker.addEvent("close",this._onColorPickerClose)
},_onColorPickerChange:function(b){this.setColor(b.color);
this.fireEvent("change",{color:b.color,cause:"temp"})
},_onColorPickerClose:function(h){var f=(h.cause!="ok"&&h.cause!="blur");
var g=f?this._initColor:h.color;
var e=f?"cancel":"select";
this.setColor(g);
this.fireEvent("change",{color:g,cause:e})
},getColor:function(){return this._color
}}});
W.Components.newComponent({name:"mobile.editor.components.ColorPicker",skinParts:{header:{type:"htmlElement",autoBindDictionary:"SELECT_COLOR_DIALOG_TITLE"},xButton:{type:"htmlElement",command:"this._closeCommand",commandParameter:"cancel"},okBtn:{type:"mobile.editor.components.EditorButton",command:"this._closeCommand",commandParameter:"ok",autoBindDictionary:"SELECT_COLOR"},cancelBtn:{type:"mobile.editor.components.EditorButton",command:"this._closeCommand",commandParameter:"cancel",autoBindDictionary:"CANCEL_BUTTON"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_recalculateByBoxAndSlider","_onBlur","_onHexChanged"],initialize:function(c,d){this.parent(c,d);
this._color=new W.Color("#FF0000");
this._colorFullSL=this._createFullSLColor(this._color);
this._isAlphaEnabled=true;
this._view.addClass("z-colorpicker");
this._closeCommand=this.injects().Commands.createCommand("cp")
},render:function(){this._skinParts.cancelBtn.setLabel(this.injects().Resources.get("EDITOR_LANGUAGE","CANCEL_BUTTON"));
this._skinParts.okBtn.setLabel(this.injects().Resources.get("EDITOR_LANGUAGE","OK_BUTTON"));
var e=this.injects().Theme;
var f=this.injects().Resources;
var d=this._skinParts;
d.SOverlay.set("src",e.getProperty("THEME_DIRECTORY")+"colorPicker/s_overlay.png");
d.LOverlay.set("src",e.getProperty("THEME_DIRECTORY")+"colorPicker/l_overlay.png");
d.hueBg.set("src",e.getProperty("THEME_DIRECTORY")+"colorPicker/hue.png");
d.cancelBtn.setState("grayed","status");
this._measureGUI();
this.setOriginalColor(this._color);
this._setFunctionality();
this._syncToColor();
this.setPosition(0,0);
this.close()
},getColor:function(){return new W.Color(this._color)
},setColor:function(c,d){this._color=new W.Color(c);
this._colorFullSL=this._createFullSLColor(c);
if(d){this.setOriginalColor(this._color)
}this._syncToColor("newColor")
},getOriginalColor:function(){return new W.Color(this._colorOrigin)
},setOriginalColor:function(d){this._colorOrigin=new W.Color(d);
var c=(this._colorOrigin.getAlpha()===0)?0.01:this._colorOrigin.getAlpha();
this._setBgColor(this._skinParts.originColor,this._colorOrigin.getHex(false),c,true)
},setPosition:function(d,c){if(d){this._view.setStyle("left",d)
}if(c){this._view.setStyle("top",c)
}},enableAlpha:function(b){this._isAlphaEnabled=b;
if(!b&&this._color){this._color.setAlpha(1);
this._syncToColor("alphaToggle");
this._skinParts.alphaController.hide()
}else{this._skinParts.alphaController.show()
}},open:function(){this.uncollapse();
$(document.body).addEvent("click",this._onBlur);
this._closeCommand.registerListener(this,this._onClose)
},close:function(b){this.collapse();
$(document.body).removeEvent("click",this._onBlur);
this.fireEvent("close",{cause:b,color:this._color});
this._closeCommand.dispose()
},_onBlur:function(){this.close("blur")
},_onHexChanged:function(){var b=this._skinParts.HexInput.value;
if(b===this._color.getHex()){return
}this._color.setHex(b);
this._colorFullSL.setHex(b);
this._syncToColor("HexInput")
},_syncToColor:function(h){var f,g,e=(h=="alphaInput"||h=="newColor");
if(!this._isAlphaEnabled){this._color.setAlpha(1)
}this._setBgColor(this._skinParts.SLBoxSolidColor,this._colorFullSL.getHex(false),this._color.getAlpha(),e);
if(h!="HSPointer"||h=="newColor"){f=((this._color.getSaturation()/100)*this._slSize.x)-+this._slPointerHalfSize;
g=(this._slSize.y-((this._color.getLuminous()/100)*this._slSize.y))-this._slPointerHalfSize;
this._skinParts.HSPointer.setStyles({left:f,top:g})
}if(h!="hueBar"||h=="newColor"){g=(this._colorFullSL.getHue()/360)*(this._hueSliderHeight-this._hueSliderBarHeight);
this._skinParts.hueBar.setStyle("top",g)
}if(h!="alphaInput"){this._skinParts.alphaInput.value=Math.round(this._color.getAlpha()*100)
}if(h!="HInput"){this._skinParts.HInput.value=Math.round(this._color.getHue())
}if(h!="SInput"){this._skinParts.SInput.value=Math.round(this._color.getSaturation())
}if(h!="LInput"){this._skinParts.LInput.value=Math.round(this._color.getLuminous())
}if(h!="HexInput"){this._skinParts.HexInput.value=this._color.getHex().substr(1)
}this._setBgColor(this._skinParts.currentColor,this._color.getHex(false),this._color.getAlpha(),e);
this.fireEvent("change",{color:this._color})
},_setBgColor:function(e,f,h,g){e.setStyle("background-color",f);
if(g){if(!window.Browser.ie){e.setStyle("opacity",h)
}else{e.setStyle("filter","alpha(opacity="+h*100+")")
}}},_measureGUI:function(){this._slPointerHalfSize=this._skinParts.HSPointer.getSize().x/2;
this._slSize=this._skinParts.SLBox.getSize();
this._hueSliderHeight=this._skinParts.hueSlider.getSize().y;
this._hueSliderBarHeight=this._skinParts.hueBar.getSize().y
},_setFunctionality:function(){var d,e;
this._headerDrag=new Drag.Move(this._skinParts.view,{snap:0,handle:this._skinParts.dragArea});
this._skinParts.view.addEvent("click",function(a){a.stop()
});
this._skinParts.HexInput.addEvent("keyup",this._onHexChanged);
this._skinParts.HexInput.addEvent("paste",this._onHexChanged);
this._slPointerDrag=new Drag.Move(this._skinParts.HSPointer,{limit:{x:[(0-this._slPointerHalfSize),(this._slSize.x-this._slPointerHalfSize)],y:[(0-this._slPointerHalfSize),(this._slSize.y-this._slPointerHalfSize)]},onDrag:this._recalculateByBoxAndSlider,snap:0});
this._skinParts.SLBox.addEvent("mousedown",function(a){a=new Event(a);
this._skinParts.HSPointer.setStyles({top:a.page.y-this._skinParts.SLBox.getTop()-this._slPointerHalfSize,left:a.page.x-this._skinParts.SLBox.getLeft()-this._slPointerHalfSize});
this._slPointerDrag.start(a);
this._recalculateByBoxAndSlider()
}.bind(this));
var f=this._skinParts.hueBar.getStyle("left").toInt();
f=(isNaN(f))?0:f;
this._hueSliderDrag=new Drag.Move(this._skinParts.hueBar,{limit:{x:[f,f],y:[0,(this._hueSliderHeight-this._hueSliderBarHeight)]},onDrag:this._recalculateByBoxAndSlider,snap:0});
this._skinParts.hueSlider.addEvent("mousedown",function(a){a=new Event(a);
this._skinParts.hueBar.setStyle("top",(a.page.y-this._skinParts.hueSlider.getTop()));
this._hueSliderDrag.start(a);
this._recalculateByBoxAndSlider()
}.bind(this));
this._setInputFunctionality(this._skinParts.alphaInput,0,100,100,function(a){this._color.setAlpha(a/100);
this._syncToColor("alphaInput")
}.bind(this));
this._setInputFunctionality(this._skinParts.HInput,0,359,359,function(a){if(a===this._color.getHue()){return
}this._color.setHue(a);
this._colorFullSL.setHue(a);
this._syncToColor("HInput")
}.bind(this));
this._setInputFunctionality(this._skinParts.SInput,0,100,100,function(a){if(a===this._color.getSaturation()){return
}this._color.setSaturation(a);
this._syncToColor("SInput")
}.bind(this));
this._setInputFunctionality(this._skinParts.LInput,0,100,100,function(a){if(a===this._color.getLuminous()){return
}this._color.setLuminous(a);
this._syncToColor("LInput")
}.bind(this));
this._skinParts.originColor.addEvent("click",function(){this.setColor(this._colorOrigin)
}.bind(this));
this._skinParts.originColor.setStyle("cursor","pointer")
},_setInputFunctionality:function(l,k,h,g,i){var j=function(a){a.stop();
var c,b=l.value.toInt();
b=Math.round(Number((isNaN(b))?g:b));
if(a.type==Element.Events.mousewheel.base){b+=(a.wheel!=-1)?1:-1
}c=Math.min(b,h);
c=Math.max(c,k);
if(c!=b||a.type==Element.Events.mousewheel.base){l.value=c
}i(c)
}.bind(this);
l.addEvents({keyup:j,mousewheel:j})
},_recalculateByBoxAndSlider:function(g){this._headerDrag.stop();
var h=((this._skinParts.HSPointer.getStyle("left").toInt()+this._slPointerHalfSize)/this._slSize.x)*100;
var f=100-(((this._skinParts.HSPointer.getStyle("top").toInt()+this._slPointerHalfSize)/this._slSize.y)*100);
var e=((this._skinParts.hueBar.getStyle("top").toInt())/(this._hueSliderHeight-this._hueSliderBarHeight))*360;
this._color.setHsl([e,h,f]);
this._colorFullSL.setHue(e);
this._syncToColor()
},_createFullSLColor:function(c){var d=new W.Color(c);
d.setSaturation(100);
d.setLuminous(100);
return d
},_onClose:function(b){this.close(b)
}}});
W.Components.newComponent({name:"mobile.editor.components.CongratsController",imports:["mobile.editor.components.EditorButton"],skinParts:{header:{type:"htmlElement",autoBindDictionary:"FINISH_DIALOG_HEADER"},subHeader:{type:"htmlElement",autoBindDictionary:"SUB_DIALOG_HEADER"},addressLabel:{type:"htmlElement",autoBindDictionary:"MOBILE_SITE_ADDRESS"},mobileAddress:{type:"htmlElement"},qrCode:{type:"htmlElement"},qrCorrelatingUrl:{type:"htmlElement"},templateSiteIdCnt:{type:"htmlElement"},templateSiteId:{type:"htmlElement"},sendButtonLabel:{type:"htmlElement",autoBindDictionary:"SEND_ADDRESS"},myAccountLabelPart1:{type:"htmlElement",autoBindDictionary:"MY_ACCOUNT_PART_1"},myAccountLink:{type:"htmlElement",autoBindDictionary:"MY_ACCOUNT_LINK"},myAccountLabelPart2:{type:"htmlElement",autoBindDictionary:"MY_ACCOUNT_PART_2"},sendButtonStatusLabel:{type:"htmlElement"},sendButton:{type:"mobile.editor.components.EditorButton",autoBindDictionary:"SEND_BUTTON"},backButton:{type:"mobile.editor.components.EditorButton",autoBindDictionary:"BACK_BUTTON",command:"EditorCommands.GoToEditPage",commandParameter:wixEvents.BACK_TO_EDIT_FROM_CONGRATS}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_sendButtonClick"],render:function(){var e=window.siteHeader;
var f=this.injects().Resources;
this._skinParts.sendButtonStatusLabel.hide();
var d=this.injects().Editor.isStandalone();
if(d){this._skinParts.myAccountLink.set("href","http://mobile.wix.com/my-account")
}else{this._skinParts.myAccountLink.set("href","http://www.wix.com/create/my-account")
}},_onAllSkinPartsReady:function(b){b.sendButton.addEvent("buttonClick",this._sendButtonClick);
this.injects().Viewer.addEvent("pageTransitionEnded",this._editorNavigationHandler.bind(this))
},_editorNavigationHandler:function(){if(this.injects().Viewer.getCurrentPageId()=="congrats_page"){this._siteUrl="http://m.wix.com/"+siteHeader.username+"/"+siteHeader.siteName;
this._skinParts.mobileAddress.set("href",this._siteUrl);
this._skinParts.mobileAddress.set("html",this._siteUrl);
if(window.debugMode=="debug"||window.debugMode=="theme"){this._createQRCode()
}if(window.debugMode=="theme"){var b=siteHeader.id;
this._skinParts.templateSiteId.set("value",b);
this._skinParts.templateSiteId.set("readonly","readonly");
this._skinParts.templateSiteIdCnt.uncollapse()
}else{this._skinParts.templateSiteIdCnt.collapse();
this._skinParts.qrCode.collapse();
this._skinParts.qrCorrelatingUrl.collapse()
}}},_createQRCode:function(){var j=window.location.search;
this._skinParts.templateSiteIdCnt.collapse();
var g="";
if(j.indexOf("ip=")!=-1){var f=j.substr(j.indexOf("ip=")+3);
if(f.indexOf("&")!=-1){f=f.substr(0,f.indexOf("&"))
}g="http://"+f+"/services/wix-html-public/doc"
}else{g=window.location.origin;
if(g.indexOf("http://dev")!=-1){this._skinParts.qrCode.collapse();
this._skinParts.qrCorrelatingUrl.collapse();
return
}g=g.substr(g.indexOf("."));
g="http://m"+g
}var h="http://qrcode.kaywa.com/img.php?s=6&d=";
var i=g+"/"+siteHeader.username+"/"+siteHeader.siteName;
this._skinParts.qrCorrelatingUrl.set("href",i);
this._skinParts.qrCorrelatingUrl.set("html",i);
this._skinParts.qrCode.set("src",h+i)
},_sendButtonClick:function(){var b=this.injects().Resources;
this.injects().ServerFacade.sendAddressToMail(siteHeader.id,function(){this._skinParts.sendButtonStatusLabel.set("html",b.get("EDITOR_LANGUAGE","SEND_SUCCESS"));
this._skinParts.sendButtonStatusLabel.show();
this._skinParts.sendButton.hide();
this.injects().Utils.callLater(this._returnSendButton,[],this,5000)
}.bind(this),function(){this._skinParts.sendButtonStatusLabel.set("html",b.get("EDITOR_LANGUAGE","SEND_ERROR"));
this.injects().Utils.callLater(this._returnSendButton,[],this,5000)
}.bind(this));
this._skinParts.sendButtonStatusLabel.show();
this._skinParts.sendButton.hide();
this._skinParts.sendButtonStatusLabel.set("html",b.get("EDITOR_LANGUAGE","SENDING"));
LOG.reportEvent(wixEvents.EMAIL_SEND)
},_returnSendButton:function(){this._skinParts.sendButtonStatusLabel.hide();
this._skinParts.sendButton.show()
},getAcceptableDataTypes:function(){return["","Document"]
}}});
W.Components.newComponent({name:"mobile.editor.components.DataPanelActionBar",skinParts:{addBtn:{type:"mobile.core.components.Button",autoBindDictionary:"ADD_COMPONENT"},dataBtn:{type:"mobile.core.components.Button",autoBindDictionary:"EDIT_DATA_MODE"},compBtn:{type:"mobile.core.components.Button",autoBindDictionary:"EDIT_COMPONENT_MODE"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["comp","data"],Binds:["_setMode","_openAddButtonDialog","_onComponentSelected"],initialize:function(f,d,e){this.parent(f,d,e);
this.setState("data")
},_onAllSkinPartsReady:function(){this._skinParts.addBtn.addEvent("click",this._openAddButtonDialog);
this._skinParts.compBtn.addEvent("click",function(){this._setMode("comp")
}.bind(this));
this._skinParts.dataBtn.addEvent("click",function(){this._setMode("data")
}.bind(this));
this._onStateChange(this.getState())
},_onStateChange:function(b){if(this._skinParts){if(b=="comp"){this._skinParts.compBtn.setState("selected");
this._skinParts.dataBtn.setState("up")
}else{this._skinParts.compBtn.setState("up");
this._skinParts.dataBtn.setState("selected")
}}},_openAddButtonDialog:function(){this.injects().EditorDialogs.openAddComponentDialog(this._onComponentSelected)
},_setMode:function(b){this.fireEvent("modeToggle",b)
},_onComponentSelected:function(b){this.injects().Editor.addComponentToCurrentPage(b)
}}});
W.Components.newComponent({name:"mobile.editor.components.DataPanelsContainer",skinParts:{},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:{editMode:["comp","data"],arrange:["arrangeOn","arrangeOff"]},Binds:["focusItem","moveItem","exitCompMode","setMode","deleteItem"],initialize:function(f,e,d){this.parent(f,e,d);
this._pagePanelsMap={};
this._currentPageNode=null;
this._currentState="data";
this.parent(f,e)
},openPanel:function(){this.uncollapse()
},closePanel:function(){this.collapse()
},pageExists:function(b){return(this._pagePanelsMap[b]!==undefined)
},addComponentsToPage:function(q,t){var s=this._pagePanelsMap[q];
var n=true;
for(var p=0;
p<t.length;
p++){var m=t[p];
var r=m.getDataItem()!==undefined?m.getDataItem().getType():null;
var o=this.injects().Editor.getDataPanel(r,m.className);
if(o){if(!s.getChildren().length&&q!="HeaderDataPanelContainer"){var j=this.injects().Components.createComponent("mobile.editor.components.DataPanelActionBar","mobile.editor.skins.DataPanelActionBarSkin",null,null,function(a){a.addEvent("modeToggle",this.setMode);
this._updateCompPositionStatus()
}.bind(this),function(b){var a=b._view;
var c=a.getStyle("height");
var d=c&&c[0]&&(c[0].toInt()+a.getPosition().y);
if(d!=200){}d=270;
this._visiblePoint=d
}.bind(this),null);
var l=new Element("div");
l.className="headerSectionContainer sectionContainer z-header";
s.appendChild(l);
if(m.className==="mobile.core.components.PageTitle"){this._createPanel(o,m,l,n);
l.getFirst().addClass("first");
s.addClass("hasHeaderContainer")
}if(m.className!=="mobile.core.components.Header"){j.insertInto(l)
}if(m.className!=="mobile.core.components.PageTitle"){this._createPanel(o,m,s,n)
}this._updateCompPositionStatus()
}else{this._createPanel(o,m,s,n);
this._updateCompPositionStatus()
}n=false
}}},setPanels:function(d,c){this._currentState="data";
if(this._currentPageNode){this._currentPageNode.collapse()
}if(this._pagePanelsMap[d]){this._currentPageNode=this._pagePanelsMap[d]
}else{this._pagePanelsMap[d]=this._addPageContainer(d);
this.addComponentsToPage(d,c)
}this._currentPageNode.uncollapse();
this.setState(this._currentState,"editMode")
},exitCompMode:function(){this.setState("data","editMode")
},setMode:function(b){this.setState((b=="comp")?"comp":"data","editMode")
},deleteItem:function(o){LOG.reportEvent(wixEvents.REMOVE_COMPONENT);
var p=o.panelNode;
var j=p.getParent();
var k=j.getChildren();
var l=k.indexOf(p);
var m=o.compNode;
p.destroy();
m.destroy();
this.fireEvent("deleteCompItem");
this.injects().Preview.flagPreviewDataChange();
this._updateCompPositionStatus();
var n=k.length;
if(l==(n-1)&&n>2){var i=k[k.length-2];
if(i&&i.getLogic){i.getLogic().focus()
}}},moveItem:function(t){LOG.reportEvent(wixEvents.REORDER_COMPONENT);
var q=(t.dir=="up")?-1:1;
var o=t.panelNode;
var v=t.compNode;
var s=o.getParent();
var r=s.getChildren();
var m=r.indexOf(o);
var n=m+q;
var p=r[n];
var u=function(a,c,b){a.insertInto(s)
};
if(n>0&&this._isComponentPanel(p)&&this._isComponentPanel(o)){r[m]=p;
r[n]=o;
r.forEach(u);
s=v.getParent();
r=s.getChildren();
var l=p.getLogic().getComponent().getViewNode();
m=r.indexOf(v);
n=r.indexOf(l);
r[m]=l;
r[n]=v;
r.forEach(u)
}this._updateCompPositionStatus();
this.injects().Preview.flagPreviewDataChange()
},focusItem:function(f,i){i=i||this._currentPageNode;
var g=i.getChildren();
for(var j=0;
j<g.length;
++j){var h=g[j];
if(h.hasClass("sectionContainer")){this.focusItem(f,h)
}if(this._isComponentPanel(h)){if(f.panelNode===h){h.getLogic().setState("focus","selected");
if(h.getPosition().y-this.injects().Viewer.getScrollTop()<this._visiblePoint){window.scrollTo(0,h.getPosition().y-this._visiblePoint-100)
}}else{h.getLogic().setState("blur","selected")
}}}},_onStateChange:function(b){this._setEditMode(b)
},_setEditMode:function(i,k){this._currentState=(i=="data"||i=="comp")?i:"data";
k=k||this._currentPageNode;
if(this._currentState=="comp"&&tinyMCE.selectedInstance){tinyMCE.selectedInstance.remove()
}var g=k.getChildren();
for(var l=0;
l<g.length;
++l){var j=g[l];
if(j.hasClass("sectionContainer")){this._setEditMode(i,j)
}if(this._isComponentPanel(j)){j.getLogic().setEditState(i)
}else{if(j.getLogic&&j.get("comp")=="mobile.editor.components.DataPanelActionBar"){j.getLogic().setState(i)
}}}var h=(i=="comp");
k.toggleClass("compMode",h)
},_addPageContainer:function(d){var c=new Element("div",{id:d});
this._currentPageNode=c;
this._pagePanelsMap[d]=c;
c.insertInto(this._view);
return c
},_createPanel:function(l,h,g,k){var i={previewComponent:h,dataPanelLogic:l.logic,dataPanelSkin:l.skin,initEditMode:this._currentState,disableComponentEditState:(g.getChildren().length===0&&h.className=="mobile.core.components.PageTitle"),disableDelete:(h.className=="mobile.core.components.SiteMenu")};
var j=this.injects().Components.createComponent("mobile.editor.components.editpanels.DataPanelWrapper","mobile.editor.skins.editpanels.DataPanelWrapperSkin",null,i,null,function(a){a.addEvent("move",this.moveItem);
a.addEvent("exitCompMode",this.exitCompMode);
a.addEvent("deleteComponent",this.deleteItem);
a.addEvent("focusItem",this.focusItem);
if(k){if(a.getState().indexOf("data")!=-1){a.getDataPanel().focus()
}else{a.focus()
}}}.bind(this));
j.insertInto(g)
},_updateCompPositionStatus:function(){if(this._currentPageNode){var f=this._currentPageNode.getChildren();
var i,g;
for(var j=1;
j<f.length;
++j){var h=f[j];
if(h.get("comp")=="mobile.editor.components.editpanels.DataPanelWrapper"){h.removeClass("first").removeClass("middle").removeClass("last");
if(!i){h.addClass("first");
i=h
}else{h.addClass("middle")
}g=h
}}if(g){g.addClass("last").removeClass("middle")
}}},_isComponentPanel:function(b){return Boolean(b&&b.getLogic&&b.getLogic().isDataPanelWrapper&&b.getLogic().isDataPanelWrapper())
}}});
W.Components.newComponent({name:"mobile.editor.components.DataPanelsNavigation",skinParts:{nextButton:{type:"mobile.editor.components.EditorButton",command:"SitePageControl.next"},prevButton:{type:"mobile.editor.components.EditorButton",command:"SitePageControl.prev"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_onAllSkinPartsReady:function(c){var d=this._skinParts.prevButton;
d.setState("grayed");
d.setLabel("Previous page");
this._skinParts.nextButton.setLabel("Next page")
},openPanel:function(){this.uncollapse()
},closePanel:function(){this.collapse()
}}});
W.Components.newComponent({name:"mobile.editor.components.EditAnalytics",skinParts:{title:{type:"htmlElement"},description:{type:"htmlElement"},stats_paragraph_a:{type:"htmlElement"},stats_paragraph_b:{type:"htmlElement"},stats_paragraph_c:{type:"htmlElement"},faq:{type:"htmlElement"},faqToggle:{type:"htmlElement"},faqContent:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_renderTriggers:[Constants.DisplayEvents.DISPLAY_CHANGED],Binds:["_noDataRender"],_states:["freeUser","premiumUser","nullDocumentData","toggleFaq"],initialize:function(f,d,e){this.parent(f,d,e)
},_addPremiumUrl:function(b){siteHeader.creationSource.toLowerCase()=="web"?b.targetUrl="https://premium.wix.com/wix/api/packagePicker?wsess=510b780f-2ef4-4156-be03-e04a9615cd36":b.targetUrl="https://premium.wix.com/wix/api/packagePickerMobile?wsess=3693206d-09f0-46d3-9dd6-65c487a21336";
b.targetWindow="_blank";
return b
},_onAllSkinPartsReady:function(){this._skinParts.faq.addEvent("click",this._toggleFaq);
this.setTitleAndDescription();
this.setFooter()
},render:function(){this.injects().ServerFacade.getPremiumFlag(function(b){if(b===null){this.setState("nullDocumentData")
}else{if(!b){this.setState("freeUser")
}else{if(b){this.setState("premiumUser")
}}}this.setExposition()
}.bind(this));
W._validateJsonp=setTimeout(this._noDataRender,500)
},_noDataRender:function(){this.setState("nullDocumentData");
this.setExposition()
},setTitleAndDescription:function(){this._skinParts.title.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","google_analytics_title"));
this._skinParts.description.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","google_analytics_description"))
},setExposition:function(){this._skinParts.stats_paragraph_a.set("html",this._getLangByState("stats_paragraph_a"));
this._skinParts.stats_paragraph_b.set("html",this._getLangByState("stats_paragraph_b"));
if(this.getState()=="nullDocumentData"){this._skinParts.stats_paragraph_c.set("html",this._getLangByState("stats_paragraph_c"))
}},setFooter:function(){this._skinParts.faq.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","googleAnalyticsFAQ"));
this._skinParts.faqContent.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","googleAnalyticsFAQ_content"))
},_getLangByState:function(b){return this.injects().Resources.get("EDITOR_LANGUAGE",b+"_"+this.getState())
},_toggleFaq:function(){var b=this.getParent().getLogic()._skinParts.faqToggle;
b.isCollapsed()?b.uncollapse():b.collapse()
}}});
W.Components.newComponent({name:"mobile.editor.components.EditDesignBackground",skinParts:{bgActionContainer:{type:"htmlElement"},mediaBg:{type:"htmlElement",autoBindDictionary:"mediaBg"},bgColor:{type:"htmlElement",autoBindDictionary:"bgColor"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onBgColorSelect","_colorPickerReady","_previewThemePropChange","_bgColorOpen","_bgImgOpen"],initialize:function(f,d,e){this.parent(f,d,e);
this._bgColorItem=""
},render:function(){this._skinParts.mediaBg.addEvent("click",this._bgImgOpen);
this._skinParts.bgColor.addEvent("click",this._bgColorOpen)
},_previewThemePropChange:function(b){if(b.name=="siteBgColor"&&this._skinParts&&this._skinParts.bgColor){this._skinParts.bgColor.setStyle("background-color",b.newVal.toString());
this._bgColorItem=b.newVal
}},_onBgColorCreate:function(b){this._bgColorItem=this.injects().Preview.getPreviewThemeProperty("siteBgColor");
b.setStyle("background-color",this._bgColorItem.getHex())
},_onBgImgCreate:function(b){},_bgImgOpen:function(b){b.preventDefault(b);
this._saveStatus();
W.EditorDialogs.openMediaDialog(this._onImgSelect,false,"Photos",["UserMedia","Backgrounds"])
},_bgColorOpen:function(b){b.preventDefault(b);
this._saveStatus();
this.injects().Editor.getColorPicker(this._colorPickerReady,{color:this._bgColorItem,event:b})
},_saveStatus:function(){this._initBgType=this.injects().Preview.getPreviewThemeRawProperty("bgType");
this._initBgColor=this.injects().Preview.getPreviewThemeRawProperty("siteBgColor");
this._initBgId=this.injects().Preview.getPreviewThemeRawProperty("bgId");
this._initBgDir=this.injects().Preview.getPreviewThemeRawProperty("BG_DIRECTORY")
},_resetStatus:function(){this.injects().Preview.setPreviewThemeProperty("bgType",this._initBgType);
this.injects().Preview.setPreviewThemeProperty("siteBgColor",this._initBgColor);
this.injects().Preview.setPreviewThemeProperty("bgId",this._initBgId);
this.injects().Preview.setPreviewThemeProperty("BG_DIRECTORY",this._initBgDir)
},_colorPickerReady:function(b){this.picker=b;
this._onBgColorSelect({color:new W.Color(this._bgColorItem)});
b.addEvent("change",this._onBgColorSelect);
b.addEvent("close",this._onBgColorClose.bind(this))
},_onBgColorSelect:function(b){b=b.color.getHex();
this.injects().Preview.setPreviewThemeProperty("bgType","BG_USES_CUSTOM_COLOR");
this._skinParts.bgColor.setStyle("background-color",b);
this.injects().Preview.setPreviewThemeProperty("siteBgColor",b)
},_onBgColorClose:function(b){if(b.cause!="ok"){this._skinParts.bgColor.setStyle("background-color",this._bgColorItem);
this._resetStatus()
}if(b.cause=="ok"){this._bgColorItem=b.color
}},_onImgSelect:function(b){this.injects().Preview.getPreviewManagers().Theme.setProperty("bgType","BG_USES_CUSTOM_IMAGE");
this.injects().Preview.setPreviewThemeProperty("bgSize",b.width+","+b.height);
this.injects().Preview.setPreviewThemeProperty("bgId",b.uri)
},setSiteLoaded:function(){this._bgColorItem=this.injects().Preview.getPreviewThemeProperty("siteBgColor");
this._onBgImgCreate(this._skinParts.mediaBg);
this._onBgColorCreate(this._skinParts.bgColor);
this.injects().Preview.addEventForPreviewThemePropertyChange(this._previewThemePropChange)
}}});
W.Components.newComponent({name:"mobile.editor.components.EditDesignColor",skinParts:{title:{type:"htmlElement",autoBindDictionary:"editDesignColorSubTitle"},resetBtn:{type:"htmlElement",autoBindDictionary:"RESET"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_resetColors"],initialize:function(f,d,e){this.parent(f,d,e);
this._promptBeforeResetColors=true
},_onAllSkinPartsReady:function(){this._skinParts.resetBtn.addEvent("click",this._resetColors)
},setSiteLoaded:function(){this._skinParts.colors.empty();
this._itemsArray=[];
this._itemsAmount=0;
var d=this._data.get("properties");
for(var c in d){this._itemsAmount++;
this._addColorItem(c,d[c].allowAlpha)
}},_addColorItem:function(f,e){var d=this.injects().Components.createComponent("mobile.editor.components.internal.EditDesignColorItem","mobile.editor.skins.internal.EditDesignColorItemSkin",undefined,{colorProp:f,allowAlpha:e},undefined,function(a){this._colorItemReady(a)
}.bind(this));
d.insertInto(this._skinParts.colors)
},_colorItemReady:function(b){this._itemsArray.push(b);
if(this._itemsArray.length==this._itemsAmount){this._renderIfReady()
}},_resetColors:function(){if(this._promptBeforeResetColors){var d=this.injects();
var c=d.Resources;
d.EditorDialogs.openPromptDialog(c.get("EDITOR_LANGUAGE","RESET_COLORS_DIALOG_TITLE"),c.get("EDITOR_LANGUAGE","RESET_COLORS_DIALOG_TEXT"),c.get("EDITOR_LANGUAGE","RESET_COLORS_DIALOG_DETAILS"),d.EditorDialogs.DialogButtonSet.YES_NO,function(a){if(a.result==this.injects().EditorDialogs.DialogButtons.YES){this._doResetColors()
}}.bind(this))
}else{this._doResetColors()
}},_doResetColors:function(){var c=this._data.get("properties");
for(var d=0;
d<this._itemsArray.length;
++d){this._itemsArray[d].resetColor()
}},getAcceptableDataTypes:function(){return["ColorPropList"]
}}});
W.Components.newComponent({name:"mobile.editor.components.EditDesignPanel",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],skinParts:{title:{type:"htmlElement",autoBindDictionary:"editDesignTitle"},categories:{type:"htmlElement"},doneButton:{type:"mobile.editor.components.EditorButton",autoBindDictionary:"DONE_BUTTON",command:"EditorCommands.OpenEditPanel",commandParameter:"data"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onCategoryClick"],initialize:function(f,d,e){this.parent(f,d,e);
this._categoryItemsNodes=[];
this._categoryItems=[];
this.closePanel()
},render:function(){if(this._data.get("properties").length==1){this._categoryItems[0].open()
}},openPanel:function(){this.uncollapse()
},closePanel:function(){this.collapse()
},setSiteLoaded:function(){for(var d=0;
d<this._categoryItemsNodes.length;
++d){var c=this._categoryItemsNodes[d];
if(c.getLogic){c.getLogic().setSiteLoaded()
}}},_prepareForRender:function(){var f=this._data.get("properties")||[];
var e=f.length;
if(e<1){return true
}if(this._categoryItems.length>=e){return true
}if(this._categoryItemsNodes.length>e){return false
}for(var d=0;
d<f.length;
++d){this.addSection(f[d])
}if(debugMode=="theme"){this._addThemeEditorSection()
}return this._categoryItems.length>=f.length
},_onAllSkinPartsReady:function(b){this.closePanel()
},_onSectionReady:function(b){b.addEvent("click",this._onCategoryClick);
this._categoryItems.push(b);
if(this._categoryItems.length==this._data.get("properties").length){this._renderIfReady()
}},addSection:function(c){if(!this._skin._itemSkin){LOG.reportError(wixErrors.EDITOR_NO_SKIN,"mobile.editor.components.EditDesignPanel","addSection")
}var d=W.Components.createComponent("mobile.editor.components.EditDesignPanelItem",this._skin._itemSkin,undefined,c,undefined,function(a){this._onSectionReady(a)
}.bind(this));
d.insertInto(this._skinParts.categories);
this._categoryItemsNodes.push(d)
},_onCategoryClick:function(f){for(var d=0;
d<this._categoryItems.length;
++d){var e=this._categoryItems[d];
if(e!=f){e.close()
}else{if(f.getState()=="open"){e.close()
}else{e.open()
}}}},getAcceptableDataTypes:function(){return["PropertyList"]
},_addThemeEditorSection:function(){var c={comp:"mobile.editor.components.EditThemeManagerPanel",skin:"mobile.editor.skins.ThemePanelSkin",dataQuery:"#DESIGN_COLORS",name:"Theme"};
var d=W.Components.createComponent("mobile.editor.components.EditDesignPanelItem",this._skin._itemSkin,undefined,c,undefined,function(a){a.addEvent("click",this._onCategoryClick);
this._categoryItems.push(a)
}.bind(this));
d.insertInto(this._skinParts.categories);
this._categoryItemsNodes.push(d)
}}});
W.Components.newComponent({name:"mobile.editor.components.EditDesignPanelItem",skinParts:{icon:{type:"htmlElement"},title:{type:"htmlElement"},desc:{type:"htmlElement"},openClose:{type:"htmlElement"},content:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onClick","_onInnerCompReady"],_states:["open","close"],initialize:function(f,d,e){this.parent(f,d,e);
this._initAttr=e;
if(e&&e.comp&&e.skin){this._isInnerCompReady=false;
this._contentCompNode=this.injects().Components.createComponent(e.comp,e.skin,e.dataQuery,undefined,undefined,this._onInnerCompReady)
}else{this._contentCompNode=new Element("span");
this._isInnerCompReady=true
}},render:function(){if(!this._state){this.close()
}this._skinParts.title.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","editDesign"+this._initAttr.name+"Title"));
this._skinParts.desc.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","editDesign"+this._initAttr.name+"Desc"));
this._skinParts.icon.set("src",this.injects().Theme.getProperty("THEME_DIRECTORY")+"appearance/app_"+this._initAttr.name.toLowerCase()+"_icon.png")
},_prepareForRender:function(){var b=this._contentCompNode;
if(b&&(b.parentNode!=this._skinParts.content)){b.insertInto(this._skinParts.content)
}return this._isInnerCompReady
},_onAllSkinPartsReady:function(){this._skinParts.header.addEvent(Constants.CoreEvents.CLICK,this._onClick)
},open:function(){this.setState("open");
this._skinParts.openClose.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","close"));
if(this._contentCompNode){this._contentCompNode.uncollapse()
}},close:function(){this.setState("close");
this._skinParts.openClose.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","open"));
if(this._contentCompNode){this._contentCompNode.collapse()
}},setSiteLoaded:function(){if(this._contentCompNode&&this._contentCompNode.getLogic){this._contentCompNode.getLogic().setSiteLoaded()
}},_onClick:function(){this.fireEvent(Constants.CoreEvents.CLICK,this)
},_onInnerCompReady:function(b){this._isInnerCompReady=true;
this._renderIfReady()
}}});
W.Components.newComponent({name:"mobile.editor.components.EditDesignTemplate",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],skinParts:{resetBtn:{type:"htmlElement",autoBindDictionary:"RESET"},templateGal:{type:"mobile.editor.components.TemplateGallery",dataQuery:"#TemplateSelectorData",argObject:{numToShow:5,thumbnailWidth:80,thumbnailHeight:102,pos:400}}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_templateSelected","_resetThemeOverrides"],initialize:function(f,d,e){this.parent(f,d,e);
this.injects().Editor.addEvent("save",this.updateCurrentOverrides.bind(this));
this._promptBeforeResetOverrides=false
},_onAllSkinPartsReady:function(){this._skinParts.resetBtn.addEvent("click",this._resetThemeOverrides);
this._skinParts.templateGal.addEvent("templateSelected",this._templateSelected)
},setSiteLoaded:function(){this.injects().Preview.addEventForPreviewThemePropertyChange(this._previewThemePropChange);
this._currentOverrides=Object.clone(W.Preview.getPreviewThemeOverrides());
this._loadedThemes={}
},updateCurrentOverrides:function(){this._currentOverrides=Object.clone(W.Preview.getPreviewThemeOverrides())
},_resetThemeOverrides:function(){if(this._promptBeforeResetOverrides){this.injects().EditorDialogs.openPromptDialog(this.injects().Resources.get("EDITOR_LANGUAGE","RESET_THEME_OVERRIDES_DIALOG_TITLE"),this.injects().Resources.get("EDITOR_LANGUAGE","RESET_THEME_OVERRIDES_DIALOG_TEXT"),this.injects().Resources.get("EDITOR_LANGUAGE","RESET_THEME_OVERRIDES_DIALOG_DETAILS"),this.injects().EditorDialogs.DialogButtonSet.YES_NO,function(d){if(d.result==this.injects().EditorDialogs.DialogButtons.YES){this._skinParts.templateGal.clearSelection();
W.Preview.clearPreviewThemeOverrides();
for(var c in this._currentOverrides){this.injects().Preview.setPreviewThemeProperty(c,this._currentOverrides[c].value)
}}}.bind(this))
}},_templateSelected:function(g){if(this._loadedThemes[g.templateId]){W.Preview.clearPreviewThemeOverrides();
var h=this.injects().Preview;
var f=this._loadedThemes[g.templateId];
for(var e in f){h.setPreviewThemeProperty(e,f[e].value)
}return
}W.ServerFacade.getThemeDataJson(g.templateId,function(b){W.Preview.clearPreviewThemeOverrides();
var a=this.injects().Preview;
for(var c in b.properties){a.setPreviewThemeProperty(c,b.properties[c].value);
if(!this._loadedThemes[g.templateId]){this._loadedThemes[g.templateId]=b.properties
}}if(!this._promptBeforeResetOverrides){this._promptBeforeResetOverrides=true
}}.bind(this),this.onThemeDataLoadFailure.bind(this))
},onThemeDataLoadFailure:function(){var b=this.injects().Resources;
this.injects().EditorDialogs.openErrorDialog(b.get("EDITOR_LANGUAGE","ERROR_GET_THEME_OVERRIDES_DIALOG_TITLE"),b.get("EDITOR_LANGUAGE","ERROR_GET_THEME_OVERRIDES_DIALOG_TEXT"),null,function(){}.bind(this))
}}});
W.Components.newComponent({name:"mobile.editor.components.EditHeaderPanel",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],skinParts:{doneButton:{type:"mobile.editor.components.EditorButton",autoBindDictionary:"DONE_BUTTON"},title:{type:"htmlElement",autoBindDictionary:"editHeaderTitle"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["closePanel"],initialize:function(f,d,e){this.parent(f,d,e);
this.closePanel();
this.inited=false;
this._dataPanel=null;
this._isDataPanelReady=false
},_prepareForRender:function(){if(!this._dataPanel){this._dataPanel=this.injects().Components.createComponent("mobile.editor.components.DataPanelsContainer","mobile.core.skins.InlineSkin",undefined,{},this._onPanelReady.bind(this))
}return this._isDataPanelReady
},openPanel:function(){this.uncollapse();
if(!this.inited){var b=this.injects().Preview.getPreviewHeaderComponents();
this._dataPanel.getLogic().setPanels("HeaderDataPanelContainer",b);
this.inited=true
}},closePanel:function(){this.collapse()
},_onPanelReady:function(){this._isDataPanelReady=true;
this._dataPanel.insertInto(this._skinParts.content);
this._renderIfReady()
},_onAllSkinPartsReady:function(){var b=this._skinParts.doneButton;
b.addEvent("buttonClick",function(){this._reportEditorFlowEvent("editPanelClose",this)
}.bind(this))
}}});
W.Components.newComponent({name:"mobile.editor.components.EditSettingsPanel",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],skinParts:{title:{type:"htmlElement",autoBindDictionary:"user_settings_title"},categories:{type:"htmlElement"},doneButton:{type:"mobile.editor.components.EditorButton",autoBindDictionary:"DONE_BUTTON",command:"EditorCommands.OpenEditPanel",commandParameter:"data"}},Class:{Extends:"mobile.editor.components.EditDesignPanel",Binds:["_onCategoryClick"],initialize:function(f,d,e){this.parent(f,d,e);
this._categoryItemsNodes=[];
this._categoryItems=[];
this.closePanel()
},render:function(){if(this._data.get("properties").length==1){this._categoryItems[0].open()
}},openPanel:function(){this.uncollapse()
},closePanel:function(){this.collapse()
},setSiteLoaded:function(){for(var d=0;
d<this._categoryItemsNodes.length;
++d){var c=this._categoryItemsNodes[d];
if(c.getLogic){c.getLogic().setSiteLoaded()
}}},_prepareForRender:function(){var f=this._data.get("properties")||[];
var e=f.length;
if(e<1){return true
}if(this._categoryItems.length>=e){return true
}if(this._categoryItemsNodes.length>e){return false
}for(var d=0;
d<f.length;
++d){this.addSection(f[d])
}return this._categoryItems.length>=f.length
},_onAllSkinPartsReady:function(b){this.closePanel()
},_onSectionReady:function(b){b.addEvent("click",this._onCategoryClick);
this._categoryItems.push(b);
if(this._categoryItems.length==this._data.get("properties").length){this._renderIfReady()
}},addSection:function(c){if(!this._skin._itemSkin){LOG.reportError(wixErrors.EDITOR_NO_SKIN,"mobile.editor.components.EditSettingsPanel","addSection")
}var d=W.Components.createComponent("mobile.editor.components.EditSettingsPanelItem",this._skin._itemSkin,undefined,c,undefined,function(a){this._onSectionReady(a)
}.bind(this));
d.insertInto(this._skinParts.categories);
this._categoryItemsNodes.push(d)
},_onCategoryClick:function(f){for(var d=0;
d<this._categoryItems.length;
++d){var e=this._categoryItems[d];
if(e!=f){e.close()
}else{if(f.getState()=="open"){e.close()
}else{e.open()
}}}},getAcceptableDataTypes:function(){return["PropertyList"]
}}});
W.Components.newComponent({name:"mobile.editor.components.EditSettingsPanelItem",skinParts:{icon:{type:"htmlElement"},title:{type:"htmlElement"},desc:{type:"htmlElement"},openClose:{type:"htmlElement"},content:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onClick","_onInnerCompReady"],_states:["open","close"],initialize:function(f,d,e){this.parent(f,d,e);
this._initAttr=e;
if(e&&e.comp&&e.skin){this._isInnerCompReady=false;
this._contentCompNode=this.injects().Components.createComponent(e.comp,e.skin,e.dataQuery,undefined,undefined,this._onInnerCompReady)
}else{this._contentCompNode=new Element("span");
this._isInnerCompReady=true
}},render:function(){if(!this._state){this.close()
}this._skinParts.title.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","editDesign"+this._initAttr.name+"Title"));
this._skinParts.desc.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","editDesign"+this._initAttr.name+"Desc"));
this._skinParts.icon.set("src",this.injects().Theme.getProperty("THEME_DIRECTORY")+"appearance/app_"+this._initAttr.name.toLowerCase()+"_icon.png")
},_prepareForRender:function(){var b=this._contentCompNode;
if(b&&(b.parentNode!=this._skinParts.content)){b.insertInto(this._skinParts.content)
}return this._isInnerCompReady
},_onAllSkinPartsReady:function(){this._skinParts.header.addEvent(Constants.CoreEvents.CLICK,this._onClick)
},open:function(){this.setState("open");
this._skinParts.openClose.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","close"));
if(this._contentCompNode){this._contentCompNode.uncollapse()
}},close:function(){this.setState("close");
this._skinParts.openClose.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","open"));
if(this._contentCompNode){this._contentCompNode.collapse()
}},setSiteLoaded:function(){if(this._contentCompNode&&this._contentCompNode.getLogic){this._contentCompNode.getLogic().setSiteLoaded()
}},_onClick:function(){this.fireEvent(Constants.CoreEvents.CLICK,this)
},_onInnerCompReady:function(b){this._isInnerCompReady=true;
this._renderIfReady()
}}});
W.Components.newComponent({name:"mobile.editor.components.EditThemeManagerPanel",skinParts:{title:{type:"htmlElement",autoBindDictionary:"editThemeSubTitle"},properties:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(d,e,f){this.parent(d,e);
this.skinId=f
},_onAllSkinPartsReady:function(){this._skinParts.title.addEvent("click",function(){this.togglePanel()
}.bind(this))
},togglePanel:function(){this._skinParts.properties.toggleCollapsed();
this._skinParts.title.toggleClass("selected")
},setSiteLoaded:function(){this.injects().Preview.getPreviewManagers().Config.setServiceTopologyProperty("staticThemeUrl","http://studio.wix.com/studio/themes");
this._themeMgr=this.injects().Preview.getPreviewManagers().Theme;
this._skinParts.properties.empty();
this._createTemplateName();
this._allProps=this._themeMgr.getProperties();
this._itemsArray=[];
this._itemsAmount=0;
for(var b in this._allProps){this._itemsAmount++;
this._createPropItem(b,this._allProps[b].type,false)
}},_createTemplateName:function(){var e=new Element("div",{styles:{position:"relative","margin-bottom":"5px"}});
e.setProperty("propId","templateName");
var d=new Element("label").set("html","New Template Name").set("title","New Template Name");
d.insertInto(e);
var f=new Element("input",{styles:{width:"69%",height:"40px",position:"absolute",top:"0",right:"0"}});
f.addEvent("keyup",this._setTemplateName.bind(this,f));
f.insertInto(d);
e.insertInto(this._skinParts.properties)
},_setTemplateName:function(p,n){if(n.key!="enter"||p.value===""){return
}this._templateName=p.value;
var o=this.injects().Preview.getPreviewManagers().Config.getServiceTopologyProperty("staticThemeUrl");
var m=o+"/"+this._templateName;
for(var k in this._allProps){if(this._allProps[k].type=="themeUrl"){var i=this._themeMgr.getProperty(k);
var l=i.replace(o+"/","");
l=l.substring(l.indexOf("/"));
var j=this._templateName+l;
this._themeMgr.setProperty(k,j)
}}},_createPropItem:function(e,g){var h={font:"","font-family":"",padding:"",radius:"",border:"",number:""};
if(g=="color"){this._addColorItem(e)
}else{if(g in h){if(g=="number"){if(e=="iconSize"||e=="bulletSize"){g="size"
}else{g="spacing"
}}var f=this.injects().Components.createComponent("mobile.editor.components.internal.EditDesignStudioItem","mobile.editor.skins.internal.EditDesignStudioItemSkin",undefined,{valueProp:e,mode:g},undefined,function(a){this._colorItemReady(a)
}.bind(this));
f.insertInto(this._skinParts.properties)
}}},_addColorItem:function(g){var h=this._data.get("properties");
var f=false;
if(h[g]){f=h[g].allowAlpha
}var e=this.injects().Components.createComponent("mobile.editor.components.internal.EditDesignColorItem","mobile.editor.skins.internal.EditDesignColorItemSkin",undefined,{colorProp:g,allowAlpha:f},undefined,function(a){this._colorItemReady(a)
}.bind(this));
e.insertInto(this._skinParts.properties)
},_colorItemReady:function(b){this._itemsArray.push(b);
if(this._itemsArray.length==this._itemsAmount){this._renderIfReady()
}},getAcceptableDataTypes:function(){return["ColorPropList"]
}}});
W.Components.newComponent({name:"mobile.editor.components.EditorButton",injects:["Viewer"],skinParts:{caption:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onButtonClick","_onMouseDown","_onMouseUp","_onMouseOver","_onMouseOut"],_states:{status:["grayed"],mouse:["pressed","over"]},_triggers:["click"],_canFocus:true,initialize:function(h,e,f){this.parent(h,e,f);
f=f||{};
this._label=f.label||e.getAttribute("label")||"";
var g=f.state;
this._initialState=f.initialState;
if(g=="disabled"){this.disable()
}else{if(g!="enabled"){this._tempState=g
}}if(f.targetUrl){this._linkable=true;
this._targetUrl=f.targetUrl;
this._targetWindow=f.targetWindow
}},render:function(){if(!this.getState()&&this._tempState){this.setState(this._tempState)
}this._skinParts.caption.set("html",this._label);
if(this._linkable){this._skinParts.caption.set("href",this._targetUrl);
this._skinParts.caption.setAttribute("target",this._targetWindow)
}},_onAllSkinPartsReady:function(){if(this._initialState=="grayed"){this.setState("grayed","status")
}this._view.addEvent("click",this._onButtonClick);
this._skinParts.view.addEvent(Constants.CoreEvents.MOUSE_DOWN,this._onMouseDown);
this._skinParts.view.addEvent(Constants.CoreEvents.MOUSE_UP,this._onMouseUp);
this._skinParts.view.addEvent(Constants.CoreEvents.MOUSE_OVER,this._onMouseOver);
this._skinParts.view.addEvent(Constants.CoreEvents.MOUSE_OUT,this._onMouseOut)
},setLabel:function(b){this._label=b||"";
this._tryRender(true)
},getLabel:function(){return this._skinParts.caption.get("html")
},setTextContent:function(b){this.setLabel(b)
},_onButtonClick:function(){if(this.isEnabled()){this._view.fireEvent("buttonClick");
this.fireEvent("buttonClick")
}},_onMouseDown:function(){if(this.isEnabled()){this.setState("pressed","mouse")
}},_onMouseUp:function(){this.removeState("pressed","mouse")
},_onMouseOver:function(){if(this.isEnabled()){this.setState("over","mouse")
}},_onMouseOut:function(b){this.removeState("pressed","mouse");
this.removeState("over","mouse")
},getAcceptableDataTypes:function(){return[""]
}}});
W.Components.newComponent({name:"mobile.editor.components.EditorNavigationController",injects:["Viewer"],skinParts:{page1:{type:"htmlElement"},page2:{type:"htmlElement"},page3:{type:"htmlElement"},page4:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",setCurrentPage:function(e){for(var f=0;
f<4;
++f){var d=this._skinParts["page"+(f+1)];
if(d){if(f<e){d.removeClass("unused").removeClass("current").addClass("done")
}else{if(f==e){d.removeClass("unused").removeClass("done").addClass("current")
}else{d.removeClass("done").removeClass("current").addClass("unused")
}}}}},_onAllSkinPartsReady:function(){for(var d in this._skinParts){var c=this._skinParts[d];
if(""===c.id){c.id="editpage__"+d
}}},getAcceptableDataTypes:function(){return[""]
}}});
W.Components.newComponent({name:"mobile.editor.components.EditorPreview",injects:["Viewer"],skinParts:{previewContainer:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:{readyState:["ready","loading"]},initialize:function(f,e,d){this.parent(f,e,d);
this.setState("ready","readyState")
},render:function(){this.injects().Preview.getIFrame().insertInto(this._skinParts.previewContainer)
}}});
W.Components.newComponent({name:"mobile.editor.components.EditorProgressBar",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],imports:["mobile.editor.components.EditorButton"],skinParts:{progressBar:{type:"htmlElement"},progressUnit:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",render:function(){this._skinParts.message.set("html","")
},setPercent:function(b){this._skinParts.progressUnit.setStyle("width",b+"%")
},getAcceptableDataTypes:function(){return[""]
}}});
W.Components.newComponent({name:"mobile.editor.components.FancyItem",skinParts:{arrowsDiv:{type:"htmlElement"},removeDiv:{type:"htmlElement"},hideButton:{type:"htmlElement"},upButton:{type:"htmlElement"},downButton:{type:"htmlElement"},contentDiv:{type:"htmlElement"},deleteButton:{type:"htmlElement"},fancyContainer:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_markElementAsSelected"],_states:["idle","selected"],initialize:function(f,e,d){this.parent(f,e,d);
e.collapse()
},createGui:function(d,c){this._view.uncollapse();
this.options=d;
this._dataPanel=d.dataPanel;
if(c){if(instanceOf(c,Array)){c.forEach(function(a){a.insertInto(this._skinParts.contentDiv)
}.bind(this))
}else{c.insertInto(this._skinParts.contentDiv)
}}W.Utils.show(this._skinParts.arrowsDiv);
W.Utils.show(this._skinParts.removeDiv);
W.Utils.hide(this._skinParts.deleteButton);
W.Utils.hide(this._skinParts.hideButton);
if(this.options.showHideToggleHandler){W.Utils.show(this._skinParts.hideButton);
this.setHidden(this.options.isHidden)
}if(this.options.deleteHandler){W.Utils.show(this._skinParts.deleteButton)
}if(this.options.upClickHandler&&this.options.downClickHandler){this._skinParts.arrowsDiv.uncollapse("inline")
}else{this._skinParts.arrowsDiv.collapse()
}this._view.removeEvent("click");
this.bindEventsHandlers()
},bindEventsHandlers:function(){this._view.addEvent("click",this._markElementAsSelected);
if(this._view.addEventListener){this._view.addEventListener("focus",this._markElementAsSelected,true)
}else{this._view.attachEvent("onfocusin",this._markElementAsSelected)
}this._skinParts.upButton.addEvent("click",this.options.upClickHandler);
this._skinParts.downButton.addEvent("click",this.options.downClickHandler);
this._skinParts.deleteButton.addEvent("click",this.options.deleteHandler);
this._skinParts.hideButton.addEvent("click",function(){var b=this.toggleHidden(this.options.isHidden);
this.options.showHideToggleHandler(b)
}.bind(this))
},setHidden:function(b){if(b){this._skinParts.hideButton.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","show"));
this.options.isHidden=true;
return this.options.isHidden
}else{this._skinParts.hideButton.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","hide"));
this.options.isHidden=false;
return this.options.isHidden
}},toggleHidden:function(){return this.setHidden(!this.options.isHidden)
},_markElementAsSelected:function(b){$$("[skinPart='fancyContainer']").removeClass("selected");
this._skinParts.fancyContainer.addClass("selected");
if(this._dataPanel&&this._dataPanel.highlightPreviewElement){this._dataPanel.highlightPreviewElement(b.target)
}},render:function(){this.setState("idle")
},hide:function(){this._view.collapse()
}}});
W.Components.newComponent({name:"mobile.editor.components.ImageButton",skinParts:{label:{type:"htmlElement",autoBindData:"title"},image:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["up","over","selected"],Binds:["_onClick","_onOver","_onOut","_onDblClick"],_triggers:["click"],_canFocus:true,initialize:function(f,d,e){this.parent(f,d,e);
this._attr=e;
this._toggleMode=(e&&e.toggleMode)||false
},render:function(){var b=this.injects().Components.createComponent("mobile.core.components.Image","mobile.core.skins.ImageSkin",this._data,this._attr,null,function(a){var d=this._skinParts.image.getSize().x;
this._skinParts.image.setStyle("height",d+"px");
a.refresh()
}.bind(this));
b.insertInto(this._skinParts.image);
this._skinParts.label.set("html",this._data.get("title"))
},_onAllSkinPartsReady:function(b){b.view.addEvent("click",this._onClick);
b.view.addEvent("dblclick",this._onDblClick);
b.view.addEvent("mouseover",this._onOver);
b.view.addEvent("mouseout",this._onOut)
},_onClick:function(){if(this.isEnabled()){if(!this._command){this.fireEvent("click",this)
}if(this._toggleMode){var b=(this.getState()!="selected")?"selected":"over";
this.setState(b)
}}},_onDblClick:function(){if(this.isEnabled()){this.fireEvent("dblclick",this)
}},_onOver:function(){if(this.isEnabled()&&this.getState()!="selected"){this.fireEvent("over");
this.setState("over")
}},_onOut:function(){if(this.isEnabled()&&this.getState()!="selected"){this.fireEvent("up");
this.setState("up")
}},getAcceptableDataTypes:function(){return["Image"]
}}});
W.Components.newComponent({name:"mobile.editor.components.PageControllerSimple",skinParts:{prevBtn:{type:"htmlElement"},positionDisplay:{type:"htmlElement"},position:{type:"htmlElement"},amount:{type:"htmlElement"},nextBtn:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["enabled","disabled"],Binds:["next","prev","setIndexFromEvent"],initialize:function(f,d,e){this.parent(f,d,e);
this._currentIndex=this._amount=0
},render:function(){this._skin.renderCssIfNeeded();
this._updatePositionDisplay()
},_onAllSkinPartsReady:function(b){b.prevBtn.addEvent("click",this.prev);
b.nextBtn.addEvent("click",this.next);
b.position.addEvent("change",this.setIndexFromEvent)
},setAmount:function(b){b=Math.round(Number(b));
if(this._currentIndex>b-1){this.setIndex(b-1)
}this._amount=b;
this._updatePositionDisplay()
},getAmount:function(){return this._amount
},setIndex:function(b){if(b==this._currentIndex||this._amount===0){return
}if(b!==this._currentIndex){b=Math.round(Number(b));
b=Math.min(b,this._amount-1);
b=Math.max(b,0);
this._currentIndex=b;
this._updatePositionDisplay();
this.fireEvent("change",this._currentIndex)
}else{this._updatePositionDisplay()
}},getIndex:function(){return this._currentIndex
},setIndexFromEvent:function(c){c=c||{};
var d=c.target&&c.target.value;
if(isNaN(d)){d=this._currentIndex+1
}else{if(d>=this._amount){d=this._amount
}else{if(d<0){d=1
}}}this.setIndex(d-1)
},next:function(c){var d=1;
if(c&&c.alt){d=10
}if(this._skinParts.nextBtn.get("state")=="enable"){this.setIndex(this._currentIndex+d)
}},prev:function(c){var d=1;
if(c&&c.alt){d=10
}if(this._skinParts.prevBtn.get("state")=="enable"){this.setIndex(this._currentIndex-d)
}},_updatePositionDisplay:function(){if(this._skinParts){this._skinParts.amount.set("html","/&nbsp;"+this._amount);
this._skinParts.position.value=(this._currentIndex+1);
this._skinParts.prevBtn.set("state",(this._currentIndex>0)?"enable":"disable");
this._skinParts.nextBtn.set("state",(this._currentIndex<this._amount-1)?"enable":"disable")
}}}});
W.Components.newComponent({name:"mobile.editor.components.PublishController",skinParts:{backButton:{type:"mobile.editor.components.EditorButton",autoBindDictionary:"BACK_BUTTON",command:"EditorCommands.GoToEditPage"},nextButton:{type:"mobile.editor.components.EditorButton",autoBindDictionary:"PUBLISH",command:"SitePageControl.next"},title:{type:"htmlElement",autoBindDictionary:"FINISH_HEADLINE"},subtitle:{type:"htmlElement",autoBindDictionary:"SITE_READY"},sayNothingTitle:{type:"htmlElement",autoBindDictionary:"FINISH_INSTRUCTIONS"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_onAllSkinPartsReady:function(b){b.backButton.setState("grayed")
},getAcceptableDataTypes:function(){return["","Document"]
}}});
W.Components.newComponent({name:"mobile.editor.components.SiteNameSelector",traits:["mobile.core.components.traits.InputFieldEvents"],imports:["mobile.editor.components.EditorButton"],skinParts:{titleInput:{type:"htmlElement"},urlPanel:{type:"htmlElement"},urlLabel:{type:"htmlElement"},urlBox:{type:"htmlElement"},siteNameLabel:{type:"htmlElement"},siteNameLink:{type:"htmlElement"},siteNameLinkDone:{type:"htmlElement"},siteNameInput:{type:"htmlElement"},siteNameErrorLabel:{type:"htmlElement"},loadAnimation:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_titleOnFocus","_titleOnBlur","_titleChange","_siteNameLinkClick","_siteNameLinkClickDone","_siteNameInputChange","_validateSiteName","_validateGeneratedSiteName","_sendSiteNameValidationRequest","_urlOnBlur","_standaloneModeNavigationEventHandler"],initialize:function(f,e,d){this.parent(f,e,d);
this._siteName="";
this._baseSiteUrl="m.wix.com/"+window.siteHeader.username+"/";
this._checkNameCounter=0
},setTemplateMode:function(b){this._isTemplate=b
},render:function(){if(!this._data){return
}this._presetTitle=this._data.get("title");
this._data.removeEvent(Constants.DataEvents.DATA_CHANGED,this._onDataChange);
if(this._isTemplate){var b=this.injects().Utils.convertFromHtmlText(this._data.get("title"));
this._lastTitle=b;
this._skinParts.titleInput.value=b
}this._bindInputToDataField(this._skinParts.titleInput,"title",true,100);
this._skinParts.titleInput.addEvent("focus",this._titleOnFocus);
this._skinParts.titleInput.addEvent("blur",this._titleOnBlur);
if(this.injects().Editor.isStandalone()){this._skinParts.urlPanel.uncollapse();
this._skinParts.siteNameLink.set("text",this.injects().Resources.get("EDITOR_LANGUAGE","change_url"));
this._skinParts.siteNameLinkDone.set("text",this.injects().Resources.get("EDITOR_LANGUAGE","change_url_done"));
this._siteName=this._trimSiteName(this._sanitizeSiteName(this._data.get("title")));
this._skinParts.urlLabel.set("text",this._baseSiteUrl);
this._skinParts.siteNameLabel.set("text",this._siteName);
this._skinParts.siteNameInput.addEvent("blur",this._urlOnBlur);
this._listenToInput(this._skinParts.titleInput,this._titleChange);
this._skinParts.siteNameLink.addEvent("click",this._siteNameLinkClick);
this._skinParts.siteNameLinkDone.addEvent("click",this._siteNameLinkClickDone);
this._validateGeneratedSiteName();
this.injects().Viewer.addEvent("pageTransitionEnded",this._standaloneModeNavigationEventHandler)
}},_standaloneModeNavigationEventHandler:function(){if(this.injects().Viewer.getCurrentPageId()=="naming_page"){this._validationRequestInterval=setInterval(this._sendSiteNameValidationRequest,500)
}else{if(this._validationRequestInterval){clearInterval(this._validationRequestInterval);
this._validationRequestInterval=null
}}},_sanitizeSiteName:function(d){if(d.length!==0){var c=d.toLowerCase();
return c.replace(/([^\s\w\d_-])/g,"").replace(/\s+/g,"-")
}else{return d
}},_trimSiteName:function(b){if(b.length!==0){return b.replace(/(^[\s_-]+)|([\s_-]+$)/g,"")
}else{return b
}},_urlOnBlur:function(){var b=this._trimSiteName(this._skinParts.siteNameInput.get("value"));
this._skinParts.siteNameInput.set("value",b);
this._siteName=b
},_titleOnFocus:function(){if(this._data.getMeta("isPreset")){this._skinParts.titleInput.value=""
}},_titleOnBlur:function(){if(this._data.getMeta("isPreset")){var b=this.injects().Utils.convertFromHtmlText(this._data.get("title"));
this._skinParts.titleInput.value=b
}else{if(this._data.get("title").length===0){this._skinParts.titleInput.value=this._presetTitle;
this._data.set("title",this._presetTitle,true);
this._data.setMeta("isPreset",true,true);
this._titleChange()
}}},_titleChange:function(){var d=this._skinParts.titleInput.get("value");
var c;
if(d!=this._lastTitle){if(d.length!==0){this._siteName=this._trimSiteName(this._sanitizeSiteName(d));
this._skinParts.urlLabel.set("text",this._baseSiteUrl);
this._skinParts.siteNameLabel.set("text",this._siteName);
if(this._siteName.length>0){this._validateGeneratedSiteName()
}else{c=this.injects().Resources.get("EDITOR_LANGUAGE","illegal_chars_in_site_name_error");
this._skinParts.siteNameErrorLabel.set("text",c);
this._skinParts.siteNameErrorLabel.uncollapse();
this._setSiteNameValidity(false)
}}else{c=this.injects().Resources.get("EDITOR_LANGUAGE","empty_title_error");
this._skinParts.siteNameErrorLabel.set("text",c);
this._skinParts.siteNameErrorLabel.uncollapse();
this._skinParts.siteNameLabel.set("text","");
this._setSiteNameValidity(false)
}}this._lastTitle=d
},_siteNameInputChange:function(i){var g=this._skinParts.siteNameInput.get("value");
if(g.length!==0){if(this._siteName!=g){var h=this._skinParts.siteNameInput.getCaretPosition();
var j=this._sanitizeSiteName(g.substr(0,h));
var f=this._sanitizeSiteName(g.substr(h));
this._siteName=j+f;
this._skinParts.siteNameInput.set("value",this._siteName);
this._skinParts.siteNameInput.setCaretPosition(j.length);
this._validateSiteName()
}}else{this._invalidateEmptySiteName()
}},_invalidateEmptySiteName:function(){var c=this.injects().Resources.get("EDITOR_LANGUAGE","empty_site_name_error");
var d=this._skinParts.siteNameErrorLabel;
d.set("text",c);
d.uncollapse();
this._setSiteNameValidity(false)
},_siteNameLinkClick:function(){this._stopListeningToInput(this._skinParts.titleInput,this._titleChange);
this._skinParts.urlLabel.set("text",this._baseSiteUrl);
this._skinParts.siteNameLabel.collapse();
this._skinParts.siteNameInput.set("value",this._siteName);
this._listenToInput(this._skinParts.siteNameInput,this._siteNameInputChange);
this._skinParts.siteNameInput.uncollapse();
this._lastSentSiteName="";
this._skinParts.urlBox.addClass("edit-mode");
this._skinParts.siteNameLink.removeEvent("click",this._siteNameLinkClick);
this._skinParts.siteNameLink.collapse();
this._skinParts.siteNameLinkDone.addEvent("click",this._siteNameLinkClickDone)
},_siteNameLinkClickDone:function(){if(this._siteNameIsValid){this._skinParts.urlBox.removeClass("edit-mode");
this._skinParts.siteNameInput.collapse();
this._skinParts.siteNameLink.uncollapse();
this._skinParts.siteNameLabel.uncollapse();
this._skinParts.siteNameLabel.set("text",this._siteName);
this._skinParts.siteNameErrorLabel.collapse();
this._skinParts.siteNameLink.addEvent("click",this._siteNameLinkClick)
}},_sendSiteNameValidationRequest:function(){if(this._pendingValidationRequest&&this._pendingValidationRequest.siteName.length!==0){this.injects().ServerFacade.sendSiteNameValidationRequest(this._pendingValidationRequest.siteName,this._pendingValidationRequest.onComplete);
this._lastSentSiteName=this._pendingValidationRequest.siteName;
this._pendingValidationRequest=null
}},_validateSiteName:function(){this._skinParts.loadAnimation.addClass("processing");
this._setSiteNameValidity(false);
this._pendingValidationRequest={siteName:this._siteName,onComplete:function(d){if(this._siteName==this._lastSentSiteName){if(this._validateServerNameResponse(d,"_validateSiteName")){this._skinParts.loadAnimation.removeClass("processing");
if(d.nameExists){var c=this.injects().Resources.get("EDITOR_LANGUAGE","site_name_already_exists_error");
this._skinParts.siteNameErrorLabel.set("text",c);
this._skinParts.siteNameErrorLabel.uncollapse()
}else{this._skinParts.siteNameErrorLabel.collapse();
this._skinParts.siteNameErrorLabel.set("text","");
this._setSiteNameValidity(true);
this._skinParts.loadAnimation.removeClass("processing")
}}}}.bind(this)}
},_validateGeneratedSiteName:function(){this._skinParts.loadAnimation.addClass("processing");
this._setSiteNameValidity(false);
this._pendingValidationRequest={siteName:this._siteName,onComplete:function(b){if(this._siteName==this._lastSentSiteName){if(this._validateServerNameResponse(b,"_validateGeneratedSiteName")){this._setSiteNameValidity(true);
this._skinParts.siteNameErrorLabel.collapse();
this._skinParts.siteNameErrorLabel.set("text","");
this._skinParts.loadAnimation.removeClass("processing");
if(b.nameExists){this._siteName=b.suggestedName;
this._skinParts.urlLabel.set("text",this._baseSiteUrl);
this._skinParts.siteNameLabel.set("text",this._siteName)
}}else{}}}.bind(this)}
},_validateServerNameResponse:function(e,g){if(e&&e.suggestedName){this._checkNameCounter=0;
return true
}else{if(this._checkNameCounter<3){var f=(e&&e.errorDescription.errorDescription)||"";
var h;
if(this._checkNameCounter++<2){h=wixErrors.SERVER_NAME_VALIDATION_FAILED;
this[g]()
}else{h=wixErrors.SERVER_NAME_VALIDATION_DEAD;
this.injects().EditorDialogs.openErrorDialog(this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_FATAL_ERROR_TITLE"),this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_FATAL_ERROR_DESC"),null,function(){}.bind(this))
}LOG.reportError(h,"SiteNameSelector","_validateServerNameResponse",f)
}return false
}},getSiteName:function(){return this._siteName
},getTitle:function(){return this._siteTitle
},getAcceptableDataTypes:function(){return["","Header"]
},_setSiteNameValidity:function(b){this._siteTitle=this._data.get("title");
this.fireEvent("validation",b);
if(b){this._skinParts.siteNameLinkDone.removeClass("invalid-sitename")
}else{this._skinParts.siteNameLinkDone.addClass("invalid-sitename")
}this._siteNameIsValid=b
}}});
W.Components.newComponent({name:"mobile.editor.components.SiteNamingPageControl",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],skinParts:{siteNameSelector:{type:"mobile.editor.components.SiteNameSelector"},categorySelector:{type:"mobile.editor.components.CategorySelector"},nextButton:{type:"mobile.editor.components.EditorButton",autoBindDictionary:"NEXT_STEP_BUTTON"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_setCategoryValid","_setNameValid","_nextButtonClick"],initialize:function(f,e,d){this.parent(f,e,d);
this._nameIsValid=false;
this._categoryIsValid=false;
this._siteLoaded=false
},render:function(){this._determineNextButtonState()
},_onAllSkinPartsReady:function(){this._skinParts.nextButton.addEvent("buttonClick",this._nextButtonClick);
this._skinParts.categorySelector.addEvent("validation",this._setCategoryValid);
this._skinParts.siteNameSelector.addEvent("validation",this._setNameValid)
},_nextButtonClick:function(){this._reportEditorFlowEvent("gotoNextPage");
this._skinParts.nextButton.disable();
if(this._selectedCategoryLogic){var c=this._selectedCategoryLogic.getSelectedCategoryName();
var d=this._selectedCategoryLogic.getSelectedCategoryIndex();
LOG.reportEvent(wixEvents.EDITOR_FLOW_CATEGORY_CHOSEN,{i1:d,c1:c,label:c})
}else{LOG.reportError(wixErrors.SITE_NAME_NO_SELECTED_CATEGORY,"SiteNamingPageControl","_nextButtonClick")()
}},_setCategoryValid:function(b){this._categoryIsValid=b;
this._determineNextButtonState()
},_setNameValid:function(b){this._nameIsValid=b;
this._determineNextButtonState()
},_determineNextButtonState:function(){var b=this.injects().Editor.isStandalone();
if((this._categoryIsValid&&!b&&this._siteLoaded)||(this._categoryIsValid&&this._nameIsValid&&b)){this._skinParts.nextButton.enable()
}else{this._skinParts.nextButton.disable()
}},setSiteLoaded:function(b){this._siteLoaded=b;
this._determineNextButtonState()
},setCategoryReference:function(b){this._selectedCategoryLogic=b
},getAcceptableDataTypes:function(){return[""]
}}});
W.Components.newComponent({name:"mobile.editor.components.SitePageController",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],imports:["mobile.editor.components.EditorButton"],skinParts:{container:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.SimpleBaseList",Binds:["_onSitePageChanged","_onSiteLoaded"],_currentPageId:null,initialize:function(j,c,g){this.parent(j,c,g);
var i=this.injects().Editor;
var h=this.injects().Commands;
this._nextCommand=h.registerCommandAndListener("SitePageControl.next",this,this._onNext,null);
this._prevCommand=h.registerCommandAndListener("SitePageControl.prev",this,this._onPrev,null);
i.addEvent(Constants.EditorEvents.SITE_LOADED,this._onSiteLoaded);
i.addEvent(Constants.EditorEvents.SITE_PAGE_CHANGED,this._onSitePageChanged)
},_onAllSkinPartsReady:function(c){var d=this.injects().Editor.getSiteStructure();
if(d){this.setDataItem(d)
}},_getItemsData:function(){if(this._data){return Array.concat(this._data.get("mainPage"),this._data.get("pages"))
}},_onItemReady:function(h,f,g){var j=g&&g.get("id");
h.setCommand("EditorCommands.gotoSitePage",j);
var i=this._currentPageId;
if(i&&j==i){h.setState("selected")
}else{h.setState("up")
}},_onAllItemsReady:function(){this.parent();
if(!this._currentPageId&&this._itemsNodes.length){this._itemsNodes[0].getLogic().executeCommand()
}else{this._recalcNavigationCommands()
}},getCurrentPage:function(){return this._currentPageId
},_onSitePageChanged:function(m){var n=this._itemsNodes;
if(n){for(var k=0,h=n.length;
k<h;
++k){var j=n[k];
if(!j||!j.getLogic){continue
}var l=j.getLogic();
var i=l.getDataItem();
if(i&&(i.get("id")==m)){l.setState("selected")
}else{l.setState("up")
}}}this._currentPageId=m;
this._recalcNavigationCommands()
},_onNext:function(){var d=this.getPageIndex(this._currentPageId);
if(d<0){d=0
}if(this._itemsNodes){if(d<this._itemsNodes.length-1){this._itemsNodes[d+1].getLogic().executeCommand()
}else{var c=this.injects().Commands.getCommand("EditorCommands.GotoNextPage");
if(c){c.execute(null,this)
}}}},_onPrev:function(){var b=this.getPageIndex(this._currentPageId);
if(b>0){this._itemsNodes[b-1].getLogic().executeCommand()
}},getTotalPages:function(){return(this._itemsNodes)?this._itemsNodes.length:0
},getCurrentPageIndex:function(){return this.getPageIndex(this._currentPageId)
},getPageIndex:function(m){var n=this._itemsNodes;
if(n){for(var k=0,h=n.length;
k<h;
++k){var j=n[k];
if(j&&j.getLogic){var l=j.getLogic();
var i=l.getDataItem();
if(i&&(i.get("id")==m)){return k
}}}}return -1
},_getDataManager:function(){return this.injects().Preview.getPreviewManagers().Data
},getItemsContainer:function(){return this._skinParts.container
},getItemClassName:function(){return"mobile.editor.components.SitePageControllerBtn"
},_onSiteLoaded:function(b){this.setDataItem(b)
},_onDataChange:function(){this._itemsNodes=[];
this.parent()
},_recalcNavigationCommands:function(){var c=this.getTotalPages();
var d=this.getCurrentPageIndex();
if(d>0){this._prevCommand.enable()
}else{this._prevCommand.disable()
}if(d<c){this._nextCommand.enable()
}else{this._nextCommand.disable()
}},getAcceptableDataTypes:function(){return["","Document"]
}}});
W.Components.newComponent({name:"mobile.editor.components.SitePageControllerBtn",skinParts:{label:{type:"htmlElement",autoBindData:"title",dictionaryFallback:"empty_title_text"}},Class:{Extends:"mobile.core.components.Button",_states:["up","over","selected","down","pressed"],_triggers:["click"],render:function(){this.parent();
if(this._data.getMeta("isHidden")){this._skinParts.label.addClass("hiddenPage")
}else{this._skinParts.label.removeClass("hiddenPage")
}},getAcceptableDataTypes:function(){return["Page"]
}}});
W.Components.newComponent({name:"mobile.editor.components.StudioButton",skinParts:{clickToEdit:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(f,d,e){this.parent(f,d,e);
this._openStudioPicker=this._openStudioPicker.bind(this);
this._onStudioFetched=this._onStudioFetched.bind(this);
this._onStudioPickerChange=this._onStudioPickerChange.bind(this);
this._onStudioPickerClose=this._onStudioPickerClose.bind(this);
this.setValue("")
},_onAllSkinPartsReady:function(){this._skinParts.view.addEvent("click",this._openStudioPicker)
},setValue:function(b){this._value=b;
if(this._skinParts){if(this._skinParts.valueInput){this._skinParts.valueInput.set("value",b);
this._skinParts.valueInput.set("readonly","readonly")
}this._skinParts.clickToEdit.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","CLICK_TO_EDIT"))
}},setSize:function(c,d){if(c){this._view.setStyle("width",c)
}if(d){this._view.setStyle("height",d)
}},setPropertyType:function(b){this._propertyType=b
},_openStudioPicker:function(b){this._initValue=this._value;
this.injects().Editor.getStudioPicker(this._onStudioFetched,{value:this._value,mode:this._propertyType});
this.fireEvent("click")
},_onStudioFetched:function(b){this._studioPicker=b;
this._onStudioPickerChange({value:this._value});
this._studioPicker.addEvent("change",this._onStudioPickerChange);
this._studioPicker.addEvent("close",this._onStudioPickerClose)
},_onStudioPickerChange:function(b){this.fireEvent("change",{value:b.value,cause:"temp"});
this.setValue(b.value)
},_onStudioPickerClose:function(f){var d=(f.cause!="ok")?this._initValue:f.value;
var e=(f.cause!="ok")?"cancel":"select";
this.setValue(d);
this.fireEvent("change",{value:d,cause:e})
}}});
W.Components.newComponent({name:"mobile.editor.components.StudioPicker",skinParts:{header:{type:"htmlElement"},xButton:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(c,d){this.parent(c,d);
this._updateFontValue=this._updateFontValue.bind(this);
this._value="";
this._onBlur=this._onBlur.bind(this);
this._view.setStyle("z-index","10000")
},render:function(){var b=this.injects().Resources;
this._skinParts.header.set("html",b.get("EDITOR_LANGUAGE","SELECT_TEMPLATE_PROPERTY_DIALOG_TITLE"))
},_onAllSkinPartsReady:function(){var c=this.injects().Resources;
var d=this.injects().Components;
this._okBtn=d.createComponent("mobile.editor.components.EditorButton","mobile.editor.skins.EditorButtonBlueSkin",{},{label:c.get("EDITOR_LANGUAGE","SELECT_COLOR"),state:"enabled"});
this._cancelBtn=d.createComponent("mobile.editor.components.EditorButton","mobile.editor.skins.EditorButtonBlueSkin",{},{label:c.get("EDITOR_LANGUAGE","CANCEL_BUTTON"),state:"grayed"});
this._okBtn.insertInto(this._skinParts.okBtn);
this._cancelBtn.insertInto(this._skinParts.cancelBtn);
this._setFunctionality()
},_parseValue:function(){switch(this._mode){case"font":this._parseFont();
this._skinParts.fontCombo.set("disabled","disabled");
break;
case"font-family":this._font=this._value;
this._skinParts.fontCombo.set("value",this._font);
break;
case"radius":case"padding":this._parseRadiusAndPadding();
break;
case"border":this._parseBorder();
break;
case"size":this._numberSize=this._value;
this._skinParts.numberInput.set("value",this._numberSize);
break;
case"spacing":this._numberSize=this._value.substring(0,this._value.indexOf("em"));
this._skinParts.numberInput.set("value",this._numberSize);
break;
default:break
}},_parseFont:function(){this._bold=false;
this._underline=false;
this._italic=false;
this._font="";
this._fontSize1="";
this._fontSize2="";
var f=this._value.split(" ");
this._font=f[f.length-1];
for(var e=0;
e<f.length-1;
e++){switch(f[e]){case"bold":this._bold=true;
break;
case"underline":this._underline=true;
break;
case"italic":this._italic=true;
break;
default:if(f[e].indexOf("em")>-1){var d=f[e].split("/");
this._fontSize1=d[0].substring(0,d[0].indexOf("em"));
this._fontSize2=d[1].substring(0,d[1].indexOf("em"))
}}}this._skinParts.boldCheckbox.set("checked",this._bold);
this._skinParts.underlineCheckbox.set("checked",this._underline);
this._skinParts.italicCheckbox.set("checked",this._italic);
this._skinParts.fontCombo.set("value",this._font);
this._skinParts.fontSize1Input.set("value",this._fontSize1);
this._skinParts.fontSize2Input.set("value",this._fontSize2)
},_parseRadiusAndPadding:function(){var b=this._value.split(" ");
this._widthSize1=b[0].substring(0,b[0].indexOf("em"));
this._widthSize2=b[1].substring(0,b[1].indexOf("em"));
this._widthSize3=b[2].substring(0,b[2].indexOf("em"));
this._widthSize4=b[3].substring(0,b[3].indexOf("em"));
this._skinParts.width1Input.set("value",this._widthSize1);
this._skinParts.width2Input.set("value",this._widthSize2);
this._skinParts.width3Input.set("value",this._widthSize3);
this._skinParts.width4Input.set("value",this._widthSize4)
},_parseBorder:function(){var d=this._value.split(" ");
this._borderWidth=d[0].substring(0,d[0].indexOf("em"))||"";
this._borderType=d[1]||"";
this._borderColor=d[2]||"";
this._skinParts.borderWidthInput.set("value",this._borderWidth);
this._skinParts.borderTypeCombo.set("value",this._borderType);
var c=this.injects().Components.createComponent("mobile.editor.components.ColorButton","mobile.editor.skins.ColorButtonSkin",undefined,{},undefined,function(a){this._borderColorButton=a;
this._borderColorButton.setSize("100%","100%");
this._borderColorButton.setColor(this._borderColor);
this._borderColorButton.enableAlpha(false);
this._borderColorButton.setHexDisplay(true);
this._borderColorButton.addEvent("change",function(b){this._updateBorderValue(b.color)
}.bind(this))
}.bind(this));
c.insertInto(this._skinParts.borderColorButton)
},getValue:function(){return this._value
},setPosition:function(d,c){if(d){this._view.setStyle("left",d)
}if(c){this._view.setStyle("top",c)
}},setValue:function(c,d){this._value=c;
if(d){this.setOriginalValue(this._value)
}this._parseValue()
},setMode:function(b){this._mode=b;
this._skinParts.fontSelector.collapse();
this._skinParts.paddingAndRadiusSelector.collapse();
this._skinParts.numberSelecotr.collapse();
this._skinParts.borderSelector.collapse();
switch(this._mode){case"font":this._skinParts.fontSelector.uncollapse();
break;
case"font-family":this._skinParts.fontSelector.uncollapse();
this._skinParts.styleCheckboxes.collapse();
this._skinParts.fontSizes.collapse();
break;
case"radius":this._skinParts.paddingAndRadiusLabel.set("html","Radius");
this._skinParts.paddingAndRadiusSelector.uncollapse();
break;
case"padding":this._skinParts.paddingAndRadiusLabel.set("html","Padding");
this._skinParts.paddingAndRadiusSelector.uncollapse();
break;
case"border":this._skinParts.borderSelector.uncollapse();
break;
case"size":case"spacing":this._skinParts.numberSelecotr.uncollapse();
this._skinParts.borderSelector.setStyle("display","none");
if(this._mode=="spacing"){this._skinParts.numberPropertyLabel.set("html","Spacing");
this._skinParts.spacingEm.set("html","em")
}else{this._skinParts.numberPropertyLabel.set("html","Size")
}break
}},getOriginalValue:function(){return new this._originalValue()
},setOriginalValue:function(b){this._originalValue=b
},open:function(){this.uncollapse()
},close:function(b){this.collapse();
$(document.body).removeEvent("click",this._onBlur);
this.fireEvent("close",{cause:b,value:this._value})
},_onBlur:function(){this.close("blur")
},_measureGUI:function(){this._slPointerHalfSize=this._skinParts.HSPointer.getSize().x/2;
this._slSize=this._skinParts.SLBox.getSize();
this._heuSliderHeight=this._skinParts.hueSlider.getSize().y;
this._heuSliderBarHeight=this._skinParts.hueBar.getSize().y
},_setFunctionality:function(){var c,d;
this._headerDrag=new Drag.Move(this._skinParts.view,{snap:0,handle:this._skinParts.dragArea});
this._skinParts.okBtn.addEvent("click",function(){this.close("ok")
}.bind(this));
this._skinParts.cancelBtn.addEvent("click",function(){this.close("cancel")
}.bind(this));
this._skinParts.xButton.addEvent("click",function(){this.close("cancel")
}.bind(this));
this._skinParts.boldCheckbox.addEvent("click",function(){this._updateFontValue()
}.bind(this));
this._skinParts.underlineCheckbox.addEvent("click",function(){this._updateFontValue()
}.bind(this));
this._skinParts.italicCheckbox.addEvent("click",function(){this._updateFontValue()
}.bind(this));
this._skinParts.fontCombo.addEvent("change",function(){this._updateFontValue()
}.bind(this));
this._skinParts.fontSize1Input.addEvent("change",function(){this._updateFontValue()
}.bind(this));
this._skinParts.fontSize2Input.addEvent("change",function(){this._updateFontValue()
}.bind(this));
this._skinParts.width1Input.addEvent("change",function(){this._updatePaddingRadiusValue()
}.bind(this));
this._skinParts.width2Input.addEvent("change",function(){this._updatePaddingRadiusValue()
}.bind(this));
this._skinParts.width3Input.addEvent("change",function(){this._updatePaddingRadiusValue()
}.bind(this));
this._skinParts.width4Input.addEvent("change",function(){this._updatePaddingRadiusValue()
}.bind(this));
this._skinParts.borderTypeCombo.addEvent("change",function(){this._updateBorderValue()
}.bind(this));
this._skinParts.borderWidthInput.addEvent("change",function(){this._updateBorderValue()
}.bind(this));
this._skinParts.numberInput.addEvent("change",function(){this._updatesSizeAndSpacingValue()
}.bind(this))
},_updateBorderValue:function(){this._borderColor="[borderColor]";
this._borderType=this._skinParts.borderTypeCombo.value;
this._borderWidth=this._skinParts.borderWidthInput.value;
this._value=this._borderWidth+"em "+this._borderType+" "+this._borderColor;
this.fireEvent("change",{value:this._value})
},_updateFontValue:function(){this._value="";
if(this._mode=="font"){if(this._skinParts.boldCheckbox.checked){this._bold=true;
this._value+="bold "
}if(this._skinParts.italicCheckbox.checked){this._italic=true;
this._value+="italic "
}if(this._skinParts.underlineCheckbox.checked){this._underline=true;
this._value+="underline "
}this._fontSize1=this._skinParts.fontSize1Input.value;
this._fontSize2=this._skinParts.fontSize2Input.value;
this._value+=this._fontSize1+"em/"+this._fontSize2+"em ";
this._font="[font]"
}else{this._font=this._skinParts.fontCombo.value
}this._value+=this._font;
this.fireEvent("change",{value:this._value})
},_updatePaddingRadiusValue:function(){this._widthSize1=this._skinParts.width1Input.value;
this._widthSize2=this._skinParts.width2Input.value;
this._widthSize3=this._skinParts.width3Input.value;
this._widthSize4=this._skinParts.width4Input.value;
this._value=this._widthSize1+"em "+this._widthSize2+"em "+this._widthSize3+"em "+this._widthSize4+"em";
this.fireEvent("change",{value:this._value})
},_updatesSizeAndSpacingValue:function(){this._numberSize=this._skinParts.numberInput.value;
this._value=this._numberSize;
if(this._mode=="spacing"){this._value+="em"
}this.fireEvent("change",{value:this._value})
}}});
W.Components.newComponent({name:"mobile.editor.components.TemplateGallery",skinParts:{galleryContent:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(h,f,e){this.parent(h,f,e);
this._numToShow=(e&&e.numToShow)||3;
this._thumbnailWidth=(e&&e.thumbnailWidth)||165;
this._pos=(e&&e.pos)||500;
this._args=e||{};
this._animating=undefined;
this._currentIndex=0;
this._animationDuration="400ms";
this._templateDivs=[];
var g=this;
this._templateListener=function(a){g._buttonClick(this)
}
},render:function(){this._allTemplates=this._data.getData().templates;
this._skinParts.galleryContent.empty();
this._templateDivs=[];
this._renderTemplates(0,true);
this._animateDivs(this._pos*-1)
},_onAllSkinPartsReady:function(b){b.prevButton.addEvent("click",this._prevTemplates.bind(this));
b.nextButton.addEvent("click",this._nextTemplates.bind(this))
},_renderTemplates:function(n,t){var i=Math.min(this._numToShow,this._allTemplates.length);
for(var u=n;
u<i+n;
u++){var o=u;
if(o>=this._allTemplates.length){o=o-this._allTemplates.length
}var r;
if(t){r=this._pos+(this._thumbnailWidth*(u-n))
}else{r=(this._pos*-1)+(this._thumbnailWidth*(u-n))
}var s=new Element("div",{"class":"siteTemplate",id:this._allTemplates[o].id,styles:{left:(r)+"px"}});
if(t){this._templateDivs.push(s)
}else{this._templateDivs.unshift(s)
}var m=new Element("span",{"class":"templateWrap",templateId:this._allTemplates[o].templateId}).insertInto(s);
var q=this._args;
if(q.thumbnailWidth&&q.thumbnailHeight){this._templateDirectory="templates/"+q.thumbnailWidth+"x"+q.thumbnailHeight+"/"
}else{this._templateDirectory="templates/"
}var v=new Element("a",{html:this._allTemplates[o].name,styles:{background:"url("+W.Theme.getProperty("THEME_DIRECTORY")+this._templateDirectory+this._allTemplates[o].previewSource+") no-repeat center"}}).insertInto(m);
var p=this.injects().Components;
if(!t&&this._skinParts.galleryContent.getChildren().length){s.insertInto(this._skinParts.galleryContent.getChildren()[u-n],"before")
}else{s.insertInto(this._skinParts.galleryContent)
}s.addEvent("click",this._templateListener)
}},_nextTemplates:function(b){if(this._animating){return
}this._currentIndex+=this._numToShow;
if(this._currentIndex>=this._allTemplates.length){this._currentIndex=this._currentIndex-this._allTemplates.length
}this._renderTemplates(this._currentIndex,true);
this._animating="left";
this._animateDivs(this._pos*-1)
},_prevTemplates:function(b){if(this._animating){return
}this._currentIndex-=this._numToShow;
if(this._currentIndex<0){this._currentIndex=this._allTemplates.length+this._currentIndex
}this._renderTemplates(this._currentIndex,false);
this._animating="right";
this._animateDivs(this._pos)
},_animateDivs:function(g){for(var f=0;
f<this._templateDivs.length;
f++){var h=parseInt(this._templateDivs[f].getStyle("left"),10);
var e=new Fx.Tween(this._templateDivs[f],{duration:this._animationDuration,link:"cancel",property:"left"});
e.start(h,h+g)
}setTimeout(this._clearOldTemplates.bind(this),this._pos)
},_clearOldTemplates:function(c){var d;
if(this._templateDivs.length<this._numToShow+1){this._animating=undefined;
return
}if(this._animating=="left"){for(d=0;
d<this._numToShow;
d++){this._templateDivs.shift().removeFromDOM()
}}else{for(d=0;
d<this._numToShow;
d++){this._templateDivs.pop().removeFromDOM()
}}this._animating=undefined
},_buttonClick:function(d){if(!this.activeTemplate){this.activeTemplate=undefined
}this.clearSelection();
var c=d.getChildren()[0];
c.addClass("selected");
if(this._currentTemplate!=d.get("id")){this.fireEvent("templateSelected",{data:d.get("id"),templateId:c.get("templateid")});
this._currentTemplate=d.get("id")
}},clearSelection:function(){this._skinParts.galleryContent.getElements(".siteTemplate span").removeClass("selected");
this.activeTemplate=undefined;
this._currentTemplate=undefined
},getAcceptableDataTypes:function(){return["TemplateList"]
}}});
W.Components.newComponent({name:"mobile.editor.components.TemplateSelector",traits:["mobile.editor.components.traits.EditorFlowDispatcher"],imports:["mobile.editor.components.EditorButton"],skinParts:{templateHeader:{type:"htmlElement",autoBindDictionary:"CHOOSE_TEMPLATE_DIALOG_HEADER"},nextButton:{type:"mobile.editor.components.EditorButton",command:"TemplateSelector.SelectTemplate",autoBindDictionary:"NEXT_STEP_BUTTON"},templateGal:{type:"mobile.editor.components.TemplateGallery",dataQuery:"#TemplateSelectorData"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(f,d,e){this.parent(f,d,e);
this._templateSelected=this._templateSelected.bind(this);
this._command=W.Commands.registerCommandAndListener("TemplateSelector.SelectTemplate",this,this._onTemplateSelected)
},_onAllSkinPartsReady:function(){this._command.disable();
this._skinParts.templateGal.addEvent("templateSelected",this._templateSelected)
},_onTemplateSelected:function(){LOG.reportEvent(wixEvents.EDITOR_FLOW_TEMPLATE_CHOSEN,{g1:this.selectedTemplate.templateId,label:this.selectedTemplate.templateId});
this._command.disable();
this._reportEditorFlowEvent("gotoNextPage")
},_nextButtonClick:function(b){LOG.reportEvent(wixEvents.EDITOR_FLOW_TEMPLATE_CHOSEN,{g1:this.selectedTemplate.templateId,label:this.selectedTemplate.templateId});
this._skinParts.nextButton.disable();
this._reportEditorFlowEvent("gotoNextPage")
},_getTemplates:function(){return this._data.getData().templates
},_templateSelected:function(b){this.selectedTemplate=this._getTemplates().getByField("id",b.data);
this.setTemplateLoaded(false);
this._reportEditorFlowEvent("loadTemplate",this.selectedTemplate.templateId)
},setTemplateLoaded:function(b){if(b){this._command.enable()
}else{this._command.disable()
}},getAcceptableDataTypes:function(){return["TemplateList"]
}}});
W.Components.newComponent({name:"mobile.editor.components.ThemePanel",skinParts:{title:{type:"htmlElement"},properties:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(d,e,f){this.parent(d,e);
this.skinId=f
},render:function(){this._skinParts.title.set("html",this.skinId);
this._themeMgr=this.injects().Preview.getPreviewManagers().Theme;
this.injects().Preview.getPreviewManagers().Skins.getSkin(this.skinId,function(e){var h=e.prototype._params;
for(var f=0;
f<h.length;
f++){var g=h[f];
if(g.id=="THEME_DIRECTORY"){if(this.skinId!="mobile.core.skins.HeaderSkin"){continue
}else{this._createPropItem(g,true);
continue
}}this._createPropItem(g)
}}.bind(this))
},_onAllSkinPartsReady:function(b){b.title.addEvent("click",function(){this.togglePanel()
}.bind(this))
},togglePanel:function(){this._skinParts.properties.toggleCollapsed();
this._skinParts.title.toggleClass("selected")
},_createPropItem:function(h,g){var i=new Element("div");
i.setProperty("propId",h.id);
i.setProperty("propType",h.type);
var f=new Element("label").set("html",h.name).set("title",h.defaultTheme);
f.insertInto(i);
var j=new Element("input");
j.set("value",this._themeMgr.getProperty(h.id));
if(!g){j.addEvent("keyup",this._themePropChanged.bind(this,i));
j.addEvent("focus",this._propFocus.bind(this,i));
j.addEvent("blur",this._propFocus.bind(this,i))
}else{j.addEvent("keyup",this._refreshPropChanged.bind(this,i))
}j.insertInto(f);
i.insertInto(this._skinParts.properties)
},_propFocus:function(c,d){c.toggleClass("focused")
},_propBlur:function(c,d){},_refreshPropChanged:function(g,f){if(f.key!="enter"){return
}this._themePropChanged(g,f);
var h=g.getElement("input").get("value");
this._themeMgr.setProperty("BG_DIRECTORY",h);
this._themeMgr.setProperty("CONTACT_DIRECTORY",h+"/contact");
this._themeMgr.setProperty("NETWORKS_DIRECTORY",h+"/network");
this._themeMgr.setProperty("EXTERNAL_LINKS_DIRECTORY",h+"/external");
this._themeMgr.setProperty("PAGES_DIRECTORY",h+"/pages");
var e=W.Editor._siteId;
W.ServerFacade.saveDocument(e,W.Preview.getPreviewSite(),function(){W.Utils.debugTrace("document was save successfully");
W.Preview.clearPreviewDataChange();
this._lastSaveTime=new Date().getTime();
W.Editor.loadSite(e)
},function(a){W.Utils.errorPopup(W.Resources.get("EDITOR_LANGUAGE","ERROR_SAVE_TITLE"),W.Resources.get("EDITOR_LANGUAGE","ERROR_SAVE_THEME"),a)
})
},_themePropChanged:function(g,e){if(e.key!="enter"){return
}var f=g.getProperty("propId");
var h=g.getElement("input").get("value");
this._themeMgr.setProperty(f,h)
},getAcceptableDataTypes:function(){return[""]
}}});
W.Components.newComponent({name:"mobile.editor.components.UploadButton",skinParts:{flashContainer:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["up","over","down","disable"],initialize:function(f,e,d){this.parent(f,e,d);
this._flashLocation=W.Config.getServiceTopologyProperty("scriptsRoot")+"/flash/MediaUploader.swf"
},render:function(){var e={};
var f={};
f.quality="high";
f.bgcolor="#FAFAFA";
f.allowscriptaccess="always";
f.allowfullscreen="true";
f.wMode="window";
f.scale="noScale";
f.flashVars="serverRoot="+this.injects().Config.getServiceTopologyProperty("mediaServerRoot");
var d={};
d.id="UploadBTN";
d.name="UploadBTN";
d.align="middle";
this._flashObjID=W.Utils.getUniqueId("UploadBTNFlashCont");
this._skinParts.flashContainer.setProperty("id",this._flashObjID);
this._flashObj=swfobject.embedSWF(this._flashLocation,this._flashObjID,141,30,"10.0.0","playerProductInstall.swf",e,f,d)
},setUploadFileType:function(b){this._message="setFileType";
this._content=b;
setTimeout(this._doCallFlash.bind(this),1)
},_doCallFlash:function(){var b=this._getFlashObj("UploadBTN");
if(b&&b.sendToFlash){b.sendToFlash(this._message,this._content)
}else{setTimeout(this._doCallFlash.bind(this),1)
}},_getFlashObj:function(c){var d=navigator.appName.indexOf("Microsoft")!=-1;
return(d)?window[c]:document[c]
}}});
W.Components.newComponent({name:"mobile.editor.components.UploadProgressItem",imports:["mobile.core.components.base.BaseComponent"],skinParts:{progressBarInner:{type:"htmlElement"},progressBar:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["up","over","down","disable"],initialize:function(f,e,d){this.parent(f,e,d)
},updateData:function(b){this._skinParts.title.empty();
this._skinParts.title.appendText(b.name);
this._skinParts.progressBarInner.setStyle("width",Math.round(200*b.loaded/b.size))
}}});
W.Components.newComponent({name:"com.wix.mobile.editor.components.UploadProgressViewer",imports:["mobile.core.components.base.BaseComponent"],skinParts:{container:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["wait","progress","error","complete"],initialize:function(f,e,d){this.parent(f,e,d);
this.items=[]
},_onAllSkinPartsReady:function(b){this.setState("wait");
this.injects().UserMedia.addEvent("UploadProgressUpdate",this._onUploadProgress.bind(this));
this.injects().UserMedia.addEvent("UploadError",this._onUploadError.bind(this));
this.injects().UserMedia.addEvent("UploadComplete",this._onUploadComplete.bind(this))
},_onUploadError:function(b){LOG.reportError(wixErrors.UPLOAD_FAIL,this.className,"createStyleSheet","event"+b+"")
},_onUploadProgress:function(f){this.setState("progress");
var e=f.message;
W.Utils.debugTrace(this.items.length+" "+e.length);
for(var d=0;
d<e.length;
d++){if(d<this.items.length){this.items[d].getLogic().updateData(e[d])
}else{this.items[d]=W.Components.createComponent("mobile.editor.components.UploadProgressItem","mobile.editor.skins.UploadItemSkin","#moshe");
this.items[d].insertInto(this._skinParts.container)
}}},_onUploadComplete:function(b){this.setState("complete")
},buttonClick:function(){this.fireEvent("click")
}}});
W.Components.newComponent({name:"mobile.editor.components.dialogs.AddComponentDialog",skinParts:{content:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onItemClick","_onItemDoubleClick"],initialize:function(f,d,e){this.parent(f,d);
this._dialogWindow=e.dialogWindow;
this._isComponentListReady=false;
this._dialogWindow.addEvent("onDialogClosing",this._onDialogClosing.bind(this));
this._componentTypes=[{name:this.injects().Resources.get("EDITOR_LANGUAGE","mobile.core.components.RichText"),icon:"text.png",component:{comp:"mobile.core.components.RichText",skin:"mobile.core.skins.RichTextSkin",data:{type:"RichText",text:"<p>Enter your text here</p>"}}},{name:this.injects().Resources.get("EDITOR_LANGUAGE","mobile.core.components.ServiceList"),icon:"service.png",component:{comp:"mobile.core.components.ServiceList",skin:"mobile.core.skins.ServiceListSkin",data:{type:"ServiceList",serviceType:"general"},dataRefs:{items:{isList:true,items:[{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_TITLE_1"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_DESCRIPTION_1")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_IMAGE_ID_1"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_TITLE_2"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_DESCRIPTION_2")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_IMAGE_ID_2"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_TITLE_3"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_DESCRIPTION_3")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_IMAGE_ID_3"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}}]}}}},{name:this.injects().Resources.get("EDITOR_LANGUAGE","mobile.core.components.ContactList"),icon:"contact.png",component:{comp:"mobile.core.components.ContactList",skin:"mobile.core.skins.ContactListSkin",data:{type:"LinkList",subType:"CONTACT"},dataRefs:{items:{isList:true,items:[{data:{type:"Link",linkType:"CALL",text:"Call me",target:"212.000.0000"}},{data:{type:"Link",linkType:"SMS",text:"Send message",target:"212.000.0000"}},{data:{type:"Link",linkType:"MAP",text:"Find me",target:"10 West 18th Street, NY, NY"}}]}}}},{name:this.injects().Resources.get("EDITOR_LANGUAGE","mobile.core.components.NetworkList"),icon:"links.png",dataItemsRefField:"items",component:{comp:"mobile.core.components.NetworkList",skin:"mobile.core.skins.NetworkListSkin",data:{type:"LinkList",subType:"NETWORKS",items:[]},dataRefs:{items:{isList:true,items:[{data:{type:"Link",linkType:"FACEBOOK",text:"Facebook",target:"http://www.facebook.com/wix"}},{data:{type:"Link",linkType:"TWITTER",text:"Twitter",target:"http://www.twitter.com/wix"}},{data:{type:"Link",linkType:"MYSPACE",text:"Myspace",target:"http://www.myspace.com/wix"}}]}}}},{name:this.injects().Resources.get("EDITOR_LANGUAGE","mobile.core.components.PhotoGalleryGrid"),icon:"gallery.png",component:{comp:"mobile.core.components.PhotoGalleryGrid",skin:"mobile.core.skins.PhotoGalleryGridDefaultSkin",data:{type:"ImageList"},dataRefs:{items:{isList:true,items:[{data:{type:"Image",title:"robe slippers",uri:"3212653e959a6d968b59c6636ffbdfcf.wix_mp",description:"Some description here",width:2799,height:4296}},{data:{type:"Image",title:"spaniel",uri:"07b7c05c4c3cae426c348878c420e02f.wix_mp",description:"Some description here",width:1000,height:729}},{data:{type:"Image",title:"strawberies",uri:"ae3036720e0d57993aa11883e90a045b.wix_mp",description:"Some description here",width:1024,height:683}},{data:{type:"Image",title:"strech",uri:"a84f1530ca91bb12d978e78a71805cd9.wix_mp",description:"Some description here",width:1024,height:672}},{data:{type:"Image",title:"swim",uri:"b1e2678064bd5b154fa0dd9d2550a710.wix_mp",description:"Some description here",width:1000,height:662}},{data:{type:"Image",title:"tomato soup",uri:"119fc73a54f6abfe8c137dc43cceb917.wix_mp",description:"Some description here",width:512,height:768}},{data:{type:"Image",title:"vet",uri:"78de94c7aaf5fcdbc544de4927ce99b0.wix_mp",description:"Some description here",width:695,height:1000}},{data:{type:"Image",title:"yoga teachers",uri:"ac59be6e363ac6d5f0eff484de8cab3d.wix_mp",description:"Some description here",width:1024,height:683}},{data:{type:"Image",title:"white flowers",uri:"46b5a7f4a57a1aa718e99541196ecb26.wix_mp",description:"Some description here",width:2912,height:4368}}]}}}},{name:this.injects().Resources.get("EDITOR_LANGUAGE","mobile.core.components.Photo"),icon:"photo.png",component:{comp:"mobile.core.components.Photo",skin:"mobile.core.skins.PhotoSkin",data:{type:"Image",uri:"a84f1530ca91bb12d978e78a71805cd9.wix_mp",title:"",description:"",width:1024,height:672,metaData:{isPreset:false}}}}]
},setDialogOptions:function(b){this._callBack=b;
this._clearSelection();
this._view.fireEvent("dialogOptionsSet",this)
},_prepareForRender:function(){if(this._isComponentListReady){return true
}this._dialogWindow.setDialogOptions({width:500,title:this.injects().Resources.get("EDITOR_LANGUAGE","ADD_COMPONENT_DIALOG_HEADER"),buttonSet:W.EditorDialogs.DialogButtonSet.OK_CANCEL},function(){this._refreshLinkList(function(){this._renderIfReady()
}.bind(this))
}.bind(this));
return this._isComponentListReady
},_refreshLinkList:function(c){this._skinParts.content.empty();
this._dataItemMap={};
for(var d=0;
d<this._componentTypes.length;
d++){this._componentTypes[d].isReady=false;
this._createItem(this._componentTypes[d],function(a){a.isReady=true;
this._checkComponentListReady(c)
}.bind(this))
}},_checkComponentListReady:function(c){this._isComponentListReady=true;
for(var d=0;
d<this._componentTypes.length;
d++){if(!this._componentTypes[d].isReady){this._isComponentListReady=false;
break
}}if(this._isComponentListReady){if(c){c()
}}},_createItem:function(h,j){var i={type:"Image",title:h.name,uri:this.injects().Theme.getProperty("THEME_DIRECTORY")+"add_component/"+h.icon,description:"",height:"100",width:"100",borderSize:""};
var f=this.injects().Data.createDataItem(i);
var g=this.injects().Components.createComponent("mobile.editor.components.ImageButton","mobile.editor.skins.ImageButtonSkin",f,{useWebUrl:true},function(){j(h)
}.bind(this),function(a){a.addEvent("click",this._onItemClick);
a.addEvent("dblclick",this._onItemDoubleClick);
this._dataItemMap[g.get("id")]=h.component
}.bind(this));
g.setStyles({width:"100px",height:"130px","margin-bottom":"10px","float":"left"});
g.insertInto(this._skinParts.content)
},_onDialogClosing:function(b){if(b.result=="OK"){this._reportSelectedComponent()
}},_reportSelectedComponent:function(){if(this._callBack){var b=this._dataItemMap[this._selectedItem.getViewNode().get("id")];
this._callBack(b)
}},_onItemClick:function(c){var d=(this._selectedItem==c);
this._clearSelection();
if(!d){this._selectedItem=c;
c.setState("selected")
}if(this._selectedItem){this._dialogWindow.enableButton(this.injects().EditorDialogs.DialogButtons.OK)
}},_onItemDoubleClick:function(b){this._clearSelection();
this._onItemClick(b);
this._reportSelectedComponent();
this._dialogWindow.closeDialog()
},_clearSelection:function(){if(this._selectedItem){this._selectedItem.setState("up");
this._selectedItem=null
}this._dialogWindow.disableButton(this.injects().EditorDialogs.DialogButtons.OK)
}}});
W.Components.newComponent({name:"mobile.editor.components.dialogs.AddLinkDialog",skinParts:{content:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(h,e,f){this.parent(h,e,f);
this._dialogWindow=f.dialogWindow;
this._dialogOptionsSet=false;
var g=this;
this._linkListener=function(a){if(a.type=="click"){g._onItemClick(this)
}else{g._onDoubleClick(this)
}};
this._dialogWindow.addEvent("onDialogClosing",this._onDialogClosing.bind(this))
},setDialogOptions:function(c,d){this._callBack=c;
this._clearSelection();
if(this._filter!=d){this._linkList=W.LinkTypes.getLinkTypesByMeta(d);
this._filter=d;
this._refreshLinkList(function(){this._view.fireEvent("dialogOptionsSet",this)
}.bind(this))
}else{this._view.fireEvent("dialogOptionsSet",this)
}},_prepareForRender:function(){if(this._dialogOptionsSet){return true
}this._dialogWindow.setDialogOptions({title:this.injects().Resources.get("EDITOR_LANGUAGE","ADD_LINK_DIALOG_HEADER"),buttonSet:W.EditorDialogs.DialogButtonSet.OK_CANCEL},function(){this._dialogOptionsSet=true;
this._renderIfReady()
}.bind(this));
return this._dialogOptionsSet
},_refreshLinkList:function(d){if(!this._skinParts||!this._skinParts.content||!this._linkList||!this._filter){return
}this._skinParts.content.empty();
var f=this._linkList.length;
this._linkCreationList={};
var e;
for(e in this._linkList){this._linkCreationList[e]={isReady:false}
}for(e in this._linkList){this._createItem(e,function(a){this._linkCreationList[a].isReady=true;
this._checkLinkListReady(d)
}.bind(this))
}},_checkLinkListReady:function(f){var d=true;
for(var e in this._linkCreationList){if(!this._linkCreationList[e].isReady){d=false;
break
}}if(d){if(f){f()
}}},_createItem:function(g,h){var f={type:"Link",linkType:g,text:this._linkList[g].text,target:""};
var i=this.injects().Data.createDataItem(f);
var j=this.injects().Components.createComponent("mobile.core.components.MenuButton","mobile.editor.skins.dialogs.AddLinkItem",i,{listSubType:this._filter},function(){j.insertInto(this._skinParts.content);
h(g)
}.bind(this));
j.addEvent("click",this._linkListener);
j.addEvent("dblclick",this._linkListener)
},_onDialogClosing:function(b){if(b.result=="OK"){this._reportSelectedLink()
}},_reportSelectedLink:function(){if(this._callBack){var b=this.injects().LinkTypes.getNewLink(this._selectedItem._data.get("linkType"));
this._callBack(b)
}},_onItemClick:function(c){var d=(this._selectedItem==c.getLogic());
this._clearSelection();
if(!d){this._selectedItem=c.getLogic();
c.getLogic().setState("selected")
}if(this._selectedItem){this._dialogWindow.enableButton(this.injects().EditorDialogs.DialogButtons.OK)
}},_onDoubleClick:function(b){this._clearSelection();
this._onItemClick(b);
this._reportSelectedLink();
this._dialogWindow.closeDialog()
},_clearSelection:function(){if(this._selectedItem){this._selectedItem.setState("idle");
this._selectedItem=null
}this._dialogWindow.disableButton(this.injects().EditorDialogs.DialogButtons.OK)
}}});
W.Components.newComponent({name:"mobile.editor.components.dialogs.AddPageDialog",skinParts:{content:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(h,e,f){this.parent(h,e);
this._dialogWindow=f.dialogWindow;
this._dialogOptionsSet=false;
var g=this;
this._linkListener=function(a){if(a.type=="click"){g._onItemClick(this)
}else{g._onItemDoubleClick(this)
}};
this._dialogWindow.addEvent("onDialogClosing",this._onDialogClosing.bind(this));
this._pageTypes=[{name:this.injects().Resources.get("EDITOR_LANGUAGE","PAGE_TITLE_GALLERY"),icon:"add_link.png",menuButtonIcon:"gallery.png",previewPic:"gallery.jpg",componentList:[{comp:"mobile.core.components.PhotoGalleryGrid",skin:"mobile.core.skins.PhotoGalleryGridDefaultSkin",data:{type:"ImageList"},dataRefs:{items:{isList:true,items:[{data:{type:"Image",title:"robe slippers",uri:"3212653e959a6d968b59c6636ffbdfcf.wix_mp",description:"Some description here",width:2799,height:4296}},{data:{type:"Image",title:"spaniel",uri:"07b7c05c4c3cae426c348878c420e02f.wix_mp",description:"Some description here",width:1000,height:729}},{data:{type:"Image",title:"strawberies",uri:"ae3036720e0d57993aa11883e90a045b.wix_mp",description:"Some description here",width:1024,height:683}},{data:{type:"Image",title:"strech",uri:"a84f1530ca91bb12d978e78a71805cd9.wix_mp",description:"Some description here",width:1024,height:672}},{data:{type:"Image",title:"swim",uri:"b1e2678064bd5b154fa0dd9d2550a710.wix_mp",description:"Some description here",width:1000,height:662}},{data:{type:"Image",title:"tomato soup",uri:"119fc73a54f6abfe8c137dc43cceb917.wix_mp",description:"Some description here",width:512,height:768}},{data:{type:"Image",title:"vet",uri:"78de94c7aaf5fcdbc544de4927ce99b0.wix_mp",description:"Some description here",width:695,height:1000}},{data:{type:"Image",title:"yoga teachers",uri:"ac59be6e363ac6d5f0eff484de8cab3d.wix_mp",description:"Some description here",width:1024,height:683}},{data:{type:"Image",title:"white flowers",uri:"46b5a7f4a57a1aa718e99541196ecb26.wix_mp",description:"Some description here",width:2912,height:4368}}]}}}]},{name:this.injects().Resources.get("EDITOR_LANGUAGE","PAGE_TITLE_ABOUT"),icon:"add_link.png",previewPic:"about.jpg",menuButtonIcon:"about.png",componentList:[{comp:"mobile.core.components.RichText",skin:"mobile.core.skins.RichTextSkin",data:{type:"RichText",text:"<p>Enter your text here</p>"}}]},{name:this.injects().Resources.get("EDITOR_LANGUAGE","PAGE_TITLE_SERVICES"),icon:"add_link.png",menuButtonIcon:"services.png",previewPic:"services.jpg",componentList:[{comp:"mobile.core.components.ServiceList",skin:"mobile.core.skins.ServiceListSkin",data:{type:"ServiceList",serviceType:"general"},dataRefs:{items:{isList:true,items:[{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_TITLE_1"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_DESCRIPTION_1")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_IMAGE_ID_1"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_TITLE_2"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_DESCRIPTION_2")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_IMAGE_ID_2"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_TITLE_3"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_DESCRIPTION_3")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_IMAGE_ID_3"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}}]}}}]},{name:this.injects().Resources.get("EDITOR_LANGUAGE","PAGE_TITLE_EVENTS"),icon:"add_link.png",menuButtonIcon:"event.png",previewPic:"events.jpg",componentList:[{comp:"mobile.core.components.ServiceList",skin:"mobile.core.skins.ServiceListSkin",data:{type:"ServiceList",serviceType:"events"},dataRefs:{items:{isList:true,items:[{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_TITLE_1"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_DESCRIPTION_1")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_IMAGE_ID_1"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_TITLE_2"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_DESCRIPTION_2")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_IMAGE_ID_2"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_TITLE_3"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_DESCRIPTION_3")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_IMAGE_ID_3"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}}]}}}]},{name:this.injects().Resources.get("EDITOR_LANGUAGE","PAGE_TITLE_COLLECTION"),icon:"add_link.png",menuButtonIcon:"collection.png",previewPic:"collection.jpg",componentList:[{comp:"mobile.core.components.ServiceList",skin:"mobile.core.skins.ServiceListSkin",data:{type:"ServiceList",serviceType:"collection"},dataRefs:{items:{isList:true,items:[{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_TITLE_1"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_DESCRIPTION_1")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_IMAGE_ID_1"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_TITLE_2"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_DESCRIPTION_2")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_IMAGE_ID_2"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_TITLE_3"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_DESCRIPTION_3")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_IMAGE_ID_3"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}}]}}}]},{name:this.injects().Resources.get("EDITOR_LANGUAGE","PAGE_TITLE_RESTAURANT"),icon:"add_link.png",menuButtonIcon:"restaurant.png",previewPic:"restaurant.jpg",componentList:[{comp:"mobile.core.components.ServiceList",skin:"mobile.core.skins.ServiceListSkin",data:{type:"ServiceList",serviceType:"restaurant"},dataRefs:{items:{isList:true,items:[{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_TITLE_1"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_DESCRIPTION_1")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_IMAGE_ID_1"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_TITLE_2"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_DESCRIPTION_2")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_IMAGE_ID_2"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}},{data:{type:"Service",title:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_TITLE_3"),description:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_DESCRIPTION_3")},dataRefs:{image:{data:{type:"Image",uri:this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_IMAGE_ID_3"),title:"",description:"",width:"93",height:"128",metaData:{isPreset:false}}}}}]}}}]},{name:this.injects().Resources.get("EDITOR_LANGUAGE","PAGE_TITLE_CONTACT"),icon:"add_link.png",previewPic:"contact.jpg",menuButtonIcon:"contact.png",componentList:[{comp:"mobile.core.components.ContactList",skin:"mobile.core.skins.ContactListSkin",data:{type:"LinkList",subType:"CONTACT"},dataRefs:{items:{isList:true,items:[{data:{type:"Link",linkType:"CALL",text:"Call me",target:"212.000.0000"}},{data:{type:"Link",linkType:"SMS",text:"Send message",target:"212.000.0000"}},{data:{type:"Link",linkType:"MAP",text:"Find me",target:"10 West 18th Street, NY, NY"}}]}}}]},{name:this.injects().Resources.get("EDITOR_LANGUAGE","PAGE_TITLE_NETWORK"),icon:"add_link.png",previewPic:"network.jpg",menuButtonIcon:"networks.png",dataItemsRefField:"items",componentList:[{comp:"mobile.core.components.NetworkList",skin:"mobile.core.skins.NetworkListSkin",data:{type:"LinkList",subType:"NETWORKS",items:[]},dataRefs:{items:{isList:true,items:[{data:{type:"Link",linkType:"FACEBOOK",text:"Facebook",target:"http://www.facebook.com/wix"}},{data:{type:"Link",linkType:"TWITTER",text:"Twitter",target:"http://www.twitter.com/wix"}},{data:{type:"Link",linkType:"MYSPACE",text:"Myspace",target:"http://www.myspace.com/wix"}}]}}}]}]
},setDialogOptions:function(b){this._callBack=b;
this._clearSelection();
this._view.fireEvent("dialogOptionsSet",this)
},_refreshLinkList:function(c){if(!this._skinParts||!this._skinParts.content){return
}this._skinParts.content.empty();
for(var d=0;
d<this._pageTypes.length;
d++){this._pageTypes[d].isReady=false;
this._createItem(this._pageTypes[d],function(a){a.isReady=true;
this._checkPageListReady(c)
}.bind(this))
}},_checkPageListReady:function(f){var e=true;
for(var d=0;
d<this._pageTypes.length;
d++){if(!this._pageTypes[d].isReady){e=false;
break
}}if(e){if(f){f()
}}},_createItem:function(f,h){var g={type:"Link",linkType:"FREE_LINK",text:f.name,icon:f.icon,target:"",additionalObj:f};
var i=this.injects().Data.createDataItem(g);
var j=this.injects().Components.createComponent("mobile.core.components.MenuButton","mobile.editor.skins.dialogs.AddLinkItem",i,{listSubType:"PAGES"},h(f));
j.setStyles({width:"100%","margin-bottom":"8px"});
j.addEvent("click",this._linkListener);
j.addEvent("dblclick",this._linkListener);
j.insertInto(this._skinParts.content)
},_onDialogClosing:function(b){if(b.result=="OK"){this._reportSelectedLink()
}},_reportSelectedLink:function(){if(this._callBack){var b=this._selectedItem._data.get("additionalObj");
this._callBack(b)
}},_onItemClick:function(c){var d=(this._selectedItem==c.getLogic());
this._clearSelection();
if(!d){this._selectedItem=c.getLogic();
c.getLogic().setState("selected")
}if(this._selectedItem){this._dialogWindow.enableButton(this.injects().EditorDialogs.DialogButtons.OK);
this._skinParts.preview.set("src",this._getPreviewRoot()+this._selectedItem._data.get("additionalObj").previewPic)
}},_onItemDoubleClick:function(b){this._clearSelection();
this._onItemClick(b);
this._reportSelectedLink();
this._dialogWindow.closeDialog()
},_clearSelection:function(){if(this._selectedItem){this._selectedItem.setState("idle");
this._selectedItem=null
}this._dialogWindow.disableButton(this.injects().EditorDialogs.DialogButtons.OK);
this._skinParts.preview.set("src",this._getPreviewRoot()+"unselected.jpg")
},_getPreviewRoot:function(){return this.injects().Theme.getProperty("THEME_DIRECTORY")+"addPage/"
},_prepareForRender:function(){if(this._dialogOptionsSet){return true
}this._dialogWindow.setDialogOptions({width:500,title:this.injects().Resources.get("EDITOR_LANGUAGE","ADD_PAGE_DIALOG_HEADER"),buttonSet:W.EditorDialogs.DialogButtonSet.OK_CANCEL},function(){this._refreshLinkList(function(){this._dialogOptionsSet=true;
this._renderIfReady()
}.bind(this))
}.bind(this));
return this._dialogOptionsSet
}}});
Constants.DialogWindow={CLICK_OUTSIDE:"ClickOutside",POSITIONS:{DYNAMIC:"dynamic",CENTER:"center",TOP:"top",SIDE:"side",ORIGIN:{x:92,y:65},OFFSET:{x:20,y:20}},TYPES:{MODAL:"modal",SEMI_MODAL:"semiModal",NON_MODAL:"nonModal"},DEFAULT:{WIDTH:480,MIN_HEIGHT:150,MAX_HEIGHT:650,TOP:10,HEIGHT_OFFSET:70,BOTTOM_OFFSET:20}};
W.Components.newComponent({name:"mobile.editor.components.dialogs.DialogWindow",skinParts:{blockLayer:{type:"htmlElement"},innerDialog:{type:"htmlElement"},dialogBox:{type:"htmlElement"},dialogToolbar:{type:"htmlElement"},dialogTitle:{type:"htmlElement"},helplet:{type:"htmlElement"},dialogDescription:{type:"htmlElement"},buttonContainer:{type:"htmlElement"},tabs:{type:"htmlElement"},okContainer:{type:"htmlElement"},cancelContainer:{type:"htmlElement"},xButton:{type:"htmlElement"},dragArea:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:[Constants.DialogWindow.TYPES.MODAL,Constants.DialogWindow.TYPES.SEMI_MODAL,Constants.DialogWindow.TYPES.NON_MODAL],_renderTriggers:[Constants.DisplayEvents.ADDED_TO_DOM,Constants.DisplayEvents.DISPLAYED,Constants.DisplayEvents.DISPLAY_CHANGED],Binds:["closeDialog","_innerDialogReady","_onButtonReady","_closeOnOutsideClick","_blockMouseEventsOnDialog","_unBlockMouseEventsOnDialog","_setDialogHeightRelativeToWindowHeight","_tabChanged"],Static:{DRAG_OFFSET:40},initialize:function(f,d,e){this.parent(f,d,e);
this._currentTabNode=null;
this._clearButtons();
this._heightCalcTimerCounter=0;
this._heightCalcTimerCounterMax=4
},setDialog:function(h,g,e,f){e=e||{};
e.dialogWindow=this;
e.callback=e.callback||function(){};
this._componentView=W.Components.createComponent(h,g,f,e,undefined,this._innerDialogReady);
this.addEvent("onDialogClosing",e.callback)
},setMaxMinHeight:function(d,c){this._maxHeight=d||this._maxHeight||Constants.DialogWindow.DEFAULT.MAX_HEIGHT;
this._minHeight=c||this._minHeight||Constants.DialogWindow.DEFAULT.MIN_HEIGHT;
this._skinParts.innerDialog.setStyle("max-height",this._maxHeight+"px");
this._skinParts.innerDialog.setStyle("min-height",this._minHeight+"px")
},setWidth:function(b){this._width=b||Constants.DialogWindow.DEFAULT.WIDTH;
this._skinParts.dialogBox.setStyle("width",this._width+"px")
},setTitle:function(b){this._skinParts.dialogTitle.set("html",b||"")
},_setOptions:function(b){this._left=b.left||this._left||0;
this._top=b.top||this._top||0;
this._height=b.height||this._height||"auto";
this._minHeight=b.minHeight||this._minHeight||0;
this._maxHeight=b.maxHeight||this._maxHeight||0;
this._width=b.width||this._width||"auto";
this._allowDrag=b.allowDrag||this._allowDrag||false;
this._position=b.position||this._position||Constants.DialogWindow.POSITIONS.CENTER;
this._level=b.level||this._level||0
},setPositionByType:function(f,h,e,g){switch(f){case Constants.DialogWindow.POSITIONS.TOP:this._setPositionToTop();
break;
case Constants.DialogWindow.POSITIONS.SIDE:this._setPositionToScreenSides(e,g);
break;
case Constants.DialogWindow.POSITIONS.DYNAMIC:this._setPosition(h,e);
break;
case Constants.DialogWindow.POSITIONS.CENTER:default:this._setPositionToCenter()
}},_setPosition:function(c,d){this._top=isNaN(c)?0:c;
this._left=isNaN(d)?0:d;
this._skinParts.dialogBox.setStyles({top:this._top+"px",left:this._left+"px"})
},_setPositionToScreenSides:function(n,r){n=n||0;
r=r||0;
var j=Constants.DialogWindow.POSITIONS.ORIGIN;
var m=Constants.DialogWindow.POSITIONS.OFFSET;
var q=this.injects().Utils.getWindowSize().width;
var l=this._skinParts.dialogBox.getSize().x;
var o=(n>q/2);
var k=j.y;
var p=j.x+(r*m.x);
if(o){p=q-l-p
}this._setPosition(k,p)
},_setPositionToCenter:function(n){var i=this.injects().Utils.getWindowSize();
var l=(this._height==="auto")?this._skinParts.innerDialog.scrollHeight:this._height;
var k=this._minHeight||0;
var m=this._skinParts.dialogBox.getSize();
m.y=Math.max(l,k,m.y);
var h=Constants.DialogWindow.DEFAULT.TOP;
if(!isNaN(n)){h=n
}else{if(i.height>m.y){h=(i.height/2)-(m.y/2)
}}var j=(i.width/2)-(m.x/2);
this._setPosition(h,j)
},_setPositionToTop:function(){this._setPositionToCenter(0)
},setDescription:function(c){this._skinParts.dialogDescription.setCollapsed(!c);
if(this._skinParts.helplet){var d=c?-10:0;
this._skinParts.helplet.setStyle("margin-top",d);
this._skinParts.helplet.setStyle("display","inline-block")
}this._skinParts.dialogDescription.set("html",c)
},setHelpLink:function(b){if(!this._skinParts.helplet||this._helpletLinkWasAlreadySet){return
}this._helpletLinkWasAlreadySet=true;
this._helplet=b;
if(b){if(this.injects().Resources.exist("EDITOR_LANGUAGE",b)){this._label=this.injects().Resources.get("EDITOR_LANGUAGE",b)
}else{if(b.indexOf("ADVANCED_STYLING")===0){this._label=this.injects().Resources.get("EDITOR_LANGUAGE","ADVANCED_STYLING_LEARN_MORE")
}else{this._label=this.injects().Resources.get("EDITOR_LANGUAGE","HELPLET_LEARN_MORE")
}}}this._skinParts.helplet.set("html",this._label);
this._skinParts.helplet.setCollapsed(!b);
this._skinParts.helplet.addEvent("click",function(){W.Commands.executeCommand("WEditorCommands.ShowHelpDialog",this._helplet)
}.bind(this))
},setDialogOptions:function(d,c){d=d||{};
if(d.eventData){LOG.reportError("Someone called DialogWindow with deprecated param eventData, please use top and left instead","mobile.editor.components.dialogs.DialogWindow","setDialogOptions")
}this._optionsReadyCallback=c;
this._setOptions(d);
this._modalMode=(d.nonModal&&Constants.DialogWindow.TYPES.NON_MODAL)||(d.semiModal&&Constants.DialogWindow.TYPES.SEMI_MODAL)||Constants.DialogWindow.TYPES.MODAL;
this.setTitle(d.title);
this.setDescription(d.description);
this.setHelpLink(d.helplet,true);
this.setWidth(this._width);
this.setMaxMinHeight(this._maxHeight,this._minHeight);
this._setDialogHeightRelativeToWindowHeight();
this._enableDrag(d.allowDrag);
if(!Browser.safari){this._setupButtons(d.buttonSet||W.EditorDialogs.DialogButtonSet.OK)
}else{setTimeout(function(){this._setupButtons(d.buttonSet||W.EditorDialogs.DialogButtonSet.OK)
}.bind(this),120)
}this.setState(this._modalMode);
this._skinParts.blockLayer.addEvent(Constants.CoreEvents.CLICK,this._closeOnOutsideClick);
this._skinParts.dialogToolbar.setCollapsed(!d.showToolbar);
this._skinParts.tabs.setCollapsed(!d.tabs);
this._checkDialogOptionsSet()
},_closeOnOutsideClick:function(b){if(this._modalMode==Constants.DialogWindow.TYPES.SEMI_MODAL){this.fireEvent("onDialogClosing",{result:Constants.DialogWindow.CLICK_OUTSIDE});
this.closeDialog();
this.injects().EditorDialogs.passClickToNextDialog(b.page.x,b.page.y)
}},_measureDialogDetailsHeight:function(){var b=this._dialogDetailsHeight||this._skinParts.dialogDescription.getSize().y+this._skinParts.dialogTitle.getSize().y+this._skinParts.helplet.getSize().y+this._skinParts.dialogToolbar.getSize().y+this._skinParts.buttonContainer.getSize().y;
return b
},_measureInnerDialogHeight:function(){return(this._height==="auto")?this._skinParts.innerDialog.scrollHeight:this._height
},_setDialogHeightRelativeToWindowHeight:function(b){this._currentInnerDialogHeight=this._measureInnerDialogHeight();
this._dialogDetailsHeight=this._measureDialogDetailsHeight();
this._repositionIfBottomOutOfBounds();
if(this._measureAgainLater()){return
}this._calculatedHeight=window.getSize().y-this._dialogDetailsHeight-Constants.DialogWindow.DEFAULT.HEIGHT_OFFSET;
if(this._calculatedHeight<this._currentInnerDialogHeight){this._skinParts.innerDialog.setStyle("height",this._calculatedHeight)
}else{this._skinParts.innerDialog.setStyle("height",this._height)
}this._fitDialogToWindowBoundaries()
},_repositionIfBottomOutOfBounds:function(){if(this._position!==Constants.DialogWindow.POSITIONS.DYNAMIC){return
}var d=this._dialogDetailsHeight+this._currentInnerDialogHeight;
var c=window.getSize().y;
if(this._top+d>c){this._setPosition(c-d-Constants.DialogWindow.DEFAULT.BOTTOM_OFFSET,this._left)
}},_measureAgainLater:function(){if(this._heightCalcTimerCounter<this._heightCalcTimerCounterMax){this._heightCalcTimerCounter++;
this._heightCalcTimer=setTimeout(this._setDialogHeightRelativeToWindowHeight,300);
return true
}this._heightCalcTimerCounter=0
},_fitDialogToWindowBoundaries:function(){if(this._position===Constants.DialogWindow.POSITIONS.CENTER||this._position===Constants.DialogWindow.POSITIONS.TOP){if(!this._allowDrag){this.setPositionByType(this._position)
}}},_enableDrag:function(d){if(!d){return
}this._skinParts.dragArea.uncollapse();
var f=window.getSize();
var e={x:[10,f.x-this.DRAG_OFFSET],y:[this.DRAG_OFFSET,f.y-this.DRAG_OFFSET]};
this._drag=new Drag.Move(this._skinParts.dialogBox,{snap:0,handle:this._skinParts.dragArea,onStart:this._blockMouseEventsOnDialog,onComplete:this._unBlockMouseEventsOnDialog,limit:e})
},_blockMouseEventsOnDialog:function(){this._skinParts.dragArea.setStyles({height:"100%",width:"100%"})
},_unBlockMouseEventsOnDialog:function(){this._skinParts.dragArea.setStyles({height:null,width:null})
},_checkDialogOptionsSet:function(){var d=true;
if(this._buttonsMap){d=false;
var e=0;
for(var f in this._buttonsMap){if(this._buttonsMap[f].buttonWixified){e++
}}if(e==this._buttons.length){d=true
}}if(d){if(this._optionsReadyCallback){this._optionsReadyCallback()
}}},_addButton:function(i,j,h,g){var k="mobile.editor.skins.EditorButtonBlueSkin";
if(h=="red"){k="mobile.editor.skins.EditorButtonRedSkin"
}var l=this.injects().Components.createComponent("mobile.editor.components.EditorButton",k,null,{label:this.injects().Resources.get("EDITOR_LANGUAGE",i+"_BUTTON"),state:(j)?"enabled":"disabled",initialState:h},null,this._onButtonReady);
l.addEvent("buttonClick",this._onButtonClicked.bind(this,i));
this._buttons.push(l);
l.insertInto(g);
this._buttonsMap[i]=l;
this._buttonPreReadyIsEnable[i]=j
},_onButtonReady:function(b){b.getViewNode().buttonWixified=true;
this._checkDialogOptionsSet()
},_clearButtons:function(){if(this._buttons){this._buttons.forEach(function(b){b.dispose()
})
}this._buttons=[];
this._buttonsMap={};
this._buttonPreReadyIsEnable={}
},_setupButtons:function(c){this._clearButtons();
this._skinParts.okContainer.empty();
this._skinParts.cancelContainer.empty();
var d=0;
if(!c.length){this._skinParts.buttonContainer.collapse()
}else{c.forEach(function(a){if(a==W.EditorDialogs.DialogButtons.OK||a==W.EditorDialogs.DialogButtons.YES||a==W.EditorDialogs.DialogButtons.DONE){this._addButton(a,true,null,this._skinParts.okContainer)
}if(a==W.EditorDialogs.DialogButtons.DELETE){this._addButton(a,true,"red",this._skinParts.okContainer)
}else{if(a==W.EditorDialogs.DialogButtons.CANCEL||a==W.EditorDialogs.DialogButtons.NO){this._addButton(a,true,"grayed",this._skinParts.cancelContainer)
}}}.bind(this))
}},triggerConfirmButton:function(b){if(!!this._buttonsMap[W.EditorDialogs.DialogButtons.OK]){this._onButtonClicked(W.EditorDialogs.DialogButtons.OK);
return true
}else{if(!!this._buttonsMap[W.EditorDialogs.DialogButtons.YES]){this._onButtonClicked(W.EditorDialogs.DialogButtons.YES);
return true
}else{if(!!this._buttonsMap[W.EditorDialogs.DialogButtons.DELETE]){this._onButtonClicked(W.EditorDialogs.DialogButtons.DELETE);
return true
}}}return false
},triggerCancelButton:function(){if(!!this._buttonsMap[W.EditorDialogs.DialogButtons.CANCEL]){this._onButtonClicked(W.EditorDialogs.DialogButtons.CANCEL);
return true
}else{if(!!this._buttonsMap[W.EditorDialogs.DialogButtons.NO]!==null){this._onButtonClicked(W.EditorDialogs.DialogButtons.NO);
return true
}}return false
},_onButtonClicked:function(c){var d=this._buttonsMap[c];
if(!d||(d&&d.getLogic&&d.getLogic().isEnabled())){this.fireEvent("onDialogClosing",{result:c});
this.closeDialog()
}},endDialog:function(b){this._onButtonClicked(b)
},_innerDialogReady:function(){this._componentView.insertInto(this._skinParts.innerDialog);
this._view.fireEvent("innerDialogReady")
},getInnerDialog:function(){return this._componentView
},openDialog:function(d){d=d||{};
var c=W.Editor.getDialogLayer();
if(c&&this._view){this._view.insertInto(c)
}this._setOptions(d);
this.setPositionByType(this._position,this._top,this._left,this._level);
window.addEvent(Constants.CoreEvents.RESIZE,this._setDialogHeightRelativeToWindowHeight)
},closeDialog:function(){var b=$$("body");
b.removeEvent("keyup",this._onKeyUp);
window.removeEvent(Constants.CoreEvents.RESIZE,this._setDialogHeightRelativeToWindowHeight);
this._view.removeFromDOM();
this.injects().Utils.forceBrowserRepaint();
this._view.fireEvent("dialogClosed")
},_onAllSkinPartsReady:function(){this._skinParts.xButton.addEvent(Constants.CoreEvents.CLICK,this._onButtonClicked.bind(this,W.EditorDialogs.DialogButtons.CANCEL));
this._skinParts.tabs.addEvent(Constants.CoreEvents.CLICK,this._tabChanged)
},addToolbarControl:function(b){b.insertInto(this._skinParts.dialogToolbar);
b.addClass("controlBtn")
},_tabChanged:function(i,h){if(!i||!i.target||i.target==this._skinParts.tabs||(i.target==this._currentTabNode&&!h)){return
}var j=i.target;
var e=this._skinParts.tabs.childNodes;
for(var g=0;
g<e.length;
g++){if(e[g]!=j){e[g].removeClass("selectedTab")
}else{e[g].addClass("selectedTab")
}}this._currentTabNode=i.target;
this.fireEvent("tabChanged",j.get("rel"))
},switchToTabIndex:function(b){this._tabChanged({target:new Element(this._skinParts.tabs.getChildren()[b])})
},clearTabs:function(){this._skinParts.tabs.empty()
},addTab:function(e,f,h){var g=new Element("div",{"class":"tab",rel:f,skinPart:h}).insertInto(this._skinParts.tabs);
g.set("html",e)
},setButtonState:function(e,d){var f=this._buttonsMap[e];
if(f&&f.getLogic){f.getLogic().setState(d)
}else{this._buttonPreReadyIsEnable[e]=false
}},enableButton:function(d){var c=this._buttonsMap[d];
if(c&&c.getLogic){c.getLogic().enable()
}else{this._buttonPreReadyIsEnable[d]=false
}},disableButton:function(d){var c=this._buttonsMap[d];
if(c&&c.getLogic){c.getLogic().disable()
}else{this._buttonPreReadyIsEnable[d]=false
}},getModalMode:function(){return this._modalMode
},getDialogBoxCoordinates:function(){return this._skinParts.dialogBox.getCoordinates()
}}});
W.Components.newComponent({name:"mobile.editor.components.dialogs.ErrorDialog",skinParts:{error:{type:"htmlElement"},details:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(f,d,e){this.parent(f,d,e);
this._dialogWindow=e.dialogWindow;
this._dialogWindow.addEvent("onDialogClosing",this._onDialogClosing.bind(this))
},setDialogOptions:function(j,l,h,k,i,g){this._callBack=k;
this._content=l;
this._details=h;
i=i||{};
if(!i.title){i.title=j
}if(!i.description){i.description=g
}if(!i.buttonSet){i.buttonSet=W.EditorDialogs.DialogButtonSet.OK
}this._dialogWindow.setDialogOptions(i);
this._refreshView();
this._view.fireEvent("dialogOptionsSet",this)
},_refreshView:function(){if(!this._skinParts||!this._skinParts.error){return
}this._skinParts.error.set("html",this._content);
if(this._details){this._skinParts.details.set("html",this._details)
}else{this._skinParts.details.set("html","")
}},_onDialogClosing:function(b){if(this._callBack){this._callBack({result:b.result})
}},render:function(){this._refreshView()
}}});
W.Components.newComponent({name:"mobile.editor.components.dialogs.MediaDialog",skinParts:{content:{type:"htmlElement"},pageController:{type:"mobile.editor.components.PageControllerSimple"},progressOuter:{type:"htmlElement"},progressInner:{type:"htmlElement"},errorContent:{type:"htmlElement"},uploadBTN:{type:"mobile.editor.components.UploadButton"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_userMediaUpdate","_onOK","_onUploadProgress","_onUploadError","_onValidationError","_changePageIndex"],_states:{dialog:["normal","blockUser"],tabs:["hasTabs"]},initialize:function(i,f,g){this.parent(i,f,g);
this._dialogWindow=g&&g.dialogWindow;
this._dialogOptionsSet=false;
this._galleryConfigurations={backgrounds:{tabs:[{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_PHOTOS"),skinpart:"yourPicsTab",listID:"user_photos",allowDelete:true},{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_BACKGROUNDS"),skinpart:"wixBgTab",listID:"backgrounds"},{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_PATTERNS"),skinpart:"wixPatternsTab",listID:"backgroundPatterns"},{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_TEXTURES"),skinpart:"wixTexturesTab",listID:"backgroundTextures"}],uploadFileType:{label:this.injects().Resources.get("EDITOR_LANGUAGE","UPLOAD_IMAGE"),description:this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_IMAGES"),extensions:"*.jpg;*.gif;*.png;*.jpeg",macExtensions:"*.jpg;*.gif;*.png;*.jpeg",wixType:"media",compType:"photo",mediaS:"media"},onUpdateIndex:0},photos:{tabs:[{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_PHOTOS"),skinpart:"wixPicsTab",listID:"user_photos",allowDelete:true},{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_PHOTOS"),skinpart:"yourPicsTab",listID:"photos"}],uploadFileType:{label:this.injects().Resources.get("EDITOR_LANGUAGE","UPLOAD_IMAGE"),description:this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_IMAGES"),extensions:"*.jpg;*.gif;*.png;*.jpeg",macExtensions:"*.jpg;*.gif;*.png;*.jpeg",wixType:"media",compType:"photo",mediaS:"media"},onUpdateIndex:0},clipart:{tabs:[{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_CLIPART"),skinpart:"yourPicsTab",listID:"clipart"},{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_PHOTOS"),skinpart:"wixPicsTab",listID:"user_photos",allowDelete:true}],uploadFileType:{label:this.injects().Resources.get("EDITOR_LANGUAGE","UPLOAD_IMAGE"),description:this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_IMAGES"),extensions:"*.jpg;*.gif;*.png;*.jpeg",macExtensions:"*.jpg;*.gif;*.png;*.jpeg",wixType:"media",compType:"photo",mediaS:"media"},onUpdateIndex:1},icons:{tabs:[{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_ICONS"),skinpart:"wixIconsTab",listID:"icons"},{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_PHOTOS"),skinpart:"wixPicsTab",listID:"user_photos",allowDelete:true}],uploadFileType:{label:this.injects().Resources.get("EDITOR_LANGUAGE","UPLOAD_ICON"),description:this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_IMAGES"),extensions:"*.jpg;*.gif;*.png;*.jpeg",macExtensions:"*.jpg;*.gif;*.png;*.jpeg",wixType:"media",compType:"photo",mediaS:"picture"},onUpdateIndex:1},social_icons:{tabs:[{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_SOCIAL_ICONS"),skinpart:"wixSocialIconsTab",listID:"social_icons"},{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_PHOTOS"),skinpart:"wixPicsTab",listID:"user_photos",allowDelete:true}],uploadFileType:{label:this.injects().Resources.get("EDITOR_LANGUAGE","UPLOAD_ICON"),description:this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_IMAGES"),extensions:"*.jpg;*.gif;*.png;*.jpeg",macExtensions:"*.jpg;*.gif;*.png;*.jpeg",wixType:"media",compType:"photo",mediaS:"media"},onUpdateIndex:1},favicon:{tabs:[{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_CLIPART"),skinpart:"yourPicsTab",listID:"user_favicons",allowDelete:true}],uploadFileType:{label:this.injects().Resources.get("EDITOR_LANGUAGE","UPLOAD_ICON"),description:this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_IMAGES"),extensions:"*.jpg;*.gif;*.png;*.jpeg",macExtensions:"*.jpg;*.gif;*.png;*.jpeg",wixType:"site_icon",compType:"ficons",mediaS:"ficons"},onUpdateIndex:0},documents:{tabs:[{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_DOCS"),skinpart:"wixPicsTab",listID:"user_docs",allowDelete:true}],uploadFileType:{label:this.injects().Resources.get("EDITOR_LANGUAGE","UPLOAD_GENERAL"),description:this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_DOCS"),extensions:"*.doc;*.docx;*.pdf;*.xls;*.xlsx;*.ppt;*.pptx;*.odf;*.odt;",macExtensions:"*.doc;*.docx;*.pdf;*.xls;*.xlsx;*.ppt;*.pptx;*.odf;*.odt;",wixType:"document",compType:"document",mediaS:"ugd"},onUpdateIndex:0},swf:{tabs:[{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_SWF"),skinpart:"wixSwfTab",listID:"user_swf",allowDelete:true}],uploadFileType:{label:this.injects().Resources.get("EDITOR_LANGUAGE","UPLOAD_SWF"),description:this.injects().Resources.get("EDITOR_LANGUAGE","GENERAL_SWFS"),extensions:"*.swf;",macExtensions:"*.swf",wixType:"swf",compType:"picture",mediaS:"media"},onUpdateIndex:0}};
this._galleryConfigurations.SlideShowGallery=this._galleryConfigurations.photos;
this._galleryConfigurations.MatrixGallery=this._galleryConfigurations.photos;
this._galleryConfigurations.SliderGallery=this._galleryConfigurations.photos;
this._tabNamesMap={UserMedia:{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_PHOTOS"),skinpart:"yourPicsTab"},Photos:{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_PHOTOS"),skinpart:"wixPicsTab"},Backgrounds:{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_BACKGROUNDS"),skinpart:"wixBgTab"},Patterns:{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_PATTERNS"),skinpart:"wixBgPatternTab"},Icons:{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_ICONS"),skinpart:"wixIconsTab"},"Social Icons":{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_SOCIAL_ICONS"),skinpart:"wixSocialIconsTab"},ClipArt:{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_CLIPART"),skinpart:"wixClipArtTab"},SWF:{caption:this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TAB_USER_SWF"),skinpart:"wixSwfTab"}};
this._multipleSelection=true;
this._currentSelection=[];
var h=this;
this._imageListener=function(a){if(a.type=="click"){h._onImageClick(this)
}else{if(a.type=="deleteItemClicked"){h._onDeleteClicked(this)
}else{h._onDoubleClick(this)
}}};
var j=this.injects().UserMedia;
j.addEvent("mediaUpdated",this._userMediaUpdate);
j.addEvent("UploadProgressUpdate",this._onUploadProgress);
j.addEvent("UploadError",this._onUploadError);
j.addEvent("validationError",this._onValidationError)
},_prepareForRender:function(){if(this._dialogOptionsSet){return true
}this._dialogOptionsSet=true;
this._dialogWindow.addToolbarControl(this._skinParts.uploadBTN.getViewNode());
this._skinParts.errorContent.hide();
this._skinParts.pageController.addEvent("change",this._changePageIndex);
this._dialogWindow.addEvent("tabChanged",this._onTabSwitch.bind(this));
this._dialogWindow.addEvent("onDialogClosing",this._onClosing.bind(this));
this._renderIfReady();
return this._dialogOptionsSet
},render:function(){if(this._currentImageList){this._populateContent(this._currentImageList,0)
}},setDialogOptions:function(h,g,i){this._callBack=i;
this._multipleSelection=h;
this._clearSelection();
this._currentConfig=this._galleryConfigurations[g];
if(!this._currentConfig){LOG.reportError(wixErrors.MEDIA_GALLERY_MISSING_CONFIG,"MediaDialog","setDialogOptions",g);
return
}this._dialogWindow.setTitle(this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_TITLE_"+g.toUpperCase()));
this._dialogWindow.setDescription(this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_DIALOG_DESCRIPTION_"+g.toUpperCase()));
this._skinParts.uploadBTN.setUploadFileType(this._currentConfig.uploadFileType);
if(this._updateOnOpen){this._updateOnOpen=false;
this.injects().UserMedia.updateMedia()
}this._dialogWindow.clearTabs();
if(this._currentConfig.tabs.length>1){var j=this._currentConfig.tabs;
for(var f=0;
f<j.length;
f++){this._dialogWindow.addTab(j[f].caption,f,j[f].skinpart)
}this._dialogWindow.switchToTabIndex(0);
this.setState("hasTabs","tabs")
}else{this._onTabSwitch(0);
this.getParentComponent()._skinParts.tabs.collapse()
}this._view.fireEvent("dialogOptionsSet",this)
},_getDataClone:function(c){var d=c.getLogic().getDataItem()._data;
return this.injects().UserMedia.convertToClientData(d)
},_onUploadProgress:function(k){var i=k.message;
var j=0;
var l=0;
for(var h=0;
h<i.length;
h++){l+=i[h].size;
j+=i[h].loaded
}var g=Math.round(j/l*100);
this._skinParts.progressOuter.setStyle("visibility","visible");
this._skinParts.progressInner.setStyle("width",g+"%");
this.setState("blockUser","dialog")
},_onUploadError:function(d){var c=d.text||d||"error";
c=c.replace("<","");
c=c.replace(">","");
this._skinParts.progressOuter.setStyle("visibility","hidden");
this.setState("normal","dialog");
LOG.reportError(wixErrors.UPLOAD_FAIL,this.className,"_onUploadError",c+"");
this._showError(this.injects().Resources.get("EDITOR_LANGUAGE","ERROR_UPLOADING_FILE"),c)
},_onValidationError:function(g){var f="",h="";
for(var e=0;
e<g.message.length;
e++){if(g.message[e].error=="InvalidFileSize"){f+=g.message[e].fileName+" "+this.injects().Resources.get("EDITOR_LANGUAGE","too_large")
}else{if(g.message[e].error=="InvalidFileName"){h=W.Utils.convertToHtmlText(g.message[e].fileName);
f+=h+" "+this.injects().Resources.get("EDITOR_LANGUAGE","invalid_chars")
}}}this._showError(this.injects().Resources.get("EDITOR_LANGUAGE","files_rejected"),f)
},_showError:function(h,j){var g='<span style="font-size:16px;color:#dd6666">'+h+"</span>";
g+=j;
this._skinParts.errorContent.set("html",g);
this._skinParts.errorContent.show();
if(!this._errorTween){this._errorTween=new Fx.Tween(this._skinParts.errorContent,{duration:"200ms",link:"cancel",property:"opacity"})
}this._errorTween.start(0,1);
var i=this._errorTween;
var f=this._skinParts.errorContent;
f.addEvent("click",function(){f.hide();
f.removeEvent("click")
});
setTimeout(function(){i.start(1,0)
},5000);
setTimeout(function(){f.hide();
f.removeEvent("click")
},5200)
},_onClosing:function(b){if(b.result=="OK"){this._onOK()
}else{this._closeDialog()
}},_onOK:function(f){var d;
if(this._multipleSelection){d=[];
for(var e=0;
e<this._currentSelection.length;
e++){d.push(this._getDataClone(this._currentSelection[e]))
}}else{if(this._currentSelection[0]){d=this._getDataClone(this._currentSelection[0])
}}this._callBack(d);
this._closeDialog()
},_closeDialog:function(b){this.injects().Utils.clearCallLater(this._updatePageTimeout);
this._skinParts.progressOuter.setStyle("visibility","hidden");
this.setState("normal","dialog")
},_userMediaUpdate:function(){this._clearSelection();
this._skinParts.progressOuter.setStyle("visibility","hidden");
this.setState("normal","dialog");
this._onTabSwitch(this._currentConfig.onUpdateIndex);
if(this._currentConfig.tabs.length>1){this._dialogWindow.switchToTabIndex(this._currentConfig.onUpdateIndex)
}},_onTabSwitch:function(c){var d=parseInt(c,10);
this._currentTab=this._currentConfig.tabs[d];
this._currentPageIndex=-1;
this.injects().UserMedia.getWixMedia(this._currentTab.listID,function(a){this._currentImageList=a;
if(this._componentReady){this._populateContent(this._currentImageList,0)
}}.bind(this))
},_itemsPerPage:8,_populateContent:function(x,w){if(this._currentPageIndex!=w){this._currentPageIndex=w;
var n=Math.ceil(x.length/this._itemsPerPage);
w=Math.min(w,n-1);
w=Math.max(w,0);
var t=w*this._itemsPerPage;
var s=t+this._itemsPerPage;
s=(s>x.length)?x.length:s;
this._skinParts.content.empty();
if(n<2){this._skinParts.pageController.getViewNode().hide()
}else{this._skinParts.pageController.getViewNode().show();
this._skinParts.pageController.getSkin().renderCssIfNeeded()
}if(this._skinParts.pageController.getAmount()!=n){this._skinParts.pageController.setAmount(n)
}if(this._skinParts.pageController.getIndex()!=w){this._skinParts.pageController.setIndex(w)
}var q=this.injects().Components;
var o=[];
this._currentSelection.forEach(function(a){o.push(a.getLogic().getDataItem().get("fileName"))
});
if(x.length>0){for(var u=t;
u<s;
++u){var v=x[u];
v.title=v.title||"";
v.description=v.description||"";
var i=this.injects().Data.createDataItem(v);
var r=this.injects().Components.createComponent("mobile.editor.components.dialogs.MediaDialogItem","mobile.editor.skins.dialogs.MediaDialogItemSkin",i,{align:"center",cropMode:"full",unit:"em",width:6.5,height:6.5,valign:"middle",allowDelete:this._currentTab.allowDelete},function(b){var a;
var c=b.getDataItem().get("fileName");
if((a=o.indexOf(c))!=-1){this._currentSelection[a]=b.getViewNode();
b.setState("selected","selection")
}}.bind(this));
r.addClass("galImage");
r.addEvent("click",this._imageListener);
r.addEvent("dblclick",this._imageListener);
r.addEvent("deleteItemClicked",this._imageListener);
r.insertInto(this._skinParts.content)
}}else{var p=new Element("div",{styles:{"text-align":"center","font-size":"18px","margin-top":"82px"}});
p.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","MEDIA_GALLERY_EMPTY_TEXT"));
p.insertInto(this._skinParts.content)
}}},_changePageIndex:function(c,d){if(this._currentImageList){this.injects().Utils.clearCallLater(this._updatePageTimeout);
if(d){this._populateContent(this._currentImageList,c)
}else{this._updatePageTimeout=this.injects().Utils.callLater(this._changePageIndex,[c,true],this,1000);
this._skinParts.content.empty()
}}},_onImageClick:function(c){var d=this._currentSelection.indexOf(c);
if(d>-1){this._currentSelection.splice(d,1);
c.getLogic().setState("unselected","selection")
}else{if(!this._multipleSelection){this._clearSelection()
}this._currentSelection.push(c);
c.getLogic().setState("selected","selection")
}if(this._currentSelection.length>0){this._dialogWindow.enableButton(this.injects().EditorDialogs.DialogButtons.OK)
}else{this._dialogWindow.disableButton(this.injects().EditorDialogs.DialogButtons.OK)
}},_onDoubleClick:function(b){this._clearSelection();
this._onImageClick(b);
this._onOK();
this._dialogWindow.closeDialog()
},_onDeleteClicked:function(b){if(b.getLogic().getDataItem()._data.uri){this.injects().Editor.deleteMedia(b.getLogic().getDataItem()._data.uri)
}else{this.injects().Editor.deleteMedia(b.getLogic().getDataItem()._data.fileName)
}},_clearSelection:function(){while(this._currentSelection.length){this._currentSelection.pop().getLogic().setState("unselected","selection")
}this._dialogWindow.disableButton(this.injects().EditorDialogs.DialogButtons.OK)
}}});
(function(){W.Components.newComponent({name:"mobile.editor.components.dialogs.MediaDialogItem",skinParts:{image:{type:"htmlElement"},trashButton:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onDeleteClicked","_onImageLoaded"],_states:{progress:["loading","loaded"],selection:["selected","unselected"]},initialize:function(f,e,d){this.parent(f,e,d);
this._allowDelete=d.allowDelete
},_onAllSkinPartsReady:function(){this.setState("loading","progress");
this._skinParts.image.addEvent("load",this._onImageLoaded);
if(this._allowDelete){this._skinParts.trashButton.addEvent("click",this._onDeleteClicked)
}else{this._skinParts.trashButton.collapse()
}},_onDeleteClicked:function(b){b.stopPropagation();
this.getViewNode().fireEvent("deleteItemClicked",{type:"deleteItemClicked"})
},_onImageLoaded:function(){this.setState("loaded","progress");
var c=this._skinParts.image.getSize();
var d=c.y/c.x;
if(c.y>c.x){this._skinParts.image.setStyles({height:95,width:95/d})
}else{this._skinParts.image.setStyles({height:95*d,width:95,"margin-top":(95-95*d)/2})
}},render:function(){var f,i;
var h=this._data.get("originalFileName")||"";
var j=this._data.get("title")||"";
if(this._data.get("type")=="Image"){f=this.injects().Config.getServiceTopologyProperty("staticMediaUrl")+"/"+this._data.get("uri")+"_128";
i=j.capitalize()
}else{if(this._data.get("mediaType")=="swf"){f=this.injects().Theme.getProperty("THEME_DIRECTORY")+"flash_swf_icon.png"
}else{f=this.injects().Config.getServiceTopologyProperty("staticMediaUrl").replace("media","")+"/"+this._data.get("iconURL")
}var g=h.replace(/\.+[a-zA-Z]+$/g,"");
i=(j||g).capitalize()
}if(f){this._skinParts.image.set("src",f)
}this._skinParts.label.set("text",i)
},getAcceptableDataTypes:function(){return["MediaItem","Image"]
}}})
})();
W.Components.newComponent({name:"mobile.editor.components.dialogs.MessageDialog",skinParts:{text:{type:"htmlElement"},details:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(f,d,e){this.parent(f,d,e);
this._dialogWindow=e.dialogWindow;
this._dialogWindow.addEvent("onDialogClosing",this._onDialogClosing.bind(this))
},setDialogOptions:function(e,f,h,g){this._callBack=h;
this._content=e;
this._details=f;
this._dialogWindow.setDialogOptions(g,function(){this._refreshView();
this._view.fireEvent("dialogOptionsSet",this)
}.bind(this))
},_refreshView:function(){if(!this._skinParts||!this._skinParts.text){return
}this._skinParts.text.set("text",this._content);
if(this._details){this._skinParts.details.set("text",this._details)
}else{this._skinParts.details.collapse()
}},_onDialogClosing:function(b){if(this._callBack){this._callBack({result:b.result})
}},render:function(){this._refreshView()
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.BaseListDataPanel",imports:["mobile.editor.components.FancyItem"],skinParts:{itemsContainer:{type:"htmlElement"}},traits:["mobile.editor.components.traits.DataPanel"],Class:{Extends:"mobile.core.components.BaseList",Binds:["_onPreviewItemReady"],initialize:function(f,e,d){this.parent(f,e,d);
this._isDataRendered=false;
this._dataForRender=null
},_renderData:function(b){this._itemsLogicName=b.itemsLogicName;
this._enableHide=b.enableHide;
this._enableDelete=b.enableDelete;
this._itemsDataFieldName=b.itemsDataFieldName;
if(this._previewComponent){this._previewComponent.addEvent("itemReady",this._onPreviewItemReady)
}if(!this._skin.itemSkinClassName){this._skin.itemSkinClassName=this._skin.itemSkinName
}this._renderItems(this._data.get(b.itemsDataFieldName))
},_prepareForRender:function(){if(this._isDataRendered||!this._data){return true
}if(this._dataForRender){return false
}var b=this._getRenderData();
if(b){this._dataForRender=b;
this._renderData(b);
return false
}else{this._isDataRendered=true
}return this._isDataRendered
},getFocusNode:function(){var d=this.parent();
if(d!=this._skinParts.view||this._itemsNodes.length===0){return d
}var c=this._itemsNodes[0];
if(!c.getLogic){return d
}return c.getLogic().getFocusNode()
},_getParamsToPassToItem:function(d,c){this._getPreviewPartComponent(d,function(a){c({previewComponent:a})
})
},_getPreviewPartComponent:function(g,h){var i;
if(this._previewComponent&&this._previewComponent.getSkinElementByIndex){var j=this._data.get(this._itemsDataFieldName);
var f=j.indexOfByPredicate(function(a){return a=="#"+g.get("id")
});
i=this._previewComponent.getSkinElementByIndex(f)
}if(i){if(i.getLogic){this.injects().Utils.callLater(h,[i.getLogic()])
}else{i.addEvent(Constants.ComponentEvents.READY,function(){h(i.getLogic())
})
}}else{this.injects().Utils.callLater(h,[])
}},_onItemReady:function(j,f,g){if(f){j.getViewNode().addClass("DataPanelItem");
var h=(this._enableDelete)?this._onItemDelete.bind(this,j):undefined;
var i=(this._enableHide)?this._onItemHide.bind(this,j):undefined;
j.fancify({upCallback:this._onItemMoveUp.bind(this,j),downCallback:this._onItemMoveDown.bind(this,j),deleteCallback:h,isHiddenCallback:i,initialIsHidden:g.getMeta("isHidden")})
}},_onAllItemsReady:function(){this._isDataRendered=true;
this._dataForRender=null;
this._renderIfReady()
},_onPreviewItemReady:function(j,g,h){if(this._itemsNodes){for(var k=0;
k<this._itemsNodes.length;
++k){var i=this._itemsNodes[k];
var l=i.getLogic&&i.getLogic();
if(l&&l.getDataItem()===g){l.setPreviewComponent(j);
return
}}}},getItemClassName:function(){return this._itemsLogicName
},getItemsContainer:function(){return this._skinParts.itemsContainer
},_onItemDelete:function(d){if(!this._editorInstance){if(tinyMCE.selectedInstance){this._selectedInstanceId=tinyMCE.selectedInstance.id;
tinyMCE.selectedInstance.remove()
}}this._isDataRendered=false;
var c=this._itemsNodes.indexOf(d.getViewNode());
this._data.get(this._itemsDataFieldName).splice(c,1);
this.fireEvent("itemDeleted");
this._data.fireDataChangeEvent();
setTimeout(function(){$$("#"+this._selectedInstanceId).getParent().getParent().fireEvent("focus")
}.bind(this),20)
},_onItemHide:function(c,d){c.getDataItem().setMeta("isHidden",d,true);
this._skipRender=true;
this._data.fireDataChangeEvent();
this._skipRender=false;
c.getDataItem().setMeta("isHidden",d,true)
},_onItemMoveUp:function(b){this._moveItem(b.getViewNode(),false)
},_onItemMoveDown:function(b){this._moveItem(b.getViewNode(),true)
},_moveItem:function(i,h){var l=this._itemsNodes.indexOf(i);
if(l!=-1){this._isDataRendered=false;
var j=this._data.get(this._itemsDataFieldName);
var k=(h)?1:-1;
var g=l+k;
j.moveItem(l,g);
this._data.fireDataChangeEvent()
}},_onDataChange:function(){this._isDataRendered=false;
this._dataForRender=null;
this.parent()
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.DataPanelWrapper",skinParts:{dataPanelContainer:{type:"htmlElement"},compEdit:{type:"htmlElement"},upBtn:{type:"htmlElement"},downBtn:{type:"htmlElement"},deleteBtn:{type:"htmlElement"},title:{type:"htmlElement"},text:{type:"htmlElement"},exitModeBtn:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:{mode:["data","comp"],selected:["focus","blur"]},Binds:["_onDataPanelReady","_onFocus","_moveUp","_moveDown","_exitCompMode","_deleteComponent"],_canFocus:true,initialize:function(f,e,d){this.parent(f,e,d);
d=d||{};
this._args=d;
this._comp=d.previewComponent;
this._isComponentEditModeEnable=true;
this._isDeleteDisabled=false;
this._dataPanelNode=null;
this._dataPanel=null;
this.setEditState(d.initEditMode);
if(d.disableComponentEditState){this.disableComponentEditState()
}this._setDeleteMode(false);
this._isDeleteDisabled=d.disableDelete||false;
if(this._isDeleteDisabled){this._view.addClass("deleteDisabled")
}this._view.addEvent("click",this._onFocus);
if(document.addEventListener){this._view.addEventListener("focus",this._onFocus,true)
}else{this._view.attachEvent("onfocusin",this._onFocus,true)
}},_onFocus:function(b){this.setState("focus","selected");
this.fireEvent("focusItem",{panelNode:this._view,compNode:this._comp.getViewNode()});
if(this.getState().indexOf("comp")!=-1){this._dataPanel.highlightPreviewElement(this._comp.getViewNode(),"highlightAnimationOpacity")
}},focus:function(){this._view.focus();
window.scrollTo(0,this._view.getPosition().y)
},render:function(){this._setText()
},_onAllSkinPartsReady:function(){this._bindEvents()
},_bindEvents:function(){this._skinParts.upBtn.addEvent("click",this._moveUp);
this._skinParts.downBtn.addEvent("click",this._moveDown);
this._skinParts.exitModeBtn.addEvent("click",this._exitCompMode);
this._skinParts.deleteBtn.addEvent("click",function(){this._deleteComponent(false)
}.bind(this))
},_prepareForRender:function(){if(!this._dataPanelNode){this._dataPanelNode=this.injects().Components.createComponent(this._args.dataPanelLogic,this._args.dataPanelSkin,this._comp.getDataItem(),{previewComponent:this._comp},null,this._onDataPanelReady,"dataPanelOf_"+this._comp.getComponentId());
this._dataPanelNode.insertInto(this._skinParts.dataPanelContainer)
}return(this._dataPanel!==null)
},_onDataPanelReady:function(b){this._dataPanel=b;
this._renderIfReady()
},getDataPanel:function(){return this._dataPanel
},_setText:function(){var b=this.injects().Resources.get("EDITOR_LANGUAGE","COMP_EDIT_DELETE_TEXT");
if(this._isDeleteDisabled){b=this.injects().Resources.get("EDITOR_LANGUAGE","COMP_EDIT_TEXT")
}this._skinParts.title.set("html",this.injects().Resources.get("EDITOR_LANGUAGE",this._comp.getComponentType()));
this._skinParts.text.set("html",b)
},_setDeleteMode:function(b){if(!this._isDeleteDisabled){if(b){this._view.removeClass("moveMode");
this._view.addClass("deleteMode")
}else{this._view.removeClass("deleteMode");
this._view.addClass("moveMode")
}}},setEditState:function(b){b=(b=="data"||b=="comp")?b:"data";
if(!this._isComponentEditModeEnable){b="data"
}this.setState(b,"mode")
},disableComponentEditState:function(){this._isComponentEditModeEnable=false;
if(this.getState()=="comp"){this.setEditState("data")
}},getComponent:function(){return this._comp
},isDataPanelWrapper:function(){return true
},_moveUp:function(){this.fireEvent("move",{panelNode:this._view,compNode:this._comp.getViewNode(),dir:"up"})
},_moveDown:function(){this.fireEvent("move",{panelNode:this._view,compNode:this._comp.getViewNode(),dir:"down"})
},_exitCompMode:function(){this.fireEvent("exitCompMode")
},_deleteComponent:function(b){if(!this._isDeleteDisabled){if(b){this.fireEvent("deleteComponent",{panelNode:this._view,compNode:this._comp.getViewNode()})
}else{this._setDeleteMode(true);
this._setText();
this.injects().EditorDialogs.openPromptDialog(this.injects().Resources.get("EDITOR_LANGUAGE","DELETE_COMPONENT_DIALOG_TITLE"),this.injects().Resources.get("EDITOR_LANGUAGE","DELETE_COMPONENT_DIALOG_TEXT"),"",this.injects().EditorDialogs.DialogButtonSet.YES_NO,function(a){if(a.result==this.injects().EditorDialogs.DialogButtons.YES){this._deleteComponent(true)
}else{this._setDeleteMode(false);
this._setText()
}}.bind(this))
}}}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.FacebookCommentDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{fancyContainer:{type:"mobile.editor.components.FancyItem"},inputArea:{type:"htmlElement"},icon:{type:"htmlElement"},numPostsDropDown:{type:"htmlElement"},colorschemeDropDown:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_updateNumPosts","_updateColorscheme"],initialize:function(f,e,d){this.parent(f,e);
this.previewSkinContainer=d.previewSkinContainer
},render:function(){if(!this.runOnce){this.runOnce=true;
this._skinParts.fancyContainer.createGui({dataPanel:this},[this._skinParts.icon,this._skinParts.inputArea])
}var c=this.injects().Theme.getProperty("CONTACT_DIRECTORY");
var d=c+"facebook_comment.png";
this._skinParts.icon.set("src",d);
this._addEventsToProperties();
this._setDropDownLabels()
},_setDropDownLabels:function(){for(var b=1;
b<=5;
b++){this._skinParts.numPostsDropDown.getElementById("numPostsIs"+b).set("text",this.injects().Resources.get("EDITOR_LANGUAGE","FACEBOOK_COMMENT_NUM_OF_POSTS")+b)
}this._skinParts.colorschemeDropDown.getElementById("light").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","FACEBOOK_LIKE_COLOR_SCHEME_LIGHT"));
this._skinParts.colorschemeDropDown.getElementById("dark").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","FACEBOOK_LIKE_COLOR_SCHEME_DARK"))
},_addEventsToProperties:function(){this._skinParts.numPostsDropDown.addEvent("change",this._updateNumPosts);
this._skinParts.colorschemeDropDown.addEvent("change",this._updateColorscheme)
},_updateLayout:function(){var b=this._skinParts.layoutDropDown.get("value");
this._previewComponent.setComponentProperty("layout",b)
},_updateNumPosts:function(){var b=this._skinParts.numPostsDropDown.get("value");
this._previewComponent.setComponentProperty("numPosts",b)
},_updateColorscheme:function(){var b=this._skinParts.colorschemeDropDown.get("value");
this._previewComponent.setComponentProperty("colorscheme",b)
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.FacebookLikeDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{fancyContainer:{type:"mobile.editor.components.FancyItem"},inputArea:{type:"htmlElement"},icon:{type:"htmlElement"},layoutDropDown:{type:"htmlElement"},colorschemeDropDown:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_updateLayout","_updateColorscheme"],initialize:function(f,e,d){this.parent(f,e);
this.previewSkinContainer=d.previewSkinContainer
},render:function(){if(!this.runOnce){this.runOnce=true;
this._skinParts.fancyContainer.createGui({dataPanel:this},[this._skinParts.icon,this._skinParts.inputArea])
}var c=this.injects().Theme.getProperty("CONTACT_DIRECTORY");
var d=c+"facebook_like.png";
this._skinParts.icon.set("src",d);
this._addEventsToProperties();
this._setDropDownLabels()
},_setDropDownLabels:function(){this._skinParts.layoutDropDown.getElementById("button_count").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","BUTTON_ONLY"));
this._skinParts.layoutDropDown.getElementById("box_count").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","BUTTON_WITH_COUNT"));
this._skinParts.layoutDropDown.getElementById("standard").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","BUTTON_WITH_TEXT"));
this._skinParts.colorschemeDropDown.getElementById("light").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","FACEBOOK_LIKE_COLOR_SCHEME_LIGHT"));
this._skinParts.colorschemeDropDown.getElementById("dark").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","FACEBOOK_LIKE_COLOR_SCHEME_DARK"))
},_addEventsToProperties:function(){this._skinParts.layoutDropDown.addEvent("change",this._updateLayout);
this._skinParts.colorschemeDropDown.addEvent("change",this._updateColorscheme)
},_updateLayout:function(){var b=this._skinParts.layoutDropDown.get("value");
this._previewComponent.setComponentProperty("layout",b)
},_updateColorscheme:function(){var b=this._skinParts.colorschemeDropDown.get("value");
this._previewComponent.setComponentProperty("colorscheme",b)
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.GooglePlusOneDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{fancyContainer:{type:"mobile.editor.components.FancyItem"},inputArea:{type:"htmlElement"},icon:{type:"htmlElement"},sizeDropDown:{type:"htmlElement"},annotationDropDown:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_updateSize","_updateAnnotation"],initialize:function(f,e,d){this.parent(f,e);
this.previewSkinContainer=d.previewSkinContainer
},render:function(){if(!this.runOnce){this.runOnce=true;
this._skinParts.fancyContainer.createGui({dataPanel:this},[this._skinParts.icon,this._skinParts.inputArea])
}var c=this.injects().Theme.getProperty("CONTACT_DIRECTORY");
var d=c+"plus-one-button.png";
this._skinParts.icon.set("src",d);
this._addEventsToProperties();
this._setDropDownLabels()
},_setDropDownLabels:function(){this._skinParts.annotationDropDown.getElementById("none").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","BUTTON_ONLY"));
this._skinParts.annotationDropDown.getElementById("bubble").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","BUTTON_WITH_COUNT"));
this._skinParts.annotationDropDown.getElementById("inline").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","BUTTON_WITH_TEXT"));
this._skinParts.sizeDropDown.getElementById("small").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","GOOGLE_PLUS_ONE_SIZE_SMALL"));
this._skinParts.sizeDropDown.getElementById("medium").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","GOOGLE_PLUS_ONE_SIZE_MEDIUM"));
this._skinParts.sizeDropDown.getElementById("standard").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","GOOGLE_PLUS_ONE_SIZE_STANDARD"));
this._skinParts.sizeDropDown.getElementById("tall").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","GOOGLE_PLUS_ONE_SIZE_TALL"))
},_addEventsToProperties:function(){this._skinParts.sizeDropDown.addEvent("change",this._updateSize);
this._skinParts.annotationDropDown.addEvent("change",this._updateAnnotation)
},_updateSize:function(){var b=this._skinParts.sizeDropDown.get("value");
this._previewComponent.setComponentProperty("size",b)
},_updateAnnotation:function(){var b=this._skinParts.annotationDropDown.get("value");
this._previewComponent.setComponentProperty("annotation",b)
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.HeaderDataPanel",imports:["mobile.editor.components.FancyItem"],traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{titleInput:{type:"htmlElement",highlight:"title",highlightAnimation:"highlightAnimationOpacity"},fancyContent:{type:"htmlElement"},imageDiv:{type:"htmlElement"},imageArea:{type:"htmlElement"},deletePhoto:{type:"htmlElement"},changePhoto:{type:"htmlElement"},btnSmall:{type:"htmlElement"},btnMedium:{type:"htmlElement"},btnLarge:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["showPhoto","hidePhoto","idle"],Binds:["_toggleHide","_onPartWixified","_onDelPhoto","_onChangePhoto","_onImageData","_setImageVisibility","_onInputFocus","_onInputFocusOut","_replacePicCB","_onSmallButtonClick","_onMediumButtonClick","_onLargeButtonClick"],initialize:function(f,d,e){this.parent(f,d,e);
this._allPartsWixified=false
},_onDelPhoto:function(){if(!this._imageData){return
}this._imageData.setMeta("isHidden",true);
this._imageData.fireDataChangeEvent()
},_onChangePhoto:function(){this.injects().EditorDialogs.openMediaDialog(this._replacePicCB,false,"Icons",["UserMedia","Icons"])
},_replacePicCB:function(f){var d=this._imageData.getData();
for(var e in f){d[e]=f[e]
}this._imageData.setMeta("isHidden",false);
this._imageData.fireDataChangeEvent()
},_onAllSkinPartsReady:function(d){this.setState("idle");
var e=this._skinParts.titleInput;
e.addEvent("focus",this._onInputFocus);
e.addEvent("blur",this._onInputFocusOut);
d.componentTitle.set("html","");
d.deletePhoto.addEvent("click",this._onDelPhoto);
d.changePhoto.addEvent("click",this._onChangePhoto);
d.addPhoto.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","addPic"));
d.addPhoto.addEvent("click",this._onChangePhoto);
d.btnSmall.addEvent("click",this._onSmallButtonClick);
d.btnMedium.addEvent("click",this._onMediumButtonClick);
d.btnLarge.addEvent("click",this._onLargeButtonClick);
var f=this.injects().Utils.convertFromHtmlText(this._data.get("title"));
this._skinParts.titleInput.set("value",f);
this._bindInputToDataField(this._skinParts.titleInput,"title",false,100)
},render:function(){var b=this._data.get("imageSize");
switch(b){case"small":this._skinParts.btnSmall.addClass("selected");
break;
case"large":this._skinParts.btnLarge.addClass("selected");
break;
case"medium":default:this._skinParts.btnMedium.addClass("selected");
break
}},_prepareForRender:function(){if(this._allPartsWixified&&this._imageData){return true
}var c=this.injects().Components;
if(!this._fancyShmancy){this._fancyShmancy=c.createComponent("mobile.editor.components.FancyItem","mobile.editor.skins.FancyItemSkin",undefined,{},this._onPartWixified)
}if(!this._imageData){var d=this._data.get("image");
this.injects().Preview.getPreviewManagers().Data.getDataByQuery(d,function(a){this._onImageData(a)
}.bind(this))
}return this._allPartsWixified&&this._imageData
},_onImageData:function(d){var c=null;
this._imageData=d;
this._imageData.addEvent(Constants.DataEvents.DATA_CHANGED,this._setImageVisibility);
if(!this._imageSkinContainer){this._imageSkinContainer=this.injects().Components.createComponent("mobile.core.components.Image","mobile.core.skins.ImageSkin",this._imageData,{width:100,height:100,unit:"px",align:"center",valign:"middle",cropMode:"full"},this._onPartWixified)
}else{if(this._imageSkinContainer&&this._imageSkinContainer.getLogic&&(c=this._imageSkinContainer.getLogic())){c.setDataItem(d)
}}this._setImageVisibility();
this._renderIfReady()
},_onInputFocus:function(){if(!this._data.getMeta("isPreset")){return
}this._skinParts.titleInput.set("value","")
},_onInputFocusOut:function(){if(!this._data.getMeta("isPreset")){return
}this._skinParts.titleInput.set("value",this.injects().Resources.get("EDITOR_LANGUAGE","headerPresetText"))
},_setImageVisibility:function(){if(this._imageData.getMeta("isHidden")){this.setState("hidePhoto")
}else{this.setState("showPhoto")
}},_onPartWixified:function(){if(this._fancyShmancy.getLogic&&this._imageSkinContainer&&this._imageSkinContainer.getLogic){this._onAllPartWixified()
}},_onAllPartWixified:function(){this._allPartsWixified=true;
this._fancyShmancy.insertInto(this._view);
this._fancyShmancy.getLogic().createGui({dataPanel:this,showHideToggleHandler:this._toggleHide,isHidden:this._data.getMeta("isHidden")},this._skinParts.fancyContent);
this._imageSkinContainer.insertInto(this._skinParts.imageDiv);
this._renderIfReady()
},_toggleHide:function(){this._updatingFlag=true;
var b=this._data.getMeta("isHidden");
this._data.setMeta("isHidden",!b);
this._data.fireDataChangeEvent();
this._updatingFlag=false
},_onSmallButtonClick:function(){this._data.set("imageSize","small");
this._skinParts.btnSmall.addClass("selected");
this._skinParts.btnMedium.removeClass("selected");
this._skinParts.btnLarge.removeClass("selected")
},_onMediumButtonClick:function(){this._data.set("imageSize","medium");
this._skinParts.btnMedium.addClass("selected");
this._skinParts.btnSmall.removeClass("selected");
this._skinParts.btnLarge.removeClass("selected")
},_onLargeButtonClick:function(){this._data.set("imageSize","large");
this._skinParts.btnLarge.addClass("selected");
this._skinParts.btnSmall.removeClass("selected");
this._skinParts.btnMedium.removeClass("selected")
},getAcceptableDataTypes:function(){return["Header"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.ImageDataPanel",imports:["mobile.core.components.Image"],traits:["mobile.editor.components.traits.DataPanel"],skinParts:{imageDiv:{type:"htmlElement"},imageArea:{type:"htmlElement"},image:{type:"mobile.core.components.Image",dataRefField:"*",argObject:{width:103,height:103,unit:"px",align:"center",valign:"middle",cropMode:"full"}},deletePhoto:{type:"htmlElement"},changePhoto:{type:"htmlElement"},imageSizeControls:{type:"htmlElement"},btnSmall:{type:"htmlElement"},btnMedium:{type:"htmlElement"},btnLarge:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onDelPhoto","_onChangePhoto","_replacePicCB","_onSmallButtonClick","_onMediumButtonClick","_onLargeButtonClick","render"],initialize:function(f,e,d){this.parent(f,e,d);
this._hasSizeControls=d&&d.showSizeControls;
this._hasDeleteButton=d&&d.showDeleteButton
},render:function(){if(this._hasDeleteButton){}else{this._skinParts.deletePhoto.collapse();
this._skinParts.changePhoto.addClass("withoutDeleteButton")
}if(this._hasSizeControls){if(this._previewComponent){var b=this._previewComponent.getComponentProperty("imageSize");
this._setSelectedSizeButton(b)
}this._skinParts.imageSizeControls.uncollapse()
}else{this._skinParts.imageSizeControls.collapse()
}},_onAllSkinPartsReady:function(b){if(this._hasDeleteButton){}this._skinParts.changePhoto.addEvent("click",this._onChangePhoto);
if(this._hasSizeControls){this._skinParts.btnSmall.addEvent("click",this._onSmallButtonClick);
this._skinParts.btnMedium.addEvent("click",this._onMediumButtonClick);
this._skinParts.btnLarge.addEvent("click",this._onLargeButtonClick)
}},fireShowDialogEvent:function(){this._onChangePhoto()
},_onDelPhoto:function(){},_onChangePhoto:function(b){this.injects().EditorDialogs.openMediaDialog(this._replacePicCB,false,"Photos",["UserMedia","Photos"])
},_replacePicCB:function(d){var c=this._data.getData();
c.uri=d.uri;
c.height=d.height;
c.width=d.width;
c.title=d.title;
c.description=d.description;
this._data.setMeta("isPreset",false);
this._data.fireDataChangeEvent()
},_setSelectedSizeButton:function(b){this._skinParts.btnSmall.toggleClass("selected",b=="small");
this._skinParts.btnLarge.toggleClass("selected",b=="large");
this._skinParts.btnMedium.toggleClass("selected",(b!="small")&&(b!="large"))
},_onSmallButtonClick:function(){this._setSelectedSizeButton("small");
this._previewComponent.setComponentProperty("imageSize","small")
},_onMediumButtonClick:function(){this._setSelectedSizeButton("medium");
this._previewComponent.setComponentProperty("imageSize","medium")
},_onLargeButtonClick:function(){this._setSelectedSizeButton("large");
this._previewComponent.setComponentProperty("imageSize","large")
},getAcceptableDataTypes:function(){return["Image"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.ImageItemDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{titleInput:{type:"htmlElement",highlightAnimation:"highlightAnimationOpacity"},descriptionInput:{type:"htmlElement",highlightAnimation:"highlightAnimationOpacity"},fancyContainer:{type:"htmlElement"},imageHolder:{type:"htmlElement"},changePhoto:{type:"htmlElement"},view:{type:"htmlElement",highlightAnimation:"highlightAnimationOpacity"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_photoChangeHandler","_replacePicCB"],_onAllSkinPartsReady:function(){this._skinParts.changePhoto.addEvent("click",this._photoChangeHandler)
},render:function(){this._data.removeEvent(Constants.DataEvents.DATA_CHANGED,this._onDataChange);
var f=this.injects().Utils.convertFromHtmlText(this._data.get("title"));
this._skinParts.titleInput.set("value",f);
this._bindInputToDataField(this._skinParts.titleInput,"title",false,100);
var e=this.injects().Utils.convertFromHtmlText(this._data.get("description"));
this._skinParts.descriptionInput.set("value",e);
this._bindInputToDataField(this._skinParts.descriptionInput,"description",false,1000);
if(this._image){this._image.dispose()
}var d=this.injects().Components.createComponent("mobile.core.components.Image",this._skin.imageSkinClassName,this._data,{width:7.2,height:7.2,unit:"em",align:"center",valign:"center",cropMode:"full"},null);
this._image=d;
d.insertInto(this._skinParts.imageHolder,"top")
},_photoChangeHandler:function(){W.EditorDialogs.openMediaDialog(this._replacePicCB,false,"Photos",["UserMedia","Photos"])
},_replacePicCB:function(j){var g=this._image.getLogic().getDataItem();
var k=g.getData();
for(var h in j){if(!g.getMeta("isPreset")&&(h=="title"||h=="description")){continue
}k[h]=j[h]
}var i=k.title;
this._skinParts.titleInput.set("value",i);
var l=k.description;
this._skinParts.descriptionInput.set("value",l);
g.fireDataChangeEvent()
},getAcceptableDataTypes:function(){return["Image"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.ImageListDataPanel",imports:["mobile.editor.components.FancyItem"],skinParts:{itemsContainer:{type:"htmlElement"},addImageButton:{type:"htmlElement"},newGallerySplashScreen:{type:"htmlElement"}},Class:{Extends:"mobile.editor.components.editpanels.BaseListDataPanel",_states:["presetData","realData"],Binds:["_splashScreenClick","_addImagesToPresetGallery","addImages"],render:function(){if(!this._hasRenderData()){this._showNewGallerySplashScreen()
}},_getRenderData:function(){if(!this._hasRenderData()){return null
}return{itemsLogicName:"mobile.editor.components.editpanels.ImageItemDataPanel",itemsDataFieldName:"items",enableHide:false,enableDelete:true}
},getFocusNode:function(){if(this.getState()=="presetData"){return this._skinParts.newGallerySplashScreen||this._view
}else{this.parent()
}},_onAllSkinPartsReady:function(c){var d=c.addImageButton;
d.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","ADD_ANOTHER_IMAGE"));
d.addEvent("click",function(){this.injects().EditorDialogs.openMediaDialog(this.addImages,true,"Photos",["UserMedia","Photos"])
}.bind(this));
c.newGallerySplashScreen.addEvent("click",this._splashScreenClick)
},_showNewGallerySplashScreen:function(){this.setState("presetData")
},_splashScreenClick:function(){this.injects().EditorDialogs.openMediaDialog(this._addImagesToPresetGallery,true,"Photos",["UserMedia","Photos"])
},_addImagesToPresetGallery:function(c){if(c.length>0){this._data.setMeta("isPreset",false);
var d=this._data.get("items");
d.empty();
this.addImages(c);
this.setState("realData")
}},addImages:function(g){for(var h=0;
h<g.length;
h++){var e=this._getDataManager().addDataItemWithUniqueId("image",g[h]);
e.dataObject.setMeta("isPreset",true);
var f=this._data.get("items");
f.push("#"+e.id)
}this._data.fireDataChangeEvent()
},getAcceptableDataTypes:function(){return["ImageList"]
},_hasRenderData:function(){var c=this._data;
var d=c?c.get("items"):null;
return(c&&(!c.getMeta("isPreset"))&&d&&d.length>0)
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.LinkItemDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{icon:{type:"htmlElement"},titleInput:{type:"htmlElement",highlight:"label",highlightAnimation:"highlightAnimationOpacity",focus:true},contentInput:{type:"htmlElement",highlight:"view",highlightAnimation:"highlightAnimationOpacity"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onFieldFocus","_onFieldFocusOut"],initialize:function(f,e,d){this.parent(f,e,d);
this.previewSkinContainer=d.previewSkinContainer
},render:function(){this._data.removeEvent(Constants.DataEvents.DATA_CHANGED,this._onDataChange);
var e=this.injects().Theme.getProperty("CONTACT_DIRECTORY");
var f=e+this.injects().LinkTypes.getLinkIcon(this._data.get("linkType"));
this._skinParts.icon.set("src",f);
if(this._data.getMeta("isPreset")){this._skinParts.contentInput.set("value",this.injects().Resources.get("EDITOR_LANGUAGE",this._data.get("linkType")+"_TARGET_PRESET_TEXT"))
}else{var h=this.injects().Utils.convertFromHtmlText(this._data.get("target"));
this._skinParts.contentInput.set("value",h)
}var g=this.injects().Utils.convertFromHtmlText(this._data.get("text"));
this._skinParts.titleInput.set("value",g)
},_onAllSkinPartsReady:function(c){var d=(this._data.get("linkType")=="CALL")?15:200;
this._bindInputToDataField(c.titleInput,"text",false,100);
this._bindInputToDataField(c.contentInput,"target",true,d);
c.contentInput.addEvent("focus",this._onFieldFocus);
c.contentInput.addEvent("blur",this._onFieldFocusOut)
},_onFieldFocus:function(){if(this._data.getMeta("isPreset")){this._skinNextInputChange("target");
this._skinParts.contentInput.set("value","")
}},_onFieldFocusOut:function(){if(this._data.getMeta("isPreset")){this._skinParts.contentInput.set("value",this.injects().Resources.get("EDITOR_LANGUAGE",this._data.get("linkType")+"_TARGET_PRESET_TEXT"))
}},getAcceptableDataTypes:function(){return["Link"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.LinkListDataPanel",imports:["mobile.editor.components.FancyItem"],skinParts:{itemsContainer:{type:"htmlElement"},addLinkButton:{type:"htmlElement",autoBindDictionary:"ADD_ANOTHER_LINK"},newLinkListSplashScreen:{type:"htmlElement"},controls:{type:"htmlElement"}},Class:{Extends:"mobile.editor.components.editpanels.BaseListDataPanel",Binds:["_splashScreenClick","addLink"],_states:{"default":["idle","collapsed","presetData"],subType:["CONTACT","NETWORKS","EXTERNAL_LINKS"]},render:function(){if(this._hasRenderData()){this._skinParts.newLinkListSplashScreen.removeProperty("tabIndex");
this.setState("collapsed")
}else{this._skinParts.newLinkListSplashScreen.setProperty("tabIndex",0);
this._showNewLinkListSplashScreen()
}},_getRenderData:function(){if(this._hasRenderData()){return{itemsLogicName:"mobile.editor.components.editpanels.LinkItemDataPanel",itemsDataFieldName:"items",enableHide:false,enableDelete:true}
}return null
},_showNewLinkListSplashScreen:function(){this.setState("presetData");
this.setState(this._data.get("subType"),"subType");
this._skinParts.newLinkListSplashScreen.addEvent("click",this._splashScreenClick)
},_splashScreenClick:function(){this.injects().EditorDialogs.openAddLinkDialog(this.addLink,this._data.get("subType"))
},_onAllSkinPartsReady:function(){this._skinParts.addLinkButton.addEvent("click",function(){this.injects().EditorDialogs.openAddLinkDialog(this.addLink,this._data.get("subType"))
}.bind(this))
},addLink:function(f){var d=this._data.getDataManager().addDataItemWithUniqueId("contactLink",f);
var e=this._data.get("items");
e.push("#"+d.id);
this._data.fireDataChangeEvent()
},getAcceptableDataTypes:function(){return["LinkList"]
},_hasRenderData:function(){var c=this._data;
var d;
return(c&&(d=c.get("items"))&&d.length>0)
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.MenuItemDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{titleInput:{type:"htmlElement",highlight:"label",highlightAnimation:"highlightAnimationOpacity"},fancyContainer:{type:"htmlElement"}},componentParts:{fancyShmancy:{type:"mobile.editor.components.FancyItem",skin:"mobile.editor.skins.FancyItemSkin"}},Class:{Extends:"mobile.core.components.base.BaseComponent",render:function(){var f=(this._data.getType()=="Page")?"title":"text";
var h=this.injects().Utils.convertFromHtmlText(this._data.get(f));
var i=this._skinParts.titleInput;
if(h==i.get("value")){return
}if(!this._wasFirstRender){this._wasFirstRender=true;
i.set("value",h);
var g=(this._data.getType()=="Page")?45:45;
this._bindInputToDataField(i,f,true,g);
var j=false;
i.addEvent("blur",function(){if(i.get("value").length<2){i.set("value",this.injects().Resources.get("EDITOR_LANGUAGE","min_2_chars"));
this._data.set(f,this.injects().Resources.get("EDITOR_LANGUAGE","empty_title_text"));
j=true
}}.bind(this));
i.addEvent("focus",function(){if(j){i.set("value","");
this._data.set(f,"");
j=false
}}.bind(this))
}else{i.set("value",this._data.get("title"))
}},getAcceptableDataTypes:function(){return["Page","Link"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.PageTitleDataPanel",imports:["mobile.editor.components.FancyItem"],traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{titleContainer:{type:"htmlElement"},titleInput:{type:"htmlElement",highlightAnimation:"highlightAnimationOpacity",focus:true},fancy:{type:"mobile.editor.components.FancyItem"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["showHideToggleHandler"],initialize:function(f,d,e){this.parent(f,d,e);
this._showingHelpText=false
},render:function(){if(!this._data){return
}var d=this._skinParts.titleInput;
var e=this._data.get("title");
var f=this.injects().Utils.convertFromHtmlText(e);
if(f==d.get("value")){return
}d.set("value",f)
},_onAllSkinPartsReady:function(d){var e=this._skinParts.fancy;
e.createGui({dataPanel:this,showHideToggleHandler:this.showHideToggleHandler,isHidden:this._data.get("hideTitle")},this._skinParts.titleContainer);
e.getViewNode().insertInto(d.view);
var f=d.titleInput;
this._bindInputToDataField(f,"title",true,45);
f.addEvent("blur",function(){if(f.get("value").length<2){f.set("value",this.injects().Resources.get("EDITOR_LANGUAGE","min_2_chars"));
this._data.set("title",this.injects().Resources.get("EDITOR_LANGUAGE","empty_title_text"));
this._showingHelpText=true
}}.bind(this));
f.addEvent("focus",function(){if(this._showingHelpText){f.set("value","");
this._data.set("title","");
this._showingHelpText=false
}}.bind(this))
},showHideToggleHandler:function(b){this._skipRender=true;
this._data.set("hideTitle",b);
this._skipRender=false
},getAcceptableDataTypes:function(){return["Page"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.ParagraphDataPanel",imports:["mobile.editor.components.FancyItem"],skinParts:{wysiwygArea:{type:"htmlElement",highlight:["richTextContainer","description"],highlightAnimation:"highlightAnimationOpacity",focus:true},fancyItem:{type:"mobile.editor.components.FancyItem"}},traits:["mobile.editor.components.traits.DataPanel"],Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onFocus","_onEditorAdded","_onEditorFocus","_onInputChange"],initialize:function(f,e,d){this.parent(f,e,d);
d=d||{};
this.skipFancy=d.skipFancy||false
},render:function(){this._data.removeEvent(Constants.DataEvents.DATA_CHANGED,this._onDataChange);
var b=this._data.getType()=="Service"?"description":"text";
this._skinParts.wysiwygArea.set("html",this._data.get(b));
if(!this._guiCreated){this._createGui();
this._guiCreated=true
}},_createGui:function(){this._oldContentResult=this._getText();
if(!this.skipFancy){var d=this._skinParts.fancyItem;
d.createGui({dataPanel:this},this._skinParts.fancyContent)
}var c=this.injects().Utils.getUniqueId("wysiwyg-editor-");
this._skinParts.wysiwygArea.set("id",c);
if(this._skinParts.view.addEventListener){this._skinParts.view.addEventListener("focus",this._onFocus,true)
}else{this._skinParts.view.attachEvent("onfocusin",this._onFocus)
}},_getText:function(){var b=this._getDataTypeInputFieldname(this._data.getType());
return this._data.get(b).replace(/\n/g,"<br/>")
},_setText:function(d){d=d.replace(/\n/g,"");
d=W.Utils.sanitizeUnicode(d);
var c=this._getDataTypeInputFieldname(this._data.getType());
return this._data.set(c,d)
},_getDataTypeInputFieldname:function(b){return b=="Service"?"description":"text"
},_onFocus:function(c){var d=this._skinParts.wysiwygArea.get("id");
if(!this._editorInstance){if(tinyMCE.selectedInstance){tinyMCE.selectedInstance.remove()
}tinyMCE.onAddEditor.remove(this._onEditorAdded);
tinyMCE.onAddEditor.add(this._onEditorAdded);
tinyMCE.execCommand("mceAddControl",true,d)
}else{tinymce.execCommand("mceFocus",false,d);
this._view.fireEvent(c)
}},_onEditorAdded:function(){var d=this._skinParts.wysiwygArea.get("id");
var c=tinyMCE.getInstanceById(d);
if(c!==null){this._editorInstance=c;
tinyMCE.onAddEditor.remove(this._onEditorAdded);
c.onInit.add(function(){var b=this._getDataTypeInputFieldname(this._data.getType());
this._oldContentResult=this._data.get(b);
c.setContent(this._oldContentResult);
var a=c.dom.doc.body;
a.style.height="100%";
if(a.addEventListener){a.addEventListener("click",this._onEditorFocus,true);
a.addEventListener("focus",this._onEditorFocus,true)
}else{a.attachEvent("click",this._onEditorFocus);
a.attachEvent("onfocusin",this._onEditorFocus)
}tinymce.execCommand("mceFocus",false,d)
}.bind(this));
c.onKeyUp&&c.onKeyUp.add(this._onInputChange);
c.onKeyDown&&c.onKeyDown.add(this._onInputChange);
c.onPaste&&c.onPaste.add(this._onInputChange);
c.onChange&&c.onChange.add(this._onInputChange);
c.onUndo&&c.onUndo.add(this._onInputChange);
c.onRedo&&c.onRedo.add(this._onInputChange);
c.onClick&&c.onClick.add(function(){}.bind(this));
c.onRemove&&c.onRemove.add(function(){delete this._editorInstance
}.bind(this))
}},_onEditorFocus:function(f){var e={target:this._skinParts.wysiwygArea};
this._skinParts.fancyItem.getViewNode().fireEvent("click",e);
if(this._view.dispatchEvent){var d=document.createEvent("HTMLEvents");
d.initEvent("focus",true,false);
this._view.dispatchEvent(d)
}else{this._view.fireEvent(f)
}},_showHideToggleHandler:function(b){this._data.setMeta("isHidden",b)
},_onInputChange:function(o,q){if(q&&q.type=="keydown"){if(q.keyCode==9){var m=$$("input,textarea,[tabIndex],#"+this._skinParts.wysiwygArea.getProperty("id")).filter(function(a){return(a.isVisible()||a===this._skinParts.wysiwygArea)
},this);
var e=m.indexOf(this._skinParts.wysiwygArea);
if(e!=-1){this._skinParts.wysiwygArea.focus();
var l=q.shiftKey?-1:1;
var p=(e+l)%m.length;
var r=m[p];
r.focus();
this.injects().Utils.callLater(function(a){a.focus()
},[r],this,1)
}}}else{var k=this._editorInstance.getContent();
if(k.length>=7800){k=this._oldContentResult;
try{this._editorInstance.setContent(this._oldContentResult)
}catch(n){}this._setCursor(this._editorInstance,this._editorInstance.getDoc().body,0);
this.injects().Utils.errorPopup(this.injects().Resources.get("EDITOR_LANGUAGE","ERROR_TITLE_TO_LONG"),this.injects().Resources.get("EDITOR_LANGUAGE","ERROR_CONTENT_TO_LONG"));
this._editorInstance.getDoc().body.blur()
}k=this._tempRemoveColorStyle(k);
this._oldContentResult=k;
this._setText(k)
}},_tempRemoveColorStyle:function(b){return b.replace(/(<[^>]*style="[^"]*[^-])(color:[\s]?#?[0-9A-Fa-f]{6}[;]?[\s]?)/gi,"$1")
},_setCursor:function(i,p,k){var l=i.getDoc();
if(typeof l.createRange!="undefined"){var j=l.createRange();
j.selectNodeContents(p);
j.collapse(k);
var m=l.defaultView||l.parentWindow;
var n=m.getSelection();
n.removeAllRanges();
n.addRange(j)
}else{if(typeof l.body.createTextRange!="undefined"){var o=l.body.createTextRange();
o.moveToElementText(p);
o.collapse(k);
o.select()
}}},getAcceptableDataTypes:function(){return["Text","RichText","Service"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.PhotoDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{inputArea:{type:"htmlElement"},titleInput:{type:"htmlElement",highlightAnimation:"highlightAnimationOpacity"},descriptionInput:{type:"htmlElement",highlightAnimation:"highlightAnimationOpacity"},fancy:{type:"mobile.editor.components.FancyItem"},imagePanel:{type:"mobile.editor.components.editpanels.ImageDataPanel",dataRefField:"*",argObject:{showSizeControls:true,showDeleteButton:false},hookMethod:"_createImageArgs"},newPhotoSplashScreen:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_onSplashClick","_onDelPhoto"],_createImageArgs:function(b){b.argObject.previewComponent=this._previewComponent;
return b
},render:function(){var c,d;
if(!this.runOnce){this.runOnce=true;
this._skinParts.fancy.createGui({dataPanel:this},[this._skinParts.imagePanel.getViewNode(),this._skinParts.inputArea]);
this._bindInputToDataField(this._skinParts.titleInput,"title",false,100);
this._bindInputToDataField(this._skinParts.descriptionInput,"description",false,1000)
}if(this._data.getMeta("isPreset")){this._skinParts.fancy.collapse();
this._skinParts.newPhotoSplashScreen.uncollapse();
this._skinParts.newPhotoSplashScreen.setProperty("tabIndex",0);
this._skinParts.newPhotoSplashScreen.addEvent("click",this._onSplashClick)
}else{this._skinParts.fancy.uncollapse();
this._skinParts.newPhotoSplashScreen.collapse();
this._skinParts.newPhotoSplashScreen.removeProperty("tabIndex");
this._skinParts.newPhotoSplashScreen.removeEvent("click",this._onSplashClick);
c=this.injects().Utils.convertFromHtmlText(this._data.get("title"));
d=this.injects().Utils.convertFromHtmlText(this._data.get("description"));
this._skinParts.titleInput.set("value",c);
this._skinParts.descriptionInput.set("value",d)
}},_onSplashClick:function(){this._skinParts.imagePanel.fireShowDialogEvent()
},_onDelPhoto:function(){},getAcceptableDataTypes:function(){return["Image"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.RichTextImageDataPanel",imports:["mobile.editor.components.FancyItem"],skinParts:{textDataPanel:{type:"htmlElement"},imageDataPanel:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",render:function(){var e=this._data.get("text");
var d=this.getComponentId();
this.injects().Preview.getPreviewManagers().Data.getDataByQuery(e,function(a){this._textDataPanelSkinContainer=this.injects().Components.createComponent("mobile.editor.components.editpanels.ParagraphDataPanel","mobile.editor.skins.editpanels.ParagraphDataPanelSkin",a,{},undefined,function(b){}.bind(this),d+"_text");
this._textDataPanelSkinContainer.insertInto(this._skinParts.textDataPanel)
}.bind(this));
var f=this._data.get("image");
this.injects().Preview.getPreviewManagers().Data.getDataByQuery(f,function(b){var a=this.injects().Components;
var c={standAlone:false,imagePositionHandler:this._onImagePositionChange.bind(this)};
this._imageDataPanelSkinContainer=a.createComponent("editor.components.ImageDataPanel","skin.editor.ImageDataPanelSkin",b,c,undefined,undefined,d+"_image");
this._imageDataPanelSkinContainer.insertInto(this._skinParts.imageDataPanel)
}.bind(this))
},_onImagePositionChange:function(b){this._setDataField("imagePosition",b)
},getAcceptableDataTypes:function(){return["RichTextImage"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.ServiceItemDataPanel",skinParts:{titleInput:{type:"htmlElement",highlight:"label",highlightAnimation:"highlightAnimationOpacity",autoBindData:"title"},descriptionInput:{type:"htmlElement",highlight:"description",highlightAnimation:"highlightAnimationOpacity",autoBindData:"description"},inputArea:{type:"htmlElement"},imageDiv:{type:"htmlElement"},componentTitle:{type:"htmlElement"},deletePhoto:{type:"htmlElement"},changePhoto:{type:"htmlElement"},addPhoto:{type:"htmlElement",autoBindDictionary:"addPic"}},traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],Class:{Extends:"mobile.core.components.base.BaseComponent",_states:["showPhoto","hidePhoto"],Binds:["_toggleHide","_onDelPhoto","_onChangePhoto","_onImageData","_setImageVisible","_onInputFocus","_onInputFocusOut","_replacePicCB","_onDescriptionFocus","_onDescriptionFocusOut"],initialize:function(f,e,d){this.parent(f,e,d);
this._allPartsReady=false
},_prepareForRender:function(){if(this._allPartsReady){return true
}var d=this.getRawData();
if(d&&d.image){var c=d.image;
this.injects().Preview.getPreviewManagers().Data.getDataByQuery(c,function(a){this._onImageData(a);
this._imageSkinContainer=this.injects().Components.createComponent("mobile.core.components.Image","mobile.core.skins.ImageSkin",a,{width:100,height:100,unit:"px",align:"center",valign:"middle",cropMode:"full"},this._onAllPartWixified.bind(this))
}.bind(this))
}else{this._allPartsReady=true
}return this._allPartsReady
},_onDelPhoto:function(){if(!this._imageData){return
}this._imageData.setMeta("isHidden",true);
this._imageData.fireDataChangeEvent()
},_onChangePhoto:function(){W.EditorDialogs.openMediaDialog(this._replacePicCB,false,"Photos",["UserMedia","Photos"])
},_replacePicCB:function(f){var d=this._imageData.getData();
for(var e in f){d[e]=f[e]
}this._imageData.setMeta("isHidden",false);
this._imageData.fireDataChangeEvent()
},_onAllSkinPartsReady:function(b){this._bindInputToDataField(b.titleInput,"title",false,100);
this._bindInputToDataField(this._skinParts.descriptionInput,"description",false,1000);
b.changePhoto.addEvent("click",this._onChangePhoto);
b.deletePhoto.addEvent("click",this._onDelPhoto);
b.addPhoto.addEvent("click",this._onChangePhoto)
},_onImageData:function(b){this._imageData=b;
this._imageData.addEvent(Constants.DataEvents.DATA_CHANGED,this._setImageVisible);
this._setImageVisible()
},_onInputFocus:function(){if(!this._data.getMeta("isPreset")){return
}this._skinParts.titleInput.set("value","")
},_onInputFocusOut:function(){if(!this._data.getMeta("isPreset")){return
}this._skinParts.titleInput.set("value",this.injects().Resources.get("EDITOR_LANGUAGE","serviceTitlePresetText"))
},_onDescriptionFocus:function(){if(!this._data.getMeta("isPreset")){return
}this._skinParts.titleInput.set("value","")
},_onDescriptionFocusOut:function(){if(!this._data.getMeta("isPreset")){return
}this._skinParts.descriptionInput.set("value",this.injects().Resources.get("EDITOR_LANGUAGE","serviceDescriptionPresetText"))
},_setImageVisible:function(){if(this._imageData.getMeta("isHidden")){this.setState("hidePhoto")
}else{this.setState("showPhoto")
}},_onAllPartWixified:function(b){this._imageSkinContainer.insertInto(this._skinParts.imageDiv);
this._allPartsReady=true;
this._renderIfReady()
},_toggleHide:function(){this._data.removeEvent(Constants.DataEvents.DATA_CHANGED,this._onDataChange);
var b=this._data.getMeta("isHidden");
this._data.setMeta("isHidden",!b);
this._data.fireDataChangeEvent();
this._data.addEvent(Constants.DataEvents.DATA_CHANGED,this._onDataChange)
},getAcceptableDataTypes:function(){return["Service"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.ServiceListDataPanel",skinParts:{itemsContainer:{type:"htmlElement"},addLinkButton:{type:"htmlElement"},componentTitle:{type:"htmlElement"},newServiceSplashScreen:{type:"htmlElement"}},Class:{Extends:"mobile.editor.components.editpanels.BaseListDataPanel",_states:["presetData","realData"],Binds:["_addService","_addFirstService","_moveItem"],render:function(){if(!this._hasRenderData()){this.setState("presetData");
var e=this.injects().Theme.getProperty("THEME_DIRECTORY");
var f="service_empty.jpg";
var h=this._data.get("serviceType");
switch(h){case"events":f="events_empty.jpg";
break;
case"collection":f="collection_empty.jpg";
break;
case"restaurant":f="restaurant_empty.jpg";
break
}var g="url('"+e+"preset_splash_images/"+f+"') no-repeat";
this._skinParts.newServiceSplashScreen.setStyle("background",g)
}else{this.setState("realData")
}},_getRenderData:function(){if(this._hasRenderData()){return{itemsLogicName:"mobile.editor.components.editpanels.ServiceItemDataPanel",itemsDataFieldName:"items",enableHide:false,enableDelete:true}
}return null
},_onAllSkinPartsReady:function(c){var d="Add an Item";
c.componentTitle.set("html","");
c.addLinkButton.set("html",this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_ADD_ANOTHER_LINK"));
c.addLinkButton.addEvent("click",this._addService);
c.newServiceSplashScreen.addEvent("click",this._addFirstService)
},_addFirstService:function(){this._data.setMeta("isPreset",false);
this._data.get("items").empty();
this._addService()
},_addService:function(){if(tinyMCE.selectedInstance){tinyMCE.selectedInstance.remove()
}var o=this._data.getDataManager();
var p=this._data.get("serviceType");
var j=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_TITLE_1");
var l=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_DESCRIPTION_1");
var n=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_DEFAULT_IMAGE_ID_1");
switch(p){case"collection":j=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_TITLE_1");
l=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_DESCRIPTION_1");
n=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_COLLECTION_DEFAULT_IMAGE_ID_1");
break;
case"events":j=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_TITLE_1");
l=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_DESCRIPTION_1");
n=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_EVENTS_DEFAULT_IMAGE_ID_1");
break;
case"restaurant":j=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_TITLE_1");
l=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_DESCRIPTION_1");
n=this.injects().Resources.get("EDITOR_LANGUAGE","SERVICES_RESTAURANT_DEFAULT_IMAGE_ID_1");
break
}var q={uri:n,title:"",description:"",width:"93",height:"128",type:"Image",metaData:{isPreset:true}};
var m="#"+o.addDataItemWithUniqueId("Service_Image",q).id;
var k={title:j,description:l,image:m,type:"Service",metaData:{isPreset:true}};
var r="#"+o.addDataItemWithUniqueId("Service",k).id;
this._data.get("items").push(r);
this._data.fireDataChangeEvent()
},_moveItem:function(f,e){if(tinyMCE.selectedInstance){var d=tinyMCE.selectedInstance.id;
tinyMCE.selectedInstance.remove();
this.parent(f,e);
setTimeout(function(){$(d).getParent("[comp=mobile.editor.components.editpanels.ParagraphDataPanel]").fireEvent("focus")
},50)
}else{this.parent(f,e)
}},getAcceptableDataTypes:function(){return["ServiceList"]
},_hasRenderData:function(){var c=this._data;
var d=c?c.get("items"):null;
return(c&&(!c.getMeta("isPreset"))&&d&&d.length>0)
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.SiteMenuDataPanel",imports:[],skinParts:{itemsContainer:{type:"htmlElement"}},Class:{Extends:"mobile.editor.components.editpanels.BaseListDataPanel",_getRenderData:function(){return{itemsLogicName:"mobile.editor.components.editpanels.MenuItemDataPanel",itemsDataFieldName:"pages",enableHide:true,enableDelete:true}
},_onItemDelete:function(b){this.injects().Editor.deletePage(b.getDataItem())
},_getDataManager:function(){return this.injects().Preview.getPreviewManagers().Data
},getAcceptableDataTypes:function(){return["Document"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.TwitterFollowDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{fancyContainer:{type:"mobile.editor.components.FancyItem"},inputArea:{type:"htmlElement"},icon:{type:"htmlElement"},userToFollowInput:{type:"htmlElement",highlight:"label",highlightAnimation:"highlightAnimationOpacity",focus:true},showCountDropDown:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_updateShowCount","_onFocusUserToFollowInput"],initialize:function(f,e,d){this.parent(f,e);
this.previewSkinContainer=d.previewSkinContainer
},render:function(){if(!this.runOnce){this.runOnce=true;
this._skinParts.fancyContainer.createGui({dataPanel:this},[this._skinParts.icon,this._skinParts.inputArea])
}this._data.removeEvent(Constants.DataEvents.DATA_CHANGED,this._onDataChange);
var c=this.injects().Theme.getProperty("CONTACT_DIRECTORY");
var d=c+"twitter_follow.png";
this._skinParts.icon.set("src",d);
if(this._data.get("accountToFollow")===""){this._skinParts.userToFollowInput.set("value",this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_FOLLOW_USER_TO_FOLLOW"));
this._skinParts.userToFollowInput.style.color="gray";
this._skinParts.userToFollowInput.style.fontStyle="italic"
}else{this._skinParts.userToFollowInput.set("value",this._data.get("accountToFollow"))
}this._bindInputToDataField(this._skinParts.userToFollowInput,"accountToFollow",true,100);
this._addEventsToProperties();
this._setDropDownLabels()
},_setDropDownLabels:function(){this._skinParts.showCountDropDown.getElementById("yes").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_FOLLOW_SHOW_COUNT_YES"));
this._skinParts.showCountDropDown.getElementById("no").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_FOLLOW_SHOW_COUNT_NO"))
},_addEventsToProperties:function(){this._skinParts.showCountDropDown.addEvent("change",this._updateShowCount);
this._skinParts.userToFollowInput.addEvent("focus",this._onFocusUserToFollowInput)
},_updateShowCount:function(){var b=this._skinParts.showCountDropDown.get("value");
this._previewComponent.setComponentProperty("showCount",b)
},_onFocusUserToFollowInput:function(){var b=this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_FOLLOW_USER_TO_FOLLOW");
this._switchInputTextToEditMode(this._skinParts.userToFollowInput,b)
},_switchInputTextToEditMode:function(d,e){var f=d.get("value");
if(f==e){d.set("value","");
d.style.color="black";
d.style.fontStyle="normal"
}},getAcceptableDataTypes:function(){return["TwitterFollow"]
}}});
W.Components.newComponent({name:"mobile.editor.components.editpanels.TwitterTweetDataPanel",traits:["mobile.core.components.traits.InputFieldEvents","mobile.editor.components.traits.DataPanel"],skinParts:{fancyContainer:{type:"mobile.editor.components.FancyItem"},inputArea:{type:"htmlElement"},icon:{type:"htmlElement"},defaultTextInput:{type:"htmlElement",highlight:"label",highlightAnimation:"highlightAnimationOpacity",focus:true},userToFollowInput:{type:"htmlElement",highlight:"label",highlightAnimation:"highlightAnimationOpacity",focus:true},countPositionDropDown:{type:"htmlElement"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_updateCountPosition","_onFocusDefaultTextInput","_onFocusUserToFollowInput"],initialize:function(f,e,d){this.parent(f,e);
this.previewSkinContainer=d.previewSkinContainer
},render:function(){if(!this.runOnce){this.runOnce=true;
this._skinParts.fancyContainer.createGui({dataPanel:this},[this._skinParts.icon,this._skinParts.inputArea])
}this._data.removeEvent(Constants.DataEvents.DATA_CHANGED,this._onDataChange);
var c=this.injects().Theme.getProperty("CONTACT_DIRECTORY");
var d=c+"twitter_tweet.png";
this._skinParts.icon.set("src",d);
if(this._data.get("defaultText")===""){this._skinParts.defaultTextInput.set("value",this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_TWEET_TEXT_DEFAULT"));
this._skinParts.defaultTextInput.style.color="gray";
this._skinParts.defaultTextInput.style.fontStyle="italic"
}else{this._skinParts.defaultTextInput.set("value",this._data.get("defaultText"))
}this._bindInputToDataField(this._skinParts.defaultTextInput,"defaultText",true,100);
if(this._data.get("accountToFollow")===""){this._skinParts.userToFollowInput.set("value",this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_TWEET_USER_TO_FOLLOW"));
this._skinParts.userToFollowInput.style.color="gray";
this._skinParts.userToFollowInput.style.fontStyle="italic"
}else{this._skinParts.userToFollowInput.set("value",this._data.get("accountToFollow"))
}this._bindInputToDataField(this._skinParts.userToFollowInput,"accountToFollow",true,100);
this._addEventsToProperties();
this._setDropDownLabels()
},_setDropDownLabels:function(){this._skinParts.countPositionDropDown.getElementById("none").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_TWEET_COUNT_NONE"));
this._skinParts.countPositionDropDown.getElementById("vertical").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_TWEET_COUNT_VERTICAL"));
this._skinParts.countPositionDropDown.getElementById("horizontal").set("text",this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_TWEET_COUNT_HORIZONTAL"))
},_addEventsToProperties:function(){this._skinParts.countPositionDropDown.addEvent("change",this._updateCountPosition);
this._skinParts.defaultTextInput.addEvent("focus",this._onFocusDefaultTextInput);
this._skinParts.userToFollowInput.addEvent("focus",this._onFocusUserToFollowInput)
},_updateCountPosition:function(){var b=this._skinParts.countPositionDropDown.get("value");
this._previewComponent.setComponentProperty("dataCount",b)
},_onFocusDefaultTextInput:function(){var b=this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_TWEET_TEXT_DEFAULT");
this._switchInputTextToEditMode(this._skinParts.defaultTextInput,b)
},_onFocusUserToFollowInput:function(){var b=this.injects().Resources.get("EDITOR_LANGUAGE","TWITTER_TWEET_USER_TO_FOLLOW");
this._switchInputTextToEditMode(this._skinParts.userToFollowInput,b)
},_switchInputTextToEditMode:function(d,e){var f=d.get("value");
if(f==e){d.set("value","");
d.style.color="black";
d.style.fontStyle="normal"
}},getAcceptableDataTypes:function(){return["TwitterTweet"]
}}});
W.Components.newComponent({name:"mobile.editor.components.internal.EditDesignColorItem",skinParts:{label:{type:"htmlElement"},colorBtn:{type:"mobile.editor.components.ColorButton"}},Class:{Extends:"mobile.core.components.base.BaseComponent",Binds:["_colorChange","_saveStatus","_previewThemePropChange"],initialize:function(f,d,e){this.parent(f,d,e);
this._initColorPropName=e.colorProp;
this._initAllowAlpha=e.allowAlpha;
this.injects().Preview.addEventForPreviewThemePropertyChange(this._previewThemePropChange)
},render:function(){this._skinParts.label.set("html",this.injects().Resources.get("EDITOR_LANGUAGE",this._initColorPropName));
this._originalColor=this.injects().Preview.getPreviewThemeProperty(this._initColorPropName);
this._saveStatus("original");
var b=this._skinParts.colorBtn;
b.setSize("100%","100%");
b.setColor(this._originalColor);
b.enableAlpha(this._initAllowAlpha);
b.setHexDisplay(true)
},_onAllSkinPartsReady:function(c){var d=c.colorBtn;
d.addEvent("change",this._colorChange);
d.addEvent("click",this._saveStatus)
},resetColor:function(){this._skinParts.colorBtn.setColor(this._originalColor);
this._colorChange({cause:"reset",color:this._originalColor})
},_colorChange:function(c){this.injects().Preview.setPreviewThemeProperty(this._initColorPropName,c.color.getRgba());
if(this._initColorPropName=="siteBgColor"){if(c.cause=="select"||c.cause=="temp"){this.injects().Preview.setPreviewThemeProperty("bgType","BG_USES_CUSTOM_COLOR")
}else{var d=(c.cause=="reset")?"original":"init";
this._resetStatus(d)
}}},_saveStatus:function(b){if(this._initColorPropName=="siteBgColor"){b=b||"init";
this["_"+b+"BgColor"]=this.injects().Preview.getPreviewThemeRawProperty("siteBgColor");
this["_"+b+"BgType"]=this.injects().Preview.getPreviewThemeRawProperty("bgType");
this["_"+b+"BgId"]=this.injects().Preview.getPreviewThemeRawProperty("bgId");
this["_"+b+"BgDir"]=this.injects().Preview.getPreviewThemeRawProperty("BG_DIRECTORY")
}},_resetStatus:function(b){if(this._initColorPropName=="siteBgColor"){b=b||"init";
this["_"+b+"BgColor"]&&this.injects().Preview.setPreviewThemeProperty("siteBgColor",new W.Color(this["_"+b+"BgColor"]).getRgba());
this["_"+b+"BgType"]&&this.injects().Preview.setPreviewThemeProperty("bgType",this["_"+b+"BgType"]);
this["_"+b+"BgId"]&&this.injects().Preview.setPreviewThemeProperty("bgId",this["_"+b+"BgId"]);
this["_"+b+"BgDir"]&&this.injects().Preview.setPreviewThemeProperty("BG_DIRECTORY",this["_"+b+"BgDir"])
}},_previewThemePropChange:function(b){if(b.name==this._initColorPropName&&this._skinParts&&this._skinParts.colorBtn&&this._skinParts.colorBtn.setColor){this._skinParts.colorBtn.setColor(b.newVal)
}}}});
W.Components.newComponent({name:"mobile.editor.components.internal.EditDesignStudioItem",skinParts:{label:{type:"htmlElement"},studioBtn:{type:"mobile.editor.components.StudioButton"}},Class:{Extends:"mobile.core.components.base.BaseComponent",initialize:function(f,d,e){this.parent(f,d,e);
this._initPropName=e.valueProp;
this._propType=e.mode;
this._valueChange=this._valueChange.bind(this);
this._previewThemePropChange=this._previewThemePropChange.bind(this);
this.injects().Preview.addEventForPreviewThemePropertyChange(this._previewThemePropChange)
},render:function(){this._skinParts.label.set("html",this.injects().Resources.get("EDITOR_LANGUAGE",this._initPropName));
this._skinParts.studioBtn.setPropertyType(this._propType);
this._originalValue=this.injects().Preview.getPreviewThemeProperty(this._initPropName);
var b=this._skinParts.studioBtn;
b.setValue(this._originalValue);
b.setSize("100%","100%")
},_onAllSkinPartsReady:function(){this._skinParts.studioBtn.addEvent("change",this._valueChange)
},resetValue:function(){this._skinParts.studioBtn.set("value",this._originalValue);
this._valueChange({cause:"reset",value:this._originalValue})
},_valueChange:function(b){this.injects().Preview.setPreviewThemeProperty(this._initPropName,b.value)
},_previewThemePropChange:function(b){if(b.name==this._initPropName&&this._skinParts&&this._skinParts.studioBtn){this._skinParts.studioBtn.setValue(b.newVal)
}}}});
W.Classes.newTrait({name:"mobile.editor.components.traits.DataPanel",trait:{initialize:function(f,e,d){this.setPreviewComponent(d&&d.previewComponent);
this._highlightAnimActiveList={}
},focus:function(){var b=this.getFocusNode();
W.Utils.callLater(function(){try{b.focus()
}catch(a){}},null,this,50)
},setPreviewComponent:function(b){this._previewComponent=b
},highlightPreviewElement:function(g,k){if(!g||!this._previewComponent){return
}g=(g.getLogic)?g.getLogic():g;
var i=Object.keyOf(this._skinParts,g)||"view";
var j=this._skinPartsSchema[i]||{};
var l=this._getPreviewSkinPartName(j.highlight);
var h=this._previewComponent.getSkinPart(l)||this._previewComponent.getViewNode();
k=k||j.highlightAnimation||"noHighlightAnimation";
if(this[k]&&!this._highlightAnimActiveList[l]&&this._previewComponent.getViewNode().isVisible()){this._highlightAnimActiveList[l]=true;
this.injects().Preview.scrollToElement(h);
this[k](h,function(){this._highlightAnimActiveList[l]=false
}.bind(this))
}},_getPreviewSkinPartName:function(g){var h;
if(g){if(typeof g==="string"){h=g
}else{if(g.length==+g.length){for(var e=0,f=g.length;
e<f;
e++){if(this._previewComponent.getSkinPart(g[e])){h=g[e];
break
}}}}}return h||"view"
},noHighlightAnimation:function(d,c){this.injects().Utils.callLater(function(){c&&c()
},null,this,250)
},highlightAnimationBasicBlink:function(C,G){var A;
var y=C.getStyle("color");
var E=C.getStyle("background-color");
var H=new W.Color(y);
var w=H.getInvertColor();
var b=w.getHex();
var v=0.3;
var r=(H.getRed()-w.getRed())*v;
var D=(H.getGreen()-w.getGreen())*v;
var B=(H.getBlue()-w.getBlue())*v;
var F=Math.round(H.getRed()-r);
var x=Math.round(H.getGreen()-D);
var g=Math.round(H.getBlue()-B);
var u=new W.Color(F,g,x);
var z=u.getHex();
A=new Fx.Tween(C,{duration:250,property:"background-color",transition:Fx.Transitions.linear});
A.start(b,z).chain(function(){A.start(z,b).chain(function(){C.setStyle("background-color",E);
G&&G()
}.bind(this))
}.bind(this));
return A
},highlightAnimationOpacity:function(f,g){var h;
var e=f.getStyle("opacity");
if(!e&&e!==0){e=1
}h=new Fx.Tween(f,{duration:250,property:"opacity",transition:Fx.Transitions.linear});
h.start(e,0.3).chain(function(){h.start(0.3,e).chain(function(){g&&g()
}.bind(this))
}.bind(this));
return h
}}});
W.Classes.newTrait({name:"mobile.editor.components.traits.EditorFlowDispatcher",trait:{setEditorFlowCallback:function(b){this._editorFlowCallback=b
},_reportEditorFlowEvent:function(d,c){if(this._editorFlowCallback){this._editorFlowCallback(this,d,c)
}}}});
W.HtmlScriptsLoader.notifyScriptLoad();
/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 404, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_on}", "click", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("on").hide();sym.play();
         // Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("off").show();// Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         //set the value of a Symbol variable
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Text").html("齿轮转起来了");
         
         
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_off}", "click", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("off").hide();// Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("on").show();sym.stop();
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Text").html("齿轮已停止");
         
         
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(420);
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chi}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_text22}", "click", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon}", "click", function(sym, e) {
         sym.getSymbol("text22").play()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon2}", "click", function(sym, e) {
         sym.getSymbol("line").playReverse();// insert code for mouse click here
         sym.getSymbol("block").stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zoom}", "click", function(sym, e) {
         sym.getSymbol("cads").play()// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_icon4}", "click", function(sym, e) {
         sym.getSymbol("block").play();// insert code for mouse click here
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

//=========================================================
   //Edge symbol: 'line'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4117, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_on2}", "click", function(sym, e) {
         sym.stop();
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("on2").hide();// Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("off2").show();
         
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_off2}", "click", function(sym, e) {
         sym.play();
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("off2").hide();// Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("on2").show();
         
         // insert code for mouse click here

      });
      //Edge binding end

   })("line");
   //Edge symbol end:'line'

//=========================================================
   //Edge symbol: 'text2'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.stop();
         
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Untitled-4}", "click", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.playReverse();
         
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3}", "click", function(sym, e) {
         sym.playReverse();// insert code for mouse click here

      });
      //Edge binding end

   })("text2");
   //Edge symbol end:'text2'

//=========================================================
   (function(symbolName) {

   })("Down-level");
   //Edge symbol end:'Down-level'

//=========================================================
   //Edge symbol: 'cads'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cad}", "click", function(sym, e) {
         sym.playReverse();
         // insert code for mouse click here

      });
      //Edge binding end

   })("cads");
   //Edge symbol end:'cads'

//=========================================================
   //Edge symbol: 'block'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.playReverse();
         sym.getComposition().getStage().getSymbol("line").play();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.play();
         sym.getComposition().getStage().getSymbol("line").playReverse();
         
         // insert code here

      });
      //Edge binding end

   })("block");
   //Edge symbol end:'block'

})(jQuery, AdobeEdge, "EDGE-266247688");
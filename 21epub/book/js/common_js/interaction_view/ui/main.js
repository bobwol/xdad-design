define(['jquery','backbone','jquery.nanoscroller','text!interaction_view/template/message.js'],function(){
	var MessageTemplate=require('text!interaction_view/template/message.js');
	return {
	message:function(type,msg,interval){
		if($('body').find('.msg').length==0) $('body').append('<div class="msg"></div>');
		if(!interval)	interval=3000;
		$('.msg').html(_.template(MessageTemplate,{"type":type,"msg":msg}));
		$('.msg').fadeIn();
		setTimeout(function(){
			$('.msg').fadeOut('slow');
			$('.msg').remove();
		}, interval);
	},
	getRequest:function(key) {//return the location ref
	
	   var url = location.search; //获取url中"?"符后的字串
	
	   var theRequest = new Object();
	
	   if (url.indexOf("?") != -1) {
	
	      var str = url.substr(1);
	
	      strs = str.split("&");
	
	      for(var i = 0; i < strs.length; i ++) {
	
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
	
	      }
	
	   }
	
	   if(key) return theRequest[key];
	   else return theRequest;
	
	},
	setscrollnano:function(selector){
			if($(selector).hasClass('nanoscrollbar')) $selector=$(selector);
			else $selector=$(selector).find('.nanoscrollbar');
			if($selector.children('.nano').length==0)
				$selector.wrapInner('<div class="nano"><div class="content"></div></div>');
			$selector.children('.nano').nanoScroller();
			$selector.children('.nano').children('.pane').css({'visibility': 'hidden'});
			$selector.children('.nano').hover(function (){
					$(this).children('.pane').css({'visibility': 'visible'});
				},function (){
					$(this).children('.pane').css({'visibility': 'hidden'});
			});
	},
	deviceType:function(){
		return (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
    },
 	getModelById:function(model,id){
			var returned=null;
			model.icollection.each(function(m){
				if(m.id==id) returned=m;
				var result=interaction_view.getModelById(m,id);
                if(result) returned=result;
			})
			return returned;
	},
	model2collection:function(model,ResultsType){
		if(model.has(ResultsType)){
			model.icollection.add(model.get(ResultsType));
		}
	},
	model2tree:function(model,ResultsType,ChildrenType){
		if(model.has(ResultsType)){
			model.icollection.add(model.get(ResultsType));
			model.icollection.each(function(m){
				if(m.has(ChildrenType)){
					interaction_view.model2tree(m,ChildrenType,ChildrenType);
				}
			})
		}			
	},
	getPageIds:function(){
		var returned=[];
		$('.reveal').find('section').each(function(){
			returned.push($(this).attr('id'));
		})
		return returned;
	}
}
})
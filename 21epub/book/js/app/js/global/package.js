(function(global){
	global.package={
		configure:function(){
			
		},
		init:function(objects){
			var result=[];
			for(obj in objects){
				result.push(portal_url+'app/js/web/'+objects[obj]+'/main.js');		
			}
			return result;			
		},
		object:function(objects){
			var result=[];
			for(obj in objects){
				//result.push(portal_url+'app/js/web/'+objects[obj]+'/main.js');
				result.push(portal_url+'app/js/web/'+objects[obj]+'/template.js');
				result.push(portal_url+'app/js/web/'+objects[obj]+'/data.js');
				result.push(portal_url+'app/js/web/'+objects[obj]+'/model.js');
				result.push(portal_url+'app/js/web/'+objects[obj]+'/event.js');			
			}
			return result;
		},
		main:function(mains){
			var result=[];
			for(obj in mains){
				result.push(portal_url+'app/js/web/main/'+mains[obj]+'/main.js');
				result.push(portal_url+'app/js/web/main/'+mains[obj]+'/event.js');			
			}
			return result;		
		},
		interaction_base:function(){
			var result=[];
			result.push(portal_url+'common_js/interaction/main.js');
			result.push(portal_url+'common_js/interaction/template.js');
			result.push(portal_url+'common_js/interaction/model.js');
			result.push(portal_url+'common_js/interaction/plonejs.js');
			result.push(portal_url+'common_js/interaction/interaction.js');
			return result;
		},
		interaction:function(models){
			var result=[];
			for(obj in models){
				result.push(portal_url+'common_js/interaction/model/'+models[obj]+'.js');				
			}
			return result;
		},
		tinymce:function(){
			var result=[];
			result.push(portal_url+'common_js/tiny_mce/tiny_mce_src.js');
			return result;
		}
	}
})(global);
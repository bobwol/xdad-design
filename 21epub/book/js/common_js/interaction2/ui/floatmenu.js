define(['jquery','underscore','text!interaction/template/floatmenu.js','text!interaction/template/contextmenu.js'],function(){
	var pagemenuT=require('text!interaction/template/floatmenu.js');
	var contextmenuT=require('text!interaction/template/contextmenu.js')
	$(document).on('mousedown',function(){
		floatmenu.hide();
	})
	$('#interactionEditor').on('contextmenu',function(event,ui){
		if(ctrlkey){
			event.preventDefault();
			return false;
		}
		else if($(event.target).attr('id')=='interaction-area'||$(event.target).attr('id')=='animationbk'||$(event.target).is('img.animationbackground')){
			if(event.which==3){
				interaction.floatmenu.collection=null;
				interaction.floatmenu.ids=null;
				floatmenu.showcontextmenu(event.pageX,event.pageY,'overlay');
				//event.stopPropagation();
			}
		}
		event.preventDefault();
	})
	$('.doc-layout-left .navi').on('contextmenu',function(event,ui){
		if($(event.target).is('.navi .nano > .content')) {
			interaction.floatmenu.collection=null;
			interaction.floatmenu.ids=null;
			floatmenu.showcontextmenu(event.pageX,event.pageY,'page');
			event.preventDefault();
		}
	})
	var floatmenu={
		show:function(collection,ids,x,y){
			if(!ids&&ids.length==0) return;
			$('.pagemenu').remove();
			var model=collection.get(ids[0]);
			interaction.floatmenu.collection=collection;
			interaction.floatmenu.ids=ids;
			$('body').append(_.template(pagemenuT,model.toJSON()));
			$('.pagemenu').css('left',x);
			$('.pagemenu').css('top',y);
			floatmenu.bindactions();
			
		},
		hide:function(){
			$('.pagemenu').remove();
		},
		bindactions:function(){
			$('.pagemenu').on('mousedown','.ia-menu-item:not(.disabled)',function(){
					var model=null;
					if(interaction.floatmenu.collection&&interaction.floatmenu.ids){
						var model=interaction.floatmenu.collection.get(interaction.floatmenu.ids[0]);
					}
					var type=$(this).attr('id');
					switch(type){
						case 'removepage': if(model) model.iview.removemodel();
										   break;
						case 'removeoverlay':interaction.util.batch_remove_overlays(interaction.floatmenu.ids);break;
						case 'copyoverlay': interaction.util.copyoverlay(interaction.floatmenu.collection,interaction.floatmenu.ids);break;
						case 'pasteoverlay':interaction.util.batch_add_overlays(interaction.copyitems);break;
						case 'addblankpage':interaction.util.addblankpage(interaction.floatmenu.ids);break;
						case 'copypage':interaction.util.copypage(interaction.floatmenu.collection,interaction.floatmenu.ids);break;
						case 'pastepage':interaction.util.pastepage(interaction.floatmenu.ids);break;
						case 'copyanimation':interaction.util.copyanimation(interaction.floatmenu.collection,interaction.floatmenu.ids);break;
						case 'pasteanimation':interaction.util.pasteanimation(interaction.floatmenu.ids[0],interaction.copyanimations);break;
						case 'pagetolib':interaction.lib.pagetolib(interaction.floatmenu.collection,interaction.floatmenu.ids);break;
						case 'overlaytolib':interaction.lib.overlaytolib(interaction.floatmenu.collection,interaction.floatmenu.ids);break;
						case 'animationtolib':interaction.lib.animationtolib(interaction.floatmenu.collection,interaction.floatmenu.ids);break;
						case 'removeanimation':interaction.util.batch_remove_animation_by_overlayid(interaction.floatmenu.ids[0]);break;
					}
					interaction.floatmenu.hide();
				//}
			})
		},
		showcontextmenu:function(x,y,type){
			$('.pagemenu').remove();
			$('body').append(_.template(contextmenuT,{iType:type}));
			$('.pagemenu').css('left',x);
			$('.pagemenu').css('top',y);
			floatmenu.bindactions();			
		}
	}
	floatmenu.collection=null;
	floatmenu.ids=null;
	return floatmenu;
})

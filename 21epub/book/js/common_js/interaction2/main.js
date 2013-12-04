define(['interaction/model/main',
		'interaction/ui/main',
		'iEditor/main',
		'material/main',
		'interaction_view/ui/presentation',
		'interaction/ui/thumb'
		],function(){
	var func=require('interaction/ui/main');
	interaction=$.extend({},interaction,func);
	interaction.init=function(){
			$('.interaction-area').jswait();
			$('.interaction-area').attr('id','interaction-area');
			$('.interaction-area').append('<canvas id="interaction" class="hide" width=1024 height=768></canvas>');
			$('.interaction-area').append('<div class="tooltip prompt fade in top hide" style="position:absolute;z-index:1000000;"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>');
			var canvas = document.getElementById('interaction');
       	    paper.setup(canvas);
       	    interaction.event.init();
			iEditor.initForInteraction();
       	   // $('.doc-layout-right').addClass('nanoscrollbar');
			global.setscrollnano('.doc-layout-center');
			global.setscrollnano('.doc-layout-left');
			global.setscrollnano('.doc-layout-right');
			global.modal.create('confirmModal','small-modal');
			interaction.templatepage.load();
			interaction.lib.init();
			$.getJSON(context_url+'getimages',function(data){
				$('.interaction-area').jswait('close');
				if(data.code==200){
					var results=data.data.results;
					_.each(results,function(i){
						i.iType='Page';
						iPagelist.add(i);
					});
					interaction.thumb.load();
					if(iPagelist.length>0){
						var iPage=iPagelist.at(0);
						iPage.iview.focus();
						interaction.pagesort();
					}
					else{
						iPagelist.addpage();
					}
					interaction.resources.init();
				}
			});
			presentation.foredit();
			$('#interactionEditor').on('mousedown',function(event,ui){
				if($(event.target).attr('id')=='interactionEditor'||$(event.target).attr('id')=='interaction-area'||$(event.target).attr('id')=='animationbk'||$(event.target).is('img.animationbackground')){
					if(interaction.current) interaction.current.iview.confirm();
				}
				if($(event.target).attr('id')=='interactionEditor'){
					$('div.element').removeClass('ui-selected');
				}
			})
			$('button.action-playinteraction').on('click',function(){
				window.open(context_url+'newcbtview');
			})
			$('#interaction-area').selectable({
				filter:'div.element',
				stop:function(){
					var ids=_.map($('div.element.ui-selected'),function(i){
						return $(i).attr('id');
					})
					console.log(ids);
				}
			});
			window.shiftkey=false;
			window.ctrlkey=false;
			$(document).bind('keydown', function(event,ui){
				console.log(event.target);
				var code = (event.keyCode ? event.keyCode : event.which);
				if (code == 46||code==8) {//Delete或者backspace
					if(!interaction.current&&!$(event.target).is('input[type=text]')){
						// interaction.confirmDelete(function() {
							// $('div.element.ui-selected').each(function(){
								// var id=$(this).attr('id');
								// interaction.elementlist.get(id).iview.removesimple();
							// })								
						// })	
						var ids=_.map($('.element.ui-selected'),function(element){
							return $(element).attr('id');
						})
						interaction.util.batch_remove_overlays(ids);
						event.preventDefault();	
					}
				}
				if (event.shiftKey) {
					shiftkey = true;
				}
				if(code==17){
					console.log('ctrlkey');
					ctrlkey=true;
				}
			});
			$(document).bind('keyup',function(event,ui){
				shiftkey=false;
				ctrlkey=false;
			})
			$('div.sidebar').draggable({handle: ".mod-hd"});
			interaction.copyitems=[];
			interaction.copypages=[];
			interaction.copyanimations=[];
	}
})

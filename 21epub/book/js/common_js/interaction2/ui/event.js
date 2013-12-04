define(['interaction/model/base'], function() {
	var event = {
		init : function() {
			this.bindactions();
			this.bindpageactions();
			this.bindsettings();
			this.bindplay();
		},
		bindpageactions:function(){
			$('.navi header .action-del').click(function(){
				var ipageid=$('.doc-layout-left .thumbs').find('li.ui-selected').attr('id');
				if(!ipageid) return false;
				iPagelist.get(ipageid).iview.removemodel();
				return false;
			})			
		},
		bindactions:function(){
			function changetabs(container,tab){
				tabDiv=$('ul#'+container);
				tabDiv.children('li').each(function(){
					if($(this).attr('id')==tab) $(this).addClass('selected');
					else $(this).removeClass('selected');
				})
			}
			$('.interaction-toolbar ul').selectable({
					filter: 'li',
					selected: function(){
						interaction.step.tempdata=_.map(interaction.elementlist.toJSON(),function(model){
							return $.extend(true,{},model);
						})
						//changetabs($(this).parent('ul').attr('id'),$(this).attr('id'));
						var iType=$('.interaction-toolbar ul').children('li.ui-selected').attr('id')
						var iCommon=_.clone(interaction.model[iType].prototype.defaults.iCommon);
						if(iCommon) iCommon.landscape=_.clone(iCommon.landscape);
						if(iCommon) iCommon.portait=_.clone(iCommon.portait);
						var iDetail=_.clone(interaction.model[iType].prototype.defaults.iDetail);
						var newmodel=new interaction.model[iType]({iType:iType,iCommon:iCommon,iDetail:iDetail,iParent:interaction.elementlist.url,iUrl:context_url+interaction.elementlist.url,iPageid:interaction.currentpage.id});
					}
			});
		},
		bindsettings:function(){
			$('.action-setting').on('click',function(){
				$('div.doc-layout-right').toggle();
				$('body').toggleClass('nosettings');
			})
		},
		bindplay:function(){
			$('li.play > a').on('click',function(){
				if(global.getRequest('-build')) {
					window.bookwindow=window.open(context_url+'cbtview?-build=1', '','type=fullWindow, fullscreen, scrollbars=yes');
				}
				else{
					window.bookwindow=window.open(context_url+'cbtview', '','type=fullWindow, fullscreen, scrollbars=yes');
				}			
			})
		}
	}
	return event;
}); 
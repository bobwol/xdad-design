(function(win){
	win.contentstree={
		sortable:function(callback){
			$('.ui-layout-center-bd .list-content').sortable({
				handle:'div.btn-draged',
				items:'li.content-item',
				axis:"y",
				helper:'clone',
				forceHelperSize:true,
				placeholder:'ui-sortable-placehoder',
				//forcePlaceholderSize: true,
				forceHelperSize: true,
				dropOnEmpty:true,
				start:function(event,ui){
					startposition = ui.item.prevAll().length + 1;
					var dom=$(ui.item);
					function bindsort(event){
						if(event.type=='mouseover'){
							if($(event.currentTarget).parents('.content-item').first().hasClass('ui-sortable-helper')) return false;
							$(event.currentTarget).parents('.content-item').first().addClass('current');
							$(event.currentTarget).parents('.content-item').first().children('.wraparea').addClass('ui-sortable-hover');
							$('.ui-layout-center-bd .list-content').find('li.ui-sortable-placehoder').css('visibility','hidden');
							if(!contentstree.checksort(dom.attr('data-type'),$(event.currentTarget).parents('.content-item').first())) $(event.currentTarget).parents('.content-item').first().children('.wraparea').addClass('ui-sortable-disable');
							else $(event.currentTarget).parents('.content-item').first().children('.wraparea').removeClass('ui-sortable-disable');
						}
						else{
							if($(event.currentTarget).parents('.content-item').first().hasClass('ui-sortable-helper')) return false;
							$(event.currentTarget).parents('.content-item').first().removeClass('current');
							$(event.currentTarget).parents('.content-item').first().children('.wraparea').removeClass('ui-sortable-hover');
							$('.ui-layout-center-bd .list-content').find('li.ui-sortable-placehoder').css('visibility','visible');
							if(!contentstree.checksort(dom.attr('data-type'),$(event.currentTarget).parents('.content-item').first())) $(event.currentTarget).parents('.content-item').first().children('.wraparea').removeClass('ui-sortable-disable');
							else $(event.currentTarget).parents('.content-item').first().children('.wraparea').removeClass('ui-sortable-disable');
						}						
					}
					$('.ui-layout-center-bd .list-content').find('li.content-item .btn-draged').each(function(){
						$(this).bind('mouseover mouseout',bindsort);
						//if($(this).children('ul').length==0){
						//	$(this).append('<ul></ul>');
						//}
						//if($(this).children('ul').children('li.content-item').length==0)	{
						//	$(this).children('ul').append(contentstree.empty_list_template());
						//}
					})
				},
				stop:function(event,ui){
					$('.ui-layout-center-bd .list-content').find('li.content-item .btn-draged').each(function(){
						$(this).unbind('mouseover mouseout');
					})		
		        	if($('.ui-layout-center-bd .list-content').find('.current').length>0){
		        		contentstree.move($(ui.item).attr('id'),$('.ui-layout-center-bd .list-content').find('.current').first().attr('id'));
		        		$('.ui-layout-center-bd .list-content').find('.current').children('.wraparea').removeClass('ui-sortable-hover');
		        		$('.ui-layout-center-bd .list-content').find('.current').removeClass('current');
		        	}
		        	var id=$(ui.item).attr('id');
		        	if(contentstree.checkdom(id)) callback();
		        	else{
		        		global.throwerror('排序错误');
		        		$('.ui-layout-center-bd .list-content').empty();
		        		contentstree.list_model.iview.render_tree();
		        	};	
		        	$("body").find('[rel="tooltip"]').tooltip({ container: 'body' });
		        	content_organization.list.hasmenu_check();
					//$('.ui-layout-center-bd .list-content').find('li.content-item.empty').remove();				
				},
		        update: function(event, ui) {
					if(startposition!=-1){
						contentstree.change=true;
						var delta=(ui.item.prevAll().length + 1)-startposition;
						id=$(ui.item).attr('id');
						//callback(id);
						//var iHandlemodel=iElementlist.get(id);
						//iHandlemodel.trigger('dom_sort',delta);
					}
		        },
		        sort:function(event,ui){
		        	//console.info($(event.ralatedTarget));
		        }	
			});
		},
		renderinfo:function(id){
			var model=global.model.getModelById(contentstree.list_model,id);
			var properties=model.get('properties');
			global.render_template(model.toJSON(),properties);
		},
		move:function(sourceid,destid){
			$dest=$('.ui-layout-center-bd .list-content').find('[id="'+destid+'"]');
			$source=$('.ui-layout-center-bd .list-content').find('[id="'+sourceid+'"]');
			if($dest.children('ul').length==0) $dest.append('<ul></ul>');
			$dest.children('ul').append($source.clone());
			$source.remove();
		},
		checkdom:function(id){
			var dom=$('.ui-layout-center-bd .list-content').find('[id="'+id+'"]');
			var domtype=dom.attr('data-type');
			var parent=dom.parents('li.content-item').first();
			return contentstree.checksort(domtype,parent);
		},
		checksort:function(domtype,parent){
			if(domtype=='Column'){
				if(parent.length==0) return true;
				else return false;
			} 
			if(domtype=="Category"){
				if(parent.length==0) return false;
				else{
					parenttype=parent.attr('data-type');
					if(parenttype=='Column'||parenttype=='Category') return true;
					else return false;
				}
			}
			if(parent.length==0) return false;
			else if(parent.attr('data-type')=='Category'||parent.attr('data-type')=='Column') return true;
			return false;
		}
	};
})(window);
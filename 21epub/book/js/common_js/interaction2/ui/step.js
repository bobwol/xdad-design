define(['jquery'],function(){
	var step={
		obj:function(arg){
			switch(arg){
				case 0:return 'page';
				case 1:return 'element';
				case 2:return 'animation';
				case 3:return 'action';
			}			
		},
		type:function(arg){
			switch(arg){
				case 0:return 'add';
				case 1: return 'remove';
				case 2:return 'update';
				case 3: return 'info';
				case 4: return 'resources';
			}
		},
		batch_store_undodata:function(){
			interaction.step.undodata={
				iPrevAllData:interaction.elementlist.cloneAll(),
				iPrevAllAnimations:interaction.iAnimationlist.cloneAll(),
				iPrevAllActions:interaction.iActionList.cloneAll()
			}
		},
		batch_undosave:function(optype,obj){
			var opt=interaction.step.undodata;
			opt.iOptype=optype;
			opt.iObj=obj;
			opt.iMutiple=true;
			opt.iCurrentAllData=interaction.elementlist.cloneAll();
			opt.iCurrentAnimations=interaction.iAnimationlist.cloneAll();
			opt.iCurrentActions=interaction.iActionList.cloneAll();
			interaction.iRedolist.reset();
			interaction.iUndolist.push(opt);			
		},
		save:function(opt){
			var currentalldata=[];
			interaction.elementlist.each(function(model){
				currentalldata.push($.extend(true,{},model.toJSON()));
			})
			opt.iCurrentAllData=currentalldata;
			interaction.iRedolist.reset();
			if(interaction.iUndolist.length>20) interaction.iUndolist.shift();
			interaction.iUndolist.push(opt);
		},
		undo:function(){
			if(interaction.iUndolist.length>0){
				var model=interaction.iUndolist.pop();
				interaction.iRedolist.push(model.toJSON());
				var op=model.get('iOptype');
				var mutiple=model.get('iMutiple');
				if(op==0){
					if(!mutiple){
						var data=$.extend(true,{},model.get('iPrevData'));
						var id=data.id;
						var actions=[];
						var animations=[];
						var model=interaction.elementlist.get(id);
						model.iview.afterremove(model);
						model.trigger('change:remove');
						interaction.elementlist.remove(model);
						model.destroy();	
					}					
				}
				if(op==2){
					if(!mutiple){
						var data=$.extend(true,{},model.get('iPrevData'));
						interaction.elementlist.get(data.id).iview.update(data);
						interaction.elementlist.get(data.id).save();					
					}
					else{
						var alldata=model.get('iPrevAllData');
						var allanimations=model.get('iPrevAllAnimations');
						var allactions=model.get('iPrevAllActions');
						var data={
							overlays:alldata,
							animations:allanimations,
							actions:allactions
						}
						interaction.currentpage.iview.reset(data);					
						interaction.elementlist.confirm();
						if(allanimations) interaction.iAnimationlist.confirm();
						if(allactions) interaction.iActionList.confirm();
					}
				}
				else if(op==3){
					
				}
				else if(op==4){
					interaction.elementlist.get(data.id).iview.updateresources();
					interaction.elementlist.get(data.id).iview.updatebackground();
					interaction.elementlist.get(data.id).trigger('change:background');					
				}
			}
		},
		redo:function(){
			if(interaction.iRedolist.length>0){
				var model=interaction.iRedolist.pop();
				interaction.iUndolist.push(model.toJSON());
				var data=$.extend(true,{},model.get('iCurrentData'));
				var op=model.get('iOptype');
				var mutiple=model.get('iMutiple');
				if(op==0){
					if(!mutiple){
						var copyoverlayitem=$.extend(true,{},data);
						copyoverlayitem.iParent=interaction.elementlist.url;
						copyoverlayitem.iUrl=context_url+interaction.elementlist.url;
						copyoverlayitem.iPageid=interaction.currentpage.id;
						copyoverlayitem.iAutoindex=true;
						var newmodel=new interaction.model[copyoverlayitem.iType](copyoverlayitem);	
						interaction.elementlist.add(newmodel);	
						newmodel.iview.$el.addClass('ui-selected');	
						newmodel.iview.changeZindex();		
						interaction.currentpage.iview.updatethumb();
						interaction.elementlist.confirm();				
					}					
				}
				if(op==2){
					if(!mutiple){
						interaction.elementlist.get(data.id).iview.update(data);
						interaction.elementlist.get(data.id).save();					
					}
					else{
						var alldata=model.get('iCurrentAllData');
						var allanimations=model.get('iCurrentAllAnimations');
						var allactions=model.get('iCurrentAllActions');
						var data={
							overlays:alldata,
							animations:allanimations,
							actions:allactions
						}
						interaction.currentpage.iview.reset(data);					
						interaction.elementlist.confirm();
						if(allanimations) interaction.iAnimationlist.confirm();
						if(allactions) interaction.iActionList.confirm();
					}
				}
			}			
		}
	};
	if(typeof tests=="undefined") tests={};
	tests['localstorage'] = function() {
        try {
            localStorage.setItem('mod', 'mod');
            localStorage.removeItem('mod');
            return true;
        } catch(e) {
            return false;
        }
    };
	if(!tests['localstorage']) {
		console.log('This browser does not support Storage System');
		//return false;
	} 
	else{
		console.log('accept Storage System');
	}
	$('li.undo > a').on('click',function(){
		step.undo();
	})
	$('li.redo > a').on('click',function(){
		step.redo();
	})
	return step;
})

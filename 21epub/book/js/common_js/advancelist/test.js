//this file is for advancelist test
define(['lists/main','lists/mvc'],function(){
	$('.ui-layout-left').append('<div class="setlist" style="position: fixed; bottom: 0px; text-align: center;"><img src="img/icon_note.png"/></div>');
	$('.ui-layout-left').append('<div class="setmvc" style="position: fixed; bottom: 0px; left:30px ;text-align: center;"><img src="img/icon_note2.png"/></div>');
	$('body').append('<div class="setlist_content nanoscrollbar"></div>');
	$('body').append('<div class="setmvc_content nanoscrollbar"></div>');
	global.setscrollnano('.setlist_content');
	global.setscrollnano('.setmvc_content');
	$('.setlist').on('click',function(){
		$('.setlist_content').toggle();
	})
	$('.setmvc').on('click',function(){
		$('.setmvc_content').toggle();
	})
	var listobj={
			initialize:{
				container:'.ui-layout-center-bd',// set the container of the list in which to fill the grids
				templatefile:'global/templates/list.js',
				servertemplatefiles:servertemplatefiles,
			},
			menu:{
				name:'menu',//the name of the menu ,as the same of list name, and if model has,model's name will be 
				container:'.right-column .column-hd table tr',
				templatefile:'global/templates/menu.js',
			},
			left:{
				container:'.list-tree',
				templatefile:'global/templates/left.js',
				wrap:'ul',
				events:{
					'click .share':function(){
						console.log(this.model.id);
						return false;
					}
				},	
				rightpanel:true,
				url:portal_url+'contentstree.json?source=manage',
			},
			right:{
				container:'.list-content table tbody',
				templatefile:'global/templates/right.js',
				wrap:null,
				saveurl:portal_url+'saveitems.json',
				saveallurl:portal_url+'saveitems.json',
				events:{
					'click .list-edit':function(){
						test.right_saveAll();
						return false;
					}
				},
				rightpanel:true,
				url:portal_url+'unitslist_bg.json',
				bindsort:{
					item:'tr.content-item:not([class*="top"])'
				}
			},
			page:{
				container:'.list-page',
				templatefile:'global/templates/page.js',
			},
			filter:{
				container:'.list-menu table > thead > tr',
				templatefile:'global/templates/filter.js',
				wrap:null,
				url:portal_url+'filterconfig.json',		
			}
	};
	window.test=new lists.list(listobj);
	window.listarea=new lists.mvc({
			defaults:{},
			container:'.setlist_content .content',
			type:'custom',
			templatefile:'lists/template/testlist.js',
			events:{
				'click .listtest-code':function(){
					var obj=global.serializeMod('.setlist_content');
					alert(JSON.stringify(obj));
				},
				'click .listtest-confirm':function(){
					var obj=global.serializeMod('.setlist_content');
					test=new lists.list(obj);
					$('.ui-layout-center-bd').empty();
					test.render();
					$('.setlist_content').toggle();
				}
			},
			data:{},
			bindchange:true,
			onClick:null,
			onUpdate:function(){
				global.fill('.setlist_content',test.options);
			},
			reset:true,
	});
	var mvcobj={
			defaults:{},
			container:null,
			type:'custom',
			templatefile:null,
			bindchange:true,
			onClick:null,
			reset:true	
	}
	window.mvctest=new lists.mvc(mvcobj);
	listarea.render();
	window.mvcarea=new lists.mvc({
			defaults:{},
			container:'.setmvc_content .content',
			type:'custom',
			templatefile:'lists/template/testmvc.js',
			events:{
				'click .mvctest-code':function(){
					var obj=global.serializeMod('.setmvc_content');
					alert(JSON.stringify(obj));
				},
				'click .mvctest-confirm':function(){
					var obj=global.serializeMod('.setmvc_content');
					test=new lists.mvc(obj);
					if(obj.container) $(obj.container).empty();
					test.render();
					$('.setmvc_content').toggle();
				}
			},
			data:{},
			bindchange:true,
			onClick:null,
			onUpdate:function(){
				global.fill('.setmvc_content',mvctest.options);
			},
			reset:true,
	});
	mvcarea.render();
	$('.setlist_content').css({
    'background': 'none repeat scroll 0 0 white',
    'border':' 1px solid #000000',
    'bottom': 0,
    'color': 'black',
    'display': 'none',
    'height': '100%',
    'left': '140px',
    'opacity': 1,
    'position': 'fixed',
    'width': '100%',
    'z-index': 9999999
});
	$('.setmvc_content').css({
    'background': 'none repeat scroll 0 0 white',
    'border':' 1px solid #000000',
    'bottom': 0,
    'color': 'black',
    'display': 'none',
    'height': '100%',
    'left': '140px',
    'opacity': 1,
    'position': 'fixed',
    'width': '100%',
    'z-index': 9999999
});
$('.setlist_content .mod .mod-hd').css({
    background:' none repeat scroll 0 0 transparent'
})
$('.setlist_content .mod select').css({
    left: '100px'
})
	//test.render();
})

epub.app(function(){

	epub["import"]('epub.modules.bootstrap@1.0');
	epub["import"]('epub.modules.mbase@2.0');
	epub["import"]('epub.modules.mpage@1.0');

		function getLanguage(){
			if (location.href.indexOf('/en/')>0) return 'en';
			if (location.href.indexOf('/zh/')>0) return 'zh';
		}

		$(".work-list").page({
				url:{
					contentstree:'/'+getLanguage()+'/columnitems.json?id=60years',
					unlitslist:'/'+getLanguage()+'/60years/{id}/workslist.json?size=100'
				},
				templates:{
					unlitslist:[
						'<ul>',
							'{{each(index,value) data.results}}',
								// '{{if !index}}',
								// //'<li class="active" data-body="${value.body}"  data-title ="${value.title}">',
								// '{{else}}',
								'<li data-body="${value.detail}" data-title ="${value.title}" data-target="${value.target_id}">',
								// '{{/if}}',
								'<div class="thumb"><img src="${value.thumbnail}" alt=""></div>',
								'<div class="title">${value.title}</div>',
								'<div class="sub-title">${value.description}</div>',
								'</li>',
							'{{/each}}',
						'</ul>'
					].join(''),
					contentstree:[
						'{{each(index,value) data.results}}',
							'{{if !index}}',

							'<h4 id ="${value.id}" type="${value.type_categorized}" class="goto">${value.title}</h4>',
							'{{else}}',
							'<h4 id ="${value.id}" type="${value.type_categorized}" style="display:none;" class="goto">${value.title}</h4>',
							'{{/if}}',
						'{{/each}}',
						'<div class="list nanoscrollbar content">',
						'</div>',
						'<div class="prev" data-rel = "_prev"><a href="javascript:void(0)">prev</a></div>',
			      		'<div class="next" data-rel = "_next"><a href="javascript:void(0)">next</a></div>'
					].join(''),
					detail:[
					].join('')
				},
		});	

});
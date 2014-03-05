
epub.app(function(){

	epub["import"]('epub.modules.bootstrap@1.0');
	epub["import"]('epub.modules.hotMap@2.0');
	epub["import"]('epub.modules.pageMap@1.0');
	epub["import"]('epub.modules.base@6.0');

	$(function(){

		var data = [
			{"style":"margin:244px 0px 0px 428px;","title":"集团公司","address":"地址：上海市石门二258号","zipcode":"邮编：200041 ","tel":"电话：86-021-52524567","fax":"传真：86-021-62464000","email":"E-mail：hongwen_cheng@xd-ad.com.cn","websit":""},
			// {"style":"margin:191px 0px 0px 374px;","title":"山东","address":"地址：济南市环山路2号鸿苑大厦14楼B室","zipcode":"邮编：250014  ","tel":"电话：0531-82969177","fax":"","email":"E-mail：shxdsj@163.com","websit":""},
			{"style":"margin:240px 0px 0px 379px;","title":"安徽分公司","address":"地址：合肥市徽州大道与太湖路交口西北恒生阳光城8#写字楼7F ","zipcode":"邮编：230001","tel":"电话：0551-3497102","fax":"","email":"E-mail：cxcan@126.com","websit":""},
			// {"style":"margin:259px 0px 0px 351px;","title":"武汉分院","address":"地址：武汉市建设大道568号新世界国贸大厦3403室 ","zipcode":"邮编：430023 ","tel":"电话：027-85267353 ","fax":"","email":"E-mail：jianmin_wu@xd-ad.com.cn","websit":""},
			{"style":"margin:220px 0px 0px 300px;","title":"西安分院","address":"地址：西安市二环南路西段180号财富中心A座23楼","zipcode":"邮编：710075 ","tel":"电话：029-88365261","fax":"","email":"E-mail: baoxq@siadr.com.cn","websit":""},
			// {"style":"margin:282px 0px 0px 375px;","title":"江西","address":"地址：南昌市井冈山大道1028号1206室","zipcode":"邮编：330002 ","tel":"电话：0791-6494585","fax":"","email":"E-mail：linyu@siadr.com.cn","websit":""},
			// {"style":"margin:243px 0px 0px 414px;","title":"无锡","address":"地址：无锡市湖滨路48号3楼 ","zipcode":"邮编：214071 ","tel":"电话：0510-85109968 ","fax":"","email":"E-mail：zhouwj@siadr.com.cn","websit":""},
			{"style":"margin:262px 0px 0px 421px;","title":"宁波分院","address":"地址：宁波市中山东路692号新洲宾馆2号楼309室 ","zipcode":"邮编：315040 ","tel":"电话：0574-84506563","fax":"","email":"E-mail：xiaoni_shui@xd-ad.com.cn","websit":""},
			{"style":"margin:320px 0px 0px 402px;","title":"厦门分院","address":"地址：厦门市湖滨北路201号宏业大厦7楼","zipcode":"邮编：361012  ","tel":"电话：0592-5087339 ","fax":"","email":"E-mail：zhuofei@siadr.com.cn","websit":""},
			{"style":"margin:129px 0px 0px 417px;","title":"沈阳办事处","address":"地址：沈阳市和平区青年大街386号华阳大厦2185 室","zipcode":"邮编：110004 ","tel":"电话：024-23180970","fax":"","email":"E-mail：zhangdp@siadr.com.cn","websit":""},
			{"style":"margin:349px 0px 0px 303px;","title":"南宁办事处","address":"地址：南宁市金洲路25号太平洋世纪广场A座1801室","zipcode":"邮编：530022 ","tel":"电话：0771-5760269","fax":"","email":"E-mail：mingxin_chen@ecadi.com","websit":""},
			{"style":"margin:263px 0px 0px 257px;","title":"成都分公司","address":"地址：成都市锦江区下东大街216号喜年广场1806室","zipcode":"邮编：610016 ","tel":"电话：028-86703037 ","fax":"","email":"E-mail：70544836@qq.com ","websit":""},
			// {"style":"margin:256px 0px 0px 408px;","title":"杭州","address":"地址：杭州市下城区长生路58号西湖国贸中心621室","zipcode":"邮编：310003 ","tel":"电话：0571-87558530 ","fax":"","email":"E-mail：jian_zhang@ecadi.com","websit":""},
			{"style":"margin:231px 0px 0px 402px;","title":"南京办事处","address":"地址：中山东路90号华泰证券大厦21层E3座","zipcode":"邮编：210002  ","tel":"电话：025-84454829","fax":"","email":"E-mail：shaoling_69@163.com","websit":""},
			{"style":"margin:195px 0px 0px 397px;","title":"青岛办事处","address":"地址：青岛市漳州二路19号中环国际广场A座2501室","zipcode":"邮编：266071  ","tel":"电话：0532-83867310","fax":"","email":"E-mail：tao_qiao@ecadi.com","websit":""},
			{"style":"margin:163px 0px 0px 375px;","title":"天津办事处","address":"地址：天津市南京路20号金皇大厦3620室","zipcode":"邮编：300042 ","tel":"电话：022-23029217","fax":"","email":"E-mail：tianjin@ecadi.com ","websit":""},
			{"style":"margin:244px 0px 0px 418px;","title":"苏州分院","address":"地址：苏州新区狮山路76号华福大厦14楼B座","zipcode":"邮编：215011 ","tel":"电话：0512-68252930","fax":"","email":"E-mail： zhong_zhou@ecadi.com","websit":""},
			{"style":"margin:160px 0px 0px 413px;","title":"大连分院","address":"地址：大连市中山区人民路68号宏誉大厦2502室","zipcode":"邮编：116001 ","tel":"电话：0411-82730822","fax":"","email":"E-mail：changfeng_jiang@ecadi.com","websit":""},
			{"style":"margin:272px 0px 0px 290px;","title":"重庆分院","address":"地址：重庆市江北区观音桥步行街9号嘉年华大厦10楼1号","zipcode":"邮编：400020 ","tel":"电话：023-67865527 ","fax":"","email":"E-mail：wei_guo@ecadi.com ","websit":""},
			{"style":"margin:151px 0px 0px 366px;","title":"北京办事处","address":"地址：北京市东城区北三环东路36号环球贸易中心B座1806室","zipcode":"邮编：100013 ","tel":"电话：010-58257368","fax":"","email":"E-mail：hongze_du@ecadi.com ","websit":""},
			// {"style":"margin:240px 0px 0px 379px;","title":"安徽","address":"地址：合肥市美菱大道419号省农委皖西南外资培训中心4楼","zipcode":"邮编：230001 ","tel":"电话：0551-2657067","fax":"","email":"E-mail：cxcan@126.com","websit":""},
			// {"style":"margin:191px 0px 0px 374px;","title":"济南","address":"地址：济南市六里山路一号联勤第二干休所西办公楼一楼","zipcode":"邮编：250002 ","tel":"电话：0531-88315828","fax":"","email":"E-mail：qiluvip@163.com","websit":"："},
			// {"style":"margin:138px 0px 0px 331px;","title":"内蒙","address":"地址：呼和浩特市中山西路1号首府广场10层10号","zipcode":"邮编：100020 ","tel":"电话：0471-6913265","fax":"","email":"E-mail：liyijun_xd@163.com","websit":""},
			{"style":"margin:214px 0px 0px 351px;","title":"郑州分公司","address":"地址：郑东新区商务外环路8号世博大厦501-1 ","zipcode":"","tel":"电话：0371--65713511","fax":"","email":"E-mail： Hxguoqiang@sina.com","websit":""},
			{"style":"margin:344px 0px 0px 365px;","title":"深圳分公司","address":"地址：深圳市福田区金田路3037号金中环大厦2803A ","zipcode":"邮编：518048 ","tel":"电话：0755-82804739","fax":"","email":"E-mail：szbsc@xd-ad.com.cn","websit":""},
			{"style":"margin:358px 0px 0px 360px;","title":"香港子公司","address":"Add：中国香港湾仔告士打道173-174号 天厨商业大厦6 字楼","zipcode":"","tel":"Tel：852-28916336","fax":"","email":"E-mail：jingyu_zhou@xd-ad.com.cn","websit":""},
			{"style":"margin:388px 0px 0px 323px;","title":"海南分公司","address":"地址：海口市海甸五路第6栋A6号","zipcode":"邮编：570208","tel":"","fax":"","email":"E-mail：yun_liu@xd-ad.com.cn","websit":""},
			{"style":"margin:339px 0px 0px 237px;","title":"云南分公司","address":"地址：中国昆明市五华区东风西路280号22楼BC座","zipcode":"邮编：650031","tel":"电话：0871-5376766 ","fax":"","email":"E-mail：xl-yn@163.com","websit":""},
			{"style":"margin:129px 0px 0px 78px;","title":"新疆分公司","address":"地址：乌鲁木齐新民路113号709室","zipcode":"邮编：830002","tel":"电话：0991-2616272","fax":"","email":"","websit":""},
			{"style":"margin:305px 0px 0px 295px;","title":"贵阳办事处","address":"地址：贵阳市南明区都司路中天商务港12层1号","zipcode":"邮编：550002","tel":"电话：0851-8529990","fax":"","email":"E-mail：guoyn@siadr.com.cn","websit":""},
			{"style":"margin:262px 0px 0px 354px;","title":"武汉办事处","address":"地址：武汉市汉口建设大道568号新世界国贸大厦I座2909 室","zipcode":"邮编：430022","tel":"电话：027-85267467","fax":"","email":"E-mail：qinghong_zhang@ecadi.com","websit":""},
			{"style":"margin:254px 0px 0px 346px;","title":"武汉分院","address":"地址：武汉市汉口建设大道568号新世界国贸大厦I座3403室","zipcode":"邮编：430022","tel":"电话：027-85267353","fax":"","email":"E-mail：jianmin_wu@xd-ad.com.cn","websit":""},
			{"style":"margin:288px 0px 0px 340px;","title":"长沙分院","address":"地址：长沙市芙蓉中路二段80号顺天国际财富中心32层3203号","zipcode":"邮编：414005","tel":"电话：0731-88181328","fax":"","email":"E-mail：zhouhong_a@siadr.com.cn","websit":""},
			{"style":"margin:239px 0px 0px 408px;","title":"无锡分院","address":"地址：无锡市湖滨路688号7楼西","zipcode":"邮编：214071","tel":"电话：0510-85858665","fax":"","email":"E-mail：zhouwj@siadr.com.cn","websit":""},
			{"style":"margin:258px 0px 0px 250px;","title":"四川分院","address":"地址: 四川省成都市锦江区福兴街1号华敏翰尊大厦26楼06室","zipcode":"邮编: 610016","tel":"电话: 028-86703816 ","fax":"","email":"E-mail: yuefei_zhou@xd-ad.com.cn","websit":""}
		];

 		var ins_map,ins_page;
		ins_map = $('article div.map-select p').hotMap({
			data:data,
			style:[
				'#map {',
				'	BACKGROUND: url(/xdad-design/site-dev/img/map1.gif) no-repeat left top;  WIDTH: 620px; HEIGHT: 447px',
				'}',
				'#map H1 {',
				'	DISPLAY: block; FONT-WEIGHT: normal; POSITION: absolute;font-size: 12px;font-family: Verdana,"宋体",Arial,Sans;line-height: 1.8;',
				'}',
				'#map .mapl A:link {',
				'	DISPLAY: block; BACKGROUND: url(/xdad-design/site-dev/img/maph1.gif) no-repeat; COLOR: #000; TEXT-DECORATION: none',
				'}',
				'#map .mapl A:visited {',
				'	DISPLAY: block; BACKGROUND: url(/xdad-design/site-dev/img/maph1.gif) no-repeat; COLOR: #000; TEXT-DECORATION: none',
				'}',

				'#map .mapl A:link {',
				'	BACKGROUND-POSITION: left 4px; PADDING-LEFT: 20px',
				'}',
				'#map .mapl A:visited {',
				'	BACKGROUND-POSITION: left 4px; PADDING-LEFT: 20px',
				'}'
			].join(''),

			click:function(a){
				var data_title = $(a).attr('data-title');
				ins_map.show(data_title);
				$('.location-mod').pageMap('show',data_title);
			},
			show:function(a){
				var data_title = $(a).attr('data-title');
				$('article div#inner div.location-hd a').html(data_title+"<b>▼</b>");
				for (var i = data.length - 1; i >= 0; i--) {
					if(data[i].title==data_title){
						$('article div#inner.location-info>ul').html('');
						var html = [];
						if(data[i].address){
							html.push('<li>'+data[i].address+'</li>')
						};
						if(data[i].zipcode){
			            	html.push('<li>'+data[i].zipcode+' </li>')
						};
						if(data[i].tel){
							html.push('<li>'+data[i].tel+'</li>')
						};
			            if(data[i].fax){
			            	html.push('<li>'+data[i].fax+'</li>')
			            };
			            if(data[i].email){
			            	html.push(' <li>'+data[i].email+'</li>')
			            };
			            if(data[i].websit){
			            	html.push('<li>'+data[i].websit+'</li>')
			            };
			          	$('article div#inner.location-info>ul').html(html.join(''));
			          	break;
					}
				};
			}
		});
		ins_page = $('#inner .location-mod').pageMap({
			data:data,
			totalPages:data.length,
	    	num:35,
			debug:false,
			goto:function(no){
				ins_map.show(no);
			}
		})
	});


	$('li[id*="contentstree_149"] a').addClass('lightbox-history-works');
	$('li[id*="contentstree_149"] a').live('click',function(){
		$('.lightbox.history-works-modal').show();
		return false;
	});
})
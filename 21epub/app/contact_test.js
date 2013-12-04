
epub.app(function(){
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.hotMap@2.0');
	epub["import"]('epub.modules.page@2.0');
	var data = [
		{style:'margin:241px 0px 0px 425px;',title:'上海',address:'地址：上海市石门二258号',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:191px 0px 0px 374px;',title:'山东',address:'地址：济南市环山路2号鸿苑大厦14楼B室',zipcode:'邮编：250014  ',tel:'电话：0531-82969177',fax:'',email:'E-mail：shxdsj@163.com','websit':''},
		{style:'margin:240px 0px 0px 379px;',title:'合肥',address:'',zipcode:'',tel:'电话：021-32170633',fax:'',email:'E-mail：caiwj@mhg.cn','websit':'网址：'},
		{style:'margin:259px 0px 0px 351px;',title:'武汉',address:'地址：武汉市汉口建设大道568号新世界国贸大厦I座3403室',zipcode:'邮编：430023 ',tel:'电话：027-85267352',fax:'',email:'E-mail：jinmmywjm@citiz.net','websit':''},
		{style:'margin:220px 0px 0px 300px;',title:'西安',address:'地址：西安市二环南路西段180号财富中心A座23楼',zipcode:'邮编：710075 ',tel:'电话：029-88365261',fax:'',email:'E-mail: baoxq@siadr.com.cn','websit':''},
		{style:'margin:282px 0px 0px 375px;',title:'江西',address:'地址：南昌市井冈山大道1028号1206室',zipcode:'邮编：330002 ',tel:'电话：0791-6494585',fax:'',email:'E-mail：linyu@siadr.com.cn','websit':''},
		{style:'margin:243px 0px 0px 414px;',title:'无锡',address:'地址：无锡市湖滨路48号3楼 ',zipcode:'邮编：214071 ',tel:'电话：0510-85109968 ',fax:'',email:'E-mail：zhouwj@siadr.com.cn','websit':''},
		{style:'margin:262px 0px 0px 421px;',title:'宁波',address:'地址：宁波市中山东路678号新舟宾馆2号楼309室',zipcode:'邮编：315040 ',tel:'电话：0574-87716488',fax:'',email:'E-mail： linyu@siadr.com.cn','websit':''},
		{style:'margin:320px 0px 0px 402px;',title:'厦门',address:'地址：厦门市湖滨北路201号宏业大厦7楼',zipcode:'邮编：361012  ',tel:'电话：0592-5087339 ',fax:'',email:'E-mail：zhuofei@siadr.com.cn','websit':''},
		{style:'margin:129px 0px 0px 417px;',title:'沈阳',address:'地址：沈阳市和平区青年大街286号华阳大厦2185 室',zipcode:'邮编：110004 ',tel:'电话：024-23180970',fax:'',email:'E-mail：linyu@siadr.com.cn','websit':''},
		{style:'margin:349px 0px 0px 303px;',title:'南宁',address:'地址：南宁市金洲路25号太平洋世纪广场A座1801室',zipcode:'邮编：530022 ',tel:'电话：0771-5760269',fax:'',email:'E-mail：mingxin_chen@ecadi.com','websit':''},
		{style:'margin:263px 0px 0px 257px;',title:'成都',address:'地址：成都市锦江区福兴街1号华敏翰尊国际大厦26F11号',zipcode:'邮编：610016 ',tel:'电话：028-86703466 ',fax:'',email:'E-mail：wenbin_liu@ecadi.com','websit':''},
		{style:'margin:256px 0px 0px 408px;',title:'杭州',address:'地址：杭州市下城区长生路58号西湖国贸中心621室',zipcode:'邮编：310003 ',tel:'电话：0571-87558530 ',fax:'',email:'E-mail：jian_zhang@ecadi.com','websit':''},
		{style:'margin:240px 0px 0px 402px;',title:'南京',address:'地址：南京市中山东路90号华泰证券大楼21层E3座',zipcode:'邮编：210002  ',tel:'电话：025-84454829',fax:'',email:'E-mail：ling_shao@ecadi.com','websit':''},
		{style:'margin:195px 0px 0px 397px;',title:'青岛',address:'地址：青岛市东海西路17号海信大厦1518室',zipcode:'邮编：266071  ',tel:'电话：0532-83867310',fax:'',email:'E-mail：tao_qiao@ecadi.com','websit':''},
		{style:'margin:163px 0px 0px 375px;',title:'天津',address:'地址：天津市南京路20号金皇大厦2507室',zipcode:'邮编：300042 ',tel:'电话：022-23029233',fax:'',email:'E-mail：zhiguang_cui@ecadi.com','websit':''},
		{style:'margin:231px 0px 0px 416px;',title:'苏州',address:'地址：苏州新区狮山路76号华福大厦14楼B座',zipcode:'邮编：215011 ',tel:'电话：0512-68252930',fax:'',email:'E-mail： zhong_zhou@ecadi.com','websit':''},
		{style:'margin:160px 0px 0px 413px;',title:'大连',address:'地址：大连市中山区人民路68号宏誉大厦2502室',zipcode:'邮编：116001 ',tel:'电话：0411-82730822',fax:'',email:'E-mail：fuqiang_zhang@ecadi.com','websit':''},
		{style:'margin:272px 0px 0px 290px;',title:'重庆',address:'地址：重庆市江北区观音桥步行街9号嘉年华大厦10楼1号',zipcode:'邮编：400020 ',tel:'电话：023-67865517',fax:'',email:'E-mail：jianjun_wei@ecadi.com','websit':''},
		{style:'margin:151px 0px 0px 366px;',title:'北京',address:'地址：北京市复兴门内大街158号远洋大厦F316B',zipcode:'邮编：100031 ',tel:'电话：010-66493881',fax:'',email:'E-mail： jingyu_zhou@ecadi.com','websit':''},
		{style:'margin:240px 0px 0px 379px;',title:'安徽',address:'地址：合肥市美菱大道419号省农委皖西南外资培训中心4楼',zipcode:'邮编：230001 ',tel:'电话：0551-2657067',fax:'',email:'E-mail：cxcan@126.com','websit':''},
		{style:'margin:191px 0px 0px 374px;',title:'济南',address:'地址：济南市六里山路一号联勤第二干休所西办公楼一楼',zipcode:'邮编：250002 ',tel:'电话：0531-88315828',fax:'',email:'E-mail：qiluvip@163.com','websit':'：'},
		{style:'margin:138px 0px 0px 331px;',title:'内蒙',address:'地址：呼和浩特市中山西路1号首府广场10层10号',zipcode:'邮编：100020 ',tel:'电话：0471-6913265',fax:'',email:'E-mail：liyijun_xd@163.com','websit':''},
		{style:'margin:214px 0px 0px 351px;',title:'郑州',address:'地址：郑州市农业路东16号省汇中心1号楼（A)座1510房间 ',zipcode:'',tel:'电话：15838319558',fax:'',email:'E-mail：','websit':'网址：'},
		{style:'margin:349px 0px 0px 365px;',title:'深圳',address:'地址：深圳福田区金田路3037号金中环商务大楼住楼2803A',zipcode:'邮编：518048 ',tel:'电话：0755-82804736',fax:'',email:'E-mail：szbsc@xd-ad.com.cn','websit':''},		
	];
	$(function(){
		var ins_map,ins_page;
		ins_map = $('article p').hotMap({
			data:data,
			click:function(a){
				var data_title = $(a).attr('data-title');
				ins_map.show(data_title);
				$('.location-mod').page('show',data_title);

				
			},
			show:function(a){
				var data_title = $(a).attr('data-title');
				for (var i = data.length - 1; i >= 0; i--) {
					if(data[i].title==data_title){
						$('article ul').html('');
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
			          	$('article ul').html(html.join(''));
			          	break;
					}
				};
				
			}
		});
		ins_page = $('.location-mod').page({
			data:data,
			totalPages:data.length,
	    	num:15,
			debug:false,
			goto:function(no){
				ins_map.show(no);
			}
		})
		$(function(){
			$(".go-top").goToTop({});
			$(window).bind("scroll resize",function(){
				$(".go-top").goToTop({});
			});
		});

	});
})
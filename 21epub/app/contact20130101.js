
epub.app(function(){
	epub["import"]('epub.modules.goToTop@1.0')
	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.hotMap@1.0');
	epub["import"]('epub.modules.page@2.0');
	var data = [
		{value:'margin:162px 0px 0px 396px;',title:'北京',address:'地址：北京',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:110px 0px 0px 465px;',title:'长春',address:'地址：长春',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:222px 0px 0px 264px;',title:'兰州',address:'地址：兰州',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:359px 0px 0px 237px;',title:'昆明',address:'地址：昆明',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:206px 0px 0px 383px;',title:'济南',address:'地址：济南市环山路2号鸿苑大厦14楼B室',zipcode:'邮编：250014  ',tel:'电话: 0531-82969177',fax:'传真：86-021-62464000',email:'E-mail: shxdsj@163.com','websit':''},
		{style:'margin:261px 0px 0px 393px;',title:'合肥',address:'地址：合肥',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:296px 0px 0px 445px;',title:'杭州',address:'地址：杭州',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:79px 0px 0px 489px;',title:'哈尔滨',address:'地址：哈尔滨',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:420px 0px 0px 342px;',title:'海口',address:'地址：海口',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:338px 0px 0px 305px;',title:'贵阳',address:'地址：贵阳',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:370px 0px 0px 366px;',title:'广州',address:'地址：广州',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:154px 0px 0px 439px;',title:'大连',address:'地址：大连',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:285px 0px 0px 300px;',title:'重庆',address:'地址：重庆',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:293px 0px 0px 255px;',title:'成都',address:'地址：成都',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:165px 0px 0px 305px;',title:'呼和浩特',address:'地址：呼和浩特',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:375px 0px 0px 315px;',title:'南宁',address:'地址：南宁',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:375px 0px 0px 435px;',title:'福州',address:'地址：福州',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:200px 0px 0px 415px;',title:'淄博',address:'地址：淄博',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:383px 0px 0px 355px;',title:'珠海',address:'地址：珠海',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:225px 0px 0px 350px;',title:'焦作',address:'地址：焦作',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:235px 0px 0px 377px;',title:'郑州',address:'地址：郑州',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:189px 0px 0px 438px;',title:'烟台',address:'地址：烟台',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:353px 0px 0px 424px;',title:'厦门',address:'地址：厦门',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:238px 0px 0px 314px;',title:'西安',address:'地址：西安',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:263px 0px 0px 347px;',title:'南阳',address:'地址：南阳',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:277px 0px 0px 357px;',title:'武汉',address:'地址：武汉',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:176px 0px 0px 408px;',title:'天津',address:'地址：天津',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:204px 0px 0px 338px;',title:'太原',address:'地址：太原',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:272px 0px 0px 390px;',title:'马鞍山',address:'地址：马鞍山',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:270px 0px 0px 430px;',title:'无锡',address:'地址：无锡',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:191px 0px 0px 355px;',title:'石家庄',address:'地址：石家庄',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:138px 0px 0px 433px;',title:'沈阳',address:'地址：沈阳',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:383px 0px 0px 392px;',title:'深圳',address:'地址：深圳',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:280px 0px 0px 458px;',title:'上海',address:'地址：上海',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:366px 0px 0px 400px;',title:'汕头',address:'地址：汕头',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:214px 0px 0px 433px;',title:'青岛',address:'地址：青岛',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:229px 0px 0px 418px;',title:'徐州',address:'地址：徐州',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:255px 0px 0px 430px;',title:'南京',address:'地址：南京',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:317px 0px 0px 405px;',title:'南昌',address:'地址：南昌',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'},
		{style:'margin:317px 0px 0px 360px;',title:'长沙',address:'地址：长沙',zipcode:'邮编：200041 ',tel:'电话：86-021-52524567',fax:'传真：86-021-62464000',email:'E-mail：xiandai@xd-ad.com.cn','websit':'网址：www.xd-ad.com.cn'}
	];
	$(function(){
		var ins_map,ins_page;
		ins_map = $('article p').hotMap({
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
					    html.push('<li>'+data[i].address+'</li>')
			            html.push('<li>'+data[i].zipcode+' </li>')
			            html.push('<li>'+data[i].tel+'</li>')
			            html.push('<li>'+data[i].fax+'</li>')
			            html.push(' <li>'+data[i].email+'</li>')
			            html.push('<li>'+data[i].websit+'</li>')
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
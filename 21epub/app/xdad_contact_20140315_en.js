
epub.app(function(){

	epub["import"]('epub.modules.bootstrap@1.0');
	epub["import"]('epub.modules.hotMap@2.0');
	epub["import"]('epub.modules.pageMap@1.0');
	epub["import"]('epub.modules.base@6.0');

	$(function(){

		var data = [
          {
            "style": "margin:244px 0px 0px 428px;",
            "title": "Headquarter",
            "address": "Address : Number 258,Shi Meng Er Road,Shanghai,China",
            "zipcode": "Postcode: 200041",
            "tel": "Tel: 86-021-52524567",
            "fax": "Fax: 86-021-62464000",
            "email": "E-mail: hongwen_cheng@xd-ad.com.cn",
            "websit": ""
          },
          {
            "style": "margin:240px 0px 0px 379px;",
            "title": "Anhui-Branch",
            "address": "Address: 7th Floor Office Building, N.8 Hengsheng Sunshine City, North-west of the Intersection of Huizhou Avenue & Taihu Road, Hefei",
            "zipcode": "Postcode: 230001",
            "tel": "Tel: 0551-3497102",
            "fax": "",
            "email": "E-mail: cxcan@126.com",
            "websit": ""
          },
          {
            "style": "margin:220px 0px 0px 300px;",
            "title": "Xi’an-Branch",
            "address": "Address : 23rd floor Block A, Fortune Center, N.180 West Section 2nd Ring Road South, Xi’an",
            "zipcode": "Postcode: 710075 ",
            "tel": "Tel: 029-88365261",
            "fax": "",
            "email": "E-mail: baoxq@siadr.com.cn",
            "websit": ""
          },
          {
            "style": "margin:262px 0px 0px 421px;",
            "title": "Ningbo-Branch",
            "address": "Address : Room 309 2nd Building, Xinzhou Hotel, N.692 Zhongshan Road East, Ningbo",
            "zipcode": "Postcode: 315040 ",
            "tel": "Tel: 0574-84506563",
            "fax": "",
            "email": "E-mail: xiaoni_shui@xd-ad.com.cn",
            "websit": ""
          },
          {
            "style": "margin:320px 0px 0px 402px;",
            "title": "Xiamen-Branch",
            "address": "Address : 7th Floor Hongye Building, N. 201 North Hubin Road, Xiamen",
            "zipcode": "Postcode: 361012  ",
            "tel": "Tel: 0592-5087339 ",
            "fax": "",
            "email": "E-mail: zhuofei@siadr.com.cn",
            "websit": ""
          },
          {
            "style": "margin:129px 0px 0px 417px;",
            "title": "Shenyang-Office",
            "address": "Address : Room 2185 Huayang International Building, N.386 Qingnian Street, Heping District, Shenyang",
            "zipcode": "Postcode: 110004 ",
            "tel": "Tel: 024-23180970",
            "fax": "",
            "email": "E-mail: zhangdp@siadr.com.cn",
            "websit": ""
          },
          {
            "style": "margin:349px 0px 0px 303px;",
            "title": "NanNing-Office",
            "address": "Address : Room 1801, Block A Pacific Century Square, 25 Jinzhou Road, Nan’ ning",
            "zipcode": "Postcode: 530022 ",
            "tel": "Tel: 0771-5760269",
            "fax": "",
            "email": "E-mail: mingxin_chen@ecadi.com",
            "websit": ""
          },
          {
            "style": "margin:263px 0px 0px 257px;",
            "title": "Chengdu-Branch",
            "address": "Address : Room 1806 Hailrun Plaza, 216 East Main Street Jinjiang District, Chengdu",
            "zipcode": "Postcode: 610016 ",
            "tel": "Tel: 028-86703037 ",
            "fax": "",
            "email": "E-mail: 70544836@qq.com ",
            "websit": ""
          },
          {
            "style": "margin:231px 0px 0px 402px;",
            "title": "Nanjing-Office",
            "address": "Address: Block E3 21st Floor, Huatai Securities Center, 90 Zhongshan Road East",
            "zipcode": "Postcode: 210002  ",
            "tel": "Tel: 025-84454829",
            "fax": "",
            "email": "E-mail: shaoling_69@163.com",
            "websit": ""
          },
          {
            "style": "margin:195px 0px 0px 397px;",
            "title": "Qingdao-Office",
            "address": "Address: Room 2501 Block A, Central International Plaza, N.19 Zhangzhou 2nd Road, Qingdao",
            "zipcode": "Postcode: 266071  ",
            "tel": "Tel: 0532-83867310",
            "fax": "",
            "email": "E-mail: tao_qiao@ecadi.com",
            "websit": ""
          },
          {
            "style": "margin:163px 0px 0px 375px;",
            "title": "Tianjin-Office",
            "address": "Address : Room 3620 Golden Crown Tower, N.20 Nanjing Road, Tianjin",
            "zipcode": "Postcode: 300042 ",
            "tel": "Tel: 022-23029217",
            "fax": "",
            "email": "E-mail: tianjin@ecadi.com ",
            "websit": ""
          },
          {
            "style": "margin:244px 0px 0px 418px;",
            "title": "Suzhou-Branch",
            "address": "Address: Block B 14th Floor, Huafu Building, N.76 Shishan Road, New District, Suzhou",
            "zipcode": "Postcode: 215011 ",
            "tel": "Tel: 0512-68252930",
            "fax": "",
            "email": "E-mail:  zhong_zhou@ecadi.com",
            "websit": ""
          },
          {
            "style": "margin:160px 0px 0px 413px;",
            "title": "Dalian-Branch",
            "address": "Address : Room 2502 Hongyu Mansion, 68 Renmin Road Zhongshan District, Dalian",
            "zipcode": "Postcode: 116001 ",
            "tel": "Tel: 0411-82730822",
            "fax": "",
            "email": "E-mail: changfeng_jiang@ecadi.com",
            "websit": ""
          },
          {
            "style": "margin:272px 0px 0px 290px;",
            "title": "Chongqing-Branch",
            "address": "Address : Room 1, 10th Floor Carnival Building, No.9 Walking Street Guanyin Bridge Jiangbei District, Chongqing",
            "zipcode": "Postcode: 400020 ",
            "tel": "Tel: 023-67865527 ",
            "fax": "",
            "email": "E-mail: wei_guo@ecadi.com ",
            "websit": ""
          },
          {
            "style": "margin:151px 0px 0px 366px;",
            "title": "Beijing-Office",
            "address": "Address : Room 1806 Block B, World Trade Center, 36 North 3rd ring Road East, Dongcheng District, Beijing",
            "zipcode": "Postcode: 100013 ",
            "tel": "Tel: 010-58257368",
            "fax": "",
            "email": "E-mail: hongze_du@ecadi.com ",
            "websit": ""
          },
          {
            "style": "margin:214px 0px 0px 351px;",
            "title": "Zhengzhou-Branch",
            "address": "Address: 501-1 Expo Building, N.8 Business Outer Ring Road, New District, Zhengdong",
            "zipcode": "",
            "tel": "Tel: 0371--65713511",
            "fax": "",
            "email": "E-mail: Hxguoqiang@sina.com",
            "websit": ""
          },
          {
            "style": "margin:344px 0px 0px 365px;",
            "title": "Shenzhen-Branch",
            "address": "Address: 2803A Golden Central Tower, N.3037 Jintian Road, Futian District, Shenzhen",
            "zipcode": "Postcode: 518048 ",
            "tel": "Tel: 0755-82804739",
            "fax": "",
            "email": "E-mail: szbsc@xd-ad.com.cn",
            "websit": ""
          },
          {
            "style": "margin:358px 0px 0px 360px;",
            "title": "HK-Subsidiary",
            "address": "Address: 6/F Tien Chu Commercial Building, N.173-174 Gloucester Road Wan Chai, HK China",
            "zipcode": "",
            "tel": "Tel: 852-28916336",
            "fax": "",
            "email": "E-mail: jingyu_zhou@xd-ad.com.cn",
            "websit": ""
          },
          {
            "style": "margin:388px 0px 0px 323px;",
            "title": "Hainan-Branch",
            "address": "Address: A6 6th Building Haidian 5 Road, Haikou",
            "zipcode": "Postcode: 570208",
            "tel": "",
            "fax": "",
            "email": "E-mail: yun_liu@xd-ad.com.cn",
            "websit": ""
          },
          {
            "style": "margin:339px 0px 0px 237px;",
            "title": "Yunnan-Branch",
            "address": "Address: Block BC 22nd floor, Dongfeng Road West Wuhua District, Kunming China",
            "zipcode": "Postcode: 650031",
            "tel": "Tel: 0871-5376766 ",
            "fax": "",
            "email": "E-mail: xl-yn@163.com",
            "websit": ""
          },
          {
            "style": "margin:129px 0px 0px 78px;",
            "title": "Xinjiang-Branch",
            "address": "Address : Room 709, No. 113 Xinmin Road, Urumqi",
            "zipcode": "Postcode: 830002",
            "tel": "Tel: 0991-2616272",
            "fax": "",
            "email": "",
            "websit": ""
          },
          {
            "style": "margin:305px 0px 0px 295px;",
            "title": "Guiyang-Branch",
            "address": "Address : N.1 12th Floor Zhongtian Business Building, Dusi Road Nanming District, Guiyang",
            "zipcode": "Postcode: 550002",
            "tel": "Tel: 0851-8529990",
            "fax": "",
            "email": "E-mail: guoyn@siadr.com.cn",
            "websit": ""
          },
          {
            "style": "margin:262px 0px 0px 354px;",
            "title": "Wuhan-Office",
            "address": "Address: Room 2909 Block I, New World International Trade tower, N.568 Jianshe Avenue, Hankou, Wuhan",
            "zipcode": "Postcode: 430022",
            "tel": "Tel: 027-85267467",
            "fax": "",
            "email": "E-mail: qinghong_zhang@ecadi.com",
            "websit": ""
          },
          {
            "style": "margin:254px 0px 0px 346px;",
            "title": "Wuhan-Branch",
            "address": "Address : Room 3403 Block I, New World International Trade tower, N.568 Jianshe Avenue, Hankou, Wuhan",
            "zipcode": "Postcode: 430022",
            "tel": "Tel: 027-85267353",
            "fax": "",
            "email": "E-mail: jianmin_wu@xd-ad.com.cn",
            "websit": ""
          },
          {
            "style": "margin:288px 0px 0px 340px;",
            "title": "Changsha-Branch",
            "address": "Address: Room 3203 32th Floor, Shuntian International Fortune Center, N.80 2nd Section Furong Middle Road, Changsha",
            "zipcode": "Postcode: 414005",
            "tel": "Tel: 0731-88181328",
            "fax": "",
            "email": "E-mail: zhouhong_a@siadr.com.cn",
            "websit": ""
          },
          {
            "style": "margin:239px 0px 0px 408px;",
            "title": "Wuxi-Branch",
            "address": "Address : 7th floor west, N.688 Hubin Road, Wuxi",
            "zipcode": "Postcode: 214071",
            "tel": "Tel: 0510-85858665",
            "fax": "",
            "email": "E-mail: zhouwj@siadr.com.cn",
            "websit": ""
          },
          {
            "style": "margin:258px 0px 0px 250px;",
            "title": "Sichuan-Branch",
            "address": "Address: Room 06 26th Floor, Huamin Empire Building, N. 1 Fuxing Street, Jinjiang District, Chengdu Sichuan",
            "zipcode": "Postcode: 610016",
            "tel": "Tel: 028-86703816 ",
            "fax": "",
            "email": "E-mail: yuefei_zhou@xd-ad.com.cn",
            "websit": ""
          }
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
				$('article #inner div.location-hd a').html(data_title+"<b>▼</b>");
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
/*
*var ins = $(xxx).pop()
* ins.show({
	direction:horizontal||vertical
	thumb:[
		'../public/thumb_01.jpg',
		'../public/thumb_02.jpg',
		'../public/thumb_03.jpg'
	],
	cover:[
		'../public/cover2.jpg'
	],
	dt:'2012年现代设计重点项目',
	dd:[
		'建筑地点：上海浦东陆家嘴金融贸易开发区的中心区',
		'总建筑面积（m<sup>2</sup>）：289500',
		'建筑高度（m）：420.5',
		'合作设计单位：芝加哥SOM公司'
	]

})
*/
epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0')
	$.fn.autoMiddle = function(){
		// return '';
		// return this.each(function(){
		// 	$(this).css("position","absolute");
		// 	$(this).css({
	 //              "left": ($(this).parent('.slideshow .foto li').width() - $(this).outerWidth())/2,
	 //              "top": ($(this).parent('.slideshow .foto li').height() - $(this).outerHeight())/2
	 //     	});
		// });
	}
	$(function(){
		
		$.pop = function (el,options){
			this._setoptions(el,options);
		}
		$.pop.prototype = {
			_setoptions:function(el,options){
				this.$el = $(el);
				this.options = $.extend(true,$.pop.defaults,options||{});
				
				this._render();
			},
			_render:function(){
				this.$pop = $('<div class="lightbox" id="_pop_"></div>');
				this.$pop.appendTo($('body'));
				this.$pop.html(this.options.templates.pop);
				this.$pop.appendTo($('body'));
				this.$foto = this.$pop.find('.foto');
				this.$dl = this.$pop.find('dl');
				this.$ul = this.$pop.find('.thumb');
				this.$close = this.$pop.find('.close').find('a');
				this.$overlay = this.$pop.find('.overlay');
				this.$prev = this.$pop.find('.prev');
				this.$next = this.$pop.find('.next');

				this._delegateEvents();
			},
			_destory:function(){
				this.$pop.remove();
				this.data('pop',null)
			},
			show:function(opt){
				var self = this;
				if(opt.foto.length<1)return;
				this.$foto.html('');
				$.tmpl(this.options.templates.foto,{
					covers:opt.foto
				}).appendTo(this.$foto);

				this.$dl.html('');
				$.tmpl(this.options.templates.dl,{
					dt:opt.dt,
					dd:opt.dd
				}).appendTo(this.$dl);
				this.$ul.html('');
				$.tmpl(this.options.templates.ul,{
					thumbs:opt.ul
				}).appendTo(this.$ul);
				if(opt.direction=='horizontal'){
					this.$pop.removeClass('vertical').addClass('horizontal')
				}else if(opt.direction=='vertical'){
					this.$pop.removeClass('horizontal').addClass('vertical')
				}
				this.$pop.fadeIn();
				//this.$foto.find('img').autoMiddle();
				this.$foto_imgs = this.$foto.find('img');
				this.foto_data = opt.foto;
				this.$ul_imgs = this.$ul.find('img');
				this.total = this.$foto_imgs.length-1;
				this.index = 0;

				setTimeout(function(){self.init_foto()},50);
				// self.foto_show(this.index);
				// self.ul_show(this.index)
			},
			hide:function (){
				//this.$pop.hide();
				this.$pop.fadeOut();
			},
			_delegateEvents:function(){
				var self = this;
				this.$close.click(function(){
					self.hide();
				})
				this.$overlay.click(function(){
					self.hide();
				})
				this.$foto.click(function(){

				})
				this.$ul.click(function(event){
					var el = event.target;
			        switch(el.nodeName.toLowerCase()){
			            case "img" :
			            	var temp = null;
			            	for (var i = self.$ul_imgs.length - 1; i >= 0; i--) {
			            		var img = self.$ul_imgs[i];
			            		if(img == el){
			            			temp = i
			            			break;
			            		}
			            	};
			            	self.foto_show(temp);
			            	self.ul_show(temp)
							self.index = temp;
			            break;
			           
			            case "p" :
			                //do somethings
			            break;
			           
			            default:
			                //do somethings
			        }
				})
				this.$prev.click(function(event){
					var temp = self.index-1;
					if(temp<0)temp = self.total;
					self.foto_show(temp);
					self.ul_show(temp)
					self.index = temp;
				})
				this.$next.click(function(){
					var temp = self.index+1;
					if(temp>self.total)temp = 0;
					self.foto_show(temp);
					self.ul_show(temp)
					self.index = temp;
				})
				
			},
			foto_show:function (temp){
				var self = this;
				if(temp == self.index)return;
				$(self.$foto_imgs[self.index]).parents('li').fadeOut();
				$(self.$foto_imgs[temp]).parents('li').fadeIn();
				self.foto_centralize(temp);
			},	
			ul_show:function (temp){
				var self = this;
				if(temp == self.index)return;
				$(self.$ul_imgs[self.index]).parents('li').removeClass('active');
				$(self.$ul_imgs[temp]).parents('li').addClass('active');
				
			},
			foto_centralize:function(temp){
				var elem = this.$foto_imgs[temp], elem_data = this.foto_data[temp];
				if (typeof $(elem).attr('style') == 'undefined'){
					var elem_thumb = this.$ul_imgs[temp];
					var w = elem_data.width?elem_data.width:$(elem).width(), pw = $(elem).parents('li').width();
					var h = elem_data.height?elem_data.height:$(elem).height(), ph = $(elem).parents('li').height();
					if (w/h > pw/ph ){
						$(elem).attr('style','position:absolute;top:'+((ph-pw*h/w)/2)+'px;');
					}else{
						$(elem).attr('style','margin:auto;');

					}
				}
			},
			init_foto:function(){
				if (this.$foto_imgs.length>0){
					this.foto_centralize(0);
				}
			}
		}
		$.pop.defaults = {
			templates:{
				foto:[
					'		<ul>',
					'		 {{each covers}}	',
					'			{{if !$index}}',
					'      		<li style="display:block;"><img src="${$value}" alt=""></li>',
					'			{{else}}	',
					'      		<li><img src="${$value}" alt=""></li>',
					'			{{/if}}',
					'		 {{/each}}',
					'		</ul>'
				].join(''),
				dl:[
					'        <dt>${dt}</dt>',
					'		 {{each dd}}	',
					'        <dd>${$value}</dd>',
					'		 {{/each}}'			
				].join(''),
				ul:[
					'		<ul>',
					'		 {{each thumbs}}	',
					'			{{if !$index}}',
					'           <li class="active"><img src="${$value}" alt=""></li>',
					'			{{else}}	',
					'        	<li><img src="${$value}" alt=""></li>',
					'			{{/if}}',
					'		 {{/each}}',
					'		</ul>'
				].join(''),
				pop:[
					'  <div class="lightbox-container">',
					'    <div class="close"><a href="javascript:void(0);">CLOSE [X]</a></div>',
					'    <div class="loading">Loading...</div>',
					'    <div class="slideshow">',
					'	 	<div class="foto"></div>',
					'	 	<div class="thumb"></div>',
					'       <div class="prev"><a href="javascript:void(0);">prev</a></div>',
					'       <div class="next"><a href="javascript:void(0);">next</a></div>',
					'		<dl></dl>',
					'    </div>',
					'  </div>',
					'  <div class="overlay"></div>',
					'</div>'
				].join('')

			}
		}
		$.fn.pop = function (opt){
			var instance = this.data('pop');
			if(instance){
				return instance;
			}else {
				this.data('pop',instance = new $.pop(this,opt));
				return instance;
			}
		}	
	})
	
})

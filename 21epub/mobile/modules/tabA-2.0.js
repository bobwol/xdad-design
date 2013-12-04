epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0');
	epub["import"]('epub.modules.page@4.0');
	function tabA(obj,options){
		this.data = {};
		this.catchData = {};
		this.$el = $(obj);
		this.options = options||{};
		this.configure();
		this.initialize();
	};
	tabA.prototype = {
		constructor: tabA,
		configure:function(){
			var tabALoaded = this.options.tabALoaded;
			for (var i = tabALoaded.length - 1; i >= 0; i--) {
				var item = tabALoaded[i];
				$(item).data('tabALoaded',true);

			};
		},
		initialize:function(){
			var self = this;

			this.delegateEvents();
			if(self.$el.parents('.tab-mod').children('.bd').find('.pagination').length){
				this.regAjaxPage();
			}
		},
		render:function($el,$content,callback){	
			var self = this;
			var isLoaded = $el.data('tabALoaded');
			var param = $el.attr("data-param")||1;
			var size = self.options.size;
			var url = self.options.url.replace('{param}', param).replace('{size}',size);
			// var url = self.options.url+"size="+size+"&type="+param+"&page=1";

			if(isLoaded){
				self.options.showAfter($el,$content,self.$el);
				callback(self.catchData[url]);
			}else{
				
				self.getData({
					url:url,
					"catch":true,
					success: function (data, textStatus, jqXHR) {
	                    var data = data;
	                   
	                    $content.html("");
	                    $.tmpl(self.options.template,data).appendTo($content);
	                    self.catchData[url] = data;
	                    $el.data('tabALoaded',true);
	                    $el.attr("data-numpages", data.data.numpages);
	                    self.options.showAfter($el,$content,self.$el);
	                    callback(data);
	                },
	                error: function() {
	                   
	                }
				})
			}
		},
		getData:function (opt){
			$.ajax({
                dataType: 'json',
                type: 'GET',
                "catch":true,
                url: opt.url,
                success: opt.success,
                error: opt.error
            });
		},
		delegateEvents:function(){
			var self = this;
			var clickSelecter = self.options.click_selecter;
			var hoverSelecter = self.options.hover_selecter;
		
			self.$content = self.$el.parents('.tab-mod').children('.bd').children('.list').eq(0);
			self.$tab = self.$el.children('li').eq(0);

			this.$el.delegate(clickSelecter, 'click', function(e){
				self.$el.trigger('click.tabA',$(this));
			});
			this.$el.bind('click.tabA',function(e,el){
				if(!el)return;
				var $el = $(el);
				if($el.hasClass("active")){

				}else{
					$el.addClass('active').siblings().removeClass('active');
					var $content = $el.parents('.tab-mod').children('.bd').children('.list')
					.eq($el.parent().children('li').index(el));
					self.$content = $content;
					self.$tab = $el;
					$content.addClass('active').siblings().removeClass('active');
					
					self.render.call(self,$el,$content,function(data){
						if(self.$el.parents('.tab-mod').children('.bd').find('.pagination').length){
							self.updateAjaxPage(data.data.numpages);
						};
					});
				};
				
			})

			if(epub.runtimeEnvironment.platform == 'mobile'){
			
			}else{
				this.$el.parent().parent().delegate(hoverSelecter, 'mouseover', function(e){
					$(this).children('.action, .overlay').show();
				});
				this.$el.parent().parent().delegate(hoverSelecter, 'mouseout', function(e){
					$(this).children('.action, .overlay').hide();
				});
			}

			return this;
		},
		regAjaxPage:function(){
			// console.log("regAjaxPage")
			var self = this;
			self.$pagination = self.$el.parents('.tab-mod').children('.bd').find('.pagination');
			// self.$pagination.hide();
			var catchData = {};
			var isFirst = true;
			var isUpdate = false;
			function isShowPage(data){
				if(data.numpages&&data.numpages>1){
					if(!isUpdate){
						self.updateAjaxPage(data.numpages);
					}
					self.$pagination.show();
				}else{
					self.$pagination.hide();
				}
				// self.$pagination.show();
				
			}
			function render (no){
				 // console.log("regAjaxPage render")
				var param = self.$tab.attr("data-param")||1;
				var size = self.options.size;
				// var urlA = self.options.url+"size="+size+"&type="+param+"&page="+no;
				var urlA = self.options.url.replace('{param}', param).replace('{size}',size);
				urlA = urlA + "&page="+no;

				// console.log(self.$content,self.$tab,param)
				// console.log(self.catchData)
				var data = self.catchData[urlA];
				if(data){
					  	if(isFirst){
					  		// console.log("catch isFirst::"+isFirst)
		                	isFirst = false;
		                	// isShowPage(data)
		                	
		                }else{
		                	self.$content.html("");
							$.tmpl(self.options.template,data).appendTo(self.$content);
		                }

				}else{
					$.ajax({
			            dataType: 'json',
			            type: 'GET',
			            url: urlA,
			            "catch":true,
			            success: function (data, textStatus, jqXHR) {
			                var data = data;
			                // console.log("ajax isFirst::"+isFirst)
			                if(isFirst){
			                	isFirst = false;
			                	// isShowPage(data.data)
			                }else{
			                	self.$content.html("");
			               		$.tmpl(self.options.template,data).appendTo(self.$content);	
			               		
			                }
			                self.catchData[urlA] = data;
			            },
			            error: function() {
			               
			            }
			        });
				}
				
			};
			// console.log(self.$tab)
			self.$pagination.page({
				totalPages:self.$tab.attr('data-numpages')||12,
				goto:function(no){
					render (no);
				}
			});
			self.updateAjaxPage = function(num){
				isUpdate = true;
				// console.log("updateAjaxPage")
				isFirst = true;
				self.$pagination.page({
					totalPages:num||self.$tab.attr('data-numpages')||12,
					goto:function(no){
						render (no);
					}
				})
			}
		}

	};
	$.fn.tabA = function(options){
		var defaults = {
			click_selecter: "li",
			hover_selecter:'.list .cover',
			template:[
				'<ul>',
				'{{each(i, name) results}}',
				'	<li class="${calssa}">',
				'		<div class="cover">',
				'			<a href="javascript:void(0);">',
				'				<img src="${img}" alt="">',
				'			</a>',
				'			<div class="action">',
				'				<ul>',
				'					<li>',
				'						<a href="javascript:void(0);">查看</a>',
				'					</li>',
				'					<li>',
				'						<a href="javascript:void(0);">阅读</a>',
				'					</li>',
				'				</ul>',
				'			</div>',
				'			<div class="overlay"></div>',
						
				'			<div class="desc">',
				'				{{html desc}}',
				'			</div>',
				'		</div>',
				'	</li>',
				'{{/each}}',
				'</ul>'
			].join(''),
			url:"../../../../data/ca.index.json?",
			tabALoaded:[],
			showAfter:function($el,$content){

			},
			size:4
		};  
	    var options = $.extend(true,defaults, options);
		return  this.each(function(){
			var $this = $(this);
			var data = $this.data('tabA');
			if (!data) $this.data('tabA', (data = new tabA($this,options)))
			if (typeof option == 'string') data[option]()
		});
	}
});


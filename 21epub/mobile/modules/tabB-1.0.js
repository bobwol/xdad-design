epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0');
	function tabA(obj,options){
		this.data = {};
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
		},
		render:function($el,$content){	
			var self = this;
			var isLoaded = $el.data('tabALoaded');
			if(isLoaded){

			}else{
				var param = $el.attr("data-param")||1;
				var url = self.options.url.replace('{path}', param);
				self.getData({
					url:url,
					success: function (data, textStatus, jqXHR) {
	                    var data = data;
	                    console.log(data)
	                    $content.html("");
	                    $.tmpl(self.options.template,data).appendTo($content);
	                    $el.data('tabALoaded',true);
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
                url: opt.url,
                success: opt.success,
                error: opt.error
            });
		},
		delegateEvents:function(){
			var self = this;
			var clickSelecter = self.options.click_selecter;
			var hoverSelecter = self.options.hover_selecter;
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
					$content.addClass('active').siblings().removeClass('active');
					self.render.call(self,$el,$content);
				};
				
			});
			return this;
		}
	};
	$.fn.tabA = function(options){
		var defaults = {
			click_selecter: "li",
			hover_selecter:'.list .cover',
			template:[
				'<ul>',
				'{{each(i, name) data.results}}',
				'	<li class="single">',
				'		<div class="cover">',
				'			<a href="#">',
				'				<img src="${thumbnail}" alt="">',
				'			</a>',
				'			<div class="action">',
				'				<ul>',
				'					<li>',
				'						<a href="${target_id}/info.html" >查看</a>',
				'					</li>',
				'					<li>',
				'						<a href="${target_id}/read.html">阅读</a>',
				'					</li>',
				'				</ul>',
				'			</div>',
				'			<div class="overlay"></div>',
				'		</div>',
				'		<div class="desc">',
				'			<h4><a href="javascript:void(0);">《${title}》</a></h4>',
                '      		<ul>',
				'                <li>${publisher}</li>',
				'                <li>${issued}</li>',
				'                <li>${pages}页</li>',
				'          </ul>',
				'		</div>',
				'	</li>',
				'{{/each}}',
				'</ul>'
			].join(''),
			url:"../../../../data/ca.index.json?",
			tabALoaded:[]
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


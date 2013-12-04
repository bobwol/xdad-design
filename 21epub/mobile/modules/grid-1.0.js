epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0')
	epub["import"]('epub.modules.page@1.0')
	function Grid(obj,options){
		this.data = {};
		this.$el = obj;
		this.options = options||{};
		this.configure();
		this.initialize();
		
	};
	Grid.prototype = {
		configure:function(){
			
		},
		initialize:function(){
			var self = this;
			this.delegateEvents();
			this.getData(function(data){
				self.render(data);
			})
		},
		uninit:function(){


		},
		template:function(){

		},
		render:function(data){	

			this.$el.html("");
			$.tmpl(this.options.template,data).appendTo(this.$el);
			if(this.options.showPage){
				var $page = $('<div class="pagination pagination-centered" id="JS_list_page"></div>')
				$page.appendTo(this.$el); 
				$page.page({totalPages:20});
			}
			
			this.$el.trigger('click.grid',this.$el.find(this.options.click_selecter+":first"));
		},
		refresh:function(){

		},
		fetch:function(){

		},
		config:function(key){
			return this.options[key]

		},
		delegateEvents:function(){
			var self = this;
			var clickSelecter = this.config('click_selecter');
			this.$el.delegate(clickSelecter, 'click', function(e){
				
				self.$el.trigger('click.grid',$(this));

			});
			this.$el.bind('click.grid',function(e,el){
				if(!el)return;
				if($(el).hasClass("active")){

				}else{
					self.$el.find(".active").removeClass("active");
					$(el).addClass("active");
					self.options.item_click();
				};
				
			})
			this.$el.delegate('thead input', 'click', function(e){
				if($(this).attr("checked")) {
					$("input[type='checkbox']",self.$el.find('tbody')[0]).attr("checked","true"); 
				}else{
					$("input[type='checkbox']",self.$el.find('tbody')[0]).removeAttr("checked"); 
				}

			});
			return this;
		},
		getCurrent:function(){

		},
		getData:function(callback){
			this.options.get_data(callback)
		}

	};
	$.fn.grid = function(options){
		var defaults = {
			click_selecter: "tr",
			template:"",
			url:"",
			item_click:function(){

			}
		};  
        var options = $.extend(true,defaults, options);
		this.each(function(){
			var obj = $(this);  
			return obj.data('grid')||obj.data('grid',new Grid(obj,options));
		});
	}
});
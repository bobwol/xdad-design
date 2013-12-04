epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0')
	function Dtail(obj,options){
		this.data = {};
		this.$el = obj;
		this.options = options||{};
		this.configure();
		this.initialize();
		
	};
	Dtail.prototype = {
		configure:function(){
			
		},
		initialize:function(){
			var self = this;
			//this.delegateEvents();
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
			//this.$el.trigger('click.tree',this.$el.find(this.options.click_selecter+":first"));
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
				
				self.$el.trigger('click.tree',$(this));

			});
			this.$el.bind('click.tree',function(e,el){
				if(!el)return;
				if($(el).hasClass("active")){

				}else{
					self.$el.find(".active").removeClass("active");
					$(el).addClass("active");	
					self.options.item_click();
				};
				
			})
			this.$el.delegate('.hitarea', 'click', function(e){
				$(this).parent().parent().toggleClass('unfold');
				$(this).parent().parent().children('ol').slideToggle('fast');

			});
			return this;
		},
		getCurrent:function(){

		},
		getData:function(callback){
			this.options.get_data(callback)
		}

	};
	$.fn.detail = function(options){
		var defaults = {
			click_selecter: "h4",
			template:"",
			url:"",
			item_click:function(){

			}
		};  
        var options = $.extend(true,defaults, options);
		this.each(function(){
			var obj = $(this);  
			return obj.data('detail')||obj.data('detail',new Dtail(obj,options));
		});
	}
});
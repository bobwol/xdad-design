epub.def(function(){
	epub["import"]('epub.modules.tmpl@1.0')
	function Menu(obj,options){
		this.data = {};
		this.$el = obj;
		this.options = options||{};
		this.configure();
		this.initialize();
		
	};
	Menu.prototype = {
		configure:function(){
			var css = document.createElement("style");
			css.setAttribute("type", "text/css");
			var css_str = this.options.css;
			var css_text = document.createTextNode(css_str);
			css.appendChild(css_text);
			if(css.styleSheet){ 
			     css.styleSheet.cssText = css_str;
			}else {
			     var css_text = document.createTextNode(css_str);
			     css.appendChild(css_text);
			}
			document.getElementsByTagName("head")[0].appendChild(css);
			this.$menu = $('<div class="newMenu" style="display: ; position: absolute; left: -999px; top: -999px;"></div>');
			this.$menu.appendTo($('body'))
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

			this.$menu.html("");
			$.tmpl(this.options.template,data).appendTo(this.$menu);
			//this.$el.trigger('click.grid',this.$el.find(this.options.click_selecter+":first"));
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

			self.show=false;
		    $(self.options.hover_selecter).each(function(){
				$(this).hover(function(){	
					if(!$(this).hasClass('active'))return;				      
					var pos = $(this).offset();
					self.$menu.show().css({"position":"absolute","left":pos.left+$(this).width()/2,"top":pos.top+$(this).height()})	
					self.show=true;
				},function(){
					self.show=false;
					setTimeout(function(){
						newMenuHide();
					},500);
				})  					
		    })
		  
		    self.$menu.hover(function(){
				self.show=true;
			},function(){
				self.show=false;
				newMenuHide();
			})  
		
			function newMenuHide(){
				if(self.show==false){
					self.$menu.hide();
				}
			}
			// var clickSelecter = this.config('click_selecter');
			// this.$el.delegate(clickSelecter, 'click', function(e){
				
			// 	self.$el.trigger('click.grid',$(this));

			// });
			// this.$el.bind('click.grid',function(e,el){
			// 	if(!el)return;
			// 	if($(el).hasClass("active")){

			// 	}else{
			// 		self.$el.find(".active").removeClass("active");
			// 		$(el).addClass("active");
			// 		self.options.item_click();
			// 	};
				
			// })
			// this.$el.delegate('thead input', 'click', function(e){
			// 	if($(this).attr("checked")) {
			// 		$("input[type='checkbox']",self.$el.find('tbody')[0]).attr("checked","true"); 
			// 	}else{
			// 		$("input[type='checkbox']",self.$el.find('tbody')[0]).removeAttr("checked"); 
			// 	}

			// });
			return this;
		},
		getCurrent:function(){

		},
		getData:function(callback){
			this.options.get_data(callback)
		}

	};
	$.fn.menu = function(options){
		var defaults = {
			hover_selecter:'h4',
			click_selecter: "tr",
			template:[
				'<ul>',
				'<li><a href="#">增加</a></li>',
				'<li><a href="#">删除</a></li>',
				'<li><a href="#">修改</a></li>',
				'</ul>'
			].join(""),
			url:"",
			item_click:function(){

			},
			css:[
				'.newMenu{ background:white; width:68px; display:;}',
				'.newMenu li { text-align:center; line-height:24px; height:24px;border: 1px solid #DDDDDD;}',
				'.newMenu li a{ color:black; display:block;width:68px;height:24px;}',
				'.newMenu li a:hover{color:#7BBE37;}'
			].join("")
		};  
        var options = $.extend(true,defaults, options);
		this.each(function(){
			var obj = $(this);  
			return obj.data('menu')||obj.data('menu',new Menu(obj,options));
		});
	}
});


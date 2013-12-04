;(function(){
	//创建docview结构
	$.fn.annotate = function(opt){
		
		var ins = this.data("Annotate");
		if(ins){
			ins.update&&ins.update(opt)
		}else{
			
			var ins = new Annotate(this,opt)
			this.data("Annotate",ins);
		}
		return this;
	}

	function Annotate(el,opt){

		var $el = $(el);

		var width = opt.width||$el.width();
		var height = opt.height||$el.height();
		var html = $el.html();
		
		$('#DocViewer').find('.page-outer').css({
			width:width+"px",
			height:height+"px",
		})
		$('#DocViewer').find('.page').css({
			width:width+"px",
			height:height+"px",
		})
		console.log(opt.width,opt.height)
		$el.html('').hide();

		$('#DocViewer').show();
		$('#DocViewer').find('.layer.text').html(html);
		/**/
		var docViewer = new DocViewer();
		docViewer.mode("comment-point");
		this.$DocViewer = $('#DocViewer');
		this.$layer_text = $('#DocViewer').find('.layer.text');
		this.$el = $el;
		this.html = html;
		
	}
	Annotate.prototype.update = function(type){
		if(type=='destory'){
			
			this.$DocViewer.find('.layer.text').html('');
			this.$DocViewer.find('.layer.highlights').remove();
			this.$DocViewer.find('.layer.strikeouts').remove();
			this.$DocViewer.find('.layer.annotations').remove();
			this.$DocViewer.find('.comment-lines').remove();
			this.$DocViewer.find('.context-menu.point-menu').remove();
			this.$DocViewer.find('#PageMargin1').remove();
			this.$DocViewer.find('.context-menu.point-menu').remove();
			this.$DocViewer.removeClass('comment-point-mode').hide();
			this.$el.html(this.html).show(); 
			this.$el.data("Annotate",null);
		}
	}
	
})();
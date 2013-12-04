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
		$el.remove();
		var str = [
			'<div id="DocViewer" class="docviewer">',
			'	<div class="doc subpx" style="font-size: 10px;">',
			'		<div style="width:'+width+'px; height:'+height+'px;" class="page-outer">',
			'			<div style="width:'+width+'px; height:'+height+'px;" class="page" id="Page1">',
			'				<div class="layer text">',	

			'				</div>',
			'			</div>',
			'		</div>',
			'	</div>',
			'</div>'
		].join('');
		var $container = $('<div></div>').appendTo($('body'));
	   $container.html(str);

	  
	   var $layer_text = $container.find('.layer.text');
		$layer_text.html(html);

		
		var docViewer = new DocViewer();
		docViewer.mode("comment-point");
	}
	
})();
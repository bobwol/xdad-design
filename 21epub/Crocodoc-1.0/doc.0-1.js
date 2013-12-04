var _h = [
	'<div class="page" style="width:79.75em; height:121.00em;">',
		'<div class="layer img">',
			'<img class="bg-img" style="width:79.75em; height:121.00em;" />',
			'</div><div class="layer text">',
				'<div class="tb" style="left:62.04em; top:1.52em; width:3.17em; height:1.83em;">',
					'<span class="ln n" style="height:1.833em;width:3.172em;">',
						'<span style="font-size:1.83em;color:#ffffff;" class="f777">',
							'007',
						'</span>',
					'</span>',
				'</div>',
			'</div>',
		'</div>',
	'</div>'; 
if(navigator.userAgent.indexOf('MSIE 7')>-1){
	 _h = _h.replace(/([^>])<(\/?)span/g,'$1<wbr/><$2span'); 
};
jsonp_PageLoaded(1,0,_h);
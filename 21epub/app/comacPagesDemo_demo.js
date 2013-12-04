epub.app(function(){
  epub["import"]('epub.modules.bootstrap@1.0')
  epub["import"]('epub.modules.nanoscroller@1.0')
	epub["import"]('epub.modules.pageEdit@1.0')
	$(function (){
            var timer = setInterval(function(){
            if($('.mce-tinymce')[0]){
                // if($('.mce-tinymce')[0].style.position!='fixed'){
                    $('.mce-tinymce').css( {
                        position: 'fixed',
                        top:'0px',
                        right:'0px'
                    })
                    // clearInterval(timer)
                    // timer = null;
                // }
            }
            
        },500)
        tinymce.init({
            selector: '#articles',
            inline: true
        });
        // nanoscrollbar
        $('.nanoscrollbar').wrapInner('<div class="nano"><div class="content"></div></div>');
        $('.nano').nanoScroller();
        $('.nano .pane').css({'visibility': 'hidden'});
        $('.nano').hover(function (){
            $(this).children('.pane').css({'visibility': 'visible'});
          },function (){
            $(this).children('.pane').css({'visibility': 'hidden'});
        });
        $('.nano').mouseover(function (){
          $('.nano').nanoScroller();
        //  $('.tab-content .nano').nanoScroller({ sliderMaxHeight: $(window).height() - 75 - 36 - 9 - 32 - 1 });
        });
        $('#articles').pageEdit({
            templates:{
               page:[
                  '<div class="doc-container typo tiny-editor">',
                  '    <div class="doc-header"><span class="planetype">ARJ21-700</span>ARJ21-700飞机客舱乘务员转机型训练手册</div>',
                  '    <div class="doc-body">',
                  '    </div>',
                  '    <div class="doc-footer">© 2012 上海飞机客户服务有限公司 <span class="time">2011-05</span><span class="version">修订：4</span></div>',
                  '  </div>'
              ].join("")
            },
            editSelecter:'.content',
            regionSelecter:'.doc-body'
            
        });

          
        $("#btn_preview").bind("click", function() {
             $(this).parent().parent().find('.active').removeClass('active');
             $(this).parent().addClass('active')
            $('.flowed').pageEdit('preview')
        })
        $("#btn_edit").bind("click", function() {
             $(this).parent().parent().find('.active').removeClass('active');
             $(this).parent().addClass('active')
            $('.flowed').pageEdit('edit')
        })
        $("#btn_previewContent").bind("click", function() {
             $(this).parent().parent().find('.active').removeClass('active');
             $(this).parent().addClass('active')
            $('.flowed').pageEdit('getPreviewContent')
        })
        $("#btn_previewNewWindow").bind("click", function() {
             $(this).parent().parent().find('.active').removeClass('active');
             $(this).parent().addClass('active')
            $('.flowed').pageEdit('previewOpenWindow')
        })
        
	})
})
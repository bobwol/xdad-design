epub.app(function(){
	epub["import"]('epub.modules.pageEdit@1.0')
  epub["getScript"]("../tinymce/js/tinymce/tinymce.min",function(){
      var timer = setInterval(function(){
        if($('.mce-tinymce')[0]){
           $('.mce-tinymce').css( {
                position: 'fixed',
                top:'40px',
                right:'0px'
            })
        }
        
    },500)
    tinymce.init({
        selector: '.flowed',
        inline: true
    });
  });


	$(function (){

        epub["getScript"]("../html2canvas/html2canvas");
        // epub["getScript"]("../jsPDF/jspdf");
        // epub["getScript"]("../jsPDF/libs/Deflate/adler32cs");
        // epub["getScript"]("../jsPDF/libs/FileSaver.js/FileSaver");
        // epub["getScript"]("../jsPDF/libs/Blob.js/BlobBuilder");
        // epub["getScript"]("../jsPDF/jspdf.plugin.addimage");
        // epub["getScript"]("../jsPDF/jspdf.plugin.standard_fonts_metrics");
        // epub["getScript"]("../jsPDF/jspdf.plugin.split_text_to_size");
        // epub["getScript"]("../jsPDF/jspdf.plugin.from_html");
       $('.flowed').pageEdit({
            templates:{
               page:[
                  '<center style="display:block;">',
                  '    <div  style="text-align:left;background-color:white;width:14.5cm; height:23.97cm; padding-top:96px; padding-right:120px; padding-bottom:96px; padding-left:120px;">',
                  '        <div  class="region" style="border:dotted 0px #cccccc;width:100%;height:100%;overflow:hidden;">',
                  '       </div>',
                  '   </div>',
                  '</center><br/>'
              ].join("")
            },
            editSelecter:'.edit',
            regionSelecter:'.region'
            
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
        $("#btn_pageBreak").bind("click", function() {
             $(this).parent().parent().find('.active').removeClass('active');
             $(this).parent().addClass('active')
            $('.flowed').pageEdit('pageBreak')
        })
        $("#btn_canvas").bind("click", function() {
             $(this).parent().parent().find('.active').removeClass('active');
             $(this).parent().addClass('active')
            $('.flowed').pageEdit('canvas')
        })
        // $("#btn_pdf").bind("click", function() {
        //      $(this).parent().parent().find('.active').removeClass('active');
        //      $(this).parent().addClass('active')
        //     $('.flowed').pageEdit('pdf')
        // })
        
        
	})
})
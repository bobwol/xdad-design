epub.app(function(){
	epub["import"]('epub.modules.pageEdit@1.0')
  // epub["getScript"]("../tinymce/js/tinymce/tinymce.min",function(){
  //     var timer = setInterval(function(){
  //       if($('.mce-tinymce')[0]){
  //          $('.mce-tinymce').css( {
  //               position: 'fixed',
  //               top:'40px',
  //               right:'0px'
  //           })
  //       }
        
  //   },500)
  //   tinymce.init({
  //       selector: '.flowed',
  //       inline: true
  //   });
  // });


	$(function (){

        // epub["getScript"]("../html2canvas/html2canvas");
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
       // function getData(){
            window._doc = {

              // "objects": [
                // {
                //       "name": "name0",
                //       "created": 1372496953.0,
                //       "unsaved": true,
                //       "modified": 1372496953.0,
                //       "class": "User",
                //       "id": 1,
                //       "uuid": "uuid0"
                //   }
                // ],
              //     {"class":"Annotation","page":1,"uuid":"0d54bdeb-4d8b-fba5-f53b-1c14afabf5e0","x":293.03,"y":43.22,"owner":"uuid0","type":"point"},{"class":"Comment","uuid":"9d581875-1ee9-4a44-27c8-8da6b23e8cdb","annotation":"0d54bdeb-4d8b-fba5-f53b-1c14afabf5e0","content":"12","owner":"uuid0"},
              //     {"class":"Annotation","page":1,"uuid":"1b3e8e40-0a29-adc0-9896-8c88efa392d0","x":310.06,"y":58.28,"owner":"uuid0","type":"point"},{"class":"Comment","uuid":"613047d7-cc96-e41e-2ebc-18d9be46f79e","annotation":"1b3e8e40-0a29-adc0-9896-8c88efa392d0","content":"12","owner":"uuid0"},
              //     {"class":"Comment","uuid":"ea8fd8b3-24b5-4629-53b5-531684b1f53d","annotation":"9fcc778f-ad37-9c34-75df-743b7218b7d5","content":"12121","owner":"uuid0"},
              //     {
              //         "name": "name1",
              //         "created": 1372496953.0,
              //         "unsaved": true,
              //         "modified": 1372496953.0,
              //         "class": "User",
              //         "id": 1,
              //         "uuid": "uuid1"
              //     },

              //     {"class":"Annotation","page":1,"uuid":"9fcc778f-ad37-9c34-75df-743b7218b7d5","x":191.53,"y":113.94,"owner":"uuid1","type":"point"},{"class":"Comment","uuid":"ef74b99d-ddf8-8099-a5aa-cafa53b29021","annotation":"9fcc778f-ad37-9c34-75df-743b7218b7d5","content":"12","owner":"uuid1"},
              //     {"class":"Annotation","page":1,"uuid":"13770c5e-6dd3-8c2d-dd75-ed4bf2f54e77","x":247.19,"y":140.79,"owner":"uuid1","type":"point"},{"class":"Comment","uuid":"e9b52e7a-6c04-35df-4ec5-034c939f9b05","annotation":"13770c5e-6dd3-8c2d-dd75-ed4bf2f54e77","content":"12","owner":"uuid1"},
              //     {"class":"Annotation","page":1,"uuid":"bd668982-a78b-7fa7-2115-def5e0eb9cd4","x":257.67,"y":161.09,"owner":"uuid1","type":"point"},{"class":"Comment","uuid":"9dd14b3d-82fb-af64-c392-8c51b79fe850","annotation":"bd668982-a78b-7fa7-2115-def5e0eb9cd4","content":"12","owner":"uuid1"}

              // ],
             "objects": [
                  {
                      "name": "name0",
                      "created": 1372496953.0,
                      "unsaved": true,
                      "modified": 1372496953.0,
                      "class": "User",
                      "id": 1,
                      "uuid": "uuid0"
                  }
             ],//[{"session":"session1","owner":"uuid0","content":"12","annotation":"d956d80f-2a0f-e9df-b68e-d21cb601fe24","uuid":"f61b14bd-9168-40a6-834a-7dd73411b837","class":"Comment","_id":"51f3ebf8524d0d0d03000005"},{"session":"session1","type":"point","owner":"uuid0","y":115.9,"x":265.53,"uuid":"d956d80f-2a0f-e9df-b68e-d21cb601fe24","page":"1","class":"Annotation","_id":"51f3ebf8524d0d0d03000006"},{"session":"session1","uuid":"uuid0","id":"1","class":"User","name":"name0","_id":"51f3ebf8524d0d0d03000007"}],
             "user": "uuid0",
              "demo":true
          }
        //}
        
        


        epub["getScript"]("../crocodoc-5.0/annotate",function(){

        });

	     

        
         $("#btn_bind").bind("click", function() {
            $(this).parent().parent().find('.active').removeClass('active');
            $(this).parent().addClass('active');
            annotate.ready(function(){

             
                // alert(12)
                $.getJSON("http://localhost:3001/session/session1",function(data){
                   console.log("==================")
                    console.log(data)
                    window._doc["objects"]=window._doc["objects"].concat(data);
                    $(function(){
                      //getData();
                      var opt = {
                          width:788,//$(".left-column").width()-120,
                          height:8943//$(".left-column").height()-50
                      }
                       alert($.fn.annotate)
                      $("#annotate").annotate(opt);
                      
                    })
                })
             
            
                
                
            })
        });

         $("#btn_unbind").bind("click", function() {
            $(this).parent().parent().find('.active').removeClass('active');
            $(this).parent().addClass('active')
              annotate.ready(function(){
                //$(function(){
                $(function(){
                    
                   if($("#annotate").data("Annotate"))$("#annotate").annotate('destory');
                    
                })
            })
        })
        // $("#btn_preview").bind("click", function() {
        //      $(this).parent().parent().find('.active').removeClass('active');
        //      $(this).parent().addClass('active')
        //     $('.flowed').pageEdit('preview')
        // })
        // $("#btn_edit").bind("click", function() {
        //      $(this).parent().parent().find('.active').removeClass('active');
        //      $(this).parent().addClass('active')
        //     $('.flowed').pageEdit('edit')
        // })
        // $("#btn_previewContent").bind("click", function() {
        //      $(this).parent().parent().find('.active').removeClass('active');
        //      $(this).parent().addClass('active')
        //     $('.flowed').pageEdit('getPreviewContent')
        // })
        // $("#btn_previewNewWindow").bind("click", function() {
        //      $(this).parent().parent().find('.active').removeClass('active');
        //      $(this).parent().addClass('active')
        //     $('.flowed').pageEdit('previewOpenWindow')
        // })
        // $("#btn_pageBreak").bind("click", function() {
        //      $(this).parent().parent().find('.active').removeClass('active');
        //      $(this).parent().addClass('active')
        //     $('.flowed').pageEdit('pageBreak')
        // })
        // $("#btn_canvas").bind("click", function() {
        //      $(this).parent().parent().find('.active').removeClass('active');
        //      $(this).parent().addClass('active')
        //     $('.flowed').pageEdit('canvas')
        // })
        // $("#btn_pdf").bind("click", function() {
        //      $(this).parent().parent().find('.active').removeClass('active');
        //      $(this).parent().addClass('active')
        //     $('.flowed').pageEdit('pdf')
        // })
        
        
	})
})
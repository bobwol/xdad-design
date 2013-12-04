       <fieldset class="no-legend detail">
         <div id="" class="full">
           <input data-attr="iDetail" <%=(iDetail.iAutoplay)&&"checked=checked"||""%> data-type="boolean" name="iAutoplay" type="checkbox" value="true"> 自动播放
         </div>
         <div id="" class="item">
           <span><input name="iRepeat" data-attr="iDetail" <%=(iDetail.iRepeat)&&"checked=checked"||""%> data-type="boolean" type="checkbox" data-attr="iDetail" value="true"> 循环</span><span> 间隔<input data-attr="iDetail" class="ui-state-default" type="text" name="iInterval" style="width:40px" value=<%=iDetail.iInterval%>>秒</span>
         </div>
         <div class="full">
           <span><input name="iFade" data-attr="iDetail" type="radio" value="Fade" <%=(iDetail.iFade=="Fade")&&"checked=checked"||""%>> Fade</span><span><input data-attr="iDetail" name="iFade" type="radio" value="Slip" <%=(iDetail.iFade=="Slip")&&"checked=checked"||""%>> Slip</span>
         </div>
         <hr class="full ui-widget-header">
         <div id="" class="full">
           <span><input name="iSlipable" data-attr="iDetail" data-type="boolean" type="checkbox" value="true" <%=(iDetail.iSlipable)&&"checked=checked"||""%>> 可滑动</span><span><input data-attr="iDetail" data-type="boolean" name="iPagenumber" type="checkbox" value="true" <%=(iDetail.iPagenumber)&&"checked=checked"||""%>> 显示页码</span>
         </div>
         <div class="full">
           <span><input name="iFullview" data-attr="iDetail" data-type="boolean" type="checkbox" value="true" <%=(iDetail.iFullview)&&"checked=checked"||""%>> 全屏</span><span><input data-attr="iDetail" data-type="boolean" type="checkbox" name="iWholeswitch" value="true" <%=(iDetail.iWholeswitch)&&"checked=checked"||""%>> 整幅切换</span>
         </div>
       </fieldset>
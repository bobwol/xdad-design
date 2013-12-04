       <fieldset class="Pos">
                    <legend>尺寸和位置</legend>
                    <div class="item size-position" style="height:70px;">
                      <ul>
                        <li class="hide">
                          <label>L：</label>
                          <input class="inputquarter ui-state-default ui-corner-all" name="iHeight" type="text" data-attr="iCommon" value=<%=iCommon[iPageDirection].iHeight%>>
                        </li>
                        <li class="hide">
                          <label>H：</label>
                          <input class="inputquarter ui-state-default ui-corner-all" name="iWidth" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iWidth%>>
                        </li>
                        <li>
                          <label>X：</label>
                          <input class="inputquarter ui-state-default ui-corner-all" name="iStartx" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iStartx%>>
                        </li>
                        <li>
                          <label>Y：</label>
                          <input class="inputquarter ui-state-default ui-corner-all" name="iStarty" type="text"  data-attr="iCommon" value=<%=iCommon[iPageDirection].iStarty%>>
                        </li>
                      </ul>
                    </div>
           <div class="item" style="height:20px;clear:both;">
             <input data-attr="iDetail" data-type="boolean" name="iHidden" type="checkbox" value="true" <%=iDetail.iHidden&&"checked=true"%>> 初始隐藏
           </div>
                  </fieldset>
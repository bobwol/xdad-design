   <form>
      <h3>页面设定</h3>
      <fieldset>
        <legend>背景图片</legend>
        <div class="action"><a href="#" class="action-file" rel="tooltip" data-original-title="上传" onmousemove="f1.style.pixelLeft=event.x; f1.style.pixelTop=this.offsetTop;" onclick="f1.click()">上传</a>
      <input type="file" id="f1" name="f1" size="1" onchange="txt.value=this.value" hidefocus="true" class="hide">
    </div>
    <div class="item">
      <figure class="image"> <img src="">
        <figcaption>image.jpg</figcaption>
      </figure>
      <a href="javascript:void(0)" class="action-showhide active" rel="tooltip" data-original-title="是否可见">是否可见</a> <a href="#confirmModal" class="action-del" rel="tooltip" data-original-title="删除">删除</a> </div>
  </fieldset>
  <fieldset>
    <legend>背景音乐</legend>
    <div class="action"><a href="#" class="action-file" rel="tooltip" data-original-title="上传" onmousemove="f2.style.pixelLeft=event.x; f2.style.pixelTop=this.offsetTop;" onclick="f2.click()">上传</a>
      <input type="file" id="f2" name="f2" size="1" onchange="txt.value=this.value" hidefocus="true" class="hide">
    </div>
    <div class="item">
      <figure class="audio">
        <audio src="../public/lifeishard.mp3" controls style="width:100%;"></audio>
        <figcaption>lifeishard.mp3</figcaption>
      </figure>
      <a href="#confirmModal" class="action-del" rel="tooltip" data-original-title="删除">删除</a> </div>
  </fieldset>
  <fieldset class="no-legend">
    <legend>背景颜色</legend>
    <div class="item">
      <label>背景颜色：</label>
      <div style="position:absolute; top:2px; left:65px; width:16px; height:16px; border:1px solid #333; background:#f00;"></div>
    </div>
  </fieldset>
  <fieldset class="no-legend">
    <legend>其它</legend>
    <div class="item">
      <input type="checkbox">
      设为章节首页</div>
  </fieldset>
  <div class="action-save">
    <button class="btn btn-small" type="button">SAVE</button>
  </div>
</form>
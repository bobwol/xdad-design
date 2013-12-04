<form>
   <h3>页面设定</h3>
   <fieldset>
      <legend>背景图片</legend>
        <div class="action"><button data-target="#material" type="button" class="btn btn-small action-file change-background" rel="tooltip" data-title="替换背景图"><i class="icon-arrow-up"></i></button>
    </div>
    <div class="item resource">
      <figure class="image"> <%=preview%>
        <figcaption><%=title%></figcaption>
      </figure>
                  <div class="operation">
                  <a title="" rel="tooltip" class="action-showhide active action-backgroundpreview" href="javascript:void(0)" data-original-title="预览"><i class="icon-showhide"></i></a>
                  <a title="" rel="tooltip" class="action-del" href="#confirmModal" data-original-title="移除"><i class="icon-remove"></i></a> 
                  </div>
  </fieldset>
</form>
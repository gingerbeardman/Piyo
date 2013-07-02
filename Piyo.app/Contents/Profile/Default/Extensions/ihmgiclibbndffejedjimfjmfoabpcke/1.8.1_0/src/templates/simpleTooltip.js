(function(undefined) {
  
  pl.extend(ke.templates, {
    get simpleTooltip() {
      return '\
        <div class="<%=prefix%>t" id="<%=prefix%>tooltip-wrap">\
          <div class="<%=prefix%>t <%=prefix%>inside-layout">\
            <div class="<%=prefix%>t <%=prefix%>content"><%=content%></div>\
          </div>\
        </div>\
      ';
    }
  });

})();
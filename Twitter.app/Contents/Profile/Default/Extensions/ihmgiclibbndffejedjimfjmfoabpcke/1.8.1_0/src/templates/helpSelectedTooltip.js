(function(undefined) {
  
  pl.extend(ke.templates, {
    get helpSelectedTooltip() {
      return '\
        <div class="<%=prefix%>t <%=prefix%>help-selected-wrap">\
          <div class="<%=prefix%>t <%=prefix%>help-inside-layout">\
            <div class="<%=prefix%>t <%=prefix%>left-particle">\
              <div id="<%=prefix%>trVisibleLayout">\
                <div id="<%=prefix%>trEntireLayout">\
                  <div class="<%=prefix%>t <%=prefix%>content-layout"><%=content%></div>\
                </div>\
              </div>\
            </div><div class="<%=prefix%>t <%=prefix%>right-particle">\
              <div class="<%=prefix%>t <%=prefix%>sidebar">\
                <div class="<%=prefix%>t <%=prefix%>sbutton <%=prefix%>listen-button <%=prefix%>listen"></div>\
              </div>\
            </div>\
            \
            <div id="<%=prefix%>tr-scrollbar">\
             <div id="<%=prefix%>track">\
              <div id="<%=prefix%>dragBar"></div>\
             </div>\
            </div>\
          </div>\
        </div>\
      ';
    }
  });

})();
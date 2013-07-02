(function(undefined) {
  
  pl.extend(ke.templates, {
    get historyListItem() {
      return '\
        <div class="history-item-wrap i-<%=id%>">\
          <div class="inner-item-layout">\
            \
            <div class="main-variant-wrap">\
              <div class="the-translation">\
                <div class="particle input-particle lang-<%=from_lang%>"><%=input%></div>\
                <div class="direction"></div>\
                <div class="particle main-output-particle lang-<%=to_lang%>"><%=main_output%></div>\
              </div>\
              \
              <div class="action-buttons">\
                <div class="ab ab-delete"><%=delete_button%></div>\
                <div class="ab ab-visibility"></div>\
              </div>\
            </div>\
            \
            <div class="variants-wrap<%=collapse_variants%>"><%=variants%></div>\
            \
            <div class="additional-info-wrap">\
              <div class="listen-layout">\
                <div class="listen-click listen-original lo-<%=id%>"><%=listen_original%></div>\
                <div class="delimiter"><%=delimiter%></div>\
                <div class="listen-click listen-translation lt-<%=id%>"><%=listen_translation%></div>\
              </div>\
              <div class="inner-info-layout">\
                <div class="time"><%=time%></div>\
              </div>\
            </div>\
            \
          </div>\
        </div>\
      ';
    }
  });

})();
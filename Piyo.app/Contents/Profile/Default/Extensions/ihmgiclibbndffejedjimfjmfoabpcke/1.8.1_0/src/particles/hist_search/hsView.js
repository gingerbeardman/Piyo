(function(undefined) {
  
  pl.extend(ke.particles.hist_search.view, {
    displayNothingFoundCap: function() {
      pl('.inner-layout').append(
        ke.ext.tpl.compile(ke.templates.historyEmptyCap, {
          text: ke.getLocale('History_Content_List_OnFindFailure'),
          has_margin: ' ' + 'minus-top-margin'
        })
      );
    }
  });

})();
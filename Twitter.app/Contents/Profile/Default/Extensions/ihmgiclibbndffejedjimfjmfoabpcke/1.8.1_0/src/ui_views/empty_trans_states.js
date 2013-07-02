(function(undefined) {
  
  var S_CONTENT = '.right-part-content-wrap';
  var S_TRANS = '.translation-layout';
  var S_CAP = '.translation-empty-cap';

  pl.extend(ke.ui_views.empty_trans_states, {
    displayEmptiness: function() {
      pl(S_TRANS).empty();
      pl(S_CONTENT).hide();
      pl(S_CAP).show();

      ke.particles.scrollbars.model.setupTranslationScroll();
    },

    displayWorkaround: function() {
      pl(S_CAP).hide();
      pl(S_CONTENT).show();
    }
  });

})();
(function(undefined) {
  
  // window.h = 135;

  var setupScroll = function(he, h, vis, ent, db, t, trs, ot) {
    pl('#' + trs)[pl(he).get(0) ? (parseInt(pl(he).css('height')) >= h ? 'show' : 'hide') : 'hide']();

    var scrollInstance = new dw_scrollObj(vis, ent);
    scrollInstance.setUpScrollbar(db, t, 'v', 1, 1);
    scrollInstance.setUpScrollControls(trs);

    if(!pl.type(ot, 'undef')) {
      dw_scrollObj.scrollTo(vis, 1, ot, 150);
    }
  };

  pl.extend(ke.particles.scrollbars.model, {
    setupTranslationScroll: function() {
      setupScroll('.translation-layout', 143, 'trVisibleScroll', 'trEntireScroll', 'dragBar', 'track', 'tr-scrollbar');
    },

    setupHelpSelectedScroll: function() {
      var prefix = ke.getPrefix();
      setupScroll('.' + prefix + 'content-layout', 113, prefix + 'trVisibleLayout', prefix + 'trEntireLayout', prefix + 'dragBar', prefix + 'track', prefix + 'tr-scrollbar');
    },

    setupFromWindowDropdownScroll: function(ot) {
      setupScroll('.opt-1', 100, 'selVisibleScroll-1', 'selEntireScroll-1', 'sel-dragBar-1', 'sel-track-1', 'sel-scrollbar-1', ot);
    },

    setupToWindowDropdownScroll: function(ot) {
      setupScroll('.opt-2', 100, 'selVisibleScroll-2', 'selEntireScroll-2', 'sel-dragBar-2', 'sel-track-2', 'sel-scrollbar-2', ot);
    },

    setupComboOptionsDropdownScroll: function(ot) {
      this.setupFromWindowDropdownScroll(ot);
    }
  });

})();
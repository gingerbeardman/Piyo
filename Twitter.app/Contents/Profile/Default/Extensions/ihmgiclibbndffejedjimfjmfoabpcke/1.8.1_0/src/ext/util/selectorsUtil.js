(function(undefined) {
  
  pl.extend(ke.ext.util.selectorsUtil, {
    import: [],

    getDashFromId: function(e, n) {
      return e.getAttribute('id').split('-')[n || 0];
    },

    getHistoryItemId: function(e) {
      var id;

      for(var i = 0; i <= 8; ++i) {
        var currentElement = pl(e).parent(i);
        if(currentElement.hasClass('history-item-wrap')) {
          id = currentElement.attr('class').split(' ')[1].split('-')[1];
          break;
        }
      }

      return +id;
    },

    isMainVariantPlaque: function(e) {
      var isPlaque = false;

      for(var i = 0; i <= 3; ++i) {
        var currentElement = pl(e).parent(i);
        if(currentElement.hasClass('main-variant-wrap')) {
          isPlaque = true;
          break;
        }
      }

      return isPlaque;
    },

    getSwitchFlagId: function(e) {
      return +pl(e).attr('class').split(' ')[1].split('-')[3];
    },

    getHistoryOriginalLang: function(e) {
      return pl('.i-' + ke.ext.util.selectorsUtil.getHistoryItemId(e.target)).find('.input-particle').attr('class').split(' ')[2].split('-')[1];
    },

    getHistoryToLang: function(e) {
      return pl('.i-' + ke.ext.util.selectorsUtil.getHistoryItemId(e.target)).find('.main-output-particle').attr('class').split(' ')[2].split('-')[1];
    }
  })

})();
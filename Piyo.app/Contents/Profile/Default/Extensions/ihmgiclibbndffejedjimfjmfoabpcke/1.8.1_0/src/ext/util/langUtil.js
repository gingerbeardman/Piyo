(function(undefined) {
  
  // Almost the same object as `ke.ext.const.lang.list` is, but this one is reversed.
  // In other words, language code here appears as a key, not value.

  var LANG_LIST_REVERSED = {};

  pl.extend(ke.ext.util.langUtil, {
    import: ['ext.const.storage'],

    getCurrentUiLang: function(simplify) {
      return ke.getCurrentLocale(simplify);
    },

    getFromLang: function() {
      return localStorage[ke.getStorageConst('from_lang')];
    },

    getToLang: function() {
      return localStorage[ke.getStorageConst('to_lang')];
    },

    setFromLang: function(c) {
      localStorage[ke.getStorageConst('from_lang')] = c;
    },

    setToLang: function(c) {
      localStorage[ke.getStorageConst('to_lang')] = c;
    },

    isFromLang: function(c) {
      return c === ke.ext.util.langUtil.getFromLang();
    },

    isToLang: function(c) {
      return c === ke.ext.util.langUtil.getToLang();
    },

    simplifyLangCode: function(c) {
      return ke.simplifyLC(c);
    },

    getDetectedLang: function(input, callback) {
      ke.db.execSql(
        'SELECT output FROM ' + ke.getAppConst('t_history') + ' WHERE l_from = ? AND input = ?',
        ['auto', input],
        function(tx) {
          if(tx.rows.length === 0) {
            callback(null);
            return;
          }

          var dlang = pl.JSON(tx.rows.item(0).output).src;
          callback(dlang);
        },
        null
      );
    },

    getLangNameByKey: function(k) {
      if(k in LANG_LIST_REVERSED) {
        return LANG_LIST_REVERSED[k];
      }

      for(var key in ke.ext.const.lang.list) {
        if(k === ke.ext.const.lang.list[key]) {
          LANG_LIST_REVERSED[k] = key;
          return key;
        }
      }

      return null;
    }
  });

})();
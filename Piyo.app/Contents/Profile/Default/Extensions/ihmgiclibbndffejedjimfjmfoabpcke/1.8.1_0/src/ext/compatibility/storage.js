(function(undefined) {
  
  var ALL_OLD_ITEMS = [
    'IT_Core_Langpack', 'IT_Core_Listen', 'IT_Core_Variants', 
    'IT_Core_Version', 'IT_Settings_ActiveFlags', 'IT_Settings_ActiveKeys', 
    'IT_Settings_ContextMenus', 'IT_Settings_IntLang', 'IT_Settings_Textarea', 
    'IT_Trl_From', 'IT_Trl_To'
  ];

  var NOT_NECESSARY = ['IT_Settings_ContextMenus', 'IT_Trl_From', 'IT_Trl_To'];

  var SYNC_MAP = {
    'It_Int_MultiVariant': ALL_OLD_ITEMS[2],
    'It_Lang_From': ALL_OLD_ITEMS[9],
    'It_Lang_To': ALL_OLD_ITEMS[10]
  };

  var OLD_CONTEXT_MAP = {
    1: 2,
    2: 1
  };

  var OLD_KEY_MAP = ['t', 'ctrl+shift', 'ctrl', 'ctrl+alt', 'cmd+alt'];

  pl.extend(ke.ext.compatibility.storage, {
    sync: function() {
      this._onOldStorageExists(function() {
        ke.ext.compatibility.storage._makeSimpleSync();
        ke.ext.compatibility.storage._makeComplexSync();
        ke.ext.compatibility.storage._deleteOldStorageItems();
      });
    },

    _onOldStorageExists: function(callback) {
      var exists = true;

      pl.each(ALL_OLD_ITEMS, function(k, v) {
        if(pl.type(localStorage[v], 'undef') && !~pl.inArray(v, NOT_NECESSARY)) {
          exists = false;
        }
      });

      if(exists) {
        callback();
      }
    },

    _makeSimpleSync: function() {
      for(var key in SYNC_MAP) {
        localStorage[key] = localStorage[SYNC_MAP[key]];
      }
    },

    _makeComplexSync: function() {
      // Instant translation

      ke.ext.util.storageUtil.setOptionAsBoolean(
        'instant', 
        pl.JSON(localStorage[ALL_OLD_ITEMS[4]]).instant
      );

      // Context menu

      if(!pl.type(localStorage[ALL_OLD_ITEMS[6]], 'undef')) {
        var old_context = pl.JSON(localStorage[ALL_OLD_ITEMS[6]]);
        ke.ext.util.storageUtil.setActiveJsonValueAsBoolean('context', old_context.activate);
        ke.ext.util.storageUtil.setJsonVal('context', OLD_CONTEXT_MAP[old_context.action]);
      }

      // Key combinations

      var old_combo = pl.JSON(localStorage[ALL_OLD_ITEMS[5]]);
      ke.ext.util.storageUtil.setOptionAsBoolean('key_combo', old_combo.activate);
      ke.ext.util.storageUtil.setVal('trans_combination', OLD_KEY_MAP[old_combo.key]);

      // Save value on close

      var old_save = pl.JSON(localStorage[ALL_OLD_ITEMS[8]]);
      old_save.cache = old_save.cache === 'auto' ? '' : old_save.cache;

      ke.ext.util.storageUtil.setActiveJsonValueAsBoolean('save', old_save.store);
      ke.ext.util.storageUtil.setJsonVal('save', old_save.cache);
    },

    _deleteOldStorageItems: function() {
      pl.each(ALL_OLD_ITEMS, function(k, v) {
        delete localStorage[v];
      });
    }
  });

})();
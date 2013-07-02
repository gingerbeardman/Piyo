(function(undefined) {
  
  pl.extend(ke.app.handlers._proccessEventHandlers.app.option, {
    getKeyComboOptionActiveness: function(data, fn) {
      fn(ke.ext.util.storageUtil.isTrueOption('key_combo'));
    },

    getCurrentKeyCombo: function(data, fn) {
      fn(ke.ext.util.storageUtil.getVal('trans_combination'));
    },

    getToLang: function(data, fn) {
      fn(ke.ext.util.langUtil.getToLang());
    },

    ctrlContextActiveness: function(data, fn) {
      var a = data.active;
      ke.app.flags.context = a;

      if(a) {
        ke.app.initContextMenu();
      } else if(!a) {
        chrome.contextMenus.removeAll();
      }
    },

    updateContextMenu: function(data, fn) {
      chrome.contextMenus.removeAll();
      ke.app.initContextMenu();
    }
  });

})();
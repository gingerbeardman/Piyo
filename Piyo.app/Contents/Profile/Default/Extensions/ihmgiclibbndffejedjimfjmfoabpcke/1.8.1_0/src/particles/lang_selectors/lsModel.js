(function(undefined) {
  
  pl.extend(ke.particles.lang_selectors.model, {
    onOpen: function(e, ot) {
      var id = ke.ext.util.selectorsUtil.getDashFromId(e);

      if(id === 'from') {
        ke.particles.scrollbars.model.setupFromWindowDropdownScroll(ot);
      } else if(id === 'to') {
        ke.particles.scrollbars.model.setupToWindowDropdownScroll(ot);
      }
    },

    onLangDropdownChange: function(e, v) {
      var id = ke.ext.util.selectorsUtil.getDashFromId(e);

      if(id === 'from') {
        ke.ext.util.langUtil.setFromLang(v);
      } else if(id === 'to') {
        ke.ext.util.langUtil.setToLang(v);
      }

      ke.particles.translate.model.translateSimple(undefined, true);

      var ruLen = ke.ext.util.storageUtil.getArrayValLen('recently_used_lang');
      if(ruLen >= 5) {
        for(var i = ruLen; i > 5; --i) {
          ke.ext.util.storageUtil.popArrayVal('recently_used_lang');
        }
      }

      ke.ext.util.storageUtil.addArrayVal('recently_used_lang', v);

      ke.ui.dropdown.removeDropdown();
      ke.particles.lang_selectors.view.populateLangDropdown();
      ke.app.initDropdown();

      chrome.extension.sendRequest({
        action: ke.proccessCall('app', 'option', 'updateContextMenu')
      }, ke.EF);
    }
  });

})();
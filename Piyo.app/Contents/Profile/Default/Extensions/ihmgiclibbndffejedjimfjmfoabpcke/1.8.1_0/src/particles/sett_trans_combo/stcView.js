(function(undefined) {
  
  ke.import('ext.util.storageUtil');

  var COMBOS = 'T,Shift+T,Alt+T,Shift,Ctrl,Ctrl+Shift,Alt,Ctrl+Alt,Ctrl+Enter,Shift+Enter,Alt+Enter'.split(',').reverse();

  // Names of keys which require localization
  // E.g., Ctrl => Strg
  var LOCALIZABLE = {
    de: ['Ctrl']
  };

  if(~window.navigator.appVersion.indexOf('Mac')) {
    COMBOS.unshift('Cmd');
    COMBOS.unshift('Cmd+T');
    COMBOS.unshift('Ctrl+Cmd');
    COMBOS.unshift('Cmd+Shift');
    COMBOS.unshift('Cmd+Enter');
  }

  pl.extend(ke.particles.sett_trans_combo.view, {
    displayCCheckboxState: function() {
      pl('#key-combo').get().checked = ke.ext.util.storageUtil.isTrueOption('key_combo');
    },

    populateComboVariants: function() {
      var selected, lowerCased;
      var currentUiLang = ke.ext.util.langUtil.getCurrentUiLang(true);
      var df = document.createDocumentFragment();

      pl.each(COMBOS, function(k, v) {
        lowerCased = v.toLowerCase();
        selected = ke.ext.util.storageUtil.getVal('trans_combination') === lowerCased ? 'selected' : '';

        v = v.split('+');
        pl.each(v, function(k2, v2) {
          if(LOCALIZABLE[currentUiLang] && ~pl.inArray(v2, LOCALIZABLE[currentUiLang])) {
            v[k2] = ke.getLocale('Kernel_Keys_' + v2);
          }
        });

        pl(df).append(
          pl('<option>')
            .attr({
              value: lowerCased,
              selected: selected
            })
            .html(v.join('+'))
            .get()
        );
      });

      pl('#key-combinations').append(df);
    }
  });

})();
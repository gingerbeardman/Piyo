(function(undefined) {
  
  ke.import('ext.util.storageUtil');

  pl.extend(ke.particles.sett_trans_combo.model, {
    onCCheckboxChange: function(flag) {
      ke.ext.util.storageUtil.setOptionAsBoolean('key_combo', flag);
      ke.particles.sett_trans_combo.model.ctrlComboVisibility('slide' + (flag ? 'Down' : 'Up'));
    },

    onComboDropdownOpen: function(e, ot) {
      ke.particles.scrollbars.model.setupComboOptionsDropdownScroll(ot);
    },

    onComboDropdownChange: function(e, v) {
      ke.ext.util.storageUtil.setVal('trans_combination', v);
    },

    ctrlComboVisibility: function(forced_action, time) {
      ke.ui_views.visibility.ctrl(
        forced_action, 
        ke.getSelectorConst('settings', 'col_combo'), 
        ke.ext.util.storageUtil.isTrueOption('key_combo'), 
        ke.particles.sett_trans_combo.model.ctrlComboVisibility, 
        time
      );
    }
  });

})();
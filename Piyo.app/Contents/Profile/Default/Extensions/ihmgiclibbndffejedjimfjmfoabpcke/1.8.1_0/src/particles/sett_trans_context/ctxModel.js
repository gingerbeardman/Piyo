(function(undefined) {
  
  pl.extend(ke.particles.sett_trans_context.model, {
    ctrlContextVisibility: function(forced_action, time) {
      ke.ui_views.visibility.ctrl(
        forced_action, 
        ke.getSelectorConst('settings', 'col_context'), 
        ke.ext.util.storageUtil.isActiveJsonOption('context'), 
        ke.particles.sett_trans_context.model.ctrlContextVisibility, 
        time
      );  
    },

    onCtxCheckboxChange: function(f) {
      ke.ext.util.storageUtil.setActiveJsonValueAsBoolean('context', f);
      ke.particles.sett_trans_context.model.ctrlContextVisibility('slide' + (f ? 'Down' : 'Up'));

      chrome.extension.sendRequest({
        action: ke.proccessCall('app', 'option', 'ctrlContextActiveness'),
        active: f
      }, ke.EF);
    },

    onCtxSwitchClick: function(e) {
      var id = ke.ext.util.selectorsUtil.getSwitchFlagId(e.target);
      ke.ext.util.storageUtil.setJsonVal('context', id);
      ke.particles.sett_trans_context.view.displayCtxSwitchPosition();
    }
  });

})();
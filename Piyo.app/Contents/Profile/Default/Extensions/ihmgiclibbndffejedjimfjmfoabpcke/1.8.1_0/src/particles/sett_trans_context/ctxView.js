(function(undefined) {
  
  pl.extend(ke.particles.sett_trans_context.view, {
    displayCtxCheckboxState: function() {
      pl('#context').get().checked = ke.ext.util.storageUtil.isActiveJsonOption('context');
    },

    displayCtxSwitchPosition: function() {
      var id = ke.ext.util.storageUtil.getJsonVal('context');
      pl('.sw-item').removeClass('sw-active-item');
      pl('.sw-item-n-' + id).addClass('sw-active-item');
    }
  });

})();
(function(undefined) {
  
  pl.extend(ke.particles.sett_int_save.view, {
    displaySCheckboxState: function(f) {
      pl('#save').get().checked = ke.ext.util.storageUtil.isActiveJsonOption('save');
    }
  });

})();
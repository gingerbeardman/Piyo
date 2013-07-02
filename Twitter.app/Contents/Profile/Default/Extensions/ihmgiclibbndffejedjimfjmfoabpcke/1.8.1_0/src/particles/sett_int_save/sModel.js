(function(undefined) {

  pl.extend(ke.particles.sett_int_save.model, {
    onSCheckboxChange: function(f) {
      ke.ext.util.storageUtil.setActiveJsonValueAsBoolean('save', f);
    }
  });

})();
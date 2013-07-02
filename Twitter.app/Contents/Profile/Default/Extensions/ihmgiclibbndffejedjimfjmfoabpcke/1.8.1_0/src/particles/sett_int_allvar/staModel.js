(function(undefined) {
  
  ke.import('ext.util.storageUtil');

  pl.extend(ke.particles.sett_int_allvar.model, {
    onACheckboxChange: function(flag) {
      ke.ext.util.storageUtil.setOptionAsBoolean('multi_variant', flag);
    }
  });

})();
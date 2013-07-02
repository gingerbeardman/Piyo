(function(undefined) {
  
  ke.import('ext.util.storageUtil');

  pl.extend(ke.particles.sett_int_instant.model, {
    onICheckboxChange: function(flag) {
      ke.ext.util.storageUtil.setOptionAsBoolean('instant', flag);
    }
  });

})();
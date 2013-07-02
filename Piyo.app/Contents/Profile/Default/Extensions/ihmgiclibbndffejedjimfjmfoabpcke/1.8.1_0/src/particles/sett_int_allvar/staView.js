(function(undefined) {
  
  ke.import('ext.util.storageUtil');

  pl.extend(ke.particles.sett_int_allvar.view, {
    displayACheckboxState: function() {
      pl('#all-variants').get().checked = ke.ext.util.storageUtil.isTrueOption('multi_variant');
    }
  });

})();
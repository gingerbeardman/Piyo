(function(undefined) {
  
  ke.import('ext.util.storageUtil');

  pl.extend(ke.particles.sett_int_instant.view, {
    displayICheckboxState: function() {
      pl('#instant-translation').get().checked = ke.ext.util.storageUtil.isTrueOption('instant');
    }
  });

})();
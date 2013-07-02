(function(undefined) {
  
  pl.extend(ke.particles.sett_trans_history.view, {
    displayHCheckboxState: function() {
      pl('#history').get().checked = ke.ext.util.storageUtil.isTrueOption('history');
    }
  });

})();
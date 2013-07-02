(function(undefined) {
  
  pl.extend(ke.particles.sett_trans_history.model, {
    onHCheckboxChange: function(flag) {
      ke.ext.util.storageUtil.setOptionAsBoolean('history', flag);
    }
  });

})();
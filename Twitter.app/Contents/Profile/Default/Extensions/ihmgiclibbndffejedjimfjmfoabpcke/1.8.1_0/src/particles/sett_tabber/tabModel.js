(function(undefined) {
  
  ke.import('ext.util.storageUtil');

  pl.extend(ke.particles.sett_tabber.model, {
    setTab: function(e) {
      var tab = +pl(e.target).attr('class').split(' ')[1].split('-')[1];
      ke.ext.util.storageUtil.setVal('settings_tab', tab);

      // Update
      ke.particles.sett_tabber.view.displayCurrentTab();
      ke.particles.sett_tabber.view.displayTabberArrow();
    }
  });

})();
(function(undefined) {
  
  pl.extend(ke.particles.context.model, {
    onMenuClick: function(info, tab) {
      var action = ke.ext.util.storageUtil.getJsonVal('context');
      
      if(action === 1) {
        chrome.tabs.sendMessage(tab.id, {
          action: ke.proccessCall('app', 'trans', 'displayAsTooltip'),
          message: info.selectionText
        }, ke.EF);
      } else if(action === 2) {
        chrome.tabs.create({
          url: ke.ext.googleApi.getTranslationPageLink(info.selectionText),
          active: true
        });
      }
    }
  });

})();
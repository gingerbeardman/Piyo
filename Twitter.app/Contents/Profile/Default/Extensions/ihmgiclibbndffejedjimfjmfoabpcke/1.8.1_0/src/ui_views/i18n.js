(function(undefined) {
  
  pl.extend(ke.ui_views.i18n, {
    init: function() {
      pl('.need-html-locale').each(function() {
        pl(this).html(ke.getLocale(pl(this).attr('id')));
      });

      pl('.need-ph-locale').each(function() {
        pl(this).attr('placeholder', ke.getLocale(pl(this).attr('id')));
      });
    },

    setSettingsTitle: function() {
      document.title = ke.getLocale('Kernel_SettingsTitle');
    },

    setHistoryTitle: function() {
      document.title = ke.getLocale('Kernel_HistoryTitle');
    },

    setDonateTitle: function() {
      document.title = ke.getLocale('Kernel_DonateTitle');
    }
  });

})();
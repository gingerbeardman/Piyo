(function(undefined) {
  
  pl.extend(ke.ui_views.visibility, {
    ctrl: function(forced_action, selector, isTrueOption, fallback, time) {
      var TIME = time || 150;

      if(!pl.type(forced_action, 'undef')) {
        pl(selector)[forced_action](TIME);
        setTimeout(function() {
          if(forced_action === 'slideDown') {
            pl(selector).css('height', 'auto');
          }
        }, TIME + 10);
      } else {
        if(!isTrueOption) {
          fallback('slideUp', 1);
        }
      }
    }
  });

})();
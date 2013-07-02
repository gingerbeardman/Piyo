(function(undefined) {
  
  ke.import('ext.event');

  // Some private stuff
  var translateInputTimeout;
  var prevInput = '';

  pl.extend(ke.particles.translate.model, {
    ctrlInstantVisibility: function(a) {
      pl('.translate-button')[a]();
    },

    toggleTranslationButton: function(f) {
      if(ke.app.flags.instant) {
        return;
      }

      pl('.translate-button')[(f ? 'add' : 'remove') + 'Class']('trans-disabled');
    },

    // ===========================
    // Apparently, the main method in the whole particle
    
    getTranslation: function(c, forced) {
      if(ke.app.flags.isTranslating) {
        return;
      }

      var currentInput = pl.trim(pl('.translation-input').val());

      if(pl.empty(currentInput)) {
        prevInput = currentInput;
        ke.ui_views.empty_trans_states.displayEmptiness();
        return;
      } else if(currentInput === prevInput && !forced) {
        return;
      } else {
        prevInput = currentInput;
        ke.ui_views.empty_trans_states.displayWorkaround();
      }

      ke.app.flags.isTranslating = true;
      ke.particles.translate.model.toggleTranslationButton(true);

      chrome.extension.sendRequest({
        action: ke.proccessCall('app', 'translate', 'get'),
        text: currentInput
      }, function(d) {

        ke.app.flags.isTranslating = false;
        ke.particles.translate.model.toggleTranslationButton(false);

        if(d.error) {
          ke.app.render.organize.showNetworkError();
          c({
            network_error: true
          });
        } else {
          c(d);
        }
      });
    },

    routeTranslation: function(d) {
      if(d.network_error) {
        ke.ui_views.empty_trans_states.displayEmptiness();
        ke.particles.listen.model.ctrlRawVisibility(undefined, '');
        ke.particles.listen.model.ctrlTransVisibility();
        return;
      }

      ke.app.flags.isCurrentTranslationMulti = d.isMulti;
      ke.app.temp.currentDetectedLang = d.detected_lang;
      ke.particles.listen.model.ctrlRawVisibility(undefined, d.detected_lang);
      ke.particles.translate.model.displayTranslation(d.code);
      ke.particles.scrollbars.model.setupTranslationScroll();

      ke.particles.listen.model.ctrlTransVisibility();
      ke.app.render.events.listenTranslation();
    },

    displayTranslation: function(d) {
      pl('.translation-layout').html(d);
    },

    //
    // ===========================

    translateSimple: function(e, forced) {
      ke.particles.translate.model.getTranslation(ke.particles.translate.model.routeTranslation, forced);
    },

    translateOnKeyCombinations: function(e) {
      if(ke.ext.event.is('ctrl+enter', e) || ke.ext.event.is('ctrl+shift', e)) {
        ke.particles.translate.model.getTranslation(ke.particles.translate.model.routeTranslation);
      }
    },

    translateOnKeyup: function() {
      clearTimeout(translateInputTimeout);

      translateInputTimeout = setTimeout(function() {
        ke.particles.translate.model.getTranslation(ke.particles.translate.model.routeTranslation);
      }, 725);
    }
  });

})();
/* Kumquat Hub Content Handlers
 * 
**/

(function(undefined) {
  
  pl.extend(ke.app.handlers, {
    passInlineTranslation: 0,

    onKeyCombinationClick: function(e, doc, iframe) {
      chrome.extension.sendRequest({
        action: ke.proccessCall('app', 'option', 'getKeyComboOptionActiveness')
      }, function(active) {
        if(active) {
          chrome.extension.sendRequest({
            action: ke.proccessCall('app', 'option', 'getCurrentKeyCombo')
          }, function(combo) {
            if(ke.app.handlers.passInlineTranslation) {
              return --ke.app.handlers.passInlineTranslation;
            }

            if(ke.ext.event.is(combo, e)) {
              ke.particles.translate_ctt.model.showTranslation(undefined, undefined, doc, iframe);
            }
          });
        }
      });

      return true;
    },

    onKCClickInTextInput: function(e) {
      chrome.extension.sendRequest({
        action: ke.proccessCall('app', 'option', 'getKeyComboOptionActiveness')
      }, function(active) {
        if(active) {
          chrome.extension.sendRequest({
            action: ke.proccessCall('app', 'option', 'getCurrentKeyCombo')
          }, function(combo) {
            if(ke.ext.event.is(combo, e)) {
              e.preventDefault();
              ke.particles.translate_ctt.model.showTranslation(undefined, e.target);
              ++ke.app.handlers.passInlineTranslation;
            }
          });
        }
      });
      
      return true;
    },

    _proccessEventHandlers: {
      app: {
        trans: {
          displayAsTooltip: function(data, fn) {
            if(pl.empty(contentDocList)) {
              ke.particles.translate_ctt.model.showTranslation(data.message);
            } else {
              pl.each(contentDocList, function(k, v) {
                if(v && pl.empty(v.getSelection().toString())) {
                  return;
                }

                ke.particles.translate_ctt.model.showTranslation(data.message, undefined, v, iframeList[k]);
              });

              // To prevent bugs if IFrames are invisible
              ke.particles.translate_ctt.model.showTranslation(data.message);
            }
          }
        }
      }
    }
  });
  
})();
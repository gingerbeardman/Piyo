/* Kumquat Hub Content Render
 * 
**/

(function(undefined) {

  // Must be public, to be available for particles
  window.iframeList = [];
  window.contentDocList = [];

  var doc = document;
  var random = 1 + Math.random();

  var ALLOWED_KC_TYPES = {
    text: 0, 
    '': 0
  };

  pl.extend(ke.app.render, {
    organize: {},

    events: {
      onKeyCombinationClick: function() {
        pl(doc).bind('keydown', ke.app.handlers.onKeyCombinationClick);

        if(pl('iframe').len() > 0) {
          ke.app.render.events.onKeyCombinationPressInIframe();
        } 
      },

      onKeyCombinationPressInIframe: function(doc, iframe) {
        doc = doc || document;

        try {
          if(!doc) {
            return;
          }

          if(!doc.rwEventsAdded9424550) {
            pl(doc).bind('keydown', function(e) {
              ke.app.handlers.onKeyCombinationClick(e, doc, iframe);
            });
            doc.rwEventsAdded9424550 = random;
          } else if(doc.rwEventsAdded9424550 !== random) {
            return;
          }
              
          var iframes = doc.getElementsByTagName('iframe'), contentDocument;
          for(var i = 0; i < iframes.length; ++i) {
            contentDocument = iframes[i].contentDocument;

            if(contentDocument && !contentDocument.rwEventsAdded9424550) {
              iframeList.push(iframes[i]);
              contentDocList.push(contentDocument);
              ke.app.render.events.onKeyCombinationPressInIframe(contentDocument, iframes[i]);
            }
          }
        } catch(e) {
          console.log('An error in an Iframe:', e);
        }
      },

      onKCClickInTextInput: function() {
        pl('input').each(function() {
          if(pl(this).attr('type') in ALLOWED_KC_TYPES) {
            pl(this).bind('keydown', ke.app.handlers.onKCClickInTextInput);
          }
        });

        pl('textarea').bind('keydown', ke.app.handlers.onKCClickInTextInput);
      },

      listen: function() {
        pl('.' + ke.getPrefix() + 'listen').bind('click', ke.particles.listen.model.playTooltipTranslation);
      }
    }
  });
  
})();
(function(undefined) {
  
  var UNUTTERABLE_LANGS = [
    'auto',
    'az', 'eu', 'be', 'bn', 'bg', 'et', 'tl', 'gl', 'ka', 'gu', 'iw',
    'ga', 'kn', 'lt', 'ms', 'mt', 'fa', 'sl', 'te', 'uk', 'ur', 'yi'
  ];

  pl.extend(ke.ext.audio, {
    play: function(contents, callback) {
      var interrupt = false;
      var audio = new Audio(contents);

      audio.onerror = function() {
        interrupt = true;
        callback({
          error: true
        });
      };

      if(interrupt) {
        return;
      }

      audio.play();

      var _int = setInterval(function() {
        if(audio.ended) {
          clearInterval(_int);

          try {
            callback();
          } catch(error) {
            ke.log('Error in audio callback:', error.toString());
          }
        }
      }, 1);
    },

    isUtterable: function(lang) {
      return !~pl.inArray(lang, UNUTTERABLE_LANGS);
    }
  });

})();
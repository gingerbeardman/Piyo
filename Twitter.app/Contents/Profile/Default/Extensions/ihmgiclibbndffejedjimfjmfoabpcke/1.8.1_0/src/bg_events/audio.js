(function(undefined) {
  
  pl.extend(ke.app.handlers._proccessEventHandlers.app.audio, {
    play: function(data, fn) {
      console.log('Pronouncing:', lang);

      var lang = data.dir.substr(0, 5) === 'lang:' ? 
        data.dir.substr(5) : 
        ke.ext.util.langUtil['get' + ke.capitalize(data.dir) + 'Lang']();

      if(lang === 'auto') {
        ke.ext.util.langUtil.getDetectedLang(data.text, function(dlang) {
          if(ke.ext.audio.isUtterable(dlang)) {
            ke.ext.audio.play(ke.ext.googleApi.getAudioFileLink(dlang, data.text), fn);
          } else {
            fn();
          }
        });
      } else {
        if(ke.ext.audio.isUtterable(lang)) {
          ke.ext.audio.play(ke.ext.googleApi.getAudioFileLink(lang, data.text), fn);
        } else {
          fn();
        }
      }
    }
  });

})();
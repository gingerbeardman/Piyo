(function(undefined) {
  
  pl.extend(ke.app.handlers._proccessEventHandlers.app.translate, {
    get: function(data, fn) {
      var from = ke.ext.util.langUtil.getFromLang();
      var to = ke.ext.util.langUtil.getToLang();

      ke.ext.cache.lookUpInCache(from, to, data.text, function(isEmpty, item) {
        if(isEmpty) {
          ke.ext.googleApi.getTranslation(from, to, data.text, function(output) {
            if(output.error) {
              fn(output);
            } else {
              var parsed = ke.ext.googleApi.parseReceivedTranslation(output, false, data.prefix);

              var throwDataBack = function() {
                fn({
                  code: parsed[1],
                  isMulti: parsed[0],
                  detected_lang: output.src
                });
              };

              if(ke.ext.util.storageUtil.isTrueOption('history')) {
                ke.ext.cache.save(from, to, data.text, pl.stringify(output), throwDataBack);
              } else {
                throwDataBack();
              }
            }
          });
        } else {
          var parsed = ke.ext.googleApi.parseReceivedTranslation(item.output, false, data.prefix);
          fn({
            code: parsed[1],
            isMulti: parsed[0],
            detected_lang: pl.JSON(item.output).src
          });
        }
      });
    }
  });

})();
(function(undefined) {
  
  ke.import('ext.util.storageUtil');
  ke.import('ui_views.multi_variant');

  pl.extend(ke.ext.googleApi, {
    getTranslation: function(from, to, text, fn) {
      from = from || 'auto';

      pl.ajax({
        url: 'http://translate.google.com/translate_a/t',
        type: 'GET',
        dataType: 'json',
        data: {
          client: 'x',
          text: text,
          hl: 'en',
          sl: from,
          tl: to
        },
        success: function(d) {
          delete d.server_time;
          fn(d);
        },
        error: function(e) {
          console.log('Error while translating:', e);
          fn({
            error: true
          });
        }
      });
    },

    getAudioFileLink: function(lang, text) {
      return 'http://translate.google.com/translate_tts?ie=UTF-8&q=%text%&tl=%lang%&total=%parts%&idx=0&textlen=%len%'
        .replace(/%text%/, encodeURIComponent(text) ) 
        .replace(/%lang%/, lang)
        .replace(/%parts%/, text.split(' ').length)
        .replace(/%len%/, text.length);
    },

    getTranslationPageLink: function(text) {
      return 'http://translate.google.com/#%from%|%to%|%text%'
        .replace(/%from%/, ke.ext.util.langUtil.getFromLang())
        .replace(/%to%/, ke.ext.util.langUtil.getToLang())
        .replace(/%text%/, text);
    },

    // According to current settings (a single word/phrase or a bunch of variants)
    parseReceivedTranslation: function(parsed, mainAndVariantsSeparately, prefix) {
      if(pl.type(parsed, 'str')) {
        parsed = pl.JSON(parsed);
      }
      
      if(ke.ext.util.storageUtil.isTrueOption('multi_variant') && parsed.dict) {
        var translations = {
          main: parsed.sentences[0].trans,
          variants: {
            '': [],
            noun: [],
            verb: [],
            adjective: [],
            adverb: [],
            pronoun: [],
            preposition: [],
            conjunction: [],
            interjection: [],
            abbreviation: [],
            phrase: []
          }
        };

        pl.each(parsed.dict, function(k, v) {
          pl.each(v.entry, function(k2, v2) {
            translations.variants[v.pos].push({
              word: v2.word,
              local_variants: v2.reverse_translation
            });
          });
        });

        var response = [true, ke.ui_views.multi_variant.wrap(true, translations, mainAndVariantsSeparately, prefix)];
        if(mainAndVariantsSeparately) {
          var tmp = response;
          response = [tmp[0], translations.main, tmp[1]];
          delete tmp;
        }

        return response;
      } else {
        var translation = '';

        pl.each(parsed.sentences, function(k, v) {
          translation += v.trans;
        });

        return [false, ke.ui_views.multi_variant.wrap(false, translation, mainAndVariantsSeparately, prefix)];
      }
    }
  });

})();
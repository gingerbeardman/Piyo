(function(undefined) {
  
  pl.extend(ke.ui_views.multi_variant, {
    _singleWrap: function(t) {
      return t;
    },

    _multiWrap: function(translations, onlyVariants, prefix) {
      var df_local;
      var df = document.createDocumentFragment();

      if(!pl.type(prefix, 'str')) {
        prefix = '';
      }

      for(var key in translations.variants) {
        if(pl.empty(translations.variants[key])) {
          continue;
        }
        
        var len = translations.variants[key].length;
        df_local = document.createDocumentFragment();

        pl.each(translations.variants[key], function(k, v) {
          pl(df_local).append(v.word);

          if(k + 1 < len) {
            pl(df_local).append(', ');
          }
        });

        pl(df).append(
          pl('<div>')
            .addClass(prefix + 'variant-row')
            .append(
              pl('<div>')
                .addClass(prefix + 'v-pos')
                .html(!pl.empty(key) ? ke.getLocale('CommonUi_LangPart_' + ke.capitalize(key)) : key)
                .get()
            )
            .append(
              pl('<div>')
                .addClass(prefix + 'v-closest-wrap')
                .append(df_local)
                .get()
            )
            .get()
        );
      }

      // Do not include different wrappers and a main variant to the final HTML code
      if(onlyVariants === true) {
        return pl('<div>').append(df).html();
      }

      var bunch = pl('<div>').addClass(prefix + 'variant-bunch-wrap').append(
        pl('<div>')
          .addClass(prefix + 'vbw-inside-layout')
          .append(
            pl('<div>')
              .addClass(prefix + 'main-variant-wrap')
              .append(
                pl('<div>')
                  .addClass(prefix + 'main-variant')
                  .html(translations.main)
                  .get()
              )
              .get()
          )
          .append(
            pl('<div>')
              .addClass(prefix + 'variants-by-pos')
              .append(df)
              .get()
          )
          .get()
      );

      return pl('<div>').append(bunch.get()).html();
    },

    wrap: function(multi, items, ov, prefix) {
      return ke.ui_views.multi_variant['_' + (multi ? 'multi' : 'single') + 'Wrap'](items, ov, prefix);
    }
  });

})();
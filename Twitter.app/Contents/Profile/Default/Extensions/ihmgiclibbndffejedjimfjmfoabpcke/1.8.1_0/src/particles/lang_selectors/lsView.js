(function(undefined) {

  pl.extend(ke.particles.lang_selectors.view, {
    populateLangDropdown: function() {
      var execPopulation = function(e, f) {
        var isThisSelected, listTempItem, _key;
        var df = document.createDocumentFragment();
        var orderedLangList = [];
        var recentlyUsedRaw = ke.ext.util.storageUtil.getArrayVal('recently_used_lang');
        var recentlyUsedList = [];
        var excludes = [];

        for(var key in ke.ext.const.lang.list) {
          if(ke.ext.const.lang.list[key] === 'auto') {
            continue;
          }

          listTempItem = {
            key: key,
            value: ke.ext.const.lang.list[key],
            i18n: ke.getLocale('Kernel_Lang_' + key)
          };

          orderedLangList.push(listTempItem);
        }
        
        pl.each(recentlyUsedRaw, function(k, v) {
          _key = ke.ext.util.langUtil.getLangNameByKey(v);
          listTempItem = {
            key: _key,
            value: v,
            i18n: ke.getLocale('Kernel_Lang_' + _key)
          };

          recentlyUsedList.push(listTempItem);
          excludes.push(listTempItem.value);
        });

        orderedLangList.sort(function(a, b) {
          if(a.i18n < b.i18n) {
           return -1;
          } else if(a.i18n > b.i18n) {
            return 1;
          }

          return 0;
        });

        if(!~pl.inArray('auto', excludes)) {
          orderedLangList.unshift({
            key: 'Auto',
            value: 'auto',
            i18n: ke.getLocale('Kernel_Lang_Auto')
          });
        }

        pl.each(orderedLangList, function(k, v) {
          if((v.value === 'auto' && !f) || ~pl.inArray(v.value, excludes)) {
            return;
          }

          isThisSelected = ke.ext.util.langUtil[f ? 'isFromLang' : 'isToLang'](v.value) ? 'selected' : '';

          pl(df).prepend(
            pl('<option>')
              .attr({
                value: v.value,
                selected: isThisSelected
              })
              .html(v.i18n)
              .get()
          );
        });

        if(!pl.empty(recentlyUsedList)) {
          pl(df).append(
            pl('<optgroup>')
              .attr('label', ke.getLocale('Window_Content_AllLang'))
              .get()
          );

          pl.each(recentlyUsedList.reverse(), function(k, v) {
            if(v.value === 'auto' && !f) {
              return;
            }

            isThisSelected = ke.ext.util.langUtil[f ? 'isFromLang' : 'isToLang'](v.value) ? 'selected' : '';

            pl(df).append(
              pl('<option>')
                .attr({
                  value: v.value,
                selected: isThisSelected
                })
                .html(v.i18n)
                .get()
            );
          });

          pl(df).append(
            pl('<optgroup>')
              .attr('label', ke.getLocale('Window_Content_RecentlyUsedLang'))
              .get()
          );
        }

        pl(e).empty().append(df);
      };

      execPopulation(ke.getSelectorConst('window', 'FROM_SEL'), true);
      execPopulation(ke.getSelectorConst('window', 'TO_SEL'), false);
    }
  });

})();
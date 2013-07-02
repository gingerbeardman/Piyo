(function(undefined) {
  
  ke.import('ext.googleApi');

  var i18n_deleteButton = ke.getLocale('History_Content_List_DeleteButton').toLowerCase();
  var i18n_listenOriginal = ke.getLocale('History_Content_List_ListenOriginal');
  var i18n_listenTranslation = ke.getLocale('History_Content_List_ListenTranslation');

  pl.extend(ke.particles.hist_list.view, {
    populateHistoryList: function(callback, req, method) {
      var isReqEmpty = pl.empty(req);

      if(!isReqEmpty) {
        req = ' WHERE ' + req;
      } else {
        req = '';
      }

      ke.db.execSql(
        'SELECT * FROM ' + ke.getAppConst('t_history') + req + ' ORDER by id ' + (method === 'prepend' ? '' : 'DESC ') + 'LIMIT 25',
        [],
        function(tx) {
          var len = tx.rows.length;

          if(len > 0) {
            for(var i = 0; i < len; ++i) {
              ke.particles.hist_list.view.drawHistoryItem(tx.rows.item(i), undefined, method);
            }
          } else {
            if(!isReqEmpty && !method) {
              ke.particles.hist_list.view.appendAllItemsCap();
              ke.app.flags.all_loaded_cap_exists = true;
            } else if(isReqEmpty) {
              ke.particles.hist_list.view.displayEmptyCap();
            }
          }

          callback(len);
        },
        null
      );
    },

    // `hl` — highlight
    drawHistoryItem: function(item, hl, method) {
      if(~pl.inArray(item.id, ke.app.temp.item_ids)) {
        return;
      } else {
        ke.app.temp.item_ids[method === 'prepend' ? 'unshift' : 'push'](item.id);
      }

      var input = item.input;
      var output = ke.ext.googleApi.parseReceivedTranslation(item.output, true);
      var emptyVariants = output[0] ? '' : ' ' + 'collapsed';
      var time = ke.ext.time.beautify(item.time);

      output[2] = output[2] || '';

      if(!pl.type(hl, 'undef')) {
        input = ke.ext.string.highlight(input, hl);
        output[1] = ke.ext.string.highlight(output[1], hl);
      }

      pl('.history-list')[method || 'append'](
        ke.ext.tpl.compile(ke.templates.historyListItem, {
          id: item.id,
          input: input,
          main_output: output[1],
          collapse_variants: emptyVariants,
          variants: output[2],
          delete_button: i18n_deleteButton,
          delimiter: '&bull;',
          from_lang: item.l_from,
          to_lang: item.l_to,
          time: time,
          listen_original: i18n_listenOriginal,
          listen_translation: i18n_listenTranslation
        })
      );

      if(pl.empty(output[2])) {
        pl('.i-' + item.id).find('.additional-info-wrap').addClass('stuck-to-top');
      }
    },

    displayEmptyCap: function() {
      pl('.inner-layout').html(
        ke.ext.tpl.compile(ke.templates.historyEmptyCap, {
          text: ke.getLocale('History_Content_List_OnEmpty'),
          has_margin: ' ' + 'top-margin-is-9'
        })
      );
    },

    appendAllItemsCap: function() {
      if(ke.app.flags.all_loaded_cap_exists) {
        return;
      }

      pl('.inner-layout').append(
        ke.ext.tpl.compile(ke.templates.historyEmptyCap, {
          text: ke.getLocale('History_Content_List_AllLoaded'),
          has_margin: ' ' + 'with-top-margin'
        })
      );
    }
  });

})();
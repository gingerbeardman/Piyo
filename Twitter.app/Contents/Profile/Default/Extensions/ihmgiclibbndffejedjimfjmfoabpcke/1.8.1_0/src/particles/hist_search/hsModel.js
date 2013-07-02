(function(undefined) {
  
  var SEARCH_TIMEOUT;
  var PREV_VAL;

  pl.extend(ke.particles.hist_search.model, {
    toggleClearTick: function() {
      var val = pl('.search-input').val();
      pl('.clear-input-tick')[pl.empty(val) ? 'hide' : 'show']();
    },

    onClearTickClick: function() {
      pl('.search-input').val('');
      ke.particles.hist_search.model.toggleClearTick();
      ke.particles.hist_search.model.execSearch();
    },

    onSearchKeyRelease: function() {
      SEARCH_TIMEOUT = setTimeout(function() {
        clearTimeout(SEARCH_TIMEOUT);
        ke.particles.hist_search.model.execSearch();
      }, 325);
    },

    execSearch: function() {
      ke.app.flags.is_searching = true;
      ke.app.temp.item_ids = [];

      var val = pl('.search-input').val();

      if(val === PREV_VAL) {
        return;
      } else {
        PREV_VAL = val;
      }
      
      if(pl.empty(val)) {
        ke.app.flags.is_searching = false;
        ke.particles.hist_list.model.clear();
        ke.particles.hist_list.view.populateHistoryList(ke.app.initHistoryList);
        return;
      }

      var inputLike = '%' + val + '%';
      var outputLike = '%' + ke.ext.string.leadToDbOutputLike(val) + '%';

      ke.db.execSql(
        'SELECT * FROM ' + ke.getAppConst('t_history') + ' WHERE input LIKE ? OR output LIKE ? ORDER by id DESC LIMIT 25',
        [inputLike, outputLike],
        function(tx) {
          var len = tx.rows.length;

          if(len > 0) {
            ke.particles.hist_list.model.clear();
            for(var i = 0; i < len; ++i) {
              ke.particles.hist_list.view.drawHistoryItem(tx.rows.item(i), val);
            }
          } else {
            ke.particles.hist_list.model.clear();
            ke.particles.hist_search.view.displayNothingFoundCap();
          }

          ke.app.initHistoryList();
        },
        null
      );
    }
  });

})();
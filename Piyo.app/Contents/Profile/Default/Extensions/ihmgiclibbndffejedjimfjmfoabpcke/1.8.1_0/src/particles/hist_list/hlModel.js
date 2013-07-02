(function(undefined) {
  
  pl.extend(ke.particles.hist_list.model, {
    onItemMouseOver: function(e) {
      var id = ke.ext.util.selectorsUtil.getHistoryItemId(e.target);
      pl('.i-' + id).addClass('hovered');
    },

    onItemMouseOut: function(e) {
      var id = ke.ext.util.selectorsUtil.getHistoryItemId(e.target);
      pl('.i-' + id).removeClass('hovered');
    },

    onItemClick: function(e) {
      var isOnPlaqueClick = ke.ext.util.selectorsUtil.isMainVariantPlaque(e.target);
      var id = ke.ext.util.selectorsUtil.getHistoryItemId(e.target);
      var s = '.i-' + id;

      if(!pl(s).hasClass('expanded')) {
        pl(s).addClass('expanded');
      } else if(pl(s).hasClass('expanded') && isOnPlaqueClick) {
        pl(s).removeClass('expanded');
      }
    },

    onItemDeleteClick: function(e) {
      var id = ke.ext.util.selectorsUtil.getHistoryItemId(e.target);

      e.stopPropagation();

      ke.db.execSql(
        'DELETE FROM ' + ke.getAppConst('t_history') + ' WHERE id = ?',
        [id],
        function() {
          pl('.i-' + id).remove();
        },
        null
      );
    },

    automaticUpdate: function() {
      if(!ke.app.flags.is_searching) {
        ke.particles.hist_list.view.populateHistoryList(function(len) {
          if(len > 0) {
            ke.app.initHistoryList();
          }
        }, 'id > ' + ke.app.temp.item_ids[0] || 0, 'prepend'); 
      }
    },

    onPageScrollEnd: function() {
      var e = document.body;
      if(e.offsetHeight + e.scrollTop >= e.scrollHeight) {
        ke.particles.hist_list.model.showMoreItems();
      }
    },

    showMoreItems: function() {
      var last_id = ke.app.temp.item_ids[ke.app.temp.item_ids.length - 1];

      if(!ke.app.flags.is_searching && last_id) {
        ke.particles.hist_list.view.populateHistoryList(function() {
          ke.app.initHistoryList();
        }, 'id < ' + last_id);
      }
    },

    getListenValue: function(s, e) {
      var id = ke.ext.util.selectorsUtil.getHistoryItemId(e.target);
      var text;

      if(s == 'orig') {
        text = pl('.i-' + id).find('.input-particle').html();
      } else {
        text = pl('.i-' + id).find('.main-output-particle').html();
      }

      return text;
    },

    // The same as there is above but with effects
    fadeOutList: function() {
      pl('.history-item-wrap').fadeOut();
      ke.particles.hist_list.view.displayEmptyCap();
    },

    // Ordinary clear of the list, without any effects
    clear: function() {
      ke.app.flags.all_loaded_cap_exists = false;
      pl('.history-list').empty();
      pl('.ec-wrap').remove();
    }
  });

})();
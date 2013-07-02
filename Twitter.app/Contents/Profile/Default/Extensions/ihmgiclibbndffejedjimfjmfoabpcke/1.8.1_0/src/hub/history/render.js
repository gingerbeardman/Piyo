/* Kumquat Hub History Render
 * 
**/

(function(undefined) {
  
  var OPTIONS_VIS_MAP = {
    slideDown: 'slideUp',
    slideUp: 'slideDown'
  };

  pl.extend(ke.app.render, {
    organize: {
      ctrlOptionsVisibility: function() {
        var TIME = 125;

        var prevAction = pl('.options-wrap').attr('prev-visibility-action') || 'slideDown';
        pl('.options-wrap')[OPTIONS_VIS_MAP[prevAction]](TIME).attr('prev-visibility-action', OPTIONS_VIS_MAP[prevAction]);
        if(OPTIONS_VIS_MAP[prevAction] === 'slideDown')  {
          setTimeout(function() {
            pl('.options-wrap').css('height', 'auto');
          }, TIME + 10);
        }
      }
    },

    events: {
      onItemMouseOver: function() {
        pl('.history-item-wrap').bind('mouseover', ke.particles.hist_list.model.onItemMouseOver);
      },

      onItemMouseOut: function() {
        pl('.history-item-wrap').bind('mouseout', ke.particles.hist_list.model.onItemMouseOut);
      },

      onItemClick: function() {
        pl('.main-variant-wrap').bind('click', ke.particles.hist_list.model.onItemClick);
      },

      onDeleteClick: function() {
        pl('.ab-delete', '.history-item-wrap').bind('click', ke.particles.hist_list.model.onItemDeleteClick);
      },

      onListenOriginalClick: function() {
        pl('.listen-original').bind('click', ke.particles.listen.model.playHistoryOriginal);
      },

      onListenTranslationClick: function() {
        pl('.listen-translation').bind('click', ke.particles.listen.model.playHistoryTranslation);
      },

      onOptionsClick: function() {
        pl('.settings-button').bind('click', ke.app.handlers.onOptionsClick);
      },

      onClearHistoryClick: function() {
        pl('.clear-history').bind('click', ke.particles.hist_opt_delete.model.onClearHistoryClick);
      },

      onSelectToDeleteClick: function() {
        pl('.select-to-delete').bind('click', ke.particles.hist_opt_delete.model.onSelectToDeleteClick);
      },

      onSearchKeyUp: function() {
        pl('.search-input').bind('keyup', ke.particles.hist_search.model.toggleClearTick);
      },

      onClearTickClick: function() {
        pl('.clear-input-tick').bind('click', ke.particles.hist_search.model.onClearTickClick);
      },

      onSearchKeyRelease: function() {
        pl('.search-input').bind('keyup', ke.particles.hist_search.model.onSearchKeyRelease);
      },

      onPageScrollEnd: function() {
        pl(document).bind('scroll', ke.particles.hist_list.model.onPageScrollEnd);
      }
    }
  });
  
})();
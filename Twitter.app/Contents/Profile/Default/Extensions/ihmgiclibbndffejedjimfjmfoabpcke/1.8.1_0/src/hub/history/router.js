/* Kumquat Hub History Router
 * 
**/

(function(undefined) {
  
  pl.extend(ke.app, {
    import: [      
      'ext.const.lang',
      'ext.util.langUtil',
      'ext.const.selectors',
      'ext.const.storage',
      'ext.util.selectorsUtil',
      'ext.util.storageUtil',

      'ext.anim',
      'ext.dom',
      'ext.tpl',
      'ext.googleApi',
      'ext.time',
      'ext.string',
      'ext.errorManager',

      'ui_components.tooltip.help',
      'ui_components.tooltip.confirm',

      'templates.historyListItem',
      'templates.historyEmptyCap',
      'templates.deleteSelectedButton',

      'particles.hist_search.hsView',
      'particles.hist_search.hsModel',
      'particles.hist_list.hlView',
      'particles.hist_list.hlModel',
      'particles.hist_opt_delete.hodModel',
      'particles.listen.lModel',

      'ui_components.tooltip.modal',

      'ui_views.i18n'
    ],
    
    temp: {
      item_ids: [],
      selected: []
    },

    flags: {
      is_searching: false,
      is_del_selecting: false,
      all_loaded_cap_exists: false,
      isPlayingTrans: false,
      isPlayingOriginal: false
    },

    init: function() {
      ke.app.render.organize.ctrlOptionsVisibility();
      ke.particles.hist_search.model.toggleClearTick();

      ke.ui_views.i18n.init();
      ke.ui_views.i18n.setHistoryTitle();

      ke.db.choose(ke.getAppConst('db'));

      ke.particles.hist_list.view.populateHistoryList(ke.app.initHistoryList);

      ke.app.render.events.onOptionsClick();
      ke.app.render.events.onClearHistoryClick();
      // ke.app.render.events.onSelectToDeleteClick();
      ke.app.render.events.onSearchKeyUp();
      ke.app.render.events.onClearTickClick();
      ke.app.render.events.onSearchKeyRelease();
      ke.app.render.events.onPageScrollEnd();

      this.initAutomaticUpdate();
    },

    initHistoryList: function() {
      ke.app.render.events.onItemMouseOver();
      ke.app.render.events.onItemMouseOut();
      ke.app.render.events.onItemClick();
      ke.app.render.events.onDeleteClick();
      ke.app.render.events.onListenOriginalClick();
      ke.app.render.events.onListenTranslationClick();
    },

    initAutomaticUpdate: function() {
      setInterval(function() {
        ke.particles.hist_list.model.automaticUpdate();
      }, 3525);
    }
  });
  
})();
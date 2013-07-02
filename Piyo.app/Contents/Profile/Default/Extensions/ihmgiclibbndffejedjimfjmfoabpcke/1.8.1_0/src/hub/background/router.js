/* Kumquat Hub Background Router
 * 
**/

(function(undefined) {
  
  pl.extend(ke.app, {
    import: [
      'ext.ps.am',
      'ext.ps.rs',
      
      'ext.const.lang',
      'ext.const.storage',
      'ext.util.langUtil',
      'ext.util.storageUtil',

      'ext.compatibility.db',
      'ext.compatibility.storage',

      'ext.googleApi',
      'ext.cache',
      'ext.audio',
      'ext.orphography',

      'particles.context.ctxModel',

      'bg_events.translate',
      'bg_events.audio',
      'bg_events.option'
    ],
    
    temp: {},

    flags: {},

    init: function() {
      ke.ext.util.storageUtil.initStorage();

      this.initEventListener();
      this.initDatabase(ke.ext.compatibility.db.sync);
      this.initFlags();
      this.initContextMenu();

      ke.ext.compatibility.storage.sync();
    },

    initEventListener: function() {
      chrome.extension.onRequest.addListener(function(data, sender, fn) {
        var parts = ke.parseProccessCall(data.action);
        ke.app.handlers._proccessEventHandlers[parts.lib][parts.cmd][parts.exact](data, fn);
      });
    },

    initDatabase: function(callback) {
      ke.db.choose(ke.getAppConst('db'), '100 mB');

      ke.db.execSql(
        'SELECT * FROM ' + ke.getAppConst('t_history'),
        [],
        null,
        function() {
          ke.db.execSql(
            'CREATE TABLE ' + ke.getAppConst('t_history') + ' (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, l_from VARCHAR(6), l_to VARCHAR(6), input TEXT NOT NULL, output TEXT NOT NULL, time DATE_TIME)',
            [],
            callback,
            null
          );
        }
      );
    },

    initFlags: function() {
      this.flags.context = ke.ext.util.storageUtil.isActiveJsonOption('context');
    },

    initContextMenu: function() {
      if(ke.app.flags.context) {
        var title = ke.getLocale('Kernel_Plaque_TranslateTo');
        title += ' ';
        title += ke.ext.orphography.declineTransTo(ke.ext.util.langUtil.getToLang());

        chrome.contextMenus.create({
          title: title,
          contexts: ['selection'],
          onclick: ke.particles.context.model.onMenuClick
        });
      }
    }
  });
  
})();
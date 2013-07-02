/* Kumquat Hub Content Router
 * 
**/

(function(undefined) {

  pl.extend(ke.app, {
    import: [
      'ext.tpl',
      'ext.event',
      'ext.audio',
      'ext.dom',

      'particles.listen.lModel',
      'particles.translate_ctt.tcModel',
      'particles.scrollbars.sModel',

      'ui_components.scrollbar.scrollbar',
      'ui_components.tooltip.helpSelected'
    ],

    flags: {
      isCurrentTranslationMulti: false,
      tt_transUtterancePermission: false,
      isPlayingTooltipTrans: false
    },

    init: function() {
      ke.app.render.events.onKeyCombinationClick();
      ke.app.render.events.onKCClickInTextInput();

      ke.app.initBackgroundEventListener();
    },

    initBackgroundEventListener: function() {
      chrome.extension.onMessage.addListener(function(data, sender, fn) {
        var parts = ke.parseProccessCall(data.action);
        (ke.app.handlers._proccessEventHandlers[parts.lib][parts.cmd][parts.exact] || ke.EF)(data, fn);
      });
    }
  });
  
})();
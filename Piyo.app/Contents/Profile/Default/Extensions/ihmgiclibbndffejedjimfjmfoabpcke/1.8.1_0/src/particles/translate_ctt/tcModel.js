(function(undefined) {
  
  pl.extend(ke.particles.translate_ctt.model, {
    currentSelectedText: '',

    getCurrentSelectedText: function() {
      return ke.particles.translate_ctt.model.currentSelectedText;
    },

    setCurrentSelectedText: function(text) {
      ke.particles.translate_ctt.model.currentSelectedText = text;
    },

    getSelection: function(doc) {
      return (doc || window).getSelection();
    },

    getSelectedText: function(doc) {
      return pl.trim(this.getSelection(doc).toString());
    },

    getTranslation: function(t, c) {
      if(pl.empty(t)) {
        return;
      }

      chrome.extension.sendRequest({
        action: ke.proccessCall('app', 'translate', 'get'),
        text: t,
        prefix: ke.getPrefix()
      }, function(d) {
        ke.app.flags.isCurrentTranslationMulti = d.isMulti;
        c(d.code);
      });
    },

    display: function(trans, predef, doc, iframe) {
      ke.ui.tooltip.helpSelected.show(trans, this.getSelection(doc), predef, doc, iframe);
      
      setTimeout(function() {
        ke.particles.scrollbars.model.setupHelpSelectedScroll();
        ke.app.render.events.listen();
      }, 50);
    },

    showTranslation: function(text, predef, doc, iframe) {
      var that = this;

      this.setCurrentSelectedText(text || this.getSelectedText(doc));
      var selected = this.getCurrentSelectedText();
      
      this.getTranslation(selected, function(t) {
        that.display(t, predef, doc, iframe);
      });
    }
  });

})();
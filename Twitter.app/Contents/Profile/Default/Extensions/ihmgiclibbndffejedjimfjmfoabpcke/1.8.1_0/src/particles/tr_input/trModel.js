(function(undefined) {
  
  pl.extend(ke.particles.tr_input.model, {
    onTextareaFocus: function() {
      pl('.left-part').addClass('textarea-with-focus-lp');
      pl('.action-bar').addClass('textarea-with-focus');
    },

    onTextareaBlur: function() {
      pl('.left-part').removeClass('textarea-with-focus-lp');
      pl('.action-bar').removeClass('textarea-with-focus');
    },
    
    saveValueOnKeyup: function() {
      var value = pl('.translation-input').val();
      ke.ext.util.storageUtil.setJsonVal('save', value);
    },

    getSavedValue: function() {
      return ke.ext.util.storageUtil.getJsonVal('save');
    }
  });

})();
(function(undefined) {
  
  pl.extend(ke.particles.tr_input.view, {
    displaySaveValue: function() {
      var saved = ke.particles.tr_input.model.getSavedValue();
      pl('.translation-input').val(saved).caretToEnd();
    }
  });

})();
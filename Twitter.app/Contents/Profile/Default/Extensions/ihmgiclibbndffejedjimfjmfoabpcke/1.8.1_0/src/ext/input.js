(function(undefined) {
  
  // Extent of the Prevel Library API
  pl.extend(pl.fn, {
    caretToEnd: function() {
      var io, end;

      pl.each(this.elements, function() {
        io  = pl(this);
        end = io.val().length;
        
        io.get().setSelectionRange(end, end);
        io.trigger('focus');
      });

      return this;
    }
  });

})();
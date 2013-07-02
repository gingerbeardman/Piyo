(function(undefined) {
  
  pl.extend(ke.particles.lang_swap.model, {
    // It's borrowed from the previous version, so it uses deprecated Prevel Library API
    onSwapLang: function() {
      var from = [
        pl('.ui_selector .options .option_selected span', 0).attr('val'),
        pl('.ui_selector .select', 0).html()
      ];
        
      var to = [
        pl('.ui_selector .options .option_selected span', 1).attr('val'),
        pl('.ui_selector .select', 1).html()
      ];
                
      if(from[0] === 'auto') {
        return;
      }
                
      ke.ui.dropdown.data.callback(
        pl(
          pl(
            pl('.ui_selector .options .option_selected', 1)
              .attr('class', 'option')
              .parent()
              .get()
              .querySelector('.option span[val=' + from[0] + ']')
          )
            .parent()
            .attr('class', 'option_selected')
            .parent(6)
            .get()
            .querySelector('.select')
        )
          .html(from[1])
          .parent(2)
          .get()
          .querySelector('select'),
        from[0]
      );
        
      ke.ui.dropdown.data.callback(
        pl(
          pl(
            pl('.ui_selector .options .option_selected', 0)
              .attr('class', 'option')
              .parent()
              .get()
              .querySelector('.option span[val=' + to[0] + ']')
          )
            .parent()
            .attr('class', 'option_selected')
            .parent(6)
            .get()
            .querySelector('.select')
        )
          .html(to[1])
          .parent(2)
          .get()
          .querySelector('select'),
        to[0]
      );

      ke.particles.translate.model.translateSimple(undefined, true);
    }
  });

})();
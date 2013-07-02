(function(undefined) {
  
  var MAP = {
    enter: 13,
    shift: 16,
    t: 84,
    cmd: [91, 93]
  };

  var SPECIAL_KEYS = {
    shift: 'shiftKey',
    ctrl: 'ctrlKey',
    alt: 'altKey'
  };

  pl.extend(ke.ext.event, {
    is: function(combo, e) {
      var multi = combo.split('+');
      var is = true;
      var keyCodeMatch;

      pl.each(multi, function(k, v) {
        keyCodeMatch = false;

        if(pl.type(MAP[v], 'arr')) {
          pl.each(MAP[v], function(k2, v2) {
            if(e.keyCode === MAP[v][v2]) {
              keyCodeMatch = true;
            }
          });
        } else { 
          keyCodeMatch = e.keyCode === MAP[v];
        }

        if(!e[SPECIAL_KEYS[v]] && !keyCodeMatch) {
          is = false;
        }
      });

      return is;
    }
  });

})();
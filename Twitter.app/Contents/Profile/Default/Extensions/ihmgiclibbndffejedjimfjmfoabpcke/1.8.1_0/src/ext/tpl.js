/* Kumquat Extension - Tpl
 * 
**/

(function(undefined) {
  
  pl.extend(ke.ext.tpl, {
    compile: function(str, data) {
      data = data || {};

      for(var key in data) {
        str = str.replace(new RegExp('<%=' + key + '%>', 'g'), data[key]);
      }

      return str;
    }
  });
  
})();
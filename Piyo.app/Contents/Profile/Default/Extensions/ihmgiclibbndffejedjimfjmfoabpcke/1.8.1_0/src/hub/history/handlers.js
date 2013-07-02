/* Kumquat Hub History Handlers
 * 
**/

(function(undefined) {
  
  pl.extend(ke.app.handlers, {
    onOptionsClick: function() {
      ke.app.render.organize.ctrlOptionsVisibility();
      pl('.settings-button').toggleClass('active');
    }
  });
  
})();
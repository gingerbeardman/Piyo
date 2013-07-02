function checkNewTweetsRefresh() {
  if(document.readyState != 'interactive') {
    if(document.getElementsByClassName('js-new-tweets-bar').length > 0) {
      document.getElementsByClassName('js-new-tweets-bar')[0].click();
    }
  }
  window.setTimeout('checkNewTweetsRefresh()', 1500);
}

(function() {
  window.setTimeout('checkNewTweetsRefresh()', 5000);
})();

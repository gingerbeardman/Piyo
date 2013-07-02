function insertScript() {
  jQuery('body').append('<script type="text/javascript">(function(l) { var res = document.createElement(\'SCRIPT\'); res.type = \'text/javascript\'; res.src = l; document.getElementsByTagName(\'head\')[0].appendChild(res); })("'+ chrome.extension.getURL("reload.js") +'");</script>');
}

window.setTimeout('insertScript()', 10000);

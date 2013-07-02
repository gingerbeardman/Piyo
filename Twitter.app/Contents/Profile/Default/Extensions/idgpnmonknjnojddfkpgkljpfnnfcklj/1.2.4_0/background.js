function modifyRequestHeaders(details, headers) {
  if (!headers) {
    return;
  }
  for (var i = 0, length = headers.length; i < length; ++i) {
    var currHeader = headers[i];
    // Overrides the header if it is enabled and its name is not empty.
    if (currHeader.enabled && currHeader.name) {
      details.requestHeaders.push({name: currHeader.name, value: currHeader.value});
    }
  }
};

/**
 * Check whether the current request url pass the given list of filters.
 */
function passFilters(url, filters) {
  if (!filters) {
    return true;
  }
  var allow = false;
  for (var i = 0, length = filters.length; i < length; ++i) {
    var host = filters[i].host;
    if (!host) {
      allow = true;
      continue;
    }
    if (url.search(host.replace('*', '.*')) == 0) {
      allow = filters[i].behavior;
    }
  }
  return String(allow) == "true";
};

/**
 * Gets the currently selected profile. Maybe null.
 */
function getCurrentProfile() {
  if (localStorage.profiles) {
    var profiles = $.parseJSON(localStorage.profiles);
    if (!localStorage.selectedProfile) {
      localStorage.selectedProfile = 0;
    }
    return profiles[localStorage.selectedProfile];
  }
};

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var currProfile = getCurrentProfile();
    if (currProfile) {
      if (passFilters(details.url, currProfile.filters)) {
        modifyRequestHeaders(details, currProfile.headers);
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: []},
  ['requestHeaders', 'blocking']
);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.active && tab.highlighted) {
    if (tab.url) {
      var currProfile = getCurrentProfile();
      if (currProfile) {
        var icon = 'icon.png';
        if (!passFilters(tab.url, currProfile.filters)) {
          icon = 'icon_bw.png';
        }
        chrome.browserAction.setIcon({path: icon, tabId: tabId});
      }
    }
  }
});

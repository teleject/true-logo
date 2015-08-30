(function () {

  "use strict";

  var off,

  loadJS = function(){
    chrome.tabs.executeScript(null, {
      file: off ? "off.js" : "on.js"
    });
  };

  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.browserAction.getBadgeText({}, function(text){
      off = text == "off";
      chrome.browserAction.setBadgeText({
        text: off ? '' : 'off'
      });
      off = !off;
      loadJS();
    });
  });

  chrome.tabs.onUpdated.addListener(function(tab, response) {
    if (response.status === 'complete') {
      chrome.browserAction.getBadgeText({},function(text){
        off = text == "off";
        loadJS();
      });
    }
  });

}());
chrome.storage.sync.get(['samlUrl'], function(items){
  var samlUrl = items.samlUrl;

  chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.create({url: samlUrl});
  });
});

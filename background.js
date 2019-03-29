chrome.browserAction.onClicked.addListener(function(activeTab) {
  chrome.storage.sync.get(['samlUrl', 'googleAccount', 'awsAccount'], function(items){
    if(items.samlUrl) {
      chrome.tabs.create({url: items.samlUrl});
    }
    else {
      console.log("Options need to be setup");
      chrome.tabs.create({url: "options.html"});
    }
  });
});

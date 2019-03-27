chrome.storage.sync.get(['googleAccount'], function(items){
  var patten = new RegExp(items.googleAccount);
  var btns = document.getElementsByTagName("button");
  for(var i = 0; i < btns.length; ++i) {
    if(patten.test(btns[i].value)) {
      btns[i].click();
    }
  }
});


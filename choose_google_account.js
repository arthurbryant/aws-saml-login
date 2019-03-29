chrome.storage.sync.get(['googleAccount'], function(items){
  var btns = document.getElementsByTagName("button");
  if(btns.length == 1) {
    btns[0].click();
  }
  else {
    var patten = new RegExp(items.googleAccount);
    if(items.googleAccount) {
      for(var i = 0; i < btns.length; ++i) {
        if(patten.test(btns[i].value)) {
          btns[i].click();
        }
      }
    }
  }
});

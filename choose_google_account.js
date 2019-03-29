chrome.storage.sync.get(['googleAccount'], function(items){
  var patten = new RegExp(items.googleAccount);
  var btns = document.getElementsByTagName("button");

  if(btns.length == 1) {
    btns[0].click();
    return;
  }
  for(var i = 0; i < btns.length; ++i) {
    if(patten.test(btns[i].value)) {
      btns[i].click();
    }
  }
});


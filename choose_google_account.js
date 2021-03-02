chrome.storage.sync.get(['googleAccount'], function(items){
  let loginElements = document.querySelectorAll('[data-identifier]');
  if(loginElements.length == 1) {
    loginElements[0].click();
  }
  else {
    let patten = new RegExp(items.googleAccount);
    if(items.googleAccount) {
      for(let i = 0; i < loginElements.length; ++i) {
        let email = loginElements[i].getAttribute("data-identifier");
        if(patten.test(email)) {
          loginElements[i].click();
        }
      }
    }
  }
});

chrome.storage.sync.get(['googleAccount'], function(items) {
  let loginElements = document.querySelectorAll('[data-identifier]');

  if(loginElements.length == 1) {
    loginElements[0].click();
    return true;
  }

  let targetGoogleAccount = items.googleAccount;
  if(targetGoogleAccount) {
    for(let i = 0; i < loginElements.length; ++i) {
      let le = loginElements[i];
      let email = le.getAttribute("data-identifier");
      if(targetGoogleAccount === email) {
        le.click();
        return true
      }
    }
  }

  return false;
});

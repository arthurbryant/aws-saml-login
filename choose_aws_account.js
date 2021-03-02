chrome.storage.sync.get(['awsAccount'], function(items) {
  let awsAccountElements = document.getElementsByClassName("saml-account-name");
  let index = 0;

  if(awsAccountElements.length > 1) {
    let pattern = new RegExp(items.awsAccount + ".*");
    for(let i = 0; i < awsAccountElements.length; ++i) {
      let accountName = awsAccountElements[i].textContent;
      if (pattern.test(accountName)) {
        index = i;
        console.log("Found aws account: " + items.awsAccount);

        break;
      }
    }
  }

  if(items.awsAccount) {
    let aws_accounts = document.getElementsByClassName("saml-account");
    let checkbox = aws_accounts[index * 2 + 1].getElementsByTagName("input")[0];

    checkbox.checked = true;
    document.getElementById("signin_button").click();
  }
});

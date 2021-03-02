chrome.storage.sync.get(['awsAccount'], function(items) {
  let titles = document.getElementsByClassName("saml-account-name");
  let index = 0;

  if(titles.length > 1) {
    let pattern = new RegExp(items.awsAccount + ".*");
    for(let i = 0; i < titles.length; ++i) {
      let text = titles[i].textContent;
      if (pattern.test(text)) {
        index = i;
        console.log("Found aws accout: " + items.awsAccount);

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

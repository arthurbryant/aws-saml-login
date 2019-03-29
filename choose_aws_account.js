chrome.storage.sync.get(['awsAccount'], function(items) {
  var titles = document.getElementsByClassName("saml-account-name");
  var index = 0;

  if(titles.length > 1) {
    var pattern = new RegExp(items.awsAccount + ".*");
    for(var i = 0; i < titles.length; ++i) {
      var text = titles[i].textContent;
      if (pattern.test(text)) {
        index = i;
        console.log("Found aws accout: " + items.awsAccount);

        break;
      }
    }
  }

  if(items.awsAccount) {
    var aws_accounts = document.getElementsByClassName("saml-account");
    var checkbox = aws_accounts[index * 2 + 1].getElementsByTagName("input")[0];

    checkbox.checked = true;
    document.getElementById("signin_button").click();
  }
});

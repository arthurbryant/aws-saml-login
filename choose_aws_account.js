chrome.storage.sync.get(['awsAccount'], function(items) {
  var patten = new RegExp(items.awsAccount + ".*");
  var titles = document.getElementsByClassName("saml-account-name");
  var index;

  if(titles.length == 1) {
    index = 0;
  }
  else {
    for(var i = 0; i < titles.length; ++i) {
      var text = titles[i].textContent;
      if (patten.test(text)) {
        index = i;
        console.log("Found aws accout: " + items.awsAccount);

        break;
      }
    }
  }

  var aws_accounts = document.getElementsByClassName("saml-account");
  var checkbox = aws_accounts[index * 2 + 1].getElementsByTagName("input")[0];

  checkbox.checked = true;
  document.getElementById("signin_button").click();
});

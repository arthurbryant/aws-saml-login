function save_options() {
  let awsSamlUrl = document.getElementById('saml_url').value;
  let googleAccount = document.getElementById('google_account').value;
  let awsAccount = document.getElementById('aws_account').value;

  if (awsSamlUrl) {
    chrome.storage.sync.set({
      samlUrl: awsSamlUrl,
      googleAccount: googleAccount,
      awsAccount: awsAccount
    }, function(){
      let status = document.getElementById('status');
      status.textContent = "Option saved";
      setTimeout(function(){
        status.textContent = '';
      }, 3000);
    });
  }
  else {
    alert('AWS Console Login Link from G Suite needs to to set to use this extension!')
  }
}

function restore_options() {
  chrome.storage.sync.get(['samlUrl', 'googleAccount', 'awsAccount'], function(items){
    document.getElementById('saml_url').value = items.samlUrl || "";
    document.getElementById('google_account').value = items.googleAccount || "";
    document.getElementById('aws_account').value = items.awsAccount || "";
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

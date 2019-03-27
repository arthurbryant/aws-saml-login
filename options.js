function save_options() {
  var awsSamlUrl = document.getElementById('saml_url').value;
  var googleAccount = document.getElementById('google_account').value;
  var awsAccount = document.getElementById('aws_account').value;

  chrome.storage.sync.set({
    samlUrl: awsSamlUrl,
    googleAccount: googleAccount,
    awsAccount: awsAccount
    }, function(){
      var status = document.getElementById('status');
      status.textContent = "Option saved";
      setTimeout(function(){
        status.textContent = '';
      }, 3000);
  });
}

function restore_options() {
  chrome.storage.sync.get(['samlUrl', 'googleAccount', 'awsAccount'], function(items){
    document.getElementById('saml_url').value = items.samlUrl;
    document.getElementById('google_account').value = items.googleAccount;
    document.getElementById('aws_account').value = items.awsAccount;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
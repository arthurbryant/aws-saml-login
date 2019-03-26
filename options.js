function save_options() {
  var awsSamlUrl = document.getElementById('saml_url').value;
  console.log(awsSamlUrl);

  chrome.storage.sync.set({samlUrl: awsSamlUrl}, function(){
    var status = document.getElementById('status');
    status.textContent = "Option saved";
    setTimeout(function(){
      status.textContent = '';
    }, 1000);
  });
}

function restore_options() {
  chrome.storage.sync.get(['samlUrl'], function(items){
    document.getElementById('saml_url').vale = items.samlUrl;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
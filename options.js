function save_options() {
  var awsSamlUrl = document.getElementById('saml_url').value;

  chrome.storage.sync.set({samlUrl: awsSamlUrl}, function(){
    var status = document.getElementById('status');
    status.textContent = "Option saved";
    setTimeout(function(){
      status.textContent = '';
    }, 3000);
  });
}

function restore_options() {
  chrome.storage.sync.get(['samlUrl'], function(items){
    document.getElementById('saml_url').value = items.samlUrl;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
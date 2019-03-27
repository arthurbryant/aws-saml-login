var btns = document.getElementsByTagName("button");
var patten = /.*fout\.jp/;
for(var i = 0; i < btns.length; ++i) {
  value = btns[i].value;
  if(patten.test(value)) {
    btns[i].click();
  }
}

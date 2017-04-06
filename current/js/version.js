---
layout: null
---

var pageVersion, lastVersion;

if (location.href.indexOf('version/')>0) {
  var urlParts = location.href.split('/');
  for (i=0; i<urlParts.length; i++) {
    if (urlParts[i]=='version') {
      pageVersion = urlParts[i+1];
      break;
    }
  }
  localStorage.setItem('version', pageVersion);
} else if (localStorage.getItem('version')) {
  var storageVersion = localStorage.getItem('version');
  var querySubstr = location.href.indexOf('?');
  var queryString = '';
  if (querySubstr > 0) {
    queryString = location.href.substr(querySubstr);
  }
  var redirectUrl = document.location.origin+'{{site.baseurl}}version/'+storageVersion+document.location.pathname+queryString;
  location.href = redirectUrl;
}
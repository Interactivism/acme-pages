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
  var redirectUrl = document.location.origin+'/version/'+storageVersion+document.location.pathname;
  location.href = redirectUrl;
}
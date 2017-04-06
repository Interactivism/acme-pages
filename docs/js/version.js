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
  var baseUrl = 0;
  if (querySubstr > 0) {
    queryString = location.href.substr(querySubstr);
  }
  if ('/acme-pages/'.length > 1) {
    baseUrl = '/acme-pages/'.length - 1;
  }
  var redirectUrl = document.location.origin+'/acme-pages/version/'+storageVersion+document.location.pathname.substr(baseUrl)+queryString;
  location.href = redirectUrl;
}
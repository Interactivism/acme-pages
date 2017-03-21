var pageVersion;

if (location.href.indexOf('version/')>0) {
  pageVersion = location.href.split('/')[4];
  localStorage.setItem('version', pageVersion);
} else if (localStorage.getItem('version')) {
  var storageVersion = localStorage.getItem('version');
  var redirectUrl = document.location.origin+'/version/'+storageVersion+document.location.pathname;
  location.href = redirectUrl;
}
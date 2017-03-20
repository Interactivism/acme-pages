// if (location.href.indexOf('version/')>0) {
//   var urlParts = location.href.split('/');
//   for (i=0; i<urlParts.length; i++) {
//     if (urlParts[i]=='version') {
//       localStorage.setItem('version', urlParts[i+1]);
//       break;
//     }
//   }
// } else if (localStorage.getItem('version')) {
//   var version = localStorage.getItem('version');
//   var redirectUrl = document.location.origin+'/version/'+version+document.location.pathname;
//   location.href = redirectUrl;
// }
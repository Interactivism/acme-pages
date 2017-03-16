---
layout: null
---

jQuery(function() {
  var searchTerm = getQueryVariable('query');

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var sortBy = $('#sort-by');

  if(!localStorage.getItem('sorting')){
    localStorage.setItem('sorting', sortBy.val());
  } else {
    var sorting = localStorage.getItem('sorting');
    sortBy.val(sorting);
  }

  window.idx = lunr(function () {
    this.ref('id');
    this.field('id');
    this.field('title');
    this.field('content', { boost: 20 });
    this.field('category');
  });

  window.data = $.getJSON('/search.json');
  window.data.then(function(loadedData){
    $.each(loadedData, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });

  if(searchTerm) {
    $("#search_box").val(searchTerm);
    window.data.then(function(){
      displaySearchResults();
    });
  }

  $("#site_search").keyup(function(event){
    event.preventDefault();
    displaySearchResults();
  });
  
  sortBy.change(function(){
    localStorage.setItem('sorting', sortBy.val());
    displaySearchResults();
  });


  //Search in header
  $("#search-container").keyup(function(event){
    event.preventDefault();
    displaySearchInHeader();
  });

  //Search page display
  function displaySearchResults() {
    var query = $("#search_box").val();
    var results = window.idx.search(query);
    var $searchResults = $("#search_results");


    window.data.then(function(loadedData) {

      if (results.length) {
        $searchResults.empty();
        $searchResults.prepend('<p class="">Found '+results.length+' result(s)</p><hr>');

        if (localStorage.getItem('sorting') === 'date'){
          results.forEach(function(result) {
            result.updated = loadedData[result.ref].updated;
          });
          results.sort(function(a,b) {
            return new Date(a.updated).getTime() < new Date(b.updated).getTime();
          });
        }

        results.forEach(function(result) {
          var item = loadedData[result.ref];
          var appendString = '<a href="'+item.url.trim()+'">'+item.title+'</a><div class="updated">'+item.updated+'</div><p>'+item.excerpt+'</p>';

          $searchResults.append(appendString);
        });
      } else {
        $searchResults.html('<p>Your search did not match any documents.</p><p>Make sure that all words are spelled correctly or try more general keywords.</p>');
      }
    });
  }

  function displaySearchInHeader() {
    var query = $("#search-input").val();
    var results = window.idx.search(query);
    var $searchResults = $("#results-container");

    window.data.then(function(loadedData) {

      if (results.length) {
        $searchResults.empty();

        results.forEach(function(result) {
          var item = loadedData[result.ref];
          var appendString = '<li><a href="'+item.url.trim()+'" class="search-result-link">'+item.title+'</a></li>';

          $searchResults.append(appendString);
        });
      } else if (query.length > 0) {
        $searchResults.html('<li>Your search did not match any documents.</li>');
      } else {
        $searchResults.empty();
      }
    });
  }
});
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

  if(!localStorage.getItem('sorting') && sortBy.html()){
    localStorage.setItem('sorting', sortBy.html());
  } else {
    var sorting = localStorage.getItem('sorting');
    sortBy.html(sorting);
  }

  window.idx = lunr(function () {
    this.ref('id');
    this.field('id');
    this.field('title');
    this.field('content', { boost: 20 });
    this.field('category');
  });

  if (pageVersion) {   
    window.data = $.getJSON('/acme-pages/version/'+pageVersion+'/search.json');
  } else {
    window.data = $.getJSON('/acme-pages/search.json');
  }

  window.data.then(function(loadedData){
    $.each(loadedData, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });

  if(searchTerm) {
    $("#search-input").val(searchTerm);
    window.data.then(function(){
      displaySearchResults();
    });
  }
  
  $('.sort-list__item a').on('click', function(e){
    e.preventDefault();
    localStorage.setItem('sorting', $(this).text());
    sortBy.html($(this).text());
    displaySearchResults();
  });


  //Search in header
  $("#search-container").keyup(function(event){
    event.preventDefault();
    displaySearchInHeader();
  });

  //Search page display
  function displaySearchResults() {
    var query = $("#search-input").val();
    var results = window.idx.search(query);
    var $searchResults = $("#search_results");
    var $searchAmount = $("#search_head .search-page__subtitle");


    window.data.then(function(loadedData) {

      if (results.length) {
        $searchResults.empty();
        $searchAmount.html('Displaying '+results.length+' results for "'+query);

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
          var appendString = '<a href="'+item.url.trim()+'" class="search-page__link">'+item.title+' - '+item.catalog+'</a><p>'+item.updated+' ... '+item.excerpt+'</p>';

          $searchResults.append(appendString);
        });
      } else {
        $searchAmount.html('Displaying 0 results for "'+query);
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
          var appendString = '<li class="search-result__item"><a href="'+item.url.trim()+'" class="search-result__link">'+item.title+'<span class="search-result__catalog"> - '+item.catalog+'</span></a></li>';

          $searchResults.append(appendString);
        });
      } else if (query.length > 0) {
        $searchResults.html('<li class="search-result__item">Your search did not match any documents.</li>');
      } else {
        $searchResults.empty();
      }
    });
  }
});

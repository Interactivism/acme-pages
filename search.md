---
layout: default
---

<div id="home-search" class="container">

  <form role="search" action="{{ site.baseurl }}/search/index.html" id="site_search">
    <div class="input-group" id="search-container">
      <label for="sort-by">Sort by</label>
      <select name="sort-by" id="sort-by" class="browser-default">
        <option value="relevance">Relevance</option>
        <option value="date">Date</option>
      </select>
      <input type="text" class="form-control" size="16px" name="query" placeholder="Search all pages" id="search_box">
      <span class="input-group-btn">
        <button type="submit" class="btn btn-default">
          <i class="glyphicon glyphicon-remove" style="color:#777"></i>
        </button>
      </span>
    </div>
  </form>

  <div id="search_results"></div>
</div>
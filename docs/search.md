---
layout: default
---

{% include header.html %}
{% include subheader.html %}

<div id="home-search" class="container">
  <div class="search-page">
    <div class="search-page__content">
      <div class="search-page__head" id="search_head">
        <div class="search-page__select">
          Sort by
          <select name="sort-by" id="sort-by">
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
          </select>
        </div>
        <p class="search-page__subtitle"></p>
      </div>
      <div id="search_results" class="search-page__body">
        
      </div>
    </div>
  </div>
</div>
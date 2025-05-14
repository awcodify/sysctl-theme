---
layout: default
title: Advanced Search
permalink: /search/
---

<div class="search-page">
  <h1>Advanced Search</h1>
  
  <div class="search-container">
    <input type="text" id="search-input" placeholder="Enter more specific search terms..." aria-label="Search" autocomplete="off">
    <div id="search-results" class="search-results-container"></div>
  </div>
  
  <div class="search-instructions">
    <h3>Search Tips</h3>
    <ul>
      <li>Use multiple words to narrow your search (e.g., "dark mode configuration")</li>
      <li>Search for specific technologies or coding concepts</li>
      <li>Include tag names to find related articles</li>
    </ul>
    <p>Press <kbd>Enter</kbd> to search after typing your query.</p>
  </div>
</div>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
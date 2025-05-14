/**
 * Search functionality for Sysctl Theme
 */
(function() {
  // DOM Elements
  const searchInput = document.getElementById('search-input');
  const searchInputOverlay = document.getElementById('search-input-overlay');
  const searchResults = document.getElementById('search-results');
  const searchResultsOverlay = document.getElementById('search-results-overlay');
  const searchToggleButton = document.getElementById('search-toggle-button');
  const closeSearchButton = document.getElementById('close-search');
  const searchOverlay = document.getElementById('search-overlay');
  
  // Search state
  let searchIndex = [];
  let activeSearchArea = null; // To know which search area is currently active
  
  // Get site baseurl from meta tag (added by Jekyll)
  const baseUrlMeta = document.querySelector('meta[name="baseurl"]');
  const baseUrl = baseUrlMeta ? baseUrlMeta.getAttribute('content') : '';
  
  // Fetch search index with proper baseurl
  fetch(baseUrl + '/assets/js/search-index.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      searchIndex = data;
      console.log('Search index loaded successfully:', data.length, 'items');
    })
    .catch(error => {
      console.error('Error loading search index:', error);
    });
  
  // Event listeners for toggle buttons
  if (searchToggleButton) {
    searchToggleButton.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => {
        searchInputOverlay.focus();
      }, 100);
      activeSearchArea = 'overlay';
    });
  }
  
  if (closeSearchButton) {
    closeSearchButton.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
      searchInputOverlay.value = '';
      searchResultsOverlay.innerHTML = '';
      activeSearchArea = null;
    });
  }
  
  // Close overlay with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      searchInputOverlay.value = '';
      searchResultsOverlay.innerHTML = '';
      activeSearchArea = null;
    }
  });
  
  // Handle search input
  function registerSearchHandler(input, resultsContainer) {
    if (!input) return;
    
    input.addEventListener('input', debounce(function() {
      const query = input.value.trim().toLowerCase();
      
      if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
      }
      
      performSearch(query, resultsContainer);
    }, 300));
    
    input.addEventListener('keydown', function(e) {
      // If Enter is pressed and we have results
      if (e.key === 'Enter' && resultsContainer.querySelector('.search-result')) {
        const firstResult = resultsContainer.querySelector('.search-result a');
        if (firstResult) {
          window.location.href = firstResult.getAttribute('href');
        }
      }
    });
  }
  
  // Register the search handlers for both search areas
  if (searchInput) {
    registerSearchHandler(searchInput, searchResults);
  }
  
  if (searchInputOverlay) {
    registerSearchHandler(searchInputOverlay, searchResultsOverlay);
  }
  
  // Perform search
  function performSearch(query, resultsContainer) {
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    if (searchIndex.length === 0) {
      resultsContainer.innerHTML = '<div class="search-message">Search index is loading...</div>';
      return;
    }
    
    // Filter the search index based on the query
    const results = searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const contentMatch = item.content.toLowerCase().includes(query);
      const tagsMatch = item.tags ? item.tags.some(tag => tag.toLowerCase().includes(query)) : false;
      const categoryMatch = item.categories ? item.categories.some(cat => cat.toLowerCase().includes(query)) : false;
      
      return titleMatch || contentMatch || tagsMatch || categoryMatch;
    });
    
    // Display results
    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-message">No results found</div>';
      return;
    }
    
    // Create results HTML
    const resultsHTML = results.slice(0, 10).map(result => {
      // Find the position of the query in the content
      const contentLower = result.content.toLowerCase();
      const queryPosition = contentLower.indexOf(query);
      
      // Create excerpt with context around the match
      let contextExcerpt = result.excerpt;
      if (queryPosition !== -1) {
        const start = Math.max(0, queryPosition - 50);
        const end = Math.min(result.content.length, queryPosition + query.length + 50);
        contextExcerpt = '...' + result.content.substring(start, end) + '...';
      }
      
      // Highlight the query in the excerpt
      const highlightedExcerpt = highlightQuery(contextExcerpt, query);
      
      return `
        <div class="search-result">
          <a href="${result.url}" class="search-result-link">
            <h3 class="search-result-title">${highlightQuery(result.title, query)}</h3>
            <div class="search-result-meta">
              <span class="search-result-date">${result.date}</span>
              ${result.categories ? '<span class="search-result-categories">' + result.categories.join(', ') + '</span>' : ''}
            </div>
            <div class="search-result-excerpt">${highlightedExcerpt}</div>
          </a>
        </div>
      `;
    }).join('');
    
    resultsContainer.innerHTML = resultsHTML;
  }
  
  // Highlight the query in a text string
  function highlightQuery(text, query) {
    if (!text) return '';
    
    const regex = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  
  // Escape special characters for use in a regular expression
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  // Debounce function to limit how often a function is called
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }
})();
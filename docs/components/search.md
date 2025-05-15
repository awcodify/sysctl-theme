---
layout: docs
title: Search Functionality
description: Learn how to implement and customize search in your Sysctl theme
permalink: /docs/components/search/
---

# Search Functionality

Sysctl Theme includes a powerful search feature that allows users to find content quickly across your entire site. This guide explains how the search functionality works and how to customize it.

## How Search Works

The search in Sysctl theme is built as a client-side implementation using JavaScript, which means:

- No server-side processing required
- Works with static hosting services
- Fast response times
- No external APIs or services needed

## Enabling Search

Search is enabled by default in the theme. To confirm it's enabled or to enable/disable it, check your `_config.yml`:

```yaml
features:
  search: true    # Set to false to disable search
```

## The Search Component

The search component consists of:

1. A search input field in the site header
2. A search results page
3. JavaScript code for indexing and searching content

## Adding the Search Page

To add a search page to your site:

1. Create a file named `search.md` in the root of your site with the following content:

```yaml
---
layout: page
title: Search
permalink: /search/
---

<div class="search-container">
  <div class="search-form">
    <input type="text" id="search-input" class="search-input" placeholder="Search..." aria-label="Search site content">
  </div>
  <div id="search-results" class="search-results"></div>
</div>
```

## How Content Is Indexed

The search functionality works by creating a search index when the page loads:

1. The theme generates a JSON file containing all post and page content during the build process
2. When a user loads the site, the search JavaScript loads this index
3. User searches are performed against this index
4. Results are displayed instantly as the user types

## Customizing Search

### Styling the Search Component

You can customize the appearance of the search component by adding custom CSS in your `_sass/_custom.scss` file:

```scss
// Custom search input styling
.search-input {
  border-radius: 20px;
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  width: 100%;
  font-size: 1rem;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.2);
  }
}

// Custom search results styling
.search-results {
  margin-top: 1.5rem;
  
  .search-result {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    
    &:last-child {
      border-bottom: none;
    }
    
    .search-title {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }
    
    .search-snippet {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: var(--light-text-color);
    }
    
    .search-meta {
      font-size: 0.875rem;
      color: var(--light-text-color);
    }
  }
}
```

### Changing What Gets Indexed

By default, the theme indexes:

- Post and page titles
- Content
- Tags and categories
- Excerpts and descriptions

To customize what gets indexed, you can modify the search index generation in `_includes/search.html`.

## Search Behavior

The search functionality includes several user-friendly features:

### Instant Search

Results appear as soon as the user starts typing, with no need to press Enter or click a search button.

### Highlighted Search Terms

Search terms are highlighted in the results to make it easy for users to see where matches occurred.

### Keyboard Navigation

Users can navigate through search results using keyboard shortcuts:
- Tab/Shift+Tab to move through results
- Enter to go to the selected result

### Result Ranking

Search results are ranked based on:
- Exact matches
- Title matches (weighted higher than content matches)
- Recency of posts
- Number of matches in the content

### Search Configuration Options

You can configure additional search options in your `_config.yml`:

```yaml
search:
  min_search_length: 3          # Minimum number of characters to trigger search
  placeholder: "Search..."      # Placeholder text for search input
  results_per_page: 10          # Number of results to show per page
  highlight_terms: true         # Whether to highlight search terms in results
  excerpt_length: 50            # Number of words in the excerpt
```

## Advanced: Extending Search Functionality

### Custom Tokenization

You can customize how the search tokenizes content by modifying the tokenizer function in the JavaScript:

```javascript
function tokenize(text) {
  // Convert text to lowercase and remove punctuation
  return text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2);
}
```

### Adding Fuzzy Search

To add fuzzy search (matching similar words, accounting for typos):

1. Add a fuzzy search library like Fuse.js to your project
2. Modify the search logic to use the fuzzy search library

Example implementation:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  fetch('/search-index.json')
    .then(response => response.json())
    .then(data => {
      const options = {
        keys: ['title', 'content', 'tags'], 
        threshold: 0.3,
        ignoreLocation: true
      };
      const fuse = new Fuse(data, options);
      
      const searchInput = document.getElementById('search-input');
      const searchResults = document.getElementById('search-results');
      
      searchInput.addEventListener('input', function() {
        const query = this.value;
        if (query.length < 3) {
          searchResults.innerHTML = '';
          return;
        }
        
        const results = fuse.search(query);
        displayResults(results, query);
      });
    });
});
```

## Performance Considerations

The search functionality is designed to be lightweight and performant, but for very large sites, consider:

1. Limiting the search index to recent posts
2. Excluding large pages from the search index
3. Implementing pagination for search results

## Compatibility

The search functionality works in all modern browsers and is built with progressive enhancement in mind, so it will degrade gracefully in older browsers.

## Troubleshooting

If you encounter issues with the search functionality:

- Check the browser console for JavaScript errors
- Ensure the search index JSON file is being generated correctly
- Verify that your content is using UTF-8 encoding
- Check if the search script is loading correctly

## Related Resources

- [Configuration Options](/docs/configuration/)
- [Performance Optimization](/docs/performance/)
- [Customizing Your Sysctl Theme](/docs/customization/)
/**
 * Unified taxonomy (category & tag) filtering system
 * This script handles both category and tag filtering with the same codebase
 * The only difference is in the selectors used (controlled by taxonomyType)
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any taxonomy filters present on the page
  initTaxonomyFilter('category');
  initTaxonomyFilter('tag');
  
  function initTaxonomyFilter(taxonomyType) {
    // Check if this type of taxonomy filter exists on the page
    const filterLinks = document.querySelectorAll(`.${taxonomyType}-filter a`);
    if (filterLinks.length === 0) return; // Exit if no filters of this type exist
    
    // Prevent automatic scrolling to hash on page load
    if (window.location.hash) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1);
    }
    
    // Get the hash from URL (remove the # symbol) and convert to lowercase for case-insensitive matching
    const hash = window.location.hash.substring(1).toLowerCase();
    
    // Set up selectors based on taxonomy type
    const dataAttribute = `data-${taxonomyType}`;
    const filterClass = `${taxonomyType}-filter`;
    
    // If there's a hash, filter by that taxonomy
    if (hash && hash !== 'all') {
      filterTaxonomy(taxonomyType, hash);
      
      // Update active class in navigation
      document.querySelectorAll(`.${filterClass} a`).forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute(dataAttribute).toLowerCase() === hash) {
          link.classList.add('active');
        }
      });
    } else {
      // No hash or "all" - make sure all taxonomies are shown
      filterTaxonomy(taxonomyType, 'all');
    }
    
    // Add click event listeners to taxonomy links
    filterLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior that causes scrolling
        const value = this.getAttribute(dataAttribute).toLowerCase();
        
        // Update active class
        filterLinks.forEach(function(l) {
          l.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update URL hash without causing scroll
        if (value === 'all') {
          history.replaceState(null, null, window.location.pathname + window.location.search);
        } else {
          history.replaceState(null, null, '#' + value);
        }
        
        filterTaxonomy(taxonomyType, value);
      });
    });
    
    // Listen for hash changes in the URL
    window.addEventListener('hashchange', function(e) {
      // Prevent default scroll behavior
      e.preventDefault();
      
      const newHash = window.location.hash.substring(1).toLowerCase();
      if (newHash) {
        // Update filtering based on new hash
        filterTaxonomy(taxonomyType, newHash);
        
        // Update active class in navigation
        document.querySelectorAll(`.${filterClass} a`).forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute(dataAttribute).toLowerCase() === newHash) {
            link.classList.add('active');
          }
        });
      } else {
        // No hash, show all
        filterTaxonomy(taxonomyType, 'all');
        // Set "All" as active
        document.querySelectorAll(`.${filterClass} a`).forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute(dataAttribute) === 'all') {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  function filterTaxonomy(taxonomyType, value) {
    console.log(`Filtering by ${taxonomyType}:`, value);
    
    // Set up selectors based on taxonomy type
    const dataAttribute = `data-${taxonomyType}`;
    const sectionClass = `${taxonomyType}-section`;
    
    // Always convert value to lowercase for case-insensitive comparison
    const lowerValue = value.toLowerCase();
    
    // Show all sections if 'all' is selected
    if (lowerValue === 'all') {
      document.querySelectorAll(`.${sectionClass}`).forEach(function(section) {
        section.style.display = 'block';
      });
      return;
    }
    
    // Otherwise, filter sections by taxonomy value (case-insensitive)
    document.querySelectorAll(`.${sectionClass}`).forEach(function(section) {
      if (section.getAttribute(dataAttribute).toLowerCase() === lowerValue) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
});

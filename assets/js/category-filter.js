document.addEventListener('DOMContentLoaded', function() {
  // Prevent automatic scrolling to hash on page load
  if (window.location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1);
  }
  
  // Get the hash from URL (remove the # symbol) and convert to lowercase for case-insensitive matching
  const hash = window.location.hash.substring(1).toLowerCase();
  
  // If there's a hash, filter by that category
  if (hash && hash !== 'all') {
    filterCategory(hash);
    
    // Update active class in navigation
    document.querySelectorAll('.category-filter a').forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('data-category').toLowerCase() === hash) {
        link.classList.add('active');
      }
    });
  } else {
    // No hash or "all" - make sure all categories are shown
    filterCategory('all');
  }
  
  // Add click event listeners to category links
  document.querySelectorAll('.category-filter a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior that causes scrolling
      const category = this.getAttribute('data-category').toLowerCase();
      
      // Update active class
      document.querySelectorAll('.category-filter a').forEach(function(l) {
        l.classList.remove('active');
      });
      this.classList.add('active');
      
      // Update URL hash without causing scroll
      if (category === 'all') {
        history.replaceState(null, null, ' ');
      } else {
        history.replaceState(null, null, '#' + category);
      }
      
      filterCategory(category);
    });
  });
  
  // Listen for hash changes in the URL
  window.addEventListener('hashchange', function(e) {
    // Prevent default scroll behavior
    e.preventDefault();
    
    const newHash = window.location.hash.substring(1).toLowerCase();
    if (newHash) {
      // Update filtering based on new hash
      filterCategory(newHash);
      
      // Update active class in navigation
      document.querySelectorAll('.category-filter a').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('data-category').toLowerCase() === newHash) {
          link.classList.add('active');
        }
      });
    } else {
      // No hash, show all categories
      filterCategory('all');
      // Set "All Categories" as active
      document.querySelectorAll('.category-filter a').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === 'all') {
          link.classList.add('active');
        }
      });
    }
  });
  
  function filterCategory(category) {
    console.log('Filtering by category:', category);
    
    // Always convert category to lowercase for case-insensitive comparison
    const lowerCategory = category.toLowerCase();
    
    // Show all sections if 'all' is selected
    if (lowerCategory === 'all') {
      document.querySelectorAll('.category-section').forEach(function(section) {
        section.style.display = 'block';
      });
      return;
    }
    
    // Otherwise, filter sections by category (case-insensitive)
    document.querySelectorAll('.category-section').forEach(function(section) {
      if (section.getAttribute('data-category').toLowerCase() === lowerCategory) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
});

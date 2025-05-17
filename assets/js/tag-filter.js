document.addEventListener('DOMContentLoaded', function() {
  // Prevent automatic scrolling to hash on page load
  if (window.location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1);
  }
  
  // Get the hash from URL (remove the # symbol) and convert to lowercase for case-insensitive matching
  const hash = window.location.hash.substring(1).toLowerCase();
  
  // If there's a hash, filter by that tag
  if (hash && hash !== 'all') {
    filterTag(hash);
    
    // Update active class in navigation
    document.querySelectorAll('.tag-filter a').forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('data-tag').toLowerCase() === hash) {
        link.classList.add('active');
      }
    });
  } else {
    // No hash or "all" - make sure all tags are shown
    filterTag('all');
  }
  
  // Add click event listeners to tag links
  document.querySelectorAll('.tag-filter a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior that causes scrolling
      const tag = this.getAttribute('data-tag').toLowerCase();
      
      // Update active class
      document.querySelectorAll('.tag-filter a').forEach(function(l) {
        l.classList.remove('active');
      });
      this.classList.add('active');
      
      // Update URL hash without causing scroll
      if (tag === 'all') {
        history.replaceState(null, null, ' ');
      } else {
        history.replaceState(null, null, '#' + tag);
      }
      
      filterTag(tag);
    });
  });
  
  // Listen for hash changes in the URL
  window.addEventListener('hashchange', function(e) {
    // Prevent default scroll behavior
    e.preventDefault();
    
    const newHash = window.location.hash.substring(1).toLowerCase();
    if (newHash) {
      // Update filtering based on new hash
      filterTag(newHash);
      
      // Update active class in navigation
      document.querySelectorAll('.tag-filter a').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('data-tag').toLowerCase() === newHash) {
          link.classList.add('active');
        }
      });
    } else {
      // No hash, show all tags
      filterTag('all');
      // Set "All Tags" as active
      document.querySelectorAll('.tag-filter a').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('data-tag') === 'all') {
          link.classList.add('active');
        }
      });
    }
  });
  
  function filterTag(tag) {
    console.log('Filtering by tag:', tag);
    
    // Always convert tag to lowercase for case-insensitive comparison
    const lowerTag = tag.toLowerCase();
    
    // Show all sections if 'all' is selected
    if (lowerTag === 'all') {
      document.querySelectorAll('.tag-section').forEach(function(section) {
        section.style.display = 'block';
      });
      return;
    }
    
    // Otherwise, filter sections by tag (case-insensitive)
    document.querySelectorAll('.tag-section').forEach(function(section) {
      if (section.getAttribute('data-tag').toLowerCase() === lowerTag) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
});

/**
 * Main JavaScript file for the Sysctl Theme
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize dark mode
  initDarkMode();
  
  // Initialize table of contents
  initTableOfContents();
  
  // Initialize code copy buttons
  initCodeCopy();
  
  // Initialize mobile navigation
  initMobileNav();
});

/**
 * Dark Mode Functionality
 */
function initDarkMode() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;
  
  themeToggle.addEventListener('click', function() {
    const html = document.documentElement;
    
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
}

/**
 * Table of Contents Functionality
 */
function initTableOfContents() {
  // Handle static TOC for mobile
  const staticTocContainer = document.querySelector('.table-of-contents');
  if (staticTocContainer) {
    // Make TOC collapsible on mobile
    if (window.innerWidth < 600) { // $on-palm value
      const tocHeading = staticTocContainer.querySelector('h2');
      const tocContent = document.createElement('div');
      tocContent.className = 'toc-content';
      
      // Move all elements after the heading into the content div
      let nextSibling = tocHeading.nextElementSibling;
      while (nextSibling) {
        const currentSibling = nextSibling;
        nextSibling = nextSibling.nextElementSibling;
        tocContent.appendChild(currentSibling);
      }
      
      staticTocContainer.appendChild(tocContent);
      
      // Add click event to toggle
      tocHeading.addEventListener('click', function() {
        tocHeading.classList.toggle('active');
        tocContent.classList.toggle('expanded');
      });
    }
  }
  
  // Handle floating TOC
  const floatingToc = document.querySelector('.floating-toc');
  if (floatingToc) {
    // Add scroll spy functionality
    const headings = document.querySelectorAll('.post-content h2, .post-content h3, .post-content h4');
    const tocLinks = document.querySelectorAll('.floating-toc .toc a, .table-of-contents .toc a');
    
    if (headings.length && tocLinks.length) {
      // Set up Intersection Observer for headings
      const headingsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // Store entry information in a data attribute for later use
          if (entry.isIntersecting) {
            entry.target.dataset.visible = true;
          } else {
            delete entry.target.dataset.visible;
          }
          
          // Find the heading that's currently most visible
          const visibleHeadings = Array.from(headings).filter(h => h.dataset.visible);
          
          if (visibleHeadings.length > 0) {
            // Sort visible headings by their position from the top
            const sortedHeadings = visibleHeadings.sort((a, b) => {
              return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
            });
            
            // Use the first visible heading (closest to the top)
            updateActiveTocLink(sortedHeadings[0].id);
          }
        });
      }, {
        rootMargin: '-100px 0px -80% 0px', // Adjust based on when you want to trigger the change
        threshold: 0
      });
      
      // Observe all headings
      headings.forEach(heading => {
        headingsObserver.observe(heading);
      });
      
      // Add click event to smooth scroll to sections
      tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Calculate proper scroll position with offset
            const headerOffset = 100; // Adjust this value based on your header height and desired spacing
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Smooth scroll to target with proper offset
            window.scrollTo({
              top: offsetPosition - 50,
              behavior: 'smooth'
            });
            
            // Update URL hash without jumping
            history.pushState(null, null, `#${targetId}`);
            
            // Update active TOC link
            updateActiveTocLink(targetId);
          }
        });
      });
    }
  }
  
  // Function to update active TOC link
  function updateActiveTocLink(id) {
    // Remove active class from all TOC links
    document.querySelectorAll('.floating-toc .toc a').forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to current link
    const activeLink = document.querySelector(`.floating-toc .toc a[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

/**
 * Code Copy Button Functionality
 */
function initCodeCopy() {
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(block => {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.textContent = 'Copy';
    
    // Add button to pre element's parent (usually div.highlight)
    const container = block.parentNode;
    container.style.position = 'relative';
    container.insertBefore(copyButton, container.firstChild);
    
    // Add click event
    copyButton.addEventListener('click', function() {
      const code = block.textContent;
      
      navigator.clipboard.writeText(code).then(() => {
        // Visual feedback
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Could not copy text: ', err);
        copyButton.textContent = 'Failed';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
  });
}

/**
 * Mobile Navigation Functionality
 */
function initMobileNav() {
  const navTrigger = document.querySelector('.nav-trigger');
  if (!navTrigger) return;
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isNavOpen = navTrigger.checked;
    const isClickInsideNav = event.target.closest('.site-nav');
    
    if (isNavOpen && !isClickInsideNav) {
      navTrigger.checked = false;
    }
  });
}

/**
 * Utility: Debounce function for scroll events
 */
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
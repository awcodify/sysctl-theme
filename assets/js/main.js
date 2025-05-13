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
  const tocContainer = document.querySelector('.table-of-contents');
  if (!tocContainer) return;
  
  // Make TOC sticky on desktop
  if (window.innerWidth >= 900) { // $on-laptop value
    tocContainer.classList.add('sticky');
  }
  
  // Make TOC collapsible on mobile
  if (window.innerWidth < 600) { // $on-palm value
    const tocHeading = tocContainer.querySelector('h2');
    const tocContent = document.createElement('div');
    tocContent.className = 'toc-content';
    
    // Move all elements after the heading into the content div
    let nextSibling = tocHeading.nextElementSibling;
    while (nextSibling) {
      const currentSibling = nextSibling;
      nextSibling = nextSibling.nextElementSibling;
      tocContent.appendChild(currentSibling);
    }
    
    tocContainer.appendChild(tocContent);
    
    // Add click event to toggle
    tocHeading.addEventListener('click', function() {
      tocHeading.classList.toggle('active');
      tocContent.classList.toggle('expanded');
    });
  }
  
  // Highlight current section in TOC as user scrolls
  const headings = document.querySelectorAll('.post-content h2, .post-content h3');
  const tocLinks = document.querySelectorAll('.toc a');
  
  if (headings.length && tocLinks.length) {
    window.addEventListener('scroll', debounce(highlightToc, 100));
  }
  
  function highlightToc() {
    // Find the heading that's currently at the top of the viewport
    let currentHeading;
    
    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 100) { // Some offset from the top
        currentHeading = heading;
      }
    });
    
    if (currentHeading) {
      const id = currentHeading.id;
      
      // Remove active class from all TOC entries
      document.querySelectorAll('.toc-entry').forEach(entry => {
        entry.classList.remove('active');
      });
      
      // Add active class to current entry
      const activeLink = document.querySelector(`.toc a[href="#${id}"]`);
      if (activeLink) {
        activeLink.closest('.toc-entry').classList.add('active');
      }
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
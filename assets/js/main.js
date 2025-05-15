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
  
  // Get configuration from data attributes
  const html = document.documentElement;
  const darkModeEnabled = html.getAttribute('data-dark-mode-enabled') === 'true';
  
  // If dark mode is completely disabled, ensure light mode is always applied
  if (!darkModeEnabled) {
    html.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
  
  themeToggle.addEventListener('click', function() {
    // If dark mode is completely disabled, don't allow toggling to dark mode
    if (!darkModeEnabled) {
      html.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      return;
    }
    
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
  
  // Handle all TOC containers (floating TOC, docs sidebar, and static TOC)
  const floatingToc = document.querySelector('.floating-toc');
  const docsSidebar = document.querySelector('.docs-sidebar .docs-nav');
  const tocContainers = [floatingToc, staticTocContainer, docsSidebar].filter(Boolean);
  
  if (tocContainers.length) {
    // Add scroll spy functionality for all content areas
    const headings = document.querySelectorAll('.post-content h2, .post-content h3, .post-content h4, .docs-body h2, .docs-body h3, .docs-body h4, .docs-content h2, .docs-content h3, .docs-content h4');
    
    // Get all possible TOC links across all containers
    const tocLinks = document.querySelectorAll('.floating-toc .toc a, .table-of-contents .toc a, .docs-sidebar .docs-nav a');
    
    if (headings.length && tocLinks.length) {
      // Add debug logs
      console.log(`TOC Initialization: Found ${headings.length} headings and ${tocLinks.length} TOC links`);
      console.log('TOC Containers:', tocContainers);
      
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
            const activeHeading = sortedHeadings[0];
            if (activeHeading && activeHeading.id) {
              updateActiveTocLink(activeHeading.id);
            }
          }
        });
      }, {
        rootMargin: '-100px 0px -80% 0px', // Adjust based on when you want to trigger the change
        threshold: 0
      });
      
      // Observe all headings
      headings.forEach(heading => {
        if (heading.id) {
          headingsObserver.observe(heading);
        } else {
          console.warn('Found heading without ID:', heading.textContent.trim());
        }
      });
      
      // Add click event to smooth scroll to sections
      tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          
          // Only handle links that refer to page anchors
          if (href && href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
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
          }
        });
      });
    }
  }
  
  // Function to update active TOC link and auto-scroll the TOC
  function updateActiveTocLink(id) {
    // Process all TOC containers
    tocContainers.forEach(container => {
      if (!container) return;
      
      let activeLink;
      
      // Handle docs sidebar differently from other TOCs
      if (container.classList.contains('docs-nav')) {
        // For docs sidebar, we need to handle the specific structure
        const allLinks = container.querySelectorAll('.docs-nav-list a');
        
        // Remove active class from all links in this container
        allLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Find the matching link in the docs sidebar
        // First, try direct href match
        activeLink = container.querySelector(`a[href="${window.location.pathname}#${id}"], a[href="#${id}"]`);
        
        // If no direct match, try partial match based on section name
        if (!activeLink) {
          // Sometimes the ID might be a transformed version of the text
          const idParts = id.split('-');
          for (const link of allLinks) {
            const linkText = link.textContent.trim().toLowerCase();
            // Check if the link text contains parts of the ID
            if (idParts.some(part => linkText.includes(part.toLowerCase()))) {
              activeLink = link;
              break;
            }
          }
        }
      } else {
        // Standard TOC (floating or static)
        const allLinks = container.querySelectorAll('.toc a');
        
        // Remove active class from all TOC links in this container
        allLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Find the active link by href
        activeLink = container.querySelector(`.toc a[href="#${id}"]`);
      }
      
      if (activeLink) {
        // Add active class to current link
        activeLink.classList.add('active');
        console.log('Activated link:', activeLink.textContent, 'in container:', container.className);
        
        // Find the scrollable container for this TOC
        let tocElement;
        if (container.classList.contains('docs-nav')) {
          tocElement = container.closest('.docs-sidebar');
        } else {
          tocElement = container.closest('.table-of-contents, .floating-toc');
        }
        
        // Auto-scroll the TOC to show the active link
        if (tocElement && tocElement.scrollHeight > tocElement.clientHeight) {
          console.log('Autoscrolling container:', tocElement.className);
          
          // Calculate the position of the active link relative to the TOC container
          const activeLinkRect = activeLink.getBoundingClientRect();
          const tocRect = tocElement.getBoundingClientRect();
          
          // Check if the active link is outside the visible area of the TOC
          const isLinkAbove = activeLinkRect.top < tocRect.top + 40; // Add padding for better visibility
          const isLinkBelow = activeLinkRect.bottom > tocRect.bottom - 40; // Add padding for better visibility
          
          if (isLinkAbove || isLinkBelow) {
            console.log('Link is outside visible area, scrolling TOC');
            
            // Get the scroll position of the link relative to the TOC
            // This is more reliable than offsetTop in some cases
            const linkTop = activeLink.getBoundingClientRect().top - tocElement.getBoundingClientRect().top + tocElement.scrollTop;
            
            // Calculate a position that centers the active link in the TOC as much as possible
            const scrollPosition = linkTop - (tocElement.clientHeight / 2) + (activeLink.clientHeight / 2);
            
            // Scroll the TOC smoothly to show the active link
            tocElement.scrollTo({
              top: Math.max(0, scrollPosition),
              behavior: 'smooth'
            });
          }
        }
      }
    });
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
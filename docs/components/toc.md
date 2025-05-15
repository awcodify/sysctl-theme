---
layout: docs
title: Table of Contents
description: Learn how to use and customize the Table of Contents component in Sysctl Theme
permalink: /docs/components/toc/
---

# Table of Contents Component

The Table of Contents (TOC) component in Sysctl Theme automatically generates a navigable outline of your post's headings. This helps readers quickly understand your content structure and navigate to specific sections.

## How It Works

The TOC component:

1. Scans your post content for headings (H2, H3, H4, etc.)
2. Generates a nested list of links to each heading
3. Displays the TOC in a collapsible sidebar (on larger screens) or as an expandable section (on mobile devices)

## Enabling Table of Contents

The TOC is enabled by default for all posts but can be controlled globally or per-post.

### Global Configuration

To control TOC behavior globally, add this to your `_config.yml`:

```yaml
features:
  toc: true               # true to enable TOC by default, false to disable
  toc_levels: "2,3"       # Heading levels to include (default: 2,3)
  toc_title: "Contents"   # Custom title for the TOC
```

### Per-Post Configuration

To control TOC for a specific post, use front matter:

```yaml
---
layout: post
title: "My Post Title"
toc: true                 # true to enable, false to disable
toc_levels: "2,3,4"       # Override heading levels for this post
toc_title: "In This Article" # Custom title for this post's TOC
toc_sticky: true          # Make TOC stick when scrolling (default: true)
---
```

## Customizing the TOC

### Styling the TOC

The TOC component has default styling that matches the theme, but you can customize it with your own CSS:

```scss
// In your custom CSS file
.toc-container {
  // Custom styles for the TOC container
  border-radius: 8px;
  background-color: var(--light-bg-color);
}

.toc-title {
  // Custom styles for the TOC title
  font-weight: 600;
  color: var(--primary-color);
}

.toc-list {
  // Custom styles for the TOC list
  font-size: 0.9rem;
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
```

### Advanced TOC Configuration

For advanced customization, you can override the TOC component by creating your own version of `_includes/toc.html` in your site.

## TOC Behavior

By default, the TOC component has the following behavior:

- **Desktop**: Displayed as a sticky sidebar that stays visible while scrolling
- **Mobile**: Collapses into an expandable box to save space
- **Active Highlighting**: The current section is highlighted as you scroll
- **Smooth Scrolling**: Clicking a TOC link smoothly scrolls to that section

## JS-based Enhancements

The TOC includes JavaScript enhancements:

1. **Active section highlighting**: As you scroll, the current section in the TOC is highlighted
2. **Collapse/expand functionality**: On mobile, the TOC can be toggled open/closed
3. **Auto-collapse**: On mobile, the TOC automatically collapses after selection

Here's a simplified version of how the active highlighting works:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const headings = document.querySelectorAll('h2, h3, h4');
  const tocLinks = document.querySelectorAll('.toc-link');
  
  if (headings.length === 0 || tocLinks.length === 0) return;
  
  window.addEventListener('scroll', function() {
    let currentHeading = '';
    
    // Find the current heading based on scroll position
    headings.forEach(heading => {
      const top = heading.getBoundingClientRect().top;
      if (top < 100) {
        currentHeading = '#' + heading.id;
      }
    });
    
    // Highlight the current TOC item
    tocLinks.forEach(link => {
      if (link.getAttribute('href') === currentHeading) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});
```

## Accessibility Considerations

The TOC component is built with accessibility in mind:

- Proper heading structure (using appropriate H1, H2, H3, etc.)
- Keyboard navigable links 
- ARIA attributes for screen readers
- Sufficient color contrast
- Focus indicators for keyboard navigation

## Integration with Other Components

The TOC component integrates with other theme components:

- **Dark Mode**: TOC automatically adapts to dark mode
- **Responsive Design**: Adjusts layout based on screen size
- **Typography**: Inherits font styles from the theme settings

## Troubleshooting

### Missing TOC Entries

If headings don't appear in your TOC:

1. Ensure your headings have proper structure (H2 followed by H3, etc.)
2. Check that your headings don't contain complex HTML or components
3. Verify that your `toc_levels` setting includes the heading levels you're using

### Incorrect Heading IDs

If TOC links don't jump to the right location:

1. Check that your headings have valid HTML IDs
2. Avoid duplicate heading text, as this can cause duplicate IDs
3. Use custom IDs for problematic headings with special characters:

```markdown
## My Custom Heading {#custom-id}
```

## Example Image Include

To include an image in your content with the theme's image component, use the following syntax:

{% raw %}
```liquid
{% include image.html 
   src="/assets/images/example.jpg" 
   alt="Descriptive alt text" 
   caption="Optional image caption" 
   width="800" 
   height="500" 
%}
```
{% endraw %}

## Related Resources

- [Customizing Your Sysctl Theme](/docs/customization/)
- [Typography and Readability](/docs/typography/)
- [Responsive Design](/docs/responsive-design/)
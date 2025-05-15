---
layout: docs
title: Performance Optimization
description: Learn how to optimize your Arsxy Theme site for maximum speed and efficiency
permalink: /docs/performance/
---
The Arsxy Theme is designed with performance in mind, incorporating modern best practices to ensure your site loads quickly and runs efficiently. This guide explains the built-in performance optimizations and how you can further enhance your site's speed.

## Built-in Performance Features

Arsxy Theme includes several performance optimizations out of the box:

1. **Minimal CSS Framework**: Custom-built, lightweight CSS without heavy frameworks
2. **Optimized Asset Loading**: CSS and JavaScript loaded efficiently to minimize render blocking
3. **Image Optimization**: Responsive images, lazy loading, and WebP support
4. **Efficient JavaScript**: Vanilla JS with no jQuery dependency
5. **Fast Syntax Highlighting**: Optimized code highlighting using Rouge

## Performance Metrics

A default Arsxy Theme installation typically achieves:

- 90+ Google PageSpeed score on mobile and desktop
- Sub-second load times for uncached pages
- 100KB or less CSS/JS payload (unminified)
- Perfect Lighthouse performance scores on simple pages

## Optimizing Images

Images often account for the largest portion of page weight. Here's how to optimize them:

### Using the Built-in Image Component

The theme includes an optimized image component that automatically:
- Adds responsive srcset attributes
- Lazy loads images off-screen
- Maintains aspect ratio to prevent layout shifts
- Supports WebP with fallbacks

{% raw %}
```liquid
{% include image.html 
   src="/assets/images/example.jpg" 
   alt="Optimized image example" 
   width="800" 
   height="500" 
   loading="lazy" 
   class="my-custom-class" 
%}
```
{% endraw %}

### Image Optimization Workflow

For best performance:

1. **Resize images** to the maximum dimension they'll be displayed at
2. **Compress images** using tools like ImageOptim, TinyPNG, or Squoosh
3. **Convert to WebP** for modern browsers while maintaining fallbacks
4. **Provide dimensions** to prevent layout shifts during loading

## CSS Optimization

The theme's CSS is already optimized, but you can further improve it:

### Critical CSS

The theme automatically inlines critical CSS for faster initial rendering. You can extend this by identifying and adding your own critical styles.

### Minimizing CSS

While the theme's CSS is already compact, you can further reduce size:

1. Remove unused components via your `_config.yml`
2. Use the built-in minification via Sass `compressed` style
3. Consider using PurgeCSS for production builds to remove unused CSS

### Custom CSS Efficiency

When adding custom CSS:

```scss
// Efficient CSS
.my-component {
  // Use CSS variables for consistency and smaller files
  color: var(--primary-color);
  
  // Group related properties
  margin: 0 0 1rem;  // Instead of margin-bottom: 1rem;
  
  // Avoid deep nesting (no more than 3 levels deep)
  .title {
    font-size: 1.5rem;
  }
}
```

## JavaScript Optimization

The theme uses minimal, efficient JavaScript:

### Defer Non-Critical JavaScript

The theme automatically defers non-critical JavaScript. If adding custom scripts:

```html
<!-- Add defer to non-critical scripts -->
<script src="/assets/js/custom.js" defer></script>
```

### Minimizing JavaScript

To further reduce JavaScript size:

1. Use modern ES6+ syntax for concise code
2. Minify your JavaScript for production
3. Consider code splitting for larger scripts

### Using the Intersection Observer

For lazy loading or animations, use the Intersection Observer instead of scroll events:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, {
  threshold: 0.1 // 10% visibility triggers the callback
});

document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});
```

## Font Optimization

Typography is important but can impact performance:

### System Font Stack

The theme uses a system font stack by default, avoiding web font loading delays:

```css
--font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

### Using Web Fonts Efficiently

If you do need web fonts:

1. Host fonts locally instead of using external services
2. Use `font-display: swap` to prevent blocking render
3. Subset fonts to include only needed characters
4. Prefer variable fonts for multiple weights

Example of efficient web font usage:

```html
<link rel="preload" href="/assets/fonts/custom-font.woff2" as="font" type="font/woff2" crossorigin>
<style>
@font-face {
  font-family: 'Custom Font';
  src: url('/assets/fonts/custom-font.woff2') format('woff2');
  font-weight: 400 700; /* Variable font weight range */
  font-display: swap;
}
</style>
```

## Caching and Headers

While most caching is configured at the server level, you can prepare your site for optimal caching:

### Asset Fingerprinting

The theme supports the Jekyll Assets plugin for fingerprinting (adding a hash to filenames for cache busting).

### Recommended Cache Headers

When deploying, configure your server with these recommended cache settings:

```
# HTML documents - short cache
Cache-Control: public, max-age=0, must-revalidate

# CSS, JS, and media - long cache with fingerprinting
Cache-Control: public, max-age=31536000, immutable

# Web fonts - long cache
Cache-Control: public, max-age=31536000, immutable
```

## Advanced Performance Techniques

### Static Site Generation

Jekyll already generates static HTML, providing excellent performance benefits.

### Content Delivery Network (CDN)

For global audiences, consider using a CDN like Cloudflare, Fastly, or Amazon CloudFront.

### Implementing Service Workers

For advanced caching and offline capabilities, you can add a service worker:

1. Create a `service-worker.js` file
2. Register it in your main JavaScript file
3. Configure caching strategies for different asset types

Basic service worker registration:

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service worker registered:', registration);
      })
      .catch(error => {
        console.log('Service worker registration failed:', error);
      });
  });
}
```

## Performance Monitoring

Regularly test your site's performance using:

1. Google PageSpeed Insights
2. Lighthouse in Chrome DevTools
3. WebPageTest for detailed analysis
4. Core Web Vitals measurement

## Performance Checklist

Use this checklist to maintain optimal performance:

- [ ] Optimize all images (resize, compress, use WebP)
- [ ] Minimize custom CSS and JavaScript
- [ ] Use the built-in lazy loading for images
- [ ] Defer non-critical JavaScript
- [ ] Consider locally hosting web fonts if used
- [ ] Implement appropriate caching headers
- [ ] Regularly test performance with Lighthouse

## Troubleshooting Common Performance Issues

### Slow Initial Load

- Check for render-blocking resources
- Ensure CSS is minimized and critical CSS is inlined
- Verify images are properly sized and compressed

### Layout Shifts (CLS)

- Always specify image dimensions
- Avoid dynamically injected content that changes layout
- Use content-visibility for off-screen content

### Slow Interaction Times (FID)

- Minimize main thread work in JavaScript
- Break up long tasks into smaller ones
- Defer non-essential JavaScript

## Related Resources

- [Image Optimization](/docs/components/featured-images/)
- [Responsive Design](/docs/responsive-design/)
- [Customizing Your Arsxy Theme](/docs/customization/)
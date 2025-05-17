---
layout: docs
title: Performance Optimization
description: Learn how to optimize your Arsxy Theme site for maximum speed and efficiency
permalink: /docs/performance/
---
The Arsxy Theme is designed with performance in mind, incorporating modern best practices to ensure your site loads quickly and runs efficiently. This guide explains the built-in performance optimizations and how you can further enhance your site's speed.

## Recent Performance Improvements

The theme has been optimized to achieve high scores on Google PageSpeed Insights with the following improvements:

1. **CSS Loading Optimization**:
   - Split CSS into critical (main.css) and non-critical (extended.css) files
   - Non-critical CSS loaded asynchronously to prevent render blocking
   - Added loadCSS polyfill for browser compatibility

2. **Google Fonts Optimization**:
   - Added preconnect for faster DNS resolution
   - Implemented non-blocking loading with media="print" technique
   - Fixed duplicate `&display=swap` parameter

3. **Enhanced Caching**:
   - Added Cache-Control meta tag for browsers
   - Optimized SASS compression through _config.yml
   - Leverage GitHub Pages' built-in caching mechanisms

4. **Image Optimization**:
   - Implemented WebP conversion for images
   - Added width/height attributes to prevent layout shifts (CLS)
   - Added aspect-ratio CSS to maintain image proportions
   - Used appropriate loading="lazy" and loading="eager" attributes

5. **Layout Shift Prevention**:
   - Fixed search overlay animations to prevent CLS
   - Added will-change hints for smoother animations
   - Reserved space for dynamic content like the search overlay

6. **Resource Hints**:
   - Added preload for critical resources (hero images, JS)
   - Used preconnect for external resources like Google Fonts

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
   url="example.jpg" 
   alt="Optimized image example" 
   width="800" 
   height="500" 
   loading="lazy" 
   class="my-custom-class" 
%}
```
{% endraw %}

### Image Optimization Script

The theme includes a powerful image optimization script at `scripts/convert-image.sh`:

```bash
# Run this script to optimize all images in your assets/images directory
bash scripts/convert-image.sh
```

The script automatically:
- Resizes large images to a maximum width (configurable)
- Compresses images to reduce file size
- Converts to WebP format with fallbacks
- Preserves image quality where needed

### Best Practices for Images

For best performance:

1. **Provide dimensions**: Always specify width and height attributes
2. **Proper loading**: Use `loading="eager"` for above-the-fold images and `loading="lazy"` for others
3. **Image format**: Use WebP where possible (the conversion script handles this)
4. **Aspect ratio**: Maintain consistent aspect ratios to prevent layout shifts

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

### Browser Caching with HTML Meta Tags

The theme adds browser caching hints via HTML meta tags, which can provide modest caching benefits:

```html
<meta http-equiv="Cache-Control" content="max-age=86400, public">
```

This helps browsers know they can cache the page for 24 hours.

### Recommended Cache Headers

When deploying to your own server, configure it with these recommended cache settings:

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
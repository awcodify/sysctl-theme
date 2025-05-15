---
layout: post
title: "Customizing Your Sysctl Theme"
description: "Learn how to personalize and extend your Sysctl Jekyll theme with custom styles, layouts, and features"
categories: Tutorial
tags: jekyll customization theme-development
author: Awcodify
---

This guide will help you customize your Sysctl theme installation to match your personal or brand identity. Sysctl is designed to be flexible and easy to modify, even if you're not an experienced developer.

<!--more-->

## Getting Started with Customization

Sysctl theme is built with simplicity and flexibility in mind. You can customize nearly every aspect of the theme without touching the core files, making it easier to update in the future.

## Basic Configuration Options

The first place to start customizing is the `_config.yml` file. Here are some key settings you can change:

```yaml
# Site settings
title: Your Site Title
description: Your site description for SEO and social sharing
author: Your Name

# Theme settings
theme_color: "#3273dc"  # Primary color
accent_color: "#ff4081" # Accent color for highlights
dark_mode_default: false # Start in light or dark mode
```

## Changing Colors and Typography

Sysctl uses a clean, modular SCSS structure that makes it easy to change the visual appearance.

### Color Schemes

To create a custom color scheme, modify the color variables in `_sass/_variables.scss`:

```scss
// Primary colors
$primary-color: #3273dc;
$secondary-color: #5e35b1;
$accent-color: #ff4081;

// Background colors
$background-color: #ffffff;
$light-gray: #f8f9fa;
$dark-gray: #6c757d;
```

### Typography

You can also customize the typography by changing the font family, sizes, and weights:

```scss
// Typography
$base-font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
$heading-font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
$code-font-family: "Fira Code", "SFMono-Regular", Consolas, monospace;

// Font sizes
$base-font-size: 1rem;
$large-font-size: 1.25rem;
$small-font-size: 0.875rem;
$smaller-font-size: 0.75rem;
```

## Adding Custom Layouts

Sysctl comes with several layouts out of the box, but you might want to create custom layouts for specific content types.

To create a custom layout:

1. Create a new file in the `_layouts` directory (e.g., `portfolio.html`)
2. Start with the appropriate base layout
3. Add your custom HTML structure

Here's an example of a custom portfolio layout:

```html
---
layout: default
---
<div class="portfolio">
  <h1 class="page-title">{{ page.title }}</h1>
  
  {% if page.description %}
  <p class="page-description">{{ page.description }}</p>
  {% endif %}
  
  <div class="portfolio-grid">
    {% for item in page.portfolio_items %}
    <div class="portfolio-item">
      <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <a href="{{ item.link }}" class="button">View Project</a>
    </div>
    {% endfor %}
  </div>
</div>
```

## Adding Custom Styles

To add custom styles without modifying the core theme files:

1. Create a new file in the `_sass/components` directory (e.g., `_custom.scss`)
2. Import it in `assets/css/main.scss`
3. Add your custom styles

```scss
// Custom component styles
.featured-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, $primary-color, $secondary-color);
  color: white;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1.5rem;
    backdrop-filter: blur(5px);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
}
```

## Enhancing Dark Mode

Sysctl comes with a built-in dark mode. You can customize the dark mode colors in `_sass/_dark-mode.scss`:

```scss
// Dark mode colors
$dark-background: #121212;
$dark-surface: #1e1e1e;
$dark-text-color: #e0e0e0;
$dark-border-color: #333333;
$dark-gray-light: #2a2a2a;
$dark-code-background: #2d2d2d;
```

## Adding Custom JavaScript

To add custom JavaScript functionality:

1. Create your script in `assets/js/` directory
2. Include it in your layout or in `_includes/footer.html`

```javascript
// Example custom script for animated counters
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // ms
    const increment = target / (duration / 16); // 60fps
    
    let current = 0;
    const updateCounter = () => {
      current += increment;
      
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
});
```

## Creating Custom Shortcodes

Jekyll allows you to create custom shortcodes (or includes) for reusable content blocks:

1. Create a new file in the `_includes` directory (e.g., `alert.html`)
2. Design your shortcode with parameters

```html
<!-- _includes/alert.html -->
<div class="alert alert-{% raw %}{{ include.type | default: 'info' }}{% endraw %}">
  <div class="alert-icon">
    {% raw %}{% if include.type == 'warning' %}
      ⚠️
    {% elsif include.type == 'danger' %}
      🚫
    {% elsif include.type == 'success' %}
      ✅
    {% else %}
      ℹ️
    {% endif %}{% endraw %}
  </div>
  <div class="alert-content">
    {% raw %}{{ include.content }}{% endraw %}
  </div>
</div>
```

Use it in your posts like this:

```markdown
{% raw %}{% include alert.html type="warning" content="This is a warning message that you should pay attention to." %}{% endraw %}
```

## Optimizing for SEO

Sysctl is built with SEO in mind, but you can further optimize it:

1. Edit the `<head>` section in `_includes/head.html`
2. Add structured data for your content
3. Customize OpenGraph and Twitter card meta tags

```html
<!-- Example of enhanced SEO meta tags -->
<meta name="description" content="{% if page.description %}{{ page.description }}{% else %}{{ site.description }}{% endif %}">

<!-- Open Graph -->
<meta property="og:title" content="{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}">
<meta property="og:description" content="{% if page.description %}{{ page.description }}{% else %}{{ site.description }}{% endif %}">
<meta property="og:url" content="{{ page.url | absolute_url }}">
<meta property="og:type" content="{% if page.layout == 'post' %}article{% else %}website{% endif %}">
{% if page.image %}
<meta property="og:image" content="{{ site.url }}{{ site.baseurl }}/assets/images/{{ page.image }}">
{% endif %}

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}">
<meta name="twitter:description" content="{% if page.description %}{{ page.description }}{% else %}{{ site.description }}{% endif %}">
{% if page.image %}
<meta name="twitter:image" content="{{ site.url }}{{ site.baseurl }}/assets/images/{{ page.image }}">
{% endif %}
```

## Conclusion

Sysctl theme is designed to be your starting point, not your limitation. With these customization techniques, you can transform the theme to match your unique style and requirements while maintaining all the performance and SEO benefits built into the core.

Whether you're building a personal blog, a documentation site, or a portfolio, these customization options give you the flexibility to create something truly unique without having to start from scratch.
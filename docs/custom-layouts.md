---
layout: docs
title: Creating Custom Layouts
description: Learn how to create and customize layouts for your Sysctl Theme site
permalink: /docs/custom-layouts/
---

# Creating Custom Layouts

While Sysctl Theme comes with several pre-designed layouts, you may want to create your own custom layouts for specific content types or page designs. This guide will walk you through the process of creating and implementing custom layouts.

## Understanding Jekyll Layouts

Jekyll layouts are templates that wrap around your content. They allow you to have a consistent look and feel across your site without duplicating code in each page.

## Creating a New Layout

1. **Create a layout file**: Create a new HTML file in the `_layouts` directory of your project:

```
_layouts/
  ├── default.html
  ├── post.html
  ├── docs.html
  └── my-custom-layout.html  # Your new layout
```

2. **Define the layout structure**: Start with the basic structure, typically extending an existing layout:

```html
---
layout: default
---

<div class="custom-container">
  <header class="custom-header">
    <h1>{{ page.title }}</h1>
    {% if page.subtitle %}
      <p class="subtitle">{{ page.subtitle }}</p>
    {% endif %}
  </header>
  
  <div class="custom-content">
    {{ content }}
  </div>
  
  <aside class="custom-sidebar">
    <!-- Sidebar content -->
  </aside>
</div>
```

## Using Includes for Modular Layouts

For more flexibility, use Jekyll's include system to create modular components:

```html
{% raw %}
---
layout: default
---

<div class="custom-container">
  {% include custom-header.html %}
  
  <div class="main-content">
    {{ content }}
  </div>
  
  {% if page.sidebar %}
    {% include custom-sidebar.html %}
  {% endif %}
</div>
{% endraw %}
```

Then create the corresponding include files in the `_includes` directory.

## Styling Your Custom Layout

Add custom styles for your layout in a dedicated SCSS file:

1. Create a new file in `_sass/components/_custom-layout.scss`
2. Add your styles:

```scss
.custom-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  .custom-header {
    grid-column: 1 / -1;
  }
  
  .custom-content {
    // Content styles
  }
  
  .custom-sidebar {
    // Sidebar styles
  }
}

// Responsive adjustments
@media (max-width: $breakpoint-md) {
  .custom-container {
    grid-template-columns: 1fr;
  }
}
```

3. Import your new SCSS file in the main stylesheet.

## Using Your Custom Layout

To use your custom layout in a page or post, specify it in the front matter:

```yaml
---
layout: my-custom-layout
title: Page with Custom Layout
subtitle: An example of using a custom layout
sidebar: true
---

Your page content goes here.
```

## Extending Existing Layouts

Instead of creating a layout from scratch, you can extend an existing one:

1. Create a layout that uses another layout as its base
2. Add your custom elements
3. Use conditional logic to control what appears

For example, a specialized post layout:

```html
{% raw %}
---
layout: post
---

{% if page.featured %}
  <div class="featured-banner">
    <span>Featured Post</span>
  </div>
{% endif %}

{{ content }}

{% if page.resources %}
  <div class="resources-section">
    <h3>Additional Resources</h3>
    <ul>
      {% for resource in page.resources %}
        <li><a href="{{ resource.url }}">{{ resource.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
{% endif %}
{% endraw %}
```

## Best Practices

1. **Keep layouts DRY**: Use includes and conditionals to avoid code duplication
2. **Consider mobile first**: Design your layouts to work well on all device sizes
3. **Use semantic HTML**: Ensure your layout structure is accessible and SEO-friendly
4. **Document front matter variables**: If your layout requires specific variables, document them for future reference
5. **Test thoroughly**: Check how your layout renders with various content types and lengths
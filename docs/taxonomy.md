---
layout: docs
title: Tags and Categories
description: Learn how to use and customize tags and categories in Arsxy Theme
permalink: /docs/taxonomy/
---

# Tags and Categories

The Arsxy theme provides a comprehensive taxonomy system with tags and categories to help organize your content and improve navigation for your readers. This guide explains how to use these features effectively and customize them to your needs.

## Overview

Taxonomies in Arsxy theme serve two primary purposes:

1. **Content Organization**: Grouping related posts together
2. **Navigation Enhancement**: Helping readers discover related content

The theme supports two types of taxonomies:

1. **Categories**: Primary content divisions displayed as a hierarchical list
2. **Tags**: Secondary content descriptors for more specific classification

## Categories

Categories are designed for broad content classification. They work well for organizing content into major topics or sections.

### Features

- Hierarchical organization
- Post count display
- Clean, minimal design
- Sidebar display on the homepage and posts

### Implementation

Categories are displayed in two key locations:

1. **Homepage Sidebar**: Shows all categories with post counts
2. **Categories Page**: Displays all categories with their associated posts

Example of categories in the sidebar:

```html
<div class="sidebar-widget categories-widget">
  <h3 class="widget-title">Categories</h3>
  <ul class="category-list">
    {% assign categories = site.categories | sort %}
    {% for category in categories %}
      <li>
        <a href="{{ '/categories/#' | append: category[0] | downcase | relative_url }}">
          {{ category[0] }} <span>({{ category[1].size }})</span>
        </a>
      </li>
    {% endfor %}
  </ul>
</div>
```

## Tags

Tags provide a more granular way to organize content. They are ideal for identifying specific topics, techniques, or keywords within broader categories.

### Features

- Simple link display
- Easy navigation to related content
- Flexible tagging system
- Displays in post metadata and dedicated tags page

### Implementation

Tags are displayed in several locations:

1. **Post Metadata**: Shows tags associated with the current post
2. **Homepage Sidebar**: Displays common tags as links
3. **Tags Page**: Lists all tags with their associated posts

Example of tags in the sidebar:

```html
<div class="sidebar-widget tags-widget">
  <h3 class="widget-title">Tags</h3>
  <div class="sidebar-tags">
    {% assign tags = site.tags | sort %}
    {% for tag in tags limit:15 %}
      <a href="{{ '/tags/#' | append: tag[0] | downcase | relative_url }}" class="sidebar-tag">
        {{ tag[0] }}
      </a>
    {% endfor %}
    {% if site.tags.size > 15 %}
      <a href="{{ '/tags/' | relative_url }}" class="view-all-tags">View all</a>
    {% endif %}
  </div>
</div>
```

## Adding Tags and Categories to Posts

To add tags and categories to your posts, include them in the front matter:

```yaml
---
layout: post
title: "Your Post Title"
categories: [Tutorials]
tags: [jekyll, markdown, blogging]
---
```

For a single category or tag, you can use a simpler syntax:

```yaml
---
layout: post
title: "Your Post Title"
category: Tutorials
tags: jekyll
---
```

## Taxonomy Pages

Arsxy theme includes dedicated pages for both tags and categories.

### Categories Page

The categories page (`/categories/`) lists all categories and their associated posts. Each category has its own section with posts sorted by date.

To create a categories page:

1. Create a file named `categories.md` in your site's root directory
2. Add the following front matter:

```yaml
---
layout: categories
title: Categories
permalink: /categories/
---
```

### Tags Page

The tags page (`/tags/`) lists all tags and their associated posts. Each tag has its own section with posts sorted by date.

To create a tags page:

1. Create a file named `tags.md` in your site's root directory
2. Add the following front matter:

```yaml
---
layout: tags
title: Tags
permalink: /tags/
---
```

## Customization

### Modifying the Categories Display

You can customize the categories display by editing:

1. **Categories Widget**: Edit `_layouts/home.html` to modify the sidebar display
2. **Categories Page Layout**: Edit `_layouts/categories.html` to change the categories page

### Modifying the Tags Display

You can customize the tags display by editing:

1. **Tags Widget**: Edit `_layouts/home.html` to modify how tags appear in the sidebar
2. **Tags Page Layout**: Edit `_layouts/tags.html` to change the tags page layout
3. **Post Tags**: Edit `_layouts/post.html` to modify how tags appear in posts

### CSS Styling

Both tags and categories use CSS classes that you can customize in your styles:

- `.category-list` and `.sidebar-tags` for the sidebar widgets
- `.category-section` and `.tag-section` for the taxonomy pages
- `.post-categories` and `.post-tags` for display within posts

## Dark Mode Compatibility

Both tags and categories are fully compatible with the theme's dark mode. The styles automatically adjust when dark mode is enabled through CSS variables.

## Best Practices

1. **Use consistent naming**: Establish a consistent approach to taxonomy naming
2. **Limit proliferation**: Avoid creating too many similar categories or tags
3. **Choose appropriate categories**: Use categories for major site sections
4. **Use specific tags**: Create focused tags that help with content discovery
5. **Consider SEO**: Tags and categories appear in URLs and can affect search engine ranking

## Related Resources

- [Configuration Options](/docs/configuration/)
- [Customization Guide](/docs/customization/)
- [Layout Options](/docs/layouts/)

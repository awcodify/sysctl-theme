---
layout: docs
title: Navigation Component
description: Learn how to customize the navigation menus in Arsxy Theme
permalink: /docs/components/navigation/
---
The Arsxy Theme includes a flexible navigation system that adapts to different screen sizes and provides a seamless user experience across your site.

## Main Navigation

The main navigation appears in the header of your site and provides access to your primary pages.

### Configuration

The main navigation is configured in your `_config.yml` file:

```yaml
# Navigation
navigation:
  main:
    - title: Home
      url: /
    - title: About
      url: /about/
    - title: Articles
      url: /articles/
    - title: Documentation
      url: /docs/
    - title: Categories
      url: /categories/
    - title: Tags
      url: /tags/
    - title: Contact
      url: /contact/
```

### Adding Dropdown Menus

For more complex navigation structures, you can add dropdown menus:

```yaml
navigation:
  main:
    - title: Documentation
      url: /docs/
      children:
        - title: Installation
          url: /docs/installation/
        - title: Quick Start
          url: /docs/quick-start/
        - title: Configuration
          url: /docs/configuration/
    # Other menu items...
```

## Footer Navigation

The footer navigation is typically used for secondary links like legal pages, social media links, etc.

### Configuration

Configure your footer navigation in `_config.yml`:

```yaml
navigation:
  footer:
    - title: Privacy Policy
      url: /privacy/
    - title: Terms of Service
      url: /terms/
    - title: Sitemap
      url: /sitemap.xml
```

## Social Navigation

The social navigation displays links to your social media profiles.

### Configuration

Add your social media links in `_config.yml`:

```yaml
social_links:
  twitter: your_username
  github: your_username
  linkedin: your_username
  instagram: your_username
  youtube: your_channel_id
  # Add other platforms as needed
```

## Mobile Navigation

On smaller screens, the main navigation automatically transforms into a mobile-friendly menu with a toggle button.

### Customizing Mobile Breakpoint

You can adjust when the mobile navigation appears by modifying the `$breakpoint-md` variable in `_sass/_variables.scss`:

```scss
$breakpoint-md: 768px;
```

## Documentation Sidebar Navigation

For documentation pages, a specialized sidebar navigation is available.

### Configuration

The documentation sidebar is automatically generated based on your documentation directory structure. You can customize it in `_config.yml`:

```yaml
# Documentation sidebar settings
docs_sidebar:
  auto_generate: true  # Automatically generate sidebar from /docs directory
  collapse_level: 2    # Collapse nested items below this level by default
  sections:
    - title: Getting Started
      folder: /docs/getting-started
    - title: Core Features
      folder: /docs/features
    - title: Components
      folder: /docs/components
```

## Customizing Navigation Appearance

You can customize the appearance of your navigation by modifying the appropriate SCSS files:

- `_sass/components/_header.scss` for main navigation
- `_sass/components/_footer.scss` for footer navigation
- `_sass/components/_docs.scss` for documentation sidebar

## Active Link Highlighting

The Arsxy Theme automatically highlights the active navigation item based on the current page. This is handled by the `active-link` class, which you can customize in `_sass/components/_header.scss`.

## Navigation Accessibility

The navigation components are built with accessibility in mind:

- Semantic HTML5 elements
- Proper ARIA attributes
- Keyboard navigation support
- Focus states for interactive elements

To maintain accessibility when customizing navigation, ensure you preserve these accessibility features.
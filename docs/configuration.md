---
layout: docs
title: Configuration
description: Complete configuration options for the Sysctl Jekyll theme
permalink: /docs/configuration/
---

# Configuration Options

The Sysctl Theme can be extensively customized through your site's `_config.yml` file. This page documents all available configuration options.

## Basic Site Settings

These settings control fundamental aspects of your site:

```yaml
# Site settings
title: Your Site Title              # Used in the header and SEO
name: Your Site Name                # Alternative name for branding
description: >-
  Your site description for SEO and social sharing.
baseurl: "/"                        # The subpath of your site, e.g. /blog
url: "https://yourdomain.com"       # The base hostname & protocol
```

## Theme Settings

When using the theme, specify either:

```yaml
# For remote theme installation
remote_theme: awcodify/sysctl-theme

# OR for gem-based installation
theme: sysctl-theme
```

## Navigation Menu

Configure your site's navigation menu:

```yaml
navigation:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Articles
    url: /articles
  - title: Tags
    url: /tags
  - title: Contact
    url: /contact
  - title: Documentation
    url: /docs
```

## Social Links

Add your social media accounts to display icons in the footer:

```yaml
social:
  github: yourusername
  twitter: yourusername
  linkedin: yourusername
  email: your.email@example.com
  # You can also add: facebook, instagram, mastodon, youtube, etc.
```

## Theme Features

Enable or disable specific theme features:

```yaml
# Feature toggles
features:
  dark_mode: true                   # Enable dark mode toggle
  auto_dark_mode: true              # Respect system preferences
  toc: true                         # Table of contents for posts
  reading_time: true                # Show estimated reading time
  social_sharing: true              # Show social sharing buttons
  hero_section: true                # Enable hero section on homepage
  featured_posts: true              # Show featured posts section
  related_posts: true               # Show related posts
  search: true                      # Enable search functionality
```

## Homepage Configuration

Customize your homepage layout:

```yaml
# Homepage settings
homepage:
  hero:
    title: "Welcome to My Site"     # Hero section headline
    subtitle: "A personal blog about technology and life"
    button_text: "Read Articles"    # Call-to-action button
    button_url: "/articles/"        # Button destination
    background: "/assets/images/hero-background.jpg"
  
  featured_posts:
    enabled: true
    count: 3                        # Number of featured posts to display
    title: "Featured Content"       # Section title
```

## Post Settings

Configure default settings for blog posts:

```yaml
# Default post settings (can be overridden in front matter)
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
      comments: true
      toc: true
      featured: false
      reading_time: true
      share: true
```

## SEO and Analytics

Configure SEO features and analytics:

```yaml
# SEO settings
seo:
  og_image: "/assets/images/og-default.jpg"  # Default Open Graph image
  twitter_card: summary_large_image
  twitter_username: yourusername

# Google Analytics
google_analytics: UA-XXXXXXXX-X     # Your Google Analytics tracking ID
```

## Plugin Settings

Enable Jekyll plugins:

```yaml
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate
  - jekyll-remote-theme              # Only if using remote_theme
```

## Pagination

Configure blog pagination:

```yaml
paginate: 6                         # Number of posts per page
paginate_path: "/page/:num/"        # URL path for paginated pages
```

## Advanced Settings

Additional advanced configuration options:

```yaml
# Build settings
markdown: kramdown
highlighter: rouge                  # Syntax highlighter
sass:
  style: compressed                 # CSS compression
  
# Exclude files from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
  - .sass-cache
```

## Complete Example

Here's a complete example showcasing all the configuration options:

```yaml
# Site settings
title: My Awesome Site
name: Awesome Site
description: >-
  A personal blog about technology, programming, and life.
baseurl: "/"
url: "https://example.com"

# Theme settings
remote_theme: awcodify/sysctl-theme

# Navigation menu
navigation:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Articles
    url: /articles
  - title: Tags
    url: /tags
  - title: Contact
    url: /contact
  - title: Documentation
    url: /docs

# Social links
social:
  github: username
  twitter: username
  linkedin: username
  email: your.email@example.com

# Feature toggles
features:
  dark_mode: true
  auto_dark_mode: true
  toc: true
  reading_time: true
  social_sharing: true
  hero_section: true
  featured_posts: true
  related_posts: true
  search: true

# Homepage settings
homepage:
  hero:
    title: "Welcome to My Site"
    subtitle: "A personal blog about technology and life"
    button_text: "Read Articles"
    button_url: "/articles/"
    background: "/assets/images/hero-background.jpg"
  
  featured_posts:
    enabled: true
    count: 3
    title: "Featured Content"

# Default post settings
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
      comments: true
      toc: true
      featured: false
      reading_time: true
      share: true

# SEO settings
seo:
  og_image: "/assets/images/og-default.jpg"
  twitter_card: summary_large_image
  twitter_username: username

# Google Analytics
google_analytics: UA-XXXXXXXX-X

# Plugins
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate
  - jekyll-remote-theme

# Pagination
paginate: 6
paginate_path: "/page/:num/"

# Build settings
markdown: kramdown
highlighter: rouge
sass:
  style: compressed
  
# Exclude files from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
  - .sass-cache
```
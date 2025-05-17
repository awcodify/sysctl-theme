---
layout: docs
title: Comment Systems
permalink: /docs/comments/
description: Learn how to add comments to your blog using Giscus or Disqus with the Arsxy theme.
nav_order: 12
---

# Comment Systems

Arsxy theme supports two popular comment systems for your blog posts:

1. [Giscus](https://giscus.app/) - A comments system powered by GitHub Discussions
2. [Disqus](https://disqus.com/) - A popular comment platform

Both systems are fully integrated with the theme, including dark mode support. You can enable either one (but not both simultaneously) through the configuration in your `_config.yml`.

## Setting up Giscus (Recommended)

Giscus is a modern commenting system that leverages GitHub Discussions. It's lightweight, doesn't track users, and integrates perfectly with GitHub.

### Prerequisites

1. Your repository must be **public**
2. The [Giscus app](https://github.com/apps/giscus) must be installed on your repository
3. Discussions feature must be enabled in your repository settings

### Configuration

1. Go to [https://giscus.app](https://giscus.app) to generate your configuration
2. Fill in the appropriate details for your repository
3. Choose your preferred settings (mapping, features, theme, etc.)
4. Update your `_config.yml` with the generated values:

```yaml
giscus:
  enabled: true # Set to true to enable Giscus
  repo: "username/repo-name" # Your GitHub repository
  repo_id: "R_kgDOXXXXXX" # Repository ID from giscus.app
  category: "Announcements" # The discussion category to use
  category_id: "DIC_kwDOXXXXXX" # Category ID from giscus.app
  mapping: "pathname" # How to map comments to posts
  reactions_enabled: "1" # Enable reactions
  theme: "preferred_color_scheme" # Theme will match site's dark/light mode
  emit_metadata: "0"
  input_position: "bottom" # Position of the comment box
  lang: "en" # Language for the comments interface
```

The Arsxy theme will automatically adjust the Giscus theme when visitors switch between dark and light mode.

## Setting up Disqus

Disqus is a traditional comment system that's widely used across the web.

### Configuration

1. Sign up for a [Disqus account](https://disqus.com/profile/signup/)
2. Create a new site and get your shortname
3. Update your `_config.yml`:

```yaml
disqus:
  shortname: your-disqus-shortname
```

## Important Notes

- You can enable either Giscus or Disqus, not both simultaneously.
- If both are configured, Disqus will take precedence.
- To disable comments completely, ensure both Giscus and Disqus configurations are disabled/removed.

## Styling Comments

The comment section is styled to match the rest of your theme. If you want to customize the appearance further, you can edit the `_sass/components/_comments.scss` file.

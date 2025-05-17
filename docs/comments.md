---
layout: docs
title: Comment System
permalink: /docs/comments/
description: Learn how to add comments to your blog using Giscus with the Arsxy theme.
nav_order: 12
---

# Comment System

Arsxy theme supports [Giscus](https://giscus.app/) - a modern comments system powered by GitHub Discussions. It's fully integrated with the theme, including dark mode support.

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

## Important Notes

- To disable comments completely, set `giscus.enabled` to `false` in your `_config.yml`.

## Styling Comments

The comment section is styled to match the rest of your theme. If you want to customize the appearance further, you can edit the `_sass/components/_comments.scss` file.

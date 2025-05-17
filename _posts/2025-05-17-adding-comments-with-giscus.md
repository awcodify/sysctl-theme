---
layout: post
title: "Adding Comments to Your Blog with Giscus"
description: "Learn how to easily add a GitHub Discussions-powered comment system to your Arsxy theme blog"
categories: Tutorial
tags: giscus github-discussions comments
author: Awcodify
image: comment-with-giscus.png
---

Arsxy Theme now supports Giscus, a modern comments system powered by GitHub Discussions! This tutorial will walk you through setting up Giscus on your blog.

<!--more-->

## What is Giscus?

[Giscus](https://giscus.app) is a comments system that uses GitHub Discussions. It's:

- Completely free and open source
- No tracking or ads
- No need for a separate comment database
- Powered by GitHub Discussions
- Supports markdown and GitHub authentication
- Automatically syncs comments between your site and GitHub

## Setting Up Giscus

### Step 1: Prerequisites

Before you set up Giscus, make sure:

1. Your GitHub repository is public
2. You've installed the [Giscus app](https://github.com/apps/giscus) on your repository
3. The Discussions feature is enabled in your repository settings

### Step 2: Generate Configuration

1. Go to [giscus.app](https://giscus.app)
2. Enter your repository name in the format `username/repo`
3. Choose your preferred settings:
   - Page ↔️ Discussion mapping (usually "pathname" works best)
   - Discussion category (create a category specifically for comments)
   - Features you want to enable (reactions, label, theme, etc.)

### Step 3: Update Your Configuration

In your `_config.yml` file, add the Giscus configuration:

```yaml
giscus:
  enabled: true
  repo: "username/repo-name"
  repo_id: "R_kgDOXXXXXX"
  category: "Announcements"
  category_id: "DIC_kwDOXXXXXX"
  mapping: "pathname"
  reactions_enabled: "1"
  theme: "preferred_color_scheme"
  emit_metadata: "0"
  input_position: "bottom"
  lang: "en"
```

Replace the values with those generated from the Giscus app.

### Step 4: Test Your Comments

After updating your configuration and rebuilding your site, the comments section should appear at the bottom of your posts.

## How It Works with Dark Mode

Arsxy theme automatically handles switching the Giscus theme when users toggle dark mode. This ensures the comments section always matches your site's appearance.

## Customizing the Comments Section

You can customize the appearance of the comments section by editing the `_sass/components/_comments.scss` file in your theme.

## Using Disqus Instead

If you prefer to use Disqus, Arsxy theme also supports that. Simply add your Disqus shortname to your `_config.yml`:

```yaml
disqus:
  shortname: your-disqus-shortname
```

Note that if both Giscus and Disqus are configured, Disqus will take precedence.

---

We hope you enjoy the new comments feature! Let us know what you think in the comments below (once you've set them up, of course).

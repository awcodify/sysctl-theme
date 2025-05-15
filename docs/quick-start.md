---
layout: docs
title: Quick Start Guide
description: Get started quickly with the Arsxy Jekyll theme
permalink: /docs/quick-start/
---

# Quick Start Guide

This guide will help you set up a new Jekyll site with the Arsxy theme in minutes. Follow these steps to get up and running quickly.

## Prerequisites

Before you begin, ensure you have:

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make (for Jekyll's dependencies)

If you don't have these installed, follow the [Jekyll installation guide](https://jekyllrb.com/docs/installation/).

## Step 1: Create a New Jekyll Site

Create a new Jekyll site:

```bash
# Create a new Jekyll site
jekyll new my-awesome-site

# Navigate to the new site directory
cd my-awesome-site
```

## Step 2: Add the Arsxy Theme

Open your site's `Gemfile` and replace the line that says:

```ruby
gem "minima", "~> 2.5"
```

With:

```ruby
gem "jekyll-remote-theme"
```

Then, add the following plugins to your `Gemfile` if they're not already there:

```ruby
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-remote-theme"
end
```

## Step 3: Configure Your Site

Open your `_config.yml` file and replace its contents with the following:

```yaml
# Site settings
title: My Awesome Site
name: My Awesome Site
description: >-
  A personal blog built with Jekyll and the Arsxy theme.
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com

# Theme settings
remote_theme: awcodify/arsxy-theme

# Build settings
markdown: kramdown
highlighter: rouge

# Plugins
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate
  - jekyll-remote-theme

# Navigation
navigation:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Articles
    url: /articles
  - title: Tags
    url: /tags

# Pagination
paginate: 6
paginate_path: "/page/:num/"

# Default settings
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
      toc: true
      comments: false
```

## Step 4: Install Dependencies

Run the following command to install all the dependencies:

```bash
bundle install
```

## Step 5: Create Your First Post

Create your first blog post by adding a file in the `_posts` directory. Files in this directory should be named using the format `YYYY-MM-DD-title.md`.

For example, create a file named `2025-05-15-my-first-post.md` with the following content:

```markdown
---
layout: post
title: "My First Post"
description: "This is my first post with the Arsxy theme."
categories: General
tags: jekyll sysctl
---

# Hello World!

This is my first post using the Arsxy theme. It's a beautiful, clean theme perfect for technical blogs and documentation sites.

## Features I Love

- Clean design
- Dark mode support
- Great typography
- Code highlighting

```

## Step 6: Run Your Site Locally

Start your Jekyll server:

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser to see your site with the Arsxy theme applied.

## Step 7: Customize Your Site

Now that you have your site running with the Arsxy theme, you can:

1. Update your site info in `_config.yml`
2. Create additional pages (about.md, contact.md, etc.)
3. Add more blog posts in the `_posts` directory
4. Customize the theme to match your preferences

## Next Steps

- [Explore the Configuration Options](/docs/configuration/)
- [Learn How to Customize the Theme](/docs/customization/)
- [Understand the Theme's Features](/docs/core-features/)

---

Congratulations! You now have a functional Jekyll site using the Arsxy theme. Continue exploring the documentation to learn how to make the most of this theme's features.
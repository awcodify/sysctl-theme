---
layout: docs
title: Installation Guide
description: How to install the Arsxy Jekyll theme
permalink: /docs/installation/
---
There are two ways to install the Arsxy Theme for your Jekyll site: as a remote theme (recommended) or as a regular gem-based theme.

## Installing as a Remote Theme (Recommended)

This method allows you to use the theme directly from GitHub, making it easier to stay updated with the latest version.

### 1. Add to your `_config.yml`

Add this line to your Jekyll site's `_config.yml` file:

```yaml
remote_theme: awcodify/arsxy-theme
```

### 2. Install Required Plugins

Add these plugins to your `Gemfile`:

```ruby
# In your Gemfile
group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
end
```

### 3. Install the Bundle

Run the following command to install the necessary gems:

```bash
bundle install
```

## Installing as a Gem-based Theme

For users who prefer a traditional gem-based approach:

### 1. Add to your `Gemfile`

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "arsxy-theme"
```

### 2. Add to your `_config.yml`

Add this line to your Jekyll site's `_config.yml` file:

```yaml
theme: arsxy-theme
```

### 3. Install the Bundle

Run the following command:

```bash
bundle install
```

## Verifying the Installation

After installation, start your Jekyll server:

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser to verify that the theme is working correctly.

## Troubleshooting

If you encounter any issues during installation:

- Ensure you're using Jekyll 3.10 or compatible versions
- Check that all required plugins are installed
- Make sure your `_config.yml` is formatted correctly

For more detailed help, see the [Troubleshooting](/docs/troubleshooting/) section.

## Next Steps

Once you have installed the theme, check out the [Quick Start Guide](/docs/quick-start/) to begin configuring and customizing your site.
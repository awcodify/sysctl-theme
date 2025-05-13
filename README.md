# Sysctl Theme for Jekyll

A clean, fast, and SEO-friendly Jekyll theme optimized for technical blogs and documentation sites. This theme prioritizes readability, performance, and responsive design.

![Sysctl Theme Screenshot](screenshot.png)

## Features

- **Clean & Flat Design** - Minimal, distraction-free reading experience
- **Responsive Layout** - Optimized for all devices from mobile to desktop
- **Dark Mode Support** - Automatic detection with manual toggle option
- **Code Highlighting** - Beautiful syntax highlighting with copy button
- **Table of Contents** - Automatically generated for longer articles
- **SEO Optimized** - Built-in support for meta tags and structured data
- **Performance Focused** - Optimized assets and minimal dependencies
- **Reading Time** - Automatic reading time estimation for each post
- **Multilingual Support** - Ready for content in multiple languages
- **Categories & Tags** - Organized content structure
- **Disqus Comments** - Ready to integrate with Disqus
- **Google Analytics** - Easy integration with Google Analytics
- **Social Media Integration** - Share your content on social media

## Installation

### As a remote theme (recommended)

Add this line to your Jekyll site's `_config.yml`:

```yaml
remote_theme: awcodify/sysctl-theme
```

And install the necessary plugins:

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

### As a regular theme

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "sysctl-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: sysctl-theme
```

And then execute:

```bash
$ bundle install
```

## Usage

### Configuration

Here's a sample configuration with commonly used options:

```yaml
# Site settings
name: Your Site Name
title: Your Site Title
description: >-
  Your site description for SEO and social sharing.
baseurl: "/"
url: "https://yourdomain.com"

# Theme settings
remote_theme: awcodify/sysctl-theme
# - OR if installing as a gem -
# theme: sysctl-theme

# Navigation menu
navigation:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Blog
    url: /blog
  - title: Tags
    url: /tags
  - title: Contact
    url: /contact

# Social links
social:
  github: yourusername
  twitter: yourusername
  linkedin: yourusername
  email: your.email@example.com

# Plugin settings
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate

# Content settings
excerpt_separator: <!--more-->
```

### Creating Posts

Create a new file in the `_posts` directory with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
description: "A brief description of your post for SEO and previews."
categories: Category
tags: tag1 tag2 tag3
author: Your Name
image: featured-image.jpg
---

Your introduction paragraph goes here. This will be shown in post previews.
<!--more-->

The rest of your content goes here...
```

### Creating Pages

Create a new markdown file in the root directory or in a subdirectory:

```markdown
---
layout: page
title: About
permalink: /about/
---

Content for your about page goes here...
```

### Code Blocks

Use the standard markdown code blocks with language specification:

````markdown
```javascript
const greeting = "Hello, world!";
console.log(greeting);
```
````

To add a filename to your code block, use this format:

````markdown
<div class="code-filename">example.js</div>
```javascript
const greeting = "Hello, world!";
console.log(greeting);
```
````

### Table of Contents

The table of contents is automatically generated for posts. If you want to disable it for a specific post, add `toc: false` to the front matter.

## Customization

### Colors and Typography

You can override the default colors and typography by creating a `_sass/_custom.scss` file in your site and importing it in your `assets/css/main.scss`:

```scss
---
---

// Import the theme styles
@import "variables";
@import "base";
@import "layout";
@import "typography";
@import "syntax-highlighting";
@import "components/header";
@import "components/footer";
@import "components/post";
@import "components/code";
@import "components/toc";
@import "utilities";
@import "responsive";
@import "dark-mode";

// Import your custom styles
@import "custom";
```

Then in your `_sass/_custom.scss` file, you can override any of the theme's variables:

```scss
// Override primary color
$primary-color: #007bff;

// Override fonts
$base-font-family: 'Roboto', sans-serif;
$code-font-family: 'Fira Code', monospace;
```

## License

This theme is available as open source under the terms of the [MIT License](LICENSE).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/awcodify/sysctl-theme.
---
layout: docs
title: SEO Optimization
description: Optimize your Jekyll site for search engines with Arsxy theme
permalink: /docs/seo/
---
The Arsxy theme includes built-in SEO features to help your content rank better in search engines. This guide explains how to make the most of these features.

## Built-in SEO Features

The Arsxy theme comes with several SEO optimizations out of the box:

- **Meta tags**: Automatic generation of essential meta tags
- **Open Graph protocol**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured data**: JSON-LD schema for better search results
- **XML sitemap**: Automatic sitemap generation
- **Semantic HTML5**: Proper document structure for better indexing
- **Speed optimization**: Fast-loading pages for better rankings

## Setting Up Basic SEO

### 1. Configure Site Information

In your `_config.yml`, ensure you have the following basic information:

```yaml
title: Your Site Title
description: >-
  A detailed description of your site (150-160 characters is ideal for SEO).
url: "https://yourdomain.com"
baseurl: ""  # Leave empty unless your site is in a subdirectory
```

### 2. Configure SEO Settings

Add these SEO-specific settings to your `_config.yml`:

```yaml
# SEO settings
seo:
  og_image: "/assets/images/og-default.jpg"  # Default Open Graph image (1200×630px recommended)
  twitter_card: summary_large_image  # Options: summary, summary_large_image
  twitter_username: yourusername
  facebook_publisher: yourusername  # Optional
  google_site_verification: "your-verification-code"  # Optional
```

## Optimizing Individual Posts and Pages

For individual posts and pages, you can add SEO-specific front matter:

```yaml
---
layout: post
title: "Optimized Post Title for SEO"
description: "A compelling meta description that will appear in search results and social shares."
image: "/assets/images/post-specific-image.jpg"  # Featured image
canonical_url: "https://yourdomain.com/original-post-url/"  # Use for syndicated content
noindex: false  # Set to true to exclude this page from search engines
---
```

## Best Practices for SEO with Arsxy Theme

### Titles and Headlines

- **Keep titles under 60 characters**: This ensures they display properly in search results
- **Use H1 for the main title**: Each page should have exactly one H1 tag
- **Structure headings hierarchically**: Use H2, H3, etc. in a logical order
- **Include keywords naturally**: Avoid keyword stuffing

### Content Optimization

- **Write comprehensive content**: Aim for at least 300 words per page
- **Use descriptive URLs**: The theme automatically creates clean URLs
- **Optimize images**: Use descriptive filenames and always include alt text
- **Internal linking**: Link to other relevant content on your site
- **External links**: Use `rel="noopener"` for external links (the theme does this automatically)

### Images for SEO

The theme optimizes images for SEO by:

1. Automatically adding appropriate alt text based on image captions
2. Lazy-loading images to improve page speed
3. Adding width and height attributes to prevent layout shifts
4. Supporting WebP format with fallbacks for older browsers

Example of the built-in image include:

{% raw %}
```liquid
{% include image.html 
   src="/assets/images/example.jpg" 
   alt="Descriptive alt text" 
   caption="Optional image caption" 
   width="800" 
   height="500" 
%}
```
{% endraw %}

## Implementing Schema Markup

The Arsxy theme automatically implements basic schema.org markup. For more specific types, you can add custom schema in your page's front matter:

```yaml
---
layout: post
title: "Product Review: Awesome Tool"
schema:
  type: "Product"
  name: "Awesome Tool Pro"
  description: "A comprehensive review of the Awesome Tool Pro"
  brand: "Awesome Company"
  offers:
    price: "99.99"
    currency: "USD"
  rating:
    value: "4.8"
    count: "52"
---
```

## Monitoring Your SEO Performance

While the Arsxy theme optimizes your site for search engines, it's important to monitor your performance:

1. Set up [Google Search Console](https://search.google.com/search-console/about) for your site
2. Connect [Google Analytics](https://analytics.google.com/) by adding your tracking ID to `_config.yml`
3. Regularly check for crawl errors, indexing issues, and performance metrics

## SEO Tools Integration

The theme is compatible with the following SEO tools and services:

- Google Analytics
- Google Tag Manager
- Fathom Analytics
- Plausible Analytics
- Microsoft Clarity

To integrate one of these tools, add the appropriate configuration to your `_config.yml`:

```yaml
# Analytics
google_analytics: "UA-XXXXXXXX-X"  # Universal Analytics
gtag: "G-XXXXXXXXXX"  # Google Analytics 4
google_tag_manager: "GTM-XXXXXXX"  # Google Tag Manager
fathom_analytics: "ABCDEFGH"  # Fathom Analytics
plausible_analytics: "yourdomain.com"  # Plausible Analytics
microsoft_clarity: "abcdef1234"  # Microsoft Clarity
```

## Related Resources

- [Configuration Options](/docs/configuration/)
- [Customizing Your Arsxy Theme](/docs/customization/)
- [Performance Optimization](/docs/performance/)
---
layout: docs
title: Social Sharing Component
description: Learn how to use and customize social sharing buttons in Arsxy Theme
permalink: /docs/components/social-sharing/
---
The Social Sharing component in Arsxy Theme makes it easy for readers to share your content on various social media platforms. This helps extend the reach of your posts and increase engagement with your content.

## Default Configuration

Social sharing is enabled by default for all posts. The following platforms are included in the default configuration:

- Twitter/X
- Facebook
- LinkedIn
- Reddit
- Hacker News
- Email

## Enabling/Disabling Social Sharing

You can control social sharing at different levels:

### Site-wide Configuration

To configure social sharing site-wide, add the following to your `_config.yml`:

```yaml
social_sharing:
  enabled: true
  platforms:
    - twitter
    - facebook
    - linkedin
    - reddit
    - hacker_news
    - email
  twitter_username: your_username # Used for attribution in Twitter shares
  facebook_app_id: your_app_id    # Optional, for enhanced Facebook sharing
```

### Per-post Configuration

To control social sharing for specific posts, use front matter:

```yaml
---
title: "My Blog Post"
social_sharing: false # Disable sharing for this post
---
```

Or customize which platforms to include:

```yaml
---
title: "My Blog Post"
social_sharing:
  platforms:
    - twitter
    - linkedin
    - email
---
```

## Customizing Button Appearance

The social sharing buttons can be customized by modifying the SCSS in `_sass/components/_social-sharing.scss`:

```scss
.social-sharing {
  margin: 2rem 0;
  
  .share-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    .share-button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      color: white;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: opacity 0.2s ease;
      
      &:hover {
        opacity: 0.9;
      }
      
      svg {
        width: 18px;
        height: 18px;
      }
      
      &.twitter { background-color: #1DA1F2; }
      &.facebook { background-color: #1877F2; }
      &.linkedin { background-color: #0A66C2; }
      &.reddit { background-color: #FF4500; }
      &.hacker-news { background-color: #FF6600; }
      &.email { background-color: #757575; }
    }
  }
}
```

## Button Placement Options

You can control where the social sharing buttons appear:

```yaml
social_sharing:
  position: "top-bottom" # Options: "top", "bottom", "top-bottom", "floating"
```

The "floating" option creates a fixed sidebar of sharing buttons that stays visible as the user scrolls.

## Share Count Display

Optionally display share counts alongside buttons:

```yaml
social_sharing:
  show_counts: true
```

Note: Share counts require API access for some platforms and may be subject to rate limiting.

## Custom Share Text

Customize the text that appears when content is shared:

```yaml
---
title: "My Blog Post"
social_sharing:
  custom_text: "Check out this awesome article I found!"
  hashtags: "jekyll,webdev,tutorial"
---
```

## Adding New Social Platforms

To add support for additional social platforms:

1. Add the platform to your social sharing configuration in `_config.yml`
2. Create a new icon for the platform in `_includes/social-icons/`
3. Add the share URL template in `_includes/social-sharing.html`
4. Add styling for the new platform button in `_sass/components/_social-sharing.scss`

Example implementation for a new platform:

```html
{% raw %}
{% if include.platform == "new_platform" %}
  <a href="https://newplatform.com/share?url={{ page.url | absolute_url | url_encode }}&title={{ page.title | url_encode }}" 
     class="share-button new-platform" 
     title="Share on New Platform" 
     target="_blank" 
     rel="noopener noreferrer">
    {% include social-icons/new-platform.svg %}
    <span class="button-text">New Platform</span>
  </a>
{% endif %}
{% endraw %}
```

## Tracking Social Shares

If you use Google Analytics or another analytics service, social share clicks can be tracked with event tracking:

```yaml
social_sharing:
  track_clicks: true
  tracking_category: "Social Share"
```

This adds data attributes to the share buttons that your analytics setup can use to track interactions.

## Accessibility Considerations

The social sharing component is built with accessibility in mind:

- All buttons have proper focus states
- Screen reader text is included for each button
- Sufficient color contrast for button text
- Proper hover and focus states

## Additional Tips

- Use the `page.description` or `page.excerpt` for the shared text when available
- Add Open Graph and Twitter Card meta tags to your pages for better link previews (included by default in Arsxy Theme)
- Test your sharing buttons across different platforms to ensure they work as expected
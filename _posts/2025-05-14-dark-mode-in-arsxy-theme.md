---
layout: post
title: "Dark Mode in Arsxy Theme"
description: "A comprehensive guide to configuring and customizing the dark mode feature in your Arsxy Jekyll theme"
categories: Features
tags: jekyll dark-mode accessibility customization
author: Awcodify
---

Dark mode has become an essential feature for modern websites, providing better readability in low-light environments and reducing eye strain. Arsxy theme includes a sophisticated dark mode implementation that's highly configurable and user-friendly.

<!--more-->

## Understanding Dark Mode in Arsxy

The Arsxy theme offers a complete dark mode solution with several key features:

- **Toggle Button:** Users can switch between light and dark modes with a single click
- **OS Preference Detection:** Automatically respects the user's system preference
- **Persistence:** Remembers user choices between sessions
- **Customizable Colors:** Fully customizable color palette for dark mode
- **Configurable Default:** Can default to either light or dark mode
- **Disableable:** Option to completely disable the feature if desired

## Basic Configuration

Dark mode settings can be configured in your `_config.yml` file:

```yaml
# Dark mode configuration
dark_mode:
  enable: true   # If set to false, the toggle button will be hidden and light mode forced
  default: true  # If true, dark mode will be the default theme
```

This configuration gives you control over two main aspects:

1. **Enabling/Disabling Dark Mode:** When `dark_mode.enable` is set to `false`, the theme will hide the dark mode toggle button and force light mode throughout the site.

2. **Default Theme:** When dark mode is enabled, the `default` setting determines whether your site begins in dark mode (`true`) or light mode (`false`).

## How It Works

When a user visits your site, Arsxy performs several checks to determine which theme to display:

1. First, it checks if dark mode is enabled in your configuration
2. If enabled, it checks for a user's previous preference stored in localStorage
3. If no preference exists, it checks the `default` setting in your configuration
4. The theme is applied accordingly
5. Users can toggle between themes using the button in the navigation bar

## Customizing Dark Mode Colors

You can fully customize the dark mode color palette by modifying the variables in `_sass/_variables.scss`:

```scss
// Dark mode colors
$dark-background: #0f172a;    // Dark blue-gray background
$dark-surface: #1e293b;       // Slightly lighter surface
$dark-text-color: #e2e8f0;    // Light gray text
$dark-border-color: #334155;  // Border color
$dark-code-background: #1e293b; // Code background
$dark-gray-light: #64748b;    // Light gray for secondary text
```

For more extensive customization, you can modify the styles in `_sass/_dark-mode.scss`, which contains all the dark theme-specific style overrides.

## Enhancing Dark Mode Typography

Typography in dark mode requires special considerations. By default, Arsxy makes these adjustments in dark mode:

1. **Increased Contrast:** Text colors are adjusted for better readability
2. **Font Weight Adjustments:** Font weights are slightly increased to compensate for perceived thinning on dark backgrounds
3. **Special Handling for Code:** Syntax highlighting colors are optimized for dark backgrounds

You can further customize these settings in the `_dark-mode.scss` file:

```scss
html.dark-mode {
  /* Base font adjustments */
  strong {
    font-weight: 700; 
    color: lighten($dark-text-color, 10%) !important;
  }
  
  /* Heading adjustments */
  h1, h2, h3, h4, h5, h6 {
    color: $dark-text-color !important;
  }
  
  /* Code adjustments */
  .highlight pre {
    background-color: $dark-code-background;
    color: #f8f8f2;
    border-color: $dark-border-color;
  }
}
```

## Advanced Configuration Examples

### Scenario 1: Dark Mode As Default, But Allow Toggling

```yaml
dark_mode:
  enable: true
  default: true
```

This configuration starts the site in dark mode but allows users to switch to light mode if they prefer.

### Scenario 2: Light Mode As Default, With Toggle Option

```yaml
dark_mode:
  enable: true
  default: false
```

With this configuration, your site will start in light mode but visitors can switch to dark mode.

### Scenario 3: Force Light Mode Only

```yaml
dark_mode:
  enable: false
  default: false  # This setting doesn't matter when enable is false
```

This configuration disables dark mode entirely, hiding the toggle button and forcing light mode for all users.

## Adding Custom Dark Mode Styles

If you have custom components or layouts, you might need to add additional styles for dark mode. Follow this pattern:

```scss
/* In your custom component SCSS file */
.my-custom-component {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #dddddd;
  
  /* Add dark mode styles */
  html.dark-mode & {
    background-color: $dark-surface;
    color: $dark-text-color;
    border-color: $dark-border-color;
  }
}
```

This approach keeps your light and dark styles together, making maintenance easier.

## Accessibility Considerations

Dark mode isn't just an aesthetic choice—it's an accessibility feature that can help users with light sensitivity, reduce eye strain, and conserve battery on OLED screens.

Consider these accessibility tips when working with dark mode:

- Don't use pure black backgrounds (#000000)—soft dark colors like `#0f172a` are easier on the eyes
- Ensure text has sufficient contrast (WCAG recommends at least 4.5:1 ratio)
- Test your dark mode with accessibility tools to ensure all content remains perceivable

## Troubleshooting

### Dark Mode Isn't Working

If dark mode isn't functioning correctly, check:

1. Make sure your `_config.yml` has the correct dark mode configuration
2. Verify that the JavaScript file is loading properly
3. Check browser console for any errors
4. Try clearing localStorage to reset user preferences

### Colors Don't Look Right

If your dark mode colors appear incorrect:

1. Check that you're using the color variables from `_variables.scss`
2. Ensure your custom components have dark mode overrides
3. Test with different browsers to rule out browser-specific issues

## Conclusion

Arsxy's dark mode implementation gives you complete control over the appearance of your site while respecting user preferences. By understanding the configuration options and customization techniques outlined in this guide, you can create a dark mode experience that's both visually appealing and accessible.

Whether you want to default to dark mode, light mode, or disable the feature entirely, Arsxy's flexible configuration system makes it easy to implement your preferred approach.
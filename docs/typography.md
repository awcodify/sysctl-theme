---
layout: docs
title: Typography
description: Learn about typography features and customization in Sysctl Theme
permalink: /docs/typography/
---

# Typography

Typography is a fundamental aspect of the Sysctl Theme, carefully designed to provide optimal readability and aesthetics. This guide covers the theme's typography system and how to customize it for your specific needs.

## Typography System

The Sysctl Theme uses a modern, responsive typography system built with:

- A carefully selected font stack for optimal readability
- Responsive sizing that adapts to different screen sizes
- Appropriate line heights and letter spacing
- Consistent vertical rhythm throughout the design

## Default Font Stack

By default, the theme uses a system font stack that leverages the best native fonts on each operating system:

```css
--font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
--font-family-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--font-family-serif: "Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif;
```

This approach offers several advantages:
- Fast loading (no external font files)
- Familiar appearance to users
- Optimal rendering on each platform
- Reduced layout shifts during page load

## Type Scale

The theme uses a modular type scale to ensure consistent and harmonious sizing across all text elements:

```scss
// Base size
--font-size-base: 1rem;          // 16px

// Type scale
--font-size-xs: 0.75rem;         // 12px
--font-size-sm: 0.875rem;        // 14px
--font-size-md: 1rem;            // 16px
--font-size-lg: 1.125rem;        // 18px
--font-size-xl: 1.25rem;         // 20px
--font-size-2xl: 1.5rem;         // 24px
--font-size-3xl: 1.875rem;       // 30px
--font-size-4xl: 2.25rem;        // 36px
--font-size-5xl: 3rem;           // 48px
```

## Heading Styles

Headings are styled for clear content hierarchy and scannable content:

```scss
h1, .h1 {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 1rem;
}

h2, .h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  line-height: 1.2;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

// ... other headings follow the same pattern
```

## Body Text

Body text is optimized for reading comfort:

```scss
body {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--text-color);
}

p {
  margin-top: 0;
  margin-bottom: 1.5rem;
}
```

## Responsive Typography

The theme automatically adjusts typography based on screen size:

```scss
// Mobile base size (default)
:root {
  --font-size-base: 1rem;
}

// Medium screens
@media (min-width: 768px) {
  :root {
    --font-size-base: 1.0625rem;
  }
}

// Large screens
@media (min-width: 1200px) {
  :root {
    --font-size-base: 1.125rem;
  }
}
```

Since all text sizes are based on relative units (rem), they scale proportionally with the base font size.

## Special Text Elements

### Links

Links use an understated style with clear hover states:

```scss
a {
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
  }
}
```

### Blockquotes

Blockquotes are styled to stand out from regular text:

```scss
blockquote {
  border-left: 4px solid var(--primary-color);
  margin-left: 0;
  margin-right: 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
  font-style: italic;
  color: var(--light-text-color);
  
  p:last-child {
    margin-bottom: 0;
  }
}
```

### Code and Pre-formatted Text

Inline and block code are styled differently:

```scss
code {
  font-family: var(--font-family-mono);
  font-size: 0.9em;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  background-color: var(--code-bg);
  color: var(--code-color);
}

pre {
  font-family: var(--font-family-mono);
  background-color: var(--code-bg);
  border-radius: 0.5rem;
  padding: 1.25rem;
  overflow-x: auto;
  
  code {
    padding: 0;
    background-color: transparent;
  }
}
```

### Lists

Lists are styled for clear hierarchy and readability:

```scss
ul, ol {
  padding-left: 1.75rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
  }
  
  ul, ol {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
```

## Advanced Typography Features

### Proper Quotation Marks

The theme includes CSS to ensure proper quotation marks based on the language:

```scss
:lang(en) {
  q {
    quotes: '"' '"' ''' ''';
  }
}

:lang(fr) {
  q {
    quotes: '« ' ' »' '‹ ' ' ›';
  }
}
```

### Hyphenation

For justified text, the theme enables proper hyphenation:

```scss
.text-justify {
  text-align: justify;
  hyphens: auto;
}
```

### Small Caps

Support for proper small caps:

```scss
.small-caps {
  font-variant: small-caps;
}
```

## Customizing Typography

### Using Web Fonts

To use web fonts instead of the system stack:

1. Add your web fonts to the project
2. Update the CSS variables in your `_custom.scss`:

```scss
:root {
  --font-family-sans: 'Inter', sans-serif;
  --font-family-serif: 'Merriweather', serif;
  --font-family-mono: 'Fira Code', monospace;
}
```

3. Load the fonts in your `<head>` (or via CSS):

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Merriweather:ital,wght@0,400;0,700;1,400&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

### Adjusting the Type Scale

To customize the type scale, modify the CSS variables:

```scss
:root {
  --font-size-base: 1.125rem;  // Increase base size
  --font-size-xl: 1.375rem;    // Custom adjustment
  --font-size-2xl: 1.75rem;    // Custom adjustment
}
```

### Changing Line Height

To adjust line height for better readability:

```scss
:root {
  --line-height-base: 1.8;  // Increase from default 1.7
  --line-height-headings: 1.3;
}

body {
  line-height: var(--line-height-base);
}

h1, h2, h3, h4, h5, h6 {
  line-height: var(--line-height-headings);
}
```

## Typography for Different Content Types

### Post Titles

Post titles use larger typography with special styling:

```scss
.post-title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}
```

### Meta Text

Meta information uses smaller, lighter text:

```scss
.post-meta {
  font-size: var(--font-size-sm);
  color: var(--light-text-color);
  margin-bottom: 2rem;
}
```

### Featured Text

For emphasizing important content:

```scss
.featured-text {
  font-size: var(--font-size-xl);
  line-height: 1.5;
  color: var(--light-text-color);
  font-weight: 400;
  margin: 2rem 0;
}
```

## Typography and Dark Mode

Typography automatically adapts to dark mode with appropriate contrast and readability adjustments:

```scss
:root {
  --text-color: #2d3748;
  --light-text-color: #718096;
  --link-color: #3182ce;
  --link-hover-color: #2c5282;
}

.dark-mode {
  --text-color: #f7fafc;
  --light-text-color: #a0aec0;
  --link-color: #63b3ed;
  --link-hover-color: #90cdf4;
}
```

## Typography Best Practices

When customizing typography in your site:

1. **Maintain readability:** Line length should be 60-80 characters
2. **Use consistent scale:** Follow the established type scale
3. **Respect vertical rhythm:** Keep consistent spacing between elements
4. **Consider contrast:** Ensure text has sufficient contrast with backgrounds
5. **Limit font families:** Use no more than 2-3 different font families
6. **Test responsively:** Ensure typography works on all screen sizes

## Accessibility Considerations

The theme's typography is built with accessibility in mind:

- Text can be resized up to 200% without loss of content or functionality
- Line heights are generous for improved readability
- Color contrast meets WCAG AA standards
- Type sizes are defined in relative units (rem)
- Focus states are clearly visible

## Related Resources

- [Customizing Your Sysctl Theme](/docs/customization/)
- [Dark Mode](/docs/dark-mode/)
- [CSS Variables Reference](/docs/css-variables/)
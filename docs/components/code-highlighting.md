---
layout: docs
title: Code Highlighting
description: Learn how to use and customize syntax highlighting for code blocks in Sysctl Theme
permalink: /docs/components/code-highlighting/
---

# Code Highlighting

Sysctl Theme includes powerful syntax highlighting capabilities that make code blocks in your content look beautiful and readable. This guide covers how to use and customize code highlighting in your Jekyll site.

## Basic Usage

To add syntax-highlighted code to your posts or pages, use the standard markdown code block syntax with a language specifier:

````markdown
```javascript
function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting('world'));
// Output: Hello, world!
```
````

The theme supports a wide range of programming languages, including:

- HTML, CSS, JavaScript
- Ruby, Python, PHP
- Java, C/C++, C#
- Shell/Bash scripts
- YAML, JSON, Markdown
- And many more...

## Highlighting Implementation

Sysctl Theme uses Rouge as the syntax highlighter, which is Jekyll's default. This is configured in your `_config.yml`:

```yaml
markdown: kramdown
highlighter: rouge
```

## Styling Options

The default syntax highlighting style is optimized for readability with carefully chosen colors for different syntax elements. The theme includes both light and dark mode syntax highlighting.

### Light Mode Example

```ruby
def hello_world
  puts "Hello, world!"
end

# Call the method
hello_world
```

### Dark Mode Example

The dark mode syntax highlighting automatically activates when a user switches to dark mode, providing a comfortable reading experience in low-light environments.

## Customizing Syntax Highlighting

You can customize the syntax highlighting styles by overriding the default Rouge theme styles.

### Changing the Highlighting Theme

To use a different Rouge theme, you can generate a new stylesheet and include it in your project:

1. Generate a custom stylesheet (requires Rouge gem installed):

```bash
rougify style monokai > _sass/syntax-highlighting-custom.scss
```

2. Import the custom stylesheet in your main CSS file instead of the default one.

### Custom Styling

You can also customize the existing syntax highlighting directly by modifying the variables in your custom CSS:

```scss
:root {
  --code-bg: #f5f7fa;
  --code-color: #2d3748;
  --code-comment: #718096;
  --code-keyword: #805ad5;
  --code-function: #3182ce;
  --code-string: #38a169;
  --code-number: #dd6b20;
  --code-operator: #c53030;
  --code-class: #2b6cb0;
  --code-variable: #2c5282;
}

.dark-mode {
  --code-bg: #1a202c;
  --code-color: #e2e8f0;
  --code-comment: #718096;
  --code-keyword: #b794f4;
  --code-function: #63b3ed;
  --code-string: #68d391;
  --code-number: #fbd38d;
  --code-operator: #fc8181;
  --code-class: #90cdf4;
  --code-variable: #a0aec0;
}
```

## Advanced Features

### Line Numbers

You can enable line numbers for code blocks:

````markdown
```ruby
# This code block will have line numbers
def method_with_line_numbers
  puts "Hello"
  puts "World"
end
```
{: .line-numbers}
````

To enable line numbers globally, add this to your custom CSS:

```scss
pre.highlight {
  counter-reset: line;
  
  span.line {
    display: inline-block;
    width: 100%;
    
    &:before {
      counter-increment: line;
      content: counter(line);
      display: inline-block;
      padding: 0 0.5em;
      margin-right: 0.5em;
      color: #888;
      border-right: 1px solid #ddd;
      min-width: 2.5em;
      text-align: right;
    }
  }
}
```

### Code Block Titles

You can add titles to your code blocks to indicate the file name or purpose:

````markdown
```javascript
// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
```
{: .titled-code-block data-title="app.js"}
````

The theme includes styling for titled code blocks, displaying the title above the code.

### Copy Button

The theme automatically adds a "Copy" button to all code blocks, allowing readers to easily copy code snippets to their clipboard.

The copy button is implemented using JavaScript:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('pre.highlight');
  
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    
    button.addEventListener('click', function() {
      const code = block.querySelector('code').innerText;
      navigator.clipboard.writeText(code);
      
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    });
    
    block.appendChild(button);
  });
});
```

## Accessibility Considerations

The syntax highlighting is designed with accessibility in mind:

- Color contrasts pass WCAG AA standards
- Code blocks can be navigated via keyboard
- Copy button is fully accessible via keyboard
- Aria labels are included for screen readers

## Responsive Behavior

On smaller screens, code blocks become horizontally scrollable to preserve the formatting while ensuring the entire layout remains responsive.

## Troubleshooting

If you encounter issues with syntax highlighting:

- Ensure the language identifier is specified correctly
- Check that Rouge is set as your highlighter in `_config.yml`
- Verify that the language you're trying to highlight is supported by Rouge
- Inspect the generated HTML to ensure the code block has the correct class

## Related Resources

- [Customizing Your Sysctl Theme](/docs/customization/)
- [Typography and Readability](/docs/typography/)
- [Dark Mode](/docs/dark-mode/)
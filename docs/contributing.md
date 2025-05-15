---
layout: docs
title: Contributing to Arsxy Theme
description: Learn how to contribute to the Arsxy Jekyll theme open source project
permalink: /docs/contributing/
---

# Contributing to Arsxy Theme

Thank you for your interest in contributing to the Arsxy Theme! This guide will help you get started with contributing to this open source project.

## Ways to Contribute

There are many ways to contribute to the Arsxy Theme:

1. **Reporting bugs**: Help identify and report issues
2. **Suggesting features**: Propose new features or improvements
3. **Improving documentation**: Help make the documentation clearer and more comprehensive
4. **Submitting code**: Fix bugs or implement new features
5. **Sharing feedback**: Use the theme and provide feedback on your experience

## Getting Started

### Prerequisites

To contribute to the Arsxy Theme, you'll need:

- Git
- Ruby (version 2.5.0 or higher)
- Bundler
- Jekyll (version 4.2 or higher)
- A GitHub account

### Setting Up the Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/arsxy-theme.git
   cd arsxy-theme
   ```

3. Install dependencies:
   ```bash
   bundle install
   ```

4. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```

5. Visit `http://localhost:4000` to see your local copy of the theme in action

## Development Workflow

### Creating a New Branch

Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-you-are-fixing
```

### Making Changes

Make your changes to the code, documentation, or both. Be sure to test your changes locally.

### Commit Guidelines

Please follow these guidelines for your commits:

- Use clear, descriptive commit messages
- Start with a verb in the present tense (e.g., "Add feature" not "Added feature")
- Reference issue numbers when relevant (e.g., "Fix #123: Correct header alignment")
- Keep commits focused and atomic (one logical change per commit)

Example commit message:
```
Add dark mode toggle animation

Implement smooth transition animation when toggling between light and dark mode.
This enhances the user experience by making the transition less jarring.

Fixes #42
```

### Testing Your Changes

Before submitting your changes, make sure to:

1. Test the theme with different types of content
2. Verify responsive behavior on multiple screen sizes
3. Check that dark mode works correctly
4. Ensure accessibility standards are maintained
5. Run the test suite (if available):
   ```bash
   bundle exec rake test
   ```

### Submitting a Pull Request

1. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Go to the original repository on GitHub and create a pull request

3. Provide a clear title and description for your pull request, explaining the changes and the problem they solve

4. Wait for maintainers to review your pull request

## Reporting Bugs

When reporting bugs, please include:

1. A clear, descriptive title
2. Steps to reproduce the bug
3. Expected behavior
4. Actual behavior
5. Screenshots (if applicable)
6. Your environment (OS, browser, Jekyll version, etc.)
7. Any relevant context or notes

Use the GitHub issue tracker to report bugs.

## Suggesting Features

Feature suggestions are welcome! When suggesting features:

1. Check if the feature has already been suggested or implemented
2. Provide a clear use case for the feature
3. Explain how the feature would benefit users of the theme
4. Consider implementation complexity and potential drawbacks

## Code Style Guidelines

Please follow these style guidelines when contributing code:

### HTML/Liquid

- Use 2 spaces for indentation
- Use semantic HTML elements
- Keep Liquid tags readable with appropriate spacing
- Comment complex logic

### CSS/SCSS

- Use 2 spaces for indentation
- Follow BEM naming convention for classes
- Use CSS variables for themeable properties
- Organize styles by component or feature

### JavaScript

- Use 2 spaces for indentation
- Use modern ES6+ syntax where appropriate
- Comment complex logic
- Keep functions small and focused
- Avoid jQuery if possible, prefer vanilla JavaScript

## Documentation Guidelines

When contributing to documentation:

- Use clear, concise language
- Include code examples where appropriate
- Follow Markdown best practices
- Organize content logically
- Check spelling and grammar
- Keep examples up-to-date with the current version

## Release Process

The Arsxy Theme follows these release practices:

1. Semantic versioning (MAJOR.MINOR.PATCH)
2. Changelogs for each release
3. GitHub releases tagged with version numbers

## Community and Communication

- **GitHub Issues**: Primary place for bug reports and feature requests
- **Pull Requests**: For submitting contributions
- **Discussions**: For questions and sharing ideas

## Code of Conduct

By participating in this project, you agree to abide by the project's Code of Conduct. Please report unacceptable behavior to the project maintainers.

## License

By contributing to the Arsxy Theme, you agree that your contributions will be licensed under the same [MIT License](https://github.com/awcodify/arsxy-theme/blob/main/LICENSE) that covers the project.

## Thank You!

Thank you for contributing to the Arsxy Theme! Your efforts help make this project better for everyone.
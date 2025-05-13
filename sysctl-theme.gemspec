# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "sysctl-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["awcodify"]
  spec.email         = ["awcodify@gmail.com"]

  spec.summary       = "A clean, fast and SEO-friendly Jekyll theme with flat design and responsive layout"
  spec.description   = "Sysctl Theme is a minimal Jekyll theme optimized for readability, performance, and SEO. It features a clean flat design, responsive layout, and optimized assets for speed."
  spec.homepage      = "https://github.com/awcodify/sysctl-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  
  # For minification and optimization
  spec.add_runtime_dependency "jekyll-minifier", "~> 0.1.10"

  # Optional dependencies
  spec.add_development_dependency "jekyll-responsive-image", "~> 1.5"
  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
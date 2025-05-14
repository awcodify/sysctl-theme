---
layout: default
title: Categories
permalink: /categories/
---

<div class="page-content">
  <h1 class="page-title">Categories</h1>
  
  <p class="lead">Browse all posts by category.</p>
  
  <div class="categories-list">
    {% assign sorted_categories = site.categories | sort %}
    {% for category in sorted_categories %}
      <div class="category-section">
        <h2 id="{{ category[0] | slugify }}" class="category-heading">{{ category[0] }}</h2>
        <ul class="post-list">
          {% for post in category[1] %}
            <li class="post-item">
              <span class="post-date">{{ post.date | date: site.date_format }}</span>
              <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>
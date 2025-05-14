---
layout: default
title: Articles
permalink: /articles/
---

<div class="page-content">
  <h1 class="page-title">Articles</h1>
  
  <p class="lead">Browse all articles from our blog in one place.</p>
  
  <div class="articles-list">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
      <article class="article-item">
        <div class="article-metadata">
          <span class="article-date">{{ post.date | date: site.date_format }}</span>
          {% if post.categories.size > 0 %}
            <span class="article-categories">
              {% for category in post.categories %}
                <a href="{{ '/categories/#' | append: category | slugify | relative_url }}" class="article-category">{{ category }}</a>{% unless forloop.last %},{% endunless %}
              {% endfor %}
            </span>
          {% endif %}
        </div>
        
        <h2 class="article-title">
          <a class="article-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        
        {% if post.description %}
          <p class="article-excerpt">{{ post.description }}</p>
        {% elsif post.excerpt %}
          <p class="article-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        {% endif %}
        
        <div class="article-tags">
          {% if post.tags.size > 0 %}
            <span class="tag-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
            </span>
            {% for tag in post.tags %}
              <a href="{{ '/tags/#' | append: tag | slugify | relative_url }}" class="article-tag">{{ tag }}</a>{% unless forloop.last %} {% endunless %}
            {% endfor %}
          {% endif %}
        </div>
        
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
      </article>
    {% endfor %}
  </div>
</div>
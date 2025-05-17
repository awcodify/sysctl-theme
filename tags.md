---
layout: default
title: Tags
permalink: /tags/
---

<div class="page-content">
  <h1 class="page-title">Tags</h1>
  
  <p class="lead">Browse all posts by tag.</p>
  
  <div class="tags-nav">
    <ul class="tag-filter">
      <li><a href="#all" class="active" data-tag="all">All Tags</a></li>
      
      {% comment %} Create a normalized case-insensitive tag list {% endcomment %}
      {% assign lowercase_tags = "" | split: "" %}
      {% assign tag_map = "" | split: "" %}
      
      {% for tag_item in site.tags %}
        {% assign lowercase_name = tag_item[0] | downcase %}
        {% assign original_name = tag_item[0] %}
        {% assign has_found = false %}
        
        {% comment %} Check if we already have this tag in lowercase form {% endcomment %}
        {% for existing_tag in lowercase_tags %}
          {% if existing_tag == lowercase_name %}
            {% assign has_found = true %}
            {% break %}
          {% endif %}
        {% endfor %}
        
        {% unless has_found %}
          {% assign lowercase_tags = lowercase_tags | push: lowercase_name %}
          {% assign tag_entry = "" | split: "" %}
          {% assign tag_entry = tag_entry | push: lowercase_name %}
          {% assign tag_entry = tag_entry | push: original_name %}
          {% assign tag_map = tag_map | push: tag_entry %}
        {% endunless %}
      {% endfor %}
      
      {% assign sorted_lowercase = lowercase_tags | sort %}
      {% for lowercase_tag in sorted_lowercase %}
        {% for tag_entry in tag_map %}
          {% if tag_entry[0] == lowercase_tag %}
            <li><a href="#{{ lowercase_tag }}" data-tag="{{ lowercase_tag }}">{{ tag_entry[1] }}</a></li>
          {% break %}
          {% endif %}
        {% endfor %}
      {% endfor %}
    </ul>
  </div>
  
  <div class="tags-list">
    <div class="tag-section" data-tag="all">
      <h2 id="all" class="tag-heading">All Posts</h2>
      <ul class="post-list">
        {% for post in site.posts %}
          <li class="post-item">
            <span class="post-date">{{ post.date | date: site.date_format }}</span>
            <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
    
    {% for lowercase_tag in sorted_lowercase %}
      <div class="tag-section" data-tag="{{ lowercase_tag }}">
        {% for tag_entry in tag_map %}
          {% if tag_entry[0] == lowercase_tag %}
            <h2 id="{{ lowercase_tag }}" class="tag-heading">{{ tag_entry[1] }} Posts</h2>
          {% break %}
          {% endif %}
        {% endfor %}
        
        <ul class="post-list">
          {% for tag_posts in site.tags %}
            {% assign tag_name_lower = tag_posts[0] | downcase %}
            {% if tag_name_lower == lowercase_tag %}
              {% for post in tag_posts[1] %}
                <li class="post-item">
                  <span class="post-date">{{ post.date | date: site.date_format }}</span>
                  <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </li>
              {% endfor %}
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/tag-filter.js' | relative_url }}"></script>
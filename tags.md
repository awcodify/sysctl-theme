---
layout: default
title: Tags
permalink: /tags/
---

<div class="page-content">
  <h1 class="page-title">Tags</h1>
  
  <p class="lead">Browse all posts by tag.</p>
  
  <div class="tag-cloud">
    {% assign tags = site.tags | sort %}
    {% for tag in tags %}
      <a href="#{{ tag[0] | slugify }}" class="tag-link" style="font-size: {{ tag[1].size | times: 4 | plus: 80 }}%">
        {{ tag[0] }} <span class="tag-count">({{ tag[1].size }})</span>
      </a>
    {% endfor %}
  </div>
  
  <div class="tags-list">
    {% for tag in tags %}
      <div class="tag-section">
        <h2 id="{{ tag[0] | slugify }}" class="tag-heading">{{ tag[0] }}</h2>
        <ul class="post-list">
          {% for post in tag[1] %}
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
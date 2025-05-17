---
layout: page
title: Category Test
permalink: /category-test/
---

<h1>Category Case-Insensitivity Test</h1>

<h2>All Categories (Original Case)</h2>
<ul>
{% for category in site.categories %}
  <li>{{ category[0] }} ({{ category[1].size }} posts)</li>
{% endfor %}
</ul>

<h2>Grouped Categories (Case-Insensitive)</h2>
<ul>
  {% assign lowercase_categories = "" | split: "" %}
  {% assign category_map = "" | split: "" %}
  
  {% for category_item in site.categories %}
    {% assign lowercase_name = category_item[0] | downcase %}
    {% assign original_name = category_item[0] %}
    {% assign has_found = false %}
    
    {% for existing_cat in lowercase_categories %}
      {% if existing_cat == lowercase_name %}
        {% assign has_found = true %}
        {% break %}
      {% endif %}
    {% endfor %}
    
    {% unless has_found %}
      {% assign lowercase_categories = lowercase_categories | push: lowercase_name %}
      {% assign category_entry = "" | split: "" %}
      {% assign category_entry = category_entry | push: lowercase_name %}
      {% assign category_entry = category_entry | push: original_name %}
      {% assign category_map = category_map | push: category_entry %}
    {% endunless %}
  {% endfor %}
  
  {% assign sorted_lowercase = lowercase_categories | sort %}
  {% for lowercase_category in sorted_lowercase %}
    {% for category_entry in category_map %}
      {% if category_entry[0] == lowercase_category %}
        <li>{{ category_entry[1] }} - Posts with this category (case-insensitive):
          <ul>
            {% for category_posts in site.categories %}
              {% assign cat_name_lower = category_posts[0] | downcase %}
              {% if cat_name_lower == lowercase_category %}
                {% for post in category_posts[1] %}
                  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> (Category: {{ category_posts[0] }})</li>
                {% endfor %}
              {% endif %}
            {% endfor %}
          </ul>
        </li>
      {% break %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>

<h3>Test Category Links:</h3>
<ul>
  {% for lowercase_category in sorted_lowercase %}
    {% for category_entry in category_map %}
      {% if category_entry[0] == lowercase_category %}
        <li><a href="{{ '/categories/#' | append: lowercase_category | relative_url }}">{{ category_entry[1] }}</a></li>
      {% break %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>

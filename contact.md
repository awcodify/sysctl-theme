---
layout: default
title: Contact
permalink: /contact/
---

<div class="page-content">
  <h1 class="page-title">Contact</h1>
  
  <p class="lead">Have questions or feedback? Get in touch with us!</p>
  
  <div class="contact-options">
    <div class="contact-option">
      <h2>Email</h2>
      <p>You can reach us directly at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>
    </div>
    
    <div class="contact-option">
      <h2>Social Media</h2>
      <p>Connect with us on social media:</p>
      <ul class="social-links">
        {% if site.social.github %}
        <li><a href="https://github.com/{{ site.social.github }}" target="_blank" rel="noopener">GitHub</a></li>
        {% endif %}
        
        {% if site.social.twitter %}
        <li><a href="https://twitter.com/{{ site.social.twitter }}" target="_blank" rel="noopener">Twitter</a></li>
        {% endif %}
        
        {% if site.social.linkedin %}
        <li><a href="https://linkedin.com/in/{{ site.social.linkedin }}" target="_blank" rel="noopener">LinkedIn</a></li>
        {% endif %}
      </ul>
    </div>
  </div>
</div>
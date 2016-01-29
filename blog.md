---
published: true
permalink: /blog/
layout: hero
filename: blog.md
title: Blog
---

# Blog

{% for post in site.posts %}
  <h3 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  Posted on: {{ post.date | date: "%B %-d, %Y" }} | By: {{ post.byline }}

  <p class="large">{{ post.excerpt }}</p>
{% endfor %}
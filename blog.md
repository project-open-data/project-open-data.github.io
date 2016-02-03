---
published: true
permalink: /blog/
layout: blog-front
filename: blog.md
title: Blog
---

<div class="container">
    <div class="row-fluid">
        <div class="col-md-8 blog">
            {% for post in site.posts %}
            <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
            <cite>By: {{ post.byline }} | Posted on: {{ post.date | date: "%B %-d, %Y" }}</cite>
            <p>{{ post.excerpt }}<span class='read-more'> <a href="{{ site.baseurl }}{{ post.url }}">...Read More</a></p>
            {% endfor %}
        </div>
        <div class="col-md-4 blog-rail">
        </div>
    </div>
</div>
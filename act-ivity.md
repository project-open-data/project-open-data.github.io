---
published: true
permalink: /act-ivity/
layout: act-ivity-front
filename: act-ivity.md
title: DATA Act-ivity
---

<div class="container">
    <div class="row">
        <div class="col-md-8 blog">
            {% for post in site.posts %}
            <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
            <cite>Posted on: {{ post.date | date: "%B %-d, %Y" }}</cite>
            <p>{{ post.excerpt }}<span class='read-more'> <a href="{{ site.baseurl }}{{ post.url }}">...Read More</a></p>
            {% endfor %}
        </div>
        <div class="col-md-4 blog-rail">
        </div>
    </div>
</div>
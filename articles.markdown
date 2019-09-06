---
layout: default
title: Статьи
permalink: /articles/
---

<!-- ¯ \ _ (ツ) _ / ¯ -->

<ul class="site-list mt-0">
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <!-- <p>{{ post.excerpt }}</p> -->
    </li>
  {% endfor %}
</ul>
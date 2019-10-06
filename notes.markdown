---
layout: default
title: Заметки
permalink: /notes/
---

<ul class="page-list mt-0">
    {% for post in site.posts %}
    <li class="page__item">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </li>
    {% endfor %}
</ul>
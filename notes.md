---
layout: default
title: Заметки
permalink: /notes/
---

<!-- [ -->
<ul class="reset-list post-list mt-0">
    {% for post in site.posts %}
    <li class="post-list__item">
        <!-- { "id": {{ forloop.rindex }}, "title": -->
        <h2 class="post-list__title"><a href="{{ post.url }}" class="post-list__link">{{ post.title }}</a></h2>
        <!-- } -->
    </li>
    {% endfor %}
</ul>
<!-- ] -->
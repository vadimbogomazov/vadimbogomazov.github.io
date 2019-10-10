---
layout: default
title: Заметки
permalink: /notes/
---

<ul class="reset-list mt-0">
    {% for post in site.posts %}
    <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </li>
    {% endfor %}
</ul>
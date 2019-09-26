---
layout: default
title: Инструментарий
permalink: /tools/

tools:
  - name: Sublime Text 3
    url: https://www.sublimetext.com/
    description: редактор кода
  - name: Git
    url: https://git-scm.com/
    description: контроль версий
  - name: SvgCleaner
    url: https://github.com/RazrFalcon/svgcleaner-gui/
    description: оптимизация svg
  - name: Typora
    url: https://www.typora.io/
    description: редактор маркдауна
  - name: Alzex Finance
    url: https://www.alzex.com/
    description: учет финансов
  - name: Типограф
    url: https://www.artlebedev.ru/typograf/
    description: обработка текста
---

<ul class="site-list mt-0">
    {% for item in page.tools %}
    <li class="site-list__item">
        <a href="{{ item.url }}" target="_blank">{{ item.name }}</a>&nbsp;&mdash; {{item.description}}
    </li>
    {% endfor %}
    <li class="site-list__item">
        <a href="https://www.figma.com/" target="_blank">Figma</a>, <a href="https://zeplin.io/" target="_blank">Zeplin</a>, <a href="https://www.adobe.com/ru/products/photoshop.html" target="_blank">Photoshop</a>&nbsp;&mdash; работа с&nbsp;макетами
    </li>
</ul>
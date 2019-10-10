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
    description: редактор markdown
  - name: Transfonter
    url: https://transfonter.org/
    description: генератор @font-face
  - name: Alzex Finance
    url: https://www.alzex.com/
    description: учет финансов
  - name: Типограф
    url: https://www.artlebedev.ru/typograf/
    description: обработка текста
---

<ul class="mt-0">
    {% for item in page.tools %}
    <li>
        <a href="{{ item.url }}" rel="noopener noreferrer" target="_blank">{{ item.name }}</a>&nbsp;&mdash; {{item.description}}
    </li>
    {% endfor %}
    <li class="">
        <a href="https://www.figma.com/" rel="noopener noreferrer" target="_blank">Figma</a>, <a href="https://zeplin.io/" rel="noopener noreferrer" target="_blank">Zeplin</a>, <a href="https://www.adobe.com/ru/products/photoshop.html" rel="noopener noreferrer" target="_blank">Photoshop</a>&nbsp;&mdash; работа с&nbsp;макетами
    </li>
</ul>
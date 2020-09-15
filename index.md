---
layout: default
title: Vadim Bogomazov

projects:
    - name: Конструктор Стильные кухни
      description: Верстка, написание фронтенд-логики в&nbsp;связке React/Redux.
      url: https://express.stilkuhni.ru/constructor/
    - name: Crystal Slider
      description: Cлайдер на&nbsp;JavaScript.
      url: https://vadimbogomazov.github.io/CrystalSlider/
    - name: CSS Triangle Generator
      description: Генератор css треугольников на&nbsp;React.
      url: https://vadimbogomazov.github.io/css-triangle-generator/
    - name: FrontWebDev
      description: Небольшая группа про веб-разработку в&nbsp;ВК.
      url: https://vk.com/frontwebd
---

<section class="page-section">
    <h2>Введение</h2>

    <p>Привет. Меня зовут Вадим, я&nbsp;фронтенд-разработчик, работаю в&nbsp;Москве. Это мой персональный сайт.</p>
</section>

<section class="page-section">
    <h2>Проекты</h2>

    <ul class="list">
        {% for project in page.projects %}
        <li>
            <span><a href="{{ project.url }}" rel="noopener noreferrer" target="_blank">{{ project.name }}</a></span>
            <p class="projects-list__desc">{{ project.description }}</p>
        </li>
        {% endfor %}
    </ul>
</section>

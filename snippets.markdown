---
layout: default
title: Сниппеты
permalink: /snippets/

categories:
  - name: JS
    list:
        - name: Функция вычисления ширины скроллбара
          url: https://gist.github.com/vadimbogomazov/3718dea866e166092c5b6eb406f25baa
  - name: Миксины
    list:
        - name: font-face
          url: https://gist.github.com/vadimbogomazov/56d1bcc13c5d1cacbf1dfd88d8bf2a4b
  - name: HTML
    list:
        - name: Отключить преобразование телефонных номеров в&nbsp;ссылки в&nbsp;мобильных браузерах
          url: https://gist.github.com/vadimbogomazov/e5591be170a5f9318a672087f6363549
---

<p>Часто используемые сниппеты в&nbsp;работе, лежат на&nbsp;Github Gist.</p>

<div>
    {% for category in page.categories %}
        <section class="site-section">
            <h2>{{ category.name }}</h2>

            <ul>
                {% for item in category.list %}
                <li>
                    <a href="{{ item.url }}" rel="noopener noreferrer" target="_blank">{{ item.name }}</a>
                </li>
                {% endfor %}
            </ul>
        </section>
    {% endfor %}
</div>

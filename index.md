---
layout: default
title: Вадим Богомазов

projects:
    - name: Конструктор кухни Gorenje Kitchen
      description: Верстка, написание фронтенд-логики в&nbsp;связке React/Redux.
      url: https://gorenje-kitchen.ru/constructor/
    # - name: mcx.ru
      # description: Верстка сайта Министерства Сельского Хозяйства РФ.
      # url: http://mcx.ru/
    - name: Crystal Slider
      description: Cлайдер на&nbsp;JavaScript.
      url: https://vadimbogomazov.github.io/CrystalSlider/
    - name: CSS Triangle Generator
      description: Генератор css треугольников на&nbsp;React.
      url: https://vadimbogomazov.github.io/css-triangle-generator/
    # - name: Landing Aviasales
      # description: Верстка одностраничников Aviasales&nbsp;&mdash; 14&nbsp;февраля, 23&nbsp;февраля, 8&nbsp;марта.
      # url: https://www.aviasales.ru/top/zachem/love.html
    - name: FrontWebDev
      description: Небольшая группа про веб-разработку в&nbsp;ВК.
      url: https://vk.com/frontwebd
---

<section class="page-section">
    <h2>Введение</h2>

    <p>Привет. Меня зовут Вадим, я&nbsp;фронтенд-разработчик, работаю в&nbsp;Москве. Это мой персональный сайт.</p>
    <p>Основные постулаты:</p>

    <ul>
        <li>Ресурс мой&nbsp;&mdash; что хочу, то&nbsp;и&nbsp;делаю.</li>
        <li>Мне нравится минимализм.</li>
        <li>IE&nbsp;здесь намеренно не&nbsp;поддерживается.</li>
        <li>Я&nbsp;не&nbsp;профессиональный программист и&nbsp;не&nbsp;занимаюсь обучением, весь контент предназначен исключительно для меня самого и&nbsp;является моей интеллектуальной собственностью.</li>
        <li>Я&nbsp;за&nbsp;чистый и&nbsp;правильный русский язык.</li>
        <li>Вполне возможны недописанные заметки, готовые заметки могут периодически обновляться.</li>
        <li>Заранее согласен, что вы&nbsp;сможете написать код лучше меня. Также в&nbsp;моем коде могут быть ошибки&nbsp;&mdash; использовать его только на&nbsp;свой страх и&nbsp;риск. С&nbsp;радостью приму вежливые замечания, что можно было&nbsp;бы сделать лучше.</li>
        <li>Соглашения в&nbsp;написании&nbsp;&mdash; JavaScript (<span class="disabled">Javascript,</span> <span class="disabled">Джаваскрипт,</span> <span class="disabled">Яваскрипт</span>), фронтенд (<span class="disabled">фронт-енд,</span> <span class="disabled">фронтэнд,</span> <span class="disabled">фронт-энд</span>)</li>
        <li>Любой пункт этого списка, и&nbsp;сам список, может измениться в&nbsp;любое время по&nbsp;моему желанию.</li>
        <li>Связаться со&nbsp;мной по&nbsp;любому поводу&nbsp;&mdash; контакты в подвале.</li>
    </ul>
</section>

<section class="page-section">
    <h2>Проекты</h2>

    <ul class="projects-list">
        {% for project in page.projects %}
        <li class="projects-list__item">
            <div>
                <span class="projects-list__name"><a href="{{ project.url }}" rel="noopener noreferrer" target="_blank" class="projects-list__link">{{ project.name }}</a></span>
                <p class="projects-list__desc">{{ project.description }}</p>
            </div>
        </li>
        {% endfor %}
    </ul>
</section>

---
layout: default
title: Книги
permalink: /books/

categories:
  - name: 2019
    list:
      - name: Маленький принц
        url: https://www.ozon.ru/context/detail/id/149798931/
      - name: Идиот
        url: https://www.ozon.ru/context/detail/id/144950536/
      - name: Тонкое искусство пофигизма
        url: https://www.ozon.ru/context/detail/id/141536702/
      - name: Секреты JavaScript ниндзя
        url: https://www.ozon.ru/context/detail/id/142089820/
      - name: Вий
        url: https://www.ozon.ru/context/detail/id/5821831/
      - name: Ревизор
        url: https://www.ozon.ru/context/detail/id/141747021
      - name: Мертвые души
        url: https://www.ozon.ru/context/detail/id/34610955/
      - name: Психология влияния
        url: https://www.ozon.ru/context/detail/id/26443761/
      - name: Недоросль
        url: https://www.ozon.ru/context/detail/id/3376568/
      - name: Горе от&nbsp;ума
        url: https://www.ozon.ru/context/detail/id/1440598/
      - name: Грокаем алгоритмы
        url: https://www.ozon.ru/context/detail/id/139296295/

  - name: Лучшее из&nbsp;прочитанного
    content:
      - name: Программирование
        list:
            - name: Секреты JavaScript ниндзя
              url: https://www.ozon.ru/context/detail/id/142089820/
            - name: Командная строка Linux. Полное руководство
              url: https://www.ozon.ru/context/detail/id/137731096/
            - name: Секреты CSS. Идеальные решения ежедневных задач
              url: https://www.ozon.ru/context/detail/id/137213400/
            - name: Грокаем алгоритмы
              url: https://www.ozon.ru/context/detail/id/139296295/
      - name: Художественное
        list:
            - name: Мастер и&nbsp;Маргарита
              url: https://www.ozon.ru/context/detail/id/138217244/
            - name: Граф Монте-Кристо
              url: https://www.ozon.ru/context/detail/id/140178817/
            - name: Красное и&nbsp;черное
              url: https://www.ozon.ru/context/detail/id/150484076/
            - name: Преступление и&nbsp;наказание
              url: https://www.ozon.ru/context/detail/id/146743348/
            - name: Мертвые души
              url: https://www.ozon.ru/context/detail/id/34610955/
            - name: Ревизор
              url: https://www.ozon.ru/context/detail/id/141747021/
            - name: Золотой теленок
              url: https://www.ozon.ru/context/detail/id/141345339/
            - name: 12&nbsp;стульев
              url: https://www.ozon.ru/context/detail/id/141345339/
            - name: Дон Кихот
              url: https://www.ozon.ru/context/detail/id/149622031/
            - name: Анна Каренина
              url: https://www.ozon.ru/context/detail/id/149498813/
---

<div>
    {% for category in page.categories %}
        <section class="page-section">
            <h2>{{ category.name }}</h2>

            {% if category.list %}
                <ul class="page-list">
                    {% for item in category.list %}
                    <li class="page-list__item">
                        <a href="{{ item.url }}" target="_blank">{{ item.name }}</a>
                    </li>
                    {% endfor %}
                </ul>
            {% endif %}

            {% if category.content %}
                {% for content in category.content %}
                    <section class="page-section">
                        <h3>{{ content.name }}</h3>
                        <ul class="page-list">
                            {% for item in content.list %}
                                <li class="page-list__item">
                                    <a href="{{ item.url }}" target="_blank">{{ item.name }}</a>
                                </li>
                            {% endfor %}
                        </ul>
                    </section>
                {% endfor %}
            {% endif %}
        </section>
    {% endfor %}
</div>
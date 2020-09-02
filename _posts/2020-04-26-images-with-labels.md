---
layout: post
title: Верстка изображения с подписью
description: Верстка изображения с подписью
date: 2020-04-26 18:09:00 +0300
categories: frontend
---

<p>При верстке очередного проекта появилась такая задача&nbsp;&mdash; необходимо сверстать изображение в&nbsp;контентной части с&nbsp;подписью снизу. Причем подпись, независимо от&nbsp;количества символов, не&nbsp;должна выходить за&nbsp;пределы ширины изображения, выравнивание текста всегда от&nbsp;левого края изображения. Ширина самих изображений может быть любой, в&nbsp;мобильной версии подставляется другой вариант, также оно может быть по&nbsp;выравнено не&nbsp;только по&nbsp;левому краю, но&nbsp;и&nbsp;по&nbsp;центру. Рассмотрим, как это можно реализовать.</p>

<h3 id="markup"><a href="#markup" class="post__anchor">&sect;</a> Разметка</h3>

<p>Начнем с&nbsp;разметки. Не&nbsp;забываем про семантику.</p>

```html
<div class="article-media article-media_center">
    <figure class="article-media__inner">
        <picture class="article-media__img-wrap">
            <source srcset="https://via.placeholder.com/300x225" media="(max-width: 767px)">
            <img src="https://via.placeholder.com/600x450" alt="" class="article-media__img" />
        </picture>
        <figcaption class="article-media__caption">Какая-то очень умная длинная подпись, которая не выходит за пределы ширины изображения</figcaption>
    </figure>
</div>
```

<h3 id="styles"><a href="#styles" class="post__anchor">&sect;</a> Стили</h3>

<p>Прекрасно&nbsp;то, что это реализовывается без всякого&nbsp;js, одними стилями. Элемент <code>.article-media__inner</code> делаем строчно-блочным, чтобы выравнивать его по&nbsp;нужному краю с&nbsp;помощью родительского модификатора. Для подписи задаем принудительное центрирование слева&nbsp;&mdash; оно всегда будет таковым.</p>

```css
.article-media__inner {
    display: inline-block;
}

.article-media__caption {
    text-align: left;
}
```

<p>И&nbsp;далее мы&nbsp;используем свойство <code>max-width</code> с&nbsp;замечательным значением <code>fit-content</code>, которое не&nbsp;даст нашему тексту растягивать ширину родителя, а&nbsp;подстраиваться под картинку.</p>

```css
.article-media__caption {
    max-width: fit-content;
}
```

<ul class="list">
    <li>
        Демо-пример на&nbsp;<a href="https://jsfiddle.net/VadimBogomazov/7utqsen2/8/" rel="noopener noreferrer" target="_blank">jsfiddle</a>
    </li>
    <li>
        Поддержка на&nbsp;<a href="https://caniuse.com/#search=fit-content" rel="noopener noreferrer" target="_blank">caniuse</a>
    </li>
</ul>

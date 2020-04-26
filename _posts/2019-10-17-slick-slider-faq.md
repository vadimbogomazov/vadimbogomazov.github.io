---
layout: post
title: Slick Slider
description: Slick Slider
date: 2019-10-17 18:00:00 +0300
categories: frontend
---

<p><a href="https://kenwheeler.github.io/slick/" rel="noopener noreferrer" target="_blank">Slick Slider</a>&nbsp;&mdash; jQuery плагин, обеспечивающий большую часть стандартного функционала типичного слайдера в&nbsp;интерфейсе. Собрал в&nbsp;одном месте частые решения возникающих проблем, чтобы всегда было под рукой. Актуально для версии 1.9.0.</p>

<h3 id="init-slider"><a href="#init-slider" class="post__anchor">§</a> Инициализация слайдера</h3>

```js
$('.js-slider').not('.slick-initialized').slick({});
```

<h3 id="hide-slider"><a href="#hide-slider" class="post__anchor">§</a> Скрыть слайдер до&nbsp;инициализации</h3>

```scss
.slick-slider {
    display: none;

    &.slick-initialized {
        display: block;
    }
}
```

<p>Или немного по-другому, через свойство <code class="code">visibility</code>:</p>

```scss
.slick-slider {
    visibility: hidden; 

    &.slick-initialized {
        visibility: visible;
    }
}
```

<h3 id="slides-margin"><a href="#slides-margin" class="post__anchor">§</a> Отступы между слайдами</h3>

```scss
$slide-margin: 0.8rem;

.slick-list {
    margin-left: (-$slide-margin);
    margin-right: (-$slide-margin);
}

.slick-slide {
    margin-left: $slide-margin;
    margin-right: $slide-margin;
}
```

<h3 id="equal-height-slides"><a href="#equal-height-slides" class="post__anchor">§</a> Слайды одинаковой высоты</h3>

```css
.slick-track {
    display: flex;
}

.slick-slide {
    display: flex;
    height: auto;
}
```

<h3 id="remove-outline"><a href="#remove-outline" class="post__anchor">&sect;</a> Убрать обводку у&nbsp;слайдов</h3>

```css
.slick-slide {
    outline: none;
}
```

<h3 id="custom-paging"><a href="#remove-outline" class="post__anchor">&sect;</a> Кастомная пагинация</h3>

<p>Пример пагинации с&nbsp;тамбнейлами.</p>

```html
<div class="slider js-slider">
    <div class="slider__slide" data-slide-thumb="https://via.placeholder.com/100x70/000/FFF/">
        <img src="https://via.placeholder.com/600x450/" alt="" class="slider__img">
    </div>
</div>
```

```js
{
    dots: true,
    customPaging: (slick, index) => {
        return `<button type="button" class="slider__thumb" style="background-image: url('${ $(slick.$slides[index]).data('slide-thumb') }');">${ index }</button>`;
    },
}
```

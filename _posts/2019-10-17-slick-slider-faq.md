---
layout: post
title: Slick Slider
description: Slick Slider
date: 2019-10-17 18:00:00 +0300
categories: frontend
---

<p><a href="https://kenwheeler.github.io/slick/" rel="noopener noreferrer" target="_blank">Slick Slider</a>&nbsp;&mdash; jQuery плагин, обеспечивающий большую часть стандартного функционала типичного слайдера в&nbsp;интерфейсе. Собрал в&nbsp;одном месте частые решения возникающих проблем, чтобы всегда было под рукой.</p>

<h3 id="init-slider"><a href="#init-slider" class="post__anchor">§</a> Инициализация слайдера</h3>

```js
$(`.js-slider`).not(`.slick-initialized`).each(function () {
    const $this = $(this);

    $this.slick();
});
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

<p>Или по-другому, через свойство <code class="code">visibility</code>:</p>

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
:root {
  --slide-margin: 1.5rem;
}

.slick-list {
    margin-left: calc(-1 * var(--slide-margin));
    margin-right: calc(-1 * var(--slide-margin));
}

.slick-slide {
    margin-left: var(--slide-margin);
    margin-right: var(--slide-margin);
}
```

<p>Демо на&nbsp;<a href="https://jsfiddle.net/VadimBogomazov/0mvL52q8/9/" rel="noopener noreferrer" target="_blank">jsfiddle</a>.</p>

<h3 id="equal-height-slides"><a href="#equal-height-slides" class="post__anchor">§</a> Слайды одинаковой высоты</h3>

```scss
.slick-track {
    display: flex;
}

.slick-slide {
    display: flex;
    height: auto;
}
```

<h3 id="remove-outline"><a href="#remove-outline" class="post__anchor">&sect;</a> Убрать обводку у&nbsp;слайдов</h3>

```scss
.slick-slide {
    outline: none;
}
```

<h3 id="custom-paging"><a href="#custom-paging" class="post__anchor">&sect;</a> Кастомная пагинация</h3>

<p>Пример пагинации с&nbsp;тамбнейлами.</p>

```html
<div class="slider js-slider">
    <div class="slider__slide" data-slide-thumb="https://via.placeholder.com/100x70/000/FFF/">
        <img src="https://via.placeholder.com/600x450/" alt="" class="slider__img">
    </div>
    <div class="slider__slide" data-slide-thumb="https://via.placeholder.com/100x70/000/FFF/">
        <img src="https://via.placeholder.com/600x450/" alt="" class="slider__img">
    </div>
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

<h3 id="slide-count"><a href="#slide-count" class="post__anchor">&sect;</a> Вывод текущего и&nbsp;общего количества слайдов</h3>

```html
<div class="slider js-slider">
    <div class="slider__inner js-slider-inner">
        <div class="slider__slide">
            <img src="https://via.placeholder.com/300x200" alt="" class="slider__img">
        </div>
        <div class="slider__slide">
            <img src="https://via.placeholder.com/300x200" alt="" class="slider__img">
        </div>
        <div class="slider__slide">
            <img src="https://via.placeholder.com/300x200" alt="" class="slider__img">
        </div>
        <div class="slider__slide">
            <img src="https://via.placeholder.com/300x200" alt="" class="slider__img">
        </div>
    </div>
    
    <footer class="slider__data js-slider-data"></footer>
</div>
```

```js
$(`.js-slider-inner`).not(`.slick-initialized`).each(function () {
    const $this = $(this);
    const $slider = $this.closest(`.js-slider`);

    $this.on(`init reInit afterChange`, function (event, slick, currentSlide, nextSlide) {
        const i = (currentSlide ? currentSlide : 0) + 1;

        $slider.find(`.js-slider-data`).html(`${ i } / ${ slick.slideCount }`);
    });
});
```

<p>Демо на&nbsp;<a href="https://jsfiddle.net/VadimBogomazov/wxbn5r7z/13/" rel="noopener noreferrer" target="_blank">jsfiddle</a>.</p>

<h3 id="slider-shadows"><a href="#slider-shadows" class="post__anchor">&sect;</a> Слайды с&nbsp;тенью</h3>

```html
<div class="slider js-slider">
    <div class="slider__item">
        <img src="https://via.placeholder.com/300x200" alt="" class="slider__img">
    </div>

    <div class="slider__item">
        <img src="https://via.placeholder.com/300x200" alt="" class="slider__img">
    </div>

    <div class="slider__item">
        <img src="https://via.placeholder.com/300x200" alt="" class="slider__img">
    </div>
</div>
```

```scss
:root {
    --slide-margin: 3rem;
}

img {
    height: auto;
    max-width: 100%;
}

.slider {
    $self: &;
    
    display: none;
    margin-bottom: calc(-1 * var(--slide-margin));
    margin-left: calc(-1 * var(--slide-margin));
    margin-top: calc(-1 * var(--slide-margin));
    overflow: hidden;
    padding: var(--slide-margin);
    width: calc(100% + var(--slide-margin) * 2);
        
    &.slick-initialized {
        display: block;
    }
    
    &__item {
        border: 1px solid #dedede;
        margin-bottom: var(--slide-margin);
        margin-left: var(--slide-margin);
        margin-top: var(--slide-margin);
        
        &:hover {
            box-shadow: 0 0 1rem rgba(75, 105, 172, 0.5);
        }
    }

    &__img {
        width: 100%;
    }
    
    .slick-list {
        margin-left: calc(-1 * var(--slide-margin));
        overflow: visible;
    }
}
```

<p>Демо на&nbsp;<a href="https://jsfiddle.net/VadimBogomazov/zmf9b7uq/24/" rel="noopener noreferrer" target="_blank">jsfiddle</a>.</p>

<h3 id="slider-bugs"><a href="#slider-bugs" class="post__anchor">§</a> Баги</h3>

<h4>Баг с&nbsp;параметром rows</h4>

<p>В&nbsp;версии 1.8.1 обнаружен баг в&nbsp;миницированной версии скрипта. Параметр <code class="code">rows</code> не&nbsp;изменяется в&nbsp;настройках <code class="code">responsive</code>. Следует использовать версию без минификации.</p>

<h4>Проблемы внутри&nbsp;флекс родителя</h4>

<p>Слайдер выполняет неправильный расчет размеров в блоке с&nbsp;флекс родителем. Для корректной работы родителю слайдера следует указать такие стили.</p>

```scss
.flex-parent {
    min-height: 0;
    min-width: 0;
}
```
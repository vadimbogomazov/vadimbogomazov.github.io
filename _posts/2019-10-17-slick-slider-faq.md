---
layout: post
title: Slick Slider
description: Slick Slider
date: 2019-10-17 18:00:00 +0300
categories: frontend
---

<p>Slick Slider&nbsp;&mdash; плагин, закрывающий&nbsp;90% требуемого функционала типичного слайдера в&nbsp;интерфейсе. В&nbsp;этой заметке собраны частые решения возникающих проблем, чтобы всегда было под рукой.</p>

<h3 id="hide-slider"><a href="#hide-slider" class="post__anchor">§</a> Скрыть слайдер до&nbsp;инициализации</h3>

```scss
.slick-slider {
    display: none;

    &.slick-initialized {
        display: block;
    }
}
```

<p>Или немного по-другому, через <code class="code">visibility</code>:</p>

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
    margin: 0 (-$slide-margin);
}

.slick-slide {
    margin: 0 $slide-margin;
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
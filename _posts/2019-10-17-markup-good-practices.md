---
layout: post
title: Верстка — хорошие практики
description: Верстка — хорошие практики
date: 2019-10-17 20:00:00 +0300
categories: frontend
---

<p>На данный момент хаотичный разброс хороших практик по верстке, из собственного опыта.</p>

<h3 id="font-face"><a href="#font-face" class="post__anchor">§</a> Нестандартные шрифты</h3>

<p>Перестаньте генерировать лишние форматы шрифтов font-face (ttf, eot, svg). Для современных браузеров почти всегда хватает форматов woff2 и&nbsp;woff.</p>

```scss
/* Плохо, много лишних форматов */
@font-face {
  font-family: 'FontName';
  src: url('../fonts/FontName/FontName-Regular.eot');
  src: url('../fonts/FontName/FontName-Regular.eot?#iefix') format('embedded-opentype'),
       url('../fonts/FontName/FontName-Regular.woff2') format('woff2'),
       url('../fonts/FontName/FontName-Regular.woff') format('woff'),
       url('../fonts/FontName/FontName-Regular.ttf') format('truetype'),
       url('../fonts/FontName/FontName-Regular.svg#svgFontName') format('svg');
}
```

```scss
/* Хорошо */
@font-face {
  font-family: 'FontName';
  src: url('../fonts/FontName/FontName-Regular.woff2') format('woff2'),
       url('../fonts/FontName/FontName-Regular.woff') format('woff');
}
```

<p>Порядок подключения имеет значение&nbsp;&mdash; первым в коде должен быть подключен woff2.</p>

<p>Раскладывайте каждый шрифт в&nbsp;отдельной папке&nbsp;&mdash; станет больше порядка, если в&nbsp;проекте используется несколько нестандартных шрифтов.</p>

<p>Поддержка форматов: <a href="https://caniuse.com/#search=woff2" rel="noopener noreferrer" target="_blank">woff2</a>, <a href="https://caniuse.com/#search=woff" rel="noopener noreferrer" target="_blank">woff</a></p>
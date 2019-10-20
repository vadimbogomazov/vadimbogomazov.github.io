---
layout: post
title: Верстка — хорошие практики
description: Верстка — хорошие практики
date: 2019-10-17 20:00:00 +0300
categories: frontend
---

<p>На&nbsp;данный момент хаотичный разброс хороших практик по&nbsp;верстке, из&nbsp;собственного опыта.</p>

<h3 id="translit"><a href="#translit" class="post__anchor">&sect;</a> Транслит</h3>

<p>Никогда не&nbsp;используйте транслит в&nbsp;названиях классов, переменных, функций и&nbsp;где&nbsp;бы то&nbsp;ни&nbsp;было в&nbsp;вашем коде. Это выглядит ужасно и&nbsp;несерьезно. Еще отвратительней, когда миксуются английские названия c&nbsp;транслитом. Вспоминается функция из&nbsp;реального проекта:</p>

```js
function tovarPoCode() {
    /* тело функции */
}
```

<blockquote class="citate">
    <p class="citate__text">Пишите код так, как будто сопровождать его будет склонный к&nbsp;насилию психопат, который знает, где вы&nbsp;живёте.</p>
    <footer class="citate__data">&mdash;&nbsp;<cite class="citate__author">Мартин Голдинг</cite></footer>
</blockquote>

<h3 id="font-face"><a href="#font-face" class="post__anchor">§</a> Нестандартные шрифты</h3>

<h4>***</h4>

<p>Перестаньте генерировать лишние форматы шрифтов font-face (ttf, eot, svg). Для современных браузеров достаточно форматов woff и&nbsp;woff2.</p>

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

<p>Порядок подключения имеет значение&nbsp;&mdash; первым в&nbsp;коде должен стоять woff2, чтобы браузер использовал его в&nbsp;случае поддержки.</p>

<p>Поддержка форматов: <a href="https://caniuse.com/#search=woff2" rel="noopener noreferrer" target="_blank">woff2</a>, <a href="https://caniuse.com/#search=woff" rel="noopener noreferrer" target="_blank">woff</a>.</p>

<h4>***</h4>

<p>Располагайте каждый шрифт в&nbsp;отдельной папке&nbsp;&mdash; будет больше порядка, если в&nbsp;проекте используется несколько нестандартных шрифтов.</p>

<h4>***</h4>

<p>В&nbsp;случае использования нескольких начертаний одного шрифта лучше всего подключать их&nbsp;с&nbsp;одним названием, но&nbsp;разной жирностью:</p>

```scss
/* Плохо, разные названия */
@font-face {
    font-family: 'FontName';
    src: url('../fonts/FontName/FontName.woff2') format('woff2'),
         url('../fonts/FontName/FontName.woff') format('woff');
}

@font-face {
    font-family: 'FontNameLight';
    src: url('../fonts/FontName/FontNameLight.woff2') format('woff2'),
         url('../fonts/FontName/FontNameLight.woff') format('woff');
}

@font-face {
    font-family: 'FontNameBold';
    src: url('../fonts/FontName/FontNameBold.woff2') format('woff2'),
         url('../fonts/FontName/FontNameBold.woff') format('woff');
}
```

```scss
/* Хорошо */
@font-face {
    font-family: 'FontName';
    src: url('../fonts/FontName/FontName.woff2') format('woff2'),
         url('../fonts/FontName/FontName.woff') format('woff');
    font-weight: 400;
}

@font-face {
    font-family: 'FontNameLight';
    src: url('../fonts/FontName/FontNameLight.woff2') format('woff2'),
         url('../fonts/FontName/FontNameLight.woff') format('woff');
    font-weight: 300;
}

@font-face {
    font-family: 'FontNameBold';
    src: url('../fonts/FontName/FontNameBold.woff2') format('woff2'),
         url('../fonts/FontName/FontNameBold.woff') format('woff');
    font-weight: 700;
}
```
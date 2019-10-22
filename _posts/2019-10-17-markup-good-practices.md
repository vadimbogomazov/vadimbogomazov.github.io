---
layout: post
title: Верстка — хорошие практики
description: Верстка — хорошие практики
date: 2019-10-17 20:00:00 +0300
categories: frontend
---

<p>Хаотичный разброс хороших практик по&nbsp;верстке, из&nbsp;собственного опыта.</p>

<blockquote class="citate">
    <p class="citate__text">Пишите код так, как будто сопровождать его будет склонный к&nbsp;насилию психопат, который знает, где вы&nbsp;живёте.</p>
    <footer class="citate__data">&mdash;&nbsp;<cite class="citate__author">Мартин Голдинг</cite></footer>
</blockquote>

<h3 id="translit"><a href="#translit" class="post__anchor">&sect;</a> Транслит</h3>

<p>Никогда не&nbsp;нужно использовать транслит в&nbsp;названиях css классов, переменных, функций и&nbsp;где&nbsp;бы то&nbsp;ни&nbsp;было в&nbsp;вашем коде. Это выглядит несерьезно, говорит о&nbsp;слабом знании английского языка и&nbsp;неуважении к&nbsp;коллегам. Еще хуже, когда миксуются английские названия c&nbsp;транслитом. Вспоминается функция из&nbsp;реального проекта на&nbsp;поддержке:</p>

```js
/* Ужасно */
function tovarPoCode() {
    /* ... */
}
```

<p>Не&nbsp;делайте так.</p>

<h3 id="font-face"><a href="#font-face" class="post__anchor">§</a> Нестандартные шрифты</h3>

<h4>***</h4>

<p>Не&nbsp;нужно генерировать лишние форматы шрифтов @font-face (ttf, eot, svg). Для современных браузеров достаточно форматов woff и&nbsp;woff2.</p>

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

<p>Генерация @font-face: <a href="https://transfonter.org/" rel="noopener noreferrer" target="_blank">Transfonter</a>.</p>

<h4>***</h4>

<p>Располагать каждый шрифт в&nbsp;отдельной папке хорошая практика, если в&nbsp;проекте используется несколько нестандартных шрифтов.</p>

<h4>***</h4>

<p>В&nbsp;случае использования нескольких начертаний одного шрифта лучше всего подключать их&nbsp;с&nbsp;одним названием, но&nbsp;разным значением <code class="code">font-weight</code>:</p>

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
    font-family: 'FontName';
    src: url('../fonts/FontName/FontNameLight.woff2') format('woff2'),
         url('../fonts/FontName/FontNameLight.woff') format('woff');
    font-weight: 300;
}

@font-face {
    font-family: 'FontName';
    src: url('../fonts/FontName/FontNameBold.woff2') format('woff2'),
         url('../fonts/FontName/FontNameBold.woff') format('woff');
    font-weight: 700;
}
```

<h3 id="modificator"><a href="#modificator" class="post__anchor">§</a> БЭМ модификаторы</h3>

<p>Модификатор по&nbsp;действию на&nbsp;блок или элемент должен соответствовать своему названию и&nbsp;быть без побочных эффектов, в&nbsp;противном случае он&nbsp;теряет возможность переиспользования и&nbsp;создает путаницу.</p>

```scss
/* Плохо, модификатор делает больше, чем должен */
.title {
    &_gradient {
        background: linear-gradient(180deg, rgba(218, 223, 230, 1) 40%, rgba(142, 157, 177, 1) 100%);
        color: #8e9db1;
        font-size: 6rem;
        margin: 0 0 0.5em;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
```

```scss
/* Хорошо */
.title {
    &_gradient {
        background: linear-gradient(180deg, rgba(218, 223, 230, 1) 40%, rgba(142, 157, 177, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
```

<h3 id="text"><a href="#text" class="post__anchor">§</a> Текст</h3>

<h4>***</h4>

<p>Текст в&nbsp;статике следует прогнать через типограф&nbsp;&mdash; минусы заменятся на&nbsp;тире, кавычки-лапки на&nbsp;кавычки-елочки, исчезнут висячие предлоги.</p>

<p><a href="https://www.artlebedev.ru/typograf/" rel="noopener noreferrer" target="_blank">Типограф Лебедева</a></p>

<h4>***</h4>

<p>Орфографические и&nbsp;пунктуационные ошибки в&nbsp;навигации, заголовках и&nbsp;других элементах макета, бросающихся в&nbsp;глаза, следует исправить самостоятельно.</p>
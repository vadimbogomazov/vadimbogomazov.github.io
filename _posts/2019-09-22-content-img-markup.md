---
layout: post
title:  "Разметка контентного изображения с подписью"
date:   2019-09-22 11:00:00 +0300
categories: frontend
published: false
---

Заметка для разметки контентного изображения

{% highlight html %}
<figure>
    <img src="http://placekitten.com/200/300" alt="Small picture of a kitten" />
    <figcaption>
        Small picture of a kitten, graciously shared by <a href="http://placekitten.com">placekitten.com</a>
    </figcaption>
</figure>
{% endhighlight %}

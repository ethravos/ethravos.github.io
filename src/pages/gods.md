---
title: Gods
layout: layouts/page.html
tag:
    - pages
---
---
<div class="page__link-list">
{% for gods in collections.gods %}
<div class="link-list__item"><a href="{{ gods.url }}">{{ gods.data.title}}</a></div>
{% endfor %}
<div>
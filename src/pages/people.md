---
title: People
layout: layouts/page.html
tag:
    - pages
---
---
<div class="page__link-list">
{% for people in collections.people %}
<div class="link-list__item"><a href="{{ people.url }}">{{ people.data.title}}</a></div>
{% endfor %}
<div>
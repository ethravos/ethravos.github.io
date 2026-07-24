---
title: Sessions
layout: layouts/page.html
tag:
    - pages
---
---
<div class="page__link-list">
{% for sessions in collections.sessions %}
<div class="link-list__item"><a href="{{ sessions.url }}">{{ sessions.data.title}}</a></div>
{% endfor %}
<div>
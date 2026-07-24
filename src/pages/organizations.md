---
title: Organizations
layout: layouts/page.html
tag:
    - pages
---
---
<div class="page__link-list">
{% for organizations in collections.organizations %}
<div class="link-list__item"><a href="{{ organizations.url }}">{{ organizations.data.title}}</a></div>
{% endfor %}
<div>
---
title: Locations
layout: layouts/page.html
tag:
    - pages
---
# {{ title }}

---

<div class="page__link-list">
{% for locations in collections.locations %}
<div class="link-list__item"><a href="{{ locations.url }}">{{ locations.data.title}}</a></div>
{% endfor %}
<div>
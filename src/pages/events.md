---
title: Events
layout: layouts/page.html
tag:
    - pages
---
# {{ title }}

---

<div class="page__link-list">
{% for events in collections.events %}
<div class="link-list__item"><a href="{{ events.url }}">{{ events.data.title}}</a></div>
{% endfor %}
<div>